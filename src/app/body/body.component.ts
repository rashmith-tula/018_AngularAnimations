import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../todo.service';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { state, style, trigger, transition, animate, group } from '@angular/animations';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
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
export class BodyComponent implements OnInit {
  todos: any[];
  faTrash = faTrash;

  constructor(private todoService: ToDoService) { }

  ngOnInit() {
    this.todos = this.todoService.getTodos();
  }

  onDelete(id: number) {
    this.todoService.deleteTodo(id);
    // this.todos.splice(id, 1);
  }

}
