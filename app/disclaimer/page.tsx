import Link from 'next/link';

export default function DisclaimerPage() {
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
            Copyright & Disclaimer
          </h1>

          <div className="space-y-8 text-lg leading-[2] text-gray-900">
            
            <p className="font-semibold">© 2025 Virapo Limited. All rights reserved.</p>

            <p>The content of this book, including all text, concepts, frameworks, and case studies, is proprietary material protected by copyright law. No part of this publication may be reproduced, distributed, or transmitted in any form without prior written permission.</p>

            <p>The views, opinions, and recommendations expressed in this book are solely those of the author, Vinay Poojary, and do not reflect the views of any employer, past or present, including Vale, Oracle Cerner, PwC, Deloitte, or Aon.</p>

            <p>The case studies presented are fictional composites created for illustrative purposes. Any resemblance to actual organizations, projects, or individuals is coincidental.</p>

            <p>This book does not constitute professional advice. Readers should consult with qualified professionals before making business decisions based on the content herein.</p>

          </div>

        </div>

      </div>
    </div>
  );
}