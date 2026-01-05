import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-3xl mx-auto px-8 py-12">
        
        {/* Header Section with Icon - Left Aligned */}
        <div className="mb-12 pb-8 border-b border-gray-300">
          <div className="flex items-center gap-3 mb-2">
            <Link href="/" className="hover:opacity-70 transition-opacity">
              <Image
                src="/icons/robot.svg"
                alt="Home"
                width={65}
                height={65}
              />
            </Link>
            <h1 className="text-xl font-bold text-black">
              Dr. Strangebot
            </h1>
          </div>

          <p className="text-gray-600 mb-2">
            How to Build AI That Works (or Admit It Doesn't)
          </p>

          <p className="text-gray-600 text-sm mb-6">
            by <span className="font-bold">Vinay Poojary</span>
          </p>

          <div className="mb-4">
            <Link href="/prologue">
              <Image
                src="/Dr Strangebot.png"
                alt="Dr. Strangebot"
                width={180}
                height={180}
                priority
              />
            </Link>
          </div>
        </div>

        {/* Description */}
        <div className="mb-12">
          <h2 className="text-xl font-bold mb-4 text-black">Description</h2>
          <p className="text-base text-gray-800 leading-relaxed">
            Companies fund AI projects that become zombies—alive, consuming resources and delivering nothing. 
            This book captures six decisions which separate projects that succeed from those that fail.
          </p>
        </div>

        {/* TOC */}
        <div className="space-y-6">
          
          <div className="border-b border-gray-200 pb-4">
            <Link href="/prologue" className="text-blue-600 hover:underline font-bold block mb-2">
              → Prologue
            </Link>
            <Link href="/prologue" className="text-blue-600 hover:underline block ml-4">
              → Dr. Strangebot
            </Link>
          </div>

          <div className="border-b border-gray-200 pb-4">
            <Link href="/decision-1" className="text-blue-600 hover:underline font-bold block mb-2">
              → Decision 1
            </Link>
            <Link href="/decision-1" className="text-blue-600 hover:underline block ml-4">
              → What Are You Building and Why?
            </Link>
          </div>

          <div className="border-b border-gray-200 pb-4">
            <Link href="/decision-2" className="text-blue-600 hover:underline font-bold block mb-2">
              → Decision 2
            </Link>
            <Link href="/decision-2" className="text-blue-600 hover:underline block ml-4">
              → What Dies to Fund This?
            </Link>
          </div>

          <div className="border-b border-gray-200 pb-4">
            <Link href="/decision-3" className="text-blue-600 hover:underline font-bold block mb-2">
              → Decision 3
            </Link>
            <Link href="/decision-3" className="text-blue-600 hover:underline block ml-4">
              → Can You Prove It's Worth It?
            </Link>
          </div>

          <div className="border-b border-gray-200 pb-4">
            <Link href="/decision-4" className="text-blue-600 hover:underline font-bold block mb-2">
              → Decision 4
            </Link>
            <Link href="/decision-4" className="text-blue-600 hover:underline block ml-4">
              → Who's Responsible?
            </Link>
          </div>

          <div className="border-b border-gray-200 pb-4">
            <Link href="/decision-5" className="text-blue-600 hover:underline font-bold block mb-2">
              → Decision 5
            </Link>
            <Link href="/decision-5" className="text-blue-600 hover:underline block ml-4">
              → Are You Ready to Build?
            </Link>
          </div>

          <div className="border-b border-gray-200 pb-4">
            <Link href="/decision-6" className="text-blue-600 hover:underline font-bold block mb-2">
              → Decision 6
            </Link>
            <Link href="/decision-6" className="text-blue-600 hover:underline block ml-4">
              → Will It Work in Reality?
            </Link>
          </div>

          <div className="pb-4">
            <Link href="/what-next" className="text-blue-600 hover:underline font-bold block">
              → What Happens Next
            </Link>
          </div>

        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-gray-200 text-center text-sm">
          <div className="mb-3">
            <Link href="/about" className="text-blue-600 hover:underline">About</Link>
            <span className="text-gray-400 mx-2">•</span>
            <Link href="/speaking" className="text-blue-600 hover:underline">Speaking</Link>
            <span className="text-gray-400 mx-2">•</span>
            <a href="https://linkedin.com/in/poojary" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              LinkedIn
            </a>
          </div>
          <p className="text-gray-600">© 2025 Vinay Poojary</p>
        </footer>

      </main>
    </div>
  );
}