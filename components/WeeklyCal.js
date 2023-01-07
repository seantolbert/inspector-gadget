import { ScrollView, StyleSheet, Text, View } from "react-native";

const Day = ({ day }) => {
  return (
    <View
      style={{
        padding: 4,
        borderRadius: "15px",
        marginHorizontal: 2,
        backgroundColor: day === 4 && "#4c86a8",
        color: day === 4 && "#fff",
      }}
    >
      <View
        style={{
          paddingVertical: 3,
          paddingHorizontal: 13,
          alignItems: "center",
        }}
      >
        <Text>Fri</Text>
        <Text>{day}</Text>
        <View
          style={{
            width: 5,
            height: 5,
            backgroundColor: "limegreen",
            marginTop: 3,
          }}
        ></View>
      </View>
    </View>
  );
};
const days = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
  24, 25, 26, 27, 28,
];

console.log(days.map((d) => console.log("this is day ", d)));

const WeeklyCal = () => {
  return (
    <View
      style={{
        width: "100%",
        alignItems: "center",
        marginVertical: 10,
        paddingHorizontal: 10
      }}
    >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {days.map((day, key) => (
          <Day day={day} key={key} />
        ))}
      </ScrollView>
    </View>
  );
};
export default WeeklyCal;
const styles = StyleSheet.create({});
