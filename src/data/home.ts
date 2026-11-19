/**
 * The home page's words, section by section, in the order
 * src/pages/index.astro shows them. The words are the owner's own, from the
 * business's previous website (biomemechanics.com). Inline HTML (<strong>,
 * <em>, <a>) is allowed in paragraph strings.
 *
 * Photographs go in src/assets/ and are imported here, so the build sizes
 * them and the tests can check them.
 */
import type { ImageMetadata } from 'astro';
import fortMason1 from '../assets/fort-mason-1.jpg';
import fortMason2 from '../assets/fort-mason-2.jpg';
import fortMason3 from '../assets/fort-mason-3.jpg';
import fortMason4 from '../assets/fort-mason-4.jpg';
import establishedGarden1 from '../assets/established-garden-1.jpg';
import establishedGarden2 from '../assets/established-garden-2.jpg';
import retainingWall from '../assets/retaining-wall.jpg';
import greenWaste from '../assets/green-waste.jpg';
import sheetMulchApplied from '../assets/sheet-mulch-applied.jpg';
import sheetMulchStep2 from '../assets/sheet-mulch-step-2.jpg';
import sheetMulchStep3 from '../assets/sheet-mulch-step-3.jpg';
import sheetMulchComplete from '../assets/sheet-mulch-complete.jpg';
import stoneBorder from '../assets/stone-border.jpg';
import weededBed from '../assets/weeded-bed.jpg';
import jeffreyAndSoba from '../assets/jeffrey-and-soba.jpg';

export const HERO = {
  /** A short line above the headline, or empty for none. */
  eyebrow: 'Maintenance gardening · Northern San Francisco Bay Area',
  headline: 'A garden you’ll love coming home to.',
  subheadline:
    'BiomeMechanics is a maintenance gardening services organization serving the Northern San Francisco bay area, encompassing the city of San Francisco, southern Marin county, northern Alameda county and western, bay-side Contra Costa county.',
  /** One line under every button, or empty: what happens next, a guarantee, a limit. */
  note: 'Call or email to book an initial consultation.',
  /** A photograph beside the words, or leave both out for words alone. */
  image: fortMason3 as ImageMetadata | undefined,
  alt: 'A tiered garden at Fort Mason, Black Point, with pink and white flowers spilling over a retaining wall',
};

/** The track record under the hero's button: up to four short facts. An empty list hides the row. */
export const PROOF: { value: string; label: string }[] = [];

export const INTRO = {
  title: 'Welcome',
  paragraphs: [
    'We believe that soil health is the foundation of a great garden. Soil health supports a robust living community of fungal, bacterial and invertebrate communities that enhance plant health, providing habitat for birds and other pollinators, supporting a web of life that enhances the quality of our own lives.',
    'We are focused on soft-scaping services (weeding, pruning, planting, sheet mulching and similar services). We delight in native and habitat garden work, though we aren’t snooty about pure ornamental and mixed native/ornamental garden work.',
  ],
};

export const SERVICES = {
  title: 'Services',
  intro: 'Call or email to book an initial consultation.',
  items: [
    {
      title: 'Initial Consultation',
      image: establishedGarden1,
      alt: 'A lush established garden under maintenance by BiomeMechanics',
      paragraphs: [
        'Book an initial consultation with BiomeMechanics and kickstart your gardening journey. We’ll get to know each other, understand your goals, site conditions, and existing plantings, and provide you with relevant background on our services. Together, we’ll come up with an initial engagement plan tailored just for you.',
      ],
      note: '',
    },
    {
      title: 'Garden Maintenance',
      image: weededBed,
      alt: 'A newly weeded garden bed with some extant native and ornamental plantings, in dappled light',
      paragraphs: [
        'Let the professionals at BiomeMechanics take care of all your garden maintenance needs. From weeding and pruning to hedge and string trimming, our team will ensure your garden stays in top shape. We also offer irrigation system evaluation and tune-up, all tailored to your specific needs and desires. Schedule our services based on your garden maintenance requirements and enjoy a beautiful, well-kept garden without the hassle.',
      ],
      note: 'Three hour minimum engagement per visit',
    },
    {
      title: 'Green Waste Disposal',
      image: greenWaste,
      alt: 'Large piles of green waste turning into compost at a composting yard',
      paragraphs: [
        'Trust BiomeMechanics for responsible, professional green waste disposal services. We handle yard wastes that exceed the scale of curb-side municipal green-waste pickups, ensuring that they are transformed into rich compost. Our costs are based on labor rates and relevant City/County green waste tipping fees, billed at cost. Let us help you keep your yard looking its best while also contributing to a sustainable environment.',
      ],
      note: '',
    },
  ],
};

export const PORTFOLIO = {
  title: 'Portfolio',
  intro: 'Welcome to my portfolio. Here you’ll find a selection of my work.',
  /** Each photograph with its alt text and, optionally, a caption shown under it. */
  items: [
    {
      image: retainingWall,
      alt: 'A weathered retaining wall softened by trailing native plants above and Coral Bells at the corner below',
      caption: 'Transforming a large mass of weathered retaining wall with some trailing native plantings (Silvery Beachweed and Bolander’s Phacelia) above, and making the corner pop with some Coral Bells below.',
    },
    { image: establishedGarden2, alt: 'A lush established garden under maintenance, with ferns, shrubs and a lawn', caption: 'A lush established garden under maintenance.' },
    { image: weededBed, alt: 'A newly weeded garden bed with some extant native and ornamental plantings, in dappled light', caption: 'A newly weeded garden bed with some extant native and ornamental plantings, in dappled light.' },
    { image: sheetMulchApplied, alt: 'A front yard covered in freshly applied fir-bark sheet mulch', caption: 'Sheet mulching freshly applied.' },
    { image: sheetMulchStep2, alt: 'A sheet-mulched front yard being replanted with small plants', caption: 'Sheet mulching step 2: replanting.' },
    { image: sheetMulchStep3, alt: 'A sheet-mulched bed by the sidewalk, with the stone border lifted and ready to go back', caption: 'Preparing to reinstall the stone border: sheet mulching step 3.' },
    { image: stoneBorder, alt: 'The stone border reassembled along the sidewalk edge of a mulched bed', caption: 'The stone border reassembled along the sidewalk edge.' },
    {
      image: sheetMulchComplete,
      alt: 'A completed sheet mulch project: a fir-bark mulched yard replanted with small bushes and sub-shrubs',
      caption: 'A completed sheet mulch project. The fir-bark mulch covered yard is replanted with several small bushes and sub-shrubs, with fresh growth starting on everything.',
    },
    { image: fortMason1, alt: 'Blue, orange and yellow wildflowers in the tiered garden at Fort Mason, Black Point', caption: 'A tiered garden at Fort Mason, Black Point.' },
    { image: fortMason2, alt: 'Pink and yellow flowers among grasses in the tiered garden at Fort Mason, Black Point', caption: 'A tiered garden at Fort Mason, Black Point.' },
    { image: fortMason4, alt: 'A path between flowering terraces at Fort Mason, Black Point, with the bay beyond', caption: 'A tiered garden at Fort Mason, Black Point.' },
  ],
};

export const ABOUT = {
  title: 'My name is Jeffrey',
  image: jeffreyAndSoba,
  alt: 'BiomeMechanics gardener and founder, Jeffrey, with his amiable sidekick, Soba',
  /** A line under the photograph, or empty. */
  caption: 'Jeffrey, with his amiable sidekick, Soba',
  paragraphs: [
    'I started BiomeMechanics to provide maintenance gardening services in the San Francisco Bay area. A constant student of horticulture, natural history, and the biodiversity of our Bay Area home, I specialize in building garden health from the soil, mycorrhizal and invertebrate communities upwards through pollinator communities and ultimately to our human physical and mental health.',
  ],
  /** A link under the paragraphs, or an empty label for none. */
  link: { label: 'Read the blog', href: '/blog' },
};

export const CONTACT_SECTION = {
  title: 'Get in touch',
  lead: 'Call or email to book an initial consultation.',
};
