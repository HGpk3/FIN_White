export type ClassValue =
  | string
  | number
  | null
  | undefined
  | false
  | ClassDictionary
  | ClassValue[];

type ClassDictionary = Record<string, string | number | boolean | null | undefined>;

function toVal(mix: ClassValue): string {
  let k;
  let y;
  let str = "";

  if (typeof mix === "string" || typeof mix === "number") {
    str += mix;
  } else if (Array.isArray(mix)) {
    for (k = 0; k < mix.length; k++) {
      if (mix[k]) {
        y = toVal(mix[k]);
        if (y) {
          if (str) str += " ";
          str += y;
        }
      }
    }
  } else if (mix && typeof mix === "object") {
    for (k in mix) {
      if (mix[k]) {
        if (str) str += " ";
        str += k;
      }
    }
  }

  return str;
}

export function cn(...args: ClassValue[]): string {
  let i = 0;
  let tmp;
  let x;
  let str = "";

  while (i < args.length) {
    if ((tmp = args[i++])) {
      if ((x = toVal(tmp))) {
        if (str) str += " ";
        str += x;
      }
    }
  }

  return str;
}
