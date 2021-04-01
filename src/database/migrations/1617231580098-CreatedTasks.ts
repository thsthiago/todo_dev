import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey
} from 'typeorm'

export class CreatedTasks1617231580098 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'tasks',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()'
          },
          {
            name: 'tasks',
            type: 'varchar'
          },
          {
            name: 'deadline',
            type: 'varchar'
          },
          {
            name: 'status',
            type: 'varchar'
          },
          {
            name: 'id_user',
            type: 'uuid'
          }
        ]
      })
    )

    await queryRunner.createForeignKey('tasks', new TableForeignKey({
      name: 'UserTasks',
      columnNames: ['id_user'],
      referencedColumnNames: ['id'],
      referencedTableName: 'users',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    }))
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('tasks', 'UserTasks')
    await queryRunner.dropTable('tasks')
  }
}
