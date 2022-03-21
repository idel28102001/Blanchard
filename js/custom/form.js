document.addEventListener("DOMContentLoaded", () => {
  (() => {
    const currTel = document.querySelector('input[type="tel"]');
    const currMask = new Inputmask("+7 (999)-999-99-99");
    currMask.mask(currTel);

    const currName = document.querySelector('input.form__input[type="text"]');

    const minLength = 2;
    const maxLength = 30;

    new JustValidate(".form", {
      rules: {
        name: {
          required: true,
          minLength: minLength,
          maxLength: maxLength,
          function: () => {
            let currElem = currName.value.match(/[\W\d]/g);
            if (currElem) {
              currElem = currElem.join();
            }
            if (currElem != null) {
              currElem = currElem.match(/\[А-я]/g);
            }
            const newCurrElem = currElem == null ? true : !currElem.length;
            return newCurrElem;
          },
        },
        tel: {
          required: true,
          function: () => {
            const currPhone = currTel.inputmask.unmaskedvalue();
            return Number(currPhone) && currPhone.length === 10;
          },
        },
      },
      messages: {
        name: {
          minLength: `Имя должно быть больше ${minLength} симоволов`,
          maxLength: `Имя должно не превышать ${maxLength} симоволов`,
          required: `Как вас зовут?`,
          function: `Недопустимый формат`,
        },
        tel: {
          required: `Укажите ваш телефон`,
          function: `Недопустимый формат`,
        },
      },
      colorWrong: "#D11616",
    });
  })();
});
