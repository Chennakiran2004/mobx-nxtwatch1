export interface NavMobileProps {
  logoURL: string;
  isDarkTheme: boolean;
  toggleTheme: () => void;
  onClickLogout: () => void;
  theme: string;
  onLogoClick: () => void;
}
