let focused_cell=null;
let which_cell_id= document.getElementById("which_cell");
let form = document.getElementById("form");
form.addEventListener("change", what_changeIn_form) ;
let state={};


let default_styles={
    fontFamily:"poppins-regular",
    fontSize:16,
    bold: false,
    italic: false,
    underline: false,
    align: "left",
    textColor: "#000000",
    bgColor: "#ffffff",
    text:""
}

function onFocusing_cell(event){

    focused_cell =event.target.id;
    which_cell_id.innerText=focused_cell;
    // console.log(focused_cell);

    if(state[focused_cell]){
        
        resetForm(state[focused_cell]);
    }
    else{
        
        resetForm(default_styles);
    }

}

function resetForm(stylee){

    form.fontSize.value= stylee.fontSize;
    form.fontFamily.value= stylee.fontFamily;
    form.bold.checked= stylee.bold;
    form.italic.checked= stylee.italic;
    form.underline.checked= stylee.underline;
    form.align.value= stylee.align;
    form.textColor.value= stylee.textColor;
    form.bgColor.value= stylee.bgColor;

}
function when_typing_in_cell(event){
    let changedText= event.target.innerText;
    if(state[focused_cell]){
        state[focused_cell].text=changedText;
    }
    else{
        state[focused_cell]={...default_styles, text:event.target.innerText};

    }
    // console.log(state);
}







function what_changeIn_form(){
    
    let changes_in_form= {
        fontFamily: form.fontFamily.value,
        fontSize: form.fontSize.value,
        bold: form.bold.checked,
        italic: form.italic.checked,
        underline: form.underline.checked,
        align: form.align.value,
        textColor: form.textColor.value,
        bgColor: form.bgColor.value
    };
    applyStyle(changes_in_form);
}



function applyStyle(style_to_apply){

    if(!focused_cell){
        form.reset();
        alert("Please select a cell first");
        return;
    }

    let apply_to_this_cell= document.getElementById(focused_cell);
    // apply_to_this_cell.style.border="none";
    apply_to_this_cell.style.boxShadow= "1px 1px 10px gray";

    apply_to_this_cell.style.color= style_to_apply.textColor;
    apply_to_this_cell.style.backgroundColor= style_to_apply.bgColor;
    apply_to_this_cell.style.textAlign= style_to_apply.align;
    apply_to_this_cell.style.textDecoration= style_to_apply.underline?"underline":"none";
    apply_to_this_cell.style.fontStyle= style_to_apply.italic?"italic":"normal";
    apply_to_this_cell.style.fontWeight= style_to_apply.bold?"600":"400";
    apply_to_this_cell.style.fontSize= style_to_apply.fontSize +"px";
    apply_to_this_cell.style.fontFamily= style_to_apply.fontFamily;

    // console.log(apply_to_this_cell);
    state[focused_cell]={...style_to_apply,text:apply_to_this_cell.innerText};
    // console.log(state); 
}




function downloadJSON_data(){
    let json_data= JSON.stringify(state);
    // console.log(json_data);

    let blob = new Blob([json_data], {type: "text/plain"});

    let url= URL.createObjectURL(blob);
    let link= document.createElement("a");
    link.href = url;
    link.download= "data.json";
    link.click();

}
