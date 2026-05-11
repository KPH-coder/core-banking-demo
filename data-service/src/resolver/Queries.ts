import { Resolver, Query, Arg, Ctx } from "type-graphql";
import { Transaction } from "../entity/Transaction";
import { Account } from "../entity/Account";
import { Client } from "../entity/Client";
import { GraphQLContext } from "../types/context";

@Resolver()
export class QueriesResolver {
  @Query(() => Client)
  async client(@Arg("id") clientId: string, @Ctx() { dataSources }: GraphQLContext): Promise<Client> {
    return dataSources.AccountsAPI.getClient(clientId);
  }

  @Query(() => [Account])
  async accounts(@Arg("clientId") clientId: string, @Ctx() { dataSources }: GraphQLContext): Promise<Account[]> {
    return dataSources.AccountsAPI.getAccounts(clientId);
  }

  @Query(() => [Transaction])
  async transactions(@Arg("accountId") accountId: number, @Ctx() { dataSources }: GraphQLContext): Promise<Transaction[]> {
    return dataSources.TransactionsAPI.getTransactions(accountId);
  }
}
