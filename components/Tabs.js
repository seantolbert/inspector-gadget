import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
const Tabs = () => {
  const [height, setHeight] = useState(0);

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          width: "85%",
          //   borderWidth: 1,
          borderRadius: "11px",
          padding: 8,
          backgroundColor: "#e3e3e3",
        }}
        onLayout={(e) => {
          const { height } = e.nativeEvent.layout;
          setHeight(height);
        }}
      >
        <Pressable
          style={{
            width: "48%",
            alignItems: "center",
            justifyContent: "center",
            // borderWidth: 1,
          }}
        >
          <Text style={{ fontSize: 17, zIndex: 10 }}>Availability</Text>
        </Pressable>
        <Pressable
          style={{
            // borderWidth: 1,
            width: "48%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 17, zIndex: 10 }}>Services</Text>
        </Pressable>
        <View
          style={{
            borderRadius: "11px",
            zIndex: 5,
            height,
            width: "48%",
            backgroundColor: "blue",
            position: "absolute",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 17,
              zIndex: 10,
              color: "#fff",
            }}
          >
            Availability
          </Text>
        </View>
      </View>
    </View>
  );
};
export default Tabs;
const styles = StyleSheet.create({});
