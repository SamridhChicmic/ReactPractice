import { NavLink, } from "react-router-dom";
import { ROUTES } from "../../../../Shared/Constant";
import { useMemo } from "react";

export interface NavbarElement{
    title:string,
    path:string
}
function useCustomNavBar() {
  const handleLogoClick=()=>{
    console.log("On Click Logo")
  }
  const navbarElement:Array<NavbarElement>=[
       {
        title:"1",
        path:`${ROUTES.SIDEBAR}/agency`
       },
       {
        title:"2",
        path:`${ROUTES.SIDEBAR}/notification`
       },
       {
        title:"3",
        path:`${ROUTES.SIDEBAR}/credits`
       }
  ]
  const renderAuthorizedLinks =useMemo(()=>{
    return navbarElement.map((link) => {
        return (
          <NavLink
            key={link.title}
            to={link.path}
            className={`[text-decoration:none] relative text-[inherit] inline-block min-w-[58px]`}
          >
            {link.title}
          </NavLink>
        );
      });
  },[]) 
  return {
    handleLogoClick,
    renderAuthorizedLinks,
  }
}

export default useCustomNavBar