/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const PRICE_PER_DAY = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;

  const basePrice = days * PRICE_PER_DAY;

  if (days >= LONG_TERM) {
    return days * PRICE_PER_DAY - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return days * PRICE_PER_DAY - SHORT_TERM_DISCOUNT;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
