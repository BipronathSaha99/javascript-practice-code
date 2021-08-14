//document.querySelector() 
//The querySelector() is a method of the Element interface.
//The querySelector() allows to find the first element that matches one or more CSS selectors 

var headOne = document.querySelector("#heading1");
headOne.innerHTML = "Hello Bipronath"

var paraOne = document.querySelector("#para1");
paraOne.innerHTML = "Lorem in et Lorem enim consectetur exercitation ex tempor anim excepteur anim mollit consequat quis. In qui aliqua ad nisi enim velit deserunt fugiat nostrud est minim cupidatat. Aute dolore eu magna enim ex voluptate occaecat laborum pariatur. Culpa minim voluptate est mollit incididunt cillum proident ullamco eiusmod non ipsum est. Non irure sint commodo amet esse consectetur enim ea aliquip laborum ex. Sunt consequat non nulla ex veniam dolore proident nostrud id commodo ex id. Commodo adipisicing exercitation consequat pariatur qui ad quis dolore amet. Sunt non ipsum ad sint mollit eu cupidatat aliquip anim laboris do incididunt quis. Cillum exercitation Lorem adipisicing proident. Commodo ipsum eu do ipsum mollit deserunt Lorem laboris enim qui. Lorem et elit aliquip enim. Culpa anim laboris amet quis ipsum incididunt commodo non deserunt enim. Elit reprehenderit aliqua consectetur consequat commodo incididunt consectetur aliquip culpa sit veniam elit culpa.";

var demoPara = document.querySelector("#demo");
demoPara. innerHTML = "Lorem ipsum ammet dollar. lorem in et lorem enim consectetur exercitation ex tempor anim mollt consequant quis";

var demoParaOne =document.querySelector(".demoPara");
demoParaOne. innerHTML = "Sint voluptate exercitation incididunt labore elit nisi irure sunt cupidatat cillum ullamco irure ex. Nulla Lorem et sint laboris cupidatat amet consequat laboris sint ut mollit. Sint esse mollit aute eiusmod laborum anim quis sunt nostrud. Aliquip labore ullamco nostrud sunt laborum adipisicing elit. Est nulla nostrud consequat voluptate ullamco. Deserunt tempor Lorem aliqua culpa commodo tempor non officia nulla. Ullamco ex mollit occaecat tempor consequat pariatur elit sint nisi. Tempor culpa do deserunt incididunt deserunt sint. Cupidatat voluptate non sit exercitation labore deserunt magna duis laboris voluptate adipisicing adipisicing non. Ex mollit et anim nulla anim cupidatat elit aliqua ad duis nostrud quis cupidatat pariatur.";

document.querySelector("a"). innerHTML = "Contact"
//last  a selection
// document.querySelector("div a"). innerHTML = "Social Link";
document.querySelector(".my-div a"). innerHTML ="Social link";

//document.querySelectorAll()
document.querySelectorAll("p")[3] .innerHTML = "This is a text"
document.querySelectorAll("p")[4] .innerHTML = "lorem ipsum ammet dollar. lorem in et enim consectetur ex";
