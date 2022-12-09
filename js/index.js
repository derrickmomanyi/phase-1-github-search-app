let form = document.getElementById('github-form')  //get the form element
let search = document.getElementById('search')    //get the search element



    form.addEventListener('submit',(e) => {      //add a submit event listener
        e.preventDefault()                       //prevent refresh browser default behavior
        
        fetchUserDetails();                     
})

function fetchUserDetails() {
      fetch(`https://api.github.com/users/${search.value}`)      //fetch the user details and get the value
     .then((res) => res.json())                                  //convert data to JSON
     .then(data =>                  
        {
            if (data.message) {                                 //if no user details are found return this
                console.log("User details not found");
            }
            else {
                (displayUserDetails(data));                   //if user details are found display the user details
     }})
     
     
     
     
    }
    function displayUserDetails(data){
      let userList = document.getElementById('user-list')       //grab the container for displaying the details     
                                                                //display the user details in the container; avatar, username & repositories link
             userList.innerHTML = `                            
             <h3>Here is your Github User Profile</h3>               
             <img src="${data.avatar_url}">                 
            <p>Your Username is: ${data.login}</p> 
            <p> Hey ${data.login}, here are your repositories <a target="_blank" href="https://www.github.com/${search.value}?tab=repositories">Repositories</a>


       
        `

  }

    

