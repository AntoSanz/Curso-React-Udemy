import { render } from "@testing-library/react";
import { FirstProps } from "../src/FirstProps";

describe('Pruebas en <FirstProps />', () => {
    test("Debe coincidir con el snapshot", () => {
        const title = "Hello World";
        render(<FirstProps title={title}/>);
    });
 })