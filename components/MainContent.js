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
    content: [],
    categoryFilter: '',
  }

  componentDidMount() {

    const content = require('../content.json').content

    this.setState({ content })

  }

  filterByCategory = (category) => {
    console.log(category);
    console.log(this.state.content.filter( content =>
      content.category === 'Analytics'));
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
            category={item.category}
            title={item.title}
            description={item.description}
            url={item.url}
            filterCategory={this.filterByCategory}
          />
        )}
      />
    ]
  }
}

export default MainContent;
