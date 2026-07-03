export interface OppositePair {
  word1: string;
  word2: string;
  emoji1: string;
  emoji2: string;
}

export type OppositeAgeGroup = "3-4" | "4-6" | "7-9";

export const OPPOSITES_3_4: OppositePair[] = [
  { word1: "BIG", word2: "SMALL", emoji1: "🐘", emoji2: "🐜" },
  { word1: "HOT", word2: "COLD", emoji1: "🔥", emoji2: "🧊" },
  { word1: "UP", word2: "DOWN", emoji1: "⬆️", emoji2: "⬇️" },
  { word1: "HAPPY", word2: "SAD", emoji1: "😊", emoji2: "😢" },
  { word1: "DAY", word2: "NIGHT", emoji1: "☀️", emoji2: "🌙" },
  { word1: "FAST", word2: "SLOW", emoji1: "🐇", emoji2: "🐢" },
  { word1: "IN", word2: "OUT", emoji1: "📥", emoji2: "📤" },
  { word1: "ON", word2: "OFF", emoji1: "💡", emoji2: "🌑" },
  { word1: "YES", word2: "NO", emoji1: "✅", emoji2: "❌" },
  { word1: "WET", word2: "DRY", emoji1: "💧", emoji2: "🏜️" },
  { word1: "OLD", word2: "NEW", emoji1: "👴", emoji2: "👶" },
  { word1: "OPEN", word2: "SHUT", emoji1: "📖", emoji2: "📕" },
  { word1: "TALL", word2: "SHORT", emoji1: "🦒", emoji2: "🐁" },
  { word1: "GOOD", word2: "BAD", emoji1: "👍", emoji2: "👎" },
  { word1: "FULL", word2: "EMPTY", emoji1: "🥛", emoji2: "🥃" },
  { word1: "HARD", word2: "SOFT", emoji1: "🪨", emoji2: "🧸" },
  { word1: "LOUD", word2: "QUIET", emoji1: "📢", emoji2: "🤫" },
  { word1: "PUSH", word2: "PULL", emoji1: "🫸", emoji2: "🫷" },
  { word1: "STOP", word2: "GO", emoji1: "🛑", emoji2: "🟢" },
  { word1: "SIT", word2: "STAND", emoji1: "🪑", emoji2: "🧍" },
  { word1: "CRY", word2: "LAUGH", emoji1: "😭", emoji2: "😂" },
  { word1: "LONG", word2: "SHORT", emoji1: "📏", emoji2: "📎" },
  { word1: "TOP", word2: "BOTTOM", emoji1: "🔝", emoji2: "⬇️" },
  { word1: "CLEAN", word2: "DIRTY", emoji1: "✨", emoji2: "🪣" },
  { word1: "LIGHT", word2: "DARK", emoji1: "🌞", emoji2: "🌚" },
  { word1: "FRONT", word2: "BACK", emoji1: "👤", emoji2: "🔙" },
  { word1: "OVER", word2: "UNDER", emoji1: "🌈", emoji2: "⛏️" },
  { word1: "COME", word2: "GO", emoji1: "🏃", emoji2: "👋" },
  { word1: "GIVE", word2: "TAKE", emoji1: "🎁", emoji2: "🤲" },
  { word1: "WIN", word2: "LOSE", emoji1: "🏆", emoji2: "😞" },
  { word1: "HIDE", word2: "FIND", emoji1: "🙈", emoji2: "🔍" },
  { word1: "WAKE", word2: "SLEEP", emoji1: "⏰", emoji2: "😴" },
];

export const OPPOSITES_4_6: OppositePair[] = [
  { word1: "HEAVY", word2: "LIGHT", emoji1: "🏋️", emoji2: "🪶" },
  { word1: "WIDE", word2: "NARROW", emoji1: "↔️", emoji2: "📍" },
  { word1: "THICK", word2: "THIN", emoji1: "📚", emoji2: "📄" },
  { word1: "STRONG", word2: "WEAK", emoji1: "💪", emoji2: "🦴" },
  { word1: "SMOOTH", word2: "ROUGH", emoji1: "🧈", emoji2: "🪨" },
  { word1: "SWEET", word2: "SOUR", emoji1: "🍭", emoji2: "🍋" },
  { word1: "SAME", word2: "DIFFERENT", emoji1: "👯", emoji2: "🎭" },
  { word1: "YOUNG", word2: "OLD", emoji1: "👧", emoji2: "👵" },
  { word1: "NEAR", word2: "FAR", emoji1: "🏠", emoji2: "🏔️" },
  { word1: "RICH", word2: "POOR", emoji1: "💰", emoji2: "🪹" },
  { word1: "DEEP", word2: "SHALLOW", emoji1: "🌊", emoji2: "🏖️" },
  { word1: "BRAVE", word2: "SCARED", emoji1: "🦁", emoji2: "🐱" },
  { word1: "SHARP", word2: "DULL", emoji1: "🔪", emoji2: "🥄" },
  { word1: "TIGHT", word2: "LOOSE", emoji1: "🔒", emoji2: "🔓" },
  { word1: "EARLY", word2: "LATE", emoji1: "🌅", emoji2: "🌆" },
  { word1: "REMEMBER", word2: "FORGET", emoji1: "🧠", emoji2: "❓" },
  { word1: "LOVE", word2: "HATE", emoji1: "❤️", emoji2: "💔" },
  { word1: "BUILD", word2: "BREAK", emoji1: "🏗️", emoji2: "💥" },
  { word1: "CATCH", word2: "THROW", emoji1: "🤲", emoji2: "🤾" },
  { word1: "FLOAT", word2: "SINK", emoji1: "🎈", emoji2: "⚓" },
  { word1: "FREEZE", word2: "MELT", emoji1: "❄️", emoji2: "💧" },
  { word1: "TEACH", word2: "LEARN", emoji1: "👩‍🏫", emoji2: "📖" },
  { word1: "BUY", word2: "SELL", emoji1: "🛒", emoji2: "🏷️" },
  { word1: "ASK", word2: "ANSWER", emoji1: "❓", emoji2: "💬" },
  { word1: "BEGIN", word2: "END", emoji1: "🚦", emoji2: "🏁" },
  { word1: "ALWAYS", word2: "NEVER", emoji1: "♾️", emoji2: "🚫" },
  { word1: "POLITE", word2: "RUDE", emoji1: "🤝", emoji2: "😤" },
  { word1: "INSIDE", word2: "OUTSIDE", emoji1: "🏠", emoji2: "🌳" },
  { word1: "ABOVE", word2: "BELOW", emoji1: "☁️", emoji2: "🌍" },
  { word1: "TIDY", word2: "MESSY", emoji1: "🧹", emoji2: "🗑️" },
  { word1: "FRIEND", word2: "ENEMY", emoji1: "🤗", emoji2: "😠" },
  { word1: "AWAKE", word2: "ASLEEP", emoji1: "👀", emoji2: "💤" },
];

export const OPPOSITES_7_9: OppositePair[] = [
  { word1: "ANCIENT", word2: "MODERN", emoji1: "🏛️", emoji2: "🏙️" },
  { word1: "GENEROUS", word2: "SELFISH", emoji1: "🎁", emoji2: "🙅" },
  { word1: "PATIENT", word2: "IMPATIENT", emoji1: "🧘", emoji2: "😤" },
  { word1: "COURAGE", word2: "COWARDICE", emoji1: "🦸", emoji2: "🫣" },
  { word1: "VISIBLE", word2: "INVISIBLE", emoji1: "👁️", emoji2: "👻" },
  { word1: "POLITE", word2: "IMPOLITE", emoji1: "🎩", emoji2: "😡" },
  { word1: "INNOCENT", word2: "GUILTY", emoji1: "😇", emoji2: "😈" },
  { word1: "EXPAND", word2: "SHRINK", emoji1: "🔭", emoji2: "🔬" },
  { word1: "VICTORY", word2: "DEFEAT", emoji1: "🏆", emoji2: "😔" },
  { word1: "CREATE", word2: "DESTROY", emoji1: "🎨", emoji2: "💣" },
  { word1: "FLEXIBLE", word2: "RIGID", emoji1: "🤸", emoji2: "🧱" },
  { word1: "CAPTURE", word2: "RELEASE", emoji1: "🪤", emoji2: "🕊️" },
  { word1: "NATURAL", word2: "ARTIFICIAL", emoji1: "🌿", emoji2: "🤖" },
  { word1: "MAXIMUM", word2: "MINIMUM", emoji1: "📈", emoji2: "📉" },
  { word1: "PERMANENT", word2: "TEMPORARY", emoji1: "🏔️", emoji2: "⏳" },
  { word1: "FAMILIAR", word2: "STRANGE", emoji1: "🏠", emoji2: "👽" },
  { word1: "ORDINARY", word2: "EXTRAORDINARY", emoji1: "📎", emoji2: "✨" },
  { word1: "HONEST", word2: "DISHONEST", emoji1: "🤞", emoji2: "🤥" },
  { word1: "COMPLEX", word2: "SIMPLE", emoji1: "🧩", emoji2: "⭕" },
  { word1: "SCATTER", word2: "GATHER", emoji1: "💫", emoji2: "🧲" },
  { word1: "INCLUDE", word2: "EXCLUDE", emoji1: "🤝", emoji2: "🚷" },
  { word1: "ACCEPT", word2: "REJECT", emoji1: "✅", emoji2: "🚫" },
  { word1: "INTERIOR", word2: "EXTERIOR", emoji1: "🛋️", emoji2: "🏡" },
  { word1: "SERIOUS", word2: "PLAYFUL", emoji1: "🧐", emoji2: "🤪" },
  { word1: "PROFIT", word2: "LOSS", emoji1: "💵", emoji2: "📉" },
  { word1: "URBAN", word2: "RURAL", emoji1: "🌆", emoji2: "🌾" },
  { word1: "CONFIDENT", word2: "NERVOUS", emoji1: "😎", emoji2: "😰" },
  { word1: "GRATEFUL", word2: "UNGRATEFUL", emoji1: "🙏", emoji2: "😒" },
  { word1: "WILD", word2: "TAME", emoji1: "🐯", emoji2: "🐱" },
  { word1: "BORROW", word2: "LEND", emoji1: "🤲", emoji2: "🫴" },
  { word1: "ARRIVAL", word2: "DEPARTURE", emoji1: "🛬", emoji2: "🛫" },
  { word1: "SUCCESS", word2: "FAILURE", emoji1: "🌟", emoji2: "💨" },
];

export function getOpposites(ageGroup: OppositeAgeGroup): OppositePair[] {
  switch (ageGroup) {
    case "3-4": return OPPOSITES_3_4;
    case "4-6": return OPPOSITES_4_6;
    case "7-9": return OPPOSITES_7_9;
  }
}
