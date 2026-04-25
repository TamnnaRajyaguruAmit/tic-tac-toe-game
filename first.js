let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector("#reset");
let newButton =document.querySelector("#newButton");
let para = document.querySelector("#msg");
let msgContainer = document.querySelector(".msgContainer");
let count = 0 ;   
let turnO = true;
const winningPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
let  enableBoxes = () =>
{
    for(let box of boxes)
    {
        box.disabled = false;
        box.innerText="";
    }
}
const resetGame =()=>{
   turnO=true;
   enableBoxes();
   msgContainer.classList.add("hide");
}
boxes.forEach((box) =>
{
    box.addEventListener("click",()=>
    {
          if(turnO)
        {
            box.innerText ="O";
            box.classList.add("o");
            turnO=false;
        }
        else{
            box.innerText ="X";
            box.classList.add("x");
            turnO= true;
        }
        box.disabled = true;
        checkWinner();
    });
});
const disableBoxes = ()=>
{
    for(let box of boxes)
    {
        box.disabled=true;
    }
}
const shoWinner = (Winner) =>
{
    para.innerText=`Congratulations!! Winner is ${Winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
let checkWinner =  ()=>
{
    for(let patterns of winningPatterns)
    {
    // {console.log(patterns[0],patterns[1],patterns[2])
    //     console.log(boxes[patterns[0]].innerText,boxes[patterns[1]].innerText,boxes[patterns[2]].innerText)
    let posVal1=boxes[patterns[0]].innerText;
    let posVal2=boxes[patterns[1]].innerText;
    let posVal3=boxes[patterns[2]].innerText;
    if(posVal1!=""&&posVal2!=""&&posVal3!="")
        {
    if (posVal1==posVal2&&posVal2==posVal3)
    {
        shoWinner(posVal1);
    }
         }
      }
}
newButton.addEventListener("click", resetGame);
resetButton.addEventListener("click",resetGame);