export interface IndustryGuide {
  slug: string;
  name: string;
  marketSize: string;
  tagline: string;
  description: string;
  categoryOfOne: string;
  podcasts: { name: string; host: string; listeners: string; pitch: string }[];
  authorityMetrics: { metric: string; benchmark: string; tip: string }[];
  tips: string[];
  keyChallenge: string;
}

export const industries: IndustryGuide[] = [
  {
    slug: 'tech',
    name: 'Tech',
    marketSize: '$5.2T global market',
    tagline: 'How to Get Known in Tech',
    description: 'The tech industry is crowded with brilliant minds. Standing out requires more than building great products — it requires a clear point of view and systematic visibility.',
    categoryOfOne: 'The [Role] Who [Unique Angle] for [Specific Outcome] — e.g., "The AI Ethicist Who Helps Startups Ship Responsibly"',
    podcasts: [
      { name: 'Lenny\'s Podcast', host: 'Lenny Rachitsky', listeners: '500K+', pitch: 'Share a counterintuitive product growth insight backed by your specific data' },
      { name: 'The Tim Ferriss Show', host: 'Tim Ferriss', listeners: '1M+', pitch: 'Offer a unique framework or system that\'s produced 10x outcomes' },
      { name: 'Acquired', host: 'Ben Gilbert & David Rosenthal', listeners: '300K+', pitch: 'Provide deep insider context on a major company or acquisition' },
    ],
    authorityMetrics: [
      { metric: 'LinkedIn Profile Views', benchmark: '1,000+/week for "Rising" status', tip: 'Optimize your headline with the specific problem you solve, not your job title' },
      { metric: 'GitHub Stars / Contributions', benchmark: '100+ stars on a public project', tip: 'Open source a tool related to your niche to generate developer community credibility' },
      { metric: 'Newsletter Subscribers', benchmark: '5,000+ for monetization leverage', tip: 'Start with a niche technical newsletter — specificity drives subscriber loyalty' },
    ],
    tips: [
      'Build in public: share your process, failures, and insights on LinkedIn and X weekly',
      'Write one definitive "state of [your niche]" report per year that gets referenced by others',
      'Speak at one niche conference per quarter, even if it\'s a smaller event — it builds momentum',
      'Guest on 2–3 podcasts per month in your first 90 days to compound your audience reach',
    ],
    keyChallenge: 'In tech, everyone has an opinion. Authority comes from publishing original research, shipping products, and building a track record of called shots.',
  },
  {
    slug: 'finance',
    name: 'Finance',
    marketSize: '$26T global financial services',
    tagline: 'How to Get Known in Finance',
    description: 'Finance demands credibility and compliance awareness. Building authority here means navigating regulatory constraints while establishing a clear, trustworthy voice.',
    categoryOfOne: 'The [Finance Specialty] Who Helps [Client Type] Achieve [Specific Goal] Without [Common Fear] — e.g., "The CFO Coach Who Helps SaaS Founders Raise Series A Without Losing Equity"',
    podcasts: [
      { name: 'We Study Billionaires', host: 'Trey Lockerbie', listeners: '400K+', pitch: 'Break down a specific investment philosophy or a case study of a high-conviction bet' },
      { name: 'Invest Like the Best', host: 'Patrick O\'Shaughnessy', listeners: '200K+', pitch: 'Offer a unique analytical framework for evaluating a specific asset class or market' },
      { name: 'The Meb Faber Show', host: 'Meb Faber', listeners: '150K+', pitch: 'Present original research on an underexplored corner of global markets' },
    ],
    authorityMetrics: [
      { metric: 'LinkedIn Thought Leadership Posts', benchmark: '3–5 posts/week with 2%+ engagement rate', tip: 'Break down complex financial concepts in plain English — simplicity builds trust' },
      { metric: 'Media Mentions', benchmark: '1 tier-2 media mention per month to start', tip: 'Comment on financial news with unique analysis — journalists will find you' },
      { metric: 'Newsletter Open Rate', benchmark: '35%+ open rate indicates loyal authority audience', tip: 'Niche finance newsletters command premium sponsorships at 5,000 subscribers' },
    ],
    tips: [
      'Develop a clear, repeatable investment or financial thesis you can articulate in 30 seconds',
      'Comment on Bloomberg and WSJ articles with a unique angle — journalists monitor these threads',
      'Write one deep-dive market analysis per month and distribute it across LinkedIn and email',
      'Host a monthly roundtable or webinar for your target client niche to build direct relationships',
    ],
    keyChallenge: 'Finance has strict compliance rules around advice. Frame your content as education and insight, not personalized financial advice, to build freely.',
  },
  {
    slug: 'health',
    name: 'Health & Wellness',
    marketSize: '$8.3T global wellness economy',
    tagline: 'How to Get Known in Health & Wellness',
    description: 'The health and wellness space has exploded with voices but starves for genuine expertise. Evidence-based practitioners who communicate clearly have a massive advantage.',
    categoryOfOne: 'The [Health Specialty] Who [Methodology] for [Specific Patient/Client Profile] — e.g., "The Sports Physio Who Uses Biomechanics Data to Help Endurance Athletes Avoid Injury"',
    podcasts: [
      { name: 'Huberman Lab', host: 'Andrew Huberman', listeners: '3M+', pitch: 'Share new research or mechanisms in your specialty with clear protocols listeners can apply' },
      { name: 'Found My Fitness', host: 'Rhonda Patrick', listeners: '500K+', pitch: 'Discuss cutting-edge research in your area with a focus on practical longevity applications' },
      { name: 'The Peter Attia Drive', host: 'Peter Attia', listeners: '700K+', pitch: 'Offer deep, evidence-based expertise on a specific health intervention or biomarker' },
    ],
    authorityMetrics: [
      { metric: 'Client Transformation Stories', benchmark: '5+ documented case studies', tip: 'Share before-and-after insights (with consent) to demonstrate measurable outcomes' },
      { metric: 'Research Citations', benchmark: 'Cite 1–2 studies per post to signal evidence-based credibility', tip: 'Link to PubMed studies in every piece of content to differentiate from influencers' },
      { metric: 'Speaking Invites', benchmark: '2+ conferences per year validates emerging authority', tip: 'Start with niche medical or wellness conferences before targeting mainstream stages' },
    ],
    tips: [
      'Develop a signature framework or protocol with a memorable name that patients can share',
      'Collaborate with complementary practitioners on joint content — it cross-pollinates audiences',
      'Publish in peer-reviewed journals OR simplify research for a lay audience — either builds credibility',
      'Create short-form video content explaining your specialty — health content performs exceptionally on video platforms',
    ],
    keyChallenge: 'Health is high-trust. Your credentials, evidence base, and authentic patient outcomes are your authority foundation. Never overclaim results.',
  },
  {
    slug: 'consulting',
    name: 'Consulting',
    marketSize: '$1T+ global consulting industry',
    tagline: 'How to Get Known in Consulting',
    description: 'Consulting is a trust-based industry where your reputation directly drives your rate. Consultants who build public authority attract better clients, close faster, and charge more.',
    categoryOfOne: 'The [Industry] Consultant Who [Unique Method] to Deliver [Specific ROI] in [Time Frame] — e.g., "The SaaS Revenue Consultant Who Unlocks 40% Growth in 90 Days Using Churn Forensics"',
    podcasts: [
      { name: 'The Diary Of A CEO', host: 'Steven Bartlett', listeners: '2M+', pitch: 'Share a surprising truth about your industry that contradicts conventional wisdom' },
      { name: 'My First Million', host: 'Sam Parr & Shaan Puri', listeners: '800K+', pitch: 'Pitch a contrarian business insight or a specific formula you\'ve used with clients' },
      { name: 'How I Built This', host: 'Guy Raz', listeners: '600K+', pitch: 'Tell your founder or practice-building story with a compelling, narrative arc' },
    ],
    authorityMetrics: [
      { metric: 'Case Study Library', benchmark: '3+ detailed, outcome-focused case studies', tip: 'Quantify every result: time saved, revenue generated, cost reduced — numbers are memorable' },
      { metric: 'Speaking Rate', benchmark: 'Paid speaking = confirmed authority tier', tip: 'Even $500/talk validates your expertise — negotiate speaking fees early' },
      { metric: 'Inbound Inquiry Rate', benchmark: '2+ qualified inbound leads/month without cold outreach', tip: 'Track where your inbound leads come from to double down on what\'s working' },
    ],
    tips: [
      'Publish your intellectual property: your frameworks, methodologies, and processes as articles or a book',
      'Build a "proof portfolio" that documents outcomes with specific metrics, not vague testimonials',
      'Speak at your clients\' industry events — being seen as a peer, not a vendor, changes the dynamic',
      'Host your own "State of [Your Niche]" annual report to become the go-to reference source',
    ],
    keyChallenge: 'Consultants face the "who else have you worked with?" paradox. The fastest way to break in is a narrow niche with documented outcomes — specificity > generality.',
  },
  {
    slug: 'real-estate',
    name: 'Real Estate',
    marketSize: '$3.8T US real estate market',
    tagline: 'How to Get Known in Real Estate',
    description: 'Real estate is hyper-local and relationship-driven. Agents and investors who establish genuine expertise in a micro-market become the default referral for that niche.',
    categoryOfOne: 'The [Property Type] Specialist in [Specific Geography] Who Delivers [Unique Value Prop] — e.g., "The Historic Home Specialist in Charleston Who Protects Buyers From Hidden Renovation Costs"',
    podcasts: [
      { name: 'BiggerPockets Real Estate', host: 'David Greene', listeners: '500K+', pitch: 'Share a specific investment strategy or market data insight relevant to current conditions' },
      { name: 'Real Estate Rockstars', host: 'Pat Hiban', listeners: '200K+', pitch: 'Present a unique lead generation or client nurture system with specific metrics' },
      { name: 'The Real Estate Guys Radio', host: 'Robert Helms', listeners: '150K+', pitch: 'Offer expertise on a specific market or investment structure from a macro perspective' },
    ],
    authorityMetrics: [
      { metric: 'Neighborhood Market Reports', benchmark: 'Monthly reports establish you as THE local expert', tip: 'Create a simple monthly market report for your zip code and distribute to 200+ contacts' },
      { metric: 'Google Business Reviews', benchmark: '50+ reviews with 4.8+ rating', tip: 'Systematize review collection with a post-close email sequence — this is your SEO foundation' },
      { metric: 'Social Following in Your Market', benchmark: '2,000+ local followers', tip: 'Hyper-local content (neighborhood tours, market stats) outperforms general real estate content 5x' },
    ],
    tips: [
      'Create a market-specific YouTube or Instagram channel showcasing your neighborhood expertise',
      'Partner with local businesses, contractors, and stagers to build a referral ecosystem',
      'Write a definitive buyer or seller guide for your specific niche and market it on social media',
      'Attend and sponsor local community events — real estate authority is built in the community',
    ],
    keyChallenge: 'Real estate clients choose agents they trust. Your authority comes from demonstrating local market mastery and a track record of outcomes — generic content will not differentiate you.',
  },
];

export function getIndustry(slug: string): IndustryGuide | undefined {
  return industries.find(i => i.slug === slug);
}
