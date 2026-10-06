// Official Ionic icon set (ionicons). Each icon is inlined at build time so it
// inherits the page's text colour and is present in server-rendered markup.
import documentLock from "ionicons/dist/svg/document-lock-outline.svg?raw";
import ribbon from "ionicons/dist/svg/ribbon-outline.svg?raw";
import map from "ionicons/dist/svg/map-outline.svg?raw";
import transfer from "ionicons/dist/svg/swap-horizontal-outline.svg?raw";
import approval from "ionicons/dist/svg/shield-checkmark-outline.svg?raw";
import planning from "ionicons/dist/svg/business-outline.svg?raw";
import owner from "ionicons/dist/svg/id-card-outline.svg?raw";
import paperwork from "ionicons/dist/svg/documents-outline.svg?raw";
import pin from "ionicons/dist/svg/location-outline.svg?raw";
import development from "ionicons/dist/svg/construct-outline.svg?raw";
import payment from "ionicons/dist/svg/receipt-outline.svg?raw";
import terms from "ionicons/dist/svg/scale-outline.svg?raw";
import whatsapp from "ionicons/dist/svg/logo-whatsapp.svg?raw";
import forward from "ionicons/dist/svg/arrow-up-forward-outline.svg?raw";

export const ionicons = {
  documentLock,
  ribbon,
  map,
  transfer,
  approval,
  planning,
  owner,
  paperwork,
  pin,
  development,
  payment,
  terms,
  whatsapp,
  forward,
} as const;

export type IonIconName = keyof typeof ionicons;
