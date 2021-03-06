/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconYou = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M670.37 558.41c-12.31 0-24.56-4.69-33.94-14.06L319.68 227.53c-18.75-18.75-18.75-49.12 0-67.88s49.12-18.75 67.88 0l316.75 316.81c18.75 18.75 18.75 49.12 0 67.88-9.38 9.38-21.63 14.07-33.94 14.07z"
        fill={getIconColor(color, 0, '#131414')}
      />
      <Path
        d="M353.62 878.41c-12.31 0-24.56-4.69-33.94-14.06-18.75-18.75-18.75-49.12 0-67.88l316.75-316.81c18.75-18.75 49.12-18.75 67.88 0s18.75 49.12 0 67.88l-316.75 316.8c-9.38 9.38-21.63 14.07-33.94 14.07z"
        fill={getIconColor(color, 1, '#131414')}
      />
    </Svg>
  );
};

IconYou.defaultProps = {
  size: 18,
};

IconYou = React.memo ? React.memo(IconYou) : IconYou;

export default IconYou;
