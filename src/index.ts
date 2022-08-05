import Parser from './lib/parser';
import {Tokens, isToken} from './lib/tokens'
import * as path from 'path';
const file = path.join(__dirname, '../src/lib/bnf.ebnf')
const parsed = new Parser(file).read()

isToken('actor:')
