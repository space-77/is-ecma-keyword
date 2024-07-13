const keyword = [
  "if",
  "in",
  "do",
  "var",
  "for",
  "let",
  "new",
  "try",
  "this",
  "else",
  "case",
  "void",
  "with",
  "enum",
  "null",
  "true",
  "false",
  "async",
  "await",
  "while",
  "break",
  "catch",
  "throw",
  "const",
  "yield",
  "class",
  "super",
  "return",
  "typeof",
  "delete",
  "switch",
  "export",
  "import",
  "public",
  "static",
  "package",
  "default",
  "private",
  "finally",
  "extends",
  "function",
  "protected",
  "undefined",
  "continue",
  "arguments",
  "debugger",
  "interface",
  "implements",
  "instanceof",
  "constructor",
];

const errObjs = [
  "Error",
  "RangeError",
  "ReferenceError",
  "SyntaxError",
  "TypeError",
  "URIError",
];

const jsObj = [
  "Array",
  "ArrayBuffer",
  "BigInt",
  "BigInt64Array",
  "BigUint64Array",
  "Blob",
  "Boolean",
  "Buffer",
  "DataView",
  "Date",
  "Float32Array",
  "Float64Array",
  "Function",
  "Infinity",
  "Int16Array",
  "Int32Array",
  "Int8Array",
  "Intl",
  "JSON",
  "Map",
  "Math",
  "NaN",
  "Number",
  "Object",
  "Promise",
  "Proxy",
  "Reflect",
  "RegExp",
  "Set",
  "String",
  "Symbol",
  "Uint16Array",
  "Uint32Array",
  "Uint8Array",
  "Uint8ClampedArray",
  "WeakMap",
  "WeakSet",
  "clearImmediate",
  "clearInterval",
  "clearTimeout",
  "console",
  "decodeURI",
  "decodeURIComponent",
  "encodeURI",
  "encodeURIComponent",
  "escape",
  "eval",
  "globalThis",
  "isFinite",
  "isNaN",
  "parseFloat",
  "parseInt",
  "queueMicrotask",
  "setInterval",
  "setTimeout",
];

const jsKeyword = [...keyword, ...errObjs, ...jsObj];

const keywordReg = new RegExp(`^(${keyword.join("|")})$`);
const jsKeywordReg = new RegExp(`^(${jsKeyword.join("|")})$`);

/**
 * @description Check ECMA keywords.
 */
export default function isECMAKeyword(str: string) {
  return keywordReg.test(str);
}

/**
 * @description Check if it is a word already used in JS.
 */
export function isJsKeyword(str: string) {
  return jsKeywordReg.test(str);
}
