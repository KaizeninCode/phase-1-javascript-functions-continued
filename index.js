// code your solution here
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
}
saturdayFun('bathe my dog')
const mondayWork = function(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`
}
mondayWork()

function wrapAdjective(string1 = '*') {
    return function (string2 = special) {
        return `You are ${string1}${string2}${string1}!`
    }
}
