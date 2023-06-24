import React, { useCallback } from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import Button from './Button';
interface ModalProps{
    isOpen?: boolean;
    onClose: ()=> void;
    onSubmit:()=> void;
    body:React.ReactElement;
    disabled?:boolean
    actionLabel:string
    footer:React.ReactElement;
    title?: string;
} 

const Modal:React.FC<ModalProps> = ({isOpen, onClose, onSubmit, body, disabled, actionLabel, footer, title, }) => {
    const handleClose = useCallback(()=>{
        if(disabled){
            return
        }
        onClose()
    }, [disabled, onClose]);

    const handSubmit = useCallback(()=>{
        if(disabled){
            return;
        }
        onSubmit()
    }, [disabled, onSubmit]);
    if (!isOpen){
        return null
    }
  return (
    <>
    <div 
    className="
    justify-center 
    items-center 
    flex 
    overflow-x-hidden 
    overflow-y-auto 
    fixed 
    inset-0 
    z-50 
    outline-none 
    focus:outline-none
    bg-neutral-800 
    bg-opacity-70">
            <div className="relative 
            w-full 
            lg:w-3/6 
            my-6 
            mx-auto 
            lg:max-w-3xl 
            h-full 
            lg:h-auto">
        {/* content */} 
    
    <div className="
    h-full 
    border-0 
    rounded-lg 
    shadow-lg 
    relative 
    flex 
    flex-col 
    w-full
    bg-black 
    outline-none 
    lg:h-auto 
     focus:outline-none">
        {/* Header */}
        <div className="
        flex 
        items-center 
        justify-between 
        p-10 
        rounded-t">
            <h3 className='text-white text-3xl font-semibold'>{title}</h3>
            <button 
            onClick={handleClose}
            className='p-1 ml-auto text-white border-0 hover:opacity-70 transition'>
                <AiOutlineClose size={20} />
            </button>

        </div>
        {/* Body */}
        <div className="p-10 flex-auto relative">
            {body}
        </div>
        {/* footer */}
        <div className="flex flex-col gap-2 p-10">
            <Button 
            disabled = {disabled} 
            label= {actionLabel} 
            secondary fullwidth 
            large onClick={handSubmit}/>
            {footer}
        </div>

    </div>
</div>
</div>
    </>
  )
}

export default Modal
