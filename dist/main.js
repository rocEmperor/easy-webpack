(function(graph){
            function require(moduleId){ 
                function localRequire(relativePath){
                    return require(graph[moduleId].dependecies[relativePath])
                }
                var exports = {};
                (function(require,exports,code){
                    eval(code)
                })(localRequire,exports,graph[moduleId].code);
                return exports;
            }
            require('./src/index.js')
        })({"./src/index.js":{"dependecies":{"./hello.js":"./src\\hello.js"},"code":"\"use strict\";\n\nvar _hello = require(\"./hello.js\");\n\ndocument.write((0, _hello.say)(\"webpack 哈哈哈\"));"},"./src\\hello.js":{"dependecies":{"./next.js":"./src\\next.js"},"code":"\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.say = say;\n\nrequire(\"./next.js\");\n\nfunction say(name) {\n  return \"hello \".concat(name);\n}"},"./src\\next.js":{"dependecies":{"./four.js":"./src\\four.js"},"code":"\"use strict\";\n\nrequire(\"./four.js\");\n\nconsole.log('next');"},"./src\\four.js":{"dependecies":{},"code":"\"use strict\";\n\nconsole.log('four');"}})