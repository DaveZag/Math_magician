import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../pages/Home';

describe('Tests for the Home page', () => {
  it('Should render the home page properly', () => {
    const homePage = render(<Home />);
    expect(homePage).toMatchSnapshot();
  });

  it('should contain the calculating.png image in the hero section', () => {
    render(<Home />);
    const heroImage = screen.getByAltText('man seated doing math');
    expect(heroImage).toBeInTheDocument();
  });
});
