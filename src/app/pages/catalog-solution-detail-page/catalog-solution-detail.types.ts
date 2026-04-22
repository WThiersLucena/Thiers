/** Conteúdo exibido nas páginas de detalhe do catálogo (mesmo fluxo do salão / landing). */
export interface CatalogDetailStripItem {
  label: string;
  value: string;
  hint: string;
}

export interface CatalogDetailFeature {
  icon: string;
  title: string;
  text: string;
}

export interface CatalogSolutionDetailData {
  /** Classe extra no main para overrides de cor (opcional). */
  themeModifier: string;
  eyebrow: string;
  titleLine1: string;
  titleAccent: string;
  titleLine2: string;
  tagline: string;
  lead: string;
  strip: [CatalogDetailStripItem, CatalogDetailStripItem];
  showcaseImage: string;
  showcaseAlt: string;
  valueTitle: string;
  valueText: string;
  features: [CatalogDetailFeature, CatalogDetailFeature, CatalogDetailFeature];
  finalTitle: string;
  finalText: string;
  waDemo: string;
  waPlan: string;
  waFinal: string;
}
