//Get Function declarations binding date to getcurrentyear 
function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}
//Exporting functions declarations for getBudgetCurrentYear
export default function getBudgetForCurrentYear(income, gdp, capita) {
  const budget = {
    [`income-${getCurrentYear()}`]: income,
    [`gdp-${getCurrentYear()}`]: gdp,
    [`capita-${getCurrentYear()}`]: capita,
  };

  return budget;
}
