import { Component } from '@angular/core';
import { Hero } from '../../hero';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeroService } from '../../hero.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-heroes',
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css',
})
export class HeroesComponent {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }

  addHero(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }

    this.heroService.addHero({ name } as Hero).subscribe((hero) => {
      this.heroes.push(hero);
    });
  }

  deleteHero(heroToDelete: Hero): void {
    this.heroes = this.heroes.filter((hero) => hero !== heroToDelete);
    this.heroService.deleteHero(heroToDelete.id).subscribe();
  }
}
