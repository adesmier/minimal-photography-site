$(function () {

    $('#small-image .inner-gradient').bind('click', function(){

        var clickedSrc = $(this).attr('data-imgsrc');
        var finalSrc;

        $('#large-image img').each(function(){

            var replacementSrc = $(this).attr('data-altsrc');

            if($(this).hasClass('active-image')){
                $(this).removeClass('active-image');
                finalSrc = replacementSrc;
            }

            if(replacementSrc === clickedSrc){
                $(this).addClass('active-image');
            }

        });

        $(this).attr('data-imgsrc', finalSrc)
        $(this).next().attr('src', finalSrc);

    });


    $('#thumbnail-wrapper img').bind('click', function(){

        var newHeroSrc = $(this).attr('data-altsrc');

        $('#project-wrapper img').attr('src', newHeroSrc)

    });

})
