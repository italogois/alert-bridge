interface SlackBlock {
  type: "section";
  text?: {
    type: "mrkdwn";
    text: string;
  };
  fields?: {
    type: "mrkdwn";
    text: string;
  }[];
}

export interface SlackMessage {
  text?: string;
  blocks?: SlackBlock[];
  channel?: string;
}
