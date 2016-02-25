function add()
 {
    	var rows = "";
	var usn= document.getElementById("usn").value;
        var stud_name = document.getElementById("stud_name").value;
	var sem = document.getElementById("sem").value;
	var email = document.getElementById("email").value;
	var yoa = document.getElementById("yoa").value;
        var branch = document.getElementById("branch").value;
        var clg = document.getElementById("clg").value;
	rows += "<td>" + usn + "</td><td>" + stud_name + "</td><td>" + email +"</td><td>" + sem + "</td><td>" + yoa + "</td><td>" + branch + "</td><td>" + clg + "</td><td><input type='button' value='delete' onclick='del(this)'></td>";
	var tbody = document.querySelector("#myTable tbody");
        var tr = document.createElement("tr");
	tr.innerHTML = rows;
        tbody.appendChild(tr);
	console.log("adding row to dom");
 }
function isNumber(evt) {
        var iKeyCode = (evt.which) ? evt.which : evt.keyCode
        if (iKeyCode != 46 && iKeyCode > 31 && (iKeyCode < 48 || iKeyCode > 57))
	{
	    alert("Enter only digits");
            return false;
	}
        return true;
    } 
function validateYOA(yoa)
{
   
    var pattern =/^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
   
if (pattern.test(yoa.value) == false)
{
       alert('Invalid Date of birth, format should be DD/MM/YYYY');
        return false;
    }
    
        return true;
    
}
function validateName(stud_name)
 {
	  var alphaExp = /^[a-zA-Z]+$/;
            if(alphaExp.test(stud_name.value) == false)
            {
               alert("Please enter only alphabets");
		return false;
            }
           return true;
}


 function validateEmail(email){
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

        if (reg.test(email.value) == false) 
        {
            alert('Invalid Email Address');
            return false;
        }

        return true;

}
function del(r)
{   
	var i=r.parentNode.parentNode.rowIndex;
 	document.getElementById("myTable").deleteRow(i);		
	console.log("deleting row from dom");
}

function validateForm() 
{
	console.log(stud_name.value);
  if ((usn.value === "") || (stud_name.value === "") ||(email.value === "")|| (sem.value === "") || (yoa.value === "") || (branch.value === "") || (clg.value === ""))
	{
	   window.alert("Please fill all the fields");    
	}
	else
	{
		console.log("calling add..");
		add();
	}
}


