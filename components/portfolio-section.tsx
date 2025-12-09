"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type PortfolioItem = {
  type: "img" | "video";
  size: "t-square" | "t-wide" | "t-tall";
  src: string;
  title: string;
  desc: string;
};

const contentPool: { images: string[]; videos: string[] } = {
  images: [
    "/assets/portfolio_bridal_1.png",
    "/assets/v3-portfolio-1.png",
    "/assets/portfolio_editorial_1.png",
    "/assets/v3-portfolio-2.png",
    "/assets/portfolio_detail_1.png",
    "/assets/portfolio_texture_1.png",
    "/assets/portfolio_bw_portrait.png",
    "/assets/v3-detail.png",
  ],
  videos: [
    "/assets/video_1.mp4",
    "/assets/video_2.mp4",
    "/assets/video_3.mp4",
    "/assets/video_4.mp4",
    "/assets/video_5.mp4",
    "/assets/video_6.mp4",
  ],
};

const titles = [
  "Ethereal Bride",
  "Golden Hour Glow",
  "Avant-Garde",
  "Bridal Radiance",
  "Luminous Texture",
  "Liquid Gold",
  "Timeless Noir",
  "Refined Detail",
];

const descriptions = [
  "A celebration of natural beauty, enhancing the bride's features with soft, diffused lighting and premium skin-first products.",
  "Capturing the perfect moment where light meets artistry. A study in warmth and radiance.",
  "Bold, graphic, and unapologetically artistic. High-fashion makeup that tells a story.",
  "The signature Ethereal Glow look: flawless skin, defined eyes, and a finish that lasts all day.",
  "Close-up details showcasing the texture and finish of high-end luxury cosmetics.",
];

const row1Data: PortfolioItem[] = [
  {
    type: "img",
    size: "t-square",
    src: contentPool.images[0],
    title: titles[0],
    desc: descriptions[0],
  },
  {
    type: "video",
    size: "t-wide",
    src: contentPool.videos[0],
    title: "Cinematic Mood",
    desc: descriptions[1],
  },
  {
    type: "img",
    size: "t-tall",
    src: contentPool.images[1],
    title: titles[1],
    desc: descriptions[2],
  },
  {
    type: "video",
    size: "t-wide",
    src: contentPool.videos[1],
    title: "Runway Motion",
    desc: "Capturing the flow and movement of high fashion.",
  },
  {
    type: "img",
    size: "t-square",
    src: contentPool.images[3],
    title: titles[3],
    desc: descriptions[1],
  },
  {
    type: "video",
    size: "t-tall",
    src: contentPool.videos[2],
    title: "Liquid Gold",
    desc: "Abstract macro textures defining luxury.",
  },
];

const row2Data: PortfolioItem[] = [
  {
    type: "video",
    size: "t-wide",
    src: contentPool.videos[3],
    title: "Skincare Ritual",
    desc: "The foundation of every great look.",
  },
  {
    type: "img",
    size: "t-square",
    src: contentPool.images[4],
    title: titles[4],
    desc: descriptions[4],
  },
  {
    type: "video",
    size: "t-tall",
    src: contentPool.videos[4],
    title: "Portrait Motion",
    desc: "A moment of stillness in motion.",
  },
  {
    type: "img",
    size: "t-square",
    src: contentPool.images[6],
    title: titles[6],
    desc: descriptions[0],
  },
  {
    type: "video",
    size: "t-wide",
    src: contentPool.videos[5],
    title: "Final Touch",
    desc: "The last detail that completes the vision.",
  },
  {
    type: "img",
    size: "t-tall",
    src: contentPool.images[5],
    title: titles[5],
    desc: descriptions[2],
  },
];

export function PortfolioSection() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  // Scroll Logic Refs
  const totalSetWidthRef = useRef(0);
  const isPausedRef = useRef(false);
  const isHoveringRef = useRef(false);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const startScrollLeftRef = useRef(0);
  const requestRef = useRef<number>();

  useEffect(() => {
    // Calculate total width
    const widthMap = {
      "t-square": 280,
      "t-wide": 480,
      "t-tall": 220,
    };
    const gap = 16;
    let w = 0;
    row1Data.forEach((i) => (w += widthMap[i.size] + gap));
    totalSetWidthRef.current = w;

    if (scrollerRef.current) {
      scrollerRef.current.scrollLeft = w; // Start in middle set
    }

    const autoScroll = () => {
      if (!isPausedRef.current && scrollerRef.current) {
        scrollerRef.current.scrollLeft += 0.8;
        if (scrollerRef.current.scrollLeft >= totalSetWidthRef.current * 2) {
          scrollerRef.current.scrollLeft -= totalSetWidthRef.current;
        }
        if (scrollerRef.current.scrollLeft <= 0) {
          scrollerRef.current.scrollLeft += totalSetWidthRef.current;
        }
      }
      requestRef.current = requestAnimationFrame(autoScroll);
    };

    requestRef.current = requestAnimationFrame(autoScroll);

    // Observer for videos
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const vid = entry.target.querySelector("video");
          if (entry.isIntersecting) {
            entry.target.classList.add("loaded");
            if (vid) vid.play().catch(() => {});
          } else {
            if (vid) vid.pause();
          }
        });
      },
      { root: scrollerRef.current, threshold: 0.2 }
    );

    // Initial delay for nodes to render
    setTimeout(() => {
      document.querySelectorAll(".tile").forEach((el) => observer.observe(el));
    }, 100);

    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      observer.disconnect();
    };
  }, []);

  // Event Handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollerRef.current) return;
    isDraggingRef.current = true;
    isPausedRef.current = true;
    startXRef.current = e.pageX - scrollerRef.current.offsetLeft;
    startScrollLeftRef.current = scrollerRef.current.scrollLeft;
    scrollerRef.current.style.cursor = "grabbing";
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current || !scrollerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollerRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 2;
    scrollerRef.current.scrollLeft = startScrollLeftRef.current - walk;
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
    if (scrollerRef.current) scrollerRef.current.style.cursor = "grab";
    if (!isHoveringRef.current) isPausedRef.current = false;
  };

  const handleMouseEnter = () => {
    isHoveringRef.current = true;
    isPausedRef.current = true;
  };

  const handleMouseLeave = () => {
    isHoveringRef.current = false;
    if (!isDraggingRef.current) isPausedRef.current = false;
  };

  const openViewer = (item: PortfolioItem) => {
    if (isDraggingRef.current) return; // Prevent click on drag
    setSelectedItem(item);
    setIsViewerOpen(true);
    isPausedRef.current = true;
  };

  const closeViewer = () => {
    setIsViewerOpen(false);
    setTimeout(() => {
      setSelectedItem(null);
      isPausedRef.current = false;
    }, 300); // Wait for transition
  };

  const renderRow = (data: PortfolioItem[], setIndex: number) => (
    <>
      {data.map((item, idx) => (
        <div
          key={`${setIndex}-${idx}`}
          className={cn("tile", item.size)}
          onClick={() => openViewer(item)}
        >
          <div className="badge">{item.type === "video" ? "Video" : "IMG"}</div>
          {item.type === "video" ? (
            <video
              src={item.src}
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-0 transition-opacity duration-500"
              onLoadedData={(e) =>
                (e.target as HTMLElement).parentElement?.classList.add("loaded")
              }
            />
          ) : (
            <img
              src={item.src}
              alt={item.title}
              draggable="false"
              className="w-full h-full object-cover opacity-0 transition-opacity duration-500 select-none"
              onLoad={(e) =>
                (e.target as HTMLElement).parentElement?.classList.add("loaded")
              }
            />
          )}
        </div>
      ))}
    </>
  );

  return (
    <section
      id="portfolio"
      className="bg-ethereal-900 relative h-screen w-full flex flex-col overflow-hidden"
    >
      <header className="absolute top-0 left-0 w-full p-8 z-10 flex justify-between items-center text-ethereal-100">
        <h1 className="font-display text-2xl tracking-widest text-rose-gold">
          Gallery
        </h1>
      </header>

      <div
        className="scroll-container w-full h-full flex flex-col justify-center gap-4 py-8"
        ref={scrollerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
      >
        <div className="row-track flex gap-4 pl-4">
          {/* Render 3 sets for infinite loop illusion */}
          {[0, 1, 2].map((i) => renderRow(row1Data, i))}
        </div>
        <div className="row-track flex gap-4 pl-4">
          {[0, 1, 2].map((i) => renderRow(row2Data, i))}
        </div>
      </div>

      {/* Viewer Overlay */}
      <div
        className={cn(
          "viewer-overlay fixed inset-0 z-[100] flex justify-center items-center pointer-events-none transition-opacity duration-300",
          isViewerOpen ? "opacity-100 pointer-events-auto" : "opacity-0"
        )}
      >
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
          onClick={closeViewer}
        ></div>
        <div
          className={cn(
            "viewer-card bg-white w-full max-w-5xl h-[80vh] max-h-[700px] rounded-sm shadow-2xl overflow-hidden flex flex-col md:flex-row transform transition-transform duration-300 relative z-10",
            isViewerOpen ? "scale-100" : "scale-95"
          )}
        >
          <div
            className="close-btn absolute top-4 right-4 z-20 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center cursor-pointer transition-colors"
            onClick={closeViewer}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 text-ethereal-900 transition-transform group-hover:rotate-90"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </div>

          <div className="viewer-media-wrapper flex-[1.5] bg-black flex items-center justify-center relative overflow-hidden">
            {selectedItem &&
              (selectedItem.type === "video" ? (
                <video
                  src={selectedItem.src}
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                />
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={selectedItem.src}
                  alt={selectedItem.title}
                  className="w-full h-full object-contain"
                />
              ))}
          </div>

          <div className="viewer-info flex-1 p-10 flex flex-col justify-center bg-white overflow-y-auto">
            <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
              {selectedItem?.type === "video"
                ? "Cinematography"
                : "Photography"}
            </div>
            <h2 className="text-3xl md:text-4xl font-display text-ethereal-900 mb-4 leading-tight">
              {selectedItem?.title || "Untitled Art"}
            </h2>
            <p className="text-base text-gray-600 leading-relaxed font-light">
              {selectedItem?.desc || "No description available."}
            </p>
            <div className="mt-8 pt-8 border-t border-gray-100 grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">
                  Dimensions
                </h4>
                <p className="text-sm font-medium text-ethereal-900">
                  {selectedItem?.size === "t-wide"
                    ? "1920 x 1080"
                    : "1080 x 1350"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
