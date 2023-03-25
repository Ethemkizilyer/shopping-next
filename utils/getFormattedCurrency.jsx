const currencyFormatter = new Intl.NumberFormat('tr-TR');

export const getFormattedCurrency = (amount) =>
  currencyFormatter.format(amount);
