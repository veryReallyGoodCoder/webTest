var myBox = document.querySelectorAll('.myBox', 'myBox1');

function disappearAndReappear() {

    myBox.forEach(function(box) {
        box.style.display = 'none';

        setTimeout(function(){
            box.style.display = 'block';

            setTimeout(function(){
                box.style.display = 'none';

                setTimeout(function(){  
                    box.style.display = 'block';
                }, 3000);

            }, 3000);

        }, 3000);
    });
}

// Use setInterval to repeat the process continuously
setInterval(disappearAndReappear, 6000); // 9500 milliseconds to account for the total time taken by the process

// Call the function to start the process initially
disappearAndReappear();