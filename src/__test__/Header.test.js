import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { HashRouter as Router } from 'react-router-dom';
import Header from '../components/Header';

describe('Should have the text math magicians and the correct number of links', () => {
  //  Test for the Logo text
  it('should contain the link with text Math Magician', () => {
    render(
      <Router>
        <Header />
      </Router>
    );
    const linkElement = screen.getByRole('link', { name: 'Math Magicians' });
    expect(linkElement).toBeInTheDocument();
  });

  it('should contain the correct number of links', () => {
    render(
      <Router>
        <Header />
      </Router>
    );
    const linksArray = screen.getAllByRole('link');
    expect(linksArray).toHaveLength(4);
  });

  it('should render the Header correctly', () => {
    const domElement = render(
      <Router>
        <Header />
      </Router>
    );

    expect(domElement).toMatchSnapshot();
  });
});
