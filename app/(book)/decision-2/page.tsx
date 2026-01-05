import Link from 'next/link';

export default function Decision2Page() {
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
            Decision 2: What Dies to Fund This?
          </h1>

          <div className="space-y-20 text-lg leading-[2] text-gray-900">
            
            <p>Let's talk about Johnny Two Jobs.</p>

            <p>Johnny works at Northern Star Mining. He's in IT. His official job: maintain ERP systems and handle user support tickets. His real job: that plus unofficial data analyst for operations, go-to person for Excel problems, and backup for a dozen small systems nobody else understands.</p>

            <p>The catch-up project needs a data engineer. Someone who understands production systems, can clean messy maintenance data, knows the business context behind the numbers.</p>

            <p>That's Johnny. Except Johnny's already working two jobs. Actually three.</p>

            <p>Your AI initiative doesn't magically create new Johnny capacity. It pulls him from something else. Maybe ERP user support response times double. Maybe operations stops getting their weekly reports. Maybe those small systems break and stay broken longer.</p>

            <p>Something dies. You just haven't said what.</p>

            <p>Most AI initiatives pretend resources appear from nowhere. They don't. Every person assigned to AI comes from somewhere else. Every dollar allocated to AI isn't allocated to something else.</p>

            <p>Zombie projects eat the future to feed the past.</p>

            <p>Your budget reveals what's real. Not your strategy deck. Not your roadmap slides. Your actual resource allocation.</p>

            <p>You claim AI is your top priority. Then you staff it with people working three other jobs. Or you fund it from "innovation budget" that gets cut first when quarterly earnings miss. Or you assign it to a manager already responsible for four other initiatives.</p>

            <p>That's not a top priority. That's theater.</p>

            <p>Real prioritization means: this matters more than that. This person stops doing X to do Y. One project gets delayed or cancelled so another project gets resources.</p>

            <p>Nobody wants to make those decisions. They're uncomfortable. You make enemies. Someone's project gets killed. Someone's initiative gets delayed. Someone loses headcount.</p>

            <p>So instead, organizations play resource Tetris. Shift this person here. Borrow that team there. Share resources across initiatives. Everyone gets 30% of what they need. Nothing succeeds.</p>

            <p>The uncomfortable truth: most organizations can't do everything they're trying to do. Your strategy lists twelve priorities. You have resources for three done well or six done poorly.</p>

            <p>AI isn't free. It costs money, yes. But mostly it costs focus. It costs your best people's time. It costs organizational attention.</p>

            <p>What are you willing to kill to fund this AI initiative? Not defer. Not delay. Actually kill.</p>

            <p>If your answer is "nothing"—if you're adding AI on top of everything else—you're building Dr. Strangebot.</p>

            <p>Here's how Northern Star made the killing decision for their three projects. Not easy calls. Not comfortable. But clear.</p>

            <h2 className="text-2xl font-semibold mt-16 mb-8 text-black">The Catch-Up Project: Stealing from the ERP Upgrade</h2>

            <p>Northern Star needs predictive maintenance deployed within twelve months. That requires two data engineers for a year and one maintenance expert half-time.</p>

            <div style={{marginTop: '50px', marginBottom: '50px'}}>
              <p className="italic text-base leading-normal bg-gray-50 p-8 border-l-4 border-gray-300">
                What you need to know: One data engineer integrates maintenance data from multiple systems that don't talk to each other. The other cleans that messy data and builds the AI model. The maintenance expert teaches them what the data actually means—which sensor readings matter, what "normal" looks like, how equipment actually fails. Without the maintenance expert, the engineers build technically correct AI that doesn't understand mining.
              </p>
            </div>

            <p>Where do these people come from?</p>

            <p>They're pulling one data engineer from the ERP upgrade project, which is now delayed nine months. They're pulling the other from the dashboard redesign project, which they're killing entirely. They decided predictive maintenance—preventing million-dollar failures—creates more value than prettier dashboards that show data nobody acts on anyway.</p>

            <p>The IT director is furious. The operations VP who wanted those dashboards? Even more furious. But the resources are real. The money can't be in two places.</p>

            <p>Northern Star also needs ongoing cloud infrastructure budget for sensors, data storage, model training. They're reallocating it from the data warehouse modernization project, which they're postponing indefinitely.</p>

            <p>Someone in finance spent two years planning that data warehouse. Two years of requirements gathering, vendor evaluations, budget justifications. Gone. Not delayed. Dead. The money Northern Star would have spent on a modern data warehouse is now paying for cloud compute to train predictive maintenance models.</p>

            <h2 className="text-2xl font-semibold mt-16 mb-8 text-black">The Compete-Better Project: Cancelling the Automation Dream</h2>

            <p>Blast optimization needs three data scientists for eighteen months, two blast engineers half-time, and significant compute resources for model training.</p>

            <div style={{marginTop: '50px', marginBottom: '50px'}}>
              <p className="italic text-base leading-normal bg-gray-50 p-8 border-l-4 border-gray-300">
                What you need to know: One data scientist analyzes historical blast data. Another builds the optimization model. The third integrates it with blast planning software. The two blast engineers validate that AI recommendations make physical sense and teach the system their expertise. Compute resources run thousands of simulations—testing different blast patterns to find optimal ones. This requires industrial-grade computing, not a desktop machine.
              </p>
            </div>

            <p>Northern Star doesn't have three idle data scientists.</p>

            <p>They're pulling one data scientist from the production analytics team—that team is now understaffed, and several planned reports won't get built. They're pulling another from the inventory optimization project, which they're delaying a year. They're pulling the third from the advanced analytics initiative, which they're killing.</p>

            <p>The head of analytics is devastated. Advanced analytics was his passion project. Two years of planning. Eighteen months of political capital spent getting executive buy-in. Gone.</p>

            <p>Northern Star decided blast optimization—potentially millions in recovered ore value—matters more than analytics experiments that might deliver value someday.</p>

            <p>The two blast engineers are coming from operations, which means operations is spreading remaining engineers thinner across sites. Some sites get less attention. Production optimization projects at those sites slow down or stop. That's the trade-off.</p>

            <h2 className="text-2xl font-semibold mt-16 mb-8 text-black">The Nobody-Else-Is-Doing-This Project: The Three Million Dollar Reallocation</h2>

            <p>Remote site operations is the most expensive bet. Three data scientists for thirty-six months, two operations engineers half-time, major infrastructure investment for satellite connectivity at remote sites, and partnership budget for specialized AI development.</p>

            <div style={{marginTop: '50px', marginBottom: '50px'}}>
              <p className="italic text-base leading-normal bg-gray-50 p-8 border-l-4 border-gray-300">
                What you need to know: This is building something that doesn't exist. One data scientist builds the AI that guides operations decisions. Another builds the monitoring system that catches when things go wrong. The third builds the communication system that works despite spotty satellite connections. The operations engineers translate operational expertise into something AI can learn. This takes years because they're inventing it as they go. Satellite infrastructure costs hundreds of thousands per year per site—remote sites have no fiber optic cables, no cell towers, just satellites.
              </p>
            </div>

            <p>Northern Star is making big cuts to fund it. They're cancelling the training simulator project that would have cost a million dollars. They're delaying two planned site expansions—freeing up engineering resources and several million in capital budget. They're reallocating technology partnership budget from three smaller initiatives they're killing.</p>

            <p>Someone's career is tied to that training simulator. It's dead now. Someone championed those site expansions for three years. They're on hold indefinitely. The people running those three smaller initiatives? They just lost their projects and need new assignments.</p>

            <p>Northern Star's CEO made these calls personally. He looked at the portfolio. He looked at the resources. He decided that enabling remote sites—potentially fifteen million in annual revenue from sites that currently sit dormant—justifies killing other valuable projects.</p>

            <p>Not everyone's happy. But everyone's clear on what died and why.</p>

            <p>You can't randomly kill projects. You kill strategically.</p>

            <p>Northern Star killed projects based on clear rationale. Four legitimate reasons:</p>

            <p><span className="font-semibold">Strategic misalignment:</span> This no longer serves our goals. The advanced analytics initiative was valuable last year. This year, blast optimization matters more for margins. That's strategic choice, not random.</p>

            <p><span className="font-semibold">Resource constraint:</span> We can't do both well. Northern Star can do the training simulator adequately or the remote sites project excellently. Adequate doesn't create competitive advantage. Kill the simulator. Do remote sites right.</p>

            <p><span className="font-semibold">Opportunity cost:</span> Both are good, but one is better. The dashboard redesign is fine. Predictive maintenance changes economics. Kill dashboards. Do predictive maintenance.</p>

            <p><span className="font-semibold">Failure to deliver:</span> We gave it a fair shot. It didn't work. The inventory optimization project has been "almost ready" for eighteen months. Kill it. Reallocate the data scientist to something that ships.</p>

            <p>How to communicate the kill: Be honest. Be specific. Be respectful.</p>

            <p>"We're killing the training simulator not because it's bad, but because remote site operations delivers ten times the value with similar resources. We're making a choice about where to compete."</p>

            <p>Not "we're reprioritizing our portfolio." Not "we're optimizing resource allocation." People aren't stupid. They see through corporate-speak. Say what you're killing. Say why. Accept that someone will be unhappy.</p>

            <p>Make the decision. Communicate the decision. Accept the anger. Move forward.</p>

            <p>The trap organizations fall into: they make these decisions but don't communicate them. They cancel the data warehouse project but don't tell anyone. They delay the ERP upgrade but don't explain why. Six months later, everyone's confused and bitter because they assumed their project was still happening.</p>

            <p>What kills AI initiatives: not technology problems. Resource starvation. Trying to do AI with people who have three other jobs. Funding it with money that disappears when priorities shift.</p>

            <p>If you're not willing to kill something to fund AI, don't start. Wait until you are. Otherwise you're building Dr. Strangebot—a project that consumes resources but never gets enough to succeed.</p>

            <p>Choose: make enemies now by killing something to fund AI properly, or make enemies later when AI fails because it was never properly resourced.</p>

            <p>Both paths make enemies. Only one path might succeed.</p>

            <p>Your budget reveals what's real. Your resource allocation reveals your actual priorities. Not your strategy slides. Not your town halls. Your choices.</p>

            <p>What are you willing to kill?</p>

            <p>You've defined the job. You've killed projects to fund it. Now Finance looks at your business case and knows one thing: you're guessing.</p>

          </div>

          <div className="mt-20 pt-8 border-t border-gray-200 flex justify-between">
            <Link href="/decision-1" className="text-blue-600 hover:underline">
              ← Previous: Decision 1
            </Link>
            <Link href="/decision-3" className="text-blue-600 hover:underline">
              Next: Decision 3 →
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}