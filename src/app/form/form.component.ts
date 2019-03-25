import { Component, OnInit } from '@angular/core';
import { faPlusCircle, faTrash } from '@fortawesome/free-solid-svg-icons';
import { NgForm } from '@angular/forms';
import { state, style, trigger, transition, animate } from '@angular/animations';
import { ToDoService } from '../todo.service';
import { removeDebugNodeFromIndex } from '@angular/core/src/debug/debug_node';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  animations: [
    trigger('onAdd', [
      state('normal', style({opacity: 1, 'transform' : 'translateX(0)'})),
      transition('void => *', [
        style({opacity: 0, 'transform': 'translateX(-100px)'}),
        animate(300)
      ]),
      transition('* => void', [
        animate(300, style({
          opacity: 0,
          backgroundColor: 'red',
          'transform': 'translateX(100px)'
        }))
      ])
    ])
]
})
export class FormComponent implements OnInit {
  todos: any[] = [];
  faPlusCircle = faPlusCircle;
  faTrash = faTrash;

  constructor(private todoService: ToDoService) { }

  ngOnInit() {
    // this.todos = this.todoService.getTodos();
  }

  onAdd(form: NgForm) {
    debugger;
    this.todos.unshift(form.value.todo);
    // this.todoService.addTodo(form.value.todo);
    form.reset();
  }

  onDelete(id: number) {
    debugger;
    // this.todoService.deleteTodo(id);
    this.todos.splice(id,1);
  }

}
