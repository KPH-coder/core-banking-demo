import AccountsAPI from "../api/Accounts";
import TransactionsAPI from "../api/Transactions";

export interface DataSources {
  AccountsAPI: AccountsAPI;
  TransactionsAPI: TransactionsAPI;
}

export interface GraphQLContext {
  dataSources: DataSources;
}
