self.addEventListener("push", function (event) {
  const data = event.data?.json();
  if (!data) {
    return;
  }

  event.waitUntil(
    self.registration.showNotification(data.title ?? "", {
      data,
      ...data,
    })
  );
});

self.addEventListener("notificationclick", function (event) {
  event.notification.close();

  const link = event.notification.data?.link;
  if (!link) {
    return;
  }

  event.waitUntil(self.clients.openWindow(link));
});
