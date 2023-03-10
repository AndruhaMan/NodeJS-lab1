# NodeJS-lab1

## Відповіді на контрольні запитання

1. **Чи є різниця між виконанням Javascript в браузері та в середовищі Node.js?**

Так, існують деякі ключові відмінності, а саме:

Глобальний об'єкт: Глобальний об'єкт в середовищі браузера - це об'єкт `window`, тоді як в середовищі Node.js - це об'єкт `global`.

DOM: В середовищі браузера JavaScript взаємодіє з Document Object Model (DOM), щоб маніпулювати веб-сторінкою, обробляти події користувача та більше. В Node.js немає DOM, оскільки немає веб-сторінки для маніпулювання.

Вбудовані модулі: Node.js надає декілька вбудованих модулів, які дозволяють JavaScript взаємодіяти з файловою системою, мережею та іншими операціями низького рівня, які недоступні в середовищі браузера.

Менеджер пакетів: У Node.js є власний менеджер пакетів, називається NPM (Node Package Manager), який використовується для установки, управління та розповсюдження пакетів / бібліотек. У середовищі браузера бібліотеки зазвичай завантажуються через теги script або імпортуються через завантажувач модулів.

2. **Назвіть основні типи в Javascript.**

String, number, boolean, bigint, symbol, undefined, null, object

3. **Як працює замикання(closure) в Javascript?**

Основна ідея замикання полягає в тому, що змінні, які були оголошені в зовнішньому лексичному середовищі, можуть зберігатись для використання в майбутньому, коли функція буде викликана.

Це дозволяє функції зберігати свій стан і доступ до цих змінних, навіть якщо ці змінні були оголошені в минулому.

Це може бути корисно, коли ми хочемо створити функцію, яка може зберігати стан між викликами, або коли ми хочемо створити функцію, яка може бути викликана з різних місць у нашому коді і зберігати стан незалежно від місця виклику.

Приклад:

```
function counter() {
  let count = 0;
  return function() {
    count++;
    console.log(count);
  }
}

const increment = counter();
increment(); // 1
increment(); // 2
increment();
```

4. **Назвіть основні стандартні бібліотеки Node.js.**

Основні стандартні бібліотеки Node.js включають:

`fs` - ця бібліотека дозволяє працювати з файловою системою. З її допомогою можна створювати, читати, записувати і видаляти файли та каталоги.

`http` - ця бібліотека дозволяє створювати HTTP сервери та відправляти HTTP запити.

`net` - ця бібліотека дозволяє створювати TCP/IPC сервери і клієнти.

`os` - ця бібліотека дозволяє отримувати інформацію про операційну систему, таку як архітектура процесора, кількість ядер, та інше.

`path` - ця бібліотека дозволяє працювати з шляхами до файлів і каталогів, такі як їх об'єднання та нормалізація.

`querystring` - ця бібліотека дозволяє парсити і створювати рядки запиту URL.

`util` - ця бібліотека містить корисні інструменти, такі як обрізка тексту, дебаггінг, форматування рядків і т.д.

`events` - ця бібліотека дозволяє створювати та реєструвати події.

5. **Які є способи імпортувати модулі в Node.js?**

В Node.js є декілька способів імпортувати модулі:

Використання require(): Це стандартний спосіб імпортувати модулі в Node.js. Приклад:

```const fs = require('fs');```

Використання import: Починаючи з версії Node.js 13 і вище, можна використовувати синтаксис ES6 для імпорту модулів. Приклад:

```import fs from 'fs';```

Використання динамічного імпорту: Динамічний імпорт дозволяє імпортувати модулі під час виконання програми. Приклад:

```
const modulePath = './module.js';
const module = await import(modulePath);
```

6. **Як пов'язані Google Chrome / Chromium та Node.js?**

І Chromium і Node.js використовують V8 engine (двигун), що створений компанією Google для виконання JavaScript в браузері Chrome. Цей двигун також використовується в середовищі Node.js для виконання JavaScript-коду на сервері.

7. **Як можна дозволити імпортувати змінні з поточного модуля?**

Щоб дозволити експортування змінних в Node.js, можна використовувати об'єкт `module.exports` або `exports`, щоб зробити їх доступними для імпортування та використання в інших модулях. Ось приклад:

```
const myVariable = 'Привіт, світ!';

module.exports = myVariable;
// або 
exports.anyVarName = myVariable;
```
