import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm'

import Image from './Image'
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
  
  @OneToOne(() => Image, image => image.pokemon, {
    cascade: ['insert', 'update']
  })
  //@JoinColumn( { name: 'id'} )
  image: Image;
  
}