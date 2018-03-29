import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class Form extends React.Component {
  static navigationOptions = {
    title: 'Form',
  };

  render() {
    console.log(this.props);

    return (
      <View style={styles.container}>
          <Text>To-Do App</Text>
      </View>
    );
  }
}

function mapStateToProps(state) {
  const { todoList } = state;

  return {
    todoList,
  };
}

export default connect(mapStateToProps)(Form);
