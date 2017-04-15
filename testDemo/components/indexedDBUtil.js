let indexedDB 


export function getIndexedDB(){
    if(indexedDB == null){
       indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB
    }
    if(indexedDB == null){
        alert("浏览器不支持indexedDB")
    }
    return indexedDB
}

export function openDB(name,version,option={}){
    let db = null
    const request = getIndexedDB().open(name, version)
    request.onerror = function(event){
        console.log("打开DB失败", event);
        option.onerror&&option.onerror(event)
    }
    request.onupgradeneeded   = function(event){
        console.log("Upgrading");
        db = event.target.result;

        option.onupgradeneeded&&option.onupgradeneeded(event)
        
    };
    request.onsuccess  = function(event){
        console.log("打开DB成功", event);
        db = event.target.result;
        option.onsuccess&&option.onsuccess(event)
    }

    return db
}