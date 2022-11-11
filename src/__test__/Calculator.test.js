import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Calculator from '../pages/Calculator';

describe('Tests for the calculator component and functions it calls', () => {
  it('Should render the calculator page correctly', () => {
    const calcPage = render(<Calculator />);
    expect(calcPage).toMatchSnapshot();
  });

  it('Should render the calculator', () => {
    render(<Calculator />);
    const calculator = screen.getByTestId('calculator');
    expect(calculator).toMatchSnapshot();
  });

  it("should render the button's text on the calculator screen when clicked", () => {
    render(<Calculator />);
    const button = screen.getByRole('button', { name: '7' });
    const calcScreen = screen.getByTestId('screen');

    fireEvent.click(button);
    expect(calcScreen.value.trim()).toBe('7');
  });

  it('should render the number to be added', () => {
    render(<Calculator />);
    const button8 = screen.getByRole('button', { name: '5' });
    const buttonAdd = screen.getByRole('button', { name: '+' });
    const button9 = screen.getByRole('button', { name: '9' });

    const calcScreen = screen.getByTestId('screen');

    fireEvent.click(button8);
    fireEvent.click(buttonAdd);
    fireEvent.click(button9);
    expect(calcScreen.value.trim()).toBe('5 + 9');
  });

  it('should correctly add the inputted numbers', () => {
    render(<Calculator />);
    const button8 = screen.getByRole('button', { name: '8' });
    const buttonAdd = screen.getByRole('button', { name: '+' });
    const button9 = screen.getByRole('button', { name: '9' });
    const buttonEquals = screen.getByRole('button', { name: '=' });

    const calcScreen = screen.getByTestId('screen');

    fireEvent.click(button8);
    fireEvent.click(buttonAdd);
    fireEvent.click(button9);
    fireEvent.click(buttonEquals);
    expect(calcScreen.value.trim()).toBe('17');
  });

  it('should correctly multiply the inputted numbers', () => {
    render(<Calculator />);
    const button5 = screen.getByRole('button', { name: '5' });
    const buttonMultiply = screen.getByRole('button', { name: 'x' });
    const button8 = screen.getByRole('button', { name: '8' });
    const buttonEquals = screen.getByRole('button', { name: '=' });

    const calcScreen = screen.getByTestId('screen');

    fireEvent.click(button5);
    fireEvent.click(buttonMultiply);
    fireEvent.click(button8);
    fireEvent.click(buttonEquals);
    expect(calcScreen.value.trim()).toBe('40');
  });
});
