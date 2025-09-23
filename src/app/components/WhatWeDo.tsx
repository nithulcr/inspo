"use client";
import Link from "next/link";
import { HardDrive, Wrench, Target, Sun } from 'lucide-react';


const whatWeDoDataEN = [
  {
    id: "01",
    icon: <HardDrive size={32} strokeWidth={1} />
        ,
    title: "Machine Tools",
    description: "Delivering high-precision CNC machining and automation with trusted global brands, ensuring reliability and advanced performance for modern manufacturing.",
  },
  {
    id: "02",
    icon: <Wrench size={32} strokeWidth={1} />
        ,
    title: "Fabrication & Automation",
    description: "Providing cutting-edge CNC laser cutting, welding automation, and waterjet solutions to streamline production with efficiency and accuracy.",
  },
  {
    id: "03",
    icon: <Target size={32} strokeWidth={1} />,
    title: "Metrology",
    description: "Offering advanced measurement and leak testing systems to guarantee quality, accuracy, and compliance in every manufacturing process.",
  },
  {
    id: "04",
    icon: <Sun size={32} strokeWidth={1} />,
    title: "Heat Treatment",
    description: "Specializing in induction heating, vacuum furnaces, and electron beam technologies to enhance durability and performance of critical components.",
  }
];



const sectionTextEN = {
  heading: "What We Do",
  description: "At CP Agencies, we empower industries with advanced solutions in precision engineering and manufacturing. From state-of-the-art machine tools and fabrication automation to accurate metrology systems and innovative heat treatment technologies, we provide end-to-end expertise to enhance productivity, efficiency, and quality.",
  button: "Contact Us",
};



const WhatWeDo = () => {
  const section =   sectionTextEN;
  const data = whatWeDoDataEN;
  return (
    <section className="py-10 lg:py-16 text-[var(--foreground)]" >
      <div className="max-w-[1320px] mx-auto px-6 flex lg:flex-row flex-col items-start lg:items-center gap-5 justify-between mb-18">
        <div>
          <h2 className="text-3xl lg:text-5xl font-medium mb-6">{section.heading}</h2>
          <p className="leading-relaxed max-w-[700px] text-gray-800">{section.description}</p>
        </div>
        <Link href={"/ContactUs"}>
          <button className="inline-flex items-center gap-2 px-10 py-[12px] bg-[var(--blue2)] text-white border rounded-full transition-transform duration-300 hover:scale-105 cursor-pointer">
            {section.button}
          </button>
        </Link>
      </div>
      <div className="max-w-[1320px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 relative">
        {data.map((whatwedo) => (
          <div
            key={whatwedo.id}
            className="bg-white rounded-3xl rounded-br-none p-7 transition-all duration-300 relative top-0 hover:top-[-6px]"
          >
            <div className="flex gap-3 lg:gap-0 items-center lg:items-start lg:flex-col">
              <div className="flex items-center justify-between gap-3 lg:mb-4">
              <div className="w-16 h-16 flex items-center justify-center rounded-full p-4 bg-[var(--blue2)] text-white">
                {whatwedo.icon}
              </div>
            </div>
            <h3 className="text-[20px] lg:text-xl font-semibold">{whatwedo.title}</h3>
            </div>
            <p className="text-md leading-snug lg:pt-4 pt-2">{whatwedo.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};


export default WhatWeDo;
