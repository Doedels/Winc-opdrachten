const PasswordVerifier = function (word) {
    if (word === null ) {
        return 'Het password mag geen null waarde hebben';
    } else if (word.length <= 8) {
        return 'Het password moet meer dan 8 karakters bevatten';
    }else if (/(?=.*[A-Z])$/.test(word)) {
        return 'Het password moet minimaal 1 hoofdletter hebben';
    }else if (/(?=.*[a-z])$/.test(word)) {
        return 'Het password moet minimaal 1 kleine letter hebben';
    } else if (/(?=.*\d)$/.test(word)) {
        return 'Het password moet minimaal 1 kleine letter hebben';
    } else return word;
}

module.exports = PasswordVerifier;

// (?=^.{8,}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)[0-9a-zA-Z!@#$%^&*()]*$

//   /(?=.*[A-Z])$/.test(word)