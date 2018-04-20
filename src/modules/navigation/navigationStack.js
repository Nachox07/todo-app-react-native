import { StackNavigator } from 'react-navigation';
import ListView from '../../views/List';
import FormView from '../../views/Form';

const navigator = StackNavigator({
    list: {
        screen: ListView,
    },
    form: {
        screen: FormView,
    },
});

export default navigator;
