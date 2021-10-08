console.clear();
//very easy to use
// it supports all modern browser including IE
//it returns promise
//it  throws error brilliantly
//No need to set header cause axios is intelligent

// console.log(window)

//Get request 
/*
axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res=>console.log(res.data))
    .catch((err) => {
        console.log(err)
    })
*/
 //Post request
 /*
 axios
    .post('https://jsonplaceholder.typicode.com/posts',{
        body: JSON.stringify({
            title: "foo",
            body: "bar",
            userId: 1,
     }),
 })
    .then(res=>console.log(res.data))
    .catch((err) => {
        console.log(err)
    })

*/

//put method 
/*
axios
    .put('https://jsonplaceholder.typicode.com/posts/1',{
        body: JSON.stringify({
        title: "fooMa",
        body: "barMAFoo",
        userId: 1,
 }),
})
    .then(res=>console.log(res.data))
    .catch((err) => {
    console.log(err)
})
*/

//patch method 
/*
axios
    .patch('https://jsonplaceholder.typicode.com/posts/1',{
        body: JSON.stringify({
            
            body: "barma",
            
 }),
})
    .then(res=>console.log(res.data))
    .catch((err) => {
    console.log(err)
})
*/

//delete method
/*
axios
    .delete('https://jsonplaceholder.typicode.com/posts/1',{
        body: JSON.stringify({
        title: "fooMa",
        body: "barMAFoo",
        userId: 1,
 }),
})
    .then(res=>console.log(res.data))
    .catch((err) => {
    console.log(err)
})
*/

// using async await
const makeData = async (config)=>{
    return await axios(config);
};

//get resources
/*
const getData = ()=>{
    makeData("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
            console.log(response.data)
        }).catch((err) => {
            console.log(err)
        })
}
*/

//create resources
const createData = ()=>{
    makeData({
        url: "https://jsonplaceholder.typicode.com/posts",
        method: 'POST',
        data: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
    })
        .then((response) => {
            console.log(response.data)
        }).catch((err) => {
            console.log(err)
        })
}

//update resource 
const updateData = ()=>{
    makeData({
        url: "https://jsonplaceholder.typicode.com/posts/1",
        method: 'PUT',
        data: JSON.stringify({
            title : "fooma",
            body: "barba",
            userId: 1,
        }),
    })
    .then(response=>console.log(response.data))
    .catch(err=>console.log(err))
}

//patching resource 
const patchData = ()=>{
    makeData({
        url: "https://jsonplaceholder.typicode.com/posts/1",
        method: 'PATCH',
        data: JSON.stringify({
            title : "fooma",
        }),
    })
    .then(response=>console.log(response.data))
    .catch(err=>console.log(err))
}

//delete resource 
const deleteData = ()=>{
    makeData({
        url: "https://jsonplaceholder.typicode.com/posts/1",
        method: 'DELETE',
        data: JSON.stringify({
            title : "fooma",
            body: "barba",
            userId: 1,
        }),
    })
    .then(response=>console.log(response.data))
    .catch(err=>console.log(err))
}
deleteData();
// patchData();
// updateData();
// createData();
// getData();







// axios({
//     method: 'get',
//     url: 'https://jsonplaceholder.typicode.com/posts/1'
    
// })
//     .then((response) => {
//         console.log(response)
//     })