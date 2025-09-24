import { Metadata, ResolvingMetadata } from 'next';



export async function generateMetadata(
  parent: ResolvingMetadata
): Promise<Metadata> {

  const metadata: Metadata = {
    title: 'About Ray Montazim | Licensed Real Estate Investment Company',
    description: 'Ray Montazim is a licensed Saudi simplified joint-stock company offering curated, income-producing real estate investments with transparency and compliance.',
    keywords: 'About Ray Montazim, Saudi joint stock company, licensed investment, real estate transparency, secure investment Saudi Arabia',

  };

  return metadata;
}

import Header from "../components/Header";
import ServicesFull from "../components/ServicesFull";
import Partners from "../components/Partners";
import CostCalculator from "../components/CostCalculator";



import ConsultationBanner from "../components/ConsultationBanner";

import Footer from "../components/Footer";





export default function Home() {
    return (
        <>
            <Header />
           
            <ServicesFull />
          
            <ConsultationBanner />
            <Partners />
            <CostCalculator />


            
            <Footer />
        </>
    );
}
