export interface CardItem {
  word: string;
  emoji: string;
  say: string;
  image?: string;
  color?: string;
  shape?: "circle" | "square" | "triangle" | "rectangle" | "oval" | "diamond" | "star" | "heart" | "pentagon" | "hexagon";
  shapeColor?: string;
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

export const NUMBERS_11_20: CardItem[] = [
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

export const NUMBERS_21_30: CardItem[] = [
  { word: "21", emoji: "🎯", say: "twenty one" },
  { word: "22", emoji: "🦢", say: "twenty two" },
  { word: "23", emoji: "🎸", say: "twenty three" },
  { word: "24", emoji: "🕐", say: "twenty four" },
  { word: "25", emoji: "🪙", say: "twenty five" },
  { word: "26", emoji: "🧩", say: "twenty six" },
  { word: "27", emoji: "🎲", say: "twenty seven" },
  { word: "28", emoji: "🚲", say: "twenty eight" },
  { word: "29", emoji: "🧸", say: "twenty nine" },
  { word: "30", emoji: "🏅", say: "thirty" },
];

export const NUMBERS_31_40: CardItem[] = [
  { word: "31", emoji: "🌵", say: "thirty one" },
  { word: "32", emoji: "🎭", say: "thirty two" },
  { word: "33", emoji: "🦋", say: "thirty three" },
  { word: "34", emoji: "🎺", say: "thirty four" },
  { word: "35", emoji: "🐬", say: "thirty five" },
  { word: "36", emoji: "🌺", say: "thirty six" },
  { word: "37", emoji: "🚁", say: "thirty seven" },
  { word: "38", emoji: "🎠", say: "thirty eight" },
  { word: "39", emoji: "🦩", say: "thirty nine" },
  { word: "40", emoji: "🏆", say: "forty" },
];

export const NUMBERS_41_50: CardItem[] = [
  { word: "41", emoji: "🐠", say: "forty one" },
  { word: "42", emoji: "🌴", say: "forty two" },
  { word: "43", emoji: "🎡", say: "forty three" },
  { word: "44", emoji: "🦊", say: "forty four" },
  { word: "45", emoji: "💎", say: "forty five" },
  { word: "46", emoji: "🐳", say: "forty six" },
  { word: "47", emoji: "🌽", say: "forty seven" },
  { word: "48", emoji: "🎹", say: "forty eight" },
  { word: "49", emoji: "🦜", say: "forty nine" },
  { word: "50", emoji: "🎊", say: "fifty" },
];

export const NUMBERS_51_60: CardItem[] = [
  { word: "51", emoji: "🐢", say: "fifty one" },
  { word: "52", emoji: "🃏", say: "fifty two" },
  { word: "53", emoji: "🦀", say: "fifty three" },
  { word: "54", emoji: "🛸", say: "fifty four" },
  { word: "55", emoji: "🏎️", say: "fifty five" },
  { word: "56", emoji: "🦑", say: "fifty six" },
  { word: "57", emoji: "🎻", say: "fifty seven" },
  { word: "58", emoji: "🐊", say: "fifty eight" },
  { word: "59", emoji: "🪐", say: "fifty nine" },
  { word: "60", emoji: "⏰", say: "sixty" },
];

export const NUMBERS_61_70: CardItem[] = [
  { word: "61", emoji: "🦅", say: "sixty one" },
  { word: "62", emoji: "🍩", say: "sixty two" },
  { word: "63", emoji: "🐍", say: "sixty three" },
  { word: "64", emoji: "♟️", say: "sixty four" },
  { word: "65", emoji: "🌶️", say: "sixty five" },
  { word: "66", emoji: "🎪", say: "sixty six" },
  { word: "67", emoji: "🦕", say: "sixty seven" },
  { word: "68", emoji: "🍿", say: "sixty eight" },
  { word: "69", emoji: "🏄", say: "sixty nine" },
  { word: "70", emoji: "🎳", say: "seventy" },
];

export const NUMBERS_71_80: CardItem[] = [
  { word: "71", emoji: "🐝", say: "seventy one" },
  { word: "72", emoji: "🌊", say: "seventy two" },
  { word: "73", emoji: "🦂", say: "seventy three" },
  { word: "74", emoji: "🎷", say: "seventy four" },
  { word: "75", emoji: "💫", say: "seventy five" },
  { word: "76", emoji: "🦚", say: "seventy six" },
  { word: "77", emoji: "🎰", say: "seventy seven" },
  { word: "78", emoji: "🐞", say: "seventy eight" },
  { word: "79", emoji: "🌋", say: "seventy nine" },
  { word: "80", emoji: "🎱", say: "eighty" },
];

export const NUMBERS_81_90: CardItem[] = [
  { word: "81", emoji: "🦎", say: "eighty one" },
  { word: "82", emoji: "🍭", say: "eighty two" },
  { word: "83", emoji: "🐡", say: "eighty three" },
  { word: "84", emoji: "🏰", say: "eighty four" },
  { word: "85", emoji: "🌈", say: "eighty five" },
  { word: "86", emoji: "🦧", say: "eighty six" },
  { word: "87", emoji: "🎯", say: "eighty seven" },
  { word: "88", emoji: "🐼", say: "eighty eight" },
  { word: "89", emoji: "🚀", say: "eighty nine" },
  { word: "90", emoji: "🎶", say: "ninety" },
];

export const NUMBERS_91_100: CardItem[] = [
  { word: "91", emoji: "🦈", say: "ninety one" },
  { word: "92", emoji: "🌮", say: "ninety two" },
  { word: "93", emoji: "🐉", say: "ninety three" },
  { word: "94", emoji: "🎤", say: "ninety four" },
  { word: "95", emoji: "🏋️", say: "ninety five" },
  { word: "96", emoji: "🦘", say: "ninety six" },
  { word: "97", emoji: "🎼", say: "ninety seven" },
  { word: "98", emoji: "🐋", say: "ninety eight" },
  { word: "99", emoji: "🎆", say: "ninety nine" },
  { word: "100", emoji: "💯", say: "one hundred" },
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

export const ANIMALS: CardItem[] = [
  { word: "CAT", emoji: "🐱", say: "cat" },
  { word: "DOG", emoji: "🐶", say: "dog" },
  { word: "COW", emoji: "🐄", say: "cow" },
  { word: "PIG", emoji: "🐷", say: "pig" },
  { word: "HEN", emoji: "🐔", say: "hen" },
  { word: "DUCK", emoji: "🦆", say: "duck" },
  { word: "GOAT", emoji: "🐐", say: "goat" },
  { word: "SHEEP", emoji: "🐑", say: "sheep" },
  { word: "HORSE", emoji: "🐴", say: "horse" },
  { word: "RABBIT", emoji: "🐰", say: "rabbit" },
  { word: "MOUSE", emoji: "🐭", say: "mouse" },
  { word: "FISH", emoji: "🐟", say: "fish" },
  { word: "BIRD", emoji: "🐦", say: "bird" },
  { word: "FROG", emoji: "🐸", say: "frog" },
  { word: "TURTLE", emoji: "🐢", say: "turtle" },
  { word: "LION", emoji: "🦁", say: "lion" },
  { word: "TIGER", emoji: "🐯", say: "tiger" },
  { word: "BEAR", emoji: "🐻", say: "bear" },
  { word: "MONKEY", emoji: "🐵", say: "monkey" },
  { word: "ZEBRA", emoji: "🦓", say: "zebra" },
  { word: "GIRAFFE", emoji: "🦒", say: "giraffe" },
  { word: "ELEPHANT", emoji: "🐘", say: "elephant" },
  { word: "PANDA", emoji: "🐼", say: "panda" },
  { word: "KANGAROO", emoji: "🦘", say: "kangaroo" },
  { word: "DOLPHIN", emoji: "🐬", say: "dolphin" },
  { word: "WHALE", emoji: "🐳", say: "whale" },
  { word: "SNAKE", emoji: "🐍", say: "snake" },
  { word: "BUTTERFLY", emoji: "🦋", say: "butterfly" },
  { word: "BEE", emoji: "🐝", say: "bee" },
  { word: "ANT", emoji: "🐜", say: "ant" },
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
  { word: "SIT", emoji: "Aa", say: "sit" },
];

export const WORDS4: CardItem[] = [
  { word: "BALL", emoji: "⚽", say: "ball" },
  { word: "BIRD", emoji: "🐦", say: "bird" },
  { word: "BOOK", emoji: "📖", say: "book" },
  { word: "CAKE", emoji: "🎂", say: "cake" },
  { word: "CLAP", emoji: "👏", say: "clap" },
  { word: "COLD", emoji: "🥶", say: "cold" },
  { word: "COOK", emoji: "👩‍🍳", say: "cook" },
  { word: "DOOR", emoji: "🚪", say: "door" },
  { word: "DRAW", emoji: "🖍️", say: "draw" },
  { word: "DUCK", emoji: "🦆", say: "duck" },
  { word: "FACE", emoji: "😊", say: "face" },
  { word: "FARM", emoji: "🌾", say: "farm" },
  { word: "FAST", emoji: "💨", say: "fast" },
  { word: "FIRE", emoji: "🔥", say: "fire" },
  { word: "FISH", emoji: "🐟", say: "fish" },
  { word: "FLAG", emoji: "🏁", say: "flag" },
  { word: "FOOD", emoji: "🍕", say: "food" },
  { word: "FROG", emoji: "🐸", say: "frog" },
  { word: "GAME", emoji: "🎮", say: "game" },
  { word: "GIFT", emoji: "🎁", say: "gift" },
  { word: "GOLD", emoji: "🥇", say: "gold" },
  { word: "GOOD", emoji: "👍", say: "good" },
  { word: "HAND", emoji: "✋", say: "hand" },
  { word: "HIDE", emoji: "🙈", say: "hide" },
  { word: "HOME", emoji: "🏠", say: "home" },
  { word: "JUMP", emoji: "🤸", say: "jump" },
  { word: "KING", emoji: "👑", say: "king" },
  { word: "KITE", emoji: "🪁", say: "kite" },
  { word: "LAMP", emoji: "💡", say: "lamp" },
  { word: "LEAF", emoji: "🍃", say: "leaf" },
  { word: "LION", emoji: "🦁", say: "lion" },
  { word: "LOVE", emoji: "❤️", say: "love" },
  { word: "MILK", emoji: "🥛", say: "milk" },
  { word: "MOON", emoji: "🌙", say: "moon" },
  { word: "NEST", emoji: "🪺", say: "nest" },
  { word: "NOSE", emoji: "👃", say: "nose" },
  { word: "PARK", emoji: "🏞️", say: "park" },
  { word: "PLAY", emoji: "🎪", say: "play" },
  { word: "RAIN", emoji: "🌧️", say: "rain" },
  { word: "RING", emoji: "💍", say: "ring" },
  { word: "ROAD", emoji: "🛣️", say: "road" },
  { word: "ROCK", emoji: "🪨", say: "rock" },
  { word: "SHIP", emoji: "🚢", say: "ship" },
  { word: "SHOE", emoji: "👟", say: "shoe" },
  { word: "SING", emoji: "🎤", say: "sing" },
  { word: "SNOW", emoji: "❄️", say: "snow" },
  { word: "STAR", emoji: "⭐", say: "star" },
  { word: "SWIM", emoji: "🏊", say: "swim" },
  { word: "TREE", emoji: "🌳", say: "tree" },
  { word: "WISH", emoji: "🌠", say: "wish" },
  { word: "HELP", emoji: "Aa", say: "help" },
  { word: "NAME", emoji: "Aa", say: "name" },
];

function makeWordCards(words: string[]): CardItem[] {
  return words.map((word) => ({
    word: word.toUpperCase(),
    emoji: "Aa",
    say: word,
  }));
}

export const WORDS5: CardItem[] = makeWordCards([
  "uncle", "child", "niece", "water", "bread", "table", "chair", "house",
  "apple", "smile", "sleep", "laugh", "stand", "dance", "clean", "share",
  "build", "carry", "teach", "learn", "plant", "spoon", "plate", "brush",
  "shirt", "shoes", "story", "music", "happy", "small", "brave", "sweet",
]);

export const WORDS6: CardItem[] = makeWordCards([
  "mother", "father", "cousin", "nephew", "sister", "parent", "family", "school",
  "friend", "animal", "bottle", "pencil", "window", "garden", "doctor", "dinner",
  "cookie", "banana", "listen", "follow", "answer", "travel", "create", "wonder",
  "helper", "gentle", "hungry", "sleepy", "simple", "around", "inside", "before",
]);

export const WORDS7: CardItem[] = makeWordCards([
  "brother", "grandma", "grandpa", "teacher", "student", "kitchen", "bedroom", "morning",
  "picture", "chicken", "blanket", "careful", "helpful", "playful", "healthy", "welcome",
  "pretend", "explain", "imagine", "collect", "protect", "sharing", "reading", "drawing",
  "singing", "running", "walking", "cooking", "washing", "waiting",
]);

export const WORDS8: CardItem[] = makeWordCards([
  "daughter", "children", "grandson", "sandwich", "birthday", "backpack", "bathroom", "homework",
  "kindness", "thankful", "friendly", "cheerful", "together", "tomorrow", "favorite", "remember",
  "discover", "practice", "describe", "question", "counting", "learning", "painting", "climbing",
  "swimming", "cleaning", "helping", "teaching",
]);

export const BODY_PARTS: CardItem[] = [
  { word: "HEAD", emoji: "🧠", say: "head" },
  { word: "HAIR", emoji: "💇", say: "hair" },
  { word: "EYES", emoji: "👀", say: "eyes" },
  { word: "NOSE", emoji: "👃", say: "nose" },
  { word: "MOUTH", emoji: "👄", say: "mouth" },
  { word: "EARS", emoji: "👂", say: "ears" },
  { word: "NECK", emoji: "🦒", say: "neck" },
  { word: "SHOULDERS", emoji: "💪", say: "shoulders" },
  { word: "CHEST", emoji: "🫁", say: "chest" },
  { word: "TUMMY", emoji: "😋", say: "tummy" },
  { word: "ARMS", emoji: "💪", say: "arms" },
  { word: "HANDS", emoji: "🖐️", say: "hands" },
  { word: "LEGS", emoji: "🦵", say: "legs" },
  { word: "KNEES", emoji: "🦿", say: "knees" },
  { word: "FEET", emoji: "🦶", say: "feet" },
];

export const COLORS: CardItem[] = [
  { word: "RED", emoji: "🔴", say: "red", color: "#FF4444" },
  { word: "BLUE", emoji: "🔵", say: "blue", color: "#4488FF" },
  { word: "GREEN", emoji: "🟢", say: "green", color: "#44BB44" },
  { word: "YELLOW", emoji: "🟡", say: "yellow", color: "#FFD700" },
  { word: "ORANGE", emoji: "🟠", say: "orange", color: "#FF8C00" },
  { word: "PURPLE", emoji: "🟣", say: "purple", color: "#9944CC" },
  { word: "PINK", emoji: "💗", say: "pink", color: "#FF69B4" },
  { word: "BROWN", emoji: "🟤", say: "brown", color: "#8B5A2B" },
  { word: "BLACK", emoji: "⚫", say: "black", color: "#222222" },
  { word: "WHITE", emoji: "⚪", say: "white", color: "#F0F0F0" },
  { word: "GRAY", emoji: "🩶", say: "gray", color: "#999999" },
  { word: "GOLD", emoji: "✨", say: "gold", color: "#FFB800" },
  { word: "SILVER", emoji: "🪩", say: "silver", color: "#C0C0C0" },
  { word: "TEAL", emoji: "💎", say: "teal", color: "#008080" },
  { word: "NAVY", emoji: "🫐", say: "navy", color: "#000080" },
  { word: "LIME", emoji: "🍈", say: "lime", color: "#32CD32" },
  { word: "CORAL", emoji: "🪸", say: "coral", color: "#FF6F61" },
  { word: "PEACH", emoji: "🍑", say: "peach", color: "#FFCBA4" },
  { word: "SKY BLUE", emoji: "🩵", say: "sky blue", color: "#87CEEB" },
  { word: "MAROON", emoji: "🫀", say: "maroon", color: "#800020" },
];

export const SHAPES: CardItem[] = [
  { word: "CIRCLE", emoji: "", say: "circle", shape: "circle", shapeColor: "#FF6B6B" },
  { word: "SQUARE", emoji: "", say: "square", shape: "square", shapeColor: "#4ECDC4" },
  { word: "TRIANGLE", emoji: "", say: "triangle", shape: "triangle", shapeColor: "#FFD166" },
  { word: "RECTANGLE", emoji: "", say: "rectangle", shape: "rectangle", shapeColor: "#5C7CFA" },
  { word: "OVAL", emoji: "", say: "oval", shape: "oval", shapeColor: "#B197FC" },
  { word: "DIAMOND", emoji: "", say: "diamond", shape: "diamond", shapeColor: "#FF922B" },
  { word: "STAR", emoji: "", say: "star", shape: "star", shapeColor: "#FCC419" },
  { word: "HEART", emoji: "", say: "heart", shape: "heart", shapeColor: "#F06595" },
  { word: "PENTAGON", emoji: "", say: "pentagon", shape: "pentagon", shapeColor: "#69DB7C" },
  { word: "HEXAGON", emoji: "", say: "hexagon", shape: "hexagon", shapeColor: "#22B8CF" },
];

type ShapeKind = NonNullable<CardItem["shape"]>;

const COLOR_SHAPE_COLORS = [
  { word: "RED", say: "red", shapeColor: "#FF4444" },
  { word: "YELLOW", say: "yellow", shapeColor: "#FFD700" },
  { word: "GREEN", say: "green", shapeColor: "#44BB44" },
  { word: "BLUE", say: "blue", shapeColor: "#4488FF" },
  { word: "ORANGE", say: "orange", shapeColor: "#FF8C00" },
  { word: "PURPLE", say: "purple", shapeColor: "#9944CC" },
  { word: "PINK", say: "pink", shapeColor: "#FF69B4" },
  { word: "BROWN", say: "brown", shapeColor: "#8B5A2B" },
  { word: "BLACK", say: "black", shapeColor: "#222222" },
  { word: "WHITE", say: "white", shapeColor: "#F0F0F0" },
];

const COLOR_SHAPE_LABELS: Record<ShapeKind, string> = {
  circle: "CIRCLE",
  square: "SQUARE",
  triangle: "TRIANGLE",
  rectangle: "RECTANGLE",
  oval: "OVAL",
  diamond: "DIAMOND",
  star: "STAR",
  heart: "HEART",
  pentagon: "PENTAGON",
  hexagon: "HEXAGON",
};

function makeColorShapes(shape: ShapeKind): CardItem[] {
  const shapeWord = COLOR_SHAPE_LABELS[shape];
  const shapeSay = shapeWord.toLowerCase();

  return COLOR_SHAPE_COLORS.map((color) => ({
    word: `${color.word} ${shapeWord}`,
    emoji: "",
    say: `${color.say} ${shapeSay}`,
    shape,
    shapeColor: color.shapeColor,
  }));
}

export const COLOR_CIRCLES = makeColorShapes("circle");
export const COLOR_SQUARES = makeColorShapes("square");
export const COLOR_TRIANGLES = makeColorShapes("triangle");
export const COLOR_RECTANGLES = makeColorShapes("rectangle");
export const COLOR_OVALS = makeColorShapes("oval");
export const COLOR_DIAMONDS = makeColorShapes("diamond");
export const COLOR_STARS = makeColorShapes("star");
export const COLOR_HEARTS = makeColorShapes("heart");
export const COLOR_PENTAGONS = makeColorShapes("pentagon");
export const COLOR_HEXAGONS = makeColorShapes("hexagon");

export type Mode =
  | "words" | "words3" | "words4" | "words5" | "words6" | "words7" | "words8"
  | "letters"
  | "numbers" | "num11" | "num21" | "num31" | "num41" | "num51"
  | "num61" | "num71" | "num81" | "num91"
  | "fruits" | "animals" | "colors" | "shapes" | "body" | "stories" | "opposites"
  | "colorCircles" | "colorSquares" | "colorTriangles" | "colorRectangles" | "colorOvals"
  | "colorDiamonds" | "colorStars" | "colorHearts" | "colorPentagons" | "colorHexagons";

export function getDataForMode(mode: Mode): CardItem[] {
  switch (mode) {
    case "words":    return WORDS;
    case "words3":   return WORDS3;
    case "words4":   return WORDS4;
    case "words5":   return WORDS5;
    case "words6":   return WORDS6;
    case "words7":   return WORDS7;
    case "words8":   return WORDS8;
    case "letters":  return LETTERS;
    case "numbers":  return NUMBERS;
    case "num11":    return NUMBERS_11_20;
    case "num21":    return NUMBERS_21_30;
    case "num31":    return NUMBERS_31_40;
    case "num41":    return NUMBERS_41_50;
    case "num51":    return NUMBERS_51_60;
    case "num61":    return NUMBERS_61_70;
    case "num71":    return NUMBERS_71_80;
    case "num81":    return NUMBERS_81_90;
    case "num91":    return NUMBERS_91_100;
    case "fruits":   return FRUITS;
    case "animals":  return ANIMALS;
    case "colors":   return COLORS;
    case "shapes":   return SHAPES;
    case "body":     return BODY_PARTS;
    case "colorCircles":    return COLOR_CIRCLES;
    case "colorSquares":    return COLOR_SQUARES;
    case "colorTriangles":  return COLOR_TRIANGLES;
    case "colorRectangles": return COLOR_RECTANGLES;
    case "colorOvals":      return COLOR_OVALS;
    case "colorDiamonds":   return COLOR_DIAMONDS;
    case "colorStars":      return COLOR_STARS;
    case "colorHearts":     return COLOR_HEARTS;
    case "colorPentagons":  return COLOR_PENTAGONS;
    case "colorHexagons":   return COLOR_HEXAGONS;
    case "stories":    return [];
    case "opposites":  return [];
  }
}
