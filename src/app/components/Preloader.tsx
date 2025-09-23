"use client";

import { useEffect, useState } from "react";

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true); // Start fade out animation
    }, 2000); // Simulate a 2-second loading time

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (fadeOut) {
      const animationTimer = setTimeout(() => {
        setIsLoading(false); // Unmount component after fade out
        onComplete(); // Call onComplete when animation finishes and component is unmounted
      }, 500); // Duration of fade-out animation
      return () => clearTimeout(animationTimer);
    }
  }, [fadeOut, onComplete]);

  if (!isLoading) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
        transition: "opacity 0.5s ease-out", // Fade out transition
        opacity: fadeOut ? 0 : 1,
      }}
    >
      <div className="bg-fixed absolute inset-0 bg-[url('/pattern.png')] bg-cover bg-center"></div>
      <div className=" ">

        <img src="/logo.png" alt="Logo" width={200} height={70} className="w-[200px] lg:w-[250px]" />

      </div>

    </div>
  );
};

export default Preloader;
