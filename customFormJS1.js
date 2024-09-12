

const parentDivContent=document.getElementById('parentDiv');
const form = document.getElementById('customForm');
const childElementExists = document.getElementById("childDiv");
console.log(childElementExists);
console.log(window.opener);
console.log(window.opener.opener);
console.log(parentDivContent);
if(window.opener){
  // Open a new child pop-upwindow
	 window.onload = function() {
     window.childPopup = window.open('', '_blank', 'width=700,height=700');
	 childPopup.document.write('<html>' + document.documentElement.innerHTML +'</html>');
	 //console.log(parentDivContent.innerHTML);
	 childPopup.document.close();
    };
	console.log("Child pop-up opened");  
  // Close the current tab (optional, to keep only the popup)
  
}

else{
	console.log("This is Child pop-up executing")
	form.addEventListener("submit", onFormSubmit);
}


function onFormSubmit(event) {
	 
	 event.preventDefault();
	 
	 const data = document.getElementById('tmpID_Selection').value;
	 console.log(data);
	 
	 const MAXagtCommentLabel=document.getElementById("MAXagtCommentLabel");
	 const MAXagtComment=document.getElementById("MAXagtComment");
	 const SubmitButton=document.getElementById("SubmitButton");
	 
	 //MAXagtComment.value="";
	 SubmitButton.innerText="Submitted";
	 SubmitButton.style.backgroundColor="Green";
	 SubmitButton.style.color="White";
	 SubmitButton.type="Button";
	 MAXagtCommentLabel.innerText="ID Process comment for next Consultant"
	 MAXagtComment.readOnly=true;
	
	 //alert("The form has been submitted");
	 console.log("Form Submitted");
	 event.preventDefault();

		 console.log("CHILD FORM SUBMITTED");
		 //window.close();
		 
		 // Ensure that Page 2 is still open and accessible
      if (window.opener.opener && !window.opener.opener.closed) {
        // Call a function in Page 2 to submit the form with the data from Page 3
        window.opener.opener.submitPage2Form(data);

        // Optionally close the pop-up after submission
        window.close();
      }
	 
	 
}


    // Function to submit the form on Page 2
    function submitPage2Form(data) {
      // Set the data from Page 3 into the input field on Page 2
      document.getElementById('tmpID_Selection').value = data;

      // Submit Page 2 form
      document.getElementById('SubmitForm').submit();
    }
	
	
	
	  function submitToPage2() {
      // Get the data from the input field on Page 3
      const data = document.getElementById('page3Input').value;

      // Ensure that Page 2 is still open and accessible
      if (window.opener && !window.opener.closed) {
        // Call a function in Page 2 to submit the form with the data from Page 3
        window.opener.submitPage2Form(data);

        // Optionally close the pop-up after submission
        window.close();
      }
    }
