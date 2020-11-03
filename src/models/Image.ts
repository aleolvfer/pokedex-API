import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm'

import Pokemon from './Pokemon';

@Entity('images')
export default class Image{
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column() 
  path: string;

  @OneToOne(() => Pokemon, pokemon => pokemon.image)
  @JoinColumn({ name: 'pokemon_id'})
  pokemon: Pokemon;
}
