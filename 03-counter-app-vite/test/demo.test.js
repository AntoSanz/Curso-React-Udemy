//1. Inicializacion
//2. Estimulo
//3. Observar el comportamiento

describe('Pruebas en <DemoComponent />', () => { 
    test('Mi primer test', () => {
        const message1 = 'Hola mundo';
        const message2 = message1.trim();
        expect(message1).toBe(message2);
    })
 })
