import * as React from 'react';
import { Todo } from '../Todo/Todo';

const todos = [
    'Milk the cow',
    'Walk the dog',
    'Kick the cat'
];


export class TodoList extends React.Component<any> {
    render() {
        return todos.map((todo, i) => <Todo key={i} text={todo} />)
    }
}