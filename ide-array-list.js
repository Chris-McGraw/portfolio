const ideLineComment = {
  words: ['// My Portfolio'],
  class: ''
};


const ideLineNameConst = {
  words: ['const'],
  class: 'pseudoVar'
};

const ideLineName = {
  words: [' name ', '= '],
  class: ''
};

const ideLineNameValue = {
  words: ['"Chris McGraw"'],
  class: 'pseudoValue'
};

const ideLineNameSemi = {
  words: [';'],
  class: ''
};


const ideLineProfessionConst = {
  words : ['let'],
  class: 'pseudoVar'
};

const ideLineProfession = {
  words : [' profession ', '= '],
  class: ''
};

const ideLineProfessionValue = {
  words : ['"Front End Web Developer"'],
  class: 'pseudoValue'
};

const ideLineProfessionSemi = {
  words: [';'],
  class: ''
};

const ideCombinedArray = [ideLineComment, ideLineNameConst, ideLineName,
                          ideLineNameValue, ideLineNameSemi,
                          ideLineProfessionConst, ideLineProfession,
                          ideLineProfessionValue, ideLineProfessionSemi];
