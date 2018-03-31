import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Item from '../components/Item';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    List: {
        width: '95%',
    },
});

const items = [
    {
        key: 'Orange',
    },
    {
        key: 'Apple',
    },
    {
        key: 'Pear',
    },
];

export default class List extends React.Component {
  static navigationOptions = {
      title: 'List',
  };

  renderItem = ({ item }) => (
      <Item
          data={item}
      />
  );

  render() {
      console.log(this.props);

      return (
          <View style={styles.container}>
              <FlatList
                  data={items}
                  renderItem={this.renderItem}
                  style={styles.List}
              />
          </View>
      );
  }
}
