import {
	BaseEntity,
	Column,
	CreateDateColumn,
	Entity,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Product extends BaseEntity {
	@PrimaryGeneratedColumn()
	readonly id: number;

	@Column({ type: 'varchar', length: 100, unique: true })
	readonly name: string;

	@Column({ type: 'float' })
	readonly price: number;

	@Column({ type: 'varchar', length: 255 })
	readonly image_link: string;

	@Column({ type: 'text' })
	readonly description: string;

	@CreateDateColumn()
	readonly created_at: Date;

	@UpdateDateColumn()
	readonly updated_at: Date;
}
