import Image from 'next/image'
import { Inter } from 'next/font/google'
import { clsx } from 'clsx'
import { APP_ROUTE } from '@/consts/route'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={clsx('tw-bg-neutral-50', inter.className)}>
      <div
        className={clsx(
          'tw-mx-auto',
          'tw-min-h-[100dvh] tw-max-w-screen-lg',
          'tw-bg-white'
        )}
      >
        <div className={clsx('tw-grid tw-justify-center', 'tw-py-8 tw-px-4')}>
          <div className={clsx('tw-grid tw-gap-4')}>
            <p>Base App</p>
            <Image src="/app1.svg" alt="App 1" width={800} height={400} />
            <a href={APP_ROUTE.app2}>To App 2</a>
          </div>
        </div>
      </div>
    </main>
  )
}
