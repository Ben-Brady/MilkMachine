const { Client, Intents } = require("discord.js");
const { MILK_ROLE,MILK_CHANNEL } = require("./config.json");

const allIntents = new Intents(32767);
const client = new Client({ intents: [allIntents] });

client.once("ready", () => {
    console.log("Ready!");
});

var Streak = 0;
var RecentPosters = [];
const Milestones = {
    5: "Ooo we got a Milk Streak",
    10: "DOUBLE MILK",
    15: "TRIPLE MILK",
    20: "MILK DOMINATION",
    25: "MILK RAMPAGE",
    30: "MULTI MILK!",
    35: "MEGA MILK!",
    40: "UNSTOPPABLE MILK!",
    45: "ULTRA MILK!",
    50: "**MONSTER MILK!**",
    55: "**GOD MILK!**",
    60: "**GLORIOUS MILK!**",
    69: "***NICE*** MILK",
    70: "/tts ***BEYOND GOD MILK***",
    75: "/tts ***BEYOND FUCKING GOD MILK***",
    80: "/tts ***MEGA GOD MILK***",
    85: "/tts ***ULTRA MEGA GOD MILK***",
    90: "/tts ***CATACROPHIC ULTRA MEGA GOD MILK***",
    95: "/tts ***FANATIC CATACROPHIC ULTRA MEGA GOD MILK***",
    100:`
    Our Milk's who art is in heaven,
    hallowed be thy name.
    Thy kingdom cum.
    Thy will be cum
    on earth as it is in heaven.
    Give us this day our daily milk,
    and forgive us our intolerance,
    as we forgive those who intolerate us,
    and lead us not into temptation,
    but deliver us some dairy.
    For thine is the kingdom and the power, and the glory,
    forever and ever.
    Milk Us.`
};
client.on("messageCreate", (message) => {
    if (client.user.id == message.author.id) return;
    if (message.channel.id != MILK_CHANNEL) return;

    if (message.content.match(/([Mm][Ii][Ll][Kk]|[🥛🐮🐄🤠🌌])/g)) {
        if (!RecentPosters.includes(message.author.id)) {
            Streak++;

            if (Streak in Milestones)
                message.channel.send(`Streak: ${Streak} - ${Milestones[Streak]}`);

            RecentPosters = RecentPosters.slice(1);
            RecentPosters.push(message.author.id);
        }
    } else {
        if (Streak > 4) message.channel.send(`Awww, you ruined the Milk Streak of ${Streak}`);
        Streak = 0;
    }
    console.log(Streak, RecentPosters);
});

client.on("guildMemberAdd", (member) => {
    member.setNickname("The Milk Machine", "Allign with current milk policy");
    member.roles.add(MILK_ROLE, "Allign with current milk policy");
});

client.login("OTE1OTcxMjM0OTUxNDk1NzIw.YajWsA.D8XL_tf3BiYBb6zPL_QBQ7DF9So");
