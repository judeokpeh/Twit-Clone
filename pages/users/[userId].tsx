import Header from "@/components/Header"
import useUser from "@/hooks/useUser";
import { useRouter } from "next/router"
import { ClipLoader } from "react-spinners";


const UserView = () => {
    const router = useRouter();
    const {userId} = router.query
    const {data:fetchedUser, isLoading} = useUser(userId as string)
    console.log(fetchedUser)

    if(isLoading || !fetchedUser){
        return(
            <div className="flex justify-center items-center h-full">
                <ClipLoader color="yellow" size={80}/>
            </div>
        )
    }
  return (
    <>
      <Header showBackArrow label ={fetchedUser?.name} />
    </>
  )
}

export default UserView
