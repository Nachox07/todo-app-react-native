import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
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

class List extends React.Component {
  static navigationOptions = {
      title: 'List',
  };

  renderItem = ({ item }) => (
      <Item
          data={item.key}
      />
  );

  render() {
      return (
          <View style={styles.container}>
              <FlatList
                  data={this.props.todoList}
                  renderItem={this.renderItem}
                  style={styles.List}
              />
          </View>
      );
  }
}

const mapStateToProps = (state) => {
    const { todoList } = state;

    return {
        todoList,
    };
};

export default connect(mapStateToProps, null)(List);
