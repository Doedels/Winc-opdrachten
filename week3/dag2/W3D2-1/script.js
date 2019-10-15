console.log("He hallo, ik ben eerste")
setTimeout(function () { console.log("He hallo, ik ben tweede"); }, 2000);
console.log("He hallo, ik ben derde")

/*  Resultaat:
script.js:1 He hallo, ik ben eerste
script.js:3 He hallo, ik ben derde
script.js:2 He hallo, ik ben tweede
*/