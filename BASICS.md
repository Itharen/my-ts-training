## Lesson 0

### Tools
*You'll need... ( | = or, & = and)*:
- browser: chrome | mozilla | edge (use these to open files for testing)
- editor: [Visual Studio Code](https://code.visualstudio.com/Download) (use this to open folder for development)
    - (also a notePad++ or a simple txt editor can be used, but visual studion code contains a lots of feature that supports development)
	- I recommend to add extensions to VSCode like...
		- HTML CSS support
		- TSLint
		- (for angular Angular X Snippets (X = latest version)
	- You should have... (optional)
		- ClipX - clipboard history (highly recommended), remembers the last 50 clipboards (ctrl + c, ctrl + shift + v)
		- Instant eyedropper - get color code from screen

### Tips
*feel free to use...*
- google,
- everything!
- for basic sintax you can use [w3schools](https://www.w3schools.com/)
- for solutions use stackoverflow,
- for color codes google [color picker](https://chrome.google.com/webstore/detail/colorpick-eyedropper/ohcpnigalekghcmgcdcenkpelffpdolg) or any other colorpicker like tool.
- google translator to translate what you exactly want
- ctrl + c, ctrl + v
- try to write your code in english
- If you press F12 in your browser, you can observe the html css and other infos about the page, you are visiting.
    - There is the console.
	- Also there is an inspect button, that helps you find the element, and the style that.
	- different page width on sites by grabbing the consoles edge (resize console).
	- You can try codes in console.
- while developing you can:
	- save files: **ctrl + s**
	- switch to browser: **alt + tab**
	- refresh browser: **F5**
	- in [Visual Studio Code](https://code.visualstudio.com/Download), highlight section, than comment out with: 		**shift + alt + a**
    - You also can try to change styles through console
    - If you use a style on more than 1 element, you should use classes
    - Anytime you are developing anything try to write the least code you can


### Course HowTo

0. First of all I have to tell, that the true mastery of IT knowledges is how you search for new things, like **solutions**, **methods**, **connections**, **forms**, **technologies**, **abbreviations**, **protocols**, **phrases**, etc.
    - if you have any kind of question read a "BIT" you can save tons of time by NOT reading the FULL article, but trying to understand the CODES first (but ofcourse, if you don't understand the code, you can read the description)
    - read at least the 2nd dia of the "0.1 - Software basics" (Software architectures)
    <br>
1. open the course folder with Visual Studio Code, than read comments in files, start with 1.0.0/1.0.0.html,
   open the files, one after another, read the comments, and try to understand, how the code is put together,
   <br>
2. do homeWorks and ask questions from author: (Itharen)
   1.0.6.1 reproduce by html


#### Abbreviations:
- HTML: HyperText Markup Language
- CSS: Cascading Style Sheets
- JS: JavaScript
- LTS: LongTermSupport (usually the latest stable version)
- CLI: Command Line Interface
- UI: User Interface
- UX: User Experience
- DNS: Domain Name Service
- API: Application Programming Interface

#### Recommended Visual Studio Code Extensions:
- HTML CSS Support
- TSLint
- further extensions especially for Angular:
    - Angular Language Service
    - Angular 10 Snippets - TypeScript, Html, Angular Material, ngRx, RxJS & Flex Layout
    - Angular Material 2, Flex layout 1, Covalent 1 & Material icon snippets
    - Angular Snippets

##### Coding Reminder
- don't forget...
    - to close brackets (), [], {}, `<div></div>`
	- **" ; "** from end of operations
	- **" , "** from lists

##### CSS cribs
- style applying hierachy:
    - id > class > element
	- or the last with the same
- style selectors:
	- id: #thisIsAnId {...}
	- class: .thisIsAClass {...}
	- element: div {...}
	- child element: .parent > .child {...}
	- both selector (any kind of): .selector1 #selector2 {...}

##### Code crib
- basic perations
    - multiply:           **a * b**
    - divide:             **a / b**
    - add:                **a + b**
    - extract:            **a - b**
    - increase value:     **a++**
    - decrease value: 	  **a--**
    - value transmission: **a = b**
<br>
- relations:
    - and: **&&**
    - or: **||**
    - equal: **==**
    - not equal: **!=**
    - larger: **<**
    - smaller: **>**
    - larger or equal: **<=**
    - smaller or equal: **>=**
<br>
- if evaluation: IF ? DO : ELSE
    *hint*: (you can read about ternary operator [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator))
<br>
- comment:
    - CSS, JS: //comment
	- code: /* comment */ code
	- HTML: code <!-- comment --> code
<br>
- HTML
    - Table: `<table>
				<tr> <!-- row -->
					<td> cell content </td> <!-- cell -->
				</tr>
			</table>`
        `<table><tr><td> cell content </td></tr></table>`
<br>
- JS
	- declarations:
		- VARIABLE: // TYPE
		 ```
				let vName;  undefined
				let vName2 = true; // boolean
				let vName3 = 65;			// number
				let vName4 = 'sanyi';	// string
				let vName5 = null;		// null
		```
		- [ARRAY](https://developer.mozilla.org/en-US/docs/Glossary/array):
		```
			let myArray = [1, 2, 3, 4];
			let catNamesArray = ["Jacqueline", "Sophia", "Autumn"];
			//Arrays in JavaScript can hold different types of data, as shown above.
		```

		- [OBJECT](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object):
			```
			{
				a: 1,
				b: 2,
				c: {
					a:1,
					b:2
				}
			}
			```

		- [FUNCTION](https://developer.mozilla.org/en-US/docs/Glossary/Function):
			```
				// ES5 basic syntax
				function fName() {
					conosle.log('yeay, sea cucumber')
				}
			```

		- basic operations:
			- [IF](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else):
			```
				if ( relation ) { // relation e.g: a < b
					conosle.log('we are in the "if" statemant now')
				}
				else if (another relation) { // another relation e.g: (a > b)
					conosle.log('we are in the "else if" statemant now')

				}
				else { // a fenti két alapján ez az eset csak az egyezés lehet, tehát "a === b" de az else ágban sosem írunk feltételt, mert az else ág mindin esetben a "bármi más eset" végpontja
					conosle.log('we are in the "else" statemant now')
				}
			```


			- [FOR](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for):

				```
				let str = '';
				for (let i = 0; i < 9; i++) {
					str = str + i;
				}

				console.log(str);
				// expected output: "012345678"
				```
<br>
<br>
<br>
<br>
<br>
<br>



### balázs ezzel kezdjél valmait mert ez így belelőve a semmibe nem sokat mond szerintem senkinek

		frequently used codes:
			console.log( 'something I want to see in console', varThatIWantToSeeInConsole );
			alert('ALERT message!');

		js function examples:
			(((( /*admincheckTHIS!*/
			document.getElementById(‘ID’);

			document.getElementById(‘ID’).style.display = “none”;

			getValue(field_[prop JS name],row);

			setValue(field_[prop JS name],row,’érték’);
														))))
