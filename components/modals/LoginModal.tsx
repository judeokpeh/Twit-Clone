import useLoginModal from "@/hooks/useLoginModal"
import { useCallback, useState } from "react";
import Input from "../Input";
import Modal from "../Modal";

import useRegisterModal from "@/hooks/useRegisterModal";
import { signIn } from "next-auth/react";
import { toast } from "react-hot-toast";

const LoginModal = () => {
    const registerModal = useRegisterModal()
    const loginModal = useLoginModal();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setisLoading] = useState(false)

    const toggle = useCallback(()=>{
        if(isLoading){
            return
        }
        registerModal.onOpen()
        loginModal.onClose()
    }, [isLoading, registerModal, loginModal])
    const onSubmit = useCallback(async ()=>{
        try{

            setisLoading(true)
            await signIn('credentials', {
                email,
                password
            })
            
            loginModal.onClose()
        } catch (error) {
            console.log(error)
            
        } finally {
            setisLoading(false);
        }
    }, [loginModal, email, password]);

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Input 
            
            placeholder ='Email'
            onChange = {(e)=> setEmail(e.target.value)}
            value= {email}
            disabled = {isLoading}
            />
            <Input 
            placeholder ='password'
            type="password"
            onChange = {(e)=> setPassword(e.target.value)}
            value= {password}
            disabled = {isLoading}
            />
        </div>
    )
    const footerContent = (
        <div className="text-neutral-400 text-center mt-4">
            <p>First time using tweeter? <span onClick={toggle} className="text-white cursor-pointer hover:underline">Sign up</span></p>
        </div>
    )
  return (
   <Modal 
   body={bodyContent}
   disabled = {isLoading}
   isOpen = {loginModal.isOpen}
   title="Login"
   actionLabel="Sign in"
   onClose={loginModal.onClose}
   onSubmit={onSubmit}
   footer = {footerContent}
   />
  )
}

export default LoginModal
