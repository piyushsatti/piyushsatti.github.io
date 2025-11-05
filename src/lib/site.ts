const rawBase = import.meta.env.BASE_URL ?? "/";
export const SITE_BASE = rawBase.endsWith("/") ? rawBase : `${rawBase}/`;

const EXTERNAL_PATTERN = /^[a-zA-Z][a-zA-Z\d+.-]*:/;

export const toSitePath = (href: string): string => {
  if (!href) return SITE_BASE;
  if (href.startsWith("#")) return href;
  if (EXTERNAL_PATTERN.test(href) || href.startsWith("//")) {
    return href;
  }

  return `${SITE_BASE}${href.replace(/^\/+/, "")}`;
};

export const isExternalUrl = (href: string | undefined | null): boolean => {
  if (!href) return false;
  return EXTERNAL_PATTERN.test(href) || href.startsWith("//");
};
