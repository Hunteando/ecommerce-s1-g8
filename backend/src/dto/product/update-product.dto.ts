import { CreateBrandDto } from './create-brand.dto';
import { CreateCategoryDto } from './create-category.dto';
import { CreateColorDto } from './create-color.dto';
import { CreateProductDto } from './create-product.dto';
import { CreateTasDto } from './create-tag.dto';
import { CreateTypeproDto } from './create-typepro.dto';

export class UpdateProductDto extends CreateProductDto {
	readonly id!: number;
	readonly brand!: CreateBrandDto;
	readonly category!: CreateCategoryDto;
	readonly typepro!: CreateTypeproDto;
	readonly tags!: CreateTasDto[];
	readonly colors!: CreateColorDto[];
}
