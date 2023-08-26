#!/usr/bin/node
/*
    Print a square with the character #

    The size of the square must be the first argument
    of the program.
*/

const process = require('process');

if (process.argv.length !== 3) {
    process.stderr.write("Missing argument\n");
    process.stderr.write("Usage: ./1-print_square.js <size>\n");
    process.stderr.write("Example: ./1-print_square.js 8\n");
    process.exit(1);
}

const size = parseInt(process.argv[2]);

if (isNaN(size) || size <= 0) {
    process.stderr.write("Invalid size argument\n");
    process.exit(1);
}

for (let i = 0; i < size; i++) {
    process.stdout.write("#".repeat(size) + "\n");
}
