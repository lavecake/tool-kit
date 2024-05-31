import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Square: React.FC<SvgProps> = ({ ...props }) => {
  return (
    <Svg viewBox="0 0 12 13" {...props}>
      <rect width="12" height="13" fill="url(#pattern0_212_44)" />
      <defs>
        <pattern id="pattern0_212_44" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0_212_44" transform="matrix(0.0515873 0 0 0.047619 -0.015873 0)" />
        </pattern>
        <image
          id="image0_212_44"
          width="20"
          height="21"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAVCAYAAABG1c6oAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAwIDc5LjE3MWMyN2ZhYiwgMjAyMi8wOC8xNi0yMjozNTo0MSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI0LjAgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzM2NjAwREUxMTE1MTFFRjlENEFCNUE4NzMwRTYyNEIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzM2NjAwREYxMTE1MTFFRjlENEFCNUE4NzMwRTYyNEIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3MzY2MDBEQzExMTUxMUVGOUQ0QUI1QTg3MzBFNjI0QiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3MzY2MDBERDExMTUxMUVGOUQ0QUI1QTg3MzBFNjI0QiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PkEJr4MAAAB9SURBVHjaYvzD8L+BgXrgASPQwP9UNPAgEwOVwaiB9DNwIRBfpJaBIMMSgNiBGEOZiDQMBD4QYyi+hP0RiBWgBiEDkNh9chI2PxAfAGIBJDEQewMlXtZHMlQAytbHp4GFiEiBGcpAyDBiDSTKoNGsN4gNBMWyIxXN+wAQYAAz8RqgTJLLdAAAAABJRU5ErkJggg=="
        />
      </defs>
    </Svg>
  );
};

export default Square;
