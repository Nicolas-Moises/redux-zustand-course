import { PlayCircle, Video as VideoIcon } from "lucide-react";

interface LessonProps {
    title: string
    duration: string
    isCurrent?: boolean
    onPlay: () => void
}

export function Lesson({ title, duration, onPlay, isCurrent = false }: LessonProps) {

    return (
        <button 
            className="flex items-center gap-3 text-sm text-zinc-400 data-[active=true]:text-emerald-400 enabled:hover:text-zinc-100" 
            onClick={onPlay}
            disabled={isCurrent}
            data-active={isCurrent}
        >
            {
                isCurrent ? (
                    <PlayCircle size={16} className="text-emerald-400" />
                ) : (
                    <VideoIcon size={16} className="text-zinc-500" />
                )
            }
            <span>
                {title}
            </span>
            <span className="ml-auto font-mono text-xs text-zinc-500">{duration}</span>
        </button>
    )
}