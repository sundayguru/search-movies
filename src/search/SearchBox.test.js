import React from 'react'
import SearchBox from './SearchBox'
import renderer from 'react-test-renderer'


test('<SearchBox />', () => {
    const component = renderer.create(
        <SearchBox search="spider" movies={[]} />,
    );
    
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
});
