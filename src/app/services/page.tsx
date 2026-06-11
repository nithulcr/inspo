
import { Metadata, ResolvingMetadata } from 'next';



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

import ServicesFull from "../components/ServicesFull";
import Partners from "../components/Partners";
import CostCalculator from "../components/CostCalculator";



import ConsultationBanner from "../components/ConsultationBanner";









export default function Services() {
    return (
        <>
            
           
            <ServicesFull />
          
            <ConsultationBanner />
            <Partners />
            <CostCalculator />


            
            
        </>
    );
}
