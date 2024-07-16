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