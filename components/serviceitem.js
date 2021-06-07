import styles from './serviceitem.module.scss';
import Image from 'next/image'

export default function ServiceItem(props) {
  
  return (
    <div className={styles.serviceItem}>
      <div className={styles.serviceIcon}>
        <Image
          priority
          src={props.icon}
          height={50}
          width={50}
          layout="responsive"
        />
      </div>
      <div className={styles.serviceTitle}>
        {props.title}
      </div>
      <div className={styles.serviceDescription}>
        {props.description}
      </div>
    </div>
  )

}