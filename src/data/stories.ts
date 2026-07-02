export type AgeGroup = "3-4" | "4-6" | "7-9";

export type FontFamily = "fredoka" | "comic-neue" | "bubblegum" | "patrick-hand" | "nunito";

export const FONT_OPTIONS: { key: FontFamily; label: string; css: string }[] = [
  { key: "fredoka", label: "Fredoka", css: "var(--font-fredoka), sans-serif" },
  { key: "comic-neue", label: "Comic Neue", css: "var(--font-comic-neue), cursive" },
  { key: "bubblegum", label: "Bubblegum", css: "var(--font-bubblegum), cursive" },
  { key: "patrick-hand", label: "Patrick Hand", css: "var(--font-patrick-hand), cursive" },
  { key: "nunito", label: "Nunito", css: "var(--font-nunito), sans-serif" },
];

export interface StoryIllustration {
  id: string;
  label: string;
  svg: string;
}

export const ILLUSTRATIONS: StoryIllustration[] = [
  {
    id: "sun",
    label: "Sun",
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="22" fill="#FFD700"/><g stroke="#FFD700" stroke-width="4" stroke-linecap="round"><line x1="50" y1="8" x2="50" y2="20"/><line x1="50" y1="80" x2="50" y2="92"/><line x1="8" y1="50" x2="20" y2="50"/><line x1="80" y1="50" x2="92" y2="50"/><line x1="20" y1="20" x2="28" y2="28"/><line x1="72" y1="72" x2="80" y2="80"/><line x1="20" y1="80" x2="28" y2="72"/><line x1="72" y1="28" x2="80" y2="20"/></g><circle cx="44" cy="46" r="2.5" fill="#B8860B"/><circle cx="56" cy="46" r="2.5" fill="#B8860B"/><path d="M43 56 Q50 62 57 56" stroke="#B8860B" stroke-width="2" fill="none" stroke-linecap="round"/></svg>`,
  },
  {
    id: "moon",
    label: "Moon",
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M60 15 A35 35 0 1 0 60 85 A28 28 0 1 1 60 15Z" fill="#F5E6A3"/><circle cx="38" cy="42" r="2" fill="#D4C36A"/><circle cx="48" cy="55" r="3" fill="#D4C36A"/><circle cx="32" cy="60" r="1.5" fill="#D4C36A"/></svg>`,
  },
  {
    id: "star",
    label: "Star",
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><polygon points="50,10 61,38 92,38 67,56 76,85 50,68 24,85 33,56 8,38 39,38" fill="#FFD700" stroke="#FFA500" stroke-width="2"/><circle cx="44" cy="46" r="2.5" fill="#B8860B"/><circle cx="56" cy="46" r="2.5" fill="#B8860B"/><path d="M44 54 Q50 59 56 54" stroke="#B8860B" stroke-width="2" fill="none" stroke-linecap="round"/></svg>`,
  },
  {
    id: "rainbow",
    label: "Rainbow",
    svg: `<svg viewBox="0 0 120 70" xmlns="http://www.w3.org/2000/svg"><path d="M10 65 A50 50 0 0 1 110 65" stroke="#FF0000" stroke-width="6" fill="none"/><path d="M16 65 A44 44 0 0 1 104 65" stroke="#FF8C00" stroke-width="6" fill="none"/><path d="M22 65 A38 38 0 0 1 98 65" stroke="#FFD700" stroke-width="6" fill="none"/><path d="M28 65 A32 32 0 0 1 92 65" stroke="#32CD32" stroke-width="6" fill="none"/><path d="M34 65 A26 26 0 0 1 86 65" stroke="#4488FF" stroke-width="6" fill="none"/><path d="M40 65 A20 20 0 0 1 80 65" stroke="#9944CC" stroke-width="6" fill="none"/></svg>`,
  },
  {
    id: "tree",
    label: "Tree",
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="43" y="60" width="14" height="30" rx="3" fill="#8B6914"/><polygon points="50,10 20,45 35,45 15,65 85,65 65,45 80,45" fill="#2E8B57"/><circle cx="35" cy="50" r="3" fill="#FF4444"/><circle cx="60" cy="40" r="3" fill="#FF4444"/><circle cx="50" cy="55" r="3" fill="#FF4444"/></svg>`,
  },
  {
    id: "flower",
    label: "Flower",
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="47" y="55" width="6" height="35" rx="3" fill="#2E8B57"/><ellipse cx="35" cy="82" rx="14" ry="5" fill="#2E8B57" opacity="0.5"/><circle cx="50" cy="38" r="10" fill="#FFD700"/><circle cx="50" cy="20" r="10" fill="#FF69B4"/><circle cx="38" cy="26" r="10" fill="#FF69B4"/><circle cx="62" cy="26" r="10" fill="#FF69B4"/><circle cx="38" cy="44" r="10" fill="#FF69B4"/><circle cx="62" cy="44" r="10" fill="#FF69B4"/><circle cx="50" cy="50" r="10" fill="#FF69B4"/></svg>`,
  },
  {
    id: "butterfly",
    label: "Butterfly",
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><ellipse cx="30" cy="38" rx="20" ry="16" fill="#FF69B4" opacity="0.8"/><ellipse cx="70" cy="38" rx="20" ry="16" fill="#FF69B4" opacity="0.8"/><ellipse cx="32" cy="60" rx="15" ry="12" fill="#A855F7" opacity="0.8"/><ellipse cx="68" cy="60" rx="15" ry="12" fill="#A855F7" opacity="0.8"/><ellipse cx="50" cy="50" rx="4" ry="18" fill="#333"/><circle cx="30" cy="38" r="5" fill="#FFD700" opacity="0.6"/><circle cx="70" cy="38" r="5" fill="#FFD700" opacity="0.6"/><path d="M46 32 Q44 20 40 15" stroke="#333" stroke-width="2" fill="none"/><path d="M54 32 Q56 20 60 15" stroke="#333" stroke-width="2" fill="none"/><circle cx="40" cy="14" r="2.5" fill="#333"/><circle cx="60" cy="14" r="2.5" fill="#333"/></svg>`,
  },
  {
    id: "cloud",
    label: "Cloud",
    svg: `<svg viewBox="0 0 120 70" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="40" r="22" fill="#E8F4FD"/><circle cx="65" cy="35" r="26" fill="#E8F4FD"/><circle cx="85" cy="42" r="18" fill="#E8F4FD"/><circle cx="25" cy="45" r="15" fill="#E8F4FD"/><rect x="20" y="40" width="72" height="22" rx="10" fill="#E8F4FD"/></svg>`,
  },
  {
    id: "cat",
    label: "Cat",
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><ellipse cx="50" cy="62" rx="24" ry="20" fill="#FF8C42"/><circle cx="50" cy="42" r="20" fill="#FF8C42"/><polygon points="32,28 30,10 42,24" fill="#FF8C42"/><polygon points="68,28 70,10 58,24" fill="#FF8C42"/><polygon points="32,28 33,12 42,24" fill="#FFB88C"/><polygon points="68,28 67,12 58,24" fill="#FFB88C"/><ellipse cx="42" cy="40" rx="4" ry="5" fill="#fff"/><ellipse cx="58" cy="40" rx="4" ry="5" fill="#fff"/><ellipse cx="43" cy="41" rx="2" ry="3.5" fill="#333"/><ellipse cx="57" cy="41" rx="2" ry="3.5" fill="#333"/><ellipse cx="50" cy="48" rx="3" ry="2" fill="#FF69B4"/><line x1="25" y1="44" x2="38" y2="46" stroke="#FF8C42" stroke-width="1.5"/><line x1="25" y1="48" x2="38" y2="48" stroke="#FF8C42" stroke-width="1.5"/><line x1="62" y1="46" x2="75" y2="44" stroke="#FF8C42" stroke-width="1.5"/><line x1="62" y1="48" x2="75" y2="48" stroke="#FF8C42" stroke-width="1.5"/><path d="M70 75 Q80 70 85 80" stroke="#FF8C42" stroke-width="5" fill="none" stroke-linecap="round"/></svg>`,
  },
  {
    id: "dog",
    label: "Dog",
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><ellipse cx="50" cy="62" rx="22" ry="20" fill="#C4A36B"/><circle cx="50" cy="42" r="20" fill="#C4A36B"/><ellipse cx="30" cy="30" rx="10" ry="15" fill="#A0845C" transform="rotate(-15 30 30)"/><ellipse cx="70" cy="30" rx="10" ry="15" fill="#A0845C" transform="rotate(15 70 30)"/><circle cx="42" cy="40" r="4" fill="#fff"/><circle cx="58" cy="40" r="4" fill="#fff"/><circle cx="43" cy="41" r="2.5" fill="#333"/><circle cx="57" cy="41" r="2.5" fill="#333"/><ellipse cx="50" cy="50" rx="6" ry="4" fill="#333"/><path d="M44 56 Q50 61 56 56" stroke="#333" stroke-width="1.5" fill="none"/><ellipse cx="50" cy="54" rx="3" ry="2" fill="#FF6B6B"/><path d="M68 72 Q75 68 78 76 Q82 84 74 82" stroke="#C4A36B" stroke-width="5" fill="none" stroke-linecap="round"/></svg>`,
  },
  {
    id: "heart",
    label: "Heart",
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 85 L15 50 A20 20 0 0 1 50 30 A20 20 0 0 1 85 50 Z" fill="#FF4757"/><ellipse cx="36" cy="42" rx="6" ry="5" fill="rgba(255,255,255,0.3)"/></svg>`,
  },
  {
    id: "fish",
    label: "Fish",
    svg: `<svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg"><ellipse cx="55" cy="40" rx="35" ry="22" fill="#4488FF"/><polygon points="15,40 0,22 0,58" fill="#4488FF"/><circle cx="70" cy="35" r="5" fill="#fff"/><circle cx="72" cy="35" r="2.5" fill="#333"/><path d="M40 45 Q55 55 75 44" stroke="#3366CC" stroke-width="1.5" fill="none"/><path d="M38 35 Q55 28 72 35" stroke="#66AAFF" stroke-width="1.5" fill="none"/><polygon points="52,20 58,10 62,22" fill="#FFD700"/></svg>`,
  },
  {
    id: "house",
    label: "House",
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="45" width="60" height="45" rx="3" fill="#FF6B6B"/><polygon points="50,12 10,48 90,48" fill="#CC4444"/><rect x="40" y="62" width="18" height="28" rx="2" fill="#8B6914"/><circle cx="54" cy="78" r="2" fill="#FFD700"/><rect x="26" y="55" width="12" height="12" rx="2" fill="#87CEEB"/><rect x="62" y="55" width="12" height="12" rx="2" fill="#87CEEB"/><line x1="32" y1="55" x2="32" y2="67" stroke="#fff" stroke-width="1"/><line x1="26" y1="61" x2="38" y2="61" stroke="#fff" stroke-width="1"/><line x1="68" y1="55" x2="68" y2="67" stroke="#fff" stroke-width="1"/><line x1="62" y1="61" x2="74" y2="61" stroke="#fff" stroke-width="1"/></svg>`,
  },
  {
    id: "rocket",
    label: "Rocket",
    svg: `<svg viewBox="0 0 80 120" xmlns="http://www.w3.org/2000/svg"><ellipse cx="40" cy="55" rx="16" ry="40" fill="#E8E8E8"/><ellipse cx="40" cy="30" rx="12" ry="20" fill="#FF4757"/><polygon points="24,80 12,100 28,88" fill="#4488FF"/><polygon points="56,80 68,100 52,88" fill="#4488FF"/><circle cx="40" cy="55" r="6" fill="#87CEEB"/><circle cx="40" cy="55" r="3" fill="#4488FF"/><ellipse cx="40" cy="98" rx="8" ry="6" fill="#FF8C00"/><ellipse cx="40" cy="102" rx="5" ry="5" fill="#FFD700"/></svg>`,
  },
  {
    id: "bird",
    label: "Bird",
    svg: `<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg"><ellipse cx="50" cy="42" rx="25" ry="18" fill="#4FC3F7"/><circle cx="50" cy="30" r="14" fill="#4FC3F7"/><circle cx="56" cy="27" r="3.5" fill="#fff"/><circle cx="57" cy="27" r="2" fill="#333"/><polygon points="64,30 80,26 64,34" fill="#FF8C00"/><path d="M28 38 Q10 25 18 50" stroke="#4FC3F7" stroke-width="6" fill="none" stroke-linecap="round"/><polygon points="40,58 50,70 60,58" fill="#FF8C00"/><ellipse cx="45" cy="42" rx="8" ry="5" fill="#81D4FA"/></svg>`,
  },
  {
    id: "frog",
    label: "Frog",
    svg: `<svg viewBox="0 0 100 90" xmlns="http://www.w3.org/2000/svg"><ellipse cx="50" cy="55" rx="30" ry="25" fill="#2E8B57"/><circle cx="35" cy="30" r="12" fill="#2E8B57"/><circle cx="65" cy="30" r="12" fill="#2E8B57"/><circle cx="35" cy="28" r="6" fill="#fff"/><circle cx="65" cy="28" r="6" fill="#fff"/><circle cx="36" cy="28" r="3" fill="#333"/><circle cx="66" cy="28" r="3" fill="#333"/><path d="M38 55 Q50 65 62 55" stroke="#1B5E20" stroke-width="2.5" fill="none"/><circle cx="42" cy="48" r="4" fill="#FF69B4" opacity="0.4"/><circle cx="58" cy="48" r="4" fill="#FF69B4" opacity="0.4"/></svg>`,
  },
];

export interface Story {
  id: string;
  title: string;
  body: string;
  ageGroup: AgeGroup;
  fontFamily: FontFamily;
  color: string;
  illustrations: string[];
}

export const DEFAULT_STORIES: Story[] = [
  // Age 3-4
  {
    id: "bunny-hop",
    title: "Bunny's Big Hop",
    body: "Little Bunny wanted to hop.\n\nHop, hop, hop!\n\nShe hopped over a flower.\nShe hopped over a rock.\nShe hopped all the way home.\n\n\"I did it!\" said Bunny.\n\nMommy gave her a big hug.\n\n\"You are the best hopper!\" said Mommy.",
    ageGroup: "3-4",
    fontFamily: "bubblegum",
    color: "#FF69B4",
    illustrations: ["flower", "heart"],
  },
  {
    id: "sunny-day",
    title: "The Sunny Day",
    body: "The sun came up.\n\n\"Hello!\" said the sun.\n\nThe bird sang a song.\nThe cat sat on a mat.\nThe dog ran in the park.\n\nThey all played together.\n\nThen the moon came out.\n\n\"Goodnight!\" said everyone.\n\nThe stars twinkled. Time for bed!",
    ageGroup: "3-4",
    fontFamily: "fredoka",
    color: "#FFD700",
    illustrations: ["sun", "cat", "bird", "moon"],
  },
  // Age 4-6
  {
    id: "rainbow-fish",
    title: "The Rainbow Garden",
    body: "Lily found a tiny seed in the garden.\n\n\"What will you grow into?\" she asked.\n\nShe planted the seed and watered it every day. She sang to it too.\n\nOne morning, something amazing happened! A flower grew up tall and bright. But it was not just any flower.\n\nIt had petals of every color — red, orange, yellow, green, blue, and purple!\n\n\"A rainbow flower!\" Lily shouted.\n\nAll the butterflies in the garden came to visit. They danced around the beautiful flower.\n\n\"Thank you for being so patient,\" whispered the flower.\n\nLily smiled. Good things come to those who wait!",
    ageGroup: "4-6",
    fontFamily: "comic-neue",
    color: "#2ED573",
    illustrations: ["rainbow", "flower", "butterfly"],
  },
  {
    id: "brave-fish",
    title: "Finn the Brave Fish",
    body: "Finn was a little blue fish who lived in a big pond.\n\nAll the other fish swam to the deep end, but Finn was scared.\n\n\"What if it is too dark?\" he worried.\n\nOne day, his friend Goldie got lost in the deep water.\n\n\"Help!\" called Goldie.\n\nFinn took a deep breath. He swam past the lily pads. He swam past the big rocks. The water got darker, but he kept going.\n\n\"Goldie! I am here!\" said Finn.\n\nHe found Goldie behind a shell and led her back to the sunny side.\n\n\"You are so brave!\" said Goldie.\n\nFinn smiled. He was not scared anymore. Sometimes being brave means helping a friend, even when you are afraid.",
    ageGroup: "4-6",
    fontFamily: "patrick-hand",
    color: "#4488FF",
    illustrations: ["fish", "star"],
  },
  // Age 7-9
  {
    id: "sky-rocket",
    title: "Maya and the Paper Rocket",
    body: "Maya loved building things. She built towers with blocks, bridges with sticks, and boats with paper.\n\nBut what she really wanted to build was a rocket.\n\n\"Rockets are too hard,\" said her brother Tom.\n\n\"Nothing is too hard if you keep trying,\" said Maya.\n\nShe used cardboard boxes, tin foil, and lots of tape. The first rocket fell apart. The second one looked funny. But the third one was perfect!\n\nShe painted it red and silver with yellow flames on the sides. She even made a little window with plastic wrap.\n\n\"That is amazing!\" said Tom, his eyes wide.\n\nMaya put her toy astronaut inside. \"Ready for launch!\" she announced.\n\nThat night, she dreamed of real rockets flying through the stars. And she knew that one day, she would build something that really could fly.\n\nBecause the first step to doing something great is believing you can.",
    ageGroup: "7-9",
    fontFamily: "nunito",
    color: "#A855F7",
    illustrations: ["rocket", "star", "moon"],
  },
  {
    id: "forest-friends",
    title: "The Secret Treehouse Club",
    body: "Sam, Mia, and Jake found an old treehouse in the woods behind their school. It had a broken ladder and dusty windows, but they saw something special in it.\n\n\"Let us fix it up!\" said Mia.\n\nEvery day after school, they worked together. Sam was good at hammering nails. Mia painted the walls bright green. Jake brought a rug and some cushions from his garage.\n\nThey made three rules for their club:\n1. Always be kind to each other.\n2. Everyone gets a turn to talk.\n3. Help anyone who needs it.\n\nOne rainy afternoon, they heard a meow from below. A wet kitten shivered under the tree.\n\n\"Rule number three!\" said Jake.\n\nThey brought the kitten inside and dried it with Jake's scarf. They named her Biscuit, and she became the fourth member of the club.\n\nThe treehouse was not fancy, but it was theirs. And the best part was not the treehouse at all — it was the friends inside it.",
    ageGroup: "7-9",
    fontFamily: "fredoka",
    color: "#2E8B57",
    illustrations: ["tree", "cat", "cloud", "heart"],
  },
];
