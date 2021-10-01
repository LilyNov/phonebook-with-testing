import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import SearchContact from './SearchContact';

const onChange = jest.fn();

describe('SearchContact component', () => {
  it('SearchContact renders', () => {
    render(
      <SearchContact value="" onChange={onChange}>
        children
      </SearchContact>,
    );

    expect(screen.getByText(/children/i)).toBeInTheDocument();
  });

  it('SearchContact renders without children', () => {
    render(<SearchContact value="" onChange={onChange} />);

    expect(screen.getByText(/search/i)).toBeInTheDocument();
  });

  it('SearchContact renders without placeholder', () => {
    render(<SearchContact value="" onChange={onChange} />);

    expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument();
  });

  it('SearchContact renders custom placeholder', () => {
    render(<SearchContact value="" onChange={onChange} placeholder='Input name'/>);

    expect(screen.getByPlaceholderText(/input name/i)).toBeInTheDocument();
  });

  it('onChange works', () => {
    render(
      <SearchContact value="" onChange={onChange}>
        children
      </SearchContact>,
    );

    userEvent.type(screen.getByRole('textbox'), 'Name')
    expect(onChange).toHaveBeenCalled()
  })

  it('Dynamic filledCorrect style works', () => {
    render(<SearchContact value="Jack" onChange={onChange}/>);
    expect(screen.getByRole('textbox')).toHaveClass('input')
    expect(screen.getByRole('textbox')).toHaveClass('filledCorrect')

  })

   it('Dynamic filledError style works', () => {
    render(<SearchContact value="J" onChange={onChange}/>);
    expect(screen.getByRole('textbox')).toHaveClass('input')
    expect(screen.getByRole('textbox')).toHaveClass('filledError')

  })
});
