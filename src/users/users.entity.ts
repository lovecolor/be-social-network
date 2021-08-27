import { Column, Entity, PrimaryGeneratedColumn, Timestamp } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({
    type: 'varchar',
  })
  firstName: string;
  @Column({
    type: 'varchar',
  })
  lastName: string;
  @Column({
    type: 'varchar',
  })
  phone: string;
  @Column({
    type: 'date',
  })
  birthday: Date;
  @Column({
    type: 'varchar',
  })
  urlImage: string;
  @Column({
    type: 'timestamp',
  })
  created_at: Timestamp;
}
