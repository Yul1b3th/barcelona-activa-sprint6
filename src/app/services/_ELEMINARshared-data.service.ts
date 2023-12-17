// shared-data.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  private pagesSubject = new BehaviorSubject<number>(0);
  pages$ = this.pagesSubject.asObservable();

  private languagesSubject = new BehaviorSubject<number>(0);
  languages$ = this.languagesSubject.asObservable();

  setPages(pages: number) {
    this.pagesSubject.next(pages);
  }

  setLanguages(languages: number) {
    this.languagesSubject.next(languages);
  }
}
