import useSWR from 'swr'

import fetcher from '@/libs/fetcher'

const useCurrentUser = ()=> {
    const {data, error, isLoading, mutate} = useSWR('/api/current', fetcher)

    return {
        data,
        mutate,
        isLoading,
        error
    }
}
 export default useCurrentUser