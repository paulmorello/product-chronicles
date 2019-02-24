import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';

// Styles
const styles = StyleSheet.create({
  cardTextCategory: {
    fontSize: 12,
    color: 'rgba(63,130,232, 1)',
    lineHeight: 20,
    textAlign: 'left',
    fontWeight: "800",
    marginHorizontal: 30,
    paddingBottom: 10,
  },
})

export default class Category extends React.Component {
  render() {
    return (
      <TouchableOpacity>
        <Text style={ styles.cardTextCategory }>{this.props.category} </Text>
      </TouchableOpacity>
    );
  }
}

Category.propTypes = {
  filterCategory: PropTypes.func,
  category: PropTypes.string.isRequired,
}
