
export class ToDoService {
    todos: any[] = [];

    getTodos() {
        return this.todos;
    }

    addTodo(todo: string) {
        this.todos.unshift(todo);
    }

    deleteTodo(id: number) {
        this.todos.splice(id, 1);
    }
}