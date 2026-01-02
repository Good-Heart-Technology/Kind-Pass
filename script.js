// Word lists for generating easy-to-type passphrases
const commonWords = [
    // Nature
    'Sun', 'Moon', 'Star', 'Tree', 'Bird', 'Fish', 'Rain', 'Snow', 'Wind', 'Fire',
    'Water', 'Earth', 'Light', 'Dark', 'Cloud', 'Sky', 'Grass', 'Flower', 'Leaf',
    'Rock', 'Sand', 'Wave', 'Ocean', 'River', 'Lake', 'Mountain', 'Forest', 'Garden',
    'Beach', 'Desert', 'Cave', 'Hill', 'Valley', 'Island', 'Bridge', 'Path', 'Road',
    'Seed', 'Root', 'Stem', 'Bark', 'Pine', 'Palm', 'Coral', 'Shell', 'Pebble', 'Stone',
    'Moss', 'Fern', 'Vine', 'Bush', 'Weed', 'Reed', 'Marsh', 'Swamp', 'Creek', 'Brook',
    'Stream', 'Spring', 'Fall', 'Cliff', 'Ridge', 'Peak', 'Shore', 'Coast', 'Bay', 'Gulf',
    
    // Animals
    'Cat', 'Dog', 'Duck', 'Frog', 'Bear', 'Lion', 'Tiger', 'Elephant', 'Giraffe', 'Zebra',
    'Monkey', 'Panda', 'Koala', 'Penguin', 'Owl', 'Eagle', 'Hawk', 'Dolphin', 'Whale',
    'Shark', 'Turtle', 'Rabbit', 'Mouse', 'Horse', 'Cow', 'Sheep', 'Pig', 'Chicken',
    'Goat', 'Deer', 'Fox', 'Wolf', 'Camel', 'Kangaroo', 'Hippo', 'Seal', 'Otter',
    'Beaver', 'Raccoon', 'Squirrel', 'Chipmunk', 'Hedgehog', 'Badger', 'Beetle', 'Ant',
    'Bee', 'Wasp', 'Moth', 'Butterfly', 'Caterpillar', 'Spider', 'Snail', 'Worm',
    'Ladybug', 'Dragonfly', 'Grasshopper', 'Cricket', 'Firefly', 'Mosquito', 'Fly',
    'Robin', 'Sparrow', 'Parrot', 'Turkey', 'Goose', 'Swan', 'Crane', 'Stork',
    
    // Colors
    'Red', 'Blue', 'Green', 'Yellow', 'Purple', 'Orange', 'Pink', 'Brown', 'Black',
    'White', 'Gray', 'Gold', 'Silver', 'Bronze', 'Coral', 'Lime', 'Navy', 'Teal',
    'Crimson', 'Scarlet', 'Maroon', 'Burgundy', 'Cobalt', 'Azure', 'Turquoise',
    'Emerald', 'Jade', 'Olive', 'Amber', 'Violet', 'Lavender', 'Plum', 'Indigo',
    'Beige', 'Tan', 'Khaki', 'Ivory', 'Pearl', 'Copper', 'Slate', 'Charcoal',
    
    // Family & People
    'Child', 'Friend', 'Teacher', 'Doctor',
    'Nurse', 'Chef', 'Artist', 'Singer', 'Dancer', 'Player', 'Coach', 'Helper', 'Hero',
    'Aunt', 'Uncle', 'Cousin', 'Grandma', 'Grandpa', 'Family', 'Neighbor', 'Pal',
    'Buddy', 'Classmate', 'Teammate', 'Leader', 'Guide', 'Mentor',
    'Guardian', 'Champion', 'Winner',
    
    // Food & Drinks
    'Apple', 'Banana', 'Orange', 'Grape', 'Berry', 'Peach', 'Lemon', 'Lime', 'Melon',
    'Corn', 'Peas', 'Carrot', 'Tomato', 'Potato', 'Bread', 'Cake', 'Cookie', 'Candy',
    'Milk', 'Juice', 'Soup', 'Rice', 'Pasta', 'Pizza', 'Sandwich', 'Salad', 'Pear',
    'Plum', 'Mango', 'Kiwi', 'Cherry', 'Strawberry', 'Raspberry', 'Blueberry',
    'Blackberry', 'Coconut', 'Pineapple', 'Watermelon', 'Cantaloupe', 'Honey',
    'Jam', 'Jelly', 'Syrup', 'Sauce', 'Spice', 'Herb', 'Pepper', 'Salt', 'Sugar',
    
    // Toys & Games
    'Toy', 'Game', 'Puzzle', 'Block', 'Card', 'Dice', 'Kite', 'Rope',
    'Drum', 'Bell', 'Flag', 'Book', 'Pen', 'Pencil', 'Paper', 'Crayon', 'Paint',
    'Marbles', 'Jacks', 'Yo-yo', 'Top', 'Whistle', 'Flute', 'Guitar', 'Piano', 'Violin',
    'Trumpet', 'Tambourine', 'Xylophone', 'Harmonica', 'Chimes', 'Rattle', 'Shaker',
    'Board',
    
    // Places
    'Home', 'School', 'Park', 'Store', 'Shop', 'House', 'Room', 'Yard', 'Pool', 'Pond',
    'Field', 'Farm', 'Zoo', 'City', 'Town', 'Village', 'Beach', 'Island', 'Mountain',
    'Playground', 'Gym', 'Library', 'Museum', 'Theater', 'Restaurant', 'Cafe', 'Market',
    'Church', 'Temple', 'Mosque', 'Stadium', 'Arena', 'Hall', 'Center', 'Station',
    'Airport', 'Harbor', 'Port', 'Dock', 'Pier', 'Bridge', 'Tunnel', 'Tower', 'Castle',
    
    // Actions
    'Walk', 'Run', 'Jump', 'Hop', 'Skip', 'Dance', 'Sing', 'Play', 'Read', 'Write',
    'Draw', 'Paint', 'Build', 'Make', 'Help', 'Care', 'Love', 'Share', 'Smile', 'Laugh',
    'Bounce', 'Slide', 'Swing', 'Climb', 'Crawl', 'Roll', 'Spin', 'Twirl', 'Wave',
    'Clap', 'Stomp', 'March', 'Stretch', 'Bend', 'Reach', 'Grab', 'Hold', 'Carry',
    'Push', 'Pull', 'Lift', 'Drop', 'Catch', 'Throw', 'Kick', 'Hit',
    
    // Feelings
    'Happy', 'Sad', 'Mad', 'Glad', 'Good', 'Kind', 'Nice', 'Sweet', 'Fun', 'Cool',
    'Warm', 'Soft', 'Bright', 'Calm', 'Safe', 'Free', 'Proud', 'Brave', 'Strong',
    'Excited', 'Joyful', 'Peaceful', 'Cheerful', 'Merry', 'Thankful', 'Grateful',
    'Confident', 'Quiet', 'Gentle', 'Friendly', 'Caring', 'Loving', 'Cozy', 'Comfy',
    
    // Time & Weather
    'Day', 'Night', 'Morning', 'Evening', 'Spring', 'Summer', 'Fall', 'Winter', 'Today',
    'Tomorrow', 'Week', 'Month', 'Year', 'Time', 'Rain', 'Snow', 'Wind', 'Storm',
    'Dawn', 'Dusk', 'Noon', 'Midnight', 'Afternoon', 'Yesterday', 'Weekend', 'Holiday',
    'Season', 'Rainbow', 'Thunder', 'Lightning', 'Breeze', 'Frost', 'Fog', 'Mist',
    
    // Numbers & Shapes
    'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten',
    'Circle', 'Square', 'Triangle', 'Star', 'Heart', 'Diamond', 'Oval', 'Line', 'Dot',
    'Round', 'Flat', 'Curved', 'Straight', 'Pointed', 'Smooth', 'Rough', 'Sharp',
    'Rectangle', 'Cross', 'Angle', 'Edge', 'Corner', 'Side', 'Top', 'Bottom',
    
    // Transportation
    'Car', 'Bus', 'Train', 'Boat', 'Ship', 'Plane', 'Bike', 'Truck', 'Van', 'Cart',
    'Sled', 'Skate', 'Scooter', 'Wagon', 'Wheel', 'Road', 'Path', 'Track', 'Bridge',
    'Skateboard', 'Roller', 'Skates', 'Bicycle', 'Tricycle', 'Sleigh', 'Carriage',
    'Cab', 'Taxi', 'Subway', 'Canoe', 'Kayak', 'Raft', 'Ferry', 'Cruise', 'Sail',
    'Paddle', 'Row',
    
    // Clothing
    'Hat', 'Shirt', 'Pants', 'Dress', 'Sock', 'Shoe', 'Coat', 'Glove', 'Scarf', 'Belt',
    'Ring', 'Necklace', 'Bracelet', 'Watch', 'Bag', 'Pack', 'Pocket', 'Button', 'Zipper',
    'Sweater', 'Jacket', 'Vest', 'Hoodie', 'Sweatshirt', 'T-shirt', 'Shorts', 'Skirt',
    'Suit', 'Tie', 'Bow', 'Ribbon', 'Lace', 'Collar', 'Sleeve', 'Cuff', 'Hem', 'Seam',
    'Stitch', 'Patch', 'Tag', 'Label',
    
    // Body Parts
    'Head', 'Hand', 'Foot', 'Arm', 'Leg', 'Eye', 'Ear', 'Nose', 'Mouth', 'Hair',
    'Face', 'Back', 'Neck', 'Chest', 'Heart', 'Bone', 'Skin', 'Lip', 'Toe',
    'Finger', 'Thumb', 'Nail', 'Brow', 'Cheek', 'Chin', 'Jaw', 'Tongue', 'Tooth',
    'Gum', 'Throat', 'Shoulder', 'Elbow', 'Wrist', 'Palm', 'Fist', 'Knee', 'Ankle',
    'Heel', 'Sole',
    
    // School & Learning
    'Book', 'Pen', 'Pencil', 'Paper', 'Desk', 'Chair', 'Table', 'Board', 'Class', 'Test',
    'Quiz', 'Grade', 'Score', 'Mark', 'Note', 'List', 'Chart', 'Map', 'Globe',
    'Lesson', 'Study', 'Learn', 'Teach', 'Count', 'Add', 'Subtract', 'Multiply',
    'Divide', 'Spell', 'Print', 'Type', 'Copy', 'Paste', 'Cut', 'Erase', 'Check',
    
    // Music & Art
    'Song', 'Tune', 'Note', 'Beat', 'Drum', 'Bell', 'Horn', 'Flute', 'Guitar', 'Piano',
    'Dance', 'Draw', 'Paint', 'Color', 'Art', 'Craft', 'Design', 'Shape', 'Line',
    'Rhythm', 'Pitch', 'Tone', 'Melody', 'Harmony', 'Chorus', 'Verse', 'Bridge',
    'Refrain', 'Solo', 'Duet', 'Trio', 'Band', 'Orchestra', 'Choir', 'Singer',
    'Player', 'Artist', 'Painter',
    
    // Sports & Games
    'Sport', 'Game', 'Play', 'Team', 'Score', 'Win', 'Lose', 'Tie', 'Race', 'Match',
    'Round', 'Point', 'Goal', 'Shot', 'Pass', 'Catch', 'Throw', 'Kick', 'Hit',
    'Bounce', 'Roll', 'Slide', 'Swing', 'Dive', 'Swim', 'Jump', 'Run', 'Walk', 'Skip',
    'Hop',
    
    // Holidays & Celebrations
    'Holiday', 'Celebration', 'Party', 'Festival', 'Parade', 'Concert', 'Show', 'Play',
    'Dance', 'Song', 'Music', 'Food', 'Cake', 'Candy', 'Gift', 'Card', 'Decor', 'Light',
    'Star', 'Tree', 'Bell', 'Ornament', 'Wreath', 'Garland', 'Ribbon', 'Bow', 'Flag',
    
    // Technology
    'Device', 'Screen', 'Keyboard', 'Mouse', 'Click', 'Type', 'Save', 'Load', 'Share',
    'Send', 'Receive', 'Upload', 'Download', 'Connect', 'Link', 'Search', 'Find', 'Open',
    'Close', 'Start', 'Stop', 'Pause', 'Play', 'Record', 'Video', 'Photo', 'Image',
    
    // Safety & Health
    'Safety', 'Health', 'Clean', 'Wash', 'Brush', 'Comb', 'Trim', 'Cut', 'Clip',
    'Band', 'Tape', 'Wrap', 'Cover', 'Protect', 'Guard', 'Shield', 'Shelter', 'Help',
    'Care', 'Rest', 'Sleep', 'Nap', 'Wake', 'Eat', 'Drink', 'Snack', 'Meal', 'Food'
];

const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const specialChars = ['!', '@', '#', '$', '%', '&', '*'];

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