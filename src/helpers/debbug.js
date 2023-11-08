export function debbug(err) {
  if (process.env.DEBBUG_ERRORS == true) console.log(err);
}
