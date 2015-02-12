
// NAVBAR
    function adapt_navbar_height(){
        if($(document).width() <= 768 && $('.navbar-collapse').hasClass('in')){
            $('#secure-navbar').css('height', $('.navbar').outerHeight()-$('.navbar-collapse').outerHeight()+'px');
        }else{
            $('#secure-navbar').css('height', $('.navbar').outerHeight()+'px');
        }
    }
// NAVBAR

// SLIDER

    // Fonction pour récupérer la position from LEFT des .slider-item
    // sous forme de array pour gérer les animations du slider custom
    function create_slider_array(){
        $('#slider-layer').scrollLeft(0);
        i = 0;
        leftPosition = 0;
        positionArray = [];
        $.each($('.slider-item'), function(){
            truePosition = $(this).children('img').position().left 
                                        + $(this).outerWidth()/2;
            thisArray = [i,leftPosition,truePosition];
            positionArray.push(thisArray);
            leftPosition = leftPosition + $(this).width() + 20;
            i += 1;
        });
        return positionArray;
    }

    // Adapte la largeur du wrapper du slider
    function adapt_slider_width(){
        sliderWidth = 0;
        $.each($('.slider-item'), function(){
            sliderWidth = sliderWidth + $(this).outerWidth() + 21;
        });
        $('#slider').css('width', sliderWidth+'px');
    }

    // centrer le slider sur l'élément du milieu
    function center_slider(){
        itemNum = Math.ceil($('.slider-item').length/2)-1;
        midItem = $('.slider-item:eq('+itemNum+')');
        midItemLeftPosition = midItem.position().left 
                            - ($(document).width()/2 - midItem.outerWidth()/2);
        $('#slider-layer').scrollLeft(midItemLeftPosition);
    }
    function center_slider_animated(){
        itemNum = Math.ceil($('.slider-item').length/2)-1;
        midItem = $('.slider-item:eq('+itemNum+')');
        midItemLeftPosition = midItem.position().left 
                            - ($(document).width()/2 - midItem.outerWidth()/2);
        $('#slider-layer').animate({
            scrollLeft: midItemLeftPosition
        });
    }


    // Placement des boutons de slider-control 
    function placement_slider_control(){
        $.each($('.slider-control>.fa'), function(){
            middleHeight = ($('#slider').outerHeight() - $(this).outerHeight())/2;
            $(this).css('top', middleHeight+'px');
        });
    }

// SLIDER


// FONCTIONS RELATIVES AU REVUES / TITRES (homePage)
function distribution_titres(liste_titres, img_dir){
    availableNum = [];
    for (var i = 0; i <  liste_titres.length ; i++) {
        availableNum.push(i);
    };
    i=0;
    $.each($('.container-titre'), function(){
        breakBoucle = false;
        while(breakBoucle == false){
            randNum = Math.floor((Math.random()*20));
            for(num in availableNum){
                indexToRemove = availableNum.indexOf(randNum);
                if(indexToRemove != -1){
                    availableNum.splice(indexToRemove, 1);
                    breakBoucle = true;
                }
            }
        }
        $(this).attr('data-target', '#modal-revue-'+i);
        // $(this).attr('aria-labelledby', 'mymodal-revue-'+i);
        $(this).children('.cover-wrapper').children('.cover-detail').children('p')
                .html('<h4 class="cover-detail-univers">Univers <br /><b class="univers">'+liste_titres[randNum][0]+'</b></h4><p>'+liste_titres[randNum][3]+'</p>');
        $(this).children('img').attr('src', img_dir+liste_titres[randNum][1]);
        $(this).children('.info-titre').children('h3').html(liste_titres[randNum][2]);
        $('.all-modal-container').append('<!-- Modal --> <div class="modal fade" id="modal-revue-'+i+'" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"> <div class="modal-dialog modal-lg"> <div class="modal-content"> <div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button> <h4 class="modal-title" id="myModalLabel">'+liste_titres[randNum][2].toUpperCase()+'</h4></div><div class="modal-body"> <img src="'+img_dir+liste_titres[randNum][1]+'" class="couverture-modal" alt="couverture de la revue '+liste_titres[randNum][2]+'" /><div class="modal-text"><h2>Présentation</h2><p>'+liste_titres[randNum][4]+'</p> <h2>Contact</h2><p style="line-height: 28px;">'+liste_titres[randNum][5]+'</p></div></div><div class="modal-footer"><button type="button" class="btn btn-warning" data-dismiss="modal">Fermer</button></div></div> </div> </div>');
        i += 1;
    });
}
// FONCTIONS RELATIVES AU REVUES / TITRES (homePage)
function distribution_titres_univers(liste_titres, img_dir, univers){
    availableNum = [];
    for (var i = 0; i <  liste_titres.length ; i++) {
        if(liste_titres[i][0] == univers){
            availableNum.push(i);
        }
    };
    i=0;
    $.each($('.container-titre'), function(){
        breakBoucle = false;
        while(breakBoucle == false){
            randNum = Math.floor((Math.random()*20));
            for(num in availableNum){
                indexToRemove = availableNum.indexOf(randNum);
                if(indexToRemove != -1){
                    availableNum.splice(indexToRemove, 1);
                    breakBoucle = true;
                }
            }
        }
        $(this).attr('data-target', '#modal-revue-'+i);
        // $(this).attr('aria-labelledby', 'mymodal-revue-'+i);
        $(this).children('.cover-wrapper').children('.cover-detail').children('p')
                .html('<h4 class="cover-detail-univers">Univers <br /><b class="univers">'+liste_titres[randNum][0]+'</b></h4><p>'+liste_titres[randNum][3]+'</p>');
        $(this).children('img').attr('src', '../'+img_dir+liste_titres[randNum][1]);
        $(this).children('.info-titre').children('h3').html(liste_titres[randNum][2]);
        $('.all-modal-container').append('<!-- Modal --> <div class="modal fade" id="modal-revue-'+i+'" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"> <div class="modal-dialog modal-lg"> <div class="modal-content"> <div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button> <h4 class="modal-title" id="myModalLabel">'+liste_titres[randNum][2].toUpperCase()+'</h4></div><div class="modal-body"> <img src="../'+img_dir+liste_titres[randNum][1]+'" class="couverture-modal" alt="couverture de la revue '+liste_titres[randNum][2]+'" /><div class="modal-text"><h2>Présentation</h2><p>'+liste_titres[randNum][4]+'</p> <h2>Contact</h2><p style="line-height: 28px;">'+liste_titres[randNum][5]+'</p></div></div><div class="modal-footer"><button type="button" class="btn btn-warning" data-dismiss="modal">Fermer</button></div></div> </div> </div>');
        i += 1;
    });
}

// Placement absolu des titres
    function placement_titres(){
        if($(window).width() >= 1150){
            nb_row = 4;
        }else if($(window).width() >= 880){
            nb_row = 3;
        }else if($(window).width() >= 486){
            nb_row = 2;
        }else{
            nb_row = 1;
        }
        $('.container-all-titres').css('width', nb_row*(230+20)-20+'px');

        standard_width = $('.layer-container-titre:first').outerWidth();
        standard_height = $('.layer-container-titre:first').outerHeight();
        max_bottom = 0;
        for (var i = 0; i <= $('.layer-container-titre').length; i++) {
            if(i>=nb_row){
                ref = i-nb_row;
                referent = $('.layer-container-titre:eq('+ref+')');
                ref_width = referent.outerWidth();
                ref_height = referent.outerHeight();
                ref_top_position = 
                    referent.position($('.container-all-titres')).top;
                target = $('.layer-container-titre:eq('+i+')');
                if(i%nb_row == 0){
                    target.css('left', '0px')
                            .css('top', ref_top_position+ref_height+20+'px');
                }else{
                    target.css('left', (i%nb_row)*(standard_width+20)+'px')
                            .css('top', ref_top_position+ref_height+20+'px');
                }
                // On conserve la dernière position la plus basse pour 
                // définir .container-all-titre.height
                if(ref_top_position + ref_height + target.outerHeight()
                        > max_bottom){
                    max_bottom = ref_top_position+ref_height 
                                    + target.outerHeight();
                }
            }else{
                target = $('.layer-container-titre:eq('+i+')');
                if(i%nb_row == 0){
                    target.css('left','0px').css('top','0px');
                }else{
                    target.css('left', (i%nb_row)*(standard_width+20)+'px')
                            .css('top','0px');
                }
            }
            // on applique max_bottom à .container-all-titres
            // une fois sorti de la boucle
            $('.container-all-titres').css('height', max_bottom+20+'px');
        };
    }
    // Placement absolu des titres
// Placement absolu des titres


// SNOW
function snow(navWidth){
    // Pas de neige pour les mobiles !
    if(navWidth>768){
        // Test for CPU capacity
        var startTime = new Date().getTime();
        var elapsedTime = 0;
            for (var i = 1000000; i >= 0; i--) {
                a = i * (10377 - 47564 + 444) / 4533222
            };
        elapsedTime = new Date().getTime() - startTime;
        intervalTime = (800/$(window).width())*elapsedTime*5;
        if(intervalTime < 50){
            intervalTime = 50;
        }else if(intervalTime > 300){
            intervalTime = 300;
        }
        // Test for CPU capacity

        distance = $('#secure-navbar').outerHeight()+30;
        intervalReturnId = setInterval(function(){
            // PLUTOT : ajouter un event + eventListener 
            //              pour unset(event) à l'event SCROLL !
            if($('.navbar-custom').hasClass('navbar-deploy') == false){
                randInt = Math.floor((Math.random()*navWidth)); // position latérale
                randInt2 = Math.floor((Math.random()*3)+1); // spin
                randInt3 = Math.floor((Math.random()*100)); // déplacement latéral
                randInt4 = Math.floor((Math.random()*200)+200); // vitesse
                $('.navbar-custom').prepend('<i class="fa fa-star-o"></i>');
                flake = $('.navbar-custom .fa-star-o:first');
                flake.css('left', randInt-50+'px');
                if(randInt2 != 1){
                    flake.addClass('fa-spin'+randInt2+'');
                }
                flake.animate({
                    top: '+='+distance+'',
                    left: "+="+randInt3+""
                    }, randInt4*10, function() {
                        // CallBack
                        $(this).remove();
                });
            }
        },intervalTime);
        return intervalReturnId;
    }else{
        return 0;
    }
}






