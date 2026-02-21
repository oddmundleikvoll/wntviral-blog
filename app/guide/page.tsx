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

          {/* Make.com Affiliate CTA */}
          <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-xl p-6 my-8 border border-blue-700">
            <h3 className="text-xl font-bold text-white mb-3">
              🚀 Ready to Start Automating?
            </h3>
            <p className="text-slate-200 mb-4">
              Get started with Make.com today. Use our affiliate link and get 
              the best automation platform for small businesses.
            </p>
            <a 
              href="https://www.make.com/en/register?pc=veravibe"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg bg-blue-600 px-8 py-4 text-base font-bold text-white hover:bg-blue-500 transition-colors shadow-lg hover:shadow-blue-500/25"
            >
              Try Make.com Free →
            </a>
            <p className="text-xs text-slate-400 mt-3">
              (Affiliate link — we earn a small commission at no cost to you)
            </p>
          </div>

          <div className="bg-blue-950/50 rounded-xl p-6 my-8 border border-blue-900">
            {!submitted ? (
              <>
                <h3 className="text-lg font-semibold text-blue-200 mb-3">
                  📥 Download the Complete Make.com Guide
                </h3>
                <p className="text-blue-100 mb-4">
                  Enter your email to get the full PDF with Make.com blueprints, 
                  step-by-step screenshots, and ready-to-use templates.
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
                  Get started with Make.com using our templates!
                </p>
              </div>
            )}
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">
            Why Make.com?
          </h2>
          <p className="text-slate-300 mb-6">
            Make.com is the most powerful visual automation platform for small businesses. 
            Unlike Zapier (expensive per-task pricing), Make gives you full control with 
            a beautiful drag-and-drop interface. Connect 1000+ apps and build workflows 
            that run 24/7.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">
            Automation 1: Lead Capture & CRM
          </h2>
          <p className="text-slate-300 mb-6">
            Use Make.com to automatically capture leads from your website, Facebook, or 
            email and add them to HubSpot CRM. No more manual data entry.
          </p>
          
          <div className="bg-slate-900 rounded-lg p-4 my-6 border-l-4 border-blue-500">
            <p className="text-slate-300 m-0">
              <strong className="text-white">Time saved:</strong> 3-4 hours/week on manual data entry
            </p>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">
            Automation 2: Email Follow-ups
          </h2>
          <p className="text-slate-300 mb-6">
            Build automated email sequences in Make.com that nurture leads while you sleep. 
            Connect to Gmail, Outlook, or any email provider. Personalize every message 
            based on lead behavior.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">
            Automation 3: Smart Notifications
          </h2>
          <p className="text-slate-300 mb-6">
            Get notified instantly when hot leads take action. Make.com watches your 
            CRM and sends you Slack messages, emails, or SMS when it&apos;s time to follow up.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">
            Automation 4: Document Generation
          </h2>
          <p className="text-slate-300 mb-6">
            Auto-generate proposals, contracts, and quotes. Make.com can create Google Docs, 
            PDFs, or send data to your favorite tools — all without lifting a finger.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">
            Automation 5: Complete Workflow Integration
          </h2>
          <p className="text-slate-300 mb-6">
            Connect everything: Your website forms → Make.com → CRM → Email → Calendar → 
            Notifications. One seamless automation that handles your entire sales process.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">
            Ready to Implement?
          </h2>
          <p className="text-slate-300 mb-6">
            The full guide includes detailed screenshots, Make.com blueprints, and Notion templates 
            you can copy in minutes. No coding required.
          </p>
        </article>

        {/* Make.com Affiliate Footer */}
        <div className="mt-16 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-xl p-6 border border-blue-800">
          <h3 className="text-lg font-semibold text-white mb-2">
            Start Automating with Make.com Today
          </h3>
          <p className="text-slate-300 mb-4">
            Ready to save 10+ hours per week? Sign up for Make.com using our link 
            and get started with the best automation platform for small businesses.
          </p>
          <a 
            href="https://www.make.com/en/register?pc=veravibe"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-500 transition-colors"
          >
            Get Make.com Free →
          </a>
          <p className="text-xs text-slate-500 mt-4">
            Affiliate Disclosure: This is an affiliate link to Make.com. We earn a commission 
            if you sign up — at no extra cost to you. This helps us create more free guides 
            and templates for small businesses.
          </p>
        </div>
      </div>
    </main>
  )
}