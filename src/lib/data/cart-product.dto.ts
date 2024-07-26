import type { ProductDto } from "../dto/product.dto";

export interface CartProductDto {
  product: ProductDto;
  quantity: number;
}
