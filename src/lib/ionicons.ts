// Official Ionic icon set (ionicons), vendored from the ionicons package so
// each icon is inlined at build time, inherits the page's text colour and is
// present in server-rendered markup.
import documentLock from "@/assets/ionicons/document-lock-outline.svg?raw";
import ribbon from "@/assets/ionicons/ribbon-outline.svg?raw";
import map from "@/assets/ionicons/map-outline.svg?raw";
import transfer from "@/assets/ionicons/swap-horizontal-outline.svg?raw";
import approval from "@/assets/ionicons/shield-checkmark-outline.svg?raw";
import planning from "@/assets/ionicons/business-outline.svg?raw";
import owner from "@/assets/ionicons/id-card-outline.svg?raw";
import paperwork from "@/assets/ionicons/documents-outline.svg?raw";
import pin from "@/assets/ionicons/location-outline.svg?raw";
import development from "@/assets/ionicons/construct-outline.svg?raw";
import payment from "@/assets/ionicons/receipt-outline.svg?raw";
import terms from "@/assets/ionicons/scale-outline.svg?raw";
import whatsapp from "@/assets/ionicons/logo-whatsapp.svg?raw";
import forward from "@/assets/ionicons/arrow-up-forward-outline.svg?raw";

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
