import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import { addTodo } from '../modules/actions';

const styles = StyleSheet.create({
    bottomText: {
        marginTop: 15,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#333',
        borderRadius: 5,
        marginTop: 10,
        padding: 15,
        width: '90%',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 14,
    },
    input: {
        backgroundColor: '#EEE',
        borderRadius: 5,
        color: '#333',
        marginTop: 10,
        padding: 10,
        width: '90%',
    },
    text: {
        fontSize: 22,
    },
});

class Form extends React.Component {
  static navigationOptions = {
      title: 'Form',
  };

  constructor(props) {
      super(props);

      this.state = {
          inputValue: '',
      };
  }

  addNewTask = () => {
      this.props.addIt(this.state.inputValue);
      this.props.navigation.navigate('list');
  }

  handleInputValueChange = (value) => {
      this.setState({
          inputValue: value,
      });
  }

  render() {
      const {
          inputValue,
      } = this.state;

      const {
          todoList,
      } = this.props;

      const lastElementAdded = (todoList.length > 0) ? todoList[todoList.length - 1].text : '';

      return (
          <View style={styles.container}>
              <Text
                  style={styles.text}
              >
            Add a task
              </Text>
              <TextInput
                  autoCorrect={false}
                  onChangeText={this.handleInputValueChange}
                  placeholder='Type your desired task'
                  placeholderTextColor='#888'
                  style={styles.input}
              />
              <TouchableOpacity
                  disabled={ inputValue.length < 3 }
                  onPress={this.addNewTask}
                  style={styles.button}
              >
                  <Text style={styles.buttonText}>Add</Text>
              </TouchableOpacity>
              <Text style={styles.bottomText}>{ lastElementAdded }</Text>
          </View>
      );
  }
}

const mapDispatchToProps = ({
    addIt: text => addTodo(text),
});

export default connect(null, mapDispatchToProps)(Form);
