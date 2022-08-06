import Parser from './lib/parser';
import { Edge, Vertex, Operator } from './lib/tokens'
import * as path from 'path';
const file = path.join(__dirname, '../testcode.cdml')
const text = new Parser(file).read()

type BufferItem = {
  term: string
  type: string
  pos: {
    col: number
    row: number
  }
}

let word = ''
let currBuffer: BufferItem[] = []
let column = 0
let row = 0



function setNewTerm() {
  word = ''
}
function setNewLine() {
  row++
  column = 0
  word = ""
}
function addToBuffer(str: string, x: number, y: number, tp: string = 'INVALID') {
  if (word) {
    currBuffer.push({ term: word.trim(), type: tp, pos: { col: x, row: y } })
  }
}

function isWhitespace(char: string): boolean {
  let isWS = false
  switch (char) {
    case '\t':
      isWS = true
      break;
    case '\r':
      isWS = true
      break;
    case ' ':
      isWS = true
      break;
    default:
      isWS = false
  }
  return isWS
}

function isNewLine(char: string): boolean {
  return char == '\n' || char == '\r'
}

function addToWord(char: string) {
  word = word + char
}

function incCol() { column++ }

function parse(text: string) {
  for (let i = 0; i < text.length; i++) {
    if (isNewLine(text[i])) {
      addToBuffer(word, column, row)
      setNewLine()
    }
    else if (isWhitespace(text[i])) {
      console.log('whitespace')
      addToBuffer(word, column, row)
      setNewTerm()
    }
    else {
      console.log(text[i])
      addToWord(text[i])
      
    }
    incCol()
    
  }
  console.log(currBuffer)
}

parse(text)