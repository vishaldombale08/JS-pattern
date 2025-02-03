function drawPattern(row, column){
    let pattern = "";
    for(let i=0; i<row; i++){
        for(let j=0; j<column; j++){
            if(i===j){
                pattern= pattern+"$ ";
            }
            else{
                pattern =  pattern+"* ";
            }
        }
        pattern = pattern + "\n";
    }
    console.log(pattern);
}

drawPattern(4,4);