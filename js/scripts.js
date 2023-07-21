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





//populating knowledgebase


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


