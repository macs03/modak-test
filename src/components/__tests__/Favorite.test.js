import * as React from "react";
import renderer from "react-test-renderer";

import Favorite from "../Favorite/Favorite";

it(`renders correctly`, () => {
  const tree = renderer
    .create(<Favorite itemId={446} onPressItem={() => {}} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
