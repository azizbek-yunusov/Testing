Eng ko'p tarqalgan testlar:
unit/functional, integration, e2a(end-to-end), visual

1. Unit testlar tezroq ishledi
2. integration nistabat sekinroq ishledi
3. e2a(end-to-end) - Murakkab testlash backendgacha ham sekin ishledi
4. visual - Css ga oid testinglar


Test runnerlar: Mocha, Jasmine, jest, vitetest, node, bun 

Assertion library (Testlardan kelgan qiymatlarnini tekshiradigan kutubxonalar): chai
Mocking library: sinon
Code coveraga library - codelarni kover bolganini aniqlaydi: istanbul  
Dom simulation: jsdom, happydom - Brazurda ishlaydigan kodlarni node run qilish kerak bo'ladi   

Test Cases - malum bo'lakni test qilish uchun
Test suites - bir butun code komponentni hamma funksiyalar bilan tekshiradi yani bir nechtda test cases larni o'z ichiga oladi 
Test fixtures - Mockingda ishlatilinadi yoki Mock data
Red-Green-Refaktor RGR
AAA (Arrange->Act->Assert) Test uchun tayyorlash


User-like testing utilities: testing-library

React-specific testing utilities:
react-test-renderer - json render qilib beradi
react-dom/test-utils (depreracted)
enzyme (depreracted)
react-test-library (recomended) - bu hozir ishlatilanida

E2E testing frameworks:
Pupperteer
Cypress
Playwright
Nightwatch

Hosted solutions: browserstack

# Testing fundamentals

## Concepts - tushunchalar

- Test runner (jest, vitest, jasmine, mocha)
- Test file (.(spec|test).(js|tsx|jsx|ts))
- Test suite - bir nechta test caselari ichiga oladi
- Test case - malum bir bo'lak
- SUD - System under test  - 
- TDD - Test-driven development - birinchi test yozish
- BDD - Behaviour-driven development
- AAA - arrange, act, assert
- RGR - red-green-refactor

## Recommendations before writing tests

- Use typescript
- Use eslint

## Reasons why we use vitest:
vitest imkoniyatlari
- Fast
- ESM, TypeScript, JSX
- Jest compatible API
- Imported and Global API
- Vite integration
- Watch mode
// // describe.todo("calc")

// import { Calc } from "./calc";

// // -> test suite
// describe("calc", () => {
//   // beforeAll(() => {});
//   // afterAll(() => {});
//   // beforeEach(() => {})
//   // beforeEach(() => {})
//   // afterEach(() => {})
//   // -> test case
//   // it.todo(...) orqali testni tashlab ketish mumkin
//   // it.on(...) orqali faqat shu caseni ishledi yoki describe.only qilsa ham bo'ladi
//   // it.skip(...) orqali faqat case ni keyinroqqa qoldirish
//   it("should return 2 for 1+1", (context) => {
//     const actual = 1 + 1;
//     const expected = 2;
//     const calc = new Calc()
    
//     expect(actual).toBe(expected)
//     // Objectlarni ichini tekshirish uchun toEqual ishlatilinadi
//     // expect({name: "Ravshan"}).toEqual({name: "Aziz", lastname: "Yunusov"})
//   })
// })
## Configuration

- global = false
- environment = 'node'
- testTimeout = 5000
- globalSetup (run once)
- setupFiles (run for each test file)

## API

### General

- describe (test suite)
- it/test (promise, default timeout 5s): (test case)
  - context
  - .todo
  - .skip
  - .only
- beforeAll/beforeEach (setup)
- afterAll/afterEach (teardown)
- expect(expected).toBe(actual) (assertion)

### Mocking

- mock = vi.fn()
- spy = vi.spyOn(object, 'method')
- mock.mockImplementation()/mock.mockImplementationOnce()
- mock.mockReturnValue()/mock.mockReturnValueOnce()
- mock.mockResolvedValue()/mock.mockResolvedValueOnce()
- mock.mockRejectedValue()/mock.mockRejectedValueOnce()
- expect(mock).toHaveBeenCalled()
- expect(mock).toHaveBeenCalledWith()
- expect(mock).toHaveBeenCalledTimes()
- mock.mockClear()/mock.mockReset()/mock.mockRestore()
- vi.clearAllMocks()/vi.resetAllMocks()/vi.restoreAllMocks()
- vi.mock('module', factory)
- vi.importActual('module')
- vi.stubGlobal('global', mock)/vi.unstubAllGlobals();
- vi.stubEnv('env', value)/vi.unstubAllEnvs()

#### Timers

- vi.useFakeTimers()/vi.useRealTimers()
- vi.setSystemTime()
- vi.advanceTimersByTime()/vi.advanceTimersByTimeAsync()
- vi.advanceTimersToNextTimer()/vi.advanceTimersToNextTimerAsync()

### Test types

- Unit (test single unit only) A -> B -> C
- Integration (test multiple units, but not the whole system) A -> B -> C
- E2E (test whole system)
