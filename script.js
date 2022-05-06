/**
 * Convert absolute CSS numerical values to pixels.
 *
 * @link https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#numbers_lengths_and_percentages
 *
 * @param {string} cssValue
 * @param {null|HTMLElement} target Used for relative units.
 * @return {*}
 */
window.convertCssUnit = function (cssValue, target) {

    target = target || document.body;

    const supportedUnits = {

        // Absolute sizes
        'px': value => value,
        'cm': value => value * 38,
        'mm': value => value * 3.8,
        'q': value => value * 0.95,
        'in': value => value * 96,
        'pc': value => value * 16,
        'pt': value => value * 1.333333,

        // Relative sizes
        'rem': value => value * parseFloat(getComputedStyle(document.documentElement).fontSize),
        'em': value => value * parseFloat(getComputedStyle(target).fontSize),
        'vw': value => value / 100 * window.innerWidth,
        'vh': value => value / 100 * window.innerHeight,

        // Times
        'ms': value => value,
        's': value => value * 1000,

        // Angles
        'deg': value => value,
        'rad': value => value * (180 / Math.PI),
        'grad': value => value * (180 / 200),
        'turn': value => value * 360

    };

    // Match positive and negative numbers including decimals with following unit
    const pattern = new RegExp(`^([\-\+]?(?:\\d+(?:\\.\\d+)?))(${Object.keys(supportedUnits).join('|')})$`, 'i');

    // If is a match, return example: [ "-2.75rem", "-2.75", "rem" ]
    const matches = String.prototype.toString.apply(cssValue).trim().match(pattern);

    if (matches) {
        const value = Number(matches[1]);
        const unit = matches[2].toLocaleLowerCase();

        // Sanity check, make sure unit conversion function exists
        if (unit in supportedUnits) {
            return supportedUnits[unit](value);
        }
    }

    return cssValue;

};

randomfirst = ['Magic', 'Fantastic', 'Fancy', 'Sassy', 'Snazzy', 'Pretty', 'Cute', 'Pirate', 'Ninja', 'Zombie', 'Robot', 'Radical', 'Urban', 'Cool', 'Hella', 'Sweet', 'Awful', 'Double', 'Triple', 'Turbo', 'Techno', 'Disco', 'Electro', 'Dancing', 'Wonder', 'Mutant', 'Space', 'Science', 'Medieval', 'Future', 'Captain', 'Bearded', 'Lovely', 'Tiny', 'Big', 'Fire', 'Water', 'Frozen', 'Metal', 'Plastic', 'Solid', 'Liquid', 'Moldy', 'Shiny', 'Happy', 'Happy Little', 'Slimy', 'Tasty', 'Delicious', 'Hungry', 'Greedy', 'Lethal', 'Professor', 'Doctor', 'Power', 'Chocolate', 'Crumbly', 'Choklit', 'Righteous', 'Glorious', 'Mnemonic', 'Psychic', 'Frenetic', 'Hectic', 'Crazy', 'Royal', 'El', 'Von']
randomlast = ['Cookie', 'Biscuit', 'Muffin', 'Scone', 'Cupcake', 'Pancake', 'Chip', 'Sprocket', 'Gizmo', 'Puppet', 'Mitten', 'Sock', 'Teapot', 'Mystery', 'Baker', 'Cook', 'Grandma', 'Click', 'Clicker', 'Spaceship', 'Factory', 'Portal', 'Machine', 'Experiment', 'Monster', 'Panic', 'Burglar', 'Bandit', 'Booty', 'Potato', 'Pizza', 'Burger', 'Sausage', 'Meatball', 'Spaghetti', 'Macaroni', 'Kitten', 'Puppy', 'Giraffe', 'Zebra', 'Parrot', 'Dolphin', 'Duckling', 'Sloth', 'Turtle', 'Goblin', 'Pixie', 'Gnome', 'Computer', 'Pirate', 'Ninja', 'Zombie', 'Robot']

function b64Encode(str) {
    return window.btoa(unescape(encodeURIComponent(str)));
};
function b64Decode(str) {
    return decodeURIComponent(escape(window.atob(str)));
};
var instances = 0;

var biglist = ['', 'Thousand', 'Million', 'Billion', 'Trillion', 'Quadrillion', 'Quintillion', 'Sextillion', 'Septillion', 'Octillion', 'Nonillion', 'Decillion'];
var roundOffTo = function (num, factor) {
    if (factor === void 0) { factor = 1; }
    var quotient = num / factor;
    var res = Math.floor(quotient) * factor;
    return res;
};
function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}
function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: (evt.clientX - rect.left) / (rect.right - rect.left) * canvas.width,
        y: (evt.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height
    };
}
var browserName = (function (agent) {
    switch (true) {
        case agent.indexOf("edge") > -1: return "MS Edge";
        case agent.indexOf("edg/") > -1: return "Edge ( chromium based)";
        //@ts-ignore
        case agent.indexOf("opr") > -1 && !!window.opr: return "Opera";
        //@ts-ignore
        case agent.indexOf("chrome") > -1 && !!window.chrome: return "Chrome";
        case agent.indexOf("trident") > -1: return "MS IE";
        case agent.indexOf("firefox") > -1: return "Mozilla Firefox";
        case agent.indexOf("safari") > -1: return "Safari";
        default: return "other";
    }
})(window.navigator.userAgent.toLowerCase());

function toShortScale(number) {
    var rounded = Math.floor(number);
    var length = rounded.toString().length;
    var index = roundOffTo(length - 1, 3) / 3;
    var numbertodivide = '1';
    for (var i = 0; i < roundOffTo(length - 1, 3); i++) {
        numbertodivide += '0';
    }
    return (+(number / parseInt(numbertodivide)).toFixed(2) + " " + biglist[index]);
}
function getPrice(base, amount) {
    return Math.ceil((1.15 ** amount) * base)
}
function get_random(list) {
    return list[Math.floor((Math.random() * list.length))];
}


var cps = 0;
var cpss = []
var averageCps = 0;

document.addEventListener('click', () => cps++)

setInterval(() => {
    cpss.push(cps)
    cps = 0;
    if (cpss.length > 5) {
        cpss.shift()
    }
    averageCps = cpss.reduce((a, c) => a + c) / cpss.length;
}, 1000)


var Game = {};
var Assets = {};

function HtmlEncode(s) {
    var el = document.createElement("div");
    el.innerText = el.textContent = s;
    s = el.innerHTML;
    return s;
}
Assets.init = () => {
    Assets.clickShape = () => c({ tag: 'div', id: 'shape', children: [c({ tag: 'img', src: 'img/square.png' })] })
    Assets.shapeCount = () => c({ tag: 'h1', id: 'shapecount' })
    Assets.spsCount = () => c({ tag: 'h2', id: 'sps' })
    Assets.nameSelector = () => c({ tag: 'h2', id: 'nameSelector' })
}

Game.load = () => {

    Game.alert = (message) => {
        f('#alert').classList.add('alert-on');
        f('#alert').setText(message);
        setTimeout(() => {f('#alert').classList.remove('alert-on')}, 3000)
    }


    Game.shapeRotation = 0;

    Game.showChangelog = () => {
        document.querySelector('#changelogdiv').style.display = 'block'
    }

    f('#clickdiv').appendChild(Assets.clickShape())
    f('#clickdiv').appendChild(Assets.shapeCount())
    f('#clickdiv').appendChild(Assets.spsCount())
    f('#clickdiv').appendChild(Assets.nameSelector())


    Game.bot = class {
        constructor(name, baseprice, sps, amount, buyFunc,) {
            this.name = name
            this.baseprice = baseprice
            this.sps = sps
            this.amount = amount
            this.obj = () => c({ tag: 'div', id: `bot-${replaceAll(name, ' ', '')}`, textContent: name, classList: 'bot', children: [c({ tag: 'span', classList: 'botprice', textContent: `${toShortScale(getPrice(baseprice, amount()))} Shapes` }), c({ tag: 'span', classList: 'botamount', textContent: amount() }), c({ tag: 'span', classList: 'spsbot', textContent: `${sps} shapes/s` })] })
            this.buyFunc = buyFunc;
        }
    }
    Game.upgrade = class {
        constructor(name, requirement, price, desc, img, effects) {
            this.name = name;
            this.price = price;
            this.desc = desc;
            this.requirement = requirement;
            this.effects = effects;
            this.obj = () => {
                var newObj = c({ tag: 'div', classList: 'upgrade', id: `upgrade-${replaceAll(name, ' ', '')}`, children: [c({ tag: 'img', src: img })] });
                newObj.addEventListener('mouseenter', () => {
                    f('#hover > #hoverheader').setText(name);
                    f('#hover > #hoverpara').setText(desc);
                    f('#hover > #hoverprice').setText(`${toShortScale(price)} Shapes`)
                    document.querySelector('#hover').style.display = 'block';
                })
                newObj.addEventListener('mouseleave', () => {
                    document.querySelector('#hover').style.display = 'none';
                })
                return newObj
            }

        }
    }
    Game.achievement = class {
        constructor(name, requirement, requirementstring, rarity) {
            this.name = name;
            this.requirement = requirement;
            this.rarity = rarity;
            this.requirementstring = requirementstring;
            this.obj = () => c({
                tag: 'span', classList: 'acmt',
                children: [
                    c({tag: 'span', classList: `acmt-${requirement() ? rarity : 'no'} acmt-name`, textContent: rarity === 'secret' ? (requirement() ? 'SECRET: ' + name : 'SECRET: ' + '???') : (requirement() ? name : '???')}),
                    c({tag: 'span', classList: ``, textContent: ' - '}),
                    c({tag: 'span', classList: `acmt-require`, textContent: requirement() ? requirementstring : '???'}),
                    c({tag: 'span', innerHTML: '<br>'})
                ]
            })
        }
    }

    Game.bots = [
        new Game.bot('Cursor', 15, 0.1, () => Game.cursors.toString(), () => { if (Game.shapes >= getPrice(Game.bots[0].baseprice, Game.cursors)) { Game.shapes -= getPrice(Game.bots[0].baseprice, Game.cursors); Game.cursors++; } }),
        new Game.bot('Ruler', 100, 1, () => Game.rulers.toString(), () => { if (Game.shapes >= getPrice(Game.bots[1].baseprice, Game.rulers)) { Game.shapes -= getPrice(Game.bots[1].baseprice, Game.rulers); Game.rulers++; } }),
        new Game.bot('Builder', 1500, 15, () => Game.builders.toString(), () => { if (Game.shapes >= getPrice(Game.bots[2].baseprice, Game.builders)) { Game.shapes -= getPrice(Game.bots[2].baseprice, Game.builders); Game.builders++; } }),
        new Game.bot('Factory', 30000, 45, () => Game.factorys.toString(), () => { if (Game.shapes >= getPrice(Game.bots[3].baseprice, Game.factorys)) { Game.shapes -= getPrice(Game.bots[3].baseprice, Game.factorys); Game.factorys++; } }),
        new Game.bot('Distrubution', 150000, 250, () => Game.distrubutions.toString(), () => { if (Game.shapes >= getPrice(Game.bots[4].baseprice, Game.distrubutions)) { Game.shapes -= getPrice(Game.bots[4].baseprice, Game.distrubutions); Game.distrubutions++; } }),
        new Game.bot('Bank', 1500000, 1100, () => Game.banks.toString(), () => { if (Game.shapes >= getPrice(Game.bots[5].baseprice, Game.banks)) { Game.shapes -= getPrice(Game.bots[5].baseprice, Game.banks); Game.banks++; } })

    ]

    Game.totalUpgrades = [
        new Game.upgrade('Bisect', () => Game.clicks > 5, 100, 'Double the amount of shapes you get per click.', 'img/upgrades/bisect.png', () => { Game.boosts.clickMult *= 2 }),
        new Game.upgrade('Bisect Mk2', () => Game.clicks > 200, 500, 'Double the amount of shapes you get per click.\nTechnology upgraded from the previous version.', 'img/upgrades/bisectmk2.png', () => { Game.boosts.clickMult *= 2 }),
        new Game.upgrade('Moral Support', () => Game.clicks > 100, 10000, 'Encourages your bots to work more! Increases sps by 5%', 'img/upgrades/moralsupport.png', () => { Game.boosts.endMult += 0.05}),
        new Game.upgrade('Wood Mouse', () => Game.cursors > 5 && Game.clicks > 500, 10000, 'Encourages your bots to work harder! Gain +1% of your sps per click.', 'img/upgrades/woodmouse.png', () => { Game.boosts.clickUp += Game.sps * 0.01 }),
        new Game.upgrade('Iron Mouse', () => Game.cursors > 10 && Game.clicks > 500, 100000, 'Encourages your bots to work eve harder! Gain another +1% of your sps per click.', 'img/upgrades/ironmouse.png', () => {Game.boosts.clickUp += Game.sps * 0.01}),
        new Game.upgrade('Gold Mouse', () => Game.cursors > 15 && Game.clicks > 500, 1000000, 'Encourages your bots to work eve harder! Gain another +1% of your sps per click.', 'img/upgrades/goldmouse.png', () => { Game.boosts.clickUp += Game.sps * 0.01}),
        new Game.upgrade('Diamond Mouse', () => Game.cursors > 20 && Game.clicks > 500, 10000000, 'Encourages your bots to work eve harder! Gain another +1% of your sps per click', 'img/upgrades/diamondmouse.png', () => { Game.boosts.clickUp += Game.sps * 0.01}),

        new Game.upgrade('Protractor', () => Game.rulers > 0, 500, 'Make shapes more accurate. Doubles the amount of shapes a ruler produces.', 'img/upgrades/protractor.png', () => { Game.boosts.rulerMult *= 2 }),
        new Game.upgrade('Longer Rulers', () => Game.rulers > 5, 3000, 'Makes rulers longer. Doubles ruler sps.', 'img/upgrades/longerrulers.png', () => { Game.boosts.rulerMult *= 2 }),
     
        new Game.upgrade('Double Click', () => Game.cursors > 0, 250, 'Makes cursors click twice.', 'img/upgrades/doubleclick.png', () => { Game.boosts.cursorMult *= 2 }),
        new Game.upgrade('Faster Fingers', () => Game.cursors > 5, 1000, 'Makes cursors click two times faster', 'img/upgrades/fasterfingers.png', () => { Game.boosts.cursorMult *= 2 }),

        new Game.upgrade('Better Tools', () => Game.builders > 0, 5000, 'Give builders better tools. Doubles builders\' sps.', 'img/upgrades/bettertools.png', () => { Game.boosts.builderMult *= 2 }),
        new Game.upgrade('Stainless Steel Casing', () => Game.builders >= 5, 30000, 'Gives builders a better casing. Doubles builders\' sps.', 'img/upgrades/stainlesssteelcasing.png', () => { Game.boosts.builderMult *= 2 }),

        new Game.upgrade('Stronger Machines', () => Game.factorys > 0, 100000, 'Makes machines in factories have more strength. Doubles factories\' sps.', 'img/upgrades/strongermachines.png', () => { Game.boosts.factoryMult *= 2 }),
        new Game.upgrade('Air Filters', () => Game.factorys >= 5, 500000, 'Removes 10% of greenhouse gasses produced by factories, allowing them to go 2x faster. Doubles factories\' sps.', 'img/upgrades/airfilters.png', () => { Game.factoryMult *= 2 }),

        new Game.upgrade('Helping Hands', () => Game.distrubutions > 0, 500000, 'Adds helping hands to your distrubutions, doubles distrubution sps.', 'img/upgrades/helpinghands.png', () => { Game.boosts.distrubutionMult *= 2 }),
        new Game.upgrade('Bigger Forklifts', () => Game.distrubutions >= 5, 2500000, 'Makes forklifts bigger multiplying distrubution sps by 2.', 'img/upgrades/biggerforklifts.png', () => { Game.boosts.distrubutionMult *= 2 }),
      
        new Game.upgrade('Credit Cards', () => Game.banks > 0, 10000000, 'Gives your customers credit cards, doubles bank sps.', 'img/upgrades/creditcards.png', () => {Game.boosts.bankMult *= 2}),
        new Game.upgrade('Heist Proof Vaults', () => Game.banks >= 5, 50000000, 'Prevents vaults from being breached multiplying bank sps by 2.', 'img/upgrades/heistproofvaults.png', () => {Game.boosts.bankMult *= 2}),
        

    ]
    
    Game.availUpgrades = []

    Game.achievements = [
        //Clicks

        new Game.achievement('Clicker Game', () => Game.clicks > 15, 'Click 15 times', 'common'),
        new Game.achievement('Lots of clicks', () => Game.clicks > 100, 'Click 100 times', 'common'),
        new Game.achievement('A lot of clicks', () => Game.clicks > 1000, 'Click 1000 times', 'uncommon'),
        new Game.achievement('Carpal Tunnel', () => Game.clicks > 10000, 'Click 10000 times', 'uncommon'),
        new Game.achievement('Autoclicker?', () =>  Game.clicks > 50000, 'Click 50000 times', 'rare'),

        //Mouse CPS

        new Game.achievement('Noob Clicker', () => Game.mouseShapes >= 100, 'Get 100 Shapes from clicking', 'common'),
        new Game.achievement('Better Clicker', () => Game.mouseShapes >= 10000, 'Get 10000 Shapes from', 'common'),
        new Game.achievement('Clickmachine', () => Game.mouseShapes >= 1000000, 'Get 1 million shapes from clicking', 'uncommon'),
        new Game.achievement('Clickathon', () => Game.mouseShapes >= 10000000, 'Get 10 million shapes from clicking', 'uncommon'),
        new Game.achievement('Clickmegeddon', () => Game.mouseShapes >= 100000000, 'Get 100 million shapes from clicking', 'uncommon'),

        //Time

        new Game.achievement('Starting Up', () => Game.secondsSpent > 10, 'Play the game for 10 seconds', 'common'),
        new Game.achievement('Time flying', () => Game.secondsSpent > 60, 'Play the game for a minute', 'common'),
        new Game.achievement('Time flying?', () => Game.secondsSpent > 600, 'Play the game for 10 minutes', 'common'),
        new Game.achievement('A lot of time', () => Game.secondsSpent > 60*60, 'Play the game for an hour', 'uncommon'),
        new Game.achievement('Dedicated', () => Game.secondsSpent > 60*60*6, "Play the game for 6 hours", 'uncommon'),
        new Game.achievement('Slightly Addicted', () => Game.secondsSpent > 60*60*12, "Play the game for 12 hours", 'uncommon'),
        new Game.achievement('Definitely Addicted', () => Game.secondsSpent > 60*60*24, "Play the game for a day", 'uncommon'),
        new Game.achievement('Caffeine Required', () => Game.secondsSpent > 60*60*48, "Play the game for 2 days", 'rare'),
        new Game.achievement('Why are you still here', () => Game.secondsSpent > 60*60*24*7, "Play the game for a week", 'rare'),

        //Upgrades

        new Game.achievement('Upgrader', () => Game.boughtUpgrades.length > 0, "Buy an upgrade", 'common'),
        new Game.achievement('Tier 2', () => Game.boughtUpgrades.length >= 5, 'Buy 5 upgrades', 'common'),
        new Game.achievement('Mass Upgrader', () => Game.boughtUpgrades.length >= 10, 'Buy 10 upgrades', 'uncommon'),

        //Bots
        new Game.achievement('Auto Clicker', () => Game.cursors > 0, 'Get a cursor', 'common'),
        new Game.achievement('Double Click', () => Game.cursors >= 2, 'Get two cursors', 'common'),
        new Game.achievement('10 CPS', () => Game.cursors >= 10, 'Get 10 cursors', 'uncommon'),
        new Game.achievement('Butterfly Speed', () => Game.cursors >= 20, 'Get 20 cursors', 'uncommon'),
        new Game.achievement('Cursorstorm', () => Game.cursors >= 30, 'Get 30 cursors', 'rare'),
        new Game.achievement('Too many cursors', () => Game.cursors >= 50, 'Get 50 cursors', 'rare'),

        new Game.achievement('One Ruler', () => Game.rulers > 0, 'Get a ruler', 'common'),
        new Game.achievement('Ruler Spinner', () => Game.rulers >= 10, 'Get 10 rulers', 'uncommon'),
        new Game.achievement('Measuring Tape', () => Game.rulers >= 20, 'Get 20 rulers', 'uncommon'),
        new Game.achievement('Plane of Plastic', () => Game.rulers >= 30, 'Get 30 rulers', 'rare'),
        new Game.achievement('Flying Plastic', () => Game.rulers >= 50, 'Get 50 rulers', 'rare'),

        new Game.achievement('Paid Labor', () => Game.builders > 0, 'Get a builder', 'common'),
        new Game.achievement('Workforce', () => Game.builders >= 10, 'Get 10 builders', 'uncommon'),
        new Game.achievement('Construction', () => Game.builders >= 20, 'Get 20 builders', 'uncommon'),
        new Game.achievement('Construction Company', () => Game.builders >= 30, 'Get 30 builders', 'rare'),
        new Game.achievement('Builder Armageddon', () => Game.builders >= 50, 'Get 50 builders', 'rare'),

        new Game.achievement('Manufacture', () => Game.factorys > 0, 'Get a factory', 'common'),
        new Game.achievement('Manufacture Giant', () => Game.factorys >= 10, 'Get 10 factories', 'uncommon'),
        new Game.achievement('CO2 Bank', () => Game.factorys >= 20, 'Get 20 factories', 'uncommon'),
        new Game.achievement('Greenhouse', () => Game.factorys >= 30, 'Get 30 factories', 'rare'),
        new Game.achievement('Global warming', () => Game.factorys >= 50, 'Get 50 factories', 'rare'),

        new Game.achievement('Distrubute', () => Game.distrubutions > 0, 'Get a distribution', 'common'),
        new Game.achievement('Lots of hands', () => Game.distrubutions >= 10, 'Get 10 distrubutions', 'uncommon'),
        new Game.achievement('Food chain', () => Game.distrubutions >= 20, 'Get 20 distrubutions', 'uncommon'),
        new Game.achievement('Lots of distrubution', () => Game.distrubutions >= 30, 'Get 30 distrubutions', 'rare'),
        new Game.achievement('Global distrubution', () => Game.distrubutions >= 50, 'Get 50 distrubutions', 'rare'),

        new Game.achievement('Specialised Banking', () => Game.banks > 0, 'Get a bank', 'common'),
        new Game.achievement('Big Vaults', () => Game.banks >= 10, 'Get 10 banks', 'uncommon'),
        new Game.achievement('Stashes of Shapes', () => Game.banks >= 20, 'Get 20 banks', 'uncommon'),
        new Game.achievement('Bank Chain', () => Game.banks >= 30, 'Get 30 banks', 'rare'),
        new Game.achievement('Super Bank', () => Game.banks >= 50, 'Get 50 banks', 'rare'),

        //CHEAT ACHIEVEMENTS

        new Game.achievement('Autoclicker Enabled', () => Game.usedAutoclicker, 'Have over 40 cps', 'secret'),
        new Game.achievement('You are not me', () => Game.setNameSilkyway, 'Set your name to \'Silkyway\'', 'secret')
    ]

    Game.boosts = {}
    Game.cpsTexts = []


    Game.clickShape = (e) => {

        f('#shape > img').classList.remove('bounce')
        setTimeout(() => { f('#shape > img').classList.add('bounce') }, 1)
        var thing2 = Math.random() > 0.95
        Game.shapes += thing2 ? Game.spc * 3 : Game.spc;
        Game.mouseShapes += thing2 ? Game.spc * 3 : Game.spc;
        Game.clicks++;
        Game.shapeRotation += 10;
        if (Game.shapeRotation >= 360) { Game.shapeRotation = 0; }
        document.querySelector('#shape').style.transform = `rotate(${Game.shapeRotation}deg)`

        // document.querySelector('#fx').setAttribute('width', '100%')
        // document.querySelector('#fx').setAttribute('height', '100%')
        var ctx = document.querySelector('#fx').getContext("2d")
        ctx.font = `bold 3rem Poppins`
        ctx.lineWidth = 4;
        ctx.fillText(`+ ${toShortScale(thing2 ? Game.spc * 3 : Game.spc)}`, getMousePos(document.querySelector('#fx'), e).x + (Math.random() - 0.5) * 10, document.querySelector('#fx').height / 2)
        Game.cpsTexts.push({ content: `+ ${toShortScale(thing2 ? Game.spc * 3 : Game.spc)}`, x: getMousePos(document.querySelector('#fx'), e).x + (Math.random() - 0.5) * 10, y: document.querySelector('#fx').height / 2, opacity: 1 })
    }


    f('#shape').on('click', Game.clickShape)

    Game.updateBots = () => {
        f('#botsdiv').setHtml('')
        Game.bots.forEach((bot, index) => {
            f('#botsdiv').appendChild(bot.obj())
            f(`#bot-${replaceAll(bot.name, ' ', '')}`).on('click', () => { bot.buyFunc(); Game.updateBots(); })
            document.querySelector(`#bot-${replaceAll(bot.name, ' ', '')}`).addEventListener('mouseenter', () => {
                f('#hover > #hoverheader').setText(bot.name);
                f('#hover > #hoverpara').setText(`Generates ${toShortScale(eval(`(Game.bots[${index}].sps + Game.boosts.${bot.name.toLowerCase()}Up) * Game.boosts.${bot.name.toLowerCase()}Mult`))} shapes per second.\nYour ${eval(`Game.${bot.name.toLowerCase()}s`)} ${bot.name.toLowerCase()}s produce a total of ${toShortScale(eval(`(Game.bots[${index}].sps + Game.boosts.${bot.name.toLowerCase()}Up) * ${eval(`Game.${bot.name.toLowerCase()}s`)} * Game.boosts.${bot.name.toLowerCase()}Mult`))} shapes per second.`);
                f('#hover > #hoverprice').setText(`${toShortScale(getPrice(bot.baseprice, bot.amount()))} Shapes`)
                document.querySelector('#hover').style.display = 'block';
            })
            document.querySelector(`#bot-${replaceAll(bot.name, ' ', '')}`).addEventListener('mouseleave', () => {
                document.querySelector('#hover').style.display = 'none';
            })
        })
    }

    Game.tick = () => {

        if (Game.name.toLowerCase() === 'silkyway') Game.setNameSilkyway = true;

        if ( averageCps >= 40) {
            Game.usedAutoclicker = true;
        }

        var ctx = document.querySelector('#fx').getContext("2d")
        ctx.clearRect(0, 0, document.querySelector('#fx').width, document.querySelector('#fx').height)
        Game.cpsTexts.forEach(text => {

            if (text.opacity > 0) {
                ctx.fillStyle = `rgba(0, 0, 0, ${text.opacity -= 0.003})`;

                ctx.fillText(text.content, text.x, text.y -= 0.5)
            } else {
                Game.cpsTexts = Game.cpsTexts.filter(txt => txt !== text)
            }
        })

        f('#achievementsdiv').setHtml('')
        Game.achievements.forEach(achievement => {
            f('#achievementsdiv').appendChild(achievement.obj())
        })  

        Game.boosts.clickUp = 0;
        Game.boosts.clickMult = 1;

        Game.boosts.cursorUp = 0;
        Game.boosts.cursorMult = 1;
        Game.boosts.rulerUp = 0;
        Game.boosts.rulerMult = 1;
        Game.boosts.builderUp = 0;
        Game.boosts.builderMult = 1;
        Game.boosts.factoryUp = 0;
        Game.boosts.factoryMult = 1;
        Game.boosts.distrubutionUp = 0;
        Game.boosts.distrubutionMult = 1;
        Game.boosts.bankUp = 0;
        Game.boosts.bankMult = 1;

        Game.boosts.endUp = 0;
        Game.boosts.endMult = 1;


        Game.boughtUpgrades.forEach(upgrade => {
            var up2 = Game.totalUpgrades.filter(up => up.name === upgrade)[0]
            up2.effects()
        })

        Game.sps = (((Game.bots[0].sps + Game.boosts.cursorUp) * Game.cursors * Game.boosts.cursorMult +
            (Game.bots[1].sps + Game.boosts.rulerUp) * Game.rulers * Game.boosts.rulerMult +
            (Game.bots[2].sps + Game.boosts.builderUp) * Game.builders * Game.boosts.builderMult +
            (Game.bots[3].sps + Game.boosts.factoryUp) * Game.factorys * Game.boosts.factoryMult +
            (Game.bots[4].sps + Game.boosts.distrubutionUp) * Game.distrubutions * Game.boosts.distrubutionMult + 
            (Game.bots[5].sps + Game.boosts.bankUp) * Game.banks * Game.boosts.bankMult) + Game.boosts.endUp) * Game.boosts.endMult ;
        Game.spc = (1 + Game.boosts.clickUp) * Game.boosts.clickMult;

        f('h1#shapecount').setText(`${toShortScale(Game.shapes)} Shapes`)
        f('#sps').setText(`${toShortScale(Game.sps)} shapes/s`)


    }
    Game.tentick = () => {
        Game.availUpgrades = []
        Game.totalUpgrades.forEach(upgrade => {
            if (Game.boughtUpgrades.includes(upgrade.name) || upgrade.requirement() === false) {

            } else {
                Game.availUpgrades.push(upgrade.name)
            }
        })
        if (JSON.stringify(Game.prevUpgrades) !== JSON.stringify(Game.availUpgrades)) {
            f('#upgradesdiv').setHtml('')
            Game.availUpgrades.forEach(upgrade => {
                var up2 = Game.totalUpgrades.filter(a => a.name === upgrade)[0]
                f('#upgradesdiv').appendChild(up2.obj())
                f(`#upgrade-${replaceAll(up2.name, ' ', '')}`).on('click', () => {
                    if (Game.shapes >= up2.price) {
                        Game.shapes -= up2.price
                        Game.availupgrades = Game.availUpgrades.filter(up => up !== upgrade)
                        Game.boughtUpgrades.push(upgrade)
                    }
                })


            })
        }
        Game.prevUpgrades = Game.availUpgrades
    }
    Game.slowtick = () => {




    }
    Game.second = () => {
        Game.shapes += Game.sps;
        Game.secondsSpent ++;
    }
    Game.newstick = () => {
        const hasUpgrade = (upgradename) => {
            return Game.boughtUpgrades.includes(upgradename)
        }
        var randnews = () => {
            while (true) {
                var thing = get_random(
                    [
                        { content: 'Shape sales increased by over 150% over the last week.', requirement: () => true },
                        { content: '"Shapes are the newest fad." reports reporter.', requirement: () => true },
                        { content: 'Advanced bots are being made for faster shape manufacturing.', requirement: () => true },
                        { content: 'Shape comptetitors cannot compete with one particular company.', requirement: () => true },
                        { content: 'Buying shapes is as easy as toasting bread, which is, very easy.', requirement: () => true },
                        { content: 'Advanced megaphone, nicknamed "Moral Support", is in development, companies are eager to try it.', requirement: () => !(hasUpgrade('Moral Support')) },
                        { content: 'Genius company uses rulers to improve bot performance. They make ten times more shapes than comptetitors.', requirement: () => Game.rulers > 0 && Game.builders < 0 },
                        { content: `New company starts using cursors to automate shape production. They are still behind as they only have ${Game.cursors} cursors.`, requirement: () => Game.cursors > 0 && Game.cursors < 5 && Game.rulers === 0 },
                        { content: `New company starts using cursors to automate shape production. They are beating the comptetion with a staggering ${Game.cursors} cursors!`, requirement: () => Game.cursors >= 5 && Game.rulers === 0 },
                        { content: `Company starts cutting shapes in half with never before seen techonology called 'Bisecting'`, requirement: () => hasUpgrade('Bisect') && !hasUpgrade('Bisect Mk2')},
                        { content: `The new techonology called 'Bisecting' got its second iteration as it now cut shapes into quarters.`, requirement: () => hasUpgrade('Bisect Mk2') && !hasUpgrade('Moral Support') },
                        { content: `${Game.name}'s shape empire has invented builders that automatically generate shapes faster than any other bot.`, requirement: () => Game.builders > 0 && Game.factorys === 0 },
                        { content: `${Game.name}'s shape empire now makes ${Game.sps} shapes every second! They are at the frontier of shape making.`, requirement: () => Game.sps > 10 }

                    ])
                if (thing.requirement() === true) {
                    return thing.content;
                }
            }
        }
        f('#news').setHtml('News: ' + randnews())
    }
    Game.minutetick = () => {
        localStorage.setItem('savecode', save('code'))
        try {Game.alert('Game Autosaved.')} catch {}
    }
    setInterval(Game.tick, 1)
    setInterval(Game.tentick, 10)
    setInterval(Game.slowtick, 500)
    setInterval(Game.second, 1000)
    Game.newstick()
    setInterval(Game.newstick, 10000)
    setInterval(Game.minutetick, 60000)




    //Loading Sequence

    Game.prevUps = []
    Game.updateBots()

    f('#achievementsslide').on('click', () => {
        f('#achievements').classList.toggle('achievements-out')
    })

    Game.name = Game.name ?? `${get_random(randomfirst)} ${get_random(randomlast)}`
    f('#nameSelector').setHtml(`<strong>${HtmlEncode(Game.name)}</strong>'s shape empire`)

    f('#nameSelector').on('click', (e) => {
        Game.name = prompt('What is your name?') // A little bit unprofessional, will fix later.
        f('#nameSelector').setHtml(`<strong>${HtmlEncode(Game.name)}</strong>'s shape empire`)
    })

    console.log(get_random([
        '[=== Looking for bugs or hacking in shapes? ===]',
        '[=== One should know how to javascript before using it. ===]',
        '[=== I have never eaten a bagel, is it good? ===]',
        '[=== i am literally just making up things for this lmao ===]'],
        '[=== Fun fact: like 3% of this code is from Ortiel ===]',
        ''
    ))

    f('#save').on('click', () => {localStorage.setItem('savecode', save());     try {Game.alert('Game Saved.')} catch {} });
    f('#load').on('click', () => {load(); try {Game.alert('Save Loaded.')} catch {}});
    f('#reset').on('click', () => {
        if (window.confirm('Are you sure you want to reset?')) {
            if (window.confirm('Are you absolutely sure you want to reset?')) {
                reset();
            }
        }
    })
    f('#importsave').on('click', loadPrompt);
    f('#exportsave').on('click', savePrompt);

    
}

if (browserName !== "MS IE") {
    $('#iediv').toggle();
}

Game.init = () => {
    Game.clicks = 0;
    Game.shapes = 0;
    Game.secondsSpent = 0;

    Game.cursors = 0;
    Game.rulers = 0;
    Game.builders = 0;
    Game.factorys = 0;
    Game.distrubutions = 0;
    Game.banks = 0;
    
    Game.mouseShapes = 0;
    Game.usedAutoclicker = false;
    Game.setNameSilkyway = false;

    Game.boughtUpgrades = []

    Game.load();
}



function savePrompt() {
    var data = JSON.stringify({ shapes: Game.shapes, clicks: Game.clicks, cursors: Game.cursors, rulers: Game.rulers, builders: Game.builders, factorys: Game.factorys, distrubutions: Game.distrubutions, banks: Game.banks, boughtUpgrades: Game.boughtUpgrades, name: Game.name, time: Game.secondsSpent, mouseShapes: Game.mouseShapes, usedAutoclicker: Game.usedAutoclicker, setNameSilkyway: Game.setNameSilkyway, }).toString()
    prompt('Savecode: ', utf8_to_b64(data))
}
function save() {
    var data = JSON.stringify({ shapes: Game.shapes, clicks: Game.clicks, cursors: Game.cursors, rulers: Game.rulers, builders: Game.builders, factorys: Game.factorys, distrubutions: Game.distrubutions, banks: Game.banks, boughtUpgrades: Game.boughtUpgrades, name: Game.name, time: Game.secondsSpent, mouseShapes: Game.mouseShapes, usedAutoclicker: Game.usedAutoclicker, setNameSilkyway: Game.setNameSilkyway, }).toString()

    return utf8_to_b64(data)

}
function loadPrompt() {
    var thing = JSON.parse(b64_to_utf8(prompt('Loadcode: ')))
    Game.shapes = thing.shapes
    Game.clicks = thing.clicks
    Game.cursors = thing.cursors
    Game.rulers = thing.rulers
    Game.builders = thing.builders
    Game.factorys = thing.factorys
    Game.distrubutions = thing.distrubutions 
    Game.banks = thing.banks
    Game.name = thing.name 
    Game.boughtUpgrades = thing.boughtUpgrades
    Game.secondsSpent = thing.time
    Game.usedAutoclicker = thing.usedAutoclicker
    Game.mouseShapes = thing.mouseShapes
    Game.setNameSilkyway = thing.setNameSilkyway
    try {f('#nameSelector').setHtml(`<strong>${HtmlEncode(Game.name)}</strong>'s shape empire`)} catch {}
    try {Game.updateBots()} catch {}
}

function load() {
    var thing = JSON.parse(b64_to_utf8(localStorage.getItem('savecode')))
    Game.shapes = thing.shapes
    Game.clicks = thing.clicks
    Game.cursors = thing.cursors
    Game.rulers = thing.rulers
    Game.builders = thing.builders
    Game.factorys = thing.factorys
    Game.distrubutions = thing.distrubutions 
    Game.banks = thing.banks
    Game.name = thing.name
    Game.boughtUpgrades = thing.boughtUpgrades
    Game.secondsSpent = thing.time
    Game.usedAutoclicker = thing.usedAutoclicker
    Game.mouseShapes = thing.mouseShapes
    Game.setNameSilkyway = thing.setNameSilkyway
    try {f('#nameSelector').setHtml(`<strong>${HtmlEncode(Game.name)}</strong>'s shape empire`)} catch {}
    try {Game.updateBots()} catch {}

}
function reset() {
    localStorage.removeItem('savecode')
    location.reload()
}
function utf8_to_b64(str) {
    try { return Base64.encode(unescape(encodeURIComponent(str))); }
    catch (err) { return ''; }
}

function b64_to_utf8(str) {
    try { return decodeURIComponent(escape(Base64.decode(str))); }
    catch (err) { return ''; }
}


Assets.init()
if (localStorage.getItem('savecode') === null) {
    Game.init()
} else {
    load()
    Game.banks = Game.banks ?? 0
    Game.secondsSpent = Game.secondsSpent ?? 0
    Game.setNameSilkyway = Game.setNameSilkyway ?? false
    Game.mouseShapes = Game.mouseShapes ?? 0
    Game.usedAutoclicker = Game.usedAutoclicker ?? false;
    Game.load()
}

function FinishedLoading() {
    f('#loadingdiv').classList.add('loadingfin')
    
    
}

setTimeout(FinishedLoading, 0)
