/**
 * Scanner code used from ajlopez' gelex javascript parser.
 * https://github.com/ajlopez/gelex
 * @param {string} text 
 */

class Scanner {
  l: number
  p: number
  text: string

  constructor(text: string) {
    this.text = text
    this.l = text ? text.length : 0
    this.p = 0
  }
  public position() { return this.p }
  public scan() { return this.text[this.p] }
  public peek() {
    this.p++
    return this.text[this.p]
  }
}

export default Scanner
