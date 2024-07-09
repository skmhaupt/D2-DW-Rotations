//------------------------------------------------------
//--- Functions ---
let tolerance = 0.98

function weeksBetween(d1, d2) {
    let one_week = 1000 * 60 * 60 * 24 * 7;
    let a = Math.floor((d2.getTime() - d1.getTime()) / one_week);
    let b= (d2.getTime() - d1.getTime()) / one_week;
    if ((b - a) >= tolerance) {
        a += 1
    }
    return a
}

function daysBetween(d1, d2) {
    let one_day = 1000 * 60 * 60 * 24;
    let a = Math.floor((d2.getTime() - d1.getTime()) / one_day);
    let b = (d2.getTime() - d1.getTime()) / one_day;
    if ((b - a) >= tolerance) {
        a += 1
    }
    return a
}


function getLinks() {
    let linksJSON = localStorage.getItem("links");

    if (linksJSON == null) {
        localStorage["links"] = JSON.stringify(usefulLinks);
        linksJSON = localStorage.getItem("links");
    }
    return JSON.parse(linksJSON);
}

let eventListenersNotSet = true;
function setLinks() {
    let linkElements = document.getElementsByClassName("link");
    for (let index = 0; index < linkElements.length; index++) {
        linkElements[index].innerHTML = links[index].name
        if (eventListenersNotSet) {
            linkElements[index].addEventListener("click", () => {
                chrome.tabs.create({ url: links[index].link })
            });
        }
    };
    eventListenersNotSet = false;
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

function openLinksEditor() {
    let editButton = document.getElementById("editLinks");
    let editContainer = document.getElementById("edit_container");
    let editLinkContainer = document.getElementById("edit_link_container");
    let editItemButtons = document.getElementsByClassName("editItem");
    let editLinkElements = document.getElementsByClassName("editLinkItem");
    let applyButton = document.getElementById("applyButton");
    let inputs = document.getElementsByClassName("text")
    let linkNumber
    let linkName
    let linkURL

    editContainer.addEventListener("transitionstart", () => {
        setTimeout(() => {
            for (let index = 0; index < editItemButtons.length; index++) {
                editItemButtons[index].classList.toggle("editItemOpen")
            };
        }, 500)
    });

    editLinkContainer.addEventListener("transitionstart", () => {
        setTimeout(() => {
            for (let index = 0; index < editLinkElements.length; index++) {
                editLinkElements[index].classList.toggle("editLinkItemOpen")
            };
        }, 600)
    });


    editButton.addEventListener("click", () => {
        editContainer.classList.toggle("edit_container_open")
    });

    for (let index = 0; index < editItemButtons.length; index++) {
        editItemButtons[index].addEventListener("click", () => {
            editLinkContainer.classList.toggle("edit_link_container_open");
            linkNumber = index
            linkName = links[index].name
            linkURL = links[index].link
            inputs[0].value = linkName
            inputs[1].value = linkURL
        });
    };

    applyButton.addEventListener("click", () => {
        let newInputs = document.getElementsByClassName("text");

        links[linkNumber].name = newInputs[0].value
        links[linkNumber].link = newInputs[1].value

        localStorage.setItem("links", JSON.stringify(links));

        setLinks()

        editLinkContainer.classList.toggle("edit_link_container_open");
    });
}

//------------------------------------------------------
//--- Hide/Show buttons ---

let links = getLinks();

setLinks();

let toggleButtonsState = getOldToggleButtonsState();

setContentVisibilityOnStart();

setToggleEventListeners();

openLinksEditor();


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
console.log("lost sec day", lostSectorsDays)
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
