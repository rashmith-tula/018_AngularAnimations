import { Component, OnInit } from '@angular/core';
import { faPlusCircle, faTrash } from '@fortawesome/free-solid-svg-icons';
import { NgForm } from '@angular/forms';
import { state, style, trigger, transition, animate, group } from '@angular/animations';
import { ToDoService } from '../todo.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  animations: [
    trigger('onAdd', [
      state('normal', style({ opacity: 1, 'transform': 'translateX(0)' })),
      transition('void => *', [
        style({ opacity: 0, 'transform': 'translateX(-200px)' }),
        animate(500)
      ]),
      transition('* => void', [
        animate(300, style({ backgroundColor: 'red' })),
        group([
          animate(300, style({'font-weight': 'bold'})),
          animate(500, style({
            opacity: 0,
            'transform': 'translateX(200px)'
          }))
        ])

      ])
    ])
  ]
})
export class FormComponent implements OnInit {
  todos: any[] = [];
  faPlusCircle = faPlusCircle;
  faTrash = faTrash;
  invalid = false;

  constructor(private todoService: ToDoService) { }

  ngOnInit() {
    this.todos = this.todoService.getTodos();
  }

  onEntry(event: any) {
    if (this.todos.indexOf(event.target.value) < 0) {
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

  onDelete(id: number) {
    this.todoService.deleteTodo(id);
    // this.todos.splice(id, 1);
  }

}
