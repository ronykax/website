export default function AgeInteger() {
  const birthday = new Date("2008-02-20");
  const ageMs = Date.now() - birthday.getTime();
  const age = Math.floor(ageMs / (365.25 * 24 * 60 * 60 * 1000));
  return age;
}
