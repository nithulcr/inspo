import { Metadata, ResolvingMetadata } from 'next';
import Image from "next/image";
export const CheckmarkIcon = (
  <svg width="30" height="30" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_1057_51)">
      <path d="M8.59143 12.9419L5.40918 9.75891L6.46968 8.69841L8.59143 10.8194L12.8334 6.57666L13.8947 7.63791L8.59143 12.9419Z" fill="#1FAF38" />
      <path fillRule="evenodd" clipRule="evenodd" d="M1.65918 9.70642C1.65918 5.15017 5.35293 1.45642 9.90918 1.45642C14.4654 1.45642 18.1592 5.15017 18.1592 9.70642C18.1592 14.2627 14.4654 17.9564 9.90918 17.9564C5.35293 17.9564 1.65918 14.2627 1.65918 9.70642ZM9.90918 16.4564C9.02276 16.4564 8.14501 16.2818 7.32607 15.9426C6.50712 15.6034 5.763 15.1062 5.13621 14.4794C4.50941 13.8526 4.01221 13.1085 3.67299 12.2895C3.33377 11.4706 3.15918 10.5928 3.15918 9.70642C3.15918 8.82 3.33377 7.94226 3.67299 7.12331C4.01221 6.30436 4.50941 5.56025 5.13621 4.93345C5.763 4.30665 6.50712 3.80945 7.32607 3.47023C8.14501 3.13101 9.02276 2.95642 9.90918 2.95642C11.6994 2.95642 13.4163 3.66758 14.6821 4.93345C15.948 6.19932 16.6592 7.91621 16.6592 9.70642C16.6592 11.4966 15.948 13.2135 14.6821 14.4794C13.4163 15.7453 11.6994 16.4564 9.90918 16.4564Z" fill="#1FAF38" />
    </g>
    <defs>
      <clipPath id="clip0_1057_51">
        <rect width="18" height="18" fill="white" transform="translate(0.90918 0.706421)" />
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

import Partners from "../../components/Partners";

import CostCalculator from "../../components/CostCalculator";



import ConsultationBanner from "../../components/ConsultationBanner";


import ServiceTabs from "@/app/components/ServiceTabs";




export default function BusinessCentreSolutions() {
  return (
    <>
      
      <section className="py-14 lg:py-20    mt-[70] lg:mt-[100px] service-section relative">
        <div className='service-shape'>
          <div className='max-w-[1320px] px-6 relative w-full h-full mx-auto'></div>
        </div>
        <div className="max-w-[1320px] mx-auto px-6  grid lg:grid-cols-3 z-1 gap-6 relative">
          <div className='flex flex-col gap-6 lg:gap-12 lg:col-span-2'>
            <div>
              <h1 className='text-3xl lg:text-[36px] xl:text-[48px] font-bold mb-1 leading-tight max-w-[500px] mb-2'>Business Center Solutions in UAE</h1>
              <p className='max-w-[450px]'>Flexible office spaces, virtual office solutions, meeting rooms, and business support services for UAE companies.</p>
            </div>
            <Image
              src="/business-centre.jpg"
              alt="Business for Success"
              width={550}
              height={550}
              className="object-cover f-full  rounded-[16px] w-full"
            />
            <div className='flex flex-col gap-8 md:gap-12'>
              <div>
                <h5 className='font-semibold mb-5 text-xl md:text-2xl'>Professional Business Center Services for Startups, SMEs, and Entrepreneurs</h5>
                <div className='text-[#A7A9AC] flex flex-col gap-4'>
                  <p >A professional business address and office solution are important for company formation, licensing, client meetings, and daily business operations in the UAE.</p>
                  <p>At INSPO Businessmen Services LLC, we provide flexible business center solutions for startups, entrepreneurs, freelancers, and growing companies across the UAE. Our services include office space assistance, virtual office support, meeting room arrangements, Ejari assistance, reception support, and business address solutions to help your company operate smoothly and professionally.</p>
                </div>

              </div>
              <div>
         
                <div className='grid md:grid-cols-2 gap-6'>
                  <div className='flex gap-2 text-sm '>
                    {CheckmarkIcon}
                    <div>
                      <h5 className='text-xl font-medium mb-1'>Flexible Office Solutions</h5>
                      <p className='text-[#A7A9AC]'>Support for choosing suitable office spaces based on your business activity and budget.</p>
                    </div>
                  </div>

                  <div className='flex gap-2 text-sm '>
                    {CheckmarkIcon}
                    <div>
                      <h5 className='text-xl font-medium mb-1'>Virtual Office Support</h5>
                      <p className='text-[#A7A9AC]'>Professional business address solutions for companies that do not require a full physical office.</p>
                    </div>
                  </div>

                  <div className='flex gap-2 text-sm '>
                    {CheckmarkIcon}
                    <div>
                      <h5 className='text-xl font-medium mb-1'>Meeting Room Facilities</h5>
                      <p className='text-[#A7A9AC]'>Access to professional meeting rooms for client discussions, interviews, and business meetings.</p>
                    </div>
                  </div>

                  <div className='flex gap-2 text-sm '>
                    {CheckmarkIcon}
                    <div>
                      <h5 className='text-xl font-medium mb-1'>Ejari Assistance</h5>
                      <p className='text-[#A7A9AC]'>Support with Ejari documentation and office-related requirements where applicable.</p>
                    </div>
                  </div>

                  <div className='flex gap-2 text-sm '>
                    {CheckmarkIcon}
                    <div>
                      <h5 className='text-xl font-medium mb-1'>Business Address Support</h5>
                      <p className='text-[#A7A9AC]'>Helping companies maintain a professional UAE business address for official and client communication.</p>
                    </div>
                  </div>

                  <div className='flex gap-2 text-sm '>
                    {CheckmarkIcon}
                    <div>
                      <h5 className='text-xl font-medium mb-1'>Reception & Admin Support</h5>
                      <p className='text-[#A7A9AC]'>Assistance with call handling, visitor coordination, mail handling, and basic office support.</p>
                    </div>
                  </div>

                  <div className='flex gap-2 text-sm '>
                    {CheckmarkIcon}
                    <div>
                      <h5 className='text-xl font-medium mb-1'>Cost-Effective Setup</h5>
                      <p className='text-[#A7A9AC]'>Flexible options to reduce office costs while maintaining a professional business presence.</p>
                    </div>
                  </div>

                  <div className='flex gap-2 text-sm '>
                    {CheckmarkIcon}
                    <div>
                      <h5 className='text-xl font-medium mb-1'>Startup & SME Friendly</h5>
                      <p className='text-[#A7A9AC]'>Practical office solutions designed for new companies, small businesses, and growing teams.</p>
                    </div>
                  </div>
                </div>

              </div>
              <div className='lg:p-10 p-5 text-white bg-[var(--blue)] rounded-xl grid md:grid-cols-2 gap-6'>
                <div>
                  <h4 className=' text-xl max-w-[360px]'>Need a Business Center Solution?</h4>
                  <p className='text-sm pt-1'>Call us today for flexible office and business address support in the UAE.</p>
                </div>

                <li className="flex items-center gap-4">
                  <span className="bg-white p-3 rounded-full  w-12 h-12 flex items-center justify-center">
                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.9016 0.866752C7.0446 1.68928 7.9346 2.81199 8.6946 3.88632L9.1366 4.52223L9.5536 5.1295C9.76218 5.4304 9.85137 5.79655 9.80416 6.1582C9.75695 6.51985 9.57664 6.8517 9.2976 7.09054L7.3466 8.52132C7.25234 8.58853 7.18599 8.68724 7.15988 8.79911C7.13376 8.91098 7.14965 9.02841 7.2046 9.12958C7.6466 9.92249 8.4326 11.1035 9.3326 11.9921C10.2326 12.8808 11.4856 13.7083 12.3446 14.1941C12.4523 14.2538 12.5791 14.2705 12.6989 14.2408C12.8186 14.211 12.9223 14.1371 12.9886 14.0342L14.2586 12.1255C14.4921 11.8192 14.8365 11.614 15.2198 11.5529C15.603 11.4918 15.9954 11.5795 16.3146 11.7976L16.9776 12.2509C18.2166 13.1 19.5476 14.0648 20.5656 15.3514C20.727 15.5566 20.8298 15.8008 20.863 16.0586C20.8962 16.3163 20.8588 16.5781 20.7546 16.8167C19.9176 18.7452 17.7996 20.3873 15.5966 20.3073L15.2966 20.2905L15.0636 20.2708L14.8056 20.2412L14.5246 20.2036L14.2196 20.1543L14.0596 20.1246L13.7236 20.0535L13.5476 20.014L13.1816 19.9212L12.7966 19.8126L12.3946 19.6842C10.5486 19.0661 8.2056 17.8516 5.8016 15.4778C3.3976 13.104 2.1686 10.7914 1.5426 8.96863L1.4126 8.57168L1.3026 8.19152L1.2086 7.83012L1.1306 7.48847C1.1081 7.38146 1.0871 7.27415 1.0676 7.16657L1.0176 6.8654L0.977601 6.58793L0.948601 6.33318L0.928601 6.1031L0.912601 5.80687C0.831601 3.63847 2.5126 1.53228 4.4566 0.709751C4.69058 0.609987 4.9468 0.572004 5.20013 0.599529C5.45346 0.627054 5.69519 0.71914 5.9016 0.866752ZM14.0366 4.41657L14.1526 4.42941C14.8805 4.55619 15.5491 4.90727 16.0625 5.43232C16.5759 5.95737 16.9078 6.62944 17.0106 7.3522C17.0473 7.6022 16.9855 7.85656 16.838 8.06296C16.6905 8.26936 16.4685 8.4121 16.2177 8.46181C15.9669 8.51152 15.7063 8.46442 15.4896 8.3302C15.2729 8.19599 15.1165 7.98487 15.0526 7.74027L15.0296 7.62671C14.9894 7.34342 14.8669 7.07769 14.677 6.86163C14.4872 6.64558 14.238 6.48844 13.9596 6.40921L13.8046 6.37465C13.5535 6.3307 13.3289 6.19369 13.1767 5.99163C13.0245 5.78957 12.9563 5.53773 12.9859 5.28763C13.0155 5.03752 13.1408 4.80805 13.3361 4.64613C13.5314 4.48422 13.782 4.4021 14.0366 4.41657ZM14.0446 1.41478C15.6359 1.41478 17.162 2.03897 18.2872 3.15005C19.4125 4.26113 20.0446 5.76807 20.0446 7.33937C20.0443 7.59104 19.9467 7.83312 19.7718 8.01612C19.5968 8.19913 19.3576 8.30926 19.1032 8.32401C18.8488 8.33876 18.5982 8.25701 18.4028 8.09548C18.2073 7.93395 18.0817 7.70481 18.0516 7.4549L18.0446 7.33937C18.0445 6.33669 17.6582 5.37158 16.9641 4.63976C16.2699 3.90795 15.3199 3.4642 14.3066 3.39853L14.0446 3.38964C13.7794 3.38964 13.525 3.28561 13.3375 3.10043C13.15 2.91525 13.0446 2.66409 13.0446 2.40221C13.0446 2.14033 13.15 1.88917 13.3375 1.70399C13.525 1.51881 13.7794 1.41478 14.0446 1.41478Z" fill="#2B286B" />
                    </svg>

                  </span>
                  <div className="flex flex-col gap-1">
                    <span className="text-[14px]">Get Business Center Support</span>
                    <span className="font-semibold">+971505614942</span>
                  </div>
                </li>

              </div>
            </div>
          </div>
          <div className='lg:col-span-1'>
            <div className='max-w-[500px] mx-auto'>
              <ServiceTabs current="/services/business-centre-solutions" />
            </div>
          </div>


        </div>

      </section>


      <ConsultationBanner />
      <Partners />
      <CostCalculator />

      
    </>
  );
}
