import AccountsAPI from "../api/Accounts";
import TransactionsAPI from "../api/Transactions";

export interface DataSources {
  AccountsAPI: AccountsAPI;
  TransactionsAPI: TransactionsAPI;
  [key: string]: AccountsAPI | TransactionsAPI;
}

export interface ApolloContext {
  dataSources: DataSources;
}
