import { Todo } from "./todo.class";

export class TodoList {

    constructor() {
        this.getLocalStorage();
    }


    newTodo( todo ) {
        this.todos.push( todo );
        this.saveLocalStorage();
    }

    deleteTodo ( id ) {
        this.todos = this.todos.filter( todo => todo.id != id );
        this.saveLocalStorage();
    }

    changeStatus( id ) {
        for ( const todo of this.todos ) {
            if ( todo.id == id ) {
                todo.completed = !todo.completed;
                this.saveLocalStorage();
                break;
            }
        }
    }

    deleteCompleted() {
        this.todos = this.todos.filter( todo => !todo.completed );
        this.saveLocalStorage();
    }

    saveLocalStorage() {
        localStorage.setItem('todo', JSON.stringify( this.todos ));
    }

    getLocalStorage() {
        this.todos = ( localStorage.getItem('todo') ) 
                        ? JSON.parse( localStorage.getItem('todo') )
                        : [];

        this.todos = this.todos.map( Todo.fromJson );
    }
}