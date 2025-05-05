import React from "react";
import { useTheme } from "../../Context/ThemeContext";
import Header from "../Header";
import Sidebar from "../Sidebar";
import {
  LayoutContainer,
  MainBody,
  SidebarContainer,
  ContentContainer,
} from "./styledComponents";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const { isDarkTheme } = useTheme();
  const theme = isDarkTheme ? "dark" : "light";

  return (
    <LayoutContainer data-testid="layout" theme={theme}>
      <Header />
      <MainBody>
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>
        <ContentContainer>{children}</ContentContainer>
      </MainBody>
    </LayoutContainer>
  );
};

export default Layout;
