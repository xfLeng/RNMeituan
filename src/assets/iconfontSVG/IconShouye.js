/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconShouye = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M209.7 498.6c-14.2 0-25.6 11.5-25.6 25.6v332.2c0 32.1 28.9 58.2 64.3 58.2h526.5c35.5 0 64.3-26.1 64.3-58.2V524.7c0-14.2-11.5-25.6-25.6-25.6-14.2 0-25.6 11.5-25.6 25.6v331.7c0 2.4-5.1 7-13.1 7H248.4c-8 0-13.1-4.6-13.1-7V524.2c0.1-14.1-11.4-25.6-25.6-25.6zM783.2 342.5c-8.9 11-7.3 27.1 3.7 36.1l95.7 77.9c4.8 3.9 10.5 5.7 16.2 5.7 7.4 0 14.8-3.2 19.9-9.5 8.9-11 7.3-27.1-3.7-36.1l-95.7-77.9c-11-8.9-27.2-7.2-36.1 3.8zM124.5 462.2c5.7 0 11.4-1.9 16.2-5.7l355.2-289c4.5-2.6 9.5-3.9 14.8-3.8h1.5c5.3-0.2 10.5 1.1 15.2 3.8l142 115.5c11 8.9 27.1 7.3 36.1-3.7 8.9-11 7.3-27.1-3.7-36.1L558.4 126.7c-0.7-0.6-1.4-1.1-2.1-1.5l-1-0.7c-13.3-8.3-28.8-12.4-44.2-12-15.3-0.3-30.2 4-43.5 12.3-0.9 0.6-1.8 1.2-2.7 1.9l-356.6 290c-11 8.9-12.6 25.1-3.7 36.1 5.1 6.2 12.5 9.4 19.9 9.4z"
        fill={getIconColor(color, 0, '#2c2c2c')}
      />
      <Path
        d="M638.1 803c14.2 0 25.6-11.5 25.6-25.6V556.8c0-32.1-28.9-58.2-64.3-58.2H423.9c-35.5 0-64.3 26.1-64.3 58.2v220.1c0 14.2 11.5 25.6 25.6 25.6 14.2 0 25.6-11.5 25.6-25.6V556.8c0-2.4 5.1-7 13.1-7h175.6c8 0 13.1 4.6 13.1 7v220.5c-0.1 14.2 11.4 25.7 25.5 25.7z"
        fill={getIconColor(color, 1, '#2c2c2c')}
      />
    </Svg>
  );
};

IconShouye.defaultProps = {
  size: 18,
};

IconShouye = React.memo ? React.memo(IconShouye) : IconShouye;

export default IconShouye;
