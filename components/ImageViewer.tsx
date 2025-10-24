import { Image } from "expo-image";
import { ImageSourcePropType, StyleSheet } from "react-native";

type Props = { imageSource: ImageSourcePropType; selectedImage?: string };
export default function ImageViewer({ imageSource, selectedImage }: Props) {
  const imageToShow = selectedImage ? { uri: selectedImage } : imageSource;
  return <Image style={styles.image} source={imageToShow} />;
}
const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
