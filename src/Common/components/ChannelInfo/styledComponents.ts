import styled from "styled-components";

export const ChannelDetails = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 18px 0 0 0;
`;

export const ChannelLogo = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-right: 14px;
`;

export const ChannelDetailsText = styled.p<{ theme: string }>`
  color: ${({ theme }) => theme.textColor};
  font-size: 16px;
  font-weight: 500;
  margin: 0;
`;

export const ChannelDetailsText2 = styled.p`
  color: #64748b;
  font-size: 14px;
  margin: 4px 0 0 0;
`;
