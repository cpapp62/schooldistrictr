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

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
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
   * Reparents nodes, starting from `start` (inclusive) to `end` (exclusive),
   * into another container (could be the same container), before `before`. If
   * `before` is null, it appends the nodes to the container.
   */

  var reparentNodes = function reparentNodes(container, start) {
    var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var before = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

    while (start !== end) {
      var n = start.nextSibling;
      container.insertBefore(start, before);
      start = n;
    }
  };
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
  /**
   * A TemplateResult for SVG fragments.
   *
   * This class wraps HTML in an `<svg>` tag in order to parse its contents in the
   * SVG namespace, then modifies the template to remove the `<svg>` tag so that
   * clones only container the original fragment.
   */

  var SVGTemplateResult = /*#__PURE__*/function (_TemplateResult) {
    _inherits(SVGTemplateResult, _TemplateResult);

    var _super = _createSuper(SVGTemplateResult);

    function SVGTemplateResult() {
      _classCallCheck(this, SVGTemplateResult);

      return _super.apply(this, arguments);
    }

    _createClass(SVGTemplateResult, [{
      key: "getHTML",
      value: function getHTML() {
        return "<svg>".concat(_get(_getPrototypeOf(SVGTemplateResult.prototype), "getHTML", this).call(this), "</svg>");
      }
    }, {
      key: "getTemplateElement",
      value: function getTemplateElement() {
        var template = _get(_getPrototypeOf(SVGTemplateResult.prototype), "getTemplateElement", this).call(this);

        var content = template.content;
        var svgElement = content.firstChild;
        content.removeChild(svgElement);
        reparentNodes(content, svgElement.firstChild);
        return template;
      }
    }]);

    return SVGTemplateResult;
  }(TemplateResult);

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
  /**
   * Interprets a template literal as an SVG template that can efficiently
   * render to and update a container.
   */

  var svg = function svg(strings) {
    for (var _len2 = arguments.length, values = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      values[_key2 - 1] = arguments[_key2];
    }

    return new SVGTemplateResult(strings, values, 'svg', defaultTemplateProcessor);
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

  var _state = new WeakMap(); // Effectively infinity, but a SMI.


  var _infinity = 0x7fffffff;
  /**
   * Renders one of a series of values, including Promises, to a Part.
   *
   * Values are rendered in priority order, with the first argument having the
   * highest priority and the last argument having the lowest priority. If a
   * value is a Promise, low-priority values will be rendered until it resolves.
   *
   * The priority of values can be used to create placeholder content for async
   * data. For example, a Promise with pending content can be the first,
   * highest-priority, argument, and a non_promise loading indicator template can
   * be used as the second, lower-priority, argument. The loading indicator will
   * render immediately, and the primary content will render when the Promise
   * resolves.
   *
   * Example:
   *
   *     const content = fetch('./content.txt').then(r => r.text());
   *     html`${until(content, html`<span>Loading...</span>`)}`
   */

  var until = directive(function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return function (part) {
      var state = _state.get(part);

      if (state === undefined) {
        state = {
          lastRenderedIndex: _infinity,
          values: []
        };

        _state.set(part, state);
      }

      var previousValues = state.values;
      var previousLength = previousValues.length;
      state.values = args;

      var _loop = function _loop(i) {
        // If we've rendered a higher-priority value already, stop.
        if (i > state.lastRenderedIndex) {
          return "break";
        }

        var value = args[i]; // Render non-Promise values immediately

        if (isPrimitive(value) || typeof value.then !== 'function') {
          part.setValue(value);
          state.lastRenderedIndex = i; // Since a lower-priority value will never overwrite a higher-priority
          // synchronous value, we can stop processing now.

          return "break";
        } // If this is a Promise we've already handled, skip it.


        if (i < previousLength && value === previousValues[i]) {
          return "continue";
        } // We have a Promise that we haven't seen before, so priorities may have
        // changed. Forget what we rendered before.


        state.lastRenderedIndex = _infinity;
        previousLength = 0;
        Promise.resolve(value).then(function (resolvedValue) {
          var index = state.values.indexOf(value); // If state.values doesn't contain the value, we've re-rendered without
          // the value, so don't render it. Then, only render if the value is
          // higher-priority than what's already been rendered.

          if (index > -1 && index < state.lastRenderedIndex) {
            state.lastRenderedIndex = index;
            part.setValue(resolvedValue);
            part.commit();
          }
        });
      };

      for (var i = 0; i < args.length; i++) {
        var _ret = _loop(i);

        if (_ret === "break") break;
        if (_ret === "continue") continue;
      }
    };
  });

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
  function startNewPlan(place, problem, units, id, setParts, eventCode, portalOn) {
    if (setParts) {
      problem.numberOfParts = setParts;
    }

    savePlanToStorage({
      place: place,
      problem: problem,
      units: units,
      id: id
    });
    var action = window.location.hostname === "localhost" ? "edit" : problem.type === "community" ? "COI" : "plan";

    if (portalOn) {
      eventCode += "&portal";
    }

    navigateTo(eventCode ? "/".concat(action, "?event=").concat(eventCode) : "/".concat(action));
  }
  function savePlanToStorage(_ref) {
    var place = _ref.place,
        problem = _ref.problem,
        units = _ref.units,
        id = _ref.id,
        assignment = _ref.assignment,
        name = _ref.name,
        description = _ref.description,
        parts = _ref.parts;
    var state = {
      place: place,
      problem: problem,
      units: units,
      id: id,
      assignment: assignment,
      name: name,
      description: description,
      parts: parts
    };

    if (!window.location.href.includes("embed")) {
      localStorage.setItem("savedState", JSON.stringify(state));
    }
  }

  var _templateObject$2, _templateObject2$2, _templateObject8$1, _templateObject9$1, _templateObject10$1;
  var _placesCache = {};
  var _placesList = null;
  function communitiesFilter(place) {

    return place;
  }
  function listPlacesForState(state) {
    var show_just_communities = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    if (_placesList === null) {
      return listPlaces(null, state).then(function (items) {
        _placesList = items.filter(function (place) {
          return !place.limit || show_just_communities;
        }).map(communitiesFilter);
        _placesCache[state] = _placesList.filter(function (item) {
          return item.state === state || item.name === state || item.id === state;
        });
        return _placesCache[state];
      });
    }

    if (_placesCache[state] === undefined) {
      _placesCache[state] = _placesList.filter(function (item) {
        return item.state === state || item.name === state || item.id === state;
      });
    }

    return Promise.resolve(_placesCache[state]);
  }
  function getUnits(place, problem) {
    var show_just_communities = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var eventCode = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    var allUnits = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

    if (problem.units) {
      return place.units.filter(function (units) {
        return problem.units.includes(units.id);
      });
    } // added getAll argument so we can get even non-limited ones
    // for the "Show All" button


    if (allUnits) {
      return place.units.sort(function (a, b) {
        var x = a.name.toLowerCase();
        var y = b.name.toLowerCase();

        if (x < y) {
          return -1;
        }

        if (x > y) {
          return 1;
        }

        return 0;
      });
    }

    return place.units.filter(function (unitType) {
      return eventCode || !unitType.limit || unitType.limit === "community" && show_just_communities;
    }).sort(function (a, b) {
      var x = a.name.toLowerCase();
      var y = b.name.toLowerCase();

      if (x < y) {
        return -1;
      }

      if (x > y) {
        return 1;
      }

      return 0;
    });
  }
  var problemTypeInfo = {
    multimember: html(_templateObject$2 || (_templateObject$2 = _taggedTemplateLiteral(["\n        <div class=\"place-info\">\n            Multi-member districts of varying sizes\n        </div>\n    "]))),
    community: html(_templateObject2$2 || (_templateObject2$2 = _taggedTemplateLiteral(["\n        <div class=\"place-info\">Identify a community</div>\n    "])))
  };

  function placeItems(place, onClick, eventCode, portalCode) {
    return [html(_templateObject8$1 || (_templateObject8$1 = _taggedTemplateLiteral(["", ""])), place.districtingProblems.map(function (problem) {
      return getUnits(place, problem, false, eventCode).sort(function (a, b) {
        return a.unitType < b.unitType ? 1 : -1;
      }).map(function (units) {
        return html(_templateObject9$1 || (_templateObject9$1 = _taggedTemplateLiteral(["\n                    <li\n                        class=\"", " places-list__item places-list__item--small\"\n                        @click=\"", "\"\n                    >\n                        <div class=\"place-name\">\n                            ", "\n                        </div>\n                        <div class=\"place-info\">\n                            ", "\n                        </div>\n                        ", "\n                        <div class=\"place-info\">\n                            Built out of ", "\n                        </div>\n                    </li>\n                "])), place.id + " p" + problem.type, function () {
          return onClick(place, problem, units, null, null, eventCode, portalCode);
        }, place.name, problem.custom_intro || problemTypeInfo[problem.type] || "", problem.type === "community" ? "" : html(_templateObject10$1 || (_templateObject10$1 = _taggedTemplateLiteral(["<div class=\"place-info\">\n                            ", "", " ", "\n                        </div>"])), problem.number_intro || "", problem.numberOfParts, problem.pluralNoun), units.name.toLowerCase());
      });
    }).reduce(function (items, item) {
      return [].concat(_toConsumableArray(items), _toConsumableArray(item));
    }, []))];
  }

  // https://github.com/python/cpython/blob/a74eea238f5baba15797e2e8b570d153bc8690a7/Modules/mathmodule.c#L1423
  class Adder {
    constructor() {
      this._partials = new Float64Array(32);
      this._n = 0;
    }
    add(x) {
      const p = this._partials;
      let i = 0;
      for (let j = 0; j < this._n && j < 32; j++) {
        const y = p[j],
          hi = x + y,
          lo = Math.abs(x) < Math.abs(y) ? x - (hi - y) : y - (hi - x);
        if (lo) p[i++] = lo;
        x = hi;
      }
      p[i] = x;
      this._n = i + 1;
      return this;
    }
    valueOf() {
      const p = this._partials;
      let n = this._n, x, y, lo, hi = 0;
      if (n > 0) {
        hi = p[--n];
        while (n > 0) {
          x = hi;
          y = p[--n];
          hi = x + y;
          lo = y - (hi - x);
          if (lo) break;
        }
        if (n > 0 && ((lo < 0 && p[n - 1] < 0) || (lo > 0 && p[n - 1] > 0))) {
          y = lo * 2;
          x = hi + y;
          if (y == x - hi) hi = x;
        }
      }
      return hi;
    }
  }

  function* flatten(arrays) {
    for (const array of arrays) {
      yield* array;
    }
  }

  function merge(arrays) {
    return Array.from(flatten(arrays));
  }

  function range$1(start, stop, step) {
    start = +start, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;

    var i = -1,
        n = Math.max(0, Math.ceil((stop - start) / step)) | 0,
        range = new Array(n);

    while (++i < n) {
      range[i] = start + i * step;
    }

    return range;
  }

  var epsilon = 1e-6;
  var epsilon2 = 1e-12;
  var pi = Math.PI;
  var halfPi = pi / 2;
  var quarterPi = pi / 4;
  var tau = pi * 2;

  var degrees$1 = 180 / pi;
  var radians = pi / 180;

  var abs = Math.abs;
  var atan = Math.atan;
  var atan2 = Math.atan2;
  var cos = Math.cos;
  var ceil = Math.ceil;
  var exp = Math.exp;
  var hypot = Math.hypot;
  var log = Math.log;
  var pow = Math.pow;
  var sin = Math.sin;
  var sign = Math.sign || function(x) { return x > 0 ? 1 : x < 0 ? -1 : 0; };
  var sqrt = Math.sqrt;
  var tan = Math.tan;

  function acos(x) {
    return x > 1 ? 0 : x < -1 ? pi : Math.acos(x);
  }

  function asin(x) {
    return x > 1 ? halfPi : x < -1 ? -halfPi : Math.asin(x);
  }

  function haversin(x) {
    return (x = sin(x / 2)) * x;
  }

  function noop$1() {}

  function streamGeometry(geometry, stream) {
    if (geometry && streamGeometryType.hasOwnProperty(geometry.type)) {
      streamGeometryType[geometry.type](geometry, stream);
    }
  }

  var streamObjectType = {
    Feature: function(object, stream) {
      streamGeometry(object.geometry, stream);
    },
    FeatureCollection: function(object, stream) {
      var features = object.features, i = -1, n = features.length;
      while (++i < n) streamGeometry(features[i].geometry, stream);
    }
  };

  var streamGeometryType = {
    Sphere: function(object, stream) {
      stream.sphere();
    },
    Point: function(object, stream) {
      object = object.coordinates;
      stream.point(object[0], object[1], object[2]);
    },
    MultiPoint: function(object, stream) {
      var coordinates = object.coordinates, i = -1, n = coordinates.length;
      while (++i < n) object = coordinates[i], stream.point(object[0], object[1], object[2]);
    },
    LineString: function(object, stream) {
      streamLine(object.coordinates, stream, 0);
    },
    MultiLineString: function(object, stream) {
      var coordinates = object.coordinates, i = -1, n = coordinates.length;
      while (++i < n) streamLine(coordinates[i], stream, 0);
    },
    Polygon: function(object, stream) {
      streamPolygon(object.coordinates, stream);
    },
    MultiPolygon: function(object, stream) {
      var coordinates = object.coordinates, i = -1, n = coordinates.length;
      while (++i < n) streamPolygon(coordinates[i], stream);
    },
    GeometryCollection: function(object, stream) {
      var geometries = object.geometries, i = -1, n = geometries.length;
      while (++i < n) streamGeometry(geometries[i], stream);
    }
  };

  function streamLine(coordinates, stream, closed) {
    var i = -1, n = coordinates.length - closed, coordinate;
    stream.lineStart();
    while (++i < n) coordinate = coordinates[i], stream.point(coordinate[0], coordinate[1], coordinate[2]);
    stream.lineEnd();
  }

  function streamPolygon(coordinates, stream) {
    var i = -1, n = coordinates.length;
    stream.polygonStart();
    while (++i < n) streamLine(coordinates[i], stream, 1);
    stream.polygonEnd();
  }

  function geoStream(object, stream) {
    if (object && streamObjectType.hasOwnProperty(object.type)) {
      streamObjectType[object.type](object, stream);
    } else {
      streamGeometry(object, stream);
    }
  }

  var areaRingSum$1 = new Adder();

  // hello?

  var areaSum$1 = new Adder(),
      lambda00$2,
      phi00$2,
      lambda0$2,
      cosPhi0$1,
      sinPhi0$1;

  var areaStream$1 = {
    point: noop$1,
    lineStart: noop$1,
    lineEnd: noop$1,
    polygonStart: function() {
      areaRingSum$1 = new Adder();
      areaStream$1.lineStart = areaRingStart$1;
      areaStream$1.lineEnd = areaRingEnd$1;
    },
    polygonEnd: function() {
      var areaRing = +areaRingSum$1;
      areaSum$1.add(areaRing < 0 ? tau + areaRing : areaRing);
      this.lineStart = this.lineEnd = this.point = noop$1;
    },
    sphere: function() {
      areaSum$1.add(tau);
    }
  };

  function areaRingStart$1() {
    areaStream$1.point = areaPointFirst$1;
  }

  function areaRingEnd$1() {
    areaPoint$1(lambda00$2, phi00$2);
  }

  function areaPointFirst$1(lambda, phi) {
    areaStream$1.point = areaPoint$1;
    lambda00$2 = lambda, phi00$2 = phi;
    lambda *= radians, phi *= radians;
    lambda0$2 = lambda, cosPhi0$1 = cos(phi = phi / 2 + quarterPi), sinPhi0$1 = sin(phi);
  }

  function areaPoint$1(lambda, phi) {
    lambda *= radians, phi *= radians;
    phi = phi / 2 + quarterPi; // half the angular distance from south pole

    // Spherical excess E for a spherical triangle with vertices: south pole,
    // previous point, current point.  Uses a formula derived from Cagnoli’s
    // theorem.  See Todhunter, Spherical Trig. (1871), Sec. 103, Eq. (2).
    var dLambda = lambda - lambda0$2,
        sdLambda = dLambda >= 0 ? 1 : -1,
        adLambda = sdLambda * dLambda,
        cosPhi = cos(phi),
        sinPhi = sin(phi),
        k = sinPhi0$1 * sinPhi,
        u = cosPhi0$1 * cosPhi + k * cos(adLambda),
        v = k * sdLambda * sin(adLambda);
    areaRingSum$1.add(atan2(v, u));

    // Advance the previous points.
    lambda0$2 = lambda, cosPhi0$1 = cosPhi, sinPhi0$1 = sinPhi;
  }

  function area(object) {
    areaSum$1 = new Adder();
    geoStream(object, areaStream$1);
    return areaSum$1 * 2;
  }

  function spherical(cartesian) {
    return [atan2(cartesian[1], cartesian[0]), asin(cartesian[2])];
  }

  function cartesian(spherical) {
    var lambda = spherical[0], phi = spherical[1], cosPhi = cos(phi);
    return [cosPhi * cos(lambda), cosPhi * sin(lambda), sin(phi)];
  }

  function cartesianDot(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
  }

  function cartesianCross(a, b) {
    return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
  }

  // TODO return a
  function cartesianAddInPlace(a, b) {
    a[0] += b[0], a[1] += b[1], a[2] += b[2];
  }

  function cartesianScale(vector, k) {
    return [vector[0] * k, vector[1] * k, vector[2] * k];
  }

  // TODO return d
  function cartesianNormalizeInPlace(d) {
    var l = sqrt(d[0] * d[0] + d[1] * d[1] + d[2] * d[2]);
    d[0] /= l, d[1] /= l, d[2] /= l;
  }

  var lambda0$1, phi0, lambda1, phi1, // bounds
      lambda2, // previous lambda-coordinate
      lambda00$1, phi00$1, // first point
      p0, // previous 3D point
      deltaSum,
      ranges,
      range;

  var boundsStream$1 = {
    point: boundsPoint$1,
    lineStart: boundsLineStart,
    lineEnd: boundsLineEnd,
    polygonStart: function() {
      boundsStream$1.point = boundsRingPoint;
      boundsStream$1.lineStart = boundsRingStart;
      boundsStream$1.lineEnd = boundsRingEnd;
      deltaSum = new Adder();
      areaStream$1.polygonStart();
    },
    polygonEnd: function() {
      areaStream$1.polygonEnd();
      boundsStream$1.point = boundsPoint$1;
      boundsStream$1.lineStart = boundsLineStart;
      boundsStream$1.lineEnd = boundsLineEnd;
      if (areaRingSum$1 < 0) lambda0$1 = -(lambda1 = 180), phi0 = -(phi1 = 90);
      else if (deltaSum > epsilon) phi1 = 90;
      else if (deltaSum < -epsilon) phi0 = -90;
      range[0] = lambda0$1, range[1] = lambda1;
    },
    sphere: function() {
      lambda0$1 = -(lambda1 = 180), phi0 = -(phi1 = 90);
    }
  };

  function boundsPoint$1(lambda, phi) {
    ranges.push(range = [lambda0$1 = lambda, lambda1 = lambda]);
    if (phi < phi0) phi0 = phi;
    if (phi > phi1) phi1 = phi;
  }

  function linePoint(lambda, phi) {
    var p = cartesian([lambda * radians, phi * radians]);
    if (p0) {
      var normal = cartesianCross(p0, p),
          equatorial = [normal[1], -normal[0], 0],
          inflection = cartesianCross(equatorial, normal);
      cartesianNormalizeInPlace(inflection);
      inflection = spherical(inflection);
      var delta = lambda - lambda2,
          sign = delta > 0 ? 1 : -1,
          lambdai = inflection[0] * degrees$1 * sign,
          phii,
          antimeridian = abs(delta) > 180;
      if (antimeridian ^ (sign * lambda2 < lambdai && lambdai < sign * lambda)) {
        phii = inflection[1] * degrees$1;
        if (phii > phi1) phi1 = phii;
      } else if (lambdai = (lambdai + 360) % 360 - 180, antimeridian ^ (sign * lambda2 < lambdai && lambdai < sign * lambda)) {
        phii = -inflection[1] * degrees$1;
        if (phii < phi0) phi0 = phii;
      } else {
        if (phi < phi0) phi0 = phi;
        if (phi > phi1) phi1 = phi;
      }
      if (antimeridian) {
        if (lambda < lambda2) {
          if (angle(lambda0$1, lambda) > angle(lambda0$1, lambda1)) lambda1 = lambda;
        } else {
          if (angle(lambda, lambda1) > angle(lambda0$1, lambda1)) lambda0$1 = lambda;
        }
      } else {
        if (lambda1 >= lambda0$1) {
          if (lambda < lambda0$1) lambda0$1 = lambda;
          if (lambda > lambda1) lambda1 = lambda;
        } else {
          if (lambda > lambda2) {
            if (angle(lambda0$1, lambda) > angle(lambda0$1, lambda1)) lambda1 = lambda;
          } else {
            if (angle(lambda, lambda1) > angle(lambda0$1, lambda1)) lambda0$1 = lambda;
          }
        }
      }
    } else {
      ranges.push(range = [lambda0$1 = lambda, lambda1 = lambda]);
    }
    if (phi < phi0) phi0 = phi;
    if (phi > phi1) phi1 = phi;
    p0 = p, lambda2 = lambda;
  }

  function boundsLineStart() {
    boundsStream$1.point = linePoint;
  }

  function boundsLineEnd() {
    range[0] = lambda0$1, range[1] = lambda1;
    boundsStream$1.point = boundsPoint$1;
    p0 = null;
  }

  function boundsRingPoint(lambda, phi) {
    if (p0) {
      var delta = lambda - lambda2;
      deltaSum.add(abs(delta) > 180 ? delta + (delta > 0 ? 360 : -360) : delta);
    } else {
      lambda00$1 = lambda, phi00$1 = phi;
    }
    areaStream$1.point(lambda, phi);
    linePoint(lambda, phi);
  }

  function boundsRingStart() {
    areaStream$1.lineStart();
  }

  function boundsRingEnd() {
    boundsRingPoint(lambda00$1, phi00$1);
    areaStream$1.lineEnd();
    if (abs(deltaSum) > epsilon) lambda0$1 = -(lambda1 = 180);
    range[0] = lambda0$1, range[1] = lambda1;
    p0 = null;
  }

  // Finds the left-right distance between two longitudes.
  // This is almost the same as (lambda1 - lambda0 + 360°) % 360°, except that we want
  // the distance between ±180° to be 360°.
  function angle(lambda0, lambda1) {
    return (lambda1 -= lambda0) < 0 ? lambda1 + 360 : lambda1;
  }

  function rangeCompare(a, b) {
    return a[0] - b[0];
  }

  function rangeContains(range, x) {
    return range[0] <= range[1] ? range[0] <= x && x <= range[1] : x < range[0] || range[1] < x;
  }

  function bounds(feature) {
    var i, n, a, b, merged, deltaMax, delta;

    phi1 = lambda1 = -(lambda0$1 = phi0 = Infinity);
    ranges = [];
    geoStream(feature, boundsStream$1);

    // First, sort ranges by their minimum longitudes.
    if (n = ranges.length) {
      ranges.sort(rangeCompare);

      // Then, merge any ranges that overlap.
      for (i = 1, a = ranges[0], merged = [a]; i < n; ++i) {
        b = ranges[i];
        if (rangeContains(a, b[0]) || rangeContains(a, b[1])) {
          if (angle(a[0], b[1]) > angle(a[0], a[1])) a[1] = b[1];
          if (angle(b[0], a[1]) > angle(a[0], a[1])) a[0] = b[0];
        } else {
          merged.push(a = b);
        }
      }

      // Finally, find the largest gap between the merged ranges.
      // The final bounding box will be the inverse of this gap.
      for (deltaMax = -Infinity, n = merged.length - 1, i = 0, a = merged[n]; i <= n; a = b, ++i) {
        b = merged[i];
        if ((delta = angle(a[1], b[0])) > deltaMax) deltaMax = delta, lambda0$1 = b[0], lambda1 = a[1];
      }
    }

    ranges = range = null;

    return lambda0$1 === Infinity || phi0 === Infinity
        ? [[NaN, NaN], [NaN, NaN]]
        : [[lambda0$1, phi0], [lambda1, phi1]];
  }

  var W0, W1,
      X0$1, Y0$1, Z0$1,
      X1$1, Y1$1, Z1$1,
      X2$1, Y2$1, Z2$1,
      lambda00, phi00, // first point
      x0$4, y0$4, z0; // previous point

  var centroidStream$1 = {
    sphere: noop$1,
    point: centroidPoint$1,
    lineStart: centroidLineStart$1,
    lineEnd: centroidLineEnd$1,
    polygonStart: function() {
      centroidStream$1.lineStart = centroidRingStart$1;
      centroidStream$1.lineEnd = centroidRingEnd$1;
    },
    polygonEnd: function() {
      centroidStream$1.lineStart = centroidLineStart$1;
      centroidStream$1.lineEnd = centroidLineEnd$1;
    }
  };

  // Arithmetic mean of Cartesian vectors.
  function centroidPoint$1(lambda, phi) {
    lambda *= radians, phi *= radians;
    var cosPhi = cos(phi);
    centroidPointCartesian(cosPhi * cos(lambda), cosPhi * sin(lambda), sin(phi));
  }

  function centroidPointCartesian(x, y, z) {
    ++W0;
    X0$1 += (x - X0$1) / W0;
    Y0$1 += (y - Y0$1) / W0;
    Z0$1 += (z - Z0$1) / W0;
  }

  function centroidLineStart$1() {
    centroidStream$1.point = centroidLinePointFirst;
  }

  function centroidLinePointFirst(lambda, phi) {
    lambda *= radians, phi *= radians;
    var cosPhi = cos(phi);
    x0$4 = cosPhi * cos(lambda);
    y0$4 = cosPhi * sin(lambda);
    z0 = sin(phi);
    centroidStream$1.point = centroidLinePoint;
    centroidPointCartesian(x0$4, y0$4, z0);
  }

  function centroidLinePoint(lambda, phi) {
    lambda *= radians, phi *= radians;
    var cosPhi = cos(phi),
        x = cosPhi * cos(lambda),
        y = cosPhi * sin(lambda),
        z = sin(phi),
        w = atan2(sqrt((w = y0$4 * z - z0 * y) * w + (w = z0 * x - x0$4 * z) * w + (w = x0$4 * y - y0$4 * x) * w), x0$4 * x + y0$4 * y + z0 * z);
    W1 += w;
    X1$1 += w * (x0$4 + (x0$4 = x));
    Y1$1 += w * (y0$4 + (y0$4 = y));
    Z1$1 += w * (z0 + (z0 = z));
    centroidPointCartesian(x0$4, y0$4, z0);
  }

  function centroidLineEnd$1() {
    centroidStream$1.point = centroidPoint$1;
  }

  // See J. E. Brock, The Inertia Tensor for a Spherical Triangle,
  // J. Applied Mechanics 42, 239 (1975).
  function centroidRingStart$1() {
    centroidStream$1.point = centroidRingPointFirst;
  }

  function centroidRingEnd$1() {
    centroidRingPoint(lambda00, phi00);
    centroidStream$1.point = centroidPoint$1;
  }

  function centroidRingPointFirst(lambda, phi) {
    lambda00 = lambda, phi00 = phi;
    lambda *= radians, phi *= radians;
    centroidStream$1.point = centroidRingPoint;
    var cosPhi = cos(phi);
    x0$4 = cosPhi * cos(lambda);
    y0$4 = cosPhi * sin(lambda);
    z0 = sin(phi);
    centroidPointCartesian(x0$4, y0$4, z0);
  }

  function centroidRingPoint(lambda, phi) {
    lambda *= radians, phi *= radians;
    var cosPhi = cos(phi),
        x = cosPhi * cos(lambda),
        y = cosPhi * sin(lambda),
        z = sin(phi),
        cx = y0$4 * z - z0 * y,
        cy = z0 * x - x0$4 * z,
        cz = x0$4 * y - y0$4 * x,
        m = hypot(cx, cy, cz),
        w = asin(m), // line weight = angle
        v = m && -w / m; // area weight multiplier
    X2$1.add(v * cx);
    Y2$1.add(v * cy);
    Z2$1.add(v * cz);
    W1 += w;
    X1$1 += w * (x0$4 + (x0$4 = x));
    Y1$1 += w * (y0$4 + (y0$4 = y));
    Z1$1 += w * (z0 + (z0 = z));
    centroidPointCartesian(x0$4, y0$4, z0);
  }

  function centroid(object) {
    W0 = W1 =
    X0$1 = Y0$1 = Z0$1 =
    X1$1 = Y1$1 = Z1$1 = 0;
    X2$1 = new Adder();
    Y2$1 = new Adder();
    Z2$1 = new Adder();
    geoStream(object, centroidStream$1);

    var x = +X2$1,
        y = +Y2$1,
        z = +Z2$1,
        m = hypot(x, y, z);

    // If the area-weighted ccentroid is undefined, fall back to length-weighted ccentroid.
    if (m < epsilon2) {
      x = X1$1, y = Y1$1, z = Z1$1;
      // If the feature has zero length, fall back to arithmetic mean of point vectors.
      if (W1 < epsilon) x = X0$1, y = Y0$1, z = Z0$1;
      m = hypot(x, y, z);
      // If the feature still has an undefined ccentroid, then return.
      if (m < epsilon2) return [NaN, NaN];
    }

    return [atan2(y, x) * degrees$1, asin(z / m) * degrees$1];
  }

  function constant$2(x) {
    return function() {
      return x;
    };
  }

  function compose(a, b) {

    function compose(x, y) {
      return x = a(x, y), b(x[0], x[1]);
    }

    if (a.invert && b.invert) compose.invert = function(x, y) {
      return x = b.invert(x, y), x && a.invert(x[0], x[1]);
    };

    return compose;
  }

  function rotationIdentity(lambda, phi) {
    return [abs(lambda) > pi ? lambda + Math.round(-lambda / tau) * tau : lambda, phi];
  }

  rotationIdentity.invert = rotationIdentity;

  function rotateRadians(deltaLambda, deltaPhi, deltaGamma) {
    return (deltaLambda %= tau) ? (deltaPhi || deltaGamma ? compose(rotationLambda(deltaLambda), rotationPhiGamma(deltaPhi, deltaGamma))
      : rotationLambda(deltaLambda))
      : (deltaPhi || deltaGamma ? rotationPhiGamma(deltaPhi, deltaGamma)
      : rotationIdentity);
  }

  function forwardRotationLambda(deltaLambda) {
    return function(lambda, phi) {
      return lambda += deltaLambda, [lambda > pi ? lambda - tau : lambda < -pi ? lambda + tau : lambda, phi];
    };
  }

  function rotationLambda(deltaLambda) {
    var rotation = forwardRotationLambda(deltaLambda);
    rotation.invert = forwardRotationLambda(-deltaLambda);
    return rotation;
  }

  function rotationPhiGamma(deltaPhi, deltaGamma) {
    var cosDeltaPhi = cos(deltaPhi),
        sinDeltaPhi = sin(deltaPhi),
        cosDeltaGamma = cos(deltaGamma),
        sinDeltaGamma = sin(deltaGamma);

    function rotation(lambda, phi) {
      var cosPhi = cos(phi),
          x = cos(lambda) * cosPhi,
          y = sin(lambda) * cosPhi,
          z = sin(phi),
          k = z * cosDeltaPhi + x * sinDeltaPhi;
      return [
        atan2(y * cosDeltaGamma - k * sinDeltaGamma, x * cosDeltaPhi - z * sinDeltaPhi),
        asin(k * cosDeltaGamma + y * sinDeltaGamma)
      ];
    }

    rotation.invert = function(lambda, phi) {
      var cosPhi = cos(phi),
          x = cos(lambda) * cosPhi,
          y = sin(lambda) * cosPhi,
          z = sin(phi),
          k = z * cosDeltaGamma - y * sinDeltaGamma;
      return [
        atan2(y * cosDeltaGamma + z * sinDeltaGamma, x * cosDeltaPhi + k * sinDeltaPhi),
        asin(k * cosDeltaPhi - x * sinDeltaPhi)
      ];
    };

    return rotation;
  }

  function rotation(rotate) {
    rotate = rotateRadians(rotate[0] * radians, rotate[1] * radians, rotate.length > 2 ? rotate[2] * radians : 0);

    function forward(coordinates) {
      coordinates = rotate(coordinates[0] * radians, coordinates[1] * radians);
      return coordinates[0] *= degrees$1, coordinates[1] *= degrees$1, coordinates;
    }

    forward.invert = function(coordinates) {
      coordinates = rotate.invert(coordinates[0] * radians, coordinates[1] * radians);
      return coordinates[0] *= degrees$1, coordinates[1] *= degrees$1, coordinates;
    };

    return forward;
  }

  // Generates a circle centered at [0°, 0°], with a given radius and precision.
  function circleStream(stream, radius, delta, direction, t0, t1) {
    if (!delta) return;
    var cosRadius = cos(radius),
        sinRadius = sin(radius),
        step = direction * delta;
    if (t0 == null) {
      t0 = radius + direction * tau;
      t1 = radius - step / 2;
    } else {
      t0 = circleRadius(cosRadius, t0);
      t1 = circleRadius(cosRadius, t1);
      if (direction > 0 ? t0 < t1 : t0 > t1) t0 += direction * tau;
    }
    for (var point, t = t0; direction > 0 ? t > t1 : t < t1; t -= step) {
      point = spherical([cosRadius, -sinRadius * cos(t), -sinRadius * sin(t)]);
      stream.point(point[0], point[1]);
    }
  }

  // Returns the signed angle of a cartesian point relative to [cosRadius, 0, 0].
  function circleRadius(cosRadius, point) {
    point = cartesian(point), point[0] -= cosRadius;
    cartesianNormalizeInPlace(point);
    var radius = acos(-point[1]);
    return ((-point[2] < 0 ? -radius : radius) + tau - epsilon) % tau;
  }

  function circle$1() {
    var center = constant$2([0, 0]),
        radius = constant$2(90),
        precision = constant$2(6),
        ring,
        rotate,
        stream = {point: point};

    function point(x, y) {
      ring.push(x = rotate(x, y));
      x[0] *= degrees$1, x[1] *= degrees$1;
    }

    function circle() {
      var c = center.apply(this, arguments),
          r = radius.apply(this, arguments) * radians,
          p = precision.apply(this, arguments) * radians;
      ring = [];
      rotate = rotateRadians(-c[0] * radians, -c[1] * radians, 0).invert;
      circleStream(stream, r, p, 1);
      c = {type: "Polygon", coordinates: [ring]};
      ring = rotate = null;
      return c;
    }

    circle.center = function(_) {
      return arguments.length ? (center = typeof _ === "function" ? _ : constant$2([+_[0], +_[1]]), circle) : center;
    };

    circle.radius = function(_) {
      return arguments.length ? (radius = typeof _ === "function" ? _ : constant$2(+_), circle) : radius;
    };

    circle.precision = function(_) {
      return arguments.length ? (precision = typeof _ === "function" ? _ : constant$2(+_), circle) : precision;
    };

    return circle;
  }

  function clipBuffer() {
    var lines = [],
        line;
    return {
      point: function(x, y, m) {
        line.push([x, y, m]);
      },
      lineStart: function() {
        lines.push(line = []);
      },
      lineEnd: noop$1,
      rejoin: function() {
        if (lines.length > 1) lines.push(lines.pop().concat(lines.shift()));
      },
      result: function() {
        var result = lines;
        lines = [];
        line = null;
        return result;
      }
    };
  }

  function pointEqual(a, b) {
    return abs(a[0] - b[0]) < epsilon && abs(a[1] - b[1]) < epsilon;
  }

  function Intersection(point, points, other, entry) {
    this.x = point;
    this.z = points;
    this.o = other; // another intersection
    this.e = entry; // is an entry?
    this.v = false; // visited
    this.n = this.p = null; // next & previous
  }

  // A generalized polygon clipping algorithm: given a polygon that has been cut
  // into its visible line segments, and rejoins the segments by interpolating
  // along the clip edge.
  function clipRejoin(segments, compareIntersection, startInside, interpolate, stream) {
    var subject = [],
        clip = [],
        i,
        n;

    segments.forEach(function(segment) {
      if ((n = segment.length - 1) <= 0) return;
      var n, p0 = segment[0], p1 = segment[n], x;

      if (pointEqual(p0, p1)) {
        if (!p0[2] && !p1[2]) {
          stream.lineStart();
          for (i = 0; i < n; ++i) stream.point((p0 = segment[i])[0], p0[1]);
          stream.lineEnd();
          return;
        }
        // handle degenerate cases by moving the point
        p1[0] += 2 * epsilon;
      }

      subject.push(x = new Intersection(p0, segment, null, true));
      clip.push(x.o = new Intersection(p0, null, x, false));
      subject.push(x = new Intersection(p1, segment, null, false));
      clip.push(x.o = new Intersection(p1, null, x, true));
    });

    if (!subject.length) return;

    clip.sort(compareIntersection);
    link(subject);
    link(clip);

    for (i = 0, n = clip.length; i < n; ++i) {
      clip[i].e = startInside = !startInside;
    }

    var start = subject[0],
        points,
        point;

    while (1) {
      // Find first unvisited intersection.
      var current = start,
          isSubject = true;
      while (current.v) if ((current = current.n) === start) return;
      points = current.z;
      stream.lineStart();
      do {
        current.v = current.o.v = true;
        if (current.e) {
          if (isSubject) {
            for (i = 0, n = points.length; i < n; ++i) stream.point((point = points[i])[0], point[1]);
          } else {
            interpolate(current.x, current.n.x, 1, stream);
          }
          current = current.n;
        } else {
          if (isSubject) {
            points = current.p.z;
            for (i = points.length - 1; i >= 0; --i) stream.point((point = points[i])[0], point[1]);
          } else {
            interpolate(current.x, current.p.x, -1, stream);
          }
          current = current.p;
        }
        current = current.o;
        points = current.z;
        isSubject = !isSubject;
      } while (!current.v);
      stream.lineEnd();
    }
  }

  function link(array) {
    if (!(n = array.length)) return;
    var n,
        i = 0,
        a = array[0],
        b;
    while (++i < n) {
      a.n = b = array[i];
      b.p = a;
      a = b;
    }
    a.n = b = array[0];
    b.p = a;
  }

  function longitude(point) {
    if (abs(point[0]) <= pi)
      return point[0];
    else
      return sign(point[0]) * ((abs(point[0]) + pi) % tau - pi);
  }

  function polygonContains(polygon, point) {
    var lambda = longitude(point),
        phi = point[1],
        sinPhi = sin(phi),
        normal = [sin(lambda), -cos(lambda), 0],
        angle = 0,
        winding = 0;

    var sum = new Adder();

    if (sinPhi === 1) phi = halfPi + epsilon;
    else if (sinPhi === -1) phi = -halfPi - epsilon;

    for (var i = 0, n = polygon.length; i < n; ++i) {
      if (!(m = (ring = polygon[i]).length)) continue;
      var ring,
          m,
          point0 = ring[m - 1],
          lambda0 = longitude(point0),
          phi0 = point0[1] / 2 + quarterPi,
          sinPhi0 = sin(phi0),
          cosPhi0 = cos(phi0);

      for (var j = 0; j < m; ++j, lambda0 = lambda1, sinPhi0 = sinPhi1, cosPhi0 = cosPhi1, point0 = point1) {
        var point1 = ring[j],
            lambda1 = longitude(point1),
            phi1 = point1[1] / 2 + quarterPi,
            sinPhi1 = sin(phi1),
            cosPhi1 = cos(phi1),
            delta = lambda1 - lambda0,
            sign = delta >= 0 ? 1 : -1,
            absDelta = sign * delta,
            antimeridian = absDelta > pi,
            k = sinPhi0 * sinPhi1;

        sum.add(atan2(k * sign * sin(absDelta), cosPhi0 * cosPhi1 + k * cos(absDelta)));
        angle += antimeridian ? delta + sign * tau : delta;

        // Are the longitudes either side of the point’s meridian (lambda),
        // and are the latitudes smaller than the parallel (phi)?
        if (antimeridian ^ lambda0 >= lambda ^ lambda1 >= lambda) {
          var arc = cartesianCross(cartesian(point0), cartesian(point1));
          cartesianNormalizeInPlace(arc);
          var intersection = cartesianCross(normal, arc);
          cartesianNormalizeInPlace(intersection);
          var phiArc = (antimeridian ^ delta >= 0 ? -1 : 1) * asin(intersection[2]);
          if (phi > phiArc || phi === phiArc && (arc[0] || arc[1])) {
            winding += antimeridian ^ delta >= 0 ? 1 : -1;
          }
        }
      }
    }

    // First, determine whether the South pole is inside or outside:
    //
    // It is inside if:
    // * the polygon winds around it in a clockwise direction.
    // * the polygon does not (cumulatively) wind around it, but has a negative
    //   (counter-clockwise) area.
    //
    // Second, count the (signed) number of times a segment crosses a lambda
    // from the point to the South pole.  If it is zero, then the point is the
    // same side as the South pole.

    return (angle < -epsilon || angle < epsilon && sum < -epsilon2) ^ (winding & 1);
  }

  function clip(pointVisible, clipLine, interpolate, start) {
    return function(sink) {
      var line = clipLine(sink),
          ringBuffer = clipBuffer(),
          ringSink = clipLine(ringBuffer),
          polygonStarted = false,
          polygon,
          segments,
          ring;

      var clip = {
        point: point,
        lineStart: lineStart,
        lineEnd: lineEnd,
        polygonStart: function() {
          clip.point = pointRing;
          clip.lineStart = ringStart;
          clip.lineEnd = ringEnd;
          segments = [];
          polygon = [];
        },
        polygonEnd: function() {
          clip.point = point;
          clip.lineStart = lineStart;
          clip.lineEnd = lineEnd;
          segments = merge(segments);
          var startInside = polygonContains(polygon, start);
          if (segments.length) {
            if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
            clipRejoin(segments, compareIntersection, startInside, interpolate, sink);
          } else if (startInside) {
            if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
            sink.lineStart();
            interpolate(null, null, 1, sink);
            sink.lineEnd();
          }
          if (polygonStarted) sink.polygonEnd(), polygonStarted = false;
          segments = polygon = null;
        },
        sphere: function() {
          sink.polygonStart();
          sink.lineStart();
          interpolate(null, null, 1, sink);
          sink.lineEnd();
          sink.polygonEnd();
        }
      };

      function point(lambda, phi) {
        if (pointVisible(lambda, phi)) sink.point(lambda, phi);
      }

      function pointLine(lambda, phi) {
        line.point(lambda, phi);
      }

      function lineStart() {
        clip.point = pointLine;
        line.lineStart();
      }

      function lineEnd() {
        clip.point = point;
        line.lineEnd();
      }

      function pointRing(lambda, phi) {
        ring.push([lambda, phi]);
        ringSink.point(lambda, phi);
      }

      function ringStart() {
        ringSink.lineStart();
        ring = [];
      }

      function ringEnd() {
        pointRing(ring[0][0], ring[0][1]);
        ringSink.lineEnd();

        var clean = ringSink.clean(),
            ringSegments = ringBuffer.result(),
            i, n = ringSegments.length, m,
            segment,
            point;

        ring.pop();
        polygon.push(ring);
        ring = null;

        if (!n) return;

        // No intersections.
        if (clean & 1) {
          segment = ringSegments[0];
          if ((m = segment.length - 1) > 0) {
            if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
            sink.lineStart();
            for (i = 0; i < m; ++i) sink.point((point = segment[i])[0], point[1]);
            sink.lineEnd();
          }
          return;
        }

        // Rejoin connected segments.
        // TODO reuse ringBuffer.rejoin()?
        if (n > 1 && clean & 2) ringSegments.push(ringSegments.pop().concat(ringSegments.shift()));

        segments.push(ringSegments.filter(validSegment));
      }

      return clip;
    };
  }

  function validSegment(segment) {
    return segment.length > 1;
  }

  // Intersections are sorted along the clip edge. For both antimeridian cutting
  // and circle clipping, the same comparison is used.
  function compareIntersection(a, b) {
    return ((a = a.x)[0] < 0 ? a[1] - halfPi - epsilon : halfPi - a[1])
         - ((b = b.x)[0] < 0 ? b[1] - halfPi - epsilon : halfPi - b[1]);
  }

  var clipAntimeridian = clip(
    function() { return true; },
    clipAntimeridianLine,
    clipAntimeridianInterpolate,
    [-pi, -halfPi]
  );

  // Takes a line and cuts into visible segments. Return values: 0 - there were
  // intersections or the line was empty; 1 - no intersections; 2 - there were
  // intersections, and the first and last segments should be rejoined.
  function clipAntimeridianLine(stream) {
    var lambda0 = NaN,
        phi0 = NaN,
        sign0 = NaN,
        clean; // no intersections

    return {
      lineStart: function() {
        stream.lineStart();
        clean = 1;
      },
      point: function(lambda1, phi1) {
        var sign1 = lambda1 > 0 ? pi : -pi,
            delta = abs(lambda1 - lambda0);
        if (abs(delta - pi) < epsilon) { // line crosses a pole
          stream.point(lambda0, phi0 = (phi0 + phi1) / 2 > 0 ? halfPi : -halfPi);
          stream.point(sign0, phi0);
          stream.lineEnd();
          stream.lineStart();
          stream.point(sign1, phi0);
          stream.point(lambda1, phi0);
          clean = 0;
        } else if (sign0 !== sign1 && delta >= pi) { // line crosses antimeridian
          if (abs(lambda0 - sign0) < epsilon) lambda0 -= sign0 * epsilon; // handle degeneracies
          if (abs(lambda1 - sign1) < epsilon) lambda1 -= sign1 * epsilon;
          phi0 = clipAntimeridianIntersect(lambda0, phi0, lambda1, phi1);
          stream.point(sign0, phi0);
          stream.lineEnd();
          stream.lineStart();
          stream.point(sign1, phi0);
          clean = 0;
        }
        stream.point(lambda0 = lambda1, phi0 = phi1);
        sign0 = sign1;
      },
      lineEnd: function() {
        stream.lineEnd();
        lambda0 = phi0 = NaN;
      },
      clean: function() {
        return 2 - clean; // if intersections, rejoin first and last segments
      }
    };
  }

  function clipAntimeridianIntersect(lambda0, phi0, lambda1, phi1) {
    var cosPhi0,
        cosPhi1,
        sinLambda0Lambda1 = sin(lambda0 - lambda1);
    return abs(sinLambda0Lambda1) > epsilon
        ? atan((sin(phi0) * (cosPhi1 = cos(phi1)) * sin(lambda1)
            - sin(phi1) * (cosPhi0 = cos(phi0)) * sin(lambda0))
            / (cosPhi0 * cosPhi1 * sinLambda0Lambda1))
        : (phi0 + phi1) / 2;
  }

  function clipAntimeridianInterpolate(from, to, direction, stream) {
    var phi;
    if (from == null) {
      phi = direction * halfPi;
      stream.point(-pi, phi);
      stream.point(0, phi);
      stream.point(pi, phi);
      stream.point(pi, 0);
      stream.point(pi, -phi);
      stream.point(0, -phi);
      stream.point(-pi, -phi);
      stream.point(-pi, 0);
      stream.point(-pi, phi);
    } else if (abs(from[0] - to[0]) > epsilon) {
      var lambda = from[0] < to[0] ? pi : -pi;
      phi = direction * lambda / 2;
      stream.point(-lambda, phi);
      stream.point(0, phi);
      stream.point(lambda, phi);
    } else {
      stream.point(to[0], to[1]);
    }
  }

  function clipCircle(radius) {
    var cr = cos(radius),
        delta = 6 * radians,
        smallRadius = cr > 0,
        notHemisphere = abs(cr) > epsilon; // TODO optimise for this common case

    function interpolate(from, to, direction, stream) {
      circleStream(stream, radius, delta, direction, from, to);
    }

    function visible(lambda, phi) {
      return cos(lambda) * cos(phi) > cr;
    }

    // Takes a line and cuts into visible segments. Return values used for polygon
    // clipping: 0 - there were intersections or the line was empty; 1 - no
    // intersections 2 - there were intersections, and the first and last segments
    // should be rejoined.
    function clipLine(stream) {
      var point0, // previous point
          c0, // code for previous point
          v0, // visibility of previous point
          v00, // visibility of first point
          clean; // no intersections
      return {
        lineStart: function() {
          v00 = v0 = false;
          clean = 1;
        },
        point: function(lambda, phi) {
          var point1 = [lambda, phi],
              point2,
              v = visible(lambda, phi),
              c = smallRadius
                ? v ? 0 : code(lambda, phi)
                : v ? code(lambda + (lambda < 0 ? pi : -pi), phi) : 0;
          if (!point0 && (v00 = v0 = v)) stream.lineStart();
          if (v !== v0) {
            point2 = intersect(point0, point1);
            if (!point2 || pointEqual(point0, point2) || pointEqual(point1, point2))
              point1[2] = 1;
          }
          if (v !== v0) {
            clean = 0;
            if (v) {
              // outside going in
              stream.lineStart();
              point2 = intersect(point1, point0);
              stream.point(point2[0], point2[1]);
            } else {
              // inside going out
              point2 = intersect(point0, point1);
              stream.point(point2[0], point2[1], 2);
              stream.lineEnd();
            }
            point0 = point2;
          } else if (notHemisphere && point0 && smallRadius ^ v) {
            var t;
            // If the codes for two points are different, or are both zero,
            // and there this segment intersects with the small circle.
            if (!(c & c0) && (t = intersect(point1, point0, true))) {
              clean = 0;
              if (smallRadius) {
                stream.lineStart();
                stream.point(t[0][0], t[0][1]);
                stream.point(t[1][0], t[1][1]);
                stream.lineEnd();
              } else {
                stream.point(t[1][0], t[1][1]);
                stream.lineEnd();
                stream.lineStart();
                stream.point(t[0][0], t[0][1], 3);
              }
            }
          }
          if (v && (!point0 || !pointEqual(point0, point1))) {
            stream.point(point1[0], point1[1]);
          }
          point0 = point1, v0 = v, c0 = c;
        },
        lineEnd: function() {
          if (v0) stream.lineEnd();
          point0 = null;
        },
        // Rejoin first and last segments if there were intersections and the first
        // and last points were visible.
        clean: function() {
          return clean | ((v00 && v0) << 1);
        }
      };
    }

    // Intersects the great circle between a and b with the clip circle.
    function intersect(a, b, two) {
      var pa = cartesian(a),
          pb = cartesian(b);

      // We have two planes, n1.p = d1 and n2.p = d2.
      // Find intersection line p(t) = c1 n1 + c2 n2 + t (n1 ⨯ n2).
      var n1 = [1, 0, 0], // normal
          n2 = cartesianCross(pa, pb),
          n2n2 = cartesianDot(n2, n2),
          n1n2 = n2[0], // cartesianDot(n1, n2),
          determinant = n2n2 - n1n2 * n1n2;

      // Two polar points.
      if (!determinant) return !two && a;

      var c1 =  cr * n2n2 / determinant,
          c2 = -cr * n1n2 / determinant,
          n1xn2 = cartesianCross(n1, n2),
          A = cartesianScale(n1, c1),
          B = cartesianScale(n2, c2);
      cartesianAddInPlace(A, B);

      // Solve |p(t)|^2 = 1.
      var u = n1xn2,
          w = cartesianDot(A, u),
          uu = cartesianDot(u, u),
          t2 = w * w - uu * (cartesianDot(A, A) - 1);

      if (t2 < 0) return;

      var t = sqrt(t2),
          q = cartesianScale(u, (-w - t) / uu);
      cartesianAddInPlace(q, A);
      q = spherical(q);

      if (!two) return q;

      // Two intersection points.
      var lambda0 = a[0],
          lambda1 = b[0],
          phi0 = a[1],
          phi1 = b[1],
          z;

      if (lambda1 < lambda0) z = lambda0, lambda0 = lambda1, lambda1 = z;

      var delta = lambda1 - lambda0,
          polar = abs(delta - pi) < epsilon,
          meridian = polar || delta < epsilon;

      if (!polar && phi1 < phi0) z = phi0, phi0 = phi1, phi1 = z;

      // Check that the first point is between a and b.
      if (meridian
          ? polar
            ? phi0 + phi1 > 0 ^ q[1] < (abs(q[0] - lambda0) < epsilon ? phi0 : phi1)
            : phi0 <= q[1] && q[1] <= phi1
          : delta > pi ^ (lambda0 <= q[0] && q[0] <= lambda1)) {
        var q1 = cartesianScale(u, (-w + t) / uu);
        cartesianAddInPlace(q1, A);
        return [q, spherical(q1)];
      }
    }

    // Generates a 4-bit vector representing the location of a point relative to
    // the small circle's bounding box.
    function code(lambda, phi) {
      var r = smallRadius ? radius : pi - radius,
          code = 0;
      if (lambda < -r) code |= 1; // left
      else if (lambda > r) code |= 2; // right
      if (phi < -r) code |= 4; // below
      else if (phi > r) code |= 8; // above
      return code;
    }

    return clip(visible, clipLine, interpolate, smallRadius ? [0, -radius] : [-pi, radius - pi]);
  }

  function clipLine(a, b, x0, y0, x1, y1) {
    var ax = a[0],
        ay = a[1],
        bx = b[0],
        by = b[1],
        t0 = 0,
        t1 = 1,
        dx = bx - ax,
        dy = by - ay,
        r;

    r = x0 - ax;
    if (!dx && r > 0) return;
    r /= dx;
    if (dx < 0) {
      if (r < t0) return;
      if (r < t1) t1 = r;
    } else if (dx > 0) {
      if (r > t1) return;
      if (r > t0) t0 = r;
    }

    r = x1 - ax;
    if (!dx && r < 0) return;
    r /= dx;
    if (dx < 0) {
      if (r > t1) return;
      if (r > t0) t0 = r;
    } else if (dx > 0) {
      if (r < t0) return;
      if (r < t1) t1 = r;
    }

    r = y0 - ay;
    if (!dy && r > 0) return;
    r /= dy;
    if (dy < 0) {
      if (r < t0) return;
      if (r < t1) t1 = r;
    } else if (dy > 0) {
      if (r > t1) return;
      if (r > t0) t0 = r;
    }

    r = y1 - ay;
    if (!dy && r < 0) return;
    r /= dy;
    if (dy < 0) {
      if (r > t1) return;
      if (r > t0) t0 = r;
    } else if (dy > 0) {
      if (r < t0) return;
      if (r < t1) t1 = r;
    }

    if (t0 > 0) a[0] = ax + t0 * dx, a[1] = ay + t0 * dy;
    if (t1 < 1) b[0] = ax + t1 * dx, b[1] = ay + t1 * dy;
    return true;
  }

  var clipMax = 1e9, clipMin = -clipMax;

  // TODO Use d3-polygon’s polygonContains here for the ring check?
  // TODO Eliminate duplicate buffering in clipBuffer and polygon.push?

  function clipRectangle(x0, y0, x1, y1) {

    function visible(x, y) {
      return x0 <= x && x <= x1 && y0 <= y && y <= y1;
    }

    function interpolate(from, to, direction, stream) {
      var a = 0, a1 = 0;
      if (from == null
          || (a = corner(from, direction)) !== (a1 = corner(to, direction))
          || comparePoint(from, to) < 0 ^ direction > 0) {
        do stream.point(a === 0 || a === 3 ? x0 : x1, a > 1 ? y1 : y0);
        while ((a = (a + direction + 4) % 4) !== a1);
      } else {
        stream.point(to[0], to[1]);
      }
    }

    function corner(p, direction) {
      return abs(p[0] - x0) < epsilon ? direction > 0 ? 0 : 3
          : abs(p[0] - x1) < epsilon ? direction > 0 ? 2 : 1
          : abs(p[1] - y0) < epsilon ? direction > 0 ? 1 : 0
          : direction > 0 ? 3 : 2; // abs(p[1] - y1) < epsilon
    }

    function compareIntersection(a, b) {
      return comparePoint(a.x, b.x);
    }

    function comparePoint(a, b) {
      var ca = corner(a, 1),
          cb = corner(b, 1);
      return ca !== cb ? ca - cb
          : ca === 0 ? b[1] - a[1]
          : ca === 1 ? a[0] - b[0]
          : ca === 2 ? a[1] - b[1]
          : b[0] - a[0];
    }

    return function(stream) {
      var activeStream = stream,
          bufferStream = clipBuffer(),
          segments,
          polygon,
          ring,
          x__, y__, v__, // first point
          x_, y_, v_, // previous point
          first,
          clean;

      var clipStream = {
        point: point,
        lineStart: lineStart,
        lineEnd: lineEnd,
        polygonStart: polygonStart,
        polygonEnd: polygonEnd
      };

      function point(x, y) {
        if (visible(x, y)) activeStream.point(x, y);
      }

      function polygonInside() {
        var winding = 0;

        for (var i = 0, n = polygon.length; i < n; ++i) {
          for (var ring = polygon[i], j = 1, m = ring.length, point = ring[0], a0, a1, b0 = point[0], b1 = point[1]; j < m; ++j) {
            a0 = b0, a1 = b1, point = ring[j], b0 = point[0], b1 = point[1];
            if (a1 <= y1) { if (b1 > y1 && (b0 - a0) * (y1 - a1) > (b1 - a1) * (x0 - a0)) ++winding; }
            else { if (b1 <= y1 && (b0 - a0) * (y1 - a1) < (b1 - a1) * (x0 - a0)) --winding; }
          }
        }

        return winding;
      }

      // Buffer geometry within a polygon and then clip it en masse.
      function polygonStart() {
        activeStream = bufferStream, segments = [], polygon = [], clean = true;
      }

      function polygonEnd() {
        var startInside = polygonInside(),
            cleanInside = clean && startInside,
            visible = (segments = merge(segments)).length;
        if (cleanInside || visible) {
          stream.polygonStart();
          if (cleanInside) {
            stream.lineStart();
            interpolate(null, null, 1, stream);
            stream.lineEnd();
          }
          if (visible) {
            clipRejoin(segments, compareIntersection, startInside, interpolate, stream);
          }
          stream.polygonEnd();
        }
        activeStream = stream, segments = polygon = ring = null;
      }

      function lineStart() {
        clipStream.point = linePoint;
        if (polygon) polygon.push(ring = []);
        first = true;
        v_ = false;
        x_ = y_ = NaN;
      }

      // TODO rather than special-case polygons, simply handle them separately.
      // Ideally, coincident intersection points should be jittered to avoid
      // clipping issues.
      function lineEnd() {
        if (segments) {
          linePoint(x__, y__);
          if (v__ && v_) bufferStream.rejoin();
          segments.push(bufferStream.result());
        }
        clipStream.point = point;
        if (v_) activeStream.lineEnd();
      }

      function linePoint(x, y) {
        var v = visible(x, y);
        if (polygon) ring.push([x, y]);
        if (first) {
          x__ = x, y__ = y, v__ = v;
          first = false;
          if (v) {
            activeStream.lineStart();
            activeStream.point(x, y);
          }
        } else {
          if (v && v_) activeStream.point(x, y);
          else {
            var a = [x_ = Math.max(clipMin, Math.min(clipMax, x_)), y_ = Math.max(clipMin, Math.min(clipMax, y_))],
                b = [x = Math.max(clipMin, Math.min(clipMax, x)), y = Math.max(clipMin, Math.min(clipMax, y))];
            if (clipLine(a, b, x0, y0, x1, y1)) {
              if (!v_) {
                activeStream.lineStart();
                activeStream.point(a[0], a[1]);
              }
              activeStream.point(b[0], b[1]);
              if (!v) activeStream.lineEnd();
              clean = false;
            } else if (v) {
              activeStream.lineStart();
              activeStream.point(x, y);
              clean = false;
            }
          }
        }
        x_ = x, y_ = y, v_ = v;
      }

      return clipStream;
    };
  }

  function extent() {
    var x0 = 0,
        y0 = 0,
        x1 = 960,
        y1 = 500,
        cache,
        cacheStream,
        clip;

    return clip = {
      stream: function(stream) {
        return cache && cacheStream === stream ? cache : cache = clipRectangle(x0, y0, x1, y1)(cacheStream = stream);
      },
      extent: function(_) {
        return arguments.length ? (x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1], cache = cacheStream = null, clip) : [[x0, y0], [x1, y1]];
      }
    };
  }

  var lengthSum$1,
      lambda0,
      sinPhi0,
      cosPhi0;

  var lengthStream$1 = {
    sphere: noop$1,
    point: noop$1,
    lineStart: lengthLineStart,
    lineEnd: noop$1,
    polygonStart: noop$1,
    polygonEnd: noop$1
  };

  function lengthLineStart() {
    lengthStream$1.point = lengthPointFirst$1;
    lengthStream$1.lineEnd = lengthLineEnd;
  }

  function lengthLineEnd() {
    lengthStream$1.point = lengthStream$1.lineEnd = noop$1;
  }

  function lengthPointFirst$1(lambda, phi) {
    lambda *= radians, phi *= radians;
    lambda0 = lambda, sinPhi0 = sin(phi), cosPhi0 = cos(phi);
    lengthStream$1.point = lengthPoint$1;
  }

  function lengthPoint$1(lambda, phi) {
    lambda *= radians, phi *= radians;
    var sinPhi = sin(phi),
        cosPhi = cos(phi),
        delta = abs(lambda - lambda0),
        cosDelta = cos(delta),
        sinDelta = sin(delta),
        x = cosPhi * sinDelta,
        y = cosPhi0 * sinPhi - sinPhi0 * cosPhi * cosDelta,
        z = sinPhi0 * sinPhi + cosPhi0 * cosPhi * cosDelta;
    lengthSum$1.add(atan2(sqrt(x * x + y * y), z));
    lambda0 = lambda, sinPhi0 = sinPhi, cosPhi0 = cosPhi;
  }

  function length(object) {
    lengthSum$1 = new Adder();
    geoStream(object, lengthStream$1);
    return +lengthSum$1;
  }

  var coordinates = [null, null],
      object = {type: "LineString", coordinates: coordinates};

  function distance(a, b) {
    coordinates[0] = a;
    coordinates[1] = b;
    return length(object);
  }

  var containsObjectType = {
    Feature: function(object, point) {
      return containsGeometry(object.geometry, point);
    },
    FeatureCollection: function(object, point) {
      var features = object.features, i = -1, n = features.length;
      while (++i < n) if (containsGeometry(features[i].geometry, point)) return true;
      return false;
    }
  };

  var containsGeometryType = {
    Sphere: function() {
      return true;
    },
    Point: function(object, point) {
      return containsPoint(object.coordinates, point);
    },
    MultiPoint: function(object, point) {
      var coordinates = object.coordinates, i = -1, n = coordinates.length;
      while (++i < n) if (containsPoint(coordinates[i], point)) return true;
      return false;
    },
    LineString: function(object, point) {
      return containsLine(object.coordinates, point);
    },
    MultiLineString: function(object, point) {
      var coordinates = object.coordinates, i = -1, n = coordinates.length;
      while (++i < n) if (containsLine(coordinates[i], point)) return true;
      return false;
    },
    Polygon: function(object, point) {
      return containsPolygon(object.coordinates, point);
    },
    MultiPolygon: function(object, point) {
      var coordinates = object.coordinates, i = -1, n = coordinates.length;
      while (++i < n) if (containsPolygon(coordinates[i], point)) return true;
      return false;
    },
    GeometryCollection: function(object, point) {
      var geometries = object.geometries, i = -1, n = geometries.length;
      while (++i < n) if (containsGeometry(geometries[i], point)) return true;
      return false;
    }
  };

  function containsGeometry(geometry, point) {
    return geometry && containsGeometryType.hasOwnProperty(geometry.type)
        ? containsGeometryType[geometry.type](geometry, point)
        : false;
  }

  function containsPoint(coordinates, point) {
    return distance(coordinates, point) === 0;
  }

  function containsLine(coordinates, point) {
    var ao, bo, ab;
    for (var i = 0, n = coordinates.length; i < n; i++) {
      bo = distance(coordinates[i], point);
      if (bo === 0) return true;
      if (i > 0) {
        ab = distance(coordinates[i], coordinates[i - 1]);
        if (
          ab > 0 &&
          ao <= ab &&
          bo <= ab &&
          (ao + bo - ab) * (1 - Math.pow((ao - bo) / ab, 2)) < epsilon2 * ab
        )
          return true;
      }
      ao = bo;
    }
    return false;
  }

  function containsPolygon(coordinates, point) {
    return !!polygonContains(coordinates.map(ringRadians), pointRadians(point));
  }

  function ringRadians(ring) {
    return ring = ring.map(pointRadians), ring.pop(), ring;
  }

  function pointRadians(point) {
    return [point[0] * radians, point[1] * radians];
  }

  function contains(object, point) {
    return (object && containsObjectType.hasOwnProperty(object.type)
        ? containsObjectType[object.type]
        : containsGeometry)(object, point);
  }

  function graticuleX(y0, y1, dy) {
    var y = range$1(y0, y1 - epsilon, dy).concat(y1);
    return function(x) { return y.map(function(y) { return [x, y]; }); };
  }

  function graticuleY(x0, x1, dx) {
    var x = range$1(x0, x1 - epsilon, dx).concat(x1);
    return function(y) { return x.map(function(x) { return [x, y]; }); };
  }

  function graticule() {
    var x1, x0, X1, X0,
        y1, y0, Y1, Y0,
        dx = 10, dy = dx, DX = 90, DY = 360,
        x, y, X, Y,
        precision = 2.5;

    function graticule() {
      return {type: "MultiLineString", coordinates: lines()};
    }

    function lines() {
      return range$1(ceil(X0 / DX) * DX, X1, DX).map(X)
          .concat(range$1(ceil(Y0 / DY) * DY, Y1, DY).map(Y))
          .concat(range$1(ceil(x0 / dx) * dx, x1, dx).filter(function(x) { return abs(x % DX) > epsilon; }).map(x))
          .concat(range$1(ceil(y0 / dy) * dy, y1, dy).filter(function(y) { return abs(y % DY) > epsilon; }).map(y));
    }

    graticule.lines = function() {
      return lines().map(function(coordinates) { return {type: "LineString", coordinates: coordinates}; });
    };

    graticule.outline = function() {
      return {
        type: "Polygon",
        coordinates: [
          X(X0).concat(
          Y(Y1).slice(1),
          X(X1).reverse().slice(1),
          Y(Y0).reverse().slice(1))
        ]
      };
    };

    graticule.extent = function(_) {
      if (!arguments.length) return graticule.extentMinor();
      return graticule.extentMajor(_).extentMinor(_);
    };

    graticule.extentMajor = function(_) {
      if (!arguments.length) return [[X0, Y0], [X1, Y1]];
      X0 = +_[0][0], X1 = +_[1][0];
      Y0 = +_[0][1], Y1 = +_[1][1];
      if (X0 > X1) _ = X0, X0 = X1, X1 = _;
      if (Y0 > Y1) _ = Y0, Y0 = Y1, Y1 = _;
      return graticule.precision(precision);
    };

    graticule.extentMinor = function(_) {
      if (!arguments.length) return [[x0, y0], [x1, y1]];
      x0 = +_[0][0], x1 = +_[1][0];
      y0 = +_[0][1], y1 = +_[1][1];
      if (x0 > x1) _ = x0, x0 = x1, x1 = _;
      if (y0 > y1) _ = y0, y0 = y1, y1 = _;
      return graticule.precision(precision);
    };

    graticule.step = function(_) {
      if (!arguments.length) return graticule.stepMinor();
      return graticule.stepMajor(_).stepMinor(_);
    };

    graticule.stepMajor = function(_) {
      if (!arguments.length) return [DX, DY];
      DX = +_[0], DY = +_[1];
      return graticule;
    };

    graticule.stepMinor = function(_) {
      if (!arguments.length) return [dx, dy];
      dx = +_[0], dy = +_[1];
      return graticule;
    };

    graticule.precision = function(_) {
      if (!arguments.length) return precision;
      precision = +_;
      x = graticuleX(y0, y1, 90);
      y = graticuleY(x0, x1, precision);
      X = graticuleX(Y0, Y1, 90);
      Y = graticuleY(X0, X1, precision);
      return graticule;
    };

    return graticule
        .extentMajor([[-180, -90 + epsilon], [180, 90 - epsilon]])
        .extentMinor([[-180, -80 - epsilon], [180, 80 + epsilon]]);
  }

  function graticule10() {
    return graticule()();
  }

  function interpolate$1(a, b) {
    var x0 = a[0] * radians,
        y0 = a[1] * radians,
        x1 = b[0] * radians,
        y1 = b[1] * radians,
        cy0 = cos(y0),
        sy0 = sin(y0),
        cy1 = cos(y1),
        sy1 = sin(y1),
        kx0 = cy0 * cos(x0),
        ky0 = cy0 * sin(x0),
        kx1 = cy1 * cos(x1),
        ky1 = cy1 * sin(x1),
        d = 2 * asin(sqrt(haversin(y1 - y0) + cy0 * cy1 * haversin(x1 - x0))),
        k = sin(d);

    var interpolate = d ? function(t) {
      var B = sin(t *= d) / k,
          A = sin(d - t) / k,
          x = A * kx0 + B * kx1,
          y = A * ky0 + B * ky1,
          z = A * sy0 + B * sy1;
      return [
        atan2(y, x) * degrees$1,
        atan2(z, sqrt(x * x + y * y)) * degrees$1
      ];
    } : function() {
      return [x0 * degrees$1, y0 * degrees$1];
    };

    interpolate.distance = d;

    return interpolate;
  }

  var identity$2 = x => x;

  var areaSum = new Adder(),
      areaRingSum = new Adder(),
      x00$2,
      y00$2,
      x0$3,
      y0$3;

  var areaStream = {
    point: noop$1,
    lineStart: noop$1,
    lineEnd: noop$1,
    polygonStart: function() {
      areaStream.lineStart = areaRingStart;
      areaStream.lineEnd = areaRingEnd;
    },
    polygonEnd: function() {
      areaStream.lineStart = areaStream.lineEnd = areaStream.point = noop$1;
      areaSum.add(abs(areaRingSum));
      areaRingSum = new Adder();
    },
    result: function() {
      var area = areaSum / 2;
      areaSum = new Adder();
      return area;
    }
  };

  function areaRingStart() {
    areaStream.point = areaPointFirst;
  }

  function areaPointFirst(x, y) {
    areaStream.point = areaPoint;
    x00$2 = x0$3 = x, y00$2 = y0$3 = y;
  }

  function areaPoint(x, y) {
    areaRingSum.add(y0$3 * x - x0$3 * y);
    x0$3 = x, y0$3 = y;
  }

  function areaRingEnd() {
    areaPoint(x00$2, y00$2);
  }

  var x0$2 = Infinity,
      y0$2 = x0$2,
      x1 = -x0$2,
      y1 = x1;

  var boundsStream = {
    point: boundsPoint,
    lineStart: noop$1,
    lineEnd: noop$1,
    polygonStart: noop$1,
    polygonEnd: noop$1,
    result: function() {
      var bounds = [[x0$2, y0$2], [x1, y1]];
      x1 = y1 = -(y0$2 = x0$2 = Infinity);
      return bounds;
    }
  };

  function boundsPoint(x, y) {
    if (x < x0$2) x0$2 = x;
    if (x > x1) x1 = x;
    if (y < y0$2) y0$2 = y;
    if (y > y1) y1 = y;
  }

  // TODO Enforce positive area for exterior, negative area for interior?

  var X0 = 0,
      Y0 = 0,
      Z0 = 0,
      X1 = 0,
      Y1 = 0,
      Z1 = 0,
      X2 = 0,
      Y2 = 0,
      Z2 = 0,
      x00$1,
      y00$1,
      x0$1,
      y0$1;

  var centroidStream = {
    point: centroidPoint,
    lineStart: centroidLineStart,
    lineEnd: centroidLineEnd,
    polygonStart: function() {
      centroidStream.lineStart = centroidRingStart;
      centroidStream.lineEnd = centroidRingEnd;
    },
    polygonEnd: function() {
      centroidStream.point = centroidPoint;
      centroidStream.lineStart = centroidLineStart;
      centroidStream.lineEnd = centroidLineEnd;
    },
    result: function() {
      var centroid = Z2 ? [X2 / Z2, Y2 / Z2]
          : Z1 ? [X1 / Z1, Y1 / Z1]
          : Z0 ? [X0 / Z0, Y0 / Z0]
          : [NaN, NaN];
      X0 = Y0 = Z0 =
      X1 = Y1 = Z1 =
      X2 = Y2 = Z2 = 0;
      return centroid;
    }
  };

  function centroidPoint(x, y) {
    X0 += x;
    Y0 += y;
    ++Z0;
  }

  function centroidLineStart() {
    centroidStream.point = centroidPointFirstLine;
  }

  function centroidPointFirstLine(x, y) {
    centroidStream.point = centroidPointLine;
    centroidPoint(x0$1 = x, y0$1 = y);
  }

  function centroidPointLine(x, y) {
    var dx = x - x0$1, dy = y - y0$1, z = sqrt(dx * dx + dy * dy);
    X1 += z * (x0$1 + x) / 2;
    Y1 += z * (y0$1 + y) / 2;
    Z1 += z;
    centroidPoint(x0$1 = x, y0$1 = y);
  }

  function centroidLineEnd() {
    centroidStream.point = centroidPoint;
  }

  function centroidRingStart() {
    centroidStream.point = centroidPointFirstRing;
  }

  function centroidRingEnd() {
    centroidPointRing(x00$1, y00$1);
  }

  function centroidPointFirstRing(x, y) {
    centroidStream.point = centroidPointRing;
    centroidPoint(x00$1 = x0$1 = x, y00$1 = y0$1 = y);
  }

  function centroidPointRing(x, y) {
    var dx = x - x0$1,
        dy = y - y0$1,
        z = sqrt(dx * dx + dy * dy);

    X1 += z * (x0$1 + x) / 2;
    Y1 += z * (y0$1 + y) / 2;
    Z1 += z;

    z = y0$1 * x - x0$1 * y;
    X2 += z * (x0$1 + x);
    Y2 += z * (y0$1 + y);
    Z2 += z * 3;
    centroidPoint(x0$1 = x, y0$1 = y);
  }

  function PathContext(context) {
    this._context = context;
  }

  PathContext.prototype = {
    _radius: 4.5,
    pointRadius: function(_) {
      return this._radius = _, this;
    },
    polygonStart: function() {
      this._line = 0;
    },
    polygonEnd: function() {
      this._line = NaN;
    },
    lineStart: function() {
      this._point = 0;
    },
    lineEnd: function() {
      if (this._line === 0) this._context.closePath();
      this._point = NaN;
    },
    point: function(x, y) {
      switch (this._point) {
        case 0: {
          this._context.moveTo(x, y);
          this._point = 1;
          break;
        }
        case 1: {
          this._context.lineTo(x, y);
          break;
        }
        default: {
          this._context.moveTo(x + this._radius, y);
          this._context.arc(x, y, this._radius, 0, tau);
          break;
        }
      }
    },
    result: noop$1
  };

  var lengthSum = new Adder(),
      lengthRing,
      x00,
      y00,
      x0,
      y0;

  var lengthStream = {
    point: noop$1,
    lineStart: function() {
      lengthStream.point = lengthPointFirst;
    },
    lineEnd: function() {
      if (lengthRing) lengthPoint(x00, y00);
      lengthStream.point = noop$1;
    },
    polygonStart: function() {
      lengthRing = true;
    },
    polygonEnd: function() {
      lengthRing = null;
    },
    result: function() {
      var length = +lengthSum;
      lengthSum = new Adder();
      return length;
    }
  };

  function lengthPointFirst(x, y) {
    lengthStream.point = lengthPoint;
    x00 = x0 = x, y00 = y0 = y;
  }

  function lengthPoint(x, y) {
    x0 -= x, y0 -= y;
    lengthSum.add(sqrt(x0 * x0 + y0 * y0));
    x0 = x, y0 = y;
  }

  function PathString() {
    this._string = [];
  }

  PathString.prototype = {
    _radius: 4.5,
    _circle: circle(4.5),
    pointRadius: function(_) {
      if ((_ = +_) !== this._radius) this._radius = _, this._circle = null;
      return this;
    },
    polygonStart: function() {
      this._line = 0;
    },
    polygonEnd: function() {
      this._line = NaN;
    },
    lineStart: function() {
      this._point = 0;
    },
    lineEnd: function() {
      if (this._line === 0) this._string.push("Z");
      this._point = NaN;
    },
    point: function(x, y) {
      switch (this._point) {
        case 0: {
          this._string.push("M", x, ",", y);
          this._point = 1;
          break;
        }
        case 1: {
          this._string.push("L", x, ",", y);
          break;
        }
        default: {
          if (this._circle == null) this._circle = circle(this._radius);
          this._string.push("M", x, ",", y, this._circle);
          break;
        }
      }
    },
    result: function() {
      if (this._string.length) {
        var result = this._string.join("");
        this._string = [];
        return result;
      } else {
        return null;
      }
    }
  };

  function circle(radius) {
    return "m0," + radius
        + "a" + radius + "," + radius + " 0 1,1 0," + -2 * radius
        + "a" + radius + "," + radius + " 0 1,1 0," + 2 * radius
        + "z";
  }

  function geoPath(projection, context) {
    var pointRadius = 4.5,
        projectionStream,
        contextStream;

    function path(object) {
      if (object) {
        if (typeof pointRadius === "function") contextStream.pointRadius(+pointRadius.apply(this, arguments));
        geoStream(object, projectionStream(contextStream));
      }
      return contextStream.result();
    }

    path.area = function(object) {
      geoStream(object, projectionStream(areaStream));
      return areaStream.result();
    };

    path.measure = function(object) {
      geoStream(object, projectionStream(lengthStream));
      return lengthStream.result();
    };

    path.bounds = function(object) {
      geoStream(object, projectionStream(boundsStream));
      return boundsStream.result();
    };

    path.centroid = function(object) {
      geoStream(object, projectionStream(centroidStream));
      return centroidStream.result();
    };

    path.projection = function(_) {
      return arguments.length ? (projectionStream = _ == null ? (projection = null, identity$2) : (projection = _).stream, path) : projection;
    };

    path.context = function(_) {
      if (!arguments.length) return context;
      contextStream = _ == null ? (context = null, new PathString) : new PathContext(context = _);
      if (typeof pointRadius !== "function") contextStream.pointRadius(pointRadius);
      return path;
    };

    path.pointRadius = function(_) {
      if (!arguments.length) return pointRadius;
      pointRadius = typeof _ === "function" ? _ : (contextStream.pointRadius(+_), +_);
      return path;
    };

    return path.projection(projection).context(context);
  }

  function transform(methods) {
    return {
      stream: transformer(methods)
    };
  }

  function transformer(methods) {
    return function(stream) {
      var s = new TransformStream;
      for (var key in methods) s[key] = methods[key];
      s.stream = stream;
      return s;
    };
  }

  function TransformStream() {}

  TransformStream.prototype = {
    constructor: TransformStream,
    point: function(x, y) { this.stream.point(x, y); },
    sphere: function() { this.stream.sphere(); },
    lineStart: function() { this.stream.lineStart(); },
    lineEnd: function() { this.stream.lineEnd(); },
    polygonStart: function() { this.stream.polygonStart(); },
    polygonEnd: function() { this.stream.polygonEnd(); }
  };

  function fit(projection, fitBounds, object) {
    var clip = projection.clipExtent && projection.clipExtent();
    projection.scale(150).translate([0, 0]);
    if (clip != null) projection.clipExtent(null);
    geoStream(object, projection.stream(boundsStream));
    fitBounds(boundsStream.result());
    if (clip != null) projection.clipExtent(clip);
    return projection;
  }

  function fitExtent(projection, extent, object) {
    return fit(projection, function(b) {
      var w = extent[1][0] - extent[0][0],
          h = extent[1][1] - extent[0][1],
          k = Math.min(w / (b[1][0] - b[0][0]), h / (b[1][1] - b[0][1])),
          x = +extent[0][0] + (w - k * (b[1][0] + b[0][0])) / 2,
          y = +extent[0][1] + (h - k * (b[1][1] + b[0][1])) / 2;
      projection.scale(150 * k).translate([x, y]);
    }, object);
  }

  function fitSize(projection, size, object) {
    return fitExtent(projection, [[0, 0], size], object);
  }

  function fitWidth(projection, width, object) {
    return fit(projection, function(b) {
      var w = +width,
          k = w / (b[1][0] - b[0][0]),
          x = (w - k * (b[1][0] + b[0][0])) / 2,
          y = -k * b[0][1];
      projection.scale(150 * k).translate([x, y]);
    }, object);
  }

  function fitHeight(projection, height, object) {
    return fit(projection, function(b) {
      var h = +height,
          k = h / (b[1][1] - b[0][1]),
          x = -k * b[0][0],
          y = (h - k * (b[1][1] + b[0][1])) / 2;
      projection.scale(150 * k).translate([x, y]);
    }, object);
  }

  var maxDepth = 16, // maximum depth of subdivision
      cosMinDistance = cos(30 * radians); // cos(minimum angular distance)

  function resample(project, delta2) {
    return +delta2 ? resample$1(project, delta2) : resampleNone(project);
  }

  function resampleNone(project) {
    return transformer({
      point: function(x, y) {
        x = project(x, y);
        this.stream.point(x[0], x[1]);
      }
    });
  }

  function resample$1(project, delta2) {

    function resampleLineTo(x0, y0, lambda0, a0, b0, c0, x1, y1, lambda1, a1, b1, c1, depth, stream) {
      var dx = x1 - x0,
          dy = y1 - y0,
          d2 = dx * dx + dy * dy;
      if (d2 > 4 * delta2 && depth--) {
        var a = a0 + a1,
            b = b0 + b1,
            c = c0 + c1,
            m = sqrt(a * a + b * b + c * c),
            phi2 = asin(c /= m),
            lambda2 = abs(abs(c) - 1) < epsilon || abs(lambda0 - lambda1) < epsilon ? (lambda0 + lambda1) / 2 : atan2(b, a),
            p = project(lambda2, phi2),
            x2 = p[0],
            y2 = p[1],
            dx2 = x2 - x0,
            dy2 = y2 - y0,
            dz = dy * dx2 - dx * dy2;
        if (dz * dz / d2 > delta2 // perpendicular projected distance
            || abs((dx * dx2 + dy * dy2) / d2 - 0.5) > 0.3 // midpoint close to an end
            || a0 * a1 + b0 * b1 + c0 * c1 < cosMinDistance) { // angular distance
          resampleLineTo(x0, y0, lambda0, a0, b0, c0, x2, y2, lambda2, a /= m, b /= m, c, depth, stream);
          stream.point(x2, y2);
          resampleLineTo(x2, y2, lambda2, a, b, c, x1, y1, lambda1, a1, b1, c1, depth, stream);
        }
      }
    }
    return function(stream) {
      var lambda00, x00, y00, a00, b00, c00, // first point
          lambda0, x0, y0, a0, b0, c0; // previous point

      var resampleStream = {
        point: point,
        lineStart: lineStart,
        lineEnd: lineEnd,
        polygonStart: function() { stream.polygonStart(); resampleStream.lineStart = ringStart; },
        polygonEnd: function() { stream.polygonEnd(); resampleStream.lineStart = lineStart; }
      };

      function point(x, y) {
        x = project(x, y);
        stream.point(x[0], x[1]);
      }

      function lineStart() {
        x0 = NaN;
        resampleStream.point = linePoint;
        stream.lineStart();
      }

      function linePoint(lambda, phi) {
        var c = cartesian([lambda, phi]), p = project(lambda, phi);
        resampleLineTo(x0, y0, lambda0, a0, b0, c0, x0 = p[0], y0 = p[1], lambda0 = lambda, a0 = c[0], b0 = c[1], c0 = c[2], maxDepth, stream);
        stream.point(x0, y0);
      }

      function lineEnd() {
        resampleStream.point = point;
        stream.lineEnd();
      }

      function ringStart() {
        lineStart();
        resampleStream.point = ringPoint;
        resampleStream.lineEnd = ringEnd;
      }

      function ringPoint(lambda, phi) {
        linePoint(lambda00 = lambda, phi), x00 = x0, y00 = y0, a00 = a0, b00 = b0, c00 = c0;
        resampleStream.point = linePoint;
      }

      function ringEnd() {
        resampleLineTo(x0, y0, lambda0, a0, b0, c0, x00, y00, lambda00, a00, b00, c00, maxDepth, stream);
        resampleStream.lineEnd = lineEnd;
        lineEnd();
      }

      return resampleStream;
    };
  }

  var transformRadians = transformer({
    point: function(x, y) {
      this.stream.point(x * radians, y * radians);
    }
  });

  function transformRotate(rotate) {
    return transformer({
      point: function(x, y) {
        var r = rotate(x, y);
        return this.stream.point(r[0], r[1]);
      }
    });
  }

  function scaleTranslate(k, dx, dy, sx, sy) {
    function transform(x, y) {
      x *= sx; y *= sy;
      return [dx + k * x, dy - k * y];
    }
    transform.invert = function(x, y) {
      return [(x - dx) / k * sx, (dy - y) / k * sy];
    };
    return transform;
  }

  function scaleTranslateRotate(k, dx, dy, sx, sy, alpha) {
    if (!alpha) return scaleTranslate(k, dx, dy, sx, sy);
    var cosAlpha = cos(alpha),
        sinAlpha = sin(alpha),
        a = cosAlpha * k,
        b = sinAlpha * k,
        ai = cosAlpha / k,
        bi = sinAlpha / k,
        ci = (sinAlpha * dy - cosAlpha * dx) / k,
        fi = (sinAlpha * dx + cosAlpha * dy) / k;
    function transform(x, y) {
      x *= sx; y *= sy;
      return [a * x - b * y + dx, dy - b * x - a * y];
    }
    transform.invert = function(x, y) {
      return [sx * (ai * x - bi * y + ci), sy * (fi - bi * x - ai * y)];
    };
    return transform;
  }

  function projection(project) {
    return projectionMutator(function() { return project; })();
  }

  function projectionMutator(projectAt) {
    var project,
        k = 150, // scale
        x = 480, y = 250, // translate
        lambda = 0, phi = 0, // center
        deltaLambda = 0, deltaPhi = 0, deltaGamma = 0, rotate, // pre-rotate
        alpha = 0, // post-rotate angle
        sx = 1, // reflectX
        sy = 1, // reflectX
        theta = null, preclip = clipAntimeridian, // pre-clip angle
        x0 = null, y0, x1, y1, postclip = identity$2, // post-clip extent
        delta2 = 0.5, // precision
        projectResample,
        projectTransform,
        projectRotateTransform,
        cache,
        cacheStream;

    function projection(point) {
      return projectRotateTransform(point[0] * radians, point[1] * radians);
    }

    function invert(point) {
      point = projectRotateTransform.invert(point[0], point[1]);
      return point && [point[0] * degrees$1, point[1] * degrees$1];
    }

    projection.stream = function(stream) {
      return cache && cacheStream === stream ? cache : cache = transformRadians(transformRotate(rotate)(preclip(projectResample(postclip(cacheStream = stream)))));
    };

    projection.preclip = function(_) {
      return arguments.length ? (preclip = _, theta = undefined, reset()) : preclip;
    };

    projection.postclip = function(_) {
      return arguments.length ? (postclip = _, x0 = y0 = x1 = y1 = null, reset()) : postclip;
    };

    projection.clipAngle = function(_) {
      return arguments.length ? (preclip = +_ ? clipCircle(theta = _ * radians) : (theta = null, clipAntimeridian), reset()) : theta * degrees$1;
    };

    projection.clipExtent = function(_) {
      return arguments.length ? (postclip = _ == null ? (x0 = y0 = x1 = y1 = null, identity$2) : clipRectangle(x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1]), reset()) : x0 == null ? null : [[x0, y0], [x1, y1]];
    };

    projection.scale = function(_) {
      return arguments.length ? (k = +_, recenter()) : k;
    };

    projection.translate = function(_) {
      return arguments.length ? (x = +_[0], y = +_[1], recenter()) : [x, y];
    };

    projection.center = function(_) {
      return arguments.length ? (lambda = _[0] % 360 * radians, phi = _[1] % 360 * radians, recenter()) : [lambda * degrees$1, phi * degrees$1];
    };

    projection.rotate = function(_) {
      return arguments.length ? (deltaLambda = _[0] % 360 * radians, deltaPhi = _[1] % 360 * radians, deltaGamma = _.length > 2 ? _[2] % 360 * radians : 0, recenter()) : [deltaLambda * degrees$1, deltaPhi * degrees$1, deltaGamma * degrees$1];
    };

    projection.angle = function(_) {
      return arguments.length ? (alpha = _ % 360 * radians, recenter()) : alpha * degrees$1;
    };

    projection.reflectX = function(_) {
      return arguments.length ? (sx = _ ? -1 : 1, recenter()) : sx < 0;
    };

    projection.reflectY = function(_) {
      return arguments.length ? (sy = _ ? -1 : 1, recenter()) : sy < 0;
    };

    projection.precision = function(_) {
      return arguments.length ? (projectResample = resample(projectTransform, delta2 = _ * _), reset()) : sqrt(delta2);
    };

    projection.fitExtent = function(extent, object) {
      return fitExtent(projection, extent, object);
    };

    projection.fitSize = function(size, object) {
      return fitSize(projection, size, object);
    };

    projection.fitWidth = function(width, object) {
      return fitWidth(projection, width, object);
    };

    projection.fitHeight = function(height, object) {
      return fitHeight(projection, height, object);
    };

    function recenter() {
      var center = scaleTranslateRotate(k, 0, 0, sx, sy, alpha).apply(null, project(lambda, phi)),
          transform = scaleTranslateRotate(k, x - center[0], y - center[1], sx, sy, alpha);
      rotate = rotateRadians(deltaLambda, deltaPhi, deltaGamma);
      projectTransform = compose(project, transform);
      projectRotateTransform = compose(rotate, projectTransform);
      projectResample = resample(projectTransform, delta2);
      return reset();
    }

    function reset() {
      cache = cacheStream = null;
      return projection;
    }

    return function() {
      project = projectAt.apply(this, arguments);
      projection.invert = project.invert && invert;
      return recenter();
    };
  }

  function conicProjection(projectAt) {
    var phi0 = 0,
        phi1 = pi / 3,
        m = projectionMutator(projectAt),
        p = m(phi0, phi1);

    p.parallels = function(_) {
      return arguments.length ? m(phi0 = _[0] * radians, phi1 = _[1] * radians) : [phi0 * degrees$1, phi1 * degrees$1];
    };

    return p;
  }

  function cylindricalEqualAreaRaw(phi0) {
    var cosPhi0 = cos(phi0);

    function forward(lambda, phi) {
      return [lambda * cosPhi0, sin(phi) / cosPhi0];
    }

    forward.invert = function(x, y) {
      return [x / cosPhi0, asin(y * cosPhi0)];
    };

    return forward;
  }

  function conicEqualAreaRaw(y0, y1) {
    var sy0 = sin(y0), n = (sy0 + sin(y1)) / 2;

    // Are the parallels symmetrical around the Equator?
    if (abs(n) < epsilon) return cylindricalEqualAreaRaw(y0);

    var c = 1 + sy0 * (2 * n - sy0), r0 = sqrt(c) / n;

    function project(x, y) {
      var r = sqrt(c - 2 * n * sin(y)) / n;
      return [r * sin(x *= n), r0 - r * cos(x)];
    }

    project.invert = function(x, y) {
      var r0y = r0 - y,
          l = atan2(x, abs(r0y)) * sign(r0y);
      if (r0y * n < 0)
        l -= pi * sign(x) * sign(r0y);
      return [l / n, asin((c - (x * x + r0y * r0y) * n * n) / (2 * n))];
    };

    return project;
  }

  function conicEqualArea() {
    return conicProjection(conicEqualAreaRaw)
        .scale(155.424)
        .center([0, 33.6442]);
  }

  function albers() {
    return conicEqualArea()
        .parallels([29.5, 45.5])
        .scale(1070)
        .translate([480, 250])
        .rotate([96, 0])
        .center([-0.6, 38.7]);
  }

  // The projections must have mutually exclusive clip regions on the sphere,
  // as this will avoid emitting interleaving lines and polygons.
  function multiplex(streams) {
    var n = streams.length;
    return {
      point: function(x, y) { var i = -1; while (++i < n) streams[i].point(x, y); },
      sphere: function() { var i = -1; while (++i < n) streams[i].sphere(); },
      lineStart: function() { var i = -1; while (++i < n) streams[i].lineStart(); },
      lineEnd: function() { var i = -1; while (++i < n) streams[i].lineEnd(); },
      polygonStart: function() { var i = -1; while (++i < n) streams[i].polygonStart(); },
      polygonEnd: function() { var i = -1; while (++i < n) streams[i].polygonEnd(); }
    };
  }

  // A composite projection for the United States, configured by default for
  // 960×500. The projection also works quite well at 960×600 if you change the
  // scale to 1285 and adjust the translate accordingly. The set of standard
  // parallels for each region comes from USGS, which is published here:
  // http://egsc.usgs.gov/isb/pubs/MapProjections/projections.html#albers
  function albersUsa() {
    var cache,
        cacheStream,
        lower48 = albers(), lower48Point,
        alaska = conicEqualArea().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]), alaskaPoint, // EPSG:3338
        hawaii = conicEqualArea().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]), hawaiiPoint, // ESRI:102007
        point, pointStream = {point: function(x, y) { point = [x, y]; }};

    function albersUsa(coordinates) {
      var x = coordinates[0], y = coordinates[1];
      return point = null,
          (lower48Point.point(x, y), point)
          || (alaskaPoint.point(x, y), point)
          || (hawaiiPoint.point(x, y), point);
    }

    albersUsa.invert = function(coordinates) {
      var k = lower48.scale(),
          t = lower48.translate(),
          x = (coordinates[0] - t[0]) / k,
          y = (coordinates[1] - t[1]) / k;
      return (y >= 0.120 && y < 0.234 && x >= -0.425 && x < -0.214 ? alaska
          : y >= 0.166 && y < 0.234 && x >= -0.214 && x < -0.115 ? hawaii
          : lower48).invert(coordinates);
    };

    albersUsa.stream = function(stream) {
      return cache && cacheStream === stream ? cache : cache = multiplex([lower48.stream(cacheStream = stream), alaska.stream(stream), hawaii.stream(stream)]);
    };

    albersUsa.precision = function(_) {
      if (!arguments.length) return lower48.precision();
      lower48.precision(_), alaska.precision(_), hawaii.precision(_);
      return reset();
    };

    albersUsa.scale = function(_) {
      if (!arguments.length) return lower48.scale();
      lower48.scale(_), alaska.scale(_ * 0.35), hawaii.scale(_);
      return albersUsa.translate(lower48.translate());
    };

    albersUsa.translate = function(_) {
      if (!arguments.length) return lower48.translate();
      var k = lower48.scale(), x = +_[0], y = +_[1];

      lower48Point = lower48
          .translate(_)
          .clipExtent([[x - 0.455 * k, y - 0.238 * k], [x + 0.455 * k, y + 0.238 * k]])
          .stream(pointStream);

      alaskaPoint = alaska
          .translate([x - 0.307 * k, y + 0.201 * k])
          .clipExtent([[x - 0.425 * k + epsilon, y + 0.120 * k + epsilon], [x - 0.214 * k - epsilon, y + 0.234 * k - epsilon]])
          .stream(pointStream);

      hawaiiPoint = hawaii
          .translate([x - 0.205 * k, y + 0.212 * k])
          .clipExtent([[x - 0.214 * k + epsilon, y + 0.166 * k + epsilon], [x - 0.115 * k - epsilon, y + 0.234 * k - epsilon]])
          .stream(pointStream);

      return reset();
    };

    albersUsa.fitExtent = function(extent, object) {
      return fitExtent(albersUsa, extent, object);
    };

    albersUsa.fitSize = function(size, object) {
      return fitSize(albersUsa, size, object);
    };

    albersUsa.fitWidth = function(width, object) {
      return fitWidth(albersUsa, width, object);
    };

    albersUsa.fitHeight = function(height, object) {
      return fitHeight(albersUsa, height, object);
    };

    function reset() {
      cache = cacheStream = null;
      return albersUsa;
    }

    return albersUsa.scale(1070);
  }

  function azimuthalRaw(scale) {
    return function(x, y) {
      var cx = cos(x),
          cy = cos(y),
          k = scale(cx * cy);
          if (k === Infinity) return [2, 0];
      return [
        k * cy * sin(x),
        k * sin(y)
      ];
    }
  }

  function azimuthalInvert(angle) {
    return function(x, y) {
      var z = sqrt(x * x + y * y),
          c = angle(z),
          sc = sin(c),
          cc = cos(c);
      return [
        atan2(x * sc, z * cc),
        asin(z && y * sc / z)
      ];
    }
  }

  var azimuthalEqualAreaRaw = azimuthalRaw(function(cxcy) {
    return sqrt(2 / (1 + cxcy));
  });

  azimuthalEqualAreaRaw.invert = azimuthalInvert(function(z) {
    return 2 * asin(z / 2);
  });

  function azimuthalEqualArea() {
    return projection(azimuthalEqualAreaRaw)
        .scale(124.75)
        .clipAngle(180 - 1e-3);
  }

  var azimuthalEquidistantRaw = azimuthalRaw(function(c) {
    return (c = acos(c)) && c / sin(c);
  });

  azimuthalEquidistantRaw.invert = azimuthalInvert(function(z) {
    return z;
  });

  function azimuthalEquidistant() {
    return projection(azimuthalEquidistantRaw)
        .scale(79.4188)
        .clipAngle(180 - 1e-3);
  }

  function mercatorRaw(lambda, phi) {
    return [lambda, log(tan((halfPi + phi) / 2))];
  }

  mercatorRaw.invert = function(x, y) {
    return [x, 2 * atan(exp(y)) - halfPi];
  };

  function mercator() {
    return mercatorProjection(mercatorRaw)
        .scale(961 / tau);
  }

  function mercatorProjection(project) {
    var m = projection(project),
        center = m.center,
        scale = m.scale,
        translate = m.translate,
        clipExtent = m.clipExtent,
        x0 = null, y0, x1, y1; // clip extent

    m.scale = function(_) {
      return arguments.length ? (scale(_), reclip()) : scale();
    };

    m.translate = function(_) {
      return arguments.length ? (translate(_), reclip()) : translate();
    };

    m.center = function(_) {
      return arguments.length ? (center(_), reclip()) : center();
    };

    m.clipExtent = function(_) {
      return arguments.length ? ((_ == null ? x0 = y0 = x1 = y1 = null : (x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1])), reclip()) : x0 == null ? null : [[x0, y0], [x1, y1]];
    };

    function reclip() {
      var k = pi * scale(),
          t = m(rotation(m.rotate()).invert([0, 0]));
      return clipExtent(x0 == null
          ? [[t[0] - k, t[1] - k], [t[0] + k, t[1] + k]] : project === mercatorRaw
          ? [[Math.max(t[0] - k, x0), y0], [Math.min(t[0] + k, x1), y1]]
          : [[x0, Math.max(t[1] - k, y0)], [x1, Math.min(t[1] + k, y1)]]);
    }

    return reclip();
  }

  function tany(y) {
    return tan((halfPi + y) / 2);
  }

  function conicConformalRaw(y0, y1) {
    var cy0 = cos(y0),
        n = y0 === y1 ? sin(y0) : log(cy0 / cos(y1)) / log(tany(y1) / tany(y0)),
        f = cy0 * pow(tany(y0), n) / n;

    if (!n) return mercatorRaw;

    function project(x, y) {
      if (f > 0) { if (y < -halfPi + epsilon) y = -halfPi + epsilon; }
      else { if (y > halfPi - epsilon) y = halfPi - epsilon; }
      var r = f / pow(tany(y), n);
      return [r * sin(n * x), f - r * cos(n * x)];
    }

    project.invert = function(x, y) {
      var fy = f - y, r = sign(n) * sqrt(x * x + fy * fy),
        l = atan2(x, abs(fy)) * sign(fy);
      if (fy * n < 0)
        l -= pi * sign(x) * sign(fy);
      return [l / n, 2 * atan(pow(f / r, 1 / n)) - halfPi];
    };

    return project;
  }

  function conicConformal() {
    return conicProjection(conicConformalRaw)
        .scale(109.5)
        .parallels([30, 30]);
  }

  function equirectangularRaw(lambda, phi) {
    return [lambda, phi];
  }

  equirectangularRaw.invert = equirectangularRaw;

  function equirectangular() {
    return projection(equirectangularRaw)
        .scale(152.63);
  }

  function conicEquidistantRaw(y0, y1) {
    var cy0 = cos(y0),
        n = y0 === y1 ? sin(y0) : (cy0 - cos(y1)) / (y1 - y0),
        g = cy0 / n + y0;

    if (abs(n) < epsilon) return equirectangularRaw;

    function project(x, y) {
      var gy = g - y, nx = n * x;
      return [gy * sin(nx), g - gy * cos(nx)];
    }

    project.invert = function(x, y) {
      var gy = g - y,
          l = atan2(x, abs(gy)) * sign(gy);
      if (gy * n < 0)
        l -= pi * sign(x) * sign(gy);
      return [l / n, g - sign(n) * sqrt(x * x + gy * gy)];
    };

    return project;
  }

  function conicEquidistant() {
    return conicProjection(conicEquidistantRaw)
        .scale(131.154)
        .center([0, 13.9389]);
  }

  var A1 = 1.340264,
      A2 = -0.081106,
      A3 = 0.000893,
      A4 = 0.003796,
      M = sqrt(3) / 2,
      iterations = 12;

  function equalEarthRaw(lambda, phi) {
    var l = asin(M * sin(phi)), l2 = l * l, l6 = l2 * l2 * l2;
    return [
      lambda * cos(l) / (M * (A1 + 3 * A2 * l2 + l6 * (7 * A3 + 9 * A4 * l2))),
      l * (A1 + A2 * l2 + l6 * (A3 + A4 * l2))
    ];
  }

  equalEarthRaw.invert = function(x, y) {
    var l = y, l2 = l * l, l6 = l2 * l2 * l2;
    for (var i = 0, delta, fy, fpy; i < iterations; ++i) {
      fy = l * (A1 + A2 * l2 + l6 * (A3 + A4 * l2)) - y;
      fpy = A1 + 3 * A2 * l2 + l6 * (7 * A3 + 9 * A4 * l2);
      l -= delta = fy / fpy, l2 = l * l, l6 = l2 * l2 * l2;
      if (abs(delta) < epsilon2) break;
    }
    return [
      M * x * (A1 + 3 * A2 * l2 + l6 * (7 * A3 + 9 * A4 * l2)) / cos(l),
      asin(sin(l) / M)
    ];
  };

  function equalEarth() {
    return projection(equalEarthRaw)
        .scale(177.158);
  }

  function gnomonicRaw(x, y) {
    var cy = cos(y), k = cos(x) * cy;
    return [cy * sin(x) / k, sin(y) / k];
  }

  gnomonicRaw.invert = azimuthalInvert(atan);

  function gnomonic() {
    return projection(gnomonicRaw)
        .scale(144.049)
        .clipAngle(60);
  }

  function identity$1() {
    var k = 1, tx = 0, ty = 0, sx = 1, sy = 1, // scale, translate and reflect
        alpha = 0, ca, sa, // angle
        x0 = null, y0, x1, y1, // clip extent
        kx = 1, ky = 1,
        transform = transformer({
          point: function(x, y) {
            var p = projection([x, y]);
            this.stream.point(p[0], p[1]);
          }
        }),
        postclip = identity$2,
        cache,
        cacheStream;

    function reset() {
      kx = k * sx;
      ky = k * sy;
      cache = cacheStream = null;
      return projection;
    }

    function projection (p) {
      var x = p[0] * kx, y = p[1] * ky;
      if (alpha) {
        var t = y * ca - x * sa;
        x = x * ca + y * sa;
        y = t;
      }    
      return [x + tx, y + ty];
    }
    projection.invert = function(p) {
      var x = p[0] - tx, y = p[1] - ty;
      if (alpha) {
        var t = y * ca + x * sa;
        x = x * ca - y * sa;
        y = t;
      }
      return [x / kx, y / ky];
    };
    projection.stream = function(stream) {
      return cache && cacheStream === stream ? cache : cache = transform(postclip(cacheStream = stream));
    };
    projection.postclip = function(_) {
      return arguments.length ? (postclip = _, x0 = y0 = x1 = y1 = null, reset()) : postclip;
    };
    projection.clipExtent = function(_) {
      return arguments.length ? (postclip = _ == null ? (x0 = y0 = x1 = y1 = null, identity$2) : clipRectangle(x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1]), reset()) : x0 == null ? null : [[x0, y0], [x1, y1]];
    };
    projection.scale = function(_) {
      return arguments.length ? (k = +_, reset()) : k;
    };
    projection.translate = function(_) {
      return arguments.length ? (tx = +_[0], ty = +_[1], reset()) : [tx, ty];
    };
    projection.angle = function(_) {
      return arguments.length ? (alpha = _ % 360 * radians, sa = sin(alpha), ca = cos(alpha), reset()) : alpha * degrees$1;
    };
    projection.reflectX = function(_) {
      return arguments.length ? (sx = _ ? -1 : 1, reset()) : sx < 0;
    };
    projection.reflectY = function(_) {
      return arguments.length ? (sy = _ ? -1 : 1, reset()) : sy < 0;
    };
    projection.fitExtent = function(extent, object) {
      return fitExtent(projection, extent, object);
    };
    projection.fitSize = function(size, object) {
      return fitSize(projection, size, object);
    };
    projection.fitWidth = function(width, object) {
      return fitWidth(projection, width, object);
    };
    projection.fitHeight = function(height, object) {
      return fitHeight(projection, height, object);
    };

    return projection;
  }

  function naturalEarth1Raw(lambda, phi) {
    var phi2 = phi * phi, phi4 = phi2 * phi2;
    return [
      lambda * (0.8707 - 0.131979 * phi2 + phi4 * (-0.013791 + phi4 * (0.003971 * phi2 - 0.001529 * phi4))),
      phi * (1.007226 + phi2 * (0.015085 + phi4 * (-0.044475 + 0.028874 * phi2 - 0.005916 * phi4)))
    ];
  }

  naturalEarth1Raw.invert = function(x, y) {
    var phi = y, i = 25, delta;
    do {
      var phi2 = phi * phi, phi4 = phi2 * phi2;
      phi -= delta = (phi * (1.007226 + phi2 * (0.015085 + phi4 * (-0.044475 + 0.028874 * phi2 - 0.005916 * phi4))) - y) /
          (1.007226 + phi2 * (0.015085 * 3 + phi4 * (-0.044475 * 7 + 0.028874 * 9 * phi2 - 0.005916 * 11 * phi4)));
    } while (abs(delta) > epsilon && --i > 0);
    return [
      x / (0.8707 + (phi2 = phi * phi) * (-0.131979 + phi2 * (-0.013791 + phi2 * phi2 * phi2 * (0.003971 - 0.001529 * phi2)))),
      phi
    ];
  };

  function naturalEarth1() {
    return projection(naturalEarth1Raw)
        .scale(175.295);
  }

  function orthographicRaw(x, y) {
    return [cos(y) * sin(x), sin(y)];
  }

  orthographicRaw.invert = azimuthalInvert(asin);

  function orthographic() {
    return projection(orthographicRaw)
        .scale(249.5)
        .clipAngle(90 + epsilon);
  }

  function stereographicRaw(x, y) {
    var cy = cos(y), k = 1 + cos(x) * cy;
    return [cy * sin(x) / k, sin(y) / k];
  }

  stereographicRaw.invert = azimuthalInvert(function(z) {
    return 2 * atan(z);
  });

  function stereographic() {
    return projection(stereographicRaw)
        .scale(250)
        .clipAngle(142);
  }

  function transverseMercatorRaw(lambda, phi) {
    return [log(tan((halfPi + phi) / 2)), -lambda];
  }

  transverseMercatorRaw.invert = function(x, y) {
    return [-y, 2 * atan(exp(x)) - halfPi];
  };

  function transverseMercator() {
    var m = mercatorProjection(transverseMercatorRaw),
        center = m.center,
        rotate = m.rotate;

    m.center = function(_) {
      return arguments.length ? center([-_[1], _[0]]) : (_ = center(), [_[1], -_[0]]);
    };

    m.rotate = function(_) {
      return arguments.length ? rotate([_[0], _[1], _.length > 2 ? _[2] + 90 : 90]) : (_ = rotate(), [_[0], _[1], _[2] - 90]);
    };

    return rotate([0, 0, 90])
        .scale(159.155);
  }

  var src = /*#__PURE__*/Object.freeze({
    __proto__: null,
    geoArea: area,
    geoBounds: bounds,
    geoCentroid: centroid,
    geoCircle: circle$1,
    geoClipAntimeridian: clipAntimeridian,
    geoClipCircle: clipCircle,
    geoClipExtent: extent,
    geoClipRectangle: clipRectangle,
    geoContains: contains,
    geoDistance: distance,
    geoGraticule: graticule,
    geoGraticule10: graticule10,
    geoInterpolate: interpolate$1,
    geoLength: length,
    geoPath: geoPath,
    geoAlbers: albers,
    geoAlbersUsa: albersUsa,
    geoAzimuthalEqualArea: azimuthalEqualArea,
    geoAzimuthalEqualAreaRaw: azimuthalEqualAreaRaw,
    geoAzimuthalEquidistant: azimuthalEquidistant,
    geoAzimuthalEquidistantRaw: azimuthalEquidistantRaw,
    geoConicConformal: conicConformal,
    geoConicConformalRaw: conicConformalRaw,
    geoConicEqualArea: conicEqualArea,
    geoConicEqualAreaRaw: conicEqualAreaRaw,
    geoConicEquidistant: conicEquidistant,
    geoConicEquidistantRaw: conicEquidistantRaw,
    geoEqualEarth: equalEarth,
    geoEqualEarthRaw: equalEarthRaw,
    geoEquirectangular: equirectangular,
    geoEquirectangularRaw: equirectangularRaw,
    geoGnomonic: gnomonic,
    geoGnomonicRaw: gnomonicRaw,
    geoIdentity: identity$1,
    geoProjection: projection,
    geoProjectionMutator: projectionMutator,
    geoMercator: mercator,
    geoMercatorRaw: mercatorRaw,
    geoNaturalEarth1: naturalEarth1,
    geoNaturalEarth1Raw: naturalEarth1Raw,
    geoOrthographic: orthographic,
    geoOrthographicRaw: orthographicRaw,
    geoStereographic: stereographic,
    geoStereographicRaw: stereographicRaw,
    geoTransverseMercator: transverseMercator,
    geoTransverseMercatorRaw: transverseMercatorRaw,
    geoRotation: rotation,
    geoStream: geoStream,
    geoTransform: transform
  });

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function unwrapExports (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

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

  var geoAlbersUsaTerritories = createCommonjsModule(function (module, exports) {
  (function (global, factory) {
    factory(exports, src) ;
  }(commonjsGlobal, (function (exports, d3Geo) {
    var epsilon = 0.000001;

    function multiplex(streams) {
      return {
        point(x, y) {
          for (const s of streams) s.point(x, y);
        },
        sphere() {
          for (const s of streams) s.sphere();
        },
        lineStart() {
          for (const s of streams) s.lineStart();
        },
        lineEnd() {
          for (const s of streams) s.lineEnd();
        },
        polygonStart() {
          for (const s of streams) s.polygonStart();
        },
        polygonEnd() {
          for (const s of streams) s.polygonEnd();
        },
      };
    }

    function geoAlbersUsaTerritories() {
      var cache,
        cacheStream,
        lower48 = d3Geo.geoAlbers(),
        lower48Point,
        alaska = d3Geo.geoConicEqualArea()
          .rotate([154, 0])
          .center([-2, 58.5])
          .parallels([55, 65]),
        alaskaPoint,
        hawaii = d3Geo.geoConicEqualArea()
          .rotate([157, 0])
          .center([-3, 19.9])
          .parallels([8, 18]),
        hawaiiPoint,
        puertoRico = d3Geo.geoConicEqualArea()
          .rotate([66, 0])
          .center([0, 18])
          .parallels([8, 18]),
        puertoRicoPoint,
        guamMariana = d3Geo.geoConicEqualArea()
          .rotate([-145, 0])
          .center([0, 16])
          .parallels([10, 20]),
        guamMarianaPoint,
        americanSamoa = d3Geo.geoConicEqualArea()
          .rotate([170, 0])
          .center([0, -14])
          .parallels([-14, 0]),
        americanSamoaPoint,
        point,
        pointStream = {
          point: function (x, y) {
            point = [x, y];
          },
        };

      function albersUsaTerritories(coordinates) {
        var x = coordinates[0],
          y = coordinates[1];
        return (
          (point = null),
          (lower48Point.point(x, y), point) ||
            (alaskaPoint.point(x, y), point) ||
            (hawaiiPoint.point(x, y), point) ||
            (puertoRicoPoint.point(x, y), point) ||
            (guamMarianaPoint.point(x, y), point) ||
            (americanSamoaPoint.point(x, y), point)
        );
      }

      albersUsaTerritories.invert = function (coordinates) {
        var k = lower48.scale(),
          t = lower48.translate(),
          x = (coordinates[0] - t[0]) / k,
          y = (coordinates[1] - t[1]) / k;
        return (y >= 0.12 && y < 0.234 && x >= -0.225 && x < -0.185
          ? alaska
          : y >= 0.166 && y < 0.234 && x >= -0.185 && x < -0.08
          ? hawaii
          : y >= 0.204 && y < 0.234 && x >= 0.3 && x < 0.38
          ? puertoRico
          : y >= 0.05 && y < 0.204 && x >= -0.415 && x < -0.225
          ? guamMariana
          : y >= 0.18 && y < 0.234 && x >= -0.415 && x < -0.225
          ? americanSamoa
          : lower48
        ).invert(coordinates);
      };

      albersUsaTerritories.stream = function (stream) {
        return cache && cacheStream === stream
          ? cache
          : (cache = multiplex([
              lower48.stream((cacheStream = stream)),
              alaska.stream(stream),
              hawaii.stream(stream),
              puertoRico.stream(stream),
              guamMariana.stream(stream),
              americanSamoa.stream(stream),
            ]));
      };

      albersUsaTerritories.precision = function (_) {
        if (!arguments.length) return lower48.precision();
        lower48.precision(_);
        alaska.precision(_);
        hawaii.precision(_);
        puertoRico.precision(_);
        guamMariana.precision(_);
        americanSamoa.precision(_);
        return reset();
      };

      albersUsaTerritories.scale = function (_) {
        if (!arguments.length) return lower48.scale();
        lower48.scale(_);
        alaska.scale(_ * 0.35);
        hawaii.scale(_);
        puertoRico.scale(_);
        guamMariana.scale(_);
        americanSamoa.scale(_);
        return albersUsaTerritories.translate(lower48.translate());
      };

      albersUsaTerritories.translate = function (_) {
        if (!arguments.length) return lower48.translate();
        var k = lower48.scale(),
          x = +_[0],
          y = +_[1];

        lower48Point = lower48
          .translate(_)
          .clipExtent([
            [x - 0.455 * k, y - 0.238 * k],
            [x + 0.455 * k, y + 0.238 * k],
          ])
          .stream(pointStream);

        alaskaPoint = alaska
          .translate([x - 0.275 * k, y + 0.201 * k])
          .clipExtent([
            [x - 0.425 * k + epsilon, y + 0.12 * k + epsilon],
            [x - 0.185 * k - epsilon, y + 0.234 * k - epsilon],
          ])
          .stream(pointStream);

        hawaiiPoint = hawaii
          .translate([x - 0.18 * k, y + 0.212 * k])
          .clipExtent([
            [x - 0.185 * k + epsilon, y + 0.166 * k + epsilon],
            [x - 0.08 * k - epsilon, y + 0.234 * k - epsilon],
          ])
          .stream(pointStream);

        puertoRicoPoint = puertoRico
          .translate([x + 0.335 * k, y + 0.224 * k])
          .clipExtent([
            [x + 0.3 * k, y + 0.204 * k],
            [x + 0.38 * k, y + 0.234 * k],
          ])
          .stream(pointStream);

        guamMarianaPoint = guamMariana
          .translate([x - 0.415 * k, y + 0.14 * k])
          .clipExtent([
            [x - 0.45 * k, y + 0.05 * k],
            [x - 0.39 * k, y + 0.21 * k],
          ])
          .stream(pointStream);

        americanSamoaPoint = americanSamoa
          .translate([x - 0.415 * k, y + 0.215 * k])
          .clipExtent([
            [x - 0.45 * k, y + 0.21 * k],
            [x - 0.39 * k, y + 0.234 * k],
          ])
          .stream(pointStream);
        return reset();
      };

      function reset() {
        cache = cacheStream = null;
        return albersUsaTerritories;
      }

      return albersUsaTerritories.scale(1070);
    }

    exports.geoAlbersUsaTerritories = geoAlbersUsaTerritories;

    Object.defineProperty(exports, '__esModule', { value: true });

  })));
  });

  var geoAlbersUsaTerritories$1 = unwrapExports(geoAlbersUsaTerritories);

  var xhtml = "http://www.w3.org/1999/xhtml";

  var namespaces = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: xhtml,
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/"
  };

  function namespace(name) {
    var prefix = name += "", i = prefix.indexOf(":");
    if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
    return namespaces.hasOwnProperty(prefix) ? {space: namespaces[prefix], local: name} : name;
  }

  function creatorInherit(name) {
    return function() {
      var document = this.ownerDocument,
          uri = this.namespaceURI;
      return uri === xhtml && document.documentElement.namespaceURI === xhtml
          ? document.createElement(name)
          : document.createElementNS(uri, name);
    };
  }

  function creatorFixed(fullname) {
    return function() {
      return this.ownerDocument.createElementNS(fullname.space, fullname.local);
    };
  }

  function creator(name) {
    var fullname = namespace(name);
    return (fullname.local
        ? creatorFixed
        : creatorInherit)(fullname);
  }

  function none() {}

  function selector(selector) {
    return selector == null ? none : function() {
      return this.querySelector(selector);
    };
  }

  function selection_select(select) {
    if (typeof select !== "function") select = selector(select);

    for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
        if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
          if ("__data__" in node) subnode.__data__ = node.__data__;
          subgroup[i] = subnode;
        }
      }
    }

    return new Selection$1(subgroups, this._parents);
  }

  function empty() {
    return [];
  }

  function selectorAll(selector) {
    return selector == null ? empty : function() {
      return this.querySelectorAll(selector);
    };
  }

  function selection_selectAll(select) {
    if (typeof select !== "function") select = selectorAll(select);

    for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
        if (node = group[i]) {
          subgroups.push(select.call(node, node.__data__, i, group));
          parents.push(node);
        }
      }
    }

    return new Selection$1(subgroups, parents);
  }

  function matcher(selector) {
    return function() {
      return this.matches(selector);
    };
  }

  function selection_filter(match) {
    if (typeof match !== "function") match = matcher(match);

    for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
        if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
          subgroup.push(node);
        }
      }
    }

    return new Selection$1(subgroups, this._parents);
  }

  function sparse(update) {
    return new Array(update.length);
  }

  function selection_enter() {
    return new Selection$1(this._enter || this._groups.map(sparse), this._parents);
  }

  function EnterNode(parent, datum) {
    this.ownerDocument = parent.ownerDocument;
    this.namespaceURI = parent.namespaceURI;
    this._next = null;
    this._parent = parent;
    this.__data__ = datum;
  }

  EnterNode.prototype = {
    constructor: EnterNode,
    appendChild: function(child) { return this._parent.insertBefore(child, this._next); },
    insertBefore: function(child, next) { return this._parent.insertBefore(child, next); },
    querySelector: function(selector) { return this._parent.querySelector(selector); },
    querySelectorAll: function(selector) { return this._parent.querySelectorAll(selector); }
  };

  function constant$1(x) {
    return function() {
      return x;
    };
  }

  var keyPrefix = "$"; // Protect against keys like “__proto__”.

  function bindIndex(parent, group, enter, update, exit, data) {
    var i = 0,
        node,
        groupLength = group.length,
        dataLength = data.length;

    // Put any non-null nodes that fit into update.
    // Put any null nodes into enter.
    // Put any remaining data into enter.
    for (; i < dataLength; ++i) {
      if (node = group[i]) {
        node.__data__ = data[i];
        update[i] = node;
      } else {
        enter[i] = new EnterNode(parent, data[i]);
      }
    }

    // Put any non-null nodes that don’t fit into exit.
    for (; i < groupLength; ++i) {
      if (node = group[i]) {
        exit[i] = node;
      }
    }
  }

  function bindKey(parent, group, enter, update, exit, data, key) {
    var i,
        node,
        nodeByKeyValue = {},
        groupLength = group.length,
        dataLength = data.length,
        keyValues = new Array(groupLength),
        keyValue;

    // Compute the key for each node.
    // If multiple nodes have the same key, the duplicates are added to exit.
    for (i = 0; i < groupLength; ++i) {
      if (node = group[i]) {
        keyValues[i] = keyValue = keyPrefix + key.call(node, node.__data__, i, group);
        if (keyValue in nodeByKeyValue) {
          exit[i] = node;
        } else {
          nodeByKeyValue[keyValue] = node;
        }
      }
    }

    // Compute the key for each datum.
    // If there a node associated with this key, join and add it to update.
    // If there is not (or the key is a duplicate), add it to enter.
    for (i = 0; i < dataLength; ++i) {
      keyValue = keyPrefix + key.call(parent, data[i], i, data);
      if (node = nodeByKeyValue[keyValue]) {
        update[i] = node;
        node.__data__ = data[i];
        nodeByKeyValue[keyValue] = null;
      } else {
        enter[i] = new EnterNode(parent, data[i]);
      }
    }

    // Add any remaining nodes that were not bound to data to exit.
    for (i = 0; i < groupLength; ++i) {
      if ((node = group[i]) && (nodeByKeyValue[keyValues[i]] === node)) {
        exit[i] = node;
      }
    }
  }

  function selection_data(value, key) {
    if (!value) {
      data = new Array(this.size()), j = -1;
      this.each(function(d) { data[++j] = d; });
      return data;
    }

    var bind = key ? bindKey : bindIndex,
        parents = this._parents,
        groups = this._groups;

    if (typeof value !== "function") value = constant$1(value);

    for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
      var parent = parents[j],
          group = groups[j],
          groupLength = group.length,
          data = value.call(parent, parent && parent.__data__, j, parents),
          dataLength = data.length,
          enterGroup = enter[j] = new Array(dataLength),
          updateGroup = update[j] = new Array(dataLength),
          exitGroup = exit[j] = new Array(groupLength);

      bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);

      // Now connect the enter nodes to their following update node, such that
      // appendChild can insert the materialized enter node before this node,
      // rather than at the end of the parent node.
      for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
        if (previous = enterGroup[i0]) {
          if (i0 >= i1) i1 = i0 + 1;
          while (!(next = updateGroup[i1]) && ++i1 < dataLength);
          previous._next = next || null;
        }
      }
    }

    update = new Selection$1(update, parents);
    update._enter = enter;
    update._exit = exit;
    return update;
  }

  function selection_exit() {
    return new Selection$1(this._exit || this._groups.map(sparse), this._parents);
  }

  function selection_join(onenter, onupdate, onexit) {
    var enter = this.enter(), update = this, exit = this.exit();
    enter = typeof onenter === "function" ? onenter(enter) : enter.append(onenter + "");
    if (onupdate != null) update = onupdate(update);
    if (onexit == null) exit.remove(); else onexit(exit);
    return enter && update ? enter.merge(update).order() : update;
  }

  function selection_merge(selection) {

    for (var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
      for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
        if (node = group0[i] || group1[i]) {
          merge[i] = node;
        }
      }
    }

    for (; j < m0; ++j) {
      merges[j] = groups0[j];
    }

    return new Selection$1(merges, this._parents);
  }

  function selection_order() {

    for (var groups = this._groups, j = -1, m = groups.length; ++j < m;) {
      for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;) {
        if (node = group[i]) {
          if (next && node.compareDocumentPosition(next) ^ 4) next.parentNode.insertBefore(node, next);
          next = node;
        }
      }
    }

    return this;
  }

  function selection_sort(compare) {
    if (!compare) compare = ascending;

    function compareNode(a, b) {
      return a && b ? compare(a.__data__, b.__data__) : !a - !b;
    }

    for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
        if (node = group[i]) {
          sortgroup[i] = node;
        }
      }
      sortgroup.sort(compareNode);
    }

    return new Selection$1(sortgroups, this._parents).order();
  }

  function ascending(a, b) {
    return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
  }

  function selection_call() {
    var callback = arguments[0];
    arguments[0] = this;
    callback.apply(null, arguments);
    return this;
  }

  function selection_nodes() {
    var nodes = new Array(this.size()), i = -1;
    this.each(function() { nodes[++i] = this; });
    return nodes;
  }

  function selection_node() {

    for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
      for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
        var node = group[i];
        if (node) return node;
      }
    }

    return null;
  }

  function selection_size() {
    var size = 0;
    this.each(function() { ++size; });
    return size;
  }

  function selection_empty() {
    return !this.node();
  }

  function selection_each(callback) {

    for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
      for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
        if (node = group[i]) callback.call(node, node.__data__, i, group);
      }
    }

    return this;
  }

  function attrRemove$1(name) {
    return function() {
      this.removeAttribute(name);
    };
  }

  function attrRemoveNS$1(fullname) {
    return function() {
      this.removeAttributeNS(fullname.space, fullname.local);
    };
  }

  function attrConstant$1(name, value) {
    return function() {
      this.setAttribute(name, value);
    };
  }

  function attrConstantNS$1(fullname, value) {
    return function() {
      this.setAttributeNS(fullname.space, fullname.local, value);
    };
  }

  function attrFunction$1(name, value) {
    return function() {
      var v = value.apply(this, arguments);
      if (v == null) this.removeAttribute(name);
      else this.setAttribute(name, v);
    };
  }

  function attrFunctionNS$1(fullname, value) {
    return function() {
      var v = value.apply(this, arguments);
      if (v == null) this.removeAttributeNS(fullname.space, fullname.local);
      else this.setAttributeNS(fullname.space, fullname.local, v);
    };
  }

  function selection_attr(name, value) {
    var fullname = namespace(name);

    if (arguments.length < 2) {
      var node = this.node();
      return fullname.local
          ? node.getAttributeNS(fullname.space, fullname.local)
          : node.getAttribute(fullname);
    }

    return this.each((value == null
        ? (fullname.local ? attrRemoveNS$1 : attrRemove$1) : (typeof value === "function"
        ? (fullname.local ? attrFunctionNS$1 : attrFunction$1)
        : (fullname.local ? attrConstantNS$1 : attrConstant$1)))(fullname, value));
  }

  function defaultView(node) {
    return (node.ownerDocument && node.ownerDocument.defaultView) // node is a Node
        || (node.document && node) // node is a Window
        || node.defaultView; // node is a Document
  }

  function styleRemove$1(name) {
    return function() {
      this.style.removeProperty(name);
    };
  }

  function styleConstant$1(name, value, priority) {
    return function() {
      this.style.setProperty(name, value, priority);
    };
  }

  function styleFunction$1(name, value, priority) {
    return function() {
      var v = value.apply(this, arguments);
      if (v == null) this.style.removeProperty(name);
      else this.style.setProperty(name, v, priority);
    };
  }

  function selection_style(name, value, priority) {
    return arguments.length > 1
        ? this.each((value == null
              ? styleRemove$1 : typeof value === "function"
              ? styleFunction$1
              : styleConstant$1)(name, value, priority == null ? "" : priority))
        : styleValue(this.node(), name);
  }

  function styleValue(node, name) {
    return node.style.getPropertyValue(name)
        || defaultView(node).getComputedStyle(node, null).getPropertyValue(name);
  }

  function propertyRemove(name) {
    return function() {
      delete this[name];
    };
  }

  function propertyConstant(name, value) {
    return function() {
      this[name] = value;
    };
  }

  function propertyFunction(name, value) {
    return function() {
      var v = value.apply(this, arguments);
      if (v == null) delete this[name];
      else this[name] = v;
    };
  }

  function selection_property(name, value) {
    return arguments.length > 1
        ? this.each((value == null
            ? propertyRemove : typeof value === "function"
            ? propertyFunction
            : propertyConstant)(name, value))
        : this.node()[name];
  }

  function classArray(string) {
    return string.trim().split(/^|\s+/);
  }

  function classList(node) {
    return node.classList || new ClassList(node);
  }

  function ClassList(node) {
    this._node = node;
    this._names = classArray(node.getAttribute("class") || "");
  }

  ClassList.prototype = {
    add: function(name) {
      var i = this._names.indexOf(name);
      if (i < 0) {
        this._names.push(name);
        this._node.setAttribute("class", this._names.join(" "));
      }
    },
    remove: function(name) {
      var i = this._names.indexOf(name);
      if (i >= 0) {
        this._names.splice(i, 1);
        this._node.setAttribute("class", this._names.join(" "));
      }
    },
    contains: function(name) {
      return this._names.indexOf(name) >= 0;
    }
  };

  function classedAdd(node, names) {
    var list = classList(node), i = -1, n = names.length;
    while (++i < n) list.add(names[i]);
  }

  function classedRemove(node, names) {
    var list = classList(node), i = -1, n = names.length;
    while (++i < n) list.remove(names[i]);
  }

  function classedTrue(names) {
    return function() {
      classedAdd(this, names);
    };
  }

  function classedFalse(names) {
    return function() {
      classedRemove(this, names);
    };
  }

  function classedFunction(names, value) {
    return function() {
      (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
    };
  }

  function selection_classed(name, value) {
    var names = classArray(name + "");

    if (arguments.length < 2) {
      var list = classList(this.node()), i = -1, n = names.length;
      while (++i < n) if (!list.contains(names[i])) return false;
      return true;
    }

    return this.each((typeof value === "function"
        ? classedFunction : value
        ? classedTrue
        : classedFalse)(names, value));
  }

  function textRemove() {
    this.textContent = "";
  }

  function textConstant$1(value) {
    return function() {
      this.textContent = value;
    };
  }

  function textFunction$1(value) {
    return function() {
      var v = value.apply(this, arguments);
      this.textContent = v == null ? "" : v;
    };
  }

  function selection_text(value) {
    return arguments.length
        ? this.each(value == null
            ? textRemove : (typeof value === "function"
            ? textFunction$1
            : textConstant$1)(value))
        : this.node().textContent;
  }

  function htmlRemove() {
    this.innerHTML = "";
  }

  function htmlConstant(value) {
    return function() {
      this.innerHTML = value;
    };
  }

  function htmlFunction(value) {
    return function() {
      var v = value.apply(this, arguments);
      this.innerHTML = v == null ? "" : v;
    };
  }

  function selection_html(value) {
    return arguments.length
        ? this.each(value == null
            ? htmlRemove : (typeof value === "function"
            ? htmlFunction
            : htmlConstant)(value))
        : this.node().innerHTML;
  }

  function raise() {
    if (this.nextSibling) this.parentNode.appendChild(this);
  }

  function selection_raise() {
    return this.each(raise);
  }

  function lower() {
    if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
  }

  function selection_lower() {
    return this.each(lower);
  }

  function selection_append(name) {
    var create = typeof name === "function" ? name : creator(name);
    return this.select(function() {
      return this.appendChild(create.apply(this, arguments));
    });
  }

  function constantNull() {
    return null;
  }

  function selection_insert(name, before) {
    var create = typeof name === "function" ? name : creator(name),
        select = before == null ? constantNull : typeof before === "function" ? before : selector(before);
    return this.select(function() {
      return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
    });
  }

  function remove() {
    var parent = this.parentNode;
    if (parent) parent.removeChild(this);
  }

  function selection_remove() {
    return this.each(remove);
  }

  function selection_cloneShallow() {
    var clone = this.cloneNode(false), parent = this.parentNode;
    return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
  }

  function selection_cloneDeep() {
    var clone = this.cloneNode(true), parent = this.parentNode;
    return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
  }

  function selection_clone(deep) {
    return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
  }

  function selection_datum(value) {
    return arguments.length
        ? this.property("__data__", value)
        : this.node().__data__;
  }

  var filterEvents = {};

  if (typeof document !== "undefined") {
    var element = document.documentElement;
    if (!("onmouseenter" in element)) {
      filterEvents = {mouseenter: "mouseover", mouseleave: "mouseout"};
    }
  }

  function filterContextListener(listener, index, group) {
    listener = contextListener(listener, index, group);
    return function(event) {
      var related = event.relatedTarget;
      if (!related || (related !== this && !(related.compareDocumentPosition(this) & 8))) {
        listener.call(this, event);
      }
    };
  }

  function contextListener(listener, index, group) {
    return function(event1) {
      try {
        listener.call(this, this.__data__, index, group);
      } finally {
      }
    };
  }

  function parseTypenames$1(typenames) {
    return typenames.trim().split(/^|\s+/).map(function(t) {
      var name = "", i = t.indexOf(".");
      if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
      return {type: t, name: name};
    });
  }

  function onRemove(typename) {
    return function() {
      var on = this.__on;
      if (!on) return;
      for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
        if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
          this.removeEventListener(o.type, o.listener, o.capture);
        } else {
          on[++i] = o;
        }
      }
      if (++i) on.length = i;
      else delete this.__on;
    };
  }

  function onAdd(typename, value, capture) {
    var wrap = filterEvents.hasOwnProperty(typename.type) ? filterContextListener : contextListener;
    return function(d, i, group) {
      var on = this.__on, o, listener = wrap(value, i, group);
      if (on) for (var j = 0, m = on.length; j < m; ++j) {
        if ((o = on[j]).type === typename.type && o.name === typename.name) {
          this.removeEventListener(o.type, o.listener, o.capture);
          this.addEventListener(o.type, o.listener = listener, o.capture = capture);
          o.value = value;
          return;
        }
      }
      this.addEventListener(typename.type, listener, capture);
      o = {type: typename.type, name: typename.name, value: value, listener: listener, capture: capture};
      if (!on) this.__on = [o];
      else on.push(o);
    };
  }

  function selection_on(typename, value, capture) {
    var typenames = parseTypenames$1(typename + ""), i, n = typenames.length, t;

    if (arguments.length < 2) {
      var on = this.node().__on;
      if (on) for (var j = 0, m = on.length, o; j < m; ++j) {
        for (i = 0, o = on[j]; i < n; ++i) {
          if ((t = typenames[i]).type === o.type && t.name === o.name) {
            return o.value;
          }
        }
      }
      return;
    }

    on = value ? onAdd : onRemove;
    if (capture == null) capture = false;
    for (i = 0; i < n; ++i) this.each(on(typenames[i], value, capture));
    return this;
  }

  function dispatchEvent(node, type, params) {
    var window = defaultView(node),
        event = window.CustomEvent;

    if (typeof event === "function") {
      event = new event(type, params);
    } else {
      event = window.document.createEvent("Event");
      if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;
      else event.initEvent(type, false, false);
    }

    node.dispatchEvent(event);
  }

  function dispatchConstant(type, params) {
    return function() {
      return dispatchEvent(this, type, params);
    };
  }

  function dispatchFunction(type, params) {
    return function() {
      return dispatchEvent(this, type, params.apply(this, arguments));
    };
  }

  function selection_dispatch(type, params) {
    return this.each((typeof params === "function"
        ? dispatchFunction
        : dispatchConstant)(type, params));
  }

  var root = [null];

  function Selection$1(groups, parents) {
    this._groups = groups;
    this._parents = parents;
  }

  function selection() {
    return new Selection$1([[document.documentElement]], root);
  }

  Selection$1.prototype = selection.prototype = {
    constructor: Selection$1,
    select: selection_select,
    selectAll: selection_selectAll,
    filter: selection_filter,
    data: selection_data,
    enter: selection_enter,
    exit: selection_exit,
    join: selection_join,
    merge: selection_merge,
    order: selection_order,
    sort: selection_sort,
    call: selection_call,
    nodes: selection_nodes,
    node: selection_node,
    size: selection_size,
    empty: selection_empty,
    each: selection_each,
    attr: selection_attr,
    style: selection_style,
    property: selection_property,
    classed: selection_classed,
    text: selection_text,
    html: selection_html,
    raise: selection_raise,
    lower: selection_lower,
    append: selection_append,
    insert: selection_insert,
    remove: selection_remove,
    clone: selection_clone,
    datum: selection_datum,
    on: selection_on,
    dispatch: selection_dispatch
  };

  function select(selector) {
    return typeof selector === "string"
        ? new Selection$1([[document.querySelector(selector)]], [document.documentElement])
        : new Selection$1([[selector]], root);
  }

  function selectAll(selector) {
    return typeof selector === "string"
        ? new Selection$1([document.querySelectorAll(selector)], [document.documentElement])
        : new Selection$1([selector == null ? [] : selector], root);
  }

  var noop = {value: function() {}};

  function dispatch() {
    for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
      if (!(t = arguments[i] + "") || (t in _) || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
      _[t] = [];
    }
    return new Dispatch(_);
  }

  function Dispatch(_) {
    this._ = _;
  }

  function parseTypenames(typenames, types) {
    return typenames.trim().split(/^|\s+/).map(function(t) {
      var name = "", i = t.indexOf(".");
      if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
      if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
      return {type: t, name: name};
    });
  }

  Dispatch.prototype = dispatch.prototype = {
    constructor: Dispatch,
    on: function(typename, callback) {
      var _ = this._,
          T = parseTypenames(typename + "", _),
          t,
          i = -1,
          n = T.length;

      // If no callback was specified, return the callback of the given type and name.
      if (arguments.length < 2) {
        while (++i < n) if ((t = (typename = T[i]).type) && (t = get$1(_[t], typename.name))) return t;
        return;
      }

      // If a type was specified, set the callback for the given type and name.
      // Otherwise, if a null callback was specified, remove callbacks of the given name.
      if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
      while (++i < n) {
        if (t = (typename = T[i]).type) _[t] = set$1(_[t], typename.name, callback);
        else if (callback == null) for (t in _) _[t] = set$1(_[t], typename.name, null);
      }

      return this;
    },
    copy: function() {
      var copy = {}, _ = this._;
      for (var t in _) copy[t] = _[t].slice();
      return new Dispatch(copy);
    },
    call: function(type, that) {
      if ((n = arguments.length - 2) > 0) for (var args = new Array(n), i = 0, n, t; i < n; ++i) args[i] = arguments[i + 2];
      if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
      for (t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
    },
    apply: function(type, that, args) {
      if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
      for (var t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
    }
  };

  function get$1(type, name) {
    for (var i = 0, n = type.length, c; i < n; ++i) {
      if ((c = type[i]).name === name) {
        return c.value;
      }
    }
  }

  function set$1(type, name, callback) {
    for (var i = 0, n = type.length; i < n; ++i) {
      if (type[i].name === name) {
        type[i] = noop, type = type.slice(0, i).concat(type.slice(i + 1));
        break;
      }
    }
    if (callback != null) type.push({name: name, value: callback});
    return type;
  }

  var frame = 0, // is an animation frame pending?
      timeout$1 = 0, // is a timeout pending?
      interval = 0, // are any timers active?
      pokeDelay = 1000, // how frequently we check for clock skew
      taskHead,
      taskTail,
      clockLast = 0,
      clockNow = 0,
      clockSkew = 0,
      clock = typeof performance === "object" && performance.now ? performance : Date,
      setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) { setTimeout(f, 17); };

  function now() {
    return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
  }

  function clearNow() {
    clockNow = 0;
  }

  function Timer() {
    this._call =
    this._time =
    this._next = null;
  }

  Timer.prototype = timer.prototype = {
    constructor: Timer,
    restart: function(callback, delay, time) {
      if (typeof callback !== "function") throw new TypeError("callback is not a function");
      time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
      if (!this._next && taskTail !== this) {
        if (taskTail) taskTail._next = this;
        else taskHead = this;
        taskTail = this;
      }
      this._call = callback;
      this._time = time;
      sleep();
    },
    stop: function() {
      if (this._call) {
        this._call = null;
        this._time = Infinity;
        sleep();
      }
    }
  };

  function timer(callback, delay, time) {
    var t = new Timer;
    t.restart(callback, delay, time);
    return t;
  }

  function timerFlush() {
    now(); // Get the current time, if not already set.
    ++frame; // Pretend we’ve set an alarm, if we haven’t already.
    var t = taskHead, e;
    while (t) {
      if ((e = clockNow - t._time) >= 0) t._call.call(null, e);
      t = t._next;
    }
    --frame;
  }

  function wake() {
    clockNow = (clockLast = clock.now()) + clockSkew;
    frame = timeout$1 = 0;
    try {
      timerFlush();
    } finally {
      frame = 0;
      nap();
      clockNow = 0;
    }
  }

  function poke() {
    var now = clock.now(), delay = now - clockLast;
    if (delay > pokeDelay) clockSkew -= delay, clockLast = now;
  }

  function nap() {
    var t0, t1 = taskHead, t2, time = Infinity;
    while (t1) {
      if (t1._call) {
        if (time > t1._time) time = t1._time;
        t0 = t1, t1 = t1._next;
      } else {
        t2 = t1._next, t1._next = null;
        t1 = t0 ? t0._next = t2 : taskHead = t2;
      }
    }
    taskTail = t0;
    sleep(time);
  }

  function sleep(time) {
    if (frame) return; // Soonest alarm already set, or will be.
    if (timeout$1) timeout$1 = clearTimeout(timeout$1);
    var delay = time - clockNow; // Strictly less than if we recomputed clockNow.
    if (delay > 24) {
      if (time < Infinity) timeout$1 = setTimeout(wake, time - clock.now() - clockSkew);
      if (interval) interval = clearInterval(interval);
    } else {
      if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
      frame = 1, setFrame(wake);
    }
  }

  function timeout(callback, delay, time) {
    var t = new Timer;
    delay = delay == null ? 0 : +delay;
    t.restart(function(elapsed) {
      t.stop();
      callback(elapsed + delay);
    }, delay, time);
    return t;
  }

  var emptyOn = dispatch("start", "end", "cancel", "interrupt");
  var emptyTween = [];

  var CREATED = 0;
  var SCHEDULED = 1;
  var STARTING = 2;
  var STARTED = 3;
  var RUNNING = 4;
  var ENDING = 5;
  var ENDED = 6;

  function schedule(node, name, id, index, group, timing) {
    var schedules = node.__transition;
    if (!schedules) node.__transition = {};
    else if (id in schedules) return;
    create(node, id, {
      name: name,
      index: index, // For context during callback.
      group: group, // For context during callback.
      on: emptyOn,
      tween: emptyTween,
      time: timing.time,
      delay: timing.delay,
      duration: timing.duration,
      ease: timing.ease,
      timer: null,
      state: CREATED
    });
  }

  function init(node, id) {
    var schedule = get(node, id);
    if (schedule.state > CREATED) throw new Error("too late; already scheduled");
    return schedule;
  }

  function set(node, id) {
    var schedule = get(node, id);
    if (schedule.state > STARTED) throw new Error("too late; already running");
    return schedule;
  }

  function get(node, id) {
    var schedule = node.__transition;
    if (!schedule || !(schedule = schedule[id])) throw new Error("transition not found");
    return schedule;
  }

  function create(node, id, self) {
    var schedules = node.__transition,
        tween;

    // Initialize the self timer when the transition is created.
    // Note the actual delay is not known until the first callback!
    schedules[id] = self;
    self.timer = timer(schedule, 0, self.time);

    function schedule(elapsed) {
      self.state = SCHEDULED;
      self.timer.restart(start, self.delay, self.time);

      // If the elapsed delay is less than our first sleep, start immediately.
      if (self.delay <= elapsed) start(elapsed - self.delay);
    }

    function start(elapsed) {
      var i, j, n, o;

      // If the state is not SCHEDULED, then we previously errored on start.
      if (self.state !== SCHEDULED) return stop();

      for (i in schedules) {
        o = schedules[i];
        if (o.name !== self.name) continue;

        // While this element already has a starting transition during this frame,
        // defer starting an interrupting transition until that transition has a
        // chance to tick (and possibly end); see d3/d3-transition#54!
        if (o.state === STARTED) return timeout(start);

        // Interrupt the active transition, if any.
        if (o.state === RUNNING) {
          o.state = ENDED;
          o.timer.stop();
          o.on.call("interrupt", node, node.__data__, o.index, o.group);
          delete schedules[i];
        }

        // Cancel any pre-empted transitions.
        else if (+i < id) {
          o.state = ENDED;
          o.timer.stop();
          o.on.call("cancel", node, node.__data__, o.index, o.group);
          delete schedules[i];
        }
      }

      // Defer the first tick to end of the current frame; see d3/d3#1576.
      // Note the transition may be canceled after start and before the first tick!
      // Note this must be scheduled before the start event; see d3/d3-transition#16!
      // Assuming this is successful, subsequent callbacks go straight to tick.
      timeout(function() {
        if (self.state === STARTED) {
          self.state = RUNNING;
          self.timer.restart(tick, self.delay, self.time);
          tick(elapsed);
        }
      });

      // Dispatch the start event.
      // Note this must be done before the tween are initialized.
      self.state = STARTING;
      self.on.call("start", node, node.__data__, self.index, self.group);
      if (self.state !== STARTING) return; // interrupted
      self.state = STARTED;

      // Initialize the tween, deleting null tween.
      tween = new Array(n = self.tween.length);
      for (i = 0, j = -1; i < n; ++i) {
        if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) {
          tween[++j] = o;
        }
      }
      tween.length = j + 1;
    }

    function tick(elapsed) {
      var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = ENDING, 1),
          i = -1,
          n = tween.length;

      while (++i < n) {
        tween[i].call(node, t);
      }

      // Dispatch the end event.
      if (self.state === ENDING) {
        self.on.call("end", node, node.__data__, self.index, self.group);
        stop();
      }
    }

    function stop() {
      self.state = ENDED;
      self.timer.stop();
      delete schedules[id];
      for (var i in schedules) return; // eslint-disable-line no-unused-vars
      delete node.__transition;
    }
  }

  function interrupt(node, name) {
    var schedules = node.__transition,
        schedule,
        active,
        empty = true,
        i;

    if (!schedules) return;

    name = name == null ? null : name + "";

    for (i in schedules) {
      if ((schedule = schedules[i]).name !== name) { empty = false; continue; }
      active = schedule.state > STARTING && schedule.state < ENDING;
      schedule.state = ENDED;
      schedule.timer.stop();
      schedule.on.call(active ? "interrupt" : "cancel", node, node.__data__, schedule.index, schedule.group);
      delete schedules[i];
    }

    if (empty) delete node.__transition;
  }

  function selection_interrupt(name) {
    return this.each(function() {
      interrupt(this, name);
    });
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

  function constant(x) {
    return function() {
      return x;
    };
  }

  function linear(a, d) {
    return function(t) {
      return a + t * d;
    };
  }

  function exponential(a, b, y) {
    return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
      return Math.pow(a + t * b, y);
    };
  }

  function gamma(y) {
    return (y = +y) === 1 ? nogamma : function(a, b) {
      return b - a ? exponential(a, b, y) : constant(isNaN(a) ? b : a);
    };
  }

  function nogamma(a, b) {
    var d = b - a;
    return d ? linear(a, d) : constant(isNaN(a) ? b : a);
  }

  var interpolateRgb = (function rgbGamma(y) {
    var color = gamma(y);

    function rgb$1(start, end) {
      var r = color((start = rgb(start)).r, (end = rgb(end)).r),
          g = color(start.g, end.g),
          b = color(start.b, end.b),
          opacity = nogamma(start.opacity, end.opacity);
      return function(t) {
        start.r = r(t);
        start.g = g(t);
        start.b = b(t);
        start.opacity = opacity(t);
        return start + "";
      };
    }

    rgb$1.gamma = rgbGamma;

    return rgb$1;
  })(1);

  function interpolateNumber(a, b) {
    return a = +a, b = +b, function(t) {
      return a * (1 - t) + b * t;
    };
  }

  var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
      reB = new RegExp(reA.source, "g");

  function zero(b) {
    return function() {
      return b;
    };
  }

  function one(b) {
    return function(t) {
      return b(t) + "";
    };
  }

  function interpolateString(a, b) {
    var bi = reA.lastIndex = reB.lastIndex = 0, // scan index for next number in b
        am, // current match in a
        bm, // current match in b
        bs, // string preceding current number in b, if any
        i = -1, // index in s
        s = [], // string constants and placeholders
        q = []; // number interpolators

    // Coerce inputs to strings.
    a = a + "", b = b + "";

    // Interpolate pairs of numbers in a & b.
    while ((am = reA.exec(a))
        && (bm = reB.exec(b))) {
      if ((bs = bm.index) > bi) { // a string precedes the next number in b
        bs = b.slice(bi, bs);
        if (s[i]) s[i] += bs; // coalesce with previous string
        else s[++i] = bs;
      }
      if ((am = am[0]) === (bm = bm[0])) { // numbers in a & b match
        if (s[i]) s[i] += bm; // coalesce with previous string
        else s[++i] = bm;
      } else { // interpolate non-matching numbers
        s[++i] = null;
        q.push({i: i, x: interpolateNumber(am, bm)});
      }
      bi = reB.lastIndex;
    }

    // Add remains of b.
    if (bi < b.length) {
      bs = b.slice(bi);
      if (s[i]) s[i] += bs; // coalesce with previous string
      else s[++i] = bs;
    }

    // Special optimization for only a single match.
    // Otherwise, interpolate each of the numbers and rejoin the string.
    return s.length < 2 ? (q[0]
        ? one(q[0].x)
        : zero(b))
        : (b = q.length, function(t) {
            for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
            return s.join("");
          });
  }

  var degrees = 180 / Math.PI;

  var identity = {
    translateX: 0,
    translateY: 0,
    rotate: 0,
    skewX: 0,
    scaleX: 1,
    scaleY: 1
  };

  function decompose(a, b, c, d, e, f) {
    var scaleX, scaleY, skewX;
    if (scaleX = Math.sqrt(a * a + b * b)) a /= scaleX, b /= scaleX;
    if (skewX = a * c + b * d) c -= a * skewX, d -= b * skewX;
    if (scaleY = Math.sqrt(c * c + d * d)) c /= scaleY, d /= scaleY, skewX /= scaleY;
    if (a * d < b * c) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
    return {
      translateX: e,
      translateY: f,
      rotate: Math.atan2(b, a) * degrees,
      skewX: Math.atan(skewX) * degrees,
      scaleX: scaleX,
      scaleY: scaleY
    };
  }

  var cssNode,
      cssRoot,
      cssView,
      svgNode;

  function parseCss(value) {
    if (value === "none") return identity;
    if (!cssNode) cssNode = document.createElement("DIV"), cssRoot = document.documentElement, cssView = document.defaultView;
    cssNode.style.transform = value;
    value = cssView.getComputedStyle(cssRoot.appendChild(cssNode), null).getPropertyValue("transform");
    cssRoot.removeChild(cssNode);
    value = value.slice(7, -1).split(",");
    return decompose(+value[0], +value[1], +value[2], +value[3], +value[4], +value[5]);
  }

  function parseSvg(value) {
    if (value == null) return identity;
    if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
    svgNode.setAttribute("transform", value);
    if (!(value = svgNode.transform.baseVal.consolidate())) return identity;
    value = value.matrix;
    return decompose(value.a, value.b, value.c, value.d, value.e, value.f);
  }

  function interpolateTransform(parse, pxComma, pxParen, degParen) {

    function pop(s) {
      return s.length ? s.pop() + " " : "";
    }

    function translate(xa, ya, xb, yb, s, q) {
      if (xa !== xb || ya !== yb) {
        var i = s.push("translate(", null, pxComma, null, pxParen);
        q.push({i: i - 4, x: interpolateNumber(xa, xb)}, {i: i - 2, x: interpolateNumber(ya, yb)});
      } else if (xb || yb) {
        s.push("translate(" + xb + pxComma + yb + pxParen);
      }
    }

    function rotate(a, b, s, q) {
      if (a !== b) {
        if (a - b > 180) b += 360; else if (b - a > 180) a += 360; // shortest path
        q.push({i: s.push(pop(s) + "rotate(", null, degParen) - 2, x: interpolateNumber(a, b)});
      } else if (b) {
        s.push(pop(s) + "rotate(" + b + degParen);
      }
    }

    function skewX(a, b, s, q) {
      if (a !== b) {
        q.push({i: s.push(pop(s) + "skewX(", null, degParen) - 2, x: interpolateNumber(a, b)});
      } else if (b) {
        s.push(pop(s) + "skewX(" + b + degParen);
      }
    }

    function scale(xa, ya, xb, yb, s, q) {
      if (xa !== xb || ya !== yb) {
        var i = s.push(pop(s) + "scale(", null, ",", null, ")");
        q.push({i: i - 4, x: interpolateNumber(xa, xb)}, {i: i - 2, x: interpolateNumber(ya, yb)});
      } else if (xb !== 1 || yb !== 1) {
        s.push(pop(s) + "scale(" + xb + "," + yb + ")");
      }
    }

    return function(a, b) {
      var s = [], // string constants and placeholders
          q = []; // number interpolators
      a = parse(a), b = parse(b);
      translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
      rotate(a.rotate, b.rotate, s, q);
      skewX(a.skewX, b.skewX, s, q);
      scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
      a = b = null; // gc
      return function(t) {
        var i = -1, n = q.length, o;
        while (++i < n) s[(o = q[i]).i] = o.x(t);
        return s.join("");
      };
    };
  }

  var interpolateTransformCss = interpolateTransform(parseCss, "px, ", "px)", "deg)");
  var interpolateTransformSvg = interpolateTransform(parseSvg, ", ", ")", ")");

  function tweenRemove(id, name) {
    var tween0, tween1;
    return function() {
      var schedule = set(this, id),
          tween = schedule.tween;

      // If this node shared tween with the previous node,
      // just assign the updated shared tween and we’re done!
      // Otherwise, copy-on-write.
      if (tween !== tween0) {
        tween1 = tween0 = tween;
        for (var i = 0, n = tween1.length; i < n; ++i) {
          if (tween1[i].name === name) {
            tween1 = tween1.slice();
            tween1.splice(i, 1);
            break;
          }
        }
      }

      schedule.tween = tween1;
    };
  }

  function tweenFunction(id, name, value) {
    var tween0, tween1;
    if (typeof value !== "function") throw new Error;
    return function() {
      var schedule = set(this, id),
          tween = schedule.tween;

      // If this node shared tween with the previous node,
      // just assign the updated shared tween and we’re done!
      // Otherwise, copy-on-write.
      if (tween !== tween0) {
        tween1 = (tween0 = tween).slice();
        for (var t = {name: name, value: value}, i = 0, n = tween1.length; i < n; ++i) {
          if (tween1[i].name === name) {
            tween1[i] = t;
            break;
          }
        }
        if (i === n) tween1.push(t);
      }

      schedule.tween = tween1;
    };
  }

  function transition_tween(name, value) {
    var id = this._id;

    name += "";

    if (arguments.length < 2) {
      var tween = get(this.node(), id).tween;
      for (var i = 0, n = tween.length, t; i < n; ++i) {
        if ((t = tween[i]).name === name) {
          return t.value;
        }
      }
      return null;
    }

    return this.each((value == null ? tweenRemove : tweenFunction)(id, name, value));
  }

  function tweenValue(transition, name, value) {
    var id = transition._id;

    transition.each(function() {
      var schedule = set(this, id);
      (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
    });

    return function(node) {
      return get(node, id).value[name];
    };
  }

  function interpolate(a, b) {
    var c;
    return (typeof b === "number" ? interpolateNumber
        : b instanceof color ? interpolateRgb
        : (c = color(b)) ? (b = c, interpolateRgb)
        : interpolateString)(a, b);
  }

  function attrRemove(name) {
    return function() {
      this.removeAttribute(name);
    };
  }

  function attrRemoveNS(fullname) {
    return function() {
      this.removeAttributeNS(fullname.space, fullname.local);
    };
  }

  function attrConstant(name, interpolate, value1) {
    var string00,
        string1 = value1 + "",
        interpolate0;
    return function() {
      var string0 = this.getAttribute(name);
      return string0 === string1 ? null
          : string0 === string00 ? interpolate0
          : interpolate0 = interpolate(string00 = string0, value1);
    };
  }

  function attrConstantNS(fullname, interpolate, value1) {
    var string00,
        string1 = value1 + "",
        interpolate0;
    return function() {
      var string0 = this.getAttributeNS(fullname.space, fullname.local);
      return string0 === string1 ? null
          : string0 === string00 ? interpolate0
          : interpolate0 = interpolate(string00 = string0, value1);
    };
  }

  function attrFunction(name, interpolate, value) {
    var string00,
        string10,
        interpolate0;
    return function() {
      var string0, value1 = value(this), string1;
      if (value1 == null) return void this.removeAttribute(name);
      string0 = this.getAttribute(name);
      string1 = value1 + "";
      return string0 === string1 ? null
          : string0 === string00 && string1 === string10 ? interpolate0
          : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
    };
  }

  function attrFunctionNS(fullname, interpolate, value) {
    var string00,
        string10,
        interpolate0;
    return function() {
      var string0, value1 = value(this), string1;
      if (value1 == null) return void this.removeAttributeNS(fullname.space, fullname.local);
      string0 = this.getAttributeNS(fullname.space, fullname.local);
      string1 = value1 + "";
      return string0 === string1 ? null
          : string0 === string00 && string1 === string10 ? interpolate0
          : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
    };
  }

  function transition_attr(name, value) {
    var fullname = namespace(name), i = fullname === "transform" ? interpolateTransformSvg : interpolate;
    return this.attrTween(name, typeof value === "function"
        ? (fullname.local ? attrFunctionNS : attrFunction)(fullname, i, tweenValue(this, "attr." + name, value))
        : value == null ? (fullname.local ? attrRemoveNS : attrRemove)(fullname)
        : (fullname.local ? attrConstantNS : attrConstant)(fullname, i, value));
  }

  function attrInterpolate(name, i) {
    return function(t) {
      this.setAttribute(name, i.call(this, t));
    };
  }

  function attrInterpolateNS(fullname, i) {
    return function(t) {
      this.setAttributeNS(fullname.space, fullname.local, i.call(this, t));
    };
  }

  function attrTweenNS(fullname, value) {
    var t0, i0;
    function tween() {
      var i = value.apply(this, arguments);
      if (i !== i0) t0 = (i0 = i) && attrInterpolateNS(fullname, i);
      return t0;
    }
    tween._value = value;
    return tween;
  }

  function attrTween(name, value) {
    var t0, i0;
    function tween() {
      var i = value.apply(this, arguments);
      if (i !== i0) t0 = (i0 = i) && attrInterpolate(name, i);
      return t0;
    }
    tween._value = value;
    return tween;
  }

  function transition_attrTween(name, value) {
    var key = "attr." + name;
    if (arguments.length < 2) return (key = this.tween(key)) && key._value;
    if (value == null) return this.tween(key, null);
    if (typeof value !== "function") throw new Error;
    var fullname = namespace(name);
    return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
  }

  function delayFunction(id, value) {
    return function() {
      init(this, id).delay = +value.apply(this, arguments);
    };
  }

  function delayConstant(id, value) {
    return value = +value, function() {
      init(this, id).delay = value;
    };
  }

  function transition_delay(value) {
    var id = this._id;

    return arguments.length
        ? this.each((typeof value === "function"
            ? delayFunction
            : delayConstant)(id, value))
        : get(this.node(), id).delay;
  }

  function durationFunction(id, value) {
    return function() {
      set(this, id).duration = +value.apply(this, arguments);
    };
  }

  function durationConstant(id, value) {
    return value = +value, function() {
      set(this, id).duration = value;
    };
  }

  function transition_duration(value) {
    var id = this._id;

    return arguments.length
        ? this.each((typeof value === "function"
            ? durationFunction
            : durationConstant)(id, value))
        : get(this.node(), id).duration;
  }

  function easeConstant(id, value) {
    if (typeof value !== "function") throw new Error;
    return function() {
      set(this, id).ease = value;
    };
  }

  function transition_ease(value) {
    var id = this._id;

    return arguments.length
        ? this.each(easeConstant(id, value))
        : get(this.node(), id).ease;
  }

  function transition_filter(match) {
    if (typeof match !== "function") match = matcher(match);

    for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
        if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
          subgroup.push(node);
        }
      }
    }

    return new Transition(subgroups, this._parents, this._name, this._id);
  }

  function transition_merge(transition) {
    if (transition._id !== this._id) throw new Error;

    for (var groups0 = this._groups, groups1 = transition._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
      for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
        if (node = group0[i] || group1[i]) {
          merge[i] = node;
        }
      }
    }

    for (; j < m0; ++j) {
      merges[j] = groups0[j];
    }

    return new Transition(merges, this._parents, this._name, this._id);
  }

  function start(name) {
    return (name + "").trim().split(/^|\s+/).every(function(t) {
      var i = t.indexOf(".");
      if (i >= 0) t = t.slice(0, i);
      return !t || t === "start";
    });
  }

  function onFunction(id, name, listener) {
    var on0, on1, sit = start(name) ? init : set;
    return function() {
      var schedule = sit(this, id),
          on = schedule.on;

      // If this node shared a dispatch with the previous node,
      // just assign the updated shared dispatch and we’re done!
      // Otherwise, copy-on-write.
      if (on !== on0) (on1 = (on0 = on).copy()).on(name, listener);

      schedule.on = on1;
    };
  }

  function transition_on(name, listener) {
    var id = this._id;

    return arguments.length < 2
        ? get(this.node(), id).on.on(name)
        : this.each(onFunction(id, name, listener));
  }

  function removeFunction(id) {
    return function() {
      var parent = this.parentNode;
      for (var i in this.__transition) if (+i !== id) return;
      if (parent) parent.removeChild(this);
    };
  }

  function transition_remove() {
    return this.on("end.remove", removeFunction(this._id));
  }

  function transition_select(select) {
    var name = this._name,
        id = this._id;

    if (typeof select !== "function") select = selector(select);

    for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
        if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
          if ("__data__" in node) subnode.__data__ = node.__data__;
          subgroup[i] = subnode;
          schedule(subgroup[i], name, id, i, subgroup, get(node, id));
        }
      }
    }

    return new Transition(subgroups, this._parents, name, id);
  }

  function transition_selectAll(select) {
    var name = this._name,
        id = this._id;

    if (typeof select !== "function") select = selectorAll(select);

    for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
        if (node = group[i]) {
          for (var children = select.call(node, node.__data__, i, group), child, inherit = get(node, id), k = 0, l = children.length; k < l; ++k) {
            if (child = children[k]) {
              schedule(child, name, id, k, children, inherit);
            }
          }
          subgroups.push(children);
          parents.push(node);
        }
      }
    }

    return new Transition(subgroups, parents, name, id);
  }

  var Selection = selection.prototype.constructor;

  function transition_selection() {
    return new Selection(this._groups, this._parents);
  }

  function styleNull(name, interpolate) {
    var string00,
        string10,
        interpolate0;
    return function() {
      var string0 = styleValue(this, name),
          string1 = (this.style.removeProperty(name), styleValue(this, name));
      return string0 === string1 ? null
          : string0 === string00 && string1 === string10 ? interpolate0
          : interpolate0 = interpolate(string00 = string0, string10 = string1);
    };
  }

  function styleRemove(name) {
    return function() {
      this.style.removeProperty(name);
    };
  }

  function styleConstant(name, interpolate, value1) {
    var string00,
        string1 = value1 + "",
        interpolate0;
    return function() {
      var string0 = styleValue(this, name);
      return string0 === string1 ? null
          : string0 === string00 ? interpolate0
          : interpolate0 = interpolate(string00 = string0, value1);
    };
  }

  function styleFunction(name, interpolate, value) {
    var string00,
        string10,
        interpolate0;
    return function() {
      var string0 = styleValue(this, name),
          value1 = value(this),
          string1 = value1 + "";
      if (value1 == null) string1 = value1 = (this.style.removeProperty(name), styleValue(this, name));
      return string0 === string1 ? null
          : string0 === string00 && string1 === string10 ? interpolate0
          : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
    };
  }

  function styleMaybeRemove(id, name) {
    var on0, on1, listener0, key = "style." + name, event = "end." + key, remove;
    return function() {
      var schedule = set(this, id),
          on = schedule.on,
          listener = schedule.value[key] == null ? remove || (remove = styleRemove(name)) : undefined;

      // If this node shared a dispatch with the previous node,
      // just assign the updated shared dispatch and we’re done!
      // Otherwise, copy-on-write.
      if (on !== on0 || listener0 !== listener) (on1 = (on0 = on).copy()).on(event, listener0 = listener);

      schedule.on = on1;
    };
  }

  function transition_style(name, value, priority) {
    var i = (name += "") === "transform" ? interpolateTransformCss : interpolate;
    return value == null ? this
        .styleTween(name, styleNull(name, i))
        .on("end.style." + name, styleRemove(name))
      : typeof value === "function" ? this
        .styleTween(name, styleFunction(name, i, tweenValue(this, "style." + name, value)))
        .each(styleMaybeRemove(this._id, name))
      : this
        .styleTween(name, styleConstant(name, i, value), priority)
        .on("end.style." + name, null);
  }

  function styleInterpolate(name, i, priority) {
    return function(t) {
      this.style.setProperty(name, i.call(this, t), priority);
    };
  }

  function styleTween(name, value, priority) {
    var t, i0;
    function tween() {
      var i = value.apply(this, arguments);
      if (i !== i0) t = (i0 = i) && styleInterpolate(name, i, priority);
      return t;
    }
    tween._value = value;
    return tween;
  }

  function transition_styleTween(name, value, priority) {
    var key = "style." + (name += "");
    if (arguments.length < 2) return (key = this.tween(key)) && key._value;
    if (value == null) return this.tween(key, null);
    if (typeof value !== "function") throw new Error;
    return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
  }

  function textConstant(value) {
    return function() {
      this.textContent = value;
    };
  }

  function textFunction(value) {
    return function() {
      var value1 = value(this);
      this.textContent = value1 == null ? "" : value1;
    };
  }

  function transition_text(value) {
    return this.tween("text", typeof value === "function"
        ? textFunction(tweenValue(this, "text", value))
        : textConstant(value == null ? "" : value + ""));
  }

  function textInterpolate(i) {
    return function(t) {
      this.textContent = i.call(this, t);
    };
  }

  function textTween(value) {
    var t0, i0;
    function tween() {
      var i = value.apply(this, arguments);
      if (i !== i0) t0 = (i0 = i) && textInterpolate(i);
      return t0;
    }
    tween._value = value;
    return tween;
  }

  function transition_textTween(value) {
    var key = "text";
    if (arguments.length < 1) return (key = this.tween(key)) && key._value;
    if (value == null) return this.tween(key, null);
    if (typeof value !== "function") throw new Error;
    return this.tween(key, textTween(value));
  }

  function transition_transition() {
    var name = this._name,
        id0 = this._id,
        id1 = newId();

    for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
        if (node = group[i]) {
          var inherit = get(node, id0);
          schedule(node, name, id1, i, group, {
            time: inherit.time + inherit.delay + inherit.duration,
            delay: 0,
            duration: inherit.duration,
            ease: inherit.ease
          });
        }
      }
    }

    return new Transition(groups, this._parents, name, id1);
  }

  function transition_end() {
    var on0, on1, that = this, id = that._id, size = that.size();
    return new Promise(function(resolve, reject) {
      var cancel = {value: reject},
          end = {value: function() { if (--size === 0) resolve(); }};

      that.each(function() {
        var schedule = set(this, id),
            on = schedule.on;

        // If this node shared a dispatch with the previous node,
        // just assign the updated shared dispatch and we’re done!
        // Otherwise, copy-on-write.
        if (on !== on0) {
          on1 = (on0 = on).copy();
          on1._.cancel.push(cancel);
          on1._.interrupt.push(cancel);
          on1._.end.push(end);
        }

        schedule.on = on1;
      });
    });
  }

  var id = 0;

  function Transition(groups, parents, name, id) {
    this._groups = groups;
    this._parents = parents;
    this._name = name;
    this._id = id;
  }

  function newId() {
    return ++id;
  }

  var selection_prototype = selection.prototype;

  Transition.prototype = {
    constructor: Transition,
    select: transition_select,
    selectAll: transition_selectAll,
    filter: transition_filter,
    merge: transition_merge,
    selection: transition_selection,
    transition: transition_transition,
    call: selection_prototype.call,
    nodes: selection_prototype.nodes,
    node: selection_prototype.node,
    size: selection_prototype.size,
    empty: selection_prototype.empty,
    each: selection_prototype.each,
    on: transition_on,
    attr: transition_attr,
    attrTween: transition_attrTween,
    style: transition_style,
    styleTween: transition_styleTween,
    text: transition_text,
    textTween: transition_textTween,
    remove: transition_remove,
    tween: transition_tween,
    delay: transition_delay,
    duration: transition_duration,
    ease: transition_ease,
    end: transition_end
  };

  function cubicInOut(t) {
    return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
  }

  var defaultTiming = {
    time: null, // Set on use.
    delay: 0,
    duration: 250,
    ease: cubicInOut
  };

  function inherit(node, id) {
    var timing;
    while (!(timing = node.__transition) || !(timing = timing[id])) {
      if (!(node = node.parentNode)) {
        return defaultTiming.time = now(), defaultTiming;
      }
    }
    return timing;
  }

  function selection_transition(name) {
    var id,
        timing;

    if (name instanceof Transition) {
      id = name._id, name = name._name;
    } else {
      id = newId(), (timing = defaultTiming).time = now(), name = name == null ? null : name + "";
    }

    for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
        if (node = group[i]) {
          schedule(node, name, id, i, group, timing || inherit(node, id));
        }
      }
    }

    return new Transition(groups, this._parents, name, id);
  }

  selection.prototype.interrupt = selection_interrupt;
  selection.prototype.transition = selection_transition;

  var _templateObject$1, _templateObject2$1, _templateObject3$1, _templateObject4$1, _templateObject6$1, _templateObject7$1;
  // Global state
  // ============

  var coi_available = [];
  var available = ["Alabama", "Florida", "Idaho", "Indiana", "Kansas", "Kentucky", "Louisiana", "Maine", "Missouri", "Montana", "Nebraska", "New Hampshire", "New Jersey", "North Dakota", "Puerto Rico", "South Carolina", "South Dakota", "Tennessee", "West Virginia", "Wyoming", "Alaska", "Arizona", "Arkansas", "Connecticut", "Delaware", "Florida", "Georgia", "Pennsylvania", "Vermont", "Wisconsin", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Iowa", "Mississippi", "Illinois", "Texas", "Nevada", "New Mexico", "New York", "North Carolina", "California", "Utah", "Virginia", "Rhode Island", "Oregon", "Colorado", "Ohio", "Oklahoma", "Hawaii", "Washington", "Alabama", "Idaho", "Indiana", "Kansas", "Kentucky", "Louisiana", "Missouri", "Montana", "Nebraska", "New Hampshire", "New Jersey", "North Dakota", "Puerto Rico", "South Carolina", "South Dakota", "Tennessee", "Washington, DC", "West Virginia", "Wyoming"];
  var uspost = {
    "Alabama": "al",
    "Alaska": "ak",
    "Arizona": "az",
    "Arkansas": "ar",
    "California": "ca",
    "Colorado": "co",
    "Connecticut": "ct",
    "Delaware": "de",
    "Florida": "fl",
    "Georgia": "ga",
    "Hawaii": "hi",
    "Idaho": "id",
    "Illinois": "il",
    "Indiana": "in",
    "Iowa": "ia",
    "Kansas": "ks",
    "Kentucky": "ky",
    "Louisiana": "la",
    "Maine": "me",
    "Maryland": "md",
    "Massachusetts": "ma",
    "Michigan": "mi",
    "Minnesota": "mn",
    "Mississippi": "ms",
    "Missouri": "mo",
    "Montana": "mt",
    "Nebraska": "ne",
    "Nevada": "nv",
    "New Hampshire": "nh",
    "New Jersey": "nj",
    "New Mexico": "nm",
    "New York": "ny",
    "North Carolina": "nc",
    "North Dakota": "nd",
    "Ohio": "oh",
    "Oklahoma": "ok",
    "Oregon": "or",
    "Pennsylvania": "pa",
    "Puerto Rico": "pr",
    "Rhode Island": "ri",
    "South Carolina": "sc",
    "South Dakota": "sd",
    "Tennessee": "tn",
    "Texas": "tx",
    "Utah": "ut",
    "Vermont": "vt",
    "Virginia": "va",
    "Washington": "wa",
    "Washington, DC": "dc",
    "West Virginia": "wv",
    "Wisconsin": "wi",
    "Wyoming": "wy"
  };
  var localFeatures = [// {type:"Feature", geometry: {type:"Point", coordinates:[-77.0369,38.9072]},
    //                  properties: {name: "DC", type: "local", STUSPS: "DC"}},
    // {type:"Feature", geometry: {type:"Point", coordinates:[-92.2896,34.7465]},
    //                  properties: {name: "Little Rock", type: "local", STUSPS: "AR"}},
    // {type:"Feature", geometry: {type:"Point", coordinates:[-122.2869,38.2975]},
    //                  properties: {name: "Napa", type: "local", STUSPS: "CA"}},
    // {type:"Feature", geometry: {type:"Point", coordinates:[-121.9552,37.3541]},
    //                  properties: {name: "Santa Clara", type: "local", STUSPS: "CA"}},
    // {type:"Feature", geometry: {type:"Point", coordinates:[-87.623177,41.881832]},
    //                  properties: {name: "Chicago", type: "local", STUSPS: "IL"}},
    // {type:"Feature", geometry: {type:"Point", coordinates:[-71.3121125,42.6473304]},
    //                  properties: {name: "Lowell", type: "local", STUSPS: "MA"}},
    // {type:"Feature", geometry: {type:"Point", coordinates:[-115.0940,36.0796]},
    //                  properties: {name: "Clark County", type: "local", STUSPS: "NV"}},
    // {type:"Feature", geometry: {type:"Point", coordinates:[-73.2104,40.7298]},
    //                  properties: {name: "Islip", type: "local", STUSPS: "NY"}},
    // {type:"Feature", geometry: {type:"Point", coordinates:[-122.6750, 45.5051]},
    //                  properties: {name: "Portland", type: "local", STUSPS: "OR"}},
    // {type:"Feature", geometry: {type:"Point", coordinates:[-75.1652,39.9526]},
    //                  properties: {name: "Philadelphia", type: "local", STUSPS: "PA"}},
    // {type:"Feature", geometry: {type:"Point", coordinates:[-71.4128,41.8240]},
    //                  properties: {name: "Providence", type: "local", STUSPS: "RI"}},
    // {type:"Feature", geometry: {type:"Point", coordinates:[-97.7431,30.2672]},
    //                  properties: {name: "Austin", type: "local", STUSPS: "TX"}},
    // {type:"Feature", geometry: {type:"Point", coordinates:[-120.7558, 46.5436]},
    //                  properties: {name: "Yakima County", type: "local", STUSPS: "WA"}},
    // {type:"Feature", geometry: {type:"Point", coordinates:[-121.9836, 47.5480]},
    //                  properties: {name: "King County", type: "local", STUSPS: "WA"}},
  ];
  var dcpoint = {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-77.0369, 38.9072]
    },
    properties: {
      name: "Washington, DC",
      type: "state",
      STUSPS: "DC"
    }
  }; // Sentinel for when the mouse is not over a state

  var noHover = {};
  var stateSelected = false;
  var scale = 1280;
  var translate = [640, 300];
  var path = geoPath(geoAlbersUsaTerritories$1.geoAlbersUsaTerritories().scale(scale).translate(translate)).pointRadius(2);
  var altpath = {
    "DC": geoPath(geoAlbersUsaTerritories$1.geoAlbersUsaTerritories().scale(scale * 6).translate([-950, 530])),
    "PR": geoPath(geoAlbersUsaTerritories$1.geoAlbersUsaTerritories().scale(scale * 1.5).translate([430, 120]))
  };

  function resetMap() {
    stateSelected = false;
    selectAll("path").attr("stroke-width", 2);
    selectAll(".local").style("display", "none");
    select("g").transition().duration(500).attr("transform", "");
    selectAll(".state").classed("state--zoomed", false).classed("state--selected", false);
    select("#place-search").classed("hidden", false);
    select("#places-list").classed("place-map__state-modules--hidden", true);
    render("", document.getElementById("places-list"));
  }

  function setSearchText(feature) {
    if (stateSelected === true) {
      return;
    }

    var searchBox = document.getElementById("place-search");

    if (feature === noHover) {
      searchBox.classList.remove("place-map__search--unavailable");
      searchBox.classList.remove("place-map__search--available");
      searchBox.value = "";
      return;
    }

    searchBox.value = feature.properties.NAME;

    if (feature.properties.isAvailable) {
      searchBox.classList.remove("place-map__search--unavailable");
      searchBox.classList.add("place-map__search--available");
    } else {
      searchBox.classList.remove("place-map__search--available");
      searchBox.classList.add("place-map__search--unavailable");
    }
  } // ===========
  // Transitions
  // ===========


  function transformAndTranslate(feature) {
    var bounds = (altpath[feature.properties.STUSPS] || path).bounds(feature),
        dx = bounds[1][0] - bounds[0][0],
        dy = bounds[1][1] - bounds[0][1],
        x = (bounds[0][0] + bounds[1][0]) / 2,
        y = (bounds[0][1] + bounds[1][1]) / 2,
        scale = 0.75 / Math.max(dx / 1280, dy / 600),
        translate = [1280 * (1 / 4) - scale * x, 600 / 2 - scale * y];
    return "translate(".concat(translate, ") scale(").concat(scale, ")");
  }
  // Components
  // ==========


  function featureClasses(feature, featureId, selectedId) {
    var classes = {
      state: true,
      "state--available": feature.properties.isAvailable,
      "state--zoomed": selectedId,
      "state--selected": selectedId === featureId,
      "local": feature.properties.type === "local"
    };
    return Object.keys(classes).filter(function (key) {
      return classes[key];
    }).join(" ");
  }

  function Features(features, onHover, selectedId, callback) {
    return svg(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteral(["<svg viewBox=\"0 0 1280 600\" style=\"width:100%; height:auto;\">\n    <g id=\"states-group\" transform=\"", "\" @mouseleave=", ">\n    ", "\n    </g>\n  </svg>"])), selectedId ? transformAndTranslate(features.features.find(function (feature) {
      return feature.properties.STUSPS.toLowerCase() === selectedId && feature.type !== "local";
    })) : "", function () {
      return onHover(noHover);
    }, features.features.concat(localFeatures).map(function (feature) {
      // console.log(feature);
      var featureId = feature.properties.type === "local" ? feature.properties.name + "_local" : feature.properties.STUSPS.toLowerCase();
      return svg(_templateObject2$1 || (_templateObject2$1 = _taggedTemplateLiteral(["\n            ", "\n            <path id=\"", "\" class=\"", "\" stroke=\"#fff\" stroke-width=\"2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"\n            style=\"", " ", "\"\n            d=\"", "\" @mouseover=", "\n            @click=\"", "\"\n            onclick=", "></path>"])), feature.properties.STUSPS === "DC" ? svg(_templateObject3$1 || (_templateObject3$1 = _taggedTemplateLiteral(["<path id=\"", "\"\n                                                        class=\"dc-annotation\"\n                                                        d=\"", "\"\n                                                        @mouseover=", "\n                                                        @click=\"", "\"\n                                                        onclick=", "></path>"])), dcpoint.properties.STUSPS.toLowerCase(), path(dcpoint).split(",")[0] + "," + path(dcpoint).split(",")[1].slice(0, -2) + "," + altpath["DC"](dcpoint).split(",")[0].substr(1) + "," + altpath["DC"](dcpoint).split(",")[1].slice(0, -2), function () {
        return onHover(dcpoint);
      }, callback ? function () {
        return callback(dcpoint);
      } : "", callback ? "" : selectLandingPage(dcpoint)) : svg(_templateObject4$1 || (_templateObject4$1 = _taggedTemplateLiteral([""]))), featureId, featureClasses(feature, featureId, selectedId), feature.properties.isAvailable ? "" : "cursor:default", feature.geometry.type === "Point" ? "display:none" : "", (altpath[feature.properties.STUSPS] || path)(feature), function () {
        return onHover(feature);
      }, callback ? function () {
        return callback(feature);
      } : "", callback ? "" : selectLandingPage(feature));
    }));
  }

  function selectLandingPage(feature, target) {
    if (feature.properties.isAvailable) {
      var page = feature.properties.NAME.replace(/,/g, "").replace(/\s+/g, '-').toLowerCase();

      if (feature.properties.type === "local") {
        page = feature.properties.name.replace(/,/g, "").replace(/\s+/g, '-').toLowerCase();
      }

      return "window.location.href='/" + page + "'";
    } else {
      return "";
    }
  }

  window.onpopstate = function () {
    currentHistoryState = "/".concat(window.location.pathname.split("/")[1]);
    history.replaceState({}, "Districtr", currentHistoryState);
    resetMap();
  }; // function modulesAvailable(feature, onClose, placeId) {
  var currentHistoryState = "/".concat(window.location.pathname.split("/")[1]);
  function PlaceMap(features, selectedId, callback) {
    document.addEventListener("keyup", function (e) {
      var selectedState = window.location.pathname.split("/").slice(-1)[0];

      if (selectedState.length === 2 && e.keyCode === 27) {
        history.back();
      }
    });
    var selectedFeature = selectedId ? features.features.find(function (feature) {
      return feature.properties.STUSPS.toLowerCase() === selectedId;
    }) : null;

    if (!selectedFeature) {
      selectedId = null;
    }

    return html(_templateObject6$1 || (_templateObject6$1 = _taggedTemplateLiteral(["\n        <div class=\"place-map__form\">\n            <select\n                id=\"place-search\"\n                class=\"place-map__search", "\"\n                name=\"place\"\n                @change=", "\n            >\n              ", "\n            </select>\n        </div>\n        <div\n            class=\"place-map__state-modules", "\"\n            id=\"places-list\"\n        >\n            ", "\n        </div>\n        <figure class=\"place-map\">\n            ", "\n        </figure>\n    "])), selectedId ? " hidden" : "", function (e) {
      var stateName = e.target.value;
      var postalCode = uspost[stateName];
      document.getElementById(postalCode).dispatchEvent(new MouseEvent("click"));
    }, Object.keys(uspost).map(function (st) {
      return html(_templateObject7$1 || (_templateObject7$1 = _taggedTemplateLiteral(["<option value=\"", "\" ?disabled=", ">\n                      ", "\n                  </option>"])), st, !(available.includes(st) || window.location.href.includes("community") && coi_available.includes(st)), st);
    }), selectedId ? "" : " place-map__state-modules--hidden", selectedId ? modulesAvailable(selectedFeature, function () {
      currentHistoryState = "/".concat(window.location.pathname.split("/")[1]);
      history.replaceState({}, "Districtr", currentHistoryState);
      resetMap();
    }, location.pathname.split("/")[3]) : "", Features(features, setSearchText, selectedId, callback));
  }
  function PlaceMapWithData() {
    var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var state_list = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    // empty string or state postal code
    var selectedId = (location.pathname.split("/")[2] || "").toLowerCase();
    state_list = state_list || available;
    return fetchFeatures(state_list).then(function (features) {
      return PlaceMap(features, selectedId && !["new", "community"].includes(selectedId) ? selectedId : null, callback);
    });
  } // =============
  // Data fetching
  // =============

  function fetchFeatures() {
    var availablePlaces = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : available;
    return fetch("/assets/simple_states.json?v=2").then(function (r) {
      return r.json();
    }).then(function (states) {
      states.features.forEach(function (feature) {
        feature.properties.isAvailable = availablePlaces.includes(feature.properties.NAME) || window.location.href.includes("community") && coi_available.includes(feature.properties.NAME);
      });
      return states;
    });
  }

  var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19;

  var skip = 0,
      draftskip = -8,
      prevPlans = [],
      prevDrafts = [];
  var stateForEvent = {
    test: 'Pennsylvania',
    fyi: 'North Carolina',
    'unca-forsyth': 'North Carolina',
    buncombe: 'North Carolina',
    'common cause md ss': 'Maryland',
    'commoncause md ss': 'Maryland',
    'cc-md-ss': 'Maryland',
    'cc md ss': 'Maryland',
    'cc-nm-abq': 'New Mexico',
    centralsan: 'California',
    'mggg-nm': 'New Mexico',
    'pmc-demo': 'Wisconsin',
    pmc: 'Wisconsin',
    'pmc-districts': 'Wisconsin',
    powercoalition: 'Louisiana',
    'open-maps': 'Ohio',
    'fair-districts-oh': 'Ohio',
    'colorado-cc': 'Colorado',
    ttt: 'Colorado',
    nsfm: 'Wisconsin',
    'towsonu-baltimore': 'Maryland',
    fairmapstexas: 'Texas',
    'missouri-mapping': 'Missouri',
    'ourmapsmn': 'Minnesota',
    'micrc': 'Michigan',
    mesaaz: 'Arizona',
    slo_county: 'California',
    ourmapsne: 'Nebraska',
    prjusd: 'California',
    hia: 'Texas',
    onelovemi: 'Michigan',
    saccounty: 'California',
    fresno: 'California',
    fresnocity: 'California',
    nevadaco: 'California',
    sanmateoco: 'California',
    sanbenito: 'California',
    saccountymap: 'California',
    sonomaco: 'California',
    pasadena2021: 'California',
    sunnyvale2021: 'California',
    laverne: 'California',
    pomonaca: 'California',
    richmondca: 'California',
    elcajon: 'California',
    carlsbad2021: 'California',
    encinitas2021: 'California',
    bp2021: 'California',
    hmb2021: 'California',
    stockton2021: 'California',
    lodi2021: 'California',
    glendale2021: 'Arizona',
    goleta: 'California',
    sbcounty: 'California',
    'ks-fairmaps': 'Kansas',
    napa_county: 'California',
    san_jose: 'California',
    siskiyou: 'California',
    redwood_city: 'California',
    cityofdallas: 'Texas',
    city_of_napa: 'California',
    napa_boe: 'California',
    livermore: 'California',
    napa_college: 'California',
    tuolumne_county: 'California',
    mapsofla: 'California',
    kern_county: 'California',
    san_joaquin: 'California',
    san_mateo_city: 'California',
    santa_clara_county: 'California',
    butte_county: 'California',
    humboldt_county: 'California',
    santa_clara_water: 'California',
    oakland: 'California',
    martinez: 'California',
    carpinteria: 'California',
    ventura_county: 'California',
    yolo_county: 'California',
    solano_county: 'California',
    imperial_county: 'California',
    sutter_county: 'California',
    ojai: 'California',
    foothilldeanza: 'California',
    'galeo': 'Georgia',
    ourmaps: 'Nebraska',
    marinco: 'California',
    commoncausepa: 'Pennsylvania',
    kingsco: 'California',
    mercedco: 'California',
    marinaca: 'California',
    arroyog: 'California',
    chulavista: 'California',
    camarillo: 'California',
    bellflower: 'California',
    lakee: 'California',
    chino2021: 'California',
    fremont2021: 'California',
    campbellcity: 'California',
    buellton: 'California',
    ocsd: 'California',
    groverbeach: 'California',
    vallejo: 'California',
    long_beach: 'California',
    'ft-myers': 'Florida',
    'mp-maps': 'California',
    keystonecounts: 'Pennsylvania',
    pavoice: 'Pennsylvania',
    sandiego: 'California',
    yumasup: 'Arizona',
    yumaawc: 'Arizona',
    santa_ana: 'California',
    'glendora2021': 'California',
    "sandimas2021": "California",
    "anaheim2021": "California",
    "arcadia2021": "California",
    "lamirada2021": "California",
    "lakewood2021": "California",
    "placentia2021": "California",
    "sanbruno2021": "California",
    poway2021: 'California',
    torrance2021: 'California',
    "29palms": "California",
    "navajoco": "Arizona",
    bpld2021: 'California',
    yubacity: 'California',
    "marinccd": "California",
    "oxnarduhsd": "California",
    "rohnert_park": "California",
    "brentwood": "California",
    "watsonville": "California",
    sbusd_5: 'California',
    sbusd_7: 'California',
    modesto: 'California',
    pvsd: "California",
    santarosa: 'California',
    "millbrae": "California",
    "belmont": "California",
    "draweg": "California",
    "open_space_authority": "California",
    "pimaaz": "Arizona",
    "west_sacramento": "California",
    "diamond_bar": "California",
    "drawabq": "New Mexico",
    "worcestersd": "Massachusetts",
    "nyc2022": "New York",
    riverside: "California"
  };
  var validEventCodes = {
    test: 'pennsylvania',
    fyi: 'forsyth_nc',
    'unca-forsyth': 'forsyth_nc',
    buncombe: 'buncombe',
    'common cause md ss': 'maryland',
    'commoncause md ss': 'maryland',
    'cc-md-ss': 'maryland',
    'cc md ss': 'maryland',
    'cc-nm-abq': 'new_mexico',
    centralsan: 'ccsanitation2',
    'mggg-nm': ['new_mexico', 'new_mexico_bg', 'santafe'],
    'pmc-demo': ['wisconsin2020', 'wisconsin'],
    pmc: ['wisconsin2020', 'wisconsin'],
    'pmc-districts': ['wisconsin2020', 'wisconsin'],
    powercoalition: 'batonrouge',
    'open-maps': ['ohio', 'akroncanton', 'cincinnati', 'clevelandeuclid', 'columbus', 'dayton', 'limaoh', 'mansfield', 'portsmouthoh', 'toledo', 'youngstown', 'ohcentral', 'ohakron', 'ohcin', 'ohcle', 'ohse', 'ohtoledo'],
    'fair-districts-oh': ['ohio', 'akroncanton', 'cincinnati', 'clevelandeuclid', 'columbus', 'dayton', 'limaoh', 'mansfield', 'portsmouthoh', 'toledo', 'youngstown', 'ohcentral', 'ohakron', 'ohcin', 'ohcle', 'ohse', 'ohtoledo'],
    'colorado-cc': 'colorado',
    ttt: [],
    nsfm: 'wisconsin2020',
    'towsonu-baltimore': 'baltimore',
    fairmapstexas: 'texas',
    'missouri-mapping': 'missouri',
    'ourmapsmn': ['minnesota', 'olmsted', 'washington_mn', 'stlouis_mn', 'rochestermn'],
    'micrc': 'michigan',
    mesaaz: 'mesaaz',
    slo_county: 'sanluiso',
    ourmapsne: 'nebraska',
    prjusd: 'pasorobles',
    'hia': ['texas', 'harristx', 'houston'],
    onelovemi: 'michigan',
    saccounty: 'sacramento',
    saccountymap: 'sacramento',
    fresno: 'ca_fresno',
    fresnocity: 'ca_fresno_ci',
    nevadaco: 'ca_nevada',
    sanmateoco: 'ca_sm_county',
    sanbenito: 'ca_sanbenito',
    pasadena2021: 'ca_pasadena',
    sunnyvale2021: 'sunnyvale',
    laverne: 'laverne',
    pomonaca: 'pomona',
    richmondca: 'ca_richmond',
    elcajon: 'elcajon',
    carlsbad2021: 'ca_carlsbad',
    encinitas2021: 'encinitas',
    bp2021: 'buenapark',
    hmb2021: 'halfmoon',
    stockton2021: 'ca_stockton',
    lodi2021: 'lodi',
    glendale2021: 'glendaleaz',
    sonomaco: 'ca_sonoma',
    'ks-fairmaps': 'kansas',
    napa_county: 'napacounty2021',
    san_jose: 'sanjoseca',
    siskiyou: 'ca_siskiyou',
    redwood_city: 'redwood',
    cityofdallas: 'dallastx',
    city_of_napa: 'napa2021',
    long_beach: 'longbeach',
    napa_boe: 'napa_boe',
    livermore: 'livermore',
    napa_college: 'napa_college',
    tuolumne_county: 'ca_tuolumne',
    mapsofla: 'rp_lax',
    kern_county: 'ca_kern',
    san_joaquin: 'ca_sanjoaquin',
    san_mateo_city: 'ca_sanmateo',
    oakland: 'ca_oakland',
    martinez: 'ca_martinez',
    carpinteria: 'carpinteria',
    santa_clara_county: 'ca_sc_county',
    butte_county: 'ca_butte',
    humboldt_county: 'ca_humboldt',
    santa_clara_water: 'santa_clara_h2o',
    ventura_county: 'ca_ventura',
    yolo_county: 'ca_yolo',
    solano_county: 'ca_solano',
    imperial_county: 'ca_imperial',
    sutter_county: 'ca_sutter',
    ojai: 'ojai',
    foothilldeanza: 'ca_foothill',
    'galeo': 'hall_ga',
    goleta: 'ca_goleta',
    sbcounty: 'ca_santabarbara',
    ourmaps: 'nebraska',
    marinco: 'ca_marin',
    commoncausepa: 'pennsylvania',
    kingsco: 'ca_kings',
    mercedco: 'ca_merced',
    marinaca: 'ca_marina',
    arroyog: 'ca_arroyo',
    chulavista: 'ca_cvista',
    bellflower: 'ca_bellflower',
    camarillo: 'ca_camarillo',
    lakee: 'lake_el',
    chino2021: 'ca_chino',
    fremont2021: 'ca_fremont',
    campbellcity: 'ca_campbell',
    buellton: 'ca_buellton',
    ocsd: 'ca_oceano',
    groverbeach: 'ca_grover',
    vallejo: 'ca_vallejo',
    'ft-myers': 'ftmyers',
    'mp-maps': 'menlo_park',
    keystonecounts: 'pennsylvania',
    pavoice: 'pennsylvania',
    sandiego: 'ca_SanDiego',
    yumasup: 'yuma',
    yumaawc: 'yuma_awc',
    santa_ana: 'ca_santa_ana',
    'glendora2021': 'ca_glendora',
    "sandimas2021": "san_dimas",
    "anaheim2021": "anaheim",
    "arcadia2021": "arcadia",
    "lamirada2021": "la_mirada",
    "lakewood2021": "lakewood",
    "placentia2021": "placentia",
    "sanbruno2021": "san_bruno",
    poway2021: 'ca_poway',
    torrance2021: 'ca_torrance',
    "29palms": "29palms",
    "navajoco": "navajoco",
    bpld2021: 'buena_park',
    yubacity: 'yuba_city',
    "marinccd": "marinco",
    "oxnarduhsd": "oxnarduhsd",
    "rohnert_park": "ca_rohnert",
    "brentwood": "ca_brentwood",
    "watsonville": "ca_watsonville",
    sbusd_5: 'sbusd_5',
    sbusd_7: 'sbusd_7',
    modesto: 'modesto',
    pvsd: "pvsd",
    santarosa: 'santarosa',
    "millbrae": "ca_millbrae",
    "belmont": "ca_belmont",
    "draweg": "ca_elkgrove",
    "open_space_authority": "ca_scvosa",
    "pimaaz": "az_pima",
    "west_sacramento": "ca_west_sac",
    "diamond_bar": "ca_diamond_bar",
    "drawabq": "nm_abq",
    "worcestersd": "ma_worcester_fix",
    "nyc2022": "nyc_popdemo",
    riverside: "ca_riverside"
  };
  var blockPlans = {
    powercoalition: [9439, 9446]
  };
  var unitTypes = {
    "pmc-demo": {
      no: '2011 Wards'
    },
    pmc: {
      no: '2011 Wards'
    },
    'pmc-districts': {
      no: ['2011 Wards', 'Block Groups']
    },
    powercoalition: {
      no: 'Precincts'
    },
    "open-maps": {
      no: 'Precincts'
    },
    "fair-districts-oh": {
      no: 'Precincts'
    },
    grns: {
      no: '2011 Wards'
    },
    'missouri-mapping': {
      no: 'Precincts'
    },
    'hia': {
      no: 'Precincts'
    },
    mesaaz: {
      no: 'Blocks'
    },
    city_of_napa: {
      no: 'Blocks'
    },
    napa_county: {
      no: 'Blocks'
    },
    san_mateo_city: {
      no: 'Blocks'
    },
    napa_boe: {
      no: 'Blocks'
    },
    napa_college: {
      no: 'Blocks'
    },
    santa_clara_county: {
      no: 'Blocks'
    },
    san_jose: {
      no: 'Blocks'
    },
    pasadena2021: {
      no: 'Blocks'
    },
    centralsan: {
      no: 'Blocks'
    },
    san_joaquin: {
      no: 'Blocks'
    },
    oakland: {
      no: 'Blocks'
    },
    slo_county: {
      no: 'Blocks'
    },
    martinez: {
      no: 'Blocks'
    },
    yolo_county: {
      no: 'Blocks'
    },
    siskiyou: {
      no: 'Blocks'
    },
    solano_county: {
      no: 'Blocks'
    },
    kern_county: {
      no: 'Blocks'
    },
    humboldt_county: {
      no: 'Blocks'
    },
    ventura_county: {
      no: 'Blocks'
    },
    redwood_city: {
      no: 'Blocks'
    },
    'mp-maps': {
      no: 'Blocks'
    },
    yumasup: {
      no: 'Blocks'
    },
    keystonecounts: {
      no: ['VTDs', 'Precincts', 'Block Groups']
    },
    pavoice: {
      no: ['VTDs', 'Precincts', 'Block Groups']
    },
    saccounty: {
      no: 'Blocks'
    },
    goleta: {
      no: 'Blocks'
    },
    san_dimas: {
      no: "Blocks"
    },
    anaheim: {
      no: "Blocks"
    },
    arcadia: {
      no: "Blocks"
    },
    la_mirada: {
      no: "Blocks"
    },
    placentia: {
      no: "Blocks"
    },
    lakewood: {
      no: "Blocks"
    },
    san_bruno: {
      no: "Blocks"
    },
    fresno: {
      no: "Blocks"
    },
    kingsco: {
      no: "Blocks"
    },
    marinco: {
      no: "Blocks"
    },
    mercedco: {
      no: "Blocks"
    },
    sanbenito: {
      no: "Blocks"
    },
    sbcounty: {
      no: "Blocks"
    },
    sanmateoco: {
      no: "Blocks"
    },
    laverne: {
      no: "Blocks"
    },
    tuolumne_county: {
      no: "Blocks"
    },
    fresnocity: {
      no: 'Blocks'
    },
    chulavista: {
      no: 'Blocks'
    },
    stockton2021: {
      no: 'Blocks'
    },
    sonomaco: {
      no: 'Blocks'
    },
    poway2021: {
      no: 'Blocks'
    },
    torrance2021: {
      no: 'Blocks'
    },
    "29palms": {
      no: 'Blocks'
    },
    "navajoco": {
      no: 'Blocks'
    },
    bpld2021: {
      no: 'Blocks'
    },
    yubacity: {
      no: 'Blocks'
    },
    "carpinteria": {
      no: 'Blocks'
    },
    "marinccd": {
      no: 'Blocks'
    },
    "oxnarduhsd": {
      no: 'Blocks'
    },
    "mapsofla": {
      no: 'Blocks'
    },
    "bp2021": {
      no: 'Blocks'
    },
    "arroyog": {
      no: 'Blocks'
    },
    "camarillo": {
      no: 'Blocks'
    },
    "chino2021": {
      no: 'Blocks'
    },
    "groverbeach": {
      no: 'Blocks'
    },
    "nevadaco": {
      no: 'Blocks'
    },
    "elcajon": {
      no: 'Blocks'
    },
    "pomonaca": {
      no: 'Blocks'
    },
    "fremont2021": {
      no: 'Blocks'
    },
    "encinitas2021": {
      no: 'Blocks'
    },
    "santa_ana": {
      no: 'Blocks'
    },
    "carlsbad2021": {
      no: 'Blocks'
    },
    "buellton": {
      no: 'Blocks'
    },
    "ocsd": {
      no: 'Blocks'
    },
    "worcestersd": {
      no: "Blocks"
    },
    "nyc2022": {
      no: "Blocks"
    }
  };
  var coi_events = ["fyi", 'common cause md ss', 'commoncause md ss', 'cc-md-ss', 'cc md ss', 'cc-nm-abq', 'mggg-nm', 'pmc-demo', 'pmc', 'powercoalition', 'open-maps', 'fair-districts-oh', 'colorado-cc', 'nsfm', 'fairmapstexas', 'missouri-mapping', 'ttt', 'ourmapsmn', 'micrc', 'ourmapsne', 'onelovemi', 'ks-fairmaps', 'commoncausepa', 'santa_clara_water'];
  var hybrid_events = ['pasadena2021', 'santa_ana', 'slo_county', 'martinez', 'siskiyou', 'yolo_county', 'solano_county', 'humboldt_county', 'ventura_county', 'san_mateo_city', 'kern_county', 'redwood_city', 'cityofdallas', 'mesaaz', 'sandiego', 'yumasup', 'yumaawc', 'hia', 'oakland', 'long_beach', 'santa_clara_county', 'san_jose', 'san_joaquin', 'saccounty', 'napa_boe', 'livermore', 'napa_college', 'city_of_napa', 'napa_county', 'imperial_county', 'sutter_county', 'ojai', 'foothilldeanza', 'saccountymap', 'fresno', 'fresnocity', 'nevadaco', 'sanmateoco', 'sanbenito', 'sonomaco', 'sunnyvale2021', 'laverne', 'pomonaca', 'richmondca', 'elcajon', 'carlsbad2021', 'encinitas2021', 'bp2021', 'hmb2021', 'stockton2021', 'lodi2021', 'glendale2021', 'kingsco', 'mercedco', 'goleta', 'sbcounty', 'marinco', 'marinaca', 'arroyog', 'camarillo', 'chulavista', 'bellflower', 'ca_sm_county', 'ourmaps', 'lakee', 'chino2021', 'fremont2021', 'campbellcity', 'buellton', 'ocsd', 'groverbeach', 'vallejo', 'ft-myers', 'mp-maps', 'mapsofla', 'butte_county', 'glendora2021', "sandimas2021", "anaheim2021", "arcadia2021", "lamirada2021", "placentia2021", "lakewood2021", "sanbruno2021", 'tuolumne_county', 'poway2021', 'torrance2021', "29palms", "navajoco", "bpld2021", "yubacity", "carpinteria", "marinccd", "oxnarduhsd", "rohnert_park", "brentwood", "watsonville", "carpinteria", "sbusd_5", "sbusd_7", "modesto", "pvsd", "santarosa", "millbrae", "belmont", "draweg", "open_space_authority", "west_sacramento", "diamond_bar", "drawabq", "nyc2022", "riverside"];
  var portal_events = ['open-maps', 'fyi'];
  var eventDescriptions = {
    test: 'this is a test of the event descriptions',
    'unca-forsyth': 'Welcome to your class page UNC Asheville students! We\'re excited for you to start exploring Forsyth County with Districtr. <a href="/guide">Click here</a> for a tutorial.',
    buncombe: 'Welcome to the event page for Buncombe County!',
    'common cause md ss': 'Welcome to the event page for the Common Cause Maryland project!',
    'commoncause md ss': 'Welcome to the event page for the Common Cause Maryland project!',
    'cc-md-ss': 'Welcome to the event page for the Common Cause Maryland project!',
    'cc md ss': 'Welcome to the event page for the Common Cause Maryland project!',
    'cc-nm-abq': 'Welcome to the event page for the Common Cause New Mexico project!',
    centralsan: 'Welcome to the event page for the Central Contra Costa County Sanitary District. This page uses Districtr, a community web tool provided by the MGGG Redistricting Lab. <a href="/guide">Click here</a> for a Districtr tutorial.',
    'mggg-nm': 'Welcome to the event page for the MGGG - New Mexico demo!',
    'pmc-demo': 'Welcome to the COI collection page for Wisconsin (DEMO)',
    pmc: "<p>Welcome to the Community of Interest public mapping page for the People’s Maps Commission (PMC) of Wisconsin. The Commission is a group of people that will hear directly from folks across the state and draw fair, impartial maps for the Legislature to take up in 2021. Click <a href='https://govstatus.egov.com/peoplesmaps' target='_blank'>here</a> to learn more about their work.</p>\
  <p>As part of the redistricting process, the Commission will consider Communities of Interest, or COIs, groups with shared interests that should be given special consideration. To let the Commission know where communities are and what common concerns bind them together, share your map on this mapping page or submit your map through the Commission’s public submission portal <a href='https://govstatus.egov.com/peoplesmaps/contact-commission' target='_blank'>here</a>.</p>\
  <p><b>To display your map on this page, be sure the tag \"PMC\" is filled out after you've clicked \"Save\" to share the map.</b></p>",
    'pmc-districts': "<p>Welcome to the PMC-Districts event page for the People’s Maps Commission (PMC) of Wisconsin. The Commission is a group of people that will hear directly from folks across the state and draw fair, impartial maps for the Legislature to take up in 2021. Click <a href='https://govstatus.egov.com/peoplesmaps' target='_blank'>here</a> to learn more about their work.</p>\
  <p><b>The purpose of this page is to show some sample maps that have been generated in the preliminary work of the PMC.  These are part of the Commission's process as they work towards draft maps that take the districting criteria into account.  These will later be combined with \"communities of interest\" input gathered from the <a href='https://portal.wisconsin-mapping.org' target='_blank'>PMC Public Feedback Portal</a>, as well as updated demographic data from the 2020 Census, to produce proposed maps.</b></p>",
    powercoalition: 'Welcome to the greater Baton Rouge event page for the <a href="https://powercoalition.org/">Power Coalition</a>. This page is set up to let you identify your communities of interest.<br/><br/>Show us the important places and tell us the stories that you want the mapmakers to see when they draw the lines!',
    'open-maps': "<p>Welcome to the public mapping page for OPEN Maps!</p>\
  <p>OPEN Maps (“Ohio Public Engagement in Neighborhoods” mapping project) is a joint project between the MGGG Redistricting Lab at the Tisch College of Civic Life and the Ohio State University’s Kirwan Institute for the Study of Race and Ethnicity.</p>\
  <p>Our goal is to <strong>collect over 500 community maps and narratives</strong>. Our team will synthesize these maps in a final report that we will submit to Ohio's politician redistricting commission.</p>\
  <p>Ohio residents, you can participate by drawing and describing Ohio communities in one of our modules. When you click “Save” to share your map, <strong>enter the tag “OPEN-maps”</strong> to post your map on this public submission page!</p>\
  <p>Visit our <a href='https://districtr.org/training' target='_blank'>training resources</a> page to learn more about Communities of Interest and prompts that you can answer to describe your community. Join one of our Districtr train-the-trainers to learn more about why communities matter and how to collect useful narratives.</p>",
    'fair-districts-oh': 'Welcome to the event page for Fair Districts Ohio!',
    'colorado-cc': 'Welcome to the event page for Colorado Common Cause!',
    ttt: 'Training the Trainers',
    nsfm: "<p>Welcome to the <a href='https://northshorefairmaps.com' target='_blank'>North Shore Fair Maps</a> mapping page. You can help Wisconsin’s <a href='https://govstatus.egov.com/peoplesmaps' target='_blank'>People’s Maps Commission</a> #EndGerrymandering! Please draw a map that shows us your “<a href='https://docs.google.com/document/d/15CFn85psZkJvGfgZeQwRGS6BMF1YJgEsTblZuwaBhzg/edit' target='_blank'>community of interest</a>.” Your map will tell the Commission what's on the ground and relevant. Your map will be added to thousands of other maps, computers will do their magic, and before you know it, new Wisconsin voting maps will be created. With so many people involved in map-making, there is no guaranty that YOUR map will rule the day, but it will be considered. It will count. And because of you and others like you, Wisconsin's new voting maps will make sure that everyone’s vote gets counted … and counts. Learn more about how you can help #EndGerrymandering at <a href='http://www.northshorefairmaps.com' target='_blank'>www.NorthShoreFairMaps.com</a>.</p>",
    'towsonu-baltimore': 'Welcome to the event page for Towson University',
    fairmapstexas: 'Welcome to the event page for Fair Maps Texas!',
    'missouri-mapping': "<p>You can help us map Missouri! When you click “Save” to share your map, <strong>enter the tag “missouri-mapping”</strong> to post your map on this public submission page. You can also enter it along with written comments at <a href='https://research.typeform.com/to/zH14rNfF' target='_blank'>our portal</a>.</p>",
    'ourmapsmn': "<p>Welcome to the Our Maps Minnesota Redistricting Campaign Mapping page! The Our Maps MN Campaign is committed to a community-focused, accessible, and transparent redistricting process in Minnesota. Through this campaign we aim to:</p>\
   <ul><li>Empower historically under-represented BIPOC communities and other stakeholders across the state to engage in the redistricting process to ensure they are seen and visible in our political boundaries, increasing their ability to elect officials that truly represent and listen to the community; and</li>\
   <li>Achieve fair Congressional and state legislative district maps that reflect input from communities of interest, particularly BIPOC communities</li></ul>\
   <p>As part of this we work to empower historically under-represented BIPOC communities and other stakeholders across Minnesota to participate in the redistricting process to ensure they are seen and visible in our political boundaries, increasing their ability to elect officials that truly represent and listen to the community.</p>\
   <p>A community-focused, accessible, and transparent redistricting process is critical to ensuring that our communities have equitable representation and influence in our democracy so we too can thrive. This page is both the starting point and the home for creation of community maps developed through the Our Maps Minnesota Campaign. Through this campaign we work with communities to define themselves through the connections, issues and policies that are most important to them, and then enable them to create maps showing their communities for inclusion in our political maps.</p>",
    'micrc': "Welcome to the public mapping page for the Michigan Independent Citizen's Redistricting Commission!",
    riverside: "<p>Every ten years, local governments, including the City of Riverside, use new US Census data to redraw their district or ward lines to reflect how local populations have changed. This important process, called redistricting, ensures that each City Councilmember represents about the same number of constituents. Redistricting also determines which neighborhoods and communities are grouped together into a ward for purposes of electing a Councilmember. In addition to census data, officials conducting the redistricting process consider how to maintain “communities of interest” when redrawing district boundaries. Communities of interest are best defined by the people who live in them.</p>\
   <p>Examples of communities of interest can include neighborhood associations or planning zones, areas where many residents speak the same language, or even areas where the residents use the same community facilities. People who have common interests and need a voice in government can define their own communities.</p>\
   <p><strong>We need your help to build a community map! Please use this tool to identify the boundaries of your community and share what makes it a community.</strong></p>\
   <p>Get started by clicking the orange button to draw your community or the purple button to draw your city council map. To share your map, click “Save” in the upper right corner of the mapping module. To pin your map to this page, be sure the tag “Riverside.”</p>\
   <p>When drawing wards, please consider the FAIR MAPS ACT required ranked criteria when drawing:\
   <ul><li>Each ward must be relatively equal in size (the population difference between the smallest to largest district must be below 10%)</li>\
   <li>Each ward must be contiguous (all pieces of a district must be connected; no hops, skips, or jumps)</li>\
   <li>Wards must maintain “communities of interest” (like neighborhoods)</li>\
   <li>Lines should be easily identifiable and understandable (use streets, rivers, or other identifiable geographies)</li>\
   <li>Keep districts compact in appearance and function</li>\
   </ul></p>\
   <p>If you would like to learn more about how to draw maps, please consider attending one or more of the community outreach meetings hosted by the City throughout August, September and October 2022, with options of being in-person or online.</p>",
    mesaaz: "<p>Every 10 years, Mesans get the chance to help reshape their City Council districts following the decennial U.S. Census. It’s important to know about the communities of Mesa so that the district lines can amplify the voices of residents.</p>\
      <p>Examples of communities can include homeowner associations (HOAs) or registered neighborhoods,  areas where many residents speak the same language, or even areas where the residents use the same community facilities. It’s basically any part of Mesa where people have a common interest that needs a voice in government.</p>\
      <p><strong>Mesa, we need your help to build a community map! Please use this tool to identify the boundaries of your community and share what makes it a community.</strong></p>\
      <p>Every map submitted will be carefully reviewed by the Mesa residents charged with redrawing the Mesa City Council District Map. For more information, visit <a href='https://www.mesaaz.gov/government/advisory-boards-committees/redistricting-commission' target='_blank'>Mesa’s Citizen Redistricting Commission</a>.</p>\
      <p>Get started by clicking the orange button. To share your map, click “Save” in the upper right corner of the mapping module. To pin your map to this page, be sure the tag “MesaAZ” (any capitalization) is entered.</p>",
    slo_county: "<p>Every 10 years, Californians get the chance to help reshape their Supervisor Board districts following the decennial U.S. Census. It’s important to know about communities so that the district lines can amplify the voices of residents.</p>\
       <p>Examples of communities can include homeowner associations (HOAs) or registered neighborhoods,  areas where many residents speak the same language, or even areas where the residents use the same community facilities. It’s basically any part where people have a common interest that needs a voice in government.</p>\
       <p><strong>We need your help to build a community map! Please use this tool to identify the boundaries of your community and share what makes it a community.</strong></p>\
       <p>Every map submitted will be carefully reviewed by the residents charged with redrawing the Supervisorial District Map. For more information, visit <a href='https://www.slocounty.ca.gov/redistricting' target='_blank'>this link</a>.</p>\
       <p>Get started by clicking the orange button. To share your map, click “Save” in the upper right corner of the mapping module. To pin your map to this page, be sure the tag “SLO_County” (any capitalization) is entered.</p>",
    ourmapsne: "Welcome to the event page for Nebraska!",
    prjusd: "<p>Welcome to the public mapping page for the Paso Robles Joint Unified School District (“PRJUSD”) Board of Education. PRJUSD is transitioning from at-large elections to by-area elections to be implemented for the November 2022 election.  In by-area elections, PRJUSD will consist of 7 voting areas that are roughly equal in population.  Board members will be elected from each of the seven areas only by voters who reside within the respective areas.  Board members will be required to reside within the area from which they are elected.  For example, Area A’s representative on the PRJUSD Board will need to reside within Area A and is only elected by voters who reside within  Area A.</p>\
    <p>As part of the creation of voting areas, PRJUSD is seeking public input on what these voting areas should look like.  To let the School District know what you think the maps should look like, you can create your own map utilizing this website or you can take one of the previously created maps and modify it. \
    <a href='https://districtr.org/guide' target='_blank'>Click here</a> for a tutorial.</p>\
    <p><strong>To display your map on this page, be sure the tag \"PRJUSD\" is filled out after you've clicked \"Save\" to share the map.</strong></p>",
    hia: "Welcome to the event page for Houston in Action!",
    onelovemi: "<p>Welcome to the event page for One Love Michigan! Here is a message from the organization:</p>\
                <p>We know that historically, maps have been used as a tool for racism and white supremacy, between taking land from indigenous people to redlining and racial gerrymandering, so this is a moment to reclaim maps for empowerment. We need YOU to get involved!!! Join One Love Global in drawing maps of your community to ensure that they are kept intact during the redistricting process.</p>",
    saccounty: "<p>Welcome to the Districtr Community of Interest public mapping tool for Sacramento County’s 2021 supervisorial redistricting.<p>\
      <p>As part of the redistricting process, the California FAIR MAPS Act includes \
      neighborhoods and “Communities of Interest” as important considerations. California law defines Communities of Interest as “a \
      population that shares common social or economic interests that should \
      be included within a single district for purposes of its effective and fair \
      representation.”</p>\
      <p>To let the County know about your community and what brings it together, \
share your map and your story using this tool now.</p>\
      <p><strong>To display your map on this page, be sure the tag &quot;SacCounty&quot; is filled \
out after you've clicked &quot;Save&quot; to share the map.</strong></p>\
<p>To learn more about the County’s redistricting effort, visit \
  <a href='https://www.saccounty.net' target='_blank'>www.saccounty.net</a>.</p>",
    fresno: "<p>Welcome to the Districtr Community of Interest public mapping tool for Fresno County’s 2021 supervisorial redistricting.<p>\
     <p>As part of the redistricting process, the California FAIR MAPS Act includes \
     neighborhoods and “Communities of Interest” as important considerations. California law defines Communities of Interest as “a \
     population that shares common social or economic interests that should \
     be included within a single district for purposes of its effective and fair \
     representation.”</p>\
     <p>To let the County know about your community and what brings it together, \
share your map and your story using this tool now.</p>\
     <p><strong>To display your map on this page, be sure the tag &quot;Fresno&quot; is filled \
out after you've clicked &quot;Save&quot; to share the map.</strong></p>",
    nevadaco: "<p>Welcome to the Districtr Community of Interest public mapping tool for Nevada County’s 2021 supervisorial redistricting.<p>\
   <p>As part of the redistricting process, the California FAIR MAPS Act includes \
   neighborhoods and “Communities of Interest” as important considerations. California law defines Communities of Interest as “a \
   population that shares common social or economic interests that should \
   be included within a single district for purposes of its effective and fair \
   representation.”</p>\
   <p>To let the County know about your community and what brings it together, \
share your map and your story using this tool now.</p>\
   <p><strong>To display your map on this page, be sure the tag &quot;NevadaCo&quot; is filled \
out after you've clicked &quot;Save&quot; to share the map.</strong></p>",
    sanmateoco: "<p>Welcome to the Districtr Community of Interest public mapping tool for San Mateo County’s 2021 supervisorial redistricting.<p>\
   <p>As part of the redistricting process, the California FAIR MAPS Act includes \
   neighborhoods and “Communities of Interest” as important considerations. California law defines Communities of Interest as “a \
   population that shares common social or economic interests that should \
   be included within a single district for purposes of its effective and fair \
   representation.”</p>\
   <p>To let the County know about your community and what brings it together, \
share your map and your story using this tool now.</p>\
   <p><strong>To display your map on this page, be sure the tag &quot;SanMateoCo&quot; is filled \
out after you've clicked &quot;Save&quot; to share the map.</strong></p>",
    sanbenito: "<p>Welcome to the Districtr Community of Interest public mapping tool for San Benito County’s 2021 supervisorial redistricting.<p>\
   <p>As part of the redistricting process, the California FAIR MAPS Act includes \
   neighborhoods and “Communities of Interest” as important considerations. California law defines Communities of Interest as “a \
   population that shares common social or economic interests that should \
   be included within a single district for purposes of its effective and fair \
   representation.”</p>\
   <p>To let the County know about your community and what brings it together, \
share your map and your story using this tool now.</p>\
   <p><strong>To display your map on this page, be sure the tag &quot;SanBenito&quot; is filled \
out after you've clicked &quot;Save&quot; to share the map.</strong></p>",
    sonomaco: "<p>Welcome to the Districtr Community of Interest public mapping tool for Sonoma County’s 2021 supervisorial redistricting.<p>\
     <p>As part of the redistricting process, the California FAIR MAPS Act includes \
     neighborhoods and “Communities of Interest” as important considerations. California law defines Communities of Interest as “a \
     population that shares common social or economic interests that should \
     be included within a single district for purposes of its effective and fair \
     representation.”</p>\
     <p>To let the County know about your community and what brings it together, \
share your map and your story using this tool now.</p>\
     <p><strong>To display your map on this page, be sure the tag &quot;SonomaCo&quot; is filled \
out after you've clicked &quot;Save&quot; to share the map.</strong></p>",
    pasadena2021: "<p>Welcome to the Districtr Community of Interest public mapping tool for Pasadena's 2021 city council redistricting.<p>\
   <p>As part of the redistricting process, the California FAIR MAPS Act includes \
   neighborhoods and “Communities of Interest” as important considerations. California law defines Communities of Interest as “a \
   population that shares common social or economic interests that should \
   be included within a single district for purposes of its effective and fair \
   representation.”</p>\
   <p>To let the City know about your community and what brings it together, \
share your map and your story using this tool now.</p>\
   <p><strong>To display your map on this page, be sure the tag &quot;Pasadena2021&quot; is filled \
out after you've clicked &quot;Save&quot; to share the map.</strong></p>",
    sunnyvale2021: "<p>Welcome to the Districtr Community of Interest public mapping tool for Sunnyvale's 2021 city council redistricting.<p>\
   <p>As part of the redistricting process, the California FAIR MAPS Act includes \
   neighborhoods and “Communities of Interest” as important considerations. California law defines Communities of Interest as “a \
   population that shares common social or economic interests that should \
   be included within a single district for purposes of its effective and fair \
   representation.”</p>\
   <p>To let the City know about your community and what brings it together, \
share your map and your story using this tool now.</p>\
   <p><strong>To display your map on this page, be sure the tag &quot;Sunnyvale2021&quot; is filled \
out after you've clicked &quot;Save&quot; to share the map.</strong></p>",
    laverne: "<p>Welcome to the Districtr Community of Interest public mapping tool for La Verne's 2021 city council redistricting.<p>\
   <p>As part of the redistricting process, the California FAIR MAPS Act includes \
   neighborhoods and “Communities of Interest” as important considerations. California law defines Communities of Interest as “a \
   population that shares common social or economic interests that should \
   be included within a single district for purposes of its effective and fair \
   representation.”</p>\
   <p>To let the City know about your community and what brings it together, \
share your map and your story using this tool now.</p>\
   <p><strong>To display your map on this page, be sure the tag &quot;LaVerne&quot; is filled \
out after you've clicked &quot;Save&quot; to share the map.</strong></p>",
    pomonaca: "<p>Welcome to the Districtr Community of Interest public mapping tool for Ponoma's 2021 city council redistricting.<p>\
   <p>As part of the redistricting process, the California FAIR MAPS Act includes \
   neighborhoods and “Communities of Interest” as important considerations. California law defines Communities of Interest as “a \
   population that shares common social or economic interests that should \
   be included within a single district for purposes of its effective and fair \
   representation.”</p>\
   <p>To let the City know about your community and what brings it together, \
share your map and your story using this tool now.</p>\
   <p><strong>To display your map on this page, be sure the tag &quot;PonomaCA&quot; is filled \
out after you've clicked &quot;Save&quot; to share the map.</strong></p>",
    richmondca: "<p>Welcome to the Districtr Community of Interest public mapping tool for Richmond's 2021 city council redistricting.<p>\
   <p>As part of the redistricting process, the California FAIR MAPS Act includes \
   neighborhoods and “Communities of Interest” as important considerations. California law defines Communities of Interest as “a \
   population that shares common social or economic interests that should \
   be included within a single district for purposes of its effective and fair \
   representation.”</p>\
   <p>To let the City know about your community and what brings it together, \
share your map and your story using this tool now.</p>\
   <p><strong>To display your map on this page, be sure the tag &quot;RichmondCA&quot; is filled \
out after you've clicked &quot;Save&quot; to share the map.</strong></p>",
    elcajon: "<p>Welcome to the Districtr Community of Interest public mapping tool for El Cajon's 2021 city council redistricting.<p>\
   <p>As part of the redistricting process, the California FAIR MAPS Act includes \
   neighborhoods and “Communities of Interest” as important considerations. California law defines Communities of Interest as “a \
   population that shares common social or economic interests that should \
   be included within a single district for purposes of its effective and fair \
   representation.”</p>\
   <p>To let the City know about your community and what brings it together, \
share your map and your story using this tool now.</p>\
   <p><strong>To display your map on this page, be sure the tag &quot;ElCajon&quot; is filled \
out after you've clicked &quot;Save&quot; to share the map.</strong></p>",
    carlsbad2021: "<p>Welcome to the Districtr Community of Interest public mapping tool for Carlsbad's 2021 city council redistricting.<p>\
   <p>As part of the redistricting process, the California FAIR MAPS Act includes \
   neighborhoods and “Communities of Interest” as important considerations. California law defines Communities of Interest as “a \
   population that shares common social or economic interests that should \
   be included within a single district for purposes of its effective and fair \
   representation.”</p>\
   <p>To let the City know about your community and what brings it together, \
share your map and your story using this tool now.</p>\
   <p><strong>To display your map on this page, be sure the tag &quot;Carlsbad2021&quot; is filled \
out after you've clicked &quot;Save&quot; to share the map.</strong></p>",
    encinitas2021: "<p>Welcome to the Districtr Community of Interest public mapping tool for Encinitas's 2021 city council redistricting.<p>\
   <p>As part of the redistricting process, the California FAIR MAPS Act includes \
   neighborhoods and “Communities of Interest” as important considerations. California law defines Communities of Interest as “a \
   population that shares common social or economic interests that should \
   be included within a single district for purposes of its effective and fair \
   representation.”</p>\
   <p>To let the City know about your community and what brings it together, \
share your map and your story using this tool now.</p>\
   <p><strong>To display your map on this page, be sure the tag &quot;Encinitas2021&quot; is filled \
out after you've clicked &quot;Save&quot; to share the map.</strong></p>",
    bp2021: "<p>Welcome to the Districtr Community of Interest public mapping tool for Buena Park's 2021 city council redistricting.<p>\
   <p>As part of the redistricting process, the California FAIR MAPS Act includes \
   neighborhoods and “Communities of Interest” as important considerations. California law defines Communities of Interest as “a \
   population that shares common social or economic interests that should \
   be included within a single district for purposes of its effective and fair \
   representation.”</p>\
   <p>To let the City know about your community and what brings it together, \
share your map and your story using this tool now.</p>\
   <p><strong>To display your map on this page, be sure the tag &quot;BP2021&quot; is filled \
out after you've clicked &quot;Save&quot; to share the map.</strong></p>",
    hmb2021: "<p>Welcome to the Districtr Community of Interest public mapping tool for Half Moon Bay's 2021 city council redistricting.<p>\
   <p>As part of the redistricting process, the California FAIR MAPS Act includes \
   neighborhoods and “Communities of Interest” as important considerations. California law defines Communities of Interest as “a \
   population that shares common social or economic interests that should \
   be included within a single district for purposes of its effective and fair \
   representation.”</p>\
   <p>To let the City know about your community and what brings it together, \
share your map and your story using this tool now.</p>\
   <p><strong>To display your map on this page, be sure the tag &quot;HMB2021&quot; is filled \
out after you've clicked &quot;Save&quot; to share the map.</strong></p>",
    stockton2021: "<p>Welcome to the Districtr Community of Interest public mapping tool for Stockton's 2021 city council redistricting.<p>\
   <p>As part of the redistricting process, the California FAIR MAPS Act includes \
   neighborhoods and “Communities of Interest” as important considerations. California law defines Communities of Interest as “a \
   population that shares common social or economic interests that should \
   be included within a single district for purposes of its effective and fair \
   representation.”</p>\
   <p>To let the City know about your community and what brings it together, \
share your map and your story using this tool now.</p>\
   <p><strong>To display your map on this page, be sure the tag &quot;Stockton2021&quot; is filled \
out after you've clicked &quot;Save&quot; to share the map.</strong></p>",
    lodi2021: "<p>Welcome to the Districtr Community of Interest public mapping tool for Lodi's 2021 city council redistricting.<p>\
   <p>As part of the redistricting process, the California FAIR MAPS Act includes \
   neighborhoods and “Communities of Interest” as important considerations. California law defines Communities of Interest as “a \
   population that shares common social or economic interests that should \
   be included within a single district for purposes of its effective and fair \
   representation.”</p>\
   <p>To let the City know about your community and what brings it together, \
share your map and your story using this tool now.</p>\
   <p><strong>To display your map on this page, be sure the tag &quot;Lodi2021&quot; is filled \
out after you've clicked &quot;Save&quot; to share the map.</strong></p>",
    glendale2021: "<p>Welcome to the Districtr Community of Interest public mapping tool for Glendale's 2021 city council redistricting.<p>\
   <p>To let the City know about your community and what brings it together, \
share your map and your story using this tool now.</p>\
   <p><strong>To display your map on this page, be sure the tag &quot;Glendale2021&quot; is filled \
out after you've clicked &quot;Save&quot; to share the map.</strong></p>",
    marinco: "<p>Welcome to the Districtr Community of Interest public mapping tool for Marin County's 2021 supervisorial redistricting.<p>\
   <p>As part of the redistricting process, the California FAIR MAPS Act includes \
   neighborhoods and “Communities of Interest” as important considerations. California law defines Communities of Interest as “a \
   population that shares common social or economic interests that should \
   be included within a single district for purposes of its effective and fair \
   representation.”</p>\
   <p>To let the County know about your community and what brings it together, \
share your map and your story using this tool now.</p>\
   <p><strong>To display your map on this page, be sure the tag &quot;MarinCo&quot; is filled \
out after you've clicked &quot;Save&quot; to share the map.</strong></p>",
    saccountymap: "<p>Welcome to the Districtr Community of Interest public mapping tool for Sacramento County’s 2021 supervisorial redistricting.<p>\
     <p>As part of the redistricting process, the California FAIR MAPS Act includes \
     neighborhoods and “Communities of Interest” as important considerations. California law defines Communities of Interest as “a \
     population that shares common social or economic interests that should \
     be included within a single district for purposes of its effective and fair \
     representation.</p>\
     <p>To let the County know about your community and what brings it together, \
share your map and your story using this tool now.</p>\
     <p><strong>To display your map on this page, be sure the tag &quot;SacCounty&quot; is filled \
out after you've clicked &quot;Save&quot; to share the map.</strong></p>\
<p>To learn more about the County’s redistricting effort, visit \
 <a href='https://www.saccounty.net' target='_blank'>www.saccounty.net</a>.</p>",
    'ks-fairmaps': 'Welcome to the event page for Fair Maps Kansas!',
    long_beach: '<p>Every ten years, local governments use new United States Census data to redraw their district lines to reflect how local populations have changed. This process, called redistricting, is important in ensuring that each City Councilmember represents about the same number of constituents. Redistricting also determines which neighborhoods and communities are grouped together into a district for purposes of electing a Councilmember. In addition to Census data, officials conducting the redistricting process consider how to maintain communities of interest when redrawing district boundaries.</p>\
  <p>Examples of communities of interest can include neighborhood associations or planning zones, areas where many residents speak the same language, or even areas where the residents use the same community facilities. People who have common interests that need a voice in government define their own communities.</p>\
  <p><strong>We need your help to build a community map! Please use this tool to identify the boundaries of your community and share what makes it a community.</strong></p>\
  <p>Every map submitted to the Long Beach Independent Redistricting Commission will be carefully reviewed and included as part of the public record. For more information, visit <a href="https://www.longbeach.gov/redistricting" target="_blank">this link</a>.</p>\
  <p>Get started by clicking the orange button to draw your community or the purple button to draw your city council map. To share your map, click “Save” in the upper right corner of the mapping module. To pin your map to this page, be sure the tag “Long_Beach”.</p>\
  <p>For a detailed how-to guide of Districtr, visit our <a href="/guide" target="_blank">Guide page</a>.</p>',
    santarosa: "\n    <p>\n      Every ten years, local governments use new United States Census data to\n      redraw their district lines to reflect how local populations have changed.\n      This process, called redistricting, is important in ensuring that each City\n      Council Member represents substantially the same number of constituents.\n      How those lines are drawn affects how people are represented.\n    </p>\n    <p>\n      Redistricting also determines which neighborhoods and communities are\n      grouped together into a district. Communities are those with common social\n      or economic interests that should be included within a single district for\n      effective, fair representation. They are best described by those with\n      first-hand knowledge.<strong> We want to hear about your community; you\n      know it best!</strong>\n    </p>\n    <p>\n      <strong>You can also submit your own plan for how to divide the city into\n      seven districts</strong>. Every plan submitted to the City will be carefully\n      reviewed and included as part of the public record. For more information,\n      <a href=\"https://srcity.org/2593/District-Based-Elections\" target=\"_blank\">visit this link.</a>\n    </p>\n    <p>\n      <strong>To share your map to this page, be sure to select \"Share\" and click on the\n      \"Share to Gallery\" button.</strong>\n    </p>\n    <p>\n      Click the purple tile below to begin. Once open, click the\n      paintbrush icon and a color to begin drawing a district! Switching colors\n      changes the district you are building.\xA0By clicking the \"Data Layers\" tab,\n      you can toggle on and off the map overlays for the current districts and\n      other pertinent information related to the City of Santa Rosa. When building\n      your districts, please try to keep each district's population roughly equal.\n      Good luck and thank you for your input!\n    </p>\n  ",
    santa_ana: '<p>Every ten years, local governments use new United States Census data to redraw their district lines to reflect how local populations have changed. This process, called redistricting, is important in ensuring that each City Councilmember represents about the same number of constituents. Redistricting also determines which neighborhoods and communities are grouped together into a district for purposes of electing a Councilmember. In addition to Census data, officials conducting the redistricting process consider how to maintain communities of interest when redrawing district boundaries.</p>\
  <p>Examples of communities of interest can include neighborhood associations or planning zones, areas where many residents speak the same language, or even areas where the residents use the same community facilities. People who have common interests that need a voice in government define their own communities.</p>\
  <p><strong>We need your help to build a community map! Please use this tool to identify the boundaries of your community and share what makes it a community.</strong></p>\
  <p>Get started by clicking the orange button to draw your community or the purple button to draw your city council map. To share your map, click “Save” in the upper right corner of the mapping module. To pin your map to this page, be sure the tag “Santa_Ana”.</p>\
  <p>For a detailed how-to guide of Districtr, visit our <a href="/guide" target="_blank">Guide page</a>.</p>',
    napa_county: '<p>Every 10 years, Californians get the chance to help reshape five Napa County Board of Supervisor districts based on current United States Census data.  Redistricting is based on population and communities of interest.  A community of interest shares common social and economic interests that should be included within a single supervisor district to achieve effective and fair representation for its residents.</p>\
  <p>Examples of communities can include neighborhoods, areas where many residents speak the same language, areas using the same community facilities such as schools, transportation and public services.  It’s basically any geographic area where people have a common interest that needs a voice in government.</p>\
  <p><strong>We need your help to describe communities of interest.  Please use this tool to map the boundaries of your community and share your thoughts on what makes it a community of interest. You can also draw your own district map.</strong></p>\
  <p>Every map submitted will be carefully reviewed by the team charged with redrawing Supervisor District Maps. For more information, visit <a href="http://www.countyofnapa.org/398/2021-Redistricting">this link</a>.</p>\
  <p>Get started by clicking the orange button to draw your community of interest. Click on the blue button to draw your district map of the county. To share your map, click “Save” in the upper right corner of the mapping module. To pin your map to this page, be sure the tag “Napa_County” (any capitalization) is entered.”</p>',
    napa_boe: '<p>Every 10 years, Californians get the chance to help reshape the seven Napa County Board of Education districts based on current United States Census data. Redistricting is based on population and communities of interest. A community of interest shares common social and economic interests that should be included within a single supervisor district to achieve effective and fair representation for its residents.</p> \
    <p>Examples of communities can include neighborhoods, areas where many residents speak the same language, areas using the same community facilities such as schools, transportation and public services.  It’s basically any geographic area where people have a common interest that needs a voice in government.</p>\
    <p>We need your help to describe communities of interest.  Please use this tool to map the boundaries of your community and share your thoughts on what makes it a community of interest.\
    </p>\
    <p>Get started by clicking the orange button. To share your map, click “Save” in the upper right corner of the mapping module. To pin your map to this page, be sure the tag “Napa_BOE” (any capitalization) is entered.</p>',
    livermore: '<p>Every ten years, local governments use new United States Census data to redraw their district lines to reflect how local populations have changed. This process, called redistricting, is important in ensuring that each City Councilmember represents substantially the same number of constituents. How those lines are drawn affects how people are represented.</p>\
  <p>Redistricting also determines which neighborhoods and communities are grouped together into a district.  Communities are those with common social or economic interests that should be included within a single district for effective, fair representation.  They are best described by those with first‐hand knowledge.  <strong>We want to hear about your community; you know it best!</strong></p>\
  <p><strong>You can also submit your own plan for how to divide the city into four districts.</strong>  Every plan submitted to the City will be carefully reviewed and included as part of the public record. For more information, <a href="https://drawlivermore.org" target="_blank">visit this link</a>.</p>\
  <p>Get started by clicking the orange or purple button. To share your map, click “Save” in the upper right corner of the mapping module. To pin your map to this page, be sure the tag “Livermore”.</p>',
    modesto: '<p>Every ten years, local governments use new United States Census data to redraw their district lines to reflect how local populations have changed. This process, called redistricting, is important in ensuring that each City Councilmember represents substantially the same number of constituents. How those lines are drawn affects how people are represented.</p>\
  <p>Redistricting also determines which neighborhoods and communities are grouped together into a district.  Communities are those with common social or economic interests that should be included within a single district for effective, fair representation.  They are best described by those with first‐hand knowledge.  <strong>We want to hear about your community; you know it best!</strong></p>\
  <p><strong>You can also submit your own plan for how to divide the city into five districts.</strong>  Every plan submitted to the City will be carefully reviewed and included as part of the public record. For more information, <a href="https://www.modestogov.com/1141/Citizens-Districting-Commission" target="_blank">visit this link</a>.</p>\
  <p>To share your map to this page, be sure to select "Share" and click on the button "Share to Gallery".</p>',
    napa_college: '<p>Every 10 years, Californians get the chance to help reshape the seven Napa Valley College Trustee districts based on current United States Census data. Redistricting is based on population and communities of interest. A community of interest shares common social and economic interests that should be included within a single trustee district to achieve effective and fair representation for its residents.</p> \
    <p>Examples of communities can include neighborhoods, areas where many residents speak the same language, areas using the same community facilities such as schools, transportation and public services.  It’s basically any geographic area where people have a common interest that needs a voice in government.</p>\
    <p>We need your help to describe communities of interest.  Please use this tool to map the boundaries of your community and share your thoughts on what makes it a community of interest.\
    </p>\
    <p>Get started by clicking the orange button. To share your map, click “Save” in the upper right corner of the mapping module. To pin your map to this page, be sure the tag “Napa_College” (any capitalization) is entered.</p>',
    city_of_napa: '<p>Every 10 years, Californians get the chance to help reshape their City Council districts following the decennial U.S. Census. It’s important to know about communities so that the district lines can amplify the voices of residents.</p>\
  <p>Examples of communities can include neighborhood associations or planning zones, areas where many residents speak the same language, or even areas where the residents use the same community facilities. It’s basically any part where people have a common interest that needs a voice in government.</p>\
  <p><strong>We need your help to build a community map! Please use this tool to identify the boundaries of your community and share what makes it a community. If you would like to draw a full map, then please select the DISTRICT option to draw lines for four City Council districts.</strong></p>\
  <p>Every map submission will become a part of the public record and posted on the City’s website. Map submissions will be carefully reviewed by the City’s demographer and presented to the City Council for their consideration and approval of a final adopted map.</p>\
  <p>Get started by clicking the orange button. To share your map, click “Save” in the upper right corner of the mapping module. To pin your map to this page, be sure the tag ”City_of_Napa” (any capitalization) is entered.</p>',
    san_jose: '<p>Every 10 years, Californians get the chance to help reshape their City Council districts following the decennial U.S. Census. It’s important to know about communities so that the district lines can amplify the voices of residents.</p>\
 <p>Examples of communities can include neighborhood associations or planning zones, areas where many residents speak the same language, or even areas where the residents use the same community facilities. It’s basically any part where people have a common interest that needs a voice in government.</p>\
  <p><strong>We need your help to build a community map! Please use this tool to identify the boundaries of your community and share what makes it a community.</strong></p>\
  <p>Every map submitted will be carefully reviewed and included as part of the public record. For more information, \
  <a href="https://www.sanjoseca.gov/your-government/appointees/city-clerk/redistricting-2020">visit this link</a>.</p>\
  <p>Get started by clicking the orange button. To share your map, click “Save” in the upper right corner of the mapping module. To pin your map to this page, be sure the tag “San_Jose” (any capitalization) is entered.</p>',
    mapsofla: '<p>Every ten years, local governments use new United States Census data to redraw their district lines to reflect how local populations have changed. This process, called redistricting, is important in ensuring that each City Councilmember represents about the same number of constituents. Redistricting also determines which neighborhoods and communities are grouped together into a district for purposes of electing a Councilmember. In addition to Census data, officials conducting the redistricting process consider how to maintain communities of interest when redrawing district boundaries.</p>\
 <p>Examples of communities of interest can include neighborhood associations or planning zones, areas where many residents speak the same language, or even areas where the residents use the same community facilities. People who have common interests that need a voice in government define their own communities.</p>\
 <p><strong>We need your help to build a community map! Please use this tool to identify the boundaries of your community and share what makes it a community.</strong></p>\
 <p>Maps may be submitted to the City of Los Angeles for review. <b>To be included as part of the public record, save your map in PDF format and submit via the Public Comments Portal </b><a href="https://cityclerk.lacity.org/publiccomment/?cfnumber=20-0668-S7" target="_blank">at this link</a>.</p>\
 <p>Note: Maps submitted are only for the consideration of the Los Angeles City Council. The Los Angeles City Council Redistricting Commission has concluded its work and is no longer accepting maps.</p>\
 <p>Get started by clicking the orange or purple button. To share your map, click “Save” in the upper right corner of the mapping module. To pin your map to this page, be sure the tag “MapsofLA”. For a detailed how-to guide of Districtr, visit our <a href="/guide">Guide page</a>.</p>',
    siskiyou: '<p>Every 10 years, Californians get the chance to help reshape their Supervisor Board districts following the decennial U.S. Census. It’s important to know about communities so that the district lines can amplify the voices of residents.</p>\
  <p>Examples of communities can include cities, neighborhood associations or planning zones, areas where many residents speak the same language, or even areas where the residents use the same community facilities. It’s basically any part where people have a common interest that needs a voice in government.</p>\
  <p><strong>We need your help to build a community map! Please use this tool to identify the boundaries of your community and share what makes it a community.</strong></p>\
  <p>Every map submitted will be carefully reviewed by the residents charged with redrawing the Supervisorial District Map.</p>\
  <p>Get started by clicking the orange button. To share your map, click “Save” in the upper right corner of the mapping module. To pin your map to this page, be sure the tag “Siskiyou” (any capitalization) is entered.</p>',
    redwood_city: '<p>Every ten years, local governments use new United States Census data to redraw their district lines to reflect how local populations have changed. This process, called redistricting, is important in ensuring that each City Councilmember represents about the same number of constituents. Redistricting also determines which neighborhoods and communities are grouped together into a district for purposes of electing a Councilmember. In addition to Census data, officials conducting the redistricting process consider how to maintain communities of interest when redrawing district boundaries.</p>\
  <p>Examples of communities of interest can include neighborhood associations or planning zones, areas where many residents speak the same language, or even areas where the residents use the same community facilities.  People who have common interests that need a voice in government define their own communities.</p>\
  <p><strong>We need your help to build a community map! Please use this tool to identify the boundaries of your community and share what makes it a community.</strong></p>\
  <p>Every map submitted to the City will be carefully reviewed and included as part of the public record. For more information, <a href="https://www.redwoodcity.org/departments/city-clerk/redistricting-process" target="_blank">visit this link</a>.<br/>\
  Get started by clicking the orange button. To share your map, click “Save” in the upper right corner of the mapping module. To pin your map to this page, be sure the tag “Redwood City”.</p>',
    ventura_county: '<p>Every 10 years, Californians get the chance to help reshape their Supervisor Board districts following the decennial U.S. Census. It’s important to know about communities so that the district lines can amplify the voices of residents.</p>\
<p>Examples of communities can include cities, neighborhood associations or planning zones, areas where many residents speak the same language, or even areas where the residents use the same community facilities. It’s basically any part where people have a common interest that needs a voice in government.</p>\
      <p><strong>We need your help to build a community map! Please use this tool to identify the boundaries of your community and share what makes it a community.</strong></p>\
      <p>Every map submitted will be carefully reviewed by the residents charged with redrawing the Supervisorial District Map.</p>\
      <p>Get started by clicking the orange button. To share your map, click “Save” in the upper right corner of the mapping module. To pin your map to this page, be sure the tag “Ventura_County” (any capitalization) is entered.</p>',
    yolo_county: '<p>Every 10 years, Californians get the chance to help reshape their Supervisor Board districts following the decennial U.S. Census. It’s important to know about communities so that the district lines can amplify the voices of residents.</p>\
<p>Examples of communities can include cities, neighborhood associations or planning zones, areas where many residents speak the same language, or even areas where the residents use the same community facilities. It’s basically any part where people have a common interest that needs a voice in government.</p>\
      <p><strong>We need your help to build a community map! Please use this tool to identify the boundaries of your community and share what makes it a community.</strong></p>\
      <p>Every map submitted will be carefully reviewed by the residents charged with redrawing the Supervisorial District Map.</p>\
      <p>Get started by clicking the orange button. To share your map, click “Save” in the upper right corner of the mapping module. To pin your map to this page, be sure the tag “Yolo_County” (any capitalization) is entered.</p>',
    tuolumne_county: '<p>Every 10 years, Californians get the chance to help reshape their Supervisor Board districts following the decennial U.S. Census. It’s important to know about communities so that the district lines can amplify the voices of residents.</p>\
  <p>Examples of communities can include cities, neighborhood associations or planning zones, areas where many residents speak the same language, or even areas where the residents use the same community facilities. It’s basically any part where people have a common interest that needs a voice in government.</p>\
  <p><strong>We need your help to build a community map! Please use this tool to identify the boundaries of your community and share what makes it a community.</strong></p>\
  <p>Every map submitted will be carefully reviewed by the residents charged with redrawing the Supervisorial District Map.</p>\
  <p>Get started by clicking one of the buttons below. To share your map, click “Save” in the upper right corner of the mapping module. To pin your map to this page, be sure the tag “Tuolumne_County” (any capitalization) is entered.</p>',
    kern_county: '<p>Every 10 years, Californians get the chance to help reshape their Supervisor Board districts following the decennial U.S. Census. It’s important to know about communities so that the district lines can amplify the voices of residents.</p>\
<p>Examples of communities can include cities, neighborhood associations or planning zones, areas where many residents speak the same language, or even areas where the residents use the same community facilities. It’s basically any part where people have a common interest that needs a voice in government.</p>\
      <p><strong>We need your help to build a community map! Please use this tool to identify the boundaries of your community and share what makes it a community.</strong></p>\
      <p>Every map submitted will be carefully reviewed by the residents charged with redrawing the Supervisorial District Map. For more information, <a href="https://www.kerncounty.com/government/2021-redistricting-menu" target="_blank">visit this link</a>.</p>\
      <p>Get started by clicking the orange button. To share your map, click “Save” in the upper right corner of the mapping module. To pin your map to this page, be sure the tag “Kern_County” (any capitalization) is entered.</p>',
    san_joaquin: '<p>Every 10 years, Californians get the chance to help reshape their Supervisor Board districts following the decennial U.S. Census. It’s important to know about communities so that the district lines can amplify the voices of residents.</p>\
<p>Examples of communities can include cities, neighborhood associations or planning zones, areas where many residents speak the same language, or even areas where the residents use the same community facilities. It’s basically any part where people have a common interest that needs a voice in government.</p>\
      <p><strong>We need your help to build a community map! Please use this tool to identify the boundaries of your community and share what makes it a community.</strong></p>\
      <p>Every map submitted will be carefully reviewed by the San Joaquin County Redistricting Advisory Committee charged with redrawing and recommending the Supervisorial District Map. <a href="https://wedrawthelines.sjgov.org/" target="_blank">For more information, visit this link.</a></p>\
      <p>To draw your community click on the orange button. To draw a five district plan click on the purple button. To view demographic data on the map and add city boundaries, click on the “Data Layers” tab. After you have drawn your community, please provide a name for your community and provide a short description. To share your map, click “Save” in the upper right corner of the mapping module. To pin your map to this page, be sure the tag “San_Joaquin” (any capitalization) is entered.</p>',
    santa_clara_county: '<p>Every 10 years, Californians get the chance to help reshape their Supervisor districts following the decennial U.S. Census. It’s important to know about communities so that the district lines can amplify the voices of residents.</p>\
<p>Examples of communities can include cities, neighborhood associations or planning zones, areas where many residents speak the same language, or even areas where the residents use the same community facilities. It’s basically any part where people have a common interest that needs a voice in government.</p>\
     <p><strong>We need your help to build a community map! Please use this tool to identify the boundaries of your community and share what makes it a community.</strong></p>\
     <p>Community of Interest submissions completed from August through September will be presented to the 2021 Advisory Redistricting Commission to inform the mapping process, which will occur in October. To learn more about the Santa Clara County process, please visit the website at <a href="http://www.sccgov.org/2021redistricting">http://www.sccgov.org/2021redistricting</a>.</p>\
     <p>Get started by clicking the orange button. To share your map, click “Save” in the upper right corner of the mapping module. To pin your map to this page, be sure the tag “Santa_Clara_County” (any capitalization) is entered.</p>',
    butte_county: '<p>Every 10 years, Californians get the chance to help reshape their Supervisor districts following the decennial U.S. Census. It’s important to know about communities so that the district lines can amplify the voices of residents.</p>\
<p>Examples of communities can include cities, neighborhood associations or planning zones, areas where many residents speak the same language, or even areas where the residents use the same community facilities. It’s basically any part where people have a common interest that needs a voice in government.</p>\
    <p><strong>We need your help to build a community map! Please use this tool to identify the boundaries of your community and share what makes it a community.</strong></p>\
    <p>Every map submitted will be carefully reviewed by those charged with redrawing the Supervisorial District Map.</p>\
    <p>Get started by clicking one of the buttons below. To share your map, click “Save” in the upper right corner of the mapping module. To pin your map to this page, be sure the tag “Butte_County” (any capitalization) is entered.</p>',
    humboldt_county: '<p>Every 10 years, Californians get the chance to help reshape their Supervisor districts following the decennial U.S. Census. It’s important to know about communities so that the district lines can amplify the voices of residents.</p>\
<p>Examples of communities can include cities, neighborhood associations or planning zones, areas where many residents speak the same language, or even areas where the residents use the same community facilities. It’s basically any part where people have a common interest that needs a voice in government.</p>\
   <p><strong>We need your help to build a community map! Please use this tool to identify the boundaries of your community and share what makes it a community.</strong></p>\
   <p>Every map submitted will be carefully reviewed by the residents charged with redrawing the Supervisorial District Map.</p>\
   <p>Get started by clicking the orange button. To share your map, click “Save” in the upper right corner of the mapping module. To pin your map to this page, be sure the tag “Humboldt_County” (any capitalization) is entered.</p>',
    santa_clara_water: '<p>Every 10 years, Californians get the chance to help reshape their Supervisor districts following the decennial U.S. Census. It’s important to know about communities so that the district lines can amplify the voices of residents.</p>\
 <p>Examples of communities can include cities, neighborhood associations or planning zones, areas where many residents speak the same language, or even areas where the residents use the same community facilities. It’s basically any part where people have a common interest that needs a voice in government.</p>\
        <p><strong>We need your help to build a community map! Please use this tool to identify the boundaries of your community and share what makes it a community.</strong></p>\
        <p>Get started by clicking the orange button. To share your map, click “Save” in the upper right corner of the mapping module. To pin your map to this page, be sure the tag “Santa_Clara_Water” (any capitalization) is entered.</p>',
    san_mateo_city: '<p>The City of San Mateo is in the process of moving from an at-large election system to a by-district election system. To draw these new districts we need to hear from you as it’s important to know about your community so that the district lines can amplify the voices of residents. Learn more on the <a href="https://www.cityofsanmateo.org/4537/District-Elections">Represent San Mateo web page</a>.</p>\
  <p>Examples of communities can include neighborhood associations, areas where many residents speak the same language, or even areas where the residents use the same community facilities. It’s basically any part where people have a common interest that needs a voice in government.</p>\
  <p><strong>We need your help to build a community map! Please use this tool to identify the boundaries of your community and share what makes it a community.</strong></p>\
  <p>Every map submitted will be carefully reviewed by professional demographers and decision makers who are charged with drawing the City Council District Map.<br/>\
  Get started by clicking the orange button to draw your community of interest. To share your map, click “Save” in the upper right corner of the mapping module. To pin your map to this page, be sure the tag “San_Mateo_City” (any capitalization) is entered.</p>',
    oakland: '<p>Every ten years, local governments use new United States Census data to redraw their district lines to reflect how local populations have changed. This process, called redistricting, is important in ensuring that each City Councilmember represents about the same number of constituents. Redistricting also determines which neighborhoods and communities are grouped together into a district for purposes of electing a Councilmember. In addition to Census data, officials conducting the redistricting process consider how to maintain communities of interest when redrawing district boundaries.</p>\
  <p>Examples of communities of interest can include neighborhood associations or planning zones, areas where many residents speak the same language, or even areas where the residents use the same community facilities. People who have common interests that need a voice in government define their own communities.</p>\
  <p><strong>We need your help to build a community map! Please use this tool to identify the boundaries of your community and share what makes it a community.</strong></p>\
  <p>Every map submitted to the Oakland Redistricting Commission will be carefully reviewed and included as part of the public record. For more information, visit <a href="https://www.oaklandca.gov/boards-commissions/redistricting-commission" target="_blank">this link</a>.</p>\
  <p>Get started by clicking the orange button to draw your community or the purple button to draw your city council map. To share your map, click “Save” in the upper right corner of the mapping module. To pin your map to this page, be sure the tag “Oakland”.\
  <br/>For a detailed how-to guide of Districtr, visit our <a href="/guide">Guide page</a>.</p>',
    martinez: '<p>Every 10 years, Californians get the chance to help reshape their City Council districts following the decennial U.S. Census. It’s important to know about communities so that the district lines can amplify the voices of residents.</p>\
  <p>Examples of communities can include neighborhood associations or planning zones, areas where many residents speak the same language, or even areas where the residents use the same community facilities. It’s basically any part where people have a common interest that needs a voice in government.</p>\
  <p><strong>We need your help to build a community map! Please use this tool to identify the boundaries of your community and share what makes it a community.</strong></p>\
  <p>Every map submitted will be carefully reviewed by the residents charged with redrawing the City Council Districts.</p>\
  <p>Get started by clicking the orange button. To share your map, click “Save” in the upper right corner of the mapping module. To pin your map to this page, be sure the tag “Martinez” (any capitalization) is entered.</p>',
    carpinteria: "\n    <p>\n      The City of Carpinteria is moving to five city council districts. This\n      process, called districting, is important in ensuring, in part, that each\n      City Council member represents the same number of constituents. How those\n      lines are drawn affects how people are represented.\n    </p>\n    <p>\n      Redistricting also determines which neighborhoods and communities are grouped together into a\n      district. Communities are those with common social or economic interests that should be included\n      within a single district for effective, fair representation. They are best described by those with\n      first\u2010hand knowledge. <strong>We want to hear about your community; you know it best!</strong>\n    </p>\n    <p>\n      <strong>You can also submit your own plan for how to divide the city into five districts.</strong> Every plan submitted\n      to the City will be carefully reviewed and included as part of the public record.\n    </p>\n    <p>\n      Get started by clicking the orange or purple button. To share your map, click \u201CSave\u201D in the upper\n      right corner of the mapping module. To pin your map to this page, be sure the tag \u201CCarpinteria\u201D.\n    </p>\n  ",
    solano_county: '<p>Every 10 years, Californians get the chance to help reshape their Supervisor Board districts following the decennial U.S. Census. It’s important to know about communities so that the district lines can amplify the voices of residents.</p>\
<p>Examples of communities can include cities, neighborhood associations or planning zones, areas where many residents speak the same language, or even areas where the residents use the same community facilities. It’s basically any part where people have a common interest that needs a voice in government.</p>\
       <p><strong>We need your help to build a community map! Please use this tool to identify the boundaries of your community and share what makes it a community.</strong></p>\
       <p>Every map submitted will be carefully reviewed by the residents charged with redrawing the Supervisorial District Map.</p>\
       <p>Get started by clicking the orange button. To share your map, click “Save” in the upper right corner of the mapping module. To pin your map to this page, be sure the tag “Solano_County” (any capitalization) is entered.</p>',
    imperial_county: '<p>Every 10 years, Californians get the chance to help reshape their Supervisor Board districts following the decennial U.S. Census. It’s important to know about communities so that the district lines can amplify the voices of residents.</p>\
  <p>Examples of communities can include cities, neighborhood associations or planning zones, areas where many residents speak the same language, or even areas where the residents use the same community facilities. It’s basically any part where people have a common interest that needs a voice in government.</p>\
  <p><strong>We need your help to build a community map! Please use this tool to identify the boundaries of your community and share what makes it a community. You can also start drawing district plans.</strong></p>\
  <p>Every map submitted will be carefully reviewed by the Imperial County Redistricting Advisory Committee charged with redrawing and recommending the Supervisorial District Map.</p>\
  <p>To draw your community click on the orange button. To draw a five district plan click on the purple button. To view demographic data on the map and add city boundaries, click on the “Data Layers” tab. After you have drawn your community, please provide a name for your community and provide a short description. To share your map, click “Save” in the upper right corner of the mapping module. To pin your map to this page, be sure the tag “Imperial_County” (any capitalization) is entered.</p>',
    sutter_county: '<p>Every 10 years, Californians get the chance to help reshape their Supervisor Board districts following the decennial U.S. Census. It’s important to know about communities so that the district lines can amplify the voices of residents.</p>\
  <p>Examples of communities can include cities, neighborhood associations or planning zones, areas where many residents speak the same language, or even areas where the residents use the same community facilities. It’s basically any part where people have a common interest that needs a voice in government.</p>\
  <p><strong>We need your help to build a community map! Please use this tool to identify the boundaries of your community and share what makes it a community. You can also start drawing district plans.</strong></p>\
  <p>To draw your community click on the orange button. To draw a five district plan click on the purple button. To view demographic data on the map and add city boundaries, click on the “Data Layers” tab. After you have drawn your community, please provide a name for your community and provide a short description. To share your map, click “Save” in the upper right corner of the mapping module. To pin your map to this page, be sure the tag “Sutter_County” (any capitalization) is entered.</p>',
    ojai: '<p>Every ten years, local governments use new United States Census data to redraw their district lines to reflect how local populations have changed. This process, called redistricting, is important in ensuring that each City Councilmember represents about the same number of constituents. Redistricting also determines which neighborhoods and communities are grouped together into a district for purposes of electing a Councilmember. In addition to Census data, officials conducting the redistricting process consider how to maintain communities of interest when redrawing district boundaries.</p>\
  <p>Examples of communities of interest can include neighborhood associations or planning zones, areas where many residents speak the same language, or even areas where the residents use the same community facilities. People who have common interests that need a voice in government define their own communities.</p>\
  <p><strong>We need your help to build a community map! Please use this tool to identify the boundaries of your community and share what makes it a community.</strong></p>\
  <p>Every map submitted will be carefully reviewed and included as part of the public record. For more information visit <a href="https://ojai.ca.gov/redistricting/" target="_blank">this link</a>.</p>\
  <p>Get started by clicking the orange button to draw your community or the purple button to draw your city council map. To share your map, click “Save” in the upper right corner of the mapping module. To pin your map to this page, be sure the tag “Ojai”.</p>\
  <p>For a detailed how-to guide of Districtr, visit our <a href="/guide" target="_blank">Guide page</a>.</p>',
    foothilldeanza: '<p>For the first time since its founding in 1957, the Foothill-De Anza Community College District is changing the way it elects members of its Board of Trustees. The district will move from an at-large election system, where voting takes place districtwide, to having voters in each of five trustee areas elect a member to serve on the governing board.</p>\
    <p>This requires dividing the district’s 448,000+ residents into five trustee areas of roughly equal population size, based on the 2020 Census.</p>\
    <p>As part of the transition process, the public is invited to help identify “communities of interest” that would benefit from being kept together when creating trustee area boundary maps as well as to propose boundaries for trustee areas.</p>\
    <p>Examples of communities of interest can include neighborhood associations or planning zones, areas where many residents speak the same language, or even areas where the residents use the same community facilities. People who have common interests that need a voice in government define their own communities.</p>\
    <p><strong>We need your help to build a community map! Please use this tool to identify the boundaries of your community of interest and share what makes it a community. You can also use the mapping tool to propose boundaries for the five trustee areas.</strong></p>\
    <p>Get started by clicking the orange button to draw your community or the purple button to draw your trustee area boundary map. Be sure to click “Save” in the upper right corner of the mapping module to post your map, come back to it later, or share it with others.</p>\
    <p>For a detailed how-to guide of Districtr, visit our <a href="/guide" target="_blank">Guide page</a>.</p>',
    galeo: 'Welcome to the event page for GALEO!',
    marinaca: "<p>Welcome to the Districtr Community of Interest public mapping tool for Marina's 2021 city council redistricting.<p>\
     <p>As part of the redistricting process, the California FAIR MAPS Act includes \
     neighborhoods and “Communities of Interest” as important considerations. California law defines Communities of Interest as “a \
     population that shares common social or economic interests that should \
     be included within a single district for purposes of its effective and fair \
     representation.”</p>\
     <p>To let the City know about your community and what brings it together, \
  share your map and your story using this tool now.</p>\
     <p><strong>To display your map on this page, be sure the tag &quot;MarinaCA&quot; is filled \
  out after you've clicked &quot;Save&quot; to share the map.</strong></p>",
    fresnocity: "<p>Welcome to the Districtr Community of Interest public mapping tool for Fresno's 2021 city council redistricting.<p>\
     <p>As part of the redistricting process, the California FAIR MAPS Act includes \
     neighborhoods and “Communities of Interest” as important considerations. California law defines Communities of Interest as “a \
     population that shares common social or economic interests that should \
     be included within a single district for purposes of its effective and fair \
     representation.”</p>\
     <p>To let the City know about your community and what brings it together, \
  share your map and your story using this tool now.</p>\
     <p><strong>To display your map on this page, be sure the tag &quot;FresnoCity&quot; is filled \
  out after you've clicked &quot;Save&quot; to share the map.</strong></p>",
    arroyog: "<p>Welcome to the Districtr Community of Interest public mapping tool for Arroyo Grande's 2021 city council redistricting.<p>\
     <p>As part of the redistricting process, the California FAIR MAPS Act includes \
     neighborhoods and “Communities of Interest” as important considerations. California law defines Communities of Interest as “a \
     population that shares common social or economic interests that should \
     be included within a single district for purposes of its effective and fair \
     representation.”</p>\
     <p>To let the City know about your community and what brings it together, \
  share your map and your story using this tool now.</p>\
     <p><strong>To display your map on this page, be sure the tag &quot;ArroyoG&quot; is filled \
  out after you've clicked &quot;Save&quot; to share the map.</strong></p>",
    chulavista: "<p>Welcome to the Districtr Community of Interest public mapping tool for Chula Vista's 2021 city council redistricting.<p>\
     <p>As part of the redistricting process, the California FAIR MAPS Act includes \
     neighborhoods and “Communities of Interest” as important considerations. California law defines Communities of Interest as “a \
     population that shares common social or economic interests that should \
     be included within a single district for purposes of its effective and fair \
     representation.”</p>\
     <p>To let the City know about your community and what brings it together, \
  share your map and your story using this tool now.</p>\
     <p><strong>To display your map on this page, be sure the tag &quot;ChulaVista&quot; is filled \
  out after you've clicked &quot;Save&quot; to share the map.</strong></p>",
    camarillo: "<p>Welcome to the Districtr Community of Interest public mapping tool for Camarillo's 2021 city council redistricting.<p>\
     <p>As part of the redistricting process, the California FAIR MAPS Act includes \
     neighborhoods and “Communities of Interest” as important considerations. California law defines Communities of Interest as “a \
     population that shares common social or economic interests that should \
     be included within a single district for purposes of its effective and fair \
     representation.”</p>\
     <p>To let the City know about your community and what brings it together, \
  share your map and your story using this tool now.</p>\
     <p><strong>To display your map on this page, be sure the tag &quot;Camarillo&quot; is filled \
  out after you've clicked &quot;Save&quot; to share the map.</strong></p>",
    yumasup: "<p>Welcome to the Districtr Community of Interest public mapping tool for Yuma County's 2021 supervisorial redistricting.<p>\
     <p>To let the County know about your community and what brings it together, \
  share your map and your story using this tool now.</p>\
     <p><strong>To display your map on this page, be sure the tag &quot;YumaSup&quot; is filled \
  out after you've clicked &quot;Save&quot; to share the map.</strong></p>",
    yumaawc: "<p>Welcome to the Districtr Community of Interest public mapping tool for Arizona Western College's 2021 trustee board redistricting.<p>\
     <p>To let the College know about your community and what brings it together, \
  share your map and your story using this tool now.</p>\
     <p><strong>To display your map on this page, be sure the tag &quot;YumaAWC&quot; is filled \
  out after you've clicked &quot;Save&quot; to share the map.</strong></p>",
    bellflower: "<p>Welcome to the Districtr Community of Interest public mapping tool for Bellflower's 2021 city council redistricting.<p>\
     <p>As part of the redistricting process, the California FAIR MAPS Act includes \
     neighborhoods and “Communities of Interest” as important considerations. California law defines Communities of Interest as “a \
     population that shares common social or economic interests that should \
     be included within a single district for purposes of its effective and fair \
     representation.”</p>\
     <p>To let the City know about your community and what brings it together, \
  share your map and your story using this tool now.</p>\
     <p><strong>To display your map on this page, be sure the tag &quot;Bellflower&quot; is filled \
  out after you've clicked &quot;Save&quot; to share the map.</strong></p>",
    goleta: "<p>Welcome to the Districtr Community of Interest public mapping tool for Goleta's 2021 city council redistricting.<p>\
     <p>As part of the redistricting process, the California FAIR MAPS Act includes \
     neighborhoods and “Communities of Interest” as important considerations. California law defines Communities of Interest as “a \
     population that shares common social or economic interests that should \
     be included within a single district for purposes of its effective and fair \
     representation.”</p>\
     <p>To let the City know about your community and what brings it together, \
  share your map and your story using this tool now.</p>\
     <p><strong>To display your map on this page, be sure the tag &quot;Goleta&quot; is filled \
  out after you've clicked &quot;Save&quot; to share the map.</strong></p>",
    sbcounty: "<p>Welcome to the Districtr Community of Interest public mapping tool for Santa Barbara's 2021 county supervisorial redistricting.<p>\
     <p>As part of the redistricting process, the California FAIR MAPS Act includes \
     neighborhoods and “Communities of Interest” as important considerations. California law defines Communities of Interest as “a \
     population that shares common social or economic interests that should \
     be included within a single district for purposes of its effective and fair \
     representation.”</p>\
     <p>To let the County know about your community and what brings it together, \
  share your map and your story using this tool now.</p>\
     <p><strong>To display your map on this page, be sure the tag &quot;SBCounty&quot; is filled \
  out after you've clicked &quot;Save&quot; to share the map.</strong></p>",
    kingsco: "<p>Welcome to the Districtr Community of Interest public mapping tool for Kings County's 2021 supervisorial redistricting.<p>\
     <p>As part of the redistricting process, the California FAIR MAPS Act includes \
     neighborhoods and “Communities of Interest” as important considerations. California law defines Communities of Interest as “a \
     population that shares common social or economic interests that should \
     be included within a single district for purposes of its effective and fair \
     representation.”</p>\
     <p>To let the County know about your community and what brings it together, \
  share your map and your story using this tool now.</p>\
     <p><strong>To display your map on this page, be sure the tag &quot;KingsCO&quot; is filled \
  out after you've clicked &quot;Save&quot; to share the map.</strong></p>",
    mercedco: "<p>Welcome to the Districtr Community of Interest public mapping tool for Merced County's 2021 supervisorial redistricting.<p>\
     <p>As part of the redistricting process, the California FAIR MAPS Act includes \
     neighborhoods and “Communities of Interest” as important considerations. California law defines Communities of Interest as “a \
     population that shares common social or economic interests that should \
     be included within a single district for purposes of its effective and fair \
     representation.”</p>\
     <p>To let the County know about your community and what brings it together, \
  share your map and your story using this tool now.</p>\
     <p><strong>To display your map on this page, be sure the tag &quot;MercedCo&quot; is filled \
  out after you've clicked &quot;Save&quot; to share the map.</strong></p>",
    lakee: "<p>Welcome to the Districtr Community of Interest public mapping tool for Lake Elsinore's 2021 city council redistricting.<p>\
     <p>As part of the redistricting process, the California FAIR MAPS Act includes \
     neighborhoods and “Communities of Interest” as important considerations. California law defines Communities of Interest as “a \
     population that shares common social or economic interests that should \
     be included within a single district for purposes of its effective and fair \
     representation.”</p>\
     <p>To let the City know about your community and what brings it together, \
  share your map and your story using this tool now.</p>\
     <p><strong>To display your map on this page, be sure the tag &quot;LakeE&quot; is filled \
  out after you've clicked &quot;Save&quot; to share the map.</strong></p>",
    chino2021: "<p>Welcome to the Districtr Community of Interest public mapping tool for Chino's 2021 city council redistricting.<p>\
     <p>As part of the redistricting process, the California FAIR MAPS Act includes \
     neighborhoods and “Communities of Interest” as important considerations. California law defines Communities of Interest as “a \
     population that shares common social or economic interests that should \
     be included within a single district for purposes of its effective and fair \
     representation.”</p>\
     <p>To let the City know about your community and what brings it together, \
  share your map and your story using this tool now.</p>\
     <p><strong>To display your map on this page, be sure the tag &quot;Chino2021&quot; is filled \
  out after you've clicked &quot;Save&quot; to share the map.</strong></p>",
    campbellcity: "<p>Welcome to the Districtr Community of Interest public mapping tool for Campbell's 2021 city council redistricting.<p>\
     <p>As part of the redistricting process, the California FAIR MAPS Act includes \
     neighborhoods and “Communities of Interest” as important considerations. California law defines Communities of Interest as “a \
     population that shares common social or economic interests that should \
     be included within a single district for purposes of its effective and fair \
     representation.”</p>\
     <p>To let the City know about your community and what brings it together, \
  share your map and your story using this tool now.</p>\
     <p><strong>To display your map on this page, be sure the tag &quot;CampbellCity&quot; is filled \
  out after you've clicked &quot;Save&quot; to share the map.</strong></p>",
    ocsd: "<p>Welcome to the Districtr Community of Interest public mapping tool for Oceano Community Service District's 2021 division redistricting.<p>\
     <p>As part of the redistricting process, the California FAIR MAPS Act includes \
     neighborhoods and “Communities of Interest” as important considerations. California law defines Communities of Interest as “a \
     population that shares common social or economic interests that should \
     be included within a single district for purposes of its effective and fair \
     representation.”</p>\
     <p>To let the CSD know about your community and what brings it together, \
  share your map and your story using this tool now.</p>\
     <p><strong>To display your map on this page, be sure the tag &quot;OCSD&quot; is filled \
  out after you've clicked &quot;Save&quot; to share the map.</strong></p>",
    buellton: "<p>Welcome to the Districtr Community of Interest public mapping tool for Buellton's 2021 city council redistricting.<p>\
     <p>As part of the redistricting process, the California FAIR MAPS Act includes \
     neighborhoods and “Communities of Interest” as important considerations. California law defines Communities of Interest as “a \
     population that shares common social or economic interests that should \
     be included within a single district for purposes of its effective and fair \
     representation.”</p>\
     <p>To let the City know about your community and what brings it together, \
  share your map and your story using this tool now.</p>\
     <p><strong>To display your map on this page, be sure the tag &quot;Buellton&quot; is filled \
  out after you've clicked &quot;Save&quot; to share the map.</strong></p>",
    vallejo: "<p>Welcome to the Districtr Community of Interest public mapping tool for Vallejo's 2021 city council redistricting.<p>\
     <p>As part of the redistricting process, the California FAIR MAPS Act includes \
     neighborhoods and “Communities of Interest” as important considerations. California law defines Communities of Interest as “a \
     population that shares common social or economic interests that should \
     be included within a single district for purposes of its effective and fair \
     representation.”</p>\
     <p>To let the City know about your community and what brings it together, \
  share your map and your story using this tool now.</p>\
     <p><strong>To display your map on this page, be sure the tag &quot;Vallejo&quot; is filled \
  out after you've clicked &quot;Save&quot; to share the map.</strong></p>",
    groverbeach: "<p>Welcome to the Districtr Community of Interest public mapping tool for Grover Beach's 2021 city council redistricting.<p>\
     <p>As part of the redistricting process, the California FAIR MAPS Act includes \
     neighborhoods and “Communities of Interest” as important considerations. California law defines Communities of Interest as “a \
     population that shares common social or economic interests that should \
     be included within a single district for purposes of its effective and fair \
     representation.”</p>\
     <p>To let the City know about your community and what brings it together, \
  share your map and your story using this tool now.</p>\
     <p><strong>To display your map on this page, be sure the tag &quot;GroverBeach&quot; is filled \
  out after you've clicked &quot;Save&quot; to share the map.</strong></p>",
    fremont2021: "<p>Welcome to the Districtr Community of Interest public mapping tool for Fremont's 2021 city council redistricting.<p>\
     <p>As part of the redistricting process, the California FAIR MAPS Act includes \
     neighborhoods and “Communities of Interest” as important considerations. California law defines Communities of Interest as “a \
     population that shares common social or economic interests that should \
     be included within a single district for purposes of its effective and fair \
     representation.”</p>\
     <p>To let the City know about your community and what brings it together, \
     share your map and your story using this tool now.</p>\
     <p><strong>To display your map on this page, be sure the tag &quot;Fremont2021&quot; is filled \
     out after you've clicked &quot;Save&quot; to share the map.</strong></p>",
    'mp-maps': "<p>Welcome to the Districtr public mapping tool to support the City of Menlo Park's 2021 City Council redistricting effort.<p>\
     <p>As part of the City's effort to provide transparency and meet requirements of the California FAIR MAPS Act, we encourage residents to \
     submit their draft city council districts and “Communities of Interest” (COI) using the <a href='https://districtr.org/' target='_blank'>Districtr.org</a> mapping tool. A “Community of Interest” \
     is defined by California law as: “a population that shares common social or economic interests that should be included within a single district \
     for purposes of its effective and fair representation.”</p>\
     <p>Draft districts must be contiguous and maintain equal population size to ensure equal representation between districts.</p>\
     <p>Click the following link to view <a href='https://menlopark.maps.arcgis.com/apps/InformationLookup/index.html?appid=83d9c16b24d2493893fde31135490a7e' target='_blank'>Current Districts</a>.</p>\
     <p><strong>Note for all public map submissions:</strong> The Max Population Deviation only displays information for the district \
     with the greatest deviation from ideal. This number does not reflect the total population variance between all districts. As a best \
     practice, <strong>keep the Max Population Deviation under 5%</strong> to ensure a viable map for population balance.</p>",
    ourmaps: 'Welcome to the event page for OurMaps!',
    commoncausepa: "<p>Welcome to the Community Mapping page managed by Common Cause PA.<p>\
  <p>This is a space where maps created by Communities of Interest (COI) are held until the COI determines what will be done with that map \
  (i.e. unity map, independent submission, regional maps). Common Cause will be working with organizations, groups and communities across the \
  state to collect a critical mass of community maps. These maps, whether as a part of a larger unity map or as independent maps, will be submitted \
  to the Legislative Reapportionment Commission (LRC) to consider as they draft the state legislative districts map.</p>\
  <p>If you have any questions or concerns please contact us <a href='https://docs.google.com/forms/d/e/1FAIpQLScJWWV1GYowgwXwcw6TEk_RmS_7I_3PMuG2ag-jIx0t8D73pg/viewform' target='_blank'>here</a>.</p>",
    'ft-myers': "<p>Welcome to The City of Fort Myers Online Redistricting Project.<p>\
       <p>The City of Fort Myers is one of the fastest-growing cities in the nation. The population and demographic makeup of the City have changed substantially since the last redistricting in 2010.</p>\
       <p>Every decade, the City must re-draw the city wards to balance the population within the wards to distribute the representation on the City Council equally and fairly.</p>\
       <p>This online tool allows easy access to the United States Census's population data for redistricting, based on the 2020 decennial census. Users of this system can create and \
        save maps to better understand the process. Public transparency, communication, and participation are keys to a successful redistricting effort.</p>",
    cityofdallas: "\n  <p>\n    Every 10 years, the residents of the City of Dallas get the chance to help\n    reshape their City Council districts following the decennial U.S. Census.\n    Please take this opportunity to draw your own districts using the\n    <a href=\"https://dallasredistricting.com/create-your-plan/\" target=\"_blank\">\n    redistricting requirements as listed here</a>.\n  </p>\n  <p>\n    It's important to know about the communities of interest (COIs) so that the\n    district lines can amplify the voices of residents.\n    Examples of communities can include homeowner associations (HOAs) or registered\n    neighborhoods, areas where many residents speak the same language, or even areas\n    where the residents use the same community facilities. It\u2019s basically any\n    part of the City where people have a common interest that needs a voice in\n    government. <strong>Please use this tool to identify the boundaries of your community and\n    share what makes it a community!</strong>\n  </p>\n  <p>\n    Get started by clicking the orange button. To share your map, click \"Save\" in\n    the upper right corner of the mapping module. To pin your map to this page,\n    be sure the tag \"CityofDallas\" (any capitalization) is entered.\n  </p>\n  <p>\n    The Commission will consider communities of interest during the redistricting\n    process. To let the Commission know where communities are and what\n    common concerns bind them together, share your map on this mapping page or\n    submit your map through the\n    <a href=\"https://dallasredistricting.com/submit-your-map/\" target=\"_blank\">\n    Commission's public submission portal</a> or email its districtr URL to\n    <a href=\"mailto:redistrictdallas@gmail.com?subject=Districtr Submission\">\n    <code>redistrictdallas@gmail.com</code></a>.\n    Every map submitted will be carefully reviewed by the City of Dallas\n    Redistricting Commission. For more information, visit the\n    <a href=\"https://dallasredistricting.com/create-your-plan/\" target=\"_blank\">\n    City of Dallas Citizen Redistricting Commission page</a>.\n  </p>",
    glendora2021: "<p>Welcome to the Districtr Community of Interest public mapping tool for Glendora's 2021 city council redistricting.<p>\
  <p>As part of the redistricting process, the California FAIR MAPS Act incudes \
  neighborhoods and “Communities of Interest” as important considerations. California law defines Communities of Interest as “a \
  population that shares common social or economic interests that should \
  be included within a single district for purposes of its effective and fair \
  representation.”</p>\
  <p>To let the City know about your community and what brings it together, \
  share your map and your story using this tool now.</p>\
  <p><strong>To display your map on this page, be sure the tag &quot;Glendora2021&quot; is filled \
  out after you've clicked &quot;Save&quot; to share the map.</strong></p>",
    "sandimas2021": "\n    <p>Welcome to the Districtr Community of Interest public mapping tool for City of San Dimas' 2021 city council redistricting.</p>\n    <p>As part of the redistricting process, the California FAIR MAPS Act includes neighborhoods and \"Communities of Interest\" as important\n    considerations. California law defines Communities of Interest as \"a population that shares common social or economic interests that\n    should be included within a single district for purposes of its effective and fair representation.\"</p>\n    <p>To let the City know about your community and what brings it together, share your map and your story using this tool now.</p>\n    <p><strong>To display your map on this page, be sure the tag \"SanDimas2021\" is filled out after you've clicked \"Save\" to share the map.</strong></p>\n  ",
    "anaheim2021": "\n    <p>Welcome to the Districtr Community of Interest public mapping tool for City of Anaheim's 2021 city council redistricting.</p>\n    <p>As part of the redistricting process, the California FAIR MAPS Act includes neighborhoods and \"Communities of Interest\" as important\n    considerations. California law defines Communities of Interest as \"a population that shares common social or economic interests that\n    should be included within a single district for purposes of its effective and fair representation.\"</p>\n    <p>To let the City know about your community and what brings it together, share your map and your story using this tool now.</p>\n    <p><strong>To display your map on this page, be sure the tag \"Anaheim2021\" is filled out after you've clicked \"Save\" to share the map.</strong></p>\n  ",
    "arcadia2021": "\n    <p>\n      Welcome to the Districtr Community of Interest public mapping tool for City\n      of Arcadia's 2021 city council redistricting.\n    </p>\n    <p>\n      As part of the redistricting process, the California FAIR MAPS Act includes\n      neighborhoods and \"Communities of Interest\" as important considerations.\n      California law defines Communities of Interest as \"a population that shares\n      common social or economic interests that should be included within a single\n      district for purposes of its effective and fair representation.\"\n    </p>\n    <p>\n      To let the City know about your community and what brings it together,\n      share your map and your story using this tool now.\n    </p>\n    <p>\n      <strong>To display your map on this page, be sure the tag \"Arcadia2021\" is\n      filled out after you've clicked \"Save\" to share the map.</strong>\n    </p>\n  ",
    "lamirada2021": "\n    <p>Welcome to the Districtr Community of Interest public mapping tool for the City of La Mirada's 2021 city council redistricting.</p>\n    <p>As part of the redistricting process, the California FAIR MAPS Act includes neighborhoods and \"Communities of Interest\" as important\n    considerations. California law defines Communities of Interest as \"a population that shares common social or economic interests that\n    should be included within a single district for purposes of its effective and fair representation.\"</p>\n    <p>To let the City know about your community and what brings it together, share your map and your story using this tool now.</p>\n    <p><strong>To display your map on this page, be sure the tag \"LaMirada2021\" is filled out after you've clicked \"Save\" to share the map.</strong></p>\n  ",
    "lakewood2021": "\n    <p>Welcome to the Districtr Community of Interest public mapping tool for the City of Lakewood's 2021 city council redistricting.</p>\n    <p>As part of the redistricting process, the California FAIR MAPS Act includes neighborhoods and \"Communities of Interest\" as important\n    considerations. California law defines Communities of Interest as \"a population that shares common social or economic interests that\n    should be included within a single district for purposes of its effective and fair representation.\"</p>\n    <p>To let the City know about your community and what brings it together, share your map and your story using this tool now.</p>\n    <p><strong>To display your map on this page, be sure the tag \"Lakewood2021\" is filled out after you've clicked \"Save\" to share the map.</strong></p>\n  ",
    "placentia2021": "\n    <p>Welcome to the Districtr Community of Interest public mapping tool for the City of Placentia's 2021 city council redistricting.</p>\n    <p>As part of the redistricting process, the California FAIR MAPS Act includes neighborhoods and \"Communities of Interest\" as important\n    considerations. California law defines Communities of Interest as \"a population that shares common social or economic interests that\n    should be included within a single district for purposes of its effective and fair representation.\"</p>\n    <p>To let the City know about your community and what brings it together, share your map and your story using this tool now.</p>\n    <p><strong>To display your map on this page, be sure the tag \"Placentia2021\" is filled out after you've clicked \"Save\" to share the map.</strong></p>\n  ",
    "sanbruno2021": "\n    <p>Welcome to the Districtr Community of Interest public mapping tool for the City of San Bruno's 2021 city council redistricting.</p>\n    <p>As part of the redistricting process, the California FAIR MAPS Act includes neighborhoods and \"Communities of Interest\" as important\n    considerations. California law defines Communities of Interest as \"a population that shares common social or economic interests that\n    should be included within a single district for purposes of its effective and fair representation.\"</p>\n    <p>To let the City know about your community and what brings it together, share your map and your story using this tool now.</p>\n    <p><strong>To display your map on this page, be sure the tag \"SanBruno2021\" is filled out after you've clicked \"Save\" to share the map.</strong></p>\n  ",
    poway2021: "<p>Welcome to the Districtr Community of Interest public mapping tool for Poway County’s 2021 city council redistricting.<p>\
     <p>As part of the redistricting process, the California FAIR MAPS Act includes \
     neighborhoods and “Communities of Interest” as important considerations. California law defines Communities of Interest as “a \
     population that shares common social or economic interests that should \
     be included within a single district for purposes of its effective and fair \
     representation.”</p>\
     <p>To let the city know about your community and what brings it together, \
share your map and your story using this tool now.</p>\
     <p><strong>To display your map on this page, be sure the tag &quot;Poway2021&quot; is filled \
out after you've clicked &quot;Save&quot; to share the map.</strong></p>",
    torrance2021: "<p>Welcome to the Districtr Community of Interest public mapping tool for Torrance County’s 2021 city counci redistricting.<p>\
     <p>As part of the redistricting process, the California FAIR MAPS Act includes \
     neighborhoods and “Communities of Interest” as important considerations. California law defines Communities of Interest as “a \
     population that shares common social or economic interests that should \
     be included within a single district for purposes of its effective and fair \
     representation.”</p>\
     <p>To let the city know about your community and what brings it together, \
share your map and your story using this tool now.</p>\
     <p><strong>To display your map on this page, be sure the tag &quot;Torrance2021&quot; is filled \
out after you've clicked &quot;Save&quot; to share the map.</strong></p>",
    "29palms": "\n    <p>\n      Welcome to the Districtr Community of Interest public mapping tool for the\n      City of Twentynine Palms' City Council redistricting.\n    </p>\n    <p>\n      As part of the redistricting process, the California FAIR MAPS Act includes\n      neighborhoods and \"Communities of Interest\" as important considerations.\n      California law defines Communities of Interest as \"a population that shares\n      common social or economic interests that should be included within a single\n      district for purposes of its effective and fair representation.\"\n    </p>\n    <p>\n      To let the City know about your community and what brings it together,\n      share your map and your story using this tool now.\n    </p>\n    <p>\n      <strong>To display your map on this page, be sure the tag \"29palms\" is\n      filled out after you've clicked \"Save\" to share the map.</strong>\n    </p>\n  ",
    "navajoco": "\n    <p>\n      Welcome to the Districtr Community of Interest public mapping tool for\n      Navajo County's 2021 supervisorial redistricting.\n    </p>\n    <p>\n      To let the County know about your community and what brings it together,\n      share your map and your story using this tool now.\n    </p>\n    <p style=\"font-weight: bold;\">\n      To display your map on this page, be sure the tag \"NavajoCo\" is filled out\n      after you've clicked \"Save\" to share the map.\n    </p>\n  ",
    "bpld2021": "\n    <p>\n      Welcome to the Districtr Community of Interest public mapping tool for\n      redistricting the Buena Park Library Districts for the Board of Trustees.\n    </p>\n    <p>\n      As part of the redistricting process, the California FAIR MAPS Act includes\n      neighborhoods and \"Communities of Interest\" as important considerations.\n      California law defines Communities of Interest as \"a population that shares\n      common social or economic interests that should be included within a single\n      district for purposes of its effective and fair representation.\"\n    </p>\n    <p>\n      To let the Board know about your community and what brings it together,\n      share your map and your story using this tool now.\n    </p>\n    <p>\n      <strong>To display your map on this page, be sure the tag \"BPLD2021\" is\n      filled out after you've clicked \"Save\" to share the map.</strong>\n    </p>\n  ",
    "yubacity": "\n    <p>\n      Welcome to the Districtr Community of Interest public mapping tool for\n      City of Yuba's 2021 city council redistricting.\n    </p>\n    <p>\n      As part of the redistricting process, the California FAIR MAPS Act includes\n      neighborhoods and \"Communities of Interest\" as important considerations.\n      California law defines Communities of Interest as \"a population that shares\n      common social or economic interests that should be included within a single\n      district for purposes of its effective and fair representation.\"\n    </p>\n    <p>\n      To let the City know about your community and what brings it together,\n      share your map and your story using this tool now.\n    </p>\n    <p>\n      <strong>To display your map on this page, be sure the tag \"YubaCity\" is\n      filled out after you've clicked \"Save\" to share the map.</strong>\n    </p>\n  ",
    "marinccd": "\n    <p>\n      Welcome to the public mapping page for the Marin Community College District\n      (MCCD) Board of Trustees. MCCD is transitioning from at-large elections to\n      by-area elections to be implemented for the November 2022 election. In\n      by-area elections, MCCD will consist of 7 voting areas that are roughly\n      equal in population. Board members will be elected from each of the seven\n      areas only by voters who reside within the respective areas. Board members\n      will be required to reside within the area from which they are elected.\n      For example, Area A\u2019s representative on the MCCD Board will need to reside\n      within Area A and is only elected by voters who reside within Area A.\n    </p>\n    <p>\n      As part of the creation of voting areas, MCCD is seeking public input on\n      what these voting areas should look like. To let MCCD know what you think\n      the maps should look like, you can create your own map utilizing this\n      website or you can take one of the previously created maps and modify it,\n      then submit the map for consideration by the Board of Trustees.\n      <a href=\"https://districtr.org/guide\">Click here</a> for a tutorial.\n    </p>\n    <p>\n      To let the Board know about your community and what brings it together,\n      share your map and your story using this tool now.\n    </p>\n    <p>\n      <strong>To display your map on this page, be sure the tag \"MarinCCD\" is\n      filled out after you've clicked \"Save\" to share the map.</strong>\n    </p>\n  ",
    "oxnarduhsd": "\n    <p>\n      Welcome to the public mapping page for the Oxnard Union High School District\n      (OUHSD) Board of Trustees. OUHSD is transitioning from at-large elections to\n      by-area elections to be implemented for the November 2022 election. In\n      by-area elections, OUHSD will consist of five voting areas that are roughly\n      equal in population. Board members will be elected from each of the five areas\n      only by voters who reside within the respective areas. Board members will be\n      required to reside within the area from which they are elected. For example,\n      Area A\u2019s representative on the OUHSD Board will need to reside within Area A\n      and is only elected by voters who reside within Area A.\n    </p>\n    <p>\n      As part of the creation of voting areas, OUHSD is seeking public input on\n      what these voting areas should look like. To let OUHSD know what you think\n      the maps should look like, you can create your own map utilizing this website\n      or you can take one of the previously created maps and modify it, then submit\n      the map for consideration by the Board of Trustees.\n      <a href=\"https://districtr.org/guide\">Click here</a> for a tutorial.\n    </p>\n    <p>\n      To let the Board know about your community and what brings it together,\n      share your map and your story using this tool now.\n    </p>\n    <p>\n      <strong>To display your map on this page, be sure the tag \"OxnardUHSD\" is\n      filled out after you've clicked \"Save\" to share the map.</strong>\n    </p>",
    "watsonville": "\n    <p>\n      Every ten years, local governments use new United States Census data to redraw\n      their district lines to reflect how local populations have changed. This process,\n      called redistricting, is important in ensuring that each City Council Member\n      represents substantially the same number of constituents. How those lines are\n      drawn affects how people are represented.\n    </p>\n    <p>\n      Redistricting also determines which neighborhoods and communities are grouped\n      together into a district. Communities are those with common social or economic\n      interests that should be included within a single district for effective, fair\n      representation. They are best described by those with first\u2010hand knowledge. <strong>We\n      want to hear about your community; you know it best!</strong>\n    </p>\n    <p>\n      <strong>You can also submit your own plan for how to divide the city into seven districts.</strong>\n      Every plan submitted to the City will be carefully reviewed and included as part of\n      the public record. For more information, <a href='https://www.cityofwatsonville.org/2193/Redistricting' target=_blank>visit this link</a>.\n    </p>\n    <p>\n      To share your map to this page, be sure to select \u201CShare Now\u201D and click on the button \u201CShare to Gallery\u201D.\n    </p>\n  ",
    "rohnert_park": "\n    <p>\n      Every ten years, local governments use new United States Census data to redraw\n      their district lines to reflect how local populations have changed. This process,\n      called redistricting, is important in ensuring that each City Council Member\n      represents substantially the same number of constituents. How those lines are\n      drawn affects how people are represented.\n    </p>\n    <p>\n      Redistricting also determines which neighborhoods and communities are grouped\n      together into a district. Communities are those with common social or economic\n      interests that should be included within a single district for effective, fair\n      representation. They are best described by those with first\u2010hand knowledge. <strong>We\n      want to hear about your community; you know it best!</strong>\n    </p>\n    <p>\n      <strong>You can also submit your own plan for how to divide the city into five districts.</strong>\n      Every plan submitted to the City will be carefully reviewed and included as part of\n      the public record. For more information,\n      <a href='https://www.rpcity.org/city_hall/administration/city_clerk/city_elections/redistricting' target=_blank>visit this link</a>.\n    </p>\n    <p>\n      To share your map to this page, be sure to select \u201CShare Now\u201D and click on the button \u201CShare to Gallery\u201D.\n    </p>\n  ",
    sbusd: "\n  <p>Welcome to the public mapping page for the Santa Barbara School District (SBUSD) Board of Education. SBUSD is transitioning from at-large elections to by-area elections to be implemented for the November 2022 election. In by-area elections, SBUSD will consist of 5 or 7 voting areas that are roughly equal in population. Board members will be elected from each of the areas only by voters who reside within the respective areas. Board members will be required to reside within the area from which they are elected. For example, Area A\u2019s representative on the SBUSD Board will need to reside within Area A and is only elected by voters who reside within Area A.\n  </p>\n  <p>\n  As part of the creation of voting areas, SBUSD is seeking public input on what these voting areas should look like. To let SBUSD know what you think the maps should look like, you can create your own map utilizing this website or you can take one of the previously created maps and modify it, then submit the map for consideration by the Board of Education. Click <a href=\"https://districtr.org/guide\">here</a> for a tutorial.\n  </p>\n  ",
    pvsd: "\n  <p>\n    Welcome to the public mapping page for the Pleasant Valley School District\n    (\"PVSD\") Board of Education. PVSD is transitioning from at-large elections to\n    by-area elections to be implemented for the November 2022 election. In by-area\n    elections, PVSD will consist of five (5) voting areas that are roughly equal\n    in population. Board members will be elected from each of the areas only by\n    voters who reside within the respective areas. Board members will be required\n    to reside within the area from which they are elected. For example, Area A's\n    representative on the PVSD Board will need to reside within Area A and is\n    only elected by voters who reside within Area A.\n  </p>\n  <p>\n    As part of the creation of voting areas, PVSD is seeking public input on what\n    these voting areas should look like. To let PVSD know what you think the maps\n    should look like, you can create your own map utilizing this website or you\n    can take one of the previously created maps and modify it, then submit the\n    map for consideration by the Board of Education.\n    <a href=\"https://districtr.org/guide\">Click here</a> for a tutorial.\n    Please note that the deadline for submission of public maps is January 27,\n    2022 in order to be considered by PVSD's Board of Education.\n  </p>\n  ",
    "brentwood": "\n    <p>\n      Every ten years, local governments use new United States Census data to redraw\n      their district lines to reflect how local populations have changed. This process,\n      called redistricting, is important in ensuring that each City Council Member\n      represents substantially the same number of constituents. How those lines are\n      drawn affects how people are represented.\n    </p>\n    <p>\n      Redistricting also determines which neighborhoods and communities are grouped\n      together into a district. Communities are those with common social or economic\n      interests that should be included within a single district for effective, fair\n      representation. They are best described by those with first\u2010hand knowledge. <strong>We\n      want to hear about your community; you know it best!</strong>\n    </p>\n    <p>\n      <strong>You can also submit your own plan for how to divide the city into four districts.</strong>\n      Every plan submitted to the City will be carefully reviewed and included as part of\n      the public record. For more information,\n      <a href='https://www.brentwoodca.gov/gov/admin/clerk/redistricting.asp' target=_blank>visit this link</a>.\n    </p>\n    <p>\n      To share your map to this page, be sure to select \u201CShare Now\u201D and click on the button \u201CShare to Gallery\u201D.\n    </p>\n  ",
    sbusd_5: "\n    <p>Welcome to the public mapping page for the Santa Barbara School District (SBUSD) Board of Education. SBUSD is transitioning from at-large elections to by-area elections to be implemented for the November 2022 election. In by-area elections, SBUSD will consist of 5 or 7 voting areas that are roughly equal in population. Board members will be elected from each of the areas only by voters who reside within the respective areas. Board members will be required to reside within the area from which they are elected. For example, Area A\u2019s representative on the SBUSD Board will need to reside within Area A and is only elected by voters who reside within Area A.</p>\n    <p>\n    As part of the creation of voting areas, SBUSD is seeking public input on what these voting areas should look like. To let SBUSD know what you think the maps should look like, you can create your own map utilizing the website below or you can take one of the previously created maps and modify it, then submit the map for consideration by the Board of Education. Click <a href=\"https://districtr.org/guide\">here</a> for a tutorial.\n    </p>\n    ",
    sbusd_7: "\n    <p>Welcome to the public mapping page for the Santa Barbara School District (SBUSD) Board of Education. SBUSD is transitioning from at-large elections to by-area elections to be implemented for the November 2022 election. In by-area elections, SBUSD will consist of 5 or 7 voting areas that are roughly equal in population. Board members will be elected from each of the areas only by voters who reside within the respective areas. Board members will be required to reside within the area from which they are elected. For example, Area A\u2019s representative on the SBUSD Board will need to reside within Area A and is only elected by voters who reside within Area A.</p>\n    <p>\n    As part of the creation of voting areas, SBUSD is seeking public input on what these voting areas should look like. To let SBUSD know what you think the maps should look like, you can create your own map utilizing the website below or you can take one of the previously created maps and modify it, then submit the map for consideration by the Board of Education. Click <a href=\"https://districtr.org/guide\">here</a> for a tutorial.\n    </p>\n    ",
    "millbrae": "\n    <p>\n      The City of Millbrae is in the process of moving from an at-large election\n      system to a by-district election system. To draw these new districts we\n      need to hear from you as it\u2019s important to know about your community so\n      that the district lines can amplify the voices of residents. Learn more\n      on the <a href='https://www.configuremillbrae.org/' target=_blank>Configure Millbrae website</a>.\n    </p>\n    <p>\n      Examples of communities can include neighborhoods, areas where many\n      residents speak the same language, or areas where the residents use the\n      same community facilities. It\u2019s basically any area of the city where\n      people have a common interest that needs a voice in government.\n    </p>\n    <p>\n    <strong>\n      We need your help to build a community map and our new city council map!\n      Please use this tool to identify the boundaries of your community and\n      provide your city council lines.\n    </strong>\n    </p>\n    <p>\n      Every map submitted will be carefully reviewed by professional demographers\n      and decision makers who are charged with drawing the City Council District Map.\n    </p>\n    <p>\n      Get started by clicking the orange or purple button to draw your community of\n      interest or a city council district map. To share your map, click \u201CSave\u201D in the\n      upper right corner of the mapping module. To pin your map to this page, be sure\n      the tag \u201CMillbrae\u201D (any capitalization) is entered.\n    </p>\n  ",
    "draweg": "\n    <p>\n      Every 10 years, a new U.S. Census is conducted, and the population counts are\n      then used for redistricting. For district elections, the City will be divided\n      into four districts. The goal of redistricting is to create a final map with four\n      districts that are relatively equal in total population using the new Census counts.\n    </p>\n    <p>\n      You can track the <a href='http://www.elkgrovecity.org/city_hall/city_government/city_council/redistricting' target=_blank>Redistricting Project discussion</a>\n      on the City website. If anyone needs information or assistance, please contact the City Clerk at\n      <a href='mailto:cityclerk@elkgrovecity.org' target=_blank>cityclerk@elkgrovecity.org</a> or 916-478-2286.\n    </p>\n  ",
    "belmont": "\n    <p>\n      The City of Belmont is in the process of moving from an at-large election\n      system to a by-district election system. To draw these new districts we\n      need to hear from you as it\u2019s important to know about your community so\n      that the district lines can amplify the voices of residents.\n    </p>\n    <p>\n      Examples of communities can include neighborhoods, areas where many\n      residents speak the same language, or areas where the residents use the\n      same community facilities. It\u2019s basically any area of the city where\n      people have a common interest that needs a voice in government.\n    </p>\n    <p>\n    <strong>\n      We need your help to build a community map and our new city council district map!\n      Please use this tool to identify the boundaries of your community and\n      provide your proposed city council district lines.\n    </strong>\n    </p>\n    <p>\n      Every map submitted will be carefully reviewed by professional demographers\n      and decision makers who are charged with drawing the City Council District Map.\n    </p>\n    <p>\n      Get started by clicking the orange or purple button to draw your community of\n      interest or a city council district map. To share your map, click \u201CSave\u201D in the\n      upper right corner of the mapping module. To pin your map to this page, be sure\n      the tag \u201CBelmont\u201D (any capitalization) is entered.\n    </p>\n  ",
    "open_space_authority": "\n    <p>\n      Every 10 years, Californians get the chance to help reshape districts following\n      the decennial U.S. Census. In the Santa Clara Valley Open Space Authority, these\n      electoral districts are called \u201Cdirector divisions.\u201D It\u2019s important to know about\n      communities so that the division lines can amplify the voices of residents.\n    </p>\n    <p>\n      Examples of communities can include cities, neighborhood associations, areas where\n      many residents speak the same language, or even areas where the residents use the\n      same community facilities. It\u2019s basically any part where people have a common interest\n      that needs a voice in government.\n    </p>\n    <p>\n    <strong>\n      We need your help to build a community map and our new director division map! Please use\n      this tool to identify the boundaries of your community and provide a director division map.\n    </strong>\n    </p>\n    <p>\n      Get started by clicking the orange or purple button to draw your community or a\n      board district map. To share your map, click \u201CSave\u201D in the upper right corner of\n      the mapping module. Then click on the \u201CShare to Gallery\u201D green button.\n    </p>\n  ",
    "pimaaz": "\n    <p>\n      Welcome to Pima County\u2019s online tool for the 2022 County Supervisorial redistricting process.\n    </p>\n    <p>\n      Every 10 years the Pima County Board of Supervisors is required to redistrict (redraw\n      district boundaries) for the purpose of balancing the population of each district to\n      within 10 percent. Using 2020 Census population figures and the federally-accepted\n      calculation method (difference between the percentage deviations of the highest- and\n      lowest-populated districts from ideal population equality), the deviation of the\n      current districts is 15 percent. The Pima Community College Governing Board uses the\n      same district boundaries as the Board of Supervisors and will therefore also be impacted\n      by changes to district boundaries.\n    </p>\n    <p>\n      The Board of Supervisors appointed a Redistricting Advisory Committee to hold public\n      hearings and develop and recommend a map or maps to the Board by April 30, 2022. The\n      Board anticipates approving new district boundaries by May 30, 2022, well in advance\n      of the required July 1 deadline. For more information about Pima County Redistricting,\n      including Committee meeting dates, other opportunities to provide comments, and how to\n      find your district, please visit the County redistricting website\n      <a href='http://www.pima.gov/countyredistricting' target=_blank>here</a>.\n    </p>\n    <p>\n      This online mapping tool allows Committee members, the public and other stakeholders to\n      redraw district boundaries using voter precincts as building blocks, and submit maps of\n      proposed new district configurations for consideration. Users will be able to view\n      information about population, demographics, and registered voters by party registration.\n      These data come from the 2020 Census and the Pima County Recorder\u2019s Office (Recorder\u2019s\n      voter registration data as of December 6, 2021). Additional data for Pima County is\n      available on <a href='https://districtr.org/arizona' target=_blank>Arizona\u2019s Districtr page</a>,\n      including election results by precinct for 2018 statewide offices.\n    </p>\n  ",
    "west_sacramento": "\n    <p>\n      The City of West Sacramento is in the process of moving from an at-large election system to a\n      by-district election system. To draw these new districts we need to hear from you as it\u2019s\n      important to know about your community so that the district lines can amplify the voices of\n      residents. Learn more on our\n      <a href='https://www.cityofwestsacramento.org/government/city-clerk-s-office/district-election-1336' target=_blank>website</a>.\n    </p>\n    <p>\n      Examples of communities can include neighborhoods, areas where many residents speak the same\n      language, or areas where the residents use the same community facilities. It\u2019s basically any\n      area of the city where people have a common interest that needs a voice in government.\n    </p>\n    <p>\n      We need your help to build a community map and our new city council map! Please use this tool\n      to identify the boundaries of your community and provide draft city council lines.\n    </p>\n    <p>\n      Every map submitted will be carefully reviewed by professional demographers and decision\n      makers who are charged with drawing the City Council District Map.\n    </p>\n    <p>\n      Get started by clicking the orange or purple button to draw your community of interest or a\n      city council district map. To share your map, click \u201CSave\u201D in the upper right corner of the\n      mapping module, select \u201CShare Now\u201D, and then click on the \u201CShare to Gallery\u201D button. A \u201CTeam\u201D\n      or \u201CPlan Name\u201D is optional.\n    </p>\n  ",
    "diamond_bar": "\n    <p>\n      The City of Diamond Bar is in the process of moving from an at-large election system to a\n      by-district election system. To draw these new districts we need to hear from you as it\u2019s\n      important to know about your community so that the district lines can amplify the voices of\n      residents. Learn more at <a href='https://www.diamondbarca.gov/1070/City-Council-Districting' target=_blank>Districting Diamond Bar</a>.\n    </p>\n    <p>\n      Examples of communities can include neighborhoods, areas where many residents speak the same\n      language, or areas where the residents use the same community facilities. It\u2019s basically any\n      area of the city where people have a common interest that needs a voice in government.\n    </p>\n    <p>\n      <strong>We need your help to build a community map and our new city council district map!\n      Please use this tool to identify the boundaries of your community and provide your proposed\n      city council district lines.</strong>\n    </p>\n    <p>\n      Every map submitted will be carefully reviewed by professional demographers and decision\n      makers who are charged with drawing the City Council District Map.\n    </p>\n    <p>\n      Get started by clicking the orange or purple button to draw your community of interest or\n      a city council district map. To share your map, click \u201CSave\u201D in the upper right corner of\n      the mapping module. To pin your map to this page, be sure the tag \u201CDiamond Bar\u201D (any\n      capitalization) is entered.\n    </p>\n  ",
    "drawabq": "\n    <p>\n      Welcome to the City of Albuquerque\u2019s redistricting 2022 public mapping portal!\n    </p>\n    <p>\n      Redistricting is the process of redrawing city council district boundaries based on the most\n      recent population information about the City of Albuquerque. The goal of redistricting is to\n      create nine City Council districts with substantially equal population.\n    </p>\n    <p>\n      Albuquerque\u2019s City Charter creates a redistricting committee of community members appointed\n      by City Councilors to represent each of the nine City Council districts. You can find more\n      information or provide written comment on the City\u2019s redistricting website at\n      <a href='https://www.cabq.gov/2022redistricting' target=_blank>www.cabq.gov/2022redistricting</a>.\n    </p>\n    <p>\n      The public can participate in the redistricting process by drawing maps and communities of\n      interest using the tools on this site to draw your own plan, update existing concepts under\n      committee consideration, or let the committee know about your community.\n    </p>\n    <p>\n      In order for a plan to be considered by the committee, make sure your map fits the following\n      criteria.\n      <ul>\n        <li>\n          All districts are contiguous \u2013 meaning that all precincts assigned to a district are\n          touching at least one other precinct assigned to that district.\n        </li>\n        <li>\n          The maximum population deviation does not exceed 5.00% (i.e. does not exceed +/- 5%\n          deviation from the ideal population).\n        </li>\n      </ul>\n    </p>\n    <p>\n      The committee will consider a plan (that meets the above criteria) or community of interest\n      submitted on this site, if it is introduced by the creator during the public comment section\n      of a meeting, or if it is introduced via the Public Comments page on the city\u2019s redistricting website. If submitting\n      a plan or community of interest on the city\u2019s website (<a href='https://www.cabq.gov/2022redistricting' target=_blank>www.cabq.gov/2022redistricting</a>),\n      please include the plan URL (plan link) in the \u201CYour Comments\u201D box.\n    </p>\n    <p>\n      <strong>UPDATE June 8, 2022:</strong> The Albuquerque Redistricting Committee\n      is no longer accepting new submissions given the upcoming deadline for\n      providing recommendations to the City Council.\n    </p>\n  ",
    "worcestersd": "\n    <p>\n      Welcome to the public mapping page for the City of Worcester's School Committee\n      Districts.\n    </p>\n    <p>\n      In 2022, the city will be transitioning from an at-large electoral system\n      to districted elections. This change was prompted by consent decree as part\n      of voting rights litigation.\n    </p>\n    <p>\n      As the city finalizes the new district boundaries, <strong>we invite you to\n      draw your own district plan or open one of the new maps proposed by the outside\n      expert as a starting point</strong>.\n    </p>\n    <p>\n      When your map is complete, click \"Save\" in the upper right corner of the mapping\n      module. To pin your own map to the gallery on this page, be sure that the\n      tag <strong>\"worcestersd\"</strong> is visible in the save window. For a detailed\n      how-to guide for Districtr, visit our <a href=https://districtr.org/guide>Guide\n      page.</a>\n    </p>\n  ",
    "nyc2022": "\n    <p>\n      Every ten years, local governments use new United States Census data to\n      redraw their district lines to reflect how local populations have changed.\n      This process, called redistricting, is important in ensuring that each City\n      Councilmember represents about the same number of constituents. Each newly\n      drawn New York City Council District will include between 168,000 to 177,000\n      people.\n    </p>\n    <p>\n      The 51 New York City Council Districts will be drawn by a Districting\n      Commission, which is composed of 15 Commissioners that reflect the geographic\n      and ethnic diversity of New York City. Five of the Commissioners were appointed\n      by the City Council's Majority Caucus, three were appointed by the City\n      Council's Minority Caucus, and Mayor Adams appointed the remaining seven.\n      To learn more about the Commission, please visit their\n      <a href=https://www1.nyc.gov/site/districting/index.page>website.</a>\n    </p>\n    <p>\n      Redistricting determines which neighborhoods and communities are grouped\n      together into a City Council District for purposes of electing a Councilmember.\n      In addition to Census data, the Districting Commission will be holding a\n      series of public hearings to discuss communities of interest.\n      <a href=https://www1.nyc.gov/site/districting/public-meetings-hearings/meetings.page>Click here</a>\n      to view the hearing schedule.\n    </p>\n    <p>\n      You can draw your communities of interest using Districtr. Examples of\n      communities of interest can include neighborhood associations, areas where\n      many residents speak the same language, or even areas where the residents\n      use the same community facilities or resources. Communities can also be\n      defined by people who share common interests that need a voice in government.\n    </p>\n    <p><strong>\n      We need your help to build a community map and our new City Council District\n      map! Please use this tool to identify the boundaries of your community and\n      provide your proposed city council district lines.\n    </strong></p>\n    <p>\n      Every map submitted to the New York City Districting Commission will be\n      carefully reviewed and included as part of the public record.\n    </p>\n    <p>\n      Get started by clicking the orange button to draw your community or the\n      purple button to draw your city council map. To share your map, click\n      \"Save\" in the upper right corner of the mapping module.\n    </p>\n    <p>\n      For a detailed how-to guide of Districtr, visit the\n      <a href=https://districtr.org/guide>User Guide</a>.\n    </p>\n  "
  };
  var longAbout = {
    'cc-nm-abq': ["MGGG has partnered with Common Cause, a nonprofit good-government organization championing voting rights and redistricting reform, to collect Communities of Interest in Albuquerque, New Mexico. Participants in Albuquerque will join the event virtually to engage in a discussion about community led by National Redistricting Manager, Dan Vicuña, and Census and Mass Incarceration Project Manager, Keshia Morris.", "The team will use Districtr, a free webtool developed by MGGG at Tufts University, to map important places and community boundaries. The data for this event were obtained from the US Census Bureau. The block group shapefiles were downloaded from the Census's TIGER/Line Shapefiles, and demographic information from the 2010 Decennial Census was downloaded at the block level from the Census API.", "We welcome questions and inquiries about the tool and our work. Reach out to us at <a href=\"mailto:contact@mggg.org\">contact@mggg.org</a> if you are interested in working with us."],
    centralsan: ["The <a href='https://www.centralsan.org/'>Central Contra Costa Sanitary District</a> (Central San) is transitioning from an at-large election system to an area-based election system. Under the current at-large election system, all five members of the Board of Directors are chosen by constituents from the District’s entire service area. Under area-based elections, the District will be divided into five separate election areas—called “divisions”—and voters residing in each area will select one representative to serve on the Board.", "Central San invites all residents of the District to provide input on the options under consideration, and to submit their own maps for consideration."],
    mesaaz: ["This mapping module uses the <strong>2020 Decennial Census</strong> population with processing by Redistricting Partners. The data was prepared by Redistricting Partners. For the last decade, Redistricting Partners has supported cities, community college districts, school boards, hospital districts, water boards, and other special districts. To learn more about their team <a href='https://redistrictingpartners.com/about/'>click here</a>."],
    riverside: ["This mapping module uses the <strong>official Redistricting Database for California</strong>, published by the Statewide Database with processing by Redistricting Partners. For the last decade, Redistricting Partners has supported cities, community college districts, school boards, hospital districts, water boards, and other special districts. To learn more about their team <a href='https://redistrictingpartners.com/about/'>click here</a>."],
    slo_county: ["This mapping module uses the <strong>official Redistricting Database for California</strong>, published by the Statewide Database with processing by Redistricting Partners. For the last decade, Redistricting Partners has supported cities, community college districts, school boards, hospital districts, water boards, and other special districts. To learn more about their team <a href='https://redistrictingpartners.com/about/'>click here</a>."],
    long_beach: ["This mapping module uses the <strong>official Redistricting Database for California</strong>, published by the Statewide Database with processing by Redistricting Partners. For the last decade, Redistricting Partners has supported cities, community college districts, school boards, hospital districts, water boards, and other special districts. To learn more about their team <a href='https://redistrictingpartners.com/about/'>click here</a>."],
    imperial_county: ["This mapping module uses the <strong>official Redistricting Database for California</strong>, published by the Statewide Database with processing by Redistricting Partners. For the last decade, Redistricting Partners has supported cities, community college districts, school boards, hospital districts, water boards, and other special districts. To learn more about their team <a href='https://redistrictingpartners.com/about/'>click here</a>."],
    sutter_county: ["This mapping module uses the <strong>official Redistricting Database for California</strong>, published by the Statewide Database with processing by Redistricting Partners. For the last decade, Redistricting Partners has supported cities, community college districts, school boards, hospital districts, water boards, and other special districts. To learn more about their team <a href='https://redistrictingpartners.com/about/'>click here</a>."],
    ojai: ["This mapping module displays the Legacy Format of the <strong>2020 Census Data</strong> released by the U.S. Census Bureau on August 12, 2021. The Statewide Database is currently working on the reallocation of the state prisoner population. This prisoner population reallocation is estimated to take nearly a full month and the final 2020 Census Data will be available for official use by September 20, 2021. Once the 2020 Census Data is finalized, this mapping module will be updated.<br/><br/>The data is prepared by Redistricting Partners. For the last decade, Redistricting Partners has supported cities, community college districts, school boards, hospital districts, water boards, and other special districts. To learn more about their team <a href='https://redistrictingpartners.com/about/'>click here</a>."],
    foothilldeanza: ["This mapping module displays the Legacy Format of the <strong>2020 Census Data</strong> released by the U.S. Census Bureau on August 12, 2021. The Statewide Database is currently working on the reallocation of the state prisoner population. This prisoner population reallocation is estimated to take nearly a full month and the final 2020 Census Data will be available for official use by September 20, 2021. Once the 2020 Census Data is finalized, this mapping module will be updated.<br/><br/>The data is prepared by Redistricting Partners. For the last decade, Redistricting Partners has supported cities, community college districts, school boards, hospital districts, water boards, and other special districts. To learn more about their team <a href='https://redistrictingpartners.com/about/'>click here</a>."],
    napa_county: ["This mapping module uses the <strong>official Redistricting Database for California</strong>, published by the Statewide Database with processing by Redistricting Partners. For the last decade, Redistricting Partners has supported cities, community college districts, school boards, hospital districts, water boards, and other special districts. To learn more about their team <a href='https://redistrictingpartners.com/about/'>click here</a>."],
    napa_college: ["This mapping module uses the <strong>official Redistricting Database for California</strong>, published by the Statewide Database with processing by Redistricting Partners. For the last decade, Redistricting Partners has supported cities, community college districts, school boards, hospital districts, water boards, and other special districts. To learn more about their team <a href='https://redistrictingpartners.com/about/'>click here</a>."],
    napa_boe: ["This mapping module uses the <strong>official Redistricting Database for California</strong>, published by the Statewide Database with processing by Redistricting Partners. For the last decade, Redistricting Partners has supported cities, community college districts, school boards, hospital districts, water boards, and other special districts. To learn more about their team <a href='https://redistrictingpartners.com/about/'>click here</a>."],
    livermore: ["This mapping model uses the official Redistricting Database of California, published by the Statewide Database with processing by Wagaman Strategies."],
    modesto: ["This mapping model uses the <strong>official Redistricting Database of California</strong>, published by the Statewide Database with processing by Redistricting Partners. For the last decade, Redistricting Partners has supported cities, community college districts, school boards, hospital districts, water boards, and other special districts. To learn more about their team <a href='https://redistrictingpartners.com/about/'>click here</a>."],
    tuolumne_county: ["This mapping model displays the official Redistricting Database of California, published by the Statewide Database, on 2020 Blocks. Per California state law, the Statewide Database reallocates incarcerated populations to their last known address. For more information, please visit the Statewide Database’s <a href='https://statewidedatabase.org/redistricting2021/'>website</a>. The data was processed by Redistricting Partners. To learn more about their team <a href='https://redistrictingpartners.com/about/'>click here</a>."],
    city_of_napa: ["This mapping module uses the <strong>official Redistricting Database for California</strong>, published by the Statewide Database with processing by Redistricting Partners. For the last decade, Redistricting Partners has supported cities, community college districts, school boards, hospital districts, water boards, and other special districts. To learn more about their team <a href='https://redistrictingpartners.com/about/'>click here</a>.", "<h2><small>Quick Links to Other Napa County Agencies Participating in the Redistricting Process</small></h2><br/>\
   <ul><li><a href='/event/Napa_County'>Napa County</a></li>\
   <li><a href='/event/Napa_BOE'>Napa County Board of Education</a></li>\
   <li><a href='/event/Napa_College'>Napa Valley College</a></li></ul>"],
    kern_county: ["This mapping module uses the <strong>official Redistricting Database for California</strong>, published by the Statewide Database with processing by Redistricting Partners. For the last decade, Redistricting Partners has supported cities, community college districts, school boards, hospital districts, water boards, and other special districts. To learn more about their team <a href='https://redistrictingpartners.com/about/'>click here</a>."],
    san_joaquin: ["This mapping module uses the <strong>official Redistricting Database for California</strong>, published by the Statewide Database with processing by Redistricting Partners. For the last decade, Redistricting Partners has supported cities, community college districts, school boards, hospital districts, water boards, and other special districts. To learn more about their team <a href='https://redistrictingpartners.com/about/'>click here</a>."],
    san_mateo_city: ["This mapping module uses the <strong>official Redistricting Database for California</strong>, published by the Statewide Database with processing by Redistricting Partners. For the last decade, Redistricting Partners has supported cities, community college districts, school boards, hospital districts, water boards, and other special districts. To learn more about their team <a href='https://redistrictingpartners.com/about/'>click here</a>."],
    oakland: ["This mapping module uses the <strong>2020 Census Data</strong> population based on the legacy format dataset with processing by Redistricting Partners. The Statewide Database is currently working on the reallocation of the state prisoner population. Once the 2020 Census Data is finalized, this mapping module will be updated.<br/><br/>\
  For the last decade, Redistricting Partners has supported cities, community college districts, school boards, hospital districts, water boards, and other special districts. To learn more about their team <a href='https://redistrictingpartners.com/about/'>click here</a>."],
    martinez: ["This mapping module uses the <strong>official Redistricting Database for California</strong>, published by the Statewide Database with processing by Redistricting Partners. For the last decade, Redistricting Partners has supported cities, community college districts, school boards, hospital districts, water boards, and other special districts. To learn more about their team <a href='https://redistrictingpartners.com/about/'>click here</a>."],
    carpinteria: ["\n    This mapping module displays 2020 Decennial Census population, adjusted per California\n    state law to reallocate incarcerated populations to their last known residential address,\n    on Census blocks. This data was processed Redistricting Partners. For the last decade,\n    Redistricting Partners has supported cities, community college districts, school boards,\n    hospital districts, water boards, and other special districts. To learn more about their\n    team <a href='https://redistrictingpartners.com/about/' target=_blank>click here</a>.\n  "],
    butte_county: ["This mapping module uses the <strong>official Redistricting Database for California</strong>, published by the Statewide Database with processing by Redistricting Partners. For the last decade, Redistricting Partners has supported cities, community college districts, school boards, hospital districts, water boards, and other special districts. To learn more about their team <a href='https://redistrictingpartners.com/about/'>click here</a>."],
    humboldt_county: ["This mapping module uses the <strong>official Redistricting Database for California</strong>, published by the Statewide Database with processing by Redistricting Partners. For the last decade, Redistricting Partners has supported cities, community college districts, school boards, hospital districts, water boards, and other special districts. To learn more about their team <a href='https://redistrictingpartners.com/about/'>click here</a>."],
    santa_clara_water: ["This mapping module displays 2015-2019 American Community Survey data disaggregated onto Census blocks. The data was prepared by Redistricting Partners. For the last decade, Redistricting Partners has supported cities, community college districts, school boards, hospital districts, water boards, and other special districts. To learn more about their team <a href='https://redistrictingpartners.com/about/'>click here</a>."],
    mapsofla: ["This mapping module uses the <strong>official Redistricting Database for California</strong>, published by the Statewide Database with processing by Redistricting Partners. For the last decade, Redistricting Partners has supported cities, community college districts, school boards, hospital districts, water boards, and other special districts. To learn more about their team <a href='https://redistrictingpartners.com/about/'>click here</a>."],
    san_jose: ["This mapping module uses the <strong>official Redistricting Database for California</strong>, published by the Statewide Database with processing by Redistricting Partners. For the last decade, Redistricting Partners has supported cities, community college districts, school boards, hospital districts, water boards, and other special districts. To learn more about their team <a href='https://redistrictingpartners.com/about/'>click here</a>."],
    siskiyou: ["This mapping module uses the <strong>official Redistricting Database for California</strong>, published by the Statewide Database with processing by Redistricting Partners. For the last decade, Redistricting Partners has supported cities, community college districts, school boards, hospital districts, water boards, and other special districts. To learn more about their team <a href='https://redistrictingpartners.com/about/'>click here</a>."],
    redwood_city: ["This mapping module uses the <strong>official Redistricting Database for California</strong>, published by the Statewide Database with processing by Redistricting Partners. For the last decade, Redistricting Partners has supported cities, community college districts, school boards, hospital districts, water boards, and other special districts. To learn more about their team <a href='https://redistrictingpartners.com/about/'>click here</a>."],
    cityofdallas: ["This mapping module uses the 2020 Decennial Census population processed by ARCBridge Consulting.\
    To learn more about ARCBridge – visit <a href='https://www.arcbridge.com' target='_blank'>their website</a>."],
    santa_ana: ["This mapping module uses the <strong>official Redistricting Database for California</strong>, published by the Statewide Database with processing by Redistricting Partners. For the last decade, Redistricting Partners has supported cities, community college districts, school boards, hospital districts, water boards, and other special districts. To learn more about their team <a href='https://redistrictingpartners.com/about/'>click here</a>."],
    ventura_county: ["This mapping module uses the <strong>official Redistricting Database for California</strong>, published by the Statewide Database with processing by Redistricting Partners. For the last decade, Redistricting Partners has supported cities, community college districts, school boards, hospital districts, water boards, and other special districts. To learn more about their team <a href='https://redistrictingpartners.com/about/'>click here</a>."],
    yolo_county: ["This mapping module uses the <strong>official Redistricting Database for California</strong>, published by the Statewide Database with processing by Redistricting Partners. For the last decade, Redistricting Partners has supported cities, community college districts, school boards, hospital districts, water boards, and other special districts. To learn more about their team <a href='https://redistrictingpartners.com/about/'>click here</a>."],
    solano_county: ["This mapping module uses the <strong>official Redistricting Database for California</strong>, published by the Statewide Database with processing by Redistricting Partners. For the last decade, Redistricting Partners has supported cities, community college districts, school boards, hospital districts, water boards, and other special districts. To learn more about their team <a href='https://redistrictingpartners.com/about/'>click here</a>."],
    santa_clara_county: ["This mapping module displays the Legacy Format of the 2020 Census Data released by the U.S. Census Bureau on August 12, 2021. The Statewide Database is currently working on the reallocation of the state prisoner population. This prisoner population reallocation is estimated to take nearly a full month and the final 2020 Census Data will be available for official use by September 23, 2021. Once the 2020 Census Data is finalized, this mapping module will be updated.\
    <br/><br/>\
    The data was prepared by Redistricting Partners. For the last decade, Redistricting Partners has supported cities, community college districts, school boards, hospital districts, water boards, and other special districts. To learn more about their team <a href='https://redistrictingpartners.com/about/'>click here</a>."],
    prjusd: ["This mapping module displays 2019 American Community Survey data disaggregated onto Census blocks. The data was prepared by <a href='https://www.coopstrategies.com' target='_blank'>Cooperative Strategies</a>. Cooperative Strategies is a comprehensive planning and demographics firm that has been retained by the School District to assist in its transition from at-large to by-area elections. Over the last decade, Cooperative Strategies has assisted more than 50 school districts across California draw their voting areas."],
    yumasup: ["Yuma County Board of Supervisor District Boundaries must be redrawn every 10 years using U.S. Census data in order to make the five districts as equal in population as possible and that each member represents about the same number of constituents. \
    The County encourages residents to participate by suggesting neighborhood and community of interest maps of areas that should be kept undivided, and full five-district map suggestions for the whole county.", "This mapping module displays population based on the 2020 Decennial Census blocks. \
    The data was prepared by National Demographics Corporation. To learn more about their team click <a href='https://www.ndcresearch.com/about-us/' target='_blank'>here</a>."],
    yumaawc: ["Arizona Western College Board of Trustees District Boundaries must be redrawn every 10 years using U.S. Census data in order to make the three Yuma County districts as equal in population as possible and that each member represents about the same number of constituents. \
    We encourage residents to participate by suggesting neighborhood and community of interest maps of areas that should be kept undivided, and full three-district map suggestions.", "This mapping module displays population based on the 2020 Decennial Census blocks. \
    The data was prepared by National Demographics Corporation. To learn more about their team click <a href='https://www.ndcresearch.com/about-us/' target='_blank'>here</a>."],
    saccounty: ["Sacramento County Board of Supervisor District Boundaries must be redrawn every 10 years using U.S. Census data in order to make the \
    five districts as equal in population as possible so that each member represents about the same number of constituents. The County encourages \
    residents to participate by suggesting neighborhood and community of interest maps of areas that should be kept undivided, and full five-district \
    map suggestions for the whole county. For more information, please visit the County’s <a href='https://www.saccounty.net/Redistricting/' target='_blank'>website</a>.", "This mapping module displays 2020 Decennial Census population, adjusted per California state law to reallocate incarcerated populations to their \
    last known residential address, on Census blocks. For more information, please visit the Statewide Database’s <a href='https://statewidedatabase.org/redistricting2021/' target=_blank>website</a>. The “Additional demographics” \
    in the module displays 2019 ACS data on the Census block groups. The data was prepared by National Demographics Corporation. To learn more about their \
    team click <a href='https://www.ndcresearch.com/about-us/' target=_blank>here</a>."],
    sonomaco: ["Sonoma County Board of Supervisor District Boundaries must be redrawn every 10 years using U.S. Census data in order to make the five districts as equal in population as possible and that each member represents about the same number of constituents. \
    The County encourages residents to participate by suggesting neighborhood and community of interest maps of areas that should be kept undivided, and full five-district map suggestions for the whole county.", "This mapping module displays 2020 Decennial Census population, adjusted per California state law to reallocate incarcerated populations to their \
    last known residential address, on Census blocks. For more information, please visit the Statewide Database’s <a href='https://statewidedatabase.org/redistricting2021/' target=_blank>website</a>. The “Additional demographics” \
    in the module, displays 2019 ACS data on the Census block groups. The data was prepared by National Demographics Corporation. To learn more about their \
    team click <a href='https://www.ndcresearch.com/about-us/' target=_blank>here</a>."],
    pasadena2021: ["City of Pasadena City Council District Boundaries must be redrawn every 10 years using U.S. Census data in order to make the seven districts as equal in population as possible and that each member represents about the same number of constituents. \
    The City encourages residents to participate by suggesting neighborhood and community of interest maps of areas that should be kept undivided, and full seven-district map suggestions for the whole city.", "This mapping module displays 2020 Decennial Census population, adjusted per California state law to reallocate incarcerated populations to their \
    last known residential address, on Census blocks. For more information, please visit the Statewide Database’s <a href='https://statewidedatabase.org/redistricting2021/' target=_blank>website</a>. The “Additional demographics” \
    in the module displays 2019 ACS data on the Census block groups. The data was prepared by National Demographics Corporation. To learn more about their \
    team click <a href='https://www.ndcresearch.com/about-us/' target=_blank>here</a>."],
    sunnyvale2021: ["City of Sunnyvale City Council District Boundaries must be redrawn every 10 years using U.S. Census data in order to make the six districts as equal in population as possible and that each member represents about the same number of constituents. \
    The City encourages residents to participate by suggesting neighborhood and community of interest maps of areas that should be kept undivided, and full six-district map suggestions for the whole city.", "This mapping module displays projected 2020 population based on the American Community Survey data disaggregated onto Census blocks. \
    The data was prepared by National Demographics Corporation. To learn more about their team click <a href='https://www.ndcresearch.com/about-us/' target='_blank'>here</a>."],
    laverne: ["City of La Verne City Council District Boundaries must be redrawn every 10 years using U.S. Census data in order to make the five districts as equal in population as possible and that each member represents about the same number of constituents. \
    The City encourages residents to participate by suggesting neighborhood and community of interest maps of areas that should be kept undivided, and full five-district map suggestions for the whole city.", "This mapping module displays 2020 Decennial Census population, adjusted per California state law to reallocate incarcerated populations to their \
    last known residential address, on Census blocks. For more information, please visit the Statewide Database’s <a href='https://statewidedatabase.org/redistricting2021/' target=_blank>website</a>. The “Additional demographics” \
    in the module displays 2019 ACS data on the Census block groups. The data was prepared by National Demographics Corporation. To learn more about their \
    team click <a href='https://www.ndcresearch.com/about-us/' target=_blank>here</a>."],
    pomonaca: ["City of Pomona City Council District Boundaries must be redrawn every 10 years using U.S. Census data in order to make the six districts as equal in population as possible, so that each member represents about the same number of constituents. \
    The City encourages residents to participate by suggesting neighborhood and community of interest maps of areas that should be kept undivided, and full six-district map suggestions for the whole city.", "This mapping module displays data processed by National Demographics Corporation (NDC). To learn more about their team click <a href='https://www.ndcresearch.com/about-us/' target=_blank>here</a>. \
    The module displays 2020 Decennial Census population, adjusted per California state law to reallocate incarcerated populations to their last known residential address, on Census Blocks. \
    For more information, please visit the Statewide Database’s <a href='https://statewidedatabase.org/redistricting2021/' target=_blank>website</a>.", "The Citizen Voting Age Population (CVAP) data are collected by the U.S. Census Bureau in its annual American Community Survey on Census Block Groups. NDC disaggregates that Block Group \
    level geography down to Census Block geography based on each Block's share of both the Block Group's total population and each racial/ethnic group's population in the Block Group. The \
    “Additional demographics” in the module displays 2019 ACS data on the Block Groups."],
    richmondca: ["City of Richmond City Council District Boundaries must be redrawn every 10 years using U.S. Census data in order to make the six districts as equal in population as possible and that each member represents about the same number of constituents. \
    The City encourages residents to participate by suggesting neighborhood and community of interest maps of areas that should be kept undivided, and full six-district map suggestions for the whole city.", "This mapping module displays projected 2020 population based on the American Community Survey data disaggregated onto Census blocks. \
    The data was prepared by National Demographics Corporation. To learn more about their team click <a href='https://www.ndcresearch.com/about-us/' target='_blank'>here</a>."],
    elcajon: ["City of El Cajon City Council District Boundaries must be redrawn every 10 years using U.S. Census data in order to make the four districts as equal in population as possible, so that each member represents about the same number of constituents. \
    The City encourages residents to participate by suggesting neighborhood and community of interest maps of areas that should be kept undivided, and full four-district map suggestions for the whole city.", "This mapping module displays data processed by National Demographics Corporation (NDC). To learn more about their team click <a href='https://www.ndcresearch.com/about-us/' target=_blank>here</a>. \
    The module displays 2020 Decennial Census population, adjusted per California state law to reallocate incarcerated populations to their last known residential address, on Census Blocks. \
    For more information, please visit the Statewide Database’s <a href='https://statewidedatabase.org/redistricting2021/' target=_blank>website</a>.", "The Citizen Voting Age Population (CVAP) data are collected by the U.S. Census Bureau in its annual American Community Survey on Census Block Groups. NDC disaggregates that Block Group \
    level geography down to Census Block geography based on each Block's share of both the Block Group's total population and each racial/ethnic group's population in the Block Group. The \
    “Additional demographics” in the module displays 2019 ACS data on the Block Groups."],
    carlsbad2021: ["City of Carlsbad City Council District Boundaries must be redrawn every 10 years using U.S. Census data in order to make the four districts as equal in population as possible and that each member represents about the same number of constituents. \
    The City encourages residents to participate by suggesting neighborhood and community of interest maps of areas that should be kept undivided, and full four-district map suggestions for the whole city.", "This mapping module displays data processed by National Demographics Corporation (NDC). To learn more about their team click <a href='https://www.ndcresearch.com/about-us/' target=_blank>here</a>. \
    The module displays 2020 Decennial Census population, adjusted per California state law to reallocate incarcerated populations to their last known residential address, on Census Blocks. \
    For more information, please visit the Statewide Database’s <a href='https://statewidedatabase.org/redistricting2021/' target=_blank>website</a>.", "The Citizen Voting Age Population (CVAP) data are collected by the U.S. Census Bureau in its annual American Community Survey on Census Block Groups. NDC disaggregates that Block Group \
    level geography down to Census Block geography based on each Block's share of both the Block Group's total population and each racial/ethnic group's population in the Block Group. The \
    “Additional demographics” in the module displays 2019 ACS data on the Block Groups."],
    encinitas2021: ["City of Encinitas City Council District Boundaries must be redrawn every 10 years using U.S. Census data in order to make the four districts as equal in population as possible, so that each member represents about the same number of constituents. \
    The City encourages residents to participate by suggesting neighborhood and community of interest maps of areas that should be kept undivided, and full four-district map suggestions for the whole city.", "This mapping module displays data processed by National Demographics Corporation (NDC). To learn more about their team click <a href='https://www.ndcresearch.com/about-us/' target=_blank>here</a>. \
    The module displays 2020 Decennial Census population, adjusted per California state law to reallocate incarcerated populations to their last known residential address, on Census Blocks. \
    For more information, please visit the Statewide Database’s <a href='https://statewidedatabase.org/redistricting2021/' target=_blank>website</a>.", "The Citizen Voting Age Population (CVAP) data are collected by the U.S. Census Bureau in its annual American Community Survey on Census Block Groups. NDC disaggregates that Block Group \
    level geography down to Census Block geography based on each Block's share of both the Block Group's total population and each racial/ethnic group's population in the Block Group. The \
    “Additional demographics” in the module displays 2019 ACS data on the Block Groups."],
    bp2021: ["City of Buena Park City Council District Boundaries must be redrawn every 10 years using U.S. Census data in order to make the five districts as equal in population as possible, so that each member represents about the same number of constituents. \
    The City encourages residents to participate by suggesting neighborhood and community of interest maps of areas that should be kept undivided, and full five-district map suggestions for the whole city.", "This mapping module displays data processed by National Demographics Corporation (NDC). To learn more about their team click <a href='https://www.ndcresearch.com/about-us/' target=_blank>here</a>. \
    The module displays 2020 Decennial Census population, adjusted per California state law to reallocate incarcerated populations to their last known residential address, on Census Blocks. \
    For more information, please visit the Statewide Database’s <a href='https://statewidedatabase.org/redistricting2021/' target=_blank>website</a>.", "The Citizen Voting Age Population (CVAP) data are collected by the U.S. Census Bureau in its annual American Community Survey on Census Block Groups. NDC disaggregates that Block Group \
    level geography down to Census Block geography based on each Block's share of both the Block Group's total population and each racial/ethnic group's population in the Block Group. The \
    “Additional demographics” in the module displays 2019 ACS data on the Block Groups."],
    hmb2021: ["City of Half Moon Bay City Council District Boundaries must be redrawn every 10 years using U.S. Census data in order to make the four districts as equal in population as possible and that each member represents about the same number of constituents. \
    The City encourages residents to participate by suggesting neighborhood and community of interest maps of areas that should be kept undivided, and full four-district map suggestions for the whole city.", "This mapping module displays projected 2020 population based on the American Community Survey data disaggregated onto Census blocks. \
    The data was prepared by National Demographics Corporation. To learn more about their team click <a href='https://www.ndcresearch.com/about-us/' target='_blank'>here</a>."],
    stockton2021: ["City of Stockton City Council District Boundaries must be redrawn every 10 years using U.S. Census data in order to make the six districts as equal in population as possible and that each member represents about the same number of constituents. \
    The City encourages residents to participate by suggesting neighborhood and community of interest maps of areas that should be kept undivided, and full six-district map suggestions for the whole city.", "This mapping module displays 2020 Decennial Census population, adjusted per California state law to reallocate incarcerated populations to their \
    last known residential address, on Census blocks. For more information, please visit the Statewide Database’s <a href='https://statewidedatabase.org/redistricting2021/' target=_blank>website</a>. The “Additional demographics” \
    in the module, displays 2019 ACS data on the Census block groups. The data was prepared by National Demographics Corporation. To learn more about their \
    team click <a href='https://www.ndcresearch.com/about-us/' target=_blank>here</a>."],
    lodi2021: ["City of Lodi City Council District Boundaries must be redrawn every 10 years using U.S. Census data in order to make the five districts as equal in population as possible and that each member represents about the same number of constituents. \
    The City encourages residents to participate by suggesting neighborhood and community of interest maps of areas that should be kept undivided, and full five-district map suggestions for the whole city.", "This mapping module displays projected 2020 population based on the American Community Survey data disaggregated onto Census blocks. \
    The data was prepared by National Demographics Corporation. To learn more about their team click <a href='https://www.ndcresearch.com/about-us/' target='_blank'>here</a>."],
    glendale2021: ["City of Glendale City Council District Boundaries must be redrawn every 10 years using U.S. Census data in order to make the six districts as equal in population as possible and that each member represents about the same number of constituents. \
    The City encourages residents to participate by suggesting neighborhood and community of interest maps of areas that should be kept undivided, and full six-district map suggestions for the whole city.", "This mapping module displays population based on the 2020 Decennial Census and 2019 ACS for CVAP. \
    The data was prepared by National Demographics Corporation. To learn more about their team click <a href='https://www.ndcresearch.com/about-us/' target='_blank'>here</a>."],
    marinco: ["Marin County District Boundaries must be redrawn every 10 years using U.S. Census data in order to make the five districts as equal in population as possible and that each member represents about the same number of constituents. \
    The County encourages residents to participate by suggesting neighborhood and community of interest maps of areas that should be kept undivided, and full five-district map suggestions for the whole county.", "This mapping module displays 2020 Decennial Census population, adjusted per California state law to reallocate incarcerated populations to their \
    last known residential address, on Census blocks. For more information, please visit the Statewide Database’s <a href='https://statewidedatabase.org/redistricting2021/' target=_blank>website</a>. The “Additional demographics” \
    in the module displays 2019 ACS data on the Census block groups. The data was prepared by National Demographics Corporation. To learn more about their \
    team click <a href='https://www.ndcresearch.com/about-us/' target=_blank>here</a>."],
    mercedco: ["Merced County District Boundaries must be redrawn every 10 years using U.S. Census data in order to make the five districts as equal in population as possible and that each member represents about the same number of constituents. \
    The County encourages residents to participate by suggesting neighborhood and community of interest maps of areas that should be kept undivided, and full five-district map suggestions for the whole county.", "This mapping module displays 2020 Decennial Census population, adjusted per California state law to reallocate incarcerated populations to their \
    last known residential address, on Census blocks. For more information, please visit the Statewide Database’s <a href='https://statewidedatabase.org/redistricting2021/' target=_blank>website</a>. The “Additional demographics” \
    in the module displays 2019 ACS data on the Census block groups. The data was prepared by National Demographics Corporation. To learn more about their \
    team click <a href='https://www.ndcresearch.com/about-us/' target=_blank>here</a>."],
    kingsco: ["Kings County District Boundaries must be redrawn every 10 years using U.S. Census data in order to make the five districts as equal in population as possible and that each member represents about the same number of constituents. \
    The County encourages residents to participate by suggesting neighborhood and community of interest maps of areas that should be kept undivided, and full five-district map suggestions for the whole county.", "This mapping module displays 2020 Decennial Census population, adjusted per California state law to reallocate incarcerated populations to their \
    last known residential address, on Census blocks. For more information, please visit the Statewide Database’s <a href='https://statewidedatabase.org/redistricting2021/' target=_blank>website</a>. The “Additional demographics” \
    in the module displays 2019 ACS data on the Census block groups. The data was prepared by National Demographics Corporation. To learn more about their \
    team click <a href='https://www.ndcresearch.com/about-us/' target=_blank>here</a>."],
    fremont2021: ["City of Fremont District Boundaries must be redrawn every 10 years using U.S. Census data in order to make the six districts as equal in population as possible, so that each member represents about the same number of constituents. \
    The City encourages residents to participate by suggesting neighborhood and community of interest maps of areas that should be kept undivided, and full six-district map suggestions for the whole city.", "This mapping module displays data processed by National Demographics Corporation (NDC). To learn more about their team click <a href='https://www.ndcresearch.com/about-us/' target=_blank>here</a>. \
    The module displays 2020 Decennial Census population, adjusted per California state law to reallocate incarcerated populations to their last known residential address, on Census Blocks. \
    For more information, please visit the Statewide Database’s <a href='https://statewidedatabase.org/redistricting2021/' target=_blank>website</a>.", "The Citizen Voting Age Population (CVAP) data are collected by the U.S. Census Bureau in its annual American Community Survey on Census Block Groups. NDC disaggregates that Block Group \
    level geography down to Census Block geography based on each Block's share of both the Block Group's total population and each racial/ethnic group's population in the Block Group. The \
    “Additional demographics” in the module displays 2019 ACS data on the Block Groups."],
    campbellcity: ["City of Campell District Boundaries must be redrawn every 10 years using U.S. Census data in order to make the five districts as equal in population as possible and that each member represents about the same number of constituents. \
    The City encourages residents to participate by suggesting neighborhood and community of interest maps of areas that should be kept undivided, and full five-district map suggestions for the whole city.", "This mapping module displays projected 2020 population based on the American Community Survey data disaggregated onto Census blocks. \
    The data was prepared by National Demographics Corporation. To learn more about their team click <a href='https://www.ndcresearch.com/about-us/' target='_blank'>here</a>."],
    ocsd: ["Oceano Community Services District's boundaries must be redrawn every 10 years using U.S. Census data in order to make the five divisions as equal in population as possible and that each member represents about the same number of constituents. \
    The CSD encourages residents to participate by suggesting neighborhood and community of interest maps of areas that should be kept undivided, and full five-division map suggestions for the whole district.", "This mapping module displays data processed by National Demographics Corporation (NDC). To learn more about their team click <a href='https://www.ndcresearch.com/about-us/' target=_blank>here</a>. \
    The module displays 2020 Decennial Census population, adjusted per California state law to reallocate incarcerated populations to their last known residential address, on Census Blocks. \
    For more information, please visit the Statewide Database’s <a href='https://statewidedatabase.org/redistricting2021/' target=_blank>website</a>.", "The Citizen Voting Age Population (CVAP) data are collected by the U.S. Census Bureau in its annual American Community Survey on Census Block Groups. NDC disaggregates that Block Group \
    level geography down to Census Block geography based on each Block's share of both the Block Group's total population and each racial/ethnic group's population in the Block Group. The \
    “Additional demographics” in the module displays 2019 ACS data on the Block Groups."],
    buellton: ["City of Buellton District Boundaries must be redrawn every 10 years using U.S. Census data in order to make the four districts as equal in population as possible and that each member represents about the same number of constituents. \
    The City encourages residents to participate by suggesting neighborhood and community of interest maps of areas that should be kept undivided, and full four-district map suggestions for the whole city.", "This mapping module displays data processed by National Demographics Corporation (NDC). To learn more about their team click <a href='https://www.ndcresearch.com/about-us/' target=_blank>here</a>. \
    The module displays 2020 Decennial Census population, adjusted per California state law to reallocate incarcerated populations to their last known residential address, on Census Blocks. \
    For more information, please visit the Statewide Database’s <a href='https://statewidedatabase.org/redistricting2021/' target=_blank>website</a>.", "The Citizen Voting Age Population (CVAP) data are collected by the U.S. Census Bureau in its annual American Community Survey on Census Block Groups. NDC disaggregates that Block Group \
    level geography down to Census Block geography based on each Block's share of both the Block Group's total population and each racial/ethnic group's population in the Block Group. The \
    “Additional demographics” in the module displays 2019 ACS data on the Block Groups."],
    groverbeach: ["City of Grover Beach District Boundaries must be redrawn every 10 years using U.S. Census data in order to make the four districts as equal in population as possible, so that each member represents about the same number of constituents. \
    The City encourages residents to participate by suggesting neighborhood and community of interest maps of areas that should be kept undivided, and full four-district map suggestions for the whole city.", "This mapping module displays data processed by National Demographics Corporation (NDC). To learn more about their team click <a href='https://www.ndcresearch.com/about-us/' target=_blank>here</a>. \
    The module displays 2020 Decennial Census population, adjusted per California state law to reallocate incarcerated populations to their last known residential address, on Census Blocks. \
    For more information, please visit the Statewide Database’s <a href='https://statewidedatabase.org/redistricting2021/' target=_blank>website</a>.", "The Citizen Voting Age Population (CVAP) data are collected by the U.S. Census Bureau in its annual American Community Survey on Census Block Groups. NDC disaggregates that Block Group \
    level geography down to Census Block geography based on each Block's share of both the Block Group's total population and each racial/ethnic group's population in the Block Group. The \
    “Additional demographics” in the module displays 2019 ACS data on the Block Groups."],
    vallejo: ["City of Vallejo District Boundaries must be redrawn every 10 years using U.S. Census data in order to make the six districts as equal in population as possible and that each member represents about the same number of constituents. \
    The City encourages residents to participate by suggesting neighborhood and community of interest maps of areas that should be kept undivided, and full six-district map suggestions for the whole city.", "This mapping module displays projected 2020 population based on the American Community Survey data disaggregated onto Census blocks. \
    The data was prepared by National Demographics Corporation. To learn more about their team click <a href='https://www.ndcresearch.com/about-us/' target='_blank'>here</a>."],
    lakee: ["City of Lake Elsinore District Boundaries must be redrawn every 10 years using U.S. Census data in order to make the five districts as equal in population as possible and that each member represents about the same number of constituents. \
    The City encourages residents to participate by suggesting neighborhood and community of interest maps of areas that should be kept undivided, and full five-district map suggestions for the whole city.", "This mapping module displays projected 2020 population based on the American Community Survey data disaggregated onto Census blocks. \
    The data was prepared by National Demographics Corporation. To learn more about their team click <a href='https://www.ndcresearch.com/about-us/' target='_blank'>here</a>."],
    chino2021: ["City of Chino District Boundaries must be redrawn every 10 years using U.S. Census data in order to make the four districts as equal in population as possible, so that each member represents about the same number of constituents. \
    The City encourages residents to participate by suggesting neighborhood and community of interest maps of areas that should be kept undivided, and full four-district map suggestions for the whole city.", "This mapping module displays data processed by National Demographics Corporation (NDC). To learn more about their team click <a href='https://www.ndcresearch.com/about-us/' target=_blank>here</a>. \
    The module displays 2020 Decennial Census population, adjusted per California state law to reallocate incarcerated populations to their last known residential address, on Census Blocks. \
    For more information, please visit the Statewide Database’s <a href='https://statewidedatabase.org/redistricting2021/' target=_blank>website</a>.", "The Citizen Voting Age Population (CVAP) data are collected by the U.S. Census Bureau in its annual American Community Survey on Census Block Groups. NDC disaggregates that Block Group \
    level geography down to Census Block geography based on each Block's share of both the Block Group's total population and each racial/ethnic group's population in the Block Group. The \
    “Additional demographics” in the module displays 2019 ACS data on the Block Groups."],
    saccountymap: ["Sacramento County Board of Supervisor District Boundaries must be redrawn every 10 years using U.S. Census data in order to make the five districts as equal in population as possible and that each member represents about the same number of constituents. \
    The County encourages residents to participate by suggesting neighborhood and community of interest maps of areas that should be kept undivided, and full five-district map suggestions for the whole county. \
    For more information, please visit <a href='https://www.saccounty.net/Redistricting/' target='_blank'>www.saccounty.net/Redistricting/</a>", "This mapping module displays projected 2020 population based on the American Community Survey data disaggregated onto Census blocks. \
    The data was prepared by National Demographics Corporation. To learn more about their team click <a href='https://www.ndcresearch.com/about-us/' target='_blank'>here</a>."],
    fresno: ["Fresno County Board of Supervisor District Boundaries must be redrawn every 10 years using U.S. Census data in order to make the five districts as equal in population as possible and that each member represents about the same number of constituents. \
    The County encourages residents to participate by suggesting neighborhood and community of interest maps of areas that should be kept undivided, and full five-district map suggestions for the whole county.", "This mapping module displays 2020 Decennial Census population, adjusted per California state law to reallocate incarcerated populations to their \
    last known residential address, on Census blocks. For more information, please visit the Statewide Database’s <a href='https://statewidedatabase.org/redistricting2021/' target=_blank>website</a>. The “Additional demographics” \
    in the module displays 2019 ACS data on the Census block groups. The data was prepared by National Demographics Corporation. To learn more about their \
    team click <a href='https://www.ndcresearch.com/about-us/' target=_blank>here</a>."],
    fresnocity: ["Fresno City Council Board of Supervisor District Boundaries must be redrawn every 10 years using U.S. Census data in order to make the seven districts as equal in population as possible and that each member represents about the same number of constituents. \
    The City encourages residents to participate by suggesting neighborhood and community of interest maps of areas that should be kept undivided, and full seven-district map suggestions for the whole city.", "This mapping module displays 2020 Decennial Census population, adjusted per California state law to reallocate incarcerated populations to their \
    last known residential address, on Census blocks. For more information, please visit the Statewide Database’s <a href='https://statewidedatabase.org/redistricting2021/' target=_blank>website</a>. The “Additional demographics” \
    in the module displays 2019 ACS data on the Census block groups. The data was prepared by National Demographics Corporation. To learn more about their \
    team click <a href='https://www.ndcresearch.com/about-us/' target=_blank>here</a>."],
    nevadaco: ["Nevada County Board of Supervisor District Boundaries must be redrawn every 10 years using U.S. Census data in order to make the five districts as equal in population as possible, so that each member represents about the same number of constituents. \
    The County encourages residents to participate by suggesting neighborhood and community of interest maps of areas that should be kept undivided, and full five-district map suggestions for the whole county.", "This mapping module displays data processed by National Demographics Corporation (NDC). To learn more about their team click <a href='https://www.ndcresearch.com/about-us/' target=_blank>here</a>. \
    The module displays 2020 Decennial Census population, adjusted per California state law to reallocate incarcerated populations to their last known residential address, on Census Blocks. \
    For more information, please visit the Statewide Database’s <a href='https://statewidedatabase.org/redistricting2021/' target=_blank>website</a>.", "The Citizen Voting Age Population (CVAP) data are collected by the U.S. Census Bureau in its annual American Community Survey on Census Block Groups. NDC disaggregates that Block Group \
    level geography down to Census Block geography based on each Block's share of both the Block Group's total population and each racial/ethnic group's population in the Block Group. The \
    “Additional demographics” in the module displays 2019 ACS data on the Block Groups."],
    sanmateoco: ["San Mateo County Board of Supervisor District Boundaries must be redrawn every 10 years using U.S. Census data in order to make the five districts as equal in population as possible and that each member represents about the same number of constituents. \
    The County encourages residents to participate by suggesting neighborhood and community of interest maps of areas that should be kept undivided, and full five-district map suggestions for the whole county.", "This mapping module displays 2020 Decennial Census population, adjusted per California state law to reallocate incarcerated populations to their \
    last known residential address, on Census blocks. For more information, please visit the Statewide Database’s <a href='https://statewidedatabase.org/redistricting2021/' target=_blank>website</a>. The “Additional demographics” \
    in the module displays 2019 ACS data on the Census block groups. The data was prepared by National Demographics Corporation. To learn more about their \
    team click <a href='https://www.ndcresearch.com/about-us/' target=_blank>here</a>."],
    sanbenito: ["San Benito County Board of Supervisor District Boundaries must be redrawn every 10 years using U.S. Census data in order to make the five districts as equal in population as possible and that each member represents about the same number of constituents. \
    The County encourages residents to participate by suggesting neighborhood and community of interest maps of areas that should be kept undivided, and full five-district map suggestions for the whole county.", "This mapping module displays 2020 Decennial Census population, adjusted per California state law to reallocate incarcerated populations to their \
    last known residential address, on Census blocks. For more information, please visit the Statewide Database’s <a href='https://statewidedatabase.org/redistricting2021/' target=_blank>website</a>. The “Additional demographics” \
    in the module displays 2019 ACS data on the Census block groups. The data was prepared by National Demographics Corporation. To learn more about their \
    team click <a href='https://www.ndcresearch.com/about-us/' target=_blank>here</a>."],
    goleta: ["City of Goleta City Council District Boundaries must be redrawn every 10 years using U.S. Census data in order to make the four districts as equal in population as possible and that each member represents about the same number of constituents. \
    The City encourages residents to participate by suggesting neighborhood and community of interest maps of areas that should be kept undivided, and full four-district map suggestions for the whole city.", "This mapping module displays 2020 Decennial Census population, adjusted per California state law to reallocate incarcerated populations to their \
    last known residential address, on Census blocks. For more information, please visit the Statewide Database’s <a href='https://statewidedatabase.org/redistricting2021/' target=_blank>website</a>. The “Additional demographics” \
    in the module displays 2019 ACS data on the Census block groups. The data was prepared by National Demographics Corporation. To learn more about their \
    team click <a href='https://www.ndcresearch.com/about-us/' target=_blank>here</a>."],
    marinaca: ["City of Marina City Council District Boundaries must be redrawn every 10 years using U.S. Census data in order to make the four districts as equal in population as possible and that each member represents about the same number of constituents. \
    The City encourages residents to participate by suggesting neighborhood and community of interest maps of areas that should be kept undivided, and full four-district map suggestions for the whole city.", "This mapping module displays projected 2020 population based on the American Community Survey data disaggregated onto Census blocks. \
    The data was prepared by National Demographics Corporation. To learn more about their team click <a href='https://www.ndcresearch.com/about-us/' target='_blank'>here</a>."],
    arroyog: ["Arroyo Grande City Council District Boundaries must be redrawn every 10 years using U.S. Census data in order to make the four districts as equal in population as possible, so that each member represents about the same number of constituents. \
    The City encourages residents to participate by suggesting neighborhood and community of interest maps of areas that should be kept undivided, and full four-district map suggestions for the whole city.", "This mapping module displays data processed by National Demographics Corporation (NDC). To learn more about their team click <a href='https://www.ndcresearch.com/about-us/' target=_blank>here</a>. \
    The module displays 2020 Decennial Census population, adjusted per California state law to reallocate incarcerated populations to their last known residential address, on Census Blocks. \
    For more information, please visit the Statewide Database’s <a href='https://statewidedatabase.org/redistricting2021/' target=_blank>website</a>.", "The Citizen Voting Age Population (CVAP) data are collected by the U.S. Census Bureau in its annual American Community Survey on Census Block Groups. NDC disaggregates that Block Group \
    level geography down to Census Block geography based on each Block's share of both the Block Group's total population and each racial/ethnic group's population in the Block Group. The \
    “Additional demographics” in the module displays 2019 ACS data on the Block Groups."],
    camarillo: ["Camarillo City Council District Boundaries must be redrawn every 10 years using U.S. Census data in order to make the five districts as equal in population as possible, so that each member represents about the same number of constituents. \
    The City encourages residents to participate by suggesting neighborhood and community of interest maps of areas that should be kept undivided, and full five-district map suggestions for the whole city.", "This mapping module displays data processed by National Demographics Corporation (NDC). To learn more about their team click <a href='https://www.ndcresearch.com/about-us/' target=_blank>here</a>. \
    The module displays 2020 Decennial Census population, adjusted per California state law to reallocate incarcerated populations to their last known residential address, on Census Blocks. \
    For more information, please visit the Statewide Database’s <a href='https://statewidedatabase.org/redistricting2021/' target=_blank>website</a>.", "The Citizen Voting Age Population (CVAP) data are collected by the U.S. Census Bureau in its annual American Community Survey on Census Block Groups. NDC disaggregates that Block Group \
    level geography down to Census Block geography based on each Block's share of both the Block Group's total population and each racial/ethnic group's population in the Block Group. The \
    “Additional demographics” in the module displays 2019 ACS data on the Block Groups."],
    bellflower: ["Bellflower City Council District Boundaries must be redrawn every 10 years using U.S. Census data in order to make the five districts as equal in population as possible and that each member represents about the same number of constituents. \
    The City encourages residents to participate by suggesting neighborhood and community of interest maps of areas that should be kept undivided, and full five-district map suggestions for the whole city.", "This mapping module displays projected 2020 population based on the American Community Survey data disaggregated onto Census blocks. \
    The data was prepared by National Demographics Corporation. To learn more about their team click <a href='https://www.ndcresearch.com/about-us/' target='_blank'>here</a>."],
    chulavista: ["Chula Vista City Council District Boundaries must be redrawn every 10 years using U.S. Census data in order to make the four districts as equal in population as possible and that each member represents about the same number of constituents. \
    The City encourages residents to participate by suggesting neighborhood and community of interest maps of areas that should be kept undivided, and full four-district map suggestions for the whole city.", "This mapping module displays 2020 Decennial Census population, adjusted per California state law to reallocate incarcerated populations to their \
    last known residential address, on Census blocks. For more information, please visit the Statewide Database’s <a href='https://statewidedatabase.org/redistricting2021/' target=_blank>website</a>. The “Additional demographics” \
    in the module, displays 2019 ACS data on the Census block groups. The data was prepared by National Demographics Corporation. To learn more about their \
    team click <a href='https://www.ndcresearch.com/about-us/' target=_blank>here</a>."],
    sbcounty: ["Santa Barbara County Supervisorial District Boundaries must be redrawn every 10 years using U.S. Census data in order to make the five districts as equal in population as possible and that each member represents about the same number of constituents.     The County encourages residents to participate by suggesting neighborhood and community of interest maps of areas that should be kept undivided, and full five-district map suggestions for the whole county.", "This mapping module displays 2020 Decennial Census population, adjusted per California state law to reallocate incarcerated populations to their     last known residential address, on Census blocks. For more information, please visit the Statewide Database\u2019s <a href='https://statewidedatabase.org/redistricting2021/' target=_blank>website</a>. The \u201CAdditional demographics\u201D     in the module displays 2019 ACS data on the Census block groups. The data was prepared by National Demographics Corporation. To learn more about their     team click <a href='https://www.ndcresearch.com/about-us/' target=_blank>here</a>."],
    commoncausepa: ["Common Cause Pennsylvania is the defender of citizens\u2019 rights in the halls of power and in our communities.     Standing as an independent voice for positive change, a watchdog against corruption, and protector against abuse of power,      we work to hold public officials accountable and responsive to citizens. Common Cause Pennsylvania is a nonpartisan, good government organization."],
    glendora2021: ["City of Glendora City Council District Boundaries must be redrawn every 10 years using U.S. Census data in order to make the five districts as equal in population as possible and that each member represents about the same number of constituents.     The City encourages residents to participate by suggesting neighborhood and community of interest maps of areas that should be kept undivided, and full five-district map suggestions for the whole city.", "This mapping module displays 2020 Decennial Census population, adjusted per California state law to reallocate incarcerated populations to their     last known residential address, on Census blocks. For more information, please visit the Statewide Database\u2019s <a href='https://statewidedatabase.org/redistricting2021/' target=_blank>website</a>. The \u201CAdditional demographics\u201D     in the module displays 2019 ACS data on the Census block groups. The data was prepared by National Demographics Corporation. To learn more about their     team click <a href='https://www.ndcresearch.com/about-us/' target=_blank>here</a>."],
    "sandimas2021": ["\n    San Dimas City Council Boundaries must be redrawn every 10 years using U.S. Census data in order to make\n    the four districts as equal in population as possible so that each member represents about the same number\n    of constituents. The City encourages residents to participate by suggesting neighborhood and community of\n    interest maps of areas that should be kept undivided, and full four-district map suggestions for the whole\n    city.\n    ", "\n    This mapping module displays 2020 Decennial Census population, adjusted per California state law to\n    reallocate incarcerated populations to their last known residential address, on Census blocks. For more\n    information, please visit the Statewide Database's <a href='https://statewidedatabase.org/redistricting2021/'>\n    website</a>. The \"Additional demographics\" in the module display 2019 ACS data on the Census block groups.\n    The data was prepared by National Demographics Corporation. To learn more about their team click\n    <a href='https://www.ndcresearch.com/about-us/'>here</a>.\n    "],
    "anaheim2021": ["\n      Anaheim City Council Boundaries must be redrawn every 10 years using U.S. Census data in order to make\n      the four districts as equal in population as possible so that each member represents about the same number\n      of constituents. The City encourages residents to participate by suggesting neighborhood and community of\n      interest maps of areas that should be kept undivided, and full six-district map suggestions for the whole\n      city.\n      ", "\n      This mapping module displays 2020 Decennial Census population on Census blocks. For more\n      information, please visit the Statewide Database's <a href='https://statewidedatabase.org/redistricting2021/'>\n      website</a>. The \"Additional demographics\" in the module display 2019 ACS data on the Census block groups.\n      The data was prepared by National Demographics Corporation. To learn more about their team click\n      <a href='https://www.ndcresearch.com/about-us/'>here</a>.\n      "],
    "arcadia2021": ["\n    Arcadia City Council Boundaries must be redrawn every 10 years using U.S. Census data in order to make\n    the four districts as equal in population as possible so that each member represents about the same number\n    of constituents. The City encourages residents to participate by suggesting neighborhood and community of\n    interest maps of areas that should be kept undivided, and full five-district map suggestions for the whole\n    city.\n    ", "\n    This mapping module displays 2020 Decennial Census population, adjusted per California state law to\n    reallocate incarcerated populations to their last known residential address, on Census blocks. For more\n    information, please visit the Statewide Database's <a href='https://statewidedatabase.org/redistricting2021/'>\n    website</a>. The \"Additional demographics\" in the module display 2019 ACS data on the Census block groups.\n    The data was prepared by National Demographics Corporation. To learn more about their team click\n    <a href='https://www.ndcresearch.com/about-us/'>here</a>.\n    "],
    "lamirada2021": ["\n    La Mirada City Council Boundaries must be redrawn every 10 years using U.S. Census data in order to make\n    the four districts as equal in population as possible so that each member represents about the same number\n    of constituents. The City encourages residents to participate by suggesting neighborhood and community of\n    interest maps of areas that should be kept undivided, and full five-district map suggestions for the whole\n    city.\n    ", "\n    This mapping module displays 2020 Decennial Census population, adjusted per California state law to\n    reallocate incarcerated populations to their last known residential address, on Census blocks. For more\n    information, please visit the Statewide Database's <a href='https://statewidedatabase.org/redistricting2021/'>\n    website</a>. The \"Additional demographics\" in the module display 2019 ACS data on the Census block groups.\n    The data was prepared by National Demographics Corporation. To learn more about their team click\n    <a href='https://www.ndcresearch.com/about-us/'>here</a>.\n    "],
    "lakewood2021": ["\n    Lakewood City Council Boundaries must be redrawn every 10 years using U.S. Census data in order to make\n    the four districts as equal in population as possible so that each member represents about the same number\n    of constituents. The City encourages residents to participate by suggesting neighborhood and community of\n    interest maps of areas that should be kept undivided, and full five-district map suggestions for the whole\n    city.\n    ", "\n    This mapping module displays 2020 Decennial Census population, adjusted per California state law to\n    reallocate incarcerated populations to their last known residential address, on Census blocks. For more\n    information, please visit the Statewide Database's <a href='https://statewidedatabase.org/redistricting2021/'>\n    website</a>. The \"Additional demographics\" in the module display 2019 ACS data on the Census block groups.\n    The data was prepared by National Demographics Corporation. To learn more about their team click\n    <a href='https://www.ndcresearch.com/about-us/'>here</a>.\n    "],
    "placentia2021": ["\n    Placentia City Council Boundaries must be redrawn every 10 years using U.S. Census data in order to make\n    the four districts as equal in population as possible so that each member represents about the same number\n    of constituents. The City encourages residents to participate by suggesting neighborhood and community of\n    interest maps of areas that should be kept undivided, and full five-district map suggestions for the whole\n    city.\n    ", "\n    This mapping module displays 2020 Decennial Census population on Census blocks. For more\n    information, please visit the Statewide Database's <a href='https://statewidedatabase.org/redistricting2021/'>\n    website</a>. The \"Additional demographics\" in the module display 2019 ACS data on the Census block groups.\n    The data was prepared by National Demographics Corporation. To learn more about their team click\n    <a href='https://www.ndcresearch.com/about-us/'>here</a>.\n    "],
    "sanbruno2021": ["\n    San Bruno City Council Boundaries must be redrawn every 10 years using U.S. Census data in order to make\n    the four districts as equal in population as possible so that each member represents about the same number\n    of constituents. The City encourages residents to participate by suggesting neighborhood and community of\n    interest maps of areas that should be kept undivided, and full four-district map suggestions for the whole\n    city.\n    ", "\n    This mapping module displays 2020 Decennial Census population, adjusted per California state law to\n    reallocate incarcerated populations to their last known residential address, on Census blocks. For more\n    information, please visit the Statewide Database's <a href='https://statewidedatabase.org/redistricting2021/'>\n    website</a>. The \"Additional demographics\" in the module display 2019 ACS data on the Census block groups.\n    The data was prepared by National Demographics Corporation. To learn more about their team click\n    <a href='https://www.ndcresearch.com/about-us/'>here</a>.\n    "],
    poway2021: ["Poway City Council District Boundaries must be redrawn every 10 years using U.S. Census data in order to make the four districts as equal in population as possible and that each member represents about the same number of constituents.     The City encourages residents to participate by suggesting neighborhood and community of interest maps of areas that should be kept undivided, and full four-district map suggestions for the whole city.\",\n    \"This mapping module displays 2020 Decennial Census population, adjusted per California state law to reallocate incarcerated populations to their     last known residential address, on Census blocks. For more information, please visit the Statewide Database\u2019s <a href='https://statewidedatabase.org/redistricting2021/' target=_blank>website</a>. The \u201CAdditional demographics\u201D     in the module, displays 2019 ACS data on the Census block groups. The data was prepared by National Demographics Corporation. To learn more about their     team click <a href='https://www.ndcresearch.com/about-us/' target=_blank>here</a>."],
    torrance2021: ["Torrance City Council District Boundaries must be redrawn every 10 years using U.S. Census data in order to make the six districts as equal in population as possible and that each member represents about the same number of constituents.     The City encourages residents to participate by suggesting neighborhood and community of interest maps of areas that should be kept undivided, and full six-district map suggestions for the whole city.\",\n    \"This mapping module displays 2020 Decennial Census population, adjusted per California state law to reallocate incarcerated populations to their     last known residential address, on Census blocks. For more information, please visit the Statewide Database\u2019s <a href='https://statewidedatabase.org/redistricting2021/' target=_blank>website</a>. The \u201CAdditional demographics\u201D     in the module, displays 2019 ACS data on the Census block groups. The data was prepared by National Demographics Corporation. To learn more about their     team click <a href='https://www.ndcresearch.com/about-us/' target=_blank>here</a>."],
    "29palms": ["\n    Twentynine Palms City Council Boundaries must be redrawn every 10 years using\n    U.S. Census data in order to make the five districts as equal in population\n    as possible so that each member represents about the same number of constituents.\n    The City encourages residents to participate by suggesting neighborhood and\n    community of interest maps of areas that should be kept undivided, and full\n    five-district map suggestions for the whole city.\n    ", "\n    This mapping module displays 2020 Decennial Census population, adjusted per\n    California state law to reallocate incarcerated populations to their last known\n    residential address, on Census blocks. For more information, please visit the\n    Statewide Database's <a href='https://statewidedatabase.org/redistricting2021/'>\n    website</a>. The \"Additional demographics\" in the module display 2019 ACS data\n    on the Census block groups. The data was prepared by National Demographics\n    Corporation. To learn more about their team click\n    <a href='https://www.ndcresearch.com/about-us/'>here</a>.\n    "],
    "navajoco": ["\n    Navajo County Board of Supervisor District Boundaries must be redrawn every\n    10 years using U.S. Census data in order to make the five districts as equal\n    in population as possible and that each member represents about the same\n    number of constituents. The County encourages residents to participate by\n    suggesting neighborhood and community of interest maps of areas that should\n    be kept undivided, and full five-district map suggestions for the whole\n    county.\n    ", "\n    This mapping module displays population based on the 2020 Decennial Census\n    blocks. The data was prepared by National Demographics Corporation. To learn\n    more about their team click\n    <a href=\"https://www.ndcresearch.com/about-us/\">here</a>.\n    "],
    bpld2021: ["Buena Park Library District Boundaries must be redrawn every 10 years using\n    U.S. Census data in order to make the five districts as equal in population\n    as possible so that each member represents about the same number of constituents.\n    The Board encourages residents to participate by suggesting neighborhood and\n    community of interest maps of areas that should be kept undivided, and full\n    five-district map suggestions for the whole board.", "This mapping module displays\n    2020 Decennial Census population, adjusted per California state law to\n    reallocate incarcerated populations to their last known residential address,\n    on Census blocks. For more information, please visit the Statewide Database's\n    <a href='https://statewidedatabase.org/redistricting2021/' target=_blank>website</a>.\n    The \u201CAdditional demographics\u201D in the module, displays 2019 ACS data on the\n    Census block groups. The data was prepared by National Demographics Corporation.\n    To learn more about their team click\n    <a href='https://www.ndcresearch.com/about-us/' target=_blank>here</a>."],
    yubacity: ["Yuba City City Council District Boundaries must be redrawn every 10 years\n    using U.S. Census data in order to make the five districts as equal in population\n    as possible and that each member represents about the same number of constituents.\n    The City encourages residents to participate by suggesting neighborhood and\n    community of interest maps of areas that should be kept undivided, and full\n    five-district map suggestions for the whole city.", "This mapping module displays\n    2020 Decennial Census population, adjusted per California state law to\n    reallocate incarcerated populations to their last known residential address,\n    on Census blocks. For more information, please visit the Statewide Database\u2019s\n    <a href='https://statewidedatabase.org/redistricting2021/' target=_blank>website</a>.\n    The \u201CAdditional demographics\u201D in the module, displays 2019 ACS data on the\n    Census block groups. The data was prepared by National Demographics Corporation.\n    To learn more about their team click <a href='https://www.ndcresearch.com/about-us/'\n    target=_blank>here</a>."],
    "marinccd": ["This mapping module displays 2020 Decennial Census population, adjusted per\n    California state law to reallocate incarcerated populations to their last\n    known residential address, on Census blocks. For more information, please\n    visit the Statewide Database\u2019s website. The data was prepared by\n    <a href=\"https://www.coopstrategies.com/#/\">Cooperative Strategies</a>,\n    a comprehensive planning and demographics firm that has been\n    retained by the School District to assist in redistricting. Over the last\n    decade, Cooperative Strategies has assisted more than 50 school districts\n    across California draw their voting areas."],
    "oxnarduhsd": ["This mapping module displays 2020 Decennial Census population, adjusted per\n    California state law to reallocate incarcerated populations to their last\n    known residential address, on Census blocks. For more information, please\n    visit the Statewide Database\u2019s website. The data was prepared by\n    <a href=\"https://www.coopstrategies.com/#/\">Cooperative Strategies</a>,\n    a comprehensive planning and demographics firm that has been\n    retained by the School District to assist in redistricting. Over the last\n    decade, Cooperative Strategies has assisted more than 50 school districts\n    across California draw their voting areas."],
    "rohnert_park": ["\n    This mapping module uses the official 2020 Redistricting Database of California, published by\n    the Statewide Database with processing by Wagaman Strategies. The Statewide Database reallocates\n    incarcerated populations to their last known residential address.\n    "],
    "brentwood": ["\n    This mapping module uses the official 2020 Redistricting Database of California, published by\n    the Statewide Database with processing by Wagaman Strategies. The Statewide Database reallocates\n    incarcerated populations to their last known residential address.\n    "],
    "watsonville": ["\n    This mapping module uses the official 2020 Redistricting Database of California, published by\n    the Statewide Database with processing by Wagaman Strategies. The Statewide Database reallocates\n    incarcerated populations to their last known residential address.\n    "],
    sbusd_5: ["\n    This mapping module displays 2020 Decennial Census population, adjusted per\n    California state law to reallocate incarcerated populations to their last\n    known residential address, on Census blocks. For more information, please\n    visit the Statewide Databases\n    <a href='https://statewidedatabase.org/redistricting2021/' target=_blank>website</a>.\n\n    The data was prepared by\n    <a href='https://www.coopstrategies.com/#/' target=_blank>Cooperative Strategies,\n    </a> a comprehensive planning and demographics firm that has been retained by\n    the School District to assist in redistricting. Over the last decade,\n    Cooperative Strategies has assisted more than 50 school districts across\n    California draw their voting areas.\n    "],
    sbusd_7: ["\n    This mapping module displays 2020 Decennial Census population, adjusted per\n    California state law to reallocate incarcerated populations to their last\n    known residential address, on Census blocks. For more information, please\n    visit the Statewide Databases\n    <a href='https://statewidedatabase.org/redistricting2021/' target=_blank>website</a>.\n\n    The data was prepared by\n    <a href='https://www.coopstrategies.com/#/' target=_blank>Cooperative Strategies,\n    </a> a comprehensive planning and demographics firm that has been retained by\n    the School District to assist in redistricting. Over the last decade,\n    Cooperative Strategies has assisted more than 50 school districts across\n    California draw their voting areas.\n    "],
    pvsd: ["\n    This mapping module displays 2020 Decennial Census population, adjusted per\n    California state law to reallocate incarcerated populations to their last\n    known residential address, on Census blocks. For more information, please\n    visit the Statewide Database's\n    <a href='https://statewidedatabase.org/redistricting2021/' target=_blank>website</a>.\n\n    The data was prepared by\n    <a href='https://www.coopstrategies.com/#/' target=_blank>Cooperative Strategies,\n    </a> a comprehensive planning and demographics firm that has been retained by\n    the School District to assist in redistricting. Over the last decade,\n    Cooperative Strategies has assisted more than 50 school districts across\n    California draw their voting areas.\n    "],
    santarosa: ["\n    This mapping module uses the official Redistricting Database for California,\n    published by the Statewide Database with processing by Redistricting Partners.\n    For the last decade, Redistricting Partners has supported cities, community\n    college districts, school boards, hospital districts, water boards, and other\n    special districts. To learn more about their team\n    <a href='https://redistrictingpartners.com/about/' target=_blank>click here.</a>\n    "],
    "millbrae": ["\n      This mapping module uses the <strong>official Redistricting Database for California</strong>,\n      published by the Statewide Database with processing by Redistricting Partners.\n      For the last decade, Redistricting Partners has supported cities, community college\n      districts, school boards, hospital districts, water boards, and other special\n      districts. To learn more about their team <a href='https://redistrictingpartners.com/about/' target=_blank>click here</a>.\n    "],
    "draweg": ["\n      This mapping module uses the official Redistricting Database for California,\n      published by the Statewide Database with processing by City Staff. For\n      additional information, contact the City Clerk at\n      <a href='mailto:cityclerk@elkgrovecity.org' target=_blank>cityclerk@elkgrovecity.org</a>.\n    "],
    "belmont": ["\n      This mapping module uses the <strong>official Redistricting Database for California</strong>,\n      published by the Statewide Database with processing by Redistricting Partners.\n      For the last decade, Redistricting Partners has supported cities, community college\n      districts, school boards, hospital districts, water boards, and other special\n      districts. To learn more about their team <a href='https://redistrictingpartners.com/about/' target=_blank>click here</a>.\n    "],
    "open_space_authority": ["\n      This mapping module displays 2015-2019 American Community Survey data disaggregated\n      onto Census blocks. The data was prepared by Redistricting Partners.\n      For the last decade, Redistricting Partners has supported cities, community college\n      districts, school boards, hospital districts, water boards, and other special\n      districts. To learn more about their team <a href='https://redistrictingpartners.com/about/' target=_blank>click here</a>.\n    "],
    "pimaaz": [""],
    "west_sacramento": ["\n      This mapping module uses the official Redistricting Database for California,\n      published by the Statewide Database with processing by Redistricting Partners.\n      For the last decade, Redistricting Partners has supported cities, community college\n      districts, school boards, hospital districts, water boards, and other special districts.\n      To learn more about their team click\n      <a href='https://redistrictingpartners.com/about/' target=_blank>here</a>.\n    "],
    "diamond_bar": ["\n      This mapping module uses the official Redistricting Database for California, published by\n      the Statewide Database with processing by Redistricting Partners. For the last decade,\n      Redistricting Partners has supported cities, community college districts, school boards,\n      hospital districts, water boards, and other special districts. To learn more about their\n      team <a href='https://redistrictingpartners.com/about/' target=_blank>click here</a>.\n    "],
    "nyc2022": ["\n      This mapping module uses adjusted data obtained from the US Census Bureau\n      with processing by Redistricting Partners. <a href=https://latfor.state.ny.us/>\n      New York State Legislative Task Force on Demographic Research and Reapportionment</a>\n      conducted adjustments for incarcerated individuals. For the last decade,\n      Redistricting Partners has supported states, counties, cities, community\n      college districts, school boards, and other special districts drawing new\n      districts. To learn more about their team,\n      <a href=https://redistrictingpartners.com/about/>click here</a>.\n    "]
  };
  var proposals_by_event = {
    centralsan: true,
    'pmc-districts': true,
    prjusd: true,
    san_mateo_city: true,
    butte_county: true,
    "worcestersd": true,
    nyc2022: true
  };
  var event = (function () {
    var og_eventCode = window.location.hostname === "localhost" ? window.location.search.split("event=")[1].split("&")[0] : window.location.pathname.split("/").slice(-1)[0];
    var eventCode = og_eventCode.toLowerCase();

    if (validEventCodes[eventCode]) {
      document.getElementById("eventHeadline").innerText = og_eventCode;

      if (coi_events.includes(eventCode)) {
        document.getElementById("introExplain").innerText = "Map Your Community";
        document.getElementById("introExplain").style.display = "block";
      } else if (eventCode === "mapsofla") {
        document.getElementById("introExplain").innerText = "";
        document.getElementById("eventHeadline").innerText = "#MapsofLA";
      } else if (eventCode === "city_of_napa") {
        document.getElementById("introExplain").innerHTML = "Draw a Map #RedrawNapa<br/>";
        document.getElementById("eventHeadline").innerText = "City_of_Napa";
        document.getElementById("communities").innerText = "Start Drawing a Map or Your Community of Interest!";
      } else if (eventCode === "cityofdallas") {
        document.getElementById("introExplain").innerHTML = "";
        document.getElementById("eventHeadline").innerText = "Welcome to the Public Mapping Page for the City of Dallas TX";
      } else if (eventCode === "foothilldeanza") {
        document.getElementById("introExplain").innerHTML = "";
        document.getElementById("eventHeadline").innerText = "Foothill-De Anza";
      } else if (eventCode === "nyc2022") {
        document.getElementById("introExplain").innerHTML = "";
        document.getElementById("eventHeadline").innerText = "New York City Council Mapping Page";
      } else if (eventCode === "pimaaz") {
        document.getElementById("districting-options-title").innerHTML = "<p>Click the purple box below to start with a blank map. If you’d prefer to start using the current district boundaries, click <a href='https://districtr.org/edit/113736?event=pimaaz' target=_blank>here</a>. After working, click “Save” in the upper right corner of the mapping module to save your work. Copy the URL shown in the “Save” box so that you can return to your map. To display your map on this page, either as a proposed plan or a draft, click the “Share to Gallery” button.</p><p><strong>Note: The maximum population deviation shown on the Population tab displays the maximum population deviation of any <u>single</u> district from ideal size.</strong> This isn’t the method used to calculate the 10 percent deviation statutory requirement. To ensure your plan has less than 10 percent deviation, hover over the District bars and sum the deviations (ignoring negative percentages) for the highest- and lowest-populated Districts.</p>";
        document.getElementById("about-section").innerHTML = document.getElementById("about-section").innerHTML.replace("<h2>About</h2>", "");
      } else if (eventCode === "diamond_bar") {
        document.getElementById("districting-options-title").innerHTML = "<p>Click below to start with a blank map. Please note that zooming into the map will allow you to see various points of interest and street names in greater detail.</p>";
      } // Worcester event page.


      if (["worcestersd"].includes(eventCode)) {
        document.getElementById("districting-options-title").innerHTML = "\n          <p>\n            Click below to start with a blank map or click on one of the proposed\n            maps drawn by Professor Nate Persily, who was agreed to by the plaintiffs\n            and the city as the line-drawer pursuant to the consent decree.\n          </p>\n          <p>\n            <strong>Plan 5.27</strong> of proposed School Committee Districts\n            represents one option that satisfies the consent decree imposed on the\n            City of Worcester by the federal district court. It is designated\n            Plan 5.27 because it was drafted on May 27, 2022.\n          </p>\n          <p>\n            <strong>Plan 6.1</strong> of proposed School Committee Districts represents\n            another option that satisfies the consent decree imposed on the City of\n            Worcester by the federal district court. It is designated Plan 6.1\n            because it was drafted on June 1, 2022.\n          </p>\n\n          <p>\n            <strong>Plan 7.19</strong> of proposed School Committee Districts\n            makes minimal changes to Plan 6.1.\n          </p>\n        ";
      }

      if (["mp-maps"].includes(eventCode)) {
        document.getElementById("eventHeadline").innerText = og_eventCode;
        document.getElementById("introExplain").innerText = "City of Menlo Park Redistricting";
        document.getElementById("introExplain").style.display = "block";
      }

      if (["commoncausepa"].includes(eventCode)) {
        document.getElementById("partnership-icons").style.display = "block";
        document.getElementById("partner-link-a").href = "https://www.commoncause.org/pennsylvania/";
        document.getElementById("partnership-a").src = "/assets/CC_Share_PA.png?v=2";
        document.getElementById("partner-link-b").href = "https://www.commoncause.org/";
        document.getElementById("partnership-b").src = "/assets/commoncauselogo.png?v=2";
      }

      if (eventCode === "livermore") {
        document.getElementById("partnership-icons").style.display = "block";
        document.getElementById("partner-link-a").href = "https://www.cityoflivermore.net";
        document.getElementById("partnership-a").src = "/assets/partners-livermore.svg";
        document.getElementById("partnership-a").style.marginRight = 0;
        document.getElementById("partnership-b").style.display = "none";
      }

      if (["rohnert_park"].includes(eventCode)) {
        document.getElementById("partnership-icons").style.display = "block";
        document.getElementById("partner-link-a").href = "https://www.rpcity.org/";
        document.getElementById("partnership-a").src = "/assets/partners-rohnert-park.jpeg";
        document.getElementById("partnership-a").style.marginRight = 0;
        document.getElementById("partnership-b").style.display = "none";
      }

      if (["brentwood"].includes(eventCode)) {
        document.getElementById("partnership-icons").style.display = "block";
        document.getElementById("partner-link-a").href = "https://www.brentwoodca.gov/default.asp";
        document.getElementById("partnership-a").src = "/assets/partners-brentwood.png";
        document.getElementById("partnership-a").style.marginRight = 0;
        document.getElementById("partnership-b").style.display = "none";
      }

      if (["watsonville"].includes(eventCode)) {
        document.getElementById("partnership-icons").style.display = "block";
        document.getElementById("partner-link-a").href = "https://cityofwatsonville.org/";
        document.getElementById("partnership-a").src = "/assets/partners-watsonville.png";
        document.getElementById("partnership-a").style.marginRight = 0;
        document.getElementById("partnership-b").style.display = "none";
      }

      if (["millbrae"].includes(eventCode)) {
        document.getElementById("partnership-icons").style.display = "block";
        document.getElementById("partner-link-a").href = "https://www.configuremillbrae.org/";
        document.getElementById("partnership-a").src = "/assets/partners-millbrae.jpeg";
        document.getElementById("partnership-a").style.marginRight = 0;
        document.getElementById("partnership-b").style.display = "none";
      }

      if (["belmont"].includes(eventCode)) {
        document.getElementById("partnership-icons").style.display = "block";
        document.getElementById("partner-link-a").href = "https://www.belmont.gov/";
        document.getElementById("partnership-a").src = "/assets/partners-belmont.png";
        document.getElementById("partnership-a").style.marginRight = 0;
        document.getElementById("partnership-b").style.display = "none";
      }

      if (["draweg"].includes(eventCode)) {
        document.getElementById("partnership-icons").style.display = "block";
        document.getElementById("partner-link-a").href = "http://www.elkgrovecity.org/city_hall/city_government/city_council/redistricting";
        document.getElementById("partnership-a").src = "/assets/partners-draweg.jpg";
        document.getElementById("partnership-a").style.marginRight = 0;
        document.getElementById("partnership-b").style.display = "none";
      }

      if (["pimaaz"].includes(eventCode)) {
        document.getElementById("partnership-icons").style.display = "block";
        document.getElementById("partner-link-a").href = "https://webcms.pima.gov/";
        document.getElementById("partnership-a").src = "/assets/partners-pimaaz.jpg";
        document.getElementById("partnership-a").style.marginRight = 0;
        document.getElementById("partnership-b").style.display = "none";
      }

      if (["mesaaz", "slo_county", "napa_county", "san_jose", "siskiyou", "redwood_city", "ventura_county", "yolo_county", "solano_county", "santa_clara_county", "city_of_napa", "kern_county", "san_joaquin", "san_mateo_city", "oakland", "martinez", "butte_county", "santa_clara_water", "tuolumne_county", "napa_college", "napa_boe", "carpinteria", "humboldt_county", "mapsofla", "long_beach", "santa_ana", "imperial_county", "ojai", "foothilldeanza", "livermore"].includes(eventCode)) {
        document.getElementById("partnership-icons").style.display = "block";

        if (eventCode === "mesaaz") {
          document.getElementById("partner-link-a").href = "https://www.mesaaz.gov";
          document.getElementById("partnership-a").src = "/assets/partners-mesa.jpeg?v=2";
        } else if (eventCode === "slo_county") {
          document.getElementById("partner-link-a").href = "https://www.slocounty.ca.gov/";
          document.getElementById("partnership-a").src = "/assets/partners-slo.png?v=2";
        } else if (eventCode === "napa_county") {
          document.getElementById("partner-link-a").href = "https://www.countyofnapa.org/";
          document.getElementById("partnership-a").src = "/assets/partners-napa.png?v=2";
          document.getElementById("partnership-a").style.background = '#252532';
        } else if (eventCode === "san_jose") {
          document.getElementById("partner-link-a").href = "https://www.sanjoseca.gov/your-government/departments";
          document.getElementById("partnership-a").src = "/assets/partners-sanjose.png?v=2";
          document.getElementById("partnership-a").style.background = '#043c4b';
        } else if (eventCode === "siskiyou") {
          document.getElementById("partner-link-a").href = "https://www.co.siskiyou.ca.us/";
          document.getElementById("partnership-a").src = "/assets/partners-siskiyou.png?v=2";
        } else if (eventCode === "redwood_city") {
          document.getElementById("partner-link-a").href = "https://www.redwoodcity.org/home";
          document.getElementById("partnership-a").src = "/assets/partners-redwood.jpeg?v=2";
        } else if (eventCode === "ventura_county") {
          document.getElementById("partner-link-a").href = "https://www.ventura.org/";
          document.getElementById("partnership-a").src = "/assets/partners-ventura.png?v=2";
        } else if (eventCode === "yolo_county") {
          document.getElementById("partner-link-a").href = "https://www.yolocounty.org/";
          document.getElementById("partnership-a").src = "/assets/partners-yolo.png?v=2";
          document.getElementById("partnership-a").style.background = '#375e97';
        } else if (eventCode === "solano_county") {
          document.getElementById("partner-link-a").href = "https://www.solanocounty.com";
          document.getElementById("partnership-a").src = "/assets/partners-solano.gif";
        } else if (eventCode === "foothilldeanza") {
          document.getElementById("partner-link-a").href = "https://www.fhda.edu";
          document.getElementById("partnership-a").src = "/assets/partners-foothill.jpeg";
        } else if (eventCode === "ojai") {
          document.getElementById("partner-link-a").href = "https://ojai.ca.gov";
          document.getElementById("partnership-a").src = "/assets/partners-ojai.jpeg";
        } else if (eventCode === "imperial_county") {
          document.getElementById("partner-link-a").href = "https://imperialcounty.org";
          document.getElementById("partnership-a").src = "/assets/partners-imperial.png";
          document.getElementById("partnership-a").style.height = '85px';
          document.getElementById("partnership-a").style.marginTop = '-12px';
        } else if (eventCode === "santa_clara_county") {
          document.getElementById("partner-link-a").href = "https://www.sccgov.org/sites/scc/Documents/home.html";
          document.getElementById("partnership-a").src = "/assets/partners-sc-county.svg?v=2";
          document.getElementById("partnership-a").style.background = "#000";
        } else if (eventCode === "mapsofla") {
          document.getElementById("partner-link-a").href = "https://www.lacity.org";
          document.getElementById("partnership-a").src = "/assets/partners-lax.svg?v=2";
          document.getElementById("partnership-a").style.height = '160px';
          document.getElementById("partnership-a").style.marginTop = '-45px';
        } else if (eventCode === "san_mateo_city") {
          document.getElementById("partner-link-a").href = "https://www.cityofsanmateo.org";
          document.getElementById("partnership-a").src = "/assets/partners-sm-city.png?v=2";
        } else if (eventCode === "oakland") {
          document.getElementById("partner-link-a").href = "https://www.oaklandca.gov";
          document.getElementById("partnership-a").src = "/assets/partners-oakland.png?v=2";
        } else if (eventCode === "martinez") {
          document.getElementById("partner-link-a").href = "https://www.cityofmartinez.org";
          document.getElementById("partnership-a").src = "/assets/partners-martinez.png?v=2";
        } else if (eventCode === "carpinteria") {
          document.getElementById("partner-link-a").href = "https://carpinteriaca.gov";
          document.getElementById("partnership-a").src = "/assets/partners-carpinteria.png?v=2";
        } else if (eventCode === "santa_clara_water") {
          document.getElementById("partner-link-a").href = "https://www.valleywater.org";
          document.getElementById("partnership-a").src = "/assets/partners-sc-water.png?v=2";
        } else if (eventCode === "kern_county") {
          document.getElementById("partner-link-a").href = "https://www.kerncounty.com";
          document.getElementById("partnership-a").src = "/assets/partners-kern.png?v=2";
        } else if (eventCode === "tuolumne_county") {
          document.getElementById("partner-link-a").href = "https://www.tuolumnecounty.ca.gov";
          document.getElementById("partnership-a").src = "/assets/partners-tuolumne.png?v=2";
        } else if (eventCode === "napa_boe") {
          document.getElementById("partner-link-a").href = "https://napacoe.org/board-of-education/";
          document.getElementById("partnership-a").src = "/assets/partners-napa-boe.png?v=2";
        } else if (eventCode === "butte_county") {
          document.getElementById("partner-link-a").href = "https://www.buttecounty.net";
          document.getElementById("partnership-a").src = "/assets/partners-butte.png?v=2";
        } else if (eventCode === "city_of_napa") {
          document.getElementById("partner-link-a").href = "https://www.cityofnapa.org";
          document.getElementById("partnership-a").src = "/assets/partners-napa-city.png?v=2";
        } else if (eventCode === "humboldt_county") {
          document.getElementById("partner-link-a").href = "https://humboldtgov.org";
          document.getElementById("partnership-a").src = "/assets/partners-humboldt.png?v=2";
          document.getElementById("partnership-a").style.background = "#46798b";
        } else if (eventCode === "napa_college") {
          document.getElementById("partner-link-a").href = "https://napavalley.edu/AboutNVC/Trustees/Pages/default.aspx";
          document.getElementById("partnership-a").src = "/assets/partners-napa-college.png?v=2";
        } else if (eventCode === "long_beach") {
          document.getElementById("partner-link-a").href = "https://www.longbeach.gov";
          document.getElementById("partnership-a").src = "/assets/partners-longbeach.jpeg";
        } else if (eventCode === "santa_ana") {
          document.getElementById("partner-link-a").href = "https://www.santa-ana.org";
          document.getElementById("partnership-a").src = "/assets/partners-santa-ana.png";
        } else if (eventCode === "san_joaquin") {
          document.getElementById("partner-link-a").href = "https://www.sjgov.org";
          document.getElementById("partnership-a").src = "/assets/partners-sanjoaquin.svg?v=2";
          document.getElementById("partnership-a").style.background = "#315470";
        }

        document.getElementById("partner-link-b").href = "https://redistrictingpartners.com";
        document.getElementById("partnership-b").src = "/assets/partners-rp.png?v=2";
      } else if (["sandimas2021", "saccounty", "saccountymap", "sonomaco", "pasadena2021", "sbcounty", "goleta", "marinco", "fresno", "nevadaco", "kingsco", "mercedco", "marinaca", "arroyog", "sanmateoco", "sanbenito", "chulavista", "camarillo", "bellflower", "fresnocity", "campbellcity", "chino2021", "fremont2021", "lakee", "vallejo", "ocsd", "buellton", "groverbeach", "sunnyvale2021", "lodi2021", "laverne", "elcajon", "richmondca", "carlsbad2021", "pomonaca", "encinitas2021", "bp2021", "hmb2021", "stockton2021", "glendale2021", "yumasup", "yumaawc", "glendora2021", "anaheim2021", "arcadia2021", "lamirada2021", "lakewood2021", "placentia2021", "sanbruno2021", "poway2021", "torrance2021", "29palms", "navajoco", "yubacity", "bpld2021"].includes(eventCode)) {
        document.getElementById("partnership-icons").style.display = "block";
        document.getElementById("partnership-b").src = "/assets/partners-ndc.png?v=2";
        document.getElementById("partner-link-b").href = "https://www.ndcresearch.com/";

        if (eventCode == "yubacity") {
          document.getElementById("partner-link-a").href = "https://www.yubacity.net/";
          document.getElementById("partnership-a").src = "/assets/partner-logos/yuba_city.png?v=2";
        } else if (eventCode == "bpld2021") {
          document.getElementById("partner-link-a").href = "https://buenaparklibrary.org/";
          document.getElementById("partnership-a").src = "/assets/partner-logos/buena_park.png?v=2";
        } else if (eventCode == "navajoco") {
          document.getElementById("partner-link-a").href = "https://www.navajocountyaz.gov/";
          document.getElementById("partnership-a").src = "/assets/partner-logos/navajoco.png?v=2";
        } else if (eventCode == "29palms") {
          document.getElementById("partner-link-a").href = "https://www.ci.twentynine-palms.ca.us/";
          document.getElementById("partnership-a").src = "/assets/partner-logos/29palms.png?v=2";
        } else if (eventCode == "sanbruno2021") {
          document.getElementById("partner-link-a").href = "https://www.sanbruno.ca.gov/";
          document.getElementById("partnership-a").src = "/assets/partner-logos/san-bruno.png?v=2";
        } else if (eventCode == "placentia2021") {
          document.getElementById("partner-link-a").href = "https://www.placentia.org/";
          document.getElementById("partnership-a").src = "/assets/partner-logos/placentia.png?v=2";
        } else if (eventCode == "lakewood2021") {
          document.getElementById("partner-link-a").href = "https://www.lakewoodcity.org/";
          document.getElementById("partnership-a").src = "/assets/partner-logos/lakewood.png?v=2";
        } else if (eventCode == "lamirada2021") {
          document.getElementById("partner-link-a").href = "https://www.cityoflamirada.org/";
          document.getElementById("partnership-a").src = "/assets/partner-logos/la-mirada.png?v=2";
        } else if (eventCode == "anaheim2021") {
          document.getElementById("partner-link-a").href = "https://www.anaheim.net/";
          document.getElementById("partnership-a").src = "/assets/partner-logos/anaheim.png?v=2";
        } else if (eventCode == "arcadia2021") {
          document.getElementById("partner-link-a").href = "https://www.arcadiaca.gov/";
          document.getElementById("partnership-a").src = "/assets/partner-logos/arcadia.png?v=2";
        } else if (eventCode == "sandimas2021") {
          document.getElementById("partner-link-a").href = "https://sandimasca.gov/";
          document.getElementById("partnership-a").src = "/assets/parter-logos/partners-san-dimas.png?v=2";
        } else if (eventCode === "sonomaco") {
          document.getElementById("partner-link-a").href = "https://sonomacounty.ca.gov";
          document.getElementById("partnership-a").src = "/assets/partners-sonoma.png?v=2";
        } else if (eventCode === "pasadena2021") {
          document.getElementById("partner-link-a").href = "https://www.cityofpasadena.net/";
          document.getElementById("partnership-a").src = "/assets/partners-pasadena.png?v=2";
          document.getElementById("partnership-a").style.background = "#00275d";
        } else if (eventCode === "sbcounty") {
          document.getElementById("partner-link-a").href = "https://www.countyofsb.org/";
          document.getElementById("partnership-a").src = "/assets/partners-santabarbara.png?v=2";
          document.getElementById("partnership-a").style.background = "#22a8c4";
        } else if (eventCode === "goleta") {
          document.getElementById("partner-link-a").href = "https://www.cityofgoleta.org/";
          document.getElementById("partnership-a").src = "/assets/partners-goleta.png?v=2";
        } else if (eventCode === "yumasup") {
          document.getElementById("partner-link-a").href = "https://www.yumacountyaz.gov";
          document.getElementById("partnership-a").src = "/assets/partners-yuma.png";
        } else if (eventCode === "yumaawc") {
          document.getElementById("partner-link-a").href = "https://www.azwestern.edu";
          document.getElementById("partnership-a").src = "/assets/partners-awc.png";
        } else if (eventCode === "marinco") {
          document.getElementById("partner-link-a").href = "https://www.marincounty.org/";
          document.getElementById("partnership-a").src = "/assets/partners-marin.png?v=2";
        } else if (eventCode === "marinaca") {
          document.getElementById("partner-link-a").href = "https://cityofmarina.org/";
          document.getElementById("partnership-a").src = "/assets/partners-marina.png?v=2";
        } else if (eventCode === "arroyog") {
          document.getElementById("partner-link-a").href = "http://www.arroyogrande.org/";
          document.getElementById("partnership-a").src = "/assets/partners-arroyo.png?v=2";
        } else if (eventCode === "fresno") {
          document.getElementById("partner-link-a").href = "https://www.co.fresno.ca.us/";
          document.getElementById("partnership-a").src = "/assets/partners-fresno.png?v=2";
          document.getElementById("partnership-a").style.background = "#1C385A";
        } else if (eventCode === "fresnocity") {
          document.getElementById("partner-link-a").href = "https://fresno.gov";
          document.getElementById("partnership-a").src = "/assets/partners-fresno-city.jpeg?v=2";
        } else if (eventCode === "nevadaco") {
          document.getElementById("partner-link-a").href = "https://www.mynevadacounty.com/";
          document.getElementById("partnership-a").src = "/assets/partners-ca_nevada.png?v=2";
        } else if (eventCode === "sanmateoco") {
          document.getElementById("partner-link-a").href = "https://www.smcgov.org/";
          document.getElementById("partnership-a").src = "/assets/partners-sanmateoco.png?v=2";
        } else if (eventCode === "kingsco") {
          document.getElementById("partner-link-a").href = "https://www.countyofkings.com/";
          document.getElementById("partnership-a").src = "/assets/partners-kings.svg?v=2";
          document.getElementById("partnership-a").style.background = "#142942";
        } else if (eventCode === "mercedco") {
          document.getElementById("partner-link-a").href = "https://www.co.merced.ca.us/";
          document.getElementById("partnership-a").src = "/assets/partners-merced.png?v=2";
        } else if (eventCode === "sanbenito") {
          document.getElementById("partner-link-a").href = "https://www.cosb.us/";
          document.getElementById("partnership-a").src = "/assets/partners-sanbenito.svg?v=2";
        } else if (eventCode === "camarillo") {
          document.getElementById("partner-link-a").href = "https://www.ci.camarillo.ca.us/";
          document.getElementById("partnership-a").src = "/assets/partners-camarillo.png?v=2";
        } else if (eventCode === "chulavista") {
          document.getElementById("partner-link-a").href = "https://www.chulavistaca.gov/";
          document.getElementById("partnership-a").src = "/assets/partners-chulavista.png?v=2";
        } else if (eventCode === "bellflower") {
          document.getElementById("partner-link-a").href = "https://www.bellflower.org/";
          document.getElementById("partnership-a").src = "/assets/partners-bellflower.png?v=2";
        } else if (eventCode === "lakee") {
          document.getElementById("partner-link-a").href = "http://www.lake-elsinore.org";
          document.getElementById("partnership-a").src = "/assets/partners-lake_el.png?v=2";
        } else if (eventCode === "chino2021") {
          document.getElementById("partner-link-a").href = "https://www.cityofchino.org";
          document.getElementById("partnership-a").src = "/assets/partners-chino.png?v=2";
        } else if (eventCode === "campbellcity") {
          document.getElementById("partner-link-a").href = "https://www.ci.campbell.ca.us";
          document.getElementById("partnership-a").src = "/assets/partners-campbell.png?v=2";
          document.getElementById("partnership-a").style.background = "#143e5d";
        } else if (eventCode === "fremont2021") {
          document.getElementById("partner-link-a").href = "https://www.fremont.gov";
          document.getElementById("partnership-a").src = "/assets/partners-fremont.png?v=2";
        } else if (eventCode === "buellton") {
          document.getElementById("partner-link-a").href = "https://cityofbuellton.com";
          document.getElementById("partnership-a").src = "/assets/partners-buellton.webp";
        } else if (eventCode === "groverbeach") {
          document.getElementById("partner-link-a").href = "https://www.grover.org";
          document.getElementById("partnership-a").src = "/assets/partners-grover.png?v=2";
        } else if (eventCode === "ocsd") {
          document.getElementById("partner-link-a").href = "https://oceanocsd.org";
          document.getElementById("partnership-a").src = "/assets/partners-oceano.png?v=2";
        } else if (eventCode === "vallejo") {
          document.getElementById("partner-link-a").href = "https://www.cityofvallejo.net";
          document.getElementById("partnership-a").src = "/assets/partners-vallejo.png?v=2";
        } else if (eventCode === "sunnyvale2021") {
          document.getElementById("partner-link-a").href = "https://sunnyvale.ca.gov";
          document.getElementById("partnership-a").src = "/assets/partners-sunnyvale.svg?v=2";
        } else if (eventCode === "laverne") {
          document.getElementById("partner-link-a").href = "https://www.cityoflaverne.org";
          document.getElementById("partnership-a").src = "/assets/partners-laverne.gif";
        } else if (eventCode === "pomonaca") {
          document.getElementById("partner-link-a").href = "https://www.pomonaca.gov";
          document.getElementById("partnership-a").src = "/assets/partners-pomona.png?v=2";
        } else if (eventCode === "richmondca") {
          document.getElementById("partner-link-a").href = "https://www.ci.richmond.ca.us";
          document.getElementById("partnership-a").src = "/assets/partners-richmond.png?v=2";
        } else if (eventCode === "elcajon") {
          document.getElementById("partner-link-a").href = "https://www.elcajon.gov";
          document.getElementById("partnership-a").src = "/assets/partners-elcajon.png?v=2";
        } else if (eventCode === "carlsbad2021") {
          document.getElementById("partner-link-a").href = "https://www.carlsbadca.gov";
          document.getElementById("partnership-a").src = "/assets/partners-carlsbad.png?v=2";
        } else if (eventCode === "encinitas2021") {
          document.getElementById("partner-link-a").href = "https://encinitasca.gov";
          document.getElementById("partnership-a").src = "/assets/partners-encinitas.png?v=2";
          document.getElementById("partnership-a").style.background = "#000";
        } else if (eventCode === "bp2021") {
          document.getElementById("partner-link-a").href = "http://www.buenapark.com";
          document.getElementById("partnership-a").src = "/assets/partners-buenapark.png?v=2";
          document.getElementById("partnership-a").style.background = "#263f55";
        } else if (eventCode === "hmb2021") {
          document.getElementById("partner-link-a").href = "https://www.half-moon-bay.ca.us";
          document.getElementById("partnership-a").src = "/assets/partners-halfmoon.png?v=2";
          document.getElementById("partnership-a").style.background = "#00457e";
        } else if (eventCode === "stockton2021") {
          document.getElementById("partner-link-a").href = "http://www.stocktonca.gov";
          document.getElementById("partnership-a").src = "/assets/partners-stockton.png?v=2";
        } else if (eventCode === "glendale2021") {
          document.getElementById("partner-link-a").href = "https://www.glendaleaz.com";
          document.getElementById("partnership-a").src = "/assets/partners-glendale.svg";
          document.getElementById("partnership-a").style.background = "#888";
        } else if (eventCode === "lodi2021") {
          document.getElementById("partner-link-a").href = "https://www.lodi.gov";
          document.getElementById("partnership-a").src = "/assets/partners-lodi.png?v=2";
          document.getElementById("partnership-a").style.background = "#000";
        } else if (eventCode === "glendora2021") {
          document.getElementById("partner-link-a").href = "https://drawglendora.org/";
          document.getElementById("partnership-a").src = "/assets/partners-glendora.png?v=2";
        } else if (eventCode === "torrance2021") {
          document.getElementById("partner-link-a").href = "https://www.torranceca.gov";
          document.getElementById("partnership-a").src = "/assets/partners-torrance.png";
          document.getElementById("partnership-a").style.background = "#888";
        } else if (eventCode === "poway2021") {
          document.getElementById("partner-link-a").href = "https://www.poway.org";
          document.getElementById("partnership-a").src = "/assets/partners-poway.png";
          document.getElementById("partnership-a").style.background = "#000";
        } else {
          document.getElementById("partner-link-a").href = "https://www.saccounty.net/Redistricting/Pages/default.aspx";
          document.getElementById("partnership-a").src = "/assets/partners-sacramento.png?v=2";
        }
      } else if (["cityofdallas"].includes(eventCode)) {
        document.getElementById("partnership-icons").style.display = "block";
        document.getElementById("partnership-b").src = "/assets/partners-arcbridge.jpeg";
        document.getElementById("partner-link-b").href = "https://www.arcbridge.com";
        document.getElementById("partner-link-a").href = "https://dallascityhall.com";
        document.getElementById("partnership-a").src = "/assets/partners-dallas.png";
      } // document.getElementById("eventCode").innerText = og_eventCode;


      if (eventDescriptions[eventCode]) {
        var desc = document.createElement("div");
        desc.innerHTML = eventDescriptions[eventCode];
        document.getElementById("event-description").prepend(desc);
      }

      if (longAbout[eventCode]) {
        document.getElementById("about-section").style.display = "block";
        document.getElementsByClassName("about-section")[0].style.display = "list-item";
        document.getElementById("about-section-text").innerHTML = longAbout[eventCode].map(function (p) {
          return '<p>' + p + '</p>';
        }).join("");
      }

      if (eventCode === "ttt") {
        var title = document.getElementById("districting-options-title");
        render(html(_templateObject || (_templateObject = _taggedTemplateLiteral(["<text class=\"italic-note\">This is a training page for using Districtr to draw districts and map communities.\n            You can start in any state and use the tag \"TTT\" to post here.</text>"]))), title);
        var map_section = document.getElementById("districting-options");
        render(until(PlaceMapWithData(function (tgt) {
          return toStateCommunities(tgt, 'ttt');
        }), ""), map_section);
      }

      if (eventCode === "open-maps") {
        // ohio mini-map
        document.getElementById("mini-maps").style.display = "block";
        document.getElementById("districting-options").style.display = "none";
        document.getElementById("districting-options-title").style.display = "none";
        var scale = 3200;
        var translate = [-440, 240];
        var path = geoPath(geoAlbersUsaTerritories$1.geoAlbersUsaTerritories().scale(scale).translate(translate)).pointRadius(9);
        fetch("/assets/oh-zone-map.geojson").then(function (res) {
          return res.json();
        }).then(function (gj) {
          render(svg(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["<svg viewBox=\"0 0 300 300\" style=\"width:300px; height:300px;\">\n              <g id=\"states-group\" @mouseleave=", ">\n                ", "\n                </g>\n              </svg>"])), function () {}, gj.features.filter(function (f) {
            return f.geometry.type !== "Point";
          }).map(function (feature, idx) {
            return svg(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["<path id=\"x\" stroke-width=\"0\"\n                        d=\"", "\"\n                        @click=", "\n                    ></path>"])), path(feature), function (e) {
              document.querySelectorAll(".pcommunity")[0].click();
            });
          })), document.getElementById("mini-map-0"));
          render(svg(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["<svg viewBox=\"0 0 300 300\" style=\"width:300px; height:300px;\">\n              <g id=\"states-group\" @mouseleave=", ">\n                ", "\n                </g>\n              </svg>"])), function () {}, gj.features.filter(function (f) {
            return f.geometry.type !== "Point";
          }).map(function (feature, idx) {
            return svg(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["<path id=\"x\" stroke=\"#fff\" stroke-width=\"2\" stroke-linejoin=\"round\" stroke-linecap=\"round\"\n                        d=\"", "\"\n                        @click=", "></path>"])), path(feature), function (e) {
              document.querySelector(".pcommunity." + feature.properties.name).click();
            });
          })), document.getElementById("mini-map"));
          render(svg(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["<svg viewBox=\"0 0 300 300\" style=\"width:300px; height:300px;\">\n                <g id=\"states-group\" @mouseleave=", ">\n                  ", "\n                  ", "\n                  </g>\n                </svg>"])), function () {}, gj.features.filter(function (f) {
            return f.geometry.type !== "Point";
          }).map(function (feature, idx) {
            return svg(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["<path id=\"x\" fill=\"#ccc\" stroke-width=\"0\"\n                          d=\"", "\"\n                      ></path>"])), path(feature));
          }), gj.features.filter(function (f) {
            return f.geometry.type === "Point";
          }).map(function (feature, idx) {
            return svg(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["<path class=\"circle\"\n                          d=\"", "\"\n                          @mouseover=", "\n                          @mouseout=", "\n                          @click=", "></path>"])), path(feature), function () {
              document.getElementById("city-caption").innerText = feature.properties.name;
            }, function () {
              document.getElementById("city-caption").innerText = "";
            }, function (e) {
              document.querySelectorAll(".pcommunity").forEach(function (block) {
                var city = block.innerText.trim().split("\n")[0].toLowerCase();

                if (feature.properties.name.toLowerCase().includes(city)) {
                  block.click();
                }
              });
            });
          })), document.getElementById("mini-map-2"));
        });
      }

      if (document.getElementById("draw-goal")) {
        if (hybrid_events.includes(eventCode)) {
          document.getElementById("draw-goal").innerText = 'drawing';
        } else {
          document.getElementById("draw-goal").innerText = coi_events.includes(eventCode) ? "drawing your community" : "drawing districts";
        }
      }

      var target = document.getElementById("districting-options");

      if (typeof validEventCodes[eventCode] === 'string') {
        validEventCodes[eventCode] = [validEventCodes[eventCode]];
      }

      if (!validEventCodes[eventCode].length) {
        document.getElementById("communities").style.display = "none";
        document.getElementsByClassName("draw-section")[0].style.display = "none";
        document.getElementsByTagName("p")[0].style.display = "none";
      }

      listPlacesForState(stateForEvent[eventCode], coi_events.includes(eventCode)).then(function (places) {
        validEventCodes[eventCode].forEach(function (placeID) {
          var place = places.find(function (p) {
            return p.id === placeID;
          });

          if (coi_events.includes(eventCode) || coi_events.includes(placeID)) {
            place.districtingProblems = [{
              type: "community",
              numberOfParts: 250,
              pluralNoun: "Community"
            }];
          } else if (eventCode === "mapsofla") {
            place.districtingProblems = place.districtingProblems.map(function (p) {
              return _objectSpread2(_objectSpread2({}, p), {}, {
                number_intro: 'Draw the '
              });
            });
          }

          if (unitTypes[eventCode]) {
            if (unitTypes[eventCode].no) {
              // block-list
              place.units = place.units.filter(function (u) {
                return !unitTypes[eventCode].no.includes(u.name);
              });
            } else if (unitTypes[eventCode].yes) {
              // allow-list
              place.units = place.units.filter(function (u) {
                return unitTypes[eventCode].yes.includes(u.name);
              });
            }
          }

          var mydiv = document.createElement('li');
          target.append(mydiv);
          until(render(placeItems(place, startNewPlan, eventCode, portal_events.includes(eventCode)), mydiv), "Loading...");

          if (hybrid_events.includes(eventCode)) {
            var mydiv2 = document.createElement('li');
            target.append(mydiv2);
            render(placeItems(_objectSpread2(_objectSpread2({}, place), {}, {
              districtingProblems: [{
                type: 'community',
                numberOfParts: 250,
                pluralNoun: "Community",
                custom_intro: eventCode === "mapsofla" ? "Draw your community" : ""
              }]
            }), startNewPlan, eventCode, portal_events.includes(eventCode)), mydiv2);
          }
        });
      }); // hide Start Drawing section for pmc-districts

      if (eventCode == 'pmc-districts') {
        document.getElementById("communities").style.display = 'none';
        document.getElementById("districting-options-title").style.display = 'none';
        target.style.display = 'none';
      }

      var limitNum = 8;
      var eventurl = window.location.hostname === "localhost" ? "/assets/sample_event.json" : "/.netlify/functions/eventRead?skip=0&limit=".concat(limitNum + 1, "&event=").concat(eventCode);

      var showPlans = function showPlans(data) {
        var drafts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        console.log(["showPlans", data, drafts]);
        var loadExtraPlans = data.plans.length > limitNum || window.location.hostname.includes("localhost");

        if (loadExtraPlans) {
          data.plans.pop();
        } // hide at start


        if (drafts && draftskip < 0) {
          data.plans = [];
          loadExtraPlans = true;
        }

        drafts ? prevDrafts = prevDrafts.concat(data.plans.filter(function (p) {
          return !(blockPlans[eventCode] || []).includes(p.simple_id);
        })) : prevPlans = prevPlans.concat(data.plans.filter(function (p) {
          return !(blockPlans[eventCode] || []).includes(p.simple_id);
        }));
        var plans = [{
          title: eventCode === "missouri-mapping" ? "What community maps can look like" : drafts ? "Works in Progress" : "Public Gallery",
          plans: drafts ? prevDrafts : prevPlans
        }];
        var pinwheel = drafts ? "event-pinwheel-drafts" : "event-pinwheel";
        var button = drafts ? "loadMoreDrafts" : "loadMorePlans";
        var fetchurl = drafts ? eventurl + "&type=draft" : eventurl;

        if (eventCode != 'pmc-districts') {
          // do not show for PMC Districts
          render(html(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n                  ", "\n                  ", "\n              "])), plansSection(plans, eventCode), loadExtraPlans ? html(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["<button id=\"", "\" @click=\"", "\">Load ", "</button>\n                    ", ""])), button, function (e) {
            document.getElementById(pinwheel).style.display = "block";
            document.getElementById(button).disabled = true;
            fetch(fetchurl.replace("skip=0", "skip=".concat(drafts ? draftskip + limitNum : skip + limitNum))).then(function (res) {
              return res.json();
            }).then(function (d) {
              drafts ? draftskip += limitNum : skip += limitNum;
              document.getElementById(pinwheel).style.display = "none";
              document.getElementById(button).disabled = false;
              showPlans(d, drafts);
            });
          }, drafts ? draftskip < 0 ? "Drafts" : "More Drafts" : "More Plans", loadExtraPlans ? html(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["<img id=\"", "\" src=\"/assets/pinwheel2.gif\" style=\"display:none\"/>"])), pinwheel) : "") : ""), drafts ? document.getElementById("drafts") : document.getElementById("plans"));
        } // While we are here, remove the nav bar links
        else {
            document.getElementById('shared-nav').style.display = "none";
            document.getElementById('drafts-nav').style.display = "none";
          }

        if (proposals_by_event[eventCode]) {
          setTimeout(function () {
            fetch("/assets/plans/".concat(eventCode, ".json")).then(function (res) {
              return res.json();
            }).then(function (sample) {
              render(plansSection([{
                title: 'Sample plans',
                plans: sample.plans,
                desc: sample.description ? sample.description : null
              }], eventCode, true), document.getElementById("proposals"));
            });
          }, 500);
        } else {
          document.getElementById("sample_plan_link").style.display = "none";
        }
      };

      fetch(eventurl).then(function (res) {
        return res.json();
      }).then(showPlans);
      var drafturl = eventurl + (window.location.hostname === "localhost" ? "" : "&type=draft");
      fetch(drafturl.replace("limit=".concat(limitNum + 1), "limit=1")).then(function (res) {
        return res.json();
      }).then(function (p) {
        return showPlans(p, true);
      });
    } else {
      var _target = document.getElementById("districting-options");

      render("Tag or Organization not recognized", _target);
    }
  });

  var plansSection = function plansSection(plans, eventCode, isProfessionalSamples) {
    return plans.map(function (_ref) {
      var title = _ref.title,
          plans = _ref.plans,
          desc = _ref.desc;
      return html(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n            <section id=\"", "\" class=\"place__section\">\n                <h2>", "</h2>\n                ", "\n                ", "\n                <ul class=\"plan-thumbs\">\n                    ", "\n                </ul>\n            </section>\n        "])), isProfessionalSamples ? "sample" : "shared", title, isProfessionalSamples || !proposals_by_event[eventCode] ? html(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["<p>\n                    ", "\n                </p>"])), ["saccounty", "saccountymap", "city_of_napa"].includes(eventCode) || !plans.length ? "As maps are submitted they will appear below, and you will be able to click on any of the maps to open it in Districtr." : eventCode == 'pmc-districts' ? html(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["Click on any of the maps below to open it in Districtr. If you edit one of these plans, and save\n                            it with the tag \"pmc\", it will be added to the gallery <a href='/event/pmc' target='_blank'>here</a>.\n                            <b>These sample plans were generated randomly, using various combinations of the PMC\u2019s criteria.\n                             They are intended for use as starting points for exploration. You can read more about their properties\n                             in <a href='https://www.dropbox.com/s/udenpl7zns12b22/Wisconsin.pdf?dl=0' target='_blank'>this summary</a>,\n                             which includes data on the plans.</b>"]))) : "Click on any of the maps below to open it in Districtr.") : null, desc ? html(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["<h4>", "</h4>"])), desc) : "", plans.map(function (p, i) {
        return loadablePlan(p, eventCode == 'pmc-districts' ? 'pmc' : eventCode, isProfessionalSamples);
      }));
    });
  };

  var loadablePlan = function loadablePlan(plan, eventCode, isProfessionalSamples) {
    plan.filledBlocks || Object.keys(plan.plan.assignment || {}).length;
        new Set(Object.values(plan.plan.assignment || {}).map(function (z) {
      return z && z.length ? z[0] : z;
    }).filter(function (z) {
      return ![null, "null", undefined, "undefined", -1].includes(z);
    })).size;
        plan.plan.problem.numberOfParts;
    var screenshot = plan.screenshot2 || plan.screenshot;
    var urlcode = eventCode;

    if (portal_events.includes(eventCode)) {
      urlcode += '&portal';
    }

    return html(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n    <a href=\"/edit/", "?event=", "\">\n        <li class=\"plan-thumbs__thumb\">\n            ", "\n            <figcaption class=\"thumb__caption\">\n                <h6 class=\"thumb__heading\">", "\n                      <br/>\n                      ID: ", "</h6>\n                <br/>\n                ", "\n                <span>\n                  ", "\n                  <br/>\n                  ", "\n                  <br/>\n                  from ", "\n                </span>\n                <br/>\n                ", "\n            </figcaption>\n        </li>\n    </a>"])), plan.simple_id || plan._id, urlcode, screenshot && screenshot.length > 50 ? html(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["<img\n                    class=\"thumb__img\"\n                    src=\"", "\"\n                    alt=\"Districting Plan ", "\"\n                />"])), screenshot, plan.simple_id) : '', plan.planName || '', plan.simple_id || plan._id, plan.isScratch ? html(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["<h4 style=\"font-style: italic\">Draft Plan</h4>"]))) : "", plan.plan.place.name || "", plan.plan.problem.type === "community" ? "Communities of Interest" : plan.plan.problem.pluralNoun, plan.plan.units.name, isProfessionalSamples ? "" : html(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["<span>Updated<br/>\n                      ", "</span>"])), new Date(plan.startDate).toLocaleString()));
  };

  function toStateCommunities(s, eventCode) {
    var show_just_communities = true;
    var tgt = document.getElementById('districting-options');
    render("", tgt);
    listPlaces(null, s.properties.NAME).then(function (items) {
      var placesList = items.filter(function (place) {
        return !place.limit || show_just_communities;
      }).map(communitiesFilter);
      var lstdiv = document.createElement('div');
      tgt.append(lstdiv);
      placesList.forEach(function (place) {
        place.districtingProblems = [{
          type: "community",
          numberOfParts: 250,
          pluralNoun: "Community"
        }];
        var mydiv = document.createElement('li');
        lstdiv.append(mydiv);
        render(placeItems(place, startNewPlan, eventCode, portal_events.includes(eventCode)), mydiv);
      });
    });
  }

  return event;

})));
//# sourceMappingURL=event.js.map
