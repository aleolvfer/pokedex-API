import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createPokemons1604265705227 implements MigrationInterface {
  
  public async up(queryRunner: QueryRunner): Promise<void> {
     await queryRunner.createTable( new Table({
       name: 'pokemons',
       columns: [
         {
           name: 'id',
           type: 'integer',
           unsigned: true,
           isPrimary: true,
           isGenerated: true,
           generationStrategy: 'increment'
         },
         {
           name: 'name',
           type: 'varchar'
         },
         {
          name: 'pokedex_number',
          type: 'integer'
         },
         {
           name: 'generation',
           type: 'integer'
         },
         {
           name: 'evolution_stage',
           type: 'integer'
         },
         {
           name: 'cross_generation',
           type: 'boolean',
           default: false
         },
         {
           name: 'type_one',
           type: 'varchar'
         },
         {
          name: 'type_two',
          type: 'varchar'
        },
        {
          name: 'attack',
          type: 'integer'
        },
        {
          name: 'defense',
          type: 'integer'
        },
        {
          name: 'stamina',
          type: 'integer'
        },
      ], 
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('pokemons');
  }

}
