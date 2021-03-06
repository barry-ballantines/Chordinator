# Chordinator

The `Amazing Chordinator┬┤ is a React app that will replace all your chord charts in future.
Just type in your root note and the scale degrees you want to add, and the tool will show
you all the matching fretboard positions.

Check out the latest build at:

[Chordinator @ Github.io](https://barry-ballantines.github.io/Chordinator/build/index.html)

## Examples:

#### You want to find a new voicing for a Cm7b9 chord?

Enter the following line: C b3 5 b7 b9


#### You need a spicy D dominant 7 with a sharp 9?

Try this: D 3 5 b7 #9

#### F full diminished?

Here we go: F 1 b3 b5 bb7


#### You need the Lydian b7 scale in Bb?

Here is the code: Bb 1 2 3 #4 5 6 b7


## How to build

You need Node and PNPM to build this application.

    pnpm install
    
    PUBLIC_URL=. pnpm run build
    
You can also start the application from the workspace with the following command:

    pnpm start
    
The app is running at http://localhost:3030

