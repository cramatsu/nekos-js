# Nekos-js

**A simple [nekos.life](https://nekos.life) API wrapper**

# Documentation

> This library provides the following functions for working with the API


*  eightBall
*  cat
*  fact
*  image
*  randomName
*  owoify
*  why
*  spoiler



### eightBall
```ts
function eightBall(): Promise<NekosReponses.EightballResponse>;
```
Returns
```json
{
   "response":"It is OK",
   "url":"https://cdn.nekos.life/8ball/It_is_OK.png"
}
```

---

### cat
```ts
function cat(): Promise<string>;
```
Returns </br>
`ヾ(=｀ω´=)ノ`

---

### fact
```ts
function fact(): Promise<string>;
```
Returns </br>
`On December 17 1991, the Cleveland Cavaliers beat the Miami Heat 148-80, the largest margin of victory in an NBA game`

---

### image
```ts 
function image(categoty: ImageCategory): Promise<string>;
```
Returns </br>
`https://cdn.nekos.life/neko/neko365.jpeg`


---

### randomName
```ts
function randomName(): Promise<string>;
```
Returns </br>
`Aswin Abraham`

---

### owoify
```ts
function owoify(text: string): Promise<string>;
```
Returns
> Text before: I love you </br>
> Transformed: I wuv you

---

### why
```ts
function why(): Promise<string>;
```
Returns </br>
`why is there yugioh season 0?`

---

### spoiler
```ts
function spoiler(text: string): Promise<string>;
```
Returns
> Text before: Japan </br>
> Transformed: ||J||||a||||p||||a||||n||

I hope you have enjoyed everything (´｡• ᵕ •｡`) ♡

> Github: [@cramatsu](https://github.com/cramatsu)
