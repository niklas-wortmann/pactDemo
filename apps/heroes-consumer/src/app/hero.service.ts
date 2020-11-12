import { Injectable } from '@angular/core';
import { Hero } from '@pact-demo/heroes';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private httpClient: HttpClient) {}

  getAllHeroes$(): Observable<Hero[]> {
    return this.httpClient.get<Hero[]>(
      `${environment.server}${environment.path}/heroes`
    );
  }
}
