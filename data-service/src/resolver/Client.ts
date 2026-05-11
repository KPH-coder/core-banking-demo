import { Resolver, Root, FieldResolver, Ctx } from "type-graphql";
import { Account } from "../entity/Account";
import { Client } from "../entity/Client";
import { GraphQLContext } from "../types/context";

@Resolver(Client)
export class ClientResolver {
  @FieldResolver()
  async accounts(@Root() client: Client, @Ctx() { dataSources }: GraphQLContext): Promise<Account[]> {
    return dataSources.AccountsAPI.getAccounts(client.clientId);
  }
}
