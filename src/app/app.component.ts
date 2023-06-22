import { Component } from '@angular/core';
import { Observable, Subject, concatMap, delay, of } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDoAppPart1';

  constructor() { this.ninethTour(); }

  ninethTour() {

    const subject = new Subject<number>();
    const observable = of(1, 2, 3, 4, 5, 6, 7, 8, 9).pipe(
      concatMap(value => of(value).pipe(delay(500))),
    );

    observable.subscribe(subject);


    subject.subscribe((value) => console.log(`Observateur A: ${value}`));
    subject.subscribe((value) => console.log(`Observateur B: ${value}`));

    setTimeout(() => {
      subject.subscribe((value) => console.log(`Observateur c: ${value}`));
    }, 2000);
  }


}

