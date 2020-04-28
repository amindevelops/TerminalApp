function hitEnter() {
  // alert('hi');
}

function userInput(text) {
  // 1. Split the string
  // 2. Add logic based on the order
  // - command
  // Hint: simply string recognition code to identify a command (string match)
  // - each command must process flags and values
  // (that is also based on an order)
  // The order will always be, -flag value -flag value
  // Hint: Use functions to organise each task that your code does
  //
}

function commandBuy(flags_values) {
  //Break down the array further
}

//Objectives:
//1. Learn the coding styles/rules/nomenclature etc (e.g. -flag, -g for output beautifiers [mysql db]) for command line interfaces (CLI)
//2. Instead of memorising a bash cheatsheet, learn it while you create your own terminal app
//3. Explore programming principles
//4. Opportunity to build YOUR OWN TOOL
//5. "I built my own console application to speed up my own workflows, in and out of work"
//6. Successes and Challenges
// - Employer workflow improvements / barriers
// --- Console App OR Employer tool e.g. Bitrix, Zapier

//HTML
//on keypress enter to trigger function
//Or implement that javascript

//Javascript
//Strings and comparisons
//String operations e.g. explode, split
//Arrays and access
// -> Objects
//FileReader API
//1. Make a new file or update an existing one? How is it decided?
//2. Make a command cheat sheet
//3. Open file "name" -t "style"
//4. Topic add -s "kjhdkjsadsa"
//5. List bookmarks -f "filename.md"
//"agile workflow does not suit all projects, you must understand the key principles of agile to see if they are actually applicable to the project and also the team. [q: what are the principles?]"
//6. List questions -f "filename.md"
// [1] lkajkldjsaldas
// [2] dskjahdkjsadsa
//7. :q / Esc -> to exit the interactive UI
//8. a1 -> Enter
//9. "kjhasdkjsakjdskajkdsada" -> Enter
//10. Saved!
//11. Report QA performance

//LocalStorage
//1. Just in case the code breaks whilst running, you might encounter one of two scenarios:
// a) partially written data to the file
// b) no data saved to file
//LOST OR CORRUPT data
//Options:
//a) Create a queue locally on the user's device, which is then processed.
//b) 

//External Storage
//1. Connect Firebase to your console application.
//2. Create a usage log of the app, in firebase, such that user activity is tracked:
//a) When application is started, time and date
//b) The time at which any command is run
//c) The command that was run and the top level detail
//e.g. 'make a note' 'topic'

//Stretch (UX)
//1. Add a status icon on the app to indicate connectivity strength or presence
//2. Sync animation or something to indicate to the user when a cloud-sync is taking place between local storage and the server-side
//3. In that respect, for good UX, you should have an indicator as well to clarify if you are up-to-date with the cloud or there is a local backlog.

//Assignments
//1. Finish UI styles. 
//2. Cheatsheet (will eventually be a man/help in the app).
//3. PlantUML diagram based how commands are processed.