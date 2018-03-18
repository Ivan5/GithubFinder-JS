//instatiate
const github = new GitHub();
//Init ui class
const ui = new UI();
//Search input
const searchUser = document.getElementById('searchUser');

//search input event listener
searchUser.addEventListener('keyup',(e)=>{
  //Get input text
  const userText = e.target.value;
  if(userText !== ''){
   //make http call
   github.getUser(userText)
   .then(data =>{
     if(data.profile.message === 'Not Found'){
        //Show alert
     }else{
        //Show profile
        ui.showProfile(data.profile);
     }
   })
  }else{
    //Clear profile
  }
});