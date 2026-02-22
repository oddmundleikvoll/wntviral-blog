export const metadata = {
  title: 'How I Saved 10 Hours/Week with Make.com',
  description: 'A real breakdown of how automation saved 650 hours per year — with actual workflows you can copy.',
}

export default function BlogPost() {
  return (
    <article className="max-w-3xl mx-auto py-16 px-4">
      <header className="mb-12">
        <div className="text-blue-400 text-sm font-medium mb-4">Case Study</div>
        <h1 className="text-4xl font-bold text-white mb-4">
          How I Saved 10 Hours/Week with Make.com (Real Numbers)
        </h1>
        <p className="text-slate-400 text-lg">
          A real breakdown of how automation saved me 650 hours per year—with actual workflows you can copy.
        </p>
        <div className="text-slate-500 text-sm mt-4">February 22, 2026</div>
      </header>

      <div className="prose prose-invert prose-lg max-w-none">
        <p className="lead">
          I used to think automation was for big companies with IT departments. Then I hit a wall. 
          I was spending 2-3 hours every day on repetitive tasks.
        </p>

        <h2>Before: A Typical Week</h2>

        <div className="bg-slate-900 rounded-lg p-6 my-6">
          <table className="w-full text-left m-0">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="pb-2 text-slate-300">Task</th>
                <th className="pb-2 text-slate-300">Time/Week</th>
              </tr>
            </thead>
            <tbody className="text-slate-400">
              <tr><td className="py-2">Lead entry</td><td>4 hours</td></tr>
              <tr><td className="py-2">Follow-up emails</td><td>3 hours</td></tr>
              <tr><td className="py-2">Invoicing</td><td>2 hours</td></tr>
              <tr><td className="py-2">Social media</td><td>3 hours</td></tr>
              <tr><td className="py-2">Reporting</td><td>2 hours</td></tr>
              <tr className="border-t border-slate-700 font-semibold text-white">
                <td className="py-2">Total busywork</td><td>14 hours</td></tr>
            </tbody>
          </table>
        </div>

        <h2>After: The Same Week with Make.com</h2>

        <p>With Make.com automations running:</p>

        <div className="bg-green-900/20 rounded-lg p-6 my-6 border border-green-800">
          <table className="w-full text-left m-0">
            <thead>
              <tr className="border-b border-green-800">
                <th className="pb-2 text-green-300">Task</th>
                <th className="pb-2 text-green-300">Time/Week</th>
              </tr>
            </thead>
            <tbody className="text-slate-300">
              <tr><td className="py-2">Lead entry</td><td>0 hours</td></tr>
              <tr><td className="py-2">Follow-up emails</td><td>0.5 hours</td></tr>
              <tr><td className="py-2">Invoicing</td><td>0.25 hours</td></tr>
              <tr><td className="py-2">Social media</td><td>0.5 hours</td></tr>
              <tr><td className="py-2">Reporting</td><td>0.25 hours</td></tr>
              <tr className="border-t border-green-800 font-semibold text-green-400">
                <td className="py-2">Total busywork</td><td>1.5 hours</td></tr>
            </tbody>
          </table>
        </div>

        <p><strong>Net savings: 12.5 hours/week = 650 hours/year</strong></p>

        <h2>The 3 Automations That Made the Biggest Difference</h2>

        <h3>1. The "Lead Vacuum"</h3>
        <p>Automatically captures leads from website, Facebook, email → HubSpot CRM → email sequence → Slack notification.</p>

        <h3>2. The "Invoice Machine"</h3>
        <p>Mark project "Done" → auto-generates invoice → sends with payment link → follows up on late payments.</p>

        <h3>3. The "Content Multiplier"</h3>
        <p>Write once in Notion → auto-format and schedule to LinkedIn, Twitter, Facebook.</p>

        <h2>The Bottom Line</h2>
        <p>I thought "I'm too small for automation." I was wrong. Make.com isn't just for big companies—it's for anyone who values their time.</p>

        <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-xl p-8 my-10 border border-blue-700">
          <h3 className="text-xl font-bold text-white mb-3">Ready to Save 10+ Hours/Week?</h3>
          <a 
            href="https://www.make.com/en/register?pc=veravibe"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-blue-600 px-8 py-4 text-base font-bold text-white hover:bg-blue-500 transition-colors shadow-lg hover:shadow-blue-500/25"
          >
            Try Make.com Free →
          </a>
          <p className="text-xs text-slate-500 mt-4">
            Affiliate link — we earn a commission at no cost to you.
          </p>
        </div>
      </div>
    </article>
  )
}
