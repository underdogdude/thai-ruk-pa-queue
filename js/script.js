function init() { 
    getQueueComplete();
    incomplete.get();
}

function getQueueComplete() { 
    getQueue.complete().done(function(res) { 

        console.log(res);
    })
}


var incomplete = { 
    get: function() { 

        getQueue.incomplete().done(function(res) { 
            console.log(res, ' incomplete');
            incomplete.set(res);
        })
    },
    set: function(data) { 

        var string ;
        var elem = $("#table_incomplete_row");

        for(var i = 0 ; i < data.length ; i++) { 
            
            string += `
                <tr class="table__row" id="${ data[i].id }">
                    <td scope="row" class="table__no"> ${ i + 1 } </td>
                    <td class="table__phone"> (${ data[i].country_code }) - ${ data[i].mobile } </td>
                    <td class="table__status">

                        ${ generateQueueStatus(data[i].queue_status) }
                    </td>
                    <td class="table__date">
                        ${ new Date(data[i].modified_date * 1000) }
                    </td>
                    <td class="table__queuein">
                        xxxx
                    </td>
                    <td class="table__queueout">
                        xxxx
                    </td>
                    <td class="table__queueout">
                        xxxx
                    </td>
                    <td class="table__button">
                        <div>
                            <button type="button" class="btn btn-outline-primary btn-sm">
                                เลือกไกด์
                                <i class="far fa-hand-pointer"></i>
                            </button>
                            <button type="button" class="btn btn-outline-success btn-sm">
                                เสร็จสิ้น
                                <i class="far fa-check-circle"></i>
                            </button>
                            <button type="button" class="btn btn-outline-secondary btn-sm">
                                ยกเลิก
                                <i class="far fa-times-circle"></i>
                            </button>
                        </div>
                    </td>
                </tr>
            `;
        }

        $(elem).html(string);
    }
}


function generateQueueStatus (string) { 

    if(string.toLowerCase() === "assigned") { 
        
        return `<span class="badge badge-success">${ capitalizeFirstLetter(string) }</span>`;

    }else if(string.toLowerCase() === "waiting") { 

        return `<span class="badge badge-warning">${ capitalizeFirstLetter(string) }</span>`;
        
    }else if(string.toLowerCase() === "walked") { 

        return `<span class="badge badge-primary">${ capitalizeFirstLetter(string) }</span>`;
    
    }else if(string.toLowerCase() === "late") { 

        return `<span class="badge badge-danger">${ capitalizeFirstLetter(string) }</span>`;
    }
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


init();
