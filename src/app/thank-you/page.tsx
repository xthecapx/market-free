'use client'

import { useSearchParams } from 'next/navigation'

import AboutSectionOne from "@/components/About/AboutSectionOne";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Suspense } from 'react';

const Page = () => {
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
  )
}


const AboutPage = () => {
  return (
    <Suspense>
      <Page />
    </Suspense>
  )
};

export default AboutPage;
