import { DataSource } from "apollo-datasource";
import AccountsAPI from "../api/Accounts";
import TransactionsAPI from "../api/Transactions";

export interface DataSources {
  [key: string]: DataSource;
  AccountsAPI: AccountsAPI;
  TransactionsAPI: TransactionsAPI;
}

export interface GraphQLContext {
  dataSources: DataSources;
}
