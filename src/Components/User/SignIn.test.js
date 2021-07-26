import { fireEvent, render, screen } from "@testing-library/react";
import SignIn from './SignIn';

describe('SignIn', () => {

    beforeEach(() => {
        jest.spyOn(window, 'fetch');
        window.fetch.mockResolvedValueOnce({
            ok: true,
            json: async () => ({success: true}),
        });

        render(<SignIn />);
    });

    test('renders Login header', () => {
        const linkElement = screen.getByText(/login/i);

        expect(linkElement).toBeInTheDocument();
    });

    test('renders Username input', () => {
        const inputElement = screen.getByPlaceholderText(/username/i);

        expect(inputElement).toBeInTheDocument();
    });
    
    test('renders Password input', () => {
        const inputElement = screen.getByPlaceholderText(/password/i);

        expect(inputElement).toBeInTheDocument();
    });
    
    test('renders Remember Me label', () => {
        const labelElement = screen.getByText(/remember me/i);

        expect(labelElement).toBeInTheDocument();
    });
    
    test('renders Sign In button', () => {
        const buttonElement = screen.getByRole('button', {name: 'Sign In'});

        expect(buttonElement).toBeInTheDocument();
    });

    test('renders Create Account button', () => {
        const buttonElement = screen.getByRole('button', { name: 'Create Account' });

        expect(buttonElement).toBeInTheDocument();
    });

    test('calls fetch given Create Account button is clicked', () => {
        const buttonElement = screen.getByRole('button', { name: 'Create Account' });

        fireEvent.click(buttonElement);

        expect(window.fetch).toHaveBeenCalledWith('',
            expect.objectContaining({
                method: 'POST',
                headers: { 'Content-Type': 'application/json' }
            }));
    });
});