export function dateFormatting(date) {
  const [y, m, d, hh, mm, ss, ms] = date.match(/\d+/g);
  const formattedDate = new Date(Date.UTC(y, m - 1, d, hh, mm, ss, ms));
  return formattedDate.toLocaleString();
}
