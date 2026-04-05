/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/src/js/index.js"
/*!********************************!*\
  !*** ./assets/src/js/index.js ***!
  \********************************/
() {

function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function AddToLocalStorage(e) {
  ClickedElement = e.target;
  localStorage.setItem(ClickedElement.id, ClickedElement.checked);
}
function ShowChecklist(e) {
  SearchedElementId = e.target.id;
  var _iterator = _createForOfIteratorHelper(AllNavButtons),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var NavButton = _step.value;
      if (NavButton.id == SearchedElementId) {
        e.target.classList.remove("DormantButton");
      } else {
        NavButton.classList.add("DormantButton");
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  switch (SearchedElementId) {
    case "RingCLNavButton":
      RingChecklist.style.display = "flex";
      SpellChecklist.style.display = "none";
      PyromancyChecklist.style.display = "none";
      MiracleChecklist.style.display = "none";
      GesturesChecklist.style.display = "none";
      break;
    case "SpellCLNavButton":
      RingChecklist.style.display = "none";
      SpellChecklist.style.display = "flex";
      PyromancyChecklist.style.display = "none";
      MiracleChecklist.style.display = "none";
      GesturesChecklist.style.display = "none";
      break;
    case "PyromancyCLNavButton":
      RingChecklist.style.display = "none";
      SpellChecklist.style.display = "none";
      PyromancyChecklist.style.display = "flex";
      MiracleChecklist.style.display = "none";
      GesturesChecklist.style.display = "none";
      break;
    case "MiracleCLNavButton":
      RingChecklist.style.display = "none";
      SpellChecklist.style.display = "none";
      PyromancyChecklist.style.display = "none";
      MiracleChecklist.style.display = "flex";
      GesturesChecklist.style.display = "none";
      break;
    case "GesturesCLNavButton":
      RingChecklist.style.display = "none";
      SpellChecklist.style.display = "none";
      PyromancyChecklist.style.display = "none";
      MiracleChecklist.style.display = "none";
      GesturesChecklist.style.display = "flex";
      break;
  }
}
document.addEventListener('DOMContentLoaded', function () {
  AllCheckboxes = document.querySelectorAll("input[type='checkbox']");
  var _iterator2 = _createForOfIteratorHelper(AllCheckboxes),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var Checkbox = _step2.value;
      Checkbox.addEventListener('click', AddToLocalStorage);
      LSData = localStorage.getItem(Checkbox.id);
      if (LSData != null) {
        console.log(LSData);
        if (LSData == "true") {
          Checkbox.checked = LSData;
        } else {
          Checkbox.checked = false;
        }
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  RingChecklist = document.querySelector("#RingChecklistBox");
  SpellChecklist = document.querySelector("#SpellChecklistBox");
  PyromancyChecklist = document.querySelector("#PyromancyChecklistBox");
  MiracleChecklist = document.querySelector("#MiracleChecklistBox");
  GesturesChecklist = document.querySelector("#GesturesChecklistBox");
  AllNavButtons = document.querySelectorAll("div.NavigationButton");
  var _iterator3 = _createForOfIteratorHelper(AllNavButtons),
    _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var NavButton = _step3.value;
      NavButton.addEventListener('click', ShowChecklist);
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
  AllCheckButtons = document.querySelectorAll(".CheckButton");
  AllUncheckButtons = document.querySelectorAll(".UncheckButton");
  var _iterator4 = _createForOfIteratorHelper(AllCheckButtons),
    _step4;
  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var CheckButton = _step4.value;
      CheckButton.addEventListener('click', function (e) {
        ParentElement = e.target.closest(".ChecklistBoxSection");
        var NearestListOfCheckboxes = ParentElement.children[1].querySelectorAll("input[type='checkbox']");
        var _iterator6 = _createForOfIteratorHelper(NearestListOfCheckboxes),
          _step6;
        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
            var _Checkbox = _step6.value;
            _Checkbox.checked = true;
            localStorage.setItem(_Checkbox.id, true);
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }
      });
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
  var _iterator5 = _createForOfIteratorHelper(AllUncheckButtons),
    _step5;
  try {
    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
      var UncheckButton = _step5.value;
      UncheckButton.addEventListener('click', function (e) {
        ParentElement = e.target.closest(".ChecklistBoxSection");
        var NearestListOfCheckboxes = ParentElement.children[1].querySelectorAll("input[type='checkbox']");
        var _iterator7 = _createForOfIteratorHelper(NearestListOfCheckboxes),
          _step7;
        try {
          for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
            var _Checkbox2 = _step7.value;
            _Checkbox2.checked = false;
            localStorage.setItem(_Checkbox2.id, false);
          }
        } catch (err) {
          _iterator7.e(err);
        } finally {
          _iterator7.f();
        }
      });
    }
  } catch (err) {
    _iterator5.e(err);
  } finally {
    _iterator5.f();
  }
});

/***/ },

/***/ "./assets/src/scss/index.scss"
/*!************************************!*\
  !*** ./assets/src/scss/index.scss ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }

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
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/script": 0,
/******/ 			"style": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkds3checklist"] = self["webpackChunkds3checklist"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["style"], () => (__webpack_require__("./assets/src/js/index.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["style"], () => (__webpack_require__("./assets/src/scss/index.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;