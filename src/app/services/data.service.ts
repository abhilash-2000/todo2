import { Injectable } from '@angular/core';
import { Todo} from '../models/Todo';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  todos:Todo[];

  constructor() { 
    this.todos =[
      {
        Title : "Bring Milk",
        Description : "Bring amul milk from the store in the evening for tea..",
        todoID :1,
        Date:new Date('02/12/2018 06:20:00'),
        hide: true
      },
      {
        Title : "complete homework",
        Description : "complete trigonometery and geography assignments!",
        todoID :2,
        Date:new Date('02/12/2018 06:20:00'),
        hide: true
      }
    ]
  }
  getTodos():Todo[]{
    console.log("fetching todos from service...");
    return this.todos;
  }
}
