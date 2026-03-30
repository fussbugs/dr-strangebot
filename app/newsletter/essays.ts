export type Essay = {
  slug: string;
  title: string;
  date: string;
  image?: string; // optional: path to image in /public, e.g. '/essay-execution.png'
  imageAlt?: string;
  body: string[];
};

export const essays: Essay[] = [
  {
    slug: 'the-execution-was-never-the-point',
    title: 'The Execution Was Never The Point.',
    date: 'March 2026',
    image: '/Execution_Never.png',
    imageAlt: 'Stick figure saying "I do Thinking Work." with an arrow pointing back labelled "Actually: Formatting PDFs."',
    body: [
      'Here\'s the thing nobody seems willing to say directly: most knowledge work was never as complex as it looked.',
      'It felt complex. It required skill, time, experience. But a huge portion of what filled professional lives — the research, the drafting, the formatting, the summarizing, the endless churn of deliverables designed to demonstrate effort — was execution work. Dressed up as thinking work, sure, but execution nonetheless.',
      'The disguise held because execution took long enough that it crowded out actual thinking. You spent the week producing the report. And then, naturally, there was no time left to ask whether the report was answering the right question in the first place.',
      'AI pulled the costume off. Execution got cheap almost overnight. And now organizations are staring down a question they\'ve spent decades successfully avoiding: what were we actually hiring people for?',
      'The answer breaks into two categories. They look similar from the outside, but they require completely different things from people.',
      'The first is judgment under uncertainty. Not analysis — AI handles analysis well, probably better than most people. Judgment is what comes after the analysis. When someone has to decide, with incomplete information, in a politically charged environment, knowing they\'ll own whatever happens next. That moment was always the point. It was just surrounded by so much preparatory work that it looked proportionate — like all that effort was building up to something equally weighty. Strip the preparation away and what\'s left is exactly what it always was: a person making a call.',
      'The second is problem framing. Not solving problems — framing them. Identifying which problem is actually worth working on, or noticing that the problem everyone\'s aligned around isn\'t the real one. This is where organizations quietly lose years. They execute brilliantly on the wrong question and wonder why the results feel hollow. AI makes this failure mode significantly worse, not better. It will attack whatever question you hand it with impressive competence, which makes the wrong question look more credible than it ever did before.',
      'What both of these have in common is that they were always the scarce thing. All the execution surrounding them wasn\'t making anyone better at judgment or framing. It was just expensive.',
      'The strategic implication is harder to sit with than most organizations seem willing to go.',
      'When execution was slow and costly, it made sense to have large numbers of people who were primarily good at execution, with judgment concentrated at the top. Junior people learned by doing the work. Senior people used the structure to multiply their own thinking. The pyramid made sense for that world.',
      'That model is breaking. Not because the work disappears — it doesn\'t — but because the ratio changes. You need fewer people in the execution layers and more capacity for judgment and real problem framing distributed throughout. Which means the skills you develop people for, the career paths you build, how you actually evaluate performance — all of it needs to be rethought around a different question. Not "can this person produce solid work?" but "can this person figure out what work is worth producing?"',
      'Most organizations aren\'t doing this. They\'re celebrating that their teams are faster. Measuring productivity in volume. Treating the efficiency gains as margin improvement rather than as a clear signal that how they deploy people needs to fundamentally change.',
      'The organizations that figure this out will look genuinely different within five years — leaner, but actually more capable at the things that matter. The ones that don\'t will just get more efficient at doing the wrong things.',
      'There\'s a harder problem underneath all of this, and I don\'t think it\'s getting nearly enough attention.',
      'Judgment and problem framing cannot be developed by people who only ever use AI.',
      'AI hands junior workers pattern recognition that used to take years of hard practice to build. On the surface, that sounds like a gift. It might actually be a debt. The patterns become accessible without the struggle that used to be required to develop them — which means the struggle itself gets skipped, along with everything that struggle built in terms of real understanding and intuition.',
      'The experienced expert who knows when AI is wrong knows it because they built the underlying knowledge through years of work that AI is now replacing. The generation coming into organizations today might reach apparent competence faster and genuine competence never. They\'ll produce outputs that look like expert outputs. But without the foundation that makes an expert actually useful when the output is wrong — and the output will be wrong.',
      'This isn\'t an argument against using AI. It\'s an argument for organizations being deliberate about which skills still need to be developed the hard way, and actually protecting the conditions for that development even when AI makes it possible to skip them.',
      'The question every organization needs to answer is simple, and uncomfortable: what do we need people to have actually learned, not just be able to produce?',
      'That answer defines what you protect from automation. And what you let go.',
      'Before AI, expertise meant having seen enough situations to pattern-match well and execute reliably. That definition doesn\'t really hold anymore. AI pattern-matches at a scale no individual can touch.',
      'The new definition of expertise is knowing where the patterns break.',
      'It\'s the accumulated understanding of which situations are genuinely novel, which variables the model can\'t see, when the confident-sounding answer is exactly the wrong one. That understanding can\'t be downloaded or prompted into existence. It comes from years of building real knowledge and then using AI against that knowledge — testing it, questioning it, developing a feel for when it\'s right and when it\'s lying fluently and with complete confidence.',
      'Organizations that develop people to that standard will compound over time. Judgment calls get better. Problem framing gets sharper. AI outputs get more useful because the people directing them understand more precisely what they\'re asking for and why.',
      'Organizations that skip the development and just trust the outputs will hit a ceiling. The work will look impressive. The decisions behind it will be weak. And nobody will be able to tell the difference until something goes seriously wrong.',
      'AI didn\'t create higher-order work. It exposed that it was the only work that ever really mattered.',
      'The question is whether organizations are honest enough to reorganize around that — or whether they\'ll spend the next decade being efficiently mediocre.',
    ],
  },
];
