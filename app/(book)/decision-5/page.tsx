import Link from 'next/link';

export default function Decision5Page() {
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
            Decision 5: Are You Ready to Build?
          </h1>

          <div className="space-y-20 text-lg leading-[2] text-gray-900">
            
            <p>Your pilot data is a carefully constructed lie.</p>

            <p>Northern Star ran a pilot for the catch-up project at their newest site. Modern sensors. Experienced team. Complete maintenance records. The AI predicted equipment failures with 87% accuracy. Excellent. They scaled to all twelve sites.</p>

            <p>Accuracy dropped to 64% at older sites. Not good enough for production decisions. Maintenance teams lost trust fast.</p>

            <p>What happened?</p>

            <h2 className="text-2xl font-semibold mt-16 mb-8 text-black">The Reality Gap</h2>

            <p>Pilots show you the best data, the best users, the best conditions. Production shows you reality.</p>

            <p>The pilot site had sensors capturing readings every ten seconds. Older sites? Sensors capture readings every sixty seconds. Some readings missing entirely because sensors failed years ago and nobody replaced them. The pilot site had maintenance teams who logged every detail—what was serviced, why, what parts were replaced, what measurements looked abnormal. Older sites? Teams logged "equipment serviced" with no specifics. The pilot site had five years of complete records in consistent formats. Older sites? Patchy records going back eighteen months, stored in three different systems that don't talk to each other.</p>

            <p>AI trained on rich, complete data from the pilot site couldn't handle the thin, incomplete data from production sites.</p>

            <h2 className="text-2xl font-semibold mt-16 mb-8 text-black">Data Doesn't Lie. But It Doesn't Tell the Truth Either.</h2>

            <p>In pilots, data is clean because someone cleaned it. Someone chose which data to include. Someone verified accuracy. Someone fixed obvious errors. The AI trained on curated data, tested on curated data, and performed well on curated data.</p>

            <p>In production, data is whatever your systems captured, however your teams logged it, with all the gaps and errors and inconsistencies nobody noticed because humans don't use those fields anyway.</p>

            <p>Your AI learns from production data. Garbage in, garbage out.</p>

            <div style={{marginTop: '50px', marginBottom: '50px'}}>
              <p className="italic text-base leading-normal bg-gray-50 p-8 border-l-4 border-gray-300">
                What you need to know: Sensor generations matter like phone generations matter. A five-year-old sensor is like a five-year-old phone—it works, but it's slower, captures less data, breaks down more. Newer sensors capture more data points, more frequently, with better accuracy. AI trained on new sensor data expects that richness. Give it old sensor data and it starves.
              </p>
            </div>

            <p>Northern Star had to stop the catch-up project rollout after sites 4, 7, and 9 showed terrible accuracy. Pull back. Retrain the AI on mixed data from all sites—new sensors, old sensors, patchy sensors, manual logs with typos and gaps. The second version worked better across all sites because it learned to handle data variability instead of expecting perfection.</p>

            <p>That retraining cost them four months and significant credibility with maintenance teams who saw the AI fail, then got told "trust us, version 2 is better." Some teams never fully trusted it again.</p>

            <p>Better approach: Train on production data from the start. Include the messiness. Include the gaps. Include the inconsistencies. The AI needs to learn to handle reality, not best-case scenarios.</p>

            <h2 className="text-2xl font-semibold mt-16 mb-8 text-black">The Data Preparation Mistake Everyone Makes</h2>

            <p>Most teams think data preparation is 20% of the timeline. It's actually 60-80% of the timeline.</p>

            <p>Northern Star thought the catch-up project would take fourteen months: two months data prep, eight months AI development, four months deployment. Actual timeline: twenty months. Eight months data prep, seven months AI development, five months deployment. Data prep was 40% of the actual timeline.</p>

            <p>What does data preparation include? Integrating data from multiple systems that use different formats. Cleaning errors and inconsistencies—typos, duplicates, impossible values that nobody caught because humans never looked at those fields. Filling gaps where data is missing. Creating derived fields the AI needs but don't exist in source systems. Validating accuracy by comparing against known outcomes. Setting up pipelines to keep data current as new data arrives.</p>

            <p>For the catch-up project: Northern Star had to integrate maintenance logs from their ERP system, sensor data from three different monitoring platforms, equipment specifications from manufacturer databases, and environmental data from site weather systems. Five systems. Four different data formats. Three different timestamp standards. Two different equipment ID schemes that didn't map cleanly.</p>

            <p>Just getting the data into one place where they could work with it took four months. Cleaning and standardizing it took another four months. Nobody budgeted for that. Everyone assumed "we have the data" meant "the data is ready." It wasn't.</p>

            <p>Budget for this. If you think AI development takes twelve months, data preparation is probably eight months of that. Plan accordingly. Staff accordingly. Don't pretend data magically appears clean and ready.</p>

            <h2 className="text-2xl font-semibold mt-16 mb-8 text-black">Plan for Data Quality Maintenance</h2>

            <p>Here's what Northern Star didn't anticipate: data quality degrades over time.</p>

            <p>The catch-up project launched. AI accuracy was solid. Six months later, accuracy started dropping at Site 4. They investigated. A temperature sensor had drifted out of calibration over time. It was reporting temperatures 15% higher than actual. The AI trained on calibrated sensors couldn't handle the drift. Predictions for Site 4 equipment became unreliable. Maintenance teams noticed. Trust eroded.</p>

            <p>They fixed the sensor. But they also added monitoring: automated checks that detect when sensor readings drift outside expected ranges. Now when a sensor drifts, the system alerts someone who can recalibrate it before AI accuracy suffers.</p>

            <p>Data quality maintenance needs roughly 10-15% of your AI team's capacity, ongoing. Forever. Not just during development. Forever. Who does this? Where does that capacity come from? Remember Decision 2 what dies to fund this?</p>

            <p>Northern Star assigned one data engineer—about one day per week ongoing—to data quality monitoring for all three AI projects. That engineer came from the analytics team. Analytics now produces fewer ad-hoc reports because that engineer is maintaining AI data quality instead.</p>

            <h2 className="text-2xl font-semibold mt-16 mb-8 text-black">Build, Buy, or Tune?</h2>

            <p>Northern Star faced this question for each project. Should they build AI from scratch, buy a vendor solution, or tune an existing model?</p>

            <p>The catch-up project—predictive maintenance: Vendor solutions exist. Every mining company needs predictive maintenance. Dozens of vendors sell this. Northern Star evaluated five vendors. They bought a solution from the vendor with strongest mining industry track record. Customized maybe 20% for their specific equipment types and operating conditions. Implemented in nine months instead of the eighteen months building from scratch would have taken.</p>

            <p>This is table stakes AI. Competitors finished deploying this two years ago. Why spend eighteen months building what you can buy and deploy in nine? Every month Northern Star doesn't have predictive maintenance, their maintenance costs stay 15% higher than competitors. That's expensive delay.</p>

            <p>The compete-better project—blast optimization: Pre-trained models exist for blast optimization. Northern Star took one and fine-tuned it for their specific geology, their specific explosive types, their specific blast patterns, their specific ore characteristics. Faster than building from scratch. Better than buying a generic solution that doesn't account for their unique conditions.</p>

            <div style={{marginTop: '50px', marginBottom: '50px'}}>
              <p className="italic text-base leading-normal bg-gray-50 p-8 border-l-4 border-gray-300">
                What you need to know: Pre-trained models learned patterns from thousands of blasts at hundreds of mines. Fine-tuning means teaching it the specific patterns at Northern Star's sites—their rock types, their equipment, their constraints. It's like hiring someone with ten years of general mining experience and training them on your specific operations for three months, rather than training someone from scratch for ten years.
              </p>
            </div>

            <p>This is operational advantage AI. Models exist, but tuning them to perform better than competitors' versions is where advantage comes from.</p>

            <p>The nobody-else-is-doing-this project—remote sites: Nothing exists. No vendor sells "AI-assisted remote mining operations with satellite connectivity in extreme weather conditions." Northern Star is building from scratch because this is new capability—nobody's done it yet. Building makes sense because the value—enabling fifteen million in new revenue from sites that can't operate profitably today—justifies the investment and risk.</p>

            <p>The question isn't "can we build better?" The question is "is building better worth the cost?"</p>

            <p>Building custom AI means: longer timeline, higher cost, ongoing maintenance burden, risk of key people leaving, distraction from other priorities.</p>

            <p>Buying or tuning means: faster deployment, lower cost, vendor handles core maintenance, proven solution, you focus on adoption instead of development.</p>

            <p>Unless the AI creates competitive advantage, buy or tune. Don't build.</p>

            <h2 className="text-2xl font-semibold mt-16 mb-8 text-black">Who Maintains This Long-Term?</h2>

            <p>Building means your team maintains it forever. Models need retraining as conditions change. Data pipelines break when source systems change. Integrations break when other systems upgrade. Your team owns this maintenance. For years. Potentially decades.</p>

            <p>Northern Star bought the catch-up project's solution. The vendor maintains the core predictive model. Northern Star maintains integration with their systems and data quality. Less burden. Predictable costs. When the vendor releases model improvements, Northern Star gets them automatically.</p>

            <p>They tuned the compete-better project's model. They own some maintenance—retraining as geology changes at their sites, adjusting for new blast patterns they develop, handling site-specific conditions. But the foundation model is maintained by the original developers. Medium burden.</p>

            <p>They built the nobody-else-is-doing-this project from scratch. They own all maintenance. High burden. But it's worth it because this creates new capability competitors don't have. When competitors eventually figure it out—and they will—Northern Star will have three to five years of operational experience and refined AI that's better than whatever competitors build first.</p>

            <p>Be honest: do you want to be in the AI business, or do you want to use AI to improve your mining business?</p>

            <p>Northern Star is a mining company. They mine. They don't want to maintain custom AI for table stakes operations like predictive maintenance. They buy those. They'll maintain custom AI for differentiating operations that create competitive advantage. They build those.</p>

            <p>Are you ready to build?</p>

            <p>Do you understand your data reality—what's clean, what's messy, where the gaps are? Have you budgeted 60-80% of timeline for data preparation? Are you training on production data, not just pilot data? Have you planned for data quality maintenance eating 10-15% of team capacity ongoing forever?</p>

            <p>Have you evaluated build versus buy versus tune honestly based on ambition level and competitive advantage? Or are you building from scratch because it feels more innovative?</p>

            <p>Get the data right. Choose the right approach based on strategy, not ego. Then you're ready to build.</p>

            <p>Northern Star built their AI projects. Now comes the hardest part: making them work when reality fights back.</p>

          </div>

          <div className="mt-20 pt-8 border-t border-gray-200 flex justify-between">
            <Link href="/decision-4" className="text-blue-600 hover:underline">
              ← Previous: Decision 4
            </Link>
            <Link href="/decision-6" className="text-blue-600 hover:underline">
              Next: Decision 6 →
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}