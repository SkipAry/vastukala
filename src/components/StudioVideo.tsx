"use client";

import { useEffect, useRef } from "react";

export default function StudioVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.35 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative mt-6 aspect-video w-full overflow-hidden bg-brand-charcoal lg:aspect-[21/9]">
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
        poster="/videos/vastukala-office-studio-poster.jpg"
        muted
        loop
        playsInline
        preload="metadata"
        disablePictureInPicture
        disableRemotePlayback
      >
        <source src="/videos/vastukala-office-studio.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
