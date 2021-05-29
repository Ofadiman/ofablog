const handleMoonClickMock = jest.fn().mockName('handleMoonClickMock')
const handleSunClickMock = jest.fn().mockName('handleSunClickMock')

const moonIconTestId = 'NightsStayOutlined'
const sunIconTestId = 'Brightness5Outlined'

export const t = { handleMoonClickMock, handleSunClickMock, moonIconTestId, sunIconTestId }
