import React, { useState } from 'react';
import { 
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

const TouchableOpacityExample = () => {
  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);
  const reset = () => setCount(prevCount => prevCount * 0);

  return (
    <View style={styles.container}>
      <View style={styles.countContainer}>
        <Text>Count: {count}</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
      >
        <Text>Press Here</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={reset}
      >
        <Text>RESET</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    marginTop: 5
  },
  countContainer: {
    alignItems: "center",
    padding: 10
  }
});

export default TouchableOpacityExample;