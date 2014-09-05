YUI().use("node", "event", function(Y) {

    "use strict";

    var body = Y.one("body");

    function onSubmit(event) {
    
        event.preventDefault();
        
        var currentTarget = event.currentTarget,
            input = currentTarget.one("input"),
            value = input.get("value");
            
        value.length && (location.href = currentTarget.get("action") + "/" + value);
        
    }

    body.delegate("submit", onSubmit, "form")

});