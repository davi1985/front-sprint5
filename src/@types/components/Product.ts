export type ProductType = {
  sku: string;
  image: string;
  name: string;
  price: string;
};

export type Products = {
  products: Array<ProductType>;
};
