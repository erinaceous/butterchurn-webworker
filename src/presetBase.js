/* eslint-disable */
var EPSILON = 0.00001;

self.sqr = function sqr(x) {
  return x * x;
};

self.sqrt = function sqrt(x) {
  return Math.sqrt(Math.abs(x));
};

self.log10 = function log10(val) {
  return Math.log(val) * Math.LOG10E;
};

self.sign = function sign(x) {
  return x > 0 ? 1 : x < 0 ? -1 : 0;
};

self.rand = function rand(x) {
  var xf = Math.floor(x);
  if (xf < 1) {
    return Math.random();
  }
  return Math.random() * xf;
};

self.randint = function randint(x) {
  return Math.floor(rand(x));
};

self.bnot = function bnot(x) {
  return Math.abs(x) < EPSILON ? 1 : 0;
};

function isFiniteNumber(num) {
  return isFinite(num) && !isNaN(num);
}

self.pow = function pow(x, y) {
  var z = Math.pow(x, y);
  if (!isFiniteNumber(z)) {
    // mostly from complex results
    return 0;
  }
  return z;
};

self.div = function div(x, y) {
  if (y === 0) {
    return 0;
  }
  return x / y;
};

self.mod = function mod(x, y) {
  if (y === 0) {
    return 0;
  }
  var z = Math.floor(x) % Math.floor(y);
  return z;
};

self.bitor = function bitor(x, y) {
  var z = Math.floor(x) | Math.floor(y);
  return z;
};

self.bitand = function bitand(x, y) {
  var z = Math.floor(x) & Math.floor(y);
  return z;
};

self.sigmoid = function sigmoid(x, y) {
  var t = 1 + Math.exp(-x * y);
  return Math.abs(t) > EPSILON ? 1.0 / t : 0;
};

self.bor = function bor(x, y) {
  return Math.abs(x) > EPSILON || Math.abs(y) > EPSILON ? 1 : 0;
};

self.band = function band(x, y) {
  return Math.abs(x) > EPSILON && Math.abs(y) > EPSILON ? 1 : 0;
};

self.equal = function equal(x, y) {
  return Math.abs(x - y) < EPSILON ? 1 : 0;
};

self.above = function above(x, y) {
  return x > y ? 1 : 0;
};

self.below = function below(x, y) {
  return x < y ? 1 : 0;
};

self.ifcond = function ifcond(x, y, z) {
  return Math.abs(x) > EPSILON ? y : z;
};

self.memcpy = function memcpy(megabuf, dst, src, len) {
  let destOffset = dst;
  let srcOffset = src;
  let copyLen = len;

  if (srcOffset < 0) {
    copyLen += srcOffset;
    destOffset -= srcOffset;
    srcOffset = 0;
  }

  if (destOffset < 0) {
    copyLen += destOffset;
    srcOffset -= destOffset;
    destOffset = 0;
  }

  if (copyLen > 0) {
    megabuf.copyWithin(destOffset, srcOffset, copyLen);
  }

  return dst;
};
/* eslint-enable */
