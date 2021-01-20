/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/fakeServer.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/fakeServer.js":
/*!********************************************!*\
  !*** ./app/javascript/packs/fakeServer.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// // This fake server uses http://alasql.org/ to mimic how a real server
// // might generate sql queries from the Server-Side Row Model request.
// // To keep things simple it does the bare minimum to support the example.
// function FakeServer(allData) {
//   alasql.options.cache = false;
//   return {
//     getData: function (request) {
//       var results = executeQuery(request);
//       return {
//         success: true,
//         rows: results,
//         lastRow: getLastRowIndex(request, results),
//       };
//     },
//     getCountries: function () {
//       var SQL = 'SELECT DISTINCT country FROM ? ORDER BY country ASC';
//       return alasql(SQL, [allData]).map(function (x) {
//         return x.country;
//       });
//     },
//   };
//   function executeQuery(request) {
//     var sql = buildSql(request);
//     console.log('[FakeServer] - about to execute query:', sql);
//     return alasql(sql, [allData]);
//   }
//   function buildSql(request) {
//     return (
//       'SELECT * FROM ?' +
//       whereSql(request) +
//       orderBySql(request) +
//       limitSql(request)
//     );
//   }
//   function whereSql(request) {
//     var whereParts = [];
//     var filterModel = request.filterModel;
//     if (filterModel) {
//       Object.keys(filterModel).forEach(function (columnKey) {
//         var filter = filterModel[columnKey];
//         if (filter.filterType === 'set') {
//           whereParts.push(
//             columnKey + " IN ('" + filter.values.join("', '") + "')"
//           );
//           return;
//         }
//         console.log('unsupported filter type: ' + filter.filterType);
//       });
//     }
//     if (whereParts.length > 0) {
//       return ' WHERE ' + whereParts.join(' AND ');
//     }
//     return '';
//   }
//   function orderBySql(request) {
//     var sortModel = request.sortModel;
//     if (sortModel.length === 0) return '';
//     var sorts = sortModel.map(function (s) {
//       return s.colId + ' ' + s.sort.toUpperCase();
//     });
//     return ' ORDER BY ' + sorts.join(', ');
//   }
//   function limitSql(request) {
//     var blockSize = request.endRow - request.startRow;
//     return ' LIMIT ' + (blockSize + 1) + ' OFFSET ' + request.startRow;
//   }
//   function getLastRowIndex(request, results) {
//     if (!results || results.length === 0) {
//       return request.startRow;
//     }
//     var currentLastRow = request.startRow + results.length;
//     return currentLastRow <= request.endRow ? currentLastRow : -1;
//   }
// }
alert("fake server");

/***/ })

/******/ });
//# sourceMappingURL=fakeServer-4d8a61c6243e98155db2.js.map