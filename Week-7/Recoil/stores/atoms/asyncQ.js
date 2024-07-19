import axios from "axios";
import { atom, selector } from "recoil";

// The 'notifications' atom is created with a unique key of 'networkAtom', and it has a default value
// which is another selector function named 'notificationAtomSelector'.
// This is to ensure that the selector function is called only once and its result is used as the default value.
export const notifications = atom({
  key: "networkAtom",

  // The 'default' property is set to the 'notificationAtomSelector' selector function.
  default: selector({
    key: "notificationAtomSelector",
    // The 'get' callback function of the selector function is an async function that makes a GET request to the
    // API to fetch the notifications data.
    // It uses the axios library to make the request and returns the result.
    get: async () => {
      // The GET request is made to the following URL
      const res = await axios.get("https://sum-server.100xdevs.com/notifications");
      // The response data is returned as the default value for the 'notifications' atom.
      return res.data;
    },
  }),
});


export const totalNotificationSelector = selector({
  key: "totalNotificationSelector",
  get: ({ get }) => {
    const allNotifications = get(notifications);
    return (
      allNotifications.network +
      allNotifications.jobs +
      allNotifications.notifications +
      allNotifications.messaging
    );
  },
});
