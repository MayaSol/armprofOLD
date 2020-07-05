$(function () {

    // Вход
    $('.reg-login').live('click', function () {

        $('#DialogLogin').load("/classes/Sibloma.php", {ajaxFormLogin: 'view'}, function () {
            $(this).dialog({
                height: 300,
                width: 500
            });
        });

    });

    $('.contact-popup-close3').live('click', function () {

        //$('#Dialog').dialog('close');
        //$('#DialogLogin').dialog('close');
        $('#Dialog3').dialog('close');

    });

    $('form#WRegFormLogin').live('submit', function (e) {
        e.preventDefault();
        $(this).find('input[name=email]').removeClass('border-color-red');
        $(this).find('input[name=password]').removeClass('border-color-red');

        var email = $(this).find('input[name=email]').val();
        var password = $(this).find('input[name=password]').val();

        if (email == '') {
            $(this).find('input[name=email]').addClass('border-color-red');
        }
        if (password == '') {
            $(this).find('input[name=password]').addClass('border-color-red');
        }

        if (email != '' && password != '') {
            $(this).parents('#DialogLogin').load("/classes/Sibloma.php", {
                loginForm: 'ajax',
                email: email,
                password: password
            }, function () {

            });
        }

    });


    $('a[id *= PriceCont]').click(function () {
        var descr_alias = $('#descr_alias').text();
        var descr_tmp_link = $('#descr_tmp_link').text();
        var descr_brand = $('#descr_brand').text();
        var descr_model = $('#descr_model').text();
        $('#Dialog2').load("/design/default/html/WContacts2.php", {
            descr_alias: descr_alias,
            descr_tmp_link: descr_tmp_link,
            descr_brand: descr_brand,
            descr_model: descr_model
        }, function () {
            $(this).dialog({
                height: 345,
                width: 630
            });
        });
    });


    $('.block_k a').click(function () {
        var ii = 0;
        $('.formlogin').is(function () {
            $('.formlogin').show();
            ii = 1;
        });
        if (ii == 1) {
            return false;
        } else {
            return true;
        }
    });

    // Отправка формы
    //$('.wFilter').find('select').change(function(){SendForm($(this));});
    //$('.wFilter').find('input[type=checkbox]').change(function(){SendForm($(this));});

    function SendForm(field) {
        field.parents('form').submit();
    }

    setTimeout(function () {
        $('.success').hide();
    }, 3000);

    $('.link_js').click(function () {
        var link = $(this).data('href');
        window.location.replace("/" + link + "/");
    });

    $("a[rel^='prettyPhoto']").prettyPhoto();

    $('#Contact').click(function () {
        $('#Dialog').load("/design/default/html/WContacts.php", function () {
            $(this).dialog({
                height: 523,
                width: 630
            });
        });
        return false;
    });

    $('#Contact_dop').click(function () {
        $('#Dialog').load("/design/default/html/WContacts.php", function () {
            $(this).dialog({
                height: 523,
                width: 630
            });
        });
        return false;
    });

    $('#ContactCall').click(function () {
        $('#Dialog').load("/design/default/html/WContactCall.php", function () {
            $(this).dialog({
                height: 523,
                width: 630
            });
        });
        return false;
    });
    $('#ContactMail').click(function () {
        $('#Dialog').load("/design/default/html/WContactsInfoM.php", function () {
            $(this).dialog({
                height: 523,
                width: 630
            });
        });
        return false;
    });

    $('.contact-popup-close2').live('click', function () {
        //$('#Dialog').dialog('close');
        $('#Dialog2').dialog('close');
    });

    $('.contact-popup-close1').live('click', function () {
        $('#Dialog').dialog('close');
        //$('#Dialog2').dialog('close');
    });

    $('.contact-popup-close3').live('click', function () {
        $('#Dialog3').dialog('close');
        //$('#Dialog2').dialog('close');
    });

    /*
        $("#video_list_slider ul").carouFredSel({
            width: 235,
            height: 240,
            auto: false,
            infinit: false,
            items: {
                width: 235,
                height: 240,
                visible: 1
            },
            scroll: {
                items: 1,
                fx: 'cover-fade'
            },
            pagination: {
                container: "#video_list_slider .paginator",
                anchorBuilder: function (nr) {
                    return '<span></span>'
                }
            }
        });
    */

    /* Изменить пароль */
    $("#EditAccountPass").click(function () {
        $('div.accountPass').show();
        $(this).hide();
    });


    $('a[id *= PredCont]').click(function () {
        var descr_alias = $('#descr_alias').text();
        var descr_tmp_link = $('#descr_tmp_link').text();
        var descr_brand = $('#descr_brand').text();
        var descr_model = $('#descr_model').text();
        var descr_cat = $('#descr_cat').text();
        var descr_count = $('#qty-two').val();
        var descr_dn = $(".jq-selectbox__select-text").text();
        $('#Dialog3').load("/design/default/html/WContacts3.php", {
            descr_cat: descr_cat,
            descr_alias: descr_alias,
            descr_tmp_link: descr_tmp_link,
            descr_brand: descr_brand,
            descr_model: descr_model,
            descr_count: descr_count,
            descr_dn: descr_dn
        }, function () {
            $(this).dialog({
                height: 345,
                width: 630
            });
        });
    });

//----------------------------------------

    $("#main_cat_slider ul").carouFredSel({
        circular: false,
        // infinite: false,
        width: "100%",
        height: 196,
        items: {
            width: 170,
            height: 196
        },
        scroll: {
            // items: 1,
            // fx: "cover-fade"
        },
        auto: false,
        prev: "#main_cat_slider .prev",
        next: "#main_cat_slider .next"
    });
//----------------------------------------
    $("#news-slider ul").carouFredSel({
        circular: false,
        infinite: false,
        width: "100%",
        items: {
            width: 210,
            visible: 1
        },
        scroll: {
            fx: "directscroll"
        },
        auto: false,
        prev: "#news-slider .prev",
        next: "#news-slider .next"
    });
//----------------------------------------
    $("#producer_slider > ul").carouFredSel({
        circular: false,
        infinite: false,
        width: 1001,
        height: "variable",
        items: {
            width: 1001,
            visible: 1
        },
        scroll: {
            items: 1
        },
        auto: false,
        pagination: {
            container: "#producer_slider .paginator",
            anchorBuilder: function (nr) {
                return '<span></span>'
            }
        }
    });
//----------------------------------------
    /*    var videoLink = $("#video_list_slider a"),
            vln = $('.video-left-name'),
            vlm = $('.video-left-model'),
            vlimg = $('.video-left-bg img')
        vFrame = $('#frame'),
            vFrameLoader = $('#video_frame_loader')


        function callIframe(url, callback) {
            vFrame.attr('src', url);
            vFrame.load(function () {
                callback(this);
            });
        }*/

//----------------------------------------
    /*    videoLink.click(function (event) {
            event.preventDefault();
            if (!$(this).hasClass('active')) {
                vFrame.hide();
                vFrameLoader.show();
                videoLink.removeClass('active').eq(videoLink.index(event.currentTarget)).addClass('active')
                vln.text($(event.currentTarget).find('.video-txt-type').text());
                vlm.text($(event.currentTarget).find('.video-txt-model').text());
                vlimg.attr('src', $(event.currentTarget).data('img-src'));
                callIframe($(event.currentTarget).attr('href'), function () {
                    vFrame.show();
                    vFrameLoader.hide();
                });
            }
            ;
        }).first().trigger('click');

        $('#video-play-btn').click(function (event) {
            event.preventDefault
            console.log('cl');
            vtl.fadeOut('slow');
            vpl.fadeIn();
            setTimeout(function () {
                jwplayer("video-player").play(true);
            }, 100);

        });*/
//---------------------------------
    $('.style-select select').styler();
    // jwplayer("video-player").onComplete(function(){
    // 	vtl.show();
    // 	vpl.hide();
    // })
    $(".checkbox-select select").multiselect({
        selectedList: 3,
        minWidth: 190,
        // height: 'auto',
        header: false,
        noneSelectedText: 'Виберите параметр',
        checkAllText: 'Вибрать все',
        uncheckAllText: 'Убрать все'

    });
    $(".checkbox-select  a").click(function (event) {
        event.preventDefault();
    });
//---------------------------------
    var tab_link = $('.tab-triger'),
        tab_cont = $('.tab-content-item')

    tab_link.click(function (event) {
        var ind = $(this).index()
        tab_link.removeClass('active').eq(ind).addClass('active')
        tab_cont.hide().eq(ind).show()
    }).first().click()
//---------------------------------
    $('.show-more').click(function (event) {
        event.preventDefault();
        $(event.currentTarget).prev('ul').find('.hide').slideDown();
        $(event.currentTarget).hide();
    });
//---------------------------------
    //$('.left-menu li.active').parents('ul').css('display','block');
    $('.left-menu li.active').parents('ul').parents('li').addClass('active');


    var leftFirstLinks = $(".left-menu > ul > li"),
        inUl = $(".left-menu ul ul")

    leftFirstLinks.click(function (event) {

        // console.log($(event.currentTarget).find('ul').length)
        if (!$(event.currentTarget).hasClass('active') && $(event.currentTarget).find('ul').length != 0) {
            event.preventDefault();
            leftFirstLinks.removeClass('active');
            inUl.slideUp();
            $(event.currentTarget).find('ul').slideDown();
            $(event.currentTarget).addClass('active');
        } else {
            if ($(event.currentTarget).hasClass('nofollow')) {
                event.preventDefault();
                $(event.currentTarget).find('ul').slideToggle();
                $(event.currentTarget).addClass('active');
            }
        }
    });
});

//мультиселект чекбоксы
$(document).ready(function () {
    if ($("#video")[0] !== undefined) {
        $("#video")[0].load();
        $("#video > source").attr("src", $(".video-item.active").find('.video-url').text());
        $("#video").attr("poster", $(".video-item.active").find('.video-img').attr('src'));
    }

    $(".video-item").click(function (event) {
        event.stopPropagation();
        event.preventDefault();
        $("#video")[0].load();
        $('.top-slider-content > .left_block').css('opacity', '0');
        $('.top-slider-content > .center_block').css('opacity', '0');
        setTimeout(function(){
	        $("#video > source").attr("src", $(this).find('.video-url').text());
	        $("#video").attr("poster", $(this).find('.video-img').attr('src'));
	        $('.video-left-bg img').attr("src", $(this).data('imgSrc'));
	        var vtt = $(this).find('.video-item-txt-inner .video-txt-type').text();
	        var vtm = $(this).find('.video-item-txt-inner .video-txt-model').text();
	        $('.video-left-name').text(vtt);
	        $('.video-left-model').text(vtm);
	        $(".video-item").removeClass('active');
	        $(this).addClass('active');
	        $('.top-slider-content > .left_block').css('opacity', '1');
        $('.top-slider-content > .center_block').css('opacity', '1');
        }, 500);
    });

    $('.slide_top').click(function () {
        $('.slide_bott').show();
        var $block = $(this).parents('.right_block').find('.list');
        $block.find('.visible').first().prev().show();
        $block.find('.visible').first().prev().addClass('visible');
        $block.find('.visible').last().hide();
        $block.find('.visible').last().removeClass('visible');
        if ($block.find('.visible').first().prev().length == 0) {
            $(this).hide();
            $(this).parent().css('padding-top', '34px');
        }
    });
    $('.slide_bott').click(function () {
        $('.slide_top').show();
        $(this).parent().css('padding-top', '10px');
        var $block = $(this).parents('.right_block').find('.list');
        $block.find('.visible').last().next().show();
        $block.find('.visible').last().next().addClass('visible');
        $block.find('.visible').first().hide();
        $block.find('.visible').first().removeClass('visible');
        if ($block.find('.visible').last().next().length == 0) {
            $(this).hide();
        }
    });

    if ($('header').width() == 300) {
        if ($(".top-sliders").length > 0) {
            $(".top-sliders").swipe({
                swipeRight: function (event, direction) {
                    $('.video-item.active').prev().click();
                }
            });
            $(".top-sliders").swipe({
                swipeLeft: function (event, direction) {
                    $('.video-item.active').next().click();
                }
            });
        }
    }
    $('.producer-block').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1020,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    $('.category-wrp_slider').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1020,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    /*    $(".for-play").click(function () {
            $("#video")[0].play();
        });
        $("#video").on("pause", function () {
            $(".for-play").show();
        });
        $("#video").on("loadstart", function () {
            $(".for-play").show();
        });
        $("#video").on("play", function () {
            $(".for-play").hide();
        });*/

    //Отправка формы фильтров

    //input number
    $('.qtydec').click(function () {

        var number = parseInt($(this).parent('.inner').find('.qty').val());
        if (number <= 1) {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
            }
        }
        else {
            number -= 1;
            $(this).parent('.inner').find('.qty').val(number);
            if (number <= 1) {
                if ($(this).hasClass('active')) {
                    $(this).removeClass('active');
                }
            }
        }
    });
    $('.qtyinc').click(function () {
        var number = parseInt($(this).parent('.inner').find('.qty').val());
        number += 1;
        $(this).parent('.inner').find('.qty').val(number);
        if (number >= 2) {
            if (!$(this).parent('.inner').find('.qtydec').hasClass('active')) {
                $(this).parent('.inner').find('.qtydec').addClass('active');
            }
        }
    });
    //input number end


    $('.submit_fform').bind('click', function () {

        url_old = "http://" + location.hostname + location.pathname;

        url = "";
        form = $(this).parents("form");
        form.find("select").each(function (i) {
            val = $(this).val();
            name = $(this).attr("name");
            if (val != "") {
                if (url == "") {
                    url += "?" + name + "=" + val;
                } else {
                    url += "&" + name + "=" + val;
                }
            }
        });

        form.find("input[type = \"checkbox\"]").each(function (i) {
            val = $(this).val();
            name = $(this).attr("name");
            if ($(this).is(":checked")) {
                if (url == "") {
                    url += "?" + name + "=" + val;
                } else {
                    url += "&" + name + "=" + val;
                }
            }
        });

        location.href = url_old + url;
    })

    $(".optionFilterList>div").click(function () {
        if ($(this).find("[type=checkbox]").is(':checked')) {
            $(this).find("[type=checkbox]").prop('checked', false);
        } else {
            $(this).find("[type=checkbox]").prop('checked', true);
        }
    });


    /*Created by Igor Chumachenko*/
    $('.customers_slider').slick({
        dots: false,
        autoplay: false,
        slidesToShow: 8,
        infinite: true,
        slidesToScroll: 3,
        variableWidth: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1021,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }

        ]
    });

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        infinite: false,
        centerMode: false,
        focusOnSelect: true
    });
    if ($('.content ').width() == 300) {
        $('.left-bar').hide(300);
    }
    $('.media_left_menu_btn').click(function () {
        $('.left-bar').toggle(300);
    });
    $('.red_menu_media').click(function () {
        if (!$(this).hasClass('active')) {
            $(this).addClass('active');
            $('.top-sliders').hide();
            $('.content').hide();
            $('footer').hide();
            $('.media_menu_block').show();
        } else {
            $(this).removeClass('active');
            $('.top-sliders').show();
            $('.content').show();
            $('footer').show();
            $('.media_menu_block').hide();
        }
    });

    $(".right_red_menu").click(function (e) {
        e.stopPropagation();
        $('.menu-open-block').removeClass('active');
        if ($(this).children('.drop_block').hasClass('active')) {
            if (!$(".drop_block").find(e.target).length) {
                $(".right_red_menu").find('.drop_block').removeClass('active');
            }
        }
        else {
            $(".right_red_menu").find('.drop_block').removeClass('active');
            $(this).children('.drop_block').addClass('active');
        }

        $(document).click(function (e) {
            if (!$(".right_red_menu").find(e.target).length) {
                $(".right_red_menu").find('.drop_block').removeClass('active');
            }
        });
    });

    $('.red_menu').click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        $(".right_red_menu").find('.drop_block').removeClass('active');
        if ($('.menu-open-block').hasClass('active')) {
            $('.menu-open-block').removeClass('active');
        }
        else {
            $('.menu-open-block').addClass('active');
        }
        $(document).click(function (e) {
            if (!$(".for_red_menu").find(e.target).length) {
                $('.menu-open-block').removeClass('active');
            }
        });
    });

    /*END*/
});


function init() {
    document._video = document.getElementById("video");
}

document.addEventListener("DOMContentLoaded", init, false);


function switchVideo(n) {
    if (n >= videos.length) n = 0;

    var mp4 = document.getElementById("mp4");
    var parent = mp4.parentNode;

    document._video.setAttribute("poster", videos[n][0]);
    mp4.setAttribute("src", videos[n][1]);
    document._video.load();
}

$(".for-play").click(function () {
    $(".for-play").hide();
});

//Выбор региона
function show_reg_sel() {
    if ($(".header-reg-bl-sel").css("display") == 'none') {
        $(".header-reg-bl-sel").css("display", "block");
        //$(".header-reg-bl-a").text("Скрыть");
    } else {
        $(".header-reg-bl-sel").css("display", "none");
        //$(".header-reg-bl-a").text("Изменить");
    }
    return false;
}
