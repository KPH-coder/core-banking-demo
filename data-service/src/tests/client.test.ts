import "reflect-metadata";
import { gql } from "apollo-server-express";
import { mockHandlers, setupMockServer, createGraphQLTestClient } from "./testUtils";
import clientMock from "./mock/client.json";

setupMockServer(mockHandlers.client(), mockHandlers.accounts(), mockHandlers.transactions());

test("test Client schema and resolver", async () => {
  const { query } = await createGraphQLTestClient();
  const { data } = await query({
    query: gql`
      {
        client(id: "B12456") {
          clientId
          firstName
          lastName
          socialSecurityNumber
          sex
          dateOfBirth
          accounts {
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
      }
    `,
  });
  expect(data).toEqual({ client: clientMock });
});
