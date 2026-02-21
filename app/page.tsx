import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-850 to-slate-950 py-24 sm:py-32">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20"></div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Automate Your Business
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Save 10+ hours every week with proven automation workflows. 
              Built for small businesses who want to work smarter, not harder.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/guide"
                className="rounded-full bg-blue-600 px-8 py-3 text-sm font-semibold text-white shadow-lg hover:bg-blue-500 transition-all hover:shadow-blue-500/25"
              >
                Get Free Make.com Guide
              </Link>
              <a 
                href="https://www.make.com/en/register?pc=veravibe"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold leading-6 text-slate-300 hover:text-white transition-colors"
              >
                Try Make Free →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              What You Will Learn
            </h2>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                    <feature.icon className="h-5 w-5 flex-none text-blue-500" aria-hidden="true" />
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-400">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Affiliate Disclosure */}
      <section className="py-8 bg-slate-900 border-t border-slate-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-center text-sm text-slate-500">
            Affiliate Disclosure: Some links on this site are affiliate links. 
            We earn a commission if you make a purchase — at no extra cost to you.
          </p>
        </div>
      </section>
    </main>
  )
}

const features = [
  {
    name: 'Visual Automation',
    description: 'Make.com\'s drag-and-drop builder lets you create workflows without coding. Connect 1000+ apps in minutes.',
    icon: function MakeIcon(props: any) {
      return (
        <svg {...props} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      )
    },
  },
  {
    name: 'CRM + Email Automation',
    description: 'Automatically capture leads, send follow-ups, and track every interaction. Works perfectly with free HubSpot CRM.',
    icon: function WorkflowIcon(props: any) {
      return (
        <svg {...props} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      )
    },
  },
  {
    name: 'Save 10+ Hours/Week',
    description: 'Our Make.com templates handle the repetitive work. You focus on closing deals and growing your business.',
    icon: function TimeIcon(props: any) {
      return (
        <svg {...props} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
  },
]