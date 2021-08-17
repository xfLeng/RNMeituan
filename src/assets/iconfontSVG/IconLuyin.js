/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconLuyin = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 683.52c130.56 0 235.52-102.4 235.52-232.96V256c0-130.56-104.96-232.96-235.52-232.96s-235.52 102.4-235.52 232.96v194.56c0 130.56 102.4 232.96 235.52 232.96z m368.64-281.6c0-23.04-20.48-43.52-46.08-43.52s-43.52 20.48-43.52 43.52c0 5.12 0 10.24 2.56 12.8v33.28c0 151.04-125.44 276.48-281.6 276.48-153.6 0-281.6-125.44-281.6-276.48V409.6c0-2.56 2.56-5.12 2.56-10.24 0-23.04-20.48-43.52-43.52-43.52-25.6 0-43.52 20.48-43.52 43.52v64c0 186.88 140.8 335.36 320 360.96v87.04h-122.88c-25.6 0-46.08 20.48-46.08 46.08s20.48 43.52 46.08 43.52h332.8c28.16 0 43.52-17.92 43.52-43.52 0-23.04-17.92-46.08-43.52-46.08h-122.88v-87.04c184.32-20.48 327.68-174.08 327.68-360.96v-61.44z m0 0"
        fill={getIconColor(color, 0, '#333303')}
      />
    </Svg>
  );
};

IconLuyin.defaultProps = {
  size: 18,
};

IconLuyin = React.memo ? React.memo(IconLuyin) : IconLuyin;

export default IconLuyin;
