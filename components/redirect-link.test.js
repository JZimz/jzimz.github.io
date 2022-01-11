import RedirectLink from './redirect-link.vue'

jest.useFakeTimers()
jest.spyOn(global, 'setTimeout')

describe('RedirectLink', () => {
  describe('mounted', () => {
    it('should redirect to destination', () => {
      const navTo = jest.fn()

      RedirectLink.mounted.call({
        to: 'http://example.com',
        navTo,
      })

      expect(navTo).toHaveBeenCalledWith('http://example.com')
    })

    it('should redirect to deep link if available', () => {
      const navTo = jest.fn()

      RedirectLink.mounted.call({
        to: 'http://example.com',
        toDeep: 'app://destination/resource',
        navTo,
      })

      expect(navTo).toHaveBeenCalledTimes(1)
      expect(navTo).toHaveBeenCalledWith('app://destination/resource')
    })

    it('should fallback to destination when deep link fails', () => {
      const navTo = jest.fn()

      RedirectLink.mounted.call({
        to: 'http://example.com',
        toDeep: 'app://destination/resource',
        navTo,
      })

      jest.runAllTimers()

      expect(navTo).toHaveBeenCalledTimes(2)
      expect(navTo.mock.calls).toEqual([
        ['app://destination/resource'],
        ['http://example.com'],
      ])
    })
  })
})
