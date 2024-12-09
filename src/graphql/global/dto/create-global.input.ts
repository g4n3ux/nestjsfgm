import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateGlobalInput {

  @Field()
  name: string
}
