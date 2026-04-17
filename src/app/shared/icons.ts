import { heroEnvelope, heroArrowDownTray, heroBars3, heroBars3BottomRight } from '@ng-icons/heroicons/outline';
import { ionLogoLinkedin, ionLogoWhatsapp } from '@ng-icons/ionicons';
import { octMail, octMarkGithub } from '@ng-icons/octicons';

// Centralizar los iconos usados por la app para registrarlos globalmente.
// Para añadir otras colecciones (Octicons, Ionicons, etc.):
// 1) Instala el paquete npm correspondiente, p. ej. `npm i @ng-icons/octicons`
// 2) Importa los iconos desde la colección y añádelos a este objeto.
export const appIcons = {
  heroEnvelope,
  heroArrowDownTray,
  heroBars3,
  heroBars3BottomRight,

  ionLogoLinkedin,
  ionLogoWhatsapp,

  octMarkGithub,
  octMail,
};
