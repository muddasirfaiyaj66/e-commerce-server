import { z } from 'zod';

const variantValidationSchema = z.object({
  type: z.string({ message: 'Type is required' }),
  value: z.string({ message: 'Value is required' }),
});

const productValidationSchema = z.object({
  name: z.string({ message: 'Name is required' }),
  description: z.string({ message: 'Description is required' }),
  price: z.number().positive({ message: 'Price must be a positive number' }),
  category: z.string({ message: 'Category is required' }),
  tags: z
    .array(z.string({ message: 'Tag cannot be empty' }))
    .nonempty({ message: 'At least one tag is required' }),
  variants: z
    .array(variantValidationSchema)
    .nonempty({ message: 'At least one variant is required' }),
  inventory: z.object({
    quantity: z
      .number()
      .int()
      .nonnegative({ message: 'Quantity must be a non-negative integer' }),
    inStock: z.boolean().refine((val) => val === true || val === false, {
      message: 'In stock status is required',
    }),
  }),
});

export default productValidationSchema;
