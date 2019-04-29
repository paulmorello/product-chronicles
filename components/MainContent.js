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

    this.props.loadingChange

    console.log("MAIN CONTENT LOADING STATE 1", this.props.loading);

    const content = require('../content.json').content

    this.setState({ content })

    this.props.loadingChange

    console.log("LOADING STATE 2", this.props.loading);
  }

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
        data={this.state.content}
        style={styles.list}
        keyExtractor={ item => item.id }
        renderItem={ this.renderItem }
      />
    ]
  }
}

MainContent.propTypes = {
  loading: PropTypes.bool.isRequired,
  loadingChange: PropTypes.func.isRequired
}

export default MainContent;
