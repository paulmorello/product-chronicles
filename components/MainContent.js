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
    paddingTop: 10,
    paddingBottom: 10,
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
    const listContent = this.state.content.reverse()

    return [
      <FlatList
        key="flatlist"
        data={listContent}
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
