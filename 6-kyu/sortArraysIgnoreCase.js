const sortme = (names) => names.slice().sort((a, b) => a.localeCompare(b, undefined, { sensitivity: "base" }))


// const sortme = ( names ) => names.slice().sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))

