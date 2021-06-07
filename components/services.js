import styles from './services.module.scss'
import ServiceItem from './serviceitem'

export default function Services(props) {

  return (
    <div className={styles.serviceContainer}>
      {props.services.map((service, index) => (
        <ServiceItem key={index} title={service.title} description={service.description} icon={service.icon}></ServiceItem>
      ))}
    </div>
  )
}