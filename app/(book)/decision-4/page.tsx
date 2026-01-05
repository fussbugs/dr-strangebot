import Link from 'next/link';

export default function Decision4Page() {
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
            Decision 4: Who's Responsible?
          </h1>

          <div className="space-y-20 text-lg leading-[2] text-gray-900">
            
            <p>Nobody bleeds, nobody cares.</p>

            <p>Walk into Northern Star's main conference room. Eight people discussing the catch-up project—predictive maintenance. Seven months in. Equipment failures haven't decreased. The AI's accuracy is decent. Maintenance teams aren't using the predictions.</p>

            <p>Someone finally asks: "Who's responsible for making this work?"</p>

            <p>Silence. Then the deflection game begins.</p>

            <p>IT director: "We built the AI. It's accurate. That's our job."</p>

            <p>Operations director: "We're not technical. IT needs to make it usable."</p>

            <p>Site manager: "My teams are underwater already."</p>

            <p>Finance: "We approved the budget. The team needs to execute."</p>

            <p>Everyone points somewhere else. Nobody owns the outcome.</p>

            <p>That's diffusion of responsibility. That's why most AI initiatives fail. Not because of technology. Because nobody bleeds if it fails.</p>

            <h2 className="text-2xl font-semibold mt-16 mb-8 text-black">The Skin-in-the-Game Test</h2>

            <p>Every successful AI initiative needs a sponsor who owns success and a team that does the work. Getting one right isn't enough. You need both.</p>

            <p>But here's the test: If this project fails, who loses? Not "who's disappointed." Who actually loses—bonus, promotion, reputation, career trajectory?</p>

            <p>If you can't name one specific person, you don't have ownership. You have a committee watching something happen.</p>

            <h2 className="text-2xl font-semibold mt-16 mb-8 text-black">The Sponsor: Someone Whose Career Depends on This</h2>

            <p>Northern Star's catch-up project needs a sponsor. Not someone who approves funding and disappears. Someone who owns the outcome. Someone whose bonus, whose reputation, whose next promotion depends on this working.</p>

            <p>Real sponsorship doesn't mean career suicide. It means serious commitment with real consequences.</p>

            <p>For the catch-up project, Northern Star's VP of Operations is the sponsor. His annual performance goals explicitly include: "Deploy predictive maintenance across twelve sites, reduce unplanned downtime by 20%, achieve 80%+ maintenance team adoption." That's 30% of his bonus. That's 30% of his performance review. If predictive maintenance fails, his year fails.</p>

            <p>When maintenance teams resist—"We know our equipment, we don't need AI telling us what to do"—he doesn't delegate the conversation. He spends time with maintenance supervisors across multiple sites. Understands the resistance. Makes clear: predictive maintenance is strategic direction. We're doing this. Tell me what you need to make it work. More training? Better explanations? Different alert thresholds? But we're not debating whether.</p>

            <p>When sensor upgrades come in 40% over budget, he doesn't send it back to the team to figure out. He makes the call: reallocate from another operations budget or accept reduced scope? He chooses reallocation because predictive maintenance matters more than the project he's stealing from.</p>

            <p>That's real sponsorship. Skin in the game. Active decisions. Political capital spent.</p>

            <p>Sponsorship without authority is responsibility without power. That's not leadership. That's a scapegoat.</p>

            <p>For the compete-better project—blast optimization—the Chief Operating Officer sponsors it personally. Why? Because improving ore recovery by 3-5% means tens of millions in additional revenue over three years. That matters at COO level. When blast engineers push back on workflow changes, the COO doesn't form a committee to study change management. He talks to engineers directly. Listens. Adjusts where possible. But makes clear: we're optimizing blasts with AI. Help shape how, but not whether.</p>

            <p>For the nobody-else-is-doing-this project—remote sites—the CEO sponsors it. Why? Because enabling fifteen million in new annual revenue from sites that currently sit idle is a board-level strategic initiative. When satellite costs spike by 60% mid-project, the CEO decides: pay more or kill the project? He pays more because the strategic value justifies it. He doesn't delegate that decision to procurement or IT. He owns it.</p>

            <p>Three projects. Three sponsors. Three executives whose success depends on AI success. Not secondary metrics. Primary ones.</p>

            <p>What makes sponsorship real:</p>

            <p><span className="font-semibold">Skin in the game.</span> The sponsor's performance metrics include this AI initiative. Not as line item 12 of 15, but in the top 3. If the AI fails, their performance review reflects it. Their bonus reflects it. Their reputation reflects it.</p>

            <p><span className="font-semibold">Decision rights.</span> The sponsor can make resource decisions, override functional resistance, and kill the initiative if needed. They don't need six approvals. They decide.</p>

            <p><span className="font-semibold">Active engagement.</span> The sponsor isn't briefed quarterly. They're in monthly working sessions. They know the obstacles. They make decisions in real-time, not after three weeks of escalation.</p>

            <p><span className="font-semibold">Political capital.</span> The sponsor spends political capital to make this work. Making enemies. Overriding objections. Forcing difficult conversations. If they're not willing to burn relationships for this, they're not a real sponsor.</p>

            <p>If you can't find this person, don't start the AI initiative. Without real sponsorship, you're building Dr. Strangebot.</p>

            <h2 className="text-2xl font-semibold mt-16 mb-8 text-black">The Team: Names, Not Titles. Time, Not Percentages.</h2>

            <p>Who actually does the work on the catch-up project? Not "IT" or "Operations." Specific people with specific time commitments and specific trade-offs.</p>

            <p>For AI development: Lead data engineer Maria is full-time for twelve months. She comes off the ERP upgrade project—that's what died to fund this, remember Decision 2. Systems engineer James works roughly three days per week for six months. He's reducing time on infrastructure work—someone else picks up his other responsibilities or those responsibilities don't get done.</p>

            <p>For integration: ERP specialist Tom works about two days per week for four months. Data analyst Sarah is full-time for three months during data cleanup phase, then half-time for ongoing data quality work.</p>

            <p>For adoption: Change lead Karen works three days per week for twelve months. She postponed the training program redesign—that's what died to fund this.</p>

            <p>For operations ownership: Maintenance supervisor Dave at the pilot site dedicates roughly one day per week during pilot and rollout.</p>

            <p>Those are names. Those are real time commitments. Those are actual trade-offs. If Maria is full-time on predictive maintenance, she's not working on ERP upgrade. If James works three days per week on this, infrastructure projects slow down. If Sarah is full-time on data cleanup, she's not producing the analytics reports operations is used to getting.</p>

            <p>Northern Star made these trade-offs explicitly. They communicated them. Everyone knows what died to enable this.</p>

            <h2 className="text-2xl font-semibold mt-16 mb-8 text-black">The Authority Question: Can They Actually Make This Happen?</h2>

            <p>The VP of Operations is accountable for predictive maintenance adoption across all sites. But does he have authority to mandate it? Or can site managers opt out indefinitely?</p>

            <p>If site managers can say "not ready yet" forever, the VP doesn't really own outcomes. He owns hope.</p>

            <p>Northern Star gave the VP authority. Site managers shape how adoption happens at their sites—workflows, training timing, implementation details. But whether it happens isn't up for debate. The VP mandates deployment timeline. Site managers execute within that timeline.</p>

            <p>For blast optimization, the COO has authority to change blast workflows across all sites. Blast engineers don't get to opt out, though they heavily influence how new workflows integrate with existing practices.</p>

            <p>For remote sites, the CEO has authority to staff sites with AI-assisted operations. Site managers don't vote on whether to use AI. They help define what "AI-assisted" means in practice.</p>

            <p>Authority matches accountability. The person responsible for outcomes has power to make decisions that affect those outcomes.</p>

            <p>When there's conflict—competing priorities, resource constraints, political resistance—the sponsor decides. Fast. Not after three committee meetings. In days.</p>

            <h2 className="text-2xl font-semibold mt-16 mb-8 text-black">AI Needs Different Skills. Create Roles and Pay for Them.</h2>

            <p>Here's what Northern Star learned: AI initiatives need hybrid roles that don't fit traditional job descriptions or pay bands.</p>

            <p>They need maintenance supervisors who understand both equipment and AI systems. Those people are worth more than supervisors who only know equipment. They need data engineers who understand mining operations, not just algorithms. Those people are worth more than data engineers who only know code. They need blast engineers who can work with AI recommendations and translate them for teams. Those people are worth more than blast engineers who only know explosives.</p>

            <p>Northern Star created new roles with new compensation structures. "AI-enabled maintenance supervisor" gets roughly 15% pay premium over standard supervisor. "Operations data engineer" gets roughly 20% pay premium over standard data engineer. "AI-assisted blast engineer" gets roughly 12% pay premium over standard blast engineer.</p>

            <p>These hybrid roles get career paths distinct from traditional roles. There's a future in being the person who bridges AI and operations. Northern Star wants those people to stay, not leave for companies that value that hybrid skillset.</p>

            <p>Most companies resist this. They try to fit AI roles into existing pay bands. Then wonder why they can't hire or retain the people they need.</p>

            <p>If you're serious about AI, create career paths and compensation for AI-adjacent roles. Budget for it. Or accept that your AI initiatives will be perpetually understaffed with people who don't quite fit.</p>

            <h2 className="text-2xl font-semibold mt-16 mb-8 text-black">The Accountability Test</h2>

            <p>How do you know if accountability is real at Northern Star?</p>

            <p>Ask: Who owns the outcome if predictive maintenance fails? Answer: VP of Operations. One name. One person. Not "the team." Not "IT and Operations jointly."</p>

            <p>Ask: What happens to him if it fails? Answer: His bonus drops 30%. His performance review reflects failure. His reputation takes a hit. His next promotion opportunity disappears. Real consequences.</p>

            <p>Ask: What authority does he have? Answer: He can mandate deployment timelines, reallocate resources from other operations projects, override site manager resistance, change workflows. Real authority.</p>

            <p>Ask: What's his time commitment? Answer: Monthly working sessions, weekly updates during critical phases, immediate availability for major obstacles. Real engagement.</p>

            <p>When predictive maintenance hits an obstacle—maintenance teams at Site 7 resist adoption—what happens? The VP talks to Site 7 manager directly within two days. Understands the resistance. Makes a decision within three days. Adoption happens with adjustments based on feedback, but adoption happens. That's accountability.</p>

            <p>Sponsorship determines if obstacles get removed. Team structure determines if work gets done. Authority determines if decisions get made. Compensation determines if your best people focus and stay.</p>

            <p>Get all four right, and you have a chance. Get three right, and you drift. Get two right, and you're building Dr. Strangebot.</p>

            <p>Who owns success? Not in theory. In practice. With consequences. With authority. With focus.</p>

            <p>If you can't answer clearly, don't start.</p>

            <p>You've assigned ownership. Northern Star knows who bleeds if these projects fail. Now they need to prepare the foundation. And the foundation is always data.</p>

          </div>

          <div className="mt-20 pt-8 border-t border-gray-200 flex justify-between">
            <Link href="/decision-3" className="text-blue-600 hover:underline">
              ← Previous: Decision 3
            </Link>
            <Link href="/decision-5" className="text-blue-600 hover:underline">
              Next: Decision 5 →
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}