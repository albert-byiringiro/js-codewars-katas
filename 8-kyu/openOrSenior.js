function openOrSenior(data) {
    let member = [];
    data.forEach((array) => {
        if (array[0] >= 55 && array[1] > 7) {
            member.push("Senior");
        } else {
            member.push("Open");
        }
    })

    return member;
}