
//Ajax- Asynchronous JavaScript and XML 

console.clear()

const Request = (url,method,data)=>{
   try{
        const result = $.ajax({
            url:url,
            method:method,
            data:data,
        })
        return result;
   }catch(err){
        console.log(err)
   }
}

//getting resources 
const getData = ()=>{
    Request("https://jsonplaceholder.typicode.com/posts/1","GET").then((res)=>{console.log(res)}).catch((err) => {
        console.log("404 not found!")
    })
}
//creating resources
const sendData = ()=>{
    Request("https://jsonplaceholder.typicode.com/posts/","POST",{
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
          }),

    }).then((res)=>{console.log(res)}).catch((err) => {
        console.log("404 not found!")
    })
}

//update resources 
const updateData = ()=>{
    Request("https://jsonplaceholder.typicode.com/posts/1","PUT",{
        body: JSON.stringify({
            title: 'fooma',
            body: 'barda',
            userId: 1,
          }),

    }).then((res)=>{console.log(res)}).catch((err) => {
        console.log("404 not found!")
    })
}

//patching resources 
const patchData = ()=>{
    Request("https://jsonplaceholder.typicode.com/posts/1","PATCH",{
        body: JSON.stringify({
            id:1,
            title: 'fooma',
            body: 'barma',
            userId: 1,
          }),

    }).then((res)=>{console.log(res)}).catch((err) => {
        console.log("404 not found!")
    })
}


const deleteData = ()=>{
    Request("https://jsonplaceholder.typicode.com/posts/1","DELETE",{
        body: JSON.stringify({
            id:1,
            title: 'fooma',
            body: 'barma',
            userId: 1,
          }),

    }).then((res)=>{console.log(res)}).catch((err) => {
        console.log("404 not found!")
    })
}
deleteData();

// patchData();
// updateData ();
// sendData();
// getData();