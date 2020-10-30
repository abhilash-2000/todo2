import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {
  todos:Todo[];

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.todos = this.dataService.getTodos();
  }

}
