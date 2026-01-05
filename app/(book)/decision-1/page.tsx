import Link from 'next/link';

export default function Decision1Page() {
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
            Decision 1: What Are You Building and Why?
          </h1>

          <div className="space-y-20 text-lg leading-[2] text-gray-900">
            
            <p>Here's all the wrong reasons companies build AI: FOMO, stock price theater, fundraising narratives, talent competition. Your competitor announces an AI project. Your employee survey asks why you're not "leveraging" AI. Your board wants to hear about the future. Your recruiters say top engineers won't join companies without AI projects.</p>

            <p>So you start one. Not because you have a problem. Because you're afraid of looking behind.</p>

            <p>You don't have an AI problem. You have a fear problem wearing an AI costume.</p>

            <p>Start with the problem, not the technology. Real problems, not PowerPoint slides.</p>

            <p>Picture this: Your maintenance supervisor gets forty work orders per week. Equipment breaks. Operators complain. Everything seems urgent. He prioritizes based on who yells loudest, not what matters most. The critical conveyor belt showing stress fractures? Nobody's yelling about it yet. So it waits. Until it snaps during peak production. Three days down. Millions of dollars lost.</p>

            <div style={{marginTop: '50px', marginBottom: '50px'}}>
              <p className="italic text-base leading-normal bg-gray-50 p-8 border-l-4 border-gray-300">
                What you need to know: In mining, maintenance teams are always underwater. More equipment than people. More problems than time. They triage constantly. But gut-based triage misses the quiet failures—the equipment degrading slowly until it fails catastrophically. That's what kills production.
              </p>
            </div>

            <p>The problem: going from "whoever yells loudest gets fixed first" to "fixing what's about to fail before it costs millions" when "everything feels urgent and you can't tell what really is."</p>

            <p>Be specific. You know the problem when you see it: the supervisor who's always reacting, never preventing. Fixing what broke instead of what's about to break.</p>

            <p>Now you can evaluate if AI helps. Maybe AI prioritizes work orders by failure risk. Maybe it predicts which equipment fails next. Or maybe the real solution is simpler—better sensors, better checklists, an extra supervisor.</p>

            <p>Before jumping to AI, ask: Can we simplify the process first? Can we eliminate steps that no one needs? Then can we automate with simple rules? AI is the last option, not the first.</p>

            <p>Most "AI problems" are process problems that someone stuck an AI label on.</p>

            <p>Your real competition isn't other AI solutions. It's the spreadsheet, the gut call, the supervisor's twenty years of experience. Sometimes experience wins. Your AI needs to be dramatically better to justify the switch.</p>

            <p>If you don't understand the actual problem—the specific outcome someone needs in a specific circumstance—you'll optimize for the wrong things. You'll make your AI faster when people need it simpler. You'll add features when they need fewer steps. You'll measure technical accuracy when they measure "does this make my day easier?"</p>

            <p>Here's a mining company—call them Northern Star Mining. Fictional, but you'll recognize them. Maybe you work there. Maybe your competitor is them. They have three AI projects running right now. One will save them money. One will help them compete. One might transform their business. They're making different bets at different speeds with different risk profiles. Same company, same leadership, same constraints. Watch how they make wildly different decisions for each.</p>

            <h2 className="text-2xl font-semibold mt-16 mb-8 text-black">The Catch-Up Project: Predictive Maintenance</h2>

            <p>Northern Star's equipment keeps breaking unexpectedly. A crusher failure halts production for three days. A conveyor belt snaps during peak shift. Each surprise failure costs hundreds of thousands in lost production, plus emergency repairs at premium rates.</p>

            <div style={{marginTop: '50px', marginBottom: '50px'}}>
              <p className="italic text-base leading-normal bg-gray-50 p-8 border-l-4 border-gray-300">
                What you need to know: Mining equipment operates 24/7 in brutal conditions—heat, dust, vibration, heavy loads. When a crusher breaks unexpectedly, ore piles up behind it. When conveyors fail, nothing moves. Maintenance teams scramble. Costs multiply. Predictive maintenance means catching problems before they cause failures.
              </p>
            </div>

            <p>The problem: going from "surprise equipment failures that halt production" to "planned maintenance during scheduled downtime" when "you can't afford unexpected shutdowns" instead of "running equipment until it breaks and hoping for the best."</p>

            <p>The starting point: reactive maintenance. Fix it when it breaks. The desired end point: predictive maintenance. Fix it before it breaks. The circumstance: running 24/7 operations where downtime is expensive. What they do today: scheduled maintenance based on manufacturer recommendations, plus emergency repairs when things explode.</p>

            <p>But here's the thing: every mining company is doing this. Northern Star's competitors finished deploying predictive maintenance two years ago. Their maintenance costs are 15% lower than Northern Star's. Their unplanned downtime is half what Northern Star experiences.</p>

            <p>This isn't innovation. This is survival. This is catching up before the gap becomes insurmountable. Northern Star has maybe twelve months before being behind on predictive maintenance becomes being uncompetitive on costs. They're racing against time and competitors who already crossed the finish line.</p>

            <h2 className="text-2xl font-semibold mt-16 mb-8 text-black">The Compete-Better Project: Blast Optimization</h2>

            <p>Northern Star mines ore. The quality varies—some sections are rich, some are lean. Blasting—using explosives to break rock—determines how much valuable ore you recover versus how much you waste.</p>

            <div style={{marginTop: '50px', marginBottom: '50px'}}>
              <p className="italic text-base leading-normal bg-gray-50 p-8 border-l-4 border-gray-300">
                What you need to know: Mining uses controlled explosives to break rock. Get the blast pattern right, and you fracture the rock cleanly—easy to process, good ore recovery. Get it wrong, and you either pulverize good ore into dust you can't process, or you leave valuable ore locked in rock you can't break. Expert blast engineers design patterns. But even experts guess to some extent. Small improvements in blast patterns can mean millions in recovered value.
              </p>
            </div>

            <p>The problem: going from "blast patterns based on engineer experience and some guesswork" to "optimized blast patterns that recover 3-5% more ore" when "competitors are squeezing margins and every percentage point matters."</p>

            <p>Current state: experienced blast engineers design patterns. They're good. But they can't see patterns across thousands of blasts. They can't optimize for subtle geological variations. AI can.</p>

            <p>Other mining companies are deploying blast optimization. Some are getting 2-3% better ore recovery. Northern Star wants to get 4-5%—not just matching competitors, but beating them. This isn't about catching up. This is about competing better on execution within operations everyone does.</p>

            <p>If they pull it off, they extract more value from the same ore. Better margins. Better profitability. Competitive advantage that lasts until competitors catch up. Maybe two years. Maybe three. Then everyone's equal again and someone needs to find the next edge.</p>

            <h2 className="text-2xl font-semibold mt-16 mb-8 text-black">The Nobody-Else-Is-Doing-This Project: Remote Site Operations</h2>

            <p>Northern Star has mineral deposits in locations so remote that staffing them with experienced engineers isn't economically viable. Flying experts to sites 300 miles from the nearest town costs more than the site generates. Local talent doesn't have the specialized skills. So these sites sit dormant. Valuable ore in the ground. No way to extract it profitably.</p>

            <div style={{marginTop: '50px', marginBottom: '50px'}}>
              <p className="italic text-base leading-normal bg-gray-50 p-8 border-l-4 border-gray-300">
                What you need to know: Remote mining sites might be hundreds of miles from civilization—deep wilderness regions, isolated terrain, accessible only by helicopter or seasonal roads. Getting a specialized engineer there costs tens of thousands in flights, accommodation, and time. If the site only generates a few million per year in revenue, you can't afford half a million annually in expert labor costs. So these sites sit dormant, or they operate poorly, or they never get developed. The ore is there. The economics aren't.
              </p>
            </div>

            <p>This is different. The catch-up project and the compete-better project are improving or optimizing current operations. Remote sites? Northern Star is enabling operations that weren't economically viable before. AI isn't making them better at what they do. It's letting them do things they couldn't do at all.</p>

            <p>If it works, Northern Star operates sites competitors can't. New revenue. New sites. New possibilities. The advantage won't last forever—eventually someone else figures it out. But it creates a window where Northern Star does something competitors don't.</p>

            <p>Three projects. Three different jobs. Same company, different ambitions.</p>

            <p>Your budget is your strategy's confession booth. It tells the truth when your PowerPoint lies.</p>

            <p>Most companies get ambition levels wrong. They confuse them. They announce they're pursuing "transformational AI" when they're really just catching up to competitors. Or they measure a genuinely transformational project with quarterly ROI expectations. Both paths fail.</p>

            <p>The catch-up project needs speed. Competitors finished this two years ago. Northern Star is racing to close a gap before it becomes fatal. Timeline: six to twelve months, not because that's ideal, but because they don't have longer. If this takes two years, the gap widens beyond recovery. They're executing a playbook that exists. Fast implementation, proven approach, table stakes to stay competitive.</p>

            <p>The compete-better project needs better execution than competitors. Everyone has blast optimization. Northern Star wants theirs to deliver more value. Timeline: twelve to eighteen months because they need to tune the AI to their specific geology, their specific equipment, their specific blast patterns. Rush it and they deploy something mediocre that doesn't beat competitors. Take too long and competitors improve while they're still building.</p>

            <p>The nobody-else-is-doing-this project needs patience. Timeline: twenty-four to thirty-six months because Northern Star is creating something that doesn't exist yet. No playbook. No vendor solution. They're figuring it out as they go. If leadership measures this on quarterly ROI, they'll kill it before it works. This is the project that could enable fifteen million in new annual revenue from sites currently sitting idle. But it takes years to prove out.</p>

            <p>Three timelines. Three risk profiles. Three different ways to compete.</p>

            <p>The trap: Northern Star's leadership announces the remote sites project as "transformational AI" to the board. The board gets excited. Then finance measures it on twelve-month ROI. The project burns through budget in year one with limited results because it's still being developed. Finance gets nervous. Leadership defends it but can't show the transformation they promised. Project dies in year two, three months before it would have worked.</p>

            <p>Or the opposite trap: Northern Star treats the catch-up project like an experiment. They give it a patient timeline and tolerance for learning. Eighteen months later, they've built something good. Their competitors finished the same thing in nine months using vendor solutions. Northern Star spent twice as long and twice as much to reach table stakes.</p>

            <p>Match ambition to timeline. Match timeline to resource allocation. Match resource allocation to how you measure success.</p>

            <p>Be honest about what you're building. The catch-up project is survival. The compete-better project is racing competitors. The nobody-else project is attempting something new. Call each what it is.</p>

            <p>What's the specific outcome? Not vague transformation. Not innovation slides. What does someone need to start doing, stop doing, or do differently? What makes this urgent? What are they using instead of AI?</p>

            <p>If you can't answer specifically, you don't have a problem. You have a technology looking for a problem to justify it.</p>

            <p>Dr. Strangebot loves that ambiguity. He feeds on it.</p>

            <p>Now that you know what you're building and why, here's the uncomfortable question: What are you willing to kill to fund it?</p>

          </div>

          <div className="mt-20 pt-8 border-t border-gray-200 flex justify-between">
            <Link href="/prologue" className="text-blue-600 hover:underline">
              ← Previous: Prologue
            </Link>
            <Link href="/decision-2" className="text-blue-600 hover:underline">
              Next: Decision 2 →
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}