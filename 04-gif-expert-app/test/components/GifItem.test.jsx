import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('<GifItem />', () => {
    const myImage = {
        id: 'GRSnxyhJnPsaQy9YLn',
        title: 'Dragon Ball GIF by Toei Animation',
        url: 'https://media2.giphy.com/media/GRSnxyhJnPsaQy9YLn/giphy.gif?cid=8b52259fu37fe26z6tognzgev27pn0elv5eq3uvar5p8e84w&ep=v1_gifs_search&rid=giphy.gif&ct=g',
    };
    test('should match snapshot', () => {
        // screen.debug();
        const { container } = render(<GifItem title={myImage.title} url={myImage.url} />);
        expect(container).toMatchSnapshot();
    });

    test('should display the image with the "url" filled in', () => {
        render(<GifItem title={myImage.title} url={myImage.url} />);
        const { src } = screen.getByRole('img');
        expect(src).toBe(myImage.url);
    });

    test('should display the image with the "alt" filled in', () => {
        render(<GifItem title={myImage.title} url={myImage.url} />);
        const { alt } = screen.getByRole('img');
        expect(alt).toBe(myImage.title);
    });

    test('should display the title in the <p></p>', () => {
        const { getByTestId } = render(<GifItem title={myImage.title} url={myImage.url} />);
        expect(getByTestId('test-title').innerHTML).toBe(myImage.title);
    });
});
