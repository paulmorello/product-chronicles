import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';

// File Imports
import ContentCard from '../components/ContentCard';

// Styles
const styles = StyleSheet.create({
  list: {
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#F3F3F3'
  },
});

class MainContent extends Component {
  state = {
    content: []
  }

  componentDidMount() {

    const content = require('../content.json').content

    this.setState({ content })

  }

  render() {

    return [
      <FlatList
        key="flatlist"
        data={this.state.content}
        style={styles.list}
        keyExtractor={ item => item.id }
        renderItem={ ({item}) => (
          <ContentCard
            title={item.title}
            description={item.description}
            url={item.url}
          />
        )}
      />
    ]
  }
}

export default MainContent;
