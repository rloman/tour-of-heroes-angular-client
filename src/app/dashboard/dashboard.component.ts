import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  providers: [HeroService],
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private router: Router, private heroService: HeroService) {
  }

  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(
        heroes => this.heroes = heroes.slice(0, 4),
        error => {
          this.router.navigate(['login']);
          console.error('An error occurred in dashboard component, navigating to login: ', error);
        }
      );
  }
}