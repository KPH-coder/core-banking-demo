import AccountsAPI from "../api/Accounts";
import TransactionsAPI from "../api/Transactions";
import { DataSources } from "../types/context";

export default (): DataSources => {
  return {
    AccountsAPI: new AccountsAPI(),
    TransactionsAPI: new TransactionsAPI(),
  };
};
