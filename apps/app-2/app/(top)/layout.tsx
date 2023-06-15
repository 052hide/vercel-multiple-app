import { clsx } from 'clsx'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className={clsx('tw-bg-neutral-50')}>
      <div
        className={clsx(
          'tw-mx-auto',
          'tw-min-h-[100dvh] tw-max-w-screen-lg',
          'tw-bg-white'
        )}
      >
        {children}
      </div>
    </main>
  )
}
