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

  },
  cardTextHeader: {
    fontSize: 20,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
    fontWeight: "900",
  },
  cardTextDescription: {
    marginHorizontal: 30,
    marginTop: 20,
    marginBottom: 10,
    fontWeight: "600",
    fontSize: 15,
    color: 'rgba(96,100,109, 1)',
  }
});

class ContentCard extends Component {

  handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync(this.props.url);
  };

  render() {

    return (
      <TouchableOpacity
        style={ styles.cardContainer }
        onPress={this.handleLearnMorePress}>
        <Text style={ styles.cardTextHeader }> {this.props.title} </Text>
        <Text style={ styles.cardTextDescription }> {this.props.description} </Text>
      </TouchableOpacity>
    )

  }
}

ContentCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string
}


export default ContentCard;
