export default interface Product {
  name: string;
  description: string;
  category: {
    name: string;
    description: string;
  };
  supplier: {
    name: string;
  };
  price: number;
  weight: number;
  imageUrl: string;
}
