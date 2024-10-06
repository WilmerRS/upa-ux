import { useEffect, useState } from 'react'
import Notification from '../types/Notification'
import GridBackground from './GridBackground'
import NotificationCard from './NotificationCard'

const Notifications = () => {
  const [notifications, setNotifications] = useState<Notification[]>([])

  useEffect(() => {
    fetch('https://upa-ux-api.vercel.app/api/unipamplona/notifications')
      .then(async (response) => await response.json())
      .then((data) => setNotifications(data.data))
  }, [])

  return (
    <section className='flex flex-auto flex-col overflow-y-scroll'>
      <GridBackground className='flex-auto'>
        <div className='px-20 py-10'>
          {notifications[0] && (
            <NotificationCard notification={notifications[0]} />
          )}
        </div>
      </GridBackground>
      <footer className='bg-gray-50 px-20 py-10 flex gap-2 overflow-x-scroll'>
        {notifications.map((notification, index) => (
          <NotificationCard
            key={index}
            notification={notification}
            size='small'
          />
        ))}
      </footer>
    </section>
  )
}

export default Notifications
