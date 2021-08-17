/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconPaotui = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1027 1024" width={size} height={size} {...rest}>
      <Path
        d="M664.74496 51.22048c44.1088 0 79.90784 34.35008 79.90784 76.6976 0 42.37824-35.79904 76.72832-79.90784 76.72832-44.14464 0-79.91296-34.35008-79.91296-76.72832 0-42.34752 35.76832-76.6976 79.91296-76.6976zM718.4128 972.77952s52.17792-12.32896 42.65984-43.52512l-175.93344-366.51008v-38.4l55.02464-120.36096s24.02304-26.90048 40.02304-3.84c0 0 33.02912 35.80416 120.07936 80.02048l77.55776 0.7936s42.99776-0.16896 42.99776-38.57408c0 0 6.8608-34.8672-41.1648-37.43232l-43.38688-0.34304s-100.0704-53.12-138.74688-106.92096c0 0-21.15584-61.42464-155.42784-61.42464l-207.44192-1.28512c-16.9984 0-36.0448 34.55488-36.0448 34.55488L192.73216 431.5136s-26.65984 49.92512 21.33504 49.92512c0 0 27.6992 6.71744 47.71328-24.96512L341.3504 351.49312s14.33088-25.9328 33.34144-24.51456l67.55328 0.48128s24.51456-3.35872 16.48128 15.37536c0 0-67.8656 93.76256-81.23392 175.104l0.06656 207.89248s2.42688 28.14976-22.85056 32.03072c-82.65216 0-192.82944 0.13824-192.82944 0.13824s-56.02304-3.5328-56.02304 46.08512c0 0-3.01056 45.14816 53.70368 45.14816l275.0976 0.16896c32.03072-2.56 39.09632-93.34784 39.09632-93.34784s4.98688-135.03488 29.01504-100.48c0 0 118.07232 211.21536 158.09536 278.80448 0 0 4.50048 38.4 57.5488 38.4z"
        fill={getIconColor(color, 0, '#feb916')}
      />
    </Svg>
  );
};

IconPaotui.defaultProps = {
  size: 18,
};

IconPaotui = React.memo ? React.memo(IconPaotui) : IconPaotui;

export default IconPaotui;
