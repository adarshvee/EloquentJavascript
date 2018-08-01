//When we don't know the pattern to be matched in advance, we can use the RegExp constructor
//A string can be passed as an arguement to this constructor
let name = "Harry";
let text = "Harry is a suspicious character";
let regexp = new RegExp("\\b("+ name +")\\b", "gi");
console.log(text.replace(regexp, "_$1_"));
//_Harry_ is a suspicious character
// \b i boundary marker. Another slash is for escaping

//But this will fail if the name has any special characters such as dea+hl[]rd
name = "dea+hl[]rd";
regexp = new RegExp("\\b("+ name +")\\b", "gi");
text = "dea+hl[]rd is a suspicious character";
console.log(text.replace(regexp, "_$1_"));
//dea+hl[]rd is a suspicious character

//Resolve this by adding backslash before all special characters
let escaped = name.replace(/[\\[.+*?(){|^$]/g, "\\$&");
regexp = new RegExp("\\b("+ escaped +")\\b", "gi");
console.log(text.replace(regexp, "_$1_"));
//_dea+hl[]rd_ is a suspicious character
