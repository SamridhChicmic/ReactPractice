import { SideElement } from "../types/type";
export const Label = {
  AGENCY: "Agency",
  NOTIFCATION: "Notification",
  Credit: "Credits",
};
export const PARAM_NAME = {
  AGENCY: "agency",
  NOTIFCATION: "notification",
  Credit: "credits",
};
export const SideBarElement: Array<SideElement> = [
  {
    title: Label.AGENCY,
    link: PARAM_NAME.AGENCY,
  },
  {
    title: Label.NOTIFCATION,
    link: PARAM_NAME.NOTIFCATION,
  },
  {
    title: Label.Credit,
    link: PARAM_NAME.Credit,
  },
];
