import { atom, selector } from "recoil";

export const networkAtom = atom({
    key : "networkAtom",
    default : 104
});

export const jobsAtom = atom({
    key : "jobsAtom",
    default : 0
});

export const notificationsAtom = atom({
    key : "notificationsAtom",
    default : 12
});

export const messagesAtom = atom({
    key : "messagesAtom",
    default : 0
});

export const totalNotifications = selector({
    key: "totalNotifications",
    get: ({ get }) => {
      const networkCount = get(networkAtom);
      const jobsCount = get(jobsAtom);
      const messagesCount = get(messagesAtom);
      const notificationsCount = get(notificationsAtom);
  
      return networkCount + jobsCount + messagesCount + notificationsCount;
    },
  });