import useSWR from 'swr'

import fetcher from '@/libs/fetcher'

const useUsers = ()=> {
    const {data, error, isLoading, mutate} = useSWR('/api/users', fetcher)

    return {
        data,
        mutate,
        isLoading,
        error
    }
}
 export default useUsers