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
            
            <p>AI projects fail most often not from bad technology but from unclear ownership. When everyone is responsible, no one is responsible. When no one is responsible, the project drifts until someone kills it or it becomes Dr. Strangebot.</p>

            <p>Here's how most organizations assign ownership: "IT will build the AI. Operations will use it. The business will sponsor it." Three groups. Zero accountability. IT builds what they think operations needs. Operations complains it doesn't work how they need it to. Business gets frustrated that money is being spent with limited results. Everyone blames everyone else. Nothing works.</p>

            <p>Accountability requires one throat to choke. One person who can't point to someone else when the project fails. One person whose career depends on this working or knowing when to stop it.</p>

            <p>That's uncomfortable. Most organizations avoid it. They create steering committees, working groups, cross-functional teams. Lots of people involved. Nobody accountable. That's not governance. That's diffusion of responsibility.</p>

            <p>Northern Star Mining's predictive maintenance project needs an owner. Not a committee. Not "IT and Operations jointly." One person whose success or failure is tied to whether this works.</p>

            <p>The wrong choice: Make the IT director responsible. They build the AI. They deploy the technology. But they don't use it. They don't maintain equipment. They don't make maintenance decisions. When the AI fails to predict a crusher breakdown, IT says "the model worked as designed; operations didn't use it correctly." Operations says "the model doesn't fit our workflow; IT didn't build what we needed." Nobody is accountable for the outcome.</p>

            <p>The right choice: Make the VP of Operations responsible. They use the AI. They benefit from it working. They suffer when it fails. They control resources needed to make it successful—people, processes, equipment access. They can't blame IT if it doesn't work. They own both the technology adoption and the operational outcome.</p>

            <p>But here's the trap: you can't give someone accountability without authority. The VP of Operations is accountable for predictive maintenance succeeding. But IT builds and operates the AI. If IT deprioritizes the project because they're slammed with other work, the VP of Operations has no leverage.</p>

            <p>Accountability without authority is a recipe for failure and resentment.</p>

            <p>So Northern Star does this: The VP of Operations owns the project outcome. They have budget authority to hire contractors if IT can't provide resources. They have escalation authority to the CEO if they're blocked. They control what gets built—requirements, priorities, timeline. IT provides technical expertise and execution, but the VP of Operations makes the final calls on tradeoffs.</p>

            <p>Authority matches accountability. That's the only way accountability works.</p>

            <div style={{marginTop: '50px', marginBottom: '50px'}}>
              <p className="italic text-base leading-normal bg-gray-50 p-8 border-l-4 border-gray-300">
                What you need to know: Authority doesn't mean "do whatever you want without consequence." It means "make decisions within defined boundaries and live with the results." The VP of Operations can decide what to build and when to stop. But they can't escape accountability by blaming someone else. That's the deal. Authority to decide. Accountability for outcomes. You can't have one without the other.
              </p>
            </div>

            <p>Here's how organizations usually structure AI projects: Technology team builds. Business team uses. Steering committee governs. Nobody is accountable for results because accountability is distributed across multiple people who each control only part of what's needed for success.</p>

            <p>Better structure: One owner with authority and accountability. Supporting teams with clear responsibilities but not shared ownership.</p>

            <p>Northern Star's blast optimization project is owned by the VP of Mining Operations. Not co-owned with the VP of Technology. Not governed by a steering committee of five executives. Owned. One person.</p>

            <p>The VP of Mining Operations decides what success looks like. They decide how much to invest. They decide when to expand, pivot, or stop. They have a technology team supporting them. They have geologists providing expertise. But when the CEO asks "Is blast optimization working?" there's one person who answers. And if the answer is no, there's one person accountable.</p>

            <p>That clarity changes everything. The VP can't say "we're learning" indefinitely. They can't blame technology teams for building the wrong thing. They can't blame geologists for not adopting it. They own the outcome.</p>

            <p>This is what separates projects that deliver from projects that drift. Clear ownership with matching authority.</p>

            <p>Most organizations assign ownership to people without skin in the game. A project manager coordinates. A steering committee oversees. But nobody's compensation or promotion depends on whether this works. So nobody makes the hard decisions. Nobody kills the project when it should die. Nobody pushes through obstacles when they could.</p>

            <p>Real accountability requires skin in the game. The owner's performance review reflects project outcomes. Their bonus depends on it. Their career trajectory changes based on whether this succeeds or fails. That's skin in the game.</p>

            <p>Northern Star's remote sites project has the highest risk and highest potential reward. If it works, they operate fifteen remote sites generating $15M annually. If it fails, they wasted two years and millions of dollars.</p>

            <p>Who owns it? Not IT. They're not operating remote sites. Not a steering committee. They're not betting their careers on this. The VP of Exploration owns it. Their job is to find and develop new mineral deposits. Remote sites are the future of their role. If this fails, their entire strategy fails. They have maximum skin in the game.</p>

            <p>When you give someone that much accountability, you have to give them matching authority. The VP of Exploration controls which sites to pilot, when to expand, how much to invest, and when to stop. They can hire external AI expertise if internal teams are overloaded. They can pull resources from other projects they own. They make the calls.</p>

            <p>And if it fails, they own the failure. No excuses. No blame-shifting. That's the deal.</p>

            <p>Most organizations can't stomach this level of accountability because failure becomes too visible. If the VP of Exploration owns remote sites and it fails, their failure is obvious. So organizations diffuse accountability to protect people from visible failure.</p>

            <p>Result: Nobody fails visibly. But nothing succeeds either.</p>

            <p>The right owner for an AI project isn't the person who builds it. It's the person who benefits from it working and suffers when it doesn't. The person closest to the operational impact. The person who controls the resources needed to make it successful.</p>

            <p>For predictive maintenance: VP of Operations. They maintain equipment. They benefit from reduced downtime. They suffer from unexpected failures. They control maintenance teams, processes, and priorities.</p>

            <p>For blast optimization: VP of Mining Operations. They design blasts. They benefit from better ore recovery. They suffer from poor blast patterns. They control geologists, blast engineers, and mining processes.</p>

            <p>For remote sites: VP of Exploration. They develop new sites. They benefit from operating previously uneconomical deposits. They suffer when remote sites can't operate profitably. They control which sites to develop and how to staff them.</p>

            <p>Same company. Three different owners. Because ownership should follow operational impact, not organizational hierarchy.</p>

            <p>The wrong owners are people who "coordinate" but don't operate. Project managers coordinate. They don't maintain equipment, design blasts, or operate sites. When things go wrong, they escalate to the real decision-makers. That delay kills projects. By the time real owners hear about problems, it's often too late to fix them.</p>

            <p>Right ownership means the person making daily decisions has authority to make those decisions without escalating every trade-off. They can shift priorities, reallocate resources, change direction. They don't need permission from three layers of management for every adjustment.</p>

            <p>Most organizations create ownership structures that require consensus for decisions. The technology team, business team, and steering committee all need to agree before anything changes. Result: nothing changes quickly enough to matter.</p>

            <p>Better: The owner makes decisions. Supporting teams provide input. But the owner decides. Fast. Without waiting for consensus that never comes.</p>

            <div style={{marginTop: '50px', marginBottom: '50px'}}>
              <p className="italic text-base leading-normal bg-gray-50 p-8 border-l-4 border-gray-300">
                What you need to know: Consensus-based ownership isn't ownership. It's a way to avoid accountability by ensuring no single person makes decisions that could be wrong. But AI projects require making decisions with incomplete information under uncertainty. Waiting for consensus means waiting until it's too late. Real owners make decisions, get feedback, adjust quickly, and own the outcomes.
              </p>
            </div>

            <p>Authority and accountability have to match. You can't hold someone accountable for outcomes they can't control. And you can't give someone authority without holding them accountable for how they use it.</p>

            <p>Northern Star's VP of Operations is accountable for predictive maintenance. They control budget allocation for the project. They decide when to expand or stop. They can hire external expertise if internal resources are constrained. They set priorities for their maintenance teams.</p>

            <p>What they can't control: Whether IT provides data infrastructure. Whether data science teams prioritize their project. Whether other executives support or undermine the initiative.</p>

            <p>So Northern Star gives them escalation paths. If IT can't deliver infrastructure, they escalate to the CEO. If data science teams are overloaded, they have budget to hire contractors. If other executives block resources, the CEO resolves it.</p>

            <p>That's matched authority and accountability. The VP controls most of what's needed for success. For things outside their control, they have mechanisms to remove blockers. They're not left helpless while still being held accountable.</p>

            <p>The failure mode: giving someone accountability without removing their blockers. "You own predictive maintenance. Make it work. But you don't control IT, you can't hire externally, and you need three other executives to approve changes." That's accountability without authority. It fails.</p>

            <p>The question every organization must answer: Who wakes up at 3 AM worried about this project? That person should own it. If nobody wakes up worried, nobody cares enough to make it succeed.</p>

            <p>Northern Star's VP of Operations wakes up at 3 AM when equipment fails unexpectedly. That person should own predictive maintenance. The VP of Mining Operations wakes up when ore recovery is poor. They own blast optimization. The VP of Exploration wakes up when they can't develop profitable new sites. They own remote sites.</p>

            <p>Ownership follows worry. Accountability follows consequences.</p>

            <p>Most AI projects have owners who don't worry because failure doesn't affect them personally. The project manager coordinates, but their career doesn't depend on whether this works. The steering committee oversees, but their bonuses aren't tied to outcomes. The technology team builds, but they measure success by delivering code, not by operational impact.</p>

            <p>Nobody loses sleep. So nobody makes the hard calls. The project drifts. It becomes Dr. Strangebot. And everyone involved points to someone else when asked why it failed.</p>

            <p>Clear ownership means one person can't sleep if this isn't working. One person whose career, compensation, and reputation depend on outcomes. One person who has authority to make it work and accountability when it doesn't.</p>

            <p>That's uncomfortable. It's also the only way accountability works.</p>

            <p>Organizations that refuse to assign clear ownership with skin in the game shouldn't build AI. They're not serious enough to succeed. They'll spend money, build technology, and wonder why nothing delivers value.</p>

            <p>The answer: because nobody was responsible for delivering value. They were responsible for building technology, coordinating work, or providing oversight. But not for outcomes.</p>

            <p>Outcomes require ownership. Real ownership. The kind where one person's career depends on whether this works.</p>

            <p>Dr. Strangebot loves organizations with diffused responsibility. He feeds on steering committees and cross-functional coordination. He thrives when nobody owns outcomes.</p>

            <p>The antidote: one throat to choke. One person who can't point to someone else when it fails. One person whose authority matches their accountability.</p>

            <p>You know who's responsible. Now the harder question: Are you actually ready to build this?</p>

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