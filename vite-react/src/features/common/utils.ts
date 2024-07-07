const convertToInches = (heightInches: number) => {
  if (heightInches < 0) {
    return "0";
  }
  const feet = Math.floor(heightInches / 12);
  const inches = heightInches % 12;

  return `${feet}'${inches}"`;
};

const convertKgToLbs = (weightKg: number) => {
  const poundsPerKg = 2.20462;
  return (weightKg * poundsPerKg).toFixed(3);
};

export { convertToInches, convertKgToLbs };
