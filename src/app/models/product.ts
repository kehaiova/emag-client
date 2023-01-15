import { ProductImage } from './productimage';
import { SubCategory } from './subcategory';

export interface Product {
  id: number;
  name: string;
  subCategory: SubCategory;
  brand: string;
  model: String;
  price: number;
  discountedPrice: number;
  description: string;
  quantity: number;
  warrantyMonths: number;
  addedAt: Date;
  deletedAt: Date;
  productRating: number;
  productImages: ProductImage[];
}
