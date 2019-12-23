import React from 'react';
import {FlatList, ActivityIndicator, Text, View} from 'react-native';

export default class DetailsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isLoading: true};
  }
  componentDidMount() {
    return fetch(
      'https://newsapi.org/v2/top-headlines?country=us&apiKey=df82c4f6e3664b258f610070a8a01f2b',
    )
      .then(response => response.json())
      .then(reponseJson => {
        return reponseJson.articles;
      })
      .catch(error => {
        console.error(error);
      });
  }
  setView() {
    if (!this.state.isLoading) {
      return (
        <View style={{flex: 1, padding: 20}}>
          <Text>Content Loaded</Text>
        </View>
      );
    } else {
      return (
        <View style={{flex: 1, padding: 20}}>
          <Text>Content Loaded</Text>
        </View>
      );
    }
  }
  render() {
    return <View>{this.setView()}</View>;
  }
}
