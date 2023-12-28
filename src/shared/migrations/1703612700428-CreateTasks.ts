import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTasks1703612700428 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "tasks",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          { name: "name", type: "varchar", length: "100", isNullable: false },
          { name: "description", type: "text" },
          { name: "date", type: "date" },
          { name: "time_start", type: "time" },
          { name: "time_expected_end", type: "time", isNullable: true },
          { name: "time_end", type: "time", isNullable: true },
          { name: "status", type: "varchar", default: "'Not started'" },
          {
            name: "created_at",
            type: "timestamp",
            default: "CURRENT_TIMESTAMP",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "CURRENT_TIMESTAMP",
            onUpdate: "CURRENT_TIMESTAMP",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("tasks");
  }
}
