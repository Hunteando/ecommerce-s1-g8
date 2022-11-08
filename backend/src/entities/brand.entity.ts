import {
	BaseEntity,
	Column,
	Entity,
	OneToMany,
	PrimaryGeneratedColumn,
} from 'typeorm';
import { Product } from './product.entity';

@Entity()
export class Brand extends BaseEntity {
	@PrimaryGeneratedColumn()
	readonly id!: number;

	@Column({ type: 'varchar', length: 50, unique: true })
	readonly name!: string;

	@OneToMany(() => Product, product => product.brand)
	readonly product!: Product;
}
