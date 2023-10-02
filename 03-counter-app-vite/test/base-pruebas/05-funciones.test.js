import { getUser } from "../../src/base-pruebas/base-pruebas/05-funciones";
import { getUsuarioActivo } from "../../src/base-pruebas/base-pruebas/05-funciones";

describe("Pruebas en <05-funciones />", () => {
    test("getUser debe devolver un objeto", () => {
        const testUser = {
            uid: "ABC123",
            username: "antosanz"
        };
        const result = getUser();
        expect(result).toEqual(testUser);
    });
    
    test("getUsuarioActivo debe devolver un objeto", () => {
        const username = "antosanz"
        const result = getUsuarioActivo(username);

        expect(result).toStrictEqual({
            uid: "ABC567",
            username: username
        });
    });
});
