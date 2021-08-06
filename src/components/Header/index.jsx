import styles from './styles.module.scss';
import Image from 'next/image';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.image}>
        <Image
          src="/recepcaocalouros/images/dino.svg"
          alt="Dino"
          width={200}
          height={200}
        />
      </div>
      <h1 className={styles.title}>recepção de calouros 2021</h1>
    </header>
  );
}
