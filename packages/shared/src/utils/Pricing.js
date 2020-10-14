const priceData = {
  fixed_price_model: "fixed_price",
  fixed_price_per_method: "fixed_price_per_method",
  agi_precision: 100000000,
  agi_divisibility: 8,
  usd_conv_rate: 0.000001,
};

export const cogsToAgi = cogs => (cogs / priceData.agi_precision).toFixed(priceData.agi_divisibility);

export const agiToCogs = agi => Math.round(agi * priceData.agi_precision);

export const agiInDecimal = agi => parseFloat(agi).toFixed(priceData.agi_divisibility);
