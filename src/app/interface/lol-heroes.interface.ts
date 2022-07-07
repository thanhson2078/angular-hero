export interface NavInfo {
  info: string;
}

export interface BreadCrumbs {
  displayText: string;
  arrow: string;
  url: string;
}

export interface HeroesType {
  type: string;
}

export interface LolHero {
  img: string;
  name: string;
}

export interface ResponseData {
  navBar: Array<NavInfo>;
  heroesCategories: Array<HeroesType>;
  characters: Array<LolHero>;
  breadCrumbs: Array<BreadCrumbs>;
}
