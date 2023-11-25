var character = document.getElementById("dog");
var block = document.getElementById("block");
var counter = 0;

    

function jump() {
    var jumpSound = document.getElementById("jumpsound");
    jumpSound.currentTime = 0;
    jumpSound.play();
    
    character.classList.add("animate");
    let startTime;

    function animateJump(timestamp) {
        if (!startTime) {
            startTime = timestamp;
        }

        const progress = timestamp - startTime;
        

        if (progress < 400) {
            requestAnimationFrame(animateJump);
        } else {
            character.classList.remove("animate");
        }
    }

    requestAnimationFrame(animateJump);
    
}
var checkDead = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    let blockBottom = parseInt(window.getComputedStyle(block).getPropertyValue("top")) + 50; // Assuming block height is 50px

    if (blockLeft < 220 && blockLeft > 95 && characterTop >= 0 && characterTop <= blockBottom) {
        block.style.animation = "none";
        var die = document.getElementById("die");
        die.play()
        
        
        counter = 0;
        block.style.animation = "block 3s infinite linear";
        location.href = "./fourthpage.html"
    } else {
        counter++;
        localStorage.setItem("scoreSpan", counter);
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter / 100);
    }
}, 30.5);

