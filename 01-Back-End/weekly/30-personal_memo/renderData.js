const pug = require('pug')
// let index = 0;
// let user = 'Henry';
// let content = 'Hey';
// let time = 'Thu Nov 15 2018 22:54:59 GMT+0800';

// render after memos changes
function render(user, content, time, index){
return pug.render(`
.memos.w3-container.w3-card.w3-white.w3-round.w3-margin(data-index=${index})
    .w3-container.w3-padding-small
        i.fa.fa-user.w3-left.w3-margin-right(style='font-size:3em')
        span.w3-right.w3-opacity ${diffFromNow(time)}
        h4 ${user}
    hr.w3-clear.w3-topbar.w3-round.w3-border-lime(style='width:15%;')
    input(type="text" value="${content}" style="width:50%").w3-input.w3-left.w3-border-0
    .w3-right.w3-padding-small
        button.delete.w3-button.w3-theme-d2.w3-round-xxlarge(type='button'). 
            #[i.fa.fa-trash] &nbsp;Delete`
// , {pretty: true}
)
}
let diffFromNow = function(input){
    let diff = Math.abs(new Date() - new Date(input)) / 1000;
    let days = Math.floor(diff / (3600 * 24));
    diff -= days * 3600 * 24;
    let hrs = Math.floor(diff / 3600);
    diff -= hrs * 3600;
    let mnts = Math.floor(diff / 60);
    diff -= mnts * 60;

    if(days !== 0){
        return `${days} day ago`
    }else if(hrs !== 0){
        return `${hrs} hours ago`
    }else if(mnts !== 0){
        return `${mnts} minutes ago`
    }else{
        return `${Math.round(diff)} seconds ago`
    }
}

let formatDate = function(input){
    for(i in input){
        input[i].date = diffFromNow(input[i].date)
    }
    return input;
}

let outputHTML = function (user, material){
    let output = [];
    material.forEach((detail, index)=>{
        output.push(render(user, detail.memo, detail.date, index))
    })
    return output.join('')
}

module.exports = {
    diffFromNow,
    formatDate,
    outputHTML
}