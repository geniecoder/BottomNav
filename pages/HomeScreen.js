import React from 'react';
import {Text, View, StyleSheet, FlatList, Alert} from 'react-native';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id: '1', value: 'A'},
        {id: '2', value: 'B'},
        {id: '3', value: 'C'},
        {id: '4', value: 'D'},
        {id: '5', value: 'E'},
        {id: '6', value: 'F'},
        {id: '7', value: 'G'},
        {id: '8', value: 'H'},
        {id: '9', value: 'I'},
        {id: '10', value: 'J'},
        {id: '11', value: 'K'},
        {id: '12', value: 'L'},
        {id: '13', value: 'M'},
        {id: '14', value: 'N'},
        {id: '15', value: 'O'},
        {id: '16', value: 'P'},
        {id: '17', value: 'Q'},
        {id: '18', value: 'R'},
        {id: '19', value: 'S'},
        {id: '20', value: 'T'},
        {id: '21', value: 'U'},
        {id: '22', value: 'V'},
        {id: '23', value: 'W'},
        {id: '24', value: 'X'},
        {id: '25', value: 'Y'},
        {id: '26', value: 'Z'},
      ],
    };
  }

  FlatListItemsSeparator = () => {
    return (
      <View style={{height: 0.5, width: '100%', backgroundColor: '#C8C8C8'}} />
    );
  };
  GetItem(item) {
    Alert.alert(item);
  }
  render() {
    return (
      <View style={styles.MainContainer}>
        <FlatList
          data={this.state.data}
          ItemSeparatorComponent={this.FlatListItemsSeparator}
          renderItem={({item, index}) => (
            <View>
              <Text
                style={styles.item}
                onPress={this.GetItem.bind(
                  this,
                  'Id: ' + item.id + ' Value : ' + item.value,
                )}>
                {item.value + ' : ' + index}
              </Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    marginTop: 30,
  },

  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
