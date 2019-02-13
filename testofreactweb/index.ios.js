import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  AppRegistry,
  Text,
  ListView,
  Image,
  Dimensions,
  TouchableOpacity,
  View
} from 'react-native';

// 屏幕长宽
const screenW = Dimensions.get('window').width;
const screenH = Dimensions.get('window').height;
// iPhoneX 
const X_WIDTH = 375;
const X_HEIGHT = 812;

/**
 * 判断iphoneX
 */
function isIphoneX() {
  return Platform.OS === 'ios' &&
    (
      (screenH === X_HEIGHT && screenW === X_WIDTH) ||
      (screenH === X_WIDTH && screenW === X_HEIGHT)
    )
}

const containerTop = Platform.select({
  ios: isIphoneX() ? 44 : 20,
  android: 0,
  web: 0,
})
const containerBottom = Platform.select({
  ios: isIphoneX() ? 34 : 0,
  android: 0,
  web: 0,
})

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

export default class Main extends Component {
  state = {
    list: ds.cloneWithRows(
    [{ name: '名称1', content: '内容1', color: '#FF8073' },
    { name: '名称2', content: '内容2', color: '#F26839' },
    { name: '名称3', content: '内容3', color: '#69b076' },
    { name: '名称4', content: '内容4', color: '#ffc655' },
    { name: '名称5', content: '内容5', color: '#84b9cb' },
    { name: '名称6', content: '内容6', color: '#5a98d1' },
    { name: '名称7', content: '内容7', color: '#fe7f76' },
    { name: '名称8', content: '内容8', color: '#f26839' },
    { name: '名称9', content: '内容9', color: '#FF8073' },
    { name: '名称10', content: '内容10', color: '#69b076' },
    { name: '名称11', content: '内容11', color: '#ffc655' },
    { name: '名称12', content: '内容12', color: '#84b9cb' },
    { name: '名称13', content: '内容13', color: '#5a98d1' },
    { name: '名称14', content: '内容14', color: '#fe7f76' }])
  }

  _itemPress(item) {
    alert(item.name);
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          style={{ flex: 1 }}
          dataSource={this.state.list}
          renderRow={(rowData) => (
            <TouchableOpacity style={styles.listItem} onPress={() => this._itemPress(rowData)}>
              <View style={[styles.itemIcon, { backgroundColor: rowData.color}]}>
                <Text style={styles.name}>{rowData.name.substring(0,1)}</Text>
              </View>
              <View style={styles.itemContent}>
                <Text style={styles.content}>{rowData.name}</Text>
                <Text style={styles.type}>{rowData.content}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingTop: containerTop,
    paddingBottom: containerBottom,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    marginTop: 7,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 7,
    height: 60,
    borderRadius: 13,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowColor: 'gray',
    elevation: 1,
  },
  name: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold'
  },
  content: {
    fontSize: 16,
    color: '#333333',
    fontSize: 15,
    fontWeight: 'bold'
  },
  type: {
    fontSize: 13,
    color: '#666666',
    marginTop: 5,
  },
  itemContent: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 12
  },
  itemIcon: {
    width: 40,
    height: 40,
    backgroundColor: '#DDCCD5',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20
  },
  introduction: {
    flex: 1,
    paddingLeft: 10,
  },
  add: {
    position: 'absolute',
    right: 10,
    bottom: 10,
    borderWidth: 1,
    borderColor: '#ea6f5a',
    borderStyle: 'solid',
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addIcon: {
    fontSize: 18,
    color: '#ea6f5a',
  },
  img: {
    width: 80,
    height: 80,
  },
  welcome: {
    fontSize: 24,
    marginBottom: 20
  }
});

AppRegistry.registerComponent('testreactweb', () => Main);
