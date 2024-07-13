
   var tablinks = document.getElementsByClassName("tab-links");
   var tabcontents = document.getElementsByClassName("tab-contents");
   
    function opentab(tabname){
                for(tablink of tablinks)             
                  {
                    tablink.classList.remove("active-link");
                  }

                 for(tabcontent of tabcontents)
                   {
                     tabcontent.classList.remove("active-tab");
                   }
                    event.currentTarget.classList.add("active-link");
                    document.getElementById(tabname).classList.add("active-tab");
                }
 
  const scriptURL = 'https://script.google.com/macros/s/AKfycbwEC2Yxjrp06E62hpJztsVOk3ujcnD8XGHeFLnihEn-vCQmIRAjV2-gRsdwczYnZY6CEg/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
                         msg.innerHTML= "Submitted Successfully"
                         setTimeout(function(){
                                    msg.innerHTML= ""
                               },2000)
                              form.reset()
                         })
      .catch(error => console.error('Error!', error.message))
  })

     
      let hey=prompt("Hello, Welcom to My Portfolio");
      console.log(hey); 

   var sidemenu = document.getElementById("sidemenu");

   function openmenu(){
        sidemenu.style.right="0";
    }
  function closemenu(){
        sidemenu.style.right="-200px";
    }