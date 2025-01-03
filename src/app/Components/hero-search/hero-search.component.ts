import { Component, OnInit } from '@angular/core';
import {
  debounceTime,
  distinctUntilChanged,
  Observable,
  Subject,
  switchMap,
} from 'rxjs';
import { RouterLink } from '@angular/router';
import { AsyncPipe, NgForOf } from '@angular/common';
import { Hero } from '../../hero';
import { HeroService } from '../../hero.service';

@Component({
  selector: 'app-hero-search',
  standalone: true,
  imports: [RouterLink, AsyncPipe, NgForOf],
  templateUrl: './hero-search.component.html',
  styleUrl: './hero-search.component.css',
})
export class HeroSearchComponent implements OnInit {
  heroes$!: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  constructor(private heroService: HeroService) {}

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      debounceTime(300),
      // ignore new term if same as previous term
      distinctUntilChanged(),
      switchMap((term) => this.heroService.searchHeroes(term))
    );
  }
}
