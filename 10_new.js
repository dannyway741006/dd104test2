$(document).ready(function(){
    // let ans = parseInt($('div').css('fontSize'));
    // alert(ans);

    $('#smallButton').click(function(){
        changeSize('small');
    });
    $('#bigButton').click(function(){
        changeSize('big');
    });

    function changeSize(size){
        let currentSize = parseInt($('div').css('fontSize'));

        if(size == 'small'){
            newSize = currentSize - 2;
        }else{
            newSize = currentSize + 2;
        }
        $('div').css('fontSize',`${newSize}px`);
    }
});