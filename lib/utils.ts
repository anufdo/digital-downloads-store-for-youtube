type ClassValue =
  | string
  | number
  | boolean
  | null
  | undefined
  | ClassValue[]
  | { [key: string]: boolean | string | number | null | undefined };

export function cn(...inputs: ClassValue[]): string {
  const classes: string[] = [];

  const process = (value: ClassValue): void => {
    if (!value) return;

    if (typeof value === "string" || typeof value === "number") {
      classes.push(String(value));
      return;
    }

    if (Array.isArray(value)) {
      value.forEach(process);
      return;
    }

    if (typeof value === "object") {
      Object.entries(value).forEach(([key, val]) => {
        if (val) {
          classes.push(key);
        }
      });
    }
  };

  inputs.forEach(process);

  return classes.join(" ");
}
