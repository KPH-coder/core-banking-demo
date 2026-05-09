import { SetupServerApi, setupServer } from "msw/node";
import { rest, RequestHandler } from "msw";
import { createTestClient, ApolloServerTestClient } from "apollo-server-testing";
import { config } from "../config/config";
import { createServer } from "../utils/createServer";
import clientMock from "./mock/client.json";
import accountsMock from "./mock/accounts.json";
import transactionsMock from "./mock/transactions.json";

export const mockHandlers = {
  client: (clientId = "B12456"): RequestHandler =>
    rest.get(`${config.accounts.url}/clients/${clientId}`, (_req, res, ctx) => res(ctx.json(clientMock))),

  accounts: (clientId = "B12456"): RequestHandler =>
    rest.get(`${config.accounts.url}/clients/${clientId}/accounts`, (_req, res, ctx) => res(ctx.json(accountsMock))),

  transactions: (): RequestHandler =>
    rest.get(`${config.transactions.url}/transactions`, (_req, res, ctx) => res(ctx.json(transactionsMock))),
};

export const setupMockServer = (...handlers: RequestHandler[]): SetupServerApi => {
  const server = setupServer(...handlers);

  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  return server;
};

export const createGraphQLTestClient = async (): Promise<ApolloServerTestClient> => {
  const server = await createServer();
  return createTestClient(server);
};
