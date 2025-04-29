import { render, screen } from '@testing-library/react';
import ContactPage from '../app/contact/page';
import '@testing-library/jest-dom';

jest.mock('next/head', () => ({
  __esModule: true,
  default: ({ children }: any) => children,
}));

jest.mock('lucide-react', () => ({
  Mail: () => <div>MailIcon</div>,
  User: () => <div>UserIcon</div>,
  CheckCircle: () => <div>CheckIcon</div>,
}));

test('renders contact submit button', () => {
  render(<ContactPage />);
  expect(screen.getByRole('button', { name: /conjure/i })).toBeInTheDocument();
});



});