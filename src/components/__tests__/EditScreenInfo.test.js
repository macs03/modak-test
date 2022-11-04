import * as React from "react";
import renderer from "react-test-renderer";

import EditScreenInfo from "../EditScreenInfo";

it(`renders correctly`, () => {
  const tree = renderer.create(<EditScreenInfo path="edit" />).toJSON();

  expect(tree).toMatchSnapshot();
});
