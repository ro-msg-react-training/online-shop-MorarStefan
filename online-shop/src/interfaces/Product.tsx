export default interface Product {
  _id: string;
  name: string;
  category: {
    name: string;
  };
  price: number;
}
