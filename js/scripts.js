// Add js command
var nameEl = document.querySelector('#name');
var emailEl = document.querySelector('#email');
var passEl = document.querySelector('#password');
var confPassEl = document.querySelector('#confirm-password');
var ageEl = document.querySelector('#age');
var roleEl = document.querySelector('#jobs');
var featureEl = document.querySelector('#features');
var commentEl = document.querySelector('#comments');

// Radio elements
var defEl = document.querySelector('#definitely');
var mayEl = document.querySelector('#maybe');
var notEl = document.querySelector('#not-sure');

// Checkbox elements
var frontendEl = document.querySelector('#frontend');
var backendEl = document.querySelector('#backend');
var dataEl = document.querySelector('#data');
var challengeEl = document.querySelector('#challenge');
var gitterEl = document.querySelector('#gitter');
var videoEl = document.querySelector('#video');
var wikiEl = document.querySelector('#wiki');
var forumEl = document.querySelector('#forum');
var additionalEl = document.querySelector('#additional');

var showError = (input, message) => {
    var el = input.parentElement.querySelector('small');
    el.textContent = message;
    el.style.color = "red";
}

var showSuccess = (input) => {
    var el = input.parentElement.querySelector('small');
    el.textContent = '';
}

const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

const isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
};

const checkEmail = () => {
    let valid = false;
    const email = emailEl.value.trim();
    if (email == '') {
        showError(emailEl, 'Enter email')
    } else if (!isEmailValid(email)) {
        showError(emailEl, 'Email is not valid.')
    } else {
        showSuccess(emailEl);
        valid = true;
    }
    return valid;
}

const checkPassword = () => {
    let valid = false;
    const password = passEl.value.trim();

    if (password == '') {
        showError(passEl, 'Enter Password')
    } else if (!isPasswordSecure(password)) {
        showError(passEl, 'Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)');
    } else {
        showSuccess(passEl);
        valid = true;
    }

    return valid;
};

const checkConfirmPassword = () => {
    let valid = false;
    // check confirm password
    const confirmPassword = confPassEl.value.trim();
    const password = passEl.value.trim();

    if (confirmPassword == '') {
        showError(confPassEl, 'Enter Password')
    } else if (password !== confirmPassword) {
        showError(confPassEl, 'Confirm password does not match');
    } else {
        showSuccess(confPassEl);
        valid = true;
    }

    return valid;
};


var Submit = (e) => {
    e.preventDefault();

    var emailValid = checkEmail(),
        passValid = checkPassword(),
        confPassValid = checkConfirmPassword();

    var valid = emailValid && passValid && confPassValid;

    if (valid) {
        var object = {
            "Name": nameEl.value,
            "Email": emailEl.value,
            "Password": passEl.value,
            "Age": ageEl.value,
            "Role": roleEl.value,
            "Feautre": featureEl.value,
            "Comment": commentEl.value,
            "Recommendation": { "Definitely": defEl.checked, "May Be": mayEl.checked, "Not Sure": notEl.checked },
            "Improvement": { "FrontEnd": frontendEl.checked, "Backend": backendEl.checked, "Data Vizualization": dataEl.checked, "Challenges": challengeEl.checked, "Gitter": gitterEl.checked, "Video": videoEl.checked, "Wiki": wikiEl.checked, "Forum": forumEl.checked, "Additional": additionalEl.checked }
        }

        console.log(object);
    }
}