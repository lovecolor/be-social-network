import { MigrationInterface, QueryRunner } from 'typeorm';

export class migrationUser1630657853507 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE Users
    (
      id int identity not null ,
      firstName nvarchar(10) not null,
      lastName nvarchar(10) not null,
      phone varchar(13) not null,
      birthday Date not null,
      urlImage varchar,
      created_at timestamp,
      PRIMARY KEY(id)
    )`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`drop table Users`);
  }
}
