export type Product = {
  sku: string;
  title: string;
  description: string;
  saleUnit: string;
  unitPrice: number;
  image: string;
};

export type Parameter = {
  description: string;
  unitPrice: number;
  quantity: number;
};

export interface CartItem extends Product {
  quantity: number;
  parameters?: Record<string, Parameter>;
}
