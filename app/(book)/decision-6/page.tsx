import Link from 'next/link';

export default function Decision6Page() {
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
            Decision 6: Will It Work in Reality?
          </h1>

          <div className="space-y-20 text-lg leading-[2] text-gray-900">
            
            <p>Walk into Northern Star's maintenance shed at Site 7. The catch-up project has been deployed for four months. The AI screen shows equipment failure predictions updated in real-time. The maintenance supervisor glances at it occasionally. His team ignores it entirely. They trust their experience, their gut, their two decades of working with this equipment.</p>

            <p>The AI cost millions to develop and deploy. The AI is actually accurate—83% prediction rate, which beats human gut instinct. The team just doesn't use it.</p>

            <p>That's Dr. Strangebot. Alive. Consuming cloud costs, maintenance resources, support ticket time. Delivering zero value because nobody trusts it enough to act on it.</p>

            <p>You can't adopt your way out of a bad AI. But you can infrastructure your way into a good one.</p>

            <p>Most AI initiatives treat adoption as an afterthought. "We'll build the AI, then roll it out, then people will use it." As if deployment equals adoption. It doesn't. As if training equals behavior change. It doesn't.</p>

            <p>Adoption is infrastructure. It requires planning, resources, ongoing support. You don't "do adoption" once and finish. You maintain adoption infrastructure the way you maintain production infrastructure.</p>

            <p>Here's what Northern Star learned after initial deployment failed at Sites 4, 7, and 9. They didn't just need training. They needed adoption infrastructure.</p>

            <p>So they built it.</p>

            <p>Site champions: One maintenance supervisor per site who becomes the local AI expert. Not their only job. But roughly one day per week dedicated to AI. When workers have questions, they ask their site champion. When AI predictions seem wrong, the champion investigates. When adoption stalls, the champion figures out why and fixes it.</p>

            <div style={{marginTop: '50px', marginBottom: '50px'}}>
              <p className="italic text-base leading-normal bg-gray-50 p-8 border-l-4 border-gray-300">
                What you need to know: Mining sites are often hours apart. You can't have a central support team that drives to every site when problems arise. You need local expertise at each site who understands both the work and the AI. Someone the crews trust. Someone who speaks their language.
              </p>
            </div>

            <p>Northern Star selected champions carefully. Not the most senior person—they're too busy. Not the most junior—they lack credibility. The person respected by their peers who's curious about technology and willing to learn. At Site 3, that's Dave—fifteen years experience, natural teacher, respected supervisor. At Site 8, that's Maria—twelve years experience, technically curious, doesn't tolerate nonsense.</p>

            <p>These aren't volunteers. Site champion is a formal part of their role. Appears in their performance objectives. Factors into compensation—roughly 10% pay bump for taking on AI champion responsibilities.</p>

            <p>Northern Star trained them properly. Two weeks working with the AI development team—not learning to code, but learning how the AI thinks, what it does well, what it struggles with, how to interpret predictions, how to troubleshoot common issues. Then ongoing monthly training as the AI evolves. Champions aren't AI experts. But they know enough to help their crews and escalate intelligently.</p>

            <p>But champions can't work alone. They need somewhere to escalate problems they can't solve.</p>

            <p>Tiered support with clear escalation: Three levels. Each level has defined responsibilities and response time commitments.</p>

            <p>First level—site champions: Handle user questions, workflow issues, basic troubleshooting. When maintenance crews say "AI is showing high failure risk but equipment seems fine," the champion investigates. Maybe the AI is wrong. Maybe the equipment seems fine but sensors are catching something humans miss. Response time: same day, usually within hours.</p>

            <p>Second level—operations analyst at headquarters: Handle accuracy issues, data discrepancies, system problems. When the AI seems consistently wrong at a particular site, the analyst digs into data quality, sensor calibration, model performance. Response time: within 24 hours.</p>

            <p>Third level—vendor team plus Northern Star's lead data engineer: Handle model retraining, technical architecture problems, major system changes. When the AI needs updating for new equipment types or significant operational changes, this level handles it. Response time: within one week for non-urgent issues, same day for production-stopping problems.</p>

            <p>Clear escalation paths. Known response times. But if problems keep recurring and nobody learns from them, you're just playing whack-a-mole. That's why feedback loops matter.</p>

            <p>Feedback loops—active, ongoing: Not annual surveys that nobody reads. Active feedback collection that turns individual issues into systemic improvements.</p>

            <p>Weekly: Site champions report patterns they're seeing. Common questions. Recurring issues. Places where the AI seems consistently wrong. Operations analyst reviews, identifies themes, prioritizes fixes. Some fixes are technical—retrain the model. Some are communication—explain why AI makes certain predictions. Some are workflow—adjust how information is presented.</p>

            <p>Monthly: Usage metrics, prediction accuracy by site, adoption rates by crew and shift. Leadership reviews. When problems emerge—adoption dropping at Site 5, accuracy degrading at Site 11—they investigate immediately and fix root causes.</p>

            <p>Quarterly: Model retraining based on new data and user feedback about where predictions were wrong. The AI improves based on production reality, not lab conditions. Maintenance teams see their feedback incorporated. That builds trust.</p>

            <p>But none of this works if people can't find answers when the champion isn't available. That's where documentation comes in—not as an afterthought, but as the knowledge base the whole system runs on.</p>

            <p>Documentation that actually works: Not 50-page manuals nobody reads. Not corporate training videos nobody watches.</p>

            <p>One-page laminated cards at workstations: "What to do when AI predicts equipment failure—four things to check." Maintenance crews keep these next to their monitors.</p>

            <p>Quick reference guides: "AI shows low confidence—what that means and what to do about it." Short, specific, actionable.</p>

            <p>Videos recorded by actual maintenance supervisors: Two to three minutes showing real scenarios. "Here's how Dave at Site 3 uses AI predictions to plan his weekly maintenance schedule." Not corporate actors reading scripts. Real people doing real work.</p>

            <p>Troubleshooting guides: "If AI prediction seems wrong, check these three things first before escalating." Helps crews solve problems themselves instead of always waiting for support.</p>

            <p>This infrastructure costs roughly 30% of what development cost, annually, ongoing. Northern Star spent millions developing the catch-up project. They budget about 30% of that annually for adoption infrastructure. Site champions. Support tiers. Ongoing model improvements. Documentation updates as workflows evolve.</p>

            <p>Most organizations don't budget for this. They think adoption is free—just train people once and they'll use it forever. Then wonder why expensive AI sits unused.</p>

            <p>Northern Star avoided becoming a zombie because they made decisions when decisions were uncomfortable. But most companies don't. Most companies drift. Let me show you what drift looks like.</p>

            <h2 className="text-2xl font-semibold mt-16 mb-8 text-black">The Zombie at Silver Ridge Mining</h2>

            <p>Silver Ridge Mining deployed predictive maintenance AI eighteen months ago. Different company. Similar equipment. Similar challenges. They followed best practices for development. Spent two million dollars. Decent accuracy—78%. Not bad.</p>

            <p>Initial deployment looked promising. Maintenance teams were excited after training. Management was optimistic. Board presentation showed impressive technical metrics.</p>

            <p>Six months in: adoption stayed at 35%. Some crews used it. Most didn't. Management said "give it more time, adoption builds slowly."</p>

            <p>Nine months in: adoption was still 35%. Maybe 40% at the best sites. Management extended the timeline. Added more training sessions. Reassigned the project manager. Brought in a change management consultant who ran workshops about "embracing the future."</p>

            <p>Twelve months in: adoption hit 42% at peak, then dropped back to 38%. Usage was highest right after training sessions, then declined within weeks. Management kept saying "we're seeing progress, we need to be patient with change."</p>

            <p>Fifteen months in: adoption was 33%. Lower than month six. Crews had stopped using it. Some sites never looked at predictions. The maintenance teams who initially supported it had given up—too many false positives they couldn't explain, too little support when they had questions, too much work to figure out how to integrate AI into workflows that already worked.</p>

            <p>Eighteen months in: Silver Ridge quietly shut it down. No announcement. No post-mortem. Just stopped mentioning it in strategy updates. The AI kept running for two more months—nobody remembered to turn it off. Finally someone in IT noticed the cloud costs and decommissioned it.</p>

            <p>Two million dollars. Eighteen months. Zero sustained value.</p>

            <p>What killed it wasn't technology. The AI was decent. What killed it: no adoption infrastructure. No site champions—crews had questions with nobody to ask. No tiered support—when the AI seemed wrong, nobody investigated why. No feedback loops—the AI never improved based on what crews were seeing. No real sponsorship—when adoption stayed low, nobody had authority to fix it. Just training sessions and hope.</p>

            <p>The data scientist who maintained it for eighteen months? Burned out. Left Silver Ridge for a competitor. The credibility with operations teams? Destroyed. When Silver Ridge proposes their next AI initiative, maintenance teams will smile politely and ignore it. They've seen this movie. They know how it ends.</p>

            <p>That's Dr. Strangebot's full lifecycle. Born from good intentions. Fed by indecision and hope. Died quietly from neglect. Cost two million dollars. Delivered nothing. Consumed time, focus, credibility, opportunity.</p>

            <p>Northern Star learned from Silver Ridge's failure. They built adoption infrastructure. It's working. Not perfectly. But working.</p>

            <h2 className="text-2xl font-semibold mt-16 mb-8 text-black">The Critical Decision: Scale, Stop, or Stay</h2>

            <p>Northern Star deployed the catch-up project to Site 1 as a pilot. Three months later, decision time: scale to more sites, stop the project, or stay at pilot and iterate?</p>

            <p>They set decision criteria before deployment. Not vague goals. Specific metrics with specific thresholds.</p>

            <p>Scale criteria: Usage above 80% among maintenance teams. Accuracy above 85% for failure predictions. At least three prevented failures that saved significant downtime and repair costs. Maintenance supervisor satisfaction above 7 out of 10.</p>

            <p>Stop criteria: Usage below 40% after three months. Accuracy below 70%. No clear prevented failures. Satisfaction below 5 out of 10. Technical problems that can't be fixed economically.</p>

            <p>Stay criteria: Some metrics strong, others weak. Adoption is decent but business impact unclear. Technical issues are fixable with iteration. Needs more time but shows genuine promise.</p>

            <p>After three months at Site 1: Usage at 87%. Accuracy at 83%. Two major failures prevented—saved roughly 800 thousand in emergency repairs and lost production. Satisfaction at 7.2 out of 10.</p>

            <p>They hit usage and satisfaction criteria. But accuracy was 83%, not the 85% they'd set as the threshold. Close enough? No. But Northern Star dug into why. The AI struggled with unusual operating conditions—extreme heat, equipment running outside normal parameters. For routine maintenance decisions under standard conditions, accuracy was 91%. For edge cases, 68%.</p>

            <p>They decided that was good enough to scale if they made two changes: add explainability features showing which sensor readings triggered each prediction, and train teams to recognize edge cases where AI might struggle. Perfect accuracy wasn't the goal. Useful accuracy with appropriate human judgment was.</p>

            <p>Decision: Scale. Roll out to three more sites—Sites 2, 3, and 5—all with experienced maintenance teams. Incorporate what they learned at Site 1 before going wider.</p>

            <p>What they learned: Experienced maintenance teams adopt faster than newer teams because they recognize patterns and trust tools that help them see what they'd miss. Scale to sites with veteran supervisors first. AI needs better explainability—teams want to understand why it predicts what it predicts, not just see a number on screen. Add reasoning display showing which sensor readings triggered each prediction. False positive predictions—predicting failure that doesn't happen—erode trust faster than false negatives. Tune the model to minimize false positives even if overall accuracy drops slightly. Better to miss some predictions than to cry wolf repeatedly.</p>

            <p>They scaled to Sites 2, 3, and 5 with those improvements. Six months later: Usage above 85% at all four sites. Prevented eleven major failures total. Maintenance teams trust it enough to plan work around it. Next rollout: four more sites.</p>

            <p>Remember Decision 4? You need your sponsor now. Adoption is failing at some sites and only your sponsor has authority to fix systemic problems.</p>

            <p>At Site 7, maintenance teams resisted. Usage stayed below 50% for four months. The site manager sympathized with his teams—they were already overwhelmed, AI felt like one more thing dumped on them without reducing anything else. Without strong sponsorship, Site 7 would have quietly opted out. The AI would keep running. Nobody would use it. Zombie.</p>

            <p>Northern Star's VP of Operations—the sponsor—didn't let that happen. He visited Site 7 personally. Talked to maintenance teams directly. Understood their resistance. They weren't resisting AI—they were drowning in work and saw AI as additional burden, not help. Their workload was genuinely higher than other sites.</p>

            <p>The VP made changes: hired an additional maintenance technician for Site 7 to reduce workload pressure, extended adoption timeline by two months to give teams breathing room, and assigned Dave—the experienced champion from Site 3—to mentor Site 7's champion and help crews see how AI reduces work instead of adding to it.</p>

            <p>Three months later, Site 7 adoption was above 75%. Not because teams magically loved AI. Because the sponsor removed real obstacles and gave them genuine capacity to adopt.</p>

            <p>Zombies happen when organizations can't make decisions. Scaling requires investment and risk. Stopping requires admitting failure publicly. Staying feels safe—we're being thoughtful, we're giving it time, we're learning.</p>

            <p>But staying is often the most expensive option. You pay ongoing costs—infrastructure, support, maintenance—for limited value from one or two sites. The resources locked in the zombie can't work on the next thing. The data scientist maintaining it can't build something that might actually succeed.</p>

            <p>If you've been in pilot for twelve months and you can't decide to scale or stop, default to stop. Kill it. Document what you learned. Reallocate resources. Move on.</p>

            <p>Northern Star's rule: Set a decision date before you deploy. Week 12. Month 6. Quarter 3. On that date, evaluate against criteria. Then decide: scale, stop, or one defined stay with specific improvements and specific next decision date.</p>

            <p>If you can't make a decision on decision day, default to stop. Indecision is a decision to waste resources.</p>

            <h2 className="text-2xl font-semibold mt-16 mb-8 text-black">What Did You Learn?</h2>

            <p>Whether you scale or stop, extract the learning. This is what you paid for. This is why pilots exist.</p>

            <p>Northern Star learned from the catch-up project: Experienced teams adopt faster—deploy to them first. Explainability matters more than they expected—teams need reasoning, not just predictions. Data quality maintenance is critical and expensive—sensor drift kills accuracy silently. Site champions need one day per week minimum, not the four hours they initially budgeted—adoption support takes more time than expected. False positives destroy trust faster than false negatives—tune for reliability over raw accuracy.</p>

            <p>They learned from the compete-better project: Blast engineers trust AI for standard conditions but override for edge cases—that's appropriate expertise, not resistance. The AI needs retuning every six months as geology changes—models aren't static. Workflow integration requires more change management than technical work—people issues dominate technology issues.</p>

            <p>They learned from the nobody-else-is-doing-this project: Satellite connectivity during storms is the critical constraint—need backup procedures for degraded operation. Operators need training to recognize when AI guidance is unreliable and fall back to manual operation—judgment about when to trust AI matters as much as the AI itself. Remote operations center needs 24/7 coverage—remote sites don't stop operating during headquarters' off-hours.</p>

            <p>Write down five specific things you learned. Not platitudes like "change management is important" or "data quality matters." Specific, actionable insights that change what you do next. These inform your next phase. They're what you paid for.</p>

            <p>Will it work in reality?</p>

            <p>Have you built adoption infrastructure—champions, tiered support, feedback loops, documentation that actually helps? Have you assigned ownership at the operational level where work happens? Have you set decision criteria for scale, stop, or stay? Have you committed to deciding on a specific date instead of drifting indefinitely?</p>

            <p>Get these right, and your AI might succeed. Get them wrong, and you're feeding Dr. Strangebot.</p>

            <p>Northern Star made these decisions. Not perfectly. They stumbled. They learned. They adjusted.</p>

            <p>The compete-better project overran by six months when geology at Site 9 changed and the AI model needed complete retraining—hundreds of thousands of dollars in unbudgeted costs. The catch-up project's adoption at Site 7 took four months longer than planned because teams were legitimately overworked and nobody had budgeted for hiring additional maintenance staff to create adoption capacity. The nobody-else project's satellite costs came in 60% over budget because remote sites are even more remote than Northern Star realized and require redundant systems for weather outages.</p>

            <p>But they made decisions. Clear decisions. Uncomfortable decisions. Decisions that killed projects, reallocated resources, admitted failures, set boundaries.</p>

            <p>That's what kills Dr. Strangebot. Not perfect execution. Decisions instead of drift.</p>

            <p>Now look up. Because we're building Dr. Strangebot at a scale that makes organizational AI projects look trivial.</p>

          </div>

          <div className="mt-20 pt-8 border-t border-gray-200 flex justify-between">
            <Link href="/decision-5" className="text-blue-600 hover:underline">
              ← Previous: Decision 5
            </Link>
            <Link href="/what-next" className="text-blue-600 hover:underline">
              Next: What Happens Next →
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}