import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import {select, Store} from "@ngrx/store";
import {AppState} from "../state/app.state";
import {selectHeroes} from "../state/hero.selector";
import {tap} from "rxjs/operators";
import {setHeroes} from "../state/hero.action";
import {Observable} from "rxjs";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes$: Observable<Hero[]> = this.store.pipe(select(selectHeroes));

  constructor(private heroService: HeroService, private store: Store<AppState>) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().pipe(
        tap(heroes => {
          this.store.dispatch(setHeroes({heroes}))
        }))
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        // this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    // this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

}
