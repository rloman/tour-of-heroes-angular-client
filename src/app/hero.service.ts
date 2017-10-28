import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Http, Headers } from '@angular/http';


import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService {

	private heroesUrl = 'api/heroes';  // URL to web api

	getHeroes(): Promise<Hero[]> {
		return this.http.get(this.heroesUrl)
			.toPromise()
			.then(response => response.json().data as Hero[])
			.catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}


	getHeroesSlowly(): Promise<Hero[]> {

		return new Promise(resolve => {
			// simulate a server with 2 seconds delay
			setTimeout(() => resolve(this.getHeroes()), 2000);
		})
	}

	getHero(id: number): Promise<Hero> {

		return this.getHeroes().then(heroes => {
			return heroes.find(hero => hero.id === id);
		});
	}

	constructor(
		private http: Http

	) { }

}
