(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.ieBundle = factory());
}(this, (function () { 'use strict';

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);

      if (enumerableOnly) {
        symbols = symbols.filter(function (sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      }

      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  var API_URL = location.hostname.includes("localhost") ? "http://localhost:5000" : "";

  var ApiClient = /*#__PURE__*/function () {
    function ApiClient(base_url, middleware) {
      _classCallCheck(this, ApiClient);

      if (base_url === undefined || base_url === null) {
        base_url = API_URL;
      }

      this.base_url = base_url;

      if (middleware === null || middleware === undefined) {
        middleware = [];
      }

      this.middleware = middleware;
    }

    _createClass(ApiClient, [{
      key: "request",
      value: function request(uri, method, body, headers) {
        var requestBody;

        if (body !== null && body !== undefined) {
          requestBody = JSON.stringify(body);
        }

        return fetch(this.base_url + uri, // Pass the request options to each middleware function for modification
        this.middleware.reduce(function (requestOptions, middleware) {
          return middleware(requestOptions);
        }, {
          method: method,
          body: requestBody,
          headers: _objectSpread2({
            "Content-Type": "application/json"
          }, headers)
        }));
      }
    }, {
      key: "get",
      value: function get(uri, headers) {
        return this.request(uri, "GET", null, headers);
      }
    }, {
      key: "post",
      value: function post(uri, body) {
        return this.request(uri, "POST", body);
      }
    }, {
      key: "put",
      value: function put(uri, body) {
        return this.request(uri, "PUT", body);
      }
    }, {
      key: "delete",
      value: function _delete(uri, body) {
        return this.request(uri, "DELETE", body);
      }
    }, {
      key: "patch",
      value: function patch(uri, body) {
        return this.request(uri, "PATCH", body);
      }
    }]);

    return ApiClient;
  }();
  var client = new ApiClient(API_URL);

  function registerUser(_ref) {
    var first = _ref.first,
        last = _ref.last,
        email = _ref.email;
    return client.post("/register/", {
      first: first,
      last: last,
      email: email
    });
  }

  function popupMessage(_ref) {
    var message = _ref.message,
        raw = _ref.raw;
    var messageElement = document.getElementById("popup-message");
    messageElement.classList.remove("hidden");

    if (raw === true) {
      messageElement.innerHTML = message;
    } else {
      messageElement.innerText = message;
    }

    return messageElement;
  }
  function errorMessage(message) {
    var element = popupMessage({
      message: message
    });
    element.classList.add("alert");
  }
  var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  function isEmail(value) {
    return value.match(emailRegex);
  }

  function onAllChanges(element, f) {
    element.onblur = f;
    element.onfocus = f;
    element.oninput = f;
  }

  function createForm(elementIds, formId, validate, onSubmit) {
    var elements = elementIds.reduce(function (lookup, elementId) {
      var element = document.getElementById(elementId);
      return _objectSpread2(_objectSpread2({}, lookup), {}, _defineProperty({}, elementId, element));
    }, {});
    elementIds.forEach(function (elementId) {
      onAllChanges(elements[elementId], function () {
        return validate(elements);
      });
    });
    var form = document.getElementById(formId);

    form.onsubmit = function (event) {
      event.preventDefault();

      if (!validate(elements)) {
        return;
      }

      onSubmit(elements);
    };
  }

  /**
   * Handle HTTP responses by providing handlers for HTTP status codes.
   *
   * The `handlers` object should have handlers for each status code you want
   * to handle (e.g. 200, 500) as well as a "default" handler for all other
   * cases.
   *
   * @param {object} handlers
   */

  function handleResponse(handlers) {
    handlers = _objectSpread2({
      // eslint-disable-next-line no-console
      default: function _default(resp) {
        return console.error("Request failed", resp);
      }
    }, handlers);
    return function (response) {
      if (handlers.hasOwnProperty(response.status)) {
        return handlers[response.status](response);
      } else {
        return handlers.default(response);
      }
    };
  }

  var routes = {
    "/": "/",
    "/new": "/new",
    "/edit": "/edit",
    "/embedded": "/embedded",
    "/COI": "/COI",
    "/plan": "/plan",
    "/register": "/register",
    "/request": "/request",
    "/signin": "/signin",
    "/signout": "/signout",
    "/analysis": "/analysis",
    "/evaluation": "/evaluation",
    "/eval": "/eval",
    "/coi-info": "/coi-info"
  };
  function navigateTo(route) {
    if (routes.hasOwnProperty(route) || route.includes("?event=")) {
      location.assign(routes[route] || route);
    } else {
      throw Error("The requested route does not exist: " + route);
    }
  }

  function onSubmit(_ref) {
    var first = _ref.first,
        last = _ref.last,
        email = _ref.email;
    registerUser({
      first: first.value,
      last: last.value,
      email: email.value
    }).then(handleResponse({
      201: function _() {
        document.getElementById("form").remove();
        document.getElementById("email-message").innerText = "Success! We sent you an email with a link to sign in.";
        window.setTimeout(function () {
          return navigateTo("/");
        }, 2000);
      },
      default: function _default() {
        errorMessage("We're sorry. Registration is currently unavailable.");
      }
    })).catch(function () {
      errorMessage("We're having trouble accessing our registration service. " + "Are you connected to the internet?");
    });
  }

  function validate(_ref2) {
    var first = _ref2.first,
        last = _ref2.last,
        email = _ref2.email,
        submit = _ref2.submit;
    var valid = first.value.length > 0 && last.value.length > 0 && email.value.length > 0 && isEmail(email.value);
    submit.disabled = !valid;
    return valid;
  }

  function main() {
    createForm(["first", "last", "email", "submit"], "form", validate, onSubmit);
  }

  return main;

})));
//# sourceMappingURL=register.js.map
