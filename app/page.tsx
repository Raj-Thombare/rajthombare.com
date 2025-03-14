"use client";

import React, { useEffect, useRef } from "react";
import Head from "next/head";

export default function Home() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let stars = [];
    document.title = "Raj Thombare";

    // Set canvas to full screen
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    // Create stars
    function initStars() {
      stars = [];
      const numberOfStars = Math.floor((canvas.width * canvas.height) / 1000);

      for (let i = 0; i < numberOfStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5 + 0.5,
          brightness: Math.random(),
          maxBrightness: Math.random() * 0.8 + 0.2,
          speedFactor: Math.random() * 0.05 + 0.01,
        });
      }
    }

    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw stars
      stars.forEach((star) => {
        // Update star brightness
        star.brightness += star.speedFactor;
        if (star.brightness > star.maxBrightness) {
          star.speedFactor = -Math.abs(star.speedFactor);
        } else if (star.brightness < 0.1) {
          star.speedFactor = Math.abs(star.speedFactor);
        }

        // Draw the star
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.brightness})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Raj Thombare | Full Stack Engineer</title>
        <meta
          name='description'
          content='Personal portfolio of Raj Thombare, Full Stack Engineer'
        />
      </Head>
      <div className='relative min-h-screen bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] flex items-center justify-center'>
        <canvas
          ref={canvasRef}
          className='absolute top-0 left-0 w-full h-full'
        />
        <div className='relative z-10 text-center'>
          <h1 className='text-5xl md:text-7xl font-bold mb-4 text-white tracking-wider'>
            Raj Thombare
          </h1>
          <div className='h-0.5 w-32 bg-purple-500 mx-auto mb-6'></div>
          <p className='text-xl md:text-2xl text-gray-300 font-semibold tracking-wide mb-8'>
            Full Stack Engineer
          </p>

          {/* Social Media Icons */}
          <div className='flex justify-center gap-6 mb-10'>
            <a
              href='https://github.com/raj-thombare'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-300 hover:text-white transition-colors'
              aria-label='GitHub Profile'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='h-6 w-6'>
                <path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'></path>
              </svg>
            </a>
            <a
              href='https://linkedin.com/in/rajthombare'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-300 hover:text-white transition-colors'
              aria-label='LinkedIn Profile'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='h-6 w-6'>
                <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z'></path>
                <rect x='2' y='9' width='4' height='12'></rect>
                <circle cx='4' cy='4' r='2'></circle>
              </svg>
            </a>
            <a
              href='https://x.com/rajth0mbare'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-300 hover:text-white transition-colors'
              aria-label='Twitter Profile'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='h-6 w-6'>
                <path d='M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z'></path>
              </svg>
            </a>
          </div>

          {/* Resume Button */}
          <a
            href='https://drive.google.com/file/d/1gz7fsQwl2RidWjMr7NA_xDgnP8JjkSxz/view?usp=sharing'
            target='_blank'
            className='inline-block px-6 py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors shadow-lg'>
            View Resume
          </a>
        </div>
      </div>
    </>
  );
}
