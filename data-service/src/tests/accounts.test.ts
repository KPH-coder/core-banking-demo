import "reflect-metadata";
import { gql } from "apollo-server-express";
import { mockHandlers, setupMockServer, createGraphQLTestClient } from "./testUtils";
import accountsMock from "./mock/accounts.json";

setupMockServer(mockHandlers.accounts(), mockHandlers.transactions());

test("test Accounts schema and resolver", async () => {
  const { query } = await createGraphQLTestClient();
  const { data } = await query({
    query: gql`
      {
        accounts(clientId: "B12456") {
          accountId
          frequency
          createDate
          transactions {
            accountId
            accountIban
            type
            amount
            balance
            amount
            transId
          }
        }
      }
    `,
  });
  expect(data).toEqual({ accounts: accountsMock });
});
