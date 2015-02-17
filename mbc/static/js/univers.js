$(document).ready(function(){
        banner = $('#banner');
        bannerHeight = banner.outerHeight();
        $('#banner-titre').css('left', ($(document).outerWidth() - $('#banner-titre:first').width())/2);
        $('#banner-titre').css('top', ($('#banner-wrapper').height() - $('#banner-titre:first').outerHeight())/2 -10);
        $('#main p:first').prepend('<i class="fa fa-long-arrow-right"></i> ');
});
$(window).load(function(){
        banner = $('#banner');
        bannerHeight = banner.outerHeight();
        $('#banner-titre').css('left', ($(document).outerWidth() - $('#banner-titre:first').width())/2);
        $('#banner-titre').css('top', ($('#banner-wrapper').height() - $('#banner-titre:first').outerHeight())/2 -20); // Problème pour centrer le #banner-titre, pour le moment on shorcut avec le -20px...
        $('#chiffres-univers').css('margin-top', $('#banner-wrapper').outerHeight()+'px');
        ChiffreRefHeight = 0;
        for (var i = $('.chiffre').length - 1; i >= 0; i--){
                if($('.chiffre:eq('+i+')').outerHeight() > ChiffreRefHeight){
                        ChiffreRefHeight = $('.chiffre:eq('+i+')').outerHeight();
                }
        }
        $('.chiffre').css('height',ChiffreRefHeight+'px');
});

$(window).resize(function(){
        banner = $('#banner');
        bannerHeight = banner.outerHeight();
        $('#banner-titre').css('left', ($(document).outerWidth() - $('#banner-titre:first').width())/2);
        $('#banner-titre').css('top', ($('#banner-wrapper').height() - $('#banner-titre:first').outerHeight())/2 -20); // Problème pour centrer le #banner-titre, pour le moment on shorcut avec le -20px...
        $('#chiffres-univers').css('margin-top', $('#banner-wrapper').outerHeight()+'px');
        ChiffreRefHeight = 0;
        for (var i = $('.chiffre').length - 1; i >= 0; i--){
                if($('.chiffre:eq('+i+')').outerHeight() > ChiffreRefHeight){
                        ChiffreRefHeight = $('.chiffre:eq('+i+')').outerHeight();
                }
        }
        $('.chiffre').css('height',ChiffreRefHeight+'px');
});

