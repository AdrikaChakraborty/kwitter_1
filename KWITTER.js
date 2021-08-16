function addUser()
{
    user_name=document.getElementById("username").value;
    localStorage.setItem("username", username);
    window.location="KWITTER_ROOM.html";
}

