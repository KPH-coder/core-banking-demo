import React from "react";
import renderer from "react-test-renderer";
import { MemoryRouter } from "react-router-dom";
import Main from "../Main";

describe("Main component", () => {
  test("snapshot renders", () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <Main />
        </MemoryRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
