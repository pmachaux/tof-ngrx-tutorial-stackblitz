import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {selectHeroes} from "../state/hero.selector";
import {AppState} from "../state/app.state";
import {map, tap} from "rxjs/operators";
import {setHeroes} from "../state/hero.action";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes$: Observable<Hero[]> = this.store.pipe(select(selectHeroes), map(heroes => heroes.slice(1,5)));

  constructor(private heroService: HeroService, private store: Store<AppState>) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().pipe(
        tap(heroes => this.store.dispatch(setHeroes({heroes})))
    ).subscribe();
  }
}
