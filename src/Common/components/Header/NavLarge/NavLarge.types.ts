export interface NavLargeProps {
  logoURL: string;
  isDarkTheme: boolean;
  toggleTheme: () => void;
  onClickLogout: () => void;
  theme: string;
  onLogoClick: () => void;
}
