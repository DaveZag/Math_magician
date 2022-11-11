import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '../components/Footer';

describe('Tests for the Footer component', () => {
  it('Should render the Footer properly', () => {
    const footer = render(<Footer />);
    expect(footer).toMatchSnapshot();
  });

  it('should contain the link to the author gitHub profile', () => {
    render(<Footer />);
    const gitHubLink = screen.getByRole('link');
    expect(gitHubLink).toBeInTheDocument();
    expect(gitHubLink).toHaveAttribute('href', 'https://github.com/DaveZag');
  });
});
