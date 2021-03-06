
new (function() {
    var ext = this;

    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    // Functions for block with type 'w' will get a callback function as the 
    // final argument. This should be called to indicate that the block can
    // stop waiting.
    ext.my_first_block = function(callback) {  
        console.log('Hello World');
    };

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            //Block type, block name, block function name
            [' ', 'My First Block', 'my_first_block'],
        ]
    };

    // Register the extension
    ScratchExtensions.register('My first extension', descriptor, ext);
})();