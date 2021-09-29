const Sofia = {
    position1: "Sofia",
}

const David = {
    position2: "David",
}

const Juan = {
    position3: "Juan",

}

let list = [Sofia, David, Juan];
for (let i = 0; i < list.length; i++) {
    console.log(list[i])
}
let list1 = [Sofia, David, {
    position3: "Renata",
    position4: "Juan",
    position5: "Sara",
    position6: "Augustine",
    position7: "Elena",

}]
const Newqueue = list1[2]
console.log(Newqueue)

