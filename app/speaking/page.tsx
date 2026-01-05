import Link from 'next/link';

export default function SpeakingPage() {
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
            Speaking
          </h1>

          <div className="space-y-8 text-lg leading-[2] text-gray-900">
            
            <p>Vinay speaks at industry conferences on digital transformation, AI implementation, and avoiding the organizational patterns that turn technology projects into expensive failures.</p>

            <h2 className="text-2xl font-semibold mt-12 mb-6 text-black">Past Speaking Engagements</h2>

            <ul className="space-y-3 text-base">
              <li>• Mining Investment North America</li>
              <li>• Decarbonized Mines Summit Canada</li>
              <li>• Digitalization in Mining North America</li>
              <li>• Energy Transition and Emission Reduction</li>
              <li>• Mining 4.0 (Europe & North America)</li>
              <li>• Digitalization and AI in Mining</li>
              <li>• Mining Tech</li>
              <li>• Missouri University of Science and Technology (S&T) - Creating Tomorrow's Mining World</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-12 mb-6 text-black">Topics</h2>

            <ul className="space-y-3 text-base">
              <li>• Digital Transformation Strategy</li>
              <li>• AI Implementation at Scale</li>
              <li>• Avoiding Technology Project Failures</li>
              <li>• Building Data & AI Operating Models</li>
            </ul>

            <p className="mt-12">For speaking inquiries, connect on <a href="https://linkedin.com/in/poojary" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">LinkedIn</a>.</p>

          </div>

        </div>

      </div>
    </div>
  );
}