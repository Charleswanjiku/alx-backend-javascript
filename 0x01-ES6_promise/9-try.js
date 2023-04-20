//Exporting functions declarations for guardrail
export default function guardrail(mathFunction) {
  const array = [];
//testing errors using try
  try {
    array.push(mathFunction());
  } catch (err) {
    array.push(err.toString());
  } finally {
    array.push('Guardrail was processed');
  }
  return array;
}
