const formatCurrency = (value: number) => {
  const rounded = (value / 100).toFixed(2);
  return `$${rounded}`;
};

export default formatCurrency;
