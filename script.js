$(document).ready(function(){
    
    $('li').hide()
        .delay(1200)
        .fadeIn(800); $('li');

//    $('a').click(function(){
//    alert("The li was clicked.");
//    });
    
    
//    $('li').on('click', function() {
//        $( this ).fadeTo(120,0.25);
////        alert("function works");
//    });
    
    $('li').mouseenter(function() {
    $( this ).fadeTo(300, 0.25);
        });
    
    $('li').mouseleave(function() {
    $( this ).fadeTo(300, 1.0);
        });
    
    $('ul li a').on('click', function() {
        $( this ).text('Clicked!');
    })
    
    $('ul li').on('click', function() {
        $( this ).css('background-color', 'rgb(219, 70, 70)');
    })
//    
//    $( "li" ).hover(function() {
//  $( this ).fadeToggle( "slow", "linear" );
//  $( this ).fadeToggle( "slow", "linear" );    
//});
//    
    
    
    
//    $('.nav-expand').hover(function() {
//        $('nav-in')
//            .hide();
////            .slideToggle("slow");
//        
//        
//    });
    
    
});