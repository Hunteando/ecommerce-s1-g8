import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Color extends BaseEntity {
	@PrimaryGeneratedColumn()
	readonly id!: number;

	@Column({ type: 'varchar', length: 50 })
	readonly hex_value!: string;

	@Column({ type: 'varchar', length: 100 })
	readonly colour_name!: string;
}
