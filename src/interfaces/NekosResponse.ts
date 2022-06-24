export interface EightballResponse {
	response: string;
	url: string;
}

export interface CatResponse {
	cat: string;
}

export interface FactResponse {
	fact: string;
}

export interface ImageResponse {
	url: string;
}
export interface NameResponse {
	name: string;
}

export interface OwoifyResponse {
	owo: string;
}

export interface WhyResponse {
	why: string;
}

export interface SpoilerResponse extends OwoifyResponse {}
