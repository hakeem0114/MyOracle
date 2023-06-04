//React imports
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

//React Component Imports
import App from '../../App';

//Start-up test
describe('something truthy and falsy', () => {
  it('true to be true', () => {
    expect(true).toBe(true);
  });

  it('false to be false', () => {
    expect(false).toBe(false);
  });
});


//App.jsx Screen Render Test
describe('App', () => {
  it('renders App component', () => {
    render(<App />);

    screen.debug();
  });
});

//Check static texts in search
describe('App', () => {
  it('queries for IP in textbox', () => {
    render(<App />);

    expect(screen.queryByPlaceholderText('Query for IP/Domain')).toBeInTheDocument();
  });
});

//Check form submission
describe('<App>', () => {
  it('renders items', () => {

    // You can get the query methods directly from render by destructuring from App.jsx
    // const { getAllByRole } = render(<App items={items} />)
    render(<App/>)
    // //Render the react jest list items
    // const listItems = getAllByRole('listitem')

    const items = [
      {type: "text" },
      {name:'ipAddress'} ,
      {id: 'ipAddress'},
      {placeholder: 'Query for IP/Domain'}
    ]

    const listitems = screen.getByTestId('id1')

    
    //expect(screen.getAllByRole('listitem').length).toBe(1);
    expect(listitems).toBeInTheDocument()
  });
});

