var r = document.querySelector(':root');
var rs = getComputedStyle(r);
var color_0 = rs.getPropertyValue("--color_0");
var color_1 = rs.getPropertyValue("--color_1");
var color_2 = rs.getPropertyValue("--color_2");
var color_3 = rs.getPropertyValue("--color_3");
var color_4 = rs.getPropertyValue("--color_4");
var color_5 = rs.getPropertyValue("--color_5");
var color_6 = rs.getPropertyValue("--color_6");

const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const words = [
    'pat', 'woman', 'preserve', 'behave', 'colorful', 'rifle', 'cable', 'hill', 'smart', 'joke', 'domineering',
    'leather', 'pull', 'silver', 'vast', 'habitual', 'contain', 'mammoth', 'uptight', 'sister', 'building', 'temper',
    'zinc', 'divide', 'soak', 'risk', 'meek', 'wanting', 'wholesale', 'near', 'likeable', 'hurt', 'frantic',
    'multiply', 'silk', 'draconian', 'thrill', 'wide-eyed', 'utter', 'consider', 'judicious', 'bitter', 'rapid', 'reminiscent',
    'invite', 'tick', 'devilish', 'help', 'goofy', 'action', 'route', 'energetic', 'price', 'entertaining', 'plane',
    'identify', 'wire', 'broad', 'battle', 'embarrass', 'lush', 'request', 'shade', 'gamy', 'girls', 'bite',
    'experience', 'structure', 'bell', 'reflect', 'use', 'fantastic', 'dog', 'distinct', 'exercise', 'subsequent', 'long',
    'hysterical', 'deranged', 'invent', 'delirious', 'society', 'birthday', 'quickest', 'juice', 'elderly', 'helpful', 'reason',
    'interfere', 'orange', 'horrible', 'muddle', 'fancy', 'treat', 'communicate', 'blow', 'pathetic', 'zipper', 'lazy',
    'yellow', 'gun', 'guess', 'self', 'chubby', 'mean', 'muddled', 'awesome', 'succeed', 'hushed', 'ladybug',
    'milk', 'bruise', 'month', 'underwear', 'knock', 'smoke', 'doubtful', 'credit', 'worthless', 'well-groomed', 'loose',
    'evanescent', 'close', 'equal', 'descriptive', 'butter', 'intelligent', 'whimsical', 'cherry', 'spark', 'volatile', 'hallowed',
    'robust', 'hurried', 'terrific', 'huge', 'books', 'chess', 'oil', 'cave', 'office', 'nonchalant', 'real',
    'numberless', 'marked', 'back', 'scrub', 'quartz', 'unwritten', 'null', 'burn', 'unruly', 'stay', 'pass',
    'slimy', 'mushy', 'accept', 'wish', 'annoyed', 'pretty', 'parcel', 'tooth', 'ashamed', 'jewel', 'laughable',
    'loaf', 'utopian', 'plan', 'drum', 'van', 'vein', 'wealth', 'wiry', 'past', 'awful', 'bathe',
    'humdrum', 'copy', 'efficacious', 'wool', 'snow', 'beautiful', 'amount', 'dam', 'cagey', 'great', 'adaptable',
    'trot', 'harbor', 'injure', 'trucks', 'white', 'jobless', 'visit', 'heavenly', 'resonant', 'massive', 'sky',
    'creator', 'spring', 'ultra', 'frail', 'queue', 'table', 'unique', 'mug', 'regular', 'rake', 'theory',
    'deserve', 'panoramic', 'macabre', 'stiff', 'support', 'cheat', 'fearless', 'extra-large', 'moon', 'friends', 'inexpensive',
    'callous', 'offend', 'hilarious', 'hypnotic', 'deserted', 'general', 'tumble', 'board', 'blush', 'shoes', 'zebra',
    'clover', 'volleyball', 'instruct', 'fact', 'glib', 'nonstop', 'knotty', 'slow', 'sock', 'flavor', 'number',
    'strange', 'wail', 'religion', 'gifted', 'absorbing', 'punch', 'frame', 'unwieldy', 'rub', 'worry', 'male',
    'effect', 'guarantee', 'jeans', 'bouncy', 'terrify', 'dolls', 'marvelous', 'receive', 'dad', 'coordinated', 'unfasten',
    'colossal', 'pump', 'giants', 'empty', 'quizzical', 'gullible', 'able', 'shiver', 'beginner', 'bone', 'admire',
    'eatable', 'abnormal', 'wakeful', 'moaning', 'chilly', 'romantic', 'helpless', 'relieved', 'learned', 'interest', 'unknown',
    'snatch', 'yak', 'debt', 'rain', 'pest', 'petite', 'sharp', 'meat', 'control', 'complete', 'continue',
    'pen', 'men', 'ignore', 'discreet', 'force', 'afraid', 'adamant', 'head', 'expansion', 'hate', 'cook',
    'wrench', 'idea', 'stormy', 'curvy', 'quarrelsome', 'advice', 'land', 'grumpy', 'giraffe', 'trains', 'own',
    'worm', 'double', 'determined', 'afterthought', 'bury', 'boundary', 'probable', 'queen', 'dream', 'forgetful', 'driving',
    'overconfident', 'synonymous', 'blot', 'overflow', 'possessive', 'watery', 'snotty', 'bumpy', 'fumbling', 'second', 'hum',
    'political', 'mark', 'wind', 'hulking', 'playground', 'downtown', 'one', 'inform', 'writer', 'honey', 'outrageous',
    'willing', 'remain', 'minor', 'abrupt', 'prevent', 'dispensable', 'absurd', 'report', 'plucky', 'stereotyped', 'impress',
    'song', 'motion', 'chemical', 'magnificent', 'activity', 'stir', 'mitten', 'dynamic', 'drown', 'provide', 'stone',
    'colour', 'doubt', 'switch', 'gray', 'thinkable', 'mailbox', 'cellar', 'scared', 'file', 'fuzzy', 'scream',
    'phobic', 'safe', 'frighten', 'dangerous', 'cry', 'hapless', 'loud', 'finicky', 'grouchy', 'vivacious', 'drip',
    'concerned', 'belligerent', 'ray', 'mint', 'literate', 'efficient', 'combative', 'earthy', 'fit', 'enchanting', 'slope',
    'rigid', 'bucket', 'sweet', 'four', 'small', 'fire', 'grass', 'jumbled', 'laugh', 'special', 'discussion',
    'memory', 'lighten', 'truthful', 'ambitious', 'sleepy', 'pretend', 'art', 'gold', 'rings', 'rhythm', 'suggest',
    'organic', 'arrogant', 'ear', 'can', 'handle', 'salty', 'actually', 'town', 'silent', 'repair', 'succinct',
    'liquid', 'practice', 'girl', 'command', 'lethal', 'unarmed', 'freezing', 'digestion', 'cultured', 'limit', 'side',
    'metal', 'increase', 'desire', 'heap', 'boy', 'appliance', 'fold', 'shoe', 'chop', 'ablaze', 'hard',
    'company', 'ill', 'fool', 'bubble', 'match', 'sofa', 'certain', 'handy', 'pies', 'oranges', 'soggy',
    'week', 'vigorous', 'drawer', 'old-fashioned', 'quarter', 'winter', 'save', 'incandescent', 'uneven', 'leg', 'texture',
    'parsimonious', 'damage', 'cake', 'berserk', 'wine', 'trade', 'tested', 'payment', 'nation', 'rock', 'hurry',
    'spotty', 'flow', 'exchange', 'necessary', 'paper', 'scrawny', 'repulsive', 'outstanding', 'drink', 'nifty', 'skinny',
    'cars', 'base', 'well-off', 'simplistic', 'frog', 'night', 'hideous', 'many', 'trap', 'faint', 'lumpy',
    'puncture', 'flowers', 'key', 'abhorrent', 'zephyr', 'godly', 'chase', 'toad', 'rabid', 'responsible', 'futuristic',
    'left', 'air', 'childlike', 'clumsy', 'abject', 'spare', 'accessible', 'calculator', 'unsuitable', 'bore', 'delicious',
    'teeth', 'baseball', 'examine', 'nest', 'voiceless', 'remove', 'sticky', 'lively', 'doll', 'vagabond', 'wicked',
    'mine', 'ratty', 'painstaking', 'steady', 'alarm', 'ready', 'mice', 'fair', 'tricky', 'start', 'jazzy',
    'unlock', 'frogs', 'two', 'venomous', 'scattered', 'aboard', 'needle', 'jam', 'soap', 'wild', 'dinosaurs',
    'ban', 'spiritual', 'connect', 'courageous', 'houses', 'hover', 'want', 'smash', 'handsomely', 'allow', 'oval',
    'happy', 'six', 'label', 'explode', 'scent', 'encourage', 'mom', 'oven', 'ajar', 'sheep', 'travel',
    'lettuce', 'uncle', 'trouble', 'mouth', 'improve', 'ink', 'equable', 'capricious', 'end', 'bare', 'swanky',
    'flower', 'old', 'towering', 'peep', 'name', 'elbow', 'brush', 'ruddy', 'bloody', 'throat', 'common',
    'space', 'smooth', 'wrong', 'rare', 'mourn', 'nine', 'parched', 'geese', 'imported', 'add', 'run',
    'jump', 'brawny', 'measly', 'serious', 'pie', 'press', 'gruesome', 'well-made', 'snobbish', 'dramatic', 'wax',
    'high-pitched', 'irritating', 'dislike', 'trashy', 'branch', 'embarrassed', 'detail', 'dapper', 'spiffy', 'zany', 'uninterested',
    'earthquake', 'flowery', 'feeling', 'illustrious', 'skip', 'food', 'kitty', 'green', 'delightful', 'sore', 'maniacal',
    'volcano', 'license', 'sudden', 'exciting', 'exist', 'royal', 'curve', 'cheer', 'war', 'didactic', 'train',
    'false', 'superficial', 'x-ray', 'smelly', 'aback', 'elated', 'zippy', 'kaput', 'sip', 'teeny', 'foot',
    'piquant', 'reply', 'knowledge', 'plantation', 'gate', 'fade', 'nimble', 'edge', 'ring', 'selection', 'extra-small',
    'woozy', 'confess', 'avoid', 'sea', 'chivalrous', 'bat', 'steam', 'electric', 'profit', 'squalid', 'ants',
    'vessel', 'spell', 'drain', 'legal', 'careless', 'receptive', 'glorious', 'melt', 'flaky', 'discover', 'disillusioned',
    'hope', 'womanly', 'healthy', 'true', 'divergent', 'apparatus', 'wide', 'monkey', 'thankful', 'sincere', 'squirrel',
    'witty', 'cracker', 'listen', 'distribution', 'tendency', 'retire', 'ordinary', 'friction', 'popcorn', 'peck', 'trousers',
    'voyage', 'coach', 'baby', 'cold', 'acceptable', 'waste', 'check', 'blue', 'naughty', 'phone', 'stove',
    'painful', 'laborer', 'flashy', 'reject', 'wrist', 'type', 'ugliest', 'present', 'sidewalk', 'magenta', 'busy',
    'blink', 'wheel', 'charge', 'fortunate', 'alive', 'friendly', 'annoy', 'scorch', 'cluttered', 'magic', 'tire',
    'trail', 'judge', 'sign', 'obeisant', 'lonely', 'ghost', 'repeat', 'anger', 'beam', 'load', 'jittery',
    'print', 'motionless', 'abashed', 'fetch', 'kittens', 'thoughtful', 'accurate', 'snail', 'island', 'smile', 'spoon',
    'representative', 'future', 'spray', 'alert', 'eager', 'finger', 'salt', 'flesh', 'lumber', 'minister', 'push',
    'account', 'tedious', 'eminent', 'punishment', 'level', 'robin', 'swing', 'unaccountable', 'powder', 'notebook', 'squeeze',
    'zoo', 'like', 'rebel', 'sweater', 'cynical', 'squealing', 'square', 'crayon', 'frightening', 'value', 'plastic',
    'weak', 'solid', 'spooky', 'door', 'count', 'circle', 'talk', 'guttural', 'hunt', 'argument', 'fixed',
    'hose', 'children', 'move', 'spiky', 'joyous', 'trick', 'direful', 'jumpy', 'industrious', 'obtain', 'unable',
    'bump', 'love', 'canvas', 'farm', 'depend', 'lunchroom', 'mass', 'narrow', 'bear', 'lunch', 'makeshift',
    'full', 'useless', 'paint', 'purring', 'chew', 'guarded', 'thin', 'intend', 'better', 'humor', 'adorable',
    'tug', 'suggestion', 'industry', 'rescue', 'sick', 'park', 'ancient', 'vengeful', 'fragile', 'brown', 'elastic',
    'maid', 'weigh', 'first', 'psychedelic', 'please', 'economic', 'long-term', 'whip', 'preach', 'collect', 'signal',
    'workable', 'puzzled', 'scandalous', 'crash', 'nippy', 'sprout', 'rot', 'tank', 'billowy', 'nondescript', 'hang',
    'roof', 'ripe', 'suppose', 'knowing', 'lie', 'glistening', 'blushing', 'optimal', 'irate', 'pollution', 'lock',
    'careful', 'wistful', 'ignorant', 'boot', 'rule', 'yarn', 'penitent', 'stamp', 'mist', 'bridge', 'furniture',
    'fork', 'coast', 'nappy', 'toes', 'redundant', 'scary', 'fabulous', 'voracious', 'egg', 'noisy', 'absorbed',
    'short', 'slippery', 'grin', 'pin', 'exultant', 'crooked', 'dime', 'clammy', 'box', 'wood', 'husky',
    'cycle', 'illegal', 'veil', 'faithful', 'purple', 'locket', 'linen', 'annoying', 'foamy', 'meal', 'coherent',
    'jail', 'settle', 'handsome', 'important', 'fax', 'dress', 'dare', 'pet', 'woebegone', 'field', 'statement',
    'skate', 'excite', 'stretch', 'tremble', 'boorish', 'icky', 'beef', 'prick', 'government', 'heady', 'productive',
    'pleasure', 'satisfy', 'early', 'telephone', 'jelly', 'seed', 'yell', 'rest', 'dirt', 'tacky', 'marry',
    'anxious', 'treatment', 'splendid', 'shelter', 'fruit', 'bite-sized', 'vanish', 'obese', 'growth', 'sparkling', 'analyze',
    'doctor', 'caption', 'historical', 'man', 'ducks', 'receipt', 'barbarous', 'auspicious', 'befitting', 'purpose', 'shelf',
    'sparkle', 'wry', 'giant', 'cat', 'post', 'honorable', 'oafish', 'gratis', 'sack', 'passenger', 'grandfather',
    'stem', 'beg', 'educate', 'noise', 'greet', 'aspiring', 'destroy', 'dirty', 'spiteful', 'cushion', 'shallow',
    'grip', 'innate', 'brake', 'waggish', 'available', 'lip', 'crazy', 'observant', 'itchy', 'shaky', 'mute',
    'imagine', 'hammer', 'rough', 'bang', 'include', 'skirt', 'gather', 'groan', 'day', 'aloof', 'curious',
    'event', 'horses', 'suspect', 'house', 'hour', 'brave', 'confuse', 'excuse', 'hesitant', 'itch', 'guiltless',
    'ten', 'degree', 'soft', 'shocking', 'bedroom', 'good', 'bolt', 'zesty', 'cooing', 'duck', 'agreeable',
    'pail', 'word', 'damaging', 'addicted', 'spotted', 'defiant', 'earn', 'soup', 'garrulous', 'cheerful', 'distance',
    'crush', 'tangible', 'sable', 'cheese', 'road', 'picture', 'cure', 'cub', 'pets', 'light', 'cough',
    'nice', 'hospitable', 'truculent', 'berry', 'pig', 'relax', 'notice', 'delay', 'stain', 'daughter', 'ocean',
    'plot', 'front', 'invention', 'hospital', 'physical', 'half', 'rainstorm', 'impolite', 'march', 'shop', 'abandoned',
    'dizzy', 'silly', 'wink', 'snails', 'lace', 'invincible', 'waiting', 'gaping', 'umbrella', 'kiss', 'curved',
    'lying', 'tin', 'tawdry', 'unhealthy', 'addition', 'breezy', 'loving', 'sugar', 'meeting', 'compete', 'dust',
    'drop', 'rustic', 'guard', 'launch', 'toothbrush', 'disapprove', 'reward', 'trace', 'oatmeal', 'swim', 'talented',
    'ruthless', 'nutty', 'educated', 'hand', 'lacking', 'tangy', 'holistic', 'touch', 'refuse', 'glass', 'bag',
    'exclusive', 'wretched', 'secret', 'jealous', 'reaction', 'show', 'warlike', 'attempt', 'race', 'overrated', 'servant',
    'sassy', 'scold', 'perpetual', 'psychotic', 'gaudy', 'boast', 'basket', 'tasteful', 'tasteless', 'tiny', 'possess',
    'test', 'chin', 'miscreant', 'secretary', 'release', 'reign', 'sloppy', 'spectacular', 'pine', 'dusty', 'need',
    'basketball', 'surround', 'glossy', 'high', 'private', 'aromatic', 'onerous', 'permissible', 'miniature', 'error', 'nut',
    'jaded', 'twist', 'late', 'wonderful', 'market', 'return', 'previous', 'fix', 'nod', 'permit', 'opposite',
    'breakable', 'pancake', 'middle', 'insect', 'destruction', 'knife', 'testy', 'warm', 'attend', 'decay', 'cattle',
    'bad', 'elite', 'boundless', 'kindly', 'understood', 'impulse', 'cakes', 'strap', 'standing', 'sleep', 'example',
    'erratic', 'defeated', 'deer', 'tight', 'measure', 'haircut', 'broken', 'border', 'flagrant', 'letters', 'design',
    'longing', 'compare', 'blue-eyed', 'wipe', 'suffer', 'five', 'kindhearted', 'materialistic', 'overwrought', 'nebulous', 'bed',
    'wall', 'grateful', 'title', 'labored', 'harsh', 'keen', 'spiders', 'numerous', 'horse', 'fertile', 'filthy',
    'blood', 'exotic', 'sticks', 'potato', 'changeable', 'shape', 'hydrant', 'earth', 'recognise', 'cause', 'moan',
    'grain', 'imaginary', 'immense', 'fence', 'languid', 'aggressive', 'wet', 'borrow', 'army', 'plough', 'idiotic',
    'sand', 'ask', 'bleach', 'brash', 'thread', 'depressed', 'violent', 'amuse', 'weight', 'cactus', 'story',
    'thunder', 'flame', 'sweltering', 'expand', 'desk', 'committee', 'yard', 'outgoing', 'aftermath', 'celery', 'chalk',
    'point', 'seal', 'homely', 'decisive', 'planes', 'mellow', 'grieving', 'exuberant', 'hanging', 'familiar', 'grubby',
    'blind', 'majestic', 'cooperative', 'stuff', 'little', 'whistle', 'funny', 'change', 'calculating', 'badge', 'enthusiastic',
    'reproduce', 'room', 'fall', 'death', 'act', 'bomb', 'flood', 'miss', 'obsequious', 'concentrate', 'donkey',
    'crack', 'scene', 'wave', 'rice', 'diligent', 'easy', 'icy', 'boring', 'spurious', 'rhyme', 'tall',
    'way', 'entertain', 'perform', 'fat', 'periodic', 'gusty', 'tearful', 'faulty', 'fresh', 'water', 'uttermost',
    'supply', 'proud', 'flippant', 'knowledgeable', 'prose', 'railway', 'supreme', 'page', 'ragged', 'peace', 'curtain',
    'troubled', 'bee', 'comfortable', 'substance', 'rob', 'young', 'juvenile', 'pack', 'station', 'polish', 'beds',
    'accidental', 'whole', 'reduce', 'tray', 'assorted', 'apathetic', 'sturdy', 'craven', 'serve', 'punish', 'recess',
    'plants', 'letter', 'language', 'creepy', 'toothpaste', 'wash', 'things', 'remarkable', 'scintillating', 'hands', 'wing',
    'festive', 'scatter', 'claim', 'reflective', 'symptomatic', 'existence', 'concern', 'harm', 'heal', 'murky', 'drab',
    'fascinated', 'insurance', 'division', 'attraction', 'cruel', 'scare', 'obedient', 'detect', 'carriage', 'nosy', 'unadvised',
    'program', 'melted', 'morning', 'afternoon', 'lake', 'nervous', 'dry', 'visitor', 'search', 'crown', 'momentous',
    'deeply', 'eye', 'clear', 'encouraging', 'flash', 'teeny-tiny', 'truck', 'overjoyed', 'thank', 'steel', 'fasten',
    'third', 'carry', 'enter', 'disturbed', 'malicious', 'neighborly', 'turn', 'alleged', 'son', 'stale', 'teaching',
    'knot', 'channel', 'same', 'kind', 'hair', 'toothsome', 'zonked', 'astonishing', 'uppity', 'thought', 'crow',
    'home', 'irritate', 'amused', 'functional', 'sniff', 'approval', 'tree', 'grandmother', 'elfin', 'lovely', 'stroke',
    'skin', 'respect', 'daily', 'swift'
];

var used_words_num = [];

var current_word;
var maintext = "";
var guessedWordsCounter = 0;
var errorCounter = 0;

var canvas = document.getElementById("maze");
var ctx = this.canvas.getContext("2d");
ctx.lineWidth = 10;

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

function drawCircle(x, y, r) {
    ctx.beginPath()
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.stroke();
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function setMainText() {
    document.getElementById("maintext").textContent = maintext;
}

function mainAlgo(char) {
    let guessed = false;
    for (let x = 0; x < current_word.length; ++x) {
        if (char == current_word[x]) {
            const charArr = maintext.split('');
            charArr[x] = char;
            maintext = charArr.join('');
            ++guessedWordsCounter;
            guessed = true;
        }
    }
    if (!guessed) {
        if (drawHangman() == false) {
            // LOSE
            endGame(false);
        }
    }
    setMainText();
    if (guessedWordsCounter == current_word.length) {
        // WIN
        endGame(true);
    }
}

function btnClick() {

    element = document.getElementById(this.id);

    if (element != null) {
        if (element.classList.contains("active")) {
            element.classList.remove("active");
            element.style.transform = "translate(2px, 2px)";
            element.style.boxShadow = color_1 + " 2px 2px 0 0";
            element.style.backgroundColor = color_0;
            mainAlgo(this.id);
        }
    }

}

function btnKeyClick(id) {
    element = document.getElementById(id);
    if (element != null) {
        if (element.classList.contains("active")) {
            element.classList.remove("active");
            element.style.transform = "translate(2px, 2px)";
            element.style.boxShadow = color_1 + " 2px 2px 0 0";
            element.style.backgroundColor = color_0;
            mainAlgo(id);
        }
    }
}

document.addEventListener('keydown', (event) => {
    let name = event.key;
    let keycode = event.keyCode;
    btnKeyClick(name.toUpperCase());
    if (name == "Enter" || keycode == 32) {
        if (document.getElementById("enter")) {
            onloadSite();
        }
    }
}, false);

function createButtons(str) {
    let btn = document.createElement("button");
    btn.id = str;
    btn.textContent = str;
    btn.classList.add("btn");
    btn.classList.add("active");
    btn.addEventListener('click', btnClick);

    document.getElementById("cont").appendChild(btn);
}

function onloadSite() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    document.getElementById("maintext").style.color = color_1;
    guessedWordsCounter = 0;
    errorCounter = 0;

    const elements = document.getElementsByClassName("btn");
    const elementsArr = Array.from(elements);
    elementsArr.forEach((element) => {
        element.parentNode.removeChild(element);
    })

    for (let x = 0; x < alphabet.length; ++x) {
        createButtons(alphabet[x]);
    }

    do {
        let temp = getRandomInt(words.length);
        used_words_num.push(temp)
        current_word = words[temp].toUpperCase();
        //console.log(used_words_num);
    } while (false)

    maintext = "";
    for (let x = 0; x < current_word.length; ++x) {
        maintext += "_";
    }

    setMainText();

    drawLine(50, 250, 250, 250);
    drawLine(90, 250, 90, 95);
    drawLine(90, 100, 155, 100);
    /*
    drawLine(150, 100, 150, 130);
    drawCircle(150, 150, 20);
    drawLine(150, 170, 150, 215);
    drawLine(150, 180, 130, 200);
    drawLine(150, 180, 170, 200);
    drawLine(150, 210, 130, 230);
    drawLine(150, 210, 170, 230);
    */
}

function endGame(win) {
    // Delete all buttons
    const elements = document.getElementsByClassName("btn");
    const elementsArr = Array.from(elements);
    elementsArr.forEach((element) => {
        element.parentNode.removeChild(element);
    })

    if (win) {
        document.getElementById("maintext").style.color = color_6;
    }
    else {
        document.getElementById("maintext").style.color = color_5;
        maintext = current_word;
        setMainText();
    }

    // Create "next word" button
    let btn = document.createElement("button");
    btn.textContent = "NEXT WORD";
    btn.id = "enter";
    btn.classList.add("btn");
    btn.classList.add("active");
    btn.addEventListener('click', onloadSite);
    document.getElementById("cont").appendChild(btn);
}

function drawHangman() {
    switch (errorCounter) {
        case 0:
            drawLine(150, 100, 150, 130);
            break;
        case 1:
            drawCircle(150, 150, 20);
            break;
        case 2:
            drawLine(150, 170, 150, 215);
            break;
        case 3:
            drawLine(150, 180, 130, 200);
            break;
        case 4:
            drawLine(150, 180, 170, 200);
            break;
        case 5:
            drawLine(150, 210, 130, 230);
            break;
        case 6:
            drawLine(150, 210, 170, 230);
            return false;
        default:
            return false;
    }

    ++errorCounter;
    return true;
}