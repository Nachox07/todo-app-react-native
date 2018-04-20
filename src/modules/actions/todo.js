// Action constants

export const ADD_TODO = 'ADD_TODO';

// Action creators

export function addTodo(text) {
    return {
        type: ADD_TODO,
        payload: text,
    };
}
