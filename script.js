'use strict';

// const emailFromUser = document.querySelector('.inputForEmailAddress').value;

// const validateEmail = function (emailFromUser) {
//   const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,})$/.test(
//     emailFromUser
//   );
//   console.log(isEmailValid);
//   if (!isEmailValid) {
//     document.querySelector('.hide-error-info-icon').style.display =
//       'inline-block';
//     document.querySelector('.hide-error-info-text').style.display =
//       'inline-block';
//     document.querySelector('.hide-error-info-text').textContent =
//       'Please provide a valid email';
//     console.log(emailFromUser);
//   }
// };

// const arrowBtn = document.querySelector('.arrow-btn');

// arrowBtn.addEventListener('click', () => {
//   validateEmail(emailFromUser);
// });

const validateEmail = function () {
  const emailFromUser = document.querySelector('.inputForEmailAddress').value; // Fetch the value inside the function
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,})$/.test(
    emailFromUser
  );
  console.log(isEmailValid);
  console.log(emailFromUser);
  if (!isEmailValid) {
    document.querySelector('.hide-error-info-icon').style.display =
      'inline-block';
    document.querySelector('.hide-error-info-text').style.display =
      'inline-block';
    document.querySelector('.hide-error-info-text').textContent =
      'Please provide a valid email';
    console.log(emailFromUser);
  }
};

const arrowBtn = document.querySelector('.arrow-btn');

arrowBtn.addEventListener('click', () => {
  validateEmail(); // Call validateEmail without passing emailFromUser
});
