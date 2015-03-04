$(document).ready(function(){
    if($(window).width()>=768){
        $('#contacts-revue').removeClass('hide');
        $('#modal-btn').addClass('hide');
    }else{
        $('#modal-btn').removeClass('hide');
        $('#contacts-revue').addClass('hide');
    }
});
$(window).resize(function(){
    if($(window).width()>768){
        $('#contacts-revue').removeClass('hide');
        $('#modal-btn').addClass('hide');
    }else{
        $('#modal-btn').removeClass('hide');
        $('#contacts-revue').addClass('hide');
    }
    align_revues_univers();
});

$(window).load(function(){
    align_revues_univers();
});

function align_revues_univers(){
    maxImgHeight = 0;
    for (var i = $('.revue-univers').length - 1; i >= 0; i--) {
        if($('.revue-univers:eq('+i+')').height() > maxImgHeight){
                maxImgHeight = $('.revue-univers:eq('+i+')').height();
        }
    }
    for (var i = $('.revue-univers').length - 1; i >= 0; i--){
        if($('.revue-univers:eq('+i+')').height() < maxImgHeight){
                $('.revue-univers:eq('+i+')').css('margin-top',(maxImgHeight - $('.revue-univers:eq('+i+')').height())/2).css('margin-bottom',(maxImgHeight-$('.revue-univers:eq('+i+')').height())/2);
        }
    }  
}
