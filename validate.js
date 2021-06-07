function validate(){
				var name=document.getElementById("name").value;
				var message=document.getElementById("message").value;;
				var email=document.getElementById("email").value;
				
				if(name==''){
					alert("NAME CANNOT BE EMPTY")
				}
				
				else if(email==''){
					alert("ENTER VALID EMAIL ID")
				}
				
				else if(message==''){
						alert("MESSAGE CANNOT BE EMPTY");
				}
						
				
			}