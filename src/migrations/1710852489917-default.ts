import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1710852489917 implements MigrationInterface {
    name = 'Default1710852489917'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`login\` (\`id\` int NOT NULL AUTO_INCREMENT, \`email\` text NOT NULL, \`password\` text NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`login\``);
    }

}
