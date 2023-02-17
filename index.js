export const publicKey =
  "BDshZHp5hE24Bv-NFQBhIdUieOQj3VCJiAopC_CJo30RP2Q6fveT7_rKSIYRJFp-Ia_MuMiXMBNavQDfEbuqGtM";

(async function () {
  while (true) {
    await loadPermission();

    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
})();
async function loadPermission() {
  document
    .querySelector(".subscribing")
    ?.classList.toggle("active", Notification.permission !== "granted");

  document
    .querySelector(".subscribed")
    ?.classList.toggle("active", Notification.permission === "granted");

  switch (Notification.permission) {
    case "default":
      await Notification.requestPermission();
      await loadPermission();
      break;

    case "granted":
      const registration = await registerWorker();

      let subscription = await registration.pushManager.getSubscription();
      if (!subscription) {
        subscription = await registration.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: urlBase64ToUint8Array(publicKey),
        });
      }

      const subcriptionBox = document.querySelector(".subscription");
      if (subcriptionBox) {
        subcriptionBox.textContent = JSON.stringify(subscription, undefined, 2);
      }
      break;
  }
}

async function registerWorker() {
  const registration = await navigator.serviceWorker.register("./sw.js");

  await new Promise((resolve) => {
    if (registration.active) {
      resolve();
    } else {
      registration.addEventListener("updatefound", () => {
        [registration.waiting, registration.installing].forEach((t) =>
          t?.addEventListener("statechange", () => {
            if (registration.active) {
              resolve();
            }
          })
        );
      });
    }
  });

  return registration;
}

function urlBase64ToUint8Array(base64String) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");
  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

document.querySelector(".test")?.addEventListener("click", () => {
  new Notification("Testing", {
    body: "Hi, this is a testing notification in client side",
  });
});
