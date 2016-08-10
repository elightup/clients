jQuery( document ).ready( function ( $ )
{
    'use strict';
    
    function menuMobile() {
        var mobileClass = 'mobile-menu-open';
        var $body = $( 'body' );

        // Click to show mobile menu
        $( '#navbar-toggle' ).on( 'click', function ( e )
        {
            if ( !$body.hasClass( mobileClass ) )
            {
                e.stopPropagation(); // Do not trigger click event on '.wrapper' below
                $body.addClass( mobileClass );
            }
        } );
        // When mobile menu is open, click on page content will close it
        $( '.wrapper' ).on( 'click', function ( e )
        {
            if ( $body.hasClass( mobileClass ) )
            {
                e.preventDefault();
                $body.removeClass( mobileClass );
            }
        } );
    }
    
    /**
     * Add toggle dropdown icon for mobile menu.
     * @param $container
     */
    function initMobileNavigation( $container )
    {
        // Add dropdown toggle that displays child menu items.
        var $dropdownToggle = $( "<i class='dropdown-toggle fa fa-angle-down'></i>" );

        $container.find( '.menu-item-has-children > a' ).after( $dropdownToggle );

        // Toggle buttons and sub menu items with active children menu items.
        $container.find( '.current-menu-ancestor > .sub-menu' ).show();
        $container.find( '.dropdown-toggle' ).click( function ( e )
        {
            e.preventDefault();
            $( '#primary-menu-mobile .sub-menu' ).hide();

            var $this = $( this );
            $this.toggleClass( 'toggled-on' );
            $this.next( '.children, .sub-menu' ).slideToggle();
        } );
    }
    initMobileNavigation( $( '.primary-menu-mobile' ) );
} );
