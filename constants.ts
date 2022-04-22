import {Dimensions, Appearance} from 'react-native';

export let COLORS = {
  fontColor: 'black',
  backgroundColor: 'white',
};
const colorScheme = Appearance.getColorScheme();
if (colorScheme === 'dark') {
  COLORS.fontColor = 'white';
  COLORS.backgroundColor = 'black';
} else {
  COLORS.fontColor = 'black';
  COLORS.backgroundColor = 'white';
}
export const SIZES = {
  height: Dimensions.get('screen').height,
  width: Dimensions.get('screen').width,
};
