/*37.	Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.*/

function makeShirt(size: string = 'large' ,text :string = 'I love typescript') : void {
    console.log(`you have a order ${size},shirt that says ${text}`)
}

makeShirt ();
makeShirt ('medium')

// Different Message

makeShirt('small','i need a big shirt to wear')