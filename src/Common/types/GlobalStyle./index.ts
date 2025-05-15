import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    backgroundColor: string;
    textColor: string;
    cardBackgroundColor: string;
    borderColor: string;
  }
}
