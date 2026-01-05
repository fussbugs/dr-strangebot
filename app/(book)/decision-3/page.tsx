import Link from 'next/link';

export default function Decision3Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="w-full max-w-[700px] mx-auto">
        
        <div className="pt-8 px-8">
          <Link href="/" className="text-blue-600 hover:underline text-sm">
            ← Home
          </Link>
        </div>

        <div className="px-8 py-16">
          
          <h1 className="text-3xl font-bold mb-16 text-black">
            Decision 3: Can You Prove It's Worth It?
          </h1>

          <div className="space-y-20 text-lg leading-[2] text-gray-900">
            
            <p>Finance doesn't want your business case. They want to know what you don't know.</p>

            <p>You walk into the CFO's office with your five-year projections. IRR calculations. ROI curves that bend just right. Beautiful spreadsheet. Every assumption documented.</p>

            <p>The CFO looks at it for thirty seconds. Then asks: "What are you uncertain about?"</p>

            <p>You pause. You weren't expecting that question. You were expecting questions about payback period or capital efficiency.</p>

            <p>The CFO continues: "You don't actually know if the AI will work. You don't know if people will use it. You don't know if it'll deliver these benefits. Neither do I. So what's the smallest amount of money we can spend to learn if this is worth pursuing?"</p>

            <p>That's the real question. Not: prove this will work. But: prove you can learn if it'll work before betting everything.</p>

            <h2 className="text-2xl font-semibold mt-16 mb-8 text-black">The Uncertainty Test</h2>

            <p>You built a business case for AI. It projects ROI. Shows payback period. Estimates cost savings. All the numbers line up perfectly because you tuned them until they did.</p>

            <p>Finance isn't stupid. You don't actually know if the AI will work. You don't know if people will use it. You don't know if it'll deliver the projected benefits.</p>

            <p>Neither does Finance. But their job is to allocate scarce capital across competing initiatives. Your AI project is competing with a new production line, an ERP upgrade, and a site expansion.</p>

            <p>What Finance wants to know: What's the smallest investment you can make to learn if this is worth pursuing?</p>

            <p>Not: What's your five-year business case?</p>

            <p>But: What can you learn in three months with five people for 5% of your total budget?</p>

            <p>Fail fast is a cliché. Learn fast is a discipline.</p>

            <p>Most business cases start at scale. "We'll deploy AI across twelve sites, automate 40% of maintenance decisions, reduce unplanned downtime by 25%." That's the end state. Getting there might take two years and cost millions.</p>

            <p>But what if you learn in month three that the AI doesn't work in your environment? Or your maintenance teams won't adopt it? Or the data quality problems are insurmountable?</p>

            <p>You've spent millions learning that.</p>

            <p>Start with the smallest pilot that answers your critical uncertainties.</p>

            <h2 className="text-2xl font-semibold mt-16 mb-8 text-black">The Catch-Up Project: Learning Cheap</h2>

            <p>Northern Star's business case for predictive maintenance: Deploy across twelve sites, monitor 200+ pieces of critical equipment, reduce unplanned downtime by 25%, save millions annually. Full deployment takes two years.</p>

            <p>Finance asks: What are your critical uncertainties?</p>

            <p>Northern Star pauses. What needs to be true for this to work that they're not sure is actually true?</p>

            <p>First uncertainty: Is AI accurate enough for production decisions? Current maintenance is based on experience and scheduled intervals. Real-time prediction means trusting AI to say "this crusher will fail in three days." If the prediction is wrong, they either do unnecessary maintenance or miss a real failure. Is the AI reliable enough to bet production on?</p>

            <p>Second uncertainty: Will maintenance teams trust AI recommendations? These teams have twenty years of experience. They know their equipment. They trust their gut. Will they trust a black box telling them what's about to break?</p>

            <p>Third uncertainty: Is historical maintenance data sufficient to train the model? Northern Star has maintenance records going back years. But are they complete enough? Consistent enough? Detailed enough to teach an AI to predict failures?</p>

            <p>Those are the critical uncertainties. The pilot should answer them as cheaply as possible.</p>

            <p>Finance asks: What's your pilot?</p>

            <p>Northern Star initially proposes: Deploy to three sites, monitor eighty pieces of equipment, prove significant value.</p>

            <p>Finance responds: That's not a pilot. That's 25% deployment. That's expensive learning.</p>

            <p>Real pilot: One site. One equipment type—the crusher, because it's expensive and failure-prone. Three months. Purpose: Answer the three critical questions.</p>

            <div style={{marginTop: '50px', marginBottom: '50px'}}>
              <p className="italic text-base leading-normal bg-gray-50 p-8 border-l-4 border-gray-300">
                What you need to know: A crusher breaks rocks into smaller pieces for processing. When a crusher fails unexpectedly, production stops. Everything backs up. Emergency repairs cost premium rates. If AI can predict crusher failures, the value case is obvious. Start there.
              </p>
            </div>

            <p>Northern Star pushes back. One crusher won't prove business value. They need to show ROI.</p>

            <p>Finance: The pilot's not supposed to prove ROI. It's supposed to answer: should we scale this?</p>

            <p>They run the pilot. Here's what they learn:</p>

            <p>AI predicts crusher failures with 83% accuracy when it has good sensor data. Good enough for maintenance teams to pay attention. Not perfect, but better than gut instinct alone. But they also learn: AI struggles with unusual operating conditions—extreme heat, wet conditions, equipment running outside normal parameters. Standard conditions? AI is solid. Edge cases? AI guesses like everyone else.</p>

            <p>Maintenance teams use AI recommendations inconsistently. The experienced supervisor trusts it—he sees AI catching patterns he'd miss. Newer maintenance staff barely use it—they don't trust systems yet, they're still learning to trust their own instincts. The split matters: experience correlates with adoption. Veterans see AI as another tool. Rookies see it as undermining the judgment they're still developing.</p>

            <p>Historical maintenance data is incomplete. Different sites logged maintenance differently. Some sites tracked detailed sensor readings. Others logged "crusher serviced" with no details. Some contractors recorded everything. Others recorded nothing. The data exists, but it's messy. They need six months of data cleanup before scaling.</p>

            <p>Cost: roughly 5% of full deployment budget. Time: three months instead of twenty-four. Learning: invaluable.</p>

            <p>That learning changes Northern Star's full deployment plan completely. They start with experienced maintenance teams, not new ones. They deploy to sites with good sensor data first, then upgrade sensors at older sites. They spend six months cleaning and standardizing historical data before scaling to additional sites. They add explainability features so teams understand why AI predicts what it predicts, not just see a number on a screen.</p>

            <p>The pilot cost 5% of budget but prevented mistakes that would have cost 40% to fix later.</p>

            <h2 className="text-2xl font-semibold mt-16 mb-8 text-black">Pilots Lie. They Show You the Best Data, the Best Users, the Best Conditions. Production Tells the Truth.</h2>

            <p>Northern Star's pilot used their newest site—modern sensors, experienced team, complete maintenance records. Production deployment includes old sites with patchy sensors, new teams who don't trust systems, and incomplete records with gaps and inconsistencies.</p>

            <p>If they'd skipped the pilot and deployed everywhere, they'd have learned these lessons the expensive way: after spending millions, after promising the board results, after telling maintenance teams the AI is ready.</p>

            <p>The pilot revealed what production would expose anyway. Better to learn cheap.</p>

            <p>Northern Star applies the same discipline to the compete-better project and the nobody-else project. Different timelines. Different complexity. Same principle: answer your critical uncertainties before betting big.</p>

            <p>Blast optimization pilot: One site. One geological formation. One blast engineer working with AI recommendations for three months. Critical uncertainties: Can AI improve blast patterns beyond what expert engineers achieve? Will blast engineers trust and use AI recommendations? Can they integrate AI into existing blast design workflows without breaking everything? Cost: roughly 5% of full deployment budget. Timeline: three months.</p>

            <p>They learn: AI suggests patterns that improve ore recovery by 3-4% when geology is consistent. Blast engineers trust AI when they understand the reasoning behind recommendations—show them which geological factors drove each suggestion. Integration works but requires workflow changes nobody anticipated from the start. Some changes are technical. Most are human—engineers need time to adjust how they think about blast design.</p>

            <p>Remote sites pilot takes longer—six months instead of three because they're creating something that doesn't exist yet. Critical uncertainties: Can AI guide less-skilled operators reliably enough for production operations? Will operators trust AI guidance in real-time? Can satellite connectivity support AI assistance without constant failures?</p>

            <div style={{marginTop: '50px', marginBottom: '50px'}}>
              <p className="italic text-base leading-normal bg-gray-50 p-8 border-l-4 border-gray-300">
                What you need to know: Remote sites are hundreds of miles from civilization. No fiber optic cables. No cell towers. No broadband. The only way AI communicates with remote sites is satellites—expensive, weather-dependent connections that sometimes cut out during storms. If connectivity fails when an operator needs AI guidance, people or equipment could be at risk.
              </p>
            </div>

            <p>They learn what works and what doesn't before committing tens of millions to full deployment.</p>

            <p>Finance appreciates this approach. Every investment is a bet on uncertain outcomes. Finance wants small bets first, learn, then bigger bets with less uncertainty.</p>

            <p>When you propose a multi-million dollar AI initiative with detailed 5-year projections, Finance sees: a big bet on lots of assumptions you haven't tested.</p>

            <p>When you propose a focused pilot to test critical assumptions, then scale based on evidence, Finance sees: a small bet to reduce uncertainty, followed by a bigger bet based on proof.</p>

            <p>Which would you fund?</p>

            <p>Northern Star structures investment in three phases for each project. First phase: pilot. Small team, short timeline, roughly 5-10% of total budget. Purpose: answer critical uncertainties. Success metric: can we confidently answer those questions? If yes, move to phase two. If no, either fix what's broken or kill the project.</p>

            <p>Second phase: limited deployment. Larger team, six to twelve months, roughly 30-40% of total budget. Deploy to two to three sites. Purpose: prove we can scale and deliver measurable benefits. Success metric: sites operational, benefits tracking to projections, adoption is real not theatrical.</p>

            <p>Third phase: full deployment. Full team, twelve to twenty-four months, remaining budget. Deploy to all planned sites. Purpose: deliver full projected benefits. Success metric: organization-wide value delivered and sustained.</p>

            <p>Total investment if all phases succeed: full amount over two to three years.</p>

            <p>Total investment if pilot fails: 5-10% over three to six months.</p>

            <p>They're not pretending to know everything up front. They're staging investment based on learning. If predictive maintenance pilot fails, Northern Star loses 5% of budget instead of 100%. If it succeeds, they scale with confidence instead of hope.</p>

            <p>Compare to typical approach: "We'll spend everything over two years to deploy everywhere." What if you learn in month ten that it's not working? You've spent 40% of budget. You can't easily back out. Sunk cost fallacy kicks in. You keep going, hoping it gets better. Two years later, you've spent everything on something that half-works.</p>

            <p>Your pilot succeeded because you gave it the best data, the best people, and the best conditions. Production gets whatever's left.</p>

            <p>Stage your investment. Learn fast. Scale based on evidence, not hope.</p>

            <p>The smallest pilot that tests your critical assumptions. That's where every AI initiative should start.</p>

            <p>You've sized the pilot. You've staged the investment. Now you need someone who bleeds if this fails. Because when nobody owns it, everyone watches it die.</p>

          </div>

          <div className="mt-20 pt-8 border-t border-gray-200 flex justify-between">
            <Link href="/decision-2" className="text-blue-600 hover:underline">
              ← Previous: Decision 2
            </Link>
            <Link href="/decision-4" className="text-blue-600 hover:underline">
              Next: Decision 4 →
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}