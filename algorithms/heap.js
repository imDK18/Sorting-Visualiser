async function heapify(ele, n, i){
    let largest = i;
    let left= 2*i+1;
    let right= 2*i+2;
    
    ele[largest].style.background = 'red';
    if(left < n){
        ele[left].style.background = 'blue';
        await wait(delay);
        ele[left].style.background = 'cyan';
    }
    if(left < n && parseInt(ele[largest].style.height) < parseInt(ele[left].style.height) ) largest= left;

    if(right < n){
        ele[right].style.background = 'blue';
        await wait(delay);
        ele[right].style.background = 'cyan';
    }
    if(right < n && parseInt(ele[largest].style.height) < parseInt(ele[right].style.height) ) largest= right;

    if (largest != i) {
        swap(ele[largest], ele[i]);
        ele[i].style.background = 'red';
        ele[largest].style.background = 'blue';

        await wait(delay);

        ele[i].style.background = 'cyan';
        ele[largest].style.background = 'cyan';

        await heapify(ele, n, largest);
    }
    else ele[i].style.background = 'cyan'; 
}

async function heapSort(ele, n){
    // build max heap
    for(let i= Math.floor(n/2)-1; i>=0; i--){
        await heapify(ele, n, i);
    }

    for (let i=n-1 ; i>=0 ; i--) {
        ele[0].style.background = 'orange';
        ele[i].style.background = 'yellow';
        await wait(delay);

        swap(ele[i],ele[0]);
        ele[i].style.background = 'green';

        await heapify(ele, i, 0);
    }
    ele[0].style.background = 'green';
} 

const heapSortbtn = document.querySelector('.heapSort');
heapSortbtn.addEventListener('click', async function(){
    let ele = document.querySelectorAll('.bar');
    let n = parseInt(ele.length);
    disableEverything();
    await heapSort(ele, n);
    enableEverything();
});

