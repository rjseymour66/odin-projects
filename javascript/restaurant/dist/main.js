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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwREE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hrRDtBQUNGO0FBQ1I7QUFDUTs7QUFFaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDJEQUEyRCxpREFBYTtBQUN4RSx5REFBeUQsZ0RBQVk7QUFDckUsa0RBQWtELDRDQUFRO0FBQzFELHdEQUF3RCxnREFBWTs7QUFFcEU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdkZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNOd0M7QUFDQTtBQUNBOztBQUVBOzs7O0FBSXhDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixxREFBWTtBQUMvQjtBQUNBLHFCQUFxQixxREFBYztBQUNuQyxtQkFBbUIscURBQVk7O0FBRS9CO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgY3JlYXRlRm9vdGVyID0gKCkgPT4ge1xuICAgIGxldCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyJyk7XG5cbiAgICBsZXQgbG9jYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbG9jYXRpb24uY2xhc3NMaXN0LmFkZCgnbG9jYXRpb24nKTtcbiAgICBsb2NhdGlvbi50ZXh0Q29udGVudCA9ICcxMDAgTWFpbiBTdHJlZXQsIEJvc3RvbiBNQSc7XG5cbiAgICBsZXQgcGhvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcGhvbmUuY2xhc3NMaXN0LmFkZCgncGhvbmUnKTtcbiAgICBwaG9uZS50ZXh0Q29udGVudCA9ICc2MTctMTIzLTQzMjEnO1xuXG4gICAgbGV0IGVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGVtYWlsLmNsYXNzTGlzdC5hZGQoJ2VtYWlsJyk7XG4gICAgZW1haWwudGV4dENvbnRlbnQgPSAnaW5mb0ByZXN0YXVyYW50LmNvbSc7XG5cbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQobG9jYXRpb24pO1xuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChwaG9uZSk7XG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGVtYWlsKTtcblxuICAgIHJldHVybiBmb290ZXI7XG59O1xuXG5leHBvcnQgeyBjcmVhdGVGb290ZXIgfTsiLCJjb25zdCBjcmVhdGVTaXRlTmF2ID0gKCkgPT4ge1xuICAgIGxldCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgICBuYXYuY2xhc3NMaXN0LmFkZCgnbWFpbi1oZWFkZXJfX25hdicpO1xuXG4gICAgbGV0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICB1bC5jbGFzc0xpc3QuYWRkKCdzaXRlLW5hdicpO1xuICAgIC8vIGNyZWF0ZSBhIHRhZ3NcbiAgICBsZXQgaG9tZUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgaG9tZUxpbmsuaHJlZiA9ICcjJztcbiAgICBob21lTGluay50ZXh0Q29udGVudCA9ICdIb21lJztcbiAgICBob21lTGluay5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuXG4gICAgbGV0IG1lbnVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIG1lbnVMaW5rLmhyZWYgPSAnIyc7XG4gICAgbWVudUxpbmsudGV4dENvbnRlbnQgPSAnTWVudSc7XG5cbiAgICBsZXQgYWJvdXRMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGFib3V0TGluay5ocmVmID0gJyMnO1xuICAgIGFib3V0TGluay50ZXh0Q29udGVudCA9ICdBYm91dCc7XG5cbiAgICAvLyBjcmVhdGUgbGlzXG4gICAgbGV0IGhvbWVMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbGV0IG1lbnVMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbGV0IGFib3V0TGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXG4gICAgaG9tZUxpLmFwcGVuZENoaWxkKGhvbWVMaW5rKTtcbiAgICBtZW51TGkuYXBwZW5kQ2hpbGQobWVudUxpbmspO1xuICAgIGFib3V0TGkuYXBwZW5kQ2hpbGQoYWJvdXRMaW5rKTtcblxuICAgIHVsLmFwcGVuZENoaWxkKGhvbWVMaSk7XG4gICAgdWwuYXBwZW5kQ2hpbGQobWVudUxpKTtcbiAgICB1bC5hcHBlbmRDaGlsZChhYm91dExpKTtcblxuICAgIG5hdi5hcHBlbmRDaGlsZCh1bCk7XG5cbiAgICByZXR1cm4gbmF2O1xufTtcblxuY29uc3QgY3JlYXRlSGVhZGVyID0gKCkgPT4ge1xuICAgIGxldCBuYXYgPSBjcmVhdGVTaXRlTmF2KCk7XG5cbiAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ21haW4taGVhZGVyJyk7XG5cbiAgICBsZXQgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGgxLmNsYXNzTGlzdC5hZGQoJ21haW4taGVhZGVyX19oZWFkaW5nJyk7XG4gICAgaDEudGV4dENvbnRlbnQgPSAnUmVzdGF1cmFudCBOYW1lJztcblxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChoMSk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKG5hdik7XG5cbiAgICByZXR1cm4gaGVhZGVyO1xufTtcblxuZXhwb3J0IHsgY3JlYXRlSGVhZGVyIH07IiwibGV0IGNyZWF0ZUhvbWVNYWluID0gKCkgPT4ge1xuICAgIGxldCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnc2VjdGlvbi1jb250ZW50Jyk7XG5cbiAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwLmNsYXNzTGlzdC5hZGQoJ2hvbWUtdGV4dCcpO1xuICAgIHAudGV4dENvbnRlbnQgPSAnVGhpcyByZXN0YXVyYW50IHJvY2tzIGFuZCBldmVyeW9uZSBsaWtlcyBpdC4gQSBsb3QuIEEgd2hvbGUgbG90LiBXZSBoYXZlIGZhbmN5IGZvb2QgYW5kIGF3ZXNvbWUgZHJpbmtzIGFuZCB0aGVzZSBkcmlua3MgYXJlIGdvbm5hIGJlIGF3ZXNvbWUuJztcblxuICAgIG1haW4uYXBwZW5kQ2hpbGQocCk7XG5cbiAgICByZXR1cm4gbWFpbjtcbn07XG5cblxuXG5cbmV4cG9ydCB7IGNyZWF0ZUhvbWVNYWluIH07IiwiaW1wb3J0IGNvY2t0YWlsc0pTT04gZnJvbSAnLi9kYXRhL2NvY2t0YWlscy5qc29uJztcbmltcG9ydCBzdGFydGVyc0pTT04gZnJvbSAnLi9kYXRhL3N0YXJ0ZXJzLmpzb24nO1xuaW1wb3J0IG1haW5KU09OIGZyb20gJy4vZGF0YS9tYWluLmpzb24nO1xuaW1wb3J0IGRlc3NlcnRzSlNPTiBmcm9tICcuL2RhdGEvZGVzc2VydHMuanNvbic7XG5cbmxldCBjcmVhdGVNZW51TGlzdCA9IChtZW51TGlzdCkgPT4ge1xuICAgIC8vIGNyZWF0ZSB0aGUgdWxcbiAgICBsZXQgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIHVsLmNsYXNzTGlzdC5hZGQoJ2NvY2t0YWlsLWxpc3QnKTtcbiAgICB1bC5jbGFzc0xpc3QuYWRkKCdtZW51LWxpc3QnKTtcblxuICAgIGZvciAobGV0IGl0ZW0gb2YgbWVudUxpc3QpIHtcbiAgICAgICAgLy8vLyBjcmVhdGUgbGlcbiAgICAgICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgbGkuY2xhc3NMaXN0LmFkZCgnbGlzdC1pdGVtJyk7XG5cbiAgICAgICAgLy8vLyBjcmVhdGUgcFxuICAgICAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgcC5jbGFzc0xpc3QuYWRkKCdpdGVtLWRlc2MnKTtcblxuICAgICAgICAvLy8vIGNyZWF0ZSBpdGVtLW5hbWUgc3BhblxuICAgICAgICBsZXQgbmFtZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cbiAgICAgICAgLy8vLyBhZGQgc3Bhbi50ZXh0Q29udGVudFxuICAgICAgICBuYW1lU3Bhbi50ZXh0Q29udGVudCA9IGl0ZW0ubmFtZTtcbiAgICAgICAgbmFtZVNwYW4uY2xhc3NMaXN0LmFkZCgnaXRlbS1uYW1lJyk7XG5cbiAgICAgICAgLy8vLyBjcmVhdGUgaXRlbS1wcmljZSBzcGFuXG4gICAgICAgIGxldCBwcmljZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIHByaWNlU3Bhbi5jbGFzc0xpc3QuYWRkKCdpdGVtLXByaWNlJyk7XG5cbiAgICAgICAgLy8vLyBhZGQgc3Bhbi50ZXh0Q29udGVudFxuICAgICAgICBwcmljZVNwYW4udGV4dENvbnRlbnQgPSBpdGVtLnByaWNlO1xuXG4gICAgICAgIC8vLy8gYWRkIHAudGV4dENvbnRlbnRcbiAgICAgICAgcC50ZXh0Q29udGVudCA9IGl0ZW0uZGVzY3JpcHRpb247XG5cbiAgICAgICAgcC5wcmVwZW5kKG5hbWVTcGFuKTtcblxuICAgICAgICAvLyBhcHBlbmQgaXRlbS1wcmljZSBzcGFuIHRvIHBcbiAgICAgICAgcC5hcHBlbmRDaGlsZChwcmljZVNwYW4pO1xuXG4gICAgICAgIC8vIGFwcGVuZCBwIHRvIGxpXG4gICAgICAgIGxpLmFwcGVuZENoaWxkKHApO1xuXG4gICAgICAgIC8vIGFwcGVuZCBsaSB0byB1bFxuICAgICAgICB1bC5hcHBlbmRDaGlsZChsaSk7XG4gICAgfVxuICAgIHJldHVybiB1bDtcbn07XG5cbmNvbnN0IGNyZWF0ZU1lbnVTZWN0aW9uID0gKHNlY3Rpb25UaXRsZSwgSlNPTmRhdGEpID0+IHtcbiAgICAvLyBjcmVhdGUgc2VjdGlvblxuICAgIGxldCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIHNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnbWVudS1zZWN0aW9uJyk7XG5cbiAgICAvLyBjcmVhdGUgaDJcbiAgICBsZXQgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGgyLmNsYXNzTGlzdC5hZGQoJ3NlY3Rpb24tdGl0bGUnKTtcbiAgICBoMi50ZXh0Q29udGVudCA9IHNlY3Rpb25UaXRsZTtcblxuICAgIC8vIGNyZWF0ZSBjb2NrdGFpbCBsaXN0XG4gICAgbGV0IHVsID0gY3JlYXRlTWVudUxpc3QoSlNPTmRhdGEpO1xuXG4gICAgLy8gYXBwZW5kIGgyIHRvIHNlY3Rpb25cbiAgICBzZWN0aW9uLmFwcGVuZENoaWxkKGgyKTtcbiAgICAvLyBhcHBlbmQgdWwgdG8gc2VjdGlvblxuICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQodWwpO1xuXG4gICAgcmV0dXJuIHNlY3Rpb247XG59O1xuXG5sZXQgY3JlYXRlTWVudU1haW4gPSAoKSA9PiB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21lbnUnKTtcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ21lbnUnKTtcblxuICAgIGNvbnN0IGNvY2t0YWlsU2VjdGlvbiA9IGNyZWF0ZU1lbnVTZWN0aW9uKCdjb2NrdGFpbHMnLCBjb2NrdGFpbHNKU09OKTtcbiAgICBjb25zdCBzdGFydGVyU2VjdGlvbiA9IGNyZWF0ZU1lbnVTZWN0aW9uKCdzdGFydGVycycsIHN0YXJ0ZXJzSlNPTik7XG4gICAgY29uc3QgbWFpblNlY3Rpb24gPSBjcmVhdGVNZW51U2VjdGlvbignbWFpbicsIG1haW5KU09OKTtcbiAgICBjb25zdCBkZXNzZXJ0U2VjdGlvbiA9IGNyZWF0ZU1lbnVTZWN0aW9uKCdkZXNzZXJ0JywgZGVzc2VydHNKU09OKTtcblxuICAgIG1haW4uYXBwZW5kQ2hpbGQoY29ja3RhaWxTZWN0aW9uKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKHN0YXJ0ZXJTZWN0aW9uKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKG1haW5TZWN0aW9uKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGRlc3NlcnRTZWN0aW9uKTtcblxuICAgIHJldHVybiBtYWluO1xufTtcblxuZXhwb3J0IHsgY3JlYXRlTWVudU1haW4gfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGNyZWF0ZUhlYWRlciB9IGZyb20gJy4vaGVhZGVyJztcbmltcG9ydCB7IGNyZWF0ZUZvb3RlciB9IGZyb20gJy4vZm9vdGVyJztcbmltcG9ydCB7IGNyZWF0ZUhvbWVNYWluIH0gZnJvbSAnLi9ob21lJztcblxuaW1wb3J0IHsgY3JlYXRlTWVudU1haW4gfSBmcm9tICcuL21lbnUnO1xuXG5cblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cbi8vIERPTUNvbnRlbnRMb2FkZWRcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgY2xlYXJVSShjb250ZW50KTtcbiAgICBjb25zdCBoZWFkZXIgPSBjcmVhdGVIZWFkZXIoKTtcbiAgICAvLyBjb25zdCBob21lTWFpbiA9IGNyZWF0ZUhvbWVNYWluKCk7XG4gICAgY29uc3QgbWVudU1haW4gPSBjcmVhdGVNZW51TWFpbigpO1xuICAgIGNvbnN0IGZvb3RlciA9IGNyZWF0ZUZvb3RlcigpO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudU1haW4pO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcbn0pO1xuXG5sZXQgY2xlYXJVSSA9IChjb250YWluZXIpID0+IHtcbiAgICB3aGlsZSAoY29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGNvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgICB9XG59OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==