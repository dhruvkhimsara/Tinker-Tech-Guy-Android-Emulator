console.log("Tinker Tech Guy Android Emulator starting...");

import initEmscriptenModule from "./qemu/qemu-system-aarch64.js";

console.log("QEMU-Wasm module imported!");

const Module = {
    noInitialRun: false,

    mainScriptUrlOrBlob:
        new URL("./qemu/qemu-system-aarch64.js", window.location.href).href,

    arguments: [
        "-machine", "type=virt",
        "-cpu", "cortex-a57",
        "-m", "4096",
        "-smp", "4",

        "-kernel", "/qemu/kernel-ranchu",
        "-initrd", "/qemu/ramdisk.img",

        "-append",
        "console=ttyAMA0,38400 keep_bootcon earlyprintk=ttyAMA0",

        "-serial", "stdio",
        "-nographic"
    ]
};

(async () => {
    try {
        const instance = await initEmscriptenModule(Module);

        console.log("QEMU-Wasm initialized!", instance);

    } catch (error) {
        console.error("QEMU-Wasm initialization failed:", error);
    }
})();
