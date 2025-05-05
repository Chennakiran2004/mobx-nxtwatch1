export interface MenuItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
  theme: string;
}
