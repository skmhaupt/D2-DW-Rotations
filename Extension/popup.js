//------------------------------------------------------
//--- Functions ---

function weeksBetween(d1, d2) {
    let one_week = 1000 * 60 * 60 * 24 * 7;
    return Math.floor((d2.getTime() - d1.getTime()) / one_week);
}

function daysBetween(d1, d2) {
    let one_day = 1000 * 60 * 60 * 24;
    return Math.floor((d2.getTime() - d1.getTime()) / one_day);
}

function getOldToggleButtonsState() {
    let toggleButtonsStateJSON = localStorage.getItem("toggleHideShow");

    if (toggleButtonsStateJSON == null) {
        localStorage["toggleHideShow"] = JSON.stringify(setHideShowButtons);
        toggleButtonsStateJSON = localStorage.getItem("toggleHideShow");
    }
    return JSON.parse(toggleButtonsStateJSON);
}

function setContentVisibilityOnStart() {
    let toggleButtons = document.getElementsByClassName("toggle");
    for (let index = 0; index < toggleButtons.length; index++) {
        if (!toggleButtonsState[index].value) {
            toggleButtons[index].innerHTML = "Show";
            toggleButtons[index].parentElement.nextElementSibling.classList.toggle("hide");
        }
    }
}

function setToggleEventListeners() {
    let toggleButtons = document.getElementsByClassName("toggle");
    for (let index = 0; index < toggleButtons.length; index++) {
        toggleButtons[index].addEventListener("click", () => {
            if (!toggleButtonsState[index].value) {
                toggleButtons[index].innerHTML = "Hide";
                toggleButtons[index].parentElement.nextElementSibling.classList.toggle("hide");
                toggleButtonsState[index].value = true;
                localStorage.setItem("toggleHideShow", JSON.stringify(toggleButtonsState));
            }
            else {
                toggleButtons[index].innerHTML = "Show";
                toggleButtons[index].parentElement.nextElementSibling.classList.toggle("hide");
                toggleButtonsState[index].value = false;
                localStorage.setItem("toggleHideShow", JSON.stringify(toggleButtonsState));
            }
        });
    }
}


//------------------------------------------------------
//--- Hide/Show buttons ---

let toggleButtonsState = getOldToggleButtonsState();

setContentVisibilityOnStart();

setToggleEventListeners();


//------------------------------------------------------
//--- Useful links ---

usefulLinks.forEach(element => {
    document.getElementById(element.name).addEventListener("click", () => {
        chrome.tabs.create({ url: element.link })
    });
});


//------------------------------------------------------
//--- Raids ---

var raidsWeeks = weeksBetween(raidsStartDate, currentDate);

var raidsRotation = raidsWeeks % raids.length;

document.getElementById("raid").getElementsByClassName("activity_name")[0].innerHTML += raids[raidsRotation].name;
document.getElementById("raid").getElementsByClassName("activity_location")[0].innerHTML += raids[raidsRotation].location;

// document.getElementById("raid").getElementsByClassName("link")[1].addEventListener("click", () => {
//     chrome.tabs.create({ url: "" })
// });


//------------------------------------------------------
//--- Dungeons ---

var dungeonsWeeks = weeksBetween(dungeonsStartDate, currentDate);

var dungeonsRotation = dungeonsWeeks % dungeons.length;

document.getElementById("dungeon").getElementsByClassName("activity_name")[0].innerHTML += dungeons[dungeonsRotation].name;
document.getElementById("dungeon").getElementsByClassName("activity_location")[0].innerHTML += dungeons[dungeonsRotation].location;

// document.getElementById("dungeon").getElementsByClassName("link")[1].addEventListener("click", () => {
//     chrome.tabs.create({ url: "" })
// });


//------------------------------------------------------
//--- Nighfalls ---

var nighfallsWeeks = weeksBetween(nightfallssStartDate, currentDate);
var nighfallWeaponsWeeks = weeksBetween(nightfallsWeaponsStartDate, currentDate);

var nighfallsRotation = nighfallsWeeks % nightfalls.length;
var nighfallWeaponsRotation = nighfallWeaponsWeeks % nightfallWeapons.length;

document.getElementById("nightfall").getElementsByClassName("activity_name")[0].innerHTML += nightfalls[nighfallsRotation];
document.getElementById("nightfall").getElementsByClassName("loot")[0].innerHTML += nightfallWeapons[nighfallWeaponsRotation];

// document.getElementById("nightfall").getElementsByClassName("link")[1].addEventListener("click", () => {
//     chrome.tabs.create({ url: "" })
// });


//------------------------------------------------------
//--- Lost sectors ---

var lostSectorsDays = daysBetween(lostSectorsStartDate, currentDate);
var lostSectorsExoticsDays = daysBetween(lostSectorsExoticsStartDate, currentDate);
var lostSectorsWeaponsDays = daysBetween(lostSectorsWeaponsStartDate, currentDate);

var lostSectorsRotation = lostSectorsDays % lostSectors.length;
var lostSectorsExoticsRotation = lostSectorsExoticsDays % lostSectorExotics.length;
var lostSectorsWorldWeaponsRotation = lostSectorsWeaponsDays % lostSectorWeapons.length;

document.getElementById("lost_sector").getElementsByClassName("activity_name")[0].innerHTML += lostSectors[lostSectorsRotation].name;
document.getElementById("lost_sector").getElementsByClassName("activity_location")[0].innerHTML += lostSectors[lostSectorsRotation].location;

document.getElementById("lost_sector").getElementsByClassName("exotic")[0].innerHTML += lostSectorExotics[lostSectorsExoticsRotation];

lostSectorWeapons[lostSectorsWorldWeaponsRotation].forEach(element => {
    document.getElementById("lost_sector").getElementsByClassName("loot")[0].innerHTML += "\n" + "&emsp;" + element;
});

// document.getElementById("lost_sector").getElementsByClassName("link")[1].addEventListener("click", () => {
//     chrome.tabs.create({ url: "" })
// });
