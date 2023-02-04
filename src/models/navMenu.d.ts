export interface NavMenu {
  title: string;
  link: string;
  selected?: boolean;
  submenu?: NavMenu[];
}
