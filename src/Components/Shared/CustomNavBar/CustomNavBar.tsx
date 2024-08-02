import useCustomNavBar from "./Hook/useCustomNavBar"
import { Label } from "./helper/constant"
export interface CustomNavBarProps{
    isTitle?:boolean
    isImage?:boolean
    isTitleLable?:boolean
    titleLable:string

} 
function CustomNavBar({
    isTitle=true,
    isImage=true,
    isTitleLable=false,
    titleLable=Label.TITLE_LABEL
}:CustomNavBarProps) {
    const {handleLogoClick,renderAuthorizedLinks}=useCustomNavBar()
    console.log("re",renderAuthorizedLinks)
  return (
    <header className={`w-full flex flex-row`}>
       {isTitle && <div
          className="mq450:w-[150px] w-[205px] flex flex-col items-start justify-start px-0 pb-0 box-border"
          onClick={handleLogoClick}
        >
          {isImage && <img
            className="self-stretch h-[20.5px] relative max-w-full overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/vite.svg"
          />}
         { isTitleLable && <div className="self-stretch h-[20.5px] relative max-w-full overflow-hidden shrink-0">{titleLable}</div>}
        </div>}
        {
            renderAuthorizedLinks.length &&  
            <div className="self-stretch flex flex-row items-start justify-between shrink-0 gap-[20px]">
              {renderAuthorizedLinks}
            </div>
          
        }

    </header>
  )
}

export default CustomNavBar
