// https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript

function solution(string) {
    const stringArr = string.split("")
    let newArr = []
    let modArr = stringArr.map((e, i) => {
        if (isUpperCase(e)) {
            if (i !== 0) {
                newArr.push(" ")
            }
        }

        newArr.push(e)
    })

    return newArr.join("")
}

const isUpperCase = (char) => {
    if (char !== char.toUpperCase()) {
        return false
    }

    return true
}