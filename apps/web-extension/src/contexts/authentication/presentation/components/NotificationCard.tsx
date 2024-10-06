import Notification from '../types/Notification'

type Sizes = 'small' | 'large'

const NotificationCard = ({
  notification,
  size = 'large'
}: {
  notification: Notification
  size?: Sizes
}) => {
  const styles = {
    container: {
      small: 'px-3 py-3',
      large: 'px-6 py-6'
    },
    image: {
      small: 'h-[140px]',
      large: 'h-[400px]'
    },
    title: {
      small: 'text-base leading-tight',
      large: 'text-3xl'
    },
    description: {
      small: 'text-sm leading-tight',
      large: 'text-base'
    }
  }

  return (
    <article className={`w-full min-w-60 bg-white shadow-[0_4px_0_0_rgba(0,0,0,0.1)] ${styles.container[size]}`}>
      <img
        src={notification.image}
        alt={notification.title}
        className={`w-full ${styles.image[size]} object-cover mb-4`}
      />
      <h3
        className={`w-full font-bold mb-4 hover:underline text-gray-900 line-clamp-3 ${styles.title[size]}`}
      >
        <a href={notification.link} target='_blank' rel='noreferrer'>
          {notification.title || 'Ver la información completa en la página web oficial'}
        </a>
      </h3>
      <p className={`text-gray-600 line-clamp-5 ${styles.description[size]}`}>
        {notification.description}
      </p>
    </article>
  )
}

export default NotificationCard
