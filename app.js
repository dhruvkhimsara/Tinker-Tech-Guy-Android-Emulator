console.log("Tinker Tech Guy Android Emulator starting...");

import initEmscriptenModule from "./qemu/qemu-system-aarch64.js";

console.log("QEMU-Wasm module imported!");

const Module = {
    noInitialRun: true,
    mainScriptUrlOrBlob: new URL("./qemu/qemu-system-aarch64.js", window.location.href).href
};

(async () => {
    try {
        const instance = await initEmscriptenModule(Module);
        console.log("QEMU-Wasm initialized!", instance);
    } catch (error) {
        console.error("QEMU-Wasm initialization failed:", error);
    }
})();
