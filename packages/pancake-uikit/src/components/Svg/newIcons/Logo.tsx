import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  return (
    <Svg viewBox="0 0 194 236" {...props}>
      <path d="M56.276 179.643H0.00462341V235.964H56.276V179.643Z" fill="#BB1FFF" />
      <path
        d="M0.00462341 55.5449H141.226V95.1592C141.226 101.089 139.881 106.073 137.054 110.386C134.36 114.7 130.188 117.933 124.938 120.088C119.688 122.242 113.359 123.322 105.956 123.322H56.28V179.643H111.073C128.573 179.643 143.516 176.409 155.903 169.808C168.423 163.207 177.845 153.639 184.307 140.974C190.769 128.443 194 113.216 194 95.5675V0.0323486H0.00462341V55.5449Z"
        fill="#BB1FFF"
      />
      <path d="M0.00462341 235.968V179.643L56.276 235.968H0.00462341Z" fill="#9900FF" />
    </Svg>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
