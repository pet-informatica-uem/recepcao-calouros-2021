import styles from './styles.module.scss';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.realizacao}>
          <p>realização:</p>
          <div className={styles.images}>
            <Image
              src="/recepcaocalouros/images/logo_pet.svg"
              alt="Logo PET"
              width={180}
              height={150}
            />
            <Image
              src="/recepcaocalouros/images/cainfo.png"
              alt="Logo cainfo"
              width={150}
              height={150}
            />
            <Image
              src="/recepcaocalouros/images/caccom.png"
              alt="Logo caccom"
              width={150}
              height={150}
            />
            <Image
              src="/recepcaocalouros/images/conectadas.png"
              alt="Logo conectadas"
              width={150}
              height={150}
            />
            <Image
              className={styles.logoDin}
              src="/recepcaocalouros/images/din.png"
              alt="Logo DIN"
              width={150}
              height={150}
            />
            <Image
              src="/recepcaocalouros/images/UEM.png"
              alt="Logo UEM"
              width={180}
              height={150}
            />
          </div>
        </div>
        <div className={styles.sociais}>
          <p>redes socias:</p>
          <div className={styles.links}>
            <div className={styles.pet}>
              <a
                href="http://www.instagram.com/petinfouem"
                rel="noreferrer"
                target="_blank"
                className={styles.insta}
              >
                <div className={styles.icon}>
                  <Image
                    src="/recepcaocalouros/images/instagram.svg"
                    alt="Icone instagram"
                    width={20}
                    height={20}
                  />
                </div>
                <span>@petinfouem</span>
              </a>
              <a
                href="http://www.facebook.com/petinformaticauem"
                rel="noreferrer"
                target="_blank"
                className={styles.face}
              >
                <div className={styles.icon}>
                  <Image
                    className={styles.iconFace}
                    src="/recepcaocalouros/images/facebook.png"
                    alt="Icone facebook"
                    width={20}
                    height={20}
                  />
                </div>
                <span>@petinformaticauem</span>
              </a>
            </div>
            <div className={styles.din}>
              <a
                href="http://www.facebook.com/uemdin"
                rel="noreferrer"
                target="_blank"
                className={styles.face}
              >
                <div className={styles.icon}>
                  <Image
                    className={styles.iconFace}
                    src="/recepcaocalouros/images/facebook.png"
                    alt="Icone facebook"
                    width={20}
                    height={20}
                  />
                </div>
                <span>@uemdin</span>
              </a>
            </div>
            <div className={styles.cainfo}>
              <a
                href="http://www.instagram.com/cainfouem"
                rel="noreferrer"
                target="_blank"
                className={styles.insta}
              >
                <div className={styles.icon}>
                  <Image
                    src="/recepcaocalouros/images/instagram.svg"
                    alt="Icone instagram"
                    width={20}
                    height={20}
                  />
                </div>
                <span>@cainfouem</span>
              </a>
              <a
                href="http://www.facebook.com/cainfouem"
                rel="noreferrer"
                target="_blank"
                className={styles.face}
              >
                <div className={styles.icon}>
                  <Image
                    className={styles.iconFace}
                    src="/recepcaocalouros/images/facebook.png"
                    alt="Icone facebook"
                    width={20}
                    height={20}
                  />
                </div>
                <span>@cainfouem</span>
              </a>
            </div>
            <div className={styles.caccom}>
              <a
                href="http://www.instagram.com/caccomuem"
                rel="noreferrer"
                target="_blank"
                className={styles.insta}
              >
                <div className={styles.icon}>
                  <Image
                    src="/recepcaocalouros/images/instagram.svg"
                    alt="Icone instagram"
                    width={20}
                    height={20}
                  />
                </div>
                <span>@caccomuem</span>
              </a>
              <a
                href="http://www.facebook.com/caccomuem"
                rel="noreferrer"
                target="_blank"
                className={styles.face}
              >
                <div className={styles.icon}>
                  <Image
                    className={styles.iconFace}
                    src="/recepcaocalouros/images/facebook.png"
                    alt="Icone facebook"
                    width={20}
                    height={20}
                  />
                </div>
                <span>@caccomuem</span>
              </a>
            </div>
            <div className={styles.conectadas}>
              <a
                href="http://www.instagram.com/conectadasuem"
                rel="noreferrer"
                target="_blank"
                className={styles.insta}
              >
                <div className={styles.icon}>
                  <Image
                    src="/recepcaocalouros/images/instagram.svg"
                    alt="Icone instagram"
                    width={20}
                    height={20}
                  />
                </div>
                <span>@conectadasuem</span>
              </a>
              <a
                href="http://www.facebook.com/conectadasuem"
                rel="noreferrer"
                target="_blank"
                className={styles.face}
              >
                <div className={styles.icon}>
                  <Image
                    className={styles.iconFace}
                    src="/recepcaocalouros/images/facebook.png"
                    alt="Icone facebook"
                    width={20}
                    height={20}
                  />
                </div>
                <span>@conectadasuem</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
