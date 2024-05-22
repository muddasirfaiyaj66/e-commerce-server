export type TVariant = {
  type: string;
  value: string;
};

export type TVariants = TVariant[];

export type TProduct = {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: TVariants;
  inventory: {
    quantity: number;
    inStock: boolean;
  };
};
