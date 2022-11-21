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

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
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

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = _objectWithoutPropertiesLoose(source, excluded);

    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }

    return object;
  }

  function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return _get(target, property, receiver || target);
  }

  function _taggedTemplateLiteral(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }

    return Object.freeze(Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw)
      }
    }));
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }

  function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;

    var _s, _e;

    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

    if (!it) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;

        var F = function () {};

        return {
          s: F,
          n: function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: F
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var normalCompletion = true,
        didErr = false,
        err;
    return {
      s: function () {
        it = it.call(o);
      },
      n: function () {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        didErr = true;
        err = e;
      },
      f: function () {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }

  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
  var directives = new WeakMap();
  /**
   * Brands a function as a directive factory function so that lit-html will call
   * the function during template rendering, rather than passing as a value.
   *
   * A _directive_ is a function that takes a Part as an argument. It has the
   * signature: `(part: Part) => void`.
   *
   * A directive _factory_ is a function that takes arguments for data and
   * configuration and returns a directive. Users of directive usually refer to
   * the directive factory as the directive. For example, "The repeat directive".
   *
   * Usually a template author will invoke a directive factory in their template
   * with relevant arguments, which will then return a directive function.
   *
   * Here's an example of using the `repeat()` directive factory that takes an
   * array and a function to render an item:
   *
   * ```js
   * html`<ul><${repeat(items, (item) => html`<li>${item}</li>`)}</ul>`
   * ```
   *
   * When `repeat` is invoked, it returns a directive function that closes over
   * `items` and the template function. When the outer template is rendered, the
   * return directive function is called with the Part for the expression.
   * `repeat` then performs it's custom logic to render multiple items.
   *
   * @param f The directive factory function. Must be a function that returns a
   * function of the signature `(part: Part) => void`. The returned function will
   * be called with the part object.
   *
   * @example
   *
   * import {directive, html} from 'lit-html';
   *
   * const immutable = directive((v) => (part) => {
   *   if (part.value !== v) {
   *     part.setValue(v)
   *   }
   * });
   */

  var directive = function directive(f) {
    return function () {
      var d = f.apply(void 0, arguments);
      directives.set(d, true);
      return d;
    };
  };
  var isDirective = function isDirective(o) {
    return typeof o === 'function' && directives.has(o);
  };

  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */

  /**
   * True if the custom elements polyfill is in use.
   */
  var isCEPolyfill = typeof window !== 'undefined' && window.customElements != null && window.customElements.polyfillWrapFlushCallback !== undefined;
  /**
   * Removes nodes, starting from `start` (inclusive) to `end` (exclusive), from
   * `container`.
   */

  var removeNodes = function removeNodes(container, start) {
    var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    while (start !== end) {
      var n = start.nextSibling;
      container.removeChild(start);
      start = n;
    }
  };

  /**
   * @license
   * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */

  /**
   * A sentinel value that signals that a value was handled by a directive and
   * should not be written to the DOM.
   */
  var noChange = {};
  /**
   * A sentinel value that signals a NodePart to fully clear its content.
   */

  var nothing = {};

  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */

  /**
   * An expression marker with embedded unique key to avoid collision with
   * possible text in templates.
   */
  var marker = "{{lit-".concat(String(Math.random()).slice(2), "}}");
  /**
   * An expression marker used text-positions, multi-binding attributes, and
   * attributes with markup-like text values.
   */

  var nodeMarker = "<!--".concat(marker, "-->");
  var markerRegex = new RegExp("".concat(marker, "|").concat(nodeMarker));
  /**
   * Suffix appended to all bound attribute names.
   */

  var boundAttributeSuffix = '$lit$';
  /**
   * An updatable Template that tracks the location of dynamic parts.
   */

  var Template = function Template(result, element) {
    _classCallCheck(this, Template);

    this.parts = [];
    this.element = element;
    var nodesToRemove = [];
    var stack = []; // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be null

    var walker = document.createTreeWalker(element.content, 133
    /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */
    , null, false); // Keeps track of the last index associated with a part. We try to delete
    // unnecessary nodes, but we never want to associate two different parts
    // to the same index. They must have a constant node between.

    var lastPartIndex = 0;
    var index = -1;
    var partIndex = 0;
    var strings = result.strings,
        length = result.values.length;

    while (partIndex < length) {
      var node = walker.nextNode();

      if (node === null) {
        // We've exhausted the content inside a nested template element.
        // Because we still have parts (the outer for-loop), we know:
        // - There is a template in the stack
        // - The walker will find a nextNode outside the template
        walker.currentNode = stack.pop();
        continue;
      }

      index++;

      if (node.nodeType === 1
      /* Node.ELEMENT_NODE */
      ) {
          if (node.hasAttributes()) {
            var attributes = node.attributes;
            var _length = attributes.length; // Per
            // https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap,
            // attributes are not guaranteed to be returned in document order.
            // In particular, Edge/IE can return them out of order, so we cannot
            // assume a correspondence between part index and attribute index.

            var count = 0;

            for (var i = 0; i < _length; i++) {
              if (endsWith(attributes[i].name, boundAttributeSuffix)) {
                count++;
              }
            }

            while (count-- > 0) {
              // Get the template literal section leading up to the first
              // expression in this attribute
              var stringForPart = strings[partIndex]; // Find the attribute name

              var name = lastAttributeNameRegex.exec(stringForPart)[2]; // Find the corresponding attribute
              // All bound attributes have had a suffix added in
              // TemplateResult#getHTML to opt out of special attribute
              // handling. To look up the attribute value we also need to add
              // the suffix.

              var attributeLookupName = name.toLowerCase() + boundAttributeSuffix;
              var attributeValue = node.getAttribute(attributeLookupName);
              node.removeAttribute(attributeLookupName);
              var statics = attributeValue.split(markerRegex);
              this.parts.push({
                type: 'attribute',
                index: index,
                name: name,
                strings: statics
              });
              partIndex += statics.length - 1;
            }
          }

          if (node.tagName === 'TEMPLATE') {
            stack.push(node);
            walker.currentNode = node.content;
          }
        } else if (node.nodeType === 3
      /* Node.TEXT_NODE */
      ) {
          var data = node.data;

          if (data.indexOf(marker) >= 0) {
            var parent = node.parentNode;

            var _strings = data.split(markerRegex);

            var lastIndex = _strings.length - 1; // Generate a new text node for each literal section
            // These nodes are also used as the markers for node parts

            for (var _i = 0; _i < lastIndex; _i++) {
              var insert = void 0;
              var s = _strings[_i];

              if (s === '') {
                insert = createMarker();
              } else {
                var match = lastAttributeNameRegex.exec(s);

                if (match !== null && endsWith(match[2], boundAttributeSuffix)) {
                  s = s.slice(0, match.index) + match[1] + match[2].slice(0, -boundAttributeSuffix.length) + match[3];
                }

                insert = document.createTextNode(s);
              }

              parent.insertBefore(insert, node);
              this.parts.push({
                type: 'node',
                index: ++index
              });
            } // If there's no text, we must insert a comment to mark our place.
            // Else, we can trust it will stick around after cloning.


            if (_strings[lastIndex] === '') {
              parent.insertBefore(createMarker(), node);
              nodesToRemove.push(node);
            } else {
              node.data = _strings[lastIndex];
            } // We have a part for each match found


            partIndex += lastIndex;
          }
        } else if (node.nodeType === 8
      /* Node.COMMENT_NODE */
      ) {
          if (node.data === marker) {
            var _parent = node.parentNode; // Add a new marker node to be the startNode of the Part if any of
            // the following are true:
            //  * We don't have a previousSibling
            //  * The previousSibling is already the start of a previous part

            if (node.previousSibling === null || index === lastPartIndex) {
              index++;

              _parent.insertBefore(createMarker(), node);
            }

            lastPartIndex = index;
            this.parts.push({
              type: 'node',
              index: index
            }); // If we don't have a nextSibling, keep this node so we have an end.
            // Else, we can remove it to save future costs.

            if (node.nextSibling === null) {
              node.data = '';
            } else {
              nodesToRemove.push(node);
              index--;
            }

            partIndex++;
          } else {
            var _i2 = -1;

            while ((_i2 = node.data.indexOf(marker, _i2 + 1)) !== -1) {
              // Comment node has a binding marker inside, make an inactive part
              // The binding won't work, but subsequent bindings will
              // TODO (justinfagnani): consider whether it's even worth it to
              // make bindings in comments work
              this.parts.push({
                type: 'node',
                index: -1
              });
              partIndex++;
            }
          }
        }
    } // Remove text binding nodes after the walk to not disturb the TreeWalker


    for (var _i3 = 0, _nodesToRemove = nodesToRemove; _i3 < _nodesToRemove.length; _i3++) {
      var n = _nodesToRemove[_i3];
      n.parentNode.removeChild(n);
    }
  };

  var endsWith = function endsWith(str, suffix) {
    var index = str.length - suffix.length;
    return index >= 0 && str.slice(index) === suffix;
  };

  var isTemplatePartActive = function isTemplatePartActive(part) {
    return part.index !== -1;
  }; // Allows `document.createComment('')` to be renamed for a
  // small manual size-savings.

  var createMarker = function createMarker() {
    return document.createComment('');
  };
  /**
   * This regex extracts the attribute name preceding an attribute-position
   * expression. It does this by matching the syntax allowed for attributes
   * against the string literal directly preceding the expression, assuming that
   * the expression is in an attribute-value position.
   *
   * See attributes in the HTML spec:
   * https://www.w3.org/TR/html5/syntax.html#elements-attributes
   *
   * " \x09\x0a\x0c\x0d" are HTML space characters:
   * https://www.w3.org/TR/html5/infrastructure.html#space-characters
   *
   * "\0-\x1F\x7F-\x9F" are Unicode control characters, which includes every
   * space character except " ".
   *
   * So an attribute is:
   *  * The name: any character except a control character, space character, ('),
   *    ("), ">", "=", or "/"
   *  * Followed by zero or more space characters
   *  * Followed by "="
   *  * Followed by zero or more space characters
   *  * Followed by:
   *    * Any character except space, ('), ("), "<", ">", "=", (`), or
   *    * (") then any non-("), or
   *    * (') then any non-(')
   */

  var lastAttributeNameRegex = // eslint-disable-next-line no-control-regex
  /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;

  /**
   * An instance of a `Template` that can be attached to the DOM and updated
   * with new values.
   */

  var TemplateInstance = /*#__PURE__*/function () {
    function TemplateInstance(template, processor, options) {
      _classCallCheck(this, TemplateInstance);

      this.__parts = [];
      this.template = template;
      this.processor = processor;
      this.options = options;
    }

    _createClass(TemplateInstance, [{
      key: "update",
      value: function update(values) {
        var i = 0;

        var _iterator = _createForOfIteratorHelper(this.__parts),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var part = _step.value;

            if (part !== undefined) {
              part.setValue(values[i]);
            }

            i++;
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        var _iterator2 = _createForOfIteratorHelper(this.__parts),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _part = _step2.value;

            if (_part !== undefined) {
              _part.commit();
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
    }, {
      key: "_clone",
      value: function _clone() {
        // There are a number of steps in the lifecycle of a template instance's
        // DOM fragment:
        //  1. Clone - create the instance fragment
        //  2. Adopt - adopt into the main document
        //  3. Process - find part markers and create parts
        //  4. Upgrade - upgrade custom elements
        //  5. Update - set node, attribute, property, etc., values
        //  6. Connect - connect to the document. Optional and outside of this
        //     method.
        //
        // We have a few constraints on the ordering of these steps:
        //  * We need to upgrade before updating, so that property values will pass
        //    through any property setters.
        //  * We would like to process before upgrading so that we're sure that the
        //    cloned fragment is inert and not disturbed by self-modifying DOM.
        //  * We want custom elements to upgrade even in disconnected fragments.
        //
        // Given these constraints, with full custom elements support we would
        // prefer the order: Clone, Process, Adopt, Upgrade, Update, Connect
        //
        // But Safari does not implement CustomElementRegistry#upgrade, so we
        // can not implement that order and still have upgrade-before-update and
        // upgrade disconnected fragments. So we instead sacrifice the
        // process-before-upgrade constraint, since in Custom Elements v1 elements
        // must not modify their light DOM in the constructor. We still have issues
        // when co-existing with CEv0 elements like Polymer 1, and with polyfills
        // that don't strictly adhere to the no-modification rule because shadow
        // DOM, which may be created in the constructor, is emulated by being placed
        // in the light DOM.
        //
        // The resulting order is on native is: Clone, Adopt, Upgrade, Process,
        // Update, Connect. document.importNode() performs Clone, Adopt, and Upgrade
        // in one step.
        //
        // The Custom Elements v1 polyfill supports upgrade(), so the order when
        // polyfilled is the more ideal: Clone, Process, Adopt, Upgrade, Update,
        // Connect.
        var fragment = isCEPolyfill ? this.template.element.content.cloneNode(true) : document.importNode(this.template.element.content, true);
        var stack = [];
        var parts = this.template.parts; // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be null

        var walker = document.createTreeWalker(fragment, 133
        /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */
        , null, false);
        var partIndex = 0;
        var nodeIndex = 0;
        var part;
        var node = walker.nextNode(); // Loop through all the nodes and parts of a template

        while (partIndex < parts.length) {
          part = parts[partIndex];

          if (!isTemplatePartActive(part)) {
            this.__parts.push(undefined);

            partIndex++;
            continue;
          } // Progress the tree walker until we find our next part's node.
          // Note that multiple parts may share the same node (attribute parts
          // on a single element), so this loop may not run at all.


          while (nodeIndex < part.index) {
            nodeIndex++;

            if (node.nodeName === 'TEMPLATE') {
              stack.push(node);
              walker.currentNode = node.content;
            }

            if ((node = walker.nextNode()) === null) {
              // We've exhausted the content inside a nested template element.
              // Because we still have parts (the outer for-loop), we know:
              // - There is a template in the stack
              // - The walker will find a nextNode outside the template
              walker.currentNode = stack.pop();
              node = walker.nextNode();
            }
          } // We've arrived at our part's node.


          if (part.type === 'node') {
            var _part2 = this.processor.handleTextExpression(this.options);

            _part2.insertAfterNode(node.previousSibling);

            this.__parts.push(_part2);
          } else {
            var _this$__parts;

            (_this$__parts = this.__parts).push.apply(_this$__parts, _toConsumableArray(this.processor.handleAttributeExpressions(node, part.name, part.strings, this.options)));
          }

          partIndex++;
        }

        if (isCEPolyfill) {
          document.adoptNode(fragment);
          customElements.upgrade(fragment);
        }

        return fragment;
      }
    }]);

    return TemplateInstance;
  }();

  /**
   * Our TrustedTypePolicy for HTML which is declared using the html template
   * tag function.
   *
   * That HTML is a developer-authored constant, and is parsed with innerHTML
   * before any untrusted expressions have been mixed in. Therefor it is
   * considered safe by construction.
   */

  var policy = window.trustedTypes && trustedTypes.createPolicy('lit-html', {
    createHTML: function createHTML(s) {
      return s;
    }
  });
  var commentMarker = " ".concat(marker, " ");
  /**
   * The return type of `html`, which holds a Template and the values from
   * interpolated expressions.
   */

  var TemplateResult = /*#__PURE__*/function () {
    function TemplateResult(strings, values, type, processor) {
      _classCallCheck(this, TemplateResult);

      this.strings = strings;
      this.values = values;
      this.type = type;
      this.processor = processor;
    }
    /**
     * Returns a string of HTML used to create a `<template>` element.
     */


    _createClass(TemplateResult, [{
      key: "getHTML",
      value: function getHTML() {
        var l = this.strings.length - 1;
        var html = '';
        var isCommentBinding = false;

        for (var i = 0; i < l; i++) {
          var s = this.strings[i]; // For each binding we want to determine the kind of marker to insert
          // into the template source before it's parsed by the browser's HTML
          // parser. The marker type is based on whether the expression is in an
          // attribute, text, or comment position.
          //   * For node-position bindings we insert a comment with the marker
          //     sentinel as its text content, like <!--{{lit-guid}}-->.
          //   * For attribute bindings we insert just the marker sentinel for the
          //     first binding, so that we support unquoted attribute bindings.
          //     Subsequent bindings can use a comment marker because multi-binding
          //     attributes must be quoted.
          //   * For comment bindings we insert just the marker sentinel so we don't
          //     close the comment.
          //
          // The following code scans the template source, but is *not* an HTML
          // parser. We don't need to track the tree structure of the HTML, only
          // whether a binding is inside a comment, and if not, if it appears to be
          // the first binding in an attribute.

          var commentOpen = s.lastIndexOf('<!--'); // We're in comment position if we have a comment open with no following
          // comment close. Because <-- can appear in an attribute value there can
          // be false positives.

          isCommentBinding = (commentOpen > -1 || isCommentBinding) && s.indexOf('-->', commentOpen + 1) === -1; // Check to see if we have an attribute-like sequence preceding the
          // expression. This can match "name=value" like structures in text,
          // comments, and attribute values, so there can be false-positives.

          var attributeMatch = lastAttributeNameRegex.exec(s);

          if (attributeMatch === null) {
            // We're only in this branch if we don't have a attribute-like
            // preceding sequence. For comments, this guards against unusual
            // attribute values like <div foo="<!--${'bar'}">. Cases like
            // <!-- foo=${'bar'}--> are handled correctly in the attribute branch
            // below.
            html += s + (isCommentBinding ? commentMarker : nodeMarker);
          } else {
            // For attributes we use just a marker sentinel, and also append a
            // $lit$ suffix to the name to opt-out of attribute-specific parsing
            // that IE and Edge do for style and certain SVG attributes.
            html += s.substr(0, attributeMatch.index) + attributeMatch[1] + attributeMatch[2] + boundAttributeSuffix + attributeMatch[3] + marker;
          }
        }

        html += this.strings[l];
        return html;
      }
    }, {
      key: "getTemplateElement",
      value: function getTemplateElement() {
        var template = document.createElement('template');
        var value = this.getHTML();

        if (policy !== undefined) {
          // this is secure because `this.strings` is a TemplateStringsArray.
          // TODO: validate this when
          // https://github.com/tc39/proposal-array-is-template-object is
          // implemented.
          value = policy.createHTML(value);
        }

        template.innerHTML = value;
        return template;
      }
    }]);

    return TemplateResult;
  }();

  var isPrimitive = function isPrimitive(value) {
    return value === null || !(_typeof(value) === 'object' || typeof value === 'function');
  };
  var isIterable = function isIterable(value) {
    return Array.isArray(value) || // eslint-disable-next-line @typescript-eslint/no-explicit-any
    !!(value && value[Symbol.iterator]);
  };
  /**
   * Writes attribute values to the DOM for a group of AttributeParts bound to a
   * single attribute. The value is only set once even if there are multiple parts
   * for an attribute.
   */

  var AttributeCommitter = /*#__PURE__*/function () {
    function AttributeCommitter(element, name, strings) {
      _classCallCheck(this, AttributeCommitter);

      this.dirty = true;
      this.element = element;
      this.name = name;
      this.strings = strings;
      this.parts = [];

      for (var i = 0; i < strings.length - 1; i++) {
        this.parts[i] = this._createPart();
      }
    }
    /**
     * Creates a single part. Override this to create a differnt type of part.
     */


    _createClass(AttributeCommitter, [{
      key: "_createPart",
      value: function _createPart() {
        return new AttributePart(this);
      }
    }, {
      key: "_getValue",
      value: function _getValue() {
        var strings = this.strings;
        var l = strings.length - 1;
        var parts = this.parts; // If we're assigning an attribute via syntax like:
        //    attr="${foo}"  or  attr=${foo}
        // but not
        //    attr="${foo} ${bar}" or attr="${foo} baz"
        // then we don't want to coerce the attribute value into one long
        // string. Instead we want to just return the value itself directly,
        // so that sanitizeDOMValue can get the actual value rather than
        // String(value)
        // The exception is if v is an array, in which case we do want to smash
        // it together into a string without calling String() on the array.
        //
        // This also allows trusted values (when using TrustedTypes) being
        // assigned to DOM sinks without being stringified in the process.

        if (l === 1 && strings[0] === '' && strings[1] === '') {
          var v = parts[0].value;

          if (_typeof(v) === 'symbol') {
            return String(v);
          }

          if (typeof v === 'string' || !isIterable(v)) {
            return v;
          }
        }

        var text = '';

        for (var i = 0; i < l; i++) {
          text += strings[i];
          var part = parts[i];

          if (part !== undefined) {
            var _v = part.value;

            if (isPrimitive(_v) || !isIterable(_v)) {
              text += typeof _v === 'string' ? _v : String(_v);
            } else {
              var _iterator = _createForOfIteratorHelper(_v),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var t = _step.value;
                  text += typeof t === 'string' ? t : String(t);
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            }
          }
        }

        text += strings[l];
        return text;
      }
    }, {
      key: "commit",
      value: function commit() {
        if (this.dirty) {
          this.dirty = false;
          this.element.setAttribute(this.name, this._getValue());
        }
      }
    }]);

    return AttributeCommitter;
  }();
  /**
   * A Part that controls all or part of an attribute value.
   */

  var AttributePart = /*#__PURE__*/function () {
    function AttributePart(committer) {
      _classCallCheck(this, AttributePart);

      this.value = undefined;
      this.committer = committer;
    }

    _createClass(AttributePart, [{
      key: "setValue",
      value: function setValue(value) {
        if (value !== noChange && (!isPrimitive(value) || value !== this.value)) {
          this.value = value; // If the value is a not a directive, dirty the committer so that it'll
          // call setAttribute. If the value is a directive, it'll dirty the
          // committer if it calls setValue().

          if (!isDirective(value)) {
            this.committer.dirty = true;
          }
        }
      }
    }, {
      key: "commit",
      value: function commit() {
        while (isDirective(this.value)) {
          var directive = this.value;
          this.value = noChange;
          directive(this);
        }

        if (this.value === noChange) {
          return;
        }

        this.committer.commit();
      }
    }]);

    return AttributePart;
  }();
  /**
   * A Part that controls a location within a Node tree. Like a Range, NodePart
   * has start and end locations and can set and update the Nodes between those
   * locations.
   *
   * NodeParts support several value types: primitives, Nodes, TemplateResults,
   * as well as arrays and iterables of those types.
   */

  var NodePart = /*#__PURE__*/function () {
    function NodePart(options) {
      _classCallCheck(this, NodePart);

      this.value = undefined;
      this.__pendingValue = undefined;
      this.options = options;
    }
    /**
     * Appends this part into a container.
     *
     * This part must be empty, as its contents are not automatically moved.
     */


    _createClass(NodePart, [{
      key: "appendInto",
      value: function appendInto(container) {
        this.startNode = container.appendChild(createMarker());
        this.endNode = container.appendChild(createMarker());
      }
      /**
       * Inserts this part after the `ref` node (between `ref` and `ref`'s next
       * sibling). Both `ref` and its next sibling must be static, unchanging nodes
       * such as those that appear in a literal section of a template.
       *
       * This part must be empty, as its contents are not automatically moved.
       */

    }, {
      key: "insertAfterNode",
      value: function insertAfterNode(ref) {
        this.startNode = ref;
        this.endNode = ref.nextSibling;
      }
      /**
       * Appends this part into a parent part.
       *
       * This part must be empty, as its contents are not automatically moved.
       */

    }, {
      key: "appendIntoPart",
      value: function appendIntoPart(part) {
        part.__insert(this.startNode = createMarker());

        part.__insert(this.endNode = createMarker());
      }
      /**
       * Inserts this part after the `ref` part.
       *
       * This part must be empty, as its contents are not automatically moved.
       */

    }, {
      key: "insertAfterPart",
      value: function insertAfterPart(ref) {
        ref.__insert(this.startNode = createMarker());

        this.endNode = ref.endNode;
        ref.endNode = this.startNode;
      }
    }, {
      key: "setValue",
      value: function setValue(value) {
        this.__pendingValue = value;
      }
    }, {
      key: "commit",
      value: function commit() {
        if (this.startNode.parentNode === null) {
          return;
        }

        while (isDirective(this.__pendingValue)) {
          var directive = this.__pendingValue;
          this.__pendingValue = noChange;
          directive(this);
        }

        var value = this.__pendingValue;

        if (value === noChange) {
          return;
        }

        if (isPrimitive(value)) {
          if (value !== this.value) {
            this.__commitText(value);
          }
        } else if (value instanceof TemplateResult) {
          this.__commitTemplateResult(value);
        } else if (value instanceof Node) {
          this.__commitNode(value);
        } else if (isIterable(value)) {
          this.__commitIterable(value);
        } else if (value === nothing) {
          this.value = nothing;
          this.clear();
        } else {
          // Fallback, will render the string representation
          this.__commitText(value);
        }
      }
    }, {
      key: "__insert",
      value: function __insert(node) {
        this.endNode.parentNode.insertBefore(node, this.endNode);
      }
    }, {
      key: "__commitNode",
      value: function __commitNode(value) {
        if (this.value === value) {
          return;
        }

        this.clear();

        this.__insert(value);

        this.value = value;
      }
    }, {
      key: "__commitText",
      value: function __commitText(value) {
        var node = this.startNode.nextSibling;
        value = value == null ? '' : value; // If `value` isn't already a string, we explicitly convert it here in case
        // it can't be implicitly converted - i.e. it's a symbol.

        var valueAsString = typeof value === 'string' ? value : String(value);

        if (node === this.endNode.previousSibling && node.nodeType === 3
        /* Node.TEXT_NODE */
        ) {
            // If we only have a single text node between the markers, we can just
            // set its value, rather than replacing it.
            // TODO(justinfagnani): Can we just check if this.value is primitive?
            node.data = valueAsString;
          } else {
          this.__commitNode(document.createTextNode(valueAsString));
        }

        this.value = value;
      }
    }, {
      key: "__commitTemplateResult",
      value: function __commitTemplateResult(value) {
        var template = this.options.templateFactory(value);

        if (this.value instanceof TemplateInstance && this.value.template === template) {
          this.value.update(value.values);
        } else {
          // Make sure we propagate the template processor from the TemplateResult
          // so that we use its syntax extension, etc. The template factory comes
          // from the render function options so that it can control template
          // caching and preprocessing.
          var instance = new TemplateInstance(template, value.processor, this.options);

          var fragment = instance._clone();

          instance.update(value.values);

          this.__commitNode(fragment);

          this.value = instance;
        }
      }
    }, {
      key: "__commitIterable",
      value: function __commitIterable(value) {
        // For an Iterable, we create a new InstancePart per item, then set its
        // value to the item. This is a little bit of overhead for every item in
        // an Iterable, but it lets us recurse easily and efficiently update Arrays
        // of TemplateResults that will be commonly returned from expressions like:
        // array.map((i) => html`${i}`), by reusing existing TemplateInstances.
        // If _value is an array, then the previous render was of an
        // iterable and _value will contain the NodeParts from the previous
        // render. If _value is not an array, clear this part and make a new
        // array for NodeParts.
        if (!Array.isArray(this.value)) {
          this.value = [];
          this.clear();
        } // Lets us keep track of how many items we stamped so we can clear leftover
        // items from a previous render


        var itemParts = this.value;
        var partIndex = 0;
        var itemPart;

        var _iterator2 = _createForOfIteratorHelper(value),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var item = _step2.value;
            // Try to reuse an existing part
            itemPart = itemParts[partIndex]; // If no existing part, create a new one

            if (itemPart === undefined) {
              itemPart = new NodePart(this.options);
              itemParts.push(itemPart);

              if (partIndex === 0) {
                itemPart.appendIntoPart(this);
              } else {
                itemPart.insertAfterPart(itemParts[partIndex - 1]);
              }
            }

            itemPart.setValue(item);
            itemPart.commit();
            partIndex++;
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        if (partIndex < itemParts.length) {
          // Truncate the parts array so _value reflects the current state
          itemParts.length = partIndex;
          this.clear(itemPart && itemPart.endNode);
        }
      }
    }, {
      key: "clear",
      value: function clear() {
        var startNode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.startNode;
        removeNodes(this.startNode.parentNode, startNode.nextSibling, this.endNode);
      }
    }]);

    return NodePart;
  }();
  /**
   * Implements a boolean attribute, roughly as defined in the HTML
   * specification.
   *
   * If the value is truthy, then the attribute is present with a value of
   * ''. If the value is falsey, the attribute is removed.
   */

  var BooleanAttributePart = /*#__PURE__*/function () {
    function BooleanAttributePart(element, name, strings) {
      _classCallCheck(this, BooleanAttributePart);

      this.value = undefined;
      this.__pendingValue = undefined;

      if (strings.length !== 2 || strings[0] !== '' || strings[1] !== '') {
        throw new Error('Boolean attributes can only contain a single expression');
      }

      this.element = element;
      this.name = name;
      this.strings = strings;
    }

    _createClass(BooleanAttributePart, [{
      key: "setValue",
      value: function setValue(value) {
        this.__pendingValue = value;
      }
    }, {
      key: "commit",
      value: function commit() {
        while (isDirective(this.__pendingValue)) {
          var directive = this.__pendingValue;
          this.__pendingValue = noChange;
          directive(this);
        }

        if (this.__pendingValue === noChange) {
          return;
        }

        var value = !!this.__pendingValue;

        if (this.value !== value) {
          if (value) {
            this.element.setAttribute(this.name, '');
          } else {
            this.element.removeAttribute(this.name);
          }

          this.value = value;
        }

        this.__pendingValue = noChange;
      }
    }]);

    return BooleanAttributePart;
  }();
  /**
   * Sets attribute values for PropertyParts, so that the value is only set once
   * even if there are multiple parts for a property.
   *
   * If an expression controls the whole property value, then the value is simply
   * assigned to the property under control. If there are string literals or
   * multiple expressions, then the strings are expressions are interpolated into
   * a string first.
   */

  var PropertyCommitter = /*#__PURE__*/function (_AttributeCommitter) {
    _inherits(PropertyCommitter, _AttributeCommitter);

    var _super = _createSuper(PropertyCommitter);

    function PropertyCommitter(element, name, strings) {
      var _this;

      _classCallCheck(this, PropertyCommitter);

      _this = _super.call(this, element, name, strings);
      _this.single = strings.length === 2 && strings[0] === '' && strings[1] === '';
      return _this;
    }

    _createClass(PropertyCommitter, [{
      key: "_createPart",
      value: function _createPart() {
        return new PropertyPart(this);
      }
    }, {
      key: "_getValue",
      value: function _getValue() {
        if (this.single) {
          return this.parts[0].value;
        }

        return _get(_getPrototypeOf(PropertyCommitter.prototype), "_getValue", this).call(this);
      }
    }, {
      key: "commit",
      value: function commit() {
        if (this.dirty) {
          this.dirty = false; // eslint-disable-next-line @typescript-eslint/no-explicit-any

          this.element[this.name] = this._getValue();
        }
      }
    }]);

    return PropertyCommitter;
  }(AttributeCommitter);
  var PropertyPart = /*#__PURE__*/function (_AttributePart) {
    _inherits(PropertyPart, _AttributePart);

    var _super2 = _createSuper(PropertyPart);

    function PropertyPart() {
      _classCallCheck(this, PropertyPart);

      return _super2.apply(this, arguments);
    }

    return PropertyPart;
  }(AttributePart); // Detect event listener options support. If the `capture` property is read
  // from the options object, then options are supported. If not, then the third
  // argument to add/removeEventListener is interpreted as the boolean capture
  // value so we should only pass the `capture` property.

  var eventOptionsSupported = false; // Wrap into an IIFE because MS Edge <= v41 does not support having try/catch
  // blocks right into the body of a module

  (function () {
    try {
      var options = {
        get capture() {
          eventOptionsSupported = true;
          return false;
        }

      }; // eslint-disable-next-line @typescript-eslint/no-explicit-any

      window.addEventListener('test', options, options); // eslint-disable-next-line @typescript-eslint/no-explicit-any

      window.removeEventListener('test', options, options);
    } catch (_e) {// event options not supported
    }
  })();

  var EventPart = /*#__PURE__*/function () {
    function EventPart(element, eventName, eventContext) {
      var _this2 = this;

      _classCallCheck(this, EventPart);

      this.value = undefined;
      this.__pendingValue = undefined;
      this.element = element;
      this.eventName = eventName;
      this.eventContext = eventContext;

      this.__boundHandleEvent = function (e) {
        return _this2.handleEvent(e);
      };
    }

    _createClass(EventPart, [{
      key: "setValue",
      value: function setValue(value) {
        this.__pendingValue = value;
      }
    }, {
      key: "commit",
      value: function commit() {
        while (isDirective(this.__pendingValue)) {
          var directive = this.__pendingValue;
          this.__pendingValue = noChange;
          directive(this);
        }

        if (this.__pendingValue === noChange) {
          return;
        }

        var newListener = this.__pendingValue;
        var oldListener = this.value;
        var shouldRemoveListener = newListener == null || oldListener != null && (newListener.capture !== oldListener.capture || newListener.once !== oldListener.once || newListener.passive !== oldListener.passive);
        var shouldAddListener = newListener != null && (oldListener == null || shouldRemoveListener);

        if (shouldRemoveListener) {
          this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options);
        }

        if (shouldAddListener) {
          this.__options = getOptions(newListener);
          this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options);
        }

        this.value = newListener;
        this.__pendingValue = noChange;
      }
    }, {
      key: "handleEvent",
      value: function handleEvent(event) {
        if (typeof this.value === 'function') {
          this.value.call(this.eventContext || this.element, event);
        } else {
          this.value.handleEvent(event);
        }
      }
    }]);

    return EventPart;
  }(); // We copy options because of the inconsistent behavior of browsers when reading
  // the third argument of add/removeEventListener. IE11 doesn't support options
  // at all. Chrome 41 only reads `capture` if the argument is an object.

  var getOptions = function getOptions(o) {
    return o && (eventOptionsSupported ? {
      capture: o.capture,
      passive: o.passive,
      once: o.once
    } : o.capture);
  };

  /**
   * Creates Parts when a template is instantiated.
   */

  var DefaultTemplateProcessor = /*#__PURE__*/function () {
    function DefaultTemplateProcessor() {
      _classCallCheck(this, DefaultTemplateProcessor);
    }

    _createClass(DefaultTemplateProcessor, [{
      key: "handleAttributeExpressions",
      value:
      /**
       * Create parts for an attribute-position binding, given the event, attribute
       * name, and string literals.
       *
       * @param element The element containing the binding
       * @param name  The attribute name
       * @param strings The string literals. There are always at least two strings,
       *   event for fully-controlled bindings with a single expression.
       */
      function handleAttributeExpressions(element, name, strings, options) {
        var prefix = name[0];

        if (prefix === '.') {
          var _committer = new PropertyCommitter(element, name.slice(1), strings);

          return _committer.parts;
        }

        if (prefix === '@') {
          return [new EventPart(element, name.slice(1), options.eventContext)];
        }

        if (prefix === '?') {
          return [new BooleanAttributePart(element, name.slice(1), strings)];
        }

        var committer = new AttributeCommitter(element, name, strings);
        return committer.parts;
      }
      /**
       * Create parts for a text-position binding.
       * @param templateFactory
       */

    }, {
      key: "handleTextExpression",
      value: function handleTextExpression(options) {
        return new NodePart(options);
      }
    }]);

    return DefaultTemplateProcessor;
  }();
  var defaultTemplateProcessor = new DefaultTemplateProcessor();

  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
  /**
   * The default TemplateFactory which caches Templates keyed on
   * result.type and result.strings.
   */

  function templateFactory(result) {
    var templateCache = templateCaches.get(result.type);

    if (templateCache === undefined) {
      templateCache = {
        stringsArray: new WeakMap(),
        keyString: new Map()
      };
      templateCaches.set(result.type, templateCache);
    }

    var template = templateCache.stringsArray.get(result.strings);

    if (template !== undefined) {
      return template;
    } // If the TemplateStringsArray is new, generate a key from the strings
    // This key is shared between all templates with identical content


    var key = result.strings.join(marker); // Check if we already have a Template for this key

    template = templateCache.keyString.get(key);

    if (template === undefined) {
      // If we have not seen this key before, create a new Template
      template = new Template(result, result.getTemplateElement()); // Cache the Template for this key

      templateCache.keyString.set(key, template);
    } // Cache all future queries for this TemplateStringsArray


    templateCache.stringsArray.set(result.strings, template);
    return template;
  }
  var templateCaches = new Map();

  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
  var parts = new WeakMap();
  /**
   * Renders a template result or other value to a container.
   *
   * To update a container with new values, reevaluate the template literal and
   * call `render` with the new result.
   *
   * @param result Any value renderable by NodePart - typically a TemplateResult
   *     created by evaluating a template tag like `html` or `svg`.
   * @param container A DOM parent to render to. The entire contents are either
   *     replaced, or efficiently updated if the same result type was previous
   *     rendered there.
   * @param options RenderOptions for the entire render tree rendered to this
   *     container. Render options must *not* change between renders to the same
   *     container, as those changes will not effect previously rendered DOM.
   */

  var render = function render(result, container, options) {
    var part = parts.get(container);

    if (part === undefined) {
      removeNodes(container, container.firstChild);
      parts.set(container, part = new NodePart(Object.assign({
        templateFactory: templateFactory
      }, options)));
      part.appendInto(container);
    }

    part.setValue(result);
    part.commit();
  };

  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
  // This line will be used in regexes to search for lit-html usage.
  // TODO(justinfagnani): inject version number at build time

  if (typeof window !== 'undefined') {
    (window['litHtmlVersions'] || (window['litHtmlVersions'] = [])).push('1.4.1');
  }
  /**
   * Interprets a template literal as an HTML template that can efficiently
   * render to and update a container.
   */


  var html = function html(strings) {
    for (var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      values[_key - 1] = arguments[_key];
    }

    return new TemplateResult(strings, values, 'html', defaultTemplateProcessor);
  };

  var DisplayPane = /*#__PURE__*/function () {
    /**
     * Constructor for the DisplayPane class.
     * @param id
     * @param width
     */
    function DisplayPane(_ref) {
      var _ref$id = _ref.id,
          id = _ref$id === void 0 ? "pane" : _ref$id,
          _ref$width = _ref.width,
          width = _ref$width === void 0 ? 0.5 : _ref$width;

      _classCallCheck(this, DisplayPane);

      this.render = this.render.bind(this);
      this.id = id;
      this.container = document.getElementsByClassName("pane-contain")[0]; // Create a unique HTML entity for this Pane; first, determine whether a
      // Pane with this already exists; if so, do nothing, otherwise create a
      // new object.

      var pane = document.getElementById(this.id);

      if (!pane) {
        // Create a new div the proper way and attach it to the parent
        // element.
        pane = document.createElement("div");
        pane.id = this.id;
        pane.className = "pane";
        this.container.appendChild(pane);
      } // Set the Pane's HTML entity as a property of the DisplayPane.


      this.pane = pane; // Set the Pane's width.

      this.width = width; // Set the inner content to be nothing, for now.

      this.inner = null;
    }

    _createClass(DisplayPane, [{
      key: "content",
      set: function set(content) {
        this.inner = content;
      }
    }, {
      key: "render",
      value: function render$1() {
        render(this.inner, this.pane);
      }
    }]);

    return DisplayPane;
  }();

  var lookupState = {
    "santafe": "New Mexico",
    "ccsanitation2": "California",
    "ccsanitation": "California",
    "nevada": "Nevada",
    "clarknv": "Nevada",
    "alaska": "Alaska",
    "austin": "Texas",
    "chicago": "Illinois",
    "illinois": "Illinois",
    "colorado": "Colorado",
    "hawaii": "Hawaii",
    "iowa": "Iowa",
    "georgia": "Georgia",
    "connecticut": "Connecticut",
    "islip": "New York",
    "forsyth_nc": "North Carolina",
    "newyork": "New York",
    "lowell": "Massachusetts",
    "maryland": "Maryland",
    "ma": "Massachusetts",
    "michigan": "Michigan",
    "minnesota": "Minnesota",
    "mississippi": "Mississippi",
    "missouri": "Missouri",
    "new_mexico": "New Mexico",
    "new_mexico_bg": "New Mexico",
    "nc": "North Carolina",
    "pennsylvania": "Pennsylvania",
    "philadelphia": "Pennsylvania",
    "lax": "California",
    "napa": "California",
    "napaschools": "California",
    "california": "California",
    "santa_clara": "California",
    "texas": "Texas",
    "vermont": "Vermont",
    "wisconsin": "Wisconsin",
    "wisconsin2020": "Wisconsin",
    "ontarioca": "California",
    "virginia": "Virginia",
    "rhode_island": "Rhode Island",
    "utah": "Utah",
    "vabeach": "Virginia",
    "providence_ri": "Rhode Island",
    "yakima_wa": "Washington",
    "kingcountywa": "Washington",
    "washington": "Washington",
    "little_rock": "Arkansas",
    "arkansas": "Arkansas",
    "portlandor": "Oregon",
    "salem_keizer": "Oregon",
    "oregon": "Oregon",
    "ohio": "Ohio",
    "oklahoma": "Oklahoma",
    "maricopa": "Arizona",
    "phoenix": "Arizona",
    "nwaz": "Arizona",
    "seaz": "Arizona",
    "yuma": "Arizona",
    "arizona": "Arizona",
    "miamifl": "Florida",
    "miamidade": "Florida",
    "delaware": "Delaware",
    "alabama": "Alabama",
    "florida": "Florida",
    "indiana": "Indiana",
    "kansas": "Kansas",
    "kentucky": "Kentucky",
    "louisiana": "Louisiana",
    "maine": "Maine",
    "montana": "Montana",
    "nebraska": "Nebraska",
    "newjersey": "New Jersey",
    "northdakota": "North Dakota",
    "newhampshire": "New Hampshire",
    "southdakota": "South Dakota",
    "tennessee": "Tennessee",
    "westvirginia": "West Virginia",
    "wyoming": "Wyoming",
    "puertorico": "Puerto Rico",
    "puertorico_prec": "Puerto Rico",
    "idaho": "Idaho",
    "dc": "Washington, DC",
    "southcarolina": "South Carolina"
  };

  function listPlaces(placeID, stateName) {
    if (!stateName) {
      stateName = lookupState[placeID];
    }

    if (placeID) {
      return fetch("/assets/data/modules/" + stateName + ".json").then(function (resp) {
        return resp.json();
      }).then(function (data) {
        return data.filter(function (d) {
          return d.id === placeID;
        });
      });
    } else {
      return fetch("/assets/data/modules/" + stateName + ".json").then(function (resp) {
        return resp.json();
      });
    }
  }

  function zeros(n) {
    var vector = [];

    for (var i = 0; i < n; i++) {
      vector.push(0);
    }

    return vector;
  }
  // how-to-print-a-number-with-commas-as-thousands-separators-in-javascript#2901298

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  function roundToDecimal(n, places) {
    return Math.round(n * Math.pow(10, places)) / Math.pow(10, places);
  }
  function sum(values) {
    return values.reduce(function (total, value) {
      return total + value;
    }, 0);
  }
  function divideOrZeroIfNaN(x, y) {
    return ["case", [">", y, 0], ["/", x, y], 0];
  }
  function replace(list, i, item) {
    return [].concat(_toConsumableArray(list.slice(0, i)), [item], _toConsumableArray(list.slice(i + 1)));
  } // Light-weight redux implementation

  function createReducer(handlers) {
    return function (state, action) {
      if (handlers.hasOwnProperty(action.type)) {
        return handlers[action.type](state, action);
      }

      return state;
    };
  }
  function combineReducers(reducers) {
    return function (state, action) {
      var hasChanged = false;
      var nextState = {};

      for (var key in reducers) {
        nextState[key] = reducers[key](state[key], action);
        hasChanged = hasChanged || nextState[key] !== state[key];
      }

      return hasChanged ? nextState : state;
    };
  }
  function createActions(handlers) {
    var actions = {};

    var _loop = function _loop(actionType) {
      actions[actionType] = function (actionInfo) {
        return _objectSpread2(_objectSpread2({}, actionInfo), {}, {
          type: actionType
        });
      };
    };

    for (var actionType in handlers) {
      _loop(actionType);
    }

    return actions;
  }
  function isString(x) {
    return typeof x === "string" || x instanceof String;
  } // Copied from stackoverflow https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript

  function dec2hex(dec) {
    return ("0" + dec.toString(16)).substr(-2);
  }
  function generateId(len) {
    var arr = new Uint8Array((len || 40) / 2);
    var crypto = window.crypto ? window.crypto : window.msCrypto;
    crypto.getRandomValues(arr);
    return Array.from(arr, dec2hex).join("");
  }
  function bindAll(keys, obj) {
    keys.forEach(function (key) {
      obj[key] = obj[key].bind(obj);
    });
  }

  var COUNTIES_TILESET = {
    sourceLayer: "cb_2018_us_county_500k-6p4p3f",
    source: {
      type: "vector",
      url: "mapbox://districtr.6fcd9f0h"
    }
  };
  var stateNameToFips = {
    alabama: "01",
    alaska: "02",
    arizona: "04",
    arkansas: "05",
    california: "06",
    colorado: "08",
    connecticut: "09",
    delaware: 10,
    dc: 11,
    "district of columbia": 11,
    district_of_columbia: 11,
    districtofcolumbia: 11,
    florida: 12,
    georgia: 13,
    hawaii: 15,
    idaho: 16,
    illinois: 17,
    indiana: 18,
    iowa: 19,
    kansas: 20,
    kentucky: 21,
    louisiana: 22,
    maine: 23,
    maryland: 24,
    massachusetts: 25,
    ma: 25,
    michigan: 26,
    minnesota: 27,
    mississippi: 28,
    missouri: 29,
    montana: 30,
    nebraska: 31,
    nevada: 32,
    "new hampshire": 33,
    new_hampshire: 33,
    newhampshire: 33,
    "new jersey": 34,
    new_jersey: 34,
    newjersey: 34,
    "new mexico": 35,
    new_mexico: 35,
    new_mexico_portal: 35,
    newmexico: 35,
    "new york": 36,
    new_york: 36,
    newyork: 36,
    "north carolina": 37,
    north_carolina: 37,
    northcarolina: 37,
    nc: 37,
    "north dakota": 38,
    north_dakota: 38,
    northdakota: 38,
    ohio: 39,
    oklahoma: 40,
    oregon: 41,
    pennsylvania: 42,
    "rhode island": 44,
    rhode_island: 44,
    rhodeisland: 44,
    "south carolina": 45,
    southcarolina: 45,
    south_carolina: 45,
    "south dakota": 46,
    south_dakota: 46,
    southdakota: 46,
    tennessee: 47,
    texas: 48,
    utah: 49,
    vermont: 50,
    virginia: 51,
    washington: 53,
    "west virginia": 54,
    westvirginia: 55,
    west_virginia: 54,
    wisconsin: 55,
    wyoming: 56,
    "puerto rico": 72,
    puertorico: 72,
    puerto_rico: 72
  };
  function spatial_abilities(id) {
    var status = {
      alabama: {
        native_american: true,
        number_markers: true,
        county_brush: true,
        shapefile: true,
        find_unpainted: true,
        contiguity: true
      },
      alaska: {
        number_markers: true,
        native_american: true,
        shapefile: true,
        school_districts: true,
        municipalities: true,
        current_districts: true,
        boundaries: [{
          id: '2021_plan',
          label: '2021 Proclamation Plan',
          path: 'current_districts/alaska/2021_plan'
        }],
        portal: {
          endpoint: 'https://www.akredistrict.org/map-comment'
        }
      },
      alaska_blocks: {
        coalition: false,
        school_districts: true,
        municipalities: true,
        current_districts: true,
        portal: {
          endpoint: 'https://www.akredistrict.org/map-comment',
          saveredirect: 'www.akredistrict.org/create/edit.html'
        }
      },
      arizona: {
        number_markers: true,
        county_brush: true,
        native_american: true,
        shapefile: true // find_unpainted: true,

      },
      maricopa: {
        native_american: true,
        number_markers: true
      },
      nwaz: {
        native_american: true,
        number_markers: true
      },
      seaz: {
        native_american: true,
        number_markers: true
      },
      mesaaz: {
        native_american: true,
        number_markers: true,
        border: true,
        sideload: true
      },
      glendaleaz: {
        border: true,
        number_markers: true,
        shapefile: true,
        coalition: false,
        boundaries: [{
          id: 'districts',
          label: 'Current Districts',
          path: 'current_districts/arizona/glendaleaz',
          centroids: true
        }]
      },
      phoenix: {
        native_american: true,
        number_markers: true,
        border: true
      },
      yuma: {
        native_american: true,
        number_markers: true,
        border: true,
        shapefile: true,
        find_unpainted: true,
        boundaries: [{
          id: 'districts',
          label: 'Current Districts',
          path: 'current_districts/arizona/yuma',
          centroids: true
        }]
      },
      yuma_awc: {
        native_american: true,
        number_markers: true,
        border: true,
        shapefile: true,
        find_unpainted: true,
        boundaries: [{
          id: 'districts',
          label: 'Current Districts',
          path: 'current_districts/arizona/yuma_awc',
          centroids: true
        }]
      },
      arkansas: {
        number_markers: true,
        county_brush: true,
        shapefile: true,
        find_unpainted: true
      },
      california: {
        number_markers: true,
        native_american: true,
        county_brush: true,
        shapefile: true,
        sideload: true // find_unpainted: true,

      },
      ca_SanDiego: {
        number_markers: true,
        shapefile: true,
        border: true,
        purple_demo: true,
        boundaries: [{
          id: 'districts',
          label: 'Current City Council Districts (2011)',
          path: 'current_districts/california/ca_SanDiego',
          lineColor: 'orangered'
        }, {
          id: 'neighborhood',
          label: 'Community Planning Group Areas',
          path: 'neighborhoods/california/ca_SanDiego',
          centroids: true,
          lineColor: 'darkgreen'
        }, {
          id: 'pbeats',
          // aka police beats
          label: 'Neighborhood Areas',
          path: 'neighborhoods/california/ca_SanDiego_beats',
          centroids: true,
          lineColor: 'darkblue'
        }, {
          id: 'schools',
          label: 'School Districts',
          path: 'school_districts/california/ca_SanDiego',
          centroids: true,
          fill: true,
          fill_alt: true
        }],
        portal: {
          endpoint: 'https://portal.sandiego-mapping.org'
        }
      },
      livermore: {
        number_markers: true,
        border: true,
        shapefile: true,
        coalition: false
      },
      ca_contracosta: {
        number_markers: true,
        border: true,
        shapefile: true,
        school_districts: true,
        municipalities: true,
        current_districts: true,
        boundaries: [{
          id: 'contracosta_cdp',
          label: 'Census Designated Places',
          path: 'ca_contracosta_cdp'
        }],
        portal: {
          endpoint: 'https://portal.contracosta-mapping.org'
        }
      },
      ca_sutter: {
        number_markers: true,
        border: true,
        shapefile: true,
        municipalities: true,
        current_districts: true,
        boundaries: [{
          id: 'precincts',
          label: 'Current Precincts',
          path: 'current_districts/california/ca_sutter_precincts'
        }]
      },
      ftmyers: {
        number_markers: true,
        border: true,
        shapefile: true,
        find_unpainted: true
      },
      contracosta: {
        number_markers: true,
        border: true,
        shapefile: true,
        municipalities: true,
        portal: {
          endpoint: 'https://portal.contracosta-mapping.org'
        }
      },
      pasorobles: {
        number_markers: true,
        border: true,
        shapefile: true
      },
      sacramento: {
        coalition: false,
        shapefile: true,
        number_markers: true,
        border: true,
        sideload: true // divisor: 1000,

      },
      "29palms": {
        coalition: false,
        shapefile: true,
        number_markers: true,
        border: true,
        sideload: false,
        current_districts: true
      },
      yuba_city: {
        coalition: false,
        shapefile: false,
        number_markers: true,
        border: true,
        sideload: false
      },
      buena_park: {
        coalition: false,
        shapefile: false,
        number_markers: true,
        border: true,
        sideload: false
      },
      modesto: {
        coalition: false,
        shapefile: false,
        number_markers: true,
        border: true,
        sideload: false
      },
      sbusd_5: {
        coalition: false,
        shapefile: false,
        number_markers: true,
        border: true,
        sideload: false,
        boundaries: [{
          id: 'sbusd_feeder',
          label: 'Elementary School Attendance Boundaries',
          path: 'school_districts/california/sbusd-feeder-districts',
          lineColor: 'black'
        }, {
          id: 'sbusd',
          label: 'Cities and Towns',
          path: 'municipalities/california/sbusd-municipalities',
          lineColor: 'black'
        }]
      },
      sbusd_7: {
        coalition: false,
        shapefile: false,
        number_markers: true,
        border: true,
        sideload: false,
        boundaries: [{
          id: 'sbusd_feeder',
          label: 'Elementary School Attendance Boundaries',
          path: 'school_districts/california/sbusd-feeder-districts',
          lineColor: 'black'
        }, {
          id: 'sbusd',
          label: 'Cities and Towns',
          path: 'municipalities/california/sbusd-municipalities',
          lineColor: 'black'
        }]
      },
      navajoco: {
        coalition: false,
        shapefile: true,
        number_markers: true,
        border: true,
        sideload: false,
        current_districts: "Supervisorial Districts",
        boundaries: []
      },
      san_dimas: {
        coalition: false,
        shapefile: true,
        number_markers: true,
        border: true,
        sideload: false
      },
      marinco: {
        coalition: false,
        shapefile: true,
        number_markers: true,
        border: true,
        current_districts: "Marin County",
        boundaries: [{
          path: "municipalities/california/marinco",
          id: "cities_towns",
          label: "Cities and Towns",
          centroids: false,
          fill: false
        }, {
          path: "school_districts/california/marinco",
          id: "school_districts",
          label: "School Districts",
          centroids: false,
          fill: false
        }]
      },
      oxnarduhsd: {
        coalition: false,
        shapefile: true,
        number_markers: true,
        border: true,
        boundaries: [{
          path: "school_districts/california/oxnarduhsd_elementary",
          id: "elementary_schools",
          label: "Elementary School Attendance Boundaries",
          centroids: false,
          fill: false
        }, {
          path: "municipalities/california/oxnarduhsd",
          id: "cities_towns",
          label: "Cities and Towns",
          centroids: false,
          fill: false
        }]
      },
      anaheim: {
        coalition: false,
        shapefile: true,
        number_markers: true,
        border: true,
        sideload: false,
        current_districts: true
      },
      arcadia: {
        coalition: false,
        shapefile: true,
        number_markers: true,
        border: true,
        sideload: false,
        current_districts: true
      },
      la_mirada: {
        coalition: false,
        shapefile: true,
        number_markers: true,
        border: true,
        sideload: false,
        current_districts: true
      },
      lakewood: {
        coalition: false,
        shapefile: true,
        number_markers: true,
        border: true,
        sideload: false
      },
      stlouis: {
        shapefile: true,
        number_markers: true,
        border: true
      },
      placentia: {
        coalition: false,
        shapefile: true,
        number_markers: true,
        border: true,
        sideload: false,
        current_districts: true
      },
      san_bruno: {
        coalition: false,
        shapefile: true,
        number_markers: true,
        border: true,
        sideload: false
      },
      ca_sonoma: {
        coalition: false,
        border: true,
        shapefile: true,
        number_markers: true,
        current_districts: true
      },
      sunnyvale: {
        coalition: false,
        border: true,
        shapefile: true,
        number_markers: true,
        current_districts: true
      },
      laverne: {
        coalition: false,
        border: true,
        shapefile: true,
        number_markers: true
      },
      pomona: {
        coalition: false,
        border: true,
        shapefile: true,
        number_markers: true,
        current_districts: true
      },
      ca_richmond: {
        coalition: false,
        border: true,
        shapefile: true,
        number_markers: true,
        current_districts: true
      },
      elcajon: {
        coalition: false,
        border: true,
        shapefile: true,
        number_markers: true,
        current_districts: true
      },
      ca_carlsbad: {
        coalition: false,
        border: true,
        shapefile: true,
        number_markers: true,
        current_districts: true
      },
      encinitas: {
        coalition: false,
        border: true,
        shapefile: true,
        number_markers: true,
        current_districts: true
      },
      buenapark: {
        coalition: false,
        border: true,
        shapefile: true,
        number_markers: true,
        current_districts: true
      },
      halfmoon: {
        coalition: false,
        border: true,
        shapefile: true,
        number_markers: true,
        current_districts: true
      },
      ca_stockton: {
        coalition: false,
        border: true,
        shapefile: true,
        number_markers: true,
        current_districts: true
      },
      lodi: {
        coalition: false,
        border: true,
        shapefile: true,
        number_markers: true,
        current_districts: true
      },
      ca_pasadena: {
        coalition: false,
        border: true,
        shapefile: true,
        number_markers: true,
        current_districts: true
      },
      ca_goleta: {
        coalition: false,
        border: true,
        shapefile: true,
        number_markers: true
      },
      ca_glendora: {
        coalition: false,
        border: true,
        shapefile: true,
        number_markers: true
      },
      ca_santabarbara: {
        coalition: false,
        border: true,
        shapefile: true,
        number_markers: true,
        current_districts: true
      },
      ca_fresno: {
        coalition: false,
        border: true,
        shapefile: true,
        number_markers: true,
        current_districts: true
      },
      ca_fresno_ci: {
        coalition: false,
        border: true,
        shapefile: true,
        number_markers: true,
        current_districts: true
      },
      ca_nevada: {
        coalition: false,
        border: true,
        shapefile: true,
        number_markers: true,
        current_districts: true
      },
      ca_merced: {
        coalition: false,
        border: true,
        shapefile: true,
        number_markers: true,
        current_districts: true
      },
      ca_kings: {
        coalition: false,
        border: true,
        shapefile: true,
        number_markers: true,
        current_districts: true
      },
      lake_el: {
        coalition: false,
        border: true,
        shapefile: true,
        number_markers: true,
        current_districts: true
      },
      ca_chino: {
        coalition: false,
        border: true,
        shapefile: true,
        number_markers: true,
        current_districts: true
      },
      ca_campbell: {
        coalition: false,
        border: true,
        shapefile: true,
        number_markers: true,
        current_districts: true
      },
      ca_fremont: {
        coalition: false,
        border: true,
        shapefile: true,
        number_markers: true,
        current_districts: true
      },
      ca_buellton: {
        coalition: false,
        border: true,
        shapefile: true,
        number_markers: true
      },
      ca_vallejo: {
        coalition: false,
        border: true,
        shapefile: true,
        number_markers: true,
        current_districts: true
      },
      ca_grover: {
        coalition: false,
        border: true,
        shapefile: true,
        number_markers: true
      },
      ca_oceano: {
        coalition: false,
        border: true,
        shapefile: true,
        number_markers: true
      },
      ca_sm_county: {
        coalition: false,
        border: true,
        shapefile: true,
        number_markers: true,
        current_districts: true
      },
      sbusd: {
        coalition: false,
        border: true,
        number_markers: true,
        school_districts: true,
        municipalities: true
      },
      pvsd: {
        coalition: false,
        border: true,
        number_markers: true,
        load_coi: true,
        boundaries: [{
          id: 'es_boundary',
          label: 'Elementary School Attendance Boundaries',
          path: 'school_districts/california/pvsd_feeder',
          lineColor: 'black'
        }, {
          id: 'citycouncil',
          label: 'Camarillo City Council Districts (2010)',
          path: 'current_districts/california/camarillo_city_council',
          lineColor: 'black'
        }, {
          id: 'places',
          label: 'Census Places',
          path: 'neighborhoods/california/camarillo_places',
          lineColor: 'black'
        }]
      },
      ca_sanbenito: {
        coalition: false,
        border: true,
        shapefile: true,
        number_markers: true,
        current_districts: true
      },
      ca_marin: {
        coalition: false,
        border: true,
        shapefile: true,
        number_markers: true,
        current_districts: true
      },
      ca_watsonville: {
        coalition: false,
        border: true,
        shapefile: true,
        number_markers: true
      },
      ca_marina: {
        coalition: false,
        border: true,
        shapefile: true,
        number_markers: true,
        current_districts: true
      },
      ca_arroyo: {
        coalition: false,
        border: true,
        shapefile: true,
        number_markers: true
      },
      ca_cvista: {
        coalition: false,
        border: true,
        shapefile: true,
        number_markers: true,
        current_districts: true
      },
      ca_camarillo: {
        coalition: false,
        border: true,
        shapefile: true,
        number_markers: true,
        current_districts: true
      },
      ca_bellflower: {
        coalition: false,
        border: true,
        shapefile: true,
        number_markers: true,
        current_districts: true
      },
      napa2021: {
        border: true,
        shapefile: true,
        number_markers: true // contiguity: 2,

      },
      napacounty2021: {
        border: true,
        shapefile: true,
        number_markers: true,
        // contiguity: 2,
        municipalities: true
      },
      ca_tuolumne: {
        border: true,
        shapefile: true,
        number_markers: true,
        municipalities: true
      },
      napa_boe: {
        border: true,
        shapefile: true,
        number_markers: true,
        municipalities: true
      },
      napa_college: {
        border: true,
        shapefile: true,
        number_markers: true,
        municipalities: true
      },
      santa_clara_h2o: {
        border: true,
        shapefile: true,
        number_markers: true,
        municipalities: true
      },
      santarosa: {
        border: true,
        shapefile: true,
        number_markers: true,
        municipalities: false,
        coalition: false,
        current_districts: true
      },
      ca_sanmateo: {
        number_markers: true,
        // contiguity: 2,
        border: true,
        shapefile: true,
        neighborhood_borders: 'Neighborhoods'
      },
      ca_santa_ana: {
        number_markers: true,
        border: true,
        shapefile: true
      },
      ca_kern: {
        number_markers: true,
        border: true,
        // contiguity: 2,
        shapefile: true,
        municipalities: true
      },
      ca_poway: {
        coalition: false,
        number_markers: true
      },
      ca_torrance: {
        coalition: false,
        number_markers: true
      },
      menlo_park: {
        border: true,
        find_unpainted: true,
        boundaries: [{
          id: 'schools',
          label: 'School Districts',
          path: 'school_districts/california/menlo_park',
          centroids: true,
          fill: true,
          fill_alt: 'orange'
        }, {
          id: 'neighborhood',
          label: 'Neighborhoods',
          path: 'neighborhoods/california/menlo_park',
          centroids: true,
          fill: true,
          fill_alt: true
        }, {
          id: 'flooded',
          label: 'Flood Zone',
          path: 'menlo_park_floodzone',
          fill: '#8090c2'
        }, {
          id: 'menloh2o',
          label: 'California Water Service',
          path: 'menlo_park_water',
          fill: '#c6dbef' // centroids: true,

        }, {
          id: 'menloh2o2',
          label: 'East Palo Alto Water District',
          path: 'menlo_park_water2',
          fill: '#9ecae1' // centroids: true,

        }, {
          id: 'menloh2o5',
          label: 'Palo Alto Park Water District',
          path: 'menlo_park_water5',
          fill: '#6baed6' // centroids: true,

        }, {
          id: 'menloh2o3',
          label: 'Menlo Park Water District',
          path: 'menlo_park_water3',
          fill: '#3182bd' // centroids: true,

        }, {
          id: 'menloh2o4',
          label: 'O’Connor Water District',
          path: 'menlo_park_water4',
          fill: '#08519c' // centroids: true,

        }, {
          id: 'menlomulti',
          label: 'Multi-Family Parcels',
          path: 'menlo_park_multifamily'
        }]
      },
      ca_imperial: {
        number_markers: true,
        border: true,
        shapefile: true,
        municipalities: "Census Places",
        find_unpainted: true
      },
      ojai: {
        number_markers: true,
        border: true,
        shapefile: true,
        find_unpainted: true
      },
      ca_foothill: {
        number_markers: true,
        border: true,
        shapefile: true,
        find_unpainted: true
      },
      ca_sanjoaquin: {
        number_markers: true,
        border: true,
        shapefile: true,
        municipalities: true,
        boundaries: [{
          id: 'bg_gj',
          label: 'Block Groups',
          path: 'ca_sanjoaquin_bg'
        }, {
          id: 'tract_gj',
          label: 'Tracts',
          path: 'ca_sanjoaquin_tract',
          centroids: true
        }]
      },
      rp_lax: {
        border: true,
        shapefile: true,
        number_markers: true,
        // contiguity: 2,
        coalition: false,
        current_districts: 'Current Council Districts',
        boundaries: [{
          id: 'latimes_places',
          label: 'LA Times Neighborhoods',
          path: 'neighborhoods/lax_LATimes_Neighborhood',
          centroids: true
        }, {
          id: 'ncouncil_places',
          label: 'Neighborhood Councils',
          path: 'neighborhoods/lax_neighborhood_council',
          centroids: true
        }]
      },
      ca_butte: {
        border: true,
        shapefile: true,
        number_markers: true,
        // contiguity: 2,
        municipalities: 'Census Designated Places',
        current_districts: true,
        native_american: true,
        boundaries: [{
          id: 'greenline',
          label: 'Greenline',
          path: 'ca_butte_greenline',
          lineColor: '#070',
          lineWidth: 2.5
        }]
      },
      ca_humboldt: {
        border: true,
        shapefile: true,
        // contiguity: 2,
        number_markers: true,
        municipalities: true,
        sideload: true,
        native_american: true
      },
      ca_oakland: {
        border: true,
        shapefile: true,
        number_markers: true,
        find_unpainted: true
      },
      ca_martinez: {
        border: true,
        shapefile: true,
        number_markers: true // contiguity: 2,

      },
      carpinteria: {
        border: true,
        shapefile: true,
        number_markers: true
      },
      ca_brentwood: {
        border: true,
        shapefile: true,
        number_markers: true,
        coalition: false
      },
      ca_riverside: {
        border: true,
        shapefile: true,
        number_markers: true,
        coalition: false,
        boundaries: [{
          id: 'council_districts',
          label: 'Current Wards (enacted 2012)',
          path: 'current_districts/california/ca_riverside'
        }, {
          id: 'neighborhood',
          label: 'Neighborhoods',
          path: 'neighborhoods/california/ca_riverside',
          namefield: 'Neighborho',
          centroids: true
        }]
      },
      ca_rohnert: {
        border: true,
        shapefile: true,
        number_markers: true,
        coalition: false
      },
      ca_millbrae: {
        border: true,
        number_markers: true,
        coalition: false
      },
      ca_belmont: {
        border: true,
        number_markers: true,
        coalition: false
      },
      ca_elkgrove: {
        border: true,
        number_markers: true,
        coalition: false,
        boundaries: [{
          id: 'council_districts',
          label: 'City Council Districts (enacted 2011)',
          path: 'ca_elkgrove/city_council_districts'
        }, {
          id: 'city_limits_census_day_2020',
          label: 'City Limits before Census Day 2020',
          path: 'ca_elkgrove/city_limits_census_day_2020'
        }, {
          id: 'special_planning_areas',
          label: 'Special Planning Areas',
          path: 'ca_elkgrove/special_planning_areas'
        }]
      },
      az_pima: {
        border: true,
        number_markers: true,
        coalition: true,
        native_american: true,
        shapefile: true,
        boundaries: [{
          id: 'current_supervisor_dists',
          label: 'Current Supervisor/P.C.C. Districts',
          path: 'az_pima/current_supervisor_dists'
        }, {
          id: 'incorp_jurisdictions',
          label: 'Incorporated Jurisdictions',
          path: 'az_pima/incorp_jurisdictions'
        }, {
          id: "incumbent_precincts",
          label: "Voter Precincts Containing Incumbent Elected Official’s Residence",
          path: "az_pima/incumbent_precincts"
        }, {
          id: 'school_districts',
          label: 'School Districts',
          centroids: true,
          namefield: 'SDISTNAME',
          path: 'az_pima/school_districts'
        }]
      },
      az_maricopa: {
        border: true,
        number_markers: true,
        coalition: false,
        boundaries: [{
          id: 'school',
          label: 'School Districts',
          path: 'az_maricopa/school'
        }, {
          id: 'congressional',
          label: 'Congressional Districts',
          path: 'az_maricopa/congressional'
        }, {
          id: "legislative",
          label: "Legislative Districts",
          path: "az_maricopa/legislative"
        }, {
          id: 'current',
          label: 'Current Districts',
          path: 'az_maricopa/current'
        }, {
          id: 'cities',
          label: 'Cities',
          centroids: true,
          namefield: 'Juris',
          path: 'az_maricopa/cities'
        }]
      },
      sanjoseca: {
        border: true,
        shapefile: true,
        number_markers: true,
        boundaries: [{
          id: 'sj_places',
          label: 'Neighborhoods',
          path: 'neighborhoods/sanjose_neighborhoods',
          centroids: true
        }]
      },
      ca_scvosa: {
        border: true,
        number_markers: true,
        coalition: false,
        boundaries: [{
          id: 'fee_title',
          label: 'Protected Lands: Fee Title',
          path: 'ca_scvosa/fee_title'
        }, {
          id: 'conservation_easement',
          label: 'Protected Lands: Conservation Easements',
          path: 'ca_scvosa/conservation_easement'
        }, {
          id: 'schools',
          label: 'K-12 Schools',
          path: 'ca_scvosa/schools',
          centroids: true,
          namefield: 'School'
        }, {
          id: 'census_places',
          label: 'Census Places',
          path: 'ca_scvosa/census_places',
          centroids: true
        }]
      },
      ca_west_sac: {
        border: true,
        number_markers: true,
        coalition: false
      },
      ca_diamond_bar: {
        border: true,
        number_markers: true,
        coalition: false,
        boundaries: [{
          id: 'parks',
          label: 'Parks',
          centroids: true,
          namefield: 'NAME',
          path: 'ca_diamond_bar/parks'
        }, {
          id: 'school_districts',
          label: 'School Districts',
          centroids: true,
          namefield: 'NAME',
          path: 'ca_diamond_bar/school_districts',
          lineWidth: 0.5
        }]
      },
      ca_fpud: {
        border: true,
        number_markers: true,
        coalition: false,
        boundaries: [{
          id: 'current_divisions',
          label: 'Current Divisions',
          path: 'ca_fpud/current_divisions'
        }]
      },
      indianapolis_cc: {
        border: true,
        number_markers: true,
        coalition: false,
        boundaries: [{
          id: 'neighborhoods',
          label: 'Neighborhoods',
          path: 'indianapolis_cc/neighborhoods',
          centroids: true,
          namefield: 'NAME'
        }, {
          id: 'cities_and_towns',
          label: 'Cities and Towns',
          path: 'indianapolis_cc/cities_and_towns',
          centroids: true,
          namefield: 'CITYNAME'
        }]
      },
      nm_abq: {
        border: true,
        number_markers: true,
        coalition: false,
        boundaries: [{
          id: 'current_districts',
          label: 'City Council Districts (enacted 2011)',
          path: 'nm_abq/current_districts'
        }, {
          id: 'incumbents',
          label: "Current City Councilor Locations",
          path: 'nm_abq/incumbents',
          centroids: true,
          namefield: 'Name'
        }]
      },
      redwood: {
        border: true,
        shapefile: true,
        number_markers: true,
        // contiguity: 2,
        current_districts: true,
        school_districts: true,
        neighborhood_borders: true
      },
      ca_ventura: {
        border: true,
        shapefile: true,
        number_markers: true,
        municipalities: true
      },
      ca_yolo: {
        border: true,
        shapefile: true,
        number_markers: true,
        municipalities: true
      },
      longbeach: {
        border: true,
        shapefile: true,
        number_markers: true,
        find_unpainted: true,
        current_districts: true
      },
      ca_solano: {
        border: true,
        shapefile: true,
        number_markers: true,
        municipalities: true
      },
      ca_sc_county: {
        border: true,
        shapefile: true,
        number_markers: true,
        municipalities: true
      },
      ca_siskiyou: {
        border: true,
        shapefile: true,
        number_markers: true,
        municipalities: true
      },
      sanluiso: {
        coalition: false,
        number_markers: true,
        // contiguity: 2,
        shapefile: true,
        border: true,
        municipalities: true // sideload: true,

      },
      ccsanitation: {
        shapefile: true
      },
      ccsanitation2: {
        shapefile: true,
        border: true,
        current_districts: true,
        number_markers: true
      },
      santa_clara: {
        border: true
      },
      napa: {
        number_markers: true,
        border: true
      },
      napaschools: {
        number_markers: true,
        coalition: false,
        border: true
      },
      chicago: {
        number_markers: true,
        multiyear: 2019,
        border: true,
        parties: ["Rahm Emanuel", "Jesus \u201CChuy\u201D Garc\xEDa", "Lori Lightfoot", "Toni Preckwinkle"]
      },
      colorado: {
        number_markers: true,
        county_brush: true,
        native_american: true,
        contiguity: 2,
        shapefile: true,
        find_unpainted: true,
        load_coi: false
      },
      connecticut: {
        county_brush: true,
        native_american: true,
        number_markers: true,
        contiguity: 2,
        shapefile: true,
        find_unpainted: true,
        load_coi: false
      },
      dc: {
        number_markers: true,
        contiguity: 2,
        shapefile: true,
        find_unpainted: true
      },
      delaware: {
        number_markers: true,
        native_american: true,
        contiguity: 2,
        shapefile: true,
        find_unpainted: true
      },
      florida: {
        native_american: true,
        number_markers: true,
        county_brush: true,
        shapefile: true,
        find_unpainted: true,
        sideload: true,
        portal: {
          endpoint: "https://portal.florida-mapping.org"
        }
      },
      miamifl: {
        number_markers: true,
        neighborhoods: true,
        border: true
      },
      miamidade: {
        number_markers: true,
        neighborhoods: true,
        boundaries: [{
          path: 'city_border/miamifl',
          id: 'citybor',
          label: 'Show City Border'
        }]
      },
      fl_hills: {
        number_markers: true,
        shapefile: true
      },
      fl_orange: {
        number_markers: true,
        shapefile: true
      },
      fl_osceola: {
        number_markers: true,
        shapefile: true
      },
      orlando: {
        number_markers: true,
        shapefile: true,
        border: true
      },
      tampa: {
        number_markers: true,
        shapefile: true,
        border: true
      },
      kissimmee: {
        number_markers: true,
        shapefile: true
      },
      georgia: {
        number_markers: true,
        county_brush: true,
        contiguity: 2,
        shapefile: true,
        find_unpainted: true
      },
      hawaii: {
        number_markers: true,
        native_american: true,
        county_brush: true,
        shapefile: true
      },
      idaho: {
        native_american: true,
        number_markers: true,
        county_brush: true,
        shapefile: true,
        contiguity: 2,
        find_unpainted: true
      },
      illinois: {
        number_markers: true,
        county_brush: true,
        shapefile: true,
        find_unpainted: true
      },
      indiana: {
        number_markers: true,
        county_brush: true,
        shapefile: true,
        find_unpainted: true,
        school_districts: true,
        current_districts: true,
        municipalities: 'Cities and Towns',
        portal: {
          endpoint: 'https://portal.indiana-mapping.org'
        }
      },
      iowa: {
        number_markers: true,
        contiguity: 2,
        shapefile: true // find_unpainted: true,

      },
      kansas: {
        native_american: true,
        number_markers: true,
        county_brush: true,
        shapefile: true,
        find_unpainted: true
      },
      kentucky: {
        number_markers: true,
        county_brush: true,
        shapefile: true,
        find_unpainted: true
      },
      lax: {
        neighborhoods: true,
        number_markers: true,
        contiguity: 2,
        shapefile: true,
        find_unpainted: true,
        boundaries: [{
          id: 'va2010',
          label: 'State Assembly',
          path: 'lax_2010'
        }, {
          id: 'va2013',
          label: 'State Senate',
          path: 'lax_senate'
        }, {
          id: 'lax_ush',
          label: 'US House',
          path: 'lax_congress'
        }]
      },
      little_rock: {
        number_markers: true
      },
      louisiana: {
        native_american: true,
        county_brush: true,
        // lakes
        number_markers: true,
        // fetch is failing?
        contiguity: 2,
        shapefile: true,
        find_unpainted: true,
        load_coi: false
      },
      la_vra: {
        native_american: true,
        vra_effectiveness: true,
        county_brush: true,
        // lakes
        number_markers: true
      },
      batonrouge: {
        number_markers: true,
        shapefile: true,
        border: true // find_unpainted: true, COI only

      },
      maine: {
        native_american: true,
        number_markers: true,
        shapefile: true,
        find_unpainted: true
      },
      maryland: {
        number_markers: true,
        county_brush: true,
        // absentee: true,
        shapefile: true,
        find_unpainted: true,
        load_coi: false
      },
      baltimore: {
        border: true,
        number_markers: true,
        shapefile: true,
        contiguity: 2,
        boundaries: [{
          id: 'cityprec',
          label: 'Voter Precincts',
          path: 'baltimore-precincts'
        }]
      },
      ma: {
        number_markers: true,
        shapefile: true,
        // find_unpainted: true,
        portal: {
          endpoint: 'https://www.massachusetts-mapping.org'
        }
      },
      ma_vra: {
        number_markers: true,
        vra_effectiveness: true // shapefile: true,
        // find_unpainted: true,

      },
      ma_vra2: {
        number_markers: true // vra_effectiveness: true,
        // shapefile: true,
        // find_unpainted: true,

      },
      boston22: {
        number_markers: true,
        shapefile: true,
        border: true,
        boundaries: [{
          id: 'council',
          label: 'Current Districts',
          path: 'boston-council',
          namefield: 'DISTRICT',
          centroids: true,
          lineColor: '#007',
          lineWidth: 2
        }, {
          id: 'precincts',
          label: 'Precinct Names',
          path: 'boston-precincts',
          namefield: 'DISTRICT',
          centroids: true
        }]
      },
      lowell: {
        neighborhoods: true,
        contiguity: 2,
        number_markers: true,
        shapefile: true,
        coalition: false,
        border: true // find_unpainted: true,

      },
      ma_worcester_fix: {
        number_markers: true,
        coalition: false,
        border: true,
        shapefile: true,
        boundaries: [{
          id: 'city_council',
          label: 'City Council Districts',
          path: 'ma_worcester/city_council'
        }, {
          id: 'wards',
          label: 'Wards (2020)',
          path: 'ma_worcester/worcester-wards'
        }, {
          id: "voting_precincts",
          label: "Voting Precincts (2020)",
          path: "ma_worcester/worcester-precincts"
        }]
      },
      in_bloomington: {
        number_markers: true,
        coalition: false,
        border: true
      },
      massachusetts: {
        portal: {
          endpoint: 'https://www.massachusetts-mapping.org'
        }
      },
      michigan: {
        load_coi: true,
        coi: {
          tilesets: [{
            source: {
              type: "vector",
              url: "mapbox://districtr.michigan_bg_clusters"
            },
            type: "fill",
            sourceLayer: "michigan_bg_clusters",
            clusterLayer: true
          }],
          clusterKey: "cluster",
          clusterData: {
            url: "/assets/clusters/MI/clusters.json"
          }
        },
        number_markers: true,
        native_american: true,
        county_brush: true,
        shapefile: true,
        find_unpainted: true,
        current_districts: true,
        school_districts: true,
        municipalities: true,
        contiguity: 2,
        portal: {
          endpoint: 'https://www.michigan-mapping.org'
        }
      },
      minnesota: {
        number_markers: true,
        county_brush: true,
        native_american: true,
        shapefile: true,
        find_unpainted: true
      },
      mn2020acs: {
        number_markers: true,
        county_brush: true,
        native_american: true,
        shapefile: true,
        find_unpainted: true
      },
      olmsted: {
        number_markers: true,
        border: true,
        boundaries: [{
          path: 'city_border/rochestermn',
          id: 'citybor',
          label: 'Show Rochester Border'
        }]
      },
      rochestermn: {
        number_markers: true,
        border: true
      },
      washington_mn: {
        border: true,
        number_markers: true,
        shapefile: true
      },
      stlouis_mn: {
        border: true,
        number_markers: true,
        shapefile: true,
        boundaries: [{
          path: 'city_border/duluth',
          id: 'citybor',
          label: 'Show Duluth Border'
        }]
      },
      minneapolis: {
        border: true,
        number_markers: true,
        shapefile: true,
        boundaries: [{
          id: 'minn_wards',
          label: 'Current City Council Wards',
          path: 'current_districts/minnesota/city_council/minneapolis',
          centroids: true
        }, {
          id: 'minn_park_dists',
          label: 'Current Park Districts',
          path: 'current_districts/minnesota/park_districts/minneapolis',
          centroids: true
        }, {
          id: 'minn_neighborhoods',
          label: 'Neighborhoods',
          path: 'neighborhoods/minnesota/minneapolis',
          centroids: true
        }],
        portal: {
          endpoint: "https://portal.minneapolis-mapping.org"
        }
      },
      mississippi: {
        number_markers: true,
        county_brush: true,
        native_american: true,
        contiguity: 2,
        shapefile: true,
        find_unpainted: true
      },
      missouri: {
        number_markers: true,
        county_brush: true,
        shapefile: true,
        load_coi: false,
        // find_unpainted: true,
        school_districts: true,
        contiguity: 2,
        portal: {
          endpoint: "https://portal.missouri-mapping.org"
        },
        coi: {
          tilesets: [{
            source: {
              type: "vector",
              url: "mapbox://districtr.missouri_bg_clusters"
            },
            type: "fill",
            sourceLayer: "missouri_bg_clusters",
            clusterLayer: true
          }],
          clusterKey: "cluster",
          clusterData: {
            url: "/assets/clusters/MO/clusters.json"
          }
        }
      },
      montana: {
        native_american: true,
        number_markers: true,
        shapefile: true,
        find_unpainted: true,
        county_brush: true
      },
      mt_pris_adj: {
        native_american: true,
        number_markers: true // shapefile: true,

      },
      nebraska: {
        number_markers: true,
        native_american: true,
        county_brush: true,
        // absentee: true,
        shapefile: true,
        load_coi: false // find_unpainted: true,

      },
      nevada: {
        native_american: true,
        number_markers: true,
        county_brush: true,
        shapefile: true,
        find_unpainted: true,
        contiguity: 2
      },
      newhampshire: {
        number_markers: true,
        shapefile: true,
        // find_unpainted: true,
        school_districts: true
      },
      newjersey: {
        number_markers: true,
        county_brush: true,
        shapefile: true,
        find_unpainted: true,
        contiguity: 2
      },
      new_mexico: {
        number_markers: true,
        county_brush: true,
        native_american: true,
        contiguity: 2,
        current_districts: true,
        shapefile: true,
        find_unpainted: true,
        block_assign: true
      },
      new_mexico_portal: {
        number_markers: true,
        county_brush: true,
        native_american: true,
        contiguity: 2,
        current_districts: true,
        shapefile: true,
        find_unpainted: true,
        election_history: false,
        block_assign: true,
        portal: {
          endpoint: 'https://portal.newmexico-mapping.org'
        }
      },
      new_mexico_bg: {
        native_american: true,
        shapefile: true,
        current_districts: true,
        county_brush: true,
        // find_unpainted: true,
        portal: {
          endpoint: 'https://portal.newmexico-mapping.org'
        }
      },
      santafe: {
        number_markers: true,
        contiguity: 2,
        shapefile: true // find_unpainted: true,

      },
      newyork: {
        number_markers: true,
        county_brush: true,
        native_american: true,
        shapefile: true // find_unpainted: true,

      },
      nyc_popdemo: {
        number_markers: true,
        shapefile: true,
        coalition: true,
        sideload: true,
        boundaries: [{
          id: 'nyc_district',
          label: 'City Council Districts (2012)',
          path: 'current_districts/nyc/city_council',
          centroids: false,
          lineColor: '#007'
        }, {
          id: 'nyc_comm',
          label: 'Community Boards link:https://communityprofiles.planning.nyc.gov/',
          path: 'current_districts/nyc/community',
          centroids: false,
          lineColor: '#700'
        }, {
          id: 'nyc_boro',
          label: 'Boroughs',
          path: 'current_districts/nyc/boroughs',
          centroids: false
        }]
      },
      northcarolina: {
        number_markers: true,
        county_brush: true,
        native_american: true,
        coi2: true,
        current_districts: true,
        shapefile: true,
        find_unpainted: true,
        coalition: false
      },
      forsyth_nc: {
        contiguity: 2,
        shapefile: true,
        boundaries: [{
          id: 'citybor',
          label: 'Show Winston-Salem Border',
          path: 'forsyth_nc_muni'
        }]
      },
      buncombe: {
        contiguity: 2,
        shapefile: true,
        number_markers: true,
        border: true,
        boundaries: [{
          path: 'city_border/asheville',
          id: 'citybor',
          label: 'Show Asheville Border'
        }]
      },
      northdakota: {
        native_american: true,
        number_markers: true,
        county_brush: true,
        shapefile: true,
        find_unpainted: true
      },
      nd_benson: {
        native_american: true,
        number_markers: true,
        shapefile: true,
        county_filter: ["all", [">", ["get", "GEOID20"], "38005"], ["<", ["get", "GEOID20"], "38006"]]
      },
      nd_dunn: {
        native_american: true,
        number_markers: true,
        shapefile: true,
        county_filter: ["all", [">", ["get", "GEOID20"], "38025"], ["<", ["get", "GEOID20"], "38026"]]
      },
      nd_mckenzie: {
        native_american: true,
        number_markers: true,
        shapefile: true,
        county_filter: ["all", [">", ["get", "GEOID20"], "38053"], ["<", ["get", "GEOID20"], "38054"]]
      },
      nd_mountrail: {
        native_american: true,
        number_markers: true,
        shapefile: true,
        county_filter: ["all", [">", ["get", "GEOID20"], "38061"], ["<", ["get", "GEOID20"], "38062"]]
      },
      nd_ramsey: {
        native_american: true,
        number_markers: true,
        shapefile: true,
        county_filter: ["all", [">", ["get", "GEOID20"], "38071"], ["<", ["get", "GEOID20"], "38072"]]
      },
      nd_rollette: {
        native_american: true,
        number_markers: true,
        shapefile: true,
        county_filter: ["all", [">", ["get", "GEOID20"], "38079"], ["<", ["get", "GEOID20"], "38080"]]
      },
      nd_sioux: {
        native_american: true,
        number_markers: true,
        shapefile: true,
        county_filter: ["all", [">", ["get", "GEOID20"], "38085"], ["<", ["get", "GEOID20"], "38086"]]
      },
      ohio: {
        number_markers: true,
        county_brush: true,
        shapefile: true,
        // find_unpainted: true - needs contiguity
        portal: {
          endpoint: 'https://portal.ohio-mapping.org'
        },
        school_districts: true,
        current_districts: true,
        // COI clusters.
        coi: {
          tilesets: [{
            source: {
              type: "vector",
              url: "mapbox://districtr.ohio_bg_clusters"
            },
            type: "fill",
            sourceLayer: "ohio_bg_clusters",
            clusterLayer: true
          }],
          clusterKey: "cluster",
          clusterData: {
            url: "/assets/clusters/OH/clusters.json"
          }
        }
      },
      ohcentral: {
        multiyear: 2019,
        number_markers: true,
        shapefile: true,
        school_districts: true,
        municipalities: 'Cities and Towns',
        portal: {
          endpoint: 'https://portal.ohio-mapping.org'
        }
      },
      ohakron: {
        multiyear: 2019,
        number_markers: true,
        shapefile: true,
        school_districts: true,
        portal: {
          endpoint: 'https://portal.ohio-mapping.org'
        }
      },
      ohcin: {
        multiyear: 2019,
        number_markers: true,
        shapefile: true,
        school_districts: true,
        portal: {
          endpoint: 'https://portal.ohio-mapping.org'
        }
      },
      ohcle: {
        multiyear: 2019,
        number_markers: true,
        shapefile: true,
        school_districts: true,
        portal: {
          endpoint: 'https://portal.ohio-mapping.org'
        }
      },
      ohse: {
        multiyear: 2019,
        number_markers: true,
        shapefile: true,
        school_districts: true,
        portal: {
          endpoint: 'https://portal.ohio-mapping.org'
        }
      },
      ohtoledo: {
        multiyear: 2019,
        number_markers: true,
        shapefile: true,
        school_districts: true,
        portal: {
          endpoint: 'https://portal.ohio-mapping.org'
        }
      },
      akroncanton: {
        number_markers: true,
        shapefile: true,
        border: true,
        portal: {
          endpoint: 'https://portal.ohio-mapping.org'
        }
      },
      cincinnati: {
        number_markers: true,
        shapefile: true,
        border: true,
        portal: {
          endpoint: 'https://portal.ohio-mapping.org'
        }
      },
      clevelandeuclid: {
        number_markers: true,
        shapefile: true,
        border: true,
        portal: {
          endpoint: 'https://portal.ohio-mapping.org'
        }
      },
      columbus: {
        number_markers: true,
        shapefile: true,
        border: true,
        portal: {
          endpoint: 'https://portal.ohio-mapping.org'
        }
      },
      dayton: {
        number_markers: true,
        shapefile: true,
        border: true,
        portal: {
          endpoint: 'https://portal.ohio-mapping.org'
        }
      },
      limaoh: {
        number_markers: true,
        shapefile: true,
        border: true,
        portal: {
          endpoint: 'https://portal.ohio-mapping.org'
        }
      },
      mansfield: {
        number_markers: true,
        shapefile: true,
        border: true,
        portal: {
          endpoint: 'https://portal.ohio-mapping.org'
        }
      },
      portsmouthoh: {
        number_markers: true,
        shapefile: true,
        border: true,
        portal: {
          endpoint: 'https://portal.ohio-mapping.org'
        }
      },
      toledo: {
        number_markers: true,
        shapefile: true,
        border: true,
        portal: {
          endpoint: 'https://portal.ohio-mapping.org'
        }
      },
      youngstown: {
        number_markers: true,
        shapefile: true,
        border: true,
        portal: {
          endpoint: 'https://portal.ohio-mapping.org'
        }
      },
      oklahoma: {
        number_markers: true,
        native_american: true,
        county_brush: true,
        contiguity: 2,
        shapefile: true,
        find_unpainted: true
      },
      ontarioca: {
        number_markers: true,
        border: true
      },
      oregon: {
        number_markers: true,
        county_brush: true,
        native_american: true,
        contiguity: 2,
        shapefile: true,
        find_unpainted: true
      },
      portlandor: {
        number_markers: true,
        contiguity: 2,
        border: true
      },
      pennsylvania: {
        number_markers: true,
        county_brush: true,
        shapefile: true,
        find_unpainted: true,
        sideload: true,
        load_coi: false,
        contiguity: 2,
        portal: {
          endpoint: "https://portal.pennsylvania-mapping.org"
        }
      },
      pa_adj: {
        number_markers: true,
        county_brush: true,
        shapefile: true,
        find_unpainted: true,
        sideload: true,
        load_coi: false,
        contiguity: 2
      },
      pa_prison_adj: {
        number_markers: true,
        county_brush: true,
        shapefile: true,
        find_unpainted: true,
        sideload: true,
        load_coi: false,
        contiguity: 2
      },
      philadelphia: {
        number_markers: true,
        contiguity: 2,
        find_unpainted: true,
        border: true
      },
      puertorico: {
        number_markers: true,
        county_brush: true,
        shapefile: true,
        find_unpainted: true
      },
      puertorico_prec: {
        number_markers: true,
        parties: ["Nuevo Progresista", "Popular Democrático", "Nuevo Progresista", "Popular Democrático"],
        shapefile: true // find_unpainted: true,

      },
      rhode_island: {
        number_markers: true,
        shapefile: true
      },
      providence_ri: {
        border: true
      },
      cranston_ri: {
        border: true,
        shapefile: true,
        number_markers: true,
        find_unpainted: true
      },
      southcarolina: {
        native_american: true,
        number_markers: true,
        county_brush: true,
        shapefile: true
      },
      southdakota: {
        native_american: true,
        number_markers: true,
        county_brush: true,
        shapefile: true
      },
      tennessee: {
        number_markers: true,
        county_brush: true,
        shapefile: true
      },
      texas: {
        number_markers: true,
        county_brush: true,
        contiguity: 2,
        shapefile: true,
        find_unpainted: true,
        sideload: true,
        portal: {
          endpoint: "https://portal.texas-mapping.org"
        }
      },
      tarranttx: {
        number_markers: true,
        contiguity: true
      },
      harristx: {
        number_markers: true,
        contiguity: true
      },
      tx_vra: {
        vra_effectiveness: true,
        county_brush: true,
        number_markers: true
      },
      dallastx: {
        border: true,
        number_markers: true,
        shapefile: true,
        current_districts: true
      },
      austin: {
        border: true,
        number_markers: true,
        shapefile: true,
        find_unpainted: true,
        contiguity: true
      },
      fortworth: {
        border: true,
        number_markers: true
      },
      houston: {
        border: true,
        number_markers: true,
        shapefile: true,
        multiyear: 2019
      },
      elpasotx: {
        border: true,
        number_markers: true,
        shapefile: true,
        boundaries: [{
          id: 'precinct_gj',
          label: 'Current Precincts',
          path: 'elpasotx_precincts',
          namefield: 'CURRENT_PC',
          unitType: 'block',
          centroids: true
        }]
      },
      elpaso2: {
        border: true,
        number_markers: true,
        shapefile: true,
        boundaries: [{
          id: 'precinct_gj',
          label: 'Current Precincts',
          path: 'elpasotx_precincts',
          namefield: 'CURRENT_PC',
          unitType: 'blockgroup',
          centroids: true
        }]
      },
      utah: {
        number_markers: true,
        county_brush: true,
        native_american: true,
        shapefile: true,
        // find_unpainted: true,
        portal: {
          endpoint: 'https://portal.utah-mapping.org'
        }
      },
      'grand_county_2': {
        portal: {
          endpoint: 'https://portal.utah-mapping.org'
        },
        shapefile: true
      },
      'grand_county_3': {
        portal: {
          endpoint: 'https://portal.utah-mapping.org'
        },
        shapefile: true
      },
      vermont: {
        number_markers: true,
        county_brush: true,
        shapefile: true // find_unpainted: true,

      },
      virginia: {
        number_markers: true,
        county_brush: true,
        // native_american: true,
        shapefile: true,
        // find_unpainted: true,
        load_coi: false,
        portal: {
          endpoint: 'https://portal.virginia-mapping.org'
        },
        boundaries: [{
          id: 'va2010',
          label: '2003-2013 Congressional Plan',
          path: 'virginia_2010'
        }, {
          id: 'va2013',
          label: '2013-2017 Congressional Plan',
          path: 'virginia_2013'
        }]
      },
      vabeach: {
        multiyear: 2018,
        number_markers: true,
        border: true // find_unpainted: true,

      },
      washington: {
        number_markers: true,
        county_brush: true,
        native_american: true,
        shapefile: true,
        find_unpainted: true,
        contiguity: 2
      },
      yakima_wa: {
        coalition: false
      },
      kingcountywa: {
        border: true
      },
      westvirginia: {
        number_markers: true,
        county_brush: true,
        shapefile: true,
        find_unpainted: true
      },
      wisconsin: {
        number_markers: true,
        county_brush: true,
        native_american: true,
        shapefile: true,
        find_unpainted: true,
        current_districts: true,
        school_districts: true,
        municipalities: true,
        contiguity: 2,
        portal: {
          endpoint: 'https://portal.wisconsin-mapping.org'
        },
        sideload: true,
        coi: {
          tilesets: [{
            source: {
              type: "vector",
              url: "mapbox://districtr.wisconsin_bg_clusters"
            },
            type: "fill",
            sourceLayer: "wisconsin_bg_clusters",
            clusterLayer: true
          }],
          clusterKey: "cluster",
          clusterData: {
            url: "/assets/clusters/WI/clusters.json"
          }
        }
      },
      wisconsin2020: {
        number_markers: true,
        county_brush: true,
        native_american: true,
        shapefile: true,
        find_unpainted: true,
        current_districts: true,
        school_districts: true,
        municipalities: true,
        contiguity: 2,
        portal: {
          endpoint: 'https://portal.wisconsin-mapping.org'
        },
        sideload: true,
        load_coi: true,
        coi: {
          tilesets: [{
            source: {
              type: "vector",
              url: "mapbox://districtr.wisconsin_bg_clusters"
            },
            type: "fill",
            sourceLayer: "wisconsin_bg_clusters",
            clusterLayer: true
          }],
          clusterKey: "cluster",
          clusterData: {
            url: "/assets/clusters/WI/clusters.json"
          }
        }
      },
      wisco2019acs: {
        number_markers: true,
        county_brush: true,
        native_american: true,
        shapefile: true,
        find_unpainted: true,
        current_districts: true,
        school_districts: true,
        municipalities: true,
        contiguity: 2,
        portal: {
          endpoint: 'https://portal.wisconsin-mapping.org'
        },
        sideload: true,
        coi: {
          tilesets: [{
            source: {
              type: "vector",
              url: "mapbox://districtr.wisconsin_bg_clusters"
            },
            type: "fill",
            sourceLayer: "wisconsin_bg_clusters",
            clusterLayer: true
          }],
          clusterKey: "cluster",
          clusterData: {
            url: "/assets/clusters/WI/clusters.json"
          }
        }
      },
      wyoming: {
        native_american: true,
        number_markers: true
      }
    };
    return status[id] || {};
  }

  function county_fips_to_name(fips, state) {
    fips = fips % 1000;
    var codes = {
      ohio: {
        1: "Adams",
        3: "Allen",
        5: "Ashland",
        7: "Ashtabula",
        9: "Athens",
        11: "Auglaize",
        13: "Belmont",
        15: "Brown",
        17: "Butler",
        19: "Carroll",
        21: "Champaign",
        23: "Clark",
        25: "Clermont",
        27: "Clinton",
        29: "Columbiana",
        31: "Coshocton",
        33: "Crawford",
        35: "Cuyahoga",
        37: "Darke",
        39: "Defiance",
        41: "Delaware",
        43: "Erie",
        45: "Fairfield",
        47: "Fayette",
        49: "Franklin",
        51: "Fulton",
        53: "Gallia",
        55: "Geauga",
        57: "Greene",
        59: "Guernsey",
        61: "Hamilton",
        63: "Hancock",
        65: "Hardin",
        67: "Harrison",
        69: "Henry",
        71: "Highland",
        73: "Hocking",
        75: "Holmes",
        77: "Huron",
        79: "Jackson",
        81: "Jefferson",
        83: "Knox",
        85: "Lake",
        87: "Lawrence",
        89: "Licking",
        91: "Logan",
        93: "Lorain",
        95: "Lucas",
        97: "Madison",
        99: "Mahoning",
        101: "Marion",
        103: "Medina",
        105: "Meigs",
        107: "Mercer",
        109: "Miami",
        111: "Monroe",
        113: "Montgomery",
        115: "Morgan",
        117: "Morrow",
        119: "Muskingum",
        121: "Noble",
        123: "Ottawa",
        125: "Paulding",
        127: "Perry",
        129: "Pickaway",
        131: "Pike",
        133: "Portage",
        135: "Preble",
        137: "Putnam",
        139: "Richland",
        141: "Ross",
        143: "Sandusky",
        145: "Scioto",
        147: "Seneca",
        149: "Shelby",
        151: "Stark",
        153: "Summit",
        155: "Trumbull",
        157: "Tuscarawas",
        159: "Union",
        161: "Van Wert",
        163: "Vinton",
        165: "Warren",
        167: "Washington",
        169: "Wayne",
        171: "Williams",
        173: "Wood",
        175: "Wyandot"
      },
      newyork: {
        1: "Albany",
        3: "Allegany",
        5: "Bronx",
        7: "Broome",
        9: "Cattaraugus",
        11: "Cayuga",
        13: "Chautauqua",
        15: "Chemung",
        17: "Chenango",
        19: "Clinton",
        21: "Columbia",
        23: "Cortland",
        25: "Delaware",
        27: "Dutchess",
        29: "Erie",
        31: "Essex",
        33: "Franklin",
        35: "Fulton",
        37: "Genesee",
        39: "Greene",
        41: "Hamilton",
        43: "Herkimer",
        45: "Jefferson",
        47: "Kings",
        49: "Lewis",
        51: "Livingston",
        53: "Madison",
        55: "Monroe",
        57: "Montgomery",
        59: "Nassau",
        61: "New York",
        63: "Niagara",
        65: "Oneida",
        67: "Onondaga",
        69: "Ontario",
        71: "Orange",
        73: "Orleans",
        75: "Oswego",
        77: "Otsego",
        79: "Putnam",
        81: "Queens",
        83: "Rensselaer",
        85: "Richmond",
        87: "Rockland",
        89: "St Lawrence",
        91: "Saratoga",
        93: "Schenectady",
        95: "Schoharie",
        97: "Schuyler",
        99: "Seneca",
        101: "Steuben",
        103: "Suffolk",
        105: "Sullivan",
        107: "Tioga",
        109: "Tompkins",
        111: "Ulster",
        113: "Warren",
        115: "Washington",
        117: "Wayne",
        119: "Westchester",
        121: "Wyoming",
        123: "Yates"
      },
      mississippi: {
        1: "Adams",
        3: "Alcorn",
        5: "Amite",
        7: "Attala",
        9: "Benton",
        11: "Bolivar",
        13: "Calhoun",
        15: "Carroll",
        17: "Chickasaw",
        19: "Choctaw",
        21: "Claiborne",
        23: "Clarke",
        25: "Clay",
        27: "Coahoma",
        29: "Copiah",
        31: "Covington",
        33: "De Soto",
        35: "Forrest",
        37: "Franklin",
        39: "George",
        41: "Greene",
        43: "Grenada",
        45: "Hancock",
        47: "Harrison",
        49: "Hinds",
        51: "Holmes",
        53: "Humphreys",
        55: "Issaquena",
        57: "Itawamba",
        59: "Jackson",
        61: "Jasper",
        63: "Jefferson",
        65: "Jefferson Davis",
        67: "Jones",
        69: "Kemper",
        71: "Lafayette",
        73: "Lamar",
        75: "Lauderdale",
        77: "Lawrence",
        79: "Leake",
        81: "Lee",
        83: "Leflore",
        85: "Lincoln",
        87: "Lowndes",
        89: "Madison",
        91: "Marion",
        93: "Marshall",
        95: "Monroe",
        97: "Montgomery",
        99: "Neshoba",
        101: "Newton",
        103: "Noxubee",
        105: "Oktibbeha",
        107: "Panola",
        109: "Pearl River",
        111: "Perry",
        113: "Pike",
        115: "Pontotoc",
        117: "Prentiss",
        119: "Quitman",
        121: "Rankin",
        123: "Scott",
        125: "Sharkey",
        127: "Simpson",
        129: "Smith",
        131: "Stone",
        133: "Sunflower",
        135: "Tallahatchie",
        137: "Tate",
        139: "Tippah",
        141: "Tishomingo",
        143: "Tunica",
        145: "Union",
        147: "Walthall",
        149: "Warren",
        151: "Washington",
        153: "Wayne",
        155: "Webster",
        157: "Wilkinson",
        159: "Winston",
        161: "Yalobusha",
        163: "Yazoo"
      },
      massachusetts: {
        1: "Barnstable",
        3: "Berkshire",
        5: "Bristol",
        7: "Dukes",
        9: "Essex",
        11: "Franklin",
        13: "Hampden",
        15: "Hampshire",
        17: "Middlesex",
        19: "Nantucket",
        21: "Norfolk",
        23: "Plymouth",
        25: "Suffolk",
        27: "Worcester"
      },
      northdakota: {
        1: "Adams",
        3: "Barnes",
        5: "Benson",
        7: "Billings",
        9: "Bottineau",
        11: "Bowman",
        13: "Burke",
        15: "Burleigh",
        17: "Cass",
        19: "Cavalier",
        21: "Dickey",
        23: "Divide",
        25: "Dunn",
        27: "Eddy",
        29: "Emmons",
        31: "Foster",
        33: "Golden Valley",
        35: "Grand Forks",
        37: "Grant",
        39: "Griggs",
        41: "Hettinger",
        43: "Kidder",
        45: "La Moure",
        47: "Logan",
        49: "McHenry",
        51: "McIntosh",
        53: "McKenzie",
        55: "McLean",
        57: "Mercer",
        59: "Morton",
        61: "Mountrail",
        63: "Nelson",
        65: "Oliver",
        67: "Pembina",
        69: "Pierce",
        71: "Ramsey",
        73: "Ransom",
        75: "Renville",
        77: "Richland",
        79: "Rolette",
        81: "Sargent",
        83: "Sheridan",
        85: "Sioux",
        87: "Slope",
        89: "Stark",
        91: "Steele",
        93: "Stutsman",
        95: "Towner",
        97: "Traill",
        99: "Walsh",
        101: "Ward",
        103: "Wells",
        105: "Williams"
      },
      nebraska: {
        1: "Adams",
        3: "Antelope",
        5: "Arthur",
        7: "Banner",
        9: "Blaine",
        11: "Boone",
        13: "Box Butte",
        15: "Boyd",
        17: "Brown",
        19: "Buffalo",
        21: "Burt",
        23: "Butler",
        25: "Cass",
        27: "Cedar",
        29: "Chase",
        31: "Cherry",
        33: "Cheyenne",
        35: "Clay",
        37: "Colfax",
        39: "Cuming",
        41: "Custer",
        43: "Dakota",
        45: "Dawes",
        47: "Dawson",
        49: "Deuel",
        51: "Dixon",
        53: "Dodge",
        55: "Douglas",
        57: "Dundy",
        59: "Fillmore",
        61: "Franklin",
        63: "Frontier",
        65: "Furnas",
        67: "Gage",
        69: "Garden",
        71: "Garfield",
        73: "Gosper",
        75: "Grant",
        77: "Greeley",
        79: "Hall",
        81: "Hamilton",
        83: "Harlan",
        85: "Hayes",
        87: "Hitchcock",
        89: "Holt",
        91: "Hooker",
        93: "Howard",
        95: "Jefferson",
        97: "Johnson",
        99: "Kearney",
        101: "Keith",
        103: "Keya Paha",
        105: "Kimball",
        107: "Knox",
        109: "Lancaster",
        111: "Lincoln",
        113: "Logan",
        115: "Loup",
        117: "McPherson",
        119: "Madison",
        121: "Merrick",
        123: "Morrill",
        125: "Nance",
        127: "Nemaha",
        129: "Nuckolls",
        131: "Otoe",
        133: "Pawnee",
        135: "Perkins",
        137: "Phelps",
        139: "Pierce",
        141: "Platte",
        143: "Polk",
        145: "Red Willow",
        147: "Richardson",
        149: "Rock",
        151: "Saline",
        153: "Sarpy",
        155: "Saunders",
        157: "Scotts Bluff",
        159: "Seward",
        161: "Sheridan",
        163: "Sherman",
        165: "Sioux",
        167: "Stanton",
        169: "Thayer",
        171: "Thomas",
        173: "Thurston",
        175: "Valley",
        177: "Washington",
        179: "Wayne",
        181: "Webster",
        183: "Wheeler",
        185: "York"
      },
      nevada: {
        1: "Churchill",
        3: "Clark",
        5: "Douglas",
        7: "Elko",
        9: "Esmeralda",
        11: "Eureka",
        13: "Humboldt",
        15: "Lander",
        17: "Lincoln",
        19: "Lyon",
        21: "Mineral",
        23: "Nye",
        27: "Pershing",
        29: "Storey",
        31: "Washoe",
        33: "White Pine",
        510: "Carson City"
      },
      virginislands: {
        10: "St. Croix",
        20: "St. John",
        30: "St. Thomas"
      },
      alabama: {
        1: "Autauga",
        3: "Baldwin",
        5: "Barbour",
        7: "Bibb",
        9: "Blount",
        11: "Bullock",
        13: "Butler",
        15: "Calhoun",
        17: "Chambers",
        19: "Cherokee",
        21: "Chilton",
        23: "Choctaw",
        25: "Clarke",
        27: "Clay",
        29: "Cleburne",
        31: "Coffee",
        33: "Colbert",
        35: "Conecuh",
        37: "Coosa",
        39: "Covington",
        41: "Crenshaw",
        43: "Cullman",
        45: "Dale",
        47: "Dallas",
        49: "De Kalb",
        51: "Elmore",
        53: "Escambia",
        55: "Etowah",
        57: "Fayette",
        59: "Franklin",
        61: "Geneva",
        63: "Greene",
        65: "Hale",
        67: "Henry",
        69: "Houston",
        71: "Jackson",
        73: "Jefferson",
        75: "Lamar",
        77: "Lauderdale",
        79: "Lawrence",
        81: "Lee",
        83: "Limestone",
        85: "Lowndes",
        87: "Macon",
        89: "Madison",
        91: "Marengo",
        93: "Marion",
        95: "Marshall",
        97: "Mobile",
        99: "Monroe",
        101: "Montgomery",
        103: "Morgan",
        105: "Perry",
        107: "Pickens",
        109: "Pike",
        111: "Randolph",
        113: "Russell",
        115: "St Clair",
        117: "Shelby",
        119: "Sumter",
        121: "Talladega",
        123: "Tallapoosa",
        125: "Tuscaloosa",
        127: "Walker",
        129: "Washington",
        131: "Wilcox",
        133: "Winston"
      },
      delaware: {
        1: "Kent",
        3: "New Castle",
        5: "Sussex"
      },
      virginia: {
        1: "Accomack",
        3: "Albemarle",
        5: "Alleghany",
        7: "Amelia",
        9: "Amherst",
        11: "Appomattox",
        13: "Arlington",
        15: "Augusta",
        17: "Bath",
        19: "Bedford",
        21: "Bland",
        23: "Botetourt",
        25: "Brunswick",
        27: "Buchanan",
        29: "Buckingham",
        31: "Campbell",
        33: "Caroline",
        35: "Carroll",
        36: "Charles City",
        37: "Charlotte",
        41: "Chesterfield",
        43: "Clarke",
        45: "Craig",
        47: "Culpeper",
        49: "Cumberland",
        51: "Dickenson",
        53: "Dinwiddie",
        57: "Essex",
        59: "Fairfax",
        61: "Fauquier",
        63: "Floyd",
        65: "Fluvanna",
        67: "Franklin",
        69: "Frederick",
        71: "Giles",
        73: "Gloucester",
        75: "Goochland",
        77: "Grayson",
        79: "Greene",
        81: "Greensville",
        83: "Halifax",
        85: "Hanover",
        87: "Henrico",
        89: "Henry",
        91: "Highland",
        93: "Isle of Wight",
        95: "James City",
        97: "King and Queen",
        99: "King George",
        101: "King William",
        103: "Lancaster",
        105: "Lee",
        107: "Loudoun",
        109: "Louisa",
        111: "Lunenburg",
        113: "Madison",
        115: "Mathews",
        117: "Mecklenburg",
        119: "Middlesex",
        121: "Montgomery",
        125: "Nelson",
        127: "New Kent",
        131: "Northampton",
        133: "Northumberland",
        135: "Nottoway",
        137: "Orange",
        139: "Page",
        141: "Patrick",
        143: "Pittsylvania",
        145: "Powhatan",
        147: "Prince Edward",
        149: "Prince George",
        153: "Prince William",
        155: "Pulaski",
        157: "Rappahannock",
        159: "Richmond",
        161: "Roanoke",
        163: "Rockbridge",
        165: "Rockingham",
        167: "Russell",
        169: "Scott",
        171: "Shenandoah",
        173: "Smyth",
        175: "Southampton",
        177: "Spotsylvania",
        179: "Stafford",
        181: "Surry",
        183: "Sussex",
        185: "Tazewell",
        187: "Warren",
        191: "Washington",
        193: "Westmoreland",
        195: "Wise",
        197: "Wythe",
        199: "York",
        510: "Alexandria City",
        515: "Bedford City",
        520: "Bristol City",
        530: "Buena Vista City",
        540: "Charlottesville City",
        550: "Chesapeake City",
        560: "Clifton Forge City",
        570: "Colonial Heights Cit",
        580: "Covington City",
        590: "Danville City",
        595: "Emporia City",
        600: "Fairfax City",
        610: "Falls Church City",
        620: "Franklin City",
        630: "Fredericksburg City",
        640: "Galax City",
        650: "Hampton City",
        660: "Harrisonburg City",
        670: "Hopewell City",
        678: "Lexington City",
        680: "Lynchburg City",
        683: "Manassas City",
        685: "Manassas Park City",
        690: "Martinsville City",
        700: "Newport News City",
        710: "Norfolk City",
        720: "Norton City",
        730: "Petersburg City",
        735: "Poquoson City",
        740: "Portsmouth City",
        750: "Radford City",
        760: "Richmond City",
        770: "Roanoke City",
        775: "Salem City",
        780: "South Boston City",
        790: "Staunton City",
        800: "Suffolk City",
        810: "Virginia Beach City",
        820: "Waynesboro City",
        830: "Williamsburg City",
        840: "Winchester City"
      },
      vermont: {
        1: "Addison",
        3: "Bennington",
        5: "Caledonia",
        7: "Chittenden",
        9: "Essex",
        11: "Franklin",
        13: "Grand Isle",
        15: "Lamoille",
        17: "Orange",
        19: "Orleans",
        21: "Rutland",
        23: "Washington",
        25: "Windham",
        27: "Windsor"
      },
      southdakota: {
        3: "Aurora",
        5: "Beadle",
        7: "Bennett",
        9: "Bon Homme",
        11: "Brookings",
        13: "Brown",
        15: "Brule",
        17: "Buffalo",
        19: "Butte",
        21: "Campbell",
        23: "Charles Mix",
        25: "Clark",
        27: "Clay",
        29: "Codington",
        31: "Corson",
        33: "Custer",
        35: "Davison",
        37: "Day",
        39: "Deuel",
        41: "Dewey",
        43: "Douglas",
        45: "Edmunds",
        47: "Fall River",
        49: "Faulk",
        51: "Grant",
        53: "Gregory",
        55: "Haakon",
        57: "Hamlin",
        59: "Hand",
        61: "Hanson",
        63: "Harding",
        65: "Hughes",
        67: "Hutchinson",
        69: "Hyde",
        71: "Jackson",
        73: "Jerauld",
        75: "Jones",
        77: "Kingsbury",
        79: "Lake",
        81: "Lawrence",
        83: "Lincoln",
        85: "Lyman",
        87: "McCook",
        89: "McPherson",
        91: "Marshall",
        93: "Meade",
        95: "Mellette",
        97: "Miner",
        99: "Minnehaha",
        101: "Moody",
        103: "Pennington",
        105: "Perkins",
        107: "Potter",
        109: "Roberts",
        111: "Sanborn",
        113: "Shannon",
        115: "Spink",
        117: "Stanley",
        119: "Sully",
        121: "Todd",
        123: "Tripp",
        125: "Turner",
        127: "Union",
        129: "Walworth",
        135: "Yankton",
        137: "Ziebach"
      },
      wyoming: {
        1: "Albany",
        3: "Big Horn",
        5: "Campbell",
        7: "Carbon",
        9: "Converse",
        11: "Crook",
        13: "Fremont",
        15: "Goshen",
        17: "Hot Springs",
        19: "Johnson",
        21: "Laramie",
        23: "Lincoln",
        25: "Natrona",
        27: "Niobrara",
        29: "Park",
        31: "Platte",
        33: "Sheridan",
        35: "Sublette",
        37: "Sweetwater",
        39: "Teton",
        41: "Uinta",
        43: "Washakie",
        45: "Weston"
      },
      alaska: {
        13: "Aleutians East",
        16: "Aleutians West",
        20: "Anchorage",
        50: "Bethel",
        60: "Bristol Bay",
        68: "Denali",
        70: "Dillingham",
        90: "Fairbanks North Star",
        100: "Haines",
        110: "Juneau",
        122: "Kenai Peninsula",
        130: "Ketchikan Gateway",
        150: "Kodiak Island",
        164: "Lake and Peninsula",
        170: "Matanuska-Susitna",
        180: "Nome",
        185: "North Slope",
        188: "Northwest Arctic",
        201: "Prince of Wales-Outer Ketchikan",
        220: "Sitka",
        232: "Skagway-Hoonah-Angoon",
        240: "Southeast Fairbanks",
        261: "Valdez-Cordova",
        270: "Wade Hampton",
        280: "Wrangell-Petersburg",
        282: "Yakutat",
        290: "Yukon-Koyukuk"
      },
      oregon: {
        1: "Baker",
        3: "Benton",
        5: "Clackamas",
        7: "Clatsop",
        9: "Columbia",
        11: "Coos",
        13: "Crook",
        15: "Curry",
        17: "Deschutes",
        19: "Douglas",
        21: "Gilliam",
        23: "Grant",
        25: "Harney",
        27: "Hood River",
        29: "Jackson",
        31: "Jefferson",
        33: "Josephine",
        35: "Klamath",
        37: "Lake",
        39: "Lane",
        41: "Lincoln",
        43: "Linn",
        45: "Malheur",
        47: "Marion",
        49: "Morrow",
        51: "Multnomah",
        53: "Polk",
        55: "Sherman",
        57: "Tillamook",
        59: "Umatilla",
        61: "Union",
        63: "Wallowa",
        65: "Wasco",
        67: "Washington",
        69: "Wheeler",
        71: "Yamhill"
      },
      wisconsin: {
        1: "Adams",
        3: "Ashland",
        5: "Barron",
        7: "Bayfield",
        9: "Brown",
        11: "Buffalo",
        13: "Burnett",
        15: "Calumet",
        17: "Chippewa",
        19: "Clark",
        21: "Columbia",
        23: "Crawford",
        25: "Dane",
        27: "Dodge",
        29: "Door",
        31: "Douglas",
        33: "Dunn",
        35: "Eau Claire",
        37: "Florence",
        39: "Fond du Lac",
        41: "Forest",
        43: "Grant",
        45: "Green",
        47: "Green Lake",
        49: "Iowa",
        51: "Iron",
        53: "Jackson",
        55: "Jefferson",
        57: "Juneau",
        59: "Kenosha",
        61: "Kewaunee",
        63: "La Crosse",
        65: "Lafayette",
        67: "Langlade",
        69: "Lincoln",
        71: "Manitowoc",
        73: "Marathon",
        75: "Marinette",
        77: "Marquette",
        78: "Menominee",
        79: "Milwaukee",
        81: "Monroe",
        83: "Oconto",
        85: "Oneida",
        87: "Outagamie",
        89: "Ozaukee",
        91: "Pepin",
        93: "Pierce",
        95: "Polk",
        97: "Portage",
        99: "Price",
        101: "Racine",
        103: "Richland",
        105: "Rock",
        107: "Rusk",
        109: "St Croix",
        111: "Sauk",
        113: "Sawyer",
        115: "Shawano",
        117: "Sheboygan",
        119: "Taylor",
        121: "Trempealeau",
        123: "Vernon",
        125: "Vilas",
        127: "Walworth",
        129: "Washburn",
        131: "Washington",
        133: "Waukesha",
        135: "Waupaca",
        137: "Waushara",
        139: "Winnebago",
        141: "Wood"
      },
      districtofcolumbia: {
        1: "Washington"
      },
      georgia: {
        1: "Appling",
        3: "Atkinson",
        5: "Bacon",
        7: "Baker",
        9: "Baldwin",
        11: "Banks",
        13: "Barrow",
        15: "Bartow",
        17: "Ben Hill",
        19: "Berrien",
        21: "Bibb",
        23: "Bleckley",
        25: "Brantley",
        27: "Brooks",
        29: "Bryan",
        31: "Bulloch",
        33: "Burke",
        35: "Butts",
        37: "Calhoun",
        39: "Camden",
        43: "Candler",
        45: "Carroll",
        47: "Catoosa",
        49: "Charlton",
        51: "Chatham",
        53: "Chattahoochee",
        55: "Chattooga",
        57: "Cherokee",
        59: "Clarke",
        61: "Clay",
        63: "Clayton",
        65: "Clinch",
        67: "Cobb",
        69: "Coffee",
        71: "Colquitt",
        73: "Columbia",
        75: "Cook",
        77: "Coweta",
        79: "Crawford",
        81: "Crisp",
        83: "Dade",
        85: "Dawson",
        87: "Decatur",
        89: "De Kalb",
        91: "Dodge",
        93: "Dooly",
        95: "Dougherty",
        97: "Douglas",
        99: "Early",
        101: "Echols",
        103: "Effingham",
        105: "Elbert",
        107: "Emanuel",
        109: "Evans",
        111: "Fannin",
        113: "Fayette",
        115: "Floyd",
        117: "Forsyth",
        119: "Franklin",
        121: "Fulton",
        123: "Gilmer",
        125: "Glascock",
        127: "Glynn",
        129: "Gordon",
        131: "Grady",
        133: "Greene",
        135: "Gwinnett",
        137: "Habersham",
        139: "Hall",
        141: "Hancock",
        143: "Haralson",
        145: "Harris",
        147: "Hart",
        149: "Heard",
        151: "Henry",
        153: "Houston",
        155: "Irwin",
        157: "Jackson",
        159: "Jasper",
        161: "Jeff Davis",
        163: "Jefferson",
        165: "Jenkins",
        167: "Johnson",
        169: "Jones",
        171: "Lamar",
        173: "Lanier",
        175: "Laurens",
        177: "Lee",
        179: "Liberty",
        181: "Lincoln",
        183: "Long",
        185: "Lowndes",
        187: "Lumpkin",
        189: "McDuffie",
        191: "McIntosh",
        193: "Macon",
        195: "Madison",
        197: "Marion",
        199: "Meriwether",
        201: "Miller",
        205: "Mitchell",
        207: "Monroe",
        209: "Montgomery",
        211: "Morgan",
        213: "Murray",
        215: "Muscogee",
        217: "Newton",
        219: "Oconee",
        221: "Oglethorpe",
        223: "Paulding",
        225: "Peach",
        227: "Pickens",
        229: "Pierce",
        231: "Pike",
        233: "Polk",
        235: "Pulaski",
        237: "Putnam",
        239: "Quitman",
        241: "Rabun",
        243: "Randolph",
        245: "Richmond",
        247: "Rockdale",
        249: "Schley",
        251: "Screven",
        253: "Seminole",
        255: "Spalding",
        257: "Stephens",
        259: "Stewart",
        261: "Sumter",
        263: "Talbot",
        265: "Taliaferro",
        267: "Tattnall",
        269: "Taylor",
        271: "Telfair",
        273: "Terrell",
        275: "Thomas",
        277: "Tift",
        279: "Toombs",
        281: "Towns",
        283: "Treutlen",
        285: "Troup",
        287: "Turner",
        289: "Twiggs",
        291: "Union",
        293: "Upson",
        295: "Walker",
        297: "Walton",
        299: "Ware",
        301: "Warren",
        303: "Washington",
        305: "Wayne",
        307: "Webster",
        309: "Wheeler",
        311: "White",
        313: "Whitfield",
        315: "Wilcox",
        317: "Wilkes",
        319: "Wilkinson",
        321: "Worth"
      },
      westvirginia: {
        1: "Barbour",
        3: "Berkeley",
        5: "Boone",
        7: "Braxton",
        9: "Brooke",
        11: "Cabell",
        13: "Calhoun",
        15: "Clay",
        17: "Doddridge",
        19: "Fayette",
        21: "Gilmer",
        23: "Grant",
        25: "Greenbrier",
        27: "Hampshire",
        29: "Hancock",
        31: "Hardy",
        33: "Harrison",
        35: "Jackson",
        37: "Jefferson",
        39: "Kanawha",
        41: "Lewis",
        43: "Lincoln",
        45: "Logan",
        47: "McDowell",
        49: "Marion",
        51: "Marshall",
        53: "Mason",
        55: "Mercer",
        57: "Mineral",
        59: "Mingo",
        61: "Monongalia",
        63: "Monroe",
        65: "Morgan",
        67: "Nicholas",
        69: "Ohio",
        71: "Pendleton",
        73: "Pleasants",
        75: "Pocahontas",
        77: "Preston",
        79: "Putnam",
        81: "Raleigh",
        83: "Randolph",
        85: "Ritchie",
        87: "Roane",
        89: "Summers",
        91: "Taylor",
        93: "Tucker",
        95: "Tyler",
        97: "Upshur",
        99: "Wayne",
        101: "Webster",
        103: "Wetzel",
        105: "Wirt",
        107: "Wood",
        109: "Wyoming"
      },
      newmexico: {
        1: "Bernalillo",
        3: "Catron",
        5: "Chaves",
        6: "Cibola",
        7: "Colfax",
        9: "Curry",
        11: "De Baca",
        13: "Dona Ana",
        15: "Eddy",
        17: "Grant",
        19: "Guadalupe",
        21: "Harding",
        23: "Hidalgo",
        25: "Lea",
        27: "Lincoln",
        28: "Los Alamos",
        29: "Luna",
        31: "McKinley",
        33: "Mora",
        35: "Otero",
        37: "Quay",
        39: "Rio Arriba",
        41: "Roosevelt",
        43: "Sandoval",
        45: "San Juan",
        47: "San Miguel",
        49: "Santa Fe",
        51: "Sierra",
        53: "Socorro",
        55: "Taos",
        57: "Torrance",
        59: "Union",
        61: "Valencia"
      },
      kansas: {
        1: "Allen",
        3: "Anderson",
        5: "Atchison",
        7: "Barber",
        9: "Barton",
        11: "Bourbon",
        13: "Brown",
        15: "Butler",
        17: "Chase",
        19: "Chautauqua",
        21: "Cherokee",
        23: "Cheyenne",
        25: "Clark",
        27: "Clay",
        29: "Cloud",
        31: "Coffey",
        33: "Comanche",
        35: "Cowley",
        37: "Crawford",
        39: "Decatur",
        41: "Dickinson",
        43: "Doniphan",
        45: "Douglas",
        47: "Edwards",
        49: "Elk",
        51: "Ellis",
        53: "Ellsworth",
        55: "Finney",
        57: "Ford",
        59: "Franklin",
        61: "Geary",
        63: "Gove",
        65: "Graham",
        67: "Grant",
        69: "Gray",
        71: "Greeley",
        73: "Greenwood",
        75: "Hamilton",
        77: "Harper",
        79: "Harvey",
        81: "Haskell",
        83: "Hodgeman",
        85: "Jackson",
        87: "Jefferson",
        89: "Jewell",
        91: "Johnson",
        93: "Kearny",
        95: "Kingman",
        97: "Kiowa",
        99: "Labette",
        101: "Lane",
        103: "Leavenworth",
        105: "Lincoln",
        107: "Linn",
        109: "Logan",
        111: "Lyon",
        113: "McPherson",
        115: "Marion",
        117: "Marshall",
        119: "Meade",
        121: "Miami",
        123: "Mitchell",
        125: "Montgomery",
        127: "Morris",
        129: "Morton",
        131: "Nemaha",
        133: "Neosho",
        135: "Ness",
        137: "Norton",
        139: "Osage",
        141: "Osborne",
        143: "Ottawa",
        145: "Pawnee",
        147: "Phillips",
        149: "Pottawatomie",
        151: "Pratt",
        153: "Rawlins",
        155: "Reno",
        157: "Republic",
        159: "Rice",
        161: "Riley",
        163: "Rooks",
        165: "Rush",
        167: "Russell",
        169: "Saline",
        171: "Scott",
        173: "Sedgwick",
        175: "Seward",
        177: "Shawnee",
        179: "Sheridan",
        181: "Sherman",
        183: "Smith",
        185: "Stafford",
        187: "Stanton",
        189: "Stevens",
        191: "Sumner",
        193: "Thomas",
        195: "Trego",
        197: "Wabaunsee",
        199: "Wallace",
        201: "Washington",
        203: "Wichita",
        205: "Wilson",
        207: "Woodson",
        209: "Wyandotte"
      },
      louisiana: {
        1: "Acadia",
        3: "Allen",
        5: "Ascension",
        7: "Assumption",
        9: "Avoyelles",
        11: "Beauregard",
        13: "Bienville",
        15: "Bossier",
        17: "Caddo",
        19: "Calcasieu",
        21: "Caldwell",
        23: "Cameron",
        25: "Catahoula",
        27: "Claiborne",
        29: "Concordia",
        31: "De Soto",
        33: "East Baton Rouge",
        35: "East Carroll",
        37: "East Feliciana",
        39: "Evangeline",
        41: "Franklin",
        43: "Grant",
        45: "Iberia",
        47: "Iberville",
        49: "Jackson",
        51: "Jefferson",
        53: "Jefferson Davis",
        55: "Lafayette",
        57: "Lafourche",
        59: "La Salle",
        61: "Lincoln",
        63: "Livingston",
        65: "Madison",
        67: "Morehouse",
        69: "Natchitoches",
        71: "Orleans",
        73: "Ouachita",
        75: "Plaquemines",
        77: "Pointe Coupee",
        79: "Rapides",
        81: "Red River",
        83: "Richland",
        85: "Sabine",
        87: "St Bernard",
        89: "St Charles",
        91: "St Helena",
        93: "St James",
        95: "St John the Baptist",
        97: "St Landry",
        99: "St Martin",
        101: "St Mary",
        103: "St Tammany",
        105: "Tangipahoa",
        107: "Tensas",
        109: "Terrebonne",
        111: "Union",
        113: "Vermilion",
        115: "Vernon",
        117: "Washington",
        119: "Webster",
        121: "West Baton Rouge",
        123: "West Carroll",
        125: "West Feliciana",
        127: "Winn"
      },
      hawaii: {
        1: "Hawaii",
        3: "Honolulu",
        7: "Kauai",
        9: "Maui"
      },
      southcarolina: {
        1: "Abbeville",
        3: "Aiken",
        5: "Allendale",
        7: "Anderson",
        9: "Bamberg",
        11: "Barnwell",
        13: "Beaufort",
        15: "Berkeley",
        17: "Calhoun",
        19: "Charleston",
        21: "Cherokee",
        23: "Chester",
        25: "Chesterfield",
        27: "Clarendon",
        29: "Colleton",
        31: "Darlington",
        33: "Dillon",
        35: "Dorchester",
        37: "Edgefield",
        39: "Fairfield",
        41: "Florence",
        43: "Georgetown",
        45: "Greenville",
        47: "Greenwood",
        49: "Hampton",
        51: "Horry",
        53: "Jasper",
        55: "Kershaw",
        57: "Lancaster",
        59: "Laurens",
        61: "Lee",
        63: "Lexington",
        65: "McCormick",
        67: "Marion",
        69: "Marlboro",
        71: "Newberry",
        73: "Oconee",
        75: "Orangeburg",
        77: "Pickens",
        79: "Richland",
        81: "Saluda",
        83: "Spartanburg",
        85: "Sumter",
        87: "Union",
        89: "Williamsburg",
        91: "York"
      },
      pennsylvania: {
        1: "Adams",
        3: "Allegheny",
        5: "Armstrong",
        7: "Beaver",
        9: "Bedford",
        11: "Berks",
        13: "Blair",
        15: "Bradford",
        17: "Bucks",
        19: "Butler",
        21: "Cambria",
        23: "Cameron",
        25: "Carbon",
        27: "Centre",
        29: "Chester",
        31: "Clarion",
        33: "Clearfield",
        35: "Clinton",
        37: "Columbia",
        39: "Crawford",
        41: "Cumberland",
        43: "Dauphin",
        45: "Delaware",
        47: "Elk",
        49: "Erie",
        51: "Fayette",
        53: "Forest",
        55: "Franklin",
        57: "Fulton",
        59: "Greene",
        61: "Huntingdon",
        63: "Indiana",
        65: "Jefferson",
        67: "Juniata",
        69: "Lackawanna",
        71: "Lancaster",
        73: "Lawrence",
        75: "Lebanon",
        77: "Lehigh",
        79: "Luzerne",
        81: "Lycoming",
        83: "McKean",
        85: "Mercer",
        87: "Mifflin",
        89: "Monroe",
        91: "Montgomery",
        93: "Montour",
        95: "Northampton",
        97: "Northumberland",
        99: "Perry",
        101: "Philadelphia",
        103: "Pike",
        105: "Potter",
        107: "Schuylkill",
        109: "Snyder",
        111: "Somerset",
        113: "Sullivan",
        115: "Susquehanna",
        117: "Tioga",
        119: "Union",
        121: "Venango",
        123: "Warren",
        125: "Washington",
        127: "Wayne",
        129: "Westmoreland",
        131: "Wyoming",
        133: "York"
      },
      washington: {
        1: "Adams",
        3: "Asotin",
        5: "Benton",
        7: "Chelan",
        9: "Clallam",
        11: "Clark",
        13: "Columbia",
        15: "Cowlitz",
        17: "Douglas",
        19: "Ferry",
        21: "Franklin",
        23: "Garfield",
        25: "Grant",
        27: "Grays Harbor",
        29: "Island",
        31: "Jefferson",
        33: "King",
        35: "Kitsap",
        37: "Kittitas",
        39: "Klickitat",
        41: "Lewis",
        43: "Lincoln",
        45: "Mason",
        47: "Okanogan",
        49: "Pacific",
        51: "Pend Oreille",
        53: "Pierce",
        55: "San Juan",
        57: "Skagit",
        59: "Skamania",
        61: "Snohomish",
        63: "Spokane",
        65: "Stevens",
        67: "Thurston",
        69: "Wahkiakum",
        71: "Walla Walla",
        73: "Whatcom",
        75: "Whitman",
        77: "Yakima"
      },
      texas: {
        1: "Anderson",
        3: "Andrews",
        5: "Angelina",
        7: "Aransas",
        9: "Archer",
        11: "Armstrong",
        13: "Atascosa",
        15: "Austin",
        17: "Bailey",
        19: "Bandera",
        21: "Bastrop",
        23: "Baylor",
        25: "Bee",
        27: "Bell",
        29: "Bexar",
        31: "Blanco",
        33: "Borden",
        35: "Bosque",
        37: "Bowie",
        39: "Brazoria",
        41: "Brazos",
        43: "Brewster",
        45: "Briscoe",
        47: "Brooks",
        49: "Brown",
        51: "Burleson",
        53: "Burnet",
        55: "Caldwell",
        57: "Calhoun",
        59: "Callahan",
        61: "Cameron",
        63: "Camp",
        65: "Carson",
        67: "Cass",
        69: "Castro",
        71: "Chambers",
        73: "Cherokee",
        75: "Childress",
        77: "Clay",
        79: "Cochran",
        81: "Coke",
        83: "Coleman",
        85: "Collin",
        87: "Collingsworth",
        89: "Colorado",
        91: "Comal",
        93: "Comanche",
        95: "Concho",
        97: "Cooke",
        99: "Coryell",
        101: "Cottle",
        103: "Crane",
        105: "Crockett",
        107: "Crosby",
        109: "Culberson",
        111: "Dallam",
        113: "Dallas",
        115: "Dawson",
        117: "Deaf Smith",
        119: "Delta",
        121: "Denton",
        123: "De Witt",
        125: "Dickens",
        127: "Dimmit",
        129: "Donley",
        131: "Duval",
        133: "Eastland",
        135: "Ector",
        137: "Edwards",
        139: "Ellis",
        141: "El Paso",
        143: "Erath",
        145: "Falls",
        147: "Fannin",
        149: "Fayette",
        151: "Fisher",
        153: "Floyd",
        155: "Foard",
        157: "Fort Bend",
        159: "Franklin",
        161: "Freestone",
        163: "Frio",
        165: "Gaines",
        167: "Galveston",
        169: "Garza",
        171: "Gillespie",
        173: "Glasscock",
        175: "Goliad",
        177: "Gonzales",
        179: "Gray",
        181: "Grayson",
        183: "Gregg",
        185: "Grimes",
        187: "Guadalupe",
        189: "Hale",
        191: "Hall",
        193: "Hamilton",
        195: "Hansford",
        197: "Hardeman",
        199: "Hardin",
        201: "Harris",
        203: "Harrison",
        205: "Hartley",
        207: "Haskell",
        209: "Hays",
        211: "Hemphill",
        213: "Henderson",
        215: "Hidalgo",
        217: "Hill",
        219: "Hockley",
        221: "Hood",
        223: "Hopkins",
        225: "Houston",
        227: "Howard",
        229: "Hudspeth",
        231: "Hunt",
        233: "Hutchinson",
        235: "Irion",
        237: "Jack",
        239: "Jackson",
        241: "Jasper",
        243: "Jeff Davis",
        245: "Jefferson",
        247: "Jim Hogg",
        249: "Jim Wells",
        251: "Johnson",
        253: "Jones",
        255: "Karnes",
        257: "Kaufman",
        259: "Kendall",
        261: "Kenedy",
        263: "Kent",
        265: "Kerr",
        267: "Kimble",
        269: "King",
        271: "Kinney",
        273: "Kleberg",
        275: "Knox",
        277: "Lamar",
        279: "Lamb",
        281: "Lampasas",
        283: "La Salle",
        285: "Lavaca",
        287: "Lee",
        289: "Leon",
        291: "Liberty",
        293: "Limestone",
        295: "Lipscomb",
        297: "Live Oak",
        299: "Llano",
        301: "Loving",
        303: "Lubbock",
        305: "Lynn",
        307: "McCulloch",
        309: "McLennan",
        311: "McMullen",
        313: "Madison",
        315: "Marion",
        317: "Martin",
        319: "Mason",
        321: "Matagorda",
        323: "Maverick",
        325: "Medina",
        327: "Menard",
        329: "Midland",
        331: "Milam",
        333: "Mills",
        335: "Mitchell",
        337: "Montague",
        339: "Montgomery",
        341: "Moore",
        343: "Morris",
        345: "Motley",
        347: "Nacogdoches",
        349: "Navarro",
        351: "Newton",
        353: "Nolan",
        355: "Nueces",
        357: "Ochiltree",
        359: "Oldham",
        361: "Orange",
        363: "Palo Pinto",
        365: "Panola",
        367: "Parker",
        369: "Parmer",
        371: "Pecos",
        373: "Polk",
        375: "Potter",
        377: "Presidio",
        379: "Rains",
        381: "Randall",
        383: "Reagan",
        385: "Real",
        387: "Red River",
        389: "Reeves",
        391: "Refugio",
        393: "Roberts",
        395: "Robertson",
        397: "Rockwall",
        399: "Runnels",
        401: "Rusk",
        403: "Sabine",
        405: "San Augustine",
        407: "San Jacinto",
        409: "San Patricio",
        411: "San Saba",
        413: "Schleicher",
        415: "Scurry",
        417: "Shackelford",
        419: "Shelby",
        421: "Sherman",
        423: "Smith",
        425: "Somervell",
        427: "Starr",
        429: "Stephens",
        431: "Sterling",
        433: "Stonewall",
        435: "Sutton",
        437: "Swisher",
        439: "Tarrant",
        441: "Taylor",
        443: "Terrell",
        445: "Terry",
        447: "Throckmorton",
        449: "Titus",
        451: "Tom Green",
        453: "Travis",
        455: "Trinity",
        457: "Tyler",
        459: "Upshur",
        461: "Upton",
        463: "Uvalde",
        465: "Val Verde",
        467: "Van Zandt",
        469: "Victoria",
        471: "Walker",
        473: "Waller",
        475: "Ward",
        477: "Washington",
        479: "Webb",
        481: "Wharton",
        483: "Wheeler",
        485: "Wichita",
        487: "Wilbarger",
        489: "Willacy",
        491: "Williamson",
        493: "Wilson",
        495: "Winkler",
        497: "Wise",
        499: "Wood",
        501: "Yoakum",
        503: "Young",
        505: "Zapata",
        507: "Zavala"
      },
      arkansas: {
        1: "Arkansas",
        3: "Ashley",
        5: "Baxter",
        7: "Benton",
        9: "Boone",
        11: "Bradley",
        13: "Calhoun",
        15: "Carroll",
        17: "Chicot",
        19: "Clark",
        21: "Clay",
        23: "Cleburne",
        25: "Cleveland",
        27: "Columbia",
        29: "Conway",
        31: "Craighead",
        33: "Crawford",
        35: "Crittenden",
        37: "Cross",
        39: "Dallas",
        41: "Desha",
        43: "Drew",
        45: "Faulkner",
        47: "Franklin",
        49: "Fulton",
        51: "Garland",
        53: "Grant",
        55: "Greene",
        57: "Hempstead",
        59: "Hot Spring",
        61: "Howard",
        63: "Independence",
        65: "Izard",
        67: "Jackson",
        69: "Jefferson",
        71: "Johnson",
        73: "Lafayette",
        75: "Lawrence",
        77: "Lee",
        79: "Lincoln",
        81: "Little River",
        83: "Logan",
        85: "Lonoke",
        87: "Madison",
        89: "Marion",
        91: "Miller",
        93: "Mississippi",
        95: "Monroe",
        97: "Montgomery",
        99: "Nevada",
        101: "Newton",
        103: "Ouachita",
        105: "Perry",
        107: "Phillips",
        109: "Pike",
        111: "Poinsett",
        113: "Polk",
        115: "Pope",
        117: "Prairie",
        119: "Pulaski",
        121: "Randolph",
        123: "St Francis",
        125: "Saline",
        127: "Scott",
        129: "Searcy",
        131: "Sebastian",
        133: "Sevier",
        135: "Sharp",
        137: "Stone",
        139: "Union",
        141: "Van Buren",
        143: "Washington",
        145: "White",
        147: "Woodruff",
        149: "Yell"
      },
      michigan: {
        1: "Alcona",
        3: "Alger",
        5: "Allegan",
        7: "Alpena",
        9: "Antrim",
        11: "Arenac",
        13: "Baraga",
        15: "Barry",
        17: "Bay",
        19: "Benzie",
        21: "Berrien",
        23: "Branch",
        25: "Calhoun",
        27: "Cass",
        29: "Charlevoix",
        31: "Cheboygan",
        33: "Chippewa",
        35: "Clare",
        37: "Clinton",
        39: "Crawford",
        41: "Delta",
        43: "Dickinson",
        45: "Eaton",
        47: "Emmet",
        49: "Genesee",
        51: "Gladwin",
        53: "Gogebic",
        55: "Grand Traverse",
        57: "Gratiot",
        59: "Hillsdale",
        61: "Houghton",
        63: "Huron",
        65: "Ingham",
        67: "Ionia",
        69: "Iosco",
        71: "Iron",
        73: "Isabella",
        75: "Jackson",
        77: "Kalamazoo",
        79: "Kalkaska",
        81: "Kent",
        83: "Keweenaw",
        85: "Lake",
        87: "Lapeer",
        89: "Leelanau",
        91: "Lenawee",
        93: "Livingston",
        95: "Luce",
        97: "Mackinac",
        99: "Macomb",
        101: "Manistee",
        103: "Marquette",
        105: "Mason",
        107: "Mecosta",
        109: "Menominee",
        111: "Midland",
        113: "Missaukee",
        115: "Monroe",
        117: "Montcalm",
        119: "Montmorency",
        121: "Muskegon",
        123: "Newaygo",
        125: "Oakland",
        127: "Oceana",
        129: "Ogemaw",
        131: "Ontonagon",
        133: "Osceola",
        135: "Oscoda",
        137: "Otsego",
        139: "Ottawa",
        141: "Presque Isle",
        143: "Roscommon",
        145: "Saginaw",
        147: "St Clair",
        149: "St Joseph",
        151: "Sanilac",
        153: "Schoolcraft",
        155: "Shiawassee",
        157: "Tuscola",
        159: "Van Buren",
        161: "Washtenaw",
        163: "Wayne",
        165: "Wexford"
      },
      americansamoa: {
        10: "Unknown",
        20: "Olosega",
        50: "Tutuila"
      },
      northcarolina: {
        1: "Alamance",
        3: "Alexander",
        5: "Alleghany",
        7: "Anson",
        9: "Ashe",
        11: "Avery",
        13: "Beaufort",
        15: "Bertie",
        17: "Bladen",
        19: "Brunswick",
        21: "Buncombe",
        23: "Burke",
        25: "Cabarrus",
        27: "Caldwell",
        29: "Camden",
        31: "Carteret",
        33: "Caswell",
        35: "Catawba",
        37: "Chatham",
        39: "Cherokee",
        41: "Chowan",
        43: "Clay",
        45: "Cleveland",
        47: "Columbus",
        49: "Craven",
        51: "Cumberland",
        53: "Currituck",
        55: "Dare",
        57: "Davidson",
        59: "Davie",
        61: "Duplin",
        63: "Durham",
        65: "Edgecombe",
        67: "Forsyth",
        69: "Franklin",
        71: "Gaston",
        73: "Gates",
        75: "Graham",
        77: "Granville",
        79: "Greene",
        81: "Guilford",
        83: "Halifax",
        85: "Harnett",
        87: "Haywood",
        89: "Henderson",
        91: "Hertford",
        93: "Hoke",
        95: "Hyde",
        97: "Iredell",
        99: "Jackson",
        101: "Johnston",
        103: "Jones",
        105: "Lee",
        107: "Lenoir",
        109: "Lincoln",
        111: "McDowell",
        113: "Macon",
        115: "Madison",
        117: "Martin",
        119: "Mecklenburg",
        121: "Mitchell",
        123: "Montgomery",
        125: "Moore",
        127: "Nash",
        129: "New Hanover",
        131: "Northampton",
        133: "Onslow",
        135: "Orange",
        137: "Pamlico",
        139: "Pasquotank",
        141: "Pender",
        143: "Perquimans",
        145: "Person",
        147: "Pitt",
        149: "Polk",
        151: "Randolph",
        153: "Richmond",
        155: "Robeson",
        157: "Rockingham",
        159: "Rowan",
        161: "Rutherford",
        163: "Sampson",
        165: "Scotland",
        167: "Stanly",
        169: "Stokes",
        171: "Surry",
        173: "Swain",
        175: "Transylvania",
        177: "Tyrrell",
        179: "Union",
        181: "Vance",
        183: "Wake",
        185: "Warren",
        187: "Washington",
        189: "Watauga",
        191: "Wayne",
        193: "Wilkes",
        195: "Wilson",
        197: "Yadkin",
        199: "Yancey"
      },
      kentucky: {
        1: "Adair",
        3: "Allen",
        5: "Anderson",
        7: "Ballard",
        9: "Barren",
        11: "Bath",
        13: "Bell",
        15: "Boone",
        17: "Bourbon",
        19: "Boyd",
        21: "Boyle",
        23: "Bracken",
        25: "Breathitt",
        27: "Breckinridge",
        29: "Bullitt",
        31: "Butler",
        33: "Caldwell",
        35: "Calloway",
        37: "Campbell",
        39: "Carlisle",
        41: "Carroll",
        43: "Carter",
        45: "Casey",
        47: "Christian",
        49: "Clark",
        51: "Clay",
        53: "Clinton",
        55: "Crittenden",
        57: "Cumberland",
        59: "Daviess",
        61: "Edmonson",
        63: "Elliott",
        65: "Estill",
        67: "Fayette",
        69: "Fleming",
        71: "Floyd",
        73: "Franklin",
        75: "Fulton",
        77: "Gallatin",
        79: "Garrard",
        81: "Grant",
        83: "Graves",
        85: "Grayson",
        87: "Green",
        89: "Greenup",
        91: "Hancock",
        93: "Hardin",
        95: "Harlan",
        97: "Harrison",
        99: "Hart",
        101: "Henderson",
        103: "Henry",
        105: "Hickman",
        107: "Hopkins",
        109: "Jackson",
        111: "Jefferson",
        113: "Jessamine",
        115: "Johnson",
        117: "Kenton",
        119: "Knott",
        121: "Knox",
        123: "Larue",
        125: "Laurel",
        127: "Lawrence",
        129: "Lee",
        131: "Leslie",
        133: "Letcher",
        135: "Lewis",
        137: "Lincoln",
        139: "Livingston",
        141: "Logan",
        143: "Lyon",
        145: "McCracken",
        147: "McCreary",
        149: "McLean",
        151: "Madison",
        153: "Magoffin",
        155: "Marion",
        157: "Marshall",
        159: "Martin",
        161: "Mason",
        163: "Meade",
        165: "Menifee",
        167: "Mercer",
        169: "Metcalfe",
        171: "Monroe",
        173: "Montgomery",
        175: "Morgan",
        177: "Muhlenberg",
        179: "Nelson",
        181: "Nicholas",
        183: "Ohio",
        185: "Oldham",
        187: "Owen",
        189: "Owsley",
        191: "Pendleton",
        193: "Perry",
        195: "Pike",
        197: "Powell",
        199: "Pulaski",
        201: "Robertson",
        203: "Rockcastle",
        205: "Rowan",
        207: "Russell",
        209: "Scott",
        211: "Shelby",
        213: "Simpson",
        215: "Spencer",
        217: "Taylor",
        219: "Todd",
        221: "Trigg",
        223: "Trimble",
        225: "Union",
        227: "Warren",
        229: "Washington",
        231: "Wayne",
        233: "Webster",
        235: "Whitley",
        237: "Wolfe",
        239: "Woodford"
      },
      northernmarianaislands: {
        10: "Cocos Island",
        100: "Rota",
        110: "Saipan",
        120: "Tinian"
      },
      tennessee: {
        1: "Anderson",
        3: "Bedford",
        5: "Benton",
        7: "Bledsoe",
        9: "Blount",
        11: "Bradley",
        13: "Campbell",
        15: "Cannon",
        17: "Carroll",
        19: "Carter",
        21: "Cheatham",
        23: "Chester",
        25: "Claiborne",
        27: "Clay",
        29: "Cocke",
        31: "Coffee",
        33: "Crockett",
        35: "Cumberland",
        37: "Davidson",
        39: "Decatur",
        41: "De Kalb",
        43: "Dickson",
        45: "Dyer",
        47: "Fayette",
        49: "Fentress",
        51: "Franklin",
        53: "Gibson",
        55: "Giles",
        57: "Grainger",
        59: "Greene",
        61: "Grundy",
        63: "Hamblen",
        65: "Hamilton",
        67: "Hancock",
        69: "Hardeman",
        71: "Hardin",
        73: "Hawkins",
        75: "Haywood",
        77: "Henderson",
        79: "Henry",
        81: "Hickman",
        83: "Houston",
        85: "Humphreys",
        87: "Jackson",
        89: "Jefferson",
        91: "Johnson",
        93: "Knox",
        95: "Lake",
        97: "Lauderdale",
        99: "Lawrence",
        101: "Lewis",
        103: "Lincoln",
        105: "Loudon",
        107: "McMinn",
        109: "McNairy",
        111: "Macon",
        113: "Madison",
        115: "Marion",
        117: "Marshall",
        119: "Maury",
        121: "Meigs",
        123: "Monroe",
        125: "Montgomery",
        127: "Moore",
        129: "Morgan",
        131: "Obion",
        133: "Overton",
        135: "Perry",
        137: "Pickett",
        139: "Polk",
        141: "Putnam",
        143: "Rhea",
        145: "Roane",
        147: "Robertson",
        149: "Rutherford",
        151: "Scott",
        153: "Sequatchie",
        155: "Sevier",
        157: "Shelby",
        159: "Smith",
        161: "Stewart",
        163: "Sullivan",
        165: "Sumner",
        167: "Tipton",
        169: "Trousdale",
        171: "Unicoi",
        173: "Union",
        175: "Van Buren",
        177: "Warren",
        179: "Washington",
        181: "Wayne",
        183: "Weakley",
        185: "White",
        187: "Williamson",
        189: "Wilson"
      },
      newjersey: {
        1: "Atlantic",
        3: "Bergen",
        5: "Burlington",
        7: "Camden",
        9: "Cape May",
        11: "Cumberland",
        13: "Essex",
        15: "Gloucester",
        17: "Hudson",
        19: "Hunterdon",
        21: "Mercer",
        23: "Middlesex",
        25: "Monmouth",
        27: "Morris",
        29: "Ocean",
        31: "Passaic",
        33: "Salem",
        35: "Somerset",
        37: "Sussex",
        39: "Union",
        41: "Warren"
      },
      puertorico: {
        1: "Adjuntas",
        3: "Aguada",
        5: "Aguadilla",
        7: "Aguas Buenas",
        9: "Aibonito",
        11: "Anasco",
        13: "Arecibo",
        15: "Arroyo",
        17: "Barceloneta",
        19: "Barranquitas",
        21: "Bayamon",
        23: "Cabo Rojo",
        25: "Caguas",
        27: "Camuy",
        29: "Canovanas",
        31: "Carolina",
        33: "Catano",
        35: "Cayey",
        37: "Ceiba",
        41: "Cidra",
        43: "Coamo",
        45: "Comerio",
        47: "Corozal",
        49: "Culebra",
        51: "Dorado",
        53: "Fajardo",
        54: "Florida",
        55: "Guanica",
        57: "Guayama",
        59: "Guayanilla",
        61: "Guaynabo",
        63: "Gurabo",
        65: "Hatillo",
        67: "Hormigueros",
        71: "Isabela",
        73: "Jayuya",
        75: "Juana Diaz",
        77: "Juncos",
        79: "Lajas",
        81: "Lares",
        83: "Las Marias",
        85: "Las Piedras",
        87: "Loiza",
        89: "Luquillo",
        91: "Manati",
        93: "Maricao",
        95: "Maunabo",
        97: "Mayaguez",
        99: "Moca",
        101: "Morovis",
        103: "Nabuabo",
        105: "Naranjito",
        107: "Orocovis",
        109: "Patillas",
        111: "Penuelas",
        113: "Ponce",
        115: "Quebradillas",
        117: "Rincon",
        119: "Rio Grande",
        121: "Sabana Grande",
        123: "Salinas",
        125: "San German",
        127: "San Juan",
        129: "San Lorenzo",
        131: "San Sabastian",
        133: "Santa Isabel",
        135: "Toa Alta",
        137: "Toa Baja",
        139: "Trujillo Alto",
        141: "Utuado",
        143: "Vega Alta",
        145: "Vega Baja",
        147: "Vieques",
        149: "Villalba",
        151: "Yabucoa",
        153: "Yauco"
      },
      montana: {
        1: "Beaverhead",
        3: "Big Horn",
        5: "Blaine",
        7: "Broadwater",
        9: "Carbon",
        11: "Carter",
        13: "Cascade",
        15: "Chouteau",
        17: "Custer",
        19: "Daniels",
        21: "Dawson",
        23: "Deer Lodge",
        25: "Fallon",
        27: "Fergus",
        29: "Flathead",
        31: "Gallatin",
        33: "Garfield",
        35: "Glacier",
        37: "Golden Valley",
        39: "Granite",
        41: "Hill",
        43: "Jefferson",
        45: "Judith Basin",
        47: "Lake",
        49: "Lewis and Clark",
        51: "Liberty",
        53: "Lincoln",
        55: "McCone",
        57: "Madison",
        59: "Meagher",
        61: "Mineral",
        63: "Missoula",
        65: "Musselshell",
        67: "Park",
        69: "Petroleum",
        71: "Phillips",
        73: "Pondera",
        75: "Powder River",
        77: "Powell",
        79: "Prairie",
        81: "Ravalli",
        83: "Richland",
        85: "Roosevelt",
        87: "Rosebud",
        89: "Sanders",
        91: "Sheridan",
        93: "Silver Bow",
        95: "Stillwater",
        97: "Sweet Grass",
        99: "Teton",
        101: "Toole",
        103: "Treasure",
        105: "Valley",
        107: "Wheatland",
        109: "Wibaux",
        111: "Yellowstone",
        113: "Yellowstone Nat Park"
      },
      utah: {
        1: "Beaver",
        3: "Box Elder",
        5: "Cache",
        7: "Carbon",
        9: "Daggett",
        11: "Davis",
        13: "Duchesne",
        15: "Emery",
        17: "Garfield",
        19: "Grand",
        21: "Iron",
        23: "Juab",
        25: "Kane",
        27: "Millard",
        29: "Morgan",
        31: "Piute",
        33: "Rich",
        35: "Salt Lake",
        37: "San Juan",
        39: "Sanpete",
        41: "Sevier",
        43: "Summit",
        45: "Tooele",
        47: "Uintah",
        49: "Utah",
        51: "Wasatch",
        53: "Washington",
        55: "Wayne",
        57: "Weber"
      },
      florida: {
        1: "Alachua",
        3: "Baker",
        5: "Bay",
        7: "Bradford",
        9: "Brevard",
        11: "Broward",
        13: "Calhoun",
        15: "Charlotte",
        17: "Citrus",
        19: "Clay",
        21: "Collier",
        23: "Columbia",
        27: "De Soto",
        29: "Dixie",
        31: "Duval",
        33: "Escambia",
        35: "Flagler",
        37: "Franklin",
        39: "Gadsden",
        41: "Gilchrist",
        43: "Glades",
        45: "Gulf",
        47: "Hamilton",
        49: "Hardee",
        51: "Hendry",
        53: "Hernando",
        55: "Highlands",
        57: "Hillsborough",
        59: "Holmes",
        61: "Indian River",
        63: "Jackson",
        65: "Jefferson",
        67: "Lafayette",
        69: "Lake",
        71: "Lee",
        73: "Leon",
        75: "Levy",
        77: "Liberty",
        79: "Madison",
        81: "Manatee",
        83: "Marion",
        85: "Martin",
        86: "Miami-Dade",
        87: "Monroe",
        89: "Nassau",
        91: "Okaloosa",
        93: "Okeechobee",
        95: "Orange",
        97: "Osceola",
        99: "Palm Beach",
        101: "Pasco",
        103: "Pinellas",
        105: "Polk",
        107: "Putnam",
        109: "St Johns",
        111: "St Lucie",
        113: "Santa Rosa",
        115: "Sarasota",
        117: "Seminole",
        119: "Sumter",
        121: "Suwannee",
        123: "Taylor",
        125: "Union",
        127: "Volusia",
        129: "Wakulla",
        131: "Walton",
        133: "Washington"
      },
      colorado: {
        1: "Adams",
        3: "Alamosa",
        5: "Arapahoe",
        7: "Archuleta",
        9: "Baca",
        11: "Bent",
        13: "Boulder",
        15: "Chaffee",
        17: "Cheyenne",
        19: "Clear Creek",
        21: "Conejos",
        23: "Costilla",
        25: "Crowley",
        27: "Custer",
        29: "Delta",
        31: "Denver",
        33: "Dolores",
        35: "Douglas",
        37: "Eagle",
        39: "Elbert",
        41: "El Paso",
        43: "Fremont",
        45: "Garfield",
        47: "Gilpin",
        49: "Grand",
        51: "Gunnison",
        53: "Hinsdale",
        55: "Huerfano",
        57: "Jackson",
        59: "Jefferson",
        61: "Kiowa",
        63: "Kit Carson",
        65: "Lake",
        67: "La Plata",
        69: "Larimer",
        71: "Las Animas",
        73: "Lincoln",
        75: "Logan",
        77: "Mesa",
        79: "Mineral",
        81: "Moffat",
        83: "Montezuma",
        85: "Montrose",
        87: "Morgan",
        89: "Otero",
        91: "Ouray",
        93: "Park",
        95: "Phillips",
        97: "Pitkin",
        99: "Prowers",
        101: "Pueblo",
        103: "Rio Blanco",
        105: "Rio Grande",
        107: "Routt",
        109: "Saguache",
        111: "San Juan",
        113: "San Miguel",
        115: "Sedgwick",
        117: "Summit",
        119: "Teller",
        121: "Washington",
        123: "Weld",
        125: "Yuma"
      },
      illinois: {
        1: "Adams",
        3: "Alexander",
        5: "Bond",
        7: "Boone",
        9: "Brown",
        11: "Bureau",
        13: "Calhoun",
        15: "Carroll",
        17: "Cass",
        19: "Champaign",
        21: "Christian",
        23: "Clark",
        25: "Clay",
        27: "Clinton",
        29: "Coles",
        31: "Cook",
        33: "Crawford",
        35: "Cumberland",
        37: "De Kalb",
        39: "De Witt",
        41: "Douglas",
        43: "Du Page",
        45: "Edgar",
        47: "Edwards",
        49: "Effingham",
        51: "Fayette",
        53: "Ford",
        55: "Franklin",
        57: "Fulton",
        59: "Gallatin",
        61: "Greene",
        63: "Grundy",
        65: "Hamilton",
        67: "Hancock",
        69: "Hardin",
        71: "Henderson",
        73: "Henry",
        75: "Iroquois",
        77: "Jackson",
        79: "Jasper",
        81: "Jefferson",
        83: "Jersey",
        85: "Jo Daviess",
        87: "Johnson",
        89: "Kane",
        91: "Kankakee",
        93: "Kendall",
        95: "Knox",
        97: "Lake",
        99: "La Salle",
        101: "Lawrence",
        103: "Lee",
        105: "Livingston",
        107: "Logan",
        109: "McDonough",
        111: "McHenry",
        113: "McLean",
        115: "Macon",
        117: "Macoupin",
        119: "Madison",
        121: "Marion",
        123: "Marshall",
        125: "Mason",
        127: "Massac",
        129: "Menard",
        131: "Mercer",
        133: "Monroe",
        135: "Montgomery",
        137: "Morgan",
        139: "Moultrie",
        141: "Ogle",
        143: "Peoria",
        145: "Perry",
        147: "Piatt",
        149: "Pike",
        151: "Pope",
        153: "Pulaski",
        155: "Putnam",
        157: "Randolph",
        159: "Richland",
        161: "Rock Island",
        163: "St Clair",
        165: "Saline",
        167: "Sangamon",
        169: "Schuyler",
        171: "Scott",
        173: "Shelby",
        175: "Stark",
        177: "Stephenson",
        179: "Tazewell",
        181: "Union",
        183: "Vermilion",
        185: "Wabash",
        187: "Warren",
        189: "Washington",
        191: "Wayne",
        193: "White",
        195: "Whiteside",
        197: "Will",
        199: "Williamson",
        201: "Winnebago",
        203: "Woodford"
      },
      indiana: {
        1: "Adams",
        3: "Allen",
        5: "Bartholomew",
        7: "Benton",
        9: "Blackford",
        11: "Boone",
        13: "Brown",
        15: "Carroll",
        17: "Cass",
        19: "Clark",
        21: "Clay",
        23: "Clinton",
        25: "Crawford",
        27: "Daviess",
        29: "Dearborn",
        31: "Decatur",
        33: "De Kalb",
        35: "Delaware",
        37: "Dubois",
        39: "Elkhart",
        41: "Fayette",
        43: "Floyd",
        45: "Fountain",
        47: "Franklin",
        49: "Fulton",
        51: "Gibson",
        53: "Grant",
        55: "Greene",
        57: "Hamilton",
        59: "Hancock",
        61: "Harrison",
        63: "Hendricks",
        65: "Henry",
        67: "Howard",
        69: "Huntington",
        71: "Jackson",
        73: "Jasper",
        75: "Jay",
        77: "Jefferson",
        79: "Jennings",
        81: "Johnson",
        83: "Knox",
        85: "Kosciusko",
        87: "La Grange",
        89: "Lake",
        91: "La Porte",
        93: "Lawrence",
        95: "Madison",
        97: "Marion",
        99: "Marshall",
        101: "Martin",
        103: "Miami",
        105: "Monroe",
        107: "Montgomery",
        109: "Morgan",
        111: "Newton",
        113: "Noble",
        115: "Ohio",
        117: "Orange",
        119: "Owen",
        121: "Parke",
        123: "Perry",
        125: "Pike",
        127: "Porter",
        129: "Posey",
        131: "Pulaski",
        133: "Putnam",
        135: "Randolph",
        137: "Ripley",
        139: "Rush",
        141: "St Joseph",
        143: "Scott",
        145: "Shelby",
        147: "Spencer",
        149: "Starke",
        151: "Steuben",
        153: "Sullivan",
        155: "Switzerland",
        157: "Tippecanoe",
        159: "Tipton",
        161: "Union",
        163: "Vanderburgh",
        165: "Vermillion",
        167: "Vigo",
        169: "Wabash",
        171: "Warren",
        173: "Warrick",
        175: "Washington",
        177: "Wayne",
        179: "Wells",
        181: "White",
        183: "Whitley"
      },
      minnesota: {
        1: "Aitkin",
        3: "Anoka",
        5: "Becker",
        7: "Beltrami",
        9: "Benton",
        11: "Big Stone",
        13: "Blue Earth",
        15: "Brown",
        17: "Carlton",
        19: "Carver",
        21: "Cass",
        23: "Chippewa",
        25: "Chisago",
        27: "Clay",
        29: "Clearwater",
        31: "Cook",
        33: "Cottonwood",
        35: "Crow Wing",
        37: "Dakota",
        39: "Dodge",
        41: "Douglas",
        43: "Faribault",
        45: "Fillmore",
        47: "Freeborn",
        49: "Goodhue",
        51: "Grant",
        53: "Hennepin",
        55: "Houston",
        57: "Hubbard",
        59: "Isanti",
        61: "Itasca",
        63: "Jackson",
        65: "Kanabec",
        67: "Kandiyohi",
        69: "Kittson",
        71: "Koochiching",
        73: "Lac qui Parle",
        75: "Lake",
        77: "Lake of the Woods",
        79: "Le Sueur",
        81: "Lincoln",
        83: "Lyon",
        85: "McLeod",
        87: "Mahnomen",
        89: "Marshall",
        91: "Martin",
        93: "Meeker",
        95: "Mille Lacs",
        97: "Morrison",
        99: "Mower",
        101: "Murray",
        103: "Nicollet",
        105: "Nobles",
        107: "Norman",
        109: "Olmsted",
        111: "Otter Tail",
        113: "Pennington",
        115: "Pine",
        117: "Pipestone",
        119: "Polk",
        121: "Pope",
        123: "Ramsey",
        125: "Red Lake",
        127: "Redwood",
        129: "Renville",
        131: "Rice",
        133: "Rock",
        135: "Roseau",
        137: "St Louis",
        139: "Scott",
        141: "Sherburne",
        143: "Sibley",
        145: "Stearns",
        147: "Steele",
        149: "Stevens",
        151: "Swift",
        153: "Todd",
        155: "Traverse",
        157: "Wabasha",
        159: "Wadena",
        161: "Waseca",
        163: "Washington",
        165: "Watonwan",
        167: "Wilkin",
        169: "Winona",
        171: "Wright",
        173: "Yellow Medicine"
      },
      oklahoma: {
        1: "Adair",
        3: "Alfalfa",
        5: "Atoka",
        7: "Beaver",
        9: "Beckham",
        11: "Blaine",
        13: "Bryan",
        15: "Caddo",
        17: "Canadian",
        19: "Carter",
        21: "Cherokee",
        23: "Choctaw",
        25: "Cimarron",
        27: "Cleveland",
        29: "Coal",
        31: "Comanche",
        33: "Cotton",
        35: "Craig",
        37: "Creek",
        39: "Custer",
        41: "Delaware",
        43: "Dewey",
        45: "Ellis",
        47: "Garfield",
        49: "Garvin",
        51: "Grady",
        53: "Grant",
        55: "Greer",
        57: "Harmon",
        59: "Harper",
        61: "Haskell",
        63: "Hughes",
        65: "Jackson",
        67: "Jefferson",
        69: "Johnston",
        71: "Kay",
        73: "Kingfisher",
        75: "Kiowa",
        77: "Latimer",
        79: "Le Flore",
        81: "Lincoln",
        83: "Logan",
        85: "Love",
        87: "McClain",
        89: "McCurtain",
        91: "McIntosh",
        93: "Major",
        95: "Marshall",
        97: "Mayes",
        99: "Murray",
        101: "Muskogee",
        103: "Noble",
        105: "Nowata",
        107: "Okfuskee",
        109: "Oklahoma",
        111: "Okmulgee",
        113: "Osage",
        115: "Ottawa",
        117: "Pawnee",
        119: "Payne",
        121: "Pittsburg",
        123: "Pontotoc",
        125: "Pottawatomie",
        127: "Pushmataha",
        129: "Roger Mills",
        131: "Rogers",
        133: "Seminole",
        135: "Sequoyah",
        137: "Stephens",
        139: "Texas",
        141: "Tillman",
        143: "Tulsa",
        145: "Wagoner",
        147: "Washington",
        149: "Washita",
        151: "Woods",
        153: "Woodward"
      },
      guam: {
        10: "Guam"
      },
      connecticut: {
        1: "Fairfield",
        3: "Hartford",
        5: "Litchfield",
        7: "Middlesex",
        9: "New Haven",
        11: "New London",
        13: "Tolland",
        15: "Windham"
      },
      iowa: {
        1: "Adair",
        3: "Adams",
        5: "Allamakee",
        7: "Appanoose",
        9: "Audubon",
        11: "Benton",
        13: "Black Hawk",
        15: "Boone",
        17: "Bremer",
        19: "Buchanan",
        21: "Buena Vista",
        23: "Butler",
        25: "Calhoun",
        27: "Carroll",
        29: "Cass",
        31: "Cedar",
        33: "Cerro Gordo",
        35: "Cherokee",
        37: "Chickasaw",
        39: "Clarke",
        41: "Clay",
        43: "Clayton",
        45: "Clinton",
        47: "Crawford",
        49: "Dallas",
        51: "Davis",
        53: "Decatur",
        55: "Delaware",
        57: "Des Moines",
        59: "Dickinson",
        61: "Dubuque",
        63: "Emmet",
        65: "Fayette",
        67: "Floyd",
        69: "Franklin",
        71: "Fremont",
        73: "Greene",
        75: "Grundy",
        77: "Guthrie",
        79: "Hamilton",
        81: "Hancock",
        83: "Hardin",
        85: "Harrison",
        87: "Henry",
        89: "Howard",
        91: "Humboldt",
        93: "Ida",
        95: "Iowa",
        97: "Jackson",
        99: "Jasper",
        101: "Jefferson",
        103: "Johnson",
        105: "Jones",
        107: "Keokuk",
        109: "Kossuth",
        111: "Lee",
        113: "Linn",
        115: "Louisa",
        117: "Lucas",
        119: "Lyon",
        121: "Madison",
        123: "Mahaska",
        125: "Marion",
        127: "Marshall",
        129: "Mills",
        131: "Mitchell",
        133: "Monona",
        135: "Monroe",
        137: "Montgomery",
        139: "Muscatine",
        141: "O Brien",
        143: "Osceola",
        145: "Page",
        147: "Palo Alto",
        149: "Plymouth",
        151: "Pocahontas",
        153: "Polk",
        155: "Pottawattamie",
        157: "Poweshiek",
        159: "Ringgold",
        161: "Sac",
        163: "Scott",
        165: "Shelby",
        167: "Sioux",
        169: "Story",
        171: "Tama",
        173: "Taylor",
        175: "Union",
        177: "Van Buren",
        179: "Wapello",
        181: "Warren",
        183: "Washington",
        185: "Wayne",
        187: "Webster",
        189: "Winnebago",
        191: "Winneshiek",
        193: "Woodbury",
        195: "Worth",
        197: "Wright"
      },
      maine: {
        1: "Androscoggin",
        3: "Aroostook",
        5: "Cumberland",
        7: "Franklin",
        9: "Hancock",
        11: "Kennebec",
        13: "Knox",
        15: "Lincoln",
        17: "Oxford",
        19: "Penobscot",
        21: "Piscataquis",
        23: "Sagadahoc",
        25: "Somerset",
        27: "Waldo",
        29: "Washington",
        31: "York"
      },
      arizona: {
        1: "Apache",
        3: "Cochise",
        5: "Coconino",
        7: "Gila",
        9: "Graham",
        11: "Greenlee",
        12: "La Paz",
        13: "Maricopa",
        15: "Mohave",
        17: "Navajo",
        19: "Pima",
        21: "Pinal",
        23: "Santa Cruz",
        25: "Yavapai",
        27: "Yuma"
      },
      missouri: {
        1: "Adair",
        3: "Andrew",
        5: "Atchison",
        7: "Audrain",
        9: "Barry",
        11: "Barton",
        13: "Bates",
        15: "Benton",
        17: "Bollinger",
        19: "Boone",
        21: "Buchanan",
        23: "Butler",
        25: "Caldwell",
        27: "Callaway",
        29: "Camden",
        31: "Cape Girardeau",
        33: "Carroll",
        35: "Carter",
        37: "Cass",
        39: "Cedar",
        41: "Chariton",
        43: "Christian",
        45: "Clark",
        47: "Clay",
        49: "Clinton",
        51: "Cole",
        53: "Cooper",
        55: "Crawford",
        57: "Dade",
        59: "Dallas",
        61: "Daviess",
        63: "De Kalb",
        65: "Dent",
        67: "Douglas",
        69: "Dunklin",
        71: "Franklin",
        73: "Gasconade",
        75: "Gentry",
        77: "Greene",
        79: "Grundy",
        81: "Harrison",
        83: "Henry",
        85: "Hickory",
        87: "Holt",
        89: "Howard",
        91: "Howell",
        93: "Iron",
        95: "Jackson",
        97: "Jasper",
        99: "Jefferson",
        101: "Johnson",
        103: "Knox",
        105: "Laclede",
        107: "Lafayette",
        109: "Lawrence",
        111: "Lewis",
        113: "Lincoln",
        115: "Linn",
        117: "Livingston",
        119: "McDonald",
        121: "Macon",
        123: "Madison",
        125: "Maries",
        127: "Marion",
        129: "Mercer",
        131: "Miller",
        133: "Mississippi",
        135: "Moniteau",
        137: "Monroe",
        139: "Montgomery",
        141: "Morgan",
        143: "New Madrid",
        145: "Newton",
        147: "Nodaway",
        149: "Oregon",
        151: "Osage",
        153: "Ozark",
        155: "Pemiscot",
        157: "Perry",
        159: "Pettis",
        161: "Phelps",
        163: "Pike",
        165: "Platte",
        167: "Polk",
        169: "Pulaski",
        171: "Putnam",
        173: "Ralls",
        175: "Randolph",
        177: "Ray",
        179: "Reynolds",
        181: "Ripley",
        183: "St Charles",
        185: "St Clair",
        186: "Ste. Genevieve",
        187: "St Francois",
        189: "St Louis",
        195: "Saline",
        197: "Schuyler",
        199: "Scotland",
        201: "Scott",
        203: "Shannon",
        205: "Shelby",
        207: "Stoddard",
        209: "Stone",
        211: "Sullivan",
        213: "Taney",
        215: "Texas",
        217: "Vernon",
        219: "Warren",
        221: "Washington",
        223: "Wayne",
        225: "Webster",
        227: "Worth",
        229: "Wright",
        510: "St Louis City"
      },
      newhampshire: {
        1: "Belknap",
        3: "Carroll",
        5: "Cheshire",
        7: "Coos",
        9: "Grafton",
        11: "Hillsborough",
        13: "Merrimack",
        15: "Rockingham",
        17: "Strafford",
        19: "Sullivan"
      },
      california: {
        1: "Alameda",
        3: "Alpine",
        5: "Amador",
        7: "Butte",
        9: "Calaveras",
        11: "Colusa",
        13: "Contra Costa",
        15: "Del Norte",
        17: "El Dorado",
        19: "Fresno",
        21: "Glenn",
        23: "Humboldt",
        25: "Imperial",
        27: "Inyo",
        29: "Kern",
        31: "Kings",
        33: "Lake",
        35: "Lassen",
        37: "Los Angeles",
        39: "Madera",
        41: "Marin",
        43: "Mariposa",
        45: "Mendocino",
        47: "Merced",
        49: "Modoc",
        51: "Mono",
        53: "Monterey",
        55: "Napa",
        57: "Nevada",
        59: "Orange",
        61: "Placer",
        63: "Plumas",
        65: "Riverside",
        67: "Sacramento",
        69: "San Benito",
        71: "San Bernardino",
        73: "San Diego",
        75: "San Francisco",
        77: "San Joaquin",
        79: "San Luis Obispo",
        81: "San Mateo",
        83: "Santa Barbara",
        85: "Santa Clara",
        87: "Santa Cruz",
        89: "Shasta",
        91: "Sierra",
        93: "Siskiyou",
        95: "Solano",
        97: "Sonoma",
        99: "Stanislaus",
        101: "Sutter",
        103: "Tehama",
        105: "Trinity",
        107: "Tulare",
        109: "Tuolumne",
        111: "Ventura",
        113: "Yolo",
        115: "Yuba"
      },
      maryland: {
        1: "Allegany",
        3: "Anne Arundel",
        5: "Baltimore",
        9: "Calvert",
        11: "Caroline",
        13: "Carroll",
        15: "Cecil",
        17: "Charles",
        19: "Dorchester",
        21: "Frederick",
        23: "Garrett",
        25: "Harford",
        27: "Howard",
        29: "Kent",
        31: "Montgomery",
        33: "Prince Georges",
        35: "Queen Annes",
        37: "St Marys",
        39: "Somerset",
        41: "Talbot",
        43: "Washington",
        45: "Wicomico",
        47: "Worcester",
        510: "Baltimore City"
      },
      rhodeisland: {
        1: "Bristol",
        3: "Kent",
        5: "Newport",
        7: "Providence",
        9: "Washington"
      },
      idaho: {
        1: "Ada",
        3: "Adams",
        5: "Bannock",
        7: "Bear Lake",
        9: "Benewah",
        11: "Bingham",
        13: "Blaine",
        15: "Boise",
        17: "Bonner",
        19: "Bonneville",
        21: "Boundary",
        23: "Butte",
        25: "Camas",
        27: "Canyon",
        29: "Caribou",
        31: "Cassia",
        33: "Clark",
        35: "Clearwater",
        37: "Custer",
        39: "Elmore",
        41: "Franklin",
        43: "Fremont",
        45: "Gem",
        47: "Gooding",
        49: "Idaho",
        51: "Jefferson",
        53: "Jerome",
        55: "Kootenai",
        57: "Latah",
        59: "Lemhi",
        61: "Lewis",
        63: "Lincoln",
        65: "Madison",
        67: "Minidoka",
        69: "Nez Perce",
        71: "Oneida",
        73: "Owyhee",
        75: "Payette",
        77: "Power",
        79: "Shoshone",
        81: "Teton",
        83: "Twin Falls",
        85: "Valley",
        87: "Washington"
      }
    };
    var st = state.toLowerCase().replace(' ', '');
    return codes[st][parseInt(fips)];
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
  function getContextFromStorage() {
    var savedState = window.location.href.includes("embed") ? null : localStorage.getItem("savedState");
    var state;

    try {
      state = JSON.parse(savedState); //         if (state.place && state.units && state.units.columnSets && (state.place.id === "new_mexico") && window.location.href.includes("portal")) {
      //             state.units.columnSets = state.units.columnSets.filter(c => c.type !== "election");
      //         }
    } catch (e) {
      localStorage.removeItem("savedState");
      navigateTo("/new");
    }

    if (state === null || state === undefined) {
      navigateTo("/new");
    }

    return state;
  }
  function loadPlanFromJSON(planRecord) {
    if (planRecord.msg && planRecord.plan) {
      // retrieved from database
      console.log(planRecord.msg);
      planRecord = planRecord.plan;
    }

    window.nycKeeps = {};
    Object.keys(planRecord.assignment || {}).forEach(function (key) {
      if (String(key).includes('÷')) {
        var newKey = key.replace(/÷/g, ".");
        planRecord.assignment[newKey] = planRecord.assignment[key];
        delete planRecord.assignment[key];
      }

      var colorAssigned = planRecord.assignment[key];

      if (!window.nycKeeps[String(colorAssigned)]) {
        window.nycKeeps[String(colorAssigned)] = {
          added: [Number(key)],
          removed: []
        };
      } else {
        window.nycKeeps[String(colorAssigned)].added.push(Number(key));
      }
    });

    if (planRecord.placeId === "nc") {
      planRecord.placeId = "northcarolina";
    }

    return listPlaces(planRecord.placeId, planRecord.state || (planRecord.place ? planRecord.place.state : null)).then(function (places) {
      var place = places.find(function (p) {
        return String(p.id).replace(/÷/g, ".") === String(planRecord.placeId);
      });

      if (place) {
        place.landmarks = (planRecord.place || {}).landmarks;
        planRecord.units = place.units.find(function (u) {
          return u.name === planRecord.units.name || u.name === "Wards" && planRecord.units.name === "2011 Wards" || u.name === "2011 Wards" && planRecord.units.name === "Wards";
        });
      } //         if (planRecord.place && (planRecord.place.id === "new_mexico") && planRecord.units && planRecord.units.columnSets && window.location.href.includes("portal")) {
      //             // hide election data on New Mexico portal maps
      //             planRecord.units.columnSets = planRecord.units.columnSets.filter(c => c.type !== "election");
      //         }


      return _objectSpread2(_objectSpread2({}, planRecord), {}, {
        place: place
      });
    });
  }
  function loadPlanFromURL(url) {
    return fetch(url).then(function (r) {
      return r.json();
    }).then(loadPlanFromJSON);
  }

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function createCommonjsModule(fn, basedir, module) {
  	return module = {
  	  path: basedir,
  	  exports: {},
  	  require: function (path, base) {
        return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
      }
  	}, fn(module, module.exports), module.exports;
  }

  function commonjsRequire () {
  	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
  }

  var mapboxGl = createCommonjsModule(function (module, exports) {
  /* Mapbox GL JS is Copyright © 2020 Mapbox and subject to the Mapbox Terms of Service ((https://www.mapbox.com/legal/tos/). */
  (function (global, factory) {
  module.exports = factory() ;
  }(commonjsGlobal, (function () {
  /* eslint-disable */

  var shared, worker, mapboxgl;
  // define gets called three times: one for each chunk. we rely on the order
  // they're imported to know which is which
  function define(_, chunk) {
  if (!shared) {
      shared = chunk;
  } else if (!worker) {
      worker = chunk;
  } else {
      var workerBundleString = "self.onerror = function() { console.error('An error occurred while parsing the WebWorker bundle. This is most likely due to improper transpilation by Babel; please see https://docs.mapbox.com/mapbox-gl-js/api/#transpiling-v2'); }; var sharedChunk = {}; (" + shared + ")(sharedChunk); (" + worker + ")(sharedChunk); self.onerror = null;";

      var sharedChunk = {};
      shared(sharedChunk);
      mapboxgl = chunk(sharedChunk);
      if (typeof window !== 'undefined') {
          mapboxgl.workerUrl = window.URL.createObjectURL(new Blob([workerBundleString], { type: 'text/javascript' }));
      }
  }
  }


  define(["exports"],(function(t){var e="2.3.1",r=n;function n(t,e,r,n){this.cx=3*t,this.bx=3*(r-t)-this.cx,this.ax=1-this.cx-this.bx,this.cy=3*e,this.by=3*(n-e)-this.cy,this.ay=1-this.cy-this.by,this.p1x=t,this.p1y=n,this.p2x=r,this.p2y=n;}n.prototype.sampleCurveX=function(t){return ((this.ax*t+this.bx)*t+this.cx)*t},n.prototype.sampleCurveY=function(t){return ((this.ay*t+this.by)*t+this.cy)*t},n.prototype.sampleCurveDerivativeX=function(t){return (3*this.ax*t+2*this.bx)*t+this.cx},n.prototype.solveCurveX=function(t,e){var r,n,i,s,a;for(void 0===e&&(e=1e-6),i=t,a=0;a<8;a++){if(s=this.sampleCurveX(i)-t,Math.abs(s)<e)return i;var o=this.sampleCurveDerivativeX(i);if(Math.abs(o)<1e-6)break;i-=s/o;}if((i=t)<(r=0))return r;if(i>(n=1))return n;for(;r<n;){if(s=this.sampleCurveX(i),Math.abs(s-t)<e)return i;t>s?r=i:n=i,i=.5*(n-r)+r;}return i},n.prototype.solve=function(t,e){return this.sampleCurveY(this.solveCurveX(t,e))};var i=s;function s(t,e){this.x=t,this.y=e;}s.prototype={clone:function(){return new s(this.x,this.y)},add:function(t){return this.clone()._add(t)},sub:function(t){return this.clone()._sub(t)},multByPoint:function(t){return this.clone()._multByPoint(t)},divByPoint:function(t){return this.clone()._divByPoint(t)},mult:function(t){return this.clone()._mult(t)},div:function(t){return this.clone()._div(t)},rotate:function(t){return this.clone()._rotate(t)},rotateAround:function(t,e){return this.clone()._rotateAround(t,e)},matMult:function(t){return this.clone()._matMult(t)},unit:function(){return this.clone()._unit()},perp:function(){return this.clone()._perp()},round:function(){return this.clone()._round()},mag:function(){return Math.sqrt(this.x*this.x+this.y*this.y)},equals:function(t){return this.x===t.x&&this.y===t.y},dist:function(t){return Math.sqrt(this.distSqr(t))},distSqr:function(t){var e=t.x-this.x,r=t.y-this.y;return e*e+r*r},angle:function(){return Math.atan2(this.y,this.x)},angleTo:function(t){return Math.atan2(this.y-t.y,this.x-t.x)},angleWith:function(t){return this.angleWithSep(t.x,t.y)},angleWithSep:function(t,e){return Math.atan2(this.x*e-this.y*t,this.x*t+this.y*e)},_matMult:function(t){var e=t[2]*this.x+t[3]*this.y;return this.x=t[0]*this.x+t[1]*this.y,this.y=e,this},_add:function(t){return this.x+=t.x,this.y+=t.y,this},_sub:function(t){return this.x-=t.x,this.y-=t.y,this},_mult:function(t){return this.x*=t,this.y*=t,this},_div:function(t){return this.x/=t,this.y/=t,this},_multByPoint:function(t){return this.x*=t.x,this.y*=t.y,this},_divByPoint:function(t){return this.x/=t.x,this.y/=t.y,this},_unit:function(){return this._div(this.mag()),this},_perp:function(){var t=this.y;return this.y=this.x,this.x=-t,this},_rotate:function(t){var e=Math.cos(t),r=Math.sin(t),n=r*this.x+e*this.y;return this.x=e*this.x-r*this.y,this.y=n,this},_rotateAround:function(t,e){var r=Math.cos(t),n=Math.sin(t),i=e.y+n*(this.x-e.x)+r*(this.y-e.y);return this.x=e.x+r*(this.x-e.x)-n*(this.y-e.y),this.y=i,this},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}},s.convert=function(t){return t instanceof s?t:Array.isArray(t)?new s(t[0],t[1]):t};var a="undefined"!=typeof self?self:{};const o=Math.pow(2,53)-1,l=Math.PI/180,u=180/Math.PI;function c(t){return t*l}const h=[[0,0],[1,0],[1,1],[0,1]];function p(t){if(t<=0)return 0;if(t>=1)return 1;const e=t*t,r=e*t;return 4*(t<.5?r:3*(t-e)+r-.75)}function d(t,e,n,i){const s=new r(t,e,n,i);return function(t){return s.solve(t)}}const f=d(.25,.1,.25,1);function y(t,e,r){return Math.min(r,Math.max(e,t))}function m(t,e,r){const n=r-e,i=((t-e)%n+n)%n+e;return i===e?r:i}function g(t,e,r){if(!t.length)return r(null,[]);let n=t.length;const i=new Array(t.length);let s=null;t.forEach(((t,a)=>{e(t,((t,e)=>{t&&(s=t),i[a]=e,0==--n&&r(s,i);}));}));}function x(t){const e=[];for(const r in t)e.push(t[r]);return e}function v(t,...e){for(const r of e)for(const e in r)t[e]=r[e];return t}let b=1;function w(){return b++}function _(){return function t(e){return e?(e^16*Math.random()>>e/4).toString(16):([1e7]+-[1e3]+-4e3+-8e3+-1e11).replace(/[018]/g,t)}()}function k(t){return t<=1?1:Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function A(t){return !!t&&/^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(t)}function S(t,e){t.forEach((t=>{e[t]&&(e[t]=e[t].bind(e));}));}function I(t,e){return -1!==t.indexOf(e,t.length-e.length)}function z(t,e,r){const n={};for(const i in t)n[i]=e.call(r||this,t[i],i,t);return n}function T(t,e,r){const n={};for(const i in t)e.call(r||this,t[i],i,t)&&(n[i]=t[i]);return n}function M(t){return Array.isArray(t)?t.map(M):"object"==typeof t&&t?z(t,M):t}const E={};function B(t){E[t]||("undefined"!=typeof console&&console.warn(t),E[t]=!0);}function C(t,e,r){return (r.y-t.y)*(e.x-t.x)>(e.y-t.y)*(r.x-t.x)}function P(t){let e=0;for(let r,n,i=0,s=t.length,a=s-1;i<s;a=i++)r=t[i],n=t[a],e+=(n.x-r.x)*(r.y+n.y);return e}function D(){return "undefined"!=typeof WorkerGlobalScope&&"undefined"!=typeof self&&self instanceof WorkerGlobalScope}function V(t){const e={};if(t.replace(/(?:^|(?:\s*\,\s*))([^\x00-\x20\(\)<>@\,;\:\\"\/\[\]\?\=\{\}\x7F]+)(?:\=(?:([^\x00-\x20\(\)<>@\,;\:\\"\/\[\]\?\=\{\}\x7F]+)|(?:\"((?:[^"\\]|\\.)*)\")))?/g,((t,r,n,i)=>{const s=n||i;return e[r]=!s||s.toLowerCase(),""})),e["max-age"]){const t=parseInt(e["max-age"],10);isNaN(t)?delete e["max-age"]:e["max-age"]=t;}return e}let L,F,R,U=null;function $(t){if(null==U){const e=t.navigator?t.navigator.userAgent:null;U=!!t.safari||!(!e||!(/\b(iPad|iPhone|iPod)\b/.test(e)||e.match("Safari")&&!e.match("Chrome")));}return U}function O(t){try{const e=a[t];return e.setItem("_mapbox_test_",1),e.removeItem("_mapbox_test_"),!0}catch(t){return !1}}const q={now:()=>void 0!==R?R:a.performance.now(),setNow(t){R=t;},restoreNow(){R=void 0;},frame(t){const e=a.requestAnimationFrame(t);return {cancel:()=>a.cancelAnimationFrame(e)}},getImageData(t,e=0){const r=a.document.createElement("canvas"),n=r.getContext("2d");if(!n)throw new Error("failed to create canvas 2d context");return r.width=t.width,r.height=t.height,n.drawImage(t,0,0,t.width,t.height),n.getImageData(-e,-e,t.width+2*e,t.height+2*e)},resolveURL:t=>(L||(L=a.document.createElement("a")),L.href=t,L.href),get devicePixelRatio(){return a.devicePixelRatio},get prefersReducedMotion(){return !!a.matchMedia&&(null==F&&(F=a.matchMedia("(prefers-reduced-motion: reduce)")),F.matches)}};let N;const j={API_URL:"https://api.mapbox.com",get API_URL_REGEX(){if(null==N){const t=/^((https?:)?\/\/)?([^\/]+\.)?mapbox\.c(n|om)(\/|\?|$)/i;try{N=null!=process.env.API_URL_REGEX?new RegExp(process.env.API_URL_REGEX):t;}catch(e){N=t;}}return N},get EVENTS_URL(){return this.API_URL?0===this.API_URL.indexOf("https://api.mapbox.cn")?"https://events.mapbox.cn/events/v2":0===this.API_URL.indexOf("https://api.mapbox.com")?"https://events.mapbox.com/events/v2":null:null},SESSION_PATH:"/map-sessions/v1",FEEDBACK_URL:"https://apps.mapbox.com/feedback",TILE_URL_VERSION:"v4",RASTER_URL_PREFIX:"raster/v1",REQUIRE_ACCESS_TOKEN:!0,ACCESS_TOKEN:null,MAX_PARALLEL_IMAGE_REQUESTS:16},G={supported:!1,testSupport:function(t){!K&&X&&(H?Y(t):Z=t);}};let Z,X,K=!1,H=!1;function Y(t){const e=t.createTexture();t.bindTexture(t.TEXTURE_2D,e);try{if(t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,X),t.isContextLost())return;G.supported=!0;}catch(t){}t.deleteTexture(e),K=!0;}a.document&&(X=a.document.createElement("img"),X.onload=function(){Z&&Y(Z),Z=null,H=!0;},X.onerror=function(){K=!0,Z=null;},X.src="data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAQAAAAfQ//73v/+BiOh/AAA=");const J="01",W="NO_ACCESS_TOKEN";function Q(t){return 0===t.indexOf("mapbox:")}function tt(t){return j.API_URL_REGEX.test(t)}const et=/^(\w+):\/\/([^/?]*)(\/[^?]+)?\??(.+)?/;function rt(t){const e=t.match(et);if(!e)throw new Error("Unable to parse URL object");return {protocol:e[1],authority:e[2],path:e[3]||"/",params:e[4]?e[4].split("&"):[]}}function nt(t){const e=t.params.length?`?${t.params.join("&")}`:"";return `${t.protocol}://${t.authority}${t.path}${e}`}function it(t){if(!t)return null;const e=t.split(".");if(!e||3!==e.length)return null;try{return JSON.parse(decodeURIComponent(a.atob(e[1]).split("").map((t=>"%"+("00"+t.charCodeAt(0).toString(16)).slice(-2))).join("")))}catch(t){return null}}class st{constructor(t){this.type=t,this.anonId=null,this.eventData={},this.queue=[],this.pendingRequest=null;}getStorageKey(t){const e=it(j.ACCESS_TOKEN);let r="";return r=e&&e.u?a.btoa(encodeURIComponent(e.u).replace(/%([0-9A-F]{2})/g,((t,e)=>String.fromCharCode(Number("0x"+e))))):j.ACCESS_TOKEN||"",t?`mapbox.eventData.${t}:${r}`:`mapbox.eventData:${r}`}fetchEventData(){const t=O("localStorage"),e=this.getStorageKey(),r=this.getStorageKey("uuid");if(t)try{const t=a.localStorage.getItem(e);t&&(this.eventData=JSON.parse(t));const n=a.localStorage.getItem(r);n&&(this.anonId=n);}catch(t){B("Unable to read from LocalStorage");}}saveEventData(){const t=O("localStorage"),e=this.getStorageKey(),r=this.getStorageKey("uuid");if(t)try{a.localStorage.setItem(r,this.anonId),Object.keys(this.eventData).length>=1&&a.localStorage.setItem(e,JSON.stringify(this.eventData));}catch(t){B("Unable to write to LocalStorage");}}processRequests(t){}postEvent(t,r,n,i){if(!j.EVENTS_URL)return;const s=rt(j.EVENTS_URL);s.params.push(`access_token=${i||j.ACCESS_TOKEN||""}`);const a={event:this.type,created:new Date(t).toISOString(),sdkIdentifier:"mapbox-gl-js",sdkVersion:e,skuId:J,userId:this.anonId},o=r?v(a,r):a,l={url:nt(s),headers:{"Content-Type":"text/plain"},body:JSON.stringify([o])};this.pendingRequest=It(l,(t=>{this.pendingRequest=null,n(t),this.saveEventData(),this.processRequests(i);}));}queueRequest(t,e){this.queue.push(t),this.processRequests(e);}}const at=new class extends st{constructor(t){super("appUserTurnstile"),this._customAccessToken=t;}postTurnstileEvent(t,e){j.EVENTS_URL&&j.ACCESS_TOKEN&&Array.isArray(t)&&t.some((t=>Q(t)||tt(t)))&&this.queueRequest(Date.now(),e);}processRequests(t){if(this.pendingRequest||0===this.queue.length)return;this.anonId&&this.eventData.lastSuccess&&this.eventData.tokenU||this.fetchEventData();const e=it(j.ACCESS_TOKEN),r=e?e.u:j.ACCESS_TOKEN;let n=r!==this.eventData.tokenU;A(this.anonId)||(this.anonId=_(),n=!0);const i=this.queue.shift();if(this.eventData.lastSuccess){const t=new Date(this.eventData.lastSuccess),e=new Date(i),r=(i-this.eventData.lastSuccess)/864e5;n=n||r>=1||r<-1||t.getDate()!==e.getDate();}else n=!0;if(!n)return this.processRequests();this.postEvent(i,{"enabled.telemetry":!1},(t=>{t||(this.eventData.lastSuccess=i,this.eventData.tokenU=r);}),t);}},ot=at.postTurnstileEvent.bind(at),lt=new class extends st{constructor(){super("map.load"),this.success={},this.skuToken="";}postMapLoadEvent(t,e,r,n){this.skuToken=e,this.errorCb=n,j.EVENTS_URL&&(r||j.ACCESS_TOKEN?this.queueRequest({id:t,timestamp:Date.now()},r):this.errorCb(new Error(W)));}processRequests(t){if(this.pendingRequest||0===this.queue.length)return;const{id:e,timestamp:r}=this.queue.shift();e&&this.success[e]||(this.anonId||this.fetchEventData(),A(this.anonId)||(this.anonId=_()),this.postEvent(r,{skuToken:this.skuToken},(t=>{t?this.errorCb(t):e&&(this.success[e]=!0);}),t));}},ut=lt.postMapLoadEvent.bind(lt),ct=new class extends st{constructor(){super("map.auth"),this.success={},this.skuToken="";}getSession(t,e,r,n){if(!j.API_URL||!j.SESSION_PATH)return;const i=rt(j.API_URL+j.SESSION_PATH);i.params.push(`sku=${e||""}`),i.params.push(`access_token=${n||j.ACCESS_TOKEN||""}`);const s={url:nt(i),headers:{"Content-Type":"text/plain"}};this.pendingRequest=zt(s,(t=>{this.pendingRequest=null,r(t),this.saveEventData(),this.processRequests(n);}));}getSessionAPI(t,e,r,n){this.skuToken=e,this.errorCb=n,j.SESSION_PATH&&j.API_URL&&(r||j.ACCESS_TOKEN?this.queueRequest({id:t,timestamp:Date.now()},r):this.errorCb(new Error(W)));}processRequests(t){if(this.pendingRequest||0===this.queue.length)return;const{id:e,timestamp:r}=this.queue.shift();e&&this.success[e]||this.getSession(r,this.skuToken,(t=>{t?this.errorCb(t):e&&(this.success[e]=!0);}),t);}},ht=ct.getSessionAPI.bind(ct),pt=new Set,dt="mapbox-tiles";let ft,yt,mt=500,gt=50;function xt(){a.caches&&!ft&&(ft=a.caches.open(dt));}function vt(t){const e=t.indexOf("?");return e<0?t:t.slice(0,e)}let bt=1/0;const wt={Unknown:"Unknown",Style:"Style",Source:"Source",Tile:"Tile",Glyphs:"Glyphs",SpriteImage:"SpriteImage",SpriteJSON:"SpriteJSON",Image:"Image"};"function"==typeof Object.freeze&&Object.freeze(wt);class _t extends Error{constructor(t,e,r){401===e&&tt(r)&&(t+=": you may have provided an invalid Mapbox access token. See https://www.mapbox.com/api-documentation/#access-tokens-and-token-scopes"),super(t),this.status=e,this.url=r;}toString(){return `${this.name}: ${this.message} (${this.status}): ${this.url}`}}const kt=D()?()=>self.worker&&self.worker.referrer:()=>("blob:"===a.location.protocol?a.parent:a).location.href;const At=function(t,e){if(!(/^file:/.test(r=t.url)||/^file:/.test(kt())&&!/^\w+:/.test(r))){if(a.fetch&&a.Request&&a.AbortController&&a.Request.prototype.hasOwnProperty("signal"))return function(t,e){const r=new a.AbortController,n=new a.Request(t.url,{method:t.method||"GET",body:t.body,credentials:t.credentials,headers:t.headers,referrer:kt(),signal:r.signal});let i=!1,s=!1;const o=(l=n.url).indexOf("sku=")>0&&tt(l);var l;"json"===t.type&&n.headers.set("Accept","application/json");const u=(r,i,l)=>{if(s)return;if(r&&"SecurityError"!==r.message&&B(r),i&&l)return c(i);const u=Date.now();a.fetch(n).then((r=>{if(r.ok){const t=o?r.clone():null;return c(r,t,u)}return e(new _t(r.statusText,r.status,t.url))})).catch((t=>{20!==t.code&&e(new Error(t.message));}));},c=(r,o,l)=>{("arrayBuffer"===t.type?r.arrayBuffer():"json"===t.type?r.json():r.text()).then((t=>{s||(o&&l&&function(t,e,r){if(xt(),!ft)return;const n={status:e.status,statusText:e.statusText,headers:new a.Headers};e.headers.forEach(((t,e)=>n.headers.set(e,t)));const i=V(e.headers.get("Cache-Control")||"");i["no-store"]||(i["max-age"]&&n.headers.set("Expires",new Date(r+1e3*i["max-age"]).toUTCString()),new Date(n.headers.get("Expires")).getTime()-r<42e4||function(t,e){if(void 0===yt)try{new Response(new ReadableStream),yt=!0;}catch(t){yt=!1;}yt?e(t.body):t.blob().then(e);}(e,(e=>{const r=new a.Response(e,n);xt(),ft&&ft.then((e=>e.put(vt(t.url),r))).catch((t=>B(t.message)));})));}(n,o,l),i=!0,e(null,t,r.headers.get("Cache-Control"),r.headers.get("Expires")));})).catch((t=>{s||e(new Error(t.message));}));};return o?function(t,e){if(xt(),!ft)return e(null);const r=vt(t.url);ft.then((t=>{t.match(r).then((n=>{const i=function(t){if(!t)return !1;const e=new Date(t.headers.get("Expires")||0),r=V(t.headers.get("Cache-Control")||"");return e>Date.now()&&!r["no-cache"]}(n);t.delete(r),i&&t.put(r,n.clone()),e(null,n,i);})).catch(e);})).catch(e);}(n,u):u(null,null),{cancel:()=>{s=!0,i||r.abort();}}}(t,e);if(D()&&self.worker&&self.worker.actor)return self.worker.actor.send("getResource",t,e,void 0,!0)}var r;return function(t,e){const r=new a.XMLHttpRequest;r.open(t.method||"GET",t.url,!0),"arrayBuffer"===t.type&&(r.responseType="arraybuffer");for(const e in t.headers)r.setRequestHeader(e,t.headers[e]);return "json"===t.type&&(r.responseType="text",r.setRequestHeader("Accept","application/json")),r.withCredentials="include"===t.credentials,r.onerror=()=>{e(new Error(r.statusText));},r.onload=()=>{if((r.status>=200&&r.status<300||0===r.status)&&null!==r.response){let n=r.response;if("json"===t.type)try{n=JSON.parse(r.response);}catch(t){return e(t)}e(null,n,r.getResponseHeader("Cache-Control"),r.getResponseHeader("Expires"));}else e(new _t(r.statusText,r.status,t.url));},r.send(t.body),{cancel:()=>r.abort()}}(t,e)},St=function(t,e){return At(v(t,{type:"arrayBuffer"}),e)},It=function(t,e){return At(v(t,{method:"POST"}),e)},zt=function(t,e){return At(v(t,{method:"GET"}),e)};function Tt(t){const e=a.document.createElement("a");return e.href=t,e.protocol===a.document.location.protocol&&e.host===a.document.location.host}const Mt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQYV2NgAAIAAAUAAarVyFEAAAAASUVORK5CYII=";let Et,Bt;Et=[],Bt=0;const Ct=function(t,e){if(G.supported&&(t.headers||(t.headers={}),t.headers.accept="image/webp,*/*"),Bt>=j.MAX_PARALLEL_IMAGE_REQUESTS){const r={requestParameters:t,callback:e,cancelled:!1,cancel(){this.cancelled=!0;}};return Et.push(r),r}Bt++;let r=!1;const n=()=>{if(!r)for(r=!0,Bt--;Et.length&&Bt<j.MAX_PARALLEL_IMAGE_REQUESTS;){const t=Et.shift(),{requestParameters:e,callback:r,cancelled:n}=t;n||(t.cancel=Ct(e,r).cancel);}},i=St(t,((t,r,i,s)=>{n(),t?e(t):r&&(a.createImageBitmap?function(t,e){const r=new a.Blob([new Uint8Array(t)],{type:"image/png"});a.createImageBitmap(r).then((t=>{e(null,t);})).catch((t=>{e(new Error(`Could not load image because of ${t.message}. Please make sure to use a supported image type such as PNG or JPEG. Note that SVGs are not supported.`));}));}(r,((t,r)=>e(t,r,i,s))):function(t,e){const r=new a.Image,n=a.URL;r.onload=()=>{e(null,r),n.revokeObjectURL(r.src),r.onload=null,a.requestAnimationFrame((()=>{r.src=Mt;}));},r.onerror=()=>e(new Error("Could not load image. Please make sure to use a supported image type such as PNG or JPEG. Note that SVGs are not supported."));const i=new a.Blob([new Uint8Array(t)],{type:"image/png"});r.src=t.byteLength?n.createObjectURL(i):Mt;}(r,((t,r)=>e(t,r,i,s))));}));return {cancel:()=>{i.cancel(),n();}}};function Pt(t,e,r){r[t]&&-1!==r[t].indexOf(e)||(r[t]=r[t]||[],r[t].push(e));}function Dt(t,e,r){if(r&&r[t]){const n=r[t].indexOf(e);-1!==n&&r[t].splice(n,1);}}class Vt{constructor(t,e={}){v(this,e),this.type=t;}}class Lt extends Vt{constructor(t,e={}){super("error",v({error:t},e));}}class Ft{on(t,e){return this._listeners=this._listeners||{},Pt(t,e,this._listeners),this}off(t,e){return Dt(t,e,this._listeners),Dt(t,e,this._oneTimeListeners),this}once(t,e){return e?(this._oneTimeListeners=this._oneTimeListeners||{},Pt(t,e,this._oneTimeListeners),this):new Promise((e=>this.once(t,e)))}fire(t,e){"string"==typeof t&&(t=new Vt(t,e||{}));const r=t.type;if(this.listens(r)){t.target=this;const e=this._listeners&&this._listeners[r]?this._listeners[r].slice():[];for(const r of e)r.call(this,t);const n=this._oneTimeListeners&&this._oneTimeListeners[r]?this._oneTimeListeners[r].slice():[];for(const e of n)Dt(r,e,this._oneTimeListeners),e.call(this,t);const i=this._eventedParent;i&&(v(t,"function"==typeof this._eventedParentData?this._eventedParentData():this._eventedParentData),i.fire(t));}else t instanceof Lt&&console.error(t.error);return this}listens(t){return !!(this._listeners&&this._listeners[t]&&this._listeners[t].length>0||this._oneTimeListeners&&this._oneTimeListeners[t]&&this._oneTimeListeners[t].length>0||this._eventedParent&&this._eventedParent.listens(t))}setEventedParent(t,e){return this._eventedParent=t,this._eventedParentData=e,this}}var Rt={$version:8,$root:{version:{required:!0,type:"enum",values:[8]},name:{type:"string"},metadata:{type:"*"},center:{type:"array",value:"number"},zoom:{type:"number"},bearing:{type:"number",default:0,period:360,units:"degrees"},pitch:{type:"number",default:0,units:"degrees"},light:{type:"light"},terrain:{type:"terrain"},fog:{type:"fog"},sources:{required:!0,type:"sources"},sprite:{type:"string"},glyphs:{type:"string"},transition:{type:"transition"},layers:{required:!0,type:"array",value:"layer"}},sources:{"*":{type:"source"}},source:["source_vector","source_raster","source_raster_dem","source_geojson","source_video","source_image"],source_vector:{type:{required:!0,type:"enum",values:{vector:{}}},url:{type:"string"},tiles:{type:"array",value:"string"},bounds:{type:"array",value:"number",length:4,default:[-180,-85.051129,180,85.051129]},scheme:{type:"enum",values:{xyz:{},tms:{}},default:"xyz"},minzoom:{type:"number",default:0},maxzoom:{type:"number",default:22},attribution:{type:"string"},promoteId:{type:"promoteId"},volatile:{type:"boolean",default:!1},"*":{type:"*"}},source_raster:{type:{required:!0,type:"enum",values:{raster:{}}},url:{type:"string"},tiles:{type:"array",value:"string"},bounds:{type:"array",value:"number",length:4,default:[-180,-85.051129,180,85.051129]},minzoom:{type:"number",default:0},maxzoom:{type:"number",default:22},tileSize:{type:"number",default:512,units:"pixels"},scheme:{type:"enum",values:{xyz:{},tms:{}},default:"xyz"},attribution:{type:"string"},volatile:{type:"boolean",default:!1},"*":{type:"*"}},source_raster_dem:{type:{required:!0,type:"enum",values:{"raster-dem":{}}},url:{type:"string"},tiles:{type:"array",value:"string"},bounds:{type:"array",value:"number",length:4,default:[-180,-85.051129,180,85.051129]},minzoom:{type:"number",default:0},maxzoom:{type:"number",default:22},tileSize:{type:"number",default:512,units:"pixels"},attribution:{type:"string"},encoding:{type:"enum",values:{terrarium:{},mapbox:{}},default:"mapbox"},volatile:{type:"boolean",default:!1},"*":{type:"*"}},source_geojson:{type:{required:!0,type:"enum",values:{geojson:{}}},data:{type:"*"},maxzoom:{type:"number",default:18},attribution:{type:"string"},buffer:{type:"number",default:128,maximum:512,minimum:0},filter:{type:"*"},tolerance:{type:"number",default:.375},cluster:{type:"boolean",default:!1},clusterRadius:{type:"number",default:50,minimum:0},clusterMaxZoom:{type:"number"},clusterMinPoints:{type:"number"},clusterProperties:{type:"*"},lineMetrics:{type:"boolean",default:!1},generateId:{type:"boolean",default:!1},promoteId:{type:"promoteId"}},source_video:{type:{required:!0,type:"enum",values:{video:{}}},urls:{required:!0,type:"array",value:"string"},coordinates:{required:!0,type:"array",length:4,value:{type:"array",length:2,value:"number"}}},source_image:{type:{required:!0,type:"enum",values:{image:{}}},url:{required:!0,type:"string"},coordinates:{required:!0,type:"array",length:4,value:{type:"array",length:2,value:"number"}}},layer:{id:{type:"string",required:!0},type:{type:"enum",values:{fill:{},line:{},symbol:{},circle:{},heatmap:{},"fill-extrusion":{},raster:{},hillshade:{},background:{},sky:{}},required:!0},metadata:{type:"*"},source:{type:"string"},"source-layer":{type:"string"},minzoom:{type:"number",minimum:0,maximum:24},maxzoom:{type:"number",minimum:0,maximum:24},filter:{type:"filter"},layout:{type:"layout"},paint:{type:"paint"}},layout:["layout_fill","layout_line","layout_circle","layout_heatmap","layout_fill-extrusion","layout_symbol","layout_raster","layout_hillshade","layout_background","layout_sky"],layout_background:{visibility:{type:"enum",values:{visible:{},none:{}},default:"visible","property-type":"constant"}},layout_sky:{visibility:{type:"enum",values:{visible:{},none:{}},default:"visible","property-type":"constant"}},layout_fill:{"fill-sort-key":{type:"number",expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},visibility:{type:"enum",values:{visible:{},none:{}},default:"visible","property-type":"constant"}},layout_circle:{"circle-sort-key":{type:"number",expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},visibility:{type:"enum",values:{visible:{},none:{}},default:"visible","property-type":"constant"}},layout_heatmap:{visibility:{type:"enum",values:{visible:{},none:{}},default:"visible","property-type":"constant"}},"layout_fill-extrusion":{visibility:{type:"enum",values:{visible:{},none:{}},default:"visible","property-type":"constant"}},layout_line:{"line-cap":{type:"enum",values:{butt:{},round:{},square:{}},default:"butt",expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},"line-join":{type:"enum",values:{bevel:{},round:{},miter:{}},default:"miter",expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},"line-miter-limit":{type:"number",default:2,requires:[{"line-join":"miter"}],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"line-round-limit":{type:"number",default:1.05,requires:[{"line-join":"round"}],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"line-sort-key":{type:"number",expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},visibility:{type:"enum",values:{visible:{},none:{}},default:"visible","property-type":"constant"}},layout_symbol:{"symbol-placement":{type:"enum",values:{point:{},line:{},"line-center":{}},default:"point",expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"symbol-spacing":{type:"number",default:250,minimum:1,units:"pixels",requires:[{"symbol-placement":"line"}],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"symbol-avoid-edges":{type:"boolean",default:!1,expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"symbol-sort-key":{type:"number",expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},"symbol-z-order":{type:"enum",values:{auto:{},"viewport-y":{},source:{}},default:"auto",expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"icon-allow-overlap":{type:"boolean",default:!1,requires:["icon-image"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"icon-ignore-placement":{type:"boolean",default:!1,requires:["icon-image"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"icon-optional":{type:"boolean",default:!1,requires:["icon-image","text-field"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"icon-rotation-alignment":{type:"enum",values:{map:{},viewport:{},auto:{}},default:"auto",requires:["icon-image"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"icon-size":{type:"number",default:1,minimum:0,units:"factor of the original icon size",requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom","feature"]},"property-type":"data-driven"},"icon-text-fit":{type:"enum",values:{none:{},width:{},height:{},both:{}},default:"none",requires:["icon-image","text-field"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"icon-text-fit-padding":{type:"array",value:"number",length:4,default:[0,0,0,0],units:"pixels",requires:["icon-image","text-field",{"icon-text-fit":["both","width","height"]}],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"icon-image":{type:"resolvedImage",tokens:!0,expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},"icon-rotate":{type:"number",default:0,period:360,units:"degrees",requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom","feature"]},"property-type":"data-driven"},"icon-padding":{type:"number",default:2,minimum:0,units:"pixels",requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"icon-keep-upright":{type:"boolean",default:!1,requires:["icon-image",{"icon-rotation-alignment":"map"},{"symbol-placement":["line","line-center"]}],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"icon-offset":{type:"array",value:"number",length:2,default:[0,0],requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom","feature"]},"property-type":"data-driven"},"icon-anchor":{type:"enum",values:{center:{},left:{},right:{},top:{},bottom:{},"top-left":{},"top-right":{},"bottom-left":{},"bottom-right":{}},default:"center",requires:["icon-image"],expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},"icon-pitch-alignment":{type:"enum",values:{map:{},viewport:{},auto:{}},default:"auto",requires:["icon-image"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"text-pitch-alignment":{type:"enum",values:{map:{},viewport:{},auto:{}},default:"auto",requires:["text-field"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"text-rotation-alignment":{type:"enum",values:{map:{},viewport:{},auto:{}},default:"auto",requires:["text-field"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"text-field":{type:"formatted",default:"",tokens:!0,expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-font":{type:"array",value:"string",default:["Open Sans Regular","Arial Unicode MS Regular"],requires:["text-field"],expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-size":{type:"number",default:16,minimum:0,units:"pixels",requires:["text-field"],expression:{interpolated:!0,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-max-width":{type:"number",default:10,minimum:0,units:"ems",requires:["text-field"],expression:{interpolated:!0,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-line-height":{type:"number",default:1.2,units:"ems",requires:["text-field"],expression:{interpolated:!0,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-letter-spacing":{type:"number",default:0,units:"ems",requires:["text-field"],expression:{interpolated:!0,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-justify":{type:"enum",values:{auto:{},left:{},center:{},right:{}},default:"center",requires:["text-field"],expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-radial-offset":{type:"number",units:"ems",default:0,requires:["text-field"],"property-type":"data-driven",expression:{interpolated:!0,parameters:["zoom","feature"]}},"text-variable-anchor":{type:"array",value:"enum",values:{center:{},left:{},right:{},top:{},bottom:{},"top-left":{},"top-right":{},"bottom-left":{},"bottom-right":{}},requires:["text-field",{"symbol-placement":["point"]}],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"text-anchor":{type:"enum",values:{center:{},left:{},right:{},top:{},bottom:{},"top-left":{},"top-right":{},"bottom-left":{},"bottom-right":{}},default:"center",requires:["text-field",{"!":"text-variable-anchor"}],expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-max-angle":{type:"number",default:45,units:"degrees",requires:["text-field",{"symbol-placement":["line","line-center"]}],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"text-writing-mode":{type:"array",value:"enum",values:{horizontal:{},vertical:{}},requires:["text-field",{"symbol-placement":["point"]}],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"text-rotate":{type:"number",default:0,period:360,units:"degrees",requires:["text-field"],expression:{interpolated:!0,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-padding":{type:"number",default:2,minimum:0,units:"pixels",requires:["text-field"],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"text-keep-upright":{type:"boolean",default:!0,requires:["text-field",{"text-rotation-alignment":"map"},{"symbol-placement":["line","line-center"]}],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"text-transform":{type:"enum",values:{none:{},uppercase:{},lowercase:{}},default:"none",requires:["text-field"],expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-offset":{type:"array",value:"number",units:"ems",length:2,default:[0,0],requires:["text-field",{"!":"text-radial-offset"}],expression:{interpolated:!0,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-allow-overlap":{type:"boolean",default:!1,requires:["text-field"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"text-ignore-placement":{type:"boolean",default:!1,requires:["text-field"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"text-optional":{type:"boolean",default:!1,requires:["text-field","icon-image"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},visibility:{type:"enum",values:{visible:{},none:{}},default:"visible","property-type":"constant"}},layout_raster:{visibility:{type:"enum",values:{visible:{},none:{}},default:"visible","property-type":"constant"}},layout_hillshade:{visibility:{type:"enum",values:{visible:{},none:{}},default:"visible","property-type":"constant"}},filter:{type:"array",value:"*"},filter_operator:{type:"enum",values:{"==":{},"!=":{},">":{},">=":{},"<":{},"<=":{},in:{},"!in":{},all:{},any:{},none:{},has:{},"!has":{},within:{}}},geometry_type:{type:"enum",values:{Point:{},LineString:{},Polygon:{}}},function:{expression:{type:"expression"},stops:{type:"array",value:"function_stop"},base:{type:"number",default:1,minimum:0},property:{type:"string",default:"$zoom"},type:{type:"enum",values:{identity:{},exponential:{},interval:{},categorical:{}},default:"exponential"},colorSpace:{type:"enum",values:{rgb:{},lab:{},hcl:{}},default:"rgb"},default:{type:"*",required:!1}},function_stop:{type:"array",minimum:0,maximum:24,value:["number","color"],length:2},expression:{type:"array",value:"*",minimum:1},fog:{range:{type:"array",default:[.5,10],minimum:-20,maximum:20,length:2,value:"number","property-type":"data-constant",transition:!0,expression:{interpolated:!0,parameters:["zoom"]}},color:{type:"color","property-type":"data-constant",default:"#ffffff",expression:{interpolated:!0,parameters:["zoom"]},transition:!0},"horizon-blend":{type:"number","property-type":"data-constant",default:.1,minimum:0,maximum:1,expression:{interpolated:!0,parameters:["zoom"]},transition:!0}},light:{anchor:{type:"enum",default:"viewport",values:{map:{},viewport:{}},"property-type":"data-constant",transition:!1,expression:{interpolated:!1,parameters:["zoom"]}},position:{type:"array",default:[1.15,210,30],length:3,value:"number","property-type":"data-constant",transition:!0,expression:{interpolated:!0,parameters:["zoom"]}},color:{type:"color","property-type":"data-constant",default:"#ffffff",expression:{interpolated:!0,parameters:["zoom"]},transition:!0},intensity:{type:"number","property-type":"data-constant",default:.5,minimum:0,maximum:1,expression:{interpolated:!0,parameters:["zoom"]},transition:!0}},terrain:{source:{type:"string",required:!0},exaggeration:{type:"number","property-type":"data-constant",default:1,minimum:0,maximum:1e3,expression:{interpolated:!0,parameters:["zoom"]},transition:!0}},paint:["paint_fill","paint_line","paint_circle","paint_heatmap","paint_fill-extrusion","paint_symbol","paint_raster","paint_hillshade","paint_background","paint_sky"],paint_fill:{"fill-antialias":{type:"boolean",default:!0,expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"fill-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"fill-color":{type:"color",default:"#000000",transition:!0,requires:[{"!":"fill-pattern"}],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"fill-outline-color":{type:"color",transition:!0,requires:[{"!":"fill-pattern"},{"fill-antialias":!0}],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"fill-translate":{type:"array",value:"number",length:2,default:[0,0],transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"fill-translate-anchor":{type:"enum",values:{map:{},viewport:{}},default:"map",requires:["fill-translate"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"fill-pattern":{type:"resolvedImage",transition:!0,expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"cross-faded-data-driven"}},"paint_fill-extrusion":{"fill-extrusion-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"fill-extrusion-color":{type:"color",default:"#000000",transition:!0,requires:[{"!":"fill-extrusion-pattern"}],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"fill-extrusion-translate":{type:"array",value:"number",length:2,default:[0,0],transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"fill-extrusion-translate-anchor":{type:"enum",values:{map:{},viewport:{}},default:"map",requires:["fill-extrusion-translate"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"fill-extrusion-pattern":{type:"resolvedImage",transition:!0,expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"cross-faded-data-driven"},"fill-extrusion-height":{type:"number",default:0,minimum:0,units:"meters",transition:!0,expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"fill-extrusion-base":{type:"number",default:0,minimum:0,units:"meters",transition:!0,requires:["fill-extrusion-height"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"fill-extrusion-vertical-gradient":{type:"boolean",default:!0,transition:!1,expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"}},paint_line:{"line-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"line-color":{type:"color",default:"#000000",transition:!0,requires:[{"!":"line-pattern"}],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"line-translate":{type:"array",value:"number",length:2,default:[0,0],transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"line-translate-anchor":{type:"enum",values:{map:{},viewport:{}},default:"map",requires:["line-translate"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"line-width":{type:"number",default:1,minimum:0,transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"line-gap-width":{type:"number",default:0,minimum:0,transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"line-offset":{type:"number",default:0,transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"line-blur":{type:"number",default:0,minimum:0,transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"line-dasharray":{type:"array",value:"number",minimum:0,transition:!0,units:"line widths",requires:[{"!":"line-pattern"}],expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"cross-faded-data-driven"},"line-pattern":{type:"resolvedImage",transition:!0,expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"cross-faded-data-driven"},"line-gradient":{type:"color",transition:!1,requires:[{"!":"line-dasharray"},{"!":"line-pattern"},{source:"geojson",has:{lineMetrics:!0}}],expression:{interpolated:!0,parameters:["line-progress"]},"property-type":"color-ramp"}},paint_circle:{"circle-radius":{type:"number",default:5,minimum:0,transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"circle-color":{type:"color",default:"#000000",transition:!0,expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"circle-blur":{type:"number",default:0,transition:!0,expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"circle-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"circle-translate":{type:"array",value:"number",length:2,default:[0,0],transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"circle-translate-anchor":{type:"enum",values:{map:{},viewport:{}},default:"map",requires:["circle-translate"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"circle-pitch-scale":{type:"enum",values:{map:{},viewport:{}},default:"map",expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"circle-pitch-alignment":{type:"enum",values:{map:{},viewport:{}},default:"viewport",expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"circle-stroke-width":{type:"number",default:0,minimum:0,transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"circle-stroke-color":{type:"color",default:"#000000",transition:!0,expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"circle-stroke-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"}},paint_heatmap:{"heatmap-radius":{type:"number",default:30,minimum:1,transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"heatmap-weight":{type:"number",default:1,minimum:0,transition:!1,expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"heatmap-intensity":{type:"number",default:1,minimum:0,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"heatmap-color":{type:"color",default:["interpolate",["linear"],["heatmap-density"],0,"rgba(0, 0, 255, 0)",.1,"royalblue",.3,"cyan",.5,"lime",.7,"yellow",1,"red"],transition:!1,expression:{interpolated:!0,parameters:["heatmap-density"]},"property-type":"color-ramp"},"heatmap-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"}},paint_symbol:{"icon-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"icon-color":{type:"color",default:"#000000",transition:!0,requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"icon-halo-color":{type:"color",default:"rgba(0, 0, 0, 0)",transition:!0,requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"icon-halo-width":{type:"number",default:0,minimum:0,transition:!0,units:"pixels",requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"icon-halo-blur":{type:"number",default:0,minimum:0,transition:!0,units:"pixels",requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"icon-translate":{type:"array",value:"number",length:2,default:[0,0],transition:!0,units:"pixels",requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"icon-translate-anchor":{type:"enum",values:{map:{},viewport:{}},default:"map",requires:["icon-image","icon-translate"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"text-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,requires:["text-field"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"text-color":{type:"color",default:"#000000",transition:!0,overridable:!0,requires:["text-field"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"text-halo-color":{type:"color",default:"rgba(0, 0, 0, 0)",transition:!0,requires:["text-field"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"text-halo-width":{type:"number",default:0,minimum:0,transition:!0,units:"pixels",requires:["text-field"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"text-halo-blur":{type:"number",default:0,minimum:0,transition:!0,units:"pixels",requires:["text-field"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"text-translate":{type:"array",value:"number",length:2,default:[0,0],transition:!0,units:"pixels",requires:["text-field"],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"text-translate-anchor":{type:"enum",values:{map:{},viewport:{}},default:"map",requires:["text-field","text-translate"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"}},paint_raster:{"raster-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"raster-hue-rotate":{type:"number",default:0,period:360,transition:!0,units:"degrees",expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"raster-brightness-min":{type:"number",default:0,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"raster-brightness-max":{type:"number",default:1,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"raster-saturation":{type:"number",default:0,minimum:-1,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"raster-contrast":{type:"number",default:0,minimum:-1,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"raster-resampling":{type:"enum",values:{linear:{},nearest:{}},default:"linear",expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"raster-fade-duration":{type:"number",default:300,minimum:0,transition:!1,units:"milliseconds",expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"}},paint_hillshade:{"hillshade-illumination-direction":{type:"number",default:335,minimum:0,maximum:359,transition:!1,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"hillshade-illumination-anchor":{type:"enum",values:{map:{},viewport:{}},default:"viewport",expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"hillshade-exaggeration":{type:"number",default:.5,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"hillshade-shadow-color":{type:"color",default:"#000000",transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"hillshade-highlight-color":{type:"color",default:"#FFFFFF",transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"hillshade-accent-color":{type:"color",default:"#000000",transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"}},paint_background:{"background-color":{type:"color",default:"#000000",transition:!0,requires:[{"!":"background-pattern"}],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"background-pattern":{type:"resolvedImage",transition:!0,expression:{interpolated:!1,parameters:["zoom"]},"property-type":"cross-faded"},"background-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"}},paint_sky:{"sky-type":{type:"enum",values:{gradient:{},atmosphere:{}},default:"atmosphere",expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"sky-atmosphere-sun":{type:"array",value:"number",length:2,units:"degrees",minimum:[0,0],maximum:[360,180],transition:!1,requires:[{"sky-type":"atmosphere"}],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"sky-atmosphere-sun-intensity":{type:"number",requires:[{"sky-type":"atmosphere"}],default:10,minimum:0,maximum:100,transition:!1,"property-type":"data-constant"},"sky-gradient-center":{type:"array",requires:[{"sky-type":"gradient"}],value:"number",default:[0,0],length:2,units:"degrees",minimum:[0,0],maximum:[360,180],transition:!1,expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"sky-gradient-radius":{type:"number",requires:[{"sky-type":"gradient"}],default:90,minimum:0,maximum:180,transition:!1,expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"sky-gradient":{type:"color",default:["interpolate",["linear"],["sky-radial-progress"],.8,"#87ceeb",1,"white"],transition:!1,requires:[{"sky-type":"gradient"}],expression:{interpolated:!0,parameters:["sky-radial-progress"]},"property-type":"color-ramp"},"sky-atmosphere-halo-color":{type:"color",default:"white",transition:!1,requires:[{"sky-type":"atmosphere"}],"property-type":"data-constant"},"sky-atmosphere-color":{type:"color",default:"white",transition:!1,requires:[{"sky-type":"atmosphere"}],"property-type":"data-constant"},"sky-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"}},transition:{duration:{type:"number",default:300,minimum:0,units:"milliseconds"},delay:{type:"number",default:0,minimum:0,units:"milliseconds"}},"property-type":{"data-driven":{type:"property-type"},"cross-faded":{type:"property-type"},"cross-faded-data-driven":{type:"property-type"},"color-ramp":{type:"property-type"},"data-constant":{type:"property-type"},constant:{type:"property-type"}},promoteId:{"*":{type:"string"}}};class Ut{constructor(t,e,r,n){this.message=(t?`${t}: `:"")+r,n&&(this.identifier=n),null!=e&&e.__line__&&(this.line=e.__line__);}}function $t(t){const e=t.value;return e?[new Ut(t.key,e,"constants have been deprecated as of v8")]:[]}function Ot(t,...e){for(const r of e)for(const e in r)t[e]=r[e];return t}function qt(t){return t instanceof Number||t instanceof String||t instanceof Boolean?t.valueOf():t}function Nt(t){if(Array.isArray(t))return t.map(Nt);if(t instanceof Object&&!(t instanceof Number||t instanceof String||t instanceof Boolean)){const e={};for(const r in t)e[r]=Nt(t[r]);return e}return qt(t)}class jt extends Error{constructor(t,e){super(e),this.message=e,this.key=t;}}class Gt{constructor(t,e=[]){this.parent=t,this.bindings={};for(const[t,r]of e)this.bindings[t]=r;}concat(t){return new Gt(this,t)}get(t){if(this.bindings[t])return this.bindings[t];if(this.parent)return this.parent.get(t);throw new Error(`${t} not found in scope.`)}has(t){return !!this.bindings[t]||!!this.parent&&this.parent.has(t)}}const Zt={kind:"null"},Xt={kind:"number"},Kt={kind:"string"},Ht={kind:"boolean"},Yt={kind:"color"},Jt={kind:"object"},Wt={kind:"value"},Qt={kind:"collator"},te={kind:"formatted"},ee={kind:"resolvedImage"};function re(t,e){return {kind:"array",itemType:t,N:e}}function ne(t){if("array"===t.kind){const e=ne(t.itemType);return "number"==typeof t.N?`array<${e}, ${t.N}>`:"value"===t.itemType.kind?"array":`array<${e}>`}return t.kind}const ie=[Zt,Xt,Kt,Ht,Yt,te,Jt,re(Wt),ee];function se(t,e){if("error"===e.kind)return null;if("array"===t.kind){if("array"===e.kind&&(0===e.N&&"value"===e.itemType.kind||!se(t.itemType,e.itemType))&&("number"!=typeof t.N||t.N===e.N))return null}else {if(t.kind===e.kind)return null;if("value"===t.kind)for(const t of ie)if(!se(t,e))return null}return `Expected ${ne(t)} but found ${ne(e)} instead.`}function ae(t,e){return e.some((e=>e.kind===t.kind))}function oe(t,e){return e.some((e=>"null"===e?null===t:"array"===e?Array.isArray(t):"object"===e?t&&!Array.isArray(t)&&"object"==typeof t:e===typeof t))}function le(t){var e={exports:{}};return t(e,e.exports),e.exports}var ue=le((function(t,e){var r={transparent:[0,0,0,0],aliceblue:[240,248,255,1],antiquewhite:[250,235,215,1],aqua:[0,255,255,1],aquamarine:[127,255,212,1],azure:[240,255,255,1],beige:[245,245,220,1],bisque:[255,228,196,1],black:[0,0,0,1],blanchedalmond:[255,235,205,1],blue:[0,0,255,1],blueviolet:[138,43,226,1],brown:[165,42,42,1],burlywood:[222,184,135,1],cadetblue:[95,158,160,1],chartreuse:[127,255,0,1],chocolate:[210,105,30,1],coral:[255,127,80,1],cornflowerblue:[100,149,237,1],cornsilk:[255,248,220,1],crimson:[220,20,60,1],cyan:[0,255,255,1],darkblue:[0,0,139,1],darkcyan:[0,139,139,1],darkgoldenrod:[184,134,11,1],darkgray:[169,169,169,1],darkgreen:[0,100,0,1],darkgrey:[169,169,169,1],darkkhaki:[189,183,107,1],darkmagenta:[139,0,139,1],darkolivegreen:[85,107,47,1],darkorange:[255,140,0,1],darkorchid:[153,50,204,1],darkred:[139,0,0,1],darksalmon:[233,150,122,1],darkseagreen:[143,188,143,1],darkslateblue:[72,61,139,1],darkslategray:[47,79,79,1],darkslategrey:[47,79,79,1],darkturquoise:[0,206,209,1],darkviolet:[148,0,211,1],deeppink:[255,20,147,1],deepskyblue:[0,191,255,1],dimgray:[105,105,105,1],dimgrey:[105,105,105,1],dodgerblue:[30,144,255,1],firebrick:[178,34,34,1],floralwhite:[255,250,240,1],forestgreen:[34,139,34,1],fuchsia:[255,0,255,1],gainsboro:[220,220,220,1],ghostwhite:[248,248,255,1],gold:[255,215,0,1],goldenrod:[218,165,32,1],gray:[128,128,128,1],green:[0,128,0,1],greenyellow:[173,255,47,1],grey:[128,128,128,1],honeydew:[240,255,240,1],hotpink:[255,105,180,1],indianred:[205,92,92,1],indigo:[75,0,130,1],ivory:[255,255,240,1],khaki:[240,230,140,1],lavender:[230,230,250,1],lavenderblush:[255,240,245,1],lawngreen:[124,252,0,1],lemonchiffon:[255,250,205,1],lightblue:[173,216,230,1],lightcoral:[240,128,128,1],lightcyan:[224,255,255,1],lightgoldenrodyellow:[250,250,210,1],lightgray:[211,211,211,1],lightgreen:[144,238,144,1],lightgrey:[211,211,211,1],lightpink:[255,182,193,1],lightsalmon:[255,160,122,1],lightseagreen:[32,178,170,1],lightskyblue:[135,206,250,1],lightslategray:[119,136,153,1],lightslategrey:[119,136,153,1],lightsteelblue:[176,196,222,1],lightyellow:[255,255,224,1],lime:[0,255,0,1],limegreen:[50,205,50,1],linen:[250,240,230,1],magenta:[255,0,255,1],maroon:[128,0,0,1],mediumaquamarine:[102,205,170,1],mediumblue:[0,0,205,1],mediumorchid:[186,85,211,1],mediumpurple:[147,112,219,1],mediumseagreen:[60,179,113,1],mediumslateblue:[123,104,238,1],mediumspringgreen:[0,250,154,1],mediumturquoise:[72,209,204,1],mediumvioletred:[199,21,133,1],midnightblue:[25,25,112,1],mintcream:[245,255,250,1],mistyrose:[255,228,225,1],moccasin:[255,228,181,1],navajowhite:[255,222,173,1],navy:[0,0,128,1],oldlace:[253,245,230,1],olive:[128,128,0,1],olivedrab:[107,142,35,1],orange:[255,165,0,1],orangered:[255,69,0,1],orchid:[218,112,214,1],palegoldenrod:[238,232,170,1],palegreen:[152,251,152,1],paleturquoise:[175,238,238,1],palevioletred:[219,112,147,1],papayawhip:[255,239,213,1],peachpuff:[255,218,185,1],peru:[205,133,63,1],pink:[255,192,203,1],plum:[221,160,221,1],powderblue:[176,224,230,1],purple:[128,0,128,1],rebeccapurple:[102,51,153,1],red:[255,0,0,1],rosybrown:[188,143,143,1],royalblue:[65,105,225,1],saddlebrown:[139,69,19,1],salmon:[250,128,114,1],sandybrown:[244,164,96,1],seagreen:[46,139,87,1],seashell:[255,245,238,1],sienna:[160,82,45,1],silver:[192,192,192,1],skyblue:[135,206,235,1],slateblue:[106,90,205,1],slategray:[112,128,144,1],slategrey:[112,128,144,1],snow:[255,250,250,1],springgreen:[0,255,127,1],steelblue:[70,130,180,1],tan:[210,180,140,1],teal:[0,128,128,1],thistle:[216,191,216,1],tomato:[255,99,71,1],turquoise:[64,224,208,1],violet:[238,130,238,1],wheat:[245,222,179,1],white:[255,255,255,1],whitesmoke:[245,245,245,1],yellow:[255,255,0,1],yellowgreen:[154,205,50,1]};function n(t){return (t=Math.round(t))<0?0:t>255?255:t}function i(t){return n("%"===t[t.length-1]?parseFloat(t)/100*255:parseInt(t))}function s(t){return (e="%"===t[t.length-1]?parseFloat(t)/100:parseFloat(t))<0?0:e>1?1:e;var e;}function a(t,e,r){return r<0?r+=1:r>1&&(r-=1),6*r<1?t+(e-t)*r*6:2*r<1?e:3*r<2?t+(e-t)*(2/3-r)*6:t}try{e.parseCSSColor=function(t){var e,o=t.replace(/ /g,"").toLowerCase();if(o in r)return r[o].slice();if("#"===o[0])return 4===o.length?(e=parseInt(o.substr(1),16))>=0&&e<=4095?[(3840&e)>>4|(3840&e)>>8,240&e|(240&e)>>4,15&e|(15&e)<<4,1]:null:7===o.length&&(e=parseInt(o.substr(1),16))>=0&&e<=16777215?[(16711680&e)>>16,(65280&e)>>8,255&e,1]:null;var l=o.indexOf("("),u=o.indexOf(")");if(-1!==l&&u+1===o.length){var c=o.substr(0,l),h=o.substr(l+1,u-(l+1)).split(","),p=1;switch(c){case"rgba":if(4!==h.length)return null;p=s(h.pop());case"rgb":return 3!==h.length?null:[i(h[0]),i(h[1]),i(h[2]),p];case"hsla":if(4!==h.length)return null;p=s(h.pop());case"hsl":if(3!==h.length)return null;var d=(parseFloat(h[0])%360+360)%360/360,f=s(h[1]),y=s(h[2]),m=y<=.5?y*(f+1):y+f-y*f,g=2*y-m;return [n(255*a(g,m,d+1/3)),n(255*a(g,m,d)),n(255*a(g,m,d-1/3)),p];default:return null}}return null};}catch(t){}}));class ce{constructor(t,e,r,n=1){this.r=t,this.g=e,this.b=r,this.a=n;}static parse(t){if(!t)return;if(t instanceof ce)return t;if("string"!=typeof t)return;const e=ue.parseCSSColor(t);return e?new ce(e[0]/255*e[3],e[1]/255*e[3],e[2]/255*e[3],e[3]):void 0}toString(){const[t,e,r,n]=this.toArray();return `rgba(${Math.round(t)},${Math.round(e)},${Math.round(r)},${n})`}toArray(){const{r:t,g:e,b:r,a:n}=this;return 0===n?[0,0,0,0]:[255*t/n,255*e/n,255*r/n,n]}}ce.black=new ce(0,0,0,1),ce.white=new ce(1,1,1,1),ce.transparent=new ce(0,0,0,0),ce.red=new ce(1,0,0,1),ce.blue=new ce(0,0,1,1);class he{constructor(t,e,r){this.sensitivity=t?e?"variant":"case":e?"accent":"base",this.locale=r,this.collator=new Intl.Collator(this.locale?this.locale:[],{sensitivity:this.sensitivity,usage:"search"});}compare(t,e){return this.collator.compare(t,e)}resolvedLocale(){return new Intl.Collator(this.locale?this.locale:[]).resolvedOptions().locale}}class pe{constructor(t,e,r,n,i){this.text=t,this.image=e,this.scale=r,this.fontStack=n,this.textColor=i;}}class de{constructor(t){this.sections=t;}static fromString(t){return new de([new pe(t,null,null,null,null)])}isEmpty(){return 0===this.sections.length||!this.sections.some((t=>0!==t.text.length||t.image&&0!==t.image.name.length))}static factory(t){return t instanceof de?t:de.fromString(t)}toString(){return 0===this.sections.length?"":this.sections.map((t=>t.text)).join("")}serialize(){const t=["format"];for(const e of this.sections){if(e.image){t.push(["image",e.image.name]);continue}t.push(e.text);const r={};e.fontStack&&(r["text-font"]=["literal",e.fontStack.split(",")]),e.scale&&(r["font-scale"]=e.scale),e.textColor&&(r["text-color"]=["rgba"].concat(e.textColor.toArray())),t.push(r);}return t}}class fe{constructor(t){this.name=t.name,this.available=t.available;}toString(){return this.name}static fromString(t){return t?new fe({name:t,available:!1}):null}serialize(){return ["image",this.name]}}function ye(t,e,r,n){return "number"==typeof t&&t>=0&&t<=255&&"number"==typeof e&&e>=0&&e<=255&&"number"==typeof r&&r>=0&&r<=255?void 0===n||"number"==typeof n&&n>=0&&n<=1?null:`Invalid rgba value [${[t,e,r,n].join(", ")}]: 'a' must be between 0 and 1.`:`Invalid rgba value [${("number"==typeof n?[t,e,r,n]:[t,e,r]).join(", ")}]: 'r', 'g', and 'b' must be between 0 and 255.`}function me(t){if(null===t)return !0;if("string"==typeof t)return !0;if("boolean"==typeof t)return !0;if("number"==typeof t)return !0;if(t instanceof ce)return !0;if(t instanceof he)return !0;if(t instanceof de)return !0;if(t instanceof fe)return !0;if(Array.isArray(t)){for(const e of t)if(!me(e))return !1;return !0}if("object"==typeof t){for(const e in t)if(!me(t[e]))return !1;return !0}return !1}function ge(t){if(null===t)return Zt;if("string"==typeof t)return Kt;if("boolean"==typeof t)return Ht;if("number"==typeof t)return Xt;if(t instanceof ce)return Yt;if(t instanceof he)return Qt;if(t instanceof de)return te;if(t instanceof fe)return ee;if(Array.isArray(t)){const e=t.length;let r;for(const e of t){const t=ge(e);if(r){if(r===t)continue;r=Wt;break}r=t;}return re(r||Wt,e)}return Jt}function xe(t){const e=typeof t;return null===t?"":"string"===e||"number"===e||"boolean"===e?String(t):t instanceof ce||t instanceof de||t instanceof fe?t.toString():JSON.stringify(t)}class ve{constructor(t,e){this.type=t,this.value=e;}static parse(t,e){if(2!==t.length)return e.error(`'literal' expression requires exactly one argument, but found ${t.length-1} instead.`);if(!me(t[1]))return e.error("invalid value");const r=t[1];let n=ge(r);const i=e.expectedType;return "array"!==n.kind||0!==n.N||!i||"array"!==i.kind||"number"==typeof i.N&&0!==i.N||(n=i),new ve(n,r)}evaluate(){return this.value}eachChild(){}outputDefined(){return !0}serialize(){return "array"===this.type.kind||"object"===this.type.kind?["literal",this.value]:this.value instanceof ce?["rgba"].concat(this.value.toArray()):this.value instanceof de?this.value.serialize():this.value}}class be{constructor(t){this.name="ExpressionEvaluationError",this.message=t;}toJSON(){return this.message}}const we={string:Kt,number:Xt,boolean:Ht,object:Jt};class _e{constructor(t,e){this.type=t,this.args=e;}static parse(t,e){if(t.length<2)return e.error("Expected at least one argument.");let r,n=1;const i=t[0];if("array"===i){let i,s;if(t.length>2){const r=t[1];if("string"!=typeof r||!(r in we)||"object"===r)return e.error('The item type argument of "array" must be one of string, number, boolean',1);i=we[r],n++;}else i=Wt;if(t.length>3){if(null!==t[2]&&("number"!=typeof t[2]||t[2]<0||t[2]!==Math.floor(t[2])))return e.error('The length argument to "array" must be a positive integer literal',2);s=t[2],n++;}r=re(i,s);}else r=we[i];const s=[];for(;n<t.length;n++){const r=e.parse(t[n],n,Wt);if(!r)return null;s.push(r);}return new _e(r,s)}evaluate(t){for(let e=0;e<this.args.length;e++){const r=this.args[e].evaluate(t);if(!se(this.type,ge(r)))return r;if(e===this.args.length-1)throw new be(`Expected value to be of type ${ne(this.type)}, but found ${ne(ge(r))} instead.`)}return null}eachChild(t){this.args.forEach(t);}outputDefined(){return this.args.every((t=>t.outputDefined()))}serialize(){const t=this.type,e=[t.kind];if("array"===t.kind){const r=t.itemType;if("string"===r.kind||"number"===r.kind||"boolean"===r.kind){e.push(r.kind);const n=t.N;("number"==typeof n||this.args.length>1)&&e.push(n);}}return e.concat(this.args.map((t=>t.serialize())))}}class ke{constructor(t){this.type=te,this.sections=t;}static parse(t,e){if(t.length<2)return e.error("Expected at least one argument.");const r=t[1];if(!Array.isArray(r)&&"object"==typeof r)return e.error("First argument must be an image or text section.");const n=[];let i=!1;for(let r=1;r<=t.length-1;++r){const s=t[r];if(i&&"object"==typeof s&&!Array.isArray(s)){i=!1;let t=null;if(s["font-scale"]&&(t=e.parse(s["font-scale"],1,Xt),!t))return null;let r=null;if(s["text-font"]&&(r=e.parse(s["text-font"],1,re(Kt)),!r))return null;let a=null;if(s["text-color"]&&(a=e.parse(s["text-color"],1,Yt),!a))return null;const o=n[n.length-1];o.scale=t,o.font=r,o.textColor=a;}else {const s=e.parse(t[r],1,Wt);if(!s)return null;const a=s.type.kind;if("string"!==a&&"value"!==a&&"null"!==a&&"resolvedImage"!==a)return e.error("Formatted text type must be 'string', 'value', 'image' or 'null'.");i=!0,n.push({content:s,scale:null,font:null,textColor:null});}}return new ke(n)}evaluate(t){return new de(this.sections.map((e=>{const r=e.content.evaluate(t);return ge(r)===ee?new pe("",r,null,null,null):new pe(xe(r),null,e.scale?e.scale.evaluate(t):null,e.font?e.font.evaluate(t).join(","):null,e.textColor?e.textColor.evaluate(t):null)})))}eachChild(t){for(const e of this.sections)t(e.content),e.scale&&t(e.scale),e.font&&t(e.font),e.textColor&&t(e.textColor);}outputDefined(){return !1}serialize(){const t=["format"];for(const e of this.sections){t.push(e.content.serialize());const r={};e.scale&&(r["font-scale"]=e.scale.serialize()),e.font&&(r["text-font"]=e.font.serialize()),e.textColor&&(r["text-color"]=e.textColor.serialize()),t.push(r);}return t}}class Ae{constructor(t){this.type=ee,this.input=t;}static parse(t,e){if(2!==t.length)return e.error("Expected two arguments.");const r=e.parse(t[1],1,Kt);return r?new Ae(r):e.error("No image name provided.")}evaluate(t){const e=this.input.evaluate(t),r=fe.fromString(e);return r&&t.availableImages&&(r.available=t.availableImages.indexOf(e)>-1),r}eachChild(t){t(this.input);}outputDefined(){return !1}serialize(){return ["image",this.input.serialize()]}}const Se={"to-boolean":Ht,"to-color":Yt,"to-number":Xt,"to-string":Kt};class Ie{constructor(t,e){this.type=t,this.args=e;}static parse(t,e){if(t.length<2)return e.error("Expected at least one argument.");const r=t[0];if(("to-boolean"===r||"to-string"===r)&&2!==t.length)return e.error("Expected one argument.");const n=Se[r],i=[];for(let r=1;r<t.length;r++){const n=e.parse(t[r],r,Wt);if(!n)return null;i.push(n);}return new Ie(n,i)}evaluate(t){if("boolean"===this.type.kind)return Boolean(this.args[0].evaluate(t));if("color"===this.type.kind){let e,r;for(const n of this.args){if(e=n.evaluate(t),r=null,e instanceof ce)return e;if("string"==typeof e){const r=t.parseColor(e);if(r)return r}else if(Array.isArray(e)&&(r=e.length<3||e.length>4?`Invalid rbga value ${JSON.stringify(e)}: expected an array containing either three or four numeric values.`:ye(e[0],e[1],e[2],e[3]),!r))return new ce(e[0]/255,e[1]/255,e[2]/255,e[3])}throw new be(r||`Could not parse color from value '${"string"==typeof e?e:String(JSON.stringify(e))}'`)}if("number"===this.type.kind){let e=null;for(const r of this.args){if(e=r.evaluate(t),null===e)return 0;const n=Number(e);if(!isNaN(n))return n}throw new be(`Could not convert ${JSON.stringify(e)} to number.`)}return "formatted"===this.type.kind?de.fromString(xe(this.args[0].evaluate(t))):"resolvedImage"===this.type.kind?fe.fromString(xe(this.args[0].evaluate(t))):xe(this.args[0].evaluate(t))}eachChild(t){this.args.forEach(t);}outputDefined(){return this.args.every((t=>t.outputDefined()))}serialize(){if("formatted"===this.type.kind)return new ke([{content:this.args[0],scale:null,font:null,textColor:null}]).serialize();if("resolvedImage"===this.type.kind)return new Ae(this.args[0]).serialize();const t=[`to-${this.type.kind}`];return this.eachChild((e=>{t.push(e.serialize());})),t}}const ze=["Unknown","Point","LineString","Polygon"];class Te{constructor(){this.globals=null,this.feature=null,this.featureState=null,this.formattedSection=null,this._parseColorCache={},this.availableImages=null,this.canonical=null;}id(){return this.feature&&"id"in this.feature?this.feature.id:null}geometryType(){return this.feature?"number"==typeof this.feature.type?ze[this.feature.type]:this.feature.type:null}geometry(){return this.feature&&"geometry"in this.feature?this.feature.geometry:null}canonicalID(){return this.canonical}properties(){return this.feature&&this.feature.properties||{}}parseColor(t){let e=this._parseColorCache[t];return e||(e=this._parseColorCache[t]=ce.parse(t)),e}}class Me{constructor(t,e,r,n){this.name=t,this.type=e,this._evaluate=r,this.args=n;}evaluate(t){return this._evaluate(t,this.args)}eachChild(t){this.args.forEach(t);}outputDefined(){return !1}serialize(){return [this.name].concat(this.args.map((t=>t.serialize())))}static parse(t,e){const r=t[0],n=Me.definitions[r];if(!n)return e.error(`Unknown expression "${r}". If you wanted a literal array, use ["literal", [...]].`,0);const i=Array.isArray(n)?n[0]:n.type,s=Array.isArray(n)?[[n[1],n[2]]]:n.overloads,a=s.filter((([e])=>!Array.isArray(e)||e.length===t.length-1));let o=null;for(const[n,s]of a){o=new We(e.registry,e.path,null,e.scope);const a=[];let l=!1;for(let e=1;e<t.length;e++){const r=t[e],i=Array.isArray(n)?n[e-1]:n.type,s=o.parse(r,1+a.length,i);if(!s){l=!0;break}a.push(s);}if(!l)if(Array.isArray(n)&&n.length!==a.length)o.error(`Expected ${n.length} arguments, but found ${a.length} instead.`);else {for(let t=0;t<a.length;t++){const e=Array.isArray(n)?n[t]:n.type,r=a[t];o.concat(t+1).checkSubtype(e,r.type);}if(0===o.errors.length)return new Me(r,i,s,a)}}if(1===a.length)e.errors.push(...o.errors);else {const r=(a.length?a:s).map((([t])=>{return e=t,Array.isArray(e)?`(${e.map(ne).join(", ")})`:`(${ne(e.type)}...)`;var e;})).join(" | "),n=[];for(let r=1;r<t.length;r++){const i=e.parse(t[r],1+n.length);if(!i)return null;n.push(ne(i.type));}e.error(`Expected arguments of type ${r}, but found (${n.join(", ")}) instead.`);}return null}static register(t,e){Me.definitions=e;for(const r in e)t[r]=Me;}}class Ee{constructor(t,e,r){this.type=Qt,this.locale=r,this.caseSensitive=t,this.diacriticSensitive=e;}static parse(t,e){if(2!==t.length)return e.error("Expected one argument.");const r=t[1];if("object"!=typeof r||Array.isArray(r))return e.error("Collator options argument must be an object.");const n=e.parse(void 0!==r["case-sensitive"]&&r["case-sensitive"],1,Ht);if(!n)return null;const i=e.parse(void 0!==r["diacritic-sensitive"]&&r["diacritic-sensitive"],1,Ht);if(!i)return null;let s=null;return r.locale&&(s=e.parse(r.locale,1,Kt),!s)?null:new Ee(n,i,s)}evaluate(t){return new he(this.caseSensitive.evaluate(t),this.diacriticSensitive.evaluate(t),this.locale?this.locale.evaluate(t):null)}eachChild(t){t(this.caseSensitive),t(this.diacriticSensitive),this.locale&&t(this.locale);}outputDefined(){return !1}serialize(){const t={};return t["case-sensitive"]=this.caseSensitive.serialize(),t["diacritic-sensitive"]=this.diacriticSensitive.serialize(),this.locale&&(t.locale=this.locale.serialize()),["collator",t]}}const Be=8192;function Ce(t,e){t[0]=Math.min(t[0],e[0]),t[1]=Math.min(t[1],e[1]),t[2]=Math.max(t[2],e[0]),t[3]=Math.max(t[3],e[1]);}function Pe(t,e){return !(t[0]<=e[0]||t[2]>=e[2]||t[1]<=e[1]||t[3]>=e[3])}function De(t,e){const r=(180+t[0])/360,n=(180-180/Math.PI*Math.log(Math.tan(Math.PI/4+t[1]*Math.PI/360)))/360,i=Math.pow(2,e.z);return [Math.round(r*i*Be),Math.round(n*i*Be)]}function Ve(t,e,r){const n=t[0]-e[0],i=t[1]-e[1],s=t[0]-r[0],a=t[1]-r[1];return n*a-s*i==0&&n*s<=0&&i*a<=0}function Le(t,e){let r=!1;for(let a=0,o=e.length;a<o;a++){const o=e[a];for(let e=0,a=o.length;e<a-1;e++){if(Ve(t,o[e],o[e+1]))return !1;(i=o[e])[1]>(n=t)[1]!=(s=o[e+1])[1]>n[1]&&n[0]<(s[0]-i[0])*(n[1]-i[1])/(s[1]-i[1])+i[0]&&(r=!r);}}var n,i,s;return r}function Fe(t,e){for(let r=0;r<e.length;r++)if(Le(t,e[r]))return !0;return !1}function Re(t,e,r,n){const i=n[0]-r[0],s=n[1]-r[1],a=(t[0]-r[0])*s-i*(t[1]-r[1]),o=(e[0]-r[0])*s-i*(e[1]-r[1]);return a>0&&o<0||a<0&&o>0}function Ue(t,e,r){for(const u of r)for(let r=0;r<u.length-1;++r)if(0!=(o=[(a=u[r+1])[0]-(s=u[r])[0],a[1]-s[1]])[0]*(l=[(i=e)[0]-(n=t)[0],i[1]-n[1]])[1]-o[1]*l[0]&&Re(n,i,s,a)&&Re(s,a,n,i))return !0;var n,i,s,a,o,l;return !1}function $e(t,e){for(let r=0;r<t.length;++r)if(!Le(t[r],e))return !1;for(let r=0;r<t.length-1;++r)if(Ue(t[r],t[r+1],e))return !1;return !0}function Oe(t,e){for(let r=0;r<e.length;r++)if($e(t,e[r]))return !0;return !1}function qe(t,e,r){const n=[];for(let i=0;i<t.length;i++){const s=[];for(let n=0;n<t[i].length;n++){const a=De(t[i][n],r);Ce(e,a),s.push(a);}n.push(s);}return n}function Ne(t,e,r){const n=[];for(let i=0;i<t.length;i++){const s=qe(t[i],e,r);n.push(s);}return n}function je(t,e,r,n){if(t[0]<r[0]||t[0]>r[2]){const e=.5*n;let i=t[0]-r[0]>e?-n:r[0]-t[0]>e?n:0;0===i&&(i=t[0]-r[2]>e?-n:r[2]-t[0]>e?n:0),t[0]+=i;}Ce(e,t);}function Ge(t,e,r,n){const i=Math.pow(2,n.z)*Be,s=[n.x*Be,n.y*Be],a=[];for(const n of t)for(const t of n){const n=[t.x+s[0],t.y+s[1]];je(n,e,r,i),a.push(n);}return a}function Ze(t,e,r,n){const i=Math.pow(2,n.z)*Be,s=[n.x*Be,n.y*Be],a=[];for(const r of t){const t=[];for(const n of r){const r=[n.x+s[0],n.y+s[1]];Ce(e,r),t.push(r);}a.push(t);}if(e[2]-e[0]<=i/2){(o=e)[0]=o[1]=1/0,o[2]=o[3]=-1/0;for(const t of a)for(const n of t)je(n,e,r,i);}var o;return a}class Xe{constructor(t,e){this.type=Ht,this.geojson=t,this.geometries=e;}static parse(t,e){if(2!==t.length)return e.error(`'within' expression requires exactly one argument, but found ${t.length-1} instead.`);if(me(t[1])){const e=t[1];if("FeatureCollection"===e.type)for(let t=0;t<e.features.length;++t){const r=e.features[t].geometry.type;if("Polygon"===r||"MultiPolygon"===r)return new Xe(e,e.features[t].geometry)}else if("Feature"===e.type){const t=e.geometry.type;if("Polygon"===t||"MultiPolygon"===t)return new Xe(e,e.geometry)}else if("Polygon"===e.type||"MultiPolygon"===e.type)return new Xe(e,e)}return e.error("'within' expression requires valid geojson object that contains polygon geometry type.")}evaluate(t){if(null!=t.geometry()&&null!=t.canonicalID()){if("Point"===t.geometryType())return function(t,e){const r=[1/0,1/0,-1/0,-1/0],n=[1/0,1/0,-1/0,-1/0],i=t.canonicalID();if("Polygon"===e.type){const s=qe(e.coordinates,n,i),a=Ge(t.geometry(),r,n,i);if(!Pe(r,n))return !1;for(const t of a)if(!Le(t,s))return !1}if("MultiPolygon"===e.type){const s=Ne(e.coordinates,n,i),a=Ge(t.geometry(),r,n,i);if(!Pe(r,n))return !1;for(const t of a)if(!Fe(t,s))return !1}return !0}(t,this.geometries);if("LineString"===t.geometryType())return function(t,e){const r=[1/0,1/0,-1/0,-1/0],n=[1/0,1/0,-1/0,-1/0],i=t.canonicalID();if("Polygon"===e.type){const s=qe(e.coordinates,n,i),a=Ze(t.geometry(),r,n,i);if(!Pe(r,n))return !1;for(const t of a)if(!$e(t,s))return !1}if("MultiPolygon"===e.type){const s=Ne(e.coordinates,n,i),a=Ze(t.geometry(),r,n,i);if(!Pe(r,n))return !1;for(const t of a)if(!Oe(t,s))return !1}return !0}(t,this.geometries)}return !1}eachChild(){}outputDefined(){return !0}serialize(){return ["within",this.geojson]}}function Ke(t){if(t instanceof Me){if("get"===t.name&&1===t.args.length)return !1;if("feature-state"===t.name)return !1;if("has"===t.name&&1===t.args.length)return !1;if("properties"===t.name||"geometry-type"===t.name||"id"===t.name)return !1;if(/^filter-/.test(t.name))return !1}if(t instanceof Xe)return !1;let e=!0;return t.eachChild((t=>{e&&!Ke(t)&&(e=!1);})),e}function He(t){if(t instanceof Me&&"feature-state"===t.name)return !1;let e=!0;return t.eachChild((t=>{e&&!He(t)&&(e=!1);})),e}function Ye(t,e){if(t instanceof Me&&e.indexOf(t.name)>=0)return !1;let r=!0;return t.eachChild((t=>{r&&!Ye(t,e)&&(r=!1);})),r}class Je{constructor(t,e){this.type=e.type,this.name=t,this.boundExpression=e;}static parse(t,e){if(2!==t.length||"string"!=typeof t[1])return e.error("'var' expression requires exactly one string literal argument.");const r=t[1];return e.scope.has(r)?new Je(r,e.scope.get(r)):e.error(`Unknown variable "${r}". Make sure "${r}" has been bound in an enclosing "let" expression before using it.`,1)}evaluate(t){return this.boundExpression.evaluate(t)}eachChild(){}outputDefined(){return !1}serialize(){return ["var",this.name]}}class We{constructor(t,e=[],r,n=new Gt,i=[]){this.registry=t,this.path=e,this.key=e.map((t=>`[${t}]`)).join(""),this.scope=n,this.errors=i,this.expectedType=r;}parse(t,e,r,n,i={}){return e?this.concat(e,r,n)._parse(t,i):this._parse(t,i)}_parse(t,e){function r(t,e,r){return "assert"===r?new _e(e,[t]):"coerce"===r?new Ie(e,[t]):t}if(null!==t&&"string"!=typeof t&&"boolean"!=typeof t&&"number"!=typeof t||(t=["literal",t]),Array.isArray(t)){if(0===t.length)return this.error('Expected an array with at least one element. If you wanted a literal array, use ["literal", []].');const n=t[0];if("string"!=typeof n)return this.error(`Expression name must be a string, but found ${typeof n} instead. If you wanted a literal array, use ["literal", [...]].`,0),null;const i=this.registry[n];if(i){let n=i.parse(t,this);if(!n)return null;if(this.expectedType){const t=this.expectedType,i=n.type;if("string"!==t.kind&&"number"!==t.kind&&"boolean"!==t.kind&&"object"!==t.kind&&"array"!==t.kind||"value"!==i.kind)if("color"!==t.kind&&"formatted"!==t.kind&&"resolvedImage"!==t.kind||"value"!==i.kind&&"string"!==i.kind){if(this.checkSubtype(t,i))return null}else n=r(n,t,e.typeAnnotation||"coerce");else n=r(n,t,e.typeAnnotation||"assert");}if(!(n instanceof ve)&&"resolvedImage"!==n.type.kind&&Qe(n)){const t=new Te;try{n=new ve(n.type,n.evaluate(t));}catch(t){return this.error(t.message),null}}return n}return this.error(`Unknown expression "${n}". If you wanted a literal array, use ["literal", [...]].`,0)}return this.error(void 0===t?"'undefined' value invalid. Use null instead.":"object"==typeof t?'Bare objects invalid. Use ["literal", {...}] instead.':`Expected an array, but found ${typeof t} instead.`)}concat(t,e,r){const n="number"==typeof t?this.path.concat(t):this.path,i=r?this.scope.concat(r):this.scope;return new We(this.registry,n,e||null,i,this.errors)}error(t,...e){const r=`${this.key}${e.map((t=>`[${t}]`)).join("")}`;this.errors.push(new jt(r,t));}checkSubtype(t,e){const r=se(t,e);return r&&this.error(r),r}}function Qe(t){if(t instanceof Je)return Qe(t.boundExpression);if(t instanceof Me&&"error"===t.name)return !1;if(t instanceof Ee)return !1;if(t instanceof Xe)return !1;const e=t instanceof Ie||t instanceof _e;let r=!0;return t.eachChild((t=>{r=e?r&&Qe(t):r&&t instanceof ve;})),!!r&&Ke(t)&&Ye(t,["zoom","heatmap-density","line-progress","sky-radial-progress","accumulated","is-supported-script"])}function tr(t,e){const r=t.length-1;let n,i,s=0,a=r,o=0;for(;s<=a;)if(o=Math.floor((s+a)/2),n=t[o],i=t[o+1],n<=e){if(o===r||e<i)return o;s=o+1;}else {if(!(n>e))throw new be("Input is not a number.");a=o-1;}return 0}class er{constructor(t,e,r){this.type=t,this.input=e,this.labels=[],this.outputs=[];for(const[t,e]of r)this.labels.push(t),this.outputs.push(e);}static parse(t,e){if(t.length-1<4)return e.error(`Expected at least 4 arguments, but found only ${t.length-1}.`);if((t.length-1)%2!=0)return e.error("Expected an even number of arguments.");const r=e.parse(t[1],1,Xt);if(!r)return null;const n=[];let i=null;e.expectedType&&"value"!==e.expectedType.kind&&(i=e.expectedType);for(let r=1;r<t.length;r+=2){const s=1===r?-1/0:t[r],a=t[r+1],o=r,l=r+1;if("number"!=typeof s)return e.error('Input/output pairs for "step" expressions must be defined using literal numeric values (not computed expressions) for the input values.',o);if(n.length&&n[n.length-1][0]>=s)return e.error('Input/output pairs for "step" expressions must be arranged with input values in strictly ascending order.',o);const u=e.parse(a,l,i);if(!u)return null;i=i||u.type,n.push([s,u]);}return new er(i,r,n)}evaluate(t){const e=this.labels,r=this.outputs;if(1===e.length)return r[0].evaluate(t);const n=this.input.evaluate(t);if(n<=e[0])return r[0].evaluate(t);const i=e.length;return n>=e[i-1]?r[i-1].evaluate(t):r[tr(e,n)].evaluate(t)}eachChild(t){t(this.input);for(const e of this.outputs)t(e);}outputDefined(){return this.outputs.every((t=>t.outputDefined()))}serialize(){const t=["step",this.input.serialize()];for(let e=0;e<this.labels.length;e++)e>0&&t.push(this.labels[e]),t.push(this.outputs[e].serialize());return t}}function rr(t,e,r){return t*(1-r)+e*r}var nr=Object.freeze({__proto__:null,number:rr,color:function(t,e,r){return new ce(rr(t.r,e.r,r),rr(t.g,e.g,r),rr(t.b,e.b,r),rr(t.a,e.a,r))},array:function(t,e,r){return t.map(((t,n)=>rr(t,e[n],r)))}});const ir=.95047,sr=1.08883,ar=4/29,or=6/29,lr=3*or*or,ur=Math.PI/180,cr=180/Math.PI;function hr(t){return t>.008856451679035631?Math.pow(t,1/3):t/lr+ar}function pr(t){return t>or?t*t*t:lr*(t-ar)}function dr(t){return 255*(t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055)}function fr(t){return (t/=255)<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}function yr(t){const e=fr(t.r),r=fr(t.g),n=fr(t.b),i=hr((.4124564*e+.3575761*r+.1804375*n)/ir),s=hr((.2126729*e+.7151522*r+.072175*n)/1);return {l:116*s-16,a:500*(i-s),b:200*(s-hr((.0193339*e+.119192*r+.9503041*n)/sr)),alpha:t.a}}function mr(t){let e=(t.l+16)/116,r=isNaN(t.a)?e:e+t.a/500,n=isNaN(t.b)?e:e-t.b/200;return e=1*pr(e),r=ir*pr(r),n=sr*pr(n),new ce(dr(3.2404542*r-1.5371385*e-.4985314*n),dr(-.969266*r+1.8760108*e+.041556*n),dr(.0556434*r-.2040259*e+1.0572252*n),t.alpha)}function gr(t,e,r){const n=e-t;return t+r*(n>180||n<-180?n-360*Math.round(n/360):n)}const xr={forward:yr,reverse:mr,interpolate:function(t,e,r){return {l:rr(t.l,e.l,r),a:rr(t.a,e.a,r),b:rr(t.b,e.b,r),alpha:rr(t.alpha,e.alpha,r)}}},vr={forward:function(t){const{l:e,a:r,b:n}=yr(t),i=Math.atan2(n,r)*cr;return {h:i<0?i+360:i,c:Math.sqrt(r*r+n*n),l:e,alpha:t.a}},reverse:function(t){const e=t.h*ur,r=t.c;return mr({l:t.l,a:Math.cos(e)*r,b:Math.sin(e)*r,alpha:t.alpha})},interpolate:function(t,e,r){return {h:gr(t.h,e.h,r),c:rr(t.c,e.c,r),l:rr(t.l,e.l,r),alpha:rr(t.alpha,e.alpha,r)}}};var br=Object.freeze({__proto__:null,lab:xr,hcl:vr});class wr{constructor(t,e,r,n,i){this.type=t,this.operator=e,this.interpolation=r,this.input=n,this.labels=[],this.outputs=[];for(const[t,e]of i)this.labels.push(t),this.outputs.push(e);}static interpolationFactor(t,e,n,i){let s=0;if("exponential"===t.name)s=_r(e,t.base,n,i);else if("linear"===t.name)s=_r(e,1,n,i);else if("cubic-bezier"===t.name){const a=t.controlPoints;s=new r(a[0],a[1],a[2],a[3]).solve(_r(e,1,n,i));}return s}static parse(t,e){let[r,n,i,...s]=t;if(!Array.isArray(n)||0===n.length)return e.error("Expected an interpolation type expression.",1);if("linear"===n[0])n={name:"linear"};else if("exponential"===n[0]){const t=n[1];if("number"!=typeof t)return e.error("Exponential interpolation requires a numeric base.",1,1);n={name:"exponential",base:t};}else {if("cubic-bezier"!==n[0])return e.error(`Unknown interpolation type ${String(n[0])}`,1,0);{const t=n.slice(1);if(4!==t.length||t.some((t=>"number"!=typeof t||t<0||t>1)))return e.error("Cubic bezier interpolation requires four numeric arguments with values between 0 and 1.",1);n={name:"cubic-bezier",controlPoints:t};}}if(t.length-1<4)return e.error(`Expected at least 4 arguments, but found only ${t.length-1}.`);if((t.length-1)%2!=0)return e.error("Expected an even number of arguments.");if(i=e.parse(i,2,Xt),!i)return null;const a=[];let o=null;"interpolate-hcl"===r||"interpolate-lab"===r?o=Yt:e.expectedType&&"value"!==e.expectedType.kind&&(o=e.expectedType);for(let t=0;t<s.length;t+=2){const r=s[t],n=s[t+1],i=t+3,l=t+4;if("number"!=typeof r)return e.error('Input/output pairs for "interpolate" expressions must be defined using literal numeric values (not computed expressions) for the input values.',i);if(a.length&&a[a.length-1][0]>=r)return e.error('Input/output pairs for "interpolate" expressions must be arranged with input values in strictly ascending order.',i);const u=e.parse(n,l,o);if(!u)return null;o=o||u.type,a.push([r,u]);}return "number"===o.kind||"color"===o.kind||"array"===o.kind&&"number"===o.itemType.kind&&"number"==typeof o.N?new wr(o,r,n,i,a):e.error(`Type ${ne(o)} is not interpolatable.`)}evaluate(t){const e=this.labels,r=this.outputs;if(1===e.length)return r[0].evaluate(t);const n=this.input.evaluate(t);if(n<=e[0])return r[0].evaluate(t);const i=e.length;if(n>=e[i-1])return r[i-1].evaluate(t);const s=tr(e,n),a=wr.interpolationFactor(this.interpolation,n,e[s],e[s+1]),o=r[s].evaluate(t),l=r[s+1].evaluate(t);return "interpolate"===this.operator?nr[this.type.kind.toLowerCase()](o,l,a):"interpolate-hcl"===this.operator?vr.reverse(vr.interpolate(vr.forward(o),vr.forward(l),a)):xr.reverse(xr.interpolate(xr.forward(o),xr.forward(l),a))}eachChild(t){t(this.input);for(const e of this.outputs)t(e);}outputDefined(){return this.outputs.every((t=>t.outputDefined()))}serialize(){let t;t="linear"===this.interpolation.name?["linear"]:"exponential"===this.interpolation.name?1===this.interpolation.base?["linear"]:["exponential",this.interpolation.base]:["cubic-bezier"].concat(this.interpolation.controlPoints);const e=[this.operator,t,this.input.serialize()];for(let t=0;t<this.labels.length;t++)e.push(this.labels[t],this.outputs[t].serialize());return e}}function _r(t,e,r,n){const i=n-r,s=t-r;return 0===i?0:1===e?s/i:(Math.pow(e,s)-1)/(Math.pow(e,i)-1)}class kr{constructor(t,e){this.type=t,this.args=e;}static parse(t,e){if(t.length<2)return e.error("Expectected at least one argument.");let r=null;const n=e.expectedType;n&&"value"!==n.kind&&(r=n);const i=[];for(const n of t.slice(1)){const t=e.parse(n,1+i.length,r,void 0,{typeAnnotation:"omit"});if(!t)return null;r=r||t.type,i.push(t);}const s=n&&i.some((t=>se(n,t.type)));return new kr(s?Wt:r,i)}evaluate(t){let e,r=null,n=0;for(const i of this.args)if(n++,r=i.evaluate(t),r&&r instanceof fe&&!r.available&&(e||(e=r.name),r=null,n===this.args.length&&(r=e)),null!==r)break;return r}eachChild(t){this.args.forEach(t);}outputDefined(){return this.args.every((t=>t.outputDefined()))}serialize(){const t=["coalesce"];return this.eachChild((e=>{t.push(e.serialize());})),t}}class Ar{constructor(t,e){this.type=e.type,this.bindings=[].concat(t),this.result=e;}evaluate(t){return this.result.evaluate(t)}eachChild(t){for(const e of this.bindings)t(e[1]);t(this.result);}static parse(t,e){if(t.length<4)return e.error(`Expected at least 3 arguments, but found ${t.length-1} instead.`);const r=[];for(let n=1;n<t.length-1;n+=2){const i=t[n];if("string"!=typeof i)return e.error(`Expected string, but found ${typeof i} instead.`,n);if(/[^a-zA-Z0-9_]/.test(i))return e.error("Variable names must contain only alphanumeric characters or '_'.",n);const s=e.parse(t[n+1],n+1);if(!s)return null;r.push([i,s]);}const n=e.parse(t[t.length-1],t.length-1,e.expectedType,r);return n?new Ar(r,n):null}outputDefined(){return this.result.outputDefined()}serialize(){const t=["let"];for(const[e,r]of this.bindings)t.push(e,r.serialize());return t.push(this.result.serialize()),t}}class Sr{constructor(t,e,r){this.type=t,this.index=e,this.input=r;}static parse(t,e){if(3!==t.length)return e.error(`Expected 2 arguments, but found ${t.length-1} instead.`);const r=e.parse(t[1],1,Xt),n=e.parse(t[2],2,re(e.expectedType||Wt));return r&&n?new Sr(n.type.itemType,r,n):null}evaluate(t){const e=this.index.evaluate(t),r=this.input.evaluate(t);if(e<0)throw new be(`Array index out of bounds: ${e} < 0.`);if(e>=r.length)throw new be(`Array index out of bounds: ${e} > ${r.length-1}.`);if(e!==Math.floor(e))throw new be(`Array index must be an integer, but found ${e} instead.`);return r[e]}eachChild(t){t(this.index),t(this.input);}outputDefined(){return !1}serialize(){return ["at",this.index.serialize(),this.input.serialize()]}}class Ir{constructor(t,e){this.type=Ht,this.needle=t,this.haystack=e;}static parse(t,e){if(3!==t.length)return e.error(`Expected 2 arguments, but found ${t.length-1} instead.`);const r=e.parse(t[1],1,Wt),n=e.parse(t[2],2,Wt);return r&&n?ae(r.type,[Ht,Kt,Xt,Zt,Wt])?new Ir(r,n):e.error(`Expected first argument to be of type boolean, string, number or null, but found ${ne(r.type)} instead`):null}evaluate(t){const e=this.needle.evaluate(t),r=this.haystack.evaluate(t);if(!r)return !1;if(!oe(e,["boolean","string","number","null"]))throw new be(`Expected first argument to be of type boolean, string, number or null, but found ${ne(ge(e))} instead.`);if(!oe(r,["string","array"]))throw new be(`Expected second argument to be of type array or string, but found ${ne(ge(r))} instead.`);return r.indexOf(e)>=0}eachChild(t){t(this.needle),t(this.haystack);}outputDefined(){return !0}serialize(){return ["in",this.needle.serialize(),this.haystack.serialize()]}}class zr{constructor(t,e,r){this.type=Xt,this.needle=t,this.haystack=e,this.fromIndex=r;}static parse(t,e){if(t.length<=2||t.length>=5)return e.error(`Expected 3 or 4 arguments, but found ${t.length-1} instead.`);const r=e.parse(t[1],1,Wt),n=e.parse(t[2],2,Wt);if(!r||!n)return null;if(!ae(r.type,[Ht,Kt,Xt,Zt,Wt]))return e.error(`Expected first argument to be of type boolean, string, number or null, but found ${ne(r.type)} instead`);if(4===t.length){const i=e.parse(t[3],3,Xt);return i?new zr(r,n,i):null}return new zr(r,n)}evaluate(t){const e=this.needle.evaluate(t),r=this.haystack.evaluate(t);if(!oe(e,["boolean","string","number","null"]))throw new be(`Expected first argument to be of type boolean, string, number or null, but found ${ne(ge(e))} instead.`);if(!oe(r,["string","array"]))throw new be(`Expected second argument to be of type array or string, but found ${ne(ge(r))} instead.`);if(this.fromIndex){const n=this.fromIndex.evaluate(t);return r.indexOf(e,n)}return r.indexOf(e)}eachChild(t){t(this.needle),t(this.haystack),this.fromIndex&&t(this.fromIndex);}outputDefined(){return !1}serialize(){if(null!=this.fromIndex&&void 0!==this.fromIndex){const t=this.fromIndex.serialize();return ["index-of",this.needle.serialize(),this.haystack.serialize(),t]}return ["index-of",this.needle.serialize(),this.haystack.serialize()]}}class Tr{constructor(t,e,r,n,i,s){this.inputType=t,this.type=e,this.input=r,this.cases=n,this.outputs=i,this.otherwise=s;}static parse(t,e){if(t.length<5)return e.error(`Expected at least 4 arguments, but found only ${t.length-1}.`);if(t.length%2!=1)return e.error("Expected an even number of arguments.");let r,n;e.expectedType&&"value"!==e.expectedType.kind&&(n=e.expectedType);const i={},s=[];for(let a=2;a<t.length-1;a+=2){let o=t[a];const l=t[a+1];Array.isArray(o)||(o=[o]);const u=e.concat(a);if(0===o.length)return u.error("Expected at least one branch label.");for(const t of o){if("number"!=typeof t&&"string"!=typeof t)return u.error("Branch labels must be numbers or strings.");if("number"==typeof t&&Math.abs(t)>Number.MAX_SAFE_INTEGER)return u.error(`Branch labels must be integers no larger than ${Number.MAX_SAFE_INTEGER}.`);if("number"==typeof t&&Math.floor(t)!==t)return u.error("Numeric branch labels must be integer values.");if(r){if(u.checkSubtype(r,ge(t)))return null}else r=ge(t);if(void 0!==i[String(t)])return u.error("Branch labels must be unique.");i[String(t)]=s.length;}const c=e.parse(l,a,n);if(!c)return null;n=n||c.type,s.push(c);}const a=e.parse(t[1],1,Wt);if(!a)return null;const o=e.parse(t[t.length-1],t.length-1,n);return o?"value"!==a.type.kind&&e.concat(1).checkSubtype(r,a.type)?null:new Tr(r,n,a,i,s,o):null}evaluate(t){const e=this.input.evaluate(t);return (ge(e)===this.inputType&&this.outputs[this.cases[e]]||this.otherwise).evaluate(t)}eachChild(t){t(this.input),this.outputs.forEach(t),t(this.otherwise);}outputDefined(){return this.outputs.every((t=>t.outputDefined()))&&this.otherwise.outputDefined()}serialize(){const t=["match",this.input.serialize()],e=Object.keys(this.cases).sort(),r=[],n={};for(const t of e){const e=n[this.cases[t]];void 0===e?(n[this.cases[t]]=r.length,r.push([this.cases[t],[t]])):r[e][1].push(t);}const i=t=>"number"===this.inputType.kind?Number(t):t;for(const[e,n]of r)t.push(1===n.length?i(n[0]):n.map(i)),t.push(this.outputs[e].serialize());return t.push(this.otherwise.serialize()),t}}class Mr{constructor(t,e,r){this.type=t,this.branches=e,this.otherwise=r;}static parse(t,e){if(t.length<4)return e.error(`Expected at least 3 arguments, but found only ${t.length-1}.`);if(t.length%2!=0)return e.error("Expected an odd number of arguments.");let r;e.expectedType&&"value"!==e.expectedType.kind&&(r=e.expectedType);const n=[];for(let i=1;i<t.length-1;i+=2){const s=e.parse(t[i],i,Ht);if(!s)return null;const a=e.parse(t[i+1],i+1,r);if(!a)return null;n.push([s,a]),r=r||a.type;}const i=e.parse(t[t.length-1],t.length-1,r);return i?new Mr(r,n,i):null}evaluate(t){for(const[e,r]of this.branches)if(e.evaluate(t))return r.evaluate(t);return this.otherwise.evaluate(t)}eachChild(t){for(const[e,r]of this.branches)t(e),t(r);t(this.otherwise);}outputDefined(){return this.branches.every((([t,e])=>e.outputDefined()))&&this.otherwise.outputDefined()}serialize(){const t=["case"];return this.eachChild((e=>{t.push(e.serialize());})),t}}class Er{constructor(t,e,r,n){this.type=t,this.input=e,this.beginIndex=r,this.endIndex=n;}static parse(t,e){if(t.length<=2||t.length>=5)return e.error(`Expected 3 or 4 arguments, but found ${t.length-1} instead.`);const r=e.parse(t[1],1,Wt),n=e.parse(t[2],2,Xt);if(!r||!n)return null;if(!ae(r.type,[re(Wt),Kt,Wt]))return e.error(`Expected first argument to be of type array or string, but found ${ne(r.type)} instead`);if(4===t.length){const i=e.parse(t[3],3,Xt);return i?new Er(r.type,r,n,i):null}return new Er(r.type,r,n)}evaluate(t){const e=this.input.evaluate(t),r=this.beginIndex.evaluate(t);if(!oe(e,["string","array"]))throw new be(`Expected first argument to be of type array or string, but found ${ne(ge(e))} instead.`);if(this.endIndex){const n=this.endIndex.evaluate(t);return e.slice(r,n)}return e.slice(r)}eachChild(t){t(this.input),t(this.beginIndex),this.endIndex&&t(this.endIndex);}outputDefined(){return !1}serialize(){if(null!=this.endIndex&&void 0!==this.endIndex){const t=this.endIndex.serialize();return ["slice",this.input.serialize(),this.beginIndex.serialize(),t]}return ["slice",this.input.serialize(),this.beginIndex.serialize()]}}function Br(t,e){return "=="===t||"!="===t?"boolean"===e.kind||"string"===e.kind||"number"===e.kind||"null"===e.kind||"value"===e.kind:"string"===e.kind||"number"===e.kind||"value"===e.kind}function Cr(t,e,r,n){return 0===n.compare(e,r)}function Pr(t,e,r){const n="=="!==t&&"!="!==t;return class i{constructor(t,e,r){this.type=Ht,this.lhs=t,this.rhs=e,this.collator=r,this.hasUntypedArgument="value"===t.type.kind||"value"===e.type.kind;}static parse(t,e){if(3!==t.length&&4!==t.length)return e.error("Expected two or three arguments.");const r=t[0];let s=e.parse(t[1],1,Wt);if(!s)return null;if(!Br(r,s.type))return e.concat(1).error(`"${r}" comparisons are not supported for type '${ne(s.type)}'.`);let a=e.parse(t[2],2,Wt);if(!a)return null;if(!Br(r,a.type))return e.concat(2).error(`"${r}" comparisons are not supported for type '${ne(a.type)}'.`);if(s.type.kind!==a.type.kind&&"value"!==s.type.kind&&"value"!==a.type.kind)return e.error(`Cannot compare types '${ne(s.type)}' and '${ne(a.type)}'.`);n&&("value"===s.type.kind&&"value"!==a.type.kind?s=new _e(a.type,[s]):"value"!==s.type.kind&&"value"===a.type.kind&&(a=new _e(s.type,[a])));let o=null;if(4===t.length){if("string"!==s.type.kind&&"string"!==a.type.kind&&"value"!==s.type.kind&&"value"!==a.type.kind)return e.error("Cannot use collator to compare non-string types.");if(o=e.parse(t[3],3,Qt),!o)return null}return new i(s,a,o)}evaluate(i){const s=this.lhs.evaluate(i),a=this.rhs.evaluate(i);if(n&&this.hasUntypedArgument){const e=ge(s),r=ge(a);if(e.kind!==r.kind||"string"!==e.kind&&"number"!==e.kind)throw new be(`Expected arguments for "${t}" to be (string, string) or (number, number), but found (${e.kind}, ${r.kind}) instead.`)}if(this.collator&&!n&&this.hasUntypedArgument){const t=ge(s),r=ge(a);if("string"!==t.kind||"string"!==r.kind)return e(i,s,a)}return this.collator?r(i,s,a,this.collator.evaluate(i)):e(i,s,a)}eachChild(t){t(this.lhs),t(this.rhs),this.collator&&t(this.collator);}outputDefined(){return !0}serialize(){const e=[t];return this.eachChild((t=>{e.push(t.serialize());})),e}}}const Dr=Pr("==",(function(t,e,r){return e===r}),Cr),Vr=Pr("!=",(function(t,e,r){return e!==r}),(function(t,e,r,n){return !Cr(0,e,r,n)})),Lr=Pr("<",(function(t,e,r){return e<r}),(function(t,e,r,n){return n.compare(e,r)<0})),Fr=Pr(">",(function(t,e,r){return e>r}),(function(t,e,r,n){return n.compare(e,r)>0})),Rr=Pr("<=",(function(t,e,r){return e<=r}),(function(t,e,r,n){return n.compare(e,r)<=0})),Ur=Pr(">=",(function(t,e,r){return e>=r}),(function(t,e,r,n){return n.compare(e,r)>=0}));class $r{constructor(t,e,r,n,i){this.type=Kt,this.number=t,this.locale=e,this.currency=r,this.minFractionDigits=n,this.maxFractionDigits=i;}static parse(t,e){if(3!==t.length)return e.error("Expected two arguments.");const r=e.parse(t[1],1,Xt);if(!r)return null;const n=t[2];if("object"!=typeof n||Array.isArray(n))return e.error("NumberFormat options argument must be an object.");let i=null;if(n.locale&&(i=e.parse(n.locale,1,Kt),!i))return null;let s=null;if(n.currency&&(s=e.parse(n.currency,1,Kt),!s))return null;let a=null;if(n["min-fraction-digits"]&&(a=e.parse(n["min-fraction-digits"],1,Xt),!a))return null;let o=null;return n["max-fraction-digits"]&&(o=e.parse(n["max-fraction-digits"],1,Xt),!o)?null:new $r(r,i,s,a,o)}evaluate(t){return new Intl.NumberFormat(this.locale?this.locale.evaluate(t):[],{style:this.currency?"currency":"decimal",currency:this.currency?this.currency.evaluate(t):void 0,minimumFractionDigits:this.minFractionDigits?this.minFractionDigits.evaluate(t):void 0,maximumFractionDigits:this.maxFractionDigits?this.maxFractionDigits.evaluate(t):void 0}).format(this.number.evaluate(t))}eachChild(t){t(this.number),this.locale&&t(this.locale),this.currency&&t(this.currency),this.minFractionDigits&&t(this.minFractionDigits),this.maxFractionDigits&&t(this.maxFractionDigits);}outputDefined(){return !1}serialize(){const t={};return this.locale&&(t.locale=this.locale.serialize()),this.currency&&(t.currency=this.currency.serialize()),this.minFractionDigits&&(t["min-fraction-digits"]=this.minFractionDigits.serialize()),this.maxFractionDigits&&(t["max-fraction-digits"]=this.maxFractionDigits.serialize()),["number-format",this.number.serialize(),t]}}class Or{constructor(t){this.type=Xt,this.input=t;}static parse(t,e){if(2!==t.length)return e.error(`Expected 1 argument, but found ${t.length-1} instead.`);const r=e.parse(t[1],1);return r?"array"!==r.type.kind&&"string"!==r.type.kind&&"value"!==r.type.kind?e.error(`Expected argument of type string or array, but found ${ne(r.type)} instead.`):new Or(r):null}evaluate(t){const e=this.input.evaluate(t);if("string"==typeof e)return e.length;if(Array.isArray(e))return e.length;throw new be(`Expected value to be of type string or array, but found ${ne(ge(e))} instead.`)}eachChild(t){t(this.input);}outputDefined(){return !1}serialize(){const t=["length"];return this.eachChild((e=>{t.push(e.serialize());})),t}}const qr={"==":Dr,"!=":Vr,">":Fr,"<":Lr,">=":Ur,"<=":Rr,array:_e,at:Sr,boolean:_e,case:Mr,coalesce:kr,collator:Ee,format:ke,image:Ae,in:Ir,"index-of":zr,interpolate:wr,"interpolate-hcl":wr,"interpolate-lab":wr,length:Or,let:Ar,literal:ve,match:Tr,number:_e,"number-format":$r,object:_e,slice:Er,step:er,string:_e,"to-boolean":Ie,"to-color":Ie,"to-number":Ie,"to-string":Ie,var:Je,within:Xe};function Nr(t,[e,r,n,i]){e=e.evaluate(t),r=r.evaluate(t),n=n.evaluate(t);const s=i?i.evaluate(t):1,a=ye(e,r,n,s);if(a)throw new be(a);return new ce(e/255*s,r/255*s,n/255*s,s)}function jr(t,e){return t in e}function Gr(t,e){const r=e[t];return void 0===r?null:r}function Zr(t){return {type:t}}function Xr(t){return {result:"success",value:t}}function Kr(t){return {result:"error",value:t}}function Hr(t){return "data-driven"===t["property-type"]||"cross-faded-data-driven"===t["property-type"]}function Yr(t){return !!t.expression&&t.expression.parameters.indexOf("zoom")>-1}function Jr(t){return !!t.expression&&t.expression.interpolated}function Wr(t){return t instanceof Number?"number":t instanceof String?"string":t instanceof Boolean?"boolean":Array.isArray(t)?"array":null===t?"null":typeof t}function Qr(t){return "object"==typeof t&&null!==t&&!Array.isArray(t)}function tn(t){return t}function en(t,e){const r="color"===e.type,n=t.stops&&"object"==typeof t.stops[0][0],i=n||!(n||void 0!==t.property),s=t.type||(Jr(e)?"exponential":"interval");if(r&&((t=Ot({},t)).stops&&(t.stops=t.stops.map((t=>[t[0],ce.parse(t[1])]))),t.default=ce.parse(t.default?t.default:e.default)),t.colorSpace&&"rgb"!==t.colorSpace&&!br[t.colorSpace])throw new Error(`Unknown color space: ${t.colorSpace}`);let a,o,l;if("exponential"===s)a=an;else if("interval"===s)a=sn;else if("categorical"===s){a=nn,o=Object.create(null);for(const e of t.stops)o[e[0]]=e[1];l=typeof t.stops[0][0];}else {if("identity"!==s)throw new Error(`Unknown function type "${s}"`);a=on;}if(n){const r={},n=[];for(let e=0;e<t.stops.length;e++){const i=t.stops[e],s=i[0].zoom;void 0===r[s]&&(r[s]={zoom:s,type:t.type,property:t.property,default:t.default,stops:[]},n.push(s)),r[s].stops.push([i[0].value,i[1]]);}const i=[];for(const t of n)i.push([r[t].zoom,en(r[t],e)]);const s={name:"linear"};return {kind:"composite",interpolationType:s,interpolationFactor:wr.interpolationFactor.bind(void 0,s),zoomStops:i.map((t=>t[0])),evaluate:({zoom:r},n)=>an({stops:i,base:t.base},e,r).evaluate(r,n)}}if(i){const r="exponential"===s?{name:"exponential",base:void 0!==t.base?t.base:1}:null;return {kind:"camera",interpolationType:r,interpolationFactor:wr.interpolationFactor.bind(void 0,r),zoomStops:t.stops.map((t=>t[0])),evaluate:({zoom:r})=>a(t,e,r,o,l)}}return {kind:"source",evaluate(r,n){const i=n&&n.properties?n.properties[t.property]:void 0;return void 0===i?rn(t.default,e.default):a(t,e,i,o,l)}}}function rn(t,e,r){return void 0!==t?t:void 0!==e?e:void 0!==r?r:void 0}function nn(t,e,r,n,i){return rn(typeof r===i?n[r]:void 0,t.default,e.default)}function sn(t,e,r){if("number"!==Wr(r))return rn(t.default,e.default);const n=t.stops.length;if(1===n)return t.stops[0][1];if(r<=t.stops[0][0])return t.stops[0][1];if(r>=t.stops[n-1][0])return t.stops[n-1][1];const i=tr(t.stops.map((t=>t[0])),r);return t.stops[i][1]}function an(t,e,r){const n=void 0!==t.base?t.base:1;if("number"!==Wr(r))return rn(t.default,e.default);const i=t.stops.length;if(1===i)return t.stops[0][1];if(r<=t.stops[0][0])return t.stops[0][1];if(r>=t.stops[i-1][0])return t.stops[i-1][1];const s=tr(t.stops.map((t=>t[0])),r),a=function(t,e,r,n){const i=n-r,s=t-r;return 0===i?0:1===e?s/i:(Math.pow(e,s)-1)/(Math.pow(e,i)-1)}(r,n,t.stops[s][0],t.stops[s+1][0]),o=t.stops[s][1],l=t.stops[s+1][1];let u=nr[e.type]||tn;if(t.colorSpace&&"rgb"!==t.colorSpace){const e=br[t.colorSpace];u=(t,r)=>e.reverse(e.interpolate(e.forward(t),e.forward(r),a));}return "function"==typeof o.evaluate?{evaluate(...t){const e=o.evaluate.apply(void 0,t),r=l.evaluate.apply(void 0,t);if(void 0!==e&&void 0!==r)return u(e,r,a)}}:u(o,l,a)}function on(t,e,r){return "color"===e.type?r=ce.parse(r):"formatted"===e.type?r=de.fromString(r.toString()):"resolvedImage"===e.type?r=fe.fromString(r.toString()):Wr(r)===e.type||"enum"===e.type&&e.values[r]||(r=void 0),rn(r,t.default,e.default)}Me.register(qr,{error:[{kind:"error"},[Kt],(t,[e])=>{throw new be(e.evaluate(t))}],typeof:[Kt,[Wt],(t,[e])=>ne(ge(e.evaluate(t)))],"to-rgba":[re(Xt,4),[Yt],(t,[e])=>e.evaluate(t).toArray()],rgb:[Yt,[Xt,Xt,Xt],Nr],rgba:[Yt,[Xt,Xt,Xt,Xt],Nr],has:{type:Ht,overloads:[[[Kt],(t,[e])=>jr(e.evaluate(t),t.properties())],[[Kt,Jt],(t,[e,r])=>jr(e.evaluate(t),r.evaluate(t))]]},get:{type:Wt,overloads:[[[Kt],(t,[e])=>Gr(e.evaluate(t),t.properties())],[[Kt,Jt],(t,[e,r])=>Gr(e.evaluate(t),r.evaluate(t))]]},"feature-state":[Wt,[Kt],(t,[e])=>Gr(e.evaluate(t),t.featureState||{})],properties:[Jt,[],t=>t.properties()],"geometry-type":[Kt,[],t=>t.geometryType()],id:[Wt,[],t=>t.id()],zoom:[Xt,[],t=>t.globals.zoom],"heatmap-density":[Xt,[],t=>t.globals.heatmapDensity||0],"line-progress":[Xt,[],t=>t.globals.lineProgress||0],"sky-radial-progress":[Xt,[],t=>t.globals.skyRadialProgress||0],accumulated:[Wt,[],t=>void 0===t.globals.accumulated?null:t.globals.accumulated],"+":[Xt,Zr(Xt),(t,e)=>{let r=0;for(const n of e)r+=n.evaluate(t);return r}],"*":[Xt,Zr(Xt),(t,e)=>{let r=1;for(const n of e)r*=n.evaluate(t);return r}],"-":{type:Xt,overloads:[[[Xt,Xt],(t,[e,r])=>e.evaluate(t)-r.evaluate(t)],[[Xt],(t,[e])=>-e.evaluate(t)]]},"/":[Xt,[Xt,Xt],(t,[e,r])=>e.evaluate(t)/r.evaluate(t)],"%":[Xt,[Xt,Xt],(t,[e,r])=>e.evaluate(t)%r.evaluate(t)],ln2:[Xt,[],()=>Math.LN2],pi:[Xt,[],()=>Math.PI],e:[Xt,[],()=>Math.E],"^":[Xt,[Xt,Xt],(t,[e,r])=>Math.pow(e.evaluate(t),r.evaluate(t))],sqrt:[Xt,[Xt],(t,[e])=>Math.sqrt(e.evaluate(t))],log10:[Xt,[Xt],(t,[e])=>Math.log(e.evaluate(t))/Math.LN10],ln:[Xt,[Xt],(t,[e])=>Math.log(e.evaluate(t))],log2:[Xt,[Xt],(t,[e])=>Math.log(e.evaluate(t))/Math.LN2],sin:[Xt,[Xt],(t,[e])=>Math.sin(e.evaluate(t))],cos:[Xt,[Xt],(t,[e])=>Math.cos(e.evaluate(t))],tan:[Xt,[Xt],(t,[e])=>Math.tan(e.evaluate(t))],asin:[Xt,[Xt],(t,[e])=>Math.asin(e.evaluate(t))],acos:[Xt,[Xt],(t,[e])=>Math.acos(e.evaluate(t))],atan:[Xt,[Xt],(t,[e])=>Math.atan(e.evaluate(t))],min:[Xt,Zr(Xt),(t,e)=>Math.min(...e.map((e=>e.evaluate(t))))],max:[Xt,Zr(Xt),(t,e)=>Math.max(...e.map((e=>e.evaluate(t))))],abs:[Xt,[Xt],(t,[e])=>Math.abs(e.evaluate(t))],round:[Xt,[Xt],(t,[e])=>{const r=e.evaluate(t);return r<0?-Math.round(-r):Math.round(r)}],floor:[Xt,[Xt],(t,[e])=>Math.floor(e.evaluate(t))],ceil:[Xt,[Xt],(t,[e])=>Math.ceil(e.evaluate(t))],"filter-==":[Ht,[Kt,Wt],(t,[e,r])=>t.properties()[e.value]===r.value],"filter-id-==":[Ht,[Wt],(t,[e])=>t.id()===e.value],"filter-type-==":[Ht,[Kt],(t,[e])=>t.geometryType()===e.value],"filter-<":[Ht,[Kt,Wt],(t,[e,r])=>{const n=t.properties()[e.value],i=r.value;return typeof n==typeof i&&n<i}],"filter-id-<":[Ht,[Wt],(t,[e])=>{const r=t.id(),n=e.value;return typeof r==typeof n&&r<n}],"filter->":[Ht,[Kt,Wt],(t,[e,r])=>{const n=t.properties()[e.value],i=r.value;return typeof n==typeof i&&n>i}],"filter-id->":[Ht,[Wt],(t,[e])=>{const r=t.id(),n=e.value;return typeof r==typeof n&&r>n}],"filter-<=":[Ht,[Kt,Wt],(t,[e,r])=>{const n=t.properties()[e.value],i=r.value;return typeof n==typeof i&&n<=i}],"filter-id-<=":[Ht,[Wt],(t,[e])=>{const r=t.id(),n=e.value;return typeof r==typeof n&&r<=n}],"filter->=":[Ht,[Kt,Wt],(t,[e,r])=>{const n=t.properties()[e.value],i=r.value;return typeof n==typeof i&&n>=i}],"filter-id->=":[Ht,[Wt],(t,[e])=>{const r=t.id(),n=e.value;return typeof r==typeof n&&r>=n}],"filter-has":[Ht,[Wt],(t,[e])=>e.value in t.properties()],"filter-has-id":[Ht,[],t=>null!==t.id()&&void 0!==t.id()],"filter-type-in":[Ht,[re(Kt)],(t,[e])=>e.value.indexOf(t.geometryType())>=0],"filter-id-in":[Ht,[re(Wt)],(t,[e])=>e.value.indexOf(t.id())>=0],"filter-in-small":[Ht,[Kt,re(Wt)],(t,[e,r])=>r.value.indexOf(t.properties()[e.value])>=0],"filter-in-large":[Ht,[Kt,re(Wt)],(t,[e,r])=>function(t,e,r,n){for(;r<=n;){const i=r+n>>1;if(e[i]===t)return !0;e[i]>t?n=i-1:r=i+1;}return !1}(t.properties()[e.value],r.value,0,r.value.length-1)],all:{type:Ht,overloads:[[[Ht,Ht],(t,[e,r])=>e.evaluate(t)&&r.evaluate(t)],[Zr(Ht),(t,e)=>{for(const r of e)if(!r.evaluate(t))return !1;return !0}]]},any:{type:Ht,overloads:[[[Ht,Ht],(t,[e,r])=>e.evaluate(t)||r.evaluate(t)],[Zr(Ht),(t,e)=>{for(const r of e)if(r.evaluate(t))return !0;return !1}]]},"!":[Ht,[Ht],(t,[e])=>!e.evaluate(t)],"is-supported-script":[Ht,[Kt],(t,[e])=>{const r=t.globals&&t.globals.isSupportedScript;return !r||r(e.evaluate(t))}],upcase:[Kt,[Kt],(t,[e])=>e.evaluate(t).toUpperCase()],downcase:[Kt,[Kt],(t,[e])=>e.evaluate(t).toLowerCase()],concat:[Kt,Zr(Wt),(t,e)=>e.map((e=>xe(e.evaluate(t)))).join("")],"resolved-locale":[Kt,[Qt],(t,[e])=>e.evaluate(t).resolvedLocale()]});class ln{constructor(t,e){this.expression=t,this._warningHistory={},this._evaluator=new Te,this._defaultValue=e?function(t){return "color"===t.type&&Qr(t.default)?new ce(0,0,0,0):"color"===t.type?ce.parse(t.default)||null:void 0===t.default?null:t.default}(e):null,this._enumValues=e&&"enum"===e.type?e.values:null;}evaluateWithoutErrorHandling(t,e,r,n,i,s){return this._evaluator.globals=t,this._evaluator.feature=e,this._evaluator.featureState=r,this._evaluator.canonical=n,this._evaluator.availableImages=i||null,this._evaluator.formattedSection=s,this.expression.evaluate(this._evaluator)}evaluate(t,e,r,n,i,s){this._evaluator.globals=t,this._evaluator.feature=e||null,this._evaluator.featureState=r||null,this._evaluator.canonical=n,this._evaluator.availableImages=i||null,this._evaluator.formattedSection=s||null;try{const t=this.expression.evaluate(this._evaluator);if(null==t||"number"==typeof t&&t!=t)return this._defaultValue;if(this._enumValues&&!(t in this._enumValues))throw new be(`Expected value to be one of ${Object.keys(this._enumValues).map((t=>JSON.stringify(t))).join(", ")}, but found ${JSON.stringify(t)} instead.`);return t}catch(t){return this._warningHistory[t.message]||(this._warningHistory[t.message]=!0,"undefined"!=typeof console&&console.warn(t.message)),this._defaultValue}}}function un(t){return Array.isArray(t)&&t.length>0&&"string"==typeof t[0]&&t[0]in qr}function cn(t,e){const r=new We(qr,[],e?function(t){const e={color:Yt,string:Kt,number:Xt,enum:Kt,boolean:Ht,formatted:te,resolvedImage:ee};return "array"===t.type?re(e[t.value]||Wt,t.length):e[t.type]}(e):void 0),n=r.parse(t,void 0,void 0,void 0,e&&"string"===e.type?{typeAnnotation:"coerce"}:void 0);return n?Xr(new ln(n,e)):Kr(r.errors)}class hn{constructor(t,e){this.kind=t,this._styleExpression=e,this.isStateDependent="constant"!==t&&!He(e.expression);}evaluateWithoutErrorHandling(t,e,r,n,i,s){return this._styleExpression.evaluateWithoutErrorHandling(t,e,r,n,i,s)}evaluate(t,e,r,n,i,s){return this._styleExpression.evaluate(t,e,r,n,i,s)}}class pn{constructor(t,e,r,n){this.kind=t,this.zoomStops=r,this._styleExpression=e,this.isStateDependent="camera"!==t&&!He(e.expression),this.interpolationType=n;}evaluateWithoutErrorHandling(t,e,r,n,i,s){return this._styleExpression.evaluateWithoutErrorHandling(t,e,r,n,i,s)}evaluate(t,e,r,n,i,s){return this._styleExpression.evaluate(t,e,r,n,i,s)}interpolationFactor(t,e,r){return this.interpolationType?wr.interpolationFactor(this.interpolationType,t,e,r):0}}function dn(t,e){if("error"===(t=cn(t,e)).result)return t;const r=t.value.expression,n=Ke(r);if(!n&&!Hr(e))return Kr([new jt("","data expressions not supported")]);const i=Ye(r,["zoom"]);if(!i&&!Yr(e))return Kr([new jt("","zoom expressions not supported")]);const s=yn(r);return s||i?s instanceof jt?Kr([s]):s instanceof wr&&!Jr(e)?Kr([new jt("",'"interpolate" expressions cannot be used with this property')]):Xr(s?new pn(n?"camera":"composite",t.value,s.labels,s instanceof wr?s.interpolation:void 0):new hn(n?"constant":"source",t.value)):Kr([new jt("",'"zoom" expression may only be used as input to a top-level "step" or "interpolate" expression.')])}class fn{constructor(t,e){this._parameters=t,this._specification=e,Ot(this,en(this._parameters,this._specification));}static deserialize(t){return new fn(t._parameters,t._specification)}static serialize(t){return {_parameters:t._parameters,_specification:t._specification}}}function yn(t){let e=null;if(t instanceof Ar)e=yn(t.result);else if(t instanceof kr){for(const r of t.args)if(e=yn(r),e)break}else (t instanceof er||t instanceof wr)&&t.input instanceof Me&&"zoom"===t.input.name&&(e=t);return e instanceof jt||t.eachChild((t=>{const r=yn(t);r instanceof jt?e=r:!e&&r?e=new jt("",'"zoom" expression may only be used as input to a top-level "step" or "interpolate" expression.'):e&&r&&e!==r&&(e=new jt("",'Only one zoom-based "step" or "interpolate" subexpression may be used in an expression.'));})),e}function mn(t){const e=t.key,r=t.value,n=t.valueSpec||{},i=t.objectElementValidators||{},s=t.style,a=t.styleSpec;let o=[];const l=Wr(r);if("object"!==l)return [new Ut(e,r,`object expected, ${l} found`)];for(const t in r){const l=t.split(".")[0],u=n[l]||n["*"];let c;if(i[l])c=i[l];else if(n[l])c=Gn;else if(i["*"])c=i["*"];else {if(!n["*"]){o.push(new Ut(e,r[t],`unknown property "${t}"`));continue}c=Gn;}o=o.concat(c({key:(e?`${e}.`:e)+t,value:r[t],valueSpec:u,style:s,styleSpec:a,object:r,objectKey:t},r));}for(const t in n)i[t]||n[t].required&&void 0===n[t].default&&void 0===r[t]&&o.push(new Ut(e,r,`missing required property "${t}"`));return o}function gn(t){const e=t.value,r=t.valueSpec,n=t.style,i=t.styleSpec,s=t.key,a=t.arrayElementValidator||Gn;if("array"!==Wr(e))return [new Ut(s,e,`array expected, ${Wr(e)} found`)];if(r.length&&e.length!==r.length)return [new Ut(s,e,`array length ${r.length} expected, length ${e.length} found`)];if(r["min-length"]&&e.length<r["min-length"])return [new Ut(s,e,`array length at least ${r["min-length"]} expected, length ${e.length} found`)];let o={type:r.value,values:r.values,minimum:r.minimum,maximum:r.maximum};i.$version<7&&(o.function=r.function),"object"===Wr(r.value)&&(o=r.value);let l=[];for(let t=0;t<e.length;t++)l=l.concat(a({array:e,arrayIndex:t,value:e[t],valueSpec:o,style:n,styleSpec:i,key:`${s}[${t}]`}));return l}function xn(t){const e=t.key,r=t.value,n=t.valueSpec;let i=Wr(r);if("number"===i&&r!=r&&(i="NaN"),"number"!==i)return [new Ut(e,r,`number expected, ${i} found`)];if("minimum"in n){let i=n.minimum;if("array"===Wr(n.minimum)&&(i=n.minimum[t.arrayIndex]),r<i)return [new Ut(e,r,`${r} is less than the minimum value ${i}`)]}if("maximum"in n){let i=n.maximum;if("array"===Wr(n.maximum)&&(i=n.maximum[t.arrayIndex]),r>i)return [new Ut(e,r,`${r} is greater than the maximum value ${i}`)]}return []}function vn(t){const e=t.valueSpec,r=qt(t.value.type);let n,i,s,a={};const o="categorical"!==r&&void 0===t.value.property,l=!o,u="array"===Wr(t.value.stops)&&"array"===Wr(t.value.stops[0])&&"object"===Wr(t.value.stops[0][0]),c=mn({key:t.key,value:t.value,valueSpec:t.styleSpec.function,style:t.style,styleSpec:t.styleSpec,objectElementValidators:{stops:function(t){if("identity"===r)return [new Ut(t.key,t.value,'identity function may not have a "stops" property')];let e=[];const n=t.value;return e=e.concat(gn({key:t.key,value:n,valueSpec:t.valueSpec,style:t.style,styleSpec:t.styleSpec,arrayElementValidator:h})),"array"===Wr(n)&&0===n.length&&e.push(new Ut(t.key,n,"array must have at least one stop")),e},default:function(t){return Gn({key:t.key,value:t.value,valueSpec:e,style:t.style,styleSpec:t.styleSpec})}}});return "identity"===r&&o&&c.push(new Ut(t.key,t.value,'missing required property "property"')),"identity"===r||t.value.stops||c.push(new Ut(t.key,t.value,'missing required property "stops"')),"exponential"===r&&t.valueSpec.expression&&!Jr(t.valueSpec)&&c.push(new Ut(t.key,t.value,"exponential functions not supported")),t.styleSpec.$version>=8&&(l&&!Hr(t.valueSpec)?c.push(new Ut(t.key,t.value,"property functions not supported")):o&&!Yr(t.valueSpec)&&c.push(new Ut(t.key,t.value,"zoom functions not supported"))),"categorical"!==r&&!u||void 0!==t.value.property||c.push(new Ut(t.key,t.value,'"property" property is required')),c;function h(t){let r=[];const n=t.value,o=t.key;if("array"!==Wr(n))return [new Ut(o,n,`array expected, ${Wr(n)} found`)];if(2!==n.length)return [new Ut(o,n,`array length 2 expected, length ${n.length} found`)];if(u){if("object"!==Wr(n[0]))return [new Ut(o,n,`object expected, ${Wr(n[0])} found`)];if(void 0===n[0].zoom)return [new Ut(o,n,"object stop key must have zoom")];if(void 0===n[0].value)return [new Ut(o,n,"object stop key must have value")];if(s&&s>qt(n[0].zoom))return [new Ut(o,n[0].zoom,"stop zoom values must appear in ascending order")];qt(n[0].zoom)!==s&&(s=qt(n[0].zoom),i=void 0,a={}),r=r.concat(mn({key:`${o}[0]`,value:n[0],valueSpec:{zoom:{}},style:t.style,styleSpec:t.styleSpec,objectElementValidators:{zoom:xn,value:p}}));}else r=r.concat(p({key:`${o}[0]`,value:n[0],valueSpec:{},style:t.style,styleSpec:t.styleSpec},n));return un(Nt(n[1]))?r.concat([new Ut(`${o}[1]`,n[1],"expressions are not allowed in function stops.")]):r.concat(Gn({key:`${o}[1]`,value:n[1],valueSpec:e,style:t.style,styleSpec:t.styleSpec}))}function p(t,s){const o=Wr(t.value),l=qt(t.value),u=null!==t.value?t.value:s;if(n){if(o!==n)return [new Ut(t.key,u,`${o} stop domain type must match previous stop domain type ${n}`)]}else n=o;if("number"!==o&&"string"!==o&&"boolean"!==o)return [new Ut(t.key,u,"stop domain value must be a number, string, or boolean")];if("number"!==o&&"categorical"!==r){let n=`number expected, ${o} found`;return Hr(e)&&void 0===r&&(n+='\nIf you intended to use a categorical function, specify `"type": "categorical"`.'),[new Ut(t.key,u,n)]}return "categorical"!==r||"number"!==o||isFinite(l)&&Math.floor(l)===l?"categorical"!==r&&"number"===o&&void 0!==i&&l<i?[new Ut(t.key,u,"stop domain values must appear in ascending order")]:(i=l,"categorical"===r&&l in a?[new Ut(t.key,u,"stop domain values must be unique")]:(a[l]=!0,[])):[new Ut(t.key,u,`integer expected, found ${l}`)]}}function bn(t){const e=("property"===t.expressionContext?dn:cn)(Nt(t.value),t.valueSpec);if("error"===e.result)return e.value.map((e=>new Ut(`${t.key}${e.key}`,t.value,e.message)));const r=e.value.expression||e.value._styleExpression.expression;if("property"===t.expressionContext&&"text-font"===t.propertyKey&&!r.outputDefined())return [new Ut(t.key,t.value,`Invalid data expression for "${t.propertyKey}". Output values must be contained as literals within the expression.`)];if("property"===t.expressionContext&&"layout"===t.propertyType&&!He(r))return [new Ut(t.key,t.value,'"feature-state" data expressions are not supported with layout properties.')];if("filter"===t.expressionContext&&!He(r))return [new Ut(t.key,t.value,'"feature-state" data expressions are not supported with filters.')];if(t.expressionContext&&0===t.expressionContext.indexOf("cluster")){if(!Ye(r,["zoom","feature-state"]))return [new Ut(t.key,t.value,'"zoom" and "feature-state" expressions are not supported with cluster properties.')];if("cluster-initial"===t.expressionContext&&!Ke(r))return [new Ut(t.key,t.value,"Feature data expressions are not supported with initial expression part of cluster properties.")]}return []}function wn(t){const e=t.key,r=t.value,n=t.valueSpec,i=[];return Array.isArray(n.values)?-1===n.values.indexOf(qt(r))&&i.push(new Ut(e,r,`expected one of [${n.values.join(", ")}], ${JSON.stringify(r)} found`)):-1===Object.keys(n.values).indexOf(qt(r))&&i.push(new Ut(e,r,`expected one of [${Object.keys(n.values).join(", ")}], ${JSON.stringify(r)} found`)),i}function _n(t){if(!0===t||!1===t)return !0;if(!Array.isArray(t)||0===t.length)return !1;switch(t[0]){case"has":return t.length>=2&&"$id"!==t[1]&&"$type"!==t[1];case"in":return t.length>=3&&("string"!=typeof t[1]||Array.isArray(t[2]));case"!in":case"!has":case"none":return !1;case"==":case"!=":case">":case">=":case"<":case"<=":return 3!==t.length||Array.isArray(t[1])||Array.isArray(t[2]);case"any":case"all":for(const e of t.slice(1))if(!_n(e)&&"boolean"!=typeof e)return !1;return !0;default:return !0}}const kn={type:"boolean",default:!1,transition:!1,"property-type":"data-driven",expression:{interpolated:!1,parameters:["zoom","feature"]}};function An(t){if(null==t)return {filter:()=>!0,needGeometry:!1};_n(t)||(t=zn(t));const e=cn(t,kn);if("error"===e.result)throw new Error(e.value.map((t=>`${t.key}: ${t.message}`)).join(", "));return {filter:(t,r,n)=>e.value.evaluate(t,r,{},n),needGeometry:In(t)}}function Sn(t,e){return t<e?-1:t>e?1:0}function In(t){if(!Array.isArray(t))return !1;if("within"===t[0])return !0;for(let e=1;e<t.length;e++)if(In(t[e]))return !0;return !1}function zn(t){if(!t)return !0;const e=t[0];return t.length<=1?"any"!==e:"=="===e?Tn(t[1],t[2],"=="):"!="===e?Bn(Tn(t[1],t[2],"==")):"<"===e||">"===e||"<="===e||">="===e?Tn(t[1],t[2],e):"any"===e?(r=t.slice(1),["any"].concat(r.map(zn))):"all"===e?["all"].concat(t.slice(1).map(zn)):"none"===e?["all"].concat(t.slice(1).map(zn).map(Bn)):"in"===e?Mn(t[1],t.slice(2)):"!in"===e?Bn(Mn(t[1],t.slice(2))):"has"===e?En(t[1]):"!has"===e?Bn(En(t[1])):"within"!==e||t;var r;}function Tn(t,e,r){switch(t){case"$type":return [`filter-type-${r}`,e];case"$id":return [`filter-id-${r}`,e];default:return [`filter-${r}`,t,e]}}function Mn(t,e){if(0===e.length)return !1;switch(t){case"$type":return ["filter-type-in",["literal",e]];case"$id":return ["filter-id-in",["literal",e]];default:return e.length>200&&!e.some((t=>typeof t!=typeof e[0]))?["filter-in-large",t,["literal",e.sort(Sn)]]:["filter-in-small",t,["literal",e]]}}function En(t){switch(t){case"$type":return !0;case"$id":return ["filter-has-id"];default:return ["filter-has",t]}}function Bn(t){return ["!",t]}function Cn(t){return _n(Nt(t.value))?bn(Ot({},t,{expressionContext:"filter",valueSpec:{value:"boolean"}})):Pn(t)}function Pn(t){const e=t.value,r=t.key;if("array"!==Wr(e))return [new Ut(r,e,`array expected, ${Wr(e)} found`)];const n=t.styleSpec;let i,s=[];if(e.length<1)return [new Ut(r,e,"filter array must have at least 1 element")];switch(s=s.concat(wn({key:`${r}[0]`,value:e[0],valueSpec:n.filter_operator,style:t.style,styleSpec:t.styleSpec})),qt(e[0])){case"<":case"<=":case">":case">=":e.length>=2&&"$type"===qt(e[1])&&s.push(new Ut(r,e,`"$type" cannot be use with operator "${e[0]}"`));case"==":case"!=":3!==e.length&&s.push(new Ut(r,e,`filter array for operator "${e[0]}" must have 3 elements`));case"in":case"!in":e.length>=2&&(i=Wr(e[1]),"string"!==i&&s.push(new Ut(`${r}[1]`,e[1],`string expected, ${i} found`)));for(let a=2;a<e.length;a++)i=Wr(e[a]),"$type"===qt(e[1])?s=s.concat(wn({key:`${r}[${a}]`,value:e[a],valueSpec:n.geometry_type,style:t.style,styleSpec:t.styleSpec})):"string"!==i&&"number"!==i&&"boolean"!==i&&s.push(new Ut(`${r}[${a}]`,e[a],`string, number, or boolean expected, ${i} found`));break;case"any":case"all":case"none":for(let n=1;n<e.length;n++)s=s.concat(Pn({key:`${r}[${n}]`,value:e[n],style:t.style,styleSpec:t.styleSpec}));break;case"has":case"!has":i=Wr(e[1]),2!==e.length?s.push(new Ut(r,e,`filter array for "${e[0]}" operator must have 2 elements`)):"string"!==i&&s.push(new Ut(`${r}[1]`,e[1],`string expected, ${i} found`));break;case"within":i=Wr(e[1]),2!==e.length?s.push(new Ut(r,e,`filter array for "${e[0]}" operator must have 2 elements`)):"object"!==i&&s.push(new Ut(`${r}[1]`,e[1],`object expected, ${i} found`));}return s}function Dn(t,e){const r=t.key,n=t.style,i=t.styleSpec,s=t.value,a=t.objectKey,o=i[`${e}_${t.layerType}`];if(!o)return [];const l=a.match(/^(.*)-transition$/);if("paint"===e&&l&&o[l[1]]&&o[l[1]].transition)return Gn({key:r,value:s,valueSpec:i.transition,style:n,styleSpec:i});const u=t.valueSpec||o[a];if(!u)return [new Ut(r,s,`unknown property "${a}"`)];let c;if("string"===Wr(s)&&Hr(u)&&!u.tokens&&(c=/^{([^}]+)}$/.exec(s)))return [new Ut(r,s,`"${a}" does not support interpolation syntax\nUse an identity property function instead: \`{ "type": "identity", "property": ${JSON.stringify(c[1])} }\`.`)];const h=[];return "symbol"===t.layerType&&("text-field"===a&&n&&!n.glyphs&&h.push(new Ut(r,s,'use of "text-field" requires a style "glyphs" property')),"text-font"===a&&Qr(Nt(s))&&"identity"===qt(s.type)&&h.push(new Ut(r,s,'"text-font" does not support identity functions'))),h.concat(Gn({key:t.key,value:s,valueSpec:u,style:n,styleSpec:i,expressionContext:"property",propertyType:e,propertyKey:a}))}function Vn(t){return Dn(t,"paint")}function Ln(t){return Dn(t,"layout")}function Fn(t){let e=[];const r=t.value,n=t.key,i=t.style,s=t.styleSpec;r.type||r.ref||e.push(new Ut(n,r,'either "type" or "ref" is required'));let a=qt(r.type);const o=qt(r.ref);if(r.id){const s=qt(r.id);for(let a=0;a<t.arrayIndex;a++){const t=i.layers[a];qt(t.id)===s&&e.push(new Ut(n,r.id,`duplicate layer id "${r.id}", previously used at line ${t.id.__line__}`));}}if("ref"in r){let t;["type","source","source-layer","filter","layout"].forEach((t=>{t in r&&e.push(new Ut(n,r[t],`"${t}" is prohibited for ref layers`));})),i.layers.forEach((e=>{qt(e.id)===o&&(t=e);})),t?t.ref?e.push(new Ut(n,r.ref,"ref cannot reference another ref layer")):a=qt(t.type):e.push(new Ut(n,r.ref,`ref layer "${o}" not found`));}else if("background"!==a&&"sky"!==a)if(r.source){const t=i.sources&&i.sources[r.source],s=t&&qt(t.type);t?"vector"===s&&"raster"===a?e.push(new Ut(n,r.source,`layer "${r.id}" requires a raster source`)):"raster"===s&&"raster"!==a?e.push(new Ut(n,r.source,`layer "${r.id}" requires a vector source`)):"vector"!==s||r["source-layer"]?"raster-dem"===s&&"hillshade"!==a?e.push(new Ut(n,r.source,"raster-dem source can only be used with layer type 'hillshade'.")):"line"!==a||!r.paint||!r.paint["line-gradient"]||"geojson"===s&&t.lineMetrics||e.push(new Ut(n,r,`layer "${r.id}" specifies a line-gradient, which requires a GeoJSON source with \`lineMetrics\` enabled.`)):e.push(new Ut(n,r,`layer "${r.id}" must specify a "source-layer"`)):e.push(new Ut(n,r.source,`source "${r.source}" not found`));}else e.push(new Ut(n,r,'missing required property "source"'));return e=e.concat(mn({key:n,value:r,valueSpec:s.layer,style:t.style,styleSpec:t.styleSpec,objectElementValidators:{"*":()=>[],type:()=>Gn({key:`${n}.type`,value:r.type,valueSpec:s.layer.type,style:t.style,styleSpec:t.styleSpec,object:r,objectKey:"type"}),filter:Cn,layout:t=>mn({layer:r,key:t.key,value:t.value,style:t.style,styleSpec:t.styleSpec,objectElementValidators:{"*":t=>Ln(Ot({layerType:a},t))}}),paint:t=>mn({layer:r,key:t.key,value:t.value,style:t.style,styleSpec:t.styleSpec,objectElementValidators:{"*":t=>Vn(Ot({layerType:a},t))}})}})),e}function Rn(t){const e=t.value,r=t.key,n=Wr(e);return "string"!==n?[new Ut(r,e,`string expected, ${n} found`)]:[]}const Un={promoteId:function({key:t,value:e}){if("string"===Wr(e))return Rn({key:t,value:e});{const r=[];for(const n in e)r.push(...Rn({key:`${t}.${n}`,value:e[n]}));return r}}};function $n(t){const e=t.value,r=t.key,n=t.styleSpec,i=t.style;if(!e.type)return [new Ut(r,e,'"type" is required')];const s=qt(e.type);let a;switch(s){case"vector":case"raster":case"raster-dem":return a=mn({key:r,value:e,valueSpec:n[`source_${s.replace("-","_")}`],style:t.style,styleSpec:n,objectElementValidators:Un}),a;case"geojson":if(a=mn({key:r,value:e,valueSpec:n.source_geojson,style:i,styleSpec:n,objectElementValidators:Un}),e.cluster)for(const t in e.clusterProperties){const[n,i]=e.clusterProperties[t],s="string"==typeof n?[n,["accumulated"],["get",t]]:n;a.push(...bn({key:`${r}.${t}.map`,value:i,expressionContext:"cluster-map"})),a.push(...bn({key:`${r}.${t}.reduce`,value:s,expressionContext:"cluster-reduce"}));}return a;case"video":return mn({key:r,value:e,valueSpec:n.source_video,style:i,styleSpec:n});case"image":return mn({key:r,value:e,valueSpec:n.source_image,style:i,styleSpec:n});case"canvas":return [new Ut(r,null,"Please use runtime APIs to add canvas sources, rather than including them in stylesheets.","source.canvas")];default:return wn({key:`${r}.type`,value:e.type,valueSpec:{values:["vector","raster","raster-dem","geojson","video","image"]},style:i,styleSpec:n})}}function On(t){const e=t.value,r=t.styleSpec,n=r.light,i=t.style;let s=[];const a=Wr(e);if(void 0===e)return s;if("object"!==a)return s=s.concat([new Ut("light",e,`object expected, ${a} found`)]),s;for(const t in e){const a=t.match(/^(.*)-transition$/);s=s.concat(a&&n[a[1]]&&n[a[1]].transition?Gn({key:t,value:e[t],valueSpec:r.transition,style:i,styleSpec:r}):n[t]?Gn({key:t,value:e[t],valueSpec:n[t],style:i,styleSpec:r}):[new Ut(t,e[t],`unknown property "${t}"`)]);}return s}function qn(t){const e=t.value,r=t.key,n=t.style,i=t.styleSpec,s=i.terrain;let a=[];const o=Wr(e);if(void 0===e)return a;if("object"!==o)return a=a.concat([new Ut("terrain",e,`object expected, ${o} found`)]),a;for(const t in e){const r=t.match(/^(.*)-transition$/);a=a.concat(r&&s[r[1]]&&s[r[1]].transition?Gn({key:t,value:e[t],valueSpec:i.transition,style:n,styleSpec:i}):s[t]?Gn({key:t,value:e[t],valueSpec:s[t],style:n,styleSpec:i}):[new Ut(t,e[t],`unknown property "${t}"`)]);}if(e.source){const t=n.sources&&n.sources[e.source],i=t&&qt(t.type);t?"raster-dem"!==i&&a.push(new Ut(r,e.source,`terrain cannot be used with a source of type ${i}, it only be used with a "raster-dem" source type`)):a.push(new Ut(r,e.source,`source "${e.source}" not found`));}else a.push(new Ut(r,e,'terrain is missing required property "source"'));return a}function Nn(t){const e=t.value,r=t.style,n=t.styleSpec,i=n.fog;let s=[];const a=Wr(e);if(void 0===e)return s;if("object"!==a)return s=s.concat([new Ut("fog",e,`object expected, ${a} found`)]),s;for(const t in e){const a=t.match(/^(.*)-transition$/);s=s.concat(a&&i[a[1]]&&i[a[1]].transition?Gn({key:t,value:e[t],valueSpec:n.transition,style:r,styleSpec:n}):i[t]?Gn({key:t,value:e[t],valueSpec:i[t],style:r,styleSpec:n}):[new Ut(t,e[t],`unknown property "${t}"`)]);}return s}const jn={"*":()=>[],array:gn,boolean:function(t){const e=t.value,r=t.key,n=Wr(e);return "boolean"!==n?[new Ut(r,e,`boolean expected, ${n} found`)]:[]},number:xn,color:function(t){const e=t.key,r=t.value,n=Wr(r);return "string"!==n?[new Ut(e,r,`color expected, ${n} found`)]:null===ue.parseCSSColor(r)?[new Ut(e,r,`color expected, "${r}" found`)]:[]},constants:$t,enum:wn,filter:Cn,function:vn,layer:Fn,object:mn,source:$n,light:On,terrain:qn,fog:Nn,string:Rn,formatted:function(t){return 0===Rn(t).length?[]:bn(t)},resolvedImage:function(t){return 0===Rn(t).length?[]:bn(t)}};function Gn(t){const e=t.value,r=t.valueSpec,n=t.styleSpec;return r.expression&&Qr(qt(e))?vn(t):r.expression&&un(Nt(e))?bn(t):r.type&&jn[r.type]?jn[r.type](t):mn(Ot({},t,{valueSpec:r.type?n[r.type]:r}))}function Zn(t){const e=t.value,r=t.key,n=Rn(t);return n.length||(-1===e.indexOf("{fontstack}")&&n.push(new Ut(r,e,'"glyphs" url must include a "{fontstack}" token')),-1===e.indexOf("{range}")&&n.push(new Ut(r,e,'"glyphs" url must include a "{range}" token'))),n}function Xn(t,e=Rt){let r=[];return r=r.concat(Gn({key:"",value:t,valueSpec:e.$root,styleSpec:e,style:t,objectElementValidators:{glyphs:Zn,"*":()=>[]}})),t.constants&&(r=r.concat($t({key:"constants",value:t.constants,style:t,styleSpec:e}))),Kn(r)}function Kn(t){return [].concat(t).sort(((t,e)=>t.line-e.line))}function Hn(t){return function(...e){return Kn(t.apply(this,e))}}Xn.source=Hn($n),Xn.light=Hn(On),Xn.terrain=Hn(qn),Xn.fog=Hn(Nn),Xn.layer=Hn(Fn),Xn.filter=Hn(Cn),Xn.paintProperty=Hn(Vn),Xn.layoutProperty=Hn(Ln);const Yn=Xn,Jn=Yn.light,Wn=Yn.fog,Qn=Yn.paintProperty,ti=Yn.layoutProperty;function ei(t,e){let r=!1;if(e&&e.length)for(const n of e)t.fire(new Lt(new Error(n.message))),r=!0;return r}var ri=ni;function ni(t,e,r){var n=this.cells=[];if(t instanceof ArrayBuffer){this.arrayBuffer=t;var i=new Int32Array(this.arrayBuffer);t=i[0],this.d=(e=i[1])+2*(r=i[2]);for(var s=0;s<this.d*this.d;s++){var a=i[3+s],o=i[3+s+1];n.push(a===o?null:i.subarray(a,o));}var l=i[3+n.length+1];this.keys=i.subarray(i[3+n.length],l),this.bboxes=i.subarray(l),this.insert=this._insertReadonly;}else {this.d=e+2*r;for(var u=0;u<this.d*this.d;u++)n.push([]);this.keys=[],this.bboxes=[];}this.n=e,this.extent=t,this.padding=r,this.scale=e/t,this.uid=0;var c=r/e*t;this.min=-c,this.max=t+c;}ni.prototype.insert=function(t,e,r,n,i){this._forEachCell(e,r,n,i,this._insertCell,this.uid++),this.keys.push(t),this.bboxes.push(e),this.bboxes.push(r),this.bboxes.push(n),this.bboxes.push(i);},ni.prototype._insertReadonly=function(){throw "Cannot insert into a GridIndex created from an ArrayBuffer."},ni.prototype._insertCell=function(t,e,r,n,i,s){this.cells[i].push(s);},ni.prototype.query=function(t,e,r,n,i){var s=this.min,a=this.max;if(t<=s&&e<=s&&a<=r&&a<=n&&!i)return Array.prototype.slice.call(this.keys);var o=[];return this._forEachCell(t,e,r,n,this._queryCell,o,{},i),o},ni.prototype._queryCell=function(t,e,r,n,i,s,a,o){var l=this.cells[i];if(null!==l)for(var u=this.keys,c=this.bboxes,h=0;h<l.length;h++){var p=l[h];if(void 0===a[p]){var d=4*p;(o?o(c[d+0],c[d+1],c[d+2],c[d+3]):t<=c[d+2]&&e<=c[d+3]&&r>=c[d+0]&&n>=c[d+1])?(a[p]=!0,s.push(u[p])):a[p]=!1;}}},ni.prototype._forEachCell=function(t,e,r,n,i,s,a,o){for(var l=this._convertToCellCoord(t),u=this._convertToCellCoord(e),c=this._convertToCellCoord(r),h=this._convertToCellCoord(n),p=l;p<=c;p++)for(var d=u;d<=h;d++){var f=this.d*d+p;if((!o||o(this._convertFromCellCoord(p),this._convertFromCellCoord(d),this._convertFromCellCoord(p+1),this._convertFromCellCoord(d+1)))&&i.call(this,t,e,r,n,f,s,a,o))return}},ni.prototype._convertFromCellCoord=function(t){return (t-this.padding)/this.scale},ni.prototype._convertToCellCoord=function(t){return Math.max(0,Math.min(this.d-1,Math.floor(t*this.scale)+this.padding))},ni.prototype.toArrayBuffer=function(){if(this.arrayBuffer)return this.arrayBuffer;for(var t=this.cells,e=3+this.cells.length+1+1,r=0,n=0;n<this.cells.length;n++)r+=this.cells[n].length;var i=new Int32Array(e+r+this.keys.length+this.bboxes.length);i[0]=this.extent,i[1]=this.n,i[2]=this.padding;for(var s=e,a=0;a<t.length;a++){var o=t[a];i[3+a]=s,i.set(o,s),s+=o.length;}return i[3+t.length]=s,i.set(this.keys,s),i[3+t.length+1]=s+=this.keys.length,i.set(this.bboxes,s),s+=this.bboxes.length,i.buffer};const{ImageData:ii,ImageBitmap:si}=a,ai={};function oi(t,e,r={}){Object.defineProperty(e,"_classRegistryKey",{value:t,writeable:!1}),ai[t]={klass:e,omit:r.omit||[],shallow:r.shallow||[]};}oi("Object",Object),ri.serialize=function(t,e){const r=t.toArrayBuffer();return e&&e.push(r),{buffer:r}},ri.deserialize=function(t){return new ri(t.buffer)},oi("Grid",ri),oi("Color",ce),oi("Error",Error),oi("ResolvedImage",fe),oi("StylePropertyFunction",fn),oi("StyleExpression",ln,{omit:["_evaluator"]}),oi("ZoomDependentExpression",pn),oi("ZoomConstantExpression",hn),oi("CompoundExpression",Me,{omit:["_evaluate"]});for(const t in qr)qr[t]._classRegistryKey||oi(`Expression_${t}`,qr[t]);function li(t){return t&&"undefined"!=typeof ArrayBuffer&&(t instanceof ArrayBuffer||t.constructor&&"ArrayBuffer"===t.constructor.name)}function ui(t){return si&&t instanceof si}function ci(t,e){if(null==t||"boolean"==typeof t||"number"==typeof t||"string"==typeof t||t instanceof Boolean||t instanceof Number||t instanceof String||t instanceof Date||t instanceof RegExp)return t;if(li(t)||ui(t))return e&&e.push(t),t;if(ArrayBuffer.isView(t)){const r=t;return e&&e.push(r.buffer),r}if(t instanceof ii)return e&&e.push(t.data.buffer),t;if(Array.isArray(t)){const r=[];for(const n of t)r.push(ci(n,e));return r}if("object"==typeof t){const r=t.constructor,n=r._classRegistryKey;if(!n)throw new Error("can't serialize object of unregistered class");const i=r.serialize?r.serialize(t,e):{};if(!r.serialize){for(const r in t){if(!t.hasOwnProperty(r))continue;if(ai[n].omit.indexOf(r)>=0)continue;const s=t[r];i[r]=ai[n].shallow.indexOf(r)>=0?s:ci(s,e);}t instanceof Error&&(i.message=t.message);}if(i.$name)throw new Error("$name property is reserved for worker serialization logic.");return "Object"!==n&&(i.$name=n),i}throw new Error("can't serialize object of type "+typeof t)}function hi(t){if(null==t||"boolean"==typeof t||"number"==typeof t||"string"==typeof t||t instanceof Boolean||t instanceof Number||t instanceof String||t instanceof Date||t instanceof RegExp||li(t)||ui(t)||ArrayBuffer.isView(t)||t instanceof ii)return t;if(Array.isArray(t))return t.map(hi);if("object"==typeof t){const e=t.$name||"Object",{klass:r}=ai[e];if(!r)throw new Error(`can't deserialize unregistered class ${e}`);if(r.deserialize)return r.deserialize(t);const n=Object.create(r.prototype);for(const r of Object.keys(t)){if("$name"===r)continue;const i=t[r];n[r]=ai[e].shallow.indexOf(r)>=0?i:hi(i);}return n}throw new Error("can't deserialize object of type "+typeof t)}class pi{constructor(){this.first=!0;}update(t,e){const r=Math.floor(t);return this.first?(this.first=!1,this.lastIntegerZoom=r,this.lastIntegerZoomTime=0,this.lastZoom=t,this.lastFloorZoom=r,!0):(this.lastFloorZoom>r?(this.lastIntegerZoom=r+1,this.lastIntegerZoomTime=e):this.lastFloorZoom<r&&(this.lastIntegerZoom=r,this.lastIntegerZoomTime=e),t!==this.lastZoom&&(this.lastZoom=t,this.lastFloorZoom=r,!0))}}const di=t=>t>=1536&&t<=1791,fi=t=>t>=1872&&t<=1919,yi=t=>t>=2208&&t<=2303,mi=t=>t>=11904&&t<=12031,gi=t=>t>=12032&&t<=12255,xi=t=>t>=12272&&t<=12287,vi=t=>t>=12288&&t<=12351,bi=t=>t>=12352&&t<=12447,wi=t=>t>=12448&&t<=12543,_i=t=>t>=12544&&t<=12591,ki=t=>t>=12704&&t<=12735,Ai=t=>t>=12736&&t<=12783,Si=t=>t>=12784&&t<=12799,Ii=t=>t>=12800&&t<=13055,zi=t=>t>=13056&&t<=13311,Ti=t=>t>=13312&&t<=19903,Mi=t=>t>=19968&&t<=40959,Ei=t=>t>=40960&&t<=42127,Bi=t=>t>=42128&&t<=42191,Ci=t=>t>=44032&&t<=55215,Pi=t=>t>=63744&&t<=64255,Di=t=>t>=64336&&t<=65023,Vi=t=>t>=65040&&t<=65055,Li=t=>t>=65072&&t<=65103,Fi=t=>t>=65104&&t<=65135,Ri=t=>t>=65136&&t<=65279,Ui=t=>t>=65280&&t<=65519;function $i(t){for(const e of t)if(Ni(e.charCodeAt(0)))return !0;return !1}function Oi(t){for(const e of t)if(!qi(e.charCodeAt(0)))return !1;return !0}function qi(t){return !(di(t)||fi(t)||yi(t)||Di(t)||Ri(t))}function Ni(t){return !(746!==t&&747!==t&&(t<4352||!(ki(t)||_i(t)||Li(t)&&!(t>=65097&&t<=65103)||Pi(t)||zi(t)||mi(t)||Ai(t)||!(!vi(t)||t>=12296&&t<=12305||t>=12308&&t<=12319||12336===t)||Ti(t)||Mi(t)||Ii(t)||(t=>t>=12592&&t<=12687)(t)||(t=>t>=43360&&t<=43391)(t)||(t=>t>=55216&&t<=55295)(t)||(t=>t>=4352&&t<=4607)(t)||Ci(t)||bi(t)||xi(t)||(t=>t>=12688&&t<=12703)(t)||gi(t)||Si(t)||wi(t)&&12540!==t||!(!Ui(t)||65288===t||65289===t||65293===t||t>=65306&&t<=65310||65339===t||65341===t||65343===t||t>=65371&&t<=65503||65507===t||t>=65512&&t<=65519)||!(!Fi(t)||t>=65112&&t<=65118||t>=65123&&t<=65126)||(t=>t>=5120&&t<=5759)(t)||(t=>t>=6320&&t<=6399)(t)||Vi(t)||(t=>t>=19904&&t<=19967)(t)||Ei(t)||Bi(t))))}function ji(t){return !(Ni(t)||function(t){return !!((t=>t>=128&&t<=255)(t)&&(167===t||169===t||174===t||177===t||188===t||189===t||190===t||215===t||247===t)||(t=>t>=8192&&t<=8303)(t)&&(8214===t||8224===t||8225===t||8240===t||8241===t||8251===t||8252===t||8258===t||8263===t||8264===t||8265===t||8273===t)||(t=>t>=8448&&t<=8527)(t)||(t=>t>=8528&&t<=8591)(t)||(t=>t>=8960&&t<=9215)(t)&&(t>=8960&&t<=8967||t>=8972&&t<=8991||t>=8996&&t<=9e3||9003===t||t>=9085&&t<=9114||t>=9150&&t<=9165||9167===t||t>=9169&&t<=9179||t>=9186&&t<=9215)||(t=>t>=9216&&t<=9279)(t)&&9251!==t||(t=>t>=9280&&t<=9311)(t)||(t=>t>=9312&&t<=9471)(t)||(t=>t>=9632&&t<=9727)(t)||(t=>t>=9728&&t<=9983)(t)&&!(t>=9754&&t<=9759)||(t=>t>=11008&&t<=11263)(t)&&(t>=11026&&t<=11055||t>=11088&&t<=11097||t>=11192&&t<=11243)||vi(t)||wi(t)||(t=>t>=57344&&t<=63743)(t)||Li(t)||Fi(t)||Ui(t)||8734===t||8756===t||8757===t||t>=9984&&t<=10087||t>=10102&&t<=10131||65532===t||65533===t)}(t))}function Gi(t){return t>=1424&&t<=2303||Di(t)||Ri(t)}function Zi(t,e){return !(!e&&Gi(t)||t>=2304&&t<=3583||t>=3840&&t<=4255||(t=>t>=6016&&t<=6143)(t))}function Xi(t){for(const e of t)if(Gi(e.charCodeAt(0)))return !0;return !1}const Ki="deferred",Hi="loading",Yi="loaded";let Ji=null,Wi="unavailable",Qi=null;const ts=function(t){t&&"string"==typeof t&&t.indexOf("NetworkError")>-1&&(Wi="error"),Ji&&Ji(t);};function es(){rs.fire(new Vt("pluginStateChange",{pluginStatus:Wi,pluginURL:Qi}));}const rs=new Ft,ns=function(){return Wi},is=function(){if(Wi!==Ki||!Qi)throw new Error("rtl-text-plugin cannot be downloaded unless a pluginURL is specified");Wi=Hi,es(),Qi&&St({url:Qi},(t=>{t?ts(t):(Wi=Yi,es());}));},ss={applyArabicShaping:null,processBidirectionalText:null,processStyledBidirectionalText:null,isLoaded:()=>Wi===Yi||null!=ss.applyArabicShaping,isLoading:()=>Wi===Hi,setState(t){Wi=t.pluginStatus,Qi=t.pluginURL;},isParsed:()=>null!=ss.applyArabicShaping&&null!=ss.processBidirectionalText&&null!=ss.processStyledBidirectionalText,getPluginURL:()=>Qi};class as{constructor(t,e){this.zoom=t,e?(this.now=e.now,this.fadeDuration=e.fadeDuration,this.zoomHistory=e.zoomHistory,this.transition=e.transition):(this.now=0,this.fadeDuration=0,this.zoomHistory=new pi,this.transition={});}isSupportedScript(t){return function(t,e){for(const r of t)if(!Zi(r.charCodeAt(0),e))return !1;return !0}(t,ss.isLoaded())}crossFadingFactor(){return 0===this.fadeDuration?1:Math.min((this.now-this.zoomHistory.lastIntegerZoomTime)/this.fadeDuration,1)}getCrossfadeParameters(){const t=this.zoom,e=t-Math.floor(t),r=this.crossFadingFactor();return t>this.zoomHistory.lastIntegerZoom?{fromScale:2,toScale:1,t:e+(1-e)*r}:{fromScale:.5,toScale:1,t:1-(1-r)*e}}}class os{constructor(t,e){this.property=t,this.value=e,this.expression=function(t,e){if(Qr(t))return new fn(t,e);if(un(t)){const r=dn(t,e);if("error"===r.result)throw new Error(r.value.map((t=>`${t.key}: ${t.message}`)).join(", "));return r.value}{let r=t;return "string"==typeof t&&"color"===e.type&&(r=ce.parse(t)),{kind:"constant",evaluate:()=>r}}}(void 0===e?t.specification.default:e,t.specification);}isDataDriven(){return "source"===this.expression.kind||"composite"===this.expression.kind}possiblyEvaluate(t,e,r){return this.property.possiblyEvaluate(this,t,e,r)}}class ls{constructor(t){this.property=t,this.value=new os(t,void 0);}transitioned(t,e){return new cs(this.property,this.value,e,v({},t.transition,this.transition),t.now)}untransitioned(){return new cs(this.property,this.value,null,{},0)}}class us{constructor(t){this._properties=t,this._values=Object.create(t.defaultTransitionablePropertyValues);}getValue(t){return M(this._values[t].value.value)}setValue(t,e){this._values.hasOwnProperty(t)||(this._values[t]=new ls(this._values[t].property)),this._values[t].value=new os(this._values[t].property,null===e?void 0:M(e));}getTransition(t){return M(this._values[t].transition)}setTransition(t,e){this._values.hasOwnProperty(t)||(this._values[t]=new ls(this._values[t].property)),this._values[t].transition=M(e)||void 0;}serialize(){const t={};for(const e of Object.keys(this._values)){const r=this.getValue(e);void 0!==r&&(t[e]=r);const n=this.getTransition(e);void 0!==n&&(t[`${e}-transition`]=n);}return t}transitioned(t,e){const r=new hs(this._properties);for(const n of Object.keys(this._values))r._values[n]=this._values[n].transitioned(t,e._values[n]);return r}untransitioned(){const t=new hs(this._properties);for(const e of Object.keys(this._values))t._values[e]=this._values[e].untransitioned();return t}}class cs{constructor(t,e,r,n,i){const s=n.delay||0,a=n.duration||0;i=i||0,this.property=t,this.value=e,this.begin=i+s,this.end=this.begin+a,t.specification.transition&&(n.delay||n.duration)&&(this.prior=r);}possiblyEvaluate(t,e,r){const n=t.now||0,i=this.value.possiblyEvaluate(t,e,r),s=this.prior;if(s){if(n>this.end)return this.prior=null,i;if(this.value.isDataDriven())return this.prior=null,i;if(n<this.begin)return s.possiblyEvaluate(t,e,r);{const a=(n-this.begin)/(this.end-this.begin);return this.property.interpolate(s.possiblyEvaluate(t,e,r),i,p(a))}}return i}}class hs{constructor(t){this._properties=t,this._values=Object.create(t.defaultTransitioningPropertyValues);}possiblyEvaluate(t,e,r){const n=new fs(this._properties);for(const i of Object.keys(this._values))n._values[i]=this._values[i].possiblyEvaluate(t,e,r);return n}hasTransition(){for(const t of Object.keys(this._values))if(this._values[t].prior)return !0;return !1}}class ps{constructor(t){this._properties=t,this._values=Object.create(t.defaultPropertyValues);}getValue(t){return M(this._values[t].value)}setValue(t,e){this._values[t]=new os(this._values[t].property,null===e?void 0:M(e));}serialize(){const t={};for(const e of Object.keys(this._values)){const r=this.getValue(e);void 0!==r&&(t[e]=r);}return t}possiblyEvaluate(t,e,r){const n=new fs(this._properties);for(const i of Object.keys(this._values))n._values[i]=this._values[i].possiblyEvaluate(t,e,r);return n}}class ds{constructor(t,e,r){this.property=t,this.value=e,this.parameters=r;}isConstant(){return "constant"===this.value.kind}constantOr(t){return "constant"===this.value.kind?this.value.value:t}evaluate(t,e,r,n){return this.property.evaluate(this.value,this.parameters,t,e,r,n)}}class fs{constructor(t){this._properties=t,this._values=Object.create(t.defaultPossiblyEvaluatedValues);}get(t){return this._values[t]}}class ys{constructor(t){this.specification=t;}possiblyEvaluate(t,e){return t.expression.evaluate(e)}interpolate(t,e,r){const n=nr[this.specification.type];return n?n(t,e,r):t}}class ms{constructor(t,e){this.specification=t,this.overrides=e;}possiblyEvaluate(t,e,r,n){return new ds(this,"constant"===t.expression.kind||"camera"===t.expression.kind?{kind:"constant",value:t.expression.evaluate(e,null,{},r,n)}:t.expression,e)}interpolate(t,e,r){if("constant"!==t.value.kind||"constant"!==e.value.kind)return t;if(void 0===t.value.value||void 0===e.value.value)return new ds(this,{kind:"constant",value:void 0},t.parameters);const n=nr[this.specification.type];return n?new ds(this,{kind:"constant",value:n(t.value.value,e.value.value,r)},t.parameters):t}evaluate(t,e,r,n,i,s){return "constant"===t.kind?t.value:t.evaluate(e,r,n,i,s)}}class gs extends ms{possiblyEvaluate(t,e,r,n){if(void 0===t.value)return new ds(this,{kind:"constant",value:void 0},e);if("constant"===t.expression.kind){const i=t.expression.evaluate(e,null,{},r,n),s="resolvedImage"===t.property.specification.type&&"string"!=typeof i?i.name:i,a=this._calculate(s,s,s,e);return new ds(this,{kind:"constant",value:a},e)}if("camera"===t.expression.kind){const r=this._calculate(t.expression.evaluate({zoom:e.zoom-1}),t.expression.evaluate({zoom:e.zoom}),t.expression.evaluate({zoom:e.zoom+1}),e);return new ds(this,{kind:"constant",value:r},e)}return new ds(this,t.expression,e)}evaluate(t,e,r,n,i,s){if("source"===t.kind){const a=t.evaluate(e,r,n,i,s);return this._calculate(a,a,a,e)}return "composite"===t.kind?this._calculate(t.evaluate({zoom:Math.floor(e.zoom)-1},r,n),t.evaluate({zoom:Math.floor(e.zoom)},r,n),t.evaluate({zoom:Math.floor(e.zoom)+1},r,n),e):t.value}_calculate(t,e,r,n){return n.zoom>n.zoomHistory.lastIntegerZoom?{from:t,to:e,other:r}:{from:r,to:e,other:t}}interpolate(t){return t}}class xs{constructor(t){this.specification=t;}possiblyEvaluate(t,e,r,n){if(void 0!==t.value){if("constant"===t.expression.kind){const i=t.expression.evaluate(e,null,{},r,n);return this._calculate(i,i,i,e)}return this._calculate(t.expression.evaluate(new as(Math.floor(e.zoom-1),e)),t.expression.evaluate(new as(Math.floor(e.zoom),e)),t.expression.evaluate(new as(Math.floor(e.zoom+1),e)),e)}}_calculate(t,e,r,n){return n.zoom>n.zoomHistory.lastIntegerZoom?{from:t,to:e}:{from:r,to:e}}interpolate(t){return t}}class vs{constructor(t){this.specification=t;}possiblyEvaluate(t,e,r,n){return !!t.expression.evaluate(e,null,{},r,n)}interpolate(){return !1}}class bs{constructor(t){this.properties=t,this.defaultPropertyValues={},this.defaultTransitionablePropertyValues={},this.defaultTransitioningPropertyValues={},this.defaultPossiblyEvaluatedValues={},this.overridableProperties=[];for(const e in t){const r=t[e];r.specification.overridable&&this.overridableProperties.push(e);const n=this.defaultPropertyValues[e]=new os(r,void 0),i=this.defaultTransitionablePropertyValues[e]=new ls(r);this.defaultTransitioningPropertyValues[e]=i.untransitioned(),this.defaultPossiblyEvaluatedValues[e]=n.possiblyEvaluate({});}}}function ws(t,e){return 256*(t=y(Math.floor(t),0,255))+y(Math.floor(e),0,255)}oi("DataDrivenProperty",ms),oi("DataConstantProperty",ys),oi("CrossFadedDataDrivenProperty",gs),oi("CrossFadedProperty",xs),oi("ColorRampProperty",vs);const _s={Int8:Int8Array,Uint8:Uint8Array,Int16:Int16Array,Uint16:Uint16Array,Int32:Int32Array,Uint32:Uint32Array,Float32:Float32Array};class ks{constructor(t,e){this._structArray=t,this._pos1=e*this.size,this._pos2=this._pos1/2,this._pos4=this._pos1/4,this._pos8=this._pos1/8;}}class As{constructor(){this.isTransferred=!1,this.capacity=-1,this.resize(0);}static serialize(t,e){return t._trim(),e&&(t.isTransferred=!0,e.push(t.arrayBuffer)),{length:t.length,arrayBuffer:t.arrayBuffer}}static deserialize(t){const e=Object.create(this.prototype);return e.arrayBuffer=t.arrayBuffer,e.length=t.length,e.capacity=t.arrayBuffer.byteLength/e.bytesPerElement,e._refreshViews(),e}_trim(){this.length!==this.capacity&&(this.capacity=this.length,this.arrayBuffer=this.arrayBuffer.slice(0,this.length*this.bytesPerElement),this._refreshViews());}clear(){this.length=0;}resize(t){this.reserve(t),this.length=t;}reserve(t){if(t>this.capacity){this.capacity=Math.max(t,Math.floor(5*this.capacity),128),this.arrayBuffer=new ArrayBuffer(this.capacity*this.bytesPerElement);const e=this.uint8;this._refreshViews(),e&&this.uint8.set(e);}}_refreshViews(){throw new Error("_refreshViews() must be implemented by each concrete StructArray layout")}}function Ss(t,e=1){let r=0,n=0;return {members:t.map((t=>{const i=_s[t.type].BYTES_PER_ELEMENT,s=r=Is(r,Math.max(e,i)),a=t.components||1;return n=Math.max(n,i),r+=i*a,{name:t.name,type:t.type,components:a,offset:s}})),size:Is(r,Math.max(n,e)),alignment:e}}function Is(t,e){return Math.ceil(t/e)*e}class zs extends As{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer);}emplaceBack(t,e){const r=this.length;return this.resize(r+1),this.emplace(r,t,e)}emplace(t,e,r){const n=2*t;return this.int16[n+0]=e,this.int16[n+1]=r,t}}zs.prototype.bytesPerElement=4,oi("StructArrayLayout2i4",zs);class Ts extends As{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer);}emplaceBack(t,e,r,n){const i=this.length;return this.resize(i+1),this.emplace(i,t,e,r,n)}emplace(t,e,r,n,i){const s=4*t;return this.int16[s+0]=e,this.int16[s+1]=r,this.int16[s+2]=n,this.int16[s+3]=i,t}}Ts.prototype.bytesPerElement=8,oi("StructArrayLayout4i8",Ts);class Ms extends As{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer);}emplaceBack(t,e,r,n,i,s,a){const o=this.length;return this.resize(o+1),this.emplace(o,t,e,r,n,i,s,a)}emplace(t,e,r,n,i,s,a,o){const l=6*t,u=12*t,c=3*t;return this.int16[l+0]=e,this.int16[l+1]=r,this.uint8[u+4]=n,this.uint8[u+5]=i,this.uint8[u+6]=s,this.uint8[u+7]=a,this.float32[c+2]=o,t}}Ms.prototype.bytesPerElement=12,oi("StructArrayLayout2i4ub1f12",Ms);class Es extends As{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer);}emplaceBack(t,e){const r=this.length;return this.resize(r+1),this.emplace(r,t,e)}emplace(t,e,r){const n=2*t;return this.float32[n+0]=e,this.float32[n+1]=r,t}}Es.prototype.bytesPerElement=8,oi("StructArrayLayout2f8",Es);class Bs extends As{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer);}emplaceBack(t,e,r,n,i,s,a,o,l,u){const c=this.length;return this.resize(c+1),this.emplace(c,t,e,r,n,i,s,a,o,l,u)}emplace(t,e,r,n,i,s,a,o,l,u,c){const h=10*t;return this.uint16[h+0]=e,this.uint16[h+1]=r,this.uint16[h+2]=n,this.uint16[h+3]=i,this.uint16[h+4]=s,this.uint16[h+5]=a,this.uint16[h+6]=o,this.uint16[h+7]=l,this.uint16[h+8]=u,this.uint16[h+9]=c,t}}Bs.prototype.bytesPerElement=20,oi("StructArrayLayout10ui20",Bs);class Cs extends As{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer);}emplaceBack(t,e,r,n,i,s,a,o){const l=this.length;return this.resize(l+1),this.emplace(l,t,e,r,n,i,s,a,o)}emplace(t,e,r,n,i,s,a,o,l){const u=8*t;return this.uint16[u+0]=e,this.uint16[u+1]=r,this.uint16[u+2]=n,this.uint16[u+3]=i,this.uint16[u+4]=s,this.uint16[u+5]=a,this.uint16[u+6]=o,this.uint16[u+7]=l,t}}Cs.prototype.bytesPerElement=16,oi("StructArrayLayout8ui16",Cs);class Ps extends As{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer);}emplaceBack(t,e,r,n,i,s,a,o,l,u,c,h){const p=this.length;return this.resize(p+1),this.emplace(p,t,e,r,n,i,s,a,o,l,u,c,h)}emplace(t,e,r,n,i,s,a,o,l,u,c,h,p){const d=12*t;return this.int16[d+0]=e,this.int16[d+1]=r,this.int16[d+2]=n,this.int16[d+3]=i,this.uint16[d+4]=s,this.uint16[d+5]=a,this.uint16[d+6]=o,this.uint16[d+7]=l,this.int16[d+8]=u,this.int16[d+9]=c,this.int16[d+10]=h,this.int16[d+11]=p,t}}Ps.prototype.bytesPerElement=24,oi("StructArrayLayout4i4ui4i24",Ps);class Ds extends As{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer);}emplaceBack(t,e,r){const n=this.length;return this.resize(n+1),this.emplace(n,t,e,r)}emplace(t,e,r,n){const i=3*t;return this.float32[i+0]=e,this.float32[i+1]=r,this.float32[i+2]=n,t}}Ds.prototype.bytesPerElement=12,oi("StructArrayLayout3f12",Ds);class Vs extends As{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.uint32=new Uint32Array(this.arrayBuffer);}emplaceBack(t){const e=this.length;return this.resize(e+1),this.emplace(e,t)}emplace(t,e){return this.uint32[1*t+0]=e,t}}Vs.prototype.bytesPerElement=4,oi("StructArrayLayout1ul4",Vs);class Ls extends As{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer),this.uint32=new Uint32Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer);}emplaceBack(t,e,r,n,i,s,a,o,l,u){const c=this.length;return this.resize(c+1),this.emplace(c,t,e,r,n,i,s,a,o,l,u)}emplace(t,e,r,n,i,s,a,o,l,u,c){const h=16*t,p=8*t;return this.int16[h+0]=e,this.int16[h+1]=r,this.float32[p+1]=n,this.float32[p+2]=i,this.float32[p+3]=s,this.float32[p+4]=a,this.int16[h+10]=o,this.uint32[p+6]=l,this.uint16[h+14]=u,this.uint16[h+15]=c,t}}Ls.prototype.bytesPerElement=32,oi("StructArrayLayout2i4f1i1ul2ui32",Ls);class Fs extends As{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer);}emplaceBack(t,e,r,n,i,s){const a=this.length;return this.resize(a+1),this.emplace(a,t,e,r,n,i,s)}emplace(t,e,r,n,i,s,a){const o=6*t;return this.int16[o+0]=e,this.int16[o+1]=r,this.int16[o+2]=n,this.int16[o+3]=i,this.int16[o+4]=s,this.int16[o+5]=a,t}}Fs.prototype.bytesPerElement=12,oi("StructArrayLayout2i2i2i12",Fs);class Rs extends As{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer);}emplaceBack(t,e,r,n,i){const s=this.length;return this.resize(s+1),this.emplace(s,t,e,r,n,i)}emplace(t,e,r,n,i,s){const a=4*t,o=8*t;return this.float32[a+0]=e,this.float32[a+1]=r,this.float32[a+2]=n,this.int16[o+6]=i,this.int16[o+7]=s,t}}Rs.prototype.bytesPerElement=16,oi("StructArrayLayout2f1f2i16",Rs);class Us extends As{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer);}emplaceBack(t,e,r,n){const i=this.length;return this.resize(i+1),this.emplace(i,t,e,r,n)}emplace(t,e,r,n,i){const s=12*t,a=3*t;return this.uint8[s+0]=e,this.uint8[s+1]=r,this.float32[a+1]=n,this.float32[a+2]=i,t}}Us.prototype.bytesPerElement=12,oi("StructArrayLayout2ub2f12",Us);class $s extends As{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer);}emplaceBack(t,e,r){const n=this.length;return this.resize(n+1),this.emplace(n,t,e,r)}emplace(t,e,r,n){const i=3*t;return this.uint16[i+0]=e,this.uint16[i+1]=r,this.uint16[i+2]=n,t}}$s.prototype.bytesPerElement=6,oi("StructArrayLayout3ui6",$s);class Os extends As{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer),this.uint32=new Uint32Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer);}emplaceBack(t,e,r,n,i,s,a,o,l,u,c,h,p,d,f,y,m){const g=this.length;return this.resize(g+1),this.emplace(g,t,e,r,n,i,s,a,o,l,u,c,h,p,d,f,y,m)}emplace(t,e,r,n,i,s,a,o,l,u,c,h,p,d,f,y,m,g){const x=24*t,v=12*t,b=48*t;return this.int16[x+0]=e,this.int16[x+1]=r,this.uint16[x+2]=n,this.uint16[x+3]=i,this.uint32[v+2]=s,this.uint32[v+3]=a,this.uint32[v+4]=o,this.uint16[x+10]=l,this.uint16[x+11]=u,this.uint16[x+12]=c,this.float32[v+7]=h,this.float32[v+8]=p,this.uint8[b+36]=d,this.uint8[b+37]=f,this.uint8[b+38]=y,this.uint32[v+10]=m,this.int16[x+22]=g,t}}Os.prototype.bytesPerElement=48,oi("StructArrayLayout2i2ui3ul3ui2f3ub1ul1i48",Os);class qs extends As{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer),this.uint32=new Uint32Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer);}emplaceBack(t,e,r,n,i,s,a,o,l,u,c,h,p,d,f,y,m,g,x,v,b,w,_,k,A,S,I){const z=this.length;return this.resize(z+1),this.emplace(z,t,e,r,n,i,s,a,o,l,u,c,h,p,d,f,y,m,g,x,v,b,w,_,k,A,S,I)}emplace(t,e,r,n,i,s,a,o,l,u,c,h,p,d,f,y,m,g,x,v,b,w,_,k,A,S,I,z){const T=32*t,M=16*t;return this.int16[T+0]=e,this.int16[T+1]=r,this.int16[T+2]=n,this.int16[T+3]=i,this.int16[T+4]=s,this.int16[T+5]=a,this.int16[T+6]=o,this.int16[T+7]=l,this.uint16[T+8]=u,this.uint16[T+9]=c,this.uint16[T+10]=h,this.uint16[T+11]=p,this.uint16[T+12]=d,this.uint16[T+13]=f,this.uint16[T+14]=y,this.uint16[T+15]=m,this.uint16[T+16]=g,this.uint16[T+17]=x,this.uint16[T+18]=v,this.uint16[T+19]=b,this.uint16[T+20]=w,this.uint16[T+21]=_,this.uint16[T+22]=k,this.uint32[M+12]=A,this.float32[M+13]=S,this.float32[M+14]=I,this.float32[M+15]=z,t}}qs.prototype.bytesPerElement=64,oi("StructArrayLayout8i15ui1ul3f64",qs);class Ns extends As{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer);}emplaceBack(t){const e=this.length;return this.resize(e+1),this.emplace(e,t)}emplace(t,e){return this.float32[1*t+0]=e,t}}Ns.prototype.bytesPerElement=4,oi("StructArrayLayout1f4",Ns);class js extends As{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer);}emplaceBack(t,e,r){const n=this.length;return this.resize(n+1),this.emplace(n,t,e,r)}emplace(t,e,r,n){const i=3*t;return this.int16[i+0]=e,this.int16[i+1]=r,this.int16[i+2]=n,t}}js.prototype.bytesPerElement=6,oi("StructArrayLayout3i6",js);class Gs extends As{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.uint32=new Uint32Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer);}emplaceBack(t,e,r,n){const i=this.length;return this.resize(i+1),this.emplace(i,t,e,r,n)}emplace(t,e,r,n,i){const s=6*t;return this.uint32[3*t+0]=e,this.uint16[s+2]=r,this.uint16[s+3]=n,this.uint16[s+4]=i,t}}Gs.prototype.bytesPerElement=12,oi("StructArrayLayout1ul3ui12",Gs);class Zs extends As{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer);}emplaceBack(t,e){const r=this.length;return this.resize(r+1),this.emplace(r,t,e)}emplace(t,e,r){const n=2*t;return this.uint16[n+0]=e,this.uint16[n+1]=r,t}}Zs.prototype.bytesPerElement=4,oi("StructArrayLayout2ui4",Zs);class Xs extends As{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer);}emplaceBack(t){const e=this.length;return this.resize(e+1),this.emplace(e,t)}emplace(t,e){return this.uint16[1*t+0]=e,t}}Xs.prototype.bytesPerElement=2,oi("StructArrayLayout1ui2",Xs);class Ks extends As{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer);}emplaceBack(t,e,r,n){const i=this.length;return this.resize(i+1),this.emplace(i,t,e,r,n)}emplace(t,e,r,n,i){const s=4*t;return this.float32[s+0]=e,this.float32[s+1]=r,this.float32[s+2]=n,this.float32[s+3]=i,t}}Ks.prototype.bytesPerElement=16,oi("StructArrayLayout4f16",Ks);class Hs extends ks{get anchorPointX(){return this._structArray.int16[this._pos2+0]}get anchorPointY(){return this._structArray.int16[this._pos2+1]}get x1(){return this._structArray.float32[this._pos4+1]}get y1(){return this._structArray.float32[this._pos4+2]}get x2(){return this._structArray.float32[this._pos4+3]}get y2(){return this._structArray.float32[this._pos4+4]}get padding(){return this._structArray.int16[this._pos2+10]}get featureIndex(){return this._structArray.uint32[this._pos4+6]}get sourceLayerIndex(){return this._structArray.uint16[this._pos2+14]}get bucketIndex(){return this._structArray.uint16[this._pos2+15]}get anchorPoint(){return new i(this.anchorPointX,this.anchorPointY)}}Hs.prototype.size=32;class Ys extends Ls{get(t){return new Hs(this,t)}}oi("CollisionBoxArray",Ys);class Js extends ks{get anchorX(){return this._structArray.int16[this._pos2+0]}get anchorY(){return this._structArray.int16[this._pos2+1]}get glyphStartIndex(){return this._structArray.uint16[this._pos2+2]}get numGlyphs(){return this._structArray.uint16[this._pos2+3]}get vertexStartIndex(){return this._structArray.uint32[this._pos4+2]}get lineStartIndex(){return this._structArray.uint32[this._pos4+3]}get lineLength(){return this._structArray.uint32[this._pos4+4]}get segment(){return this._structArray.uint16[this._pos2+10]}get lowerSize(){return this._structArray.uint16[this._pos2+11]}get upperSize(){return this._structArray.uint16[this._pos2+12]}get lineOffsetX(){return this._structArray.float32[this._pos4+7]}get lineOffsetY(){return this._structArray.float32[this._pos4+8]}get writingMode(){return this._structArray.uint8[this._pos1+36]}get placedOrientation(){return this._structArray.uint8[this._pos1+37]}set placedOrientation(t){this._structArray.uint8[this._pos1+37]=t;}get hidden(){return this._structArray.uint8[this._pos1+38]}set hidden(t){this._structArray.uint8[this._pos1+38]=t;}get crossTileID(){return this._structArray.uint32[this._pos4+10]}set crossTileID(t){this._structArray.uint32[this._pos4+10]=t;}get associatedIconIndex(){return this._structArray.int16[this._pos2+22]}}Js.prototype.size=48;class Ws extends Os{get(t){return new Js(this,t)}}oi("PlacedSymbolArray",Ws);class Qs extends ks{get anchorX(){return this._structArray.int16[this._pos2+0]}get anchorY(){return this._structArray.int16[this._pos2+1]}get rightJustifiedTextSymbolIndex(){return this._structArray.int16[this._pos2+2]}get centerJustifiedTextSymbolIndex(){return this._structArray.int16[this._pos2+3]}get leftJustifiedTextSymbolIndex(){return this._structArray.int16[this._pos2+4]}get verticalPlacedTextSymbolIndex(){return this._structArray.int16[this._pos2+5]}get placedIconSymbolIndex(){return this._structArray.int16[this._pos2+6]}get verticalPlacedIconSymbolIndex(){return this._structArray.int16[this._pos2+7]}get key(){return this._structArray.uint16[this._pos2+8]}get textBoxStartIndex(){return this._structArray.uint16[this._pos2+9]}get textBoxEndIndex(){return this._structArray.uint16[this._pos2+10]}get verticalTextBoxStartIndex(){return this._structArray.uint16[this._pos2+11]}get verticalTextBoxEndIndex(){return this._structArray.uint16[this._pos2+12]}get iconBoxStartIndex(){return this._structArray.uint16[this._pos2+13]}get iconBoxEndIndex(){return this._structArray.uint16[this._pos2+14]}get verticalIconBoxStartIndex(){return this._structArray.uint16[this._pos2+15]}get verticalIconBoxEndIndex(){return this._structArray.uint16[this._pos2+16]}get featureIndex(){return this._structArray.uint16[this._pos2+17]}get numHorizontalGlyphVertices(){return this._structArray.uint16[this._pos2+18]}get numVerticalGlyphVertices(){return this._structArray.uint16[this._pos2+19]}get numIconVertices(){return this._structArray.uint16[this._pos2+20]}get numVerticalIconVertices(){return this._structArray.uint16[this._pos2+21]}get useRuntimeCollisionCircles(){return this._structArray.uint16[this._pos2+22]}get crossTileID(){return this._structArray.uint32[this._pos4+12]}set crossTileID(t){this._structArray.uint32[this._pos4+12]=t;}get textOffset0(){return this._structArray.float32[this._pos4+13]}get textOffset1(){return this._structArray.float32[this._pos4+14]}get collisionCircleDiameter(){return this._structArray.float32[this._pos4+15]}}Qs.prototype.size=64;class ta extends qs{get(t){return new Qs(this,t)}}oi("SymbolInstanceArray",ta);class ea extends Ns{getoffsetX(t){return this.float32[1*t+0]}}oi("GlyphOffsetArray",ea);class ra extends js{getx(t){return this.int16[3*t+0]}gety(t){return this.int16[3*t+1]}gettileUnitDistanceFromAnchor(t){return this.int16[3*t+2]}}oi("SymbolLineVertexArray",ra);class na extends ks{get featureIndex(){return this._structArray.uint32[this._pos4+0]}get sourceLayerIndex(){return this._structArray.uint16[this._pos2+2]}get bucketIndex(){return this._structArray.uint16[this._pos2+3]}get layoutVertexArrayOffset(){return this._structArray.uint16[this._pos2+4]}}na.prototype.size=12;class ia extends Gs{get(t){return new na(this,t)}}oi("FeatureIndexArray",ia);class sa extends ks{get a_centroid_pos0(){return this._structArray.uint16[this._pos2+0]}get a_centroid_pos1(){return this._structArray.uint16[this._pos2+1]}}sa.prototype.size=4;class aa extends Zs{get(t){return new sa(this,t)}}oi("FillExtrusionCentroidArray",aa);const oa=Ss([{name:"a_pattern_to",components:4,type:"Uint16"},{name:"a_pattern_from",components:4,type:"Uint16"},{name:"a_pixel_ratio_to",components:1,type:"Uint16"},{name:"a_pixel_ratio_from",components:1,type:"Uint16"}]),la=Ss([{name:"a_dash_to",components:4,type:"Uint16"},{name:"a_dash_from",components:4,type:"Uint16"}]);var ua=le((function(t){t.exports=function(t,e){var r,n,i,s,a,o,l,u;for(n=t.length-(r=3&t.length),i=e,a=3432918353,o=461845907,u=0;u<n;)l=255&t.charCodeAt(u)|(255&t.charCodeAt(++u))<<8|(255&t.charCodeAt(++u))<<16|(255&t.charCodeAt(++u))<<24,++u,i=27492+(65535&(s=5*(65535&(i=(i^=l=(65535&(l=(l=(65535&l)*a+(((l>>>16)*a&65535)<<16)&4294967295)<<15|l>>>17))*o+(((l>>>16)*o&65535)<<16)&4294967295)<<13|i>>>19))+((5*(i>>>16)&65535)<<16)&4294967295))+((58964+(s>>>16)&65535)<<16);switch(l=0,r){case 3:l^=(255&t.charCodeAt(u+2))<<16;case 2:l^=(255&t.charCodeAt(u+1))<<8;case 1:i^=l=(65535&(l=(l=(65535&(l^=255&t.charCodeAt(u)))*a+(((l>>>16)*a&65535)<<16)&4294967295)<<15|l>>>17))*o+(((l>>>16)*o&65535)<<16)&4294967295;}return i^=t.length,i=2246822507*(65535&(i^=i>>>16))+((2246822507*(i>>>16)&65535)<<16)&4294967295,i=3266489909*(65535&(i^=i>>>13))+((3266489909*(i>>>16)&65535)<<16)&4294967295,(i^=i>>>16)>>>0};})),ca=le((function(t){t.exports=function(t,e){for(var r,n=t.length,i=e^n,s=0;n>=4;)r=1540483477*(65535&(r=255&t.charCodeAt(s)|(255&t.charCodeAt(++s))<<8|(255&t.charCodeAt(++s))<<16|(255&t.charCodeAt(++s))<<24))+((1540483477*(r>>>16)&65535)<<16),i=1540483477*(65535&i)+((1540483477*(i>>>16)&65535)<<16)^(r=1540483477*(65535&(r^=r>>>24))+((1540483477*(r>>>16)&65535)<<16)),n-=4,++s;switch(n){case 3:i^=(255&t.charCodeAt(s+2))<<16;case 2:i^=(255&t.charCodeAt(s+1))<<8;case 1:i=1540483477*(65535&(i^=255&t.charCodeAt(s)))+((1540483477*(i>>>16)&65535)<<16);}return i=1540483477*(65535&(i^=i>>>13))+((1540483477*(i>>>16)&65535)<<16),(i^=i>>>15)>>>0};})),ha=ua,pa=ca;ha.murmur3=ua,ha.murmur2=pa;class da{constructor(){this.ids=[],this.positions=[],this.indexed=!1;}add(t,e,r,n){this.ids.push(fa(t)),this.positions.push(e,r,n);}getPositions(t){const e=fa(t);let r=0,n=this.ids.length-1;for(;r<n;){const t=r+n>>1;this.ids[t]>=e?n=t:r=t+1;}const i=[];for(;this.ids[r]===e;)i.push({index:this.positions[3*r],start:this.positions[3*r+1],end:this.positions[3*r+2]}),r++;return i}static serialize(t,e){const r=new Float64Array(t.ids),n=new Uint32Array(t.positions);return ya(r,n,0,r.length-1),e&&e.push(r.buffer,n.buffer),{ids:r,positions:n}}static deserialize(t){const e=new da;return e.ids=t.ids,e.positions=t.positions,e.indexed=!0,e}}function fa(t){const e=+t;return !isNaN(e)&&e<=o?e:ha(String(t))}function ya(t,e,r,n){for(;r<n;){const i=t[r+n>>1];let s=r-1,a=n+1;for(;;){do{s++;}while(t[s]<i);do{a--;}while(t[a]>i);if(s>=a)break;ma(t,s,a),ma(e,3*s,3*a),ma(e,3*s+1,3*a+1),ma(e,3*s+2,3*a+2);}a-r<n-a?(ya(t,e,r,a),r=a+1):(ya(t,e,a+1,n),n=a);}}function ma(t,e,r){const n=t[e];t[e]=t[r],t[r]=n;}oi("FeaturePositionMap",da);class ga{constructor(t,e){this.gl=t.gl,this.location=e;}}class xa extends ga{constructor(t,e){super(t,e),this.current=0;}set(t){this.current!==t&&(this.current=t,this.gl.uniform1f(this.location,t));}}class va extends ga{constructor(t,e){super(t,e),this.current=[0,0,0,0];}set(t){t[0]===this.current[0]&&t[1]===this.current[1]&&t[2]===this.current[2]&&t[3]===this.current[3]||(this.current=t,this.gl.uniform4f(this.location,t[0],t[1],t[2],t[3]));}}class ba extends ga{constructor(t,e){super(t,e),this.current=ce.transparent;}set(t){t.r===this.current.r&&t.g===this.current.g&&t.b===this.current.b&&t.a===this.current.a||(this.current=t,this.gl.uniform4f(this.location,t.r,t.g,t.b,t.a));}}const wa=new Float32Array(16),_a=new Float32Array(9);function ka(t){return [ws(255*t.r,255*t.g),ws(255*t.b,255*t.a)]}class Aa{constructor(t,e,r){this.value=t,this.uniformNames=e.map((t=>`u_${t}`)),this.type=r;}setUniform(t,e,r){t.set(r.constantOr(this.value));}getBinding(t,e,r){return "color"===this.type?new ba(t,e):new xa(t,e)}}class Sa{constructor(t,e){this.uniformNames=e.map((t=>`u_${t}`)),this.patternFrom=null,this.patternTo=null,this.pixelRatioFrom=1,this.pixelRatioTo=1;}setConstantPatternPositions(t,e){this.pixelRatioFrom=e.pixelRatio,this.pixelRatioTo=t.pixelRatio,this.patternFrom=e.tl.concat(e.br),this.patternTo=t.tl.concat(t.br);}setUniform(t,e,r,n){const i="u_pattern_to"===n||"u_dash_to"===n?this.patternTo:"u_pattern_from"===n||"u_dash_from"===n?this.patternFrom:"u_pixel_ratio_to"===n?this.pixelRatioTo:"u_pixel_ratio_from"===n?this.pixelRatioFrom:null;i&&t.set(i);}getBinding(t,e,r){return "u_pattern_from"===r||"u_pattern_to"===r||"u_dash_from"===r||"u_dash_to"===r?new va(t,e):new xa(t,e)}}class Ia{constructor(t,e,r,n){this.expression=t,this.type=r,this.maxValue=0,this.paintVertexAttributes=e.map((t=>({name:`a_${t}`,type:"Float32",components:"color"===r?2:1,offset:0}))),this.paintVertexArray=new n;}populatePaintArray(t,e,r,n,i){const s=this.paintVertexArray.length,a=this.expression.evaluate(new as(0),e,{},n,[],i);this.paintVertexArray.resize(t),this._setPaintValue(s,t,a);}updatePaintArray(t,e,r,n){const i=this.expression.evaluate({zoom:0},r,n);this._setPaintValue(t,e,i);}_setPaintValue(t,e,r){if("color"===this.type){const n=ka(r);for(let r=t;r<e;r++)this.paintVertexArray.emplace(r,n[0],n[1]);}else {for(let n=t;n<e;n++)this.paintVertexArray.emplace(n,r);this.maxValue=Math.max(this.maxValue,Math.abs(r));}}upload(t){this.paintVertexArray&&this.paintVertexArray.arrayBuffer&&(this.paintVertexBuffer&&this.paintVertexBuffer.buffer?this.paintVertexBuffer.updateData(this.paintVertexArray):this.paintVertexBuffer=t.createVertexBuffer(this.paintVertexArray,this.paintVertexAttributes,this.expression.isStateDependent));}destroy(){this.paintVertexBuffer&&this.paintVertexBuffer.destroy();}}class za{constructor(t,e,r,n,i,s){this.expression=t,this.uniformNames=e.map((t=>`u_${t}_t`)),this.type=r,this.useIntegerZoom=n,this.zoom=i,this.maxValue=0,this.paintVertexAttributes=e.map((t=>({name:`a_${t}`,type:"Float32",components:"color"===r?4:2,offset:0}))),this.paintVertexArray=new s;}populatePaintArray(t,e,r,n,i){const s=this.expression.evaluate(new as(this.zoom),e,{},n,[],i),a=this.expression.evaluate(new as(this.zoom+1),e,{},n,[],i),o=this.paintVertexArray.length;this.paintVertexArray.resize(t),this._setPaintValue(o,t,s,a);}updatePaintArray(t,e,r,n){const i=this.expression.evaluate({zoom:this.zoom},r,n),s=this.expression.evaluate({zoom:this.zoom+1},r,n);this._setPaintValue(t,e,i,s);}_setPaintValue(t,e,r,n){if("color"===this.type){const i=ka(r),s=ka(n);for(let r=t;r<e;r++)this.paintVertexArray.emplace(r,i[0],i[1],s[0],s[1]);}else {for(let i=t;i<e;i++)this.paintVertexArray.emplace(i,r,n);this.maxValue=Math.max(this.maxValue,Math.abs(r),Math.abs(n));}}upload(t){this.paintVertexArray&&this.paintVertexArray.arrayBuffer&&(this.paintVertexBuffer&&this.paintVertexBuffer.buffer?this.paintVertexBuffer.updateData(this.paintVertexArray):this.paintVertexBuffer=t.createVertexBuffer(this.paintVertexArray,this.paintVertexAttributes,this.expression.isStateDependent));}destroy(){this.paintVertexBuffer&&this.paintVertexBuffer.destroy();}setUniform(t,e){const r=this.useIntegerZoom?Math.floor(e.zoom):e.zoom,n=y(this.expression.interpolationFactor(r,this.zoom,this.zoom+1),0,1);t.set(n);}getBinding(t,e,r){return new xa(t,e)}}class Ta{constructor(t,e,r,n,i,s,a){this.expression=t,this.type=r,this.useIntegerZoom=n,this.zoom=i,this.layerId=a,this.paintVertexAttributes=("array"===r?la:oa).members;for(let t=0;t<e.length;++t);this.zoomInPaintVertexArray=new s,this.zoomOutPaintVertexArray=new s;}populatePaintArray(t,e,r){const n=this.zoomInPaintVertexArray.length;this.zoomInPaintVertexArray.resize(t),this.zoomOutPaintVertexArray.resize(t),this._setPaintValues(n,t,e.patterns&&e.patterns[this.layerId],r);}updatePaintArray(t,e,r,n,i){this._setPaintValues(t,e,r.patterns&&r.patterns[this.layerId],i);}_setPaintValues(t,e,r,n){if(!n||!r)return;const{min:i,mid:s,max:a}=r,o=n[i],l=n[s],u=n[a];if(o&&l&&u)for(let r=t;r<e;r++)this._setPaintValue(this.zoomInPaintVertexArray,r,l,o),this._setPaintValue(this.zoomOutPaintVertexArray,r,l,u);}_setPaintValue(t,e,r,n){t.emplace(e,r.tl[0],r.tl[1],r.br[0],r.br[1],n.tl[0],n.tl[1],n.br[0],n.br[1],r.pixelRatio,n.pixelRatio);}upload(t){this.zoomInPaintVertexArray&&this.zoomInPaintVertexArray.arrayBuffer&&this.zoomOutPaintVertexArray&&this.zoomOutPaintVertexArray.arrayBuffer&&(this.zoomInPaintVertexBuffer=t.createVertexBuffer(this.zoomInPaintVertexArray,this.paintVertexAttributes,this.expression.isStateDependent),this.zoomOutPaintVertexBuffer=t.createVertexBuffer(this.zoomOutPaintVertexArray,this.paintVertexAttributes,this.expression.isStateDependent));}destroy(){this.zoomOutPaintVertexBuffer&&this.zoomOutPaintVertexBuffer.destroy(),this.zoomInPaintVertexBuffer&&this.zoomInPaintVertexBuffer.destroy();}}class Ma{constructor(t,e,r=(()=>!0)){this.binders={},this._buffers=[];const n=[];for(const i in t.paint._values){if(!r(i))continue;const s=t.paint.get(i);if(!(s instanceof ds&&Hr(s.property.specification)))continue;const a=Ca(i,t.type),o=s.value,l=s.property.specification.type,u=s.property.useIntegerZoom,c=s.property.specification["property-type"],h="cross-faded"===c||"cross-faded-data-driven"===c,p="line-dasharray"===String(i)&&"constant"!==t.layout.get("line-cap").value.kind;if("constant"!==o.kind||p)if("source"===o.kind||p||h){const r=Va(i,l,"source");this.binders[i]=h?new Ta(o,a,l,u,e,r,t.id):new Ia(o,a,l,r),n.push(`/a_${i}`);}else {const t=Va(i,l,"composite");this.binders[i]=new za(o,a,l,u,e,t),n.push(`/z_${i}`);}else this.binders[i]=h?new Sa(o.value,a):new Aa(o.value,a,l),n.push(`/u_${i}`);}this.cacheKey=n.sort().join("");}getMaxValue(t){const e=this.binders[t];return e instanceof Ia||e instanceof za?e.maxValue:0}populatePaintArrays(t,e,r,n,i){for(const s in this.binders){const a=this.binders[s];(a instanceof Ia||a instanceof za||a instanceof Ta)&&a.populatePaintArray(t,e,r,n,i);}}setConstantPatternPositions(t,e){for(const r in this.binders){const n=this.binders[r];n instanceof Sa&&n.setConstantPatternPositions(t,e);}}updatePaintArrays(t,e,r,n,i){let s=!1;for(const a in t){const o=e.getPositions(a);for(const e of o){const o=r.feature(e.index);for(const r in this.binders){const l=this.binders[r];if((l instanceof Ia||l instanceof za||l instanceof Ta)&&!0===l.expression.isStateDependent){const u=n.paint.get(r);l.expression=u.value,l.updatePaintArray(e.start,e.end,o,t[a],i),s=!0;}}}}return s}defines(){const t=[];for(const e in this.binders){const r=this.binders[e];(r instanceof Aa||r instanceof Sa)&&t.push(...r.uniformNames.map((t=>`#define HAS_UNIFORM_${t}`)));}return t}getBinderAttributes(){const t=[];for(const e in this.binders){const r=this.binders[e];if(r instanceof Ia||r instanceof za||r instanceof Ta)for(let e=0;e<r.paintVertexAttributes.length;e++)t.push(r.paintVertexAttributes[e].name);}return t}getBinderUniforms(){const t=[];for(const e in this.binders){const r=this.binders[e];if(r instanceof Aa||r instanceof Sa||r instanceof za)for(const e of r.uniformNames)t.push(e);}return t}getPaintVertexBuffers(){return this._buffers}getUniforms(t,e){const r=[];for(const n in this.binders){const i=this.binders[n];if(i instanceof Aa||i instanceof Sa||i instanceof za)for(const s of i.uniformNames)if(e[s]){const a=i.getBinding(t,e[s],s);r.push({name:s,property:n,binding:a});}}return r}setUniforms(t,e,r,n){for(const{name:t,property:i,binding:s}of e)this.binders[i].setUniform(s,n,r.get(i),t);}updatePaintBuffers(t){this._buffers=[];for(const e in this.binders){const r=this.binders[e];if(t&&r instanceof Ta){const e=2===t.fromScale?r.zoomInPaintVertexBuffer:r.zoomOutPaintVertexBuffer;e&&this._buffers.push(e);}else (r instanceof Ia||r instanceof za)&&r.paintVertexBuffer&&this._buffers.push(r.paintVertexBuffer);}}upload(t){for(const e in this.binders){const r=this.binders[e];(r instanceof Ia||r instanceof za||r instanceof Ta)&&r.upload(t);}this.updatePaintBuffers();}destroy(){for(const t in this.binders){const e=this.binders[t];(e instanceof Ia||e instanceof za||e instanceof Ta)&&e.destroy();}}}class Ea{constructor(t,e,r=(()=>!0)){this.programConfigurations={};for(const n of t)this.programConfigurations[n.id]=new Ma(n,e,r);this.needsUpload=!1,this._featureMap=new da,this._bufferOffset=0;}populatePaintArrays(t,e,r,n,i,s){for(const r in this.programConfigurations)this.programConfigurations[r].populatePaintArrays(t,e,n,i,s);void 0!==e.id&&this._featureMap.add(e.id,r,this._bufferOffset,t),this._bufferOffset=t,this.needsUpload=!0;}updatePaintArrays(t,e,r,n){for(const i of r)this.needsUpload=this.programConfigurations[i.id].updatePaintArrays(t,this._featureMap,e,i,n)||this.needsUpload;}get(t){return this.programConfigurations[t]}upload(t){if(this.needsUpload){for(const e in this.programConfigurations)this.programConfigurations[e].upload(t);this.needsUpload=!1;}}destroy(){for(const t in this.programConfigurations)this.programConfigurations[t].destroy();}}const Ba={"text-opacity":["opacity"],"icon-opacity":["opacity"],"text-color":["fill_color"],"icon-color":["fill_color"],"text-halo-color":["halo_color"],"icon-halo-color":["halo_color"],"text-halo-blur":["halo_blur"],"icon-halo-blur":["halo_blur"],"text-halo-width":["halo_width"],"icon-halo-width":["halo_width"],"line-gap-width":["gapwidth"],"line-pattern":["pattern_to","pattern_from","pixel_ratio_to","pixel_ratio_from"],"fill-pattern":["pattern_to","pattern_from","pixel_ratio_to","pixel_ratio_from"],"fill-extrusion-pattern":["pattern_to","pattern_from","pixel_ratio_to","pixel_ratio_from"],"line-dasharray":["dash_to","dash_from"]};function Ca(t,e){return Ba[t]||[t.replace(`${e}-`,"").replace(/-/g,"_")]}const Pa={"line-pattern":{source:Bs,composite:Bs},"fill-pattern":{source:Bs,composite:Bs},"fill-extrusion-pattern":{source:Bs,composite:Bs},"line-dasharray":{source:Cs,composite:Cs}},Da={color:{source:Es,composite:Ks},number:{source:Ns,composite:Es}};function Va(t,e,r){const n=Pa[t];return n&&n[r]||Da[e][r]}oi("ConstantBinder",Aa),oi("CrossFadedConstantBinder",Sa),oi("SourceExpressionBinder",Ia),oi("CrossFadedCompositeBinder",Ta),oi("CompositeExpressionBinder",za),oi("ProgramConfiguration",Ma,{omit:["_buffers"]}),oi("ProgramConfigurationSet",Ea);const La="-transition";class Fa extends Ft{constructor(t,e){if(super(),this.id=t.id,this.type=t.type,this._featureFilter={filter:()=>!0,needGeometry:!1},"custom"!==t.type&&(this.metadata=(t=t).metadata,this.minzoom=t.minzoom,this.maxzoom=t.maxzoom,"background"!==t.type&&"sky"!==t.type&&(this.source=t.source,this.sourceLayer=t["source-layer"],this.filter=t.filter),e.layout&&(this._unevaluatedLayout=new ps(e.layout)),e.paint)){this._transitionablePaint=new us(e.paint);for(const e in t.paint)this.setPaintProperty(e,t.paint[e],{validate:!1});for(const e in t.layout)this.setLayoutProperty(e,t.layout[e],{validate:!1});this._transitioningPaint=this._transitionablePaint.untransitioned(),this.paint=new fs(e.paint);}}getCrossfadeParameters(){return this._crossfadeParameters}getLayoutProperty(t){return "visibility"===t?this.visibility:this._unevaluatedLayout.getValue(t)}setLayoutProperty(t,e,r={}){null!=e&&this._validate(ti,`layers.${this.id}.layout.${t}`,t,e,r)||("visibility"!==t?this._unevaluatedLayout.setValue(t,e):this.visibility=e);}getPaintProperty(t){return I(t,La)?this._transitionablePaint.getTransition(t.slice(0,-La.length)):this._transitionablePaint.getValue(t)}setPaintProperty(t,e,r={}){if(null!=e&&this._validate(Qn,`layers.${this.id}.paint.${t}`,t,e,r))return !1;if(I(t,La))return this._transitionablePaint.setTransition(t.slice(0,-La.length),e||void 0),!1;{const r=this._transitionablePaint._values[t],n="cross-faded-data-driven"===r.property.specification["property-type"],i=r.value.isDataDriven(),s=r.value;this._transitionablePaint.setValue(t,e),this._handleSpecialPaintPropertyUpdate(t);const a=this._transitionablePaint._values[t].value;return a.isDataDriven()||i||n||this._handleOverridablePaintPropertyUpdate(t,s,a)}}_handleSpecialPaintPropertyUpdate(t){}getProgramIds(){return null}getProgramConfiguration(t){return null}_handleOverridablePaintPropertyUpdate(t,e,r){return !1}isHidden(t){return !!(this.minzoom&&t<this.minzoom)||!!(this.maxzoom&&t>=this.maxzoom)||"none"===this.visibility}updateTransitions(t){this._transitioningPaint=this._transitionablePaint.transitioned(t,this._transitioningPaint);}hasTransition(){return this._transitioningPaint.hasTransition()}recalculate(t,e){t.getCrossfadeParameters&&(this._crossfadeParameters=t.getCrossfadeParameters()),this._unevaluatedLayout&&(this.layout=this._unevaluatedLayout.possiblyEvaluate(t,void 0,e)),this.paint=this._transitioningPaint.possiblyEvaluate(t,void 0,e);}serialize(){const t={id:this.id,type:this.type,source:this.source,"source-layer":this.sourceLayer,metadata:this.metadata,minzoom:this.minzoom,maxzoom:this.maxzoom,filter:this.filter,layout:this._unevaluatedLayout&&this._unevaluatedLayout.serialize(),paint:this._transitionablePaint&&this._transitionablePaint.serialize()};return this.visibility&&(t.layout=t.layout||{},t.layout.visibility=this.visibility),T(t,((t,e)=>!(void 0===t||"layout"===e&&!Object.keys(t).length||"paint"===e&&!Object.keys(t).length)))}_validate(t,e,r,n,i={}){return (!i||!1!==i.validate)&&ei(this,t.call(Yn,{key:e,layerType:this.type,objectKey:r,value:n,styleSpec:Rt,style:{glyphs:!0,sprite:!0}}))}is3D(){return !1}isSky(){return !1}isTileClipped(){return !1}hasOffscreenPass(){return !1}resize(){}isStateDependent(){for(const t in this.paint._values){const e=this.paint.get(t);if(e instanceof ds&&Hr(e.property.specification)&&("source"===e.value.kind||"composite"===e.value.kind)&&e.value.isStateDependent)return !0}return !1}}const Ra=Ss([{name:"a_pos",components:2,type:"Int16"}],4),{members:Ua}=Ra;class $a{constructor(t=[]){this.segments=t;}prepareSegment(t,e,r,n){let i=this.segments[this.segments.length-1];return t>$a.MAX_VERTEX_ARRAY_LENGTH&&B(`Max vertices per segment is ${$a.MAX_VERTEX_ARRAY_LENGTH}: bucket requested ${t}`),(!i||i.vertexLength+t>$a.MAX_VERTEX_ARRAY_LENGTH||i.sortKey!==n)&&(i={vertexOffset:e.length,primitiveOffset:r.length,vertexLength:0,primitiveLength:0},void 0!==n&&(i.sortKey=n),this.segments.push(i)),i}get(){return this.segments}destroy(){for(const t of this.segments)for(const e in t.vaos)t.vaos[e].destroy();}static simpleSegment(t,e,r,n){return new $a([{vertexOffset:t,primitiveOffset:e,vertexLength:r,primitiveLength:n,vaos:{},sortKey:0}])}}$a.MAX_VERTEX_ARRAY_LENGTH=Math.pow(2,16)-1,oi("SegmentVector",$a);var Oa=8192;const qa=Math.pow(2,14)-1,Na=-qa-1;function ja(t){const e=Oa/t.extent,r=t.loadGeometry();for(let t=0;t<r.length;t++){const n=r[t];for(let t=0;t<n.length;t++){const r=n[t],i=Math.round(r.x*e),s=Math.round(r.y*e);r.x=y(i,Na,qa),r.y=y(s,Na,qa),(i<r.x||i>r.x+1||s<r.y||s>r.y+1)&&B("Geometry exceeds allowed extent, reduce your vector tile buffer size");}}return r}function Ga(t,e){return {type:t.type,id:t.id,properties:t.properties,geometry:e?ja(t):[]}}function Za(t,e,r,n,i){t.emplaceBack(2*e+(n+1)/2,2*r+(i+1)/2);}class Xa{constructor(t){this.zoom=t.zoom,this.overscaling=t.overscaling,this.layers=t.layers,this.layerIds=this.layers.map((t=>t.id)),this.index=t.index,this.hasPattern=!1,this.layoutVertexArray=new zs,this.indexArray=new $s,this.segments=new $a,this.programConfigurations=new Ea(t.layers,t.zoom),this.stateDependentLayerIds=this.layers.filter((t=>t.isStateDependent())).map((t=>t.id));}populate(t,e,r){const n=this.layers[0],i=[];let s=null;"circle"===n.type&&(s=n.layout.get("circle-sort-key"));for(const{feature:e,id:n,index:a,sourceLayerIndex:o}of t){const t=this.layers[0]._featureFilter.needGeometry,l=Ga(e,t);if(!this.layers[0]._featureFilter.filter(new as(this.zoom),l,r))continue;const u=s?s.evaluate(l,{},r):void 0,c={id:n,properties:e.properties,type:e.type,sourceLayerIndex:o,index:a,geometry:t?l.geometry:ja(e),patterns:{},sortKey:u};i.push(c);}s&&i.sort(((t,e)=>t.sortKey-e.sortKey));for(const n of i){const{geometry:i,index:s,sourceLayerIndex:a}=n,o=t[s].feature;this.addFeature(n,i,s,r),e.featureIndex.insert(o,i,s,a,this.index);}}update(t,e,r){this.stateDependentLayers.length&&this.programConfigurations.updatePaintArrays(t,e,this.stateDependentLayers,r);}isEmpty(){return 0===this.layoutVertexArray.length}uploadPending(){return !this.uploaded||this.programConfigurations.needsUpload}upload(t){this.uploaded||(this.layoutVertexBuffer=t.createVertexBuffer(this.layoutVertexArray,Ua),this.indexBuffer=t.createIndexBuffer(this.indexArray)),this.programConfigurations.upload(t),this.uploaded=!0;}destroy(){this.layoutVertexBuffer&&(this.layoutVertexBuffer.destroy(),this.indexBuffer.destroy(),this.programConfigurations.destroy(),this.segments.destroy());}addFeature(t,e,r,n){for(const r of e)for(const e of r){const r=e.x,n=e.y;if(r<0||r>=Oa||n<0||n>=Oa)continue;const i=this.segments.prepareSegment(4,this.layoutVertexArray,this.indexArray,t.sortKey),s=i.vertexLength;Za(this.layoutVertexArray,r,n,-1,-1),Za(this.layoutVertexArray,r,n,1,-1),Za(this.layoutVertexArray,r,n,1,1),Za(this.layoutVertexArray,r,n,-1,1),this.indexArray.emplaceBack(s,s+1,s+2),this.indexArray.emplaceBack(s,s+3,s+2),i.vertexLength+=4,i.primitiveLength+=2;}this.programConfigurations.populatePaintArrays(this.layoutVertexArray.length,t,r,{},n);}}function Ka(t,e){for(let r=0;r<t.length;r++)if(no(e,t[r]))return !0;for(let r=0;r<e.length;r++)if(no(t,e[r]))return !0;return !!Wa(t,e)}function Ha(t,e,r){return !!no(t,e)||!!to(e,t,r)}function Ya(t,e){if(1===t.length)return ro(e,t[0]);for(let r=0;r<e.length;r++){const n=e[r];for(let e=0;e<n.length;e++)if(no(t,n[e]))return !0}for(let r=0;r<t.length;r++)if(ro(e,t[r]))return !0;for(let r=0;r<e.length;r++)if(Wa(t,e[r]))return !0;return !1}function Ja(t,e,r){if(t.length>1){if(Wa(t,e))return !0;for(let n=0;n<e.length;n++)if(to(e[n],t,r))return !0}for(let n=0;n<t.length;n++)if(to(t[n],e,r))return !0;return !1}function Wa(t,e){if(0===t.length||0===e.length)return !1;for(let r=0;r<t.length-1;r++){const n=t[r],i=t[r+1];for(let t=0;t<e.length-1;t++)if(Qa(n,i,e[t],e[t+1]))return !0}return !1}function Qa(t,e,r,n){return C(t,r,n)!==C(e,r,n)&&C(t,e,r)!==C(t,e,n)}function to(t,e,r){const n=r*r;if(1===e.length)return t.distSqr(e[0])<n;for(let r=1;r<e.length;r++)if(eo(t,e[r-1],e[r])<n)return !0;return !1}function eo(t,e,r){const n=e.distSqr(r);if(0===n)return t.distSqr(e);const i=((t.x-e.x)*(r.x-e.x)+(t.y-e.y)*(r.y-e.y))/n;return t.distSqr(i<0?e:i>1?r:r.sub(e)._mult(i)._add(e))}function ro(t,e){let r,n,i,s=!1;for(let a=0;a<t.length;a++){r=t[a];for(let t=0,a=r.length-1;t<r.length;a=t++)n=r[t],i=r[a],n.y>e.y!=i.y>e.y&&e.x<(i.x-n.x)*(e.y-n.y)/(i.y-n.y)+n.x&&(s=!s);}return s}function no(t,e){let r=!1;for(let n=0,i=t.length-1;n<t.length;i=n++){const s=t[n],a=t[i];s.y>e.y!=a.y>e.y&&e.x<(a.x-s.x)*(e.y-s.y)/(a.y-s.y)+s.x&&(r=!r);}return r}function io(t,e,r,n,s){for(const i of t)if(e<=i.x&&r<=i.y&&n>=i.x&&s>=i.y)return !0;const a=[new i(e,r),new i(e,s),new i(n,s),new i(n,r)];if(t.length>2)for(const e of a)if(no(t,e))return !0;for(let e=0;e<t.length-1;e++)if(so(t[e],t[e+1],a))return !0;return !1}function so(t,e,r){const n=r[0],i=r[2];if(t.x<n.x&&e.x<n.x||t.x>i.x&&e.x>i.x||t.y<n.y&&e.y<n.y||t.y>i.y&&e.y>i.y)return !1;const s=C(t,e,r[0]);return s!==C(t,e,r[1])||s!==C(t,e,r[2])||s!==C(t,e,r[3])}function ao(t,e,r){const n=e.paint.get(t).value;return "constant"===n.kind?n.value:r.programConfigurations.get(e.id).getMaxValue(t)}function oo(t){return Math.sqrt(t[0]*t[0]+t[1]*t[1])}function lo(t,e,r,n,s){if(!e[0]&&!e[1])return t;const a=i.convert(e)._mult(s);"viewport"===r&&a._rotate(-n);const o=[];for(let e=0;e<t.length;e++)o.push(t[e].sub(a));return o}function uo(t,e,r,n){const s=i.convert(t)._mult(n);return "viewport"===e&&s._rotate(-r),s}oi("CircleBucket",Xa,{omit:["layers"]});const co=new bs({"circle-sort-key":new ms(Rt.layout_circle["circle-sort-key"])});var ho={paint:new bs({"circle-radius":new ms(Rt.paint_circle["circle-radius"]),"circle-color":new ms(Rt.paint_circle["circle-color"]),"circle-blur":new ms(Rt.paint_circle["circle-blur"]),"circle-opacity":new ms(Rt.paint_circle["circle-opacity"]),"circle-translate":new ys(Rt.paint_circle["circle-translate"]),"circle-translate-anchor":new ys(Rt.paint_circle["circle-translate-anchor"]),"circle-pitch-scale":new ys(Rt.paint_circle["circle-pitch-scale"]),"circle-pitch-alignment":new ys(Rt.paint_circle["circle-pitch-alignment"]),"circle-stroke-width":new ms(Rt.paint_circle["circle-stroke-width"]),"circle-stroke-color":new ms(Rt.paint_circle["circle-stroke-color"]),"circle-stroke-opacity":new ms(Rt.paint_circle["circle-stroke-opacity"])}),layout:co},po="undefined"!=typeof Float32Array?Float32Array:Array;function fo(){var t=new po(9);return po!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[5]=0,t[6]=0,t[7]=0),t[0]=1,t[4]=1,t[8]=1,t}function yo(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function mo(t,e,r){var n=e[0],i=e[1],s=e[2],a=e[3],o=e[4],l=e[5],u=e[6],c=e[7],h=e[8],p=e[9],d=e[10],f=e[11],y=e[12],m=e[13],g=e[14],x=e[15],v=r[0],b=r[1],w=r[2],_=r[3];return t[0]=v*n+b*o+w*h+_*y,t[1]=v*i+b*l+w*p+_*m,t[2]=v*s+b*u+w*d+_*g,t[3]=v*a+b*c+w*f+_*x,t[4]=(v=r[4])*n+(b=r[5])*o+(w=r[6])*h+(_=r[7])*y,t[5]=v*i+b*l+w*p+_*m,t[6]=v*s+b*u+w*d+_*g,t[7]=v*a+b*c+w*f+_*x,t[8]=(v=r[8])*n+(b=r[9])*o+(w=r[10])*h+(_=r[11])*y,t[9]=v*i+b*l+w*p+_*m,t[10]=v*s+b*u+w*d+_*g,t[11]=v*a+b*c+w*f+_*x,t[12]=(v=r[12])*n+(b=r[13])*o+(w=r[14])*h+(_=r[15])*y,t[13]=v*i+b*l+w*p+_*m,t[14]=v*s+b*u+w*d+_*g,t[15]=v*a+b*c+w*f+_*x,t}Math.hypot||(Math.hypot=function(){for(var t=0,e=arguments.length;e--;)t+=arguments[e]*arguments[e];return Math.sqrt(t)});var go=mo;function xo(){var t=new po(3);return po!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0),t}function vo(t){return Math.hypot(t[0],t[1],t[2])}function bo(t,e,r){var n=new po(3);return n[0]=t,n[1]=e,n[2]=r,n}function wo(t,e,r){return t[0]=e[0]-r[0],t[1]=e[1]-r[1],t[2]=e[2]-r[2],t}function _o(t,e,r){return t[0]=e[0]*r[0],t[1]=e[1]*r[1],t[2]=e[2]*r[2],t}function ko(t,e,r,n){return t[0]=e[0]+r[0]*n,t[1]=e[1]+r[1]*n,t[2]=e[2]+r[2]*n,t}function Ao(t,e){var r=e[0],n=e[1],i=e[2],s=r*r+n*n+i*i;return s>0&&(s=1/Math.sqrt(s)),t[0]=e[0]*s,t[1]=e[1]*s,t[2]=e[2]*s,t}function So(t,e,r){var n=r[0],i=r[1],s=r[2],a=e[0],o=e[1],l=e[2],u=i*l-s*o,c=s*a-n*l,h=n*o-i*a,p=i*h-s*c,d=s*u-n*h,f=n*c-i*u,y=2*r[3];return c*=y,h*=y,d*=2,f*=2,t[0]=a+(u*=y)+(p*=2),t[1]=o+c+d,t[2]=l+h+f,t}var Io,zo=wo,To=_o,Mo=vo;function Eo(t,e,r){var n=e[0],i=e[1],s=e[2],a=e[3];return t[0]=r[0]*n+r[4]*i+r[8]*s+r[12]*a,t[1]=r[1]*n+r[5]*i+r[9]*s+r[13]*a,t[2]=r[2]*n+r[6]*i+r[10]*s+r[14]*a,t[3]=r[3]*n+r[7]*i+r[11]*s+r[15]*a,t}function Bo(){var t=new po(4);return po!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0),t[3]=1,t}function Co(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t}function Po(t,e,r){r*=.5;var n=e[0],i=e[1],s=e[2],a=e[3],o=Math.sin(r),l=Math.cos(r);return t[0]=n*l+a*o,t[1]=i*l+s*o,t[2]=s*l-i*o,t[3]=a*l-n*o,t}function Do(t,e,r){const n=Eo([],[t.x,t.y,e,1],r);return new i(n[0]/n[3],n[1]/n[3])}xo(),Io=new po(4),po!=Float32Array&&(Io[0]=0,Io[1]=0,Io[2]=0,Io[3]=0),xo(),bo(1,0,0),bo(0,1,0),Bo(),Bo(),fo();const Vo=bo(0,0,0),Lo=bo(0,0,1);function Fo(t,e){const r=xo();return Vo[2]=e,t.intersectsPlane(Vo,Lo,r),new i(r[0],r[1])}class Ro extends Xa{}function Uo(t,{width:e,height:r},n,i){if(i){if(i instanceof Uint8ClampedArray)i=new Uint8Array(i.buffer);else if(i.length!==e*r*n)throw new RangeError("mismatched image size")}else i=new Uint8Array(e*r*n);return t.width=e,t.height=r,t.data=i,t}function $o(t,{width:e,height:r},n){if(e===t.width&&r===t.height)return;const i=Uo({},{width:e,height:r},n);Oo(t,i,{x:0,y:0},{x:0,y:0},{width:Math.min(t.width,e),height:Math.min(t.height,r)},n),t.width=e,t.height=r,t.data=i.data;}function Oo(t,e,r,n,i,s){if(0===i.width||0===i.height)return e;if(i.width>t.width||i.height>t.height||r.x>t.width-i.width||r.y>t.height-i.height)throw new RangeError("out of range source coordinates for image copy");if(i.width>e.width||i.height>e.height||n.x>e.width-i.width||n.y>e.height-i.height)throw new RangeError("out of range destination coordinates for image copy");const a=t.data,o=e.data;for(let l=0;l<i.height;l++){const u=((r.y+l)*t.width+r.x)*s,c=((n.y+l)*e.width+n.x)*s;for(let t=0;t<i.width*s;t++)o[c+t]=a[u+t];}return e}oi("HeatmapBucket",Ro,{omit:["layers"]});class qo{constructor(t,e){Uo(this,t,1,e);}resize(t){$o(this,t,1);}clone(){return new qo({width:this.width,height:this.height},new Uint8Array(this.data))}static copy(t,e,r,n,i){Oo(t,e,r,n,i,1);}}class No{constructor(t,e){Uo(this,t,4,e);}resize(t){$o(this,t,4);}replace(t,e){e?this.data.set(t):this.data=t instanceof Uint8ClampedArray?new Uint8Array(t.buffer):t;}clone(){return new No({width:this.width,height:this.height},new Uint8Array(this.data))}static copy(t,e,r,n,i){Oo(t,e,r,n,i,4);}}oi("AlphaImage",qo),oi("RGBAImage",No);var jo={paint:new bs({"heatmap-radius":new ms(Rt.paint_heatmap["heatmap-radius"]),"heatmap-weight":new ms(Rt.paint_heatmap["heatmap-weight"]),"heatmap-intensity":new ys(Rt.paint_heatmap["heatmap-intensity"]),"heatmap-color":new vs(Rt.paint_heatmap["heatmap-color"]),"heatmap-opacity":new ys(Rt.paint_heatmap["heatmap-opacity"])})};function Go(t){const e={},r=t.resolution||256,n=t.clips?t.clips.length:1,i=t.image||new No({width:r,height:n}),s=(r,n,s)=>{e[t.evaluationKey]=s;const a=t.expression.evaluate(e);i.data[r+n+0]=Math.floor(255*a.r/a.a),i.data[r+n+1]=Math.floor(255*a.g/a.a),i.data[r+n+2]=Math.floor(255*a.b/a.a),i.data[r+n+3]=Math.floor(255*a.a);};if(t.clips)for(let e=0,i=0;e<n;++e,i+=4*r)for(let n=0,a=0;n<r;n++,a+=4){const o=n/(r-1),{start:l,end:u}=t.clips[e];s(i,a,l*(1-o)+u*o);}else for(let t=0,e=0;t<r;t++,e+=4)s(0,e,t/(r-1));return i}var Zo={paint:new bs({"hillshade-illumination-direction":new ys(Rt.paint_hillshade["hillshade-illumination-direction"]),"hillshade-illumination-anchor":new ys(Rt.paint_hillshade["hillshade-illumination-anchor"]),"hillshade-exaggeration":new ys(Rt.paint_hillshade["hillshade-exaggeration"]),"hillshade-shadow-color":new ys(Rt.paint_hillshade["hillshade-shadow-color"]),"hillshade-highlight-color":new ys(Rt.paint_hillshade["hillshade-highlight-color"]),"hillshade-accent-color":new ys(Rt.paint_hillshade["hillshade-accent-color"])})};const Xo=Ss([{name:"a_pos",components:2,type:"Int16"}],4),{members:Ko}=Xo;var Ho=Jo,Yo=Jo;function Jo(t,e,r){r=r||2;var n,i,s,a,o,l,u,c=e&&e.length,h=c?e[0]*r:t.length,p=Wo(t,0,h,r,!0),d=[];if(!p||p.next===p.prev)return d;if(c&&(p=function(t,e,r,n){var i,s,a,o=[];for(i=0,s=e.length;i<s;i++)(a=Wo(t,e[i]*n,i<s-1?e[i+1]*n:t.length,n,!1))===a.next&&(a.steiner=!0),o.push(ul(a));for(o.sort(sl),i=0;i<o.length;i++)al(o[i],r),r=Qo(r,r.next);return r}(t,e,p,r)),t.length>80*r){n=s=t[0],i=a=t[1];for(var f=r;f<h;f+=r)(o=t[f])<n&&(n=o),(l=t[f+1])<i&&(i=l),o>s&&(s=o),l>a&&(a=l);u=0!==(u=Math.max(s-n,a-i))?1/u:0;}return tl(p,d,r,n,i,u),d}function Wo(t,e,r,n,i){var s,a;if(i===_l(t,e,r,n)>0)for(s=e;s<r;s+=n)a=vl(s,t[s],t[s+1],a);else for(s=r-n;s>=e;s-=n)a=vl(s,t[s],t[s+1],a);return a&&dl(a,a.next)&&(bl(a),a=a.next),a}function Qo(t,e){if(!t)return t;e||(e=t);var r,n=t;do{if(r=!1,n.steiner||!dl(n,n.next)&&0!==pl(n.prev,n,n.next))n=n.next;else {if(bl(n),(n=e=n.prev)===n.next)break;r=!0;}}while(r||n!==e);return e}function tl(t,e,r,n,i,s,a){if(t){!a&&s&&function(t,e,r,n){var i=t;do{null===i.z&&(i.z=ll(i.x,i.y,e,r,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;}while(i!==t);i.prevZ.nextZ=null,i.prevZ=null,function(t){var e,r,n,i,s,a,o,l,u=1;do{for(r=t,t=null,s=null,a=0;r;){for(a++,n=r,o=0,e=0;e<u&&(o++,n=n.nextZ);e++);for(l=u;o>0||l>0&&n;)0!==o&&(0===l||!n||r.z<=n.z)?(i=r,r=r.nextZ,o--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:t=i,i.prevZ=s,s=i;r=n;}s.nextZ=null,u*=2;}while(a>1)}(i);}(t,n,i,s);for(var o,l,u=t;t.prev!==t.next;)if(o=t.prev,l=t.next,s?rl(t,n,i,s):el(t))e.push(o.i/r),e.push(t.i/r),e.push(l.i/r),bl(t),t=l.next,u=l.next;else if((t=l)===u){a?1===a?tl(t=nl(Qo(t),e,r),e,r,n,i,s,2):2===a&&il(t,e,r,n,i,s):tl(Qo(t),e,r,n,i,s,1);break}}}function el(t){var e=t.prev,r=t,n=t.next;if(pl(e,r,n)>=0)return !1;for(var i=t.next.next;i!==t.prev;){if(cl(e.x,e.y,r.x,r.y,n.x,n.y,i.x,i.y)&&pl(i.prev,i,i.next)>=0)return !1;i=i.next;}return !0}function rl(t,e,r,n){var i=t.prev,s=t,a=t.next;if(pl(i,s,a)>=0)return !1;for(var o=i.x>s.x?i.x>a.x?i.x:a.x:s.x>a.x?s.x:a.x,l=i.y>s.y?i.y>a.y?i.y:a.y:s.y>a.y?s.y:a.y,u=ll(i.x<s.x?i.x<a.x?i.x:a.x:s.x<a.x?s.x:a.x,i.y<s.y?i.y<a.y?i.y:a.y:s.y<a.y?s.y:a.y,e,r,n),c=ll(o,l,e,r,n),h=t.prevZ,p=t.nextZ;h&&h.z>=u&&p&&p.z<=c;){if(h!==t.prev&&h!==t.next&&cl(i.x,i.y,s.x,s.y,a.x,a.y,h.x,h.y)&&pl(h.prev,h,h.next)>=0)return !1;if(h=h.prevZ,p!==t.prev&&p!==t.next&&cl(i.x,i.y,s.x,s.y,a.x,a.y,p.x,p.y)&&pl(p.prev,p,p.next)>=0)return !1;p=p.nextZ;}for(;h&&h.z>=u;){if(h!==t.prev&&h!==t.next&&cl(i.x,i.y,s.x,s.y,a.x,a.y,h.x,h.y)&&pl(h.prev,h,h.next)>=0)return !1;h=h.prevZ;}for(;p&&p.z<=c;){if(p!==t.prev&&p!==t.next&&cl(i.x,i.y,s.x,s.y,a.x,a.y,p.x,p.y)&&pl(p.prev,p,p.next)>=0)return !1;p=p.nextZ;}return !0}function nl(t,e,r){var n=t;do{var i=n.prev,s=n.next.next;!dl(i,s)&&fl(i,n,n.next,s)&&gl(i,s)&&gl(s,i)&&(e.push(i.i/r),e.push(n.i/r),e.push(s.i/r),bl(n),bl(n.next),n=t=s),n=n.next;}while(n!==t);return Qo(n)}function il(t,e,r,n,i,s){var a=t;do{for(var o=a.next.next;o!==a.prev;){if(a.i!==o.i&&hl(a,o)){var l=xl(a,o);return a=Qo(a,a.next),l=Qo(l,l.next),tl(a,e,r,n,i,s),void tl(l,e,r,n,i,s)}o=o.next;}a=a.next;}while(a!==t)}function sl(t,e){return t.x-e.x}function al(t,e){if(e=function(t,e){var r,n=e,i=t.x,s=t.y,a=-1/0;do{if(s<=n.y&&s>=n.next.y&&n.next.y!==n.y){var o=n.x+(s-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(o<=i&&o>a){if(a=o,o===i){if(s===n.y)return n;if(s===n.next.y)return n.next}r=n.x<n.next.x?n:n.next;}}n=n.next;}while(n!==e);if(!r)return null;if(i===a)return r;var l,u=r,c=r.x,h=r.y,p=1/0;n=r;do{i>=n.x&&n.x>=c&&i!==n.x&&cl(s<h?i:a,s,c,h,s<h?a:i,s,n.x,n.y)&&(l=Math.abs(s-n.y)/(i-n.x),gl(n,t)&&(l<p||l===p&&(n.x>r.x||n.x===r.x&&ol(r,n)))&&(r=n,p=l)),n=n.next;}while(n!==u);return r}(t,e)){var r=xl(e,t);Qo(e,e.next),Qo(r,r.next);}}function ol(t,e){return pl(t.prev,t,e.prev)<0&&pl(e.next,t,t.next)<0}function ll(t,e,r,n,i){return (t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t=32767*(t-r)*i)|t<<8))|t<<4))|t<<2))|t<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=32767*(e-n)*i)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function ul(t){var e=t,r=t;do{(e.x<r.x||e.x===r.x&&e.y<r.y)&&(r=e),e=e.next;}while(e!==t);return r}function cl(t,e,r,n,i,s,a,o){return (i-a)*(e-o)-(t-a)*(s-o)>=0&&(t-a)*(n-o)-(r-a)*(e-o)>=0&&(r-a)*(s-o)-(i-a)*(n-o)>=0}function hl(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!function(t,e){var r=t;do{if(r.i!==t.i&&r.next.i!==t.i&&r.i!==e.i&&r.next.i!==e.i&&fl(r,r.next,t,e))return !0;r=r.next;}while(r!==t);return !1}(t,e)&&(gl(t,e)&&gl(e,t)&&function(t,e){var r=t,n=!1,i=(t.x+e.x)/2,s=(t.y+e.y)/2;do{r.y>s!=r.next.y>s&&r.next.y!==r.y&&i<(r.next.x-r.x)*(s-r.y)/(r.next.y-r.y)+r.x&&(n=!n),r=r.next;}while(r!==t);return n}(t,e)&&(pl(t.prev,t,e.prev)||pl(t,e.prev,e))||dl(t,e)&&pl(t.prev,t,t.next)>0&&pl(e.prev,e,e.next)>0)}function pl(t,e,r){return (e.y-t.y)*(r.x-e.x)-(e.x-t.x)*(r.y-e.y)}function dl(t,e){return t.x===e.x&&t.y===e.y}function fl(t,e,r,n){var i=ml(pl(t,e,r)),s=ml(pl(t,e,n)),a=ml(pl(r,n,t)),o=ml(pl(r,n,e));return i!==s&&a!==o||!(0!==i||!yl(t,r,e))||!(0!==s||!yl(t,n,e))||!(0!==a||!yl(r,t,n))||!(0!==o||!yl(r,e,n))}function yl(t,e,r){return e.x<=Math.max(t.x,r.x)&&e.x>=Math.min(t.x,r.x)&&e.y<=Math.max(t.y,r.y)&&e.y>=Math.min(t.y,r.y)}function ml(t){return t>0?1:t<0?-1:0}function gl(t,e){return pl(t.prev,t,t.next)<0?pl(t,e,t.next)>=0&&pl(t,t.prev,e)>=0:pl(t,e,t.prev)<0||pl(t,t.next,e)<0}function xl(t,e){var r=new wl(t.i,t.x,t.y),n=new wl(e.i,e.x,e.y),i=t.next,s=e.prev;return t.next=e,e.prev=t,r.next=i,i.prev=r,n.next=r,r.prev=n,s.next=n,n.prev=s,n}function vl(t,e,r,n){var i=new wl(t,e,r);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function bl(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ);}function wl(t,e,r){this.i=t,this.x=e,this.y=r,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1;}function _l(t,e,r,n){for(var i=0,s=e,a=r-n;s<r;s+=n)i+=(t[a]-t[s])*(t[s+1]+t[a+1]),a=s;return i}function kl(t,e,r,n,i){Al(t,e,r||0,n||t.length-1,i||Il);}function Al(t,e,r,n,i){for(;n>r;){if(n-r>600){var s=n-r+1,a=e-r+1,o=Math.log(s),l=.5*Math.exp(2*o/3),u=.5*Math.sqrt(o*l*(s-l)/s)*(a-s/2<0?-1:1);Al(t,e,Math.max(r,Math.floor(e-a*l/s+u)),Math.min(n,Math.floor(e+(s-a)*l/s+u)),i);}var c=t[e],h=r,p=n;for(Sl(t,r,e),i(t[n],c)>0&&Sl(t,r,n);h<p;){for(Sl(t,h,p),h++,p--;i(t[h],c)<0;)h++;for(;i(t[p],c)>0;)p--;}0===i(t[r],c)?Sl(t,r,p):Sl(t,++p,n),p<=e&&(r=p+1),e<=p&&(n=p-1);}}function Sl(t,e,r){var n=t[e];t[e]=t[r],t[r]=n;}function Il(t,e){return t<e?-1:t>e?1:0}function zl(t,e){const r=t.length;if(r<=1)return [t];const n=[];let i,s;for(let e=0;e<r;e++){const r=P(t[e]);0!==r&&(t[e].area=Math.abs(r),void 0===s&&(s=r<0),s===r<0?(i&&n.push(i),i=[t[e]]):i.push(t[e]));}if(i&&n.push(i),e>1)for(let t=0;t<n.length;t++)n[t].length<=e||(kl(n[t],e,1,n[t].length-1,Tl),n[t]=n[t].slice(0,e));return n}function Tl(t,e){return e.area-t.area}function Ml(t,e,r){const n=r.patternDependencies;let i=!1;for(const r of e){const e=r.paint.get(`${t}-pattern`);e.isConstant()||(i=!0);const s=e.constantOr(null);s&&(i=!0,n[s.to]=!0,n[s.from]=!0);}return i}function El(t,e,r,n,i){const s=i.patternDependencies;for(const a of e){const e=a.paint.get(`${t}-pattern`).value;if("constant"!==e.kind){let t=e.evaluate({zoom:n-1},r,{},i.availableImages),o=e.evaluate({zoom:n},r,{},i.availableImages),l=e.evaluate({zoom:n+1},r,{},i.availableImages);t=t&&t.name?t.name:t,o=o&&o.name?o.name:o,l=l&&l.name?l.name:l,s[t]=!0,s[o]=!0,s[l]=!0,r.patterns[a.id]={min:t,mid:o,max:l};}}return r}Jo.deviation=function(t,e,r,n){var i=e&&e.length,s=Math.abs(_l(t,0,i?e[0]*r:t.length,r));if(i)for(var a=0,o=e.length;a<o;a++)s-=Math.abs(_l(t,e[a]*r,a<o-1?e[a+1]*r:t.length,r));var l=0;for(a=0;a<n.length;a+=3){var u=n[a]*r,c=n[a+1]*r,h=n[a+2]*r;l+=Math.abs((t[u]-t[h])*(t[c+1]-t[u+1])-(t[u]-t[c])*(t[h+1]-t[u+1]));}return 0===s&&0===l?0:Math.abs((l-s)/s)},Jo.flatten=function(t){for(var e=t[0][0].length,r={vertices:[],holes:[],dimensions:e},n=0,i=0;i<t.length;i++){for(var s=0;s<t[i].length;s++)for(var a=0;a<e;a++)r.vertices.push(t[i][s][a]);i>0&&r.holes.push(n+=t[i-1].length);}return r},Ho.default=Yo;class Bl{constructor(t){this.zoom=t.zoom,this.overscaling=t.overscaling,this.layers=t.layers,this.layerIds=this.layers.map((t=>t.id)),this.index=t.index,this.hasPattern=!1,this.patternFeatures=[],this.layoutVertexArray=new zs,this.indexArray=new $s,this.indexArray2=new Zs,this.programConfigurations=new Ea(t.layers,t.zoom),this.segments=new $a,this.segments2=new $a,this.stateDependentLayerIds=this.layers.filter((t=>t.isStateDependent())).map((t=>t.id));}populate(t,e,r){this.hasPattern=Ml("fill",this.layers,e);const n=this.layers[0].layout.get("fill-sort-key"),i=[];for(const{feature:s,id:a,index:o,sourceLayerIndex:l}of t){const t=this.layers[0]._featureFilter.needGeometry,u=Ga(s,t);if(!this.layers[0]._featureFilter.filter(new as(this.zoom),u,r))continue;const c=n?n.evaluate(u,{},r,e.availableImages):void 0,h={id:a,properties:s.properties,type:s.type,sourceLayerIndex:l,index:o,geometry:t?u.geometry:ja(s),patterns:{},sortKey:c};i.push(h);}n&&i.sort(((t,e)=>t.sortKey-e.sortKey));for(const n of i){const{geometry:i,index:s,sourceLayerIndex:a}=n;if(this.hasPattern){const t=El("fill",this.layers,n,this.zoom,e);this.patternFeatures.push(t);}else this.addFeature(n,i,s,r,{});e.featureIndex.insert(t[s].feature,i,s,a,this.index);}}update(t,e,r){this.stateDependentLayers.length&&this.programConfigurations.updatePaintArrays(t,e,this.stateDependentLayers,r);}addFeatures(t,e,r){for(const t of this.patternFeatures)this.addFeature(t,t.geometry,t.index,e,r);}isEmpty(){return 0===this.layoutVertexArray.length}uploadPending(){return !this.uploaded||this.programConfigurations.needsUpload}upload(t){this.uploaded||(this.layoutVertexBuffer=t.createVertexBuffer(this.layoutVertexArray,Ko),this.indexBuffer=t.createIndexBuffer(this.indexArray),this.indexBuffer2=t.createIndexBuffer(this.indexArray2)),this.programConfigurations.upload(t),this.uploaded=!0;}destroy(){this.layoutVertexBuffer&&(this.layoutVertexBuffer.destroy(),this.indexBuffer.destroy(),this.indexBuffer2.destroy(),this.programConfigurations.destroy(),this.segments.destroy(),this.segments2.destroy());}addFeature(t,e,r,n,i){for(const t of zl(e,500)){let e=0;for(const r of t)e+=r.length;const r=this.segments.prepareSegment(e,this.layoutVertexArray,this.indexArray),n=r.vertexLength,i=[],s=[];for(const e of t){if(0===e.length)continue;e!==t[0]&&s.push(i.length/2);const r=this.segments2.prepareSegment(e.length,this.layoutVertexArray,this.indexArray2),n=r.vertexLength;this.layoutVertexArray.emplaceBack(e[0].x,e[0].y),this.indexArray2.emplaceBack(n+e.length-1,n),i.push(e[0].x),i.push(e[0].y);for(let t=1;t<e.length;t++)this.layoutVertexArray.emplaceBack(e[t].x,e[t].y),this.indexArray2.emplaceBack(n+t-1,n+t),i.push(e[t].x),i.push(e[t].y);r.vertexLength+=e.length,r.primitiveLength+=e.length;}const a=Ho(i,s);for(let t=0;t<a.length;t+=3)this.indexArray.emplaceBack(n+a[t],n+a[t+1],n+a[t+2]);r.vertexLength+=e,r.primitiveLength+=a.length/3;}this.programConfigurations.populatePaintArrays(this.layoutVertexArray.length,t,r,i,n);}}oi("FillBucket",Bl,{omit:["layers","patternFeatures"]});const Cl=new bs({"fill-sort-key":new ms(Rt.layout_fill["fill-sort-key"])});var Pl={paint:new bs({"fill-antialias":new ys(Rt.paint_fill["fill-antialias"]),"fill-opacity":new ms(Rt.paint_fill["fill-opacity"]),"fill-color":new ms(Rt.paint_fill["fill-color"]),"fill-outline-color":new ms(Rt.paint_fill["fill-outline-color"]),"fill-translate":new ys(Rt.paint_fill["fill-translate"]),"fill-translate-anchor":new ys(Rt.paint_fill["fill-translate-anchor"]),"fill-pattern":new gs(Rt.paint_fill["fill-pattern"])}),layout:Cl};const Dl=Ss([{name:"a_pos_normal_ed",components:4,type:"Int16"}]),Vl=Ss([{name:"a_centroid_pos",components:2,type:"Uint16"}]),{members:Ll}=Dl;var Fl=Rl;function Rl(t,e,r,n,i){this.properties={},this.extent=r,this.type=0,this._pbf=t,this._geometry=-1,this._keys=n,this._values=i,t.readFields(Ul,this,e);}function Ul(t,e,r){1==t?e.id=r.readVarint():2==t?function(t,e){for(var r=t.readVarint()+t.pos;t.pos<r;){var n=e._keys[t.readVarint()],i=e._values[t.readVarint()];e.properties[n]=i;}}(r,e):3==t?e.type=r.readVarint():4==t&&(e._geometry=r.pos);}function $l(t){for(var e,r,n=0,i=0,s=t.length,a=s-1;i<s;a=i++)n+=((r=t[a]).x-(e=t[i]).x)*(e.y+r.y);return n}Rl.types=["Unknown","Point","LineString","Polygon"],Rl.prototype.loadGeometry=function(){var t=this._pbf;t.pos=this._geometry;for(var e,r=t.readVarint()+t.pos,n=1,s=0,a=0,o=0,l=[];t.pos<r;){if(s<=0){var u=t.readVarint();n=7&u,s=u>>3;}if(s--,1===n||2===n)a+=t.readSVarint(),o+=t.readSVarint(),1===n&&(e&&l.push(e),e=[]),e.push(new i(a,o));else {if(7!==n)throw new Error("unknown command "+n);e&&e.push(e[0].clone());}}return e&&l.push(e),l},Rl.prototype.bbox=function(){var t=this._pbf;t.pos=this._geometry;for(var e=t.readVarint()+t.pos,r=1,n=0,i=0,s=0,a=1/0,o=-1/0,l=1/0,u=-1/0;t.pos<e;){if(n<=0){var c=t.readVarint();r=7&c,n=c>>3;}if(n--,1===r||2===r)(i+=t.readSVarint())<a&&(a=i),i>o&&(o=i),(s+=t.readSVarint())<l&&(l=s),s>u&&(u=s);else if(7!==r)throw new Error("unknown command "+r)}return [a,l,o,u]},Rl.prototype.toGeoJSON=function(t,e,r){var n,i,s=this.extent*Math.pow(2,r),a=this.extent*t,o=this.extent*e,l=this.loadGeometry(),u=Rl.types[this.type];function c(t){for(var e=0;e<t.length;e++){var r=t[e];t[e]=[360*(r.x+a)/s-180,360/Math.PI*Math.atan(Math.exp((180-360*(r.y+o)/s)*Math.PI/180))-90];}}switch(this.type){case 1:var h=[];for(n=0;n<l.length;n++)h[n]=l[n][0];c(l=h);break;case 2:for(n=0;n<l.length;n++)c(l[n]);break;case 3:for(l=function(t){var e=t.length;if(e<=1)return [t];for(var r,n,i=[],s=0;s<e;s++){var a=$l(t[s]);0!==a&&(void 0===n&&(n=a<0),n===a<0?(r&&i.push(r),r=[t[s]]):r.push(t[s]));}return r&&i.push(r),i}(l),n=0;n<l.length;n++)for(i=0;i<l[n].length;i++)c(l[n][i]);}1===l.length?l=l[0]:u="Multi"+u;var p={type:"Feature",geometry:{type:u,coordinates:l},properties:this.properties};return "id"in this&&(p.id=this.id),p};var Ol=ql;function ql(t,e){this.version=1,this.name=null,this.extent=4096,this.length=0,this._pbf=t,this._keys=[],this._values=[],this._features=[],t.readFields(Nl,this,e),this.length=this._features.length;}function Nl(t,e,r){15===t?e.version=r.readVarint():1===t?e.name=r.readString():5===t?e.extent=r.readVarint():2===t?e._features.push(r.pos):3===t?e._keys.push(r.readString()):4===t&&e._values.push(function(t){for(var e=null,r=t.readVarint()+t.pos;t.pos<r;){var n=t.readVarint()>>3;e=1===n?t.readString():2===n?t.readFloat():3===n?t.readDouble():4===n?t.readVarint64():5===n?t.readVarint():6===n?t.readSVarint():7===n?t.readBoolean():null;}return e}(r));}function jl(t,e,r){if(3===t){var n=new Ol(r,r.readVarint()+r.pos);n.length&&(e[n.name]=n);}}ql.prototype.feature=function(t){if(t<0||t>=this._features.length)throw new Error("feature index out of bounds");this._pbf.pos=this._features[t];var e=this._pbf.readVarint()+this._pbf.pos;return new Fl(this._pbf,e,this.extent,this._keys,this._values)};var Gl={VectorTile:function(t,e){this.layers=t.readFields(jl,{},e);},VectorTileFeature:Fl,VectorTileLayer:Ol};const Zl=Gl.VectorTileFeature.types,Xl=Math.pow(2,13);function Kl(t,e,r,n,i,s,a,o){t.emplaceBack((e<<1)+a,(r<<1)+s,(Math.floor(n*Xl)<<1)+i,Math.round(o));}class Hl{constructor(){this.acc=new i(0,0),this.polyCount=[];}startRing(t){this.currentPolyCount={edges:0,top:0},this.polyCount.push(this.currentPolyCount),this.min||(this.min=new i(t.x,t.y),this.max=new i(t.x,t.y));}append(t,e){this.currentPolyCount.edges++,this.acc._add(t);let r=!!this.borders;const n=this.min,i=this.max;t.x<n.x?(n.x=t.x,r=!0):t.x>i.x&&(i.x=t.x,r=!0),t.y<n.y?(n.y=t.y,r=!0):t.y>i.y&&(i.y=t.y,r=!0),((0===t.x||t.x===Oa)&&t.x===e.x)!=((0===t.y||t.y===Oa)&&t.y===e.y)&&this.processBorderOverlap(t,e),r&&this.checkBorderIntersection(t,e);}checkBorderIntersection(t,e){e.x<0!=t.x<0&&this.addBorderIntersection(0,rr(e.y,t.y,(0-e.x)/(t.x-e.x))),e.x>Oa!=t.x>Oa&&this.addBorderIntersection(1,rr(e.y,t.y,(Oa-e.x)/(t.x-e.x))),e.y<0!=t.y<0&&this.addBorderIntersection(2,rr(e.x,t.x,(0-e.y)/(t.y-e.y))),e.y>Oa!=t.y>Oa&&this.addBorderIntersection(3,rr(e.x,t.x,(Oa-e.y)/(t.y-e.y)));}addBorderIntersection(t,e){this.borders||(this.borders=[[Number.MAX_VALUE,-Number.MAX_VALUE],[Number.MAX_VALUE,-Number.MAX_VALUE],[Number.MAX_VALUE,-Number.MAX_VALUE],[Number.MAX_VALUE,-Number.MAX_VALUE]]);const r=this.borders[t];e<r[0]&&(r[0]=e),e>r[1]&&(r[1]=e);}processBorderOverlap(t,e){if(t.x===e.x){if(t.y===e.y)return;const r=0===t.x?0:1;this.addBorderIntersection(r,e.y),this.addBorderIntersection(r,t.y);}else {const r=0===t.y?2:3;this.addBorderIntersection(r,e.x),this.addBorderIntersection(r,t.x);}}centroid(){const t=this.polyCount.reduce(((t,e)=>t+e.edges),0);return 0!==t?this.acc.div(t)._round():new i(0,0)}span(){return new i(this.max.x-this.min.x,this.max.y-this.min.y)}intersectsCount(){return this.borders.reduce(((t,e)=>t+ +(e[0]!==Number.MAX_VALUE)),0)}}class Yl{constructor(t){this.zoom=t.zoom,this.overscaling=t.overscaling,this.layers=t.layers,this.layerIds=this.layers.map((t=>t.id)),this.index=t.index,this.hasPattern=!1,this.layoutVertexArray=new Ts,this.centroidVertexArray=new aa,this.indexArray=new $s,this.programConfigurations=new Ea(t.layers,t.zoom),this.segments=new $a,this.stateDependentLayerIds=this.layers.filter((t=>t.isStateDependent())).map((t=>t.id)),this.enableTerrain=t.enableTerrain;}populate(t,e,r){this.features=[],this.hasPattern=Ml("fill-extrusion",this.layers,e),this.featuresOnBorder=[],this.borders=[[],[],[],[]],this.borderDone=[!1,!1,!1,!1],this.tileToMeter=function(t){const e=Math.exp(Math.PI*(1-t.y/(1<<t.z)*2));return 80150034*e/(e*e+1)/Oa/(1<<t.z)}(r);for(const{feature:n,id:i,index:s,sourceLayerIndex:a}of t){const t=this.layers[0]._featureFilter.needGeometry,o=Ga(n,t);if(!this.layers[0]._featureFilter.filter(new as(this.zoom),o,r))continue;const l={id:i,sourceLayerIndex:a,index:s,geometry:t?o.geometry:ja(n),properties:n.properties,type:n.type,patterns:{}},u=this.layoutVertexArray.length;this.hasPattern?this.features.push(El("fill-extrusion",this.layers,l,this.zoom,e)):this.addFeature(l,l.geometry,s,r,{}),e.featureIndex.insert(n,l.geometry,s,a,this.index,u);}this.sortBorders();}addFeatures(t,e,r){for(const t of this.features){const{geometry:n}=t;this.addFeature(t,n,t.index,e,r);}this.sortBorders();}update(t,e,r){this.stateDependentLayers.length&&this.programConfigurations.updatePaintArrays(t,e,this.stateDependentLayers,r);}isEmpty(){return 0===this.layoutVertexArray.length}uploadPending(){return !this.uploaded||this.programConfigurations.needsUpload}upload(t){this.uploaded||(this.layoutVertexBuffer=t.createVertexBuffer(this.layoutVertexArray,Ll),this.indexBuffer=t.createIndexBuffer(this.indexArray)),this.programConfigurations.upload(t),this.uploaded=!0;}uploadCentroid(t){0!==this.centroidVertexArray.length&&(this.centroidVertexBuffer?this.needsCentroidUpdate&&this.centroidVertexBuffer.updateData(this.centroidVertexArray):this.centroidVertexBuffer=t.createVertexBuffer(this.centroidVertexArray,Vl.members,!0),this.needsCentroidUpdate=!1);}destroy(){this.layoutVertexBuffer&&(this.layoutVertexBuffer.destroy(),this.centroidVertexBuffer&&this.centroidVertexBuffer.destroy(),this.indexBuffer.destroy(),this.programConfigurations.destroy(),this.segments.destroy());}addFeature(t,e,r,n,i){const s=this.enableTerrain&&t.properties&&"Polygon"===Zl[t.type]?new Hl:null;for(const r of zl(e,500)){let e=0,n=this.segments.prepareSegment(4,this.layoutVertexArray,this.indexArray);if(0===r.length||(a=r[0]).every((t=>t.x<=0))||a.every((t=>t.x>=Oa))||a.every((t=>t.y<=0))||a.every((t=>t.y>=Oa)))continue;for(let t=0;t<r.length;t++){const i=r[t];if(0===i.length)continue;e+=i.length;let a=0;s&&s.startRing(i[0]);for(let t=0;t<i.length;t++){const e=i[t];if(t>=1){const r=i[t-1];if(!Jl(e,r)){s&&s.append(e,r),n.vertexLength+4>$a.MAX_VERTEX_ARRAY_LENGTH&&(n=this.segments.prepareSegment(4,this.layoutVertexArray,this.indexArray));const t=e.sub(r)._perp(),i=t.x/(Math.abs(t.x)+Math.abs(t.y)),o=t.y>0?1:0,l=r.dist(e);a+l>32768&&(a=0),Kl(this.layoutVertexArray,e.x,e.y,i,o,0,0,a),Kl(this.layoutVertexArray,e.x,e.y,i,o,0,1,a),a+=l,Kl(this.layoutVertexArray,r.x,r.y,i,o,0,0,a),Kl(this.layoutVertexArray,r.x,r.y,i,o,0,1,a);const u=n.vertexLength;this.indexArray.emplaceBack(u,u+2,u+1),this.indexArray.emplaceBack(u+1,u+2,u+3),n.vertexLength+=4,n.primitiveLength+=2;}}}}if(n.vertexLength+e>$a.MAX_VERTEX_ARRAY_LENGTH&&(n=this.segments.prepareSegment(e,this.layoutVertexArray,this.indexArray)),"Polygon"!==Zl[t.type])continue;const i=[],o=[],l=n.vertexLength;for(let t=0;t<r.length;t++){const e=r[t];if(0!==e.length){e!==r[0]&&o.push(i.length/2);for(let t=0;t<e.length;t++){const r=e[t];Kl(this.layoutVertexArray,r.x,r.y,0,0,1,1,0),i.push(r.x),i.push(r.y),s&&s.currentPolyCount.top++;}}}const u=Ho(i,o);for(let t=0;t<u.length;t+=3)this.indexArray.emplaceBack(l+u[t],l+u[t+2],l+u[t+1]);n.primitiveLength+=u.length/3,n.vertexLength+=e;}var a;if(s&&s.polyCount.length>0){if(s.borders){s.vertexArrayOffset=this.centroidVertexArray.length;const t=s.borders,e=this.featuresOnBorder.push(s)-1;for(let r=0;r<4;r++)t[r][0]!==Number.MAX_VALUE&&this.borders[r].push(e);}this.encodeCentroid(s.borders?void 0:s.centroid(),s);}this.programConfigurations.populatePaintArrays(this.layoutVertexArray.length,t,r,i,n);}sortBorders(){for(let t=0;t<4;t++)this.borders[t].sort(((e,r)=>this.featuresOnBorder[e].borders[t][0]-this.featuresOnBorder[r].borders[t][0]));}encodeCentroid(t,e,r=!0){let n,i;if(t)if(0!==t.y){const r=e.span()._mult(this.tileToMeter);n=(Math.max(t.x,1)<<3)+Math.min(7,Math.round(r.x/10)),i=(Math.max(t.y,1)<<3)+Math.min(7,Math.round(r.y/10));}else n=Math.ceil(7*(t.x+450)),i=0;else n=0,i=+r;let s=r?this.centroidVertexArray.length:e.vertexArrayOffset;for(const t of e.polyCount){r&&this.centroidVertexArray.resize(this.centroidVertexArray.length+4*t.edges+t.top);for(let e=0;e<2*t.edges;e++)this.centroidVertexArray.emplace(s++,0,i),this.centroidVertexArray.emplace(s++,n,i);for(let e=0;e<t.top;e++)this.centroidVertexArray.emplace(s++,n,i);}}}function Jl(t,e){return t.x===e.x&&(t.x<0||t.x>Oa)||t.y===e.y&&(t.y<0||t.y>Oa)}oi("FillExtrusionBucket",Yl,{omit:["layers","features"]}),oi("PartMetadata",Hl);var Wl={paint:new bs({"fill-extrusion-opacity":new ys(Rt["paint_fill-extrusion"]["fill-extrusion-opacity"]),"fill-extrusion-color":new ms(Rt["paint_fill-extrusion"]["fill-extrusion-color"]),"fill-extrusion-translate":new ys(Rt["paint_fill-extrusion"]["fill-extrusion-translate"]),"fill-extrusion-translate-anchor":new ys(Rt["paint_fill-extrusion"]["fill-extrusion-translate-anchor"]),"fill-extrusion-pattern":new gs(Rt["paint_fill-extrusion"]["fill-extrusion-pattern"]),"fill-extrusion-height":new ms(Rt["paint_fill-extrusion"]["fill-extrusion-height"]),"fill-extrusion-base":new ms(Rt["paint_fill-extrusion"]["fill-extrusion-base"]),"fill-extrusion-vertical-gradient":new ys(Rt["paint_fill-extrusion"]["fill-extrusion-vertical-gradient"])})};function Ql(t,e){return t.x*e.x+t.y*e.y}function tu(t,e){if(1===t.length){let r=0;const n=e[r++];let i;for(;!i||n.equals(i);)if(i=e[r++],!i)return 1/0;for(;r<e.length;r++){const s=e[r],a=t[0],o=i.sub(n),l=s.sub(n),u=a.sub(n),c=Ql(o,o),h=Ql(o,l),p=Ql(l,l),d=Ql(u,o),f=Ql(u,l),y=c*p-h*h,m=(p*d-h*f)/y,g=(c*f-h*d)/y,x=n.z*(1-m-g)+i.z*m+s.z*g;if(isFinite(x))return x}return 1/0}{let t=1/0;for(const r of e)t=Math.min(t,r.z);return t}}function eu(t){const e=new i(t[0],t[1]);return e.z=t[2],e}function ru(t,e,r,n,i,s,a,o){const l=a*i.getElevationAt(t,e,!0,!0),u=0!==s[0],c=u?0===s[1]?a*(s[0]/7-450):a*function(t,e,r){const n=Math.floor(e[0]/8),i=Math.floor(e[1]/8),s=10*(e[0]-8*n),a=10*(e[1]-8*i),o=t.getElevationAt(n,i,!0,!0),l=t.getMeterToDEM(r),u=Math.floor(.5*(s*l-1)),c=Math.floor(.5*(a*l-1)),h=t.tileCoordToPixel(n,i),p=2*u+1,d=2*c+1,f=function(t,e,r,n,i){return [t.getElevationAtPixel(e,r,!0),t.getElevationAtPixel(e+i,r,!0),t.getElevationAtPixel(e,r+i,!0),t.getElevationAtPixel(e+n,r+i,!0)]}(t,h.x-u,h.y-c,p,d),y=Math.abs(f[0]-f[1]),m=Math.abs(f[2]-f[3]),g=Math.abs(f[0]-f[2])+Math.abs(f[1]-f[3]),x=Math.min(.25,.5*l*(y+m)/p),v=Math.min(.25,.5*l*g/d);return o+Math.max(x*s,v*a)}(i,s,o):l;return {base:l+(0===r)?-1:r,top:u?Math.max(c+n,l+r+2):l+n}}const nu=Ss([{name:"a_pos_normal",components:2,type:"Int16"},{name:"a_data",components:4,type:"Uint8"},{name:"a_linesofar",components:1,type:"Float32"}],4),{members:iu}=nu,su=Ss([{name:"a_uv_x",components:1,type:"Float32"},{name:"a_split_index",components:1,type:"Float32"}]),{members:au}=su,ou=Gl.VectorTileFeature.types,lu=Math.cos(Math.PI/180*37.5);class uu{constructor(t){this.zoom=t.zoom,this.overscaling=t.overscaling,this.layers=t.layers,this.layerIds=this.layers.map((t=>t.id)),this.index=t.index,this.hasPattern=!1,this.patternFeatures=[],this.lineClipsArray=[],this.gradients={},this.layers.forEach((t=>{this.gradients[t.id]={};})),this.layoutVertexArray=new Ms,this.layoutVertexArray2=new Es,this.indexArray=new $s,this.programConfigurations=new Ea(t.layers,t.zoom),this.segments=new $a,this.maxLineLength=0,this.stateDependentLayerIds=this.layers.filter((t=>t.isStateDependent())).map((t=>t.id));}populate(t,e,r){this.hasPattern=Ml("line",this.layers,e);const n=this.layers[0].layout.get("line-sort-key"),i=[];for(const{feature:e,id:s,index:a,sourceLayerIndex:o}of t){const t=this.layers[0]._featureFilter.needGeometry,l=Ga(e,t);if(!this.layers[0]._featureFilter.filter(new as(this.zoom),l,r))continue;const u=n?n.evaluate(l,{},r):void 0,c={id:s,properties:e.properties,type:e.type,sourceLayerIndex:o,index:a,geometry:t?l.geometry:ja(e),patterns:{},sortKey:u};i.push(c);}n&&i.sort(((t,e)=>t.sortKey-e.sortKey));const{lineAtlas:s,featureIndex:a}=e,o=this.addConstantDashes(s);for(const n of i){const{geometry:i,index:l,sourceLayerIndex:u}=n;if(o&&this.addFeatureDashes(n,s),this.hasPattern){const t=El("line",this.layers,n,this.zoom,e);this.patternFeatures.push(t);}else this.addFeature(n,i,l,r,s.positions);a.insert(t[l].feature,i,l,u,this.index);}}addConstantDashes(t){let e=!1;for(const r of this.layers){const n=r.paint.get("line-dasharray").value,i=r.layout.get("line-cap").value;if("constant"!==n.kind||"constant"!==i.kind)e=!0;else {const e=i.value,r=n.value;if(!r)continue;t.addDash(r.from,e),t.addDash(r.to,e),r.other&&t.addDash(r.other,e);}}return e}addFeatureDashes(t,e){const r=this.zoom;for(const n of this.layers){const i=n.paint.get("line-dasharray").value,s=n.layout.get("line-cap").value;if("constant"===i.kind&&"constant"===s.kind)continue;let a,o,l,u,c,h;if("constant"===i.kind){const t=i.value;if(!t)continue;a=t.other||t.to,o=t.to,l=t.from;}else a=i.evaluate({zoom:r-1},t),o=i.evaluate({zoom:r},t),l=i.evaluate({zoom:r+1},t);"constant"===s.kind?u=c=h=s.value:(u=s.evaluate({zoom:r-1},t),c=s.evaluate({zoom:r},t),h=s.evaluate({zoom:r+1},t)),e.addDash(a,u),e.addDash(o,c),e.addDash(l,h);const p=e.getKey(a,u),d=e.getKey(o,c),f=e.getKey(l,h);t.patterns[n.id]={min:p,mid:d,max:f};}}update(t,e,r){this.stateDependentLayers.length&&this.programConfigurations.updatePaintArrays(t,e,this.stateDependentLayers,r);}addFeatures(t,e,r){for(const t of this.patternFeatures)this.addFeature(t,t.geometry,t.index,e,r);}isEmpty(){return 0===this.layoutVertexArray.length}uploadPending(){return !this.uploaded||this.programConfigurations.needsUpload}upload(t){this.uploaded||(0!==this.layoutVertexArray2.length&&(this.layoutVertexBuffer2=t.createVertexBuffer(this.layoutVertexArray2,au)),this.layoutVertexBuffer=t.createVertexBuffer(this.layoutVertexArray,iu),this.indexBuffer=t.createIndexBuffer(this.indexArray)),this.programConfigurations.upload(t),this.uploaded=!0;}destroy(){this.layoutVertexBuffer&&(this.layoutVertexBuffer.destroy(),this.indexBuffer.destroy(),this.programConfigurations.destroy(),this.segments.destroy());}lineFeatureClips(t){if(t.properties&&t.properties.hasOwnProperty("mapbox_clip_start")&&t.properties.hasOwnProperty("mapbox_clip_end"))return {start:+t.properties.mapbox_clip_start,end:+t.properties.mapbox_clip_end}}addFeature(t,e,r,n,i){const s=this.layers[0].layout,a=s.get("line-join").evaluate(t,{}),o=s.get("line-cap").evaluate(t,{}),l=s.get("line-miter-limit"),u=s.get("line-round-limit");this.lineClips=this.lineFeatureClips(t);for(const r of e)this.addLine(r,t,a,o,l,u);this.programConfigurations.populatePaintArrays(this.layoutVertexArray.length,t,r,i,n);}addLine(t,e,r,n,i,s){if(this.distance=0,this.scaledDistance=0,this.totalDistance=0,this.lineSoFar=0,this.lineClips){this.lineClipsArray.push(this.lineClips);for(let e=0;e<t.length-1;e++)this.totalDistance+=t[e].dist(t[e+1]);this.updateScaledDistance(),this.maxLineLength=Math.max(this.maxLineLength,this.totalDistance);}const a="Polygon"===ou[e.type];let o=t.length;for(;o>=2&&t[o-1].equals(t[o-2]);)o--;let l=0;for(;l<o-1&&t[l].equals(t[l+1]);)l++;if(o<(a?3:2))return;"bevel"===r&&(i=1.05);const u=this.overscaling<=16?122880/(512*this.overscaling):0,c=this.segments.prepareSegment(10*o,this.layoutVertexArray,this.indexArray);let h,p,d,f,y;this.e1=this.e2=-1,a&&(h=t[o-2],y=t[l].sub(h)._unit()._perp());for(let e=l;e<o;e++){if(d=e===o-1?a?t[l+1]:void 0:t[e+1],d&&t[e].equals(d))continue;y&&(f=y),h&&(p=h),h=t[e],y=d?d.sub(h)._unit()._perp():f,f=f||y;let m=f.add(y);0===m.x&&0===m.y||m._unit();const g=f.x*y.x+f.y*y.y,x=m.x*y.x+m.y*y.y,v=0!==x?1/x:1/0,b=2*Math.sqrt(2-2*x),w=x<lu&&p&&d,_=f.x*y.y-f.y*y.x>0;if(w&&e>l){const t=h.dist(p);if(t>2*u){const e=h.sub(h.sub(p)._mult(u/t)._round());this.updateDistance(p,e),this.addCurrentVertex(e,f,0,0,c),p=e;}}const k=p&&d;let A=k?r:a?"butt":n;if(k&&"round"===A&&(v<s?A="miter":v<=2&&(A="fakeround")),"miter"===A&&v>i&&(A="bevel"),"bevel"===A&&(v>2&&(A="flipbevel"),v<i&&(A="miter")),p&&this.updateDistance(p,h),"miter"===A)m._mult(v),this.addCurrentVertex(h,m,0,0,c);else if("flipbevel"===A){if(v>100)m=y.mult(-1);else {const t=v*f.add(y).mag()/f.sub(y).mag();m._perp()._mult(t*(_?-1:1));}this.addCurrentVertex(h,m,0,0,c),this.addCurrentVertex(h,m.mult(-1),0,0,c);}else if("bevel"===A||"fakeround"===A){const t=-Math.sqrt(v*v-1),e=_?t:0,r=_?0:t;if(p&&this.addCurrentVertex(h,f,e,r,c),"fakeround"===A){const t=Math.round(180*b/Math.PI/20);for(let e=1;e<t;e++){let r=e/t;if(.5!==r){const t=r-.5;r+=r*t*(r-1)*((1.0904+g*(g*(3.55645-1.43519*g)-3.2452))*t*t+(.848013+g*(.215638*g-1.06021)));}const n=y.sub(f)._mult(r)._add(f)._unit()._mult(_?-1:1);this.addHalfVertex(h,n.x,n.y,!1,_,0,c);}}d&&this.addCurrentVertex(h,y,-e,-r,c);}else if("butt"===A)this.addCurrentVertex(h,m,0,0,c);else if("square"===A){const t=p?1:-1;p||this.addCurrentVertex(h,m,t,t,c),this.addCurrentVertex(h,m,0,0,c),p&&this.addCurrentVertex(h,m,t,t,c);}else "round"===A&&(p&&(this.addCurrentVertex(h,f,0,0,c),this.addCurrentVertex(h,f,1,1,c,!0)),d&&(this.addCurrentVertex(h,y,-1,-1,c,!0),this.addCurrentVertex(h,y,0,0,c)));if(w&&e<o-1){const t=h.dist(d);if(t>2*u){const e=h.add(d.sub(h)._mult(u/t)._round());this.updateDistance(h,e),this.addCurrentVertex(e,y,0,0,c),h=e;}}}}addCurrentVertex(t,e,r,n,i,s=!1){const a=e.y*n-e.x,o=-e.y-e.x*n;this.addHalfVertex(t,e.x+e.y*r,e.y-e.x*r,s,!1,r,i),this.addHalfVertex(t,a,o,s,!0,-n,i);}addHalfVertex({x:t,y:e},r,n,i,s,a,o){this.layoutVertexArray.emplaceBack((t<<1)+(i?1:0),(e<<1)+(s?1:0),Math.round(63*r)+128,Math.round(63*n)+128,1+(0===a?0:a<0?-1:1),0,this.lineSoFar),this.lineClips&&this.layoutVertexArray2.emplaceBack(this.scaledDistance,this.lineClipsArray.length);const l=o.vertexLength++;this.e1>=0&&this.e2>=0&&(this.indexArray.emplaceBack(this.e1,this.e2,l),o.primitiveLength++),s?this.e2=l:this.e1=l;}updateScaledDistance(){if(this.lineClips){const t=this.totalDistance/(this.lineClips.end-this.lineClips.start);this.scaledDistance=this.distance/this.totalDistance,this.lineSoFar=t*this.lineClips.start+this.distance;}else this.lineSoFar=this.distance;}updateDistance(t,e){this.distance+=t.dist(e),this.updateScaledDistance();}}oi("LineBucket",uu,{omit:["layers","patternFeatures"]});const cu=new bs({"line-cap":new ms(Rt.layout_line["line-cap"]),"line-join":new ms(Rt.layout_line["line-join"]),"line-miter-limit":new ys(Rt.layout_line["line-miter-limit"]),"line-round-limit":new ys(Rt.layout_line["line-round-limit"]),"line-sort-key":new ms(Rt.layout_line["line-sort-key"])});var hu={paint:new bs({"line-opacity":new ms(Rt.paint_line["line-opacity"]),"line-color":new ms(Rt.paint_line["line-color"]),"line-translate":new ys(Rt.paint_line["line-translate"]),"line-translate-anchor":new ys(Rt.paint_line["line-translate-anchor"]),"line-width":new ms(Rt.paint_line["line-width"]),"line-gap-width":new ms(Rt.paint_line["line-gap-width"]),"line-offset":new ms(Rt.paint_line["line-offset"]),"line-blur":new ms(Rt.paint_line["line-blur"]),"line-dasharray":new gs(Rt.paint_line["line-dasharray"]),"line-pattern":new gs(Rt.paint_line["line-pattern"]),"line-gradient":new vs(Rt.paint_line["line-gradient"])}),layout:cu};const pu=new class extends ms{possiblyEvaluate(t,e){return e=new as(Math.floor(e.zoom),{now:e.now,fadeDuration:e.fadeDuration,zoomHistory:e.zoomHistory,transition:e.transition}),super.possiblyEvaluate(t,e)}evaluate(t,e,r,n){return e=v({},e,{zoom:Math.floor(e.zoom)}),super.evaluate(t,e,r,n)}}(hu.paint.properties["line-width"].specification);function du(t,e){return e>0?e+2*t:t}pu.useIntegerZoom=!0;const fu=Ss([{name:"a_pos_offset",components:4,type:"Int16"},{name:"a_data",components:4,type:"Uint16"},{name:"a_pixeloffset",components:4,type:"Int16"}],4),yu=Ss([{name:"a_projected_pos",components:3,type:"Float32"}],4);Ss([{name:"a_fade_opacity",components:1,type:"Uint32"}],4);const mu=Ss([{name:"a_placed",components:2,type:"Uint8"},{name:"a_shift",components:2,type:"Float32"}]),gu=Ss([{name:"a_size_scale",components:1,type:"Float32"},{name:"a_padding",components:2,type:"Float32"}]);Ss([{type:"Int16",name:"anchorPointX"},{type:"Int16",name:"anchorPointY"},{type:"Float32",name:"x1"},{type:"Float32",name:"y1"},{type:"Float32",name:"x2"},{type:"Float32",name:"y2"},{type:"Int16",name:"padding"},{type:"Uint32",name:"featureIndex"},{type:"Uint16",name:"sourceLayerIndex"},{type:"Uint16",name:"bucketIndex"}]);const xu=Ss([{name:"a_pos",components:2,type:"Int16"},{name:"a_anchor_pos",components:2,type:"Int16"},{name:"a_extrude",components:2,type:"Int16"}],4),vu=Ss([{name:"a_pos_2f",components:2,type:"Float32"},{name:"a_radius",components:1,type:"Float32"},{name:"a_flags",components:2,type:"Int16"}],4);Ss([{name:"triangle",components:3,type:"Uint16"}]),Ss([{type:"Int16",name:"anchorX"},{type:"Int16",name:"anchorY"},{type:"Uint16",name:"glyphStartIndex"},{type:"Uint16",name:"numGlyphs"},{type:"Uint32",name:"vertexStartIndex"},{type:"Uint32",name:"lineStartIndex"},{type:"Uint32",name:"lineLength"},{type:"Uint16",name:"segment"},{type:"Uint16",name:"lowerSize"},{type:"Uint16",name:"upperSize"},{type:"Float32",name:"lineOffsetX"},{type:"Float32",name:"lineOffsetY"},{type:"Uint8",name:"writingMode"},{type:"Uint8",name:"placedOrientation"},{type:"Uint8",name:"hidden"},{type:"Uint32",name:"crossTileID"},{type:"Int16",name:"associatedIconIndex"}]),Ss([{type:"Int16",name:"anchorX"},{type:"Int16",name:"anchorY"},{type:"Int16",name:"rightJustifiedTextSymbolIndex"},{type:"Int16",name:"centerJustifiedTextSymbolIndex"},{type:"Int16",name:"leftJustifiedTextSymbolIndex"},{type:"Int16",name:"verticalPlacedTextSymbolIndex"},{type:"Int16",name:"placedIconSymbolIndex"},{type:"Int16",name:"verticalPlacedIconSymbolIndex"},{type:"Uint16",name:"key"},{type:"Uint16",name:"textBoxStartIndex"},{type:"Uint16",name:"textBoxEndIndex"},{type:"Uint16",name:"verticalTextBoxStartIndex"},{type:"Uint16",name:"verticalTextBoxEndIndex"},{type:"Uint16",name:"iconBoxStartIndex"},{type:"Uint16",name:"iconBoxEndIndex"},{type:"Uint16",name:"verticalIconBoxStartIndex"},{type:"Uint16",name:"verticalIconBoxEndIndex"},{type:"Uint16",name:"featureIndex"},{type:"Uint16",name:"numHorizontalGlyphVertices"},{type:"Uint16",name:"numVerticalGlyphVertices"},{type:"Uint16",name:"numIconVertices"},{type:"Uint16",name:"numVerticalIconVertices"},{type:"Uint16",name:"useRuntimeCollisionCircles"},{type:"Uint32",name:"crossTileID"},{type:"Float32",components:2,name:"textOffset"},{type:"Float32",name:"collisionCircleDiameter"}]),Ss([{type:"Float32",name:"offsetX"}]),Ss([{type:"Int16",name:"x"},{type:"Int16",name:"y"},{type:"Int16",name:"tileUnitDistanceFromAnchor"}]);var bu=24;const wu=128;function _u(t,e){const{expression:r}=e;if("constant"===r.kind)return {kind:"constant",layoutSize:r.evaluate(new as(t+1))};if("source"===r.kind)return {kind:"source"};{const{zoomStops:e,interpolationType:n}=r;let i=0;for(;i<e.length&&e[i]<=t;)i++;i=Math.max(0,i-1);let s=i;for(;s<e.length&&e[s]<t+1;)s++;s=Math.min(e.length-1,s);const a=e[i],o=e[s];return "composite"===r.kind?{kind:"composite",minZoom:a,maxZoom:o,interpolationType:n}:{kind:"camera",minZoom:a,maxZoom:o,minSize:r.evaluate(new as(a)),maxSize:r.evaluate(new as(o)),interpolationType:n}}}function ku(t,{uSize:e,uSizeT:r},{lowerSize:n,upperSize:i}){return "source"===t.kind?n/wu:"composite"===t.kind?rr(n/wu,i/wu,r):e}function Au(t,e){let r=0,n=0;if("constant"===t.kind)n=t.layoutSize;else if("source"!==t.kind){const{interpolationType:i,minZoom:s,maxZoom:a}=t,o=i?y(wr.interpolationFactor(i,e,s,a),0,1):0;"camera"===t.kind?n=rr(t.minSize,t.maxSize,o):r=o;}return {uSizeT:r,uSize:n}}var Su=Object.freeze({__proto__:null,getSizeData:_u,evaluateSizeForFeature:ku,evaluateSizeForZoom:Au,SIZE_PACK_FACTOR:wu});function Iu(t,e,r){return t.sections.forEach((t=>{t.text=function(t,e,r){const n=e.layout.get("text-transform").evaluate(r,{});return "uppercase"===n?t=t.toLocaleUpperCase():"lowercase"===n&&(t=t.toLocaleLowerCase()),ss.applyArabicShaping&&(t=ss.applyArabicShaping(t)),t}(t.text,e,r);})),t}const zu={"!":"︕","#":"＃",$:"＄","%":"％","&":"＆","(":"︵",")":"︶","*":"＊","+":"＋",",":"︐","-":"︲",".":"・","/":"／",":":"︓",";":"︔","<":"︿","=":"＝",">":"﹀","?":"︖","@":"＠","[":"﹇","\\":"＼","]":"﹈","^":"＾",_:"︳","`":"｀","{":"︷","|":"―","}":"︸","~":"～","¢":"￠","£":"￡","¥":"￥","¦":"￤","¬":"￢","¯":"￣","–":"︲","—":"︱","‘":"﹃","’":"﹄","“":"﹁","”":"﹂","…":"︙","‧":"・","₩":"￦","、":"︑","。":"︒","〈":"︿","〉":"﹀","《":"︽","》":"︾","「":"﹁","」":"﹂","『":"﹃","』":"﹄","【":"︻","】":"︼","〔":"︹","〕":"︺","〖":"︗","〗":"︘","！":"︕","（":"︵","）":"︶","，":"︐","－":"︲","．":"・","：":"︓","；":"︔","＜":"︿","＞":"﹀","？":"︖","［":"﹇","］":"﹈","＿":"︳","｛":"︷","｜":"―","｝":"︸","｟":"︵","｠":"︶","｡":"︒","｢":"﹁","｣":"﹂"};var Tu=function(t,e,r,n,i){var s,a,o=8*i-n-1,l=(1<<o)-1,u=l>>1,c=-7,h=r?i-1:0,p=r?-1:1,d=t[e+h];for(h+=p,s=d&(1<<-c)-1,d>>=-c,c+=o;c>0;s=256*s+t[e+h],h+=p,c-=8);for(a=s&(1<<-c)-1,s>>=-c,c+=n;c>0;a=256*a+t[e+h],h+=p,c-=8);if(0===s)s=1-u;else {if(s===l)return a?NaN:1/0*(d?-1:1);a+=Math.pow(2,n),s-=u;}return (d?-1:1)*a*Math.pow(2,s-n)},Mu=function(t,e,r,n,i,s){var a,o,l,u=8*s-i-1,c=(1<<u)-1,h=c>>1,p=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,d=n?0:s-1,f=n?1:-1,y=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(o=isNaN(e)?1:0,a=c):(a=Math.floor(Math.log(e)/Math.LN2),e*(l=Math.pow(2,-a))<1&&(a--,l*=2),(e+=a+h>=1?p/l:p*Math.pow(2,1-h))*l>=2&&(a++,l/=2),a+h>=c?(o=0,a=c):a+h>=1?(o=(e*l-1)*Math.pow(2,i),a+=h):(o=e*Math.pow(2,h-1)*Math.pow(2,i),a=0));i>=8;t[r+d]=255&o,d+=f,o/=256,i-=8);for(a=a<<i|o,u+=i;u>0;t[r+d]=255&a,d+=f,a/=256,u-=8);t[r+d-f]|=128*y;},Eu=Bu;function Bu(t){this.buf=ArrayBuffer.isView&&ArrayBuffer.isView(t)?t:new Uint8Array(t||0),this.pos=0,this.type=0,this.length=this.buf.length;}Bu.Varint=0,Bu.Fixed64=1,Bu.Bytes=2,Bu.Fixed32=5;var Cu=4294967296,Pu=1/Cu,Du="undefined"==typeof TextDecoder?null:new TextDecoder("utf8");function Vu(t){return t.type===Bu.Bytes?t.readVarint()+t.pos:t.pos+1}function Lu(t,e,r){return r?4294967296*e+(t>>>0):4294967296*(e>>>0)+(t>>>0)}function Fu(t,e,r){var n=e<=16383?1:e<=2097151?2:e<=268435455?3:Math.floor(Math.log(e)/(7*Math.LN2));r.realloc(n);for(var i=r.pos-1;i>=t;i--)r.buf[i+n]=r.buf[i];}function Ru(t,e){for(var r=0;r<t.length;r++)e.writeVarint(t[r]);}function Uu(t,e){for(var r=0;r<t.length;r++)e.writeSVarint(t[r]);}function $u(t,e){for(var r=0;r<t.length;r++)e.writeFloat(t[r]);}function Ou(t,e){for(var r=0;r<t.length;r++)e.writeDouble(t[r]);}function qu(t,e){for(var r=0;r<t.length;r++)e.writeBoolean(t[r]);}function Nu(t,e){for(var r=0;r<t.length;r++)e.writeFixed32(t[r]);}function ju(t,e){for(var r=0;r<t.length;r++)e.writeSFixed32(t[r]);}function Gu(t,e){for(var r=0;r<t.length;r++)e.writeFixed64(t[r]);}function Zu(t,e){for(var r=0;r<t.length;r++)e.writeSFixed64(t[r]);}function Xu(t,e){return (t[e]|t[e+1]<<8|t[e+2]<<16)+16777216*t[e+3]}function Ku(t,e,r){t[r]=e,t[r+1]=e>>>8,t[r+2]=e>>>16,t[r+3]=e>>>24;}function Hu(t,e){return (t[e]|t[e+1]<<8|t[e+2]<<16)+(t[e+3]<<24)}function Yu(t,e,r){1===t&&r.readMessage(Ju,e);}function Ju(t,e,r){if(3===t){const{id:t,bitmap:n,width:i,height:s,left:a,top:o,advance:l}=r.readMessage(Wu,{});e.push({id:t,bitmap:new qo({width:i+6,height:s+6},n),metrics:{width:i,height:s,left:a,top:o,advance:l}});}}function Wu(t,e,r){1===t?e.id=r.readVarint():2===t?e.bitmap=r.readBytes():3===t?e.width=r.readVarint():4===t?e.height=r.readVarint():5===t?e.left=r.readSVarint():6===t?e.top=r.readSVarint():7===t&&(e.advance=r.readVarint());}function Qu(t){let e=0,r=0;for(const n of t)e+=n.w*n.h,r=Math.max(r,n.w);t.sort(((t,e)=>e.h-t.h));const n=[{x:0,y:0,w:Math.max(Math.ceil(Math.sqrt(e/.95)),r),h:1/0}];let i=0,s=0;for(const e of t)for(let t=n.length-1;t>=0;t--){const r=n[t];if(!(e.w>r.w||e.h>r.h)){if(e.x=r.x,e.y=r.y,s=Math.max(s,e.y+e.h),i=Math.max(i,e.x+e.w),e.w===r.w&&e.h===r.h){const e=n.pop();t<n.length&&(n[t]=e);}else e.h===r.h?(r.x+=e.w,r.w-=e.w):e.w===r.w?(r.y+=e.h,r.h-=e.h):(n.push({x:r.x+e.w,y:r.y,w:r.w-e.w,h:e.h}),r.y+=e.h,r.h-=e.h);break}}return {w:i,h:s,fill:e/(i*s)||0}}Bu.prototype={destroy:function(){this.buf=null;},readFields:function(t,e,r){for(r=r||this.length;this.pos<r;){var n=this.readVarint(),i=n>>3,s=this.pos;this.type=7&n,t(i,e,this),this.pos===s&&this.skip(n);}return e},readMessage:function(t,e){return this.readFields(t,e,this.readVarint()+this.pos)},readFixed32:function(){var t=Xu(this.buf,this.pos);return this.pos+=4,t},readSFixed32:function(){var t=Hu(this.buf,this.pos);return this.pos+=4,t},readFixed64:function(){var t=Xu(this.buf,this.pos)+Xu(this.buf,this.pos+4)*Cu;return this.pos+=8,t},readSFixed64:function(){var t=Xu(this.buf,this.pos)+Hu(this.buf,this.pos+4)*Cu;return this.pos+=8,t},readFloat:function(){var t=Tu(this.buf,this.pos,!0,23,4);return this.pos+=4,t},readDouble:function(){var t=Tu(this.buf,this.pos,!0,52,8);return this.pos+=8,t},readVarint:function(t){var e,r,n=this.buf;return e=127&(r=n[this.pos++]),r<128?e:(e|=(127&(r=n[this.pos++]))<<7,r<128?e:(e|=(127&(r=n[this.pos++]))<<14,r<128?e:(e|=(127&(r=n[this.pos++]))<<21,r<128?e:function(t,e,r){var n,i,s=r.buf;if(n=(112&(i=s[r.pos++]))>>4,i<128)return Lu(t,n,e);if(n|=(127&(i=s[r.pos++]))<<3,i<128)return Lu(t,n,e);if(n|=(127&(i=s[r.pos++]))<<10,i<128)return Lu(t,n,e);if(n|=(127&(i=s[r.pos++]))<<17,i<128)return Lu(t,n,e);if(n|=(127&(i=s[r.pos++]))<<24,i<128)return Lu(t,n,e);if(n|=(1&(i=s[r.pos++]))<<31,i<128)return Lu(t,n,e);throw new Error("Expected varint not more than 10 bytes")}(e|=(15&(r=n[this.pos]))<<28,t,this))))},readVarint64:function(){return this.readVarint(!0)},readSVarint:function(){var t=this.readVarint();return t%2==1?(t+1)/-2:t/2},readBoolean:function(){return Boolean(this.readVarint())},readString:function(){var t=this.readVarint()+this.pos,e=this.pos;return this.pos=t,t-e>=12&&Du?function(t,e,r){return Du.decode(t.subarray(e,r))}(this.buf,e,t):function(t,e,r){for(var n="",i=e;i<r;){var s,a,o,l=t[i],u=null,c=l>239?4:l>223?3:l>191?2:1;if(i+c>r)break;1===c?l<128&&(u=l):2===c?128==(192&(s=t[i+1]))&&(u=(31&l)<<6|63&s)<=127&&(u=null):3===c?(a=t[i+2],128==(192&(s=t[i+1]))&&128==(192&a)&&((u=(15&l)<<12|(63&s)<<6|63&a)<=2047||u>=55296&&u<=57343)&&(u=null)):4===c&&(a=t[i+2],o=t[i+3],128==(192&(s=t[i+1]))&&128==(192&a)&&128==(192&o)&&((u=(15&l)<<18|(63&s)<<12|(63&a)<<6|63&o)<=65535||u>=1114112)&&(u=null)),null===u?(u=65533,c=1):u>65535&&(u-=65536,n+=String.fromCharCode(u>>>10&1023|55296),u=56320|1023&u),n+=String.fromCharCode(u),i+=c;}return n}(this.buf,e,t)},readBytes:function(){var t=this.readVarint()+this.pos,e=this.buf.subarray(this.pos,t);return this.pos=t,e},readPackedVarint:function(t,e){if(this.type!==Bu.Bytes)return t.push(this.readVarint(e));var r=Vu(this);for(t=t||[];this.pos<r;)t.push(this.readVarint(e));return t},readPackedSVarint:function(t){if(this.type!==Bu.Bytes)return t.push(this.readSVarint());var e=Vu(this);for(t=t||[];this.pos<e;)t.push(this.readSVarint());return t},readPackedBoolean:function(t){if(this.type!==Bu.Bytes)return t.push(this.readBoolean());var e=Vu(this);for(t=t||[];this.pos<e;)t.push(this.readBoolean());return t},readPackedFloat:function(t){if(this.type!==Bu.Bytes)return t.push(this.readFloat());var e=Vu(this);for(t=t||[];this.pos<e;)t.push(this.readFloat());return t},readPackedDouble:function(t){if(this.type!==Bu.Bytes)return t.push(this.readDouble());var e=Vu(this);for(t=t||[];this.pos<e;)t.push(this.readDouble());return t},readPackedFixed32:function(t){if(this.type!==Bu.Bytes)return t.push(this.readFixed32());var e=Vu(this);for(t=t||[];this.pos<e;)t.push(this.readFixed32());return t},readPackedSFixed32:function(t){if(this.type!==Bu.Bytes)return t.push(this.readSFixed32());var e=Vu(this);for(t=t||[];this.pos<e;)t.push(this.readSFixed32());return t},readPackedFixed64:function(t){if(this.type!==Bu.Bytes)return t.push(this.readFixed64());var e=Vu(this);for(t=t||[];this.pos<e;)t.push(this.readFixed64());return t},readPackedSFixed64:function(t){if(this.type!==Bu.Bytes)return t.push(this.readSFixed64());var e=Vu(this);for(t=t||[];this.pos<e;)t.push(this.readSFixed64());return t},skip:function(t){var e=7&t;if(e===Bu.Varint)for(;this.buf[this.pos++]>127;);else if(e===Bu.Bytes)this.pos=this.readVarint()+this.pos;else if(e===Bu.Fixed32)this.pos+=4;else {if(e!==Bu.Fixed64)throw new Error("Unimplemented type: "+e);this.pos+=8;}},writeTag:function(t,e){this.writeVarint(t<<3|e);},realloc:function(t){for(var e=this.length||16;e<this.pos+t;)e*=2;if(e!==this.length){var r=new Uint8Array(e);r.set(this.buf),this.buf=r,this.length=e;}},finish:function(){return this.length=this.pos,this.pos=0,this.buf.subarray(0,this.length)},writeFixed32:function(t){this.realloc(4),Ku(this.buf,t,this.pos),this.pos+=4;},writeSFixed32:function(t){this.realloc(4),Ku(this.buf,t,this.pos),this.pos+=4;},writeFixed64:function(t){this.realloc(8),Ku(this.buf,-1&t,this.pos),Ku(this.buf,Math.floor(t*Pu),this.pos+4),this.pos+=8;},writeSFixed64:function(t){this.realloc(8),Ku(this.buf,-1&t,this.pos),Ku(this.buf,Math.floor(t*Pu),this.pos+4),this.pos+=8;},writeVarint:function(t){(t=+t||0)>268435455||t<0?function(t,e){var r,n;if(t>=0?(r=t%4294967296|0,n=t/4294967296|0):(n=~(-t/4294967296),4294967295^(r=~(-t%4294967296))?r=r+1|0:(r=0,n=n+1|0)),t>=0x10000000000000000||t<-0x10000000000000000)throw new Error("Given varint doesn't fit into 10 bytes");e.realloc(10),function(t,e,r){r.buf[r.pos++]=127&t|128,t>>>=7,r.buf[r.pos++]=127&t|128,t>>>=7,r.buf[r.pos++]=127&t|128,t>>>=7,r.buf[r.pos++]=127&t|128,r.buf[r.pos]=127&(t>>>=7);}(r,0,e),function(t,e){var r=(7&t)<<4;e.buf[e.pos++]|=r|((t>>>=3)?128:0),t&&(e.buf[e.pos++]=127&t|((t>>>=7)?128:0),t&&(e.buf[e.pos++]=127&t|((t>>>=7)?128:0),t&&(e.buf[e.pos++]=127&t|((t>>>=7)?128:0),t&&(e.buf[e.pos++]=127&t|((t>>>=7)?128:0),t&&(e.buf[e.pos++]=127&t)))));}(n,e);}(t,this):(this.realloc(4),this.buf[this.pos++]=127&t|(t>127?128:0),t<=127||(this.buf[this.pos++]=127&(t>>>=7)|(t>127?128:0),t<=127||(this.buf[this.pos++]=127&(t>>>=7)|(t>127?128:0),t<=127||(this.buf[this.pos++]=t>>>7&127))));},writeSVarint:function(t){this.writeVarint(t<0?2*-t-1:2*t);},writeBoolean:function(t){this.writeVarint(Boolean(t));},writeString:function(t){t=String(t),this.realloc(4*t.length),this.pos++;var e=this.pos;this.pos=function(t,e,r){for(var n,i,s=0;s<e.length;s++){if((n=e.charCodeAt(s))>55295&&n<57344){if(!i){n>56319||s+1===e.length?(t[r++]=239,t[r++]=191,t[r++]=189):i=n;continue}if(n<56320){t[r++]=239,t[r++]=191,t[r++]=189,i=n;continue}n=i-55296<<10|n-56320|65536,i=null;}else i&&(t[r++]=239,t[r++]=191,t[r++]=189,i=null);n<128?t[r++]=n:(n<2048?t[r++]=n>>6|192:(n<65536?t[r++]=n>>12|224:(t[r++]=n>>18|240,t[r++]=n>>12&63|128),t[r++]=n>>6&63|128),t[r++]=63&n|128);}return r}(this.buf,t,this.pos);var r=this.pos-e;r>=128&&Fu(e,r,this),this.pos=e-1,this.writeVarint(r),this.pos+=r;},writeFloat:function(t){this.realloc(4),Mu(this.buf,t,this.pos,!0,23,4),this.pos+=4;},writeDouble:function(t){this.realloc(8),Mu(this.buf,t,this.pos,!0,52,8),this.pos+=8;},writeBytes:function(t){var e=t.length;this.writeVarint(e),this.realloc(e);for(var r=0;r<e;r++)this.buf[this.pos++]=t[r];},writeRawMessage:function(t,e){this.pos++;var r=this.pos;t(e,this);var n=this.pos-r;n>=128&&Fu(r,n,this),this.pos=r-1,this.writeVarint(n),this.pos+=n;},writeMessage:function(t,e,r){this.writeTag(t,Bu.Bytes),this.writeRawMessage(e,r);},writePackedVarint:function(t,e){e.length&&this.writeMessage(t,Ru,e);},writePackedSVarint:function(t,e){e.length&&this.writeMessage(t,Uu,e);},writePackedBoolean:function(t,e){e.length&&this.writeMessage(t,qu,e);},writePackedFloat:function(t,e){e.length&&this.writeMessage(t,$u,e);},writePackedDouble:function(t,e){e.length&&this.writeMessage(t,Ou,e);},writePackedFixed32:function(t,e){e.length&&this.writeMessage(t,Nu,e);},writePackedSFixed32:function(t,e){e.length&&this.writeMessage(t,ju,e);},writePackedFixed64:function(t,e){e.length&&this.writeMessage(t,Gu,e);},writePackedSFixed64:function(t,e){e.length&&this.writeMessage(t,Zu,e);},writeBytesField:function(t,e){this.writeTag(t,Bu.Bytes),this.writeBytes(e);},writeFixed32Field:function(t,e){this.writeTag(t,Bu.Fixed32),this.writeFixed32(e);},writeSFixed32Field:function(t,e){this.writeTag(t,Bu.Fixed32),this.writeSFixed32(e);},writeFixed64Field:function(t,e){this.writeTag(t,Bu.Fixed64),this.writeFixed64(e);},writeSFixed64Field:function(t,e){this.writeTag(t,Bu.Fixed64),this.writeSFixed64(e);},writeVarintField:function(t,e){this.writeTag(t,Bu.Varint),this.writeVarint(e);},writeSVarintField:function(t,e){this.writeTag(t,Bu.Varint),this.writeSVarint(e);},writeStringField:function(t,e){this.writeTag(t,Bu.Bytes),this.writeString(e);},writeFloatField:function(t,e){this.writeTag(t,Bu.Fixed32),this.writeFloat(e);},writeDoubleField:function(t,e){this.writeTag(t,Bu.Fixed64),this.writeDouble(e);},writeBooleanField:function(t,e){this.writeVarintField(t,Boolean(e));}};class tc{constructor(t,{pixelRatio:e,version:r,stretchX:n,stretchY:i,content:s}){this.paddedRect=t,this.pixelRatio=e,this.stretchX=n,this.stretchY=i,this.content=s,this.version=r;}get tl(){return [this.paddedRect.x+1,this.paddedRect.y+1]}get br(){return [this.paddedRect.x+this.paddedRect.w-1,this.paddedRect.y+this.paddedRect.h-1]}get displaySize(){return [(this.paddedRect.w-2)/this.pixelRatio,(this.paddedRect.h-2)/this.pixelRatio]}}class ec{constructor(t,e){const r={},n={};this.haveRenderCallbacks=[];const i=[];this.addImages(t,r,i),this.addImages(e,n,i);const{w:s,h:a}=Qu(i),o=new No({width:s||1,height:a||1});for(const e in t){const n=t[e],i=r[e].paddedRect;No.copy(n.data,o,{x:0,y:0},{x:i.x+1,y:i.y+1},n.data);}for(const t in e){const r=e[t],i=n[t].paddedRect,s=i.x+1,a=i.y+1,l=r.data.width,u=r.data.height;No.copy(r.data,o,{x:0,y:0},{x:s,y:a},r.data),No.copy(r.data,o,{x:0,y:u-1},{x:s,y:a-1},{width:l,height:1}),No.copy(r.data,o,{x:0,y:0},{x:s,y:a+u},{width:l,height:1}),No.copy(r.data,o,{x:l-1,y:0},{x:s-1,y:a},{width:1,height:u}),No.copy(r.data,o,{x:0,y:0},{x:s+l,y:a},{width:1,height:u});}this.image=o,this.iconPositions=r,this.patternPositions=n;}addImages(t,e,r){for(const n in t){const i=t[n],s={x:0,y:0,w:i.data.width+2,h:i.data.height+2};r.push(s),e[n]=new tc(s,i),i.hasRenderCallback&&this.haveRenderCallbacks.push(n);}}patchUpdatedImages(t,e){t.dispatchRenderCallbacks(this.haveRenderCallbacks);for(const r in t.updatedImages)this.patchUpdatedImage(this.iconPositions[r],t.getImage(r),e),this.patchUpdatedImage(this.patternPositions[r],t.getImage(r),e);}patchUpdatedImage(t,e,r){if(!t||!e)return;if(t.version===e.version)return;t.version=e.version;const[n,i]=t.tl;r.update(e.data,void 0,{x:n,y:i});}}oi("ImagePosition",tc),oi("ImageAtlas",ec);const rc={horizontal:1,vertical:2,horizontalOnly:3},nc=-17;class ic{constructor(){this.scale=1,this.fontStack="",this.imageName=null;}static forText(t,e){const r=new ic;return r.scale=t||1,r.fontStack=e,r}static forImage(t){const e=new ic;return e.imageName=t,e}}class sc{constructor(){this.text="",this.sectionIndex=[],this.sections=[],this.imageSectionID=null;}static fromFeature(t,e){const r=new sc;for(let n=0;n<t.sections.length;n++){const i=t.sections[n];i.image?r.addImageSection(i):r.addTextSection(i,e);}return r}length(){return this.text.length}getSection(t){return this.sections[this.sectionIndex[t]]}getSectionIndex(t){return this.sectionIndex[t]}getCharCode(t){return this.text.charCodeAt(t)}verticalizePunctuation(){this.text=function(t){let e="";for(let r=0;r<t.length;r++){const n=t.charCodeAt(r+1)||null,i=t.charCodeAt(r-1)||null;e+=n&&ji(n)&&!zu[t[r+1]]||i&&ji(i)&&!zu[t[r-1]]||!zu[t[r]]?t[r]:zu[t[r]];}return e}(this.text);}trim(){let t=0;for(let e=0;e<this.text.length&&oc[this.text.charCodeAt(e)];e++)t++;let e=this.text.length;for(let r=this.text.length-1;r>=0&&r>=t&&oc[this.text.charCodeAt(r)];r--)e--;this.text=this.text.substring(t,e),this.sectionIndex=this.sectionIndex.slice(t,e);}substring(t,e){const r=new sc;return r.text=this.text.substring(t,e),r.sectionIndex=this.sectionIndex.slice(t,e),r.sections=this.sections,r}toString(){return this.text}getMaxScale(){return this.sectionIndex.reduce(((t,e)=>Math.max(t,this.sections[e].scale)),0)}addTextSection(t,e){this.text+=t.text,this.sections.push(ic.forText(t.scale,t.fontStack||e));const r=this.sections.length-1;for(let e=0;e<t.text.length;++e)this.sectionIndex.push(r);}addImageSection(t){const e=t.image?t.image.name:"";if(0===e.length)return void B("Can't add FormattedSection with an empty image.");const r=this.getNextImageSectionCharCode();r?(this.text+=String.fromCharCode(r),this.sections.push(ic.forImage(e)),this.sectionIndex.push(this.sections.length-1)):B("Reached maximum number of images 6401");}getNextImageSectionCharCode(){return this.imageSectionID?this.imageSectionID>=63743?null:++this.imageSectionID:(this.imageSectionID=57344,this.imageSectionID)}}function ac(t,e,r,n,i,s,a,o,l,u,c,h,p,d,f,y){const m=sc.fromFeature(t,i);let g;h===rc.vertical&&m.verticalizePunctuation();const{processBidirectionalText:x,processStyledBidirectionalText:v}=ss;if(x&&1===m.sections.length){g=[];const t=x(m.toString(),fc(m,u,s,e,n,d,f));for(const e of t){const t=new sc;t.text=e,t.sections=m.sections;for(let r=0;r<e.length;r++)t.sectionIndex.push(0);g.push(t);}}else if(v){g=[];const t=v(m.text,m.sectionIndex,fc(m,u,s,e,n,d,f));for(const e of t){const t=new sc;t.text=e[0],t.sectionIndex=e[1],t.sections=m.sections,g.push(t);}}else g=function(t,e){const r=[],n=t.text;let i=0;for(const n of e)r.push(t.substring(i,n)),i=n;return i<n.length&&r.push(t.substring(i,n.length)),r}(m,fc(m,u,s,e,n,d,f));const b=[],w={positionedLines:b,text:m.toString(),top:c[1],bottom:c[1],left:c[0],right:c[0],writingMode:h,iconsInText:!1,verticalizable:!1};return function(t,e,r,n,i,s,a,o,l,u,c,h){let p=0,d=nc,f=0,y=0;const m="right"===o?1:"left"===o?0:.5;let g=0;for(const a of i){a.trim();const i=a.getMaxScale(),o=(i-1)*bu,v={positionedGlyphs:[],lineOffset:0};t.positionedLines[g]=v;const b=v.positionedGlyphs;let w=0;if(!a.length()){d+=s,++g;continue}for(let s=0;s<a.length();s++){const f=a.getSection(s),y=a.getSectionIndex(s),m=a.getCharCode(s);let g=0,v=null,_=null,k=null,A=bu;const S=!(l===rc.horizontal||!c&&!Ni(m)||c&&(oc[m]||(x=m,di(x)||fi(x)||yi(x)||Di(x)||Ri(x))));if(f.imageName){const e=n[f.imageName];if(!e)continue;k=f.imageName,t.iconsInText=t.iconsInText||!0,_=e.paddedRect;const r=e.displaySize;f.scale=f.scale*bu/h,v={width:r[0],height:r[1],left:1,top:-3,advance:S?r[1]:r[0],localGlyph:!1},g=o+(bu-r[1]*f.scale),A=v.advance;const s=S?r[0]*f.scale-bu*i:r[1]*f.scale-bu*i;s>0&&s>w&&(w=s);}else {const t=r[f.fontStack],n=t&&t[m];if(n&&n.rect)_=n.rect,v=n.metrics;else {const t=e[f.fontStack],r=t&&t[m];if(!r)continue;v=r.metrics;}g=(i-f.scale)*bu;}S?(t.verticalizable=!0,b.push({glyph:m,imageName:k,x:p,y:d+g,vertical:S,scale:f.scale,localGlyph:v.localGlyph,fontStack:f.fontStack,sectionIndex:y,metrics:v,rect:_}),p+=A*f.scale+u):(b.push({glyph:m,imageName:k,x:p,y:d+g,vertical:S,scale:f.scale,localGlyph:v.localGlyph,fontStack:f.fontStack,sectionIndex:y,metrics:v,rect:_}),p+=v.advance*f.scale+u);}0!==b.length&&(f=Math.max(p-u,f),mc(b,0,b.length-1,m,w)),p=0;const _=s*i+w;v.lineOffset=Math.max(w,o),d+=_,y=Math.max(_,y),++g;}var x;const v=d-nc,{horizontalAlign:b,verticalAlign:w}=yc(a);((function(t,e,r,n,i,s,a,o,l){const u=(e-r)*i;let c=0;c=s!==a?-o*n-nc:(-n*l+.5)*a;for(const e of t)for(const t of e.positionedGlyphs)t.x+=u,t.y+=c;}))(t.positionedLines,m,b,w,f,y,s,v,i.length),t.top+=-w*v,t.bottom=t.top+v,t.left+=-b*f,t.right=t.left+f;}(w,e,r,n,g,a,o,l,h,u,p,y),!function(t){for(const e of t)if(0!==e.positionedGlyphs.length)return !1;return !0}(b)&&w}const oc={9:!0,10:!0,11:!0,12:!0,13:!0,32:!0},lc={10:!0,32:!0,38:!0,40:!0,41:!0,43:!0,45:!0,47:!0,173:!0,183:!0,8203:!0,8208:!0,8211:!0,8231:!0};function uc(t,e,r,n,i,s){if(e.imageName){const t=n[e.imageName];return t?t.displaySize[0]*e.scale*bu/s+i:0}{const n=r[e.fontStack],s=n&&n[t];return s?s.metrics.advance*e.scale+i:0}}function cc(t,e,r,n){const i=Math.pow(t-e,2);return n?t<e?i/2:2*i:i+Math.abs(r)*r}function hc(t,e,r){let n=0;return 10===t&&(n-=1e4),r&&(n+=150),40!==t&&65288!==t||(n+=50),41!==e&&65289!==e||(n+=50),n}function pc(t,e,r,n,i,s){let a=null,o=cc(e,r,i,s);for(const t of n){const n=cc(e-t.x,r,i,s)+t.badness;n<=o&&(a=t,o=n);}return {index:t,x:e,priorBreak:a,badness:o}}function dc(t){return t?dc(t.priorBreak).concat(t.index):[]}function fc(t,e,r,n,i,s,a){if("point"!==s)return [];if(!t)return [];const o=[],l=function(t,e,r,n,i,s){let a=0;for(let r=0;r<t.length();r++){const o=t.getSection(r);a+=uc(t.getCharCode(r),o,n,i,e,s);}return a/Math.max(1,Math.ceil(a/r))}(t,e,r,n,i,a),u=t.text.indexOf("​")>=0;let c=0;for(let r=0;r<t.length();r++){const s=t.getSection(r),p=t.getCharCode(r);if(oc[p]||(c+=uc(p,s,n,i,e,a)),r<t.length()-1){const e=!((h=p)<11904||!(ki(h)||_i(h)||Li(h)||Pi(h)||zi(h)||mi(h)||Ai(h)||vi(h)||Ti(h)||Mi(h)||Ii(h)||Ui(h)||bi(h)||xi(h)||gi(h)||Si(h)||wi(h)||Vi(h)||Bi(h)||Ei(h)));(lc[p]||e||s.imageName)&&o.push(pc(r+1,c,l,o,hc(p,t.getCharCode(r+1),e&&u),!1));}}var h;return dc(pc(t.length(),c,l,o,0,!0))}function yc(t){let e=.5,r=.5;switch(t){case"right":case"top-right":case"bottom-right":e=1;break;case"left":case"top-left":case"bottom-left":e=0;}switch(t){case"bottom":case"bottom-right":case"bottom-left":r=1;break;case"top":case"top-right":case"top-left":r=0;}return {horizontalAlign:e,verticalAlign:r}}function mc(t,e,r,n,i){if(!n&&!i)return;const s=t[r],a=(t[r].x+s.metrics.advance*s.scale)*n;for(let n=e;n<=r;n++)t[n].x-=a,t[n].y+=i;}function gc(t,e,r){const{horizontalAlign:n,verticalAlign:i}=yc(r),s=e[0]-t.displaySize[0]*n,a=e[1]-t.displaySize[1]*i;return {image:t,top:a,bottom:a+t.displaySize[1],left:s,right:s+t.displaySize[0]}}function xc(t,e,r,n,i,s){const a=t.image;let o;if(a.content){const t=a.content,e=a.pixelRatio||1;o=[t[0]/e,t[1]/e,a.displaySize[0]-t[2]/e,a.displaySize[1]-t[3]/e];}const l=e.left*s,u=e.right*s;let c,h,p,d;"width"===r||"both"===r?(d=i[0]+l-n[3],h=i[0]+u+n[1]):(d=i[0]+(l+u-a.displaySize[0])/2,h=d+a.displaySize[0]);const f=e.top*s,y=e.bottom*s;return "height"===r||"both"===r?(c=i[1]+f-n[0],p=i[1]+y+n[2]):(c=i[1]+(f+y-a.displaySize[1])/2,p=c+a.displaySize[1]),{image:a,top:c,right:h,bottom:p,left:d,collisionPadding:o}}class vc extends i{constructor(t,e,r,n){super(t,e),this.angle=r,void 0!==n&&(this.segment=n);}clone(){return new vc(this.x,this.y,this.angle,this.segment)}}function bc(t,e,r,n,i){if(void 0===e.segment)return !0;let s=e,a=e.segment+1,o=0;for(;o>-r/2;){if(a--,a<0)return !1;o-=t[a].dist(s),s=t[a];}o+=t[a].dist(t[a+1]),a++;const l=[];let u=0;for(;o<r/2;){const e=t[a],r=t[a+1];if(!r)return !1;let s=t[a-1].angleTo(e)-e.angleTo(r);for(s=Math.abs((s+3*Math.PI)%(2*Math.PI)-Math.PI),l.push({distance:o,angleDelta:s}),u+=s;o-l[0].distance>n;)u-=l.shift().angleDelta;if(u>i)return !1;a++,o+=e.dist(r);}return !0}function wc(t){let e=0;for(let r=0;r<t.length-1;r++)e+=t[r].dist(t[r+1]);return e}function _c(t,e,r){return t?.6*e*r:0}function kc(t,e){return Math.max(t?t.right-t.left:0,e?e.right-e.left:0)}function Ac(t,e,r,n,i,s){const a=_c(r,i,s),o=kc(r,n)*s;let l=0;const u=wc(t)/2;for(let r=0;r<t.length-1;r++){const n=t[r],i=t[r+1],s=n.dist(i);if(l+s>u){const c=(u-l)/s,h=rr(n.x,i.x,c),p=rr(n.y,i.y,c),d=new vc(h,p,i.angleTo(n),r);return d._round(),!a||bc(t,d,o,a,e)?d:void 0}l+=s;}}function Sc(t,e,r,n,i,s,a,o,l){const u=_c(n,s,a),c=kc(n,i),h=c*a,p=0===t[0].x||t[0].x===l||0===t[0].y||t[0].y===l;return e-h<e/4&&(e=h+e/4),Ic(t,p?e/2*o%e:(c/2+2*s)*a*o%e,e,u,r,h,p,!1,l)}function Ic(t,e,r,n,i,s,a,o,l){const u=s/2,c=wc(t);let h=0,p=e-r,d=[];for(let e=0;e<t.length-1;e++){const a=t[e],o=t[e+1],f=a.dist(o),y=o.angleTo(a);for(;p+r<h+f;){p+=r;const m=(p-h)/f,g=rr(a.x,o.x,m),x=rr(a.y,o.y,m);if(g>=0&&g<l&&x>=0&&x<l&&p-u>=0&&p+u<=c){const r=new vc(g,x,y,e);r._round(),n&&!bc(t,r,s,n,i)||d.push(r);}}h+=f;}return o||d.length||a||(d=Ic(t,h/2,r,n,i,s,a,!0,l)),d}function zc(t,e,r,n,s){const a=[];for(let o=0;o<t.length;o++){const l=t[o];let u;for(let t=0;t<l.length-1;t++){let o=l[t],c=l[t+1];o.x<e&&c.x<e||(o.x<e?o=new i(e,o.y+(e-o.x)/(c.x-o.x)*(c.y-o.y))._round():c.x<e&&(c=new i(e,o.y+(e-o.x)/(c.x-o.x)*(c.y-o.y))._round()),o.y<r&&c.y<r||(o.y<r?o=new i(o.x+(r-o.y)/(c.y-o.y)*(c.x-o.x),r)._round():c.y<r&&(c=new i(o.x+(r-o.y)/(c.y-o.y)*(c.x-o.x),r)._round()),o.x>=n&&c.x>=n||(o.x>=n?o=new i(n,o.y+(n-o.x)/(c.x-o.x)*(c.y-o.y))._round():c.x>=n&&(c=new i(n,o.y+(n-o.x)/(c.x-o.x)*(c.y-o.y))._round()),o.y>=s&&c.y>=s||(o.y>=s?o=new i(o.x+(s-o.y)/(c.y-o.y)*(c.x-o.x),s)._round():c.y>=s&&(c=new i(o.x+(s-o.y)/(c.y-o.y)*(c.x-o.x),s)._round()),u&&o.equals(u[u.length-1])||(u=[o],a.push(u)),u.push(c)))));}}return a}oi("Anchor",vc);var Tc=Bc,Mc=Bc,Ec=1e20;function Bc(t,e,r,n,i,s){this.fontSize=t||24,this.buffer=void 0===e?3:e,this.cutoff=n||.25,this.fontFamily=i||"sans-serif",this.fontWeight=s||"normal",this.radius=r||8;var a=this.size=this.fontSize+2*this.buffer,o=a+2*this.buffer;this.canvas=document.createElement("canvas"),this.canvas.width=this.canvas.height=a,this.ctx=this.canvas.getContext("2d"),this.ctx.font=this.fontWeight+" "+this.fontSize+"px "+this.fontFamily,this.ctx.textAlign="left",this.ctx.fillStyle="black",this.gridOuter=new Float64Array(o*o),this.gridInner=new Float64Array(o*o),this.f=new Float64Array(o),this.z=new Float64Array(o+1),this.v=new Uint16Array(o),this.useMetrics=void 0!==this.ctx.measureText("A").actualBoundingBoxLeft,this.middle=Math.round(a/2*(navigator.userAgent.indexOf("Gecko/")>=0?1.2:1));}function Cc(t,e,r,n,i,s){for(var a=0;a<e;a++)Pc(t,a,e,r,n,i,s);for(var o=0;o<r;o++)Pc(t,o*e,1,e,n,i,s);}function Pc(t,e,r,n,i,s,a){var o,l,u,c;for(s[0]=0,a[0]=-Ec,a[1]=Ec,o=0;o<n;o++)i[o]=t[e+o*r];for(o=1,l=0,u=0;o<n;o++){do{u=(i[o]-i[c=s[l]]+o*o-c*c)/(o-c)/2;}while(u<=a[l]&&--l>-1);s[++l]=o,a[l]=u,a[l+1]=Ec;}for(o=0,l=0;o<n;o++){for(;a[l+1]<o;)l++;t[e+o*r]=i[c=s[l]]+(o-c)*(o-c);}}Bc.prototype._draw=function(t,e){var r,n,i,s,a,o,l,u,c,h=this.ctx.measureText(t),p=h.width,d=2*this.buffer;e&&this.useMetrics?(a=Math.floor(h.actualBoundingBoxAscent),u=this.buffer+Math.ceil(h.actualBoundingBoxAscent),o=this.buffer,l=this.buffer,r=(n=Math.min(this.size,Math.ceil(h.actualBoundingBoxRight-h.actualBoundingBoxLeft)))+d,i=(s=Math.min(this.size-o,Math.ceil(h.actualBoundingBoxAscent+h.actualBoundingBoxDescent)))+d,this.ctx.textBaseline="alphabetic"):(r=n=this.size,i=s=this.size,a=19*this.fontSize/24,o=l=0,u=this.middle,this.ctx.textBaseline="middle"),n&&s&&(this.ctx.clearRect(l,o,n,s),this.ctx.fillText(t,this.buffer,u),c=this.ctx.getImageData(l,o,n,s));var f=new Uint8ClampedArray(r*i);return function(t,e,r,n,i,s,a){s.fill(Ec,0,e*r),a.fill(0,0,e*r);for(var o=(e-n)/2,l=0;l<i;l++)for(var u=0;u<n;u++){var c=(l+o)*e+u+o,h=t.data[4*(l*n+u)+3]/255;if(1===h)s[c]=0,a[c]=Ec;else if(0===h)s[c]=Ec,a[c]=0;else {var p=Math.max(0,.5-h),d=Math.max(0,h-.5);s[c]=p*p,a[c]=d*d;}}}(c,r,i,n,s,this.gridOuter,this.gridInner),Cc(this.gridOuter,r,i,this.f,this.v,this.z),Cc(this.gridInner,r,i,this.f,this.v,this.z),function(t,e,r,n,i,s,a){for(var o=0;o<e*r;o++){var l=Math.sqrt(n[o])-Math.sqrt(i[o]);t[o]=Math.round(255-255*(l/s+a));}}(f,r,i,this.gridOuter,this.gridInner,this.radius,this.cutoff),{data:f,metrics:{width:n,height:s,sdfWidth:r,sdfHeight:i,top:a,left:0,advance:p}}},Bc.prototype.draw=function(t){return this._draw(t,!1).data},Bc.prototype.drawWithMetrics=function(t){return this._draw(t,!0)},Tc.default=Mc;const Dc={none:0,ideographs:1,all:2};class Vc{constructor(t,e,r){this.requestManager=t,this.localGlyphMode=e,this.localFontFamily=r,this.entries={},this.localGlyphs={200:{},400:{},500:{},900:{}};}setURL(t){this.url=t;}getGlyphs(t,e){const r=[];for(const e in t)for(const n of t[e])r.push({stack:e,id:n});g(r,(({stack:t,id:e},r)=>{let n=this.entries[t];n||(n=this.entries[t]={glyphs:{},requests:{},ranges:{}});let i=n.glyphs[e];if(void 0!==i)return void r(null,{stack:t,id:e,glyph:i});if(i=this._tinySDF(n,t,e),i)return n.glyphs[e]=i,void r(null,{stack:t,id:e,glyph:i});const s=Math.floor(e/256);if(256*s>65535)return void r(new Error("glyphs > 65535 not supported"));if(n.ranges[s])return void r(null,{stack:t,id:e,glyph:i});let a=n.requests[s];a||(a=n.requests[s]=[],Vc.loadGlyphRange(t,s,this.url,this.requestManager,((t,e)=>{if(e){for(const t in e)this._doesCharSupportLocalGlyph(+t)||(n.glyphs[+t]=e[+t]);n.ranges[s]=!0;}for(const r of a)r(t,e);delete n.requests[s];}))),a.push(((n,i)=>{n?r(n):i&&r(null,{stack:t,id:e,glyph:i[e]||null});}));}),((t,r)=>{if(t)e(t);else if(r){const t={};for(const{stack:e,id:n,glyph:i}of r)(t[e]||(t[e]={}))[n]=i&&{id:i.id,bitmap:i.bitmap.clone(),metrics:i.metrics};e(null,t);}}));}_doesCharSupportLocalGlyph(t){return this.localGlyphMode!==Dc.none&&(this.localGlyphMode===Dc.all?!!this.localFontFamily:!!this.localFontFamily&&(Mi(t)||Ci(t)||bi(t)||wi(t)))}_tinySDF(t,e,r){const n=this.localFontFamily;if(!n)return;if(!this._doesCharSupportLocalGlyph(r))return;let i=t.tinySDF;if(!i){let r="400";/bold/i.test(e)?r="900":/medium/i.test(e)?r="500":/light/i.test(e)&&(r="200"),i=t.tinySDF=new Vc.TinySDF(48,6,16,.25,n,r);}if(this.localGlyphs[i.fontWeight][r])return this.localGlyphs[i.fontWeight][r];const{data:s,metrics:a}=i.drawWithMetrics(String.fromCharCode(r)),{sdfWidth:o,sdfHeight:l,width:u,height:c,left:h,top:p,advance:d}=a;return this.localGlyphs[i.fontWeight][r]={id:r,bitmap:new qo({width:o,height:l},s),metrics:{width:u/2,height:c/2,left:h/2,top:p/2-27,advance:d/2,localGlyph:!0}}}}function Lc(t,e,r,n){const s=[],a=t.image,o=a.pixelRatio,l=a.paddedRect.w-2,u=a.paddedRect.h-2,c=t.right-t.left,h=t.bottom-t.top,p=a.stretchX||[[0,l]],d=a.stretchY||[[0,u]],f=(t,e)=>t+e[1]-e[0],y=p.reduce(f,0),m=d.reduce(f,0),g=l-y,x=u-m;let v=0,b=y,w=0,_=m,k=0,A=g,S=0,I=x;if(a.content&&n){const t=a.content;v=Fc(p,0,t[0]),w=Fc(d,0,t[1]),b=Fc(p,t[0],t[2]),_=Fc(d,t[1],t[3]),k=t[0]-v,S=t[1]-w,A=t[2]-t[0]-b,I=t[3]-t[1]-_;}const z=(n,s,l,u)=>{const p=Uc(n.stretch-v,b,c,t.left),d=$c(n.fixed-k,A,n.stretch,y),f=Uc(s.stretch-w,_,h,t.top),g=$c(s.fixed-S,I,s.stretch,m),x=Uc(l.stretch-v,b,c,t.left),z=$c(l.fixed-k,A,l.stretch,y),T=Uc(u.stretch-w,_,h,t.top),M=$c(u.fixed-S,I,u.stretch,m),E=new i(p,f),B=new i(x,f),C=new i(x,T),P=new i(p,T),D=new i(d/o,g/o),V=new i(z/o,M/o),L=e*Math.PI/180;if(L){const t=Math.sin(L),e=Math.cos(L),r=[e,-t,t,e];E._matMult(r),B._matMult(r),P._matMult(r),C._matMult(r);}const F=n.stretch+n.fixed,R=s.stretch+s.fixed;return {tl:E,tr:B,bl:P,br:C,tex:{x:a.paddedRect.x+1+F,y:a.paddedRect.y+1+R,w:l.stretch+l.fixed-F,h:u.stretch+u.fixed-R},writingMode:void 0,glyphOffset:[0,0],sectionIndex:0,pixelOffsetTL:D,pixelOffsetBR:V,minFontScaleX:A/o/c,minFontScaleY:I/o/h,isSDF:r}};if(n&&(a.stretchX||a.stretchY)){const t=Rc(p,g,y),e=Rc(d,x,m);for(let r=0;r<t.length-1;r++){const n=t[r],i=t[r+1];for(let t=0;t<e.length-1;t++)s.push(z(n,e[t],i,e[t+1]));}}else s.push(z({fixed:0,stretch:-1},{fixed:0,stretch:-1},{fixed:0,stretch:l+1},{fixed:0,stretch:u+1}));return s}function Fc(t,e,r){let n=0;for(const i of t)n+=Math.max(e,Math.min(r,i[1]))-Math.max(e,Math.min(r,i[0]));return n}function Rc(t,e,r){const n=[{fixed:-1,stretch:0}];for(const[e,r]of t){const t=n[n.length-1];n.push({fixed:e-t.stretch,stretch:t.stretch}),n.push({fixed:e-t.stretch,stretch:t.stretch+(r-e)});}return n.push({fixed:e+1,stretch:r}),n}function Uc(t,e,r,n){return t/e*r+n}function $c(t,e,r,n){return t-e*r/n}Vc.loadGlyphRange=function(t,e,r,n,i){const s=256*e,a=s+255,o=n.transformRequest(n.normalizeGlyphsURL(r).replace("{fontstack}",t).replace("{range}",`${s}-${a}`),wt.Glyphs);St(o,((t,e)=>{if(t)i(t);else if(e){const t={};for(const r of function(t){return new Eu(t).readFields(Yu,[])}(e))t[r.id]=r;i(null,t);}}));},Vc.TinySDF=Tc;class Oc{constructor(t=[],e=qc){if(this.data=t,this.length=this.data.length,this.compare=e,this.length>0)for(let t=(this.length>>1)-1;t>=0;t--)this._down(t);}push(t){this.data.push(t),this.length++,this._up(this.length-1);}pop(){if(0===this.length)return;const t=this.data[0],e=this.data.pop();return this.length--,this.length>0&&(this.data[0]=e,this._down(0)),t}peek(){return this.data[0]}_up(t){const{data:e,compare:r}=this,n=e[t];for(;t>0;){const i=t-1>>1,s=e[i];if(r(n,s)>=0)break;e[t]=s,t=i;}e[t]=n;}_down(t){const{data:e,compare:r}=this,n=this.length>>1,i=e[t];for(;t<n;){let n=1+(t<<1),s=e[n];const a=n+1;if(a<this.length&&r(e[a],s)<0&&(n=a,s=e[a]),r(s,i)>=0)break;e[t]=s,t=n;}e[t]=i;}}function qc(t,e){return t<e?-1:t>e?1:0}function Nc(t,e=1,r=!1){let n=1/0,s=1/0,a=-1/0,o=-1/0;const l=t[0];for(let t=0;t<l.length;t++){const e=l[t];(!t||e.x<n)&&(n=e.x),(!t||e.y<s)&&(s=e.y),(!t||e.x>a)&&(a=e.x),(!t||e.y>o)&&(o=e.y);}const u=Math.min(a-n,o-s);let c=u/2;const h=new Oc([],jc);if(0===u)return new i(n,s);for(let e=n;e<a;e+=u)for(let r=s;r<o;r+=u)h.push(new Gc(e+c,r+c,c,t));let p=function(t){let e=0,r=0,n=0;const i=t[0];for(let t=0,s=i.length,a=s-1;t<s;a=t++){const s=i[t],o=i[a],l=s.x*o.y-o.x*s.y;r+=(s.x+o.x)*l,n+=(s.y+o.y)*l,e+=3*l;}return new Gc(r/e,n/e,0,t)}(t),d=h.length;for(;h.length;){const n=h.pop();(n.d>p.d||!p.d)&&(p=n,r&&console.log("found best %d after %d probes",Math.round(1e4*n.d)/1e4,d)),n.max-p.d<=e||(c=n.h/2,h.push(new Gc(n.p.x-c,n.p.y-c,c,t)),h.push(new Gc(n.p.x+c,n.p.y-c,c,t)),h.push(new Gc(n.p.x-c,n.p.y+c,c,t)),h.push(new Gc(n.p.x+c,n.p.y+c,c,t)),d+=4);}return r&&(console.log(`num probes: ${d}`),console.log(`best distance: ${p.d}`)),p.p}function jc(t,e){return e.max-t.max}function Gc(t,e,r,n){this.p=new i(t,e),this.h=r,this.d=function(t,e){let r=!1,n=1/0;for(let i=0;i<e.length;i++){const s=e[i];for(let e=0,i=s.length,a=i-1;e<i;a=e++){const i=s[e],o=s[a];i.y>t.y!=o.y>t.y&&t.x<(o.x-i.x)*(t.y-i.y)/(o.y-i.y)+i.x&&(r=!r),n=Math.min(n,eo(t,i,o));}}return (r?1:-1)*Math.sqrt(n)}(this.p,n),this.max=this.d+this.h*Math.SQRT2;}const Zc=Number.POSITIVE_INFINITY;function Xc(t,e){return e[1]!==Zc?function(t,e,r){let n=0,i=0;switch(e=Math.abs(e),r=Math.abs(r),t){case"top-right":case"top-left":case"top":i=r-7;break;case"bottom-right":case"bottom-left":case"bottom":i=7-r;}switch(t){case"top-right":case"bottom-right":case"right":n=-e;break;case"top-left":case"bottom-left":case"left":n=e;}return [n,i]}(t,e[0],e[1]):function(t,e){let r=0,n=0;e<0&&(e=0);const i=e/Math.sqrt(2);switch(t){case"top-right":case"top-left":n=i-7;break;case"bottom-right":case"bottom-left":n=7-i;break;case"bottom":n=7-e;break;case"top":n=e-7;}switch(t){case"top-right":case"bottom-right":r=-i;break;case"top-left":case"bottom-left":r=i;break;case"left":r=e;break;case"right":r=-e;}return [r,n]}(t,e[0])}function Kc(t,e,r,n,i,s,a,o){t.createArrays(),t.tilePixelRatio=Oa/(512*t.overscaling),t.compareText={},t.iconsNeedLinear=!1;const l=t.layers[0].layout,u=t.layers[0]._unevaluatedLayout._values,c={};if("composite"===t.textSizeData.kind){const{minZoom:e,maxZoom:r}=t.textSizeData;c.compositeTextSizes=[u["text-size"].possiblyEvaluate(new as(e),a),u["text-size"].possiblyEvaluate(new as(r),a)];}if("composite"===t.iconSizeData.kind){const{minZoom:e,maxZoom:r}=t.iconSizeData;c.compositeIconSizes=[u["icon-size"].possiblyEvaluate(new as(e),a),u["icon-size"].possiblyEvaluate(new as(r),a)];}c.layoutTextSize=u["text-size"].possiblyEvaluate(new as(o+1),a),c.layoutIconSize=u["icon-size"].possiblyEvaluate(new as(o+1),a),c.textMaxSize=u["text-size"].possiblyEvaluate(new as(18),a);const h="map"===l.get("text-rotation-alignment")&&"point"!==l.get("symbol-placement"),p=l.get("text-keep-upright"),d=l.get("text-size");for(const s of t.features){const o=l.get("text-font").evaluate(s,{},a).join(","),u=d.evaluate(s,{},a),f=c.layoutTextSize.evaluate(s,{},a),y=(c.layoutIconSize.evaluate(s,{},a),{horizontal:{},vertical:void 0}),m=s.text;let g,x=[0,0];if(m){const n=m.toString(),c=l.get("text-letter-spacing").evaluate(s,{},a)*bu,d=l.get("text-line-height").evaluate(s,{},a)*bu,g=Oi(n)?c:0,v=l.get("text-anchor").evaluate(s,{},a),b=l.get("text-variable-anchor");if(!b){const t=l.get("text-radial-offset").evaluate(s,{},a);x=t?Xc(v,[t*bu,Zc]):l.get("text-offset").evaluate(s,{},a).map((t=>t*bu));}let w=h?"center":l.get("text-justify").evaluate(s,{},a);const _=l.get("symbol-placement"),k="point"===_?l.get("text-max-width").evaluate(s,{},a)*bu:0,A=()=>{t.allowVerticalPlacement&&$i(n)&&(y.vertical=ac(m,e,r,i,o,k,d,v,"left",g,x,rc.vertical,!0,_,f,u));};if(!h&&b){const t="auto"===w?b.map((t=>Hc(t))):[w];let n=!1;for(let s=0;s<t.length;s++){const a=t[s];if(!y.horizontal[a])if(n)y.horizontal[a]=y.horizontal[0];else {const t=ac(m,e,r,i,o,k,d,"center",a,g,x,rc.horizontal,!1,_,f,u);t&&(y.horizontal[a]=t,n=1===t.positionedLines.length);}}A();}else {"auto"===w&&(w=Hc(v));const t=ac(m,e,r,i,o,k,d,v,w,g,x,rc.horizontal,!1,_,f,u);t&&(y.horizontal[w]=t),A(),$i(n)&&h&&p&&(y.vertical=ac(m,e,r,i,o,k,d,v,w,g,x,rc.vertical,!1,_,f,u));}}let v=!1;if(s.icon&&s.icon.name){const e=n[s.icon.name];e&&(g=gc(i[s.icon.name],l.get("icon-offset").evaluate(s,{},a),l.get("icon-anchor").evaluate(s,{},a)),v=e.sdf,void 0===t.sdfIcons?t.sdfIcons=e.sdf:t.sdfIcons!==e.sdf&&B("Style sheet warning: Cannot mix SDF and non-SDF icons in one buffer"),(e.pixelRatio!==t.pixelRatio||0!==l.get("icon-rotate").constantOr(1))&&(t.iconsNeedLinear=!0));}const b=Qc(y.horizontal)||y.vertical;t.iconsInText||(t.iconsInText=!!b&&b.iconsInText),(b||g)&&Yc(t,s,y,g,n,c,f,0,x,v,a);}s&&t.generateCollisionDebugBuffers(o,t.collisionBoxArray);}function Hc(t){switch(t){case"right":case"top-right":case"bottom-right":return "right";case"left":case"top-left":case"bottom-left":return "left"}return "center"}function Yc(t,e,r,n,i,s,a,o,l,u,h){let p=s.textMaxSize.evaluate(e,{},h);void 0===p&&(p=a);const d=t.layers[0].layout,f=d.get("icon-offset").evaluate(e,{},h),y=Qc(r.horizontal),m=a/24,g=t.tilePixelRatio*p/24,x=t.tilePixelRatio*d.get("symbol-spacing"),v=d.get("text-padding")*t.tilePixelRatio,b=d.get("icon-padding")*t.tilePixelRatio,w=c(d.get("text-max-angle")),_="map"===d.get("text-rotation-alignment")&&"point"!==d.get("symbol-placement"),k="map"===d.get("icon-rotation-alignment")&&"point"!==d.get("symbol-placement"),A=d.get("symbol-placement"),S=x/2,I=d.get("icon-text-fit");let z;n&&"none"!==I&&(t.allowVerticalPlacement&&r.vertical&&(z=xc(n,r.vertical,I,d.get("icon-text-fit-padding"),f,m)),y&&(n=xc(n,y,I,d.get("icon-text-fit-padding"),f,m)));const T=(o,c)=>{c.x<0||c.x>=Oa||c.y<0||c.y>=Oa||function(t,e,r,n,i,s,a,o,l,u,c,h,p,d,f,y,m,g,x,v,b,w,_,k){const A=t.addToLineVertexArray(e,r);let S,I,z,T,M,E,C,P=0,D=0,V=0,L=0,F=-1,R=-1;const U={};let $=ha(""),O=0,q=0;if(void 0===o._unevaluatedLayout.getValue("text-radial-offset")?[O,q]=o.layout.get("text-offset").evaluate(v,{},_).map((t=>t*bu)):(O=o.layout.get("text-radial-offset").evaluate(v,{},_)*bu,q=Zc),t.allowVerticalPlacement&&n.vertical){const t=n.vertical;if(d)E=eh(t),a&&(C=eh(a));else {const r=o.layout.get("text-rotate").evaluate(v,{},_)+90;z=th(l,e,u,c,h,t,p,r),a&&(T=th(l,e,u,c,h,a,m,r));}}if(i){const r=o.layout.get("icon-rotate").evaluate(v,{},_),n="none"!==o.layout.get("icon-text-fit"),s=Lc(i,r,w,n),p=a?Lc(a,r,w,n):void 0;I=th(l,e,u,c,h,i,m,r),P=4*s.length;const d=t.iconSizeData;let f=null;"source"===d.kind?(f=[wu*o.layout.get("icon-size").evaluate(v,{},_)],f[0]>Jc&&B(`${t.layerIds[0]}: Value for "icon-size" is >= 255. Reduce your "icon-size".`)):"composite"===d.kind&&(f=[wu*b.compositeIconSizes[0].evaluate(v,{},_),wu*b.compositeIconSizes[1].evaluate(v,{},_)],(f[0]>Jc||f[1]>Jc)&&B(`${t.layerIds[0]}: Value for "icon-size" is >= 255. Reduce your "icon-size".`)),t.addSymbols(t.icon,s,f,x,g,v,!1,e,A.lineStartIndex,A.lineLength,-1,_),F=t.icon.placedSymbolArray.length-1,p&&(D=4*p.length,t.addSymbols(t.icon,p,f,x,g,v,rc.vertical,e,A.lineStartIndex,A.lineLength,-1,_),R=t.icon.placedSymbolArray.length-1);}for(const r in n.horizontal){const i=n.horizontal[r];S||($=ha(i.text),d?M=eh(i):S=th(l,e,u,c,h,i,p,o.layout.get("text-rotate").evaluate(v,{},_)));const a=1===i.positionedLines.length;if(V+=Wc(t,e,i,s,o,d,v,f,A,n.vertical?rc.horizontal:rc.horizontalOnly,a?Object.keys(n.horizontal):[r],U,F,b,_),a)break}n.vertical&&(L+=Wc(t,e,n.vertical,s,o,d,v,f,A,rc.vertical,["vertical"],U,R,b,_));let N=-1;const j=(t,e)=>t?Math.max(t,e):e;N=j(M,N),N=j(E,N),N=j(C,N);const G=N>-1?1:0;G&&(N*=k/bu),t.glyphOffsetArray.length>=ch.MAX_GLYPHS&&B("Too many glyphs being rendered in a tile. See https://github.com/mapbox/mapbox-gl-js/issues/2907"),void 0!==v.sortKey&&t.addToSortKeyRanges(t.symbolInstances.length,v.sortKey),t.symbolInstances.emplaceBack(e.x,e.y,U.right>=0?U.right:-1,U.center>=0?U.center:-1,U.left>=0?U.left:-1,U.vertical||-1,F,R,$,void 0!==S?S:t.collisionBoxArray.length,void 0!==S?S+1:t.collisionBoxArray.length,void 0!==z?z:t.collisionBoxArray.length,void 0!==z?z+1:t.collisionBoxArray.length,void 0!==I?I:t.collisionBoxArray.length,void 0!==I?I+1:t.collisionBoxArray.length,T||t.collisionBoxArray.length,T?T+1:t.collisionBoxArray.length,u,V,L,P,D,G,0,O,q,N);}(t,c,o,r,n,i,z,t.layers[0],t.collisionBoxArray,e.index,e.sourceLayerIndex,t.index,v,_,l,0,b,k,f,e,s,u,h,a);};if("line"===A)for(const i of zc(e.geometry,0,0,Oa,Oa)){const e=Sc(i,x,w,r.vertical||y,n,24,g,t.overscaling,Oa);for(const r of e){const e=y;e&&rh(t,e.text,S,r)||T(i,r);}}else if("line-center"===A){for(const t of e.geometry)if(t.length>1){const e=Ac(t,w,r.vertical||y,n,24,g);e&&T(t,e);}}else if("Polygon"===e.type)for(const t of zl(e.geometry,0)){const e=Nc(t,16);T(t[0],new vc(e.x,e.y,0));}else if("LineString"===e.type)for(const t of e.geometry)T(t,new vc(t[0].x,t[0].y,0));else if("Point"===e.type)for(const t of e.geometry)for(const e of t)T([e],new vc(e.x,e.y,0));}const Jc=32640;function Wc(t,e,r,n,s,a,o,l,u,c,h,p,d,f,y){const m=function(t,e,r,n,s,a,o,l){const u=n.layout.get("text-rotate").evaluate(a,{})*Math.PI/180,c=[];for(const t of e.positionedLines)for(const n of t.positionedGlyphs){if(!n.rect)continue;const a=n.rect||{};let h=4,p=!0,d=1,f=0;const y=(s||l)&&n.vertical,m=n.metrics.advance*n.scale/2;if(l&&e.verticalizable){const e=(n.scale-1)*bu,r=(bu-n.metrics.width*n.scale)/2;f=t.lineOffset/2-(n.imageName?-r:e);}if(n.imageName){const t=o[n.imageName];p=t.sdf,d=t.pixelRatio,h=1/d;}const g=s?[n.x+m,n.y]:[0,0];let x=s?[0,0]:[n.x+m+r[0],n.y+r[1]-f],v=[0,0];y&&(v=x,x=[0,0]);const b=(n.metrics.left-h)*n.scale-m+x[0],w=(-n.metrics.top-h)*n.scale+x[1],_=b+a.w*n.scale/(d*(n.localGlyph?2:1)),k=w+a.h*n.scale/(d*(n.localGlyph?2:1)),A=new i(b,w),S=new i(_,w),I=new i(b,k),z=new i(_,k);if(y){const t=new i(-m,m-nc),e=-Math.PI/2,r=12-m,s=new i(22-r,-(n.imageName?r:0)),a=new i(...v);A._rotateAround(e,t)._add(s)._add(a),S._rotateAround(e,t)._add(s)._add(a),I._rotateAround(e,t)._add(s)._add(a),z._rotateAround(e,t)._add(s)._add(a);}if(u){const t=Math.sin(u),e=Math.cos(u),r=[e,-t,t,e];A._matMult(r),S._matMult(r),I._matMult(r),z._matMult(r);}const T=new i(0,0),M=new i(0,0);c.push({tl:A,tr:S,bl:I,br:z,tex:a,writingMode:e.writingMode,glyphOffset:g,sectionIndex:n.sectionIndex,isSDF:p,pixelOffsetTL:T,pixelOffsetBR:M,minFontScaleX:0,minFontScaleY:0});}return c}(0,r,l,s,a,o,n,t.allowVerticalPlacement),g=t.textSizeData;let x=null;"source"===g.kind?(x=[wu*s.layout.get("text-size").evaluate(o,{},y)],x[0]>Jc&&B(`${t.layerIds[0]}: Value for "text-size" is >= 255. Reduce your "text-size".`)):"composite"===g.kind&&(x=[wu*f.compositeTextSizes[0].evaluate(o,{},y),wu*f.compositeTextSizes[1].evaluate(o,{},y)],(x[0]>Jc||x[1]>Jc)&&B(`${t.layerIds[0]}: Value for "text-size" is >= 255. Reduce your "text-size".`)),t.addSymbols(t.text,m,x,l,a,o,c,e,u.lineStartIndex,u.lineLength,d,y);for(const e of h)p[e]=t.text.placedSymbolArray.length-1;return 4*m.length}function Qc(t){for(const e in t)return t[e];return null}function th(t,e,r,n,s,a,o,l){let u=a.top,h=a.bottom,p=a.left,d=a.right;const f=a.collisionPadding;if(f&&(p-=f[0],u-=f[1],d+=f[2],h+=f[3]),l){const t=new i(p,u),e=new i(d,u),r=new i(p,h),n=new i(d,h),s=c(l);t._rotate(s),e._rotate(s),r._rotate(s),n._rotate(s),p=Math.min(t.x,e.x,r.x,n.x),d=Math.max(t.x,e.x,r.x,n.x),u=Math.min(t.y,e.y,r.y,n.y),h=Math.max(t.y,e.y,r.y,n.y);}return t.emplaceBack(e.x,e.y,p,u,d,h,o,r,n,s),t.length-1}function eh(t){t.collisionPadding&&(t.top-=t.collisionPadding[1],t.bottom+=t.collisionPadding[3]);const e=t.bottom-t.top;return e>0?Math.max(10,e):null}function rh(t,e,r,n){const i=t.compareText;if(e in i){const t=i[e];for(let e=t.length-1;e>=0;e--)if(n.dist(t[e])<r)return !0}else i[e]=[];return i[e].push(n),!1}const nh=Gl.VectorTileFeature.types,ih=[{name:"a_fade_opacity",components:1,type:"Uint8",offset:0}];function sh(t,e,r,n,i,s,a,o,l,u,c,h,p){const d=o?Math.min(Jc,Math.round(o[0])):0,f=o?Math.min(Jc,Math.round(o[1])):0;t.emplaceBack(e,r,Math.round(32*n),Math.round(32*i),s,a,(d<<1)+(l?1:0),f,16*u,16*c,256*h,256*p);}function ah(t,e,r){t.emplaceBack(e.x,e.y,r),t.emplaceBack(e.x,e.y,r),t.emplaceBack(e.x,e.y,r),t.emplaceBack(e.x,e.y,r);}function oh(t){for(const e of t.sections)if(Xi(e.text))return !0;return !1}class lh{constructor(t){this.layoutVertexArray=new Ps,this.indexArray=new $s,this.programConfigurations=t,this.segments=new $a,this.dynamicLayoutVertexArray=new Ds,this.opacityVertexArray=new Vs,this.placedSymbolArray=new Ws;}isEmpty(){return 0===this.layoutVertexArray.length&&0===this.indexArray.length&&0===this.dynamicLayoutVertexArray.length&&0===this.opacityVertexArray.length}upload(t,e,r,n){this.isEmpty()||(r&&(this.layoutVertexBuffer=t.createVertexBuffer(this.layoutVertexArray,fu.members),this.indexBuffer=t.createIndexBuffer(this.indexArray,e),this.dynamicLayoutVertexBuffer=t.createVertexBuffer(this.dynamicLayoutVertexArray,yu.members,!0),this.opacityVertexBuffer=t.createVertexBuffer(this.opacityVertexArray,ih,!0),this.opacityVertexBuffer.itemSize=1),(r||n)&&this.programConfigurations.upload(t));}destroy(){this.layoutVertexBuffer&&(this.layoutVertexBuffer.destroy(),this.indexBuffer.destroy(),this.programConfigurations.destroy(),this.segments.destroy(),this.dynamicLayoutVertexBuffer.destroy(),this.opacityVertexBuffer.destroy());}}oi("SymbolBuffers",lh);class uh{constructor(t,e,r){this.layoutVertexArray=new t,this.layoutAttributes=e,this.indexArray=new r,this.segments=new $a,this.collisionVertexArray=new Us,this.collisionVertexArrayExt=new Ds;}upload(t){this.layoutVertexBuffer=t.createVertexBuffer(this.layoutVertexArray,this.layoutAttributes),this.indexBuffer=t.createIndexBuffer(this.indexArray),this.collisionVertexBuffer=t.createVertexBuffer(this.collisionVertexArray,mu.members,!0),this.collisionVertexBufferExt=t.createVertexBuffer(this.collisionVertexArrayExt,gu.members,!0);}destroy(){this.layoutVertexBuffer&&(this.layoutVertexBuffer.destroy(),this.indexBuffer.destroy(),this.segments.destroy(),this.collisionVertexBuffer.destroy(),this.collisionVertexBufferExt.destroy());}}oi("CollisionBuffers",uh);class ch{constructor(t){this.collisionBoxArray=t.collisionBoxArray,this.zoom=t.zoom,this.overscaling=t.overscaling,this.layers=t.layers,this.layerIds=this.layers.map((t=>t.id)),this.index=t.index,this.pixelRatio=t.pixelRatio,this.sourceLayerIndex=t.sourceLayerIndex,this.hasPattern=!1,this.hasRTLText=!1,this.sortKeyRanges=[],this.collisionCircleArray=[],this.placementInvProjMatrix=yo([]),this.placementViewportMatrix=yo([]);const e=this.layers[0]._unevaluatedLayout._values;this.textSizeData=_u(this.zoom,e["text-size"]),this.iconSizeData=_u(this.zoom,e["icon-size"]);const r=this.layers[0].layout,n=r.get("symbol-sort-key"),i=r.get("symbol-z-order");this.canOverlap=r.get("text-allow-overlap")||r.get("icon-allow-overlap")||r.get("text-ignore-placement")||r.get("icon-ignore-placement"),this.sortFeaturesByKey="viewport-y"!==i&&void 0!==n.constantOr(1),this.sortFeaturesByY=("viewport-y"===i||"auto"===i&&!this.sortFeaturesByKey)&&this.canOverlap,"point"===r.get("symbol-placement")&&(this.writingModes=r.get("text-writing-mode").map((t=>rc[t]))),this.stateDependentLayerIds=this.layers.filter((t=>t.isStateDependent())).map((t=>t.id)),this.sourceID=t.sourceID;}createArrays(){this.text=new lh(new Ea(this.layers,this.zoom,(t=>/^text/.test(t)))),this.icon=new lh(new Ea(this.layers,this.zoom,(t=>/^icon/.test(t)))),this.glyphOffsetArray=new ea,this.lineVertexArray=new ra,this.symbolInstances=new ta;}calculateGlyphDependencies(t,e,r,n,i){for(let s=0;s<t.length;s++)if(e[t.charCodeAt(s)]=!0,(r||n)&&i){const r=zu[t.charAt(s)];r&&(e[r.charCodeAt(0)]=!0);}}populate(t,e,r){const n=this.layers[0],i=n.layout,s=i.get("text-font"),a=i.get("text-field"),o=i.get("icon-image"),l=("constant"!==a.value.kind||a.value.value instanceof de&&!a.value.value.isEmpty()||a.value.value.toString().length>0)&&("constant"!==s.value.kind||s.value.value.length>0),u="constant"!==o.value.kind||!!o.value.value||Object.keys(o.parameters).length>0,c=i.get("symbol-sort-key");if(this.features=[],!l&&!u)return;const h=e.iconDependencies,p=e.glyphDependencies,d=e.availableImages,f=new as(this.zoom);for(const{feature:e,id:a,index:o,sourceLayerIndex:y}of t){const t=n._featureFilter.needGeometry,m=Ga(e,t);if(!n._featureFilter.filter(f,m,r))continue;let g,x;if(t||(m.geometry=ja(e)),l){const t=n.getValueAndResolveTokens("text-field",m,r,d),e=de.factory(t);oh(e)&&(this.hasRTLText=!0),(!this.hasRTLText||"unavailable"===ns()||this.hasRTLText&&ss.isParsed())&&(g=Iu(e,n,m));}if(u){const t=n.getValueAndResolveTokens("icon-image",m,r,d);x=t instanceof fe?t:fe.fromString(t);}if(!g&&!x)continue;const v=this.sortFeaturesByKey?c.evaluate(m,{},r):void 0;if(this.features.push({id:a,text:g,icon:x,index:o,sourceLayerIndex:y,geometry:m.geometry,properties:e.properties,type:nh[e.type],sortKey:v}),x&&(h[x.name]=!0),g){const t=s.evaluate(m,{},r).join(","),e="map"===i.get("text-rotation-alignment")&&"point"!==i.get("symbol-placement");this.allowVerticalPlacement=this.writingModes&&this.writingModes.indexOf(rc.vertical)>=0;for(const r of g.sections)if(r.image)h[r.image.name]=!0;else {const n=$i(g.toString()),i=r.fontStack||t,s=p[i]=p[i]||{};this.calculateGlyphDependencies(r.text,s,e,this.allowVerticalPlacement,n);}}}"line"===i.get("symbol-placement")&&(this.features=function(t){const e={},r={},n=[];let i=0;function s(e){n.push(t[e]),i++;}function a(t,e,i){const s=r[t];return delete r[t],r[e]=s,n[s].geometry[0].pop(),n[s].geometry[0]=n[s].geometry[0].concat(i[0]),s}function o(t,r,i){const s=e[r];return delete e[r],e[t]=s,n[s].geometry[0].shift(),n[s].geometry[0]=i[0].concat(n[s].geometry[0]),s}function l(t,e,r){const n=r?e[0][e[0].length-1]:e[0][0];return `${t}:${n.x}:${n.y}`}for(let u=0;u<t.length;u++){const c=t[u],h=c.geometry,p=c.text?c.text.toString():null;if(!p){s(u);continue}const d=l(p,h),f=l(p,h,!0);if(d in r&&f in e&&r[d]!==e[f]){const t=o(d,f,h),i=a(d,f,n[t].geometry);delete e[d],delete r[f],r[l(p,n[i].geometry,!0)]=i,n[t].geometry=null;}else d in r?a(d,f,h):f in e?o(d,f,h):(s(u),e[d]=i-1,r[f]=i-1);}return n.filter((t=>t.geometry))}(this.features)),this.sortFeaturesByKey&&this.features.sort(((t,e)=>t.sortKey-e.sortKey));}update(t,e,r){this.stateDependentLayers.length&&(this.text.programConfigurations.updatePaintArrays(t,e,this.layers,r),this.icon.programConfigurations.updatePaintArrays(t,e,this.layers,r));}isEmpty(){return 0===this.symbolInstances.length&&!this.hasRTLText}uploadPending(){return !this.uploaded||this.text.programConfigurations.needsUpload||this.icon.programConfigurations.needsUpload}upload(t){!this.uploaded&&this.hasDebugData()&&(this.textCollisionBox.upload(t),this.iconCollisionBox.upload(t)),this.text.upload(t,this.sortFeaturesByY,!this.uploaded,this.text.programConfigurations.needsUpload),this.icon.upload(t,this.sortFeaturesByY,!this.uploaded,this.icon.programConfigurations.needsUpload),this.uploaded=!0;}destroyDebugData(){this.textCollisionBox.destroy(),this.iconCollisionBox.destroy();}destroy(){this.text.destroy(),this.icon.destroy(),this.hasDebugData()&&this.destroyDebugData();}addToLineVertexArray(t,e){const r=this.lineVertexArray.length;if(void 0!==t.segment){let r=t.dist(e[t.segment+1]),n=t.dist(e[t.segment]);const i={};for(let n=t.segment+1;n<e.length;n++)i[n]={x:e[n].x,y:e[n].y,tileUnitDistanceFromAnchor:r},n<e.length-1&&(r+=e[n+1].dist(e[n]));for(let r=t.segment||0;r>=0;r--)i[r]={x:e[r].x,y:e[r].y,tileUnitDistanceFromAnchor:n},r>0&&(n+=e[r-1].dist(e[r]));for(let t=0;t<e.length;t++){const e=i[t];this.lineVertexArray.emplaceBack(e.x,e.y,e.tileUnitDistanceFromAnchor);}}return {lineStartIndex:r,lineLength:this.lineVertexArray.length-r}}addSymbols(t,e,r,n,i,s,a,o,l,u,c,h){const p=t.indexArray,d=t.layoutVertexArray,f=t.segments.prepareSegment(4*e.length,d,p,this.canOverlap?s.sortKey:void 0),y=this.glyphOffsetArray.length,m=f.vertexLength,g=this.allowVerticalPlacement&&a===rc.vertical?Math.PI/2:0,x=s.text&&s.text.sections;for(let n=0;n<e.length;n++){const{tl:i,tr:a,bl:l,br:u,tex:c,pixelOffsetTL:y,pixelOffsetBR:m,minFontScaleX:v,minFontScaleY:b,glyphOffset:w,isSDF:_,sectionIndex:k}=e[n],A=f.vertexLength,S=w[1];sh(d,o.x,o.y,i.x,S+i.y,c.x,c.y,r,_,y.x,y.y,v,b),sh(d,o.x,o.y,a.x,S+a.y,c.x+c.w,c.y,r,_,m.x,y.y,v,b),sh(d,o.x,o.y,l.x,S+l.y,c.x,c.y+c.h,r,_,y.x,m.y,v,b),sh(d,o.x,o.y,u.x,S+u.y,c.x+c.w,c.y+c.h,r,_,m.x,m.y,v,b),ah(t.dynamicLayoutVertexArray,o,g),p.emplaceBack(A,A+1,A+2),p.emplaceBack(A+1,A+2,A+3),f.vertexLength+=4,f.primitiveLength+=2,this.glyphOffsetArray.emplaceBack(w[0]),n!==e.length-1&&k===e[n+1].sectionIndex||t.programConfigurations.populatePaintArrays(d.length,s,s.index,{},h,x&&x[k]);}t.placedSymbolArray.emplaceBack(o.x,o.y,y,this.glyphOffsetArray.length-y,m,l,u,o.segment,r?r[0]:0,r?r[1]:0,n[0],n[1],a,0,!1,0,c);}_commitLayoutVertex(t,e,r,n,i){t.emplaceBack(e.x,e.y,r,n,Math.round(i.x),Math.round(i.y));}_addCollisionDebugVertices(t,e,r,n,s){const a=r.segments.prepareSegment(4,r.layoutVertexArray,r.indexArray),o=a.vertexLength,l=s.anchorX,u=s.anchorY;for(let t=0;t<4;t++)r.collisionVertexArray.emplaceBack(0,0,0,0);r.collisionVertexArrayExt.emplaceBack(e,-t.padding,-t.padding),r.collisionVertexArrayExt.emplaceBack(e,t.padding,-t.padding),r.collisionVertexArrayExt.emplaceBack(e,t.padding,t.padding),r.collisionVertexArrayExt.emplaceBack(e,-t.padding,t.padding),this._commitLayoutVertex(r.layoutVertexArray,n,l,u,new i(t.x1,t.y1)),this._commitLayoutVertex(r.layoutVertexArray,n,l,u,new i(t.x2,t.y1)),this._commitLayoutVertex(r.layoutVertexArray,n,l,u,new i(t.x2,t.y2)),this._commitLayoutVertex(r.layoutVertexArray,n,l,u,new i(t.x1,t.y2)),a.vertexLength+=4;const c=r.indexArray;c.emplaceBack(o,o+1),c.emplaceBack(o+1,o+2),c.emplaceBack(o+2,o+3),c.emplaceBack(o+3,o),a.primitiveLength+=4;}_addTextDebugCollisionBoxes(t,e,r,n,i,s){for(let a=n;a<i;a++){const n=r.get(a),i=this.getSymbolInstanceTextSize(t,s,e,a);this._addCollisionDebugVertices(n,i,this.textCollisionBox,n.anchorPoint,s);}}_addIconDebugCollisionBoxes(t,e,r,n,i,s){for(let a=n;a<i;a++){const n=r.get(a),i=this.getSymbolInstanceIconSize(t,e,a);this._addCollisionDebugVertices(n,i,this.iconCollisionBox,n.anchorPoint,s);}}generateCollisionDebugBuffers(t,e){this.hasDebugData()&&this.destroyDebugData(),this.textCollisionBox=new uh(Fs,xu.members,Zs),this.iconCollisionBox=new uh(Fs,xu.members,Zs);const r=Au(this.iconSizeData,t),n=Au(this.textSizeData,t);for(let i=0;i<this.symbolInstances.length;i++){const s=this.symbolInstances.get(i);this._addTextDebugCollisionBoxes(n,t,e,s.textBoxStartIndex,s.textBoxEndIndex,s),this._addTextDebugCollisionBoxes(n,t,e,s.verticalTextBoxStartIndex,s.verticalTextBoxEndIndex,s),this._addIconDebugCollisionBoxes(r,t,e,s.iconBoxStartIndex,s.iconBoxEndIndex,s),this._addIconDebugCollisionBoxes(r,t,e,s.verticalIconBoxStartIndex,s.verticalIconBoxEndIndex,s);}}getSymbolInstanceTextSize(t,e,r,n){const i=this.text.placedSymbolArray.get(e.rightJustifiedTextSymbolIndex>=0?e.rightJustifiedTextSymbolIndex:e.centerJustifiedTextSymbolIndex>=0?e.centerJustifiedTextSymbolIndex:e.leftJustifiedTextSymbolIndex>=0?e.leftJustifiedTextSymbolIndex:e.verticalPlacedTextSymbolIndex>=0?e.verticalPlacedTextSymbolIndex:n),s=ku(this.textSizeData,t,i)/bu;return this.tilePixelRatio*s}getSymbolInstanceIconSize(t,e,r){const n=this.icon.placedSymbolArray.get(r),i=ku(this.iconSizeData,t,n);return this.tilePixelRatio*i}_commitDebugCollisionVertexUpdate(t,e,r){t.emplaceBack(e,-r,-r),t.emplaceBack(e,r,-r),t.emplaceBack(e,r,r),t.emplaceBack(e,-r,r);}_updateTextDebugCollisionBoxes(t,e,r,n,i,s){for(let a=n;a<i;a++){const n=r.get(a),i=this.getSymbolInstanceTextSize(t,s,e,a);this._commitDebugCollisionVertexUpdate(this.textCollisionBox.collisionVertexArrayExt,i,n.padding);}}_updateIconDebugCollisionBoxes(t,e,r,n,i){for(let s=n;s<i;s++){const n=r.get(s),i=this.getSymbolInstanceIconSize(t,e,s);this._commitDebugCollisionVertexUpdate(this.iconCollisionBox.collisionVertexArrayExt,i,n.padding);}}updateCollisionDebugBuffers(t,e){if(!this.hasDebugData())return;this.hasTextCollisionBoxData()&&this.textCollisionBox.collisionVertexArrayExt.clear(),this.hasIconCollisionBoxData()&&this.iconCollisionBox.collisionVertexArrayExt.clear();const r=Au(this.iconSizeData,t),n=Au(this.textSizeData,t);for(let i=0;i<this.symbolInstances.length;i++){const s=this.symbolInstances.get(i);this._updateTextDebugCollisionBoxes(n,t,e,s.textBoxStartIndex,s.textBoxEndIndex,s),this._updateTextDebugCollisionBoxes(n,t,e,s.verticalTextBoxStartIndex,s.verticalTextBoxEndIndex,s),this._updateIconDebugCollisionBoxes(r,t,e,s.iconBoxStartIndex,s.iconBoxEndIndex),this._updateIconDebugCollisionBoxes(r,t,e,s.verticalIconBoxStartIndex,s.verticalIconBoxEndIndex);}this.hasTextCollisionBoxData()&&this.textCollisionBox.collisionVertexBufferExt&&this.textCollisionBox.collisionVertexBufferExt.updateData(this.textCollisionBox.collisionVertexArrayExt),this.hasIconCollisionBoxData()&&this.iconCollisionBox.collisionVertexBufferExt&&this.iconCollisionBox.collisionVertexBufferExt.updateData(this.iconCollisionBox.collisionVertexArrayExt);}_deserializeCollisionBoxesForSymbol(t,e,r,n,i,s,a,o,l){const u={};for(let n=e;n<r;n++){const e=t.get(n);u.textBox={x1:e.x1,y1:e.y1,x2:e.x2,y2:e.y2,padding:e.padding,anchorPointX:e.anchorPointX,anchorPointY:e.anchorPointY},u.textFeatureIndex=e.featureIndex;break}for(let e=n;e<i;e++){const r=t.get(e);u.verticalTextBox={x1:r.x1,y1:r.y1,x2:r.x2,y2:r.y2,padding:r.padding,anchorPointX:r.anchorPointX,anchorPointY:r.anchorPointY},u.verticalTextFeatureIndex=r.featureIndex;break}for(let e=s;e<a;e++){const r=t.get(e);u.iconBox={x1:r.x1,y1:r.y1,x2:r.x2,y2:r.y2,padding:r.padding,anchorPointX:r.anchorPointX,anchorPointY:r.anchorPointY},u.iconFeatureIndex=r.featureIndex;break}for(let e=o;e<l;e++){const r=t.get(e);u.verticalIconBox={x1:r.x1,y1:r.y1,x2:r.x2,y2:r.y2,padding:r.padding,anchorPointX:r.anchorPointX,anchorPointY:r.anchorPointY},u.verticalIconFeatureIndex=r.featureIndex;break}return u}deserializeCollisionBoxes(t){this.collisionArrays=[];for(let e=0;e<this.symbolInstances.length;e++){const r=this.symbolInstances.get(e);this.collisionArrays.push(this._deserializeCollisionBoxesForSymbol(t,r.textBoxStartIndex,r.textBoxEndIndex,r.verticalTextBoxStartIndex,r.verticalTextBoxEndIndex,r.iconBoxStartIndex,r.iconBoxEndIndex,r.verticalIconBoxStartIndex,r.verticalIconBoxEndIndex));}}hasTextData(){return this.text.segments.get().length>0}hasIconData(){return this.icon.segments.get().length>0}hasDebugData(){return this.textCollisionBox&&this.iconCollisionBox}hasTextCollisionBoxData(){return this.hasDebugData()&&this.textCollisionBox.segments.get().length>0}hasIconCollisionBoxData(){return this.hasDebugData()&&this.iconCollisionBox.segments.get().length>0}addIndicesForPlacedSymbol(t,e){const r=t.placedSymbolArray.get(e),n=r.vertexStartIndex+4*r.numGlyphs;for(let e=r.vertexStartIndex;e<n;e+=4)t.indexArray.emplaceBack(e,e+1,e+2),t.indexArray.emplaceBack(e+1,e+2,e+3);}getSortedSymbolIndexes(t){if(this.sortedAngle===t&&void 0!==this.symbolInstanceIndexes)return this.symbolInstanceIndexes;const e=Math.sin(t),r=Math.cos(t),n=[],i=[],s=[];for(let t=0;t<this.symbolInstances.length;++t){s.push(t);const a=this.symbolInstances.get(t);n.push(0|Math.round(e*a.anchorX+r*a.anchorY)),i.push(a.featureIndex);}return s.sort(((t,e)=>n[t]-n[e]||i[e]-i[t])),s}addToSortKeyRanges(t,e){const r=this.sortKeyRanges[this.sortKeyRanges.length-1];r&&r.sortKey===e?r.symbolInstanceEnd=t+1:this.sortKeyRanges.push({sortKey:e,symbolInstanceStart:t,symbolInstanceEnd:t+1});}sortFeatures(t){if(this.sortFeaturesByY&&this.sortedAngle!==t&&!(this.text.segments.get().length>1||this.icon.segments.get().length>1)){this.symbolInstanceIndexes=this.getSortedSymbolIndexes(t),this.sortedAngle=t,this.text.indexArray.clear(),this.icon.indexArray.clear(),this.featureSortOrder=[];for(const t of this.symbolInstanceIndexes){const e=this.symbolInstances.get(t);this.featureSortOrder.push(e.featureIndex),[e.rightJustifiedTextSymbolIndex,e.centerJustifiedTextSymbolIndex,e.leftJustifiedTextSymbolIndex].forEach(((t,e,r)=>{t>=0&&r.indexOf(t)===e&&this.addIndicesForPlacedSymbol(this.text,t);})),e.verticalPlacedTextSymbolIndex>=0&&this.addIndicesForPlacedSymbol(this.text,e.verticalPlacedTextSymbolIndex),e.placedIconSymbolIndex>=0&&this.addIndicesForPlacedSymbol(this.icon,e.placedIconSymbolIndex),e.verticalPlacedIconSymbolIndex>=0&&this.addIndicesForPlacedSymbol(this.icon,e.verticalPlacedIconSymbolIndex);}this.text.indexBuffer&&this.text.indexBuffer.updateData(this.text.indexArray),this.icon.indexBuffer&&this.icon.indexBuffer.updateData(this.icon.indexArray);}}}oi("SymbolBucket",ch,{omit:["layers","collisionBoxArray","features","compareText"]}),ch.MAX_GLYPHS=65535,ch.addDynamicAttributes=ah;const hh=new bs({"symbol-placement":new ys(Rt.layout_symbol["symbol-placement"]),"symbol-spacing":new ys(Rt.layout_symbol["symbol-spacing"]),"symbol-avoid-edges":new ys(Rt.layout_symbol["symbol-avoid-edges"]),"symbol-sort-key":new ms(Rt.layout_symbol["symbol-sort-key"]),"symbol-z-order":new ys(Rt.layout_symbol["symbol-z-order"]),"icon-allow-overlap":new ys(Rt.layout_symbol["icon-allow-overlap"]),"icon-ignore-placement":new ys(Rt.layout_symbol["icon-ignore-placement"]),"icon-optional":new ys(Rt.layout_symbol["icon-optional"]),"icon-rotation-alignment":new ys(Rt.layout_symbol["icon-rotation-alignment"]),"icon-size":new ms(Rt.layout_symbol["icon-size"]),"icon-text-fit":new ys(Rt.layout_symbol["icon-text-fit"]),"icon-text-fit-padding":new ys(Rt.layout_symbol["icon-text-fit-padding"]),"icon-image":new ms(Rt.layout_symbol["icon-image"]),"icon-rotate":new ms(Rt.layout_symbol["icon-rotate"]),"icon-padding":new ys(Rt.layout_symbol["icon-padding"]),"icon-keep-upright":new ys(Rt.layout_symbol["icon-keep-upright"]),"icon-offset":new ms(Rt.layout_symbol["icon-offset"]),"icon-anchor":new ms(Rt.layout_symbol["icon-anchor"]),"icon-pitch-alignment":new ys(Rt.layout_symbol["icon-pitch-alignment"]),"text-pitch-alignment":new ys(Rt.layout_symbol["text-pitch-alignment"]),"text-rotation-alignment":new ys(Rt.layout_symbol["text-rotation-alignment"]),"text-field":new ms(Rt.layout_symbol["text-field"]),"text-font":new ms(Rt.layout_symbol["text-font"]),"text-size":new ms(Rt.layout_symbol["text-size"]),"text-max-width":new ms(Rt.layout_symbol["text-max-width"]),"text-line-height":new ms(Rt.layout_symbol["text-line-height"]),"text-letter-spacing":new ms(Rt.layout_symbol["text-letter-spacing"]),"text-justify":new ms(Rt.layout_symbol["text-justify"]),"text-radial-offset":new ms(Rt.layout_symbol["text-radial-offset"]),"text-variable-anchor":new ys(Rt.layout_symbol["text-variable-anchor"]),"text-anchor":new ms(Rt.layout_symbol["text-anchor"]),"text-max-angle":new ys(Rt.layout_symbol["text-max-angle"]),"text-writing-mode":new ys(Rt.layout_symbol["text-writing-mode"]),"text-rotate":new ms(Rt.layout_symbol["text-rotate"]),"text-padding":new ys(Rt.layout_symbol["text-padding"]),"text-keep-upright":new ys(Rt.layout_symbol["text-keep-upright"]),"text-transform":new ms(Rt.layout_symbol["text-transform"]),"text-offset":new ms(Rt.layout_symbol["text-offset"]),"text-allow-overlap":new ys(Rt.layout_symbol["text-allow-overlap"]),"text-ignore-placement":new ys(Rt.layout_symbol["text-ignore-placement"]),"text-optional":new ys(Rt.layout_symbol["text-optional"])});var ph={paint:new bs({"icon-opacity":new ms(Rt.paint_symbol["icon-opacity"]),"icon-color":new ms(Rt.paint_symbol["icon-color"]),"icon-halo-color":new ms(Rt.paint_symbol["icon-halo-color"]),"icon-halo-width":new ms(Rt.paint_symbol["icon-halo-width"]),"icon-halo-blur":new ms(Rt.paint_symbol["icon-halo-blur"]),"icon-translate":new ys(Rt.paint_symbol["icon-translate"]),"icon-translate-anchor":new ys(Rt.paint_symbol["icon-translate-anchor"]),"text-opacity":new ms(Rt.paint_symbol["text-opacity"]),"text-color":new ms(Rt.paint_symbol["text-color"],{runtimeType:Yt,getOverride:t=>t.textColor,hasOverride:t=>!!t.textColor}),"text-halo-color":new ms(Rt.paint_symbol["text-halo-color"]),"text-halo-width":new ms(Rt.paint_symbol["text-halo-width"]),"text-halo-blur":new ms(Rt.paint_symbol["text-halo-blur"]),"text-translate":new ys(Rt.paint_symbol["text-translate"]),"text-translate-anchor":new ys(Rt.paint_symbol["text-translate-anchor"])}),layout:hh};class dh{constructor(t){this.type=t.property.overrides?t.property.overrides.runtimeType:Zt,this.defaultValue=t;}evaluate(t){if(t.formattedSection){const e=this.defaultValue.property.overrides;if(e&&e.hasOverride(t.formattedSection))return e.getOverride(t.formattedSection)}return t.feature&&t.featureState?this.defaultValue.evaluate(t.feature,t.featureState):this.defaultValue.property.specification.default}eachChild(t){this.defaultValue.isConstant()||t(this.defaultValue.value._styleExpression.expression);}outputDefined(){return !1}serialize(){return null}}oi("FormatSectionOverride",dh,{omit:["defaultValue"]});class fh extends Fa{constructor(t){super(t,ph);}recalculate(t,e){if(super.recalculate(t,e),"auto"===this.layout.get("icon-rotation-alignment")&&(this.layout._values["icon-rotation-alignment"]="point"!==this.layout.get("symbol-placement")?"map":"viewport"),"auto"===this.layout.get("text-rotation-alignment")&&(this.layout._values["text-rotation-alignment"]="point"!==this.layout.get("symbol-placement")?"map":"viewport"),"auto"===this.layout.get("text-pitch-alignment")&&(this.layout._values["text-pitch-alignment"]=this.layout.get("text-rotation-alignment")),"auto"===this.layout.get("icon-pitch-alignment")&&(this.layout._values["icon-pitch-alignment"]=this.layout.get("icon-rotation-alignment")),"point"===this.layout.get("symbol-placement")){const t=this.layout.get("text-writing-mode");if(t){const e=[];for(const r of t)e.indexOf(r)<0&&e.push(r);this.layout._values["text-writing-mode"]=e;}else this.layout._values["text-writing-mode"]=["horizontal"];}this._setPaintOverrides();}getValueAndResolveTokens(t,e,r,n){const i=this.layout.get(t).evaluate(e,{},r,n),s=this._unevaluatedLayout._values[t];return s.isDataDriven()||un(s.value)||!i?i:function(t,e){return e.replace(/{([^{}]+)}/g,((e,r)=>r in t?String(t[r]):""))}(e.properties,i)}createBucket(t){return new ch(t)}queryRadius(){return 0}queryIntersectsFeature(){return !1}_setPaintOverrides(){for(const t of ph.paint.overridableProperties){if(!fh.hasPaintOverride(this.layout,t))continue;const e=this.paint.get(t),r=new dh(e),n=new ln(r,e.property.specification);let i=null;i="constant"===e.value.kind||"source"===e.value.kind?new hn("source",n):new pn("composite",n,e.value.zoomStops,e.value._interpolationType),this.paint._values[t]=new ds(e.property,i,e.parameters);}}_handleOverridablePaintPropertyUpdate(t,e,r){return !(!this.layout||e.isDataDriven()||r.isDataDriven())&&fh.hasPaintOverride(this.layout,t)}static hasPaintOverride(t,e){const r=t.get("text-field"),n=ph.paint.properties[e];let i=!1;const s=t=>{for(const e of t)if(n.overrides&&n.overrides.hasOverride(e))return void(i=!0)};if("constant"===r.value.kind&&r.value.value instanceof de)s(r.value.value.sections);else if("source"===r.value.kind){const t=e=>{i||(e instanceof ve&&ge(e.value)===te?s(e.value.sections):e instanceof ke?s(e.sections):e.eachChild(t));},e=r.value;e._styleExpression&&t(e._styleExpression.expression);}return i}getProgramConfiguration(t){return new Ma(this,t)}}var yh={paint:new bs({"background-color":new ys(Rt.paint_background["background-color"]),"background-pattern":new xs(Rt.paint_background["background-pattern"]),"background-opacity":new ys(Rt.paint_background["background-opacity"])})},mh={paint:new bs({"raster-opacity":new ys(Rt.paint_raster["raster-opacity"]),"raster-hue-rotate":new ys(Rt.paint_raster["raster-hue-rotate"]),"raster-brightness-min":new ys(Rt.paint_raster["raster-brightness-min"]),"raster-brightness-max":new ys(Rt.paint_raster["raster-brightness-max"]),"raster-saturation":new ys(Rt.paint_raster["raster-saturation"]),"raster-contrast":new ys(Rt.paint_raster["raster-contrast"]),"raster-resampling":new ys(Rt.paint_raster["raster-resampling"]),"raster-fade-duration":new ys(Rt.paint_raster["raster-fade-duration"])})};class gh extends Fa{constructor(t){super(t,{}),this.implementation=t;}is3D(){return "3d"===this.implementation.renderingMode}hasOffscreenPass(){return void 0!==this.implementation.prerender}recalculate(){}updateTransitions(){}hasTransition(){}serialize(){}onAdd(t){this.implementation.onAdd&&this.implementation.onAdd(t,t.painter.context.gl);}onRemove(t){this.implementation.onRemove&&this.implementation.onRemove(t,t.painter.context.gl);}}var xh={paint:new bs({"sky-type":new ys(Rt.paint_sky["sky-type"]),"sky-atmosphere-sun":new ys(Rt.paint_sky["sky-atmosphere-sun"]),"sky-atmosphere-sun-intensity":new ys(Rt.paint_sky["sky-atmosphere-sun-intensity"]),"sky-gradient-center":new ys(Rt.paint_sky["sky-gradient-center"]),"sky-gradient-radius":new ys(Rt.paint_sky["sky-gradient-radius"]),"sky-gradient":new vs(Rt.paint_sky["sky-gradient"]),"sky-atmosphere-halo-color":new ys(Rt.paint_sky["sky-atmosphere-halo-color"]),"sky-atmosphere-color":new ys(Rt.paint_sky["sky-atmosphere-color"]),"sky-opacity":new ys(Rt.paint_sky["sky-opacity"])})};function vh(t,e,r){const n=bo(0,0,1),i=Co(Bo());return function(t,e,r){r*=.5;var n=e[0],i=e[1],s=e[2],a=e[3],o=Math.sin(r),l=Math.cos(r);t[0]=n*l-s*o,t[1]=i*l+a*o,t[2]=s*l+n*o,t[3]=a*l-i*o;}(i,i,r?-c(t)+Math.PI:c(t)),Po(i,i,-c(e)),So(n,n,i),Ao(n,n)}const bh={circle:class extends Fa{constructor(t){super(t,ho);}createBucket(t){return new Xa(t)}queryRadius(t){const e=t;return ao("circle-radius",this,e)+ao("circle-stroke-width",this,e)+oo(this.paint.get("circle-translate"))}queryIntersectsFeature(t,e,r,n,i,s,a,o){const l="map"===this.paint.get("circle-pitch-alignment");if(l&&t.queryGeometry.isAboveHorizon)return !1;const u=uo(this.paint.get("circle-translate"),this.paint.get("circle-translate-anchor"),s.angle,t.pixelToTileUnitsFactor),c=this.paint.get("circle-radius").evaluate(e,r)+this.paint.get("circle-stroke-width").evaluate(e,r),h=l?c*t.pixelToTileUnitsFactor:c;for(const e of n)for(const r of e){const e=r.add(u),n=o&&s.elevation?s.elevation.exaggeration()*o.getElevationAt(e.x,e.y,!0):0,i=l?e:Do(e,n,a),c=l?t.tilespaceRays.map((t=>Fo(t,n))):t.queryGeometry.screenGeometry;let p=h;const d=Eo([],[r.x,r.y,n,1],a);if("viewport"===this.paint.get("circle-pitch-scale")&&"map"===this.paint.get("circle-pitch-alignment")?p*=d[3]/s.cameraToCenterDistance:"map"===this.paint.get("circle-pitch-scale")&&"viewport"===this.paint.get("circle-pitch-alignment")&&(p*=s.cameraToCenterDistance/d[3]),Ha(c,i,p))return !0}return !1}getProgramIds(){return ["circle"]}getProgramConfiguration(t){return new Ma(this,t)}},heatmap:class extends Fa{createBucket(t){return new Ro(t)}constructor(t){super(t,jo),this._updateColorRamp();}_handleSpecialPaintPropertyUpdate(t){"heatmap-color"===t&&this._updateColorRamp();}_updateColorRamp(){this.colorRamp=Go({expression:this._transitionablePaint._values["heatmap-color"].value.expression,evaluationKey:"heatmapDensity",image:this.colorRamp}),this.colorRampTexture=null;}resize(){this.heatmapFbo&&(this.heatmapFbo.destroy(),this.heatmapFbo=null);}queryRadius(){return 0}queryIntersectsFeature(){return !1}hasOffscreenPass(){return 0!==this.paint.get("heatmap-opacity")&&"none"!==this.visibility}getProgramIds(){return ["heatmap","heatmapTexture"]}getProgramConfiguration(t){return new Ma(this,t)}},hillshade:class extends Fa{constructor(t){super(t,Zo);}hasOffscreenPass(){return 0!==this.paint.get("hillshade-exaggeration")&&"none"!==this.visibility}getProgramIds(){return ["hillshade","hillshadePrepare"]}getProgramConfiguration(t){return new Ma(this,t)}},fill:class extends Fa{constructor(t){super(t,Pl);}getProgramIds(){const t=this.paint.get("fill-pattern"),e=t&&t.constantOr(1),r=[e?"fillPattern":"fill"];return this.paint.get("fill-antialias")&&r.push(e&&!this.getPaintProperty("fill-outline-color")?"fillOutlinePattern":"fillOutline"),r}getProgramConfiguration(t){return new Ma(this,t)}recalculate(t,e){super.recalculate(t,e);const r=this.paint._values["fill-outline-color"];"constant"===r.value.kind&&void 0===r.value.value&&(this.paint._values["fill-outline-color"]=this.paint._values["fill-color"]);}createBucket(t){return new Bl(t)}queryRadius(){return oo(this.paint.get("fill-translate"))}queryIntersectsFeature(t,e,r,n,i,s){return !t.queryGeometry.isAboveHorizon&&Ya(lo(t.tilespaceGeometry,this.paint.get("fill-translate"),this.paint.get("fill-translate-anchor"),s.angle,t.pixelToTileUnitsFactor),n)}isTileClipped(){return !0}},"fill-extrusion":class extends Fa{constructor(t){super(t,Wl);}createBucket(t){return new Yl(t)}queryRadius(){return oo(this.paint.get("fill-extrusion-translate"))}is3D(){return !0}getProgramIds(){return [this.paint.get("fill-extrusion-pattern").constantOr(1)?"fillExtrusionPattern":"fillExtrusion"]}getProgramConfiguration(t){return new Ma(this,t)}queryIntersectsFeature(t,e,r,n,s,a,o,l,u){const c=uo(this.paint.get("fill-extrusion-translate"),this.paint.get("fill-extrusion-translate-anchor"),a.angle,t.pixelToTileUnitsFactor),h=this.paint.get("fill-extrusion-height").evaluate(e,r),p=this.paint.get("fill-extrusion-base").evaluate(e,r),d=[0,0],f=l&&a.elevation,y=a.elevation?a.elevation.exaggeration():1;if(f){const e=t.tile.getBucket(this).centroidVertexArray,r=u+1;if(r<e.length){const t=e.get(r);d[0]=t.a_centroid_pos0,d[1]=t.a_centroid_pos1;}}if(0===d[0]&&1===d[1])return !1;const m=function(t,e,r,n,s,a,o,l,u){return a?function(t,e,r,n,i,s,a,o,l){const u=[],c=[],h=[0,0,0,1];for(const p of t){const t=[],d=[];for(const u of p){const c=u.x+n.x,p=u.y+n.y,f=ru(c,p,e,r,s,a,o,l);h[0]=c,h[1]=p,h[2]=f.base,h[3]=1,Eo(h,h,i),h[3]=Math.max(h[3],1e-5);const y=eu([h[0]/h[3],h[1]/h[3],h[2]/h[3]]);h[0]=c,h[1]=p,h[2]=f.top,h[3]=1,Eo(h,h,i),h[3]=Math.max(h[3],1e-5);const m=eu([h[0]/h[3],h[1]/h[3],h[2]/h[3]]);t.push(y),d.push(m);}u.push(t),c.push(d);}return [u,c]}(t,e,r,n,s,a,o,l,u):function(t,e,r,n,s){const a=[],o=[],l=s[8]*e,u=s[9]*e,c=s[10]*e,h=s[11]*e,p=s[8]*r,d=s[9]*r,f=s[10]*r,y=s[11]*r;for(const e of t){const t=[],r=[];for(const a of e){const e=a.x+n.x,o=a.y+n.y,m=s[0]*e+s[4]*o+s[12],g=s[1]*e+s[5]*o+s[13],x=s[2]*e+s[6]*o+s[14],v=s[3]*e+s[7]*o+s[15],b=m+l,w=g+u,_=x+c,k=Math.max(v+h,1e-5),A=m+p,S=g+d,I=x+f,z=Math.max(v+y,1e-5),T=new i(b/k,w/k);T.z=_/k,t.push(T);const M=new i(A/z,S/z);M.z=I/z,r.push(M);}a.push(t),o.push(r);}return [a,o]}(t,e,r,n,s)}(n,p,h,c,o,f?l:null,d,y,a.center.lat),g=t.queryGeometry;return function(t,e,r){let n=1/0;Ya(r,e)&&(n=tu(r,e[0]));for(let i=0;i<e.length;i++){const s=e[i],a=t[i];for(let t=0;t<s.length-1;t++){const e=s[t],i=[e,s[t+1],a[t+1],a[t],e];Ka(r,i)&&(n=Math.min(n,tu(r,i)));}}return n!==1/0&&n}(m[0],m[1],g.isPointQuery()?g.screenBounds:g.screenGeometry)}},line:class extends Fa{constructor(t){super(t,hu),this.gradientVersion=0;}_handleSpecialPaintPropertyUpdate(t){if("line-gradient"===t){const t=this._transitionablePaint._values["line-gradient"].value.expression;this.stepInterpolant=t._styleExpression&&t._styleExpression.expression instanceof er,this.gradientVersion=(this.gradientVersion+1)%o;}}gradientExpression(){return this._transitionablePaint._values["line-gradient"].value.expression}recalculate(t,e){super.recalculate(t,e),this.paint._values["line-floorwidth"]=pu.possiblyEvaluate(this._transitioningPaint._values["line-width"].value,t);}createBucket(t){return new uu(t)}getProgramIds(){const t=this.paint.get("line-dasharray"),e=this.paint.get("line-pattern").constantOr(1),r=this.paint.get("line-gradient");return [e?"linePattern":t?"lineSDF":r?"lineGradient":"line"]}getProgramConfiguration(t){return new Ma(this,t)}queryRadius(t){const e=t,r=du(ao("line-width",this,e),ao("line-gap-width",this,e)),n=ao("line-offset",this,e);return r/2+Math.abs(n)+oo(this.paint.get("line-translate"))}queryIntersectsFeature(t,e,r,n,s,a){if(t.queryGeometry.isAboveHorizon)return !1;const o=lo(t.tilespaceGeometry,this.paint.get("line-translate"),this.paint.get("line-translate-anchor"),a.angle,t.pixelToTileUnitsFactor),l=t.pixelToTileUnitsFactor/2*du(this.paint.get("line-width").evaluate(e,r),this.paint.get("line-gap-width").evaluate(e,r)),u=this.paint.get("line-offset").evaluate(e,r);return u&&(n=function(t,e){const r=[],n=new i(0,0);for(let i=0;i<t.length;i++){const s=t[i],a=[];for(let t=0;t<s.length;t++){const r=s[t-1],i=s[t],o=s[t+1],l=0===t?n:i.sub(r)._unit()._perp(),u=t===s.length-1?n:o.sub(i)._unit()._perp(),c=l._add(u)._unit();c._mult(1/(c.x*u.x+c.y*u.y)),a.push(c._mult(e)._add(i));}r.push(a);}return r}(n,u*t.pixelToTileUnitsFactor)),function(t,e,r){for(let n=0;n<e.length;n++){const i=e[n];if(t.length>=3)for(let e=0;e<i.length;e++)if(no(t,i[e]))return !0;if(Ja(t,i,r))return !0}return !1}(o,n,l)}isTileClipped(){return !0}},symbol:fh,background:class extends Fa{constructor(t){super(t,yh);}getProgramIds(){return [this.paint.get("background-pattern")?"backgroundPattern":"background"]}},raster:class extends Fa{constructor(t){super(t,mh);}getProgramIds(){return ["raster"]}},sky:class extends Fa{constructor(t){super(t,xh),this._updateColorRamp();}_handleSpecialPaintPropertyUpdate(t){"sky-gradient"===t?this._updateColorRamp():"sky-atmosphere-sun"!==t&&"sky-atmosphere-halo-color"!==t&&"sky-atmosphere-color"!==t&&"sky-atmosphere-sun-intensity"!==t||(this._skyboxInvalidated=!0);}_updateColorRamp(){this.colorRamp=Go({expression:this._transitionablePaint._values["sky-gradient"].value.expression,evaluationKey:"skyRadialProgress"}),this.colorRampTexture&&(this.colorRampTexture.destroy(),this.colorRampTexture=null);}needsSkyboxCapture(t){if(this._skyboxInvalidated||!this.skyboxTexture||!this.skyboxGeometry)return !0;if(!this.paint.get("sky-atmosphere-sun")){const e=t.style.light.properties.get("position");return this._lightPosition.azimuthal!==e.azimuthal||this._lightPosition.polar!==e.polar}}getCenter(t,e){const r=this.paint.get("sky-type");if("atmosphere"===r){const r=this.paint.get("sky-atmosphere-sun"),n=!r,i=t.style.light,s=i.properties.get("position");return n&&"viewport"===i.properties.get("anchor")&&B("The sun direction is attached to a light with viewport anchor, lighting may behave unexpectedly."),n?vh(s.azimuthal,90-s.polar,e):vh(r[0],90-r[1],e)}if("gradient"===r){const t=this.paint.get("sky-gradient-center");return vh(t[0],90-t[1],e)}}is3D(){return !1}isSky(){return !0}markSkyboxValid(t){this._skyboxInvalidated=!1,this._lightPosition=t.style.light.properties.get("position");}hasOffscreenPass(){return !0}getProgramIds(){const t=this.paint.get("sky-type");return "atmosphere"===t?["skyboxCapture","skybox"]:"gradient"===t?["skyboxGradient"]:null}}},{HTMLImageElement:wh,HTMLCanvasElement:_h,HTMLVideoElement:kh,ImageData:Ah,ImageBitmap:Sh}=a;class Ih{constructor(t,e,r,n){this.context=t,this.format=r,this.texture=t.gl.createTexture(),this.update(e,n);}update(t,e,r){const{width:n,height:i}=t,s=!(this.size&&this.size[0]===n&&this.size[1]===i||r),{context:a}=this,{gl:o}=a;if(this.useMipmap=Boolean(e&&e.useMipmap),o.bindTexture(o.TEXTURE_2D,this.texture),a.pixelStoreUnpackFlipY.set(!1),a.pixelStoreUnpack.set(1),a.pixelStoreUnpackPremultiplyAlpha.set(this.format===o.RGBA&&(!e||!1!==e.premultiply)),s)this.size=[n,i],t instanceof wh||t instanceof _h||t instanceof kh||t instanceof Ah||Sh&&t instanceof Sh?o.texImage2D(o.TEXTURE_2D,0,this.format,this.format,o.UNSIGNED_BYTE,t):o.texImage2D(o.TEXTURE_2D,0,this.format,n,i,0,this.format,o.UNSIGNED_BYTE,t.data);else {const{x:e,y:s}=r||{x:0,y:0};t instanceof wh||t instanceof _h||t instanceof kh||t instanceof Ah||Sh&&t instanceof Sh?o.texSubImage2D(o.TEXTURE_2D,0,e,s,o.RGBA,o.UNSIGNED_BYTE,t):o.texSubImage2D(o.TEXTURE_2D,0,e,s,n,i,o.RGBA,o.UNSIGNED_BYTE,t.data);}this.useMipmap&&this.isSizePowerOfTwo()&&o.generateMipmap(o.TEXTURE_2D);}bind(t,e,r){const{context:n}=this,{gl:i}=n;i.bindTexture(i.TEXTURE_2D,this.texture),r!==i.LINEAR_MIPMAP_NEAREST||this.isSizePowerOfTwo()||(r=i.LINEAR),t!==this.filter&&(i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,t),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,r||t),this.filter=t),e!==this.wrap&&(i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,e),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,e),this.wrap=e);}isSizePowerOfTwo(){return this.size[0]===this.size[1]&&Math.log(this.size[0])/Math.LN2%1==0}destroy(){const{gl:t}=this.context;t.deleteTexture(this.texture),this.texture=null;}}class zh{constructor(t,e){t&&(e?this.setSouthWest(t).setNorthEast(e):4===t.length?this.setSouthWest([t[0],t[1]]).setNorthEast([t[2],t[3]]):this.setSouthWest(t[0]).setNorthEast(t[1]));}setNorthEast(t){return this._ne=t instanceof Mh?new Mh(t.lng,t.lat):Mh.convert(t),this}setSouthWest(t){return this._sw=t instanceof Mh?new Mh(t.lng,t.lat):Mh.convert(t),this}extend(t){const e=this._sw,r=this._ne;let n,i;if(t instanceof Mh)n=t,i=t;else {if(!(t instanceof zh))return Array.isArray(t)?4===t.length||t.every(Array.isArray)?this.extend(zh.convert(t)):this.extend(Mh.convert(t)):this;if(n=t._sw,i=t._ne,!n||!i)return this}return e||r?(e.lng=Math.min(n.lng,e.lng),e.lat=Math.min(n.lat,e.lat),r.lng=Math.max(i.lng,r.lng),r.lat=Math.max(i.lat,r.lat)):(this._sw=new Mh(n.lng,n.lat),this._ne=new Mh(i.lng,i.lat)),this}getCenter(){return new Mh((this._sw.lng+this._ne.lng)/2,(this._sw.lat+this._ne.lat)/2)}getSouthWest(){return this._sw}getNorthEast(){return this._ne}getNorthWest(){return new Mh(this.getWest(),this.getNorth())}getSouthEast(){return new Mh(this.getEast(),this.getSouth())}getWest(){return this._sw.lng}getSouth(){return this._sw.lat}getEast(){return this._ne.lng}getNorth(){return this._ne.lat}toArray(){return [this._sw.toArray(),this._ne.toArray()]}toString(){return `LngLatBounds(${this._sw.toString()}, ${this._ne.toString()})`}isEmpty(){return !(this._sw&&this._ne)}contains(t){const{lng:e,lat:r}=Mh.convert(t);let n=this._sw.lng<=e&&e<=this._ne.lng;return this._sw.lng>this._ne.lng&&(n=this._sw.lng>=e&&e>=this._ne.lng),this._sw.lat<=r&&r<=this._ne.lat&&n}static convert(t){return !t||t instanceof zh?t:new zh(t)}}const Th=6371008.8;class Mh{constructor(t,e){if(isNaN(t)||isNaN(e))throw new Error(`Invalid LngLat object: (${t}, ${e})`);if(this.lng=+t,this.lat=+e,this.lat>90||this.lat<-90)throw new Error("Invalid LngLat latitude value: must be between -90 and 90")}wrap(){return new Mh(m(this.lng,-180,180),this.lat)}toArray(){return [this.lng,this.lat]}toString(){return `LngLat(${this.lng}, ${this.lat})`}distanceTo(t){const e=Math.PI/180,r=this.lat*e,n=t.lat*e,i=Math.sin(r)*Math.sin(n)+Math.cos(r)*Math.cos(n)*Math.cos((t.lng-this.lng)*e);return Th*Math.acos(Math.min(i,1))}toBounds(t=0){const e=360*t/40075017,r=e/Math.cos(Math.PI/180*this.lat);return new zh(new Mh(this.lng-r,this.lat-e),new Mh(this.lng+r,this.lat+e))}static convert(t){if(t instanceof Mh)return t;if(Array.isArray(t)&&(2===t.length||3===t.length))return new Mh(Number(t[0]),Number(t[1]));if(!Array.isArray(t)&&"object"==typeof t&&null!==t)return new Mh(Number("lng"in t?t.lng:t.lon),Number(t.lat));throw new Error("`LngLatLike` argument must be specified as a LngLat instance, an object {lng: <lng>, lat: <lat>}, an object {lon: <lng>, lat: <lat>}, or an array of [<lng>, <lat>]")}}const Eh=2*Math.PI*Th;function Bh(t){return Eh*Math.cos(t*Math.PI/180)}function Ch(t){return (180+t)/360}function Ph(t){return (180-180/Math.PI*Math.log(Math.tan(Math.PI/4+t*Math.PI/360)))/360}function Dh(t,e){return t/Bh(e)}function Vh(t){return 360/Math.PI*Math.atan(Math.exp((180-360*t)*Math.PI/180))-90}function Lh(t,e){return t*Bh(Vh(e))}class Fh{constructor(t,e,r=0){this.x=+t,this.y=+e,this.z=+r;}static fromLngLat(t,e=0){const r=Mh.convert(t);return new Fh(Ch(r.lng),Ph(r.lat),Dh(e,r.lat))}toLngLat(){return new Mh(360*this.x-180,Vh(this.y))}toAltitude(){return Lh(this.z,this.y)}meterInMercatorCoordinateUnits(){return 1/Eh*(t=Vh(this.y),1/Math.cos(t*Math.PI/180));var t;}}class Rh{constructor(t,e){this.width=t,this.height=e,this.nextRow=0,this.image=new qo({width:t,height:e}),this.positions={},this.uploaded=!1;}getDash(t,e){const r=this.getKey(t,e);return this.positions[r]}trim(){const t=this.width,e=this.height=k(this.nextRow);this.image.resize({width:t,height:e});}getKey(t,e){return t.join(",")+e}getDashRanges(t,e,r){const n=[];let i=t.length%2==1?-t[t.length-1]*r:0,s=t[0]*r,a=!0;n.push({left:i,right:s,isDash:a,zeroLength:0===t[0]});let o=t[0];for(let e=1;e<t.length;e++){a=!a;const l=t[e];i=o*r,o+=l,s=o*r,n.push({left:i,right:s,isDash:a,zeroLength:0===l});}return n}addRoundDash(t,e,r){const n=e/2;for(let e=-r;e<=r;e++){const i=this.width*(this.nextRow+r+e);let s=0,a=t[s];for(let o=0;o<this.width;o++){o/a.right>1&&(a=t[++s]);const l=Math.abs(o-a.left),u=Math.abs(o-a.right),c=Math.min(l,u);let h;const p=e/r*(n+1);if(a.isDash){const t=n-Math.abs(p);h=Math.sqrt(c*c+t*t);}else h=n-Math.sqrt(c*c+p*p);this.image.data[i+o]=Math.max(0,Math.min(255,h+128));}}}addRegularDash(t,e){for(let e=t.length-1;e>=0;--e){const r=t[e],n=t[e+1];r.zeroLength?t.splice(e,1):n&&n.isDash===r.isDash&&(n.left=r.left,t.splice(e,1));}const r=t[0],n=t[t.length-1];r.isDash===n.isDash&&(r.left=n.left-this.width,n.right=r.right+this.width);const i=this.width*this.nextRow;let s=0,a=t[s];for(let r=0;r<this.width;r++){r/a.right>1&&(a=t[++s]);const n=Math.abs(r-a.left),o=Math.abs(r-a.right),l=Math.min(n,o);this.image.data[i+r]=Math.max(0,Math.min(255,(a.isDash?l:-l)+e+128));}}addDash(t,e){const r=this.getKey(t,e);if(this.positions[r])return this.positions[r];const n="round"===e,i=n?7:0,s=2*i+1;if(this.nextRow+s>this.height)return B("LineAtlas out of space"),null;0===t.length&&t.push(1);let a=0;for(let e=0;e<t.length;e++)t[e]<0&&(B("Negative value is found in line dasharray, replacing values with 0"),t[e]=0),a+=t[e];if(0!==a){const r=this.width/a,s=this.getDashRanges(t,this.width,r);n?this.addRoundDash(s,r,i):this.addRegularDash(s,"square"===e?.5*r:0);}const o=this.nextRow+i;this.nextRow+=s;const l={tl:[o,i],br:[a,0]};return this.positions[r]=l,l}}oi("LineAtlas",Rh);class Uh{constructor(t){this._callback=t,this._triggered=!1,"undefined"!=typeof MessageChannel&&(this._channel=new MessageChannel,this._channel.port2.onmessage=()=>{this._triggered=!1,this._callback();});}trigger(){this._triggered||(this._triggered=!0,this._channel?this._channel.port1.postMessage(!0):setTimeout((()=>{this._triggered=!1,this._callback();}),0));}remove(){delete this._channel,this._callback=()=>{};}}const $h=a.performance;function Oh(t){const e=t?t.url.toString():void 0;return $h.getEntriesByName(e)}class qh{constructor(){this.tasks={},this.taskQueue=[],S(["process"],this),this.invoker=new Uh(this.process),this.nextId=0;}add(t,e){const r=this.nextId++,n=function({type:t,isSymbolTile:e,zoom:r}){return r=r||0,"message"===t?0:"maybePrepare"!==t||e?"parseTile"!==t||e?"parseTile"===t&&e?300-r:"maybePrepare"===t&&e?400-r:500:200-r:100-r}(e);if(0===n){D();try{t();}finally{}return {cancel:()=>{}}}return this.tasks[r]={fn:t,metadata:e,priority:n,id:r},this.taskQueue.push(r),this.invoker.trigger(),{cancel:()=>{delete this.tasks[r];}}}process(){D();try{if(this.taskQueue=this.taskQueue.filter((t=>!!this.tasks[t])),!this.taskQueue.length)return;const t=this.pick();if(null===t)return;const e=this.tasks[t];if(delete this.tasks[t],this.taskQueue.length&&this.invoker.trigger(),!e)return;e.fn();}finally{}}pick(){let t=null,e=1/0;for(let r=0;r<this.taskQueue.length;r++){const n=this.tasks[this.taskQueue[r]];n.priority<e&&(e=n.priority,t=r);}if(null===t)return null;const r=this.taskQueue[t];return this.taskQueue.splice(t,1),r}remove(){this.invoker.remove();}}function Nh(t,e,r){var n=2*Math.PI*6378137/256/Math.pow(2,r);return [t*n-2*Math.PI*6378137/2,e*n-2*Math.PI*6378137/2]}class jh{constructor(t,e,r){this.z=t,this.x=e,this.y=r,this.key=Xh(0,t,t,e,r);}equals(t){return this.z===t.z&&this.x===t.x&&this.y===t.y}url(t,e){const r=(i=this.y,s=this.z,a=Nh(256*(n=this.x),256*(i=Math.pow(2,s)-i-1),s),o=Nh(256*(n+1),256*(i+1),s),a[0]+","+a[1]+","+o[0]+","+o[1]);var n,i,s,a,o;const l=function(t,e,r){let n,i="";for(let s=t;s>0;s--)n=1<<s-1,i+=(e&n?1:0)+(r&n?2:0);return i}(this.z,this.x,this.y);return t[(this.x+this.y)%t.length].replace("{prefix}",(this.x%16).toString(16)+(this.y%16).toString(16)).replace("{z}",String(this.z)).replace("{x}",String(this.x)).replace("{y}",String("tms"===e?Math.pow(2,this.z)-this.y-1:this.y)).replace("{quadkey}",l).replace("{bbox-epsg-3857}",r)}getTilePoint(t){const e=Math.pow(2,this.z);return new i((t.x*e-this.x)*Oa,(t.y*e-this.y)*Oa)}getTileVec3(t){const e=Math.pow(2,this.z);return bo((t.x*e-this.x)*Oa,(t.y*e-this.y)*Oa,Lh(t.z,t.y))}toString(){return `${this.z}/${this.x}/${this.y}`}}class Gh{constructor(t,e){this.wrap=t,this.canonical=e,this.key=Xh(t,e.z,e.z,e.x,e.y);}}class Zh{constructor(t,e,r,n,i){this.overscaledZ=t,this.wrap=e,this.canonical=new jh(r,+n,+i),this.key=0===e&&t===r?this.canonical.key:Xh(e,t,r,n,i);}equals(t){return this.overscaledZ===t.overscaledZ&&this.wrap===t.wrap&&this.canonical.equals(t.canonical)}scaledTo(t){const e=this.canonical.z-t;return t>this.canonical.z?new Zh(t,this.wrap,this.canonical.z,this.canonical.x,this.canonical.y):new Zh(t,this.wrap,t,this.canonical.x>>e,this.canonical.y>>e)}calculateScaledKey(t,e=!0){if(this.overscaledZ===t&&e)return this.key;if(t>this.canonical.z)return Xh(this.wrap*+e,t,this.canonical.z,this.canonical.x,this.canonical.y);{const r=this.canonical.z-t;return Xh(this.wrap*+e,t,t,this.canonical.x>>r,this.canonical.y>>r)}}isChildOf(t){if(t.wrap!==this.wrap)return !1;const e=this.canonical.z-t.canonical.z;return 0===t.overscaledZ||t.overscaledZ<this.overscaledZ&&t.canonical.x===this.canonical.x>>e&&t.canonical.y===this.canonical.y>>e}children(t){if(this.overscaledZ>=t)return [new Zh(this.overscaledZ+1,this.wrap,this.canonical.z,this.canonical.x,this.canonical.y)];const e=this.canonical.z+1,r=2*this.canonical.x,n=2*this.canonical.y;return [new Zh(e,this.wrap,e,r,n),new Zh(e,this.wrap,e,r+1,n),new Zh(e,this.wrap,e,r,n+1),new Zh(e,this.wrap,e,r+1,n+1)]}isLessThan(t){return this.wrap<t.wrap||!(this.wrap>t.wrap)&&(this.overscaledZ<t.overscaledZ||!(this.overscaledZ>t.overscaledZ)&&(this.canonical.x<t.canonical.x||!(this.canonical.x>t.canonical.x)&&this.canonical.y<t.canonical.y))}wrapped(){return new Zh(this.overscaledZ,0,this.canonical.z,this.canonical.x,this.canonical.y)}unwrapTo(t){return new Zh(this.overscaledZ,t,this.canonical.z,this.canonical.x,this.canonical.y)}overscaleFactor(){return Math.pow(2,this.overscaledZ-this.canonical.z)}toUnwrapped(){return new Gh(this.wrap,this.canonical)}toString(){return `${this.overscaledZ}/${this.canonical.x}/${this.canonical.y}`}getTilePoint(t){return this.canonical.getTilePoint(new Fh(t.x-this.wrap,t.y))}getTileVec3(t){return this.canonical.getTileVec3(new Fh(t.x-this.wrap,t.y,t.z))}}function Xh(t,e,r,n,i){const s=1<<Math.min(r,22);let a=s*(i%s)+n%s;return t&&r<22&&(a+=s*s*((t<0?-2*t-1:2*t)%(1<<2*(22-r)))),16*(32*a+r)+(e-r)}oi("CanonicalTileID",jh),oi("OverscaledTileID",Zh,{omit:["projMatrix"]});class Kh{constructor(t){this._stringToNumber={},this._numberToString=[];for(let e=0;e<t.length;e++){const r=t[e];this._stringToNumber[r]=e,this._numberToString[e]=r;}}encode(t){return this._stringToNumber[t]}decode(t){return this._numberToString[t]}}class Hh{constructor(t,e,r,n,i){this.type="Feature",this._vectorTileFeature=t,t._z=e,t._x=r,t._y=n,this.properties=t.properties,this.id=i;}get geometry(){return void 0===this._geometry&&(this._geometry=this._vectorTileFeature.toGeoJSON(this._vectorTileFeature._x,this._vectorTileFeature._y,this._vectorTileFeature._z).geometry),this._geometry}set geometry(t){this._geometry=t;}toJSON(){const t={geometry:this.geometry};for(const e in this)"_geometry"!==e&&"_vectorTileFeature"!==e&&(t[e]=this[e]);return t}}var Yh=Ss([{name:"a_pos",type:"Int16",components:2}]);class Jh{constructor(t,e,r){this.tileID=t,this.uid=w(),this.uses=0,this.tileSize=e,this.tileZoom=r,this.buckets={},this.expirationTime=null,this.queryPadding=0,this.hasSymbolBuckets=!1,this.hasRTLText=!1,this.dependencies={},this.expiredRequestCount=0,this.state="loading";}registerFadeDuration(t){const e=t+this.timeAdded;e<q.now()||this.fadeEndTime&&e<this.fadeEndTime||(this.fadeEndTime=e);}wasRequested(){return "errored"===this.state||"loaded"===this.state||"reloading"===this.state}loadVectorData(t,e,r){if(this.hasData()&&this.unloadVectorData(),this.state="loaded",t){t.featureIndex&&(this.latestFeatureIndex=t.featureIndex,t.rawTileData?(this.latestRawTileData=t.rawTileData,this.latestFeatureIndex.rawTileData=t.rawTileData):this.latestRawTileData&&(this.latestFeatureIndex.rawTileData=this.latestRawTileData)),this.collisionBoxArray=t.collisionBoxArray,this.buckets=function(t,e){const r={};if(!e)return r;for(const n of t){const t=n.layerIds.map((t=>e.getLayer(t))).filter(Boolean);if(0!==t.length){n.layers=t,n.stateDependentLayerIds&&(n.stateDependentLayers=n.stateDependentLayerIds.map((e=>t.filter((t=>t.id===e))[0])));for(const e of t)r[e.id]=n;}}return r}(t.buckets,e.style),this.hasSymbolBuckets=!1;for(const t in this.buckets){const e=this.buckets[t];if(e instanceof ch){if(this.hasSymbolBuckets=!0,!r)break;e.justReloaded=!0;}}if(this.hasRTLText=!1,this.hasSymbolBuckets)for(const t in this.buckets){const e=this.buckets[t];if(e instanceof ch&&e.hasRTLText){this.hasRTLText=!0,ss.isLoading()||ss.isLoaded()||"deferred"!==ns()||is();break}}this.queryPadding=0;for(const t in this.buckets){const r=this.buckets[t];this.queryPadding=Math.max(this.queryPadding,e.style.getLayer(t).queryRadius(r));}t.imageAtlas&&(this.imageAtlas=t.imageAtlas),t.glyphAtlasImage&&(this.glyphAtlasImage=t.glyphAtlasImage),t.lineAtlas&&(this.lineAtlas=t.lineAtlas);}else this.collisionBoxArray=new Ys;}unloadVectorData(){for(const t in this.buckets)this.buckets[t].destroy();this.buckets={},this.imageAtlas&&(this.imageAtlas=null),this.lineAtlas&&(this.lineAtlas=null),this.imageAtlasTexture&&this.imageAtlasTexture.destroy(),this.glyphAtlasTexture&&this.glyphAtlasTexture.destroy(),this.lineAtlasTexture&&this.lineAtlasTexture.destroy(),this.latestFeatureIndex=null,this.state="unloaded";}getBucket(t){return this.buckets[t.id]}upload(t){for(const e in this.buckets){const r=this.buckets[e];r.uploadPending()&&r.upload(t);}const e=t.gl;this.imageAtlas&&!this.imageAtlas.uploaded&&(this.imageAtlasTexture=new Ih(t,this.imageAtlas.image,e.RGBA),this.imageAtlas.uploaded=!0),this.glyphAtlasImage&&(this.glyphAtlasTexture=new Ih(t,this.glyphAtlasImage,e.ALPHA),this.glyphAtlasImage=null),this.lineAtlas&&!this.lineAtlas.uploaded&&(this.lineAtlasTexture=new Ih(t,this.lineAtlas.image,e.ALPHA),this.lineAtlas.uploaded=!0);}prepare(t){this.imageAtlas&&this.imageAtlas.patchUpdatedImages(t,this.imageAtlasTexture);}queryRenderedFeatures(t,e,r,n,i,s,a,o){return this.latestFeatureIndex&&this.latestFeatureIndex.rawTileData?this.latestFeatureIndex.query({tileResult:n,pixelPosMatrix:a,transform:s,params:i},t,e,r):{}}querySourceFeatures(t,e){const r=this.latestFeatureIndex;if(!r||!r.rawTileData)return;const n=r.loadVTLayers(),i=e?e.sourceLayer:"",s=n._geojsonTileLayer||n[i];if(!s)return;const a=An(e&&e.filter),{z:o,x:l,y:u}=this.tileID.canonical,c={z:o,x:l,y:u};for(let e=0;e<s.length;e++){const n=s.feature(e);if(a.needGeometry){const t=Ga(n,!0);if(!a.filter(new as(this.tileID.overscaledZ),t,this.tileID.canonical))continue}else if(!a.filter(new as(this.tileID.overscaledZ),n))continue;const h=r.getId(n,i),p=new Hh(n,o,l,u,h);p.tile=c,t.push(p);}}hasData(){return "loaded"===this.state||"reloading"===this.state||"expired"===this.state}patternsLoaded(){return this.imageAtlas&&!!Object.keys(this.imageAtlas.patternPositions).length}setExpiryData(t){const e=this.expirationTime;if(t.cacheControl){const e=V(t.cacheControl);e["max-age"]&&(this.expirationTime=Date.now()+1e3*e["max-age"]);}else t.expires&&(this.expirationTime=new Date(t.expires).getTime());if(this.expirationTime){const t=Date.now();let r=!1;if(this.expirationTime>t)r=!1;else if(e)if(this.expirationTime<e)r=!0;else {const n=this.expirationTime-e;n?this.expirationTime=t+Math.max(n,3e4):r=!0;}else r=!0;r?(this.expiredRequestCount++,this.state="expired"):this.expiredRequestCount=0;}}getExpiryTimeout(){if(this.expirationTime)return this.expiredRequestCount?1e3*(1<<Math.min(this.expiredRequestCount-1,31)):Math.min(this.expirationTime-(new Date).getTime(),Math.pow(2,31)-1)}setFeatureState(t,e){if(!this.latestFeatureIndex||!this.latestFeatureIndex.rawTileData||0===Object.keys(t).length)return;const r=this.latestFeatureIndex.loadVTLayers();for(const n in this.buckets){if(!e.style.hasLayer(n))continue;const i=this.buckets[n],s=i.layers[0].sourceLayer||"_geojsonTileLayer",a=r[s],o=t[s];if(!a||!o||0===Object.keys(o).length)continue;i.update(o,a,this.imageAtlas&&this.imageAtlas.patternPositions||{});const l=e&&e.style&&e.style.getLayer(n);l&&(this.queryPadding=Math.max(this.queryPadding,l.queryRadius(i)));}}holdingForFade(){return void 0!==this.symbolFadeHoldUntil}symbolFadeFinished(){return !this.symbolFadeHoldUntil||this.symbolFadeHoldUntil<q.now()}clearFadeHold(){this.symbolFadeHoldUntil=void 0;}setHoldDuration(t){this.symbolFadeHoldUntil=q.now()+t;}setDependencies(t,e){const r={};for(const t of e)r[t]=!0;this.dependencies[t]=r;}hasDependency(t,e){for(const r of t){const t=this.dependencies[r];if(t)for(const r of e)if(t[r])return !0}return !1}clearQueryDebugViz(){}}class Wh{constructor(){this.state={},this.stateChanges={},this.deletedStates={};}updateState(t,e,r){const n=String(e);if(this.stateChanges[t]=this.stateChanges[t]||{},this.stateChanges[t][n]=this.stateChanges[t][n]||{},v(this.stateChanges[t][n],r),null===this.deletedStates[t]){this.deletedStates[t]={};for(const e in this.state[t])e!==n&&(this.deletedStates[t][e]=null);}else if(this.deletedStates[t]&&null===this.deletedStates[t][n]){this.deletedStates[t][n]={};for(const e in this.state[t][n])r[e]||(this.deletedStates[t][n][e]=null);}else for(const e in r)this.deletedStates[t]&&this.deletedStates[t][n]&&null===this.deletedStates[t][n][e]&&delete this.deletedStates[t][n][e];}removeFeatureState(t,e,r){if(null===this.deletedStates[t])return;const n=String(e);if(this.deletedStates[t]=this.deletedStates[t]||{},r&&void 0!==e)null!==this.deletedStates[t][n]&&(this.deletedStates[t][n]=this.deletedStates[t][n]||{},this.deletedStates[t][n][r]=null);else if(void 0!==e)if(this.stateChanges[t]&&this.stateChanges[t][n])for(r in this.deletedStates[t][n]={},this.stateChanges[t][n])this.deletedStates[t][n][r]=null;else this.deletedStates[t][n]=null;else this.deletedStates[t]=null;}getState(t,e){const r=String(e),n=v({},(this.state[t]||{})[r],(this.stateChanges[t]||{})[r]);if(null===this.deletedStates[t])return {};if(this.deletedStates[t]){const r=this.deletedStates[t][e];if(null===r)return {};for(const t in r)delete n[t];}return n}initializeTileState(t,e){t.setFeatureState(this.state,e);}coalesceChanges(t,e){const r={};for(const t in this.stateChanges){this.state[t]=this.state[t]||{};const e={};for(const r in this.stateChanges[t])this.state[t][r]||(this.state[t][r]={}),v(this.state[t][r],this.stateChanges[t][r]),e[r]=this.state[t][r];r[t]=e;}for(const t in this.deletedStates){this.state[t]=this.state[t]||{};const e={};if(null===this.deletedStates[t])for(const r in this.state[t])e[r]={},this.state[t][r]={};else for(const r in this.deletedStates[t]){if(null===this.deletedStates[t][r])this.state[t][r]={};else for(const e of Object.keys(this.deletedStates[t][r]))delete this.state[t][r][e];e[r]=this.state[t][r];}r[t]=r[t]||{},v(r[t],e);}if(this.stateChanges={},this.deletedStates={},0!==Object.keys(r).length)for(const n in t)t[n].setFeatureState(r,e);}}class Qh{constructor(t){this.size=t,this.minimums=[],this.maximums=[],this.leaves=[];}getElevation(t,e){const r=this.toIdx(t,e);return {min:this.minimums[r],max:this.maximums[r]}}isLeaf(t,e){return this.leaves[this.toIdx(t,e)]}toIdx(t,e){return e*this.size+t}}function tp(t,e,r,n){let i=0,s=Number.MAX_VALUE;for(let a=0;a<3;a++)if(Math.abs(n[a])<1e-15){if(r[a]<t[a]||r[a]>e[a])return null}else {const o=1/n[a];let l=(t[a]-r[a])*o,u=(e[a]-r[a])*o;if(l>u){const t=l;l=u,u=t;}if(l>i&&(i=l),u<s&&(s=u),i>s)return null}return i}function ep(t,e,r,n,i,s,a,o,l,u,c){const h=n-t,p=i-e,d=s-r,f=a-t,y=o-e,m=l-r,g=c[1]*m-c[2]*y,x=c[2]*f-c[0]*m,v=c[0]*y-c[1]*f,b=h*g+p*x+d*v;if(Math.abs(b)<1e-15)return null;const w=1/b,_=u[0]-t,k=u[1]-e,A=u[2]-r,S=(_*g+k*x+A*v)*w;if(S<0||S>1)return null;const I=k*d-A*p,z=A*h-_*d,T=_*p-k*h,M=(c[0]*I+c[1]*z+c[2]*T)*w;return M<0||S+M>1?null:(f*I+y*z+m*T)*w}function rp(t,e,r){return (t-e)/(r-e)}function np(t,e,r,n,i,s,a,o,l){const u=1<<r,c=s-n,h=a-i,p=(t+1)/u*c+n,d=(e+0)/u*h+i,f=(e+1)/u*h+i;o[0]=(t+0)/u*c+n,o[1]=d,l[0]=p,l[1]=f;}class ip{constructor(t){if(this.maximums=[],this.minimums=[],this.leaves=[],this.childOffsets=[],this.nodeCount=0,this.dem=t,this._siblingOffset=[[0,0],[1,0],[0,1],[1,1]],!this.dem)return;const e=function(t){const e=Math.ceil(Math.log2(t.dim/8)),r=[];let n=Math.ceil(Math.pow(2,e));const i=1/n,s=(t,e,r,n,i)=>{const s=n?1:0,a=(t+1)*r-s,o=e*r,l=(e+1)*r-s;i[0]=t*r,i[1]=o,i[2]=a,i[3]=l;};let a=new Qh(n);const o=[];for(let e=0;e<n*n;e++){s(e%n,Math.floor(e/n),i,!1,o);const r=ap(o[0],o[1],t),l=ap(o[2],o[1],t),u=ap(o[2],o[3],t),c=ap(o[0],o[3],t);a.minimums.push(Math.min(r,l,u,c)),a.maximums.push(Math.max(r,l,u,c)),a.leaves.push(1);}for(r.push(a),n/=2;n>=1;n/=2){const t=r[r.length-1];a=new Qh(n);for(let e=0;e<n*n;e++){s(e%n,Math.floor(e/n),2,!0,o);const r=t.getElevation(o[0],o[1]),i=t.getElevation(o[2],o[1]),l=t.getElevation(o[2],o[3]),u=t.getElevation(o[0],o[3]),c=t.isLeaf(o[0],o[1]),h=t.isLeaf(o[2],o[1]),p=t.isLeaf(o[2],o[3]),d=t.isLeaf(o[0],o[3]),f=Math.min(r.min,i.min,l.min,u.min),y=Math.max(r.max,i.max,l.max,u.max),m=c&&h&&p&&d;a.maximums.push(y),a.minimums.push(f),a.leaves.push(y-f<=5&&m?1:0);}r.push(a);}return r}(this.dem),r=e.length-1,n=e[r];this._addNode(n.minimums[0],n.maximums[0],n.leaves[0]),this._construct(e,0,0,r,0);}raycastRoot(t,e,r,n,i,s,a=1){return tp([t,e,-100],[r,n,this.maximums[0]*a],i,s)}raycast(t,e,r,n,i,s,a=1){if(!this.nodeCount)return null;const o=this.raycastRoot(t,e,r,n,i,s,a);if(null==o)return null;const l=[],u=[],c=[],h=[],p=[{idx:0,t:o,nodex:0,nodey:0,depth:0}];for(;p.length>0;){const{idx:o,t:d,nodex:f,nodey:y,depth:m}=p.pop();if(this.leaves[o]){np(f,y,m,t,e,r,n,c,h);const o=1<<m,l=(f+0)/o,u=(f+1)/o,p=(y+0)/o,g=(y+1)/o,x=ap(l,p,this.dem)*a,v=ap(u,p,this.dem)*a,b=ap(u,g,this.dem)*a,w=ap(l,g,this.dem)*a,_=ep(c[0],c[1],x,h[0],c[1],v,h[0],h[1],b,i,s),k=ep(h[0],h[1],b,c[0],h[1],w,c[0],c[1],x,i,s),A=Math.min(null!==_?_:Number.MAX_VALUE,null!==k?k:Number.MAX_VALUE);if(A!==Number.MAX_VALUE)return A;{const t=ko([],i,s,d);if(sp(x,v,w,b,rp(t[0],c[0],h[0]),rp(t[1],c[1],h[1]))>=t[2])return d}continue}let g=0;for(let p=0;p<this._siblingOffset.length;p++){np((f<<1)+this._siblingOffset[p][0],(y<<1)+this._siblingOffset[p][1],m+1,t,e,r,n,c,h),c[2]=-100,h[2]=this.maximums[this.childOffsets[o]+p]*a;const d=tp(c,h,i,s);if(null!=d){const t=d;l[p]=t;let e=!1;for(let r=0;r<g&&!e;r++)t>=l[u[r]]&&(u.splice(r,0,p),e=!0);e||(u[g]=p),g++;}}for(let t=0;t<g;t++){const e=u[t];p.push({idx:this.childOffsets[o]+e,t:l[e],nodex:(f<<1)+this._siblingOffset[e][0],nodey:(y<<1)+this._siblingOffset[e][1],depth:m+1});}}return null}_addNode(t,e,r){return this.minimums.push(t),this.maximums.push(e),this.leaves.push(r),this.childOffsets.push(0),this.nodeCount++}_construct(t,e,r,n,i){if(1===t[n].isLeaf(e,r))return;this.childOffsets[i]||(this.childOffsets[i]=this.nodeCount);const s=n-1,a=t[s];let o,l=0;for(let t=0;t<this._siblingOffset.length;t++){const n=2*e+this._siblingOffset[t][0],i=2*r+this._siblingOffset[t][1],s=a.getElevation(n,i),u=a.isLeaf(n,i),c=this._addNode(s.min,s.max,u);u&&(l|=1<<t),o||(o=c);}for(let n=0;n<this._siblingOffset.length;n++)l&1<<n||this._construct(t,2*e+this._siblingOffset[n][0],2*r+this._siblingOffset[n][1],s,o+n);}}function sp(t,e,r,n,i,s){return rr(rr(t,r,s),rr(e,n,s),i)}function ap(t,e,r){const n=r.dim,i=y(t*n-.5,0,n-1),s=y(e*n-.5,0,n-1),a=Math.floor(i),o=Math.floor(s),l=Math.min(a+1,n-1),u=Math.min(o+1,n-1);return sp(r.get(a,o),r.get(l,o),r.get(a,u),r.get(l,u),i-a,s-o)}const op={mapbox:[6553.6,25.6,.1,1e4],terrarium:[256,1,1/256,32768]};class lp{get tree(){return this._tree||this._buildQuadTree(),this._tree}constructor(t,e,r,n=!1,i=!1){if(this.uid=t,e.height!==e.width)throw new RangeError("DEM tiles must be square");if(r&&"mapbox"!==r&&"terrarium"!==r)return B(`"${r}" is not a valid encoding type. Valid types include "mapbox" and "terrarium".`);this.stride=e.height;const s=this.dim=e.height-2;if(this.data=new Uint32Array(e.data.buffer),this.encoding=r||"mapbox",this.borderReady=n,!n){for(let t=0;t<s;t++)this.data[this._idx(-1,t)]=this.data[this._idx(0,t)],this.data[this._idx(s,t)]=this.data[this._idx(s-1,t)],this.data[this._idx(t,-1)]=this.data[this._idx(t,0)],this.data[this._idx(t,s)]=this.data[this._idx(t,s-1)];this.data[this._idx(-1,-1)]=this.data[this._idx(0,0)],this.data[this._idx(s,-1)]=this.data[this._idx(s-1,0)],this.data[this._idx(-1,s)]=this.data[this._idx(0,s-1)],this.data[this._idx(s,s)]=this.data[this._idx(s-1,s-1)],i&&this._buildQuadTree();}}_buildQuadTree(){this._tree=new ip(this);}get(t,e,r=!1){const n=new Uint8Array(this.data.buffer);r&&(t=y(t,-1,this.dim),e=y(e,-1,this.dim));const i=4*this._idx(t,e);return ("terrarium"===this.encoding?this._unpackTerrarium:this._unpackMapbox)(n[i],n[i+1],n[i+2])}static getUnpackVector(t){return op[t]}get unpackVector(){return op[this.encoding]}_idx(t,e){if(t<-1||t>=this.dim+1||e<-1||e>=this.dim+1)throw new RangeError("out of range source coordinates for DEM data");return (e+1)*this.stride+(t+1)}_unpackMapbox(t,e,r){return (256*t*256+256*e+r)/10-1e4}_unpackTerrarium(t,e,r){return 256*t+e+r/256-32768}static pack(t,e){const r=[0,0,0,0],n=lp.getUnpackVector(e);let i=Math.floor((t+n[3])/n[2]);return r[2]=i%256,i=Math.floor(i/256),r[1]=i%256,i=Math.floor(i/256),r[0]=i,r}getPixels(){return new No({width:this.stride,height:this.stride},new Uint8Array(this.data.buffer))}backfillBorder(t,e,r){if(this.dim!==t.dim)throw new Error("dem dimension mismatch");let n=e*this.dim,i=e*this.dim+this.dim,s=r*this.dim,a=r*this.dim+this.dim;switch(e){case-1:n=i-1;break;case 1:i=n+1;}switch(r){case-1:s=a-1;break;case 1:a=s+1;}const o=-e*this.dim,l=-r*this.dim;for(let e=s;e<a;e++)for(let r=n;r<i;r++)this.data[this._idx(r,e)]=t.data[this._idx(r+o,e+l)];}onDeserialize(){this._tree&&(this._tree.dem=this);}}oi("DEMData",lp),oi("DemMinMaxQuadTree",ip,{omit:["dem"]});class up{constructor(t,e){this.max=t,this.onRemove=e,this.reset();}reset(){for(const t in this.data)for(const e of this.data[t])e.timeout&&clearTimeout(e.timeout),this.onRemove(e.value);return this.data={},this.order=[],this}add(t,e,r){const n=t.wrapped().key;void 0===this.data[n]&&(this.data[n]=[]);const i={value:e,timeout:void 0};if(void 0!==r&&(i.timeout=setTimeout((()=>{this.remove(t,i);}),r)),this.data[n].push(i),this.order.push(n),this.order.length>this.max){const t=this._getAndRemoveByKey(this.order[0]);t&&this.onRemove(t);}return this}has(t){return t.wrapped().key in this.data}getAndRemove(t){return this.has(t)?this._getAndRemoveByKey(t.wrapped().key):null}_getAndRemoveByKey(t){const e=this.data[t].shift();return e.timeout&&clearTimeout(e.timeout),0===this.data[t].length&&delete this.data[t],this.order.splice(this.order.indexOf(t),1),e.value}getByKey(t){const e=this.data[t];return e?e[0].value:null}get(t){return this.has(t)?this.data[t.wrapped().key][0].value:null}remove(t,e){if(!this.has(t))return this;const r=t.wrapped().key,n=void 0===e?0:this.data[r].indexOf(e),i=this.data[r][n];return this.data[r].splice(n,1),i.timeout&&clearTimeout(i.timeout),0===this.data[r].length&&delete this.data[r],this.onRemove(i.value),this.order.splice(this.order.indexOf(r),1),this}setMaxSize(t){for(this.max=t;this.order.length>this.max;){const t=this._getAndRemoveByKey(this.order[0]);t&&this.onRemove(t);}return this}filter(t){const e=[];for(const r in this.data)for(const n of this.data[r])t(n.value)||e.push(n);for(const t of e)this.remove(t.value.tileID,t);}}class cp{constructor(t,e,r){this.func=t,this.mask=e,this.range=r;}}cp.ReadOnly=!1,cp.ReadWrite=!0,cp.disabled=new cp(519,cp.ReadOnly,[0,1]);const hp=7680;class pp{constructor(t,e,r,n,i,s){this.test=t,this.ref=e,this.mask=r,this.fail=n,this.depthFail=i,this.pass=s;}}pp.disabled=new pp({func:519,mask:0},0,0,hp,hp,hp);class dp{constructor(t,e,r){this.blendFunction=t,this.blendColor=e,this.mask=r;}}dp.Replace=[1,0],dp.disabled=new dp(dp.Replace,ce.transparent,[!1,!1,!1,!1]),dp.unblended=new dp(dp.Replace,ce.transparent,[!0,!0,!0,!0]),dp.alphaBlended=new dp([1,771],ce.transparent,[!0,!0,!0,!0]);const fp=1029,yp=2305;class mp{constructor(t,e,r){this.enable=t,this.mode=e,this.frontFace=r;}}mp.disabled=new mp(!1,fp,yp),mp.backCCW=new mp(!0,fp,yp),mp.backCW=new mp(!0,fp,2304),mp.frontCW=new mp(!0,1028,2304),mp.frontCCW=new mp(!0,1028,yp);class gp extends Ft{constructor(t,e,r){super(),this.id=t,this._onlySymbols=r,e.on("data",(t=>{"source"===t.dataType&&"metadata"===t.sourceDataType&&(this._sourceLoaded=!0),this._sourceLoaded&&!this._paused&&"source"===t.dataType&&"content"===t.sourceDataType&&(this.reload(),this.transform&&this.update(this.transform));})),e.on("error",(()=>{this._sourceErrored=!0;})),this._source=e,this._tiles={},this._cache=new up(0,this._unloadTile.bind(this)),this._timers={},this._cacheTimers={},this._maxTileCacheSize=null,this._loadedParentTiles={},this._coveredTiles={},this._state=new Wh;}onAdd(t){this.map=t,this._maxTileCacheSize=t?t._maxTileCacheSize:null;}loaded(){if(this._sourceErrored)return !0;if(!this._sourceLoaded)return !1;if(!this._source.loaded())return !1;for(const t in this._tiles){const e=this._tiles[t];if("loaded"!==e.state&&"errored"!==e.state)return !1}return !0}getSource(){return this._source}pause(){this._paused=!0;}resume(){if(!this._paused)return;const t=this._shouldReloadOnResume;this._paused=!1,this._shouldReloadOnResume=!1,t&&this.reload(),this.transform&&this.update(this.transform);}_loadTile(t,e){return t.isSymbolTile=this._onlySymbols,this._source.loadTile(t,e)}_unloadTile(t){if(this._source.unloadTile)return this._source.unloadTile(t,(()=>{}))}_abortTile(t){if(this._source.abortTile)return this._source.abortTile(t,(()=>{}))}serialize(){return this._source.serialize()}prepare(t){this._source.prepare&&this._source.prepare(),this._state.coalesceChanges(this._tiles,this.map?this.map.painter:null);for(const e in this._tiles){const r=this._tiles[e];r.upload(t),r.prepare(this.map.style.imageManager);}}getIds(){return x(this._tiles).map((t=>t.tileID)).sort(xp).map((t=>t.key))}getRenderableIds(t){const e=[];for(const r in this._tiles)this._isIdRenderable(+r,t)&&e.push(this._tiles[r]);return t?e.sort(((t,e)=>{const r=t.tileID,n=e.tileID,s=new i(r.canonical.x,r.canonical.y)._rotate(this.transform.angle),a=new i(n.canonical.x,n.canonical.y)._rotate(this.transform.angle);return r.overscaledZ-n.overscaledZ||a.y-s.y||a.x-s.x})).map((t=>t.tileID.key)):e.map((t=>t.tileID)).sort(xp).map((t=>t.key))}hasRenderableParent(t){const e=this.findLoadedParent(t,0);return !!e&&this._isIdRenderable(e.tileID.key)}_isIdRenderable(t,e){return this._tiles[t]&&this._tiles[t].hasData()&&!this._coveredTiles[t]&&(e||!this._tiles[t].holdingForFade())}reload(){if(this._paused)this._shouldReloadOnResume=!0;else {this._cache.reset();for(const t in this._tiles)"errored"!==this._tiles[t].state&&this._reloadTile(+t,"reloading");}}_reloadTile(t,e){const r=this._tiles[t];r&&("loading"!==r.state&&(r.state=e),this._loadTile(r,this._tileLoaded.bind(this,r,t,e)));}_tileLoaded(t,e,r,n){if(n)return t.state="errored",void(404!==n.status?this._source.fire(new Lt(n,{tile:t})):this.update(this.transform));t.timeAdded=q.now(),"expired"===r&&(t.refreshedUponExpiration=!0),this._setTileReloadTimer(e,t),"raster-dem"===this.getSource().type&&t.dem&&this._backfillDEM(t),this._state.initializeTileState(t,this.map?this.map.painter:null),this._source.fire(new Vt("data",{dataType:"source",tile:t,coord:t.tileID,sourceCacheId:this.id}));}_backfillDEM(t){const e=this.getRenderableIds();for(let n=0;n<e.length;n++){const i=e[n];if(t.neighboringTiles&&t.neighboringTiles[i]){const e=this.getTileByID(i);r(t,e),r(e,t);}}function r(t,e){if(!t.dem||t.dem.borderReady)return;t.needsHillshadePrepare=!0,t.needsDEMTextureUpload=!0;let r=e.tileID.canonical.x-t.tileID.canonical.x;const n=e.tileID.canonical.y-t.tileID.canonical.y,i=Math.pow(2,t.tileID.canonical.z),s=e.tileID.key;0===r&&0===n||Math.abs(n)>1||(Math.abs(r)>1&&(1===Math.abs(r+i)?r+=i:1===Math.abs(r-i)&&(r-=i)),e.dem&&t.dem&&(t.dem.backfillBorder(e.dem,r,n),t.neighboringTiles&&t.neighboringTiles[s]&&(t.neighboringTiles[s].backfilled=!0)));}}getTile(t){return this.getTileByID(t.key)}getTileByID(t){return this._tiles[t]}_retainLoadedChildren(t,e,r,n){for(const i in this._tiles){let s=this._tiles[i];if(n[i]||!s.hasData()||s.tileID.overscaledZ<=e||s.tileID.overscaledZ>r)continue;let a=s.tileID;for(;s&&s.tileID.overscaledZ>e+1;){const t=s.tileID.scaledTo(s.tileID.overscaledZ-1);s=this._tiles[t.key],s&&s.hasData()&&(a=t);}let o=a;for(;o.overscaledZ>e;)if(o=o.scaledTo(o.overscaledZ-1),t[o.key]){n[a.key]=a;break}}}findLoadedParent(t,e){if(t.key in this._loadedParentTiles){const r=this._loadedParentTiles[t.key];return r&&r.tileID.overscaledZ>=e?r:null}for(let r=t.overscaledZ-1;r>=e;r--){const e=t.scaledTo(r),n=this._getLoadedTile(e);if(n)return n}}_getLoadedTile(t){const e=this._tiles[t.key];return e&&e.hasData()?e:this._cache.getByKey(this._source.reparseOverscaled?t.wrapped().key:t.canonical.key)}updateCacheSize(t,e){e=e||this._source.tileSize;const r=Math.ceil(t.width/e)+1,n=Math.ceil(t.height/e)+1,i=Math.floor(r*n*5),s="number"==typeof this._maxTileCacheSize?Math.min(this._maxTileCacheSize,i):i;this._cache.setMaxSize(s);}handleWrapJump(t){const e=Math.round((t-(void 0===this._prevLng?t:this._prevLng))/360);if(this._prevLng=t,e){const t={};for(const r in this._tiles){const n=this._tiles[r];n.tileID=n.tileID.unwrapTo(n.tileID.wrap+e),t[n.tileID.key]=n;}this._tiles=t;for(const t in this._timers)clearTimeout(this._timers[t]),delete this._timers[t];for(const t in this._tiles)this._setTileReloadTimer(+t,this._tiles[t]);}}update(t,e,r){if(this.transform=t,!this._sourceLoaded||this._paused||this.transform.freezeTileCoverage)return;if(this.usedForTerrain&&!r)return;let n;this.updateCacheSize(t,e),this.handleWrapJump(this.transform.center.lng),this._coveredTiles={},this.used||this.usedForTerrain?this._source.tileID?n=t.getVisibleUnwrappedCoordinates(this._source.tileID).map((t=>new Zh(t.canonical.z,t.wrap,t.canonical.z,t.canonical.x,t.canonical.y))):(n=t.coveringTiles({tileSize:e||this._source.tileSize,minzoom:this._source.minzoom,maxzoom:this._source.maxzoom,roundZoom:this._source.roundZoom&&!r,reparseOverscaled:this._source.reparseOverscaled,isTerrainDEM:this.usedForTerrain}),this._source.hasTile&&(n=n.filter((t=>this._source.hasTile(t))))):n=[];const i=this._updateRetainedTiles(n);if(vp(this._source.type)&&0!==n.length){const t={},e={},r=Object.keys(i);for(const n of r){const r=i[n],s=this._tiles[n];if(!s||s.fadeEndTime&&s.fadeEndTime<=q.now())continue;const a=this.findLoadedParent(r,Math.max(r.overscaledZ-gp.maxOverzooming,this._source.minzoom));a&&(this._addTile(a.tileID),t[a.tileID.key]=a.tileID),e[n]=r;}const s=n[n.length-1].overscaledZ;for(const t in this._tiles){const r=this._tiles[t];if(i[t]||!r.hasData())continue;let n=r.tileID;for(;n.overscaledZ>s;){n=n.scaledTo(n.overscaledZ-1);const s=this._tiles[n.key];if(s&&s.hasData()&&e[n.key]){i[t]=r.tileID;break}}}for(const e in t)i[e]||(this._coveredTiles[e]=!0,i[e]=t[e]);}for(const t in i)this._tiles[t].clearFadeHold();const s=function(t,e){const r=[];for(const n in t)n in e||r.push(n);return r}(this._tiles,i);for(const t of s){const e=this._tiles[t];e.hasSymbolBuckets&&!e.holdingForFade()?e.setHoldDuration(this.map._fadeDuration):e.hasSymbolBuckets&&!e.symbolFadeFinished()||this._removeTile(+t);}this._updateLoadedParentTileCache(),this._onlySymbols&&this._source.afterUpdate&&this._source.afterUpdate();}releaseSymbolFadeTiles(){for(const t in this._tiles)this._tiles[t].holdingForFade()&&this._removeTile(+t);}_updateRetainedTiles(t){const e={};if(0===t.length)return e;const r={},n=t[t.length-1].overscaledZ,i=t[0].overscaledZ,s=Math.max(i-gp.maxOverzooming,this._source.minzoom),a=Math.max(i+gp.maxUnderzooming,this._source.minzoom),o={};for(const r of t){const t=this._addTile(r);e[r.key]=r,t.hasData()||n<this._source.maxzoom&&(o[r.key]=r);}this._retainLoadedChildren(o,n,a,e);for(const n of t){let t=this._tiles[n.key];if(t.hasData())continue;if(n.canonical.z>=this._source.maxzoom){const t=n.children(this._source.maxzoom)[0],r=this.getTile(t);if(r&&r.hasData()){e[t.key]=t;continue}}else {const t=n.children(this._source.maxzoom);if(e[t[0].key]&&e[t[1].key]&&e[t[2].key]&&e[t[3].key])continue}let i=t.wasRequested();for(let a=n.overscaledZ-1;a>=s;--a){const s=n.scaledTo(a);if(r[s.key])break;if(r[s.key]=!0,t=this.getTile(s),!t&&i&&(t=this._addTile(s)),t&&(e[s.key]=s,i=t.wasRequested(),t.hasData()))break}}return e}_updateLoadedParentTileCache(){this._loadedParentTiles={};for(const t in this._tiles){const e=[];let r,n=this._tiles[t].tileID;for(;n.overscaledZ>0;){if(n.key in this._loadedParentTiles){r=this._loadedParentTiles[n.key];break}e.push(n.key);const t=n.scaledTo(n.overscaledZ-1);if(r=this._getLoadedTile(t),r)break;n=t;}for(const t of e)this._loadedParentTiles[t]=r;}}_addTile(t){let e=this._tiles[t.key];if(e)return e;e=this._cache.getAndRemove(t),e&&(this._setTileReloadTimer(t.key,e),e.tileID=t,this._state.initializeTileState(e,this.map?this.map.painter:null),this._cacheTimers[t.key]&&(clearTimeout(this._cacheTimers[t.key]),delete this._cacheTimers[t.key],this._setTileReloadTimer(t.key,e)));const r=Boolean(e);return r||(e=new Jh(t,this._source.tileSize*t.overscaleFactor(),this.transform.tileZoom),this._loadTile(e,this._tileLoaded.bind(this,e,t.key,e.state))),e?(e.uses++,this._tiles[t.key]=e,r||this._source.fire(new Vt("dataloading",{tile:e,coord:e.tileID,dataType:"source"})),e):null}_setTileReloadTimer(t,e){t in this._timers&&(clearTimeout(this._timers[t]),delete this._timers[t]);const r=e.getExpiryTimeout();r&&(this._timers[t]=setTimeout((()=>{this._reloadTile(t,"expired"),delete this._timers[t];}),r));}_removeTile(t){const e=this._tiles[t];e&&(e.uses--,delete this._tiles[t],this._timers[t]&&(clearTimeout(this._timers[t]),delete this._timers[t]),e.uses>0||(e.hasData()&&"reloading"!==e.state?this._cache.add(e.tileID,e,e.getExpiryTimeout()):(e.aborted=!0,this._abortTile(e),this._unloadTile(e))));}clearTiles(){this._shouldReloadOnResume=!1,this._paused=!1;for(const t in this._tiles)this._removeTile(+t);this._cache.reset();}tilesIn(t,e,r){const n=[],i=this.transform;if(!i)return n;for(const s in this._tiles){const a=this._tiles[s];if(r&&a.clearQueryDebugViz(),a.holdingForFade())continue;const o=t.containsTile(a,i,e);o&&n.push(o);}return n}getVisibleCoordinates(t){const e=this.getRenderableIds(t).map((t=>this._tiles[t].tileID));for(const t of e)t.projMatrix=this.transform.calculateProjMatrix(t.toUnwrapped());return e}hasTransition(){if(this._source.hasTransition())return !0;if(vp(this._source.type))for(const t in this._tiles){const e=this._tiles[t];if(void 0!==e.fadeEndTime&&e.fadeEndTime>=q.now())return !0}return !1}setFeatureState(t,e,r){this._state.updateState(t=t||"_geojsonTileLayer",e,r);}removeFeatureState(t,e,r){this._state.removeFeatureState(t=t||"_geojsonTileLayer",e,r);}getFeatureState(t,e){return this._state.getState(t=t||"_geojsonTileLayer",e)}setDependencies(t,e,r){const n=this._tiles[t];n&&n.setDependencies(e,r);}reloadTilesForDependencies(t,e){for(const r in this._tiles)this._tiles[r].hasDependency(t,e)&&this._reloadTile(+r,"reloading");this._cache.filter((r=>!r.hasDependency(t,e)));}}function xp(t,e){const r=Math.abs(2*t.wrap)-+(t.wrap<0),n=Math.abs(2*e.wrap)-+(e.wrap<0);return t.overscaledZ-e.overscaledZ||n-r||e.canonical.y-t.canonical.y||e.canonical.x-t.canonical.x}function vp(t){return "raster"===t||"image"===t||"video"===t}gp.maxOverzooming=10,gp.maxUnderzooming=3;class bp{constructor(t,e,r){this._demTile=t,this._dem=this._demTile.dem,this._scale=e,this._offset=r;}static create(t,e,r){const n=r||t.findDEMTileFor(e);if(!n||!n.dem)return;const i=n.dem,s=n.tileID,a=1<<e.canonical.z-s.canonical.z;return new bp(n,n.tileSize/Oa/a,[(e.canonical.x/a-s.canonical.x)*i.dim,(e.canonical.y/a-s.canonical.y)*i.dim])}tileCoordToPixel(t,e){const r=e*this._scale+this._offset[1],n=Math.floor(t*this._scale+this._offset[0]),s=Math.floor(r);return new i(n,s)}getElevationAt(t,e,r,n){const i=t*this._scale+this._offset[0],s=e*this._scale+this._offset[1],a=Math.floor(i),o=Math.floor(s),l=this._dem;return n=!!n,r?rr(rr(l.get(a,o,n),l.get(a,o+1,n),s-o),rr(l.get(a+1,o,n),l.get(a+1,o+1,n),s-o),i-a):l.get(a,o,n)}getElevationAtPixel(t,e,r){return this._dem.get(t,e,!!r)}getMeterToDEM(t){return (1<<this._demTile.tileID.canonical.z)*Dh(1,t)*this._dem.stride}}class wp{constructor(t,e){this.tileID=t,this.x=t.canonical.x,this.y=t.canonical.y,this.z=t.canonical.z,this.grid=new ri(Oa,16,0),this.featureIndexArray=new ia,this.promoteId=e;}insert(t,e,r,n,i,s=0){const a=this.featureIndexArray.length;this.featureIndexArray.emplaceBack(r,n,i,s);const o=this.grid;for(let t=0;t<e.length;t++){const r=e[t],n=[1/0,1/0,-1/0,-1/0];for(let t=0;t<r.length;t++){const e=r[t];n[0]=Math.min(n[0],e.x),n[1]=Math.min(n[1],e.y),n[2]=Math.max(n[2],e.x),n[3]=Math.max(n[3],e.y);}n[0]<Oa&&n[1]<Oa&&n[2]>=0&&n[3]>=0&&o.insert(a,n[0],n[1],n[2],n[3]);}}loadVTLayers(){return this.vtLayers||(this.vtLayers=new Gl.VectorTile(new Eu(this.rawTileData)).layers,this.sourceLayerCoder=new Kh(this.vtLayers?Object.keys(this.vtLayers).sort():["_geojsonTileLayer"])),this.vtLayers}query(t,e,r,n){this.loadVTLayers();const i=t.params||{},s=An(i.filter),a=t.tileResult,o=t.transform,l=a.bufferedTilespaceBounds,u=this.grid.query(l.min.x,l.min.y,l.max.x,l.max.y,((t,e,r,n)=>io(a.bufferedTilespaceGeometry,t,e,r,n)));u.sort(kp);let c=null;o.elevation&&u.length>0&&(c=bp.create(o.elevation,this.tileID));const h={};let p;for(let o=0;o<u.length;o++){const l=u[o];if(l===p)continue;p=l;const d=this.featureIndexArray.get(l);let f=null;this.loadMatchingFeature(h,d,s,i.layers,i.availableImages,e,r,n,((e,r,n,i=0)=>(f||(f=ja(e)),r.queryIntersectsFeature(a,e,n,f,this.z,t.transform,t.pixelPosMatrix,c,i))));}return h}loadMatchingFeature(t,e,r,n,i,s,a,o,l){const{featureIndex:u,bucketIndex:c,sourceLayerIndex:h,layoutVertexArrayOffset:p}=e,d=this.bucketLayerIDs[c];if(n&&!function(t,e){for(let r=0;r<t.length;r++)if(e.indexOf(t[r])>=0)return !0;return !1}(n,d))return;const f=this.sourceLayerCoder.decode(h),y=this.vtLayers[f].feature(u);if(r.needGeometry){const t=Ga(y,!0);if(!r.filter(new as(this.tileID.overscaledZ),t,this.tileID.canonical))return}else if(!r.filter(new as(this.tileID.overscaledZ),y))return;const m=this.getId(y,f);for(let e=0;e<d.length;e++){const r=d[e];if(n&&n.indexOf(r)<0)continue;const c=s[r];if(!c)continue;let h={};void 0!==m&&o&&(h=o.getState(c.sourceLayer||"_geojsonTileLayer",m));const f=v({},a[r]);f.paint=_p(f.paint,c.paint,y,h,i),f.layout=_p(f.layout,c.layout,y,h,i);const g=!l||l(y,c,h,p);if(!g)continue;const x=new Hh(y,this.z,this.x,this.y,m);x.layer=f;let b=t[r];void 0===b&&(b=t[r]=[]),b.push({featureIndex:u,feature:x,intersectionZ:g});}}lookupSymbolFeatures(t,e,r,n,i,s,a,o){const l={};this.loadVTLayers();const u=An(i);for(const i of t)this.loadMatchingFeature(l,{bucketIndex:r,sourceLayerIndex:n,featureIndex:i,layoutVertexArrayOffset:0},u,s,a,o,e);return l}hasLayer(t){for(const e of this.bucketLayerIDs)for(const r of e)if(t===r)return !0;return !1}getId(t,e){let r=t.id;return this.promoteId&&(r=t.properties["string"==typeof this.promoteId?this.promoteId:this.promoteId[e]],"boolean"==typeof r&&(r=Number(r))),r}}function _p(t,e,r,n,i){return z(t,((t,s)=>{const a=e instanceof fs?e.get(s):null;return a&&a.evaluate?a.evaluate(r,n,i):a}))}function kp(t,e){return e-t}oi("FeatureIndex",wp,{omit:["rawTileData","sourceLayerCoder"]});class Ap{constructor(t){const e={},r=[];for(const n in t){const i=t[n],s=e[n]={};for(const t in i){const e=i[+t];if(!e||0===e.bitmap.width||0===e.bitmap.height)continue;const n=e.metrics.localGlyph?2:1,a={x:0,y:0,w:e.bitmap.width+2*n,h:e.bitmap.height+2*n};r.push(a),s[t]={rect:a,metrics:e.metrics};}}const{w:n,h:i}=Qu(r),s=new qo({width:n||1,height:i||1});for(const r in t){const n=t[r];for(const t in n){const i=n[+t];if(!i||0===i.bitmap.width||0===i.bitmap.height)continue;const a=e[r][t].rect,o=i.metrics.localGlyph?2:1;qo.copy(i.bitmap,s,{x:0,y:0},{x:a.x+o,y:a.y+o},i.bitmap);}}this.image=s,this.positions=e;}}oi("GlyphAtlas",Ap);class Sp{constructor(t){this.tileID=new Zh(t.tileID.overscaledZ,t.tileID.wrap,t.tileID.canonical.z,t.tileID.canonical.x,t.tileID.canonical.y),this.tileZoom=t.tileZoom,this.uid=t.uid,this.zoom=t.zoom,this.pixelRatio=t.pixelRatio,this.tileSize=t.tileSize,this.source=t.source,this.overscaling=this.tileID.overscaleFactor(),this.showCollisionBoxes=t.showCollisionBoxes,this.collectResourceTiming=!!t.collectResourceTiming,this.returnDependencies=!!t.returnDependencies,this.promoteId=t.promoteId,this.enableTerrain=!!t.enableTerrain,this.isSymbolTile=t.isSymbolTile;}parse(t,e,r,n,i){this.status="parsing",this.data=t,this.collisionBoxArray=new Ys;const s=new Kh(Object.keys(t.layers).sort()),a=new wp(this.tileID,this.promoteId);a.bucketLayerIDs=[];const o={},l=new Rh(256,256),u={featureIndex:a,iconDependencies:{},patternDependencies:{},glyphDependencies:{},lineAtlas:l,availableImages:r},c=e.familiesBySource[this.source];for(const e in c){const n=t.layers[e];if(!n)continue;let i=!1,l=!1;for(const t of c[e])"symbol"===t[0].type?i=!0:l=!0;if(!0===this.isSymbolTile&&!i)continue;if(!1===this.isSymbolTile&&!l)continue;1===n.version&&B(`Vector tile source "${this.source}" layer "${e}" does not use vector tile spec v2 and therefore may have some rendering errors.`);const h=s.encode(e),p=[];for(let t=0;t<n.length;t++){const r=n.feature(t),i=a.getId(r,e);p.push({feature:r,id:i,index:t,sourceLayerIndex:h});}for(const t of c[e]){const e=t[0];void 0!==this.isSymbolTile&&"symbol"===e.type!==this.isSymbolTile||e.minzoom&&this.zoom<Math.floor(e.minzoom)||e.maxzoom&&this.zoom>=e.maxzoom||"none"!==e.visibility&&(Ip(t,this.zoom,r),(o[e.id]=e.createBucket({index:a.bucketLayerIDs.length,layers:t,zoom:this.zoom,pixelRatio:this.pixelRatio,overscaling:this.overscaling,collisionBoxArray:this.collisionBoxArray,sourceLayerIndex:h,sourceID:this.source,enableTerrain:this.enableTerrain})).populate(p,u,this.tileID.canonical),a.bucketLayerIDs.push(t.map((t=>t.id))));}}let h,p,d,f;l.trim();const y={type:"maybePrepare",isSymbolTile:this.isSymbolTile,zoom:this.zoom},m=z(u.glyphDependencies,(t=>Object.keys(t).map(Number)));Object.keys(m).length?n.send("getGlyphs",{uid:this.uid,stacks:m},((t,e)=>{h||(h=t,p=e,b.call(this));}),void 0,!1,y):p={};const g=Object.keys(u.iconDependencies);g.length?n.send("getImages",{icons:g,source:this.source,tileID:this.tileID,type:"icons"},((t,e)=>{h||(h=t,d=e,b.call(this));}),void 0,!1,y):d={};const v=Object.keys(u.patternDependencies);function b(){if(h)return i(h);if(p&&d&&f){const t=new Ap(p),e=new ec(d,f);for(const n in o){const i=o[n];i instanceof ch?(Ip(i.layers,this.zoom,r),Kc(i,p,t.positions,d,e.iconPositions,this.showCollisionBoxes,this.tileID.canonical,this.tileZoom)):i.hasPattern&&(i instanceof uu||i instanceof Bl||i instanceof Yl)&&(Ip(i.layers,this.zoom,r),i.addFeatures(u,this.tileID.canonical,e.patternPositions));}this.status="done",i(null,{buckets:x(o).filter((t=>!t.isEmpty())),featureIndex:a,collisionBoxArray:this.collisionBoxArray,glyphAtlasImage:t.image,lineAtlas:l,imageAtlas:e,glyphMap:this.returnDependencies?p:null,iconMap:this.returnDependencies?d:null,glyphPositions:this.returnDependencies?t.positions:null});}}v.length?n.send("getImages",{icons:v,source:this.source,tileID:this.tileID,type:"patterns"},((t,e)=>{h||(h=t,f=e,b.call(this));}),void 0,!1,y):f={},b.call(this);}}function Ip(t,e,r){const n=new as(e);for(const e of t)e.recalculate(n,r);}class zp{constructor(t){this.entries={},this.scheduler=t;}request(t,e,r,n){const i=this.entries[t]=this.entries[t]||{callbacks:[]};if(i.result){const[t,r]=i.result;return this.scheduler?this.scheduler.add((()=>{n(t,r);}),e):n(t,r),()=>{}}return i.callbacks.push(n),i.cancel||(i.cancel=r(((r,n)=>{i.result=[r,n];for(const t of i.callbacks)this.scheduler?this.scheduler.add((()=>{t(r,n);}),e):t(r,n);setTimeout((()=>delete this.entries[t]),3e3);}))),()=>{i.result||(i.callbacks=i.callbacks.filter((t=>t!==n)),i.callbacks.length||(i.cancel(),delete this.entries[t]));}}}function Tp(t,e,r){const n=JSON.stringify(t.request);return t.data&&(this.deduped.entries[n]={result:[null,t.data]}),this.deduped.request(n,{type:"parseTile",isSymbolTile:t.isSymbolTile,zoom:t.tileZoom},(e=>{const n=St(t.request,((t,n,i,s)=>{t?e(t):n&&e(null,{vectorTile:r?void 0:new Gl.VectorTile(new Eu(n)),rawData:n,cacheControl:i,expires:s});}));return ()=>{n.cancel(),e();}}),e)}t.ARRAY_TYPE=po,t.AUTH_ERR_MSG=W,t.Actor=class{constructor(t,e,r){this.target=t,this.parent=e,this.mapId=r,this.callbacks={},this.cancelCallbacks={},S(["receive"],this),this.target.addEventListener("message",this.receive,!1),this.globalScope=D()?t:a,this.scheduler=new qh;}send(t,e,r,n,i=!1,s){const a=Math.round(1e18*Math.random()).toString(36).substring(0,10);r&&(r.metadata=s,this.callbacks[a]=r);const o=$(this.globalScope)?void 0:[];return this.target.postMessage({id:a,type:t,hasCallback:!!r,targetMapId:n,mustQueue:i,sourceMapId:this.mapId,data:ci(e,o)},o),{cancel:()=>{r&&delete this.callbacks[a],this.target.postMessage({id:a,type:"<cancel>",targetMapId:n,sourceMapId:this.mapId});}}}receive(t){const e=t.data,r=e.id;if(r&&(!e.targetMapId||this.mapId===e.targetMapId))if("<cancel>"===e.type){const t=this.cancelCallbacks[r];delete this.cancelCallbacks[r],t&&t.cancel();}else if(e.mustQueue||D()){const t=this.callbacks[r];this.cancelCallbacks[r]=this.scheduler.add((()=>this.processTask(r,e)),t&&t.metadata||{type:"message"});}else this.processTask(r,e);}processTask(t,e){if("<response>"===e.type){const r=this.callbacks[t];delete this.callbacks[t],r&&(e.error?r(hi(e.error)):r(null,hi(e.data)));}else {const r=$(this.globalScope)?void 0:[],n=e.hasCallback?(e,n)=>{delete this.cancelCallbacks[t],this.target.postMessage({id:t,type:"<response>",sourceMapId:this.mapId,error:e?ci(e):null,data:ci(n,r)},r);}:t=>{},i=hi(e.data);if(this.parent[e.type])this.parent[e.type](e.sourceMapId,i,n);else if(this.parent.getWorkerSource){const t=e.type.split(".");this.parent.getWorkerSource(e.sourceMapId,t[0],i.source)[t[1]](i,n);}else n(new Error(`Could not find function ${e.type}`));}}remove(){this.scheduler.remove(),this.target.removeEventListener("message",this.receive,!1);}},t.CanonicalTileID=jh,t.Color=ce,t.ColorMode=dp,t.CullFaceMode=mp,t.DEMData=lp,t.DataConstantProperty=ys,t.DedupedRequest=zp,t.DepthMode=cp,t.EXTENT=Oa,t.Elevation=class{getAtPointOrZero(t,e=0){return this.getAtPoint(t,e)||0}getAtPoint(t,e,r=!0){null==e&&(e=null);const n=this._source();if(!n)return e;if(t.y<0||t.y>1)return e;const i=n.getSource().maxzoom,s=1<<i,a=Math.floor(t.x),o=t.x-a,l=new Zh(i,a,i,Math.floor(o*s),Math.floor(t.y*s)),u=this.findDEMTileFor(l);if(!u||!u.dem)return e;const c=u.dem,h=1<<u.tileID.canonical.z,p=(o*h-u.tileID.canonical.x)*c.dim,d=(t.y*h-u.tileID.canonical.y)*c.dim,f=Math.floor(p),y=Math.floor(d);return (r?this.exaggeration():1)*rr(rr(c.get(f,y),c.get(f,y+1),d-y),rr(c.get(f+1,y),c.get(f+1,y+1),d-y),p-f)}getAtTileOffset(t,e,r){const n=1<<t.canonical.z;return this.getAtPointOrZero(new Fh(t.wrap+(t.canonical.x+e/Oa)/n,(t.canonical.y+r/Oa)/n))}getForTilePoints(t,e,r,n){const i=bp.create(this,t,n);return !!i&&(e.forEach((t=>{t[2]=this.exaggeration()*i.getElevationAt(t[0],t[1],r);})),!0)}getMinMaxForTile(t){const e=this.findDEMTileFor(t);if(!e||!e.dem)return null;const r=e.dem.tree,n=e.tileID,i=1<<t.canonical.z-n.canonical.z;let s=t.canonical.x/i-n.canonical.x,a=t.canonical.y/i-n.canonical.y,o=0;for(let e=0;e<t.canonical.z-n.canonical.z&&!r.leaves[o];e++){s*=2,a*=2;const t=2*Math.floor(a)+Math.floor(s);o=r.childOffsets[o]+t,s%=1,a%=1;}return {min:this.exaggeration()*r.minimums[o],max:this.exaggeration()*r.maximums[o]}}getMinElevationBelowMSL(){throw new Error("Pure virtual method called.")}raycast(t,e,r){throw new Error("Pure virtual method called.")}pointCoordinate(t){throw new Error("Pure virtual method called.")}_source(){throw new Error("Pure virtual method called.")}exaggeration(){throw new Error("Pure virtual method called.")}findDEMTileFor(t){throw new Error("Pure virtual method called.")}get visibleDemTiles(){throw new Error("Getter must be implemented in subclass.")}},t.ErrorEvent=Lt,t.EvaluationParameters=as,t.Event=Vt,t.Evented=Ft,t.GlyphManager=Vc,t.ImagePosition=tc,t.LineAtlas=Rh,t.LngLat=Mh,t.LngLatBounds=zh,t.LocalGlyphMode=Dc,t.MAX_SAFE_INTEGER=o,t.MercatorCoordinate=Fh,t.ONE_EM=bu,t.OverscaledTileID=Zh,t.Properties=bs,t.RGBAImage=No,t.RequestManager=class{constructor(t,e,r){this._transformRequestFn=t,this._customAccessToken=e,this._silenceAuthErrors=!!r,this._createSkuToken();}_createSkuToken(){const t=function(){let t="";for(let e=0;e<10;e++)t+="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[Math.floor(62*Math.random())];return {token:["1",J,t].join(""),tokenExpiresAt:Date.now()+432e5}}();this._skuToken=t.token,this._skuTokenExpiresAt=t.tokenExpiresAt;}_isSkuTokenExpired(){return Date.now()>this._skuTokenExpiresAt}transformRequest(t,e){return this._transformRequestFn&&this._transformRequestFn(t,e)||{url:t}}normalizeStyleURL(t,e){if(!Q(t))return t;const r=rt(t);return r.path=`/styles/v1${r.path}`,this._makeAPIURL(r,this._customAccessToken||e)}normalizeGlyphsURL(t,e){if(!Q(t))return t;const r=rt(t);return r.path=`/fonts/v1${r.path}`,this._makeAPIURL(r,this._customAccessToken||e)}normalizeSourceURL(t,e){if(!Q(t))return t;const r=rt(t);return r.path=`/v4/${r.authority}.json`,r.params.push("secure"),this._makeAPIURL(r,this._customAccessToken||e)}normalizeSpriteURL(t,e,r,n){const i=rt(t);return Q(t)?(i.path=`/styles/v1${i.path}/sprite${e}${r}`,this._makeAPIURL(i,this._customAccessToken||n)):(i.path+=`${e}${r}`,nt(i))}normalizeTileURL(t,e,r){if(this._isSkuTokenExpired()&&this._createSkuToken(),t&&!Q(t))return t;const n=rt(t);n.path=n.path.replace(/(\.(png|jpg)\d*)(?=$)/,`${e||r&&"raster"!==n.authority&&512===r?"@2x":""}${G.supported?".webp":"$1"}`),"raster"===n.authority?n.path=`/${j.RASTER_URL_PREFIX}${n.path}`:(n.path=n.path.replace(/^.+\/v4\//,"/"),n.path=`/${j.TILE_URL_VERSION}${n.path}`);const i=this._customAccessToken||function(t){for(const e of t){const t=e.match(/^access_token=(.*)$/);if(t)return t[1]}return null}(n.params)||j.ACCESS_TOKEN;return j.REQUIRE_ACCESS_TOKEN&&i&&this._skuToken&&n.params.push(`sku=${this._skuToken}`),this._makeAPIURL(n,i)}canonicalizeTileURL(t,e){const r=rt(t);if(!r.path.match(/^(\/v4\/|\/raster\/v1\/)/)||!r.path.match(/\.[\w]+$/))return t;let n="mapbox://";r.path.match(/^\/raster\/v1\//)?n+=`raster/${r.path.replace(`/${j.RASTER_URL_PREFIX}/`,"")}`:n+=`tiles/${r.path.replace(`/${j.TILE_URL_VERSION}/`,"")}`;let i=r.params;return e&&(i=i.filter((t=>!t.match(/^access_token=/)))),i.length&&(n+=`?${i.join("&")}`),n}canonicalizeTileset(t,e){const r=!!e&&Q(e),n=[];for(const e of t.tiles||[])tt(e)?n.push(this.canonicalizeTileURL(e,r)):n.push(e);return n}_makeAPIURL(t,e){const r="See https://www.mapbox.com/api-documentation/#access-tokens-and-token-scopes",n=rt(j.API_URL);if(t.protocol=n.protocol,t.authority=n.authority,"http"===t.protocol){const e=t.params.indexOf("secure");e>=0&&t.params.splice(e,1);}if("/"!==n.path&&(t.path=`${n.path}${t.path}`),!j.REQUIRE_ACCESS_TOKEN)return nt(t);if(e=e||j.ACCESS_TOKEN,!this._silenceAuthErrors){if(!e)throw new Error(`An API access token is required to use Mapbox GL. ${r}`);if("s"===e[0])throw new Error(`Use a public access token (pk.*) with Mapbox GL, not a secret access token (sk.*). ${r}`)}return t.params=t.params.filter((t=>-1===t.indexOf("access_token"))),t.params.push(`access_token=${e||""}`),nt(t)}},t.ResourceType=wt,t.SegmentVector=$a,t.SourceCache=gp,t.StencilMode=pp,t.StructArrayLayout1ui2=Xs,t.StructArrayLayout2f1f2i16=Rs,t.StructArrayLayout2i4=zs,t.StructArrayLayout2ui4=Zs,t.StructArrayLayout3f12=Ds,t.StructArrayLayout3ui6=$s,t.StructArrayLayout4i8=Ts,t.Texture=Ih,t.Tile=Jh,t.Transitionable=us,t.Uniform1f=xa,t.Uniform1i=class extends ga{constructor(t,e){super(t,e),this.current=0;}set(t){this.current!==t&&(this.current=t,this.gl.uniform1i(this.location,t));}},t.Uniform2f=class extends ga{constructor(t,e){super(t,e),this.current=[0,0];}set(t){t[0]===this.current[0]&&t[1]===this.current[1]||(this.current=t,this.gl.uniform2f(this.location,t[0],t[1]));}},t.Uniform3f=class extends ga{constructor(t,e){super(t,e),this.current=[0,0,0];}set(t){t[0]===this.current[0]&&t[1]===this.current[1]&&t[2]===this.current[2]||(this.current=t,this.gl.uniform3f(this.location,t[0],t[1],t[2]));}},t.Uniform4f=va,t.UniformColor=ba,t.UniformMatrix3f=class extends ga{constructor(t,e){super(t,e),this.current=_a;}set(t){for(let e=0;e<9;e++)if(t[e]!==this.current[e]){this.current=t,this.gl.uniformMatrix3fv(this.location,!1,t);break}}},t.UniformMatrix4f=class extends ga{constructor(t,e){super(t,e),this.current=wa;}set(t){if(t[12]!==this.current[12]||t[0]!==this.current[0])return this.current=t,void this.gl.uniformMatrix4fv(this.location,!1,t);for(let e=1;e<16;e++)if(t[e]!==this.current[e]){this.current=t,this.gl.uniformMatrix4fv(this.location,!1,t);break}}},t.UnwrappedTileID=Gh,t.ValidationError=Ut,t.VectorTileWorkerSource=class extends Ft{constructor(t,e,r,n,i){super(),this.actor=t,this.layerIndex=e,this.availableImages=r,this.loadVectorData=i||Tp,this.loading={},this.loaded={},this.deduped=new zp(t.scheduler),this.isSpriteLoaded=n,this.scheduler=t.scheduler;}loadTile(t,e){const r=t.uid,n=t&&t.request,i=n&&n.collectResourceTiming,s=this.loading[r]=new Sp(t);s.abort=this.loadVectorData(t,((a,o)=>{const l=!this.loading[r];if(delete this.loading[r],l||a||!o)return s.status="done",l||(this.loaded[r]=s),e(a);const u=o.rawData,c={};o.expires&&(c.expires=o.expires),o.cacheControl&&(c.cacheControl=o.cacheControl),s.vectorTile=o.vectorTile||new Gl.VectorTile(new Eu(u));const h=()=>{s.parse(s.vectorTile,this.layerIndex,this.availableImages,this.actor,((t,r)=>{if(t||!r)return e(t);const s={};if(i){const t=Oh(n);t.length>0&&(s.resourceTiming=JSON.parse(JSON.stringify(t)));}e(null,v({rawTileData:u.slice(0)},r,c,s));}));};this.isSpriteLoaded?h():this.once("isSpriteLoaded",(()=>{this.scheduler?this.scheduler.add(h,{type:"parseTile",isSymbolTile:t.isSymbolTile,zoom:t.tileZoom}):h();})),this.loaded=this.loaded||{},this.loaded[r]=s;}));}reloadTile(t,e){const r=this.loaded,n=t.uid,i=this;if(r&&r[n]){const s=r[n];s.showCollisionBoxes=t.showCollisionBoxes,s.enableTerrain=!!t.enableTerrain;const a=(t,r)=>{const n=s.reloadCallback;n&&(delete s.reloadCallback,s.parse(s.vectorTile,i.layerIndex,this.availableImages,i.actor,n)),e(t,r);};"parsing"===s.status?s.reloadCallback=a:"done"===s.status&&(s.vectorTile?s.parse(s.vectorTile,this.layerIndex,this.availableImages,this.actor,a):a());}}abortTile(t,e){const r=t.uid,n=this.loading[r];n&&(n.abort&&n.abort(),delete this.loading[r]),e();}removeTile(t,e){const r=this.loaded,n=t.uid;r&&r[n]&&delete r[n],e();}},t.WritingMode=rc,t.ZoomHistory=pi,t.add=function(t,e,r){return t[0]=e[0]+r[0],t[1]=e[1]+r[1],t[2]=e[2]+r[2],t},t.addDynamicAttributes=ah,t.altitudeFromMercatorZ=Lh,t.asyncAll=g,t.bezier=d,t.bindAll=S,t.bufferConvexPolygon=function(t,e){const r=[];for(let n=0;n<t.length;n++){const i=m(n-1,-1,t.length-1),s=m(n+1,-1,t.length-1),a=t[n],o=t[s],l=t[i].sub(a).unit(),u=o.sub(a).unit(),c=u.angleWithSep(l.x,l.y),h=l.add(u).unit().mult(-1*e/Math.sin(c/2));r.push(a.add(h));}return r},t.cacheEntryPossiblyAdded=function(t){bt++,bt>gt&&(t.getActor().send("enforceCacheSizeLimit",mt),bt=0);},t.clamp=y,t.clearTileCache=function(t){const e=a.caches.delete(dt);t&&e.catch(t).then((()=>t()));},t.clipLine=zc,t.clone=function(t){var e=new po(3);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e},t.clone$1=function(t){var e=new po(16);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e},t.clone$2=M,t.collisionCircleLayout=vu,t.config=j,t.conjugate=function(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=e[3],t},t.copy=function(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t},t.create=xo,t.create$1=function(){var t=new po(16);return po!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0),t[0]=1,t[5]=1,t[10]=1,t[15]=1,t},t.create$2=fo,t.createExpression=cn,t.createFilter=An,t.createLayout=Ss,t.createStyleLayer=function(t){return "custom"===t.type?new gh(t):new bh[t.type](t)},t.cross=function(t,e,r){var n=e[0],i=e[1],s=e[2],a=r[0],o=r[1],l=r[2];return t[0]=i*l-s*o,t[1]=s*a-n*l,t[2]=n*o-i*a,t},t.degToRad=c,t.div=function(t,e,r){return t[0]=e[0]/r[0],t[1]=e[1]/r[1],t[2]=e[2]/r[2],t},t.dot=function(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]},t.dot$1=function(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]+t[3]*e[3]},t.ease=f,t.easeCubicInOut=p,t.emitValidationErrors=ei,t.endsWith=I,t.enforceCacheSizeLimit=function(t){xt(),ft&&ft.then((e=>{e.keys().then((r=>{for(let n=0;n<r.length-t;n++)e.delete(r[n]);}));}));},t.evaluateSizeForFeature=ku,t.evaluateSizeForZoom=Au,t.evaluateVariableOffset=Xc,t.evented=rs,t.exactEquals=function(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]&&t[3]===e[3]},t.exactEquals$1=function(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]},t.exported=q,t.exported$1=G,t.extend=v,t.filterObject=T,t.fromMat4=function(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[4],t[4]=e[5],t[5]=e[6],t[6]=e[8],t[7]=e[9],t[8]=e[10],t},t.fromQuat=function(t,e){var r=e[0],n=e[1],i=e[2],s=e[3],a=r+r,o=n+n,l=i+i,u=r*a,c=n*a,h=n*o,p=i*a,d=i*o,f=i*l,y=s*a,m=s*o,g=s*l;return t[0]=1-h-f,t[1]=c+g,t[2]=p-m,t[3]=0,t[4]=c-g,t[5]=1-u-f,t[6]=d+y,t[7]=0,t[8]=p+m,t[9]=d-y,t[10]=1-u-h,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},t.fromRotation=function(t,e){var r=Math.sin(e),n=Math.cos(e);return t[0]=n,t[1]=r,t[2]=0,t[3]=-r,t[4]=n,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t},t.fromScaling=function(t,e){return t[0]=e[0],t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=e[1],t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=e[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},t.furthestTileCorner=function(t){const e=Math.round((t+45+360)%360/90)%4;return h[e]},t.getAABBPointSquareDist=function(t,e,r){let n=0;for(let i=0;i<2;++i){const s=r?r[i]:0;t[i]>s&&(n+=(t[i]-s)*(t[i]-s)),e[i]<s&&(n+=(s-e[i])*(s-e[i]));}return n},t.getAnchorAlignment=yc,t.getAnchorJustification=Hc,t.getBounds=function(t){let e=1/0,r=1/0,n=-1/0,s=-1/0;for(const i of t)e=Math.min(e,i.x),r=Math.min(r,i.y),n=Math.max(n,i.x),s=Math.max(s,i.y);return {min:new i(e,r),max:new i(n,s)}},t.getImage=Ct,t.getJSON=function(t,e){return At(v(t,{type:"json"}),e)},t.getMapSessionAPI=ht,t.getPerformanceMeasurement=Oh,t.getRTLTextPluginStatus=ns,t.getReferrer=kt,t.getVideo=function(t,e){const r=a.document.createElement("video");r.muted=!0,r.onloadstart=function(){e(null,r);};for(let e=0;e<t.length;e++){const n=a.document.createElement("source");Tt(t[e])||(r.crossOrigin="Anonymous"),n.src=t[e],r.appendChild(n);}return {cancel:()=>{}}},t.identity=yo,t.identity$1=Co,t.invert=function(t,e){var r=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8],h=e[9],p=e[10],d=e[11],f=e[12],y=e[13],m=e[14],g=e[15],x=r*o-n*a,v=r*l-i*a,b=r*u-s*a,w=n*l-i*o,_=n*u-s*o,k=i*u-s*l,A=c*y-h*f,S=c*m-p*f,I=c*g-d*f,z=h*m-p*y,T=h*g-d*y,M=p*g-d*m,E=x*M-v*T+b*z+w*I-_*S+k*A;return E?(t[0]=(o*M-l*T+u*z)*(E=1/E),t[1]=(i*T-n*M-s*z)*E,t[2]=(y*k-m*_+g*w)*E,t[3]=(p*_-h*k-d*w)*E,t[4]=(l*I-a*M-u*S)*E,t[5]=(r*M-i*I+s*S)*E,t[6]=(m*b-f*k-g*v)*E,t[7]=(c*k-p*b+d*v)*E,t[8]=(a*T-o*I+u*A)*E,t[9]=(n*I-r*T-s*A)*E,t[10]=(f*_-y*b+g*x)*E,t[11]=(h*b-c*_-d*x)*E,t[12]=(o*S-a*z-l*A)*E,t[13]=(r*z-n*S+i*A)*E,t[14]=(y*v-f*w-m*x)*E,t[15]=(c*w-h*v+p*x)*E,t):null},t.isMapAuthenticated=function(t){return pt.has(t)},t.isMapboxURL=Q,t.latFromMercatorY=Vh,t.len=Mo,t.length=vo,t.length$1=function(t){return Math.hypot(t[0],t[1],t[2],t[3])},t.loadVectorTile=Tp,t.makeRequest=At,t.mercatorXfromLng=Ch,t.mercatorYfromLat=Ph,t.mercatorZfromAltitude=Dh,t.mul=function(t,e,r){return t[0]=e[0]*r[0],t[1]=e[1]*r[1],t[2]=e[2]*r[2],t[3]=e[3]*r[3],t},t.mul$1=go,t.mul$2=To,t.multiply=mo,t.multiply$1=_o,t.nextPowerOfTwo=k,t.normalize=Ao,t.normalize$1=function(t,e){var r=e[0],n=e[1],i=e[2],s=e[3],a=r*r+n*n+i*i+s*s;return a>0&&(a=1/Math.sqrt(a)),t[0]=r*a,t[1]=n*a,t[2]=i*a,t[3]=s*a,t},t.number=rr,t.ortho=function(t,e,r,n,i,s,a){var o=1/(e-r),l=1/(n-i),u=1/(s-a);return t[0]=-2*o,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*l,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*u,t[11]=0,t[12]=(e+r)*o,t[13]=(i+n)*l,t[14]=(a+s)*u,t[15]=1,t},t.pbf=Eu,t.perspective=function(t,e,r,n,i){var s,a=1/Math.tan(e/2);return t[0]=a/r,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=a,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=-1,t[12]=0,t[13]=0,t[15]=0,null!=i&&i!==1/0?(t[10]=(i+n)*(s=1/(n-i)),t[14]=2*i*n*s):(t[10]=-1,t[14]=-2*n),t},t.pick=function(t,e){const r={};for(let n=0;n<e.length;n++){const i=e[n];i in t&&(r[i]=t[i]);}return r},t.plugin=ss,t.pointGeometry=i,t.polygonIntersectsBox=io,t.polygonIntersectsPolygon=Ka,t.polygonizeBounds=function(t,e,r=0,n=!0){const s=new i(r,r),a=t.sub(s),o=e.add(s),l=[a,new i(o.x,a.y),o,new i(a.x,o.y)];return n&&l.push(a),l},t.posAttributes=Yh,t.postMapLoadEvent=ut,t.postTurnstileEvent=ot,t.potpack=Qu,t.prevPowerOfTwo=function(t){return t<=1?1:Math.pow(2,Math.floor(Math.log(t)/Math.LN2))},t.radToDeg=function(t){return t*u},t.refProperties=["type","source","source-layer","minzoom","maxzoom","filter","layout"],t.registerForPluginStateChange=function(t){return t({pluginStatus:Wi,pluginURL:Qi}),rs.on("pluginStateChange",t),t},t.removeAuthState=function(t){pt.delete(t);},t.renderColorRamp=Go,t.rotateX=function(t,e,r){var n=Math.sin(r),i=Math.cos(r),s=e[4],a=e[5],o=e[6],l=e[7],u=e[8],c=e[9],h=e[10],p=e[11];return e!==t&&(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[4]=s*i+u*n,t[5]=a*i+c*n,t[6]=o*i+h*n,t[7]=l*i+p*n,t[8]=u*i-s*n,t[9]=c*i-a*n,t[10]=h*i-o*n,t[11]=p*i-l*n,t},t.rotateX$1=Po,t.rotateY=function(t,e,r){var n=Math.sin(r),i=Math.cos(r),s=e[0],a=e[1],o=e[2],l=e[3],u=e[8],c=e[9],h=e[10],p=e[11];return e!==t&&(t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[0]=s*i-u*n,t[1]=a*i-c*n,t[2]=o*i-h*n,t[3]=l*i-p*n,t[8]=s*n+u*i,t[9]=a*n+c*i,t[10]=o*n+h*i,t[11]=l*n+p*i,t},t.rotateZ=function(t,e,r){var n=Math.sin(r),i=Math.cos(r),s=e[0],a=e[1],o=e[2],l=e[3],u=e[4],c=e[5],h=e[6],p=e[7];return e!==t&&(t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[0]=s*i+u*n,t[1]=a*i+c*n,t[2]=o*i+h*n,t[3]=l*i+p*n,t[4]=u*i-s*n,t[5]=c*i-a*n,t[6]=h*i-o*n,t[7]=p*i-l*n,t},t.rotateZ$1=function(t,e,r){r*=.5;var n=e[0],i=e[1],s=e[2],a=e[3],o=Math.sin(r),l=Math.cos(r);return t[0]=n*l+i*o,t[1]=i*l-n*o,t[2]=s*l+a*o,t[3]=a*l-s*o,t},t.scale=function(t,e,r){return t[0]=e[0]*r,t[1]=e[1]*r,t[2]=e[2]*r,t},t.scale$1=function(t,e,r){var n=r[0],i=r[1],s=r[2];return t[0]=e[0]*n,t[1]=e[1]*n,t[2]=e[2]*n,t[3]=e[3]*n,t[4]=e[4]*i,t[5]=e[5]*i,t[6]=e[6]*i,t[7]=e[7]*i,t[8]=e[8]*s,t[9]=e[9]*s,t[10]=e[10]*s,t[11]=e[11]*s,t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t},t.scale$2=function(t,e,r){return t[0]=e[0]*r,t[1]=e[1]*r,t[2]=e[2]*r,t[3]=e[3]*r,t},t.scaleAndAdd=ko,t.setCacheLimits=function(t,e){mt=t,gt=e;},t.setRTLTextPlugin=function(t,e,r=!1){if(Wi===Ki||Wi===Hi||Wi===Yi)throw new Error("setRTLTextPlugin cannot be called multiple times.");Qi=q.resolveURL(t),Wi=Ki,Ji=e,es(),r||is();},t.smoothstep=function(t,e,r){return (r=y((r-t)/(e-t),0,1))*r*(3-2*r)},t.spec=Rt,t.storeAuthState=function(t,e){e?pt.add(t):pt.delete(t);},t.sub=zo,t.subtract=wo,t.symbolSize=Su,t.transformMat3=function(t,e,r){var n=e[0],i=e[1],s=e[2];return t[0]=n*r[0]+i*r[3]+s*r[6],t[1]=n*r[1]+i*r[4]+s*r[7],t[2]=n*r[2]+i*r[5]+s*r[8],t},t.transformMat4=Eo,t.transformMat4$1=function(t,e,r){var n=e[0],i=e[1],s=e[2],a=r[3]*n+r[7]*i+r[11]*s+r[15];return t[0]=(r[0]*n+r[4]*i+r[8]*s+r[12])/(a=a||1),t[1]=(r[1]*n+r[5]*i+r[9]*s+r[13])/a,t[2]=(r[2]*n+r[6]*i+r[10]*s+r[14])/a,t},t.transformQuat=So,t.translate=function(t,e,r){var n,i,s,a,o,l,u,c,h,p,d,f,y=r[0],m=r[1],g=r[2];return e===t?(t[12]=e[0]*y+e[4]*m+e[8]*g+e[12],t[13]=e[1]*y+e[5]*m+e[9]*g+e[13],t[14]=e[2]*y+e[6]*m+e[10]*g+e[14],t[15]=e[3]*y+e[7]*m+e[11]*g+e[15]):(i=e[1],s=e[2],a=e[3],o=e[4],l=e[5],u=e[6],c=e[7],h=e[8],p=e[9],d=e[10],f=e[11],t[0]=n=e[0],t[1]=i,t[2]=s,t[3]=a,t[4]=o,t[5]=l,t[6]=u,t[7]=c,t[8]=h,t[9]=p,t[10]=d,t[11]=f,t[12]=n*y+o*m+h*g+e[12],t[13]=i*y+l*m+p*g+e[13],t[14]=s*y+u*m+d*g+e[14],t[15]=a*y+c*m+f*g+e[15]),t},t.triggerPluginCompletionEvent=ts,t.uniqueId=w,t.validateCustomStyleLayer=function(t){const e=[],r=t.id;return void 0===r&&e.push({message:`layers.${r}: missing required property "id"`}),void 0===t.render&&e.push({message:`layers.${r}: missing required method "render"`}),t.renderingMode&&"2d"!==t.renderingMode&&"3d"!==t.renderingMode&&e.push({message:`layers.${r}: property "renderingMode" must be either "2d" or "3d"`}),e},t.validateFog=Wn,t.validateLight=Jn,t.validateStyle=Yn,t.values=x,t.vectorTile=Gl,t.version=e,t.warnOnce=B,t.window=a,t.wrap=m;}));

  define(["./shared"],(function(e){function t(e){const r=typeof e;if("number"===r||"boolean"===r||"string"===r||null==e)return JSON.stringify(e);if(Array.isArray(e)){let r="[";for(const o of e)r+=`${t(o)},`;return `${r}]`}const o=Object.keys(e).sort();let n="{";for(let r=0;r<o.length;r++)n+=`${JSON.stringify(o[r])}:${t(e[o[r]])},`;return `${n}}`}function r(r){let o="";for(const n of e.refProperties)o+=`/${t(r[n])}`;return o}class o{constructor(e){this.keyCache={},e&&this.replace(e);}replace(e){this._layerConfigs={},this._layers={},this.update(e,[]);}update(t,o){for(const r of t){this._layerConfigs[r.id]=r;const t=this._layers[r.id]=e.createStyleLayer(r);t._featureFilter=e.createFilter(t.filter),this.keyCache[r.id]&&delete this.keyCache[r.id];}for(const e of o)delete this.keyCache[e],delete this._layerConfigs[e],delete this._layers[e];this.familiesBySource={};const n=function(e,t){const o={};for(let n=0;n<e.length;n++){const i=t&&t[e[n].id]||r(e[n]);t&&(t[e[n].id]=i);let s=o[i];s||(s=o[i]=[]),s.push(e[n]);}const n=[];for(const e in o)n.push(o[e]);return n}(e.values(this._layerConfigs),this.keyCache);for(const e of n){const t=e.map((e=>this._layers[e.id])),r=t[0];if("none"===r.visibility)continue;const o=r.source||"";let n=this.familiesBySource[o];n||(n=this.familiesBySource[o]={});const i=r.sourceLayer||"_geojsonTileLayer";let s=n[i];s||(s=n[i]=[]),s.push(t);}}}const{ImageBitmap:n}=e.window;class i{loadTile(t,r){const{uid:o,encoding:i,rawImageData:s,padding:a,buildQuadTree:l}=t,u=n&&s instanceof n?this.getImageData(s,a):s;r(null,new e.DEMData(o,u,i,a<1,l));}getImageData(t,r){this.offscreenCanvas&&this.offscreenCanvasContext||(this.offscreenCanvas=new OffscreenCanvas(t.width,t.height),this.offscreenCanvasContext=this.offscreenCanvas.getContext("2d")),this.offscreenCanvas.width=t.width,this.offscreenCanvas.height=t.height,this.offscreenCanvasContext.drawImage(t,0,0,t.width,t.height);const o=this.offscreenCanvasContext.getImageData(-r,-r,t.width+2*r,t.height+2*r);return this.offscreenCanvasContext.clearRect(0,0,this.offscreenCanvas.width,this.offscreenCanvas.height),new e.RGBAImage({width:o.width,height:o.height},o.data)}}var s=function e(t,r){var o,n=t&&t.type;if("FeatureCollection"===n)for(o=0;o<t.features.length;o++)e(t.features[o],r);else if("GeometryCollection"===n)for(o=0;o<t.geometries.length;o++)e(t.geometries[o],r);else if("Feature"===n)e(t.geometry,r);else if("Polygon"===n)a(t.coordinates,r);else if("MultiPolygon"===n)for(o=0;o<t.coordinates.length;o++)a(t.coordinates[o],r);return t};function a(e,t){if(0!==e.length){l(e[0],t);for(var r=1;r<e.length;r++)l(e[r],!t);}}function l(e,t){for(var r=0,o=0,n=e.length,i=n-1;o<n;i=o++)r+=(e[o][0]-e[i][0])*(e[i][1]+e[o][1]);r>=0!=!!t&&e.reverse();}const u=e.vectorTile.VectorTileFeature.prototype.toGeoJSON;class h{constructor(t){this._feature=t,this.extent=e.EXTENT,this.type=t.type,this.properties=t.tags,"id"in t&&!isNaN(t.id)&&(this.id=parseInt(t.id,10));}loadGeometry(){if(1===this._feature.type){const t=[];for(const r of this._feature.geometry)t.push([new e.pointGeometry(r[0],r[1])]);return t}{const t=[];for(const r of this._feature.geometry){const o=[];for(const t of r)o.push(new e.pointGeometry(t[0],t[1]));t.push(o);}return t}}toGeoJSON(e,t,r){return u.call(this,e,t,r)}}class c{constructor(t){this.layers={_geojsonTileLayer:this},this.name="_geojsonTileLayer",this.extent=e.EXTENT,this.length=t.length,this._features=t;}feature(e){return new h(this._features[e])}}var f=e.vectorTile.VectorTileFeature,p=g;function g(e,t){this.options=t||{},this.features=e,this.length=e.length;}function d(e,t){this.id="number"==typeof e.id?e.id:void 0,this.type=e.type,this.rawGeometry=1===e.type?[e.geometry]:e.geometry,this.properties=e.tags,this.extent=t||4096;}g.prototype.feature=function(e){return new d(this.features[e],this.options.extent)},d.prototype.loadGeometry=function(){var t=this.rawGeometry;this.geometry=[];for(var r=0;r<t.length;r++){for(var o=t[r],n=[],i=0;i<o.length;i++)n.push(new e.pointGeometry(o[i][0],o[i][1]));this.geometry.push(n);}return this.geometry},d.prototype.bbox=function(){this.geometry||this.loadGeometry();for(var e=this.geometry,t=1/0,r=-1/0,o=1/0,n=-1/0,i=0;i<e.length;i++)for(var s=e[i],a=0;a<s.length;a++){var l=s[a];t=Math.min(t,l.x),r=Math.max(r,l.x),o=Math.min(o,l.y),n=Math.max(n,l.y);}return [t,o,r,n]},d.prototype.toGeoJSON=f.prototype.toGeoJSON;var m=v,y=p;function v(t){var r=new e.pbf;return function(e,t){for(var r in e.layers)t.writeMessage(3,x,e.layers[r]);}(t,r),r.finish()}function x(e,t){var r;t.writeVarintField(15,e.version||1),t.writeStringField(1,e.name||""),t.writeVarintField(5,e.extent||4096);var o={keys:[],values:[],keycache:{},valuecache:{}};for(r=0;r<e.length;r++)o.feature=e.feature(r),t.writeMessage(2,w,o);var n=o.keys;for(r=0;r<n.length;r++)t.writeStringField(3,n[r]);var i=o.values;for(r=0;r<i.length;r++)t.writeMessage(4,T,i[r]);}function w(e,t){var r=e.feature;void 0!==r.id&&t.writeVarintField(1,r.id),t.writeMessage(2,S,e),t.writeVarintField(3,r.type),t.writeMessage(4,b,r);}function S(e,t){var r=e.feature,o=e.keys,n=e.values,i=e.keycache,s=e.valuecache;for(var a in r.properties){var l=i[a];void 0===l&&(o.push(a),i[a]=l=o.length-1),t.writeVarint(l);var u=r.properties[a],h=typeof u;"string"!==h&&"boolean"!==h&&"number"!==h&&(u=JSON.stringify(u));var c=h+":"+u,f=s[c];void 0===f&&(n.push(u),s[c]=f=n.length-1),t.writeVarint(f);}}function M(e,t){return (t<<3)+(7&e)}function P(e){return e<<1^e>>31}function b(e,t){for(var r=e.loadGeometry(),o=e.type,n=0,i=0,s=r.length,a=0;a<s;a++){var l=r[a],u=1;1===o&&(u=l.length),t.writeVarint(M(1,u));for(var h=3===o?l.length-1:l.length,c=0;c<h;c++){1===c&&1!==o&&t.writeVarint(M(2,h-1));var f=l[c].x-n,p=l[c].y-i;t.writeVarint(P(f)),t.writeVarint(P(p)),n+=f,i+=p;}3===o&&t.writeVarint(M(7,1));}}function T(e,t){var r=typeof e;"string"===r?t.writeStringField(1,e):"boolean"===r?t.writeBooleanField(7,e):"number"===r&&(e%1!=0?t.writeDoubleField(3,e):e<0?t.writeSVarintField(6,e):t.writeVarintField(5,e));}function k(e,t,r,o,n,i){if(n-o<=r)return;const s=o+n>>1;I(e,t,s,o,n,i%2),k(e,t,r,o,s-1,i+1),k(e,t,r,s+1,n,i+1);}function I(e,t,r,o,n,i){for(;n>o;){if(n-o>600){const s=n-o+1,a=r-o+1,l=Math.log(s),u=.5*Math.exp(2*l/3),h=.5*Math.sqrt(l*u*(s-u)/s)*(a-s/2<0?-1:1);I(e,t,r,Math.max(o,Math.floor(r-a*u/s+h)),Math.min(n,Math.floor(r+(s-a)*u/s+h)),i);}const s=t[2*r+i];let a=o,l=n;for(_(e,t,o,r),t[2*n+i]>s&&_(e,t,o,n);a<l;){for(_(e,t,a,l),a++,l--;t[2*a+i]<s;)a++;for(;t[2*l+i]>s;)l--;}t[2*o+i]===s?_(e,t,o,l):(l++,_(e,t,l,n)),l<=r&&(o=l+1),r<=l&&(n=l-1);}}function _(e,t,r,o){L(e,r,o),L(t,2*r,2*o),L(t,2*r+1,2*o+1);}function L(e,t,r){const o=e[t];e[t]=e[r],e[r]=o;}function C(e,t,r,o){const n=e-r,i=t-o;return n*n+i*i}m.fromVectorTileJs=v,m.fromGeojsonVt=function(e,t){t=t||{};var r={};for(var o in e)r[o]=new p(e[o].features,t),r[o].name=o,r[o].version=t.version,r[o].extent=t.extent;return v({layers:r})},m.GeoJSONWrapper=y;const O=e=>e[0],z=e=>e[1];class E{constructor(e,t=O,r=z,o=64,n=Float64Array){this.nodeSize=o,this.points=e;const i=e.length<65536?Uint16Array:Uint32Array,s=this.ids=new i(e.length),a=this.coords=new n(2*e.length);for(let o=0;o<e.length;o++)s[o]=o,a[2*o]=t(e[o]),a[2*o+1]=r(e[o]);k(s,a,o,0,s.length-1,0);}range(e,t,r,o){return function(e,t,r,o,n,i,s){const a=[0,e.length-1,0],l=[];let u,h;for(;a.length;){const c=a.pop(),f=a.pop(),p=a.pop();if(f-p<=s){for(let s=p;s<=f;s++)u=t[2*s],h=t[2*s+1],u>=r&&u<=n&&h>=o&&h<=i&&l.push(e[s]);continue}const g=Math.floor((p+f)/2);u=t[2*g],h=t[2*g+1],u>=r&&u<=n&&h>=o&&h<=i&&l.push(e[g]);const d=(c+1)%2;(0===c?r<=u:o<=h)&&(a.push(p),a.push(g-1),a.push(d)),(0===c?n>=u:i>=h)&&(a.push(g+1),a.push(f),a.push(d));}return l}(this.ids,this.coords,e,t,r,o,this.nodeSize)}within(e,t,r){return function(e,t,r,o,n,i){const s=[0,e.length-1,0],a=[],l=n*n;for(;s.length;){const u=s.pop(),h=s.pop(),c=s.pop();if(h-c<=i){for(let n=c;n<=h;n++)C(t[2*n],t[2*n+1],r,o)<=l&&a.push(e[n]);continue}const f=Math.floor((c+h)/2),p=t[2*f],g=t[2*f+1];C(p,g,r,o)<=l&&a.push(e[f]);const d=(u+1)%2;(0===u?r-n<=p:o-n<=g)&&(s.push(c),s.push(f-1),s.push(d)),(0===u?r+n>=p:o+n>=g)&&(s.push(f+1),s.push(h),s.push(d));}return a}(this.ids,this.coords,e,t,r,this.nodeSize)}}const F={minZoom:0,maxZoom:16,minPoints:2,radius:40,extent:512,nodeSize:64,log:!1,generateId:!1,reduce:null,map:e=>e},N=Math.fround||(Z=new Float32Array(1),e=>(Z[0]=+e,Z[0]));var Z;class G{constructor(e){this.options=D(Object.create(F),e),this.trees=new Array(this.options.maxZoom+1);}load(e){const{log:t,minZoom:r,maxZoom:o,nodeSize:n}=this.options;t&&console.time("total time");const i=`prepare ${e.length} points`;t&&console.time(i),this.points=e;let s=[];for(let t=0;t<e.length;t++)e[t].geometry&&s.push(Y(e[t],t));this.trees[o+1]=new E(s,$,B,n,Float32Array),t&&console.timeEnd(i);for(let e=o;e>=r;e--){const r=+Date.now();s=this._cluster(s,e),this.trees[e]=new E(s,$,B,n,Float32Array),t&&console.log("z%d: %d clusters in %dms",e,s.length,+Date.now()-r);}return t&&console.timeEnd("total time"),this}getClusters(e,t){let r=((e[0]+180)%360+360)%360-180;const o=Math.max(-90,Math.min(90,e[1]));let n=180===e[2]?180:((e[2]+180)%360+360)%360-180;const i=Math.max(-90,Math.min(90,e[3]));if(e[2]-e[0]>=360)r=-180,n=180;else if(r>n){const e=this.getClusters([r,o,180,i],t),s=this.getClusters([-180,o,n,i],t);return e.concat(s)}const s=this.trees[this._limitZoom(t)],a=s.range(V(r),j(i),V(n),j(o)),l=[];for(const e of a){const t=s.points[e];l.push(t.numPoints?W(t):this.points[t.index]);}return l}getChildren(e){const t=this._getOriginId(e),r=this._getOriginZoom(e),o="No cluster with the specified id.",n=this.trees[r];if(!n)throw new Error(o);const i=n.points[t];if(!i)throw new Error(o);const s=this.options.radius/(this.options.extent*Math.pow(2,r-1)),a=n.within(i.x,i.y,s),l=[];for(const t of a){const r=n.points[t];r.parentId===e&&l.push(r.numPoints?W(r):this.points[r.index]);}if(0===l.length)throw new Error(o);return l}getLeaves(e,t,r){const o=[];return this._appendLeaves(o,e,t=t||10,r=r||0,0),o}getTile(e,t,r){const o=this.trees[this._limitZoom(e)],n=Math.pow(2,e),{extent:i,radius:s}=this.options,a=s/i,l=(r-a)/n,u=(r+1+a)/n,h={features:[]};return this._addTileFeatures(o.range((t-a)/n,l,(t+1+a)/n,u),o.points,t,r,n,h),0===t&&this._addTileFeatures(o.range(1-a/n,l,1,u),o.points,n,r,n,h),t===n-1&&this._addTileFeatures(o.range(0,l,a/n,u),o.points,-1,r,n,h),h.features.length?h:null}getClusterExpansionZoom(e){let t=this._getOriginZoom(e)-1;for(;t<=this.options.maxZoom;){const r=this.getChildren(e);if(t++,1!==r.length)break;e=r[0].properties.cluster_id;}return t}_appendLeaves(e,t,r,o,n){const i=this.getChildren(t);for(const t of i){const i=t.properties;if(i&&i.cluster?n+i.point_count<=o?n+=i.point_count:n=this._appendLeaves(e,i.cluster_id,r,o,n):n<o?n++:e.push(t),e.length===r)break}return n}_addTileFeatures(e,t,r,o,n,i){for(const s of e){const e=t[s],a=e.numPoints;let l,u,h;if(a)l=X(e),u=e.x,h=e.y;else {const t=this.points[e.index];l=t.properties,u=V(t.geometry.coordinates[0]),h=j(t.geometry.coordinates[1]);}const c={type:1,geometry:[[Math.round(this.options.extent*(u*n-r)),Math.round(this.options.extent*(h*n-o))]],tags:l};let f;a?f=e.id:this.options.generateId?f=e.index:this.points[e.index].id&&(f=this.points[e.index].id),void 0!==f&&(c.id=f),i.features.push(c);}}_limitZoom(e){return Math.max(this.options.minZoom,Math.min(+e,this.options.maxZoom+1))}_cluster(e,t){const r=[],{radius:o,extent:n,reduce:i,minPoints:s}=this.options,a=o/(n*Math.pow(2,t));for(let o=0;o<e.length;o++){const n=e[o];if(n.zoom<=t)continue;n.zoom=t;const l=this.trees[t+1],u=l.within(n.x,n.y,a),h=n.numPoints||1;let c=h;for(const e of u){const r=l.points[e];r.zoom>t&&(c+=r.numPoints||1);}if(c>=s){let e=n.x*h,s=n.y*h,a=i&&h>1?this._map(n,!0):null;const f=(o<<5)+(t+1)+this.points.length;for(const r of u){const o=l.points[r];if(o.zoom<=t)continue;o.zoom=t;const u=o.numPoints||1;e+=o.x*u,s+=o.y*u,o.parentId=f,i&&(a||(a=this._map(n,!0)),i(a,this._map(o)));}n.parentId=f,r.push(J(e/c,s/c,f,c,a));}else if(r.push(n),c>1)for(const e of u){const o=l.points[e];o.zoom<=t||(o.zoom=t,r.push(o));}}return r}_getOriginId(e){return e-this.points.length>>5}_getOriginZoom(e){return (e-this.points.length)%32}_map(e,t){if(e.numPoints)return t?D({},e.properties):e.properties;const r=this.points[e.index].properties,o=this.options.map(r);return t&&o===r?D({},o):o}}function J(e,t,r,o,n){return {x:N(e),y:N(t),zoom:1/0,id:r,parentId:-1,numPoints:o,properties:n}}function Y(e,t){const[r,o]=e.geometry.coordinates;return {x:N(V(r)),y:N(j(o)),zoom:1/0,index:t,parentId:-1}}function W(e){return {type:"Feature",id:e.id,properties:X(e),geometry:{type:"Point",coordinates:[(t=e.x,360*(t-.5)),A(e.y)]}};var t;}function X(e){const t=e.numPoints,r=t>=1e4?`${Math.round(t/1e3)}k`:t>=1e3?Math.round(t/100)/10+"k":t;return D(D({},e.properties),{cluster:!0,cluster_id:e.id,point_count:t,point_count_abbreviated:r})}function V(e){return e/360+.5}function j(e){const t=Math.sin(e*Math.PI/180),r=.5-.25*Math.log((1+t)/(1-t))/Math.PI;return r<0?0:r>1?1:r}function A(e){const t=(180-360*e)*Math.PI/180;return 360*Math.atan(Math.exp(t))/Math.PI-90}function D(e,t){for(const r in t)e[r]=t[r];return e}function $(e){return e.x}function B(e){return e.y}function R(e,t,r,o){for(var n,i=o,s=r-t>>1,a=r-t,l=e[t],u=e[t+1],h=e[r],c=e[r+1],f=t+3;f<r;f+=3){var p=q(e[f],e[f+1],l,u,h,c);if(p>i)n=f,i=p;else if(p===i){var g=Math.abs(f-s);g<a&&(n=f,a=g);}}i>o&&(n-t>3&&R(e,t,n,o),e[n+2]=i,r-n>3&&R(e,n,r,o));}function q(e,t,r,o,n,i){var s=n-r,a=i-o;if(0!==s||0!==a){var l=((e-r)*s+(t-o)*a)/(s*s+a*a);l>1?(r=n,o=i):l>0&&(r+=s*l,o+=a*l);}return (s=e-r)*s+(a=t-o)*a}function U(e,t,r,o){var n={id:void 0===e?null:e,type:t,geometry:r,tags:o,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0};return function(e){var t=e.geometry,r=e.type;if("Point"===r||"MultiPoint"===r||"LineString"===r)Q(e,t);else if("Polygon"===r||"MultiLineString"===r)for(var o=0;o<t.length;o++)Q(e,t[o]);else if("MultiPolygon"===r)for(o=0;o<t.length;o++)for(var n=0;n<t[o].length;n++)Q(e,t[o][n]);}(n),n}function Q(e,t){for(var r=0;r<t.length;r+=3)e.minX=Math.min(e.minX,t[r]),e.minY=Math.min(e.minY,t[r+1]),e.maxX=Math.max(e.maxX,t[r]),e.maxY=Math.max(e.maxY,t[r+1]);}function H(e,t,r,o){if(t.geometry){var n=t.geometry.coordinates,i=t.geometry.type,s=Math.pow(r.tolerance/((1<<r.maxZoom)*r.extent),2),a=[],l=t.id;if(r.promoteId?l=t.properties[r.promoteId]:r.generateId&&(l=o||0),"Point"===i)K(n,a);else if("MultiPoint"===i)for(var u=0;u<n.length;u++)K(n[u],a);else if("LineString"===i)ee(n,a,s,!1);else if("MultiLineString"===i){if(r.lineMetrics){for(u=0;u<n.length;u++)ee(n[u],a=[],s,!1),e.push(U(l,"LineString",a,t.properties));return}te(n,a,s,!1);}else if("Polygon"===i)te(n,a,s,!0);else {if("MultiPolygon"!==i){if("GeometryCollection"===i){for(u=0;u<t.geometry.geometries.length;u++)H(e,{id:l,geometry:t.geometry.geometries[u],properties:t.properties},r,o);return}throw new Error("Input data is not a valid GeoJSON object.")}for(u=0;u<n.length;u++){var h=[];te(n[u],h,s,!0),a.push(h);}}e.push(U(l,i,a,t.properties));}}function K(e,t){t.push(re(e[0])),t.push(oe(e[1])),t.push(0);}function ee(e,t,r,o){for(var n,i,s=0,a=0;a<e.length;a++){var l=re(e[a][0]),u=oe(e[a][1]);t.push(l),t.push(u),t.push(0),a>0&&(s+=o?(n*u-l*i)/2:Math.sqrt(Math.pow(l-n,2)+Math.pow(u-i,2))),n=l,i=u;}var h=t.length-3;t[2]=1,R(t,0,h,r),t[h+2]=1,t.size=Math.abs(s),t.start=0,t.end=t.size;}function te(e,t,r,o){for(var n=0;n<e.length;n++){var i=[];ee(e[n],i,r,o),t.push(i);}}function re(e){return e/360+.5}function oe(e){var t=Math.sin(e*Math.PI/180),r=.5-.25*Math.log((1+t)/(1-t))/Math.PI;return r<0?0:r>1?1:r}function ne(e,t,r,o,n,i,s,a){if(o/=t,i>=(r/=t)&&s<o)return e;if(s<r||i>=o)return null;for(var l=[],u=0;u<e.length;u++){var h=e[u],c=h.geometry,f=h.type,p=0===n?h.minX:h.minY,g=0===n?h.maxX:h.maxY;if(p>=r&&g<o)l.push(h);else if(!(g<r||p>=o)){var d=[];if("Point"===f||"MultiPoint"===f)ie(c,d,r,o,n);else if("LineString"===f)se(c,d,r,o,n,!1,a.lineMetrics);else if("MultiLineString"===f)le(c,d,r,o,n,!1);else if("Polygon"===f)le(c,d,r,o,n,!0);else if("MultiPolygon"===f)for(var m=0;m<c.length;m++){var y=[];le(c[m],y,r,o,n,!0),y.length&&d.push(y);}if(d.length){if(a.lineMetrics&&"LineString"===f){for(m=0;m<d.length;m++)l.push(U(h.id,f,d[m],h.tags));continue}"LineString"!==f&&"MultiLineString"!==f||(1===d.length?(f="LineString",d=d[0]):f="MultiLineString"),"Point"!==f&&"MultiPoint"!==f||(f=3===d.length?"Point":"MultiPoint"),l.push(U(h.id,f,d,h.tags));}}}return l.length?l:null}function ie(e,t,r,o,n){for(var i=0;i<e.length;i+=3){var s=e[i+n];s>=r&&s<=o&&(t.push(e[i]),t.push(e[i+1]),t.push(e[i+2]));}}function se(e,t,r,o,n,i,s){for(var a,l,u=ae(e),h=0===n?he:ce,c=e.start,f=0;f<e.length-3;f+=3){var p=e[f],g=e[f+1],d=e[f+2],m=e[f+3],y=e[f+4],v=0===n?p:g,x=0===n?m:y,w=!1;s&&(a=Math.sqrt(Math.pow(p-m,2)+Math.pow(g-y,2))),v<r?x>r&&(l=h(u,p,g,m,y,r),s&&(u.start=c+a*l)):v>o?x<o&&(l=h(u,p,g,m,y,o),s&&(u.start=c+a*l)):ue(u,p,g,d),x<r&&v>=r&&(l=h(u,p,g,m,y,r),w=!0),x>o&&v<=o&&(l=h(u,p,g,m,y,o),w=!0),!i&&w&&(s&&(u.end=c+a*l),t.push(u),u=ae(e)),s&&(c+=a);}var S=e.length-3;p=e[S],g=e[S+1],d=e[S+2],(v=0===n?p:g)>=r&&v<=o&&ue(u,p,g,d),S=u.length-3,i&&S>=3&&(u[S]!==u[0]||u[S+1]!==u[1])&&ue(u,u[0],u[1],u[2]),u.length&&t.push(u);}function ae(e){var t=[];return t.size=e.size,t.start=e.start,t.end=e.end,t}function le(e,t,r,o,n,i){for(var s=0;s<e.length;s++)se(e[s],t,r,o,n,i,!1);}function ue(e,t,r,o){e.push(t),e.push(r),e.push(o);}function he(e,t,r,o,n,i){var s=(i-t)/(o-t);return e.push(i),e.push(r+(n-r)*s),e.push(1),s}function ce(e,t,r,o,n,i){var s=(i-r)/(n-r);return e.push(t+(o-t)*s),e.push(i),e.push(1),s}function fe(e,t){for(var r=[],o=0;o<e.length;o++){var n,i=e[o],s=i.type;if("Point"===s||"MultiPoint"===s||"LineString"===s)n=pe(i.geometry,t);else if("MultiLineString"===s||"Polygon"===s){n=[];for(var a=0;a<i.geometry.length;a++)n.push(pe(i.geometry[a],t));}else if("MultiPolygon"===s)for(n=[],a=0;a<i.geometry.length;a++){for(var l=[],u=0;u<i.geometry[a].length;u++)l.push(pe(i.geometry[a][u],t));n.push(l);}r.push(U(i.id,s,n,i.tags));}return r}function pe(e,t){var r=[];r.size=e.size,void 0!==e.start&&(r.start=e.start,r.end=e.end);for(var o=0;o<e.length;o+=3)r.push(e[o]+t,e[o+1],e[o+2]);return r}function ge(e,t){if(e.transformed)return e;var r,o,n,i=1<<e.z,s=e.x,a=e.y;for(r=0;r<e.features.length;r++){var l=e.features[r],u=l.geometry,h=l.type;if(l.geometry=[],1===h)for(o=0;o<u.length;o+=2)l.geometry.push(de(u[o],u[o+1],t,i,s,a));else for(o=0;o<u.length;o++){var c=[];for(n=0;n<u[o].length;n+=2)c.push(de(u[o][n],u[o][n+1],t,i,s,a));l.geometry.push(c);}}return e.transformed=!0,e}function de(e,t,r,o,n,i){return [Math.round(r*(e*o-n)),Math.round(r*(t*o-i))]}function me(e,t,r,o,n){for(var i=t===n.maxZoom?0:n.tolerance/((1<<t)*n.extent),s={features:[],numPoints:0,numSimplified:0,numFeatures:0,source:null,x:r,y:o,z:t,transformed:!1,minX:2,minY:1,maxX:-1,maxY:0},a=0;a<e.length;a++){s.numFeatures++,ye(s,e[a],i,n);var l=e[a].minX,u=e[a].minY,h=e[a].maxX,c=e[a].maxY;l<s.minX&&(s.minX=l),u<s.minY&&(s.minY=u),h>s.maxX&&(s.maxX=h),c>s.maxY&&(s.maxY=c);}return s}function ye(e,t,r,o){var n=t.geometry,i=t.type,s=[];if("Point"===i||"MultiPoint"===i)for(var a=0;a<n.length;a+=3)s.push(n[a]),s.push(n[a+1]),e.numPoints++,e.numSimplified++;else if("LineString"===i)ve(s,n,e,r,!1,!1);else if("MultiLineString"===i||"Polygon"===i)for(a=0;a<n.length;a++)ve(s,n[a],e,r,"Polygon"===i,0===a);else if("MultiPolygon"===i)for(var l=0;l<n.length;l++){var u=n[l];for(a=0;a<u.length;a++)ve(s,u[a],e,r,!0,0===a);}if(s.length){var h=t.tags||null;if("LineString"===i&&o.lineMetrics){for(var c in h={},t.tags)h[c]=t.tags[c];h.mapbox_clip_start=n.start/n.size,h.mapbox_clip_end=n.end/n.size;}var f={geometry:s,type:"Polygon"===i||"MultiPolygon"===i?3:"LineString"===i||"MultiLineString"===i?2:1,tags:h};null!==t.id&&(f.id=t.id),e.features.push(f);}}function ve(e,t,r,o,n,i){var s=o*o;if(o>0&&t.size<(n?s:o))r.numPoints+=t.length/3;else {for(var a=[],l=0;l<t.length;l+=3)(0===o||t[l+2]>s)&&(r.numSimplified++,a.push(t[l]),a.push(t[l+1])),r.numPoints++;n&&function(e,t){for(var r=0,o=0,n=e.length,i=n-2;o<n;i=o,o+=2)r+=(e[o]-e[i])*(e[o+1]+e[i+1]);if(r>0===t)for(o=0,n=e.length;o<n/2;o+=2){var s=e[o],a=e[o+1];e[o]=e[n-2-o],e[o+1]=e[n-1-o],e[n-2-o]=s,e[n-1-o]=a;}}(a,i),e.push(a);}}function xe(e,t){var r=(t=this.options=function(e,t){for(var r in t)e[r]=t[r];return e}(Object.create(this.options),t)).debug;if(r&&console.time("preprocess data"),t.maxZoom<0||t.maxZoom>24)throw new Error("maxZoom should be in the 0-24 range");if(t.promoteId&&t.generateId)throw new Error("promoteId and generateId cannot be used together.");var o=function(e,t){var r=[];if("FeatureCollection"===e.type)for(var o=0;o<e.features.length;o++)H(r,e.features[o],t,o);else H(r,"Feature"===e.type?e:{geometry:e},t);return r}(e,t);this.tiles={},this.tileCoords=[],r&&(console.timeEnd("preprocess data"),console.log("index: maxZoom: %d, maxPoints: %d",t.indexMaxZoom,t.indexMaxPoints),console.time("generate tiles"),this.stats={},this.total=0),(o=function(e,t){var r=t.buffer/t.extent,o=e,n=ne(e,1,-1-r,r,0,-1,2,t),i=ne(e,1,1-r,2+r,0,-1,2,t);return (n||i)&&(o=ne(e,1,-r,1+r,0,-1,2,t)||[],n&&(o=fe(n,1).concat(o)),i&&(o=o.concat(fe(i,-1)))),o}(o,t)).length&&this.splitTile(o,0,0,0),r&&(o.length&&console.log("features: %d, points: %d",this.tiles[0].numFeatures,this.tiles[0].numPoints),console.timeEnd("generate tiles"),console.log("tiles generated:",this.total,JSON.stringify(this.stats)));}function we(e,t,r){return 32*((1<<e)*r+t)+e}function Se(e,t){const r=e.tileID.canonical;if(!this._geoJSONIndex)return t(null,null);const o=this._geoJSONIndex.getTile(r.z,r.x,r.y);if(!o)return t(null,null);const n=new c(o.features);let i=m(n);0===i.byteOffset&&i.byteLength===i.buffer.byteLength||(i=new Uint8Array(i)),t(null,{vectorTile:n,rawData:i.buffer});}xe.prototype.options={maxZoom:14,indexMaxZoom:5,indexMaxPoints:1e5,tolerance:3,extent:4096,buffer:64,lineMetrics:!1,promoteId:null,generateId:!1,debug:0},xe.prototype.splitTile=function(e,t,r,o,n,i,s){for(var a=[e,t,r,o],l=this.options,u=l.debug;a.length;){o=a.pop(),r=a.pop(),t=a.pop(),e=a.pop();var h=1<<t,c=we(t,r,o),f=this.tiles[c];if(!f&&(u>1&&console.time("creation"),f=this.tiles[c]=me(e,t,r,o,l),this.tileCoords.push({z:t,x:r,y:o}),u)){u>1&&(console.log("tile z%d-%d-%d (features: %d, points: %d, simplified: %d)",t,r,o,f.numFeatures,f.numPoints,f.numSimplified),console.timeEnd("creation"));var p="z"+t;this.stats[p]=(this.stats[p]||0)+1,this.total++;}if(f.source=e,n){if(t===l.maxZoom||t===n)continue;var g=1<<n-t;if(r!==Math.floor(i/g)||o!==Math.floor(s/g))continue}else if(t===l.indexMaxZoom||f.numPoints<=l.indexMaxPoints)continue;if(f.source=null,0!==e.length){u>1&&console.time("clipping");var d,m,y,v,x,w,S=.5*l.buffer/l.extent,M=.5-S,P=.5+S,b=1+S;d=m=y=v=null,x=ne(e,h,r-S,r+P,0,f.minX,f.maxX,l),w=ne(e,h,r+M,r+b,0,f.minX,f.maxX,l),e=null,x&&(d=ne(x,h,o-S,o+P,1,f.minY,f.maxY,l),m=ne(x,h,o+M,o+b,1,f.minY,f.maxY,l),x=null),w&&(y=ne(w,h,o-S,o+P,1,f.minY,f.maxY,l),v=ne(w,h,o+M,o+b,1,f.minY,f.maxY,l),w=null),u>1&&console.timeEnd("clipping"),a.push(d||[],t+1,2*r,2*o),a.push(m||[],t+1,2*r,2*o+1),a.push(y||[],t+1,2*r+1,2*o),a.push(v||[],t+1,2*r+1,2*o+1);}}},xe.prototype.getTile=function(e,t,r){var o=this.options,n=o.extent,i=o.debug;if(e<0||e>24)return null;var s=1<<e,a=we(e,t=(t%s+s)%s,r);if(this.tiles[a])return ge(this.tiles[a],n);i>1&&console.log("drilling down to z%d-%d-%d",e,t,r);for(var l,u=e,h=t,c=r;!l&&u>0;)u--,h=Math.floor(h/2),c=Math.floor(c/2),l=this.tiles[we(u,h,c)];return l&&l.source?(i>1&&console.log("found parent tile z%d-%d-%d",u,h,c),i>1&&console.time("drilling down"),this.splitTile(l.source,u,h,c,e,t,r),i>1&&console.timeEnd("drilling down"),this.tiles[a]?ge(this.tiles[a],n):null):null};class Me extends e.VectorTileWorkerSource{constructor(e,t,r,o,n){super(e,t,r,o,Se),n&&(this.loadGeoJSON=n);}loadData(t,r){const o=t&&t.request,n=o&&o.collectResourceTiming;this.loadGeoJSON(t,((i,a)=>{if(i||!a)return r(i);if("object"!=typeof a)return r(new Error(`Input data given to '${t.source}' is not a valid GeoJSON object.`));{s(a,!0);try{if(t.filter){const r=e.createExpression(t.filter,{type:"boolean","property-type":"data-driven",overridable:!1,transition:!1});if("error"===r.result)throw new Error(r.value.map((e=>`${e.key}: ${e.message}`)).join(", "));const o=a.features.filter((e=>r.value.evaluate({zoom:0},e)));a={type:"FeatureCollection",features:o};}this._geoJSONIndex=t.cluster?new G(function({superclusterOptions:t,clusterProperties:r}){if(!r||!t)return t;const o={},n={},i={accumulated:null,zoom:0},s={properties:null},a=Object.keys(r);for(const t of a){const[i,s]=r[t],a=e.createExpression(s),l=e.createExpression("string"==typeof i?[i,["accumulated"],["get",t]]:i);o[t]=a.value,n[t]=l.value;}return t.map=e=>{s.properties=e;const t={};for(const e of a)t[e]=o[e].evaluate(i,s);return t},t.reduce=(e,t)=>{s.properties=t;for(const t of a)i.accumulated=e[t],e[t]=n[t].evaluate(i,s);},t}(t)).load(a.features):function(e,t){return new xe(e,t)}(a,t.geojsonVtOptions);}catch(i){return r(i)}this.loaded={};const l={};if(n){const r=e.getPerformanceMeasurement(o);r&&(l.resourceTiming={},l.resourceTiming[t.source]=JSON.parse(JSON.stringify(r)));}r(null,l);}}));}reloadTile(e,t){const r=this.loaded;return r&&r[e.uid]?super.reloadTile(e,t):this.loadTile(e,t)}loadGeoJSON(t,r){if(t.request)e.getJSON(t.request,r);else {if("string"!=typeof t.data)return r(new Error(`Input data given to '${t.source}' is not a valid GeoJSON object.`));try{return r(null,JSON.parse(t.data))}catch(e){return r(new Error(`Input data given to '${t.source}' is not a valid GeoJSON object.`))}}}getClusterExpansionZoom(e,t){try{t(null,this._geoJSONIndex.getClusterExpansionZoom(e.clusterId));}catch(e){t(e);}}getClusterChildren(e,t){try{t(null,this._geoJSONIndex.getChildren(e.clusterId));}catch(e){t(e);}}getClusterLeaves(e,t){try{t(null,this._geoJSONIndex.getLeaves(e.clusterId,e.limit,e.offset));}catch(e){t(e);}}}class Pe{constructor(t){this.self=t,this.actor=new e.Actor(t,this),this.layerIndexes={},this.availableImages={},this.isSpriteLoaded=!1,this.workerSourceTypes={vector:e.VectorTileWorkerSource,geojson:Me},this.workerSources={},this.demWorkerSources={},this.self.registerWorkerSource=(e,t)=>{if(this.workerSourceTypes[e])throw new Error(`Worker source with name "${e}" already registered.`);this.workerSourceTypes[e]=t;},this.self.registerRTLTextPlugin=t=>{if(e.plugin.isParsed())throw new Error("RTL text plugin already registered.");e.plugin.applyArabicShaping=t.applyArabicShaping,e.plugin.processBidirectionalText=t.processBidirectionalText,e.plugin.processStyledBidirectionalText=t.processStyledBidirectionalText;};}checkIfReady(e,t,r){r();}setReferrer(e,t){this.referrer=t;}spriteLoaded(t,r){this.isSpriteLoaded=r;for(const o in this.workerSources[t]){const n=this.workerSources[t][o];for(const t in n)n[t]instanceof e.VectorTileWorkerSource&&(n[t].isSpriteLoaded=r,n[t].fire(new e.Event("isSpriteLoaded")));}}setImages(e,t,r){this.availableImages[e]=t;for(const r in this.workerSources[e]){const o=this.workerSources[e][r];for(const e in o)o[e].availableImages=t;}r();}enableTerrain(e,t,r){this.terrain=t,r();}setLayers(e,t,r){this.getLayerIndex(e).replace(t),r();}updateLayers(e,t,r){this.getLayerIndex(e).update(t.layers,t.removedIds),r();}loadTile(t,r,o){const n=this.enableTerrain?e.extend({enableTerrain:this.terrain},r):r;this.getWorkerSource(t,r.type,r.source).loadTile(n,o);}loadDEMTile(t,r,o){const n=this.enableTerrain?e.extend({buildQuadTree:this.terrain},r):r;this.getDEMWorkerSource(t,r.source).loadTile(n,o);}reloadTile(t,r,o){const n=this.enableTerrain?e.extend({enableTerrain:this.terrain},r):r;this.getWorkerSource(t,r.type,r.source).reloadTile(n,o);}abortTile(e,t,r){this.getWorkerSource(e,t.type,t.source).abortTile(t,r);}removeTile(e,t,r){this.getWorkerSource(e,t.type,t.source).removeTile(t,r);}removeSource(e,t,r){if(!this.workerSources[e]||!this.workerSources[e][t.type]||!this.workerSources[e][t.type][t.source])return;const o=this.workerSources[e][t.type][t.source];delete this.workerSources[e][t.type][t.source],void 0!==o.removeSource?o.removeSource(t,r):r();}loadWorkerSource(e,t,r){try{this.self.importScripts(t.url),r();}catch(e){r(e.toString());}}syncRTLPluginState(t,r,o){try{e.plugin.setState(r);const t=e.plugin.getPluginURL();if(e.plugin.isLoaded()&&!e.plugin.isParsed()&&null!=t){this.self.importScripts(t);const r=e.plugin.isParsed();o(r?void 0:new Error(`RTL Text Plugin failed to import scripts from ${t}`),r);}}catch(e){o(e.toString());}}getAvailableImages(e){let t=this.availableImages[e];return t||(t=[]),t}getLayerIndex(e){let t=this.layerIndexes[e];return t||(t=this.layerIndexes[e]=new o),t}getWorkerSource(e,t,r){return this.workerSources[e]||(this.workerSources[e]={}),this.workerSources[e][t]||(this.workerSources[e][t]={}),this.workerSources[e][t][r]||(this.workerSources[e][t][r]=new this.workerSourceTypes[t]({send:(t,r,o,n,i,s)=>{this.actor.send(t,r,o,e,i,s);},scheduler:this.actor.scheduler},this.getLayerIndex(e),this.getAvailableImages(e),this.isSpriteLoaded)),this.workerSources[e][t][r]}getDEMWorkerSource(e,t){return this.demWorkerSources[e]||(this.demWorkerSources[e]={}),this.demWorkerSources[e][t]||(this.demWorkerSources[e][t]=new i),this.demWorkerSources[e][t]}enforceCacheSizeLimit(t,r){e.enforceCacheSizeLimit(r);}getWorkerPerformanceMetrics(e,t,r){r(void 0,void 0);}}return "undefined"!=typeof WorkerGlobalScope&&"undefined"!=typeof self&&self instanceof WorkerGlobalScope&&(self.worker=new Pe(self)),Pe}));


  //

  var mapboxgl$1 = mapboxgl;

  return mapboxgl$1;

  })));

  });

  /**
   * Global Districtr color map for districts.
   *
   * We might consider using fewer colors and just allowing repetitions,
   * since a human being can only hold so many colors in their head at
   * one time.
   */
  var _colorScheme = [{
    color: "#0099cd",
    name: "Alvey",
    capacity: 807,
    id: "es1"
  }, {
    color: "#ffca5d",
    name: "Antietam",
    capacity: 807,
    id: "es2"
  }, {
    color: "#00cd99",
    name: "Ashland",
    capacity: 807,
    id: "es3"
  }, {
    color: "#99cd00",
    name: "Bel Air",
    capacity: 807,
    id: "es4"
  }, {
    color: "#cd0099",
    name: "Belmont",
    capacity: 807,
    id: "es5"
  }, {
    color: "#9900cd",
    name: "Bennett",
    capacity: 807,
    id: "es6"
  }, {
    color: "#8dd3c7",
    name: "Bristow Run",
    capacity: 807,
    id: "es7"
  }, {
    color: "#bebada",
    name: "Buckland Mills",
    capacity: 807,
    id: "es8"
  }, {
    color: "#fb8072",
    name: "Cedar Point",
    capacity: 807,
    id: "es9"
  }, {
    color: "#80b1d3",
    name: "Coles",
    capacity: 807,
    id: "es10"
  }, {
    color: "#fdb462",
    name: "Covington-Harper",
    capacity: 807,
    id: "es11"
  }, {
    color: "#b3de69",
    name: "Dale City",
    capacity: 807,
    id: "es12"
  }, {
    color: "#fccde5",
    name: "Dumfries",
    capacity: 807,
    id: "es13"
  }, {
    color: "#d9d9d9",
    name: "Ellis",
    capacity: 807,
    id: "es14"
  }, {
    color: "#bc80bd",
    name: "Enterprise",
    capacity: 807,
    id: "es15"
  }, {
    color: "#ccebc5",
    name: "Featherstone",
    capacity: 807,
    id: "es16"
  }, {
    color: "#ffed6f",
    name: "Fitzgerald",
    capacity: 807,
    id: "es17"
  }, {
    color: "#ffffb3",
    name: "Glenkirk",
    capacity: 807,
    id: "es18"
  }, {
    color: "#a6cee3",
    name: "Gravely",
    capacity: 807,
    id: "es19"
  }, {
    color: "#1f78b4",
    name: "Haymarket",
    capacity: 807,
    id: "es20"
  }, {
    color: "#b2df8a",
    name: "Henderson",
    capacity: 807,
    id: "es21"
  }, {
    color: "#33a02c",
    name: "Jenkins",
    capacity: 807,
    id: "es22"
  }, {
    color: "#fb9a99",
    name: "Kerrydale",
    capacity: 807,
    id: "es23"
  }, {
    color: "#e31a1c",
    name: "Kilby",
    capacity: 807,
    id: "es24"
  }, {
    color: "#fdbf6f",
    name: "King",
    capacity: 807,
    id: "es25"
  }, {
    color: "#ff7f00",
    name: "Lake Ridge",
    capacity: 807,
    id: "es26"
  }, {
    color: "#cab2d6",
    name: "Leesylvania",
    capacity: 807,
    id: "es27"
  }, {
    color: "#6a3d9a",
    name: "Loch Lomond",
    capacity: 807,
    id: "es28"
  }, {
    color: "#b15928",
    name: "Marshall",
    capacity: 807,
    id: "es29"
  }, {
    color: "#64ffda",
    name: "Marumsco Hills",
    capacity: 807,
    id: "es30"
  }, {
    color: "#00B8D4",
    name: "McAuliffe",
    capacity: 807,
    id: "es31"
  }, {
    color: "#A1887F",
    name: "Minnieville",
    capacity: 807,
    id: "es32"
  }, {
    color: "#76FF03",
    name: "Montclair",
    capacity: 807,
    id: "es33"
  }, {
    color: "#DCE775",
    name: "Mountain View",
    capacity: 807,
    id: "es34"
  }, {
    color: "#B388FF",
    name: "Mullen",
    capacity: 807,
    id: "es35"
  }, {
    color: "#FF80AB",
    name: "Neabsco",
    capacity: 807,
    id: "es36"
  }, {
    color: "#D81B60",
    name: "Nokesville School, The",
    capacity: 807,
    id: "es37"
  }, {
    color: "#26A69A",
    name: "Occoquan",
    capacity: 807,
    id: "es38"
  }, {
    color: "#FFEA00",
    name: "Old Bridge",
    capacity: 807,
    id: "es39"
  }, {
    color: "#ffff99",
    name: "Rosa Parks",
    capacity: 807,
    id: "es40"
  }, {
    color: "#6200EA",
    name: "Pattie",
    capacity: 807,
    id: "es41"
  }, {
    color: "#62EA00",
    name: "Penn",
    capacity: 807,
    id: "es42"
  }, {
    color: "#EA6200",
    name: "Piney Branch",
    capacity: 807,
    id: "es43"
  }, {
    color: "#EA0062",
    name: "Potomac View",
    capacity: 807,
    id: "es44"
  }, {
    color: "#88B3FF",
    name: "River Oaks",
    capacity: 807,
    id: "es45"
  }, {
    color: "#FF88B3",
    name: "Rockledge",
    capacity: 807,
    id: "es46"
  }, {
    color: "#99ffff",
    name: "Signal Hill",
    capacity: 807,
    id: "es47"
  }, {
    color: "#ff99ff",
    name: "Sinclair",
    capacity: 807,
    id: "es48"
  }, {
    color: "#123456",
    name: "Springwoods",
    capacity: 807,
    id: "es49"
  }, {
    color: "#abcdef",
    name: "Sudley",
    capacity: 807,
    id: "es50"
  }, {
    color: "#123abc",
    name: "Swans Creek",
    capacity: 807,
    id: "es51"
  }, {
    color: "#abc123",
    name: "Triangle",
    capacity: 807,
    id: "es52"
  }, {
    color: "#B800D4",
    name: "Tyler",
    capacity: 807,
    id: "es53"
  }, {
    color: "#D4B800",
    name: "Vaughan",
    capacity: 807,
    id: "es54"
  }, {
    color: "#D400B8",
    name: "Victory",
    capacity: 807,
    id: "es55"
  }, {
    color: "#887F1A",
    name: "West Gate",
    capacity: 807,
    id: "es56"
  }, {
    color: "#a1ce31",
    name: "Westridge",
    capacity: 807,
    id: "es57"
  }, {
    color: "#0f0f0f",
    name: "Mary Williams",
    capacity: 807,
    id: "es58"
  }, {
    color: "#f0f0f0",
    name: "Kyle Wilson",
    capacity: 807,
    id: "es59"
  }, {
    color: "#987654",
    name: "T. Clay Wood",
    capacity: 807,
    id: "es60"
  }, {
    color: "#456789",
    name: "Yorkshire",
    capacity: 807,
    id: "es61"
  }, {
    color: "#cd1a2b",
    name: "Chris Yung",
    capacity: 807,
    id: "es62"
  }, {
    color: "#f8c5a2",
    name: "Rosemount Lewis",
    capacity: 807,
    id: "es63"
  }];

  _colorScheme.push.apply(_colorScheme, _toConsumableArray(_colorScheme.map(function (hex) {
    return changeColorLuminance(hex, -0.3);
  })));
  /**
   * District color scheme.
   */


  var colorScheme = _colorScheme;
  /**
   * Darker colors for when the user hovers over assigned units.
   */

  var hoverColorScheme = colorScheme.map(function (hex) {
    return changeColorLuminance(hex, -0.3);
  });
  /**
   * Adjusts the color luminance. Use it for shading colors.
   *
   * I got this from stack overflow to find shaded versions of the
   * ColorBrewer colors.
   *
   * @param {string} hex
   * @param {number} lum
   */

  function changeColorLuminance(hex, lum) {
    // validate hex string
    hex = String(hex).replace(/[^0-9a-f]/gi, "");

    if (hex.length < 6) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }

    lum = lum || 0; // convert to decimal and change luminosity

    var rgb = "#",
        c,
        i;

    for (i = 0; i < 3; i++) {
      c = parseInt(hex.substr(i * 2, 2), 16);
      c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16);
      rgb += ("00" + c).substr(c.length);
    }

    return rgb;
  }
  /**
   * Global district color scheme, with both the normal hex and the hoverHex
   * variations included.
   */

  var districtColors = colorScheme.map(function (hex, i) {
    return {
      id: i,
      name: hex,
      hex: hex,
      hoverHex: hoverColorScheme[i]
    };
  }); // Right now I'm assuming colors are numbered, and that -1 or null means
  // a block hasn't been colored. I don't think this is a good system.

  function getUnitColorProperty(parts) {
    var unitColorStyle = ["match", ["feature-state", "color"]].concat(_toConsumableArray(parts.map(function (part) {
      return [part.id, part.color];
    }).reduce(function (list, pair) {
      return [].concat(_toConsumableArray(list), _toConsumableArray(pair));
    })), ["rgba(0, 0, 0, 0)"]);
    var hoveredUnitColorStyle = ["match", ["feature-state", "color"]].concat(_toConsumableArray(parts.map(function (part) {
      return [part.id, part.hoverColor];
    }).reduce(function (list, pair) {
      return [].concat(_toConsumableArray(list), _toConsumableArray(pair));
    })), ["#aaaaaa"]);
    var standardColor = ["case", ["boolean", ["feature-state", "hover"], false], hoveredUnitColorStyle, unitColorStyle];
    var blendWithHoverOption = ["case", ["boolean", ["feature-state", "hover"], false], ["feature-state", "blendHoverColor"], ["feature-state", "blendColor"]];
    var unitColorProperty = ["case", ["==", ["feature-state", "useBlendColor"], true], blendWithHoverOption, standardColor];
    return unitColorProperty;
  }
  function blendColors(colors) {
    if (!colors || !Array.isArray(colors)) {
      return colors;
    }

    colors = colors.filter(function (c) {
      return c !== null;
    });

    if (!colors.length) {
      return null;
    } else if (colors.length <= 1) {
      return colors[0] * 1;
    } else {
      var r = 0,
          g = 0,
          b = 0;
      colors.forEach(function (color) {
        if (typeof color === 'number') {
          color = districtColors[color].hex;
        }

        r += parseInt("0x" + color.substring(1, 3));
        g += parseInt("0x" + color.substring(3, 5));
        b += parseInt("0x" + color.substring(5));
      });
      r = Math.round(r / colors.length).toString(16);
      g = Math.round(g / colors.length).toString(16);
      b = Math.round(b / colors.length).toString(16);

      if (r.length === 1) {
        r = '0' + r;
      }

      if (g.length === 1) {
        g = '0' + g;
      }

      if (b.length === 1) {
        b = '0' + b;
      }

      return '#' + [r, g, b].join('');
    }
  }
  /**
   * Mapbox color rule for the units layer.
   */

  var unitBordersPaintProperty = {
    "line-color": "#777777",
    "line-width": ["interpolate", ["linear"], ["zoom"], 0, 0, 7, 1],
    "line-opacity": 0.3
  };
  _objectSpread2(_objectSpread2({}, unitBordersPaintProperty), {}, {
    "line-color": ["case", ["==", ["feature-state", "color"], null], "#ff4f49", unitBordersPaintProperty["line-color"]],
    "line-width": ["case", ["==", ["feature-state", "color"], null], 4, 1],
    "line-opacity": ["case", ["==", ["feature-state", "color"], null], 0.8, 0.3]
  });

  // while addBelowSymbols gives the right look on the "light" basemap.

  /**
   * Add the layer to the map below the first label layer (e.g. street names).
   * @param {mapboxgl.Map} map
   * @param {Layer} layer
   */

  function addBelowLabels(map, layer) {
    var layers = map.getStyle().layers;
    var firstSymbolId = getFirstLabelId(layers);
    map.addLayer(layer, firstSymbolId);
  }
  function addBelowSymbols(map, layer) {
    var layers = map.getStyle().layers;
    var firstSymbolId = getFirstSymbolId(layers);
    map.addLayer(layer, firstSymbolId);
  }
  /**
   * @param {Object[]} layers list of layers from the Mapbox map's style
   * @returns {string} id of the first id with "label" in the name
   */

  function getFirstLabelId(layers) {
    for (var i = 0; i < layers.length; i++) {
      if (layers[i].id.includes("label")) {
        return layers[i].id;
      }
    }
  }

  function getFirstSymbolId(layers) {
    for (var i = 0; i < layers.length; i++) {
      if (layers[i].type === "symbol") {
        return layers[i].id;
      }
    }
  }
  /** A layer on a Mapbox map. */


  var Layer = /*#__PURE__*/function () {
    /**
     * @param {mapboxgl.Map} map to add the layer to
     * @param {Object} layer a Layer object obeying the Mapbox style specification
     * @param {function} [adder] a function (map, layer) -> void that adds the layer
     *  to the map.
     */
    function Layer(map, layer, adder) {
      _classCallCheck(this, Layer);

      this.map = map;
      this.id = layer.id;
      this.sourceId = isString(layer.source) ? layer.source : layer.id;
      this.type = layer.type;
      this.sourceLayer = layer["source-layer"];
      this.background = layer.background;

      if (adder) {
        adder(map, layer);
      } else {
        map.addLayer(layer);
      }

      this.getFeature = this.getFeature.bind(this);
    }

    _createClass(Layer, [{
      key: "setOpacity",
      value: function setOpacity(opacity, isText) {
        this.setPaintProperty("".concat(isText ? "text" : this.type.replace("symbol", "icon"), "-opacity"), opacity);

        if (window.mapslide) {
          document.getElementsByClassName("mapboxgl-compare")[0].style.display = opacity ? "block" : "none";
          window.mapslide.setSlider(opacity ? Math.round(window.innerWidth * 0.4) : 10000);
        }
      }
    }, {
      key: "setColor",
      value: function setColor(color) {
        this.setPaintProperty("".concat(this.type, "-color"), color);
      }
    }, {
      key: "getColor",
      value: function getColor() {
        return this.getPaintProperty("".concat(this.type, "-color"));
      }
    }, {
      key: "setPaintProperties",
      value: function setPaintProperties(properties) {
        for (var name in properties) {
          this.setPaintProperty(name, properties[name]);
        }
      }
    }, {
      key: "setFeatureState",
      value: function setFeatureState(featureId, state) {
        this.map.setFeatureState({
          source: this.sourceId,
          sourceLayer: this.sourceLayer,
          id: featureId
        }, state);
      }
    }, {
      key: "setCountyState",
      value: function setCountyState(fips, countyProp, setState, filter, undoInfo, tallyListeners) {
        var _this = this;

        var seenFeatures = new Set(),
            filterStrings = ["all", ["has", countyProp]];

        if (["COUNTY", "CTYNAME", "CNTYNAME", "COUNTYFP", "COUNTYFP10", "cnty_nm", "county_nam", "locality"].includes(countyProp)) {
          filterStrings.push(["==", ["get", countyProp], fips]);
        } else if (typeof fips === 'number') {
          // 35059 - 35060 * 10^6 (for numeric ids)
          filterStrings.push([">=", ["get", countyProp], fips * Math.pow(10, 6)]);
          filterStrings.push(["<", ["get", countyProp], (fips + 1) * Math.pow(10, 6)]);
        } else {
          filterStrings.push([">=", ["get", countyProp], fips]);
          filterStrings.push(["<", ["get", countyProp], isNaN(fips * 1) || String(fips)[0] === "0" || countyProp.toLowerCase().includes("name") ? fips + "z" : String(Number(fips) + 1)]);
        }

        this.map.querySourceFeatures(this.sourceId, {
          sourceLayer: this.sourceLayer,
          filter: filterStrings
        }).forEach(function (feature) {
          if (!seenFeatures.has(feature.id)) {
            seenFeatures.add(feature.id);
            feature.state = _this.getFeatureState(feature.id);

            if (filter(feature)) {
              undoInfo[feature.id] = {
                properties: feature.properties,
                color: feature.state.color
              };
              tallyListeners.forEach(function (listener) {
                listener(feature, setState.color);
              });
              var finalColor;

              if (setState.multicolor && (feature.state.color || feature.state.color === 0)) {
                if (feature.state.color && feature.state.color.length) {
                  finalColor = feature.state.color;

                  if (!feature.state.color.includes(setState.color)) {
                    finalColor.push(setState.color);
                  }
                } else if (feature.state.color !== setState.color && (feature.state.color || feature.state.color === 0)) {
                  finalColor = [feature.state.color, setState.color];
                } else {
                  finalColor = setState.color;
                } // else you already have this color

              } else {
                finalColor = setState.color;
              }

              var useBlendColor = Array.isArray(finalColor) && finalColor.length > 1,
                  blendColor = Array.isArray(finalColor) ? blendColors(finalColor) : finalColor;

              _this.setFeatureState(feature.id, _objectSpread2(_objectSpread2({}, feature.state), {}, {
                color: finalColor,
                useBlendColor: useBlendColor,
                blendColor: blendColor,
                blendHoverColor: useBlendColor ? changeColorLuminance(blendColor, -0.3) : "#ccc"
              }));

              feature.state.color = finalColor;
              feature.state.useBlendColor = useBlendColor;
              feature.state.blendColor = blendColor;
            }
          }
        });
      }
    }, {
      key: "setPaintProperty",
      value: function setPaintProperty(name, value) {
        this.map.setPaintProperty(this.id, name, value);
      }
    }, {
      key: "getPaintProperty",
      value: function getPaintProperty(name) {
        return this.map.getPaintProperty(this.id, name);
      }
    }, {
      key: "getFeatureState",
      value: function getFeatureState(featureId) {
        return this.map.getFeatureState({
          source: this.sourceId,
          sourceLayer: this.sourceLayer,
          id: featureId
        });
      }
    }, {
      key: "getFeature",
      value: function getFeature(featureId) {
        var features = this.map.querySourceFeatures(this.sourceId, {
          sourceLayer: this.sourceLayer,
          filter: ["==", ["id"], featureId]
        });
        return features[0];
      }
    }, {
      key: "queryRenderedFeatures",
      value: function queryRenderedFeatures() {
        return this.map.queryRenderedFeatures(null, {
          layers: [this.id]
        });
      }
    }, {
      key: "querySourceFeatures",
      value: function querySourceFeatures() {
        return this.map.querySourceFeatures(this.sourceId, {
          sourceLayer: this.sourceLayer
        });
      }
    }, {
      key: "getAssignment",
      value: function getAssignment(featureId) {
        return this.getFeatureState(featureId).color;
      }
    }, {
      key: "setAssignment",
      value: function setAssignment(feature, part) {
        // used when loading
        var useBlendColor = false;

        if (Array.isArray(part)) {
          if (part.length === 1) {
            part = part[0];
          } else {
            useBlendColor = true;
          }
        }

        this.setFeatureState(feature.id, _objectSpread2(_objectSpread2({}, feature.state), {}, {
          color: part,
          useBlendColor: useBlendColor,
          blendColor: useBlendColor ? blendColors(part) : null
        }));
      }
    }, {
      key: "on",
      value: function on(type) {
        var _this$map;

        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        (_this$map = this.map).on.apply(_this$map, [type, this.id].concat(args));
      }
    }, {
      key: "off",
      value: function off(type) {
        var _this$map2;

        for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }

        (_this$map2 = this.map).off.apply(_this$map2, [type, this.id].concat(args));
      }
    }, {
      key: "untilSourceLoaded",
      value: function untilSourceLoaded(callback) {
        var _this2 = this;

        if (this.map.isSourceLoaded(this.sourceId)) {
          return callback();
        }

        var handler = function handler() {
          return callback(function () {
            return _this2.map.off("sourcedata", handler);
          });
        };

        this.map.on("sourcedata", handler);
      }
    }]);

    return Layer;
  }();

  mapboxGl.accessToken = "pk.eyJ1IjoiZGlzdHJpY3RyIiwiYSI6ImNqbjUzMTE5ZTBmcXgzcG81ZHBwMnFsOXYifQ.8HRRLKHEJA0AismGk2SX2g";
  var MapState =
  /**
   * @constructor
   * @description Instantiates MapState, which holds the state for the current map.
   * @param {String} mapContainer Container element for the map.
   * @param {Object} options Map options.
   * @param {String} mapStyle Map style.
   */
  function MapState(mapContainer, options, mapStyle) {
    _classCallCheck(this, MapState);

    this.map = new mapboxGl.Map(_objectSpread2({
      container: mapContainer,
      style: mapStyle,
      attributionControl: false,
      center: [-86.0, 37.83],
      zoom: 3,
      pitchWithRotate: false,
      dragRotate: false,
      preserveDrawingBuffer: true,
      dragPan: true,
      touchZoomRotate: true
    }, options));
    this.nav = new mapboxGl.NavigationControl();
    this.map.addControl(this.nav, "top-left");
    this.mapboxgl = mapboxGl;
  };
  /**
   * @dsecription Adds base units to the map.
   * @param {mapboxgl.Map} map MapboxGL Map instance.
   * @param {Array} parts Array of Parts to be added to the map.
   * @param {Object} tileset MapboxGL tileset specification.
   * @param {Function} layerAdder How we add layers to the map.
   * @returns {Object} Deconstructible object containing base units and borders.
   */

  function addBaseUnits(map, parts, tileset, layerAdder) {
    var units = new Layer(map, {
      id: tileset.sourceLayer,
      source: tileset.sourceLayer,
      "source-layer": tileset.sourceLayer,
      type: "fill",
      paint: {
        "fill-color": getUnitColorProperty(parts),
        "fill-opacity": 0.8
      }
    }, layerAdder);
    var unitsBorders = new Layer(map, {
      id: tileset.sourceLayer + "-borders",
      type: "line",
      source: tileset.sourceLayer,
      "source-layer": tileset.sourceLayer,
      paint: unitBordersPaintProperty
    }, layerAdder);
    return {
      units: units,
      unitsBorders: unitsBorders
    };
  }
  /**
   * @description Adds a Points layer to the map.
   * @param {mapboxgl.Map} map MapboxGL Map instance.
   * @param {Object} tileset districtr-interpretable tileset specification.
   * @param {Function} layerAdder How do we add stuff?
   * @returns {Layer} districtr Layer object.
   */


  function addPoints(map, tileset, layerAdder) {
    if (!tileset) {
      return null;
    }

    return new Layer(map, {
      id: tileset.sourceLayer + "-points",
      type: "circle",
      source: tileset.sourceLayer,
      "source-layer": tileset.sourceLayer,
      paint: {
        "circle-opacity": 0
      }
    }, layerAdder);
  }
  /**
   * @description Adds precinct layers to the map.
   * @param {mapboxgl.Map} map MapboxGL Map instance.
   * @param {Object[]} tilesets districtr-interpretable tileset specifications.
   * @param {String} stateName How do we add stuff?
   * @returns {[Object, Object]} Pair of Layer objects corresponding to precincts.
   */


  function addPrecincts(map, tilesets, stateName) {
    var stateHasCOI2 = spatial_abilities(stateName).coi2,
        tilesetHasCOI2 = tilesets[0].coi2,
        oldTileset,
        newTileset,
        oldPrecincts,
        newPrecincts; // TODO: figure out a better way to handle these exceptions.

    if (stateHasCOI2 && tilesetHasCOI2) {
      oldTileset = tilesets.find(function (t) {
        return t.source.url.includes("nc_precincts");
      });
      newTileset = tilesets.find(function (t) {
        return t.source.url.includes("norcar2_precincts");
      });
      oldPrecincts = new Layer(map, {
        id: "extra-precincts",
        type: "fill",
        source: oldTileset.sourceLayer,
        "source-layer": oldTileset.sourceLayer,
        paint: {
          "fill-opacity": 0
        }
      });
      newPrecincts = new Layer(map, {
        id: "extra-precincts_new",
        type: "fill",
        source: newTileset.sourceLayer,
        "source-layer": newTileset.sourceLayer,
        paint: {
          "fill-opacity": 0
        }
      });
    }

    return {
      oldPrecincts: oldPrecincts,
      newPrecincts: newPrecincts
    };
  }
  /**
   * @description Adds Census tracts (or block groups, or precincts) as a background layer.
   * @param {mapboxgl.Map} map MapboxGL Map instance.
   * @param {Object[]} tilesets Array of MapboxGL tileset specifications.
   * @param {String} stateName Name of the state we're redistricting in.
   * @returns {Layer|null} Null if the exception isn't included, or a Layer instance.
   */


  function addTracts(map, tilesets, stateName) {
    // Create a list of exceptions which require the loading of block group tilesets
    // rather than precinct or tract tilesets.
    var exceptions = ["sacramento", "ca_sonoma", "ca_pasadena", "ca_santabarbara", "ca_goleta", "ca_marin", "ca_kings", "ca_merced", "ca_fresno", "ca_nevada", "ca_marina", "ca_arroyo", "ca_sm_county", "ca_sanbenito", "ca_cvista", "ca_bellflower", "ca_camarillo", "ca_fresno_ci", "ca_campbell", "ca_chino", "ca_fremont", "lake_el", "ca_vallejo", "ca_buellton", "ca_oceano", "ca_grover", "buenapark", "ca_stockton", "halfmoon", "ca_carlsbad", "ca_richmond", "elcajon", "laverne", "encinitas", "lodi", "pomona", "sunnyvale", "glendaleaz", "yuma", "yuma_awc", "ca_glendora", "san_dimas", "ca_santabarbara", "ca_marin", "ca_kings", "ca_merced", "ca_fresno", "ca_sm_county", "ca_sanbenito", "laverne", "ca_glendora", "san_dimas", "anaheim", "arcadia", "la_mirada", "placentia", "lakewood", "san_bruno", "ca_santabarbara", "ca_marin", "ca_kings", "ca_merced", "ca_fresno", "ca_sm_county", "ca_sanbenito", "laverne", "ca_poway", "ca_torrance", "29palms", "navajoco", "yuba_city", "buena_park"],
        isException = exceptions.includes(stateName),
        hasCountyFilter = spatial_abilities(stateName).county_filter,
        tileType,
        tileset; // If this state isn't one of the exceptions or doesn't have a county filter,
    // return null immediately.

    if (!(isException || hasCountyFilter)) return null; // Otherwise, create a new Layer.

    tileType = isException ? "blockgroups" : "precincts";
    tileset = tilesets.find(function (t) {
      return t.source.url.includes(tileType);
    });
    return new Layer(map, {
      id: "extra-tracts",
      type: "fill",
      source: tileset.sourceLayer,
      "source-layer": tileset.sourceLayer,
      paint: {
        "fill-opacity": 0
      }
    });
  }
  /**
   * @description Adds a county layer to the map.
   * @param {mapboxgl.Map} map MapboxGL Map instance.
   * @param {Object[]} tileset Array of MapboxGL tileset specifications.
   * @param {Function} layerAdder How we add layers to the map.
   * @param {String} placeID Identifier for the given place.
   * @returns {Layer} A districtr Layer instance.
   */


  function addCounties(map, tileset, layerAdder, placeID) {
    map.addSource(tileset.sourceLayer, tileset.source);
    return new Layer(map, {
      id: "county-hover",
      type: "fill",
      source: tileset.sourceLayer,
      "source-layer": tileset.sourceLayer,
      paint: {
        "fill-opacity": ["case", ["boolean", ["feature-state", "hover"], false], 0.6, 0],
        "fill-color": "#aaa"
      },
      filter: ["==", ["get", "STATEFP"], String(stateNameToFips[placeID.toLowerCase().replace("2020", "").replace("_bg", "").replace("wisco2019acs", "wisconsin").replace("mnacs", "minnesota")])]
    }, layerAdder);
  }
  /**
   * @description Adds block groups units to areas which require them.
   * @param {mapboxgl.Map} map MapboxGL map object.
   * @param {Object} tileset MapboxGL tileset specification.
   * @param {Function} layerAdder How to aadd layers to the map.
   */


  function addBGs(map, tileset, layerAdder, borderID) {
    // Manage exceptions.
    var exceptions = ["yuma", "nwaz", "seaz", "maricopa", "phoenix", "nyc_popdemo"];
    if (!exceptions.includes(borderID)) return null; // Otherwise, create a block groups layer.

    return new Layer(map, {
      id: "extra-bgs",
      type: "fill",
      source: tileset.sourceLayer,
      "source-layer": tileset.sourceLayer,
      background: true,
      paint: {
        "fill-opacity": 0
      }
    });
  }
  /**
   * @description Adds COI units to the map.
   * @param {mapboxgl.Map} map MapboxGL Map object.
   * @param {String} stateName Name of the state we're redistricting in.
   * @returns {Object} A deconstructible pair of cluster units and COI units.
   */


  function addCOIUnits(map, stateName) {
    // For this new standard, we're defining the COI units in `utils.js` rather
    // than handling them here.
    var coi = spatial_abilities(stateName).coi; // If we don't load COIs, do nothing; otherwise, load the units.

    if (!coi) {
      return {
        clusterUnits: null,
        clusterUnitsLines: null,
        coiUnits: null,
        coiUNitsLines: null
      };
    } // Add COI units.


    var tilesets = coi.tilesets,
        clusterTileset = tilesets.find(function (t) {
      return t.clusterLayer;
    }),
        coiTileset = tilesets.find(function (t) {
      return !t.clusterLayer && t.type == "fill";
    }),
        existingSources = Object.keys(map.getStyle().sources),
        clusterLayerAlreadyExists = clusterTileset ? existingSources.includes(clusterTileset.sourceLayer) : true,
        coiLayerAlreadyExists = coiTileset ? existingSources.includes(coiTileset.sourceLayer) : true,
        clusterUnits,
        coiUnits,
        clusterUnitsLines,
        coiUnitsLines; // Add tileset sources.

    var _iterator = _createForOfIteratorHelper(tilesets),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var tileset = _step.value;
        map.addSource(tileset.sourceLayer, tileset.source);
      } // Create a new Layer for the cluster units, if the cluster unit tileset is
      // specified (per utils.js); also add the lines for this layer.

    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    if (!clusterLayerAlreadyExists && clusterTileset) {
      clusterUnits = new Layer(map, {
        id: clusterTileset.sourceLayer,
        type: clusterTileset.type,
        source: clusterTileset.sourceLayer,
        "source-layer": clusterTileset.sourceLayer,
        paint: {
          "fill-opacity": 0,
          "fill-color": "transparent"
        }
      });
      clusterUnitsLines = new Layer(map, {
        id: clusterTileset.sourceLayer + "-lines",
        type: "line",
        source: clusterTileset.sourceLayer,
        "source-layer": clusterTileset.sourceLayer,
        paint: {
          "line-width": 0,
          "line-color": "transparent"
        }
      });
    } // Create a new Layer for the COI units, if the COI unit tileset is
    // specified; also add the lines for this layer.


    if (!coiLayerAlreadyExists && coiTileset) {
      coiUnits = new Layer(map, {
        id: coiTileset.sourceLayer,
        type: coiTileset.type,
        source: coiTileset.sourceLayer,
        "source-layer": coiTileset.sourceLayer,
        paint: {
          "fill-opacity": 0,
          "fill-color": "transparent"
        }
      });
      coiUnitsLines = new Layer(map, {
        id: coiTileset.sourceLayer,
        type: "line",
        source: coiTileset.sourceLayer,
        "source-layer": coiTileset.sourceLayer,
        paint: {
          "line-width": 0,
          "line-color": "transparent"
        }
      });
    }

    return {
      clusterUnits: clusterUnits,
      clusterUnitsLines: clusterUnitsLines,
      coiUnits: coiUnits,
      coiUnitsLines: coiUnitsLines
    };
  }
  /**
   * @description Adds city borders to certain modules.
   * @param {mapboxgl.Map} map MapboxGL Map instance.
   * @param {String} cityID Module identifier.
   * @returns {undefined}
   */


  function cities(map, cityID) {
    // If the border flag for cities doesn't exist, then return immediately.
    if (!spatial_abilities(cityID).border) return null; // Otherwise, retrieve city border data from /assets and plot the borders
    // as a Layer on the Map.

    fetch("/assets/city_border/".concat(cityID, ".geojson?v=2")).then(function (res) {
      return res.json();
    }).then(function (geojson) {
      // Add a Map source for the border itself. TODO: this is a bit messy,
      // and should be cleaned up later.
      map.addSource("city_border", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: geojson.features.map(function (f) {
            return f.geometry.type === "Polygon" ? {
              type: "Feature",
              geometry: {
                "type": "LineString",
                coordinates: f.geometry.coordinates[0]
              }
            } : f;
          })
        }
      }); // Add a map source for the border polygons.

      map.addSource("city_border_poly", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: geojson.features.filter(function (f) {
            return String(f.geometry.type).includes("Polygon");
          })
        }
      }); // Now, add layers for each.

      new Layer(map, {
        id: "city_border",
        source: "city_border",
        type: "line",
        paint: {
          "line-color": "#000",
          "line-opacity": 0.7,
          "line-width": 1.5
        }
      });
      /*
      new Layer(
      map,{
      id: "city_border_poly",
      source: "city_border_poly",
      type: "fill",
      paint: {
      "fill-color": "#444",
      "fill-opacity": 0.3
      }
      }
      );
       */

    });
  }
  /**
   * @description Adds the desired layers -- each of the tilesets in `tilesets` and
   * the extras we add for COIs if the module is flagged that way -- to mapbox.
   * @param {mapboxgl.Map} map Map rendered to the view.
   * @param {mapboxgl.Map|null} swipemap Typically null.
   * @param {Object[]} parts Objects for each district in the plan.
   * @param {Object[]} tilesets MapboxGL tileset specifications loaded by default.
   * @param {Function} layerAdder Inserts new Layers.
   * @param {String} borderID Name of the map module
   * @param {string} stateName Name of the state
   */


  function addLayers(map, swipemap, parts, tilesets, layerAdder, borderID, stateName) {
    // For each of the default tilesets -- base units and points -- add them as
    // sources for the Map.
    var _iterator2 = _createForOfIteratorHelper(tilesets),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var tileset = _step2.value;
        map.addSource(tileset.sourceLayer, tileset.source);
      } // Add base units to the map.

    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    var clusterTileset = tilesets.find(function (t) {
      return t.type === "fill";
    }),
        _addBaseUnits = addBaseUnits(map, parts, clusterTileset, layerAdder),
        units = _addBaseUnits.units,
        unitsBorders = _addBaseUnits.unitsBorders,
        pointTileset = tilesets.find(function (t) {
      return t.type === "circle";
    }),
        points = addPoints(map, pointTileset, layerAdder),
        counties = addCounties(map, COUNTIES_TILESET, layerAdder, stateName),
        bgTileset = tilesets.find(function (t) {
      return t.source.url.includes("blockgroups") && !t.source.url.includes("points");
    }),
        bgAreas = addBGs(map, bgTileset, layerAdder, borderID),
        bg_areas = bgAreas,
        _addCOIUnits = addCOIUnits(map, stateName.toLowerCase()),
        clusterUnits = _addCOIUnits.clusterUnits,
        clusterUnitsLines = _addCOIUnits.clusterUnitsLines,
        coiUnits = _addCOIUnits.coiUnits;
        _addCOIUnits.coiUnitsLines;
        var coiunits = coiUnits,
        coiUnits2 = null,
        _addPrecincts = addPrecincts(map, tilesets, stateName),
        oldPrecincts = _addPrecincts.oldPrecincts,
        newPrecincts = _addPrecincts.newPrecincts,
        precincts = oldPrecincts,
        new_precincts = newPrecincts,
        tracts = addTracts(map, tilesets, borderID); // Cities in Communities of Interest will have thicker borders.


    cities(map, borderID);
    return {
      units: units,
      unitsBorders: unitsBorders,
      coiunits: coiunits,
      coiUnits2: coiUnits2,
      points: points,
      counties: counties,
      bg_areas: bg_areas,
      precincts: precincts,
      new_precincts: new_precincts,
      tracts: tracts,
      clusterUnits: clusterUnits,
      clusterUnitsLines: clusterUnitsLines
    };
  }

  var IdColumn = /*#__PURE__*/function () {
    function IdColumn(_ref) {
      var key = _ref.key,
          name = _ref.name;

      _classCallCheck(this, IdColumn);

      this.key = key;
      this.name = name;
    }

    _createClass(IdColumn, [{
      key: "getValue",
      value: function getValue(feature) {
        if (feature.properties === undefined) {
          return undefined;
        }

        return feature.properties[this.key];
      }
    }]);

    return IdColumn;
  }();

  /**
   * Assigns units to their districts while the Mapbox tiles are still
   * loading.
   *
   * @param {State} state The State object.
   * @param {Object} assignment The assignment we want to set.
   * @param {Function} readyCallback Called after all the units' assignments
   *  are set.
   */

  function assignUnitsAsTheyLoad(state, assignment, readyCallback) {
    var assignmentLength = Object.keys(assignment).filter(function (key) {
      return assignment[key] !== undefined && assignment[key] !== null;
    }).length;
    var numberAssigned = 0;
    var mapUnloaded = {};
    var populationUnloaded = new Set(Object.keys(assignment));

    var loadRemainingData = function loadRemainingData() {
      console.log('Missing units: ' + populationUnloaded.size);

      if (populationUnloaded.size > 0 && spatial_abilities(state.place.id).sideload) {
        fetch("//mggg.pythonanywhere.com/demographics", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            id: state.place.id,
            unitType: state.units.id,
            unitName: state.unitsRecord.id,
            keyColumn: state.idColumn.key,
            units: Array.from(populationUnloaded)
          })
        }).then(function (res) {
          return res.json();
        }).then(function (data) {
          data.forEach(function (row) {
            if (["wisco2019acs"].includes(state.place.id)) {
              // round values (as was done pre-MapBox upload) to avoid mismatch count
              Object.keys(row).forEach(function (n) {
                return typeof row[n] === 'number' ? row[n] = Math.round(row[n]) : null;
              });
            }

            var unitId = String(row[state.idColumn.key]);

            if (populationUnloaded.has(unitId)) {
              populationUnloaded.delete(unitId);
              assign(state, {
                type: 'Feature',
                id: 'xw' + unitId,
                properties: row
              }, assignment[unitId], true);
            }
          });
        });
      }
    };

    var sideLoader = null;
    state.units.untilSourceLoaded(function (done) {
      var _assignFeatures = assignFeatures(state, assignment, mapUnloaded, populationUnloaded),
          successes = _assignFeatures.successes,
          failures = _assignFeatures.failures;

      numberAssigned += successes;

      if (successes > 0) {
        if (sideLoader) {
          clearTimeout(sideLoader);
        }

        sideLoader = setTimeout(loadRemainingData, 500);
      }

      if (numberAssigned === assignmentLength && failures === 0) {
        done();
      }

      readyCallback();
      state.render();
    });
  }

  function assign(state, feature, partId, updateData) {
    if (typeof partId === 'number') {
      partId = [partId];
    }

    if (updateData) {
      state.update(feature, partId);
    }

    partId.forEach(function (p) {
      if (state.parts[p]) {
        state.parts[p].visible = true;
      } else {
        console.error("Off by one? No matching district number for: " + p);
      }
    });
    state.units.setAssignment(feature, partId);
  }

  function assignFeatures(state, assignment, mapUnloaded, populationUnloaded) {
    var features = state.units.querySourceFeatures();
    var failures = 0;
    var successes = 0;

    while (features.length > 0) {
      var feature = features.pop();

      {
        //state.hasExpectedData(feature)) {
        var unitId = String(state.idColumn.getValue(feature));

        if (mapUnloaded[unitId] !== true && assignment.hasOwnProperty(unitId) && assignment[unitId] !== null && assignment[unitId] !== undefined) {
          assign(state, feature, assignment[unitId], populationUnloaded.has(unitId) || populationUnloaded.has(String(unitId)));
          mapUnloaded[unitId] = true;
          successes += 1;
          populationUnloaded.delete(unitId);
        }
      }
    }

    return {
      failures: failures,
      successes: successes
    };
  }

  var NumericalColumn = /*#__PURE__*/function () {
    function NumericalColumn(columnRecord) {
      _classCallCheck(this, NumericalColumn);

      this.name = columnRecord.name;
      this.key = columnRecord.key;
      this.sum = columnRecord.sum;
      this.min = columnRecord.min;
      this.max = columnRecord.max;
      this.getValue = this.getValue.bind(this);
      this.formatValue = this.formatValue.bind(this);
      this.asMapboxExpression = this.asMapboxExpression.bind(this);
    }

    _createClass(NumericalColumn, [{
      key: "getValue",
      value: function getValue(feature) {
        return parseFloat(feature.properties[this.key] || 0);
      }
    }, {
      key: "formatValue",
      value: function formatValue(feature) {
        return numberWithCommas(this.getValue(feature));
      }
    }, {
      key: "asMapboxExpression",
      value: function asMapboxExpression() {
        return ["to-number", ["get", this.key]];
      }
    }]);

    return NumericalColumn;
  }();
  var SumOfColumns = /*#__PURE__*/function () {
    function SumOfColumns(_ref) {
      var columns = _ref.columns,
          columnSet = _ref.columnSet,
          parts = _ref.parts;

      _classCallCheck(this, SumOfColumns);

      this.columns = columns;
      this.columnSet = columnSet;
      this.data = zeros(parts.length);
      this.sum = sum(this.columns.map(function (col) {
        return col.sum;
      }));
      this.min = Math.min.apply(Math, _toConsumableArray(this.columns.map(function (col) {
        return col.min;
      })));
      this.max = Math.max.apply(Math, _toConsumableArray(this.columns.map(function (col) {
        return col.max;
      })));
      this.getValue = this.getValue.bind(this);
      this.formatValue = this.formatValue.bind(this);
      this.asMapboxExpression = this.asMapboxExpression.bind(this);
      this.update = this.update.bind(this);
    }

    _createClass(SumOfColumns, [{
      key: "total",
      get: function get() {
        return this.columnSet.total;
      }
    }, {
      key: "update",
      value: function update(feature, color) {
        if (color !== undefined && color !== null) {
          this.data[color] += this.getValue(feature);
        }

        if (feature.state !== undefined && feature.state.color !== undefined && feature.state.color !== null) {
          this.data[feature.state.color] -= this.getValue(feature);
        }
      }
    }, {
      key: "getValue",
      value: function getValue(feature) {
        return sum(this.columns.map(function (col) {
          return col.getValue(feature);
        }));
      }
    }, {
      key: "formatValue",
      value: function formatValue(feature) {
        return numberWithCommas(this.getValue(feature));
      }
    }, {
      key: "asMapboxExpression",
      value: function asMapboxExpression() {
        var total = ["+"];
        this.columns.forEach(function (col) {
          total.push(col.asMapboxExpression());
        });
        return total;
      }
    }]);

    return SumOfColumns;
  }();

  var _excluded$1 = ["columnSet", "parts"];
  var Subgroup = /*#__PURE__*/function (_NumericalColumn) {
    _inherits(Subgroup, _NumericalColumn);

    var _super = _createSuper(Subgroup);

    function Subgroup(_ref) {
      var _this;

      var columnSet = _ref.columnSet,
          parts = _ref.parts,
          args = _objectWithoutProperties(_ref, _excluded$1);

      _classCallCheck(this, Subgroup);

      _this = _super.call(this, args);
      _this.columnSet = columnSet;
      _this.data = zeros(parts.length);
      _this.total_alt = args.total_alt;
      _this.divisor = args.divisor; // for turning a x1000 int back into decimal

      _this.update = _this.update.bind(_assertThisInitialized(_this));
      _this.fractionAsMapboxExpression = _this.fractionAsMapboxExpression.bind(_assertThisInitialized(_this));
      _this.getFractionFromFeature = _this.getFractionFromFeature.bind(_assertThisInitialized(_this));
      _this.getFractionInPart = _this.getFractionInPart.bind(_assertThisInitialized(_this));
      _this.getOverallFraction = _this.getOverallFraction.bind(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(Subgroup, [{
      key: "total",
      get: function get() {
        return this.total_alt ? this.columnSet.total_alt : this.columnSet.total;
      }
    }, {
      key: "getFractionFromFeature",
      value: function getFractionFromFeature(feature) {
        return this.getValue(feature) / this.total.getValue(feature);
      }
    }, {
      key: "getFractionInPart",
      value: function getFractionInPart(partIndex) {
        var total = this.total.data[partIndex];

        if (this.columnSet.totalIsSum) {
          total = 0;
          this.columnSet.subgroups.forEach(function (sg) {
            return total += sg.data[partIndex];
          });
        }

        return total > 0 ? this.data[partIndex] / total : 0;
      }
    }, {
      key: "getOverallFraction",
      value: function getOverallFraction() {
        var total = this.total.sum;
        return total > 0 ? this.sum / total : 0;
      }
    }, {
      key: "fractionAsMapboxExpression",
      value: function fractionAsMapboxExpression() {
        return divideOrZeroIfNaN(this.asMapboxExpression(), this.total.asMapboxExpression());
      }
    }, {
      key: "update",
      value: function update(feature, color) {
        var _this2 = this;

        var divisor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
        var oldColors = String(feature.state ? feature.state.color === undefined ? "" : feature.state.color : "").split(",").filter(function (c) {
          return c !== "";
        });
        var newColors = String(color).split(","); // note that JSON.stringify [0,undefined] == [0,null]
        // console.log(JSON.stringify((feature.state || {}).color) + " to " + JSON.stringify(color))

        if (color !== undefined && color !== null) {
          if (!oldColors.includes(String(color))) {
            // newColors usually receives one color at a time
            // except when loading multiple colors from a community plan
            newColors.filter(function (c) {
              return (c || c === 0) && !oldColors.includes(c);
            }).forEach(function (c) {
              // console.log("add to " + Number(c));
              _this2.data[Number(c)] += _this2.getValue(feature) / divisor;
            });
          }
        } // this happens on districting whenever a color is replaced
        // this happens on community only when erasing (overlap allowed)


        oldColors.filter(function (c) {
          return c || c === 0;
        }).forEach(function (oldColor) {
          if (!newColors.includes(oldColor)) {
            // console.log("subtract from " + Number(oldColor));
            _this2.data[Number(oldColor)] -= _this2.getValue(feature) / divisor;
          }
        });
      }
    }, {
      key: "getAbbreviation",
      value: function getAbbreviation() {
        if (ABBREVIATIONS.hasOwnProperty(this.key)) {
          return ABBREVIATIONS[this.key];
        } else {
          var prelim = this.name.split(" ")[0];

          if (prelim === "American" || this.key.includes("native")) {
            return "Native Am.";
          } else if (prelim === "Native" && !this.key.includes("American")) {
            return "NH/PI";
          }

          return prelim;
        }
      }
    }]);

    return Subgroup;
  }(NumericalColumn);
  var ABBREVIATIONS = {
    NH_WHITE: "White",
    NH_BLACK: "Black",
    HISP: "Hispanic",
    NH_ASIAN: "Asian",
    NH_AMIN: "Native",
    AMIN: "AmIn/Alaskan",
    "AMINPOP20": "Native Am.",
    "VNAMIND": "Native Am.",
    NH_NHPI: "NH/PI",
    NHPI: "NH/PI",
    "NHPIPOP20": "NH/PI",
    NH_2MORE: "2+",
    "2MORE": "2+",
    NH_OTHER: "Other",
    WVAP: "WVAP",
    BVAP: "BVAP",
    HVAP: "HVAP",
    AMINVAP: "Native VAP",
    NHPIVAP: "NHPI VAP",
    ASIANVAP: "AVAP",
    AKNATVAP: "AK Native VAP",
    OTHERVAP: "Other VAP",
    OTHVAP: "Other VAP",
    "2MOREVAP": "2+ VAP",
    "AMINVAP20": "Native Am.",
    "NHPIVAP20": "NH/PI",
    Others: "Wh/Oth",
    CVAP_Others: "Wh/Oth"
  };

  var ColumnSet = /*#__PURE__*/function () {
    function ColumnSet(_ref) {
      var _this = this;

      var subgroups = _ref.subgroups,
          total = _ref.total,
          total_alt = _ref.total_alt,
          parts = _ref.parts,
          type = _ref.type;
      var sort = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      _classCallCheck(this, ColumnSet);

      this.type = type;
      this.subgroups = subgroups ? subgroups.map(function (subgroup) {
        return new Subgroup(_objectSpread2(_objectSpread2({}, subgroup), {}, {
          parts: parts,
          columnSet: _this
        }));
      }) : [];

      if (sort && sortable(this.subgroups)) {
        this.subgroups = sortSubgroups(this.subgroups);
      }

      if (total !== undefined && total !== null) {
        this.total = new Subgroup(_objectSpread2(_objectSpread2({}, total), {}, {
          parts: parts,
          columnSet: this
        }));
      } else if (total !== null) {
        this.total = new SumOfColumns({
          columns: this.subgroups,
          columnSet: this,
          parts: parts
        });
        this.totalIsSum = true;
      }

      if (total_alt) {
        this.total_alt = new Subgroup(_objectSpread2(_objectSpread2({}, total_alt), {}, {
          parts: parts,
          columnSet: this
        }));
      }

      this.update = this.update.bind(this);
    }

    _createClass(ColumnSet, [{
      key: "update",
      value: function update(feature, part, divisor) {
        this.subgroups.forEach(function (subgroup) {
          return subgroup.update(feature, part, divisor);
        });
        this.total.update(feature, part, divisor);
      }
    }, {
      key: "columns",
      get: function get() {
        return [this.total].concat(_toConsumableArray(this.subgroups));
      }
    }]);

    return ColumnSet;
  }();

  function sortable(subgroups) {
    var _iterator = _createForOfIteratorHelper(subgroups),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var subgroup = _step.value;

        if (typeof subgroup.sum !== "number") {
          return false;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return true;
  }

  function sortSubgroups(subgroups) {
    return subgroups.sort(function (s, t) {
      if (s.name.includes("(") && !t.name.includes("(")) {
        return 1;
      } else if (t.name.includes("(") && !s.name.includes("(")) {
        return -1;
      } else {
        return t.sum - s.sum;
      }
    });
  }

  var Election = /*#__PURE__*/function (_ColumnSet) {
    _inherits(Election, _ColumnSet);

    var _super = _createSuper(Election);

    function Election(name, subgroups, parts, alternate) {
      var _this;

      _classCallCheck(this, Election);

      var sortedSubgroups = subgroups.sort(function (a, b) {
        return a.name.localeCompare(b.name);
      });
      _this = _super.call(this, {
        subgroups: sortedSubgroups,
        type: "election",
        parts: parts
      }, false);
      _this.name = name;
      _this.getOtherParty = _this.getOtherParty.bind(_assertThisInitialized(_this));
      _this.marginAsMapboxExpression = _this.marginAsMapboxExpression.bind(_assertThisInitialized(_this));

      if (alternate) {
        _this.alternate = new Election(alternate.name, alternate.subgroups, parts);
      }

      return _this;
    }

    _createClass(Election, [{
      key: "parties",
      get: function get() {
        return this.subgroups;
      }
    }, {
      key: "columns",
      get: function get() {
        return this.subgroups;
      }
      /**
       * Return the other party in the election.
       * @todo Figure out what to do when
       * @param {Subgroup} party
       */

    }, {
      key: "getOtherParty",
      value: function getOtherParty(party) {
        return party === this.subgroups[0] ? this.subgroups[1] : this.subgroups[0];
      }
    }, {
      key: "marginAsMapboxExpression",
      value: function marginAsMapboxExpression(party) {
        var otherParty = this.getOtherParty(party);
        return ["-", party.asMapboxExpression(), otherParty.asMapboxExpression()];
      }
    }, {
      key: "getSeatsWonParty",
      value: function getSeatsWonParty(party) {
        var groups = this.subgroups;
        var data = groups.map(function (g) {
          return g.data;
        });
        var count = 0;

        var _loop = function _loop(i) {
          party.data[i] == Math.max.apply(Math, _toConsumableArray(data.map(function (d) {
            return d[i];
          }))) && party.data[i] > 0 ? count++ : null;
        };

        for (var i = 0; i < party.data.length; i++) {
          _loop(i);
        }

        return count;
      }
    }]);

    return Election;
  }(ColumnSet);

  var _templateObject$5;

  var Part = /*#__PURE__*/function () {
    function Part(id, noun, displayNumber, color) {
      var visible = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;

      _classCallCheck(this, Part);

      this.id = id;
      this.noun = noun;
      this.displayNumber = displayNumber;
      this.color = color.hex;
      this.hoverColor = color.hoverHex;
      this.visible = visible;
    }

    _createClass(Part, [{
      key: "updateDescription",
      value: function updateDescription(_ref) {
        var name = _ref.name,
            description = _ref.description;
        this.name = name;
        this.description = description;
      }
    }, {
      key: "serialize",
      value: function serialize() {
        return {
          id: this.id,
          displayNumber: this.displayNumber,
          name: this.name,
          description: this.description
        };
      }
    }, {
      key: "renderLabel",
      value: function renderLabel() {
        return html(_templateObject$5 || (_templateObject$5 = _taggedTemplateLiteral(["\n            <span class=\"part-number\" style=\"background: ", "\">\n                ", "\n            </span>\n        "])), this.color, this.displayNumber);
      }
    }]);

    return Part;
  }();

  var Population = /*#__PURE__*/function (_ColumnSet) {
    _inherits(Population, _ColumnSet);

    var _super = _createSuper(Population);

    function Population(_ref) {
      var _this;

      var name = _ref.name,
          subgroups = _ref.subgroups,
          total = _ref.total,
          name_alt = _ref.name_alt,
          total_alt = _ref.total_alt,
          parts = _ref.parts;

      _classCallCheck(this, Population);

      _this = _super.call(this, {
        subgroups: subgroups,
        total: total,
        total_alt: total_alt,
        parts: parts
      });
      _this.name = name;
      _this.name_alt = name_alt;
      _this.ideal = _this.total.sum / parts.length;
      _this.formattedIdeal = numberWithCommas(roundToDecimal(_this.ideal, 2));
      _this.update = _this.update.bind(_assertThisInitialized(_this));
      _this.deviations = _this.deviations.bind(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(Population, [{
      key: "deviations",
      value: function deviations() {
        var _this2 = this;

        return this.total.data.map(function (d) {
          return (d - _this2.ideal) / _this2.ideal;
        });
      }
      /**
       * Returns the indices of all subgroups with more than 5% of the total
       * population, sorted largest-to-smallest.
       */

    }, {
      key: "indicesOfMajorSubgroups",
      value: function indicesOfMajorSubgroups() {
        var _this3 = this;

        return this.subgroups.filter(function (sg) {
          return !sg.name.includes("2018") && !sg.name.includes("2019");
        }).map(function (subgroup, i) {
          return i;
        }) // .filter(i => this.subgroups[i].sum > this.total.sum * 0.05)
        .sort(function (i, j) {
          return _this3.subgroups[j].sum - _this3.subgroups[i].sum;
        }).slice(0, 3);
      }
    }]);

    return Population;
  }(ColumnSet);

  // and Population) objects from the Place and DistrictingProblem records
  // provided from the backend (specified in the YAML config files used when
  // generating tilesets). This is currently a sort of ad hoc process, where
  // we identify Population and VAP based on the ColumnSet type and name,
  // and Elections by their type ("election"). These are saved as
  // `state.population` and `state.vap`, respectively.
  // In the future, it would be better to just create the ColumnSets based
  // on their type without handling them as special cases (so `state.vap`
  // would not exist, just `state.columnSets` or something). We would
  // want to configure what charts and overlays we want available for
  // each type of ColumnSet somewhere---maybe in the records for the place's
  // Districtr module, or just within the codebase.
  // The idea is that we should be able to add more ColumnSets (e.g. Under-18
  // Population) without having to go through all the places in the code
  // where we use `state.vap` and add code handling `state.under18` or
  // something.

  function getParts(problem) {
    var name = problem.name || "District";
    var parts = [];

    for (var i = 0; i < problem.numberOfParts; i++) {
      var j = i % districtColors.length;
      parts[i] = new Part(i, name, i + 1, districtColors[j]);
    }

    if (parts.length > districtColors.length) {
      parts.slice(1).forEach(function (p) {
        p.visible = false;
      });
    }

    return parts;
  }

  function getPopulation(place, parts) {
    var population = place.columnSets.find(function (columnSet) {
      return columnSet.name === "Population";
    });
    var population18 = place.columnSets.find(function (columnSet) {
      return columnSet.name === "Population (2018)";
    });
    var population19 = place.columnSets.find(function (columnSet) {
      return columnSet.name === "Population (2019)";
    });

    if (population18) {
      population18.subgroups.forEach(function (sg) {
        sg.name += " (2018)";
        sg.total_alt = true;
        population.subgroups.push(sg);
      });
      population18.total.total_alt = true;
      population.subgroups.push(population18.total);
      population.total_alt = population18.total;
      population.name_alt = "Population (2018)";
    }

    if (population19) {
      population19.subgroups.forEach(function (sg) {
        sg.name += " (2019)";
        sg.total_alt = true;
        population.subgroups.push(sg);
      });
      population19.total.total_alt = true;
      population.subgroups.push(population19.total);
      population.total_alt = population19.total;
      population.name_alt = "Population (2019)";
    }

    return new Population(_objectSpread2(_objectSpread2({}, population), {}, {
      parts: parts
    }));
  }

  function getVAP(place, parts) {
    var vap = place.columnSets.find(function (columnSet) {
      return columnSet.name === "Voting Age Population";
    });

    if (vap) {
      return new Population(_objectSpread2(_objectSpread2({}, vap), {}, {
        parts: parts
      }));
    } else {
      return null;
    }
  }

  function getCVAP(place, parts) {
    var cvap = place.columnSets.find(function (columnSet) {
      return columnSet.name === "Citizen Voting Age Population";
    });

    if (cvap) {
      return new Population(_objectSpread2(_objectSpread2({}, cvap), {}, {
        parts: parts
      }));
    } else {
      return null;
    }
  }

  function getPcts(place, parts) {
    var pcts = place.columnSets.find(function (columnSet) {
      return columnSet.name && columnSet.name.toLowerCase() === "percentages";
    });

    if (pcts) {
      return new Population(_objectSpread2(_objectSpread2({}, pcts), {}, {
        parts: parts
      }));
    } else {
      return null;
    }
  }

  function getAges(place, parts) {
    var ages = place.columnSets.find(function (columnSet) {
      return columnSet.name === "Age of Population";
    });

    if (ages) {
      return new Population(_objectSpread2(_objectSpread2({}, ages), {}, {
        parts: parts
      }));
    } else {
      return null;
    }
  }

  function getIncomes(place, parts) {
    var incomes = place.columnSets.find(function (columnSet) {
      return columnSet.name === "Households by Income";
    });

    if (incomes) {
      return new Population(_objectSpread2(_objectSpread2({}, incomes), {}, {
        parts: parts
      }));
    } else {
      return null;
    }
  }

  function getMedIncome(place, parts) {
    var incomes = place.columnSets.find(function (columnSet) {
      return columnSet.name === "Median Income";
    });

    if (incomes) {
      return new Population(_objectSpread2(_objectSpread2({}, incomes), {}, {
        parts: parts
      }));
    } else {
      return null;
    }
  }

  function getRent(place, parts) {
    var rent = place.columnSets.find(function (columnSet) {
      return columnSet.name === "Households by Rental";
    });

    if (rent) {
      return new Population(_objectSpread2(_objectSpread2({}, rent), {}, {
        parts: parts
      }));
    } else {
      return null;
    }
  }

  function getBroadband(place, parts) {
    var broadband = place.columnSets.find(function (columnSet) {
      return columnSet.name === "Technology";
    });

    if (broadband) {
      return new Population(_objectSpread2(_objectSpread2({}, broadband), {}, {
        parts: parts
      }));
    } else {
      return null;
    }
  }

  function getSNAP(place, parts) {
    var snap = place.columnSets.find(function (columnSet) {
      return columnSet.name === "Households and Food";
    });

    if (snap) {
      return new Population(_objectSpread2(_objectSpread2({}, snap), {}, {
        parts: parts
      }));
    } else {
      return null;
    }
  }

  function getAsthma(place, parts) {
    var asthma = place.columnSets.find(function (columnSet) {
      return columnSet.name === "Health issues";
    });

    if (asthma) {
      return new Population(_objectSpread2(_objectSpread2({}, asthma), {}, {
        parts: parts
      }));
    } else {
      return null;
    }
  }

  function getEducation(place, parts) {
    var edu = place.columnSets.find(function (columnSet) {
      return columnSet.name === "Education";
    });

    if (edu) {
      return new Population(_objectSpread2(_objectSpread2({}, edu), {}, {
        parts: parts
      }));
    } else {
      return null;
    }
  }

  function getVoters(place, parts) {
    var voters = place.columnSets.find(function (columnSet) {
      return columnSet.name === "Registered Voters";
    });

    if (voters) {
      return new Population(_objectSpread2(_objectSpread2({}, voters), {}, {
        parts: parts
      }));
    } else {
      return null;
    }
  }

  function getElections(place, parts) {
    console.log(place);
    var elections = place.columnSets.filter(function (columnSet) {
      return columnSet.type === "election";
    });
    elections.forEach(function (election) {
      election.year = election.metadata ? election.metadata.year : election.name.split(" ")[0];
    });
    var alternate = place.columnSets.filter(function (columnSet) {
      return columnSet.type === "electionx";
    });
    return elections.sort(function (a, b) {
      return b.year - a.year;
    }).map(function (election) {
      return new Election(election.metadata ? "".concat(election.metadata.year, " ").concat(election.metadata.race, " Election") : "".concat(election.name, " Election"), election.subgroups, parts, alternate ? alternate.find(function (e) {
        return e.name === election.name;
      }) : null);
    });
  }

  function getColumnSets(state, unitsRecord) {
    state.elections = getElections(unitsRecord, state.parts);
    state.population = getPopulation(unitsRecord, state.parts);
    state.vap = getVAP(unitsRecord, state.parts);
    state.cvap = getCVAP(unitsRecord, state.parts);
    state.pcts = getPcts(unitsRecord, state.parts);
    state.ages = getAges(unitsRecord, state.parts);
    state.incomes = getIncomes(unitsRecord, state.parts);
    state.median_income = getMedIncome(unitsRecord, state.parts);
    state.rent = getRent(unitsRecord, state.parts);
    state.broadband = getBroadband(unitsRecord, state.parts);
    state.snap = getSNAP(unitsRecord, state.parts);
    state.asthma = getAsthma(unitsRecord, state.parts);
    state.education = getEducation(unitsRecord, state.parts);
    state.voters = getVoters(unitsRecord, state.parts);
    state.columns = [state.population.total].concat(_toConsumableArray(state.population.subgroups), _toConsumableArray(state.elections.reduce(function (cols, election) {
      return [].concat(_toConsumableArray(cols), _toConsumableArray(election.subgroups));
    }, [])));

    if (state.vap) {
      state.columns = [].concat(_toConsumableArray(state.columns), _toConsumableArray(state.vap.subgroups), [state.vap.total]);
    }

    if (state.cvap) {
      state.columns = [].concat(_toConsumableArray(state.columns), _toConsumableArray(state.cvap.subgroups), [state.cvap.total]);
    }

    if (state.pcts) {
      state.columns = [].concat(_toConsumableArray(state.columns), _toConsumableArray(state.pcts.subgroups));
    }

    if (state.ages) {
      state.columns = [].concat(_toConsumableArray(state.columns), _toConsumableArray(state.ages.subgroups));
    }

    if (state.incomes) {
      state.columns = [].concat(_toConsumableArray(state.columns), _toConsumableArray(state.incomes.subgroups));
    }

    if (state.median_income) {
      state.columns = [].concat(_toConsumableArray(state.columns), _toConsumableArray(state.median_income.subgroups));
    }

    if (state.rent) {
      state.columns = [].concat(_toConsumableArray(state.columns), _toConsumableArray(state.rent.subgroups));
    }

    if (state.broadband) {
      state.columns = [].concat(_toConsumableArray(state.columns), _toConsumableArray(state.broadband.subgroups));
    }

    if (state.snap) {
      state.columns = [].concat(_toConsumableArray(state.columns), _toConsumableArray(state.snap.subgroups));
    }

    if (state.asthma) {
      state.columns = [].concat(_toConsumableArray(state.columns), _toConsumableArray(state.asthma.subgroups), [state.asthma.total]);
    }

    if (state.education) {
      state.columns = [].concat(_toConsumableArray(state.columns), _toConsumableArray(state.education.subgroups.sort(function (a, b) {
        return a.key < b.key ? -1 : 1;
      })));
    }

    if (state.voters) {
      state.columns = [].concat(_toConsumableArray(state.columns), _toConsumableArray(state.voters.subgroups), [state.voters.total]);
    }

    var columnSets = [state.population].concat(_toConsumableArray(state.elections));

    if (state.vap) {
      columnSets.push(state.vap);
    }

    if (state.cvap) {
      columnSets.push(state.cvap);
    }

    if (state.pcts) {
      columnSets.push(state.pcts);
    }

    if (state.ages) {
      columnSets.push(state.ages);
    }

    if (state.incomes) {
      columnSets.push(state.incomes);
    }

    if (state.median_income) {
      columnSets.push(state.median_income);
    }

    if (state.rent) {
      columnSets.push(state.rent);
    }

    if (state.broadband) {
      columnSets.push(state.broadband);
    }

    if (state.snap) {
      columnSets.push(state.snap);
    }

    if (state.asthma) {
      columnSets.push(state.asthma);
    }

    if (state.education) {
      columnSets.push(state.education);
    }

    if (state.voters) {
      columnSets.push(state.voters);
    }

    return columnSets;
  }

  var _excluded = ["place", "problem", "id", "assignment", "units"];
  // [ ] MapState (map, layers)
  // [ ] DistrictData (column sets) ?
  // [x] DistrictingPlan (assignment, problem, export()) ?
  // [ ] Units (unitsRecord, reference to layer?) ? <--- really need this one
  // "place" is mostly split up into these categories now.

  var DistrictingPlan = /*#__PURE__*/function () {
    function DistrictingPlan(_ref) {
      var _this = this;

      var id = _ref.id;
          _ref.state;
          var problem = _ref.problem,
          place = _ref.place,
          idColumn = _ref.idColumn,
          parts = _ref.parts;

      _classCallCheck(this, DistrictingPlan);

      if (id) {
        this.id = id;
      } else {
        this.id = generateId(8);
      }

      this.problem = problem;
      this.assignment = {};

      if (!place.landmarks) {
        place.landmarks = {};
      }

      this.place = {
        id: place.id,
        landmarks: place.landmarks,
        state: place.state,
        name: place.name
      };
      this.parts = getParts(problem);

      if (parts) {
        var _loop = function _loop(i) {
          _this.parts.find(function (p) {
            return p.displayNumber === parts[i].displayNumber;
          }).updateDescription(parts[i]);
        };

        for (var i = 0; i < parts.length; i++) {
          _loop(i);
        }
      }

      if (problem.type === "multimember" || problem.type === "community") {
        this.parts.slice(1).forEach(function (part) {
          part.visible = false;
        });
      }

      if (problem.type === "community") {
        this.parts.forEach(function (part) {
          if (!part.name) {
            part.name = "Community ".concat(part.displayNumber);
          }
        });
      }

      this.idColumn = idColumn;
    }

    _createClass(DistrictingPlan, [{
      key: "update",
      value: function update(feature, part) {
        var featureId = this.idColumn.getValue(feature);

        if (!part && part !== 0) {
          // erasing this part
          delete this.assignment[featureId];
        } else {
          // districting (only one assignment possible at a time)
          this.assignment[featureId] = part;
        }
      }
    }, {
      key: "serialize",
      value: function serialize() {
        return {
          name: this.name,
          description: this.description,
          assignment: this.assignment,
          id: this.id,
          idColumn: {
            key: this.idColumn.key,
            name: this.idColumn.name
          },
          problem: this.problem,
          parts: this.parts.filter(function (p) {
            return p.visible;
          }).map(function (p) {
            return p.serialize();
          }),
          place: {
            id: this.place.id,
            landmarks: this.place.landmarks,
            state: this.place.state,
            name: this.place.name
          }
        };
      }
    }]);

    return DistrictingPlan;
  }();
  /**
   * Holds all of the state that needs to be updated after
   * each brush stroke. (Mainly the Plan assignment and the
   * population tally.)
   */


  var State = /*#__PURE__*/function () {
    function State(map, swipemap, _ref2, readyCallback) {
      var place = _ref2.place,
          problem = _ref2.problem,
          id = _ref2.id,
          assignment = _ref2.assignment,
          units = _ref2.units,
          args = _objectWithoutProperties(_ref2, _excluded);

      _classCallCheck(this, State);

      this.unitsRecord = units;
      this.place = place;
      this.idColumn = new IdColumn(units.idColumn);

      if (units.hasOwnProperty("nameColumn")) {
        this.nameColumn = new IdColumn(units.nameColumn);
      }

      this.plan = new DistrictingPlan(_objectSpread2(_objectSpread2({
        id: id,
        assignment: assignment,
        problem: problem,
        place: place
      }, args), {}, {
        idColumn: this.idColumn
      }));
      this.initializeMapState(map, swipemap, units, problem.type === "community" ? addBelowLabels : addBelowSymbols, place.id, place.state);
      this.columnSets = getColumnSets(this, units);
      this.subscribers = [];
      this.update = this.update.bind(this);
      this.render = this.render.bind(this);

      if (assignment) {
        assignUnitsAsTheyLoad(this, assignment, readyCallback);
      } else {
        readyCallback();
      }
    }

    _createClass(State, [{
      key: "activeParts",
      get: function get() {
        return this.plan.parts.filter(function (part) {
          return part.visible;
        });
      }
    }, {
      key: "initializeMapState",
      value: function initializeMapState(map, swipemap, unitsRecord, layerAdder, borderId, statename) {
        var _addLayers = addLayers(map, swipemap, this.parts, unitsRecord.tilesets, layerAdder, borderId, statename),
            units = _addLayers.units,
            unitsBorders = _addLayers.unitsBorders,
            coiunits = _addLayers.coiunits,
            coiunits2 = _addLayers.coiunits2,
            bg_areas = _addLayers.bg_areas,
            swipeUnits = _addLayers.swipeUnits,
            points = _addLayers.points,
            counties = _addLayers.counties,
            precincts = _addLayers.precincts,
            new_precincts = _addLayers.new_precincts,
            tracts = _addLayers.tracts,
            clusterUnits = _addLayers.clusterUnits,
            clusterUnitsLines = _addLayers.clusterUnitsLines;

        this.units = units;
        this.unitsBorders = unitsBorders;
        this.coiunits = coiunits;
        this.clusterUnits = clusterUnits;
        this.clusterUnitsLines = clusterUnitsLines;
        this.coiunits2 = coiunits2;
        this.swipeUnits = swipeUnits; // this.swipeUnitsBorders = swipeUnitsBorders;

        this.counties = counties;
        this.layers = [units, points, bg_areas, precincts, new_precincts, tracts].filter(function (x) {
          return !!x;
        });
        this.swipeLayers = [];
        this.map = map;
      }
    }, {
      key: "update",
      value: function update(feature, part) {
        var _this2 = this;

        this.columnSets.forEach(function (columnSet) {
          return columnSet.update(feature, part, _this2.divisor);
        });
        this.plan.update(feature, part);
      }
    }, {
      key: "parts",
      get: function get() {
        return this.plan.parts;
      }
    }, {
      key: "problem",
      get: function get() {
        return this.plan.problem;
      }
    }, {
      key: "serialize",
      value: function serialize() {
        return _objectSpread2(_objectSpread2({}, this.plan.serialize()), {}, {
          placeId: this.place.id,
          units: this.unitsRecord
        });
      }
    }, {
      key: "subscribe",
      value: function subscribe(f) {
        this.subscribers.push(f);
        this.render();
      }
    }, {
      key: "render",
      value: function render() {
        var _iterator = _createForOfIteratorHelper(this.subscribers),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var f = _step.value;
            f();
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    }, {
      key: "hasExpectedData",
      value: function hasExpectedData(feature) {
        if (feature === undefined || feature.properties === undefined) {
          return false;
        }

        if (feature.properties[this.idColumn.key] === undefined) {
          return false;
        }

        var _iterator2 = _createForOfIteratorHelper(this.columns),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var column = _step2.value;

            if (feature.properties[column.key] === undefined) {
              return false;
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        return true;
      }
    }]);

    return State;
  }();

  /**
   * Creates an HTML entity which provides some supplementary information about
   * the dataset being used to balance population.
   * @param {State} state A State object.
   * @returns {String} The description for the dataset used.
   */

  function datasetInfo(state) {
    // Dictionary of descriptions.
    var population = state.population,
        place = state.place,
        populations = {
      census: "Uses <strong>2010 Decennial Census</strong> data",
      census20: "Uses <strong>2020 Decennial Census</strong> data",
      census20adj: "Uses <strong>2020 Decennial Census</strong> prison-adjusted data",
      census20adjMT: "Uses prison-adjusted <strong>2020 Decennial Census</strong> data",
      census20non_p_adj: "Uses <strong>2020 Decennial Census</strong> adjusted data",
      acs: "Uses <strong>2019 American Community Survey</strong> data",
      mesa: "Uses <strong>2019 American Community Survey</strong> population disaggregated from blockgroups by Redistricting Partners",
      redistpartners2020: "Uses <strong>adjusted 2020 Decennial Census population</strong> with processing by Redistricting Partners",
      modesto: "Uses <strong>adjusted 2020 Decennial Census population</strong> with processing by Redistricting Partners",
      ndc_prison_2020: "Uses <strong>adjusted 2020 Decennial Census population</strong> with processing by National Demographics Corporation",
      pasorobles: "Uses <strong>2019 American Community Survey</strong> population disaggregated from blockgroups by Cooperative Strategies",
      sacramento: "Uses <strong>projected 2020 population</strong> data with processing by National Demographics Corporation",
      ndc_proj_2020: "Uses <strong>projected 2020 population</strong> data with processing by National Demographics Corporation",
      ndc_2020: "Uses <strong>2020 Decennial Census population</strong> with processing by National Demographics Corporation",
      wagaman_2020: "Uses <strong>adjusted 2020 Decennial Census population</strong> with processing by Wagaman Strategies",
      cooperative_strategies: "Uses <strong>adjusted 2020 Decennial Census population</strong> with processing by Cooperative Strategies",
      ca_elkgrove: "Uses <strong>adjusted 2020 Decennial Census population</strong> with processing by the City of Elk Grove",
      az_pima: "Uses <strong>2020 Decennial Census population</strong> with processing by Pima County",
      az_maricopa: "Uses <strong>2020 Decennial Census population</strong> with processing by Maricopa County Recorder’s Office",
      haystaq_2020: "Uses <strong>2020 Decennial Census population</strong> with processing by Haystaq",
      research_polling: "Uses <strong>2020 Decennial Census population</strong> with processing by Research & Polling",
      nyc_2022: "Uses <strong>2020 Decennial Census</strong> population with processing by Redistricting Partners"
    },
        acsLocations = ["wisco2019acs", "hall_ga", "grand_county_2", "mn2020acs", "nd_benson", "nd_dunn", "nd_mckenzie", "nd_mountrail", "nd_ramsey", "nd_rollette", "nd_sioux", "contracosta"],
        units = state.unitsRecord.name,
        dataset = "";
    console.dir(state);

    if (acsLocations.includes(place.id.toLowerCase()) || state.units.id.includes("2019") || population.name !== "Population") {
      dataset = "<p><span>&#9432;</span> ".concat(populations.acs);
    } else if (["mt_pris_adj"].includes(place.id)) {
      dataset = "<p><span>&#9432;</span> ".concat(populations.census20adjMT);
    } else if ("nyc_popdemo" === place.id) {
      dataset = "<p><span>&#9432;</span> ".concat(populations.nyc_2022);
    } else if (["rp_lax", "ca_butte", "sanluiso", "sanjoseca", "siskiyou", "redwood", "ca_ventura", "ca_yolo", "ca_solano", "ca_sc_county", "ca_sanmateo", "ca_kern", "ca_sanjoaquin", "ca_sc_county", "ca_tuolumne", "napa2021", "napacounty2021", "napa_boe", "santa_clara_h2o", "ca_oakland", "ca_martinez", "ca_humboldt", "carpinteria", "modesto", "santarosa", "ca_millbrae", "ca_belmont", "ca_scvosa", "ca_west_sac", "ca_diamond_bar", "ca_riverside"].includes(place.id)) {
      dataset = "<p><span>&#9432;</span> ".concat(units === "2020 Blocks" ? populations.redistpartners2020 : populations.mesa);
    } else if (["pasorobles"].includes(place.id)) {
      dataset = "<p><span>&#9432;</span> ".concat(populations.pasorobles);
    } else if (["ca_elkgrove"].includes(place.id)) {
      dataset = "<p><span>&#9432;</span> ".concat(populations.ca_elkgrove);
    } else if (["az_pima"].includes(place.id)) {
      dataset = "<p><span>&#9432;</span> ".concat(populations.az_pima);
    } else if (["az_maricopa"].includes(place.id)) {
      dataset = "<p><span>&#9432;</span> ".concat(populations.az_maricopa);
    } else if (["ca_fpud"].includes(place.id)) {
      dataset = "<p><span>&#9432;</span> ".concat(populations.haystaq_2020);
    } else if (["nm_abq"].includes(place.id)) {
      dataset = "<p><span>&#9432;</span> ".concat(populations.research_polling); // Cooperative strategies modules. I also wholeheartedly disagree with the
      // way this info message differentiation is being done; why don't we put this
      // info in the *configuration* for these modules rather than doing it
      // after-the-fact and making it way harder to figure out? This is ridiculous
      // and certainly not the way it was intended to be written.
    } else if (["sbusd_5", "sbusd_7", "pvsd"].includes(place.id)) {
      dataset = "<p><span>&#9432;</span> ".concat(populations.cooperative_strategies);
    } else if (["ca_watsonville", "ca_rohnert", "ca_brentwood"].includes(place.id)) {
      dataset = "<p><span>&#9432;</span> ".concat(populations.wagaman_2020);
    } else if (["sacramento", "ca_goleta", "ca_santabarbara", "ca_marin", "ca_kings", "ca_merced", "ca_nevada", "ca_marina", "ca_arroyo", "ca_sm_county", "ca_sanbenito", "ca_bellflower", "ca_camarillo", "ca_fremont", "lake_el", "ca_chino", "ca_campbell", "ca_vallejo", "ca_oceano", "ca_grover", "ca_buellton", "buenapark", "halfmoon", "ca_carlsbad", "ca_richmond", "elcajon", "laverne", "encinitas", "lodi", "pomona", "sunnyvale"].includes(place.id) && !["2020 Block Groups", "2020 Blocks", "2020 Precincts", "2020 VTDs", "2020 Counties"].includes(state.unitsRecord.name)) {
      dataset = "<p><span>&#9432;</span> ".concat(populations.ndc_proj_2020);
    } else if (["2020 Block Groups", "2020 Blocks", "2020 Precincts", "2020 VTDs", "2020 Counties", "2021 Precincts", "2022 Precincts"].includes(state.unitsRecord.name)) {
      if ("2020 VTDs" === state.unitsRecord.name && ["virginia", "maryland", "pa_prison_adj"].includes(place.id) || ["california", "ca_SanDiego", "ca_contracosta", "ca_sutter", "menlo_park", "marinco"].includes(state.place.id)) {
        dataset = "<p><span>&#9432;</span> ".concat(populations.census20adj);
      } else if (["pa_adj"].includes(place.id)) {
        dataset = "<p><span>&#9432;</span> ".concat(populations.census20non_p_adj);
      } else if (["san_dimas", "ccsanitation2", "ca_pasadena", "sacramento", "ca_goleta", "ca_glendora", "arcadia", "la_mirada", "lakewood", "san_bruno", "ca_santabarbara", "ca_marin", "ca_kings", "ca_merced", "ca_fresno", "ca_sm_county", "ca_sanbenito", "laverne", "29palms", "yuba_city", "buenapark", "ca_arroyo", "ca_camarillo", "ca_chino", "ca_grover", "ca_nevada", "elcajon", "pomona", "ca_fremont", "encinitas", "oxnarduhsd", "ca_carlsbad", "ca_buellton", "ca_oceano"].includes(state.place.id)) {
        // 2020 - NDC - Prison
        dataset = "<p><span>&#9432;</span> ".concat(populations.ndc_prison_2020);
      } else if (["placentia", "anaheim", "ca_fresno_ci", "ca_cvista", "ca_stockton", "ca_sonoma", "ca_poway", "ca_torrance", "navajoco", "buena_park"].includes(state.place.id)) {
        // 2020 NDC un-adjusted population.
        dataset = "<p><span>&#9432;</span> ".concat(populations.ndc_2020);
      } else {
        // 2020 generic
        dataset = "<p><span>&#9432;</span> ".concat(populations.census20);
      }
    } else {
      dataset = "<p><span>&#9432;</span> ".concat(populations.census);
    }

    return dataset + " on <strong>".concat(units, "</strong>.</p>");
  }
  /**
   * Wrapper function which returns an immediately-callable directive which
   * populates the dataset-info sections in a nice way.
   * @param {State} state State object.
   * @returns {function(*): void}
   */


  function populateDatasetInfo(state) {
    return directive(function (promise) {
      return function () {
        Promise.resolve(promise).then(function () {
          // Retrieve the proper HTML elements.
          var elements = document.getElementsByClassName("dataset-info"),
              infoBoxes = Array.from(elements); // For each of the info boxes, retrieve and add the correct
          // description.

          infoBoxes.forEach(function (box) {
            box.innerHTML = datasetInfo(state);
          });
        });
      };
    })();
  }

  function colors(specifier) {
    var n = specifier.length / 6 | 0, colors = new Array(n), i = 0;
    while (i < n) colors[i] = "#" + specifier.slice(i * 6, ++i * 6);
    return colors;
  }

  function define(constructor, factory, prototype) {
    constructor.prototype = factory.prototype = prototype;
    prototype.constructor = constructor;
  }

  function extend(parent, definition) {
    var prototype = Object.create(parent.prototype);
    for (var key in definition) prototype[key] = definition[key];
    return prototype;
  }

  function Color() {}

  var darker = 0.7;
  var brighter = 1 / darker;

  var reI = "\\s*([+-]?\\d+)\\s*",
      reN = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
      reP = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
      reHex = /^#([0-9a-f]{3,8})$/,
      reRgbInteger = new RegExp("^rgb\\(" + [reI, reI, reI] + "\\)$"),
      reRgbPercent = new RegExp("^rgb\\(" + [reP, reP, reP] + "\\)$"),
      reRgbaInteger = new RegExp("^rgba\\(" + [reI, reI, reI, reN] + "\\)$"),
      reRgbaPercent = new RegExp("^rgba\\(" + [reP, reP, reP, reN] + "\\)$"),
      reHslPercent = new RegExp("^hsl\\(" + [reN, reP, reP] + "\\)$"),
      reHslaPercent = new RegExp("^hsla\\(" + [reN, reP, reP, reN] + "\\)$");

  var named = {
    aliceblue: 0xf0f8ff,
    antiquewhite: 0xfaebd7,
    aqua: 0x00ffff,
    aquamarine: 0x7fffd4,
    azure: 0xf0ffff,
    beige: 0xf5f5dc,
    bisque: 0xffe4c4,
    black: 0x000000,
    blanchedalmond: 0xffebcd,
    blue: 0x0000ff,
    blueviolet: 0x8a2be2,
    brown: 0xa52a2a,
    burlywood: 0xdeb887,
    cadetblue: 0x5f9ea0,
    chartreuse: 0x7fff00,
    chocolate: 0xd2691e,
    coral: 0xff7f50,
    cornflowerblue: 0x6495ed,
    cornsilk: 0xfff8dc,
    crimson: 0xdc143c,
    cyan: 0x00ffff,
    darkblue: 0x00008b,
    darkcyan: 0x008b8b,
    darkgoldenrod: 0xb8860b,
    darkgray: 0xa9a9a9,
    darkgreen: 0x006400,
    darkgrey: 0xa9a9a9,
    darkkhaki: 0xbdb76b,
    darkmagenta: 0x8b008b,
    darkolivegreen: 0x556b2f,
    darkorange: 0xff8c00,
    darkorchid: 0x9932cc,
    darkred: 0x8b0000,
    darksalmon: 0xe9967a,
    darkseagreen: 0x8fbc8f,
    darkslateblue: 0x483d8b,
    darkslategray: 0x2f4f4f,
    darkslategrey: 0x2f4f4f,
    darkturquoise: 0x00ced1,
    darkviolet: 0x9400d3,
    deeppink: 0xff1493,
    deepskyblue: 0x00bfff,
    dimgray: 0x696969,
    dimgrey: 0x696969,
    dodgerblue: 0x1e90ff,
    firebrick: 0xb22222,
    floralwhite: 0xfffaf0,
    forestgreen: 0x228b22,
    fuchsia: 0xff00ff,
    gainsboro: 0xdcdcdc,
    ghostwhite: 0xf8f8ff,
    gold: 0xffd700,
    goldenrod: 0xdaa520,
    gray: 0x808080,
    green: 0x008000,
    greenyellow: 0xadff2f,
    grey: 0x808080,
    honeydew: 0xf0fff0,
    hotpink: 0xff69b4,
    indianred: 0xcd5c5c,
    indigo: 0x4b0082,
    ivory: 0xfffff0,
    khaki: 0xf0e68c,
    lavender: 0xe6e6fa,
    lavenderblush: 0xfff0f5,
    lawngreen: 0x7cfc00,
    lemonchiffon: 0xfffacd,
    lightblue: 0xadd8e6,
    lightcoral: 0xf08080,
    lightcyan: 0xe0ffff,
    lightgoldenrodyellow: 0xfafad2,
    lightgray: 0xd3d3d3,
    lightgreen: 0x90ee90,
    lightgrey: 0xd3d3d3,
    lightpink: 0xffb6c1,
    lightsalmon: 0xffa07a,
    lightseagreen: 0x20b2aa,
    lightskyblue: 0x87cefa,
    lightslategray: 0x778899,
    lightslategrey: 0x778899,
    lightsteelblue: 0xb0c4de,
    lightyellow: 0xffffe0,
    lime: 0x00ff00,
    limegreen: 0x32cd32,
    linen: 0xfaf0e6,
    magenta: 0xff00ff,
    maroon: 0x800000,
    mediumaquamarine: 0x66cdaa,
    mediumblue: 0x0000cd,
    mediumorchid: 0xba55d3,
    mediumpurple: 0x9370db,
    mediumseagreen: 0x3cb371,
    mediumslateblue: 0x7b68ee,
    mediumspringgreen: 0x00fa9a,
    mediumturquoise: 0x48d1cc,
    mediumvioletred: 0xc71585,
    midnightblue: 0x191970,
    mintcream: 0xf5fffa,
    mistyrose: 0xffe4e1,
    moccasin: 0xffe4b5,
    navajowhite: 0xffdead,
    navy: 0x000080,
    oldlace: 0xfdf5e6,
    olive: 0x808000,
    olivedrab: 0x6b8e23,
    orange: 0xffa500,
    orangered: 0xff4500,
    orchid: 0xda70d6,
    palegoldenrod: 0xeee8aa,
    palegreen: 0x98fb98,
    paleturquoise: 0xafeeee,
    palevioletred: 0xdb7093,
    papayawhip: 0xffefd5,
    peachpuff: 0xffdab9,
    peru: 0xcd853f,
    pink: 0xffc0cb,
    plum: 0xdda0dd,
    powderblue: 0xb0e0e6,
    purple: 0x800080,
    rebeccapurple: 0x663399,
    red: 0xff0000,
    rosybrown: 0xbc8f8f,
    royalblue: 0x4169e1,
    saddlebrown: 0x8b4513,
    salmon: 0xfa8072,
    sandybrown: 0xf4a460,
    seagreen: 0x2e8b57,
    seashell: 0xfff5ee,
    sienna: 0xa0522d,
    silver: 0xc0c0c0,
    skyblue: 0x87ceeb,
    slateblue: 0x6a5acd,
    slategray: 0x708090,
    slategrey: 0x708090,
    snow: 0xfffafa,
    springgreen: 0x00ff7f,
    steelblue: 0x4682b4,
    tan: 0xd2b48c,
    teal: 0x008080,
    thistle: 0xd8bfd8,
    tomato: 0xff6347,
    turquoise: 0x40e0d0,
    violet: 0xee82ee,
    wheat: 0xf5deb3,
    white: 0xffffff,
    whitesmoke: 0xf5f5f5,
    yellow: 0xffff00,
    yellowgreen: 0x9acd32
  };

  define(Color, color, {
    copy: function(channels) {
      return Object.assign(new this.constructor, this, channels);
    },
    displayable: function() {
      return this.rgb().displayable();
    },
    hex: color_formatHex, // Deprecated! Use color.formatHex.
    formatHex: color_formatHex,
    formatHsl: color_formatHsl,
    formatRgb: color_formatRgb,
    toString: color_formatRgb
  });

  function color_formatHex() {
    return this.rgb().formatHex();
  }

  function color_formatHsl() {
    return hslConvert(this).formatHsl();
  }

  function color_formatRgb() {
    return this.rgb().formatRgb();
  }

  function color(format) {
    var m, l;
    format = (format + "").trim().toLowerCase();
    return (m = reHex.exec(format)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) // #ff0000
        : l === 3 ? new Rgb((m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), ((m & 0xf) << 4) | (m & 0xf), 1) // #f00
        : l === 8 ? rgba(m >> 24 & 0xff, m >> 16 & 0xff, m >> 8 & 0xff, (m & 0xff) / 0xff) // #ff000000
        : l === 4 ? rgba((m >> 12 & 0xf) | (m >> 8 & 0xf0), (m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), (((m & 0xf) << 4) | (m & 0xf)) / 0xff) // #f000
        : null) // invalid hex
        : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
        : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
        : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
        : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
        : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
        : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
        : named.hasOwnProperty(format) ? rgbn(named[format]) // eslint-disable-line no-prototype-builtins
        : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0)
        : null;
  }

  function rgbn(n) {
    return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
  }

  function rgba(r, g, b, a) {
    if (a <= 0) r = g = b = NaN;
    return new Rgb(r, g, b, a);
  }

  function rgbConvert(o) {
    if (!(o instanceof Color)) o = color(o);
    if (!o) return new Rgb;
    o = o.rgb();
    return new Rgb(o.r, o.g, o.b, o.opacity);
  }

  function rgb(r, g, b, opacity) {
    return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
  }

  function Rgb(r, g, b, opacity) {
    this.r = +r;
    this.g = +g;
    this.b = +b;
    this.opacity = +opacity;
  }

  define(Rgb, rgb, extend(Color, {
    brighter: function(k) {
      k = k == null ? brighter : Math.pow(brighter, k);
      return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
    },
    darker: function(k) {
      k = k == null ? darker : Math.pow(darker, k);
      return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
    },
    rgb: function() {
      return this;
    },
    displayable: function() {
      return (-0.5 <= this.r && this.r < 255.5)
          && (-0.5 <= this.g && this.g < 255.5)
          && (-0.5 <= this.b && this.b < 255.5)
          && (0 <= this.opacity && this.opacity <= 1);
    },
    hex: rgb_formatHex, // Deprecated! Use color.formatHex.
    formatHex: rgb_formatHex,
    formatRgb: rgb_formatRgb,
    toString: rgb_formatRgb
  }));

  function rgb_formatHex() {
    return "#" + hex(this.r) + hex(this.g) + hex(this.b);
  }

  function rgb_formatRgb() {
    var a = this.opacity; a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
    return (a === 1 ? "rgb(" : "rgba(")
        + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", "
        + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", "
        + Math.max(0, Math.min(255, Math.round(this.b) || 0))
        + (a === 1 ? ")" : ", " + a + ")");
  }

  function hex(value) {
    value = Math.max(0, Math.min(255, Math.round(value) || 0));
    return (value < 16 ? "0" : "") + value.toString(16);
  }

  function hsla(h, s, l, a) {
    if (a <= 0) h = s = l = NaN;
    else if (l <= 0 || l >= 1) h = s = NaN;
    else if (s <= 0) h = NaN;
    return new Hsl(h, s, l, a);
  }

  function hslConvert(o) {
    if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
    if (!(o instanceof Color)) o = color(o);
    if (!o) return new Hsl;
    if (o instanceof Hsl) return o;
    o = o.rgb();
    var r = o.r / 255,
        g = o.g / 255,
        b = o.b / 255,
        min = Math.min(r, g, b),
        max = Math.max(r, g, b),
        h = NaN,
        s = max - min,
        l = (max + min) / 2;
    if (s) {
      if (r === max) h = (g - b) / s + (g < b) * 6;
      else if (g === max) h = (b - r) / s + 2;
      else h = (r - g) / s + 4;
      s /= l < 0.5 ? max + min : 2 - max - min;
      h *= 60;
    } else {
      s = l > 0 && l < 1 ? 0 : h;
    }
    return new Hsl(h, s, l, o.opacity);
  }

  function hsl(h, s, l, opacity) {
    return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
  }

  function Hsl(h, s, l, opacity) {
    this.h = +h;
    this.s = +s;
    this.l = +l;
    this.opacity = +opacity;
  }

  define(Hsl, hsl, extend(Color, {
    brighter: function(k) {
      k = k == null ? brighter : Math.pow(brighter, k);
      return new Hsl(this.h, this.s, this.l * k, this.opacity);
    },
    darker: function(k) {
      k = k == null ? darker : Math.pow(darker, k);
      return new Hsl(this.h, this.s, this.l * k, this.opacity);
    },
    rgb: function() {
      var h = this.h % 360 + (this.h < 0) * 360,
          s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
          l = this.l,
          m2 = l + (l < 0.5 ? l : 1 - l) * s,
          m1 = 2 * l - m2;
      return new Rgb(
        hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
        hsl2rgb(h, m1, m2),
        hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
        this.opacity
      );
    },
    displayable: function() {
      return (0 <= this.s && this.s <= 1 || isNaN(this.s))
          && (0 <= this.l && this.l <= 1)
          && (0 <= this.opacity && this.opacity <= 1);
    },
    formatHsl: function() {
      var a = this.opacity; a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
      return (a === 1 ? "hsl(" : "hsla(")
          + (this.h || 0) + ", "
          + (this.s || 0) * 100 + "%, "
          + (this.l || 0) * 100 + "%"
          + (a === 1 ? ")" : ", " + a + ")");
    }
  }));

  /* From FvD 13.37, CSS Color Module Level 3 */
  function hsl2rgb(h, m1, m2) {
    return (h < 60 ? m1 + (m2 - m1) * h / 60
        : h < 180 ? m2
        : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60
        : m1) * 255;
  }

  function basis(t1, v0, v1, v2, v3) {
    var t2 = t1 * t1, t3 = t2 * t1;
    return ((1 - 3 * t1 + 3 * t2 - t3) * v0
        + (4 - 6 * t2 + 3 * t3) * v1
        + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2
        + t3 * v3) / 6;
  }

  function basis$1(values) {
    var n = values.length - 1;
    return function(t) {
      var i = t <= 0 ? (t = 0) : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n),
          v1 = values[i],
          v2 = values[i + 1],
          v0 = i > 0 ? values[i - 1] : 2 * v1 - v2,
          v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
      return basis((t - i / n) * n, v0, v1, v2, v3);
    };
  }

  function rgbSpline(spline) {
    return function(colors) {
      var n = colors.length,
          r = new Array(n),
          g = new Array(n),
          b = new Array(n),
          i, color;
      for (i = 0; i < n; ++i) {
        color = rgb(colors[i]);
        r[i] = color.r || 0;
        g[i] = color.g || 0;
        b[i] = color.b || 0;
      }
      r = spline(r);
      g = spline(g);
      b = spline(b);
      color.opacity = 1;
      return function(t) {
        color.r = r(t);
        color.g = g(t);
        color.b = b(t);
        return color + "";
      };
    };
  }

  var rgbBasis = rgbSpline(basis$1);

  function ramp(scheme) {
    return rgbBasis(scheme[scheme.length - 1]);
  }

  var scheme$2 = new Array(3).concat(
    "ef8a62f7f7f767a9cf",
    "ca0020f4a58292c5de0571b0",
    "ca0020f4a582f7f7f792c5de0571b0",
    "b2182bef8a62fddbc7d1e5f067a9cf2166ac",
    "b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac",
    "b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac",
    "b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac",
    "67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061",
    "67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061"
  ).map(colors);

  var interpolateRdBu = ramp(scheme$2);

  var scheme$1 = new Array(3).concat(
    "deebf79ecae13182bd",
    "eff3ffbdd7e76baed62171b5",
    "eff3ffbdd7e76baed63182bd08519c",
    "eff3ffc6dbef9ecae16baed63182bd08519c",
    "eff3ffc6dbef9ecae16baed64292c62171b5084594",
    "f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594",
    "f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b"
  ).map(colors);

  var interpolateBlues = ramp(scheme$1);

  var scheme = new Array(3).concat(
    "fee0d2fc9272de2d26",
    "fee5d9fcae91fb6a4acb181d",
    "fee5d9fcae91fb6a4ade2d26a50f15",
    "fee5d9fcbba1fc9272fb6a4ade2d26a50f15",
    "fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d",
    "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d",
    "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d"
  ).map(colors);

  var interpolateReds = ramp(scheme);

  var _templateObject$4, _templateObject2$4, _templateObject3$2, _templateObject4$1, _templateObject5$1, _templateObject6$1, _templateObject7$1;

  function HeaderRow(variableNames, left_corner) {
    return html(_templateObject$4 || (_templateObject$4 = _taggedTemplateLiteral(["\n        <tr>\n            ", "\n            ", "\n        </tr>\n    "])), left_corner ? "" : html(_templateObject2$4 || (_templateObject2$4 = _taggedTemplateLiteral(["<th></th>"]))), variableNames.map(function (name) {
      return html(_templateObject3$2 || (_templateObject3$2 = _taggedTemplateLiteral(["\n                        <th class=\"data-table__column-heading\" colSpan=", ">\n                            ", "\n                        </th>\n                    "])), variableNames.length === 1 ? 2 : 1, name);
    }));
  }

  function Cell(_ref) {
    var content = _ref.content,
        style = _ref.style;
    return html(_templateObject4$1 || (_templateObject4$1 = _taggedTemplateLiteral(["\n        <td class=\"ui-data data-table__cell\" style=", ">", "</td>\n    "])), style, content);
  }

  var DataTable = function DataTable(header, rows) {
    var left_corner = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    return html(_templateObject5$1 || (_templateObject5$1 = _taggedTemplateLiteral(["\n    <table class=\"data-table\">\n        ", "\n        <tbody>\n            ", "\n        </tbody>\n    </table>\n"])), header ? html(_templateObject6$1 || (_templateObject6$1 = _taggedTemplateLiteral(["\n                  <thead>\n                      ", "\n                  </thead>\n              "])), HeaderRow(header, left_corner)) : "", rows.map(function (row) {
      return html(_templateObject7$1 || (_templateObject7$1 = _taggedTemplateLiteral(["\n                        <tr>\n                            <th class=\"data-table__row-heading\">\n                                ", "\n                            </th>\n                            ", "\n                        </tr>\n                    "])), row.label, row.entries.map(function (entry) {
        return Cell(entry);
      }));
    }));
  };

  // TODO: Define a color rule interface, for extensibility and modularity.

  /**
   * Default color scheme for the two major parties.
   */

  var partyRGBColors = {
    Democratic: [25, 118, 210],
    Republican: [211, 47, 47],
    Independent: [11, 102, 35],
    // PR
    "Nuevo Progresista": [102, 102, 204],
    "Popular Democrático": [255, 102, 51],
    // Chicago
    "Rahm Emanuel": [102, 102, 204],
    "Jesus \u201CChuy\u201D Garc\xEDa": [90, 180, 122],
    "Lori Lightfoot": [102, 102, 204],
    "Toni Preckwinkle": [90, 180, 122],
    // rent bipolar
    'Owner-occupied': [250, 179, 71],
    'Renter-occupied': [90, 180, 122]
  };
  /**
   * ColorBrewer colors for all non-major parties.
   */

  var vizColors = [[102, 194, 165], [252, 141, 98], [141, 160, 203], [231, 138, 195], [166, 216, 84]];
  var cachedColors = {};
  /**
   * Returns a color for the given party.
   * @param {String} name the party's name (e.g. Democratic)
   */

  function getPartyRGBColors(name) {
    if (partyRGBColors.hasOwnProperty(name)) {
      return partyRGBColors[name];
    }

    if (name.includes("(Dem)") || name.includes("Democratic")) {
      return partyRGBColors["Democratic"];
    }

    if (name.includes("(Rep)") || name.includes("Republican")) {
      return partyRGBColors["Republican"];
    }

    if (name.includes("(Ind)") || name.includes("Independent")) {
      return partyRGBColors["Independent"];
    }

    if (name.includes("Nuevo Progresista")) {
      return partyRGBColors["Nuevo Progresista"];
    }

    if (name.includes("Popular Democrático")) {
      return partyRGBColors["Popular Democrático"];
    }

    if (cachedColors.hasOwnProperty(name)) {
      return cachedColors[name];
    }

    var color = vizColors.shift();
    vizColors.push(color);
    cachedColors[name] = color;
    return color;
  }

  /**
   * Get the style property for a cell in the ElectionResults table,
   * based on which party's vote percentage is written in it and
   * what that percentage is.
   *
   * @todo Generalize this for when the parties are not just
   *  "Republican" and "Democratic"
   *
   * @param {number} percent
   * @param {Subgroup} party
   */

  function getCellStyle$1(percent, party) {
    if ((party.name === "Democratic" || party.name.includes("(Dem)")) && percent > 0.5) {
      return "text-align: center; background: ".concat(interpolateRdBu(percent), "; color: ").concat(percent > 0.9 ? "white" : "black");
    } else if ((party.name === "Republican" || party.name.includes("(Rep)")) && percent > 0.5) {
      return "text-align: center; background: ".concat(interpolateRdBu(1 - percent), "; color: ").concat(percent > 0.9 ? "white" : "black");
    }

    return "text-align: center; background: #f9f9f9";
  }
  function getCell(party, part) {
    var percent;

    if (part !== undefined && part !== null) {
      percent = party.getFractionInPart(part.id);
    } else {
      percent = party.getOverallFraction();
    }

    return {
      content: "".concat(roundToDecimal(percent * 100, 2), "%"),
      style: getCellStyle$1(percent, party)
    };
  }
  function getCellSeatShare(party, election) {
    var won = election.getSeatsWonParty(party);
    var total = party.data.length;
    return {
      content: "".concat(roundToDecimal(won / total * 100, 2), "%"),
      style: getCellStyle$1(won / total, party)
    };
  }
  function parseElectionName(election) {
    var yr = election.substring(0, 4);
    if (isNaN(yr)) return election;
    if (election.includes('Presidential') || election.includes('President')) return yr + " PRES";
    if (election.includes('Senate')) return yr + " SEN";
    if (election.includes('Governor')) return yr + " GOV";
    if (election.includes('Secretary of State')) return yr + " SoS";
    if (election.includes("Attorney General")) return yr + " AG";
    if (election.includes('Treasurer')) return yr + " TRE";
    return election;
  }

  var _templateObject$3, _templateObject2$3;
  /**
   * @description Easy creation of checkbox toggles.
   * @param {String} label Text label adjoining the checkbox.
   * @param {Boolean} checked Is this checkbox checked by default?
   * @param {Function} onChange Function describing what happens when the box is checked/unchecked.
   * @param {String} optionalId Optional unique HTML identifier given to the HTML entity.
   * @param {String} optionalClass Optional class identifier.
   * @returns {HTMLTemplateElement} Renderable lit-html template element.
   */

  function toggle(label, checked, onChange) {
    var optionalId = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
    var optionalClass = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "";
    var link = '';

    if (label.indexOf("link:") > -1) {
      link = html(_templateObject$3 || (_templateObject$3 = _taggedTemplateLiteral(["<span>&nbsp;&nbsp;-&nbsp;&nbsp;<a href=\"", "\" target=\"_blank\">\n        \u24D8\n      </a></span>"])), label.split(' link:')[1]);
      label = label.split(' link:')[0];
    }

    return html(_templateObject2$3 || (_templateObject2$3 = _taggedTemplateLiteral(["\n        <label class=\"toolbar-checkbox ", "\">\n            <input\n                id=\"", "\"\n                type=\"checkbox\"\n                ?checked=\"", "\"\n                @change=\"", "\"\n            />\n            ", "", "\n        </label>\n    "])), optionalClass, optionalId || null, checked, function (e) {
      return onChange(e.target.checked);
    }, label, link);
  }

  var UIStateStore = /*#__PURE__*/function () {
    function UIStateStore(reducer, initialState) {
      _classCallCheck(this, UIStateStore);

      this.reducer = reducer;
      this.state = initialState;
      this.subscribers = [];
      this.DEBUG = Boolean(localStorage.getItem("DEBUG"));
      bindAll(["dispatch", "subscribe"], this);
    }

    _createClass(UIStateStore, [{
      key: "dispatch",
      value: function dispatch(action) {
        var _this = this;

        if (this.DEBUG) {
          console.log(action);
        }

        var nextState = this.reducer(this.state, action);

        if (nextState !== this.state) {
          this.state = nextState;
          this.subscribers.forEach(function (subscriber) {
            return subscriber(_this.state, _this.dispatch);
          });
        }
      }
    }, {
      key: "subscribe",
      value: function subscribe(subscriber) {
        this.subscribers.push(subscriber);
      }
    }]);

    return UIStateStore;
  }();

  var handlers$2 = {
    toggleOpen: function toggleOpen(state, action) {
      return _objectSpread2(_objectSpread2({}, state), {}, _defineProperty({}, action.chart, _objectSpread2(_objectSpread2({}, state[action.chart]), {}, {
        isOpen: !state[action.chart].isOpen
      })));
    },
    openChart: function openChart(state, action) {
      return _objectSpread2(_objectSpread2({}, state), {}, _defineProperty({}, action.chart, _objectSpread2(_objectSpread2({}, state[action.chart]), {}, {
        isOpen: true
      })));
    },
    addChart: function addChart(state, action) {
      return _objectSpread2(_objectSpread2({}, state), {}, _defineProperty({}, action.chart, {
        isOpen: action.isOpen === undefined ? true : action.isOpen,
        activeSubgroupIndices: action.activeSubgroupIndices,
        activePartIndex: action.activePartIndex
      }));
    },
    selectSubgroup: function selectSubgroup(state, action) {
      return _objectSpread2(_objectSpread2({}, state), {}, _defineProperty({}, action.chart, _objectSpread2(_objectSpread2({}, state[action.chart]), {}, {
        activeSubgroupIndices: replace(state[action.chart].activeSubgroupIndices, action.subgroupPosition, action.subgroupIndex)
      })));
    },
    selectPart: function selectPart(state, action) {
      return _objectSpread2(_objectSpread2({}, state), {}, _defineProperty({}, action.chart, _objectSpread2(_objectSpread2({}, state[action.chart]), {}, {
        activePartIndex: action.partIndex
      })));
    },
    selectAgeView: function selectAgeView(state, action) {
      return _objectSpread2(_objectSpread2({}, state), {}, _defineProperty({}, action.chart, _objectSpread2(_objectSpread2({}, state[action.chart]), {}, {
        ageView: action.ageView
      })));
    }
  };
  var actions = createActions(handlers$2);
  var chartsReducer = createReducer(handlers$2);

  var handlers$1 = {
    changeElection: function changeElection(state, action) {
      return _objectSpread2(_objectSpread2({}, state), {}, {
        activeElectionIndex: action.index
      });
    }
  };
  createActions(handlers$1);
  var electionsReducer = createReducer(handlers$1);

  var handlers = {
    changeTab: function changeTab(state, action) {
      return _objectSpread2(_objectSpread2({}, state), {}, {
        activeTab: action.id
      });
    },
    selectTool: function selectTool(state, action) {
      return _objectSpread2(_objectSpread2({}, state), {}, {
        activeTool: action.id
      });
    },
    openDropdownMenu: function openDropdownMenu(state) {
      return _objectSpread2(_objectSpread2({}, state), {}, {
        dropdownMenuOpen: true
      });
    },
    closeDropdownMenu: function closeDropdownMenu(state) {
      return _objectSpread2(_objectSpread2({}, state), {}, {
        dropdownMenuOpen: false
      });
    }
  };
  createActions(handlers);
  var toolbarReducer = createReducer(handlers);

  var reducer = combineReducers({
    toolbar: toolbarReducer,
    elections: electionsReducer,
    charts: chartsReducer
  });

  var ClassList = /*#__PURE__*/function () {
    function ClassList(element) {
      _classCallCheck(this, ClassList);

      this.classes = new Set();
      this.changed = false;
      this.element = element;
      var classList = (element.getAttribute('class') || '').split(/\s+/);

      var _iterator = _createForOfIteratorHelper(classList),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var cls = _step.value;
          this.classes.add(cls);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }

    _createClass(ClassList, [{
      key: "add",
      value: function add(cls) {
        this.classes.add(cls);
        this.changed = true;
      }
    }, {
      key: "remove",
      value: function remove(cls) {
        this.classes.delete(cls);
        this.changed = true;
      }
    }, {
      key: "commit",
      value: function commit() {
        if (this.changed) {
          var classString = '';
          this.classes.forEach(function (cls) {
            return classString += cls + ' ';
          });
          this.element.setAttribute('class', classString);
        }
      }
    }]);

    return ClassList;
  }();
  /**
   * Stores the ClassInfo object applied to a given AttributePart.
   * Used to unset existing values when a new ClassInfo object is applied.
   */


  var previousClassesCache = new WeakMap();
  /**
   * A directive that applies CSS classes. This must be used in the `class`
   * attribute and must be the only part used in the attribute. It takes each
   * property in the `classInfo` argument and adds the property name to the
   * element's `class` if the property value is truthy; if the property value is
   * falsey, the property name is removed from the element's `class`. For example
   * `{foo: bar}` applies the class `foo` if the value of `bar` is truthy.
   * @param classInfo {ClassInfo}
   */

  var classMap = directive(function (classInfo) {
    return function (part) {
      if (!(part instanceof AttributePart) || part instanceof PropertyPart || part.committer.name !== 'class' || part.committer.parts.length > 1) {
        throw new Error('The `classMap` directive must be used in the `class` attribute ' + 'and must be the only part in the attribute.');
      }

      var committer = part.committer;
      var element = committer.element;
      var previousClasses = previousClassesCache.get(part);

      if (previousClasses === undefined) {
        // Write static classes once
        // Use setAttribute() because className isn't a string on SVG elements
        element.setAttribute('class', committer.strings.join(' '));
        previousClassesCache.set(part, previousClasses = new Set());
      }

      var classList = element.classList || new ClassList(element); // Remove old classes that no longer apply
      // We use forEach() instead of for-of so that re don't require down-level
      // iteration.

      previousClasses.forEach(function (name) {
        if (!(name in classInfo)) {
          classList.remove(name);
          previousClasses.delete(name);
        }
      }); // Add or remove classes based on their classMap value

      for (var name in classInfo) {
        var value = classInfo[name];

        if (value != previousClasses.has(name)) {
          // We explicitly want a loose truthy check of `value` because it seems
          // more convenient that '' and 0 are skipped.
          if (value) {
            classList.add(name);
            previousClasses.add(name);
          } else {
            classList.remove(name);
            previousClasses.delete(name);
          }
        }
      }

      if (typeof classList.commit === 'function') {
        classList.commit();
      }
    };
  });

  var _templateObject$2, _templateObject2$2, _templateObject3$1;

  function Reveal(content, isOpen) {
    return html(_templateObject$2 || (_templateObject$2 = _taggedTemplateLiteral(["\n        <div class=", ">\n            ", "\n        </div>\n    "])), classMap({
      reveal: true,
      "reveal--hidden": !isOpen
    }), isOpen ? content : "");
  }

  function headerWithToggle(text, isOpen, onChange) {
    return html(_templateObject2$2 || (_templateObject2$2 = _taggedTemplateLiteral(["\n        <div class=\"header-with-toggle\" @click=", ">\n            <button\n                class=", "\n            >\n                <i class=\"material-icons\">arrow_right</i>\n            </button>\n            <h4 class=\"header-with-toggle__header\">", "</h4>\n        </div>\n    "])), onChange, classMap({
      "header-with-toggle__icon": true,
      open: isOpen
    }), text);
  }

  function RevealSection(chartName, content, isOpen, onToggle) {
    return html(_templateObject3$1 || (_templateObject3$1 = _taggedTemplateLiteral(["\n        ", "\n        ", "\n    "])), headerWithToggle(chartName, isOpen, onToggle), Reveal(content, isOpen));
  }

  var _templateObject$1, _templateObject2$1;

  var Analyzer = /*#__PURE__*/function () {
    function Analyzer(state, mapState, container) {
      _classCallCheck(this, Analyzer);

      this.render = this.render.bind(this);
      this.mapState = mapState;
      this.container = container;
      this.state = state;
      var activeTab = "criteria";

      if (localStorage) {
        activeTab = localStorage.getItem("jsonload_viewstate") || activeTab;
        localStorage.removeItem("jsonload_viewstate");
      }

      this.store = new UIStateStore(reducer, {
        toolbar: {
          activeTab: activeTab,
          dropdownMenuOpen: false
        },
        elections: {
          activeElectionIndex: 0
        },
        charts: {}
      });
      this.sections = [];
      this.store.subscribe(this.render);
      this.state.subscribe(this.render);
    }

    _createClass(Analyzer, [{
      key: "addRevealSection",
      value: function addRevealSection(name, element, options) {
        if (options === undefined || options === null) {
          options = {};
        }

        this.store.dispatch( // default to closed
        actions.addChart(_objectSpread2({
          chart: name,
          isOpen: false
        }, options)));
        this.sections.push(function (uiState, dispatch) {
          return html(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteral(["\n                <section class=\"analyzer-section\">\n                    ", "\n                </section>\n            "])), RevealSection(name, element(uiState, dispatch), uiState.charts[name].isOpen, function () {
            return dispatch(actions.toggleOpen({
              chart: name
            }));
          }));
        });
      }
    }, {
      key: "render",
      value: function render$1() {
        var _this = this;

        var result = html(_templateObject2$1 || (_templateObject2$1 = _taggedTemplateLiteral(["\n        <h2>Districting Plan Metrics</h2>\n        ", ""])), this.sections.map(function (section) {
          return section(_this.store.state, _this.store.dispatch);
        }));

        render(result, this.container);
      }
    }]);

    return Analyzer;
  }();

  var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34, _templateObject35, _templateObject36, _templateObject37, _templateObject38, _templateObject39, _templateObject40, _templateObject41;

  var counties = false;
  /**
   * @desc Retrieves the proper map style; uses the same rules as the Editor.
   * @param {Object} context Context object retrieved from the database.
   * @returns {string} Proper map formatting style.
   */

  function getMapStyle(context) {
    return "mapbox://styles/mapbox/light-v10";
  }
  /**
   * @desc Renders the provided plan in the correct Pane.
   * @param {String} container HTML id tag for the Map's container element.
   * @param {object} context Plan context object as retrieved from the database.
   * @returns {undefined}
   */


  function renderMap(container, context) {
    // Create a MapState object from the context retrieved from the database and
    // provide it with the correct arguments to render.
    var mapState = new MapState("map", {
      bounds: context.units.bounds,
      fitBoundsOptions: {
        padding: {
          top: 50,
          right: 50,
          left: 50,
          bottom: 50
        }
      },
      dragPan: true
    }, getMapStyle()); // Set a callback for when the map has loaded from the database

    var state;
    mapState.map.on("load", function () {
      state = new State(mapState.map, null, context, function () {});
      if (context.assignment) state.plan.assignment = context.assignment;
      state.units.map.dragPan.enable();
      state.render();
      renderRight(new DisplayPane({
        id: "analysis-right"
      }), context, state, mapState);
    });
  }
  /**
   * @desc Renders the left Pane to the desired content; in this case, that's the
   * map.
   * @param {DisplayPane} pane The DisplayPane om the left.
   * @param {Object} context Context object.
   * @returns {undefined}
   */


  function renderLeft(pane, context) {
    // Set the inner HTML of the Pane.
    pane.inner = html(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        <div class=\"mapcontainer\">\n            <div id=\"map\" class=\"map\"></div>\n        </div>\n    "]))); // Render the template to the Pane, render the Map, and close the
    // Modal.

    pane.render();
    renderMap("map", context);
  }
  /**
   * @desc Renders the right Pane
   * @param {DisplayPane} pane The DisplayPane on the right.
   * @param {Object} context Context object.
   * @returns {undefined}
   */


  function renderRight(pane, context, state, mapState) {
    var units = state.unitsRecord.id;
    var stateName = state.place.state;
    var assign = Object.fromEntries(Object.entries(state.plan.assignment).map(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          k = _ref2[0],
          v = _ref2[1];

      return [k, Array.isArray(v) ? v[0] : v];
    }));
    var two_party_elects = state.elections.filter(function (e) {
      return e.subgroups.every(function (c) {
        return ['d', 'r'].includes(c.name.toLowerCase()[0]);
      });
    });
    var elections = two_party_elects.map(function (e) {
      var elect = [["name", e.name], ["candidates", e.subgroups.map(function (c) {
        var candidates = [["name", c.name], ["key", c.key]];
        return Object.fromEntries(candidates);
      })]];
      return Object.fromEntries(elect);
    });
    var GERRYCHAIN_URL = "https://gvd4917837.execute-api.us-east-1.amazonaws.com";
    fetch(GERRYCHAIN_URL + "/evaluation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "state": stateName,
        "units": units,
        "assignment": assign,
        "elections": elections
      })
    }).then(function (res) {
      return res.json();
    }).catch(function (e) {
      return console.error(e);
    }).then(function (data) {
      console.log(data);

      if (data.error) {
        render(html(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["Analysis unavailable for ", " \n                        on ", ".<br/>\n                        Error text: ", "."])), state.place.state, state.unitsRecord.unitType.toLowerCase(), data.error), document.getElementById('analysis-right'));
        return;
      }

      var municipalities = ['ma'].includes(state.place.id);
      var innerTemplate = document.createElement("div");
      innerTemplate.className = "analysis--inner";
      innerTemplate.id = "analysis-area";
      innerTemplate.innerHTML = "Loading.";
      pane.pane.append(innerTemplate);
      var analyzer = new Analyzer(state, mapState, innerTemplate);
      analyzer.addRevealSection("Basics", function (uiState, dispatch) {
        return overview_section(state, data.contiguity, data.split, data.num_units);
      });
      analyzer.addRevealSection("Election Results and Partisanship", function (uiState, dispatch) {
        return election_section(state, data.partisanship);
      });
      analyzer.addRevealSection("Compactness", function (uiState, dispatch) {
        return compactness_section(state, data.cut_edges, data.polsbypopper);
      });
      data.counties == -1 ? "" : analyzer.addRevealSection(municipalities ? "Municipality Splits" : "County Splits", function (uiState, dispatch) {
        return county_section(state, data.counties, municipalities);
      });
      analyzer.render();
    });
  }
  /** FUNCTIONS FOR LOADING THE PAGE */


  function getPlanURLFromQueryParam() {
    if (window.location.search.includes("url=")) {
      return window.location.search.split("url=")[1].split('&')[0].split("#")[0];
    } else {
      return "";
    }
  }

  function getPlanContext() {
    var planURL = getPlanURLFromQueryParam();
    var finalURLpage = window.location.pathname.split("/").slice(-1)[0];

    if (planURL.length > 0) {
      return loadPlanFromURL(planURL).catch(function (e) {
        // eslint-disable-next-line no-console
        console.error("Could not load plan from ".concat(planURL));
        navigateTo("/evaluation"); // eslint-disable-next-line no-console

        console.error(e);
      });
    } else if (!["edit", "coi", "plan", "eval"].includes(finalURLpage.toLowerCase())) {
      // remove token; save a new plan
      localStorage.removeItem("districtr_token_" + finalURLpage); // load JSON plan from DB

      if (isNaN(finalURLpage * 1)) {
        // original _id plans
        finalURLpage = '&_id=' + finalURLpage;
      }

      return loadPlanFromURL("/.netlify/functions/planRead?id=".concat(finalURLpage)).catch(function (e) {
        console.error("Could not load plan ".concat(finalURLpage, " from database"));
        navigateTo("/evaluation");
        console.error(e);
      });
    } else {
      return Promise.resolve(getContextFromStorage());
    }
  }
  /**
   * @desc Renders the Analysis view.
   * @returns {undefined}
   */


  function renderAnalysisView() {
    // Create left display pane.    
    // hold on creating the right one, bc we need the mapstate first
    var left = new DisplayPane({
      id: "analysis-left"
    });
    getPlanContext().then(function (context) {
      return renderLeft(left, context);
    });
  } // Functions for formating a non-election table.

  function getBackgroundColor(value, party) {
    // console.log(party);
    // console.log(value);
    var buffer = 0.001;
    var p = party.toLowerCase()[0];

    if (p === "d" && value > 0 + buffer || p === 'r' && value < 0 - buffer) {
      return interpolateBlues(Math.abs(value));
    }

    if (p === "r" && value > 0 + buffer || p === 'd' && value < 0 - buffer) {
      return interpolateReds(Math.abs(value));
    }

    return "#f9f9f9";
  }

  function getCellStyle(value, party) {
    var background = getBackgroundColor(value, party);
    var color = Math.abs(value) > 0.8 ? "white" : "black";
    return "background: ".concat(background, "; color: ").concat(color);
  }

  function getCellBasic(value, decimals, party) {
    var simple = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    // const value = subgroup.values(part.id)
    return {
      content: "".concat(roundToDecimal(value * 100, decimals ? 1 : 0), "%"),
      style: (simple ? "color: black" : getCellStyle(value, party)) + "; text-align: center;"
    };
  }
  /***** ANALYSIS SECTIONS ******/
  // Overview Section


  function overview_section(state, contig, problems, num_tiles) {
    var planURL = getPlanURLFromQueryParam();
    var finalURLpage = window.location.pathname.split("/").slice(-1)[0];
    var edit_url = planURL.length > 0 ? "/edit?url=" + planURL : "/edit/" + finalURLpage; // plan details

    var drawn = state.population.total.data.map(function (x) {
      return x > 0 ? 1 : 0;
    }).reduce(function (a, b) {
      return a + b;
    }, 0),
        dist_num = state.plan.problem.numberOfParts;
    var details = html(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["<div>\n        ", "\n        The plan type is ", " for ", " (", " districts).\n        "])), state.unitsRecord.unitType.toLowerCase() === "vtds" ? html(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["(VTDs, also called \u201Cvoting\n        tabulation districts\u201D or \u201Cvoting districts,\u201D are the closest approximation of electoral\n        precincts in Census geography.)<br/>"]))) : null, state.plan.problem.pluralNoun, state.place.name, dist_num); // missing units

    var missing = num_tiles - Object.keys(state.plan.assignment).length;
    var unassigned_section = html(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n        ", " ", " districts are present.<br/>\n        ", " ", " / ", "\n        ", " are assigned to a district.<br/>\n        ", "\n        "])), dist_num == drawn ? "All" : "", drawn, missing == 0 ? "All" : "", Object.keys(state.plan.assignment).length, num_tiles, state.unitsRecord.unitType, missing == 0 ? html(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["This plan is <strong>complete</strong>."]))) : html(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["This plan is <strong>incomplete</strong>.  Be sure all districts are\n                            present and all units are assigned to complete the plan \u2013\n                            <a href=\"", "\" target=\"_blank\">open in Districtr</a> to continue editing."])), edit_url)); // contiguity

    var contig_section = problems ? html(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n            A plan is called contiguous if every district is internally connected.\n            This plan appears to be ", "\n            Note that contiguity can be subtle because of bodies of water and because of\n            disconnected units.  <a href=\"", "\" target=\"_blank\">Open in Districtr</a> to examine the contiguity gaps.\n            "])), contig ? html(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["<strong>contiguous</strong>."]))) : html(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["<strong>discontiguous</strong>.<br/>\n                The following districts may have contiguity gaps:\n                \n                <div class=\"district-row\" style=\"display:block\">\n                    ", "</div>"])), state.parts.map(function (part, dnum) {
      return html(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n                        <span\n                            class=\"part-number\"\n                            style=\"background:", ";\n                            display:", "\"\n                        >\n                            ", "\n                        </span>"])), districtColors[dnum % districtColors.length].hex, problems.includes(dnum) ? "inline-flex" : "none", Number(dnum) + 1);
    })), edit_url) : html(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["Contiguity status not available for ", "."])), state.place.name); // population deviation

    var deviations = state.population.deviations();
    var min = deviations[0],
        max = deviations[0],
        argmin = 0,
        argmax = 0;

    for (var d = 1; d < deviations.length; d++) {
      if (deviations[d] < min) {
        min = deviations[d];
        argmin = d;
      }

      if (deviations[d] > max) {
        max = deviations[d];
        argmax = d;
      }
    }

    var pop_section = html(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["<div style=\"text-align:left\">\n    The ideal size of a district is arrived at by dividing the total population of the state equally\n    into the specified number of districts. Population deviation of a plan is measured as the\n    largest amount that any district differs from ideal size. Legislative plans should typically have\n    individual deviations under \xB1 5%, which ensures a top-to-bottom deviation of under 10%.\n    Congressional plans are typically more tightly balanced.<br/>\n    Your plan's most populous district is district  \n    <span\n        class=\"part-number\"\n        style=\"background:", ";\n        display:inline-flex\"\n    >\n        ", "\n    </span> (+", "%) and your plan's least populous district is district  \n    <span\n        class=\"part-number\"\n        style=\"background:", ";\n        display:inline-flex\"\n    >\n    ", "\n    </span> (", "%).<br/>"])), districtColors[argmax % districtColors.length].hex, Number(argmax) + 1, roundToDecimal(max * 100, 2), districtColors[argmin % districtColors.length].hex, Number(argmin) + 1, roundToDecimal(min * 100, 2)); // aggregate all the parts

    return html(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n    <h4 text-align=\"center\">Data, Units, and Plan Type</h4>\n    <div class=\"dataset-info\">\n        ", "\n    </div>\n    ", "<br/>\n    <h4 text-align=\"center\">Completeness</h4>\n    ", "<br/><br/>\n    <h4 text-align=\"center\">Contiguity</h4>\n    ", "<br/><br/>\n    <h4 text-align=\"center\">Population Deviation</h4>\n    ", "</div>"])), populateDatasetInfo(state), details, unassigned_section, contig_section, pop_section);
  } // Election Results Section


  function election_section(state, partisanship) {
    // let elections = state.elections;
    var elections = state.elections.filter(function (e) {
      return e.subgroups.every(function (c) {
        return ['d', 'r'].includes(c.name.toLowerCase()[0]);
      });
    });
    var num_districts = state.plan.parts.length;
    if (state.elections.length < 1) return html(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["No election data available for ", "."])), state.place.name);
    var rows = []; // filters to only two parties, but only sets the global once
    // two_party = two_party == -1 ? elections.map(e => e.subgroups.length == 2).reduce((a,b) => a + b, 0) == elections.length : two_party;
    // elections.forEach(e => e.subgroups = e.subgroups.length == 1 ? e.subgroups : e.subgroups.filter(p => ['Democratic', 'Republican'].includes(p.name)));

    var headers = ['Election'].concat(elections[0].parties.reduce(function (acc, party) {
      var rgb = getPartyRGBColors(party.name + party.key);
      return acc.concat([html(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["<div style=\"color: rgb(", ",", ",", ")\">", " Votes</div>"])), rgb[0], rgb[1], rgb[2], party.name.substring(0, 3)), html(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["<div style=\"color: rgb(", ",", ",", ")\">", " Seats</div>"])), rgb[0], rgb[1], rgb[2], party.name.substring(0, 3))]);
    }, [])).concat([html(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["<div>Dispro-portionality</div>"])))]);
    var bias_acc = [];
    var width = "".concat(Math.round(81 / headers.length), "%");

    var _iterator = _createForOfIteratorHelper(elections),
        _step;

    try {
      var _loop = function _loop() {
        var election = _step.value;
        var d_votes = election.parties[0].getOverallFraction(),
            d_seats = election.getSeatsWonParty(election.parties[0]);
        var d_seat_share = d_seats / election.total.data.length;
        var bias_to = Math.abs(d_votes - d_seat_share) * num_districts < 0.5 ? "N" : d_votes > d_seat_share ? "R" : "D"; // > 0 if biased towards Rs, < 0 if toward Ds

        var bias_by = Math.round((d_votes - d_seat_share) * election.total.data.length * 10) / 10;
        bias_acc.push(bias_by);
        var disportionality = Math.abs(bias_by) / (2 * num_districts);
        var biases = [bias_to == "N" ? {
          content: "As proportional as possible",
          style: "background: #f9f9f9 ; width: ".concat(width, ";")
        } : bias_to == "R" ? {
          content: "Leans Republican by ".concat(Math.abs(bias_by), " seats"),
          style: "background: ".concat(interpolateReds(disportionality), "; width: ").concat(width, ";")
        } : {
          content: "Leans Democrat by ".concat(Math.abs(bias_by), " seats"),
          style: "background: ".concat(interpolateBlues(disportionality), "; width: ").concat(width, ";")
        }];
        rows.push({
          label: parseElectionName(election.name),
          entries: election.parties.reduce(function (acc, party) {
            return acc.concat([getCell(party, null), getCellSeatShare(party, election)]);
          }, []).concat(biases)
        });
      };

      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        _loop();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    var favor = bias_acc.map(function (x) {
      return x > 0 ? 1 : -1;
    }).reduce(function (a, b) {
      return a + b;
    }, 0);
    var favorstr = "";

    switch (favor) {
      case elections.length:
        favorstr = html(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["favors <strong>Republicans</strong> in every election"])));
        break;

      case -elections.length:
        favorstr = html(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["favors <strong>Democrats</strong> in every election"])));
        break;

      default:
        favorstr = "favored different parties in different elections";
    }

    var avg_bias = roundToDecimal(bias_acc.reduce(function (a, b) {
      return a + b;
    }, 0) / bias_acc.length, 1);
    var score_headers = ['Election', "Efficiency Gap", "Mean Median", "Partisan Bias", "Eguia's Metric"];
    var dec = true;
    var score_rows = Object.entries(partisanship.election_scores).map(function (_ref3) {
      var _ref4 = _slicedToArray(_ref3, 2),
          name = _ref4[0],
          stats = _ref4[1];

      return {
        label: parseElectionName(name),
        entries: [getCellBasic(stats.efficiency_gap, dec, partisanship.party), getCellBasic(stats.mean_median, dec, partisanship.party), getCellBasic(stats.partisan_bias, dec, partisanship.party), getCellBasic(stats.eguia_county, dec, partisanship.party)]
      };
    }); // console.log(score_rows);

    var num_elects = Object.keys(partisanship.election_scores).length;
    return html(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n        Our current dataset contains <strong>", " recent statewide \n        ", "</strong> for ", ".\n        <br/>\n        <br/>\n        <h4 text-align=\"center\">Proportionality</h4>\n        Relative to proportionality, your plan has an average lean of ", " seats towards \n        <strong>", "</strong> over these elections.<br/>\n        The disproportionality ", ".\n        <br/>\n        <br/>\n        <strong>Votes vs. Seats by Election (among the two major parties)</strong>\n        ", "\n        <br/>\n        <h4 text-align=\"center\">Other Partisanship Metrics</h4>\n        The following scores can all be found in the political science literature, but are not\n        necessarily endorsed by leading scholars at this time. They are included here for completeness.<br/>\n        In this case, the point-of-view party is the <strong>", "</strong> party,\n        so positive scores are thought to show a pro-", " lean. <br/><br/>\n        ", "\n        <br/>\n        <br/>\n        <h4 text-align=\"center\">Competitiveness Metrics</h4>\n        A \u201Cswing district\u201D is one that has been won by each major party at least once over the\n        elections in this dataset.\n        Your plan has ", " districts that always go\n        ", ", ", " districts that\n        always go ", ", and\n        <strong>", " swing districts</strong>\n        (out of ", " districts).  \n        <br/>\n        <br/>\n        A \u201Ccompetitive district\u201D is one where each party has 47% \u2013 53% of the major-party vote in a\n        district. Your plan had <strong>", " districts</strong>\n        within this competitive margin, out of a possible total of \n        (", " districts * ", " elections) = ", ".\n        "])), bias_acc.length, elections.length > 1 ? html(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["elections"]))) : html(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["election"]))), state.place.name, Math.abs(avg_bias), avg_bias > 0 ? html(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["Republicans"]))) : html(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["Democrats"]))), favorstr, DataTable(headers, rows, true), partisanship.party, partisanship.party, DataTable(score_headers, score_rows, true), partisanship.plan_scores.num_party_districts, partisanship.party, partisanship.plan_scores.num_op_party_districts, partisanship.party.toLowerCase()[0] === 'd' ? "Republican" : "Democratic", partisanship.plan_scores.num_swing_districts, num_districts, partisanship.plan_scores.num_competitive_districts, num_districts, num_elects, num_districts * num_elects);
  } // Compactness Section (cut edges, polsby popper)


  function compactness_section(state, cut_edges, plan_scores) {
    // Polsby Popper Scores
    var columns = ["Max", "Min", "Mean"];
    var rows = [],
        headers;
    polsby_popper(state.place.name, state.plan.problem.name); // check that polsby popper calculation worked

    var successful_calc = plan_scores !== "Polsby Popper unavailable for this geometry.";
    enacted_year(state_name_to_postal(state.place.name), state.plan.problem.name);

    if (successful_calc) {
      headers = ["Your Plan"];

      var _iterator2 = _createForOfIteratorHelper(columns),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var c = _step2.value;
          rows.push({
            label: c,
            entries: [{
              content: roundToDecimal(plan_scores[c.toLowerCase()], 3)
            }]
          });
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }

    var polsbypopper_table = successful_calc ? DataTable(headers, rows) : plan_scores;
    return html(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n        <h4>Cut Edges</h4>\n        <div style='text-align: left'>\n        One measurement of compactness is the number of <strong>cut edges</strong> in a districting plan. \n        This counts the number of adjacent units that are separated into different \n        districts in the plan - you can think of this as the \"scissors complexity,\" \n        or how much work you'd need to do to cut out the plan. You should only compare \n        the cut edges count when you're looking at two plans for the same state using the \n        same units. Then, a lower number of cut edges means a plan is more compact.<br/><br/>\n        ", "\n        </div>\n        <br/>        \n        <h4>Polsby Popper Scores</h4>\n        <div style='text-align: left'>\n        A classic measurement of compactness is the <strong>Polsby Popper score</strong>, which \n        is a comparison of the area of a district to its perimeter. Instead of being sensitive to\n        the choice of units, like cut edges, this depends on mapping choices like the map projection\n        and the resolution of the boundaries. A higher Polsby Popper score is regarded as signaling\n        a more compact district; the highest possible score of an individual district is 1, which is\n        only achieved by perfect circles.\n        ", "\n        "])), cut_edges > 0 ? html(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["Your plan has <strong>", "</strong> cut edges between ", "."])), cut_edges, state.unitsRecord.unitType) : html(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["Cut Edges count not available for ", "."])), state.place.name), polsbypopper_table);
  } // County Splits Section


  function county_section(state, data, municipalities) {
    var pnoun = municipalities ? "municipalities" : "counties",
        noun = municipalities ? "municipality" : "county"; // need population info on the python anywhere dual graph for this

    var forced = {};

    if (data.population != -1) {
      Object.keys(data.population).map(function (x) {
        return forced[x] = Math.ceil(data.population[x] / state.population.ideal);
      });
    } // get number of splits to be forced


    var c_forced = Object.values(forced).reduce(function (a, b) {
      return b > 1 ? a + 1 : a;
    }, 0);
    var num_split = Object.keys(data.split_list).length; // county button

    var COUNTIES_LAYER = {
      id: "counties",
      source: COUNTIES_TILESET.sourceLayer,
      "source-layer": COUNTIES_TILESET.sourceLayer,
      type: "line",
      paint: {
        "line-color": "#444444",
        "line-width": ["interpolate", ["linear"], ["zoom"], 0, 0, 4, 1, 6, 2, 9, 3],
        "line-opacity": ["interpolate", ["linear"], ["zoom"], 0, 0.4, 9, 0.5]
      }
    };
    var statecode = String(stateNameToFips[(state.place.state || state.place.id).toLowerCase().replace("2020", "").replace("_bg", "")]);
    counties = counties ? counties : new Layer(state.map, _objectSpread2(_objectSpread2({}, COUNTIES_LAYER), {}, {
      paint: _objectSpread2(_objectSpread2({}, COUNTIES_LAYER.paint), {}, {
        "line-opacity": 0
      }),
      filter: ["==", ["get", "STATEFP"], statecode]
    }), addBelowLabels);
    var alt_counties = {
      alaska: 'Borough',
      alaska_blocks: 'Borough',
      louisiana: 'Parish'
    }[state.place.id];
    var county_toggle = html(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["\n            ", ""])), toggle("Show ".concat(alt_counties || "County", " Boundaries"), false, function (checked) {
      return counties.setOpacity(checked ? COUNTIES_LAYER.paint["fill-opacity"] : 0);
    }));
    var c_forced_in_2 = Object.values(forced).reduce(function (a, b) {
      return b === 2 ? a + 1 : a;
    }, 0);
    var c_forced_in_3more = Object.values(forced).reduce(function (a, b) {
      return b > 2 ? a + 1 : a;
    }, 0);
    var c_in_2 = Object.values(data.split_list).reduce(function (a, b) {
      return b.length === 2 ? a + 1 : a;
    }, 0);
    var c_in_3more = Object.values(data.split_list).reduce(function (a, b) {
      return b.length > 2 ? a + 1 : a;
    }, 0);

    var plural_singular = function plural_singular(num) {
      return num === 1 ? html(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["1 ", ""])), noun) : html(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["", " ", ""])), num, pnoun);
    };

    var plural_singular_tobe = function plural_singular_tobe(num) {
      return num === 1 ? html(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["1 ", " is"])), noun) : html(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["", " ", " are"])), num, pnoun);
    };

    var text = data.population == -1 ? html(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral(["<div style=\"text-align:left\">\n    ", " has ", " ", "\n    Your plan splits ", " a total of ", " times.<br/>\n    The split ", " are:\n    <ul>\n    ", "\n    </ul>\n    <div>"])), state.place.name, data.num_counties, pnoun, plural_singular(num_split), data.splits, pnoun, Object.keys(data.split_list).map(function (x) {
      if (isNaN(x)) return html(_templateObject35 || (_templateObject35 = _taggedTemplateLiteral(["<li>", "</li>"])), x);
      return html(_templateObject36 || (_templateObject36 = _taggedTemplateLiteral(["<li>", "</li>"])), county_fips_to_name(x, state.place.state) + " County");
    })) : html(_templateObject37 || (_templateObject37 = _taggedTemplateLiteral(["<div style=\"text-align:left\">\n    ", " has ", " ", ". \n    Your plan splits <strong>", "</strong>. ", "\n    split in two pieces and ", " split into three or more pieces.\n    <br/>\n    (The number of pieces is the same as counting the number of districts touched by the county)\n    <br/><br/>\n    The population in ", " of ", "'s ", " is larger than a district,\n    sometimes several times larger.\n    ", "\n    <br/>"])), state.place.name, data.num_counties, pnoun, plural_singular(num_split), plural_singular_tobe(c_in_2), plural_singular_tobe(c_in_3more), c_forced, state.place.name, pnoun, num_split > 0 ? html(_templateObject38 || (_templateObject38 = _taggedTemplateLiteral(["\n        In total, population size forces ", " to be split in two and\n        ", " to be split into three or more pieces."])), plural_singular(c_forced_in_2), plural_singular(c_forced_in_3more)) : ""); // if the dual graph on python anywhere doesn't have population

    if (data.population == -1) return html(_templateObject39 || (_templateObject39 = _taggedTemplateLiteral(["", "<br/>", ""])), county_toggle, text); // build the table

    var noun_cap = municipalities ? "Municipality" : "County";
    var headers = [noun_cap, "# Pieces", "Minimium Possible"],
        rows = [];

    for (var _i = 0, _Object$keys = Object.keys(data.split_list); _i < _Object$keys.length; _i++) {
      var c = _Object$keys[_i];
      var c_name = isNaN(c) ? c : county_fips_to_name(c, state.place.state) + " County";
      rows.push({
        label: c_name,
        entries: [{
          content: data.split_list[c].length
        }, {
          content: forced[c]
        }]
      });
    }

    return html(_templateObject40 || (_templateObject40 = _taggedTemplateLiteral(["", "<br/>", "<br/>\n    ", ""])), county_toggle, text, num_split > 0 ? html(_templateObject41 || (_templateObject41 = _taggedTemplateLiteral(["\n        <h4 text-align:\"center\">", " Split Details</h4>\n        ", ""])), noun_cap, DataTable(headers, rows, true)) : "");
  }
  /** HELPER FUNCTIONS */


  function enacted_year(st, districts) {
    if (['Congress', '2020 Reapportioned Congress'].includes(districts)) {
      switch (st) {
        case "AL":
          return 2011;

        case "FL":
          return 2015;

        case "NC":
          return 2019;

        case "OH":
          return 2011;

        case "PA":
          return 2018;

        case "TX":
          return 2012;

        default:
          return 2011;
      }
    }

    if (districts == 'State Senate') {
      switch (st) {
        case "AK":
          return 2013;

        case "AL":
          return 2017;

        case "CO":
          return 2011;

        case "FL":
          return 2016;

        case "GA":
          return 2014;

        case "HI":
          return 2012;

        case "ID":
          return 2012;

        case "KY":
          return 2013;

        case "ME":
          return 2013;

        case "MO":
          return 2012;

        case "MS":
          return 2019;

        case "MT":
          return 2013;

        case "NC":
          return 2019;

        case "PA":
          return 2013;

        case "TX":
          return 2012;

        case "UT":
          return 2012;

        default:
          return 2011;
      }
    }

    if (['State House', 'State Assembly', 'House of Delegates'].includes(districts)) {
      switch (st) {
        case "AK":
          return 2013;

        case "AL":
          return 2017;

        case "CO":
          return 2011;

        case "GA":
          return 2015;

        case "HI":
          return 2012;

        case "ID":
          return 2012;

        case "KY":
          return 2013;

        case "ME":
          return 2013;

        case "MS":
          return 2012;

        case "MT":
          return 2013;

        case "NC":
          return 2019;

        case "PA":
          return 2013;

        case "TX":
          return 2019;

        case "UT":
          return 2012;

        case "WI":
          return 2012;

        default:
          return 2011;
      }
    }

    return 2011;
  }

  function polsby_popper(st, districts) {
    var cong = {
      VA: {
        max: 0.2609509200948297,
        min: 0.0935015846140669,
        mean: 0.18651696516748836,
        median: 0.1948014784812254,
        variance: 0.002460600533279498
      },
      PR: {
        max: 0.27323828085164537,
        min: 0.27323828085164537,
        mean: 0.27323828085164537,
        median: 0.27323828085164537
      },
      KS: {
        max: 0.4585198982749231,
        min: 0.35004283329114144,
        mean: 0.4089909022368307,
        median: 0.4137004386906291,
        variance: 0.0020620628469314845
      },
      WY: {
        max: 0.7721781271591052,
        min: 0.7721781271591052,
        mean: 0.7721781271591052,
        median: 0.7721781271591052
      },
      NY: {
        max: 0.547787715674496,
        min: 0.09349445555308791,
        mean: 0.3475999679668771,
        median: 0.34443556759851945,
        variance: 0.014624682301184501
      },
      WA: {
        max: 0.48324460273265046,
        min: 0.15791099570671835,
        mean: 0.2785398067689706,
        median: 0.24077651188256238,
        variance: 0.009943169002222425
      },
      HI: {
        max: 0.39384502078112726,
        min: 0.06527518778297405,
        mean: 0.22956010428205065,
        median: 0.22956010428205065,
        variance: 0.05397906757821715
      },
      NH: {
        max: 0.172977037312035,
        min: 0.15163954036276334,
        mean: 0.16230828883739917,
        median: 0.16230828883739917,
        variance: 0.00022764438803008898
      },
      AK: {
        max: 0.06472273522903803,
        min: 0.06472273522903803,
        mean: 0.06472273522903803,
        median: 0.06472273522903803
      },
      CT: {
        max: 0.4391192769554272,
        min: 0.14262824535392685,
        mean: 0.2510084753258834,
        median: 0.21280274848034048,
        variance: 0.012243137352794064
      },
      ME: {
        max: 0.2904765312789098,
        min: 0.17341422797080872,
        mean: 0.23194537962485928,
        median: 0.23194537962485928,
        variance: 0.006851791427898929
      },
      MP: {
        max: 0.07695502928529178,
        min: 0.07695502928529178,
        mean: 0.07695502928529178,
        median: 0.07695502928529178
      },
      NJ: {
        max: 0.33937474267573514,
        min: 0.10040472741964328,
        mean: 0.19649004660478872,
        median: 0.19695265262287187,
        variance: 0.004238446413937655
      },
      KY: {
        max: 0.3676316082327686,
        min: 0.11567642860289645,
        mean: 0.19125960005809284,
        median: 0.14863867327709585,
        variance: 0.009491632096264028
      },
      OK: {
        max: 0.26974453399022597,
        min: 0.2062197291441203,
        mean: 0.25085988029282313,
        median: 0.26205785133814613,
        variance: 0.0006843881919193037
      },
      MD: {
        max: 0.31121413373469325,
        min: 0.03287189878222046,
        mean: 0.11337117875295656,
        median: 0.0848704372366086,
        variance: 0.007693253346265476
      },
      AL: {
        max: 0.2862140367744639,
        min: 0.1309837558240791,
        mean: 0.1920520796906246,
        median: 0.18249658360553492,
        variance: 0.0030940374001022252
      },
      DC: {
        max: 0.49397921547934087,
        min: 0.49397921547934087,
        mean: 0.49397921547934087,
        median: 0.49397921547934087
      },
      SC: {
        max: 0.32867810929399544,
        min: 0.08004120059191687,
        mean: 0.20650090080972783,
        median: 0.2125786166578598,
        variance: 0.009107941339738405
      },
      ND: {
        max: 0.5141758802531106,
        min: 0.5141758802531106,
        mean: 0.5141758802531106,
        median: 0.5141758802531106
      },
      CO: {
        max: 0.40078196007920464,
        min: 0.09935145127012009,
        mean: 0.24426597406968778,
        median: 0.22514097186876253,
        variance: 0.016735197455826162
      },
      RI: {
        max: 0.30714702345312295,
        min: 0.2638187434821855,
        mean: 0.2854828834676542,
        median: 0.2854828834676542,
        variance: 0.0009386699226199704
      },
      PA: {
        max: 0.46971762110210447,
        min: 0.1806917510539212,
        mean: 0.33551671923680976,
        median: 0.3244502443878216,
        variance: 0.006124812480358067
      },
      MN: {
        max: 0.5671173089241448,
        min: 0.22085494881674975,
        mean: 0.3299530310623484,
        median: 0.32339219909283123,
        variance: 0.011871925011103155
      },
      MT: {
        max: 0.4795409137114714,
        min: 0.4795409137114714,
        mean: 0.4795409137114714,
        median: 0.4795409137114714
      },
      GA: {
        max: 0.36651943728960584,
        min: 0.15744178096540215,
        mean: 0.26116379031636805,
        median: 0.27419222762064605,
        variance: 0.0034845767429379014
      },
      NM: {
        max: 0.40323385223422226,
        min: 0.2657705454638963,
        mean: 0.34981755528785613,
        median: 0.3804482681654499,
        variance: 0.005427720605600378
      },
      NV: {
        max: 0.5807834467174747,
        min: 0.41569970663098804,
        mean: 0.5233938996795987,
        median: 0.5485462226849661,
        variance: 0.006053827301677059
      },
      CA: {
        max: 0.45198009284455776,
        min: 0.0882308791775836,
        mean: 0.2372377199293647,
        median: 0.2223582003876213,
        variance: 0.005958177193332073
      },
      IA: {
        max: 0.48533791565631645,
        min: 0.2931797338411127,
        mean: 0.3879535986116255,
        median: 0.3866483724745365,
        variance: 0.007355221112711243
      },
      WI: {
        max: 0.43161869615986986,
        min: 0.16710566009842376,
        mean: 0.2916706275364886,
        median: 0.2766997670282101,
        variance: 0.006689927893537878
      },
      TN: {
        max: 0.29134669352843307,
        min: 0.1121389269166707,
        mean: 0.20122140363326407,
        median: 0.22629885622828136,
        variance: 0.004071160401693066
      },
      AS: {
        max: 0.19392764523187886,
        min: 0.19392764523187886,
        mean: 0.19392764523187886,
        median: 0.19392764523187886
      },
      AZ: {
        max: 0.5199585463300354,
        min: 0.12076734483542985,
        mean: 0.2993859918385231,
        median: 0.25986950243649704,
        variance: 0.021551625215314143
      },
      IN: {
        max: 0.5788625553933887,
        min: 0.21040661784761008,
        mean: 0.43167073719784504,
        median: 0.4670448623592573,
        variance: 0.012469703826886143
      },
      TX: {
        max: 0.565140197241656,
        min: 0.04501853554971014,
        mean: 0.1975139190078662,
        median: 0.18113358478830388,
        variance: 0.012492348964482881
      },
      DE: {
        max: 0.45952335176259107,
        min: 0.45952335176259107,
        mean: 0.45952335176259107,
        median: 0.45952335176259107
      },
      LA: {
        max: 0.3160465177289409,
        min: 0.056639497812910625,
        mean: 0.1435369255645906,
        median: 0.12815465400844722,
        variance: 0.008955185226287968
      },
      MA: {
        max: 0.38408916090815576,
        min: 0.07569857341699003,
        mean: 0.22520014138797123,
        median: 0.22615986938821336,
        variance: 0.009440848033012669
      },
      ID: {
        max: 0.31908675640342277,
        min: 0.18569902036284136,
        mean: 0.25239288838313206,
        median: 0.25239288838313206,
        variance: 0.00889614406301591
      },
      MS: {
        max: 0.40345237718374394,
        min: 0.14640335366986196,
        mean: 0.2631904299457913,
        median: 0.25145299446477964,
        variance: 0.016411621254444425
      },
      NC: {
        max: 0.36881127293955335,
        min: 0.1528749935376705,
        mean: 0.2466792627802616,
        median: 0.22687550576112328,
        variance: 0.00453581989863202
      },
      NE: {
        max: 0.44523859248054043,
        min: 0.32582645588145737,
        mean: 0.38307141554994534,
        median: 0.37814919828783833,
        variance: 0.0035829857588710566
      },
      OH: {
        max: 0.38881755460736556,
        min: 0.05601312622781272,
        mean: 0.1881471786904364,
        median: 0.14859635749577704,
        variance: 0.009181754508553597
      },
      MI: {
        max: 0.5544401848644287,
        min: 0.10455371206340106,
        mean: 0.2920631419033232,
        median: 0.24717652165617843,
        variance: 0.017229133454308952
      },
      SD: {
        max: 0.5576162103390644,
        min: 0.5576162103390644,
        mean: 0.5576162103390644,
        median: 0.5576162103390644
      },
      UT: {
        max: 0.36951579643702415,
        min: 0.20582995262816972,
        mean: 0.27972067339176365,
        median: 0.2717684722509303,
        variance: 0.004853186291769889
      },
      VI: {
        max: 0.30271368247193015,
        min: 0.30271368247193015,
        mean: 0.30271368247193015,
        median: 0.30271368247193015
      },
      AR: {
        max: 0.28291442764583524,
        min: 0.1271074885502205,
        mean: 0.19880566652497988,
        median: 0.19260037495193189,
        variance: 0.0059147898468689675
      },
      OR: {
        max: 0.48598091839412766,
        min: 0.14620189648114607,
        mean: 0.31111664698576225,
        median: 0.28181010779972687,
        variance: 0.0180108848813516
      },
      GU: {
        max: 0.6153337829559555,
        min: 0.6153337829559555,
        mean: 0.6153337829559555,
        median: 0.6153337829559555
      },
      WV: {
        max: 0.17915792913016343,
        min: 0.09527206981692875,
        mean: 0.137996824870701,
        median: 0.13956047566501076,
        variance: 0.0017610431010348596
      },
      VT: {
        max: 0.36921553387790645,
        min: 0.36921553387790645,
        mean: 0.36921553387790645,
        median: 0.36921553387790645
      },
      MO: {
        max: 0.4521538836240608,
        min: 0.1941790965337496,
        mean: 0.2701190944515122,
        median: 0.2338538042912635,
        variance: 0.007924384537831087
      },
      IL: {
        max: 0.5931896637290266,
        min: 0.0544439269799213,
        mean: 0.1885001376519517,
        median: 0.16595901266095117,
        variance: 0.014631142738633189
      },
      FL: {
        max: 0.6850166972403947,
        min: 0.09713769843988132,
        mean: 0.36232548404836334,
        median: 0.3699997105382811,
        variance: 0.017859583070925982
      }
    };
    var sl_lower = {
      MA: {
        max: 0.723388215985541,
        min: 0.04863473917532981,
        mean: 0.31619112454700254,
        median: 0.287882303044353,
        variance: 0.01505019294543988
      },
      PA: {
        max: 0.7256602474897687,
        min: 0.07058830189458934,
        mean: 0.2780891582656685,
        median: 0.2586145079980299,
        variance: 0.012792106214767085
      },
      NJ: {
        max: 0.4335816485222299,
        min: 0.1675456067584263,
        mean: 0.24885884976973896,
        median: 0.23592626275583597,
        variance: 0.0041459181085570914
      },
      KY: {
        max: 0.6481083657001036,
        min: 0.08788158060652324,
        mean: 0.22664785625886452,
        median: 0.2062918565127318,
        variance: 0.011526835079094846
      },
      RI: {
        max: 0.6969437878702931,
        min: 0.19573165445154167,
        mean: 0.40004436956550243,
        median: 0.37519592142459596,
        variance: 0.015759634830417573
      },
      GU: "Not Available",
      SD: {
        max: 0.7725037880695084,
        min: 0.12311680537850891,
        mean: 0.4039890686388952,
        median: 0.39748135373239574,
        variance: 0.01843311497963851
      },
      OR: {
        max: 0.5363519432854028,
        min: 0.10839062003323406,
        mean: 0.3248580725803175,
        median: 0.31414201583367674,
        variance: 0.009443620567405312
      },
      IN: {
        max: 0.667203354503639,
        min: 0.16076029342572462,
        mean: 0.3643826014068586,
        median: 0.3636407311005986,
        variance: 0.011147991974694904
      },
      PR: {
        max: 0.47604012815269614,
        min: 0.015132384736407423,
        mean: 0.25564283339683697,
        median: 0.23612145377664245,
        variance: 0.011294088628481054
      },
      WA: {
        max: 0.5926564958371687,
        min: 0.12067642522407827,
        mean: 0.3178665053056514,
        median: 0.30408986567302765,
        variance: 0.007983587654012777
      },
      UT: {
        max: 0.6116433246038295,
        min: 0.15563749598393453,
        mean: 0.35466091809827005,
        median: 0.3560678702776911,
        variance: 0.008047109426006008
      },
      TN: {
        max: 0.5179571359447087,
        min: 0.08308336294296043,
        mean: 0.23292801912923142,
        median: 0.22646137781859718,
        variance: 0.008038558351299973
      },
      NC: {
        max: 0.7048843516115446,
        min: 0.13405789082405445,
        mean: 0.3179035729415489,
        median: 0.3030326598282511,
        variance: 0.010882579471523884
      },
      AS: "Not Available",
      NE: "Not Available",
      MS: {
        max: 0.6626339049777487,
        min: 0.07331679603575149,
        mean: 0.26057878250072775,
        median: 0.23105872368494818,
        variance: 0.01375083757625235
      },
      ME: {
        max: 0.6658854350429046,
        min: 0.025378709217189897,
        mean: 0.3846119767055331,
        median: 0.38412715352235166,
        variance: 0.014593050987120035
      },
      OH: {
        max: 0.7787104766788208,
        min: 0.06745306605639056,
        mean: 0.27457673510959446,
        median: 0.2428295733268589,
        variance: 0.024148300059916295
      },
      CO: {
        max: 0.6705655849638755,
        min: 0.09724680592024189,
        mean: 0.28745945837622267,
        median: 0.2707760929907661,
        variance: 0.01370333236663407
      },
      VA: {
        max: 0.5633554265588283,
        min: 0.07657482610919239,
        mean: 0.23665039389296869,
        median: 0.21599469236602903,
        variance: 0.007658384331311694
      },
      ID: {
        max: 0.6586763064762617,
        min: 0.19258947519831782,
        mean: 0.41628001424663436,
        median: 0.40526844179681587,
        variance: 0.018894456707310076
      },
      VI: "Not Available",
      WY: {
        max: 0.5988705253235872,
        min: 0.11196269112034753,
        mean: 0.3135352989305973,
        median: 0.30691984629112334,
        variance: 0.013339624098706523
      },
      NY: {
        max: 0.7991050436215459,
        min: 0.08869032954697235,
        mean: 0.3085626465656542,
        median: 0.2961124714876664,
        variance: 0.015237625748757262
      },
      SC: {
        max: 0.5374297157053602,
        min: 0.10366917140055172,
        mean: 0.2762803655684872,
        median: 0.25811717488865527,
        variance: 0.00830426335562545
      },
      IA: {
        max: 0.644328870587018,
        min: 0.07656682932334581,
        mean: 0.37191178718566786,
        median: 0.37247714835464507,
        variance: 0.018017066023459642
      },
      ND: {
        max: 0.7456394352654078,
        min: 0.19738515994380768,
        mean: 0.4185358459615828,
        median: 0.4148819947702669,
        variance: 0.018321174175929517
      },
      DC: "Not Available",
      MO: {
        max: 0.7432912708863132,
        min: 0.17417487753637279,
        mean: 0.382923041600087,
        median: 0.36375515981893736,
        variance: 0.012282282077120569
      },
      FL: {
        max: 0.699848628834511,
        min: 0.0789737629152117,
        mean: 0.4293489927478954,
        median: 0.4345310832285809,
        variance: 0.01698188768630612
      },
      MD: {
        max: 0.4224350778287666,
        min: 0.002013068907922573,
        mean: 0.17696121262696873,
        median: 0.17490816647885818,
        variance: 0.012206673980975217
      },
      NH: {
        max: 0.7824128229199053,
        min: 0.16247119782067568,
        mean: 0.4748717713428723,
        median: 0.46362067426313114,
        variance: 0.022945276119716758
      },
      NM: {
        max: 0.5509541606404093,
        min: 0.10559661481618589,
        mean: 0.31368948594599516,
        median: 0.3120310822138148,
        variance: 0.012518863724211127
      },
      LA: {
        max: 0.5132483120542254,
        min: 0.050455119687632714,
        mean: 0.25884240728273084,
        median: 0.24881841390506387,
        variance: 0.010416912408468688
      },
      AK: {
        max: 0.6358357921051139,
        min: 0.03732733210458705,
        mean: 0.3703076218595892,
        median: 0.393610139300377,
        variance: 0.01964916186228287
      },
      CA: {
        max: 0.5202001853818952,
        min: 0.09079064135161728,
        mean: 0.2638099804181826,
        median: 0.25429700970249325,
        variance: 0.007659869153879569
      },
      HI: {
        max: 0.7262607012638939,
        min: 0.08514589166732663,
        mean: 0.3799649618462766,
        median: 0.3787555279987943,
        variance: 0.020969746126041952
      },
      CT: {
        max: 0.738747775040126,
        min: 0.13926525678376772,
        mean: 0.3851558185276327,
        median: 0.37028065145785516,
        variance: 0.015381650585783054
      },
      NV: {
        max: 0.5749062754137828,
        min: 0.13344079145171414,
        mean: 0.37705244534770915,
        median: 0.3833930836158166,
        variance: 0.011477038671339514
      },
      AR: {
        max: 0.6264296755876105,
        min: 0.10538978818253847,
        mean: 0.2733529866896257,
        median: 0.2587969704162677,
        variance: 0.0115309692024051
      },
      WI: {
        max: 0.5622693521513996,
        min: 0.04973848654228409,
        mean: 0.2770643109871855,
        median: 0.283095574527503,
        variance: 0.012903263083100866
      },
      WV: {
        max: 0.532448117357976,
        min: 0.11937438143761563,
        mean: 0.26441135021912804,
        median: 0.2281207015292943,
        variance: 0.011629707105741013
      },
      OK: {
        max: 0.7175410962223007,
        min: 0.1717558572461151,
        mean: 0.3992371963193848,
        median: 0.37139694802653617,
        variance: 0.017189316549800927
      },
      TX: {
        max: 0.626143306945775,
        min: 0.06239794983266209,
        mean: 0.26049467933622594,
        median: 0.2527705538471597,
        variance: 0.013587235390988658
      },
      MT: {
        max: 0.6791342258300299,
        min: 0.13792019000985503,
        mean: 0.3441908737423962,
        median: 0.3341255606131728,
        variance: 0.008784803047116242
      },
      MI: {
        max: 0.7857120157648827,
        min: 0.06980379400602457,
        mean: 0.39402814689348603,
        median: 0.37107110168376833,
        variance: 0.021448360034533997
      },
      AZ: {
        max: 0.5246975580811934,
        min: 0.1114194035294632,
        mean: 0.3058643961286597,
        median: 0.2986892320236305,
        variance: 0.009748557224853564
      },
      AL: {
        max: 0.4921346048658123,
        min: 0.08459405374916322,
        mean: 0.23432755259347907,
        median: 0.22775660098061776,
        variance: 0.010457287414495916
      },
      IL: {
        max: 0.6191032049243115,
        min: 0.08267717179146065,
        mean: 0.2694795977077148,
        median: 0.2549813817665231,
        variance: 0.011397953122068032
      },
      GA: {
        max: 0.5352722232485896,
        min: 0.09123436659960082,
        mean: 0.27351916114527064,
        median: 0.2601516448239759,
        variance: 0.009115588382607636
      },
      KS: {
        max: 0.7613389287078992,
        min: 0.20608794000415587,
        mean: 0.45890398706648117,
        median: 0.4505514963800297,
        variance: 0.01322012921953406
      },
      MN: {
        max: 0.650980306788917,
        min: 0.1555049423774717,
        mean: 0.4153993145665972,
        median: 0.41979427665050734,
        variance: 0.011874485457522834
      },
      DE: {
        max: 0.6860544125670989,
        min: 0.20800488646755874,
        mean: 0.4241193521685726,
        median: 0.39258276429460714,
        variance: 0.01637098445491542
      },
      MP: "Not Available",
      VT: {
        max: 0.7675052581903897,
        min: 0.15982943243083664,
        mean: 0.4784948921911068,
        median: 0.4830942692197775,
        variance: 0.019306711421394243
      }
    };
    var sl_upper = {
      MA: {
        max: 0.723388215985541,
        min: 0.04863473917532981,
        mean: 0.31619112454700254,
        median: 0.287882303044353,
        variance: 0.01505019294543988
      },
      PA: {
        max: 0.7256602474897687,
        min: 0.07058830189458934,
        mean: 0.2780891582656685,
        median: 0.2586145079980299,
        variance: 0.012792106214767085
      },
      NJ: {
        max: 0.4335816485222299,
        min: 0.1675456067584263,
        mean: 0.24885884976973896,
        median: 0.23592626275583597,
        variance: 0.0041459181085570914
      },
      KY: {
        max: 0.6481083657001036,
        min: 0.08788158060652324,
        mean: 0.22664785625886452,
        median: 0.2062918565127318,
        variance: 0.011526835079094846
      },
      RI: {
        max: 0.6969437878702931,
        min: 0.19573165445154167,
        mean: 0.40004436956550243,
        median: 0.37519592142459596,
        variance: 0.015759634830417573
      },
      GU: "Not Available",
      SD: {
        max: 0.7725037880695084,
        min: 0.12311680537850891,
        mean: 0.4039890686388952,
        median: 0.39748135373239574,
        variance: 0.01843311497963851
      },
      OR: {
        max: 0.5363519432854028,
        min: 0.10839062003323406,
        mean: 0.3248580725803175,
        median: 0.31414201583367674,
        variance: 0.009443620567405312
      },
      IN: {
        max: 0.667203354503639,
        min: 0.16076029342572462,
        mean: 0.3643826014068586,
        median: 0.3636407311005986,
        variance: 0.011147991974694904
      },
      PR: {
        max: 0.47604012815269614,
        min: 0.015132384736407423,
        mean: 0.25564283339683697,
        median: 0.23612145377664245,
        variance: 0.011294088628481054
      },
      WA: {
        max: 0.5926564958371687,
        min: 0.12067642522407827,
        mean: 0.3178665053056514,
        median: 0.30408986567302765,
        variance: 0.007983587654012777
      },
      UT: {
        max: 0.6116433246038295,
        min: 0.15563749598393453,
        mean: 0.35466091809827005,
        median: 0.3560678702776911,
        variance: 0.008047109426006008
      },
      TN: {
        max: 0.5179571359447087,
        min: 0.08308336294296043,
        mean: 0.23292801912923142,
        median: 0.22646137781859718,
        variance: 0.008038558351299973
      },
      NC: {
        max: 0.7048843516115446,
        min: 0.13405789082405445,
        mean: 0.3179035729415489,
        median: 0.3030326598282511,
        variance: 0.010882579471523884
      },
      AS: "Not Available",
      NE: "Not Available",
      MS: {
        max: 0.6626339049777487,
        min: 0.07331679603575149,
        mean: 0.26057878250072775,
        median: 0.23105872368494818,
        variance: 0.01375083757625235
      },
      ME: {
        max: 0.6658854350429046,
        min: 0.025378709217189897,
        mean: 0.3846119767055331,
        median: 0.38412715352235166,
        variance: 0.014593050987120035
      },
      OH: {
        max: 0.7787104766788208,
        min: 0.06745306605639056,
        mean: 0.27457673510959446,
        median: 0.2428295733268589,
        variance: 0.024148300059916295
      },
      CO: {
        max: 0.6705655849638755,
        min: 0.09724680592024189,
        mean: 0.28745945837622267,
        median: 0.2707760929907661,
        variance: 0.01370333236663407
      },
      VA: {
        max: 0.5633554265588283,
        min: 0.07657482610919239,
        mean: 0.23665039389296869,
        median: 0.21599469236602903,
        variance: 0.007658384331311694
      },
      ID: {
        max: 0.6586763064762617,
        min: 0.19258947519831782,
        mean: 0.41628001424663436,
        median: 0.40526844179681587,
        variance: 0.018894456707310076
      },
      VI: "Not Available",
      WY: {
        max: 0.5988705253235872,
        min: 0.11196269112034753,
        mean: 0.3135352989305973,
        median: 0.30691984629112334,
        variance: 0.013339624098706523
      },
      NY: {
        max: 0.7991050436215459,
        min: 0.08869032954697235,
        mean: 0.3085626465656542,
        median: 0.2961124714876664,
        variance: 0.015237625748757262
      },
      SC: {
        max: 0.5374297157053602,
        min: 0.10366917140055172,
        mean: 0.2762803655684872,
        median: 0.25811717488865527,
        variance: 0.00830426335562545
      },
      IA: {
        max: 0.644328870587018,
        min: 0.07656682932334581,
        mean: 0.37191178718566786,
        median: 0.37247714835464507,
        variance: 0.018017066023459642
      },
      ND: {
        max: 0.7456394352654078,
        min: 0.19738515994380768,
        mean: 0.4185358459615828,
        median: 0.4148819947702669,
        variance: 0.018321174175929517
      },
      DC: "Not Available",
      MO: {
        max: 0.7432912708863132,
        min: 0.17417487753637279,
        mean: 0.382923041600087,
        median: 0.36375515981893736,
        variance: 0.012282282077120569
      },
      FL: {
        max: 0.699848628834511,
        min: 0.0789737629152117,
        mean: 0.4293489927478954,
        median: 0.4345310832285809,
        variance: 0.01698188768630612
      },
      MD: {
        max: 0.4224350778287666,
        min: 0.002013068907922573,
        mean: 0.17696121262696873,
        median: 0.17490816647885818,
        variance: 0.012206673980975217
      },
      NH: {
        max: 0.7824128229199053,
        min: 0.16247119782067568,
        mean: 0.4748717713428723,
        median: 0.46362067426313114,
        variance: 0.022945276119716758
      },
      NM: {
        max: 0.5509541606404093,
        min: 0.10559661481618589,
        mean: 0.31368948594599516,
        median: 0.3120310822138148,
        variance: 0.012518863724211127
      },
      LA: {
        max: 0.5132483120542254,
        min: 0.050455119687632714,
        mean: 0.25884240728273084,
        median: 0.24881841390506387,
        variance: 0.010416912408468688
      },
      AK: {
        max: 0.6358357921051139,
        min: 0.03732733210458705,
        mean: 0.3703076218595892,
        median: 0.393610139300377,
        variance: 0.01964916186228287
      },
      CA: {
        max: 0.5202001853818952,
        min: 0.09079064135161728,
        mean: 0.2638099804181826,
        median: 0.25429700970249325,
        variance: 0.007659869153879569
      },
      HI: {
        max: 0.7262607012638939,
        min: 0.08514589166732663,
        mean: 0.3799649618462766,
        median: 0.3787555279987943,
        variance: 0.020969746126041952
      },
      CT: {
        max: 0.738747775040126,
        min: 0.13926525678376772,
        mean: 0.3851558185276327,
        median: 0.37028065145785516,
        variance: 0.015381650585783054
      },
      NV: {
        max: 0.5749062754137828,
        min: 0.13344079145171414,
        mean: 0.37705244534770915,
        median: 0.3833930836158166,
        variance: 0.011477038671339514
      },
      AR: {
        max: 0.6264296755876105,
        min: 0.10538978818253847,
        mean: 0.2733529866896257,
        median: 0.2587969704162677,
        variance: 0.0115309692024051
      },
      WI: {
        max: 0.5622693521513996,
        min: 0.04973848654228409,
        mean: 0.2770643109871855,
        median: 0.283095574527503,
        variance: 0.012903263083100866
      },
      WV: {
        max: 0.532448117357976,
        min: 0.11937438143761563,
        mean: 0.26441135021912804,
        median: 0.2281207015292943,
        variance: 0.011629707105741013
      },
      OK: {
        max: 0.7175410962223007,
        min: 0.1717558572461151,
        mean: 0.3992371963193848,
        median: 0.37139694802653617,
        variance: 0.017189316549800927
      },
      TX: {
        max: 0.626143306945775,
        min: 0.06239794983266209,
        mean: 0.26049467933622594,
        median: 0.2527705538471597,
        variance: 0.013587235390988658
      },
      MT: {
        max: 0.6791342258300299,
        min: 0.13792019000985503,
        mean: 0.3441908737423962,
        median: 0.3341255606131728,
        variance: 0.008784803047116242
      },
      MI: {
        max: 0.7857120157648827,
        min: 0.06980379400602457,
        mean: 0.39402814689348603,
        median: 0.37107110168376833,
        variance: 0.021448360034533997
      },
      AZ: {
        max: 0.5246975580811934,
        min: 0.1114194035294632,
        mean: 0.3058643961286597,
        median: 0.2986892320236305,
        variance: 0.009748557224853564
      },
      AL: {
        max: 0.4921346048658123,
        min: 0.08459405374916322,
        mean: 0.23432755259347907,
        median: 0.22775660098061776,
        variance: 0.010457287414495916
      },
      IL: {
        max: 0.6191032049243115,
        min: 0.08267717179146065,
        mean: 0.2694795977077148,
        median: 0.2549813817665231,
        variance: 0.011397953122068032
      },
      GA: {
        max: 0.5352722232485896,
        min: 0.09123436659960082,
        mean: 0.27351916114527064,
        median: 0.2601516448239759,
        variance: 0.009115588382607636
      },
      KS: {
        max: 0.7613389287078992,
        min: 0.20608794000415587,
        mean: 0.45890398706648117,
        median: 0.4505514963800297,
        variance: 0.01322012921953406
      },
      MN: {
        max: 0.650980306788917,
        min: 0.1555049423774717,
        mean: 0.4153993145665972,
        median: 0.41979427665050734,
        variance: 0.011874485457522834
      },
      DE: {
        max: 0.6860544125670989,
        min: 0.20800488646755874,
        mean: 0.4241193521685726,
        median: 0.39258276429460714,
        variance: 0.01637098445491542
      },
      MP: "Not Available",
      VT: {
        max: 0.7675052581903897,
        min: 0.15982943243083664,
        mean: 0.4784948921911068,
        median: 0.4830942692197775,
        variance: 0.019306711421394243
      }
    };

    switch (districts) {
      case "Congress":
      case "2020 Reapportioned Congress":
        return cong[state_name_to_postal(st)];

      case "State Senate":
        return sl_upper[state_name_to_postal(st)];

      case "State House":
      case "State Assembly":
      case "House of Delegates":
        return sl_lower[state_name_to_postal(st)];
    }

    return false;
  }

  function state_name_to_postal(st) {
    var results = {
      'Alabama': 'AL',
      'Alaska': 'AK',
      'Arizona': 'AZ',
      'Arkansas': 'AR',
      'California': 'CA',
      'Colorado': 'CO',
      'Connecticut': 'CT',
      'Delaware': 'DE',
      'District of Columbia': 'DC',
      'Florida': 'FL',
      'Georgia': 'GA',
      'Hawaii': 'HI',
      'Idaho': 'ID',
      'Illinois': 'IL',
      'Indiana': 'IN',
      'Iowa': 'IA',
      'Kansas': 'KS',
      'Kentucky': 'KY',
      'Louisiana': 'LA',
      'Maine': 'ME',
      'Maryland': 'MD',
      'Massachusetts': 'MA',
      'Michigan': 'MI',
      'Minnesota': 'MN',
      'Mississippi': 'MS',
      'Missouri': 'MO',
      'Montana': 'MT',
      'Nebraska': 'NE',
      'Nevada': 'NV',
      'New Hampshire': 'NH',
      'New Jersey': 'NJ',
      'New Mexico': 'NM',
      'New York': 'NY',
      'North Carolina': 'NC',
      'North Dakota': 'ND',
      'Ohio': 'OH',
      'Oklahoma': 'OK',
      'Oregon': 'OR',
      'Pennsylvania': 'PA',
      'Rhode Island': 'RI',
      'South Carolina': 'SC',
      'South Dakota': 'SD',
      'Tennessee': 'TN',
      'Texas': 'TX',
      'Utah': 'UT',
      'Vermont': 'VT',
      'Virginia': 'VA',
      'Washington': 'WA',
      'West Virginia': 'WV',
      'Wisconsin': 'WI',
      'Wyoming': 'WY',
      'Washington, DC': 'DC',
      'Puerto Rico': 'PR'
    };
    return results[st];
  }

  return renderAnalysisView;

})));
//# sourceMappingURL=eval.js.map