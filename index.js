// เอาไปแจกต่อให้เครดิตด้วย | Deobf by 4levy ใครเปลี่ยนขอให้ไม่เจอดี

// revere engineer

const { Client, RichPresence, Options } = require("discord.js-selfbot-v13");
const moment = require("moment-timezone");
const { schedule } = require("node-cron");
const os = require("os");
require("colors");

class GetImage {
    constructor(client) {
        this.client = client;
    }

    isValidURL(url) {
        try {
            new URL(url);
            return true;
        } catch {
            return false;
        }
    }

    async get(url1, url2) {
        try {
            url1 = this.isValidURL(url1) ? url1 : null;
            url2 = this.isValidURL(url2) ? url2 : null;
            if (!url1 && !url2) {
                throw new Error("No Image");
            }

            const { getExternal } = RichPresence;
            const images = await getExternal(this.client, "534203414247112723", url1, url2);

            if (images.length === 1) {
                const { url, external_asset_path } = images[0];
                if (url === url1) {
                    url1 = url.includes("attachments") ? url : external_asset_path;
                    url2 = null;
                } else if (url === url2) {
                    url1 = null;
                    url2 = url.includes("attachments") ? url : external_asset_path;
                }
            } else if (images.length === 2) {
                const [img1, img2] = images;
                if (img1.external_asset_path) {
                    const { url, external_asset_path } = img1;
                    url1 = url.includes("attachments") ? url : external_asset_path;
                }
                if (img2.external_asset_path) {
                    const { url, external_asset_path } = img2;
                    url2 = url.includes("attachments") ? url : external_asset_path;
                }
            } else {
                throw new Error("No Image");
            }

            return { bigImage: url1, smallImage: url2 };
        } catch {
            return { bigImage: null, smallImage: null };
        }
    }
}

class Weather {
    constructor(location) {
        this.location = location;
        this.stop = 0;
        schedule("*/5 * * * *", () => this.update());
    }

    async update() {
        try {
            const params = new URLSearchParams();
            params.append("key", "1e1a0f498dbf472cb3991045241608");
            params.append('q', encodeURIComponent(this.location));
            params.append("aqi", "yes");

            const response = await fetch(`https://api.weatherapi.com/v1/current.json?${params}`);
            const data = await response.json();

            this.timezone = data.location.tz_id;
            this.city = data.location.name;
            this.region = data.location.region;
            this.country = data.location.country;
            this.temp_c = data.current.temp_c;
            this.temp_f = data.current.temp_f;
            this.wind_kph = data.current.wind_kph;
            this.wind_mph = data.current.wind_mph;
            this.wind_degree = data.current.wind_degree;
            this.pressure_mb = data.current.pressure_mb;
            this.pressure_in = data.current.pressure_in;
            this.precip_mm = data.current.precip_mm;
            this.precip_in = data.current.precip_in;
            this.wind_dir = data.current.wind_dir;
            this.gust_kph = data.current.gust_kph;
            this.gust_mph = data.current.gust_mph;
            this.vis_km = data.current.vis_km;
            this.vis_mi = data.current.vis_miles;
            this.humidity = data.current.humidity;
            this.cloud = data.current.cloud;
            this.uv = data.current.uv;
            this.pm2_5 = data.current.air_quality.pm2_5;
        } catch {
            if (this.stop > 10) {
                return;
            }
            this.stop++;
            this.update();
        }
    }
}

class SystemInfo {
    constructor() {
        this.cpuname = os.cpus()[0]?.model;
        this.cpucores = os.cpus()?.length;
        this.cpuspeed = (os.cpus()[0]?.speed / 1000 || 0).toFixed(1);
        this.cpu = 0;
        this.ram = 0;
    }

    getCpuUsage() {
        let totalIdle = 0, totalTick = 0;
        const cpus = os.cpus();

        cpus.forEach(cpu => {
            for (let type in cpu.times) {
                totalTick += cpu.times[type];
            }
            totalIdle += cpu.times.idle;
        });

        return 100 - Math.floor(totalIdle / totalTick * 100);
    }

    async getCpuUsageOverInterval(interval) {
        return new Promise(resolve => {
            const startMeasure = this._measureCpuTimes();
            setTimeout(() => {
                const endMeasure = this._measureCpuTimes();
                const idleDifference = endMeasure.idle - startMeasure.idle;
                const totalDifference = endMeasure.total - startMeasure.total;
                resolve(100 - Math.floor(idleDifference / totalDifference * 100));
            }, interval);
        });
    }

    _measureCpuTimes() {
        let totalIdle = 0, totalTick = 0;
        const cpus = os.cpus();

        cpus.forEach(cpu => {
            for (let type in cpu.times) {
                totalTick += cpu.times[type];
            }
            totalIdle += cpu.times.idle;
        });

        return { idle: totalIdle, total: totalTick };
    }

    getRamUsage() {
        const totalMem = os.totalmem();
        const freeMem = os.freemem();
        return Math.floor((totalMem - freeMem) / totalMem * 100);
    }

    async update() {
        this.cpu = await this.getCpuUsageOverInterval(1000);
        this.ram = this.getRamUsage();
    }
}

class Emoji {
    random() {
        const emojis = ['😄', '😃', '😀', '😊', '☺', '😉', '😍', '😘', '😚', '😗', '😙', '😜', '😝', '😛', '😳', '😁', '😔', '😌', '😒', '😞', '😣', '😢', '😂', '😭', '😪', '😥', '😰', '😅', '😓', '😩', '😫', '😨', '😱', '😠', '😡', '😤', '😖', '😆', '😋', '😷', '😎', '😴', '😵', '😲', '😟', '😦', '😧', '😈', '👿', '😮', '😬', '😐', '😕', '😯', '😶', '😇', '😏', '😑', '👲', '👳', '👮', '👷', '💂', '👶', '👦', '👧', '👨', '👩', '👴', '👵', '👱', '👼', '👸', '😺', '😸', '😻', '😽', '😼', '🙀', '😿', '😹', '😾', '👹', '👺', '🙈', '🙉', '🙊', '💀', '👽', '💩', '🔥', '✨', '🌟', '💫', '💥', '💢', '💦', '💧', '💤', '💨', '👂', '👀', '👃', '👅', '👄', '👍', '👎', '👌', '👊', '✊', '✌', '👋', '✋', '👐', '👆', '👇', '👉', '👈', '🙌', '🙏', '☝', '👏', '💪', '🚶', '🏃', '💃', '👫', '👪', '👬', '👭', '💏', '💑', '👯', '🙆', '🙅', '💁', '🙋', '💆', '💇', '💅', '👰', '🙎', '🙍', '🙇', '🎩', '👑', '👒', '👟', '👞', '👡', '👠', '👢', '👕', '👔', '👚', '👗', '🎽', '👖', '👘', '👙', '💼', '👜', '👝', '👛', '👓', '🎀', '🌂', '💄', '💛', '💙', '💜', '💚', '❤', '💔', '💗', '💓', '💕', '💖', '💞', '💘', '💌', '💋', '💍', '💎', '👤', '👥', '💬', '👣', '💭', '🐶', '🐺', '🐱', '🐭', '🐹', '🐰', '🐸', '🐯', '🐨', '🐻', '🐷', '🐽', '🐮', '🐗', '🐵', '🐒', '🐴', '🐑', '🐘', '🐼', '🐧', '🐦', '🐤', '🐥', '🐣', '🐔', '🐍', '🐢', '🐛', '🐝', '🐜', '🐞', '🐌', '🐙', '🐚', '🐠', '🐟', '🐬', '🐳', '🐋', '🐄', '🐏', '🐀', '🐃', '🐅', '🐇', '🐉', '🐎', '🐐', '🐓', '🐕', '🐖', '🐁', '🐂', '🐲', '🐡', '🐊', '🐫', '🐪', '🐆', '🐈', '🐩', '🐾', '💐', '🌸', '🌷', '🍀', '🌹', '🌻', '🌺', '🍁', '🍃', '🍂', '🌿', '🌾', '🍄', '🌵', '🌴', '🌲', '🌳', '🌰', '🌱', '🌼', '🌐', '🌞', '🌝', '🌚', '🌑', '🌒', '🌓', '🌔', '🌕', '🌖', '🌗', '🌘', '🌜', '🌛', '🌙', '🌍', '🌎', '🌏', '🌋', '🌌', '🌠', '⭐', '☀', '⛅', '☁', '⚡', '☔', '❄', '⛄', '🌀', '🌁', '🌈', '🌊', '🎍', '💝', '🎎', '🎒', '🎓', '🎏', '🎆', '🎇', '🎐', '🎑', '🎃', '👻', '🎅', '🎄', '🎁', '🎋', '🎉', '🎊', '🎈', '🎌', '🔮', '🎥', '📷', '📹', '📼', '💿', '📀', '💽', '💾', '💻', '📱', '☎', '📞', '📟', '📠', '📡', '📺', '📻', '🔊', '🔉', '🔈', '🔇', '🔔', '🔕', '📢', '📣', '⏳', '⌛', '⏰', '⌚', '🔓', '🔒', '🔏', '🔐', '🔑', '🔎', '💡', '🔦', '🔆', '🔅', '🔌', '🔋', '🔍', '🛁', '🛀', '🚿', '🚽', '🔧', '🔩', '🔨', '🚪', '🚬', '💣', '🔫', '🔪', '💊', '💉', '💰', '💴', '💵', '💷', '💶', '💳', '💸', '📲', '📧', '📥', '📤', '✉', '📩', '📨', '📯', '📫', '📪', '📬', '📭', '📮', '📦', '📝', '📄', '📃', '📑', '📊', '📈', '📉', '📜', '📋', '📅', '📆', '📇', '📁', '📂', '✂', '📌', '📎', '✒', '✏', '📏', '📐', '📕', '📗', '📘', '📙', '📓', '📔', '📒', '📚', '📖', '🔖', '📛', '🔬', '🔭', '📰', '🎨', '🎬', '🎤', '🎧', '🎼', '🎵', '🎶', '🎹', '🎻', '🎺', '🎷', '🎸', '👾', '🎮', '🃏', '🎴', '🀄', '🎲', '🎯', '🏈', '🏀', '⚽', '⚾', '🎾', '🎱', '🏉', '🎳', '⛳', '🚵', '🚴', '🏁', '🏇', '🏆', '🎿', '🏂', '🏊', '🏄', '🎣', '☕', '🍵', '🍶', '🍼', '🍺', '🍻', '🍸', '🍹', '🍷', '🍴', '🍕', '🍔', '🍟', '🍗', '🍖', '🍝', '🍛', '🍤', '🍱', '🍣', '🍥', '🍙', '🍘', '🍚', '🍜', '🍲', '🍢', '🍡', '🍳', '🍞', '🍩', '🍮', '🍦', '🍨', '🍧', '🎂', '🍰', '🍪', '🍫', '🍬', '🍭', '🍯', '🍎', '🍏', '🍊', '🍋', '🍒', '🍇', '🍉', '🍓', '🍑', '🍈', '🍌', '🍐', '🍍', '🍠', '🍆', '🍅', '🌽', '🏠', '🏡', '🏫', '🏢', '🏣', '🏥', '🏦', '🏪', '🏩', '🏨', '💒', '⛪', '🏬', '🏤', '🌇', '🌆', '🏯', '🏰', '⛺', '🏭', '🗼', '🗾', '🗻', '🌄', '🌅', '🌃', '🗽', '🌉', '🎠', '🎡', '⛲', '🎢', '🚢', '⛵', '🚤', '🚣', '⚓', '🚀', '✈', '💺', '🚁', '🚂', '🚊', '🚉', '🚞', '🚆', '🚄', '🚅', '🚈', '🚇', '🚝', '🚋', '🚃', '🚎', '🚌', '🚍', '🚙', '🚘', '🚗', '🚕', '🚖', '🚛', '🚚', '🚨', '🚓', '🚔', '🚒', '🚑', '🚐', '🚲', '🚡', '🚟', '🚠', '🚜', '💈', '🚏', '🎫', '🚦', '🚥', '⚠', '🚧', '🔰', '⛽', '🏮', '🎰', '♨', '🗿', '🎪', '🎭', '📍', '🚩', '⬆', '⬇', '⬅', '➡', '🔠', '🔡', '🔤', '↗', '↖', '↘', '↙', '↔', '↕', '🔄', '◀', '▶', '🔼', '🔽', '↩', '↪', 'ℹ', '⏪', '⏩', '⏫', '⏬', '⤵', '⤴', '🆗', '🔀', '🔁', '🔂', '🆕', '🆙', '🆒', '🆓', '🆖', '📶', '🎦', '🈁', '🈯', '🈳', '🈵', '🈴', '🈲', '🉐', '🈹', '🈺', '🈶', '🈚', '🚻', '🚹', '🚺', '🚼', '🚾', '🚰', '🚮', '🅿', '♿', '🚭', '🈷', '🈸', '🈂', 'Ⓜ', '🛂', '🛄', '🛅', '🛃', '🉑', '㊙', '㊗', '🆑', '🆘', '🆔', '🚫', '🔞', '📵', '🚯', '🚱', '🚳', '🚷', '🚸', '⛔', '✳', '❇', '❎', '✅', '✴', '💟', '🆚', '📳', '📴', '🅰', '🅱', '🆎', '🅾', '💠', '➿', '♻', '♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓', '⛎', '🔯', '🏧', '💹', '💲', '💱', '©', '®', '™', '〽', '〰', '🔝', '🔚', '🔙', '🔛', '🔜', '❌', '⭕', '❗', '❓', '❕', '❔', '🔃', '🕛', '🕧', '🕐', '🕜', '🕑', '🕝', '🕒', '🕞', '🕓', '🕟', '🕔', '🕠', '🕕', '🕖', '🕗', '🕘', '🕙', '🕚', '🕡', '🕢', '🕣', '🕤', '🕥', '🕦', '✖', '➕', '➖', '➗', '♠', '♥', '♣', '♦', '💮', '💯', '✔', '☑', '🔘', '🔗', '➰', '🔱', '🔲', '🔳', '◼', '◻', '◾', '◽', '▪', '▫', '🔺', '⬜', '⬛', '⚫', '⚪', '🔴', '🔵', '🔻', '🔶', '🔷', '🔸', '🔹'];
        return emojis[Math.floor(Math.random() * emojis.length)];
    }

    getTime(hour) {
        const parsedHour = parseInt(hour, 10);
        return isNaN(parsedHour)
            ? "Invalid hour"
            : parsedHour >= 6 && parsedHour < 18
                ? "☀️"
                : "🌙";
    }

    getClock(hour) {
        const parsedHour = parseInt(hour, 10);
        const clocks = ["🕛", "🕐", "🕑", "🕒", "🕓", "🕔", "🕕", "🕖", "🕗", "🕘", "🕙", "🕚"];
        return parsedHour >= 0 && parsedHour <= 23
            ? clocks[parsedHour % 12]
            : "Invalid hour";
    }
}

class TextFont {
    getFont1(text) {
        const fontMap = {
            "0": "๐",
            "1": "๑",
            "2": "๒",
            "3": "๓",
            "4": "๔",
            "5": "๕",
            "6": "๖",
            "7": "๗",
            "8": "๘",
            "9": "๙"
        };
        return text.split("").map(char => fontMap[char] || char).join("");
    }

    getFont2(text) {
        const fontMap = {
            a: "𝕒", b: "𝕓", c: "𝕔", d: "𝕕", e: "𝕖", f: "𝕗", g: "𝕘",
            h: "𝕙", i: "𝕚", j: "𝕛", k: "𝕜", l: "𝕝", m: "𝕞", n: "𝕟",
            o: "𝕠", p: "𝕡", q: "𝕢", r: "𝕣", s: "𝕤", t: "𝕥", u: "𝕦",
            v: "𝕧", w: "𝕨", x: "𝕩", y: "𝕪", z: "𝕫"
        };
        return text.split("").map(char => fontMap[char] || char).join("");
    }

    getFont3(text) {
        const fontMap = {
            a: "𝗮", b: "𝗯", c: "𝗰", d: "𝗱", e: "𝗲", f: "𝗳", g: "𝗴",
            h: "𝗵", i: "𝗶", j: "𝗷", k: "𝗸", l: "𝗹", m: "𝗺", n: "𝗻",
            o: "𝗼", p: "𝗽", q: "𝗾", r: "𝗿", s: "𝘀", t: "𝘁", u: "𝘂",
            v: "𝘃", w: "𝘄", x: "𝘅", y: "𝘆", z: "𝘇"
        };
        return text.split("").map(char => fontMap[char] || char).join("");
    }

    getFont4(text) {
        const fontMap = {
            a: "𝒶", b: "𝒷", c: "𝒸", d: "𝒹", e: "𝑒", f: "𝒻", g: "𝑔",
            h: "𝒽", i: "𝒾", j: "𝒿", k: "𝓀", l: "𝓁", m: "𝓂", n: "𝓃",
            o: "𝑜", p: "𝓅", q: "𝓆", r: "𝓇", s: "𝓈", t: "𝓉", u: "𝓊",
            v: "𝓋", w: "𝓌", x: "𝓍", y: "𝓎", z: "𝓏"
        };
        return text.split("").map(char => fontMap[char] || char).join("");
    }

    getFont5(text) {
        const fontMap = {
            a: "𝓪", b: "𝓫", c: "𝓬", d: "𝓭", e: "𝓮", f: "𝓯", g: "𝓰",
            h: "𝓱", i: "𝓲", j: "𝓳", k: "𝓴", l: "𝓵", m: "𝓶", n: "𝓷",
            o: "𝓸", p: "𝓹", q: "𝓺", r: "𝓻", s: "𝓼", t: "𝓽", u: "𝓾",
            v: "𝓿", w: "𝔀", x: "𝔁", y: "𝔂", z: "𝔃"
        };
        return text.split("").map(char => fontMap[char] || char).join("");
    }

    getFont6(text) {
        const fontMap = {
            a: "Ⓐ", b: "Ⓑ", c: "Ⓒ", d: "Ⓓ", e: "Ⓔ", f: "Ⓕ", g: "Ⓖ",
            h: "Ⓗ", i: "Ⓘ", j: "Ⓙ", k: "Ⓚ", l: "Ⓛ", m: "Ⓜ", n: "Ⓝ",
            o: "Ⓞ", p: "Ⓟ", q: "Ⓠ", r: "Ⓡ", s: "Ⓢ", t: "Ⓣ", u: "Ⓤ",
            v: "Ⓥ", w: "Ⓦ", x: "Ⓧ", y: "Ⓨ", z: "Ⓩ"
        };
        return text.split("").map(char => fontMap[char] || char).join("");
    }
}

class ModClient extends Client {
    constructor(token, config, info) {
        super({ partials: [], makeCache: Options.cacheWithLimits({ MessageManager: 0 }) });
        this.TOKEN = token;
        this.config = config;
        this.targetTime = info.wait;
        this.intervals = new Set();
        this.weather = new Weather(config.setup?.city);
        this.sys = new SystemInfo();
        this.emoji = new Emoji();
        this.textFont = new TextFont();
        this.getExternal = new GetImage(this);
        this.cacheImage = new Map();
        this.lib = { count: 0, countParty: 1, timestamp: 0, v: { patch: info.version } };
        this.index = {
            url: 0, text_0: 0, text_1: 0, text_2: 0, text_3: 0, text_4: 0, bm: 0, sm: 0, bt_1: 0, bt_2: 0
        };
    }

    async streaming() {
        const { setup, config } = this.config;
        const applicationId = config.options?.botid || "534203414247112723";
        
        let watchUrl = config.options["watch-url"]?.[this.index.url];
        
        if (!watchUrl || !this.getExternal.isValidURL(watchUrl)) {
            console.warn("No valid streaming URL found. Skipping URL setting.");
            return;
        }
    
        let type = "STREAMING";
        if (watchUrl.includes("twitch.tv")) {
            type = "STREAMING";
        } else if (watchUrl.includes("youtube.com")) {
            type = "STREAMING";
        } else {
            console.warn("Unsupported streaming platform. Skipping presence update.");
            return;
        }
    
        const presence = new RichPresence(this)
            .setApplicationId(applicationId)
            .setType(type)
            .setURL(watchUrl);
    
        const text0Array = config["text-1"];
        
        let name = "DEOBF BY 4levy";
    
        if (text0Array && text0Array.length > 0) {
            const text0 = text0Array[this.index.text_0];
            if (text0) {
                name = this.SPT(text0);
            } else {
                console.warn("Invalid text-1 entry found. Using default fallback.");
            }
        } else {
            console.warn("text-1 array is empty or undefined in config.json. Using default fallback.");
        }
    
        presence.setName(name);
    
        const text1 = config["text-1"]?.[this.index.text_1] || null;
        presence.setDetails(this.SPT(text1));
    
        const text2 = config["text-2"]?.[this.index.text_2] || null;
        presence.setState(this.SPT(text2));
    
        const text3 = config["text-3"]?.[this.index.text_3] || null;
        presence.setAssetsLargeText(this.SPT(text3));
    
        if (config["text-4"]?.length) {
            const text4 = config["text-4"][this.index.text_4];
            presence.setAssetsSmallText(this.SPT(text4));
        }
    
        if (config.bigimg?.length || config.smallimg?.length) {
            const bigImg = config.bigimg[this.index.bm];
            const smallImg = config.smallimg[this.index.sm];
            const images = await this.getImage(bigImg, smallImg);
            presence.setAssetsLargeImage(images.bigImage);
            presence.setAssetsSmallImage(images.smallImage);
        }
    
        if (config["button-1"]?.length) {
            const button1 = config["button-1"][this.index.bt_1];
            presence.addButton(this.SPT(button1.name), button1.url);
        }
    
        if (config["button-2"]?.length) {
            const button2 = config["button-2"][this.index.bt_2];
            presence.addButton(this.SPT(button2.name), button2.url);
        }
    
        const status = {
            activities: [presence]
        };
    
        this.user?.setPresence(status);
    
        setTimeout(() => this.streaming(), setup?.delay * 1000);
    
        this.lib.count++;
        this.lib.countParty++;
    
        this.index.url = (this.index.url + 1) % config.options["watch-url"]?.length;
        this.index.text_0 = (this.index.text_0 + 1) % config["text-1"]?.length;
        this.index.text_1 = (this.index.text_1 + 1) % config["text-1"]?.length;
        this.index.text_2 = (this.index.text_2 + 1) % config["text-2"]?.length;
        this.index.text_3 = (this.index.text_3 + 1) % config["text-3"]?.length;
        this.index.text_4 = (this.index.text_4 + 1) % config["text-4"]?.length;
        this.index.bt_1 = (this.index.bt_1 + 1) % config["button-1"]?.length;
        this.index.bt_2 = (this.index.bt_2 + 1) % config["button-2"]?.length;
        this.index.bm = (this.index.bm + 1) % config.bigimg?.length;
        this.index.sm = (this.index.sm + 1) % config.smallimg?.length;
    }
    
    startInterval(callback, interval) {
        const id = setInterval(callback, interval);
        this.intervals.add(id);
        return id;
    }

    stopAllIntervals() {
        for (let id of this.intervals) clearInterval(id);
        this.intervals.clear();
    }

    maskToken(token) {
        const parts = token.split('.');
        if (parts.length < 2) return token;
        return `${parts[0]}.##########`;
    }

    async getImage(bigImg, smallImg) {
        const [bigImage, smallImage] = await Promise.all([this.SPT(bigImg), this.SPT(smallImg)]);
        const images = await this.getExternal.get(bigImage, smallImage);
        const finalBigImage = images.bigImage ?? this.cacheImage.get(bigImg);
        const finalSmallImage = images.smallImage ?? this.cacheImage.get(smallImg);

        if (images.bigImage) this.cacheImage.set(bigImg, images.bigImage);
        if (images.smallImage) this.cacheImage.set(smallImg, images.smallImage);

        return { bigImage: finalBigImage, smallImage: finalSmallImage };
    }

    replaceVariables(text, variables) {
        const map = new Map(Object.entries(variables));
        return text.replace(/\{([^{}]+)\}/g, (match, key) => {
            const funcMatch = key.match(/^(\w+)\((.+)\)$/);
            if (funcMatch) {
                const [, funcName, args] = funcMatch;
                const func = map.get(funcName);
                if (typeof func === "function") {
                    return func(args.trim());
                }
            }
            const [varName, defaultValue] = key.split('=');
            if (defaultValue) {
                const [funcName, ...params] = defaultValue.split(':');
                const func = map.get(`${varName}=${funcName}`);
                if (typeof func === "function") {
                    return func(match, ...params);
                }
            }
            return map.has(key) ? map.get(key) : match;
        });
    }

    SPT(text) {
      if (!text) return text || null;
  
      const { weather, sys, emoji, textFont, lib } = this;
      const currentMoment = moment().locale('en').tz(weather.timezone);
  
      const replacements = {
          'hour:1': currentMoment.format('HH'),
          'hour:2': currentMoment.format('hh'),
          'min:1': currentMoment.format('mm'),
          'min:2': currentMoment.format("mm A"),
          'th=date': currentMoment.format('DD'),
          'th=month:1': currentMoment.format('MM'),
          'th=year:2': currentMoment.format('YY'),
          'city': weather.city,
          'region': weather.region,
          'country': weather.country,
          'temp:c': weather.temp_c,
          'temp:f': weather.temp_f,
          'wind:kph': weather.wind_kph,
          'wind:mph': weather.wind_mph,
          'wind:degree': weather.wind_degree,
          'wind:dir': weather.wind_dir,
          'pressure:mb': weather.pressure_mb,
          'pressure:in': weather.pressure_in,
          'precip:mm': weather.precip_mm,
          'precip:in': weather.precip_in,
          'gust:kph': weather.gust_kph,
          'gust:mph': weather.gust_mph,
          'vis:km': weather.vis_km,
          'vis:mi': weather.vis_mi,
          'humidity': weather.humidity,
          'cloud': weather.cloud,
          'uv': weather.uv,
          'pm2.5': weather.pm2_5,
          'ping': Math.round(this.ws.ping),
          'patch': lib.v.patch,
          'cpu:name': sys.cpuname,
          'cpu:cores': sys.cpucores,
          'cpu:speed': sys.cpuspeed,
          'cpu:usage': sys.cpu,
          'ram:usage': sys.ram,
          'uptime:days': Math.trunc(this.uptime / 86400000),
          'uptime:hours': Math.trunc(this.uptime / 3600000 % 24),
          'uptime:minutes': Math.trunc(this.uptime / 60000 % 60),
          'uptime:seconds': Math.trunc(this.uptime / 1000 % 60),
          'count++': lib.count,
          'user:name': this.user.username,
          'user:icon': this.user.displayAvatarURL(),
          'user:banner': this.user.bannerURL(),
          'emoji:random': emoji.random(),
          'emoji:time': emoji.getTime(currentMoment.format('HH')),
          'emoji:clock': emoji.getClock(currentMoment.format('HH')),
          'NF1': (value) => textFont.getFont1(value),
          'NF2': (value) => textFont.getFont2(value),
          'NF3': (value) => textFont.getFont3(value),
          'NF4': (value) => textFont.getFont4(value),
          'NF5': (value) => textFont.getFont5(value),
          'NF6': (value) => textFont.getFont6(value),
      };
  
      return text.replace(/\{([^{}]+)\}/g, (match, key) => {
          const funcMatch = key.match(/^(\w+)\((.+)\)$/);
          if (funcMatch) {
              const [, funcName, args] = funcMatch;
              const func = replacements[funcName];
              if (typeof func === "function") {
                  return func(args.trim());
              }
          }
          return replacements[key] || match;
      });
    }

    log() {
        const guild = this.guilds.cache.get("1007520773096886323");
        const logMessages = {
            yes: `[+] READY : [${this.user.tag}]`.green,
            no: `[+] READY : [${this.user.tag}] NUH UH`.gray,
        };

        console.log(guild ? logMessages.yes : logMessages.no);
    }

    async start() {
        try {
            await this.weather.update();
            await this.sys.update();
            await this.login(this.TOKEN);

            const delay = this.targetTime - Date.now();
            await new Promise(resolve => setTimeout(resolve, delay));

            this.lib.timestamp = Date.now();
            const updateInterval = 1000 * this.config.setup.delay;

            this.startInterval(() => this.sys.update(), updateInterval);
            await this.streaming();
            this.log();
            return { success: true };
        } catch (error) {
            this.destroy();
            const errorMessage = error.message.toUpperCase().replace(/\./g, '');
            console.log(`[-] ${this.maskToken(this.TOKEN)} : ${errorMessage}`.red);
            return { success: false };
        }
    }

    end() {
        this.stopAllIntervals();
        this.destroy();
    }
}

(async () => {
    const users = require("./setup/starter");
    const info = {
        name: "STREAMING",
        version: "2.1.4ccc | deobf version",
        update: "18:10 10/8/2024",
        wait: Date.now() + 1000 * users.length
    };

    await new Promise(resolve => setTimeout(resolve, 3000));

    console.clear();
    console.log("[+] STREAMING : 2.1.4ccc - 18:10 10/8/2024 | deobf version".blue);
    console.log(`[+] TOKENS : ERROR still working btw just lazy to add`.blue);
    console.log(`[+] ✨ | Premium user | SUPPORT?? | nyaa!! `.blue);
    console.log(`[+] Deobf ก็ยากอยู่นะ | ใช้เวลาไป 1 ชั่วโมง 50 นาที 😭`.green);
    console.log(" ↓ ".white);

    const work = new Map();

    const envToken = process.env.TOKEN;

    if (envToken) {
        console.log("[+] Using token from process.env.TOKEN".yellow);
        const client = new ModClient(envToken, users[0].config, info);
        const result = await client.start();
        if (result.success) {
            work.set(`ID:${client.user.id}`, client);
        }
    } else {
        for (const user of users) {
            for (const token of user.tk) {
                const client = new ModClient(token, user.config, info);
                const result = await client.start();
                if (result.success) {
                    work.set(`ID:${client.user.id}`, client);
                }
            }
        }
    }

    console.log(" ↑ ".white);
    console.log(`[+] DEOBF BY 4levy : ${work.size}/${users.length}`.magenta);

    if (!work.size) {
        console.log('');
        console.log("[-] CLOSING. . . ".red);
        setTimeout(() => process.exit(), 3000);
    }
})();
