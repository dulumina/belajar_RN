import React from 'react';
import {View}from 'react-native';

const FlexDirectionBasics = () => {
return (
<View style = {
   {
    flex: 1,
    flexDirection: 'row',
    justifyContent:'space-around',
    padding:20

   }
  } >
  < View style = {{width: 50,height: 50,backgroundColor: 'powderblue'}} />
  < View style = {{width: 50,height: 50,backgroundColor: 'steelblue'}} />
  < View style = {{width: 50,height: 50,backgroundColor: 'skyblue'}} />
  < View style = {{width: 50,height: 50,backgroundColor: 'steelblue'}} />
  < View style = {{width: 50,height: 50,backgroundColor: 'powderblue'}} />
</View>);
};

export default FlexDirectionBasics;
