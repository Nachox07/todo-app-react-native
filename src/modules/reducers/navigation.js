import AppNavigator from '../navigation/navigationStack';

const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('form'));

export function navigationReducer(state = initialState, action) {
    const newState = AppNavigator.router.getStateForAction(action, state);
    return newState || state;
}
