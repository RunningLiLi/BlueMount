async function myajax(config) {
    const { url = '', method = '', data = {}, callback = () => { } } = config;
    const response = await new Promise((resolve) => {
        const xhr = new XMLHttpRequest;
        xhr.open(method, url, true);
        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4 && xhr.status == 200) {
                resolve(xhr.responseText);
            }
        }
        xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        xhr.send(JSON.stringify(data));
    })
    try{
        callback(response)
    }catch(e){
        console.log(e)
    }
}
