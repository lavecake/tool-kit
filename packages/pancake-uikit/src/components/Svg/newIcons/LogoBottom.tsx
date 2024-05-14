import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  return (
    <Svg viewBox="0 0 81 83" {...props}>
      <rect width="325" height="159" fill="url(#pattern0_480_1499)" />
      <rect width="81" height="83" fill="url(#pattern0_457_133)" />
      <defs>
        <pattern id="pattern0_457_133" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0_457_133" transform="matrix(0.00029302 0 0 0.000285959 -0.00941548 0)" />
        </pattern>
        <image
          id="image0_457_133"
          width="3477"
          height="3497"
        />
      </defs>
    </Svg>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);