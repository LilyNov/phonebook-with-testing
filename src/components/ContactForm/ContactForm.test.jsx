import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactForm from './ContactForm';

describe('ContactForm component', () => {
  it('is rendering and submitting form', () => {
    const handleSubmit = jest.fn();
    render(<ContactForm OnSaveContacts={handleSubmit} />);

    userEvent.type(screen.getByLabelText(/name/i), 'Lilia');
    userEvent.type(screen.getByLabelText(/number/i), '124589998');
    userEvent.click(screen.getByRole('button', { name: /add contact/i }));

    expect(handleSubmit).toHaveBeenCalled();
  });
});
