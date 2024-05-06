// Define a function called `csv_to_array` that converts CSV data to an array.
const csv_to_array = (data, delimiter = ",", omitFirstRow = false) =>
    // Split the CSV data by newline characters, map each row to an array of values split by the delimiter.
    data.slice(omitFirstRow ? data.indexOf('\n') + 1 : 0).split("\n").map(v => v.split(delimiter))

console.log(csv_to_array('a,b\nc,d'))
console.log(csv_to_array('head1,head2\na,b\nc,d', ',', true));