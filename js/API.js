var getQueue = {
    all: function() {
        return $.ajax({
            url: "https://gih0pi4hd1.execute-api.ap-southeast-1.amazonaws.com/Prod/get_current_queue",
            method: "GET"
        });
    },
    complete: function() {
        return $.ajax({
            url: "https://gih0pi4hd1.execute-api.ap-southeast-1.amazonaws.com/Prod/get_current_queue?status=complete",
            method: "GET"
        });
    },
    incomplete: function() { 

        return $.ajax({
            url: "https://gih0pi4hd1.execute-api.ap-southeast-1.amazonaws.com/Prod/get_current_queue?status=incomplete",
            method: "GET"
        });
        
    }
};
