import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {Colors} from '@theme';

export default props => (
  <Svg width={23} height={21} fill="none" {...props}>
    {props.isFavourite ? (
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.913.495A6.5 6.5 0 0 1 20.998 11.1l-8.84 8.84a1 1 0 0 1-1.414 0l-8.84-8.84a6.501 6.501 0 1 1 9.194-9.194l.353.353.353-.353a6.502 6.502 0 0 1 2.11-1.41Z"
        fill={Colors.GREEN}
      />
    ) : (
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.913.495A6.5 6.5 0 0 1 20.998 11.1l-8.84 8.84a1 1 0 0 1-1.414 0l-8.84-8.84a6.501 6.501 0 1 1 9.194-9.194l.353.353.353-.353a6.502 6.502 0 0 1 2.11-1.41ZM16.401 2a4.5 4.5 0 0 0-3.182 1.319l-1.06 1.06a1 1 0 0 1-1.415 0l-1.06-1.06a4.501 4.501 0 1 0-6.366 6.366l8.133 8.133 8.133-8.133A4.501 4.501 0 0 0 16.401 2Z"
        fill="#3D3D3D"
      />
    )}
  </Svg>
);
