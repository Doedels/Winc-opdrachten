const wordLength = require("./PasswordVerifier.js");

test("8 karakters", function() {
  let word = 'Passw';
  let expected = 'Het password moet meer dan 8 karakters bevatten';

  let output = wordLength(word);
  expect(output).toBe(expected);
});

test("geen null", function() {
    let word = null;
    let expected = 'Het password mag geen null waarde hebben';
  
    let output = wordLength(word);
    expect(output).toBe(expected);
  });

  test("1 hoofdletter", function() {
    let word = 'qwerty123';
    let expected = 'Het password moet minimaal 1 hoofdletter hebben';
  
    let output = wordLength(word);
    expect(output).toBe(expected);
  });

  test("1 kleine letter", function() {
    let word = 'QWERTY123';
    let expected = 'Het password moet minimaal 1 kleine letter hebben';
  
    let output = wordLength(word);
    expect(output).toBe(expected);
  });

  test("1 cijfer", function() {
    let word = 'QwErTyUiOp';
    let expected = 'Het password moet minimaal 1 cijfer hebben';
  
    let output = wordLength(word);
    expect(output).toBe(expected);
  });

  test("goed password", function() {
    let word = 'G00dPassWord';
    let expected = 'G00dPassWord';
  
    let output = wordLength(word);
    expect(output).toBe(expected);
  });



