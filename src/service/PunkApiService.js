export default class PunkApiService {
	_apiBase = 'https://api.punkapi.com/v2/beers';

	getResource = async (url = '') => {
		const res = await fetch(`${this._apiBase}${url}`);
		if (!res.ok) {
			throw new Error(`Could not fetch ${url}, received ${res.status}`);
		}
		return await res.json();
	};

	getAllBeers = async () => {
		const beers = await this.getResource(`?page=1&per_page=80`);
		return await beers.map((item) => {
			return this._transformBeer(item);
		});
	};

	getBeer = async (id) => {
		const beer = await this.getResource(`/${id}`);
		return await beer.map((item) => {
			return this._transformBeer(item);
		});
	};

	getRandomBeers = async () => {
		const beer = await this.getResource(`/random`);
		return await beer.map((item) => {
			return this._transformBeer(item);
		});
	};

	_transformBeer = (beer) => {
		return {
			id: beer.id,
			name: beer.name,
			tagline: beer.tagline,
			firstBrewed: beer.first_brewed,
			description: beer.description,
			imageUrl: beer.image_url,
			abv: beer.abv,
			ibu: beer.ibu,
			targetFg: beer.target_fg,
			targetOg: beer.target_og,
			ebc: beer.ebc,
			srm: beer.srm,
			ph: beer.ph,
			attenuationLevel: beer.attenuation_level,
			volume: beer.volume,
			boilVolume: beer.boil_volume,
			method: beer.method,
			ingredients: beer.ingredients,
			foodPairing: beer.food_pairing,
			brewersTips: beer.brewers_tips,
		};
	};
}
