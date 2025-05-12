import React from "react";
import { observer } from "mobx-react-lite";
import Layout from "../../../Common/components/Layout";
import { HomeMainContainer } from "./styles";
import HomeContent from "../HomeContent";

const HomeVideos: React.FC = observer(() => (
  <Layout>
    <HomeMainContainer data-testid="Home container">
      <HomeContent />
    </HomeMainContainer>
  </Layout>
));

export default HomeVideos;
