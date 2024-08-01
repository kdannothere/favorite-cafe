export interface Product {
  id: string;
  imgUrl: string;
  price: number;
  discount: number;
  shops: string[];
  tags: string[];
  name: string;
  ingredients: string[];
  discountUntil: string;
  isNew: boolean;
  color: string[];
  size: string[];
  weight: number;
  calories: number;
}
