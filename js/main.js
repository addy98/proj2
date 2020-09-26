$(window).on("load",function() {
  
  
  // Fade on scroll
  
  $(window).scroll(function() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    $(".fade").each(function() {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top + $(this).outerHeight();
      
      /* If the element is completely within bounds of the window, fade it in */
      if (objectBottom < windowBottom) { //object comes into view (scrolling down)
        if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
      } else { //object goes out of view (scrolling up)
        if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
      }
    });
  }).scroll(); //invoke scroll-handler on page-load

  
  
  // some JS for slider

  var Page = (function() {

    var $navArrows = $( '#nav-arrows' ),
        $nav = $( '#nav-dots > span' ),
        slitslider = $( '#slider' ).slitslider( {
            onBeforeChange : function( slide, pos ) {

                $nav.removeClass( 'nav-dot-current' );
                $nav.eq( pos ).addClass( 'nav-dot-current' );

            }
        } ),

        init = function() {

            initEvents();
            
        },
        initEvents = function() {

            // add navigation events
            $navArrows.children( ':last' ).on( 'click', function() {

                slitslider.next();
                return false;

            } );

            $navArrows.children( ':first' ).on( 'click', function() {
                
                slitslider.previous();
                return false;

            } );

            $nav.each( function( i ) {
            
                $( this ).on( 'click', function( event ) {
                    
                    var $dot = $( this );
                    
                    if( !slitslider.isActive() ) {

                        $nav.removeClass( 'nav-dot-current' );
                        $dot.addClass( 'nav-dot-current' );
                    
                    }
                    
                    slitslider.jump( i + 1 );
                    return false;
                
                } );
                
            } );

        };

        return { init : init };

})();

Page.init();

});

$('#quiz').quiz({
  //resultsScreen: '#results-screen',
  //counter: false,
  //homeButton: '#custom-home',
  counterFormat: 'Question %current of %total',
  questions: [
    {
      'q': 'Benches in the bubble are farther away from the sideline.',
      'options': [
        'True',
        'False'
      ],
      'correctIndex': 0,
    },
    {
      'q': 'Why would the time off caused by the pandemic help offenses?',
      'options': [
        'Players typically come into the playoffs right off an 82 game season',
        'Defenses are out of practice',
        'All of the above'
      ],
      'correctIndex': 2,
    },
    {
      'q': 'Where is all the light focused during bubble games?',
      'options': [
        'The fans',
        'The court',
        'The benches'
      ],
      'correctIndex': 1,
    },
    {
      'q': 'How does depth perception play into better shooting in the bubble?',
      'options': [
        'It\'s closer to to players\' practice facilities than normal NBA arenas are',
        'It doesn\'t really have an effect',
        'It helps refs see plays more clearly'
      ],
      'correctIndex': 0,
    },
    {
      'q': 'What are Jamal Murray\'s points per game in the playoffs this year?',
      'options': [
        '51',
        '26.9',
        '46'
      ],
      'correctIndex': 1,
    }
  ]
});