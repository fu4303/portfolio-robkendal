import Link from 'next/link';
import styles from './scss/service-block-home.module.scss';

const ServiceBlockHome = ({
    img,
    imgAlt,
    title,
    blurb,
    link
 }) => {

    return (
        <div className={styles.serviceblockhome}>
            <figure className={styles['img-container']}>
              <img src={img} alt={imgAlt} className="unstyled"/>
            </figure>
            
            <div className={styles.content}>
                <h3 className="title is-size-3 is-white no-margin-top">{title}</h3>
                <p>{blurb}</p>   
                <Link href={link}>
                    <a className='button is-default has-icon is-medium'>
                        <span>find out more</span>
                        <span className='icon fas fa-chevron-circle-right'></span>
                    </a>
                </Link>
            </div>
        </div>
    )
};

export default ServiceBlockHome;