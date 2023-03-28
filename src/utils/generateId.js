const generateRandomNumber = (max) => Math.floor(Math.random() * (max + 1));

const defaultIdLength = 6;

const generateId = (digits = defaultIdLength) => {
  const possibleDigits = '1234567890abcdefghijklmnopqrstuvwxyz';
  const digitsLength = possibleDigits.length - 1;
  let generatedId = '';
  for (let i = 0; i < digits; i += 1) {
    const randomNumber = generateRandomNumber(digitsLength);
    generatedId += possibleDigits[randomNumber];
  }
  return generatedId;
};

export default generateId;
