// script.js
window.onload = function () {
    lax.init();

    // Add a driver that we use to control our animations
    lax.addDriver('scrollY', function () {
        return window.scrollY;
    });

    // Add animation bindings to elements
    lax.addElements('.lax_preset_fadeIn:50:100.lax_preset_spin', {
        scrollY: {
            translateX: [
                ["elInY", "elCenterY", "elOutY"],
                [0, 'screenWidth/2', 'screenWidth'],
            ]
        }
    });

    // Add left-right animation to multiple elements
    lax.addElements('.lax_goLeftRight', {
        scrollY: {
            translateX: [
                ["elInY", "elCenterY", "elOutY"],
                ['-screenWidth', 0, 'screenWidth']
            ]
        }
    });
};
