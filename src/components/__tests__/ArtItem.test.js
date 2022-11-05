import * as React from "react";
import renderer from "react-test-renderer";

import ArtItem from "../ArtItem/ArtItem";

it(`renders correctly`, () => {
  const item = {
    image_id: 345,
    artist_display: "tests",
    date_display: "tests",
    thumbnail: {
      alt_text: "test"
    }
  };

  const tree = renderer
    .create(<ArtItem item={item} onPressItem={() => {}} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
