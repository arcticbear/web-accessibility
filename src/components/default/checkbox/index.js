'use strict';

// @TODO: Рефакторинг компонента.

import './checkbox.scss';

var checkbox = document.querySelectorAll('input[type=checkbox]');

function checkboxEventHandler(t) {
    for (var i = 0; i < t.length; i++) {
        t[i].addEventListener("click", checkboxToggleAria);
        if(t[i].disabled) {
            t[i].setAttribute('aria-disabled', 'true');
        }
        if(t[i].checked) {
            t[i].setAttribute('aria-checked', 'true');
        }
        else if (!t[i].checked) {
            t[i].setAttribute('aria-checked', 'false');
        }
    }
}

function checkboxToggleAria() {
    if (this.getAttribute("aria-checked") == "false") {
        this.setAttribute("aria-checked", "true");
    } else {
        this.setAttribute("aria-checked", "false");
    }
    this.focus();
}

checkboxEventHandler(checkbox);

