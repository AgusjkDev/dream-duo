const regex = {
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-#!$@%^&*()_+|~=`{}\[\]:";'<>?,.\/ ])/,
    name: /^[a-zA-Z]+(?:['-][a-zA-Z]+)*$/,
    capitalizeName: /(?:^|\b)[a-z]/g,
};

export default regex;
