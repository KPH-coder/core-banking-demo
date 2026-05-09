import "reflect-metadata";
import { gql } from "apollo-server-express";
import { mockHandlers, setupMockServer, createGraphQLTestClient } from "./testUtils";
import transactionsMock from "./mock/transactions.json";

setupMockServer(mockHandlers.transactions());

test("test Transactions schema and resolver", async () => {
  const { query } = await createGraphQLTestClient();
  const { data } = await query({
    query: gql`
      {
        transactions(accountId: 12286356) {
          accountId
          accountIban
          type
          amount
          balance
          amount
          transId
        }
      }
    `,
  });
  expect(data).toEqual({ transactions: transactionsMock });
});
