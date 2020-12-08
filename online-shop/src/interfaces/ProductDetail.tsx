export default interface Product {
  _id: string;
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
