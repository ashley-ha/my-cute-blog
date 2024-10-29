import { Resolver, Query } from "type-graphql";
import { Me } from "./type-defs";
import { HOME } from "../data/home";

@Resolver(() => Me)
export class MeResolver {
  @Query(() => Me)
  me(): Me {
    return HOME as any;
  }
}
