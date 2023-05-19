import {Link} from 'react-router-dom';
import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.filas}>
      <div className={styles.card}>
        <h1 className={styles.textoPrimario}>▶ Carlos Castellanos</h1>
        <h2 className={styles.textoSecundario}>▶ Desarrollador FullStack</h2>
        <img
          src="https://res.cloudinary.com/dpjeltekx/image/upload/v1681160319/HV/fotos_presentacion_xsekia.png"
          alt="Carlos Castellanos"
          className={styles.imagen}
        />
        <h2 className={styles.textoTerciario}>▶ Cel.: +57 3124868390</h2>
        <h2 className={styles.textoPrimario}>
          ▶ Email.: karlos065@hotmail.com
        </h2>
        <Link
          className={styles.textoLink}
          to={'https://carloscastellanoshv.netlify.app'}
          target="_blank"
        >
          https://carloscastellanoshv.netlify.app/
        </Link>
      </div>
    </div>
  );
};

export default About;
