console.log("Tinker Tech Guy Android Emulator starting...");

import initEmscriptenModule from "./qemu/out.js";

console.log("QEMU-Wasm module imported!");

const Module = {
    noInitialRun: true
};

(async () => {
    try {
        const instance = await initEmscriptenModule(Module);
        console.log("QEMU-Wasm initialized!", instance);
    } catch (error) {
        console.error("QEMU-Wasm initialization failed:", error);
    }
})();
