import axios from 'axios';
import { Endpoints, ImageCategory } from '../Endpoints';
import type {
	CatResponse,
	EightballResponse,
	FactResponse,
	ImageResponse,
	NameResponse,
	OwoifyResponse,
	WhyResponse,
} from '../interfaces/NekosResponse';

const baseUrl = 'https://nekos.life/api/v2/';

export const eightBall = async (): Promise<EightballResponse> =>
	(await axios.get<EightballResponse>(`${baseUrl}/${Endpoints.EightBall}`)).data;

export const cat = async (): Promise<string> => (await axios.get<CatResponse>(`${baseUrl}/${Endpoints.Cat}`)).data.cat;

export const fact = async (): Promise<string> =>
	(await axios.get<FactResponse>(`${baseUrl}/${Endpoints.Fact}`)).data.fact;

export const image = async (categoty: ImageCategory): Promise<string> =>
	(await axios.get<ImageResponse>(`${baseUrl}/${Endpoints.Image}/${categoty}`)).data.url;

export const randomName = async (): Promise<string> =>
	(await axios.get<NameResponse>(`${baseUrl}/${Endpoints.Name}`)).data.name;

/**
 * @param text Max length 200
 **/
export const owoify = async (text: string): Promise<string> =>
	(
		await axios.get<OwoifyResponse>(`${baseUrl}/${Endpoints.Owoify}`, {
			params: {
				text,
			},
		})
	).data.owo;

export const why = async (): Promise<string> => (await axios.get<WhyResponse>(`${baseUrl}/${Endpoints.Why}`)).data.why;

export const spoiler = (text: string): string =>
	Array.from(text)
		.map((word) => `||${word}||`)
		.join('');
