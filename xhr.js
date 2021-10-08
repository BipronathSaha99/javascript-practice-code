
console.clear();
//event- onload(), onerror()
//property- respose, responseText, responseType, responeURL, status, statusText
//function- open(), send(), sendRequestHeader()

/*
const makeOver = (method, URL, data) =>{
   return new Promise((resolve,reject)=>{
    const  xhr = new XMLHttpRequest();

    xhr.open(method, URL);

    xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8')

    xhr.onload = ()=>{
        let data = xhr.response;
        console.log(JSON.parse(data));
    }
    xhr.onerror = () =>{
        console.log("Some error may be occured");
    }
    xhr.send(JSON.stringify(data));
   })
}

//receive data
const getData = () =>{
    makeOver('GET', 'https://jsonplaceholder.typicode.com/posts')
    .then((res) => {
        console.log(res)
    })

}

//creating resource 
const sendData = () =>{
    makeOver('POST', 'https://jsonplaceholder.typicode.com/posts', {
        title: 'foo',
        body: 'bar',
        userId: 1,
    }) 
}

//update  resource 
const updateData = () =>{
    makeOver('PUT', 'https://jsonplaceholder.typicode.com/posts/1', {
        title: 'fooOne',
        body: 'barOne',
        userId: 1,
    }) 
}

//Patching a resource 
const updateSingleData = () =>{
    makeOver('PATCH', 'https://jsonplaceholder.typicode.com/posts/1', {
        title: 'football',
        body: 'barTwo',
        userId: 2,
    }) 
}

//deleting a resource 
const deleteData = () =>{
    makeOver('DELETE', 'https://jsonplaceholder.typicode.com/posts/1') 
}
// deleteData();
// updateSingleData();
// updateData();
// sendData();
// getData();
*/


const sampleData = (method,url,data)=>{
    return new Promise((resolve,reject)=>{

        const xmlhttpRequest = new XMLHttpRequest();

        xmlhttpRequest.open(method,url);

        xmlhttpRequest.setRequestHeader('Content-type','application/json; charset=UTF-8');

        xmlhttpRequest.onload = ()=>{
            let data = xmlhttpRequest.response;
            console.log(JSON.parse(data))
        }   
        xmlhttpRequest.onerror = ()=>{
            console.log("Some error may be occured");
        }
        xmlhttpRequest.send(JSON.stringify(data));
    })
}

//getting resources
const getData = ()=>{
    sampleData('GET', 'https://jsonplaceholder.typicode.com/posts')
    .then((res)=>{console.log(res)});
}

//creating resources 
const sendData = ()=>{
    sampleData('POST', 'https://jsonplaceholder.typicode.com/posts',{
        title: 'foo',
        body: 'bar',
        userId: 1,
    });
}


//updating resources 
const updateData = ()=>{
    sampleData('PUT', 'https://jsonplaceholder.typicode.com/posts/1',{
        title: 'foobar',
        body: 'barfoo',
        userId: 1,
    });
}

//Patching resources 
const updateSingleData = ()=>{
    sampleData('PATCH', 'https://jsonplaceholder.typicode.com/posts/1',{
        title: 'fooBarMa',
        body: 'barfooDa',
        userId: 1,
    });
}

//Deleting resources 
const deleteData = ()=>{
    sampleData('delete', 'https://jsonplaceholder.typicode.com/posts/1',{
        title: 'fooBarMa',
        body: 'barfooDa',
        userId: 1,
    });
}
// deleteData();
// updateSingleData();
// updateData();
// sendData();
getData();

