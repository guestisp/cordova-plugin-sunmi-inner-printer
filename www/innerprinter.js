exec = require('cordova/exec');

module.exports = {
  bufferToBase64: function(buf) {
    var binstr = Array.prototype.map.call(buf, function (ch) {
      return String.fromCharCode(ch);
    }).join('');
    return btoa(binstr);
  },
  printerInit: function (resolve, reject) {
    exec(resolve, reject, "Printer", "printerInit", []);
  },
  printerSelfChecking: function (resolve, reject) {
    exec(resolve, reject, "Printer", "printerSelfChecking", []);
  },
  getPrinterSerialNo: function (resolve, reject) {
    exec(resolve, reject, "Printer", "getPrinterSerialNo", []);
  },
  getPrinterVersion: function (resolve, reject) {
    exec(resolve, reject, "Printer", "getPrinterVersion", []);
  },
  hasPrinter: function (resolve, reject) {
    exec(resolve, reject, "Printer", "hasPrinter", []);
  },
  getPrintedLength: function (resolve, reject) {
    exec(resolve, reject, "Printer", "getPrintedLength", []);
  },
  lineWrap: function (count, resolve, reject) {
    exec(resolve, reject, "Printer", "lineWrap", [count]);
  },
  sendRAWData: function (base64Data, resolve, reject) {
    exec(resolve, reject, "Printer", "sendRAWData", [base64Data]);
  },
  setAlignment: function (alignment, resolve, reject) {
    exec(resolve, reject, "Printer", "setAlignment", [alignment]);
  },
  setFontName: function (typeface, resolve, reject) {
    exec(resolve, reject, "Printer", "setFontName", [typeface]);
  },
  setFontSize: function (fontSize, resolve, reject) {
    exec(resolve, reject, "Printer", "setFontSize", [fontSize]);
  },
  printTextWithFont: function (text, typeface, fontSize, resolve, reject) {
    exec(resolve, reject, "Printer", "printTextWithFont", [text, typeface, fontSize]);
  },
  printColumnsText: function (colsTextArr, colsWidthArr, colsAlign, resolve, reject) {
    exec(resolve, reject, "Printer", "printColumnsText", [colsTextArr, colsWidthArr, colsAlign]);
  },
  printBitmap: function (base64Data, width, height, resolve, reject) {
    exec(resolve, reject, "Printer", "printBitmap", [base64Data, width, height]);
  },
  printBarCode: function (barCodeData, symbology, width, height, textPosition, resolve, reject) {
    exec(resolve, reject, "Printer", "printBarCode", [barCodeData, symbology, width, height, textPosition]);
  },
  printQRCode: function (qrCodeData, moduleSize, errorLevel, resolve, reject) {
    exec(resolve, reject, "Printer", "printQRCode", [qrCodeData, moduleSize, errorLevel]);
  },
  printOriginalText: function (text, resolve, reject) {
    exec(resolve, reject, "Printer", "printOriginalText", [text]);
  },
  printString: function (text, resolve, reject) {
    exec(resolve, reject, "Printer", "printString", [text]);
  },
  printerStatusStartListener: function (onSuccess, onError) {
    exec(onSuccess, onError, "Printer", "printerStatusStartListener", []);
  },
  printerStatusStopListener: function () {
    exec(function () {}, function () {}, "Printer", "printerStatusStopListener", []);
  },
  setBold: function (resolve, reject) {
    var bold = [0x1b, 0x45, 0x1];
    var boldUint8 = new Uint8Array(bold);
    var base64Data = this.bufferToBase64(boldUint8);
    exec(resolve, reject, "Printer", "sendRAWData", [base64Data]);
  },
  unsetBold: function (resolve, reject) {
    var bold = [0x1b, 0x45, 0x0];
    var boldUint8 = new Uint8Array(bold);
    var base64Data = this.bufferToBase64(boldUint8);
    exec(resolve, reject, "Printer", "sendRAWData", [base64Data]);
  },
  enterPrinterBuffer: function (boolean) {
    exec(function () {}, function () {}, "Printer", "enterPrinterBuffer", [boolean]);
  },
  exitPrinterBuffer: function (boolean) {
    exec(function () {}, function () {}, "Printer", "exitPrinterBuffer", [boolean]);
  },
  commitPrinterBuffer: function () {
    exec(function () {}, function () {}, "Printer", "commitPrinterBuffer", []);
  },
  commitPrinterBufferWithCallback: function (resolve, reject) {
    exec(resolve, reject, "Printer", "commitPrinterBufferWithCallback", []);
  }
}