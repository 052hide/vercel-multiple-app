import Image from 'next/image'
import { APP_ROUTE } from '@/consts/route'
import { clsx } from 'clsx'

export default function Home() {
  return (
    <div className={clsx('tw-grid tw-justify-center', 'tw-py-8')}>
      <div className={clsx('tw-grid tw-gap-4')}>
        <p>App 2</p>
        <Image
          src={`${APP_ROUTE.app2}/app2.svg`}
          alt="App 2"
          width={800}
          height={400}
        />
        <a href={APP_ROUTE.base}>To Base App</a>
      </div>
    </div>
  )
}
