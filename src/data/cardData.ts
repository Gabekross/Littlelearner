export interface CardItem {
  word: string;
  emoji: string;
  say: string;
  image?: string;
}

export const WORDS: CardItem[] = [
  { word: "AN", emoji: "🍎", say: "an" },
  { word: "TO", emoji: "👆", say: "to" },
  { word: "UP", emoji: "⬆️", say: "up" },
  { word: "IN", emoji: "🚪", say: "in" },
  { word: "WE", emoji: "👫", say: "we" },
  { word: "ON", emoji: "💡", say: "on" },
  { word: "IT", emoji: "⭐", say: "it" },
  { word: "IS", emoji: "✅", say: "is" },
  { word: "AT", emoji: "📍", say: "at" },
  { word: "BE", emoji: "🐝", say: "be" },
  { word: "DO", emoji: "🎯", say: "do" },
  { word: "GO", emoji: "🚀", say: "go" },
  { word: "HE", emoji: "👦", say: "he" },
  { word: "ME", emoji: "🙋", say: "me" },
  { word: "MY", emoji: "💛", say: "my" },
  { word: "NO", emoji: "🚫", say: "no" },
  { word: "OF", emoji: "📚", say: "of" },
  { word: "OR", emoji: "🤔", say: "or" },
  { word: "SO", emoji: "✨", say: "so" },
  { word: "US", emoji: "🤝", say: "us" },
  { word: "IF", emoji: "🌟", say: "if" },
  { word: "BY", emoji: "👋", say: "by" },
  { word: "AS", emoji: "🎈", say: "as" },
  { word: "AM", emoji: "🙂", say: "am" },
];

const letterEmojis = [
  "🍎", "🐝", "🐱", "🐶", "🐘", "🐸", "🦒", "🏠", "🍦", "🃏",
  "🦘", "🦁", "🌙", "🌰", "🐙", "🐧", "👑", "🌈", "⭐", "🌲",
  "☂️", "🎻", "🌊", "🎸", "🪀", "🦓",
];

export const LETTERS: CardItem[] = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  .split("")
  .map((l, i) => ({
    word: l,
    emoji: letterEmojis[i],
    say: l.toLowerCase(),
  }));

export const NUMBERS: CardItem[] = [
  { word: "1", emoji: "🍭", say: "one" },
  { word: "2", emoji: "🐣", say: "two" },
  { word: "3", emoji: "🌸", say: "three" },
  { word: "4", emoji: "🦋", say: "four" },
  { word: "5", emoji: "⭐", say: "five" },
  { word: "6", emoji: "🍓", say: "six" },
  { word: "7", emoji: "🌈", say: "seven" },
  { word: "8", emoji: "🐙", say: "eight" },
  { word: "9", emoji: "🎈", say: "nine" },
  { word: "10", emoji: "🎉", say: "ten" },
];

export const NUMBERS_BIG: CardItem[] = [
  { word: "11", emoji: "🎪", say: "eleven" },
  { word: "12", emoji: "🕛", say: "twelve" },
  { word: "13", emoji: "🐾", say: "thirteen" },
  { word: "14", emoji: "🎵", say: "fourteen" },
  { word: "15", emoji: "🏀", say: "fifteen" },
  { word: "16", emoji: "🦄", say: "sixteen" },
  { word: "17", emoji: "🌻", say: "seventeen" },
  { word: "18", emoji: "🎨", say: "eighteen" },
  { word: "19", emoji: "🚂", say: "nineteen" },
  { word: "20", emoji: "🎂", say: "twenty" },
];

export const FRUITS: CardItem[] = [
  { word: "APPLE", emoji: "🍎", say: "apple", image: "/fruits/apple.jpg" },
  { word: "BANANA", emoji: "🍌", say: "banana", image: "/fruits/banana.jpg" },
  { word: "ORANGE", emoji: "🍊", say: "orange", image: "/fruits/orange.jpg" },
  { word: "GRAPE", emoji: "🍇", say: "grape", image: "/fruits/grape.jpg" },
  { word: "STRAWBERRY", emoji: "🍓", say: "strawberry", image: "/fruits/strawberry.jpg" },
  { word: "WATERMELON", emoji: "🍉", say: "watermelon", image: "/fruits/watermelon.jpg" },
  { word: "PEACH", emoji: "🍑", say: "peach", image: "/fruits/peach.jpg" },
  { word: "PEAR", emoji: "🍐", say: "pear", image: "/fruits/pear.jpg" },
  { word: "CHERRY", emoji: "🍒", say: "cherry", image: "/fruits/cherry.jpg" },
  { word: "MANGO", emoji: "🥭", say: "mango", image: "/fruits/mango.jpg" },
  { word: "PINEAPPLE", emoji: "🍍", say: "pineapple", image: "/fruits/pineapple.jpg" },
  { word: "BLUEBERRY", emoji: "🫐", say: "blueberry", image: "/fruits/blueberry.jpg" },
  { word: "LEMON", emoji: "🍋", say: "lemon", image: "/fruits/lemon.jpg" },
  { word: "KIWI", emoji: "🥝", say: "kiwi", image: "/fruits/kiwi.jpg" },
  { word: "COCONUT", emoji: "🥥", say: "coconut", image: "/fruits/coconut.jpg" },
  { word: "AVOCADO", emoji: "🥑", say: "avocado", image: "/fruits/avocado.jpg" },
];

export const WORDS3: CardItem[] = [
  { word: "CAT", emoji: "🐱", say: "cat" },
  { word: "DOG", emoji: "🐶", say: "dog" },
  { word: "SUN", emoji: "☀️", say: "sun" },
  { word: "MOM", emoji: "👩", say: "mom" },
  { word: "DAD", emoji: "👨", say: "dad" },
  { word: "BIG", emoji: "🐘", say: "big" },
  { word: "RUN", emoji: "🏃", say: "run" },
  { word: "RED", emoji: "🔴", say: "red" },
  { word: "BUS", emoji: "🚌", say: "bus" },
  { word: "CUP", emoji: "🥤", say: "cup" },
  { word: "HAT", emoji: "🎩", say: "hat" },
  { word: "PIG", emoji: "🐷", say: "pig" },
  { word: "BED", emoji: "🛏️", say: "bed" },
  { word: "FUN", emoji: "🎉", say: "fun" },
  { word: "HOP", emoji: "🐰", say: "hop" },
  { word: "MAP", emoji: "🗺️", say: "map" },
  { word: "NET", emoji: "🥅", say: "net" },
  { word: "BOX", emoji: "📦", say: "box" },
  { word: "FLY", emoji: "🪰", say: "fly" },
  { word: "COW", emoji: "🐄", say: "cow" },
  { word: "EGG", emoji: "🥚", say: "egg" },
  { word: "JAM", emoji: "🍓", say: "jam" },
  { word: "HUG", emoji: "🤗", say: "hug" },
  { word: "TOP", emoji: "🔝", say: "top" },
  { word: "PEN", emoji: "🖊️", say: "pen" },
  { word: "BAT", emoji: "🦇", say: "bat" },
  { word: "ANT", emoji: "🐜", say: "ant" },
  { word: "OWL", emoji: "🦉", say: "owl" },
  { word: "VAN", emoji: "🚐", say: "van" },
  { word: "ZOO", emoji: "🦁", say: "zoo" },
];

export type Mode = "words" | "words3" | "letters" | "numbers" | "numbers2" | "fruits";

export function getDataForMode(mode: Mode): CardItem[] {
  switch (mode) {
    case "words":
      return WORDS;
    case "words3":
      return WORDS3;
    case "letters":
      return LETTERS;
    case "numbers":
      return NUMBERS;
    case "numbers2":
      return NUMBERS_BIG;
    case "fruits":
      return FRUITS;
  }
}
