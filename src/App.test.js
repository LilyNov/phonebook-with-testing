import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

/*
Search variants:
  getBy:                    queryby:                    findBy:
- getByText               - queryByText               - findByText
- getByRole               - queryByRole               - findByRole
- getByLabelText          - queryByLabelText          - findByLabelText
- getByPlaceholderText    - queryByPlaceholderText    - findByPlaceholderText
- getByAltText            - queryByAltText            - findByAltText
- getByDisplayValue       - queryByDisplayValue       - findByDisplayValue
- getAllBy                - queryAllBy                - findAllBy
*/

/*
Assertive Functions:
- toBeDisabled            - toBeEnabled               - toBeEmpty
- toBeEmptyDOMElement     - toBeInTheDocument         - toBeInvalid
- toBeRequired            - toBeValid                 - toBeVisible
- toContainElement        - toContainHTML             - toHaveAttribute
- toHaveClass             - toHaveFocus               - toHaveFormValues
- toHaveStyle             - toHaveTextContent         - toHaveValue
- toHaveDisplayValue      - toBeChecked               - toBePartiallyChecked
- toHaveDescription
*/

describe('App', () => {
  it('renders App component', () => {
    // render(<App />);
    // screen.debug(); //посмотреть на разметку в консоли (снэпшот)
    // expect(screen.getByText(/Search:/i)).toBeInTheDocument();

    render(<App />);
    expect(screen.getByText(/Search:/i)).toBeInTheDocument(); //проверить есть ли в компоненте текст Search:
    expect(screen.getByRole('textbox')).toBeInTheDocument(); //проверить есть ли textbox в разметке ( в выпадающем списке много вариантов)
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument(); //проверить наличие label в разметке с текстом search (/search/i регулярное выражение не чуствительное к регистру)
    expect(screen.getByPlaceholderText('search text...')).toBeInTheDocument(); //проверить наличие Placeholder в разметке с текстом 'search text...'
    expect(screen.getByAltText('search image')).toBeInTheDocument(); //проверить наличие данного текста в атребуте alt у <img />
    expect(screen.getByDisplayValue('')).toBeInTheDocument(); //проверить начальное value у input, при инициализации приложения оно пустое в useState
    expect(screen.queryByText(/Search for React/i)).toBeNull(); //при инициализации приложения данного текста еще нет, так как он формируется динамически, проверка прошла
    expect(screen.getByAltText(/search image/i)).toHaveClass('image'); //найти img с alt "search image" и проверить есть ли у него стили с именем 'image'
    // expect(screen.getByLabelText(/search/i)).toBeRequired(); //найти элемент с label 'search' и проверить в этом элементе наличие атрибута required
    expect(screen.getByLabelText(/search/i)).not.toBeRequired(); //найти элемент с label 'search' и проверить в этом элементе НЕТ атрибута required
    expect(screen.getByLabelText(/search/i)).toBeEmptyDOMElement(); //элемент input пустой - не имеет ни текста ни других вложенных элементов
    expect(screen.getByLabelText(/search/i)).toHaveAttribute('id'); ///элемент input имеет атрибут id
  });

  //ASYNC
  // it('renders async text in App component', async () => {
  //   render(<App />);
  //   expect(screen.queryByText(/Logged in as/i)).toBeNull(); //говорим тесту, что изначально такой строки нет
  //   // screen.debug();
  //   expect(await screen.findByText(/Logged in as/i)).toBeInTheDocument(); //говорим тесту, что когда выполнится соответствующий код, должна появиться данная строка
  //   // screen.debug();
  // });

  test('events in App component', async () => {
    render(<App />);
    // дождаться выполнение асинхронной операции в useEffect
    await screen.findByText(/Logged in as/i);
    // сначала строки Searches for React не существует в разметке
    expect(screen.queryByText(/Searches for React/)).toBeNull();
    // проверяем событие и передаем value: 'React'

    // 1й вариант
    // fireEvent.change(screen.getByRole('textbox'), {
    //   target: { value: 'React' },
    // });

    // 2й вариант
    userEvent.type(screen.getByRole('textbox'), 'React'); //находит нужный инпут и вводит туда текст 'React'

    // строка Searches for React должна быть в документе (в разметке)
    expect(screen.queryByText(/Searches for React/)).toBeInTheDocument();
  });
});

describe('events', () => {
  it('checkbox click', () => {
    // событие - это функция
    const onChange = jest.fn();

    // даем имя нужному элементу
    const { container } = render(<input type="checkbox" onChange={onChange} />);

    // получаем доступ к первому инпут-чеку
    const checkbox = container.firstChild;

    // при инициализации не должен быть чекнут
    expect(checkbox).not.toBeChecked();

    // должен произойти клик по чекбоксу
    fireEvent.click(checkbox);
    // функция должна отработать один раз
    expect(onChange).toHaveBeenCalledTimes(1);
    // или второй вариант проверки чека
    expect(checkbox).toBeChecked();
  });

  it('input focus', () => {
    // получить доступ к элементу по data-testid
    const { getByTestId } = render(
      <input type="text" data-testid="simple-input" />,
    );
    const input = getByTestId('simple-input');
    // сначала инпут без фокуса
    expect(input).not.toHaveFocus();
    // ставим фокус
    input.focus();
    // проверяем наличие фокуса
    expect(input).toHaveFocus();
  });

  it('double click', () => {
    const onChange = jest.fn();
    const { container } = render(<input type="checkbox" onChange={onChange} />);
    const checkbox = container.firstChild;
    expect(checkbox).not.toBeChecked();
    userEvent.dblClick(checkbox);
    expect(onChange).toHaveBeenCalledTimes(2);
  });
});
