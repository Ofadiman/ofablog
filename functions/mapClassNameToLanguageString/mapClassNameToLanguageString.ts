export const mapClassNameToLanguageString = (className: string): string => {
  const initialLanguage = className.replace(/language-/u, '')

  switch (initialLanguage) {
    case 'tsx':
      return 'typescript'
    default:
      return initialLanguage
  }
}
