


const count= document.querySelector('.count');
const buttons=document.querySelector('.buttons');





buttons.addEventListener("click", (e) => {
    if(e.target.classList.contains("add")){
        count.innerHTML++;
        setColor();
    }
    if(e.target.classList.contains("substract")){
        count.innerHTML--;
        setColor();
    }

    if(e.target.classList.contains("reset")){
        count.innerHTML=0;
        setColor();

}
}
    );

    function setColor(){
        if(count.innerHTML>0){
            count.getElementsByClassName.color="yellow";
        }
        else if (count.innerHTML <0){
            count.getElementsByClassName.color="orange";
        }
            else {
                count.getElementsByClassName.color="#fff";
            }
    }
