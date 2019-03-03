import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import { WebBrowser } from 'expo';

// File Imports
import { MonoText } from '../components/StyledText';
import MainContent from '../components/MainContent';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "The Product Chronicles",
    headerStyle: {
      backgroundColor: "white",
    },
    headerTintColor: 'black',
  };

  state = {
    content: []
  }

  componentDidMount() {

    const content = require('../content.json').content

    this.setState({ content })
  }

  filterContent = (category) => {
    this.state.content.filter( content => content.category === category)
  }

  render() {
    const listContent = this.state.content.reverse();

    return (
      <View style={styles.container}>

        <ScrollView
          style={styles.container} contentContainerStyle={styles.contentContainer}>

          <View style={styles.updatedDate}>
            <Text style={styles.updatedDateText}>Last Updated on {new Date().toDateString()}</Text>
          </View>

          <View style={styles.feedHeader}>
            <Text style={styles.feedHeaderText}>Latest Product Reads</Text>
          </View>

          <View style={styles.feedContainer}>
            <MainContent
              listContent={listContent}/>
          </View>

          <View style={styles.getStartedContainer}>
            {this._maybeRenderDevelopmentModeWarning()}

          </View>

        </ScrollView>
      </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {

      return (
        <Text style={styles.developmentModeText}>
          You're in Dev mode
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
        </Text>
      );
    }
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 0,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },

  // New Styles
  updatedDate: {
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomColor: 'rgba(96,100,109, 1)',
    borderBottomWidth: 0.3,
    borderTopColor: 'rgba(96,100,109, 1)',
    borderTopWidth: 0.3,
  },
  updatedDateText: {
    color: 'rgba(0,0,0,0.5)',
  },

  feedHeader: {
    alignItems: 'flex-start',
    paddingTop: 30,
    paddingBottom: 10,
    borderBottomColor: 'rgba(63,130,232, 1)',
    borderBottomWidth: 3,
    marginBottom: 10,
    marginHorizontal: 30,
  },
  feedHeaderText: {
    fontSize: 20,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
    fontWeight: "900",
  },

  feedContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  feedContainerText: {
    marginHorizontal: 30,
    marginTop: 20,
    marginBottom: 10,
    fontWeight: "600",
    fontSize: 15,
    color: 'rgba(96,100,109, 1)',
  },
});
