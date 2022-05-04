function b64Encode(str) {
    return window.btoa(unescape(encodeURIComponent(str)));
};

function b64Decode(str) {
    return decodeURIComponent(escape(window.atob(str)));
};

var instances = 0;


var Game = {};
var Assets = {};

Assets.biglist = ['', 'Thousand', 'Million', 'Billion', 'Trillion', 'Quadrillion', 'Quintillion', 'Sextillion', 'Septillion', 'Octillion', 'Nonillion', 'Decillion']

const roundOffTo = (num, factor = 1) => {
    const quotient = num / factor;
    const res = Math.floor(quotient) * factor;
    return res;
 };

function save() {
    prompt("Savecode: ", b64Encode(JSON.stringify(Game)))
}
function load() {
    console.log(JSON.parse(b64Decode(prompt('Enter save string:'))))
    console.log(Game)
    Game = JSON.parse(b64Decode(prompt('Enter save string:')))
}

var browserName = (function (agent) {        switch (true) {
    case agent.indexOf("edge") > -1: return "MS Edge";
    case agent.indexOf("edg/") > -1: return "Edge ( chromium based)";
    case agent.indexOf("opr") > -1 && !!window.opr: return "Opera";
    case agent.indexOf("chrome") > -1 && !!window.chrome: return "Chrome";
    case agent.indexOf("trident") > -1: return "MS IE";
    case agent.indexOf("firefox") > -1: return "Mozilla Firefox";
    case agent.indexOf("safari") > -1: return "Safari";
    default: return "other";
}
})(window.navigator.userAgent.toLowerCase());



function toShortScale(number) {
    const rounded = Math.floor(number)
    const length = rounded.toString().length
    const index = roundOffTo(length-1, 3)/3

    var numbertodivide = '1'

    for (let i = 0; i < roundOffTo(length-1, 3); i++) {
        numbertodivide += '0'
        
    }

    return (+(number/parseInt(numbertodivide)).toFixed(2) + " " + Assets.biglist[index])
}



Assets.init = () => {
    Assets.bots = {};
    Assets.bots.prices = {};
    Assets.bots.sps = {};
    Assets.bots.createBotObj = (name, img, beginprice, sps) => {
        var newObj = document.createElement("div")
        newObj.classList.add('bot')
        newObj.innerHTML = `${name} <span class="spsbot">${sps} shapes/s</span><span class="botprice">${beginprice} Shapes</span><span class="botamount">0</span>`
        newObj.spsCount = newObj.querySelector(":scope > .spsbot")
        newObj.priceCount = newObj.querySelector(":scope > .botprice")
        newObj.amountCount = newObj.querySelector(":scope > .botamount")
        return newObj;
    }

    Assets.bots.prices.cursor = 15;
    Assets.bots.prices.ruler = 100;
    Assets.bots.prices.builder = 1500;
    Assets.bots.prices.factory = 30000;
    Assets.bots.prices.distrubution = 150000;

    Assets.bots.sps.cursor = 0.1;
    Assets.bots.sps.ruler = 1;
    Assets.bots.sps.builder = 15;
    Assets.bots.sps.factory = 45;
    Assets.bots.sps.distrubution = 150;

    Assets.bots.cursor = (cursorFunc) => {
        var thing =  Assets.bots.createBotObj('Cursor', '', Assets.bots.prices.cursor, Assets.bots.sps.cursor)
        thing.addEventListener('click', cursorFunc);
        return thing
    }
    Assets.bots.ruler = (rulerFunc) => {
        var thing =  Assets.bots.createBotObj('Ruler', '', Assets.bots.prices.ruler, Assets.bots.sps.ruler)
        thing.addEventListener('click', rulerFunc);
        return thing
    }
    Assets.bots.builder = (builderFunc) => {
        var thing =  Assets.bots.createBotObj('Builder', '', Assets.bots.prices.builder, Assets.bots.sps.builder)
        thing.addEventListener('click', builderFunc);
        return thing
    }
    Assets.bots.factory = (factoryFunc) => {
        var thing =  Assets.bots.createBotObj('Factory', '', Assets.bots.prices.factory, Assets.bots.sps.factory)
        thing.addEventListener('click', factoryFunc);
        return thing
    }
    Assets.bots.distrubution = (disFunc) => {
        var thing =  Assets.bots.createBotObj('Distrubution', '', Assets.bots.prices.distrubution, Assets.bots.sps.distrubution)
        thing.addEventListener('click', disFunc);
        return thing
    }


    Assets.shape = () => {
        var shape = document.createElement('a')

        shape.id = 'shape'

        var shapeImg = document.createElement('img')

        shapeImg.src = 'img/square.png'

        shape.appendChild(shapeImg)

        return shape
    }
    Assets.shapeCount = () => {var elem = document.createElement('h1'); elem.id = 'shapecount'; return elem}
    Assets.spsCount = () => {var elem = document.createElement('h3'); elem.id = 'sps'; return elem}

    Assets.baseSPC = 1;
    Assets.baseSPS = 0;


}

const VERSION = 'v0.0.0'

Game.launch = () => {
    console.log("Launching Game...")

    Game.increaseRate = 1.15;
    Game.lastLoop = new Date();

    Game.totalUpgrades = [];
    Game.curUpgrades = [];
    Game.boughtUpgrades = [];

    Game.version = VERSION;
    Game.bots = {};
    Game.bots.prices = {};
    Game.bots.getPrice = (origPrice, amount) => {
        return Math.ceil(origPrice * (1.15 ** amount))
    }

    Game.Upgrade = class {
        constructor(name, desc, price, img, effects, requirements) {
            this.name = name;
            this.desc = desc;
            this.price = price;
            this.img = img;
            this.effects = effects;
            this.requirements = requirements;
            `<div class="upgrade"><img src="img/square.png" alt=""></div>`
            this.obj =  document.createElement('div')
            this.obj.classList.add('upgrade')
            var newImg = document.createElement('img');
            newImg.src = img;
            this.obj.appendChild(newImg);
            this.obj.addEventListener('mouseover', () => {
                document.querySelector('#hover').children[0].textContent = this.name;
                document.querySelector('#hover').children[1].textContent = this.desc;
                document.querySelector('#hover').children[2].textContent = this.price + " Shapes";
                document.querySelector('#hover').style.display = 'block';
            })
            this.obj.addEventListener('mouseleave', () => {
                document.querySelector('#hover').style.display = 'none';
            })
            this.obj.addEventListener('click', () => {
                console.log("what")
                if (Game.shapes >= this.price) {
                    Game.shapes -= this.price;
                    Game.boughtUpgrades.push(this);
                    Game.curUpgrades = Game.curUpgrades.filter(item => item.name !== this.name)
                    this.obj.parentNode?.removeChild(this.obj)
                    document.querySelector('#hover').style.display = 'none';
                }
            })
            

            
        }
    }

    Game.spsa = {}

    Game.bots.cursor = () => {
        if (Game.shapes >= Game.bots.getPrice(Assets.bots.prices.cursor, Game.cursors)) {
            Game.shapes -= Game.bots.getPrice(Assets.bots.prices.cursor, Game.cursors);
            Game.cursors++;

            Game.cursorObj.amountCount.textContent = Game.cursors.toString();
            Game.cursorObj.priceCount.textContent = `${toShortScale(Game.bots.getPrice(Assets.bots.prices.cursor, Game.cursors))} Shapes`
        }
    }
    Game.bots.ruler = () => {
        if (Game.shapes >= Game.bots.getPrice(Assets.bots.prices.ruler, Game.rulers)) {
            Game.shapes -= Game.bots.getPrice(Assets.bots.prices.ruler, Game.rulers);
            Game.rulers++;

            Game.rulerObj.amountCount.textContent = Game.rulers.toString();
            Game.rulerObj.priceCount.textContent = `${toShortScale(Game.bots.getPrice(Assets.bots.prices.ruler, Game.rulers))} Shapes`
        }
    }
    Game.bots.builder = () => {
        if (Game.shapes >= Game.bots.getPrice(Assets.bots.prices.builder, Game.builders)) {
            Game.shapes -= Game.bots.getPrice(Assets.bots.prices.builder, Game.builders);
            Game.builders++;

            Game.builderObj.amountCount.textContent = Game.builders.toString();
            Game.builderObj.priceCount.textContent = `${toShortScale(Game.bots.getPrice(Assets.bots.prices.builder, Game.builders))} Shapes`
        }
    }
    Game.bots.factory = () => {
        if (Game.shapes >= Game.bots.getPrice(Assets.bots.prices.factory, Game.factorys)) {
            Game.shapes -= Game.bots.getPrice(Assets.bots.prices.factory, Game.factorys);
            Game.factorys++;

            Game.factoryObj.amountCount.textContent = Game.factorys.toString();
            Game.factoryObj.priceCount.textContent = `${toShortScale(Game.bots.getPrice(Assets.bots.prices.factory, Game.factorys))} Shapes`
        }
    }
    Game.bots.distrubution = () => {
        if (Game.shapes >= Game.bots.getPrice(Assets.bots.prices.distrubution, Game.distrubutions)) {
            Game.shapes -= Game.bots.getPrice(Assets.bots.prices.distrubution, Game.distrubutions);
            Game.distrubutions++;

            Game.distrubutionObj.amountCount.textContent = Game.distrubutions.toString();
            Game.distrubutionObj.priceCount.textContent = `${toShortScale(Game.bots.getPrice(Assets.bots.prices.distrubution, Game.distrubutions))} Shapes`
        }
    }

    Game.initBots = () => {
        Game.cursorObj = document.querySelector('#botsdiv').appendChild(Assets.bots.cursor(Game.bots.cursor));
        Game.rulerObj = document.querySelector('#botsdiv').appendChild(Assets.bots.ruler(Game.bots.ruler));
        Game.builderObj = document.querySelector('#botsdiv').appendChild(Assets.bots.builder(Game.bots.builder));
        Game.factoryObj = document.querySelector('#botsdiv').appendChild(Assets.bots.factory(Game.bots.factory));
        Game.distrubutionObj = document.querySelector('#botsdiv').appendChild(Assets.bots.distrubution(Game.bots.distrubution));
    }
    Game.shapeClicked = () => {
        Game.shapes += Game.shapesPerClick
        Game.clickShape.children[0].classList.remove('bounce')
        setTimeout(() => {Game.clickShape.children[0].classList.add('bounce')}, 1)
        Game.clicks ++;
    }
    Game.tick = () => {
        Game.thisLoop = new Date();
        Game.fps = 1000 / (Game.thisLoop - Game.lastLoop);
        Game.lastLoop = Game.thisLoop;

        Game.spsa.cursor = Assets.bots.sps.cursor;
        Game.spsa.ruler = Assets.bots.sps.ruler;
        Game.spsa.builder = Assets.bots.sps.builder;
        Game.spsa.factory = Assets.bots.sps.factory;
        Game.spsa.distrubution = Assets.bots.sps.distrubution;
        
        Game.shapesPerClick = 1

        
        Game.boughtUpgrades.forEach(upgrade => {
            upgrade.effects()
        })
        Game.sps = Game.cursors * Game.spsa.cursor + Game.rulers * Game.spsa.ruler + Game.builders * Game.spsa.builder + Game.factorys * Game.spsa.factory + Game.distrubutions * Game.spsa.distrubution;
        

        Game.shapeCount.textContent = `${toShortScale(Game.shapes)} Shapes`
        Game.spsCount.textContent = `(${toShortScale(Game.sps)} shapes/second)`

        if (Game.showFPSinConsole) console.log(`FPS: ${Game.fps}`)

        

        
    }
    Game.slowTick = () => {
        Game.curUpgrades = []
        
        Game.boughtUpgradeNames = []

        Game.boughtUpgrades.forEach(element => {
            Game.boughtUpgradeNames.push(element.name)
        })

        Game.totalUpgrades.forEach(upgrade => {
            if (eval(upgrade.requirements) == true && !Game.boughtUpgradeNames.includes(upgrade.name)) {
                Game.curUpgrades.push(upgrade)
                
            }
        })
        $('#upgradesdiv').html('')
        Game.curUpgrades.forEach(upgrade => {
            document.getElementById('upgradesdiv').appendChild(upgrade.obj)
        })

        
    }

    Game.tickSecond = () => {
        Game.shapes += Game.sps
    }

    /* Intialising objects */

    Game.initBots()
    Game.clickShape = document.getElementById('clickdiv').appendChild(Assets.shape())
    Game.shapeCount = document.getElementById('clickdiv').appendChild(Assets.shapeCount())
    Game.spsCount = document.getElementById('clickdiv').appendChild(Assets.spsCount())

    Game.clickShape.addEventListener('click', Game.shapeClicked)
    

    /* 
    ================================================================
    EVENT LISTENER STUFF  
    ================================================================
    */

    document.getElementById('shape').addEventListener('click', Game.clickShape)

    Game.totalUpgrades.push(new Game.Upgrade('Bisect', `Bisects your shape to give double shapes per click!`, 100, 'img/upgrades/bisect.png', () => {Game.shapesPerClick *= 2}, "Game.clicks >= 5"));
    Game.totalUpgrades.push(new Game.Upgrade('Bisect MK2', `Bisects your shape to give double shapes per click again!`, 500, 'img/upgrades/bisectmk2.png', () => {Game.shapesPerClick *= 2}, "Game.clicks >= 200"));
    Game.totalUpgrades.push(new Game.Upgrade('Double Click', `Makes your cursors click twice!`, 200, 'img/upgrades/doubleclick.png', () => {Game.spsa.cursor *= 2}, "Game.cursors >= 5"))
    Game.totalUpgrades.push(new Game.Upgrade('Protractor', `Makes shapes constructed by the ruler more accurate (doubles ruler sps)`, 1000, 'img/upgrades/protractor.png', () => {Game.spsa.ruler *= 2}, "Game.rulers > 0"))
    Game.totalUpgrades.push(new Game.Upgrade('Better Tools', `Double efficiency for builders with upgraded tools`, 10000, `img/upgrades/bettertools.png`, () => {Game.spsa.builder *= 2}, "Game.builders > 0"))

    setInterval(Game.tick, 10)
    setInterval(Game.slowTick, 500)
    setInterval(Game.tickSecond, 1000)

    document.ontouchmove = function(event){
        event.preventDefault();
    }

    console.log("Game Launched!")
}

Game.init = () => {
    if (instances > 0) {
        alert("Game instances already exist")
        return;
    }
    instances++;
    console.log("Game Intialising...")
    Assets.init()
    Game.shapes = 0;
    Game.showFPSinConsole = false;
    Game.shapesPerClick = 1;
    Game.shapesPerSecond = 0;
    Game.cursors = 0;
    Game.rulers = 0;
    Game.builders = 0;
    Game.factorys = 0;
    Game.distrubutions = 0;


    Game.clicks = 0;

    
    Game.cursorObj = Assets.bots.cursor;
    Game.rulerObj = Assets.bots.ruler;
    Game.builderObj = Assets.bots.builder;
    Game.factoryObj = Assets.bots.factory;
    Game.distrubutionObj = Assets.bots.distrubution;

    Game.shape = 'Square'

    Game.launch()
    console.log("Game Intitalised!")
}

if (browserName !== "MS IE") {
    $('#iediv').toggle()

}

Game.init()
console.log(Game)