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