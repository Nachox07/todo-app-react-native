import { combineReducers } from 'redux';
import { todoReducer } from './todo';
import { navigationReducer } from './navigation';

export default combineReducers({
  todoList: todoReducer,
  navigationState: navigationReducer,
});
