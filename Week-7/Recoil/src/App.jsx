import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import "./App.css";
import {
  jobsAtom,
  messagesAtom,
  networkAtom,
  notificationsAtom,
  totalNotifications,
} from "../stores/atoms/atoms";
import { useMemo } from "react";

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
}

function MainApp() {
  //orginal way - const[networkNotificationsCount, setNetworkNotificationsCount] = useState(104);
  const networkNotificationsCount = useRecoilValue(networkAtom);
  const jobsNotificationCount = useRecoilValue(jobsAtom);
  const messagesNotificationCount = useRecoilValue(messagesAtom);
  // const [messagesNotificationCount, setMessagesNotificationCount] = useRecoilState(messagesAtom);
  const notificationsCount = useRecoilValue(notificationsAtom);

  // useMemo hook to calculate total notification count and only recompute it when any of the dependencies change.
  // const totalNotification = useMemo(() => {
  //   return networkNotificationsCount + jobsNotificationCount + messagesNotificationCount + notificationsCount;
  // }, [networkNotificationsCount, jobsNotificationCount, messagesNotificationCount, notificationsCount]);

  // new way - using Recoil's totalNotifications atom selector
  const totalNotificationsCount = useRecoilValue(totalNotifications);

  return (
    <>
      <button>Home</button>

      <button>
        My Network (
        {networkNotificationsCount >= 100 ? "99+" : networkNotificationsCount})
      </button>
      <button>Jobs ({jobsNotificationCount})</button>
      <button>Messages ({messagesNotificationCount})</button>
      <button>Notifications ({notificationsCount})</button>

      <button>Me ({totalNotificationsCount})</button>
      {/* <button onClick={() =>{
        setMessagesNotificationCount(messagesNotificationCount + 1);
      }}>Me</button> */}
    </>
  );
}

export default App;
