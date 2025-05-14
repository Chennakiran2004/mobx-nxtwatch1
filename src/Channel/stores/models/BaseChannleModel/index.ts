import { BaseChannelData } from "../../../types/CheannelDetails";

export class BaseChannelModel {
  name: string;
  profileImageUrl: string;
  subscriberCount?: string;

  constructor(data: BaseChannelData) {
    const { name, profileImageUrl } = data;
    this.name = name;
    this.profileImageUrl = profileImageUrl;
  }
}
