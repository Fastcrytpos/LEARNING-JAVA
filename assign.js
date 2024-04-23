
let inventory=[
    ab="happy",
    ac="angry",
    ad="cool",
    ae="nice",
    af=[
        afa="two",
        afb="three",
]
]

function serchfunction(item2){
    for(let j=0;j<inventory.length;j++){
        if (inventory[j]===item2){
                      return console.log(inventory[j]);
//        console.log(inventory[j]);
}}}

serchfunction(af)