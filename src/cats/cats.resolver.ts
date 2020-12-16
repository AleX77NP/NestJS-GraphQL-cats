import { CatInput } from './cat.input';
import { CatType } from './dto/create-cat.dto';
import { Mutation, Query, Resolver , Args} from "@nestjs/graphql";
import { CatsService } from "./cats.service";

@Resolver()
export class CatsResolver {
    constructor(
    private catsService: CatsService,
  ) {}

  @Query((returns) => String)
  async hello() {
    return 'hello'
  }

  @Query(() => [CatType]) 
  async cats() {
      return this.catsService.findAll()
  }

  @Mutation(() => CatType)
  async create(@Args('input') input: CatInput) {
      return this.catsService.create(input)
  }


}