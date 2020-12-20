# YASIL: Yet Another Stupid, Idiotic Language :)
This language is the result of a stupid, idiotic idea that I had - What if conway's game of life were a programming language?

## How it Works:
a program is represented as a grid of cells, each of which can either contain a number from 0-9, or these symbols:
- '.' - take input from the user (if a number writes number to cell, if a character writes keycode to cell) when sum of cells around it is not 0
- '#' - print sum of cells around it to the screen, when sum is not 0
- '$' - print character of keycode of sum of cells around it, when not 0

additionally, the first line of every program indicates the number of cycles the program should run for.

### every cycle

each cell's value becomes the sum of the values of the cells surrounding it.

## Example Programs (more coming soon):
addition calculator:
```
2
1.#.1
```

'HELLO' program (too lazy to do 'WORLD'):
```
3
00$0000$0000$0000$0000$00
0000000000000000000000000
9999069990000000000000000
0000000000044400444006160
```

## To Use:
download/copy the abysmally messy run.js file (might need to install deps with npm), and then run with node ('node run.js \[path/to/file.yasil\])