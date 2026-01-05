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
            
            <p>Most AI projects start with hope and end with disappointment. Not because the technology failed. Because nobody defined what success looked like before they started building.</p>

            <p>"We'll learn as we go." "Let's see what's possible." "We're experimenting." These aren't strategies. They're ways to avoid making hard decisions about what you're actually trying to accomplish.</p>

            <p>Here's the uncomfortable truth: if you can't articulate what success looks like before you start, you won't recognize failure when it arrives. And you definitely won't stop the project when you should.</p>

            <p>Northern Star Mining's predictive maintenance project needs proof before they commit. Not faith. Not optimism. Proof that the AI can actually predict failures better than their current approach.</p>

            <p>Current approach: scheduled maintenance based on manufacturer recommendations. Replace parts every X operating hours. Some parts fail early. Some could run longer. But the schedule is simple and predictable.</p>

            <p>AI promise: predict failures before they happen. Replace parts just before they fail, not before or after. Reduce unplanned downtime by 40%. Lower maintenance costs by 15%.</p>

            <p>The pilot: Northern Star picks one piece of equipment—a critical crusher that processes 500 tons per hour. If the crusher fails unexpectedly, production stops. If they can predict failures three days in advance, maintenance teams can plan repairs during scheduled downtime.</p>

            <p>Success criteria: The AI must predict crusher failures three days in advance with 80% accuracy. It must have fewer than 10% false positives—alerts that predict failure when the equipment is fine. And it must beat the current scheduled maintenance approach on both cost and downtime within six months.</p>

            <p>Clear. Measurable. Time-bound. Everyone knows what success looks like. More importantly, everyone knows what failure looks like.</p>

            <div style={{marginTop: '50px', marginBottom: '50px'}}>
              <p className="italic text-base leading-normal bg-gray-50 p-8 border-l-4 border-gray-300">
                What you need to know: Pilots aren't about building the final system. They're about learning fast whether the approach works. The best pilots are small enough to learn cheap but real enough to learn true. Testing on one crusher isn't the full system. But it's real production equipment under real operating conditions. If it works here, it'll probably work elsewhere. If it fails here, you learned before spending millions.
              </p>
            </div>

            <p>Six months later: The AI predicts 70% of failures three days in advance. Good, but not 80%. False positives are at 15%—too high. Maintenance teams get alert fatigue. They start ignoring alerts. The AI costs more to operate than scheduled maintenance because of all the false alarms requiring investigation.</p>

            <p>Decision point: The AI didn't hit the success criteria. But it showed promise. 70% accuracy might improve with more training data. False positives might decrease with tuning. Do they stop or continue?</p>

            <p>This is where most organizations lie to themselves. "We're close." "We're learning." "Let's give it another six months." They don't stop. They don't pivot. They don't adjust the criteria. They just keep going.</p>

            <p>Northern Star does something different. They ask: "What would it take to get from 70% to 80% accuracy? What would it cost? How long would it take?"</p>

            <p>Answer: Six more months and three more engineers. That's a much bigger bet than the initial pilot. It might work. It might not. The question isn't "Is this promising?" The question is "Is this promising enough to double down with more resources?"</p>

            <p>Northern Star decides: No. The pilot proved predictive maintenance is harder than expected on their equipment. Their crusher fails from complex combinations of factors the AI can't reliably predict. They kill the project. They accept that competitors who succeeded with predictive maintenance either have simpler equipment or invested more resources than Northern Star can justify.</p>

            <p>They lost six months and the cost of one pilot. But they learned something valuable: predictive maintenance on their specific equipment isn't currently feasible with their resources. They stop before wasting millions.</p>

            <p>That's a successful pilot. Not because it worked. Because it provided clear evidence to make a decision.</p>

            <p>Most pilots are designed to confirm what people already believe, not to test whether they're right. That's not a pilot. That's theater.</p>

            <p>Real pilots have three characteristics: They're small enough to fail cheap. They're real enough to learn true. They have clear kill conditions set before starting.</p>

            <p>Small enough to fail cheap: Northern Star's predictive maintenance pilot tested one crusher for six months with one data scientist. Total cost: maybe $200K including equipment sensors, data infrastructure, and personnel time. If it failed, they lost $200K. Painful but survivable.</p>

            <p>Compare that to deploying predictive maintenance across all equipment immediately. That's $5M minimum. If it fails, the company just burned money they can't recover. And they probably can't stop fast because they've committed to vendors, built infrastructure, and announced the initiative.</p>

            <p>Real enough to learn true: Testing on a real crusher under real operating conditions with real maintenance teams. Not a sandbox. Not a lab. Not simulated data. The actual environment where the AI needs to work.</p>

            <p>Fake pilots test in controlled environments. They use clean data. They avoid messy reality. Then they deploy to production and discover nothing works. Because pilots that don't reflect real conditions don't teach real lessons.</p>

            <p>Clear kill conditions: Northern Star set success criteria before starting: 80% accuracy, under 10% false positives, beats scheduled maintenance on cost and downtime. They didn't say "let's see what happens." They said "here's what success looks like; anything less isn't good enough."</p>

            <p>Kill conditions make stopping possible. Without them, every pilot becomes an indefinite "learning process" that never quite proves value but never quite fails either. That's Dr. Strangebot's favorite breeding ground.</p>

            <p>The blast optimization project is different. Northern Star wants AI to design better blast patterns—recovering 4-5% more ore than current expert-designed patterns. They can test this.</p>

            <p>The pilot: Northern Star selects one blast zone. They have the AI design blast patterns for that zone. They execute those blasts. They measure ore recovery. They compare it to the recovery from expert-designed patterns in similar zones.</p>

            <p>Success criteria: The AI must achieve 4% better ore recovery than expert patterns within three months of testing on the pilot zone. If it hits 4%, they expand to five zones. If those five zones also average 4% improvement, they deploy across all blast operations.</p>

            <p>Staged investment. Each stage has clear success criteria. Each stage de-risks the next investment. They don't commit to full deployment until the AI proves itself at scale.</p>

            <p>Three months later: The AI designs patterns that recover 3.5% more ore than expert patterns. Close, but not 4%. The geologists analyze why. They discover the AI works better in certain rock types than others. In some geology, it hits 5% improvement. In others, it's only 2%.</p>

            <p>Decision: Northern Star recalibrates. They deploy the AI only in the rock types where it performs well. They keep expert patterns for the challenging geology. They get 4-5% improvement where the AI works and don't force it where it doesn't.</p>

            <p>Partial success. Pragmatic deployment. Not everything or nothing. Use the tool where it works. Keep the old approach where it's still better.</p>

            <p>That's how you de-risk AI. You stage the investment. You test in progressively larger contexts. You make go/no-go decisions at each stage based on evidence, not hope.</p>

            <div style={{marginTop: '50px', marginBottom: '50px'}}>
              <p className="italic text-base leading-normal bg-gray-50 p-8 border-l-4 border-gray-300">
                What you need to know: Staged investment isn't about being cautious. It's about learning cheap. Every stage answers a specific question: Can the AI work in this context? Can it scale to this volume? Can it handle this complexity? You invest more only when the previous stage provides clear evidence you should. You stop when evidence says it won't work at acceptable cost. That's not failure. That's smart resource allocation.
              </p>
            </div>

            <p>The remote sites project is the hardest to pilot because it's trying to enable something that doesn't exist yet. You can't test it on current operations because current operations don't include remote sites.</p>

            <p>Northern Star's approach: They pick the most accessible remote site—the one that's expensive but not impossible to staff. They send one experienced engineer and three junior operators. The AI assists with decision-making, but the experienced engineer can override it.</p>

            <p>Success criteria: The site must operate at 80% efficiency of fully-staffed sites while costing 50% less in labor. If it works for twelve months, they try a more remote site. If that works, they deploy to sites they can't currently staff at all.</p>

            <p>Staged risk. Start with the easiest version of the hard problem. Prove it there. Then tackle the harder version.</p>

            <p>Twelve months later: The site operates at 75% efficiency—close to target. Labor costs are 40% lower than full staffing, better than the 50% target. The AI handled most decisions well. The experienced engineer intervened less over time as the AI learned.</p>

            <p>Decision: Expand to a more remote site. This one requires helicopter access and can only keep one senior operator on site. If the AI can handle that, it'll work anywhere.</p>

            <p>They're not betting everything on transformation. They're buying evidence one stage at a time. If the second site fails, they still have the first site working profitably. They learned where the boundary is. Maybe remote sites work at accessibility level X but not level Y. That's useful knowledge. It tells them which sites to pursue and which to avoid.</p>

            <p>Most pilots are too big or too fake. Too big: "Let's deploy AI across the entire maintenance organization and see what happens." Too fake: "Let's test the AI in a controlled environment with clean data and perfect conditions."</p>

            <p>Big pilots fail expensively. Fake pilots fail to teach real lessons.</p>

            <p>The right size: Large enough to learn something meaningful. Small enough to fail cheap. Real enough to encounter actual problems. Fake pilots avoid problems. Real pilots surface them early when you can still adjust.</p>

            <p>Here's what kills most pilots: organizations set them up to succeed at learning, then measure them on delivering value. Pilots aren't for delivering value. They're for learning whether an approach can deliver value at scale.</p>

            <p>Northern Star's predictive maintenance pilot failed to hit targets. But it succeeded as a pilot because it clearly showed that their equipment was harder to predict than expected. They learned. They made a decision. They stopped before wasting millions.</p>

            <p>That's a successful pilot. Most organizations can't celebrate that kind of success. They see "we stopped the project" as failure. So they keep going. They invest more. They lower the bar. They redefine success. And they end up with Dr. Strangebot.</p>

            <p>Pilots should answer questions, not confirm assumptions. If you already know it'll work, you don't need a pilot. You need deployment.</p>

            <p>The questions pilots answer: Can the AI work in our specific context? Can we get enough quality data? Can we build it with our available talent? Will people actually use it? Will it deliver the value we expect at acceptable cost?</p>

            <p>The questions pilots don't answer: What's the ROI at full scale? How will it transform the business? What's the competitive advantage? Those questions come after pilots prove the approach works. Pilots come first. Transformation comes later. If at all.</p>

            <p>The best pilots are the ones that make stopping easy. Clear criteria. Clear timeline. Clear kill conditions. No ambiguity. No "let's see what happens." Just "here's what success looks like; we'll know in X months if we have it."</p>

            <p>Northern Star's blast optimization pilot had a three-month timeline. Not six months. Not "until we figure it out." Three months to test blast patterns, measure recovery, and compare to expert patterns. Three months to know if they should invest more or stop.</p>

            <p>That's the point. Pilots should be time-boxed decisions, not open-ended experiments. Learn fast. Decide fast. Move on.</p>

            <p>Dr. Strangebot loves pilots without kill conditions. He loves "learning processes" that never conclude. He loves projects that show "promise" indefinitely without ever proving value.</p>

            <p>The antidote: clear criteria, defined before starting, measured objectively, and enforced even when it's uncomfortable to stop.</p>

            <p>You've proven the AI can work. Now comes the harder question: Who's responsible when it doesn't?</p>

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

        {/* Footer */}
        <footer className="mt-12 pt-12 border-t-2 border-gray-300 px-8">
          <div className="flex justify-center items-center gap-2 text-sm mb-6">
            <Link href="/about" className="text-blue-600 hover:underline">
              About
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/speaking" className="text-blue-600 hover:underline">
              Speaking
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/disclaimer" className="text-blue-600 hover:underline">
              Disclaimer
            </Link>
            <span className="text-gray-400">•</span>
            <a 
              href="https://linkedin.com/in/poojary" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              LinkedIn
            </a>
          </div>
          <p className="text-center text-gray-600 text-sm pb-12">
            © 2025 Virapo Limited
          </p>
        </footer>

      </div>
    </div>
  );
}