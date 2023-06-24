import { BsTwitter } from 'react-icons/bs'
import { useRouter } from 'next/router'

const SideBarLogo = () => {
    const router = useRouter()
  return (
    <div onClick={()=> router.push('/')} className='
    rounded-full
    h-14
    w-14
    p-4
    flex
    items-center
    justify-center
    hover:bg-blue-500
    hover:bg-opacity-10
    cursor-pointer
    transition
    '>
      <BsTwitter size={28} color='white'/>
    </div>
  )
}

export default SideBarLogo
