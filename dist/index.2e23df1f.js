// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"3AWbP":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "b31192152e23df1f";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id1][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"jeorp":[function(require,module,exports) {
var _qrReader = require("./web-components/cdc/qr-reader");
const cdcqrcodereader = document.querySelector("cdc-qrcodereader");
cdcqrcodereader.addEventListener("cdc-qrcodereader-read", (evt)=>{
    const ev = evt;
    console.log(ev.data);
    ev.destroy();
});

},{"./web-components/cdc/qr-reader":"dAQJ3"}],"dAQJ3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _cdcQrcodereaderComponent = require("./cdc-qrcodereader.component");
parcelHelpers.exportAll(_cdcQrcodereaderComponent, exports);

},{"./cdc-qrcodereader.component":"59Fwg","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"59Fwg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CDCQRCodeReaderEvent", ()=>CDCQRCodeReaderEvent);
parcelHelpers.export(exports, "CDCQRCodeReader", ()=>CDCQRCodeReader);
var _qrScanner = require("qr-scanner");
var _qrScannerDefault = parcelHelpers.interopDefault(_qrScanner);
var _cdcQrcodereaderTemplateHtml = require("bundle-text:./cdc-qrcodereader.template.html");
var _cdcQrcodereaderTemplateHtmlDefault = parcelHelpers.interopDefault(_cdcQrcodereaderTemplateHtml);
class CDCQRCodeReaderEvent extends CustomEvent {
    constructor(type, data, cornerPoints, destroy){
        super(type);
        this.data = data;
        this.cornerPoints = cornerPoints;
        this.destroy = destroy;
    }
}
class CDCQRCodeReader extends HTMLElement {
    #root = this.attachShadow({
        mode: "closed"
    });
    #select;
    #qrScanner;
    #targetCanvas;
    #targetCanvasContext;
    constructor(){
        super();
        this.#root.innerHTML = (0, _cdcQrcodereaderTemplateHtmlDefault.default);
        this.#select = this.#root.querySelector("select");
        this.#targetCanvas = this.#root.querySelector("canvas");
        this.#targetCanvasContext = this.#targetCanvas.getContext("2d");
        this.#listCams();
    }
    async #listCams() {
        const cams = await (0, _qrScannerDefault.default).listCameras(true);
        this.#select.innerHTML = `<option value="">-- escolha uma câmera --</option>`;
        this.#select.innerHTML += cams.map((c)=>`<option value="${c.id}">${c.label}</option>`).join("");
        this.#select.addEventListener("change", (ev)=>this.#onSelectCam(ev));
    }
     #onSelectCam(ev) {
        const video = document.createElement("video");
        const settings = {
            preferredCamera: this.#select.value
        };
        this.#qrScanner = new (0, _qrScannerDefault.default)(video, (res)=>this.#onQrReaded(res), settings);
        const can = this.#targetCanvas;
        const ctx = this.#targetCanvasContext;
        // ####### GAMBIARRA ####### BEGIN
        const originalCanvas = this.#qrScanner.$canvas;
        const gambLoop = ()=>{
            if (!this.#qrScanner) return ctx.clearRect(0, 0, can.width, can.height);
            ctx.drawImage(originalCanvas, 0, 0);
            requestAnimationFrame(gambLoop);
        };
        requestAnimationFrame(gambLoop);
        // ####### GAMBIARRA ####### END
        this.#qrScanner.start();
    }
     #onQrReaded(result) {
        const event = new CDCQRCodeReaderEvent("cdc-qrcodereader-read", result.data, result.cornerPoints, this.#destroy.bind(this));
        this.#root.host.dispatchEvent(event);
    }
     #destroy() {
        this.#qrScanner?.stop();
        this.#qrScanner = null;
        this.#select.value = "";
    }
}
customElements.define("cdc-qrcodereader", CDCQRCodeReader);

},{"qr-scanner":"cidMZ","bundle-text:./cdc-qrcodereader.template.html":"8jezy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cidMZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class e {
    constructor(a, b, c, d, f){
        this._legacyCanvasSize = e.DEFAULT_CANVAS_SIZE;
        this._preferredCamera = "environment";
        this._maxScansPerSecond = 25;
        this._lastScanTimestamp = -1;
        this._destroyed = this._flashOn = this._paused = this._active = !1;
        this.$video = a;
        this.$canvas = document.createElement("canvas");
        c && "object" === typeof c ? this._onDecode = b : (c || d || f ? console.warn("You're using a deprecated version of the QrScanner constructor which will be removed in the future") : console.warn("Note that the type of the scan result passed to onDecode will change in the future. To already switch to the new api today, you can pass returnDetailedScanResult: true."), this._legacyOnDecode = b);
        b = "object" === typeof c ? c : {};
        this._onDecodeError = b.onDecodeError || ("function" === typeof c ? c : this._onDecodeError);
        this._calculateScanRegion = b.calculateScanRegion || ("function" === typeof d ? d : this._calculateScanRegion);
        this._preferredCamera = b.preferredCamera || f || this._preferredCamera;
        this._legacyCanvasSize = "number" === typeof c ? c : "number" === typeof d ? d : this._legacyCanvasSize;
        this._maxScansPerSecond = b.maxScansPerSecond || this._maxScansPerSecond;
        this._onPlay = this._onPlay.bind(this);
        this._onLoadedMetaData = this._onLoadedMetaData.bind(this);
        this._onVisibilityChange = this._onVisibilityChange.bind(this);
        this._updateOverlay = this._updateOverlay.bind(this);
        a.disablePictureInPicture = !0;
        a.playsInline = !0;
        a.muted = !0;
        let h = !1;
        a.hidden && (a.hidden = !1, h = !0);
        document.body.contains(a) || (document.body.appendChild(a), h = !0);
        c = a.parentElement;
        if (b.highlightScanRegion || b.highlightCodeOutline) {
            d = !!b.overlay;
            this.$overlay = b.overlay || document.createElement("div");
            f = this.$overlay.style;
            f.position = "absolute";
            f.display = "none";
            f.pointerEvents = "none";
            this.$overlay.classList.add("scan-region-highlight");
            if (!d && b.highlightScanRegion) {
                this.$overlay.innerHTML = '<svg class="scan-region-highlight-svg" viewBox="0 0 238 238" preserveAspectRatio="none" style="position:absolute;width:100%;height:100%;left:0;top:0;fill:none;stroke:#e9b213;stroke-width:4;stroke-linecap:round;stroke-linejoin:round"><path d="M31 2H10a8 8 0 0 0-8 8v21M207 2h21a8 8 0 0 1 8 8v21m0 176v21a8 8 0 0 1-8 8h-21m-176 0H10a8 8 0 0 1-8-8v-21"/></svg>';
                try {
                    this.$overlay.firstElementChild.animate({
                        transform: [
                            "scale(.98)",
                            "scale(1.01)"
                        ]
                    }, {
                        duration: 400,
                        iterations: Infinity,
                        direction: "alternate",
                        easing: "ease-in-out"
                    });
                } catch (m) {}
                c.insertBefore(this.$overlay, this.$video.nextSibling);
            }
            b.highlightCodeOutline && (this.$overlay.insertAdjacentHTML("beforeend", '<svg class="code-outline-highlight" preserveAspectRatio="none" style="display:none;width:100%;height:100%;fill:none;stroke:#e9b213;stroke-width:5;stroke-dasharray:25;stroke-linecap:round;stroke-linejoin:round"><polygon/></svg>'), this.$codeOutlineHighlight = this.$overlay.lastElementChild);
        }
        this._scanRegion = this._calculateScanRegion(a);
        requestAnimationFrame(()=>{
            let m = window.getComputedStyle(a);
            "none" === m.display && (a.style.setProperty("display", "block", "important"), h = !0);
            "visible" !== m.visibility && (a.style.setProperty("visibility", "visible", "important"), h = !0);
            h && (console.warn("QrScanner has overwritten the video hiding style to avoid Safari stopping the playback."), a.style.opacity = "0", a.style.width = "0", a.style.height = "0", this.$overlay && this.$overlay.parentElement && this.$overlay.parentElement.removeChild(this.$overlay), delete this.$overlay, delete this.$codeOutlineHighlight);
            this.$overlay && this._updateOverlay();
        });
        a.addEventListener("play", this._onPlay);
        a.addEventListener("loadedmetadata", this._onLoadedMetaData);
        document.addEventListener("visibilitychange", this._onVisibilityChange);
        window.addEventListener("resize", this._updateOverlay);
        this._qrEnginePromise = e.createQrEngine();
    }
    static set WORKER_PATH(a) {
        console.warn("Setting QrScanner.WORKER_PATH is not required and not supported anymore. Have a look at the README for new setup instructions.");
    }
    static async hasCamera() {
        try {
            return !!(await e.listCameras(!1)).length;
        } catch (a) {
            return !1;
        }
    }
    static async listCameras(a = !1) {
        if (!navigator.mediaDevices) return [];
        let b = async ()=>(await navigator.mediaDevices.enumerateDevices()).filter((d)=>"videoinput" === d.kind), c;
        try {
            a && (await b()).every((d)=>!d.label) && (c = await navigator.mediaDevices.getUserMedia({
                audio: !1,
                video: !0
            }));
        } catch (d1) {}
        try {
            return (await b()).map((d, f)=>({
                    id: d.deviceId,
                    label: d.label || (0 === f ? "Default Camera" : `Camera ${f + 1}`)
                }));
        } finally{
            c && (console.warn("Call listCameras after successfully starting a QR scanner to avoid creating a temporary video stream"), e._stopVideoStream(c));
        }
    }
    async hasFlash() {
        let a;
        try {
            if (this.$video.srcObject) {
                if (!(this.$video.srcObject instanceof MediaStream)) return !1;
                a = this.$video.srcObject;
            } else a = (await this._getCameraStream()).stream;
            return "torch" in a.getVideoTracks()[0].getSettings();
        } catch (b) {
            return !1;
        } finally{
            a && a !== this.$video.srcObject && (console.warn("Call hasFlash after successfully starting the scanner to avoid creating a temporary video stream"), e._stopVideoStream(a));
        }
    }
    isFlashOn() {
        return this._flashOn;
    }
    async toggleFlash() {
        this._flashOn ? await this.turnFlashOff() : await this.turnFlashOn();
    }
    async turnFlashOn() {
        if (!this._flashOn && !this._destroyed && (this._flashOn = !0, this._active && !this._paused)) try {
            if (!await this.hasFlash()) throw "No flash available";
            await this.$video.srcObject.getVideoTracks()[0].applyConstraints({
                advanced: [
                    {
                        torch: !0
                    }
                ]
            });
        } catch (a) {
            throw this._flashOn = !1, a;
        }
    }
    async turnFlashOff() {
        this._flashOn && (this._flashOn = !1, await this._restartVideoStream());
    }
    destroy() {
        this.$video.removeEventListener("loadedmetadata", this._onLoadedMetaData);
        this.$video.removeEventListener("play", this._onPlay);
        document.removeEventListener("visibilitychange", this._onVisibilityChange);
        window.removeEventListener("resize", this._updateOverlay);
        this._destroyed = !0;
        this._flashOn = !1;
        this.stop();
        e._postWorkerMessage(this._qrEnginePromise, "close");
    }
    async start() {
        if (this._destroyed) throw Error("The QR scanner can not be started as it had been destroyed.");
        if (!this._active || this._paused) {
            if ("https:" !== window.location.protocol && console.warn("The camera stream is only accessible if the page is transferred via https."), this._active = !0, !document.hidden) {
                if (this._paused = !1, this.$video.srcObject) await this.$video.play();
                else try {
                    let { stream: a , facingMode: b  } = await this._getCameraStream();
                    !this._active || this._paused ? e._stopVideoStream(a) : (this._setVideoMirror(b), this.$video.srcObject = a, await this.$video.play(), this._flashOn && (this._flashOn = !1, this.turnFlashOn().catch(()=>{})));
                } catch (a) {
                    if (!this._paused) throw this._active = !1, a;
                }
            }
        }
    }
    stop() {
        this.pause();
        this._active = !1;
    }
    async pause(a = !1) {
        this._paused = !0;
        if (!this._active) return !0;
        this.$video.pause();
        this.$overlay && (this.$overlay.style.display = "none");
        let b = ()=>{
            this.$video.srcObject instanceof MediaStream && (e._stopVideoStream(this.$video.srcObject), this.$video.srcObject = null);
        };
        if (a) return b(), !0;
        await new Promise((c)=>setTimeout(c, 300));
        if (!this._paused) return !1;
        b();
        return !0;
    }
    async setCamera(a) {
        a !== this._preferredCamera && (this._preferredCamera = a, await this._restartVideoStream());
    }
    static async scanImage(a, b, c, d, f = !1, h = !1) {
        let m, n = !1;
        b && ("scanRegion" in b || "qrEngine" in b || "canvas" in b || "disallowCanvasResizing" in b || "alsoTryWithoutScanRegion" in b || "returnDetailedScanResult" in b) ? (m = b.scanRegion, c = b.qrEngine, d = b.canvas, f = b.disallowCanvasResizing || !1, h = b.alsoTryWithoutScanRegion || !1, n = !0) : b || c || d || f || h ? console.warn("You're using a deprecated api for scanImage which will be removed in the future.") : console.warn("Note that the return type of scanImage will change in the future. To already switch to the new api today, you can pass returnDetailedScanResult: true.");
        b = !!c;
        try {
            let p, k;
            [c, p] = await Promise.all([
                c || e.createQrEngine(),
                e._loadImage(a)
            ]);
            [d, k] = e._drawToCanvas(p, m, d, f);
            let q;
            if (c instanceof Worker) {
                let g = c;
                b || e._postWorkerMessageSync(g, "inversionMode", "both");
                q = await new Promise((l, v)=>{
                    let w, u, r, y = -1;
                    u = (t)=>{
                        t.data.id === y && (g.removeEventListener("message", u), g.removeEventListener("error", r), clearTimeout(w), null !== t.data.data ? l({
                            data: t.data.data,
                            cornerPoints: e._convertPoints(t.data.cornerPoints, m)
                        }) : v(e.NO_QR_CODE_FOUND));
                    };
                    r = (t)=>{
                        g.removeEventListener("message", u);
                        g.removeEventListener("error", r);
                        clearTimeout(w);
                        v("Scanner error: " + (t ? t.message || t : "Unknown Error"));
                    };
                    g.addEventListener("message", u);
                    g.addEventListener("error", r);
                    w = setTimeout(()=>r("timeout"), 1E4);
                    let x = k.getImageData(0, 0, d.width, d.height);
                    y = e._postWorkerMessageSync(g, "decode", x, [
                        x.data.buffer
                    ]);
                });
            } else q = await Promise.race([
                new Promise((g, l)=>window.setTimeout(()=>l("Scanner error: timeout"), 1E4)),
                (async ()=>{
                    try {
                        var [g] = await c.detect(d);
                        if (!g) throw e.NO_QR_CODE_FOUND;
                        return {
                            data: g.rawValue,
                            cornerPoints: e._convertPoints(g.cornerPoints, m)
                        };
                    } catch (l) {
                        g = l.message || l;
                        if (/not implemented|service unavailable/.test(g)) return e._disableBarcodeDetector = !0, e.scanImage(a, {
                            scanRegion: m,
                            canvas: d,
                            disallowCanvasResizing: f,
                            alsoTryWithoutScanRegion: h
                        });
                        throw `Scanner error: ${g}`;
                    }
                })()
            ]);
            return n ? q : q.data;
        } catch (p) {
            if (!m || !h) throw p;
            let k = await e.scanImage(a, {
                qrEngine: c,
                canvas: d,
                disallowCanvasResizing: f
            });
            return n ? k : k.data;
        } finally{
            b || e._postWorkerMessage(c, "close");
        }
    }
    setGrayscaleWeights(a, b, c, d = !0) {
        e._postWorkerMessage(this._qrEnginePromise, "grayscaleWeights", {
            red: a,
            green: b,
            blue: c,
            useIntegerApproximation: d
        });
    }
    setInversionMode(a) {
        e._postWorkerMessage(this._qrEnginePromise, "inversionMode", a);
    }
    static async createQrEngine(a) {
        a && console.warn("Specifying a worker path is not required and not supported anymore.");
        return !e._disableBarcodeDetector && "BarcodeDetector" in window && BarcodeDetector.getSupportedFormats && (await BarcodeDetector.getSupportedFormats()).includes("qr_code") ? new BarcodeDetector({
            formats: [
                "qr_code"
            ]
        }) : require("ed9696d199991341").then((b)=>b.createWorker());
    }
    _onPlay() {
        this._scanRegion = this._calculateScanRegion(this.$video);
        this._updateOverlay();
        this.$overlay && (this.$overlay.style.display = "");
        this._scanFrame();
    }
    _onLoadedMetaData() {
        this._scanRegion = this._calculateScanRegion(this.$video);
        this._updateOverlay();
    }
    _onVisibilityChange() {
        document.hidden ? this.pause() : this._active && this.start();
    }
    _calculateScanRegion(a) {
        let b = Math.round(2 / 3 * Math.min(a.videoWidth, a.videoHeight));
        return {
            x: Math.round((a.videoWidth - b) / 2),
            y: Math.round((a.videoHeight - b) / 2),
            width: b,
            height: b,
            downScaledWidth: this._legacyCanvasSize,
            downScaledHeight: this._legacyCanvasSize
        };
    }
    _updateOverlay() {
        requestAnimationFrame(()=>{
            if (this.$overlay) {
                var a = this.$video, b = a.videoWidth, c = a.videoHeight, d = a.offsetWidth, f = a.offsetHeight, h = a.offsetLeft, m = a.offsetTop, n = window.getComputedStyle(a), p = n.objectFit, k = b / c, q = d / f;
                switch(p){
                    case "none":
                        var g = b;
                        var l = c;
                        break;
                    case "fill":
                        g = d;
                        l = f;
                        break;
                    default:
                        ("cover" === p ? k > q : k < q) ? (l = f, g = l * k) : (g = d, l = g / k), "scale-down" === p && (g = Math.min(g, b), l = Math.min(l, c));
                }
                var [v, w] = n.objectPosition.split(" ").map((r, y)=>{
                    const x = parseFloat(r);
                    return r.endsWith("%") ? (y ? f - l : d - g) * x / 100 : x;
                });
                n = this._scanRegion.width || b;
                q = this._scanRegion.height || c;
                p = this._scanRegion.x || 0;
                var u = this._scanRegion.y || 0;
                k = this.$overlay.style;
                k.width = `${n / b * g}px`;
                k.height = `${q / c * l}px`;
                k.top = `${m + w + u / c * l}px`;
                c = /scaleX\(-1\)/.test(a.style.transform);
                k.left = `${h + (c ? d - v - g : v) + (c ? b - p - n : p) / b * g}px`;
                k.transform = a.style.transform;
            }
        });
    }
    static _convertPoints(a, b) {
        if (!b) return a;
        let c = b.x || 0, d = b.y || 0, f = b.width && b.downScaledWidth ? b.width / b.downScaledWidth : 1;
        b = b.height && b.downScaledHeight ? b.height / b.downScaledHeight : 1;
        for (let h of a)h.x = h.x * f + c, h.y = h.y * b + d;
        return a;
    }
    _scanFrame() {
        !this._active || this.$video.paused || this.$video.ended || ("requestVideoFrameCallback" in this.$video ? this.$video.requestVideoFrameCallback.bind(this.$video) : requestAnimationFrame)(async ()=>{
            if (!(1 >= this.$video.readyState)) {
                var a = Date.now() - this._lastScanTimestamp, b = 1E3 / this._maxScansPerSecond;
                a < b && await new Promise((d)=>setTimeout(d, b - a));
                this._lastScanTimestamp = Date.now();
                try {
                    var c = await e.scanImage(this.$video, {
                        scanRegion: this._scanRegion,
                        qrEngine: this._qrEnginePromise,
                        canvas: this.$canvas
                    });
                } catch (d2) {
                    if (!this._active) return;
                    this._onDecodeError(d2);
                }
                !e._disableBarcodeDetector || await this._qrEnginePromise instanceof Worker || (this._qrEnginePromise = e.createQrEngine());
                c ? (this._onDecode ? this._onDecode(c) : this._legacyOnDecode && this._legacyOnDecode(c.data), this.$codeOutlineHighlight && (clearTimeout(this._codeOutlineHighlightRemovalTimeout), this._codeOutlineHighlightRemovalTimeout = void 0, this.$codeOutlineHighlight.setAttribute("viewBox", `${this._scanRegion.x || 0} ` + `${this._scanRegion.y || 0} ` + `${this._scanRegion.width || this.$video.videoWidth} ` + `${this._scanRegion.height || this.$video.videoHeight}`), this.$codeOutlineHighlight.firstElementChild.setAttribute("points", c.cornerPoints.map(({ x: d , y: f  })=>`${d},${f}`).join(" ")), this.$codeOutlineHighlight.style.display = "")) : this.$codeOutlineHighlight && !this._codeOutlineHighlightRemovalTimeout && (this._codeOutlineHighlightRemovalTimeout = setTimeout(()=>this.$codeOutlineHighlight.style.display = "none", 100));
            }
            this._scanFrame();
        });
    }
    _onDecodeError(a) {
        a !== e.NO_QR_CODE_FOUND && console.log(a);
    }
    async _getCameraStream() {
        if (!navigator.mediaDevices) throw "Camera not found.";
        let a = /^(environment|user)$/.test(this._preferredCamera) ? "facingMode" : "deviceId", b = [
            {
                width: {
                    min: 1024
                }
            },
            {
                width: {
                    min: 768
                }
            },
            {}
        ], c = b.map((d)=>Object.assign({}, d, {
                [a]: {
                    exact: this._preferredCamera
                }
            }));
        for (let d4 of [
            ...c,
            ...b
        ])try {
            let f = await navigator.mediaDevices.getUserMedia({
                video: d4,
                audio: !1
            }), h = this._getFacingMode(f) || (d4.facingMode ? this._preferredCamera : "environment" === this._preferredCamera ? "user" : "environment");
            return {
                stream: f,
                facingMode: h
            };
        } catch (f) {}
        throw "Camera not found.";
    }
    async _restartVideoStream() {
        let a = this._paused;
        await this.pause(!0) && !a && this._active && await this.start();
    }
    static _stopVideoStream(a) {
        for (let b of a.getTracks())b.stop(), a.removeTrack(b);
    }
    _setVideoMirror(a) {
        this.$video.style.transform = "scaleX(" + ("user" === a ? -1 : 1) + ")";
    }
    _getFacingMode(a) {
        return (a = a.getVideoTracks()[0]) ? /rear|back|environment/i.test(a.label) ? "environment" : /front|user|face/i.test(a.label) ? "user" : null : null;
    }
    static _drawToCanvas(a, b, c, d = !1) {
        c = c || document.createElement("canvas");
        let f = b && b.x ? b.x : 0, h = b && b.y ? b.y : 0, m = b && b.width ? b.width : a.videoWidth || a.width, n = b && b.height ? b.height : a.videoHeight || a.height;
        d || (d = b && b.downScaledWidth ? b.downScaledWidth : m, b = b && b.downScaledHeight ? b.downScaledHeight : n, c.width !== d && (c.width = d), c.height !== b && (c.height = b));
        b = c.getContext("2d", {
            alpha: !1
        });
        b.imageSmoothingEnabled = !1;
        b.drawImage(a, f, h, m, n, 0, 0, c.width, c.height);
        return [
            c,
            b
        ];
    }
    static async _loadImage(a) {
        if (a instanceof Image) return await e._awaitImageLoad(a), a;
        if (a instanceof HTMLVideoElement || a instanceof HTMLCanvasElement || a instanceof SVGImageElement || "OffscreenCanvas" in window && a instanceof OffscreenCanvas || "ImageBitmap" in window && a instanceof ImageBitmap) return a;
        if (a instanceof File || a instanceof Blob || a instanceof URL || "string" === typeof a) {
            let b = new Image;
            b.src = a instanceof File || a instanceof Blob ? URL.createObjectURL(a) : a.toString();
            try {
                return await e._awaitImageLoad(b), b;
            } finally{
                (a instanceof File || a instanceof Blob) && URL.revokeObjectURL(b.src);
            }
        } else throw "Unsupported image type.";
    }
    static async _awaitImageLoad(a) {
        a.complete && 0 !== a.naturalWidth || await new Promise((b, c)=>{
            let d = (f)=>{
                a.removeEventListener("load", d);
                a.removeEventListener("error", d);
                f instanceof ErrorEvent ? c("Image load error") : b();
            };
            a.addEventListener("load", d);
            a.addEventListener("error", d);
        });
    }
    static async _postWorkerMessage(a, b, c, d) {
        return e._postWorkerMessageSync(await a, b, c, d);
    }
    static _postWorkerMessageSync(a, b, c, d) {
        if (!(a instanceof Worker)) return -1;
        let f = e._workerMessageId++;
        a.postMessage({
            id: f,
            type: b,
            data: c
        }, d);
        return f;
    }
}
e.DEFAULT_CANVAS_SIZE = 400;
e.NO_QR_CODE_FOUND = "No QR code found";
e._disableBarcodeDetector = !1;
e._workerMessageId = 0;
exports.default = e;

},{"ed9696d199991341":"9rXdq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9rXdq":[function(require,module,exports) {
module.exports = require("./helpers/browser/js-loader")(require("./helpers/bundle-url").getBundleURL("fnb2M") + "qr-scanner-worker.min.76fc6ac1.js" + "?" + Date.now()).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root("ccqbD"));

},{"./helpers/browser/js-loader":"61B45","./helpers/bundle-url":"lgJ39"}],"61B45":[function(require,module,exports) {
"use strict";
var cacheLoader = require("../cacheLoader");
module.exports = cacheLoader(function(bundle) {
    return new Promise(function(resolve, reject) {
        // Don't insert the same script twice (e.g. if it was already in the HTML)
        var existingScripts = document.getElementsByTagName("script");
        if ([].concat(existingScripts).some(function isCurrentBundle(script) {
            return script.src === bundle;
        })) {
            resolve();
            return;
        }
        var preloadLink = document.createElement("link");
        preloadLink.href = bundle;
        preloadLink.rel = "preload";
        preloadLink.as = "script";
        document.head.appendChild(preloadLink);
        var script1 = document.createElement("script");
        script1.async = true;
        script1.type = "text/javascript";
        script1.charset = "utf-8";
        script1.src = bundle;
        script1.onerror = function(e) {
            var error = new TypeError("Failed to fetch dynamically imported module: ".concat(bundle, ". Error: ").concat(e.message));
            script1.onerror = script1.onload = null;
            script1.remove();
            reject(error);
        };
        script1.onload = function() {
            script1.onerror = script1.onload = null;
            resolve();
        };
        document.getElementsByTagName("head")[0].appendChild(script1);
    });
});

},{"../cacheLoader":"j49pS"}],"j49pS":[function(require,module,exports) {
"use strict";
var cachedBundles = {};
var cachedPreloads = {};
var cachedPrefetches = {};
function getCache(type) {
    switch(type){
        case "preload":
            return cachedPreloads;
        case "prefetch":
            return cachedPrefetches;
        default:
            return cachedBundles;
    }
}
module.exports = function(loader, type) {
    return function(bundle) {
        var cache = getCache(type);
        if (cache[bundle]) return cache[bundle];
        return cache[bundle] = loader.apply(null, arguments).catch(function(e) {
            delete cache[bundle];
            throw e;
        });
    };
};

},{}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"8jezy":[function(require,module,exports) {
module.exports = "<link rel=\"stylesheet\" type=\"text/css\" href=\"/index.d91e6bbe.css\">\n<main>\n    <canvas width=\"400\" height=\"400\"></canvas>\n    <select>\n        <option value=\"\">-- selecione uma câmera --</option>\n    </select>\n</main><script src=\"/cdc-qrcodereader.template.ba800c0e.js\"></script>";

},{}]},["3AWbP","jeorp"], "jeorp", "parcelRequireecfd")

//# sourceMappingURL=index.2e23df1f.js.map
