import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';
import { WebBrowser } from 'expo';

// Styles
const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "white",
    borderBottomColor: 'rgba(96,100,109, 0.1)',
    borderBottomWidth: 1,
    borderTopColor: 'rgba(96,100,109, 0.1)',
    borderTopWidth: 1,
    paddingTop: 15,
    paddingBottom: 15,
  },
  cardTextCategory: {
    fontSize: 12,
    color: 'rgba(63,130,232, 1)',
    lineHeight: 20,
    textAlign: 'left',
    fontWeight: "800",
    marginHorizontal: 30,
    paddingBottom: 10,
  },
  cardTextHeader: {
    fontSize: 15,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 20,
    textAlign: 'left',
    fontWeight: "700",
    marginHorizontal: 30,
    paddingBottom: 10,
  },
  cardTextDescription: {
    fontWeight: "500",
    fontSize: 15,
    color: 'rgba(96,100,109, 0.5)',
    textAlign: 'left',
    marginHorizontal: 30,
    paddingBottom: 10,
  },
  cardTextReadMore: {
    color: 'rgba(63,130,232, 1)',
  }
});

class ContentCard extends Component {

  handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync(this.props.url);
  };

  render() {
    const description = this.props.description.substring(0,100)

    return (
      <TouchableOpacity
        style={ styles.cardContainer }
        onPress={this.handleLearnMorePress}>
        <TouchableOpacity
          onPress={this.props.categoryFilter()}>
          <Text style={ styles.cardTextCategory }>{this.props.category} </Text>
        </TouchableOpacity>
        <Text style={ styles.cardTextHeader }>{this.props.title} </Text>
        <Text style={ styles.cardTextDescription }>{description}... <Text style={styles.cardTextReadMore}>Read More</Text> </Text>
      </TouchableOpacity>
    )

  }
}

ContentCard.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string,
  categoryFilter: PropTypes.func
}


export default ContentCard;
