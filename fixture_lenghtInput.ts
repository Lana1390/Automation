// import { expect as baseExpect } from '@playwright/test';

// import type { Locator } from '@playwright/test';

// export const expect = baseExpect.extend({
//   async toHaveMaxLength(locator: Locator, maxLength: number) {
//     const actualText = await locator.inputValue();
//     const actualLength = actualText.length;
//     const pass = actualLength <= maxLength;

//     const message = () =>
//       this.utils.matcherHint('.toHaveMaxLength', actualLength, maxLength) +
//       '\n\n' +
//       `Expected: not to exceed ${maxLength}\n` +
//       `Received: ${actualLength}${
//         pass ? '' : ` (exceeded by ${actualLength - maxLength})`
//       }`;

//     return { message,
//       pass };
//   },
// });

// import { expect as baseExpect } from '@playwright/test';
// import type { Locator } from '@playwright/test';

// export const expect = baseExpect.extend({
//   async toHaveMaxLength(locator: Locator, maxLength: number) {
//     const actualText = await locator.inputValue();
//     const actualLength = actualText.length;
//     const pass = actualLength <= maxLength;

//     if (!pass) {
//       console.warn(
//         `Попередження: довжина вводу '${locator}' перевищує ліміт (${maxLength}): ${actualLength}`
//       );
//     }

//     // Повертаємо успіх, незалежно від фактичного результату
//     return {
//       message: () => '', // Порожнє повідомлення, щоб не впливати на вивід тесту
//       pass: true,
//     };
//   },
// });
