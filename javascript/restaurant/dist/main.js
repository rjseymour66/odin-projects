/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
    let homeLink = document.createElement('a');
    homeLink.href = '#';
    homeLink.textContent = 'Home';
    homeLink.classList.add('selected');

    let menuLink = document.createElement('a');
    menuLink.href = '#';
    menuLink.textContent = 'Menu';

    let aboutLink = document.createElement('a');
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





let createMenuSectionList = (menuList) => {
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

let createCocktailSection = () => {

    // create section
    let section = document.createElement('section');
    section.classList.add('menu-section');
    section.classList.add('cocktails');

    // create h2
    let h2 = document.createElement('h2');
    h2.classList.add('section-title');
    h2.textContent = 'cocktails';

    // create cocktail list
    let ul = createMenuSectionList(_data_cocktails_json__WEBPACK_IMPORTED_MODULE_0__);

    // append h2 to section
    section.appendChild(h2);
    // append ul to section
    section.appendChild(ul);

    return section;
};

let createStarterSection = () => {

    // create section
    let section = document.createElement('section');
    section.classList.add('menu-section');
    section.classList.add('cocktails');

    // create h2
    let h2 = document.createElement('h2');
    h2.classList.add('section-title');
    h2.textContent = 'cocktails';

    // create cocktail list
    let ul = createMenuSectionList(_data_starters_json__WEBPACK_IMPORTED_MODULE_1__);

    // append h2 to section
    section.appendChild(h2);
    // append ul to section
    section.appendChild(ul);

    return section;
};

let createMainSection = () => {

    // create section
    let section = document.createElement('section');
    section.classList.add('menu-section');
    section.classList.add('cocktails');

    // create h2
    let h2 = document.createElement('h2');
    h2.classList.add('section-title');
    h2.textContent = 'cocktails';

    // create cocktail list
    let ul = createMenuSectionList(_data_main_json__WEBPACK_IMPORTED_MODULE_2__);

    // append h2 to section
    section.appendChild(h2);
    // append ul to section
    section.appendChild(ul);

    return section;
};

let createDessertSection = () => {

    // create section
    let section = document.createElement('section');
    section.classList.add('menu-section');
    section.classList.add('cocktails');

    // create h2
    let h2 = document.createElement('h2');
    h2.classList.add('section-title');
    h2.textContent = 'cocktails';

    // create cocktail list
    let ul = createMenuSectionList(_data_desserts_json__WEBPACK_IMPORTED_MODULE_3__);

    // append h2 to section
    section.appendChild(h2);
    // append ul to section
    section.appendChild(ul);

    return section;
};

let createMenuMain = () => {
    let main = document.createElement('menu');
    main.classList.add('menu');

    let cocktailSection = createCocktailSection();
    let starterSection = createStarterSection();
    let mainSection = createMainSection();
    let dessertSection = createDessertSection();

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
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ "./src/menu.js");








const content = document.querySelector('#content');

// DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    clearUI(content);
    const header = (0,_header__WEBPACK_IMPORTED_MODULE_0__.createHeader)();
    // const homeMain = createHomeMain();
    const menuMain = (0,_menu__WEBPACK_IMPORTED_MODULE_3__.createMenuMain)();
    const footer = (0,_footer__WEBPACK_IMPORTED_MODULE_1__.createFooter)();

    content.appendChild(header);
    content.appendChild(menuMain);
    content.appendChild(footer);
});

let clearUI = (container) => {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
};
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwREE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1g4QztBQUNGO0FBQ1I7QUFDUTs7QUFFNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUNBQW1DLGlEQUFTOztBQUU1QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUNBQW1DLGdEQUFROztBQUUzQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUNBQW1DLDRDQUFJOztBQUV2QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUNBQW1DLGdEQUFROztBQUUzQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoS0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ053QztBQUNBO0FBQ0E7O0FBRUE7Ozs7QUFJeEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHFEQUFZO0FBQy9CO0FBQ0EscUJBQXFCLHFEQUFjO0FBQ25DLG1CQUFtQixxREFBWTs7QUFFL0I7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImxldCBjcmVhdGVGb290ZXIgPSAoKSA9PiB7XG4gICAgbGV0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmb290ZXInKTtcblxuICAgIGxldCBsb2NhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBsb2NhdGlvbi5jbGFzc0xpc3QuYWRkKCdsb2NhdGlvbicpO1xuICAgIGxvY2F0aW9uLnRleHRDb250ZW50ID0gJzEwMCBNYWluIFN0cmVldCwgQm9zdG9uIE1BJztcblxuICAgIGxldCBwaG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwaG9uZS5jbGFzc0xpc3QuYWRkKCdwaG9uZScpO1xuICAgIHBob25lLnRleHRDb250ZW50ID0gJzYxNy0xMjMtNDMyMSc7XG5cbiAgICBsZXQgZW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZW1haWwuY2xhc3NMaXN0LmFkZCgnZW1haWwnKTtcbiAgICBlbWFpbC50ZXh0Q29udGVudCA9ICdpbmZvQHJlc3RhdXJhbnQuY29tJztcblxuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChsb2NhdGlvbik7XG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKHBob25lKTtcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoZW1haWwpO1xuXG4gICAgcmV0dXJuIGZvb3Rlcjtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZUZvb3RlciB9OyIsImNvbnN0IGNyZWF0ZVNpdGVOYXYgPSAoKSA9PiB7XG4gICAgbGV0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICAgIG5hdi5jbGFzc0xpc3QuYWRkKCdtYWluLWhlYWRlcl9fbmF2Jyk7XG5cbiAgICBsZXQgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIHVsLmNsYXNzTGlzdC5hZGQoJ3NpdGUtbmF2Jyk7XG4gICAgLy8gY3JlYXRlIGEgdGFnc1xuICAgIGxldCBob21lTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBob21lTGluay5ocmVmID0gJyMnO1xuICAgIGhvbWVMaW5rLnRleHRDb250ZW50ID0gJ0hvbWUnO1xuICAgIGhvbWVMaW5rLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG5cbiAgICBsZXQgbWVudUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgbWVudUxpbmsuaHJlZiA9ICcjJztcbiAgICBtZW51TGluay50ZXh0Q29udGVudCA9ICdNZW51JztcblxuICAgIGxldCBhYm91dExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgYWJvdXRMaW5rLmhyZWYgPSAnIyc7XG4gICAgYWJvdXRMaW5rLnRleHRDb250ZW50ID0gJ0Fib3V0JztcblxuICAgIC8vIGNyZWF0ZSBsaXNcbiAgICBsZXQgaG9tZUxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsZXQgbWVudUxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsZXQgYWJvdXRMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cbiAgICBob21lTGkuYXBwZW5kQ2hpbGQoaG9tZUxpbmspO1xuICAgIG1lbnVMaS5hcHBlbmRDaGlsZChtZW51TGluayk7XG4gICAgYWJvdXRMaS5hcHBlbmRDaGlsZChhYm91dExpbmspO1xuXG4gICAgdWwuYXBwZW5kQ2hpbGQoaG9tZUxpKTtcbiAgICB1bC5hcHBlbmRDaGlsZChtZW51TGkpO1xuICAgIHVsLmFwcGVuZENoaWxkKGFib3V0TGkpO1xuXG4gICAgbmF2LmFwcGVuZENoaWxkKHVsKTtcblxuICAgIHJldHVybiBuYXY7XG59O1xuXG5jb25zdCBjcmVhdGVIZWFkZXIgPSAoKSA9PiB7XG4gICAgbGV0IG5hdiA9IGNyZWF0ZVNpdGVOYXYoKTtcblxuICAgIGxldCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnbWFpbi1oZWFkZXInKTtcblxuICAgIGxldCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaDEuY2xhc3NMaXN0LmFkZCgnbWFpbi1oZWFkZXJfX2hlYWRpbmcnKTtcbiAgICBoMS50ZXh0Q29udGVudCA9ICdSZXN0YXVyYW50IE5hbWUnO1xuXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGgxKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2KTtcblxuICAgIHJldHVybiBoZWFkZXI7XG59O1xuXG5leHBvcnQgeyBjcmVhdGVIZWFkZXIgfTsiLCJsZXQgY3JlYXRlSG9tZU1haW4gPSAoKSA9PiB7XG4gICAgbGV0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdzZWN0aW9uLWNvbnRlbnQnKTtcblxuICAgIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHAuY2xhc3NMaXN0LmFkZCgnaG9tZS10ZXh0Jyk7XG4gICAgcC50ZXh0Q29udGVudCA9ICdUaGlzIHJlc3RhdXJhbnQgcm9ja3MgYW5kIGV2ZXJ5b25lIGxpa2VzIGl0LiBBIGxvdC4gQSB3aG9sZSBsb3QuIFdlIGhhdmUgZmFuY3kgZm9vZCBhbmQgYXdlc29tZSBkcmlua3MgYW5kIHRoZXNlIGRyaW5rcyBhcmUgZ29ubmEgYmUgYXdlc29tZS4nO1xuXG4gICAgbWFpbi5hcHBlbmRDaGlsZChwKTtcblxuICAgIHJldHVybiBtYWluO1xufTtcblxuXG5cblxuZXhwb3J0IHsgY3JlYXRlSG9tZU1haW4gfTsiLCJpbXBvcnQgY29ja3RhaWxzIGZyb20gJy4vZGF0YS9jb2NrdGFpbHMuanNvbic7XG5pbXBvcnQgc3RhcnRlcnMgZnJvbSAnLi9kYXRhL3N0YXJ0ZXJzLmpzb24nO1xuaW1wb3J0IG1haW4gZnJvbSAnLi9kYXRhL21haW4uanNvbic7XG5pbXBvcnQgZGVzc2VydHMgZnJvbSAnLi9kYXRhL2Rlc3NlcnRzLmpzb24nO1xuXG5sZXQgY3JlYXRlTWVudVNlY3Rpb25MaXN0ID0gKG1lbnVMaXN0KSA9PiB7XG4gICAgLy8gY3JlYXRlIHRoZSB1bFxuICAgIGxldCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgdWwuY2xhc3NMaXN0LmFkZCgnY29ja3RhaWwtbGlzdCcpO1xuICAgIHVsLmNsYXNzTGlzdC5hZGQoJ21lbnUtbGlzdCcpO1xuXG4gICAgZm9yIChsZXQgaXRlbSBvZiBtZW51TGlzdCkge1xuICAgICAgICAvLy8vIGNyZWF0ZSBsaVxuICAgICAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBsaS5jbGFzc0xpc3QuYWRkKCdsaXN0LWl0ZW0nKTtcblxuICAgICAgICAvLy8vIGNyZWF0ZSBwXG4gICAgICAgIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBwLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tZGVzYycpO1xuXG4gICAgICAgIC8vLy8gY3JlYXRlIGl0ZW0tbmFtZSBzcGFuXG4gICAgICAgIGxldCBuYW1lU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblxuICAgICAgICAvLy8vIGFkZCBzcGFuLnRleHRDb250ZW50XG4gICAgICAgIG5hbWVTcGFuLnRleHRDb250ZW50ID0gaXRlbS5uYW1lO1xuICAgICAgICBuYW1lU3Bhbi5jbGFzc0xpc3QuYWRkKCdpdGVtLW5hbWUnKTtcblxuICAgICAgICAvLy8vIGNyZWF0ZSBpdGVtLXByaWNlIHNwYW5cbiAgICAgICAgbGV0IHByaWNlU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgcHJpY2VTcGFuLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tcHJpY2UnKTtcblxuICAgICAgICAvLy8vIGFkZCBzcGFuLnRleHRDb250ZW50XG4gICAgICAgIHByaWNlU3Bhbi50ZXh0Q29udGVudCA9IGl0ZW0ucHJpY2U7XG5cbiAgICAgICAgLy8vLyBhZGQgcC50ZXh0Q29udGVudFxuICAgICAgICBwLnRleHRDb250ZW50ID0gaXRlbS5kZXNjcmlwdGlvbjtcblxuICAgICAgICBwLnByZXBlbmQobmFtZVNwYW4pO1xuXG4gICAgICAgIC8vIGFwcGVuZCBpdGVtLXByaWNlIHNwYW4gdG8gcFxuICAgICAgICBwLmFwcGVuZENoaWxkKHByaWNlU3Bhbik7XG5cbiAgICAgICAgLy8gYXBwZW5kIHAgdG8gbGlcbiAgICAgICAgbGkuYXBwZW5kQ2hpbGQocCk7XG5cbiAgICAgICAgLy8gYXBwZW5kIGxpIHRvIHVsXG4gICAgICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdWw7XG5cbn07XG5cbmxldCBjcmVhdGVDb2NrdGFpbFNlY3Rpb24gPSAoKSA9PiB7XG5cbiAgICAvLyBjcmVhdGUgc2VjdGlvblxuICAgIGxldCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIHNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnbWVudS1zZWN0aW9uJyk7XG4gICAgc2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdjb2NrdGFpbHMnKTtcblxuICAgIC8vIGNyZWF0ZSBoMlxuICAgIGxldCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgaDIuY2xhc3NMaXN0LmFkZCgnc2VjdGlvbi10aXRsZScpO1xuICAgIGgyLnRleHRDb250ZW50ID0gJ2NvY2t0YWlscyc7XG5cbiAgICAvLyBjcmVhdGUgY29ja3RhaWwgbGlzdFxuICAgIGxldCB1bCA9IGNyZWF0ZU1lbnVTZWN0aW9uTGlzdChjb2NrdGFpbHMpO1xuXG4gICAgLy8gYXBwZW5kIGgyIHRvIHNlY3Rpb25cbiAgICBzZWN0aW9uLmFwcGVuZENoaWxkKGgyKTtcbiAgICAvLyBhcHBlbmQgdWwgdG8gc2VjdGlvblxuICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQodWwpO1xuXG4gICAgcmV0dXJuIHNlY3Rpb247XG59O1xuXG5sZXQgY3JlYXRlU3RhcnRlclNlY3Rpb24gPSAoKSA9PiB7XG5cbiAgICAvLyBjcmVhdGUgc2VjdGlvblxuICAgIGxldCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIHNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnbWVudS1zZWN0aW9uJyk7XG4gICAgc2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdjb2NrdGFpbHMnKTtcblxuICAgIC8vIGNyZWF0ZSBoMlxuICAgIGxldCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgaDIuY2xhc3NMaXN0LmFkZCgnc2VjdGlvbi10aXRsZScpO1xuICAgIGgyLnRleHRDb250ZW50ID0gJ2NvY2t0YWlscyc7XG5cbiAgICAvLyBjcmVhdGUgY29ja3RhaWwgbGlzdFxuICAgIGxldCB1bCA9IGNyZWF0ZU1lbnVTZWN0aW9uTGlzdChzdGFydGVycyk7XG5cbiAgICAvLyBhcHBlbmQgaDIgdG8gc2VjdGlvblxuICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQoaDIpO1xuICAgIC8vIGFwcGVuZCB1bCB0byBzZWN0aW9uXG4gICAgc2VjdGlvbi5hcHBlbmRDaGlsZCh1bCk7XG5cbiAgICByZXR1cm4gc2VjdGlvbjtcbn07XG5cbmxldCBjcmVhdGVNYWluU2VjdGlvbiA9ICgpID0+IHtcblxuICAgIC8vIGNyZWF0ZSBzZWN0aW9uXG4gICAgbGV0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgc2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdtZW51LXNlY3Rpb24nKTtcbiAgICBzZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2NvY2t0YWlscycpO1xuXG4gICAgLy8gY3JlYXRlIGgyXG4gICAgbGV0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBoMi5jbGFzc0xpc3QuYWRkKCdzZWN0aW9uLXRpdGxlJyk7XG4gICAgaDIudGV4dENvbnRlbnQgPSAnY29ja3RhaWxzJztcblxuICAgIC8vIGNyZWF0ZSBjb2NrdGFpbCBsaXN0XG4gICAgbGV0IHVsID0gY3JlYXRlTWVudVNlY3Rpb25MaXN0KG1haW4pO1xuXG4gICAgLy8gYXBwZW5kIGgyIHRvIHNlY3Rpb25cbiAgICBzZWN0aW9uLmFwcGVuZENoaWxkKGgyKTtcbiAgICAvLyBhcHBlbmQgdWwgdG8gc2VjdGlvblxuICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQodWwpO1xuXG4gICAgcmV0dXJuIHNlY3Rpb247XG59O1xuXG5sZXQgY3JlYXRlRGVzc2VydFNlY3Rpb24gPSAoKSA9PiB7XG5cbiAgICAvLyBjcmVhdGUgc2VjdGlvblxuICAgIGxldCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIHNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnbWVudS1zZWN0aW9uJyk7XG4gICAgc2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdjb2NrdGFpbHMnKTtcblxuICAgIC8vIGNyZWF0ZSBoMlxuICAgIGxldCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgaDIuY2xhc3NMaXN0LmFkZCgnc2VjdGlvbi10aXRsZScpO1xuICAgIGgyLnRleHRDb250ZW50ID0gJ2NvY2t0YWlscyc7XG5cbiAgICAvLyBjcmVhdGUgY29ja3RhaWwgbGlzdFxuICAgIGxldCB1bCA9IGNyZWF0ZU1lbnVTZWN0aW9uTGlzdChkZXNzZXJ0cyk7XG5cbiAgICAvLyBhcHBlbmQgaDIgdG8gc2VjdGlvblxuICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQoaDIpO1xuICAgIC8vIGFwcGVuZCB1bCB0byBzZWN0aW9uXG4gICAgc2VjdGlvbi5hcHBlbmRDaGlsZCh1bCk7XG5cbiAgICByZXR1cm4gc2VjdGlvbjtcbn07XG5cbmxldCBjcmVhdGVNZW51TWFpbiA9ICgpID0+IHtcbiAgICBsZXQgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21lbnUnKTtcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ21lbnUnKTtcblxuICAgIGxldCBjb2NrdGFpbFNlY3Rpb24gPSBjcmVhdGVDb2NrdGFpbFNlY3Rpb24oKTtcbiAgICBsZXQgc3RhcnRlclNlY3Rpb24gPSBjcmVhdGVTdGFydGVyU2VjdGlvbigpO1xuICAgIGxldCBtYWluU2VjdGlvbiA9IGNyZWF0ZU1haW5TZWN0aW9uKCk7XG4gICAgbGV0IGRlc3NlcnRTZWN0aW9uID0gY3JlYXRlRGVzc2VydFNlY3Rpb24oKTtcblxuICAgIG1haW4uYXBwZW5kQ2hpbGQoY29ja3RhaWxTZWN0aW9uKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKHN0YXJ0ZXJTZWN0aW9uKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKG1haW5TZWN0aW9uKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGRlc3NlcnRTZWN0aW9uKTtcblxuICAgIHJldHVybiBtYWluO1xufTtcblxuZXhwb3J0IHsgY3JlYXRlTWVudU1haW4gfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGNyZWF0ZUhlYWRlciB9IGZyb20gJy4vaGVhZGVyJztcbmltcG9ydCB7IGNyZWF0ZUZvb3RlciB9IGZyb20gJy4vZm9vdGVyJztcbmltcG9ydCB7IGNyZWF0ZUhvbWVNYWluIH0gZnJvbSAnLi9ob21lJztcblxuaW1wb3J0IHsgY3JlYXRlTWVudU1haW4gfSBmcm9tICcuL21lbnUnO1xuXG5cblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cbi8vIERPTUNvbnRlbnRMb2FkZWRcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgY2xlYXJVSShjb250ZW50KTtcbiAgICBjb25zdCBoZWFkZXIgPSBjcmVhdGVIZWFkZXIoKTtcbiAgICAvLyBjb25zdCBob21lTWFpbiA9IGNyZWF0ZUhvbWVNYWluKCk7XG4gICAgY29uc3QgbWVudU1haW4gPSBjcmVhdGVNZW51TWFpbigpO1xuICAgIGNvbnN0IGZvb3RlciA9IGNyZWF0ZUZvb3RlcigpO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudU1haW4pO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcbn0pO1xuXG5sZXQgY2xlYXJVSSA9IChjb250YWluZXIpID0+IHtcbiAgICB3aGlsZSAoY29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGNvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgICB9XG59OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==