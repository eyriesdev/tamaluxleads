import { ionicons, type IonIconName } from "@/lib/ionicons";

type Props = {
  name: IonIconName;
  className?: string;
  label?: string;
};

// Renders an Ionicon inline so it takes the surrounding text colour.
export function IonIcon({ name, className, label }: Props) {
  return (
    <span
      className={className ? `ion ${className}` : "ion"}
      aria-hidden={label ? undefined : "true"}
      role={label ? "img" : undefined}
      aria-label={label}
      dangerouslySetInnerHTML={{ __html: ionicons[name] }}
    />
  );
}
