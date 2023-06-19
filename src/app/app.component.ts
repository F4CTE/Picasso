import { Component } from '@angular/core';
import { ITask } from './ITask';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDoAppPart1';
  arrayTasks: ITask[] = [
    { id: 1, name: 'boire' },
    { id: 2, name: 'manger' },
    { id: 3, name: 'dormir' }
  ]
}
