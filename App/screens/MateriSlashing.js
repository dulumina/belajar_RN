import React from 'react';
import { Image, View, FlatList, StyleSheet, Text, StatusBar, Button, Dimensions } from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    img:require('../assets/images/img1.jpg')
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    img:require('../assets/images/img1.jpg')
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    img:require('../assets/images/img1.jpg')
  },
  {
  id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb38ba',
  title: 'First Item',
  img:require('../assets/images/img1.jpg')
  },
  {
    id: '3as68afc-c605-48d3-a4f8-fbd91fa97f63',
    title: 'Second Item',
    img:require('../assets/images/img1.jpg')
  },
  {
    id: '586s4a0f-3da1-471f-bd96-145571h29d72',
    title: 'Third Item',
    img:require('../assets/images/img1.jpg')
  },
];

const MateriSlashing = () => {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image style={styles.itemImg} source={item.img} />
      <Text style={styles.itemTitle}>{item.title}</Text>
    </View>
  );

  return (
    <View>
      <View style={styles.header} >
        <Button title="Back" />
        <Text style={styles.headerText} >
          Promo
        </Text>
      </View>
      <View style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
}

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  header:{
    display: "flex",
    width: '100%',
    height:50,
    flexDirection: "row",
    backgroundColor:'black',
    alignItems: "center"
  },
  headerBtnBack:{
    flex:1
  },
  headerText:{
    flex: 3,
    textAlign: "center",
    justifyContent: "center",
    fontSize:18,
    color:'#ffffff',
    // alignContent:'center'
  },
  container: {
    // flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    // backgroundColor:'grey'
  },
  item: {
    width:windowWidth-32,
    height:250,
    backgroundColor: '#f9c2ff', //'#ffff',
    //padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius:5,
    // justifyContent:'center'
  },
  itemImg:{
    width:windowWidth-32,
    height:250,
    resizeMode: "cover"
  },
  itemTitle: {
    // width:'100%',
    // height:'100%',
    // paddingBottom:'20',
    position:'absolute',
    // alignContent:'flex-end',
    // justifyContent:'flex-end',
    fontSize: 32,
  },
});

export default MateriSlashing;