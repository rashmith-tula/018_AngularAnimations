import { Component, OnInit } from '@angular/core';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { NgForm } from '@angular/forms';
import { ToDoService } from '../todo.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  todos: any[] = [];
  faPlusCircle = faPlusCircle;
  invalid = false;

  constructor(private todoService: ToDoService) { }

  ngOnInit() {
    this.todos = this.todoService.getTodos();
  }

  // onEntry(event: any) {
  //   if (this.todos.indexOf(event.target.value) < 0) {
  //     this.invalid = false;
  //   } else {
  //     this.invalid = true;
  //   }
  // }

  onEntry(value: string) {
    debugger;
    if (this.todos.indexOf(value) < 0) {
      this.invalid = false;
    } else {
      this.invalid = true;
    }
  }

  onAdd(form: NgForm) {
    if (this.todos.indexOf(form.value.todo) < 0) {
      // this.todos.unshift(form.value.todo);
      this.invalid = false;
      this.todoService.addTodo(form.value.todo);
      form.reset();
    } else {
       this.invalid = true;
    }
  }

}
