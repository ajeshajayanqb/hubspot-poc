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
        portalId='7535538'
        formId='aca0138c-424b-4d64-b167-d54a63d76c45'
        target='sample'
        // onFormSubmitted={handleNavigation}
      />
    </main>
  )
}
