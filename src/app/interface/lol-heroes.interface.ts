export interface LolHero {
  img: string;
  name: string;
}

export interface ResponseData {
  characters: Array<LolHero>
}