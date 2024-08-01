import Test from "../../Components/TestingComponent/Test";
import { ROUTES } from "../../Shared/Constant";
import Agency from "./componets/Agency";
import Credit from "./componets/Credit";
import Notification from "./componets/Notification";
import { PARAM_NAME, SideBarElement } from "./helper/constant"
import { SideElement } from "./types/type"
import {  useParams,useNavigate} from 'react-router-dom';
function SideBar() {
    const {tab}=useParams()
    const navigate=useNavigate()
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
  return (
    <div>
        {
            SideBarElement.map((SideBar:SideElement)=>{
                return (<div key={SideBar.title} 
                className={SideBar.link===tab?`text-blue-800 font-mono font-bold`:''}
                onClick={()=>{navigate(`${ROUTES.SIDEBAR}/${SideBar.link}`)}}>{SideBar.title}</div>)
            })
            
        }
       {renderPage()}
    </div>
  )
}

export default SideBar