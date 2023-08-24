class f {
    constructor(query) {
        if (!window.document)
            throw Error("You need a document to use silkquery.");
        if (typeof query !== "string")
            throw TypeError("Query Selector must be a string.");
        var document = window.document;
        /**
         * Makes `Element.addEventHandler()` less boring to write.
         * @param {string} type The type of event to be fired
         * @param {(e: any) => void} func Callback when the event is fired
         */
        this.on = function on(type, func) {
            switch (type) {
                case "click":
                    document.querySelector(query).addEventListener("click", function (e) { return func(e); });
                    break;
                case "mouseenter":
                    document
                        .querySelector(query)
                        .addEventListener("mouseenter", function (e) { func(e); });
                    break;
                case "mouseexit":
                case "mouseleave":
                    document
                        .querySelector(query)
                        .addEventListener("mouseleave", function (e) { func(e); });
                    break;
                default:
                    console.warn("Type '".concat(type, "' is not a valid type."));
            }
        };
        /**
         * Sets the `innerHTML` property of the element.
         * @param {string} html What you want to set the `innerHTML` property to.
         */
        this.setHtml = function setHtml(html) {
            document.querySelector(query).innerHTML = html;
        };
        /**
         *
         * @returns The value of the `innerHTML` property.
         */
        this.getHtml = function getHtml() {
            return document.querySelector(query).innerHTML;
        };
        /**
         *
         * @param {string} text Sets the `textContent` property of an element
         */
        this.setText = function setText(text) {
            document.querySelector(query).textContent = text;
        };
        /**
         *
         * @returns The value of the `textContent` property.
         */
        this.getText = function getText() {
            return document.querySelector(query).textContent;
        };
        /**
         *
         * @param {string} id What you want to set the `id` property of an element
         */
        this.setId = function setId(id) {
            document.querySelector(query).id = id;
        };
        /**
         *
         * @returns The id of an element
         */
        this.getId = function getId() {
            return document.querySelector(query).id;
        };
        /**
         * Class List things
         */
        this.classList = {
            /**
             * @returns The current classList of the element.
             */
            get list() {
                return document.querySelector(query).classList;
            },
            /**
             *
             * @param {string} className class name
             * @returns {boolean} If the `classList` has the `className` in it.
             */
            has: function CLhasClass(className) {
                return document.querySelector(query).classList.contains(className);
            },
            /**
             *
             * @param {string} className Class to add to the classList
             */
            add: function CLaddClass(className) {
                document.querySelector(query).classList.add(className);
            },
            /**
             *
             * @param {string} className Class to remove from the classList
             */
            remove: function CLremoveClass(className) {
                document.querySelector(query).classList.remove(className);
            },
            /**
             *
             * @param {string} className Class to toggle
             */
            toggle: function CLtoggleClass(className) {
                document.querySelector(query).classList.toggle(className);
            },
        };
        /**
         * Appends child to the element.
         * @param {string | Element} child Child
         */
        this.appendChild = function appendChild(child) {
            if (typeof child === 'string') {
                document.querySelector(query).innerHTML += child;
            }
            else {
                document.querySelector(query).appendChild(child);
            }
            /**
             * Prepends child to the element.
             * @param {string | Element} child Child
             */
        };
        this.prependChild = function prependChild(child) {
            if (typeof child === 'string') {
                document.querySelector(query).innerHTML = "".concat(child).concat(document.querySelector(query).innerHTML);
            }
            else {
                document.querySelector(query).innerHTML = "".concat(child.outerHTML).concat(document.querySelector(query).innerHTML);
            }
        };
        /**
         * Inserts HTML **after** the element.
         * To append a child, use `f().appendChild()`
         * @param {string | Node} element The element you want to append
         */
        this.append = function append(element) {
            if (typeof element === 'string') {
                document.querySelector(query).after(document.createRange().createContextualFragment(element));
            }
            else {
                document.querySelector(query).after(element);
            }
        };
        /**
         * Inserts HTML **before** the element.
         * To prepend a child, use `f().prependChild()`
         * @param {string | Node} element The element you want to append
         */
        this.prepend = function prepend(element) {
            if (typeof element === 'string') {
                document.querySelector(query).before(document.createRange().createContextualFragment(element));
            }
            else {
                document.querySelector(query).before(element);
            }
        };
        // ? =================================================================================================
        // * Hide methods
        // ? =================================================================================================
        //@ts-ignore
        this.hide = function () {
            //@ts-ignore
            document.querySelector(query).style.visibility = 'hidden';
        };
        this.show = function () {
            //@ts-ignore
            document.querySelector(query).style.visibility = 'normal';
        };
        this.toggle = function () {
            //@ts-ignore
            if (document.querySelector(query).style.visibility === 'hidden') {
                //@ts-ignore
                document.querySelector(query).style.visibility = 'normal';
            }
            else {
                //@ts-ignore
                document.querySelector(query).style.display = 'hidden';
            }
        };
        return this;
    }
}
export default {f, c};
/**
 * Create a new element with the given options.
 * @param {{tag?: string, innerHTML?: string, textContent?: string, id?: string, classList?: string, src?: string, width?: number, height?: number, children?: HTMLElement[]}} options The options for the new element.
 * @returns {HTMLElement} The new element
 */
function c(options) {
    var elem = document.createElement(options.tag);
    if (options.innerHTML) {
        elem.innerHTML = options.innerHTML;
    }
    if (options.textContent) {
        elem.textContent = options.textContent;
    }
    if (options.id) {
        elem.id = options.id;
    }
    if (options.classList) {
        options.classList.split(' ').forEach(function (classNm) {
            elem.classList.add(classNm);
        });
    }
    if (options.src) {
        //@ts-ignore
        elem.src = options.src;
    }
    if (options.width) {
        //@ts-ignore
        elem.width = options.width;
    }
    if (options.height) {
        //@ts-ignore
        elem.height = options.height;
    }
    if (options.children) {
        //@ts-ignore
        options.children.forEach(element => {
            elem.appendChild(element);
        });
    }
    return elem;
}
