import { Story } from './types';

export const ROUTES = {
  HOME: '/',
  STORIES: '/stories',
  STORY: '/story/:id',
  ABOUT: '/about',
  CONTACT: '/contact',
};

export const STORIES: Story[] = [
  {
    id: '1',
    title: 'Rudranath: Where Silence Speaks',
    location: 'Garhwal Himalayas',
    excerpt: 'The trek was steep, the air thin, but the silence at the top was louder than any city noise I had ever known.',
    image: 'https://picsum.photos/800/600?random=1',
    category: 'Mountains',
    date: 'Oct 12, 2025',
    readTime: '6 min read',
    fullContent: `
      <p>The mist rolled in like a slow tide, swallowing the peaks of Nanda Devi and Trishul. I stood there, breathless not just from the climb, but from the sheer weight of the silence.</p>
      <p>Rudranath is not just a temple; it is a test of patience. The path winds through rhododendron forests that seem to whisper ancient secrets. Every step feels like a shedding of the self.</p>
      <h3>The Ascent</h3>
      <p>We started at dawn. The air was crisp, carrying the scent of pine and damp earth. The locals say that Shiva meditates here in his most reclusive form. As I walked, I understood why.</p>
      <p>There is no distraction here. Only the sound of your own breath and the wind rustling through the bugyals (alpine meadows).</p>
    `
  },
  {
    id: '2',
    title: 'Chandratal: The Moon’s Reflection',
    location: 'Spiti Valley',
    excerpt: 'Under the midnight sky, the lake became a mirror for the cosmos, blurring the line between earth and infinite space.',
    image: 'https://picsum.photos/800/600?random=2',
    category: 'Solitude',
    date: 'Sep 04, 2025',
    readTime: '4 min read',
    fullContent: `
      <p>They call it the Moon Lake. At 4,250 meters, the oxygen is scarce, but the beauty is overwhelming. The water changes color with the sun—turquoise, emerald, and finally, a deep, cosmic indigo.</p>
    `
  },
  {
    id: '3',
    title: 'Walking Alone Through Kashi’s Ghats',
    location: 'Varanasi',
    excerpt: 'In the chaos of life and death, I found a strange stillness sitting on the steps of the Ganges at twilight.',
    image: 'https://picsum.photos/800/600?random=3',
    category: 'Temples',
    date: 'Aug 18, 2025',
    readTime: '8 min read',
    fullContent: `
      <p>Varanasi assaults the senses. The smell of incense and burning wood, the sound of temple bells and chanting, the sight of fire and flowers floating on the dark water.</p>
    `
  },
  {
    id: '4',
    title: 'The Hidden Villages of Zanskar',
    location: 'Ladakh',
    excerpt: 'A winter spent in isolation, learning what it means to truly live with less.',
    image: 'https://picsum.photos/800/600?random=4',
    category: 'Villages',
    date: 'Jul 22, 2025',
    readTime: '10 min read'
  },
  {
    id: '5',
    title: 'Monks of the Mist',
    location: 'Sikkim',
    excerpt: 'Sharing butter tea and silence with the guardians of the mountain monasteries.',
    image: 'https://picsum.photos/800/600?random=5',
    category: 'Temples',
    date: 'Jun 10, 2025',
    readTime: '5 min read'
  },
  {
    id: '6',
    title: 'Solitude in the Thar',
    location: 'Rajasthan',
    excerpt: 'The desert teaches you that emptiness is not nothingness; it is space for the soul to expand.',
    image: 'https://picsum.photos/800/600?random=6',
    category: 'Solitude',
    date: 'May 05, 2025',
    readTime: '7 min read'
  }
];
