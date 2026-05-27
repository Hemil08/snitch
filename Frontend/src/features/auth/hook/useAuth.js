import {setError, setLoading, setUser} from "../state/auth.slice.js";
import { login, register } from "../service/auth.api.js";
import { useDispatch } from "react-redux";
import { getMe } from "../service/auth.api.js";
const useAuth = () => {
    const dispatch = useDispatch() 

    async function handleRegister({email,contact,password,fullname,isSeller=false}){

        const data = await register({email,contact,password,fullname,isSeller})

        dispatch(setUser(data.user))

        return data.user

    }  

    async function handleLogin({email,password}){

        const data = await login({email,password})

        dispatch(setUser(data.user))

        return data.user
    }

    async function handleGetMe(){
        try{
            dispatch(setLoading(true))
            const data = await getMe()
            dispatch(setUser(data.user))
        }
        catch(error){
            console.log(error)
        } finally{
            dispatch(setLoading(false))
        }
        


        dispatch(setLoading(false))
    }


    return{ handleRegister, handleLogin, handleGetMe}
        
}

export default useAuth