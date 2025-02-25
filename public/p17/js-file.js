document.getElementById('cutRibbon').onclick = function() {
    const rib = document.querySelector(".ribbon-container");
    rib.style.width = "0";
    document.getElementById('ribbon').style.display = 'none';  
    document.getElementById('cakeContainer').classList.remove('hidden');  

    document.getElementById('bgMusic').play();
};

function extinguishCandle(candleNumber) {
    let flame = document.getElementById('flame' + candleNumber);
    flame.style.backgroundColor = 'gray';  
    flame.style.height = '5px';  

    checkCandlesExtinguished();
}

function checkCandlesExtinguished() {
    let flames = document.querySelectorAll('.flame');
    let allExtinguished = true;

    flames.forEach(function(flame) {
        if (flame.style.backgroundColor !== 'gray') {
            allExtinguished = false;
        }
    });

    if (allExtinguished) {
        document.getElementById('cakeContainer').classList.add('hidden');
        setTimeout(function() {
            document.getElementById('birthdayMessage').classList.remove('hidden');
        }, 500);  
    }
}
