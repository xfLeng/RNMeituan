/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconKaquan = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M237.77 447.93l-9.056-103.508c-3.08-35.206 22.963-66.244 58.17-69.324l424.976-37.18c35.206-3.08 66.243 22.963 69.323 58.169l13.285 151.843h26.737c11.219 0 21.988 1.925 31.995 5.462V202.635c0-17.67-14.325-31.995-31.995-31.995h-618.57c-17.67 0-31.995 14.325-31.995 31.995v250.757c10.007-3.537 20.776-5.462 31.995-5.462h35.135z m64.234 0h156.591v31.995c0 29.45 23.874 53.325 53.325 53.325 29.45 0 53.325-23.874 53.325-53.325V447.93h164.989l-12.797-146.266-424.977 37.18 9.544 109.086z m-99.369-341.28h618.57c53.011 0 95.985 42.974 95.985 95.985v618.57c0 53.011-42.974 95.985-95.985 95.985h-618.57c-53.011 0-95.985-42.974-95.985-95.985v-618.57c0-53.011 42.974-95.985 95.985-95.985z m0 405.27c-17.67 0-31.995 14.325-31.995 31.995v277.29c0 17.67 14.325 31.995 31.995 31.995h618.57c17.67 0 31.995-14.325 31.995-31.995v-277.29c0-17.67-14.325-31.995-31.995-31.995H624.819c-13.927 49.24-59.2 85.32-112.899 85.32-53.7 0-98.972-36.08-112.899-85.32H202.635z"
        fill={getIconColor(color, 0, '#333303')}
      />
    </Svg>
  );
};

IconKaquan.defaultProps = {
  size: 18,
};

IconKaquan = React.memo ? React.memo(IconKaquan) : IconKaquan;

export default IconKaquan;
