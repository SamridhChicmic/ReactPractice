import useCustomNavBar from "./Hook/useCustomNavBar"
import Setting from "./component/Setting"
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
  return (
    <header className={`w-full flex flex-row items-start justify-between pt-0 px-0 pb-[11px]`}>
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
        <Setting/>
    </header>
  )
}

export default CustomNavBar
