"use client";

import { useEffect, useRef, useState } from "react";
import { Play, Pause, AlertCircle } from "lucide-react";
import { Soundwave } from "@/components/ui/Soundwave";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

/**
 * Sample-call audio player with the live-line soundwave as the visualizer.
 * Degrades gracefully if the audio file isn't present yet (placeholder state):
 * it never dead-ends — it points the visitor to book a live demo instead.
 */
export function AudioPlayer({
  src,
  title = "Sample AI call",
  subtitle = "Hear how it answers, handles questions, and books the appointment.",
}: {
  src: string;
  title?: string;
  subtitle?: string;
}) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [current, setCurrent] = useState(0);
  const [errored, setErrored] = useState(false);

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    const onTime = () => {
      setCurrent(a.currentTime);
      setProgress(a.duration ? (a.currentTime / a.duration) * 100 : 0);
    };
    const onLoaded = () => setDuration(a.duration || 0);
    const onEnd = () => {
      setPlaying(false);
      setProgress(0);
      setCurrent(0);
    };
    const onError = () => setErrored(true);
    a.addEventListener("timeupdate", onTime);
    a.addEventListener("loadedmetadata", onLoaded);
    a.addEventListener("ended", onEnd);
    a.addEventListener("error", onError);
    return () => {
      a.removeEventListener("timeupdate", onTime);
      a.removeEventListener("loadedmetadata", onLoaded);
      a.removeEventListener("ended", onEnd);
      a.removeEventListener("error", onError);
    };
  }, []);

  const toggle = async () => {
    const a = audioRef.current;
    if (!a) return;
    try {
      if (playing) {
        a.pause();
        setPlaying(false);
      } else {
        await a.play();
        setPlaying(true);
        trackEvent("audio_play");
      }
    } catch {
      setErrored(true);
    }
  };

  const fmt = (t: number) => {
    if (!Number.isFinite(t)) return "0:00";
    const m = Math.floor(t / 60);
    const s = Math.floor(t % 60);
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <div className="w-full rounded-3xl border border-void-700/70 bg-void-800/60 p-6 shadow-violet sm:p-8">
      <audio ref={audioRef} src={src} preload="none" />

      <div className="flex items-center gap-5">
        <button
          type="button"
          onClick={toggle}
          disabled={errored}
          aria-label={playing ? "Pause sample call" : "Play sample call"}
          className={cn(
            "flex h-16 w-16 shrink-0 items-center justify-center rounded-full transition-all duration-200",
            errored
              ? "cursor-not-allowed bg-void-700 text-cloud/40"
              : "bg-ember text-void shadow-ember hover:bg-ember-deep hover:scale-105"
          )}
        >
          {playing ? <Pause className="h-6 w-6" /> : <Play className="ml-0.5 h-6 w-6" />}
        </button>

        <div className="min-w-0 flex-1">
          <p className="font-display font-semibold text-white">{title}</p>
          <p className="truncate text-sm text-cloud/60">{subtitle}</p>

          <div className="mt-3 flex items-center gap-3">
            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-void-700">
              <div
                className="h-full rounded-full bg-gradient-to-r from-violet to-mint transition-[width] duration-150"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="font-mono text-xs text-cloud/50">
              {fmt(current)} / {fmt(duration)}
            </span>
          </div>
        </div>

        <div className="hidden sm:block">
          <Soundwave bars={6} active={playing} height={36} />
        </div>
      </div>

      {errored && (
        <p className="mt-5 flex items-start gap-2 rounded-xl border border-amber-400/25 bg-amber-400/[0.06] px-4 py-3 text-sm text-amber-200/90">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
          The sample clip isn&apos;t loaded yet. Book a free demo and I&apos;ll have
          your AI receptionist answer a live call so you can hear it for real.
        </p>
      )}
    </div>
  );
}
