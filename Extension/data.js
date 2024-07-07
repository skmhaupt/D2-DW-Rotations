//------------------------------------------------------
//--- Hide/Show buttons ---
const setHideShowButtons = [
    { name: "raids", value: true },
    { name: "dungeons", value: false },
    { name: "nightfalls", value: true },
    { name: "lostSectors", value: true }
];


//---------------------------------------------------------
//--- Useful links data ---
const usefulLinks = [
    { name: "Dim", link: "https://app.destinyitemmanager.com/" },
    { name: "Lightgg", link: "https://www.light.gg/" },
    { name: "TodayInDestiny", link: "https://www.todayindestiny.com/" },
    { name: "TrialsReport", link: "https://destinytrialsreport.com/" },
    { name: "D2ArmorPicker", link: "https://d2armorpicker.com/" },
    { name: "D2Foundry", link: "https://d2foundry.gg" },
];


//------------------------------------------------------
//--- Dates ---

function convertDateToUTC(date) { 
    return new Date(date.getUTCFullYear(), 
                    date.getUTCMonth(), 
                    date.getUTCDate(), 
                    date.getUTCHours(), 
                    date.getUTCMinutes(), 
                    date.getUTCSeconds()); 
}

var date = new Date();
var currentDate = convertDateToUTC(date);

date = Date.UTC(2024, 5, 4, 17, 0);
var raidsStartDate = new Date(date);

date = Date.UTC(2024, 5, 4, 17, 0);
var dungeonsStartDate = new Date(date);

date = Date.UTC(2024, 5, 4, 17, 0);
var nightfallssStartDate = new Date(date);
var nightfallsWeaponsStartDate = new Date(date);

date = Date.UTC(2024, 5, 4, 17, 0);
var lostSectorsStartDate = new Date(date);
var lostSectorsExoticsStartDate = new Date(date);
var lostSectorsWeaponsStartDate = new Date(date);


//---------------------------------------------------------
//--- Raids data ---

const raids = [
    { name: "Last Wish", location: "Dreaming City" },
    { name: "Garden of Salvation", location: "Moon" },
    { name: "Deep Stone Crypt", location: "Europa" },
    { name: "Vault of Glass", location: "Legedns" },
    { name: "Vow of the Disciple", location: "Throne World" },
    { name: "King's Fall", location: "Legends" },
    { name: "Root of Nightmares", location: "Neomuna" },
];

//---------------------------------------------------------
//--- Dungeons data ---

const dungeons = [
    { name: "Duality", location: "Moon" },
    { name: "Spire of the Watcher", location: "Mars" },
    { name: "Pit of Heresy", location: "Moon" },
    { name: "Prophecy", location: "Legends" },
    { name: "Shattered Throne", location: "Dreaming City" },
    { name: "Grasp of Avarice", location: "Cosmodrome" },
    { name: "Ghost of the Deep", location: "H.E.L.M." },
];

//---------------------------------------------------------
//--- Nightfalls data ---

const nightfalls = [
    "Hypernet Current",     // <-- need to check
    "Lake of Shadows",      // <-- need to check
    "The Disgraced",
    "The Glassway",
    "Warden of Nothing",
    "The Corrupted"
];

const nightfallWeapons = [
    "Warden's Law - Hand Cannon - Kinetic",
    "Pre Astyanax IV - Combat Bow - Solar",
    "Wild Style - Grenade Launcher - Solar",
    "Scintillation - Linear Fusion Rifle - Strand",
    "Shadow Price - Auto Rifle - Arc",
    "The Slammer - Sword - Stasis",
    "Undercurrent - Grenade Launcher - Arc",
    "Uzume RR4 - Sniper Rifle - Solar",
    "BrayTech Osprey - Rocket Launcher - Void",
    "Loaded Question - Fusion Rifle - Arc",
];

//---------------------------------------------------------
//--- Lost sectors data ---

const lostSectorExotics = [
    "Engram",
    // "Chest",
    // "Helm",
    // "Legs",
    // "Arms"
];

// const oldlostSectorWeapons = [
//     day1 = ["Nox Perennial V - Fusion Rifle - Strand",
//         "Old Sterling - Auto Rifle - Strand",
//         "Marsilion-C - Grenade Launcher - Solar",
//         "Senuna SI6 - Sidearm - Stasis"],

//     day2 = ["Psi Hermetic V - Pulse Rifle - Stasis",
//         "Glissando-47 - Scout Rifle - Strande",
//         "Irukandji - Sniper Rifle - Stasis",
//         "Nasreddin - Sword - Arc"],

//     day3 = ["Heliocentric QSc - Sidearm - Solar",
//         "Last Foray - Sniper Rifle - Solar",
//         "Hand in Hand - Shotgun - Arc",
//         "Battle Scar - Pulse Rifle - Kinetic"],

//     day4 = ["Geodetic HSm - Sword - Void",
//         "Combined Action - Hand Cannon - Arc",
//         "Harsh Language -Grenade Launcher - Void",
//         "Coronach-22 - Auto Rifle - Solar"]
// ];

const lostSectorWeapons = [
    day1 = ["Parabellum - Submachine Gun - Solar",
        "Combined Action - Hand Cannon - Arc",
        "Last Foray - Sniper Rifle - Solar",
        "Old Sterling - Auto Rifle - Strand"],

    day2 = ["Marcota-45 - Machine Gun - Strand",
        "Geodetic HSm - Sword - Void",
        "Glissando-47 - Scout Rifle - Strande",
        "Heliocentric QSc - Sidearm - Solar"],
    
    day3 = ["Ros Arago IV - Auto Rifle - Void",
        "Crux Termination IV - Rocket Launcher - Arc",
        "Nox Perennial V - Fusion Rifle - Strand",
        "Psi Hermetic V - Pulse Rifle - Stasis"],
];

const lostSectors = [
    { name: "Perdition", location: "Cadmus Ridge - Europa" },
    { name: "Bunker E15", location: "Eventide Ruins - Europa" },
    { name: "Concealed Void", location: "Asterion Abyss - Europa" },
    { name: "The Conflux", location: "The Cistern - Nessus" },
    { name: "Thrilladrome", location: "Liming Harbor - Neomuna" },
    { name: "Hydroponics Delta", location: "Zephyr Concourse - Neomuna" },
    { name: "Veles Labyrinth", location: "Forgotten Shore - Cosmodrome" },
    { name: "Exodus Garden 2A", location: "The Divide - Cosmodrome" },
    { name: "The Broken Deep", location: "The Impasse - Pale Heart of the Traveler" },
    { name: "The Blooming Deep", location: "The Blooming - Pale Heart of the Traveler" },
    { name: "The Forgotten Deep", location: "The Landing - Pale Heart of the Traveler" },
];
