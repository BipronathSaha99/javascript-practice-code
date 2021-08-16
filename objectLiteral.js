

//Object Literal

function PersonInfo(name,age){
    return{
        name,
        age
    }
}
console.log(PersonInfo("Bipronath Saha",22))


let message = {
    name:'Bipronath',
    sms : function () {
        return (`${this.name} is in his online class. He can do it later`)
    }
}; console.log(message.sms())

//concise method syntax
let server = {
    name: 'fb server',
    'message body'(){
        return (`${this.name} is under maintainece`)
    }
}; console.log(server['message body']())



