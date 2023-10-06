import { retornaArray } from "../../src/base-pruebas/base-pruebas/07-deses-arr";

describe("Pruebas en 07-deses-arr", () => {
    test("Debe retornar un string y un numero", () => {
        //const retorno = retornaArray();
        const [letters, numbers] = retornaArray();

        // expect(letters).toBe('ABC');
        // expect(numbers).toBe(123);

        // expect(typeof letters).toBe('string');
        expect(typeof letters).toEqual(expect.any(String));
        expect(typeof numbers).toBe('number');


    });
});
