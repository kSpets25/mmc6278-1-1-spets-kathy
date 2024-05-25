const { program } = require("commander");
const fs = require("fs/promises");
const chalk = require("chalk");
const QUOTE_FILE = "quotes.txt";

program
  .name("quotes")
  .description("CLI tool for inspiration")
  .version("0.1.0");

program
  .command("getQuote")
  .description("Retrieves a random quote")
  .action(async () => {
    // TODO: Pull a random quote from the quotes.txt file
    const data = (await fs.readFile(QUOTE_FILE, 'utf-8'))
    
    const lines = data.split("\n")
    const filteredLines = lines.filter(line => line)
    const randomLine = filteredLines[Math.floor(Math.random()*filteredLines.length)]
    const splitLine = randomLine.split("|")
    const [quote,author] = splitLine
      // You may style the text with chalk as you wish
    console.log(chalk.yellow.bgGreen.bold(quote, author))
    
      
    
  });

program
  .command("addQuote <quote> [author]")
  .description("adds a quote to the quote file")
  .action(async (quote, author) => {
    
    // TODO: Add the quote and author to the quotes.txt file
    try {  
      if (!author) {
        author = "Anonymous"}
      await fs.appendFile(QUOTE_FILE, [quote +'.' + '|' + [author]] + "\n")
      console.log('Quote successfully added')
      alert = "Quote successfully added"; 
      let newLines = [quote,author]
      console.log(newLines)
    } catch(err) {
      console.log(err)
    }
      console.log(chalk.bgWhite.bgBlue.bold(quote,author))
      console.log("Successfully added quote and author")
      
    
    // If no author is provided,  
    // save the author as "Anonymous"
    // After the quote/author is saved, 
    // alert the user that the quote was added.
    //console.log('Successfully added quote and author')
    // You may style the text with chalk as you wish
    // HINT: You can store both author and quote on the same line using
    // a separator like pipe | and then using .split() when retrieving
  });

program.parse();
