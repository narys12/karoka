import { AccountsTemplates } from 'meteor/useraccounts:core';

AccountsTemplates.addField({
    _id: 'address',
    type: 'text',
    displayName: 'address',
    placeholder: {
        signUp: "At least six characters"
    },
    required: true,
    minLength: 6,
    re: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/,
    errStr: 'At least 1 digit, 1 lowercase and 1 uppercase',
});