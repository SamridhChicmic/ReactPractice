import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { app } from "../Services/Firebase";
import { useDispatch } from "react-redux";
import { updateToken, updateUID } from "../store/Token/TokenSlice";
function useFirebase() {
const auth = getAuth(app);
const dispatch=useDispatch()
const createUser=async (email:string,password:string,name:string)=>{
      await createUserWithEmailAndPassword(auth, email, password)
  .then(async (userCredential) => {
    // Signed up 
    const userToken = await userCredential.user.getIdToken();
    const userUID=userCredential.user.uid
    if (userCredential.user) {
        await updateProfile(userCredential.user, {
            displayName: name,
        });
    }
    console.log(auth.currentUser)
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
const signInUser=async (email:string,password:string)=>{
    signInWithEmailAndPassword(auth, email, password)
  .then(async (userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    
    console.log(user)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("Ereor",errorCode,errorMessage)
  });

}
return {
    createUser,
    signInUser
 }
}

export default useFirebase


