import { getSaludo } from "../../src/base-pruebas/base-pruebas/02-template-string";

describe('pruebas en <02-template-string />', () => { 
    test('getSaludo debe devolver "Hola Antonio"', () =>{
        const name = 'Antonio';
        const message = getSaludo(name);

        expect(message).toBe(`Hola ${name}`);
    })
 })