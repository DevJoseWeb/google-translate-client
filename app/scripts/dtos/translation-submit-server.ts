interface TranslationSubmitServer {
  query: string;
  sourceLang: string;
  targetLang?: string;
  targetLangs?: string[];
}
