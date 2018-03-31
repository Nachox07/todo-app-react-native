import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const styles = StyleSheet.create({
    view: {
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        borderStyle: 'solid',
        padding: 15,
        width: '100%',
    },
});
export default class Item extends React.Component {
    render() {
        const { data } = this.props;

        return (
            <TouchableOpacity>
                <View
                    style={styles.view}
                >
                    <Text>{ data.key }</Text>
                </View>
            </TouchableOpacity>
        );
    }
}
