type Token = {
  [key: string]: string
}


/** Terminology used, Edges, Vertices is from graph theory. */
export const Edge: Token = {
  'ACTOR': 'actor',
  'DATABASE': 'database',
  'COMPONENT': 'component',
  'SERVICE': 'service',
  'UI': 'ui'
}

export const Vertex: Token = {
  CONNECTOR_TO: '-->',
  CONNECTOR_FROM: '<--',
  CONNECTOR_BI: '<-->'
}

export const Operator: Token = {
  VERT_DELIM: ':',
  OPEN_NOTE: '(',
  CLOSE_NOTE: ')',
  OPEN_NAME: '[',
  CLOSE_NAME: ']'
}


/*
export const isToken = function(text: string){
  for (let k in Tokens){
    if (Tokens !== null && typeof Tokens === 'object') {
      for (let j in Tokens[k]) {
        if(Tokens[k][j] == text) return j
      }
    } else if(Tokens[k] == text) return k
    else return false
  }
}

*/