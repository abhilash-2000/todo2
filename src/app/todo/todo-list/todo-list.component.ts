import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  thetodos:Todo=
    {
      Title : "",
      Description : "",
      todoID :null,
      Date: new Date(),
      hide:true
    }
  todos:Todo[];
  showExtended:boolean = true;
  
  showUserForm:boolean = false;
  index:number;
  currentClasses = {};

  constructor(private dataService:DataService) {

   }

  ngOnInit(): void {
    this.todos = this.dataService.getTodos();
    
  }
  
  deleteTodoItem(todo:Todo){
    this.index=this.todos.indexOf(todo);
    if(this.index !== -1){
      this.todos.splice(this.index,1);
    }
  }

}


