import styles from "./styles.module.css"

interface IAvatar {
  src: string;
  hasBorder?: boolean;
}

export function Avatar({ src, hasBorder = true }: IAvatar) {
  return (
    <img
      src={src}
      alt="Foto de perfil"
      className={hasBorder ? styles.avatar : styles.avatarWithoutBorder}
    />
  )
}