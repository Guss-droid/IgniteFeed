import styles from "./styles.module.css"

import IgniteLogo from "../../assets/IgniteLogo.svg"

export function Header() {
  return (
    <header className={styles.header}>
      <img src={IgniteLogo} alt="Logo do Ignite" />
    </header>
  )
}