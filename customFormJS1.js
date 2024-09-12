if (window.opener === null) {
  // Open a new window with specific size and settings (this is the popup)
  const newWindow = window.open(window.location.href, 'popupWindow', 'width=800,height=600');
  
  // Close the current tab (optional, to keep only the popup)
  
}


const form = document.getElementById("customForm");
form.addEventListener("submit", onFormSubmit);
	
function onFormSubmit(event) {
	 event.preventDefault();
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
	 event.preventDefault();
	 window.close();
}
