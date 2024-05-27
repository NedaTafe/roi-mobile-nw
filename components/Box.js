import { View, StyleSheet } from 'react-native';

const Box = ({ color }) => {
  return <View style={[styles.box, { backgroundColor: color }]} />;
};

// function Box(props) {
//   // const { color } = props;
//   return <View style={[styles.box, { backgroundColor: props.color }]} />;
// }

const styles = StyleSheet.create({
  box: {
    flex: 1,
    margin: 15,
  },
});

export default Box;
