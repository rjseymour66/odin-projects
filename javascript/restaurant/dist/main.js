/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createAbout: () => (/* binding */ createAbout)
/* harmony export */ });
const p1Text = 'Located on the edge of City Square Park in Charlestown – this restaurant is an energetic Italian celebration of reimagined classics. Our beautifully restored grand bar and dining room – which overlooks the park as well as the city skyline – strives to honor our building’s past and its prestigious placement at the gate of this historic Boston neighborhood';

const p2Text = 'Open daily for lunch and dinner, Prima’s hand-crafted menu has been meticulously curated to provide our guests an incredible dining experience at any time of the day.';

const createAbout = () => {

    let main = document.createElement('main');
    main.classList.add('about-main');

    const section = document.createElement('section');

    const p1 = document.createElement('p');
    p1.classList.add('about-para');
    p1.textContent = p1Text;

    const p2 = document.createElement('p');
    p2.classList.add('about-para');
    p2.textContent = p2Text;

    section.appendChild(p1);
    section.appendChild(p2);

    main.appendChild(section);

    return main;
};



/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createFooter: () => (/* binding */ createFooter)
/* harmony export */ });
let createFooter = () => {
    let footer = document.createElement('footer');
    footer.classList.add('footer');

    let location = document.createElement('p');
    location.classList.add('location');
    location.textContent = '100 Main Street, Boston MA';

    let phone = document.createElement('p');
    phone.classList.add('phone');
    phone.textContent = '617-123-4321';

    let email = document.createElement('p');
    email.classList.add('email');
    email.textContent = 'info@restaurant.com';

    footer.appendChild(location);
    footer.appendChild(phone);
    footer.appendChild(email);

    return footer;
};



/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createHeader: () => (/* binding */ createHeader)
/* harmony export */ });
const createSiteNav = () => {
    let nav = document.createElement('nav');
    nav.classList.add('main-header__nav');

    let ul = document.createElement('ul');
    ul.classList.add('site-nav');
    // create a tags
    let homeLink = document.createElement('button');
    homeLink.href = '#';
    homeLink.textContent = 'Home';
    homeLink.classList.add('active');

    let menuLink = document.createElement('button');
    menuLink.href = '#';
    menuLink.textContent = 'Menu';

    let aboutLink = document.createElement('button');
    aboutLink.href = '#';
    aboutLink.textContent = 'About';

    // create lis
    let homeLi = document.createElement('li');
    let menuLi = document.createElement('li');
    let aboutLi = document.createElement('li');

    homeLi.appendChild(homeLink);
    menuLi.appendChild(menuLink);
    aboutLi.appendChild(aboutLink);

    ul.appendChild(homeLi);
    ul.appendChild(menuLi);
    ul.appendChild(aboutLi);

    nav.appendChild(ul);

    return nav;
};


const createHeader = () => {
    let nav = createSiteNav();

    let header = document.createElement('header');
    header.classList.add('main-header');

    let h1 = document.createElement('h1');
    h1.classList.add('main-header__heading');
    h1.textContent = 'Restaurant Name';

    header.appendChild(h1);
    header.appendChild(nav);

    return header;
};



/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createHomeMain: () => (/* binding */ createHomeMain)
/* harmony export */ });
let createHomeMain = () => {
    let main = document.createElement('main');
    main.classList.add('section-content');

    let p = document.createElement('p');
    p.classList.add('home-text');
    p.textContent = 'This restaurant rocks and everyone likes it. A lot. A whole lot. We have fancy food and awesome drinks and these drinks are gonna be awesome.';

    main.appendChild(p);

    return main;
};






/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createMenuMain: () => (/* binding */ createMenuMain)
/* harmony export */ });
/* harmony import */ var _data_cocktails_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/cocktails.json */ "./src/data/cocktails.json");
/* harmony import */ var _data_starters_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/starters.json */ "./src/data/starters.json");
/* harmony import */ var _data_main_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data/main.json */ "./src/data/main.json");
/* harmony import */ var _data_desserts_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data/desserts.json */ "./src/data/desserts.json");





let createMenuList = (menuList) => {
    // create the ul
    let ul = document.createElement('ul');
    ul.classList.add('cocktail-list');
    ul.classList.add('menu-list');

    for (let item of menuList) {
        //// create li
        let li = document.createElement('li');
        li.classList.add('list-item');

        //// create p
        let p = document.createElement('p');
        p.classList.add('item-desc');

        //// create item-name span
        let nameSpan = document.createElement('span');

        //// add span.textContent
        nameSpan.textContent = item.name;
        nameSpan.classList.add('item-name');

        //// create item-price span
        let priceSpan = document.createElement('span');
        priceSpan.classList.add('item-price');

        //// add span.textContent
        priceSpan.textContent = item.price;

        //// add p.textContent
        p.textContent = item.description;

        p.prepend(nameSpan);

        // append item-price span to p
        p.appendChild(priceSpan);

        // append p to li
        li.appendChild(p);

        // append li to ul
        ul.appendChild(li);
    }
    return ul;
};

const createMenuSection = (sectionTitle, JSONdata) => {
    // create section
    let section = document.createElement('section');
    section.classList.add('menu-section');

    // create h2
    let h2 = document.createElement('h2');
    h2.classList.add('section-title');
    h2.textContent = sectionTitle;

    // create cocktail list
    let ul = createMenuList(JSONdata);

    // append h2 to section
    section.appendChild(h2);
    // append ul to section
    section.appendChild(ul);

    return section;
};

let createMenuMain = () => {
    const main = document.createElement('menu');
    main.classList.add('menu');

    const cocktailSection = createMenuSection('cocktails', _data_cocktails_json__WEBPACK_IMPORTED_MODULE_0__);
    const starterSection = createMenuSection('starters', _data_starters_json__WEBPACK_IMPORTED_MODULE_1__);
    const mainSection = createMenuSection('main', _data_main_json__WEBPACK_IMPORTED_MODULE_2__);
    const dessertSection = createMenuSection('dessert', _data_desserts_json__WEBPACK_IMPORTED_MODULE_3__);

    main.appendChild(cocktailSection);
    main.appendChild(starterSection);
    main.appendChild(mainSection);
    main.appendChild(dessertSection);

    return main;
};



/***/ }),

/***/ "./src/data/cocktails.json":
/*!*********************************!*\
  !*** ./src/data/cocktails.json ***!
  \*********************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"name":"House Martini","description":"Olive oil infused Hendrick\'s gin, vermouth, olives","price":"$20"},{"name":"Manhattan","description":"Bourbon, barolo chinato, cacao bitters","price":"$16"},{"name":"Classic Negroni","description":"Dry gin, sweet vermouth, campari","price":"$14"},{"name":"Aperol Spritz","description":"Aperol, prosecco, soda","price":"$14"},{"name":"Espresso Martini","description":"Vodka, coffee liquer, espresso, bitters, amaro","price":"$16"}]');

/***/ }),

/***/ "./src/data/desserts.json":
/*!********************************!*\
  !*** ./src/data/desserts.json ***!
  \********************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"name":"Olive oil chocolate mousse","description":"Dark Italian cocoa, whipped cream, blueberries, cocao nibs","price":"$10"},{"name":"Torta gialla","description":"Yellow cake, chocolate fudge buttercream","price":"$10"}]');

/***/ }),

/***/ "./src/data/main.json":
/*!****************************!*\
  !*** ./src/data/main.json ***!
  \****************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"name":"Chicken picatta","description":"Lemon caper butter sauce, penne","price":"$26"},{"name":"Chicken or veal chop milanese","description":"Confit tomato, pickled peppers, ricotta, kale","price":"$26/$42"},{"name":"Ribeye","description":"Brandt beef, boneless 16 oz.","price":"$65"},{"name":"Filet mignon","description":"Brandt beef, 12 oz.","price":"$55"},{"name":"Veal prime rib","description":"Mushroom, au jus, horseradish and goat cheese crema","price":"$45"},{"name":"Dry-aged florentine porterhouse","description":"Autumn caponata, concord grape jus, chili-garlic salsa verde","price":"$150"}]');

/***/ }),

/***/ "./src/data/starters.json":
/*!********************************!*\
  !*** ./src/data/starters.json ***!
  \********************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"name":"Bruschetta alla Trapanese","description":"Tomato-almond pesto, ricotta","price":"$12"},{"name":"Meatballs","description":"Roasted tomato ragu, pecorino, parsley","price":"$12"},{"name":"Mussels & Clams","description":"Herb gremolata, white beans, prosecco, salsa bomba, focaccia","price":"$21"},{"name":"Caesar salad","description":"Kale & herb dressing, baby lettuces, pecorino, breadcrumbs","price":"$18"}]');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ "./src/header.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer */ "./src/footer.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about */ "./src/about.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu */ "./src/menu.js");







const header = (0,_header__WEBPACK_IMPORTED_MODULE_0__.createHeader)();
const homeMain = (0,_home__WEBPACK_IMPORTED_MODULE_2__.createHomeMain)();
const menuMain = (0,_menu__WEBPACK_IMPORTED_MODULE_4__.createMenuMain)();
const aboutMain = (0,_about__WEBPACK_IMPORTED_MODULE_3__.createAbout)();
const footer = (0,_footer__WEBPACK_IMPORTED_MODULE_1__.createFooter)();


// DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    const content = document.querySelector('#content');

    // add the header that displays home by default
    content.appendChild(header);
    content.appendChild(homeMain);
    content.appendChild(footer);

    // set up event listeners on buttons
    const navButtons = document.querySelectorAll('button');
    navButtons.forEach(button => {
        button.addEventListener('click', e => {
            navButtons.forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');

            switch (e.target.textContent) {
                case 'Home':
                    renderPage(homeMain);
                    break;
                case 'Menu':
                    renderPage(menuMain);
                    break;
                case 'About':
                    renderPage(aboutMain);
                    break;
                default:
                    break;
            }
        });
    });
});

let clearUI = (container) => {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
};

const renderPage = (contentMain) => {
    clearUI(content);
    content.appendChild(header);
    content.appendChild(contentMain);
    content.appendChild(footer);
};
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDckJBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyREE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hrRDtBQUNGO0FBQ1I7QUFDUTs7QUFFaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDJEQUEyRCxpREFBYTtBQUN4RSx5REFBeUQsZ0RBQVk7QUFDckUsa0RBQWtELDRDQUFRO0FBQzFELHdEQUF3RCxnREFBWTs7QUFFcEU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdkZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7O0FDTndDO0FBQ0E7QUFDQTtBQUNGOztBQUVFOztBQUV4QyxlQUFlLHFEQUFZO0FBQzNCLGlCQUFpQixxREFBYztBQUMvQixpQkFBaUIscURBQWM7QUFDL0Isa0JBQWtCLG1EQUFXO0FBQzdCLGVBQWUscURBQVk7OztBQUczQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2Fib3V0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvZm9vdGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaGVhZGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcDFUZXh0ID0gJ0xvY2F0ZWQgb24gdGhlIGVkZ2Ugb2YgQ2l0eSBTcXVhcmUgUGFyayBpbiBDaGFybGVzdG93biDigJMgdGhpcyByZXN0YXVyYW50IGlzIGFuIGVuZXJnZXRpYyBJdGFsaWFuIGNlbGVicmF0aW9uIG9mIHJlaW1hZ2luZWQgY2xhc3NpY3MuIE91ciBiZWF1dGlmdWxseSByZXN0b3JlZCBncmFuZCBiYXIgYW5kIGRpbmluZyByb29tIOKAkyB3aGljaCBvdmVybG9va3MgdGhlIHBhcmsgYXMgd2VsbCBhcyB0aGUgY2l0eSBza3lsaW5lIOKAkyBzdHJpdmVzIHRvIGhvbm9yIG91ciBidWlsZGluZ+KAmXMgcGFzdCBhbmQgaXRzIHByZXN0aWdpb3VzIHBsYWNlbWVudCBhdCB0aGUgZ2F0ZSBvZiB0aGlzIGhpc3RvcmljIEJvc3RvbiBuZWlnaGJvcmhvb2QnO1xuXG5jb25zdCBwMlRleHQgPSAnT3BlbiBkYWlseSBmb3IgbHVuY2ggYW5kIGRpbm5lciwgUHJpbWHigJlzIGhhbmQtY3JhZnRlZCBtZW51IGhhcyBiZWVuIG1ldGljdWxvdXNseSBjdXJhdGVkIHRvIHByb3ZpZGUgb3VyIGd1ZXN0cyBhbiBpbmNyZWRpYmxlIGRpbmluZyBleHBlcmllbmNlIGF0IGFueSB0aW1lIG9mIHRoZSBkYXkuJztcblxuY29uc3QgY3JlYXRlQWJvdXQgPSAoKSA9PiB7XG5cbiAgICBsZXQgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ2Fib3V0LW1haW4nKTtcblxuICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG5cbiAgICBjb25zdCBwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwMS5jbGFzc0xpc3QuYWRkKCdhYm91dC1wYXJhJyk7XG4gICAgcDEudGV4dENvbnRlbnQgPSBwMVRleHQ7XG5cbiAgICBjb25zdCBwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwMi5jbGFzc0xpc3QuYWRkKCdhYm91dC1wYXJhJyk7XG4gICAgcDIudGV4dENvbnRlbnQgPSBwMlRleHQ7XG5cbiAgICBzZWN0aW9uLmFwcGVuZENoaWxkKHAxKTtcbiAgICBzZWN0aW9uLmFwcGVuZENoaWxkKHAyKTtcblxuICAgIG1haW4uYXBwZW5kQ2hpbGQoc2VjdGlvbik7XG5cbiAgICByZXR1cm4gbWFpbjtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZUFib3V0IH07IiwibGV0IGNyZWF0ZUZvb3RlciA9ICgpID0+IHtcbiAgICBsZXQgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpO1xuXG4gICAgbGV0IGxvY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGxvY2F0aW9uLmNsYXNzTGlzdC5hZGQoJ2xvY2F0aW9uJyk7XG4gICAgbG9jYXRpb24udGV4dENvbnRlbnQgPSAnMTAwIE1haW4gU3RyZWV0LCBCb3N0b24gTUEnO1xuXG4gICAgbGV0IHBob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHBob25lLmNsYXNzTGlzdC5hZGQoJ3Bob25lJyk7XG4gICAgcGhvbmUudGV4dENvbnRlbnQgPSAnNjE3LTEyMy00MzIxJztcblxuICAgIGxldCBlbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBlbWFpbC5jbGFzc0xpc3QuYWRkKCdlbWFpbCcpO1xuICAgIGVtYWlsLnRleHRDb250ZW50ID0gJ2luZm9AcmVzdGF1cmFudC5jb20nO1xuXG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGxvY2F0aW9uKTtcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQocGhvbmUpO1xuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChlbWFpbCk7XG5cbiAgICByZXR1cm4gZm9vdGVyO1xufTtcblxuZXhwb3J0IHsgY3JlYXRlRm9vdGVyIH07IiwiY29uc3QgY3JlYXRlU2l0ZU5hdiA9ICgpID0+IHtcbiAgICBsZXQgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG4gICAgbmF2LmNsYXNzTGlzdC5hZGQoJ21haW4taGVhZGVyX19uYXYnKTtcblxuICAgIGxldCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgdWwuY2xhc3NMaXN0LmFkZCgnc2l0ZS1uYXYnKTtcbiAgICAvLyBjcmVhdGUgYSB0YWdzXG4gICAgbGV0IGhvbWVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgaG9tZUxpbmsuaHJlZiA9ICcjJztcbiAgICBob21lTGluay50ZXh0Q29udGVudCA9ICdIb21lJztcbiAgICBob21lTGluay5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcblxuICAgIGxldCBtZW51TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG1lbnVMaW5rLmhyZWYgPSAnIyc7XG4gICAgbWVudUxpbmsudGV4dENvbnRlbnQgPSAnTWVudSc7XG5cbiAgICBsZXQgYWJvdXRMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWJvdXRMaW5rLmhyZWYgPSAnIyc7XG4gICAgYWJvdXRMaW5rLnRleHRDb250ZW50ID0gJ0Fib3V0JztcblxuICAgIC8vIGNyZWF0ZSBsaXNcbiAgICBsZXQgaG9tZUxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsZXQgbWVudUxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsZXQgYWJvdXRMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cbiAgICBob21lTGkuYXBwZW5kQ2hpbGQoaG9tZUxpbmspO1xuICAgIG1lbnVMaS5hcHBlbmRDaGlsZChtZW51TGluayk7XG4gICAgYWJvdXRMaS5hcHBlbmRDaGlsZChhYm91dExpbmspO1xuXG4gICAgdWwuYXBwZW5kQ2hpbGQoaG9tZUxpKTtcbiAgICB1bC5hcHBlbmRDaGlsZChtZW51TGkpO1xuICAgIHVsLmFwcGVuZENoaWxkKGFib3V0TGkpO1xuXG4gICAgbmF2LmFwcGVuZENoaWxkKHVsKTtcblxuICAgIHJldHVybiBuYXY7XG59O1xuXG5cbmNvbnN0IGNyZWF0ZUhlYWRlciA9ICgpID0+IHtcbiAgICBsZXQgbmF2ID0gY3JlYXRlU2l0ZU5hdigpO1xuXG4gICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdtYWluLWhlYWRlcicpO1xuXG4gICAgbGV0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBoMS5jbGFzc0xpc3QuYWRkKCdtYWluLWhlYWRlcl9faGVhZGluZycpO1xuICAgIGgxLnRleHRDb250ZW50ID0gJ1Jlc3RhdXJhbnQgTmFtZSc7XG5cbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaDEpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChuYXYpO1xuXG4gICAgcmV0dXJuIGhlYWRlcjtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZUhlYWRlciB9OyIsImxldCBjcmVhdGVIb21lTWFpbiA9ICgpID0+IHtcbiAgICBsZXQgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ3NlY3Rpb24tY29udGVudCcpO1xuXG4gICAgbGV0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcC5jbGFzc0xpc3QuYWRkKCdob21lLXRleHQnKTtcbiAgICBwLnRleHRDb250ZW50ID0gJ1RoaXMgcmVzdGF1cmFudCByb2NrcyBhbmQgZXZlcnlvbmUgbGlrZXMgaXQuIEEgbG90LiBBIHdob2xlIGxvdC4gV2UgaGF2ZSBmYW5jeSBmb29kIGFuZCBhd2Vzb21lIGRyaW5rcyBhbmQgdGhlc2UgZHJpbmtzIGFyZSBnb25uYSBiZSBhd2Vzb21lLic7XG5cbiAgICBtYWluLmFwcGVuZENoaWxkKHApO1xuXG4gICAgcmV0dXJuIG1haW47XG59O1xuXG5cblxuXG5leHBvcnQgeyBjcmVhdGVIb21lTWFpbiB9OyIsImltcG9ydCBjb2NrdGFpbHNKU09OIGZyb20gJy4vZGF0YS9jb2NrdGFpbHMuanNvbic7XG5pbXBvcnQgc3RhcnRlcnNKU09OIGZyb20gJy4vZGF0YS9zdGFydGVycy5qc29uJztcbmltcG9ydCBtYWluSlNPTiBmcm9tICcuL2RhdGEvbWFpbi5qc29uJztcbmltcG9ydCBkZXNzZXJ0c0pTT04gZnJvbSAnLi9kYXRhL2Rlc3NlcnRzLmpzb24nO1xuXG5sZXQgY3JlYXRlTWVudUxpc3QgPSAobWVudUxpc3QpID0+IHtcbiAgICAvLyBjcmVhdGUgdGhlIHVsXG4gICAgbGV0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICB1bC5jbGFzc0xpc3QuYWRkKCdjb2NrdGFpbC1saXN0Jyk7XG4gICAgdWwuY2xhc3NMaXN0LmFkZCgnbWVudS1saXN0Jyk7XG5cbiAgICBmb3IgKGxldCBpdGVtIG9mIG1lbnVMaXN0KSB7XG4gICAgICAgIC8vLy8gY3JlYXRlIGxpXG4gICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGxpLmNsYXNzTGlzdC5hZGQoJ2xpc3QtaXRlbScpO1xuXG4gICAgICAgIC8vLy8gY3JlYXRlIHBcbiAgICAgICAgbGV0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHAuY2xhc3NMaXN0LmFkZCgnaXRlbS1kZXNjJyk7XG5cbiAgICAgICAgLy8vLyBjcmVhdGUgaXRlbS1uYW1lIHNwYW5cbiAgICAgICAgbGV0IG5hbWVTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXG4gICAgICAgIC8vLy8gYWRkIHNwYW4udGV4dENvbnRlbnRcbiAgICAgICAgbmFtZVNwYW4udGV4dENvbnRlbnQgPSBpdGVtLm5hbWU7XG4gICAgICAgIG5hbWVTcGFuLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tbmFtZScpO1xuXG4gICAgICAgIC8vLy8gY3JlYXRlIGl0ZW0tcHJpY2Ugc3BhblxuICAgICAgICBsZXQgcHJpY2VTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBwcmljZVNwYW4uY2xhc3NMaXN0LmFkZCgnaXRlbS1wcmljZScpO1xuXG4gICAgICAgIC8vLy8gYWRkIHNwYW4udGV4dENvbnRlbnRcbiAgICAgICAgcHJpY2VTcGFuLnRleHRDb250ZW50ID0gaXRlbS5wcmljZTtcblxuICAgICAgICAvLy8vIGFkZCBwLnRleHRDb250ZW50XG4gICAgICAgIHAudGV4dENvbnRlbnQgPSBpdGVtLmRlc2NyaXB0aW9uO1xuXG4gICAgICAgIHAucHJlcGVuZChuYW1lU3Bhbik7XG5cbiAgICAgICAgLy8gYXBwZW5kIGl0ZW0tcHJpY2Ugc3BhbiB0byBwXG4gICAgICAgIHAuYXBwZW5kQ2hpbGQocHJpY2VTcGFuKTtcblxuICAgICAgICAvLyBhcHBlbmQgcCB0byBsaVxuICAgICAgICBsaS5hcHBlbmRDaGlsZChwKTtcblxuICAgICAgICAvLyBhcHBlbmQgbGkgdG8gdWxcbiAgICAgICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xuICAgIH1cbiAgICByZXR1cm4gdWw7XG59O1xuXG5jb25zdCBjcmVhdGVNZW51U2VjdGlvbiA9IChzZWN0aW9uVGl0bGUsIEpTT05kYXRhKSA9PiB7XG4gICAgLy8gY3JlYXRlIHNlY3Rpb25cbiAgICBsZXQgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBzZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ21lbnUtc2VjdGlvbicpO1xuXG4gICAgLy8gY3JlYXRlIGgyXG4gICAgbGV0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBoMi5jbGFzc0xpc3QuYWRkKCdzZWN0aW9uLXRpdGxlJyk7XG4gICAgaDIudGV4dENvbnRlbnQgPSBzZWN0aW9uVGl0bGU7XG5cbiAgICAvLyBjcmVhdGUgY29ja3RhaWwgbGlzdFxuICAgIGxldCB1bCA9IGNyZWF0ZU1lbnVMaXN0KEpTT05kYXRhKTtcblxuICAgIC8vIGFwcGVuZCBoMiB0byBzZWN0aW9uXG4gICAgc2VjdGlvbi5hcHBlbmRDaGlsZChoMik7XG4gICAgLy8gYXBwZW5kIHVsIHRvIHNlY3Rpb25cbiAgICBzZWN0aW9uLmFwcGVuZENoaWxkKHVsKTtcblxuICAgIHJldHVybiBzZWN0aW9uO1xufTtcblxubGV0IGNyZWF0ZU1lbnVNYWluID0gKCkgPT4ge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtZW51Jyk7XG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XG5cbiAgICBjb25zdCBjb2NrdGFpbFNlY3Rpb24gPSBjcmVhdGVNZW51U2VjdGlvbignY29ja3RhaWxzJywgY29ja3RhaWxzSlNPTik7XG4gICAgY29uc3Qgc3RhcnRlclNlY3Rpb24gPSBjcmVhdGVNZW51U2VjdGlvbignc3RhcnRlcnMnLCBzdGFydGVyc0pTT04pO1xuICAgIGNvbnN0IG1haW5TZWN0aW9uID0gY3JlYXRlTWVudVNlY3Rpb24oJ21haW4nLCBtYWluSlNPTik7XG4gICAgY29uc3QgZGVzc2VydFNlY3Rpb24gPSBjcmVhdGVNZW51U2VjdGlvbignZGVzc2VydCcsIGRlc3NlcnRzSlNPTik7XG5cbiAgICBtYWluLmFwcGVuZENoaWxkKGNvY2t0YWlsU2VjdGlvbik7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChzdGFydGVyU2VjdGlvbik7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChtYWluU2VjdGlvbik7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChkZXNzZXJ0U2VjdGlvbik7XG5cbiAgICByZXR1cm4gbWFpbjtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZU1lbnVNYWluIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBjcmVhdGVIZWFkZXIgfSBmcm9tICcuL2hlYWRlcic7XG5pbXBvcnQgeyBjcmVhdGVGb290ZXIgfSBmcm9tICcuL2Zvb3Rlcic7XG5pbXBvcnQgeyBjcmVhdGVIb21lTWFpbiB9IGZyb20gJy4vaG9tZSc7XG5pbXBvcnQgeyBjcmVhdGVBYm91dCB9IGZyb20gJy4vYWJvdXQnO1xuXG5pbXBvcnQgeyBjcmVhdGVNZW51TWFpbiB9IGZyb20gJy4vbWVudSc7XG5cbmNvbnN0IGhlYWRlciA9IGNyZWF0ZUhlYWRlcigpO1xuY29uc3QgaG9tZU1haW4gPSBjcmVhdGVIb21lTWFpbigpO1xuY29uc3QgbWVudU1haW4gPSBjcmVhdGVNZW51TWFpbigpO1xuY29uc3QgYWJvdXRNYWluID0gY3JlYXRlQWJvdXQoKTtcbmNvbnN0IGZvb3RlciA9IGNyZWF0ZUZvb3RlcigpO1xuXG5cbi8vIERPTUNvbnRlbnRMb2FkZWRcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cbiAgICAvLyBhZGQgdGhlIGhlYWRlciB0aGF0IGRpc3BsYXlzIGhvbWUgYnkgZGVmYXVsdFxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhvbWVNYWluKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGZvb3Rlcik7XG5cbiAgICAvLyBzZXQgdXAgZXZlbnQgbGlzdGVuZXJzIG9uIGJ1dHRvbnNcbiAgICBjb25zdCBuYXZCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJyk7XG4gICAgbmF2QnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgbmF2QnV0dG9ucy5mb3JFYWNoKGJ0biA9PiBidG4uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xuICAgICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoZS50YXJnZXQudGV4dENvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdIb21lJzpcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyUGFnZShob21lTWFpbik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ01lbnUnOlxuICAgICAgICAgICAgICAgICAgICByZW5kZXJQYWdlKG1lbnVNYWluKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnQWJvdXQnOlxuICAgICAgICAgICAgICAgICAgICByZW5kZXJQYWdlKGFib3V0TWFpbik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn0pO1xuXG5sZXQgY2xlYXJVSSA9IChjb250YWluZXIpID0+IHtcbiAgICB3aGlsZSAoY29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGNvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgICB9XG59O1xuXG5jb25zdCByZW5kZXJQYWdlID0gKGNvbnRlbnRNYWluKSA9PiB7XG4gICAgY2xlYXJVSShjb250ZW50KTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjb250ZW50TWFpbik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChmb290ZXIpO1xufTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=