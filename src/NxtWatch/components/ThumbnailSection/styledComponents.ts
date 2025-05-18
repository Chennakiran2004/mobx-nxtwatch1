import styled from "styled-components";

// export const Thumbnail = styled.img<{ $width?: string; $height?: string }>`
//   width: ${({ $width }) => $width || "100%"};
//   height: ${({ $height }) => $height || "auto"};
//   object-fit: contain;
//   display: flex;
// `;

// export const ChannelLogo = styled.img`
//   width: 40px;
//   height: 40px;
//   border-radius: 50px;
//   margin-right: 10px;
// `;

// export const ThumbnailText = styled.div`
//   display: flex;
//   padding: 10px;
// `;

export const ThumbnailText = styled.div`
  width: 100%;
  position: relative;
`;

export const Thumbnail = styled.img<{ $width?: string; $height?: string }>`
  width: ${({ $width }) => $width || "100%"};
  height: ${({ $height }) => $height || "auto"};
  object-fit: cover;
  border-radius: 8px;
`;

export const ChannelLogo = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;
