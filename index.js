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
    
      // console log the quote and author
    const [quote,author] = splitLine
    console.log(quote, author)
      
      // You may style the text with chalk as you wish
  });

program
  .command("addQuote <quote> [author]")
  .description("adds a quote to the quote file")
  .action(async (quote, author) => {

    // TODO: Add the quote and author to the quotes.txt file
    try {  
      quote =  "Do one thing every day that scares you.|"
      author = "Elenor Roosevelt\n"
      if (!author) {
        author = "Anonymous\n"}
      await fs.appendFile(QUOTE_FILE, [quote,author])
      console.log('Quote successfully added')
      let newLines = [quote,author]
      console.log(newLines)
      //alert("Quote successfully added!")
    } catch(err) {
      
      console.log(err)
    }
      console.log(quote,author)
      console.log("Sucessfully added quote and author")
    
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
