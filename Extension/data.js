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

var currentDate = new Date();

var raidsStartDate = new Date(2024, 0, 2, 18);

var dungeonsStartDate = new Date(2024, 0, 2, 18);

var nightfallssStartDate = new Date(2024, 0, 2, 18);
var nightfallsWeaponsStartDate = new Date(2024, 0, 9, 18);

var lostSectorsStartDate = new Date(2024, 0, 8, 18);
var lostSectorsExoticsStartDate = new Date(2024, 0, 11, 18);
var lostSectorsWeaponsStartDate = new Date(2024, 0, 11, 18);


//---------------------------------------------------------
//--- Raids data ---

const raids = [
    { name: "King's Fall", location: "Legends" },
    { name: "Root of Nightmares", location: "Neomuna" },
    { name: "Last Wish", location: "Dreaming City" },
    { name: "Garden of Salvation", location: "Moon" },
    { name: "Deep Stone Crypt", location: "Europa" },
    { name: "Vault of Glass", location: "Legedns" },
    { name: "Vow of the Disciple", location: "Throne World" }
];

//---------------------------------------------------------
//--- Dungeons data ---

const dungeons = [
    { name: "Grasp of Avarice", location: "Cosmodrome" },
    { name: "Ghost of the Deep", location: "H.E.L.M." },
    { name: "Duality", location: "Moon" },
    { name: "Spire of the Watcher", location: "Mars" },
    { name: "Pit of Heresy", location: "Moon" },
    { name: "Shattered Throne", location: "Dreaming City" },
    { name: "Prophecy", location: "Legends" }
];

//---------------------------------------------------------
//--- Nightfalls data ---

const nightfalls = [
    "Battleground - Moon",
    "Battleground - Cosmodrome",
    "Birthplace of the Vile",
    "Hypernet Current",
    "Lake of Shadows",
    "The Corrupted"
];

const nightfallWeapons = [
    "Wild Style - Grenade Launcher - Solar",
    "Pre Astyanax IV - Combat Bow - Solar",
    "The Slammer - Sword - Stasis",
    "Undercurrent - Grenade Launcher - Arc",
    "Uzume RR4 - Sniper Rifle - Solar",
    "BrayTech Osprey - Rocket Launcher - Void",
    "Warden's Law - Hand Cannon - Kinetic",
    "Loaded Question - Fusion Rifle - Arc",
];

//---------------------------------------------------------
//--- Lost sectors data ---

const lostSectorExotics = [
    "Chest",
    "Helm",
    "Legs",
    "Arms"
];

const lostSectorWeapons = [
    day1 = ["Nox Perennial V - Fusion Rifle - Strand",
        "Old Sterling - Auto Rifle - Strand",
        "Marsilion-C - Grenade Launcher - Solar",
        "Senuna SI6 - Sidearm - Stasis"],

    day2 = ["Psi Hermetic V - Pulse Rifle - Stasis",
        "Glissando-47 - Scout Rifle - Strande",
        "Irukandji - Sniper Rifle - Stasis",
        "Nasreddin - Sword - Arc"],

    day3 = ["Heliocentric QSc - Sidearm - Solar",
        "Last Foray - Sniper Rifle - Solar",
        "Hand in Hand - Shotgun - Arc",
        "Battle Scar - Pulse Rifle - Kinetic"],

    day4 = ["Geodetic HSm - Sword - Void",
        "Combined Action - Hand Cannon - Arc",
        "Harsh Language -Grenade Launcher - Void",
        "Coronach-22 - Auto Rifle - Solar"]
];

const lostSectors = [
    { name: "Scavenger's Den", location: "Outskirts EDZ" },
    { name: "Skydock IV", location: "Sunken Isles EDZ" },
    { name: "The Quarry", location: "Sunken Isles EDZ" },
    { name: "Aphelion's Rest", location: "The Strand Dereaming City" },
    { name: "Bay of Drowned Wishes", location: "Divalian Mists Dereaming City" },
    { name: "Chamber of Starlight", location: "Rheasilvia Dereaming City" },
    { name: "Perdition", location: "Cadmus Ridge Europa" },
    { name: "Bunker E15", location: "Eventide Ruins Europa" },
    { name: "Concealed Void", location: "Asterion Abyss Europa" },
    { name: "Thrilladrome", location: "Liming Harbor Neomuna" },
    { name: "Gilded Precept", location: "Ahimsa Park Neomuna" }
];
