import { BaseChannelModel } from "../BaseChannleModel";
import { ChannelData } from "../../../types/CheannelDetails";

export class ChannelModel extends BaseChannelModel {
  subscriberCount: string;

  constructor(data: ChannelData) {
    super(data);
    this.subscriberCount = data.subscriberCount;
  }
}
