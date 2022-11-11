import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Quotes from '../pages/Quotes';

describe('Tests for the Quotes page',()=>{
    it('Should render the Quotes page properly',()=>{
        const quotesPage = render(<Quotes/>);
        expect(quotesPage).toMatchSnapshot()
    })

    it('should contain the quote container div',()=>{
        render(<Quotes/>);
        const quotesContainer = screen.getByTestId('quote container');
        expect(quotesContainer).toBeInTheDocument();
    })

    it('should render a radom quote when button "Random quote" is clicked',()=>{
        render(<Quotes/>);
        const quoteBtn = screen.getByRole('button');
        const quote = screen.getByTestId('quote')

        fireEvent.click(quoteBtn);

        expect(quote.textContent).toBeDefined()
    })
})
