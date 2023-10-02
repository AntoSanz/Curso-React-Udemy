import { render } from "@testing-library/react";
import { FirstProps } from "../src/FirstProps";

describe('Pruebas en <FirstProps /> ', () => {
    // test("Debe coincidir con el snapshot", () => {
    //     const title = "Hello World";
    //     render(<FirstProps title={title}/>);
    // });
    
    test('Debe coincidir con el snapshot', () => {
        //La prueba con el snapshot es mejor cuando el componente este acabado y no se vaya a cambiar mas.
        const title = "Hello World";
        const {container} = render (<FirstProps title={title}/>);
        //Se genera un archivo en _snapshots_ en el momento que se ejecuta por primera vez el test
        expect(container).toMatchSnapshot();
    });

    test('Debe de mostrar el titulo en un <h1></h1>', () => {
        const title = "Hello World";
        const {container, getByText} = render (<FirstProps title={title}/>);

        expect(getByText(title)).toBeTruthy; //Que se encuentre este texto.

        const h1 = container.querySelector('h1');
        expect(h1.innerHTML).toContain( title );
    });
 });