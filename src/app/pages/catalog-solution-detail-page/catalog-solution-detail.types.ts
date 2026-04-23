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

/** Sequência opcional: vídeo → imagem → vídeo → imagem → loop (vídeos sem áudio no template). */
export interface CatalogDetailShowcaseSequence {
  introVideoSrc: string;
  /** Pausa com `showcaseImage` após o primeiro vídeo (ms). */
  imageAfterIntroMs: number;
  transitionVideoSrc: string;
  /** Pausa com `showcaseImage` após o segundo vídeo antes de reiniciar (ms). */
  imageAfterTransitionMs: number;
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
  /** Quando definido, substitui o showcase estático pelo fluxo em loop. */
  showcaseSequence?: CatalogDetailShowcaseSequence;
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
