/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconMeishi1 = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M716.290988 595.237965s-101.128994 0.428-136.042992-17.009999l-391.154977 442.166974S5.85403 1042.280939 70.042026 884.351948l373.512978-366.458978-33.368998-41.705998s-124.578993 28.492998-153.070991 0L2.02103 238.102986s-16.916999-78.014995 51.029997-51.010997l136.042992 119.032993s46.581997 28.101998 34.019998-34.000998L104.063024 170.08299s-30.297998-84.993995 34.019998-51.029997l119.032993 119.050993s69.844996-0.689 34.019998-51.010997L172.08502 68.041996s-9.676999-67.574996 51.029997-34.019998l238.083986 238.102986s18.647999 106.321994 0 136.042992l46.656997 46.656997L971.387973 0.022h51.029997s35.024998 226.787987-306.123982 595.219965z m17.009999 51.010997l272.103984 238.102986c29.590998 174.52899-119.050993 136.042992-119.050993 136.042992L597.258995 697.279959c20.340999-28.492998 136.042992-51.029997 136.042992-51.029997z"
        fill={getIconColor(color, 0, '#FF8800')}
      />
    </Svg>
  );
};

IconMeishi1.defaultProps = {
  size: 18,
};

IconMeishi1 = React.memo ? React.memo(IconMeishi1) : IconMeishi1;

export default IconMeishi1;
