export interface BaseChannelData {
  name: string;
  profileImageUrl: string;
}

export interface ChannelData extends BaseChannelData {
  subscriberCount: string;
}
