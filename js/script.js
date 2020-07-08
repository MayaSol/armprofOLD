/*! npm.im/object-fit-images 3.2.4 */
var objectFitImages=function(){"use strict";function t(t,e){return"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+t+"' height='"+e+"'%3E%3C/svg%3E"}function e(t){if(t.srcset&&!p&&window.picturefill){var e=window.picturefill._;t[e.ns]&&t[e.ns].evaled||e.fillImg(t,{reselect:!0}),t[e.ns].curSrc||(t[e.ns].supported=!1,e.fillImg(t,{reselect:!0})),t.currentSrc=t[e.ns].curSrc||t.src}}function i(t){for(var e,i=getComputedStyle(t).fontFamily,r={};null!==(e=u.exec(i));)r[e[1]]=e[2];return r}function r(e,i,r){var n=t(i||1,r||0);b.call(e,"src")!==n&&h.call(e,"src",n)}function n(t,e){t.naturalWidth?e(t):setTimeout(n,100,t,e)}function c(t){var c=i(t),o=t[l];if(c["object-fit"]=c["object-fit"]||"fill",!o.img){if("fill"===c["object-fit"])return;if(!o.skipTest&&f&&!c["object-position"])return}if(!o.img){o.img=new Image(t.width,t.height),o.img.srcset=b.call(t,"data-ofi-srcset")||t.srcset,o.img.src=b.call(t,"data-ofi-src")||t.src,h.call(t,"data-ofi-src",t.src),t.srcset&&h.call(t,"data-ofi-srcset",t.srcset),r(t,t.naturalWidth||t.width,t.naturalHeight||t.height),t.srcset&&(t.srcset="");try{s(t)}catch(t){window.console&&console.warn("https://bit.ly/ofi-old-browser")}}e(o.img),t.style.backgroundImage='url("'+(o.img.currentSrc||o.img.src).replace(/"/g,'\\"')+'")',t.style.backgroundPosition=c["object-position"]||"center",t.style.backgroundRepeat="no-repeat",t.style.backgroundOrigin="content-box",/scale-down/.test(c["object-fit"])?n(o.img,function(){o.img.naturalWidth>t.width||o.img.naturalHeight>t.height?t.style.backgroundSize="contain":t.style.backgroundSize="auto"}):t.style.backgroundSize=c["object-fit"].replace("none","auto").replace("fill","100% 100%"),n(o.img,function(e){r(t,e.naturalWidth,e.naturalHeight)})}function s(t){var e={get:function(e){return t[l].img[e?e:"src"]},set:function(e,i){return t[l].img[i?i:"src"]=e,h.call(t,"data-ofi-"+i,e),c(t),e}};Object.defineProperty(t,"src",e),Object.defineProperty(t,"currentSrc",{get:function(){return e.get("currentSrc")}}),Object.defineProperty(t,"srcset",{get:function(){return e.get("srcset")},set:function(t){return e.set(t,"srcset")}})}function o(){function t(t,e){return t[l]&&t[l].img&&("src"===e||"srcset"===e)?t[l].img:t}d||(HTMLImageElement.prototype.getAttribute=function(e){return b.call(t(this,e),e)},HTMLImageElement.prototype.setAttribute=function(e,i){return h.call(t(this,e),e,String(i))})}function a(t,e){var i=!y&&!t;if(e=e||{},t=t||"img",d&&!e.skipTest||!m)return!1;"img"===t?t=document.getElementsByTagName("img"):"string"==typeof t?t=document.querySelectorAll(t):"length"in t||(t=[t]);for(var r=0;r<t.length;r++)t[r][l]=t[r][l]||{skipTest:e.skipTest},c(t[r]);i&&(document.body.addEventListener("load",function(t){"IMG"===t.target.tagName&&a(t.target,{skipTest:e.skipTest})},!0),y=!0,t="img"),e.watchMQ&&window.addEventListener("resize",a.bind(null,t,{skipTest:e.skipTest}))}var l="fregante:object-fit-images",u=/(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,g="undefined"==typeof Image?{style:{"object-position":1}}:new Image,f="object-fit"in g.style,d="object-position"in g.style,m="background-size"in g.style,p="string"==typeof g.currentSrc,b=g.getAttribute,h=g.setAttribute,y=!1;return a.supportsObjectFit=f,a.supportsObjectPosition=d,o(),a}();
/*! lazysizes - v5.2.2 */
!function(e){var t=function(u,D,f){"use strict";var k,H;if(function(){var e;var t={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:true,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:true,ricTimeout:0,throttleDelay:125};H=u.lazySizesConfig||u.lazysizesConfig||{};for(e in t){if(!(e in H)){H[e]=t[e]}}}(),!D||!D.getElementsByClassName){return{init:function(){},cfg:H,noSupport:true}}var O=D.documentElement,a=u.HTMLPictureElement,P="addEventListener",$="getAttribute",q=u[P].bind(u),I=u.setTimeout,U=u.requestAnimationFrame||I,l=u.requestIdleCallback,j=/^picture$/i,r=["load","error","lazyincluded","_lazyloaded"],i={},G=Array.prototype.forEach,J=function(e,t){if(!i[t]){i[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")}return i[t].test(e[$]("class")||"")&&i[t]},K=function(e,t){if(!J(e,t)){e.setAttribute("class",(e[$]("class")||"").trim()+" "+t)}},Q=function(e,t){var i;if(i=J(e,t)){e.setAttribute("class",(e[$]("class")||"").replace(i," "))}},V=function(t,i,e){var a=e?P:"removeEventListener";if(e){V(t,i)}r.forEach(function(e){t[a](e,i)})},X=function(e,t,i,a,r){var n=D.createEvent("Event");if(!i){i={}}i.instance=k;n.initEvent(t,!a,!r);n.detail=i;e.dispatchEvent(n);return n},Y=function(e,t){var i;if(!a&&(i=u.picturefill||H.pf)){if(t&&t.src&&!e[$]("srcset")){e.setAttribute("srcset",t.src)}i({reevaluate:true,elements:[e]})}else if(t&&t.src){e.src=t.src}},Z=function(e,t){return(getComputedStyle(e,null)||{})[t]},s=function(e,t,i){i=i||e.offsetWidth;while(i<H.minSize&&t&&!e._lazysizesWidth){i=t.offsetWidth;t=t.parentNode}return i},ee=function(){var i,a;var t=[];var r=[];var n=t;var s=function(){var e=n;n=t.length?r:t;i=true;a=false;while(e.length){e.shift()()}i=false};var e=function(e,t){if(i&&!t){e.apply(this,arguments)}else{n.push(e);if(!a){a=true;(D.hidden?I:U)(s)}}};e._lsFlush=s;return e}(),te=function(i,e){return e?function(){ee(i)}:function(){var e=this;var t=arguments;ee(function(){i.apply(e,t)})}},ie=function(e){var i;var a=0;var r=H.throttleDelay;var n=H.ricTimeout;var t=function(){i=false;a=f.now();e()};var s=l&&n>49?function(){l(t,{timeout:n});if(n!==H.ricTimeout){n=H.ricTimeout}}:te(function(){I(t)},true);return function(e){var t;if(e=e===true){n=33}if(i){return}i=true;t=r-(f.now()-a);if(t<0){t=0}if(e||t<9){s()}else{I(s,t)}}},ae=function(e){var t,i;var a=99;var r=function(){t=null;e()};var n=function(){var e=f.now()-i;if(e<a){I(n,a-e)}else{(l||r)(r)}};return function(){i=f.now();if(!t){t=I(n,a)}}},e=function(){var v,m,c,h,e;var y,z,g,p,C,b,A;var n=/^img$/i;var d=/^iframe$/i;var E="onscroll"in u&&!/(gle|ing)bot/.test(navigator.userAgent);var _=0;var w=0;var N=0;var M=-1;var x=function(e){N--;if(!e||N<0||!e.target){N=0}};var W=function(e){if(A==null){A=Z(D.body,"visibility")=="hidden"}return A||!(Z(e.parentNode,"visibility")=="hidden"&&Z(e,"visibility")=="hidden")};var S=function(e,t){var i;var a=e;var r=W(e);g-=t;b+=t;p-=t;C+=t;while(r&&(a=a.offsetParent)&&a!=D.body&&a!=O){r=(Z(a,"opacity")||1)>0;if(r&&Z(a,"overflow")!="visible"){i=a.getBoundingClientRect();r=C>i.left&&p<i.right&&b>i.top-1&&g<i.bottom+1}}return r};var t=function(){var e,t,i,a,r,n,s,l,o,u,f,c;var d=k.elements;if((h=H.loadMode)&&N<8&&(e=d.length)){t=0;M++;for(;t<e;t++){if(!d[t]||d[t]._lazyRace){continue}if(!E||k.prematureUnveil&&k.prematureUnveil(d[t])){R(d[t]);continue}if(!(l=d[t][$]("data-expand"))||!(n=l*1)){n=w}if(!u){u=!H.expand||H.expand<1?O.clientHeight>500&&O.clientWidth>500?500:370:H.expand;k._defEx=u;f=u*H.expFactor;c=H.hFac;A=null;if(w<f&&N<1&&M>2&&h>2&&!D.hidden){w=f;M=0}else if(h>1&&M>1&&N<6){w=u}else{w=_}}if(o!==n){y=innerWidth+n*c;z=innerHeight+n;s=n*-1;o=n}i=d[t].getBoundingClientRect();if((b=i.bottom)>=s&&(g=i.top)<=z&&(C=i.right)>=s*c&&(p=i.left)<=y&&(b||C||p||g)&&(H.loadHidden||W(d[t]))&&(m&&N<3&&!l&&(h<3||M<4)||S(d[t],n))){R(d[t]);r=true;if(N>9){break}}else if(!r&&m&&!a&&N<4&&M<4&&h>2&&(v[0]||H.preloadAfterLoad)&&(v[0]||!l&&(b||C||p||g||d[t][$](H.sizesAttr)!="auto"))){a=v[0]||d[t]}}if(a&&!r){R(a)}}};var i=ie(t);var B=function(e){var t=e.target;if(t._lazyCache){delete t._lazyCache;return}x(e);K(t,H.loadedClass);Q(t,H.loadingClass);V(t,L);X(t,"lazyloaded")};var a=te(B);var L=function(e){a({target:e.target})};var T=function(t,i){try{t.contentWindow.location.replace(i)}catch(e){t.src=i}};var F=function(e){var t;var i=e[$](H.srcsetAttr);if(t=H.customMedia[e[$]("data-media")||e[$]("media")]){e.setAttribute("media",t)}if(i){e.setAttribute("srcset",i)}};var s=te(function(t,e,i,a,r){var n,s,l,o,u,f;if(!(u=X(t,"lazybeforeunveil",e)).defaultPrevented){if(a){if(i){K(t,H.autosizesClass)}else{t.setAttribute("sizes",a)}}s=t[$](H.srcsetAttr);n=t[$](H.srcAttr);if(r){l=t.parentNode;o=l&&j.test(l.nodeName||"")}f=e.firesLoad||"src"in t&&(s||n||o);u={target:t};K(t,H.loadingClass);if(f){clearTimeout(c);c=I(x,2500);V(t,L,true)}if(o){G.call(l.getElementsByTagName("source"),F)}if(s){t.setAttribute("srcset",s)}else if(n&&!o){if(d.test(t.nodeName)){T(t,n)}else{t.src=n}}if(r&&(s||o)){Y(t,{src:n})}}if(t._lazyRace){delete t._lazyRace}Q(t,H.lazyClass);ee(function(){var e=t.complete&&t.naturalWidth>1;if(!f||e){if(e){K(t,"ls-is-cached")}B(u);t._lazyCache=true;I(function(){if("_lazyCache"in t){delete t._lazyCache}},9)}if(t.loading=="lazy"){N--}},true)});var R=function(e){if(e._lazyRace){return}var t;var i=n.test(e.nodeName);var a=i&&(e[$](H.sizesAttr)||e[$]("sizes"));var r=a=="auto";if((r||!m)&&i&&(e[$]("src")||e.srcset)&&!e.complete&&!J(e,H.errorClass)&&J(e,H.lazyClass)){return}t=X(e,"lazyunveilread").detail;if(r){re.updateElem(e,true,e.offsetWidth)}e._lazyRace=true;N++;s(e,t,r,a,i)};var r=ae(function(){H.loadMode=3;i()});var l=function(){if(H.loadMode==3){H.loadMode=2}r()};var o=function(){if(m){return}if(f.now()-e<999){I(o,999);return}m=true;H.loadMode=3;i();q("scroll",l,true)};return{_:function(){e=f.now();k.elements=D.getElementsByClassName(H.lazyClass);v=D.getElementsByClassName(H.lazyClass+" "+H.preloadClass);q("scroll",i,true);q("resize",i,true);q("pageshow",function(e){if(e.persisted){var t=D.querySelectorAll("."+H.loadingClass);if(t.length&&t.forEach){U(function(){t.forEach(function(e){if(e.complete){R(e)}})})}}});if(u.MutationObserver){new MutationObserver(i).observe(O,{childList:true,subtree:true,attributes:true})}else{O[P]("DOMNodeInserted",i,true);O[P]("DOMAttrModified",i,true);setInterval(i,999)}q("hashchange",i,true);["focus","mouseover","click","load","transitionend","animationend"].forEach(function(e){D[P](e,i,true)});if(/d$|^c/.test(D.readyState)){o()}else{q("load",o);D[P]("DOMContentLoaded",i);I(o,2e4)}if(k.elements.length){t();ee._lsFlush()}else{i()}},checkElems:i,unveil:R,_aLSL:l}}(),re=function(){var i;var n=te(function(e,t,i,a){var r,n,s;e._lazysizesWidth=a;a+="px";e.setAttribute("sizes",a);if(j.test(t.nodeName||"")){r=t.getElementsByTagName("source");for(n=0,s=r.length;n<s;n++){r[n].setAttribute("sizes",a)}}if(!i.detail.dataAttr){Y(e,i.detail)}});var a=function(e,t,i){var a;var r=e.parentNode;if(r){i=s(e,r,i);a=X(e,"lazybeforesizes",{width:i,dataAttr:!!t});if(!a.defaultPrevented){i=a.detail.width;if(i&&i!==e._lazysizesWidth){n(e,r,a,i)}}}};var e=function(){var e;var t=i.length;if(t){e=0;for(;e<t;e++){a(i[e])}}};var t=ae(e);return{_:function(){i=D.getElementsByClassName(H.autosizesClass);q("resize",t)},checkElems:t,updateElem:a}}(),t=function(){if(!t.i&&D.getElementsByClassName){t.i=true;re._();e._()}};return I(function(){H.init&&t()}),k={cfg:H,autoSizer:re,loader:e,init:t,uP:Y,aC:K,rC:Q,hC:J,fire:X,gW:s,rAF:ee}}(e,e.document,Date);e.lazySizes=t,"object"==typeof module&&module.exports&&(module.exports=t)}("undefined"!=typeof window?window:{});

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

    objectFitImages();

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

    // $('.slider-for').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     arrows: false,
    //     fade: true,
    //     asNavFor: '.slider-nav'
    // });
    // $('.slider-nav').slick({
    //     slidesToShow: 4,
    //     slidesToScroll: 1,
    //     asNavFor: '.slider-for',
    //     dots: false,
    //     infinite: false,
    //     centerMode: false,
    //     focusOnSelect: true
    // });
Object.assign(lazySizes.cfg, {
    preloadAfterLoad: false,
    loadMode: 1,
    expand: 10,
    expFactor: 1.7,
  arrows: false,
  // loadHidden: false,
    debug: true,
});    
    $('.produkt-slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        infinite: true,
        fade: true,
        asNavFor: '.produkt-slider-nav'
    });
    $('.produkt-slider-nav').slick({
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.produkt-slider-for',
        arrows: true,
        dots: false,
        infinite: true,
        centerMode: false,
        focusOnSelect: true,
        responsive: [
            {
              breakpoint: 1140,
              settings: {
                vertical: false,
                verticalSwiping: false,
                arrows: true,
                slidesToShow: 5,
              }
            },
            {
              breakpoint: 1021,
              settings: {
                vertical: false,
                verticalSwiping: false,
                arrows: true,
                slidesToShow: 4,
              }
            },
            {
              breakpoint: 768,
              settings: {
                vertical: false,
                verticalSwiping: false,
                arrows: true,
                slidesToShow: 3,
              }
            }            
        ]
    });

    //Сделать слайдер длиннее
    $('.produkt-slider-nav-more').click(function(){
        $('.produkt-slider-nav').slick('slickSetOption','slidesToShow','6',true);
        $(this).hide();
        $('.produkt-slider-nav .slick-prev').css({opacity: '1', width: '15px', height: '15px'});
        $('.produkt-slider-nav .slick-next').css({opacity: '1', width: '15px', height: '15px'});
    })

    if ($('.content ').width() == 300) {
        $('.left-bar').hide(300);
    }
    $('.media_left_menu_btn').click(function () {
        $('.aside-menu').toggle(300);
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


    //Показать больше. Фильтр диаметр.
	 $('.filter-values .btn--show-all').click(function(event) {
        var parent = $(this).closest('.filter-values');
        console.log('parent');
        console.log(parent);
        console.log(!($(parent).hasClass('show-all')));
        if (!($(parent).hasClass('show-all'))) {
	        $(parent).addClass('show-all');
        }
        var parent = $(this).closest('.category-filter-form');
        console.log('parent');
        console.log(parent);
        console.log(!($(parent).hasClass('show-all')));
        if (!($(parent).hasClass('show-all'))) {
            $(parent).addClass('show-all');
        }
    });

	//Скрыть. Фильтр диаметр.
	 $('.filter-values .btn--hide').click(function(event) {
        var parent = $(this).closest('.filter-values');
        console.log('parent');
        console.log(parent);
        $(parent).removeClass('show-all');

    });

     //Переключение видв списка каталога
     $(".category-products-btns .btn").click(function(event) {
        console.log('btn click');
        console.log($(this));
        var containerClass=$(this).data("container");
        var container = $('.' + containerClass);
        console.log(container);
        container.removeAttr("class");
        container.addClass(containerClass);
        container.addClass($(this).data("class"));
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
