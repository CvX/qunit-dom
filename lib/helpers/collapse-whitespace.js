export default function collapseWhitespace(string) {
  return string
    .replace(/[\t\r\n]/g, ' ')
    .replace(/ +/g, ' ')
    .replace(/^ /, '')
    .replace(/ $/, '')
    .replace(/\s/g, ' ');
}
