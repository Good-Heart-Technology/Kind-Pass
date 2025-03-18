// Word lists for generating easy-to-type passphrases
const commonWords = [
    // Nature
    'sun', 'moon', 'star', 'tree', 'bird', 'fish', 'rain', 'snow', 'wind', 'fire',
    'water', 'earth', 'light', 'dark', 'cloud', 'sky', 'grass', 'flower', 'leaf',
    'rock', 'sand', 'wave', 'ocean', 'river', 'lake', 'mountain', 'forest', 'garden',
    'beach', 'desert', 'cave', 'hill', 'valley', 'island', 'bridge', 'path', 'road',
    'seed', 'root', 'stem', 'bark', 'pine', 'palm', 'coral', 'shell', 'pebble', 'stone',
    'moss', 'fern', 'vine', 'bush', 'weed', 'reed', 'marsh', 'swamp', 'creek', 'brook',
    'stream', 'spring', 'fall', 'cliff', 'ridge', 'peak', 'shore', 'coast', 'bay', 'gulf',
    
    // Animals
    'cat', 'dog', 'duck', 'frog', 'bear', 'lion', 'tiger', 'elephant', 'giraffe', 'zebra',
    'monkey', 'panda', 'koala', 'penguin', 'owl', 'eagle', 'hawk', 'dolphin', 'whale',
    'shark', 'turtle', 'rabbit', 'mouse', 'horse', 'cow', 'sheep', 'pig', 'chicken',
    'goat', 'deer', 'fox', 'wolf', 'camel', 'kangaroo', 'hippo', 'seal', 'otter',
    'beaver', 'raccoon', 'squirrel', 'chipmunk', 'hedgehog', 'badger', 'beetle', 'ant',
    'bee', 'wasp', 'moth', 'butterfly', 'caterpillar', 'spider', 'snail', 'worm',
    'ladybug', 'dragonfly', 'grasshopper', 'cricket', 'firefly', 'mosquito', 'fly',
    'robin', 'sparrow', 'parrot', 'turkey', 'goose', 'swan', 'crane', 'stork',
    
    // Colors
    'red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'brown', 'black',
    'white', 'gray', 'gold', 'silver', 'bronze', 'coral', 'lime', 'navy', 'teal',
    'crimson', 'scarlet', 'maroon', 'burgundy', 'cobalt', 'azure', 'turquoise',
    'emerald', 'jade', 'olive', 'amber', 'violet', 'lavender', 'plum', 'indigo',
    'beige', 'tan', 'khaki', 'ivory', 'pearl', 'copper', 'slate', 'charcoal',
    
    // Family & People
    'child', 'friend', 'teacher', 'doctor',
    'nurse', 'chef', 'artist', 'singer', 'dancer', 'player', 'coach', 'helper', 'hero',
    'aunt', 'uncle', 'cousin', 'grandma', 'grandpa', 'family', 'neighbor', 'pal',
    'buddy', 'classmate', 'teammate', 'leader', 'guide', 'mentor',
    'guardian', 'champion', 'winner',
    
    // Food & Drinks
    'apple', 'banana', 'orange', 'grape', 'berry', 'peach', 'lemon', 'lime', 'melon',
    'corn', 'peas', 'carrot', 'tomato', 'potato', 'bread', 'cake', 'cookie', 'candy',
    'milk', 'juice', 'soup', 'rice', 'pasta', 'pizza', 'sandwich', 'salad', 'pear',
    'plum', 'mango', 'kiwi', 'cherry', 'strawberry', 'raspberry', 'blueberry',
    'blackberry', 'coconut', 'pineapple', 'watermelon', 'cantaloupe', 'honey',
    'jam', 'jelly', 'syrup', 'sauce', 'spice', 'herb', 'pepper', 'salt', 'sugar',
    
    // Toys & Games
    'toy', 'game', 'puzzle', 'block', 'card', 'dice', 'kite', 'rope',
    'drum', 'bell', 'flag', 'book', 'pen', 'pencil', 'paper', 'crayon', 'paint',
    'marbles', 'jacks', 'yo-yo', 'top', 'whistle', 'flute', 'guitar', 'piano', 'violin',
    'trumpet', 'tambourine', 'xylophone', 'harmonica', 'chimes', 'rattle', 'shaker',
    'board',
    
    // Places
    'home', 'school', 'park', 'store', 'shop', 'house', 'room', 'yard', 'pool', 'pond',
    'field', 'farm', 'zoo', 'city', 'town', 'village', 'beach', 'island', 'mountain',
    'playground', 'gym', 'library', 'museum', 'theater', 'restaurant', 'cafe', 'market',
    'church', 'temple', 'mosque', 'stadium', 'arena', 'hall', 'center', 'station',
    'airport', 'harbor', 'port', 'dock', 'pier', 'bridge', 'tunnel', 'tower', 'castle',
    
    // Actions
    'walk', 'run', 'jump', 'hop', 'skip', 'dance', 'sing', 'play', 'read', 'write',
    'draw', 'paint', 'build', 'make', 'help', 'care', 'love', 'share', 'smile', 'laugh',
    'bounce', 'slide', 'swing', 'climb', 'crawl', 'roll', 'spin', 'twirl', 'wave',
    'clap', 'stomp', 'march', 'stretch', 'bend', 'reach', 'grab', 'hold', 'carry',
    'push', 'pull', 'lift', 'drop', 'catch', 'throw', 'kick', 'hit',
    
    // Feelings
    'happy', 'sad', 'mad', 'glad', 'good', 'kind', 'nice', 'sweet', 'fun', 'cool',
    'warm', 'soft', 'bright', 'calm', 'safe', 'free', 'proud', 'brave', 'strong',
    'excited', 'joyful', 'peaceful', 'cheerful', 'merry', 'thankful', 'grateful',
    'confident', 'quiet', 'gentle', 'friendly', 'caring', 'loving', 'cozy', 'comfy',
    
    // Time & Weather
    'day', 'night', 'morning', 'evening', 'spring', 'summer', 'fall', 'winter', 'today',
    'tomorrow', 'week', 'month', 'year', 'time', 'rain', 'snow', 'wind', 'storm',
    'dawn', 'dusk', 'noon', 'midnight', 'afternoon', 'yesterday', 'weekend', 'holiday',
    'season', 'rainbow', 'thunder', 'lightning', 'breeze', 'frost', 'fog', 'mist',
    
    // Numbers & Shapes
    'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
    'circle', 'square', 'triangle', 'star', 'heart', 'diamond', 'oval', 'line', 'dot',
    'round', 'flat', 'curved', 'straight', 'pointed', 'smooth', 'rough', 'sharp',
    'rectangle', 'cross', 'angle', 'edge', 'corner', 'side', 'top', 'bottom',
    
    // Transportation
    'car', 'bus', 'train', 'boat', 'ship', 'plane', 'bike', 'truck', 'van', 'cart',
    'sled', 'skate', 'scooter', 'wagon', 'wheel', 'road', 'path', 'track', 'bridge',
    'skateboard', 'roller', 'skates', 'bicycle', 'tricycle', 'sleigh', 'carriage',
    'cab', 'taxi', 'subway', 'canoe', 'kayak', 'raft', 'ferry', 'cruise', 'sail',
    'paddle', 'row',
    
    // Clothing
    'hat', 'shirt', 'pants', 'dress', 'sock', 'shoe', 'coat', 'glove', 'scarf', 'belt',
    'ring', 'necklace', 'bracelet', 'watch', 'bag', 'pack', 'pocket', 'button', 'zipper',
    'sweater', 'jacket', 'vest', 'hoodie', 'sweatshirt', 't-shirt', 'shorts', 'skirt',
    'suit', 'tie', 'bow', 'ribbon', 'lace', 'collar', 'sleeve', 'cuff', 'hem', 'seam',
    'stitch', 'patch', 'tag', 'label',
    
    // Body Parts
    'head', 'hand', 'foot', 'arm', 'leg', 'eye', 'ear', 'nose', 'mouth', 'hair',
    'face', 'back', 'neck', 'chest', 'heart', 'bone', 'skin', 'lip', 'toe',
    'finger', 'thumb', 'nail', 'brow', 'cheek', 'chin', 'jaw', 'tongue', 'tooth',
    'gum', 'throat', 'shoulder', 'elbow', 'wrist', 'palm', 'fist', 'knee', 'ankle',
    'heel', 'sole',
    
    // School & Learning
    'book', 'pen', 'pencil', 'paper', 'desk', 'chair', 'table', 'board', 'class', 'test',
    'quiz', 'grade', 'score', 'mark', 'note', 'list', 'chart', 'map', 'globe',
    'lesson', 'study', 'learn', 'teach', 'count', 'add', 'subtract', 'multiply',
    'divide', 'spell', 'print', 'type', 'copy', 'paste', 'cut', 'erase', 'check',
    
    // Music & Art
    'song', 'tune', 'note', 'beat', 'drum', 'bell', 'horn', 'flute', 'guitar', 'piano',
    'dance', 'draw', 'paint', 'color', 'art', 'craft', 'design', 'shape', 'line',
    'rhythm', 'pitch', 'tone', 'melody', 'harmony', 'chorus', 'verse', 'bridge',
    'refrain', 'solo', 'duet', 'trio', 'band', 'orchestra', 'choir', 'singer',
    'player', 'artist', 'painter',
    
    // Sports & Games
    'sport', 'game', 'play', 'team', 'score', 'win', 'lose', 'tie', 'race', 'match',
    'round', 'point', 'goal', 'shot', 'pass', 'catch', 'throw', 'kick', 'hit',
    'bounce', 'roll', 'slide', 'swing', 'dive', 'swim', 'jump', 'run', 'walk', 'skip',
    'hop',
    
    // Holidays & Celebrations
    'holiday', 'celebration', 'party', 'festival', 'parade', 'concert', 'show', 'play',
    'dance', 'song', 'music', 'food', 'cake', 'candy', 'gift', 'card', 'decor', 'light',
    'star', 'tree', 'bell', 'ornament', 'wreath', 'garland', 'ribbon', 'bow', 'flag',
    
    // Technology
    'device', 'screen', 'keyboard', 'mouse', 'click', 'type', 'save', 'load', 'share',
    'send', 'receive', 'upload', 'download', 'connect', 'link', 'search', 'find', 'open',
    'close', 'start', 'stop', 'pause', 'play', 'record', 'video', 'photo', 'image',
    
    // Safety & Health
    'safety', 'health', 'clean', 'wash', 'brush', 'comb', 'trim', 'cut', 'clip',
    'band', 'tape', 'wrap', 'cover', 'protect', 'guard', 'shield', 'shelter', 'help',
    'care', 'rest', 'sleep', 'nap', 'wake', 'eat', 'drink', 'snack', 'meal', 'food'
];

const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const specialChars = ['@', '#', '$', '%', '&', '*'];

// DOM Elements
const passwordOutput = document.getElementById('passwordOutput');
const generateButton = document.getElementById('generateButton');
const copyButton = document.getElementById('copyButton');
const currentYear = document.getElementById('currentYear');

// Create popup message element
const popupMessage = document.createElement('div');
popupMessage.className = 'popup-message';
popupMessage.innerHTML = '<i class="fa-solid fa-check"></i> Passphrase Copied!';
document.body.appendChild(popupMessage);

// Set current year in footer
currentYear.textContent = new Date().getFullYear();

// Generate a random number between min and max (inclusive)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate a random element from an array
function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Count numbers in a string
function countNumbers(str) {
    return (str.match(/[0-9]/g) || []).length;
}

// Show popup message
function showPopupMessage(message) {
    popupMessage.innerHTML = `<i class="fa-solid fa-check"></i> ${message}`;
    popupMessage.classList.add('show');
    setTimeout(() => {
        popupMessage.classList.remove('show');
    }, 3000);
}

// Generate a passphrase that meets the requirements
function generatePassphrase() {
    let passphrase;
    let attempts = 0;
    const maxAttempts = 50; // Increased max attempts

    do {
        // Start with a base of 2 words
        const words = [
            getRandomElement(commonWords),
            getRandomElement(commonWords)
        ];
        
        // Initial passphrase with space between words
        passphrase = words.join(' ');
        
        // Calculate remaining length needed for numbers and special char
        let remainingLength = 16 - passphrase.length;
        
        // If we need more characters, add a third word
        if (remainingLength > 4) { // 4 is minimum length for a word + space
            const thirdWord = getRandomElement(commonWords);
            if (passphrase.length + thirdWord.length + 1 <= 16) { // +1 for space
                passphrase = passphrase + ' ' + thirdWord;
                remainingLength = 16 - passphrase.length;
            }
        }
        
        // Add 1-2 numbers at the end
        const numCount = Math.min(2, Math.floor(remainingLength / 2));
        for (let i = 0; i < numCount; i++) {
            if (remainingLength > 0) {
                const num = getRandomElement(numbers);
                passphrase += num;
                remainingLength--;
            }
        }
        
        // Add special character at the very end
        if (remainingLength > 0) {
            const specialChar = getRandomElement(specialChars);
            passphrase += specialChar;
            remainingLength--;
        }
        
        // If we don't have exactly 16 characters or don't have at least 1 number, try again
        if (passphrase.length !== 16 || countNumbers(passphrase) === 0) {
            attempts++;
            continue;
        }
        
        break; // If we get here, we have a valid passphrase
    } while (attempts < maxAttempts);
    
    // If we couldn't generate a valid passphrase after max attempts,
    // try one more time with a simpler approach
    if (attempts >= maxAttempts) {
        // Use two short words to ensure we have enough space for numbers and special char
        const shortWords = commonWords.filter(word => word.length <= 4);
        const word1 = getRandomElement(shortWords);
        const word2 = getRandomElement(shortWords);
        const num = getRandomElement(numbers);
        const specialChar = getRandomElement(specialChars);
        passphrase = `${word1} ${word2} ${num}${specialChar}`;
        
        // Pad with spaces if needed
        while (passphrase.length < 16) {
            passphrase += ' ';
        }
    }
    
    return passphrase;
}

// Copy passphrase to clipboard
async function copyToClipboard() {
    try {
        await navigator.clipboard.writeText(passwordOutput.value);
        showPopupMessage('Passphrase Copied!');
    } catch (err) {
        console.error('Failed to copy text: ', err);
        showPopupMessage('Failed to copy passphrase');
    }
}

// Event Listeners
generateButton.addEventListener('click', () => {
    passwordOutput.value = generatePassphrase();
});

copyButton.addEventListener('click', copyToClipboard);

// Generate initial passphrase when page loads
passwordOutput.value = generatePassphrase(); 
passwordOutput.value = generatePassphrase(); 