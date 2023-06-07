export const cartPromoCodes = [
  { code: "10OFF", discount: 10 },
  { code: "BLACKFRIDAY", discount: 20 },
  { code: "CYBERMONDAY", discount: 30 },
  { code: "WELCOME", discount: 5 },
  { code: "THANKYOU", discount: 5 },
];

export const getCodeDiscount = (code: string) => {
  const promoCode = cartPromoCodes.find((promo) => promo.code === code.trim());
  if (promoCode) {
    return promoCode.discount;
  } else {
    return null; // or any default value you want to assign when the code is not found
  }
};
