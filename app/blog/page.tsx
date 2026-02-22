import Link from 'next/link'

const posts = [
  {
    id: '5-make-automations',
    title: '5 Make.com Automations Every Small Business Needs',
    excerpt: 'Save 10+ hours per week with these essential Make.com automations for lead capture, invoicing, social media, and more.',
    date: '2026-02-22',
    category: 'Tutorial'
  },
  {
    id: 'make-vs-zapier',
    title: 'Make.com vs Zapier: Why We Switched',
    excerpt: 'Why we switched from Zapier to Make.com and saved $200/month while getting more powerful automations.',
    date: '2026-02-22',
    category: 'Comparison'
  },
  {
    id: 'saved-10-hours-week',
    title: 'How I Saved 10 Hours/Week with Make.com (Real Numbers)',
    excerpt: 'A real breakdown of how automation saved me 650 hours per year — with actual workflows you can copy.',
    date: '2026-02-22',
    category: 'Case Study'
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