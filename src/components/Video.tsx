import ReactPLayer from 'react-player'
// import { next, useCurrentLesson } from '../store/slices/player'
// import { useAppDispatch, useAppSelector } from '../store'
import { Loader } from 'lucide-react'
import { useCurrentLesson, useStore } from '../zustand-store'

export function Video() {
    // const dispatch = useAppDispatch()
    // function handlePlayNext() {
    //     dispatch(next())
    // }

    // const { currentLesson } = useCurrentLesson()
    // const isCourseLoading = useAppSelector(state => state.player.isLoading)
    
    const { currentLesson } = useCurrentLesson()
    const { isLoading, next} = useStore(store => {
        return {
            isLoading: store.isLoading,
            next: store.next
        }
    })

    function handlePlayNext() {
            next()
        }

    return (
        <div className="w-full bg-zinc-900 aspect-video">
            {isLoading ? (
                <div className='flex h-full items-center justify-center'>
                    <Loader size={24} className='text-zinc-400 animate-spin' />
                </div>
            ) : (
                <ReactPLayer 
                    width="100%"
                    height="100%"
                    controls
                    playing
                    onEnded={handlePlayNext}
                    url={`https://www.youtube.com/watch?v=${currentLesson?.id}`}
                />
            )}
            
        </div>
    )
}