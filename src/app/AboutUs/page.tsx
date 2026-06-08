import { Metadata, ResolvingMetadata } from 'next';
import Image from "next/image";

export async function generateMetadata(
  parent: ResolvingMetadata
): Promise<Metadata> {

  const metadata: Metadata = {
    title: 'Inspo',
    description: '',
    keywords: '',
  };

  return metadata;
}

import Header from "../components/Header";
import Partners from "../components/Partners";

import CostCalculator from "../components/CostCalculator";



import ConsultationBanner from "../components/ConsultationBanner";

import Footer from "../components/Footer";





export default function Home() {
  return (
    <>
      <Header />
      <section className="py-14 lg:py-20    mt-[70] lg:mt-[100px] bg-[#F6F6F6]">
        <div className="max-w-[1320px] mx-auto px-6 flex flex-col gap-6 lg:gap-12">
          <div>
            <span className='text-[#5D666F]'>About inspo</span>
            <h1 className='text-4xl lg:text-[36px] xl:text-[48px] font-bold mb-1 leading-tight max-w-[500px]'>Your Trusted Partner for UAE Business Success</h1>
            <h3>Smart, efficient, and end to end corporate services across the UAE.</h3>
          </div>
          <Image
            src="/about-us-banner.png"
            alt="Business for Success"
            width={550}
            height={550}
            className="object-cover f-full  rounded-[16px] w-full"
          />
          <p className='text-[#434343]'>
            INSPO Businessmen Services LLC is your strategic ally for business setup and corporate services in the UAE. We simplify company formation – whether mainland, freezone, or offshore – so you can focus on growth, not paperwork.
            <br />
            We started with a clear mission: remove the complexity from Dubai and UAE business licensing. Today, we offer fully tailored packages that include trade license assistance, PRO services, VAT & corporate tax advisory, Golden Visa support, bank account opening, and flexible business center solutions (virtual offices, smart desks, meeting rooms). Every solution is built around efficiency, transparency, and your specific goals.
What makes INSPO different? We combine local regulatory expertise with a genuine commitment to your success. Our team handles government liaisons, visa processing, and compliance – so you never face delays or surprises. We also provide competitive, transparent pricing on trade licenses and corporate services, helping you launch and scale without hidden costs.
<br />
Ready to establish or expand your business in the UAE? Let’s talk. Your journey starts with INSPO.
          </p>

        </div>

      </section>
      <section className="pt-14 pb-18 lg:pt-20 lg:pb-30  ">
        <div className="max-w-[1320px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          <div className="relative flex justify-center  lg:flex h-full">

            <Image
              src="/about-us2.png"
              alt="Business for Success"
              width={1000}
              height={1000}
              className="object-cover f-full  rounded-[16px] mx-auto"
            />


          </div>
          <div className="flex flex-col gap-4 lg:gap-5 ">
            <div className='text-[var(--blue)] flex gap-3 items-center'>
              <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.7615 3.02725L21.8719 3.021L22.0073 3.02933L22.101 3.046L22.2292 3.08245L22.3406 3.13037L22.4448 3.18975L22.5385 3.25954L22.624 3.33766L22.6781 3.39912L22.7635 3.51995L22.8177 3.61995C22.8663 3.72412 22.8976 3.83384 22.9115 3.94912L22.9167 4.05954C22.9167 4.13801 22.9083 4.2144 22.8917 4.2887L22.8552 4.41683L16.051 23.247C15.9221 23.5278 15.7152 23.7657 15.455 23.9325C15.1949 24.0992 14.8923 24.1878 14.5833 24.1877C14.3051 24.1882 14.0314 24.1169 13.7889 23.9806C13.5463 23.8442 13.3431 23.6475 13.199 23.4095L13.1312 23.2772L9.63958 16.296L2.69167 12.821C2.43458 12.7034 2.21288 12.5204 2.04872 12.2903C1.88457 12.0601 1.78371 11.7909 1.75625 11.5095L1.75 11.3543C1.75 10.771 2.06354 10.2377 2.62604 9.92725L2.77188 9.85433L21.5396 3.07725L21.65 3.046L21.7615 3.02725Z" fill="#2B286B" />
              </svg>

              WHAT ABOUT US
            </div>

            <h2 className="text-2xl lg:text-[40px] font-medium leading-tight max-w-[500px]">Inspiring Vision, Empowering
              Growth: The INSPO
              Corporate Story.</h2>
            <div className="leading-relaxed text-[#A7A9AC] flex flex-col gap-3">
              <p>Welcome to INSPO Corporate Services, your trusted partner in turning ideas into thriving businesses in the UAE. Our mission is simple yet powerful: to remove the complexities of business setup and provide clear, reliable, and cost-effective solutions tailored for every entrepreneur.</p>
              <p>At INSPO, we believe in more than just consultancy — we believe in building futures. From trade license services to PRO solutions, compliance assistance, and customized business support, we craft end-to-end strategies that empower you to focus on what matters most: growing your business.</p>
              <p>Guided by our core values of integrity, efficiency, and innovation, our team of experts ensures that every step of your journey is seamless. Whether you’re a startup, SME, or expanding enterprise, we stand by your side as a dedicated ally, making Dubai’s business landscape accessible and full of opportunity.</p>
              <p>With INSPO Corporate Services, your business vision is not just supported — it’s inspired, nurtured, and driven toward success.</p>


            </div>



          </div>

        </div>
        <div className="max-w-[1320px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mt-14">
          <div className='rounded-2xl p-6 lg:p-10 bg-[#F8F8F8]'>
            <svg width="87" height="87" viewBox="0 0 87 87" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_1744_1297)">
                <path d="M87 43.552C86.8158 64.7865 71.6193 83.1666 50.6557 86.3741C34.5145 88.844 20.5354 84.0107 9.72007 71.4274C4.53433 65.3942 1.67931 58.2 0.529524 50.3384C-0.856455 40.8717 0.454255 31.7946 4.7757 23.2447C10.2989 12.3184 19.1442 5.35802 30.8238 1.94275C35.2257 0.654549 39.7366 -0.0674639 44.328 0.00525689C51.0035 0.114338 57.3157 1.76094 63.2541 4.82301C64.3287 5.3788 64.692 6.24626 64.243 7.09553C63.7966 7.93701 62.8856 8.1318 61.8085 7.56302C55.5378 4.25163 48.8623 2.75306 41.7793 3.0881C23.7174 3.94257 6.08382 17.4323 3.41309 37.1708C1.44572 51.7045 5.69709 64.4618 16.9381 74.3311C23.5513 80.1357 31.4882 83.016 40.235 83.6315C49.8563 84.3094 58.7588 82.1044 66.7373 76.6218C75.5411 70.5704 80.5685 62.0439 82.7668 51.7019C84.7498 42.3781 83.5507 33.4906 79.2552 25.0004C78.6738 23.8525 78.9827 22.8474 79.9767 22.5227C80.7813 22.2604 81.4951 22.5799 81.9596 23.4785C84.0879 27.5924 85.5777 31.9245 86.2603 36.5085C86.6081 38.8407 86.7613 41.2042 87 43.552Z" fill="black" />
                <path d="M13.8494 43.8092C14.3243 32.3037 18.6951 23.2396 28.8278 17.8089C37.9612 12.9133 47.4295 12.5445 56.864 17.2843C58.2604 17.9855 58.6938 18.8036 58.2188 19.7386C57.7387 20.684 56.851 20.7541 55.4547 20.0425C46.695 15.5831 38.0599 16.1156 29.7232 21.045C23.1723 24.9226 18.8586 30.6415 17.3896 38.1785C14.3918 53.5642 24.7192 67.2201 38.9501 69.6069C55.6675 72.4118 68.079 59.722 69.5922 46.1986C70.1813 40.9211 69.2548 35.9553 66.7423 31.2778C66.5321 30.8857 66.3063 30.4519 66.2804 30.026C66.231 29.2676 66.6541 28.7326 67.4016 28.5274C68.2036 28.3041 68.8706 28.6054 69.1821 29.3274C70.1113 31.4908 71.1962 33.6257 71.8139 35.88C76.465 52.8681 65.198 70.0951 47.7643 72.7391C35.4255 74.609 18.0255 68.355 14.4204 49.0425C14.083 47.2349 14.0155 45.3779 13.8494 43.8092Z" fill="black" />
                <path d="M76.1847 10.6459C77.9989 10.7888 79.7353 10.9264 81.4716 11.0667C81.9544 11.1056 82.4865 11.0407 82.9121 11.2225C83.4312 11.4432 84.1294 11.7913 84.2618 12.2302C84.4123 12.7262 84.1372 13.4586 83.8309 13.9573C83.4857 14.5209 82.8991 14.939 82.419 15.4195C79.3044 18.5361 76.1795 21.6397 73.0831 24.7771C72.4316 25.4368 71.7438 25.6809 70.825 25.5848C68.8291 25.3745 66.8254 25.2082 64.8217 25.1199C64.3545 25.0992 63.7498 25.3433 63.415 25.6757C57.3208 31.7219 51.2578 37.7993 45.187 43.8715C45.0261 44.0325 44.8678 44.1936 44.7069 44.352C43.8114 45.2194 42.9394 45.3051 42.2412 44.5961C41.5482 43.8897 41.6364 43.0222 42.5215 42.134C48.7247 35.9216 54.9278 29.7091 61.1491 23.5149C61.6267 23.0396 61.8292 22.5799 61.7617 21.902C61.5592 19.9048 61.445 17.8972 61.2504 15.9C61.1725 15.0975 61.3646 14.4663 61.9485 13.8872C65.5562 10.3031 69.151 6.70341 72.7379 3.09594C73.2881 2.54274 73.8825 2.24147 74.6508 2.51936C75.3931 2.78687 75.6215 3.4076 75.676 4.13221C75.8395 6.26189 76.0082 8.39157 76.1847 10.6459ZM72.8235 7.65137C72.6652 7.69033 72.5874 7.68254 72.551 7.7189C69.9348 10.3239 67.3212 12.9288 64.7153 15.5468C64.57 15.6922 64.4298 15.9389 64.4402 16.1259C64.5622 18.0556 64.7153 19.9853 64.8633 21.9774C66.732 22.1176 68.4995 22.2838 70.2722 22.354C70.6875 22.3695 71.2247 22.1721 71.5232 21.8839C73.9578 19.51 76.3482 17.0921 78.749 14.6845C78.9177 14.5157 79.0579 14.3183 79.2992 14.0274C78.0301 13.9365 76.9114 13.8456 75.7902 13.7833C73.6204 13.6612 73.1739 13.2119 73.0545 11.0121C72.9974 9.91351 72.9066 8.8175 72.8235 7.65137Z" fill="black" />
                <path d="M27.8416 43.5105C27.8598 35.3865 33.4582 29.0546 41.5483 28.1846C43.321 27.9924 45.1482 28.2599 46.9468 28.3845C47.4426 28.4183 47.9487 28.6546 48.3977 28.8936C49.2179 29.3299 49.5008 30.0935 49.2075 30.8467C48.9012 31.6362 48.1433 31.9998 47.2142 31.7167C44.3254 30.8311 41.4782 30.8648 38.6647 32.0076C32.8742 34.3606 29.8193 40.4068 31.291 46.6037C32.6821 52.4629 38.008 56.2885 44.1619 55.8522C53.8326 55.1666 57.1496 46.0323 55.2445 40.0458C55.1277 39.6822 54.9434 39.2147 55.0758 38.9264C55.2964 38.4434 55.6832 37.8175 56.1166 37.7058C56.5916 37.5837 57.4065 37.8123 57.7024 38.1837C58.1566 38.7576 58.4032 39.5602 58.5511 40.3029C60.4614 50.006 53.2045 59.0649 43.5234 59.0909C34.6391 59.1143 27.8208 52.3408 27.8416 43.5105Z" fill="black" />
              </g>
              <defs>
                <clipPath id="clip0_1744_1297">
                  <rect width="87" height="87" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <h5 className='my-3 text-2xl font-medium'>Our Mission</h5>
            <p className='pt-2 text-[#626262]'>At INSPO Corporate Services, our mission is to turn ambition into achievement. We combine over 10 years of expertise with innovation, guiding businesses through every stage — from setup and compliance to digital growth and global reach. With a foundation built on trust, professionalism, and results, we simplify challenges, unlock opportunities, and create pathways where businesses don’t just start, they thrive with confidence.</p>
          </div>
          <div className='rounded-2xl p-6 lg:p-10 bg-[#F8F8F8]'>
            <svg width="98" height="87" viewBox="0 0 98 74" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_1744_1305)">
                <path d="M48.9298 74C28.0469 73.325 11.7526 64.5958 0.538509 46.8814C-0.163833 45.7874 -0.163833 44.9028 0.515097 43.7855C9.55189 29.2602 22.4984 20.1818 39.4248 17.5049C59.5586 14.3391 76.9532 20.1818 90.9298 35.1494C93.4348 37.8497 95.378 41.062 97.5552 44.0415C98.1639 44.8795 98.1171 45.671 97.5786 46.5555C88.5653 61.174 75.5954 70.0894 58.6221 73.162C57.1472 73.4181 55.6723 73.6276 54.174 73.744C52.4415 73.8836 50.6857 73.9302 48.9298 74ZM48.9766 70.5316C53.9164 70.4618 58.7626 69.9031 63.4917 68.553C76.3679 64.8519 86.4348 57.403 93.7392 46.2297C94.1372 45.6244 94.2776 45.1589 93.786 44.5071C92.1472 42.3888 90.7191 40.0611 88.9164 38.0824C76.3211 24.1856 60.5419 18.3895 42 20.6474C25.7291 22.626 13.1806 30.8431 4.16727 44.4605C3.74587 45.1123 3.74587 45.5546 4.16727 46.1831C14.8194 62.1284 29.8964 69.9962 48.9766 70.5316Z" fill="black" />
                <path d="M47.2209 6.07549C47.2209 4.70211 47.1974 3.32872 47.2209 1.93205C47.2443 0.768166 47.97 0 48.9767 0C49.9834 0 50.7091 0.791444 50.7091 1.97861C50.7326 4.72539 50.7326 7.49544 50.7091 10.2422C50.7091 11.4527 50.0068 12.1743 48.9533 12.151C47.8998 12.151 47.2443 11.4294 47.2209 10.1957C47.1974 8.84555 47.2209 7.44888 47.2209 6.07549Z" fill="black" />
                <path d="M18.8461 17.3886C18.6354 17.2489 18.0735 17.0627 17.7692 16.6902C15.9899 14.409 14.2341 12.0812 12.525 9.75345C11.9163 8.89217 12.127 7.91451 12.8996 7.35584C13.6488 6.82045 14.6555 6.89028 15.2407 7.65845C17.0902 9.98623 18.8929 12.3606 20.6254 14.7814C21.4448 15.9221 20.5551 17.3886 18.8461 17.3886Z" fill="black" />
                <path d="M79.0368 17.3885C77.4214 17.3885 76.5084 15.9453 77.281 14.8512C79.0368 12.3605 80.8863 9.9396 82.7592 7.56527C83.3445 6.82038 84.2342 6.7971 85.0067 7.35577C85.7793 7.91443 86.0368 8.77571 85.475 9.56715C83.6957 12.0346 81.8462 14.4555 79.9733 16.8531C79.7626 17.179 79.2241 17.2954 79.0368 17.3885Z" fill="black" />
                <path d="M48.9065 66.2018C37.1305 66.1087 27.883 56.7511 27.9533 45.0191C28.0235 33.6362 37.6222 24.3019 49.164 24.395C60.6824 24.4881 70.0937 33.9621 70.0001 45.3915C69.9064 56.9606 60.4717 66.2949 48.9065 66.2018ZM48.9533 62.7102C58.5285 62.7567 66.4416 54.982 66.4884 45.4846C66.5352 35.8011 58.7626 27.9565 49.0937 27.8634C39.4717 27.7935 31.5118 35.5683 31.4416 45.1122C31.3713 54.8656 39.1439 62.6636 48.9533 62.7102Z" fill="black" />
                <path d="M49.0235 55.7504C43.194 55.7736 38.4883 51.1414 38.4649 45.3685C38.4415 39.5956 43.1706 34.8469 48.9298 34.8469C54.7592 34.8469 59.5118 39.549 59.5118 45.3685C59.4649 51.0715 54.7827 55.7271 49.0235 55.7504ZM48.9532 52.2587C52.8629 52.2587 55.9766 49.1627 55.9766 45.2754C55.9766 41.4578 52.7459 38.2688 48.9064 38.3153C45.0669 38.3619 41.9532 41.4811 41.9532 45.2754C41.9532 49.1395 45.0669 52.2587 48.9532 52.2587Z" fill="black" />
              </g>
              <defs>
                <clipPath id="clip0_1744_1305">
                  <rect width="98" height="74" fill="white" />
                </clipPath>
              </defs>
            </svg>


            <h5 className='my-3 text-2xl font-medium'>Our Vission</h5>
            <p className='pt-2 text-[#626262]'>Our vision is to redefine what it means to be a business partner in the UAE. INSPO aspires to be the region’s most dynamic hub for entrepreneurs and enterprises, blending consultancy with technology, creativity, and strategy. We see a future where every client gains more than services — they gain a trusted ally, a growth accelerator, and a lasting competitive edge.</p>
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
