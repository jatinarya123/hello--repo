const area = {
    breath : 10,
    height : 5
}

function traingel(area){
    let are = 0.5 * area.breath * area.height;
    return are;
}

console.log(traingel(area));