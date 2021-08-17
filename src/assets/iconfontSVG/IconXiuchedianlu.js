/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconXiuchedianlu = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1102 1024" width={size} height={size} {...rest}>
      <Path
        d="M1050.151385 254.030769h-101.218462a27.332923 27.332923 0 0 0-12.366769 3.229539l-55.847385-170.535385A133.356308 133.356308 0 0 0 762.801231 0H310.350769a133.513846 133.513846 0 0 0-118.075077 86.646154l-55.138461 168.566154a24.733538 24.733538 0 0 0-7.876923-1.260308H28.199385A28.750769 28.750769 0 0 0 0 282.702769v24.812308c0 15.596308 12.524308 28.356923 28.199385 28.750769l38.203077 6.695385c-12.839385 25.993846-19.298462 54.587077-18.904616 83.495384L33.083077 591.399385c0 4.726154 0.315077 9.609846 0.945231 14.336a58.840615 58.840615 0 0 0-0.945231 9.373538v198.498462a50.333538 50.333538 0 0 0 49.545846 51.12123h77.430154a50.333538 50.333538 0 0 0 50.254769-51.2v-63.724307h284.750769a313.816615 313.816615 0 0 1 310.744616-313.895385c91.372308 0.078769 178.018462 40.881231 236.307692 111.222154L1031.876923 426.299077a182.429538 182.429538 0 0 0-18.983385-83.731692l37.415385-6.459077a28.750769 28.750769 0 0 0 28.199385-28.75077v-24.812307c0-15.753846-12.603077-28.514462-28.278154-28.750769v0.236307z m-804.076308 401.723077a77.508923 77.508923 0 1 1 76.091077-77.430154 76.8 76.8 0 0 1-76.091077 77.430154z m559.261538-317.755077H273.250462a63.172923 63.172923 0 0 1-58.919385-83.495384l41.432615-126.818462a62.227692 62.227692 0 0 1 58.998154-43.086769H764.061538a62.306462 62.306462 0 0 1 58.919385 43.165538l41.511385 126.818462a63.251692 63.251692 0 0 1-59.313231 83.337846l0.236308 0.078769z m0.551385 161.319385a253.636923 253.636923 0 1 0 248.832 253.636923 251.273846 251.273846 0 0 0-248.910769-253.636923h0.078769z m124.455385 280.339692a16.777846 16.777846 0 0 1-6.144 12.839385l-63.56677 50.412307a16.856615 16.856615 0 0 0-6.06523 15.43877l5.198769 32.68923c1.575385 9.846154-16.541538 18.825846-16.541539 18.825847H768a16.068923 16.068923 0 0 1-15.753846-18.747077l4.962461-33.083077a16.541538 16.541538 0 0 0-5.986461-15.281231l-63.645539-50.333538a16.384 16.384 0 0 1-6.144-12.839385V671.744c0-4.332308 1.654154-8.507077 4.726154-11.579077l59.313231-60.416a15.990154 15.990154 0 0 1 11.264-4.726154h11.657846a16.147692 16.147692 0 0 1 15.990154 16.305231v89.796923a16.068923 16.068923 0 0 0 16.068923 16.384h10.948923a16.147692 16.147692 0 0 0 15.990154-16.384v-89.796923a16.068923 16.068923 0 0 1 15.911385-16.305231h11.736615c4.253538 0 8.349538 1.732923 11.342769 4.726154l59.313231 60.416c2.993231 3.150769 4.726154 7.246769 4.726154 11.579077v107.913846z"
        fill={getIconColor(color, 0, '#237CFA')}
      />
    </Svg>
  );
};

IconXiuchedianlu.defaultProps = {
  size: 18,
};

IconXiuchedianlu = React.memo ? React.memo(IconXiuchedianlu) : IconXiuchedianlu;

export default IconXiuchedianlu;
