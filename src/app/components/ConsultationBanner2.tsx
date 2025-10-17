

import Image from "next/image";
import AnimatedButton from "./AnimatedButton";

export default function ConsultaionBanner2() {
    return (
        <section className="bg-[url('/consultation-banner2.png')] bg-cover bg-[80%_center] min-h-[400px] flex items-center py-14 lg:py-26">
            <div className="max-w-[1320px] mx-auto px-6">
                <h2 className="text-white text-3xl lg:text-[40px] font-medium max-w-[450px] mb-4">
                    Fast Company Setup
                    Cost Checker
                </h2>

                <div className="grid lg:grid-cols-2 gap-6 items-center">
                    <p className="leading-snug lg:text-lg text-[#CBC8C8]">Estimate your Dubai business setup costs in seconds with our calculator, so you can plan your budget confidently and avoid surprises</p>
                    <AnimatedButton href="" label="Cost Calculator" className="w-fit transparent-btn lg:ml-auto" />
                </div>
            </div>
        </section>
    );
}
