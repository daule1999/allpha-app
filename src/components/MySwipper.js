import React, { Component } from "react";
import { Text, View, Image, Dimensions } from "react-native";
import { useTheme } from "react-native-paper";
import Swiper from "react-native-swiper";
const { width, height } = Dimensions.get("window");

const styles = {
  container: {
    flex: 1,
  },
  wrapper: {
    // width: 0,
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    marginTop: 2,
    marginTop: 2,
  },
  text: {
    color: "#92BBD9",
    fontSize: 30,
    fontWeight: "bold",
  },

  image: {
    width: width - 2,
    height: height / 7,
    flex: 1,
  },
};

const Slide = ({ src, numberOfLines, text }) => {
  return (
    <View
      style={styles.slide}
      // title={<Text numberOfLines={numberOfLines}>{text}</Text>}
    >
      <Image resizeMode="contain" style={styles.image} source={src} />
    </View>
  );
};

export default function ({ cards, cardHeader }) {
  const theme = useTheme();
  const { colors } = theme;

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.background,
        margin: 0,
        padding: 0,
      }}
    >
      {/* {!cards && cards.length > 0 && ( */}
      <Swiper
        style={styles.wrapper}
        height={165}
        width={width}
        onMomentumScrollEnd={(e, state, context) =>
          console.log("index:", state.index)
        }
        dot={
          <View
            style={{
              backgroundColor: "rgba(0,0,0,.2)",
              width: 5,
              height: 5,
              borderRadius: 4,
              marginLeft: 3,
              marginRight: 3,
              marginTop: 3,
              marginBottom: 3,
            }}
          />
        }
        activeDot={
          <View
            style={{
              backgroundColor: "#000",
              width: 8,
              height: 8,
              borderRadius: 4,
              marginLeft: 3,
              marginRight: 3,
              marginTop: 3,
              marginBottom: 3,
            }}
          />
        }
        paginationStyle={{
          bottom: -23,
          left: null,
          right: 10,
        }}
        showsPagination={true}
        loop
      >
        {cards.map((card) => (
          <Slide
            key={card.id}
            src={card.src}
            text={card.text}
            numberOfLines={1}
          />
        ))}
      </Swiper>
      {/* )} */}
    </View>
  );
}
