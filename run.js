//#=number output, $=character output, . =user input

const fs = require('fs');
//console.log(process.argv[0]);
var input = fs.readFileSync(process.argv[2], 'utf8');
//console.log(input);
// fs.readFile('/home/seanstoy/documents/some_weird_thing/somethin.yasil', 'utf8', function (err,data) {
//     if (err) {
//         return console.log(err);
//     }
//     console.log(data);
//     input = data;
// });

var map = input.split('\n');
const iters = parseInt(map.shift())
map.forEach((el, i, ar) => {
    ar[i] = el.match(/(\-.|.)/g);
});
//print(map);
map =  map.filter(e =>  e);
console.log(map);

function getSumOfSurroundings(map, x, y){
    var sum = 0;
    for(var i = -1; i <= 1; i++){
        if(map[x + i] == undefined) continue;
        for(var j = -1; j <= 1; j++){ //!try with/without including self
            if(map[x + i][y + j] == undefined) continue;
            if(i == 0 && j == 0) continue;
            if(!parseInt(map[x+i][y+j])) continue;
            sum += parseInt(map[x + i][y + j]);
        }
    }
    return sum;
}

function print(map){
    for(var i = 0; i < map.length; i++){
        var line = "";
        for(var j = 0; j < map[i].length; j++){
            line += `${map[i][j]}, `;
            //console.log(line);
        }
        console.log(line);
        console.log('-----------------------');
    }
}
//print(map);
for(var useless_variable = 0; useless_variable < iters; useless_variable++){
    var clone = []// = new Array(map.length).fill(new Array(map[0].length));
    for(var i = 0; i < map.length; i++){
        var line = [];
        for(var j = 0; j < map[i].length; j++){
            var surroundings = getSumOfSurroundings(map,i,j);
            var push = true;
            if(map[i][j] == '#') {
                if(surroundings != 0){
                    console.log(surroundings);
                }else{
                    push=false;
                    line.push('#');
                }
            }
            if(map[i][j] == '$'){
                if(surroundings != 0){
                    console.log(String.fromCharCode(surroundings));
                }else{
                    push=false;
                    line.push('$');
                }
            }
            if(map[i][j] == '.'){
                push = false;
                if(surroundings != 0){
                    const prompt = require('prompt-sync')();
                    var value = prompt('>');
                    if(parseInt(value)) line.push(parseInt(value));
                    else line.push(value.charCodeAt(0));
                    //console.log(`Hey there ${name}!`);
                    //readline.close();
                }else line.push('.');
            }
            if(push)line.push(surroundings);
        }
        //console.log(line);
        clone.push(line);
    }
    map = clone;
    // print(map);
    // console.log();
    // console.log();
    // console.log();
}
