
import { ROUTES_CONFIG } from '../Shared/Constant';
import SideBar from '../Views/SideBar';
import { CustomRouter } from './RootRoutes';

// eslint-disable-next-line import/prefer-default-export
export const PRIVATE_ROUTES: Array<CustomRouter> = [
  {
    path:`${ROUTES_CONFIG.SIDEBAR.path}/:tab`,
    element:<SideBar/>,
    title:ROUTES_CONFIG.SIDEBAR.title
  }
];
