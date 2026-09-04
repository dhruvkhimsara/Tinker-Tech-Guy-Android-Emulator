console.log("Tinker Tech Guy Android Emulator starting...");

const script = document.createElement("script");
script.src = "./qemu/out.js";

script.onload = () => {
    console.log("QEMU-Wasm JavaScript loaded!");
};

script.onerror = (error) => {
    console.error("Failed to load QEMU-Wasm:", error);
};

document.body.appendChild(script);
