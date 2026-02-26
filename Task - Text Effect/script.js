var btn = document.querySelector('button');

// p1
btn.addEventListener('click', function(){
    const p1 = document.querySelector('#p1');
    var charaters1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    var text1 = p1.innerText;

    let iteration1 = 0;
    function randomText1(){
        const str = text1.split("").map(function (char, index){
            if(index < iteration1){
                return char;
            }
            return charaters1.split("")[Math.floor(Math.random()*52)];
        }).join(""); 
        p1.innerHTML = str;
        
        iteration1 += 0.2;
    }
    const setInt1 = setInterval(randomText1, 50);

    setTimeout(() => {
        clearInterval(setInt1);
    }, 7000);
});


// p2
btn.addEventListener('click', function(){
    const p2 = document.querySelector('#p2');
    var text2 = p2.innerText;

    let iteration2 = 0;
    function randomText2(){
        const str2 = text2.split("").map(function (char, index){
            if(index <= iteration2){
                return char;
            }
            return "";
        }).join(""); 
        p2.innerHTML = str2;

        iteration2 += 0.2;
    }
    const setInt2 = setInterval(randomText2, 40);

    setTimeout(() => {
        clearInterval(setInt2);
    }, 7000);
});

// p3
btn.addEventListener('click', function(){
    const p3 = document.querySelector('#p3');
    var text3 = p3.innerText;
    
    let iteration3 = 0;
    function randomText3() {
        const shown = text3.slice(0, Math.floor(iteration3)); 
        const next = Math.floor(iteration3) < text3.length ? "|" : ""; 
        const str3 = shown + next;
        p3.innerHTML = str3;
        
        iteration3 += 0.2;
    }
    const setInt3 = setInterval(randomText3, 40);

    setTimeout(() => {
        clearInterval(setInt3);
    }, 7000);
});


// p4
btn.addEventListener('click', function(){
    const p4 = document.querySelector('#p4');
    var charaters4 = "01";
    var text4 = p4.innerText;
    
    let iteration4 = 0;
    function randomText4(){
        const str4 = text4.split("").map(function (char, index){
            if(index < iteration4){
                return char;
            }
            return charaters4.split("")[Math.floor(Math.random()*charaters4.length)];
        }).join(""); 
        p4.innerHTML = str4;
        
        iteration4 += 0.2;
    }
    const setInt4 = setInterval(randomText4, 50);

    setTimeout(() => {
        clearInterval(setInt4);
    }, 7000);
    
});