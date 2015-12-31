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
    var staircase = [];

    for (var i = 0; i < n; i++) {
        var spaces = new Array(n-i).join(' ');
        var stairs = new Array(i+2).join('#');
        staircase.push([spaces, stairs].join(''));
    }

    process.stdout.write(staircase.join('\n'));
}
