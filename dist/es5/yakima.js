(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.ieBundle = factory());
}(this, (function () { 'use strict';

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

  var _templateObject$1, _templateObject2$1;
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
  ({
    multimember: html(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteral(["\n        <div class=\"place-info\">\n            Multi-member districts of varying sizes\n        </div>\n    "]))),
    community: html(_templateObject2$1 || (_templateObject2$1 = _taggedTemplateLiteral(["\n        <div class=\"place-info\">Identify a community</div>\n    "])))
  });

  var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;
  var yakima = (function () {
    listPlacesForState("Washington").then(function (places) {
      var target = document.getElementById("districting-options");
      render(districtingOptions(places), target);
    });
    render(plansSection(), document.getElementById("plans"));
  });
  var plans = [{
    title: "Sample valid 3-district plans",
    plans: [{
      id: "plan_a",
      name: "Plan A",
      numbers: []
    }, {
      id: "plan_b",
      name: "Plan B",
      numbers: []
    }, {
      id: "plan_c",
      name: "Plan C",
      numbers: []
    }]
  }];

  var plansSection = function plansSection() {
    return plans.map(function (_ref) {
      var title = _ref.title,
          plans = _ref.plans;
      return html(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n            <section class=\"place__section\">\n                <h3>", "</h3>\n                ", "\n            </section>\n        "])), title, loadablePlans(plans));
    });
  };

  var loadablePlans = function loadablePlans(plans) {
    return html(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n        <ul class=\"plan-thumbs\">\n            ", "\n        </ul>\n    "])), plans.map(loadablePlan));
  };

  var numberList = function numberList(numbers) {
    return html(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    <dl class=\"number-list\">\n        ", "\n    </dl>\n"])), numbers.map(function (_ref2) {
      var number = _ref2.number,
          caption = _ref2.caption;
      return html(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n                <div class=\"number-list__row\">\n                    <dt class=\"number-list__number\">", "</dt>\n                    <dd class=\"number-list__caption\">", "</dd>\n                </div>\n            "])), number, caption);
    }));
  };

  var loadablePlan = function loadablePlan(plan) {
    return html(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    <a href=\"/yakima/", "\">\n        <li class=\"plan-thumbs__thumb\">\n            <img\n                class=\"thumb__img\"\n                src=\"/assets/yakima-plans/", ".png?v=2\"\n                alt=\"Districting Plan ", "\"\n            />\n            <figcaption class=\"thumb__caption\">\n                <h6 class=\"thumb__heading\">", "</h6>\n                ", "\n                ", "\n            </figcaption>\n        </li>\n    </a>\n"])), plan.id, plan.id, plan.id, plan.name || plan.id, plan.description ? plan.description : "", plan.numbers ? numberList(plan.numbers) : "");
  };

  var districtingOptions = function districtingOptions(places) {
    return html(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n        <ul class=\"places-list places-list--columns\">\n            ", "\n        </ul>\n    "])), placeItemsTemplate(places[0], startNewPlan));
  };

  var placeItemsTemplate = function placeItemsTemplate(place, onClick) {
    return place.districtingProblems.map(function (problem) {
      return getUnits(place, problem).map(function (units) {
        return html(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n                    <li\n                        class=\"places-list__item places-list__item--small\"\n                        @click=\"", "\"\n                    >\n                        <div class=\"place-name\">\n                            ", " ", "\n                        </div>\n                        <div class=\"place-info\">\n                            Built out of ", "\n                        </div>\n                    </li>\n                "])), function () {
          return onClick(place, problem, units);
        }, problem.numberOfParts, problem.pluralNoun, units.unitType);
      });
    }).reduce(function (items, item) {
      return [].concat(_toConsumableArray(items), _toConsumableArray(item));
    }, []);
  };

  return yakima;

})));
//# sourceMappingURL=yakima.js.map
