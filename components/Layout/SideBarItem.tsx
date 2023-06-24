import useCurrentUser from '@/hooks/useCurrentUser';
import useLoginModal from '@/hooks/useLoginModal';
import { useRouter } from 'next/router';
import React, { useCallback } from 'react'
import { IconType } from 'react-icons'
interface SideBarItemProps {
  label: string;
  icon:IconType;
  href?:string;
  onClick?: ()=> void;
  auth?: boolean;
}

const SideBarItem:React.FC<SideBarItemProps> = ({
  label,
  href,
  icon:Icon,
  onClick,
  auth,
}) => {
  const {data: currentUser} = useCurrentUser();
  const loginModal = useLoginModal()
  const router = useRouter()
  const handleClick = useCallback(()=>{
    if(onClick) {
      return onClick()
    }

  if(auth && !currentUser){
    loginModal.onOpen()
  }  else if(href){
    router.push(href)
  }
  }, [router, onClick, href, currentUser, auth, loginModal])
  return (
    <div 
    onClick={handleClick}
    className = "flex flex-row items-center">
      <div className="relative rounded-full h-14 w-14 flex items-center justify-center p-4 hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer lg:hidden" >
        <Icon  size={28} color='white'/>
      </div>
      <div className="relative hidden gap-4 rounded-full items-center p-4 cursor pointer lg:flex hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer">
        <Icon  size = {24} color='white'/>
        <p className='text-white hidden lg:block text-xl' >{label}</p>
      </div>
    </div>
  )
}

export default SideBarItem
