import Image from 'next/image'
import { LinearCMDK } from './cmdk'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <LinearCMDK />
    </main>
  )
}
