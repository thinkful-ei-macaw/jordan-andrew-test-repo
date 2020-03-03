import React from 'react';
import renderer from 'react-test-renderer';
import Card from './Card';

describe('<Card />', () => {
    it('renders the UI as expected', () => {

        const tree = renderer
            .create(<Card title="Title" content="content"/>)
            .toJSON();
        
        expect(tree).toMatchSnapshot();
    });
});