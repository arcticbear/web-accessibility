var accessibility =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// ==========================================================================
	// Utils
	// ==========================================================================

	__webpack_require__(1);

	__webpack_require__(6);

	__webpack_require__(9);

	__webpack_require__(12);

	__webpack_require__(16);

	__webpack_require__(19);

	__webpack_require__(22);

	__webpack_require__(25);

	__webpack_require__(28);

	__webpack_require__(31);

	__webpack_require__(34);

	__webpack_require__(37);

	__webpack_require__(40);

	__webpack_require__(43);

	__webpack_require__(46);

	__webpack_require__(49);

	__webpack_require__(52);

	__webpack_require__(55);

	var _tabs = __webpack_require__(58);

	__webpack_require__(61);

	__webpack_require__(64);

	__webpack_require__(67);

	var _collapse = __webpack_require__(70);

	__webpack_require__(73);

	__webpack_require__(76);

	__webpack_require__(79);

	// ==========================================================================
	// Initialization @TODO: Можно обойтись?
	// ==========================================================================

	// Panels


	// Collapse


	// Breadcrumbs


	// Tabs


	// Media object


	// Form elements


	// Typography


	// Control panel
	(0, _collapse.collapseInit)();

	// Badge


	// Thumbnail


	// Progress bar


	// Navigation


	// Pagination


	// ==========================================================================
	// Additional components
	// ==========================================================================

	// Alerts


	// Images


	// Grid systems


	// ==========================================================================
	// Default components
	// ==========================================================================

	// Application

		(0, _tabs.tabsInit)();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(2);

/***/ },
/* 2 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(7);

/***/ },
/* 7 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 8 */,
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(10);

/***/ },
/* 10 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 11 */,
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// @TODO: Рефакторинг компонента.

	Object.defineProperty(exports, "__esModule", {
	        value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _cookie = __webpack_require__(13);

	var _cookie2 = _interopRequireDefault(_cookie);

	__webpack_require__(14);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var COOKIE_PATH = { path: '/' };

	var ControlPanel = function () {
	        function ControlPanel() {
	                _classCallCheck(this, ControlPanel);

	                var self = this;

	                self.app = $('.application');

	                self.textSelect = $('.control-panel__select-text');
	                self.colorSelect = $('.control-panel__select-color');
	                self.imageSelect = $('.control-panel__select-image');

	                !_cookie2.default.getCookie('app-text') ? _cookie2.default.setCookie('app-text', 'normal', COOKIE_PATH) : false;
	                !_cookie2.default.getCookie('app-color') ? _cookie2.default.setCookie('app-color', 'white', COOKIE_PATH) : false;
	                !_cookie2.default.getCookie('app-image') ? _cookie2.default.setCookie('app-image', 'visible', COOKIE_PATH) : false;

	                self.setApplicationStyles();
	                self.wrapImageAlt();
	                self.toggleImage();

	                self.handleTextChange();
	                self.handleColorChange();
	                self.handleImageChange();

	                self.app.addClass('application_show');
	        }

	        _createClass(ControlPanel, [{
	                key: 'handleTextChange',
	                value: function handleTextChange() {

	                        var self = this;

	                        self.textSelect.val(_cookie2.default.getCookie('app-text'));

	                        self.textSelect.on('change', function () {

	                                _cookie2.default.setCookie('app-text', $(this).val(), COOKIE_PATH);
	                                self.setApplicationStyles();
	                        });
	                }
	        }, {
	                key: 'handleColorChange',
	                value: function handleColorChange() {

	                        var self = this;

	                        self.colorSelect.val(_cookie2.default.getCookie('app-color'));

	                        self.colorSelect.on('change', function () {

	                                _cookie2.default.setCookie('app-color', $(this).val(), COOKIE_PATH);
	                                self.setApplicationStyles();
	                        });
	                }
	        }, {
	                key: 'handleImageChange',
	                value: function handleImageChange() {

	                        var self = this;

	                        self.imageSelect.val(_cookie2.default.getCookie('app-image'));

	                        self.imageSelect.on('change', function () {

	                                _cookie2.default.setCookie('app-image', $(this).val(), COOKIE_PATH);
	                                self.setApplicationStyles();

	                                self.toggleImage();
	                        });
	                }
	        }, {
	                key: 'wrapImageAlt',
	                value: function wrapImageAlt() {

	                        $('img').not('code img').each(function () {

	                                var alt = $(this).attr('alt'),
	                                    width = $(this).width(),
	                                    height = $(this).height();

	                                $(this).wrap('<span class="image-alt" style="width: ' + width + 'px; height: ' + height + 'px;"/>');

	                                if (alt != '') {
	                                        $(this).after('<span class="image-alt__text">' + alt + '</span>');
	                                } else {
	                                        $(this).after('<span class="image-alt__text">Описание отсутствует</span>');
	                                }
	                        });
	                }
	        }, {
	                key: 'toggleImage',
	                value: function toggleImage() {

	                        if (_cookie2.default.getCookie('app-image') == 'hidden') {
	                                $('.image-alt').addClass('image-alt_active');
	                                $('img').not('code img').css('visibility', 'hidden');
	                        } else {
	                                $('.image-alt').removeClass('image-alt_active');
	                                $('img').not('code img').css('visibility', 'visible');
	                        }
	                }
	        }, {
	                key: 'setApplicationStyles',
	                value: function setApplicationStyles() {

	                        this.app.attr('data-text', _cookie2.default.getCookie('app-text'));
	                        this.app.attr('data-color', _cookie2.default.getCookie('app-color'));
	                        this.app.attr('data-image', _cookie2.default.getCookie('app-image'));
	                }
	        }]);

	        return ControlPanel;
	}();

		exports.default = new ControlPanel();

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Cookie = function () {
	    function Cookie() {
	        _classCallCheck(this, Cookie);
	    }

	    _createClass(Cookie, [{
	        key: 'getCookie',


	        /**
	         * Возвращает cookie с именем name, если есть, если нет, то undefined
	         * @param name - имя cookie
	         * @returns {*}
	         */
	        value: function getCookie(name) {
	            var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
	            return matches ? decodeURIComponent(matches[1]) : undefined;
	        }

	        /**
	         * Устанавливает cookie с именем name и значением value
	         * @param name - имя cookie
	         * @param value - значение cookie
	         * @param options - объект с свойствами cookie (expires, path, domain, secure)
	         */

	    }, {
	        key: 'setCookie',
	        value: function setCookie(name, value, options) {
	            options = options || {};

	            var expires = options.expires;

	            if (typeof expires == "number" && expires) {
	                var d = new Date();
	                d.setTime(d.getTime() + expires * 1000);
	                expires = options.expires = d;
	            }
	            if (expires && expires.toUTCString) {
	                options.expires = expires.toUTCString();
	            }

	            value = encodeURIComponent(value);

	            var updatedCookie = name + "=" + value;

	            for (var propName in options) {
	                updatedCookie += "; " + propName;
	                var propValue = options[propName];
	                if (propValue !== true) {
	                    updatedCookie += "=" + propValue;
	                }
	            }

	            document.cookie = updatedCookie;
	        }

	        /**
	         * Удаляет cookie с именем name
	         * @param name - имя cookie
	         */

	    }, {
	        key: 'deleteCookie',
	        value: function deleteCookie(name) {
	            this.setCookie(name, "", {
	                expires: -1
	            });
	        }
	    }]);

	    return Cookie;
	}();

		exports.default = new Cookie();

/***/ },
/* 14 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 15 */,
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

		__webpack_require__(82);

/***/ },
/* 17 */,
/* 18 */,
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(20);

/***/ },
/* 20 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 21 */,
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(23);

/***/ },
/* 23 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 24 */,
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(26);

/***/ },
/* 26 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 27 */,
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(29);

/***/ },
/* 29 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 30 */,
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(32);

/***/ },
/* 32 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 33 */,
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// @TODO: Рефакторинг компонента.

	__webpack_require__(35);

	var radio = document.querySelectorAll('input[type=radio]');

	function radioToggleAria() {
	    //удаляем aria-checked у всех
	    var group = document.getElementsByName(this.getAttribute('name'));
	    for (var i = 0; i < group.length; i++) {
	        group[i].setAttribute('aria-checked', 'false');
	    }
	    //ставим только выбраному
	    this.setAttribute("aria-checked", "true");
	    this.focus();
	}

	function radioEventHandler(t) {
	    for (var i = 0; i < t.length; i++) {
	        t[i].addEventListener("change", radioToggleAria);
	        if (t[i].disabled) {
	            t[i].setAttribute('aria-disabled', 'true');
	        }
	        if (t[i].checked) {
	            t[i].setAttribute('aria-checked', 'true');
	        } else if (!t[i].checked) {
	            t[i].setAttribute('aria-checked', 'false');
	        }
	    }
	}

	radioEventHandler(radio);

/***/ },
/* 35 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 36 */,
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// @TODO: Рефакторинг компонента.

	__webpack_require__(38);

	var checkbox = document.querySelectorAll('input[type=checkbox]');

	function checkboxEventHandler(t) {
	    for (var i = 0; i < t.length; i++) {
	        t[i].addEventListener("click", checkboxToggleAria);
	        if (t[i].disabled) {
	            t[i].setAttribute('aria-disabled', 'true');
	        }
	        if (t[i].checked) {
	            t[i].setAttribute('aria-checked', 'true');
	        } else if (!t[i].checked) {
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

/***/ },
/* 38 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 39 */,
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(41);

/***/ },
/* 41 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 42 */,
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(44);

/***/ },
/* 44 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 45 */,
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(47);

/***/ },
/* 47 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 48 */,
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(50);

/***/ },
/* 50 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 51 */,
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(53);

/***/ },
/* 53 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 54 */,
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(56);

/***/ },
/* 56 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 57 */,
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// @TODO: Рефакторинг компонента.

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.tabsInit = tabsInit;

	__webpack_require__(59);

	function keyCodes() {

	    this.tab = 9;
	    this.enter = 13;
	    this.esc = 27;

	    this.space = 32;
	    this.pageup = 33;
	    this.pagedown = 34;
	    this.end = 35;
	    this.home = 36;

	    this.left = 37;
	    this.up = 38;
	    this.right = 39;
	    this.down = 40;
	}

	function tabsInit() {
	    var tabs = document.querySelectorAll('.tabs');
	    [].forEach.call(tabs, function (tab) {
	        var panel = new tabpanel(tab);
	    });
	}
	function tabpanel(tab) {
	    this.panel = tab;
	    this.keys = new keyCodes();
	    this.tabs = tab.querySelectorAll('.tabs-list__item');
	    this.panels = tab.querySelectorAll('.tabs__inner');
	    this.bindHandlers();
	    this.init();
	}

	tabpanel.prototype.init = function () {
	    var tab;
	    for (var i = 0; i < this.panels.length; i++) {
	        this.panels[i].setAttribute('aria-hidden', 'true');
	    }

	    tab = this.panel.querySelector('[aria-selected="true"]');

	    this.panel.querySelector('#' + tab.getAttribute('aria-controls')).setAttribute('aria-hidden', 'false');
	};

	tabpanel.prototype.switchTabs = function ($curTab, $newTab) {
	    $curTab.classList.remove('focus');

	    $curTab.setAttribute('tabindex', '-1');
	    $curTab.setAttribute('aria-selected', 'false');

	    $newTab.setAttribute('aria-selected', 'true');
	    // hide the current tab panel and set aria-hidden to true
	    this.panel.querySelector('#' + $curTab.getAttribute('aria-controls')).setAttribute('aria-hidden', 'true');

	    // show the new tab panel and set aria-hidden to false
	    this.panel.querySelector('#' + $newTab.getAttribute('aria-controls')).setAttribute('aria-hidden', 'false');

	    $newTab.setAttribute('tabindex', '0');

	    $newTab.focus();
	};

	tabpanel.prototype.bindHandlers = function () {

	    var thisObj = this;
	    for (var i = 0; i < this.tabs.length; i++) {
	        this.tabs[i].addEventListener("keydown", function (e) {
	            return thisObj.handleTabKeyDown(this, e);
	        });
	        this.tabs[i].addEventListener('keypress', function (e) {
	            return thisObj.handleTabKeyPress(this, e);
	        });
	        this.tabs[i].addEventListener('click', function (e) {
	            return thisObj.handleTabClick(this, e);
	        });
	        this.tabs[i].addEventListener('focus', function (e) {
	            return thisObj.handleTabFocus(this, e);
	        });
	        this.tabs[i].addEventListener('blur', function (e) {
	            return thisObj.handleTabBlur(this, e);
	        });
	        this.tabs[i].addEventListener('keydown', function (e) {
	            return thisObj.handlePanelKeyDown(this, e);
	        });
	        this.tabs[i].addEventListener('keypress', function (e) {
	            return thisObj.handlePanelKeyPress(this, e);
	        });
	    }
	};
	tabpanel.prototype.handleTabKeyDown = function (tab, e) {

	    if (e.altKey) {
	        return true;
	    }

	    switch (e.keyCode) {
	        case this.keys.enter:
	        case this.keys.space:
	            {
	                return true;
	            }
	        case this.keys.left:
	        case this.keys.up:
	            {
	                var thisObj = this;
	                var $prevTab;
	                var $newTab;
	                if (e.ctrlKey) {} else {
	                    var curNdx = Array.prototype.indexOf.call(this.tabs, tab);
	                    if (curNdx == 0) {
	                        var index = this.tabs.length;
	                        $newTab = this.tabs[index - 1];
	                    } else {
	                        $newTab = this.tabs[curNdx - 1];
	                    }

	                    this.switchTabs(tab, $newTab);
	                }

	                e.stopPropagation();
	                return false;
	            }
	        case this.keys.right:
	        case this.keys.down:
	            {

	                var thisObj = this;
	                var foundTab = false;
	                var $newTab;

	                var curNdx = Array.prototype.indexOf.call(this.tabs, tab);

	                if (curNdx == this.tabs.length - 1) {
	                    $newTab = this.tabs[0];
	                } else {
	                    $newTab = this.tabs[curNdx + 1];
	                }
	                this.switchTabs(tab, $newTab);

	                e.stopPropagation();
	                return false;
	            }
	        case this.keys.home:
	            {

	                this.switchTabs(tab, this.tabs.first());

	                e.stopPropagation();
	                return false;
	            }
	        case this.keys.end:
	            {

	                this.switchTabs(tab, this.tabs.last());

	                e.stopPropagation();
	                return false;
	            }
	    }
	};
	tabpanel.prototype.handleTabKeyPress = function (tab, e) {

	    if (e.altKey) {

	        return true;
	    }

	    switch (e.keyCode) {
	        case this.keys.enter:
	        case this.keys.space:
	        case this.keys.left:
	        case this.keys.up:
	        case this.keys.right:
	        case this.keys.down:
	        case this.keys.home:
	        case this.keys.end:
	            {
	                e.stopPropagation();
	                return false;
	            }
	        case this.keys.pageup:
	        case this.keys.pagedown:
	            {

	                if (!e.ctrlKey) {
	                    return true;
	                }

	                e.stopPropagation();
	                return false;
	            }
	    }

	    return true;
	};
	tabpanel.prototype.handleTabClick = function (tab, e) {

	    for (var i = 0; i < this.panels.length; i++) {
	        this.panels[i].setAttribute('aria-hidden', 'true');
	    }

	    for (var i = 0; i < this.tabs.length; i++) {
	        this.tabs[i].setAttribute('tabindex', '-1');
	    }

	    tab.setAttribute('aria-selected', 'true');

	    this.panel.querySelector('#' + tab.getAttribute('aria-controls')).setAttribute('aria-hidden', 'false');
	    tab.setAttribute('tabindex', '0');
	    tab.focus();
	    return true;
	};
	tabpanel.prototype.handleTabFocus = function (tab, e) {
	    tab.classList.add('focus');
	    return true;
	};
	tabpanel.prototype.handleTabBlur = function (tab, e) {
	    tab.classList.remove('focus');
	    return true;
	};
	tabpanel.prototype.handlePanelKeyDown = function ($elem, e) {
	    if (e.altKey) {
	        return true;
	    }

	    switch (e.keyCode) {
	        case this.keys.esc:
	            {
	                e.stopPropagation();
	                return false;
	            }
	        case this.keys.left:
	        case this.keys.up:
	            {

	                if (!e.ctrlKey) {

	                    return true;
	                }
	                var tab = document.querySelector('#' + $elem.getAttribute('aria-labelledby'));
	                tab.focus();

	                e.stopPropagation();
	                return false;
	            }
	        case this.keys.pageup:
	            {

	                var $newTab;

	                if (!e.ctrlKey) {

	                    return true;
	                }

	                var tab = this.tabs.querySelector('[aria-selected="true"]');

	                var curNdx = Array.prototype.indexOf.call(this.tabs, tab);

	                if (curNdx == 0) {
	                    var index = this.tabs.length;
	                    $newTab = this.tabs[index - 1];
	                } else {
	                    $newTab = this.tabs[curNdx - 1];
	                }

	                this.switchTabs(tab, $newTab);

	                e.stopPropagation();
	                e.preventDefault();
	                return false;
	            }
	        case this.keys.pagedown:
	            {

	                var $newTab;

	                if (!e.ctrlKey) {

	                    return true;
	                }

	                var tab = $('#' + $elem.attr('aria-labelledby'));

	                var curNdx = Array.prototype.indexOf.call(this.tabs, tab);

	                if (curNdx == this.tabs.length - 1) {

	                    $newTab = this.tabs[0];
	                } else {
	                    $newTab = this.tabs[curNdx + 1];
	                }

	                this.switchTabs(tab, $newTab);

	                e.stopPropagation();
	                e.preventDefault();
	                return false;
	            }
	    }

	    return true;
	};
	tabpanel.prototype.handlePanelKeyPress = function ($elem, e) {

	    if (e.altKey) {

	        return true;
	    }

	    if (e.ctrlKey && (e.keyCode == this.keys.pageup || e.keyCode == this.keys.pagedown)) {
	        e.stopPropagation();
	        e.preventDefault();
	        return false;
	    }

	    switch (e.keyCode) {
	        case this.keys.esc:
	            {
	                e.stopPropagation();
	                e.preventDefault();
	                return false;
	            }
	    }

	    return true;
		};

/***/ },
/* 59 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 60 */,
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(62);

/***/ },
/* 62 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 63 */,
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(65);

/***/ },
/* 65 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 66 */,
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(68);

/***/ },
/* 68 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 69 */,
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// @TODO: Рефакторинг компонента.

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.collapseInit = collapseInit;

	__webpack_require__(71);

	function collapseInit() {
	    var collapses = document.querySelectorAll('.collapse-button');
	    [].forEach.call(collapses, function (collapse) {
	        var collapse = new hideShow(collapse);
	    });
	}

	function hideShow(target) {
	    this.target = target;
	    this.region = document.querySelector('#' + this.target.getAttribute('aria-controls'));
	    this.keys = {
	        enter: 13,
	        space: 32
	    };

	    this.toggleSpeed = 100;

	    this.bindHandlers();
	}

	hideShow.prototype.bindHandlers = function () {
	    var thisObj = this;
	    this.target.addEventListener('click', function (e) {
	        thisObj.toggleRegion();
	        e.stopPropagation();
	        return false;
	    });
	};

	hideShow.prototype.toggleRegion = function () {
	    var thisObj = this.region;
	    console.log(thisObj);
	    this.region.classList.toggle('collapse');
	    if (thisObj.getAttribute('aria-expanded') == 'false') {
	        thisObj.setAttribute('aria-expanded', 'true');
	        thisObj.focus();
	    } else {
	        thisObj.setAttribute('aria-expanded', 'false');
	    }
	};

/***/ },
/* 71 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 72 */,
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(74);

/***/ },
/* 74 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 75 */,
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(77);

/***/ },
/* 77 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 78 */,
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(80);

/***/ },
/* 80 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 81 */,
/* 82 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjZXNzaWJpbGl0eS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBkYWI1YTJlMzNkNGQxYzYyOGI3MyIsIndlYnBhY2s6Ly8vc3JjL2FjY2Vzc2liaWxpdHkuanMiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL3V0aWxzL25vcm1hbGl6ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy91dGlscy9ub3JtYWxpemUvbm9ybWFsaXplLnNjc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL3V0aWxzL3Jlc2V0L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3V0aWxzL3Jlc2V0L3Jlc2V0LnNjc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvYXBwbGljYXRpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9hcHBsaWNhdGlvbi9hcHBsaWNhdGlvbi5zY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9kZWZhdWx0L2NvbnRyb2wtcGFuZWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL3V0aWxzL2Nvb2tpZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kZWZhdWx0L2NvbnRyb2wtcGFuZWwvY29udHJvbC1wYW5lbC5zY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9kZWZhdWx0L2dyaWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvdHlwb2dyYXBoeS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kZWZhdWx0L3R5cG9ncmFwaHkvdHlwb2dyYXBoeS5zY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9kZWZhdWx0L2ltYWdlLWFsdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kZWZhdWx0L2ltYWdlLWFsdC9pbWFnZS1hbHQuc2NzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9mb3JtL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvZm9ybS9mb3JtLnNjc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvbGFiZWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9sYWJlbC9sYWJlbC5zY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9kZWZhdWx0L3RleHRhcmVhL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvdGV4dGFyZWEvdGV4dGFyZWEuc2NzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9yYWRpby9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kZWZhdWx0L3JhZGlvL3JhZGlvLnNjc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvY2hlY2tib3gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9jaGVja2JveC9jaGVja2JveC5zY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9kZWZhdWx0L3NlbGVjdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kZWZhdWx0L3NlbGVjdC9zZWxlY3Quc2NzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9idXR0b24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9idXR0b24vYnV0dG9uLnNjc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvaW5wdXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9pbnB1dC9pbnB1dC5zY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9hZGRpdGlvbmFsL2FsZXJ0L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2FkZGl0aW9uYWwvYWxlcnQvYWxlcnQuc2NzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvYWRkaXRpb25hbC9tZWRpYS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hZGRpdGlvbmFsL21lZGlhL21lZGlhLnNjc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2FkZGl0aW9uYWwvcGFnaW5hdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hZGRpdGlvbmFsL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5zY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9hZGRpdGlvbmFsL3RhYnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYWRkaXRpb25hbC90YWJzL3RhYnMuc2NzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvYWRkaXRpb25hbC9uYXYvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYWRkaXRpb25hbC9uYXYvbmF2LnNjc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2FkZGl0aW9uYWwvYnJlYWRjcnVtYnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYWRkaXRpb25hbC9icmVhZGNydW1icy9icmVhZGNydW1icy5zY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9hZGRpdGlvbmFsL3Byb2dyZXNzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2FkZGl0aW9uYWwvcHJvZ3Jlc3MvcHJvZ3Jlc3Muc2NzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvYWRkaXRpb25hbC9jb2xsYXBzZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hZGRpdGlvbmFsL2NvbGxhcHNlL2NvbGxhcHNlLnNjc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2FkZGl0aW9uYWwvdGh1bWJuYWlsL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2FkZGl0aW9uYWwvdGh1bWJuYWlsL3RodW1ibmFpbC5zY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9hZGRpdGlvbmFsL3BhbmVsL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2FkZGl0aW9uYWwvcGFuZWwvcGFuZWwuc2NzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvYWRkaXRpb25hbC9iYWRnZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hZGRpdGlvbmFsL2JhZGdlL2JhZGdlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9ncmlkL2dyaWQuc2NzcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIGRhYjVhMmUzM2Q0ZDFjNjI4YjczXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gVXRpbHNcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmltcG9ydCAnLi9jb21wb25lbnRzL3V0aWxzL25vcm1hbGl6ZSc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL3V0aWxzL3Jlc2V0JztcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIERlZmF1bHQgY29tcG9uZW50c1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLy8gQXBwbGljYXRpb25cclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvZGVmYXVsdC9hcHBsaWNhdGlvbic7XHJcblxyXG4vLyBDb250cm9sIHBhbmVsXHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2RlZmF1bHQvY29udHJvbC1wYW5lbCc7XHJcblxyXG4vLyBHcmlkIHN5c3RlbXNcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvZGVmYXVsdC9ncmlkJztcclxuXHJcbi8vIFR5cG9ncmFwaHlcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvZGVmYXVsdC90eXBvZ3JhcGh5JztcclxuXHJcbi8vIEltYWdlc1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9kZWZhdWx0L2ltYWdlLWFsdCc7XHJcblxyXG4vLyBGb3JtIGVsZW1lbnRzXHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2RlZmF1bHQvZm9ybSc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2RlZmF1bHQvbGFiZWwnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9kZWZhdWx0L3RleHRhcmVhJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvZGVmYXVsdC9yYWRpbyc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2RlZmF1bHQvY2hlY2tib3gnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9kZWZhdWx0L3NlbGVjdCc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2RlZmF1bHQvYnV0dG9uJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvZGVmYXVsdC9pbnB1dCc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2RlZmF1bHQvaW5wdXQnO1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gQWRkaXRpb25hbCBjb21wb25lbnRzXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vLyBBbGVydHNcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvYWRkaXRpb25hbC9hbGVydCc7XHJcblxyXG4vLyBNZWRpYSBvYmplY3RcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvYWRkaXRpb25hbC9tZWRpYSc7XHJcblxyXG4vLyBQYWdpbmF0aW9uXHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2FkZGl0aW9uYWwvcGFnaW5hdGlvbic7XHJcblxyXG4vLyBUYWJzXHJcbmltcG9ydCB7dGFic0luaXR9IGZyb20gJy4vY29tcG9uZW50cy9hZGRpdGlvbmFsL3RhYnMnO1xyXG5cclxuLy8gTmF2aWdhdGlvblxyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9hZGRpdGlvbmFsL25hdic7XHJcblxyXG4vLyBCcmVhZGNydW1ic1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9hZGRpdGlvbmFsL2JyZWFkY3J1bWJzJztcclxuXHJcbi8vIFByb2dyZXNzIGJhclxyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9hZGRpdGlvbmFsL3Byb2dyZXNzJztcclxuXHJcbi8vIENvbGxhcHNlXHJcbmltcG9ydCB7Y29sbGFwc2VJbml0fSBmcm9tICcuL2NvbXBvbmVudHMvYWRkaXRpb25hbC9jb2xsYXBzZSc7XHJcblxyXG4vLyBUaHVtYm5haWxcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvYWRkaXRpb25hbC90aHVtYm5haWwnO1xyXG5cclxuLy8gUGFuZWxzXHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2FkZGl0aW9uYWwvcGFuZWwnO1xyXG5cclxuLy8gQmFkZ2VcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvYWRkaXRpb25hbC9iYWRnZSc7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBJbml0aWFsaXphdGlvbiBAVE9ETzog0JzQvtC20L3QviDQvtCx0L7QudGC0LjRgdGMP1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuY29sbGFwc2VJbml0KCk7XHJcbnRhYnNJbml0KCk7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9hY2Nlc3NpYmlsaXR5LmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0ICcuL25vcm1hbGl6ZS5zY3NzJztcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvdXRpbHMvbm9ybWFsaXplL2luZGV4LmpzXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvdXRpbHMvbm9ybWFsaXplL25vcm1hbGl6ZS5zY3NzXG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0ICcuL3Jlc2V0LnNjc3MnO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy91dGlscy9yZXNldC9pbmRleC5qc1xuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL3V0aWxzL3Jlc2V0L3Jlc2V0LnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgJy4vYXBwbGljYXRpb24uc2Nzcyc7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL2RlZmF1bHQvYXBwbGljYXRpb24vaW5kZXguanNcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9kZWZhdWx0L2FwcGxpY2F0aW9uL2FwcGxpY2F0aW9uLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAxMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuLy8gQFRPRE86INCg0LXRhNCw0LrRgtC+0YDQuNC90LMg0LrQvtC80L/QvtC90LXQvdGC0LAuXHJcblxyXG5pbXBvcnQgY29va2llIGZyb20gJy4uLy4uL3V0aWxzL2Nvb2tpZSc7XHJcbmltcG9ydCAnLi9jb250cm9sLXBhbmVsLnNjc3MnO1xyXG5cclxuY29uc3QgQ09PS0lFX1BBVEggPSB7cGF0aDogJy8nfTtcclxuXHJcbmNsYXNzIENvbnRyb2xQYW5lbCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICBzZWxmLmFwcCA9ICQoJy5hcHBsaWNhdGlvbicpO1xyXG5cclxuICAgICAgICBzZWxmLnRleHRTZWxlY3QgPSAkKCcuY29udHJvbC1wYW5lbF9fc2VsZWN0LXRleHQnKTtcclxuICAgICAgICBzZWxmLmNvbG9yU2VsZWN0ID0gJCgnLmNvbnRyb2wtcGFuZWxfX3NlbGVjdC1jb2xvcicpO1xyXG4gICAgICAgIHNlbGYuaW1hZ2VTZWxlY3QgPSAkKCcuY29udHJvbC1wYW5lbF9fc2VsZWN0LWltYWdlJyk7XHJcblxyXG4gICAgICAgICFjb29raWUuZ2V0Q29va2llKCdhcHAtdGV4dCcpID8gY29va2llLnNldENvb2tpZSgnYXBwLXRleHQnLCAnbm9ybWFsJywgQ09PS0lFX1BBVEgpIDogZmFsc2U7XHJcbiAgICAgICAgIWNvb2tpZS5nZXRDb29raWUoJ2FwcC1jb2xvcicpID8gY29va2llLnNldENvb2tpZSgnYXBwLWNvbG9yJywgJ3doaXRlJywgQ09PS0lFX1BBVEgpIDogZmFsc2U7XHJcbiAgICAgICAgIWNvb2tpZS5nZXRDb29raWUoJ2FwcC1pbWFnZScpID8gY29va2llLnNldENvb2tpZSgnYXBwLWltYWdlJywgJ3Zpc2libGUnLCBDT09LSUVfUEFUSCkgOiBmYWxzZTtcclxuXHJcbiAgICAgICAgc2VsZi5zZXRBcHBsaWNhdGlvblN0eWxlcygpO1xyXG4gICAgICAgIHNlbGYud3JhcEltYWdlQWx0KCk7XHJcbiAgICAgICAgc2VsZi50b2dnbGVJbWFnZSgpO1xyXG5cclxuICAgICAgICBzZWxmLmhhbmRsZVRleHRDaGFuZ2UoKTtcclxuICAgICAgICBzZWxmLmhhbmRsZUNvbG9yQ2hhbmdlKCk7XHJcbiAgICAgICAgc2VsZi5oYW5kbGVJbWFnZUNoYW5nZSgpO1xyXG5cclxuICAgICAgICBzZWxmLmFwcC5hZGRDbGFzcygnYXBwbGljYXRpb25fc2hvdycpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVUZXh0Q2hhbmdlKCkge1xyXG5cclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgIHNlbGYudGV4dFNlbGVjdC52YWwoY29va2llLmdldENvb2tpZSgnYXBwLXRleHQnKSk7XHJcblxyXG4gICAgICAgIHNlbGYudGV4dFNlbGVjdC5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICBjb29raWUuc2V0Q29va2llKCdhcHAtdGV4dCcsICQodGhpcykudmFsKCksIENPT0tJRV9QQVRIKTtcclxuICAgICAgICAgICAgc2VsZi5zZXRBcHBsaWNhdGlvblN0eWxlcygpO1xyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQ29sb3JDaGFuZ2UoKSB7XHJcblxyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgc2VsZi5jb2xvclNlbGVjdC52YWwoY29va2llLmdldENvb2tpZSgnYXBwLWNvbG9yJykpO1xyXG5cclxuICAgICAgICBzZWxmLmNvbG9yU2VsZWN0Lm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAgIGNvb2tpZS5zZXRDb29raWUoJ2FwcC1jb2xvcicsICQodGhpcykudmFsKCksIENPT0tJRV9QQVRIKTtcclxuICAgICAgICAgICAgc2VsZi5zZXRBcHBsaWNhdGlvblN0eWxlcygpO1xyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlSW1hZ2VDaGFuZ2UoKSB7XHJcblxyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgc2VsZi5pbWFnZVNlbGVjdC52YWwoY29va2llLmdldENvb2tpZSgnYXBwLWltYWdlJykpO1xyXG5cclxuICAgICAgICBzZWxmLmltYWdlU2VsZWN0Lm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAgIGNvb2tpZS5zZXRDb29raWUoJ2FwcC1pbWFnZScsICQodGhpcykudmFsKCksIENPT0tJRV9QQVRIKTtcclxuICAgICAgICAgICAgc2VsZi5zZXRBcHBsaWNhdGlvblN0eWxlcygpO1xyXG5cclxuICAgICAgICAgICAgc2VsZi50b2dnbGVJbWFnZSgpO1xyXG5cclxuICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICB3cmFwSW1hZ2VBbHQoKSB7XHJcblxyXG4gICAgICAgICQoJ2ltZycpLm5vdCgnY29kZSBpbWcnKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAgICAgdmFyIGFsdCA9ICQodGhpcykuYXR0cignYWx0JyksXHJcbiAgICAgICAgICAgICAgICB3aWR0aCA9ICQodGhpcykud2lkdGgoKSxcclxuICAgICAgICAgICAgICAgIGhlaWdodCA9ICQodGhpcykuaGVpZ2h0KCk7XHJcblxyXG4gICAgICAgICAgICAkKHRoaXMpLndyYXAoYDxzcGFuIGNsYXNzPVwiaW1hZ2UtYWx0XCIgc3R5bGU9XCJ3aWR0aDogJHt3aWR0aH1weDsgaGVpZ2h0OiAke2hlaWdodH1weDtcIi8+YCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoYWx0ICE9ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmFmdGVyKGA8c3BhbiBjbGFzcz1cImltYWdlLWFsdF9fdGV4dFwiPiR7YWx0fTwvc3Bhbj5gKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykuYWZ0ZXIoJzxzcGFuIGNsYXNzPVwiaW1hZ2UtYWx0X190ZXh0XCI+0J7Qv9C40YHQsNC90LjQtSDQvtGC0YHRg9GC0YHRgtCy0YPQtdGCPC9zcGFuPicpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVJbWFnZSgpIHtcclxuXHJcbiAgICAgICAgaWYgKGNvb2tpZS5nZXRDb29raWUoJ2FwcC1pbWFnZScpID09ICdoaWRkZW4nKSB7XHJcbiAgICAgICAgICAgICQoJy5pbWFnZS1hbHQnKS5hZGRDbGFzcygnaW1hZ2UtYWx0X2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAkKCdpbWcnKS5ub3QoJ2NvZGUgaW1nJykuY3NzKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoJy5pbWFnZS1hbHQnKS5yZW1vdmVDbGFzcygnaW1hZ2UtYWx0X2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAkKCdpbWcnKS5ub3QoJ2NvZGUgaW1nJykuY3NzKCd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNldEFwcGxpY2F0aW9uU3R5bGVzKCkge1xyXG5cclxuICAgICAgICB0aGlzLmFwcC5hdHRyKCdkYXRhLXRleHQnLCBjb29raWUuZ2V0Q29va2llKCdhcHAtdGV4dCcpKTtcclxuICAgICAgICB0aGlzLmFwcC5hdHRyKCdkYXRhLWNvbG9yJywgY29va2llLmdldENvb2tpZSgnYXBwLWNvbG9yJykpO1xyXG4gICAgICAgIHRoaXMuYXBwLmF0dHIoJ2RhdGEtaW1hZ2UnLCBjb29raWUuZ2V0Q29va2llKCdhcHAtaW1hZ2UnKSk7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgQ29udHJvbFBhbmVsKCk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9jb250cm9sLXBhbmVsL2luZGV4LmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY2xhc3MgQ29va2llIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqINCS0L7Qt9Cy0YDQsNGJ0LDQtdGCIGNvb2tpZSDRgSDQuNC80LXQvdC10LwgbmFtZSwg0LXRgdC70Lgg0LXRgdGC0YwsINC10YHQu9C4INC90LXRgiwg0YLQviB1bmRlZmluZWRcclxuICAgICAqIEBwYXJhbSBuYW1lIC0g0LjQvNGPIGNvb2tpZVxyXG4gICAgICogQHJldHVybnMgeyp9XHJcbiAgICAgKi9cclxuICAgIGdldENvb2tpZShuYW1lKSB7XHJcbiAgICAgICAgdmFyIG1hdGNoZXMgPSBkb2N1bWVudC5jb29raWUubWF0Y2gobmV3IFJlZ0V4cChcclxuICAgICAgICAgICAgXCIoPzpefDsgKVwiICsgbmFtZS5yZXBsYWNlKC8oW1xcLiQ/Knx7fVxcKFxcKVxcW1xcXVxcXFxcXC9cXCteXSkvZywgJ1xcXFwkMScpICsgXCI9KFteO10qKVwiXHJcbiAgICAgICAgKSk7XHJcbiAgICAgICAgcmV0dXJuIG1hdGNoZXMgPyBkZWNvZGVVUklDb21wb25lbnQobWF0Y2hlc1sxXSkgOiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQo9GB0YLQsNC90LDQstC70LjQstCw0LXRgiBjb29raWUg0YEg0LjQvNC10L3QtdC8IG5hbWUg0Lgg0LfQvdCw0YfQtdC90LjQtdC8IHZhbHVlXHJcbiAgICAgKiBAcGFyYW0gbmFtZSAtINC40LzRjyBjb29raWVcclxuICAgICAqIEBwYXJhbSB2YWx1ZSAtINC30L3QsNGH0LXQvdC40LUgY29va2llXHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyAtINC+0LHRitC10LrRgiDRgSDRgdCy0L7QudGB0YLQstCw0LzQuCBjb29raWUgKGV4cGlyZXMsIHBhdGgsIGRvbWFpbiwgc2VjdXJlKVxyXG4gICAgICovXHJcbiAgICBzZXRDb29raWUobmFtZSwgdmFsdWUsIG9wdGlvbnMpIHtcclxuICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuXHJcbiAgICAgICAgdmFyIGV4cGlyZXMgPSBvcHRpb25zLmV4cGlyZXM7XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgZXhwaXJlcyA9PSBcIm51bWJlclwiICYmIGV4cGlyZXMpIHtcclxuICAgICAgICAgICAgdmFyIGQgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICBkLnNldFRpbWUoZC5nZXRUaW1lKCkgKyBleHBpcmVzICogMTAwMCk7XHJcbiAgICAgICAgICAgIGV4cGlyZXMgPSBvcHRpb25zLmV4cGlyZXMgPSBkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZXhwaXJlcyAmJiBleHBpcmVzLnRvVVRDU3RyaW5nKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMuZXhwaXJlcyA9IGV4cGlyZXMudG9VVENTdHJpbmcoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhbHVlID0gZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKTtcclxuXHJcbiAgICAgICAgdmFyIHVwZGF0ZWRDb29raWUgPSBuYW1lICsgXCI9XCIgKyB2YWx1ZTtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgcHJvcE5hbWUgaW4gb3B0aW9ucykge1xyXG4gICAgICAgICAgICB1cGRhdGVkQ29va2llICs9IFwiOyBcIiArIHByb3BOYW1lO1xyXG4gICAgICAgICAgICB2YXIgcHJvcFZhbHVlID0gb3B0aW9uc1twcm9wTmFtZV07XHJcbiAgICAgICAgICAgIGlmIChwcm9wVmFsdWUgIT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZWRDb29raWUgKz0gXCI9XCIgKyBwcm9wVmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IHVwZGF0ZWRDb29raWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQo9C00LDQu9GP0LXRgiBjb29raWUg0YEg0LjQvNC10L3QtdC8IG5hbWVcclxuICAgICAqIEBwYXJhbSBuYW1lIC0g0LjQvNGPIGNvb2tpZVxyXG4gICAgICovXHJcbiAgICBkZWxldGVDb29raWUobmFtZSkge1xyXG4gICAgICAgIHRoaXMuc2V0Q29va2llKG5hbWUsIFwiXCIsIHtcclxuICAgICAgICAgICAgZXhwaXJlczogLTFcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgQ29va2llKCk7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL3V0aWxzL2Nvb2tpZS9pbmRleC5qc1xuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvY29udHJvbC1wYW5lbC9jb250cm9sLXBhbmVsLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAxNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0ICcuL2dyaWQuc2Nzcyc7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL2RlZmF1bHQvZ3JpZC9pbmRleC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCAnLi90eXBvZ3JhcGh5LnNjc3MnO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9kZWZhdWx0L3R5cG9ncmFwaHkvaW5kZXguanNcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9kZWZhdWx0L3R5cG9ncmFwaHkvdHlwb2dyYXBoeS5zY3NzXG4gKiogbW9kdWxlIGlkID0gMjBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCAnLi9pbWFnZS1hbHQuc2Nzcyc7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL2RlZmF1bHQvaW1hZ2UtYWx0L2luZGV4LmpzXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9pbWFnZS1hbHQvaW1hZ2UtYWx0LnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAyM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0ICcuL2Zvcm0uc2Nzcyc7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL2RlZmF1bHQvZm9ybS9pbmRleC5qc1xuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvZm9ybS9mb3JtLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSAyNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0ICcuL2xhYmVsLnNjc3MnO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9kZWZhdWx0L2xhYmVsL2luZGV4LmpzXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9sYWJlbC9sYWJlbC5zY3NzXG4gKiogbW9kdWxlIGlkID0gMjlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCAnLi90ZXh0YXJlYS5zY3NzJztcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9kZWZhdWx0L3RleHRhcmVhL2luZGV4LmpzXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC90ZXh0YXJlYS90ZXh0YXJlYS5zY3NzXG4gKiogbW9kdWxlIGlkID0gMzJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbi8vIEBUT0RPOiDQoNC10YTQsNC60YLQvtGA0LjQvdCzINC60L7QvNC/0L7QvdC10L3RgtCwLlxyXG5cclxuaW1wb3J0ICcuL3JhZGlvLnNjc3MnO1xyXG5cclxudmFyIHJhZGlvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1yYWRpb10nKTtcclxuXHJcbmZ1bmN0aW9uIHJhZGlvVG9nZ2xlQXJpYSgpIHtcclxuICAgIC8v0YPQtNCw0LvRj9C10LwgYXJpYS1jaGVja2VkINGDINCy0YHQtdGFXHJcbiAgICB2YXIgZ3JvdXAgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZSh0aGlzLmdldEF0dHJpYnV0ZSgnbmFtZScpKTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZ3JvdXAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBncm91cFtpXS5zZXRBdHRyaWJ1dGUoJ2FyaWEtY2hlY2tlZCcsICdmYWxzZScpO1xyXG4gICAgfVxyXG4gICAgLy/RgdGC0LDQstC40Lwg0YLQvtC70YzQutC+INCy0YvQsdGA0LDQvdC+0LzRg1xyXG4gICAgdGhpcy5zZXRBdHRyaWJ1dGUoXCJhcmlhLWNoZWNrZWRcIiwgXCJ0cnVlXCIpO1xyXG4gICAgdGhpcy5mb2N1cygpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByYWRpb0V2ZW50SGFuZGxlcih0KSB7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB0W2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgcmFkaW9Ub2dnbGVBcmlhKTtcclxuICAgICAgICBpZih0W2ldLmRpc2FibGVkKSB7XHJcbiAgICAgICAgICAgIHRbaV0uc2V0QXR0cmlidXRlKCdhcmlhLWRpc2FibGVkJywgJ3RydWUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodFtpXS5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgIHRbaV0uc2V0QXR0cmlidXRlKCdhcmlhLWNoZWNrZWQnLCAndHJ1ZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICghdFtpXS5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgIHRbaV0uc2V0QXR0cmlidXRlKCdhcmlhLWNoZWNrZWQnLCAnZmFsc2UnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbnJhZGlvRXZlbnRIYW5kbGVyKHJhZGlvKTtcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9yYWRpby9pbmRleC5qc1xuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvcmFkaW8vcmFkaW8uc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDM1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG4vLyBAVE9ETzog0KDQtdGE0LDQutGC0L7RgNC40L3QsyDQutC+0LzQv9C+0L3QtdC90YLQsC5cclxuXHJcbmltcG9ydCAnLi9jaGVja2JveC5zY3NzJztcclxuXHJcbnZhciBjaGVja2JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9Y2hlY2tib3hdJyk7XHJcblxyXG5mdW5jdGlvbiBjaGVja2JveEV2ZW50SGFuZGxlcih0KSB7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB0W2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjaGVja2JveFRvZ2dsZUFyaWEpO1xyXG4gICAgICAgIGlmKHRbaV0uZGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgdFtpXS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGlzYWJsZWQnLCAndHJ1ZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0W2ldLmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgdFtpXS5zZXRBdHRyaWJ1dGUoJ2FyaWEtY2hlY2tlZCcsICd0cnVlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKCF0W2ldLmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgdFtpXS5zZXRBdHRyaWJ1dGUoJ2FyaWEtY2hlY2tlZCcsICdmYWxzZScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tib3hUb2dnbGVBcmlhKCkge1xyXG4gICAgaWYgKHRoaXMuZ2V0QXR0cmlidXRlKFwiYXJpYS1jaGVja2VkXCIpID09IFwiZmFsc2VcIikge1xyXG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKFwiYXJpYS1jaGVja2VkXCIsIFwidHJ1ZVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoXCJhcmlhLWNoZWNrZWRcIiwgXCJmYWxzZVwiKTtcclxuICAgIH1cclxuICAgIHRoaXMuZm9jdXMoKTtcclxufVxyXG5cclxuY2hlY2tib3hFdmVudEhhbmRsZXIoY2hlY2tib3gpO1xyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9jaGVja2JveC9pbmRleC5qc1xuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvY2hlY2tib3gvY2hlY2tib3guc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDM4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgJy4vc2VsZWN0LnNjc3MnO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9kZWZhdWx0L3NlbGVjdC9pbmRleC5qc1xuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvc2VsZWN0L3NlbGVjdC5zY3NzXG4gKiogbW9kdWxlIGlkID0gNDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCAnLi9idXR0b24uc2Nzcyc7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL2RlZmF1bHQvYnV0dG9uL2luZGV4LmpzXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9idXR0b24vYnV0dG9uLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA0NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0ICcuL2lucHV0LnNjc3MnO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9kZWZhdWx0L2lucHV0L2luZGV4LmpzXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvZGVmYXVsdC9pbnB1dC9pbnB1dC5zY3NzXG4gKiogbW9kdWxlIGlkID0gNDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCAnLi9hbGVydC5zY3NzJztcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvYWRkaXRpb25hbC9hbGVydC9pbmRleC5qc1xuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL2FkZGl0aW9uYWwvYWxlcnQvYWxlcnQuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDUwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgJy4vbWVkaWEuc2Nzcyc7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL2FkZGl0aW9uYWwvbWVkaWEvaW5kZXguanNcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9hZGRpdGlvbmFsL21lZGlhL21lZGlhLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA1M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0ICcuL3BhZ2luYXRpb24uc2Nzcyc7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL2FkZGl0aW9uYWwvcGFnaW5hdGlvbi9pbmRleC5qc1xuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL2FkZGl0aW9uYWwvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA1NlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuLy8gQFRPRE86INCg0LXRhNCw0LrRgtC+0YDQuNC90LMg0LrQvtC80L/QvtC90LXQvdGC0LAuXHJcblxyXG5pbXBvcnQgJy4vdGFicy5zY3NzJztcclxuXHJcbmZ1bmN0aW9uIGtleUNvZGVzKCkge1xyXG5cclxuICAgIHRoaXMudGFiID0gOTtcclxuICAgIHRoaXMuZW50ZXIgPSAxMztcclxuICAgIHRoaXMuZXNjID0gMjc7XHJcblxyXG4gICAgdGhpcy5zcGFjZSA9IDMyO1xyXG4gICAgdGhpcy5wYWdldXAgPSAzMztcclxuICAgIHRoaXMucGFnZWRvd24gPSAzNDtcclxuICAgIHRoaXMuZW5kID0gMzU7XHJcbiAgICB0aGlzLmhvbWUgPSAzNjtcclxuXHJcbiAgICB0aGlzLmxlZnQgPSAzNztcclxuICAgIHRoaXMudXAgPSAzODtcclxuICAgIHRoaXMucmlnaHQgPSAzOTtcclxuICAgIHRoaXMuZG93biA9IDQwO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRhYnNJbml0KCkge1xyXG4gICAgdmFyIHRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFicycpO1xyXG4gICAgW10uZm9yRWFjaC5jYWxsKHRhYnMsIGZ1bmN0aW9uICh0YWIpIHtcclxuICAgICAgICB2YXIgcGFuZWwgPSBuZXcgdGFicGFuZWwodGFiKTtcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIHRhYnBhbmVsKHRhYikge1xyXG4gICAgdGhpcy5wYW5lbCA9IHRhYjtcclxuICAgIHRoaXMua2V5cyA9IG5ldyBrZXlDb2RlcygpO1xyXG4gICAgdGhpcy50YWJzID0gdGFiLnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJzLWxpc3RfX2l0ZW0nKTtcclxuICAgIHRoaXMucGFuZWxzID0gdGFiLnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJzX19pbm5lcicpO1xyXG4gICAgdGhpcy5iaW5kSGFuZGxlcnMoKTtcclxuICAgIHRoaXMuaW5pdCgpO1xyXG59XHJcblxyXG50YWJwYW5lbC5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciB0YWI7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucGFuZWxzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdGhpcy5wYW5lbHNbaV0uc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGFiID0gdGhpcy5wYW5lbC5xdWVyeVNlbGVjdG9yKCdbYXJpYS1zZWxlY3RlZD1cInRydWVcIl0nKTtcclxuXHJcbiAgICB0aGlzLnBhbmVsLnF1ZXJ5U2VsZWN0b3IoJyMnICsgdGFiLmdldEF0dHJpYnV0ZSgnYXJpYS1jb250cm9scycpKS5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XHJcbn07XHJcblxyXG5cclxudGFicGFuZWwucHJvdG90eXBlLnN3aXRjaFRhYnMgPSBmdW5jdGlvbiAoJGN1clRhYiwgJG5ld1RhYikge1xyXG4gICAgJGN1clRhYi5jbGFzc0xpc3QucmVtb3ZlKCdmb2N1cycpO1xyXG5cclxuICAgICRjdXJUYWIuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICctMScpO1xyXG4gICAgJGN1clRhYi5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCAnZmFsc2UnKTtcclxuXHJcblxyXG4gICAgJG5ld1RhYi5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCAndHJ1ZScpO1xyXG4gICAgLy8gaGlkZSB0aGUgY3VycmVudCB0YWIgcGFuZWwgYW5kIHNldCBhcmlhLWhpZGRlbiB0byB0cnVlXHJcbiAgICB0aGlzLnBhbmVsLnF1ZXJ5U2VsZWN0b3IoJyMnICsgJGN1clRhYi5nZXRBdHRyaWJ1dGUoJ2FyaWEtY29udHJvbHMnKSkuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XHJcblxyXG4gICAgLy8gc2hvdyB0aGUgbmV3IHRhYiBwYW5lbCBhbmQgc2V0IGFyaWEtaGlkZGVuIHRvIGZhbHNlXHJcbiAgICB0aGlzLnBhbmVsLnF1ZXJ5U2VsZWN0b3IoJyMnICsgJG5ld1RhYi5nZXRBdHRyaWJ1dGUoJ2FyaWEtY29udHJvbHMnKSkuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xyXG5cclxuICAgICRuZXdUYWIuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICcwJyk7XHJcblxyXG4gICAgJG5ld1RhYi5mb2N1cygpO1xyXG5cclxufTtcclxuXHJcbnRhYnBhbmVsLnByb3RvdHlwZS5iaW5kSGFuZGxlcnMgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgdmFyIHRoaXNPYmogPSB0aGlzO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnRhYnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB0aGlzLnRhYnNbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXNPYmouaGFuZGxlVGFiS2V5RG93bih0aGlzLCBlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnRhYnNbaV0uYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpc09iai5oYW5kbGVUYWJLZXlQcmVzcyh0aGlzLCBlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnRhYnNbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpc09iai5oYW5kbGVUYWJDbGljayh0aGlzLCBlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnRhYnNbaV0uYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpc09iai5oYW5kbGVUYWJGb2N1cyh0aGlzLCBlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnRhYnNbaV0uYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzT2JqLmhhbmRsZVRhYkJsdXIodGhpcywgZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy50YWJzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpc09iai5oYW5kbGVQYW5lbEtleURvd24odGhpcywgZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy50YWJzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXNPYmouaGFuZGxlUGFuZWxLZXlQcmVzcyh0aGlzLCBlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG59O1xyXG50YWJwYW5lbC5wcm90b3R5cGUuaGFuZGxlVGFiS2V5RG93biA9IGZ1bmN0aW9uICh0YWIsIGUpIHtcclxuXHJcbiAgICBpZiAoZS5hbHRLZXkpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xyXG4gICAgICAgIGNhc2UgdGhpcy5rZXlzLmVudGVyOlxyXG4gICAgICAgIGNhc2UgdGhpcy5rZXlzLnNwYWNlOlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgdGhpcy5rZXlzLmxlZnQ6XHJcbiAgICAgICAgY2FzZSB0aGlzLmtleXMudXA6XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgdGhpc09iaiA9IHRoaXM7XHJcbiAgICAgICAgICAgIHZhciAkcHJldlRhYjtcclxuICAgICAgICAgICAgdmFyICRuZXdUYWI7XHJcbiAgICAgICAgICAgIGlmIChlLmN0cmxLZXkpIHtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHZhciBjdXJOZHggPSBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKHRoaXMudGFicywgdGFiKTtcclxuICAgICAgICAgICAgICAgIGlmIChjdXJOZHggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IHRoaXMudGFicy5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgJG5ld1RhYiA9IHRoaXMudGFic1tpbmRleCAtIDFdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJG5ld1RhYiA9IHRoaXMudGFic1tjdXJOZHggLSAxXTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnN3aXRjaFRhYnModGFiLCAkbmV3VGFiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIHRoaXMua2V5cy5yaWdodDpcclxuICAgICAgICBjYXNlIHRoaXMua2V5cy5kb3duOlxyXG4gICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgIHZhciB0aGlzT2JqID0gdGhpcztcclxuICAgICAgICAgICAgdmFyIGZvdW5kVGFiID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHZhciAkbmV3VGFiO1xyXG5cclxuICAgICAgICAgICAgdmFyIGN1ck5keCA9IEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwodGhpcy50YWJzLCB0YWIpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGN1ck5keCA9PSB0aGlzLnRhYnMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgJG5ld1RhYiA9IHRoaXMudGFic1swXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICRuZXdUYWIgPSB0aGlzLnRhYnNbY3VyTmR4ICsgMV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zd2l0Y2hUYWJzKHRhYiwgJG5ld1RhYik7XHJcblxyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgdGhpcy5rZXlzLmhvbWU6XHJcbiAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zd2l0Y2hUYWJzKHRhYiwgdGhpcy50YWJzLmZpcnN0KCkpO1xyXG5cclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIHRoaXMua2V5cy5lbmQ6XHJcbiAgICAgICAge1xyXG5cclxuXHJcbiAgICAgICAgICAgIHRoaXMuc3dpdGNoVGFicyh0YWIsIHRoaXMudGFicy5sYXN0KCkpO1xyXG5cclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxudGFicGFuZWwucHJvdG90eXBlLmhhbmRsZVRhYktleVByZXNzID0gZnVuY3Rpb24gKHRhYiwgZSkge1xyXG5cclxuICAgIGlmIChlLmFsdEtleSkge1xyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xyXG4gICAgICAgIGNhc2UgdGhpcy5rZXlzLmVudGVyOlxyXG4gICAgICAgIGNhc2UgdGhpcy5rZXlzLnNwYWNlOlxyXG4gICAgICAgIGNhc2UgdGhpcy5rZXlzLmxlZnQ6XHJcbiAgICAgICAgY2FzZSB0aGlzLmtleXMudXA6XHJcbiAgICAgICAgY2FzZSB0aGlzLmtleXMucmlnaHQ6XHJcbiAgICAgICAgY2FzZSB0aGlzLmtleXMuZG93bjpcclxuICAgICAgICBjYXNlIHRoaXMua2V5cy5ob21lOlxyXG4gICAgICAgIGNhc2UgdGhpcy5rZXlzLmVuZDpcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSB0aGlzLmtleXMucGFnZXVwOlxyXG4gICAgICAgIGNhc2UgdGhpcy5rZXlzLnBhZ2Vkb3duOlxyXG4gICAgICAgIHtcclxuXHJcblxyXG4gICAgICAgICAgICBpZiAoIWUuY3RybEtleSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcblxyXG59O1xyXG50YWJwYW5lbC5wcm90b3R5cGUuaGFuZGxlVGFiQ2xpY2sgPSBmdW5jdGlvbiAodGFiLCBlKSB7XHJcblxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnBhbmVscy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHRoaXMucGFuZWxzW2ldLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy50YWJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdGhpcy50YWJzW2ldLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnLTEnKTtcclxuICAgIH1cclxuXHJcbiAgICB0YWIuc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgJ3RydWUnKTtcclxuXHJcbiAgICB0aGlzLnBhbmVsLnF1ZXJ5U2VsZWN0b3IoJyMnICsgdGFiLmdldEF0dHJpYnV0ZSgnYXJpYS1jb250cm9scycpKS5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XHJcbiAgICB0YWIuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICcwJyk7XHJcbiAgICB0YWIuZm9jdXMoKTtcclxuICAgIHJldHVybiB0cnVlO1xyXG5cclxufTtcclxudGFicGFuZWwucHJvdG90eXBlLmhhbmRsZVRhYkZvY3VzID0gZnVuY3Rpb24gKHRhYiwgZSkge1xyXG4gICAgdGFiLmNsYXNzTGlzdC5hZGQoJ2ZvY3VzJyk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufTtcclxudGFicGFuZWwucHJvdG90eXBlLmhhbmRsZVRhYkJsdXIgPSBmdW5jdGlvbiAodGFiLCBlKSB7XHJcbiAgICB0YWIuY2xhc3NMaXN0LnJlbW92ZSgnZm9jdXMnKTtcclxuICAgIHJldHVybiB0cnVlO1xyXG59O1xyXG50YWJwYW5lbC5wcm90b3R5cGUuaGFuZGxlUGFuZWxLZXlEb3duID0gZnVuY3Rpb24gKCRlbGVtLCBlKSB7XHJcbiAgICBpZiAoZS5hbHRLZXkpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xyXG4gICAgICAgIGNhc2UgdGhpcy5rZXlzLmVzYzpcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSB0aGlzLmtleXMubGVmdDpcclxuICAgICAgICBjYXNlIHRoaXMua2V5cy51cDpcclxuICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWUuY3RybEtleSkge1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciB0YWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArICRlbGVtLmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbGxlZGJ5JykpO1xyXG4gICAgICAgICAgICB0YWIuZm9jdXMoKTtcclxuXHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSB0aGlzLmtleXMucGFnZXVwOlxyXG4gICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgIHZhciAkbmV3VGFiO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFlLmN0cmxLZXkpIHtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIHZhciB0YWIgPSB0aGlzLnRhYnMucXVlcnlTZWxlY3RvcignW2FyaWEtc2VsZWN0ZWQ9XCJ0cnVlXCJdJyk7XHJcblxyXG4gICAgICAgICAgICB2YXIgY3VyTmR4ID0gQXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbCh0aGlzLnRhYnMsIHRhYik7XHJcblxyXG4gICAgICAgICAgICBpZiAoY3VyTmR4ID09IDApIHtcclxuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IHRoaXMudGFicy5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAkbmV3VGFiID0gdGhpcy50YWJzW2luZGV4IC0gMV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkbmV3VGFiID0gdGhpcy50YWJzW2N1ck5keCAtIDFdO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLnN3aXRjaFRhYnModGFiLCAkbmV3VGFiKTtcclxuXHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIHRoaXMua2V5cy5wYWdlZG93bjpcclxuICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICB2YXIgJG5ld1RhYjtcclxuXHJcbiAgICAgICAgICAgIGlmICghZS5jdHJsS2V5KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICB2YXIgdGFiID0gJCgnIycgKyAkZWxlbS5hdHRyKCdhcmlhLWxhYmVsbGVkYnknKSk7XHJcblxyXG5cclxuICAgICAgICAgICAgdmFyIGN1ck5keCA9IEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwodGhpcy50YWJzLCB0YWIpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGN1ck5keCA9PSB0aGlzLnRhYnMubGVuZ3RoIC0gMSkge1xyXG5cclxuICAgICAgICAgICAgICAgICRuZXdUYWIgPSB0aGlzLnRhYnNbMF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkbmV3VGFiID0gdGhpcy50YWJzW2N1ck5keCArIDFdO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgdGhpcy5zd2l0Y2hUYWJzKHRhYiwgJG5ld1RhYik7XHJcblxyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcblxyXG59O1xyXG50YWJwYW5lbC5wcm90b3R5cGUuaGFuZGxlUGFuZWxLZXlQcmVzcyA9IGZ1bmN0aW9uICgkZWxlbSwgZSkge1xyXG5cclxuICAgIGlmIChlLmFsdEtleSkge1xyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZS5jdHJsS2V5ICYmIChlLmtleUNvZGUgPT0gdGhpcy5rZXlzLnBhZ2V1cCB8fCBlLmtleUNvZGUgPT0gdGhpcy5rZXlzLnBhZ2Vkb3duKSkge1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xyXG4gICAgICAgIGNhc2UgdGhpcy5rZXlzLmVzYzpcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuXHJcbn07XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL2FkZGl0aW9uYWwvdGFicy9pbmRleC5qc1xuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL2FkZGl0aW9uYWwvdGFicy90YWJzLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA1OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0ICcuL25hdi5zY3NzJztcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvYWRkaXRpb25hbC9uYXYvaW5kZXguanNcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9hZGRpdGlvbmFsL25hdi9uYXYuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDYyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgJy4vYnJlYWRjcnVtYnMuc2Nzcyc7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL2FkZGl0aW9uYWwvYnJlYWRjcnVtYnMvaW5kZXguanNcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9hZGRpdGlvbmFsL2JyZWFkY3J1bWJzL2JyZWFkY3J1bWJzLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA2NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0ICcuL3Byb2dyZXNzLnNjc3MnO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9hZGRpdGlvbmFsL3Byb2dyZXNzL2luZGV4LmpzXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvYWRkaXRpb25hbC9wcm9ncmVzcy9wcm9ncmVzcy5zY3NzXG4gKiogbW9kdWxlIGlkID0gNjhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbi8vIEBUT0RPOiDQoNC10YTQsNC60YLQvtGA0LjQvdCzINC60L7QvNC/0L7QvdC10L3RgtCwLlxyXG5cclxuaW1wb3J0ICcuL2NvbGxhcHNlLnNjc3MnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbGxhcHNlSW5pdCgpIHtcclxuICAgIHZhciBjb2xsYXBzZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29sbGFwc2UtYnV0dG9uJyk7XHJcbiAgICBbXS5mb3JFYWNoLmNhbGwoY29sbGFwc2VzLGZ1bmN0aW9uIChjb2xsYXBzZSkge1xyXG4gICAgICAgIHZhciBjb2xsYXBzZSA9IG5ldyBoaWRlU2hvdyhjb2xsYXBzZSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGlkZVNob3codGFyZ2V0KSB7XHJcbiAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcclxuICAgIHRoaXMucmVnaW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyB0aGlzLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2FyaWEtY29udHJvbHMnKSk7XHJcbiAgICB0aGlzLmtleXMgPSB7XHJcbiAgICAgICAgZW50ZXI6IDEzLFxyXG4gICAgICAgIHNwYWNlOiAzMlxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLnRvZ2dsZVNwZWVkID0gMTAwO1xyXG5cclxuICAgIHRoaXMuYmluZEhhbmRsZXJzKCk7XHJcblxyXG59XHJcblxyXG5cclxuaGlkZVNob3cucHJvdG90eXBlLmJpbmRIYW5kbGVycyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciB0aGlzT2JqID0gdGhpcztcclxuICAgIHRoaXMudGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICB0aGlzT2JqLnRvZ2dsZVJlZ2lvbigpO1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5cclxuaGlkZVNob3cucHJvdG90eXBlLnRvZ2dsZVJlZ2lvbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciB0aGlzT2JqID0gdGhpcy5yZWdpb247XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzT2JqKTtcclxuICAgIHRoaXMucmVnaW9uLmNsYXNzTGlzdC50b2dnbGUoJ2NvbGxhcHNlJyk7XHJcbiAgICAgICAgaWYgKHRoaXNPYmouZ2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJykgPT0gJ2ZhbHNlJykge1xyXG4gICAgICAgICAgICB0aGlzT2JqLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICd0cnVlJyk7XHJcbiAgICAgICAgICAgIHRoaXNPYmouZm9jdXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXNPYmouc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XHJcbiAgICAgICAgfVxyXG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL2FkZGl0aW9uYWwvY29sbGFwc2UvaW5kZXguanNcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9hZGRpdGlvbmFsL2NvbGxhcHNlL2NvbGxhcHNlLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA3MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0ICcuL3RodW1ibmFpbC5zY3NzJztcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvYWRkaXRpb25hbC90aHVtYm5haWwvaW5kZXguanNcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9hZGRpdGlvbmFsL3RodW1ibmFpbC90aHVtYm5haWwuc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDc0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgJy4vcGFuZWwuc2Nzcyc7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL2FkZGl0aW9uYWwvcGFuZWwvaW5kZXguanNcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9hZGRpdGlvbmFsL3BhbmVsL3BhbmVsLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA3N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0ICcuL2JhZGdlLnNjc3MnO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9hZGRpdGlvbmFsL2JhZGdlL2luZGV4LmpzXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvYWRkaXRpb25hbC9iYWRnZS9iYWRnZS5zY3NzXG4gKiogbW9kdWxlIGlkID0gODBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL2RlZmF1bHQvZ3JpZC9ncmlkLnNjc3NcbiAqKiBtb2R1bGUgaWQgPSA4MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3RDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFBQTtBQUNBO0FBTUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQU9BO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7QUNqRkE7QUFDQTtBQUNBOzs7Ozs7QUNGQTs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBOzs7Ozs7QUNGQTs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTs7Ozs7O0FDRkE7Ozs7Ozs7QUNBQTtBQUNBOzs7Ozs7Ozs7QUFHQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7QUFHQTs7Ozs7O0FDOUhBO0FBQ0E7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztBQU9BO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQUtBO0FBQ0E7QUFDQTtBQURBO0FBR0E7Ozs7OztBQUdBOzs7Ozs7QUM5REE7Ozs7Ozs7OztBQ0FBOzs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTs7Ozs7O0FDRkE7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7Ozs7OztBQ0ZBOzs7Ozs7O0FDQUE7QUFDQTtBQUNBOzs7Ozs7QUNGQTs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTs7Ozs7O0FDRkE7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7Ozs7OztBQ0ZBOzs7Ozs7O0FDQUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNqQ0E7Ozs7Ozs7QUNBQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUMvQkE7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7Ozs7OztBQ0ZBOzs7Ozs7O0FDQUE7QUFDQTtBQUNBOzs7Ozs7QUNGQTs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTs7Ozs7O0FDRkE7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7Ozs7OztBQ0ZBOzs7Ozs7O0FDQUE7QUFDQTtBQUNBOzs7Ozs7QUNGQTs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTs7Ozs7O0FDRkE7Ozs7Ozs7QUNBQTtBQUNBOzs7Ozs7QUF3QkE7QUFDQTtBQXRCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFuRUE7QUFxRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXhCQTtBQUNBO0FBMEJBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBL0VBO0FBQ0E7QUFpRkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUNBO0FBUUE7QUFFQTs7Ozs7O0FDbFdBOzs7Ozs7O0FDQUE7QUFDQTtBQUNBOzs7Ozs7QUNGQTs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTs7Ozs7O0FDRkE7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7Ozs7OztBQ0ZBOzs7Ozs7O0FDQUE7QUFDQTs7Ozs7O0FBS0E7QUFDQTtBQUhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7QUNoREE7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7Ozs7OztBQ0ZBOzs7Ozs7O0FDQUE7QUFDQTtBQUNBOzs7Ozs7QUNGQTs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTs7Ozs7O0FDRkE7Ozs7Ozs7QUNBQTs7OyIsInNvdXJjZVJvb3QiOiIifQ==