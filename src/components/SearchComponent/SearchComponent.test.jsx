import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import SearchComponent from './SearchComponent';

const onChange = jest.fn();

describe('SearchContact component', () => {
  it('SearchContact renders', () => {
    render(
      <SearchComponent value="" onChange={onChange}>
        children
      </SearchComponent>,
    );

    expect(screen.getByText(/children/i)).toBeInTheDocument();
  });

  it('SearchContact renders without children', () => {
    render(<SearchComponent value="" onChange={onChange} />);

    expect(screen.getByText(/search/i)).toBeInTheDocument();
  });

  it('SearchContact renders without placeholder', () => {
    render(<SearchComponent value="" onChange={onChange} />);

    expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument();
  });

  it('SearchContact renders custom placeholder', () => {
    render(<SearchComponent value="" onChange={onChange} placeholder='Input name'/>);

    expect(screen.getByPlaceholderText(/input name/i)).toBeInTheDocument();
  });

  it('onChange works', () => {
    render(
      <SearchComponent value="" onChange={onChange}>
        children
      </SearchComponent>,
    );

    userEvent.type(screen.getByRole('textbox'), 'Name')
    expect(onChange).toHaveBeenCalled()
  })

  it('Dynamic filledCorrect style works', () => {
    render(<SearchComponent value="Jack" onChange={onChange}/>);
    expect(screen.getByRole('textbox')).toHaveClass('input')
    expect(screen.getByRole('textbox')).toHaveClass('filledCorrect')

  })

   it('Dynamic filledError style works', () => {
    render(<SearchComponent value="J" onChange={onChange}/>);
    expect(screen.getByRole('textbox')).toHaveClass('input')
    expect(screen.getByRole('textbox')).toHaveClass('filledError')

   })
});
