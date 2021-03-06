import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import renderer from 'react-test-renderer';

const Link = ({page}) => {
  return <a href={page}>Instagram</a>
}

it('renders correctly', () => {
  const tree = renderer
    .create(<Link page="http://www.instagram.com" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
