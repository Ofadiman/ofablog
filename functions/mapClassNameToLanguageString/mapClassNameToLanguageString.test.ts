import { mapClassNameToLanguageString } from './mapClassNameToLanguageString'
import { t } from './mapClassNameToLanguageString.test.utils'

describe('mapClassNameToLanguageString function', () => {
  t.testCases.forEach(({ className, languageString }) => {
    test('should return correct language string t', () => {
      const result = mapClassNameToLanguageString(className)

      expect(result).toEqual(languageString)
    })
  })
})
