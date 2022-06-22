import styles from "./styles.module.css"

export function Avatar({src, hasBorder = true }) {
  return (
    <img
      src={src}
      alt="Foto de perfil"
      className={hasBorder ? styles.avatar : styles.avatarWithoutBorder}
    />
  )
}