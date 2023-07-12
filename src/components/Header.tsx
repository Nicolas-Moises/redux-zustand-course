// import { useAppSelector } from "../store"
// import { useCurrentLesson } from "../store/slices/player"
import { useCurrentLesson, useStore } from '../zustand-store';

export function Header() {
    //Redux
    const { currentLesson, currentModule } = useCurrentLesson()
    // const isCourseLoading = useAppSelector(state => state.player.isLoading)
    
    const isLoading = useStore(store => store.isLoading)
    
    if(isLoading) {
        return (
            <div className="flex flex-col gap-1">
                <div className="h-6 w-56 bg-zinc-800/60 animate-pulse rounded" />
                <div className="h-3 w-32 bg-zinc-800/60 animate-pulse rounded" />
            </div>
        )
    }
    return (
        <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-bold">{currentLesson?.title}</h1>
            <span className="text-sm text-zinc-400">Módulo "{currentModule?.title}"</span>
        </div>
    )
}