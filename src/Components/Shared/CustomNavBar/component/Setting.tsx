import CustomDropDown from "../../CustomDropDown"
import { Option } from "../../CustomDropDown/index.d"
const option:Array<Option>=[
    {
        label:'LogOut',
        icon:'LogOut',
        path:'LogOut',
    },
    {
        label:'Other Setting',
        icon:'LogOut',
        path:'LogOut',
    }
]
function Setting() {
    const handleOptionClick=(val:Option)=>{
        console.log(val)
    }
  return (
    <CustomDropDown
    options={option}
    placeholder={'Setting'}
    onChange={handleOptionClick}/>
    
  )
}

export default Setting