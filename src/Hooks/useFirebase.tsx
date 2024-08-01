import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../Services/Firebase";
import { useDispatch } from "react-redux";
import { updateToken, updateUID } from "../store/Token/TokenSlice";
function useFirebase() {
const auth = getAuth(app);
const dispatch=useDispatch()
const createUser=async (email:string,password:string)=>{
      await createUserWithEmailAndPassword(auth, email, password)
  .then(async (userCredential) => {
    // Signed up 
    const userToken = await userCredential.user.getIdToken();
    const userUID=userCredential.user.uid
    console.log("user==>",userToken,updateUID)
    dispatch(updateToken({token:userToken}))
    dispatch(updateUID({uid:userUID}))
    // ...
  })
  .catch((error:any) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    console.log("Ereor",errorCode,errorMessage)
  });
}
return {
    createUser
 }
}

export default useFirebase


