import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Http, Headers } from '@angular/http';


import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService {

	private heroesUrl = "http://www.filltext.com/?rows=10&id={index}&name={username}";  // URL to web api

	private headers = new Headers({'Content-Type': 'application/json'});

	constructor(
		private http: Http

	) { }

	getHeroes(): Promise<Hero[]> {

		return this.http.get(this.heroesUrl)
			.toPromise()
			.then(response => response.json() as Hero[]) // you might think that .json().data should be used but without it, it works
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

		const url = `${this.heroesUrl}/${id}`;
		return this.http.get(url)
		  .toPromise()
		  .then(response => response.json() as Hero)
		  .catch(this.handleError);
	}


	// create method uses POST method
	create(name: string): Promise<Hero> {
		return this.http
		  .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
		  .toPromise()
		  .then(res => res.json() as Hero)
		  .catch(this.handleError);
	  }

	  // update method uses PUT method
	update(hero: Hero): Promise<Hero> {
		const url = `${this.heroesUrl}/${hero.id}`;
		return this.http
		  .put(url, JSON.stringify(hero), {headers: this.headers})
		  .toPromise()
		  .then(() => hero)  // I don't know why we are using this closure here. Get nothing and do hero? Removing the => hero part here also rocks
		  // but now I now why it is ... it will in fact return the hero after updating.
		  .catch(this.handleError);
	  }

	  delete(id: number): Promise<void> {
		const url = `${this.heroesUrl}/${id}`;
		return this.http.delete(url, {headers: this.headers})
		  .toPromise()
		  .then(() => null)
		  .catch(this.handleError);
	  }
}
