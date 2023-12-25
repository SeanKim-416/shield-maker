import React from 'react';
import styles from './LandingPage.module.scss';
import Landing1 from '../../assets/landing1.png';
import Button from '../../components/commons/Button/Button';

function LandingPage() {
  return (
    <main className={styles.main}>
      <article className={styles.article}>
        <section className={styles.section}>
          <h1 className={styles.slogan}>
            누구나 손쉽게, 기술 스택 뱃지를 만들 수 있어요
          </h1>
          <h2 className={styles.description}>
            기술 스택 만들기 귀찮은 당신!
            <br /> 한번 사용해 보세요
          </h2>
        </section>
        <div>
          <img className={styles.exImg} src={Landing1} alt="예시1" />
        </div>
      </article>
      <div className={styles.btnList}>
        <Button btnTheme="primary" btnSize="large2small">
          직접 만들기
        </Button>
        <Button btnTheme="primary" btnSize="large2small">
          JSON으로 만들기
        </Button>
      </div>
    </main>
  );
}

export default LandingPage;
