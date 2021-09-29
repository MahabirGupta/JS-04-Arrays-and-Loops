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
let list1 = [Sofia, David, Juan,{
	position4: "Sara",
    position5: "Augustine",

}]
const Newqueue = list1[3]
console.log(Newqueue)

