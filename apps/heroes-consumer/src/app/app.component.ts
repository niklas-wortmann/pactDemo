import { Component } from '@angular/core';
import { HeroService } from './hero.service';

@Component({
  selector: 'pact-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public heroes$ = this.heroService.getAllHeroes$();

  constructor(private heroService: HeroService) {}
}
