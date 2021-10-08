//fetch api

console.clear()

//Getting a resource

// fetch('https://jsonplaceholder.typicode.com/posts/101')
//     .then((response) =>{
//         if(!res.ok){
//             const message = `Error: ${res.status}`
//             throw new Error(message)
//         }
//         return response.json()
//     })
//     .then((json) => console.log(json))
//     .catch((err) => console.log(err.message))

//creating resources 
// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify({
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json))
//   .catch((err) => console.log(err.message))


//updating resources 
/*


fetch('https://jsonplaceholder.typicode.com/posts/101', {
    method: 'PUT',
    body: JSON.stringify({
        title: 'fooBar',
        body: 'barMa',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
  .then((response) => {
    if(!response.ok){
        const message = `Error ${response.status}`;
        throw new Error("404 not found")
    }
    response.json()
  })
  .then((json) => console.log(json))
  .catch((err) => console.log(err.message))
*/

//patching resources
/*
fetch('https://jsonplaceholder.typicode.com/posts/101', {
    method: 'PATCH',
    body: JSON.stringify({
        title: 'fooBar',
        body: 'barMa',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((err) => console.log(err.message))

*/

//deleting resources
/*
fetch('https://jsonplaceholder.typicode.com/posts/101', {
    method: 'DELETE',
    body: JSON.stringify({
        title: 'fooBar',
        body: 'barMa',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((err) => console.log(err.message))
*/

//fetch api using async await


/**
 * fetch() has replaced XMLHttpRequest
 * fetch()- golbal method for making HTTP request
 * 2 ways to call fetch(): (i) then and (ii) async await
 * 
 * fetch() is easy to use compare to XMLHttoRequest
 * fetch() returns promise 
 * fetch() returns promise can only handle network error
 * fetch() doesn't support the oldest browser
 */

const makeData = async (url,config) =>{
    const response = await fetch(url,config);
    if(!response.ok){
        const messaage = `Error: ${response.statusText}`;
        throw new Error("404 not found!")
    }
    const data = await response.json();
    return data; 
}

//deleting resources 
const deleteData = ()=>{
    makeData('https://jsonplaceholder.typicode.com/posts/1',{
        method: 'DELETE',
        body: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response)=>console.log(response))
        .catch((err)=>console.log(err.message));
}


//Patching resources
const updatingSingleData = ()=>{
    makeData('https://jsonplaceholder.typicode.com/posts/1',{
        method: 'PATCH',
        body: JSON.stringify({
          title: 'foobar',
          body: 'barMA',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response)=>console.log(response))
        .catch((err)=>console.log(err.message));
}


//updating resources 
const updateData = ()=>{
    makeData('https://jsonplaceholder.typicode.com/posts/1',{
        method: 'PUT',
        body: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response)=>console.log(response))
        .catch((err)=>console.log(err.message));
}


//creating resources 
const sendData = ()=>{
    makeData('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        body: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response)=>console.log(response))
        .catch((err)=>console.log(err.message));
}

//getting resources 
const getData = ()=>{
    makeData('https://jsonplaceholder.typicode.com/posts')
        .then((response)=>console.log(response))
        .catch((err)=>console.log(err.message))
}
deleteData();
// updatingSingleData();
// updateData();
// sendData();
// getData();