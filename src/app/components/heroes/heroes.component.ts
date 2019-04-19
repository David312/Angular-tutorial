import { Component, OnInit } from '@angular/core';

import { Hero } from '@app/classes/hero';
import { HeroService } from '@app/services/hero/hero.service';


@Component({
  selector: 'heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
		
		heroes: Hero[]; 

		selectedHero: Hero;

		onSelect(hero: Hero): void {
				if (hero !== this.selectedHero) {
						this.selectedHero = hero;
				}
				else {
						this.selectedHero = null;
				}
		}

		getHeroes(): void {
				this.heroService.getHeroes()
						.subscribe(heroes => this.heroes = heroes);
		}
		
		constructor(private heroService: HeroService) {
		}

		ngOnInit() {
				this.getHeroes();
		}

}
