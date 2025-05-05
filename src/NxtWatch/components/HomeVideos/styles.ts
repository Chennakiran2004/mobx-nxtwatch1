import styled from "styled-components";

export const HomeMainContainer = styled.div<{ theme: string }>`
  background-color: ${(props) =>
    props.theme === "dark" ? "#181818" : "#f9f9f9"};
  min-height: 90vh;
  overflow-y: auto;
`;

export const HomeContainer = styled.div<{ theme: string }>`
  padding: 20px;
  background-color: ${(props) =>
    props.theme === "dark" ? "#0f0f0f" : "#f9f9f9"};
`;

export const SearchContainer = styled.div`
  display: flex;
  border: 1px solid #64748b;
  border-radius: 3px;
  margin-top: 20px;
  width: 50%;
  @media screen and (max-width: 576px) {
    width: 100%;
  }
`;

export const SearchInput = styled.input<{ theme: string }>`
  background-color: transparent;
  width: 100%;
  outline: none;
  padding: 8px;
  border: none;
  color: ${(props) => (props.theme === "dark" ? "#f9f9f9" : "#0f0f0f")};
`;

export const SearchButton = styled.button<{ theme: string }>`
  background-color: ${(props) =>
    props.theme === "dark" ? "#424242" : "#f9f9f9"};
  width: 80px;
  height: 35px;
  border: none;
`;

export const GetPremium = styled.div`
  background-image: url("https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png");
  background-size: cover;
  display: flex;
  flex-direction: column;
  padding: 20px;
  height: 200px;
`;

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  align-self: flex-end;
`;

export const BannerLogo = styled.img`
  width: 100px;
`;

export const BannerText = styled.p`
  font-family: Roboto;
`;

export const GetItButton = styled.button`
  background-color: transparent;
  border: 1px solid #000000;
  font-family: Roboto;
  width: 100px;
  height: 35px;
`;

export const VideosList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding-left: 0px;
  list-style-type: none;
`;

export const VideoCardContainer = styled.div`
  margin: 15px;
  width: 300px;
  @media screen and (max-width: 576px) {
    width: 100%;
    margin: 10px 0;
  }
`;

export const Thumbnail = styled.img`
  width: 100%;
`;

export const ChannelLogo = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  margin-right: 10px;
`;

export const ThumbnailText = styled.div`
  display: flex;
  padding: 10px;
`;

export const VideoTitle = styled.p<{ theme: string }>`
  color: ${(props) => (props.theme === "dark" ? "#f9f9f9" : "#1e293b")};
  font-family: Roboto;
  font-size: 15px;
  font-weight: 500;
  margin-top: 0;
`;

export const VideoTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const VideoDetailsContainer2 = styled.div`
  display: flex;
`;

export const VideoDetailsText = styled.p`
  color: #64748b;
  font-family: Roboto;
  font-size: 13px;
  margin-top: 0;
  margin-right: 10px;
`;
