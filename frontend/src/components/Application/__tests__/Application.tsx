import React from "react";
import renderer from "react-test-renderer";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Application from "../Application";

describe("Application component", () => {
  test("snapshot renders", () => {
    const tree = renderer
      .create(
        <MemoryRouter initialEntries={["/Application/1"]}>
          <Routes>
            <Route path="/Application/:applicationID" element={<Application />} />
          </Routes>
        </MemoryRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
