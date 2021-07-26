import { Entity, Column, PrimaryGeneratedColumn, Timestamp } from 'typeorm';

@Entity()
export class Shop {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ default: true })
  isActive: boolean;

  @Column({type:"timestamp"})
  created_at: Date;

  @Column({type:"timestamp"})
  updated_at: Date;
}
