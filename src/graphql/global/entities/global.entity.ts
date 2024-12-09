import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Global {

  @Field()
  @PrimaryGeneratedColumn()
  id: number

  @Field()
  @Column()
  name:string

}
