const cols= 26;
const rows = 50;


let header =document.getElementById("header");
for(let i=1;i<=cols;i++){
    let header_cell= document.createElement("div");
    header_cell.className="head-cell";
    header_cell.innerText= String.fromCharCode(64+ i);
    header.appendChild(header_cell);
}


let sno= document.getElementById("sno");
for(let i=1;i<=rows;i++){
    let sno_cell=document.createElement("div");
    sno_cell.className="sno-cell";
    sno_cell.innerText=i;
    sno.appendChild(sno_cell);
}



let body_container= document.getElementById("body_container");

for(let i=1;i<=rows;i++){
    let rows= document.createElement("div");
    rows.className="row";
    for(let j=1;j<=cols;j++){
        let cells= document.createElement("div");
        cells.className="cell";
        cells.id=`${String.fromCharCode(64 + j)}${i}`;
        cells.contentEditable="true";
        rows.appendChild(cells);
        cells.addEventListener("focus", onFocusing_cell);
        cells.addEventListener("input", when_typing_in_cell);
        cells.style.display="inline-block";
        cells.addEventListener("keydown" , (e)=>{
            if(e.keyCode===13){
                // alert("enter pressed");
                cells.style.boxShadow= "none";
                cells.blur();

            }
        })
    }
    body_container.appendChild(rows);
}








// let namee=prompt("enter ur name");
// function name(namee){
//     console.log(`${namee} ur so smart bhai`);
//     console.log(`${namee} ur so handsome bhai`);
//     console.log(`${namee} ur so genius bhai`);
//     console.log(`${namee} ur so young bhai`);
// }
// name(namee);