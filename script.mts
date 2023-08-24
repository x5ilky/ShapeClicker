import LZString from "./lzstring.mjs";

import FC from "./fc.mjs";

const version = "0.13.0";

let exposed: { [id: string]: any } = {};

function expose(s: any) {
	exposed[s.toString()] = s;
}

{
	const { f, c } = FC;
	//string compression from https://raw.githubusercontent.com/pieroxy/lz-string/master/libs/lz-string.min.js
	//@ts-ignore

	var $$ = <T extends HTMLElement>(q: string) => document.querySelector(q) as T;

	/**
	 * Convert absolute CSS numerical values to pixels.
	 *
	 * @link https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#numbers_lengths_and_percentages
	 *
	 * @param {string} cssValue
	 * @param {null|HTMLElement} target Used for relative units.
	 * @return {*}
	 */
	function convertCssUnit(cssValue: string, target: null | HTMLElement) {
		target = target || document.body;

		const supportedUnits = {
			// Absolute sizes
			px: (value: any) => value,
			cm: (value: number) => value * 38,
			mm: (value: number) => value * 3.8,
			q: (value: number) => value * 0.95,
			in: (value: number) => value * 96,
			pc: (value: number) => value * 16,
			pt: (value: number) => value * 1.333333,

			// Relative sizes
			rem: (value: number) =>
				value * parseFloat(getComputedStyle(document.documentElement).fontSize),
			em: (value: number) =>
				//@ts-ignore
				value * parseFloat(getComputedStyle(target).fontSize),
			vw: (value: number) => (value / 100) * window.innerWidth,
			vh: (value: number) => (value / 100) * window.innerHeight,

			// Times
			ms: (value: any) => value,
			s: (value: number) => value * 1000,

			// Angles
			deg: (value: any) => value,
			rad: (value: number) => value * (180 / Math.PI),
			grad: (value: number) => value * (180 / 200),
			turn: (value: number) => value * 360,
		};

		// Match positive and negative numbers including decimals with following unit
		const pattern = new RegExp(
			`^([\-\+]?(?:\\d+(?:\\.\\d+)?))(${Object.keys(supportedUnits).join(
				"|"
			)})$`,
			"i"
		);

		// If is a match, return example: [ "-2.75rem", "-2.75", "rem" ]
		const matches = String.prototype.toString
			.apply(cssValue)
			.trim()
			.match(pattern);

		if (matches) {
			const value = Number(matches[1]);
			const unit = matches[2].toLocaleLowerCase();

			// Sanity check, make sure unit conversion function exists
			if (unit in supportedUnits) {
				//@ts-ignore
				return supportedUnits[unit](value);
			}
		}

		return cssValue;
	}

	const randomfirst = [
		"Magic",
		"Fantastic",
		"Fancy",
		"Sassy",
		"Snazzy",
		"Pretty",
		"Cute",
		"Pirate",
		"Ninja",
		"Zombie",
		"Robot",
		"Radical",
		"Urban",
		"Cool",
		"Hella",
		"Sweet",
		"Awful",
		"Double",
		"Triple",
		"Turbo",
		"Techno",
		"Disco",
		"Electro",
		"Dancing",
		"Wonder",
		"Mutant",
		"Space",
		"Science",
		"Medieval",
		"Future",
		"Captain",
		"Bearded",
		"Lovely",
		"Tiny",
		"Big",
		"Fire",
		"Water",
		"Frozen",
		"Metal",
		"Plastic",
		"Solid",
		"Liquid",
		"Moldy",
		"Shiny",
		"Happy",
		"Happy Little",
		"Slimy",
		"Tasty",
		"Delicious",
		"Hungry",
		"Greedy",
		"Lethal",
		"Professor",
		"Doctor",
		"Power",
		"Chocolate",
		"Crumbly",
		"Choklit",
		"Righteous",
		"Glorious",
		"Mnemonic",
		"Psychic",
		"Frenetic",
		"Hectic",
		"Crazy",
		"Royal",
		"El",
		"Von",
	];
	const randomlast = [
		"Cookie",
		"Biscuit",
		"Muffin",
		"Scone",
		"Cupcake",
		"Pancake",
		"Chip",
		"Sprocket",
		"Gizmo",
		"Puppet",
		"Mitten",
		"Sock",
		"Teapot",
		"Mystery",
		"Baker",
		"Cook",
		"Grandma",
		"Click",
		"Clicker",
		"Spaceship",
		"Factory",
		"Portal",
		"Machine",
		"Experiment",
		"Monster",
		"Panic",
		"Burglar",
		"Bandit",
		"Booty",
		"Potato",
		"Pizza",
		"Burger",
		"Sausage",
		"Meatball",
		"Spaghetti",
		"Macaroni",
		"Kitten",
		"Puppy",
		"Giraffe",
		"Zebra",
		"Parrot",
		"Dolphin",
		"Duckling",
		"Sloth",
		"Turtle",
		"Goblin",
		"Pixie",
		"Gnome",
		"Computer",
		"Pirate",
		"Ninja",
		"Zombie",
		"Robot",
	];

	function b64Encode(str: string) {
		return window.btoa(unescape(encodeURIComponent(str)));
	}
	function b64Decode(str: string) {
		return decodeURIComponent(escape(window.atob(str)));
	}
	var instances = 0;

	var biglist = [
		"",
		"Thousand",
		"Million",
		"Billion",
		"Trillion",
		"Quadrillion",
		"Quintillion",
		"Sextillion",
		"Septillion",
		"Octillion",
		"Nonillion",
		"Decillion",
		"Undecillion",
		"Duodecillion",
		"Tredecillion",
		"Quattordecillion",
		"Quindecillion",
		"Sexdecillion",
		"Septendecillion",
		"Octodecillion",
		"Novembecillion",
		"Vigintillion",
	];
	var roundOffTo = function (num: number, factor: number) {
		if (factor === void 0) {
			factor = 1;
		}
		var quotient = num / factor;
		var res = Math.floor(quotient) * factor;
		return res;
	};
	function escapeRegExp(string: string) {
		return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
	}

	function replaceAll(str: string, find: string | RegExp, replace: string) {
		return str.replace(new RegExp(find, "g"), replace);
	}

	const removeSpecials = (input: any) => {
		return replaceAll(input, "( |\\(|\\)|\\:|\\'|\\\")", "").toLowerCase(); //Remove special characters from ids
	};
	function getMousePos(canvas: HTMLCanvasElement, evt: MouseEvent) {
		var rect = canvas.getBoundingClientRect(); //Get mouse pos for text drawing
		return {
			x: ((evt.clientX - rect.left) / (rect.right - rect.left)) * canvas.width,
			y: ((evt.clientY - rect.top) / (rect.bottom - rect.top)) * canvas.height,
		};
	}
	var browserName = (function (agent) {
		switch (true) {
			case agent.indexOf("edge") > -1:
				return "MS Edge";
			case agent.indexOf("edg/") > -1:
				return "Edge ( chromium based)";
			//@ts-ignore
			case agent.indexOf("opr") > -1 && !!window.opr:
				return "Opera";
			//@ts-ignore
			case agent.indexOf("chrome") > -1 && !!window.chrome:
				return "Chrome";
			case agent.indexOf("trident") > -1:
				return "MS IE";
			case agent.indexOf("firefox") > -1:
				return "Mozilla Firefox";
			case agent.indexOf("safari") > -1:
				return "Safari";
			default:
				return "other";
		}
	})(window.navigator.userAgent.toLowerCase());

	function toShortScale(number: number) {
		// Convert to short scale
		var rounded = Math.floor(number);
		var length = rounded.toLocaleString("fullwide", {
			useGrouping: false,
		}).length;
		var index = roundOffTo(length - 1, 3) / 3;
		var numbertodivide = "1";
		for (var i = 0; i < roundOffTo(length - 1, 3); i++) {
			numbertodivide += "0";
		}
		return (
			+(number / parseInt(numbertodivide)).toFixed(2) + " " + biglist[index]
		);
	}
	function getPrice(base: number, amount: number) {
		return Math.ceil(1.15 ** amount * base);
	}
	function get_random(list: string | any[]) {
		return list[Math.floor(Math.random() * list.length)];
	}

	var cps = 0;
	var cpss: number[] = [];
	var averageCps = 0;

	document.addEventListener("click", () => cps++);

	setInterval(() => {
		cpss.push(cps);
		cps = 0;
		if (cpss.length > 5) {
			cpss.shift();
		}
		averageCps = cpss.reduce((a, c) => a + c) / cpss.length;
	}, 1000);

	class Bot {
		name: string;
		baseprice: number;
		sps: number;
		amount: () => number;
		obj: () => HTMLElement;
		buyFunc: () => void;

		constructor(name: string, baseprice: number, sps: number) {
			this.name = name;
			this.baseprice = baseprice;
			this.sps = sps;
			this.amount = () => Game.botsBought[name.toLowerCase()];
			this.obj = () =>
				c({
					tag: "div",
					id: `bot-${removeSpecials(name)}`,
					textContent: name,
					classList: `bot${
						!(Game.shapes > this.baseprice / 10) ? " disabled" : ""
					}`,
					children: [
						c({
							tag: "span",
							classList: "botprice",
							textContent: `${toShortScale(
								getPrice(baseprice, this.amount())
							)} Shapes`,
						}),
						c({
							tag: "span",
							classList: "botamount",
							textContent: (this.amount() ?? "").toString(),
						}),
						c({
							tag: "span",
							classList: "spsbot",
							textContent: `Base: ${toShortScale(sps)} shapes/s`,
						}),
					],
				});
			this.buyFunc = () => {
				if (
					Game.shapes >=
					getPrice(this.baseprice, Game.botsBought[name.toLowerCase()])
				) {
					Game.shapes -= getPrice(
						this.baseprice,
						Game.botsBought[name.toLowerCase()]
					);
					Game.shapesEarned -= getPrice(
						this.baseprice,
						Game.botsBought[name.toLowerCase()]
					);
					Game.botsBought[name.toLowerCase()]++;
				}
			};
		}
	}

	class Upgrade {
		name: string;
		requirement: () => boolean;
		price: number;
		desc: string;
		img: string;
		effects: () => void;
		obj: () => HTMLElement;
		constructor(
			name: string,
			requirement: () => boolean,
			price: number,
			desc: string,
			img: string,
			effects: () => void
		) {
			this.img = img;
			this.name = name;
			this.price = price;
			this.desc = desc;
			this.requirement = requirement;
			this.effects = effects;
			this.obj = () => {
				var newObj = c({
					tag: "div",
					classList: "upgrade",
					id: `upgrade-${removeSpecials(name)}`,
					children: [c({ tag: "img", src: img })],
				});
				newObj.addEventListener("mouseenter", () => {
					new f("#hover > #hoverheader").setText(name);
					new f("#hover > #hoverpara").setText(desc);
					new f("#hover > #hoverprice").setText(
						`${toShortScale(price)} Shapes`
					);
					$$("#hover").style.display = "block";
				});
				newObj.addEventListener("mouseleave", () => {
					$$("#hover").style.display = "none";
				});
				return newObj;
			};
		}
	}

	class Achievement {
		name: string;
		requirement: () => boolean;
		requirementstring: string;
		rarity: string;
		obj: () => HTMLElement;
		constructor(
			name: string,
			requirement: () => boolean,
			requirementstring: string,
			rarity: string
		) {
			this.name = name;
			this.requirement = requirement;
			this.rarity = rarity;
			this.requirementstring = requirementstring;
			this.obj = () => {
				Game.achieved++;

				return c({
					tag: "span",
					classList: "acmt",
					children: [
						c({
							tag: "span",
							classList: `acmt-${
								Game.gottenAchievements.includes(this.name) ? rarity : "no"
							} acmt-name`,
							textContent:
								rarity === "secret"
									? Game.gottenAchievements.includes(this.name)
										? "SECRET: " + name
										: "SECRET: " + "???"
									: Game.gottenAchievements.includes(this.name)
									? name
									: "???",
						}),
						c({ tag: "span", classList: ``, textContent: " - " }),
						c({
							tag: "span",
							classList: `acmt-require`,
							textContent: Game.gottenAchievements.includes(this.name)
								? requirementstring
								: "???",
						}),
						c({ tag: "span", innerHTML: "<br>" }),
					],
				});
			};
		}
	}

	class AscensionUpgrade {
		name: string;
		hasUpgrade: () => boolean;
		desc: string;
		price: number;
		img: string;
		effect: () => void;
		x: number;
		y: number;
		obj: () => HTMLElement;
		constructor(
			name: string,
			hasUpgrade: string,
			desc: string,
			price: number,
			img: string,
			effect: () => void,
			x: number,
			y: number
		) {
			this.name = name;
			this.hasUpgrade =
				hasUpgrade === ""
					? () => true
					: () => {
							return (
								Game.gottenAscensionUpgrades.filter(
									(a: any) => a === hasUpgrade
								).length !== 0
							);
					  };
			this.desc = desc;
			this.price = price;
			this.x = x;
			this.y = y;
			this.img = img;
			this.effect = effect;
			this.obj = () => {
				var thing = c({
					tag: "div",
					id: `ascension-${removeSpecials(name).toLowerCase()}`,
					classList: "ascensionUpgrade",
					children: [
						c({
							tag: "img",
							src: img,
						}),
					],
				});
				thing.style.position = "absolute";
				thing.style.top = `${y}vh`;
				thing.style.left = `${x}vw`;
				return thing;
			};
		}
	}

	var Game: {
		version: string;
		totalHighersEarned: number;
		tentick: () => void;
		prevUpgrades: string[];
		slowtick: () => void;
		second: () => void;
		newstick: () => void;
		minutetick: () => void;
		prevUps: never[];
		availAscensionUpgrades: AscensionUpgrade[];
		init(): void;
		higherPolygons: number;
		name: string;
		hacked: boolean;
		setNameSilkyway: boolean;
		usedAutoclicker: boolean;
		secondsSpent: number;
		acsensions: number;
		researchProgress: number;
		sps: number;
		cpsTexts: { content: string; x: number; y: number; opacity: number }[];
		availUpgrades: string[];
		achievements: Achievement[];
		ascensionUpgrades: AscensionUpgrade[];
		totalUpgrades: Upgrade[];
		shapes: 0;
		shapesEarned: 0;
		promptreturn: string;
		alerts: NodeJS.Timeout[];
		cheatMenu: boolean;
		prompt: (prompt: string, message?: string) => Promise<string | null>;
		alert: (message: string) => void;
		load: () => void;
		showChangelog: () => void;
		shapeRotation: number;
		bots: Bot[];
		achieved: number;
		gottenAchievements: string[];
		gottenAscensionUpgrades: string[];
		botsBought: { [id: string]: number };
		boughtUpgrades: string[];
		clicks: number;
		spc: number;
		clickShape: (e: MouseEvent) => void;
		totalShapesEarned: number;
		mouseShapes: number;
		boosts: {
			endUp: number;
			clickUp: number;
			clickMult: number;
			endMult: number;
			mult: {
				[id: string]: number;
			};
			add: { [id: string]: number };
		};
		updateBots: () => void;
		tick: () => void;
	} = {
		promptreturn: "",
		alerts: [],
		cheatMenu: false,
		shapeRotation: 0,
		shapes: 0,
		shapesEarned: 0,
		bots: [],
		achieved: 0,
		gottenAchievements: [],
		boughtUpgrades: [],
		gottenAscensionUpgrades: [],
		botsBought: {},
		totalUpgrades: [],
		clicks: 0,
		achievements: [],
		ascensionUpgrades: [],
		availUpgrades: [],
		spc: 1,
		totalShapesEarned: 0,
		mouseShapes: 0,
		boosts: {
			clickMult: 1,
			endMult: 1,
			clickUp: 0,
			mult: {},
			endUp: 0,
			add: {},
		},
		cpsTexts: [],
		researchProgress: 0,
		sps: 0,
		acsensions: 0,
		availAscensionUpgrades: [],
		hacked: false,
		higherPolygons: 0,
		name: get_random(randomfirst) + " " + get_random(randomlast)
	,
		prevUps: [],
		prevUpgrades: [],
		secondsSpent: 0,
		setNameSilkyway: false,
		totalHighersEarned: 0,
		usedAutoclicker: false,
		version: version,

		clickShape(e: MouseEvent) {
			new f("#shape > img").classList.remove("bounce");
			setTimeout(() => {
				new f("#shape > img").classList.add("bounce");
			}, 1);
			var thing2 = Math.random() > 0.95;
			Game.shapes += thing2 ? Game.spc * 3 : Game.spc;
			Game.totalShapesEarned += thing2 ? Game.spc * 3 : Game.spc;
			Game.shapesEarned += thing2 ? Game.spc * 3 : Game.spc;
			Game.mouseShapes += thing2 ? Game.spc * 3 : Game.spc;
			Game.clicks++;
			Game.shapeRotation += 10;
			if (Game.shapeRotation >= 360) {
				Game.shapeRotation = 0;
			}
			$$("#shape").style.transform = `rotate(${Game.shapeRotation}deg)`;

			// $$('#fx').setAttribute('width', '100%')
			// $$('#fx').setAttribute('height', '100%')
			var ctx = $$<HTMLCanvasElement>("#fx").getContext("2d")!;
			ctx.font = `bold 3rem Poppins`;
			ctx.lineWidth = 4;
			ctx.fillText(
				`+ ${toShortScale(thing2 ? Game.spc * 3 : Game.spc)}`,
				getMousePos($$("#fx"), e).x + (Math.random() - 0.5) * 10,
				getMousePos($$("#fx"), e).y + (Math.random() - 0.5) * 10
			);
			Game.cpsTexts.push({
				content: `+ ${toShortScale(thing2 ? Game.spc * 3 : Game.spc)}`,
				x: getMousePos($$("#fx"), e).x + (Math.random() - 0.5) * 10,
				y: getMousePos($$("#fx"), e).y + (Math.random() - 0.5) * 10,
				opacity: 1,
			});
		},

		prompt(prompt: string, message?: string) {
			return new Promise((resolve) => {
				new f("#prompt").classList.add("prompton");
				new f(".promptheader").setText(prompt);
				if (message) {
					$$<HTMLTextAreaElement>(".promptinput").value = message;
				} else {
					$$<HTMLTextAreaElement>(".promptinput")!.value = "";
				}
				var thing = Game.promptreturn;
				const ok = () => {
					new f("#prompt").classList.remove("prompton");
					$$(".promptok").removeEventListener("click", ok);
					resolve($$<HTMLTextAreaElement>(".promptinput").value);
				};
				var cancel = () => {
					new f("#prompt").classList.remove("prompton");
					$$(".promptcancel").removeEventListener("click", cancel);
					resolve(null);
				};
				$$(".promptok").addEventListener("click", ok);
				$$(".promptcancel").addEventListener("click", cancel);
			});
		},
		showChangelog() {
			$$("#changelogdiv").style.display = "block";
		},
		alert(message: string) {
			Game.alerts.forEach((alert: NodeJS.Timeout) => {
				clearTimeout(alert);
			});
			new f("#alert").classList.add("alert-on");
			new f("#alert").setText(message);
			Game.alerts.push(
				setTimeout(() => {
					new f("#alert").classList.remove("alert-on");
				}, 3000)
			);
		},

		updateBots() {
			new f("#botsdiv").setHtml("");
			Game.bots.forEach(
				(
					bot: {
						obj: () => any;
						name: string;
						buyFunc: () => void;
						baseprice: any;
						amount: () => any;
					},
					index: any
				) => {
					new f("#botsdiv").appendChild(bot.obj());
					new f(`#bot-${removeSpecials(bot.name)}`).on("click", () => {
						bot.buyFunc();
						Game.updateBots();
					});
					$$(`#bot-${removeSpecials(bot.name)}`).addEventListener(
						"mouseenter",
						() => {
							new f("#hover > #hoverheader").setText(bot.name);
							new f("#hover > #hoverpara").setText(
								`Generates ${toShortScale(
									eval(
										`(Game.bots[${index}].sps + Game.boosts.${removeSpecials(
											bot.name
										)}Up) * Game.boosts.${removeSpecials(bot.name)}Mult`
									)
								)} shapes per second.\nYour ${eval(
									`Game.${removeSpecials(bot.name)}s`
								)} ${bot.name.toLowerCase()}s produce a total of ${toShortScale(
									eval(
										`(Game.bots[${index}].sps + Game.boosts.${removeSpecials(
											bot.name
										)}Up) * ${eval(
											`Game.${removeSpecials(bot.name)}s`
										)} * Game.boosts.${removeSpecials(bot.name)}Mult`
									)
								)} shapes per second.`
							);
							new f("#hover > #hoverprice").setText(
								`${toShortScale(getPrice(bot.baseprice, bot.amount()))} Shapes`
							);
							$$("#hover").style.display = "block";
						}
					);
					$$(`#bot-${removeSpecials(bot.name)}`).addEventListener(
						"mouseleave",
						() => {
							$$("#hover").style.display = "none";
						}
					);
				}
			);
		},

		init() {
			Game.version = version;

			Game.clicks = 0;
			Game.shapes = 0;
			Game.secondsSpent = 0;
			Game.acsensions = 0;

			Game.botsBought["cursor"] = 0;
			Game.botsBought["ruler"] = 0;
			Game.botsBought["builder"] = 0;
			Game.botsBought["factory"] = 0;
			Game.botsBought["distrubution"] = 0;
			Game.botsBought["bank"] = 0;
			Game.botsBought["polystructor"] = 0;
			Game.botsBought["wizard tower"] = 0;
			Game.botsBought["transformer"] = 0;

			Game.shapesEarned = 0;
			Game.totalShapesEarned = 0;
			Game.totalHighersEarned = 0;

			Game.hacked = false;

			Game.higherPolygons = 0;

			Game.mouseShapes = 0;
			Game.usedAutoclicker = false;
			Game.setNameSilkyway = false;

			Game.boughtUpgrades = [];
			Game.gottenAscensionUpgrades = [];
			Game.gottenAchievements = [];
			Game.load();

		},

		tick() {
			Game.cheatMenu = Game.name.endsWith(" is a dev");

			if (Game.shapes !== Game.shapesEarned) {
				Game.hacked = true;
			}

			if (Game.name.toLowerCase() === "silkyway") Game.setNameSilkyway = true;

			if (averageCps >= 40) {
				Game.usedAutoclicker = true;
			}

			var ctx = $$<HTMLCanvasElement>("#fx").getContext("2d")!;
			ctx.clearRect(
				0,
				0,
				$$<HTMLCanvasElement>("#fx").width,
				$$<HTMLCanvasElement>("#fx").height
			);
			Game.cpsTexts.forEach(
				(text: { opacity: number; content: any; x: any; y: number }) => {
					if (text.opacity > 0) {
						ctx.fillStyle = `rgba(0, 0, 0, ${(text.opacity -= 0.003)})`;

						ctx.fillText(text.content, text.x, (text.y -= 0.5));
					} else {
						Game.cpsTexts = Game.cpsTexts.filter((txt: any) => txt !== text);
					}
				}
			);

			new f("#achievementsdiv").setHtml("");
			Game.achieved = 0;
			Game.achievements.forEach(
				(achievement: {
					obj: () => any;
					requirement: () => any;
					name: any;
					rarity: any;
				}) => {
					var obj = achievement.obj();
					if (
						achievement.requirement() &&
						!Game.gottenAchievements.includes(achievement.name)
					) {
						Game.gottenAchievements.push(achievement.name);
						Game.alert(
							`New ${achievement.rarity} achievement got!\n${achievement.name}`
						);
					}
					new f("#achievementsdiv").appendChild(obj);
				}
			);

			Game.boosts.clickUp = 0;
			Game.boosts.clickMult = 1;

			Game.boosts.add["cursor"] = 0;
			Game.boosts.mult["cursor"] = 1;
			Game.boosts.add["ruler"] = 0;
			Game.boosts.mult["ruler"] = 1;
			Game.boosts.add["builder"] = 0;
			Game.boosts.mult["builder"] = 1;
			Game.boosts.add["factory"] = 0;
			Game.boosts.mult["factory"] = 1;
			Game.boosts.add["distrubution"] = 0;
			Game.boosts.mult["distrubution"] = 1;
			Game.boosts.add["bank"] = 0;
			Game.boosts.mult["bank"] = 1;
			Game.boosts.add["polystructor"] = 0;
			Game.boosts.mult["polystructor"] = 1;
			Game.boosts.add["wizard tower"] = 0;
			Game.boosts.mult["wizard tower"] = 1;
			Game.boosts.add["transformer"] = 0;
			Game.boosts.mult["transformer"] = 1;

			Game.boosts.endUp = 0;
			Game.boosts.endMult = 1;

			Game.boughtUpgrades.forEach((upgrade: any) => {
				var up2 = Game.totalUpgrades.filter(
					(up: { name: any }) => up.name === upgrade
				)[0];

				up2.effects();
			});
			Game.gottenAscensionUpgrades.forEach((upgrade: any) => {
				var up2 = Game.ascensionUpgrades.filter(
					(up: { name: any }) => up.name === upgrade
				)[0];
				up2.effect();
			});

			Game.sps = 0;
	
			for (let i = 0; i < Game.bots.length; i++) {
				let n = Game.bots[i].name.toLowerCase();
				Game.sps +=
					(Game.bots[i].sps + Game.boosts.add[n]) *
					Game.botsBought[n] *
					Game.boosts.mult[n];
					
			}

			Game.sps += Game.boosts.endUp;
			Game.sps *= Game.boosts.endMult;
			Game.spc = 1 * Game.boosts.clickMult + Game.boosts.clickUp;

			new f("h1#shapecount").setText(`${toShortScale(Game.shapes)} Shapes`);
			new f("#sps").setText(`${toShortScale(Game.sps)} shapes/s`);
			new f("#ascensionlabel").setText(
				`${toShortScale(Game.higherPolygons)} Higher Polygons`
			);
		},

		tentick() {
			Game.availUpgrades = [];
			Game.totalUpgrades.forEach(
				(upgrade: { name: string; requirement: () => boolean }) => {
					if (
						Game.boughtUpgrades.includes(upgrade.name) ||
						upgrade.requirement() === false
					) {
					} else {
						Game.availUpgrades.push(upgrade.name);
					}
				}
			);
			if (
				JSON.stringify(Game.prevUpgrades) !== JSON.stringify(Game.availUpgrades)
			) {
				new f("#upgradesdiv").setHtml("");
				Game.availUpgrades.forEach((upgrade: any) => {
					var up2 = Game.totalUpgrades.filter(
						(a: { name: any }) => a.name === upgrade
					)[0];
					new f("#upgradesdiv").appendChild(up2.obj());
					new f(`#upgrade-${removeSpecials(upgrade)}`).on("click", () => {
						if (Game.shapes >= up2.price) {
							Game.shapes -= up2.price;
							Game.shapesEarned -= up2.price;
							Game.availUpgrades = Game.availUpgrades.filter(
								(up: any) => up !== upgrade
							);
							Game.boughtUpgrades.push(upgrade);
						}
					});
				});
			}
			Game.availUpgrades.forEach((upgrade: any) => {
				var up2 = Game.totalUpgrades.filter(
					(a: { name: any }) => a.name === upgrade
				)[0];
				if (Game.shapes >= up2.price) {
					new f(`#upgrade-${removeSpecials(up2.name)}`).classList.remove(
						"disabled"
					);
				} else {
					new f(`#upgrade-${removeSpecials(up2.name)}`).classList.add(
						"disabled"
					);
				}
			});
			Game.prevUpgrades = Game.availUpgrades;

			if (Game.cheatMenu) {
				$("#cheating").show();
			} else {
				$("#cheating").hide();
			}
		},
		newstick() {
			const hasUpgrade = (upgradename: string) => {
				return Game.boughtUpgrades.includes(upgradename);
			};
			var randnews = () => {
				while (true) {
					var thing = get_random([
						{
							content: "Shape sales increased by over 150% over the last week.",
							requirement: () => true,
						},
						{
							content: '"Shapes are the newest fad." reports reporter.',
							requirement: () => true,
						},
						{
							content:
								"Advanced bots are being made for faster shape manufacturing.",
							requirement: () => true,
						},
						{
							content:
								"Shape comptetitors cannot compete with one particular company.",
							requirement: () => true,
						},
						{
							content:
								"Buying shapes is as easy as toasting bread, which is, very easy.",
							requirement: () => true,
						},
						{
							content:
								'Advanced megaphone, nicknamed "Moral Support", is in development, companies are eager to try it.',
							requirement: () => !hasUpgrade("Moral Support"),
						},
						{
							content:
								"Genius company uses rulers to improve bot performance. They make ten times more shapes than comptetitors.",
							requirement: () =>
								Game.botsBought["ruler"] > 0 && Game.botsBought["builder"] < 0,
						},
						{
							content: `New company starts using cursors to automate shape production. They are still behind as they only have ${Game.botsBought["cursor"]} cursors.`,
							requirement: () =>
								Game.botsBought["cursor"] > 0 &&
								Game.botsBought["cursor"] < 5 &&
								Game.botsBought["ruler"] === 0,
						},
						{
							content: `New company starts using cursors to automate shape production. They are beating the comptetion with a staggering ${Game.botsBought["cursor"]} cursors!`,
							requirement: () =>
								Game.botsBought["cursor"] >= 5 &&
								Game.botsBought["ruler"] === 0,
						},
						{
							content: `Company starts cutting shapes in half with never before seen techonology called 'Bisecting'`,
							requirement: () =>
								hasUpgrade("Bisect") && !hasUpgrade("Bisect Mk2"),
						},
						{
							content: `The new techonology called 'Bisecting' got its second iteration as it now cut shapes into quarters.`,
							requirement: () =>
								hasUpgrade("Bisect Mk2") && !hasUpgrade("Moral Support"),
						},
						{
							content: `${Game.name}'s shape empire has invented builders that automatically generate shapes faster than any other bot.`,
							requirement: () =>
								Game.botsBought["builder"] > 0 &&
								Game.botsBought["factory"] === 0,
						},
						{
							content: `${Game.name}'s shape empire now makes ${Game.sps} shapes every second! They are at the frontier of shape making.`,
							requirement: () => Game.sps > 10,
						},
					]);
					if (thing.requirement() === true) {
						return thing.content;
					}
				}
			};
			new f("#news").setHtml("News: " + randnews());
		},
		slowtick() {},
		second() {
			Game.shapes += Game.sps;
			Game.totalShapesEarned += Game.sps;
			Game.shapesEarned += Game.sps;
			Game.secondsSpent++;

			document.title = `Shape Clicker - ${toShortScale(Game.shapes)} Shapes`;
		},

		minutetick() {
			localStorage.setItem("savecode", save());
			try {
				Game.alert("Game Autosaved.");
			} catch {}
		},

		load() {
			new f("#clickdiv").appendChild(Assets.clickShape());
			console.log("created")
			new f("#clickdiv").appendChild(Assets.shapeCount());
			new f("#clickdiv").appendChild(Assets.spsCount());
			new f("#clickdiv").appendChild(Assets.nameSelector());

			Game.bots = [
				new Bot("Cursor", 15, 0.1),
				new Bot("Ruler", 100, 1),
				new Bot("Builder", 1500, 10),
				new Bot("Factory", 30000, 48),
				new Bot("Distrubution", 150000, 250),
				new Bot("Bank", 1500000, 1400),
				new Bot("Polystructor", 15000000, 7500),
				new Bot("Wizard Tower", 300_000_000, 40000),
				new Bot("Transformer", 1_500_000_000, 200000),
			];

			function hAU(upname: string) {
				return Game.gottenAscensionUpgrades.includes(upname);
			}
			function hU(upname: string) {
				return Game.boughtUpgrades.includes(upname);
			}

			Game.totalUpgrades = [
				new Upgrade(
					"Bisect",
					() => Game.clicks > 5,
					100,
					"Double the amount of shapes you get per click.",
					"img/upgrades/mouses/bisect/bisect1.png",
					() => {
						Game.boosts.clickMult *= 2;
					}
				),
				new Upgrade(
					"Bisect Mk2",
					() => Game.clicks > 200,
					500,
					"Double the amount of shapes you get per click.\nTechnology upgraded from the previous version.",
					"img/upgrades/mouses/bisect/bisect2.png",
					() => {
						Game.boosts.clickMult *= 2;
					}
				),
				new Upgrade(
					"Moral Support",
					() => Game.clicks > 100,
					10000,
					"Encourages your bots to work more! Increases sps by 5%",
					"img/upgrades/moralsupport.png",
					() => {
						Game.boosts.endMult += 0.05;
					}
				),
				new Upgrade(
					"Wood Mouse",
					() => Game.botsBought["cursor"] > 5 && Game.clicks > 500,
					10000,
					"Encourages your bots to work harder! Gain +1% of your sps per click.",
					"img/upgrades/mouses/woodmouse.png",
					() => {
						Game.boosts.clickUp += Game.sps * 0.01;
					}
				),
				new Upgrade(
					"Iron Mouse",
					() => Game.botsBought["cursor"] > 10 && Game.clicks > 500,
					100000,
					"Encourages your bots to work eve harder! Gain another +1% of your sps per click.",
					"img/upgrades/mouses/ironmouse.png",
					() => {
						Game.boosts.clickUp += Game.sps * 0.01;
					}
				),
				new Upgrade(
					"Gold Mouse",
					() => Game.botsBought["cursor"] > 15 && Game.clicks > 500,
					1000000,
					"Encourages your bots to work eve harder! Gain another +1% of your sps per click.",
					"img/upgrades/mouses/goldmouse.png",
					() => {
						Game.boosts.clickUp += Game.sps * 0.01;
					}
				),
				new Upgrade(
					"Diamond Mouse",
					() => Game.botsBought["cursor"] > 20 && Game.clicks > 500,
					10000000,
					"Encourages your bots to work eve harder! Gain another +1% of your sps per click",
					"img/upgrades/mouses/diamondmouse.png",
					() => {
						Game.boosts.clickUp += Game.sps * 0.01;
					}
				),

				new Upgrade(
					"Double Click",
					() => Game.botsBought["cursor"] > 0,
					250,
					"Makes cursors click twice.",
					"img/upgrades/cursor/cursor1.png",
					() => {
						Game.boosts.mult["cursor"] *= 2;
					}
				),
				new Upgrade(
					"Faster Fingers",
					() => Game.botsBought["cursor"] >= 10,
					1000,
					"Makes cursors click two times faster",
					"img/upgrades/cursor/cursor2.png",
					() => {
						Game.boosts.mult["cursor"] *= 2;
					}
				),
				new Upgrade(
					"Autoclicker",
					() => Game.botsBought["cursor"] >= 20,
					10000,
					"Lets cursors autoclick the shape, doubling cursor sps.",
					"img/upgrades/cursor/cursor3.png",
					() => {
						Game.boosts.mult["cursor"] *= 2;
					}
				),

				new Upgrade(
					"Protractor",
					() => Game.botsBought["ruler"] > 0,
					500,
					"Make shapes more accurate. Doubles the amount of shapes a ruler produces.",
					"img/upgrades/ruler/ruler1.png",
					() => {
						Game.boosts.mult["ruler"] *= 2;
					}
				),
				new Upgrade(
					"Longer Rulers",
					() => Game.botsBought["ruler"] >= 10,
					3000,
					"Makes rulers longer. Doubles ruler sps.",
					"img/upgrades/ruler/ruler2.png",
					() => {
						Game.boosts.mult["ruler"] *= 2;
					}
				),
				new Upgrade(
					"Laser Cut Rulers",
					() => Game.botsBought["ruler"] >= 20,
					20000,
					"Makes rulers more accurate then ever doubling ruler sps.",
					"img/upgrades/ruler/ruler3.png",
					() => {
						Game.boosts.mult["ruler"] *= 2;
					}
				),

				new Upgrade(
					"Better Tools",
					() => Game.botsBought["builder"] > 0,
					5000,
					"Give builders better tools. Doubles builders' sps.",
					"img/upgrades/builder/builder1.png",
					() => {
						Game.boosts.mult["builder"] *= 2;
					}
				),
				new Upgrade(
					"Stainless Steel Casing",
					() => Game.botsBought["builder"] >= 10,
					30000,
					"Gives builders a better casing. Doubles builders' sps.",
					"img/upgrades/builder/builder2.png",
					() => {
						Game.boosts.mult["builder"] *= 2;
					}
				),
				new Upgrade(
					"Aluminum Helmets",
					() => Game.botsBought["builder"] >= 20,
					150000,
					"Gives workers stronger helmets making them two times better.",
					"img/upgrades/builder/builder3.png",
					() => {
						Game.boosts.mult["builder"] *= 2;
					}
				),

				new Upgrade(
					"Stronger Machines",
					() => Game.botsBought["factory"] > 0,
					100000,
					"Makes machines in factories have more strength. Doubles factories' sps.",
					"img/upgrades/factory/factory1.png",
					() => {
						Game.boosts.mult["factory"] *= 2;
					}
				),
				new Upgrade(
					"Air Filters",
					() => Game.botsBought["factory"] >= 10,
					500000,
					"Removes 10% of greenhouse gasses produced by factories, allowing them to go 2x faster. Doubles factories' sps.",
					"img/upgrades/factory/factory2.png",
					() => {
						Game.boosts.mult["factory"] *= 2;
					}
				),
				new Upgrade(
					"Better Masks",
					() => Game.botsBought["factory"] >= 20,
					1500000,
					"Gives factory workers better masks doubling factory sps",
					"img/upgrades/factory/factory3.png",
					() => {
						Game.boosts.mult["factory"] *= 2;
					}
				),

				new Upgrade(
					"Helping Hands",
					() => Game.botsBought["distrubution"] > 0,
					500000,
					"Adds helping hands to your distrubutions, doubles distrubution sps.",
					"img/upgrades/distrubution/distrubution1.png",
					() => {
						Game.boosts.mult["distrubution"] *= 2;
					}
				),
				new Upgrade(
					"Bigger Forklifts",
					() => Game.botsBought["distrubution"] >= 10,
					2500000,
					"Makes forklifts bigger multiplying distrubution sps by 2.",
					"img/upgrades/distrubution/distrubution2.png",
					() => {
						Game.boosts.mult["distrubution"] *= 2;
					}
				),
				new Upgrade(
					"ForkBots",
					() => Game.botsBought["distrubution"] >= 20,
					15_000_000,
					"Creates bots that automatically carry items to the forklifts for you! Doubles distrubution sps.",
					"img/upgrades/distrubution/distrubution3.png",
					() => {
						Game.boosts.mult["distrubution"] *= 2;
					}
				),

				new Upgrade(
					"Credit Cards",
					() => Game.botsBought["bank"] > 0,
					10000000,
					"Gives your customers credit cards, doubles bank sps.",
					"img/upgrades/bank/bank1.png",
					() => {
						Game.boosts.mult["bank"] *= 2;
					}
				),
				new Upgrade(
					"Heist Proof Vaults",
					() => Game.botsBought["bank"] >= 10,
					50000000,
					"Prevents vaults from being breached multiplying bank sps by 2.",
					"img/upgrades/bank/bank2.png",
					() => {
						Game.boosts.mult["bank"] *= 2;
					}
				),
				new Upgrade(
					"Modern Lobbies",
					() => Game.botsBought["bank"] >= 20,
					150_000_000,
					"Give banks modern lobbies, keeping customers for longer, doubling bank sps.",
					"img/upgrades/bank/bank3.png",
					() => {
						Game.boosts.mult["bank"] *= 2;
					}
				),

				new Upgrade(
					"Faster Construction",
					() => Game.botsBought["polustructor"] > 0,
					60000000,
					"Makes polystructors construct polygons 2 times faster.",
					"img/upgrades/polystructor/polystructor1.png",
					() => {
						Game.boosts.mult["polystructor"] *= 2;
					}
				),
				new Upgrade(
					"Angle Accuracy",
					() => Game.botsBought["polustructor"] >= 10,
					300_000_000,
					"Makes polystructors 2 times more accurate doubling polystructor sps.",
					"img/upgrades/polystructor/polystructor2.png",
					() => {
						Game.boosts.mult["polystructor"] *= 2;
					}
				),
				new Upgrade(
					"Sapphire Lasers",
					() => Game.botsBought["polustructor"] >= 20,
					1_000_000_000,
					"Upgrades the polystructors's lasers, doubling polystructor sps.",
					"img/upgrades/polystructor/polystructor3.png",
					() => {
						Game.boosts.mult["polystructor"] *= 2;
					}
				),

				new Upgrade(
					"Snapped Movement",
					() => Game.botsBought["transformer"] > 0,
					6_000_000_000,
					"Snaps movement every unit doubling transformer efficiency.",
					"img/upgrades/transformer/transformer1.png",
					() => {
						Game.boosts.mult["transformer"] *= 2;
					}
				),
				new Upgrade(
					"Smarter Snapping",
					() => Game.botsBought["transformer"] >= 10,
					30_000_000_000,
					"Gives smart snapping based on context, doubling transformer efficiency.",
					"img/upgrades/transformer/transformer2.png",
					() => {
						Game.boosts.mult["transformer"] *= 2;
					}
				),
				new Upgrade(
					"Negative Rotation Values",
					() => Game.botsBought["transformer"] >= 20,
					100_000_000_000,
					"Lets you type negative values for rotation.",
					"img/upgrades/transformer/transformer3.png",
					() => {
						Game.boosts.mult["transformer"] *= 2;
					}
				),

				new Upgrade(
					"Wizard Hats",
					() => Game.botsBought["wizard tower"] > 0,
					1_000_000_000,
					"Gives wizards more hats doubling wizard tower efficiency.",
					"img/upgrades/wizardtower/wizardtower1.png",
					() => {
						Game.boosts.mult["wizard tower"] *= 2;
					}
				),
				new Upgrade(
					"Cultist Group",
					() => Game.botsBought["wizard tower"] >= 10,
					5_000_000_000,
					"Allows wizards to create cults doubling wizard tower sps.",
					"img/upgrades/wizardtower/wizardtower2.png",
					() => {
						Game.boosts.mult["wizard tower"] *= 2;
					}
				),
				new Upgrade(
					"Higher Quality Wands",
					() => Game.botsBought["wizard tower"] >= 20,
					20_000_000_000,
					"Makes wands have higher quality wood doubling wizard tower sps.",
					"img/upgrades/wizardtower/wizardtower3.png",
					() => {
						Game.boosts.mult["wizard tower"] *= 2;
					}
				),

				new Upgrade(
					"Book of Constants (Volume 1)",
					() => Game.shapes >= 100000,
					300000,
					"Allows you to get constants that increase sps. Contains 9 constants.",
					"img/upgrades/constants/bookofconstants1.png",
					() => {}
				),
				new Upgrade(
					"Constant: Pi",
					() => Game.shapes >= 50000 && hU("Book of Constants (Volume 1)"),
					100000,
					"Increases sps by 1%",
					"img/upgrades/constants/pi.png",
					() => {
						Game.boosts.endMult += 0.1;
					}
				),
				new Upgrade(
					"Constant: e",
					() => Game.shapes >= 250000 && hU("Book of Constants (Volume 1)"),
					500000,
					"Increases sps by 1%",
					"img/upgrades/constants/e.png",
					() => {
						Game.boosts.endMult += 0.1;
					}
				),
				new Upgrade(
					"Constant: sqrt(2)",
					() => Game.shapes >= 500000 && hU("Book of Constants (Volume 1)"),
					1000000,
					"Increases sps by 1%",
					"img/upgrades/constants/sqrt(2).png",
					() => {
						Game.boosts.endMult += 0.1;
					}
				),
				new Upgrade(
					"Constant: sqrt(3)",
					() => Game.shapes >= 1000000 && hU("Book of Constants (Volume 1)"),
					2000000,
					"Increases sps by 1%",
					"img/upgrades/constants/sqrt(3).png",
					() => {
						Game.boosts.endMult += 0.1;
					}
				),
				new Upgrade(
					"Constant: sqrt(5)",
					() => Game.shapes >= 2500000 && hU("Book of Constants (Volume 1)"),
					5000000,
					"Increases sps by 1%",
					"img/upgrades/constants/sqrt(5).png",
					() => {
						Game.boosts.endMult += 0.1;
					}
				),
				new Upgrade(
					"Constant: Phi",
					() => Game.shapes >= 5000000 && hU("Book of Constants (Volume 1)"),
					10000000,
					"Increases sps by 1%",
					"img/upgrades/constants/phi.png",
					() => {
						Game.boosts.endMult += 0.1;
					}
				),
				new Upgrade(
					"Constant: 0",
					() => Game.shapes >= 10_000_000 && hU("Book of Constants (Volume 1)"),
					20000000,
					"Increases sps by 1%",
					"img/upgrades/constants/zero.png",
					() => {
						Game.boosts.endMult += 0.1;
					}
				),
				new Upgrade(
					"Constant: 1",
					() => Game.shapes >= 25_000_000 && hU("Book of Constants (Volume 1)"),
					50000000,
					"Increases sps by 1%",
					"img/upgrades/constants/one.png",
					() => {
						Game.boosts.endMult += 0.1;
					}
				),
				new Upgrade(
					"Constant: i",
					() => Game.shapes >= 50_000_000 && hU("Book of Constants (Volume 1)"),
					100_000_000,
					"Increases sps by 1%。 Unlocks the imaginary suite.",
					"img/upgrades/constants/i.png",
					() => {
						Game.boosts.endMult += 0.1;
					}
				),

				new Upgrade(
					"Book of Constants (Volume 2)",
					() => Game.shapes >= 500000 && hAU("Book of Constants (Volume 2)"),
					2000000,
					"(Unlocked from Ascension) Unlocks 9 constants that give +2% sps bonus each.",
					"img/upgrades/constants/bookofconstants2.png",
					() => {}
				),
				new Upgrade(
					"Constant: Tau",
					() => Game.shapes >= 1000000 && hU("Book of Constants (Volume 2)"),
					2_000_000,
					"Increases sps by 2%",
					"img/constants/tau.png",
					() => {
						Game.boosts.endMult += 0.1;
					}
				),
				new Upgrade(
					"Constant: Ramanujan-Soldner constant",
					() => Game.shapes >= 2000000 && hU("Book of Constants (Volume 2)"),
					4_000_000,
					"Increases sps by 2%  (I don't know what this is i got it from wikipedia)",
					"img/constants/micro.png",
					() => {
						Game.boosts.endMult += 0.1;
					}
				),
				new Upgrade(
					"Constant: Universal parabolic constant",
					() => Game.shapes >= 1000000 && hU("Book of Constants (Volume 2)"),
					2_000_000,
					"Increases sps by 2%",
					"img/constants/tau.png",
					() => {
						Game.boosts.endMult += 0.1;
					}
				),
				new Upgrade(
					"Constant: Cahen's constant",
					() => Game.shapes >= 1000000 && hU("Book of Constants (Volume 2)"),
					2_000_000,
					"Increases sps by 2%",
					"img/constants/tau.png",
					() => {
						Game.boosts.endMult += 0.1;
					}
				),
				new Upgrade(
					"Constant: Gelfond's constant",
					() => Game.shapes >= 1000000 && hU("Book of Constants (Volume 2)"),
					2_000_000,
					"Increases sps by 2%",
					"img/constants/tau.png",
					() => {
						Game.boosts.endMult += 0.1;
					}
				),
				new Upgrade(
					"Constant: Gelfond-Schneider constant",
					() => Game.shapes >= 1000000 && hU("Book of Constants (Volume 2)"),
					2_000_000,
					"Increases sps by 2%",
					"img/constants/tau.png",
					() => {
						Game.boosts.endMult += 0.1;
					}
				),
				new Upgrade(
					"Constant: Second Favard constant",
					() => Game.shapes >= 1000000 && hU("Book of Constants (Volume 2)"),
					2_000_000,
					"Increases sps by 2%",
					"img/constants/tau.png",
					() => {
						Game.boosts.endMult += 0.1;
					}
				),
				new Upgrade(
					"Constant: Golden angle",
					() => Game.shapes >= 1000000 && hU("Book of Constants (Volume 2)"),
					2_000_000,
					"Increases sps by 2%",
					"img/constants/tau.png",
					() => {
						Game.boosts.endMult += 0.1;
					}
				),
				new Upgrade(
					"Constant: Sierpinski's constant",
					() => Game.shapes >= 1000000 && hU("Book of Constants (Volume 2)"),
					2_000_000,
					"Increases sps by 2%",
					"img/constants/tau.png",
					() => {
						Game.boosts.endMult += 0.1;
					}
				),

				new Upgrade(
					"Imaginary Research",
					() => hU("Constant: i"),
					200_000_000,
					"Starts research for the imaginary plane.",
					"img/upgrades/imaginaryresearch.png",
					() => {
						Game.researchProgress = 1;
					}
				),
			];

			Game.availUpgrades = [];

			Game.achievements = [
				//Clicks

				new Achievement(
					"Clicker Game",
					() => Game.clicks > 15,
					"Click 15 times",
					"common"
				),
				new Achievement(
					"Lots of clicks",
					() => Game.clicks > 100,
					"Click 100 times",
					"common"
				),
				new Achievement(
					"A lot of clicks",
					() => Game.clicks > 1000,
					"Click 1000 times",
					"uncommon"
				),
				new Achievement(
					"Carpal Tunnel",
					() => Game.clicks > 10000,
					"Click 10000 times",
					"uncommon"
				),
				new Achievement(
					"Autoclicker?",
					() => Game.clicks > 50000,
					"Click 50000 times",
					"rare"
				),

				//Mouse CPS

				new Achievement(
					"Noob Clicker",
					() => Game.mouseShapes >= 100,
					"Get 100 Shapes from clicking",
					"common"
				),
				new Achievement(
					"Better Clicker",
					() => Game.mouseShapes >= 10000,
					"Get 10000 Shapes from",
					"common"
				),
				new Achievement(
					"Clickmachine",
					() => Game.mouseShapes >= 1000000,
					"Get 1 million shapes from clicking",
					"uncommon"
				),
				new Achievement(
					"Clickathon",
					() => Game.mouseShapes >= 10000000,
					"Get 10 million shapes from clicking",
					"uncommon"
				),
				new Achievement(
					"Clickmegeddon",
					() => Game.mouseShapes >= 100000000,
					"Get 100 million shapes from clicking",
					"uncommon"
				),

				//SPS

				new Achievement(
					"DIY Shapes",
					() => Game.sps >= 1,
					"Have 1 sps.",
					"common"
				),
				new Achievement(
					"Shape Enthusiast",
					() => Game.sps >= 10,
					"Get 10 sps",
					"common"
				),
				new Achievement(
					"Shape Stream",
					() => Game.sps >= 100,
					"Get 100 sps",
					"common"
				),
				new Achievement(
					"Shape Machine",
					() => Game.sps >= 1000,
					"Get 1000 sps",
					"common"
				),
				new Achievement(
					"Shape Dupe",
					() => Game.sps >= 10000,
					"Get 10000 sps",
					"common"
				),
				new Achievement(
					"Shape Exploit",
					() => Game.sps >= 100000,
					"Get 100000 sps",
					"common"
				),
				new Achievement(
					"Star Shaped Shape",
					() => Game.sps >= 1000000,
					"Get one million sps",
					"uncommon"
				),

				//acsensions

				new Achievement(
					"Ascend beyond the mortal realm",
					() => Game.acsensions > 0,
					"Ascension",
					"uncommon"
				),

				//Time

				new Achievement(
					"Starting Up",
					() => Game.secondsSpent > 10,
					"Play the game for 10 seconds",
					"common"
				),
				new Achievement(
					"Time flying",
					() => Game.secondsSpent > 60,
					"Play the game for a minute",
					"common"
				),
				new Achievement(
					"Time flying?",
					() => Game.secondsSpent > 600,
					"Play the game for 10 minutes",
					"common"
				),
				new Achievement(
					"A lot of time",
					() => Game.secondsSpent > 60 * 60,
					"Play the game for an hour",
					"uncommon"
				),
				new Achievement(
					"Dedicated",
					() => Game.secondsSpent > 60 * 60 * 6,
					"Play the game for 6 hours",
					"uncommon"
				),
				new Achievement(
					"Slightly Addicted",
					() => Game.secondsSpent > 60 * 60 * 12,
					"Play the game for 12 hours",
					"uncommon"
				),
				new Achievement(
					"Definitely Addicted",
					() => Game.secondsSpent > 60 * 60 * 24,
					"Play the game for a day",
					"uncommon"
				),
				new Achievement(
					"Caffeine Required",
					() => Game.secondsSpent > 60 * 60 * 48,
					"Play the game for 2 days",
					"rare"
				),
				new Achievement(
					"Why are you still here",
					() => Game.secondsSpent > 60 * 60 * 24 * 7,
					"Play the game for a week",
					"rare"
				),

				//Upgrades

				new Achievement(
					"Upgrader",
					() => Game.boughtUpgrades.length > 0,
					"Buy an upgrade",
					"common"
				),
				new Achievement(
					"Tier 2",
					() => Game.boughtUpgrades.length >= 10,
					"Buy 10 upgrades",
					"uncommon"
				),
				new Achievement(
					"Mass Upgrader",
					() => Game.boughtUpgrades.length >= 20,
					"Buy 20 upgrades",
					"uncommon"
				),
				new Achievement(
					"Research Facility",
					() => Game.boughtUpgrades.length >= 30,
					"Buy 30 upgrades",
					"rare"
				),
				new Achievement(
					"All the upgrades",
					() => Game.boughtUpgrades.length >= 50,
					"Buy 50 upgrades",
					"rare"
				),

				//Bots
				new Achievement(
					"Auto Clicker",
					() => Game.botsBought["cursor"] > 0,
					"Get a cursor",
					"common"
				),
				new Achievement(
					"Double Click",
					() => Game.botsBought["cursor"] >= 2,
					"Get two cursors",
					"common"
				),
				new Achievement(
					"10 CPS",
					() => Game.botsBought["cursor"] >= 10,
					"Get 10 cursors",
					"uncommon"
				),
				new Achievement(
					"Butterfly Speed",
					() => Game.botsBought["cursor"] >= 20,
					"Get 20 cursors",
					"uncommon"
				),
				new Achievement(
					"Cursorstorm",
					() => Game.botsBought["cursor"] >= 30,
					"Get 30 cursors",
					"rare"
				),
				new Achievement(
					"Too many cursors",
					() => Game.botsBought["cursor"] >= 50,
					"Get 50 cursors",
					"rare"
				),

				new Achievement(
					"One Ruler",
					() => Game.botsBought["ruler"] > 0,
					"Get a ruler",
					"common"
				),
				new Achievement(
					"Ruler Spinner",
					() => Game.botsBought["ruler"] >= 10,
					"Get 10 rulers",
					"uncommon"
				),
				new Achievement(
					"Measuring Tape",
					() => Game.botsBought["ruler"] >= 20,
					"Get 20 rulers",
					"uncommon"
				),
				new Achievement(
					"Plane of Plastic",
					() => Game.botsBought["ruler"] >= 30,
					"Get 30 rulers",
					"rare"
				),
				new Achievement(
					"Flying Plastic",
					() => Game.botsBought["ruler"] >= 50,
					"Get 50 rulers",
					"rare"
				),

				new Achievement(
					"Paid Labor",
					() => Game.botsBought["builder"] > 0,
					"Get a builder",
					"common"
				),
				new Achievement(
					"Workforce",
					() => Game.botsBought["builder"] >= 10,
					"Get 10 builders",
					"uncommon"
				),
				new Achievement(
					"Construction",
					() => Game.botsBought["builder"] >= 20,
					"Get 20 builders",
					"uncommon"
				),
				new Achievement(
					"Construction Company",
					() => Game.botsBought["builder"] >= 30,
					"Get 30 builders",
					"rare"
				),
				new Achievement(
					"Builder Armageddon",
					() => Game.botsBought["builder"] >= 50,
					"Get 50 builders",
					"rare"
				),

				new Achievement(
					"Manufacture",
					() => Game.botsBought["factory"] > 0,
					"Get a factory",
					"common"
				),
				new Achievement(
					"Manufacture Giant",
					() => Game.botsBought["factory"] >= 10,
					"Get 10 factories",
					"uncommon"
				),
				new Achievement(
					"CO2 Bank",
					() => Game.botsBought["factory"] >= 20,
					"Get 20 factories",
					"uncommon"
				),
				new Achievement(
					"Greenhouse",
					() => Game.botsBought["factory"] >= 30,
					"Get 30 factories",
					"rare"
				),
				new Achievement(
					"Global warming",
					() => Game.botsBought["factory"] >= 50,
					"Get 50 factories",
					"rare"
				),

				new Achievement(
					"Distrubute",
					() => Game.botsBought["distrubution"] > 0,
					"Get a distribution",
					"common"
				),
				new Achievement(
					"Lots of hands",
					() => Game.botsBought["distrubution"] >= 10,
					"Get 10 distrubutions",
					"uncommon"
				),
				new Achievement(
					"Food chain",
					() => Game.botsBought["distrubution"] >= 20,
					"Get 20 distrubutions",
					"uncommon"
				),
				new Achievement(
					"Lots of distrubution",
					() => Game.botsBought["distrubution"] >= 30,
					"Get 30 distrubutions",
					"rare"
				),
				new Achievement(
					"Global distrubution",
					() => Game.botsBought["distrubution"] >= 50,
					"Get 50 distrubutions",
					"rare"
				),

				new Achievement(
					"Specialised Banking",
					() => Game.botsBought["bank"] > 0,
					"Get a bank",
					"common"
				),
				new Achievement(
					"Big Vaults",
					() => Game.botsBought["bank"] >= 10,
					"Get 10 banks",
					"uncommon"
				),
				new Achievement(
					"Stashes of Shapes",
					() => Game.botsBought["bank"] >= 20,
					"Get 20 banks",
					"uncommon"
				),
				new Achievement(
					"Bank Chain",
					() => Game.botsBought["bank"] >= 30,
					"Get 30 banks",
					"rare"
				),
				new Achievement(
					"Super Bank",
					() => Game.botsBought["bank"] >= 50,
					"Get 50 banks",
					"rare"
				),

				new Achievement(
					"Polystructor",
					() => Game.botsBought["polustructor"] > 0,
					"Get a polystructor",
					"common"
				),
				new Achievement(
					"Polygon Constructor",
					() => Game.botsBought["polustructor"] >= 10,
					"Get 10 polystructors",
					"uncommon"
				),
				new Achievement(
					"gonCon",
					() => Game.botsBought["polustructor"] >= 20,
					"Get 20 polystructors",
					"uncommon"
				),
				new Achievement(
					"Poconlystructgonor",
					() => Game.botsBought["polustructor"] >= 30,
					"Get 30 polystructors",
					"rare"
				),
				new Achievement(
					"rotcurtsyloP",
					() => Game.botsBought["polustructor"] >= 50,
					"Get 50 polystructors",
					"rare"
				),

				new Achievement(
					"Magical Shapes",
					() => Game.botsBought["wizard tower"] > 0,
					"Get a wizard tower",
					"common"
				),
				new Achievement(
					"Tower of Doom",
					() => Game.botsBought["wizard tower"] >= 10,
					"Get 10 wizard towers",
					"uncommon"
				),
				new Achievement(
					"Alakazam",
					() => Game.botsBought["wizard tower"] >= 20,
					"Get 20 wizard towers",
					"uncommon"
				),
				new Achievement(
					"Parellelogram",
					() => Game.botsBought["wizard tower"] >= 30,
					"Get 30 wizard towers",
					"rare"
				),
				new Achievement(
					"Tower of Towers",
					() => Game.botsBought["wizard tower"] >= 50,
					"Get 50 wizard towers",
					"rare"
				),

				new Achievement(
					"Not a giant transforming robot.",
					() => Game.botsBought["transformer"] > 0,
					"Get a transformer.",
					"common"
				),
				new Achievement(
					"*twist twist twoost twoost*",
					() => Game.botsBought["transformer"] >= 10,
					"Get 10 transformers.",
					"uncommon"
				),
				new Achievement(
					"*shuffle*",
					() => Game.botsBought["transformer"] >= 20,
					"Get 20 transformers.",
					"uncommon"
				),
				new Achievement(
					'"could of done it with unity"',
					() => Game.botsBought["transformer"] >= 30,
					"Get 30 transformers.",
					"rare"
				),
				new Achievement(
					"Transformers transform!",
					() => Game.botsBought["transformer"] >= 50,
					"Get 50 transformers.",
					"rare"
				),

				//CHEAT ACHIEVEMENTS

				new Achievement(
					"Autoclicker Enabled",
					() => Game.usedAutoclicker,
					"Have over 40 cps",
					"secret"
				),
				new Achievement(
					"You are not me",
					() => Game.setNameSilkyway,
					"Set your name to 'Silkyway'",
					"secret"
				),
				new Achievement(
					"Why are you hacking",
					() => Game.hacked,
					"Hacked in shapes",
					"secret"
				),
			];

			Game.ascensionUpgrades = [
				new AscensionUpgrade(
					"Pentagon",
					"",
					"Doubles your base SPC and multiplies your sps by 1.5",
					1,
					"img/pentagon.png",
					() => {
						Game.boosts.clickMult *= 2;
						Game.boosts.endMult *= 1.5;
						$$<HTMLImageElement>("#shape > img").src = "img/pentagon.png";
					},
					50,
					50
				),
				new AscensionUpgrade(
					"Achievement Synthesiser",
					"Pentagon",
					"Adds +5% sps for every 10 achievements you have.",
					5,
					"img/ascended/achievementsynthesiser.png",
					() => {
						Game.boosts.endMult += Math.floor(Game.achieved / 10) * 0.05;
					},
					42,
					45
				),
				new AscensionUpgrade(
					"Book of Constants (Volume 2)",
					"Pentagon",
					"Unlocks more constants to boost your sps. Level 2 Constants (boosts 2% per)",
					3,
					"img/upgrades/constants/bookofconstants2.png",
					() => {},
					60,
					52
				),
			];

			Game.cpsTexts = [];

			new f("#shape").on("click", Game.clickShape);

			setInterval(Game.tick, 1);
			setInterval(Game.tentick, 10);
			setInterval(Game.slowtick, 500);
			setInterval(Game.second, 1000);
			Game.newstick();
			setInterval(Game.newstick, 10000);
			setInterval(Game.minutetick, 60000);

			//Loading Sequence

			Game.prevUps = [];
			Game.updateBots();

			new f("#achievementsslide").on("click", () => {
				new f("#achievements").classList.toggle("achievements-out");
			});

			Game.name =
				Game.name ?? `${get_random(randomfirst)} ${get_random(randomlast)}`;
			new f("#nameSelector").setHtml(
				`<strong>${HtmlEncode(Game.name)}</strong>'s shape empire`
			);

			new f("#nameSelector").on("click", async (e: any) => {
				await Game.prompt("What is your name?").then((obj: string | null) => {
					if (obj !== null) {
						Game.name = obj;
						new f("#nameSelector").setHtml(
							`<strong>${HtmlEncode(Game.name)}</strong>'s shape empire`
						);
					}
				}); // No longer not professional :D
			});

			console.log(
				get_random([
					"[=== Looking for bugs or hacking in shapes? ===]",
					"[=== One should know how to javascript before using it. ===]",
					"[=== I have never eaten a bagel, is it good? ===]",
					"[=== i am literally just making up things for this lmao ===]",
					"[=== Fun fact: like 3% of this code is from Orteil ===]",
				])
			);

			new f("#save").on("click", () => {
				localStorage.setItem("savecode", save());
				try {
					Game.alert("Game Saved.");
				} catch {}
			});
			new f("#load").on("click", () => {
				load();
				try {
					Game.alert("Save Loaded.");
				} catch {}
			});
			new f("#reset").on("click", () => {
				if (window.confirm("Are you sure you want to reset?")) {
					if (window.confirm("Are you absolutely sure you want to reset?")) {
						reset();
					}
				}
			});
			const acsensionBasevalue = 1_000_000_000;

			function getAcsensionPrice() {
				return (
					acsensionBasevalue *
					(Game.totalHighersEarned + Math.floor(howMuchAscend()) + 1) ** 2
				);
			}
			function howMuchAscend() {
				return Math.pow(Game.shapes / 1_000_000_000, 1 / 2);
			}
			$$("#ascendbtn").addEventListener("mouseenter", () => {
				new f("#hover > #hoverheader").setText("Ascension");
				new f("#hover > #hoverpara").setText(
					`Resets your progress, but granting you higher polygons, granting you permanant upgrades. You can ascend ${Math.floor(
						howMuchAscend()
					)} times. You need ${toShortScale(
						-(Game.shapes - getAcsensionPrice())
					)} more shapes to get another heavenly shape.`
				);
				new f("#hover > #hoverprice").setText(
					`${toShortScale(getAcsensionPrice())} Shapes`
				);
				$$("#hover").style.display = "block";
			});
			$$("#ascendbtn").addEventListener("mouseleave", () => {
				$$("#hover").style.display = "none";
			});

			function resetAscension() {
				if (howMuchAscend() > 0) {
					Game.acsensions++;
					Game.higherPolygons += howMuchAscend();
					Game.totalHighersEarned += howMuchAscend();
					Game.shapes -= getAcsensionPrice();
					Game.shapesEarned -= getAcsensionPrice();

					Game.shapes = 0;

					Game.bots.forEach((bot: { name: any }) => {
						eval(`Game.${removeSpecials(bot.name)}s = 0;`);
					});

					Game.updateBots();
					Game.boughtUpgrades = [];

					return true;
				} else return false;
			}

			function updateAscensionThings() {
				Game.availAscensionUpgrades = [];
				Game.ascensionUpgrades.forEach((upgrade: AscensionUpgrade) => {
					if (upgrade.hasUpgrade()) {
						Game.availAscensionUpgrades.push(upgrade);
					}
				});
				new f("#ascensionups").setHtml("");
				Game.availAscensionUpgrades.forEach(
					(item: {
						hasUpgrade: () => any;
						obj: () => any;
						name: any;
						desc: string;
						price: number;
					}) => {
						if (item.hasUpgrade()) {
							new f("#ascensionups").appendChild(item.obj());
							$$(`#ascension-${removeSpecials(item.name)}`).addEventListener(
								"mouseenter",
								() => {
									new f("#hover-ascension > #hoverheader").setText(item.name);
									new f("#hover-ascension > #hoverpara").setHtml(
										item.desc +
											`<br>${
												Game.gottenAscensionUpgrades.includes(item.name)
													? "Bought"
													: "Not Bought"
											}`
									);
									new f("#hover-ascension > #hoverprice").setText(
										`${toShortScale(item.price)} Higher Polygons`
									);
									$$("#hover-ascension").style.display = "block";
								}
							);
							$$(`#ascension-${removeSpecials(item.name)}`).addEventListener(
								"mouseleave",
								() => {
									$$("#hover-ascension").style.display = "none";
								}
							);
							new f(`#ascension-${removeSpecials(item.name)}`).on(
								"click",
								() => {
									if (
										Game.higherPolygons >= item.price &&
										!Game.gottenAscensionUpgrades.includes(item.name)
									) {
										Game.higherPolygons -= item.price;

										Game.gottenAscensionUpgrades.push(item.name);
										updateAscensionThings();
									}
								}
							);
						}
					}
				);
			}

			new f("#ascendbtn").on("click", () => {
				if (resetAscension()) {
					new f("#ascensionups").classList.add("ascensionups-open");
					new f("#ascensionclose").classList.add("ascensioncloseclose");
					new f("#ascensionlabel").classList.add("ascensionlabelon");
					new f("#ascensionclose").on("click", () => {
						new f("#ascensionups").classList.remove("ascensionups-open");
						new f("#ascensionclose").classList.remove("ascensioncloseclose");
						new f("#ascensionlabel").classList.remove("ascensionlabelon");
					});
					updateAscensionThings();
				}
			});
			new f("#importsave").on("click", loadPrompt);
			new f("#exportsave").on("click", savePrompt);
		},
	};
	var Assets = {
		init() {},

		clickShape: () =>
			c({
				tag: "div",
				id: "shape",
				children: [c({ tag: "img", src: "img/square.png" })],
			}),
		shapeCount: () => c({ tag: "h1", id: "shapecount" }),
		spsCount: () => c({ tag: "h2", id: "sps" }),
		nameSelector: () => c({ tag: "h2", id: "nameSelector" }),
	};

	expose(Game);

	function HtmlEncode(s: string | null) {
		var el = document.createElement("div");
		//@ts-ignore
		el!.innerText = el.textContent = s;
		s = el.innerHTML;
		return s;
	}

	if (browserName !== "MS IE") {
		$("#iediv").toggle();
	}

	async function savePrompt() {
		await Game.prompt("Savecode: ", save());
	}
	function save() {
		var data = JSON.stringify({
			version: Game.version,
			shapes: Game.shapes,
			totalShapesEarned: Game.totalShapesEarned,
			totalHighersEarned: Game.totalHighersEarned,
			clicks: Game.clicks,
			botsBought: Game.botsBought,
			boughtUpgrades: Game.boughtUpgrades,
			name: Game.name,
			time: Game.secondsSpent,
			mouseShapes: Game.mouseShapes,
			usedAutoclicker: Game.usedAutoclicker,
			setNameSilkyway: Game.setNameSilkyway,
			shapesEarned: Game.shapesEarned,
			hacked: Game.hacked,
			acsensions: Game.acsensions,
			higherPolygons: Game.higherPolygons,
			gottenAscensionUpgrades: Game.gottenAscensionUpgrades,
			gottenAchievements: Game.gottenAchievements,
		}).toString();

		return LZString.compressToBase64(data);
	}
	async function loadPrompt() {
		var thing = JSON.parse(
			LZString.decompressFromBase64(await Game.prompt("Loadcode: ")) ?? ""
		);
		Game.shapes = thing.shapes ?? 0;
		Game.totalShapesEarned = thing.totalShapesEarned ?? 0;
		Game.totalHighersEarned = thing.totalHighersEarned ?? 0;
		Game.clicks = thing.clicks ?? 0;
		Game.botsBought["cursor"] = thing.cursors ?? 0;
		Game.botsBought["ruler"] = thing.rulers ?? 0;
		Game.botsBought["builder"] = thing.builders ?? 0;
		Game.botsBought["factory"] = thing.factorys ?? 0;
		Game.botsBought["distrubution"] = thing.distrubutions ?? 0;
		Game.botsBought["bank"] = thing.banks ?? 0;
		Game.botsBought["polustructor"] = thing.polystructors ?? 0;
		Game.botsBought["wizard tower"] = thing.botsBought["wizard tower"] ?? 0;
		Game.botsBought["transformer"] = thing.botsBought["transformer"] ?? 0;
		Game.name =
			thing.name ?? `${get_random(randomfirst)} ${get_random(randomlast)}`;
		Game.boughtUpgrades = thing.boughtUpgrades ?? [];
		Game.secondsSpent = thing.time ?? 0;
		Game.usedAutoclicker = thing.usedAutoclicker ?? false;
		Game.mouseShapes = thing.mouseShapes ?? 0;
		Game.setNameSilkyway = thing.setNameSilkyway ?? false;
		Game.shapesEarned = thing.shapesEarned ?? 0;
		Game.hacked = thing.hacked ?? false;
		Game.acsensions = thing.acsensions ?? 0;
		Game.higherPolygons = thing.higherPolygons ?? 0;
		Game.gottenAscensionUpgrades = thing.gottenAscensionUpgrades ?? [];
		Game.gottenAchievements = thing.gottenAchievements ?? [];
		try {
			new f("#nameSelector").setHtml(
				`<strong>${HtmlEncode(Game.name)}</strong>'s shape empire`
			);
		} catch {}
		try {
			Game.updateBots();
		} catch {}
	}

	function load() {
		try {
			var thing = JSON.parse(
				LZString.decompressFromBase64(localStorage.getItem("savecode")) ?? ""
			);
		} catch {
			alert("Your save code is corrupted!");
			prompt(
				"Your save code will be outputted here:",
				localStorage.getItem("savecode") ?? ""
			);
			alert("Your game will be reset now");
			reset();
		}
		Game.shapes = thing.shapes ?? 0;
		Game.totalShapesEarned = thing.totalShapesEarned ?? 0;
		Game.totalHighersEarned = thing.totalHighersEarned ?? 0;
		Game.clicks = thing.clicks ?? 0;
		Game.botsBought["cursor"] = thing.cursors ?? 0;
		Game.botsBought["ruler"] = thing.rulers ?? 0;
		Game.botsBought["builder"] = thing.builders ?? 0;
		Game.botsBought["factory"] = thing.factorys ?? 0;
		Game.botsBought["distrubution"] = thing.distrubutions ?? 0;
		Game.botsBought["bank"] = thing.banks ?? 0;
		Game.botsBought["polustructor"] = thing.polystructors ?? 0;
		Game.botsBought["wizard tower"] = thing.botsBought["wizard tower"] ?? 0;
		Game.botsBought["transformer"] = thing.botsBought["transformer"] ?? 0;
		Game.name =
			thing.name ?? `${get_random(randomfirst)} ${get_random(randomlast)}`;
		Game.boughtUpgrades = thing.boughtUpgrades ?? [];
		Game.secondsSpent = thing.time ?? 0;
		Game.usedAutoclicker = thing.usedAutoclicker ?? false;
		Game.mouseShapes = thing.mouseShapes ?? 0;
		Game.setNameSilkyway = thing.setNameSilkyway ?? false;
		Game.shapesEarned = thing.shapesEarned ?? 0;
		Game.hacked = thing.hacked ?? false;
		Game.acsensions = thing.acsensions ?? 0;
		Game.higherPolygons = thing.higherPolygons ?? 0;
		Game.gottenAscensionUpgrades = thing.gottenAscensionUpgrades ?? [];
		Game.gottenAchievements = thing.gottenAchievements ?? [];
		try {
			new f("#nameSelector").setHtml(
				`<strong>${HtmlEncode(Game.name)}</strong>'s shape empire`
			);
		} catch {}
		try {
			Game.updateBots();
		} catch {}
	}
	function reset() {
		localStorage.removeItem("savecode");
		location.reload();
	}
	function utf8_to_b64(str: string | number | boolean) {
		try {
			return btoa(unescape(encodeURIComponent(str)));
		} catch (err) {
			return "";
		}
	}

	function b64_to_utf8(str: any) {
		try {
			return decodeURIComponent(escape(atob(str)));
		} catch (err) {
			return "";
		}
	}

	// ! GAME START ! //

	Assets.init();
	Game.init();
	Game.tick();
	if (localStorage.getItem("savecode") === null) {
	} else {
		load();
	}

	
	function FinishedLoading() {
		new f("#loadingdiv").classList.add("loadingfin");
	}

	setTimeout(FinishedLoading, 0);

	//dropdown things

	$$("#dropdown").addEventListener("click", () => {
		new f("#dropdowncontent").classList.toggle("dropdownon");
	});

	async function convertOldCodeToNew() {
		var oldCode = await Game.prompt("What is the old save code?");

		const thing = async () => {
			try {
				JSON.parse(LZString.decompressFromBase64(oldCode) ?? "");
				Game.alert(`Save is already in new form`);
			} catch {
				Game.prompt(
					"New Code:",
					LZString.compressToBase64(b64_to_utf8(oldCode))
				);
			}
		};

		await thing();
	}

	// * Click button events

	new f("#h1").on("click", (e) => {
		Game.shapes += 10;
	});
	new f("#h2").on("click", (e) => {
		Game.shapes += 100;
	});
	new f("#h3").on("click", (e) => {
		Game.shapes += 1000;
	});
	new f("#h4").on("click", (e) => {
		Game.shapes += 1000000;
	});
	new f("#h5").on("click", (e) => {
		Game.shapes += 1000_000_000;
	});
	new f("#h6").on("click", (e) => {
		Game.shapes += 1000_000_000_000;
	});
	new f("#h7").on("click", (e) => {
		Game.shapes += 1000_000_000_000_000;
	});
	new f("#h8").on("click", (e) => {
		Game.shapes *= 10;
	});
	new f("#h9").on("click", (e) => {
		Game.shapes *= 1000;
	});
	new f("#h10").on("click", (e) => {
		Game.shapes /= 10;
	});
	new f("#h11").on("click", (e) => {
		Game.shapes /= 1000;
	});
	new f("#h12").on("click", (e) => {
		Game.shapes = 0;
	});

	new f("#reset").on("click", (e) => reset());
}
