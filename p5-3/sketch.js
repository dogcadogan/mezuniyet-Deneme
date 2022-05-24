let a, b, c, d, e, f, g, h, ı, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z ;
let ry= 10;
let rx= 10;
let aSound;
let bSound;
let cSound;
let dSound;
let eSound;
let fSound;
let gSound;
let hSound;
let ıSound;
let jSound;
let kSound;
let lSound;
let mSound;
let nSound;
let oSound;
let pSound;
let qSound;
let rSound;
let sSound;
let tSound;
let uSound;
let vSound;
let wSound;
let xSound;
let ySound;
let zSound;

function preload(){
  // put preload code here

  soundFormats('mp3');
      aletterSound = loadSound('assets/ASound');
      bletterSound = loadSound('assets/bSound');
      cletterSound = loadSound('assets/cSound');
      dletterSound = loadSound('assets/dSound');
      eletterSound = loadSound('assets/eSound');
      fletterSound = loadSound('assets/fSound');
      gletterSound = loadSound('assets/gSound');
      hletterSound = loadSound('assets/hSound');
      ıletterSound = loadSound('assets/iSound');
      jletterSound = loadSound('assets/jSound');
      kletterSound = loadSound('assets/kSound');
      lletterSound = loadSound('assets/lSound');
      mletterSound = loadSound('assets/mSound');
      nletterSound = loadSound('assets/nSound');
      oletterSound = loadSound('assets/oSound');
      pletterSound = loadSound('assets/pSound');
      qletterSound = loadSound('assets/qSound');
      rletterSound = loadSound('assets/rSound');
      sletterSound = loadSound('assets/sSound');
      tletterSound = loadSound('assets/tSound');
      uletterSound = loadSound('assets/uSound');
      vletterSound = loadSound('assets/vSound');
      wletterSound = loadSound('assets/wSound');
      xletterSound = loadSound('assets/xSound');
      yletterSound = loadSound('assets/ySound');
      zletterSound = loadSound('assets/zSound');



    a= loadImage("assets/a.png");
    b= loadImage("assets/b.png");
    c= loadImage("assets/c.png");
    d= loadImage("assets/d.png");
    e= loadImage("assets/e.png");
    f= loadImage("assets/f.png");
    g= loadImage("assets/g.png");
    h= loadImage("assets/h.png");
    ı= loadImage("assets/ı.png");
    j= loadImage("assets/j.png");
    k= loadImage("assets/k.png");
    l= loadImage("assets/l.png");
    m= loadImage("assets/m.png");
    n= loadImage("assets/n.png");
    o= loadImage("assets/o.png");
    p= loadImage("assets/p.png");
    q= loadImage("assets/q.png");
    r= loadImage("assets/r.png");
    s= loadImage("assets/s.png");
    t= loadImage("assets/t.png");
    u= loadImage("assets/u.png");
    v= loadImage("assets/v.png");
    w= loadImage("assets/w.png");
    x= loadImage("assets/x.png");
    y= loadImage("assets/y.png");
    z= loadImage("assets/z.png");


}

function setup() {
  createCanvas(windowWidth,windowHeight)
  background(174, 173, 174);

  // put setup code here
}

function draw() {
  // put drawing code here
}

function keyPressed(){

  if (key === 'a') {
  image(a, rx,ry);
    aletterSound.play();
  }

  if (key === 'b') {
    image(b, rx, ry);
    bletterSound.play();

  }
  if (key === 'c') {
    image(c, rx, ry);
    cletterSound.play();

  }
  if (key === 'd') {
    image(d, rx, ry);
    dletterSound.play();
  }
  if (key === 'e') {
    image(e, rx, ry);
    eletterSound.play();
  }
  if (key === 'f') {
    image(f, rx, ry);
    fletterSound.play();
  }
  if (key === 'g') {
    image(g, rx, ry);
    gletterSound.play();
  }
  if (key === 'h') {
    image(h, rx, ry);
    hletterSound.play();
  }
  if (key === 'i') {
    image(ı, rx, ry);
    ıletterSound.play();
  }
  if (key === 'j') {
    image(j, rx, ry);
    jletterSound.play();
  }
  if (key === 'k') {
    image(k, rx, ry);
    kletterSound.play();
  }
  if (key === 'l') {
    image(l, rx, ry);
    lletterSound.play();
  }
  if (key === 'm') {
    image(m, rx, ry);
    mletterSound.play();
  }
  if (key === 'n') {
    image(n, rx, ry);
    nletterSound.play();
  }
  if (key === 'o') {
    image(o, rx, ry);
    oletterSound.play();
  }
  if (key === 'p') {
    image(p, rx, ry);
    pletterSound.play();
  }
  if (key === 'q') {
    image(q, rx, ry);
    qletterSound.play();
  }
  if (key === 'r') {
    image(r, rx, ry);
    rletterSound.play();
  }
  if (key === 's') {
    image(s, rx, ry);
    sletterSound.play();
  }
  if (key === 't') {
    image(t, rx, ry);
    tletterSound.play();
  }
  if (key === 'u') {
    image(u, rx, ry);
    uletterSound.play();
  }
  if (key === 'v') {
    image(v, rx, ry);
    vletterSound.play();
  }
  if (key === 'w') {
    image(w, rx, ry);
    wletterSound.play();
  }
  if (key === 'x') {
    image(x, rx, ry);
    xletterSound.play();
  }
  if (key === 'y') {
    image(y, rx, ry);
    yletterSound.play();
  }
  if (key === 'z') {
    image(z, rx, ry);
    zletterSound.play();
  }
  rx=rx+130;
  if(rx>1920)
  {
    rx=10;
    ry=ry+180
  }
  if(key=='Enter')
  {
    background(174, 173, 174);
    rx=10
    ry=10

  }
}
