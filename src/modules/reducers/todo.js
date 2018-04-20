import { ADD_TODO } from '../actions';

export function todoReducer(state = [], action) {
    switch (action.type) {
    case ADD_TODO:
        return [
            ...state,
            {
                key: action.payload,
                text: action.payload,
            },
        ];
    default:
        return state;
    }
}
