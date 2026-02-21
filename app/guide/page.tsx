'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function GuidePage() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Store email (you can extend this to send to Notion/email list)
    console.log('Lead captured:', email)
    
    // Trigger PDF download
    const link = document.createElement('a')
    link.href = '/5-automations-guide.pdf'
    link.download = '5-automations-guide.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    
    setSubmitted(true)
  }

  return (
    <main className="min-h-screen bg-slate-950 py-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="mb-12">
          <Link href="/" className="text-sm text-slate-400 hover:text-white transition-colors">
            ← Back to home
          </Link>
        </div>
        
        <article className="prose prose-invert prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-white mb-6">
            5 Automations That Save Small Businesses 10+ Hours/Week
          </h1>
          
          <p className="text-slate-300 text-xl leading-relaxed mb-8">
            A practical handbook for automating sales and customer relationships 
            without being technical.
          </p>

          <div className="bg-slate-900 rounded-xl p-6 my-8 border border-slate-800">
            <h2 className="text-xl font-semibold text-white mb-4">What You Will Learn</h2>
            <ol className="list-decimal list-inside space-y-2 text-slate-300">
              <li>Set up a CRM that tracks every lead automatically</li>
              <li>Build email sequences that nurture leads while you sleep</li>
              <li>Sync your calendar and never miss a follow-up</li>
              <li>Score leads automatically so you know who to call first</li>
              <li>Create a dashboard that shows your sales at a glance</li>
            </ol>
          </div>

          <div className="bg-blue-950/50 rounded-xl p-6 my-8 border border-blue-900">
            {!submitted ? (
              <>
                <h3 className="text-lg font-semibold text-blue-200 mb-3">
                  📥 Download the Complete Guide
                </h3>
                <p className="text-blue-100 mb-4">
                  Enter your email to get the full PDF with step-by-step screenshots 
                  and automation templates. Instant download.
                </p>
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 rounded-lg bg-slate-900 border border-slate-700 px-4 py-3 text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-500 transition-colors whitespace-nowrap"
                  >
                    Download PDF
                  </button>
                </form>
                <p className="text-xs text-blue-300/70 mt-3">
                  No spam. Unsubscribe anytime. We respect your privacy.
                </p>
              </>
            ) : (
              <div className="text-center py-4">
                <div className="text-4xl mb-3">✅</div>
                <h3 className="text-lg font-semibold text-blue-200 mb-2">
                  Guide Downloaded!
                </h3>
                <p className="text-blue-100">
                  Check your downloads folder for the PDF. <br/>
                  We&apos;ve also sent a copy to {email}
                </p>
              </div>
            )}
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">
            Automation 1: CRM Foundation with HubSpot
          </h2>
          <p className="text-slate-300 mb-6">
            Every business needs a system to track leads. Without it, you&apos;re relying on memory 
            and scattered notes. HubSpot&apos;s free CRM gives you everything you need.
          </p>
          
          <div className="bg-slate-900 rounded-lg p-4 my-6 border-l-4 border-blue-500">
            <p className="text-slate-300 m-0">
              <strong className="text-white">Time saved:</strong> 3-4 hours/week on manual follow-up
            </p>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">
            Automation 2: Email Follow-up Sequences
          </h2>
          <p className="text-slate-300 mb-6">
            Most leads need 5-7 touchpoints before buying. Doing this manually is exhausting. 
            Automated email sequences handle this while you focus on closing deals.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">
            Automation 3: Calendar Sync
          </h2>
          <p className="text-slate-300 mb-6">
            Never miss a follow-up again. Connect your calendar to your CRM and let 
            automation handle appointment reminders and follow-up scheduling.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">
            Automation 4: Lead Scoring
          </h2>
          <p className="text-slate-300 mb-6">
            Know who to call first. Automatically score leads based on email opens, 
            website visits, and form submissions. Focus on the hot leads.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">
            Automation 5: Reporting Dashboard
          </h2>
          <p className="text-slate-300 mb-6">
            See your sales pipeline at a glance. Build a live dashboard in Notion 
            showing new leads, conversion rates, and monthly revenue.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">
            Ready to Implement?
          </h2>
          <p className="text-slate-300 mb-6">
            The full guide includes detailed screenshots, Make.com blueprints, and Notion templates 
            you can copy in minutes. No coding required.
          </p>
        </article>

        <div className="mt-16 pt-8 border-t border-slate-800">
          <p className="text-sm text-slate-500">
            Affiliate Disclosure: Some links in this guide are affiliate links to Make.com and HubSpot. 
            We earn a commission if you sign up — at no extra cost to you. This helps us create more 
            free content.
          </p>
        </div>
      </div>
    </main>
  )
}