    $(document).ready(function(){
        navWidth = $('.container-fluid').outerWidth();
    });
    $(window).load(function(){
        adapt_navbar_height();
        if($('#slider').length){
            adapt_slider_width();
            slider_items_midPosition_array = create_slider_array();
            center_slider_animated();
            placement_slider_control();
        }
        if($('#liste-all-titres').length){
            placement_titres();
        }
        if($('#loader').length){
            setTimeout(function(){
                $('#loader').animate({
                    // height : '0px',
                    opacity: '0',
                },700,function(){
                    $(this).remove();
                });
            },30);
        }
        // snowReturn = snow(navWidth);
    });

    $(window).resize(function(){
        // clearInterval(snowReturn);
        adapt_navbar_height();
        if($('#slider').length){
            adapt_slider_width();
            slider_items_midPosition_array = create_slider_array();
            center_slider();
            placement_slider_control();
        }
        if($('#liste-all-titres').length){
            placement_titres();
        }
        // $(document).trigger('customForSnow');
    });

    $(document).on('customForSnow', function(){
        $(document).ready(function(){
            navWidth = $('.container-fluid').outerWidth();
            // snowReturn = snow(navWidth);
        });
    });



// NAVBAR FOLD && UNFOLD
    navbarTrigger = $('.navbar').outerHeight() - 50;
    if($('#main').length > 0){
        small_width = $('#main').width()+'px';
    }else{
        small_width = '1000px';
    }
    // On appelle une fois la fonction au debut avant scroll()
    // -> evite les conflits css ultérieurs
    $(document).ready(function(){
        if($(document).scrollTop() < navbarTrigger){
            $('.navbar').removeClass('navbar-fixed-top navbar-deploy');
        }else{
            $('.navbar').addClass('navbar-fixed-top navbar-deploy');
        }
        if($(document).outerWidth() >= 1150 && $('.navbar').hasClass('navbar-deploy')){
            $('.navbar .container-fluid').css('max-width',small_width);
        }
    });

    $(document).scroll(function(){
        // Gestion du LOGO
        if($(document).scrollTop() < navbarTrigger){
            $('#logo-default')
                .removeClass('unfold-logo-default')
                .addClass('fold-logo-default');
            $('#layer-logo-override')
                .removeClass('fold-logo-override')
                .addClass('unfold-logo-override');
            $('.navbar').removeClass('navbar-fixed-top navbar-deploy');
            $('.navbar-nav').removeClass('navbar-nav-deploy');
            adapt_navbar_height();
        }else{
            $('#layer-logo-override')
                .removeClass('unfold-logo-override')
                .addClass('fold-logo-override');
            $('#logo-default')
                .removeClass('fold-logo-default')
                .addClass('unfold-logo-default');
            $('.navbar').addClass('navbar-fixed-top navbar-deploy');
            $('.navbar-nav').addClass('navbar-nav-deploy');
        }
        // !Gestion du LOGO
        // max-width pour NAVBAR-DEPLOY 
        if($(document).outerWidth() >= 1150 && $('.navbar').hasClass('navbar-deploy')){
            $('.navbar .container-fluid').css('max-width',small_width);
        }
        else{
            $('.navbar .container-fluid').css('max-width','100%');
        }
    });
// NAVBAR FOLD && UNFOLD



// Custom Slider
    // Slider-control
    // if($('.slider').length){
        $('.slider-control').click(function(){
            currentMiddle = $('#slider-layer').scrollLeft() + $(document).width()/2;
            // on compare la position du centre du carousel avec la position des .slider-item
            if($(this).is('#slider-control-left')){
                for (var i = 0; i <= slider_items_midPosition_array.length; i++){
                    // +30 = marge d'erreur de déplacement de l'image visée
                    if(currentMiddle < slider_items_midPosition_array[i][2]+30){
                        nextIndex = i-1;
                        break;
                    }
                };
            }else if($(this).is('#slider-control-right')){
                for (var i = 0; i <= slider_items_midPosition_array.length; i++) {
                    // -30 = marge d'erreur de déplacement de l'image visée
                    if(currentMiddle <= slider_items_midPosition_array[i][2]-30){
                        nextIndex = i;
                        break;
                    }
                };
            }
            // on applique la position du nextItem en scrollLeft
            nextLeftPosition = slider_items_midPosition_array[nextIndex][1] 
                                - $(document).width()/2 
                                + $('.slider-item:first').width()/2;
            $('#slider-layer').animate({
                    scrollLeft: nextLeftPosition 
                }, 300, function(){
            });
        });

        $('#slider-mask').children().mouseover(function(){
            $('.slider-control').addClass('slider-control-on');
        });
        $('#slider-mask').children().mouseout(function(){
            $('.slider-control').removeClass('slider-control-on');
        });
    // }
// Custom Slider



// EFFET .container-titre:hover
    $(window).load(function(){

        $('.cover-wrapper').css('width', $('.cover-wrapper>img:first').outerWidth());
        $.each($('.container-titre'), function(){
            coverHeight = $(this).children('img').outerHeight();
            coverWidth = $(this).children('img').outerWidth();
            coverWrapper = $(this).children('.cover-wrapper');
            coverDetail = coverWrapper.children('.cover-detail');
            coverWrapper.css('width', coverWidth+'px')
                        .css('height', coverHeight+'px');
            coverDetail.css('width', coverWidth+'px')
                        .css('height', coverHeight+'px');
            textarea = coverDetail.children('p').children('p');
            textarea.css('margin-top', (coverHeight - textarea.height())/2-40+'px');
        });

        $(".cover-wrapper").hover(function(e) {
            elementPosition = $(this).offset();
            edge = closestEdge(e.pageX - elementPosition.left, e.pageY - elementPosition.top, $(this).width(), $(this).height());
            target = $(this).children('.cover-detail');
            coverDetailWidth  = target.outerWidth();
            coverDetailHeight = target.outerHeight();
            switch(edge){
                case 'top':
                    target.css('left', '0px').css('top', '-'+coverDetailHeight+'px');
                    target.animate({
                        top: '0px'
                    },200);
                    break;
                case 'bottom':
                    target.css('left', '0px').css('top', coverDetailHeight+'px');
                    target.animate({
                        top: '0px'
                    },200);
                    break;
                case 'left':
                    target.css('left', '-300px').css('top', '0px');
                    target.animate({
                        left: '0px'
                    },200);
                    break;
                case 'right':
                    target.css('left', '300px').css('top', '0px');
                    target.animate({
                        left: '0px'
                    },200);
                    break;
            }
        },function(e) {
            elementPosition = $(this).offset();
            edge = closestEdge(e.pageX - elementPosition.left, e.pageY - elementPosition.top, $(this).width(), $(this).height());
            target = $(this).children('.cover-detail');
            coverDetailWidth  = target.outerWidth();
            coverDetailHeight = target.outerHeight();
            switch(edge){
                case 'top':
                    target.animate({
                        top: '-'+coverDetailHeight+'px'
                    },200);
                    break;
                case 'bottom':
                    target.animate({
                        top: coverDetailHeight+'px'
                    },200);
                    break;
                case 'left':
                    target.animate({
                        left: '-300px'
                    },200);
                    break;
                case 'right':
                    target.animate({
                        left: '300px'
                    },200);
                    break;
            }
        });
        function closestEdge(x,y,w,h) {
                var topEdgeDist = distMetric(x,y,w/2,0);
                var bottomEdgeDist = distMetric(x,y,w/2,h);
                var leftEdgeDist = distMetric(x,y,0,h/2);
                var rightEdgeDist = distMetric(x,y,w,h/2);
            
                var min = Math.min(topEdgeDist,bottomEdgeDist,leftEdgeDist,rightEdgeDist);
                switch (min) {
                    case leftEdgeDist:
                        return "left";
                    case rightEdgeDist:
                        return "right";
                    case topEdgeDist:
                        return "top";
                    case bottomEdgeDist:
                        return "bottom";
                }
        }
        function distMetric(x,y,x2,y2) {
            var xDiff = x - x2;
            var yDiff = y - y2;
            return (xDiff * xDiff) + (yDiff * yDiff);
        }

    });
// EFFET .container-titre:hover
