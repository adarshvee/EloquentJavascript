//We will be reading the file sampleSettings.ini
//In this part, we assume that we have read the file, and have a String input
//We need to return an object, with each section being a subobject
function parseINI(string) {
  let result = {}; //toplevel
  let section = result; //track the current section
  string.split(/\r?\n/).forEach(line => { //split by carriage return, new line
    let match;
    if (match = line.match(/^(\w+)=(.*)$/)) { //check for property=value pattern
      section[match[1]] = match[2];       //add the property to the current section object
    } else if (match = line.match(/^\[(.*)\]$/)) { //check for [sectionName] pattern
      section = result[match[1]] = {};  //create a new section object, and assign it to result
    } else if (!/^\s*(;.*)?$/) { //If it is neither of the above, and not a comment or blank space, throw error
      throw new Error("Line  '" + line + "' is not valid");
    }
  })
  return result;
}

console.log(parseINI(`
name=Vasilis
[address]
city=Tessaloniki`));
