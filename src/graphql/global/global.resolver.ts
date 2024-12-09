import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { GlobalService } from './global.service';
import { Global } from './entities/global.entity';
import { CreateGlobalInput } from './dto/create-global.input';
import { UpdateGlobalInput } from './dto/update-global.input';

@Resolver(() => Global)
export class GlobalResolver {
  constructor(private readonly globalService: GlobalService) {}

  @Mutation(() => Global)
  createGlobal(@Args('createGlobalInput') createGlobalInput: CreateGlobalInput) {
    return this.globalService.create(createGlobalInput);
  }

  @Query(() => [Global], { name: 'global' })
  findAll() {
    return this.globalService.findAll();
  }

  @Query(() => Global, { name: 'global' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.globalService.findOne(id);
  }

  @Mutation(() => Global)
  updateGlobal(@Args('updateGlobalInput') updateGlobalInput: UpdateGlobalInput) {
    return this.globalService.update(updateGlobalInput.id, updateGlobalInput);
  }

  @Mutation(() => Global)
  removeGlobal(@Args('id', { type: () => Int }) id: number) {
    return this.globalService.remove(id);
  }
}
