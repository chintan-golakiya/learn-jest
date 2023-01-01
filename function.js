const totalTip = (total, percent = 5) => {
  const tip = total * percent / 100;
  return total + tip;
}
module.exports = totalTip