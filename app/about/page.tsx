import Link from 'next/link';

export default function AboutPage() {
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
            About
          </h1>

          <div className="space-y-8 text-lg leading-[2] text-gray-900">
            
            <p>Vinay Poojary is a senior technology executive who has led digital transformation and AI strategy at global Fortune 100 enterprises across healthcare, mining, utilities, and telecommunications.</p>

            <p>He has worked with Boards and executive leadership to build and scale technology initiatives at Vale, Oracle Cerner, PwC, Deloitte, and Aon—spanning operations across North America, Asia, and South America.</p>

            <p>His work focuses on making transformation projects succeed in traditional organizations by building key executive support, funding, and getting the right talent and technology stack to execute.</p>

          </div>

        </div>

      </div>
    </div>
  );
}