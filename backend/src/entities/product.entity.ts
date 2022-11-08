import {
	BaseEntity,
	Column,
	CreateDateColumn,
	Entity,
	JoinTable,
	ManyToMany,
	ManyToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';
import { Brand } from './brand.entity';
import { Category } from './category.entity';
import { Color } from './color.entity';

@Entity()
export class Product extends BaseEntity {
	@PrimaryGeneratedColumn()
	readonly id!: number;

	@Column({ type: 'varchar', length: 100, unique: true })
	readonly name!: string;

	@Column({ type: 'float' })
	readonly price!: number;

	@Column({ type: 'varchar', length: 255 })
	readonly image_link!: string;

	@Column({ type: 'text' })
	readonly description!: string;

	@ManyToOne(() => Brand, brand => brand.product, {
		eager: true, // Trae explicita la propiedad brand en la consulta
		cascade: true, // Si no existe el valor en la tabla lo crea
	})
	readonly brand!: Brand;

	@ManyToOne(() => Category, category => category.products, {
		eager: true, // Trae explicita la propiedad brand en la consulta
		cascade: true, // Si no existe el valor en la tabla lo crea
	})
	readonly category!: Category;

	@ManyToMany(() => Color)
	@JoinTable({ name: 'product_color' })
	readonly colors!: Color[];

	@CreateDateColumn()
	readonly created_at!: Date;

	@UpdateDateColumn()
	readonly updated_at!: Date;
}
