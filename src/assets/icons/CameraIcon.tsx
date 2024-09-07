import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface Props {
  width?: number;
  height?: number;
}

const CameraIcon = ({ width = 32, height = 32 }: Props) => {
  return (
    <Svg width={width} height={height} fill="none" viewBox="0 0 32 32">
      <Path
        fill="#FBFBFD"
        fillRule="evenodd"
        d="M10.667 5.333c0-.736.55-1.333 1.23-1.333h8.206c.68 0 1.23.597 1.23 1.333s-.55 1.334-1.23 1.334h-8.206c-.68 0-1.23-.598-1.23-1.334ZM13.037 28h5.926c4.161 0 6.242 0 7.737-.963a5.865 5.865 0 0 0 1.635-1.577c.998-1.44.998-3.447.998-7.46s0-6.019-1-7.46A5.866 5.866 0 0 0 26.7 8.963C25.205 8 23.124 8 18.963 8h-5.926c-4.16 0-6.242 0-7.737.963a5.867 5.867 0 0 0-1.633 1.577c-1 1.44-1 3.447-1 7.457V18c0 4.013 0 6.019.998 7.46.432.624.987 1.16 1.635 1.577C6.795 28 8.876 28 13.037 28Zm-2.593-10c0-2.96 2.488-5.357 5.556-5.357S21.556 15.04 21.556 18s-2.49 5.357-5.556 5.357c-3.067 0-5.556-2.4-5.556-5.357Zm2.223 0c0-1.776 1.493-3.213 3.333-3.213s3.333 1.438 3.333 3.213c0 1.775-1.493 3.213-3.333 3.213S12.667 19.775 12.667 18Zm11.481-5.357c-.613 0-1.11.48-1.11 1.072 0 .59.497 1.07 1.11 1.07h.741c.614 0 1.111-.48 1.111-1.07 0-.591-.497-1.072-1.11-1.072h-.742Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default CameraIcon;