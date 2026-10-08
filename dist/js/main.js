/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js"
/*!******************!*\
  !*** ./index.js ***!
  \******************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_accordeon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/accordeon */ \"./modules/accordeon.js\");\n/* harmony import */ var _modules_buttonToTop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/buttonToTop */ \"./modules/buttonToTop.js\");\n/* harmony import */ var _modules_formCallBack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/formCallBack */ \"./modules/formCallBack.js\");\n/* harmony import */ var _modules_modalCallback__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/modalCallback */ \"./modules/modalCallback.js\");\n/* harmony import */ var _modules_serviceSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/serviceSection */ \"./modules/serviceSection.js\");\n/* harmony import */ var _modules_topSlider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/topSlider */ \"./modules/topSlider.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_modalCallback__WEBPACK_IMPORTED_MODULE_3__.modalCallback)()\r\n;(0,_modules_topSlider__WEBPACK_IMPORTED_MODULE_5__.topSlider)()\r\n;(0,_modules_serviceSection__WEBPACK_IMPORTED_MODULE_4__.serviceSection)()\r\n;(0,_modules_accordeon__WEBPACK_IMPORTED_MODULE_0__.accordeon)()\r\n;(0,_modules_buttonToTop__WEBPACK_IMPORTED_MODULE_1__.up)()\r\n;(0,_modules_formCallBack__WEBPACK_IMPORTED_MODULE_2__.formCallback)()\n\n//# sourceURL=webpack:///./index.js?\n}");

/***/ },

/***/ "./modules/accordeon.js"
/*!******************************!*\
  !*** ./modules/accordeon.js ***!
  \******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   accordeon: () => (/* binding */ accordeon)\n/* harmony export */ });\nconst accordeon = () => {\r\n\r\n    const accordeon = document.querySelector('.accordeon')\r\n    const elements = accordeon.querySelectorAll('.element')\r\n\r\n    elements.forEach(element => {\r\n\r\n        const content = element.querySelector('.element-content')\r\n\r\n        if (element.classList.contains('active')) {\r\n            content.style.display = 'block'\r\n        } else {\r\n            content.style.display = 'none'\r\n        }\r\n\r\n        element.addEventListener('click', () => {\r\n\r\n            if (element.classList.contains('active')) {\r\n                element.classList.remove('active')\r\n                content.style.display = 'none'\r\n                return\r\n            }\r\n            elements.forEach(item => {\r\n                item.classList.remove('active')\r\n\r\n                const itemContent = item.querySelector('.element-content')\r\n                itemContent.style.display = 'none'\r\n            })\r\n\r\n            element.classList.add('active')\r\n            content.style.display = 'block'\r\n        })\r\n    })\r\n}\n\n//# sourceURL=webpack:///./modules/accordeon.js?\n}");

/***/ },

/***/ "./modules/buttonToTop.js"
/*!********************************!*\
  !*** ./modules/buttonToTop.js ***!
  \********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   up: () => (/* binding */ up)\n/* harmony export */ });\nconst up = () => {\r\n\r\n    const upButton = document.querySelector('.up')\r\n    const services = document.querySelector('.services-section')\r\n\r\n    window.addEventListener('scroll', () => {\r\n\r\n        const servicesPosition = services.getBoundingClientRect().top\r\n\r\n        if (servicesPosition <= 0) {\r\n            upButton.style.display = 'block'\r\n        } else {\r\n            upButton.style.display = 'none'\r\n        }\r\n    })\r\n\r\n    upButton.addEventListener('click', () => {\r\n\r\n        window.scrollTo({\r\n            top: 0,\r\n            behavior: 'smooth'\r\n        })\r\n\r\n    })\r\n}\n\n//# sourceURL=webpack:///./modules/buttonToTop.js?\n}");

/***/ },

/***/ "./modules/formCallBack.js"
/*!*********************************!*\
  !*** ./modules/formCallBack.js ***!
  \*********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   formCallback: () => (/* binding */ formCallback)\n/* harmony export */ });\nconst formCallback = () => {\r\n    const form = document.forms['form-callback']\r\n\r\n    if (!form) {\r\n        return\r\n    }\r\n\r\n    const nameInput = form.querySelector('[name=\"fio\"]')\r\n    const phoneInput = form.querySelector('[name=\"tel\"]')\r\n    const button = form.querySelector('.feedback')\r\n\r\n    nameInput.addEventListener('input', () => {\r\n        nameInput.value = nameInput.value.replace(/[^а-яА-ЯёЁ\\s-]/g, '')\r\n    })\r\n\r\n    phoneInput.addEventListener('input', () => {\r\n        phoneInput.value = phoneInput.value.replace(/[^\\d+]/g, '')\r\n    })\r\n\r\n    form.addEventListener('submit', (event) => {\r\n        event.preventDefault()\r\n\r\n        console.log('submit сработал')\r\n\r\n        button.value = 'Идёт отправка...'\r\n        button.disabled = true\r\n\r\n        const formData = new FormData(form)\r\n        const data = Object.fromEntries(formData.entries())\r\n\r\n        console.log('Отправляем:', data)\r\n\r\n        fetch('server.php', {\r\n            method: 'POST',\r\n            headers: {\r\n                'Content-Type': 'application/json'\r\n            },\r\n            body: JSON.stringify(data)\r\n        })\r\n            .then(response => {\r\n                if (response.ok) {\r\n                    button.value = 'Отправлено'\r\n                    form.reset()\r\n                } else {\r\n                    button.value = 'Ошибка'\r\n                }\r\n            })\r\n            .catch(() => {\r\n                button.value = 'Ошибка'\r\n            })\r\n            .finally(() => {\r\n                button.disabled = false\r\n            })\r\n    })\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./modules/formCallBack.js?\n}");

/***/ },

/***/ "./modules/modalCallback.js"
/*!**********************************!*\
  !*** ./modules/modalCallback.js ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   modalCallback: () => (/* binding */ modalCallback)\n/* harmony export */ });\nconst modalCallback = () => {\r\n    const callbackBtns = document.querySelectorAll('.callback-btn')\r\n    const modalCallback = document.querySelector('.modal-callback')\r\n    const modalOverlay = document.querySelector('.modal-overlay')\r\n    const modalCloseBtn = document.querySelector('.modal-close')\r\n\r\n    const closeModal = () => {\r\n        modalCallback.style.display = ''\r\n        modalOverlay.style.display = ''\r\n    }\r\n\r\n    callbackBtns.forEach(btn => {\r\n        btn.addEventListener('click', (event) => {\r\n            event.preventDefault()\r\n\r\n            modalCallback.style.display = 'block'\r\n            modalOverlay.style.display = 'block'\r\n        })\r\n\r\n    })\r\n\r\n    modalCloseBtn.addEventListener('click', (event) => {\r\n        event.preventDefault()\r\n\r\n        closeModal()\r\n\r\n    })\r\n\r\n    modalOverlay.addEventListener('click', (event) => {\r\n        event.preventDefault()\r\n\r\n        closeModal()\r\n\r\n    })\r\n\r\n\r\n\r\n}\n\n//# sourceURL=webpack:///./modules/modalCallback.js?\n}");

/***/ },

/***/ "./modules/serviceSection.js"
/*!***********************************!*\
  !*** ./modules/serviceSection.js ***!
  \***********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   serviceSection: () => (/* binding */ serviceSection)\n/* harmony export */ });\nconst serviceSection = () => {\r\n\r\n    const carousel = document.querySelector('.services-carousel')\r\n    const elements = document.querySelectorAll('.services-carousel > div')\r\n\r\n    const arrowLeft = document.querySelector('.arrow-left')\r\n    const arrowRight = document.querySelector('.arrow-right')\r\n\r\n    let currentSlide = 0\r\n\r\n    const moveCarousel = () => {\r\n        const elementWidth = elements[0].offsetWidth\r\n\r\n        carousel.style.transform =\r\n            `translateX(-${currentSlide * elementWidth}px)`\r\n    }\r\n\r\n    arrowRight.addEventListener('click', () => {\r\n        if (currentSlide < elements.length - 3) {\r\n            currentSlide++\r\n            moveCarousel()\r\n        }\r\n    })\r\n\r\n    arrowLeft.addEventListener('click', () => {\r\n        if (currentSlide > 0) {\r\n            currentSlide--\r\n            moveCarousel()\r\n        }\r\n    })\r\n\r\n\r\n    const applicationButtons = document.querySelectorAll('.services-carousel .fancyboxModal, .button-services')\r\n\r\n    const modalCallback = document.querySelector('.modal-callback')\r\n    const modalOverlay = document.querySelector('.modal-overlay')\r\n    const modalClose = document.querySelector('.modal-close')\r\n\r\n    const closeModal = () => {\r\n        modalCallback.style.display = ''\r\n        modalOverlay.style.display = ''\r\n    }\r\n\r\n    applicationButtons.forEach(button => {\r\n        button.addEventListener('click', (event) => {\r\n            event.preventDefault()\r\n\r\n            modalCallback.style.display = 'block'\r\n            modalOverlay.style.display = 'block'\r\n        })\r\n    })\r\n\r\n    modalClose.addEventListener('click', closeModal)\r\n\r\n    modalOverlay.addEventListener('click', closeModal)\r\n}\n\n//# sourceURL=webpack:///./modules/serviceSection.js?\n}");

/***/ },

/***/ "./modules/topSlider.js"
/*!******************************!*\
  !*** ./modules/topSlider.js ***!
  \******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   topSlider: () => (/* binding */ topSlider)\n/* harmony export */ });\n\r\nconst topSlider = () => {\r\n    const slides = document.querySelectorAll('.top-slider .item')\r\n\r\n    let currentSlide = 0\r\n\r\n    slides.forEach((slide, index) => {\r\n        slide.style.display = index === 0 ? 'block' : 'none'\r\n    })\r\n\r\n    setInterval(() => {\r\n        slides[currentSlide].style.display = 'none'\r\n\r\n        currentSlide++\r\n\r\n        if (currentSlide >= slides.length) {\r\n            currentSlide = 0\r\n        }\r\n\r\n        slides[currentSlide].style.display = 'block'\r\n\r\n    }, 3000)\r\n}\n\n//# sourceURL=webpack:///./modules/topSlider.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	let __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;