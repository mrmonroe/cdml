import * as fs from 'fs'
import Scanner from './scanner';

class Parser {
  file: string
  constructor(file: string) {
  // TODO: check for .cdml extension
    this.file = file
  }
  public read() { return fs.readFileSync( this.file,'utf8')}
}

export default Parser
