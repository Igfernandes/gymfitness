export function When({ children, isValid } = {isValid: false}) {
  return !!isValid ? children : null;
}
