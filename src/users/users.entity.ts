import { Column, Entity, PrimaryGeneratedColumn, Timestamp } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  phone: string;

  @Column({
    type: 'date',
  })
  birthday: Date;

  @Column()
  urlImage: string;

  @Column({
    type: 'timestamp',
  })
  created_at: Timestamp;
}
