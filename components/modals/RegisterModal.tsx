import useRegisterModal from "@/hooks/useRegisterModal"
import { useCallback, useState } from "react";
import axios from 'axios'
import Input from "../Input";
import Modal from "../Modal";
import useLoginModal from "@/hooks/useLoginModal";
import { toast } from "react-hot-toast";
import { signIn } from "next-auth/react";


const RegisterModal = () => {
    const  registerModal = useRegisterModal();
    const loginmodal = useLoginModal()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setisLoading] = useState(false)
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')

    const toggle = useCallback(()=>{
        if(isLoading){
            return
        }
        registerModal.onClose()
        loginmodal.onOpen()
    }, [isLoading, registerModal, loginmodal])
    const onSubmit = useCallback(async ()=>{
        try{

            setisLoading(true)
            // Todo login modal
            await axios.post('/api/register', {
                email,
                password,
                username,
                name
            })
            toast.success('Account created!')
            signIn('credentials', {
                email,
                password
            });
            registerModal.onClose()
        } catch (error) {
            console.log(error)
            toast.error('Something went wrong')
        } finally {
            setisLoading(false);
        }
    }, [ registerModal, email, username, password, name]);

    const bodyContent = (
        <div className="flex flex-col gap-4">
             <Input 
            placeholder ='username'
            onChange = {(e)=> setUsername(e.target.value)}
            value= {username}
            disabled = {isLoading}
            />
             <Input 
            placeholder ='Name'
            onChange = {(e)=> setName(e.target.value)}
            value= {name}
            disabled = {isLoading}
            />
            <Input 
            placeholder ='Email'
            onChange = {(e)=> setEmail(e.target.value)}
            value= {email}
            disabled = {isLoading}
            />
            <Input 
            placeholder ='Password'
            type="password"
            onChange = {(e)=> setPassword(e.target.value)}
            value= {password}
            disabled = {isLoading}
            />
        </div>
        
    )
    const footerContent = (
        <div className="text-neutral-400 text-center mt-4">
            <p>Already have an account? <span onClick={toggle} className="text-white cursor-pointer hover:underline">Sign in</span></p>
        </div>
    )
  return (
   <Modal 
   footer = {footerContent}
   body={bodyContent}
   disabled = {isLoading}
   isOpen = { registerModal.isOpen}
   title="Create an account"
   actionLabel="Sign up"
   onClose={ registerModal.onClose}
   onSubmit={onSubmit}
   />
  )
}

export default  RegisterModal
