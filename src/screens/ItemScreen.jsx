import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import HeaderForItem from "../components/HeaderForItem";
import { COLORS, SIZES } from "../constants";
import StarIcon from "../assets/images/star.png";
import LikeIcon from "../assets/images/like.png";
import CartAddIcon from "../assets/images/cartAdd.png";

const ItemScreen = ({ route }) => {
  const { item } = route.params;
  return (
    <View>
      <HeaderForItem />
      <View style={styles.itemContainer}>
        <View style={styles.imageContainer}>
          <Image source={item.image} style={styles.image} />
        </View>
        <Text style={styles.title}>{item.name}</Text>
        <View style={styles.propertyContainer}>
          <View style={styles.property}>
            <Image source={StarIcon} style={styles.propertyIcon} />
            <Text>{item.rate}</Text>
          </View>
          <View style={styles.property}>
            <Image style={styles.propertyIcon} source={LikeIcon} />
            <Text>{item.likes}</Text>
          </View>
        </View>
        <Text style={styles.descriptionTitle}>Description</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
      <TouchableOpacity style={styles.cartAdding}>
        <Text style={styles.cost}>${item.cost}</Text>
        <View style={styles.cartButton}>
          <Image source={CartAddIcon} style={styles.addingImage} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    marginLeft: 25,
    marginRight: 25,
  },
  imageContainer: {
    width: 340,
    height: 340,
    backgroundColor: "white",
    alignSelf: "center",
    borderRadius: 170,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40,
  },
  image: {
    resizeMode: "contain",
    width: 240,
    height: 240,
  },
  title: {
    fontSize: SIZES.h1,
    marginBottom: 20,
  },
  description: {
    fontSize: SIZES.body3,
    marginBottom: 30,
  },
  descriptionTitle: {
    fontSize: SIZES.h2,
    marginBottom: 10,
  },
  propertyIcon: {
    width: 30,
    height: 30,
  },
  propertyContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  property: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  cartAdding: {
    backgroundColor: "black",
    height: "10%",
    width: "90%",
    borderRadius: 20,
    alignSelf: "center",
    marginBottom: 10,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  itemIcon: {
    height: 100,
    width: 100,
    resizeMode: "contain",
  },
  cost: {
    color: "white",
    fontSize: SIZES.body2,
    marginLeft: 10,
  },
  cartButton: {
    backgroundColor: COLORS.secondary,
    width: 45,
    height: 45,
    borderRadius: 10,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  addingImage: {
    height: 35,
    width: 35,
  },
});

export default ItemScreen;
