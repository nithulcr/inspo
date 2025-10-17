"use client";

import Image from "next/image";
import AnimatedButton from "./AnimatedButton";


export default function AboutUs() {

  return (

    <section className="pt-10 pb-15 lg:pt-20 lg:pb-30">
      <div className="max-w-[1100px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
        <div className="relative flex justify-center  lg:flex h-full">

          <Image
            src="/about-us.png"
            alt="Business for Success"
            width={550}
            height={550}
            className="object-cover f-full  rounded-[16px] mx-auto max-w-[500px]"
          />

        </div>
        <div className="flex flex-col gap-4 lg:gap-6 ">
          <div>
            <div className='text-[var(--blue)] flex gap-3 items-center mb-3'>
              <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.7615 3.02725L21.8719 3.021L22.0073 3.02933L22.101 3.046L22.2292 3.08245L22.3406 3.13037L22.4448 3.18975L22.5385 3.25954L22.624 3.33766L22.6781 3.39912L22.7635 3.51995L22.8177 3.61995C22.8663 3.72412 22.8976 3.83384 22.9115 3.94912L22.9167 4.05954C22.9167 4.13801 22.9083 4.2144 22.8917 4.2887L22.8552 4.41683L16.051 23.247C15.9221 23.5278 15.7152 23.7657 15.455 23.9325C15.1949 24.0992 14.8923 24.1878 14.5833 24.1877C14.3051 24.1882 14.0314 24.1169 13.7889 23.9806C13.5463 23.8442 13.3431 23.6475 13.199 23.4095L13.1312 23.2772L9.63958 16.296L2.69167 12.821C2.43458 12.7034 2.21288 12.5204 2.04872 12.2903C1.88457 12.0601 1.78371 11.7909 1.75625 11.5095L1.75 11.3543C1.75 10.771 2.06354 10.2377 2.62604 9.92725L2.77188 9.85433L21.5396 3.07725L21.65 3.046L21.7615 3.02725Z" fill="#2B286B" />
              </svg>

              WHAT ABOUT US
            </div>

            <h2 className="text-2xl lg:text-[40px] font-medium leading-tight">Empowering Businesses Across the UAE, One Step at a Time</h2>
          </div>
          <p className="leading-snug text-[#A7A9AC]">
            At INSPO Corporate Services, we are more than just consultants — we are growth partners. For over a decade, we’ve been helping entrepreneurs and enterprises turn bold ideas into thriving businesses across all Emirates of the UAE. With deep knowledge of local laws, markets, and opportunities, we simplify the complexities of company setup, making the journey clear, confident, and hassle-free.
          </p>
          {/* <Image
            src="/sign.png"
            alt="sign"
            width={150}
            height={150}
            className="object-contain lg:mt-2 "
          /> */}
          <AnimatedButton href="" label="About Us" className="w-fit text-white lg:mt-2" />


        </div>

      </div>
    </section>

  );
}
