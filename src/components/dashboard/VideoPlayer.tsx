import { Play } from "lucide-react";

interface VideoPlayerProps {
  title: string;
  videoUrl?: string | null;
}

export function VideoPlayer({ title, videoUrl }: VideoPlayerProps) {
  if (videoUrl) {
    return (
      <div className="aspect-video w-full overflow-hidden rounded-xl bg-[#1F2937]">
        <video
          src={videoUrl}
          controls
          className="h-full w-full"
          poster=""
        >
          Votre navigateur ne supporte pas la lecture vidéo.
        </video>
      </div>
    );
  }

  return (
    <div className="flex aspect-video w-full flex-col items-center justify-center rounded-xl bg-[#1F2937] text-white">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/10">
        <Play className="h-10 w-10 fill-white text-white" />
      </div>
      <p className="mt-4 text-sm font-medium">Lecteur Vidéo</p>
      <p className="mt-1 text-xs text-white/70">{title}</p>
    </div>
  );
}
