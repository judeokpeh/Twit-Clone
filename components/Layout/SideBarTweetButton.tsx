import useLoginModal from '@/hooks/useLoginModal'
import { useRouter } from 'next/router'
import React, { useCallback } from 'react'
import { FaFeather } from 'react-icons/fa'
import LoginModal from '../modals/LoginModal'

const SideBarTweetButton = () => {
  const loginModal = useLoginModal()
    const onClick = useCallback(()=>{
      
      loginModal.onOpen()
    }, [LoginModal])
  return (
    <div onClick={onClick}>
        <div className="
        mt-6
        lg:hidden
        rounded-full
        h-14
        w-14
        p-4
        flex
        items-center
        justify-center
        bg-sky-500
        hover:bg-opacity-80
        transition
        cursor-pointer
        ">
            <FaFeather size={24} color='white'/>
        </div>
        <div className="mt-6 hidden px-4 py-2 rounded-full bg-sky-500 transition lg:block hover:bg-opacity-90 cursor-pointer">
            <p className='text-white text-center hidden lg:block font-semibold' >Tweet</p>
        </div>
      
    </div>
  )
}

export default SideBarTweetButton
