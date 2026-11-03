(()=>{var Eg=0,pp=1,Ag=2;var Pm=1,_f=2,Qi=3,Nn=0,mn=1,Dt=2,hn=0,is=1,gn=2,mp=3,gp=4,Mf=5,li=100,Rg=101,Cg=102,Pg=103,Ig=104,ao=200,Lg=201,Dg=202,Ng=203,Jh=204,Qh=205,tc=206,Ug=207,nc=208,kg=209,zg=210,Og=211,Fg=212,Bg=213,Hg=214,eu=0,tu=1,nu=2,Xr=3,iu=4,su=5,ru=6,ou=7,Im=0,Vg=1,Gg=2,Ss=0,bf=1,Sf=2,Tf=3,ea=4,Wg=5,wf=6,Ef=7,xp="attached",Xg="detached",Lm=300,qr=301,Yr=302,au=303,lu=304,ic=306,xn=1e3,ts=1001,Go=1002,cn=1003,Af=1004;var Or=1005;var Wn=1006,zo=1007;var Oi=1008;var Ci=1009,Dm=1010,Nm=1011,Wo=1012,Rf=1013,ir=1014,Ai=1015,Rn=1016,Cf=1017,Pf=1018,Ts=1020,Um=35902,km=1021,zm=1022,Xn=1023,Om=1024,Fm=1025,Vr=1026,ws=1027,If=1028,Lf=1029,Bm=1030,Df=1031;var Nf=1033,ml=33776,gl=33777,xl=33778,yl=33779,cu=35840,hu=35841,uu=35842,fu=35843,du=36196,pu=37492,mu=37496,gu=37808,xu=37809,yu=37810,vu=37811,_u=37812,Mu=37813,bu=37814,Su=37815,Tu=37816,wu=37817,Eu=37818,Au=37819,Ru=37820,Cu=37821,vl=36492,Pu=36494,Iu=36495,Hm=36283,Lu=36284,Du=36285,Nu=36286,Uf=2200,qg=2201,Yg=2202,Kr=2300,Zr=2301,mh=2302,Fr=2400,Br=2401,Ml=2402,kf=2500,Kg=2501,Vm=0,sc=1,ta=2,Zg=3200,$g=3201;var zf=0,jg=1,zi="",Lt="srgb",sn="srgb-linear",Of="display-p3",rc="display-p3-linear",bl="linear",Nt="srgb",Sl="rec709",Tl="p3";var vr=7680;var yp=519,Jg=512,Qg=513,ex=514,Gm=515,tx=516,nx=517,ix=518,sx=519,Uu=35044;var vp="300 es",ns=2e3,wl=2001,ss=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}},En=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_p=1234567,Oo=Math.PI/180,$r=180/Math.PI;function Ri(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(En[s&255]+En[s>>8&255]+En[s>>16&255]+En[s>>24&255]+"-"+En[e&255]+En[e>>8&255]+"-"+En[e>>16&15|64]+En[e>>24&255]+"-"+En[t&63|128]+En[t>>8&255]+"-"+En[t>>16&255]+En[t>>24&255]+En[n&255]+En[n>>8&255]+En[n>>16&255]+En[n>>24&255]).toLowerCase()}function pn(s,e,t){return Math.max(e,Math.min(t,s))}function Ff(s,e){return(s%e+e)%e}function rx(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function ox(s,e,t){return s!==e?(t-s)/(e-s):0}function Fo(s,e,t){return(1-t)*s+t*e}function ax(s,e,t,n){return Fo(s,e,1-Math.exp(-t*n))}function lx(s,e=1){return e-Math.abs(Ff(s,e*2)-e)}function cx(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function hx(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function ux(s,e){return s+Math.floor(Math.random()*(e-s+1))}function fx(s,e){return s+Math.random()*(e-s)}function dx(s){return s*(.5-Math.random())}function px(s){s!==void 0&&(_p=s);let e=_p+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function mx(s){return s*Oo}function gx(s){return s*$r}function xx(s){return(s&s-1)===0&&s!==0}function yx(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function vx(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function _x(s,e,t,n,i){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":s.set(a*h,l*u,l*f,a*c);break;case"YZY":s.set(l*f,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*f,a*h,a*c);break;case"XZX":s.set(a*h,l*g,l*d,a*c);break;case"YXY":s.set(l*d,a*h,l*g,a*c);break;case"ZYZ":s.set(l*g,l*d,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ei(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Pt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var na={DEG2RAD:Oo,RAD2DEG:$r,generateUUID:Ri,clamp:pn,euclideanModulo:Ff,mapLinear:rx,inverseLerp:ox,lerp:Fo,damp:ax,pingpong:lx,smoothstep:cx,smootherstep:hx,randInt:ux,randFloat:fx,randFloatSpread:dx,seededRandom:px,degToRad:mx,radToDeg:gx,isPowerOfTwo:xx,ceilPowerOfTwo:yx,floorPowerOfTwo:vx,setQuaternionFromProperEuler:_x,normalize:Pt,denormalize:Ei},ie=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(pn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Qe=class s{constructor(e,t,n,i,r,o,a,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],x=i[0],p=i[3],m=i[6],y=i[1],v=i[4],b=i[7],P=i[2],R=i[5],E=i[8];return r[0]=o*x+a*y+l*P,r[3]=o*p+a*v+l*R,r[6]=o*m+a*b+l*E,r[1]=c*x+h*y+u*P,r[4]=c*p+h*v+u*R,r[7]=c*m+h*b+u*E,r[2]=f*x+d*y+g*P,r[5]=f*p+d*v+g*R,r[8]=f*m+d*b+g*E,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,g=t*u+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=u*x,e[1]=(i*c-h*n)*x,e[2]=(a*n-i*o)*x,e[3]=f*x,e[4]=(h*t-i*l)*x,e[5]=(i*r-a*t)*x,e[6]=d*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(gh.makeScale(e,t)),this}rotate(e){return this.premultiply(gh.makeRotation(-e)),this}translate(e,t){return this.premultiply(gh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},gh=new Qe;function Wm(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Xo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Mx(){let s=Xo("canvas");return s.style.display="block",s}var Mp={};function _l(s){s in Mp||(Mp[s]=!0,console.warn(s))}function bx(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Sx(s){let e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Tx(s){let e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var bp=new Qe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Sp=new Qe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),To={[sn]:{transfer:bl,primaries:Sl,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s,fromReference:s=>s},[Lt]:{transfer:Nt,primaries:Sl,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[rc]:{transfer:bl,primaries:Tl,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.applyMatrix3(Sp),fromReference:s=>s.applyMatrix3(bp)},[Of]:{transfer:Nt,primaries:Tl,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.convertSRGBToLinear().applyMatrix3(Sp),fromReference:s=>s.applyMatrix3(bp).convertLinearToSRGB()}},wx=new Set([sn,rc]),lt={enabled:!0,_workingColorSpace:sn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!wx.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;let n=To[e].toReference,i=To[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return To[s].primaries},getTransfer:function(s){return s===zi?bl:To[s].transfer},getLuminanceCoefficients:function(s,e=this._workingColorSpace){return s.fromArray(To[e].luminanceCoefficients)}};function Gr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function xh(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var _r,ku=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{_r===void 0&&(_r=Xo("canvas")),_r.width=e.width,_r.height=e.height;let n=_r.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=_r}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=Xo("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Gr(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Gr(t[n]/255)*255):t[n]=Gr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Ex=0,El=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ex++}),this.uuid=Ri(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(yh(i[o].image)):r.push(yh(i[o]))}else r=yh(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function yh(s){return typeof HTMLImageElement!="undefined"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&s instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&s instanceof ImageBitmap?ku.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Ax=0,yn=class s extends ss{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=ts,i=ts,r=Wn,o=Oi,a=Xn,l=Ci,c=s.DEFAULT_ANISOTROPY,h=zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ax++}),this.uuid=Ri(),this.name="",this.source=new El(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ie(0,0),this.repeat=new ie(1,1),this.center=new ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Lm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xn:e.x=e.x-Math.floor(e.x);break;case ts:e.x=e.x<0?0:1;break;case Go:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xn:e.y=e.y-Math.floor(e.y);break;case ts:e.y=e.y<0?0:1;break;case Go:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};yn.DEFAULT_IMAGE=null;yn.DEFAULT_MAPPING=Lm;yn.DEFAULT_ANISOTROPY=1;var St=class s{constructor(e=0,t=0,n=0,i=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],x=l[2],p=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,b=(d+1)/2,P=(m+1)/2,R=(h+f)/4,E=(u+x)/4,I=(g+p)/4;return v>b&&v>P?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=R/n,r=E/n):b>P?b<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(b),n=R/i,r=I/i):P<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(P),n=E/r,i=I/r),this.set(n,i,r,t),this}let y=Math.sqrt((p-g)*(p-g)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(u-x)/y,this.z=(f-h)/y,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},zu=class extends ss{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t);let i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new yn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new El(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},nn=class extends zu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Al=class extends yn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=cn,this.minFilter=cn,this.wrapR=ts,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ou=class extends yn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=cn,this.minFilter=cn,this.wrapR=ts,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Xt=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],f=r[o+0],d=r[o+1],g=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=x;return}if(u!==x||l!==f||c!==d||h!==g){let p=1-a,m=l*f+c*d+h*g+u*x,y=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){let P=Math.sqrt(v),R=Math.atan2(P,m*y);p=Math.sin(p*R)/P,a=Math.sin(a*R)/P}let b=a*y;if(l=l*p+f*b,c=c*p+d*b,h=h*p+g*b,u=u*p+x*b,p===1-a){let P=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=P,c*=P,h*=P,u*=P}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+h*u+l*d-c*f,e[t+1]=l*g+h*f+c*u-a*d,e[t+2]=c*g+h*d+a*f-l*u,e[t+3]=h*g-a*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),f=l(n/2),d=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-i)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-i)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pn(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},A=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Tp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Tp.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-r*i),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return vh.copy(this).projectOnVector(e),this.sub(vh)}reflect(e){return this.sub(vh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(pn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},vh=new A,Tp=new Xt,ci=class{constructor(e=new A(1/0,1/0,1/0),t=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Si.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Si.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Si):Si.fromBufferAttribute(r,o),Si.applyMatrix4(e.matrixWorld),this.expandByPoint(Si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),za.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),za.copy(n.boundingBox)),za.applyMatrix4(e.matrixWorld),this.union(za)}let i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Si),Si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wo),Oa.subVectors(this.max,wo),Mr.subVectors(e.a,wo),br.subVectors(e.b,wo),Sr.subVectors(e.c,wo),ms.subVectors(br,Mr),gs.subVectors(Sr,br),Zs.subVectors(Mr,Sr);let t=[0,-ms.z,ms.y,0,-gs.z,gs.y,0,-Zs.z,Zs.y,ms.z,0,-ms.x,gs.z,0,-gs.x,Zs.z,0,-Zs.x,-ms.y,ms.x,0,-gs.y,gs.x,0,-Zs.y,Zs.x,0];return!_h(t,Mr,br,Sr,Oa)||(t=[1,0,0,0,1,0,0,0,1],!_h(t,Mr,br,Sr,Oa))?!1:(Fa.crossVectors(ms,gs),t=[Fa.x,Fa.y,Fa.z],_h(t,Mr,br,Sr,Oa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Yi=[new A,new A,new A,new A,new A,new A,new A,new A],Si=new A,za=new ci,Mr=new A,br=new A,Sr=new A,ms=new A,gs=new A,Zs=new A,wo=new A,Oa=new A,Fa=new A,$s=new A;function _h(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){$s.fromArray(s,r);let a=i.x*Math.abs($s.x)+i.y*Math.abs($s.y)+i.z*Math.abs($s.z),l=e.dot($s),c=t.dot($s),h=n.dot($s);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Rx=new ci,Eo=new A,Mh=new A,Un=class{constructor(e=new A,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Rx.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Eo.subVectors(e,this.center);let t=Eo.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Eo,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Mh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Eo.copy(e.center).add(Mh)),this.expandByPoint(Eo.copy(e.center).sub(Mh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ki=new A,bh=new A,Ba=new A,xs=new A,Sh=new A,Ha=new A,Th=new A,jr=class{constructor(e=new A,t=new A(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ki)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ki.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ki.copy(this.origin).addScaledVector(this.direction,t),Ki.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){bh.copy(e).add(t).multiplyScalar(.5),Ba.copy(t).sub(e).normalize(),xs.copy(this.origin).sub(bh);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Ba),a=xs.dot(this.direction),l=-xs.dot(Ba),c=xs.lengthSq(),h=Math.abs(1-o*o),u,f,d,g;if(h>0)if(u=o*l-a,f=o*a-l,g=r*h,u>=0)if(f>=-g)if(f<=g){let x=1/h;u*=x,f*=x,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(bh).addScaledVector(Ba,f),d}intersectSphere(e,t){Ki.subVectors(e.center,this.origin);let n=Ki.dot(this.direction),i=Ki.dot(Ki)-n*n,r=e.radius*e.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Ki)!==null}intersectTriangle(e,t,n,i,r){Sh.subVectors(t,e),Ha.subVectors(n,e),Th.crossVectors(Sh,Ha);let o=this.direction.dot(Th),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;xs.subVectors(this.origin,e);let l=a*this.direction.dot(Ha.crossVectors(xs,Ha));if(l<0)return null;let c=a*this.direction.dot(Sh.cross(xs));if(c<0||l+c>o)return null;let h=-a*xs.dot(Th);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ne=class s{constructor(e,t,n,i,r,o,a,l,c,h,u,f,d,g,x,p){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,h,u,f,d,g,x,p)}set(e,t,n,i,r,o,a,l,c,h,u,f,d,g,x,p){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=g,m[11]=x,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/Tr.setFromMatrixColumn(e,0).length(),r=1/Tr.setFromMatrixColumn(e,1).length(),o=1/Tr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=o*h,d=o*u,g=a*h,x=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+g*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*h,d=l*u,g=c*h,x=c*u;t[0]=f+x*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-g,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*h,d=l*u,g=c*h,x=c*u;t[0]=f-x*a,t[4]=-o*u,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*h,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*h,d=o*u,g=a*h,x=a*u;t[0]=l*h,t[4]=g*c-d,t[8]=f*c+x,t[1]=l*u,t[5]=x*c+f,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,d=o*c,g=a*l,x=a*c;t[0]=l*h,t[4]=x-f*u,t[8]=g*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=d*u+g,t[10]=f-x*u}else if(e.order==="XZY"){let f=o*l,d=o*c,g=a*l,x=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+x,t[5]=o*h,t[9]=d*u-g,t[2]=g*u-d,t[6]=a*h,t[10]=x*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Cx,e,Px)}lookAt(e,t,n){let i=this.elements;return ti.subVectors(e,t),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),ys.crossVectors(n,ti),ys.lengthSq()===0&&(Math.abs(n.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),ys.crossVectors(n,ti)),ys.normalize(),Va.crossVectors(ti,ys),i[0]=ys.x,i[4]=Va.x,i[8]=ti.x,i[1]=ys.y,i[5]=Va.y,i[9]=ti.y,i[2]=ys.z,i[6]=Va.z,i[10]=ti.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],x=n[6],p=n[10],m=n[14],y=n[3],v=n[7],b=n[11],P=n[15],R=i[0],E=i[4],I=i[8],z=i[12],_=i[1],T=i[5],k=i[9],O=i[13],G=i[2],j=i[6],H=i[10],ee=i[14],W=i[3],Y=i[7],te=i[11],se=i[15];return r[0]=o*R+a*_+l*G+c*W,r[4]=o*E+a*T+l*j+c*Y,r[8]=o*I+a*k+l*H+c*te,r[12]=o*z+a*O+l*ee+c*se,r[1]=h*R+u*_+f*G+d*W,r[5]=h*E+u*T+f*j+d*Y,r[9]=h*I+u*k+f*H+d*te,r[13]=h*z+u*O+f*ee+d*se,r[2]=g*R+x*_+p*G+m*W,r[6]=g*E+x*T+p*j+m*Y,r[10]=g*I+x*k+p*H+m*te,r[14]=g*z+x*O+p*ee+m*se,r[3]=y*R+v*_+b*G+P*W,r[7]=y*E+v*T+b*j+P*Y,r[11]=y*I+v*k+b*H+P*te,r[15]=y*z+v*O+b*ee+P*se,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],g=e[3],x=e[7],p=e[11],m=e[15];return g*(+r*l*u-i*c*u-r*a*f+n*c*f+i*a*d-n*l*d)+x*(+t*l*d-t*c*f+r*o*f-i*o*d+i*c*h-r*l*h)+p*(+t*c*u-t*a*d-r*o*u+n*o*d+r*a*h-n*c*h)+m*(-i*a*h-t*l*u+t*a*f+i*o*u-n*o*f+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],g=e[12],x=e[13],p=e[14],m=e[15],y=u*p*c-x*f*c+x*l*d-a*p*d-u*l*m+a*f*m,v=g*f*c-h*p*c-g*l*d+o*p*d+h*l*m-o*f*m,b=h*x*c-g*u*c+g*a*d-o*x*d-h*a*m+o*u*m,P=g*u*l-h*x*l-g*a*f+o*x*f+h*a*p-o*u*p,R=t*y+n*v+i*b+r*P;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/R;return e[0]=y*E,e[1]=(x*f*r-u*p*r-x*i*d+n*p*d+u*i*m-n*f*m)*E,e[2]=(a*p*r-x*l*r+x*i*c-n*p*c-a*i*m+n*l*m)*E,e[3]=(u*l*r-a*f*r-u*i*c+n*f*c+a*i*d-n*l*d)*E,e[4]=v*E,e[5]=(h*p*r-g*f*r+g*i*d-t*p*d-h*i*m+t*f*m)*E,e[6]=(g*l*r-o*p*r-g*i*c+t*p*c+o*i*m-t*l*m)*E,e[7]=(o*f*r-h*l*r+h*i*c-t*f*c-o*i*d+t*l*d)*E,e[8]=b*E,e[9]=(g*u*r-h*x*r-g*n*d+t*x*d+h*n*m-t*u*m)*E,e[10]=(o*x*r-g*a*r+g*n*c-t*x*c-o*n*m+t*a*m)*E,e[11]=(h*a*r-o*u*r-h*n*c+t*u*c+o*n*d-t*a*d)*E,e[12]=P*E,e[13]=(h*x*i-g*u*i+g*n*f-t*x*f-h*n*p+t*u*p)*E,e[14]=(g*a*i-o*x*i-g*n*l+t*x*l+o*n*p-t*a*p)*E,e[15]=(o*u*i-h*a*i+h*n*l-t*u*l-o*n*f+t*a*f)*E,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,g=r*u,x=o*h,p=o*u,m=a*u,y=l*c,v=l*h,b=l*u,P=n.x,R=n.y,E=n.z;return i[0]=(1-(x+m))*P,i[1]=(d+b)*P,i[2]=(g-v)*P,i[3]=0,i[4]=(d-b)*R,i[5]=(1-(f+m))*R,i[6]=(p+y)*R,i[7]=0,i[8]=(g+v)*E,i[9]=(p-y)*E,i[10]=(1-(f+x))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=Tr.set(i[0],i[1],i[2]).length(),o=Tr.set(i[4],i[5],i[6]).length(),a=Tr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Ti.copy(this);let c=1/r,h=1/o,u=1/a;return Ti.elements[0]*=c,Ti.elements[1]*=c,Ti.elements[2]*=c,Ti.elements[4]*=h,Ti.elements[5]*=h,Ti.elements[6]*=h,Ti.elements[8]*=u,Ti.elements[9]*=u,Ti.elements[10]*=u,t.setFromRotationMatrix(Ti),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=ns){let l=this.elements,c=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i),d,g;if(a===ns)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===wl)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=ns){let l=this.elements,c=1/(t-e),h=1/(n-i),u=1/(o-r),f=(t+e)*c,d=(n+i)*h,g,x;if(a===ns)g=(o+r)*u,x=-2*u;else if(a===wl)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Tr=new A,Ti=new Ne,Cx=new A(0,0,0),Px=new A(1,1,1),ys=new A,Va=new A,ti=new A,wp=new Ne,Ep=new Xt,hi=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(pn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-pn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(pn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-pn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(pn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-pn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return wp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wp,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ep.setFromEuler(this),this.setFromQuaternion(Ep,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};hi.DEFAULT_ORDER="XYZ";var Rl=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Ix=0,Ap=new A,wr=new Xt,Zi=new Ne,Ga=new A,Ao=new A,Lx=new A,Dx=new Xt,Rp=new A(1,0,0),Cp=new A(0,1,0),Pp=new A(0,0,1),Ip={type:"added"},Nx={type:"removed"},Er={type:"childadded",child:null},wh={type:"childremoved",child:null},yt=class s extends ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ix++}),this.uuid=Ri(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new A,t=new hi,n=new Xt,i=new A(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ne},normalMatrix:{value:new Qe}}),this.matrix=new Ne,this.matrixWorld=new Ne,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return wr.setFromAxisAngle(e,t),this.quaternion.multiply(wr),this}rotateOnWorldAxis(e,t){return wr.setFromAxisAngle(e,t),this.quaternion.premultiply(wr),this}rotateX(e){return this.rotateOnAxis(Rp,e)}rotateY(e){return this.rotateOnAxis(Cp,e)}rotateZ(e){return this.rotateOnAxis(Pp,e)}translateOnAxis(e,t){return Ap.copy(e).applyQuaternion(this.quaternion),this.position.add(Ap.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Rp,e)}translateY(e){return this.translateOnAxis(Cp,e)}translateZ(e){return this.translateOnAxis(Pp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ga.copy(e):Ga.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Ao.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zi.lookAt(Ao,Ga,this.up):Zi.lookAt(Ga,Ao,this.up),this.quaternion.setFromRotationMatrix(Zi),i&&(Zi.extractRotation(i.matrixWorld),wr.setFromRotationMatrix(Zi),this.quaternion.premultiply(wr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ip),Er.child=e,this.dispatchEvent(Er),Er.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Nx),wh.child=e,this.dispatchEvent(wh),wh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ip),Er.child=e,this.dispatchEvent(Er),Er.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ao,e,Lx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ao,Dx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};yt.DEFAULT_UP=new A(0,1,0);yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var wi=new A,$i=new A,Eh=new A,ji=new A,Ar=new A,Rr=new A,Lp=new A,Ah=new A,Rh=new A,Ch=new A,Ph=new St,Ih=new St,Lh=new St,Ms=class s{constructor(e=new A,t=new A,n=new A){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),wi.subVectors(e,t),i.cross(wi);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){wi.subVectors(i,t),$i.subVectors(n,t),Eh.subVectors(e,t);let o=wi.dot(wi),a=wi.dot($i),l=wi.dot(Eh),c=$i.dot($i),h=$i.dot(Eh),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ji)===null?!1:ji.x>=0&&ji.y>=0&&ji.x+ji.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,ji)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ji.x),l.addScaledVector(o,ji.y),l.addScaledVector(a,ji.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return Ph.setScalar(0),Ih.setScalar(0),Lh.setScalar(0),Ph.fromBufferAttribute(e,t),Ih.fromBufferAttribute(e,n),Lh.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Ph,r.x),o.addScaledVector(Ih,r.y),o.addScaledVector(Lh,r.z),o}static isFrontFacing(e,t,n,i){return wi.subVectors(n,t),$i.subVectors(e,t),wi.cross($i).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wi.subVectors(this.c,this.b),$i.subVectors(this.a,this.b),wi.cross($i).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,o,a;Ar.subVectors(i,n),Rr.subVectors(r,n),Ah.subVectors(e,n);let l=Ar.dot(Ah),c=Rr.dot(Ah);if(l<=0&&c<=0)return t.copy(n);Rh.subVectors(e,i);let h=Ar.dot(Rh),u=Rr.dot(Rh);if(h>=0&&u<=h)return t.copy(i);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Ar,o);Ch.subVectors(e,r);let d=Ar.dot(Ch),g=Rr.dot(Ch);if(g>=0&&d<=g)return t.copy(r);let x=d*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Rr,a);let p=h*g-d*u;if(p<=0&&u-h>=0&&d-g>=0)return Lp.subVectors(r,i),a=(u-h)/(u-h+(d-g)),t.copy(i).addScaledVector(Lp,a);let m=1/(p+x+f);return o=x*m,a=f*m,t.copy(n).addScaledVector(Ar,o).addScaledVector(Rr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Xm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vs={h:0,s:0,l:0},Wa={h:0,s:0,l:0};function Dh(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var fe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Lt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=lt.workingColorSpace){return this.r=e,this.g=t,this.b=n,lt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=lt.workingColorSpace){if(e=Ff(e,1),t=pn(t,0,1),n=pn(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Dh(o,r,e+1/3),this.g=Dh(o,r,e),this.b=Dh(o,r,e-1/3)}return lt.toWorkingColorSpace(this,i),this}setStyle(e,t=Lt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Lt){let n=Xm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gr(e.r),this.g=Gr(e.g),this.b=Gr(e.b),this}copyLinearToSRGB(e){return this.r=xh(e.r),this.g=xh(e.g),this.b=xh(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Lt){return lt.fromWorkingColorSpace(An.copy(this),e),Math.round(pn(An.r*255,0,255))*65536+Math.round(pn(An.g*255,0,255))*256+Math.round(pn(An.b*255,0,255))}getHexString(e=Lt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.fromWorkingColorSpace(An.copy(this),t);let n=An.r,i=An.g,r=An.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=lt.workingColorSpace){return lt.fromWorkingColorSpace(An.copy(this),t),e.r=An.r,e.g=An.g,e.b=An.b,e}getStyle(e=Lt){lt.fromWorkingColorSpace(An.copy(this),e);let t=An.r,n=An.g,i=An.b;return e!==Lt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(vs),this.setHSL(vs.h+e,vs.s+t,vs.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(vs),e.getHSL(Wa);let n=Fo(vs.h,Wa.h,t),i=Fo(vs.s,Wa.s,t),r=Fo(vs.l,Wa.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},An=new fe;fe.NAMES=Xm;var Ux=0,kn=class extends ss{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ux++}),this.uuid=Ri(),this.name="",this.type="Material",this.blending=is,this.side=Nn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jh,this.blendDst=Qh,this.blendEquation=li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new fe(0,0,0),this.blendAlpha=0,this.depthFunc=Xr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vr,this.stencilZFail=vr,this.stencilZPass=vr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==is&&(n.blending=this.blending),this.side!==Nn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Jh&&(n.blendSrc=this.blendSrc),this.blendDst!==Qh&&(n.blendDst=this.blendDst),this.blendEquation!==li&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Xr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yp&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==vr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==vr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},ct=class extends kn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.combine=Im,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var tn=new A,Xa=new ie,qt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Uu,this.updateRanges=[],this.gpuType=Ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Xa.fromBufferAttribute(this,t),Xa.applyMatrix3(e),this.setXY(t,Xa.x,Xa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix3(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix4(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyNormalMatrix(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.transformDirection(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ei(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Pt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ei(t,this.array)),t}setX(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ei(t,this.array)),t}setY(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ei(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ei(t,this.array)),t}setW(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),i=Pt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),i=Pt(i,this.array),r=Pt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Uu&&(e.usage=this.usage),e}};var Cl=class extends qt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Pl=class extends qt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ke=class extends qt{constructor(e,t,n){super(new Float32Array(e),t,n)}},kx=0,ai=new Ne,Nh=new yt,Cr=new A,ni=new ci,Ro=new ci,dn=new A,It=class s extends ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kx++}),this.uuid=Ri(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Wm(e)?Pl:Cl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Qe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ai.makeRotationFromQuaternion(e),this.applyMatrix4(ai),this}rotateX(e){return ai.makeRotationX(e),this.applyMatrix4(ai),this}rotateY(e){return ai.makeRotationY(e),this.applyMatrix4(ai),this}rotateZ(e){return ai.makeRotationZ(e),this.applyMatrix4(ai),this}translate(e,t,n){return ai.makeTranslation(e,t,n),this.applyMatrix4(ai),this}scale(e,t,n){return ai.makeScale(e,t,n),this.applyMatrix4(ai),this}lookAt(e){return Nh.lookAt(e),Nh.updateMatrix(),this.applyMatrix4(Nh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cr).negate(),this.translate(Cr.x,Cr.y,Cr.z),this}setFromPoints(e){let t=[];for(let n=0,i=e.length;n<i;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ke(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ci);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];ni.setFromBufferAttribute(r),this.morphTargetsRelative?(dn.addVectors(this.boundingBox.min,ni.min),this.boundingBox.expandByPoint(dn),dn.addVectors(this.boundingBox.max,ni.max),this.boundingBox.expandByPoint(dn)):(this.boundingBox.expandByPoint(ni.min),this.boundingBox.expandByPoint(ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Un);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(e){let n=this.boundingSphere.center;if(ni.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Ro.setFromBufferAttribute(a),this.morphTargetsRelative?(dn.addVectors(ni.min,Ro.min),ni.expandByPoint(dn),dn.addVectors(ni.max,Ro.max),ni.expandByPoint(dn)):(ni.expandByPoint(Ro.min),ni.expandByPoint(Ro.max))}ni.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)dn.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(dn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)dn.fromBufferAttribute(a,c),l&&(Cr.fromBufferAttribute(e,c),dn.add(Cr)),i=Math.max(i,n.distanceToSquared(dn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qt(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<n.count;I++)a[I]=new A,l[I]=new A;let c=new A,h=new A,u=new A,f=new ie,d=new ie,g=new ie,x=new A,p=new A;function m(I,z,_){c.fromBufferAttribute(n,I),h.fromBufferAttribute(n,z),u.fromBufferAttribute(n,_),f.fromBufferAttribute(r,I),d.fromBufferAttribute(r,z),g.fromBufferAttribute(r,_),h.sub(c),u.sub(c),d.sub(f),g.sub(f);let T=1/(d.x*g.y-g.x*d.y);isFinite(T)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(T),p.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(T),a[I].add(x),a[z].add(x),a[_].add(x),l[I].add(p),l[z].add(p),l[_].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let I=0,z=y.length;I<z;++I){let _=y[I],T=_.start,k=_.count;for(let O=T,G=T+k;O<G;O+=3)m(e.getX(O+0),e.getX(O+1),e.getX(O+2))}let v=new A,b=new A,P=new A,R=new A;function E(I){P.fromBufferAttribute(i,I),R.copy(P);let z=a[I];v.copy(z),v.sub(P.multiplyScalar(P.dot(z))).normalize(),b.crossVectors(R,z);let T=b.dot(l[I])<0?-1:1;o.setXYZW(I,v.x,v.y,v.z,T)}for(let I=0,z=y.length;I<z;++I){let _=y[I],T=_.start,k=_.count;for(let O=T,G=T+k;O<G;O+=3)E(e.getX(O+0)),E(e.getX(O+1)),E(e.getX(O+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new qt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new A,r=new A,o=new A,a=new A,l=new A,c=new A,h=new A,u=new A;if(e)for(let f=0,d=e.count;f<d;f+=3){let g=e.getX(f+0),x=e.getX(f+1),p=e.getX(f+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,p),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)dn.fromBufferAttribute(e,t),dn.normalize(),e.setXYZ(t,dn.x,dn.y,dn.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,g=0;for(let x=0,p=l.length;x<p;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*h;for(let m=0;m<h;m++)f[g++]=c[d++]}return new qt(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Dp=new Ne,js=new jr,qa=new Un,Np=new A,Ya=new A,Ka=new A,Za=new A,Uh=new A,$a=new A,Up=new A,ja=new A,ye=class extends yt{constructor(e=new It,t=new ct){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(r&&a){$a.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Uh.fromBufferAttribute(u,e),o?$a.addScaledVector(Uh,h):$a.addScaledVector(Uh.sub(t),h))}t.add($a)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),qa.copy(n.boundingSphere),qa.applyMatrix4(r),js.copy(e.ray).recast(e.near),!(qa.containsPoint(js.origin)===!1&&(js.intersectSphere(qa,Np)===null||js.origin.distanceToSquared(Np)>(e.far-e.near)**2))&&(Dp.copy(r).invert(),js.copy(e.ray).applyMatrix4(Dp),!(n.boundingBox!==null&&js.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,js)))}_computeIntersections(e,t,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let p=f[g],m=o[p.materialIndex],y=Math.max(p.start,d.start),v=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let b=y,P=v;b<P;b+=3){let R=a.getX(b),E=a.getX(b+1),I=a.getX(b+2);i=Ja(this,m,e,n,c,h,u,R,E,I),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{let g=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let p=g,m=x;p<m;p+=3){let y=a.getX(p),v=a.getX(p+1),b=a.getX(p+2);i=Ja(this,o,e,n,c,h,u,y,v,b),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let p=f[g],m=o[p.materialIndex],y=Math.max(p.start,d.start),v=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let b=y,P=v;b<P;b+=3){let R=b,E=b+1,I=b+2;i=Ja(this,m,e,n,c,h,u,R,E,I),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{let g=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let p=g,m=x;p<m;p+=3){let y=p,v=p+1,b=p+2;i=Ja(this,o,e,n,c,h,u,y,v,b),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}};function zx(s,e,t,n,i,r,o,a){let l;if(e.side===mn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===Nn,a),l===null)return null;ja.copy(a),ja.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(ja);return c<t.near||c>t.far?null:{distance:c,point:ja.clone(),object:s}}function Ja(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,Ya),s.getVertexPosition(l,Ka),s.getVertexPosition(c,Za);let h=zx(s,e,t,n,Ya,Ka,Za,Up);if(h){let u=new A;Ms.getBarycoord(Up,Ya,Ka,Za,u),i&&(h.uv=Ms.getInterpolatedAttribute(i,a,l,c,u,new ie)),r&&(h.uv1=Ms.getInterpolatedAttribute(r,a,l,c,u,new ie)),o&&(h.normal=Ms.getInterpolatedAttribute(o,a,l,c,u,new A),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new A,materialIndex:0};Ms.getNormal(Ya,Ka,Za,f.normal),h.face=f,h.barycoord=u}return h}var qn=class s extends It{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Ke(c,3)),this.setAttribute("normal",new Ke(h,3)),this.setAttribute("uv",new Ke(u,2));function g(x,p,m,y,v,b,P,R,E,I,z){let _=b/E,T=P/I,k=b/2,O=P/2,G=R/2,j=E+1,H=I+1,ee=0,W=0,Y=new A;for(let te=0;te<H;te++){let se=te*T-O;for(let Xe=0;Xe<j;Xe++){let ot=Xe*_-k;Y[x]=ot*y,Y[p]=se*v,Y[m]=G,c.push(Y.x,Y.y,Y.z),Y[x]=0,Y[p]=0,Y[m]=R>0?1:-1,h.push(Y.x,Y.y,Y.z),u.push(Xe/E),u.push(1-te/I),ee+=1}}for(let te=0;te<I;te++)for(let se=0;se<E;se++){let Xe=f+se+j*te,ot=f+se+j*(te+1),q=f+(se+1)+j*(te+1),Q=f+(se+1)+j*te;l.push(Xe,ot,Q),l.push(ot,q,Q),W+=6}a.addGroup(d,W,z),d+=W,f+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Jr(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Dn(s){let e={};for(let t=0;t<s.length;t++){let n=Jr(s[t]);for(let i in n)e[i]=n[i]}return e}function Ox(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function qm(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}var Yn={clone:Jr,merge:Dn},Fx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ht=class extends kn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fx,this.fragmentShader=Bx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Jr(e.uniforms),this.uniformsGroups=Ox(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Il=class extends yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ne,this.projectionMatrix=new Ne,this.projectionMatrixInverse=new Ne,this.coordinateSystem=ns}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},_s=new A,kp=new ie,zp=new ie,ln=class extends Il{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=$r*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Oo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $r*2*Math.atan(Math.tan(Oo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){_s.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(_s.x,_s.y).multiplyScalar(-e/_s.z),_s.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_s.x,_s.y).multiplyScalar(-e/_s.z)}getViewSize(e,t){return this.getViewBounds(e,kp,zp),t.subVectors(zp,kp)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Oo*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Pr=-90,Ir=1,Fu=class extends yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new ln(Pr,Ir,e,t);i.layers=this.layers,this.add(i);let r=new ln(Pr,Ir,e,t);r.layers=this.layers,this.add(r);let o=new ln(Pr,Ir,e,t);o.layers=this.layers,this.add(o);let a=new ln(Pr,Ir,e,t);a.layers=this.layers,this.add(a);let l=new ln(Pr,Ir,e,t);l.layers=this.layers,this.add(l);let c=new ln(Pr,Ir,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===ns)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===wl)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ll=class extends yn{constructor(e,t,n,i,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:qr,super(e,t,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Bu=class extends nn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Ll(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Wn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new qn(5,5,5),r=new Ht({name:"CubemapFromEquirect",uniforms:Jr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:mn,blending:hn});r.uniforms.tEquirect.value=t;let o=new ye(i,r),a=t.minFilter;return t.minFilter===Oi&&(t.minFilter=Wn),new Fu(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}},kh=new A,Hx=new A,Vx=new Qe,es=class{constructor(e=new A(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=kh.subVectors(n,t).cross(Hx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(kh),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Vx.getNormalMatrix(e),i=this.coplanarPoint(kh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Js=new Un,Qa=new A,qo=class{constructor(e=new es,t=new es,n=new es,i=new es,r=new es,o=new es){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ns){let n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],f=i[7],d=i[8],g=i[9],x=i[10],p=i[11],m=i[12],y=i[13],v=i[14],b=i[15];if(n[0].setComponents(l-r,f-c,p-d,b-m).normalize(),n[1].setComponents(l+r,f+c,p+d,b+m).normalize(),n[2].setComponents(l+o,f+h,p+g,b+y).normalize(),n[3].setComponents(l-o,f-h,p-g,b-y).normalize(),n[4].setComponents(l-a,f-u,p-x,b-v).normalize(),t===ns)n[5].setComponents(l+a,f+u,p+x,b+v).normalize();else if(t===wl)n[5].setComponents(a,u,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Js.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Js.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Js)}intersectsSprite(e){return Js.center.set(0,0,0),Js.radius=.7071067811865476,Js.applyMatrix4(e.matrixWorld),this.intersectsSphere(Js)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Qa.x=i.normal.x>0?e.max.x:e.min.x,Qa.y=i.normal.y>0?e.max.y:e.min.y,Qa.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Qa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Ym(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Gx(s){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){let g=u[f],x=u[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){let x=u[d];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var Jt=class s extends It{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=e/a,f=t/l,d=[],g=[],x=[],p=[];for(let m=0;m<h;m++){let y=m*f-o;for(let v=0;v<c;v++){let b=v*u-r;g.push(b,-y,0),x.push(0,0,1),p.push(v/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<a;y++){let v=y+c*m,b=y+c*(m+1),P=y+1+c*(m+1),R=y+1+c*m;d.push(v,b,R),d.push(b,P,R)}this.setIndex(d),this.setAttribute("position",new Ke(g,3)),this.setAttribute("normal",new Ke(x,3)),this.setAttribute("uv",new Ke(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},Wx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,qx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Zx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$x=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,jx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jx=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Qx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ey=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ty=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ny=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,sy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ry=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,oy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ay=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ly=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,uy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,fy=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,dy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,py=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,my=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,gy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_y="gl_FragColor = linearToOutputTexel( gl_FragColor );",My=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,by=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Sy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ty=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,wy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ey=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ay=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ry=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Py=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Iy=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ly=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Dy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ny=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Uy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ky=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,zy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Oy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Fy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,By=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Vy=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Gy=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Wy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Xy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qy=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ky=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zy=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$y=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Qy=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ev=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,iv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rv=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ov=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,av=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,lv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,cv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,dv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,vv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_v=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Mv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Tv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Ev=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Av=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Rv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Cv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Pv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Iv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Lv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Dv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Nv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Uv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,zv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ov=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Fv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Bv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Hv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Vv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Gv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,$v=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,jv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Jv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Qv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,e1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,n1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,i1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,s1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,o1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,a1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,l1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,c1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,h1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,u1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,f1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,d1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,p1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,m1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,g1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,x1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,y1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,v1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,M1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,b1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Je={alphahash_fragment:Wx,alphahash_pars_fragment:Xx,alphamap_fragment:qx,alphamap_pars_fragment:Yx,alphatest_fragment:Kx,alphatest_pars_fragment:Zx,aomap_fragment:$x,aomap_pars_fragment:jx,batching_pars_vertex:Jx,batching_vertex:Qx,begin_vertex:ey,beginnormal_vertex:ty,bsdfs:ny,iridescence_fragment:iy,bumpmap_pars_fragment:sy,clipping_planes_fragment:ry,clipping_planes_pars_fragment:oy,clipping_planes_pars_vertex:ay,clipping_planes_vertex:ly,color_fragment:cy,color_pars_fragment:hy,color_pars_vertex:uy,color_vertex:fy,common:dy,cube_uv_reflection_fragment:py,defaultnormal_vertex:my,displacementmap_pars_vertex:gy,displacementmap_vertex:xy,emissivemap_fragment:yy,emissivemap_pars_fragment:vy,colorspace_fragment:_y,colorspace_pars_fragment:My,envmap_fragment:by,envmap_common_pars_fragment:Sy,envmap_pars_fragment:Ty,envmap_pars_vertex:wy,envmap_physical_pars_fragment:ky,envmap_vertex:Ey,fog_vertex:Ay,fog_pars_vertex:Ry,fog_fragment:Cy,fog_pars_fragment:Py,gradientmap_pars_fragment:Iy,lightmap_pars_fragment:Ly,lights_lambert_fragment:Dy,lights_lambert_pars_fragment:Ny,lights_pars_begin:Uy,lights_toon_fragment:zy,lights_toon_pars_fragment:Oy,lights_phong_fragment:Fy,lights_phong_pars_fragment:By,lights_physical_fragment:Hy,lights_physical_pars_fragment:Vy,lights_fragment_begin:Gy,lights_fragment_maps:Wy,lights_fragment_end:Xy,logdepthbuf_fragment:qy,logdepthbuf_pars_fragment:Yy,logdepthbuf_pars_vertex:Ky,logdepthbuf_vertex:Zy,map_fragment:$y,map_pars_fragment:jy,map_particle_fragment:Jy,map_particle_pars_fragment:Qy,metalnessmap_fragment:ev,metalnessmap_pars_fragment:tv,morphinstance_vertex:nv,morphcolor_vertex:iv,morphnormal_vertex:sv,morphtarget_pars_vertex:rv,morphtarget_vertex:ov,normal_fragment_begin:av,normal_fragment_maps:lv,normal_pars_fragment:cv,normal_pars_vertex:hv,normal_vertex:uv,normalmap_pars_fragment:fv,clearcoat_normal_fragment_begin:dv,clearcoat_normal_fragment_maps:pv,clearcoat_pars_fragment:mv,iridescence_pars_fragment:gv,opaque_fragment:xv,packing:yv,premultiplied_alpha_fragment:vv,project_vertex:_v,dithering_fragment:Mv,dithering_pars_fragment:bv,roughnessmap_fragment:Sv,roughnessmap_pars_fragment:Tv,shadowmap_pars_fragment:wv,shadowmap_pars_vertex:Ev,shadowmap_vertex:Av,shadowmask_pars_fragment:Rv,skinbase_vertex:Cv,skinning_pars_vertex:Pv,skinning_vertex:Iv,skinnormal_vertex:Lv,specularmap_fragment:Dv,specularmap_pars_fragment:Nv,tonemapping_fragment:Uv,tonemapping_pars_fragment:kv,transmission_fragment:zv,transmission_pars_fragment:Ov,uv_pars_fragment:Fv,uv_pars_vertex:Bv,uv_vertex:Hv,worldpos_vertex:Vv,background_vert:Gv,background_frag:Wv,backgroundCube_vert:Xv,backgroundCube_frag:qv,cube_vert:Yv,cube_frag:Kv,depth_vert:Zv,depth_frag:$v,distanceRGBA_vert:jv,distanceRGBA_frag:Jv,equirect_vert:Qv,equirect_frag:e1,linedashed_vert:t1,linedashed_frag:n1,meshbasic_vert:i1,meshbasic_frag:s1,meshlambert_vert:r1,meshlambert_frag:o1,meshmatcap_vert:a1,meshmatcap_frag:l1,meshnormal_vert:c1,meshnormal_frag:h1,meshphong_vert:u1,meshphong_frag:f1,meshphysical_vert:d1,meshphysical_frag:p1,meshtoon_vert:m1,meshtoon_frag:g1,points_vert:x1,points_frag:y1,shadow_vert:v1,shadow_frag:_1,sprite_vert:M1,sprite_frag:b1},ce={common:{diffuse:{value:new fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new fe(16777215)},opacity:{value:1},center:{value:new ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},ki={basic:{uniforms:Dn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:Dn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new fe(0)}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:Dn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new fe(0)},specular:{value:new fe(1118481)},shininess:{value:30}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:Dn([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:Dn([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new fe(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:Dn([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:Dn([ce.points,ce.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:Dn([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:Dn([ce.common,ce.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:Dn([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:Dn([ce.sprite,ce.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distanceRGBA:{uniforms:Dn([ce.common,ce.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distanceRGBA_vert,fragmentShader:Je.distanceRGBA_frag},shadow:{uniforms:Dn([ce.lights,ce.fog,{color:{value:new fe(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};ki.physical={uniforms:Dn([ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new fe(0)},specularColor:{value:new fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};var el={r:0,b:0,g:0},Qs=new hi,S1=new Ne;function T1(s,e,t,n,i,r,o){let a=new fe(0),l=r===!0?0:1,c,h,u=null,f=0,d=null;function g(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?t:e).get(v)),v}function x(y){let v=!1,b=g(y);b===null?m(a,l):b&&b.isColor&&(m(b,1),v=!0);let P=s.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function p(y,v){let b=g(v);b&&(b.isCubeTexture||b.mapping===ic)?(h===void 0&&(h=new ye(new qn(1,1,1),new Ht({name:"BackgroundCubeMaterial",uniforms:Jr(ki.backgroundCube.uniforms),vertexShader:ki.backgroundCube.vertexShader,fragmentShader:ki.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,R,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Qs.copy(v.backgroundRotation),Qs.x*=-1,Qs.y*=-1,Qs.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Qs.y*=-1,Qs.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(S1.makeRotationFromEuler(Qs)),h.material.toneMapped=lt.getTransfer(b.colorSpace)!==Nt,(u!==b||f!==b.version||d!==s.toneMapping)&&(h.material.needsUpdate=!0,u=b,f=b.version,d=s.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new ye(new Jt(2,2),new Ht({name:"BackgroundMaterial",uniforms:Jr(ki.background.uniforms),vertexShader:ki.background.vertexShader,fragmentShader:ki.background.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=lt.getTransfer(b.colorSpace)!==Nt,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||f!==b.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,u=b,f=b.version,d=s.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function m(y,v){y.getRGB(el,qm(s)),n.buffers.color.setClear(el.r,el.g,el.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(y,v=1){a.set(y),l=v,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,m(a,l)},render:x,addToRenderList:p}}function w1(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null),r=i,o=!1;function a(_,T,k,O,G){let j=!1,H=u(O,k,T);r!==H&&(r=H,c(r.object)),j=d(_,O,k,G),j&&g(_,O,k,G),G!==null&&e.update(G,s.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,b(_,T,k,O),G!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return s.createVertexArray()}function c(_){return s.bindVertexArray(_)}function h(_){return s.deleteVertexArray(_)}function u(_,T,k){let O=k.wireframe===!0,G=n[_.id];G===void 0&&(G={},n[_.id]=G);let j=G[T.id];j===void 0&&(j={},G[T.id]=j);let H=j[O];return H===void 0&&(H=f(l()),j[O]=H),H}function f(_){let T=[],k=[],O=[];for(let G=0;G<t;G++)T[G]=0,k[G]=0,O[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:k,attributeDivisors:O,object:_,attributes:{},index:null}}function d(_,T,k,O){let G=r.attributes,j=T.attributes,H=0,ee=k.getAttributes();for(let W in ee)if(ee[W].location>=0){let te=G[W],se=j[W];if(se===void 0&&(W==="instanceMatrix"&&_.instanceMatrix&&(se=_.instanceMatrix),W==="instanceColor"&&_.instanceColor&&(se=_.instanceColor)),te===void 0||te.attribute!==se||se&&te.data!==se.data)return!0;H++}return r.attributesNum!==H||r.index!==O}function g(_,T,k,O){let G={},j=T.attributes,H=0,ee=k.getAttributes();for(let W in ee)if(ee[W].location>=0){let te=j[W];te===void 0&&(W==="instanceMatrix"&&_.instanceMatrix&&(te=_.instanceMatrix),W==="instanceColor"&&_.instanceColor&&(te=_.instanceColor));let se={};se.attribute=te,te&&te.data&&(se.data=te.data),G[W]=se,H++}r.attributes=G,r.attributesNum=H,r.index=O}function x(){let _=r.newAttributes;for(let T=0,k=_.length;T<k;T++)_[T]=0}function p(_){m(_,0)}function m(_,T){let k=r.newAttributes,O=r.enabledAttributes,G=r.attributeDivisors;k[_]=1,O[_]===0&&(s.enableVertexAttribArray(_),O[_]=1),G[_]!==T&&(s.vertexAttribDivisor(_,T),G[_]=T)}function y(){let _=r.newAttributes,T=r.enabledAttributes;for(let k=0,O=T.length;k<O;k++)T[k]!==_[k]&&(s.disableVertexAttribArray(k),T[k]=0)}function v(_,T,k,O,G,j,H){H===!0?s.vertexAttribIPointer(_,T,k,G,j):s.vertexAttribPointer(_,T,k,O,G,j)}function b(_,T,k,O){x();let G=O.attributes,j=k.getAttributes(),H=T.defaultAttributeValues;for(let ee in j){let W=j[ee];if(W.location>=0){let Y=G[ee];if(Y===void 0&&(ee==="instanceMatrix"&&_.instanceMatrix&&(Y=_.instanceMatrix),ee==="instanceColor"&&_.instanceColor&&(Y=_.instanceColor)),Y!==void 0){let te=Y.normalized,se=Y.itemSize,Xe=e.get(Y);if(Xe===void 0)continue;let ot=Xe.buffer,q=Xe.type,Q=Xe.bytesPerElement,ve=q===s.INT||q===s.UNSIGNED_INT||Y.gpuType===Rf;if(Y.isInterleavedBufferAttribute){let ae=Y.data,ke=ae.stride,Ie=Y.offset;if(ae.isInstancedInterleavedBuffer){for(let Ze=0;Ze<W.locationSize;Ze++)m(W.location+Ze,ae.meshPerAttribute);_.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Ze=0;Ze<W.locationSize;Ze++)p(W.location+Ze);s.bindBuffer(s.ARRAY_BUFFER,ot);for(let Ze=0;Ze<W.locationSize;Ze++)v(W.location+Ze,se/W.locationSize,q,te,ke*Q,(Ie+se/W.locationSize*Ze)*Q,ve)}else{if(Y.isInstancedBufferAttribute){for(let ae=0;ae<W.locationSize;ae++)m(W.location+ae,Y.meshPerAttribute);_.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let ae=0;ae<W.locationSize;ae++)p(W.location+ae);s.bindBuffer(s.ARRAY_BUFFER,ot);for(let ae=0;ae<W.locationSize;ae++)v(W.location+ae,se/W.locationSize,q,te,se*Q,se/W.locationSize*ae*Q,ve)}}else if(H!==void 0){let te=H[ee];if(te!==void 0)switch(te.length){case 2:s.vertexAttrib2fv(W.location,te);break;case 3:s.vertexAttrib3fv(W.location,te);break;case 4:s.vertexAttrib4fv(W.location,te);break;default:s.vertexAttrib1fv(W.location,te)}}}}y()}function P(){I();for(let _ in n){let T=n[_];for(let k in T){let O=T[k];for(let G in O)h(O[G].object),delete O[G];delete T[k]}delete n[_]}}function R(_){if(n[_.id]===void 0)return;let T=n[_.id];for(let k in T){let O=T[k];for(let G in O)h(O[G].object),delete O[G];delete T[k]}delete n[_.id]}function E(_){for(let T in n){let k=n[T];if(k[_.id]===void 0)continue;let O=k[_.id];for(let G in O)h(O[G].object),delete O[G];delete k[_.id]}}function I(){z(),o=!0,r!==i&&(r=i,c(r.object))}function z(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:I,resetDefaultState:z,dispose:P,releaseStatesOfGeometry:R,releaseStatesOfProgram:E,initAttributes:x,enableAttribute:p,disableUnusedAttributes:y}}function E1(s,e,t){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];t.update(d,n,1)}function l(c,h,u,f){if(u===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x];for(let x=0;x<f.length;x++)t.update(g,n,f[x])}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function A1(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let E=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(E){return!(E!==Xn&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){let I=E===Rn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==Ci&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Ai&&!I)}function l(E){if(E==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(f===!0){let E=e.get("EXT_clip_control");E.clipControlEXT(E.LOWER_LEFT_EXT,E.ZERO_TO_ONE_EXT)}let d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),v=s.getParameter(s.MAX_VARYING_VECTORS),b=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,R=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:y,maxVaryings:v,maxFragmentUniforms:b,vertexTextures:P,maxSamples:R}}function R1(s){let e=this,t=null,n=0,i=!1,r=!1,o=new es,a=new Qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,x=u.clipIntersection,p=u.clipShadows,m=s.get(u);if(!i||g===null||g.length===0||r&&!p)r?h(null):c();else{let y=r?0:n,v=y*4,b=m.clippingState||null;l.value=b,b=h(g,f,v,d);for(let P=0;P!==v;++P)b[P]=t[P];m.clippingState=b,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,g){let x=u!==null?u.length:0,p=null;if(x!==0){if(p=l.value,g!==!0||p===null){let m=d+x*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<m)&&(p=new Float32Array(m));for(let v=0,b=d;v!==x;++v,b+=4)o.copy(u[v]).applyMatrix4(y,a),o.normal.toArray(p,b),p[b+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function C1(s){let e=new WeakMap;function t(o,a){return a===au?o.mapping=qr:a===lu&&(o.mapping=Yr),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===au||a===lu)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Bu(l.height);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Es=class extends Il{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Hr=4,Op=[.125,.215,.35,.446,.526,.582],nr=20,zh=new Es,Fp=new fe,Oh=null,Fh=0,Bh=0,Hh=!1,tr=(1+Math.sqrt(5))/2,Lr=1/tr,Bp=[new A(-tr,Lr,0),new A(tr,Lr,0),new A(-Lr,0,tr),new A(Lr,0,tr),new A(0,tr,-Lr),new A(0,tr,Lr),new A(-1,1,-1),new A(1,1,-1),new A(-1,1,1),new A(1,1,1)],Qr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Oh=this._renderer.getRenderTarget(),Fh=this._renderer.getActiveCubeFace(),Bh=this._renderer.getActiveMipmapLevel(),Hh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Oh,Fh,Bh),this._renderer.xr.enabled=Hh,e.scissorTest=!1,tl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===qr||e.mapping===Yr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Oh=this._renderer.getRenderTarget(),Fh=this._renderer.getActiveCubeFace(),Bh=this._renderer.getActiveMipmapLevel(),Hh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Wn,minFilter:Wn,generateMipmaps:!1,type:Rn,format:Xn,colorSpace:sn,depthBuffer:!1},i=Hp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hp(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=P1(r)),this._blurMaterial=I1(r,e,t)}return i}_compileMaterial(e){let t=new ye(this._lodPlanes[0],e);this._renderer.compile(t,zh)}_sceneToCubeUV(e,t,n,i){let a=new ln(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Fp),h.toneMapping=Ss,h.autoClear=!1;let d=new ct({name:"PMREM.Background",side:mn,depthWrite:!1,depthTest:!1}),g=new ye(new qn,d),x=!1,p=e.background;p?p.isColor&&(d.color.copy(p),e.background=null,x=!0):(d.color.copy(Fp),x=!0);for(let m=0;m<6;m++){let y=m%3;y===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):y===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));let v=this._cubeSize;tl(i,y*v,m>2?v:0,v,v),h.setRenderTarget(i),x&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=p}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===qr||e.mapping===Yr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vp());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new ye(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;tl(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,zh)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Bp[(i-r-1)%Bp.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new ye(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*nr-1),x=r/g,p=isFinite(r)?1+Math.floor(h*x):nr;p>nr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${nr}`);let m=[],y=0;for(let E=0;E<nr;++E){let I=E/x,z=Math.exp(-I*I/2);m.push(z),E===0?y+=z:E<p&&(y+=2*z)}for(let E=0;E<m.length;E++)m[E]=m[E]/y;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-n;let b=this._sizeLods[i],P=3*b*(i>v-Hr?i-v+Hr:0),R=4*(this._cubeSize-b);tl(t,P,R,3*b,2*b),l.setRenderTarget(t),l.render(u,zh)}};function P1(s){let e=[],t=[],n=[],i=s,r=s-Hr+1+Op.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);t.push(a);let l=1/a;o>s-Hr?l=Op[o-s+Hr-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,x=3,p=2,m=1,y=new Float32Array(x*g*d),v=new Float32Array(p*g*d),b=new Float32Array(m*g*d);for(let R=0;R<d;R++){let E=R%3*2/3-1,I=R>2?0:-1,z=[E,I,0,E+2/3,I,0,E+2/3,I+1,0,E,I,0,E+2/3,I+1,0,E,I+1,0];y.set(z,x*g*R),v.set(f,p*g*R);let _=[R,R,R,R,R,R];b.set(_,m*g*R)}let P=new It;P.setAttribute("position",new qt(y,x)),P.setAttribute("uv",new qt(v,p)),P.setAttribute("faceIndex",new qt(b,m)),e.push(P),i>Hr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Hp(s,e,t){let n=new nn(s,e,t);return n.texture.mapping=ic,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function tl(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function I1(s,e,t){let n=new Float32Array(nr),i=new A(0,1,0);return new Ht({name:"SphericalGaussianBlur",defines:{n:nr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Bf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:hn,depthTest:!1,depthWrite:!1})}function Vp(){return new Ht({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:hn,depthTest:!1,depthWrite:!1})}function Gp(){return new Ht({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hn,depthTest:!1,depthWrite:!1})}function Bf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function L1(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===au||l===lu,h=l===qr||l===Yr;if(c||h){let u=e.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Qr(s)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let d=a.image;return c&&d&&d.height>0||h&&d&&i(d)?(t===null&&(t=new Qr(s)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function D1(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&_l("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function N1(s,e,t,n){let i={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);for(let g in f.morphAttributes){let x=f.morphAttributes[g];for(let p=0,m=x.length;p<m;p++)e.remove(x[p])}f.removeEventListener("dispose",o),delete i[f.id];let d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(u){let f=u.attributes;for(let g in f)e.update(f[g],s.ARRAY_BUFFER);let d=u.morphAttributes;for(let g in d){let x=d[g];for(let p=0,m=x.length;p<m;p++)e.update(x[p],s.ARRAY_BUFFER)}}function c(u){let f=[],d=u.index,g=u.attributes.position,x=0;if(d!==null){let y=d.array;x=d.version;for(let v=0,b=y.length;v<b;v+=3){let P=y[v+0],R=y[v+1],E=y[v+2];f.push(P,R,R,E,E,P)}}else if(g!==void 0){let y=g.array;x=g.version;for(let v=0,b=y.length/3-1;v<b;v+=3){let P=v+0,R=v+1,E=v+2;f.push(P,R,R,E,E,P)}}else return;let p=new(Wm(f)?Pl:Cl)(f,1);p.version=x;let m=r.get(u);m&&e.remove(m),r.set(u,p)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function U1(s,e,t){let n;function i(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){s.drawElements(n,d,r,f*o),t.update(d,n,1)}function c(f,d,g){g!==0&&(s.drawElementsInstanced(n,d,r,f*o,g),t.update(d,n,g))}function h(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,g);let p=0;for(let m=0;m<g;m++)p+=d[m];t.update(p,n,1)}function u(f,d,g,x){if(g===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<f.length;m++)c(f[m]/o,d[m],x[m]);else{p.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,x,0,g);let m=0;for(let y=0;y<g;y++)m+=d[y];for(let y=0;y<x.length;y++)t.update(m,n,x[y])}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function k1(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function z1(s,e,t){let n=new WeakMap,i=new St;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let z=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",z)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],v=0;d===!0&&(v=1),g===!0&&(v=2),x===!0&&(v=3);let b=a.attributes.position.count*v,P=1;b>e.maxTextureSize&&(P=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let R=new Float32Array(b*P*4*u),E=new Al(R,b,P,u);E.type=Ai,E.needsUpdate=!0;let I=v*4;for(let _=0;_<u;_++){let T=p[_],k=m[_],O=y[_],G=b*P*4*_;for(let j=0;j<T.count;j++){let H=j*I;d===!0&&(i.fromBufferAttribute(T,j),R[G+H+0]=i.x,R[G+H+1]=i.y,R[G+H+2]=i.z,R[G+H+3]=0),g===!0&&(i.fromBufferAttribute(k,j),R[G+H+4]=i.x,R[G+H+5]=i.y,R[G+H+6]=i.z,R[G+H+7]=0),x===!0&&(i.fromBufferAttribute(O,j),R[G+H+8]=i.x,R[G+H+9]=i.y,R[G+H+10]=i.z,R[G+H+11]=O.itemSize===4?i.w:1)}}f={count:u,texture:E,size:new ie(b,P)},n.set(a,f),a.addEventListener("dispose",z)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function O1(s,e,t,n){let i=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return u}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var As=class extends yn{constructor(e,t,n,i,r,o,a,l,c,h=Vr){if(h!==Vr&&h!==ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Vr&&(n=ir),n===void 0&&h===ws&&(n=Ts),super(null,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:cn,this.minFilter=l!==void 0?l:cn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Km=new yn,Wp=new As(1,1),Zm=new Al,$m=new Ou,jm=new Ll,Xp=[],qp=[],Yp=new Float32Array(16),Kp=new Float32Array(9),Zp=new Float32Array(4);function lo(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=Xp[i];if(r===void 0&&(r=new Float32Array(i),Xp[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function un(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function fn(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function oc(s,e){let t=qp[e];t===void 0&&(t=new Int32Array(e),qp[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function F1(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function B1(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;s.uniform2fv(this.addr,e),fn(t,e)}}function H1(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(un(t,e))return;s.uniform3fv(this.addr,e),fn(t,e)}}function V1(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;s.uniform4fv(this.addr,e),fn(t,e)}}function G1(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(un(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),fn(t,e)}else{if(un(t,n))return;Zp.set(n),s.uniformMatrix2fv(this.addr,!1,Zp),fn(t,n)}}function W1(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(un(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),fn(t,e)}else{if(un(t,n))return;Kp.set(n),s.uniformMatrix3fv(this.addr,!1,Kp),fn(t,n)}}function X1(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(un(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),fn(t,e)}else{if(un(t,n))return;Yp.set(n),s.uniformMatrix4fv(this.addr,!1,Yp),fn(t,n)}}function q1(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Y1(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;s.uniform2iv(this.addr,e),fn(t,e)}}function K1(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(un(t,e))return;s.uniform3iv(this.addr,e),fn(t,e)}}function Z1(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;s.uniform4iv(this.addr,e),fn(t,e)}}function $1(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function j1(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;s.uniform2uiv(this.addr,e),fn(t,e)}}function J1(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(un(t,e))return;s.uniform3uiv(this.addr,e),fn(t,e)}}function Q1(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;s.uniform4uiv(this.addr,e),fn(t,e)}}function e_(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Wp.compareFunction=Gm,r=Wp):r=Km,t.setTexture2D(e||r,i)}function t_(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||$m,i)}function n_(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||jm,i)}function i_(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Zm,i)}function s_(s){switch(s){case 5126:return F1;case 35664:return B1;case 35665:return H1;case 35666:return V1;case 35674:return G1;case 35675:return W1;case 35676:return X1;case 5124:case 35670:return q1;case 35667:case 35671:return Y1;case 35668:case 35672:return K1;case 35669:case 35673:return Z1;case 5125:return $1;case 36294:return j1;case 36295:return J1;case 36296:return Q1;case 35678:case 36198:case 36298:case 36306:case 35682:return e_;case 35679:case 36299:case 36307:return t_;case 35680:case 36300:case 36308:case 36293:return n_;case 36289:case 36303:case 36311:case 36292:return i_}}function r_(s,e){s.uniform1fv(this.addr,e)}function o_(s,e){let t=lo(e,this.size,2);s.uniform2fv(this.addr,t)}function a_(s,e){let t=lo(e,this.size,3);s.uniform3fv(this.addr,t)}function l_(s,e){let t=lo(e,this.size,4);s.uniform4fv(this.addr,t)}function c_(s,e){let t=lo(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function h_(s,e){let t=lo(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function u_(s,e){let t=lo(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function f_(s,e){s.uniform1iv(this.addr,e)}function d_(s,e){s.uniform2iv(this.addr,e)}function p_(s,e){s.uniform3iv(this.addr,e)}function m_(s,e){s.uniform4iv(this.addr,e)}function g_(s,e){s.uniform1uiv(this.addr,e)}function x_(s,e){s.uniform2uiv(this.addr,e)}function y_(s,e){s.uniform3uiv(this.addr,e)}function v_(s,e){s.uniform4uiv(this.addr,e)}function __(s,e,t){let n=this.cache,i=e.length,r=oc(t,i);un(n,r)||(s.uniform1iv(this.addr,r),fn(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Km,r[o])}function M_(s,e,t){let n=this.cache,i=e.length,r=oc(t,i);un(n,r)||(s.uniform1iv(this.addr,r),fn(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||$m,r[o])}function b_(s,e,t){let n=this.cache,i=e.length,r=oc(t,i);un(n,r)||(s.uniform1iv(this.addr,r),fn(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||jm,r[o])}function S_(s,e,t){let n=this.cache,i=e.length,r=oc(t,i);un(n,r)||(s.uniform1iv(this.addr,r),fn(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Zm,r[o])}function T_(s){switch(s){case 5126:return r_;case 35664:return o_;case 35665:return a_;case 35666:return l_;case 35674:return c_;case 35675:return h_;case 35676:return u_;case 5124:case 35670:return f_;case 35667:case 35671:return d_;case 35668:case 35672:return p_;case 35669:case 35673:return m_;case 5125:return g_;case 36294:return x_;case 36295:return y_;case 36296:return v_;case 35678:case 36198:case 36298:case 36306:case 35682:return __;case 35679:case 36299:case 36307:return M_;case 35680:case 36300:case 36308:case 36293:return b_;case 36289:case 36303:case 36311:case 36292:return S_}}var Hu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=s_(t.type)}},Vu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=T_(t.type)}},Gu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(e,t[a.id],n)}}},Vh=/(\w+)(\])?(\[|\.)?/g;function $p(s,e){s.seq.push(e),s.map[e.id]=e}function w_(s,e,t){let n=s.name,i=n.length;for(Vh.lastIndex=0;;){let r=Vh.exec(n),o=Vh.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){$p(t,c===void 0?new Hu(a,s,e):new Vu(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new Gu(a),$p(t,u)),t=u}}}var Wr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);w_(r,o,this)}}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let o=e[i];o.id in t&&n.push(o)}return n}};function jp(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var E_=37297,A_=0;function R_(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function C_(s){let e=lt.getPrimaries(lt.workingColorSpace),t=lt.getPrimaries(s),n;switch(e===t?n="":e===Tl&&t===Sl?n="LinearDisplayP3ToLinearSRGB":e===Sl&&t===Tl&&(n="LinearSRGBToLinearDisplayP3"),s){case sn:case rc:return[n,"LinearTransferOETF"];case Lt:case Of:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Jp(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+R_(s.getShaderSource(e),o)}else return i}function P_(s,e){let t=C_(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function I_(s,e){let t;switch(e){case bf:t="Linear";break;case Sf:t="Reinhard";break;case Tf:t="Cineon";break;case ea:t="ACESFilmic";break;case wf:t="AgX";break;case Ef:t="Neutral";break;case Wg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var nl=new A;function L_(){lt.getLuminanceCoefficients(nl);let s=nl.x.toFixed(4),e=nl.y.toFixed(4),t=nl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function D_(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ko).join(`
`)}function N_(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function U_(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function ko(s){return s!==""}function Qp(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function em(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var k_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wu(s){return s.replace(k_,O_)}var z_=new Map;function O_(s,e){let t=Je[e];if(t===void 0){let n=z_.get(e);if(n!==void 0)t=Je[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Wu(t)}var F_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tm(s){return s.replace(F_,B_)}function B_(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function nm(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function H_(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Pm?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===_f?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Qi&&(e="SHADOWMAP_TYPE_VSM"),e}function V_(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case qr:case Yr:e="ENVMAP_TYPE_CUBE";break;case ic:e="ENVMAP_TYPE_CUBE_UV";break}return e}function G_(s){let e="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===Yr&&(e="ENVMAP_MODE_REFRACTION"),e}function W_(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Im:e="ENVMAP_BLENDING_MULTIPLY";break;case Vg:e="ENVMAP_BLENDING_MIX";break;case Gg:e="ENVMAP_BLENDING_ADD";break}return e}function X_(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function q_(s,e,t,n){let i=s.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=H_(t),c=V_(t),h=G_(t),u=W_(t),f=X_(t),d=D_(t),g=N_(r),x=i.createProgram(),p,m,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ko).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ko).join(`
`),m.length>0&&(m+=`
`)):(p=[nm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ko).join(`
`),m=[nm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ss?"#define TONE_MAPPING":"",t.toneMapping!==Ss?Je.tonemapping_pars_fragment:"",t.toneMapping!==Ss?I_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,P_("linearToOutputTexel",t.outputColorSpace),L_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ko).join(`
`)),o=Wu(o),o=Qp(o,t),o=em(o,t),a=Wu(a),a=Qp(a,t),a=em(a,t),o=tm(o),a=tm(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===vp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===vp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let v=y+p+o,b=y+m+a,P=jp(i,i.VERTEX_SHADER,v),R=jp(i,i.FRAGMENT_SHADER,b);i.attachShader(x,P),i.attachShader(x,R),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function E(T){if(s.debug.checkShaderErrors){let k=i.getProgramInfoLog(x).trim(),O=i.getShaderInfoLog(P).trim(),G=i.getShaderInfoLog(R).trim(),j=!0,H=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(j=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,P,R);else{let ee=Jp(i,P,"vertex"),W=Jp(i,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+k+`
`+ee+`
`+W)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(O===""||G==="")&&(H=!1);H&&(T.diagnostics={runnable:j,programLog:k,vertexShader:{log:O,prefix:p},fragmentShader:{log:G,prefix:m}})}i.deleteShader(P),i.deleteShader(R),I=new Wr(i,x),z=U_(i,x)}let I;this.getUniforms=function(){return I===void 0&&E(this),I};let z;this.getAttributes=function(){return z===void 0&&E(this),z};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=i.getProgramParameter(x,E_)),_},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=A_++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=P,this.fragmentShader=R,this}var Y_=0,Xu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new qu(e),t.set(e,n)),n}},qu=class{constructor(e){this.id=Y_++,this.code=e,this.usedTimes=0}};function K_(s,e,t,n,i,r,o){let a=new Rl,l=new Xu,c=new Set,h=[],u=i.logarithmicDepthBuffer,f=i.reverseDepthBuffer,d=i.vertexTextures,g=i.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return c.add(_),_===0?"uv":`uv${_}`}function m(_,T,k,O,G){let j=O.fog,H=G.geometry,ee=_.isMeshStandardMaterial?O.environment:null,W=(_.isMeshStandardMaterial?t:e).get(_.envMap||ee),Y=W&&W.mapping===ic?W.image.height:null,te=x[_.type];_.precision!==null&&(g=i.getMaxPrecision(_.precision),g!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",g,"instead."));let se=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Xe=se!==void 0?se.length:0,ot=0;H.morphAttributes.position!==void 0&&(ot=1),H.morphAttributes.normal!==void 0&&(ot=2),H.morphAttributes.color!==void 0&&(ot=3);let q,Q,ve,ae;if(te){let Gn=ki[te];q=Gn.vertexShader,Q=Gn.fragmentShader}else q=_.vertexShader,Q=_.fragmentShader,l.update(_),ve=l.getVertexShaderID(_),ae=l.getFragmentShaderID(_);let ke=s.getRenderTarget(),Ie=G.isInstancedMesh===!0,Ze=G.isBatchedMesh===!0,Mt=!!_.map,at=!!_.matcap,L=!!W,_n=!!_.aoMap,st=!!_.lightMap,dt=!!_.bumpMap,Oe=!!_.normalMap,Rt=!!_.displacementMap,Fe=!!_.emissiveMap,C=!!_.metalnessMap,S=!!_.roughnessMap,F=_.anisotropy>0,Z=_.clearcoat>0,J=_.dispersion>0,K=_.iridescence>0,Se=_.sheen>0,le=_.transmission>0,pe=F&&!!_.anisotropyMap,rt=Z&&!!_.clearcoatMap,ne=Z&&!!_.clearcoatNormalMap,me=Z&&!!_.clearcoatRoughnessMap,Be=K&&!!_.iridescenceMap,He=K&&!!_.iridescenceThicknessMap,Me=Se&&!!_.sheenColorMap,pt=Se&&!!_.sheenRoughnessMap,Ye=!!_.specularMap,vt=!!_.specularColorMap,D=!!_.specularIntensityMap,he=le&&!!_.transmissionMap,X=le&&!!_.thicknessMap,$=!!_.gradientMap,ge=!!_.alphaMap,_e=_.alphaTest>0,xt=!!_.alphaHash,en=!!_.extensions,Vn=Ss;_.toneMapped&&(ke===null||ke.isXRRenderTarget===!0)&&(Vn=s.toneMapping);let bt={shaderID:te,shaderType:_.type,shaderName:_.name,vertexShader:q,fragmentShader:Q,defines:_.defines,customVertexShaderID:ve,customFragmentShaderID:ae,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:g,batching:Ze,batchingColor:Ze&&G._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&G.instanceColor!==null,instancingMorph:Ie&&G.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ke===null?s.outputColorSpace:ke.isXRRenderTarget===!0?ke.texture.colorSpace:sn,alphaToCoverage:!!_.alphaToCoverage,map:Mt,matcap:at,envMap:L,envMapMode:L&&W.mapping,envMapCubeUVHeight:Y,aoMap:_n,lightMap:st,bumpMap:dt,normalMap:Oe,displacementMap:d&&Rt,emissiveMap:Fe,normalMapObjectSpace:Oe&&_.normalMapType===jg,normalMapTangentSpace:Oe&&_.normalMapType===zf,metalnessMap:C,roughnessMap:S,anisotropy:F,anisotropyMap:pe,clearcoat:Z,clearcoatMap:rt,clearcoatNormalMap:ne,clearcoatRoughnessMap:me,dispersion:J,iridescence:K,iridescenceMap:Be,iridescenceThicknessMap:He,sheen:Se,sheenColorMap:Me,sheenRoughnessMap:pt,specularMap:Ye,specularColorMap:vt,specularIntensityMap:D,transmission:le,transmissionMap:he,thicknessMap:X,gradientMap:$,opaque:_.transparent===!1&&_.blending===is&&_.alphaToCoverage===!1,alphaMap:ge,alphaTest:_e,alphaHash:xt,combine:_.combine,mapUv:Mt&&p(_.map.channel),aoMapUv:_n&&p(_.aoMap.channel),lightMapUv:st&&p(_.lightMap.channel),bumpMapUv:dt&&p(_.bumpMap.channel),normalMapUv:Oe&&p(_.normalMap.channel),displacementMapUv:Rt&&p(_.displacementMap.channel),emissiveMapUv:Fe&&p(_.emissiveMap.channel),metalnessMapUv:C&&p(_.metalnessMap.channel),roughnessMapUv:S&&p(_.roughnessMap.channel),anisotropyMapUv:pe&&p(_.anisotropyMap.channel),clearcoatMapUv:rt&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:ne&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Be&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:He&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:pt&&p(_.sheenRoughnessMap.channel),specularMapUv:Ye&&p(_.specularMap.channel),specularColorMapUv:vt&&p(_.specularColorMap.channel),specularIntensityMapUv:D&&p(_.specularIntensityMap.channel),transmissionMapUv:he&&p(_.transmissionMap.channel),thicknessMapUv:X&&p(_.thicknessMap.channel),alphaMapUv:ge&&p(_.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Oe||F),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!H.attributes.uv&&(Mt||ge),fog:!!j,useFog:_.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:f,skinning:G.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:Xe,morphTextureStride:ot,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&k.length>0,shadowMapType:s.shadowMap.type,toneMapping:Vn,decodeVideoTexture:Mt&&_.map.isVideoTexture===!0&&lt.getTransfer(_.map.colorSpace)===Nt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Dt,flipSided:_.side===mn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:en&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(en&&_.extensions.multiDraw===!0||Ze)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return bt.vertexUv1s=c.has(1),bt.vertexUv2s=c.has(2),bt.vertexUv3s=c.has(3),c.clear(),bt}function y(_){let T=[];if(_.shaderID?T.push(_.shaderID):(T.push(_.customVertexShaderID),T.push(_.customFragmentShaderID)),_.defines!==void 0)for(let k in _.defines)T.push(k),T.push(_.defines[k]);return _.isRawShaderMaterial===!1&&(v(T,_),b(T,_),T.push(s.outputColorSpace)),T.push(_.customProgramCacheKey),T.join()}function v(_,T){_.push(T.precision),_.push(T.outputColorSpace),_.push(T.envMapMode),_.push(T.envMapCubeUVHeight),_.push(T.mapUv),_.push(T.alphaMapUv),_.push(T.lightMapUv),_.push(T.aoMapUv),_.push(T.bumpMapUv),_.push(T.normalMapUv),_.push(T.displacementMapUv),_.push(T.emissiveMapUv),_.push(T.metalnessMapUv),_.push(T.roughnessMapUv),_.push(T.anisotropyMapUv),_.push(T.clearcoatMapUv),_.push(T.clearcoatNormalMapUv),_.push(T.clearcoatRoughnessMapUv),_.push(T.iridescenceMapUv),_.push(T.iridescenceThicknessMapUv),_.push(T.sheenColorMapUv),_.push(T.sheenRoughnessMapUv),_.push(T.specularMapUv),_.push(T.specularColorMapUv),_.push(T.specularIntensityMapUv),_.push(T.transmissionMapUv),_.push(T.thicknessMapUv),_.push(T.combine),_.push(T.fogExp2),_.push(T.sizeAttenuation),_.push(T.morphTargetsCount),_.push(T.morphAttributeCount),_.push(T.numDirLights),_.push(T.numPointLights),_.push(T.numSpotLights),_.push(T.numSpotLightMaps),_.push(T.numHemiLights),_.push(T.numRectAreaLights),_.push(T.numDirLightShadows),_.push(T.numPointLightShadows),_.push(T.numSpotLightShadows),_.push(T.numSpotLightShadowsWithMaps),_.push(T.numLightProbes),_.push(T.shadowMapType),_.push(T.toneMapping),_.push(T.numClippingPlanes),_.push(T.numClipIntersection),_.push(T.depthPacking)}function b(_,T){a.disableAll(),T.supportsVertexTextures&&a.enable(0),T.instancing&&a.enable(1),T.instancingColor&&a.enable(2),T.instancingMorph&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),T.dispersion&&a.enable(20),T.batchingColor&&a.enable(21),_.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reverseDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.alphaToCoverage&&a.enable(20),_.push(a.mask)}function P(_){let T=x[_.type],k;if(T){let O=ki[T];k=Yn.clone(O.uniforms)}else k=_.uniforms;return k}function R(_,T){let k;for(let O=0,G=h.length;O<G;O++){let j=h[O];if(j.cacheKey===T){k=j,++k.usedTimes;break}}return k===void 0&&(k=new q_(s,T,_,r),h.push(k)),k}function E(_){if(--_.usedTimes===0){let T=h.indexOf(_);h[T]=h[h.length-1],h.pop(),_.destroy()}}function I(_){l.remove(_)}function z(){l.dispose()}return{getParameters:m,getProgramCacheKey:y,getUniforms:P,acquireProgram:R,releaseProgram:E,releaseShaderCache:I,programs:h,dispose:z}}function Z_(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function $_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function im(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function sm(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(u,f,d,g,x,p){let m=s[e];return m===void 0?(m={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:x,group:p},s[e]=m):(m.id=u.id,m.object=u,m.geometry=f,m.material=d,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=x,m.group=p),e++,m}function a(u,f,d,g,x,p){let m=o(u,f,d,g,x,p);d.transmission>0?n.push(m):d.transparent===!0?i.push(m):t.push(m)}function l(u,f,d,g,x,p){let m=o(u,f,d,g,x,p);d.transmission>0?n.unshift(m):d.transparent===!0?i.unshift(m):t.unshift(m)}function c(u,f){t.length>1&&t.sort(u||$_),n.length>1&&n.sort(f||im),i.length>1&&i.sort(f||im)}function h(){for(let u=e,f=s.length;u<f;u++){let d=s[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function j_(){let s=new WeakMap;function e(n,i){let r=s.get(n),o;return r===void 0?(o=new sm,s.set(n,[o])):i>=r.length?(o=new sm,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function J_(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new A,color:new fe};break;case"SpotLight":t={position:new A,direction:new A,color:new fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new A,color:new fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new A,skyColor:new fe,groundColor:new fe};break;case"RectAreaLight":t={color:new fe,position:new A,halfWidth:new A,halfHeight:new A};break}return s[e.id]=t,t}}}function Q_(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var eM=0;function tM(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function nM(s){let e=new J_,t=Q_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new A);let i=new A,r=new Ne,o=new Ne;function a(c){let h=0,u=0,f=0;for(let z=0;z<9;z++)n.probe[z].set(0,0,0);let d=0,g=0,x=0,p=0,m=0,y=0,v=0,b=0,P=0,R=0,E=0;c.sort(tM);for(let z=0,_=c.length;z<_;z++){let T=c[z],k=T.color,O=T.intensity,G=T.distance,j=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)h+=k.r*O,u+=k.g*O,f+=k.b*O;else if(T.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(T.sh.coefficients[H],O);E++}else if(T.isDirectionalLight){let H=e.get(T);if(H.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let ee=T.shadow,W=t.get(T);W.shadowIntensity=ee.intensity,W.shadowBias=ee.bias,W.shadowNormalBias=ee.normalBias,W.shadowRadius=ee.radius,W.shadowMapSize=ee.mapSize,n.directionalShadow[d]=W,n.directionalShadowMap[d]=j,n.directionalShadowMatrix[d]=T.shadow.matrix,y++}n.directional[d]=H,d++}else if(T.isSpotLight){let H=e.get(T);H.position.setFromMatrixPosition(T.matrixWorld),H.color.copy(k).multiplyScalar(O),H.distance=G,H.coneCos=Math.cos(T.angle),H.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),H.decay=T.decay,n.spot[x]=H;let ee=T.shadow;if(T.map&&(n.spotLightMap[P]=T.map,P++,ee.updateMatrices(T),T.castShadow&&R++),n.spotLightMatrix[x]=ee.matrix,T.castShadow){let W=t.get(T);W.shadowIntensity=ee.intensity,W.shadowBias=ee.bias,W.shadowNormalBias=ee.normalBias,W.shadowRadius=ee.radius,W.shadowMapSize=ee.mapSize,n.spotShadow[x]=W,n.spotShadowMap[x]=j,b++}x++}else if(T.isRectAreaLight){let H=e.get(T);H.color.copy(k).multiplyScalar(O),H.halfWidth.set(T.width*.5,0,0),H.halfHeight.set(0,T.height*.5,0),n.rectArea[p]=H,p++}else if(T.isPointLight){let H=e.get(T);if(H.color.copy(T.color).multiplyScalar(T.intensity),H.distance=T.distance,H.decay=T.decay,T.castShadow){let ee=T.shadow,W=t.get(T);W.shadowIntensity=ee.intensity,W.shadowBias=ee.bias,W.shadowNormalBias=ee.normalBias,W.shadowRadius=ee.radius,W.shadowMapSize=ee.mapSize,W.shadowCameraNear=ee.camera.near,W.shadowCameraFar=ee.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=j,n.pointShadowMatrix[g]=T.shadow.matrix,v++}n.point[g]=H,g++}else if(T.isHemisphereLight){let H=e.get(T);H.skyColor.copy(T.color).multiplyScalar(O),H.groundColor.copy(T.groundColor).multiplyScalar(O),n.hemi[m]=H,m++}}p>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ce.LTC_FLOAT_1,n.rectAreaLTC2=ce.LTC_FLOAT_2):(n.rectAreaLTC1=ce.LTC_HALF_1,n.rectAreaLTC2=ce.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let I=n.hash;(I.directionalLength!==d||I.pointLength!==g||I.spotLength!==x||I.rectAreaLength!==p||I.hemiLength!==m||I.numDirectionalShadows!==y||I.numPointShadows!==v||I.numSpotShadows!==b||I.numSpotMaps!==P||I.numLightProbes!==E)&&(n.directional.length=d,n.spot.length=x,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=b+P-R,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=E,I.directionalLength=d,I.pointLength=g,I.spotLength=x,I.rectAreaLength=p,I.hemiLength=m,I.numDirectionalShadows=y,I.numPointShadows=v,I.numSpotShadows=b,I.numSpotMaps=P,I.numLightProbes=E,n.version=eM++)}function l(c,h){let u=0,f=0,d=0,g=0,x=0,p=h.matrixWorldInverse;for(let m=0,y=c.length;m<y;m++){let v=c[m];if(v.isDirectionalLight){let b=n.directional[u];b.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(p),u++}else if(v.isSpotLight){let b=n.spot[d];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(p),d++}else if(v.isRectAreaLight){let b=n.rectArea[g];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(p),o.identity(),r.copy(v.matrixWorld),r.premultiply(p),o.extractRotation(r),b.halfWidth.set(v.width*.5,0,0),b.halfHeight.set(0,v.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){let b=n.point[f];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(p),f++}else if(v.isHemisphereLight){let b=n.hemi[x];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(p),x++}}}return{setup:a,setupView:l,state:n}}function rm(s){let e=new nM(s),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function iM(s){let e=new WeakMap;function t(i,r=0){let o=e.get(i),a;return o===void 0?(a=new rm(s),e.set(i,[a])):r>=o.length?(a=new rm(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var Yu=class extends kn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ku=class extends kn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},sM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function oM(s,e,t){let n=new qo,i=new ie,r=new ie,o=new St,a=new Yu({depthPacking:$g}),l=new Ku,c={},h=t.maxTextureSize,u={[Nn]:mn,[mn]:Nn,[Dt]:Dt},f=new Ht({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ie},radius:{value:4}},vertexShader:sM,fragmentShader:rM}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new It;g.setAttribute("position",new qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ye(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pm;let m=this.type;this.render=function(R,E,I){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;let z=s.getRenderTarget(),_=s.getActiveCubeFace(),T=s.getActiveMipmapLevel(),k=s.state;k.setBlending(hn),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let O=m!==Qi&&this.type===Qi,G=m===Qi&&this.type!==Qi;for(let j=0,H=R.length;j<H;j++){let ee=R[j],W=ee.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);let Y=W.getFrameExtents();if(i.multiply(Y),r.copy(W.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/Y.x),i.x=r.x*Y.x,W.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/Y.y),i.y=r.y*Y.y,W.mapSize.y=r.y)),W.map===null||O===!0||G===!0){let se=this.type!==Qi?{minFilter:cn,magFilter:cn}:{};W.map!==null&&W.map.dispose(),W.map=new nn(i.x,i.y,se),W.map.texture.name=ee.name+".shadowMap",W.camera.updateProjectionMatrix()}s.setRenderTarget(W.map),s.clear();let te=W.getViewportCount();for(let se=0;se<te;se++){let Xe=W.getViewport(se);o.set(r.x*Xe.x,r.y*Xe.y,r.x*Xe.z,r.y*Xe.w),k.viewport(o),W.updateMatrices(ee,se),n=W.getFrustum(),b(E,I,W.camera,ee,this.type)}W.isPointLightShadow!==!0&&this.type===Qi&&y(W,I),W.needsUpdate=!1}m=this.type,p.needsUpdate=!1,s.setRenderTarget(z,_,T)};function y(R,E){let I=e.update(x);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,d.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new nn(i.x,i.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,s.setRenderTarget(R.mapPass),s.clear(),s.renderBufferDirect(E,null,I,f,x,null),d.uniforms.shadow_pass.value=R.mapPass.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,s.setRenderTarget(R.map),s.clear(),s.renderBufferDirect(E,null,I,d,x,null)}function v(R,E,I,z){let _=null,T=I.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(T!==void 0)_=T;else if(_=I.isPointLight===!0?l:a,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){let k=_.uuid,O=E.uuid,G=c[k];G===void 0&&(G={},c[k]=G);let j=G[O];j===void 0&&(j=_.clone(),G[O]=j,E.addEventListener("dispose",P)),_=j}if(_.visible=E.visible,_.wireframe=E.wireframe,z===Qi?_.side=E.shadowSide!==null?E.shadowSide:E.side:_.side=E.shadowSide!==null?E.shadowSide:u[E.side],_.alphaMap=E.alphaMap,_.alphaTest=E.alphaTest,_.map=E.map,_.clipShadows=E.clipShadows,_.clippingPlanes=E.clippingPlanes,_.clipIntersection=E.clipIntersection,_.displacementMap=E.displacementMap,_.displacementScale=E.displacementScale,_.displacementBias=E.displacementBias,_.wireframeLinewidth=E.wireframeLinewidth,_.linewidth=E.linewidth,I.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let k=s.properties.get(_);k.light=I}return _}function b(R,E,I,z,_){if(R.visible===!1)return;if(R.layers.test(E.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&_===Qi)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,R.matrixWorld);let O=e.update(R),G=R.material;if(Array.isArray(G)){let j=O.groups;for(let H=0,ee=j.length;H<ee;H++){let W=j[H],Y=G[W.materialIndex];if(Y&&Y.visible){let te=v(R,Y,z,_);R.onBeforeShadow(s,R,E,I,O,te,W),s.renderBufferDirect(I,null,O,te,R,W),R.onAfterShadow(s,R,E,I,O,te,W)}}}else if(G.visible){let j=v(R,G,z,_);R.onBeforeShadow(s,R,E,I,O,j,null),s.renderBufferDirect(I,null,O,j,R,null),R.onAfterShadow(s,R,E,I,O,j,null)}}let k=R.children;for(let O=0,G=k.length;O<G;O++)b(k[O],E,I,z,_)}function P(R){R.target.removeEventListener("dispose",P);for(let I in c){let z=c[I],_=R.target.uuid;_ in z&&(z[_].dispose(),delete z[_])}}}var aM={[eu]:tu,[nu]:ru,[iu]:ou,[Xr]:su,[tu]:eu,[ru]:nu,[ou]:iu,[su]:Xr};function lM(s){function e(){let D=!1,he=new St,X=null,$=new St(0,0,0,0);return{setMask:function(ge){X!==ge&&!D&&(s.colorMask(ge,ge,ge,ge),X=ge)},setLocked:function(ge){D=ge},setClear:function(ge,_e,xt,en,Vn){Vn===!0&&(ge*=en,_e*=en,xt*=en),he.set(ge,_e,xt,en),$.equals(he)===!1&&(s.clearColor(ge,_e,xt,en),$.copy(he))},reset:function(){D=!1,X=null,$.set(-1,0,0,0)}}}function t(){let D=!1,he=!1,X=null,$=null,ge=null;return{setReversed:function(_e){he=_e},setTest:function(_e){_e?ve(s.DEPTH_TEST):ae(s.DEPTH_TEST)},setMask:function(_e){X!==_e&&!D&&(s.depthMask(_e),X=_e)},setFunc:function(_e){if(he&&(_e=aM[_e]),$!==_e){switch(_e){case eu:s.depthFunc(s.NEVER);break;case tu:s.depthFunc(s.ALWAYS);break;case nu:s.depthFunc(s.LESS);break;case Xr:s.depthFunc(s.LEQUAL);break;case iu:s.depthFunc(s.EQUAL);break;case su:s.depthFunc(s.GEQUAL);break;case ru:s.depthFunc(s.GREATER);break;case ou:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}$=_e}},setLocked:function(_e){D=_e},setClear:function(_e){ge!==_e&&(s.clearDepth(_e),ge=_e)},reset:function(){D=!1,X=null,$=null,ge=null}}}function n(){let D=!1,he=null,X=null,$=null,ge=null,_e=null,xt=null,en=null,Vn=null;return{setTest:function(bt){D||(bt?ve(s.STENCIL_TEST):ae(s.STENCIL_TEST))},setMask:function(bt){he!==bt&&!D&&(s.stencilMask(bt),he=bt)},setFunc:function(bt,Gn,qi){(X!==bt||$!==Gn||ge!==qi)&&(s.stencilFunc(bt,Gn,qi),X=bt,$=Gn,ge=qi)},setOp:function(bt,Gn,qi){(_e!==bt||xt!==Gn||en!==qi)&&(s.stencilOp(bt,Gn,qi),_e=bt,xt=Gn,en=qi)},setLocked:function(bt){D=bt},setClear:function(bt){Vn!==bt&&(s.clearStencil(bt),Vn=bt)},reset:function(){D=!1,he=null,X=null,$=null,ge=null,_e=null,xt=null,en=null,Vn=null}}}let i=new e,r=new t,o=new n,a=new WeakMap,l=new WeakMap,c={},h={},u=new WeakMap,f=[],d=null,g=!1,x=null,p=null,m=null,y=null,v=null,b=null,P=null,R=new fe(0,0,0),E=0,I=!1,z=null,_=null,T=null,k=null,O=null,G=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,H=0,ee=s.getParameter(s.VERSION);ee.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(ee)[1]),j=H>=1):ee.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),j=H>=2);let W=null,Y={},te=s.getParameter(s.SCISSOR_BOX),se=s.getParameter(s.VIEWPORT),Xe=new St().fromArray(te),ot=new St().fromArray(se);function q(D,he,X,$){let ge=new Uint8Array(4),_e=s.createTexture();s.bindTexture(D,_e),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let xt=0;xt<X;xt++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(he,0,s.RGBA,1,1,$,0,s.RGBA,s.UNSIGNED_BYTE,ge):s.texImage2D(he+xt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ge);return _e}let Q={};Q[s.TEXTURE_2D]=q(s.TEXTURE_2D,s.TEXTURE_2D,1),Q[s.TEXTURE_CUBE_MAP]=q(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[s.TEXTURE_2D_ARRAY]=q(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Q[s.TEXTURE_3D]=q(s.TEXTURE_3D,s.TEXTURE_3D,1,1),i.setClear(0,0,0,1),r.setClear(1),o.setClear(0),ve(s.DEPTH_TEST),r.setFunc(Xr),st(!1),dt(pp),ve(s.CULL_FACE),L(hn);function ve(D){c[D]!==!0&&(s.enable(D),c[D]=!0)}function ae(D){c[D]!==!1&&(s.disable(D),c[D]=!1)}function ke(D,he){return h[D]!==he?(s.bindFramebuffer(D,he),h[D]=he,D===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=he),D===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=he),!0):!1}function Ie(D,he){let X=f,$=!1;if(D){X=u.get(he),X===void 0&&(X=[],u.set(he,X));let ge=D.textures;if(X.length!==ge.length||X[0]!==s.COLOR_ATTACHMENT0){for(let _e=0,xt=ge.length;_e<xt;_e++)X[_e]=s.COLOR_ATTACHMENT0+_e;X.length=ge.length,$=!0}}else X[0]!==s.BACK&&(X[0]=s.BACK,$=!0);$&&s.drawBuffers(X)}function Ze(D){return d!==D?(s.useProgram(D),d=D,!0):!1}let Mt={[li]:s.FUNC_ADD,[Rg]:s.FUNC_SUBTRACT,[Cg]:s.FUNC_REVERSE_SUBTRACT};Mt[Pg]=s.MIN,Mt[Ig]=s.MAX;let at={[ao]:s.ZERO,[Lg]:s.ONE,[Dg]:s.SRC_COLOR,[Jh]:s.SRC_ALPHA,[zg]:s.SRC_ALPHA_SATURATE,[nc]:s.DST_COLOR,[tc]:s.DST_ALPHA,[Ng]:s.ONE_MINUS_SRC_COLOR,[Qh]:s.ONE_MINUS_SRC_ALPHA,[kg]:s.ONE_MINUS_DST_COLOR,[Ug]:s.ONE_MINUS_DST_ALPHA,[Og]:s.CONSTANT_COLOR,[Fg]:s.ONE_MINUS_CONSTANT_COLOR,[Bg]:s.CONSTANT_ALPHA,[Hg]:s.ONE_MINUS_CONSTANT_ALPHA};function L(D,he,X,$,ge,_e,xt,en,Vn,bt){if(D===hn){g===!0&&(ae(s.BLEND),g=!1);return}if(g===!1&&(ve(s.BLEND),g=!0),D!==Mf){if(D!==x||bt!==I){if((p!==li||v!==li)&&(s.blendEquation(s.FUNC_ADD),p=li,v=li),bt)switch(D){case is:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case gn:s.blendFunc(s.ONE,s.ONE);break;case mp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case gp:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case is:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case gn:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case mp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case gp:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}m=null,y=null,b=null,P=null,R.set(0,0,0),E=0,x=D,I=bt}return}ge=ge||he,_e=_e||X,xt=xt||$,(he!==p||ge!==v)&&(s.blendEquationSeparate(Mt[he],Mt[ge]),p=he,v=ge),(X!==m||$!==y||_e!==b||xt!==P)&&(s.blendFuncSeparate(at[X],at[$],at[_e],at[xt]),m=X,y=$,b=_e,P=xt),(en.equals(R)===!1||Vn!==E)&&(s.blendColor(en.r,en.g,en.b,Vn),R.copy(en),E=Vn),x=D,I=!1}function _n(D,he){D.side===Dt?ae(s.CULL_FACE):ve(s.CULL_FACE);let X=D.side===mn;he&&(X=!X),st(X),D.blending===is&&D.transparent===!1?L(hn):L(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),r.setFunc(D.depthFunc),r.setTest(D.depthTest),r.setMask(D.depthWrite),i.setMask(D.colorWrite);let $=D.stencilWrite;o.setTest($),$&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Rt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ve(s.SAMPLE_ALPHA_TO_COVERAGE):ae(s.SAMPLE_ALPHA_TO_COVERAGE)}function st(D){z!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),z=D)}function dt(D){D!==Eg?(ve(s.CULL_FACE),D!==_&&(D===pp?s.cullFace(s.BACK):D===Ag?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ae(s.CULL_FACE),_=D}function Oe(D){D!==T&&(j&&s.lineWidth(D),T=D)}function Rt(D,he,X){D?(ve(s.POLYGON_OFFSET_FILL),(k!==he||O!==X)&&(s.polygonOffset(he,X),k=he,O=X)):ae(s.POLYGON_OFFSET_FILL)}function Fe(D){D?ve(s.SCISSOR_TEST):ae(s.SCISSOR_TEST)}function C(D){D===void 0&&(D=s.TEXTURE0+G-1),W!==D&&(s.activeTexture(D),W=D)}function S(D,he,X){X===void 0&&(W===null?X=s.TEXTURE0+G-1:X=W);let $=Y[X];$===void 0&&($={type:void 0,texture:void 0},Y[X]=$),($.type!==D||$.texture!==he)&&(W!==X&&(s.activeTexture(X),W=X),s.bindTexture(D,he||Q[D]),$.type=D,$.texture=he)}function F(){let D=Y[W];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Z(){try{s.compressedTexImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{s.compressedTexImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function K(){try{s.texSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Se(){try{s.texSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function le(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pe(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function rt(){try{s.texStorage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ne(){try{s.texStorage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function me(){try{s.texImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Be(){try{s.texImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function He(D){Xe.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),Xe.copy(D))}function Me(D){ot.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),ot.copy(D))}function pt(D,he){let X=l.get(he);X===void 0&&(X=new WeakMap,l.set(he,X));let $=X.get(D);$===void 0&&($=s.getUniformBlockIndex(he,D.name),X.set(D,$))}function Ye(D,he){let $=l.get(he).get(D);a.get(he)!==$&&(s.uniformBlockBinding(he,$,D.__bindingPointIndex),a.set(he,$))}function vt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),c={},W=null,Y={},h={},u=new WeakMap,f=[],d=null,g=!1,x=null,p=null,m=null,y=null,v=null,b=null,P=null,R=new fe(0,0,0),E=0,I=!1,z=null,_=null,T=null,k=null,O=null,Xe.set(0,0,s.canvas.width,s.canvas.height),ot.set(0,0,s.canvas.width,s.canvas.height),i.reset(),r.reset(),o.reset()}return{buffers:{color:i,depth:r,stencil:o},enable:ve,disable:ae,bindFramebuffer:ke,drawBuffers:Ie,useProgram:Ze,setBlending:L,setMaterial:_n,setFlipSided:st,setCullFace:dt,setLineWidth:Oe,setPolygonOffset:Rt,setScissorTest:Fe,activeTexture:C,bindTexture:S,unbindTexture:F,compressedTexImage2D:Z,compressedTexImage3D:J,texImage2D:me,texImage3D:Be,updateUBOMapping:pt,uniformBlockBinding:Ye,texStorage2D:rt,texStorage3D:ne,texSubImage2D:K,texSubImage3D:Se,compressedTexSubImage2D:le,compressedTexSubImage3D:pe,scissor:He,viewport:Me,reset:vt}}function om(s,e,t,n){let i=cM(n);switch(t){case km:return s*e;case Om:return s*e;case Fm:return s*e*2;case If:return s*e/i.components*i.byteLength;case Lf:return s*e/i.components*i.byteLength;case Bm:return s*e*2/i.components*i.byteLength;case Df:return s*e*2/i.components*i.byteLength;case zm:return s*e*3/i.components*i.byteLength;case Xn:return s*e*4/i.components*i.byteLength;case Nf:return s*e*4/i.components*i.byteLength;case ml:case gl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case xl:case yl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case hu:case fu:return Math.max(s,16)*Math.max(e,8)/4;case cu:case uu:return Math.max(s,8)*Math.max(e,8)/2;case du:case pu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case mu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case gu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case xu:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case yu:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case vu:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case _u:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Mu:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case bu:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Su:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Tu:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case wu:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Eu:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Au:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Ru:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Cu:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case vl:case Pu:case Iu:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Hm:case Lu:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Du:case Nu:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function cM(s){switch(s){case Ci:case Dm:return{byteLength:1,components:1};case Wo:case Nm:case Rn:return{byteLength:2,components:1};case Cf:case Pf:return{byteLength:2,components:4};case ir:case Rf:case Ai:return{byteLength:4,components:1};case Um:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function hM(s,e,t,n,i,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ie,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,S){return d?new OffscreenCanvas(C,S):Xo("canvas")}function x(C,S,F){let Z=1,J=Fe(C);if((J.width>F||J.height>F)&&(Z=F/Math.max(J.width,J.height)),Z<1)if(typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&C instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&C instanceof ImageBitmap||typeof VideoFrame!="undefined"&&C instanceof VideoFrame){let K=Math.floor(Z*J.width),Se=Math.floor(Z*J.height);u===void 0&&(u=g(K,Se));let le=S?g(K,Se):u;return le.width=K,le.height=Se,le.getContext("2d").drawImage(C,0,0,K,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+K+"x"+Se+")."),le}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),C;return C}function p(C){return C.generateMipmaps&&C.minFilter!==cn&&C.minFilter!==Wn}function m(C){s.generateMipmap(C)}function y(C,S,F,Z,J=!1){if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let K=S;if(S===s.RED&&(F===s.FLOAT&&(K=s.R32F),F===s.HALF_FLOAT&&(K=s.R16F),F===s.UNSIGNED_BYTE&&(K=s.R8)),S===s.RED_INTEGER&&(F===s.UNSIGNED_BYTE&&(K=s.R8UI),F===s.UNSIGNED_SHORT&&(K=s.R16UI),F===s.UNSIGNED_INT&&(K=s.R32UI),F===s.BYTE&&(K=s.R8I),F===s.SHORT&&(K=s.R16I),F===s.INT&&(K=s.R32I)),S===s.RG&&(F===s.FLOAT&&(K=s.RG32F),F===s.HALF_FLOAT&&(K=s.RG16F),F===s.UNSIGNED_BYTE&&(K=s.RG8)),S===s.RG_INTEGER&&(F===s.UNSIGNED_BYTE&&(K=s.RG8UI),F===s.UNSIGNED_SHORT&&(K=s.RG16UI),F===s.UNSIGNED_INT&&(K=s.RG32UI),F===s.BYTE&&(K=s.RG8I),F===s.SHORT&&(K=s.RG16I),F===s.INT&&(K=s.RG32I)),S===s.RGB_INTEGER&&(F===s.UNSIGNED_BYTE&&(K=s.RGB8UI),F===s.UNSIGNED_SHORT&&(K=s.RGB16UI),F===s.UNSIGNED_INT&&(K=s.RGB32UI),F===s.BYTE&&(K=s.RGB8I),F===s.SHORT&&(K=s.RGB16I),F===s.INT&&(K=s.RGB32I)),S===s.RGBA_INTEGER&&(F===s.UNSIGNED_BYTE&&(K=s.RGBA8UI),F===s.UNSIGNED_SHORT&&(K=s.RGBA16UI),F===s.UNSIGNED_INT&&(K=s.RGBA32UI),F===s.BYTE&&(K=s.RGBA8I),F===s.SHORT&&(K=s.RGBA16I),F===s.INT&&(K=s.RGBA32I)),S===s.RGB&&F===s.UNSIGNED_INT_5_9_9_9_REV&&(K=s.RGB9_E5),S===s.RGBA){let Se=J?bl:lt.getTransfer(Z);F===s.FLOAT&&(K=s.RGBA32F),F===s.HALF_FLOAT&&(K=s.RGBA16F),F===s.UNSIGNED_BYTE&&(K=Se===Nt?s.SRGB8_ALPHA8:s.RGBA8),F===s.UNSIGNED_SHORT_4_4_4_4&&(K=s.RGBA4),F===s.UNSIGNED_SHORT_5_5_5_1&&(K=s.RGB5_A1)}return(K===s.R16F||K===s.R32F||K===s.RG16F||K===s.RG32F||K===s.RGBA16F||K===s.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function v(C,S){let F;return C?S===null||S===ir||S===Ts?F=s.DEPTH24_STENCIL8:S===Ai?F=s.DEPTH32F_STENCIL8:S===Wo&&(F=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===ir||S===Ts?F=s.DEPTH_COMPONENT24:S===Ai?F=s.DEPTH_COMPONENT32F:S===Wo&&(F=s.DEPTH_COMPONENT16),F}function b(C,S){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==cn&&C.minFilter!==Wn?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function P(C){let S=C.target;S.removeEventListener("dispose",P),E(S),S.isVideoTexture&&h.delete(S)}function R(C){let S=C.target;S.removeEventListener("dispose",R),z(S)}function E(C){let S=n.get(C);if(S.__webglInit===void 0)return;let F=C.source,Z=f.get(F);if(Z){let J=Z[S.__cacheKey];J.usedTimes--,J.usedTimes===0&&I(C),Object.keys(Z).length===0&&f.delete(F)}n.remove(C)}function I(C){let S=n.get(C);s.deleteTexture(S.__webglTexture);let F=C.source,Z=f.get(F);delete Z[S.__cacheKey],o.memory.textures--}function z(C){let S=n.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(S.__webglFramebuffer[Z]))for(let J=0;J<S.__webglFramebuffer[Z].length;J++)s.deleteFramebuffer(S.__webglFramebuffer[Z][J]);else s.deleteFramebuffer(S.__webglFramebuffer[Z]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[Z])}else{if(Array.isArray(S.__webglFramebuffer))for(let Z=0;Z<S.__webglFramebuffer.length;Z++)s.deleteFramebuffer(S.__webglFramebuffer[Z]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Z=0;Z<S.__webglColorRenderbuffer.length;Z++)S.__webglColorRenderbuffer[Z]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[Z]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let F=C.textures;for(let Z=0,J=F.length;Z<J;Z++){let K=n.get(F[Z]);K.__webglTexture&&(s.deleteTexture(K.__webglTexture),o.memory.textures--),n.remove(F[Z])}n.remove(C)}let _=0;function T(){_=0}function k(){let C=_;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),_+=1,C}function O(C){let S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function G(C,S){let F=n.get(C);if(C.isVideoTexture&&Oe(C),C.isRenderTargetTexture===!1&&C.version>0&&F.__version!==C.version){let Z=C.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ot(F,C,S);return}}t.bindTexture(s.TEXTURE_2D,F.__webglTexture,s.TEXTURE0+S)}function j(C,S){let F=n.get(C);if(C.version>0&&F.__version!==C.version){ot(F,C,S);return}t.bindTexture(s.TEXTURE_2D_ARRAY,F.__webglTexture,s.TEXTURE0+S)}function H(C,S){let F=n.get(C);if(C.version>0&&F.__version!==C.version){ot(F,C,S);return}t.bindTexture(s.TEXTURE_3D,F.__webglTexture,s.TEXTURE0+S)}function ee(C,S){let F=n.get(C);if(C.version>0&&F.__version!==C.version){q(F,C,S);return}t.bindTexture(s.TEXTURE_CUBE_MAP,F.__webglTexture,s.TEXTURE0+S)}let W={[xn]:s.REPEAT,[ts]:s.CLAMP_TO_EDGE,[Go]:s.MIRRORED_REPEAT},Y={[cn]:s.NEAREST,[Af]:s.NEAREST_MIPMAP_NEAREST,[Or]:s.NEAREST_MIPMAP_LINEAR,[Wn]:s.LINEAR,[zo]:s.LINEAR_MIPMAP_NEAREST,[Oi]:s.LINEAR_MIPMAP_LINEAR},te={[Jg]:s.NEVER,[sx]:s.ALWAYS,[Qg]:s.LESS,[Gm]:s.LEQUAL,[ex]:s.EQUAL,[ix]:s.GEQUAL,[tx]:s.GREATER,[nx]:s.NOTEQUAL};function se(C,S){if(S.type===Ai&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Wn||S.magFilter===zo||S.magFilter===Or||S.magFilter===Oi||S.minFilter===Wn||S.minFilter===zo||S.minFilter===Or||S.minFilter===Oi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,W[S.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,W[S.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,W[S.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,Y[S.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,Y[S.minFilter]),S.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,te[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===cn||S.minFilter!==Or&&S.minFilter!==Oi||S.type===Ai&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let F=e.get("EXT_texture_filter_anisotropic");s.texParameterf(C,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Xe(C,S){let F=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",P));let Z=S.source,J=f.get(Z);J===void 0&&(J={},f.set(Z,J));let K=O(S);if(K!==C.__cacheKey){J[K]===void 0&&(J[K]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,F=!0),J[K].usedTimes++;let Se=J[C.__cacheKey];Se!==void 0&&(J[C.__cacheKey].usedTimes--,Se.usedTimes===0&&I(S)),C.__cacheKey=K,C.__webglTexture=J[K].texture}return F}function ot(C,S,F){let Z=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Z=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Z=s.TEXTURE_3D);let J=Xe(C,S),K=S.source;t.bindTexture(Z,C.__webglTexture,s.TEXTURE0+F);let Se=n.get(K);if(K.version!==Se.__version||J===!0){t.activeTexture(s.TEXTURE0+F);let le=lt.getPrimaries(lt.workingColorSpace),pe=S.colorSpace===zi?null:lt.getPrimaries(S.colorSpace),rt=S.colorSpace===zi||le===pe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);let ne=x(S.image,!1,i.maxTextureSize);ne=Rt(S,ne);let me=r.convert(S.format,S.colorSpace),Be=r.convert(S.type),He=y(S.internalFormat,me,Be,S.colorSpace,S.isVideoTexture);se(Z,S);let Me,pt=S.mipmaps,Ye=S.isVideoTexture!==!0,vt=Se.__version===void 0||J===!0,D=K.dataReady,he=b(S,ne);if(S.isDepthTexture)He=v(S.format===ws,S.type),vt&&(Ye?t.texStorage2D(s.TEXTURE_2D,1,He,ne.width,ne.height):t.texImage2D(s.TEXTURE_2D,0,He,ne.width,ne.height,0,me,Be,null));else if(S.isDataTexture)if(pt.length>0){Ye&&vt&&t.texStorage2D(s.TEXTURE_2D,he,He,pt[0].width,pt[0].height);for(let X=0,$=pt.length;X<$;X++)Me=pt[X],Ye?D&&t.texSubImage2D(s.TEXTURE_2D,X,0,0,Me.width,Me.height,me,Be,Me.data):t.texImage2D(s.TEXTURE_2D,X,He,Me.width,Me.height,0,me,Be,Me.data);S.generateMipmaps=!1}else Ye?(vt&&t.texStorage2D(s.TEXTURE_2D,he,He,ne.width,ne.height),D&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ne.width,ne.height,me,Be,ne.data)):t.texImage2D(s.TEXTURE_2D,0,He,ne.width,ne.height,0,me,Be,ne.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ye&&vt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,he,He,pt[0].width,pt[0].height,ne.depth);for(let X=0,$=pt.length;X<$;X++)if(Me=pt[X],S.format!==Xn)if(me!==null)if(Ye){if(D)if(S.layerUpdates.size>0){let ge=om(Me.width,Me.height,S.format,S.type);for(let _e of S.layerUpdates){let xt=Me.data.subarray(_e*ge/Me.data.BYTES_PER_ELEMENT,(_e+1)*ge/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,X,0,0,_e,Me.width,Me.height,1,me,xt,0,0)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,X,0,0,0,Me.width,Me.height,ne.depth,me,Me.data,0,0)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,X,He,Me.width,Me.height,ne.depth,0,Me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ye?D&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,X,0,0,0,Me.width,Me.height,ne.depth,me,Be,Me.data):t.texImage3D(s.TEXTURE_2D_ARRAY,X,He,Me.width,Me.height,ne.depth,0,me,Be,Me.data)}else{Ye&&vt&&t.texStorage2D(s.TEXTURE_2D,he,He,pt[0].width,pt[0].height);for(let X=0,$=pt.length;X<$;X++)Me=pt[X],S.format!==Xn?me!==null?Ye?D&&t.compressedTexSubImage2D(s.TEXTURE_2D,X,0,0,Me.width,Me.height,me,Me.data):t.compressedTexImage2D(s.TEXTURE_2D,X,He,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?D&&t.texSubImage2D(s.TEXTURE_2D,X,0,0,Me.width,Me.height,me,Be,Me.data):t.texImage2D(s.TEXTURE_2D,X,He,Me.width,Me.height,0,me,Be,Me.data)}else if(S.isDataArrayTexture)if(Ye){if(vt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,he,He,ne.width,ne.height,ne.depth),D)if(S.layerUpdates.size>0){let X=om(ne.width,ne.height,S.format,S.type);for(let $ of S.layerUpdates){let ge=ne.data.subarray($*X/ne.data.BYTES_PER_ELEMENT,($+1)*X/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,$,ne.width,ne.height,1,me,Be,ge)}S.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,me,Be,ne.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,He,ne.width,ne.height,ne.depth,0,me,Be,ne.data);else if(S.isData3DTexture)Ye?(vt&&t.texStorage3D(s.TEXTURE_3D,he,He,ne.width,ne.height,ne.depth),D&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,me,Be,ne.data)):t.texImage3D(s.TEXTURE_3D,0,He,ne.width,ne.height,ne.depth,0,me,Be,ne.data);else if(S.isFramebufferTexture){if(vt)if(Ye)t.texStorage2D(s.TEXTURE_2D,he,He,ne.width,ne.height);else{let X=ne.width,$=ne.height;for(let ge=0;ge<he;ge++)t.texImage2D(s.TEXTURE_2D,ge,He,X,$,0,me,Be,null),X>>=1,$>>=1}}else if(pt.length>0){if(Ye&&vt){let X=Fe(pt[0]);t.texStorage2D(s.TEXTURE_2D,he,He,X.width,X.height)}for(let X=0,$=pt.length;X<$;X++)Me=pt[X],Ye?D&&t.texSubImage2D(s.TEXTURE_2D,X,0,0,me,Be,Me):t.texImage2D(s.TEXTURE_2D,X,He,me,Be,Me);S.generateMipmaps=!1}else if(Ye){if(vt){let X=Fe(ne);t.texStorage2D(s.TEXTURE_2D,he,He,X.width,X.height)}D&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,me,Be,ne)}else t.texImage2D(s.TEXTURE_2D,0,He,me,Be,ne);p(S)&&m(Z),Se.__version=K.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function q(C,S,F){if(S.image.length!==6)return;let Z=Xe(C,S),J=S.source;t.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+F);let K=n.get(J);if(J.version!==K.__version||Z===!0){t.activeTexture(s.TEXTURE0+F);let Se=lt.getPrimaries(lt.workingColorSpace),le=S.colorSpace===zi?null:lt.getPrimaries(S.colorSpace),pe=S.colorSpace===zi||Se===le?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);let rt=S.isCompressedTexture||S.image[0].isCompressedTexture,ne=S.image[0]&&S.image[0].isDataTexture,me=[];for(let $=0;$<6;$++)!rt&&!ne?me[$]=x(S.image[$],!0,i.maxCubemapSize):me[$]=ne?S.image[$].image:S.image[$],me[$]=Rt(S,me[$]);let Be=me[0],He=r.convert(S.format,S.colorSpace),Me=r.convert(S.type),pt=y(S.internalFormat,He,Me,S.colorSpace),Ye=S.isVideoTexture!==!0,vt=K.__version===void 0||Z===!0,D=J.dataReady,he=b(S,Be);se(s.TEXTURE_CUBE_MAP,S);let X;if(rt){Ye&&vt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,he,pt,Be.width,Be.height);for(let $=0;$<6;$++){X=me[$].mipmaps;for(let ge=0;ge<X.length;ge++){let _e=X[ge];S.format!==Xn?He!==null?Ye?D&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ge,0,0,_e.width,_e.height,He,_e.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ge,pt,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ye?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ge,0,0,_e.width,_e.height,He,Me,_e.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ge,pt,_e.width,_e.height,0,He,Me,_e.data)}}}else{if(X=S.mipmaps,Ye&&vt){X.length>0&&he++;let $=Fe(me[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,he,pt,$.width,$.height)}for(let $=0;$<6;$++)if(ne){Ye?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,me[$].width,me[$].height,He,Me,me[$].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,pt,me[$].width,me[$].height,0,He,Me,me[$].data);for(let ge=0;ge<X.length;ge++){let xt=X[ge].image[$].image;Ye?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ge+1,0,0,xt.width,xt.height,He,Me,xt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ge+1,pt,xt.width,xt.height,0,He,Me,xt.data)}}else{Ye?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,He,Me,me[$]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,pt,He,Me,me[$]);for(let ge=0;ge<X.length;ge++){let _e=X[ge];Ye?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ge+1,0,0,He,Me,_e.image[$]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ge+1,pt,He,Me,_e.image[$])}}}p(S)&&m(s.TEXTURE_CUBE_MAP),K.__version=J.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function Q(C,S,F,Z,J,K){let Se=r.convert(F.format,F.colorSpace),le=r.convert(F.type),pe=y(F.internalFormat,Se,le,F.colorSpace);if(!n.get(S).__hasExternalTextures){let ne=Math.max(1,S.width>>K),me=Math.max(1,S.height>>K);J===s.TEXTURE_3D||J===s.TEXTURE_2D_ARRAY?t.texImage3D(J,K,pe,ne,me,S.depth,0,Se,le,null):t.texImage2D(J,K,pe,ne,me,0,Se,le,null)}t.bindFramebuffer(s.FRAMEBUFFER,C),dt(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Z,J,n.get(F).__webglTexture,0,st(S)):(J===s.TEXTURE_2D||J>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Z,J,n.get(F).__webglTexture,K),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ve(C,S,F){if(s.bindRenderbuffer(s.RENDERBUFFER,C),S.depthBuffer){let Z=S.depthTexture,J=Z&&Z.isDepthTexture?Z.type:null,K=v(S.stencilBuffer,J),Se=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,le=st(S);dt(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,le,K,S.width,S.height):F?s.renderbufferStorageMultisample(s.RENDERBUFFER,le,K,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,K,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Se,s.RENDERBUFFER,C)}else{let Z=S.textures;for(let J=0;J<Z.length;J++){let K=Z[J],Se=r.convert(K.format,K.colorSpace),le=r.convert(K.type),pe=y(K.internalFormat,Se,le,K.colorSpace),rt=st(S);F&&dt(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,rt,pe,S.width,S.height):dt(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,rt,pe,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,pe,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ae(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),G(S.depthTexture,0);let Z=n.get(S.depthTexture).__webglTexture,J=st(S);if(S.depthTexture.format===Vr)dt(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0);else if(S.depthTexture.format===ws)dt(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function ke(C){let S=n.get(C),F=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){let Z=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Z){let J=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Z.removeEventListener("dispose",J)};Z.addEventListener("dispose",J),S.__depthDisposeCallback=J}S.__boundDepthTexture=Z}if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");ae(S.__webglFramebuffer,C)}else if(F){S.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[Z]),S.__webglDepthbuffer[Z]===void 0)S.__webglDepthbuffer[Z]=s.createRenderbuffer(),ve(S.__webglDepthbuffer[Z],C,!1);else{let J=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,K=S.__webglDepthbuffer[Z];s.bindRenderbuffer(s.RENDERBUFFER,K),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,K)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),ve(S.__webglDepthbuffer,C,!1);else{let Z=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,J=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,J),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,J)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ie(C,S,F){let Z=n.get(C);S!==void 0&&Q(Z.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),F!==void 0&&ke(C)}function Ze(C){let S=C.texture,F=n.get(C),Z=n.get(S);C.addEventListener("dispose",R);let J=C.textures,K=C.isWebGLCubeRenderTarget===!0,Se=J.length>1;if(Se||(Z.__webglTexture===void 0&&(Z.__webglTexture=s.createTexture()),Z.__version=S.version,o.memory.textures++),K){F.__webglFramebuffer=[];for(let le=0;le<6;le++)if(S.mipmaps&&S.mipmaps.length>0){F.__webglFramebuffer[le]=[];for(let pe=0;pe<S.mipmaps.length;pe++)F.__webglFramebuffer[le][pe]=s.createFramebuffer()}else F.__webglFramebuffer[le]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){F.__webglFramebuffer=[];for(let le=0;le<S.mipmaps.length;le++)F.__webglFramebuffer[le]=s.createFramebuffer()}else F.__webglFramebuffer=s.createFramebuffer();if(Se)for(let le=0,pe=J.length;le<pe;le++){let rt=n.get(J[le]);rt.__webglTexture===void 0&&(rt.__webglTexture=s.createTexture(),o.memory.textures++)}if(C.samples>0&&dt(C)===!1){F.__webglMultisampledFramebuffer=s.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let le=0;le<J.length;le++){let pe=J[le];F.__webglColorRenderbuffer[le]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,F.__webglColorRenderbuffer[le]);let rt=r.convert(pe.format,pe.colorSpace),ne=r.convert(pe.type),me=y(pe.internalFormat,rt,ne,pe.colorSpace,C.isXRRenderTarget===!0),Be=st(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,Be,me,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+le,s.RENDERBUFFER,F.__webglColorRenderbuffer[le])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(F.__webglDepthRenderbuffer=s.createRenderbuffer(),ve(F.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(K){t.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture),se(s.TEXTURE_CUBE_MAP,S);for(let le=0;le<6;le++)if(S.mipmaps&&S.mipmaps.length>0)for(let pe=0;pe<S.mipmaps.length;pe++)Q(F.__webglFramebuffer[le][pe],C,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+le,pe);else Q(F.__webglFramebuffer[le],C,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);p(S)&&m(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let le=0,pe=J.length;le<pe;le++){let rt=J[le],ne=n.get(rt);t.bindTexture(s.TEXTURE_2D,ne.__webglTexture),se(s.TEXTURE_2D,rt),Q(F.__webglFramebuffer,C,rt,s.COLOR_ATTACHMENT0+le,s.TEXTURE_2D,0),p(rt)&&m(s.TEXTURE_2D)}t.unbindTexture()}else{let le=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(le=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(le,Z.__webglTexture),se(le,S),S.mipmaps&&S.mipmaps.length>0)for(let pe=0;pe<S.mipmaps.length;pe++)Q(F.__webglFramebuffer[pe],C,S,s.COLOR_ATTACHMENT0,le,pe);else Q(F.__webglFramebuffer,C,S,s.COLOR_ATTACHMENT0,le,0);p(S)&&m(le),t.unbindTexture()}C.depthBuffer&&ke(C)}function Mt(C){let S=C.textures;for(let F=0,Z=S.length;F<Z;F++){let J=S[F];if(p(J)){let K=C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Se=n.get(J).__webglTexture;t.bindTexture(K,Se),m(K),t.unbindTexture()}}}let at=[],L=[];function _n(C){if(C.samples>0){if(dt(C)===!1){let S=C.textures,F=C.width,Z=C.height,J=s.COLOR_BUFFER_BIT,K=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Se=n.get(C),le=S.length>1;if(le)for(let pe=0;pe<S.length;pe++)t.bindFramebuffer(s.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Se.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+pe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let pe=0;pe<S.length;pe++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(J|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(J|=s.STENCIL_BUFFER_BIT)),le){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Se.__webglColorRenderbuffer[pe]);let rt=n.get(S[pe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,rt,0)}s.blitFramebuffer(0,0,F,Z,0,0,F,Z,J,s.NEAREST),l===!0&&(at.length=0,L.length=0,at.push(s.COLOR_ATTACHMENT0+pe),C.depthBuffer&&C.resolveDepthBuffer===!1&&(at.push(K),L.push(K),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,L)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,at))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),le)for(let pe=0;pe<S.length;pe++){t.bindFramebuffer(s.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pe,s.RENDERBUFFER,Se.__webglColorRenderbuffer[pe]);let rt=n.get(S[pe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Se.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+pe,s.TEXTURE_2D,rt,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let S=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function st(C){return Math.min(i.maxSamples,C.samples)}function dt(C){let S=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Oe(C){let S=o.render.frame;h.get(C)!==S&&(h.set(C,S),C.update())}function Rt(C,S){let F=C.colorSpace,Z=C.format,J=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||F!==sn&&F!==zi&&(lt.getTransfer(F)===Nt?(Z!==Xn||J!==Ci)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),S}function Fe(C){return typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame!="undefined"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=T,this.setTexture2D=G,this.setTexture2DArray=j,this.setTexture3D=H,this.setTextureCube=ee,this.rebindTextures=Ie,this.setupRenderTarget=Ze,this.updateRenderTargetMipmap=Mt,this.updateMultisampleRenderTarget=_n,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=dt}function uM(s,e){function t(n,i=zi){let r,o=lt.getTransfer(i);if(n===Ci)return s.UNSIGNED_BYTE;if(n===Cf)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Pf)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Um)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Dm)return s.BYTE;if(n===Nm)return s.SHORT;if(n===Wo)return s.UNSIGNED_SHORT;if(n===Rf)return s.INT;if(n===ir)return s.UNSIGNED_INT;if(n===Ai)return s.FLOAT;if(n===Rn)return s.HALF_FLOAT;if(n===km)return s.ALPHA;if(n===zm)return s.RGB;if(n===Xn)return s.RGBA;if(n===Om)return s.LUMINANCE;if(n===Fm)return s.LUMINANCE_ALPHA;if(n===Vr)return s.DEPTH_COMPONENT;if(n===ws)return s.DEPTH_STENCIL;if(n===If)return s.RED;if(n===Lf)return s.RED_INTEGER;if(n===Bm)return s.RG;if(n===Df)return s.RG_INTEGER;if(n===Nf)return s.RGBA_INTEGER;if(n===ml||n===gl||n===xl||n===yl)if(o===Nt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ml)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===gl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===xl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===yl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ml)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===gl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===xl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===yl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===cu||n===hu||n===uu||n===fu)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===cu)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===hu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===uu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===fu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===du||n===pu||n===mu)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===du||n===pu)return o===Nt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===mu)return o===Nt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===gu||n===xu||n===yu||n===vu||n===_u||n===Mu||n===bu||n===Su||n===Tu||n===wu||n===Eu||n===Au||n===Ru||n===Cu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===gu)return o===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===xu)return o===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===yu)return o===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===vu)return o===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===_u)return o===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Mu)return o===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===bu)return o===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Su)return o===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Tu)return o===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===wu)return o===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Eu)return o===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Au)return o===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ru)return o===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Cu)return o===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===vl||n===Pu||n===Iu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===vl)return o===Nt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Pu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Iu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Hm||n===Lu||n===Du||n===Nu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===vl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Lu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Du)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Nu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ts?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var Zu=class extends ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},kt=class extends yt{constructor(){super(),this.isGroup=!0,this.type="Group"}},fM={type:"move"},Bo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new kt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new kt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new kt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let p=t.getJointPose(x,n),m=this._getHandJoint(c,x);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(fM)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new kt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},dM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,pM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,$u=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let i=new yn,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Ht({vertexShader:dM,fragmentShader:pM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ye(new Jt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ju=class extends ss{constructor(e,t){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null,x=new $u,p=t.getContextAttributes(),m=null,y=null,v=[],b=[],P=new ie,R=null,E=new ln;E.layers.enable(1),E.viewport=new St;let I=new ln;I.layers.enable(2),I.viewport=new St;let z=[E,I],_=new Zu;_.layers.enable(1),_.layers.enable(2);let T=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Q=v[q];return Q===void 0&&(Q=new Bo,v[q]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(q){let Q=v[q];return Q===void 0&&(Q=new Bo,v[q]=Q),Q.getGripSpace()},this.getHand=function(q){let Q=v[q];return Q===void 0&&(Q=new Bo,v[q]=Q),Q.getHandSpace()};function O(q){let Q=b.indexOf(q.inputSource);if(Q===-1)return;let ve=v[Q];ve!==void 0&&(ve.update(q.inputSource,q.frame,c||o),ve.dispatchEvent({type:q.type,data:q.inputSource}))}function G(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",j);for(let q=0;q<v.length;q++){let Q=b[q];Q!==null&&(b[q]=null,v[q].disconnect(Q))}T=null,k=null,x.reset(),e.setRenderTarget(m),d=null,f=null,u=null,i=null,y=null,ot.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",G),i.addEventListener("inputsourceschange",j),p.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(P),i.renderState.layers===void 0){let Q={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,Q),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new nn(d.framebufferWidth,d.framebufferHeight,{format:Xn,type:Ci,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let Q=null,ve=null,ae=null;p.depth&&(ae=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Q=p.stencil?ws:Vr,ve=p.stencil?Ts:ir);let ke={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:r};u=new XRWebGLBinding(i,t),f=u.createProjectionLayer(ke),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new nn(f.textureWidth,f.textureHeight,{format:Xn,type:Ci,depthTexture:new As(f.textureWidth,f.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),ot.setContext(i),ot.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function j(q){for(let Q=0;Q<q.removed.length;Q++){let ve=q.removed[Q],ae=b.indexOf(ve);ae>=0&&(b[ae]=null,v[ae].disconnect(ve))}for(let Q=0;Q<q.added.length;Q++){let ve=q.added[Q],ae=b.indexOf(ve);if(ae===-1){for(let Ie=0;Ie<v.length;Ie++)if(Ie>=b.length){b.push(ve),ae=Ie;break}else if(b[Ie]===null){b[Ie]=ve,ae=Ie;break}if(ae===-1)break}let ke=v[ae];ke&&ke.connect(ve)}}let H=new A,ee=new A;function W(q,Q,ve){H.setFromMatrixPosition(Q.matrixWorld),ee.setFromMatrixPosition(ve.matrixWorld);let ae=H.distanceTo(ee),ke=Q.projectionMatrix.elements,Ie=ve.projectionMatrix.elements,Ze=ke[14]/(ke[10]-1),Mt=ke[14]/(ke[10]+1),at=(ke[9]+1)/ke[5],L=(ke[9]-1)/ke[5],_n=(ke[8]-1)/ke[0],st=(Ie[8]+1)/Ie[0],dt=Ze*_n,Oe=Ze*st,Rt=ae/(-_n+st),Fe=Rt*-_n;if(Q.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Fe),q.translateZ(Rt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),ke[10]===-1)q.projectionMatrix.copy(Q.projectionMatrix),q.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let C=Ze+Rt,S=Mt+Rt,F=dt-Fe,Z=Oe+(ae-Fe),J=at*Mt/S*C,K=L*Mt/S*C;q.projectionMatrix.makePerspective(F,Z,J,K,C,S),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function Y(q,Q){Q===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Q.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let Q=q.near,ve=q.far;x.texture!==null&&(x.depthNear>0&&(Q=x.depthNear),x.depthFar>0&&(ve=x.depthFar)),_.near=I.near=E.near=Q,_.far=I.far=E.far=ve,(T!==_.near||k!==_.far)&&(i.updateRenderState({depthNear:_.near,depthFar:_.far}),T=_.near,k=_.far);let ae=q.parent,ke=_.cameras;Y(_,ae);for(let Ie=0;Ie<ke.length;Ie++)Y(ke[Ie],ae);ke.length===2?W(_,E,I):_.projectionMatrix.copy(E.projectionMatrix),te(q,_,ae)};function te(q,Q,ve){ve===null?q.matrix.copy(Q.matrixWorld):(q.matrix.copy(ve.matrixWorld),q.matrix.invert(),q.matrix.multiply(Q.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(Q.projectionMatrix),q.projectionMatrixInverse.copy(Q.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=$r*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(_)};let se=null;function Xe(q,Q){if(h=Q.getViewerPose(c||o),g=Q,h!==null){let ve=h.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let ae=!1;ve.length!==_.cameras.length&&(_.cameras.length=0,ae=!0);for(let Ie=0;Ie<ve.length;Ie++){let Ze=ve[Ie],Mt=null;if(d!==null)Mt=d.getViewport(Ze);else{let L=u.getViewSubImage(f,Ze);Mt=L.viewport,Ie===0&&(e.setRenderTargetTextures(y,L.colorTexture,f.ignoreDepthValues?void 0:L.depthStencilTexture),e.setRenderTarget(y))}let at=z[Ie];at===void 0&&(at=new ln,at.layers.enable(Ie),at.viewport=new St,z[Ie]=at),at.matrix.fromArray(Ze.transform.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale),at.projectionMatrix.fromArray(Ze.projectionMatrix),at.projectionMatrixInverse.copy(at.projectionMatrix).invert(),at.viewport.set(Mt.x,Mt.y,Mt.width,Mt.height),Ie===0&&(_.matrix.copy(at.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),ae===!0&&_.cameras.push(at)}let ke=i.enabledFeatures;if(ke&&ke.includes("depth-sensing")){let Ie=u.getDepthInformation(ve[0]);Ie&&Ie.isValid&&Ie.texture&&x.init(e,Ie,i.renderState)}}for(let ve=0;ve<v.length;ve++){let ae=b[ve],ke=v[ve];ae!==null&&ke!==void 0&&ke.update(ae,Q,c||o)}se&&se(q,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}let ot=new Ym;ot.setAnimationLoop(Xe),this.setAnimationLoop=function(q){se=q},this.dispose=function(){}}},er=new hi,mM=new Ne;function gM(s,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,qm(s)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,y,v,b){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,b)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),x(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,y,v):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===mn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===mn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let y=e.get(m),v=y.envMap,b=y.envMapRotation;v&&(p.envMap.value=v,er.copy(b),er.x*=-1,er.y*=-1,er.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(er.y*=-1,er.z*=-1),p.envMapRotation.value.setFromMatrix4(mM.makeRotationFromEuler(er)),p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,y,v){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*y,p.scale.value=v*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,y){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===mn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function x(p,m){let y=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function xM(s,e,t,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,v){let b=v.program;n.uniformBlockBinding(y,b)}function c(y,v){let b=i[y.id];b===void 0&&(g(y),b=h(y),i[y.id]=b,y.addEventListener("dispose",p));let P=v.program;n.updateUBOMapping(y,P);let R=e.render.frame;r[y.id]!==R&&(f(y),r[y.id]=R)}function h(y){let v=u();y.__bindingPointIndex=v;let b=s.createBuffer(),P=y.__size,R=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,P,R),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,b),b}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){let v=i[y.id],b=y.uniforms,P=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let R=0,E=b.length;R<E;R++){let I=Array.isArray(b[R])?b[R]:[b[R]];for(let z=0,_=I.length;z<_;z++){let T=I[z];if(d(T,R,z,P)===!0){let k=T.__offset,O=Array.isArray(T.value)?T.value:[T.value],G=0;for(let j=0;j<O.length;j++){let H=O[j],ee=x(H);typeof H=="number"||typeof H=="boolean"?(T.__data[0]=H,s.bufferSubData(s.UNIFORM_BUFFER,k+G,T.__data)):H.isMatrix3?(T.__data[0]=H.elements[0],T.__data[1]=H.elements[1],T.__data[2]=H.elements[2],T.__data[3]=0,T.__data[4]=H.elements[3],T.__data[5]=H.elements[4],T.__data[6]=H.elements[5],T.__data[7]=0,T.__data[8]=H.elements[6],T.__data[9]=H.elements[7],T.__data[10]=H.elements[8],T.__data[11]=0):(H.toArray(T.__data,G),G+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,k,T.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(y,v,b,P){let R=y.value,E=v+"_"+b;if(P[E]===void 0)return typeof R=="number"||typeof R=="boolean"?P[E]=R:P[E]=R.clone(),!0;{let I=P[E];if(typeof R=="number"||typeof R=="boolean"){if(I!==R)return P[E]=R,!0}else if(I.equals(R)===!1)return I.copy(R),!0}return!1}function g(y){let v=y.uniforms,b=0,P=16;for(let E=0,I=v.length;E<I;E++){let z=Array.isArray(v[E])?v[E]:[v[E]];for(let _=0,T=z.length;_<T;_++){let k=z[_],O=Array.isArray(k.value)?k.value:[k.value];for(let G=0,j=O.length;G<j;G++){let H=O[G],ee=x(H),W=b%P,Y=W%ee.boundary,te=W+Y;b+=Y,te!==0&&P-te<ee.storage&&(b+=P-te),k.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=b,b+=ee.storage}}}let R=b%P;return R>0&&(b+=P-R),y.__size=b,y.__cache={},this}function x(y){let v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function p(y){let v=y.target;v.removeEventListener("dispose",p);let b=o.indexOf(v.__bindingPointIndex);o.splice(b,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function m(){for(let y in i)s.deleteBuffer(i[y]);o=[],i={},r={}}return{bind:l,update:c,dispose:m}}var Dl=class{constructor(e={}){let{canvas:t=Mx(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let d=new Uint32Array(4),g=new Int32Array(4),x=null,p=null,m=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Lt,this.toneMapping=Ss,this.toneMappingExposure=1;let v=this,b=!1,P=0,R=0,E=null,I=-1,z=null,_=new St,T=new St,k=null,O=new fe(0),G=0,j=t.width,H=t.height,ee=1,W=null,Y=null,te=new St(0,0,j,H),se=new St(0,0,j,H),Xe=!1,ot=new qo,q=!1,Q=!1,ve=new Ne,ae=new Ne,ke=new A,Ie=new St,Ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Mt=!1;function at(){return E===null?ee:1}let L=n;function _n(w,N){return t.getContext(w,N)}try{let w={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r169"),t.addEventListener("webglcontextlost",$,!1),t.addEventListener("webglcontextrestored",ge,!1),t.addEventListener("webglcontextcreationerror",_e,!1),L===null){let N="webgl2";if(L=_n(N,w),L===null)throw _n(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let st,dt,Oe,Rt,Fe,C,S,F,Z,J,K,Se,le,pe,rt,ne,me,Be,He,Me,pt,Ye,vt,D;function he(){st=new D1(L),st.init(),Ye=new uM(L,st),dt=new A1(L,st,e,Ye),Oe=new lM(L),dt.reverseDepthBuffer&&Oe.buffers.depth.setReversed(!0),Rt=new k1(L),Fe=new Z_,C=new hM(L,st,Oe,Fe,dt,Ye,Rt),S=new C1(v),F=new L1(v),Z=new Gx(L),vt=new w1(L,Z),J=new N1(L,Z,Rt,vt),K=new O1(L,J,Z,Rt),He=new z1(L,dt,C),ne=new R1(Fe),Se=new K_(v,S,F,st,dt,vt,ne),le=new gM(v,Fe),pe=new j_,rt=new iM(st),Be=new T1(v,S,F,Oe,K,f,l),me=new oM(v,K,dt),D=new xM(L,Rt,dt,Oe),Me=new E1(L,st,Rt),pt=new U1(L,st,Rt),Rt.programs=Se.programs,v.capabilities=dt,v.extensions=st,v.properties=Fe,v.renderLists=pe,v.shadowMap=me,v.state=Oe,v.info=Rt}he();let X=new ju(v,L);this.xr=X,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let w=st.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=st.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(w){w!==void 0&&(ee=w,this.setSize(j,H,!1))},this.getSize=function(w){return w.set(j,H)},this.setSize=function(w,N,B=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=w,H=N,t.width=Math.floor(w*ee),t.height=Math.floor(N*ee),B===!0&&(t.style.width=w+"px",t.style.height=N+"px"),this.setViewport(0,0,w,N)},this.getDrawingBufferSize=function(w){return w.set(j*ee,H*ee).floor()},this.setDrawingBufferSize=function(w,N,B){j=w,H=N,ee=B,t.width=Math.floor(w*B),t.height=Math.floor(N*B),this.setViewport(0,0,w,N)},this.getCurrentViewport=function(w){return w.copy(_)},this.getViewport=function(w){return w.copy(te)},this.setViewport=function(w,N,B,V){w.isVector4?te.set(w.x,w.y,w.z,w.w):te.set(w,N,B,V),Oe.viewport(_.copy(te).multiplyScalar(ee).round())},this.getScissor=function(w){return w.copy(se)},this.setScissor=function(w,N,B,V){w.isVector4?se.set(w.x,w.y,w.z,w.w):se.set(w,N,B,V),Oe.scissor(T.copy(se).multiplyScalar(ee).round())},this.getScissorTest=function(){return Xe},this.setScissorTest=function(w){Oe.setScissorTest(Xe=w)},this.setOpaqueSort=function(w){W=w},this.setTransparentSort=function(w){Y=w},this.getClearColor=function(w){return w.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor.apply(Be,arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha.apply(Be,arguments)},this.clear=function(w=!0,N=!0,B=!0){let V=0;if(w){let U=!1;if(E!==null){let re=E.texture.format;U=re===Nf||re===Df||re===Lf}if(U){let re=E.texture.type,xe=re===Ci||re===ir||re===Wo||re===Ts||re===Cf||re===Pf,be=Be.getClearColor(),Te=Be.getClearAlpha(),Ve=be.r,qe=be.g,Ee=be.b;xe?(d[0]=Ve,d[1]=qe,d[2]=Ee,d[3]=Te,L.clearBufferuiv(L.COLOR,0,d)):(g[0]=Ve,g[1]=qe,g[2]=Ee,g[3]=Te,L.clearBufferiv(L.COLOR,0,g))}else V|=L.COLOR_BUFFER_BIT}N&&(V|=L.DEPTH_BUFFER_BIT,L.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),B&&(V|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",$,!1),t.removeEventListener("webglcontextrestored",ge,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),pe.dispose(),rt.dispose(),Fe.dispose(),S.dispose(),F.dispose(),K.dispose(),vt.dispose(),D.dispose(),Se.dispose(),X.dispose(),X.removeEventListener("sessionstart",op),X.removeEventListener("sessionend",ap),Ks.stop()};function $(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function ge(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;let w=Rt.autoReset,N=me.enabled,B=me.autoUpdate,V=me.needsUpdate,U=me.type;he(),Rt.autoReset=w,me.enabled=N,me.autoUpdate=B,me.needsUpdate=V,me.type=U}function _e(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function xt(w){let N=w.target;N.removeEventListener("dispose",xt),en(N)}function en(w){Vn(w),Fe.remove(w)}function Vn(w){let N=Fe.get(w).programs;N!==void 0&&(N.forEach(function(B){Se.releaseProgram(B)}),w.isShaderMaterial&&Se.releaseShaderCache(w))}this.renderBufferDirect=function(w,N,B,V,U,re){N===null&&(N=Ze);let xe=U.isMesh&&U.matrixWorld.determinant()<0,be=bg(w,N,B,V,U);Oe.setMaterial(V,xe);let Te=B.index,Ve=1;if(V.wireframe===!0){if(Te=J.getWireframeAttribute(B),Te===void 0)return;Ve=2}let qe=B.drawRange,Ee=B.attributes.position,Ct=qe.start*Ve,Bt=(qe.start+qe.count)*Ve;re!==null&&(Ct=Math.max(Ct,re.start*Ve),Bt=Math.min(Bt,(re.start+re.count)*Ve)),Te!==null?(Ct=Math.max(Ct,0),Bt=Math.min(Bt,Te.count)):Ee!=null&&(Ct=Math.max(Ct,0),Bt=Math.min(Bt,Ee.count));let Kt=Bt-Ct;if(Kt<0||Kt===1/0)return;vt.setup(U,V,be,B,Te);let Qn,wt=Me;if(Te!==null&&(Qn=Z.get(Te),wt=pt,wt.setIndex(Qn)),U.isMesh)V.wireframe===!0?(Oe.setLineWidth(V.wireframeLinewidth*at()),wt.setMode(L.LINES)):wt.setMode(L.TRIANGLES);else if(U.isLine){let Le=V.linewidth;Le===void 0&&(Le=1),Oe.setLineWidth(Le*at()),U.isLineSegments?wt.setMode(L.LINES):U.isLineLoop?wt.setMode(L.LINE_LOOP):wt.setMode(L.LINE_STRIP)}else U.isPoints?wt.setMode(L.POINTS):U.isSprite&&wt.setMode(L.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)wt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(st.get("WEBGL_multi_draw"))wt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{let Le=U._multiDrawStarts,Mn=U._multiDrawCounts,Et=U._multiDrawCount,bi=Te?Z.get(Te).bytesPerElement:1,yr=Fe.get(V).currentProgram.getUniforms();for(let ei=0;ei<Et;ei++)yr.setValue(L,"_gl_DrawID",ei),wt.render(Le[ei]/bi,Mn[ei])}else if(U.isInstancedMesh)wt.renderInstances(Ct,Kt,U.count);else if(B.isInstancedBufferGeometry){let Le=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Mn=Math.min(B.instanceCount,Le);wt.renderInstances(Ct,Kt,Mn)}else wt.render(Ct,Kt)};function bt(w,N,B){w.transparent===!0&&w.side===Dt&&w.forceSinglePass===!1?(w.side=mn,w.needsUpdate=!0,ka(w,N,B),w.side=Nn,w.needsUpdate=!0,ka(w,N,B),w.side=Dt):ka(w,N,B)}this.compile=function(w,N,B=null){B===null&&(B=w),p=rt.get(B),p.init(N),y.push(p),B.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),w!==B&&w.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights();let V=new Set;return w.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;let re=U.material;if(re)if(Array.isArray(re))for(let xe=0;xe<re.length;xe++){let be=re[xe];bt(be,B,U),V.add(be)}else bt(re,B,U),V.add(re)}),y.pop(),p=null,V},this.compileAsync=function(w,N,B=null){let V=this.compile(w,N,B);return new Promise(U=>{function re(){if(V.forEach(function(xe){Fe.get(xe).currentProgram.isReady()&&V.delete(xe)}),V.size===0){U(w);return}setTimeout(re,10)}st.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let Gn=null;function qi(w){Gn&&Gn(w)}function op(){Ks.stop()}function ap(){Ks.start()}let Ks=new Ym;Ks.setAnimationLoop(qi),typeof self!="undefined"&&Ks.setContext(self),this.setAnimationLoop=function(w){Gn=w,X.setAnimationLoop(w),w===null?Ks.stop():Ks.start()},X.addEventListener("sessionstart",op),X.addEventListener("sessionend",ap),this.render=function(w,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(N),N=X.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,N,E),p=rt.get(w,y.length),p.init(N),y.push(p),ae.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),ot.setFromProjectionMatrix(ae),Q=this.localClippingEnabled,q=ne.init(this.clippingPlanes,Q),x=pe.get(w,m.length),x.init(),m.push(x),X.enabled===!0&&X.isPresenting===!0){let re=v.xr.getDepthSensingMesh();re!==null&&uh(re,N,-1/0,v.sortObjects)}uh(w,N,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(W,Y),Mt=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,Mt&&Be.addToRenderList(x,w),this.info.render.frame++,q===!0&&ne.beginShadows();let B=p.state.shadowsArray;me.render(B,w,N),q===!0&&ne.endShadows(),this.info.autoReset===!0&&this.info.reset();let V=x.opaque,U=x.transmissive;if(p.setupLights(),N.isArrayCamera){let re=N.cameras;if(U.length>0)for(let xe=0,be=re.length;xe<be;xe++){let Te=re[xe];cp(V,U,w,Te)}Mt&&Be.render(w);for(let xe=0,be=re.length;xe<be;xe++){let Te=re[xe];lp(x,w,Te,Te.viewport)}}else U.length>0&&cp(V,U,w,N),Mt&&Be.render(w),lp(x,w,N);E!==null&&(C.updateMultisampleRenderTarget(E),C.updateRenderTargetMipmap(E)),w.isScene===!0&&w.onAfterRender(v,w,N),vt.resetDefaultState(),I=-1,z=null,y.pop(),y.length>0?(p=y[y.length-1],q===!0&&ne.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?x=m[m.length-1]:x=null};function uh(w,N,B,V){if(w.visible===!1)return;if(w.layers.test(N.layers)){if(w.isGroup)B=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(N);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||ot.intersectsSprite(w)){V&&Ie.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ae);let xe=K.update(w),be=w.material;be.visible&&x.push(w,xe,be,B,Ie.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||ot.intersectsObject(w))){let xe=K.update(w),be=w.material;if(V&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ie.copy(w.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Ie.copy(xe.boundingSphere.center)),Ie.applyMatrix4(w.matrixWorld).applyMatrix4(ae)),Array.isArray(be)){let Te=xe.groups;for(let Ve=0,qe=Te.length;Ve<qe;Ve++){let Ee=Te[Ve],Ct=be[Ee.materialIndex];Ct&&Ct.visible&&x.push(w,xe,Ct,B,Ie.z,Ee)}}else be.visible&&x.push(w,xe,be,B,Ie.z,null)}}let re=w.children;for(let xe=0,be=re.length;xe<be;xe++)uh(re[xe],N,B,V)}function lp(w,N,B,V){let U=w.opaque,re=w.transmissive,xe=w.transparent;p.setupLightsView(B),q===!0&&ne.setGlobalState(v.clippingPlanes,B),V&&Oe.viewport(_.copy(V)),U.length>0&&Ua(U,N,B),re.length>0&&Ua(re,N,B),xe.length>0&&Ua(xe,N,B),Oe.buffers.depth.setTest(!0),Oe.buffers.depth.setMask(!0),Oe.buffers.color.setMask(!0),Oe.setPolygonOffset(!1)}function cp(w,N,B,V){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[V.id]===void 0&&(p.state.transmissionRenderTarget[V.id]=new nn(1,1,{generateMipmaps:!0,type:st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float")?Rn:Ci,minFilter:Oi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:lt.workingColorSpace}));let re=p.state.transmissionRenderTarget[V.id],xe=V.viewport||_;re.setSize(xe.z,xe.w);let be=v.getRenderTarget();v.setRenderTarget(re),v.getClearColor(O),G=v.getClearAlpha(),G<1&&v.setClearColor(16777215,.5),v.clear(),Mt&&Be.render(B);let Te=v.toneMapping;v.toneMapping=Ss;let Ve=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),p.setupLightsView(V),q===!0&&ne.setGlobalState(v.clippingPlanes,V),Ua(w,B,V),C.updateMultisampleRenderTarget(re),C.updateRenderTargetMipmap(re),st.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let Ee=0,Ct=N.length;Ee<Ct;Ee++){let Bt=N[Ee],Kt=Bt.object,Qn=Bt.geometry,wt=Bt.material,Le=Bt.group;if(wt.side===Dt&&Kt.layers.test(V.layers)){let Mn=wt.side;wt.side=mn,wt.needsUpdate=!0,hp(Kt,B,V,Qn,wt,Le),wt.side=Mn,wt.needsUpdate=!0,qe=!0}}qe===!0&&(C.updateMultisampleRenderTarget(re),C.updateRenderTargetMipmap(re))}v.setRenderTarget(be),v.setClearColor(O,G),Ve!==void 0&&(V.viewport=Ve),v.toneMapping=Te}function Ua(w,N,B){let V=N.isScene===!0?N.overrideMaterial:null;for(let U=0,re=w.length;U<re;U++){let xe=w[U],be=xe.object,Te=xe.geometry,Ve=V===null?xe.material:V,qe=xe.group;be.layers.test(B.layers)&&hp(be,N,B,Te,Ve,qe)}}function hp(w,N,B,V,U,re){w.onBeforeRender(v,N,B,V,U,re),w.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),U.onBeforeRender(v,N,B,V,w,re),U.transparent===!0&&U.side===Dt&&U.forceSinglePass===!1?(U.side=mn,U.needsUpdate=!0,v.renderBufferDirect(B,N,V,U,w,re),U.side=Nn,U.needsUpdate=!0,v.renderBufferDirect(B,N,V,U,w,re),U.side=Dt):v.renderBufferDirect(B,N,V,U,w,re),w.onAfterRender(v,N,B,V,U,re)}function ka(w,N,B){N.isScene!==!0&&(N=Ze);let V=Fe.get(w),U=p.state.lights,re=p.state.shadowsArray,xe=U.state.version,be=Se.getParameters(w,U.state,re,N,B),Te=Se.getProgramCacheKey(be),Ve=V.programs;V.environment=w.isMeshStandardMaterial?N.environment:null,V.fog=N.fog,V.envMap=(w.isMeshStandardMaterial?F:S).get(w.envMap||V.environment),V.envMapRotation=V.environment!==null&&w.envMap===null?N.environmentRotation:w.envMapRotation,Ve===void 0&&(w.addEventListener("dispose",xt),Ve=new Map,V.programs=Ve);let qe=Ve.get(Te);if(qe!==void 0){if(V.currentProgram===qe&&V.lightsStateVersion===xe)return fp(w,be),qe}else be.uniforms=Se.getUniforms(w),w.onBeforeCompile(be,v),qe=Se.acquireProgram(be,Te),Ve.set(Te,qe),V.uniforms=be.uniforms;let Ee=V.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ee.clippingPlanes=ne.uniform),fp(w,be),V.needsLights=Tg(w),V.lightsStateVersion=xe,V.needsLights&&(Ee.ambientLightColor.value=U.state.ambient,Ee.lightProbe.value=U.state.probe,Ee.directionalLights.value=U.state.directional,Ee.directionalLightShadows.value=U.state.directionalShadow,Ee.spotLights.value=U.state.spot,Ee.spotLightShadows.value=U.state.spotShadow,Ee.rectAreaLights.value=U.state.rectArea,Ee.ltc_1.value=U.state.rectAreaLTC1,Ee.ltc_2.value=U.state.rectAreaLTC2,Ee.pointLights.value=U.state.point,Ee.pointLightShadows.value=U.state.pointShadow,Ee.hemisphereLights.value=U.state.hemi,Ee.directionalShadowMap.value=U.state.directionalShadowMap,Ee.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Ee.spotShadowMap.value=U.state.spotShadowMap,Ee.spotLightMatrix.value=U.state.spotLightMatrix,Ee.spotLightMap.value=U.state.spotLightMap,Ee.pointShadowMap.value=U.state.pointShadowMap,Ee.pointShadowMatrix.value=U.state.pointShadowMatrix),V.currentProgram=qe,V.uniformsList=null,qe}function up(w){if(w.uniformsList===null){let N=w.currentProgram.getUniforms();w.uniformsList=Wr.seqWithValue(N.seq,w.uniforms)}return w.uniformsList}function fp(w,N){let B=Fe.get(w);B.outputColorSpace=N.outputColorSpace,B.batching=N.batching,B.batchingColor=N.batchingColor,B.instancing=N.instancing,B.instancingColor=N.instancingColor,B.instancingMorph=N.instancingMorph,B.skinning=N.skinning,B.morphTargets=N.morphTargets,B.morphNormals=N.morphNormals,B.morphColors=N.morphColors,B.morphTargetsCount=N.morphTargetsCount,B.numClippingPlanes=N.numClippingPlanes,B.numIntersection=N.numClipIntersection,B.vertexAlphas=N.vertexAlphas,B.vertexTangents=N.vertexTangents,B.toneMapping=N.toneMapping}function bg(w,N,B,V,U){N.isScene!==!0&&(N=Ze),C.resetTextureUnits();let re=N.fog,xe=V.isMeshStandardMaterial?N.environment:null,be=E===null?v.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:sn,Te=(V.isMeshStandardMaterial?F:S).get(V.envMap||xe),Ve=V.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,qe=!!B.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ee=!!B.morphAttributes.position,Ct=!!B.morphAttributes.normal,Bt=!!B.morphAttributes.color,Kt=Ss;V.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(Kt=v.toneMapping);let Qn=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,wt=Qn!==void 0?Qn.length:0,Le=Fe.get(V),Mn=p.state.lights;if(q===!0&&(Q===!0||w!==z)){let oi=w===z&&V.id===I;ne.setState(V,w,oi)}let Et=!1;V.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==Mn.state.version||Le.outputColorSpace!==be||U.isBatchedMesh&&Le.batching===!1||!U.isBatchedMesh&&Le.batching===!0||U.isBatchedMesh&&Le.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Le.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Le.instancing===!1||!U.isInstancedMesh&&Le.instancing===!0||U.isSkinnedMesh&&Le.skinning===!1||!U.isSkinnedMesh&&Le.skinning===!0||U.isInstancedMesh&&Le.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Le.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Le.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Le.instancingMorph===!1&&U.morphTexture!==null||Le.envMap!==Te||V.fog===!0&&Le.fog!==re||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==ne.numPlanes||Le.numIntersection!==ne.numIntersection)||Le.vertexAlphas!==Ve||Le.vertexTangents!==qe||Le.morphTargets!==Ee||Le.morphNormals!==Ct||Le.morphColors!==Bt||Le.toneMapping!==Kt||Le.morphTargetsCount!==wt)&&(Et=!0):(Et=!0,Le.__version=V.version);let bi=Le.currentProgram;Et===!0&&(bi=ka(V,N,U));let yr=!1,ei=!1,fh=!1,jt=bi.getUniforms(),ps=Le.uniforms;if(Oe.useProgram(bi.program)&&(yr=!0,ei=!0,fh=!0),V.id!==I&&(I=V.id,ei=!0),yr||z!==w){dt.reverseDepthBuffer?(ve.copy(w.projectionMatrix),Sx(ve),Tx(ve),jt.setValue(L,"projectionMatrix",ve)):jt.setValue(L,"projectionMatrix",w.projectionMatrix),jt.setValue(L,"viewMatrix",w.matrixWorldInverse);let oi=jt.map.cameraPosition;oi!==void 0&&oi.setValue(L,ke.setFromMatrixPosition(w.matrixWorld)),dt.logarithmicDepthBuffer&&jt.setValue(L,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&jt.setValue(L,"isOrthographic",w.isOrthographicCamera===!0),z!==w&&(z=w,ei=!0,fh=!0)}if(U.isSkinnedMesh){jt.setOptional(L,U,"bindMatrix"),jt.setOptional(L,U,"bindMatrixInverse");let oi=U.skeleton;oi&&(oi.boneTexture===null&&oi.computeBoneTexture(),jt.setValue(L,"boneTexture",oi.boneTexture,C))}U.isBatchedMesh&&(jt.setOptional(L,U,"batchingTexture"),jt.setValue(L,"batchingTexture",U._matricesTexture,C),jt.setOptional(L,U,"batchingIdTexture"),jt.setValue(L,"batchingIdTexture",U._indirectTexture,C),jt.setOptional(L,U,"batchingColorTexture"),U._colorsTexture!==null&&jt.setValue(L,"batchingColorTexture",U._colorsTexture,C));let dh=B.morphAttributes;if((dh.position!==void 0||dh.normal!==void 0||dh.color!==void 0)&&He.update(U,B,bi),(ei||Le.receiveShadow!==U.receiveShadow)&&(Le.receiveShadow=U.receiveShadow,jt.setValue(L,"receiveShadow",U.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(ps.envMap.value=Te,ps.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&N.environment!==null&&(ps.envMapIntensity.value=N.environmentIntensity),ei&&(jt.setValue(L,"toneMappingExposure",v.toneMappingExposure),Le.needsLights&&Sg(ps,fh),re&&V.fog===!0&&le.refreshFogUniforms(ps,re),le.refreshMaterialUniforms(ps,V,ee,H,p.state.transmissionRenderTarget[w.id]),Wr.upload(L,up(Le),ps,C)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Wr.upload(L,up(Le),ps,C),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&jt.setValue(L,"center",U.center),jt.setValue(L,"modelViewMatrix",U.modelViewMatrix),jt.setValue(L,"normalMatrix",U.normalMatrix),jt.setValue(L,"modelMatrix",U.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let oi=V.uniformsGroups;for(let ph=0,wg=oi.length;ph<wg;ph++){let dp=oi[ph];D.update(dp,bi),D.bind(dp,bi)}}return bi}function Sg(w,N){w.ambientLightColor.needsUpdate=N,w.lightProbe.needsUpdate=N,w.directionalLights.needsUpdate=N,w.directionalLightShadows.needsUpdate=N,w.pointLights.needsUpdate=N,w.pointLightShadows.needsUpdate=N,w.spotLights.needsUpdate=N,w.spotLightShadows.needsUpdate=N,w.rectAreaLights.needsUpdate=N,w.hemisphereLights.needsUpdate=N}function Tg(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(w,N,B){Fe.get(w.texture).__webglTexture=N,Fe.get(w.depthTexture).__webglTexture=B;let V=Fe.get(w);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=B===void 0,V.__autoAllocateDepthBuffer||st.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,N){let B=Fe.get(w);B.__webglFramebuffer=N,B.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(w,N=0,B=0){E=w,P=N,R=B;let V=!0,U=null,re=!1,xe=!1;if(w){let Te=Fe.get(w);if(Te.__useDefaultFramebuffer!==void 0)Oe.bindFramebuffer(L.FRAMEBUFFER,null),V=!1;else if(Te.__webglFramebuffer===void 0)C.setupRenderTarget(w);else if(Te.__hasExternalTextures)C.rebindTextures(w,Fe.get(w.texture).__webglTexture,Fe.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Ee=w.depthTexture;if(Te.__boundDepthTexture!==Ee){if(Ee!==null&&Fe.has(Ee)&&(w.width!==Ee.image.width||w.height!==Ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(w)}}let Ve=w.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(xe=!0);let qe=Fe.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(qe[N])?U=qe[N][B]:U=qe[N],re=!0):w.samples>0&&C.useMultisampledRTT(w)===!1?U=Fe.get(w).__webglMultisampledFramebuffer:Array.isArray(qe)?U=qe[B]:U=qe,_.copy(w.viewport),T.copy(w.scissor),k=w.scissorTest}else _.copy(te).multiplyScalar(ee).floor(),T.copy(se).multiplyScalar(ee).floor(),k=Xe;if(Oe.bindFramebuffer(L.FRAMEBUFFER,U)&&V&&Oe.drawBuffers(w,U),Oe.viewport(_),Oe.scissor(T),Oe.setScissorTest(k),re){let Te=Fe.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+N,Te.__webglTexture,B)}else if(xe){let Te=Fe.get(w.texture),Ve=N||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Te.__webglTexture,B||0,Ve)}I=-1},this.readRenderTargetPixels=function(w,N,B,V,U,re,xe){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=Fe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&xe!==void 0&&(be=be[xe]),be){Oe.bindFramebuffer(L.FRAMEBUFFER,be);try{let Te=w.texture,Ve=Te.format,qe=Te.type;if(!dt.textureFormatReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!dt.textureTypeReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=w.width-V&&B>=0&&B<=w.height-U&&L.readPixels(N,B,V,U,Ye.convert(Ve),Ye.convert(qe),re)}finally{let Te=E!==null?Fe.get(E).__webglFramebuffer:null;Oe.bindFramebuffer(L.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(w,N,B,V,U,re,xe){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=Fe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&xe!==void 0&&(be=be[xe]),be){let Te=w.texture,Ve=Te.format,qe=Te.type;if(!dt.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!dt.textureTypeReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=w.width-V&&B>=0&&B<=w.height-U){Oe.bindFramebuffer(L.FRAMEBUFFER,be);let Ee=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ee),L.bufferData(L.PIXEL_PACK_BUFFER,re.byteLength,L.STREAM_READ),L.readPixels(N,B,V,U,Ye.convert(Ve),Ye.convert(qe),0);let Ct=E!==null?Fe.get(E).__webglFramebuffer:null;Oe.bindFramebuffer(L.FRAMEBUFFER,Ct);let Bt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await bx(L,Bt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ee),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,re),L.deleteBuffer(Ee),L.deleteSync(Bt),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,N=null,B=0){w.isTexture!==!0&&(_l("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,w=arguments[1]);let V=Math.pow(2,-B),U=Math.floor(w.image.width*V),re=Math.floor(w.image.height*V),xe=N!==null?N.x:0,be=N!==null?N.y:0;C.setTexture2D(w,0),L.copyTexSubImage2D(L.TEXTURE_2D,B,0,0,xe,be,U,re),Oe.unbindTexture()},this.copyTextureToTexture=function(w,N,B=null,V=null,U=0){w.isTexture!==!0&&(_l("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,w=arguments[1],N=arguments[2],U=arguments[3]||0,B=null);let re,xe,be,Te,Ve,qe;B!==null?(re=B.max.x-B.min.x,xe=B.max.y-B.min.y,be=B.min.x,Te=B.min.y):(re=w.image.width,xe=w.image.height,be=0,Te=0),V!==null?(Ve=V.x,qe=V.y):(Ve=0,qe=0);let Ee=Ye.convert(N.format),Ct=Ye.convert(N.type);C.setTexture2D(N,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,N.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,N.unpackAlignment);let Bt=L.getParameter(L.UNPACK_ROW_LENGTH),Kt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Qn=L.getParameter(L.UNPACK_SKIP_PIXELS),wt=L.getParameter(L.UNPACK_SKIP_ROWS),Le=L.getParameter(L.UNPACK_SKIP_IMAGES),Mn=w.isCompressedTexture?w.mipmaps[U]:w.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,Mn.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Mn.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,be),L.pixelStorei(L.UNPACK_SKIP_ROWS,Te),w.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,U,Ve,qe,re,xe,Ee,Ct,Mn.data):w.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,U,Ve,qe,Mn.width,Mn.height,Ee,Mn.data):L.texSubImage2D(L.TEXTURE_2D,U,Ve,qe,re,xe,Ee,Ct,Mn),L.pixelStorei(L.UNPACK_ROW_LENGTH,Bt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Kt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Qn),L.pixelStorei(L.UNPACK_SKIP_ROWS,wt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Le),U===0&&N.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),Oe.unbindTexture()},this.copyTextureToTexture3D=function(w,N,B=null,V=null,U=0){w.isTexture!==!0&&(_l("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,V=arguments[1]||null,w=arguments[2],N=arguments[3],U=arguments[4]||0);let re,xe,be,Te,Ve,qe,Ee,Ct,Bt,Kt=w.isCompressedTexture?w.mipmaps[U]:w.image;B!==null?(re=B.max.x-B.min.x,xe=B.max.y-B.min.y,be=B.max.z-B.min.z,Te=B.min.x,Ve=B.min.y,qe=B.min.z):(re=Kt.width,xe=Kt.height,be=Kt.depth,Te=0,Ve=0,qe=0),V!==null?(Ee=V.x,Ct=V.y,Bt=V.z):(Ee=0,Ct=0,Bt=0);let Qn=Ye.convert(N.format),wt=Ye.convert(N.type),Le;if(N.isData3DTexture)C.setTexture3D(N,0),Le=L.TEXTURE_3D;else if(N.isDataArrayTexture||N.isCompressedArrayTexture)C.setTexture2DArray(N,0),Le=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,N.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,N.unpackAlignment);let Mn=L.getParameter(L.UNPACK_ROW_LENGTH),Et=L.getParameter(L.UNPACK_IMAGE_HEIGHT),bi=L.getParameter(L.UNPACK_SKIP_PIXELS),yr=L.getParameter(L.UNPACK_SKIP_ROWS),ei=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Kt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Kt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Te),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ve),L.pixelStorei(L.UNPACK_SKIP_IMAGES,qe),w.isDataTexture||w.isData3DTexture?L.texSubImage3D(Le,U,Ee,Ct,Bt,re,xe,be,Qn,wt,Kt.data):N.isCompressedArrayTexture?L.compressedTexSubImage3D(Le,U,Ee,Ct,Bt,re,xe,be,Qn,Kt.data):L.texSubImage3D(Le,U,Ee,Ct,Bt,re,xe,be,Qn,wt,Kt),L.pixelStorei(L.UNPACK_ROW_LENGTH,Mn),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Et),L.pixelStorei(L.UNPACK_SKIP_PIXELS,bi),L.pixelStorei(L.UNPACK_SKIP_ROWS,yr),L.pixelStorei(L.UNPACK_SKIP_IMAGES,ei),U===0&&N.generateMipmaps&&L.generateMipmap(Le),Oe.unbindTexture()},this.initRenderTarget=function(w){Fe.get(w).__webglFramebuffer===void 0&&C.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?C.setTextureCube(w,0):w.isData3DTexture?C.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?C.setTexture2DArray(w,0):C.setTexture2D(w,0),Oe.unbindTexture()},this.resetState=function(){P=0,R=0,E=null,Oe.reset(),vt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ns}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Of?"display-p3":"srgb",t.unpackColorSpace=lt.workingColorSpace===rc?"display-p3":"srgb"}};var Yo=class s{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new fe(e),this.near=t,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ko=class extends yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hi,this.environmentIntensity=1,this.environmentRotation=new hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},eo=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Uu,this.updateRanges=[],this.version=0,this.uuid=Ri()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ri()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ri()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Ln=new A,sr=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ln.fromBufferAttribute(this,t),Ln.applyMatrix4(e),this.setXYZ(t,Ln.x,Ln.y,Ln.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ln.fromBufferAttribute(this,t),Ln.applyNormalMatrix(e),this.setXYZ(t,Ln.x,Ln.y,Ln.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ln.fromBufferAttribute(this,t),Ln.transformDirection(e),this.setXYZ(t,Ln.x,Ln.y,Ln.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Ei(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Pt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ei(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ei(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ei(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ei(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),i=Pt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),i=Pt(i,this.array),r=Pt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new qt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ii=class extends kn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new fe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Dr,Co=new A,Nr=new A,Ur=new A,kr=new ie,Po=new ie,Jm=new Ne,il=new A,Io=new A,sl=new A,am=new ie,Gh=new ie,lm=new ie,ui=class extends yt{constructor(e=new ii){if(super(),this.isSprite=!0,this.type="Sprite",Dr===void 0){Dr=new It;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new eo(t,5);Dr.setIndex([0,1,2,0,2,3]),Dr.setAttribute("position",new sr(n,3,0,!1)),Dr.setAttribute("uv",new sr(n,2,3,!1))}this.geometry=Dr,this.material=e,this.center=new ie(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Nr.setFromMatrixScale(this.matrixWorld),Jm.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ur.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Nr.multiplyScalar(-Ur.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let o=this.center;rl(il.set(-.5,-.5,0),Ur,o,Nr,i,r),rl(Io.set(.5,-.5,0),Ur,o,Nr,i,r),rl(sl.set(.5,.5,0),Ur,o,Nr,i,r),am.set(0,0),Gh.set(1,0),lm.set(1,1);let a=e.ray.intersectTriangle(il,Io,sl,!1,Co);if(a===null&&(rl(Io.set(-.5,.5,0),Ur,o,Nr,i,r),Gh.set(0,1),a=e.ray.intersectTriangle(il,sl,Io,!1,Co),a===null))return;let l=e.ray.origin.distanceTo(Co);l<e.near||l>e.far||t.push({distance:l,point:Co.clone(),uv:Ms.getInterpolation(Co,il,Io,sl,am,Gh,lm,new ie),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function rl(s,e,t,n,i,r){kr.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(Po.x=r*kr.x-i*kr.y,Po.y=i*kr.x+r*kr.y):Po.copy(kr),s.copy(e),s.x+=Po.x,s.y+=Po.y,s.applyMatrix4(Jm)}var ol=new A,cm=new A,to=class extends yt{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);let t=e.levels;for(let n=0,i=t.length;n<i;n++){let r=t[n];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);let i=this.levels,r;for(r=0;r<i.length&&!(t<i[r].distance);r++);return i.splice(r,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}removeLevel(e){let t=this.levels;for(let n=0;n<t.length;n++)if(t[n].distance===e){let i=t.splice(n,1);return this.remove(i[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){let t=this.levels;if(t.length>0){let n,i;for(n=1,i=t.length;n<i;n++){let r=t[n].distance;if(t[n].object.visible&&(r-=r*t[n].hysteresis),e<r)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){ol.setFromMatrixPosition(this.matrixWorld);let i=e.ray.origin.distanceTo(ol);this.getObjectForDistance(i).raycast(e,t)}}update(e){let t=this.levels;if(t.length>1){ol.setFromMatrixPosition(e.matrixWorld),cm.setFromMatrixPosition(this.matrixWorld);let n=ol.distanceTo(cm)/e.zoom;t[0].object.visible=!0;let i,r;for(i=1,r=t.length;i<r;i++){let o=t[i].distance;if(t[i].object.visible&&(o-=o*t[i].hysteresis),n>=o)t[i-1].object.visible=!1,t[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<r;i++)t[i].object.visible=!1}}toJSON(e){let t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];let n=this.levels;for(let i=0,r=n.length;i<r;i++){let o=n[i];t.object.levels.push({object:o.object.uuid,distance:o.distance,hysteresis:o.hysteresis})}return t}},hm=new A,um=new St,fm=new St,yM=new A,dm=new Ne,al=new A,Wh=new Un,pm=new Ne,Xh=new jr,no=class extends ye{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=xp,this.bindMatrix=new Ne,this.bindMatrixInverse=new Ne,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ci),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,al),this.boundingBox.expandByPoint(al)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Un),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,al),this.boundingSphere.expandByPoint(al)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Wh.copy(this.boundingSphere),Wh.applyMatrix4(i),e.ray.intersectsSphere(Wh)!==!1&&(pm.copy(i).invert(),Xh.copy(e.ray).applyMatrix4(pm),!(this.boundingBox!==null&&Xh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Xh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new St,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===xp?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Xg?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;um.fromBufferAttribute(i.attributes.skinIndex,e),fm.fromBufferAttribute(i.attributes.skinWeight,e),hm.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=fm.getComponent(r);if(o!==0){let a=um.getComponent(r);dm.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(yM.copy(hm).applyMatrix4(dm),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},Zo=class extends yt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Rs=class extends yn{constructor(e=null,t=1,n=1,i,r,o,a,l,c=cn,h=cn,u,f){super(null,o,a,l,c,h,i,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},mm=new Ne,vM=new Ne,Nl=class s{constructor(e=[],t=[]){this.uuid=Ri(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ne)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ne;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:vM;mm.multiplyMatrices(a,t[r]),mm.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Rs(t,e,e,Xn,Ai);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Zo),this.bones.push(o),this.boneInverses.push(new Ne().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let o=t[i];e.bones.push(o.uuid);let a=n[i];e.boneInverses.push(a.toArray())}return e}},rr=class extends qt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},zr=new Ne,gm=new Ne,ll=[],xm=new ci,_M=new Ne,Lo=new ye,Do=new Un,Cs=class extends ye{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new rr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,_M)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ci),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,zr),xm.copy(e.boundingBox).applyMatrix4(zr),this.boundingBox.union(xm)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Un),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,zr),Do.copy(e.boundingSphere).applyMatrix4(zr),this.boundingSphere.union(Do)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(Lo.geometry=this.geometry,Lo.material=this.material,Lo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Do.copy(this.boundingSphere),Do.applyMatrix4(n),e.ray.intersectsSphere(Do)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,zr),gm.multiplyMatrices(n,zr),Lo.matrixWorld=gm,Lo.raycast(e,ll);for(let o=0,a=ll.length;o<a;o++){let l=ll[o];l.instanceId=r,l.object=this,t.push(l)}ll.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new rr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Rs(new Float32Array(i*this.count),i,this.count,If,Ai));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var $o=class extends kn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ul=new A,kl=new A,ym=new Ne,No=new jr,cl=new Un,qh=new A,vm=new A,io=class extends yt{constructor(e=new It,t=new $o){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Ul.fromBufferAttribute(t,i-1),kl.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Ul.distanceTo(kl);e.setAttribute("lineDistance",new Ke(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),cl.copy(n.boundingSphere),cl.applyMatrix4(i),cl.radius+=r,e.ray.intersectsSphere(cl)===!1)return;ym.copy(i).invert(),No.copy(e.ray).applyMatrix4(ym);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=d,p=g-1;x<p;x+=c){let m=h.getX(x),y=h.getX(x+1),v=hl(this,e,No,l,m,y);v&&t.push(v)}if(this.isLineLoop){let x=h.getX(g-1),p=h.getX(d),m=hl(this,e,No,l,x,p);m&&t.push(m)}}else{let d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let x=d,p=g-1;x<p;x+=c){let m=hl(this,e,No,l,x,x+1);m&&t.push(m)}if(this.isLineLoop){let x=hl(this,e,No,l,g-1,d);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function hl(s,e,t,n,i,r){let o=s.geometry.attributes.position;if(Ul.fromBufferAttribute(o,i),kl.fromBufferAttribute(o,r),t.distanceSqToSegment(Ul,kl,qh,vm)>n)return;qh.applyMatrix4(s.matrixWorld);let l=e.ray.origin.distanceTo(qh);if(!(l<e.near||l>e.far))return{distance:l,point:vm.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}var _m=new A,Mm=new A,zl=class extends io{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)_m.fromBufferAttribute(t,i),Mm.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+_m.distanceTo(Mm);e.setAttribute("lineDistance",new Ke(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ol=class extends io{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},jo=class extends kn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},bm=new Ne,Ju=new jr,ul=new Un,fl=new A,Fl=class extends yt{constructor(e=new It,t=new jo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ul.copy(n.boundingSphere),ul.applyMatrix4(i),ul.radius+=r,e.ray.intersectsSphere(ul)===!1)return;bm.copy(i).invert(),Ju.copy(e.ray).applyMatrix4(bm);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,x=d;g<x;g++){let p=c.getX(g);fl.fromBufferAttribute(u,p),Sm(fl,p,l,i,e,t,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=f,x=d;g<x;g++)fl.fromBufferAttribute(u,g),Sm(fl,g,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Sm(s,e,t,n,i,r,o){let a=Ju.distanceSqToPoint(s);if(a<t){let l=new A;Ju.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Fi=class extends yn{constructor(e,t,n,i,r,o,a,l,c){super(e,t,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Pi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),i=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);let h=n[i],f=n[i+1]-h,d=(o-h)/f;return(i+d)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),l=t||(o.isVector2?new ie:new A);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new A,i=[],r=[],o=[],a=new A,l=new Ne;for(let d=0;d<=e;d++){let g=d/e;i[d]=this.getTangentAt(g,new A)}r[0]=new A,o[0]=new A;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(pn(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(i[d],r[d])}if(t===!0){let d=Math.acos(pn(r[0].dot(r[e]),-1,1));d/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],d*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Bl=class extends Pi{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ie){let n=t,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Qu=class extends Bl{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Hf(){let s=0,e=0,t=0,n=0;function i(r,o,a,l){s=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,i(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return s+e*r+t*o+n*a}}}var dl=new A,Yh=new Hf,Kh=new Hf,Zh=new Hf,Jo=class extends Pi{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new A){let n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(dl.subVectors(i[0],i[1]).add(i[0]),c=dl);let u=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(dl.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=dl),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),g<1e-4&&(g=x),p<1e-4&&(p=x),Yh.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,x,p),Kh.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,x,p),Zh.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,x,p)}else this.curveType==="catmullrom"&&(Yh.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Kh.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Zh.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(Yh.calc(l),Kh.calc(l),Zh.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new A().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Tm(s,e,t,n,i){let r=(n-e)*.5,o=(i-t)*.5,a=s*s,l=s*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*s+t}function MM(s,e){let t=1-s;return t*t*e}function bM(s,e){return 2*(1-s)*s*e}function SM(s,e){return s*s*e}function Ho(s,e,t,n){return MM(s,e)+bM(s,t)+SM(s,n)}function TM(s,e){let t=1-s;return t*t*t*e}function wM(s,e){let t=1-s;return 3*t*t*s*e}function EM(s,e){return 3*(1-s)*s*s*e}function AM(s,e){return s*s*s*e}function Vo(s,e,t,n,i){return TM(s,e)+wM(s,t)+EM(s,n)+AM(s,i)}var ef=class extends Pi{constructor(e=new ie,t=new ie,n=new ie,i=new ie){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ie){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Vo(e,i.x,r.x,o.x,a.x),Vo(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},tf=class extends Pi{constructor(e=new A,t=new A,n=new A,i=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new A){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Vo(e,i.x,r.x,o.x,a.x),Vo(e,i.y,r.y,o.y,a.y),Vo(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},nf=class extends Pi{constructor(e=new ie,t=new ie){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ie){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ie){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},sf=class extends Pi{constructor(e=new A,t=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new A){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new A){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},rf=class extends Pi{constructor(e=new ie,t=new ie,n=new ie){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ie){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Ho(e,i.x,r.x,o.x),Ho(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Hl=class extends Pi{constructor(e=new A,t=new A,n=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new A){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Ho(e,i.x,r.x,o.x),Ho(e,i.y,r.y,o.y),Ho(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},of=class extends Pi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ie){let n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(Tm(a,l.x,c.x,h.x,u.x),Tm(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new ie().fromArray(i))}return this}},RM=Object.freeze({__proto__:null,ArcCurve:Qu,CatmullRomCurve3:Jo,CubicBezierCurve:ef,CubicBezierCurve3:tf,EllipseCurve:Bl,LineCurve:nf,LineCurve3:sf,QuadraticBezierCurve:rf,QuadraticBezierCurve3:Hl,SplineCurve:of});var fi=class s extends It{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new A,h=new ie;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){let d=n+u/t*i;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Ke(o,3)),this.setAttribute("normal",new Ke(a,3)),this.setAttribute("uv",new Ke(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Ps=class s extends It{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],f=[],d=[],g=0,x=[],p=n/2,m=0;y(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Ke(u,3)),this.setAttribute("normal",new Ke(f,3)),this.setAttribute("uv",new Ke(d,2));function y(){let b=new A,P=new A,R=0,E=(t-e)/n;for(let I=0;I<=r;I++){let z=[],_=I/r,T=_*(t-e)+e;for(let k=0;k<=i;k++){let O=k/i,G=O*l+a,j=Math.sin(G),H=Math.cos(G);P.x=T*j,P.y=-_*n+p,P.z=T*H,u.push(P.x,P.y,P.z),b.set(j,E,H).normalize(),f.push(b.x,b.y,b.z),d.push(O,1-_),z.push(g++)}x.push(z)}for(let I=0;I<i;I++)for(let z=0;z<r;z++){let _=x[z][I],T=x[z+1][I],k=x[z+1][I+1],O=x[z][I+1];e>0&&(h.push(_,T,O),R+=3),t>0&&(h.push(T,k,O),R+=3)}c.addGroup(m,R,0),m+=R}function v(b){let P=g,R=new ie,E=new A,I=0,z=b===!0?e:t,_=b===!0?1:-1;for(let k=1;k<=i;k++)u.push(0,p*_,0),f.push(0,_,0),d.push(.5,.5),g++;let T=g;for(let k=0;k<=i;k++){let G=k/i*l+a,j=Math.cos(G),H=Math.sin(G);E.x=z*H,E.y=p*_,E.z=z*j,u.push(E.x,E.y,E.z),f.push(0,_,0),R.x=j*.5+.5,R.y=H*.5*_+.5,d.push(R.x,R.y),g++}for(let k=0;k<i;k++){let O=P+k,G=T+k;b===!0?h.push(G,G+1,O):h.push(G+1,G,O),I+=3}c.addGroup(m,I,b===!0?1:2),m+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var af=class s extends It{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let r=[],o=[];a(i),c(n),h(),this.setAttribute("position",new Ke(r,3)),this.setAttribute("normal",new Ke(r.slice(),3)),this.setAttribute("uv",new Ke(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let v=new A,b=new A,P=new A;for(let R=0;R<t.length;R+=3)d(t[R+0],v),d(t[R+1],b),d(t[R+2],P),l(v,b,P,y)}function l(y,v,b,P){let R=P+1,E=[];for(let I=0;I<=R;I++){E[I]=[];let z=y.clone().lerp(b,I/R),_=v.clone().lerp(b,I/R),T=R-I;for(let k=0;k<=T;k++)k===0&&I===R?E[I][k]=z:E[I][k]=z.clone().lerp(_,k/T)}for(let I=0;I<R;I++)for(let z=0;z<2*(R-I)-1;z++){let _=Math.floor(z/2);z%2===0?(f(E[I][_+1]),f(E[I+1][_]),f(E[I][_])):(f(E[I][_+1]),f(E[I+1][_+1]),f(E[I+1][_]))}}function c(y){let v=new A;for(let b=0;b<r.length;b+=3)v.x=r[b+0],v.y=r[b+1],v.z=r[b+2],v.normalize().multiplyScalar(y),r[b+0]=v.x,r[b+1]=v.y,r[b+2]=v.z}function h(){let y=new A;for(let v=0;v<r.length;v+=3){y.x=r[v+0],y.y=r[v+1],y.z=r[v+2];let b=p(y)/2/Math.PI+.5,P=m(y)/Math.PI+.5;o.push(b,1-P)}g(),u()}function u(){for(let y=0;y<o.length;y+=6){let v=o[y+0],b=o[y+2],P=o[y+4],R=Math.max(v,b,P),E=Math.min(v,b,P);R>.9&&E<.1&&(v<.2&&(o[y+0]+=1),b<.2&&(o[y+2]+=1),P<.2&&(o[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function d(y,v){let b=y*3;v.x=e[b+0],v.y=e[b+1],v.z=e[b+2]}function g(){let y=new A,v=new A,b=new A,P=new A,R=new ie,E=new ie,I=new ie;for(let z=0,_=0;z<r.length;z+=9,_+=6){y.set(r[z+0],r[z+1],r[z+2]),v.set(r[z+3],r[z+4],r[z+5]),b.set(r[z+6],r[z+7],r[z+8]),R.set(o[_+0],o[_+1]),E.set(o[_+2],o[_+3]),I.set(o[_+4],o[_+5]),P.copy(y).add(v).add(b).divideScalar(3);let T=p(P);x(R,_+0,y,T),x(E,_+2,v,T),x(I,_+4,b,T)}}function x(y,v,b,P){P<0&&y.x===1&&(o[v]=y.x-1),b.x===0&&b.z===0&&(o[v]=P/2/Math.PI+.5)}function p(y){return Math.atan2(y.z,-y.x)}function m(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.vertices,e.indices,e.radius,e.details)}};var Vl=class s extends af{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}};var Ii=class s extends It{constructor(e=.5,t=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],l=[],c=[],h=[],u=e,f=(t-e)/i,d=new A,g=new ie;for(let x=0;x<=i;x++){for(let p=0;p<=n;p++){let m=r+p/n*o;d.x=u*Math.cos(m),d.y=u*Math.sin(m),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/t+1)/2,g.y=(d.y/t+1)/2,h.push(g.x,g.y)}u+=f}for(let x=0;x<i;x++){let p=x*(n+1);for(let m=0;m<n;m++){let y=m+p,v=y,b=y+n+1,P=y+n+2,R=y+1;a.push(v,b,R),a.push(b,P,R)}}this.setIndex(a),this.setAttribute("position",new Ke(l,3)),this.setAttribute("normal",new Ke(c,3)),this.setAttribute("uv",new Ke(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Bi=class s extends It{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new A,f=new A,d=[],g=[],x=[],p=[];for(let m=0;m<=n;m++){let y=[],v=m/n,b=0;m===0&&o===0?b=.5/t:m===n&&l===Math.PI&&(b=-.5/t);for(let P=0;P<=t;P++){let R=P/t;u.x=-e*Math.cos(i+R*r)*Math.sin(o+v*a),u.y=e*Math.cos(o+v*a),u.z=e*Math.sin(i+R*r)*Math.sin(o+v*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),p.push(R+b,1-v),y.push(c++)}h.push(y)}for(let m=0;m<n;m++)for(let y=0;y<t;y++){let v=h[m][y+1],b=h[m][y],P=h[m+1][y],R=h[m+1][y+1];(m!==0||o>0)&&d.push(v,b,R),(m!==n-1||l<Math.PI)&&d.push(b,P,R)}this.setIndex(d),this.setAttribute("position",new Ke(g,3)),this.setAttribute("normal",new Ke(x,3)),this.setAttribute("uv",new Ke(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Gl=class s extends It{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],l=[],c=[],h=new A,u=new A,f=new A;for(let d=0;d<=n;d++)for(let g=0;g<=i;g++){let x=g/i*r,p=d/n*Math.PI*2;u.x=(e+t*Math.cos(p))*Math.cos(x),u.y=(e+t*Math.cos(p))*Math.sin(x),u.z=t*Math.sin(p),a.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/i),c.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=i;g++){let x=(i+1)*d+g-1,p=(i+1)*(d-1)+g-1,m=(i+1)*(d-1)+g,y=(i+1)*d+g;o.push(x,p,y),o.push(p,m,y)}this.setIndex(o),this.setAttribute("position",new Ke(a,3)),this.setAttribute("normal",new Ke(l,3)),this.setAttribute("uv",new Ke(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Wl=class s extends It{constructor(e=new Hl(new A(-1,-1,0),new A(-1,1,0),new A(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new A,l=new A,c=new ie,h=new A,u=[],f=[],d=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new Ke(u,3)),this.setAttribute("normal",new Ke(f,3)),this.setAttribute("uv",new Ke(d,2));function x(){for(let v=0;v<t;v++)p(v);p(r===!1?t:0),y(),m()}function p(v){h=e.getPointAt(v/t,h);let b=o.normals[v],P=o.binormals[v];for(let R=0;R<=i;R++){let E=R/i*Math.PI*2,I=Math.sin(E),z=-Math.cos(E);l.x=z*b.x+I*P.x,l.y=z*b.y+I*P.y,l.z=z*b.z+I*P.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function m(){for(let v=1;v<=t;v++)for(let b=1;b<=i;b++){let P=(i+1)*(v-1)+(b-1),R=(i+1)*v+(b-1),E=(i+1)*v+b,I=(i+1)*(v-1)+b;g.push(P,R,I),g.push(R,E,I)}}function y(){for(let v=0;v<=t;v++)for(let b=0;b<=i;b++)c.x=v/t,c.y=b/i,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new s(new RM[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var Xl=class extends Ht{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},At=class extends kn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zf,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},si=class extends At{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ie(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return pn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new fe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new fe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new fe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var ql=class extends kn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zf,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};function pl(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function CM(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function PM(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function wm(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function Qm(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}var Is=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},lf=class extends Is{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Fr,endingEnd:Fr}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Br:r=e,a=2*t-n;break;case Ml:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Br:o=e,l=2*n-t;break;case Ml:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(i-t),x=g*g,p=x*g,m=-f*p+2*f*x-f*g,y=(1+f)*p+(-1.5-2*f)*x+(-.5+f)*g+1,v=(-1-d)*p+(1.5+d)*x+.5*g,b=d*p-d*x;for(let P=0;P!==a;++P)r[P]=m*o[h+P]+y*o[c+P]+v*o[l+P]+b*o[u+P];return r}},Yl=class extends Is{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},cf=class extends Is{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},di=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=pl(t,this.TimeBufferType),this.values=pl(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:pl(e.times,Array),values:pl(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new cf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Yl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new lf(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Kr:t=this.InterpolantFactoryMethodDiscrete;break;case Zr:t=this.InterpolantFactoryMethodLinear;break;case mh:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Kr;case this.InterpolantFactoryMethodLinear:return Zr;case this.InterpolantFactoryMethodSmooth:return mh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&CM(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===mh,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{let u=a*n,f=u-n,d=u+n;for(let g=0;g!==n;++g){let x=t[u+g];if(x!==t[f+g]||x!==t[d+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};di.prototype.TimeBufferType=Float32Array;di.prototype.ValueBufferType=Float32Array;di.prototype.DefaultInterpolation=Zr;var Ls=class extends di{constructor(e,t,n){super(e,t,n)}};Ls.prototype.ValueTypeName="bool";Ls.prototype.ValueBufferType=Array;Ls.prototype.DefaultInterpolation=Kr;Ls.prototype.InterpolantFactoryMethodLinear=void 0;Ls.prototype.InterpolantFactoryMethodSmooth=void 0;var Kl=class extends di{};Kl.prototype.ValueTypeName="color";var rs=class extends di{};rs.prototype.ValueTypeName="number";var hf=class extends Is{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t),c=e*a;for(let h=c+a;c!==h;c+=4)Xt.slerpFlat(r,0,o,c-a,o,c,l);return r}},os=class extends di{InterpolantFactoryMethodLinear(e){return new hf(this.times,this.values,this.getValueSize(),e)}};os.prototype.ValueTypeName="quaternion";os.prototype.InterpolantFactoryMethodSmooth=void 0;var Ds=class extends di{constructor(e,t,n){super(e,t,n)}};Ds.prototype.ValueTypeName="string";Ds.prototype.ValueBufferType=Array;Ds.prototype.DefaultInterpolation=Kr;Ds.prototype.InterpolantFactoryMethodLinear=void 0;Ds.prototype.InterpolantFactoryMethodSmooth=void 0;var as=class extends di{};as.prototype.ValueTypeName="vector";var so=class{constructor(e="",t=-1,n=[],i=kf){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Ri(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(LM(n[o]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(di.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let h=PM(l);l=wm(l,1,h),c=wm(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new rs(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],h=c.name.match(r);if(h&&h.length>1){let u=h[1],f=i[u];f||(i[u]=f=[]),f.push(c)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,f,d,g,x){if(d.length!==0){let p=[],m=[];Qm(d,p,m,g),p.length!==0&&x.push(new u(f,p,m))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let u=0;u<c.length;u++){let f=c[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let d={},g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let x=0;x<f[g].morphTargets.length;x++)d[f[g].morphTargets[x]]=-1;for(let x in d){let p=[],m=[];for(let y=0;y!==f[g].morphTargets.length;++y){let v=f[g];p.push(v.time),m.push(v.morphTarget===x?1:0)}i.push(new rs(".morphTargetInfluence["+x+"]",p,m))}l=d.length*o}else{let d=".bones["+t[u].name+"]";n(as,d+".position",f,"pos",i),n(os,d+".quaternion",f,"rot",i),n(as,d+".scale",f,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function IM(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return rs;case"vector":case"vector2":case"vector3":case"vector4":return as;case"color":return Kl;case"quaternion":return os;case"bool":case"boolean":return Ls;case"string":return Ds}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function LM(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=IM(s.type);if(s.times===void 0){let t=[],n=[];Qm(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}var bs={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},uf=class{constructor(e,t,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],g=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}},DM=new uf,Li=class{constructor(e){this.manager=e!==void 0?e:DM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Li.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ji={},ff=class extends Error{constructor(e,t){super(e),this.response=t}},Ns=class extends Li{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=bs.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Ji[e]!==void 0){Ji[e].push({onLoad:t,onProgress:n,onError:i});return}Ji[e]=[],Ji[e].push({onLoad:t,onProgress:n,onError:i});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||c.body===void 0||c.body.getReader===void 0)return c;let h=Ji[e],u=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0,x=0,p=new ReadableStream({start(m){y();function y(){u.read().then(({done:v,value:b})=>{if(v)m.close();else{x+=b.byteLength;let P=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:d});for(let R=0,E=h.length;R<E;R++){let I=h[R];I.onProgress&&I.onProgress(P)}m.enqueue(b),y()}},v=>{m.error(v)})}}});return new Response(p)}else throw new ff(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{bs.add(e,c);let h=Ji[e];delete Ji[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onLoad&&d.onLoad(c)}}).catch(c=>{let h=Ji[e];if(h===void 0)throw this.manager.itemError(e),c;delete Ji[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var df=class extends Li{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=bs.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=Xo("img");function l(){h(),bs.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var Zl=class extends Li{constructor(e){super(e)}load(e,t,n,i){let r=new yn,o=new df(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},ro=class extends yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new fe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},$l=class extends ro{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new fe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},$h=new Ne,Em=new A,Am=new A,Qo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ie(512,512),this.map=null,this.mapPass=null,this.matrix=new Ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qo,this._frameExtents=new ie(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Em.setFromMatrixPosition(e.matrixWorld),t.position.copy(Em),Am.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Am),t.updateMatrixWorld(),$h.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix($h),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply($h)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},pf=class extends Qo{constructor(){super(new ln(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=$r*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},jl=class extends ro{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new pf}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Rm=new Ne,Uo=new A,jh=new A,mf=class extends Qo{constructor(){super(new ln(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ie(4,2),this._viewportCount=6,this._viewports=[new St(2,1,1,1),new St(0,1,1,1),new St(3,1,1,1),new St(1,1,1,1),new St(3,0,1,1),new St(1,0,1,1)],this._cubeDirections=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(0,1,0),new A(0,-1,0)],this._cubeUps=[new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,0,1),new A(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Uo.setFromMatrixPosition(e.matrixWorld),n.position.copy(Uo),jh.copy(n.position),jh.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(jh),n.updateMatrixWorld(),i.makeTranslation(-Uo.x,-Uo.y,-Uo.z),Rm.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rm)}},Us=class extends ro{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new mf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},gf=class extends Qo{constructor(){super(new Es(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},oo=class extends ro{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.shadow=new gf}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var ks=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder!="undefined")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Jl=class extends Li{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=bs.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return bs.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),bs.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});bs.add(e,l),r.manager.itemStart(e)}};var Ql=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Cm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Cm();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Cm(){return performance.now()}var xf=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,o;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,i=this.valueSize,r=e*i+i,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=t}else{o+=t;let a=t/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,i);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,o=i;r!==o;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){Xt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){let o=this._workIndex*r;Xt.multiplyQuaternionsFlat(e,o,e,t,e,n),Xt.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,r){let o=1-i;for(let a=0;a!==r;++a){let l=t+a;e[l]=e[l]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,r){for(let o=0;o!==r;++o){let a=t+o;e[a]=e[a]+e[n+o]*i}}},Vf="\\[\\]\\.:\\/",NM=new RegExp("["+Vf+"]","g"),Gf="[^"+Vf+"]",UM="[^"+Vf.replace("\\.","")+"]",kM=/((?:WC+[\/:])*)/.source.replace("WC",Gf),zM=/(WCOD+)?/.source.replace("WCOD",UM),OM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Gf),FM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Gf),BM=new RegExp("^"+kM+zM+OM+FM+"$"),HM=["material","materials","bones","map"],yf=class{constructor(e,t,n){let i=n||Ut.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ut=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(NM,"")}static parseTrackName(e){let t=BM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);HM.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[i];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ut.Composite=yf;Ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ut.prototype.GetterByBindingType=[Ut.prototype._getValue_direct,Ut.prototype._getValue_array,Ut.prototype._getValue_arrayElement,Ut.prototype._getValue_toArray];Ut.prototype.SetterByBindingTypeAndVersioning=[[Ut.prototype._setValue_direct,Ut.prototype._setValue_direct_setNeedsUpdate,Ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_array,Ut.prototype._setValue_array_setNeedsUpdate,Ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_arrayElement,Ut.prototype._setValue_arrayElement_setNeedsUpdate,Ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_fromArray,Ut.prototype._setValue_fromArray_setNeedsUpdate,Ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var vf=class{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;let r=t.tracks,o=r.length,a=new Array(o),l={endingStart:Fr,endingEnd:Fr};for(let c=0;c!==o;++c){let h=r[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=qg,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){let i=this._clip.duration,r=e._clip.duration,o=r/i,a=i/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let i=this._mixer,r=i.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);let l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);let o=this._updateTime(t),a=this._updateWeight(e);if(a>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Kg:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulateAdditive(a);break;case kf:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,i=this.time+e,r=this._loopCount,o=n===Yg;if(e===0)return r===-1?i:o&&(r&1)===1?t-i:i;if(n===Uf){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){let a=Math.floor(i/t);i-=t*a,r+=Math.abs(a);let l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){let i=this._interpolantSettings;n?(i.endingStart=Br,i.endingEnd=Br):(e?i.endingStart=this.zeroSlopeAtStart?Br:Fr:i.endingStart=Ml,t?i.endingEnd=this.zeroSlopeAtEnd?Br:Fr:i.endingEnd=Ml)}_scheduleFading(e,t,n){let i=this._mixer,r=i.time,o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=t,a[1]=r+e,l[1]=n,this}},VM=new Float32Array(1),ec=class extends ss{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName,h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==r;++u){let f=i[u],d=f.name,g=h[d];if(g!==void 0)++g.referenceCount,o[u]=g;else{if(g=o[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,d));continue}let x=t&&t._propertyBindings[u].binding.parsedPath;g=new xf(Ut.create(n,d,x),f.ValueTypeName,f.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,d),o[u]=g}a[u].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let i=this._actions,r=this._actionsByClip,o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{let a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;let u=a.actionByRoot,f=(e._localRoot||this._root).uuid;delete u[f],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let i=this._bindingsByRootAndName,r=this._bindings,o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new Yl(new Float32Array(2),new Float32Array(2),1,VM),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let i=t||this._root,r=i.uuid,o=typeof e=="string"?so.findByName(i,e):e,a=o!==null?o.uuid:e,l=this._actionsByClip[a],c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=kf),l!==void 0){let u=l.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;let h=new vf(this,o,t,n);return this._bindAction(h,c),this._addInactiveAction(h,a,r),h}existingAction(e,t){let n=t||this._root,i=n.uuid,r=typeof e=="string"?so.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,o);let a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){let o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){let c=o[a];this._deactivateAction(c);let h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(let o in r){let a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"169"}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="169");var zs={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var zn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},GM=new Es(-1,1,1,-1,0,1),Wf=class extends It{constructor(){super(),this.setAttribute("position",new Ke([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ke([0,2,0,0,2,0],2))}},WM=new Wf,Hi=class{constructor(e){this._mesh=new ye(WM,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,GM)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var co=class extends zn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Ht?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Yn.clone(e.uniforms),this.material=new Ht({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Hi(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var ia=class extends zn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}},ac=class extends zn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var lc=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new ie);this._width=n.width,this._height=n.height,t=new nn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Rn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new co(zs),this.copyPass.material.blending=hn,this.clock=new Ql}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let i=0,r=this.passes.length;i<r;i++){let o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}ia!==void 0&&(o instanceof ia?n=!0:o instanceof ac&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ie);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var cc=class extends zn{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new fe}render(e,t,n){let i=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}};var e0={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new fe(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var ho=class s extends zn{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new ie(e.x,e.y):new ie(256,256),this.clearColor=new fe(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new nn(r,o,{type:Rn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let f=new nn(r,o,{type:Rn});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let d=new nn(r,o,{type:Rn});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}let a=e0;this.highPassUniforms=Yn.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ht({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new ie(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new A(1,1,1),new A(1,1,1),new A(1,1,1),new A(1,1,1),new A(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=zs;this.copyUniforms=Yn.clone(h.uniforms),this.blendMaterial=new Ht({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:gn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new fe,this.oldClearAlpha=1,this.basic=new ct,this.fsQuad=new Hi(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new ie(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Ht({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ie(.5,.5)},direction:{value:new ie(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new Ht({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};ho.BlurDirectionX=new ie(1,0);ho.BlurDirectionY=new ie(0,1);var t0={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var hc=class extends zn{constructor(){super();let e=t0;this.uniforms=Yn.clone(e.uniforms),this.material=new Xl({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Hi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},lt.getTransfer(this._outputColorSpace)===Nt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===bf?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Sf?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Tf?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ea?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===wf?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Ef&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var sa={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ie},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Ne},cameraProjectionMatrixInverse:{value:new Ne},cameraWorldMatrix:{value:new Ne},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new A(-1,-1,-1)},sceneBoxMax:{value:new A(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;		
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif
		
		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {  
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {   
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}
		
		void main() {
			float depth = getDepth(vUv.xy);
			if (depth >= 1.0) {
				discard;
				return;
			}
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif
			
			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {
				
				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w); 
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));
				
				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));
				
				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);	

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}		

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);		
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},ra={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},uc={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function n0(s=5){let e=Math.floor(s)%2===0?Math.floor(s)+1:Math.floor(s),t=XM(e),n=t.length,i=new Uint8Array(n*4);for(let o=0;o<n;++o){let a=t[o],l=2*Math.PI*a/n,c=new A(Math.cos(l),Math.sin(l),0).normalize();i[o*4]=(c.x*.5+.5)*255,i[o*4+1]=(c.y*.5+.5)*255,i[o*4+2]=127,i[o*4+3]=255}let r=new Rs(i,e,e);return r.wrapS=xn,r.wrapT=xn,r.needsUpdate=!0,r}function XM(s){let e=Math.floor(s)%2===0?Math.floor(s)+1:Math.floor(s),t=e*e,n=Array(t).fill(0),i=Math.floor(e/2),r=e-1;for(let o=1;o<=t;){if(i===-1&&r===e?(r=e-2,i=0):(r===e&&(r=0),i<0&&(i=e-1)),n[i*e+r]!==0){r-=2,i++;continue}else n[i*e+r]=o++;r++,i--}return n}var oa={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:Xf(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ie},cameraProjectionMatrixInverse:{value:new Ne},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;
		
		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}
		
		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1    
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1    
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);
			
			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;
		
			denoised += w * neighborColor;
			totalWeight += w;
		}
		
		void main() {
			float depth = getDepth(vUv.xy);	
			vec3 viewNormal = getViewNormal(vUv);	
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);
		
			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}
		
			if (totalWeight > 0.) { 
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function Xf(s,e,t){let n=qM(s,e,t),i="vec3[SAMPLES](";for(let r=0;r<s;r++){let o=n[r];i+=`vec3(${o.x}, ${o.y}, ${o.z})${r<s-1?",":")"}`}return i}function qM(s,e,t){let n=[];for(let i=0;i<s;i++){let r=2*Math.PI*e*i/s,o=Math.pow(i/(s-1),t);n.push(new A(Math.cos(r),Math.sin(r),o))}return n}var fc=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,n){return e[0]*t+e[1]*n}dot3(e,t,n,i){return e[0]*t+e[1]*n+e[2]*i}dot4(e,t,n,i,r){return e[0]*t+e[1]*n+e[2]*i+e[3]*r}noise(e,t){let n,i,r,o=.5*(Math.sqrt(3)-1),a=(e+t)*o,l=Math.floor(e+a),c=Math.floor(t+a),h=(3-Math.sqrt(3))/6,u=(l+c)*h,f=l-u,d=c-u,g=e-f,x=t-d,p,m;g>x?(p=1,m=0):(p=0,m=1);let y=g-p+h,v=x-m+h,b=g-1+2*h,P=x-1+2*h,R=l&255,E=c&255,I=this.perm[R+this.perm[E]]%12,z=this.perm[R+p+this.perm[E+m]]%12,_=this.perm[R+1+this.perm[E+1]]%12,T=.5-g*g-x*x;T<0?n=0:(T*=T,n=T*T*this.dot(this.grad3[I],g,x));let k=.5-y*y-v*v;k<0?i=0:(k*=k,i=k*k*this.dot(this.grad3[z],y,v));let O=.5-b*b-P*P;return O<0?r=0:(O*=O,r=O*O*this.dot(this.grad3[_],b,P)),70*(n+i+r)}noise3d(e,t,n){let i,r,o,a,c=(e+t+n)*.3333333333333333,h=Math.floor(e+c),u=Math.floor(t+c),f=Math.floor(n+c),d=1/6,g=(h+u+f)*d,x=h-g,p=u-g,m=f-g,y=e-x,v=t-p,b=n-m,P,R,E,I,z,_;y>=v?v>=b?(P=1,R=0,E=0,I=1,z=1,_=0):y>=b?(P=1,R=0,E=0,I=1,z=0,_=1):(P=0,R=0,E=1,I=1,z=0,_=1):v<b?(P=0,R=0,E=1,I=0,z=1,_=1):y<b?(P=0,R=1,E=0,I=0,z=1,_=1):(P=0,R=1,E=0,I=1,z=1,_=0);let T=y-P+d,k=v-R+d,O=b-E+d,G=y-I+2*d,j=v-z+2*d,H=b-_+2*d,ee=y-1+3*d,W=v-1+3*d,Y=b-1+3*d,te=h&255,se=u&255,Xe=f&255,ot=this.perm[te+this.perm[se+this.perm[Xe]]]%12,q=this.perm[te+P+this.perm[se+R+this.perm[Xe+E]]]%12,Q=this.perm[te+I+this.perm[se+z+this.perm[Xe+_]]]%12,ve=this.perm[te+1+this.perm[se+1+this.perm[Xe+1]]]%12,ae=.6-y*y-v*v-b*b;ae<0?i=0:(ae*=ae,i=ae*ae*this.dot3(this.grad3[ot],y,v,b));let ke=.6-T*T-k*k-O*O;ke<0?r=0:(ke*=ke,r=ke*ke*this.dot3(this.grad3[q],T,k,O));let Ie=.6-G*G-j*j-H*H;Ie<0?o=0:(Ie*=Ie,o=Ie*Ie*this.dot3(this.grad3[Q],G,j,H));let Ze=.6-ee*ee-W*W-Y*Y;return Ze<0?a=0:(Ze*=Ze,a=Ze*Ze*this.dot3(this.grad3[ve],ee,W,Y)),32*(i+r+o+a)}noise4d(e,t,n,i){let r=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,u,f,d,g,x=(e+t+n+i)*l,p=Math.floor(e+x),m=Math.floor(t+x),y=Math.floor(n+x),v=Math.floor(i+x),b=(p+m+y+v)*c,P=p-b,R=m-b,E=y-b,I=v-b,z=e-P,_=t-R,T=n-E,k=i-I,O=z>_?32:0,G=z>T?16:0,j=_>T?8:0,H=z>k?4:0,ee=_>k?2:0,W=T>k?1:0,Y=O+G+j+H+ee+W,te=o[Y][0]>=3?1:0,se=o[Y][1]>=3?1:0,Xe=o[Y][2]>=3?1:0,ot=o[Y][3]>=3?1:0,q=o[Y][0]>=2?1:0,Q=o[Y][1]>=2?1:0,ve=o[Y][2]>=2?1:0,ae=o[Y][3]>=2?1:0,ke=o[Y][0]>=1?1:0,Ie=o[Y][1]>=1?1:0,Ze=o[Y][2]>=1?1:0,Mt=o[Y][3]>=1?1:0,at=z-te+c,L=_-se+c,_n=T-Xe+c,st=k-ot+c,dt=z-q+2*c,Oe=_-Q+2*c,Rt=T-ve+2*c,Fe=k-ae+2*c,C=z-ke+3*c,S=_-Ie+3*c,F=T-Ze+3*c,Z=k-Mt+3*c,J=z-1+4*c,K=_-1+4*c,Se=T-1+4*c,le=k-1+4*c,pe=p&255,rt=m&255,ne=y&255,me=v&255,Be=a[pe+a[rt+a[ne+a[me]]]]%32,He=a[pe+te+a[rt+se+a[ne+Xe+a[me+ot]]]]%32,Me=a[pe+q+a[rt+Q+a[ne+ve+a[me+ae]]]]%32,pt=a[pe+ke+a[rt+Ie+a[ne+Ze+a[me+Mt]]]]%32,Ye=a[pe+1+a[rt+1+a[ne+1+a[me+1]]]]%32,vt=.6-z*z-_*_-T*T-k*k;vt<0?h=0:(vt*=vt,h=vt*vt*this.dot4(r[Be],z,_,T,k));let D=.6-at*at-L*L-_n*_n-st*st;D<0?u=0:(D*=D,u=D*D*this.dot4(r[He],at,L,_n,st));let he=.6-dt*dt-Oe*Oe-Rt*Rt-Fe*Fe;he<0?f=0:(he*=he,f=he*he*this.dot4(r[Me],dt,Oe,Rt,Fe));let X=.6-C*C-S*S-F*F-Z*Z;X<0?d=0:(X*=X,d=X*X*this.dot4(r[pt],C,S,F,Z));let $=.6-J*J-K*K-Se*Se-le*le;return $<0?g=0:($*=$,g=$*$*this.dot4(r[Ye],J,K,Se,le)),27*(h+u+f+d+g)}};var aa=class s extends zn{constructor(e,t,n,i,r,o,a){super(),this.width=n!==void 0?n:512,this.height=i!==void 0?i:512,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=n0(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new nn(this.width,this.height,{type:Rn}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Ht({defines:Object.assign({},sa.defines),uniforms:Yn.clone(sa.uniforms),vertexShader:sa.vertexShader,fragmentShader:sa.fragmentShader,blending:hn,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new ql,this.normalMaterial.blending=hn,this.pdMaterial=new Ht({defines:Object.assign({},oa.defines),uniforms:Yn.clone(oa.uniforms),vertexShader:oa.vertexShader,fragmentShader:oa.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Ht({defines:Object.assign({},ra.defines),uniforms:Yn.clone(ra.uniforms),vertexShader:ra.vertexShader,fragmentShader:ra.fragmentShader,blending:hn}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Ht({uniforms:Yn.clone(zs.uniforms),vertexShader:zs.vertexShader,fragmentShader:zs.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:nc,blendDst:ao,blendEquation:li,blendSrcAlpha:tc,blendDstAlpha:ao,blendEquationAlpha:li}),this.blendMaterial=new Ht({uniforms:Yn.clone(uc.uniforms),vertexShader:uc.vertexShader,fragmentShader:uc.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Mf,blendSrc:nc,blendDst:ao,blendEquation:li,blendSrcAlpha:tc,blendDstAlpha:ao,blendEquationAlpha:li}),this.fsQuad=new Hi(null),this.originalClearColor=new fe,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new As,this.depthTexture.format=ws,this.depthTexture.type=Ts,this.normalRenderTarget=new nn(this.width,this.height,{minFilter:cn,magFilter:cn,type:Rn,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,i=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=i,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=i,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Xf(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case s.OUTPUT.Off:break;case s.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=hn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=hn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=hn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=hn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=hn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(e,t,n,i,r){e.getClearColor(this.originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i!=null&&(e.setClearColor(i),e.setClearAlpha(r||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}renderOverride(e,t,n,i,r){e.getClearColor(this.originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i=t.clearColor||i,r=t.clearAlpha||r,i!=null&&(e.setClearColor(i),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){t.set(n,n.visible),(n.isPoints||n.isLine)&&(n.visible=!1)})}restoreVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){let i=t.get(n);n.visible=i}),t.clear()}generateNoise(e=64){let t=new fc,n=e*e*4,i=new Uint8Array(n);for(let o=0;o<e;o++)for(let a=0;a<e;a++){let l=o,c=a;i[(o*e+a)*4]=(t.noise(l,c)*.5+.5)*255,i[(o*e+a)*4+1]=(t.noise(l+e,c)*.5+.5)*255,i[(o*e+a)*4+2]=(t.noise(l,c+e)*.5+.5)*255,i[(o*e+a)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}let r=new Rs(i,e,e,Xn,Ci);return r.wrapS=xn,r.wrapT=xn,r.needsUpdate=!0,r}};aa.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var et=null,or=null,la=null,dc=null,$e={},qf=!1,i0=1,Ue=44100;function rn(s){let e=s>>>0;return()=>(e=e*1664525+1013904223>>>0,e/4294967296)}function gt(s,e,t=1){let n=Math.floor(s*Ue),i=et.createBuffer(t,n,Ue);for(let r=0;r<t;r++){let o=i.getChannelData(r);e(o,n,r)}return i}function Kn(s,e){let t=0;for(let n=0;n<s.length;n++)t+=e*(s[n]-t),s[n]=t}function ca(s,e){let t=0,n=0;for(let i=0;i<s.length;i++){let r=s[i];t=e*(t+r-n),n=r,s[i]=t}}function mt(s,e=.9){let t=0;for(let n of s)t=Math.max(t,Math.abs(n));if(t>0)for(let n=0;n<s.length;n++)s[n]*=e/t}function pc(s,e,t,n,i,r=60){return gt(s,(o,a)=>{let l=rn(i),c=0,h=new Float32Array(a);for(let f=0;f<a;f++){let d=f/Ue,g=Math.exp(-d*t),x=Math.exp(-d*n),p=l()*2-1;h[f]=p*(g*.9+x*.35),c+=2*Math.PI*(r+140*Math.exp(-d*40))/Ue,o[f]=Math.sin(c)*Math.exp(-d*e)*1.1}let u=h.slice();Kn(u,.12),ca(h,.7);for(let f=0;f<a;f++)o[f]+=u[f]*1.4+h[f]*.6;for(let f=0;f<a;f++)o[f]=Math.tanh(o[f]*1.8);mt(o)})}function YM(){$e.shout=gt(.55,(s,e)=>{let t=rn(41),n=0;for(let i=0;i<e;i++){let r=i/Ue,o=r<.2?Math.sin(Math.PI*r/.2):r>.26?Math.sin(Math.PI*Math.min(1,(r-.26)/.29)):0,a=(r<.22?190:150)*(1+.03*Math.sin(r*40));n+=2*Math.PI*a/Ue;let l=0;for(let c=1;c<14;c++){let h=a*c,u=r<.22?700:520;l+=Math.sin(n*c)*Math.exp(-Math.abs(h-u)/260)+Math.sin(n*c)*.5*Math.exp(-Math.abs(h-1500)/400)}s[i]=(l+(t()*2-1)*.35)*o}for(let i=0;i<e;i++)s[i]=Math.tanh(s[i]*.9);mt(s,.7)}),$e.windup=gt(.62,(s,e)=>{let t=0;for(let n=0;n<e;n++){let i=n/Ue;t+=2*Math.PI*(260+1400*Math.pow(i/.62,1.6))/Ue,s[n]=(Math.sin(t)+.3*Math.sign(Math.sin(t*.5)))*(.4+.6*i/.62)*(.75+.25*Math.sin(i*90))*Math.min(1,(.62-i)*30)}mt(s,.6)}),$e.beep=gt(.09,(s,e)=>{for(let t=0;t<e;t++){let n=t/Ue;s[t]=Math.sign(Math.sin(2*Math.PI*1900*n))*.5*Math.min(1,(.09-n)*80)*Math.min(1,n*400)}Kn(s,.5),mt(s,.5)}),$e.shell=gt(.25,(s,e)=>{for(let t=0;t<e;t++){let n=t/Ue;s[t]=Math.sin(2*Math.PI*4200*n)*Math.exp(-n*30)+Math.sin(2*Math.PI*6800*n)*Math.exp(-n*45)*.6+Math.sin(2*Math.PI*2900*n)*Math.exp(-n*25)*.5+(n>.07&&n<.2?Math.sin(2*Math.PI*4400*n)*Math.exp(-(n-.07)*40)*.4:0)}mt(s,.5)}),$e.streak=gt(.9,(s,e)=>{let t=0;for(let n=0;n<e;n++){let i=n/Ue;t+=2*Math.PI*(55+90*Math.exp(-i*18))/Ue;let r=Math.sin(t)*Math.exp(-i*7)*1.3;for(let[o,a]of[[523,.03],[659,.1],[784,.17],[1047,.24]])i>a&&(r+=Math.sin(2*Math.PI*o*(i-a))*Math.exp(-(i-a)*5)*.3*(1+.3*Math.sign(Math.sin(2*Math.PI*o*2*(i-a)))));s[n]=Math.tanh(r*1.4)}mt(s,.75)}),$e.rifle=pc(.32,28,60,9,1,70),$e.shotgun=pc(.7,12,30,4.5,2,48),$e.minigun=pc(.16,45,90,18,3,90),$e.enemyShot=pc(.28,30,70,10,4,80),$e.boom=gt(2.2,(s,e)=>{let t=rn(5),n=0;for(let i=0;i<e;i++){let r=i/Ue;n+=2*Math.PI*(38+60*Math.exp(-r*6))/Ue,s[i]=(t()*2-1)*Math.exp(-r*2.2)*.9+Math.sin(n)*Math.exp(-r*3)*1.2}Kn(s,.06);for(let i=0;i<e;i++)s[i]=Math.tanh(s[i]*3);mt(s)}),$e.flash=gt(1.6,(s,e)=>{let t=rn(6);for(let n=0;n<e;n++){let i=n/Ue;s[n]=(t()*2-1)*Math.exp(-i*7)+Math.sin(2*Math.PI*3200*i)*.25*Math.exp(-i*1.6)}mt(s,.8)}),$e.glass=gt(.9,(s,e)=>{let t=rn(7),n=[];for(let i=0;i<26;i++)n.push([t()*.5,2500+t()*5e3,8+t()*30]);for(let i=0;i<e;i++){let r=i/Ue,o=(t()*2-1)*Math.exp(-r*14)*.6;for(let[a,l,c]of n)r>a&&(o+=Math.sin(2*Math.PI*l*(r-a))*Math.exp(-(r-a)*c)*.18);s[i]=o}ca(s,.9),mt(s,.7)}),$e.hit=gt(.07,(s,e)=>{for(let t=0;t<e;t++){let n=t/Ue;s[t]=Math.sin(2*Math.PI*1900*n)*Math.exp(-n*60)}mt(s,.5)}),$e.kill=gt(.16,(s,e)=>{for(let t=0;t<e;t++){let n=t/Ue;s[t]=(Math.sin(2*Math.PI*1300*n)+Math.sin(2*Math.PI*2600*n)*.5)*Math.exp(-n*22)}mt(s,.55)}),$e.ric=gt(.25,(s,e)=>{let t=rn(8);for(let n=0;n<e;n++){let i=n/Ue;s[n]=Math.sin(2*Math.PI*(4200-i*9e3)*i)*Math.exp(-i*16)*.5+(t()*2-1)*Math.exp(-i*60)*.5}mt(s,.5)}),$e.impact=gt(.12,(s,e)=>{let t=rn(9);for(let n=0;n<e;n++){let i=n/Ue;s[n]=(t()*2-1)*Math.exp(-i*45)}Kn(s,.3),mt(s,.6)}),$e.metal=gt(.4,(s,e)=>{let t=rn(19);for(let n=0;n<e;n++){let i=n/Ue;s[n]=(Math.sin(2*Math.PI*820*i)+Math.sin(2*Math.PI*1370*i)*.6+(t()-.5)*Math.exp(-i*80))*Math.exp(-i*11)}mt(s,.5)}),$e.click=gt(.05,(s,e)=>{let t=rn(10);for(let n=0;n<e;n++){let i=n/Ue;s[n]=(t()*2-1)*Math.exp(-i*200)+Math.sin(2*Math.PI*3e3*i)*Math.exp(-i*120)*.5}mt(s,.5)}),$e.reload=gt(.9,(s,e)=>{let t=rn(11),n=[[.05,1],[.45,.7],[.62,1.2]];for(let i=0;i<e;i++){let r=i/Ue,o=0;for(let[a,l]of n)r>a&&(o+=((t()*2-1)*Math.exp(-(r-a)*90)+Math.sin(2*Math.PI*1800*(r-a))*Math.exp(-(r-a)*70)*.4)*l);s[i]=o}mt(s,.5)}),$e.pump=gt(.45,(s,e)=>{let t=rn(12);for(let n=0;n<e;n++){let i=n/Ue,r=0;for(let o of[.02,.22])i>o&&(r+=(t()*2-1)*Math.exp(-(i-o)*60)+Math.sin(2*Math.PI*700*(i-o))*Math.exp(-(i-o)*40)*.6);s[n]=r}Kn(s,.5),mt(s,.6)}),$e.kick=gt(.8,(s,e)=>{let t=rn(13),n=0;for(let i=0;i<e;i++){let r=i/Ue;n+=2*Math.PI*(55+80*Math.exp(-r*20))/Ue,s[i]=Math.sin(n)*Math.exp(-r*7)+(t()*2-1)*Math.exp(-r*18)*.7}for(let i=0;i<e;i++)s[i]=Math.tanh(s[i]*2.5);mt(s)}),$e.whoosh=gt(1.2,(s,e)=>{let t=rn(14);for(let n=0;n<e;n++){let i=n/Ue;s[n]=(t()*2-1)*Math.sin(Math.PI*i/1.2)**2}Kn(s,.04),mt(s,.7);for(let n=0;n<e;n++){let i=n/Ue;s[n]+=Math.sin(2*Math.PI*(90-50*i)*i)*.4*Math.sin(Math.PI*i/1.2)}mt(s,.7)}),$e.step=gt(.09,(s,e)=>{let t=rn(15);for(let n=0;n<e;n++){let i=n/Ue;s[n]=(t()*2-1)*Math.exp(-i*70)}Kn(s,.15),mt(s,.35)}),$e.hurt=gt(.25,(s,e)=>{let t=rn(16),n=0;for(let i=0;i<e;i++){let r=i/Ue;n+=2*Math.PI*(120-r*200)/Ue,s[i]=Math.sin(n)*Math.exp(-r*14)+(t()*2-1)*Math.exp(-r*40)*.4}mt(s,.6)}),$e.pickup=gt(.3,(s,e)=>{for(let t=0;t<e;t++){let n=t/Ue,i=n<.1?880:1320;s[t]=Math.sin(2*Math.PI*i*n)*Math.exp(-(n%.1)*12)*.5}mt(s,.45)}),$e.alarm=gt(1.4,(s,e)=>{for(let t=0;t<e;t++){let n=t/Ue,i=700+300*Math.sin(2*Math.PI*.72*n);s[t]=Math.sign(Math.sin(2*Math.PI*i*n))*.25}Kn(s,.2),mt(s,.4)}),$e.siren=gt(14,(s,e)=>{let t=(c,h)=>{let u=(c+h)%14;if(u<7||u>=10.5){let g=(u<7?u:u-10.5)%3.5/3.5,x=g<.42?Math.sin(Math.PI/2*g/.42):Math.cos(Math.PI/2*(g-.42)/.58);return 620+660*x*x*(3-2*x)*.5+330*x}let f=(u-7)*3.1%1;return 680+560*(f<.55?f/.55:1-(f-.55)/.45)},n=0,i=0,r=2*Math.PI*5.5/Ue,o=Math.floor(.08*Ue),a=new Float32Array(e+o);for(let c=0;c<e+o;c++){let h=c/Ue,u=t(h,0),f=t(h,5.3)*.93,d=1+.004*Math.sin(c*r);n+=2*Math.PI*u*d/Ue,i+=2*Math.PI*f/Ue;let g=x=>Math.sin(x)+Math.sin(x*2)*.16+Math.sin(x*3)*.05;a[c]=Math.tanh(g(n)*1.15)+Math.tanh(g(i))*.38}Kn(a,.28),Kn(a,.34),ca(a,.985);for(let c=0;c<e;c++)s[c]=a[c];for(let c=0;c<o;c++){let h=c/o;s[c]=a[c]*h+a[e+c]*(1-h)}let l=s.slice();for(let[c,h]of[[95,.32],[180,.22],[310,.14],[470,.08]]){let u=Math.floor(c/1e3*Ue);for(let f=0;f<e;f++)s[f]+=l[(f-u+e)%e]*h}mt(s,.42)}),$e.engine=gt(2,(s,e)=>{let t=rn(17),n=0;for(let i=0;i<e;i++){let r=i/Ue;n+=2*Math.PI*42/Ue,s[i]=Math.sin(n)*.6+Math.sin(n*2.03)*.3+(t()-.5)*.3}Kn(s,.08),mt(s,.5)}),$e.brake=gt(1,(s,e)=>{let t=rn(18);for(let n=0;n<e;n++){let i=n/Ue;s[n]=((t()*2-1)*.4+Math.sin(2*Math.PI*2100*i)*.3)*Math.sin(Math.PI*i)}ca(s,.8),mt(s,.4)}),$e.star=gt(.6,(s,e)=>{for(let t=0;t<e;t++){let n=t/Ue;s[t]=(Math.sin(2*Math.PI*1046*n)+Math.sin(2*Math.PI*1568*n)*.6+Math.sin(2*Math.PI*2093*n)*.3)*Math.exp(-n*5)}mt(s,.5)}),$e.ui=gt(.08,(s,e)=>{for(let t=0;t<e;t++){let n=t/Ue;s[t]=Math.sin(2*Math.PI*1500*n)*Math.exp(-n*50)}mt(s,.35)}),$e.spin=gt(.6,(s,e)=>{let t=0;for(let n=0;n<e;n++){let i=n/Ue;t+=2*Math.PI*(80+260*i/.6)/Ue,s[n]=Math.sign(Math.sin(t))*.3*Math.min(1,i*8)}Kn(s,.1),mt(s,.4)}),$e.slash=gt(.22,(s,e)=>{let t=rn(77);for(let n=0;n<e;n++){let i=n/Ue;s[n]=(t()*2-1)*Math.sin(Math.PI*i/.22)**3}ca(s,.35),mt(s,.55)}),$e.roar=gt(1.1,(s,e)=>{let t=rn(91),n=0;for(let i=0;i<e;i++){let r=i/Ue;n+=2*Math.PI*(70+30*Math.sin(r*7)+25*r)/Ue,s[i]=(Math.sign(Math.sin(n))*.5+Math.sin(n*2.01)*.4+(t()*2-1)*.5)*Math.min(1,r*10)*Math.min(1,(1.1-r)*4)}Kn(s,.12);for(let i=0;i<e;i++)s[i]=Math.tanh(s[i]*2.2);mt(s,.75)}),$e.laser=gt(.9,(s,e)=>{let t=0;for(let n=0;n<e;n++){let i=n/Ue;t+=2*Math.PI*(900+900*i/.9)/Ue,s[n]=Math.sin(t)*.5*(.3+.7*i/.9)*(Math.sin(i*2*Math.PI*14)>0?1:.3)}mt(s,.35)}),$e.bossLaugh=gt(1.3,(s,e)=>{let t=0;for(let n=0;n<e;n++){let i=n/Ue,r=Math.floor(i/.22),o=i-r*.22;t+=2*Math.PI*(150-r*9+30*Math.exp(-o*10))/Ue,s[n]=(Math.sin(t)+.5*Math.sin(t*2)+.3*Math.sin(t*3))*Math.exp(-o*9)*(r<5?1:0)}Kn(s,.3),mt(s,.6)})}var Qt={init(){if(et){et.state==="suspended"&&et.resume();return}try{et=new(window.AudioContext||window.webkitAudioContext)}catch{return}or=et.createGain(),or.gain.value=qf?0:.8;let s=et.createDynamicsCompressor();s.threshold.value=-14,s.ratio.value=4,or.connect(s),s.connect(et.destination),la=et.createGain(),la.connect(or),dc=et.createGain(),dc.gain.value=.32,dc.connect(or),YM()},get ready(){return!!et},setMuted(s){qf=s,or&&(or.gain.value=s?0:.8)},get muted(){return qf},setRate(s){i0=s},play(s,e=1,t=1,n=0){if(!et||!$e[s]||e<.01)return null;let i=et.createBufferSource();i.buffer=$e[s],i.playbackRate.value=t*i0;let r=et.createGain();r.gain.value=e;let o=r;if(n&&et.createStereoPanner){let a=et.createStereoPanner();a.pan.value=Math.max(-1,Math.min(1,n)),r.connect(a),o=a}return i.connect(r),o.connect(la),i.start(),{s:i,g:r}},loop(s,e=1){if(!et||!$e[s])return null;let t=et.createBufferSource();t.buffer=$e[s],t.loop=!0;let n=et.createGain();return n.gain.value=e,t.connect(n),n.connect(la),t.start(),{s:t,g:n,stop(){try{t.stop()}catch{}},vol(i){n.gain.setTargetAtTime(i,et.currentTime,.1)}}},loop3d(s,e=1){if(!et||!$e[s])return null;let t=et.createBufferSource();t.buffer=$e[s],t.loop=!0;let n=et.createGain();n.gain.value=0;let i=et.createBiquadFilter();return i.type="lowpass",i.frequency.value=6e3,i.Q.value=.5,t.connect(n),n.connect(i),i.connect(la),t.start(),n.gain.setTargetAtTime(e,et.currentTime,.3),{s:t,g:n,f:i,stop(){try{n.gain.setTargetAtTime(0,et.currentTime,.15),t.stop(et.currentTime+.8)}catch{}},vol(r){n.gain.setTargetAtTime(r,et.currentTime,.1)},upd(r,o,a=.35){let l=et.currentTime;n.gain.setTargetAtTime(Math.max(0,r),l,a),i.frequency.setTargetAtTime(Math.max(80,o),l,a)}}},music:{on:!1,step:0,next:0,intensity:1,timer:null},startMusic(){if(!et||this.music.on)return;let s=this.music;s.on=!0,s.next=et.currentTime+.1,s.step=0;let e=[0,0,12,0,0,0,10,0,0,0,12,0,7,0,5,3],t=41.2,n=()=>{if(s.on){for(;s.next<et.currentTime+.25;){let i=s.next,r=s.step%16,o=Math.floor(s.step/16)%4,a=s.intensity;r%4===0&&this._kick(i),a>.5&&(r===4||r===12)&&this._snare(i),a>0&&this._hat(i,r%2?.05:.09),a>.3&&this._bass(i,t*Math.pow(2,(e[r]+[0,0,3,-2][o])/12),.11),a>1.2&&r%8===6&&this._stab(i,t*4*Math.pow(2,[0,0,3,-2][o]/12)),s.next+=60/132/4,s.step++}s.timer=setTimeout(n,60)}};n()},stopMusic(){this.music.on=!1,clearTimeout(this.music.timer)},_env(s,e,t,n){let i=et.createGain();return i.gain.setValueAtTime(0,s),i.gain.linearRampToValueAtTime(n,s+e),i.gain.exponentialRampToValueAtTime(.001,s+e+t),i.connect(dc),i},_kick(s){let e=et.createOscillator();e.frequency.setValueAtTime(140,s),e.frequency.exponentialRampToValueAtTime(42,s+.12),e.connect(this._env(s,.002,.3,.9)),e.start(s),e.stop(s+.35)},_noise(){this._nb||(this._nb=gt(.5,e=>{let t=rn(99);for(let n=0;n<e.length;n++)e[n]=t()*2-1}));let s=et.createBufferSource();return s.buffer=this._nb,s},_snare(s){let e=this._noise(),t=et.createBiquadFilter();t.type="bandpass",t.frequency.value=1800,e.connect(t),t.connect(this._env(s,.002,.18,.5)),e.start(s),e.stop(s+.25)},_hat(s,e){let t=this._noise(),n=et.createBiquadFilter();n.type="highpass",n.frequency.value=7e3,t.connect(n),n.connect(this._env(s,.001,.04,e)),t.start(s),t.stop(s+.06)},_bass(s,e,t){let n=et.createOscillator();n.type="sawtooth",n.frequency.value=e;let i=et.createBiquadFilter();i.type="lowpass",i.frequency.setValueAtTime(900,s),i.frequency.exponentialRampToValueAtTime(160,s+.15),n.connect(i),i.connect(this._env(s,.005,.16,t)),n.start(s),n.stop(s+.2)},_stab(s,e){for(let t of[1,1.5,2]){let n=et.createOscillator();n.type="square",n.frequency.value=e*t,n.connect(this._env(s,.005,.2,.035)),n.start(s),n.stop(s+.25)}}};function r0(s,e=!1){let t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new It,c=0;for(let h=0;h<s.length;++h){let u=s[h],f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(e){let d;if(t)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(t){let h=0,u=[];for(let f=0;f<s.length;++f){let d=s[f].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+h);h+=s[f].attributes.position.count}l.setIndex(u)}for(let h in r){let u=s0(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let x=0;x<o[h].length;++x)d.push(o[h][x][f]);let g=s0(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function s0(s){let e,t,n,i=-1,r=0;for(let c=0;c<s.length;++c){let h=s[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new qt(o,t,n),l=0;for(let c=0;c<s.length;++c){let h=s[c];if(h.isInterleavedBufferAttribute){let u=l/t;for(let f=0,d=h.count;f<d;f++)for(let g=0;g<t;g++){let x=h.getComponent(f,g);a.setComponent(f+u,g,x)}}else o.set(h.array,l);l+=h.count*t}return i!==void 0&&(a.gpuType=i),a}function Yf(s,e){if(e===Vm)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===ta||e===sc){let t=s.getIndex();if(t===null){let o=[],a=s.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===ta)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}function KM(s){let e=s>>>0||1;return()=>(e^=e<<13,e>>>=0,e^=e>>17,e^=e<<5,e>>>=0,e/4294967296)}function De(s,e=s){let t=document.createElement("canvas");return t.width=s,t.height=e,[t,t.getContext("2d")]}function Tt(s,e,t,n,i,r=1,o=.08){let a=s.getImageData(0,0,e,t),l=a.data,c=e*t*i/(r*r),h=o,u=1-h;for(let f=0;f<c;f++){let d=n()*255|0,g=n()*e|0,x=n()*t|0,p=d*h;for(let m=x,y=Math.min(t,x+r);m<y;m++)for(let v=g,b=Math.min(e,g+r);v<b;v++){let P=(m*e+v)*4,R=l[P+3]/255;if(R>=.999)l[P]=p+l[P]*u,l[P+1]=p+l[P+1]*u,l[P+2]=p+l[P+2]*u;else{let E=h+R*u;if(E<=0)continue;let I=R*u;l[P]=(p+l[P]*I)/E,l[P+1]=(p+l[P+1]*I)/E,l[P+2]=(p+l[P+2]*I)/E,l[P+3]=E*255}}}s.putImageData(a,0,0)}function on(s,e,t,n,i,r,o,a){for(let l=0;l<i;l++){let c=n()*e,h=n()*t,u=o+n()*(a-o),f=s.createRadialGradient(c,h,0,c,h,u);f.addColorStop(0,r),f.addColorStop(1,"rgba(0,0,0,0)"),s.fillStyle=f,s.fillRect(c-u,h-u,u*2,u*2)}}var Kf={};function ze(s,e,t,n){if(Kf[s])return Kf[s];let i=n(),r=new Fi(i);return r.wrapS=r.wrapT=xn,r.colorSpace=Lt,r.anisotropy=t,r.repeat.set(e[0],e[1]),Kf[s]=r,r}function Zn(s,e=4){let t=KM(s.length*977+s.charCodeAt(0)*31);switch(s){case"asphalt":return ze(s,[1,1],e,()=>{let[n,i]=De(512);i.fillStyle="#26282c",i.fillRect(0,0,512,512),Tt(i,512,512,t,3,2,.12),on(i,512,512,t,30,"rgba(10,10,14,.25)",20,90),on(i,512,512,t,12,"rgba(90,95,105,.12)",20,60),i.strokeStyle="rgba(0,0,0,.35)",i.lineWidth=1.5;for(let r=0;r<6;r++){i.beginPath();let o=t()*512,a=t()*512;i.moveTo(o,a);for(let l=0;l<8;l++)o+=(t()-.5)*60,a+=(t()-.5)*60,i.lineTo(o,a);i.stroke()}return n});case"sidewalk":return ze(s,[1,1],e,()=>{let[n,i]=De(512);i.fillStyle="#7d7b77",i.fillRect(0,0,512,512),Tt(i,512,512,t,2,2,.1),on(i,512,512,t,20,"rgba(40,40,40,.15)",20,80),i.strokeStyle="rgba(30,30,30,.55)",i.lineWidth=4;for(let r=0;r<=512;r+=128)i.beginPath(),i.moveTo(r,0),i.lineTo(r,512),i.stroke(),i.beginPath(),i.moveTo(0,r),i.lineTo(512,r),i.stroke();return n});case"marble":return ze(s,[1,1],e,()=>{let[n,i]=De(1024),r=["#c4baa9","#bdb2a0","#c8bfb0","#b8ad9a","#c1b6a4"];for(let o=0;o<4;o++)for(let a=0;a<4;a++){i.fillStyle=r[t()*r.length|0],i.fillRect(a*256,o*256,256,256),i.save(),i.beginPath(),i.rect(a*256,o*256,256,256),i.clip();for(let c=0;c<5;c++){let h=a*256+t()*256,u=o*256+t()*256,f=40+t()*90,d=i.createRadialGradient(h,u,0,h,u,f);d.addColorStop(0,t()<.5?"rgba(150,130,105,.10)":"rgba(255,250,240,.12)"),d.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=d,i.fillRect(h-f,u-f,f*2,f*2)}let l=t()*Math.PI;for(let c=0;c<6;c++){i.strokeStyle=c<2?"rgba(120,100,80,.30)":"rgba(140,125,110,.16)",i.lineWidth=.4+t()*(c<2?2.2:1.2),i.beginPath();let h=a*256+t()*256,u=o*256+t()*256,f=Math.cos(l),d=Math.sin(l);h-=f*200,u-=d*200,i.moveTo(h,u);for(let g=0;g<26;g++)h+=f*18+(t()-.5)*16,u+=d*18+(t()-.5)*16,i.lineTo(h,u);i.stroke()}i.restore()}Tt(i,1024,1024,t,.6,2,.035),i.strokeStyle="rgba(70,60,50,.55)",i.lineWidth=2;for(let o=0;o<=1024;o+=256)i.beginPath(),i.moveTo(o,0),i.lineTo(o,1024),i.stroke(),i.beginPath(),i.moveTo(0,o),i.lineTo(1024,o),i.stroke();for(let o=0;o<=4;o++)for(let a=0;a<=4;a++){let l=a*256,c=o*256,h=34;i.fillStyle="#1f2a26",i.beginPath(),i.moveTo(l,c-h),i.lineTo(l+h,c),i.lineTo(l,c+h),i.lineTo(l-h,c),i.closePath(),i.fill(),i.strokeStyle="rgba(200,170,110,.55)",i.lineWidth=2,i.stroke(),i.strokeStyle="rgba(160,190,170,.18)",i.lineWidth=1,i.beginPath(),i.moveTo(l-h*.6,c-4),i.lineTo(l+h*.5,c+6),i.stroke()}return n});case"marblecol":return ze(s,[1,1],e,()=>{let[n,i]=De(512);i.fillStyle="#ddd5c6",i.fillRect(0,0,512,512),Tt(i,512,512,t,1,2,.05);for(let r=0;r<16;r++){i.strokeStyle=r%3?"rgba(120,105,90,.22)":"rgba(170,140,95,.35)",i.lineWidth=.5+t()*2.2,i.beginPath();let o=t()*512,a=-10;i.moveTo(o,a);for(let l=0;l<20;l++)o+=(t()-.5)*46,a+=22+t()*12,i.lineTo(o,a);i.stroke()}return n});case"carpet":return ze(s,[1,1],e,()=>{let[n,i]=De(512);i.fillStyle="#2e3a4c",i.fillRect(0,0,512,512),Tt(i,512,512,t,6,1,.14),i.strokeStyle="rgba(0,0,0,.25)",i.lineWidth=2;for(let r=0;r<=512;r+=256)i.beginPath(),i.moveTo(r,0),i.lineTo(r,512),i.stroke(),i.beginPath(),i.moveTo(0,r),i.lineTo(512,r),i.stroke();return on(i,512,512,t,10,"rgba(0,0,0,.12)",30,90),n});case"wall":return ze(s,[1,1],e,()=>{let[n,i]=De(512),r=i.createLinearGradient(0,0,0,512);r.addColorStop(0,"#cfc6b4"),r.addColorStop(1,"#bdb29c"),i.fillStyle=r,i.fillRect(0,0,512,512),Tt(i,512,512,t,2,2,.05),i.fillStyle="#5a3a26",i.fillRect(0,360,512,152),i.fillStyle="#3e2718",i.fillRect(0,356,512,8),i.fillRect(0,500,512,12),i.strokeStyle="rgba(0,0,0,.35)",i.lineWidth=3;for(let o=0;o<512;o+=128)i.strokeRect(o+14,380,100,108);return Tt(i,512,152,t,2,1,.06),n});case"office":return ze(s,[1,1],e,()=>{let[n,i]=De(512);i.fillStyle="#8a9196",i.fillRect(0,0,512,512);for(let r=0;r<512;r+=2){let o=t();i.fillStyle=`rgba(${o<.5?"255,255,255":"0,0,0"},${.02+t()*.03})`,i.fillRect(r,0,1,470)}Tt(i,512,512,t,2,2,.05),on(i,512,470,t,8,"rgba(60,50,40,.06)",40,120);for(let r=0;r<512;r+=128)i.fillStyle="rgba(0,0,0,.08)",i.fillRect(r,0,2,470);return i.fillStyle="#4b5359",i.fillRect(0,470,512,42),i.fillStyle="rgba(255,255,255,.08)",i.fillRect(0,0,512,6),n});case"concrete":return ze(s,[1,1],e,()=>{let[n,i]=De(512);i.fillStyle="#8a8882",i.fillRect(0,0,512,512),on(i,512,512,t,40,"rgba(40,38,35,.12)",10,70),Tt(i,512,512,t,3,2,.08),i.strokeStyle="rgba(0,0,0,.25)",i.lineWidth=2,i.strokeRect(0,0,512,256),i.strokeRect(0,256,512,256);for(let[r,o]of[[30,30],[480,30],[30,226],[480,226],[30,286],[480,286],[30,482],[480,482]])i.fillStyle="rgba(0,0,0,.3)",i.beginPath(),i.arc(r,o,6,0,7),i.fill();return n});case"brick":return ze(s,[1,1],e,()=>{let[n,i]=De(512);i.fillStyle="#3a2b25",i.fillRect(0,0,512,512);for(let r=0;r<16;r++)for(let o=-1;o<9;o++){let a=r%2?32:0,l=t();i.fillStyle=`rgb(${120+l*50|0},${55+l*25|0},${42+l*18|0})`,i.fillRect(o*64+a+2,r*32+2,60,28)}return Tt(i,512,512,t,3,2,.1),on(i,512,512,t,14,"rgba(0,0,0,.2)",30,90),n});case"facade":return ze(s,[1,1],e,()=>{let[n,i]=De(512);i.fillStyle="#aaa294",i.fillRect(0,0,512,512);for(let o=0;o<512;o+=64)for(let a=o/64%2*-64;a<512;a+=128){let l=t()*18-9|0;i.fillStyle=`rgb(${168+l*.6},${160+l*.6},${146+l*.6})`,i.fillRect(a+1,o+1,126,62)}Tt(i,512,512,t,2.5,2,.07),Tt(i,512,512,t,1,1,.1);for(let o=0;o<26;o++){let a=t()*512,l=3+t()*14,c=60+t()*260,h=t()*200,u=i.createLinearGradient(0,h,0,h+c);u.addColorStop(0,"rgba(40,36,30,.22)"),u.addColorStop(1,"rgba(40,36,30,0)"),i.fillStyle=u,i.fillRect(a,h,l,c)}i.strokeStyle="rgba(70,64,56,.45)",i.lineWidth=2;for(let o=0;o<512;o+=64){i.beginPath(),i.moveTo(0,o),i.lineTo(512,o),i.stroke();for(let a=o/64%2*64;a<512;a+=128)i.beginPath(),i.moveTo(a,o),i.lineTo(a,o+64),i.stroke()}on(i,512,512,t,12,"rgba(50,46,38,.14)",30,120);let r=i.createLinearGradient(0,380,0,512);return r.addColorStop(0,"rgba(20,20,22,0)"),r.addColorStop(1,"rgba(20,20,22,.35)"),i.fillStyle=r,i.fillRect(0,380,512,132),n});case"steel":return ze(s,[1,1],e,()=>{let[n,i]=De(512);i.fillStyle="#7b8086",i.fillRect(0,0,512,512);for(let r=0;r<512;r++){let o=110+t()*40|0;i.fillStyle=`rgba(${o},${o+4},${o+8},.35)`,i.fillRect(0,r,512,1)}i.strokeStyle="rgba(20,22,25,.6)",i.lineWidth=3;for(let r=0;r<=512;r+=256)i.beginPath(),i.moveTo(r,0),i.lineTo(r,512),i.stroke(),i.beginPath(),i.moveTo(0,r),i.lineTo(512,r),i.stroke();for(let r=16;r<512;r+=64)for(let o of[12,244,268,500])i.fillStyle="rgba(30,30,30,.6)",i.beginPath(),i.arc(r,o,4,0,7),i.fill(),i.fillStyle="rgba(220,220,220,.4)",i.beginPath(),i.arc(r-1,o-1,2,0,7),i.fill();return n});case"ceiling":return ze(s,[1,1],e,()=>{let[n,i]=De(256);i.fillStyle="#b4b2ab",i.fillRect(0,0,256,256),Tt(i,256,256,t,4,1,.1);for(let r=0;r<900;r++)i.fillStyle="rgba(60,58,52,.25)",i.fillRect(t()*256,t()*256,1.5,1.5);return i.strokeStyle="#8d8a84",i.lineWidth=4,i.strokeRect(0,0,256,256),n});case"window":return ze(s,[1,1],e,()=>{let[n,i]=De(256);i.fillStyle="#20242b",i.fillRect(0,0,256,256);for(let r=0;r<4;r++)for(let o=0;o<4;o++){let a=t()<.45;i.fillStyle=a?`rgb(${200+t()*55|0},${160+t()*60|0},${90+t()*50|0})`:"#141820",i.fillRect(o*64+8,r*64+8,48,44)}return n});case"hazard":return ze(s,[1,1],e,()=>{let[n,i]=De(256,64);i.fillStyle="#e8b712",i.fillRect(0,0,256,64),i.fillStyle="#111";for(let r=-64;r<256;r+=64)i.beginPath(),i.moveTo(r,64),i.lineTo(r+32,0),i.lineTo(r+64,0),i.lineTo(r+32,64),i.fill();return n});case"sign":return ze(s,[1,1],e,()=>{let[n,i]=De(1024,192);return i.fillStyle="#122039",i.fillRect(0,0,1024,192),i.strokeStyle="#d9b24a",i.lineWidth=8,i.strokeRect(8,8,1008,176),i.fillStyle="#f2d47a",i.font="bold 120px Georgia, serif",i.textAlign="center",i.textBaseline="middle",i.fillText("CITY BANK",512,100),n});case"vaultsign":return ze(s,[1,1],e,()=>{let[n,i]=De(512,128);return i.fillStyle="#300",i.fillRect(0,0,512,128),i.fillStyle="#ff3b2f",i.font="bold 72px Arial",i.textAlign="center",i.textBaseline="middle",i.fillText("VAULT",256,66),n});case"glow":return ze(s,[1,1],1,()=>{let[n,i]=De(128),r=i.createRadialGradient(64,64,0,64,64,64);return r.addColorStop(0,"rgba(255,255,255,1)"),r.addColorStop(.25,"rgba(255,255,255,.55)"),r.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=r,i.fillRect(0,0,128,128),n});case"spark":return ze(s,[1,1],1,()=>{let[n,i]=De(64),r=i.createRadialGradient(32,32,0,32,32,32);return r.addColorStop(0,"rgba(255,255,240,1)"),r.addColorStop(.3,"rgba(255,200,90,.8)"),r.addColorStop(1,"rgba(255,120,20,0)"),i.fillStyle=r,i.fillRect(0,0,64,64),n});case"smoke":return ze(s,[1,1],1,()=>{let[n,i]=De(128);for(let r=0;r<18;r++){let o=40+t()*48,a=40+t()*48,l=20+t()*26,c=i.createRadialGradient(o,a,0,o,a,l);c.addColorStop(0,"rgba(255,255,255,.35)"),c.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=c,i.fillRect(0,0,128,128)}return n});case"flash":return ze(s,[1,1],1,()=>{let[n,i]=De(128);i.translate(64,64);for(let o=0;o<7;o++){i.rotate(Math.PI*2/7+t()*.3);let a=i.createLinearGradient(0,0,60,0);a.addColorStop(0,"rgba(255,240,200,1)"),a.addColorStop(1,"rgba(255,150,40,0)"),i.fillStyle=a,i.beginPath(),i.moveTo(0,-7),i.lineTo(62,0),i.lineTo(0,7),i.fill()}let r=i.createRadialGradient(0,0,0,0,0,30);return r.addColorStop(0,"rgba(255,255,230,1)"),r.addColorStop(1,"rgba(255,180,60,0)"),i.fillStyle=r,i.fillRect(-64,-64,128,128),n});case"hole":return ze(s,[1,1],1,()=>{let[n,i]=De(64),r=i.createRadialGradient(32,32,0,32,32,30);return r.addColorStop(0,"rgba(10,10,10,1)"),r.addColorStop(.3,"rgba(20,20,20,.9)"),r.addColorStop(.5,"rgba(40,40,40,.4)"),r.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=r,i.fillRect(0,0,64,64),n});case"blood":return ze(s,[1,1],1,()=>{let[n,i]=De(128),r=(o,a,l,c)=>{let h=i.createRadialGradient(o,a,0,o,a,l);h.addColorStop(0,`rgba(105,8,8,${c})`),h.addColorStop(.7,`rgba(140,14,12,${c*.85})`),h.addColorStop(1,"rgba(140,14,12,0)"),i.fillStyle=h,i.beginPath(),i.arc(o,a,l,0,7),i.fill()};r(64,64,26,.9);for(let o=0;o<14;o++){let a=t()*6.28,l=20+t()*36;r(64+Math.cos(a)*l,64+Math.sin(a)*l,2+t()*7,.85)}for(let o=0;o<5;o++){let a=t()*6.28;i.strokeStyle="rgba(125,12,10,.75)",i.lineWidth=2+t()*3,i.beginPath(),i.moveTo(64,64),i.lineTo(64+Math.cos(a)*(30+t()*30),64+Math.sin(a)*(30+t()*30)),i.stroke()}return n});case"scorch":return ze(s,[1,1],1,()=>{let[n,i]=De(128),r=i.createRadialGradient(64,64,0,64,64,64);return r.addColorStop(0,"rgba(0,0,0,.9)"),r.addColorStop(.6,"rgba(10,8,5,.5)"),r.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=r,i.fillRect(0,0,128,128),n});case"hcarpet":return ze(s,[1,1],e,()=>{let[n,i]=De(512);i.fillStyle="#5e0f16",i.fillRect(0,0,512,512),Tt(i,512,512,t,6,1,.12),i.strokeStyle="#b48a3c",i.lineWidth=5;for(let r=0;r<512;r+=128)for(let o=0;o<512;o+=128)i.beginPath(),i.moveTo(o+64,r+10),i.lineTo(o+118,r+64),i.lineTo(o+64,r+118),i.lineTo(o+10,r+64),i.closePath(),i.stroke(),i.fillStyle="#2a0609",i.beginPath(),i.arc(o+64,r+64,16,0,7),i.fill(),i.fillStyle="#c99a48",i.beginPath(),i.arc(o+64,r+64,6,0,7),i.fill(),i.fillStyle="#3b080c",i.fillRect(o-4,r-4,8,8);return Tt(i,512,512,t,3,2,.07),on(i,512,512,t,10,"rgba(0,0,0,.14)",40,120),n});case"hrug":return ze(s,[1,1],e,()=>{let[n,i]=De(512);i.fillStyle="#6a121a",i.fillRect(0,0,512,512),i.fillStyle="#1d2a44",i.fillRect(18,18,476,476),i.fillStyle="#7d1720",i.fillRect(40,40,432,432),i.strokeStyle="#d1a659",i.lineWidth=4,i.strokeRect(30,30,452,452),i.strokeRect(48,48,416,416);for(let r=0;r<24;r++){let o=r/24*6.283;i.fillStyle=r%2?"#d1a659":"#1d2a44",i.beginPath(),i.ellipse(256+Math.cos(o)*120,256+Math.sin(o)*120,26,10,o,0,7),i.fill()}i.fillStyle="#1d2a44",i.beginPath(),i.arc(256,256,84,0,7),i.fill(),i.strokeStyle="#d1a659",i.lineWidth=6,i.stroke(),i.fillStyle="#d1a659",i.beginPath();for(let r=0;r<16;r++){let o=r/16*6.283,a=r%2?30:60;i.lineTo(256+Math.cos(o)*a,256+Math.sin(o)*a)}i.fill();for(let[r,o]of[[90,90],[422,90],[90,422],[422,422]])i.fillStyle="#d1a659",i.beginPath(),i.moveTo(r,o-26),i.lineTo(r+26,o),i.lineTo(r,o+26),i.lineTo(r-26,o),i.fill();return Tt(i,512,512,t,5,1,.12),n});case"damask":return ze(s,[1,1],e,()=>{let[n,i]=De(512);i.fillStyle="#6b1d24",i.fillRect(0,0,512,512),Tt(i,512,360,t,2,2,.04);let r=(o,a)=>{i.fillStyle="rgba(214,160,90,.26)",i.beginPath(),i.ellipse(o,a,16,40,0,0,7),i.fill();for(let l of[-1,1])i.beginPath(),i.ellipse(o+l*24,a+6,10,24,l*.6,0,7),i.fill(),i.beginPath(),i.ellipse(o+l*14,a-34,6,14,-l*.5,0,7),i.fill();i.fillStyle="rgba(40,6,10,.35)",i.beginPath(),i.ellipse(o,a,6,18,0,0,7),i.fill()};for(let o=40;o<360;o+=128)for(let a=0;a<=512;a+=128)r(a+((o/128|0)%2?64:0),o);for(let o=0;o<512;o+=64)i.fillStyle="rgba(0,0,0,.05)",i.fillRect(o,0,2,356);i.fillStyle="#c9a24a",i.fillRect(0,350,512,8),i.fillStyle="#3c2214",i.fillRect(0,358,512,154),i.fillStyle="#25140b",i.fillRect(0,498,512,14),i.strokeStyle="rgba(0,0,0,.45)",i.lineWidth=3;for(let o=0;o<512;o+=128)i.strokeRect(o+14,376,100,110),i.strokeStyle="rgba(255,220,170,.08)",i.strokeRect(o+17,379,94,104),i.strokeStyle="rgba(0,0,0,.45)";return Tt(i,512,154,t,2,1,.06),n});case"hwood":return ze(s,[1,1],e,()=>{let[n,i]=De(512);i.fillStyle="#4a2a18",i.fillRect(0,0,512,512);for(let r=0;r<512;r+=2){let o=t();i.fillStyle=`rgba(${o<.5?"20,8,2":"120,70,40"},${.05+t()*.08})`,i.fillRect(r,0,1+t()*2,512)}for(let r=0;r<40;r++){i.strokeStyle="rgba(25,10,4,.25)",i.lineWidth=1,i.beginPath();let o=t()*512,a=0;for(i.moveTo(o,a);a<512;a+=16)o+=(t()-.5)*4,i.lineTo(o,a);i.stroke()}i.fillStyle="rgba(0,0,0,.4)";for(let r=0;r<512;r+=128)i.fillRect(r,0,3,512);return n});case"parquet":return ze(s,[1,1],e,()=>{let[n,i]=De(512);i.fillStyle="#5a3620",i.fillRect(0,0,512,512);for(let r=-64;r<576;r+=32)for(let o=-64;o<576;o+=64){let a=t();i.save(),i.translate(o+r/32%2*32,r),i.rotate((r/32%2?1:-1)*Math.PI/4),i.fillStyle=`rgb(${110+a*40|0},${66+a*24|0},${36+a*16|0})`,i.fillRect(0,0,88,20),i.strokeStyle="rgba(20,10,4,.6)",i.lineWidth=1.5,i.strokeRect(0,0,88,20),i.restore()}return Tt(i,512,512,t,2,1,.06),n});case"hsign":return ze(s,[1,1],e,()=>{let[n,i]=De(1024,192);return i.fillStyle="#16070a",i.fillRect(0,0,1024,192),i.strokeStyle="#ff2a3a",i.lineWidth=6,i.shadowColor="#ff2a3a",i.shadowBlur=24,i.strokeRect(14,14,996,164),i.font="bold 118px Georgia, serif",i.textAlign="center",i.textBaseline="middle",i.fillStyle="#ff4656",i.fillText("RED  HOTEL",512,100),i.shadowBlur=0,i.fillStyle="#ffd0d4",i.fillText("RED  HOTEL",512,100),i.fillStyle="#ff6a76",i.font="bold 26px Arial",i.fillText("\u2605 \u2605 \u2605 \u2605",512,160),n});case"blade":return ze(s,[1,1],e,()=>{let[n,i]=De(160,640);return i.fillStyle="#16070a",i.fillRect(0,0,160,640),i.strokeStyle="#ffb040",i.lineWidth=5,i.strokeRect(8,8,144,624),i.font="bold 104px Georgia, serif",i.textAlign="center",i.textBaseline="middle",i.shadowColor="#ff2a3a",i.shadowBlur=22,"HOTEL".split("").forEach((r,o)=>{i.fillStyle="#ff3646",i.fillText(r,80,76+o*120),i.fillStyle="#ffe0e2",i.fillText(r,80,76+o*120)}),n});case"keys":return ze(s,[1,1],e,()=>{let[n,i]=De(512,256);i.fillStyle="#2e170c",i.fillRect(0,0,512,256);for(let r=0;r<6;r++)for(let o=0;o<14;o++){let a=8+o*36,l=8+r*41;i.fillStyle="#1a0c05",i.fillRect(a,l,32,36),i.fillStyle="#c9a24a",i.font="9px Arial",i.fillText(String(100+r*100+o+1),a+6,l+10),t()<.6&&(i.fillStyle="#d8b860",i.fillRect(a+13,l+14,6,16),i.fillStyle=t()<.5?"#8a1a20":"#e8e0d0",i.fillRect(a+10,l+24,12,8))}return n});case"exitsign":return ze(s,[1,1],e,()=>{let[n,i]=De(256,96);return i.fillStyle="#0c5a2a",i.fillRect(0,0,256,96),i.fillStyle="#e8fff0",i.font="bold 54px Arial",i.textAlign="center",i.textBaseline="middle",i.fillText("EXIT \u25B8",128,50),n});case"city":return ze(s,[1,1],e,()=>{let[n,i]=De(512,256),r=i.createLinearGradient(0,0,0,256);r.addColorStop(0,"#0a1020"),r.addColorStop(1,"#2a2240"),i.fillStyle=r,i.fillRect(0,0,512,256);for(let o=0;o<26;o++){let a=t()*512,l=20+t()*50,c=60+t()*170;i.fillStyle=`rgb(${12+t()*14|0},${14+t()*14|0},${24+t()*20|0})`,i.fillRect(a,256-c,l,c);for(let h=256-c+6;h<250;h+=9)for(let u=a+4;u<a+l-4;u+=7)t()<.35&&(i.fillStyle=t()<.8?"#e8c27a":"#9ad0ff",i.fillRect(u,h,3,4))}i.fillStyle="rgba(255,60,60,.9)";for(let o=0;o<5;o++)i.fillRect(t()*512,40+t()*60,3,3);return n});case"corrug":return ze(s,[1,1],e,()=>{let[n,i]=De(512);i.fillStyle="#b8b8b8",i.fillRect(0,0,512,512);for(let r=0;r<512;r+=32){let o=i.createLinearGradient(r,0,r+32,0);o.addColorStop(0,"#8c8c8c"),o.addColorStop(.18,"#d4d4d4"),o.addColorStop(.5,"#e2e2e2"),o.addColorStop(.62,"#b0b0b0"),o.addColorStop(.82,"#7a7a7a"),o.addColorStop(1,"#8c8c8c"),i.fillStyle=o,i.fillRect(r,0,32,512)}Tt(i,512,512,t,3,2,.1),on(i,512,512,t,26,"rgba(110,52,22,.38)",8,46),on(i,512,512,t,14,"rgba(30,26,22,.3)",20,80);for(let r=0;r<40;r++){let o=t()*512,a=t()*512,l=20+t()*90;i.fillStyle="rgba(90,40,18,"+(.12+t()*.25)+")",i.fillRect(o,a,2+t()*3,l)}return i.fillStyle="rgba(40,40,40,.5)",i.fillRect(0,0,512,10),i.fillRect(0,502,512,10),n});case"hull":return ze(s,[1,1],e,()=>{let[n,i]=De(512);i.fillStyle="#9a9a9a",i.fillRect(0,0,512,512),Tt(i,512,512,t,3,2,.08),i.strokeStyle="rgba(40,40,40,.55)",i.lineWidth=3;for(let r=0;r<512;r+=128)i.beginPath(),i.moveTo(0,r),i.lineTo(512,r),i.stroke();for(let r=0;r<512;r+=256)for(let o=0;o<512;o+=128)i.beginPath(),i.moveTo(r+o/128%2*128,o),i.lineTo(r+o/128%2*128,o+128),i.stroke();i.fillStyle="rgba(60,60,60,.5)";for(let r=6;r<512;r+=128)for(let o=4;o<512;o+=16)i.fillRect(o,r,3,3);for(let r=0;r<70;r++){let o=t()*512,a=t()*512,l=30+t()*140,c=i.createLinearGradient(0,a,0,a+l);c.addColorStop(0,"rgba(120,52,20,.55)"),c.addColorStop(1,"rgba(120,52,20,0)"),i.fillStyle=c,i.fillRect(o,a,2+t()*6,l)}return on(i,512,512,t,20,"rgba(100,46,20,.35)",10,50),n});case"deck":return ze(s,[1,1],e,()=>{let[n,i]=De(512);i.fillStyle="#5c6a5a",i.fillRect(0,0,512,512),Tt(i,512,512,t,3,2,.1),i.fillStyle="rgba(30,36,30,.45)";for(let r=0;r<512;r+=16)for(let o=r/16%2*8;o<512;o+=16)i.save(),i.translate(o+4,r+4),i.rotate((o+r)/8%2?.6:-.6),i.fillRect(-4,-1,8,2.4),i.restore();return i.strokeStyle="rgba(20,20,20,.6)",i.lineWidth=3,i.strokeRect(0,0,512,512),on(i,512,512,t,24,"rgba(120,70,30,.3)",10,60),on(i,512,512,t,12,"rgba(20,20,20,.35)",20,70),n});case"quay":return ze(s,[1,1],e,()=>{let[n,i]=De(512);i.fillStyle="#6c6a66",i.fillRect(0,0,512,512),Tt(i,512,512,t,4,2,.12),on(i,512,512,t,40,"rgba(20,20,20,.22)",12,80),i.strokeStyle="rgba(25,25,25,.7)",i.lineWidth=3,i.strokeRect(1,1,510,510),i.beginPath(),i.moveTo(256,0),i.lineTo(256,512),i.stroke();for(let r=0;r<18;r++){i.strokeStyle="rgba(30,30,30,.4)",i.lineWidth=1,i.beginPath();let o=t()*512,a=t()*512;i.moveTo(o,a);for(let l=0;l<6;l++)o+=(t()-.5)*40,a+=(t()-.5)*40,i.lineTo(o,a);i.stroke()}return on(i,512,512,t,8,"rgba(10,12,16,.5)",30,90),n});case"waves":return ze(s,[1,1],e,()=>{let[n,i]=De(256);i.fillStyle="#808080",i.fillRect(0,0,256,256);for(let r=0;r<260;r++){let o=t()*256,a=t()*256,l=6+t()*26,c=i.createRadialGradient(o,a,0,o,a,l),h=t()<.5?"rgba(255,255,255,.18)":"rgba(0,0,0,.18)";c.addColorStop(0,h),c.addColorStop(1,"rgba(128,128,128,0)"),i.fillStyle=c;for(let u of[-256,0,256])for(let f of[-256,0,256])i.fillRect(o-l+u,a-l+f,l*2,l*2)}return n});case"portsign":return ze(s,[1,1],e,()=>{let[n,i]=De(1024,192);return i.fillStyle="#0a1a2c",i.fillRect(0,0,1024,192),i.strokeStyle="#f0b020",i.lineWidth=8,i.strokeRect(8,8,1008,176),i.fillStyle="#f2f4f8",i.font='900 86px Impact, "Arial Black", sans-serif',i.textAlign="center",i.textBaseline="middle",i.fillText("CASPIAN CARGO TERMINAL",512,82),i.fillStyle="#f0b020",i.font="bold 34px Arial",i.fillText("GATE 3 \xB7 AUTHORIZED PERSONNEL ONLY",512,150),n});case"shipname":return ze(s,[1,1],e,()=>{let[n,i]=De(1024,128);return i.fillStyle="rgba(0,0,0,0)",i.clearRect(0,0,1024,128),i.fillStyle="#e8e8e0",i.font='900 96px Impact, "Arial Black", sans-serif',i.textAlign="center",i.textBaseline="middle",i.fillText("M/V KHAZAR STAR",512,66),n});case"stencil":return ze(s,[1,1],e,()=>{let[n,i]=De(512,256);return i.clearRect(0,0,512,256),i.fillStyle="rgba(240,240,236,.92)",i.font="900 64px Arial Black, Impact, sans-serif",i.fillText("KHZU 418277",20,90),i.font="bold 30px Arial",i.fillText("MAX GROSS 30,480 KG",22,150),i.fillText("TARE 2,200 KG",22,190),Tt(i,512,256,t,2,3,.15),n});case"painting":return ze(s,[1,1],e,()=>{let[n,i]=De(256,192);i.fillStyle="#8a6a2a",i.fillRect(0,0,256,192),i.fillStyle="#3a2a1a",i.fillRect(10,10,236,172);let r=i.createLinearGradient(0,14,0,178);r.addColorStop(0,"#d89a5a"),r.addColorStop(.55,"#a65a3a"),r.addColorStop(1,"#2a3a2a"),i.fillStyle=r,i.fillRect(16,16,224,160),i.fillStyle="#f4d090",i.beginPath(),i.arc(170,80,18,0,7),i.fill(),i.fillStyle="#2c3424",i.beginPath(),i.moveTo(16,176);for(let o=16;o<=240;o+=16)i.lineTo(o,120+Math.sin(o*.05)*14+t()*8);return i.lineTo(240,176),i.fill(),Tt(i,256,192,t,3,2,.08),n});case"mtile":return ze(s,[1,1],e,()=>{let[n,i]=De(512);i.fillStyle="#7d7a72",i.fillRect(0,0,512,512);for(let r=0;r<8;r++)for(let o=-1;o<5;o++){let a=o*128+r%2*64,l=r*64,c=228+(t()*18|0),h=i.createLinearGradient(0,l,0,l+60);h.addColorStop(0,`rgb(${c},${c},${c-6})`),h.addColorStop(.5,`rgb(${c-8},${c-8},${c-14})`),h.addColorStop(1,`rgb(${c-30},${c-30},${c-34})`),i.fillStyle=h,i.fillRect(a+3,l+3,122,58)}return Tt(i,512,512,t,2,2,.06),on(i,512,512,t,16,"rgba(70,60,40,.22)",20,70),i.fillStyle="rgba(60,50,40,.25)",i.fillRect(0,480,512,32),n});case"mfloor":return ze(s,[1,1],e,()=>{let[n,i]=De(512);for(let r=0;r<4;r++)for(let o=0;o<4;o++){let a=(o+r)%2;i.fillStyle=a?"#4a4c52":"#8c8a84",i.fillRect(o*128,r*128,128,128)}Tt(i,512,512,t,5,2,.14);for(let r=0;r<900;r++)i.fillStyle=`rgba(${t()<.5?"255,255,255":"0,0,0"},${.08+t()*.14})`,i.fillRect(t()*512,t()*512,2+t()*3,2+t()*3);i.strokeStyle="rgba(20,20,20,.55)",i.lineWidth=3;for(let r=0;r<=512;r+=128)i.beginPath(),i.moveTo(r,0),i.lineTo(r,512),i.stroke(),i.beginPath(),i.moveTo(0,r),i.lineTo(512,r),i.stroke();return on(i,512,512,t,20,"rgba(30,26,20,.25)",20,90),n});case"metrosign":return ze(s,[1,1],e,()=>{let[n,i]=De(1024,256);return i.fillStyle="#0d1420",i.fillRect(0,0,1024,256),i.fillStyle="#d0202a",i.beginPath(),i.arc(128,128,100,0,7),i.fill(),i.fillStyle="#fff",i.font='900 150px Impact, "Arial Black", sans-serif',i.textAlign="center",i.textBaseline="middle",i.fillText("M",128,134),i.textAlign="left",i.font='900 104px Impact, "Arial Black", sans-serif',i.fillText("METRO",262,96),i.fillStyle="#e8c24a",i.font="bold 54px Arial",i.fillText("28 MAY STANSIYASI",266,192),n});case"mstation":return ze(s,[1,1],e,()=>{let[n,i]=De(1024,160);return i.fillStyle="#1a3a7a",i.fillRect(0,0,1024,160),i.fillStyle="#fff",i.font='900 92px Impact, "Arial Black", sans-serif',i.textAlign="center",i.textBaseline="middle",i.fillText("28 MAY",400,84),i.fillStyle="#d0202a",i.beginPath(),i.arc(80,80,56,0,7),i.fill(),i.fillStyle="#fff",i.font="900 80px Impact",i.fillText("M",80,84),i.font="bold 40px Arial",i.fillStyle="#e8c24a",i.fillText("\u2192 PLATFORMS \xB7 QATARLAR",790,84),n});case"mposter":return ze(s,[1,1],e,()=>{let[n,i]=De(256,384),r=i.createLinearGradient(0,0,256,384);return r.addColorStop(0,"#f05a28"),r.addColorStop(.5,"#a01e50"),r.addColorStop(1,"#1c1440"),i.fillStyle=r,i.fillRect(0,0,256,384),i.fillStyle="rgba(255,255,255,.9)",i.beginPath(),i.arc(128,150,70,0,7),i.fill(),i.fillStyle="#1c1440",i.font="900 54px Impact",i.textAlign="center",i.fillText("BAKU",128,168),i.fillStyle="#fff",i.font="900 40px Impact",i.fillText("CITY FEST",128,290),i.font="bold 20px Arial",i.fillText("NOV 14 \xB7 BOULEVARD",128,330),i.strokeStyle="#ddd",i.lineWidth=10,i.strokeRect(5,5,246,374),Tt(i,256,384,t,2,2,.08),n});case"tunnel":return ze(s,[1,1],e,()=>{let[n,i]=De(512);i.fillStyle="#3e3c38",i.fillRect(0,0,512,512),Tt(i,512,512,t,4,2,.16),on(i,512,512,t,30,"rgba(10,10,8,.4)",20,90),i.fillStyle="#222";for(let r of[150,172,194])i.fillRect(0,r,512,9);i.fillStyle="rgba(0,0,0,.5)";for(let r=0;r<512;r+=128)i.fillRect(r,0,14,512);return i.fillStyle="#6a2a1a",i.fillRect(0,300,512,6),n});case"trainside":return ze(s,[1,1],e,()=>{let[n,i]=De(512),r=i.createLinearGradient(0,0,0,512);r.addColorStop(0,"#c8ccd0"),r.addColorStop(.5,"#e4e6e8"),r.addColorStop(1,"#9a9ea4"),i.fillStyle=r,i.fillRect(0,0,512,512),i.fillStyle="#1d4fa0",i.fillRect(0,300,512,46),i.fillStyle="#d0202a",i.fillRect(0,350,512,12),i.strokeStyle="rgba(40,40,40,.35)",i.lineWidth=2;for(let o=0;o<512;o+=64)i.beginPath(),i.moveTo(o,0),i.lineTo(o,512),i.stroke();return Tt(i,512,512,t,2,2,.06),on(i,512,512,t,12,"rgba(40,36,30,.22)",20,80),n});case"tseat":return ze(s,[1,1],e,()=>{let[n,i]=De(256);i.fillStyle="#1f3c78",i.fillRect(0,0,256,256);for(let r=0;r<260;r++)i.fillStyle=`rgba(${t()<.5?"230,190,60":"200,40,40"},.5)`,i.fillRect(t()*256,t()*256,3,3);return Tt(i,256,256,t,6,1,.2),n});case"empscreen":return ze(s,[1,1],e,()=>{let[n,i]=De(256,128);return i.fillStyle="#080c08",i.fillRect(0,0,256,128),i.fillStyle="#ff3020",i.font='900 64px "Courier New", monospace',i.textAlign="center",i.textBaseline="middle",i.fillText("EMP",128,52),i.font="bold 22px monospace",i.fillStyle="#ffb030",i.fillText("ARMED \xB7 3 LINES",128,104),n})}if(s.startsWith("num"))return ze(s,[1,1],e,()=>{let[n,i]=De(128,64);return i.fillStyle="#c9a24a",i.fillRect(0,0,128,64),i.fillStyle="#2a1608",i.fillRect(4,4,120,56),i.fillStyle="#e8c870",i.font="bold 40px Georgia",i.textAlign="center",i.textBaseline="middle",i.fillText(s.slice(3),64,34),n});throw new Error("tex "+s)}var Zf={},ZM={asphalt:[2.2,.22,.95,1],sidewalk:[2.5,.55,.9,1],marble:[1.4,.7,.1,0],marblecol:[.6,.35,.12,0],carpet:[3,1,.85,0],wall:[1.4,.75,.9,1],office:[1.2,.8,.7,0],concrete:[2.4,.75,.95,1],brick:[3.2,.95,.8,1],facade:[2.4,.95,.75,1],steel:[1.8,.55,.35,0],ceiling:[1.6,.95,.85,1],hcarpet:[3,1,.85,0],hrug:[2.4,1,.85,0],damask:[1.2,.8,.55,1],hwood:[1.6,.55,.3,0],parquet:[1.8,.6,.25,0],corrug:[3.2,.75,.45,0],hull:[2.2,.8,.5,1],deck:[2.6,.85,.55,0],quay:[2.6,.5,.95,1],waves:[2.2,.05,.12,1]};function o0(s){if(Zf[s])return Zf[s];let e=ZM[s];if(!e)return null;let t=Zn(s).image,n=t.width,i=t.height,r=t.getContext("2d").getImageData(0,0,n,i).data,o=new Float32Array(n*i);for(let p=0;p<n*i;p++)o[p]=(r[p*4]*.3+r[p*4+1]*.59+r[p*4+2]*.11)/255;let a=o;if(e[3]){a=new Float32Array(n*i);for(let p=0;p<i;p++)for(let m=0;m<n;m++){let y=0;for(let v=-1;v<=1;v++)for(let b=-1;b<=1;b++)y+=o[(p+v+i)%i*n+(m+b+n)%n];a[p*n+m]=y/9}}let[l,c]=De(n,i),[h,u]=De(n,i),f=c.createImageData(n,i),d=u.createImageData(n,i),g=e[0];for(let p=0;p<i;p++)for(let m=0;m<n;m++){let y=(T,k)=>a[(k+i)%i*n+(T+n)%n],v=y(m+1,p-1)+2*y(m+1,p)+y(m+1,p+1)-(y(m-1,p-1)+2*y(m-1,p)+y(m-1,p+1)),b=y(m-1,p+1)+2*y(m,p+1)+y(m+1,p+1)-(y(m-1,p-1)+2*y(m,p-1)+y(m+1,p-1)),P=-v*g,R=b*g,E=1,I=Math.hypot(P,R,E);P/=I,R/=I,E/=I;let z=(p*n+m)*4;f.data[z]=(P*.5+.5)*255,f.data[z+1]=(R*.5+.5)*255,f.data[z+2]=(E*.5+.5)*255,f.data[z+3]=255;let _=e[1]+(e[2]-e[1])*o[p*n+m];d.data[z]=d.data[z+1]=d.data[z+2]=Math.max(0,Math.min(255,_*255)),d.data[z+3]=255}c.putImageData(f,0,0),u.putImageData(d,0,0);let x=p=>{let m=new Fi(p);return m.wrapS=m.wrapT=xn,m.anisotropy=4,m.colorSpace=zi,m};return Zf[s]={normalMap:x(l),roughnessMap:x(h)}}var a0=0;function $M(s){a0=s}var Cn=[],jM=[],JM=[],QM=[],Di=[],eb=[],ha=[],uo=new Map,mc={};function je(s,e={}){if(mc[s])return mc[s];let t=Object.assign({roughness:.85,metalness:0},e);if(t.tex){t.map=Zn(t.tex);let n=a0>0&&o0(t.tex);n&&(t.normalMap=n.normalMap,t.roughnessMap=n.roughnessMap,t.roughness=1,t.normalScale=new ie(1,-1).multiplyScalar(t.nscale||1)),delete t.tex}return delete t.nscale,mc[s]=new At(t)}function fo(s,e){uo.has(s)||uo.set(s,[]),uo.get(s).push(e)}function tb(s,e,t,n,i,r,o,a){let l=new qn(s,e,t);l.translate(r,o,a);let c=l.attributes.uv,h=l.attributes.position,u=l.attributes.normal;for(let f=0;f<c.count;f++){let d=h.getX(f),g=h.getY(f),x=h.getZ(f),p=Math.abs(u.getX(f));Math.abs(u.getY(f))>.5?c.setXY(f,d/n,x/n):p>.5?c.setXY(f,x/n,g/i):c.setXY(f,d/n,g/i)}return l}function Ae(s,e,t,n,i,r,o,{tile:a=2,tv:l=0,solid:c="wall",low:h=!1,cast:u=!0}={}){let f=n-s,d=i-e,g=r-t,x=tb(f,d,g,a,l||a,(s+n)/2,(e+i)/2,(t+r)/2);if(o&&fo(o,x),u||(x.userData.nocast=!0),c){let p={min:new A(s,e,t),max:new A(n,i,r),kind:c,low:h};return Cn.push(p),p}}function $n(s,e,t,n,i,r,o,a=!0){let l=new Jt(t-s,n-e);l.rotateX(a?-Math.PI/2:Math.PI/2),l.translate((s+t)/2,i,(e+n)/2);let c=l.attributes.uv;for(let h=0;h<c.count;h++)c.setXY(h,c.getX(h)*(t-s)/o,c.getY(h)*(n-e)/o);fo(r,l)}function Os(s){$M(s),mc={},uo.clear(),Cn.length=jM.length=JM.length=QM.length=Di.length=eb.length=0,ha.length=0,nb.length=0}function Fs(s,e,t=[]){for(let[n,i]of uo){let r=r0(i,!1),o=new ye(r,n);o.receiveShadow=!0,o.castShadow=e>0&&!t.includes(n),o.matrixAutoUpdate=!1,s.add(o),ha.push(o)}uo.clear()}var nb=[];function gc(s,e,t,n,i,r=0,o=1,{solid:a=!0,low:l=!1,kind:c="prop",y:h=0,pad:u=0,cast:f=!0}={}){let d=e[t];if(!d)return null;if(f&&d.bb){let p=d.bb;Math.max(p.max[0]-p.min[0],p.max[1]-p.min[1],p.max[2]-p.min[2])*o<.45&&(f=!1)}let g=d.scene.clone(!0);g.position.set(n,h,i),g.rotation.y=r*Math.PI/2,g.scale.setScalar(o),s.add(g),g.traverse(p=>{p.isMesh&&(p.castShadow=f,p.receiveShadow=!0)});let x=null;if(a){let p=d.bb,m=p.min,y=p.max,v=m[0],b=y[0],P=m[2],R=y[2];for(let E=0;E<(r%4+4)%4;E++){let I=P,z=R,_=-b,T=-v;v=I,b=z,P=_,R=T}x={min:new A(n+v*o+u,h,i+P*o+u),max:new A(n+b*o-u,h+y[1]*o,i+R*o-u),kind:c,low:l,obj:g},Cn.push(x)}return{obj:g,solid:x}}var ib=.4;function h0(s){return!(s.ref&&(s.ref.broken||s.ref.dead||s.ref.open))}function On(s,e,t,n=ib,i=0){s.x+=e,l0(s,n,i),s.z+=t,l0(s,n,i)}function l0(s,e,t){for(let n of Cn){if(!h0(n)||n.max.y<t+.45||n.min.y>t+1.6)continue;let i=Math.max(n.min.x,Math.min(s.x,n.max.x)),r=Math.max(n.min.z,Math.min(s.z,n.max.z)),o=s.x-i,a=s.z-r,l=o*o+a*a;if(l<e*e)if(l>1e-8){let c=Math.sqrt(l),h=(e-c)/c;s.x+=o*h,s.z+=a*h}else{let c=s.x-n.min.x,h=n.max.x-s.x,u=s.z-n.min.z,f=n.max.z-s.z,d=Math.min(c,h,u,f);d===c?s.x=n.min.x-e:d===h?s.x=n.max.x+e:d===u?s.z=n.min.z-e:s.z=n.max.z+e}}}function sb(s,e,t,n,i,r){let o=0,a=i,l=-1,c=0;for(let h=0;h<3;h++){let u=h===0?s.x:h===1?s.y:s.z,f=h===0?e.x:h===1?e.y:e.z,d=h===0?t.x:h===1?t.y:t.z,g=h===0?n.x:h===1?n.y:n.z;if(Math.abs(f)<1e-9){if(u<d||u>g)return-1;continue}let x=(d-u)/f,p=(g-u)/f,m=-1;if(x>p){let y=x;x=p,p=y,m=1}if(x>o&&(o=x,l=h,c=m),p<a&&(a=p),o>a)return-1}return l<0?-1:(r&&(r.ax=l,r.sg=c),o)}var $f={ax:0,sg:0};function ls(s,e,t,n={}){let i=t,r=null,o=0,a=0,l=s.x+e.x*t,c=s.y+e.y*t,h=s.z+e.z*t,u=Math.min(s.x,l),f=Math.max(s.x,l),d=Math.min(s.y,c),g=Math.max(s.y,c),x=Math.min(s.z,h),p=Math.max(s.z,h);for(let m=0,y=Cn.length;m<y;m++){let v=Cn[m];if(v.min.x>f||v.max.x<u||v.min.z>p||v.max.z<x||v.min.y>g||v.max.y<d||!h0(v)||n.skipGlass&&v.kind==="glass"||n.ignoreLow&&v.low)continue;let b=sb(s,e,v.min,v.max,i,$f);b>=0&&b<i&&(i=b,r=v,o=$f.ax,a=$f.sg)}return r?{t:i,solid:r,nx:o===0?a:0,ny:o===1?a:0,nz:o===2?a:0}:null}function ua(s,e,t,n){let i=t.radius||.38,r=t.height||1.8,o=t.pos.x,a=t.pos.z,l=t.pos.y||0,c=s.x-o,h=s.z-a,u=e.x*e.x+e.z*e.z;if(u<1e-9)return null;let f=2*(c*e.x+h*e.z),d=c*c+h*h-i*i,g=f*f-4*u*d;if(g<0)return null;let x=Math.sqrt(g);for(let p of[(-f-x)/(2*u),(-f+x)/(2*u)]){if(p<0||p>n)continue;let m=s.y+e.y*p-l,y=t.crouch?r*.72:r;if(m>=0&&m<=y)return{t:p,head:m>y*.84}}return null}var xc={x:0,y:0,z:0},c0={ignoreLow:!1,skipGlass:!0};function Fn(s,e,t=!1){let n=e.x-s.x,i=e.y-s.y,r=e.z-s.z,o=Math.hypot(n,i,r);return o<.01?!0:(xc.x=n/o,xc.y=i/o,xc.z=r/o,c0.ignoreLow=t,!ls(s,xc,o-.05,c0))}var ar,lr=[],fa=[],da=[],rb=[],pa=[],yc,ma,_c,ob=420;function u0(s){ar=s,lr.length=fa.length=da.length=rb.length=pa.length=0,yc=new Jt(1,1),ma=new It,ma.setAttribute("position",new Ke([0,0,0,.12,.02,0,.04,.14,0],3)),ma.computeVertexNormals(),_c=new qn(.08,.08,.08),vc.length=0;for(let[e,t]of[[fb,120],[db,24],[pb,60]]){let n=new Cs(mb,e,t);n.count=0,n.frustumCulled=!1,n.matrixAutoUpdate=!1,n.userData.i=0,s.add(n),vc.push(n)}for(let e in cs)cs[e].length=0}var cs={flash:[],tracer:[],ring:[]},vc=[],po=new yt;function ab(s,e,t,n,i){po.position.copy(e).addScaledVector(t,n),po.lookAt(lb.copy(e).add(t)),po.rotateZ(Math.random()*6),po.scale.setScalar(i),po.updateMatrix();let r=s.userData.i;s.setMatrixAt(r,po.matrix),s.userData.i=(r+1)%s.instanceMatrix.count,s.count=Math.max(s.count,r+1),s.instanceMatrix.needsUpdate=!0}var f0=()=>new ct({map:Zn("spark"),blending:gn,depthWrite:!1,transparent:!0,side:Dt,forceSinglePass:!0}),d0=new At({color:12576498,roughness:.05,metalness:.5,transparent:!0,opacity:.6,side:Dt,forceSinglePass:!0}),p0={spark:[],shard:[],debris:[],smoke:[],fire:[],blood:[]};function mo(s){let e=p0[s].pop();if(!e){let t;s==="spark"?t=new ye(yc,f0()):s==="shard"?t=new ye(ma,d0):s==="debris"?t=new ye(_c,new At({color:7829367,roughness:.9})):t=new ui(new ii({map:Zn("smoke"),depthWrite:!1,transparent:!0,color:s==="fire"?16752704:8947848,blending:s==="fire"?gn:is,fog:!0})),e={m:t,kind:s,v:new A,life:0,max:1,s:1,spin:new A}}return e.drag=0,e.floor=!1,ar.add(e.m),lr.push(e),lr.length>ob&&g0(0),e}var jf=null;function m0(){if(jf)return jf;let s=new kt,e=t=>{t.position.set(0,-50,0),s.add(t)};e(new ye(yc,f0())),e(new ye(ma,d0)),e(new ye(_c,new At({color:7829367,roughness:.9})));for(let t of[0,1])e(new ui(new ii({map:Zn("smoke"),depthWrite:!1,transparent:!0,blending:t?gn:is,fog:!0})));return e(new ui(new ii({map:Zn("flash"),blending:gn,depthWrite:!1,transparent:!0}))),e(new ye(_0,new ct({transparent:!0,blending:gn,depthWrite:!1,side:Dt,forceSinglePass:!0}))),e(new ye(yc,Jf)),jf=s}function g0(s){let e=lr[s];ar.remove(e.m),lr.splice(s,1),p0[e.kind].push(e)}var x0=new A,lb=new A;function mi(s,e,t=8,n=16765562,i=6){for(let r=0;r<t;r++){let o=mo("spark");o.m.position.copy(s),o.m.material.color.setHex(n),o.red&&(o.red=0,o.m.material.blending=gn),o.v.set(Math.random()-.5,Math.random()-.5,Math.random()-.5).multiplyScalar(i*.8),e&&o.v.addScaledVector(e,i*(.4+Math.random()*.6)),o.life=o.max=.18+Math.random()*.25,o.s=.05+Math.random()*.07,o.grav=9}}function y0(s,e=6,t=7829367){for(let n=0;n<e;n++){let i=mo("debris");i.plastic&&(i.plastic=0,i.m.geometry=_c,i.m.material.roughness=.9),i.m.material.color.setHex(t),i.m.position.copy(s),i.v.set((Math.random()-.5)*5,2+Math.random()*4,(Math.random()-.5)*5),i.spin.set(Math.random()*9,Math.random()*9,0),i.life=i.max=1+Math.random(),i.s=.6+Math.random(),i.grav=14,i.floor=!0}}var cb=new qn(1,.5,.75);function jn(s,e=14169132,t=22,n=1,i=1){t=Math.ceil(t*.6);for(let r=0;r<t;r++){let o=mo("debris");o.plastic||(o.plastic=1,o.m.geometry=cb,o.m.material.roughness=.3,o.m.material.metalness=0),o.m.material.color.setHex(e).offsetHSL(0,0,(Math.random()-.4)*.12),o.m.position.set(s.x+(Math.random()-.5)*.6*n,s.y+(Math.random()-.3)*1.2*n,s.z+(Math.random()-.5)*.6*n),o.v.set((Math.random()-.5)*9*i,(2+Math.random()*6)*i,(Math.random()-.5)*9*i),o.spin.set(Math.random()*14,Math.random()*14,0),o.life=o.max=1.3+Math.random()*1.1,o.s=(.1+Math.random()*.16)*n,o.grav=16,o.floor=!0}}function gi(s,e=6,t=2,n=6710886,i=2){for(let r=0;r<e;r++){let o=mo("smoke");o.m.material.color.setHex(n),o.m.position.copy(s).add(x0.set(Math.random()-.5,Math.random()*.5,Math.random()-.5).multiplyScalar(t*.5)),o.v.set((Math.random()-.5)*1.2,.6+Math.random(),(Math.random()-.5)*1.2),o.life=o.max=i*(.6+Math.random()*.6),o.s=t*(.6+Math.random()*.5),o.grow=1.2,o.grav=0,o.alpha=.55}}function cr(s,e,t=11183258,n=.3,i=.35,r=.7){let o=mo("smoke");o.m.material.color.setHex(t),o.m.position.copy(s),o.v.set((Math.random()-.5)*.4,.35+Math.random()*.3,(Math.random()-.5)*.4),e&&o.v.addScaledVector(e,.8+Math.random()*.8),o.life=o.max=r*(.7+Math.random()*.5),o.s=n,o.grow=2.2,o.grav=0,o.alpha=i,o.drag=2.5,o.m.material.rotation=Math.random()*6}function Bs(s,e=14,t=2.6){for(let n=0;n<e;n++){let i=mo("fire");i.m.position.copy(s).add(x0.set(Math.random()-.5,Math.random()*.6,Math.random()-.5).multiplyScalar(t*.6)),i.v.set((Math.random()-.5)*6,1+Math.random()*4,(Math.random()-.5)*6),i.life=i.max=.35+Math.random()*.4,i.s=t*(.5+Math.random()*.6),i.grow=1.5,i.grav=-2,i.alpha=1,i.drag=3.5}}var Jf=new ct({color:16767120,blending:gn,transparent:!0,depthWrite:!1,side:Dt,forceSinglePass:!0}),hb=new ct({color:16740432,blending:gn,transparent:!0,depthWrite:!1,side:Dt,forceSinglePass:!0}),ub=new qn(1,1,1);function v0(s,e,t=!1){let n=s.distanceTo(e);if(n<.3)return;let i=cs.tracer.pop()||{m:new ye(ub,Jf)},r=i.m;r.material=t?hb:Jf,r.position.copy(s).lerp(e,.5),r.lookAt(e),r.scale.set(t?.035:.025,t?.035:.025,n),ar.add(r),i.life=.06,i.len=n,i.t=0,fa.push(i)}function hs(s,e=.5){let t=cs.flash.pop()||new ui(new ii({map:Zn("flash"),blending:gn,depthWrite:!1,transparent:!0}));t.material.rotation=Math.random()*6,t.scale.setScalar(e*(.8+Math.random()*.5)),s.add(t),da.push({s:t,obj:s,life:.05})}var fb=new ct({map:Zn("hole"),transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4}),db=new ct({map:Zn("scorch"),transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4}),pb=new At({map:Zn("blood"),transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,roughness:.25,color:16777215,emissive:2228224}),mb=new Jt(1,1);function Qf(s,e,t=.14,n=!1,i=null){vc[0]&&ab(vc[n?1:0],s,e,.01,t)}var _0=new Ii(.8,1,32);function ri(s,e=16777215,t=6,n=.35){let i=cs.ring.pop()||new ye(_0,new ct({transparent:!0,blending:gn,depthWrite:!1,side:Dt,forceSinglePass:!0}));i.material.color.setHex(e),i.rotation.x=-Math.PI/2,i.position.copy(s),i.position.y=.1,ar.add(i),pa.push({m:i,life:n,max:n,r:t})}function Mc(s,e){for(let t=lr.length-1;t>=0;t--){let n=lr[t];if(n.life-=s,n.life<=0){g0(t);continue}let i=n.life/n.max;if(n.drag&&n.v.multiplyScalar(Math.max(0,1-n.drag*s)),n.v.y-=(n.grav||0)*s,n.m.position.addScaledVector(n.v,s),n.floor&&n.m.position.y<.02&&(n.m.position.y=.02,n.v.y*=-.25,n.v.x*=.6,n.v.z*=.6,n.spin.multiplyScalar(.6)),n.kind==="spark"){n.m.quaternion.copy(e.quaternion);let r=n.v.length();n.m.scale.set(n.s,n.s*(1+r*.08),1),n.m.material.opacity=i}else if(n.kind==="shard"||n.kind==="debris")n.m.rotation.x+=n.spin.x*s,n.m.rotation.y+=n.spin.y*s,n.m.scale.setScalar(n.s*Math.min(1,i*3));else{let r=n.s*(1+(1-i)*(n.grow||1));n.m.scale.setScalar(r),n.m.material.opacity=(n.alpha||.5)*Math.min(1,i*2)*(n.kind==="fire"?i:1)}}for(let t=fa.length-1;t>=0;t--){let n=fa[t];if(n.life-=s,n.life<=0){ar.remove(n.m),fa.splice(t,1),cs.tracer.push(n);continue}n.m.material.opacity=1}for(let t=da.length-1;t>=0;t--){let n=da[t];n.life-=s,n.life<=0&&(n.obj.remove(n.s),da.splice(t,1),cs.flash.length<24?cs.flash.push(n.s):n.s.material.dispose())}for(let t=pa.length-1;t>=0;t--){let n=pa[t];if(n.life-=s,n.life<=0){ar.remove(n.m),pa.splice(t,1),cs.ring.push(n.m);continue}let i=1-n.life/n.max;n.m.scale.setScalar(.5+i*n.r),n.m.material.opacity=1-i}}var tt=A,nd={blue:3112416,red:14169132},M=window.G={mode:"load",units:[],tanks:[],actors:[],proj:[],noises:[],clock:0,shake:0,easy:0,kills:0,coinsRun:0,scene:null,cam:null,player:null,boss:null},Hs=new tt,bc=new tt,gb=new tt,hr=new tt,ue=(s,e)=>s+Math.random()*(e-s);function de(s,e=1,t=1,n=null){if(!M.audio)return;let i=0;if(n&&M.cam){let r=M.cam.position,o=n.x-r.x,a=n.z-r.z,l=Math.hypot(o,a);if(e*=1/(1+l*l/900),e<.02)return;let c=-Math.sin(M.camYaw||0),h=-Math.cos(M.camYaw||0);i=(o*-h+a*c)/(l+1)*.7}M.audio.play(s,e,t*(.94+Math.random()*.12),i)}function ur(s,e,t){M.noises.push({p:s.clone(),r:e,team:t})}function Vi(s,e,t,n,i=120,r={}){let o=ls(e,t,i,{skipGlass:!0}),a=o?o.t:i,l=null,c=!1;for(let u of M.actors){if(!u.alive||u===s||u.team===s.team||u.noBullet)continue;let f=u.pos.x-e.x,d=u.pos.z-e.z;if(f*f+d*d>(a+3)*(a+3))continue;let g=ua(e,t,u,a);g&&g.t<a&&(a=g.t,l=u,c=g.head)}let h=gb.copy(e).addScaledVector(t,a);if(r.noTracer||v0(r.from||e,h,s.team==="red"),l)l.damage(n*(c&&l.headMul?l.headMul:1),s,t,c),l.plastic?mi(h,null,4,nd[l.team],4):mi(h,null,5,16765562,6);else if(o){hr.set(o.nx,o.ny,o.nz);let u=o.solid.ref&&o.solid.ref.isTank?o.solid.ref:null;u&&u.team!==s.team?(u.damage(n*.35,s,t),mi(h,hr,6,16769184,7),de("metal",.25,1.2,h)):(mi(h,hr,4,16773312,5),cr(h,hr,o.solid.dust||13616304,.25,.3,.6),Math.random()<.5&&Qf(h,hr,.16),Math.random()<.25&&de("ric",.25,1,h))}return r.silent||ur(e,r.loud||34,s.team),{pt:h,actor:l}}var Sc=[];function b0(s){Sc.length=0;let e=new Us(16752704,0,26,1.6);s.add(e),Sc.push({l:e,t:0})}function Bn(s,e,t,n,i=1){let r=s.clone();r.y<.05&&(r.y=.05),Bs(r.clone().setY(r.y+.4),Math.round(8+8*i),2.2*i),gi(r.clone().setY(r.y+.6),Math.round(4+4*i),3*i,5920336,2.4),y0(r.clone().setY(r.y+.3),Math.round(6*i),M.groundCol||7035456),mi(r,null,Math.round(14*i),16760928,14*i),ri(r,16765072,e*1.4,.4),r.y<.3&&Qf(bc.set(r.x,.02,r.z),hr.set(0,1,0),e*.9,!0);let o=Sc[0];if(o&&(o.l.position.set(r.x,r.y+2,r.z),o.l.intensity=60*i,o.t=.25),de("boom",.9*Math.min(1.3,i),i>1.4?.7:.85+Math.random()*.2,r),M.cam){let l=M.cam.position.distanceTo(r);M.shake=Math.min(1.6,M.shake+1.2*i*12/(12+l*l*.08))}ur(r,60,n?n.team:"none");let a=n?n.team:null;for(let l of M.actors){if(!l.alive)continue;let c=Math.hypot(l.pos.x-r.x,l.pos.z-r.z)-(l.radius||.4)*.5;if(c>e||(l.pos.y||0)>2&&Math.abs((l.pos.y||0)+(l.height||2)*.5-r.y)>e+(l.height||2)*.5||l.team===a&&l!==n&&!(l.isPlayer&&n&&n.isPlayer)||(bc.set(l.pos.x,(l.pos.y||0)+Math.min(1.2,(l.height||1.8)*.5),l.pos.z),!l.isTank&&!l.isBoss&&!l.isFly&&!Fn(bc.clone().setY(bc.y),r.clone().setY(r.y+.5),!0)))continue;let h=1-Math.max(0,c)/e;h=.35+.65*h;let u=t*h;(l===n||l.isPlayer&&n&&n.isPlayer)&&(u*=.3),Hs.set(l.pos.x-r.x,0,l.pos.z-r.z).normalize(),l.damage(u,n,Hs,!1,!0)}}function id(s){for(let e of Sc)e.t>0&&(e.t-=s,e.l.intensity=Math.max(0,e.l.intensity*Math.pow(5e-4,s)),e.t<=0&&(e.l.intensity=0))}var td={},ed=null;function xb(s){ed||(ed=new ii({map:Zn("glow"),color:16756816,blending:gn,depthWrite:!1,transparent:!0}));let t=(td[s]||(td[s]=[])).pop();return t||(s==="grenade"?(t=new ye(new Vl(.16,1),new At({color:4025130,roughness:.35})),t.castShadow=!0):(t=new ui(ed.clone()),t.material.color.setHex(s==="bolt"?16724e3:s==="arty"?16769184:16752704),t.scale.setScalar(s==="bolt"?.9:s==="arty"?1.6:.8)),t.userData.kind=s,t)}function Pn(s,e,t,n,i={}){let r=xb(s);r.position.copy(e),M.scene.add(r);let o={kind:s,m:r,pos:r.position,vel:t.clone(),owner:n,team:n?n.team:"none",life:i.life||6,grav:i.grav!=null?i.grav:s==="grenade"?22:s==="shell"?4:s==="arty"?30:0,dmg:i.dmg||100,r:i.r||4,big:i.big||1,fuse:i.fuse||0,trail:0,ign:i.ign||null};return M.proj.push(o),o}var M0={skipGlass:!0};function sd(s){for(let e=M.proj.length-1;e>=0;e--){let t=M.proj[e];t.life-=s;let n=t.life<=0;t.vel.y-=t.grav*s;let i=t.vel.length();Hs.copy(t.vel).divideScalar(i||1);let r=i*s;if(t.kind==="grenade"){t.fuse-=s,t.fuse<=0&&(n=!0);let o=ls(t.pos,Hs,r+.16,M0);if(o){let a=hr.set(o.nx,o.ny,o.nz);t.vel.addScaledVector(a,-1.6*t.vel.dot(a)).multiplyScalar(.5),t.vel.lengthSq()>9&&de("click",.3,.6,t.pos)}else t.pos.addScaledVector(t.vel,s);t.pos.y<.16&&(t.pos.y=.16,t.vel.y<0&&(t.vel.y*=-.35,t.vel.x*=.6,t.vel.z*=.6)),t.m.rotation.x+=s*8}else{t.ign&&(t.ign.open=!0);let o=ls(t.pos,Hs,r,M0);t.ign&&(t.ign.open=!1);let a=o?o.t:r;for(let l of M.actors){if(!l.alive||l.team===t.team||l.noBullet||l===t.ign)continue;let c=l.pos.x-t.pos.x,h=l.pos.z-t.pos.z;if(c*c+h*h>(r+4)*(r+4))continue;let u=ua(t.pos,Hs,l,a);u&&u.t<=a&&(a=u.t,n=!0)}o&&o.t<=a+1e-4&&(n=!0,o.solid.ref&&o.solid.ref.isTank&&o.solid.ref.team!==t.team&&o.solid.ref.damage(t.dmg*.5,t.owner,Hs)),t.pos.addScaledVector(Hs,Math.max(0,a-.05)),t.pos.y<=.05&&(n=!0),t.trail-=s,t.trail<=0&&t.kind!=="bolt"&&(t.trail=.03,cr(t.pos,null,t.kind==="arty"?13682880:11578016,t.kind==="rocket"?.35:.25,.35,.5))}n&&(M.scene.remove(t.m),td[t.kind].push(t.m),M.proj.splice(e,1),t.kind==="bolt"?(mi(t.pos,null,8,16732208,6),Bn(t.pos,t.r,t.dmg,t.owner,.35)):Bn(t.pos,t.r,t.dmg,t.owner,t.big))}}var Tc=[];function S0(s,e){Tc.length=0;for(let t of s){let n=t.max.y-t.min.y;if(t.min.y>.3||n<1.05||t.kind==="bound")continue;let i=t.max.x-t.min.x,r=t.max.z-t.min.z;if(i>30||r>30)continue;let o=2*(i+r),a=Math.max(4,Math.min(16,Math.round(o/1.8)));for(let l=0;l<a;l++){let c=(l+.5)/a*o,h,u,f=0,d=0,g=.85;c<i?(h=t.min.x+c,u=t.min.z-g,d=-1):(c-=i)<r?(h=t.max.x+g,u=t.min.z+c,f=1):(c-=r)<i?(h=t.max.x-c,u=t.max.z+g,d=1):(c-=i,h=t.min.x-g,u=t.max.z-c,f=-1);let x=new tt(h,0,u);e(x)&&Tc.push({p:x,s:t,h:n,nx:f,nz:d,user:null})}}}var wc=class extends Li{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new ud(t)}),this.register(function(t){return new fd(t)}),this.register(function(t){return new Md(t)}),this.register(function(t){return new bd(t)}),this.register(function(t){return new Sd(t)}),this.register(function(t){return new pd(t)}),this.register(function(t){return new md(t)}),this.register(function(t){return new gd(t)}),this.register(function(t){return new xd(t)}),this.register(function(t){return new hd(t)}),this.register(function(t){return new yd(t)}),this.register(function(t){return new dd(t)}),this.register(function(t){return new _d(t)}),this.register(function(t){return new vd(t)}),this.register(function(t){return new ld(t)}),this.register(function(t){return new Td(t)}),this.register(function(t){return new wd(t)})}load(e,t,n,i){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=ks.extractUrlBase(e);o=ks.resolveURL(c,this.path)}else o=ks.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Ns(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===R0){try{o[ht.KHR_BINARY_GLTF]=new Ed(e)}catch(u){i&&i(u);return}r=JSON.parse(o[ht.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Dd(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case ht.KHR_MATERIALS_UNLIT:o[u]=new cd;break;case ht.KHR_DRACO_MESH_COMPRESSION:o[u]=new Ad(r,this.dracoLoader);break;case ht.KHR_TEXTURE_TRANSFORM:o[u]=new Rd;break;case ht.KHR_MESH_QUANTIZATION:o[u]=new Cd;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function yb(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}var ht={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},ld=class{constructor(e){this.parser=e,this.name=ht.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new fe(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],sn);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new oo(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Us(h),c.distance=u;break;case"spot":c=new jl(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,us(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}},cd=class{constructor(){this.name=ht.KHR_MATERIALS_UNLIT}getMaterialType(){return ct}extendParams(e,t,n){let i=[];e.color=new fe(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],sn),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Lt))}return Promise.all(i)}},hd=class{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},ud=class{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ie(a,a)}return Promise.all(r)}},fd=class{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},dd=class{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},pd=class{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new fe(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],sn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Lt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},md=class{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},gd=class{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new fe().setRGB(a[0],a[1],a[2],sn),Promise.all(r)}},xd=class{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},yd=class{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new fe().setRGB(a[0],a[1],a[2],sn),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Lt)),Promise.all(r)}},vd=class{constructor(e){this.parser=e,this.name=ht.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},_d=class{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},Md=class{constructor(e){this.parser=e,this.name=ht.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},bd=class{constructor(e){this.parser=e,this.name=ht.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Sd=class{constructor(e){this.parser=e,this.name=ht.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Td=class{constructor(e){this.name=ht.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,f,i.mode,i.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(d),h,u,f,i.mode,i.filter),d})})}else return null}},wd=class{constructor(e){this.name=ht.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let c of i.primitives)if(c.mode!==xi.TRIANGLES&&c.mode!==xi.TRIANGLE_STRIP&&c.mode!==xi.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],f=c[0].count,d=[];for(let g of u){let x=new Ne,p=new A,m=new Xt,y=new A(1,1,1),v=new Cs(g.geometry,g.material,f);for(let b=0;b<f;b++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,b),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,b),l.SCALE&&y.fromBufferAttribute(l.SCALE,b),v.setMatrixAt(b,x.compose(p,m,y));for(let b in l)if(b==="_COLOR_0"){let P=l[b];v.instanceColor=new rr(P.array,P.itemSize,P.normalized)}else b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"&&g.geometry.setAttribute(b,l[b]);yt.prototype.copy.call(v,g),this.parser.assignFinalMaterial(v),d.push(v)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}},R0="glTF",ga=12,T0={JSON:1313821514,BIN:5130562},Ed=class{constructor(e){this.name=ht.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,ga),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==R0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-ga,r=new DataView(e,ga),o=0;for(;o<i;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===T0.JSON){let c=new Uint8Array(e,ga+o,a);this.content=n.decode(c)}else if(l===T0.BIN){let c=ga+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Ad=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ht.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let h in o){let u=Id[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=Id[h]||h.toLowerCase();if(o[h]!==void 0){let f=n.accessors[e.attributes[h]],d=go[f.componentType];c[u]=d.name,l[u]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){i.decodeDracoFile(h,function(d){for(let g in d.attributes){let x=d.attributes[g],p=l[g];p!==void 0&&(x.normalized=p)}u(d)},a,c,sn,f)})})}},Rd=class{constructor(){this.name=ht.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Cd=class{constructor(){this.name=ht.KHR_MESH_QUANTIZATION}},Ec=class extends Is{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=i-t,u=(n-t)/h,f=u*u,d=f*u,g=e*c,x=g-c,p=-2*d+3*f,m=d-f,y=1-p,v=m-f+u;for(let b=0;b!==a;b++){let P=o[x+b+a],R=o[x+b+l]*h,E=o[g+b+a],I=o[g+b]*h;r[b]=y*P+v*R+p*E+m*I}return r}},vb=new Xt,Pd=class extends Ec{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return vb.fromArray(r).normalize().toArray(r),r}},xi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},go={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},w0={9728:cn,9729:Wn,9984:Af,9985:zo,9986:Or,9987:Oi},E0={33071:ts,33648:Go,10497:xn},rd={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Id={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Vs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},_b={CUBICSPLINE:void 0,LINEAR:Zr,STEP:Kr},od={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Mb(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new At({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Nn})),s.DefaultMaterial}function fr(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function us(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function bb(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(n){let f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;o.push(f)}if(i){let f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;a.push(f)}if(r){let f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],f=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function Sb(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Tb(s){let e,t=s.extensions&&s.extensions[ht.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ad(t.attributes):e=s.indices+":"+ad(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+ad(s.targets[n]);return e}function ad(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Ld(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function wb(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var Eb=new Ne,Dd=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new yb,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator!="undefined"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap=="undefined"||n&&i<17||r&&o<98?this.textureLoader=new Zl(this.options.manager):this.textureLoader=new Jl(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ns(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return fr(r,a,i),us(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,h]of o.children.entries())r(h,a.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ht.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,o){n.load(ks.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let o=rd[i.type],a=go[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new qt(c,o,l))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=rd[i.type],c=go[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0,x,p;if(d&&d!==u){let m=Math.floor(f/d),y="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count,v=t.cache.get(y);v||(x=new c(a,m*d,i.count*d/h),v=new eo(x,d/h),t.cache.add(y,v)),p=new sr(v,l,f%d/h,g)}else a===null?x=new c(i.count*l):x=new c(a,f,i.count*l),p=new qt(x,l,g);if(i.sparse!==void 0){let m=rd.SCALAR,y=go[i.sparse.indices.componentType],v=i.sparse.indices.byteOffset||0,b=i.sparse.values.byteOffset||0,P=new y(o[1],v,i.sparse.count*m),R=new c(o[2],b,i.sparse.count*l);a!==null&&(p=new qt(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let E=0,I=P.length;E<I;E++){let z=P[E];if(p.setX(z,R[E*l]),l>=2&&p.setY(z,R[E*l+1]),l>=3&&p.setZ(z,R[E*l+2]),l>=4&&p.setW(z,R[E*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=g}return p})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let i=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let f=(r.samplers||{})[o.sampler]||{};return h.magFilter=w0[f.magFilter]||Wn,h.minFilter=w0[f.minFilter]||Oi,h.wrapS=E0[f.wrapS]||xn,h.wrapT=E0[f.wrapT]||xn,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let o=i.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(u){c=!0;let f=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(u){return new Promise(function(f,d){let g=f;t.isImageBitmapLoader===!0&&(g=function(x){let p=new yn(x);p.needsUpdate=!0,f(p)}),t.load(ks.resolveURL(u,r.path),g,void 0,d)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),us(u,o),u.userData.mimeType=o.mimeType||wb(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[ht.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[ht.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[ht.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new jo,kn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new $o,kn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return At}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],o,a={},l=r.extensions||{},c=[];if(l[ht.KHR_MATERIALS_UNLIT]){let u=i[ht.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new fe(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let f=u.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],sn),a.opacity=f[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,Lt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Dt);let h=r.alphaMode||od.OPAQUE;if(h===od.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===od.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==ct&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new ie(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==ct&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==ct){let u=r.emissiveFactor;a.emissive=new fe().setRGB(u[0],u[1],u[2],sn)}return r.emissiveTexture!==void 0&&o!==ct&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Lt)),Promise.all(c).then(function(){let u=new o(a);return r.name&&(u.name=r.name),us(u,r),t.associations.set(u,{materials:e}),r.extensions&&fr(i,u,r),u})}createUniqueName(e){let t=Ut.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[ht.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return A0(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],h=Tb(c),u=i[h];if(u)o.push(u.promise);else{let f;c.extensions&&c.extensions[ht.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=A0(new It,c,t),i[h]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let h=o[l].material===void 0?Mb(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let d=0,g=h.length;d<g;d++){let x=h[d],p=o[d],m,y=c[d];if(p.mode===xi.TRIANGLES||p.mode===xi.TRIANGLE_STRIP||p.mode===xi.TRIANGLE_FAN||p.mode===void 0)m=r.isSkinnedMesh===!0?new no(x,y):new ye(x,y),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),p.mode===xi.TRIANGLE_STRIP?m.geometry=Yf(m.geometry,sc):p.mode===xi.TRIANGLE_FAN&&(m.geometry=Yf(m.geometry,ta));else if(p.mode===xi.LINES)m=new zl(x,y);else if(p.mode===xi.LINE_STRIP)m=new io(x,y);else if(p.mode===xi.LINE_LOOP)m=new Ol(x,y);else if(p.mode===xi.POINTS)m=new Fl(x,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&Sb(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),us(m,r),p.extensions&&fr(i,m,p),t.assignFinalMaterial(m),u.push(m)}for(let d=0,g=u.length;d<g;d++)t.associations.set(u[d],{meshes:e,primitives:d});if(u.length===1)return r.extensions&&fr(i,u[0],r),u[0];let f=new kt;r.extensions&&fr(i,f,r),t.associations.set(f,{meshes:e});for(let d=0,g=u.length;d<g;d++)f.add(u[d]);return f})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new ln(na.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Es(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),us(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),o=i,a=[],l=[];for(let c=0,h=o.length;c<h;c++){let u=o[c];if(u){a.push(u);let f=new Ne;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Nl(a,l)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let u=0,f=i.channels.length;u<f;u++){let d=i.channels[u],g=i.samplers[d.sampler],x=d.target,p=x.node,m=i.parameters!==void 0?i.parameters[g.input]:g.input,y=i.parameters!==void 0?i.parameters[g.output]:g.output;x.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",y)),c.push(g),h.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let f=u[0],d=u[1],g=u[2],x=u[3],p=u[4],m=[];for(let y=0,v=f.length;y<v;y++){let b=f[y],P=d[y],R=g[y],E=x[y],I=p[y];if(b===void 0)continue;b.updateMatrix&&b.updateMatrix();let z=n._createAnimationTracks(b,P,R,E,I);if(z)for(let _=0;_<z.length;_++)m.push(z[_])}return new so(r,void 0,m)})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));let l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let h=c[0],u=c[1],f=c[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,Eb)});for(let d=0,g=u.length;d<g;d++)h.add(u[d]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new Zo:c.length>1?h=new kt:c.length===1?h=c[0]:h=new yt,h!==c[0])for(let u=0,f=c.length;u<f;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=o),us(h,r),r.extensions&&fr(n,h,r),r.matrix!==void 0){let u=new Ne;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new kt;n.name&&(r.name=i.createUniqueName(n.name)),us(r,n),n.extensions&&fr(t,r,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);let c=h=>{let u=new Map;for(let[f,d]of i.associations)(f instanceof kn||f instanceof yn)&&u.set(f,d);return h.traverse(f=>{let d=i.associations.get(f);d!=null&&u.set(f,d)}),u};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){let o=[],a=e.name?e.name:e.uuid,l=[];Vs[r.path]===Vs.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(Vs[r.path]){case Vs.weights:c=rs;break;case Vs.rotation:c=os;break;case Vs.position:case Vs.scale:c=as;break;default:n.itemSize===1?c=rs:c=as;break}let h=i.interpolation!==void 0?_b[i.interpolation]:Zr,u=this._getArrayFromAccessor(n);for(let f=0,d=l.length;f<d;f++){let g=new c(l[f]+"."+Vs[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Ld(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof os?Pd:Ec;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Ab(s,e,t){let n=e.attributes,i=new ci;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new A(l[0],l[1],l[2]),new A(c[0],c[1],c[2])),a.normalized){let h=Ld(go[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new A,l=new A;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let f=t.json.accessors[u.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){let x=Ld(go[f.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;let o=new Un;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function A0(s,e,t){let n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(let o in n){let a=Id[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){let o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return lt.workingColorSpace!==sn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${lt.workingColorSpace}" not supported.`),us(s,e),Ab(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?bb(s,e.targets,t):s})}var Nd=new WeakMap,Ac=class extends Li{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){let r=new Ns(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,o=>{this.parse(o,t,i)},n,i)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,Lt,n).catch(n)}decodeDracoFile(e,t,n,i,r=sn,o=()=>{}){let a={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:r};return this.decodeGeometry(e,a).then(t).catch(o)}decodeGeometry(e,t){let n=JSON.stringify(t);if(Nd.has(e)){let l=Nd.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i,r=this.workerNextTaskID++,o=e.byteLength,a=this._getWorker(r,o).then(l=>(i=l,new Promise((c,h)=>{i._callbacks[r]={resolve:c,reject:h},i.postMessage({type:"decode",id:r,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return a.catch(()=>!0).then(()=>{i&&r&&this._releaseTask(i,r)}),Nd.set(e,{key:n,promise:a}),a}_createGeometry(e){let t=new It;e.index&&t.setIndex(new qt(e.index.array,1));for(let n=0;n<e.attributes.length;n++){let i=e.attributes[n],r=i.name,o=i.array,a=i.itemSize,l=new qt(o,a);r==="color"&&(this._assignVertexColorSpace(l,i.vertexColorSpace),l.normalized=!(o instanceof Float32Array)),t.setAttribute(r,l)}return t}_assignVertexColorSpace(e,t){if(t!==Lt)return;let n=new fe;for(let i=0,r=e.count;i<r;i++)n.fromBufferAttribute(e,i),lt.toWorkingColorSpace(n,Lt),e.setXYZ(i,n.r,n.g,n.b)}_loadLibrary(e,t){let n=new Ns(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,r)=>{n.load(e,i,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;let e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{let i=n[0];e||(this.decoderConfig.wasmBinary=n[1]);let r=Rb.toString(),o=["/* draco decoder */",i,"","/* worker */",r.substring(r.indexOf("{")+1,r.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([o]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){let i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(r){let o=r.data;switch(o.type){case"decode":i._callbacks[o.id].resolve(o);break;case"error":i._callbacks[o.id].reject(o);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+o.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,r){return i._taskLoad>r._taskLoad?-1:1});let n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}};function Rb(){let s,e;onmessage=function(o){let a=o.data;switch(a.type){case"init":s=a.decoderConfig,e=new Promise(function(h){s.onModuleLoaded=function(u){h({draco:u})},DracoDecoderModule(s)});break;case"decode":let l=a.buffer,c=a.taskConfig;e.then(h=>{let u=h.draco,f=new u.Decoder;try{let d=t(u,f,new Int8Array(l),c),g=d.attributes.map(x=>x.array.buffer);d.index&&g.push(d.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:d},g)}catch(d){console.error(d),self.postMessage({type:"error",id:a.id,error:d.message})}finally{u.destroy(f)}});break}};function t(o,a,l,c){let h=c.attributeIDs,u=c.attributeTypes,f,d,g=a.GetEncodedGeometryType(l);if(g===o.TRIANGULAR_MESH)f=new o.Mesh,d=a.DecodeArrayToMesh(l,l.byteLength,f);else if(g===o.POINT_CLOUD)f=new o.PointCloud,d=a.DecodeArrayToPointCloud(l,l.byteLength,f);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!d.ok()||f.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+d.error_msg());let x={index:null,attributes:[]};for(let p in h){let m=self[u[p]],y,v;if(c.useUniqueIDs)v=h[p],y=a.GetAttributeByUniqueId(f,v);else{if(v=a.GetAttributeId(f,o[h[p]]),v===-1)continue;y=a.GetAttribute(f,v)}let b=i(o,a,f,p,m,y);p==="color"&&(b.vertexColorSpace=c.vertexColorSpace),x.attributes.push(b)}return g===o.TRIANGULAR_MESH&&(x.index=n(o,a,f)),o.destroy(f),x}function n(o,a,l){let h=l.num_faces()*3,u=h*4,f=o._malloc(u);a.GetTrianglesUInt32Array(l,u,f);let d=new Uint32Array(o.HEAPF32.buffer,f,h).slice();return o._free(f),{array:d,itemSize:1}}function i(o,a,l,c,h,u){let f=u.num_components(),g=l.num_points()*f,x=g*h.BYTES_PER_ELEMENT,p=r(o,h),m=o._malloc(x);a.GetAttributeDataArrayForAllPoints(l,u,p,x,m);let y=new h(o.HEAPF32.buffer,m,g).slice();return o._free(m),{name:c,array:y,itemSize:f}}function r(o,a){switch(a){case Float32Array:return o.DT_FLOAT32;case Int8Array:return o.DT_INT8;case Int16Array:return o.DT_INT16;case Int32Array:return o.DT_INT32;case Uint8Array:return o.DT_UINT8;case Uint16Array:return o.DT_UINT16;case Uint32Array:return o.DT_UINT32}}}function C0(s){let e=new Map,t=new Map,n=s.clone();return P0(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let r=i,o=e.get(i),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function P0(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)P0(s.children[n],e.children[n],t)}var Pb=["blue_spec","blue_sniper","blue_heavy","red_rifle","red_heavy"],Ib=["rifle","blue_tank","red_tank","artillery","sandbags","ammo_crate","abc_block","brick","toy_box","book_stack","duck","teddy","ball"],k0={1:{c:[],p:[]},2:{c:["robot"],p:["gnome","bucket","rock","flowerpot","duck","ball","wateringcan"]},3:{c:["red_flamer"],p:["mg","flamer","cereal_box","mug","toaster","cookie_jar","apple","mixer_bot","abc_block"]},4:{c:["red_flamer"],p:["mg","flamer","toolbox","paint_can","jerrycan","monster_truck","brick","ball","toy_car"]},5:{c:["red_flamer"],p:["mg","flamer","blue_heli","wheelbarrow","birdhouse","mushroom","rock","flowerpot","gnome","bucket","wateringcan"]},6:{c:["red_flamer"],p:["mg","flamer","spider_bot","cardboard_box","washing_machine","toy_train","suitcase","book_stack","teddy"]}},dr={},Ot={},Cc=new Set,xa=null;function Lb(){if(xa)return xa;let s=new Ac;return s.setDecoderPath("assets/draco/"),s.setDecoderConfig({type:"wasm"}),xa=new wc,xa.setDRACOLoader(s),xa}var z0=s=>fetch(s).then(e=>e.ok?e.json():null).catch(()=>null),Pc=s=>new Promise(e=>Lb().load(s,t=>e(t),void 0,()=>e(null)));async function Db(s){if(dr[s])return;let[e,t,n]=await Promise.all([Pc("assets/chars/"+s+".glb"),z0("assets/chars/"+s+".json"),yo>0?Pc("assets/lod/chars/"+s+".glb"):null]);e&&(dr[s]={g:e,meta:t,lo:n?Nb(n):null})}function Nb(s){let e=null;return s.scene.traverse(t=>{t.isSkinnedMesh&&!e&&(e=t)}),e?(e.material&&e.material.dispose&&e.material.dispose(),{geo:e.geometry,names:e.skeleton.bones.map(t=>t.name),pos:e.position.clone(),q:e.quaternion.clone(),s:e.scale.clone(),map:new WeakMap}):null}function Ub(s,e,t){let n=t.map.get(e.skeleton.bones[0]&&e.geometry),i=e.skeleton.bones.map(l=>l.name);if(!n){let l=t.names.map(h=>i.indexOf(h));if(l.some(h=>h<0))return;n=t.geo.clone();let c=n.attributes.skinIndex;for(let h=0;h<c.array.length;h++)c.array[h]=l[c.array[h]];c.needsUpdate=!0,t.map.set(e.geometry,n)}let r=new no(n,e.material);r.position.copy(e.position),r.quaternion.copy(e.quaternion),r.scale.copy(e.scale),r.castShadow=e.castShadow,r.receiveShadow=e.receiveShadow,r.bindMode=e.bindMode,r.bind(e.skeleton,e.bindMatrix),r.frustumCulled=!0,r.boundingSphere=e.boundingSphere.clone(),r.onBeforeRender=e.onBeforeRender;let o=e.parent,a=new to;o.add(a),a.addLevel(e,0),a.addLevel(r,13*yo,.1),s.lod=a}var yo=1;function O0(s){yo=s}var Ud=s=>{let e=[];return s.traverse(t=>{t.isMesh&&e.push(t)}),e};async function kb(s){if(Ot[s])return;let[e,t,n]=await Promise.all([Pc("assets/props/"+s+".glb"),z0("assets/props/"+s+".json"),yo>0?Pc("assets/lod/"+s+".glb"):null]);if(e&&t){let i=Ud(e.scene);for(let o of i){o.castShadow=!0,o.receiveShadow=!0;let a=o.material;a&&a.side===Dt&&!a.transparent&&(a.side=Nn)}let r=e.scene;if(n&&/_tank$/.test(s)){let o=Ud(n.scene)[0];o&&(o.material&&o.material.dispose&&o.material.dispose(),o.material=i[0].material),Ot[s]={scene:r,bb:t,loMesh:o};return}if(n){let o=Ud(n.scene);if(o.length===i.length){o.forEach((c,h)=>{let u=c.material;c.material=i[h].material,u&&u!==c.material&&u.dispose(),c.castShadow=!0,c.receiveShadow=!0});let a=Math.max(t.max[0]-t.min[0],t.max[1]-t.min[1],t.max[2]-t.min[2]),l=new to;l.addLevel(e.scene,0),l.addLevel(n.scene,(7+5*a)*yo,.12),r=new kt,r.name="Scene",r.add(l)}}Ot[s]={scene:r,bb:t}}}async function zd(s,e=Pb,t=Ib){e.forEach(o=>Cc.add("c"+o)),t.forEach(o=>Cc.add("p"+o));let n=[...e.filter(o=>!dr[o]).map(o=>()=>Db(o)),...t.filter(o=>!Ot[o]).map(o=>()=>kb(o))],i=0,r=n.length||1;await Promise.all(n.map(o=>o().then(()=>s&&s(++i/r)))),!n.length&&s&&s(1)}function F0(s,e){return s.some(t=>!dr[t]&&!Cc.has("c"+t))||e.some(t=>!Ot[t]&&!Cc.has("p"+t))}var zb={blue_medic:1.8,blue_mg:1.95,blue_flamer:1.9,red_flamer:1.9,blue_spec:1.8,blue_sniper:1.8,blue_heavy:1.95,red_rifle:1.8,red_heavy:2,robot:9},LS=new A,I0=new Xt,xo=new A,ya=new A,va=new A,_a=new A,Ma=new A,Rc=new A,L0=new A,D0=new Xt,kd=new Xt,Ob=new A(-.035,-.05,-.06),Fb=new A(.03,-.06,-.05);function N0(s,e){s.parent.getWorldQuaternion(D0),s.getWorldQuaternion(kd),kd.premultiply(e),s.quaternion.copy(D0.invert().multiply(kd)),s.updateMatrixWorld(!0)}var U0=new WeakMap;function Bb(s){let e=U0.get(s);if(!e){s.boundingBox||s.computeBoundingBox();let t=s.boundingBox,n=t.getSize(new A);e=new Un(t.getCenter(new A),Math.max(n.x,n.y,n.z)*1.3),U0.set(s,e)}return e.clone()}var ba=class{constructor(e,t){let n=dr[e];if(this.name=e,this.s=zb[e]||1.8,this.meta=n.meta||{},this.root=new kt,this.model=C0(n.g.scene),this.model.scale.setScalar(this.s),this.root.add(this.model),this.model.traverse(i=>{i.isMesh&&(i.castShadow=!0,i.receiveShadow=!1,i.isSkinnedMesh&&(i.frustumCulled=!0,i.boundingSphere=Bb(i.geometry),i.onBeforeRender=()=>{this.seenT=performance.now()}),i.material&&(i.material=i.material.clone(),i.material.roughness=.32,i.material.metalness=0,i.material.envMapIntensity=1.25,i.material.side===Dt&&!i.material.transparent&&(i.material.side=Nn))),i.isBone&&(i.name==="spine"&&(this.spine=i),i.name==="head"&&(this.head=i),i.name==="hips"&&(this.hips=i),(this.bones||(this.bones={}))[i.name]=i)}),n.lo){let i=null;if(this.model.traverse(r=>{r.isSkinnedMesh&&(!i||r.geometry.attributes.position.count>i.geometry.attributes.position.count)&&(i=r)}),i)try{Ub(this,i,n.lo)}catch(r){console.warn("charlod",r)}}this.mixer=new ec(this.model),this.acts={};for(let i of n.g.animations){let r=this.mixer.clipAction(i);this.acts[i.name]=r}for(let i of["kick","death","cower"])this.acts[i]&&(this.acts[i].setLoop(Uf),this.acts[i].clampWhenFinished=!0);this.cur=null,this.play("idle",0),this.mixer.update(0),t.add(this.root),this.flash=0}play(e,t=.15,n=1){let i=this.acts[e]||this.acts.idle;i&&(i.timeScale=n,this.noIK=e==="death"||e==="cower",this.cur!==i&&((!(i.isRunning()&&i.getEffectiveWeight()>.05)||e==="death"||e==="kick")&&i.reset(),i.enabled=!0,i.setEffectiveWeight(1),i.play(),this.cur&&t>0?this.cur.crossFadeTo(i,t,!1):this.cur&&this.cur.stop(),this.cur=i,this.curName=e))}arm(e,t=.1,n=1){let i=Ot[e];if(!i)return null;let r=i.bb,o=i.scene.clone(!0),a=r.max[0]-r.min[0]>r.max[2]-r.min[2];a&&(o.rotation.y=-Math.PI/2);let l=a?r.max[0]-r.min[0]:r.max[2]-r.min[2],c=a?r.min[0]:r.min[2],h=r.max[1]-r.min[1],u=new kt;u.add(o),u.scale.setScalar(n);let f=(m,y)=>new A(0,r.min[1]+h*y,c+l*m);this.gp={butt:f(.02,.55),grip:f(.33,.42),fore:f(.66,.6),mz:f(1,.64)},this.root.updateMatrixWorld(!0);let d=this.bones||{},g=d.uarm_a?this.root.worldToLocal(d.uarm_a.getWorldPosition(new A)):null,x=this.meta.handR||[-.11,.75,.2],p=g?new A(g.x*.8,g.y-.07*this.s,g.z+.03*this.s+t*.5):new A(x[0]*this.s,x[1]*this.s+.1,x[2]*this.s-.2);return u.position.copy(p).sub(this.gp.butt.clone().multiplyScalar(n)),this.root.add(u),this.root.updateMatrixWorld(!0),(this.spine||this.root).attach(u),this.gun=u,this.muzzle=new yt,this.muzzle.position.copy(this.gp.mz),u.add(this.muzzle),d.uarm_a&&d.farm_a&&d.hand_a&&d.uarm_b&&d.farm_b&&d.hand_b&&(this.ikOn=!0),u}ik2(e,t,n,i){e.getWorldPosition(xo),t.getWorldPosition(ya),n.getWorldPosition(va);let r=xo.distanceTo(ya),o=ya.distanceTo(va),a=xo.distanceTo(i);a=Math.min(a,(r+o)*.995),a=Math.max(a,Math.abs(r-o)+.001);let l=na.clamp((r*r+o*o-a*a)/(2*r*o),-1,1),c=Math.acos(l);_a.subVectors(xo,ya).normalize(),Ma.subVectors(va,ya).normalize();let h=Math.acos(na.clamp(_a.dot(Ma),-1,1));Rc.crossVectors(Ma,_a),Rc.lengthSq()>1e-8&&(Rc.normalize(),N0(t,I0.setFromAxisAngle(Rc,h-c))),n.getWorldPosition(va),_a.subVectors(va,xo).normalize(),Ma.subVectors(i,xo).normalize(),N0(e,I0.setFromUnitVectors(_a,Ma))}updIK(){if(!this.ikOn||!this.gun||this.noIK)return;let e=this.bones,t=this.gp;this.model.updateMatrixWorld(!0),this.ik2(e.uarm_a,e.farm_a,e.hand_a,this.gun.localToWorld(L0.copy(t.grip).add(Ob))),this.ik2(e.uarm_b,e.farm_b,e.hand_b,this.gun.localToWorld(L0.copy(t.fore).add(Fb)))}hitFlash(){this.flash=.08}update(e){if(performance.now()-(this.seenT||0)>250){if(this.acc=(this.acc||0)+e,this.acc<.1&&this.flash<=0)return;e=this.acc,this.acc=0}else this.acc&&(e+=this.acc,this.acc=0);if(this.mixer.update(e),this.ikOn&&!this.dead&&this.updIK(),this.flash>0){this.flash-=e;let t=this.flash>0;this.model.traverse(n=>{n.isMesh&&n.material.emissive&&n.material.emissive.setHex(t?8930338:0)})}}muzzleWorld(e){return this.muzzle?this.muzzle.getWorldPosition(e):e.copy(this.root.position).setY(1.4)}fade(e){this.model.traverse(t=>{t.isMesh&&(t.material.transparent=e<1,t.material.opacity=e)}),this.gun&&this.gun.traverse(t=>{t.isMesh&&(t.material=t.material.clone(),t.material.transparent=!0,t.material.opacity=e)})}};function B0(s,e=.58){let t=Ot[s];if(!t||t.hull)return;let n=null;if(t.scene.updateMatrixWorld(!0),t.scene.traverse(Y=>{Y.isMesh&&!n&&(n=Y)}),!n)return;let i=Y=>{let te=Y.geometry.clone();return te.applyMatrix4(Y.matrixWorld),te.index||te.setIndex([...Array(te.attributes.position.count).keys()]),te},r=i(n),o=t.bb.max[1]-t.bb.min[1],a=t.bb.min[1]+o*e,l=Y=>{let te=Y.attributes.position,se=Y.index.array,Xe=[],ot=[];for(let q=0;q<se.length;q+=3){let Q=se[q],ve=se[q+1],ae=se[q+2];((te.getY(Q)+te.getY(ve)+te.getY(ae))/3>a?ot:Xe).push(Q,ve,ae)}return[Xe,ot]},[c,h]=l(r),u=r.attributes.position,f=0,d=0,g=0,x=new Set(h);for(let Y of x)f+=u.getX(Y),d+=u.getZ(Y),g++;let p=f/g,m=d/g,y=[...x].map(Y=>[Math.hypot(u.getX(Y)-p,u.getZ(Y)-m),Y]).sort((Y,te)=>Y[0]-te[0]),v=0,b=0,P=Math.floor(y.length*.6);for(let Y=0;Y<P;Y++)v+=u.getX(y[Y][1]),b+=u.getZ(y[Y][1]);v/=P,b/=P;let R=null,E=0;for(let Y of x){let te=Math.hypot(u.getX(Y)-v,u.getZ(Y)-b);te>E&&(E=te,R=Y)}let I=Math.round(Math.atan2(u.getX(R)-v,u.getZ(R)-b)/(Math.PI/2))*(Math.PI/2),z=new Ne().makeRotationY(-I),_=(Y,te)=>{let se=Y.clone();return se.setIndex(te),se.translate(-v,0,-b),se.applyMatrix4(z),se.computeBoundingSphere(),se},T=n.material,k=new ye(_(r,c),T),O=new ye(_(r,h),T),G=(Y,te)=>{let se=new kt;if(!te)return se.add(Y),se;let Xe=new to;return Xe.addLevel(Y,0),Xe.addLevel(te,30*yo,.1),se.add(Xe),se},j=null,H=null;if(t.loMesh){t.loMesh.parent&&t.loMesh.parent.updateMatrixWorld(!0);let Y=i(t.loMesh),[te,se]=l(Y);j=new ye(_(Y,te),T),H=new ye(_(Y,se),T)}t.hull=G(k,j),t.turret=G(O,H),t.pivot=new A(0,0,0),O.geometry.computeBoundingBox();let ee=O.geometry.boundingBox;t.tip=new A(0,(ee.min.y+ee.max.y)/2+o*.05,ee.max.z+.2),k.geometry.computeBoundingBox();let W=k.geometry.boundingBox;t.half=[Math.max(-W.min.x,W.max.x)*.9,0,Math.max(-W.min.z,W.max.z)*.9],t.H=o}function Hb(s){let e=s>>>0||1;return()=>(e^=e<<13,e>>>=0,e^=e>>17,e^=e<<5,e>>>=0,e/4294967296)}function Vt(s,e=s){let t=document.createElement("canvas");return t.width=s,t.height=e,[t,t.getContext("2d")]}function Hn(s,e,t,n,i,r){for(let o=0;o<i;o++){let a=n()<.5?0:255;s.fillStyle=`rgba(${a},${a},${a},${r*n()})`,s.fillRect(n()*e,n()*t,1+n()*3,1+n()*3)}}var Od={};function Gt(s,e){if(Od[s])return Od[s];let t=new Fi(e());return t.wrapS=t.wrapT=xn,t.colorSpace=Lt,t.anisotropy=4,Od[s]=t}function Yt(s){let e=Hb(s.length*131+s.charCodeAt(0)*17);switch(s){case"grass":return Gt(s,()=>{let[t,n]=Vt(512);n.fillStyle="#4f8f2e",n.fillRect(0,0,512,512);for(let i=0;i<9e3;i++){let r=e()*512,o=e()*512,a=4+e()*10,l=e();n.strokeStyle=l<.33?"#3a7322":l<.66?"#66a83a":"#7dbd47",n.lineWidth=1+e(),n.beginPath(),n.moveTo(r,o),n.lineTo(r+(e()-.5)*4,o-a),n.stroke()}for(let i=0;i<30;i++)n.fillStyle="rgba(40,70,20,.18)",n.beginPath(),n.arc(e()*512,e()*512,20+e()*50,0,7),n.fill();return t});case"sand":return Gt(s,()=>{let[t,n]=Vt(512);n.fillStyle="#e3c88a",n.fillRect(0,0,512,512),Hn(n,512,512,e,26e3,.25),n.strokeStyle="rgba(150,110,50,.18)",n.lineWidth=3;for(let i=0;i<18;i++){n.beginPath();let r=e()*512;n.moveTo(0,r);for(let o=0;o<=512;o+=32)n.lineTo(o,r+Math.sin(o*.03+i)*8);n.stroke()}return t});case"wallpaper":return Gt(s,()=>{let[t,n]=Vt(512);n.fillStyle="#a9d4f0",n.fillRect(0,0,512,512);for(let r=0;r<512;r+=64)n.fillStyle="rgba(255,255,255,.35)",n.fillRect(r,0,26,512);let i=(r,o,a,l)=>{n.fillStyle=l,n.beginPath();for(let c=0;c<10;c++){let h=c*Math.PI/5-Math.PI/2,u=c%2?a*.45:a;n.lineTo(r+Math.cos(h)*u,o+Math.sin(h)*u)}n.fill()};for(let r=0;r<14;r++)i(e()*512,e()*512,10+e()*12,["#ffd84a","#ffffff","#ff9a6a"][r%3]);n.fillStyle="rgba(255,255,255,.9)";for(let r=0;r<4;r++){let o=e()*512,a=e()*512;for(let l=0;l<4;l++)n.beginPath(),n.arc(o+l*16,a+l%2*-6,14,0,7),n.fill()}return t});case"playmat":return Gt(s,()=>{let[t,n]=Vt(1024);n.fillStyle="#6cb84a",n.fillRect(0,0,1024,1024),Hn(n,1024,1024,e,2e4,.12),n.fillStyle="#5d6670";for(let r of[180,620])n.fillRect(r,0,110,1024),n.fillRect(0,r,1024,110);n.fillStyle="#ffffff";for(let r of[235,675])for(let o=0;o<1024;o+=60)n.fillRect(r-4,o,8,30),n.fillRect(o,r-4,30,8);let i=[["#4aa0e8",40,40],["#f08a3a",350,60],["#e8d44a",800,50],["#e85a7a",60,360],["#8a6ae8",380,380],["#3ad0b0",820,380],["#f0c040",40,800],["#4ae86a",380,820],["#e84a4a",820,820]];for(let[r,o,a]of i)n.fillStyle=r,n.fillRect(o,a,110,90),n.fillStyle="rgba(0,0,0,.25)",n.fillRect(o,a+70,110,20),n.fillStyle="#fff",n.fillRect(o+20,a+20,24,24),n.fillRect(o+64,a+20,24,24);return n.strokeStyle="#2b70c8",n.lineWidth=40,n.beginPath(),n.moveTo(0,520),n.bezierCurveTo(300,470,500,560,1024,520),n.stroke(),t});case"wood":return Gt(s,()=>{let[t,n]=Vt(512);n.fillStyle="#b07a48",n.fillRect(0,0,512,512);for(let i=0;i<512;i+=64)n.fillStyle=e()<.5?"rgba(90,50,20,.15)":"rgba(255,220,170,.08)",n.fillRect(0,i,512,64),n.fillStyle="rgba(60,30,10,.5)",n.fillRect(0,i,512,2);n.strokeStyle="rgba(80,40,15,.25)";for(let i=0;i<140;i++){n.lineWidth=.5+e()*1.5,n.beginPath();let r=e()*512;n.moveTo(0,r);for(let o=0;o<=512;o+=32)n.lineTo(o,r+Math.sin(o*.02+i)*3);n.stroke()}return t});case"blanket":return Gt(s,()=>{let[t,n]=Vt(512);n.fillStyle="#e64b4b",n.fillRect(0,0,512,512);for(let i=0;i<512;i+=128)n.fillStyle="rgba(255,255,255,.85)",n.fillRect(i+50,0,28,512),n.fillRect(0,i+50,512,28),n.fillStyle="rgba(30,40,120,.55)",n.fillRect(i+58,0,12,512),n.fillRect(0,i+58,512,12);return Hn(n,512,512,e,9e3,.12),t});case"sheet":return Gt(s,()=>{let[t,n]=Vt(256);n.fillStyle="#f3f0e6",n.fillRect(0,0,256,256),Hn(n,256,256,e,3e3,.08),n.fillStyle="#9cc8ee";for(let i=16;i<256;i+=32)for(let r=i/32%2*16+8;r<256;r+=32)n.beginPath(),n.arc(r,i,5,0,7),n.fill();return t});case"water":return Gt(s,()=>{let[t,n]=Vt(512),i=n.createLinearGradient(0,0,512,512);i.addColorStop(0,"#3aa6e0"),i.addColorStop(1,"#2a86c8"),n.fillStyle=i,n.fillRect(0,0,512,512),n.strokeStyle="rgba(255,255,255,.35)";for(let r=0;r<70;r++){n.lineWidth=1+e()*3,n.beginPath();let o=e()*512,a=e()*512,l=20+e()*60;n.moveTo(o,a),n.quadraticCurveTo(o+l/2,a-8,o+l,a),n.stroke()}return t});case"hose":return Gt(s,()=>{let[t,n]=Vt(256,64);n.fillStyle="#2fa84a",n.fillRect(0,0,256,64),n.fillStyle="rgba(255,255,255,.25)",n.fillRect(0,10,256,8),n.fillStyle="rgba(0,0,0,.2)";for(let i=0;i<256;i+=16)n.fillRect(i,0,3,64);return n.fillStyle="#f2e24a",n.fillRect(0,40,256,6),t});case"poolrim":return Gt(s,()=>{let[t,n]=Vt(512,64);for(let i=0;i<512;i+=64)n.fillStyle=i/64%2?"#ffffff":"#ff6a3a",n.fillRect(i,0,64,64);return n.fillStyle="rgba(255,255,255,.4)",n.fillRect(0,12,512,6),t});case"poolfloor":return Gt(s,()=>{let[t,n]=Vt(256);n.fillStyle="#5ac8f0",n.fillRect(0,0,256,256),n.fillStyle="rgba(255,255,255,.5)";for(let i=0;i<10;i++)n.beginPath(),n.arc(e()*256,e()*256,8+e()*14,0,7),n.fill();return t});case"fence":return Gt(s,()=>{let[t,n]=Vt(512);n.fillStyle="#d8c7a4",n.fillRect(0,0,512,512);for(let i=0;i<512;i+=64)n.fillStyle=e()<.5?"#cbb994":"#e2d3b2",n.fillRect(i+3,0,58,512),n.fillStyle="rgba(70,50,30,.55)",n.fillRect(i,0,3,512);return n.fillStyle="rgba(70,50,30,.35)",n.fillRect(0,90,512,18),n.fillRect(0,400,512,18),Hn(n,512,512,e,8e3,.12),t});case"house":return Gt(s,()=>{let[t,n]=Vt(512);n.fillStyle="#efe2c8",n.fillRect(0,0,512,512),n.fillStyle="rgba(160,130,90,.28)";for(let i=0;i<512;i+=32)n.fillRect(0,i,512,4);return Hn(n,512,512,e,6e3,.1),t});case"soil":return Gt(s,()=>{let[t,n]=Vt(256);return n.fillStyle="#6a4a2e",n.fillRect(0,0,256,256),Hn(n,256,256,e,9e3,.3),t});case"cardboard":return Gt(s,()=>{let[t,n]=Vt(256);n.fillStyle="#c49a62",n.fillRect(0,0,256,256),n.fillStyle="rgba(120,80,40,.18)";for(let i=0;i<256;i+=8)n.fillRect(i,0,3,256);return Hn(n,256,256,e,3e3,.1),t});case"tiles":return Gt(s,()=>{let[t,n]=Vt(512);n.fillStyle="#d8d2c4",n.fillRect(0,0,512,512);for(let i=0;i<4;i++)for(let r=0;r<4;r++)n.fillStyle=(r+i)%2?"#f4f0e6":"#c84a3a",n.fillRect(r*128+3,i*128+3,122,122);return Hn(n,512,512,e,9e3,.06),t});case"walltile":return Gt(s,()=>{let[t,n]=Vt(512);n.fillStyle="#b8c8c4",n.fillRect(0,0,512,512);for(let i=0;i<8;i++)for(let r=0;r<8;r++)n.fillStyle=`hsl(170,${18+e()*8}%,${82+e()*6}%)`,n.fillRect(r*64+2,i*64+2,60,60);return Hn(n,512,512,e,4e3,.05),t});case"concrete":return Gt(s,()=>{let[t,n]=Vt(512);n.fillStyle="#8c8e90",n.fillRect(0,0,512,512),Hn(n,512,512,e,4e4,.12),n.strokeStyle="rgba(40,40,40,.35)",n.lineWidth=3;for(let i=0;i<2;i++)n.beginPath(),n.moveTo(0,i*256+1),n.lineTo(512,i*256+1),n.moveTo(i*256+1,0),n.lineTo(i*256+1,512),n.stroke();for(let i=0;i<6;i++)n.fillStyle=`rgba(30,25,20,${.08+e()*.12})`,n.beginPath(),n.ellipse(e()*512,e()*512,20+e()*50,12+e()*30,e()*3,0,6.28),n.fill();return t});case"brickwall":return Gt(s,()=>{let[t,n]=Vt(512);n.fillStyle="#6a5a50",n.fillRect(0,0,512,512);for(let i=0;i<16;i++)for(let r=-1;r<8;r++)n.fillStyle=`hsl(${8+e()*10},${40+e()*15}%,${34+e()*10}%)`,n.fillRect(r*64+i%2*32+2,i*32+2,60,28);return Hn(n,512,512,e,12e3,.08),t});case"counter":return Gt(s,()=>{let[t,n]=Vt(256);n.fillStyle="#e8e4dc",n.fillRect(0,0,256,256),Hn(n,256,256,e,6e3,.12);for(let i=0;i<40;i++)n.fillStyle="rgba(90,90,90,.25)",n.fillRect(e()*256,e()*256,2,2);return t});case"darkwood":return Gt(s,()=>{let[t,n]=Vt(512);n.fillStyle="#5a4030",n.fillRect(0,0,512,512);for(let i=0;i<512;i+=64)n.fillStyle=`rgba(0,0,0,${.15+e()*.1})`,n.fillRect(i,0,3,512);for(let i=0;i<300;i++){n.strokeStyle=`rgba(30,18,10,${e()*.25})`,n.beginPath();let r=e()*512;n.moveTo(r,0),n.bezierCurveTo(r+8,170,r-8,340,r,512),n.stroke()}return t});case"lawn":return Gt(s,()=>{let[t,n]=Vt(512);n.fillStyle="#5aa036",n.fillRect(0,0,512,512);for(let i=0;i<512;i+=128)n.fillStyle="rgba(255,255,255,.05)",n.fillRect(i,0,64,512);return Hn(n,512,512,e,3e4,.1),t});case"path":return Gt(s,()=>{let[t,n]=Vt(256);n.fillStyle="#b8a890",n.fillRect(0,0,256,256);for(let i=0;i<26;i++)n.fillStyle=`hsl(30,${10+e()*10}%,${55+e()*20}%)`,n.beginPath(),n.ellipse(e()*256,e()*256,10+e()*18,8+e()*12,e()*3,0,6.28),n.fill();return Hn(n,256,256,e,4e3,.1),t});case"sky":return Gt(s,()=>{let[t,n]=Vt(16,256),i=n.createLinearGradient(0,0,0,256);return i.addColorStop(0,"#3f8ee6"),i.addColorStop(.55,"#8cc6f5"),i.addColorStop(1,"#e8f4ff"),n.fillStyle=i,n.fillRect(0,0,16,256),t})}throw new Error("tex2 "+s)}var _t=(s,e)=>new A(s,0,e),Ic=1,Gs=()=>(Ic=Ic*16807%2147483647)/2147483647;function bn(s,e,t){let n=Yt(s).clone();return n.repeat.set(e,t),n.needsUpdate=!0,n}function Re(s,e,t,n,i,r,o={}){let a=Ot[e];if(!a)return null;let l=a.bb,c=Math.max(l.max[0]-l.min[0],l.max[2]-l.min[2]);return gc(s,Ot,e,t,n,i,r?r/c:1,o)}function Lc(s,e,t,n,i,r,o,a){let l=new It,c=.22,h=[],u=[],f=new fe(3107358),d=new fe(10213450),g=[[c,0,0],[-c*.5,0,c*.87],[-c*.5,0,-c*.87]],x=[.15,1,0];for(let E=0;E<3;E++){let I=g[E],z=g[(E+1)%3];h.push(...I,...z,...x),u.push(f.r,f.g,f.b,f.r,f.g,f.b,d.r,d.g,d.b)}l.setAttribute("position",new Ke(h,3)),l.setAttribute("color",new Ke(u,3)),l.computeVertexNormals();let p=new At({vertexColors:!0,roughness:.55,side:Nn});p.onBeforeCompile=E=>{E.uniforms.uT={value:0},E.uniforms.uC={value:new ie(0,999)},E.uniforms.uP={value:new ie(0,999)},p.userData.sh=E,E.vertexShader=`uniform float uT; uniform vec2 uC; uniform vec2 uP;
`+E.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vec4 wp = instanceMatrix * vec4(0.,0.,0.,1.); vec2 sg = uP - uC; float sl = max(dot(sg, sg), .0001); vec2 cl = uC + sg * clamp(dot(wp.xz - uC, sg) / sl, 0., 1.); float kc = min(smoothstep(.9, 2.6, distance(wp.xz, cl)), smoothstep(1.6, 4.2, distance(wp.xz, uC))); transformed.y *= mix(.12, 1., kc); float sw = sin(uT*1.6 + wp.x*.21 + wp.z*.17) * .18 * position.y; transformed.x += sw; transformed.z += sw*.6;`)};let m=new Cs(l,p,r),y=new Ne,v=new Xt,b=new A,P=new A,R=new hi;for(let E=0;E<r;E++){let I=o+Gs()*(a-o);R.set((Gs()-.5)*.35,Gs()*6.28,(Gs()-.5)*.35),v.setFromEuler(R),b.set(1+Gs()*.8,I,1+Gs()*.8),P.set(e+Gs()*(n-e),0,t+Gs()*(i-t)),y.compose(P,v,b),m.setMatrixAt(E,y)}return m.castShadow=!1,m.receiveShadow=!0,m.frustumCulled=!0,m.computeBoundingSphere(),s.add(m),p}function Fd(s,e,t,n){let i=new kt;i.position.set(e,0,t);let r=new ye(new Ps(.09,.09,7,8),new At({color:14211280,roughness:.3,metalness:.5}));r.position.y=3.5,i.add(r);let o=new ye(new Jt(2.6,1.6,8,2),new At({color:n,roughness:.5,side:Dt}));o.position.set(1.32,6.1,0),i.add(o),i.userData.cloth=o;let a=new ye(new Ii(3.6,4,40),new ct({color:16764992,transparent:!0,opacity:.55,depthWrite:!1}));return a.rotation.x=-Math.PI/2,a.position.y=.06,i.add(a),i.userData.ring=a,s.add(i),i}function H0(s,e){Os(0),Ic=7;let t={id:1,groundCol:11565640,dustCol:13154464,bounds:[-39,-59,39,59],water:[],grass:null},n=je("floor",{map:bn("wood",1,1),roughness:.5}),i=je("wallpaper",{map:Yt("wallpaper"),roughness:.9}),r=je("trim",{color:16052196,roughness:.45});$n(-40,-60,40,60,0,n,10),$n(-22,-12,22,42,.03,je("mat",{map:Yt("playmat"),roughness:.7}),44),Ae(-41,0,-61,41,46,-60,i,{tile:14,solid:"bound"}),Ae(-41,0,60,41,46,61,i,{tile:14,solid:"bound"}),Ae(-41,0,-60,-40,46,60,i,{tile:14,solid:"bound"}),Ae(40,0,-60,41,46,60,i,{tile:14,solid:"bound"});for(let[d,g,x,p]of[[-40,-60,40,-59.4],[-40,59.4,40,60],[-40,-60,-39.4,60],[39.4,-60,40,60]])Ae(d,0,g,x,1.8,p,r,{solid:!1});let o=new ye(new Jt(30,20),new ct({map:Yt("sky"),color:16777215}));o.position.set(0,24,-59.3),s.add(o);for(let[d,g,x,p]of[[-16,13,16,14.2],[-16,33.8,16,35],[-16,13,-14.8,35],[14.8,13,16,35],[-.6,13,.6,35]])Ae(d,g,-59.6,x,p,-59.1,r,{solid:!1});let a=je("bedwood",{map:bn("wood",1,1),color:13144160,roughness:.45}),l=je("blanket",{map:Yt("blanket"),roughness:.85}),c=je("sheet",{map:Yt("sheet"),roughness:.8});for(let[d,g]of[[-39.5,-19.5],[-19.6,-19.5],[-39.5,28.4],[-19.6,28.4]])Ae(d,0,g,d+1.8,10,g+1.8,a,{tile:4});Ae(-40,9,-20,-18,10.6,30,a,{tile:6,solid:"roof"}),Ae(-40,10.6,-20,-18,15,30,c,{tile:12,solid:"roof"}),Ae(-40.2,15,-16,-17.4,16.2,30.3,l,{tile:16,solid:"roof"}),Ae(-17.6,4.5,-16,-17.2,16,30.3,l,{tile:16,solid:!1}),Ae(-40,0,-21.5,-18,26,-20,a,{tile:6}),Ae(-38,15,-19.5,-26,18,-13,c,{tile:6,solid:!1}),Di.push({name:"bed",min:[-40,-20],max:[-18,30]});let h=je("dresser",{map:bn("wood",1,1),color:15259840,roughness:.42});Ae(31,0,-24,40,30,8,h,{tile:10});for(let d of[8,16,24])Ae(30.8,d-.3,-23,31,d,7,r,{solid:!1});let u=s;Ot.toy_box&&Re(u,"toy_box",0,-47,0,22);let f=[[-9,6,1],[11,2,0],[2,-11,3],[-17,-6,2],[20,-16,1]];for(let[d,g,x]of f)Re(u,"book_stack",d,g,x,7);for(let[d,g,x]of[[-6,22,0],[6,24,1],[16,20,0],[-14,18,1],[-3,-24,0],[9,-26,1],[-12,-28,0],[14,-30,1],[0,34,0]])Re(u,"sandbags",d,g,x,3.6,{low:!0});for(let[d,g,x]of[[-26,24,0],[-26,10,1],[-30,-4,0],[-24,-12,1],[-34,16,0]])Re(u,"sandbags",d,g,x,3.6,{low:!0});for(let[d,g,x]of[[-22,2,0],[24,8,1],[-2,8,0],[5,12,2],[26,-6,0],[-28,-28,1]])Re(u,"brick",d,g,x,3.8,{low:!0});for(let[d,g,x]of[[14,10,0],[-10,-16,1],[22,30,0],[-22,-36,2],[24,-40,1],[8,-18,0]])Re(u,"abc_block",d,g,x,3.2);Re(u,"teddy",30,32,3,11),Re(u,"duck",-8,46,1,3.6),Re(u,"ball",22,46,0,4.4),Re(u,"ball",-30,-44,0,4.4);for(let[d,g]of[[-4,50],[28,-12],[-30,4],[6,-36]])Re(u,"ammo_crate",d,g,0,1.5,{low:!0});return t.ammo=[_t(-4,50),_t(28,-12),_t(-30,4),_t(6,-36)].map(d=>d.setX(d.x+1.6)),Fs(s,e),t.flag=Fd(s,0,-32,14169132),t.flagPos=_t(0,-32),t.start={x:0,z:52,yaw:Math.PI},t.tank={x:13,z:44,yaw:Math.PI},t.arty={x:-14,z:55},t.par=300,t.sun={dir:[.25,1,-.65],col:16773340,int:2.4,hemi:[16774376,9071178,1.05],bg:15259844,fog:[15259844,90,210]},t.waves=[{msg:["H\xDCCUM!","Q\u0131rm\u0131z\u0131lar ev\u0259 do\u011Fru g\u0259lir"],obj:"Q\u0131rm\u0131z\u0131 h\xFCcum\xE7ular\u0131 dayand\u0131r",barrage:[_t(-12,22),_t(-4,26),_t(5,24),_t(13,21),_t(-8,30),_t(9,29),_t(0,20),_t(-18,25)],units:[...[-15,-9,-3,3,9,15].map((d,g)=>({name:"red_rifle",kind:"rusher",x:d,z:22+g%2*4,yaw:0,march:_t(d*.5,44)})),{name:"red_rifle",kind:"rusher",x:-26,z:18,yaw:0,march:_t(-6,40)},{name:"red_rifle",kind:"rusher",x:20,z:16,yaw:0,march:_t(8,40)}]},{trigger:d=>d.alive===0||d.player.z<20,msg:["K\u0130TAB BUNKERL\u018FR\u0130","M\xF6vqel\u0259ri t\u0259mizl\u0259"],obj:"Kitab bunkerl\u0259rini t\u0259mizl\u0259",units:[{name:"red_rifle",kind:"rifle",x:-9,z:1,leash:10},{name:"red_rifle",kind:"rifle",x:11,z:-3,leash:10},{name:"red_heavy",kind:"heavy",x:2,z:-16,leash:9},{name:"red_rifle",kind:"rifle",x:-17,z:-11,leash:10},{name:"red_rifle",kind:"rifle",x:-28,z:8,leash:8},{name:"red_rifle",kind:"rifle",x:-27,z:-10,leash:8},{name:"red_heavy",kind:"heavy",x:20,z:-12,leash:9}]},{trigger:d=>d.alive<=2||d.player.z<-6,msg:["OYUNCAQ QUTUSU QALASI","D\xFC\u015Fm\u0259n tank\u0131!"],obj:"Tank\u0131 v\u0259 qala m\xFCdafi\u0259\xE7il\u0259rini m\u0259hv et",tanks:[{x:-16,z:-34,yaw:0}],units:[{name:"red_rifle",kind:"rifle",x:-8,z:-33,leash:9},{name:"red_rifle",kind:"rifle",x:9,z:-34,leash:9},{name:"red_heavy",kind:"bazooka",x:0,z:-36,leash:7},{name:"red_rifle",kind:"rifle",x:15,z:-38,leash:9},{name:"red_heavy",kind:"heavy",x:-13,z:-40,leash:8},{name:"red_rifle",kind:"rifle",x:24,z:-36,leash:9}]},{trigger:d=>d.alive===0,capture:!0,msg:["BAYRA\u011EI \u018FL\u018F KE\xC7\u0130R","Bayra\u011F\u0131n yan\u0131nda dayan"],obj:"Q\u0131rm\u0131z\u0131 bayra\u011F\u0131 \u0259l\u0259 ke\xE7ir"}],t}function V0(s,e){Os(0),Ic=11;let t={id:2,groundCol:5213998,dustCol:11049584,bounds:[-59,-89,59,59],water:[],grass:[-58,10,58,50]};$n(-62,-92,62,62,0,je("grass",{map:Yt("grass"),roughness:.9}),14);let n=je("fence",{map:Yt("fence"),roughness:.75});Ae(-61,0,-91,-60,14,60,n,{tile:14,solid:"bound"}),Ae(60,0,-91,61,14,60,n,{tile:14,solid:"bound"}),Ae(-61,0,-91,61,14,-90,n,{tile:14,solid:"bound"});let i=je("house",{map:Yt("house"),roughness:.8});Ae(-61,0,60,61,40,64,i,{tile:40,tv:40,solid:"bound"}),Ae(-14,0,57,14,2.2,60,je("step",{color:12235944,roughness:.8}),{tile:4,low:!0}),t.grassMat=Lc(s,-58,10,58,50,e>0?9e3:5200,2.4,6.2),Lc(s,-58,-88,58,8,900,.8,2),Di.push({name:"grass",min:[-58,10],max:[58,50]});let r=new At({map:bn("water",12,1),color:8177904,roughness:.12,metalness:.1,transparent:!0,opacity:.88}),o=new ye(new Jt(120,11),r);o.rotation.x=-Math.PI/2,o.position.set(0,.12,-1),s.add(o),t.waterMat=r,$n(-60,-7.2,60,5.2,.04,je("mud",{map:Yt("soil"),roughness:1}),10),t.water.push([-60,-6.5,60,4.5]);let a=new Jo([...Array(13)].map((p,m)=>new A(-62+m*10.3,.55,6.4+Math.sin(m*1.3)*1.2))),l=new ye(new Wl(a,120,.55,10),je("hose",{map:bn("hose",30,1),roughness:.35}));l.castShadow=!0,l.receiveShadow=!0,s.add(l),ha.push(l);let c=je("sand",{map:Yt("sand"),roughness:.95}),h=je("sbwood",{map:bn("wood",1,1),color:14198888,roughness:.5});$n(-50,-50,-10,-15,.05,c,10),Ae(-51,0,-51,-9,1.6,-50,h,{tile:4,low:!0}),Ae(-51,0,-15,-9,1.6,-14,h,{tile:4,low:!0}),Ae(-51,0,-50,-50,1.6,-15,h,{tile:4,low:!0}),Ae(-10,0,-50,-9,1.6,-31,h,{tile:4,low:!0}),Ae(-10,0,-25,-9,1.6,-15,h,{tile:4,low:!0});for(let[p,m,y]of[[-40,-40,3],[-22,-24,2.4],[-34,-22,2]]){let v=new Bi(1,16,8,0,6.28,0,1.57);v.scale(6,y,5),v.translate(p,0,m),fo(c,v),Ae(p-4,0,m-3,p+4,y*.8,m+3,null,{solid:"dune",low:!0})}Di.push({name:"sand",min:[-50,-50],max:[-10,-15]});let u=17,f=_t(28,-58),d=new ye(new Gl(u,2.2,12,48),je("poolrim",{map:bn("poolrim",16,1),roughness:.3}));d.rotation.x=-Math.PI/2,d.position.set(f.x,2.2,f.z),d.scale.z=1,d.castShadow=!0,d.receiveShadow=!0,s.add(d),ha.push(d);let g=new ye(new fi(u,40),r);g.rotation.x=-Math.PI/2,g.position.set(f.x,1.4,f.z),s.add(g);for(let p=0;p<16;p++){let m=p/16*6.283,y=f.x+Math.cos(m)*u,v=f.z+Math.sin(m)*u;Math.abs(m-2.4)<.3||Ae(y-2.4,0,v-2.4,y+2.4,4.2,v+2.4,null,{solid:"pool"})}t.water.push([f.x-u+2,f.z-u+2,f.x+u-2,f.z+u-2]),Di.push({name:"pool",min:[f.x-u,f.z-u],max:[f.x+u,f.z+u]});let x=s;for(let[p,m,y]of[[-18,28,0],[14,32,1],[-36,22,2],[36,18,3]])Re(x,"rock",p,m,y,4);for(let[p,m,y]of[[-26,-12,0],[-6,-12,1],[12,-14,2],[30,-12,3],[44,-24,0],[6,-30,1]])Re(x,"rock",p,m,y,3.6);for(let[p,m,y]of[[-14,-10,0],[22,-10,0],[-44,-9,0],[48,-40,0]])Re(x,"flowerpot",p,m,y,4.2);for(let[p,m,y]of[[-30,-32,0],[-18,-42,1],[-40,-26,2]])Re(x,"bucket",p,m,y,4.2);for(let[p,m,y]of[[-24,-60,0],[-8,-66,1],[10,-78,2],[-20,-80,3],[44,-82,0]])Re(x,"gnome",p,m,y,4.5);Re(x,"wateringcan",40,30,1,5.5),Re(x,"ball",-46,34,0,5),Re(x,"duck",30,-52,1,4),Re(x,"ball",6,-50,0,4.4);for(let[p,m,y]of[[-6,14,0],[8,12,1],[-24,12,0],[26,14,1],[-8,-20,0],[-30,-48,1],[-14,-34,0],[0,-60,1],[16,-64,0],[-12,-72,1]])Re(x,"sandbags",p,m,y,3.6,{low:!0});for(let[p,m]of[[4,54],[-36,-4],[36,-30],[-4,-46]])Re(x,"ammo_crate",p,m,0,1.5,{low:!0});return t.ammo=[_t(5.6,54),_t(-34.4,-4),_t(37.6,-30),_t(-2.4,-46)],Fs(s,e),t.start={x:0,z:54,yaw:Math.PI},t.tank={x:-14,z:52,yaw:Math.PI},t.arty={x:18,z:55},t.par=360,t.bossPos=_t(4,-66),t.sun={dir:[-.45,1,.35],col:16773848,int:2.7,hemi:[12574975,5929530,1],bg:10473716,fog:[11064564,110,260]},t.waves=[{msg:["H\u018FY\u018FT D\xD6Y\xDC\u015E\xDC","Ot c\u0259ng\u0259lliyind\u0259n ke\xE7"],obj:"Ot c\u0259ng\u0259lliyini t\u0259mizl\u0259",barrage:[_t(-14,30),_t(-4,34),_t(6,28),_t(16,32),_t(-22,26),_t(0,24),_t(24,26),_t(10,36)],units:[...[-20,-12,-4,4,12,20].map((p,m)=>({name:"red_rifle",kind:"rusher",x:p,z:26+m%2*5,march:_t(p*.4,46)})),{name:"red_heavy",kind:"rusher",x:0,z:18,march:_t(0,44),hpMul:2}]},{trigger:p=>p.alive<=2||p.player.z<16,msg:["\u015ELANQ \xC7AYI","Sahil m\xF6vqel\u0259ri"],obj:"\xC7ay\u0131n o tay\u0131n\u0131 t\u0259mizl\u0259",units:[{name:"red_rifle",kind:"rifle",x:-24,z:-15,leash:9},{name:"red_rifle",kind:"rifle",x:-6,z:-16,leash:9},{name:"red_heavy",kind:"heavy",x:12,z:-18,leash:8},{name:"red_rifle",kind:"sniper",x:6,z:-34,leash:6},{name:"red_heavy",kind:"bazooka",x:-12,z:-24,leash:7}]},{trigger:p=>p.alive<=2||p.player.z<-14,msg:["QUM S\u018FHRASI","Qum qutusunda d\xFC\u015Fm\u0259n tank\u0131"],obj:"Qum s\u0259hras\u0131ndak\u0131 tank\u0131 m\u0259hv et",tanks:[{x:-30,z:-36,yaw:.6}],units:[{name:"red_rifle",kind:"rifle",x:-22,z:-30,leash:10},{name:"red_heavy",kind:"heavy",x:-42,z:-42,leash:8},{name:"red_rifle",kind:"rifle",x:30,z:-44,leash:10},{name:"red_heavy",kind:"bazooka",x:16,z:-40,leash:8}]},{trigger:p=>p.alive<=1||p.player.z<-40,boss:!0,msg:["D\u018FM\u0130R T\u0130RAN","N\u0259h\u0259ng robot oyand\u0131!"],obj:"D\u0259mir Tiran\u0131 m\u0259hv et",units:[{name:"red_rifle",kind:"rifle",x:-14,z:-62,leash:10},{name:"red_rifle",kind:"rifle",x:18,z:-64,leash:10}]}],t}function G0(s,e,t){for(let n of s.water)if(e>n[0]&&e<n[2]&&t>n[1]&&t<n[3])return!0;return!1}var Zt=(s,e)=>new A(s,0,e),Ce=(s,e,t=9,n="rifle",i)=>({name:i||(n==="heavy"||n==="bazooka"||n==="mg"?"red_heavy":n==="flamer"?"red_flamer":"red_rifle"),kind:n,x:s,z:e,leash:t}),fs=(s,e,t,n,i="rusher")=>({name:i==="flamer"?"red_flamer":"red_rifle",kind:i,x:s,z:e,march:Zt(t,n)});function Dc(s,e,t,n,i,r,o){Ae(s-1,0,e-1,t+1,i,e,r,{tile:o,solid:"bound"}),Ae(s-1,0,n,t+1,i,n+1,r,{tile:o,solid:"bound"}),Ae(s-1,0,e,s,i,n,r,{tile:o,solid:"bound"}),Ae(t,0,e,t+1,i,n,r,{tile:o,solid:"bound"})}function Nc(s,e,t=1.5){for(let[n,i]of e)Re(s,"ammo_crate",n,i,0,t,{low:!0});return e.map(([n,i])=>Zt(n+1.6,i))}function W0(s,e,t,n,i,r){for(let[a,l]of[[s,e],[t-1.4,e],[s,n-1.4],[t-1.4,n-1.4]])Ae(a,0,l,a+1.4,i,l+1.4,r,{tile:3});Ae(s-.5,i,e-.5,t+.5,i+1,n+.5,r,{tile:6,solid:"roof"})}function X0(s,e){Os(0);let t={id:3,groundCol:14209732,dustCol:14209216,bounds:[-43,-67,43,57],water:[],grass:null};$n(-44,-68,44,58,0,je("ktiles",{map:bn("tiles",1,1),roughness:.35}),12);let n=je("walltile",{map:Yt("walltile"),roughness:.5});Dc(-44,-68,44,58,44,n,12);let i=je("cabinet",{map:bn("wood",1,1),color:15788248,roughness:.5}),r=je("counter",{map:Yt("counter"),roughness:.3});Ae(34,0,-66,44,16,30,i,{tile:10,solid:"bound"}),Ae(33.4,16,-66,44,17.2,30,r,{tile:10,solid:"bound"}),Ae(-44,0,-66,-34,34,-40,je("fridge",{color:15922422,roughness:.2,metalness:.2}),{tile:6,solid:"bound"}),Ae(-44,0,-20,-36,16,8,i,{tile:8,solid:"bound"}),Ae(-44,16,-20,-35.4,17.2,8,r,{tile:8,solid:"bound"});let o=je("ktable",{map:bn("wood",1,1),color:13142616,roughness:.45});W0(-10,-8,12,8,12,o);for(let[l,c]of[[-17,-4],[18,2]])Ae(l-2.5,0,c-2.5,l-1.7,7,c-1.7,o,{tile:2}),Ae(l+1.7,0,c-2.5,l+2.5,7,c-1.7,o,{tile:2}),Ae(l-2.5,0,c+1.7,l-1.7,7,c+2.5,o,{tile:2}),Ae(l+1.7,0,c+1.7,l+2.5,7,c+2.5,o,{tile:2}),Ae(l-2.8,7,c-2.8,l+2.8,7.7,c+2.8,o,{tile:2,solid:"roof"});Di.push({name:"table",min:[-10,-8],max:[12,8]}),$n(-16,30,16,46,.03,je("kmat",{map:Yt("blanket"),color:13689087,roughness:.8}),4);let a=s;for(let[l,c,h]of[[-20,24,0],[18,22,1],[-6,18,0],[6,20,1],[-28,-28,0],[24,-30,1],[-4,-26,0],[10,-24,1],[0,30,0]])Re(a,"sandbags",l,c,h,3.6,{low:!0});for(let[l,c,h]of[[-22,6,1],[24,-6,3],[-26,-46,0],[20,-48,2]])Re(a,"cereal_box",l,c,h,7);for(let[l,c,h]of[[-14,34,0],[14,36,2],[28,14,1],[-28,18,3],[2,-40,0]])Re(a,"mug",l,c,h,3.6);for(let[l,c,h]of[[-18,-16,0],[22,-18,2]])Re(a,"toaster",l,c,h,5.5);for(let[l,c,h]of[[-30,-8,0],[28,-40,1],[-12,-50,2]])Re(a,"cookie_jar",l,c,h,5);for(let[l,c,h]of[[-6,12,0],[8,-14,1],[-24,38,2],[30,40,0],[16,-38,1],[-18,-36,2]])Re(a,"apple",l,c,h,2.6,{low:!0});for(let[l,c,h]of[[12,28,0],[-30,32,1],[30,-16,0]])Re(a,"abc_block",l,c,h,3.2);return t.ammo=Nc(a,[[-4,48],[26,4],[-30,-2],[6,-32]]),Fs(s,e),t.start={x:0,z:50,yaw:Math.PI},t.tank={x:14,z:46,yaw:Math.PI},t.arty={x:-14,z:52},t.par=330,t.bossPos=Zt(0,-56),t.heliPos={x:-24,z:46},t.sun={dir:[.3,1,.5],col:16774372,int:2.3,hemi:[16775408,9075306,1.15],bg:15265520,fog:[15265520,90,200]},t.waves=[{msg:["M\u018FTB\u018FX D\xD6Y\xDC\u015E\xDC","Kafel d\xFCz\u0259nliyind\u0259 h\xFCcum"],obj:"H\xFCcum\xE7ular\u0131 dayand\u0131r",barrage:[Zt(-12,24),Zt(0,22),Zt(12,24),Zt(-6,30),Zt(6,30)],units:[...[-16,-8,0,8,16].map(l=>fs(l,22,l*.5,42)),fs(-4,16,-2,40,"flamer"),fs(10,14,4,40,"flamer")]},{trigger:l=>l.alive===0||l.player.z<18,msg:["STOL ALTI","Masa \u0259traf\u0131nda m\xF6vqel\u0259r"],obj:"Masan\u0131n \u0259traf\u0131n\u0131 t\u0259mizl\u0259",units:[Ce(-6,0,8),Ce(8,-2,8,"mg"),Ce(-20,-14,9),Ce(22,-14,9),Ce(0,-4,6,"medic"),Ce(-26,4,9,"sniper"),Ce(26,-2,9)]},{trigger:l=>l.alive<=2||l.player.z<-12,msg:["TAXIL QALASI","D\xFC\u015Fm\u0259n tank\u0131 g\u0259lir!"],obj:"Tank\u0131 v\u0259 tax\u0131l qalas\u0131n\u0131 m\u0259hv et",tanks:[{x:12,z:-40,yaw:0}],units:[Ce(-22,-44,9,"bazooka"),Ce(20,-44,9),Ce(-6,-36,8,"flamer"),Ce(4,-46,8,"mg"),Ce(-14,-30,9)]},{trigger:l=>l.alive<=1||l.player.z<-36,boss:"mixer",msg:["M\u0130KSER ROBOT","M\u0259tb\u0259xin n\u0259h\u0259ng robotu oyand\u0131!"],obj:"Mikser Robotu m\u0259hv et",units:[Ce(-18,-58,10),Ce(18,-58,10,"medic")]}],t}function q0(s,e){Os(0);let t={id:4,groundCol:9211536,dustCol:10526880,bounds:[-47,-77,47,57],water:[],grass:null};$n(-48,-78,48,58,0,je("concrete",{map:bn("concrete",1,1),roughness:.85}),10);let n=je("brickwall",{map:Yt("brickwall"),roughness:.9});Dc(-48,-78,48,58,40,n,10);let i=new ye(new Jt(50,26),new At({color:12634320,roughness:.5,metalness:.4}));i.position.set(0,13,-77.6),s.add(i);let r=je("shelf",{color:5925504,roughness:.4,metalness:.6}),o=je("ply",{map:bn("wood",1,1),color:14203016,roughness:.6});for(let c of[-60,-30,0,30]){Ae(38,0,c-10,48,1,c+10,r,{tile:4,solid:"bound"});for(let h of[9,18])Ae(38,h,c-10,48,h+.8,c+10,o,{tile:4,solid:!1});Ae(38,0,c-10,39,26,c-9,r,{tile:2}),Ae(38,0,c+9,39,26,c+10,r,{tile:2})}if(W0(-46,-24,-34,10,11,o),!Re(s,"toy_car",0,6,0,36)){let c=je("carbody",{color:2775720,roughness:.25,metalness:.4}),h=je("tyre",{color:1710618,roughness:.9});Ae(-8,3,-12,8,12,24,c,{tile:4}),Ae(-6,12,-4,6,19,14,je("carglass",{color:9091288,roughness:.1,metalness:.3}),{tile:2});for(let[u,f]of[[-9,-6],[9,-6],[-9,18],[9,18]]){let d=new Ps(4,4,3,20);d.rotateZ(Math.PI/2),d.translate(u,4,f),fo(h,d)}}Di.push({name:"car",min:[-9,-12],max:[9,24]});let a=new At({color:1315086,roughness:.05,metalness:.6,transparent:!0,opacity:.85});for(let[c,h,u]of[[-22,26,6],[24,-24,7],[-20,-46,5]]){let f=new ye(new fi(u,28),a);f.rotation.x=-Math.PI/2,f.position.set(c,.05,h),s.add(f),t.water.push([c-u*.8,h-u*.8,c+u*.8,h+u*.8])}let l=s;for(let[c,h,u]of[[-18,30,0],[18,32,1],[-28,20,0],[28,18,1],[0,34,0],[-16,-30,1],[16,-32,0],[-30,-52,1],[30,-56,0]])Re(l,"sandbags",c,h,u,3.6,{low:!0});for(let[c,h,u]of[[-24,8,0],[26,6,2],[-6,-38,1],[12,-54,3]])Re(l,"toolbox",c,h,u,6);for(let[c,h,u]of[[-30,36,0],[30,40,1],[20,-6,2],[-20,-10,0],[-28,-62,1]])Re(l,"paint_can",c,h,u,3.6);for(let[c,h,u]of[[12,44,0],[-34,-36,1],[32,-40,2],[4,-64,0]])Re(l,"jerrycan",c,h,u,4);for(let[c,h,u]of[[-10,26,0],[10,28,1],[-26,-22,2],[26,-48,0]])Re(l,"brick",c,h,u,3.8,{low:!0});return Re(l,"ball",34,50,0,4.4),Re(l,"ball",-38,48,0,3.6),t.ammo=Nc(l,[[-6,50],[-32,-14],[30,-12],[-2,-50]]),Fs(s,e),t.flag=Fd(s,-40,-6,14169132),t.flagPos=Zt(-40,-6),t.start={x:0,z:50,yaw:Math.PI},t.tank={x:-16,z:46,yaw:Math.PI},t.arty={x:18,z:52},t.par=360,t.bossPos=Zt(0,-64),t.heliPos={x:24,z:44},t.sun={dir:[-.3,1,.4],col:16772824,int:2.1,hemi:[14739696,5921370,1.1],bg:12107976,fog:[12107976,90,210]},t.waves=[{msg:["QARAJ","Ya\u011F g\xF6lm\u0259\xE7\u0259l\u0259rind\u0259n uzaq dur"],obj:"Qaraj\u0131n giri\u015Fini t\u0259mizl\u0259",barrage:[Zt(-14,28),Zt(-4,30),Zt(8,30),Zt(18,28)],units:[...[-18,-9,9,18].map(c=>fs(c,28,c*.4,44)),fs(0,30,0,44,"flamer"),{...Ce(-24,22,8,"mg")}]},{trigger:c=>c.alive<=1||c.player.z<24,msg:["MA\u015EIN \u018FTRAFI","Q\u0131rm\u0131z\u0131lar ma\u015F\u0131n\u0131n arxas\u0131nda"],obj:"Ma\u015F\u0131n \u0259traf\u0131ndak\u0131 d\xFC\u015Fm\u0259nl\u0259ri m\u0259hv et",tanks:[{x:22,z:-8,yaw:0}],units:[Ce(-14,-14,9),Ce(14,-16,9,"medic"),Ce(-24,0,8,"bazooka"),Ce(0,-20,8,"mg"),Ce(26,12,8),Ce(-18,-24,9,"sniper")]},{trigger:c=>c.alive<=1||c.player.z<-18,capture:!0,msg:["\u0130\u015E MASASI","Masadak\u0131 bayra\u011F\u0131 \u0259l\u0259 ke\xE7ir"],obj:"Q\u0131rm\u0131z\u0131 bayra\u011F\u0131 \u0259l\u0259 ke\xE7ir",units:[Ce(-30,-20,8,"flamer"),Ce(-26,4,8),Ce(-20,-12,7,"heavy")]},{trigger:c=>c.alive<=1,boss:"truck",msg:["CANAVAR MA\u015EIN","M\xFCh\u0259rrik gurulday\u0131r!"],obj:"Canavar Ma\u015F\u0131n\u0131 m\u0259hv et",units:[Ce(-20,-60,10),Ce(20,-60,10,"bazooka")]}],t}function Y0(s,e){Os(0);let t={id:5,groundCol:5939254,dustCol:11049584,bounds:[-63,-93,63,59],water:[],grass:null,heli:!0};$n(-66,-96,66,62,0,je("lawn",{map:Yt("lawn"),roughness:.9}),14);let n=je("fence",{map:Yt("fence"),roughness:.75});Dc(-64,-94,64,60,14,n,14);let i=new ye(new Bi(240,24,12),new ct({map:Yt("sky"),fog:!1,side:mn,depthWrite:!1}));i.position.set(0,-40,-17),i.renderOrder=-1,s.add(i),$n(-5,-92,5,58,.03,je("path",{map:Yt("path"),roughness:.9}),2);let r=je("soil",{map:Yt("soil"),roughness:1});for(let[c,h,u,f]of[[-56,20,-20,40],[20,16,56,36],[-50,-40,-18,-20],[18,-50,52,-28]])$n(c,h,u,f,.04,r,4),Ae(c-.6,0,h-.6,u+.6,.9,h,je("bedrim",{color:10512954,roughness:.7}),{tile:4,low:!0});Lc(s,-62,-92,62,58,e>0?2600:1400,.5,1.3);let o=new At({map:bn("water",4,4),color:8177904,roughness:.12,metalness:.1,transparent:!0,opacity:.88}),a=new ye(new fi(11,36),o);a.rotation.x=-Math.PI/2,a.position.set(30,.12,-6),s.add(a),t.waterMat=o,t.water.push([22,-14,38,2]);let l=s;for(let[c,h,u]of[[-34,30,0],[-46,26,1],[36,24,2],[-30,-30,0],[34,-40,1],[-44,-70,2],[44,-76,0]])Re(l,"mushroom",c,h,u,9);for(let[c,h,u]of[[-18,12,0],[18,10,1],[-40,0,2],[44,8,3],[-12,-58,0],[14,-62,1]])Re(l,"rock",c,h,u,4);for(let[c,h,u]of[[-24,-10,1],[22,-24,3]])Re(l,"wheelbarrow",c,h,u,9);for(let[c,h,u]of[[-50,-50,0],[50,-14,2],[0,-80,0]])Re(l,"birdhouse",c,h,u,7);for(let[c,h,u]of[[-12,30,0],[12,32,0],[-30,-48,0],[28,-60,0]])Re(l,"flowerpot",c,h,u,4.2);for(let[c,h,u]of[[-20,-70,0],[20,-82,1],[-36,-84,2]])Re(l,"gnome",c,h,u,4.5);for(let[c,h,u]of[[-8,-24,0],[10,-36,1]])Re(l,"bucket",c,h,u,4.2);Re(l,"wateringcan",46,44,1,5.5);for(let[c,h,u]of[[-10,20,0],[10,18,1],[-26,14,0],[26,12,1],[-10,-14,0],[12,-12,1],[-20,-40,0],[0,-50,1],[20,-46,0],[-8,-70,1],[10,-72,0]])Re(l,"sandbags",c,h,u,3.6,{low:!0});return t.ammo=Nc(l,[[-8,52],[-40,-14],[40,-30],[-6,-62]]),Fs(s,e),t.start={x:0,z:52,yaw:Math.PI},t.tank={x:-18,z:48,yaw:Math.PI},t.arty={x:-32,z:52},t.par=390,t.bossPos=Zt(0,-70),t.heliPos={x:16,z:46,yaw:Math.PI},t.sun={dir:[-.4,1,.3],col:16773848,int:2.7,hemi:[12574975,5929530,1],bg:10473716,fog:[11064564,120,280]},t.waves=[{msg:["BA\u011E","Helikopter\u0259 min v\u0259 havadan d\u0259st\u0259k ver!"],obj:"G\xF6b\u0259l\u0259k me\u015F\u0259sini t\u0259mizl\u0259",barrage:[Zt(-14,22),Zt(0,20),Zt(14,22)],units:[...[-22,-11,0,11,22].map(c=>fs(c,18,c*.4,44)),Ce(-34,22,8,"mg"),Ce(34,18,8,"mg")]},{trigger:c=>c.alive<=1||c.player.z<10,msg:["G\xD6LM\u018F\xC7\u018F","Q\u0131rm\u0131z\u0131lar g\xF6lm\u0259\xE7\u0259 \u0259traf\u0131nda"],obj:"G\xF6lm\u0259\xE7\u0259 m\xF6vqel\u0259rini t\u0259mizl\u0259",tanks:[{x:-30,z:-20,yaw:.5}],units:[Ce(-12,-16,9),Ce(14,-14,9),Ce(44,-4,8,"bazooka"),Ce(-26,-32,9,"medic"),Ce(26,-26,9,"flamer"),Ce(0,-30,7,"sniper")]},{trigger:c=>c.alive<=2||c.player.z<-26,msg:["QU\u015E EV\u0130","A\u011F\u0131r q\xFCvv\u0259l\u0259r!"],obj:"Ba\u011F\u0131n sonunu t\u0259mizl\u0259",tanks:[{x:22,z:-60,yaw:0}],units:[Ce(-20,-60,9,"mg"),Ce(-8,-74,9),Ce(12,-76,9,"bazooka"),Ce(-34,-66,9,"flamer"),Ce(30,-70,9,"medic")]},{trigger:c=>c.alive<=1||c.player.z<-60,boss:"gunship",msg:["QIRMIZI QASIR\u011EA","D\xFC\u015Fm\u0259n helikopteri havada!"],obj:"Q\u0131rm\u0131z\u0131 Qas\u0131r\u011Fan\u0131 vur",units:[Ce(-24,-80,10),Ce(24,-80,10)]}],t}function K0(s,e){Os(0);let t={id:6,groundCol:6974056,dustCol:9077880,bounds:[-47,-79,47,57],water:[],grass:null};$n(-48,-80,48,58,0,je("bconc",{map:bn("concrete",1,1),color:11052188,roughness:.9}),10);let n=je("bbrick",{map:Yt("brickwall"),color:11577504,roughness:.95});Dc(-48,-80,48,58,30,n,10);let i=je("beam",{map:bn("darkwood",1,1),roughness:.7});for(let h of[-60,-36,-12,12,36])Ae(-48,26,h-1,48,28,h+1,i,{tile:8,solid:!1});for(let[h,u]of[[-20,-36],[20,-36],[-20,12],[20,12]])Ae(h-1,0,u-1,h+1,26,u+1,i,{tile:3});let r=je("cbox",{map:bn("cardboard",2,2),roughness:.85});for(let[h,u,f,d,g]of[[-46,24,-22,30,8],[10,26,46,32,8],[-30,-4,-4,2,7],[14,-10,40,-4,7],[-46,-30,-26,-24,9],[-6,-32,22,-26,7],[28,-52,46,-46,9],[-34,-54,-10,-48,7]])Ae(h,0,u,f,g,d,r,{tile:3});let o=new ye(new Ps(6,6,22,24),new At({color:9064496,roughness:.4,metalness:.6}));o.position.set(-38,11,-68),o.castShadow=!0,s.add(o),Ae(-44,0,-74,-32,22,-62,null,{solid:"bound"});let a=new ct({color:16744496}),l=new ye(new Jt(4,2),a);l.position.set(-38,4,-61.9),s.add(l);for(let[h,u]of[[0,40],[0,0],[0,-40],[-30,-20],[30,20]]){let f=new ye(new Bi(.7,12,8),new ct({color:16771232}));f.position.set(h,24.5,u),s.add(f)}let c=s;for(let[h,u,f]of[[-32,40,0],[30,44,1],[-8,14,2],[30,-18,0],[-22,-40,1],[8,-42,3],[36,-64,0]])Re(c,"cardboard_box",h,u,f,6.5);for(let[h,u,f]of[[38,6,3],[-40,-10,1]])Re(c,"washing_machine",h,u,f,10);Re(c,"toy_train",0,-14,1,14),Re(c,"toy_train",-6,-64,0,12);for(let[h,u,f]of[[-16,36,0],[16,38,1],[-34,8,2],[12,-56,0]])Re(c,"suitcase",h,u,f,5);for(let[h,u,f]of[[22,6,0],[-14,-16,1],[-30,-66,2]])Re(c,"book_stack",h,u,f,6);Re(c,"teddy",40,50,3,10);for(let[h,u,f]of[[-10,20,0],[8,18,1],[-24,16,0],[26,14,1],[-12,-22,0],[14,-20,1],[-2,-48,0],[24,-40,1]])Re(c,"sandbags",h,u,f,3.6,{low:!0});return t.ammo=Nc(c,[[-6,50],[-36,18],[36,-30],[0,-56]]),Fs(s,e),t.start={x:0,z:50,yaw:Math.PI},t.tank={x:16,z:46,yaw:Math.PI},t.arty={x:-16,z:52},t.par=390,t.bossPos=Zt(10,-66),t.heliPos={x:-22,z:46},t.sun={dir:[.2,1,.3],col:16767144,int:1.5,hemi:[13682880,3813416,.95],bg:2762274,fog:[2762274,50,150]},t.waves=[{msg:["Z\u0130RZ\u018FM\u0130","Qaranl\u0131qda ehtiyatl\u0131 ol"],obj:"Qutular aras\u0131ndak\u0131 d\xFC\u015Fm\u0259nl\u0259ri t\u0259mizl\u0259",barrage:[Zt(-12,30),Zt(0,34),Zt(14,36)],units:[...[-14,-4,6,16].map(h=>fs(h,20,h*.4,42)),fs(-20,18,-6,40,"flamer"),fs(22,18,6,40,"flamer"),Ce(-36,36,7,"sniper")]},{trigger:h=>h.alive<=1||h.player.z<18,msg:["QATAR X\u018FTT\u0130","Oyuncaq qatar stansiyas\u0131"],obj:"Stansiyan\u0131 t\u0259mizl\u0259",units:[Ce(-12,-8,9,"mg"),Ce(14,-16,9),Ce(-24,8,8,"medic"),Ce(26,0,9,"flamer"),Ce(0,-24,8,"bazooka"),Ce(-30,-14,9),Ce(34,-12,8,"mg")]},{trigger:h=>h.alive<=2||h.player.z<-18,msg:["QAZAN OTA\u011EI","Iki d\xFC\u015Fm\u0259n tank\u0131!"],obj:"Tanklar\u0131 m\u0259hv et",tanks:[{x:-14,z:-42,yaw:0},{x:24,z:-58,yaw:0}],units:[Ce(-28,-36,9,"mg"),Ce(4,-38,8,"flamer"),Ce(14,-50,9,"medic"),Ce(-20,-58,9,"bazooka"),Ce(32,-36,9)]},{trigger:h=>h.alive<=1||h.player.z<-46,boss:"spider",msg:["QURD H\xD6R\xDCM\xC7\u018FK","Zirz\u0259minin krali\xE7as\u0131!"],obj:"Qurd H\xF6r\xFCm\xE7\u0259yi m\u0259hv et",units:[Ce(-20,-70,10,"flamer"),Ce(30,-72,10,"mg")]}],t}var Vb={rifle:{hp:70,rof:.13,burst:[3,6],dmg:8,range:44,pref:[10,24],speed:5.2,mag:24,spread:.045,gun:1},heavy:{hp:170,rof:.085,burst:[8,14],dmg:6,range:38,pref:[8,20],speed:3.9,mag:60,spread:.065,gun:1.25},sniper:{hp:60,rof:2.2,burst:[1,1],dmg:42,range:80,pref:[22,45],speed:4.6,mag:5,spread:.01,gun:1.15},bazooka:{hp:120,rof:4.2,burst:[1,1],dmg:95,range:46,pref:[12,28],speed:4.3,mag:1,rocket:!0,spread:.025,gun:1.35},rusher:{hp:24,rof:.22,burst:[2,4],dmg:4,range:30,pref:[2,8],speed:6.2,mag:18,spread:.13,rush:!0,gun:1},medic:{hp:85,rof:.16,burst:[2,4],dmg:6,range:38,pref:[12,22],speed:5.4,mag:20,spread:.05,gun:.9,heal:!0},mg:{hp:165,rof:.065,burst:[14,26],dmg:5.5,range:44,pref:[12,26],speed:3.7,mag:90,spread:.075,gun:1.05,prop:"mg"},flamer:{hp:140,rof:.09,burst:[10,16],dmg:6.5,range:12,pref:[3,7],speed:5.2,mag:50,spread:0,gun:1.05,prop:"flamer",flame:!0}},ds=new tt,vo=new tt,an=new tt,Sn=new tt,Ni=new tt,yi=(s,e)=>e.set(s.pos.x,(s.pos.y||0)+(s.aimH||(s.isTank?1.5:s.isBoss?5.5:s.crouch?.85:1.2)),s.pos.z),Sa=s=>{for(;s>Math.PI;)s-=2*Math.PI;for(;s<-Math.PI;)s+=2*Math.PI;return s},Ws=class{constructor(e){this.def=e,this.team=e.team,this.kind=e.kind||"rifle",this.K=Vb[this.kind],this.ch=new ba(dr[e.name]?e.name:e.team==="blue"?"blue_spec":"red_rifle",M.scene);let t=e.gun||(this.K.prop&&Ot[this.K.prop]?this.K.prop:"rifle");this.ch.arm(t,.08,.84*this.K.gun*(e.gunScale||1)),this.healT=1,this.pos=this.ch.root.position,this.pos.set(e.x,0,e.z),this.yaw=e.yaw||0,this.ch.root.rotation.y=this.yaw,this.maxHp=this.hp=this.K.hp*(e.hpMul||1),this.radius=.42,this.height=this.ch.s*.98,this.plastic=!0,this.headMul=2,this.alive=!0,this.state=e.state||"idle",this.post=new tt(e.x,0,e.z),this.leash=e.leash||0,this.target=null,this.lastKnown=null,this.thinkT=Math.random()*.3,this.cool=ue(.5,1.5),this.burst=0,this.mag=this.K.mag,this.relT=0,this.cover=null,this.coverT=0,this.phase="hide",this.phaseT=0,this.strafeDir=Math.random()<.5?-1:1,this.strafeT=0,this.moving=0,this.shootT=0,this.crouch=!1,this.stuckT=0,this.detT=0,this.det=new tt,this.nadeCd=ue(6,12),this.unseenT=0,this.order=e.order||"follow",this.slot=e.slot||0,this.suppress=0,M.units.push(this),M.actors.push(this)}get eye(){return ds.set(this.pos.x,this.crouch?1:1.55,this.pos.z)}think(e){let t=this.K.range,n=null,i=1e9,r=vo.set(this.pos.x,1.5,this.pos.z);for(let o of e.actors){if(!o.alive||o.team===this.team||o.hidden)continue;let a=Math.hypot(o.pos.x-this.pos.x,o.pos.z-this.pos.z),l=t;if(o.inGrass&&!(o.firedT>0)&&(l=Math.min(l,13)),(o.isTank||o.isBoss)&&(l*=1.4),a>l)continue;let c=a-(o===this.target?6:0)-(o.isPlayer?3:0);c>=i||!Fn(r,yi(o,an))&&!Fn(r,an.set(o.pos.x,(o.height||1.8)*(o.crouch?.7:.92),o.pos.z))||(n=o,i=c)}n?(!this.target&&this.state!=="combat"&&this.onAlert(n.pos),this.target=n,this.lastKnown=(this.lastKnown||new tt).copy(n.pos),this.state="combat",this.unseenT=0):(this.target&&(this.unseenT+=.25),this.unseenT>2.5&&(this.target=null))}onAlert(e){this.team==="red"&&Math.random()<.5&&de("shout",.4,.9+Math.random()*.3,this.pos)}hear(e){this.state==="combat"&&this.target||(this.state="alert",this.lastKnown=(this.lastKnown||new tt).copy(e))}goTo(e,t,n){Sn.set(e.x-this.pos.x,0,e.z-this.pos.z);let i=Sn.length();if(i<.35)return this.moving=0,!0;Sn.divideScalar(i),this.detT>0&&(this.detT-=n,Sn.addScaledVector(this.det,1.2).normalize()),this.separate(Sn);let r=this.pos.x,o=this.pos.z,a=Math.min(t*n,i);On(this.pos,Sn.x*a,Sn.z*a,this.radius);let l=Math.hypot(this.pos.x-r,this.pos.z-o);if(this.moving=l/Math.max(n,1e-4),this.moveDir=Math.atan2(Sn.x,Sn.z),l<a*.3){if(this.stuckT+=n,this.stuckT>.4){this.stuckT=0,this.detT=.9;let c=Math.random()<.5?1:-1;this.det.set(-Sn.z*c,0,Sn.x*c)}}else this.stuckT=Math.max(0,this.stuckT-n);return!1}separate(e){for(let n of M.actors){if(n===this||!n.alive||n.isTank||n.isBoss)continue;let i=this.pos.x-n.pos.x,r=this.pos.z-n.pos.z,o=i*i+r*r;if(o<2.6&&o>1e-4){let a=Math.sqrt(o),l=(1.62-a)/1.62*1.6;e.x+=i/a*l,e.z+=r/a*l}}let t=Math.hypot(e.x,e.z)||1;e.x/=t,e.z/=t}face(e,t,n=9){this.yaw+=Sa(e-this.yaw)*Math.min(1,t*n),this.ch.root.rotation.y=this.yaw}findCover(e,t){this.cover&&(this.cover.user=null,this.cover=null);let n=this.K,i=(n.pref[0]+n.pref[1])/2,r=[];for(let a of Tc){if(a.user)continue;let l=Math.hypot(a.p.x-this.pos.x,a.p.z-this.pos.z);if(l>22||this.leash&&Math.hypot(a.p.x-this.post.x,a.p.z-this.post.z)>this.leash)continue;let c=e.x-a.p.x,h=e.z-a.p.z,u=Math.hypot(c,h);if(u<6||u>n.range||c*a.nx+h*a.nz>-1.5)continue;let f=!1;for(let d of M.units)if(d!==this&&d.alive&&d.team===this.team&&(d.cover&&d.cover.p.distanceToSquared(a.p)<10||d.pos.distanceToSquared(a.p)<5)){f=!0;break}f||r.push({cp:a,sc:l+Math.abs(u-i)*.4+(t?u*.7:0)+(this.team==="red"&&M.player&&a.p.distanceTo(M.player.pos)<9?8:0)})}r.sort((a,l)=>a.sc-l.sc);let o=Ni.set(e.x,1.2,e.z);for(let a=0;a<Math.min(8,r.length);a++){let l=r[a].cp,c=l.h<1.9;if(Fn(an.set(l.p.x,c?.95:1.5,l.p.z),o))continue;let h=null;if(c&&Fn(an.set(l.p.x,1.6,l.p.z),o)&&(h=l.p.clone()),!h)for(let u of[1,-1]){let f=l.p.x-l.nz*u*1.5,d=l.p.z+l.nx*u*1.5;if(Fn(an.set(f,1.5,d),o)&&Fn(vo.set(l.p.x,.6,l.p.z),ds.set(f,.6,d),!1)){h=new tt(f,0,d);break}}if(h)return l.user=this,this.cover=l,this.peekP=h,this.peekLow=c&&h.x===l.p.x&&h.z===l.p.z,this.coverT=ue(5,9),this.phase="go",!0}return this.coverT=ue(1.5,2.5),!1}tryFire(e,t,n){if(this.relT>0){this.relT-=e,this.relT<=0&&(this.mag=this.K.mag);return}if(this.cool-=e,this.cool>0||!n||!n.alive)return;let i=this.K;this.face(Math.atan2(n.pos.x-this.pos.x,n.pos.z-this.pos.z),1,1);let r=this.ch.muzzleWorld(Sn),o=yi(n,Ni),a=r.distanceTo(o),l=i.spread*(this.team==="red"?1+t.easy*1.6:.7)*(1+this.suppress*.5)*(this.moving>1?1.5:1)*(n.moving>3?1.3:1)*(n.isTank||n.isBoss?.5:1);o.x+=(Math.random()-.5)*2*l*a,o.y+=(Math.random()-.5)*1.6*l*a,o.z+=(Math.random()-.5)*2*l*a;let c=an.copy(o).sub(r).normalize();if(this.shootT=.25,this.firedT=1.2,i.flame)this.flame(r,yi(n,Ni),n),this.mag--;else if(i.rocket)Pn("rocket",r,c.multiplyScalar(34),this,{dmg:i.dmg,r:3.6,big:.8,grav:0}),de("whoosh",.6,.8,this.pos),hs(this.ch.muzzle,.9),this.mag=0;else{let h=i.dmg*(this.team==="blue"?1.7:1)*(n.isPlayer&&t.dmgMul||1);Vi(this,r,c,h,i.range+15,{loud:30}),hs(this.ch.muzzle,this.kind==="sniper"?.7:.45),de(this.kind==="sniper"?"shotgun":this.kind==="heavy"||this.kind==="mg"?"minigun":"rifle",this.team==="blue"?.35:.45,this.team==="red"?.82:1.05,this.pos),this.mag--}if(this.mag<=0){this.relT=this.kind==="bazooka"?2.2:2,this.burst=0,this.cool=.3,de("reload",.25,1,this.pos);return}--this.burst>0?this.cool=i.rof*ue(.85,1.2):(this.burst=Math.round(ue(i.burst[0],i.burst[1])),this.cool=i.rof>1?i.rof*ue(.9,1.3):ue(.5,1.1)+(this.team==="red"?t.easy*.8:0))}flame(e,t,n){let i=an.copy(t).sub(e),r=Math.min(this.K.range,i.length());i.normalize();for(let o=0;o<2;o++){let a=ue(.15,1)*r;Bs(vo.copy(e).addScaledVector(i,a).add(Sn.set(ue(-.3,.3),ue(-.2,.3),ue(-.3,.3))),1,.5+a*.09)}Math.random()<.3&&de("whoosh",.35,.5,this.pos),this.firedT=1.2;for(let o of M.actors){if(!o.alive||o.team===this.team||o.hidden)continue;let a=o.pos.x-e.x,l=o.pos.z-e.z,c=Math.hypot(a,l);c>this.K.range+(o.radius||.4)||(a*i.x+l*i.z)/(c+.001)<.9&&c>1.5||Fn(e,yi(o,Ni))&&o.damage(this.K.dmg*(this.team==="blue"?1.5:1)*(o.isPlayer&&M.dmgMul||1),this,i,!1,!1)}ur(this.pos,22,this.team)}heal(){this.healT=1.3;let e=null,t=.92;for(let n of M.actors){if(!n.alive||n.team!==this.team||n.isTank||n.isBoss||n.hidden||!n.maxHp||Math.hypot(n.pos.x-this.pos.x,n.pos.z-this.pos.z)>10)continue;let r=n.hp/n.maxHp;r<t&&(t=r,e=n)}e&&(e.hp=Math.min(e.maxHp,e.hp+(e.isPlayer?9:14)),mi(vo.set(e.pos.x,1.3,e.pos.z),null,6,6356864,3),ri(vo.set(e.pos.x,.1,e.pos.z),6356864,1.6,.4),e.isPlayer&&M.onHealed&&M.onHealed())}throwNade(e){let t=Sn.set(this.pos.x,1.6,this.pos.z),n=e.x-t.x,i=e.z-t.z,r=Math.hypot(n,i),o=Math.max(.7,r/14);Pn("grenade",t,an.set(n/o,22*o/2-1.6/o,i/o),this,{fuse:o+.5,dmg:70,r:4.2,big:.8}),de("whoosh",.4,1.2,this.pos)}update(e,t){if(!this.alive)return this.updDead(e);if(this.hidden){this.ch.update(e);return}this.firedT=Math.max(0,(this.firedT||0)-e),this.shootT=Math.max(0,this.shootT-e),this.suppress=Math.max(0,this.suppress-e*.6),this.moving=0,(this.thinkT-=e)<=0&&(this.thinkT=.25+Math.random()*.1,this.think(t)),this.team==="blue"?this.blueAI(e,t):this.redAI(e,t),this.K.heal&&(this.healT-=e)<=0&&this.heal(),this.anim(e)}anim(e){let t=this.ch;this.moving>.8?t.play("run",.15,Math.max(.6,Math.min(1.35,this.moving/5))):this.crouch?t.play("crouch",.18):this.shootT>0?t.play("shoot",.1):t.play("idle",.25),t.update(e)}combat(e,t,n){let i=this.target,r=this.K;if(!i){if(this.lastKnown){let u=this.goTo(this.lastKnown,r.speed*.8,e);this.moveDir!=null&&this.moving&&this.face(this.moveDir,e),u&&(this.lastKnown=null,this.state="idle")}else this.state="idle";this.crouch=!1;return}let o=Math.hypot(i.pos.x-this.pos.x,i.pos.z-this.pos.z),a=Math.atan2(i.pos.x-this.pos.x,i.pos.z-this.pos.z);if(r.rush){this.crouch=!1;let u=Math.sin(t.clock*3+this.slot*2)*.8;Ni.set(i.pos.x+Math.cos(a)*u*3,0,i.pos.z-Math.sin(a)*u*3),o>r.pref[0]+1&&this.goTo(Ni,r.speed,e),this.face(a,e),this.tryFire(e,t,i);return}if(this.nadeCd-=e,this.team==="red"&&this.kind==="rifle"&&this.nadeCd<=0&&this.unseenT>1&&this.lastKnown&&o<20&&o>7&&(this.nadeCd=ue(10,16),this.throwNade(this.lastKnown)),this.coverT-=e,(!this.cover&&this.coverT<=0||this.cover&&(this.coverT<=0||Math.hypot(this.cover.p.x-i.pos.x,this.cover.p.z-i.pos.z)<5))&&this.findCover(i.pos,n),this.cover){let u=this.cover;if(this.phase==="go"){this.crouch=!1;let f=this.goTo(u.p,r.speed,e);this.moving&&this.face(this.shootT>0?a:this.moveDir,e),o<r.range*.8&&Math.random()<.5&&this.tryFire(e*.6,t,i),f&&(this.phase="hide",this.phaseT=ue(.6,1.4));return}if(this.phaseT-=e,this.phase==="hide")this.crouch=this.peekLow||u.h<1.9,this.goTo(u.p,r.speed*.7,e),this.face(a,e,5),this.relT>0&&(this.relT-=e,this.relT<=0&&(this.mag=r.mag)),this.phaseT<=0&&this.relT<=0&&(this.phase="peek",this.phaseT=ue(1.4,2.8));else{this.crouch=!1;let f=this.goTo(this.peekP,r.speed*.8,e);this.face(a,e),(f||this.peekLow)&&this.tryFire(e,t,i),(this.phaseT<=0||this.relT>0||this.suppress>2.2)&&(this.phase="hide",this.phaseT=ue(.8,1.8)+this.suppress*.4)}return}this.crouch=!1,this.strafeT-=e,this.strafeT<=0&&(this.strafeT=ue(.9,2.1),this.strafeDir*=Math.random()<.75?-1:1);let l=o<r.pref[0]?-1:o>r.pref[1]?1:0,c=Math.cos(a)*this.strafeDir,h=-Math.sin(a)*this.strafeDir;Ni.set(this.pos.x+(c+Math.sin(a)*l*.8)*3,0,this.pos.z+(h+Math.cos(a)*l*.8)*3),this.goTo(Ni,r.speed*.6,e),this.face(a,e),this.tryFire(e,t,i)}redAI(e,t){if(this.state==="combat")return this.combat(e,t,!1);if(this.state==="alert"&&this.lastKnown){let n=this.goTo(this.lastKnown,this.K.speed*.7,e);this.moving&&this.face(this.moveDir,e),n&&(this.state="idle",this.lastKnown=null);return}if(this.def.march){let n=this.goTo(this.def.march,this.K.speed*.8,e);this.moving&&this.face(this.moveDir,e),n&&(this.post.copy(this.def.march),this.def.march=null);return}this.goTo(this.post,2.5,e),this.face(this.yaw+Math.sin(t.clock*.5+this.slot)*.01,e)}blueAI(e,t){let n=t.player;if(!n)return;if(this.order==="attack"){if(this.target)return this.combat(e,t,!0);let o=null,a=1e9;for(let l of t.actors)if(l.alive&&l.team==="red"&&!l.hidden){let c=l.pos.distanceToSquared(this.pos);c<a&&(a=c,o=l)}o&&a>64&&(this.goTo(o.pos,this.K.speed,e),this.moving&&this.face(this.moveDir,e));return}let i=this.order==="hold"?this.holdP:(()=>{let o=[[-2.4,-3],[2.4,-3],[0,-5.2],[-4.8,-5.4],[4.8,-5.4],[0,-8]][this.slot%6],a=Math.sin(n.yaw),l=Math.cos(n.yaw);return Ni.set(n.pos.x+o[0]*l+o[1]*a,0,n.pos.z-o[0]*a+o[1]*l)})();if(!i)return;let r=Math.hypot(i.x-this.pos.x,i.z-this.pos.z);if(this.target&&r<(this.order==="hold"?7:10))return this.leash=this.order==="hold"?7:9,this.post.copy(i),this.combat(e,t,!1);this.cover&&(this.cover.user=null,this.cover=null),this.crouch=!1,this.leash=0,r>1.2?(this.goTo(i,r>6?this.K.speed*1.25:this.K.speed,e),this.target?(this.face(Math.atan2(this.target.pos.x-this.pos.x,this.target.pos.z-this.pos.z),e),this.tryFire(e,t,this.target)):this.moving&&this.face(this.moveDir,e)):(this.crouch=this.order==="hold",this.target?(this.face(Math.atan2(this.target.pos.x-this.pos.x,this.target.pos.z-this.pos.z),e),this.tryFire(e,t,this.target)):this.face(n.yaw,e,3)),r>40&&this.pos.set(i.x,0,i.z)}damage(e,t,n,i,r){this.alive&&(this.hp-=e,this.ch.hitFlash(),this.suppress=Math.min(4,this.suppress+.6),t&&t.pos&&t.team!==this.team&&(!this.target||this.state!=="combat")&&(this.state="combat",this.lastKnown=(this.lastKnown||new tt).copy(t.pos),t.alive&&(this.target=t)),this.hp<=0?this.die(t,n,r,i):this.team==="blue"&&!this.isPlayer&&Math.random()<.2&&de("hurt",.3,1.2,this.pos))}die(e,t,n,i){this.alive=!1,this.dead=!0,this.deadT=0,this.cover&&(this.cover.user=null);let r=nd[this.team];an.set(this.pos.x,.9,this.pos.z),n||i||Math.random()<.45?(this.ch.root.visible=!1,jn(an,r,30,1.1,n?1.3:.9),this.gone=!0):(this.ch.play("death",.08),jn(an,r,12,.9,.7)),de("glass",.55,.55+Math.random()*.15,this.pos),de("impact",.4,1.3,this.pos),M.onKill&&M.onKill(this,e)}updDead(e){if(this.deadT+=e,this.gone){this.removed||(this.removed=!0,M.scene.remove(this.ch.root));return}if(this.ch.update(e),this.deadT>2.4&&!this.removed){let t=1-(this.deadT-2.4)/.8;t<=0?(this.removed=!0,M.scene.remove(this.ch.root)):this.ch.root.position.y=-(1-t)*.4}}},Ta=class{constructor(e,t,n,i,r={}){let o=Ot[e==="blue"?"blue_tank":"red_tank"];this.team=e,this.isTank=!0,this.alive=!0,this.radius=2.6,this.height=2.8,this.plastic=!1,this.root=new kt,this.hull=o.hull.clone(!0),this.turret=o.turret.clone(!0),this.root.add(this.hull),this.root.add(this.turret),this.turret.position.copy(o.pivot),this.tip=o.tip.clone(),this.half=o.half,this.height=o.H||3.4,M.scene.add(this.root),this.pos=this.root.position,this.pos.set(t,0,n),this.yaw=i,this.tYaw=i,this.pitch=0,r.tint&&this.root.traverse(a=>{a.isMesh&&(a.material=a.material.clone(),a.material.color.setHex(r.tint))}),this.maxHp=this.hp=r.hp||(e==="blue"?650:480),this.v=0,this.cd=ue(1.5,3),this.driver=r.driver||(e==="red"?"ai":null),this.mgCd=0,this.thinkT=0,this.flash=0,this.solid={min:new tt,max:new tt,kind:"tank",ref:this},this.updSolid(),Cn.push(this.solid),M.tanks.push(this),M.actors.push(this),this.root.rotation.y=i,this.root.traverse(a=>{a.isMesh&&(a.castShadow=!0,a.receiveShadow=!0,a.material&&(a.material=a.material.clone(),a.material.roughness=.38))})}get noBullet(){return!0}updSolid(){let e=Math.abs(Math.cos(this.yaw)),t=Math.abs(Math.sin(this.yaw)),n=this.half[0]*e+this.half[2]*t,i=this.half[0]*t+this.half[2]*e;this.solid.min.set(this.pos.x-n,0,this.pos.z-i),this.solid.max.set(this.pos.x+n,this.height*.78,this.pos.z+i)}drive(e,t,n){let i=t*14;this.v+=i*e,this.v*=Math.pow(t?.55:.12,e),this.v=Math.max(-5,Math.min(10,this.v)),this.yaw-=n*1.7*e*(this.v<-.3?-1:1)*Math.min(1,.35+Math.abs(this.v)/4),this.open=!0;let r=this.pos.x,o=this.pos.z;On(this.pos,Math.sin(this.yaw)*this.v*e,Math.cos(this.yaw)*this.v*e,2.1),this.open=!1;let a=Math.hypot(this.pos.x-r,this.pos.z-o);if(Math.abs(this.v)>1&&a<Math.abs(this.v)*e*.3&&(this.v*=.5),this.root.rotation.y=this.yaw,this.updSolid(),this.speed=a/Math.max(e,1e-4),this.speed>2&&Math.random()<e*14&&cr(ds.set(this.pos.x-Math.sin(this.yaw)*2.6+(Math.random()-.5)*2.4,.3,this.pos.z-Math.cos(this.yaw)*2.6),null,M.dustCol||12101776,.6,.35,.9),this.speed>3)for(let l of M.units)l.alive&&l.team!==this.team&&Math.hypot(l.pos.x-this.pos.x,l.pos.z-this.pos.z)<2.6&&l.damage(999,this,null,!1,!0)}aimTurret(e,t,n=1.6){let i=Sa(t-this.tYaw);return this.tYaw+=Math.sign(i)*Math.min(Math.abs(i),n*e),this.turret.rotation.y=this.tYaw-this.yaw,Math.abs(i)}muzzleWorld(e){return e.copy(this.tip).applyAxisAngle(vo.set(0,1,0),this.tYaw).add(this.pos).add(an.set(0,this.turret.position.y,0))}fire(e,t){if(this.cd>0)return!1;this.cd=this.team==="blue"?1.3:ue(3.2,4.4);let n=this.muzzleWorld(new tt),i=e?e.clone():new tt(Math.sin(this.tYaw),Math.sin(this.pitch),Math.cos(this.tYaw)).normalize();return Pn("shell",n,i.multiplyScalar(this.team==="blue"?75:48),t||this,{ign:this,dmg:this.team==="blue"?170:45,r:this.team==="blue"?4.6:3.6,big:this.team==="blue"?1:.8,grav:3}),Bs(n,5,1.4),gi(n,4,1.6,9077884,1.4),de("boom",.55,1.5,n),de("shotgun",.5,.6,n),this.recoil=.35,M.cam&&t&&t.isPlayer&&(M.shake=Math.min(1.5,M.shake+.45)),ur(n,60,this.team),!0}damage(e,t,n){this.alive&&(this.hp-=e,this.flash=.08,this.driver==="player"&&M.onPlayerTankHit&&M.onPlayerTankHit(e,t),this.hp<=0&&this.destroy(t))}destroy(e){this.alive=!1,this.cd=99;let t=this.pos.clone().setY(1.4);Bn(t,6,90,e,2.2),setTimeout(()=>M.mode==="play"&&Bn(t.clone().add(new tt(1,.5,-1)),4,40,e,1.2),250),jn(t,this.team==="blue"?4026288:10238506,40,2.5,1.4),this.turretV=new tt(ue(-3,3),11,ue(-3,3)),this.root.traverse(n=>{n.isMesh&&n.material.color.multiplyScalar(.28)}),this.smokeT=14,M.onKill&&M.onKill(this,e)}update(e,t){if(this.cd-=e,this.recoil>0&&(this.recoil=Math.max(0,this.recoil-e*1.6)),this.turret.children[0]&&(this.turret.position.z=this.turret.position.z),!this.alive){this.turretV&&(this.turret.position.addScaledVector(this.turretV,e),this.turretV.y-=22*e,this.turret.rotation.x+=e*2,this.turret.position.y<-1&&(this.turretV=null)),this.smokeT>0&&(this.smokeT-=e,Math.random()<e*6&&gi(ds.set(this.pos.x,2,this.pos.z),1,2.2,2762790,2.4),Math.random()<e*4&&Bs(ds.set(this.pos.x,1.5,this.pos.z),1,1.4));return}this.flash>0&&(this.flash-=e),this.driver==="ai"&&this.ai(e,t)}ai(e,t){if((this.thinkT-=e)<=0){this.thinkT=.4;let a=null,l=1e9,c=ds.set(this.pos.x,2.2,this.pos.z);for(let h of t.actors){if(!h.alive||h.team===this.team||h.hidden)continue;let u=Math.hypot(h.pos.x-this.pos.x,h.pos.z-this.pos.z)-(h.isPlayer?6:0)-(h.isTank?8:0);u>62||u>=l||Fn(c,yi(h,an))&&(a=h,l=u)}this.target=a,a&&(this.lastKnown=a.pos.clone())}let n=this.target,i=0,r=0,o=n?n.pos:this.def&&this.def.march?this.def.march:this.lastKnown;if(o){let a=Math.hypot(o.x-this.pos.x,o.z-this.pos.z),l=Math.atan2(o.x-this.pos.x,o.z-this.pos.z),c=Sa(l-this.yaw);!n||a>26?(i=Math.abs(c)<1?1:.2,r=-Math.sign(c)*Math.min(1,Math.abs(c)*2)):a<13?(i=-.8,r=Math.sign(c)*.3):(r=-Math.sign(Sa(c+Math.PI/2))*.6,i=.5*Math.sin(t.clock*.3+this.pos.x))}if(this.drive(e,i*.75,r),n){let a=this.muzzleWorld(Sn),l=yi(n,Ni),c=Math.atan2(l.x-a.x,l.z-a.z);if(this.aimTurret(e,c,1.1)<.07&&this.cd<=0){let u=1.8+t.easy*4;l.x+=ue(-u,u),l.z+=ue(-u,u);let f=an.copy(l).sub(a),d=f.length();f.y+=d*d*3/4608,this.fire(f.normalize())}}}},Uc=class{constructor(e,t){this.ch=new ba("robot",M.scene),this.pos=this.ch.root.position,this.pos.set(e,0,t),this.yaw=0,this.team="red",this.isBoss=!0,this.alive=!0,this.plastic=!0,this.headMul=1.5,this.radius=2.4,this.height=this.ch.s*.96,this.maxHp=this.hp=1750,this.state="sleep",this.atkT=3,this.atk=null,this.summoned=0,this.thinkT=0,this.ch.model.traverse(n=>{n.isMesh&&(n.material.metalness=.15)}),M.actors.push(this),this.ch.play("idle",0)}hand(e,t){let n=this.ch.meta[e]||[0,.6,.3],i=this.ch.s;return this.ch.root.localToWorld(t.set(n[0]*i,n[1]*i,n[2]*i+.6))}damage(e,t,n,i,r){this.alive&&(this.state==="sleep"&&this.wake(),this.hp-=e*(r?1:.8),this.ch.hitFlash(),this.hp<=0&&this.die(t))}wake(){this.state==="sleep"&&(this.state="fight",M.onBossWake&&M.onBossWake(this))}die(e){this.alive=!1,this.state="dead",this.ch.play("death",.1),this.deadT=0,M.onKill&&M.onKill(this,e)}update(e,t){let n=this.ch;if(!this.alive){if(this.deadT+=e,this.deadT<3&&Math.random()<e*7){let c=ds.set(this.pos.x+ue(-3,3),ue(1,7),this.pos.z+ue(-3,3));Bn(c,2,0,null,.9),jn(c,Math.random()<.5?12073516:10132122,8,2,1)}this.deadT>3&&!this.gone&&(this.gone=!0,n.root.visible=!1,Bn(this.pos.clone().setY(3),8,0,null,3),jn(ds.set(this.pos.x,4,this.pos.z),12073516,50,4,1.6),jn(ds,10132122,40,4,1.5)),this.gone||n.update(e);return}let i=t.player;if(this.state==="sleep"){i&&Math.hypot(i.pos.x-this.pos.x,i.pos.z-this.pos.z)<48&&this.wake(),n.update(e);return}if((this.thinkT-=e)<=0){this.thinkT=.5;let c=null,h=1e9;for(let u of t.actors){if(!u.alive||u.team==="red"||u.hidden)continue;let f=u.pos.distanceTo(this.pos)-(u.isPlayer?8:0);f<h&&(h=f,c=u)}this.target=c}let r=this.target;if(!r){n.play("idle"),n.update(e);return}let o=Math.hypot(r.pos.x-this.pos.x,r.pos.z-this.pos.z),a=Math.atan2(r.pos.x-this.pos.x,r.pos.z-this.pos.z);this.yaw+=Sa(a-this.yaw)*Math.min(1,e*1.5),n.root.rotation.y=this.yaw;let l=this.hp/this.maxHp;if((l<.66&&this.summoned<1||l<.33&&this.summoned<2)&&(this.summoned++,t.onBossSummon&&t.onBossSummon(this)),this.atk){let c=this.atk;if(c.t-=e,c.n-=e,c.k==="volley"&&c.n<=0&&c.left>0){c.n=.12,c.left--;let h=this.hand(c.left%2?"handR":"handL",Sn.set(0,0,0)),u=yi(r,Ni);u.x+=ue(-2,2),u.z+=ue(-2,2),u.y+=ue(-.5,.5),Pn("bolt",h,an.copy(u).sub(h).normalize().multiplyScalar(34),this,{dmg:9,r:1.6}),de("laser",.5,.8,this.pos)}if(c.k==="rockets"&&c.n<=0&&c.left>0){c.n=.22,c.left--;let h=this.ch.s,u=c.left%2?1:-1,f=n.root.localToWorld(Sn.set(u*.3*h,.82*h,0)),d=new tt(r.pos.x+ue(-5,5),0,r.pos.z+ue(-5,5));ri(d,16724e3,3.2,1.6);let g=1.6,x=d.x-f.x,p=d.z-f.z;Pn("rocket",f,an.set(x/g,(0-f.y+15*g*g)/g,p/g),this,{grav:30,dmg:32,r:3.6,big:.9,life:4}),de("whoosh",.6,.7,this.pos)}if(c.k==="stomp"&&!c.done&&c.t<.7&&(c.done=!0,Bn(this.pos.clone().add(an.set(Math.sin(this.yaw)*3,0,Math.cos(this.yaw)*3)),10,40,this,1.6),ri(this.pos,16777215,14,.6)),c.k==="walk"){an.set(Math.sin(this.yaw),0,Math.cos(this.yaw));let h=o>22?3:o<12?-2:0;h?(On(this.pos,an.x*h*e,an.z*h*e,2.2),n.play("run",.3,.45)):n.play("idle",.3),Math.random()<e*2&&h&&(t.shake=Math.min(.5,t.shake+.12))}c.t<=0&&(this.atk=null,this.atkT=ue(.6,1.4))}else if(this.atkT-=e,n.play("idle",.3),this.atkT<=0){let c=Math.random(),h=l<.5?1.4:1;o<10?(this.atk={k:"stomp",t:1.3,n:0},n.play("kick",.1,.7),de("roar",.7,.6,this.pos)):c<.45?(this.atk={k:"volley",t:2.2,n:.3,left:Math.round(12*h)},n.play("shoot",.1,.6)):c<.75?(this.atk={k:"rockets",t:2.4,n:.4,left:Math.round(6*h)},n.play("shoot",.1,.5)):this.atk={k:"walk",t:ue(2,3.5),n:0}}n.update(e)}};var pr=new tt,Bd=new tt,vi=new tt,_o=new tt,kc=new tt,Gi=s=>{for(;s>Math.PI;)s-=6.2832;for(;s<-Math.PI;)s+=6.2832;return s};function Fc(s,e,t=0,n=!1){let i=Ot[s],r=new kt;if(!i){let h=new ye(new qn(e*.7,e*.5,e),new At({color:10111546}));return h.position.y=e*.25,r.add(h),{g:r,h:e*.5,mats:[h.material]}}let o=i.bb,a=e/Math.max(o.max[0]-o.min[0],o.max[2]-o.min[2]),l=i.scene.clone(!0);l.scale.setScalar(a),l.rotation.y=t,l.position.y=-o.min[1]*a;let c=[];return l.traverse(h=>{h.isMesh&&(h.castShadow=!0,h.receiveShadow=!1,h.material=h.material.clone(),c.push(h.material),n&&(h.material.onBeforeCompile=u=>{u.fragmentShader=u.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
 diffuseColor.rgb = vec3(max(diffuseColor.b, diffuseColor.r) * 1.05, diffuseColor.g * .55, min(diffuseColor.r, diffuseColor.b) * .6);`)}))}),r.add(l),{g:r,h:(o.max[1]-o.min[1])*a,mats:c,inner:l}}function Z0(s,e){for(let t of s)t.emissive&&t.emissive.setHex(e?8930338:0)}var zc=class{constructor(e,t,n=1){let i=Fc("turret",2.4,0);this.root=i.g,this.mats=i.mats,this.pos=this.root.position,this.pos.set(e,0,t),M.scene.add(this.root),this.team="blue",this.isTurret=!0,this.alive=!0,this.radius=1.1,this.height=Math.max(1.6,i.h),this.aimH=this.height*.6,this.maxHp=this.hp=260+n*60,this.plastic=!0,this.headMul=1,this.yaw=0,this.cool=1,this.burst=8,this.thinkT=0,this.flash=0,this.dmg=6+n*1.5,this.mz=new yt,this.mz.position.set(0,this.height*.72,1.6),this.root.add(this.mz);let r=new ye(new Ii(1.25,1.55,28),new ct({color:3837183,transparent:!0,opacity:.7,depthWrite:!1}));r.rotation.x=-Math.PI/2,r.position.y=.06,this.root.add(r),this.solid={min:new tt(e-.9,0,t-.9),max:new tt(e+.9,this.height*.9,t+.9),kind:"turret",low:!0,ref:this},Cn.push(this.solid),M.actors.push(this)}damage(e,t,n,i,r){!this.alive||M.ending||(this.hp-=e*(r?1:.6),this.flash=.08,this.hp<=0&&this.die())}die(){this.alive=!1,Bn(this.pos.clone().setY(1),3,0,null,1),jn(pr.set(this.pos.x,1.2,this.pos.z),3112416,22,1.4,1),this.root.visible=!1;let e=Cn.indexOf(this.solid);e>=0&&Cn.splice(e,1),M.onTurretDown&&M.onTurretDown(this)}update(e){if(!this.alive)return;if(this.flash>0&&(this.flash-=e,Z0(this.mats,this.flash>0)),(this.thinkT-=e)<=0){this.thinkT=.4;let a=null,l=36,c=Bd.set(this.pos.x,this.height*.75,this.pos.z);for(let h of M.actors){if(!h.alive||h.team!=="red"||h.hidden)continue;let u=Math.hypot(h.pos.x-this.pos.x,h.pos.z-this.pos.z);u<l&&(h.isBoss||Fn(c,yi(h,kc)))&&(l=u,a=h)}this.target=a}let t=this.target;if(!t||!t.alive)return;let n=Math.atan2(t.pos.x-this.pos.x,t.pos.z-this.pos.z);if(this.yaw+=Gi(n-this.yaw)*Math.min(1,e*5),this.root.rotation.y=this.yaw,(this.cool-=e)>0||Math.abs(Gi(n-this.yaw))>.15)return;let i=this.mz.getWorldPosition(_o),r=yi(t,kc),o=i.distanceTo(r);r.x+=ue(-.05,.05)*o,r.y+=ue(-.03,.03)*o,r.z+=ue(-.05,.05)*o,Vi(this,i,vi.copy(r).sub(i).normalize(),this.dmg*(t.isBoss?.6:1),60,{loud:30}),hs(this.mz,.45),de("minigun",.25,1.2,this.pos),--this.burst>0?this.cool=.1:(this.burst=8,this.cool=ue(.6,1))}},Gb={mixer:{prop:"mixer_bot",n:"M\u0130KSER ROBOT",sub:"M\u0259tb\u0259x n\u0259h\u0259ngi oyand\u0131!",size:9,hp:2300,fy:0,move:"walk",speed:3.2,atk:["volley","spin","lob"],col:13647920},truck:{prop:"monster_truck",n:"CANAVAR MA\u015EIN",sub:"N\u0259h\u0259ng ma\u015F\u0131n m\xFCh\u0259rriki i\u015F\u0259 sald\u0131!",size:12,hp:2600,fy:0,move:"drive",speed:7,atk:["ram","lob","jump","ram"],col:13656096},gunship:{prop:"blue_heli",n:"QIRMIZI QASIR\u011EA",sub:"D\xFC\u015Fm\u0259n helikopteri havada!",size:13,hp:2200,fy:0,swap:!0,move:"fly",speed:11,atk:["strafe","salvo","strafe"],col:13643808},spider:{prop:"spider_bot",n:"QURD H\xD6R\xDCM\xC7\u018FK",sub:"Zirz\u0259minin sahibi oyand\u0131!",size:10,hp:2800,fy:0,move:"walk",speed:4.2,atk:["pounce","volley","mines"],col:8405184}},Oc=class{constructor(e,t,n,i={}){let r=this.cfg={...Gb[e],...i};this.type=e;let o=Fc(r.prop,r.size,r.fy,r.swap);this.root=o.g,this.inner=o.inner||o.g.children[0],this.mats=o.mats,M.scene.add(this.root),this.pos=this.root.position,this.pos.set(t,0,n),this.yaw=i.yaw||0,this.team="red",this.isBoss=!0,this.alive=!0,this.plastic=!0,this.headMul=1.3,this.H=o.h,this.radius=r.size*.36,this.height=o.h,this.aimH=o.h*.5,this.maxHp=this.hp=r.hp*(M.easy?.8:1),this.state="sleep",this.atkT=2.5,this.atk=null,this.summoned=0,this.thinkT=0,this.flash=0,this.t=0,this.orb=0,r.move==="fly"&&(this.isFly=!0,this.alt=15,this.pos.y=4,this.rotor=Hd(r.size*.55,3153952),this.rotor.position.y=o.h*.98,this.root.add(this.rotor)),this.ai=0,M.actors.push(this),this.root.rotation.y=this.yaw}damage(e,t,n,i,r){this.alive&&(this.state==="sleep"&&this.wake(),this.hp-=e*(r?1:.8),this.flash=.08,this.hp<=0&&this.die(t))}wake(){this.state==="sleep"&&(this.state="fight",M.onBossWake&&M.onBossWake(this))}die(e){this.alive=!1,this.state="dead",this.deadT=0,this.atk=null,M.onKill&&M.onKill(this,e)}pt(e,t,n,i){return this.root.localToWorld(i.set(e,t,n))}contact(e,t){let n=this.atk;for(let i of M.actors){if(!i.alive||i.team==="red"||i.hidden||n.hit.has(i))continue;Math.hypot(i.pos.x-this.pos.x,i.pos.z-this.pos.z)<e+(i.radius||.4)&&(i.pos.y||0)<this.pos.y+this.H&&(n.hit.add(i),i.damage(t*(i.isTank?1.4:1)*(i.isPlayer&&M.dmgMul||1),this,vi.set(i.pos.x-this.pos.x,0,i.pos.z-this.pos.z).normalize(),!1,!0),M.shake=Math.min(1.2,M.shake+.5),de("metal",.7,.6,this.pos))}}lob(e,t,n=30){let i=this.atk;if(i.n>0||i.left<=0)return;i.n=.22,i.left--;let r=this.pt(ue(-.3,.3)*this.cfg.size*.3,this.H*.9,0,_o),o=new tt(e.pos.x+ue(-5,5),0,e.pos.z+ue(-5,5));ri(o,16724e3,3.2,1.6);let a=1.6,l=o.x-r.x,c=o.z-r.z;Pn("rocket",r,vi.set(l/a,(0-r.y+15*a*a)/a,c/a),this,{grav:30,dmg:n,r:3.6,big:.9,life:4}),de("whoosh",.6,.7,this.pos)}update(e,t){var g,x,p,m;this.t+=e,this.flash>0&&(this.flash-=e,Z0(this.mats,this.flash>0)),this.rotor&&(this.rotor.rotation.y+=e*(this.alive?26:6));let n=this.cfg;if(!this.alive){if(this.deadT+=e,this.isFly&&(this.pos.y=Math.max(0,this.pos.y-e*(4+this.deadT*8)),this.root.rotation.y+=e*3,this.inner.rotation.z=Math.min(.5,this.deadT*.3)),this.deadT<3&&Math.random()<e*7){let y=pr.set(this.pos.x+ue(-3,3),this.pos.y+ue(1,this.H),this.pos.z+ue(-3,3));Bn(y,2,0,null,.9),jn(y,n.col,8,2,1)}this.deadT>3&&!this.gone&&(this.gone=!0,this.root.visible=!1,Bn(this.pos.clone().setY(this.pos.y+3),8,0,null,3),jn(pr.set(this.pos.x,this.pos.y+4,this.pos.z),n.col,50,4,1.6),jn(pr,10132122,40,4,1.5),gi(pr,10,6,3355443,4));return}let i=t.player;if(this.state==="sleep"){i&&Math.hypot(i.pos.x-this.pos.x,i.pos.z-this.pos.z)<50&&this.wake(),this.inner.position.y=((x=(g=this.inner.userData).y0)!=null?x:g.y0=this.inner.position.y)+Math.sin(this.t*1.5)*.05,this.isFly&&(this.pos.y=0);return}if((this.thinkT-=e)<=0){this.thinkT=.5;let y=null,v=1e9;for(let b of t.actors){if(!b.alive||b.team==="red"||b.hidden)continue;let P=Math.hypot(b.pos.x-this.pos.x,b.pos.z-this.pos.z)-(b.isPlayer||b===t.inTank?8:0);P<v&&(v=P,y=b)}this.target=y}let r=this.target,o=this.hp/this.maxHp;(o<.66&&this.summoned<1||o<.33&&this.summoned<2)&&(this.summoned++,t.onBossSummon&&t.onBossSummon(this));let a=(m=(p=this.inner.userData).y0)!=null?m:p.y0=this.inner.position.y;if(!r)return;let l=Math.hypot(r.pos.x-this.pos.x,r.pos.z-this.pos.z),c=Math.atan2(r.pos.x-this.pos.x,r.pos.z-this.pos.z),h=o<.5?1.4:1,u=this.atk,f=1.6,d=0;if(n.move==="fly"){this.alt+=((u&&u.k==="strafe"?11:16)-this.alt)*Math.min(1,e),this.pos.y+=(this.alt+Math.sin(this.t*1.3)*.8-this.pos.y)*Math.min(1,e*2),this.orb+=e*.3;let y=26,v=r.pos.x+Math.cos(this.orb)*y,b=r.pos.z+Math.sin(this.orb)*y;vi.set(v-this.pos.x,0,b-this.pos.z);let P=vi.length();P>.5&&(vi.multiplyScalar(Math.min(n.speed*(u&&u.k==="strafe"?.6:1),P*2)/P),this.vx=vi.x,this.vz=vi.z),this.pos.x+=(this.vx||0)*e,this.pos.z+=(this.vz||0)*e;let R=t.L&&t.L.bounds;R&&(this.pos.x=Math.min(R[2]-4,Math.max(R[0]+4,this.pos.x)),this.pos.z=Math.min(R[3]-4,Math.max(R[1]+4,this.pos.z)));let E=Gi(c-this.yaw);this.yaw+=E*Math.min(1,e*2),this.inner.rotation.z+=(-E*.4-this.inner.rotation.z)*Math.min(1,e*3),this.inner.rotation.x=.12}else if(n.move==="drive"){if(!u||u.k==="lob"){let y=l>30?c:l<12?c+Math.PI:c+1.2;this.yaw+=Gi(y-this.yaw)*Math.min(1,e*1.1),d=n.speed}}else(!u||u.k==="walk")&&(d=l>20?n.speed:l<10?-n.speed*.6:0,this.yaw+=Gi(c-this.yaw)*Math.min(1,e*f));if(d&&!this.isFly){let y=this.pos.x,v=this.pos.z;On(this.pos,Math.sin(this.yaw)*d*e,Math.cos(this.yaw)*d*e,this.radius*.7),this.inner.position.y=a+Math.abs(Math.sin(this.t*(this.type==="spider"?9:5)))*.25,this.inner.rotation.z=Math.sin(this.t*5)*.04,Math.random()<e*2&&(t.shake=Math.min(.5,t.shake+.1)),n.move==="drive"&&Math.hypot(this.pos.x-y,this.pos.z-v)<d*e*.3&&(this.yaw+=e*2)}if(u){if(u.t-=e,u.n-=e,u.k==="volley"&&u.n<=0&&u.left>0){u.n=.12,u.left--;let y=this.pt((u.left%2?1:-1)*n.size*.22,this.H*.6,n.size*.3,_o),v=yi(r,kc);v.x+=ue(-2,2),v.z+=ue(-2,2),Pn("bolt",y,vi.copy(v).sub(y).normalize().multiplyScalar(34),this,{dmg:9,r:1.6}),de("laser",.5,.8,this.pos),this.yaw+=Gi(c-this.yaw)*Math.min(1,e*3)}if(u.k==="lob"&&(this.lob(r,0),this.yaw+=n.move==="drive"?0:Gi(c-this.yaw)*Math.min(1,e*2)),u.k==="spin"&&(this.inner.rotation.y+=e*16,this.yaw+=Gi(c-this.yaw)*Math.min(1,e*1.2),u.t<2.2&&(On(this.pos,Math.sin(this.yaw)*9*e,Math.cos(this.yaw)*9*e,this.radius*.7),this.contact(this.radius+1.2,38),Math.random()<e*10&&mi(pr.set(this.pos.x,1,this.pos.z),null,4,16769184,8))),u.k==="ram")if(u.t>2)this.yaw+=Gi(c-this.yaw)*Math.min(1,e*3),this.inner.position.y=a+Math.sin(this.t*40)*.06,Math.random()<e*8&&gi(this.pt(0,.6,-n.size*.45,pr),1,1.4,5592405,1);else{let y=this.pos.x,v=this.pos.z;On(this.pos,Math.sin(this.yaw)*20*e,Math.cos(this.yaw)*20*e,this.radius*.7),this.contact(this.radius+1.4,50),Math.hypot(this.pos.x-y,this.pos.z-v)<4*e&&!u.bump&&(u.bump=!0,u.t=Math.min(u.t,.5),t.shake=Math.min(1.4,t.shake+.8),de("metal",.8,.5,this.pos))}if(u.k==="jump"||u.k==="pounce"){u.tp||(u.tp=new tt(r.pos.x,0,r.pos.z),u.from=this.pos.clone(),u.T=u.t,ri(u.tp,16724e3,8,u.T));let y=1-Math.max(0,u.t)/u.T;this.pos.x=u.from.x+(u.tp.x-u.from.x)*y,this.pos.z=u.from.z+(u.tp.z-u.from.z)*y,this.pos.y=Math.sin(y*Math.PI)*(u.k==="jump"?9:7),this.yaw+=Gi(c-this.yaw)*Math.min(1,e*2),u.t<=0&&!u.done&&(u.done=!0,this.pos.y=0,On(this.pos,0,0,this.radius*.7),Bn(this.pos.clone().setY(.2),10,42,this,1.8),ri(this.pos,16777215,14,.6),t.shake=Math.min(1.6,t.shake+1))}if(u.k==="mines"&&u.n<=0&&u.left>0){u.n=.3,u.left--;let y=this.pt(0,this.H*.8,0,_o),v=Bd.set(r.pos.x+ue(-7,7),0,r.pos.z+ue(-7,7)),b=1.2;Pn("grenade",y,vi.set((v.x-y.x)/b,(0-y.y+9*b*b)/b,(v.z-y.z)/b),this,{dmg:30,r:4,fuse:1.6,grav:18}),de("whoosh",.4,1.1,this.pos)}if(u.k==="strafe"&&u.n<=0&&u.left>0){u.n=.07,u.left--;let y=this.pt(0,this.H*.3,n.size*.45,_o),v=yi(r,kc),b=y.distanceTo(v);v.x+=ue(-.06,.06)*b,v.z+=ue(-.06,.06)*b,Vi(this,y,vi.copy(v).sub(y).normalize(),6*(r.isPlayer&&t.dmgMul||1),120,{loud:40}),de("minigun",.35,.8,this.pos),u.left%3===0&&mi(y,null,3,16765024,6)}if(u.k==="salvo"&&u.n<=0&&u.left>0){u.n=.2,u.left--;let y=this.pt((u.left%2?1:-1)*n.size*.2,this.H*.3,n.size*.3,_o),v=Bd.set(r.pos.x+ue(-4,4),0,r.pos.z+ue(-4,4));ri(v,16724e3,3.2,1),Pn("rocket",y,vi.copy(v).sub(y).normalize().multiplyScalar(32),this,{grav:0,dmg:34,r:3.8,big:.9,life:4}),de("whoosh",.6,.8,this.pos)}u.t<=0&&(this.atk=null,this.atkT=ue(.8,1.6)/h,this.pos.y=this.isFly?this.pos.y:0)}else if((this.atkT-=e)<=0){let y=n.atk[Math.floor(Math.random()*n.atk.length)];y==="volley"?this.atk={k:y,t:2.2,n:.3,left:Math.round(12*h)}:y==="lob"?this.atk={k:y,t:2.4,n:.4,left:Math.round(6*h)}:y==="spin"?(this.atk={k:y,t:3,n:0,hit:new Set},de("roar",.6,1.3,this.pos)):y==="ram"?(this.atk={k:y,t:3.6,n:0,hit:new Set},de("roar",.7,.5,this.pos)):y==="jump"||y==="pounce"?l>45?this.atk={k:"lob",t:2.4,n:.4,left:6}:(this.atk={k:y,t:y==="jump"?1.6:1.3,n:0},de("roar",.7,.7,this.pos)):y==="mines"?this.atk={k:y,t:2,n:.2,left:Math.round(5*h)}:y==="strafe"?this.atk={k:y,t:2.4,n:.5,left:Math.round(26*h)}:y==="salvo"&&(this.atk={k:y,t:2.4,n:.4,left:Math.round(6*h)})}this.root.rotation.y=this.yaw,ur(this.pos,20,"red")}};function Hd(s,e=2236962){let t=new kt,n=new At({color:e,roughness:.6});for(let r=0;r<2;r++){let o=new ye(new qn(s*2,.08,.32),n);o.rotation.y=r*Math.PI/2,o.castShadow=!0,t.add(o)}let i=new ye(new fi(s,28),new ct({color:2236962,transparent:!0,opacity:.16,depthWrite:!1,side:Dt}));return i.rotation.x=-Math.PI/2,t.add(i),t}var Bc=new tt,Wb=new tt,Xb=s=>{for(;s>Math.PI;)s-=6.2832;for(;s<-Math.PI;)s+=6.2832;return s},Hc=class{constructor(e,t,n=0,i=1){let r=Fc("blue_heli",9,0);this.root=r.g,this.inner=r.inner||r.g.children[0],this.mats=r.mats,this.H=r.h,M.scene.add(this.root),this.rotor=Hd(4.6),this.rotor.position.y=r.h*.98,this.root.add(this.rotor),this.pad=new ye(new fi(5.5,32),new At({color:3817288,roughness:.8})),this.pad.rotation.x=-Math.PI/2,this.pad.position.set(e,.03,t),M.scene.add(this.pad);let o=new ct({color:16765498});for(let[a,l,c]of[[.5,4,-1.2],[.5,4,1.2],[2.4,.5,0]]){let h=new ye(new Jt(a,l),o);h.rotation.x=-Math.PI/2,h.position.set(e+c,.05,t),M.scene.add(h)}this.pos=this.root.position,this.pos.set(e,0,t),this.yaw=n,this.root.rotation.y=n,this.team="blue",this.isHeli=!0,this.isFly=!0,this.alive=!0,this.plastic=!0,this.headMul=1,this.lvl=i,this.maxHp=this.hp=600+i*300,this.radius=2.8,this.height=Math.max(2.5,r.h*.8),this.aimH=r.h*.5,this.hidden=!0,this.vel=new tt,this.rs=0,this.cd=0,this.rcd=0,this.flash=0,this.driver=null,this.mzL=new yt,this.mzL.position.set(0,r.h*.25,4.2),this.root.add(this.mzL),this.mv=0,M.actors.push(this)}damage(e,t,n,i,r){!this.alive||M.ending||(this.driver||(e*=.25),this.hp-=e,this.flash=.08,this.driver&&M.onPlayerTankHit&&M.onPlayerTankHit(e,t),this.hp<=0&&this.die(t))}die(e){this.alive=!1,this.deadT=0,this.hidden=!0,M.onKill&&M.onKill(this,e)}fly(e,t){let n=17+this.lvl*2,i=Bc.set(-Math.sin(t.yaw),0,-Math.cos(t.yaw)),r=Wb.set(Math.cos(t.yaw),0,-Math.sin(t.yaw)),o=(i.x*-t.my+r.x*t.mx)*n,a=(i.z*-t.my+r.z*t.mx)*n,l=Math.max(0,-t.my),c=((t.up?1:0)-(t.dn?1:0))*8+Math.sin(t.pitch)*l*10;this.landing&&(c=-6),this.vel.x+=(o-this.vel.x)*Math.min(1,e*1.8),this.vel.z+=(a-this.vel.z)*Math.min(1,e*1.8),this.vel.y+=(c-this.vel.y)*Math.min(1,e*3),this.rs<1&&(this.rs=Math.min(1,this.rs+e*.8),this.vel.set(0,this.rs>.6?3:0,0)),this.pos.y=Math.min(32,Math.max(this.landing?0:this.rs>=1?2.5:0,this.pos.y+this.vel.y*e)),On(this.pos,this.vel.x*e,this.vel.z*e,2.6,this.pos.y+.2);let h=M.L&&M.L.bounds;h&&(this.pos.x=Math.min(h[2]-3,Math.max(h[0]+3,this.pos.x)),this.pos.z=Math.min(h[3]-3,Math.max(h[1]+3,this.pos.z)));let u=t.yaw+Math.PI,f=Xb(u-this.yaw);this.yaw+=f*Math.min(1,e*3),this.root.rotation.y=this.yaw;let d=this.vel.x*Math.sin(this.yaw)+this.vel.z*Math.cos(this.yaw),g=this.vel.x*Math.cos(this.yaw)-this.vel.z*Math.sin(this.yaw);if(this.inner.rotation.x+=(d*.012-this.inner.rotation.x)*Math.min(1,e*4),this.inner.rotation.z+=(g*.02-this.inner.rotation.z)*Math.min(1,e*4),this.mv=Math.hypot(this.vel.x,this.vel.z),this.landing&&this.pos.y<=.01)return this.landing=!1,"landed"}gun(e,t){if(this.cd>0)return null;this.cd=.075;let n=this.mzL.getWorldPosition(new tt),i=e.clone().sub(n).normalize();i.x+=ue(-.015,.015),i.y+=ue(-.012,.012),i.z+=ue(-.015,.015),i.normalize();let r=Vi(t,n,i,11+this.lvl*2,140,{loud:40});return hs(this.mzL,.55),de("minigun",.3,1.25),r}rockets(e,t){if(this.rcd>0)return!1;this.rcd=this.lvl>1?.9:1.4;for(let n of[-1,1]){let i=this.root.localToWorld(new tt(n*1.6,this.H*.3,2.4)),r=e.clone().sub(i).normalize();Pn("rocket",i,r.multiplyScalar(48),t,{dmg:110,r:4.4,big:1,grav:0,ign:this})}return de("whoosh",.7,.9),!0}update(e){if(this.flash>0){this.flash-=e;for(let n of this.mats)n.emissive&&n.emissive.setHex(this.flash>0?8930338:0)}if(this.cd-=e,this.rcd-=e,!this.alive){this.deadT+=e,this.pos.y>0?(this.pos.y=Math.max(0,this.pos.y-e*(5+this.deadT*10)),this.root.rotation.y+=e*4,Math.random()<e*20&&gi(Bc.set(this.pos.x,this.pos.y+2,this.pos.z),1,2,3355443,2)):this.gone||(this.gone=!0,Bn(this.pos.clone().setY(1.5),6,0,null,2.4),jn(Bc.set(this.pos.x,2,this.pos.z),3112416,40,3,1.4),this.root.visible=!1);return}let t=this.driver==="player";this.rot=(this.rot||0)+e*(t?1:-.6),this.rot=Math.max(0,Math.min(1,this.rot)),this.rotor.rotation.y+=e*28*this.rot,!t&&this.pos.y>0&&(this.pos.y=Math.max(0,this.pos.y-e*6),this.rs=0),t&&this.pos.y<1.5&&this.rot>.5&&Math.random()<e*14&&cr(Bc.set(this.pos.x+ue(-5,5),.3,this.pos.z+ue(-5,5)),null,M.dustCol||11049584,.9,.3,.8)}};var oe=s=>document.getElementById(s);var Vc=0,Gc=0,wa=0,Vd=0,Wc=[];function Wi(s,e=1.6){let t=oe("hint");t._t!==s&&(t.innerHTML=s,t._t=s),t.style.opacity=1,Vc=e}function Ea(s){let e=oe("hm");e.className=s?"kill":"",e.style.opacity=1,e.style.transform="scale("+(s?1.35:1)+")",Gc=s?.25:.12}function Xs(s,e){let t=document.createElement("div");t.textContent=s,e&&(t.className=e===!0?"bad":e);let n=oe("pop");for(;n.children.length>4;)n.firstChild.remove();oe("pop").appendChild(t),setTimeout(()=>t.remove(),1e3)}function Gd(s){wa=Math.min(1,wa+s)}function j0(s){let e=document.createElement("i");e.style.transform="rotate("+s+"rad)",oe("dirs").appendChild(e),Wc.push({i:e,t:.8})}function J0(s){let e=oe("xh");e._b||(e.innerHTML='<i class="d"></i><i></i><i></i><i></i><i></i>',e._b=[...e.children].slice(1));let t=6+s,[n,i,r,o]=e._b;n.style.cssText=`left:${t}px;top:-1px;width:10px;height:2px`,i.style.cssText=`left:${-t-10}px;top:-1px;width:10px;height:2px`,r.style.cssText=`top:${t}px;left:-1px;width:2px;height:10px`,o.style.cssText=`top:${-t-10}px;left:-1px;width:2px;height:10px`}function Q0(s,e){Vc>0&&(Vc-=s,Vc<=0&&(oe("hint").style.opacity=0)),Gc>0&&(Gc-=s,Gc<=0&&(oe("hm").style.opacity=0));let t=e<.3?.25+Math.sin(performance.now()/180)*.1:0;wa=Math.max(0,wa-s*1.6),oe("dmg").style.opacity=Math.max(wa,t),Vd=Math.max(0,Vd-s*.8),oe("flashw").style.opacity=Vd;for(let n=Wc.length-1;n>=0;n--){let i=Wc[n];i.t-=s,i.i.style.opacity=Math.max(0,i.t/.8),i.t<=0&&(i.i.remove(),Wc.splice(n,1))}}var ut=(s,e=!0)=>oe(s).classList.toggle("hide",!e),$0=0;function Xi(s,e,t){let n=oe("ann");n&&(n.className="",n.offsetWidth,n.innerHTML=s+(e?"<small>"+e+"</small>":""),n.className="go "+(t||""),document.body.classList.add("annon"),clearTimeout($0),$0=setTimeout(()=>{n.className="",document.body.classList.remove("annon")},1500))}var wn=A,Ys=new URLSearchParams(location.search),Wt=matchMedia&&matchMedia("(pointer:coarse)").matches||/Android|iPhone|iPad|Mobile/i.test(navigator.userAgent)||Ys.get("mobile")!=null,qd=Ys.get("q"),So=qd!=null?+qd:Wt?0:1,Ia=Ys.get("autoclear")!=null,Zd=Ys.get("bot")!=null;O0(Ys.get("nolod")!=null?0:So>0?1:.75);document.body.classList.toggle("mobile",Wt);var ug="toystrike_v1",Ge={coins:0,stars:{},own:{},daily:{last:"",day:-1},best:{},base:{}};try{let s=JSON.parse(localStorage.getItem(ug));s&&(Ge=Object.assign(Ge,s))}catch{}Ge.base=Object.assign({barracks:0,turret:0,depot:0,helipad:0},Ge.base||{});var nh=()=>{try{localStorage.setItem(ug,JSON.stringify(Ge))}catch{}},qb=[{id:"sniper",n:"Snayper",d:"Komandaya uzaqvuran snayper qo\u015Fulur",c:400,ic:"\u25CE"},{id:"bazooka",n:"Bazuka\xE7\u0131",d:"Tanklara qar\u015F\u0131 raket atan a\u011F\u0131r \u0259sg\u0259r",c:600,ic:"\u27A4"},{id:"desert",n:"S\u0259hra kamuflyaj\u0131",d:"Mavi tank \xFC\xE7\xFCn qum r\u0259ngli boya",c:300,ic:"\u25C6"},{id:"nades",n:"Qumbara \xE7antas\u0131",d:"H\u0259r missiyada +2 qumbara",c:250,ic:"\u25CF"}],La=[{id:1,n:"U\u015Faq ota\u011F\u0131",d:"\xC7arpay\u0131 alt\u0131 s\u0259ng\u0259r, kitab bunkerl\u0259ri v\u0259 oyuncaq qutusu qalas\u0131",build:H0,col:"#e0a060"},{id:2,n:"Evin h\u0259y\u0259ti",d:"Ot c\u0259ng\u0259lliyi, \u015Flanq \xE7ay\u0131, qum s\u0259hras\u0131 v\u0259 D\u0259mir Tiran",build:V0,col:"#6cc04a"},{id:3,n:"M\u0259tb\u0259x",d:"Kafel d\xFCz\u0259nliyi, tax\u0131l qutusu qalas\u0131 v\u0259 Mikser Robot",build:X0,col:"#e06a5a"},{id:4,n:"Qaraj",d:"Al\u0259t qutular\u0131, ya\u011F g\xF6lm\u0259\xE7\u0259l\u0259ri v\u0259 Canavar Ma\u015F\u0131n",build:q0,col:"#8a96a8"},{id:5,n:"Ba\u011F",d:"G\xF6b\u0259l\u0259k me\u015F\u0259si, qu\u015F evi v\u0259 Q\u0131rm\u0131z\u0131 Qas\u0131r\u011Fa helikopteri",build:Y0,col:"#4ab070"},{id:6,n:"Zirz\u0259mi",d:"Qaranl\u0131q qutular labirinti, oyuncaq qatar v\u0259 Qurd H\xF6r\xFCm\xE7\u0259k",build:K0,col:"#8a60c0"}],Yb=[{id:"barracks",n:"Kazarma",ic:"\u26FA",c:[300,600,900],d:["Komandaya tibb \u0259sg\u0259ri qo\u015Fulur","Pulemyot\xE7u qo\u015Fulur","Alovatan qo\u015Fulur"]},{id:"turret",n:"Q\xFCll\u0259",ic:"\u26EB",c:[350,700,1e3],d:["H\u0259r m\u0259rh\u0259l\u0259d\u0259 1 avtomat q\xFCll\u0259","2 q\xFCll\u0259, daha g\xFCcl\xFC","3 q\xFCll\u0259, maksimum g\xFCc"]},{id:"depot",n:"Anbar",ic:"\u25A6",c:[250,500,800],d:["+60 g\xFCll\u0259, +1 qumbara, +10% sikk\u0259","+1 artilleriya z\u0259rb\u0259si, +20% sikk\u0259","+25 can, +30% sikk\u0259"]},{id:"helipad",n:"Helikopter meydan\xE7as\u0131",ic:"\u271A",c:[800,1200],d:["B\xFCt\xFCn missiyalarda helikopter","Zirehli helikopter, s\xFCr\u0259tli raketl\u0259r"]}],Yd=[50,75,100,150,200,250,400],Kd=(s=new Date)=>s.getFullYear()+"-"+(s.getMonth()+1)+"-"+s.getDate();function ih(){let s=Kd();if(Ge.daily.last===s)return null;let e=new Date;return e.setDate(e.getDate()-1),{day:Ge.daily.last===Kd(e)?(Ge.daily.day+1)%7:0}}var Kb=s=>s===1||(Ge.stars[s-1]||0)>0,Zb=()=>La.reduce((s,e)=>s+(Ge.stars[e.id]||0),0),$t=new Dl({antialias:!Wt&&qd!=="0",powerPreference:"high-performance"});$t.setPixelRatio(Math.min(devicePixelRatio||1,Wt?1.25:1.75));$t.setSize(innerWidth,innerHeight);$t.outputColorSpace=Lt;$t.toneMapping=ea;$t.toneMappingExposure=1.15;$t.shadowMap.enabled=So>0;$t.shadowMap.type=_f;var Ra=$t.domElement;document.body.prepend(Ra);var Ft=new Ko;Ft.background=new fe(15259844);Ft.fog=new Yo(15259844,90,210);var ft=new ln(68,innerWidth/innerHeight,.1,400),$b=()=>ft.aspect<1?84:68;addEventListener("resize",()=>{$t.setSize(innerWidth,innerHeight),ft.aspect=innerWidth/innerHeight,ft.updateProjectionMatrix()});M.scene=Ft;M.cam=ft;M.audio=Qt;M.sfx=de;var Xc=new $l(16774376,9071178,1.05),_i=new oo(16773340,2.4);if(So){_i.castShadow=!0,_i.shadow.mapSize.set(2048,2048);let s=_i.shadow.camera;s.left=s.bottom=-42,s.right=s.top=42,s.near=1,s.far=160,_i.shadow.bias=-6e-4,_i.shadow.normalBias=.04}var gr=new Us(16760944,0,12,2),qc=new wn(.25,1,-.65).normalize();(function(){let e=new Ko,t=new Bi(50,32,16),n=[],i=t.attributes.position;for(let a=0;a<i.count;a++){let l=i.getY(a)/50,c=l>0?new fe(16773856).lerp(new fe(8370416),Math.pow(l,.6)):new fe(14206120).lerp(new fe(6969928),Math.pow(-l,.5));n.push(c.r,c.g,c.b)}t.setAttribute("color",new Ke(n,3)),e.add(new ye(t,new ct({vertexColors:!0,side:mn})));let r=(a,l,c,h,u,f,d)=>{let g=new ye(new Jt(u,f),new ct({color:new fe(a).multiplyScalar(d),side:Dt}));g.position.set(l,c,h),g.lookAt(0,0,0),e.add(g)};r(16777215,12,34,-20,12,12,4),r(16774368,-34,14,10,18,10,1.6),r(15266047,30,12,20,16,8,1.4),r(16771280,0,8,38,22,6,1.2);let o=new Qr($t);Ft.environment=o.fromScene(e,.03).texture,o.dispose(),Ft.environmentIntensity=.8})();var In=null,Ui=null,eg=null,jb=!Wt&&So>=1&&Ys.get("post")!=="0";if(jb)try{let s=new nn(innerWidth*$t.getPixelRatio(),innerHeight*$t.getPixelRatio(),{type:Rn,samples:4,depthTexture:new As});In=new lc($t,s),In.addPass(new cc(Ft,ft)),Ui=new aa(Ft,ft,innerWidth,innerHeight),Ui.setGBuffer(s.depthTexture,void 0),Ui.blendIntensity=.8,Ui.updateGtaoMaterial({radius:1.1,distanceExponent:1.4,thickness:2,scale:1,samples:12}),Ui.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:12}),In.addPass(Ui),In.addPass(new ho(new ie(innerWidth/2,innerHeight/2),.32,.5,.95)),eg=new co({uniforms:{tDiffuse:{value:null},vig:{value:.26},sat:{value:1.14}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float vig, sat; varying vec2 vUv;
      void main(){ vec4 c = texture2D(tDiffuse, vUv); float l = dot(c.rgb, vec3(.2126,.7152,.0722)); c.rgb = mix(vec3(l), c.rgb, sat);
        c.rgb *= mix(vec3(.95,.98,1.05), vec3(1.04,1.01,.95), smoothstep(.05,.9,l)); vec2 d = vUv - .5; c.rgb *= 1. - vig * smoothstep(.25, .85, dot(d,d) * 2.2); gl_FragColor = c; }`}),In.addPass(eg),In.addPass(new hc),addEventListener("resize",()=>{In&&In.setSize(innerWidth,innerHeight),Ui&&Ui.setSize(innerWidth,innerHeight)})}catch(s){console.warn("post off",s),In=null}var nt={t:0,n:0,lvl:2,on:Ys.get("nofps")==null,fps:60},jc=$t.getPixelRatio(),tg=Math.max(.5,jc*(Wt?.6:.55));nt.pr=jc;nt.up=0;nt.lock=0;nt.lastUp=0;function ng(s){s=Math.round(s*20)/20,!(Math.abs(s-$t.getPixelRatio())<.01)&&(nt.pr=s,$t.setPixelRatio(s),$t.setSize(innerWidth,innerHeight),In&&In.setPixelRatio(s))}function Jb(s){if(!nt.on||M.mode!=="play"){nt.t=nt.n=0;return}if(s>.25||(nt.t+=s,nt.n++,nt.t<2))return;let e=nt.fps=nt.n/nt.t;if(nt.t=nt.n=0,nt.lock=Math.max(0,nt.lock-2),So&&e<50&&!nt.halfSh){nt.halfSh=1,$t.shadowMap.autoUpdate=!1;return}if(In&&e<40&&nt.lvl===2){Ui.enabled=!1,nt.lvl=1;return}if(In&&e<32&&nt.lvl===1){In=null,nt.lvl=0;return}if(e<48&&nt.pr>tg+.01){ng(Math.max(tg,nt.pr*(e<30?.8:.9))),nt.up=0,nt.lastUp&&(nt.lock=30,nt.lastUp=0);return}e>57&&nt.pr<jc-.01&&!nt.lock?++nt.up>=3&&(nt.up=0,nt.lastUp=1,ng(Math.min(jc,nt.pr*1.1))):nt.up=0}var we=null,Ca=null,We=null,bo=[],Mi=null,Jc=null,Mo=null,$d=[],Jn=null,vn={},zt={l:!1,r:!1,dx:0,dy:0},Qc=!1,Pe={yaw:Math.PI,pitch:-.12,fov:68,back:3.6,pos:new wn,shakeT:0},Tn=new wn,Da=new wn,mr=new wn,ig=new Xt,sg=new Xt,Qb=new wn,qs=(s,e,t)=>Math.max(e,Math.min(t,s)),Yc=s=>{for(;s>Math.PI;)s-=2*Math.PI;for(;s<-Math.PI;)s+=2*Math.PI;return s},sh=s=>s.set(-Math.sin(Pe.yaw)*Math.cos(Pe.pitch),Math.sin(Pe.pitch),-Math.cos(Pe.yaw)*Math.cos(Pe.pitch)),Pa=s=>s.set(Math.cos(Pe.yaw),0,-Math.sin(Pe.yaw));function e2(s,e,t){s&&(s.parent.getWorldQuaternion(sg),ig.setFromAxisAngle(Qb.copy(e).applyQuaternion(sg.invert()),t),s.quaternion.premultiply(ig),s.updateMatrixWorld(!0))}addEventListener("keydown",s=>{if(vn[s.code]=!0,Qt.init(),M.mode==="intro"&&(s.code==="Space"||s.code==="Enter")){M.introT=99;return}if(s.code==="Escape"||s.code==="KeyP"){M.mode==="play"?xr(!0):M.mode==="pause"&&s.code==="KeyP"&&xr(!1);return}M.mode!=="play"||s.repeat||(s.code==="KeyR"?th():s.code==="KeyG"?fg():s.code==="KeyE"?Jd():s.code==="KeyQ"?mg():s.code==="KeyC"||s.code==="ControlLeft"?We&&!M.inTank&&(We.crouch=!We.crouch):s.code==="Digit1"?Kc("attack"):s.code==="Digit2"?Kc("hold"):s.code==="Digit3"&&Kc("follow"))});addEventListener("keyup",s=>{vn[s.code]=!1});addEventListener("blur",()=>{for(let s in vn)vn[s]=!1;zt.l=zt.r=!1});Ra.addEventListener("mousedown",s=>{if(Qt.init(),M.mode==="intro"){M.introT=99;return}if(!(M.mode!=="play"||Wt)){if(!Qc&&!M.noLock){jd();return}s.button===0&&(zt.l=!0,M.artyMode&&ep()),s.button===2&&(zt.r=!0)}});addEventListener("mouseup",s=>{s.button===0&&(zt.l=!1),s.button===2&&(zt.r=!1)});addEventListener("contextmenu",s=>s.preventDefault());addEventListener("mousemove",s=>{!Qc||M.mode!=="play"||(zt.dx+=s.movementX,zt.dy+=s.movementY)});function jd(){if(!(Zd||Ia))try{let s=Ra.requestPointerLock&&Ra.requestPointerLock();s&&s.catch&&s.catch(()=>{})}catch{}}document.addEventListener("pointerlockchange",()=>{Qc=document.pointerLockElement===Ra,!Qc&&M.mode==="play"&&!Wt&&xr(!0)});var it={mx:0,my:0,fire:!1,aim:!1,joyId:null,lookIds:new Map};function t2(){let s=oe("joy"),e=oe("knob"),t=null,n=(r,o,a)=>{let l=oe(r);l.addEventListener("touchstart",c=>{c.preventDefault(),c.stopPropagation(),Qt.init(),l.classList.add("on"),o&&o();for(let h of c.changedTouches)r==="bfire"&&it.lookIds.set(h.identifier,{x:h.clientX,y:h.clientY})},{passive:!1}),l.addEventListener("touchend",c=>{c.preventDefault(),l.classList.remove("on"),a&&a();for(let h of c.changedTouches)it.lookIds.delete(h.identifier)},{passive:!1})};n("bfire",()=>{it.fire=!0,M.artyMode&&ep()},()=>it.fire=!1),n("baim",()=>{it.aim=!it.aim,oe("baim").classList.toggle("lit",it.aim)}),n("bnade",fg),n("bcrouch",()=>{if(M.inTank&&M.inTank.isHeli){it.dn=!0;return}We&&!M.inTank&&(We.crouch=!We.crouch)},()=>it.dn=!1),n("breload",()=>{if(M.inTank&&M.inTank.isHeli){it.up=!0;return}th()},()=>it.up=!1),n("buse",Jd),n("barty",mg),n("bsq",()=>Kc(M.order==="follow"?"attack":M.order==="attack"?"hold":"follow")),n("bpause",()=>xr(!0)),addEventListener("touchstart",r=>{if(Qt.init(),M.mode==="intro"){M.introT=99;return}if(M.mode==="play")for(let o of r.changedTouches)o.target.closest&&o.target.closest(".mb")||(o.clientX<innerWidth*.42&&it.joyId==null?(it.joyId=o.identifier,t={x:o.clientX,y:o.clientY},s.style.left=t.x-60+"px",s.style.top=t.y-60+"px",s.classList.add("on"),e.style.transform=""):it.lookIds.set(o.identifier,{x:o.clientX,y:o.clientY}))},{passive:!0}),addEventListener("touchmove",r=>{var o;if(M.mode==="play"){(o=r.preventDefault)==null||o.call(r);for(let a of r.changedTouches){if(a.identifier===it.joyId&&t){let c=a.clientX-t.x,h=a.clientY-t.y,u=Math.hypot(c,h),f=52;u>f&&(c*=f/u,h*=f/u),it.mx=c/f,it.my=h/f,e.style.transform=`translate(${c}px,${h}px)`}let l=it.lookIds.get(a.identifier);if(l){let c=M.artyMode?2.2:1.6;zt.dx+=(a.clientX-l.x)*c,zt.dy+=(a.clientY-l.y)*c,l.x=a.clientX,l.y=a.clientY}}}},{passive:!1});let i=r=>{for(let o of r.changedTouches)o.identifier===it.joyId&&(it.joyId=null,it.mx=it.my=0,s.classList.remove("on"),e.style.transform=""),it.lookIds.delete(o.identifier)};addEventListener("touchend",i),addEventListener("touchcancel",i)}function rh(){let s=it.mx,e=it.my;(vn.KeyW||vn.ArrowUp)&&(e-=1),(vn.KeyS||vn.ArrowDown)&&(e+=1),(vn.KeyA||vn.ArrowLeft)&&(s-=1),(vn.KeyD||vn.ArrowRight)&&(s+=1);let t=Math.hypot(s,e);return t>1&&(s/=t,e/=t),{x:s,y:e,l:Math.min(1,t)}}var oh=()=>zt.l||it.fire,eh=()=>zt.r||it.aim;function n2(){let s=new Ws({name:"blue_spec",team:"blue",kind:"rifle",x:we.start.x,z:we.start.z,yaw:we.start.yaw});return M.units.splice(M.units.indexOf(s),1),s.isPlayer=!0,s.maxHp=s.hp=100,s.headMul=1.4,s.mag=30,s.res=210,s.nades=3+(Ge.own.nades?2:0)+(Ge.base.depot>=1?1:0),Ge.base.depot>=1&&(s.res+=60),Ge.base.depot>=3&&(s.maxHp=s.hp=125),s.relT=0,s.cd=0,s.regenT=0,s.vel=new wn,s.firedT=0,s.dmgTaken=0,s.damage=i2,s.die=s2,s.ch.play("idle",0),s}function i2(s,e,t,n,i){if(!(!this.alive||M.god||M.mode!=="play"||M.ending)&&(i&&(s*=M.dmgMul||1),!M.inTank)){if(this.hp-=s,this.dmgTaken+=s,this.regenT=5,this.ch.hitFlash(),Gd(Math.min(.7,s/30)),de("hurt",.45,1),M.shake=Math.min(1,M.shake+s/60),e&&e.pos){let r=e.pos.x-this.pos.x,o=e.pos.z-this.pos.z,a=Pa(mr);j0(Math.atan2(r*a.x+o*a.z,r*-Math.sin(Pe.yaw)+o*-Math.cos(Pe.yaw)))}this.hp<=0&&this.die(e,t,i,n)}}function s2(s,e,t){this.hp=0,this.alive=!1,Ws.prototype.die.call(this,s,e,!0,!1),M.dying=2.4,Xi("M\u018F\u011ELUB OLDUN","Plastik q\u0259hr\u0259man s\u0131nd\u0131","hs")}function th(){let s=We;!s||!s.alive||M.inTank||s.relT>0||s.mag>=30||s.res<=0||(s.relT=1.5,de("reload",.6))}function fg(){let s=We;if(M.inTank&&M.inTank.isHeli){M.heliRocket=!0;return}if(!s||!s.alive||M.inTank||M.artyMode||s.nades<=0)return;s.nades--;let e=sh(Tn),t=Da.set(s.pos.x,1.7,s.pos.z).addScaledVector(Pa(mr),.3);Pn("grenade",t,new wn(e.x*16,6+e.y*10,e.z*16),s,{fuse:1.6,r:4.8,dmg:130,big:1.1}),de("whoosh",.4,1.2),s.ch.play("kick",.08)}function Jd(){let s=We;if(!s||!s.alive||M.artyMode)return;if(M.inTank)return ah();if(Mi&&Mi.alive&&Math.hypot(Mi.pos.x-s.pos.x,Mi.pos.z-s.pos.z)<5.2)return rg(Mi);let e=M.heli;e&&e.alive&&Math.hypot(e.pos.x-s.pos.x,e.pos.z-s.pos.z)<6.5&&rg(e)}function dg(s){let e=Ge.base.turret;if(!e||!We)return;M.turrets=(M.turrets||[]).filter(n=>n.alive);let t=0;for(;M.turrets.length<e&&t<6;){let n=Pe.yaw+Math.PI+(t-1)*.9,i=We.pos.x+Math.sin(n)*6,r=We.pos.z+Math.cos(n)*6;t++;let o=Tn.set(i,0,r);On(o,0,0,1.3);let a=we.bounds;o.x<a[0]+2||o.x>a[2]-2||o.z<a[1]+2||o.z>a[3]-2||(M.turrets.push(new zc(o.x,o.z,e)),s||Xs("Q\xFCll\u0259 quruldu","nade"))}}function rg(s){M.inTank=s,s.driver="player",We.hidden=!0,We.noBullet=!0,We.ch.root.visible=!1,We.crouch=!1,de("metal",.6,.8),s.isHeli?(s.hidden=!1,s.landing=!1,Wi(Wt?"Joystik: u\xE7 \xB7 \u25B2/\u25BC: h\xFCnd\xFCrl\xFCk \xB7 RAKET":"WASD: u\xE7 \xB7 Bo\u015Fluq/C: h\xFCnd\xFCrl\xFCk \xB7 Sol: pulemyot \xB7 Sa\u011F/G: raket \xB7 E: en",4),document.body.classList.add("inheli"),pg(!0)):Wi("Sol d\xFCym\u0259: top \xB7 Sa\u011F d\xFCym\u0259: pulemyot \xB7 E: d\xFC\u015F",3.2),M.engine||(M.engine=Qt.loop("engine",.18)),Xi(s.isHeli?"HEL\u0130KOPTER":"TANK",s.isHeli?"Pilot yerind\u0259s\u0259n":"S\xFCr\xFCc\xFC yerind\u0259s\u0259n","")}var og={breload:["DOLDUR","\u25B2<br>QALX"],bcrouch:["S\u0130P\u018FR","\u25BC<br>EN"],bnade:["QUM-<br>BARA","RA-<br>KET"],buse:["\u25A3<br>TANK","\u25A3<br>\xC7IX"]};function pg(s){for(let e in og){let t=oe(e);t&&(t.innerHTML=og[e][s?1:0])}}function ah(s){let e=M.inTank;if(!e)return;if(e.isHeli&&!s&&e.pos.y>.05){e.landing=!0,Wi("Enilir\u2026",1.2);return}M.inTank=null,e.driver=null,e.v=0;let t=We;t.hidden=!1,t.noBullet=!1,t.ch.root.visible=!0,e.isHeli&&(e.hidden=!0,e.landing=!1,document.body.classList.remove("inheli"),pg(!1),it.up=it.dn=!1);for(let n of[1,-1,0]){let i=e.yaw+Math.PI/2*n+(n===0?Math.PI:0),r=e.pos.x+Math.sin(i)*3.6,o=e.pos.z+Math.cos(i)*3.6;if(t.pos.set(r,0,o),On(t.pos,0,0,.42),Math.hypot(t.pos.x-r,t.pos.z-o)<.3)break}M.engine&&(M.engine.stop(),M.engine=null),de("metal",.5,1.1)}function Qd(s){let e=ft.position,t=sh(mr).clone(),n=M.inTank?M.inTank.isHeli?12:8:Pe.back+.5,i=ls(e,t,220,{skipGlass:!0}),r=i?i.t:220;M.inTank&&(M.inTank.open=!0);let o=ls(e,t,220,{skipGlass:!0});M.inTank&&(M.inTank.open=!1),r=o?o.t:220;for(let a of M.actors){if(!a.alive||a.team==="blue"||a.hidden)continue;let l=ua(e,t,a,r);l&&l.t<r&&l.t>n*.5&&(r=l.t)}return s.copy(e).addScaledVector(t,Math.max(r,n))}function r2(s){let e=We;if(!e.alive){e.updDead(s);return}if(e.firedT=Math.max(0,e.firedT-s),e.cd-=s,e.shootT=Math.max(0,e.shootT-s),(e.regenT-=s)<=0&&e.hp<e.maxHp&&(e.hp=Math.min(e.maxHp,e.hp+7*s)),e.relT>0&&(e.relT-=s,e.relT<=0)){let x=Math.min(30-e.mag,e.res);e.mag+=x,e.res-=x}if(e.inGrass=Di.some(x=>x.name==="grass"&&e.pos.x>x.min[0]&&e.pos.x<x.max[0]&&e.pos.z>x.min[1]&&e.pos.z<x.max[1]),M.inTank){let x=M.inTank;e.pos.set(x.pos.x,0,x.pos.z),x.isHeli?o2(s,x):a2(s,x);return}if(M.artyMode){e.anim(s),e.ch.update(s);return}let t=rh(),n=eh(),i=oh(),r=e.crouch?3:n?4.2:6.5;(vn.ShiftLeft||vn.ShiftRight||Wt&&t.l>.95)&&t.y<-.3&&!n&&!i&&(r=9,e.crouch=!1),G0(we,e.pos.x,e.pos.z)&&(r*=.55);let o=Tn.set(-Math.sin(Pe.yaw),0,-Math.cos(Pe.yaw)),a=Pa(Da),l=(o.x*-t.y+a.x*t.x)*r,c=(o.z*-t.y+a.z*t.x)*r,h=Math.min(1,s*12);e.vel.x+=(l-e.vel.x)*h,e.vel.z+=(c-e.vel.z)*h,On(e.pos,e.vel.x*s,e.vel.z*s,.42);let u=we.bounds;e.pos.x=qs(e.pos.x,u[0]+.6,u[2]-.6),e.pos.z=qs(e.pos.z,u[1]+.6,u[3]-.6);let f=Math.hypot(e.vel.x,e.vel.z);e.moving=f;let d=n||i||e.firedT>0||f<.5;if(e.face(d?Pe.yaw+Math.PI:Math.atan2(e.vel.x,e.vel.z),s,d?16:10),f>3.5&&(e.stepT=(e.stepT||0)-s*f/6)<=0&&(e.stepT=.32,de("step",.12,1.3)),i&&e.relT<=0){if(e.mag<=0)e.res>0?th():e.cd<=0&&(e.cd=.3,de("click",.4));else if(e.cd<=0){e.cd=.1,e.mag--,e.firedT=.8,e.shootT=.25;let x=e.ch.muzzleWorld(new wn),m=Qd(new wn).sub(x).normalize();m.dot(sh(mr))<.6&&m.copy(mr);let y=(n?.006:.016)+(f>1?.014:0)+(e.crouch?-.004:0);m.x+=ue(-y,y),m.y+=ue(-y,y)*.7,m.z+=ue(-y,y),m.normalize();let v=Vi(e,x,m,22*(1+M.easy*.6),160,{loud:40,from:x});v.actor&&v.actor.team==="red"&&Ea(!v.actor.alive),hs(e.ch.muzzle,.55),gr.position.copy(x),gr.intensity=30,de("rifle",.5,1.05),Pe.pitch=qs(Pe.pitch+(n?.006:.011),-1.2,.9),M.shake=Math.min(.5,M.shake+.04),e.mag===0&&e.res>0&&setTimeout(th,150)}}let g=e.ch;f>.8?g.play("run",.15,qs(f/6.5,.55,1.4)):e.crouch?g.play("crouch",.18):n||e.shootT>0||e.firedT>0?g.play("shoot",.1):g.play("idle",.25),g.update(s),(n||e.firedT>0)&&g.spine&&e2(g.spine,Pa(mr),-Pe.pitch*.75);for(let x of $d)!x.got&&Math.hypot(x.p.x-e.pos.x,x.p.z-e.pos.z)<2.8&&(x.got=!0,Ft.remove(x.s),e.res+=60,e.nades++,e.hp=Math.min(e.maxHp,e.hp+25),de("pickup",.7),Xs("+60 g\xFCll\u0259  +1 qumbara  +25 can","ammo"));Mi&&Mi.alive&&!M.inTank&&Math.hypot(Mi.pos.x-e.pos.x,Mi.pos.z-e.pos.z)<5.2?Wi(Wt?"\u25A3 d\xFCym\u0259si \u2014 tanka min":"E \u2014 tanka min",.3):M.heli&&M.heli.alive&&!M.inTank&&Math.hypot(M.heli.pos.x-e.pos.x,M.heli.pos.z-e.pos.z)<6.5&&Wi(Wt?"\u25A3 d\xFCym\u0259si \u2014 helikopter\u0259 min":"E \u2014 helikopter\u0259 min",.3)}function o2(s,e){let t=rh(),n=e.fly(s,{mx:t.x,my:t.y,up:vn.Space||it.up,dn:vn.KeyC||vn.ControlLeft||it.dn,yaw:Pe.yaw,pitch:Pe.pitch});if(M.engine&&M.engine.vol(.14+Math.min(.2,e.mv*.01)),n==="landed"){ah(!0);return}if(e.pos.y<2)return;let i=Qd(new wn);if(oh()){let r=e.gun(i,We);r&&r.actor&&r.actor.team==="red"&&Ea(!r.actor.alive)}(zt.r||M.heliRocket||vn.KeyG)&&e.rockets(i,We)&&(M.shake=Math.min(.6,M.shake+.2)),M.heliRocket=!1}function a2(s,e){let t=rh();e.drive(s,-t.y,t.x),e.updSolid&&e.updSolid(),e.aimTurret(s,Pe.yaw+Math.PI,2),M.engine&&M.engine.vol(.12+Math.min(.25,Math.abs(e.v)*.03));let n=Qd(new wn),i=e.muzzleWorld(new wn);if(oh()&&e.cd<=0){let r=n.clone().sub(i),o=r.length();if(r.y+=o*o*3/11250,r.normalize(),Math.abs(Yc(Math.atan2(r.x,r.z)-e.tYaw))>.12){let l=r.y;r.set(Math.sin(e.tYaw),0,Math.cos(e.tYaw)).multiplyScalar(Math.sqrt(1-l*l)).setY(l)}e.fire(r,We),gr.position.copy(i),gr.intensity=80}if((zt.r||it.aim)&&(e.mgCd-=s)<=0){e.mgCd=.09;let r=Tn.set(e.pos.x,e.height*.82,e.pos.z).addScaledVector(Da.set(Math.sin(e.tYaw),0,Math.cos(e.tYaw)),1.2),o=n.clone().sub(r).normalize();o.x+=ue(-.02,.02),o.y+=ue(-.015,.015),o.z+=ue(-.02,.02),o.normalize(),e.open=!0;let a=Vi(We,r.clone(),o,12,120,{loud:40});e.open=!1,a.actor&&a.actor.team==="red"&&Ea(!a.actor.alive),de("minigun",.3,1.1)}}function mg(){if(!We||!We.alive)return;if(M.artyMode){M.artyMode=!1,Jn.visible=!1;return}if(M.arty<1){Wi("Artilleriya haz\u0131rlan\u0131r\u2026",1.4),de("click",.5);return}M.artyMode=!0,Jn.visible=!0;let s=Tn.set(-Math.sin(Pe.yaw),0,-Math.cos(Pe.yaw));M.artyC.copy(We.pos).addScaledVector(s,26),M.artyC.y=0,de("beep",.5),Wi(Wt?"H\u0259d\u0259fi s\xFCr\xFC\u015Fd\xFCr \xB7 AT\u018F\u015E":"Si\xE7anla h\u0259d\u0259f se\xE7 \xB7 Sol d\xFCym\u0259: AT\u018F\u015E \xB7 Q: l\u0259\u011Fv",3)}function ep(s,e){let t=(s||M.artyC).clone();if(!e){if(!M.artyMode||M.arty<1)return;M.arty--,M.artyMode=!1,Jn.visible=!1,zt.l=!1,it.fire=!1}if(de("beep",.6,.8),e||Xi("ART\u0130LLER\u0130YA","M\u0259rmil\u0259r yoldad\u0131r!","hot"),Jc){let i=Jc.obj.position;for(let r=0;r<3;r++)setTimeout(()=>{if(M.mode!=="play")return;let o=Tn.set(i.x,3.6,i.z);Bs(o,6,1.6),gi(o,4,2,10130570,1.8),de("boom",.5,1.4,o)},r*260)}let n=e?1:6;for(let i=0;i<n;i++)setTimeout(()=>{if(M.mode!=="play"&&M.mode!=="intro")return;let r=Math.random()*6.28,o=e?0:Math.sqrt(Math.random())*6,a=new wn(t.x+Math.cos(r)*o,0,t.z+Math.sin(r)*o);ri(a.clone().setY(.1),16732192,4,1.1),de("whoosh",.45,.5,a),setTimeout(()=>{M.mode!=="play"&&M.mode!=="intro"||Pn("arty",a.clone().setY(28),new wn(ue(-1,1),-46,ue(-1,1)),We,{dmg:140,r:5,big:1.4,grav:30})},450)},700+i*260+(e?Math.random()*300:0))}function tp(){let s=[{name:"blue_spec",kind:"rifle"},{name:"blue_spec",kind:"rifle"},{name:"blue_spec",kind:"heavy"}];Ge.own.sniper&&(s[0]={name:"blue_sniper",kind:"sniper"}),Ge.own.bazooka&&(s[2]={name:"blue_heavy",kind:"bazooka"});let e=Ge.base.barracks;return e>=1&&s.push({name:"blue_medic",kind:"medic"}),e>=2&&s.push({name:"blue_mg",kind:"mg"}),e>=3&&s.push({name:"blue_flamer",kind:"flamer"}),s}function gg(s,e,t){let n=tp()[s],i=new Ws({...n,team:"blue",x:e,z:t,yaw:we.start.yaw,order:M.order,slot:s,hpMul:1.6});return i.holdP=new wn(e,0,t),bo[s]=i,i}function Kc(s){M.order=s;for(let t of bo)t&&t.alive&&(t.order=s,t.holdP=t.pos.clone(),s!=="attack"&&(t.target=t.target&&t.target.alive?t.target:null));Xs({attack:"H\xDCCUM!",hold:"M\xD6VQE TUT!",follow:"ARXAMCA!"}[s],"cash"),de("beep",.5,s==="attack"?1.2:s==="hold"?.9:1),de("shout",.3,1.1),lh()}function lh(){let s={attack:"H\xFCcum",hold:"M\xF6vqe tut",follow:"Arxamca"};oe("sqo").textContent=s[M.order],oe("sqd").innerHTML=bo.map(e=>`<i class="${e&&e.alive?"":"x"}" style="--h:${e&&e.alive?Math.round(e.hp/e.maxHp*100):0}%"></i>`).join("")}var xg=()=>M.actors.filter(s=>s.alive&&s.team==="red").length;function np(s){let e=we.waves[s];if(M.wave=s,M.waveT=0,oe("obj").textContent=e.obj,oe("wavei").textContent="M\u0259rh\u0259l\u0259 "+(s+1)+" / "+we.waves.length,Xi(e.msg[0],e.msg[1],"hot"),de("alarm",.25,1.2),s>0){for(let t=0;t<tp().length;t++)if(!bo[t]||!bo[t].alive){let n=ue(0,6.28);gg(t,We.pos.x+Math.cos(n)*3,We.pos.z+Math.sin(n)*3+2),t===0&&Xs("\u018Flav\u0259 q\xFCvv\u0259 g\u0259ldi","nade")}}for(let t of e.units||[]){let n=new Ws({...t,team:"red",yaw:t.yaw!=null?t.yaw:0,march:t.march?t.march.clone():null});t.march&&(n.state="idle"),M.easy>0&&t.kind==="rusher"&&(n.cool+=1.5)}for(let t of e.tanks||[])new Ta("red",t.x,t.z,t.yaw||0);if(e.barrage&&setTimeout(()=>{if(M.mode==="play"){Xi("ART\u0130LLER\u0130YA D\u018FST\u018FY\u0130",'Komandir: "At\u0259\u015F!"',"hot");for(let t of e.barrage)ep(t,!0)}},2600),e.boss){let t=M.boss=e.boss===!0?new Uc(we.bossPos.x,we.bossPos.z):new Oc(e.boss,we.bossPos.x,we.bossPos.z,e.bossOpt||{});e.boss===!0&&(t.yaw=0),oe("bossb").dataset.n=ip(t),ut("bossb",!0)}s>0&&dg(),e.capture&&(ut("capb",!0),M.capT=0),lh()}function l2(s){let e=we.waves[M.wave];M.waveT+=s;let t=we.waves[M.wave+1];if(t&&M.waveT>2&&t.trigger({alive:xg(),player:We.pos})&&np(M.wave+1),e.capture){let n=Math.hypot(We.pos.x-we.flagPos.x,We.pos.z-we.flagPos.z),i=M.actors.some(r=>r.alive&&r.team==="red"&&r.pos.distanceTo(we.flagPos)<16);n<4.4&&!i?M.capT+=s:M.capT=Math.max(0,M.capT-s*.5),oe("capb").firstElementChild.style.width=Math.min(100,M.capT/4*100)+"%",oe("capl").textContent=n>=4.4?"Bayra\u011Fa yax\u0131nla\u015F":i?"D\xFC\u015Fm\u0259n yax\u0131ndad\u0131r!":"\u018Fl\u0259 ke\xE7irilir\u2026",M.capT>=4&&!M.ending&&(Mo.userData.cloth.material.color.setHex(3112416),Mo.userData.ring.material.color.setHex(4235519),ag("BAYRAQ \u018FL\u018F KE\xC7\u0130R\u0130LD\u0130"))}e.boss&&M.boss&&(oe("bossb").firstElementChild.style.width=Math.max(0,M.boss.hp/M.boss.maxHp*100)+"%",!M.boss.alive&&!M.ending&&M.boss.deadT>2.5&&ag(ip(M.boss)+" M\u018F\u011ELUB OLDU"))}function ag(s){M.ending=3,Xi(s,"Q\u018FL\u018FB\u018F!","hot"),de("star",.7),Qt.music.intensity=.6,M.god=!0}M.onKill=(s,e)=>{if(s.team!=="red"){if(s.team==="blue"&&!s.isPlayer&&!s.isTank&&lh(),s===M.inTank){let i=s.isHeli;ah(!0),M.god=Ia,We.damage(35,e,null,!1,!1),Xs(i?"Helikopter vuruldu!":"Tank m\u0259hv oldu!",!0)}return}let t=s.isBoss?300:s.isTank?60:s.kind==="heavy"||s.kind==="bazooka"||s.kind==="sniper"?20:10;M.coinsRun+=t,M.kills++;let n=e&&(e.isPlayer||e===M.inTank);n&&M.inTank&&M.inTank.isHeli&&(M.heliKills=(M.heliKills||0)+1),n&&(Xs("+"+t+" \u25C9","cash"),Ea(!0),de("kill",.3,1.2)),oe("coins").textContent=Ge.coins+M.coinsRun,s.isTank&&Xi("TANK M\u018FHV ED\u0130LD\u0130","+"+t+" sikk\u0259","hot")};var ip=s=>s&&s.cfg?s.cfg.n:we&&we.bossName||"D\u018FM\u0130R T\u0130RAN";M.onBossWake=s=>{Xi(ip(s),s.cfg?s.cfg.sub:"Robot oyand\u0131!","hs"),de("roar",.8,.8),Qt.music.intensity=2,M.shake=1.2};M.onBossSummon=s=>{Xi("K\xD6M\u018FK \xC7A\u011EIRDI","Q\u0131rm\u0131z\u0131 d\u0259st\u0259 g\u0259lir","hot");for(let e=0;e<4;e++){let t=e/4*6.28;new Ws({name:e%2?"red_heavy":"red_rifle",kind:e%2?"heavy":"rifle",team:"red",x:s.pos.x+Math.cos(t)*8,z:s.pos.z+Math.sin(t)*8+4,leash:12}).state="combat"}};M.onPlayerTankHit=(s,e)=>{Gd(Math.min(.5,s/80)),M.shake=Math.min(1,M.shake+s/90),de("metal",.5,.7)};function c2(){let s=new Set;for(let e in Ot)Ot[e].scene.traverse(t=>t.geometry&&s.add(t.geometry));if(Ot.blue_tank&&Ot.blue_tank.hull)for(let e of["blue_tank","red_tank"])for(let t of[Ot[e].hull,Ot[e].turret])t.traverse(n=>n.geometry&&s.add(n.geometry));return s}function h2(){let s=c2();for(Ft.traverse(e=>{e.isMesh&&!e.isSkinnedMesh&&e.geometry&&!s.has(e.geometry)&&!e.isInstancedMesh&&e.geometry.dispose&&e.userData.fx==null&&e.matrixAutoUpdate===!1&&e.geometry.dispose()});Ft.children.length;)Ft.remove(Ft.children[0]);M.units.length=M.tanks.length=M.actors.length=M.proj.length=M.noises.length=0,$d=[],bo=[],M.boss=null,Mi=null,M.inTank=null,M.turrets=[],M.heli=null}function sp(s){h2(),Ca=La.find(t=>t.id===s),Ft.add(Xc,_i,_i.target,gr),u0(Ft),b0(Ft),we=M.L=Ca.build(Ft,So),M.groundCol=we.groundCol,M.dustCol=we.dustCol;let e=we.sun;qc.set(...e.dir).normalize(),_i.color.setHex(e.col),_i.intensity=e.int,Xc.color.setHex(e.hemi[0]),Xc.groundColor.setHex(e.hemi[1]),Xc.intensity=e.hemi[2],Ft.background=new fe(e.bg),Ft.fog=new Yo(e.fog[0],e.fog[1],e.fog[2]),Ot.artillery?Jc=gc(Ft,Ot,"artillery",we.arty.x,we.arty.z,2,1.25,{}):Jc=null,Mo=we.flag,Jn=new kt;{let t=new ct({color:16728096,transparent:!0,opacity:.85,depthWrite:!1,depthTest:!1}),n=new ye(new Ii(5.6,6.1,48),t);n.rotation.x=-Math.PI/2,Jn.add(n);let i=new ye(new Ii(.4,.8,24),t);i.rotation.x=-Math.PI/2,Jn.add(i);for(let r=0;r<4;r++){let o=new ye(new Jt(.3,3),t);o.rotation.x=-Math.PI/2,o.rotation.z=r*Math.PI/2,o.position.set(Math.sin(r*Math.PI/2)*3.4,0,Math.cos(r*Math.PI/2)*3.4),Jn.add(o)}Jn.renderOrder=5,Jn.traverse(r=>r.renderOrder=5)}Jn.visible=!1,Ft.add(Jn),M.artyC=new wn;for(let t of we.ammo||[]){let n=new ui(new ii({map:u2(),depthWrite:!1,transparent:!0}));n.scale.setScalar(1.3),n.position.set(t.x,2.6,t.z),Ft.add(n),$d.push({p:t,s:n,got:!1})}S0(Cn,t=>{if(t.x<we.bounds[0]+1||t.x>we.bounds[2]-1||t.z<we.bounds[1]+1||t.z>we.bounds[3]-1)return!1;for(let n of Cn)if(t.x>n.min.x-.3&&t.x<n.max.x+.3&&t.z>n.min.z-.3&&t.z<n.max.z+.3&&n.max.y>.5&&n.min.y<2)return!1;return!0})}var Aa=null;function u2(){if(Aa)return Aa;let s=document.createElement("canvas");s.width=s.height=128;let e=s.getContext("2d"),t=e.createRadialGradient(64,64,8,64,64,62);return t.addColorStop(0,"rgba(255,230,120,.95)"),t.addColorStop(.55,"rgba(255,180,40,.45)"),t.addColorStop(1,"rgba(255,160,0,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),e.fillStyle="#3a2a10",e.font="bold 56px Arial",e.textAlign="center",e.textBaseline="middle",e.fillText("+",64,66),Aa=new Fi(s),Aa.colorSpace=Lt,Aa}async function yg(){let s=[];Ft.traverse(t=>{!t.visible&&!t.isLight&&(s.push(t),t.visible=!0)});let e=m0();Ft.add(e);try{let t=$t.compileAsync(Ft,ft);for(let n of s)n.visible=!1;await Promise.race([t,new Promise(n=>setTimeout(n,8e3))])}catch(t){console.warn("warmup",t)}Ft.remove(e);for(let t of s)t.visible=!1}function f2(){if(Wt)try{let s=document.documentElement,e=()=>{try{let t=screen.orientation;t&&t.lock&&t.lock("landscape").catch(()=>{})}catch{}};if(!document.fullscreenElement&&s.requestFullscreen&&Ys.get("nofs")==null){let t=s.requestFullscreen({navigationUI:"hide"});t&&t.then?t.then(e,()=>{}):e()}else e()}catch{}}function Zc(){let s=Wt&&innerHeight>innerWidth*1.05;document.body.classList.toggle("portrait",s),s&&M.mode==="play"&&xr(!0)}Wt&&(addEventListener("resize",Zc),addEventListener("orientationchange",()=>setTimeout(Zc,120)),Zc());async function ch(s){M.misReq=!0,f2(),ut("dly",!1),ut("base",!1),ut("menu",!1),ut("mis",!1),ut("res",!1),ut("load",!0),oe("ltxt").textContent="D\xF6y\xFC\u015F meydan\u0131 haz\u0131rlan\u0131r\u2026",oe("lbar").firstElementChild.style.width="60%",await new Promise(a=>setTimeout(a,30)),Qt.init();let e=k0[s]||{c:[],p:[]},t=Ge.base,n={c:[...e.c],p:[...e.p]};t.barracks>=1&&n.c.push("blue_medic"),t.barracks>=2&&(n.c.push("blue_mg"),n.p.push("mg")),t.barracks>=3&&(n.c.push("blue_flamer"),n.p.push("flamer")),t.turret&&n.p.push("turret"),t.helipad&&n.p.push("blue_heli"),F0(n.c,n.p)&&(oe("ltxt").textContent="Yeni oyuncaqlar y\xFCkl\u0259nir\u2026",await zd(a=>{oe("lbar").firstElementChild.style.width=Math.round(10+a*50)+"%"},n.c,n.p),oe("ltxt").textContent="D\xF6y\xFC\u015F meydan\u0131 haz\u0131rlan\u0131r\u2026"),sp(s),M.order="follow",M.wave=-1,M.clock=0,M.kills=0,M.coinsRun=0,M.easy=1,M.dmgMul=.5,M.god=Ia,M.ending=0,M.dying=0,M.capT=0,M.arty=1,M.artyT=0,M.artyMode=!1,M.time=0,We=M.player=n2(),Pe.yaw=we.start.yaw+Math.PI,Pe.pitch=-.12;let i=we.start,r=[Math.sin(i.yaw),Math.cos(i.yaw)],o=tp().length;for(let a=0;a<o;a++)gg(a,i.x+(a%3-1)*2.6-r[0]*2.5,i.z+2.5-r[1]*2.5+(a%3===1?1.5:0)+(a>=3?2.6:0));if(Ge.base.depot>=2&&(M.arty=2),M.heliKills=0,we.heli||Ge.base.helipad>=1){let a=we.heliPos||{x:we.start.x+9,z:we.start.z-4};M.heli=new Hc(a.x,a.z,a.yaw||Math.PI,Math.max(1,Ge.base.helipad))}dg(!0),Mi=new Ta("blue",we.tank.x,we.tank.z,we.tank.yaw,{driver:"none",tint:Ge.own.desert?13150312:0}),Mi.driver=null,ut("bossb",!1),ut("capb",!1),ft.position.set(i.x,20,i.z+20),ft.lookAt(i.x,0,i.z-20),oe("lbar").firstElementChild.style.width="90%",await yg(),ut("load",!1),ut("hud",!0),Wt&&ut("mob",!1),oe("coins").textContent=Ge.coins,np(0),M.mode="intro",M.introT=0,Qt.startMusic(),Qt.music.intensity=.5,Wi(Wt?"Toxun \u2014 ke\xE7":"Bo\u015Fluq \u2014 ke\xE7",2.5),Wt&&!M.mobSetup&&(M.mobSetup=!0,t2())}function d2(){setTimeout(Zc,0),M.mode="play",oe("hint").style.opacity=0,Wt&&ut("mob",!0),Wt||jd(),Qt.music.intensity=1,Wi(Wt?"Sol: h\u0259r\u0259k\u0259t \xB7 Sa\u011F: ni\u015Fan \xB7 AT\u018F\u015E":"WASD: h\u0259r\u0259k\u0259t \xB7 Si\xE7an: ni\u015Fan \xB7 Sol d\xFCym\u0259: at\u0259\u015F \xB7 G: qumbara",4)}function p2(s){M.introT+=s;let e=3.4,t=Math.min(1,M.introT/e),n=we.start,i=t*t*(3-2*t);ft.position.set(n.x+9*(1-i)+1.2*i,21-17.4*i,n.z+3.5+.5*i),ft.lookAt(n.x,1.5*i,n.z-34+14*i),M.introT>e&&d2()}function lg(s){if(M.mode==="result")return;M.mode="result";try{document.exitPointerLock&&document.exitPointerLock()}catch{}ut("hud",!1),ut("mob",!1),M.engine&&(M.engine.stop(),M.engine=null);let e=Ca.id,t=0,n=[s,s&&M.time<we.par,s&&We.dmgTaken<220];t=n.filter(Boolean).length;let i=s?100*t:0,r=Math.round((M.coinsRun+i)*(1+.1*Ge.base.depot));Ge.coins+=r,s&&(Ge.stars[e]=Math.max(Ge.stars[e]||0,t)),nh(),oe("rtitle").textContent=s?"M\u0130SS\u0130YA TAMAMLANDI":"M\u0130SS\u0130YA U\u011EURSUZ",oe("rtitle").className=s?"w":"l",oe("rstars").innerHTML=[0,1,2].map(l=>`<b class="${n[l]?"on":""}" style="animation-delay:${.2+l*.25}s">\u2605</b>`).join("");let o=Math.floor(M.time/60),a=Math.floor(M.time%60);if(oe("rstats").innerHTML=`<div><span>Q\u0259l\u0259b\u0259</span><b>${s?"\u2714":"\u2716"}</b></div><div><span>Vaxt ${o}:${String(a).padStart(2,"0")} (h\u0259d\u0259f ${Math.floor(we.par/60)}:00)</span><b>${n[1]?"\u2714":"\u2716"}</b></div><div><span>Az z\u0259d\u0259 (${Math.round(We.dmgTaken)} / 220)</span><b>${n[2]?"\u2714":"\u2716"}</b></div><div><span>M\u0259hv edil\u0259n d\xFC\u015Fm\u0259n</span><b>${M.kills}</b></div><div class="c"><span>Qazan\u0131lan sikk\u0259</span><b>+${r} \u25C9</b></div>`,M.inTank&&ah(!0),oe("bnext").style.display=s&&La.find(l=>l.id===e+1)?"":"none",ut("res",!0),Qt.music.intensity=.3,s)for(let l=0;l<t;l++)setTimeout(()=>de("star",.6,1+l*.15),300+l*250);M.lastResult={won:s,stars:t,earned:r,id:e}}function xr(s){if(s&&M.mode==="play"){M.mode="pause",ut("pause",!0),zt.l=zt.r=!1;try{document.exitPointerLock&&document.exitPointerLock()}catch{}}else!s&&M.mode==="pause"&&(M.mode="play",ut("pause",!1),Wt||jd())}var vg=()=>{let s="S\u0259s: "+(Qt.muted?"S\xF6n\xFCl\xFC":"A\xE7\u0131q");oe("bsnd").textContent=s,oe("bpsnd").textContent=s};oe("bsnd").onclick=oe("bpsnd").onclick=()=>{Qt.init(),Qt.setMuted(!Qt.muted),vg()};oe("bplay").onclick=()=>{Qt.init(),de("ui",.5),m2(),ut("menu",!1),ut("mis",!0)};oe("bshop").onclick=()=>{de("ui",.5),_g(),ut("menu",!1),ut("shop",!0)};oe("bbase").onclick=()=>{de("ui",.5),Mg(),ut("menu",!1),ut("base",!0)};oe("bdaily").onclick=()=>{de("ui",.5),rp(),ut("menu",!1),ut("dly",!0)};for(let s of document.querySelectorAll(".back"))s.onclick=()=>{de("ui",.5),hh()};oe("bres").onclick=()=>xr(!1);oe("bquit").onclick=()=>{ut("pause",!1),M.mode="result",hh()};oe("bretry").onclick=()=>ch(M.lastResult.id);oe("bmenu").onclick=hh;oe("bnext").onclick=()=>ch(M.lastResult.id+1);oe("bclaim").onclick=()=>{let s=ih();s&&(Ge.coins+=Yd[s.day],Ge.daily={last:Kd(),day:s.day},nh(),de("star",.7),rp(),Na())};function hh(){M.mode="menu";for(let s of["res","mis","shop","base","dly","pause","hud","mob"])ut(s,!1);ut("menu",!0),Qt.stopMusic&&Qt.stopMusic(),Na(),sp(1)}function Na(){oe("mcoins").textContent=Ge.coins,oe("mstar").textContent=Zb()+" / "+La.length*3,oe("bdaily").classList.toggle("glow",!!ih())}function m2(){oe("mlist").innerHTML="";for(let s of La){let e=Ge.stars[s.id]||0,t=Kb(s.id),n=document.createElement("div");n.className="card"+(t?"":" lock"),n.style.setProperty("--c",s.col),n.innerHTML=`<div class="num">${s.id}</div><h3>${s.n}</h3><p>${s.d}</p><div class="st">${[0,1,2].map(i=>`<b class="${i<e?"on":""}">\u2605</b>`).join("")}</div><button class="btn">${t?"BA\u015ELA":"\u{1F512} K\u0130L\u0130DL\u0130"}</button>`,t&&(n.querySelector("button").onclick=()=>{de("ui",.6),ch(s.id)}),oe("mlist").appendChild(n)}}function _g(){oe("scoins").textContent=Ge.coins,oe("slist").innerHTML="";for(let s of qb){let e=!!Ge.own[s.id],t=document.createElement("div");t.className="card item"+(e?" own":""),t.innerHTML=`<div class="ic">${s.ic}</div><h3>${s.n}</h3><p>${s.d}</p><button class="btn">${e?"ALINIB \u2714":s.c+" \u25C9"}</button>`;let n=t.querySelector("button");e||(n.onclick=()=>{if(Ge.coins<s.c){de("click",.6),n.textContent="Sikk\u0259 \xE7atm\u0131r",setTimeout(()=>n.textContent=s.c+" \u25C9",900);return}Ge.coins-=s.c,Ge.own[s.id]=!0,nh(),de("pickup",.7),_g(),Na()}),oe("slist").appendChild(t)}}function Mg(){oe("bcoins").textContent=Ge.coins,oe("blist").innerHTML="";for(let s of Yb){let e=Ge.base[s.id]||0,t=s.c.length,n=document.createElement("div");n.className="card item"+(e>=t?" own":"");let i=s.c.map((o,a)=>`<b class="${a<e?"on":""}">\u25A0</b>`).join("");n.innerHTML=`<div class="ic">${s.ic}</div><h3>${s.n}</h3><div class="st lv">${i}</div><p>${e>=t?"Maksimum s\u0259viyy\u0259: "+s.d[t-1]:"N\xF6vb\u0259ti: "+s.d[e]}</p><button class="btn">${e>=t?"MAKS \u2714":"QUR \xB7 "+s.c[e]+" \u25C9"}</button>`;let r=n.querySelector("button");e<t&&(r.onclick=()=>{let o=s.c[e];if(Ge.coins<o){de("click",.6),r.textContent="Sikk\u0259 \xE7atm\u0131r",setTimeout(()=>r.textContent="QUR \xB7 "+o+" \u25C9",900);return}Ge.coins-=o,Ge.base[s.id]=e+1,nh(),de("pickup",.7),Mg(),Na()}),oe("blist").appendChild(n)}}function rp(){let s=ih(),e=s?s.day:Ge.daily.day;oe("dlist").innerHTML=Yd.map((t,n)=>`<div class="dd ${s?n<e?"got":n===e?"now":"":n<=e?"got":""}"><small>G\xFCn ${n+1}</small><b>${t}</b><span>\u25C9</span></div>`).join(""),oe("bclaim").disabled=!s,oe("bclaim").textContent=s?Yd[s.day]+" \u25C9 G\xD6T\xDCR":"Sabah yen\u0259 g\u0259l!",oe("dcoins").textContent=Ge.coins}function g2(s){let e=We,t=M.inTank,n=t?t.hp/t.maxHp:e.hp/e.maxHp;oe("hpb").firstElementChild.style.width=Math.max(0,n*100)+"%",oe("hpb").classList.toggle("low",n<.3),oe("hpl").textContent=t?t.isHeli?"HEL\u0130":"TANK":"CAN",oe("ammo").innerHTML=t&&t.isHeli?t.rcd>0?"RAKET <small>dolur\u2026</small>":"RAKET <small>haz\u0131r</small>":t?t.cd>0?"<small>dolur\u2026</small>":"TOP <small>haz\u0131r</small>":e.relT>0?"<small>doldurulur\u2026</small>":e.mag+"<small> / "+e.res+"</small>",oe("nades").textContent="\u25CF "+e.nades;let i=oe("arty");i.textContent="\u2708 "+M.arty,i.style.setProperty("--k",M.arty>=2?1:M.artyT/30);let r=Math.floor(M.time/60),o=Math.floor(M.time%60);oe("time").textContent=r+":"+String(o).padStart(2,"0"),J0((oh()?7:0)+(e.moving>1?5:0)+(eh()?-3:0)),oe("xh").style.display=M.artyMode?"none":"",ut("artyui",!!M.artyMode);let a=null,l=we.waves[M.wave];if(l&&l.capture)a=Tn.copy(we.flagPos).setY(4);else if(l&&l.boss&&M.boss&&M.boss.alive)a=Tn.copy(M.boss.pos).setY((M.boss.pos.y||0)+(M.boss.aimH||3.5)*2);else{let h=0;Tn.set(0,0,0);for(let u of M.actors)u.alive&&u.team==="red"&&(Tn.add(u.pos),h++);h&&(Tn.divideScalar(h).setY(2),a=Tn)}let c=oe("om");if(a&&!M.artyMode){let h=Math.hypot(a.x-e.pos.x,a.z-e.pos.z),u=a.clone().project(ft),f=u.x,d=u.y;u.z>1&&(f=-f,d=-1);let g=Math.max(Math.abs(f),Math.abs(d));g>.9&&(f*=.9/g,d*=.9/g),c.style.display="",c.style.transform=`translate(${(f*.5+.5)*innerWidth}px,${(-d*.5+.5)*innerHeight}px)`,c.lastChild.textContent=Math.round(h)+"m"}else c.style.display="none";(M.hudT=(M.hudT||0)-s)<=0&&(M.hudT=.5,lh()),Q0(s,t?1:n)}function x2(s){let e=Wt?.0042:.0024*(eh()?.6:1),t=We;if(M.artyMode){M.artyC.x+=(zt.dx*Math.cos(Pe.yaw)+zt.dy*-Math.sin(Pe.yaw))*.09,M.artyC.z+=(zt.dx*-Math.sin(Pe.yaw)+zt.dy*-Math.cos(Pe.yaw))*.09;let m=rh();M.artyC.x+=(m.x*Math.cos(Pe.yaw)+m.y*-Math.sin(Pe.yaw))*28*s,M.artyC.z+=(m.x*-Math.sin(Pe.yaw)+m.y*-Math.cos(Pe.yaw))*28*s,zt.dx=zt.dy=0;let y=we.bounds;M.artyC.x=qs(M.artyC.x,y[0],y[2]),M.artyC.z=qs(M.artyC.z,y[1],y[3]);let v=Math.hypot(M.artyC.x-t.pos.x,M.artyC.z-t.pos.z);v>75&&(M.artyC.x=t.pos.x+(M.artyC.x-t.pos.x)*75/v,M.artyC.z=t.pos.z+(M.artyC.z-t.pos.z)*75/v),Jn.position.set(M.artyC.x,.15,M.artyC.z),Jn.rotation.y+=s;let b=1+Math.sin(M.clock*6)*.04;Jn.scale.set(b,1,b);let P=Tn.set(M.artyC.x+Math.sin(Pe.yaw)*22,52,M.artyC.z+Math.cos(Pe.yaw)*22);ft.position.lerp(P,Math.min(1,s*6)),ft.lookAt(M.artyC.x,0,M.artyC.z),ft.fov+=(55-ft.fov)*Math.min(1,s*6),ft.updateProjectionMatrix();return}Pe.yaw-=zt.dx*e,Pe.pitch=qs(Pe.pitch-zt.dy*e,-1.1,.75),zt.dx=zt.dy=0;let n=M.inTank,i=eh()&&!n,r=n?Tn.set(n.pos.x,n.isHeli?n.pos.y+n.H*.7:n.height+.9,n.pos.z):Tn.set(t.pos.x,(t.crouch?1.2:1.62)+(t.alive?0:-.8),t.pos.z),o=n?n.isHeli?14:10:i?2.1:3.6,a=n?0:i?.62:.78,l=n?n.isHeli?2.6:1.6:.22;Pe.back+=(o-Pe.back)*Math.min(1,s*10);let c=sh(Da),h=Pa(mr),u=r.clone().addScaledVector(c,-Pe.back).addScaledVector(h,a);u.y+=l;let f=u.clone().sub(r),d=f.length();f.divideScalar(d),n&&(n.open=!0);let g=ls(r,f,d+.3,{skipGlass:!0});n&&(n.open=!1),g&&g.t<d+.3&&u.copy(r).addScaledVector(f,Math.max(.3,g.t-.35)),u.y<.3&&(u.y=.3),ft.position.copy(u);let x=(n?64:i?48:$b())+(t.moving>7?4:0);if(Pe.fov+=(x-Pe.fov)*Math.min(1,s*10),Math.abs(ft.fov-Pe.fov)>.01&&(ft.fov=Pe.fov,ft.updateProjectionMatrix()),ft.lookAt(u.x+c.x*10,u.y+c.y*10,u.z+c.z*10),M.shake>0){let p=M.shake*.12;ft.position.x+=ue(-p,p),ft.position.y+=ue(-p,p),ft.rotation.z+=ue(-p,p)*.3,M.shake=Math.max(0,M.shake-s*2.4)}M.camYaw=Pe.yaw}var cg=0;function y2(s){if((cg-=s)>0)return;cg=.5;let e=we.waves[M.wave],t=M.actors.find(n=>n.alive&&n.team==="red"&&!(n.isBoss&&n.state==="sleep"&&!1));if(t){t.damage(99999,We,null,!1,!0);return}e&&e.capture&&We.pos.set(we.flagPos.x+1,0,we.flagPos.z+1)}function v2(s){let e=We;if(M.inTank)return;let t=null,n=50;for(let o of M.actors)if(o.alive&&o.team==="red"){let a=o.pos.distanceTo(e.pos);a<n&&Fn(Tn.set(e.pos.x,1.6,e.pos.z),Da.set(o.pos.x,(o.pos.y||0)+(o.aimH||(o.isBoss?4:1.2)),o.pos.z))&&(n=a,t=o)}let i=we.waves[M.wave],r=i&&i.capture?we.flagPos:null;if(!r){let o=null,a=1e9;for(let l of M.actors)if(l.alive&&l.team==="red"){let c=l.pos.distanceTo(e.pos);c<a&&(a=c,o=l)}r=o?o.pos:null}if(it.mx=it.my=0,it.fire=!1,t){let o=Math.atan2(-(t.pos.x-e.pos.x),-(t.pos.z-e.pos.z));Pe.yaw+=Yc(o-Pe.yaw)*Math.min(1,s*8);let a=(t.pos.y||0)+(t.aimH||(t.isBoss?4:1.1))-1.6;Pe.pitch+=(Math.atan2(a,n)-Pe.pitch)*Math.min(1,s*6),it.fire=Math.abs(Yc(o-Pe.yaw))<.15,n>22&&(it.my=-.7)}else if(r){let o=Math.atan2(-(r.x-e.pos.x),-(r.z-e.pos.z));Pe.yaw+=Yc(o-Pe.yaw)*Math.min(1,s*3),Pe.pitch+=(-.1-Pe.pitch)*s*3,r.distanceTo(e.pos)>2&&(it.my=-1)}}function _2(){for(let s of M.noises)if(s.team!=="red"){for(let e of M.units)if(e.alive&&e.team==="red"){let t=e.pos.x-s.p.x,n=e.pos.z-s.p.z;t*t+n*n<s.r*s.r&&e.hear(s.p)}}M.noises.length=0}var hg=performance.now(),Wd=0;function $c(s){requestAnimationFrame($c);let e=Math.min(.05,(s-hg)/1e3);hg=s,Wd++;try{M2(e)}catch(n){console.error(n)}Jb((s-($c.p||s))/1e3),$c.p=s,$t.shadowMap.enabled&&nt.halfSh&&($t.shadowMap.needsUpdate=(Wd&1)===0);let t=M.mode==="menu"||M.mode==="result"||M.mode==="pause";Ui&&(Ui.enabled=nt.lvl===2&&!t),!(t&&Wd&1)&&(In?In.render():$t.render(Ft,ft))}function M2(s){let e=M.mode;if(!(e==="load"||!we)){if(we.grassMat&&we.grassMat.userData.sh){let t=we.grassMat.userData.sh.uniforms;t.uT.value=performance.now()/1e3,We&&M.mode!=="menu"&&!M.inTank?(t.uC.value.set(ft.position.x,ft.position.z),t.uP.value.set(We.pos.x,We.pos.z)):(t.uC.value.set(0,999),t.uP.value.set(0,999))}if(we.waterMat&&we.waterMat.map&&(we.waterMat.map.offset.y-=s*.03),Mo){let t=Mo.userData.cloth;t.rotation.y=Math.sin(performance.now()/300)*.18,Mo.userData.ring.material.opacity=.35+Math.sin(performance.now()/200)*.2}if(e==="menu"||e==="result"){let t=performance.now()/9e3;ft.position.set(Math.sin(t)*40,20,Math.cos(t)*46),ft.lookAt(0,2,0),ft.fov!==60&&(ft.fov=60,ft.updateProjectionMatrix()),Xd(Tn.set(0,0,0)),Mc(s,ft);return}if(e!=="pause"){if(M.clock+=s,e==="intro"){p2(s);for(let t of M.units)t.update(s,M);for(let t of M.tanks)t.update(s,M);sd(s),Mc(s,ft),id(s),Xd(We.pos);return}M.time+=s,M.easy=qs(1-(M.time-28)/10,0,1),M.dmgMul=.5+.45*(1-M.easy),M.arty<2&&(M.artyT+=s,M.artyT>=30&&(M.artyT=0,M.arty++,Xs("Artilleriya haz\u0131rd\u0131r (Q)","nade"),de("beep",.5,1.3))),Ia&&y2(s),Zd&&v2(s),x2(s),r2(s);for(let t of M.units)t.update(s,M);for(let t=M.units.length-1;t>=0;t--)M.units[t].removed&&M.units.splice(t,1);for(let t=M.actors.length-1;t>=0;t--){let n=M.actors[t];!n.alive&&n.removed&&n!==We&&M.actors.splice(t,1)}for(let t of M.tanks)t.update(s,M);M.boss&&M.boss.update(s,M);for(let t of M.turrets||[])t.update(s);M.heli&&M.heli.update(s),_2(),sd(s),Mc(s,ft),id(s),gr.intensity=Math.max(0,gr.intensity-s*400),l2(s),Xd(We.pos),g2(s),M.ending>0&&(M.ending-=s,M.ending<=0&&lg(!0)),M.dying>0&&(M.dying-=s,M.dying<=0&&lg(!1)),window.__ts.fps=nt.fps}}}function Xd(s){_i.position.set(s.x+qc.x*80,qc.y*80,s.z+qc.z*80),_i.target.position.set(s.x,0,s.z),_i.target.updateMatrixWorld()}window.__ts={get mode(){return M.mode},get wave(){return M.wave},get alive(){return xg()},get coins(){return Ge.coins},get result(){return M.lastResult},get mission(){return Ca&&Ca.id},start:ch,menu:hh,jump:s=>{for(let e of M.actors)e.alive&&e.team==="red"&&e.damage(1e6,null,null,!1,!0);np(s)},tp:(s,e,t)=>{We.pos.set(s,0,e),t!=null&&(Pe.yaw=t),Pe.pitch=.05},use:()=>Jd(),save:()=>Ge,fps:0};(async function(){ut("load",!0),oe("ltxt").textContent="Oyuncaqlar y\xFCkl\u0259nir\u2026",await zd(t=>{oe("lbar").firstElementChild.style.width=Math.round(t*100)+"%"});for(let t of["blue_tank","red_tank"])Ot[t]&&B0(t);sp(1),M.mode="menu",await yg(),M.misReq||(ut("load",!1),ut("menu",!0)),Na(),vg(),ih()&&!Ia&&!Zd&&(rp(),ut("menu",!1),ut("dly",!0)),requestAnimationFrame($c)})();window.__pause=()=>xr(!0);})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
