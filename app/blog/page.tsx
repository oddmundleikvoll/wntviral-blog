import Link from 'next/link'

const posts = [
  {
    id: '5-automations-guide',
    title: '5 Automations That Save Small Businesses 10+ Hours/Week',
    excerpt: 'A complete guide to setting up CRM, email automation, and smart dashboards without hiring a developer.',
    date: '2026-02-21',
    category: 'Guide'
  },
  {
    id: 'getting-started-hubspot',
    title: 'Getting Started with HubSpot CRM',
    excerpt: 'Step-by-step setup for small businesses who want better lead tracking.',
    date: '2026-02-20',
    category: 'Tutorial'
  },
  {
    id: 'make-vs-zapier',
    title: 'Make.com vs Zapier: Which Automation Tool to Choose?',
    excerpt: 'An honest comparison of the two most popular automation platforms for small businesses.',
    date: '2026-02-19',
    category: 'Comparison'
  }
]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Latest Articles
          </h1>
          <p className="mt-4 text-slate-400">
            Practical guides for automating your business
          </p>
        </div>
        
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <div className="space-y-12">
            {posts.map((post) => (
              <article key={post.id} className="flex flex-col items-start">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.date} className="text-slate-500">
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </time>
                  <span className="relative z-10 rounded-full bg-slate-800 px-3 py-1.5 font-medium text-slate-300">
                    {post.category}
                  </span>
                </div>
                <div className="group relative">
                  <h2 className="mt-3 text-lg font-semibold leading-6 text-white group-hover:text-blue-400 transition-colors">
                    <Link href={`/blog/${post.id}`}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-slate-400">
                    {post.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}