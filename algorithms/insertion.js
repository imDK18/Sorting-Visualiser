async function insertion(){
    const ele = document.querySelectorAll(".bar");

    ele[0].style.background = 'green';
    for(let i = 1; i < ele.length; i++){
        let j = i - 1;
        let key = ele[i].style.height;
        ele[i].style.background = 'blue';

        await wait(delay);

        while(j >= 0 && (parseInt(ele[j].style.height) > parseInt(key))){
            ele[j].style.background = 'blue';
            ele[j + 1].style.height = ele[j].style.height;
            j--;

            await wait(delay);

            for(let k = i; k >= j+1; k--){
                ele[k].style.background = 'green';
            }
        }
        ele[j + 1].style.height = key;
        ele[i].style.background = 'green';
    }
}

const InsertionSortbtn = document.querySelector(".insertionSort");
InsertionSortbtn.addEventListener('click', async function(){
    disableEverything();
    await insertion();
    enableEverything();
});


