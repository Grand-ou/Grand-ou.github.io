k = 0;

function scrollPic() {
    if (k >= 4) { //如果當前函式超過陣列下標的最大值，k=0
        k = 0;
    }
    if (k == 0) {
        $("#homeImgp4").fadeOut();
        $("#homeImgp3").fadeIn();

    }
    if (k == 1) {
        $("#homeImgp3").fadeOut();
        $("#homeImgp2").fadeIn();
    }
    if (k == 2) {
        $("#homeImgp2").fadeOut();
        $("#homeImgp1").fadeIn();
    }
    if (k == 3) {
        $("#homeImgp1").fadeOut();
        $("#homeImgp4").fadeIn();
    }
    k = k + 1; //k  ,執行下一次操作
}
setInterval("scrollPic()", 5000);

$(document).ready(function () {
    $(function () {
        $('#homeClick').click(function () {
            $('html,body').animate({
                scrollTop: $('#home').offset().top
            }, 500);
        });
    });
});
$(document).ready(function () {
    $(function () {
        $('#introduceClick').click(function () {
            $('html,body').animate({
                scrollTop: $('#introduce').offset().top
            }, 500);
        });
    });
});
$(document).ready(function () {
    $(function () {
        $('#projectClick').click(function () {
            $('html,body').animate({
                scrollTop: $('#project').offset().top
            }, 500);
        });
    });
});
$(document).ready(function () {
    $(function () {
        $('#actClick').click(function () {
            $('html,body').animate({
                scrollTop: $('#act').offset().top
            }, 500);
        });
    });
});