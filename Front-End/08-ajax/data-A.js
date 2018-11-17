let http = new XMLHttpRequest();

http.open('GET', './data-A.json');

http.send();

http.onreadystatechange = () =>{
    if (http.readyState != 4) {
        return;
    }else if(http.status == 200){
        console.log(JSON.parse(http.responseText));
    }else {
        console.log('error occurred' + http.status);
    }
}