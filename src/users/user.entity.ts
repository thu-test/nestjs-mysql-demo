import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsString, MaxLength, MinLength, IsNumber } from 'class-validator';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  @MinLength(1)
  @MaxLength(50)
  @IsString()
  name: string;

  @Column()
  @IsNumber()
  age: string;
}