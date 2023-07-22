//script to make navbar responsive

$(function () {
    let viewport = window.matchMedia("(min-width: 576px)");
    if (viewport.matches) {
        $("#responsiveNavbar").removeClass("fixed-bottom");
    }
    $(window).on('resize', function () {
        if ($(window).width() >= 576) {
            $("#responsiveNavbar").removeClass("fixed-bottom");
        } else if ($(window).width() < 576) {
            $("#responsiveNavbar").addClass("fixed-bottom");
        }
    });
})


//making knowledgebase page layout responsive
$(function () {
    let viewport = window.matchMedia("(min-width: 576px)");
    if (viewport.matches) {
        $(".plantEntryInfo").addClass("d-none");
    }
    $(window).on('resize', function () {
        if ($(window).width() >= 576) {
            $(".plantEntryInfo").addClass("d-none");
        } else if ($(window).width() < 576) {
            $(".plantEntryInfo").removeClass("d-none");
        }
    });
})




/*  ==========================================
    ENTRY OBJECTS
* ========================================== */

class PlantEntry {
    constructor(plantName, classification, description, tags) {
        this.plantName = plantName;
        this.classification = classification;
        this.description = description;
        this.tags = tags;
    }
}

class Encounter extends PlantEntry {
    constructor(plantName, classification, description, tags, author, date, entryText) {
        super(plantName, classification, description, tags);
        this.author = author;
        this.date = date;
        this.entryText = entryText;
    }
}

const hangingWeb = new PlantEntry(
    "Hanging Web",
    "Phaeophyceae electrofilum",
    "Thin red or reddish-brown strands of photosynthetic fibers found in damp, shaded environments, usually on tall fungi in fungal groves or sometimes on rock formations. Nodes attached with pseudo-roots at the surface sprout thin, hair-like threads. During the buildup to electrical storms common in the warmer months, these appear to gain a mild charge and float in the air until they make contact with another surface, where they attach to form a web-like structure. The strands appear to be regenerative.",
    ["electrical hazard", "handle carefully", "safe to observe"]
);

const bubbleBomb = new PlantEntry(
    "Bubble Bomb",
    "Monophyllaea Explosispora",
    "This organism produces a single cluster of tightly packed gray or purple pods containing gametes. A tightly-knit, semi-transparent pinkish membrane thought to be a specialized leaf-like structure expands to form around the organism, giving it its distinctive appearance. The leaves produce a gas tentatively identified as methaneselenol, which is theorized to aid in fertilization of the seedpods. As the seeds mature and the pressure builds up inside the bubble, the plant begins to emit a strong odor and eventually bursts. The sudden contact with open air creates a minor explosion, sending the seeds up to 15 meters out, more if assisted by wind. Bubble bombs colonies are commonly found everywhere on plains and open slopes. While the gas is not harmful in small quantities, its long-term effects are unclear; when walking through bubble bomb colonies, it is recommended to watch your step and wear a mask.",
    ["breathing hazard", "handle carefully", "observe carefully"]
);

const blackObelisk = new PlantEntry(
    "Black Obelisk",
    "Mycalitus solitarius",
    "These imposing black or dark-brown stalks are tough but smooth to the touch, and up to 5 meters tall. Unlike other fungi that have taken the evolutionary niche of trees, they lack anything resembling bark or a canopy. A few bulbous outgrowths along the edges of the stalk release spores in the warmer months of the year, and shrink during the colder months. The stalks are typically spaced far apart from each other, and the mycelial network connecting individual stalks can extend for several kilometers long. The purpose of this adaptation is unclear. The obelisks have been found in plains, deserts, mountainous slopes, among groves of other mushrooms, in floodplains, and even in shallow ponds.",
    ["safe to handle", "safe to observe"]
);

const slapgrass = new PlantEntry(
    "Slapgrass",
    "Sanguinocarpa adhærens",
    "This dark red grass possesses barbed blades and is covered with a sticky substance, which appears to aid it in digestion of small insects. The blades can grow up to half a meter in length, though the root system is typically quite shallow. It is usually found in shaded, damp environments, typically  low-lying cave entrances or fugal groves. Avoid skin contact; the substance covering the plant is an irritant.",
    ["skin irritant", "handle carefully", "safe to observe"]
);


/*  ==========================================
    POPULATING KNOWLEDGEBASE
* ========================================== */

const hangingWebLink = document.querySelector("#hangingWeb");
const bubbleBombLink = document.querySelector("#bubbleBomb");
const blackObeliskLink =  document.querySelector("#blackObelisk");
const slapgrassLink = document.querySelector("#slapgrass");

const entryImage = document.querySelector("#plantImage");
const entryName = document.querySelector("#plantName");
const entryClassification = document.querySelector("#plantClassification");
const entryDescription = document.querySelector("#plantDescription");
const entryTags = document.querySelector("#plantTags");

hangingWebLink.addEventListener("click", (evt) => populateEntry(evt,hangingWeb, "hangingWeb"));
bubbleBombLink.addEventListener("click", (evt) => populateEntry(evt,bubbleBomb, "bubbleBomb"));
blackObeliskLink.addEventListener("click", (evt) => populateEntry(evt,blackObelisk, "blackObelisk"));
slapgrassLink.addEventListener("click", (evt) => populateEntry(evt,slapgrass, "slapgrass"));

function populateEntry(evt, obj, objName) {

    entryImage.src = `img/${objName}.png`;
    entryName.innerHTML = obj.plantName;
    entryClassification.innerHTML = obj.classification;
    entryDescription.innerHTML = obj.description;
    entryTags.innerHTML = obj.tags;
}




/*  ==========================================
    SHOW UPLOADED IMAGE
* ========================================== */
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#imageResult')
                .attr('src', e.target.result);
        };
        reader.readAsDataURL(input.files[0]);
    }
}

$(function () {
    $('#upload').on('change', function () {
        readURL(input);
    });
});

/*  ==========================================
    SHOW UPLOADED IMAGE NAME
* ========================================== */
var input = document.getElementById('upload');
var infoArea = document.getElementById('upload-label');

input.addEventListener('change', showFileName);
function showFileName(event) {
    var input = event.srcElement;
    var fileName = input.files[0].name;
    infoArea.textContent = 'File name: ' + fileName;
}