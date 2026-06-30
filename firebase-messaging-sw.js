importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyAnYS1eDI4m80pCXf1gp1PesbkfBSWuHd8",
  authDomain: "wayland-square-connect-test.firebaseapp.com",
  projectId: "wayland-square-connect-test",
  storageBucket: "wayland-square-connect-test.firebasestorage.app",
  messagingSenderId: "856076284089",
  appId: "1:856076284089:web:07b0eb931417c6fbf8eb68"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const title = (payload.notification && payload.notification.title) || 'Wayland Square Connect TEST';
  const options = {
    body: (payload.notification && payload.notification.body) || 'New update in the test app.',
    icon: 'icon-512.png',
    badge: 'apple-touch-icon.png',
    data: payload.data || {}
  };
  self.registration.showNotification(title, options);
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(clients.openWindow('./'));
});
