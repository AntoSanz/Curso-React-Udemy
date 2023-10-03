import { render, screen } from '@testing-library/react';
import { CounterApp } from '../src/CounterApp';

describe('Pruebas en <CounterApp />', () => {
    const initialValue = 100;

    test('Debe de coincidir con el snapshot', () => {
        const { container } = render(<CounterApp value={initialValue} />);
        expect(container).toMatchSnapshot();
    });

    test('Debe mostrar el valor inicial de 100', () => {
        render(<CounterApp value={initialValue} />);
        expect(screen.getByText(initialValue)).toBeTruthy();
    });
});
