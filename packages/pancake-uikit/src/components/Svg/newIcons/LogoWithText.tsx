import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  return isDark ? (
    <Svg viewBox="0 0 423 60" {...props}>
      <rect width="423" height="60" fill="url(#pattern0_480_1489)" />
      <defs>
        <pattern id="pattern0_480_1489" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0_480_1489" transform="matrix(0.000328343 0 0 0.00231481 -0.00318492 0)" />
        </pattern>
        <image
          id="image0_480_1489"
          width="3065"
          height="432"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </Svg>
  ) : (
    <Svg viewBox="0 0 261 40" {...props}>
      <rect width="401" height="57" fill="url(#pattern0_480_1480)" />
      <defs>
        <pattern id="pattern0_480_1480" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0_480_1480" transform="matrix(0.000328279 0 0 0.00230947 -0.00308697 0)" />
        </pattern>
        <image
          id="image0_480_1480"
          width="3065"
          height="433"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </Svg>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
