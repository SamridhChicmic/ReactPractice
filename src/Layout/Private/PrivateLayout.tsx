import CustomNavBar from "../../Components/Shared/CustomNavBar"
import { AppLayoutProps } from "../AppLayout.d"

function PrivateLayout({children}:AppLayoutProps) {
  return (
    <div className="flex flex-col">
        <CustomNavBar/>
        {children}
    </div>
  )
}

export default PrivateLayout