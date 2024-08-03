import { Product } from "~/models/Product";

export type CartItem = {
  product_id: string,
  product: Product,
  count: number,
}

export type Cart = {
  id: string,
  user_id: string,
  created_at: string,
  updated_at: string,
  items: CartItem[],
}
