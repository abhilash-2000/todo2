import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {
  showUserForm:boolean = false;
  enableAdd:boolean = true;
  thetodos:Todo={
      Title : "",
      Description : "",
      todoID :null,
      Date: new Date(),
      hide:true
    }
    currentClasses = {};
    todos:Todo[];

  constructor(private dataService:DataService) { 
  }

  ngOnInit(): void {
    this.todos = this.dataService.getTodos();
    this.setCurrentClass();
  }
  setCurrentClass(){
    this.currentClasses={'btn-success':this.enableAdd}
  }
  onSubmit(){
    this.thetodos.Date = new Date();
    this.thetodos.todoID = this.todos.length + 1;
    this.todos.unshift(this.thetodos);
    this.thetodos=
      {
        Title : "",
        Description : "",
        hide:true
      }
  }
}
