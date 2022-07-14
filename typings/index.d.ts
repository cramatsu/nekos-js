export enum Endpoints {
	EightBall = '8ball',
	Cat = 'cat',
	Fact = 'fact',
	Image = 'img',
	Name = 'name',
	Owoify = 'owoify',
	Why = 'why',
}

export enum ImageCategory {
	Smug = 'smug',
	Woof = 'woof',
	Gasm = 'gasm',
	EightBall = '8ball',
	Goose = 'goose',
	Cuddle = 'cuddle',
	Avatar = 'avatar',
	Slap = 'slap',
	Pat = 'pat',
	Gecg = 'gecg',
	Feed = 'feed',
	FoxGirl = 'fox_girl',
	Lizard = 'lizard',
	Neko = 'neko',
	Hug = 'hug',
	Meow = 'meow',
	Kiss = 'kiss',
	Wallpaper = 'wallpaper',
	Tickle = 'tickle',
	Spank = 'spank',
	Waifu = 'waifu',
	Lewd = 'lewd',
	NekoGif = 'ngif',
}

export function eightBall(): Promise<NekosReponses.EightballResponse>;
export function cat(): Promise<string>;
export function fact(): Promise<string>;
export function image(): Promise<string>;
export function randomName(): Promise<string>;
export function owoify(text: string): Promise<string>;
export function why(): Promise<string>;
export function spoiler(text: string): Promise<string>;

export namespace NekosReponses {
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
}
