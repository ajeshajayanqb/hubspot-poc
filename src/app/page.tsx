import { HubSpotForm } from '@/components/HubSpotForm'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 h-screen">
      <HubSpotForm 
        region='na1'
        portalId='7535538'
        formId='55d17b1d-aae4-4a1e-8abd-036d30781e52'
        target='sample'
      />
    </main>
  )
}
