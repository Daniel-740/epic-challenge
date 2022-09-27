import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react';
import { Home } from '../';

test('render home', () => {

     const  component = render(<Home />)
     expect(component).toMatchSnapshot();
})