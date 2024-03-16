'use client'

import { useSearchParams } from 'next/navigation'

import AboutSectionOne from "@/components/About/AboutSectionOne";
import Breadcrumb from "@/components/Common/Breadcrumb";


const AboutPage = () => {
  const searchParams = useSearchParams()

  const date = searchParams.get('date')

  return (
    <>
      <Breadcrumb
        pageName="Gracias"
        description={`Espero que disfrutes de tu evento el ${date}`}
      />
      <AboutSectionOne />
    </>
  );
};

export default AboutPage;
