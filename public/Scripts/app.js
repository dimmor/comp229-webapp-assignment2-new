///*Java Script file - Dmitriy Morozov - 301098501 - 24/10/2020*/
//IIFE - Immediately Invoked Function Expression

(function(){

    function Start()
    {
        console.log("App Started...");

        //confirmation delete function
        let deleteButtons = document.querySelectorAll('.btn-danger');
        
        for(button of deleteButtons)
        {
            button.addEventListener('click', (event) => {
                if(!confirm("Are you sure?")) 
                {
                    event.preventDefault();
                    window.location.assign('/book-list');
                }
            });
        }
    }
    window.addEventListener("load", Start);
});