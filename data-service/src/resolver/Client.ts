import { Resolver, Root, FieldResolver, Ctx } from "type-graphql";
import { Account } from "../entity/Account";
import { Client } from "../entity/Client";
import { ApolloContext } from "../types/context";

@Resolver(Client)
export class ClientResolver {
  @FieldResolver()
  async accounts(@Root() client: Client, @Ctx() { dataSources }: ApolloContext): Promise<Account[]> {
    return dataSources.AccountsAPI.getAccounts(client.clientId);
  }
}
