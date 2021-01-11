function setup() {
  createCanvas(800, 400);
  colorMode(RGB, 1.0);
  background(.976, .949, .878);

  draw = MakeParticleLayer([
    {col: color(.667, .133, .141, 0.35), num: 4000, lifetime: 100},
    {col: color(1., .812, .337, .25), num: 800, lifetime: 55},
    {col: color(0., .369, .608, .25), num: 600, lifetime: 35},
    {col: color(.667, .133, .141, .35), num: 200, lifetime: 100}
  ]);  
}

function makeParticle(col, lifetime) {
  let pos = [random(0, width), random(0, height)];
  let pre_pos = pos;

  return function() {
    // update particle, return true if dead
    stroke(col);
    line(pre_pos[0], pre_pos[1], pos[0], pos[1]);
  
    if(lifetime-- <= 0)
      return true;

    let a = noise(pos[0]/2000, pos[1]/2000) * 2000;
    pre_pos = pos;
    pos = [pos[0] + cos(a)*5, pos[1] + sin(a)*5];
    
    return false;    
  }
}

function MakeParticleSystem(num, col, lifetime) {
  // create num of particles
  let parts = Array.from({length:num},_ => makeParticle(col, lifetime));
  // update layer until all particles die
  return _=> parts.map(p => p()).every(dead => dead);
}

function MakeParticleLayer(configs) {
  let layers = configs.map(
    cfg => MakeParticleSystem(cfg.num, cfg.col, cfg.lifetime)
  );
  let iter = 0;
  return _=> {
    // run particle layer, if dead then next
    if(iter < layers.length && layers[iter]())
      ++ iter;
  }
}