import { z } from 'zod';

const variantValidationSchema = z.object({
  type: z.string().nonempty({ message: 'Type is required' }),
  value: z.string().nonempty({ message: 'Value is required' }),
});

// Define the Zod schema for TProduct
const productValidationSchema = z.object({
  name: z.string().nonempty({ message: 'Name is required' }),
  description: z.string().nonempty({ message: 'Description is required' }),
  price: z.number().positive({ message: 'Price must be a positive number' }),
  category: z.string().nonempty({ message: 'Category is required' }),
  tags: z
    .array(z.string().nonempty({ message: 'Tag cannot be empty' }))
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
