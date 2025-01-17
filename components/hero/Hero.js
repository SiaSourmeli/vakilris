import styles from "./hero.module.css";

const Hero = () => {
  return (
    <div id="" className={styles.heroContainer}>
      <img
        src="https://ucarecdn.com/74129383-8ae0-4d66-b3d7-e3f03b290d0b/egggroupphoto.jpg"
        className={styles.heroImage}
        alt="workshop"
      ></img>
    </div>
  );
};

export default Hero;
