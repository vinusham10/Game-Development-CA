

const play = document.getElementById("startbutton")

play.onclick = (e) => {
    e.preventDefault();
    const nameval= document.getElementById("Username").value;
    const namevalue = document.getElementById("name").value;
    if (nameval.length > 0 && namevalue.length > 0) {
    
    var Username = document.getElementById("Username").value;
    localStorage.setItem("username", Username);
    location.href = "secondpage.html";
    } 
    else {
        alert("Please make sure that your name and username is entered.");   
    }
};


