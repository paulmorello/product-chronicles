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

  renderItem = ({ item: content }) => {
    return (
			<View
				style={styles.list}
				key={content.id}
			>
        <ContentCard
          category={content.category}
          title={content.title}
          description={content.description}
          url={content.url}
        />
			</View>
		);
  }

  render() {

    return [
      <FlatList
        key="flatlist"
        data={this.props.listContent}
        style={styles.list}
        keyExtractor={ item => item.id }
        renderItem={ this.renderItem }
      />
    ]
  }
}

MainContent.propTypes = {
  listContent: PropTypes.array.isRequired,
}

export default MainContent;
