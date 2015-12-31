process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);

    var positiveCount = 0;
    var negativeCount = 0;
    var zeroCount = 0;

    arr.map( function (val) {
        if (val > 0) {
            positiveCount++;
        }
        else if (val < 0) {
            negativeCount++;
        }
        else {
            zeroCount++;
        }
    });

    process.stdout.write([positiveCount/n, negativeCount/n, zeroCount/n].join('\n'));
}
