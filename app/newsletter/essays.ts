export type Essay = {
  slug: string;
  title: string;
  date: string;
  body: string[];
};

export const essays: Essay[] = [
  // Paste new essays here. Each essay is an object:
  // {
  //   slug: 'url-friendly-title',       // used in the URL: /newsletter/url-friendly-title
  //   title: 'Your Essay Title',
  //   date: 'March 2026',
  //   body: [
  //     'First paragraph text.',
  //     'Second paragraph text.',
  //     // one string per paragraph
  //   ],
  // },
];
