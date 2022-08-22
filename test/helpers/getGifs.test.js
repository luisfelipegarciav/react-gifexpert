import { getGifs } from "../../src/helpers/getGifs";

describe('Pruebas en helper getGifs()', () => {

    test('debe de retornar un arreglo de gifd', async () => {

        const gifs = await getGifs('One Punch');
        // console.log(gifs);

        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual(
            {
                id: expect.any(String),
                title: expect.any(String),
                url: expect.any(String),
            }
        );

    });

})