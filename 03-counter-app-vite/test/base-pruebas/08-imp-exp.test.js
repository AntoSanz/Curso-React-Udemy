import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe("Pruebas en 08-imp-exp", () => {
    test("getHeroeById debe devolver un heroe por ID", () => {
        const id = 1;
        const hero = getHeroeById(id);

        expect(hero).toEqual({
            id: 1,
            name: "Batman",
            owner: "DC",
        });
    });

    test("getHeroeById debe devolver undefined si no existe", () => {
        const id = 100;
        const hero = getHeroeById(id);

        expect(hero).toBeFalsy();
    });

    test("getHeroesByOwner debe devolver un array de heroes de DC", () => {
        const owner = 'DC';
        const result = getHeroesByOwner(owner);

        expect(result.length).toEqual(3);
        expect(result).toEqual(heroes.filter( (heroe) => heroe.owner === owner));
    });

    test("getHeroesByOwner debe devolver un array de heroes de Marvel", () => {
        const owner = 'Marvel';
        const result = getHeroesByOwner(owner);

        expect(result.length).toEqual(2);
        expect(result).toEqual(heroes.filter( (heroe) => heroe.owner === owner));

    });
});


