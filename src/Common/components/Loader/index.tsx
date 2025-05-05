import React from "react";

import { Dot, LoaderWrapper } from "./styledComponent";

interface ThreeDotsLoaderProps {
  color?: string;
}

const Loader: React.FC<ThreeDotsLoaderProps> = ({ color = "#333" }) => (
  <LoaderWrapper data-testid="three-dots-loader">
    <Dot color={color} />
    <Dot color={color} />
    <Dot color={color} />
  </LoaderWrapper>
);

export default Loader;
