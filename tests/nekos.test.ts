import { image } from '../src';
import { ImageCategory } from '../src/Endpoints';

test('Image function return correct value', async () => {
	// I've tested that, everything is fine ;3
	await expect(image(ImageCategory.FoxGirl)).resolves.not.toBeNull();
});
