import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('pokemons')
export default class Pokemon{

  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  pokedex_number: number;

  @Column()
  generation: number;

  @Column()
  evolution_stage: number;

  @Column()
  cross_generation: boolean;

  @Column()
  type_one: string;

  @Column()
  type_two: string;

  @Column()
  attack: number;

  @Column()
  defense: number;

  @Column()
  stamina: number;
}