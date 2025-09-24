import { Metadata, ResolvingMetadata } from 'next';
import Image from "next/image";
export const CheckmarkIcon = (
  <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_1066_2522)">
      <path d="M8.14709 13.1021L4.96484 9.91907L6.02534 8.85857L8.14709 10.9796L12.3891 6.73682L13.4503 7.79807L8.14709 13.1021Z" fill="#2B296B" />
      <path fillRule="evenodd" clipRule="evenodd" d="M1.21484 9.86658C1.21484 5.31033 4.90859 1.61658 9.46484 1.61658C14.0211 1.61658 17.7148 5.31033 17.7148 9.86658C17.7148 14.4228 14.0211 18.1166 9.46484 18.1166C4.90859 18.1166 1.21484 14.4228 1.21484 9.86658ZM9.46484 16.6166C8.57842 16.6166 7.70068 16.442 6.88173 16.1028C6.06278 15.7635 5.31867 15.2663 4.69187 14.6395C4.06508 14.0128 3.56788 13.2686 3.22866 12.4497C2.88944 11.6307 2.71484 10.753 2.71484 9.86658C2.71484 8.98015 2.88944 8.10241 3.22866 7.28346C3.56788 6.46452 4.06508 5.7204 4.69187 5.09361C5.31867 4.46681 6.06278 3.96961 6.88173 3.63039C7.70068 3.29117 8.57842 3.11658 9.46484 3.11658C11.2551 3.11658 12.9719 3.82774 14.2378 5.09361C15.5037 6.35948 16.2148 8.07637 16.2148 9.86658C16.2148 11.6568 15.5037 13.3737 14.2378 14.6395C12.9719 15.9054 11.2551 16.6166 9.46484 16.6166Z" fill="#2B296B" />
    </g>
    <defs>
      <clipPath id="clip0_1066_2522">
        <rect width="18" height="18" fill="white" transform="translate(0.464844 0.866577)" />
      </clipPath>
    </defs>
  </svg>

);

export async function generateMetadata() {

  const metadata: Metadata = {
    title: 'Service Inspo | Corporative Services',
    description: '',
    keywords: '',

  };

  return metadata;
}

import Header from "../../components/Header";
import Partners from "../../components/Partners";

import CostCalculator from "../../components/CostCalculator";



import ConsultationBanner from "../../components/ConsultationBanner";

import Footer from "../../components/Footer";
import ServiceTabs from "@/app/components/ServiceTabs";




export default function ProServices() {
  return (
    <>
      <Header />
      <section className="py-14 lg:py-20    mt-[70] lg:mt-[100px] service-section relative">
        <div className='service-shape'>
          <div className='max-w-[1320px] px-6 relative w-full h-full mx-auto'></div>
        </div>
        <div className="max-w-[1320px] mx-auto px-6  grid lg:grid-cols-3 z-1 gap-6 relative">
          <div className='flex flex-col gap-6 lg:gap-12 lg:col-span-2'>
            <div>
              <h1 className='text-3xl lg:text-[36px] xl:text-[48px] font-bold mb-1 leading-tight max-w-[500px] mb-2'>PRO Services </h1>
              <p className='max-w-[500px]'>UAE PRO Services: Fast Company Setup, Licensing, Visas, and Government Approvals</p>
            </div>
            <Image
              src="/pro-services.png"
              alt="Business for Success"
              width={550}
              height={550}
              className="object-cover f-full  rounded-[16px] w-full"
            />
            <div className='flex flex-col gap-8 md:gap-12'>
              <div>
                <h5 className='font-semibold mb-5 text-xl md:text-2xl'>Expert PRO Services in Dubai for Hassle‑Free Setup and Compliance</h5>
                <div className='text-[#A7A9AC] flex flex-col gap-4'>
                  <p >A Public Relations Officer (PRO) plays a crucial role in Dubai, serving as the liaison between businesses and government authorities to ensure fast approvals, smooth operations, and full regulatory compliance. INSPO delivers simplified PRO services across the UAE, helping investors navigate documentation, licensing, visas, and approvals in both Mainland and Free Zones with transparency and accuracy. By appointing INSPO as a PRO agent, companies receive tailored support for company formation, trade license processing, Arabic translations, and government interactions—reducing admin burden and avoiding delays or fines. Our expert team understands unique business needs, manages end‑to‑end formalities, and can help cut administrative and PRO costs by up to 70%, so operations start quickly and remain compliant.</p>
                </div>

              </div>
              <div className='flex flex-col gap-6'>

                <div className='grid md:grid-cols-3 gap-6'>
                  <div className='  text-sm lg:px-3'>
                    <h5 className='text-lg md:text-xl font-semibold mb-2'>Employment Visa </h5>
                    <p className='text-[#A7A9AC]'>End-to-end processing of employee visas, from application to stamping.</p>
                  </div>
                  <div className='  text-sm lg:px-3'>
                    <h5 className='text-lg md:text-xl font-semibold mb-2'>Family Visa</h5>
                    <p className='text-[#A7A9AC]'>Assistance with sponsoring and processing dependent visas for family members.</p>
                  </div>
                  <div className='  text-sm lg:px-3'>
                    <h5 className='text-lg md:text-xl font-semibold mb-2'>Maid Visa</h5>
                    <p className='text-[#A7A9AC]'>Complete support for hiring and sponsoring domestic workers.</p>
                  </div>
                  <div className='  text-sm lg:px-3'>
                    <h5 className='text-lg md:text-xl font-semibold mb-2'>Tourist Visa </h5>
                    <p className='text-[#A7A9AC]'>Fast and reliable tourist visa issuance for short-term visits.</p>
                  </div>
                  <div className='  text-sm lg:px-3'>
                    <h5 className='text-lg md:text-xl font-semibold mb-2'>Amer Services </h5>
                    <p className='text-[#A7A9AC]'>Smooth handling of all immigration-related processes and government approvals.</p>
                  </div>
                  <div className='  text-sm lg:px-3'>
                    <h5 className='text-lg md:text-xl font-semibold mb-2'>Tasheel Services </h5>
                    <p className='text-[#A7A9AC]'>Comprehensive support for labour card issuance, renewals, and all Ministry of Labour transactions.</p>
                  </div>

                </div>
                <div className='grid md:grid-cols-2 gap-6'>
                  <div className='  text-sm lg:px-3'>
                    <h5 className='text-lg md:text-xl font-semibold mb-2'>Certificate Attestation & Equivalency</h5>
                    <p className='text-[#A7A9AC]'>Legalization, verification, and attestation of educational, personal, and commercial documents.</p>
                  </div>
                  <div className='  text-sm lg:px-3'>
                    <h5 className='text-lg md:text-xl font-semibold mb-2'>Agreement Typing & Translation</h5>
                    <p className='text-[#A7A9AC]'>Professional drafting of agreements, with legal and normal translation in multiple languages.</p>
                  </div>
                </div>
              </div>
              <div className='lg:p-10 p-5 text-white bg-[var(--blue)] rounded-xl grid md:grid-cols-2 gap-6'>
                <h4 className=' text-xl max-w-[300px]'>Explore Our Tailored PRO
                  Service Packages</h4>

                <li className="flex items-center gap-4">
                  <span className="bg-white p-3 rounded-full  w-12 h-12 flex items-center justify-center">
                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.9016 0.866752C7.0446 1.68928 7.9346 2.81199 8.6946 3.88632L9.1366 4.52223L9.5536 5.1295C9.76218 5.4304 9.85137 5.79655 9.80416 6.1582C9.75695 6.51985 9.57664 6.8517 9.2976 7.09054L7.3466 8.52132C7.25234 8.58853 7.18599 8.68724 7.15988 8.79911C7.13376 8.91098 7.14965 9.02841 7.2046 9.12958C7.6466 9.92249 8.4326 11.1035 9.3326 11.9921C10.2326 12.8808 11.4856 13.7083 12.3446 14.1941C12.4523 14.2538 12.5791 14.2705 12.6989 14.2408C12.8186 14.211 12.9223 14.1371 12.9886 14.0342L14.2586 12.1255C14.4921 11.8192 14.8365 11.614 15.2198 11.5529C15.603 11.4918 15.9954 11.5795 16.3146 11.7976L16.9776 12.2509C18.2166 13.1 19.5476 14.0648 20.5656 15.3514C20.727 15.5566 20.8298 15.8008 20.863 16.0586C20.8962 16.3163 20.8588 16.5781 20.7546 16.8167C19.9176 18.7452 17.7996 20.3873 15.5966 20.3073L15.2966 20.2905L15.0636 20.2708L14.8056 20.2412L14.5246 20.2036L14.2196 20.1543L14.0596 20.1246L13.7236 20.0535L13.5476 20.014L13.1816 19.9212L12.7966 19.8126L12.3946 19.6842C10.5486 19.0661 8.2056 17.8516 5.8016 15.4778C3.3976 13.104 2.1686 10.7914 1.5426 8.96863L1.4126 8.57168L1.3026 8.19152L1.2086 7.83012L1.1306 7.48847C1.1081 7.38146 1.0871 7.27415 1.0676 7.16657L1.0176 6.8654L0.977601 6.58793L0.948601 6.33318L0.928601 6.1031L0.912601 5.80687C0.831601 3.63847 2.5126 1.53228 4.4566 0.709751C4.69058 0.609987 4.9468 0.572004 5.20013 0.599529C5.45346 0.627054 5.69519 0.71914 5.9016 0.866752ZM14.0366 4.41657L14.1526 4.42941C14.8805 4.55619 15.5491 4.90727 16.0625 5.43232C16.5759 5.95737 16.9078 6.62944 17.0106 7.3522C17.0473 7.6022 16.9855 7.85656 16.838 8.06296C16.6905 8.26936 16.4685 8.4121 16.2177 8.46181C15.9669 8.51152 15.7063 8.46442 15.4896 8.3302C15.2729 8.19599 15.1165 7.98487 15.0526 7.74027L15.0296 7.62671C14.9894 7.34342 14.8669 7.07769 14.677 6.86163C14.4872 6.64558 14.238 6.48844 13.9596 6.40921L13.8046 6.37465C13.5535 6.3307 13.3289 6.19369 13.1767 5.99163C13.0245 5.78957 12.9563 5.53773 12.9859 5.28763C13.0155 5.03752 13.1408 4.80805 13.3361 4.64613C13.5314 4.48422 13.782 4.4021 14.0366 4.41657ZM14.0446 1.41478C15.6359 1.41478 17.162 2.03897 18.2872 3.15005C19.4125 4.26113 20.0446 5.76807 20.0446 7.33937C20.0443 7.59104 19.9467 7.83312 19.7718 8.01612C19.5968 8.19913 19.3576 8.30926 19.1032 8.32401C18.8488 8.33876 18.5982 8.25701 18.4028 8.09548C18.2073 7.93395 18.0817 7.70481 18.0516 7.4549L18.0446 7.33937C18.0445 6.33669 17.6582 5.37158 16.9641 4.63976C16.2699 3.90795 15.3199 3.4642 14.3066 3.39853L14.0446 3.38964C13.7794 3.38964 13.525 3.28561 13.3375 3.10043C13.15 2.91525 13.0446 2.66409 13.0446 2.40221C13.0446 2.14033 13.15 1.88917 13.3375 1.70399C13.525 1.51881 13.7794 1.41478 14.0446 1.41478Z" fill="#2B286B" />
                    </svg>

                  </span>
                  <div className="flex flex-col gap-1">
                    <span className="text-[14px]">Call Us 24/7</span>
                    <span className="font-semibold">+91 9048 552244</span>
                  </div>
                </li>

              </div>


            </div>
          </div>
          <div className='lg:col-span-1'>
            <div className='max-w-[500px] mx-auto'>
              <ServiceTabs current="/services/pro-services" />
            </div>
          </div>


        </div>

      </section>


      <ConsultationBanner />
      <Partners />
      <CostCalculator />

      <Footer />
    </>
  );
}
