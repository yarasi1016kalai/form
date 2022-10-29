var submit=document.querySelector("#submit");
submit.addEventListener("click", function(){
    displaydetails(); 
});

function displaydetails()
{   var tablerow=1;
    var fname =document.querySelector("#first-name").value;
    var lname =document.querySelector("#last-name").value;
    var pincode =document.getElementById("pincode").value;
    var address =document.querySelector("#address").value;
    // radio
    let radio = document.querySelectorAll('input[name="gender"]:checked');
    let val = [];
    radio.forEach((gender) => {
        val.push(gender.value);
    });
    let gender=val;

    // checkbox
        let checkboxes = document.querySelectorAll('input[name="food"]:checked');
        let values = [];
        checkboxes.forEach((checkbox) => {
            values.push(checkbox.value);
        });
        let food=values;

    var state =document.querySelector("#state").value;
    var country =document.querySelector("#country").value;

    if (values.length<2)
          {
              alert("You must choose atleast 2 favourite food out of 5 option");
              return; }

    else if(!fname || !lname || !pincode || !address || !gender || !food || !state || !country)
    {  
         alert("MANDATORY TO FILL ALL THE BOXES");
         return  }
          
     var tablebody = document.querySelector("#table-body");

     var tablerow =
      `<tr>
       <td>${fname}</td>
       <td>${lname}</td>
       <td>${pincode}</td>
       <td>${address}</td>
       <td>${gender}</td>
       <td>${food}</td>
       <td>${state}</td>
       <td>${country}</td>
       </tr>`

       tablebody.innerHTML +=tablerow; 
       document.getElementById("form").reset();
  }