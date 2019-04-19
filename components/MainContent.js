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

  state = {
    content: []
  }

  componentDidMount() {

    const content = require('../content.json').content

    this.setState({ content })

    this.props.loadingChange


  }

  renderItem = ({ item: content }) => {
    console.log("MAINCONTENT", this.props.listContent);
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
    let listContent = this.props.listContent;

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
  loading: PropTypes.bool.isRequired,
  loadingChange: PropTypes.bool.isRequired
}

export default MainContent;
