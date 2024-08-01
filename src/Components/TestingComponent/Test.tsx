import useFirebase from "../../Hooks/useFirebase"
function Test() {
  const {createUser}=useFirebase()
    const onClickButton=()=>{
        console.log("On Click")
        createUser('samridh@gmail.com','samridh@1234')
    }
  return (<>
    <div>Test</div>
    <button onClick={onClickButton}>on Click</button>
    </>
  )
}

export default Test