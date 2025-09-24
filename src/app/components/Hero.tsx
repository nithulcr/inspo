"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import AnimatedButton from "./AnimatedButton";
import Image from "next/image";


const Hero3 = () => {
    return (
        <>
            <section className="w-full md:min-h-[90vh] bg-[var(--blue)] text-white flex flex-col justify-center items-center px-6 relative mt-[70px] lg:mt-[100px] lg:pb-[70px]">
                {/* Background pattern */}
                <div className="absolute hero-cover inset-0  bg-cover bg-center">
                    <video
                        src="/video.mp4" // correct spelling: video, not 'viedo'
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover relative"
                    />
                </div>

                <div className="max-w-[1320px] grid lg:grid-cols-2 gap-5 ">
                    <div>
                        <motion.div initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }} className="relative z-10 max-w-3xl py-20 lg:pt-40 lg:pb-0 max-w-[700px] lg:px-6">


                            <h1 className="text-4xl lg:text-[36px] xl:text-[48px] font-bold mb-1 leading-tight">
                                Simplify Business Setup
                                in Dubai With INSPO
                            </h1>
                            <p className="text-md md:text-lg font-light2">
                                Business Consultants in Dubai who genuinely care, guiding you step by step
                                with personalized advice to turn your business dream into reality.
                            </p>
                            <div className="mt-5">
                               <AnimatedButton href="" label="Talk with Us" className="w-fit transparent-btn" imgOrSvg={<img src="/whatsapp.png" alt="Icon" className="w-6" />} />
                            </div>


                        </motion.div>
                    </div>
                    <motion.div initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }} className="relative z-10 max-w-3xl pt-10 lg:block hidden">

                        <Image
                            src="/banner-img.png"
                            alt="Founder"
                            width={400}
                            height={400}
                            className="w-full max-h-[88vh] object-contain"
                        />


                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default Hero3;
