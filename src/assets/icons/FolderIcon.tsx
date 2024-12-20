import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface Props {
  size?: number;
}

const FolderIcon = ({ size = 24 }: Props) => {
  return (
    <Svg width={size} height={size} fill="none" viewBox="0 0 24 24">
      <Path
        fill="#B0DDC1"
        d="M2 6.95c0-.883 0-1.324.07-1.692A4 4 0 0 1 5.257 2.07C5.626 2 6.068 2 6.95 2c.386 0 .58 0 .766.017a4 4 0 0 1 2.18.904c.144.119.28.255.554.529L11 4c.816.816 1.224 1.224 1.712 1.495a4 4 0 0 0 .848.352C14.098 6 14.675 6 15.828 6h.374c2.632 0 3.949 0 4.804.77.08.07.154.145.224.224.77.855.77 2.172.77 4.804V14c0 3.771 0 5.657-1.172 6.828C19.656 21.999 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172C2.001 19.656 2 17.771 2 14V6.95Z"
        opacity={0.5}
      />
      <Path
        fill="#B0DDC1"
        d="M20 6.238c0-.298-.005-.475-.025-.63a3 3 0 0 0-2.583-2.582C17.197 3 16.965 3 16.5 3H9.988c.116.104.247.234.462.45L11 4c.816.816 1.224 1.224 1.712 1.495.269.15.554.268.85.352C14.097 6 14.674 6 15.828 6h.373c1.78 0 2.957 0 3.798.238Z"
      />
      <Path fill="#B0DDC1" fillRule="evenodd" d="M12.25 10a.75.75 0 0 1 .75-.75h5a.75.75 0 1 1 0 1.5h-5a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
    </Svg>
  );
};

export default FolderIcon;
