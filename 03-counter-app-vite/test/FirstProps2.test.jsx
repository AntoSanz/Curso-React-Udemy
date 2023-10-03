import { render, screen } from '@testing-library/react';
import { FirstProps } from '../src/FirstProps';

describe('Pruebas en <FirstProps /> ', () => {
    const title = 'Hello World';
    const name = 'Antonio Sanz';

    test('Debe coincidir con el snapshot', () => {
        const { container } = render(<FirstProps title={title} />);
        expect(container).toMatchSnapshot();
    });

    test('Debe mostrar el texto "Hello World"', () => {
        render(<FirstProps title={title} />);
        expect(screen.getByText(title)).toBeTruthy();
    });

    test('Debe de mostrar el titulo en un <h1></h1>', () => {
        render(<FirstProps title={title} />);
        expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(title);
    });

    test('Debe de mostrar el "name" enviado por props', () => {
        render(<FirstProps title={title} name={name} />);
        expect(screen.getAllByText(name)).toBeTruthy();
    });
});
