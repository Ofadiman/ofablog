import { renderComponent } from '../../functions/renderComponent/renderComponent'
import { CodeHighlighter } from './CodeHighlighter.component'
import { t } from './CodeHighlighter.component.test.utils'

describe('CodeHighlighter component', () => {
  test('should render correct tags', () => {
    const { container } = renderComponent(<CodeHighlighter className={t.languageString}>{t.codeBlock}</CodeHighlighter>)

    const preElement = container.querySelectorAll('pre')
    const codeElement = container.querySelectorAll('code')

    expect(preElement).toBeDefined()
    expect(codeElement).toBeDefined()
  })
})
