export interface MenuItem {
  id: string;
  label: string;
  url: string;
  content?: SubMenuItem[];
}

export interface SubMenuItem {
  id: string;
  label: string;
  url: string;
}

export interface NavbarProps {
  menuItems: MenuItem[];
}
