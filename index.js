module.exports = {
  globals: {
    btn: 'readonly',
    btnp: 'readonly',
    clip: 'readonly',
    cls: 'readonly',
    circ: 'readonly',
    circb: 'readonly',
    exit: 'readonly',
    fget: 'readonly',
    font: 'readonly',
    fset: 'readonly',
    key: 'readonly',
    keyp: 'readonly',
    line: 'readonly',
    map: 'readonly',
    memcpy: 'readonly',
    memset: 'readonly',
    mget: 'readonly',
    mouse: 'readonly',
    mset: 'readonly',
    music: 'readonly',
    peek: 'readonly',
    peek4: 'readonly',
    pix: 'readonly',
    pmem: 'readonly',
    poke: 'readonly',
    poke4: 'readonly',
    print: 'readonly',
    rect: 'readonly',
    rectb: 'readonly',
    reset: 'readonly',
    sfx: 'readonly',
    spr: 'readonly',
    sync: 'readonly',
    time: 'readonly',
    tstamp: 'readonly',
    trace: 'readonly',
    tri: 'readonly',
    texttri: 'readonly'
  },
  rules: {
    'no-unused-vars': ['error', {
      varsIgnorePattern: '[A-Z]' // Full-caps variables are considered globals
    }]
  }
};
