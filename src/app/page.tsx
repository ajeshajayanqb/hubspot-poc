// 'use client';

import { HubSpotForm } from '@/components/HubSpotForm';
// import Link from 'next/link'

export default function Home() {

  // const handleNavigation = () => {
  //   return <Link href="/scheduleMeeting"/>
  // }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 h-screen">
      <HubSpotForm 
        region='na1'
        portalId='43383438'
        formId='22388c5c-bf64-4063-9fb1-559505db9dcc'
        target='sample'
        // onFormSubmitted={handleNavigation}
      />
    </main>
  )
}

