import $ from 'jquery'

import 'jquery-validation'

$.validator.addClassRules({
    //email class ismi email class'ına sahip olanlar emailAdress metodunu çalıştırır.
    email: {
        emailaddress: true
    },

    //class'a yazılacak isim
    passwordLength: {
        password3: true //çalışan metodun ismi
    },

    phoneNumber: {},

    checkControl: {},

    //class ismi
    message: {
        cminlength: 10
    },

    passwordMatch:{
        passwordmatch:true
    }

});


$.validator.addMethod("emailaddress", function (value, element) {
    return this.optional(element) || /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(value);
}, "Invalid e-mail address222");



$.validator.addMethod( 'passwordmatch', function(value, element) {

    // The two password inputs
    var password = $("#password").val();
    var confirmPassword = $("#password-confirm").val();

    // Check for equality with the password inputs
    if (password != confirmPassword ) {
        return false;
    } else {
        return true;
    }

}, "Your Passwords Must Match");