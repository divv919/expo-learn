import { Image } from "expo-image";
import { ImageSourcePropType, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
type Props = {
  imageSize: number;
  stickerSource: ImageSourcePropType;
  containerWidth?: number;
  containerHeight?: number;
};
export default function EmojiSticker({
  imageSize,
  stickerSource,
  containerWidth = 320,
  containerHeight = 440,
}: Props) {
  const scaleSize = useSharedValue(imageSize);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const imageStyle = useAnimatedStyle(() => ({
    width: withSpring(scaleSize.value),
    height: withSpring(scaleSize.value),
  }));
  const containerStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value },
      { translateY: translateY.value },
    ],
  }));
  const doubleTap = Gesture.Tap()
    .numberOfTaps(2)
    .onStart(() => {
      if (scaleSize.value !== imageSize * 2) {
        scaleSize.value = scaleSize.value * 2;
      } else {
        scaleSize.value = Math.round(scaleSize.value / 2);
      }
    });
  const drag = Gesture.Pan().onChange((event) => {
    translateX.value = translateX.value + event.changeX;
    translateY.value = translateY.value + event.changeY;
  });

  return (
    <GestureDetector gesture={drag}>
      <Animated.View style={[containerStyle, { top: -300 }]}>
        <GestureDetector gesture={doubleTap}>
          <Animated.Image
            source={stickerSource}
            style={[imageStyle, { width: imageSize, height: imageSize }]}
          />
        </GestureDetector>
      </Animated.View>
    </GestureDetector>
  );
}
