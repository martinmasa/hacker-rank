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
    var time = readLine();

    var hour =  time.split(':')[0];
    var minutes = time.split(':')[1];
    var seconds = time.split(':')[2].replace(/\D/g, '');
    var hoursToAdd = time.indexOf('PM') > -1 ? 12 : 0;

    if (hour === '12') {
        hour = hoursToAdd === 0 ? '00' : hour;
    }
    else if (hoursToAdd) {
        hour = parseInt(hour) + hoursToAdd;
    }

    process.stdout.write([hour, minutes, seconds].join(':'));
}
