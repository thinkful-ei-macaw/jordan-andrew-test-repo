import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import './Card.css';


describe ('<App />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
    
        ReactDOM.render(<List
            header="First list"
            cards={[
                { id: 1, title: "First card", content: "lorem ipsum" },
                { id: 2, title: "Second card", content: "lorem ipsum stuff"}
            ]}
          />, div);
    
        ReactDOM.unmountComponentAtNode(div);
    })
});