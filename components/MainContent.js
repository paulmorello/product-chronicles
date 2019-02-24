import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';
import PropTypes from 'prop-types';

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

  render() {

    return [
      <FlatList
        key="flatlist"
        data={this.props.listContent}
        style={styles.list}
        keyExtractor={ item => item.id }
        renderItem={ ({item}) => (
          <ContentCard
            category={item.category}
            title={item.title}
            description={item.description}
            url={item.url}
          />
        )}
      />
    ]
  }
}

MainContent.propTypes = {
  listContent: PropTypes.array.isRequired
}

export default MainContent;
