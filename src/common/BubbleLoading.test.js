import React from 'react'
import BubbleLoading from './BubbleLoading'
import renderer from 'react-test-renderer'


test('<SearchBox />', () => {
  const component = renderer.create(
    <BubbleLoading loading={true} />,
  );

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()

  const componentNotLoading = renderer.create(
    <BubbleLoading loading={false} />,
  );
  let treeNotLoading = componentNotLoading.toJSON()
  expect(treeNotLoading).toMatchSnapshot()
});
