import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { notifications, totalNotificationSelector } from '../stores/atoms/asyncQ.js'
import { useEffect } from 'react'
import axios from 'axios'

function AsyncQ() {
  return <RecoilRoot>
    <MainApp />
  </RecoilRoot>
}

function MainApp() {
  // Use the useRecoilState hook to get the state of the 'notifications' atom
  // and the setNetworkCount function to update it.
  const [networkCount, setNetworkCount] = useRecoilState(notifications)

  // Use the useRecoilValue hook to get the value of the 'totalNotificationSelector' atom
  // which is a selector function that returns the total number of notifications.
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  // The useEffect hook is used to fetch data from an API when the component mounts.
  // The dependency array is empty, which means that the effect will only run once when the component mounts.
//   useEffect(() => {
//     // Make a GET request to the API to fetch the notifications data.
//     axios.get("https://sum-server.100xdevs.com/notifications")
//       .then(res => {
//         // When the response is received, update the state of the 'notifications' atom with the new data.
//         setNetworkCount(res.data)
//       })
//   }, [])


  return (
    <>
      <button>Home</button>
      
      <button>My network ({networkCount.networks >= 100 ? "99+" : networkCount.networks})</button>
      <button>Jobs {networkCount.jobs}</button>
      <button>Messaging ({networkCount.messaging})</button>
      <button>Notifications ({networkCount.notifications})</button>

      <button>Me ({totalNotificationCount})</button>
    </>
  )
}

export default AsyncQ;