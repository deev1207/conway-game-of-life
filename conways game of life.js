// flow of creating the game:
// 1.create 2d Array,fill it randomly with 0,1
// 2. create Canvas
// 3.if element is alive color white, if dead leave it as it is , since background is black
// 4.create new array to store next state of each element
// 5. use rules to find next state, ie if cell is alive and no of neighbors<2 or > 3, then it dispatchEvent, else it is alive
// 6. if cell is dead and neighbors==3,it becomes alive
// 7. make grid=next,so that grid with new states is passed to function

function make2darray(rows,cols){
    let arr=new Array(rows);
    for(let i=0;i<arr.length;i++){
        arr[i]=new Array(cols);
    }
    return arr;
}

let grid;
let cols;
let rows;
let count;
let resolution=20;
function setup(){
    createCanvas(600,400);
    rows=height/resolution;
    cols=width/resolution;
    grid=make2darray(rows,cols);
    for(let i=0;i<rows;i++){
        for(let j=0;j<cols;j++){
            grid[i][j]=floor(random(2));
        }
    }
}

function draw(){
    background(0);
  
    for(let i=0;i<rows;i++){
        for(let j=0;j<cols;j++){
            let x=i*resolution;
            let y=j*resolution;
            if(grid[i][j]==1){
                fill(255);
                rect(x,y,resolution,resolution);
             } 
               
        }
    }

    let next=make2darray(rows,cols);
    for(let i=0;i<rows;i++){
        for(let j=0;j<cols;j++){
            count=0;
            if(i-1>=0){
                if(j-1>=0){
                    if(grid[i-1][j-1]==1){
                        count++;
                    }
                }
                if(grid[i-1][j]==1){
                    count++;
                }
                if(j+1<cols){
                    if(grid[i-1][j+1]==1){
                        count++;
                    }
                }
                
            }
            if(j-1>=0){
                if(grid[i][j-1]==1){
                    count++;
                }
            }
            if(j+1<cols){
                if(grid[i][j+1]==1){
                    count++;
                }
            }

            if(i+1<rows){
                if(j-1>=0){
                    if(grid[i+1][j-1]==1){
                        count++;
                    }
                }
                if(grid[i+1][j]==1){
                    count++;
                }
                if(j+1<cols){
                    if(grid[i+1][j+1]==1){
                        count++;
                    }
                }
                
            }
            if(grid[i][j]==1){
                if(count<2){
                    next[i][j]=0;
                }
                else if(count<=3){
                    next[i][j]=1;
                }
                else {
                    next[i][j]=0;
                }
            }
            else{
                if(count==3){
                    next[i][j]=1;
                }
            }
        }
    }
            
           
    grid=next;
    
}
