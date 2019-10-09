let functions = require("./functions.js");

test('Should be null', () => {
    // Begin met expect()
    // Binnen de eerste haken zet je hetgeen je wilt testen. Dat zal een functie zijn. 
    // Daarna volgt je .toBeSomethingSomething functie, 
    // zoek de geschikte functie in de documentatie. 
    // In dit geval willen we checken of de functie "isNull()" ook daadwerkelijk Null returned. 
    // dus "toBeNull()" makes the most sense. 
    expect(functions.isNull()).toBeNull();
});

test('checkValue Should be falsy when argument is undefined', () => {
    expect(functions.checkValue(3)).toBe(3);
});

test('User should be Brad Traversy object', () => {
    expect(functions.createUser()).toMatchObject({ firstName: "Brad", lastName: "Traversy" })
});

test('Should be under or equal to 1600', () => {
    const load1 = 800;
    const load2 = 800;
    expect(load1 + load2).toBe(1600);
});

test('There is no I in team', () => {
    expect('team').not.toContain("[Ii]");
});

test('admin should be in usernames', () => {
    usernames = ['john', 'karen', 'admin'];
    expect(usernames).toContain("admin");
});