import Link from 'next/link';
import styles from './scss/service-block.module.scss';

const ServiceBlock = ({
    icon,
    title,
    blurb
 }) => {

    return (
        <div className={styles.serviceblock}>
            <span className={`icon ${icon}`}></span>
            <h3 className="title">{title}</h3>
            <p>{blurb}</p>
        </div>
    )
};

export default ServiceBlock;