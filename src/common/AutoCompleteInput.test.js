import React from 'react'
import AutoCompleteInput from './AutoCompleteInput'
import renderer from 'react-test-renderer'


test('<SearchBox />', () => {
  const component = renderer.create(
    <AutoCompleteInput items={['a', 'b']} />,
  );

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});
