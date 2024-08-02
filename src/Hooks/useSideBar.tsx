import {  useParams,} from 'react-router-dom';
import { PARAM_NAME } from '../Views/SideBar/helper/constant';
import Agency from '../Views/SideBar/componets/Agency';
import Credit from '../Views/SideBar/componets/Credit';
import Notification from '../Views/SideBar/componets/Notification';
import Test from '../Components/TestingComponent/Test';
function useSideBar() {
 const {tab}=useParams()
 console.log("Side Bar tab",tab)
 const renderPage=()=>{
    switch (tab) {
        case PARAM_NAME.AGENCY:
        return <Agency/>
        break;
        case PARAM_NAME.NOTIFCATION:
        return <Notification/>
        break;
        case PARAM_NAME.Credit:
        return <Credit/>
        default:
            return <Test/>
    }
}
  return {
    tab,
     renderPage
  }
}

export default useSideBar