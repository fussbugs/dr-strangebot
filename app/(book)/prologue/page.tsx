import Link from 'next/link';

export default function ProloguePage() {
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
            Prologue: Dr. Strangebot
          </h1>

          <div className="space-y-20 text-lg leading-[2] text-gray-900">
            
            <p>You've met Dr. Strangebot.</p>

            <p>He was in that meeting last Tuesday—the one about the AI pilot that's been running for nine months. Where someone said "we're seeing promising early indicators" and nobody asked why, after nine months, the indicators are still early.</p>

            <p>You've read his status reports. "The team continues to make progress." "Adoption is building momentum." Words that sound like progress but describe a project running in place.</p>

            <p>You might be building him right now.</p>

            <p>Dr. Strangebot begins with good intentions. An executive reads about AI. A competitor announces an initiative. Someone says: "We're falling behind." Within weeks, there's a project. Nobody asked what problem it solves—that feels small. Dr. Strangebot is about transformation. Innovation. The future.</p>

            <p>So you fund him. You staff him. You announce him. And Dr. Strangebot takes his first breath.</p>

            <h2 className="text-2xl font-semibold mt-16 mb-8 text-black">Dr. Strangebot eats three things:</h2>

            <p><span className="font-semibold">Budget.</span> Not catastrophically. Just steadily. Nobody adds it up. If you did, you'd realize you could have built three real things with what you spent keeping him alive.</p>

            <p><span className="font-semibold">Credibility.</span> Every extended pilot, every lowered bar, every "we're learning" instead of "this isn't working"—you spend credibility. Next time you propose AI, people smile politely and decline.</p>

            <p><span className="font-semibold">Opportunity.</span> Your data scientist maintains Dr. Strangebot instead of building the next thing. Meanwhile, your competitor killed their failing pilot in month three and moved on. They're winning because they didn't spend eighteen months feeding a zombie.</p>

            <p>Everyone knows he's not working. Yet nobody kills him. Because killing him requires someone to say three words out loud, with witnesses: "This isn't working."</p>

            <p>Nobody will say them. So instead they say: "Let's give it one more quarter."</p>

            <p>Dr. Strangebot has one weakness: decisions. Clear decisions. Made quickly. Made honestly. Made when they're uncomfortable.</p>

            <p>He's born when you start without defining the problem. He grows when you can't articulate success. He survives when you won't say when to stop.</p>

            <p>There are six moments in every AI project where you either make a clear decision or invite Dr. Strangebot in. Some organizations nail these decisions. Some whiff on them. The one they whiff on? That's where Dr. Strangebot gets in.</p>

            <p>But if you make all six decisions clearly—define the problem, articulate success, set kill conditions, and actually stop when that moment comes—Dr. Strangebot can't survive. He needs ambiguity. He needs "let's see." He needs "one more quarter."</p>

            <p>Deny him those things, and he starves.</p>

            <p>You're about to read six decisions. They're not complicated. They're not technical. What they are is uncomfortable.</p>

            <p>Some organizations can't make them. Not because they lack capability. Because they lack courage.</p>

            <p>Dr. Strangebot counts on this. He's been banking on it for decades.</p>

            <p>But some organizations make the uncomfortable decisions. They don't build Dr. Strangebot. They build AI that works.</p>

            <p>You can be one of them.</p>

            <p>This book is about making those decisions.</p>

            <p>Dr. Strangebot is waiting to see if you will.</p>

          </div>

          <div className="mt-20 pt-8 border-t border-gray-200 flex justify-end">
            <Link href="/decision-1" className="text-blue-600 hover:underline">
              Next: Decision 1 →
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}