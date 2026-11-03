(()=>{var U0=0,Ld=1,O0=2;var Kp=1,Vu=2,Pi=3,An=0,gn=1,Pt=2,en=0,Ni=1,ln=2,Dd=3,Nd=4,Gu=5,Kn=100,F0=101,k0=102,B0=103,z0=104,Vr=200,H0=201,V0=202,G0=203,Mh=204,Sh=205,Nl=206,W0=207,Ul=208,X0=209,q0=210,Y0=211,K0=212,Z0=213,$0=214,bh=0,Th=1,wh=2,Ar=3,Eh=4,Ah=5,Rh=6,Ch=7,Zp=0,J0=1,j0=2,ns=0,Wu=1,Xu=2,qu=3,Oo=4,Q0=5,Yu=6,Ku=7,Ud="attached",eg="detached",$p=300,Rr=301,Cr=302,Ph=303,Ih=304,Ol=306,cn=1e3,Li=1001,So=1002,Qt=1003,Zu=1004;var vr=1005;var Dn=1006,go=1007;var _i=1008;var fi=1009,Jp=1010,jp=1011,bo=1012,$u=1013,Ds=1014,hi=1015,yn=1016,Ju=1017,ju=1018,is=1020,Qp=35902,em=1021,tm=1022,Nn=1023,nm=1024,im=1025,Tr=1026,ss=1027,Qu=1028,ef=1029,sm=1030,tf=1031;var nf=1033,Ka=33776,Za=33777,$a=33778,Ja=33779,Lh=35840,Dh=35841,Nh=35842,Uh=35843,Oh=36196,Fh=37492,kh=37496,Bh=37808,zh=37809,Hh=37810,Vh=37811,Gh=37812,Wh=37813,Xh=37814,qh=37815,Yh=37816,Kh=37817,Zh=37818,$h=37819,Jh=37820,jh=37821,ja=36492,Qh=36494,eu=36495,rm=36283,tu=36284,nu=36285,iu=36286,sf=2200,tg=2201,ng=2202,Pr=2300,Ir=2301,kc=2302,Mr=2400,Sr=2401,el=2402,rf=2500,ig=2501,om=0,Fl=1,Fo=2,sg=3200,rg=3201;var of=0,og=1,yi="",wt="srgb",Zt="srgb-linear",af="display-p3",kl="display-p3-linear",tl="linear",Rt="srgb",nl="rec709",il="p3";var tr=7680;var Od=519,ag=512,lg=513,cg=514,am=515,hg=516,ug=517,fg=518,dg=519,su=35044;var Fd="300 es",Di=2e3,sl=2001,Ui=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}},pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],kd=1234567,xo=Math.PI/180,Lr=180/Math.PI;function ui(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(pn[s&255]+pn[s>>8&255]+pn[s>>16&255]+pn[s>>24&255]+"-"+pn[e&255]+pn[e>>8&255]+"-"+pn[e>>16&15|64]+pn[e>>24&255]+"-"+pn[t&63|128]+pn[t>>8&255]+"-"+pn[t>>16&255]+pn[t>>24&255]+pn[n&255]+pn[n>>8&255]+pn[n>>16&255]+pn[n>>24&255]).toLowerCase()}function an(s,e,t){return Math.max(e,Math.min(t,s))}function lf(s,e){return(s%e+e)%e}function pg(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function mg(s,e,t){return s!==e?(t-s)/(e-s):0}function yo(s,e,t){return(1-t)*s+t*e}function gg(s,e,t,n){return yo(s,e,1-Math.exp(-t*n))}function xg(s,e=1){return e-Math.abs(lf(s,e*2)-e)}function yg(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function _g(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function vg(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Mg(s,e){return s+Math.random()*(e-s)}function Sg(s){return s*(.5-Math.random())}function bg(s){s!==void 0&&(kd=s);let e=kd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Tg(s){return s*xo}function wg(s){return s*Lr}function Eg(s){return(s&s-1)===0&&s!==0}function Ag(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Rg(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Cg(s,e,t,n,i){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":s.set(a*h,l*u,l*f,a*c);break;case"YZY":s.set(l*f,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*f,a*h,a*c);break;case"XZX":s.set(a*h,l*g,l*d,a*c);break;case"YXY":s.set(l*d,a*h,l*g,a*c);break;case"ZYZ":s.set(l*g,l*d,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ci(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function St(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var lm={DEG2RAD:xo,RAD2DEG:Lr,generateUUID:ui,clamp:an,euclideanModulo:lf,mapLinear:pg,inverseLerp:mg,lerp:yo,damp:gg,pingpong:xg,smoothstep:yg,smootherstep:_g,randInt:vg,randFloat:Mg,randFloatSpread:Sg,seededRandom:bg,degToRad:Tg,radToDeg:wg,isPowerOfTwo:Eg,ceilPowerOfTwo:Ag,floorPowerOfTwo:Rg,setQuaternionFromProperEuler:Cg,normalize:St,denormalize:ci},te=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(an(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},qe=class s{constructor(e,t,n,i,r,o,a,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],x=i[0],p=i[3],m=i[6],v=i[1],y=i[4],M=i[7],P=i[2],A=i[5],E=i[8];return r[0]=o*x+a*v+l*P,r[3]=o*p+a*y+l*A,r[6]=o*m+a*M+l*E,r[1]=c*x+h*v+u*P,r[4]=c*p+h*y+u*A,r[7]=c*m+h*M+u*E,r[2]=f*x+d*v+g*P,r[5]=f*p+d*y+g*A,r[8]=f*m+d*M+g*E,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,g=t*u+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=u*x,e[1]=(i*c-h*n)*x,e[2]=(a*n-i*o)*x,e[3]=f*x,e[4]=(h*t-i*l)*x,e[5]=(i*r-a*t)*x,e[6]=d*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Bc.makeScale(e,t)),this}rotate(e){return this.premultiply(Bc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Bc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Bc=new qe;function cm(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function To(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Pg(){let s=To("canvas");return s.style.display="block",s}var Bd={};function Qa(s){s in Bd||(Bd[s]=!0,console.warn(s))}function Ig(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Lg(s){let e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Dg(s){let e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var zd=new qe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Hd=new qe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),no={[Zt]:{transfer:tl,primaries:nl,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s,fromReference:s=>s},[wt]:{transfer:Rt,primaries:nl,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[kl]:{transfer:tl,primaries:il,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.applyMatrix3(Hd),fromReference:s=>s.applyMatrix3(zd)},[af]:{transfer:Rt,primaries:il,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.convertSRGBToLinear().applyMatrix3(Hd),fromReference:s=>s.applyMatrix3(zd).convertLinearToSRGB()}},Ng=new Set([Zt,kl]),et={enabled:!0,_workingColorSpace:Zt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Ng.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;let n=no[e].toReference,i=no[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return no[s].primaries},getTransfer:function(s){return s===yi?tl:no[s].transfer},getLuminanceCoefficients:function(s,e=this._workingColorSpace){return s.fromArray(no[e].luminanceCoefficients)}};function wr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function zc(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var nr,ru=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{nr===void 0&&(nr=To("canvas")),nr.width=e.width,nr.height=e.height;let n=nr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=nr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=To("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=wr(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(wr(t[n]/255)*255):t[n]=wr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Ug=0,rl=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ug++}),this.uuid=ui(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Hc(i[o].image)):r.push(Hc(i[o]))}else r=Hc(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function Hc(s){return typeof HTMLImageElement!="undefined"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&s instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&s instanceof ImageBitmap?ru.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Og=0,hn=class s extends Ui{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=Li,i=Li,r=Dn,o=_i,a=Nn,l=fi,c=s.DEFAULT_ANISOTROPY,h=yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Og++}),this.uuid=ui(),this.name="",this.source=new rl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new te(0,0),this.repeat=new te(1,1),this.center=new te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$p)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case cn:e.x=e.x-Math.floor(e.x);break;case Li:e.x=e.x<0?0:1;break;case So:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case cn:e.y=e.y-Math.floor(e.y);break;case Li:e.y=e.y<0?0:1;break;case So:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=$p;hn.DEFAULT_ANISOTROPY=1;var pt=class s{constructor(e=0,t=0,n=0,i=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],x=l[2],p=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(c+1)/2,M=(d+1)/2,P=(m+1)/2,A=(h+f)/4,E=(u+x)/4,I=(g+p)/4;return y>M&&y>P?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=A/n,r=E/n):M>P?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=A/i,r=I/i):P<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(P),n=E/r,i=I/r),this.set(n,i,r,t),this}let v=Math.sqrt((p-g)*(p-g)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(p-g)/v,this.y=(u-x)/v,this.z=(f-h)/v,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ou=class extends Ui{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t);let i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new hn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new rl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Yt=class extends ou{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ol=class extends hn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var au=class extends hn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Vt=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],f=r[o+0],d=r[o+1],g=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=x;return}if(u!==x||l!==f||c!==d||h!==g){let p=1-a,m=l*f+c*d+h*g+u*x,v=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){let P=Math.sqrt(y),A=Math.atan2(P,m*v);p=Math.sin(p*A)/P,a=Math.sin(a*A)/P}let M=a*v;if(l=l*p+f*M,c=c*p+d*M,h=h*p+g*M,u=u*p+x*M,p===1-a){let P=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=P,c*=P,h*=P,u*=P}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+h*u+l*d-c*f,e[t+1]=l*g+h*f+c*u-a*d,e[t+2]=c*g+h*d+a*f-l*u,e[t+3]=h*g-a*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),f=l(n/2),d=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-i)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-i)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(an(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Vd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Vd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-r*i),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Vc.copy(this).projectOnVector(e),this.sub(Vc)}reflect(e){return this.sub(Vc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(an(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Vc=new R,Vd=new Vt,Zn=class{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(oi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(oi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=oi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,oi):oi.fromBufferAttribute(r,o),oi.applyMatrix4(e.matrixWorld),this.expandByPoint(oi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ga.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ga.copy(n.boundingBox)),ga.applyMatrix4(e.matrixWorld),this.union(ga)}let i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,oi),oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(io),xa.subVectors(this.max,io),ir.subVectors(e.a,io),sr.subVectors(e.b,io),rr.subVectors(e.c,io),Ki.subVectors(sr,ir),Zi.subVectors(rr,sr),ws.subVectors(ir,rr);let t=[0,-Ki.z,Ki.y,0,-Zi.z,Zi.y,0,-ws.z,ws.y,Ki.z,0,-Ki.x,Zi.z,0,-Zi.x,ws.z,0,-ws.x,-Ki.y,Ki.x,0,-Zi.y,Zi.x,0,-ws.y,ws.x,0];return!Gc(t,ir,sr,rr,xa)||(t=[1,0,0,0,1,0,0,0,1],!Gc(t,ir,sr,rr,xa))?!1:(ya.crossVectors(Ki,Zi),t=[ya.x,ya.y,ya.z],Gc(t,ir,sr,rr,xa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,oi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(oi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Ti=[new R,new R,new R,new R,new R,new R,new R,new R],oi=new R,ga=new Zn,ir=new R,sr=new R,rr=new R,Ki=new R,Zi=new R,ws=new R,io=new R,xa=new R,ya=new R,Es=new R;function Gc(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Es.fromArray(s,r);let a=i.x*Math.abs(Es.x)+i.y*Math.abs(Es.y)+i.z*Math.abs(Es.z),l=e.dot(Es),c=t.dot(Es),h=n.dot(Es);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Fg=new Zn,so=new R,Wc=new R,Rn=class{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Fg.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;so.subVectors(e,this.center);let t=so.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(so,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(so.copy(e.center).add(Wc)),this.expandByPoint(so.copy(e.center).sub(Wc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},wi=new R,Xc=new R,_a=new R,$i=new R,qc=new R,va=new R,Yc=new R,Dr=class{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=wi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(wi.copy(this.origin).addScaledVector(this.direction,t),wi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Xc.copy(e).add(t).multiplyScalar(.5),_a.copy(t).sub(e).normalize(),$i.copy(this.origin).sub(Xc);let r=e.distanceTo(t)*.5,o=-this.direction.dot(_a),a=$i.dot(this.direction),l=-$i.dot(_a),c=$i.lengthSq(),h=Math.abs(1-o*o),u,f,d,g;if(h>0)if(u=o*l-a,f=o*a-l,g=r*h,u>=0)if(f>=-g)if(f<=g){let x=1/h;u*=x,f*=x,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Xc).addScaledVector(_a,f),d}intersectSphere(e,t){wi.subVectors(e.center,this.origin);let n=wi.dot(this.direction),i=wi.dot(wi)-n*n,r=e.radius*e.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,wi)!==null}intersectTriangle(e,t,n,i,r){qc.subVectors(t,e),va.subVectors(n,e),Yc.crossVectors(qc,va);let o=this.direction.dot(Yc),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;$i.subVectors(this.origin,e);let l=a*this.direction.dot(va.crossVectors($i,va));if(l<0)return null;let c=a*this.direction.dot(qc.cross($i));if(c<0||l+c>o)return null;let h=-a*$i.dot(Yc);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ee=class s{constructor(e,t,n,i,r,o,a,l,c,h,u,f,d,g,x,p){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,h,u,f,d,g,x,p)}set(e,t,n,i,r,o,a,l,c,h,u,f,d,g,x,p){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=g,m[11]=x,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/or.setFromMatrixColumn(e,0).length(),r=1/or.setFromMatrixColumn(e,1).length(),o=1/or.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=o*h,d=o*u,g=a*h,x=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+g*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*h,d=l*u,g=c*h,x=c*u;t[0]=f+x*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-g,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*h,d=l*u,g=c*h,x=c*u;t[0]=f-x*a,t[4]=-o*u,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*h,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*h,d=o*u,g=a*h,x=a*u;t[0]=l*h,t[4]=g*c-d,t[8]=f*c+x,t[1]=l*u,t[5]=x*c+f,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,d=o*c,g=a*l,x=a*c;t[0]=l*h,t[4]=x-f*u,t[8]=g*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=d*u+g,t[10]=f-x*u}else if(e.order==="XZY"){let f=o*l,d=o*c,g=a*l,x=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+x,t[5]=o*h,t[9]=d*u-g,t[2]=g*u-d,t[6]=a*h,t[10]=x*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(kg,e,Bg)}lookAt(e,t,n){let i=this.elements;return Vn.subVectors(e,t),Vn.lengthSq()===0&&(Vn.z=1),Vn.normalize(),Ji.crossVectors(n,Vn),Ji.lengthSq()===0&&(Math.abs(n.z)===1?Vn.x+=1e-4:Vn.z+=1e-4,Vn.normalize(),Ji.crossVectors(n,Vn)),Ji.normalize(),Ma.crossVectors(Vn,Ji),i[0]=Ji.x,i[4]=Ma.x,i[8]=Vn.x,i[1]=Ji.y,i[5]=Ma.y,i[9]=Vn.y,i[2]=Ji.z,i[6]=Ma.z,i[10]=Vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],x=n[6],p=n[10],m=n[14],v=n[3],y=n[7],M=n[11],P=n[15],A=i[0],E=i[4],I=i[8],F=i[12],_=i[1],b=i[5],O=i[9],k=i[13],G=i[2],q=i[6],z=i[10],j=i[14],W=i[3],ie=i[7],le=i[11],ge=i[15];return r[0]=o*A+a*_+l*G+c*W,r[4]=o*E+a*b+l*q+c*ie,r[8]=o*I+a*O+l*z+c*le,r[12]=o*F+a*k+l*j+c*ge,r[1]=h*A+u*_+f*G+d*W,r[5]=h*E+u*b+f*q+d*ie,r[9]=h*I+u*O+f*z+d*le,r[13]=h*F+u*k+f*j+d*ge,r[2]=g*A+x*_+p*G+m*W,r[6]=g*E+x*b+p*q+m*ie,r[10]=g*I+x*O+p*z+m*le,r[14]=g*F+x*k+p*j+m*ge,r[3]=v*A+y*_+M*G+P*W,r[7]=v*E+y*b+M*q+P*ie,r[11]=v*I+y*O+M*z+P*le,r[15]=v*F+y*k+M*j+P*ge,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],g=e[3],x=e[7],p=e[11],m=e[15];return g*(+r*l*u-i*c*u-r*a*f+n*c*f+i*a*d-n*l*d)+x*(+t*l*d-t*c*f+r*o*f-i*o*d+i*c*h-r*l*h)+p*(+t*c*u-t*a*d-r*o*u+n*o*d+r*a*h-n*c*h)+m*(-i*a*h-t*l*u+t*a*f+i*o*u-n*o*f+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],g=e[12],x=e[13],p=e[14],m=e[15],v=u*p*c-x*f*c+x*l*d-a*p*d-u*l*m+a*f*m,y=g*f*c-h*p*c-g*l*d+o*p*d+h*l*m-o*f*m,M=h*x*c-g*u*c+g*a*d-o*x*d-h*a*m+o*u*m,P=g*u*l-h*x*l-g*a*f+o*x*f+h*a*p-o*u*p,A=t*v+n*y+i*M+r*P;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/A;return e[0]=v*E,e[1]=(x*f*r-u*p*r-x*i*d+n*p*d+u*i*m-n*f*m)*E,e[2]=(a*p*r-x*l*r+x*i*c-n*p*c-a*i*m+n*l*m)*E,e[3]=(u*l*r-a*f*r-u*i*c+n*f*c+a*i*d-n*l*d)*E,e[4]=y*E,e[5]=(h*p*r-g*f*r+g*i*d-t*p*d-h*i*m+t*f*m)*E,e[6]=(g*l*r-o*p*r-g*i*c+t*p*c+o*i*m-t*l*m)*E,e[7]=(o*f*r-h*l*r+h*i*c-t*f*c-o*i*d+t*l*d)*E,e[8]=M*E,e[9]=(g*u*r-h*x*r-g*n*d+t*x*d+h*n*m-t*u*m)*E,e[10]=(o*x*r-g*a*r+g*n*c-t*x*c-o*n*m+t*a*m)*E,e[11]=(h*a*r-o*u*r-h*n*c+t*u*c+o*n*d-t*a*d)*E,e[12]=P*E,e[13]=(h*x*i-g*u*i+g*n*f-t*x*f-h*n*p+t*u*p)*E,e[14]=(g*a*i-o*x*i-g*n*l+t*x*l+o*n*p-t*a*p)*E,e[15]=(o*u*i-h*a*i+h*n*l-t*u*l-o*n*f+t*a*f)*E,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,g=r*u,x=o*h,p=o*u,m=a*u,v=l*c,y=l*h,M=l*u,P=n.x,A=n.y,E=n.z;return i[0]=(1-(x+m))*P,i[1]=(d+M)*P,i[2]=(g-y)*P,i[3]=0,i[4]=(d-M)*A,i[5]=(1-(f+m))*A,i[6]=(p+v)*A,i[7]=0,i[8]=(g+y)*E,i[9]=(p-v)*E,i[10]=(1-(f+x))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=or.set(i[0],i[1],i[2]).length(),o=or.set(i[4],i[5],i[6]).length(),a=or.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],ai.copy(this);let c=1/r,h=1/o,u=1/a;return ai.elements[0]*=c,ai.elements[1]*=c,ai.elements[2]*=c,ai.elements[4]*=h,ai.elements[5]*=h,ai.elements[6]*=h,ai.elements[8]*=u,ai.elements[9]*=u,ai.elements[10]*=u,t.setFromRotationMatrix(ai),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=Di){let l=this.elements,c=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i),d,g;if(a===Di)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===sl)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=Di){let l=this.elements,c=1/(t-e),h=1/(n-i),u=1/(o-r),f=(t+e)*c,d=(n+i)*h,g,x;if(a===Di)g=(o+r)*u,x=-2*u;else if(a===sl)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},or=new R,ai=new Ee,kg=new R(0,0,0),Bg=new R(1,1,1),Ji=new R,Ma=new R,Vn=new R,Gd=new Ee,Wd=new Vt,$n=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(an(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-an(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(an(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-an(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(an(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-an(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Gd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Wd.setFromEuler(this),this.setFromQuaternion(Wd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};$n.DEFAULT_ORDER="XYZ";var al=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},zg=0,Xd=new R,ar=new Vt,Ei=new Ee,Sa=new R,ro=new R,Hg=new R,Vg=new Vt,qd=new R(1,0,0),Yd=new R(0,1,0),Kd=new R(0,0,1),Zd={type:"added"},Gg={type:"removed"},lr={type:"childadded",child:null},Kc={type:"childremoved",child:null},bt=class s extends Ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zg++}),this.uuid=ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new R,t=new $n,n=new Vt,i=new R(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ee},normalMatrix:{value:new qe}}),this.matrix=new Ee,this.matrixWorld=new Ee,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new al,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ar.setFromAxisAngle(e,t),this.quaternion.multiply(ar),this}rotateOnWorldAxis(e,t){return ar.setFromAxisAngle(e,t),this.quaternion.premultiply(ar),this}rotateX(e){return this.rotateOnAxis(qd,e)}rotateY(e){return this.rotateOnAxis(Yd,e)}rotateZ(e){return this.rotateOnAxis(Kd,e)}translateOnAxis(e,t){return Xd.copy(e).applyQuaternion(this.quaternion),this.position.add(Xd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(qd,e)}translateY(e){return this.translateOnAxis(Yd,e)}translateZ(e){return this.translateOnAxis(Kd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ei.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Sa.copy(e):Sa.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),ro.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ei.lookAt(ro,Sa,this.up):Ei.lookAt(Sa,ro,this.up),this.quaternion.setFromRotationMatrix(Ei),i&&(Ei.extractRotation(i.matrixWorld),ar.setFromRotationMatrix(Ei),this.quaternion.premultiply(ar.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Zd),lr.child=e,this.dispatchEvent(lr),lr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Gg),Kc.child=e,this.dispatchEvent(Kc),Kc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ei),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Zd),lr.child=e,this.dispatchEvent(lr),lr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ro,e,Hg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ro,Vg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};bt.DEFAULT_UP=new R(0,1,0);bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var li=new R,Ai=new R,Zc=new R,Ri=new R,cr=new R,hr=new R,$d=new R,$c=new R,Jc=new R,jc=new R,Qc=new pt,eh=new pt,th=new pt,es=class s{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),li.subVectors(e,t),i.cross(li);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){li.subVectors(i,t),Ai.subVectors(n,t),Zc.subVectors(e,t);let o=li.dot(li),a=li.dot(Ai),l=li.dot(Zc),c=Ai.dot(Ai),h=Ai.dot(Zc),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ri)===null?!1:Ri.x>=0&&Ri.y>=0&&Ri.x+Ri.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,Ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ri.x),l.addScaledVector(o,Ri.y),l.addScaledVector(a,Ri.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return Qc.setScalar(0),eh.setScalar(0),th.setScalar(0),Qc.fromBufferAttribute(e,t),eh.fromBufferAttribute(e,n),th.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Qc,r.x),o.addScaledVector(eh,r.y),o.addScaledVector(th,r.z),o}static isFrontFacing(e,t,n,i){return li.subVectors(n,t),Ai.subVectors(e,t),li.cross(Ai).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return li.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),li.cross(Ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,o,a;cr.subVectors(i,n),hr.subVectors(r,n),$c.subVectors(e,n);let l=cr.dot($c),c=hr.dot($c);if(l<=0&&c<=0)return t.copy(n);Jc.subVectors(e,i);let h=cr.dot(Jc),u=hr.dot(Jc);if(h>=0&&u<=h)return t.copy(i);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(cr,o);jc.subVectors(e,r);let d=cr.dot(jc),g=hr.dot(jc);if(g>=0&&d<=g)return t.copy(r);let x=d*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(hr,a);let p=h*g-d*u;if(p<=0&&u-h>=0&&d-g>=0)return $d.subVectors(r,i),a=(u-h)/(u-h+(d-g)),t.copy(i).addScaledVector($d,a);let m=1/(p+x+f);return o=x*m,a=f*m,t.copy(n).addScaledVector(cr,o).addScaledVector(hr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},hm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ji={h:0,s:0,l:0},ba={h:0,s:0,l:0};function nh(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var ce=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=et.workingColorSpace){return this.r=e,this.g=t,this.b=n,et.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=et.workingColorSpace){if(e=lf(e,1),t=an(t,0,1),n=an(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=nh(o,r,e+1/3),this.g=nh(o,r,e),this.b=nh(o,r,e-1/3)}return et.toWorkingColorSpace(this,i),this}setStyle(e,t=wt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=wt){let n=hm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wr(e.r),this.g=wr(e.g),this.b=wr(e.b),this}copyLinearToSRGB(e){return this.r=zc(e.r),this.g=zc(e.g),this.b=zc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=wt){return et.fromWorkingColorSpace(mn.copy(this),e),Math.round(an(mn.r*255,0,255))*65536+Math.round(an(mn.g*255,0,255))*256+Math.round(an(mn.b*255,0,255))}getHexString(e=wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.fromWorkingColorSpace(mn.copy(this),t);let n=mn.r,i=mn.g,r=mn.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=et.workingColorSpace){return et.fromWorkingColorSpace(mn.copy(this),t),e.r=mn.r,e.g=mn.g,e.b=mn.b,e}getStyle(e=wt){et.fromWorkingColorSpace(mn.copy(this),e);let t=mn.r,n=mn.g,i=mn.b;return e!==wt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ji),this.setHSL(ji.h+e,ji.s+t,ji.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ji),e.getHSL(ba);let n=yo(ji.h,ba.h,t),i=yo(ji.s,ba.s,t),r=yo(ji.l,ba.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},mn=new ce;ce.NAMES=hm;var Wg=0,Cn=class extends Ui{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wg++}),this.uuid=ui(),this.name="",this.type="Material",this.blending=Ni,this.side=An,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Mh,this.blendDst=Sh,this.blendEquation=Kn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ce(0,0,0),this.blendAlpha=0,this.depthFunc=Ar,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Od,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=tr,this.stencilZFail=tr,this.stencilZPass=tr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ni&&(n.blending=this.blending),this.side!==An&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Mh&&(n.blendSrc=this.blendSrc),this.blendDst!==Sh&&(n.blendDst=this.blendDst),this.blendEquation!==Kn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ar&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Od&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==tr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==tr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==tr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Et=class extends Cn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.combine=Zp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var qt=new R,Ta=new te,Ft=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=su,this.updateRanges=[],this.gpuType=hi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ta.fromBufferAttribute(this,t),Ta.applyMatrix3(e),this.setXY(t,Ta.x,Ta.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix3(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ci(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=St(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ci(t,this.array)),t}setX(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ci(t,this.array)),t}setY(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ci(t,this.array)),t}setZ(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ci(t,this.array)),t}setW(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array),i=St(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array),i=St(i,this.array),r=St(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==su&&(e.usage=this.usage),e}};var ll=class extends Ft{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var cl=class extends Ft{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var He=class extends Ft{constructor(e,t,n){super(new Float32Array(e),t,n)}},Xg=0,Yn=new Ee,ih=new bt,ur=new R,Gn=new Zn,oo=new Zn,on=new R,Tt=class s extends Ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xg++}),this.uuid=ui(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(cm(e)?cl:ll)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new qe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Yn.makeRotationFromQuaternion(e),this.applyMatrix4(Yn),this}rotateX(e){return Yn.makeRotationX(e),this.applyMatrix4(Yn),this}rotateY(e){return Yn.makeRotationY(e),this.applyMatrix4(Yn),this}rotateZ(e){return Yn.makeRotationZ(e),this.applyMatrix4(Yn),this}translate(e,t,n){return Yn.makeTranslation(e,t,n),this.applyMatrix4(Yn),this}scale(e,t,n){return Yn.makeScale(e,t,n),this.applyMatrix4(Yn),this}lookAt(e){return ih.lookAt(e),ih.updateMatrix(),this.applyMatrix4(ih.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ur).negate(),this.translate(ur.x,ur.y,ur.z),this}setFromPoints(e){let t=[];for(let n=0,i=e.length;n<i;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new He(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];Gn.setFromBufferAttribute(r),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,Gn.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,Gn.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(Gn.min),this.boundingBox.expandByPoint(Gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){let n=this.boundingSphere.center;if(Gn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];oo.setFromBufferAttribute(a),this.morphTargetsRelative?(on.addVectors(Gn.min,oo.min),Gn.expandByPoint(on),on.addVectors(Gn.max,oo.max),Gn.expandByPoint(on)):(Gn.expandByPoint(oo.min),Gn.expandByPoint(oo.max))}Gn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)on.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(on));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)on.fromBufferAttribute(a,c),l&&(ur.fromBufferAttribute(e,c),on.add(ur)),i=Math.max(i,n.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ft(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<n.count;I++)a[I]=new R,l[I]=new R;let c=new R,h=new R,u=new R,f=new te,d=new te,g=new te,x=new R,p=new R;function m(I,F,_){c.fromBufferAttribute(n,I),h.fromBufferAttribute(n,F),u.fromBufferAttribute(n,_),f.fromBufferAttribute(r,I),d.fromBufferAttribute(r,F),g.fromBufferAttribute(r,_),h.sub(c),u.sub(c),d.sub(f),g.sub(f);let b=1/(d.x*g.y-g.x*d.y);isFinite(b)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(b),p.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(b),a[I].add(x),a[F].add(x),a[_].add(x),l[I].add(p),l[F].add(p),l[_].add(p))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let I=0,F=v.length;I<F;++I){let _=v[I],b=_.start,O=_.count;for(let k=b,G=b+O;k<G;k+=3)m(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let y=new R,M=new R,P=new R,A=new R;function E(I){P.fromBufferAttribute(i,I),A.copy(P);let F=a[I];y.copy(F),y.sub(P.multiplyScalar(P.dot(F))).normalize(),M.crossVectors(A,F);let b=M.dot(l[I])<0?-1:1;o.setXYZW(I,y.x,y.y,y.z,b)}for(let I=0,F=v.length;I<F;++I){let _=v[I],b=_.start,O=_.count;for(let k=b,G=b+O;k<G;k+=3)E(e.getX(k+0)),E(e.getX(k+1)),E(e.getX(k+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ft(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new R,r=new R,o=new R,a=new R,l=new R,c=new R,h=new R,u=new R;if(e)for(let f=0,d=e.count;f<d;f+=3){let g=e.getX(f+0),x=e.getX(f+1),p=e.getX(f+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,p),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)on.fromBufferAttribute(e,t),on.normalize(),e.setXYZ(t,on.x,on.y,on.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,g=0;for(let x=0,p=l.length;x<p;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*h;for(let m=0;m<h;m++)f[g++]=c[d++]}return new Ft(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Jd=new Ee,As=new Dr,wa=new Rn,jd=new R,Ea=new R,Aa=new R,Ra=new R,sh=new R,Ca=new R,Qd=new R,Pa=new R,Ie=class extends bt{constructor(e=new Tt,t=new Et){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(r&&a){Ca.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(sh.fromBufferAttribute(u,e),o?Ca.addScaledVector(sh,h):Ca.addScaledVector(sh.sub(t),h))}t.add(Ca)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),wa.copy(n.boundingSphere),wa.applyMatrix4(r),As.copy(e.ray).recast(e.near),!(wa.containsPoint(As.origin)===!1&&(As.intersectSphere(wa,jd)===null||As.origin.distanceToSquared(jd)>(e.far-e.near)**2))&&(Jd.copy(r).invert(),As.copy(e.ray).applyMatrix4(Jd),!(n.boundingBox!==null&&As.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,As)))}_computeIntersections(e,t,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let p=f[g],m=o[p.materialIndex],v=Math.max(p.start,d.start),y=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let M=v,P=y;M<P;M+=3){let A=a.getX(M),E=a.getX(M+1),I=a.getX(M+2);i=Ia(this,m,e,n,c,h,u,A,E,I),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{let g=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let p=g,m=x;p<m;p+=3){let v=a.getX(p),y=a.getX(p+1),M=a.getX(p+2);i=Ia(this,o,e,n,c,h,u,v,y,M),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let p=f[g],m=o[p.materialIndex],v=Math.max(p.start,d.start),y=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let M=v,P=y;M<P;M+=3){let A=M,E=M+1,I=M+2;i=Ia(this,m,e,n,c,h,u,A,E,I),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{let g=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let p=g,m=x;p<m;p+=3){let v=p,y=p+1,M=p+2;i=Ia(this,o,e,n,c,h,u,v,y,M),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}};function qg(s,e,t,n,i,r,o,a){let l;if(e.side===gn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===An,a),l===null)return null;Pa.copy(a),Pa.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(Pa);return c<t.near||c>t.far?null:{distance:c,point:Pa.clone(),object:s}}function Ia(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,Ea),s.getVertexPosition(l,Aa),s.getVertexPosition(c,Ra);let h=qg(s,e,t,n,Ea,Aa,Ra,Qd);if(h){let u=new R;es.getBarycoord(Qd,Ea,Aa,Ra,u),i&&(h.uv=es.getInterpolatedAttribute(i,a,l,c,u,new te)),r&&(h.uv1=es.getInterpolatedAttribute(r,a,l,c,u,new te)),o&&(h.normal=es.getInterpolatedAttribute(o,a,l,c,u,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new R,materialIndex:0};es.getNormal(Ea,Aa,Ra,f.normal),h.face=f,h.barycoord=u}return h}var di=class s extends Tt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new He(c,3)),this.setAttribute("normal",new He(h,3)),this.setAttribute("uv",new He(u,2));function g(x,p,m,v,y,M,P,A,E,I,F){let _=M/E,b=P/I,O=M/2,k=P/2,G=A/2,q=E+1,z=I+1,j=0,W=0,ie=new R;for(let le=0;le<z;le++){let ge=le*b-k;for(let Ze=0;Ze<q;Ze++){let rt=Ze*_-O;ie[x]=rt*v,ie[p]=ge*y,ie[m]=G,c.push(ie.x,ie.y,ie.z),ie[x]=0,ie[p]=0,ie[m]=A>0?1:-1,h.push(ie.x,ie.y,ie.z),u.push(Ze/E),u.push(1-le/I),j+=1}}for(let le=0;le<I;le++)for(let ge=0;ge<E;ge++){let Ze=f+ge+q*le,rt=f+ge+q*(le+1),Y=f+(ge+1)+q*(le+1),Q=f+(ge+1)+q*le;l.push(Ze,rt,Q),l.push(rt,Y,Q),W+=6}a.addGroup(d,W,F),d+=W,f+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Nr(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function En(s){let e={};for(let t=0;t<s.length;t++){let n=Nr(s[t]);for(let i in n)e[i]=n[i]}return e}function Yg(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function um(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}var Un={clone:Nr,merge:En},Kg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Nt=class extends Cn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kg,this.fragmentShader=Zg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Nr(e.uniforms),this.uniformsGroups=Yg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},hl=class extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ee,this.projectionMatrix=new Ee,this.projectionMatrixInverse=new Ee,this.coordinateSystem=Di}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Qi=new R,ep=new te,tp=new te,jt=class extends hl{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Lr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(xo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Lr*2*Math.atan(Math.tan(xo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Qi.x,Qi.y).multiplyScalar(-e/Qi.z),Qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qi.x,Qi.y).multiplyScalar(-e/Qi.z)}getViewSize(e,t){return this.getViewBounds(e,ep,tp),t.subVectors(tp,ep)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(xo*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},fr=-90,dr=1,lu=class extends bt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new jt(fr,dr,e,t);i.layers=this.layers,this.add(i);let r=new jt(fr,dr,e,t);r.layers=this.layers,this.add(r);let o=new jt(fr,dr,e,t);o.layers=this.layers,this.add(o);let a=new jt(fr,dr,e,t);a.layers=this.layers,this.add(a);let l=new jt(fr,dr,e,t);l.layers=this.layers,this.add(l);let c=new jt(fr,dr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Di)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===sl)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},ul=class extends hn{constructor(e,t,n,i,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Rr,super(e,t,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},cu=class extends Yt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new ul(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Dn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new di(5,5,5),r=new Nt({name:"CubemapFromEquirect",uniforms:Nr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:gn,blending:en});r.uniforms.tEquirect.value=t;let o=new Ie(i,r),a=t.minFilter;return t.minFilter===_i&&(t.minFilter=Dn),new lu(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}},rh=new R,$g=new R,Jg=new qe,Ii=class{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=rh.subVectors(n,t).cross($g.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(rh),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Jg.getNormalMatrix(e),i=this.coplanarPoint(rh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Rs=new Rn,La=new R,wo=class{constructor(e=new Ii,t=new Ii,n=new Ii,i=new Ii,r=new Ii,o=new Ii){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Di){let n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],f=i[7],d=i[8],g=i[9],x=i[10],p=i[11],m=i[12],v=i[13],y=i[14],M=i[15];if(n[0].setComponents(l-r,f-c,p-d,M-m).normalize(),n[1].setComponents(l+r,f+c,p+d,M+m).normalize(),n[2].setComponents(l+o,f+h,p+g,M+v).normalize(),n[3].setComponents(l-o,f-h,p-g,M-v).normalize(),n[4].setComponents(l-a,f-u,p-x,M-y).normalize(),t===Di)n[5].setComponents(l+a,f+u,p+x,M+y).normalize();else if(t===sl)n[5].setComponents(a,u,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Rs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Rs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Rs)}intersectsSprite(e){return Rs.center.set(0,0,0),Rs.radius=.7071067811865476,Rs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Rs)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(La.x=i.normal.x>0?e.max.x:e.min.x,La.y=i.normal.y>0?e.max.y:e.min.y,La.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(La)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function fm(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function jg(s){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){let g=u[f],x=u[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){let x=u[d];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var xn=class s extends Tt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=e/a,f=t/l,d=[],g=[],x=[],p=[];for(let m=0;m<h;m++){let v=m*f-o;for(let y=0;y<c;y++){let M=y*u-r;g.push(M,-v,0),x.push(0,0,1),p.push(y/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<a;v++){let y=v+c*m,M=v+c*(m+1),P=v+1+c*(m+1),A=v+1+c*m;d.push(y,M,A),d.push(M,P,A)}this.setIndex(d),this.setAttribute("position",new He(g,3)),this.setAttribute("normal",new He(x,3)),this.setAttribute("uv",new He(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},Qg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ex=`#ifdef USE_ALPHAHASH
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
#endif`,tx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ix=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rx=`#ifdef USE_AOMAP
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
#endif`,ox=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ax=`#ifdef USE_BATCHING
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
#endif`,lx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ux=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,fx=`#ifdef USE_IRIDESCENCE
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
#endif`,dx=`#ifdef USE_BUMPMAP
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
#endif`,px=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,mx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_x=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Mx=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Sx=`#define PI 3.141592653589793
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
} // validated`,bx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Tx=`vec3 transformedNormal = objectNormal;
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
#endif`,wx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ex=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ax=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Px=`
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
}`,Ix=`#ifdef USE_ENVMAP
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
#endif`,Lx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Dx=`#ifdef USE_ENVMAP
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
#endif`,Nx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ux=`#ifdef USE_ENVMAP
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
#endif`,Ox=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zx=`#ifdef USE_GRADIENTMAP
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
}`,Hx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wx=`uniform bool receiveShadow;
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
#endif`,Xx=`#ifdef USE_ENVMAP
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
#endif`,qx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Kx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$x=`PhysicalMaterial material;
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
#endif`,Jx=`struct PhysicalMaterial {
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
}`,jx=`
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
#endif`,Qx=`#if defined( RE_IndirectDiffuse )
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
#endif`,ey=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ty=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ny=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iy=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sy=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ry=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,oy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ay=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ly=`#if defined( USE_POINTS_UV )
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
#endif`,cy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,uy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,py=`#ifdef USE_MORPHTARGETS
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
#endif`,my=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,xy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,yy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_y=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,My=`#ifdef USE_NORMALMAP
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
#endif`,Sy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,by=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ty=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ey=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ay=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ry=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Py=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Iy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ly=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ny=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Uy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Oy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Fy=`float getShadowMask() {
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
}`,ky=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,By=`#ifdef USE_SKINNING
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
#endif`,zy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hy=`#ifdef USE_SKINNING
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
#endif`,Vy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,qy=`#ifdef USE_TRANSMISSION
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
#endif`,Yy=`#ifdef USE_TRANSMISSION
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
#endif`,Ky=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$y=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,jy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qy=`uniform sampler2D t2D;
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
}`,e_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,t_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,n_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,i_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s_=`#include <common>
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
}`,r_=`#if DEPTH_PACKING == 3200
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
}`,o_=`#define DISTANCE
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
}`,a_=`#define DISTANCE
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
}`,l_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,c_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,h_=`uniform float scale;
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
}`,u_=`uniform vec3 diffuse;
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
}`,f_=`#include <common>
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
}`,d_=`uniform vec3 diffuse;
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
}`,p_=`#define LAMBERT
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
}`,m_=`#define LAMBERT
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
}`,g_=`#define MATCAP
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
}`,x_=`#define MATCAP
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
}`,y_=`#define NORMAL
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
}`,__=`#define NORMAL
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
}`,v_=`#define PHONG
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
}`,M_=`#define PHONG
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
}`,S_=`#define STANDARD
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
}`,b_=`#define STANDARD
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
}`,T_=`#define TOON
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
}`,w_=`#define TOON
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
}`,E_=`uniform float size;
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
}`,A_=`uniform vec3 diffuse;
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
}`,R_=`#include <common>
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
}`,C_=`uniform vec3 color;
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
}`,P_=`uniform float rotation;
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
}`,I_=`uniform vec3 diffuse;
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
}`,Xe={alphahash_fragment:Qg,alphahash_pars_fragment:ex,alphamap_fragment:tx,alphamap_pars_fragment:nx,alphatest_fragment:ix,alphatest_pars_fragment:sx,aomap_fragment:rx,aomap_pars_fragment:ox,batching_pars_vertex:ax,batching_vertex:lx,begin_vertex:cx,beginnormal_vertex:hx,bsdfs:ux,iridescence_fragment:fx,bumpmap_pars_fragment:dx,clipping_planes_fragment:px,clipping_planes_pars_fragment:mx,clipping_planes_pars_vertex:gx,clipping_planes_vertex:xx,color_fragment:yx,color_pars_fragment:_x,color_pars_vertex:vx,color_vertex:Mx,common:Sx,cube_uv_reflection_fragment:bx,defaultnormal_vertex:Tx,displacementmap_pars_vertex:wx,displacementmap_vertex:Ex,emissivemap_fragment:Ax,emissivemap_pars_fragment:Rx,colorspace_fragment:Cx,colorspace_pars_fragment:Px,envmap_fragment:Ix,envmap_common_pars_fragment:Lx,envmap_pars_fragment:Dx,envmap_pars_vertex:Nx,envmap_physical_pars_fragment:Xx,envmap_vertex:Ux,fog_vertex:Ox,fog_pars_vertex:Fx,fog_fragment:kx,fog_pars_fragment:Bx,gradientmap_pars_fragment:zx,lightmap_pars_fragment:Hx,lights_lambert_fragment:Vx,lights_lambert_pars_fragment:Gx,lights_pars_begin:Wx,lights_toon_fragment:qx,lights_toon_pars_fragment:Yx,lights_phong_fragment:Kx,lights_phong_pars_fragment:Zx,lights_physical_fragment:$x,lights_physical_pars_fragment:Jx,lights_fragment_begin:jx,lights_fragment_maps:Qx,lights_fragment_end:ey,logdepthbuf_fragment:ty,logdepthbuf_pars_fragment:ny,logdepthbuf_pars_vertex:iy,logdepthbuf_vertex:sy,map_fragment:ry,map_pars_fragment:oy,map_particle_fragment:ay,map_particle_pars_fragment:ly,metalnessmap_fragment:cy,metalnessmap_pars_fragment:hy,morphinstance_vertex:uy,morphcolor_vertex:fy,morphnormal_vertex:dy,morphtarget_pars_vertex:py,morphtarget_vertex:my,normal_fragment_begin:gy,normal_fragment_maps:xy,normal_pars_fragment:yy,normal_pars_vertex:_y,normal_vertex:vy,normalmap_pars_fragment:My,clearcoat_normal_fragment_begin:Sy,clearcoat_normal_fragment_maps:by,clearcoat_pars_fragment:Ty,iridescence_pars_fragment:wy,opaque_fragment:Ey,packing:Ay,premultiplied_alpha_fragment:Ry,project_vertex:Cy,dithering_fragment:Py,dithering_pars_fragment:Iy,roughnessmap_fragment:Ly,roughnessmap_pars_fragment:Dy,shadowmap_pars_fragment:Ny,shadowmap_pars_vertex:Uy,shadowmap_vertex:Oy,shadowmask_pars_fragment:Fy,skinbase_vertex:ky,skinning_pars_vertex:By,skinning_vertex:zy,skinnormal_vertex:Hy,specularmap_fragment:Vy,specularmap_pars_fragment:Gy,tonemapping_fragment:Wy,tonemapping_pars_fragment:Xy,transmission_fragment:qy,transmission_pars_fragment:Yy,uv_pars_fragment:Ky,uv_pars_vertex:Zy,uv_vertex:$y,worldpos_vertex:Jy,background_vert:jy,background_frag:Qy,backgroundCube_vert:e_,backgroundCube_frag:t_,cube_vert:n_,cube_frag:i_,depth_vert:s_,depth_frag:r_,distanceRGBA_vert:o_,distanceRGBA_frag:a_,equirect_vert:l_,equirect_frag:c_,linedashed_vert:h_,linedashed_frag:u_,meshbasic_vert:f_,meshbasic_frag:d_,meshlambert_vert:p_,meshlambert_frag:m_,meshmatcap_vert:g_,meshmatcap_frag:x_,meshnormal_vert:y_,meshnormal_frag:__,meshphong_vert:v_,meshphong_frag:M_,meshphysical_vert:S_,meshphysical_frag:b_,meshtoon_vert:T_,meshtoon_frag:w_,points_vert:E_,points_frag:A_,shadow_vert:R_,shadow_frag:C_,sprite_vert:P_,sprite_frag:I_},re={common:{diffuse:{value:new ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new ce(16777215)},opacity:{value:1},center:{value:new te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},xi={basic:{uniforms:En([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:En([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new ce(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:En([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new ce(0)},specular:{value:new ce(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:En([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:En([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new ce(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:En([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:En([re.points,re.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:En([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:En([re.common,re.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:En([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:En([re.sprite,re.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:En([re.common,re.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:En([re.lights,re.fog,{color:{value:new ce(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};xi.physical={uniforms:En([xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new ce(0)},specularColor:{value:new ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};var Da={r:0,b:0,g:0},Cs=new $n,L_=new Ee;function D_(s,e,t,n,i,r,o){let a=new ce(0),l=r===!0?0:1,c,h,u=null,f=0,d=null;function g(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?t:e).get(y)),y}function x(v){let y=!1,M=g(v);M===null?m(a,l):M&&M.isColor&&(m(M,1),y=!0);let P=s.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function p(v,y){let M=g(y);M&&(M.isCubeTexture||M.mapping===Ol)?(h===void 0&&(h=new Ie(new di(1,1,1),new Nt({name:"BackgroundCubeMaterial",uniforms:Nr(xi.backgroundCube.uniforms),vertexShader:xi.backgroundCube.vertexShader,fragmentShader:xi.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,A,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Cs.copy(y.backgroundRotation),Cs.x*=-1,Cs.y*=-1,Cs.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Cs.y*=-1,Cs.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(L_.makeRotationFromEuler(Cs)),h.material.toneMapped=et.getTransfer(M.colorSpace)!==Rt,(u!==M||f!==M.version||d!==s.toneMapping)&&(h.material.needsUpdate=!0,u=M,f=M.version,d=s.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Ie(new xn(2,2),new Nt({name:"BackgroundMaterial",uniforms:Nr(xi.background.uniforms),vertexShader:xi.background.vertexShader,fragmentShader:xi.background.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=et.getTransfer(M.colorSpace)!==Rt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||f!==M.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,u=M,f=M.version,d=s.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function m(v,y){v.getRGB(Da,um(s)),n.buffers.color.setClear(Da.r,Da.g,Da.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(v,y=1){a.set(v),l=y,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,m(a,l)},render:x,addToRenderList:p}}function N_(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null),r=i,o=!1;function a(_,b,O,k,G){let q=!1,z=u(k,O,b);r!==z&&(r=z,c(r.object)),q=d(_,k,O,G),q&&g(_,k,O,G),G!==null&&e.update(G,s.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,M(_,b,O,k),G!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return s.createVertexArray()}function c(_){return s.bindVertexArray(_)}function h(_){return s.deleteVertexArray(_)}function u(_,b,O){let k=O.wireframe===!0,G=n[_.id];G===void 0&&(G={},n[_.id]=G);let q=G[b.id];q===void 0&&(q={},G[b.id]=q);let z=q[k];return z===void 0&&(z=f(l()),q[k]=z),z}function f(_){let b=[],O=[],k=[];for(let G=0;G<t;G++)b[G]=0,O[G]=0,k[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:O,attributeDivisors:k,object:_,attributes:{},index:null}}function d(_,b,O,k){let G=r.attributes,q=b.attributes,z=0,j=O.getAttributes();for(let W in j)if(j[W].location>=0){let le=G[W],ge=q[W];if(ge===void 0&&(W==="instanceMatrix"&&_.instanceMatrix&&(ge=_.instanceMatrix),W==="instanceColor"&&_.instanceColor&&(ge=_.instanceColor)),le===void 0||le.attribute!==ge||ge&&le.data!==ge.data)return!0;z++}return r.attributesNum!==z||r.index!==k}function g(_,b,O,k){let G={},q=b.attributes,z=0,j=O.getAttributes();for(let W in j)if(j[W].location>=0){let le=q[W];le===void 0&&(W==="instanceMatrix"&&_.instanceMatrix&&(le=_.instanceMatrix),W==="instanceColor"&&_.instanceColor&&(le=_.instanceColor));let ge={};ge.attribute=le,le&&le.data&&(ge.data=le.data),G[W]=ge,z++}r.attributes=G,r.attributesNum=z,r.index=k}function x(){let _=r.newAttributes;for(let b=0,O=_.length;b<O;b++)_[b]=0}function p(_){m(_,0)}function m(_,b){let O=r.newAttributes,k=r.enabledAttributes,G=r.attributeDivisors;O[_]=1,k[_]===0&&(s.enableVertexAttribArray(_),k[_]=1),G[_]!==b&&(s.vertexAttribDivisor(_,b),G[_]=b)}function v(){let _=r.newAttributes,b=r.enabledAttributes;for(let O=0,k=b.length;O<k;O++)b[O]!==_[O]&&(s.disableVertexAttribArray(O),b[O]=0)}function y(_,b,O,k,G,q,z){z===!0?s.vertexAttribIPointer(_,b,O,G,q):s.vertexAttribPointer(_,b,O,k,G,q)}function M(_,b,O,k){x();let G=k.attributes,q=O.getAttributes(),z=b.defaultAttributeValues;for(let j in q){let W=q[j];if(W.location>=0){let ie=G[j];if(ie===void 0&&(j==="instanceMatrix"&&_.instanceMatrix&&(ie=_.instanceMatrix),j==="instanceColor"&&_.instanceColor&&(ie=_.instanceColor)),ie!==void 0){let le=ie.normalized,ge=ie.itemSize,Ze=e.get(ie);if(Ze===void 0)continue;let rt=Ze.buffer,Y=Ze.type,Q=Ze.bytesPerElement,xe=Y===s.INT||Y===s.UNSIGNED_INT||ie.gpuType===$u;if(ie.isInterleavedBufferAttribute){let oe=ie.data,Pe=oe.stride,be=ie.offset;if(oe.isInstancedInterleavedBuffer){for(let Ge=0;Ge<W.locationSize;Ge++)m(W.location+Ge,oe.meshPerAttribute);_.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Ge=0;Ge<W.locationSize;Ge++)p(W.location+Ge);s.bindBuffer(s.ARRAY_BUFFER,rt);for(let Ge=0;Ge<W.locationSize;Ge++)y(W.location+Ge,ge/W.locationSize,Y,le,Pe*Q,(be+ge/W.locationSize*Ge)*Q,xe)}else{if(ie.isInstancedBufferAttribute){for(let oe=0;oe<W.locationSize;oe++)m(W.location+oe,ie.meshPerAttribute);_.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let oe=0;oe<W.locationSize;oe++)p(W.location+oe);s.bindBuffer(s.ARRAY_BUFFER,rt);for(let oe=0;oe<W.locationSize;oe++)y(W.location+oe,ge/W.locationSize,Y,le,ge*Q,ge/W.locationSize*oe*Q,xe)}}else if(z!==void 0){let le=z[j];if(le!==void 0)switch(le.length){case 2:s.vertexAttrib2fv(W.location,le);break;case 3:s.vertexAttrib3fv(W.location,le);break;case 4:s.vertexAttrib4fv(W.location,le);break;default:s.vertexAttrib1fv(W.location,le)}}}}v()}function P(){I();for(let _ in n){let b=n[_];for(let O in b){let k=b[O];for(let G in k)h(k[G].object),delete k[G];delete b[O]}delete n[_]}}function A(_){if(n[_.id]===void 0)return;let b=n[_.id];for(let O in b){let k=b[O];for(let G in k)h(k[G].object),delete k[G];delete b[O]}delete n[_.id]}function E(_){for(let b in n){let O=n[b];if(O[_.id]===void 0)continue;let k=O[_.id];for(let G in k)h(k[G].object),delete k[G];delete O[_.id]}}function I(){F(),o=!0,r!==i&&(r=i,c(r.object))}function F(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:I,resetDefaultState:F,dispose:P,releaseStatesOfGeometry:A,releaseStatesOfProgram:E,initAttributes:x,enableAttribute:p,disableUnusedAttributes:v}}function U_(s,e,t){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];t.update(d,n,1)}function l(c,h,u,f){if(u===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x];for(let x=0;x<f.length;x++)t.update(g,n,f[x])}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function O_(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let E=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(E){return!(E!==Nn&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){let I=E===yn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==fi&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==hi&&!I)}function l(E){if(E==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(f===!0){let E=e.get("EXT_clip_control");E.clipControlEXT(E.LOWER_LEFT_EXT,E.ZERO_TO_ONE_EXT)}let d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,A=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:M,vertexTextures:P,maxSamples:A}}function F_(s){let e=this,t=null,n=0,i=!1,r=!1,o=new Ii,a=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,x=u.clipIntersection,p=u.clipShadows,m=s.get(u);if(!i||g===null||g.length===0||r&&!p)r?h(null):c();else{let v=r?0:n,y=v*4,M=m.clippingState||null;l.value=M,M=h(g,f,y,d);for(let P=0;P!==y;++P)M[P]=t[P];m.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,g){let x=u!==null?u.length:0,p=null;if(x!==0){if(p=l.value,g!==!0||p===null){let m=d+x*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<m)&&(p=new Float32Array(m));for(let y=0,M=d;y!==x;++y,M+=4)o.copy(u[y]).applyMatrix4(v,a),o.normal.toArray(p,M),p[M+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function k_(s){let e=new WeakMap;function t(o,a){return a===Ph?o.mapping=Rr:a===Ih&&(o.mapping=Cr),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Ph||a===Ih)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new cu(l.height);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var rs=class extends hl{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},br=4,np=[.125,.215,.35,.446,.526,.582],Ls=20,oh=new rs,ip=new ce,ah=null,lh=0,ch=0,hh=!1,Is=(1+Math.sqrt(5))/2,pr=1/Is,sp=[new R(-Is,pr,0),new R(Is,pr,0),new R(-pr,0,Is),new R(pr,0,Is),new R(0,Is,-pr),new R(0,Is,pr),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)],Ur=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){ah=this._renderer.getRenderTarget(),lh=this._renderer.getActiveCubeFace(),ch=this._renderer.getActiveMipmapLevel(),hh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ap(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=op(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ah,lh,ch),this._renderer.xr.enabled=hh,e.scissorTest=!1,Na(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Rr||e.mapping===Cr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ah=this._renderer.getRenderTarget(),lh=this._renderer.getActiveCubeFace(),ch=this._renderer.getActiveMipmapLevel(),hh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Dn,minFilter:Dn,generateMipmaps:!1,type:yn,format:Nn,colorSpace:Zt,depthBuffer:!1},i=rp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rp(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=B_(r)),this._blurMaterial=z_(r,e,t)}return i}_compileMaterial(e){let t=new Ie(this._lodPlanes[0],e);this._renderer.compile(t,oh)}_sceneToCubeUV(e,t,n,i){let a=new jt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(ip),h.toneMapping=ns,h.autoClear=!1;let d=new Et({name:"PMREM.Background",side:gn,depthWrite:!1,depthTest:!1}),g=new Ie(new di,d),x=!1,p=e.background;p?p.isColor&&(d.color.copy(p),e.background=null,x=!0):(d.color.copy(ip),x=!0);for(let m=0;m<6;m++){let v=m%3;v===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):v===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));let y=this._cubeSize;Na(i,v*y,m>2?y:0,y,y),h.setRenderTarget(i),x&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=p}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Rr||e.mapping===Cr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ap()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=op());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new Ie(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Na(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,oh)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=sp[(i-r-1)%sp.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Ie(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Ls-1),x=r/g,p=isFinite(r)?1+Math.floor(h*x):Ls;p>Ls&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ls}`);let m=[],v=0;for(let E=0;E<Ls;++E){let I=E/x,F=Math.exp(-I*I/2);m.push(F),E===0?v+=F:E<p&&(v+=2*F)}for(let E=0;E<m.length;E++)m[E]=m[E]/v;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-n;let M=this._sizeLods[i],P=3*M*(i>y-br?i-y+br:0),A=4*(this._cubeSize-M);Na(t,P,A,3*M,2*M),l.setRenderTarget(t),l.render(u,oh)}};function B_(s){let e=[],t=[],n=[],i=s,r=s-br+1+np.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);t.push(a);let l=1/a;o>s-br?l=np[o-s+br-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,x=3,p=2,m=1,v=new Float32Array(x*g*d),y=new Float32Array(p*g*d),M=new Float32Array(m*g*d);for(let A=0;A<d;A++){let E=A%3*2/3-1,I=A>2?0:-1,F=[E,I,0,E+2/3,I,0,E+2/3,I+1,0,E,I,0,E+2/3,I+1,0,E,I+1,0];v.set(F,x*g*A),y.set(f,p*g*A);let _=[A,A,A,A,A,A];M.set(_,m*g*A)}let P=new Tt;P.setAttribute("position",new Ft(v,x)),P.setAttribute("uv",new Ft(y,p)),P.setAttribute("faceIndex",new Ft(M,m)),e.push(P),i>br&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function rp(s,e,t){let n=new Yt(s,e,t);return n.texture.mapping=Ol,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Na(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function z_(s,e,t){let n=new Float32Array(Ls),i=new R(0,1,0);return new Nt({name:"SphericalGaussianBlur",defines:{n:Ls,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:cf(),fragmentShader:`

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
		`,blending:en,depthTest:!1,depthWrite:!1})}function op(){return new Nt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cf(),fragmentShader:`

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
		`,blending:en,depthTest:!1,depthWrite:!1})}function ap(){return new Nt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:en,depthTest:!1,depthWrite:!1})}function cf(){return`

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
	`}function H_(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Ph||l===Ih,h=l===Rr||l===Cr;if(c||h){let u=e.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Ur(s)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let d=a.image;return c&&d&&d.height>0||h&&d&&i(d)?(t===null&&(t=new Ur(s)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function V_(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&Qa("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function G_(s,e,t,n){let i={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);for(let g in f.morphAttributes){let x=f.morphAttributes[g];for(let p=0,m=x.length;p<m;p++)e.remove(x[p])}f.removeEventListener("dispose",o),delete i[f.id];let d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(u){let f=u.attributes;for(let g in f)e.update(f[g],s.ARRAY_BUFFER);let d=u.morphAttributes;for(let g in d){let x=d[g];for(let p=0,m=x.length;p<m;p++)e.update(x[p],s.ARRAY_BUFFER)}}function c(u){let f=[],d=u.index,g=u.attributes.position,x=0;if(d!==null){let v=d.array;x=d.version;for(let y=0,M=v.length;y<M;y+=3){let P=v[y+0],A=v[y+1],E=v[y+2];f.push(P,A,A,E,E,P)}}else if(g!==void 0){let v=g.array;x=g.version;for(let y=0,M=v.length/3-1;y<M;y+=3){let P=y+0,A=y+1,E=y+2;f.push(P,A,A,E,E,P)}}else return;let p=new(cm(f)?cl:ll)(f,1);p.version=x;let m=r.get(u);m&&e.remove(m),r.set(u,p)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function W_(s,e,t){let n;function i(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){s.drawElements(n,d,r,f*o),t.update(d,n,1)}function c(f,d,g){g!==0&&(s.drawElementsInstanced(n,d,r,f*o,g),t.update(d,n,g))}function h(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,g);let p=0;for(let m=0;m<g;m++)p+=d[m];t.update(p,n,1)}function u(f,d,g,x){if(g===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<f.length;m++)c(f[m]/o,d[m],x[m]);else{p.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,x,0,g);let m=0;for(let v=0;v<g;v++)m+=d[v];for(let v=0;v<x.length;v++)t.update(m,n,x[v])}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function X_(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function q_(s,e,t){let n=new WeakMap,i=new pt;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let F=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",F)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],y=0;d===!0&&(y=1),g===!0&&(y=2),x===!0&&(y=3);let M=a.attributes.position.count*y,P=1;M>e.maxTextureSize&&(P=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let A=new Float32Array(M*P*4*u),E=new ol(A,M,P,u);E.type=hi,E.needsUpdate=!0;let I=y*4;for(let _=0;_<u;_++){let b=p[_],O=m[_],k=v[_],G=M*P*4*_;for(let q=0;q<b.count;q++){let z=q*I;d===!0&&(i.fromBufferAttribute(b,q),A[G+z+0]=i.x,A[G+z+1]=i.y,A[G+z+2]=i.z,A[G+z+3]=0),g===!0&&(i.fromBufferAttribute(O,q),A[G+z+4]=i.x,A[G+z+5]=i.y,A[G+z+6]=i.z,A[G+z+7]=0),x===!0&&(i.fromBufferAttribute(k,q),A[G+z+8]=i.x,A[G+z+9]=i.y,A[G+z+10]=i.z,A[G+z+11]=k.itemSize===4?i.w:1)}}f={count:u,texture:E,size:new te(M,P)},n.set(a,f),a.addEventListener("dispose",F)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function Y_(s,e,t,n){let i=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return u}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var os=class extends hn{constructor(e,t,n,i,r,o,a,l,c,h=Tr){if(h!==Tr&&h!==ss)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Tr&&(n=Ds),n===void 0&&h===ss&&(n=is),super(null,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Qt,this.minFilter=l!==void 0?l:Qt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},dm=new hn,lp=new os(1,1),pm=new ol,mm=new au,gm=new ul,cp=[],hp=[],up=new Float32Array(16),fp=new Float32Array(9),dp=new Float32Array(4);function Gr(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=cp[i];if(r===void 0&&(r=new Float32Array(i),cp[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function tn(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function nn(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Bl(s,e){let t=hp[e];t===void 0&&(t=new Int32Array(e),hp[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function K_(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Z_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;s.uniform2fv(this.addr,e),nn(t,e)}}function $_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(tn(t,e))return;s.uniform3fv(this.addr,e),nn(t,e)}}function J_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;s.uniform4fv(this.addr,e),nn(t,e)}}function j_(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;dp.set(n),s.uniformMatrix2fv(this.addr,!1,dp),nn(t,n)}}function Q_(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;fp.set(n),s.uniformMatrix3fv(this.addr,!1,fp),nn(t,n)}}function ev(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;up.set(n),s.uniformMatrix4fv(this.addr,!1,up),nn(t,n)}}function tv(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function nv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;s.uniform2iv(this.addr,e),nn(t,e)}}function iv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;s.uniform3iv(this.addr,e),nn(t,e)}}function sv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;s.uniform4iv(this.addr,e),nn(t,e)}}function rv(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function ov(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;s.uniform2uiv(this.addr,e),nn(t,e)}}function av(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;s.uniform3uiv(this.addr,e),nn(t,e)}}function lv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;s.uniform4uiv(this.addr,e),nn(t,e)}}function cv(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(lp.compareFunction=am,r=lp):r=dm,t.setTexture2D(e||r,i)}function hv(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||mm,i)}function uv(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||gm,i)}function fv(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||pm,i)}function dv(s){switch(s){case 5126:return K_;case 35664:return Z_;case 35665:return $_;case 35666:return J_;case 35674:return j_;case 35675:return Q_;case 35676:return ev;case 5124:case 35670:return tv;case 35667:case 35671:return nv;case 35668:case 35672:return iv;case 35669:case 35673:return sv;case 5125:return rv;case 36294:return ov;case 36295:return av;case 36296:return lv;case 35678:case 36198:case 36298:case 36306:case 35682:return cv;case 35679:case 36299:case 36307:return hv;case 35680:case 36300:case 36308:case 36293:return uv;case 36289:case 36303:case 36311:case 36292:return fv}}function pv(s,e){s.uniform1fv(this.addr,e)}function mv(s,e){let t=Gr(e,this.size,2);s.uniform2fv(this.addr,t)}function gv(s,e){let t=Gr(e,this.size,3);s.uniform3fv(this.addr,t)}function xv(s,e){let t=Gr(e,this.size,4);s.uniform4fv(this.addr,t)}function yv(s,e){let t=Gr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function _v(s,e){let t=Gr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function vv(s,e){let t=Gr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Mv(s,e){s.uniform1iv(this.addr,e)}function Sv(s,e){s.uniform2iv(this.addr,e)}function bv(s,e){s.uniform3iv(this.addr,e)}function Tv(s,e){s.uniform4iv(this.addr,e)}function wv(s,e){s.uniform1uiv(this.addr,e)}function Ev(s,e){s.uniform2uiv(this.addr,e)}function Av(s,e){s.uniform3uiv(this.addr,e)}function Rv(s,e){s.uniform4uiv(this.addr,e)}function Cv(s,e,t){let n=this.cache,i=e.length,r=Bl(t,i);tn(n,r)||(s.uniform1iv(this.addr,r),nn(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||dm,r[o])}function Pv(s,e,t){let n=this.cache,i=e.length,r=Bl(t,i);tn(n,r)||(s.uniform1iv(this.addr,r),nn(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||mm,r[o])}function Iv(s,e,t){let n=this.cache,i=e.length,r=Bl(t,i);tn(n,r)||(s.uniform1iv(this.addr,r),nn(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||gm,r[o])}function Lv(s,e,t){let n=this.cache,i=e.length,r=Bl(t,i);tn(n,r)||(s.uniform1iv(this.addr,r),nn(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||pm,r[o])}function Dv(s){switch(s){case 5126:return pv;case 35664:return mv;case 35665:return gv;case 35666:return xv;case 35674:return yv;case 35675:return _v;case 35676:return vv;case 5124:case 35670:return Mv;case 35667:case 35671:return Sv;case 35668:case 35672:return bv;case 35669:case 35673:return Tv;case 5125:return wv;case 36294:return Ev;case 36295:return Av;case 36296:return Rv;case 35678:case 36198:case 36298:case 36306:case 35682:return Cv;case 35679:case 36299:case 36307:return Pv;case 35680:case 36300:case 36308:case 36293:return Iv;case 36289:case 36303:case 36311:case 36292:return Lv}}var hu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=dv(t.type)}},uu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Dv(t.type)}},fu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(e,t[a.id],n)}}},uh=/(\w+)(\])?(\[|\.)?/g;function pp(s,e){s.seq.push(e),s.map[e.id]=e}function Nv(s,e,t){let n=s.name,i=n.length;for(uh.lastIndex=0;;){let r=uh.exec(n),o=uh.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){pp(t,c===void 0?new hu(a,s,e):new uu(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new fu(a),pp(t,u)),t=u}}}var Er=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);Nv(r,o,this)}}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let o=e[i];o.id in t&&n.push(o)}return n}};function mp(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var Uv=37297,Ov=0;function Fv(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function kv(s){let e=et.getPrimaries(et.workingColorSpace),t=et.getPrimaries(s),n;switch(e===t?n="":e===il&&t===nl?n="LinearDisplayP3ToLinearSRGB":e===nl&&t===il&&(n="LinearSRGBToLinearDisplayP3"),s){case Zt:case kl:return[n,"LinearTransferOETF"];case wt:case af:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function gp(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Fv(s.getShaderSource(e),o)}else return i}function Bv(s,e){let t=kv(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function zv(s,e){let t;switch(e){case Wu:t="Linear";break;case Xu:t="Reinhard";break;case qu:t="Cineon";break;case Oo:t="ACESFilmic";break;case Yu:t="AgX";break;case Ku:t="Neutral";break;case Q0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ua=new R;function Hv(){et.getLuminanceCoefficients(Ua);let s=Ua.x.toFixed(4),e=Ua.y.toFixed(4),t=Ua.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Vv(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(mo).join(`
`)}function Gv(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Wv(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function mo(s){return s!==""}function xp(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function yp(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Xv=/^[ \t]*#include +<([\w\d./]+)>/gm;function du(s){return s.replace(Xv,Yv)}var qv=new Map;function Yv(s,e){let t=Xe[e];if(t===void 0){let n=qv.get(e);if(n!==void 0)t=Xe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return du(t)}var Kv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _p(s){return s.replace(Kv,Zv)}function Zv(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function vp(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function $v(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Kp?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Vu?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Pi&&(e="SHADOWMAP_TYPE_VSM"),e}function Jv(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Rr:case Cr:e="ENVMAP_TYPE_CUBE";break;case Ol:e="ENVMAP_TYPE_CUBE_UV";break}return e}function jv(s){let e="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===Cr&&(e="ENVMAP_MODE_REFRACTION"),e}function Qv(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Zp:e="ENVMAP_BLENDING_MULTIPLY";break;case J0:e="ENVMAP_BLENDING_MIX";break;case j0:e="ENVMAP_BLENDING_ADD";break}return e}function e1(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function t1(s,e,t,n){let i=s.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=$v(t),c=Jv(t),h=jv(t),u=Qv(t),f=e1(t),d=Vv(t),g=Gv(r),x=i.createProgram(),p,m,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(mo).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(mo).join(`
`),m.length>0&&(m+=`
`)):(p=[vp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(mo).join(`
`),m=[vp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ns?"#define TONE_MAPPING":"",t.toneMapping!==ns?Xe.tonemapping_pars_fragment:"",t.toneMapping!==ns?zv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,Bv("linearToOutputTexel",t.outputColorSpace),Hv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(mo).join(`
`)),o=du(o),o=xp(o,t),o=yp(o,t),a=du(a),a=xp(a,t),a=yp(a,t),o=_p(o),a=_p(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===Fd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Fd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let y=v+p+o,M=v+m+a,P=mp(i,i.VERTEX_SHADER,y),A=mp(i,i.FRAGMENT_SHADER,M);i.attachShader(x,P),i.attachShader(x,A),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function E(b){if(s.debug.checkShaderErrors){let O=i.getProgramInfoLog(x).trim(),k=i.getShaderInfoLog(P).trim(),G=i.getShaderInfoLog(A).trim(),q=!0,z=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,P,A);else{let j=gp(i,P,"vertex"),W=gp(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+O+`
`+j+`
`+W)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(k===""||G==="")&&(z=!1);z&&(b.diagnostics={runnable:q,programLog:O,vertexShader:{log:k,prefix:p},fragmentShader:{log:G,prefix:m}})}i.deleteShader(P),i.deleteShader(A),I=new Er(i,x),F=Wv(i,x)}let I;this.getUniforms=function(){return I===void 0&&E(this),I};let F;this.getAttributes=function(){return F===void 0&&E(this),F};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=i.getProgramParameter(x,Uv)),_},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ov++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=P,this.fragmentShader=A,this}var n1=0,pu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new mu(e),t.set(e,n)),n}},mu=class{constructor(e){this.id=n1++,this.code=e,this.usedTimes=0}};function i1(s,e,t,n,i,r,o){let a=new al,l=new pu,c=new Set,h=[],u=i.logarithmicDepthBuffer,f=i.reverseDepthBuffer,d=i.vertexTextures,g=i.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return c.add(_),_===0?"uv":`uv${_}`}function m(_,b,O,k,G){let q=k.fog,z=G.geometry,j=_.isMeshStandardMaterial?k.environment:null,W=(_.isMeshStandardMaterial?t:e).get(_.envMap||j),ie=W&&W.mapping===Ol?W.image.height:null,le=x[_.type];_.precision!==null&&(g=i.getMaxPrecision(_.precision),g!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",g,"instead."));let ge=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Ze=ge!==void 0?ge.length:0,rt=0;z.morphAttributes.position!==void 0&&(rt=1),z.morphAttributes.normal!==void 0&&(rt=2),z.morphAttributes.color!==void 0&&(rt=3);let Y,Q,xe,oe;if(le){let Ln=xi[le];Y=Ln.vertexShader,Q=Ln.fragmentShader}else Y=_.vertexShader,Q=_.fragmentShader,l.update(_),xe=l.getVertexShaderID(_),oe=l.getFragmentShaderID(_);let Pe=s.getRenderTarget(),be=G.isInstancedMesh===!0,Ge=G.isBatchedMesh===!0,ft=!!_.map,Qe=!!_.matcap,L=!!W,fn=!!_.aoMap,$e=!!_.lightMap,nt=!!_.bumpMap,Ne=!!_.normalMap,vt=!!_.displacementMap,Ue=!!_.emissiveMap,C=!!_.metalnessMap,S=!!_.roughnessMap,B=_.anisotropy>0,Z=_.clearcoat>0,J=_.dispersion>0,K=_.iridescence>0,ve=_.sheen>0,se=_.transmission>0,ue=B&&!!_.anisotropyMap,Je=Z&&!!_.clearcoatMap,ee=Z&&!!_.clearcoatNormalMap,fe=Z&&!!_.clearcoatRoughnessMap,Oe=K&&!!_.iridescenceMap,Fe=K&&!!_.iridescenceThicknessMap,ye=ve&&!!_.sheenColorMap,it=ve&&!!_.sheenRoughnessMap,ze=!!_.specularMap,ht=!!_.specularColorMap,D=!!_.specularIntensityMap,ae=se&&!!_.transmissionMap,X=se&&!!_.thicknessMap,$=!!_.gradientMap,de=!!_.alphaMap,me=_.alphaTest>0,lt=!!_.alphaHash,Xt=!!_.extensions,In=ns;_.toneMapped&&(Pe===null||Pe.isXRRenderTarget===!0)&&(In=s.toneMapping);let dt={shaderID:le,shaderType:_.type,shaderName:_.name,vertexShader:Y,fragmentShader:Q,defines:_.defines,customVertexShaderID:xe,customFragmentShaderID:oe,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:g,batching:Ge,batchingColor:Ge&&G._colorsTexture!==null,instancing:be,instancingColor:be&&G.instanceColor!==null,instancingMorph:be&&G.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Pe===null?s.outputColorSpace:Pe.isXRRenderTarget===!0?Pe.texture.colorSpace:Zt,alphaToCoverage:!!_.alphaToCoverage,map:ft,matcap:Qe,envMap:L,envMapMode:L&&W.mapping,envMapCubeUVHeight:ie,aoMap:fn,lightMap:$e,bumpMap:nt,normalMap:Ne,displacementMap:d&&vt,emissiveMap:Ue,normalMapObjectSpace:Ne&&_.normalMapType===og,normalMapTangentSpace:Ne&&_.normalMapType===of,metalnessMap:C,roughnessMap:S,anisotropy:B,anisotropyMap:ue,clearcoat:Z,clearcoatMap:Je,clearcoatNormalMap:ee,clearcoatRoughnessMap:fe,dispersion:J,iridescence:K,iridescenceMap:Oe,iridescenceThicknessMap:Fe,sheen:ve,sheenColorMap:ye,sheenRoughnessMap:it,specularMap:ze,specularColorMap:ht,specularIntensityMap:D,transmission:se,transmissionMap:ae,thicknessMap:X,gradientMap:$,opaque:_.transparent===!1&&_.blending===Ni&&_.alphaToCoverage===!1,alphaMap:de,alphaTest:me,alphaHash:lt,combine:_.combine,mapUv:ft&&p(_.map.channel),aoMapUv:fn&&p(_.aoMap.channel),lightMapUv:$e&&p(_.lightMap.channel),bumpMapUv:nt&&p(_.bumpMap.channel),normalMapUv:Ne&&p(_.normalMap.channel),displacementMapUv:vt&&p(_.displacementMap.channel),emissiveMapUv:Ue&&p(_.emissiveMap.channel),metalnessMapUv:C&&p(_.metalnessMap.channel),roughnessMapUv:S&&p(_.roughnessMap.channel),anisotropyMapUv:ue&&p(_.anisotropyMap.channel),clearcoatMapUv:Je&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:ee&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:Fe&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:it&&p(_.sheenRoughnessMap.channel),specularMapUv:ze&&p(_.specularMap.channel),specularColorMapUv:ht&&p(_.specularColorMap.channel),specularIntensityMapUv:D&&p(_.specularIntensityMap.channel),transmissionMapUv:ae&&p(_.transmissionMap.channel),thicknessMapUv:X&&p(_.thicknessMap.channel),alphaMapUv:de&&p(_.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Ne||B),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!z.attributes.uv&&(ft||de),fog:!!q,useFog:_.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:f,skinning:G.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Ze,morphTextureStride:rt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&O.length>0,shadowMapType:s.shadowMap.type,toneMapping:In,decodeVideoTexture:ft&&_.map.isVideoTexture===!0&&et.getTransfer(_.map.colorSpace)===Rt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Pt,flipSided:_.side===gn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Xt&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xt&&_.extensions.multiDraw===!0||Ge)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return dt.vertexUv1s=c.has(1),dt.vertexUv2s=c.has(2),dt.vertexUv3s=c.has(3),c.clear(),dt}function v(_){let b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(let O in _.defines)b.push(O),b.push(_.defines[O]);return _.isRawShaderMaterial===!1&&(y(b,_),M(b,_),b.push(s.outputColorSpace)),b.push(_.customProgramCacheKey),b.join()}function y(_,b){_.push(b.precision),_.push(b.outputColorSpace),_.push(b.envMapMode),_.push(b.envMapCubeUVHeight),_.push(b.mapUv),_.push(b.alphaMapUv),_.push(b.lightMapUv),_.push(b.aoMapUv),_.push(b.bumpMapUv),_.push(b.normalMapUv),_.push(b.displacementMapUv),_.push(b.emissiveMapUv),_.push(b.metalnessMapUv),_.push(b.roughnessMapUv),_.push(b.anisotropyMapUv),_.push(b.clearcoatMapUv),_.push(b.clearcoatNormalMapUv),_.push(b.clearcoatRoughnessMapUv),_.push(b.iridescenceMapUv),_.push(b.iridescenceThicknessMapUv),_.push(b.sheenColorMapUv),_.push(b.sheenRoughnessMapUv),_.push(b.specularMapUv),_.push(b.specularColorMapUv),_.push(b.specularIntensityMapUv),_.push(b.transmissionMapUv),_.push(b.thicknessMapUv),_.push(b.combine),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.morphAttributeCount),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numSpotLightMaps),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.numSpotLightShadowsWithMaps),_.push(b.numLightProbes),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function M(_,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),_.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.alphaToCoverage&&a.enable(20),_.push(a.mask)}function P(_){let b=x[_.type],O;if(b){let k=xi[b];O=Un.clone(k.uniforms)}else O=_.uniforms;return O}function A(_,b){let O;for(let k=0,G=h.length;k<G;k++){let q=h[k];if(q.cacheKey===b){O=q,++O.usedTimes;break}}return O===void 0&&(O=new t1(s,b,_,r),h.push(O)),O}function E(_){if(--_.usedTimes===0){let b=h.indexOf(_);h[b]=h[h.length-1],h.pop(),_.destroy()}}function I(_){l.remove(_)}function F(){l.dispose()}return{getParameters:m,getProgramCacheKey:v,getUniforms:P,acquireProgram:A,releaseProgram:E,releaseShaderCache:I,programs:h,dispose:F}}function s1(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function r1(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Mp(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Sp(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(u,f,d,g,x,p){let m=s[e];return m===void 0?(m={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:x,group:p},s[e]=m):(m.id=u.id,m.object=u,m.geometry=f,m.material=d,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=x,m.group=p),e++,m}function a(u,f,d,g,x,p){let m=o(u,f,d,g,x,p);d.transmission>0?n.push(m):d.transparent===!0?i.push(m):t.push(m)}function l(u,f,d,g,x,p){let m=o(u,f,d,g,x,p);d.transmission>0?n.unshift(m):d.transparent===!0?i.unshift(m):t.unshift(m)}function c(u,f){t.length>1&&t.sort(u||r1),n.length>1&&n.sort(f||Mp),i.length>1&&i.sort(f||Mp)}function h(){for(let u=e,f=s.length;u<f;u++){let d=s[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function o1(){let s=new WeakMap;function e(n,i){let r=s.get(n),o;return r===void 0?(o=new Sp,s.set(n,[o])):i>=r.length?(o=new Sp,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function a1(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new ce};break;case"SpotLight":t={position:new R,direction:new R,color:new ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new ce,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new ce,groundColor:new ce};break;case"RectAreaLight":t={color:new ce,position:new R,halfWidth:new R,halfHeight:new R};break}return s[e.id]=t,t}}}function l1(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var c1=0;function h1(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function u1(s){let e=new a1,t=l1(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new R);let i=new R,r=new Ee,o=new Ee;function a(c){let h=0,u=0,f=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let d=0,g=0,x=0,p=0,m=0,v=0,y=0,M=0,P=0,A=0,E=0;c.sort(h1);for(let F=0,_=c.length;F<_;F++){let b=c[F],O=b.color,k=b.intensity,G=b.distance,q=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)h+=O.r*k,u+=O.g*k,f+=O.b*k;else if(b.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(b.sh.coefficients[z],k);E++}else if(b.isDirectionalLight){let z=e.get(b);if(z.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){let j=b.shadow,W=t.get(b);W.shadowIntensity=j.intensity,W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,n.directionalShadow[d]=W,n.directionalShadowMap[d]=q,n.directionalShadowMatrix[d]=b.shadow.matrix,v++}n.directional[d]=z,d++}else if(b.isSpotLight){let z=e.get(b);z.position.setFromMatrixPosition(b.matrixWorld),z.color.copy(O).multiplyScalar(k),z.distance=G,z.coneCos=Math.cos(b.angle),z.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),z.decay=b.decay,n.spot[x]=z;let j=b.shadow;if(b.map&&(n.spotLightMap[P]=b.map,P++,j.updateMatrices(b),b.castShadow&&A++),n.spotLightMatrix[x]=j.matrix,b.castShadow){let W=t.get(b);W.shadowIntensity=j.intensity,W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,n.spotShadow[x]=W,n.spotShadowMap[x]=q,M++}x++}else if(b.isRectAreaLight){let z=e.get(b);z.color.copy(O).multiplyScalar(k),z.halfWidth.set(b.width*.5,0,0),z.halfHeight.set(0,b.height*.5,0),n.rectArea[p]=z,p++}else if(b.isPointLight){let z=e.get(b);if(z.color.copy(b.color).multiplyScalar(b.intensity),z.distance=b.distance,z.decay=b.decay,b.castShadow){let j=b.shadow,W=t.get(b);W.shadowIntensity=j.intensity,W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,W.shadowCameraNear=j.camera.near,W.shadowCameraFar=j.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=q,n.pointShadowMatrix[g]=b.shadow.matrix,y++}n.point[g]=z,g++}else if(b.isHemisphereLight){let z=e.get(b);z.skyColor.copy(b.color).multiplyScalar(k),z.groundColor.copy(b.groundColor).multiplyScalar(k),n.hemi[m]=z,m++}}p>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=re.LTC_FLOAT_1,n.rectAreaLTC2=re.LTC_FLOAT_2):(n.rectAreaLTC1=re.LTC_HALF_1,n.rectAreaLTC2=re.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let I=n.hash;(I.directionalLength!==d||I.pointLength!==g||I.spotLength!==x||I.rectAreaLength!==p||I.hemiLength!==m||I.numDirectionalShadows!==v||I.numPointShadows!==y||I.numSpotShadows!==M||I.numSpotMaps!==P||I.numLightProbes!==E)&&(n.directional.length=d,n.spot.length=x,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=M+P-A,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=E,I.directionalLength=d,I.pointLength=g,I.spotLength=x,I.rectAreaLength=p,I.hemiLength=m,I.numDirectionalShadows=v,I.numPointShadows=y,I.numSpotShadows=M,I.numSpotMaps=P,I.numLightProbes=E,n.version=c1++)}function l(c,h){let u=0,f=0,d=0,g=0,x=0,p=h.matrixWorldInverse;for(let m=0,v=c.length;m<v;m++){let y=c[m];if(y.isDirectionalLight){let M=n.directional[u];M.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(p),u++}else if(y.isSpotLight){let M=n.spot[d];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(p),d++}else if(y.isRectAreaLight){let M=n.rectArea[g];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(p),o.identity(),r.copy(y.matrixWorld),r.premultiply(p),o.extractRotation(r),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){let M=n.point[f];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(p),f++}else if(y.isHemisphereLight){let M=n.hemi[x];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(p),x++}}}return{setup:a,setupView:l,state:n}}function bp(s){let e=new u1(s),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function f1(s){let e=new WeakMap;function t(i,r=0){let o=e.get(i),a;return o===void 0?(a=new bp(s),e.set(i,[a])):r>=o.length?(a=new bp(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var gu=class extends Cn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},xu=class extends Cn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},d1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,p1=`uniform sampler2D shadow_pass;
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
}`;function m1(s,e,t){let n=new wo,i=new te,r=new te,o=new pt,a=new gu({depthPacking:rg}),l=new xu,c={},h=t.maxTextureSize,u={[An]:gn,[gn]:An,[Pt]:Pt},f=new Nt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new te},radius:{value:4}},vertexShader:d1,fragmentShader:p1}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new Tt;g.setAttribute("position",new Ft(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Ie(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kp;let m=this.type;this.render=function(A,E,I){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;let F=s.getRenderTarget(),_=s.getActiveCubeFace(),b=s.getActiveMipmapLevel(),O=s.state;O.setBlending(en),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let k=m!==Pi&&this.type===Pi,G=m===Pi&&this.type!==Pi;for(let q=0,z=A.length;q<z;q++){let j=A[q],W=j.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);let ie=W.getFrameExtents();if(i.multiply(ie),r.copy(W.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/ie.x),i.x=r.x*ie.x,W.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/ie.y),i.y=r.y*ie.y,W.mapSize.y=r.y)),W.map===null||k===!0||G===!0){let ge=this.type!==Pi?{minFilter:Qt,magFilter:Qt}:{};W.map!==null&&W.map.dispose(),W.map=new Yt(i.x,i.y,ge),W.map.texture.name=j.name+".shadowMap",W.camera.updateProjectionMatrix()}s.setRenderTarget(W.map),s.clear();let le=W.getViewportCount();for(let ge=0;ge<le;ge++){let Ze=W.getViewport(ge);o.set(r.x*Ze.x,r.y*Ze.y,r.x*Ze.z,r.y*Ze.w),O.viewport(o),W.updateMatrices(j,ge),n=W.getFrustum(),M(E,I,W.camera,j,this.type)}W.isPointLightShadow!==!0&&this.type===Pi&&v(W,I),W.needsUpdate=!1}m=this.type,p.needsUpdate=!1,s.setRenderTarget(F,_,b)};function v(A,E){let I=e.update(x);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Yt(i.x,i.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(E,null,I,f,x,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(E,null,I,d,x,null)}function y(A,E,I,F){let _=null,b=I.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(b!==void 0)_=b;else if(_=I.isPointLight===!0?l:a,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){let O=_.uuid,k=E.uuid,G=c[O];G===void 0&&(G={},c[O]=G);let q=G[k];q===void 0&&(q=_.clone(),G[k]=q,E.addEventListener("dispose",P)),_=q}if(_.visible=E.visible,_.wireframe=E.wireframe,F===Pi?_.side=E.shadowSide!==null?E.shadowSide:E.side:_.side=E.shadowSide!==null?E.shadowSide:u[E.side],_.alphaMap=E.alphaMap,_.alphaTest=E.alphaTest,_.map=E.map,_.clipShadows=E.clipShadows,_.clippingPlanes=E.clippingPlanes,_.clipIntersection=E.clipIntersection,_.displacementMap=E.displacementMap,_.displacementScale=E.displacementScale,_.displacementBias=E.displacementBias,_.wireframeLinewidth=E.wireframeLinewidth,_.linewidth=E.linewidth,I.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let O=s.properties.get(_);O.light=I}return _}function M(A,E,I,F,_){if(A.visible===!1)return;if(A.layers.test(E.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&_===Pi)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,A.matrixWorld);let k=e.update(A),G=A.material;if(Array.isArray(G)){let q=k.groups;for(let z=0,j=q.length;z<j;z++){let W=q[z],ie=G[W.materialIndex];if(ie&&ie.visible){let le=y(A,ie,F,_);A.onBeforeShadow(s,A,E,I,k,le,W),s.renderBufferDirect(I,null,k,le,A,W),A.onAfterShadow(s,A,E,I,k,le,W)}}}else if(G.visible){let q=y(A,G,F,_);A.onBeforeShadow(s,A,E,I,k,q,null),s.renderBufferDirect(I,null,k,q,A,null),A.onAfterShadow(s,A,E,I,k,q,null)}}let O=A.children;for(let k=0,G=O.length;k<G;k++)M(O[k],E,I,F,_)}function P(A){A.target.removeEventListener("dispose",P);for(let I in c){let F=c[I],_=A.target.uuid;_ in F&&(F[_].dispose(),delete F[_])}}}var g1={[bh]:Th,[wh]:Rh,[Eh]:Ch,[Ar]:Ah,[Th]:bh,[Rh]:wh,[Ch]:Eh,[Ah]:Ar};function x1(s){function e(){let D=!1,ae=new pt,X=null,$=new pt(0,0,0,0);return{setMask:function(de){X!==de&&!D&&(s.colorMask(de,de,de,de),X=de)},setLocked:function(de){D=de},setClear:function(de,me,lt,Xt,In){In===!0&&(de*=Xt,me*=Xt,lt*=Xt),ae.set(de,me,lt,Xt),$.equals(ae)===!1&&(s.clearColor(de,me,lt,Xt),$.copy(ae))},reset:function(){D=!1,X=null,$.set(-1,0,0,0)}}}function t(){let D=!1,ae=!1,X=null,$=null,de=null;return{setReversed:function(me){ae=me},setTest:function(me){me?xe(s.DEPTH_TEST):oe(s.DEPTH_TEST)},setMask:function(me){X!==me&&!D&&(s.depthMask(me),X=me)},setFunc:function(me){if(ae&&(me=g1[me]),$!==me){switch(me){case bh:s.depthFunc(s.NEVER);break;case Th:s.depthFunc(s.ALWAYS);break;case wh:s.depthFunc(s.LESS);break;case Ar:s.depthFunc(s.LEQUAL);break;case Eh:s.depthFunc(s.EQUAL);break;case Ah:s.depthFunc(s.GEQUAL);break;case Rh:s.depthFunc(s.GREATER);break;case Ch:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}$=me}},setLocked:function(me){D=me},setClear:function(me){de!==me&&(s.clearDepth(me),de=me)},reset:function(){D=!1,X=null,$=null,de=null}}}function n(){let D=!1,ae=null,X=null,$=null,de=null,me=null,lt=null,Xt=null,In=null;return{setTest:function(dt){D||(dt?xe(s.STENCIL_TEST):oe(s.STENCIL_TEST))},setMask:function(dt){ae!==dt&&!D&&(s.stencilMask(dt),ae=dt)},setFunc:function(dt,Ln,bi){(X!==dt||$!==Ln||de!==bi)&&(s.stencilFunc(dt,Ln,bi),X=dt,$=Ln,de=bi)},setOp:function(dt,Ln,bi){(me!==dt||lt!==Ln||Xt!==bi)&&(s.stencilOp(dt,Ln,bi),me=dt,lt=Ln,Xt=bi)},setLocked:function(dt){D=dt},setClear:function(dt){In!==dt&&(s.clearStencil(dt),In=dt)},reset:function(){D=!1,ae=null,X=null,$=null,de=null,me=null,lt=null,Xt=null,In=null}}}let i=new e,r=new t,o=new n,a=new WeakMap,l=new WeakMap,c={},h={},u=new WeakMap,f=[],d=null,g=!1,x=null,p=null,m=null,v=null,y=null,M=null,P=null,A=new ce(0,0,0),E=0,I=!1,F=null,_=null,b=null,O=null,k=null,G=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,z=0,j=s.getParameter(s.VERSION);j.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(j)[1]),q=z>=1):j.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),q=z>=2);let W=null,ie={},le=s.getParameter(s.SCISSOR_BOX),ge=s.getParameter(s.VIEWPORT),Ze=new pt().fromArray(le),rt=new pt().fromArray(ge);function Y(D,ae,X,$){let de=new Uint8Array(4),me=s.createTexture();s.bindTexture(D,me),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let lt=0;lt<X;lt++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(ae,0,s.RGBA,1,1,$,0,s.RGBA,s.UNSIGNED_BYTE,de):s.texImage2D(ae+lt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,de);return me}let Q={};Q[s.TEXTURE_2D]=Y(s.TEXTURE_2D,s.TEXTURE_2D,1),Q[s.TEXTURE_CUBE_MAP]=Y(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[s.TEXTURE_2D_ARRAY]=Y(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Q[s.TEXTURE_3D]=Y(s.TEXTURE_3D,s.TEXTURE_3D,1,1),i.setClear(0,0,0,1),r.setClear(1),o.setClear(0),xe(s.DEPTH_TEST),r.setFunc(Ar),$e(!1),nt(Ld),xe(s.CULL_FACE),L(en);function xe(D){c[D]!==!0&&(s.enable(D),c[D]=!0)}function oe(D){c[D]!==!1&&(s.disable(D),c[D]=!1)}function Pe(D,ae){return h[D]!==ae?(s.bindFramebuffer(D,ae),h[D]=ae,D===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=ae),D===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=ae),!0):!1}function be(D,ae){let X=f,$=!1;if(D){X=u.get(ae),X===void 0&&(X=[],u.set(ae,X));let de=D.textures;if(X.length!==de.length||X[0]!==s.COLOR_ATTACHMENT0){for(let me=0,lt=de.length;me<lt;me++)X[me]=s.COLOR_ATTACHMENT0+me;X.length=de.length,$=!0}}else X[0]!==s.BACK&&(X[0]=s.BACK,$=!0);$&&s.drawBuffers(X)}function Ge(D){return d!==D?(s.useProgram(D),d=D,!0):!1}let ft={[Kn]:s.FUNC_ADD,[F0]:s.FUNC_SUBTRACT,[k0]:s.FUNC_REVERSE_SUBTRACT};ft[B0]=s.MIN,ft[z0]=s.MAX;let Qe={[Vr]:s.ZERO,[H0]:s.ONE,[V0]:s.SRC_COLOR,[Mh]:s.SRC_ALPHA,[q0]:s.SRC_ALPHA_SATURATE,[Ul]:s.DST_COLOR,[Nl]:s.DST_ALPHA,[G0]:s.ONE_MINUS_SRC_COLOR,[Sh]:s.ONE_MINUS_SRC_ALPHA,[X0]:s.ONE_MINUS_DST_COLOR,[W0]:s.ONE_MINUS_DST_ALPHA,[Y0]:s.CONSTANT_COLOR,[K0]:s.ONE_MINUS_CONSTANT_COLOR,[Z0]:s.CONSTANT_ALPHA,[$0]:s.ONE_MINUS_CONSTANT_ALPHA};function L(D,ae,X,$,de,me,lt,Xt,In,dt){if(D===en){g===!0&&(oe(s.BLEND),g=!1);return}if(g===!1&&(xe(s.BLEND),g=!0),D!==Gu){if(D!==x||dt!==I){if((p!==Kn||y!==Kn)&&(s.blendEquation(s.FUNC_ADD),p=Kn,y=Kn),dt)switch(D){case Ni:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ln:s.blendFunc(s.ONE,s.ONE);break;case Dd:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Nd:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Ni:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ln:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Dd:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Nd:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}m=null,v=null,M=null,P=null,A.set(0,0,0),E=0,x=D,I=dt}return}de=de||ae,me=me||X,lt=lt||$,(ae!==p||de!==y)&&(s.blendEquationSeparate(ft[ae],ft[de]),p=ae,y=de),(X!==m||$!==v||me!==M||lt!==P)&&(s.blendFuncSeparate(Qe[X],Qe[$],Qe[me],Qe[lt]),m=X,v=$,M=me,P=lt),(Xt.equals(A)===!1||In!==E)&&(s.blendColor(Xt.r,Xt.g,Xt.b,In),A.copy(Xt),E=In),x=D,I=!1}function fn(D,ae){D.side===Pt?oe(s.CULL_FACE):xe(s.CULL_FACE);let X=D.side===gn;ae&&(X=!X),$e(X),D.blending===Ni&&D.transparent===!1?L(en):L(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),r.setFunc(D.depthFunc),r.setTest(D.depthTest),r.setMask(D.depthWrite),i.setMask(D.colorWrite);let $=D.stencilWrite;o.setTest($),$&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),vt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?xe(s.SAMPLE_ALPHA_TO_COVERAGE):oe(s.SAMPLE_ALPHA_TO_COVERAGE)}function $e(D){F!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),F=D)}function nt(D){D!==U0?(xe(s.CULL_FACE),D!==_&&(D===Ld?s.cullFace(s.BACK):D===O0?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):oe(s.CULL_FACE),_=D}function Ne(D){D!==b&&(q&&s.lineWidth(D),b=D)}function vt(D,ae,X){D?(xe(s.POLYGON_OFFSET_FILL),(O!==ae||k!==X)&&(s.polygonOffset(ae,X),O=ae,k=X)):oe(s.POLYGON_OFFSET_FILL)}function Ue(D){D?xe(s.SCISSOR_TEST):oe(s.SCISSOR_TEST)}function C(D){D===void 0&&(D=s.TEXTURE0+G-1),W!==D&&(s.activeTexture(D),W=D)}function S(D,ae,X){X===void 0&&(W===null?X=s.TEXTURE0+G-1:X=W);let $=ie[X];$===void 0&&($={type:void 0,texture:void 0},ie[X]=$),($.type!==D||$.texture!==ae)&&(W!==X&&(s.activeTexture(X),W=X),s.bindTexture(D,ae||Q[D]),$.type=D,$.texture=ae)}function B(){let D=ie[W];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Z(){try{s.compressedTexImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{s.compressedTexImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function K(){try{s.texSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ve(){try{s.texSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function se(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ue(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Je(){try{s.texStorage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ee(){try{s.texStorage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function fe(){try{s.texImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Oe(){try{s.texImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Fe(D){Ze.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),Ze.copy(D))}function ye(D){rt.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),rt.copy(D))}function it(D,ae){let X=l.get(ae);X===void 0&&(X=new WeakMap,l.set(ae,X));let $=X.get(D);$===void 0&&($=s.getUniformBlockIndex(ae,D.name),X.set(D,$))}function ze(D,ae){let $=l.get(ae).get(D);a.get(ae)!==$&&(s.uniformBlockBinding(ae,$,D.__bindingPointIndex),a.set(ae,$))}function ht(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),c={},W=null,ie={},h={},u=new WeakMap,f=[],d=null,g=!1,x=null,p=null,m=null,v=null,y=null,M=null,P=null,A=new ce(0,0,0),E=0,I=!1,F=null,_=null,b=null,O=null,k=null,Ze.set(0,0,s.canvas.width,s.canvas.height),rt.set(0,0,s.canvas.width,s.canvas.height),i.reset(),r.reset(),o.reset()}return{buffers:{color:i,depth:r,stencil:o},enable:xe,disable:oe,bindFramebuffer:Pe,drawBuffers:be,useProgram:Ge,setBlending:L,setMaterial:fn,setFlipSided:$e,setCullFace:nt,setLineWidth:Ne,setPolygonOffset:vt,setScissorTest:Ue,activeTexture:C,bindTexture:S,unbindTexture:B,compressedTexImage2D:Z,compressedTexImage3D:J,texImage2D:fe,texImage3D:Oe,updateUBOMapping:it,uniformBlockBinding:ze,texStorage2D:Je,texStorage3D:ee,texSubImage2D:K,texSubImage3D:ve,compressedTexSubImage2D:se,compressedTexSubImage3D:ue,scissor:Fe,viewport:ye,reset:ht}}function Tp(s,e,t,n){let i=y1(n);switch(t){case em:return s*e;case nm:return s*e;case im:return s*e*2;case Qu:return s*e/i.components*i.byteLength;case ef:return s*e/i.components*i.byteLength;case sm:return s*e*2/i.components*i.byteLength;case tf:return s*e*2/i.components*i.byteLength;case tm:return s*e*3/i.components*i.byteLength;case Nn:return s*e*4/i.components*i.byteLength;case nf:return s*e*4/i.components*i.byteLength;case Ka:case Za:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case $a:case Ja:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Dh:case Uh:return Math.max(s,16)*Math.max(e,8)/4;case Lh:case Nh:return Math.max(s,8)*Math.max(e,8)/2;case Oh:case Fh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case kh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Bh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case zh:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Hh:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Vh:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Gh:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Wh:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Xh:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case qh:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Yh:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Kh:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Zh:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case $h:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Jh:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case jh:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case ja:case Qh:case eu:return Math.ceil(s/4)*Math.ceil(e/4)*16;case rm:case tu:return Math.ceil(s/4)*Math.ceil(e/4)*8;case nu:case iu:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function y1(s){switch(s){case fi:case Jp:return{byteLength:1,components:1};case bo:case jp:case yn:return{byteLength:2,components:1};case Ju:case ju:return{byteLength:2,components:4};case Ds:case $u:case hi:return{byteLength:4,components:1};case Qp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function _1(s,e,t,n,i,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new te,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,S){return d?new OffscreenCanvas(C,S):To("canvas")}function x(C,S,B){let Z=1,J=Ue(C);if((J.width>B||J.height>B)&&(Z=B/Math.max(J.width,J.height)),Z<1)if(typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&C instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&C instanceof ImageBitmap||typeof VideoFrame!="undefined"&&C instanceof VideoFrame){let K=Math.floor(Z*J.width),ve=Math.floor(Z*J.height);u===void 0&&(u=g(K,ve));let se=S?g(K,ve):u;return se.width=K,se.height=ve,se.getContext("2d").drawImage(C,0,0,K,ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+K+"x"+ve+")."),se}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),C;return C}function p(C){return C.generateMipmaps&&C.minFilter!==Qt&&C.minFilter!==Dn}function m(C){s.generateMipmap(C)}function v(C,S,B,Z,J=!1){if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let K=S;if(S===s.RED&&(B===s.FLOAT&&(K=s.R32F),B===s.HALF_FLOAT&&(K=s.R16F),B===s.UNSIGNED_BYTE&&(K=s.R8)),S===s.RED_INTEGER&&(B===s.UNSIGNED_BYTE&&(K=s.R8UI),B===s.UNSIGNED_SHORT&&(K=s.R16UI),B===s.UNSIGNED_INT&&(K=s.R32UI),B===s.BYTE&&(K=s.R8I),B===s.SHORT&&(K=s.R16I),B===s.INT&&(K=s.R32I)),S===s.RG&&(B===s.FLOAT&&(K=s.RG32F),B===s.HALF_FLOAT&&(K=s.RG16F),B===s.UNSIGNED_BYTE&&(K=s.RG8)),S===s.RG_INTEGER&&(B===s.UNSIGNED_BYTE&&(K=s.RG8UI),B===s.UNSIGNED_SHORT&&(K=s.RG16UI),B===s.UNSIGNED_INT&&(K=s.RG32UI),B===s.BYTE&&(K=s.RG8I),B===s.SHORT&&(K=s.RG16I),B===s.INT&&(K=s.RG32I)),S===s.RGB_INTEGER&&(B===s.UNSIGNED_BYTE&&(K=s.RGB8UI),B===s.UNSIGNED_SHORT&&(K=s.RGB16UI),B===s.UNSIGNED_INT&&(K=s.RGB32UI),B===s.BYTE&&(K=s.RGB8I),B===s.SHORT&&(K=s.RGB16I),B===s.INT&&(K=s.RGB32I)),S===s.RGBA_INTEGER&&(B===s.UNSIGNED_BYTE&&(K=s.RGBA8UI),B===s.UNSIGNED_SHORT&&(K=s.RGBA16UI),B===s.UNSIGNED_INT&&(K=s.RGBA32UI),B===s.BYTE&&(K=s.RGBA8I),B===s.SHORT&&(K=s.RGBA16I),B===s.INT&&(K=s.RGBA32I)),S===s.RGB&&B===s.UNSIGNED_INT_5_9_9_9_REV&&(K=s.RGB9_E5),S===s.RGBA){let ve=J?tl:et.getTransfer(Z);B===s.FLOAT&&(K=s.RGBA32F),B===s.HALF_FLOAT&&(K=s.RGBA16F),B===s.UNSIGNED_BYTE&&(K=ve===Rt?s.SRGB8_ALPHA8:s.RGBA8),B===s.UNSIGNED_SHORT_4_4_4_4&&(K=s.RGBA4),B===s.UNSIGNED_SHORT_5_5_5_1&&(K=s.RGB5_A1)}return(K===s.R16F||K===s.R32F||K===s.RG16F||K===s.RG32F||K===s.RGBA16F||K===s.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function y(C,S){let B;return C?S===null||S===Ds||S===is?B=s.DEPTH24_STENCIL8:S===hi?B=s.DEPTH32F_STENCIL8:S===bo&&(B=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ds||S===is?B=s.DEPTH_COMPONENT24:S===hi?B=s.DEPTH_COMPONENT32F:S===bo&&(B=s.DEPTH_COMPONENT16),B}function M(C,S){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==Qt&&C.minFilter!==Dn?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function P(C){let S=C.target;S.removeEventListener("dispose",P),E(S),S.isVideoTexture&&h.delete(S)}function A(C){let S=C.target;S.removeEventListener("dispose",A),F(S)}function E(C){let S=n.get(C);if(S.__webglInit===void 0)return;let B=C.source,Z=f.get(B);if(Z){let J=Z[S.__cacheKey];J.usedTimes--,J.usedTimes===0&&I(C),Object.keys(Z).length===0&&f.delete(B)}n.remove(C)}function I(C){let S=n.get(C);s.deleteTexture(S.__webglTexture);let B=C.source,Z=f.get(B);delete Z[S.__cacheKey],o.memory.textures--}function F(C){let S=n.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(S.__webglFramebuffer[Z]))for(let J=0;J<S.__webglFramebuffer[Z].length;J++)s.deleteFramebuffer(S.__webglFramebuffer[Z][J]);else s.deleteFramebuffer(S.__webglFramebuffer[Z]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[Z])}else{if(Array.isArray(S.__webglFramebuffer))for(let Z=0;Z<S.__webglFramebuffer.length;Z++)s.deleteFramebuffer(S.__webglFramebuffer[Z]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Z=0;Z<S.__webglColorRenderbuffer.length;Z++)S.__webglColorRenderbuffer[Z]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[Z]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let B=C.textures;for(let Z=0,J=B.length;Z<J;Z++){let K=n.get(B[Z]);K.__webglTexture&&(s.deleteTexture(K.__webglTexture),o.memory.textures--),n.remove(B[Z])}n.remove(C)}let _=0;function b(){_=0}function O(){let C=_;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),_+=1,C}function k(C){let S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function G(C,S){let B=n.get(C);if(C.isVideoTexture&&Ne(C),C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){let Z=C.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{rt(B,C,S);return}}t.bindTexture(s.TEXTURE_2D,B.__webglTexture,s.TEXTURE0+S)}function q(C,S){let B=n.get(C);if(C.version>0&&B.__version!==C.version){rt(B,C,S);return}t.bindTexture(s.TEXTURE_2D_ARRAY,B.__webglTexture,s.TEXTURE0+S)}function z(C,S){let B=n.get(C);if(C.version>0&&B.__version!==C.version){rt(B,C,S);return}t.bindTexture(s.TEXTURE_3D,B.__webglTexture,s.TEXTURE0+S)}function j(C,S){let B=n.get(C);if(C.version>0&&B.__version!==C.version){Y(B,C,S);return}t.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+S)}let W={[cn]:s.REPEAT,[Li]:s.CLAMP_TO_EDGE,[So]:s.MIRRORED_REPEAT},ie={[Qt]:s.NEAREST,[Zu]:s.NEAREST_MIPMAP_NEAREST,[vr]:s.NEAREST_MIPMAP_LINEAR,[Dn]:s.LINEAR,[go]:s.LINEAR_MIPMAP_NEAREST,[_i]:s.LINEAR_MIPMAP_LINEAR},le={[ag]:s.NEVER,[dg]:s.ALWAYS,[lg]:s.LESS,[am]:s.LEQUAL,[cg]:s.EQUAL,[fg]:s.GEQUAL,[hg]:s.GREATER,[ug]:s.NOTEQUAL};function ge(C,S){if(S.type===hi&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Dn||S.magFilter===go||S.magFilter===vr||S.magFilter===_i||S.minFilter===Dn||S.minFilter===go||S.minFilter===vr||S.minFilter===_i)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,W[S.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,W[S.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,W[S.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,ie[S.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,ie[S.minFilter]),S.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,le[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Qt||S.minFilter!==vr&&S.minFilter!==_i||S.type===hi&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");s.texParameterf(C,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Ze(C,S){let B=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",P));let Z=S.source,J=f.get(Z);J===void 0&&(J={},f.set(Z,J));let K=k(S);if(K!==C.__cacheKey){J[K]===void 0&&(J[K]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,B=!0),J[K].usedTimes++;let ve=J[C.__cacheKey];ve!==void 0&&(J[C.__cacheKey].usedTimes--,ve.usedTimes===0&&I(S)),C.__cacheKey=K,C.__webglTexture=J[K].texture}return B}function rt(C,S,B){let Z=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Z=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Z=s.TEXTURE_3D);let J=Ze(C,S),K=S.source;t.bindTexture(Z,C.__webglTexture,s.TEXTURE0+B);let ve=n.get(K);if(K.version!==ve.__version||J===!0){t.activeTexture(s.TEXTURE0+B);let se=et.getPrimaries(et.workingColorSpace),ue=S.colorSpace===yi?null:et.getPrimaries(S.colorSpace),Je=S.colorSpace===yi||se===ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Je);let ee=x(S.image,!1,i.maxTextureSize);ee=vt(S,ee);let fe=r.convert(S.format,S.colorSpace),Oe=r.convert(S.type),Fe=v(S.internalFormat,fe,Oe,S.colorSpace,S.isVideoTexture);ge(Z,S);let ye,it=S.mipmaps,ze=S.isVideoTexture!==!0,ht=ve.__version===void 0||J===!0,D=K.dataReady,ae=M(S,ee);if(S.isDepthTexture)Fe=y(S.format===ss,S.type),ht&&(ze?t.texStorage2D(s.TEXTURE_2D,1,Fe,ee.width,ee.height):t.texImage2D(s.TEXTURE_2D,0,Fe,ee.width,ee.height,0,fe,Oe,null));else if(S.isDataTexture)if(it.length>0){ze&&ht&&t.texStorage2D(s.TEXTURE_2D,ae,Fe,it[0].width,it[0].height);for(let X=0,$=it.length;X<$;X++)ye=it[X],ze?D&&t.texSubImage2D(s.TEXTURE_2D,X,0,0,ye.width,ye.height,fe,Oe,ye.data):t.texImage2D(s.TEXTURE_2D,X,Fe,ye.width,ye.height,0,fe,Oe,ye.data);S.generateMipmaps=!1}else ze?(ht&&t.texStorage2D(s.TEXTURE_2D,ae,Fe,ee.width,ee.height),D&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ee.width,ee.height,fe,Oe,ee.data)):t.texImage2D(s.TEXTURE_2D,0,Fe,ee.width,ee.height,0,fe,Oe,ee.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ze&&ht&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ae,Fe,it[0].width,it[0].height,ee.depth);for(let X=0,$=it.length;X<$;X++)if(ye=it[X],S.format!==Nn)if(fe!==null)if(ze){if(D)if(S.layerUpdates.size>0){let de=Tp(ye.width,ye.height,S.format,S.type);for(let me of S.layerUpdates){let lt=ye.data.subarray(me*de/ye.data.BYTES_PER_ELEMENT,(me+1)*de/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,X,0,0,me,ye.width,ye.height,1,fe,lt,0,0)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,X,0,0,0,ye.width,ye.height,ee.depth,fe,ye.data,0,0)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,X,Fe,ye.width,ye.height,ee.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ze?D&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,X,0,0,0,ye.width,ye.height,ee.depth,fe,Oe,ye.data):t.texImage3D(s.TEXTURE_2D_ARRAY,X,Fe,ye.width,ye.height,ee.depth,0,fe,Oe,ye.data)}else{ze&&ht&&t.texStorage2D(s.TEXTURE_2D,ae,Fe,it[0].width,it[0].height);for(let X=0,$=it.length;X<$;X++)ye=it[X],S.format!==Nn?fe!==null?ze?D&&t.compressedTexSubImage2D(s.TEXTURE_2D,X,0,0,ye.width,ye.height,fe,ye.data):t.compressedTexImage2D(s.TEXTURE_2D,X,Fe,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?D&&t.texSubImage2D(s.TEXTURE_2D,X,0,0,ye.width,ye.height,fe,Oe,ye.data):t.texImage2D(s.TEXTURE_2D,X,Fe,ye.width,ye.height,0,fe,Oe,ye.data)}else if(S.isDataArrayTexture)if(ze){if(ht&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ae,Fe,ee.width,ee.height,ee.depth),D)if(S.layerUpdates.size>0){let X=Tp(ee.width,ee.height,S.format,S.type);for(let $ of S.layerUpdates){let de=ee.data.subarray($*X/ee.data.BYTES_PER_ELEMENT,($+1)*X/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,$,ee.width,ee.height,1,fe,Oe,de)}S.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,fe,Oe,ee.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Fe,ee.width,ee.height,ee.depth,0,fe,Oe,ee.data);else if(S.isData3DTexture)ze?(ht&&t.texStorage3D(s.TEXTURE_3D,ae,Fe,ee.width,ee.height,ee.depth),D&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,fe,Oe,ee.data)):t.texImage3D(s.TEXTURE_3D,0,Fe,ee.width,ee.height,ee.depth,0,fe,Oe,ee.data);else if(S.isFramebufferTexture){if(ht)if(ze)t.texStorage2D(s.TEXTURE_2D,ae,Fe,ee.width,ee.height);else{let X=ee.width,$=ee.height;for(let de=0;de<ae;de++)t.texImage2D(s.TEXTURE_2D,de,Fe,X,$,0,fe,Oe,null),X>>=1,$>>=1}}else if(it.length>0){if(ze&&ht){let X=Ue(it[0]);t.texStorage2D(s.TEXTURE_2D,ae,Fe,X.width,X.height)}for(let X=0,$=it.length;X<$;X++)ye=it[X],ze?D&&t.texSubImage2D(s.TEXTURE_2D,X,0,0,fe,Oe,ye):t.texImage2D(s.TEXTURE_2D,X,Fe,fe,Oe,ye);S.generateMipmaps=!1}else if(ze){if(ht){let X=Ue(ee);t.texStorage2D(s.TEXTURE_2D,ae,Fe,X.width,X.height)}D&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,fe,Oe,ee)}else t.texImage2D(s.TEXTURE_2D,0,Fe,fe,Oe,ee);p(S)&&m(Z),ve.__version=K.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function Y(C,S,B){if(S.image.length!==6)return;let Z=Ze(C,S),J=S.source;t.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+B);let K=n.get(J);if(J.version!==K.__version||Z===!0){t.activeTexture(s.TEXTURE0+B);let ve=et.getPrimaries(et.workingColorSpace),se=S.colorSpace===yi?null:et.getPrimaries(S.colorSpace),ue=S.colorSpace===yi||ve===se?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);let Je=S.isCompressedTexture||S.image[0].isCompressedTexture,ee=S.image[0]&&S.image[0].isDataTexture,fe=[];for(let $=0;$<6;$++)!Je&&!ee?fe[$]=x(S.image[$],!0,i.maxCubemapSize):fe[$]=ee?S.image[$].image:S.image[$],fe[$]=vt(S,fe[$]);let Oe=fe[0],Fe=r.convert(S.format,S.colorSpace),ye=r.convert(S.type),it=v(S.internalFormat,Fe,ye,S.colorSpace),ze=S.isVideoTexture!==!0,ht=K.__version===void 0||Z===!0,D=J.dataReady,ae=M(S,Oe);ge(s.TEXTURE_CUBE_MAP,S);let X;if(Je){ze&&ht&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ae,it,Oe.width,Oe.height);for(let $=0;$<6;$++){X=fe[$].mipmaps;for(let de=0;de<X.length;de++){let me=X[de];S.format!==Nn?Fe!==null?ze?D&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,de,0,0,me.width,me.height,Fe,me.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,de,it,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,de,0,0,me.width,me.height,Fe,ye,me.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,de,it,me.width,me.height,0,Fe,ye,me.data)}}}else{if(X=S.mipmaps,ze&&ht){X.length>0&&ae++;let $=Ue(fe[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,ae,it,$.width,$.height)}for(let $=0;$<6;$++)if(ee){ze?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,fe[$].width,fe[$].height,Fe,ye,fe[$].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,it,fe[$].width,fe[$].height,0,Fe,ye,fe[$].data);for(let de=0;de<X.length;de++){let lt=X[de].image[$].image;ze?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,de+1,0,0,lt.width,lt.height,Fe,ye,lt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,de+1,it,lt.width,lt.height,0,Fe,ye,lt.data)}}else{ze?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Fe,ye,fe[$]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,it,Fe,ye,fe[$]);for(let de=0;de<X.length;de++){let me=X[de];ze?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,de+1,0,0,Fe,ye,me.image[$]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,de+1,it,Fe,ye,me.image[$])}}}p(S)&&m(s.TEXTURE_CUBE_MAP),K.__version=J.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function Q(C,S,B,Z,J,K){let ve=r.convert(B.format,B.colorSpace),se=r.convert(B.type),ue=v(B.internalFormat,ve,se,B.colorSpace);if(!n.get(S).__hasExternalTextures){let ee=Math.max(1,S.width>>K),fe=Math.max(1,S.height>>K);J===s.TEXTURE_3D||J===s.TEXTURE_2D_ARRAY?t.texImage3D(J,K,ue,ee,fe,S.depth,0,ve,se,null):t.texImage2D(J,K,ue,ee,fe,0,ve,se,null)}t.bindFramebuffer(s.FRAMEBUFFER,C),nt(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Z,J,n.get(B).__webglTexture,0,$e(S)):(J===s.TEXTURE_2D||J>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Z,J,n.get(B).__webglTexture,K),t.bindFramebuffer(s.FRAMEBUFFER,null)}function xe(C,S,B){if(s.bindRenderbuffer(s.RENDERBUFFER,C),S.depthBuffer){let Z=S.depthTexture,J=Z&&Z.isDepthTexture?Z.type:null,K=y(S.stencilBuffer,J),ve=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,se=$e(S);nt(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,se,K,S.width,S.height):B?s.renderbufferStorageMultisample(s.RENDERBUFFER,se,K,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,K,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ve,s.RENDERBUFFER,C)}else{let Z=S.textures;for(let J=0;J<Z.length;J++){let K=Z[J],ve=r.convert(K.format,K.colorSpace),se=r.convert(K.type),ue=v(K.internalFormat,ve,se,K.colorSpace),Je=$e(S);B&&nt(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Je,ue,S.width,S.height):nt(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Je,ue,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,ue,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function oe(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),G(S.depthTexture,0);let Z=n.get(S.depthTexture).__webglTexture,J=$e(S);if(S.depthTexture.format===Tr)nt(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0);else if(S.depthTexture.format===ss)nt(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Pe(C){let S=n.get(C),B=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){let Z=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Z){let J=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Z.removeEventListener("dispose",J)};Z.addEventListener("dispose",J),S.__depthDisposeCallback=J}S.__boundDepthTexture=Z}if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");oe(S.__webglFramebuffer,C)}else if(B){S.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[Z]),S.__webglDepthbuffer[Z]===void 0)S.__webglDepthbuffer[Z]=s.createRenderbuffer(),xe(S.__webglDepthbuffer[Z],C,!1);else{let J=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,K=S.__webglDepthbuffer[Z];s.bindRenderbuffer(s.RENDERBUFFER,K),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,K)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),xe(S.__webglDepthbuffer,C,!1);else{let Z=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,J=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,J),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,J)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function be(C,S,B){let Z=n.get(C);S!==void 0&&Q(Z.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),B!==void 0&&Pe(C)}function Ge(C){let S=C.texture,B=n.get(C),Z=n.get(S);C.addEventListener("dispose",A);let J=C.textures,K=C.isWebGLCubeRenderTarget===!0,ve=J.length>1;if(ve||(Z.__webglTexture===void 0&&(Z.__webglTexture=s.createTexture()),Z.__version=S.version,o.memory.textures++),K){B.__webglFramebuffer=[];for(let se=0;se<6;se++)if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer[se]=[];for(let ue=0;ue<S.mipmaps.length;ue++)B.__webglFramebuffer[se][ue]=s.createFramebuffer()}else B.__webglFramebuffer[se]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer=[];for(let se=0;se<S.mipmaps.length;se++)B.__webglFramebuffer[se]=s.createFramebuffer()}else B.__webglFramebuffer=s.createFramebuffer();if(ve)for(let se=0,ue=J.length;se<ue;se++){let Je=n.get(J[se]);Je.__webglTexture===void 0&&(Je.__webglTexture=s.createTexture(),o.memory.textures++)}if(C.samples>0&&nt(C)===!1){B.__webglMultisampledFramebuffer=s.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let se=0;se<J.length;se++){let ue=J[se];B.__webglColorRenderbuffer[se]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,B.__webglColorRenderbuffer[se]);let Je=r.convert(ue.format,ue.colorSpace),ee=r.convert(ue.type),fe=v(ue.internalFormat,Je,ee,ue.colorSpace,C.isXRRenderTarget===!0),Oe=$e(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,Oe,fe,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+se,s.RENDERBUFFER,B.__webglColorRenderbuffer[se])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(B.__webglDepthRenderbuffer=s.createRenderbuffer(),xe(B.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(K){t.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture),ge(s.TEXTURE_CUBE_MAP,S);for(let se=0;se<6;se++)if(S.mipmaps&&S.mipmaps.length>0)for(let ue=0;ue<S.mipmaps.length;ue++)Q(B.__webglFramebuffer[se][ue],C,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+se,ue);else Q(B.__webglFramebuffer[se],C,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);p(S)&&m(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){for(let se=0,ue=J.length;se<ue;se++){let Je=J[se],ee=n.get(Je);t.bindTexture(s.TEXTURE_2D,ee.__webglTexture),ge(s.TEXTURE_2D,Je),Q(B.__webglFramebuffer,C,Je,s.COLOR_ATTACHMENT0+se,s.TEXTURE_2D,0),p(Je)&&m(s.TEXTURE_2D)}t.unbindTexture()}else{let se=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(se=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(se,Z.__webglTexture),ge(se,S),S.mipmaps&&S.mipmaps.length>0)for(let ue=0;ue<S.mipmaps.length;ue++)Q(B.__webglFramebuffer[ue],C,S,s.COLOR_ATTACHMENT0,se,ue);else Q(B.__webglFramebuffer,C,S,s.COLOR_ATTACHMENT0,se,0);p(S)&&m(se),t.unbindTexture()}C.depthBuffer&&Pe(C)}function ft(C){let S=C.textures;for(let B=0,Z=S.length;B<Z;B++){let J=S[B];if(p(J)){let K=C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,ve=n.get(J).__webglTexture;t.bindTexture(K,ve),m(K),t.unbindTexture()}}}let Qe=[],L=[];function fn(C){if(C.samples>0){if(nt(C)===!1){let S=C.textures,B=C.width,Z=C.height,J=s.COLOR_BUFFER_BIT,K=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ve=n.get(C),se=S.length>1;if(se)for(let ue=0;ue<S.length;ue++)t.bindFramebuffer(s.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ue,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ve.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ue,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let ue=0;ue<S.length;ue++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(J|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(J|=s.STENCIL_BUFFER_BIT)),se){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ve.__webglColorRenderbuffer[ue]);let Je=n.get(S[ue]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Je,0)}s.blitFramebuffer(0,0,B,Z,0,0,B,Z,J,s.NEAREST),l===!0&&(Qe.length=0,L.length=0,Qe.push(s.COLOR_ATTACHMENT0+ue),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Qe.push(K),L.push(K),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,L)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Qe))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),se)for(let ue=0;ue<S.length;ue++){t.bindFramebuffer(s.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ue,s.RENDERBUFFER,ve.__webglColorRenderbuffer[ue]);let Je=n.get(S[ue]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ve.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ue,s.TEXTURE_2D,Je,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let S=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function $e(C){return Math.min(i.maxSamples,C.samples)}function nt(C){let S=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ne(C){let S=o.render.frame;h.get(C)!==S&&(h.set(C,S),C.update())}function vt(C,S){let B=C.colorSpace,Z=C.format,J=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||B!==Zt&&B!==yi&&(et.getTransfer(B)===Rt?(Z!==Nn||J!==fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),S}function Ue(C){return typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame!="undefined"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=b,this.setTexture2D=G,this.setTexture2DArray=q,this.setTexture3D=z,this.setTextureCube=j,this.rebindTextures=be,this.setupRenderTarget=Ge,this.updateRenderTargetMipmap=ft,this.updateMultisampleRenderTarget=fn,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=nt}function v1(s,e){function t(n,i=yi){let r,o=et.getTransfer(i);if(n===fi)return s.UNSIGNED_BYTE;if(n===Ju)return s.UNSIGNED_SHORT_4_4_4_4;if(n===ju)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Qp)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Jp)return s.BYTE;if(n===jp)return s.SHORT;if(n===bo)return s.UNSIGNED_SHORT;if(n===$u)return s.INT;if(n===Ds)return s.UNSIGNED_INT;if(n===hi)return s.FLOAT;if(n===yn)return s.HALF_FLOAT;if(n===em)return s.ALPHA;if(n===tm)return s.RGB;if(n===Nn)return s.RGBA;if(n===nm)return s.LUMINANCE;if(n===im)return s.LUMINANCE_ALPHA;if(n===Tr)return s.DEPTH_COMPONENT;if(n===ss)return s.DEPTH_STENCIL;if(n===Qu)return s.RED;if(n===ef)return s.RED_INTEGER;if(n===sm)return s.RG;if(n===tf)return s.RG_INTEGER;if(n===nf)return s.RGBA_INTEGER;if(n===Ka||n===Za||n===$a||n===Ja)if(o===Rt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ka)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Za)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===$a)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ja)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ka)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Za)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===$a)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ja)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Lh||n===Dh||n===Nh||n===Uh)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Lh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Dh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Nh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Uh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Oh||n===Fh||n===kh)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Oh||n===Fh)return o===Rt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===kh)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Bh||n===zh||n===Hh||n===Vh||n===Gh||n===Wh||n===Xh||n===qh||n===Yh||n===Kh||n===Zh||n===$h||n===Jh||n===jh)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Bh)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===zh)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Hh)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Vh)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Gh)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Wh)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Xh)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===qh)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Yh)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Kh)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Zh)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===$h)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Jh)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===jh)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ja||n===Qh||n===eu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ja)return o===Rt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Qh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===eu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===rm||n===tu||n===nu||n===iu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ja)return r.COMPRESSED_RED_RGTC1_EXT;if(n===tu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===nu)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===iu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===is?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var yu=class extends jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Ut=class extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}},M1={type:"move"},_o=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ut,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ut,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ut,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let p=t.getJointPose(x,n),m=this._getHandJoint(c,x);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(M1)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ut;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},S1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,b1=`
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

}`,_u=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let i=new hn,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Nt({vertexShader:S1,fragmentShader:b1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ie(new xn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},vu=class extends Ui{constructor(e,t){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null,x=new _u,p=t.getContextAttributes(),m=null,v=null,y=[],M=[],P=new te,A=null,E=new jt;E.layers.enable(1),E.viewport=new pt;let I=new jt;I.layers.enable(2),I.viewport=new pt;let F=[E,I],_=new yu;_.layers.enable(1),_.layers.enable(2);let b=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let Q=y[Y];return Q===void 0&&(Q=new _o,y[Y]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(Y){let Q=y[Y];return Q===void 0&&(Q=new _o,y[Y]=Q),Q.getGripSpace()},this.getHand=function(Y){let Q=y[Y];return Q===void 0&&(Q=new _o,y[Y]=Q),Q.getHandSpace()};function k(Y){let Q=M.indexOf(Y.inputSource);if(Q===-1)return;let xe=y[Q];xe!==void 0&&(xe.update(Y.inputSource,Y.frame,c||o),xe.dispatchEvent({type:Y.type,data:Y.inputSource}))}function G(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",q);for(let Y=0;Y<y.length;Y++){let Q=M[Y];Q!==null&&(M[Y]=null,y[Y].disconnect(Q))}b=null,O=null,x.reset(),e.setRenderTarget(m),d=null,f=null,u=null,i=null,v=null,rt.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",G),i.addEventListener("inputsourceschange",q),p.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(P),i.renderState.layers===void 0){let Q={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,Q),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new Yt(d.framebufferWidth,d.framebufferHeight,{format:Nn,type:fi,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let Q=null,xe=null,oe=null;p.depth&&(oe=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Q=p.stencil?ss:Tr,xe=p.stencil?is:Ds);let Pe={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:r};u=new XRWebGLBinding(i,t),f=u.createProjectionLayer(Pe),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new Yt(f.textureWidth,f.textureHeight,{format:Nn,type:fi,depthTexture:new os(f.textureWidth,f.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),rt.setContext(i),rt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function q(Y){for(let Q=0;Q<Y.removed.length;Q++){let xe=Y.removed[Q],oe=M.indexOf(xe);oe>=0&&(M[oe]=null,y[oe].disconnect(xe))}for(let Q=0;Q<Y.added.length;Q++){let xe=Y.added[Q],oe=M.indexOf(xe);if(oe===-1){for(let be=0;be<y.length;be++)if(be>=M.length){M.push(xe),oe=be;break}else if(M[be]===null){M[be]=xe,oe=be;break}if(oe===-1)break}let Pe=y[oe];Pe&&Pe.connect(xe)}}let z=new R,j=new R;function W(Y,Q,xe){z.setFromMatrixPosition(Q.matrixWorld),j.setFromMatrixPosition(xe.matrixWorld);let oe=z.distanceTo(j),Pe=Q.projectionMatrix.elements,be=xe.projectionMatrix.elements,Ge=Pe[14]/(Pe[10]-1),ft=Pe[14]/(Pe[10]+1),Qe=(Pe[9]+1)/Pe[5],L=(Pe[9]-1)/Pe[5],fn=(Pe[8]-1)/Pe[0],$e=(be[8]+1)/be[0],nt=Ge*fn,Ne=Ge*$e,vt=oe/(-fn+$e),Ue=vt*-fn;if(Q.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Ue),Y.translateZ(vt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Pe[10]===-1)Y.projectionMatrix.copy(Q.projectionMatrix),Y.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let C=Ge+vt,S=ft+vt,B=nt-Ue,Z=Ne+(oe-Ue),J=Qe*ft/S*C,K=L*ft/S*C;Y.projectionMatrix.makePerspective(B,Z,J,K,C,S),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function ie(Y,Q){Q===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(Q.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let Q=Y.near,xe=Y.far;x.texture!==null&&(x.depthNear>0&&(Q=x.depthNear),x.depthFar>0&&(xe=x.depthFar)),_.near=I.near=E.near=Q,_.far=I.far=E.far=xe,(b!==_.near||O!==_.far)&&(i.updateRenderState({depthNear:_.near,depthFar:_.far}),b=_.near,O=_.far);let oe=Y.parent,Pe=_.cameras;ie(_,oe);for(let be=0;be<Pe.length;be++)ie(Pe[be],oe);Pe.length===2?W(_,E,I):_.projectionMatrix.copy(E.projectionMatrix),le(Y,_,oe)};function le(Y,Q,xe){xe===null?Y.matrix.copy(Q.matrixWorld):(Y.matrix.copy(xe.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(Q.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(Q.projectionMatrix),Y.projectionMatrixInverse.copy(Q.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Lr*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(_)};let ge=null;function Ze(Y,Q){if(h=Q.getViewerPose(c||o),g=Q,h!==null){let xe=h.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let oe=!1;xe.length!==_.cameras.length&&(_.cameras.length=0,oe=!0);for(let be=0;be<xe.length;be++){let Ge=xe[be],ft=null;if(d!==null)ft=d.getViewport(Ge);else{let L=u.getViewSubImage(f,Ge);ft=L.viewport,be===0&&(e.setRenderTargetTextures(v,L.colorTexture,f.ignoreDepthValues?void 0:L.depthStencilTexture),e.setRenderTarget(v))}let Qe=F[be];Qe===void 0&&(Qe=new jt,Qe.layers.enable(be),Qe.viewport=new pt,F[be]=Qe),Qe.matrix.fromArray(Ge.transform.matrix),Qe.matrix.decompose(Qe.position,Qe.quaternion,Qe.scale),Qe.projectionMatrix.fromArray(Ge.projectionMatrix),Qe.projectionMatrixInverse.copy(Qe.projectionMatrix).invert(),Qe.viewport.set(ft.x,ft.y,ft.width,ft.height),be===0&&(_.matrix.copy(Qe.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),oe===!0&&_.cameras.push(Qe)}let Pe=i.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")){let be=u.getDepthInformation(xe[0]);be&&be.isValid&&be.texture&&x.init(e,be,i.renderState)}}for(let xe=0;xe<y.length;xe++){let oe=M[xe],Pe=y[xe];oe!==null&&Pe!==void 0&&Pe.update(oe,Q,c||o)}ge&&ge(Y,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}let rt=new fm;rt.setAnimationLoop(Ze),this.setAnimationLoop=function(Y){ge=Y},this.dispose=function(){}}},Ps=new $n,T1=new Ee;function w1(s,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,um(s)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,v,y,M){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,M)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),x(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,v,y):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===gn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===gn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let v=e.get(m),y=v.envMap,M=v.envMapRotation;y&&(p.envMap.value=y,Ps.copy(M),Ps.x*=-1,Ps.y*=-1,Ps.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ps.y*=-1,Ps.z*=-1),p.envMapRotation.value.setFromMatrix4(T1.makeRotationFromEuler(Ps)),p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,v,y){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*v,p.scale.value=y*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,v){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===gn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function x(p,m){let v=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function E1(s,e,t,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,y){let M=y.program;n.uniformBlockBinding(v,M)}function c(v,y){let M=i[v.id];M===void 0&&(g(v),M=h(v),i[v.id]=M,v.addEventListener("dispose",p));let P=y.program;n.updateUBOMapping(v,P);let A=e.render.frame;r[v.id]!==A&&(f(v),r[v.id]=A)}function h(v){let y=u();v.__bindingPointIndex=y;let M=s.createBuffer(),P=v.__size,A=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,P,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,M),M}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){let y=i[v.id],M=v.uniforms,P=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let A=0,E=M.length;A<E;A++){let I=Array.isArray(M[A])?M[A]:[M[A]];for(let F=0,_=I.length;F<_;F++){let b=I[F];if(d(b,A,F,P)===!0){let O=b.__offset,k=Array.isArray(b.value)?b.value:[b.value],G=0;for(let q=0;q<k.length;q++){let z=k[q],j=x(z);typeof z=="number"||typeof z=="boolean"?(b.__data[0]=z,s.bufferSubData(s.UNIFORM_BUFFER,O+G,b.__data)):z.isMatrix3?(b.__data[0]=z.elements[0],b.__data[1]=z.elements[1],b.__data[2]=z.elements[2],b.__data[3]=0,b.__data[4]=z.elements[3],b.__data[5]=z.elements[4],b.__data[6]=z.elements[5],b.__data[7]=0,b.__data[8]=z.elements[6],b.__data[9]=z.elements[7],b.__data[10]=z.elements[8],b.__data[11]=0):(z.toArray(b.__data,G),G+=j.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,O,b.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(v,y,M,P){let A=v.value,E=y+"_"+M;if(P[E]===void 0)return typeof A=="number"||typeof A=="boolean"?P[E]=A:P[E]=A.clone(),!0;{let I=P[E];if(typeof A=="number"||typeof A=="boolean"){if(I!==A)return P[E]=A,!0}else if(I.equals(A)===!1)return I.copy(A),!0}return!1}function g(v){let y=v.uniforms,M=0,P=16;for(let E=0,I=y.length;E<I;E++){let F=Array.isArray(y[E])?y[E]:[y[E]];for(let _=0,b=F.length;_<b;_++){let O=F[_],k=Array.isArray(O.value)?O.value:[O.value];for(let G=0,q=k.length;G<q;G++){let z=k[G],j=x(z),W=M%P,ie=W%j.boundary,le=W+ie;M+=ie,le!==0&&P-le<j.storage&&(M+=P-le),O.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=M,M+=j.storage}}}let A=M%P;return A>0&&(M+=P-A),v.__size=M,v.__cache={},this}function x(v){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function p(v){let y=v.target;y.removeEventListener("dispose",p);let M=o.indexOf(y.__bindingPointIndex);o.splice(M,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function m(){for(let v in i)s.deleteBuffer(i[v]);o=[],i={},r={}}return{bind:l,update:c,dispose:m}}var fl=class{constructor(e={}){let{canvas:t=Pg(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let d=new Uint32Array(4),g=new Int32Array(4),x=null,p=null,m=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=wt,this.toneMapping=ns,this.toneMappingExposure=1;let y=this,M=!1,P=0,A=0,E=null,I=-1,F=null,_=new pt,b=new pt,O=null,k=new ce(0),G=0,q=t.width,z=t.height,j=1,W=null,ie=null,le=new pt(0,0,q,z),ge=new pt(0,0,q,z),Ze=!1,rt=new wo,Y=!1,Q=!1,xe=new Ee,oe=new Ee,Pe=new R,be=new pt,Ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ft=!1;function Qe(){return E===null?j:1}let L=n;function fn(w,N){return t.getContext(w,N)}try{let w={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r169"),t.addEventListener("webglcontextlost",$,!1),t.addEventListener("webglcontextrestored",de,!1),t.addEventListener("webglcontextcreationerror",me,!1),L===null){let N="webgl2";if(L=fn(N,w),L===null)throw fn(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let $e,nt,Ne,vt,Ue,C,S,B,Z,J,K,ve,se,ue,Je,ee,fe,Oe,Fe,ye,it,ze,ht,D;function ae(){$e=new V_(L),$e.init(),ze=new v1(L,$e),nt=new O_(L,$e,e,ze),Ne=new x1(L),nt.reverseDepthBuffer&&Ne.buffers.depth.setReversed(!0),vt=new X_(L),Ue=new s1,C=new _1(L,$e,Ne,Ue,nt,ze,vt),S=new k_(y),B=new H_(y),Z=new jg(L),ht=new N_(L,Z),J=new G_(L,Z,vt,ht),K=new Y_(L,J,Z,vt),Fe=new q_(L,nt,C),ee=new F_(Ue),ve=new i1(y,S,B,$e,nt,ht,ee),se=new w1(y,Ue),ue=new o1,Je=new f1($e),Oe=new D_(y,S,B,Ne,K,f,l),fe=new m1(y,K,nt),D=new E1(L,vt,nt,Ne),ye=new U_(L,$e,vt),it=new W_(L,$e,vt),vt.programs=ve.programs,y.capabilities=nt,y.extensions=$e,y.properties=Ue,y.renderLists=ue,y.shadowMap=fe,y.state=Ne,y.info=vt}ae();let X=new vu(y,L);this.xr=X,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let w=$e.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=$e.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(w){w!==void 0&&(j=w,this.setSize(q,z,!1))},this.getSize=function(w){return w.set(q,z)},this.setSize=function(w,N,H=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=w,z=N,t.width=Math.floor(w*j),t.height=Math.floor(N*j),H===!0&&(t.style.width=w+"px",t.style.height=N+"px"),this.setViewport(0,0,w,N)},this.getDrawingBufferSize=function(w){return w.set(q*j,z*j).floor()},this.setDrawingBufferSize=function(w,N,H){q=w,z=N,j=H,t.width=Math.floor(w*H),t.height=Math.floor(N*H),this.setViewport(0,0,w,N)},this.getCurrentViewport=function(w){return w.copy(_)},this.getViewport=function(w){return w.copy(le)},this.setViewport=function(w,N,H,V){w.isVector4?le.set(w.x,w.y,w.z,w.w):le.set(w,N,H,V),Ne.viewport(_.copy(le).multiplyScalar(j).round())},this.getScissor=function(w){return w.copy(ge)},this.setScissor=function(w,N,H,V){w.isVector4?ge.set(w.x,w.y,w.z,w.w):ge.set(w,N,H,V),Ne.scissor(b.copy(ge).multiplyScalar(j).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(w){Ne.setScissorTest(Ze=w)},this.setOpaqueSort=function(w){W=w},this.setTransparentSort=function(w){ie=w},this.getClearColor=function(w){return w.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor.apply(Oe,arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha.apply(Oe,arguments)},this.clear=function(w=!0,N=!0,H=!0){let V=0;if(w){let U=!1;if(E!==null){let ne=E.texture.format;U=ne===nf||ne===tf||ne===ef}if(U){let ne=E.texture.type,pe=ne===fi||ne===Ds||ne===bo||ne===is||ne===Ju||ne===ju,_e=Oe.getClearColor(),Me=Oe.getClearAlpha(),ke=_e.r,Be=_e.g,Se=_e.b;pe?(d[0]=ke,d[1]=Be,d[2]=Se,d[3]=Me,L.clearBufferuiv(L.COLOR,0,d)):(g[0]=ke,g[1]=Be,g[2]=Se,g[3]=Me,L.clearBufferiv(L.COLOR,0,g))}else V|=L.COLOR_BUFFER_BIT}N&&(V|=L.DEPTH_BUFFER_BIT,L.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),H&&(V|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",$,!1),t.removeEventListener("webglcontextrestored",de,!1),t.removeEventListener("webglcontextcreationerror",me,!1),ue.dispose(),Je.dispose(),Ue.dispose(),S.dispose(),B.dispose(),K.dispose(),ht.dispose(),D.dispose(),ve.dispose(),X.dispose(),X.removeEventListener("sessionstart",Td),X.removeEventListener("sessionend",wd),Ts.stop()};function $(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function de(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let w=vt.autoReset,N=fe.enabled,H=fe.autoUpdate,V=fe.needsUpdate,U=fe.type;ae(),vt.autoReset=w,fe.enabled=N,fe.autoUpdate=H,fe.needsUpdate=V,fe.type=U}function me(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function lt(w){let N=w.target;N.removeEventListener("dispose",lt),Xt(N)}function Xt(w){In(w),Ue.remove(w)}function In(w){let N=Ue.get(w).programs;N!==void 0&&(N.forEach(function(H){ve.releaseProgram(H)}),w.isShaderMaterial&&ve.releaseShaderCache(w))}this.renderBufferDirect=function(w,N,H,V,U,ne){N===null&&(N=Ge);let pe=U.isMesh&&U.matrixWorld.determinant()<0,_e=I0(w,N,H,V,U);Ne.setMaterial(V,pe);let Me=H.index,ke=1;if(V.wireframe===!0){if(Me=J.getWireframeAttribute(H),Me===void 0)return;ke=2}let Be=H.drawRange,Se=H.attributes.position,Mt=Be.start*ke,Dt=(Be.start+Be.count)*ke;ne!==null&&(Mt=Math.max(Mt,ne.start*ke),Dt=Math.min(Dt,(ne.start+ne.count)*ke)),Me!==null?(Mt=Math.max(Mt,0),Dt=Math.min(Dt,Me.count)):Se!=null&&(Mt=Math.max(Mt,0),Dt=Math.min(Dt,Se.count));let kt=Dt-Mt;if(kt<0||kt===1/0)return;ht.setup(U,V,_e,H,Me);let zn,xt=ye;if(Me!==null&&(zn=Z.get(Me),xt=it,xt.setIndex(zn)),U.isMesh)V.wireframe===!0?(Ne.setLineWidth(V.wireframeLinewidth*Qe()),xt.setMode(L.LINES)):xt.setMode(L.TRIANGLES);else if(U.isLine){let Te=V.linewidth;Te===void 0&&(Te=1),Ne.setLineWidth(Te*Qe()),U.isLineSegments?xt.setMode(L.LINES):U.isLineLoop?xt.setMode(L.LINE_LOOP):xt.setMode(L.LINE_STRIP)}else U.isPoints?xt.setMode(L.POINTS):U.isSprite&&xt.setMode(L.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)xt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if($e.get("WEBGL_multi_draw"))xt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{let Te=U._multiDrawStarts,dn=U._multiDrawCounts,yt=U._multiDrawCount,ri=Me?Z.get(Me).bytesPerElement:1,er=Ue.get(V).currentProgram.getUniforms();for(let Hn=0;Hn<yt;Hn++)er.setValue(L,"_gl_DrawID",Hn),xt.render(Te[Hn]/ri,dn[Hn])}else if(U.isInstancedMesh)xt.renderInstances(Mt,kt,U.count);else if(H.isInstancedBufferGeometry){let Te=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,dn=Math.min(H.instanceCount,Te);xt.renderInstances(Mt,kt,dn)}else xt.render(Mt,kt)};function dt(w,N,H){w.transparent===!0&&w.side===Pt&&w.forceSinglePass===!1?(w.side=gn,w.needsUpdate=!0,ma(w,N,H),w.side=An,w.needsUpdate=!0,ma(w,N,H),w.side=Pt):ma(w,N,H)}this.compile=function(w,N,H=null){H===null&&(H=w),p=Je.get(H),p.init(N),v.push(p),H.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),w!==H&&w.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights();let V=new Set;return w.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;let ne=U.material;if(ne)if(Array.isArray(ne))for(let pe=0;pe<ne.length;pe++){let _e=ne[pe];dt(_e,H,U),V.add(_e)}else dt(ne,H,U),V.add(ne)}),v.pop(),p=null,V},this.compileAsync=function(w,N,H=null){let V=this.compile(w,N,H);return new Promise(U=>{function ne(){if(V.forEach(function(pe){Ue.get(pe).currentProgram.isReady()&&V.delete(pe)}),V.size===0){U(w);return}setTimeout(ne,10)}$e.get("KHR_parallel_shader_compile")!==null?ne():setTimeout(ne,10)})};let Ln=null;function bi(w){Ln&&Ln(w)}function Td(){Ts.stop()}function wd(){Ts.start()}let Ts=new fm;Ts.setAnimationLoop(bi),typeof self!="undefined"&&Ts.setContext(self),this.setAnimationLoop=function(w){Ln=w,X.setAnimationLoop(w),w===null?Ts.stop():Ts.start()},X.addEventListener("sessionstart",Td),X.addEventListener("sessionend",wd),this.render=function(w,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(N),N=X.getCamera()),w.isScene===!0&&w.onBeforeRender(y,w,N,E),p=Je.get(w,v.length),p.init(N),v.push(p),oe.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),rt.setFromProjectionMatrix(oe),Q=this.localClippingEnabled,Y=ee.init(this.clippingPlanes,Q),x=ue.get(w,m.length),x.init(),m.push(x),X.enabled===!0&&X.isPresenting===!0){let ne=y.xr.getDepthSensingMesh();ne!==null&&Nc(ne,N,-1/0,y.sortObjects)}Nc(w,N,0,y.sortObjects),x.finish(),y.sortObjects===!0&&x.sort(W,ie),ft=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,ft&&Oe.addToRenderList(x,w),this.info.render.frame++,Y===!0&&ee.beginShadows();let H=p.state.shadowsArray;fe.render(H,w,N),Y===!0&&ee.endShadows(),this.info.autoReset===!0&&this.info.reset();let V=x.opaque,U=x.transmissive;if(p.setupLights(),N.isArrayCamera){let ne=N.cameras;if(U.length>0)for(let pe=0,_e=ne.length;pe<_e;pe++){let Me=ne[pe];Ad(V,U,w,Me)}ft&&Oe.render(w);for(let pe=0,_e=ne.length;pe<_e;pe++){let Me=ne[pe];Ed(x,w,Me,Me.viewport)}}else U.length>0&&Ad(V,U,w,N),ft&&Oe.render(w),Ed(x,w,N);E!==null&&(C.updateMultisampleRenderTarget(E),C.updateRenderTargetMipmap(E)),w.isScene===!0&&w.onAfterRender(y,w,N),ht.resetDefaultState(),I=-1,F=null,v.pop(),v.length>0?(p=v[v.length-1],Y===!0&&ee.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?x=m[m.length-1]:x=null};function Nc(w,N,H,V){if(w.visible===!1)return;if(w.layers.test(N.layers)){if(w.isGroup)H=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(N);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||rt.intersectsSprite(w)){V&&be.setFromMatrixPosition(w.matrixWorld).applyMatrix4(oe);let pe=K.update(w),_e=w.material;_e.visible&&x.push(w,pe,_e,H,be.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||rt.intersectsObject(w))){let pe=K.update(w),_e=w.material;if(V&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),be.copy(w.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),be.copy(pe.boundingSphere.center)),be.applyMatrix4(w.matrixWorld).applyMatrix4(oe)),Array.isArray(_e)){let Me=pe.groups;for(let ke=0,Be=Me.length;ke<Be;ke++){let Se=Me[ke],Mt=_e[Se.materialIndex];Mt&&Mt.visible&&x.push(w,pe,Mt,H,be.z,Se)}}else _e.visible&&x.push(w,pe,_e,H,be.z,null)}}let ne=w.children;for(let pe=0,_e=ne.length;pe<_e;pe++)Nc(ne[pe],N,H,V)}function Ed(w,N,H,V){let U=w.opaque,ne=w.transmissive,pe=w.transparent;p.setupLightsView(H),Y===!0&&ee.setGlobalState(y.clippingPlanes,H),V&&Ne.viewport(_.copy(V)),U.length>0&&pa(U,N,H),ne.length>0&&pa(ne,N,H),pe.length>0&&pa(pe,N,H),Ne.buffers.depth.setTest(!0),Ne.buffers.depth.setMask(!0),Ne.buffers.color.setMask(!0),Ne.setPolygonOffset(!1)}function Ad(w,N,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[V.id]===void 0&&(p.state.transmissionRenderTarget[V.id]=new Yt(1,1,{generateMipmaps:!0,type:$e.has("EXT_color_buffer_half_float")||$e.has("EXT_color_buffer_float")?yn:fi,minFilter:_i,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));let ne=p.state.transmissionRenderTarget[V.id],pe=V.viewport||_;ne.setSize(pe.z,pe.w);let _e=y.getRenderTarget();y.setRenderTarget(ne),y.getClearColor(k),G=y.getClearAlpha(),G<1&&y.setClearColor(16777215,.5),y.clear(),ft&&Oe.render(H);let Me=y.toneMapping;y.toneMapping=ns;let ke=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),p.setupLightsView(V),Y===!0&&ee.setGlobalState(y.clippingPlanes,V),pa(w,H,V),C.updateMultisampleRenderTarget(ne),C.updateRenderTargetMipmap(ne),$e.has("WEBGL_multisampled_render_to_texture")===!1){let Be=!1;for(let Se=0,Mt=N.length;Se<Mt;Se++){let Dt=N[Se],kt=Dt.object,zn=Dt.geometry,xt=Dt.material,Te=Dt.group;if(xt.side===Pt&&kt.layers.test(V.layers)){let dn=xt.side;xt.side=gn,xt.needsUpdate=!0,Rd(kt,H,V,zn,xt,Te),xt.side=dn,xt.needsUpdate=!0,Be=!0}}Be===!0&&(C.updateMultisampleRenderTarget(ne),C.updateRenderTargetMipmap(ne))}y.setRenderTarget(_e),y.setClearColor(k,G),ke!==void 0&&(V.viewport=ke),y.toneMapping=Me}function pa(w,N,H){let V=N.isScene===!0?N.overrideMaterial:null;for(let U=0,ne=w.length;U<ne;U++){let pe=w[U],_e=pe.object,Me=pe.geometry,ke=V===null?pe.material:V,Be=pe.group;_e.layers.test(H.layers)&&Rd(_e,N,H,Me,ke,Be)}}function Rd(w,N,H,V,U,ne){w.onBeforeRender(y,N,H,V,U,ne),w.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),U.onBeforeRender(y,N,H,V,w,ne),U.transparent===!0&&U.side===Pt&&U.forceSinglePass===!1?(U.side=gn,U.needsUpdate=!0,y.renderBufferDirect(H,N,V,U,w,ne),U.side=An,U.needsUpdate=!0,y.renderBufferDirect(H,N,V,U,w,ne),U.side=Pt):y.renderBufferDirect(H,N,V,U,w,ne),w.onAfterRender(y,N,H,V,U,ne)}function ma(w,N,H){N.isScene!==!0&&(N=Ge);let V=Ue.get(w),U=p.state.lights,ne=p.state.shadowsArray,pe=U.state.version,_e=ve.getParameters(w,U.state,ne,N,H),Me=ve.getProgramCacheKey(_e),ke=V.programs;V.environment=w.isMeshStandardMaterial?N.environment:null,V.fog=N.fog,V.envMap=(w.isMeshStandardMaterial?B:S).get(w.envMap||V.environment),V.envMapRotation=V.environment!==null&&w.envMap===null?N.environmentRotation:w.envMapRotation,ke===void 0&&(w.addEventListener("dispose",lt),ke=new Map,V.programs=ke);let Be=ke.get(Me);if(Be!==void 0){if(V.currentProgram===Be&&V.lightsStateVersion===pe)return Pd(w,_e),Be}else _e.uniforms=ve.getUniforms(w),w.onBeforeCompile(_e,y),Be=ve.acquireProgram(_e,Me),ke.set(Me,Be),V.uniforms=_e.uniforms;let Se=V.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Se.clippingPlanes=ee.uniform),Pd(w,_e),V.needsLights=D0(w),V.lightsStateVersion=pe,V.needsLights&&(Se.ambientLightColor.value=U.state.ambient,Se.lightProbe.value=U.state.probe,Se.directionalLights.value=U.state.directional,Se.directionalLightShadows.value=U.state.directionalShadow,Se.spotLights.value=U.state.spot,Se.spotLightShadows.value=U.state.spotShadow,Se.rectAreaLights.value=U.state.rectArea,Se.ltc_1.value=U.state.rectAreaLTC1,Se.ltc_2.value=U.state.rectAreaLTC2,Se.pointLights.value=U.state.point,Se.pointLightShadows.value=U.state.pointShadow,Se.hemisphereLights.value=U.state.hemi,Se.directionalShadowMap.value=U.state.directionalShadowMap,Se.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Se.spotShadowMap.value=U.state.spotShadowMap,Se.spotLightMatrix.value=U.state.spotLightMatrix,Se.spotLightMap.value=U.state.spotLightMap,Se.pointShadowMap.value=U.state.pointShadowMap,Se.pointShadowMatrix.value=U.state.pointShadowMatrix),V.currentProgram=Be,V.uniformsList=null,Be}function Cd(w){if(w.uniformsList===null){let N=w.currentProgram.getUniforms();w.uniformsList=Er.seqWithValue(N.seq,w.uniforms)}return w.uniformsList}function Pd(w,N){let H=Ue.get(w);H.outputColorSpace=N.outputColorSpace,H.batching=N.batching,H.batchingColor=N.batchingColor,H.instancing=N.instancing,H.instancingColor=N.instancingColor,H.instancingMorph=N.instancingMorph,H.skinning=N.skinning,H.morphTargets=N.morphTargets,H.morphNormals=N.morphNormals,H.morphColors=N.morphColors,H.morphTargetsCount=N.morphTargetsCount,H.numClippingPlanes=N.numClippingPlanes,H.numIntersection=N.numClipIntersection,H.vertexAlphas=N.vertexAlphas,H.vertexTangents=N.vertexTangents,H.toneMapping=N.toneMapping}function I0(w,N,H,V,U){N.isScene!==!0&&(N=Ge),C.resetTextureUnits();let ne=N.fog,pe=V.isMeshStandardMaterial?N.environment:null,_e=E===null?y.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Zt,Me=(V.isMeshStandardMaterial?B:S).get(V.envMap||pe),ke=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Be=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Se=!!H.morphAttributes.position,Mt=!!H.morphAttributes.normal,Dt=!!H.morphAttributes.color,kt=ns;V.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(kt=y.toneMapping);let zn=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,xt=zn!==void 0?zn.length:0,Te=Ue.get(V),dn=p.state.lights;if(Y===!0&&(Q===!0||w!==F)){let qn=w===F&&V.id===I;ee.setState(V,w,qn)}let yt=!1;V.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==dn.state.version||Te.outputColorSpace!==_e||U.isBatchedMesh&&Te.batching===!1||!U.isBatchedMesh&&Te.batching===!0||U.isBatchedMesh&&Te.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Te.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Te.instancing===!1||!U.isInstancedMesh&&Te.instancing===!0||U.isSkinnedMesh&&Te.skinning===!1||!U.isSkinnedMesh&&Te.skinning===!0||U.isInstancedMesh&&Te.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Te.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Te.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Te.instancingMorph===!1&&U.morphTexture!==null||Te.envMap!==Me||V.fog===!0&&Te.fog!==ne||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==ee.numPlanes||Te.numIntersection!==ee.numIntersection)||Te.vertexAlphas!==ke||Te.vertexTangents!==Be||Te.morphTargets!==Se||Te.morphNormals!==Mt||Te.morphColors!==Dt||Te.toneMapping!==kt||Te.morphTargetsCount!==xt)&&(yt=!0):(yt=!0,Te.__version=V.version);let ri=Te.currentProgram;yt===!0&&(ri=ma(V,N,U));let er=!1,Hn=!1,Uc=!1,Ht=ri.getUniforms(),Yi=Te.uniforms;if(Ne.useProgram(ri.program)&&(er=!0,Hn=!0,Uc=!0),V.id!==I&&(I=V.id,Hn=!0),er||F!==w){nt.reverseDepthBuffer?(xe.copy(w.projectionMatrix),Lg(xe),Dg(xe),Ht.setValue(L,"projectionMatrix",xe)):Ht.setValue(L,"projectionMatrix",w.projectionMatrix),Ht.setValue(L,"viewMatrix",w.matrixWorldInverse);let qn=Ht.map.cameraPosition;qn!==void 0&&qn.setValue(L,Pe.setFromMatrixPosition(w.matrixWorld)),nt.logarithmicDepthBuffer&&Ht.setValue(L,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Ht.setValue(L,"isOrthographic",w.isOrthographicCamera===!0),F!==w&&(F=w,Hn=!0,Uc=!0)}if(U.isSkinnedMesh){Ht.setOptional(L,U,"bindMatrix"),Ht.setOptional(L,U,"bindMatrixInverse");let qn=U.skeleton;qn&&(qn.boneTexture===null&&qn.computeBoneTexture(),Ht.setValue(L,"boneTexture",qn.boneTexture,C))}U.isBatchedMesh&&(Ht.setOptional(L,U,"batchingTexture"),Ht.setValue(L,"batchingTexture",U._matricesTexture,C),Ht.setOptional(L,U,"batchingIdTexture"),Ht.setValue(L,"batchingIdTexture",U._indirectTexture,C),Ht.setOptional(L,U,"batchingColorTexture"),U._colorsTexture!==null&&Ht.setValue(L,"batchingColorTexture",U._colorsTexture,C));let Oc=H.morphAttributes;if((Oc.position!==void 0||Oc.normal!==void 0||Oc.color!==void 0)&&Fe.update(U,H,ri),(Hn||Te.receiveShadow!==U.receiveShadow)&&(Te.receiveShadow=U.receiveShadow,Ht.setValue(L,"receiveShadow",U.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Yi.envMap.value=Me,Yi.flipEnvMap.value=Me.isCubeTexture&&Me.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&N.environment!==null&&(Yi.envMapIntensity.value=N.environmentIntensity),Hn&&(Ht.setValue(L,"toneMappingExposure",y.toneMappingExposure),Te.needsLights&&L0(Yi,Uc),ne&&V.fog===!0&&se.refreshFogUniforms(Yi,ne),se.refreshMaterialUniforms(Yi,V,j,z,p.state.transmissionRenderTarget[w.id]),Er.upload(L,Cd(Te),Yi,C)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Er.upload(L,Cd(Te),Yi,C),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Ht.setValue(L,"center",U.center),Ht.setValue(L,"modelViewMatrix",U.modelViewMatrix),Ht.setValue(L,"normalMatrix",U.normalMatrix),Ht.setValue(L,"modelMatrix",U.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let qn=V.uniformsGroups;for(let Fc=0,N0=qn.length;Fc<N0;Fc++){let Id=qn[Fc];D.update(Id,ri),D.bind(Id,ri)}}return ri}function L0(w,N){w.ambientLightColor.needsUpdate=N,w.lightProbe.needsUpdate=N,w.directionalLights.needsUpdate=N,w.directionalLightShadows.needsUpdate=N,w.pointLights.needsUpdate=N,w.pointLightShadows.needsUpdate=N,w.spotLights.needsUpdate=N,w.spotLightShadows.needsUpdate=N,w.rectAreaLights.needsUpdate=N,w.hemisphereLights.needsUpdate=N}function D0(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(w,N,H){Ue.get(w.texture).__webglTexture=N,Ue.get(w.depthTexture).__webglTexture=H;let V=Ue.get(w);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=H===void 0,V.__autoAllocateDepthBuffer||$e.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,N){let H=Ue.get(w);H.__webglFramebuffer=N,H.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(w,N=0,H=0){E=w,P=N,A=H;let V=!0,U=null,ne=!1,pe=!1;if(w){let Me=Ue.get(w);if(Me.__useDefaultFramebuffer!==void 0)Ne.bindFramebuffer(L.FRAMEBUFFER,null),V=!1;else if(Me.__webglFramebuffer===void 0)C.setupRenderTarget(w);else if(Me.__hasExternalTextures)C.rebindTextures(w,Ue.get(w.texture).__webglTexture,Ue.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Se=w.depthTexture;if(Me.__boundDepthTexture!==Se){if(Se!==null&&Ue.has(Se)&&(w.width!==Se.image.width||w.height!==Se.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(w)}}let ke=w.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(pe=!0);let Be=Ue.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Be[N])?U=Be[N][H]:U=Be[N],ne=!0):w.samples>0&&C.useMultisampledRTT(w)===!1?U=Ue.get(w).__webglMultisampledFramebuffer:Array.isArray(Be)?U=Be[H]:U=Be,_.copy(w.viewport),b.copy(w.scissor),O=w.scissorTest}else _.copy(le).multiplyScalar(j).floor(),b.copy(ge).multiplyScalar(j).floor(),O=Ze;if(Ne.bindFramebuffer(L.FRAMEBUFFER,U)&&V&&Ne.drawBuffers(w,U),Ne.viewport(_),Ne.scissor(b),Ne.setScissorTest(O),ne){let Me=Ue.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+N,Me.__webglTexture,H)}else if(pe){let Me=Ue.get(w.texture),ke=N||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Me.__webglTexture,H||0,ke)}I=-1},this.readRenderTargetPixels=function(w,N,H,V,U,ne,pe){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=Ue.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&pe!==void 0&&(_e=_e[pe]),_e){Ne.bindFramebuffer(L.FRAMEBUFFER,_e);try{let Me=w.texture,ke=Me.format,Be=Me.type;if(!nt.textureFormatReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!nt.textureTypeReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=w.width-V&&H>=0&&H<=w.height-U&&L.readPixels(N,H,V,U,ze.convert(ke),ze.convert(Be),ne)}finally{let Me=E!==null?Ue.get(E).__webglFramebuffer:null;Ne.bindFramebuffer(L.FRAMEBUFFER,Me)}}},this.readRenderTargetPixelsAsync=async function(w,N,H,V,U,ne,pe){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=Ue.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&pe!==void 0&&(_e=_e[pe]),_e){let Me=w.texture,ke=Me.format,Be=Me.type;if(!nt.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!nt.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=w.width-V&&H>=0&&H<=w.height-U){Ne.bindFramebuffer(L.FRAMEBUFFER,_e);let Se=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Se),L.bufferData(L.PIXEL_PACK_BUFFER,ne.byteLength,L.STREAM_READ),L.readPixels(N,H,V,U,ze.convert(ke),ze.convert(Be),0);let Mt=E!==null?Ue.get(E).__webglFramebuffer:null;Ne.bindFramebuffer(L.FRAMEBUFFER,Mt);let Dt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Ig(L,Dt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Se),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ne),L.deleteBuffer(Se),L.deleteSync(Dt),ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,N=null,H=0){w.isTexture!==!0&&(Qa("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,w=arguments[1]);let V=Math.pow(2,-H),U=Math.floor(w.image.width*V),ne=Math.floor(w.image.height*V),pe=N!==null?N.x:0,_e=N!==null?N.y:0;C.setTexture2D(w,0),L.copyTexSubImage2D(L.TEXTURE_2D,H,0,0,pe,_e,U,ne),Ne.unbindTexture()},this.copyTextureToTexture=function(w,N,H=null,V=null,U=0){w.isTexture!==!0&&(Qa("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,w=arguments[1],N=arguments[2],U=arguments[3]||0,H=null);let ne,pe,_e,Me,ke,Be;H!==null?(ne=H.max.x-H.min.x,pe=H.max.y-H.min.y,_e=H.min.x,Me=H.min.y):(ne=w.image.width,pe=w.image.height,_e=0,Me=0),V!==null?(ke=V.x,Be=V.y):(ke=0,Be=0);let Se=ze.convert(N.format),Mt=ze.convert(N.type);C.setTexture2D(N,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,N.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,N.unpackAlignment);let Dt=L.getParameter(L.UNPACK_ROW_LENGTH),kt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),zn=L.getParameter(L.UNPACK_SKIP_PIXELS),xt=L.getParameter(L.UNPACK_SKIP_ROWS),Te=L.getParameter(L.UNPACK_SKIP_IMAGES),dn=w.isCompressedTexture?w.mipmaps[U]:w.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,dn.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,dn.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,_e),L.pixelStorei(L.UNPACK_SKIP_ROWS,Me),w.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,U,ke,Be,ne,pe,Se,Mt,dn.data):w.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,U,ke,Be,dn.width,dn.height,Se,dn.data):L.texSubImage2D(L.TEXTURE_2D,U,ke,Be,ne,pe,Se,Mt,dn),L.pixelStorei(L.UNPACK_ROW_LENGTH,Dt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,kt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,zn),L.pixelStorei(L.UNPACK_SKIP_ROWS,xt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Te),U===0&&N.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),Ne.unbindTexture()},this.copyTextureToTexture3D=function(w,N,H=null,V=null,U=0){w.isTexture!==!0&&(Qa("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,V=arguments[1]||null,w=arguments[2],N=arguments[3],U=arguments[4]||0);let ne,pe,_e,Me,ke,Be,Se,Mt,Dt,kt=w.isCompressedTexture?w.mipmaps[U]:w.image;H!==null?(ne=H.max.x-H.min.x,pe=H.max.y-H.min.y,_e=H.max.z-H.min.z,Me=H.min.x,ke=H.min.y,Be=H.min.z):(ne=kt.width,pe=kt.height,_e=kt.depth,Me=0,ke=0,Be=0),V!==null?(Se=V.x,Mt=V.y,Dt=V.z):(Se=0,Mt=0,Dt=0);let zn=ze.convert(N.format),xt=ze.convert(N.type),Te;if(N.isData3DTexture)C.setTexture3D(N,0),Te=L.TEXTURE_3D;else if(N.isDataArrayTexture||N.isCompressedArrayTexture)C.setTexture2DArray(N,0),Te=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,N.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,N.unpackAlignment);let dn=L.getParameter(L.UNPACK_ROW_LENGTH),yt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),ri=L.getParameter(L.UNPACK_SKIP_PIXELS),er=L.getParameter(L.UNPACK_SKIP_ROWS),Hn=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,kt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,kt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Me),L.pixelStorei(L.UNPACK_SKIP_ROWS,ke),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Be),w.isDataTexture||w.isData3DTexture?L.texSubImage3D(Te,U,Se,Mt,Dt,ne,pe,_e,zn,xt,kt.data):N.isCompressedArrayTexture?L.compressedTexSubImage3D(Te,U,Se,Mt,Dt,ne,pe,_e,zn,kt.data):L.texSubImage3D(Te,U,Se,Mt,Dt,ne,pe,_e,zn,xt,kt),L.pixelStorei(L.UNPACK_ROW_LENGTH,dn),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,yt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ri),L.pixelStorei(L.UNPACK_SKIP_ROWS,er),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Hn),U===0&&N.generateMipmaps&&L.generateMipmap(Te),Ne.unbindTexture()},this.initRenderTarget=function(w){Ue.get(w).__webglFramebuffer===void 0&&C.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?C.setTextureCube(w,0):w.isData3DTexture?C.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?C.setTexture2DArray(w,0):C.setTexture2D(w,0),Ne.unbindTexture()},this.resetState=function(){P=0,A=0,E=null,Ne.reset(),ht.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===af?"display-p3":"srgb",t.unpackColorSpace=et.workingColorSpace===kl?"display-p3":"srgb"}};var Eo=class s{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ce(e),this.near=t,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ao=class extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $n,this.environmentIntensity=1,this.environmentRotation=new $n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Or=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=su,this.updateRanges=[],this.version=0,this.uuid=ui()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ui()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ui()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},wn=new R,Ns=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)wn.fromBufferAttribute(this,t),wn.applyMatrix4(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)wn.fromBufferAttribute(this,t),wn.applyNormalMatrix(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)wn.fromBufferAttribute(this,t),wn.transformDirection(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ci(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=St(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ci(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ci(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ci(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ci(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),n=St(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),n=St(n,this.array),i=St(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),n=St(n,this.array),i=St(i,this.array),r=St(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Ft(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Wn=class extends Cn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ce(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},mr,ao=new R,gr=new R,xr=new R,yr=new te,lo=new te,xm=new Ee,Oa=new R,co=new R,Fa=new R,wp=new te,fh=new te,Ep=new te,Jn=class extends bt{constructor(e=new Wn){if(super(),this.isSprite=!0,this.type="Sprite",mr===void 0){mr=new Tt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Or(t,5);mr.setIndex([0,1,2,0,2,3]),mr.setAttribute("position",new Ns(n,3,0,!1)),mr.setAttribute("uv",new Ns(n,2,3,!1))}this.geometry=mr,this.material=e,this.center=new te(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),gr.setFromMatrixScale(this.matrixWorld),xm.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),xr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&gr.multiplyScalar(-xr.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let o=this.center;ka(Oa.set(-.5,-.5,0),xr,o,gr,i,r),ka(co.set(.5,-.5,0),xr,o,gr,i,r),ka(Fa.set(.5,.5,0),xr,o,gr,i,r),wp.set(0,0),fh.set(1,0),Ep.set(1,1);let a=e.ray.intersectTriangle(Oa,co,Fa,!1,ao);if(a===null&&(ka(co.set(-.5,.5,0),xr,o,gr,i,r),fh.set(0,1),a=e.ray.intersectTriangle(Oa,Fa,co,!1,ao),a===null))return;let l=e.ray.origin.distanceTo(ao);l<e.near||l>e.far||t.push({distance:l,point:ao.clone(),uv:es.getInterpolation(ao,Oa,co,Fa,wp,fh,Ep,new te),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function ka(s,e,t,n,i,r){yr.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(lo.x=r*yr.x-i*yr.y,lo.y=i*yr.x+r*yr.y):lo.copy(yr),s.copy(e),s.x+=lo.x,s.y+=lo.y,s.applyMatrix4(xm)}var Ba=new R,Ap=new R,Ro=class extends bt{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);let t=e.levels;for(let n=0,i=t.length;n<i;n++){let r=t[n];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);let i=this.levels,r;for(r=0;r<i.length&&!(t<i[r].distance);r++);return i.splice(r,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}removeLevel(e){let t=this.levels;for(let n=0;n<t.length;n++)if(t[n].distance===e){let i=t.splice(n,1);return this.remove(i[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){let t=this.levels;if(t.length>0){let n,i;for(n=1,i=t.length;n<i;n++){let r=t[n].distance;if(t[n].object.visible&&(r-=r*t[n].hysteresis),e<r)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){Ba.setFromMatrixPosition(this.matrixWorld);let i=e.ray.origin.distanceTo(Ba);this.getObjectForDistance(i).raycast(e,t)}}update(e){let t=this.levels;if(t.length>1){Ba.setFromMatrixPosition(e.matrixWorld),Ap.setFromMatrixPosition(this.matrixWorld);let n=Ba.distanceTo(Ap)/e.zoom;t[0].object.visible=!0;let i,r;for(i=1,r=t.length;i<r;i++){let o=t[i].distance;if(t[i].object.visible&&(o-=o*t[i].hysteresis),n>=o)t[i-1].object.visible=!1,t[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<r;i++)t[i].object.visible=!1}}toJSON(e){let t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];let n=this.levels;for(let i=0,r=n.length;i<r;i++){let o=n[i];t.object.levels.push({object:o.object.uuid,distance:o.distance,hysteresis:o.hysteresis})}return t}},Rp=new R,Cp=new pt,Pp=new pt,A1=new R,Ip=new Ee,za=new R,dh=new Rn,Lp=new Ee,ph=new Dr,Fr=class extends Ie{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Ud,this.bindMatrix=new Ee,this.bindMatrixInverse=new Ee,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Zn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,za),this.boundingBox.expandByPoint(za)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Rn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,za),this.boundingSphere.expandByPoint(za)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),dh.copy(this.boundingSphere),dh.applyMatrix4(i),e.ray.intersectsSphere(dh)!==!1&&(Lp.copy(i).invert(),ph.copy(e.ray).applyMatrix4(Lp),!(this.boundingBox!==null&&ph.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ph)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new pt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Ud?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===eg?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;Cp.fromBufferAttribute(i.attributes.skinIndex,e),Pp.fromBufferAttribute(i.attributes.skinWeight,e),Rp.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=Pp.getComponent(r);if(o!==0){let a=Cp.getComponent(r);Ip.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(A1.copy(Rp).applyMatrix4(Ip),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},Co=class extends bt{constructor(){super(),this.isBone=!0,this.type="Bone"}},as=class extends hn{constructor(e=null,t=1,n=1,i,r,o,a,l,c=Qt,h=Qt,u,f){super(null,o,a,l,c,h,i,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Dp=new Ee,R1=new Ee,dl=class s{constructor(e=[],t=[]){this.uuid=ui(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ee)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ee;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:R1;Dp.multiplyMatrices(a,t[r]),Dp.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new as(t,e,e,Nn,hi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Co),this.bones.push(o),this.boneInverses.push(new Ee().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let o=t[i];e.bones.push(o.uuid);let a=n[i];e.boneInverses.push(a.toArray())}return e}},Us=class extends Ft{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},_r=new Ee,Np=new Ee,Ha=[],Up=new Zn,C1=new Ee,ho=new Ie,uo=new Rn,ls=class extends Ie{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Us(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,C1)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Zn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,_r),Up.copy(e.boundingBox).applyMatrix4(_r),this.boundingBox.union(Up)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Rn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,_r),uo.copy(e.boundingSphere).applyMatrix4(_r),this.boundingSphere.union(uo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(ho.geometry=this.geometry,ho.material=this.material,ho.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),uo.copy(this.boundingSphere),uo.applyMatrix4(n),e.ray.intersectsSphere(uo)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,_r),Np.multiplyMatrices(n,_r),ho.matrixWorld=Np,ho.raycast(e,Ha);for(let o=0,a=Ha.length;o<a;o++){let l=Ha[o];l.instanceId=r,l.object=this,t.push(l)}Ha.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Us(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new as(new Float32Array(i*this.count),i,this.count,Qu,hi));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Po=class extends Cn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ce(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},pl=new R,ml=new R,Op=new Ee,fo=new Dr,Va=new Rn,mh=new R,Fp=new R,kr=class extends bt{constructor(e=new Tt,t=new Po){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)pl.fromBufferAttribute(t,i-1),ml.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=pl.distanceTo(ml);e.setAttribute("lineDistance",new He(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Va.copy(n.boundingSphere),Va.applyMatrix4(i),Va.radius+=r,e.ray.intersectsSphere(Va)===!1)return;Op.copy(i).invert(),fo.copy(e.ray).applyMatrix4(Op);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=d,p=g-1;x<p;x+=c){let m=h.getX(x),v=h.getX(x+1),y=Ga(this,e,fo,l,m,v);y&&t.push(y)}if(this.isLineLoop){let x=h.getX(g-1),p=h.getX(d),m=Ga(this,e,fo,l,x,p);m&&t.push(m)}}else{let d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let x=d,p=g-1;x<p;x+=c){let m=Ga(this,e,fo,l,x,x+1);m&&t.push(m)}if(this.isLineLoop){let x=Ga(this,e,fo,l,g-1,d);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ga(s,e,t,n,i,r){let o=s.geometry.attributes.position;if(pl.fromBufferAttribute(o,i),ml.fromBufferAttribute(o,r),t.distanceSqToSegment(pl,ml,mh,Fp)>n)return;mh.applyMatrix4(s.matrixWorld);let l=e.ray.origin.distanceTo(mh);if(!(l<e.near||l>e.far))return{distance:l,point:Fp.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}var kp=new R,Bp=new R,gl=class extends kr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)kp.fromBufferAttribute(t,i),Bp.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+kp.distanceTo(Bp);e.setAttribute("lineDistance",new He(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},xl=class extends kr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Io=class extends Cn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},zp=new Ee,Mu=new Dr,Wa=new Rn,Xa=new R,yl=class extends bt{constructor(e=new Tt,t=new Io){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wa.copy(n.boundingSphere),Wa.applyMatrix4(i),Wa.radius+=r,e.ray.intersectsSphere(Wa)===!1)return;zp.copy(i).invert(),Mu.copy(e.ray).applyMatrix4(zp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,x=d;g<x;g++){let p=c.getX(g);Xa.fromBufferAttribute(u,p),Hp(Xa,p,l,i,e,t,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=f,x=d;g<x;g++)Xa.fromBufferAttribute(u,g),Hp(Xa,g,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Hp(s,e,t,n,i,r,o){let a=Mu.distanceSqToPoint(s);if(a<t){let l=new R;Mu.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var vi=class extends hn{constructor(e,t,n,i,r,o,a,l,c){super(e,t,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},pi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),i=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);let h=n[i],f=n[i+1]-h,d=(o-h)/f;return(i+d)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),l=t||(o.isVector2?new te:new R);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new R,i=[],r=[],o=[],a=new R,l=new Ee;for(let d=0;d<=e;d++){let g=d/e;i[d]=this.getTangentAt(g,new R)}r[0]=new R,o[0]=new R;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(an(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(i[d],r[d])}if(t===!0){let d=Math.acos(an(r[0].dot(r[e]),-1,1));d/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],d*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},_l=class extends pi{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new te){let n=t,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Su=class extends _l{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function hf(){let s=0,e=0,t=0,n=0;function i(r,o,a,l){s=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,i(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return s+e*r+t*o+n*a}}}var qa=new R,gh=new hf,xh=new hf,yh=new hf,Lo=class extends pi{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new R){let n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(qa.subVectors(i[0],i[1]).add(i[0]),c=qa);let u=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(qa.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=qa),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),g<1e-4&&(g=x),p<1e-4&&(p=x),gh.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,x,p),xh.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,x,p),yh.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,x,p)}else this.curveType==="catmullrom"&&(gh.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),xh.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),yh.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(gh.calc(l),xh.calc(l),yh.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new R().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Vp(s,e,t,n,i){let r=(n-e)*.5,o=(i-t)*.5,a=s*s,l=s*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*s+t}function P1(s,e){let t=1-s;return t*t*e}function I1(s,e){return 2*(1-s)*s*e}function L1(s,e){return s*s*e}function vo(s,e,t,n){return P1(s,e)+I1(s,t)+L1(s,n)}function D1(s,e){let t=1-s;return t*t*t*e}function N1(s,e){let t=1-s;return 3*t*t*s*e}function U1(s,e){return 3*(1-s)*s*s*e}function O1(s,e){return s*s*s*e}function Mo(s,e,t,n,i){return D1(s,e)+N1(s,t)+U1(s,n)+O1(s,i)}var bu=class extends pi{constructor(e=new te,t=new te,n=new te,i=new te){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new te){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Mo(e,i.x,r.x,o.x,a.x),Mo(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Tu=class extends pi{constructor(e=new R,t=new R,n=new R,i=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new R){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Mo(e,i.x,r.x,o.x,a.x),Mo(e,i.y,r.y,o.y,a.y),Mo(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},wu=class extends pi{constructor(e=new te,t=new te){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new te){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new te){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Eu=class extends pi{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Au=class extends pi{constructor(e=new te,t=new te,n=new te){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new te){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(vo(e,i.x,r.x,o.x),vo(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},vl=class extends pi{constructor(e=new R,t=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new R){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(vo(e,i.x,r.x,o.x),vo(e,i.y,r.y,o.y),vo(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ru=class extends pi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new te){let n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(Vp(a,l.x,c.x,h.x,u.x),Vp(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new te().fromArray(i))}return this}},F1=Object.freeze({__proto__:null,ArcCurve:Su,CatmullRomCurve3:Lo,CubicBezierCurve:bu,CubicBezierCurve3:Tu,EllipseCurve:_l,LineCurve:wu,LineCurve3:Eu,QuadraticBezierCurve:Au,QuadraticBezierCurve3:vl,SplineCurve:Ru});var Do=class s extends Tt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new R,h=new te;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){let d=n+u/t*i;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new He(o,3)),this.setAttribute("normal",new He(a,3)),this.setAttribute("uv",new He(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},No=class s extends Tt{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],f=[],d=[],g=0,x=[],p=n/2,m=0;v(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new He(u,3)),this.setAttribute("normal",new He(f,3)),this.setAttribute("uv",new He(d,2));function v(){let M=new R,P=new R,A=0,E=(t-e)/n;for(let I=0;I<=r;I++){let F=[],_=I/r,b=_*(t-e)+e;for(let O=0;O<=i;O++){let k=O/i,G=k*l+a,q=Math.sin(G),z=Math.cos(G);P.x=b*q,P.y=-_*n+p,P.z=b*z,u.push(P.x,P.y,P.z),M.set(q,E,z).normalize(),f.push(M.x,M.y,M.z),d.push(k,1-_),F.push(g++)}x.push(F)}for(let I=0;I<i;I++)for(let F=0;F<r;F++){let _=x[F][I],b=x[F+1][I],O=x[F+1][I+1],k=x[F][I+1];e>0&&(h.push(_,b,k),A+=3),t>0&&(h.push(b,O,k),A+=3)}c.addGroup(m,A,0),m+=A}function y(M){let P=g,A=new te,E=new R,I=0,F=M===!0?e:t,_=M===!0?1:-1;for(let O=1;O<=i;O++)u.push(0,p*_,0),f.push(0,_,0),d.push(.5,.5),g++;let b=g;for(let O=0;O<=i;O++){let G=O/i*l+a,q=Math.cos(G),z=Math.sin(G);E.x=F*z,E.y=p*_,E.z=F*q,u.push(E.x,E.y,E.z),f.push(0,_,0),A.x=q*.5+.5,A.y=z*.5*_+.5,d.push(A.x,A.y),g++}for(let O=0;O<i;O++){let k=P+O,G=b+O;M===!0?h.push(G,G+1,k):h.push(G+1,G,k),I+=3}c.addGroup(m,I,M===!0?1:2),m+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Cu=class s extends Tt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let r=[],o=[];a(i),c(n),h(),this.setAttribute("position",new He(r,3)),this.setAttribute("normal",new He(r.slice(),3)),this.setAttribute("uv",new He(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let y=new R,M=new R,P=new R;for(let A=0;A<t.length;A+=3)d(t[A+0],y),d(t[A+1],M),d(t[A+2],P),l(y,M,P,v)}function l(v,y,M,P){let A=P+1,E=[];for(let I=0;I<=A;I++){E[I]=[];let F=v.clone().lerp(M,I/A),_=y.clone().lerp(M,I/A),b=A-I;for(let O=0;O<=b;O++)O===0&&I===A?E[I][O]=F:E[I][O]=F.clone().lerp(_,O/b)}for(let I=0;I<A;I++)for(let F=0;F<2*(A-I)-1;F++){let _=Math.floor(F/2);F%2===0?(f(E[I][_+1]),f(E[I+1][_]),f(E[I][_])):(f(E[I][_+1]),f(E[I+1][_+1]),f(E[I+1][_]))}}function c(v){let y=new R;for(let M=0;M<r.length;M+=3)y.x=r[M+0],y.y=r[M+1],y.z=r[M+2],y.normalize().multiplyScalar(v),r[M+0]=y.x,r[M+1]=y.y,r[M+2]=y.z}function h(){let v=new R;for(let y=0;y<r.length;y+=3){v.x=r[y+0],v.y=r[y+1],v.z=r[y+2];let M=p(v)/2/Math.PI+.5,P=m(v)/Math.PI+.5;o.push(M,1-P)}g(),u()}function u(){for(let v=0;v<o.length;v+=6){let y=o[v+0],M=o[v+2],P=o[v+4],A=Math.max(y,M,P),E=Math.min(y,M,P);A>.9&&E<.1&&(y<.2&&(o[v+0]+=1),M<.2&&(o[v+2]+=1),P<.2&&(o[v+4]+=1))}}function f(v){r.push(v.x,v.y,v.z)}function d(v,y){let M=v*3;y.x=e[M+0],y.y=e[M+1],y.z=e[M+2]}function g(){let v=new R,y=new R,M=new R,P=new R,A=new te,E=new te,I=new te;for(let F=0,_=0;F<r.length;F+=9,_+=6){v.set(r[F+0],r[F+1],r[F+2]),y.set(r[F+3],r[F+4],r[F+5]),M.set(r[F+6],r[F+7],r[F+8]),A.set(o[_+0],o[_+1]),E.set(o[_+2],o[_+3]),I.set(o[_+4],o[_+5]),P.copy(v).add(y).add(M).divideScalar(3);let b=p(P);x(A,_+0,v,b),x(E,_+2,y,b),x(I,_+4,M,b)}}function x(v,y,M,P){P<0&&v.x===1&&(o[y]=v.x-1),M.x===0&&M.z===0&&(o[y]=P/2/Math.PI+.5)}function p(v){return Math.atan2(v.z,-v.x)}function m(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.vertices,e.indices,e.radius,e.details)}};var Ml=class s extends Cu{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}};var Oi=class s extends Tt{constructor(e=.5,t=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],l=[],c=[],h=[],u=e,f=(t-e)/i,d=new R,g=new te;for(let x=0;x<=i;x++){for(let p=0;p<=n;p++){let m=r+p/n*o;d.x=u*Math.cos(m),d.y=u*Math.sin(m),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/t+1)/2,g.y=(d.y/t+1)/2,h.push(g.x,g.y)}u+=f}for(let x=0;x<i;x++){let p=x*(n+1);for(let m=0;m<n;m++){let v=m+p,y=v,M=v+n+1,P=v+n+2,A=v+1;a.push(y,M,A),a.push(M,P,A)}}this.setIndex(a),this.setAttribute("position",new He(l,3)),this.setAttribute("normal",new He(c,3)),this.setAttribute("uv",new He(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Os=class s extends Tt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new R,f=new R,d=[],g=[],x=[],p=[];for(let m=0;m<=n;m++){let v=[],y=m/n,M=0;m===0&&o===0?M=.5/t:m===n&&l===Math.PI&&(M=-.5/t);for(let P=0;P<=t;P++){let A=P/t;u.x=-e*Math.cos(i+A*r)*Math.sin(o+y*a),u.y=e*Math.cos(o+y*a),u.z=e*Math.sin(i+A*r)*Math.sin(o+y*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),p.push(A+M,1-y),v.push(c++)}h.push(v)}for(let m=0;m<n;m++)for(let v=0;v<t;v++){let y=h[m][v+1],M=h[m][v],P=h[m+1][v],A=h[m+1][v+1];(m!==0||o>0)&&d.push(y,M,A),(m!==n-1||l<Math.PI)&&d.push(M,P,A)}this.setIndex(d),this.setAttribute("position",new He(g,3)),this.setAttribute("normal",new He(x,3)),this.setAttribute("uv",new He(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Sl=class s extends Tt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],l=[],c=[],h=new R,u=new R,f=new R;for(let d=0;d<=n;d++)for(let g=0;g<=i;g++){let x=g/i*r,p=d/n*Math.PI*2;u.x=(e+t*Math.cos(p))*Math.cos(x),u.y=(e+t*Math.cos(p))*Math.sin(x),u.z=t*Math.sin(p),a.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/i),c.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=i;g++){let x=(i+1)*d+g-1,p=(i+1)*(d-1)+g-1,m=(i+1)*(d-1)+g,v=(i+1)*d+g;o.push(x,p,v),o.push(p,m,v)}this.setIndex(o),this.setAttribute("position",new He(a,3)),this.setAttribute("normal",new He(l,3)),this.setAttribute("uv",new He(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var bl=class s extends Tt{constructor(e=new vl(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new R,l=new R,c=new te,h=new R,u=[],f=[],d=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new He(u,3)),this.setAttribute("normal",new He(f,3)),this.setAttribute("uv",new He(d,2));function x(){for(let y=0;y<t;y++)p(y);p(r===!1?t:0),v(),m()}function p(y){h=e.getPointAt(y/t,h);let M=o.normals[y],P=o.binormals[y];for(let A=0;A<=i;A++){let E=A/i*Math.PI*2,I=Math.sin(E),F=-Math.cos(E);l.x=F*M.x+I*P.x,l.y=F*M.y+I*P.y,l.z=F*M.z+I*P.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function m(){for(let y=1;y<=t;y++)for(let M=1;M<=i;M++){let P=(i+1)*(y-1)+(M-1),A=(i+1)*y+(M-1),E=(i+1)*y+M,I=(i+1)*(y-1)+M;g.push(P,A,I),g.push(A,E,I)}}function v(){for(let y=0;y<=t;y++)for(let M=0;M<=i;M++)c.x=y/t,c.y=M/i,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new s(new F1[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var Tl=class extends Nt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Kt=class extends Cn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=of,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Xn=class extends Kt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new te(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return an(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ce(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ce(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ce(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var wl=class extends Cn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=of,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};function Ya(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function k1(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function B1(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Gp(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function ym(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}var cs=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Pu=class extends cs{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Mr,endingEnd:Mr}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Sr:r=e,a=2*t-n;break;case el:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Sr:o=e,l=2*n-t;break;case el:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(i-t),x=g*g,p=x*g,m=-f*p+2*f*x-f*g,v=(1+f)*p+(-1.5-2*f)*x+(-.5+f)*g+1,y=(-1-d)*p+(1.5+d)*x+.5*g,M=d*p-d*x;for(let P=0;P!==a;++P)r[P]=m*o[h+P]+v*o[c+P]+y*o[l+P]+M*o[u+P];return r}},El=class extends cs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},Iu=class extends cs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},jn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ya(t,this.TimeBufferType),this.values=Ya(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ya(e.times,Array),values:Ya(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Iu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new El(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Pu(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Pr:t=this.InterpolantFactoryMethodDiscrete;break;case Ir:t=this.InterpolantFactoryMethodLinear;break;case kc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Pr;case this.InterpolantFactoryMethodLinear:return Ir;case this.InterpolantFactoryMethodSmooth:return kc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&k1(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===kc,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{let u=a*n,f=u-n,d=u+n;for(let g=0;g!==n;++g){let x=t[u+g];if(x!==t[f+g]||x!==t[d+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};jn.prototype.TimeBufferType=Float32Array;jn.prototype.ValueBufferType=Float32Array;jn.prototype.DefaultInterpolation=Ir;var hs=class extends jn{constructor(e,t,n){super(e,t,n)}};hs.prototype.ValueTypeName="bool";hs.prototype.ValueBufferType=Array;hs.prototype.DefaultInterpolation=Pr;hs.prototype.InterpolantFactoryMethodLinear=void 0;hs.prototype.InterpolantFactoryMethodSmooth=void 0;var Al=class extends jn{};Al.prototype.ValueTypeName="color";var Fi=class extends jn{};Fi.prototype.ValueTypeName="number";var Lu=class extends cs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t),c=e*a;for(let h=c+a;c!==h;c+=4)Vt.slerpFlat(r,0,o,c-a,o,c,l);return r}},ki=class extends jn{InterpolantFactoryMethodLinear(e){return new Lu(this.times,this.values,this.getValueSize(),e)}};ki.prototype.ValueTypeName="quaternion";ki.prototype.InterpolantFactoryMethodSmooth=void 0;var us=class extends jn{constructor(e,t,n){super(e,t,n)}};us.prototype.ValueTypeName="string";us.prototype.ValueBufferType=Array;us.prototype.DefaultInterpolation=Pr;us.prototype.InterpolantFactoryMethodLinear=void 0;us.prototype.InterpolantFactoryMethodSmooth=void 0;var Bi=class extends jn{};Bi.prototype.ValueTypeName="vector";var Br=class{constructor(e="",t=-1,n=[],i=rf){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=ui(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(H1(n[o]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(jn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let h=B1(l);l=Gp(l,1,h),c=Gp(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Fi(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],h=c.name.match(r);if(h&&h.length>1){let u=h[1],f=i[u];f||(i[u]=f=[]),f.push(c)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,f,d,g,x){if(d.length!==0){let p=[],m=[];ym(d,p,m,g),p.length!==0&&x.push(new u(f,p,m))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let u=0;u<c.length;u++){let f=c[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let d={},g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let x=0;x<f[g].morphTargets.length;x++)d[f[g].morphTargets[x]]=-1;for(let x in d){let p=[],m=[];for(let v=0;v!==f[g].morphTargets.length;++v){let y=f[g];p.push(y.time),m.push(y.morphTarget===x?1:0)}i.push(new Fi(".morphTargetInfluence["+x+"]",p,m))}l=d.length*o}else{let d=".bones["+t[u].name+"]";n(Bi,d+".position",f,"pos",i),n(ki,d+".quaternion",f,"rot",i),n(Bi,d+".scale",f,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function z1(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Fi;case"vector":case"vector2":case"vector3":case"vector4":return Bi;case"color":return Al;case"quaternion":return ki;case"bool":case"boolean":return hs;case"string":return us}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function H1(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=z1(s.type);if(s.times===void 0){let t=[],n=[];ym(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}var ts={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},Du=class{constructor(e,t,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],g=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}},V1=new Du,mi=class{constructor(e){this.manager=e!==void 0?e:V1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};mi.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ci={},Nu=class extends Error{constructor(e,t){super(e),this.response=t}},fs=class extends mi{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=ts.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Ci[e]!==void 0){Ci[e].push({onLoad:t,onProgress:n,onError:i});return}Ci[e]=[],Ci[e].push({onLoad:t,onProgress:n,onError:i});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||c.body===void 0||c.body.getReader===void 0)return c;let h=Ci[e],u=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0,x=0,p=new ReadableStream({start(m){v();function v(){u.read().then(({done:y,value:M})=>{if(y)m.close();else{x+=M.byteLength;let P=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:d});for(let A=0,E=h.length;A<E;A++){let I=h[A];I.onProgress&&I.onProgress(P)}m.enqueue(M),v()}},y=>{m.error(y)})}}});return new Response(p)}else throw new Nu(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{ts.add(e,c);let h=Ci[e];delete Ci[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onLoad&&d.onLoad(c)}}).catch(c=>{let h=Ci[e];if(h===void 0)throw this.manager.itemError(e),c;delete Ci[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Uu=class extends mi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=ts.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=To("img");function l(){h(),ts.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var Rl=class extends mi{constructor(e){super(e)}load(e,t,n,i){let r=new hn,o=new Uu(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},zr=class extends bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ce(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Cl=class extends zr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ce(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},_h=new Ee,Wp=new R,Xp=new R,Uo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new te(512,512),this.map=null,this.mapPass=null,this.matrix=new Ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wo,this._frameExtents=new te(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Wp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Wp),Xp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Xp),t.updateMatrixWorld(),_h.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_h),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(_h)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ou=class extends Uo{constructor(){super(new jt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Lr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Pl=class extends zr{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Ou}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},qp=new Ee,po=new R,vh=new R,Fu=class extends Uo{constructor(){super(new jt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new te(4,2),this._viewportCount=6,this._viewports=[new pt(2,1,1,1),new pt(0,1,1,1),new pt(3,1,1,1),new pt(1,1,1,1),new pt(3,0,1,1),new pt(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),po.setFromMatrixPosition(e.matrixWorld),n.position.copy(po),vh.copy(n.position),vh.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(vh),n.updateMatrixWorld(),i.makeTranslation(-po.x,-po.y,-po.z),qp.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qp)}},ds=class extends zr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Fu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},ku=class extends Uo{constructor(){super(new rs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Hr=class extends zr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.shadow=new ku}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var ps=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder!="undefined")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Il=class extends mi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=ts.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return ts.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),ts.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});ts.add(e,l),r.manager.itemStart(e)}};var Ll=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Yp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Yp();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Yp(){return performance.now()}var Bu=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,o;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,i=this.valueSize,r=e*i+i,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=t}else{o+=t;let a=t/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,i);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,o=i;r!==o;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){Vt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){let o=this._workIndex*r;Vt.multiplyQuaternionsFlat(e,o,e,t,e,n),Vt.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,r){let o=1-i;for(let a=0;a!==r;++a){let l=t+a;e[l]=e[l]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,r){for(let o=0;o!==r;++o){let a=t+o;e[a]=e[a]+e[n+o]*i}}},uf="\\[\\]\\.:\\/",G1=new RegExp("["+uf+"]","g"),ff="[^"+uf+"]",W1="[^"+uf.replace("\\.","")+"]",X1=/((?:WC+[\/:])*)/.source.replace("WC",ff),q1=/(WCOD+)?/.source.replace("WCOD",W1),Y1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ff),K1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ff),Z1=new RegExp("^"+X1+q1+Y1+K1+"$"),$1=["material","materials","bones","map"],zu=class{constructor(e,t,n){let i=n||Ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ct=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(G1,"")}static parseTrackName(e){let t=Z1.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);$1.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[i];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ct.Composite=zu;Ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ct.prototype.GetterByBindingType=[Ct.prototype._getValue_direct,Ct.prototype._getValue_array,Ct.prototype._getValue_arrayElement,Ct.prototype._getValue_toArray];Ct.prototype.SetterByBindingTypeAndVersioning=[[Ct.prototype._setValue_direct,Ct.prototype._setValue_direct_setNeedsUpdate,Ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_array,Ct.prototype._setValue_array_setNeedsUpdate,Ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_arrayElement,Ct.prototype._setValue_arrayElement_setNeedsUpdate,Ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_fromArray,Ct.prototype._setValue_fromArray_setNeedsUpdate,Ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Hu=class{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;let r=t.tracks,o=r.length,a=new Array(o),l={endingStart:Mr,endingEnd:Mr};for(let c=0;c!==o;++c){let h=r[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=tg,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){let i=this._clip.duration,r=e._clip.duration,o=r/i,a=i/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let i=this._mixer,r=i.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);let l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);let o=this._updateTime(t),a=this._updateWeight(e);if(a>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case ig:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulateAdditive(a);break;case rf:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,i=this.time+e,r=this._loopCount,o=n===ng;if(e===0)return r===-1?i:o&&(r&1)===1?t-i:i;if(n===sf){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){let a=Math.floor(i/t);i-=t*a,r+=Math.abs(a);let l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){let i=this._interpolantSettings;n?(i.endingStart=Sr,i.endingEnd=Sr):(e?i.endingStart=this.zeroSlopeAtStart?Sr:Mr:i.endingStart=el,t?i.endingEnd=this.zeroSlopeAtEnd?Sr:Mr:i.endingEnd=el)}_scheduleFading(e,t,n){let i=this._mixer,r=i.time,o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=t,a[1]=r+e,l[1]=n,this}},J1=new Float32Array(1),Dl=class extends Ui{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName,h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==r;++u){let f=i[u],d=f.name,g=h[d];if(g!==void 0)++g.referenceCount,o[u]=g;else{if(g=o[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,d));continue}let x=t&&t._propertyBindings[u].binding.parsedPath;g=new Bu(Ct.create(n,d,x),f.ValueTypeName,f.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,d),o[u]=g}a[u].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let i=this._actions,r=this._actionsByClip,o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{let a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;let u=a.actionByRoot,f=(e._localRoot||this._root).uuid;delete u[f],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let i=this._bindingsByRootAndName,r=this._bindings,o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new El(new Float32Array(2),new Float32Array(2),1,J1),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let i=t||this._root,r=i.uuid,o=typeof e=="string"?Br.findByName(i,e):e,a=o!==null?o.uuid:e,l=this._actionsByClip[a],c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=rf),l!==void 0){let u=l.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;let h=new Hu(this,o,t,n);return this._bindAction(h,c),this._addInactiveAction(h,a,r),h}existingAction(e,t){let n=t||this._root,i=n.uuid,r=typeof e=="string"?Br.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,o);let a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){let o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){let c=o[a];this._deactivateAction(c);let h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(let o in r){let a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"169"}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="169");var ms={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Pn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},j1=new rs(-1,1,1,-1,0,1),df=class extends Tt{constructor(){super(),this.setAttribute("position",new He([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new He([0,2,0,0,2,0],2))}},Q1=new df,Mi=class{constructor(e){this._mesh=new Ie(Q1,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,j1)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Wr=class extends Pn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Nt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Un.clone(e.uniforms),this.material=new Nt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Mi(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var ko=class extends Pn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}},zl=class extends Pn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Hl=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new te);this._width=n.width,this._height=n.height,t=new Yt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:yn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Wr(ms),this.copyPass.material.blending=en,this.clock=new Ll}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let i=0,r=this.passes.length;i<r;i++){let o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}ko!==void 0&&(o instanceof ko?n=!0:o instanceof zl&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new te);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Vl=class extends Pn{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ce}render(e,t,n){let i=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}};var _m={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ce(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Xr=class s extends Pn{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new te(e.x,e.y):new te(256,256),this.clearColor=new ce(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Yt(r,o,{type:yn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let f=new Yt(r,o,{type:yn});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let d=new Yt(r,o,{type:yn});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}let a=_m;this.highPassUniforms=Un.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Nt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new te(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=ms;this.copyUniforms=Un.clone(h.uniforms),this.blendMaterial=new Nt({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:ln,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ce,this.oldClearAlpha=1,this.basic=new Et,this.fsQuad=new Mi(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new te(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Nt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new te(.5,.5)},direction:{value:new te(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new Nt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};Xr.BlurDirectionX=new te(1,0);Xr.BlurDirectionY=new te(0,1);var vm={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Gl=class extends Pn{constructor(){super();let e=vm;this.uniforms=Un.clone(e.uniforms),this.material=new Tl({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Mi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},et.getTransfer(this._outputColorSpace)===Rt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Wu?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Xu?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===qu?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Oo?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Yu?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Ku&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Bo={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new te},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Ee},cameraProjectionMatrixInverse:{value:new Ee},cameraWorldMatrix:{value:new Ee},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new R(-1,-1,-1)},sceneBoxMax:{value:new R(1,1,1)}},vertexShader:`

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
		}`},zo={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},Wl={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function Mm(s=5){let e=Math.floor(s)%2===0?Math.floor(s)+1:Math.floor(s),t=eM(e),n=t.length,i=new Uint8Array(n*4);for(let o=0;o<n;++o){let a=t[o],l=2*Math.PI*a/n,c=new R(Math.cos(l),Math.sin(l),0).normalize();i[o*4]=(c.x*.5+.5)*255,i[o*4+1]=(c.y*.5+.5)*255,i[o*4+2]=127,i[o*4+3]=255}let r=new as(i,e,e);return r.wrapS=cn,r.wrapT=cn,r.needsUpdate=!0,r}function eM(s){let e=Math.floor(s)%2===0?Math.floor(s)+1:Math.floor(s),t=e*e,n=Array(t).fill(0),i=Math.floor(e/2),r=e-1;for(let o=1;o<=t;){if(i===-1&&r===e?(r=e-2,i=0):(r===e&&(r=0),i<0&&(i=e-1)),n[i*e+r]!==0){r-=2,i++;continue}else n[i*e+r]=o++;r++,i--}return n}var Ho={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:pf(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new te},cameraProjectionMatrixInverse:{value:new Ee},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function pf(s,e,t){let n=tM(s,e,t),i="vec3[SAMPLES](";for(let r=0;r<s;r++){let o=n[r];i+=`vec3(${o.x}, ${o.y}, ${o.z})${r<s-1?",":")"}`}return i}function tM(s,e,t){let n=[];for(let i=0;i<s;i++){let r=2*Math.PI*e*i/s,o=Math.pow(i/(s-1),t);n.push(new R(Math.cos(r),Math.sin(r),o))}return n}var Xl=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,n){return e[0]*t+e[1]*n}dot3(e,t,n,i){return e[0]*t+e[1]*n+e[2]*i}dot4(e,t,n,i,r){return e[0]*t+e[1]*n+e[2]*i+e[3]*r}noise(e,t){let n,i,r,o=.5*(Math.sqrt(3)-1),a=(e+t)*o,l=Math.floor(e+a),c=Math.floor(t+a),h=(3-Math.sqrt(3))/6,u=(l+c)*h,f=l-u,d=c-u,g=e-f,x=t-d,p,m;g>x?(p=1,m=0):(p=0,m=1);let v=g-p+h,y=x-m+h,M=g-1+2*h,P=x-1+2*h,A=l&255,E=c&255,I=this.perm[A+this.perm[E]]%12,F=this.perm[A+p+this.perm[E+m]]%12,_=this.perm[A+1+this.perm[E+1]]%12,b=.5-g*g-x*x;b<0?n=0:(b*=b,n=b*b*this.dot(this.grad3[I],g,x));let O=.5-v*v-y*y;O<0?i=0:(O*=O,i=O*O*this.dot(this.grad3[F],v,y));let k=.5-M*M-P*P;return k<0?r=0:(k*=k,r=k*k*this.dot(this.grad3[_],M,P)),70*(n+i+r)}noise3d(e,t,n){let i,r,o,a,c=(e+t+n)*.3333333333333333,h=Math.floor(e+c),u=Math.floor(t+c),f=Math.floor(n+c),d=1/6,g=(h+u+f)*d,x=h-g,p=u-g,m=f-g,v=e-x,y=t-p,M=n-m,P,A,E,I,F,_;v>=y?y>=M?(P=1,A=0,E=0,I=1,F=1,_=0):v>=M?(P=1,A=0,E=0,I=1,F=0,_=1):(P=0,A=0,E=1,I=1,F=0,_=1):y<M?(P=0,A=0,E=1,I=0,F=1,_=1):v<M?(P=0,A=1,E=0,I=0,F=1,_=1):(P=0,A=1,E=0,I=1,F=1,_=0);let b=v-P+d,O=y-A+d,k=M-E+d,G=v-I+2*d,q=y-F+2*d,z=M-_+2*d,j=v-1+3*d,W=y-1+3*d,ie=M-1+3*d,le=h&255,ge=u&255,Ze=f&255,rt=this.perm[le+this.perm[ge+this.perm[Ze]]]%12,Y=this.perm[le+P+this.perm[ge+A+this.perm[Ze+E]]]%12,Q=this.perm[le+I+this.perm[ge+F+this.perm[Ze+_]]]%12,xe=this.perm[le+1+this.perm[ge+1+this.perm[Ze+1]]]%12,oe=.6-v*v-y*y-M*M;oe<0?i=0:(oe*=oe,i=oe*oe*this.dot3(this.grad3[rt],v,y,M));let Pe=.6-b*b-O*O-k*k;Pe<0?r=0:(Pe*=Pe,r=Pe*Pe*this.dot3(this.grad3[Y],b,O,k));let be=.6-G*G-q*q-z*z;be<0?o=0:(be*=be,o=be*be*this.dot3(this.grad3[Q],G,q,z));let Ge=.6-j*j-W*W-ie*ie;return Ge<0?a=0:(Ge*=Ge,a=Ge*Ge*this.dot3(this.grad3[xe],j,W,ie)),32*(i+r+o+a)}noise4d(e,t,n,i){let r=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,u,f,d,g,x=(e+t+n+i)*l,p=Math.floor(e+x),m=Math.floor(t+x),v=Math.floor(n+x),y=Math.floor(i+x),M=(p+m+v+y)*c,P=p-M,A=m-M,E=v-M,I=y-M,F=e-P,_=t-A,b=n-E,O=i-I,k=F>_?32:0,G=F>b?16:0,q=_>b?8:0,z=F>O?4:0,j=_>O?2:0,W=b>O?1:0,ie=k+G+q+z+j+W,le=o[ie][0]>=3?1:0,ge=o[ie][1]>=3?1:0,Ze=o[ie][2]>=3?1:0,rt=o[ie][3]>=3?1:0,Y=o[ie][0]>=2?1:0,Q=o[ie][1]>=2?1:0,xe=o[ie][2]>=2?1:0,oe=o[ie][3]>=2?1:0,Pe=o[ie][0]>=1?1:0,be=o[ie][1]>=1?1:0,Ge=o[ie][2]>=1?1:0,ft=o[ie][3]>=1?1:0,Qe=F-le+c,L=_-ge+c,fn=b-Ze+c,$e=O-rt+c,nt=F-Y+2*c,Ne=_-Q+2*c,vt=b-xe+2*c,Ue=O-oe+2*c,C=F-Pe+3*c,S=_-be+3*c,B=b-Ge+3*c,Z=O-ft+3*c,J=F-1+4*c,K=_-1+4*c,ve=b-1+4*c,se=O-1+4*c,ue=p&255,Je=m&255,ee=v&255,fe=y&255,Oe=a[ue+a[Je+a[ee+a[fe]]]]%32,Fe=a[ue+le+a[Je+ge+a[ee+Ze+a[fe+rt]]]]%32,ye=a[ue+Y+a[Je+Q+a[ee+xe+a[fe+oe]]]]%32,it=a[ue+Pe+a[Je+be+a[ee+Ge+a[fe+ft]]]]%32,ze=a[ue+1+a[Je+1+a[ee+1+a[fe+1]]]]%32,ht=.6-F*F-_*_-b*b-O*O;ht<0?h=0:(ht*=ht,h=ht*ht*this.dot4(r[Oe],F,_,b,O));let D=.6-Qe*Qe-L*L-fn*fn-$e*$e;D<0?u=0:(D*=D,u=D*D*this.dot4(r[Fe],Qe,L,fn,$e));let ae=.6-nt*nt-Ne*Ne-vt*vt-Ue*Ue;ae<0?f=0:(ae*=ae,f=ae*ae*this.dot4(r[ye],nt,Ne,vt,Ue));let X=.6-C*C-S*S-B*B-Z*Z;X<0?d=0:(X*=X,d=X*X*this.dot4(r[it],C,S,B,Z));let $=.6-J*J-K*K-ve*ve-se*se;return $<0?g=0:($*=$,g=$*$*this.dot4(r[ze],J,K,ve,se)),27*(h+u+f+d+g)}};var Vo=class s extends Pn{constructor(e,t,n,i,r,o,a){super(),this.width=n!==void 0?n:512,this.height=i!==void 0?i:512,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Mm(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new Yt(this.width,this.height,{type:yn}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Nt({defines:Object.assign({},Bo.defines),uniforms:Un.clone(Bo.uniforms),vertexShader:Bo.vertexShader,fragmentShader:Bo.fragmentShader,blending:en,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new wl,this.normalMaterial.blending=en,this.pdMaterial=new Nt({defines:Object.assign({},Ho.defines),uniforms:Un.clone(Ho.uniforms),vertexShader:Ho.vertexShader,fragmentShader:Ho.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Nt({defines:Object.assign({},zo.defines),uniforms:Un.clone(zo.uniforms),vertexShader:zo.vertexShader,fragmentShader:zo.fragmentShader,blending:en}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Nt({uniforms:Un.clone(ms.uniforms),vertexShader:ms.vertexShader,fragmentShader:ms.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Ul,blendDst:Vr,blendEquation:Kn,blendSrcAlpha:Nl,blendDstAlpha:Vr,blendEquationAlpha:Kn}),this.blendMaterial=new Nt({uniforms:Un.clone(Wl.uniforms),vertexShader:Wl.vertexShader,fragmentShader:Wl.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Gu,blendSrc:Ul,blendDst:Vr,blendEquation:Kn,blendSrcAlpha:Nl,blendDstAlpha:Vr,blendEquationAlpha:Kn}),this.fsQuad=new Mi(null),this.originalClearColor=new ce,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new os,this.depthTexture.format=ss,this.depthTexture.type=is,this.normalRenderTarget=new Yt(this.width,this.height,{minFilter:Qt,magFilter:Qt,type:yn,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,i=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=i,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=i,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=pf(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case s.OUTPUT.Off:break;case s.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=en,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=en,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=en,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=en,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=en,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(e,t,n,i,r){e.getClearColor(this.originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i!=null&&(e.setClearColor(i),e.setClearAlpha(r||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}renderOverride(e,t,n,i,r){e.getClearColor(this.originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i=t.clearColor||i,r=t.clearAlpha||r,i!=null&&(e.setClearColor(i),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){t.set(n,n.visible),(n.isPoints||n.isLine)&&(n.visible=!1)})}restoreVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){let i=t.get(n);n.visible=i}),t.clear()}generateNoise(e=64){let t=new Xl,n=e*e*4,i=new Uint8Array(n);for(let o=0;o<e;o++)for(let a=0;a<e;a++){let l=o,c=a;i[(o*e+a)*4]=(t.noise(l,c)*.5+.5)*255,i[(o*e+a)*4+1]=(t.noise(l+e,c)*.5+.5)*255,i[(o*e+a)*4+2]=(t.noise(l,c+e)*.5+.5)*255,i[(o*e+a)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}let r=new as(i,e,e,Nn,fi);return r.wrapS=cn,r.wrapT=cn,r.needsUpdate=!0,r}};Vo.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var Ye=null,Fs=null,Go=null,ql=null,We={},mf=!1,Sm=1,Ae=44100;function $t(s){let e=s>>>0;return()=>(e=e*1664525+1013904223>>>0,e/4294967296)}function at(s,e,t=1){let n=Math.floor(s*Ae),i=Ye.createBuffer(t,n,Ae);for(let r=0;r<t;r++){let o=i.getChannelData(r);e(o,n,r)}return i}function On(s,e){let t=0;for(let n=0;n<s.length;n++)t+=e*(s[n]-t),s[n]=t}function Wo(s,e){let t=0,n=0;for(let i=0;i<s.length;i++){let r=s[i];t=e*(t+r-n),n=r,s[i]=t}}function ot(s,e=.9){let t=0;for(let n of s)t=Math.max(t,Math.abs(n));if(t>0)for(let n=0;n<s.length;n++)s[n]*=e/t}function Yl(s,e,t,n,i,r=60){return at(s,(o,a)=>{let l=$t(i),c=0,h=new Float32Array(a);for(let f=0;f<a;f++){let d=f/Ae,g=Math.exp(-d*t),x=Math.exp(-d*n),p=l()*2-1;h[f]=p*(g*.9+x*.35),c+=2*Math.PI*(r+140*Math.exp(-d*40))/Ae,o[f]=Math.sin(c)*Math.exp(-d*e)*1.1}let u=h.slice();On(u,.12),Wo(h,.7);for(let f=0;f<a;f++)o[f]+=u[f]*1.4+h[f]*.6;for(let f=0;f<a;f++)o[f]=Math.tanh(o[f]*1.8);ot(o)})}function nM(){We.shout=at(.55,(s,e)=>{let t=$t(41),n=0;for(let i=0;i<e;i++){let r=i/Ae,o=r<.2?Math.sin(Math.PI*r/.2):r>.26?Math.sin(Math.PI*Math.min(1,(r-.26)/.29)):0,a=(r<.22?190:150)*(1+.03*Math.sin(r*40));n+=2*Math.PI*a/Ae;let l=0;for(let c=1;c<14;c++){let h=a*c,u=r<.22?700:520;l+=Math.sin(n*c)*Math.exp(-Math.abs(h-u)/260)+Math.sin(n*c)*.5*Math.exp(-Math.abs(h-1500)/400)}s[i]=(l+(t()*2-1)*.35)*o}for(let i=0;i<e;i++)s[i]=Math.tanh(s[i]*.9);ot(s,.7)}),We.windup=at(.62,(s,e)=>{let t=0;for(let n=0;n<e;n++){let i=n/Ae;t+=2*Math.PI*(260+1400*Math.pow(i/.62,1.6))/Ae,s[n]=(Math.sin(t)+.3*Math.sign(Math.sin(t*.5)))*(.4+.6*i/.62)*(.75+.25*Math.sin(i*90))*Math.min(1,(.62-i)*30)}ot(s,.6)}),We.beep=at(.09,(s,e)=>{for(let t=0;t<e;t++){let n=t/Ae;s[t]=Math.sign(Math.sin(2*Math.PI*1900*n))*.5*Math.min(1,(.09-n)*80)*Math.min(1,n*400)}On(s,.5),ot(s,.5)}),We.shell=at(.25,(s,e)=>{for(let t=0;t<e;t++){let n=t/Ae;s[t]=Math.sin(2*Math.PI*4200*n)*Math.exp(-n*30)+Math.sin(2*Math.PI*6800*n)*Math.exp(-n*45)*.6+Math.sin(2*Math.PI*2900*n)*Math.exp(-n*25)*.5+(n>.07&&n<.2?Math.sin(2*Math.PI*4400*n)*Math.exp(-(n-.07)*40)*.4:0)}ot(s,.5)}),We.streak=at(.9,(s,e)=>{let t=0;for(let n=0;n<e;n++){let i=n/Ae;t+=2*Math.PI*(55+90*Math.exp(-i*18))/Ae;let r=Math.sin(t)*Math.exp(-i*7)*1.3;for(let[o,a]of[[523,.03],[659,.1],[784,.17],[1047,.24]])i>a&&(r+=Math.sin(2*Math.PI*o*(i-a))*Math.exp(-(i-a)*5)*.3*(1+.3*Math.sign(Math.sin(2*Math.PI*o*2*(i-a)))));s[n]=Math.tanh(r*1.4)}ot(s,.75)}),We.rifle=Yl(.32,28,60,9,1,70),We.shotgun=Yl(.7,12,30,4.5,2,48),We.minigun=Yl(.16,45,90,18,3,90),We.enemyShot=Yl(.28,30,70,10,4,80),We.boom=at(2.2,(s,e)=>{let t=$t(5),n=0;for(let i=0;i<e;i++){let r=i/Ae;n+=2*Math.PI*(38+60*Math.exp(-r*6))/Ae,s[i]=(t()*2-1)*Math.exp(-r*2.2)*.9+Math.sin(n)*Math.exp(-r*3)*1.2}On(s,.06);for(let i=0;i<e;i++)s[i]=Math.tanh(s[i]*3);ot(s)}),We.flash=at(1.6,(s,e)=>{let t=$t(6);for(let n=0;n<e;n++){let i=n/Ae;s[n]=(t()*2-1)*Math.exp(-i*7)+Math.sin(2*Math.PI*3200*i)*.25*Math.exp(-i*1.6)}ot(s,.8)}),We.glass=at(.9,(s,e)=>{let t=$t(7),n=[];for(let i=0;i<26;i++)n.push([t()*.5,2500+t()*5e3,8+t()*30]);for(let i=0;i<e;i++){let r=i/Ae,o=(t()*2-1)*Math.exp(-r*14)*.6;for(let[a,l,c]of n)r>a&&(o+=Math.sin(2*Math.PI*l*(r-a))*Math.exp(-(r-a)*c)*.18);s[i]=o}Wo(s,.9),ot(s,.7)}),We.hit=at(.07,(s,e)=>{for(let t=0;t<e;t++){let n=t/Ae;s[t]=Math.sin(2*Math.PI*1900*n)*Math.exp(-n*60)}ot(s,.5)}),We.kill=at(.16,(s,e)=>{for(let t=0;t<e;t++){let n=t/Ae;s[t]=(Math.sin(2*Math.PI*1300*n)+Math.sin(2*Math.PI*2600*n)*.5)*Math.exp(-n*22)}ot(s,.55)}),We.ric=at(.25,(s,e)=>{let t=$t(8);for(let n=0;n<e;n++){let i=n/Ae;s[n]=Math.sin(2*Math.PI*(4200-i*9e3)*i)*Math.exp(-i*16)*.5+(t()*2-1)*Math.exp(-i*60)*.5}ot(s,.5)}),We.impact=at(.12,(s,e)=>{let t=$t(9);for(let n=0;n<e;n++){let i=n/Ae;s[n]=(t()*2-1)*Math.exp(-i*45)}On(s,.3),ot(s,.6)}),We.metal=at(.4,(s,e)=>{let t=$t(19);for(let n=0;n<e;n++){let i=n/Ae;s[n]=(Math.sin(2*Math.PI*820*i)+Math.sin(2*Math.PI*1370*i)*.6+(t()-.5)*Math.exp(-i*80))*Math.exp(-i*11)}ot(s,.5)}),We.click=at(.05,(s,e)=>{let t=$t(10);for(let n=0;n<e;n++){let i=n/Ae;s[n]=(t()*2-1)*Math.exp(-i*200)+Math.sin(2*Math.PI*3e3*i)*Math.exp(-i*120)*.5}ot(s,.5)}),We.reload=at(.9,(s,e)=>{let t=$t(11),n=[[.05,1],[.45,.7],[.62,1.2]];for(let i=0;i<e;i++){let r=i/Ae,o=0;for(let[a,l]of n)r>a&&(o+=((t()*2-1)*Math.exp(-(r-a)*90)+Math.sin(2*Math.PI*1800*(r-a))*Math.exp(-(r-a)*70)*.4)*l);s[i]=o}ot(s,.5)}),We.pump=at(.45,(s,e)=>{let t=$t(12);for(let n=0;n<e;n++){let i=n/Ae,r=0;for(let o of[.02,.22])i>o&&(r+=(t()*2-1)*Math.exp(-(i-o)*60)+Math.sin(2*Math.PI*700*(i-o))*Math.exp(-(i-o)*40)*.6);s[n]=r}On(s,.5),ot(s,.6)}),We.kick=at(.8,(s,e)=>{let t=$t(13),n=0;for(let i=0;i<e;i++){let r=i/Ae;n+=2*Math.PI*(55+80*Math.exp(-r*20))/Ae,s[i]=Math.sin(n)*Math.exp(-r*7)+(t()*2-1)*Math.exp(-r*18)*.7}for(let i=0;i<e;i++)s[i]=Math.tanh(s[i]*2.5);ot(s)}),We.whoosh=at(1.2,(s,e)=>{let t=$t(14);for(let n=0;n<e;n++){let i=n/Ae;s[n]=(t()*2-1)*Math.sin(Math.PI*i/1.2)**2}On(s,.04),ot(s,.7);for(let n=0;n<e;n++){let i=n/Ae;s[n]+=Math.sin(2*Math.PI*(90-50*i)*i)*.4*Math.sin(Math.PI*i/1.2)}ot(s,.7)}),We.step=at(.09,(s,e)=>{let t=$t(15);for(let n=0;n<e;n++){let i=n/Ae;s[n]=(t()*2-1)*Math.exp(-i*70)}On(s,.15),ot(s,.35)}),We.hurt=at(.25,(s,e)=>{let t=$t(16),n=0;for(let i=0;i<e;i++){let r=i/Ae;n+=2*Math.PI*(120-r*200)/Ae,s[i]=Math.sin(n)*Math.exp(-r*14)+(t()*2-1)*Math.exp(-r*40)*.4}ot(s,.6)}),We.pickup=at(.3,(s,e)=>{for(let t=0;t<e;t++){let n=t/Ae,i=n<.1?880:1320;s[t]=Math.sin(2*Math.PI*i*n)*Math.exp(-(n%.1)*12)*.5}ot(s,.45)}),We.alarm=at(1.4,(s,e)=>{for(let t=0;t<e;t++){let n=t/Ae,i=700+300*Math.sin(2*Math.PI*.72*n);s[t]=Math.sign(Math.sin(2*Math.PI*i*n))*.25}On(s,.2),ot(s,.4)}),We.siren=at(14,(s,e)=>{let t=(c,h)=>{let u=(c+h)%14;if(u<7||u>=10.5){let g=(u<7?u:u-10.5)%3.5/3.5,x=g<.42?Math.sin(Math.PI/2*g/.42):Math.cos(Math.PI/2*(g-.42)/.58);return 620+660*x*x*(3-2*x)*.5+330*x}let f=(u-7)*3.1%1;return 680+560*(f<.55?f/.55:1-(f-.55)/.45)},n=0,i=0,r=2*Math.PI*5.5/Ae,o=Math.floor(.08*Ae),a=new Float32Array(e+o);for(let c=0;c<e+o;c++){let h=c/Ae,u=t(h,0),f=t(h,5.3)*.93,d=1+.004*Math.sin(c*r);n+=2*Math.PI*u*d/Ae,i+=2*Math.PI*f/Ae;let g=x=>Math.sin(x)+Math.sin(x*2)*.16+Math.sin(x*3)*.05;a[c]=Math.tanh(g(n)*1.15)+Math.tanh(g(i))*.38}On(a,.28),On(a,.34),Wo(a,.985);for(let c=0;c<e;c++)s[c]=a[c];for(let c=0;c<o;c++){let h=c/o;s[c]=a[c]*h+a[e+c]*(1-h)}let l=s.slice();for(let[c,h]of[[95,.32],[180,.22],[310,.14],[470,.08]]){let u=Math.floor(c/1e3*Ae);for(let f=0;f<e;f++)s[f]+=l[(f-u+e)%e]*h}ot(s,.42)}),We.engine=at(2,(s,e)=>{let t=$t(17),n=0;for(let i=0;i<e;i++){let r=i/Ae;n+=2*Math.PI*42/Ae,s[i]=Math.sin(n)*.6+Math.sin(n*2.03)*.3+(t()-.5)*.3}On(s,.08),ot(s,.5)}),We.brake=at(1,(s,e)=>{let t=$t(18);for(let n=0;n<e;n++){let i=n/Ae;s[n]=((t()*2-1)*.4+Math.sin(2*Math.PI*2100*i)*.3)*Math.sin(Math.PI*i)}Wo(s,.8),ot(s,.4)}),We.star=at(.6,(s,e)=>{for(let t=0;t<e;t++){let n=t/Ae;s[t]=(Math.sin(2*Math.PI*1046*n)+Math.sin(2*Math.PI*1568*n)*.6+Math.sin(2*Math.PI*2093*n)*.3)*Math.exp(-n*5)}ot(s,.5)}),We.ui=at(.08,(s,e)=>{for(let t=0;t<e;t++){let n=t/Ae;s[t]=Math.sin(2*Math.PI*1500*n)*Math.exp(-n*50)}ot(s,.35)}),We.spin=at(.6,(s,e)=>{let t=0;for(let n=0;n<e;n++){let i=n/Ae;t+=2*Math.PI*(80+260*i/.6)/Ae,s[n]=Math.sign(Math.sin(t))*.3*Math.min(1,i*8)}On(s,.1),ot(s,.4)}),We.slash=at(.22,(s,e)=>{let t=$t(77);for(let n=0;n<e;n++){let i=n/Ae;s[n]=(t()*2-1)*Math.sin(Math.PI*i/.22)**3}Wo(s,.35),ot(s,.55)}),We.roar=at(1.1,(s,e)=>{let t=$t(91),n=0;for(let i=0;i<e;i++){let r=i/Ae;n+=2*Math.PI*(70+30*Math.sin(r*7)+25*r)/Ae,s[i]=(Math.sign(Math.sin(n))*.5+Math.sin(n*2.01)*.4+(t()*2-1)*.5)*Math.min(1,r*10)*Math.min(1,(1.1-r)*4)}On(s,.12);for(let i=0;i<e;i++)s[i]=Math.tanh(s[i]*2.2);ot(s,.75)}),We.laser=at(.9,(s,e)=>{let t=0;for(let n=0;n<e;n++){let i=n/Ae;t+=2*Math.PI*(900+900*i/.9)/Ae,s[n]=Math.sin(t)*.5*(.3+.7*i/.9)*(Math.sin(i*2*Math.PI*14)>0?1:.3)}ot(s,.35)}),We.bossLaugh=at(1.3,(s,e)=>{let t=0;for(let n=0;n<e;n++){let i=n/Ae,r=Math.floor(i/.22),o=i-r*.22;t+=2*Math.PI*(150-r*9+30*Math.exp(-o*10))/Ae,s[n]=(Math.sin(t)+.5*Math.sin(t*2)+.3*Math.sin(t*3))*Math.exp(-o*9)*(r<5?1:0)}On(s,.3),ot(s,.6)})}var Gt={init(){if(Ye){Ye.state==="suspended"&&Ye.resume();return}try{Ye=new(window.AudioContext||window.webkitAudioContext)}catch{return}Fs=Ye.createGain(),Fs.gain.value=mf?0:.8;let s=Ye.createDynamicsCompressor();s.threshold.value=-14,s.ratio.value=4,Fs.connect(s),s.connect(Ye.destination),Go=Ye.createGain(),Go.connect(Fs),ql=Ye.createGain(),ql.gain.value=.32,ql.connect(Fs),nM()},get ready(){return!!Ye},setMuted(s){mf=s,Fs&&(Fs.gain.value=s?0:.8)},get muted(){return mf},setRate(s){Sm=s},play(s,e=1,t=1,n=0){if(!Ye||!We[s]||e<.01)return null;let i=Ye.createBufferSource();i.buffer=We[s],i.playbackRate.value=t*Sm;let r=Ye.createGain();r.gain.value=e;let o=r;if(n&&Ye.createStereoPanner){let a=Ye.createStereoPanner();a.pan.value=Math.max(-1,Math.min(1,n)),r.connect(a),o=a}return i.connect(r),o.connect(Go),i.start(),{s:i,g:r}},loop(s,e=1){if(!Ye||!We[s])return null;let t=Ye.createBufferSource();t.buffer=We[s],t.loop=!0;let n=Ye.createGain();return n.gain.value=e,t.connect(n),n.connect(Go),t.start(),{s:t,g:n,stop(){try{t.stop()}catch{}},vol(i){n.gain.setTargetAtTime(i,Ye.currentTime,.1)}}},loop3d(s,e=1){if(!Ye||!We[s])return null;let t=Ye.createBufferSource();t.buffer=We[s],t.loop=!0;let n=Ye.createGain();n.gain.value=0;let i=Ye.createBiquadFilter();return i.type="lowpass",i.frequency.value=6e3,i.Q.value=.5,t.connect(n),n.connect(i),i.connect(Go),t.start(),n.gain.setTargetAtTime(e,Ye.currentTime,.3),{s:t,g:n,f:i,stop(){try{n.gain.setTargetAtTime(0,Ye.currentTime,.15),t.stop(Ye.currentTime+.8)}catch{}},vol(r){n.gain.setTargetAtTime(r,Ye.currentTime,.1)},upd(r,o,a=.35){let l=Ye.currentTime;n.gain.setTargetAtTime(Math.max(0,r),l,a),i.frequency.setTargetAtTime(Math.max(80,o),l,a)}}},music:{on:!1,step:0,next:0,intensity:1,timer:null},startMusic(){if(!Ye||this.music.on)return;let s=this.music;s.on=!0,s.next=Ye.currentTime+.1,s.step=0;let e=[0,0,12,0,0,0,10,0,0,0,12,0,7,0,5,3],t=41.2,n=()=>{if(s.on){for(;s.next<Ye.currentTime+.25;){let i=s.next,r=s.step%16,o=Math.floor(s.step/16)%4,a=s.intensity;r%4===0&&this._kick(i),a>.5&&(r===4||r===12)&&this._snare(i),a>0&&this._hat(i,r%2?.05:.09),a>.3&&this._bass(i,t*Math.pow(2,(e[r]+[0,0,3,-2][o])/12),.11),a>1.2&&r%8===6&&this._stab(i,t*4*Math.pow(2,[0,0,3,-2][o]/12)),s.next+=60/132/4,s.step++}s.timer=setTimeout(n,60)}};n()},stopMusic(){this.music.on=!1,clearTimeout(this.music.timer)},_env(s,e,t,n){let i=Ye.createGain();return i.gain.setValueAtTime(0,s),i.gain.linearRampToValueAtTime(n,s+e),i.gain.exponentialRampToValueAtTime(.001,s+e+t),i.connect(ql),i},_kick(s){let e=Ye.createOscillator();e.frequency.setValueAtTime(140,s),e.frequency.exponentialRampToValueAtTime(42,s+.12),e.connect(this._env(s,.002,.3,.9)),e.start(s),e.stop(s+.35)},_noise(){this._nb||(this._nb=at(.5,e=>{let t=$t(99);for(let n=0;n<e.length;n++)e[n]=t()*2-1}));let s=Ye.createBufferSource();return s.buffer=this._nb,s},_snare(s){let e=this._noise(),t=Ye.createBiquadFilter();t.type="bandpass",t.frequency.value=1800,e.connect(t),t.connect(this._env(s,.002,.18,.5)),e.start(s),e.stop(s+.25)},_hat(s,e){let t=this._noise(),n=Ye.createBiquadFilter();n.type="highpass",n.frequency.value=7e3,t.connect(n),n.connect(this._env(s,.001,.04,e)),t.start(s),t.stop(s+.06)},_bass(s,e,t){let n=Ye.createOscillator();n.type="sawtooth",n.frequency.value=e;let i=Ye.createBiquadFilter();i.type="lowpass",i.frequency.setValueAtTime(900,s),i.frequency.exponentialRampToValueAtTime(160,s+.15),n.connect(i),i.connect(this._env(s,.005,.16,t)),n.start(s),n.stop(s+.2)},_stab(s,e){for(let t of[1,1.5,2]){let n=Ye.createOscillator();n.type="square",n.frequency.value=e*t,n.connect(this._env(s,.005,.2,.035)),n.start(s),n.stop(s+.25)}}};function Tm(s,e=!1){let t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new Tt,c=0;for(let h=0;h<s.length;++h){let u=s[h],f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(e){let d;if(t)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(t){let h=0,u=[];for(let f=0;f<s.length;++f){let d=s[f].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+h);h+=s[f].attributes.position.count}l.setIndex(u)}for(let h in r){let u=bm(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let x=0;x<o[h].length;++x)d.push(o[h][x][f]);let g=bm(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function bm(s){let e,t,n,i=-1,r=0;for(let c=0;c<s.length;++c){let h=s[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new Ft(o,t,n),l=0;for(let c=0;c<s.length;++c){let h=s[c];if(h.isInterleavedBufferAttribute){let u=l/t;for(let f=0,d=h.count;f<d;f++)for(let g=0;g<t;g++){let x=h.getComponent(f,g);a.setComponent(f+u,g,x)}}else o.set(h.array,l);l+=h.count*t}return i!==void 0&&(a.gpuType=i),a}function gf(s,e){if(e===om)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Fo||e===Fl){let t=s.getIndex();if(t===null){let o=[],a=s.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===Fo)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}function iM(s){let e=s>>>0||1;return()=>(e^=e<<13,e>>>=0,e^=e>>17,e^=e<<5,e>>>=0,e/4294967296)}function we(s,e=s){let t=document.createElement("canvas");return t.width=s,t.height=e,[t,t.getContext("2d")]}function mt(s,e,t,n,i,r=1,o=.08){let a=s.getImageData(0,0,e,t),l=a.data,c=e*t*i/(r*r),h=o,u=1-h;for(let f=0;f<c;f++){let d=n()*255|0,g=n()*e|0,x=n()*t|0,p=d*h;for(let m=x,v=Math.min(t,x+r);m<v;m++)for(let y=g,M=Math.min(e,g+r);y<M;y++){let P=(m*e+y)*4,A=l[P+3]/255;if(A>=.999)l[P]=p+l[P]*u,l[P+1]=p+l[P+1]*u,l[P+2]=p+l[P+2]*u;else{let E=h+A*u;if(E<=0)continue;let I=A*u;l[P]=(p+l[P]*I)/E,l[P+1]=(p+l[P+1]*I)/E,l[P+2]=(p+l[P+2]*I)/E,l[P+3]=E*255}}}s.putImageData(a,0,0)}function Jt(s,e,t,n,i,r,o,a){for(let l=0;l<i;l++){let c=n()*e,h=n()*t,u=o+n()*(a-o),f=s.createRadialGradient(c,h,0,c,h,u);f.addColorStop(0,r),f.addColorStop(1,"rgba(0,0,0,0)"),s.fillStyle=f,s.fillRect(c-u,h-u,u*2,u*2)}}var xf={};function Re(s,e,t,n){if(xf[s])return xf[s];let i=n(),r=new vi(i);return r.wrapS=r.wrapT=cn,r.colorSpace=wt,r.anisotropy=t,r.repeat.set(e[0],e[1]),xf[s]=r,r}function Fn(s,e=4){let t=iM(s.length*977+s.charCodeAt(0)*31);switch(s){case"asphalt":return Re(s,[1,1],e,()=>{let[n,i]=we(512);i.fillStyle="#26282c",i.fillRect(0,0,512,512),mt(i,512,512,t,3,2,.12),Jt(i,512,512,t,30,"rgba(10,10,14,.25)",20,90),Jt(i,512,512,t,12,"rgba(90,95,105,.12)",20,60),i.strokeStyle="rgba(0,0,0,.35)",i.lineWidth=1.5;for(let r=0;r<6;r++){i.beginPath();let o=t()*512,a=t()*512;i.moveTo(o,a);for(let l=0;l<8;l++)o+=(t()-.5)*60,a+=(t()-.5)*60,i.lineTo(o,a);i.stroke()}return n});case"sidewalk":return Re(s,[1,1],e,()=>{let[n,i]=we(512);i.fillStyle="#7d7b77",i.fillRect(0,0,512,512),mt(i,512,512,t,2,2,.1),Jt(i,512,512,t,20,"rgba(40,40,40,.15)",20,80),i.strokeStyle="rgba(30,30,30,.55)",i.lineWidth=4;for(let r=0;r<=512;r+=128)i.beginPath(),i.moveTo(r,0),i.lineTo(r,512),i.stroke(),i.beginPath(),i.moveTo(0,r),i.lineTo(512,r),i.stroke();return n});case"marble":return Re(s,[1,1],e,()=>{let[n,i]=we(1024),r=["#c4baa9","#bdb2a0","#c8bfb0","#b8ad9a","#c1b6a4"];for(let o=0;o<4;o++)for(let a=0;a<4;a++){i.fillStyle=r[t()*r.length|0],i.fillRect(a*256,o*256,256,256),i.save(),i.beginPath(),i.rect(a*256,o*256,256,256),i.clip();for(let c=0;c<5;c++){let h=a*256+t()*256,u=o*256+t()*256,f=40+t()*90,d=i.createRadialGradient(h,u,0,h,u,f);d.addColorStop(0,t()<.5?"rgba(150,130,105,.10)":"rgba(255,250,240,.12)"),d.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=d,i.fillRect(h-f,u-f,f*2,f*2)}let l=t()*Math.PI;for(let c=0;c<6;c++){i.strokeStyle=c<2?"rgba(120,100,80,.30)":"rgba(140,125,110,.16)",i.lineWidth=.4+t()*(c<2?2.2:1.2),i.beginPath();let h=a*256+t()*256,u=o*256+t()*256,f=Math.cos(l),d=Math.sin(l);h-=f*200,u-=d*200,i.moveTo(h,u);for(let g=0;g<26;g++)h+=f*18+(t()-.5)*16,u+=d*18+(t()-.5)*16,i.lineTo(h,u);i.stroke()}i.restore()}mt(i,1024,1024,t,.6,2,.035),i.strokeStyle="rgba(70,60,50,.55)",i.lineWidth=2;for(let o=0;o<=1024;o+=256)i.beginPath(),i.moveTo(o,0),i.lineTo(o,1024),i.stroke(),i.beginPath(),i.moveTo(0,o),i.lineTo(1024,o),i.stroke();for(let o=0;o<=4;o++)for(let a=0;a<=4;a++){let l=a*256,c=o*256,h=34;i.fillStyle="#1f2a26",i.beginPath(),i.moveTo(l,c-h),i.lineTo(l+h,c),i.lineTo(l,c+h),i.lineTo(l-h,c),i.closePath(),i.fill(),i.strokeStyle="rgba(200,170,110,.55)",i.lineWidth=2,i.stroke(),i.strokeStyle="rgba(160,190,170,.18)",i.lineWidth=1,i.beginPath(),i.moveTo(l-h*.6,c-4),i.lineTo(l+h*.5,c+6),i.stroke()}return n});case"marblecol":return Re(s,[1,1],e,()=>{let[n,i]=we(512);i.fillStyle="#ddd5c6",i.fillRect(0,0,512,512),mt(i,512,512,t,1,2,.05);for(let r=0;r<16;r++){i.strokeStyle=r%3?"rgba(120,105,90,.22)":"rgba(170,140,95,.35)",i.lineWidth=.5+t()*2.2,i.beginPath();let o=t()*512,a=-10;i.moveTo(o,a);for(let l=0;l<20;l++)o+=(t()-.5)*46,a+=22+t()*12,i.lineTo(o,a);i.stroke()}return n});case"carpet":return Re(s,[1,1],e,()=>{let[n,i]=we(512);i.fillStyle="#2e3a4c",i.fillRect(0,0,512,512),mt(i,512,512,t,6,1,.14),i.strokeStyle="rgba(0,0,0,.25)",i.lineWidth=2;for(let r=0;r<=512;r+=256)i.beginPath(),i.moveTo(r,0),i.lineTo(r,512),i.stroke(),i.beginPath(),i.moveTo(0,r),i.lineTo(512,r),i.stroke();return Jt(i,512,512,t,10,"rgba(0,0,0,.12)",30,90),n});case"wall":return Re(s,[1,1],e,()=>{let[n,i]=we(512),r=i.createLinearGradient(0,0,0,512);r.addColorStop(0,"#cfc6b4"),r.addColorStop(1,"#bdb29c"),i.fillStyle=r,i.fillRect(0,0,512,512),mt(i,512,512,t,2,2,.05),i.fillStyle="#5a3a26",i.fillRect(0,360,512,152),i.fillStyle="#3e2718",i.fillRect(0,356,512,8),i.fillRect(0,500,512,12),i.strokeStyle="rgba(0,0,0,.35)",i.lineWidth=3;for(let o=0;o<512;o+=128)i.strokeRect(o+14,380,100,108);return mt(i,512,152,t,2,1,.06),n});case"office":return Re(s,[1,1],e,()=>{let[n,i]=we(512);i.fillStyle="#8a9196",i.fillRect(0,0,512,512);for(let r=0;r<512;r+=2){let o=t();i.fillStyle=`rgba(${o<.5?"255,255,255":"0,0,0"},${.02+t()*.03})`,i.fillRect(r,0,1,470)}mt(i,512,512,t,2,2,.05),Jt(i,512,470,t,8,"rgba(60,50,40,.06)",40,120);for(let r=0;r<512;r+=128)i.fillStyle="rgba(0,0,0,.08)",i.fillRect(r,0,2,470);return i.fillStyle="#4b5359",i.fillRect(0,470,512,42),i.fillStyle="rgba(255,255,255,.08)",i.fillRect(0,0,512,6),n});case"concrete":return Re(s,[1,1],e,()=>{let[n,i]=we(512);i.fillStyle="#8a8882",i.fillRect(0,0,512,512),Jt(i,512,512,t,40,"rgba(40,38,35,.12)",10,70),mt(i,512,512,t,3,2,.08),i.strokeStyle="rgba(0,0,0,.25)",i.lineWidth=2,i.strokeRect(0,0,512,256),i.strokeRect(0,256,512,256);for(let[r,o]of[[30,30],[480,30],[30,226],[480,226],[30,286],[480,286],[30,482],[480,482]])i.fillStyle="rgba(0,0,0,.3)",i.beginPath(),i.arc(r,o,6,0,7),i.fill();return n});case"brick":return Re(s,[1,1],e,()=>{let[n,i]=we(512);i.fillStyle="#3a2b25",i.fillRect(0,0,512,512);for(let r=0;r<16;r++)for(let o=-1;o<9;o++){let a=r%2?32:0,l=t();i.fillStyle=`rgb(${120+l*50|0},${55+l*25|0},${42+l*18|0})`,i.fillRect(o*64+a+2,r*32+2,60,28)}return mt(i,512,512,t,3,2,.1),Jt(i,512,512,t,14,"rgba(0,0,0,.2)",30,90),n});case"facade":return Re(s,[1,1],e,()=>{let[n,i]=we(512);i.fillStyle="#aaa294",i.fillRect(0,0,512,512);for(let o=0;o<512;o+=64)for(let a=o/64%2*-64;a<512;a+=128){let l=t()*18-9|0;i.fillStyle=`rgb(${168+l*.6},${160+l*.6},${146+l*.6})`,i.fillRect(a+1,o+1,126,62)}mt(i,512,512,t,2.5,2,.07),mt(i,512,512,t,1,1,.1);for(let o=0;o<26;o++){let a=t()*512,l=3+t()*14,c=60+t()*260,h=t()*200,u=i.createLinearGradient(0,h,0,h+c);u.addColorStop(0,"rgba(40,36,30,.22)"),u.addColorStop(1,"rgba(40,36,30,0)"),i.fillStyle=u,i.fillRect(a,h,l,c)}i.strokeStyle="rgba(70,64,56,.45)",i.lineWidth=2;for(let o=0;o<512;o+=64){i.beginPath(),i.moveTo(0,o),i.lineTo(512,o),i.stroke();for(let a=o/64%2*64;a<512;a+=128)i.beginPath(),i.moveTo(a,o),i.lineTo(a,o+64),i.stroke()}Jt(i,512,512,t,12,"rgba(50,46,38,.14)",30,120);let r=i.createLinearGradient(0,380,0,512);return r.addColorStop(0,"rgba(20,20,22,0)"),r.addColorStop(1,"rgba(20,20,22,.35)"),i.fillStyle=r,i.fillRect(0,380,512,132),n});case"steel":return Re(s,[1,1],e,()=>{let[n,i]=we(512);i.fillStyle="#7b8086",i.fillRect(0,0,512,512);for(let r=0;r<512;r++){let o=110+t()*40|0;i.fillStyle=`rgba(${o},${o+4},${o+8},.35)`,i.fillRect(0,r,512,1)}i.strokeStyle="rgba(20,22,25,.6)",i.lineWidth=3;for(let r=0;r<=512;r+=256)i.beginPath(),i.moveTo(r,0),i.lineTo(r,512),i.stroke(),i.beginPath(),i.moveTo(0,r),i.lineTo(512,r),i.stroke();for(let r=16;r<512;r+=64)for(let o of[12,244,268,500])i.fillStyle="rgba(30,30,30,.6)",i.beginPath(),i.arc(r,o,4,0,7),i.fill(),i.fillStyle="rgba(220,220,220,.4)",i.beginPath(),i.arc(r-1,o-1,2,0,7),i.fill();return n});case"ceiling":return Re(s,[1,1],e,()=>{let[n,i]=we(256);i.fillStyle="#b4b2ab",i.fillRect(0,0,256,256),mt(i,256,256,t,4,1,.1);for(let r=0;r<900;r++)i.fillStyle="rgba(60,58,52,.25)",i.fillRect(t()*256,t()*256,1.5,1.5);return i.strokeStyle="#8d8a84",i.lineWidth=4,i.strokeRect(0,0,256,256),n});case"window":return Re(s,[1,1],e,()=>{let[n,i]=we(256);i.fillStyle="#20242b",i.fillRect(0,0,256,256);for(let r=0;r<4;r++)for(let o=0;o<4;o++){let a=t()<.45;i.fillStyle=a?`rgb(${200+t()*55|0},${160+t()*60|0},${90+t()*50|0})`:"#141820",i.fillRect(o*64+8,r*64+8,48,44)}return n});case"hazard":return Re(s,[1,1],e,()=>{let[n,i]=we(256,64);i.fillStyle="#e8b712",i.fillRect(0,0,256,64),i.fillStyle="#111";for(let r=-64;r<256;r+=64)i.beginPath(),i.moveTo(r,64),i.lineTo(r+32,0),i.lineTo(r+64,0),i.lineTo(r+32,64),i.fill();return n});case"sign":return Re(s,[1,1],e,()=>{let[n,i]=we(1024,192);return i.fillStyle="#122039",i.fillRect(0,0,1024,192),i.strokeStyle="#d9b24a",i.lineWidth=8,i.strokeRect(8,8,1008,176),i.fillStyle="#f2d47a",i.font="bold 120px Georgia, serif",i.textAlign="center",i.textBaseline="middle",i.fillText("CITY BANK",512,100),n});case"vaultsign":return Re(s,[1,1],e,()=>{let[n,i]=we(512,128);return i.fillStyle="#300",i.fillRect(0,0,512,128),i.fillStyle="#ff3b2f",i.font="bold 72px Arial",i.textAlign="center",i.textBaseline="middle",i.fillText("VAULT",256,66),n});case"glow":return Re(s,[1,1],1,()=>{let[n,i]=we(128),r=i.createRadialGradient(64,64,0,64,64,64);return r.addColorStop(0,"rgba(255,255,255,1)"),r.addColorStop(.25,"rgba(255,255,255,.55)"),r.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=r,i.fillRect(0,0,128,128),n});case"spark":return Re(s,[1,1],1,()=>{let[n,i]=we(64),r=i.createRadialGradient(32,32,0,32,32,32);return r.addColorStop(0,"rgba(255,255,240,1)"),r.addColorStop(.3,"rgba(255,200,90,.8)"),r.addColorStop(1,"rgba(255,120,20,0)"),i.fillStyle=r,i.fillRect(0,0,64,64),n});case"smoke":return Re(s,[1,1],1,()=>{let[n,i]=we(128);for(let r=0;r<18;r++){let o=40+t()*48,a=40+t()*48,l=20+t()*26,c=i.createRadialGradient(o,a,0,o,a,l);c.addColorStop(0,"rgba(255,255,255,.35)"),c.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=c,i.fillRect(0,0,128,128)}return n});case"flash":return Re(s,[1,1],1,()=>{let[n,i]=we(128);i.translate(64,64);for(let o=0;o<7;o++){i.rotate(Math.PI*2/7+t()*.3);let a=i.createLinearGradient(0,0,60,0);a.addColorStop(0,"rgba(255,240,200,1)"),a.addColorStop(1,"rgba(255,150,40,0)"),i.fillStyle=a,i.beginPath(),i.moveTo(0,-7),i.lineTo(62,0),i.lineTo(0,7),i.fill()}let r=i.createRadialGradient(0,0,0,0,0,30);return r.addColorStop(0,"rgba(255,255,230,1)"),r.addColorStop(1,"rgba(255,180,60,0)"),i.fillStyle=r,i.fillRect(-64,-64,128,128),n});case"hole":return Re(s,[1,1],1,()=>{let[n,i]=we(64),r=i.createRadialGradient(32,32,0,32,32,30);return r.addColorStop(0,"rgba(10,10,10,1)"),r.addColorStop(.3,"rgba(20,20,20,.9)"),r.addColorStop(.5,"rgba(40,40,40,.4)"),r.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=r,i.fillRect(0,0,64,64),n});case"blood":return Re(s,[1,1],1,()=>{let[n,i]=we(128),r=(o,a,l,c)=>{let h=i.createRadialGradient(o,a,0,o,a,l);h.addColorStop(0,`rgba(105,8,8,${c})`),h.addColorStop(.7,`rgba(140,14,12,${c*.85})`),h.addColorStop(1,"rgba(140,14,12,0)"),i.fillStyle=h,i.beginPath(),i.arc(o,a,l,0,7),i.fill()};r(64,64,26,.9);for(let o=0;o<14;o++){let a=t()*6.28,l=20+t()*36;r(64+Math.cos(a)*l,64+Math.sin(a)*l,2+t()*7,.85)}for(let o=0;o<5;o++){let a=t()*6.28;i.strokeStyle="rgba(125,12,10,.75)",i.lineWidth=2+t()*3,i.beginPath(),i.moveTo(64,64),i.lineTo(64+Math.cos(a)*(30+t()*30),64+Math.sin(a)*(30+t()*30)),i.stroke()}return n});case"scorch":return Re(s,[1,1],1,()=>{let[n,i]=we(128),r=i.createRadialGradient(64,64,0,64,64,64);return r.addColorStop(0,"rgba(0,0,0,.9)"),r.addColorStop(.6,"rgba(10,8,5,.5)"),r.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=r,i.fillRect(0,0,128,128),n});case"hcarpet":return Re(s,[1,1],e,()=>{let[n,i]=we(512);i.fillStyle="#5e0f16",i.fillRect(0,0,512,512),mt(i,512,512,t,6,1,.12),i.strokeStyle="#b48a3c",i.lineWidth=5;for(let r=0;r<512;r+=128)for(let o=0;o<512;o+=128)i.beginPath(),i.moveTo(o+64,r+10),i.lineTo(o+118,r+64),i.lineTo(o+64,r+118),i.lineTo(o+10,r+64),i.closePath(),i.stroke(),i.fillStyle="#2a0609",i.beginPath(),i.arc(o+64,r+64,16,0,7),i.fill(),i.fillStyle="#c99a48",i.beginPath(),i.arc(o+64,r+64,6,0,7),i.fill(),i.fillStyle="#3b080c",i.fillRect(o-4,r-4,8,8);return mt(i,512,512,t,3,2,.07),Jt(i,512,512,t,10,"rgba(0,0,0,.14)",40,120),n});case"hrug":return Re(s,[1,1],e,()=>{let[n,i]=we(512);i.fillStyle="#6a121a",i.fillRect(0,0,512,512),i.fillStyle="#1d2a44",i.fillRect(18,18,476,476),i.fillStyle="#7d1720",i.fillRect(40,40,432,432),i.strokeStyle="#d1a659",i.lineWidth=4,i.strokeRect(30,30,452,452),i.strokeRect(48,48,416,416);for(let r=0;r<24;r++){let o=r/24*6.283;i.fillStyle=r%2?"#d1a659":"#1d2a44",i.beginPath(),i.ellipse(256+Math.cos(o)*120,256+Math.sin(o)*120,26,10,o,0,7),i.fill()}i.fillStyle="#1d2a44",i.beginPath(),i.arc(256,256,84,0,7),i.fill(),i.strokeStyle="#d1a659",i.lineWidth=6,i.stroke(),i.fillStyle="#d1a659",i.beginPath();for(let r=0;r<16;r++){let o=r/16*6.283,a=r%2?30:60;i.lineTo(256+Math.cos(o)*a,256+Math.sin(o)*a)}i.fill();for(let[r,o]of[[90,90],[422,90],[90,422],[422,422]])i.fillStyle="#d1a659",i.beginPath(),i.moveTo(r,o-26),i.lineTo(r+26,o),i.lineTo(r,o+26),i.lineTo(r-26,o),i.fill();return mt(i,512,512,t,5,1,.12),n});case"damask":return Re(s,[1,1],e,()=>{let[n,i]=we(512);i.fillStyle="#6b1d24",i.fillRect(0,0,512,512),mt(i,512,360,t,2,2,.04);let r=(o,a)=>{i.fillStyle="rgba(214,160,90,.26)",i.beginPath(),i.ellipse(o,a,16,40,0,0,7),i.fill();for(let l of[-1,1])i.beginPath(),i.ellipse(o+l*24,a+6,10,24,l*.6,0,7),i.fill(),i.beginPath(),i.ellipse(o+l*14,a-34,6,14,-l*.5,0,7),i.fill();i.fillStyle="rgba(40,6,10,.35)",i.beginPath(),i.ellipse(o,a,6,18,0,0,7),i.fill()};for(let o=40;o<360;o+=128)for(let a=0;a<=512;a+=128)r(a+((o/128|0)%2?64:0),o);for(let o=0;o<512;o+=64)i.fillStyle="rgba(0,0,0,.05)",i.fillRect(o,0,2,356);i.fillStyle="#c9a24a",i.fillRect(0,350,512,8),i.fillStyle="#3c2214",i.fillRect(0,358,512,154),i.fillStyle="#25140b",i.fillRect(0,498,512,14),i.strokeStyle="rgba(0,0,0,.45)",i.lineWidth=3;for(let o=0;o<512;o+=128)i.strokeRect(o+14,376,100,110),i.strokeStyle="rgba(255,220,170,.08)",i.strokeRect(o+17,379,94,104),i.strokeStyle="rgba(0,0,0,.45)";return mt(i,512,154,t,2,1,.06),n});case"hwood":return Re(s,[1,1],e,()=>{let[n,i]=we(512);i.fillStyle="#4a2a18",i.fillRect(0,0,512,512);for(let r=0;r<512;r+=2){let o=t();i.fillStyle=`rgba(${o<.5?"20,8,2":"120,70,40"},${.05+t()*.08})`,i.fillRect(r,0,1+t()*2,512)}for(let r=0;r<40;r++){i.strokeStyle="rgba(25,10,4,.25)",i.lineWidth=1,i.beginPath();let o=t()*512,a=0;for(i.moveTo(o,a);a<512;a+=16)o+=(t()-.5)*4,i.lineTo(o,a);i.stroke()}i.fillStyle="rgba(0,0,0,.4)";for(let r=0;r<512;r+=128)i.fillRect(r,0,3,512);return n});case"parquet":return Re(s,[1,1],e,()=>{let[n,i]=we(512);i.fillStyle="#5a3620",i.fillRect(0,0,512,512);for(let r=-64;r<576;r+=32)for(let o=-64;o<576;o+=64){let a=t();i.save(),i.translate(o+r/32%2*32,r),i.rotate((r/32%2?1:-1)*Math.PI/4),i.fillStyle=`rgb(${110+a*40|0},${66+a*24|0},${36+a*16|0})`,i.fillRect(0,0,88,20),i.strokeStyle="rgba(20,10,4,.6)",i.lineWidth=1.5,i.strokeRect(0,0,88,20),i.restore()}return mt(i,512,512,t,2,1,.06),n});case"hsign":return Re(s,[1,1],e,()=>{let[n,i]=we(1024,192);return i.fillStyle="#16070a",i.fillRect(0,0,1024,192),i.strokeStyle="#ff2a3a",i.lineWidth=6,i.shadowColor="#ff2a3a",i.shadowBlur=24,i.strokeRect(14,14,996,164),i.font="bold 118px Georgia, serif",i.textAlign="center",i.textBaseline="middle",i.fillStyle="#ff4656",i.fillText("RED  HOTEL",512,100),i.shadowBlur=0,i.fillStyle="#ffd0d4",i.fillText("RED  HOTEL",512,100),i.fillStyle="#ff6a76",i.font="bold 26px Arial",i.fillText("\u2605 \u2605 \u2605 \u2605",512,160),n});case"blade":return Re(s,[1,1],e,()=>{let[n,i]=we(160,640);return i.fillStyle="#16070a",i.fillRect(0,0,160,640),i.strokeStyle="#ffb040",i.lineWidth=5,i.strokeRect(8,8,144,624),i.font="bold 104px Georgia, serif",i.textAlign="center",i.textBaseline="middle",i.shadowColor="#ff2a3a",i.shadowBlur=22,"HOTEL".split("").forEach((r,o)=>{i.fillStyle="#ff3646",i.fillText(r,80,76+o*120),i.fillStyle="#ffe0e2",i.fillText(r,80,76+o*120)}),n});case"keys":return Re(s,[1,1],e,()=>{let[n,i]=we(512,256);i.fillStyle="#2e170c",i.fillRect(0,0,512,256);for(let r=0;r<6;r++)for(let o=0;o<14;o++){let a=8+o*36,l=8+r*41;i.fillStyle="#1a0c05",i.fillRect(a,l,32,36),i.fillStyle="#c9a24a",i.font="9px Arial",i.fillText(String(100+r*100+o+1),a+6,l+10),t()<.6&&(i.fillStyle="#d8b860",i.fillRect(a+13,l+14,6,16),i.fillStyle=t()<.5?"#8a1a20":"#e8e0d0",i.fillRect(a+10,l+24,12,8))}return n});case"exitsign":return Re(s,[1,1],e,()=>{let[n,i]=we(256,96);return i.fillStyle="#0c5a2a",i.fillRect(0,0,256,96),i.fillStyle="#e8fff0",i.font="bold 54px Arial",i.textAlign="center",i.textBaseline="middle",i.fillText("EXIT \u25B8",128,50),n});case"city":return Re(s,[1,1],e,()=>{let[n,i]=we(512,256),r=i.createLinearGradient(0,0,0,256);r.addColorStop(0,"#0a1020"),r.addColorStop(1,"#2a2240"),i.fillStyle=r,i.fillRect(0,0,512,256);for(let o=0;o<26;o++){let a=t()*512,l=20+t()*50,c=60+t()*170;i.fillStyle=`rgb(${12+t()*14|0},${14+t()*14|0},${24+t()*20|0})`,i.fillRect(a,256-c,l,c);for(let h=256-c+6;h<250;h+=9)for(let u=a+4;u<a+l-4;u+=7)t()<.35&&(i.fillStyle=t()<.8?"#e8c27a":"#9ad0ff",i.fillRect(u,h,3,4))}i.fillStyle="rgba(255,60,60,.9)";for(let o=0;o<5;o++)i.fillRect(t()*512,40+t()*60,3,3);return n});case"corrug":return Re(s,[1,1],e,()=>{let[n,i]=we(512);i.fillStyle="#b8b8b8",i.fillRect(0,0,512,512);for(let r=0;r<512;r+=32){let o=i.createLinearGradient(r,0,r+32,0);o.addColorStop(0,"#8c8c8c"),o.addColorStop(.18,"#d4d4d4"),o.addColorStop(.5,"#e2e2e2"),o.addColorStop(.62,"#b0b0b0"),o.addColorStop(.82,"#7a7a7a"),o.addColorStop(1,"#8c8c8c"),i.fillStyle=o,i.fillRect(r,0,32,512)}mt(i,512,512,t,3,2,.1),Jt(i,512,512,t,26,"rgba(110,52,22,.38)",8,46),Jt(i,512,512,t,14,"rgba(30,26,22,.3)",20,80);for(let r=0;r<40;r++){let o=t()*512,a=t()*512,l=20+t()*90;i.fillStyle="rgba(90,40,18,"+(.12+t()*.25)+")",i.fillRect(o,a,2+t()*3,l)}return i.fillStyle="rgba(40,40,40,.5)",i.fillRect(0,0,512,10),i.fillRect(0,502,512,10),n});case"hull":return Re(s,[1,1],e,()=>{let[n,i]=we(512);i.fillStyle="#9a9a9a",i.fillRect(0,0,512,512),mt(i,512,512,t,3,2,.08),i.strokeStyle="rgba(40,40,40,.55)",i.lineWidth=3;for(let r=0;r<512;r+=128)i.beginPath(),i.moveTo(0,r),i.lineTo(512,r),i.stroke();for(let r=0;r<512;r+=256)for(let o=0;o<512;o+=128)i.beginPath(),i.moveTo(r+o/128%2*128,o),i.lineTo(r+o/128%2*128,o+128),i.stroke();i.fillStyle="rgba(60,60,60,.5)";for(let r=6;r<512;r+=128)for(let o=4;o<512;o+=16)i.fillRect(o,r,3,3);for(let r=0;r<70;r++){let o=t()*512,a=t()*512,l=30+t()*140,c=i.createLinearGradient(0,a,0,a+l);c.addColorStop(0,"rgba(120,52,20,.55)"),c.addColorStop(1,"rgba(120,52,20,0)"),i.fillStyle=c,i.fillRect(o,a,2+t()*6,l)}return Jt(i,512,512,t,20,"rgba(100,46,20,.35)",10,50),n});case"deck":return Re(s,[1,1],e,()=>{let[n,i]=we(512);i.fillStyle="#5c6a5a",i.fillRect(0,0,512,512),mt(i,512,512,t,3,2,.1),i.fillStyle="rgba(30,36,30,.45)";for(let r=0;r<512;r+=16)for(let o=r/16%2*8;o<512;o+=16)i.save(),i.translate(o+4,r+4),i.rotate((o+r)/8%2?.6:-.6),i.fillRect(-4,-1,8,2.4),i.restore();return i.strokeStyle="rgba(20,20,20,.6)",i.lineWidth=3,i.strokeRect(0,0,512,512),Jt(i,512,512,t,24,"rgba(120,70,30,.3)",10,60),Jt(i,512,512,t,12,"rgba(20,20,20,.35)",20,70),n});case"quay":return Re(s,[1,1],e,()=>{let[n,i]=we(512);i.fillStyle="#6c6a66",i.fillRect(0,0,512,512),mt(i,512,512,t,4,2,.12),Jt(i,512,512,t,40,"rgba(20,20,20,.22)",12,80),i.strokeStyle="rgba(25,25,25,.7)",i.lineWidth=3,i.strokeRect(1,1,510,510),i.beginPath(),i.moveTo(256,0),i.lineTo(256,512),i.stroke();for(let r=0;r<18;r++){i.strokeStyle="rgba(30,30,30,.4)",i.lineWidth=1,i.beginPath();let o=t()*512,a=t()*512;i.moveTo(o,a);for(let l=0;l<6;l++)o+=(t()-.5)*40,a+=(t()-.5)*40,i.lineTo(o,a);i.stroke()}return Jt(i,512,512,t,8,"rgba(10,12,16,.5)",30,90),n});case"waves":return Re(s,[1,1],e,()=>{let[n,i]=we(256);i.fillStyle="#808080",i.fillRect(0,0,256,256);for(let r=0;r<260;r++){let o=t()*256,a=t()*256,l=6+t()*26,c=i.createRadialGradient(o,a,0,o,a,l),h=t()<.5?"rgba(255,255,255,.18)":"rgba(0,0,0,.18)";c.addColorStop(0,h),c.addColorStop(1,"rgba(128,128,128,0)"),i.fillStyle=c;for(let u of[-256,0,256])for(let f of[-256,0,256])i.fillRect(o-l+u,a-l+f,l*2,l*2)}return n});case"portsign":return Re(s,[1,1],e,()=>{let[n,i]=we(1024,192);return i.fillStyle="#0a1a2c",i.fillRect(0,0,1024,192),i.strokeStyle="#f0b020",i.lineWidth=8,i.strokeRect(8,8,1008,176),i.fillStyle="#f2f4f8",i.font='900 86px Impact, "Arial Black", sans-serif',i.textAlign="center",i.textBaseline="middle",i.fillText("CASPIAN CARGO TERMINAL",512,82),i.fillStyle="#f0b020",i.font="bold 34px Arial",i.fillText("GATE 3 \xB7 AUTHORIZED PERSONNEL ONLY",512,150),n});case"shipname":return Re(s,[1,1],e,()=>{let[n,i]=we(1024,128);return i.fillStyle="rgba(0,0,0,0)",i.clearRect(0,0,1024,128),i.fillStyle="#e8e8e0",i.font='900 96px Impact, "Arial Black", sans-serif',i.textAlign="center",i.textBaseline="middle",i.fillText("M/V KHAZAR STAR",512,66),n});case"stencil":return Re(s,[1,1],e,()=>{let[n,i]=we(512,256);return i.clearRect(0,0,512,256),i.fillStyle="rgba(240,240,236,.92)",i.font="900 64px Arial Black, Impact, sans-serif",i.fillText("KHZU 418277",20,90),i.font="bold 30px Arial",i.fillText("MAX GROSS 30,480 KG",22,150),i.fillText("TARE 2,200 KG",22,190),mt(i,512,256,t,2,3,.15),n});case"painting":return Re(s,[1,1],e,()=>{let[n,i]=we(256,192);i.fillStyle="#8a6a2a",i.fillRect(0,0,256,192),i.fillStyle="#3a2a1a",i.fillRect(10,10,236,172);let r=i.createLinearGradient(0,14,0,178);r.addColorStop(0,"#d89a5a"),r.addColorStop(.55,"#a65a3a"),r.addColorStop(1,"#2a3a2a"),i.fillStyle=r,i.fillRect(16,16,224,160),i.fillStyle="#f4d090",i.beginPath(),i.arc(170,80,18,0,7),i.fill(),i.fillStyle="#2c3424",i.beginPath(),i.moveTo(16,176);for(let o=16;o<=240;o+=16)i.lineTo(o,120+Math.sin(o*.05)*14+t()*8);return i.lineTo(240,176),i.fill(),mt(i,256,192,t,3,2,.08),n});case"mtile":return Re(s,[1,1],e,()=>{let[n,i]=we(512);i.fillStyle="#7d7a72",i.fillRect(0,0,512,512);for(let r=0;r<8;r++)for(let o=-1;o<5;o++){let a=o*128+r%2*64,l=r*64,c=228+(t()*18|0),h=i.createLinearGradient(0,l,0,l+60);h.addColorStop(0,`rgb(${c},${c},${c-6})`),h.addColorStop(.5,`rgb(${c-8},${c-8},${c-14})`),h.addColorStop(1,`rgb(${c-30},${c-30},${c-34})`),i.fillStyle=h,i.fillRect(a+3,l+3,122,58)}return mt(i,512,512,t,2,2,.06),Jt(i,512,512,t,16,"rgba(70,60,40,.22)",20,70),i.fillStyle="rgba(60,50,40,.25)",i.fillRect(0,480,512,32),n});case"mfloor":return Re(s,[1,1],e,()=>{let[n,i]=we(512);for(let r=0;r<4;r++)for(let o=0;o<4;o++){let a=(o+r)%2;i.fillStyle=a?"#4a4c52":"#8c8a84",i.fillRect(o*128,r*128,128,128)}mt(i,512,512,t,5,2,.14);for(let r=0;r<900;r++)i.fillStyle=`rgba(${t()<.5?"255,255,255":"0,0,0"},${.08+t()*.14})`,i.fillRect(t()*512,t()*512,2+t()*3,2+t()*3);i.strokeStyle="rgba(20,20,20,.55)",i.lineWidth=3;for(let r=0;r<=512;r+=128)i.beginPath(),i.moveTo(r,0),i.lineTo(r,512),i.stroke(),i.beginPath(),i.moveTo(0,r),i.lineTo(512,r),i.stroke();return Jt(i,512,512,t,20,"rgba(30,26,20,.25)",20,90),n});case"metrosign":return Re(s,[1,1],e,()=>{let[n,i]=we(1024,256);return i.fillStyle="#0d1420",i.fillRect(0,0,1024,256),i.fillStyle="#d0202a",i.beginPath(),i.arc(128,128,100,0,7),i.fill(),i.fillStyle="#fff",i.font='900 150px Impact, "Arial Black", sans-serif',i.textAlign="center",i.textBaseline="middle",i.fillText("M",128,134),i.textAlign="left",i.font='900 104px Impact, "Arial Black", sans-serif',i.fillText("METRO",262,96),i.fillStyle="#e8c24a",i.font="bold 54px Arial",i.fillText("28 MAY STANSIYASI",266,192),n});case"mstation":return Re(s,[1,1],e,()=>{let[n,i]=we(1024,160);return i.fillStyle="#1a3a7a",i.fillRect(0,0,1024,160),i.fillStyle="#fff",i.font='900 92px Impact, "Arial Black", sans-serif',i.textAlign="center",i.textBaseline="middle",i.fillText("28 MAY",400,84),i.fillStyle="#d0202a",i.beginPath(),i.arc(80,80,56,0,7),i.fill(),i.fillStyle="#fff",i.font="900 80px Impact",i.fillText("M",80,84),i.font="bold 40px Arial",i.fillStyle="#e8c24a",i.fillText("\u2192 PLATFORMS \xB7 QATARLAR",790,84),n});case"mposter":return Re(s,[1,1],e,()=>{let[n,i]=we(256,384),r=i.createLinearGradient(0,0,256,384);return r.addColorStop(0,"#f05a28"),r.addColorStop(.5,"#a01e50"),r.addColorStop(1,"#1c1440"),i.fillStyle=r,i.fillRect(0,0,256,384),i.fillStyle="rgba(255,255,255,.9)",i.beginPath(),i.arc(128,150,70,0,7),i.fill(),i.fillStyle="#1c1440",i.font="900 54px Impact",i.textAlign="center",i.fillText("BAKU",128,168),i.fillStyle="#fff",i.font="900 40px Impact",i.fillText("CITY FEST",128,290),i.font="bold 20px Arial",i.fillText("NOV 14 \xB7 BOULEVARD",128,330),i.strokeStyle="#ddd",i.lineWidth=10,i.strokeRect(5,5,246,374),mt(i,256,384,t,2,2,.08),n});case"tunnel":return Re(s,[1,1],e,()=>{let[n,i]=we(512);i.fillStyle="#3e3c38",i.fillRect(0,0,512,512),mt(i,512,512,t,4,2,.16),Jt(i,512,512,t,30,"rgba(10,10,8,.4)",20,90),i.fillStyle="#222";for(let r of[150,172,194])i.fillRect(0,r,512,9);i.fillStyle="rgba(0,0,0,.5)";for(let r=0;r<512;r+=128)i.fillRect(r,0,14,512);return i.fillStyle="#6a2a1a",i.fillRect(0,300,512,6),n});case"trainside":return Re(s,[1,1],e,()=>{let[n,i]=we(512),r=i.createLinearGradient(0,0,0,512);r.addColorStop(0,"#c8ccd0"),r.addColorStop(.5,"#e4e6e8"),r.addColorStop(1,"#9a9ea4"),i.fillStyle=r,i.fillRect(0,0,512,512),i.fillStyle="#1d4fa0",i.fillRect(0,300,512,46),i.fillStyle="#d0202a",i.fillRect(0,350,512,12),i.strokeStyle="rgba(40,40,40,.35)",i.lineWidth=2;for(let o=0;o<512;o+=64)i.beginPath(),i.moveTo(o,0),i.lineTo(o,512),i.stroke();return mt(i,512,512,t,2,2,.06),Jt(i,512,512,t,12,"rgba(40,36,30,.22)",20,80),n});case"tseat":return Re(s,[1,1],e,()=>{let[n,i]=we(256);i.fillStyle="#1f3c78",i.fillRect(0,0,256,256);for(let r=0;r<260;r++)i.fillStyle=`rgba(${t()<.5?"230,190,60":"200,40,40"},.5)`,i.fillRect(t()*256,t()*256,3,3);return mt(i,256,256,t,6,1,.2),n});case"empscreen":return Re(s,[1,1],e,()=>{let[n,i]=we(256,128);return i.fillStyle="#080c08",i.fillRect(0,0,256,128),i.fillStyle="#ff3020",i.font='900 64px "Courier New", monospace',i.textAlign="center",i.textBaseline="middle",i.fillText("EMP",128,52),i.font="bold 22px monospace",i.fillStyle="#ffb030",i.fillText("ARMED \xB7 3 LINES",128,104),n})}if(s.startsWith("num"))return Re(s,[1,1],e,()=>{let[n,i]=we(128,64);return i.fillStyle="#c9a24a",i.fillRect(0,0,128,64),i.fillStyle="#2a1608",i.fillRect(4,4,120,56),i.fillStyle="#e8c870",i.font="bold 40px Georgia",i.textAlign="center",i.textBaseline="middle",i.fillText(s.slice(3),64,34),n});throw new Error("tex "+s)}var yf={},sM={asphalt:[2.2,.22,.95,1],sidewalk:[2.5,.55,.9,1],marble:[1.4,.7,.1,0],marblecol:[.6,.35,.12,0],carpet:[3,1,.85,0],wall:[1.4,.75,.9,1],office:[1.2,.8,.7,0],concrete:[2.4,.75,.95,1],brick:[3.2,.95,.8,1],facade:[2.4,.95,.75,1],steel:[1.8,.55,.35,0],ceiling:[1.6,.95,.85,1],hcarpet:[3,1,.85,0],hrug:[2.4,1,.85,0],damask:[1.2,.8,.55,1],hwood:[1.6,.55,.3,0],parquet:[1.8,.6,.25,0],corrug:[3.2,.75,.45,0],hull:[2.2,.8,.5,1],deck:[2.6,.85,.55,0],quay:[2.6,.5,.95,1],waves:[2.2,.05,.12,1]};function wm(s){if(yf[s])return yf[s];let e=sM[s];if(!e)return null;let t=Fn(s).image,n=t.width,i=t.height,r=t.getContext("2d").getImageData(0,0,n,i).data,o=new Float32Array(n*i);for(let p=0;p<n*i;p++)o[p]=(r[p*4]*.3+r[p*4+1]*.59+r[p*4+2]*.11)/255;let a=o;if(e[3]){a=new Float32Array(n*i);for(let p=0;p<i;p++)for(let m=0;m<n;m++){let v=0;for(let y=-1;y<=1;y++)for(let M=-1;M<=1;M++)v+=o[(p+y+i)%i*n+(m+M+n)%n];a[p*n+m]=v/9}}let[l,c]=we(n,i),[h,u]=we(n,i),f=c.createImageData(n,i),d=u.createImageData(n,i),g=e[0];for(let p=0;p<i;p++)for(let m=0;m<n;m++){let v=(b,O)=>a[(O+i)%i*n+(b+n)%n],y=v(m+1,p-1)+2*v(m+1,p)+v(m+1,p+1)-(v(m-1,p-1)+2*v(m-1,p)+v(m-1,p+1)),M=v(m-1,p+1)+2*v(m,p+1)+v(m+1,p+1)-(v(m-1,p-1)+2*v(m,p-1)+v(m+1,p-1)),P=-y*g,A=M*g,E=1,I=Math.hypot(P,A,E);P/=I,A/=I,E/=I;let F=(p*n+m)*4;f.data[F]=(P*.5+.5)*255,f.data[F+1]=(A*.5+.5)*255,f.data[F+2]=(E*.5+.5)*255,f.data[F+3]=255;let _=e[1]+(e[2]-e[1])*o[p*n+m];d.data[F]=d.data[F+1]=d.data[F+2]=Math.max(0,Math.min(255,_*255)),d.data[F+3]=255}c.putImageData(f,0,0),u.putImageData(d,0,0);let x=p=>{let m=new vi(p);return m.wrapS=m.wrapT=cn,m.anisotropy=4,m.colorSpace=yi,m};return yf[s]={normalMap:x(l),roughnessMap:x(h)}}var Em=0;function rM(s){Em=s}var Qn=[],oM=[],aM=[],lM=[],gs=[],cM=[],Xo=[],qr=new Map,Kl={};function un(s,e={}){if(Kl[s])return Kl[s];let t=Object.assign({roughness:.85,metalness:0},e);if(t.tex){t.map=Fn(t.tex);let n=Em>0&&wm(t.tex);n&&(t.normalMap=n.normalMap,t.roughnessMap=n.roughnessMap,t.roughness=1,t.normalScale=new te(1,-1).multiplyScalar(t.nscale||1)),delete t.tex}return delete t.nscale,Kl[s]=new Kt(t)}function Zl(s,e){qr.has(s)||qr.set(s,[]),qr.get(s).push(e)}function hM(s,e,t,n,i,r,o,a){let l=new di(s,e,t);l.translate(r,o,a);let c=l.attributes.uv,h=l.attributes.position,u=l.attributes.normal;for(let f=0;f<c.count;f++){let d=h.getX(f),g=h.getY(f),x=h.getZ(f),p=Math.abs(u.getX(f));Math.abs(u.getY(f))>.5?c.setXY(f,d/n,x/n):p>.5?c.setXY(f,x/n,g/i):c.setXY(f,d/n,g/i)}return l}function At(s,e,t,n,i,r,o,{tile:a=2,tv:l=0,solid:c="wall",low:h=!1,cast:u=!0}={}){let f=n-s,d=i-e,g=r-t,x=hM(f,d,g,a,l||a,(s+n)/2,(e+i)/2,(t+r)/2);if(o&&Zl(o,x),u||(x.userData.nocast=!0),c){let p={min:new R(s,e,t),max:new R(n,i,r),kind:c,low:h};return Qn.push(p),p}}function Yr(s,e,t,n,i,r,o,a=!0){let l=new xn(t-s,n-e);l.rotateX(a?-Math.PI/2:Math.PI/2),l.translate((s+t)/2,i,(e+n)/2);let c=l.attributes.uv;for(let h=0;h<c.count;h++)c.setXY(h,c.getX(h)*(t-s)/o,c.getY(h)*(n-e)/o);Zl(r,l)}function _f(s){rM(s),Kl={},qr.clear(),Qn.length=oM.length=aM.length=lM.length=gs.length=cM.length=0,Xo.length=0,uM.length=0}function vf(s,e,t=[]){for(let[n,i]of qr){let r=Tm(i,!1),o=new Ie(r,n);o.receiveShadow=!0,o.castShadow=e>0&&!t.includes(n),o.matrixAutoUpdate=!1,s.add(o),Xo.push(o)}qr.clear()}var uM=[];function $l(s,e,t,n,i,r=0,o=1,{solid:a=!0,low:l=!1,kind:c="prop",y:h=0,pad:u=0,cast:f=!0}={}){let d=e[t];if(!d)return null;if(f&&d.bb){let p=d.bb;Math.max(p.max[0]-p.min[0],p.max[1]-p.min[1],p.max[2]-p.min[2])*o<.45&&(f=!1)}let g=d.scene.clone(!0);g.position.set(n,h,i),g.rotation.y=r*Math.PI/2,g.scale.setScalar(o),s.add(g),g.traverse(p=>{p.isMesh&&(p.castShadow=f,p.receiveShadow=!0)});let x=null;if(a){let p=d.bb,m=p.min,v=p.max,y=m[0],M=v[0],P=m[2],A=v[2];for(let E=0;E<(r%4+4)%4;E++){let I=P,F=A,_=-M,b=-y;y=I,M=F,P=_,A=b}x={min:new R(n+y*o+u,h,i+P*o+u),max:new R(n+M*o-u,h+v[1]*o,i+A*o-u),kind:c,low:l,obj:g},Qn.push(x)}return{obj:g,solid:x}}var fM=.4;function Cm(s){return!(s.ref&&(s.ref.broken||s.ref.dead||s.ref.open))}function ks(s,e,t,n=fM,i=0){s.x+=e,Am(s,n,i),s.z+=t,Am(s,n,i)}function Am(s,e,t){for(let n of Qn){if(!Cm(n)||n.max.y<t+.45||n.min.y>t+1.6)continue;let i=Math.max(n.min.x,Math.min(s.x,n.max.x)),r=Math.max(n.min.z,Math.min(s.z,n.max.z)),o=s.x-i,a=s.z-r,l=o*o+a*a;if(l<e*e)if(l>1e-8){let c=Math.sqrt(l),h=(e-c)/c;s.x+=o*h,s.z+=a*h}else{let c=s.x-n.min.x,h=n.max.x-s.x,u=s.z-n.min.z,f=n.max.z-s.z,d=Math.min(c,h,u,f);d===c?s.x=n.min.x-e:d===h?s.x=n.max.x+e:d===u?s.z=n.min.z-e:s.z=n.max.z+e}}}function dM(s,e,t,n,i,r){let o=0,a=i,l=-1,c=0;for(let h=0;h<3;h++){let u=h===0?s.x:h===1?s.y:s.z,f=h===0?e.x:h===1?e.y:e.z,d=h===0?t.x:h===1?t.y:t.z,g=h===0?n.x:h===1?n.y:n.z;if(Math.abs(f)<1e-9){if(u<d||u>g)return-1;continue}let x=(d-u)/f,p=(g-u)/f,m=-1;if(x>p){let v=x;x=p,p=v,m=1}if(x>o&&(o=x,l=h,c=m),p<a&&(a=p),o>a)return-1}return l<0?-1:(r&&(r.ax=l,r.sg=c),o)}var Mf={ax:0,sg:0};function Hi(s,e,t,n={}){let i=t,r=null,o=0,a=0,l=s.x+e.x*t,c=s.y+e.y*t,h=s.z+e.z*t,u=Math.min(s.x,l),f=Math.max(s.x,l),d=Math.min(s.y,c),g=Math.max(s.y,c),x=Math.min(s.z,h),p=Math.max(s.z,h);for(let m=0,v=Qn.length;m<v;m++){let y=Qn[m];if(y.min.x>f||y.max.x<u||y.min.z>p||y.max.z<x||y.min.y>g||y.max.y<d||!Cm(y)||n.skipGlass&&y.kind==="glass"||n.ignoreLow&&y.low)continue;let M=dM(s,e,y.min,y.max,i,Mf);M>=0&&M<i&&(i=M,r=y,o=Mf.ax,a=Mf.sg)}return r?{t:i,solid:r,nx:o===0?a:0,ny:o===1?a:0,nz:o===2?a:0}:null}function qo(s,e,t,n){let i=t.radius||.38,r=t.height||1.8,o=t.pos.x,a=t.pos.z,l=t.pos.y||0,c=s.x-o,h=s.z-a,u=e.x*e.x+e.z*e.z;if(u<1e-9)return null;let f=2*(c*e.x+h*e.z),d=c*c+h*h-i*i,g=f*f-4*u*d;if(g<0)return null;let x=Math.sqrt(g);for(let p of[(-f-x)/(2*u),(-f+x)/(2*u)]){if(p<0||p>n)continue;let m=s.y+e.y*p-l,v=t.crouch?r*.72:r;if(m>=0&&m<=v)return{t:p,head:m>v*.84}}return null}var Jl={x:0,y:0,z:0},Rm={ignoreLow:!1,skipGlass:!0};function ei(s,e,t=!1){let n=e.x-s.x,i=e.y-s.y,r=e.z-s.z,o=Math.hypot(n,i,r);return o<.01?!0:(Jl.x=n/o,Jl.y=i/o,Jl.z=r/o,Rm.ignoreLow=t,!Hi(s,Jl,o-.05,Rm))}var Bs,zs=[],Yo=[],Ko=[],pM=[],Zo=[],jl,$o,ec,mM=420;function Pm(s){Bs=s,zs.length=Yo.length=Ko.length=pM.length=Zo.length=0,jl=new xn(1,1),$o=new Tt,$o.setAttribute("position",new He([0,0,0,.12,.02,0,.04,.14,0],3)),$o.computeVertexNormals(),ec=new di(.08,.08,.08),Ql.length=0;for(let[e,t]of[[MM,120],[SM,24],[bM,60]]){let n=new ls(TM,e,t);n.count=0,n.frustumCulled=!1,n.matrixAutoUpdate=!1,n.userData.i=0,s.add(n),Ql.push(n)}for(let e in Vi)Vi[e].length=0}var Vi={flash:[],tracer:[],ring:[]},Ql=[],Kr=new bt;function gM(s,e,t,n,i){Kr.position.copy(e).addScaledVector(t,n),Kr.lookAt(xM.copy(e).add(t)),Kr.rotateZ(Math.random()*6),Kr.scale.setScalar(i),Kr.updateMatrix();let r=s.userData.i;s.setMatrixAt(r,Kr.matrix),s.userData.i=(r+1)%s.instanceMatrix.count,s.count=Math.max(s.count,r+1),s.instanceMatrix.needsUpdate=!0}var Im=()=>new Et({map:Fn("spark"),blending:ln,depthWrite:!1,transparent:!0,side:Pt,forceSinglePass:!0}),Lm=new Kt({color:12576498,roughness:.05,metalness:.5,transparent:!0,opacity:.6,side:Pt,forceSinglePass:!0}),Dm={spark:[],shard:[],debris:[],smoke:[],fire:[],blood:[]};function Zr(s){let e=Dm[s].pop();if(!e){let t;s==="spark"?t=new Ie(jl,Im()):s==="shard"?t=new Ie($o,Lm):s==="debris"?t=new Ie(ec,new Kt({color:7829367,roughness:.9})):t=new Jn(new Wn({map:Fn("smoke"),depthWrite:!1,transparent:!0,color:s==="fire"?16752704:8947848,blending:s==="fire"?ln:Ni,fog:!0})),e={m:t,kind:s,v:new R,life:0,max:1,s:1,spin:new R}}return e.drag=0,e.floor=!1,Bs.add(e.m),zs.push(e),zs.length>mM&&Um(0),e}var Sf=null;function Nm(){if(Sf)return Sf;let s=new Ut,e=t=>{t.position.set(0,-50,0),s.add(t)};e(new Ie(jl,Im())),e(new Ie($o,Lm)),e(new Ie(ec,new Kt({color:7829367,roughness:.9})));for(let t of[0,1])e(new Jn(new Wn({map:Fn("smoke"),depthWrite:!1,transparent:!0,blending:t?ln:Ni,fog:!0})));return e(new Jn(new Wn({map:Fn("flash"),blending:ln,depthWrite:!1,transparent:!0}))),e(new Ie(Bm,new Et({transparent:!0,blending:ln,depthWrite:!1,side:Pt,forceSinglePass:!0}))),e(new Ie(jl,bf)),Sf=s}function Um(s){let e=zs[s];Bs.remove(e.m),zs.splice(s,1),Dm[e.kind].push(e)}var Om=new R,xM=new R;function Hs(s,e,t=8,n=16765562,i=6){for(let r=0;r<t;r++){let o=Zr("spark");o.m.position.copy(s),o.m.material.color.setHex(n),o.red&&(o.red=0,o.m.material.blending=ln),o.v.set(Math.random()-.5,Math.random()-.5,Math.random()-.5).multiplyScalar(i*.8),e&&o.v.addScaledVector(e,i*(.4+Math.random()*.6)),o.life=o.max=.18+Math.random()*.25,o.s=.05+Math.random()*.07,o.grav=9}}function Fm(s,e=6,t=7829367){for(let n=0;n<e;n++){let i=Zr("debris");i.plastic&&(i.plastic=0,i.m.geometry=ec,i.m.material.roughness=.9),i.m.material.color.setHex(t),i.m.position.copy(s),i.v.set((Math.random()-.5)*5,2+Math.random()*4,(Math.random()-.5)*5),i.spin.set(Math.random()*9,Math.random()*9,0),i.life=i.max=1+Math.random(),i.s=.6+Math.random(),i.grav=14,i.floor=!0}}var yM=new di(1,.5,.75);function Vs(s,e=14169132,t=22,n=1,i=1){t=Math.ceil(t*.6);for(let r=0;r<t;r++){let o=Zr("debris");o.plastic||(o.plastic=1,o.m.geometry=yM,o.m.material.roughness=.3,o.m.material.metalness=0),o.m.material.color.setHex(e).offsetHSL(0,0,(Math.random()-.4)*.12),o.m.position.set(s.x+(Math.random()-.5)*.6*n,s.y+(Math.random()-.3)*1.2*n,s.z+(Math.random()-.5)*.6*n),o.v.set((Math.random()-.5)*9*i,(2+Math.random()*6)*i,(Math.random()-.5)*9*i),o.spin.set(Math.random()*14,Math.random()*14,0),o.life=o.max=1.3+Math.random()*1.1,o.s=(.1+Math.random()*.16)*n,o.grav=16,o.floor=!0}}function Gs(s,e=6,t=2,n=6710886,i=2){for(let r=0;r<e;r++){let o=Zr("smoke");o.m.material.color.setHex(n),o.m.position.copy(s).add(Om.set(Math.random()-.5,Math.random()*.5,Math.random()-.5).multiplyScalar(t*.5)),o.v.set((Math.random()-.5)*1.2,.6+Math.random(),(Math.random()-.5)*1.2),o.life=o.max=i*(.6+Math.random()*.6),o.s=t*(.6+Math.random()*.5),o.grow=1.2,o.grav=0,o.alpha=.55}}function Jo(s,e,t=11183258,n=.3,i=.35,r=.7){let o=Zr("smoke");o.m.material.color.setHex(t),o.m.position.copy(s),o.v.set((Math.random()-.5)*.4,.35+Math.random()*.3,(Math.random()-.5)*.4),e&&o.v.addScaledVector(e,.8+Math.random()*.8),o.life=o.max=r*(.7+Math.random()*.5),o.s=n,o.grow=2.2,o.grav=0,o.alpha=i,o.drag=2.5,o.m.material.rotation=Math.random()*6}function Ws(s,e=14,t=2.6){for(let n=0;n<e;n++){let i=Zr("fire");i.m.position.copy(s).add(Om.set(Math.random()-.5,Math.random()*.6,Math.random()-.5).multiplyScalar(t*.6)),i.v.set((Math.random()-.5)*6,1+Math.random()*4,(Math.random()-.5)*6),i.life=i.max=.35+Math.random()*.4,i.s=t*(.5+Math.random()*.6),i.grow=1.5,i.grav=-2,i.alpha=1,i.drag=3.5}}var bf=new Et({color:16767120,blending:ln,transparent:!0,depthWrite:!1,side:Pt,forceSinglePass:!0}),_M=new Et({color:16740432,blending:ln,transparent:!0,depthWrite:!1,side:Pt,forceSinglePass:!0}),vM=new di(1,1,1);function km(s,e,t=!1){let n=s.distanceTo(e);if(n<.3)return;let i=Vi.tracer.pop()||{m:new Ie(vM,bf)},r=i.m;r.material=t?_M:bf,r.position.copy(s).lerp(e,.5),r.lookAt(e),r.scale.set(t?.035:.025,t?.035:.025,n),Bs.add(r),i.life=.06,i.len=n,i.t=0,Yo.push(i)}function jo(s,e=.5){let t=Vi.flash.pop()||new Jn(new Wn({map:Fn("flash"),blending:ln,depthWrite:!1,transparent:!0}));t.material.rotation=Math.random()*6,t.scale.setScalar(e*(.8+Math.random()*.5)),s.add(t),Ko.push({s:t,obj:s,life:.05})}var MM=new Et({map:Fn("hole"),transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4}),SM=new Et({map:Fn("scorch"),transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4}),bM=new Kt({map:Fn("blood"),transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,roughness:.25,color:16777215,emissive:2228224}),TM=new xn(1,1);function Tf(s,e,t=.14,n=!1,i=null){Ql[0]&&gM(Ql[n?1:0],s,e,.01,t)}var Bm=new Oi(.8,1,32);function Xs(s,e=16777215,t=6,n=.35){let i=Vi.ring.pop()||new Ie(Bm,new Et({transparent:!0,blending:ln,depthWrite:!1,side:Pt,forceSinglePass:!0}));i.material.color.setHex(e),i.rotation.x=-Math.PI/2,i.position.copy(s),i.position.y=.1,Bs.add(i),Zo.push({m:i,life:n,max:n,r:t})}function tc(s,e){for(let t=zs.length-1;t>=0;t--){let n=zs[t];if(n.life-=s,n.life<=0){Um(t);continue}let i=n.life/n.max;if(n.drag&&n.v.multiplyScalar(Math.max(0,1-n.drag*s)),n.v.y-=(n.grav||0)*s,n.m.position.addScaledVector(n.v,s),n.floor&&n.m.position.y<.02&&(n.m.position.y=.02,n.v.y*=-.25,n.v.x*=.6,n.v.z*=.6,n.spin.multiplyScalar(.6)),n.kind==="spark"){n.m.quaternion.copy(e.quaternion);let r=n.v.length();n.m.scale.set(n.s,n.s*(1+r*.08),1),n.m.material.opacity=i}else if(n.kind==="shard"||n.kind==="debris")n.m.rotation.x+=n.spin.x*s,n.m.rotation.y+=n.spin.y*s,n.m.scale.setScalar(n.s*Math.min(1,i*3));else{let r=n.s*(1+(1-i)*(n.grow||1));n.m.scale.setScalar(r),n.m.material.opacity=(n.alpha||.5)*Math.min(1,i*2)*(n.kind==="fire"?i:1)}}for(let t=Yo.length-1;t>=0;t--){let n=Yo[t];if(n.life-=s,n.life<=0){Bs.remove(n.m),Yo.splice(t,1),Vi.tracer.push(n);continue}n.m.material.opacity=1}for(let t=Ko.length-1;t>=0;t--){let n=Ko[t];n.life-=s,n.life<=0&&(n.obj.remove(n.s),Ko.splice(t,1),Vi.flash.length<24?Vi.flash.push(n.s):n.s.material.dispose())}for(let t=Zo.length-1;t>=0;t--){let n=Zo[t];if(n.life-=s,n.life<=0){Bs.remove(n.m),Zo.splice(t,1),Vi.ring.push(n.m);continue}let i=1-n.life/n.max;n.m.scale.setScalar(.5+i*n.r),n.m.material.opacity=1-i}}var Ot=R,Af={blue:3112416,red:14169132},T=window.G={mode:"load",units:[],tanks:[],actors:[],proj:[],noises:[],clock:0,shake:0,easy:0,kills:0,coinsRun:0,scene:null,cam:null,player:null,boss:null},xs=new Ot,nc=new Ot,wM=new Ot,qs=new Ot,Ve=(s,e)=>s+Math.random()*(e-s);function Ce(s,e=1,t=1,n=null){if(!T.audio)return;let i=0;if(n&&T.cam){let r=T.cam.position,o=n.x-r.x,a=n.z-r.z,l=Math.hypot(o,a);if(e*=1/(1+l*l/900),e<.02)return;let c=-Math.sin(T.camYaw||0),h=-Math.cos(T.camYaw||0);i=(o*-h+a*c)/(l+1)*.7}T.audio.play(s,e,t*(.94+Math.random()*.12),i)}function rc(s,e,t){T.noises.push({p:s.clone(),r:e,team:t})}function Qo(s,e,t,n,i=120,r={}){let o=Hi(e,t,i,{skipGlass:!0}),a=o?o.t:i,l=null,c=!1;for(let u of T.actors){if(!u.alive||u===s||u.team===s.team||u.noBullet)continue;let f=u.pos.x-e.x,d=u.pos.z-e.z;if(f*f+d*d>(a+3)*(a+3))continue;let g=qo(e,t,u,a);g&&g.t<a&&(a=g.t,l=u,c=g.head)}let h=wM.copy(e).addScaledVector(t,a);if(r.noTracer||km(r.from||e,h,s.team==="red"),l)l.damage(n*(c&&l.headMul?l.headMul:1),s,t,c),l.plastic?Hs(h,null,4,Af[l.team],4):Hs(h,null,5,16765562,6);else if(o){qs.set(o.nx,o.ny,o.nz);let u=o.solid.ref&&o.solid.ref.isTank?o.solid.ref:null;u&&u.team!==s.team?(u.damage(n*.35,s,t),Hs(h,qs,6,16769184,7),Ce("metal",.25,1.2,h)):(Hs(h,qs,4,16773312,5),Jo(h,qs,o.solid.dust||13616304,.25,.3,.6),Math.random()<.5&&Tf(h,qs,.16),Math.random()<.25&&Ce("ric",.25,1,h))}return r.silent||rc(e,r.loud||34,s.team),{pt:h,actor:l}}var ic=[];function Hm(s){ic.length=0;let e=new ds(16752704,0,26,1.6);s.add(e),ic.push({l:e,t:0})}function ys(s,e,t,n,i=1){let r=s.clone();r.y<.05&&(r.y=.05),Ws(r.clone().setY(r.y+.4),Math.round(8+8*i),2.2*i),Gs(r.clone().setY(r.y+.6),Math.round(4+4*i),3*i,5920336,2.4),Fm(r.clone().setY(r.y+.3),Math.round(6*i),T.groundCol||7035456),Hs(r,null,Math.round(14*i),16760928,14*i),Xs(r,16765072,e*1.4,.4),r.y<.3&&Tf(nc.set(r.x,.02,r.z),qs.set(0,1,0),e*.9,!0);let o=ic[0];if(o&&(o.l.position.set(r.x,r.y+2,r.z),o.l.intensity=60*i,o.t=.25),Ce("boom",.9*Math.min(1.3,i),i>1.4?.7:.85+Math.random()*.2,r),T.cam){let l=T.cam.position.distanceTo(r);T.shake=Math.min(1.6,T.shake+1.2*i*12/(12+l*l*.08))}rc(r,60,n?n.team:"none");let a=n?n.team:null;for(let l of T.actors){if(!l.alive)continue;let c=Math.hypot(l.pos.x-r.x,l.pos.z-r.z)-(l.radius||.4)*.5;if(c>e||l.team===a&&l!==n&&!(l.isPlayer&&n&&n.isPlayer)||(nc.set(l.pos.x,(l.pos.y||0)+Math.min(1.2,(l.height||1.8)*.5),l.pos.z),!l.isTank&&!l.isBoss&&!ei(nc.clone().setY(nc.y),r.clone().setY(r.y+.5),!0)))continue;let h=1-Math.max(0,c)/e;h=.35+.65*h;let u=t*h;(l===n||l.isPlayer&&n&&n.isPlayer)&&(u*=.3),xs.set(l.pos.x-r.x,0,l.pos.z-r.z).normalize(),l.damage(u,n,xs,!1,!0)}}function Rf(s){for(let e of ic)e.t>0&&(e.t-=s,e.l.intensity=Math.max(0,e.l.intensity*Math.pow(5e-4,s)),e.t<=0&&(e.l.intensity=0))}var Ef={},wf=null;function EM(s){wf||(wf=new Wn({map:Fn("glow"),color:16756816,blending:ln,depthWrite:!1,transparent:!0}));let t=(Ef[s]||(Ef[s]=[])).pop();return t||(s==="grenade"?(t=new Ie(new Ml(.16,1),new Kt({color:4025130,roughness:.35})),t.castShadow=!0):(t=new Jn(wf.clone()),t.material.color.setHex(s==="bolt"?16724e3:s==="arty"?16769184:16752704),t.scale.setScalar(s==="bolt"?.9:s==="arty"?1.6:.8)),t.userData.kind=s,t)}function Gi(s,e,t,n,i={}){let r=EM(s);r.position.copy(e),T.scene.add(r);let o={kind:s,m:r,pos:r.position,vel:t.clone(),owner:n,team:n?n.team:"none",life:i.life||6,grav:i.grav!=null?i.grav:s==="grenade"?22:s==="shell"?4:s==="arty"?30:0,dmg:i.dmg||100,r:i.r||4,big:i.big||1,fuse:i.fuse||0,trail:0,ign:i.ign||null};return T.proj.push(o),o}var zm={skipGlass:!0};function Cf(s){for(let e=T.proj.length-1;e>=0;e--){let t=T.proj[e];t.life-=s;let n=t.life<=0;t.vel.y-=t.grav*s;let i=t.vel.length();xs.copy(t.vel).divideScalar(i||1);let r=i*s;if(t.kind==="grenade"){t.fuse-=s,t.fuse<=0&&(n=!0);let o=Hi(t.pos,xs,r+.16,zm);if(o){let a=qs.set(o.nx,o.ny,o.nz);t.vel.addScaledVector(a,-1.6*t.vel.dot(a)).multiplyScalar(.5),t.vel.lengthSq()>9&&Ce("click",.3,.6,t.pos)}else t.pos.addScaledVector(t.vel,s);t.pos.y<.16&&(t.pos.y=.16,t.vel.y<0&&(t.vel.y*=-.35,t.vel.x*=.6,t.vel.z*=.6)),t.m.rotation.x+=s*8}else{t.ign&&(t.ign.open=!0);let o=Hi(t.pos,xs,r,zm);t.ign&&(t.ign.open=!1);let a=o?o.t:r;for(let l of T.actors){if(!l.alive||l.team===t.team||l.noBullet||l===t.ign)continue;let c=l.pos.x-t.pos.x,h=l.pos.z-t.pos.z;if(c*c+h*h>(r+4)*(r+4))continue;let u=qo(t.pos,xs,l,a);u&&u.t<=a&&(a=u.t,n=!0)}o&&o.t<=a+1e-4&&(n=!0,o.solid.ref&&o.solid.ref.isTank&&o.solid.ref.team!==t.team&&o.solid.ref.damage(t.dmg*.5,t.owner,xs)),t.pos.addScaledVector(xs,Math.max(0,a-.05)),t.pos.y<=.05&&(n=!0),t.trail-=s,t.trail<=0&&t.kind!=="bolt"&&(t.trail=.03,Jo(t.pos,null,t.kind==="arty"?13682880:11578016,t.kind==="rocket"?.35:.25,.35,.5))}n&&(T.scene.remove(t.m),Ef[t.kind].push(t.m),T.proj.splice(e,1),t.kind==="bolt"?(Hs(t.pos,null,8,16732208,6),ys(t.pos,t.r,t.dmg,t.owner,.35)):ys(t.pos,t.r,t.dmg,t.owner,t.big))}}var sc=[];function Vm(s,e){sc.length=0;for(let t of s){let n=t.max.y-t.min.y;if(t.min.y>.3||n<1.05||t.kind==="bound")continue;let i=t.max.x-t.min.x,r=t.max.z-t.min.z;if(i>30||r>30)continue;let o=2*(i+r),a=Math.max(4,Math.min(16,Math.round(o/1.8)));for(let l=0;l<a;l++){let c=(l+.5)/a*o,h,u,f=0,d=0,g=.85;c<i?(h=t.min.x+c,u=t.min.z-g,d=-1):(c-=i)<r?(h=t.max.x+g,u=t.min.z+c,f=1):(c-=r)<i?(h=t.max.x-c,u=t.max.z+g,d=1):(c-=i,h=t.min.x-g,u=t.max.z-c,f=-1);let x=new Ot(h,0,u);e(x)&&sc.push({p:x,s:t,h:n,nx:f,nz:d,user:null})}}}var oc=class extends mi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Of(t)}),this.register(function(t){return new Ff(t)}),this.register(function(t){return new qf(t)}),this.register(function(t){return new Yf(t)}),this.register(function(t){return new Kf(t)}),this.register(function(t){return new Bf(t)}),this.register(function(t){return new zf(t)}),this.register(function(t){return new Hf(t)}),this.register(function(t){return new Vf(t)}),this.register(function(t){return new Uf(t)}),this.register(function(t){return new Gf(t)}),this.register(function(t){return new kf(t)}),this.register(function(t){return new Xf(t)}),this.register(function(t){return new Wf(t)}),this.register(function(t){return new Df(t)}),this.register(function(t){return new Zf(t)}),this.register(function(t){return new $f(t)})}load(e,t,n,i){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=ps.extractUrlBase(e);o=ps.resolveURL(c,this.path)}else o=ps.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new fs(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Ym){try{o[tt.KHR_BINARY_GLTF]=new Jf(e)}catch(u){i&&i(u);return}r=JSON.parse(o[tt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new sd(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case tt.KHR_MATERIALS_UNLIT:o[u]=new Nf;break;case tt.KHR_DRACO_MESH_COMPRESSION:o[u]=new jf(r,this.dracoLoader);break;case tt.KHR_TEXTURE_TRANSFORM:o[u]=new Qf;break;case tt.KHR_MESH_QUANTIZATION:o[u]=new ed;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function AM(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}var tt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Df=class{constructor(e){this.parser=e,this.name=tt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new ce(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Zt);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Hr(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new ds(h),c.distance=u;break;case"spot":c=new Pl(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Wi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}},Nf=class{constructor(){this.name=tt.KHR_MATERIALS_UNLIT}getMaterialType(){return Et}extendParams(e,t,n){let i=[];e.color=new ce(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Zt),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,wt))}return Promise.all(i)}},Uf=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Of=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new te(a,a)}return Promise.all(r)}},Ff=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xn}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},kf=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},Bf=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new ce(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Zt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,wt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},zf=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},Hf=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new ce().setRGB(a[0],a[1],a[2],Zt),Promise.all(r)}},Vf=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xn}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Gf=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new ce().setRGB(a[0],a[1],a[2],Zt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,wt)),Promise.all(r)}},Wf=class{constructor(e){this.parser=e,this.name=tt.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},Xf=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},qf=class{constructor(e){this.parser=e,this.name=tt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},Yf=class{constructor(e){this.parser=e,this.name=tt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Kf=class{constructor(e){this.parser=e,this.name=tt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Zf=class{constructor(e){this.name=tt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,f,i.mode,i.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(d),h,u,f,i.mode,i.filter),d})})}else return null}},$f=class{constructor(e){this.name=tt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let c of i.primitives)if(c.mode!==ti.TRIANGLES&&c.mode!==ti.TRIANGLE_STRIP&&c.mode!==ti.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],f=c[0].count,d=[];for(let g of u){let x=new Ee,p=new R,m=new Vt,v=new R(1,1,1),y=new ls(g.geometry,g.material,f);for(let M=0;M<f;M++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,M),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,M),l.SCALE&&v.fromBufferAttribute(l.SCALE,M),y.setMatrixAt(M,x.compose(p,m,v));for(let M in l)if(M==="_COLOR_0"){let P=l[M];y.instanceColor=new Us(P.array,P.itemSize,P.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&g.geometry.setAttribute(M,l[M]);bt.prototype.copy.call(y,g),this.parser.assignFinalMaterial(y),d.push(y)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}},Ym="glTF",ea=12,Gm={JSON:1313821514,BIN:5130562},Jf=class{constructor(e){this.name=tt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,ea),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Ym)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-ea,r=new DataView(e,ea),o=0;for(;o<i;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===Gm.JSON){let c=new Uint8Array(e,ea+o,a);this.content=n.decode(c)}else if(l===Gm.BIN){let c=ea+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},jf=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=tt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let h in o){let u=nd[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=nd[h]||h.toLowerCase();if(o[h]!==void 0){let f=n.accessors[e.attributes[h]],d=$r[f.componentType];c[u]=d.name,l[u]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){i.decodeDracoFile(h,function(d){for(let g in d.attributes){let x=d.attributes[g],p=l[g];p!==void 0&&(x.normalized=p)}u(d)},a,c,Zt,f)})})}},Qf=class{constructor(){this.name=tt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},ed=class{constructor(){this.name=tt.KHR_MESH_QUANTIZATION}},ac=class extends cs{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=i-t,u=(n-t)/h,f=u*u,d=f*u,g=e*c,x=g-c,p=-2*d+3*f,m=d-f,v=1-p,y=m-f+u;for(let M=0;M!==a;M++){let P=o[x+M+a],A=o[x+M+l]*h,E=o[g+M+a],I=o[g+M]*h;r[M]=v*P+y*A+p*E+m*I}return r}},RM=new Vt,td=class extends ac{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return RM.fromArray(r).normalize().toArray(r),r}},ti={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},$r={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Wm={9728:Qt,9729:Dn,9984:Zu,9985:go,9986:vr,9987:_i},Xm={33071:Li,33648:So,10497:cn},Pf={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},nd={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},_s={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},CM={CUBICSPLINE:void 0,LINEAR:Ir,STEP:Pr},If={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function PM(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Kt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:An})),s.DefaultMaterial}function Ys(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Wi(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function IM(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(n){let f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;o.push(f)}if(i){let f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;a.push(f)}if(r){let f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],f=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function LM(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function DM(s){let e,t=s.extensions&&s.extensions[tt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Lf(t.attributes):e=s.indices+":"+Lf(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Lf(s.targets[n]);return e}function Lf(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function id(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function NM(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var UM=new Ee,sd=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new AM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator!="undefined"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap=="undefined"||n&&i<17||r&&o<98?this.textureLoader=new Rl(this.options.manager):this.textureLoader=new Il(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new fs(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Ys(r,a,i),Wi(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,h]of o.children.entries())r(h,a.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[tt.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,o){n.load(ps.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let o=Pf[i.type],a=$r[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new Ft(c,o,l))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=Pf[i.type],c=$r[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0,x,p;if(d&&d!==u){let m=Math.floor(f/d),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count,y=t.cache.get(v);y||(x=new c(a,m*d,i.count*d/h),y=new Or(x,d/h),t.cache.add(v,y)),p=new Ns(y,l,f%d/h,g)}else a===null?x=new c(i.count*l):x=new c(a,f,i.count*l),p=new Ft(x,l,g);if(i.sparse!==void 0){let m=Pf.SCALAR,v=$r[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,M=i.sparse.values.byteOffset||0,P=new v(o[1],y,i.sparse.count*m),A=new c(o[2],M,i.sparse.count*l);a!==null&&(p=new Ft(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let E=0,I=P.length;E<I;E++){let F=P[E];if(p.setX(F,A[E*l]),l>=2&&p.setY(F,A[E*l+1]),l>=3&&p.setZ(F,A[E*l+2]),l>=4&&p.setW(F,A[E*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=g}return p})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let i=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let f=(r.samplers||{})[o.sampler]||{};return h.magFilter=Wm[f.magFilter]||Dn,h.minFilter=Wm[f.minFilter]||_i,h.wrapS=Xm[f.wrapS]||cn,h.wrapT=Xm[f.wrapT]||cn,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let o=i.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(u){c=!0;let f=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(u){return new Promise(function(f,d){let g=f;t.isImageBitmapLoader===!0&&(g=function(x){let p=new hn(x);p.needsUpdate=!0,f(p)}),t.load(ps.resolveURL(u,r.path),g,void 0,d)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),Wi(u,o),u.userData.mimeType=o.mimeType||NM(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[tt.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[tt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[tt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Io,Cn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Po,Cn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Kt}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],o,a={},l=r.extensions||{},c=[];if(l[tt.KHR_MATERIALS_UNLIT]){let u=i[tt.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new ce(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let f=u.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],Zt),a.opacity=f[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,wt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Pt);let h=r.alphaMode||If.OPAQUE;if(h===If.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===If.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Et&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new te(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==Et&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Et){let u=r.emissiveFactor;a.emissive=new ce().setRGB(u[0],u[1],u[2],Zt)}return r.emissiveTexture!==void 0&&o!==Et&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,wt)),Promise.all(c).then(function(){let u=new o(a);return r.name&&(u.name=r.name),Wi(u,r),t.associations.set(u,{materials:e}),r.extensions&&Ys(i,u,r),u})}createUniqueName(e){let t=Ct.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[tt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return qm(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],h=DM(c),u=i[h];if(u)o.push(u.promise);else{let f;c.extensions&&c.extensions[tt.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=qm(new Tt,c,t),i[h]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let h=o[l].material===void 0?PM(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let d=0,g=h.length;d<g;d++){let x=h[d],p=o[d],m,v=c[d];if(p.mode===ti.TRIANGLES||p.mode===ti.TRIANGLE_STRIP||p.mode===ti.TRIANGLE_FAN||p.mode===void 0)m=r.isSkinnedMesh===!0?new Fr(x,v):new Ie(x,v),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),p.mode===ti.TRIANGLE_STRIP?m.geometry=gf(m.geometry,Fl):p.mode===ti.TRIANGLE_FAN&&(m.geometry=gf(m.geometry,Fo));else if(p.mode===ti.LINES)m=new gl(x,v);else if(p.mode===ti.LINE_STRIP)m=new kr(x,v);else if(p.mode===ti.LINE_LOOP)m=new xl(x,v);else if(p.mode===ti.POINTS)m=new yl(x,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&LM(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),Wi(m,r),p.extensions&&Ys(i,m,p),t.assignFinalMaterial(m),u.push(m)}for(let d=0,g=u.length;d<g;d++)t.associations.set(u[d],{meshes:e,primitives:d});if(u.length===1)return r.extensions&&Ys(i,u[0],r),u[0];let f=new Ut;r.extensions&&Ys(i,f,r),t.associations.set(f,{meshes:e});for(let d=0,g=u.length;d<g;d++)f.add(u[d]);return f})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new jt(lm.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new rs(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Wi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),o=i,a=[],l=[];for(let c=0,h=o.length;c<h;c++){let u=o[c];if(u){a.push(u);let f=new Ee;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new dl(a,l)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let u=0,f=i.channels.length;u<f;u++){let d=i.channels[u],g=i.samplers[d.sampler],x=d.target,p=x.node,m=i.parameters!==void 0?i.parameters[g.input]:g.input,v=i.parameters!==void 0?i.parameters[g.output]:g.output;x.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",v)),c.push(g),h.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let f=u[0],d=u[1],g=u[2],x=u[3],p=u[4],m=[];for(let v=0,y=f.length;v<y;v++){let M=f[v],P=d[v],A=g[v],E=x[v],I=p[v];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();let F=n._createAnimationTracks(M,P,A,E,I);if(F)for(let _=0;_<F.length;_++)m.push(F[_])}return new Br(r,void 0,m)})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));let l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let h=c[0],u=c[1],f=c[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,UM)});for(let d=0,g=u.length;d<g;d++)h.add(u[d]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new Co:c.length>1?h=new Ut:c.length===1?h=c[0]:h=new bt,h!==c[0])for(let u=0,f=c.length;u<f;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Wi(h,r),r.extensions&&Ys(n,h,r),r.matrix!==void 0){let u=new Ee;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new Ut;n.name&&(r.name=i.createUniqueName(n.name)),Wi(r,n),n.extensions&&Ys(t,r,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);let c=h=>{let u=new Map;for(let[f,d]of i.associations)(f instanceof Cn||f instanceof hn)&&u.set(f,d);return h.traverse(f=>{let d=i.associations.get(f);d!=null&&u.set(f,d)}),u};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){let o=[],a=e.name?e.name:e.uuid,l=[];_s[r.path]===_s.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(_s[r.path]){case _s.weights:c=Fi;break;case _s.rotation:c=ki;break;case _s.position:case _s.scale:c=Bi;break;default:n.itemSize===1?c=Fi:c=Bi;break}let h=i.interpolation!==void 0?CM[i.interpolation]:Ir,u=this._getArrayFromAccessor(n);for(let f=0,d=l.length;f<d;f++){let g=new c(l[f]+"."+_s[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=id(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof ki?td:ac;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function OM(s,e,t){let n=e.attributes,i=new Zn;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new R(l[0],l[1],l[2]),new R(c[0],c[1],c[2])),a.normalized){let h=id($r[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new R,l=new R;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let f=t.json.accessors[u.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){let x=id($r[f.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;let o=new Rn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function qm(s,e,t){let n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(let o in n){let a=nd[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){let o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return et.workingColorSpace!==Zt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${et.workingColorSpace}" not supported.`),Wi(s,e),OM(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?IM(s,e.targets,t):s})}var rd=new WeakMap,lc=class extends mi{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){let r=new fs(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,o=>{this.parse(o,t,i)},n,i)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,wt,n).catch(n)}decodeDracoFile(e,t,n,i,r=Zt,o=()=>{}){let a={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:r};return this.decodeGeometry(e,a).then(t).catch(o)}decodeGeometry(e,t){let n=JSON.stringify(t);if(rd.has(e)){let l=rd.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i,r=this.workerNextTaskID++,o=e.byteLength,a=this._getWorker(r,o).then(l=>(i=l,new Promise((c,h)=>{i._callbacks[r]={resolve:c,reject:h},i.postMessage({type:"decode",id:r,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return a.catch(()=>!0).then(()=>{i&&r&&this._releaseTask(i,r)}),rd.set(e,{key:n,promise:a}),a}_createGeometry(e){let t=new Tt;e.index&&t.setIndex(new Ft(e.index.array,1));for(let n=0;n<e.attributes.length;n++){let i=e.attributes[n],r=i.name,o=i.array,a=i.itemSize,l=new Ft(o,a);r==="color"&&(this._assignVertexColorSpace(l,i.vertexColorSpace),l.normalized=!(o instanceof Float32Array)),t.setAttribute(r,l)}return t}_assignVertexColorSpace(e,t){if(t!==wt)return;let n=new ce;for(let i=0,r=e.count;i<r;i++)n.fromBufferAttribute(e,i),et.toWorkingColorSpace(n,wt),e.setXYZ(i,n.r,n.g,n.b)}_loadLibrary(e,t){let n=new fs(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,r)=>{n.load(e,i,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;let e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{let i=n[0];e||(this.decoderConfig.wasmBinary=n[1]);let r=FM.toString(),o=["/* draco decoder */",i,"","/* worker */",r.substring(r.indexOf("{")+1,r.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([o]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){let i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(r){let o=r.data;switch(o.type){case"decode":i._callbacks[o.id].resolve(o);break;case"error":i._callbacks[o.id].reject(o);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+o.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,r){return i._taskLoad>r._taskLoad?-1:1});let n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}};function FM(){let s,e;onmessage=function(o){let a=o.data;switch(a.type){case"init":s=a.decoderConfig,e=new Promise(function(h){s.onModuleLoaded=function(u){h({draco:u})},DracoDecoderModule(s)});break;case"decode":let l=a.buffer,c=a.taskConfig;e.then(h=>{let u=h.draco,f=new u.Decoder;try{let d=t(u,f,new Int8Array(l),c),g=d.attributes.map(x=>x.array.buffer);d.index&&g.push(d.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:d},g)}catch(d){console.error(d),self.postMessage({type:"error",id:a.id,error:d.message})}finally{u.destroy(f)}});break}};function t(o,a,l,c){let h=c.attributeIDs,u=c.attributeTypes,f,d,g=a.GetEncodedGeometryType(l);if(g===o.TRIANGULAR_MESH)f=new o.Mesh,d=a.DecodeArrayToMesh(l,l.byteLength,f);else if(g===o.POINT_CLOUD)f=new o.PointCloud,d=a.DecodeArrayToPointCloud(l,l.byteLength,f);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!d.ok()||f.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+d.error_msg());let x={index:null,attributes:[]};for(let p in h){let m=self[u[p]],v,y;if(c.useUniqueIDs)y=h[p],v=a.GetAttributeByUniqueId(f,y);else{if(y=a.GetAttributeId(f,o[h[p]]),y===-1)continue;v=a.GetAttribute(f,y)}let M=i(o,a,f,p,m,v);p==="color"&&(M.vertexColorSpace=c.vertexColorSpace),x.attributes.push(M)}return g===o.TRIANGULAR_MESH&&(x.index=n(o,a,f)),o.destroy(f),x}function n(o,a,l){let h=l.num_faces()*3,u=h*4,f=o._malloc(u);a.GetTrianglesUInt32Array(l,u,f);let d=new Uint32Array(o.HEAPF32.buffer,f,h).slice();return o._free(f),{array:d,itemSize:1}}function i(o,a,l,c,h,u){let f=u.num_components(),g=l.num_points()*f,x=g*h.BYTES_PER_ELEMENT,p=r(o,h),m=o._malloc(x);a.GetAttributeDataArrayForAllPoints(l,u,p,x,m);let v=new h(o.HEAPF32.buffer,m,g).slice();return o._free(m),{name:c,array:v,itemSize:f}}function r(o,a){switch(a){case Float32Array:return o.DT_FLOAT32;case Int8Array:return o.DT_INT8;case Int16Array:return o.DT_INT16;case Int32Array:return o.DT_INT32;case Uint8Array:return o.DT_UINT8;case Uint16Array:return o.DT_UINT16;case Uint32Array:return o.DT_UINT32}}}function Km(s){let e=new Map,t=new Map,n=s.clone();return Zm(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let r=i,o=e.get(i),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Zm(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)Zm(s.children[n],e.children[n],t)}var BM=["blue_spec","blue_sniper","blue_heavy","red_rifle","red_heavy","robot"],zM=["rifle","blue_tank","red_tank","artillery","abc_block","brick","sandbags","ammo_crate","toy_box","book_stack","gnome","bucket","rock","flowerpot","duck","teddy","ball","wateringcan"],cc={},Wt={},ta=null;function HM(){if(ta)return ta;let s=new lc;return s.setDecoderPath("assets/draco/"),s.setDecoderConfig({type:"wasm"}),ta=new oc,ta.setDRACOLoader(s),ta}var jm=s=>fetch(s).then(e=>e.ok?e.json():null).catch(()=>null),hc=s=>new Promise(e=>HM().load(s,t=>e(t),void 0,()=>e(null)));async function VM(s){if(cc[s])return;let[e,t,n]=await Promise.all([hc("assets/chars/"+s+".glb"),jm("assets/chars/"+s+".json"),na>0?hc("assets/lod/chars/"+s+".glb"):null]);e&&(cc[s]={g:e,meta:t,lo:n?GM(n):null})}function GM(s){let e=null;return s.scene.traverse(t=>{t.isSkinnedMesh&&!e&&(e=t)}),e?(e.material&&e.material.dispose&&e.material.dispose(),{geo:e.geometry,names:e.skeleton.bones.map(t=>t.name),pos:e.position.clone(),q:e.quaternion.clone(),s:e.scale.clone(),map:new WeakMap}):null}function WM(s,e,t){let n=t.map.get(e.skeleton.bones[0]&&e.geometry),i=e.skeleton.bones.map(l=>l.name);if(!n){let l=t.names.map(h=>i.indexOf(h));if(l.some(h=>h<0))return;n=t.geo.clone();let c=n.attributes.skinIndex;for(let h=0;h<c.array.length;h++)c.array[h]=l[c.array[h]];c.needsUpdate=!0,t.map.set(e.geometry,n)}let r=new Fr(n,e.material);r.position.copy(e.position),r.quaternion.copy(e.quaternion),r.scale.copy(e.scale),r.castShadow=e.castShadow,r.receiveShadow=e.receiveShadow,r.bindMode=e.bindMode,r.bind(e.skeleton,e.bindMatrix),r.frustumCulled=!0,r.boundingSphere=e.boundingSphere.clone(),r.onBeforeRender=e.onBeforeRender;let o=e.parent,a=new Ro;o.add(a),a.addLevel(e,0),a.addLevel(r,13*na,.1),s.lod=a}var na=1;function Qm(s){na=s}var $m=s=>{let e=[];return s.traverse(t=>{t.isMesh&&e.push(t)}),e};async function XM(s){if(Wt[s])return;let[e,t,n]=await Promise.all([hc("assets/props/"+s+".glb"),jm("assets/props/"+s+".json"),na>0&&!/_tank$/.test(s)?hc("assets/lod/"+s+".glb"):null]);if(e&&t){let i=$m(e.scene);for(let o of i){o.castShadow=!0,o.receiveShadow=!0;let a=o.material;a&&a.side===Pt&&!a.transparent&&(a.side=An)}let r=e.scene;if(n){let o=$m(n.scene);if(o.length===i.length){o.forEach((c,h)=>{let u=c.material;c.material=i[h].material,u&&u!==c.material&&u.dispose(),c.castShadow=!0,c.receiveShadow=!0});let a=Math.max(t.max[0]-t.min[0],t.max[1]-t.min[1],t.max[2]-t.min[2]),l=new Ro;l.addLevel(e.scene,0),l.addLevel(n.scene,(7+5*a)*na,.12),r=new Ut,r.name="Scene",r.add(l)}}Wt[s]={scene:r,bb:t}}}async function e0(s,e=BM,t=zM){let n=[...e.filter(o=>!cc[o]).map(o=>()=>VM(o)),...t.filter(o=>!Wt[o]).map(o=>()=>XM(o))],i=0,r=n.length||1;await Promise.all(n.map(o=>o().then(()=>s&&s(++i/r)))),!n.length&&s&&s(1)}var qM={blue_spec:1.8,blue_sniper:1.8,blue_heavy:1.95,red_rifle:1.8,red_heavy:2,robot:9},Ob=new R,Fb=new Vt,Jm=new WeakMap;function YM(s){let e=Jm.get(s);if(!e){s.boundingBox||s.computeBoundingBox();let t=s.boundingBox,n=t.getSize(new R);e=new Rn(t.getCenter(new R),Math.max(n.x,n.y,n.z)*1.3),Jm.set(s,e)}return e.clone()}var ia=class{constructor(e,t){let n=cc[e];if(this.name=e,this.s=qM[e]||1.8,this.meta=n.meta||{},this.root=new Ut,this.model=Km(n.g.scene),this.model.scale.setScalar(this.s),this.root.add(this.model),this.model.traverse(i=>{i.isMesh&&(i.castShadow=!0,i.receiveShadow=!1,i.isSkinnedMesh&&(i.frustumCulled=!0,i.boundingSphere=YM(i.geometry),i.onBeforeRender=()=>{this.seenT=performance.now()}),i.material&&(i.material=i.material.clone(),i.material.roughness=.32,i.material.metalness=0,i.material.envMapIntensity=1.25,i.material.side===Pt&&!i.material.transparent&&(i.material.side=An))),i.isBone&&(i.name==="spine"&&(this.spine=i),i.name==="head"&&(this.head=i),i.name==="hips"&&(this.hips=i),(this.bones||(this.bones={}))[i.name]=i)}),n.lo){let i=null;if(this.model.traverse(r=>{r.isSkinnedMesh&&(!i||r.geometry.attributes.position.count>i.geometry.attributes.position.count)&&(i=r)}),i)try{WM(this,i,n.lo)}catch(r){console.warn("charlod",r)}}this.mixer=new Dl(this.model),this.acts={};for(let i of n.g.animations){let r=this.mixer.clipAction(i);this.acts[i.name]=r}for(let i of["kick","death","cower"])this.acts[i]&&(this.acts[i].setLoop(sf),this.acts[i].clampWhenFinished=!0);this.cur=null,this.play("idle",0),this.mixer.update(0),t.add(this.root),this.flash=0}play(e,t=.15,n=1){let i=this.acts[e]||this.acts.idle;i&&(i.timeScale=n,this.cur!==i&&((!(i.isRunning()&&i.getEffectiveWeight()>.05)||e==="death"||e==="kick")&&i.reset(),i.enabled=!0,i.setEffectiveWeight(1),i.play(),this.cur&&t>0?this.cur.crossFadeTo(i,t,!1):this.cur&&this.cur.stop(),this.cur=i,this.curName=e))}arm(e,t=.1,n=1){let i=Wt[e];if(!i)return null;let r=i.scene.clone(!0);r.scale.setScalar(n);let o=this.meta.handR||[-.11,.75,.2],a=this.meta.handL||o;this.root.updateMatrixWorld(!0);let l=(o[0]*.6+a[0]*.4)*this.s,c=(o[1]*.55+a[1]*.45)*this.s,h=(o[2]*.5+a[2]*.5)*this.s;return r.position.set(l,c,h+t),this.root.add(r),this.root.updateMatrixWorld(!0),(this.spine||this.root).attach(r),this.gun=r,this.muzzle=new bt,this.muzzle.position.set(0,(i.bb.max[1]+i.bb.min[1])*.5+.02,i.bb.max[2]),r.add(this.muzzle),r}hitFlash(){this.flash=.08}update(e){if(performance.now()-(this.seenT||0)>250){if(this.acc=(this.acc||0)+e,this.acc<.1&&this.flash<=0)return;e=this.acc,this.acc=0}else this.acc&&(e+=this.acc,this.acc=0);if(this.mixer.update(e),this.flash>0){this.flash-=e;let t=this.flash>0;this.model.traverse(n=>{n.isMesh&&n.material.emissive&&n.material.emissive.setHex(t?8930338:0)})}}muzzleWorld(e){return this.muzzle?this.muzzle.getWorldPosition(e):e.copy(this.root.position).setY(1.4)}fade(e){this.model.traverse(t=>{t.isMesh&&(t.material.transparent=e<1,t.material.opacity=e)}),this.gun&&this.gun.traverse(t=>{t.isMesh&&(t.material=t.material.clone(),t.material.transparent=!0,t.material.opacity=e)})}};function t0(s,e=.58){let t=Wt[s];if(!t||t.hull)return;let n=null;if(t.scene.updateMatrixWorld(!0),t.scene.traverse(q=>{q.isMesh&&!n&&(n=q)}),!n)return;let i=n.geometry.clone();i.applyMatrix4(n.matrixWorld),i.index||i.setIndex([...Array(i.attributes.position.count).keys()]);let r=i.attributes.position,o=i.index.array,a=t.bb.max[1]-t.bb.min[1],l=t.bb.min[1]+a*e,c=[],h=[];for(let q=0;q<o.length;q+=3){let z=o[q],j=o[q+1],W=o[q+2];((r.getY(z)+r.getY(j)+r.getY(W))/3>l?h:c).push(z,j,W)}let u=0,f=0,d=0,g=new Set(h);for(let q of g)u+=r.getX(q),f+=r.getZ(q),d++;let x=u/d,p=f/d,m=[...g].map(q=>[Math.hypot(r.getX(q)-x,r.getZ(q)-p),q]).sort((q,z)=>q[0]-z[0]),v=0,y=0,M=Math.floor(m.length*.6);for(let q=0;q<M;q++)v+=r.getX(m[q][1]),y+=r.getZ(m[q][1]);v/=M,y/=M;let P=null,A=0;for(let q of g){let z=Math.hypot(r.getX(q)-v,r.getZ(q)-y);z>A&&(A=z,P=q)}let E=Math.round(Math.atan2(r.getX(P)-v,r.getZ(P)-y)/(Math.PI/2))*(Math.PI/2),I=new Ee().makeRotationY(-E),F=(q,z,j)=>{let W=i.clone();return W.setIndex(q),W.translate(-z,0,-j),W.applyMatrix4(I),W.computeBoundingSphere(),W},_=n.material,b=new Ie(F(c,v,y),_),O=new Ie(F(h,v,y),_);t.hull=new Ut,t.hull.add(b),t.turret=new Ut,t.turret.add(O),t.pivot=new R(0,0,0),O.geometry.computeBoundingBox();let k=O.geometry.boundingBox;t.tip=new R(0,(k.min.y+k.max.y)/2+a*.05,k.max.z+.2),b.geometry.computeBoundingBox();let G=b.geometry.boundingBox;t.half=[Math.max(-G.min.x,G.max.x)*.9,0,Math.max(-G.min.z,G.max.z)*.9],t.H=a}function KM(s){let e=s>>>0||1;return()=>(e^=e<<13,e>>>=0,e^=e>>17,e^=e<<5,e>>>=0,e/4294967296)}function _n(s,e=s){let t=document.createElement("canvas");return t.width=s,t.height=e,[t,t.getContext("2d")]}function vs(s,e,t,n,i,r){for(let o=0;o<i;o++){let a=n()<.5?0:255;s.fillStyle=`rgba(${a},${a},${a},${r*n()})`,s.fillRect(n()*e,n()*t,1+n()*3,1+n()*3)}}var od={};function vn(s,e){if(od[s])return od[s];let t=new vi(e());return t.wrapS=t.wrapT=cn,t.colorSpace=wt,t.anisotropy=4,od[s]=t}function ni(s){let e=KM(s.length*131+s.charCodeAt(0)*17);switch(s){case"grass":return vn(s,()=>{let[t,n]=_n(512);n.fillStyle="#4f8f2e",n.fillRect(0,0,512,512);for(let i=0;i<9e3;i++){let r=e()*512,o=e()*512,a=4+e()*10,l=e();n.strokeStyle=l<.33?"#3a7322":l<.66?"#66a83a":"#7dbd47",n.lineWidth=1+e(),n.beginPath(),n.moveTo(r,o),n.lineTo(r+(e()-.5)*4,o-a),n.stroke()}for(let i=0;i<30;i++)n.fillStyle="rgba(40,70,20,.18)",n.beginPath(),n.arc(e()*512,e()*512,20+e()*50,0,7),n.fill();return t});case"sand":return vn(s,()=>{let[t,n]=_n(512);n.fillStyle="#e3c88a",n.fillRect(0,0,512,512),vs(n,512,512,e,26e3,.25),n.strokeStyle="rgba(150,110,50,.18)",n.lineWidth=3;for(let i=0;i<18;i++){n.beginPath();let r=e()*512;n.moveTo(0,r);for(let o=0;o<=512;o+=32)n.lineTo(o,r+Math.sin(o*.03+i)*8);n.stroke()}return t});case"wallpaper":return vn(s,()=>{let[t,n]=_n(512);n.fillStyle="#a9d4f0",n.fillRect(0,0,512,512);for(let r=0;r<512;r+=64)n.fillStyle="rgba(255,255,255,.35)",n.fillRect(r,0,26,512);let i=(r,o,a,l)=>{n.fillStyle=l,n.beginPath();for(let c=0;c<10;c++){let h=c*Math.PI/5-Math.PI/2,u=c%2?a*.45:a;n.lineTo(r+Math.cos(h)*u,o+Math.sin(h)*u)}n.fill()};for(let r=0;r<14;r++)i(e()*512,e()*512,10+e()*12,["#ffd84a","#ffffff","#ff9a6a"][r%3]);n.fillStyle="rgba(255,255,255,.9)";for(let r=0;r<4;r++){let o=e()*512,a=e()*512;for(let l=0;l<4;l++)n.beginPath(),n.arc(o+l*16,a+l%2*-6,14,0,7),n.fill()}return t});case"playmat":return vn(s,()=>{let[t,n]=_n(1024);n.fillStyle="#6cb84a",n.fillRect(0,0,1024,1024),vs(n,1024,1024,e,2e4,.12),n.fillStyle="#5d6670";for(let r of[180,620])n.fillRect(r,0,110,1024),n.fillRect(0,r,1024,110);n.fillStyle="#ffffff";for(let r of[235,675])for(let o=0;o<1024;o+=60)n.fillRect(r-4,o,8,30),n.fillRect(o,r-4,30,8);let i=[["#4aa0e8",40,40],["#f08a3a",350,60],["#e8d44a",800,50],["#e85a7a",60,360],["#8a6ae8",380,380],["#3ad0b0",820,380],["#f0c040",40,800],["#4ae86a",380,820],["#e84a4a",820,820]];for(let[r,o,a]of i)n.fillStyle=r,n.fillRect(o,a,110,90),n.fillStyle="rgba(0,0,0,.25)",n.fillRect(o,a+70,110,20),n.fillStyle="#fff",n.fillRect(o+20,a+20,24,24),n.fillRect(o+64,a+20,24,24);return n.strokeStyle="#2b70c8",n.lineWidth=40,n.beginPath(),n.moveTo(0,520),n.bezierCurveTo(300,470,500,560,1024,520),n.stroke(),t});case"wood":return vn(s,()=>{let[t,n]=_n(512);n.fillStyle="#b07a48",n.fillRect(0,0,512,512);for(let i=0;i<512;i+=64)n.fillStyle=e()<.5?"rgba(90,50,20,.15)":"rgba(255,220,170,.08)",n.fillRect(0,i,512,64),n.fillStyle="rgba(60,30,10,.5)",n.fillRect(0,i,512,2);n.strokeStyle="rgba(80,40,15,.25)";for(let i=0;i<140;i++){n.lineWidth=.5+e()*1.5,n.beginPath();let r=e()*512;n.moveTo(0,r);for(let o=0;o<=512;o+=32)n.lineTo(o,r+Math.sin(o*.02+i)*3);n.stroke()}return t});case"blanket":return vn(s,()=>{let[t,n]=_n(512);n.fillStyle="#e64b4b",n.fillRect(0,0,512,512);for(let i=0;i<512;i+=128)n.fillStyle="rgba(255,255,255,.85)",n.fillRect(i+50,0,28,512),n.fillRect(0,i+50,512,28),n.fillStyle="rgba(30,40,120,.55)",n.fillRect(i+58,0,12,512),n.fillRect(0,i+58,512,12);return vs(n,512,512,e,9e3,.12),t});case"sheet":return vn(s,()=>{let[t,n]=_n(256);n.fillStyle="#f3f0e6",n.fillRect(0,0,256,256),vs(n,256,256,e,3e3,.08),n.fillStyle="#9cc8ee";for(let i=16;i<256;i+=32)for(let r=i/32%2*16+8;r<256;r+=32)n.beginPath(),n.arc(r,i,5,0,7),n.fill();return t});case"water":return vn(s,()=>{let[t,n]=_n(512),i=n.createLinearGradient(0,0,512,512);i.addColorStop(0,"#3aa6e0"),i.addColorStop(1,"#2a86c8"),n.fillStyle=i,n.fillRect(0,0,512,512),n.strokeStyle="rgba(255,255,255,.35)";for(let r=0;r<70;r++){n.lineWidth=1+e()*3,n.beginPath();let o=e()*512,a=e()*512,l=20+e()*60;n.moveTo(o,a),n.quadraticCurveTo(o+l/2,a-8,o+l,a),n.stroke()}return t});case"hose":return vn(s,()=>{let[t,n]=_n(256,64);n.fillStyle="#2fa84a",n.fillRect(0,0,256,64),n.fillStyle="rgba(255,255,255,.25)",n.fillRect(0,10,256,8),n.fillStyle="rgba(0,0,0,.2)";for(let i=0;i<256;i+=16)n.fillRect(i,0,3,64);return n.fillStyle="#f2e24a",n.fillRect(0,40,256,6),t});case"poolrim":return vn(s,()=>{let[t,n]=_n(512,64);for(let i=0;i<512;i+=64)n.fillStyle=i/64%2?"#ffffff":"#ff6a3a",n.fillRect(i,0,64,64);return n.fillStyle="rgba(255,255,255,.4)",n.fillRect(0,12,512,6),t});case"poolfloor":return vn(s,()=>{let[t,n]=_n(256);n.fillStyle="#5ac8f0",n.fillRect(0,0,256,256),n.fillStyle="rgba(255,255,255,.5)";for(let i=0;i<10;i++)n.beginPath(),n.arc(e()*256,e()*256,8+e()*14,0,7),n.fill();return t});case"fence":return vn(s,()=>{let[t,n]=_n(512);n.fillStyle="#d8c7a4",n.fillRect(0,0,512,512);for(let i=0;i<512;i+=64)n.fillStyle=e()<.5?"#cbb994":"#e2d3b2",n.fillRect(i+3,0,58,512),n.fillStyle="rgba(70,50,30,.55)",n.fillRect(i,0,3,512);return n.fillStyle="rgba(70,50,30,.35)",n.fillRect(0,90,512,18),n.fillRect(0,400,512,18),vs(n,512,512,e,8e3,.12),t});case"house":return vn(s,()=>{let[t,n]=_n(512);n.fillStyle="#efe2c8",n.fillRect(0,0,512,512),n.fillStyle="rgba(160,130,90,.28)";for(let i=0;i<512;i+=32)n.fillRect(0,i,512,4);return vs(n,512,512,e,6e3,.1),t});case"soil":return vn(s,()=>{let[t,n]=_n(256);return n.fillStyle="#6a4a2e",n.fillRect(0,0,256,256),vs(n,256,256,e,9e3,.3),t});case"cardboard":return vn(s,()=>{let[t,n]=_n(256);n.fillStyle="#c49a62",n.fillRect(0,0,256,256),n.fillStyle="rgba(120,80,40,.18)";for(let i=0;i<256;i+=8)n.fillRect(i,0,3,256);return vs(n,256,256,e,3e3,.1),t});case"sky":return vn(s,()=>{let[t,n]=_n(16,256),i=n.createLinearGradient(0,0,0,256);return i.addColorStop(0,"#3f8ee6"),i.addColorStop(.55,"#8cc6f5"),i.addColorStop(1,"#e8f4ff"),n.fillStyle=i,n.fillRect(0,0,16,256),t})}throw new Error("tex2 "+s)}var ut=(s,e)=>new R(s,0,e),uc=1,Ms=()=>(uc=uc*16807%2147483647)/2147483647;function Ks(s,e,t){let n=ni(s).clone();return n.repeat.set(e,t),n.needsUpdate=!0,n}function Bt(s,e,t,n,i,r,o={}){let a=Wt[e];if(!a)return null;let l=a.bb,c=Math.max(l.max[0]-l.min[0],l.max[2]-l.min[2]);return $l(s,Wt,e,t,n,i,r?r/c:1,o)}function n0(s,e,t,n,i,r,o,a){let l=new Tt,c=.22,h=[],u=[],f=new ce(3107358),d=new ce(10213450),g=[[c,0,0],[-c*.5,0,c*.87],[-c*.5,0,-c*.87]],x=[.15,1,0];for(let E=0;E<3;E++){let I=g[E],F=g[(E+1)%3];h.push(...I,...F,...x),u.push(f.r,f.g,f.b,f.r,f.g,f.b,d.r,d.g,d.b)}l.setAttribute("position",new He(h,3)),l.setAttribute("color",new He(u,3)),l.computeVertexNormals();let p=new Kt({vertexColors:!0,roughness:.55,side:An});p.onBeforeCompile=E=>{E.uniforms.uT={value:0},p.userData.sh=E,E.vertexShader=`uniform float uT;
`+E.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vec4 wp = instanceMatrix * vec4(0.,0.,0.,1.); float sw = sin(uT*1.6 + wp.x*.21 + wp.z*.17) * .18 * position.y; transformed.x += sw; transformed.z += sw*.6;`)};let m=new ls(l,p,r),v=new Ee,y=new Vt,M=new R,P=new R,A=new $n;for(let E=0;E<r;E++){let I=o+Ms()*(a-o);A.set((Ms()-.5)*.35,Ms()*6.28,(Ms()-.5)*.35),y.setFromEuler(A),M.set(1+Ms()*.8,I,1+Ms()*.8),P.set(e+Ms()*(n-e),0,t+Ms()*(i-t)),v.compose(P,y,M),m.setMatrixAt(E,v)}return m.castShadow=!1,m.receiveShadow=!0,m.frustumCulled=!0,m.computeBoundingSphere(),s.add(m),p}function ZM(s,e,t,n){let i=new Ut;i.position.set(e,0,t);let r=new Ie(new No(.09,.09,7,8),new Kt({color:14211280,roughness:.3,metalness:.5}));r.position.y=3.5,i.add(r);let o=new Ie(new xn(2.6,1.6,8,2),new Kt({color:n,roughness:.5,side:Pt}));o.position.set(1.32,6.1,0),i.add(o),i.userData.cloth=o;let a=new Ie(new Oi(3.6,4,40),new Et({color:16764992,transparent:!0,opacity:.55,depthWrite:!1}));return a.rotation.x=-Math.PI/2,a.position.y=.06,i.add(a),i.userData.ring=a,s.add(i),i}function i0(s,e){_f(0),uc=7;let t={id:1,groundCol:11565640,dustCol:13154464,bounds:[-39,-59,39,59],water:[],grass:null},n=un("floor",{map:Ks("wood",1,1),roughness:.5}),i=un("wallpaper",{map:ni("wallpaper"),roughness:.9}),r=un("trim",{color:16052196,roughness:.45});Yr(-40,-60,40,60,0,n,10),Yr(-22,-12,22,42,.03,un("mat",{map:ni("playmat"),roughness:.7}),44),At(-41,0,-61,41,46,-60,i,{tile:14,solid:"bound"}),At(-41,0,60,41,46,61,i,{tile:14,solid:"bound"}),At(-41,0,-60,-40,46,60,i,{tile:14,solid:"bound"}),At(40,0,-60,41,46,60,i,{tile:14,solid:"bound"});for(let[d,g,x,p]of[[-40,-60,40,-59.4],[-40,59.4,40,60],[-40,-60,-39.4,60],[39.4,-60,40,60]])At(d,0,g,x,1.8,p,r,{solid:!1});let o=new Ie(new xn(30,20),new Et({map:ni("sky"),color:16777215}));o.position.set(0,24,-59.3),s.add(o);for(let[d,g,x,p]of[[-16,13,16,14.2],[-16,33.8,16,35],[-16,13,-14.8,35],[14.8,13,16,35],[-.6,13,.6,35]])At(d,g,-59.6,x,p,-59.1,r,{solid:!1});let a=un("bedwood",{map:Ks("wood",1,1),color:13144160,roughness:.45}),l=un("blanket",{map:ni("blanket"),roughness:.85}),c=un("sheet",{map:ni("sheet"),roughness:.8});for(let[d,g]of[[-39.5,-19.5],[-19.6,-19.5],[-39.5,28.4],[-19.6,28.4]])At(d,0,g,d+1.8,10,g+1.8,a,{tile:4});At(-40,9,-20,-18,10.6,30,a,{tile:6,solid:"roof"}),At(-40,10.6,-20,-18,15,30,c,{tile:12,solid:"roof"}),At(-40.2,15,-16,-17.4,16.2,30.3,l,{tile:16,solid:"roof"}),At(-17.6,4.5,-16,-17.2,16,30.3,l,{tile:16,solid:!1}),At(-40,0,-21.5,-18,26,-20,a,{tile:6}),At(-38,15,-19.5,-26,18,-13,c,{tile:6,solid:!1}),gs.push({name:"bed",min:[-40,-20],max:[-18,30]});let h=un("dresser",{map:Ks("wood",1,1),color:15259840,roughness:.42});At(31,0,-24,40,30,8,h,{tile:10});for(let d of[8,16,24])At(30.8,d-.3,-23,31,d,7,r,{solid:!1});let u=s;Wt.toy_box&&Bt(u,"toy_box",0,-47,0,22);let f=[[-9,6,1],[11,2,0],[2,-11,3],[-17,-6,2],[20,-16,1]];for(let[d,g,x]of f)Bt(u,"book_stack",d,g,x,7);for(let[d,g,x]of[[-6,22,0],[6,24,1],[16,20,0],[-14,18,1],[-3,-24,0],[9,-26,1],[-12,-28,0],[14,-30,1],[0,34,0]])Bt(u,"sandbags",d,g,x,3.6,{low:!0});for(let[d,g,x]of[[-26,24,0],[-26,10,1],[-30,-4,0],[-24,-12,1],[-34,16,0]])Bt(u,"sandbags",d,g,x,3.6,{low:!0});for(let[d,g,x]of[[-22,2,0],[24,8,1],[-2,8,0],[5,12,2],[26,-6,0],[-28,-28,1]])Bt(u,"brick",d,g,x,3.8,{low:!0});for(let[d,g,x]of[[14,10,0],[-10,-16,1],[22,30,0],[-22,-36,2],[24,-40,1],[8,-18,0]])Bt(u,"abc_block",d,g,x,3.2);Bt(u,"teddy",30,32,3,11),Bt(u,"duck",-8,46,1,3.6),Bt(u,"ball",22,46,0,4.4),Bt(u,"ball",-30,-44,0,4.4);for(let[d,g]of[[-4,50],[28,-12],[-30,4],[6,-36]])Bt(u,"ammo_crate",d,g,0,1.5,{low:!0});return t.ammo=[ut(-4,50),ut(28,-12),ut(-30,4),ut(6,-36)].map(d=>d.setX(d.x+1.6)),vf(s,e),t.flag=ZM(s,0,-32,14169132),t.flagPos=ut(0,-32),t.start={x:0,z:52,yaw:Math.PI},t.tank={x:13,z:44,yaw:Math.PI},t.arty={x:-14,z:55},t.par=300,t.sun={dir:[.25,1,-.65],col:16773340,int:2.4,hemi:[16774376,9071178,1.05],bg:15259844,fog:[15259844,90,210]},t.waves=[{msg:["H\xDCCUM!","Q\u0131rm\u0131z\u0131lar ev\u0259 do\u011Fru g\u0259lir"],obj:"Q\u0131rm\u0131z\u0131 h\xFCcum\xE7ular\u0131 dayand\u0131r",barrage:[ut(-12,22),ut(-4,26),ut(5,24),ut(13,21),ut(-8,30),ut(9,29),ut(0,20),ut(-18,25)],units:[...[-15,-9,-3,3,9,15].map((d,g)=>({name:"red_rifle",kind:"rusher",x:d,z:22+g%2*4,yaw:0,march:ut(d*.5,44)})),{name:"red_rifle",kind:"rusher",x:-26,z:18,yaw:0,march:ut(-6,40)},{name:"red_rifle",kind:"rusher",x:20,z:16,yaw:0,march:ut(8,40)}]},{trigger:d=>d.alive===0||d.player.z<20,msg:["K\u0130TAB BUNKERL\u018FR\u0130","M\xF6vqel\u0259ri t\u0259mizl\u0259"],obj:"Kitab bunkerl\u0259rini t\u0259mizl\u0259",units:[{name:"red_rifle",kind:"rifle",x:-9,z:1,leash:10},{name:"red_rifle",kind:"rifle",x:11,z:-3,leash:10},{name:"red_heavy",kind:"heavy",x:2,z:-16,leash:9},{name:"red_rifle",kind:"rifle",x:-17,z:-11,leash:10},{name:"red_rifle",kind:"rifle",x:-28,z:8,leash:8},{name:"red_rifle",kind:"rifle",x:-27,z:-10,leash:8},{name:"red_heavy",kind:"heavy",x:20,z:-12,leash:9}]},{trigger:d=>d.alive<=2||d.player.z<-6,msg:["OYUNCAQ QUTUSU QALASI","D\xFC\u015Fm\u0259n tank\u0131!"],obj:"Tank\u0131 v\u0259 qala m\xFCdafi\u0259\xE7il\u0259rini m\u0259hv et",tanks:[{x:-16,z:-34,yaw:0}],units:[{name:"red_rifle",kind:"rifle",x:-8,z:-33,leash:9},{name:"red_rifle",kind:"rifle",x:9,z:-34,leash:9},{name:"red_heavy",kind:"bazooka",x:0,z:-36,leash:7},{name:"red_rifle",kind:"rifle",x:15,z:-38,leash:9},{name:"red_heavy",kind:"heavy",x:-13,z:-40,leash:8},{name:"red_rifle",kind:"rifle",x:24,z:-36,leash:9}]},{trigger:d=>d.alive===0,capture:!0,msg:["BAYRA\u011EI \u018FL\u018F KE\xC7\u0130R","Bayra\u011F\u0131n yan\u0131nda dayan"],obj:"Q\u0131rm\u0131z\u0131 bayra\u011F\u0131 \u0259l\u0259 ke\xE7ir"}],t}function s0(s,e){_f(0),uc=11;let t={id:2,groundCol:5213998,dustCol:11049584,bounds:[-59,-89,59,59],water:[],grass:[-58,10,58,50]};Yr(-62,-92,62,62,0,un("grass",{map:ni("grass"),roughness:.9}),14);let n=un("fence",{map:ni("fence"),roughness:.75});At(-61,0,-91,-60,14,60,n,{tile:14,solid:"bound"}),At(60,0,-91,61,14,60,n,{tile:14,solid:"bound"}),At(-61,0,-91,61,14,-90,n,{tile:14,solid:"bound"});let i=un("house",{map:ni("house"),roughness:.8});At(-61,0,60,61,40,64,i,{tile:40,tv:40,solid:"bound"}),At(-14,0,57,14,2.2,60,un("step",{color:12235944,roughness:.8}),{tile:4,low:!0}),t.grassMat=n0(s,-58,10,58,50,e>0?9e3:5200,2.4,6.2),n0(s,-58,-88,58,8,900,.8,2),gs.push({name:"grass",min:[-58,10],max:[58,50]});let r=new Kt({map:Ks("water",12,1),color:8177904,roughness:.12,metalness:.1,transparent:!0,opacity:.88}),o=new Ie(new xn(120,11),r);o.rotation.x=-Math.PI/2,o.position.set(0,.12,-1),s.add(o),t.waterMat=r,Yr(-60,-7.2,60,5.2,.04,un("mud",{map:ni("soil"),roughness:1}),10),t.water.push([-60,-6.5,60,4.5]);let a=new Lo([...Array(13)].map((p,m)=>new R(-62+m*10.3,.55,6.4+Math.sin(m*1.3)*1.2))),l=new Ie(new bl(a,120,.55,10),un("hose",{map:Ks("hose",30,1),roughness:.35}));l.castShadow=!0,l.receiveShadow=!0,s.add(l),Xo.push(l);let c=un("sand",{map:ni("sand"),roughness:.95}),h=un("sbwood",{map:Ks("wood",1,1),color:14198888,roughness:.5});Yr(-50,-50,-10,-15,.05,c,10),At(-51,0,-51,-9,1.6,-50,h,{tile:4,low:!0}),At(-51,0,-15,-9,1.6,-14,h,{tile:4,low:!0}),At(-51,0,-50,-50,1.6,-15,h,{tile:4,low:!0}),At(-10,0,-50,-9,1.6,-31,h,{tile:4,low:!0}),At(-10,0,-25,-9,1.6,-15,h,{tile:4,low:!0});for(let[p,m,v]of[[-40,-40,3],[-22,-24,2.4],[-34,-22,2]]){let y=new Os(1,16,8,0,6.28,0,1.57);y.scale(6,v,5),y.translate(p,0,m),Zl(c,y),At(p-4,0,m-3,p+4,v*.8,m+3,null,{solid:"dune",low:!0})}gs.push({name:"sand",min:[-50,-50],max:[-10,-15]});let u=17,f=ut(28,-58),d=new Ie(new Sl(u,2.2,12,48),un("poolrim",{map:Ks("poolrim",16,1),roughness:.3}));d.rotation.x=-Math.PI/2,d.position.set(f.x,2.2,f.z),d.scale.z=1,d.castShadow=!0,d.receiveShadow=!0,s.add(d),Xo.push(d);let g=new Ie(new Do(u,40),r);g.rotation.x=-Math.PI/2,g.position.set(f.x,1.4,f.z),s.add(g);for(let p=0;p<16;p++){let m=p/16*6.283,v=f.x+Math.cos(m)*u,y=f.z+Math.sin(m)*u;Math.abs(m-2.4)<.3||At(v-2.4,0,y-2.4,v+2.4,4.2,y+2.4,null,{solid:"pool"})}t.water.push([f.x-u+2,f.z-u+2,f.x+u-2,f.z+u-2]),gs.push({name:"pool",min:[f.x-u,f.z-u],max:[f.x+u,f.z+u]});let x=s;for(let[p,m,v]of[[-18,28,0],[14,32,1],[-36,22,2],[36,18,3]])Bt(x,"rock",p,m,v,4);for(let[p,m,v]of[[-26,-12,0],[-6,-12,1],[12,-14,2],[30,-12,3],[44,-24,0],[6,-30,1]])Bt(x,"rock",p,m,v,3.6);for(let[p,m,v]of[[-14,-10,0],[22,-10,0],[-44,-9,0],[48,-40,0]])Bt(x,"flowerpot",p,m,v,4.2);for(let[p,m,v]of[[-30,-32,0],[-18,-42,1],[-40,-26,2]])Bt(x,"bucket",p,m,v,4.2);for(let[p,m,v]of[[-24,-60,0],[-8,-66,1],[10,-78,2],[-20,-80,3],[44,-82,0]])Bt(x,"gnome",p,m,v,4.5);Bt(x,"wateringcan",40,30,1,5.5),Bt(x,"ball",-46,34,0,5),Bt(x,"duck",30,-52,1,4),Bt(x,"ball",6,-50,0,4.4);for(let[p,m,v]of[[-6,14,0],[8,12,1],[-24,12,0],[26,14,1],[-8,-20,0],[-30,-48,1],[-14,-34,0],[0,-60,1],[16,-64,0],[-12,-72,1]])Bt(x,"sandbags",p,m,v,3.6,{low:!0});for(let[p,m]of[[4,54],[-36,-4],[36,-30],[-4,-46]])Bt(x,"ammo_crate",p,m,0,1.5,{low:!0});return t.ammo=[ut(5.6,54),ut(-34.4,-4),ut(37.6,-30),ut(-2.4,-46)],vf(s,e),t.start={x:0,z:54,yaw:Math.PI},t.tank={x:-14,z:52,yaw:Math.PI},t.arty={x:18,z:55},t.par=420,t.bossPos=ut(4,-76),t.sun={dir:[-.45,1,.35],col:16773848,int:2.7,hemi:[12574975,5929530,1],bg:10473716,fog:[11064564,110,260]},t.waves=[{msg:["H\u018FY\u018FT D\xD6Y\xDC\u015E\xDC","Ot c\u0259ng\u0259lliyind\u0259n ke\xE7"],obj:"Ot c\u0259ng\u0259lliyini t\u0259mizl\u0259",barrage:[ut(-14,30),ut(-4,34),ut(6,28),ut(16,32),ut(-22,26),ut(0,24),ut(24,26),ut(10,36)],units:[...[-20,-12,-4,4,12,20].map((p,m)=>({name:"red_rifle",kind:"rusher",x:p,z:26+m%2*5,march:ut(p*.4,46)})),{name:"red_heavy",kind:"rusher",x:0,z:18,march:ut(0,44),hpMul:2}]},{trigger:p=>p.alive===0||p.player.z<12,msg:["\u015ELANQ \xC7AYI","Sahil m\xF6vqel\u0259ri"],obj:"\xC7ay\u0131n o tay\u0131n\u0131 t\u0259mizl\u0259",units:[{name:"red_rifle",kind:"rifle",x:-24,z:-15,leash:9},{name:"red_rifle",kind:"rifle",x:-6,z:-16,leash:9},{name:"red_heavy",kind:"heavy",x:12,z:-18,leash:8},{name:"red_rifle",kind:"sniper",x:6,z:-34,leash:6},{name:"red_rifle",kind:"rifle",x:30,z:-16,leash:9},{name:"red_rifle",kind:"rifle",x:44,z:-20,leash:9},{name:"red_heavy",kind:"bazooka",x:-12,z:-24,leash:7}]},{trigger:p=>p.alive<=2||p.player.z<-14,msg:["QUM S\u018FHRASI","Qum qutusunda d\xFC\u015Fm\u0259n tank\u0131"],obj:"Qum s\u0259hras\u0131ndak\u0131 tank\u0131 m\u0259hv et",tanks:[{x:-30,z:-36,yaw:.6}],units:[{name:"red_rifle",kind:"rifle",x:-22,z:-30,leash:10},{name:"red_rifle",kind:"rifle",x:-38,z:-20,leash:10},{name:"red_heavy",kind:"heavy",x:-42,z:-42,leash:8},{name:"red_rifle",kind:"rifle",x:30,z:-44,leash:10},{name:"red_heavy",kind:"bazooka",x:16,z:-40,leash:8}]},{trigger:p=>p.alive<=1||p.player.z<-50,boss:!0,msg:["D\u018FM\u0130R T\u0130RAN","N\u0259h\u0259ng robot oyand\u0131!"],obj:"D\u0259mir Tiran\u0131 m\u0259hv et",units:[{name:"red_rifle",kind:"rifle",x:-14,z:-70,leash:10},{name:"red_rifle",kind:"rifle",x:18,z:-72,leash:10}]}],t}function r0(s,e,t){for(let n of s.water)if(e>n[0]&&e<n[2]&&t>n[1]&&t<n[3])return!0;return!1}var $M={rifle:{hp:70,rof:.13,burst:[3,6],dmg:8,range:44,pref:[10,24],speed:5.2,mag:24,spread:.045,gun:1},heavy:{hp:170,rof:.085,burst:[8,14],dmg:6,range:38,pref:[8,20],speed:3.9,mag:60,spread:.065,gun:1.25},sniper:{hp:60,rof:2.2,burst:[1,1],dmg:42,range:80,pref:[22,45],speed:4.6,mag:5,spread:.01,gun:1.15},bazooka:{hp:120,rof:4.2,burst:[1,1],dmg:95,range:46,pref:[12,28],speed:4.3,mag:1,rocket:!0,spread:.025,gun:1.35},rusher:{hp:24,rof:.22,burst:[2,4],dmg:4,range:30,pref:[2,8],speed:6.2,mag:18,spread:.13,rush:!0,gun:1}},qi=new Ot,ad=new Ot,sn=new Ot,Mn=new Ot,Xi=new Ot,ra=(s,e)=>e.set(s.pos.x,(s.pos.y||0)+(s.isTank?1.5:s.isBoss?5.5:s.crouch?.85:1.2),s.pos.z),sa=s=>{for(;s>Math.PI;)s-=2*Math.PI;for(;s<-Math.PI;)s+=2*Math.PI;return s},Ss=class{constructor(e){this.def=e,this.team=e.team,this.kind=e.kind||"rifle",this.K=$M[this.kind],this.ch=new ia(e.name,T.scene),this.ch.arm("rifle",.08,.84*this.K.gun*(e.gunScale||1)),this.pos=this.ch.root.position,this.pos.set(e.x,0,e.z),this.yaw=e.yaw||0,this.ch.root.rotation.y=this.yaw,this.maxHp=this.hp=this.K.hp*(e.hpMul||1),this.radius=.42,this.height=this.ch.s*.98,this.plastic=!0,this.headMul=2,this.alive=!0,this.state=e.state||"idle",this.post=new Ot(e.x,0,e.z),this.leash=e.leash||0,this.target=null,this.lastKnown=null,this.thinkT=Math.random()*.3,this.cool=Ve(.5,1.5),this.burst=0,this.mag=this.K.mag,this.relT=0,this.cover=null,this.coverT=0,this.phase="hide",this.phaseT=0,this.strafeDir=Math.random()<.5?-1:1,this.strafeT=0,this.moving=0,this.shootT=0,this.crouch=!1,this.stuckT=0,this.detT=0,this.det=new Ot,this.nadeCd=Ve(6,12),this.unseenT=0,this.order=e.order||"follow",this.slot=e.slot||0,this.suppress=0,T.units.push(this),T.actors.push(this)}get eye(){return qi.set(this.pos.x,this.crouch?1:1.55,this.pos.z)}think(e){let t=this.K.range,n=null,i=1e9,r=ad.set(this.pos.x,1.5,this.pos.z);for(let o of e.actors){if(!o.alive||o.team===this.team||o.hidden)continue;let a=Math.hypot(o.pos.x-this.pos.x,o.pos.z-this.pos.z),l=t;if(o.inGrass&&!(o.firedT>0)&&(l=Math.min(l,13)),(o.isTank||o.isBoss)&&(l*=1.4),a>l)continue;let c=a-(o===this.target?6:0)-(o.isPlayer?3:0);c>=i||!ei(r,ra(o,sn))&&!ei(r,sn.set(o.pos.x,(o.height||1.8)*(o.crouch?.7:.92),o.pos.z))||(n=o,i=c)}n?(!this.target&&this.state!=="combat"&&this.onAlert(n.pos),this.target=n,this.lastKnown=(this.lastKnown||new Ot).copy(n.pos),this.state="combat",this.unseenT=0):(this.target&&(this.unseenT+=.25),this.unseenT>2.5&&(this.target=null))}onAlert(e){this.team==="red"&&Math.random()<.5&&Ce("shout",.4,.9+Math.random()*.3,this.pos)}hear(e){this.state==="combat"&&this.target||(this.state="alert",this.lastKnown=(this.lastKnown||new Ot).copy(e))}goTo(e,t,n){Mn.set(e.x-this.pos.x,0,e.z-this.pos.z);let i=Mn.length();if(i<.35)return this.moving=0,!0;Mn.divideScalar(i),this.detT>0&&(this.detT-=n,Mn.addScaledVector(this.det,1.2).normalize()),this.separate(Mn);let r=this.pos.x,o=this.pos.z,a=Math.min(t*n,i);ks(this.pos,Mn.x*a,Mn.z*a,this.radius);let l=Math.hypot(this.pos.x-r,this.pos.z-o);if(this.moving=l/Math.max(n,1e-4),this.moveDir=Math.atan2(Mn.x,Mn.z),l<a*.3){if(this.stuckT+=n,this.stuckT>.4){this.stuckT=0,this.detT=.9;let c=Math.random()<.5?1:-1;this.det.set(-Mn.z*c,0,Mn.x*c)}}else this.stuckT=Math.max(0,this.stuckT-n);return!1}separate(e){for(let n of T.actors){if(n===this||!n.alive||n.isTank||n.isBoss)continue;let i=this.pos.x-n.pos.x,r=this.pos.z-n.pos.z,o=i*i+r*r;if(o<2.6&&o>1e-4){let a=Math.sqrt(o),l=(1.62-a)/1.62*1.6;e.x+=i/a*l,e.z+=r/a*l}}let t=Math.hypot(e.x,e.z)||1;e.x/=t,e.z/=t}face(e,t,n=9){this.yaw+=sa(e-this.yaw)*Math.min(1,t*n),this.ch.root.rotation.y=this.yaw}findCover(e,t){this.cover&&(this.cover.user=null,this.cover=null);let n=this.K,i=(n.pref[0]+n.pref[1])/2,r=[];for(let a of sc){if(a.user)continue;let l=Math.hypot(a.p.x-this.pos.x,a.p.z-this.pos.z);if(l>22||this.leash&&Math.hypot(a.p.x-this.post.x,a.p.z-this.post.z)>this.leash)continue;let c=e.x-a.p.x,h=e.z-a.p.z,u=Math.hypot(c,h);if(u<6||u>n.range||c*a.nx+h*a.nz>-1.5)continue;let f=!1;for(let d of T.units)if(d!==this&&d.alive&&d.team===this.team&&(d.cover&&d.cover.p.distanceToSquared(a.p)<10||d.pos.distanceToSquared(a.p)<5)){f=!0;break}f||r.push({cp:a,sc:l+Math.abs(u-i)*.4+(t?u*.7:0)+(this.team==="red"&&T.player&&a.p.distanceTo(T.player.pos)<9?8:0)})}r.sort((a,l)=>a.sc-l.sc);let o=Xi.set(e.x,1.2,e.z);for(let a=0;a<Math.min(8,r.length);a++){let l=r[a].cp,c=l.h<1.9;if(ei(sn.set(l.p.x,c?.95:1.5,l.p.z),o))continue;let h=null;if(c&&ei(sn.set(l.p.x,1.6,l.p.z),o)&&(h=l.p.clone()),!h)for(let u of[1,-1]){let f=l.p.x-l.nz*u*1.5,d=l.p.z+l.nx*u*1.5;if(ei(sn.set(f,1.5,d),o)&&ei(ad.set(l.p.x,.6,l.p.z),qi.set(f,.6,d),!1)){h=new Ot(f,0,d);break}}if(h)return l.user=this,this.cover=l,this.peekP=h,this.peekLow=c&&h.x===l.p.x&&h.z===l.p.z,this.coverT=Ve(5,9),this.phase="go",!0}return this.coverT=Ve(1.5,2.5),!1}tryFire(e,t,n){if(this.relT>0){this.relT-=e,this.relT<=0&&(this.mag=this.K.mag);return}if(this.cool-=e,this.cool>0||!n||!n.alive)return;let i=this.K;this.face(Math.atan2(n.pos.x-this.pos.x,n.pos.z-this.pos.z),1,1);let r=this.ch.muzzleWorld(Mn),o=ra(n,Xi),a=r.distanceTo(o),l=i.spread*(this.team==="red"?1+t.easy*1.6:.7)*(1+this.suppress*.5)*(this.moving>1?1.5:1)*(n.moving>3?1.3:1)*(n.isTank||n.isBoss?.5:1);o.x+=(Math.random()-.5)*2*l*a,o.y+=(Math.random()-.5)*1.6*l*a,o.z+=(Math.random()-.5)*2*l*a;let c=sn.copy(o).sub(r).normalize();if(this.shootT=.25,this.firedT=1.2,i.rocket)Gi("rocket",r,c.multiplyScalar(34),this,{dmg:i.dmg,r:3.6,big:.8,grav:0}),Ce("whoosh",.6,.8,this.pos),jo(this.ch.muzzle,.9),this.mag=0;else{let h=i.dmg*(this.team==="blue"?1.7:1)*(n.isPlayer&&t.dmgMul||1);Qo(this,r,c,h,i.range+15,{loud:30}),jo(this.ch.muzzle,this.kind==="sniper"?.7:.45),Ce(this.kind==="sniper"?"shotgun":this.kind==="heavy"?"minigun":"rifle",this.team==="blue"?.35:.45,this.team==="red"?.82:1.05,this.pos),this.mag--}if(this.mag<=0){this.relT=this.kind==="bazooka"?2.2:2,this.burst=0,this.cool=.3,Ce("reload",.25,1,this.pos);return}--this.burst>0?this.cool=i.rof*Ve(.85,1.2):(this.burst=Math.round(Ve(i.burst[0],i.burst[1])),this.cool=i.rof>1?i.rof*Ve(.9,1.3):Ve(.5,1.1)+(this.team==="red"?t.easy*.8:0))}throwNade(e){let t=Mn.set(this.pos.x,1.6,this.pos.z),n=e.x-t.x,i=e.z-t.z,r=Math.hypot(n,i),o=Math.max(.7,r/14);Gi("grenade",t,sn.set(n/o,22*o/2-1.6/o,i/o),this,{fuse:o+.5,dmg:70,r:4.2,big:.8}),Ce("whoosh",.4,1.2,this.pos)}update(e,t){if(!this.alive)return this.updDead(e);if(this.hidden){this.ch.update(e);return}this.firedT=Math.max(0,(this.firedT||0)-e),this.shootT=Math.max(0,this.shootT-e),this.suppress=Math.max(0,this.suppress-e*.6),this.moving=0,(this.thinkT-=e)<=0&&(this.thinkT=.25+Math.random()*.1,this.think(t)),this.team==="blue"?this.blueAI(e,t):this.redAI(e,t),this.anim(e)}anim(e){let t=this.ch;this.moving>.8?t.play("run",.15,Math.max(.6,Math.min(1.35,this.moving/5))):this.crouch?t.play("crouch",.18):this.shootT>0?t.play("shoot",.1):t.play("idle",.25),t.update(e)}combat(e,t,n){let i=this.target,r=this.K;if(!i){if(this.lastKnown){let u=this.goTo(this.lastKnown,r.speed*.8,e);this.moveDir!=null&&this.moving&&this.face(this.moveDir,e),u&&(this.lastKnown=null,this.state="idle")}else this.state="idle";this.crouch=!1;return}let o=Math.hypot(i.pos.x-this.pos.x,i.pos.z-this.pos.z),a=Math.atan2(i.pos.x-this.pos.x,i.pos.z-this.pos.z);if(r.rush){this.crouch=!1;let u=Math.sin(t.clock*3+this.slot*2)*.8;Xi.set(i.pos.x+Math.cos(a)*u*3,0,i.pos.z-Math.sin(a)*u*3),o>r.pref[0]+1&&this.goTo(Xi,r.speed,e),this.face(a,e),this.tryFire(e,t,i);return}if(this.nadeCd-=e,this.team==="red"&&this.kind==="rifle"&&this.nadeCd<=0&&this.unseenT>1&&this.lastKnown&&o<20&&o>7&&(this.nadeCd=Ve(10,16),this.throwNade(this.lastKnown)),this.coverT-=e,(!this.cover&&this.coverT<=0||this.cover&&(this.coverT<=0||Math.hypot(this.cover.p.x-i.pos.x,this.cover.p.z-i.pos.z)<5))&&this.findCover(i.pos,n),this.cover){let u=this.cover;if(this.phase==="go"){this.crouch=!1;let f=this.goTo(u.p,r.speed,e);this.moving&&this.face(this.shootT>0?a:this.moveDir,e),o<r.range*.8&&Math.random()<.5&&this.tryFire(e*.6,t,i),f&&(this.phase="hide",this.phaseT=Ve(.6,1.4));return}if(this.phaseT-=e,this.phase==="hide")this.crouch=this.peekLow||u.h<1.9,this.goTo(u.p,r.speed*.7,e),this.face(a,e,5),this.relT>0&&(this.relT-=e,this.relT<=0&&(this.mag=r.mag)),this.phaseT<=0&&this.relT<=0&&(this.phase="peek",this.phaseT=Ve(1.4,2.8));else{this.crouch=!1;let f=this.goTo(this.peekP,r.speed*.8,e);this.face(a,e),(f||this.peekLow)&&this.tryFire(e,t,i),(this.phaseT<=0||this.relT>0||this.suppress>2.2)&&(this.phase="hide",this.phaseT=Ve(.8,1.8)+this.suppress*.4)}return}this.crouch=!1,this.strafeT-=e,this.strafeT<=0&&(this.strafeT=Ve(.9,2.1),this.strafeDir*=Math.random()<.75?-1:1);let l=o<r.pref[0]?-1:o>r.pref[1]?1:0,c=Math.cos(a)*this.strafeDir,h=-Math.sin(a)*this.strafeDir;Xi.set(this.pos.x+(c+Math.sin(a)*l*.8)*3,0,this.pos.z+(h+Math.cos(a)*l*.8)*3),this.goTo(Xi,r.speed*.6,e),this.face(a,e),this.tryFire(e,t,i)}redAI(e,t){if(this.state==="combat")return this.combat(e,t,!1);if(this.state==="alert"&&this.lastKnown){let n=this.goTo(this.lastKnown,this.K.speed*.7,e);this.moving&&this.face(this.moveDir,e),n&&(this.state="idle",this.lastKnown=null);return}if(this.def.march){let n=this.goTo(this.def.march,this.K.speed*.8,e);this.moving&&this.face(this.moveDir,e),n&&(this.post.copy(this.def.march),this.def.march=null);return}this.goTo(this.post,2.5,e),this.face(this.yaw+Math.sin(t.clock*.5+this.slot)*.01,e)}blueAI(e,t){let n=t.player;if(!n)return;if(this.order==="attack"){if(this.target)return this.combat(e,t,!0);let o=null,a=1e9;for(let l of t.actors)if(l.alive&&l.team==="red"&&!l.hidden){let c=l.pos.distanceToSquared(this.pos);c<a&&(a=c,o=l)}o&&a>64&&(this.goTo(o.pos,this.K.speed,e),this.moving&&this.face(this.moveDir,e));return}let i=this.order==="hold"?this.holdP:(()=>{let o=[[-2.4,-3],[2.4,-3],[0,-5.2]][this.slot%3],a=Math.sin(n.yaw),l=Math.cos(n.yaw);return Xi.set(n.pos.x+o[0]*l+o[1]*a,0,n.pos.z-o[0]*a+o[1]*l)})();if(!i)return;let r=Math.hypot(i.x-this.pos.x,i.z-this.pos.z);if(this.target&&r<(this.order==="hold"?7:10))return this.leash=this.order==="hold"?7:9,this.post.copy(i),this.combat(e,t,!1);this.cover&&(this.cover.user=null,this.cover=null),this.crouch=!1,this.leash=0,r>1.2?(this.goTo(i,r>6?this.K.speed*1.25:this.K.speed,e),this.target?(this.face(Math.atan2(this.target.pos.x-this.pos.x,this.target.pos.z-this.pos.z),e),this.tryFire(e,t,this.target)):this.moving&&this.face(this.moveDir,e)):(this.crouch=this.order==="hold",this.target?(this.face(Math.atan2(this.target.pos.x-this.pos.x,this.target.pos.z-this.pos.z),e),this.tryFire(e,t,this.target)):this.face(n.yaw,e,3)),r>40&&this.pos.set(i.x,0,i.z)}damage(e,t,n,i,r){this.alive&&(this.hp-=e,this.ch.hitFlash(),this.suppress=Math.min(4,this.suppress+.6),t&&t.pos&&t.team!==this.team&&(!this.target||this.state!=="combat")&&(this.state="combat",this.lastKnown=(this.lastKnown||new Ot).copy(t.pos),t.alive&&(this.target=t)),this.hp<=0?this.die(t,n,r,i):this.team==="blue"&&!this.isPlayer&&Math.random()<.2&&Ce("hurt",.3,1.2,this.pos))}die(e,t,n,i){this.alive=!1,this.dead=!0,this.deadT=0,this.cover&&(this.cover.user=null);let r=Af[this.team];sn.set(this.pos.x,.9,this.pos.z),n||i||Math.random()<.45?(this.ch.root.visible=!1,Vs(sn,r,30,1.1,n?1.3:.9),this.gone=!0):(this.ch.play("death",.08),Vs(sn,r,12,.9,.7)),Ce("glass",.55,.55+Math.random()*.15,this.pos),Ce("impact",.4,1.3,this.pos),T.onKill&&T.onKill(this,e)}updDead(e){if(this.deadT+=e,this.gone){this.removed||(this.removed=!0,T.scene.remove(this.ch.root));return}if(this.ch.update(e),this.deadT>2.4&&!this.removed){let t=1-(this.deadT-2.4)/.8;t<=0?(this.removed=!0,T.scene.remove(this.ch.root)):this.ch.root.position.y=-(1-t)*.4}}},oa=class{constructor(e,t,n,i,r={}){let o=Wt[e==="blue"?"blue_tank":"red_tank"];this.team=e,this.isTank=!0,this.alive=!0,this.radius=2.6,this.height=2.8,this.plastic=!1,this.root=new Ut,this.hull=o.hull.clone(!0),this.turret=o.turret.clone(!0),this.root.add(this.hull),this.root.add(this.turret),this.turret.position.copy(o.pivot),this.tip=o.tip.clone(),this.half=o.half,this.height=o.H||3.4,T.scene.add(this.root),this.pos=this.root.position,this.pos.set(t,0,n),this.yaw=i,this.tYaw=i,this.pitch=0,r.tint&&this.root.traverse(a=>{a.isMesh&&(a.material=a.material.clone(),a.material.color.setHex(r.tint))}),this.maxHp=this.hp=r.hp||(e==="blue"?650:480),this.v=0,this.cd=Ve(1.5,3),this.driver=r.driver||(e==="red"?"ai":null),this.mgCd=0,this.thinkT=0,this.flash=0,this.solid={min:new Ot,max:new Ot,kind:"tank",ref:this},this.updSolid(),Qn.push(this.solid),T.tanks.push(this),T.actors.push(this),this.root.rotation.y=i,this.root.traverse(a=>{a.isMesh&&(a.castShadow=!0,a.receiveShadow=!0,a.material&&(a.material=a.material.clone(),a.material.roughness=.38))})}get noBullet(){return!0}updSolid(){let e=Math.abs(Math.cos(this.yaw)),t=Math.abs(Math.sin(this.yaw)),n=this.half[0]*e+this.half[2]*t,i=this.half[0]*t+this.half[2]*e;this.solid.min.set(this.pos.x-n,0,this.pos.z-i),this.solid.max.set(this.pos.x+n,this.height*.78,this.pos.z+i)}drive(e,t,n){let i=t*14;this.v+=i*e,this.v*=Math.pow(t?.55:.12,e),this.v=Math.max(-5,Math.min(10,this.v)),this.yaw-=n*1.7*e*(this.v<-.3?-1:1)*Math.min(1,.35+Math.abs(this.v)/4),this.open=!0;let r=this.pos.x,o=this.pos.z;ks(this.pos,Math.sin(this.yaw)*this.v*e,Math.cos(this.yaw)*this.v*e,2.1),this.open=!1;let a=Math.hypot(this.pos.x-r,this.pos.z-o);if(Math.abs(this.v)>1&&a<Math.abs(this.v)*e*.3&&(this.v*=.5),this.root.rotation.y=this.yaw,this.updSolid(),this.speed=a/Math.max(e,1e-4),this.speed>2&&Math.random()<e*14&&Jo(qi.set(this.pos.x-Math.sin(this.yaw)*2.6+(Math.random()-.5)*2.4,.3,this.pos.z-Math.cos(this.yaw)*2.6),null,T.dustCol||12101776,.6,.35,.9),this.speed>3)for(let l of T.units)l.alive&&l.team!==this.team&&Math.hypot(l.pos.x-this.pos.x,l.pos.z-this.pos.z)<2.6&&l.damage(999,this,null,!1,!0)}aimTurret(e,t,n=1.6){let i=sa(t-this.tYaw);return this.tYaw+=Math.sign(i)*Math.min(Math.abs(i),n*e),this.turret.rotation.y=this.tYaw-this.yaw,Math.abs(i)}muzzleWorld(e){return e.copy(this.tip).applyAxisAngle(ad.set(0,1,0),this.tYaw).add(this.pos).add(sn.set(0,this.turret.position.y,0))}fire(e,t){if(this.cd>0)return!1;this.cd=this.team==="blue"?1.3:Ve(3.2,4.4);let n=this.muzzleWorld(new Ot),i=e?e.clone():new Ot(Math.sin(this.tYaw),Math.sin(this.pitch),Math.cos(this.tYaw)).normalize();return Gi("shell",n,i.multiplyScalar(this.team==="blue"?75:48),t||this,{ign:this,dmg:this.team==="blue"?170:45,r:this.team==="blue"?4.6:3.6,big:this.team==="blue"?1:.8,grav:3}),Ws(n,5,1.4),Gs(n,4,1.6,9077884,1.4),Ce("boom",.55,1.5,n),Ce("shotgun",.5,.6,n),this.recoil=.35,T.cam&&t&&t.isPlayer&&(T.shake=Math.min(1.5,T.shake+.45)),rc(n,60,this.team),!0}damage(e,t,n){this.alive&&(this.hp-=e,this.flash=.08,this.driver==="player"&&T.onPlayerTankHit&&T.onPlayerTankHit(e,t),this.hp<=0&&this.destroy(t))}destroy(e){this.alive=!1,this.cd=99;let t=this.pos.clone().setY(1.4);ys(t,6,90,e,2.2),setTimeout(()=>T.mode==="play"&&ys(t.clone().add(new Ot(1,.5,-1)),4,40,e,1.2),250),Vs(t,this.team==="blue"?4026288:10238506,40,2.5,1.4),this.turretV=new Ot(Ve(-3,3),11,Ve(-3,3)),this.root.traverse(n=>{n.isMesh&&n.material.color.multiplyScalar(.28)}),this.smokeT=14,T.onKill&&T.onKill(this,e)}update(e,t){if(this.cd-=e,this.recoil>0&&(this.recoil=Math.max(0,this.recoil-e*1.6)),this.turret.children[0]&&(this.turret.position.z=this.turret.position.z),!this.alive){this.turretV&&(this.turret.position.addScaledVector(this.turretV,e),this.turretV.y-=22*e,this.turret.rotation.x+=e*2,this.turret.position.y<-1&&(this.turretV=null)),this.smokeT>0&&(this.smokeT-=e,Math.random()<e*6&&Gs(qi.set(this.pos.x,2,this.pos.z),1,2.2,2762790,2.4),Math.random()<e*4&&Ws(qi.set(this.pos.x,1.5,this.pos.z),1,1.4));return}this.flash>0&&(this.flash-=e),this.driver==="ai"&&this.ai(e,t)}ai(e,t){if((this.thinkT-=e)<=0){this.thinkT=.4;let a=null,l=1e9,c=qi.set(this.pos.x,2.2,this.pos.z);for(let h of t.actors){if(!h.alive||h.team===this.team||h.hidden)continue;let u=Math.hypot(h.pos.x-this.pos.x,h.pos.z-this.pos.z)-(h.isPlayer?6:0)-(h.isTank?8:0);u>62||u>=l||ei(c,ra(h,sn))&&(a=h,l=u)}this.target=a,a&&(this.lastKnown=a.pos.clone())}let n=this.target,i=0,r=0,o=n?n.pos:this.def&&this.def.march?this.def.march:this.lastKnown;if(o){let a=Math.hypot(o.x-this.pos.x,o.z-this.pos.z),l=Math.atan2(o.x-this.pos.x,o.z-this.pos.z),c=sa(l-this.yaw);!n||a>26?(i=Math.abs(c)<1?1:.2,r=-Math.sign(c)*Math.min(1,Math.abs(c)*2)):a<13?(i=-.8,r=Math.sign(c)*.3):(r=-Math.sign(sa(c+Math.PI/2))*.6,i=.5*Math.sin(t.clock*.3+this.pos.x))}if(this.drive(e,i*.75,r),n){let a=this.muzzleWorld(Mn),l=ra(n,Xi),c=Math.atan2(l.x-a.x,l.z-a.z);if(this.aimTurret(e,c,1.1)<.07&&this.cd<=0){let u=1.8+t.easy*4;l.x+=Ve(-u,u),l.z+=Ve(-u,u);let f=sn.copy(l).sub(a),d=f.length();f.y+=d*d*3/4608,this.fire(f.normalize())}}}},fc=class{constructor(e,t){this.ch=new ia("robot",T.scene),this.pos=this.ch.root.position,this.pos.set(e,0,t),this.yaw=0,this.team="red",this.isBoss=!0,this.alive=!0,this.plastic=!0,this.headMul=1.5,this.radius=2.4,this.height=this.ch.s*.96,this.maxHp=this.hp=2400,this.state="sleep",this.atkT=3,this.atk=null,this.summoned=0,this.thinkT=0,this.ch.model.traverse(n=>{n.isMesh&&(n.material.metalness=.15)}),T.actors.push(this),this.ch.play("idle",0)}hand(e,t){let n=this.ch.meta[e]||[0,.6,.3],i=this.ch.s;return this.ch.root.localToWorld(t.set(n[0]*i,n[1]*i,n[2]*i+.6))}damage(e,t,n,i,r){this.alive&&(this.state==="sleep"&&this.wake(),this.hp-=e*(r?1:.8),this.ch.hitFlash(),this.hp<=0&&this.die(t))}wake(){this.state==="sleep"&&(this.state="fight",T.onBossWake&&T.onBossWake(this))}die(e){this.alive=!1,this.state="dead",this.ch.play("death",.1),this.deadT=0,T.onKill&&T.onKill(this,e)}update(e,t){let n=this.ch;if(!this.alive){if(this.deadT+=e,this.deadT<3&&Math.random()<e*7){let c=qi.set(this.pos.x+Ve(-3,3),Ve(1,7),this.pos.z+Ve(-3,3));ys(c,2,0,null,.9),Vs(c,Math.random()<.5?12073516:10132122,8,2,1)}this.deadT>3&&!this.gone&&(this.gone=!0,n.root.visible=!1,ys(this.pos.clone().setY(3),8,0,null,3),Vs(qi.set(this.pos.x,4,this.pos.z),12073516,50,4,1.6),Vs(qi,10132122,40,4,1.5)),this.gone||n.update(e);return}let i=t.player;if(this.state==="sleep"){i&&Math.hypot(i.pos.x-this.pos.x,i.pos.z-this.pos.z)<48&&this.wake(),n.update(e);return}if((this.thinkT-=e)<=0){this.thinkT=.5;let c=null,h=1e9;for(let u of t.actors){if(!u.alive||u.team==="red"||u.hidden)continue;let f=u.pos.distanceTo(this.pos)-(u.isPlayer?8:0);f<h&&(h=f,c=u)}this.target=c}let r=this.target;if(!r){n.play("idle"),n.update(e);return}let o=Math.hypot(r.pos.x-this.pos.x,r.pos.z-this.pos.z),a=Math.atan2(r.pos.x-this.pos.x,r.pos.z-this.pos.z);this.yaw+=sa(a-this.yaw)*Math.min(1,e*1.5),n.root.rotation.y=this.yaw;let l=this.hp/this.maxHp;if((l<.66&&this.summoned<1||l<.33&&this.summoned<2)&&(this.summoned++,t.onBossSummon&&t.onBossSummon(this)),this.atk){let c=this.atk;if(c.t-=e,c.n-=e,c.k==="volley"&&c.n<=0&&c.left>0){c.n=.12,c.left--;let h=this.hand(c.left%2?"handR":"handL",Mn.set(0,0,0)),u=ra(r,Xi);u.x+=Ve(-2,2),u.z+=Ve(-2,2),u.y+=Ve(-.5,.5),Gi("bolt",h,sn.copy(u).sub(h).normalize().multiplyScalar(34),this,{dmg:9,r:1.6}),Ce("laser",.5,.8,this.pos)}if(c.k==="rockets"&&c.n<=0&&c.left>0){c.n=.22,c.left--;let h=this.ch.s,u=c.left%2?1:-1,f=n.root.localToWorld(Mn.set(u*.3*h,.82*h,0)),d=new Ot(r.pos.x+Ve(-5,5),0,r.pos.z+Ve(-5,5));Xs(d,16724e3,3.2,1.6);let g=1.6,x=d.x-f.x,p=d.z-f.z;Gi("rocket",f,sn.set(x/g,(0-f.y+15*g*g)/g,p/g),this,{grav:30,dmg:32,r:3.6,big:.9,life:4}),Ce("whoosh",.6,.7,this.pos)}if(c.k==="stomp"&&!c.done&&c.t<.7&&(c.done=!0,ys(this.pos.clone().add(sn.set(Math.sin(this.yaw)*3,0,Math.cos(this.yaw)*3)),10,40,this,1.6),Xs(this.pos,16777215,14,.6)),c.k==="walk"){sn.set(Math.sin(this.yaw),0,Math.cos(this.yaw));let h=o>22?3:o<12?-2:0;h?(ks(this.pos,sn.x*h*e,sn.z*h*e,2.2),n.play("run",.3,.45)):n.play("idle",.3),Math.random()<e*2&&h&&(t.shake=Math.min(.5,t.shake+.12))}c.t<=0&&(this.atk=null,this.atkT=Ve(.6,1.4))}else if(this.atkT-=e,n.play("idle",.3),this.atkT<=0){let c=Math.random(),h=l<.5?1.4:1;o<10?(this.atk={k:"stomp",t:1.3,n:0},n.play("kick",.1,.7),Ce("roar",.7,.6,this.pos)):c<.45?(this.atk={k:"volley",t:2.2,n:.3,left:Math.round(12*h)},n.play("shoot",.1,.6)):c<.75?(this.atk={k:"rockets",t:2.4,n:.4,left:Math.round(6*h)},n.play("shoot",.1,.5)):this.atk={k:"walk",t:Ve(2,3.5),n:0}}n.update(e)}};var he=s=>document.getElementById(s);var dc=0,pc=0,aa=0,ld=0,mc=[];function Zs(s,e=1.6){let t=he("hint");t._t!==s&&(t.innerHTML=s,t._t=s),t.style.opacity=1,dc=e}function gc(s){let e=he("hm");e.className=s?"kill":"",e.style.opacity=1,e.style.transform="scale("+(s?1.35:1)+")",pc=s?.25:.12}function $s(s,e){let t=document.createElement("div");t.textContent=s,e&&(t.className=e===!0?"bad":e);let n=he("pop");for(;n.children.length>4;)n.firstChild.remove();he("pop").appendChild(t),setTimeout(()=>t.remove(),1e3)}function cd(s){aa=Math.min(1,aa+s)}function a0(s){let e=document.createElement("i");e.style.transform="rotate("+s+"rad)",he("dirs").appendChild(e),mc.push({i:e,t:.8})}function l0(s){let e=he("xh");e._b||(e.innerHTML='<i class="d"></i><i></i><i></i><i></i><i></i>',e._b=[...e.children].slice(1));let t=6+s,[n,i,r,o]=e._b;n.style.cssText=`left:${t}px;top:-1px;width:10px;height:2px`,i.style.cssText=`left:${-t-10}px;top:-1px;width:10px;height:2px`,r.style.cssText=`top:${t}px;left:-1px;width:2px;height:10px`,o.style.cssText=`top:${-t-10}px;left:-1px;width:2px;height:10px`}function c0(s,e){dc>0&&(dc-=s,dc<=0&&(he("hint").style.opacity=0)),pc>0&&(pc-=s,pc<=0&&(he("hm").style.opacity=0));let t=e<.3?.25+Math.sin(performance.now()/180)*.1:0;aa=Math.max(0,aa-s*1.6),he("dmg").style.opacity=Math.max(aa,t),ld=Math.max(0,ld-s*.8),he("flashw").style.opacity=ld;for(let n=mc.length-1;n>=0;n--){let i=mc[n];i.t-=s,i.i.style.opacity=Math.max(0,i.t/.8),i.t<=0&&(i.i.remove(),mc.splice(n,1))}}var ct=(s,e=!0)=>he(s).classList.toggle("hide",!e),o0=0;function Si(s,e,t){let n=he("ann");n&&(n.className="",n.offsetWidth,n.innerHTML=s+(e?"<small>"+e+"</small>":""),n.className="go "+(t||""),clearTimeout(o0),o0=setTimeout(()=>n.className="",1500))}var Tn=R,Qs=new URLSearchParams(location.search),rn=matchMedia&&matchMedia("(pointer:coarse)").matches||/Android|iPhone|iPad|Mobile/i.test(navigator.userAgent)||Qs.get("mobile")!=null,fd=Qs.get("q"),to=fd!=null?+fd:rn?0:1,Ac=Qs.get("autoclear")!=null,md=Qs.get("bot")!=null;Qm(Qs.get("nolod")!=null?0:to>0?1:.75);document.body.classList.toggle("mobile",rn);var _0="toystrike_v1",_t={coins:0,stars:{},own:{},daily:{last:"",day:-1},best:{}};try{let s=JSON.parse(localStorage.getItem(_0));s&&(_t=Object.assign(_t,s))}catch{}var gd=()=>{try{localStorage.setItem(_0,JSON.stringify(_t))}catch{}},JM=[{id:"sniper",n:"Snayper",d:"Komandaya uzaqvuran snayper qo\u015Fulur",c:400,ic:"\u25CE"},{id:"bazooka",n:"Bazuka\xE7\u0131",d:"Tanklara qar\u015F\u0131 raket atan a\u011F\u0131r \u0259sg\u0259r",c:600,ic:"\u27A4"},{id:"desert",n:"S\u0259hra kamuflyaj\u0131",d:"Mavi tank \xFC\xE7\xFCn qum r\u0259ngli boya",c:300,ic:"\u25C6"},{id:"nades",n:"Qumbara \xE7antas\u0131",d:"H\u0259r missiyada +2 qumbara",c:250,ic:"\u25CF"}],fa=[{id:1,n:"U\u015Faq ota\u011F\u0131",d:"\xC7arpay\u0131 alt\u0131 s\u0259ng\u0259r, kitab bunkerl\u0259ri v\u0259 oyuncaq qutusu qalas\u0131",build:i0,col:"#e0a060"},{id:2,n:"Evin h\u0259y\u0259ti",d:"Ot c\u0259ng\u0259lliyi, \u015Flanq \xE7ay\u0131, qum s\u0259hras\u0131 v\u0259 D\u0259mir Tiran",build:s0,col:"#6cc04a"}],dd=[50,75,100,150,200,250,400],pd=(s=new Date)=>s.getFullYear()+"-"+(s.getMonth()+1)+"-"+s.getDate();function Rc(){let s=pd();if(_t.daily.last===s)return null;let e=new Date;return e.setDate(e.getDate()-1),{day:_t.daily.last===pd(e)?(_t.daily.day+1)%7:0}}var jM=s=>s===1||(_t.stars[s-1]||0)>0,QM=()=>fa.reduce((s,e)=>s+(_t.stars[e.id]||0),0),zt=new fl({antialias:!rn&&fd!=="0",powerPreference:"high-performance"});zt.setPixelRatio(Math.min(devicePixelRatio||1,rn?1.25:1.75));zt.setSize(innerWidth,innerHeight);zt.outputColorSpace=wt;zt.toneMapping=Oo;zt.toneMappingExposure=1.15;zt.shadowMap.enabled=to>0;zt.shadowMap.type=Vu;var ca=zt.domElement;document.body.prepend(ca);var Lt=new Ao;Lt.background=new ce(15259844);Lt.fog=new Eo(15259844,90,210);var st=new jt(68,innerWidth/innerHeight,.1,400),eS=()=>st.aspect<1?84:68;addEventListener("resize",()=>{zt.setSize(innerWidth,innerHeight),st.aspect=innerWidth/innerHeight,st.updateProjectionMatrix()});T.scene=Lt;T.cam=st;T.audio=Gt;T.sfx=Ce;var xc=new Cl(16774376,9071178,1.05),ii=new Hr(16773340,2.4);if(to){ii.castShadow=!0,ii.shadow.mapSize.set(2048,2048);let s=ii.shadow.camera;s.left=s.bottom=-42,s.right=s.top=42,s.near=1,s.far=160,ii.shadow.bias=-6e-4,ii.shadow.normalBias=.04}var js=new ds(16760944,0,12,2),yc=new Tn(.25,1,-.65).normalize();(function(){let e=new Ao,t=new Os(50,32,16),n=[],i=t.attributes.position;for(let a=0;a<i.count;a++){let l=i.getY(a)/50,c=l>0?new ce(16773856).lerp(new ce(8370416),Math.pow(l,.6)):new ce(14206120).lerp(new ce(6969928),Math.pow(-l,.5));n.push(c.r,c.g,c.b)}t.setAttribute("color",new He(n,3)),e.add(new Ie(t,new Et({vertexColors:!0,side:gn})));let r=(a,l,c,h,u,f,d)=>{let g=new Ie(new xn(u,f),new Et({color:new ce(a).multiplyScalar(d),side:Pt}));g.position.set(l,c,h),g.lookAt(0,0,0),e.add(g)};r(16777215,12,34,-20,12,12,4),r(16774368,-34,14,10,18,10,1.6),r(15266047,30,12,20,16,8,1.4),r(16771280,0,8,38,22,6,1.2);let o=new Ur(zt);Lt.environment=o.fromScene(e,.03).texture,o.dispose(),Lt.environmentIntensity=.8})();var Sn=null,gi=null,h0=null,tS=!rn&&to>=1&&Qs.get("post")!=="0";if(tS)try{let s=new Yt(innerWidth*zt.getPixelRatio(),innerHeight*zt.getPixelRatio(),{type:yn,samples:4,depthTexture:new os});Sn=new Hl(zt,s),Sn.addPass(new Vl(Lt,st)),gi=new Vo(Lt,st,innerWidth,innerHeight),gi.setGBuffer(s.depthTexture,void 0),gi.blendIntensity=.8,gi.updateGtaoMaterial({radius:1.1,distanceExponent:1.4,thickness:2,scale:1,samples:12}),gi.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:12}),Sn.addPass(gi),Sn.addPass(new Xr(new te(innerWidth/2,innerHeight/2),.32,.5,.95)),h0=new Wr({uniforms:{tDiffuse:{value:null},vig:{value:.26},sat:{value:1.14}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float vig, sat; varying vec2 vUv;
      void main(){ vec4 c = texture2D(tDiffuse, vUv); float l = dot(c.rgb, vec3(.2126,.7152,.0722)); c.rgb = mix(vec3(l), c.rgb, sat);
        c.rgb *= mix(vec3(.95,.98,1.05), vec3(1.04,1.01,.95), smoothstep(.05,.9,l)); vec2 d = vUv - .5; c.rgb *= 1. - vig * smoothstep(.25, .85, dot(d,d) * 2.2); gl_FragColor = c; }`}),Sn.addPass(h0),Sn.addPass(new Gl),addEventListener("resize",()=>{Sn&&Sn.setSize(innerWidth,innerHeight),gi&&gi.setSize(innerWidth,innerHeight)})}catch(s){console.warn("post off",s),Sn=null}var Ke={t:0,n:0,lvl:2,on:Qs.get("nofps")==null,fps:60},Sc=zt.getPixelRatio(),u0=Math.max(.5,Sc*(rn?.6:.55));Ke.pr=Sc;Ke.up=0;Ke.lock=0;Ke.lastUp=0;function f0(s){s=Math.round(s*20)/20,!(Math.abs(s-zt.getPixelRatio())<.01)&&(Ke.pr=s,zt.setPixelRatio(s),zt.setSize(innerWidth,innerHeight),Sn&&Sn.setPixelRatio(s))}function nS(s){if(!Ke.on||T.mode!=="play"){Ke.t=Ke.n=0;return}if(s>.25||(Ke.t+=s,Ke.n++,Ke.t<2))return;let e=Ke.fps=Ke.n/Ke.t;if(Ke.t=Ke.n=0,Ke.lock=Math.max(0,Ke.lock-2),to&&e<50&&!Ke.halfSh){Ke.halfSh=1,zt.shadowMap.autoUpdate=!1;return}if(Sn&&e<40&&Ke.lvl===2){gi.enabled=!1,Ke.lvl=1;return}if(Sn&&e<32&&Ke.lvl===1){Sn=null,Ke.lvl=0;return}if(e<48&&Ke.pr>u0+.01){f0(Math.max(u0,Ke.pr*(e<30?.8:.9))),Ke.up=0,Ke.lastUp&&(Ke.lock=30,Ke.lastUp=0);return}e>57&&Ke.pr<Sc-.01&&!Ke.lock?++Ke.up>=3&&(Ke.up=0,Ke.lastUp=1,f0(Math.min(Sc,Ke.pr*1.1))):Ke.up=0}var De=null,ha=null,je=null,Qr=[],si=null,bc=null,jr=null,xd=[],kn=null,Bn={},It={l:!1,r:!1,dx:0,dy:0},Tc=!1,Le={yaw:Math.PI,pitch:-.12,fov:68,back:3.6,pos:new Tn,shakeT:0},bn=new Tn,da=new Tn,Js=new Tn,d0=new Vt,p0=new Vt,iS=new Tn,bs=(s,e,t)=>Math.max(e,Math.min(t,s)),_c=s=>{for(;s>Math.PI;)s-=2*Math.PI;for(;s<-Math.PI;)s+=2*Math.PI;return s},Cc=s=>s.set(-Math.sin(Le.yaw)*Math.cos(Le.pitch),Math.sin(Le.pitch),-Math.cos(Le.yaw)*Math.cos(Le.pitch)),ua=s=>s.set(Math.cos(Le.yaw),0,-Math.sin(Le.yaw));function sS(s,e,t){s&&(s.parent.getWorldQuaternion(p0),d0.setFromAxisAngle(iS.copy(e).applyQuaternion(p0.invert()),t),s.quaternion.premultiply(d0),s.updateMatrixWorld(!0))}addEventListener("keydown",s=>{if(Bn[s.code]=!0,Gt.init(),T.mode==="intro"&&(s.code==="Space"||s.code==="Enter")){T.introT=99;return}if(s.code==="Escape"||s.code==="KeyP"){T.mode==="play"?eo(!0):T.mode==="pause"&&s.code==="KeyP"&&eo(!1);return}T.mode!=="play"||s.repeat||(s.code==="KeyR"?Ec():s.code==="KeyG"?v0():s.code==="KeyE"?M0():s.code==="KeyQ"?T0():s.code==="KeyC"||s.code==="ControlLeft"?je&&!T.inTank&&(je.crouch=!je.crouch):s.code==="Digit1"?vc("attack"):s.code==="Digit2"?vc("hold"):s.code==="Digit3"&&vc("follow"))});addEventListener("keyup",s=>{Bn[s.code]=!1});addEventListener("blur",()=>{for(let s in Bn)Bn[s]=!1;It.l=It.r=!1});ca.addEventListener("mousedown",s=>{if(Gt.init(),T.mode==="intro"){T.introT=99;return}if(!(T.mode!=="play"||rn)){if(!Tc&&!T.noLock){yd();return}s.button===0&&(It.l=!0,T.artyMode&&Md()),s.button===2&&(It.r=!0)}});addEventListener("mouseup",s=>{s.button===0&&(It.l=!1),s.button===2&&(It.r=!1)});addEventListener("contextmenu",s=>s.preventDefault());addEventListener("mousemove",s=>{!Tc||T.mode!=="play"||(It.dx+=s.movementX,It.dy+=s.movementY)});function yd(){if(!(md||Ac))try{let s=ca.requestPointerLock&&ca.requestPointerLock();s&&s.catch&&s.catch(()=>{})}catch{}}document.addEventListener("pointerlockchange",()=>{Tc=document.pointerLockElement===ca,!Tc&&T.mode==="play"&&!rn&&eo(!0)});var gt={mx:0,my:0,fire:!1,aim:!1,joyId:null,lookIds:new Map};function rS(){let s=he("joy"),e=he("knob"),t=null,n=(r,o,a)=>{let l=he(r);l.addEventListener("touchstart",c=>{c.preventDefault(),c.stopPropagation(),Gt.init(),l.classList.add("on"),o&&o();for(let h of c.changedTouches)r==="bfire"&&gt.lookIds.set(h.identifier,{x:h.clientX,y:h.clientY})},{passive:!1}),l.addEventListener("touchend",c=>{c.preventDefault(),l.classList.remove("on"),a&&a();for(let h of c.changedTouches)gt.lookIds.delete(h.identifier)},{passive:!1})};n("bfire",()=>{gt.fire=!0,T.artyMode&&Md()},()=>gt.fire=!1),n("baim",()=>{gt.aim=!gt.aim,he("baim").classList.toggle("lit",gt.aim)}),n("bnade",v0),n("bcrouch",()=>{je&&!T.inTank&&(je.crouch=!je.crouch)}),n("breload",Ec),n("buse",M0),n("barty",T0),n("bsq",()=>vc(T.order==="follow"?"attack":T.order==="attack"?"hold":"follow")),n("bpause",()=>eo(!0)),addEventListener("touchstart",r=>{if(Gt.init(),T.mode==="intro"){T.introT=99;return}if(T.mode==="play")for(let o of r.changedTouches)o.target.closest&&o.target.closest(".mb")||(o.clientX<innerWidth*.42&&gt.joyId==null?(gt.joyId=o.identifier,t={x:o.clientX,y:o.clientY},s.style.left=t.x-60+"px",s.style.top=t.y-60+"px",s.classList.add("on"),e.style.transform=""):gt.lookIds.set(o.identifier,{x:o.clientX,y:o.clientY}))},{passive:!0}),addEventListener("touchmove",r=>{var o;if(T.mode==="play"){(o=r.preventDefault)==null||o.call(r);for(let a of r.changedTouches){if(a.identifier===gt.joyId&&t){let c=a.clientX-t.x,h=a.clientY-t.y,u=Math.hypot(c,h),f=52;u>f&&(c*=f/u,h*=f/u),gt.mx=c/f,gt.my=h/f,e.style.transform=`translate(${c}px,${h}px)`}let l=gt.lookIds.get(a.identifier);if(l){let c=T.artyMode?2.2:1.6;It.dx+=(a.clientX-l.x)*c,It.dy+=(a.clientY-l.y)*c,l.x=a.clientX,l.y=a.clientY}}}},{passive:!1});let i=r=>{for(let o of r.changedTouches)o.identifier===gt.joyId&&(gt.joyId=null,gt.mx=gt.my=0,s.classList.remove("on"),e.style.transform=""),gt.lookIds.delete(o.identifier)};addEventListener("touchend",i),addEventListener("touchcancel",i)}function _d(){let s=gt.mx,e=gt.my;(Bn.KeyW||Bn.ArrowUp)&&(e-=1),(Bn.KeyS||Bn.ArrowDown)&&(e+=1),(Bn.KeyA||Bn.ArrowLeft)&&(s-=1),(Bn.KeyD||Bn.ArrowRight)&&(s+=1);let t=Math.hypot(s,e);return t>1&&(s/=t,e/=t),{x:s,y:e,l:Math.min(1,t)}}var vd=()=>It.l||gt.fire,wc=()=>It.r||gt.aim;function oS(){let s=new Ss({name:"blue_spec",team:"blue",kind:"rifle",x:De.start.x,z:De.start.z,yaw:De.start.yaw});return T.units.splice(T.units.indexOf(s),1),s.isPlayer=!0,s.maxHp=s.hp=100,s.headMul=1.4,s.mag=30,s.res=210,s.nades=3+(_t.own.nades?2:0),s.relT=0,s.cd=0,s.regenT=0,s.vel=new Tn,s.firedT=0,s.dmgTaken=0,s.damage=aS,s.die=lS,s.ch.play("idle",0),s}function aS(s,e,t,n,i){if(!(!this.alive||T.god||T.mode!=="play"||T.ending)&&(i&&(s*=T.dmgMul||1),!T.inTank)){if(this.hp-=s,this.dmgTaken+=s,this.regenT=5,this.ch.hitFlash(),cd(Math.min(.7,s/30)),Ce("hurt",.45,1),T.shake=Math.min(1,T.shake+s/60),e&&e.pos){let r=e.pos.x-this.pos.x,o=e.pos.z-this.pos.z,a=ua(Js);a0(Math.atan2(r*a.x+o*a.z,r*-Math.sin(Le.yaw)+o*-Math.cos(Le.yaw)))}this.hp<=0&&this.die(e,t,i,n)}}function lS(s,e,t){this.hp=0,this.alive=!1,Ss.prototype.die.call(this,s,e,!0,!1),T.dying=2.4,Si("M\u018F\u011ELUB OLDUN","Plastik q\u0259hr\u0259man s\u0131nd\u0131","hs")}function Ec(){let s=je;!s||!s.alive||T.inTank||s.relT>0||s.mag>=30||s.res<=0||(s.relT=1.5,Ce("reload",.6))}function v0(){let s=je;if(!s||!s.alive||T.inTank||T.artyMode||s.nades<=0)return;s.nades--;let e=Cc(bn),t=da.set(s.pos.x,1.7,s.pos.z).addScaledVector(ua(Js),.3);Gi("grenade",t,new Tn(e.x*16,6+e.y*10,e.z*16),s,{fuse:1.6,r:4.8,dmg:130,big:1.1}),Ce("whoosh",.4,1.2),s.ch.play("kick",.08)}function M0(){let s=je;if(!(!s||!s.alive||T.artyMode)){if(T.inTank)return S0();si&&si.alive&&Math.hypot(si.pos.x-s.pos.x,si.pos.z-s.pos.z)<5.2&&cS(si)}}function cS(s){T.inTank=s,s.driver="player",je.hidden=!0,je.noBullet=!0,je.ch.root.visible=!1,je.crouch=!1,Ce("metal",.6,.8),Zs("Sol d\xFCym\u0259: top \xB7 Sa\u011F d\xFCym\u0259: pulemyot \xB7 E: d\xFC\u015F",3.2),T.engine||(T.engine=Gt.loop("engine",.18)),Si("TANK","S\xFCr\xFCc\xFC yerind\u0259s\u0259n","")}function S0(){let s=T.inTank;if(!s)return;T.inTank=null,s.driver=null,s.v=0;let e=je;e.hidden=!1,e.noBullet=!1,e.ch.root.visible=!0;for(let t of[1,-1,0]){let n=s.yaw+Math.PI/2*t+(t===0?Math.PI:0),i=s.pos.x+Math.sin(n)*3.6,r=s.pos.z+Math.cos(n)*3.6;if(e.pos.set(i,0,r),ks(e.pos,0,0,.42),Math.hypot(e.pos.x-i,e.pos.z-r)<.3)break}T.engine&&(T.engine.stop(),T.engine=null),Ce("metal",.5,1.1)}function b0(s){let e=st.position,t=Cc(Js).clone(),n=T.inTank?8:Le.back+.5,i=Hi(e,t,220,{skipGlass:!0}),r=i?i.t:220;T.inTank&&(T.inTank.open=!0);let o=Hi(e,t,220,{skipGlass:!0});T.inTank&&(T.inTank.open=!1),r=o?o.t:220;for(let a of T.actors){if(!a.alive||a.team==="blue"||a.hidden)continue;let l=qo(e,t,a,r);l&&l.t<r&&l.t>n*.5&&(r=l.t)}return s.copy(e).addScaledVector(t,Math.max(r,n))}function hS(s){let e=je;if(!e.alive){e.updDead(s);return}if(e.firedT=Math.max(0,e.firedT-s),e.cd-=s,e.shootT=Math.max(0,e.shootT-s),(e.regenT-=s)<=0&&e.hp<e.maxHp&&(e.hp=Math.min(e.maxHp,e.hp+7*s)),e.relT>0&&(e.relT-=s,e.relT<=0)){let x=Math.min(30-e.mag,e.res);e.mag+=x,e.res-=x}if(e.inGrass=gs.some(x=>x.name==="grass"&&e.pos.x>x.min[0]&&e.pos.x<x.max[0]&&e.pos.z>x.min[1]&&e.pos.z<x.max[1]),T.inTank){let x=T.inTank;e.pos.copy(x.pos),uS(s,x);return}if(T.artyMode){e.anim(s),e.ch.update(s);return}let t=_d(),n=wc(),i=vd(),r=e.crouch?3:n?4.2:6.5;(Bn.ShiftLeft||Bn.ShiftRight||rn&&t.l>.95)&&t.y<-.3&&!n&&!i&&(r=9,e.crouch=!1),r0(De,e.pos.x,e.pos.z)&&(r*=.55);let o=bn.set(-Math.sin(Le.yaw),0,-Math.cos(Le.yaw)),a=ua(da),l=(o.x*-t.y+a.x*t.x)*r,c=(o.z*-t.y+a.z*t.x)*r,h=Math.min(1,s*12);e.vel.x+=(l-e.vel.x)*h,e.vel.z+=(c-e.vel.z)*h,ks(e.pos,e.vel.x*s,e.vel.z*s,.42);let u=De.bounds;e.pos.x=bs(e.pos.x,u[0]+.6,u[2]-.6),e.pos.z=bs(e.pos.z,u[1]+.6,u[3]-.6);let f=Math.hypot(e.vel.x,e.vel.z);e.moving=f;let d=n||i||e.firedT>0||f<.5;if(e.face(d?Le.yaw+Math.PI:Math.atan2(e.vel.x,e.vel.z),s,d?16:10),f>3.5&&(e.stepT=(e.stepT||0)-s*f/6)<=0&&(e.stepT=.32,Ce("step",.12,1.3)),i&&e.relT<=0){if(e.mag<=0)e.res>0?Ec():e.cd<=0&&(e.cd=.3,Ce("click",.4));else if(e.cd<=0){e.cd=.1,e.mag--,e.firedT=.8,e.shootT=.25;let x=e.ch.muzzleWorld(new Tn),m=b0(new Tn).sub(x).normalize();m.dot(Cc(Js))<.6&&m.copy(Js);let v=(n?.006:.016)+(f>1?.014:0)+(e.crouch?-.004:0);m.x+=Ve(-v,v),m.y+=Ve(-v,v)*.7,m.z+=Ve(-v,v),m.normalize();let y=Qo(e,x,m,22*(1+T.easy*.6),160,{loud:40,from:x});y.actor&&y.actor.team==="red"&&gc(!y.actor.alive),jo(e.ch.muzzle,.55),js.position.copy(x),js.intensity=30,Ce("rifle",.5,1.05),Le.pitch=bs(Le.pitch+(n?.006:.011),-1.2,.9),T.shake=Math.min(.5,T.shake+.04),e.mag===0&&e.res>0&&setTimeout(Ec,150)}}let g=e.ch;f>.8?g.play("run",.15,bs(f/6.5,.55,1.4)):e.crouch?g.play("crouch",.18):n||e.shootT>0||e.firedT>0?g.play("shoot",.1):g.play("idle",.25),g.update(s),(n||e.firedT>0)&&g.spine&&sS(g.spine,ua(Js),-Le.pitch*.75);for(let x of xd)!x.got&&Math.hypot(x.p.x-e.pos.x,x.p.z-e.pos.z)<2.8&&(x.got=!0,Lt.remove(x.s),e.res+=60,e.nades++,e.hp=Math.min(e.maxHp,e.hp+25),Ce("pickup",.7),$s("+60 g\xFCll\u0259  +1 qumbara  +25 can","ammo"));si&&si.alive&&!T.inTank&&Math.hypot(si.pos.x-e.pos.x,si.pos.z-e.pos.z)<5.2&&Zs(rn?"\u25A3 d\xFCym\u0259si \u2014 tanka min":"E \u2014 tanka min",.3)}function uS(s,e){let t=_d();e.drive(s,-t.y,t.x),e.updSolid&&e.updSolid(),e.aimTurret(s,Le.yaw+Math.PI,2),T.engine&&T.engine.vol(.12+Math.min(.25,Math.abs(e.v)*.03));let n=b0(new Tn),i=e.muzzleWorld(new Tn);if(vd()&&e.cd<=0){let r=n.clone().sub(i),o=r.length();if(r.y+=o*o*3/11250,r.normalize(),Math.abs(_c(Math.atan2(r.x,r.z)-e.tYaw))>.12){let l=r.y;r.set(Math.sin(e.tYaw),0,Math.cos(e.tYaw)).multiplyScalar(Math.sqrt(1-l*l)).setY(l)}e.fire(r,je),js.position.copy(i),js.intensity=80}if((It.r||gt.aim)&&(e.mgCd-=s)<=0){e.mgCd=.09;let r=bn.set(e.pos.x,e.height*.82,e.pos.z).addScaledVector(da.set(Math.sin(e.tYaw),0,Math.cos(e.tYaw)),1.2),o=n.clone().sub(r).normalize();o.x+=Ve(-.02,.02),o.y+=Ve(-.015,.015),o.z+=Ve(-.02,.02),o.normalize(),e.open=!0;let a=Qo(je,r.clone(),o,12,120,{loud:40});e.open=!1,a.actor&&a.actor.team==="red"&&gc(!a.actor.alive),Ce("minigun",.3,1.1)}}function T0(){if(!je||!je.alive)return;if(T.artyMode){T.artyMode=!1,kn.visible=!1;return}if(T.arty<1){Zs("Artilleriya haz\u0131rlan\u0131r\u2026",1.4),Ce("click",.5);return}T.artyMode=!0,kn.visible=!0;let s=bn.set(-Math.sin(Le.yaw),0,-Math.cos(Le.yaw));T.artyC.copy(je.pos).addScaledVector(s,26),T.artyC.y=0,Ce("beep",.5),Zs(rn?"H\u0259d\u0259fi s\xFCr\xFC\u015Fd\xFCr \xB7 AT\u018F\u015E":"Si\xE7anla h\u0259d\u0259f se\xE7 \xB7 Sol d\xFCym\u0259: AT\u018F\u015E \xB7 Q: l\u0259\u011Fv",3)}function Md(s,e){let t=(s||T.artyC).clone();if(!e){if(!T.artyMode||T.arty<1)return;T.arty--,T.artyMode=!1,kn.visible=!1,It.l=!1,gt.fire=!1}if(Ce("beep",.6,.8),e||Si("ART\u0130LLER\u0130YA","M\u0259rmil\u0259r yoldad\u0131r!","hot"),bc){let i=bc.obj.position;for(let r=0;r<3;r++)setTimeout(()=>{if(T.mode!=="play")return;let o=bn.set(i.x,3.6,i.z);Ws(o,6,1.6),Gs(o,4,2,10130570,1.8),Ce("boom",.5,1.4,o)},r*260)}let n=e?1:6;for(let i=0;i<n;i++)setTimeout(()=>{if(T.mode!=="play"&&T.mode!=="intro")return;let r=Math.random()*6.28,o=e?0:Math.sqrt(Math.random())*6,a=new Tn(t.x+Math.cos(r)*o,0,t.z+Math.sin(r)*o);Xs(a.clone().setY(.1),16732192,4,1.1),Ce("whoosh",.45,.5,a),setTimeout(()=>{T.mode!=="play"&&T.mode!=="intro"||Gi("arty",a.clone().setY(28),new Tn(Ve(-1,1),-46,Ve(-1,1)),je,{dmg:140,r:5,big:1.4,grav:30})},450)},700+i*260+(e?Math.random()*300:0))}function fS(){let s=[{name:"blue_spec",kind:"rifle"},{name:"blue_spec",kind:"rifle"},{name:"blue_spec",kind:"heavy"}];return _t.own.sniper&&(s[0]={name:"blue_sniper",kind:"sniper"}),_t.own.bazooka&&(s[2]={name:"blue_heavy",kind:"bazooka"}),s}function w0(s,e,t){let n=fS()[s],i=new Ss({...n,team:"blue",x:e,z:t,yaw:De.start.yaw,order:T.order,slot:s,hpMul:1.6});return i.holdP=new Tn(e,0,t),Qr[s]=i,i}function vc(s){T.order=s;for(let t of Qr)t&&t.alive&&(t.order=s,t.holdP=t.pos.clone(),s!=="attack"&&(t.target=t.target&&t.target.alive?t.target:null));$s({attack:"H\xDCCUM!",hold:"M\xD6VQE TUT!",follow:"ARXAMCA!"}[s],"cash"),Ce("beep",.5,s==="attack"?1.2:s==="hold"?.9:1),Ce("shout",.3,1.1),Pc()}function Pc(){let s={attack:"H\xFCcum",hold:"M\xF6vqe tut",follow:"Arxamca"};he("sqo").textContent=s[T.order],he("sqd").innerHTML=Qr.map(e=>`<i class="${e&&e.alive?"":"x"}" style="--h:${e&&e.alive?Math.round(e.hp/e.maxHp*100):0}%"></i>`).join("")}var E0=()=>T.actors.filter(s=>s.alive&&s.team==="red").length;function A0(s){let e=De.waves[s];if(T.wave=s,T.waveT=0,he("obj").textContent=e.obj,he("wavei").textContent="M\u0259rh\u0259l\u0259 "+(s+1)+" / "+De.waves.length,Si(e.msg[0],e.msg[1],"hot"),Ce("alarm",.25,1.2),s>0){for(let t=0;t<3;t++)if(!Qr[t]||!Qr[t].alive){let n=Ve(0,6.28);w0(t,je.pos.x+Math.cos(n)*3,je.pos.z+Math.sin(n)*3+2),t===0&&$s("\u018Flav\u0259 q\xFCvv\u0259 g\u0259ldi","nade")}}for(let t of e.units||[]){let n=new Ss({...t,team:"red",yaw:t.yaw!=null?t.yaw:0,march:t.march?t.march.clone():null});t.march&&(n.state="idle"),T.easy>0&&t.kind==="rusher"&&(n.cool+=1.5)}for(let t of e.tanks||[])new oa("red",t.x,t.z,t.yaw||0);if(e.barrage&&setTimeout(()=>{if(T.mode==="play"){Si("ART\u0130LLER\u0130YA D\u018FST\u018FY\u0130",'Komandir: "At\u0259\u015F!"',"hot");for(let t of e.barrage)Md(t,!0)}},2600),e.boss){let t=T.boss=new fc(De.bossPos.x,De.bossPos.z);t.yaw=0,ct("bossb",!0)}e.capture&&(ct("capb",!0),T.capT=0),Pc()}function dS(s){let e=De.waves[T.wave];T.waveT+=s;let t=De.waves[T.wave+1];if(t&&T.waveT>2&&t.trigger({alive:E0(),player:je.pos})&&A0(T.wave+1),e.capture){let n=Math.hypot(je.pos.x-De.flagPos.x,je.pos.z-De.flagPos.z),i=T.actors.some(r=>r.alive&&r.team==="red"&&r.pos.distanceTo(De.flagPos)<16);n<4.4&&!i?T.capT+=s:T.capT=Math.max(0,T.capT-s*.5),he("capb").firstElementChild.style.width=Math.min(100,T.capT/4*100)+"%",he("capl").textContent=n>=4.4?"Bayra\u011Fa yax\u0131nla\u015F":i?"D\xFC\u015Fm\u0259n yax\u0131ndad\u0131r!":"\u018Fl\u0259 ke\xE7irilir\u2026",T.capT>=4&&!T.ending&&(jr.userData.cloth.material.color.setHex(3112416),jr.userData.ring.material.color.setHex(4235519),m0("BAYRAQ \u018FL\u018F KE\xC7\u0130R\u0130LD\u0130"))}e.boss&&T.boss&&(he("bossb").firstElementChild.style.width=Math.max(0,T.boss.hp/T.boss.maxHp*100)+"%",!T.boss.alive&&!T.ending&&T.boss.deadT>2.5&&m0("D\u018FM\u0130R T\u0130RAN M\u018F\u011ELUB OLDU"))}function m0(s){T.ending=3,Si(s,"Q\u018FL\u018FB\u018F!","hot"),Ce("star",.7),Gt.music.intensity=.6,T.god=!0}T.onKill=(s,e)=>{if(s.team!=="red"){s.team==="blue"&&!s.isPlayer&&!s.isTank&&Pc(),s===T.inTank&&(S0(),T.god=!1,je.damage(35,e,null,!1,!1),$s("Tank m\u0259hv oldu!",!0));return}let t=s.isBoss?300:s.isTank?60:s.kind==="heavy"||s.kind==="bazooka"||s.kind==="sniper"?20:10;T.coinsRun+=t,T.kills++,e&&(e.isPlayer||e===T.inTank)&&($s("+"+t+" \u25C9","cash"),gc(!0),Ce("kill",.3,1.2)),he("coins").textContent=_t.coins+T.coinsRun,s.isTank&&Si("TANK M\u018FHV ED\u0130LD\u0130","+"+t+" sikk\u0259","hot")};T.onBossWake=s=>{Si("D\u018FM\u0130R T\u0130RAN","Robot oyand\u0131!","hs"),Ce("roar",.8,.8),Gt.music.intensity=2,T.shake=1.2};T.onBossSummon=s=>{Si("K\xD6M\u018FK \xC7A\u011EIRDI","Q\u0131rm\u0131z\u0131 d\u0259st\u0259 g\u0259lir","hot");for(let e=0;e<4;e++){let t=e/4*6.28;new Ss({name:e%2?"red_heavy":"red_rifle",kind:e%2?"heavy":"rifle",team:"red",x:s.pos.x+Math.cos(t)*8,z:s.pos.z+Math.sin(t)*8+4,leash:12}).state="combat"}};T.onPlayerTankHit=(s,e)=>{cd(Math.min(.5,s/80)),T.shake=Math.min(1,T.shake+s/90),Ce("metal",.5,.7)};var Jr=null;function pS(){if(Jr)return Jr;Jr=new Set;for(let s in Wt)Wt[s].scene.traverse(e=>e.geometry&&Jr.add(e.geometry));if(Wt.blue_tank&&Wt.blue_tank.hull)for(let s of["blue_tank","red_tank"])for(let e of[Wt[s].hull,Wt[s].turret])e.traverse(t=>t.geometry&&Jr.add(t.geometry));return Jr}function mS(){let s=pS();for(Lt.traverse(e=>{e.isMesh&&!e.isSkinnedMesh&&e.geometry&&!s.has(e.geometry)&&!e.isInstancedMesh&&e.geometry.dispose&&e.userData.fx==null&&e.matrixAutoUpdate===!1&&e.geometry.dispose()});Lt.children.length;)Lt.remove(Lt.children[0]);T.units.length=T.tanks.length=T.actors.length=T.proj.length=T.noises.length=0,xd=[],Qr=[],T.boss=null,si=null,T.inTank=null}function Sd(s){mS(),ha=fa.find(t=>t.id===s),Lt.add(xc,ii,ii.target,js),Pm(Lt),Hm(Lt),De=ha.build(Lt,to),T.groundCol=De.groundCol,T.dustCol=De.dustCol;let e=De.sun;yc.set(...e.dir).normalize(),ii.color.setHex(e.col),ii.intensity=e.int,xc.color.setHex(e.hemi[0]),xc.groundColor.setHex(e.hemi[1]),xc.intensity=e.hemi[2],Lt.background=new ce(e.bg),Lt.fog=new Eo(e.fog[0],e.fog[1],e.fog[2]),Wt.artillery?bc=$l(Lt,Wt,"artillery",De.arty.x,De.arty.z,2,1.25,{}):bc=null,jr=De.flag,kn=new Ut;{let t=new Et({color:16728096,transparent:!0,opacity:.85,depthWrite:!1,depthTest:!1}),n=new Ie(new Oi(5.6,6.1,48),t);n.rotation.x=-Math.PI/2,kn.add(n);let i=new Ie(new Oi(.4,.8,24),t);i.rotation.x=-Math.PI/2,kn.add(i);for(let r=0;r<4;r++){let o=new Ie(new xn(.3,3),t);o.rotation.x=-Math.PI/2,o.rotation.z=r*Math.PI/2,o.position.set(Math.sin(r*Math.PI/2)*3.4,0,Math.cos(r*Math.PI/2)*3.4),kn.add(o)}kn.renderOrder=5,kn.traverse(r=>r.renderOrder=5)}kn.visible=!1,Lt.add(kn),T.artyC=new Tn;for(let t of De.ammo||[]){let n=new Jn(new Wn({map:gS(),depthWrite:!1,transparent:!0}));n.scale.setScalar(1.3),n.position.set(t.x,2.6,t.z),Lt.add(n),xd.push({p:t,s:n,got:!1})}Vm(Qn,t=>{if(t.x<De.bounds[0]+1||t.x>De.bounds[2]-1||t.z<De.bounds[1]+1||t.z>De.bounds[3]-1)return!1;for(let n of Qn)if(t.x>n.min.x-.3&&t.x<n.max.x+.3&&t.z>n.min.z-.3&&t.z<n.max.z+.3&&n.max.y>.5&&n.min.y<2)return!1;return!0})}var la=null;function gS(){if(la)return la;let s=document.createElement("canvas");s.width=s.height=128;let e=s.getContext("2d"),t=e.createRadialGradient(64,64,8,64,64,62);return t.addColorStop(0,"rgba(255,230,120,.95)"),t.addColorStop(.55,"rgba(255,180,40,.45)"),t.addColorStop(1,"rgba(255,160,0,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),e.fillStyle="#3a2a10",e.font="bold 56px Arial",e.textAlign="center",e.textBaseline="middle",e.fillText("+",64,66),la=new vi(s),la.colorSpace=wt,la}async function R0(){let s=[];Lt.traverse(t=>{!t.visible&&!t.isLight&&(s.push(t),t.visible=!0)});let e=Nm();Lt.add(e);try{let t=zt.compileAsync(Lt,st);for(let n of s)n.visible=!1;await Promise.race([t,new Promise(n=>setTimeout(n,8e3))])}catch(t){console.warn("warmup",t)}Lt.remove(e);for(let t of s)t.visible=!1}async function Ic(s){ct("menu",!1),ct("mis",!1),ct("res",!1),ct("load",!0),he("ltxt").textContent="D\xF6y\xFC\u015F meydan\u0131 haz\u0131rlan\u0131r\u2026",he("lbar").firstElementChild.style.width="60%",await new Promise(n=>setTimeout(n,30)),Gt.init(),Sd(s),T.order="follow",T.wave=-1,T.clock=0,T.kills=0,T.coinsRun=0,T.easy=1,T.dmgMul=.5,T.god=Ac,T.ending=0,T.dying=0,T.capT=0,T.arty=1,T.artyT=0,T.artyMode=!1,T.time=0,je=T.player=oS(),Le.yaw=De.start.yaw+Math.PI,Le.pitch=-.12;let e=De.start,t=[Math.sin(e.yaw),Math.cos(e.yaw)];for(let n=0;n<3;n++)w0(n,e.x+(n-1)*2.6-t[0]*2.5,e.z+2.5-t[1]*2.5+(n===1?1.5:0));si=new oa("blue",De.tank.x,De.tank.z,De.tank.yaw,{driver:"none",tint:_t.own.desert?13150312:0}),si.driver=null,ct("bossb",!1),ct("capb",!1),st.position.set(e.x,20,e.z+20),st.lookAt(e.x,0,e.z-20),he("lbar").firstElementChild.style.width="90%",await R0(),ct("load",!1),ct("hud",!0),rn&&ct("mob",!1),he("coins").textContent=_t.coins,A0(0),T.mode="intro",T.introT=0,Gt.startMusic(),Gt.music.intensity=.5,Zs(rn?"Toxun \u2014 ke\xE7":"Bo\u015Fluq \u2014 ke\xE7",2.5),rn&&!T.mobSetup&&(T.mobSetup=!0,rS())}function xS(){T.mode="play",he("hint").style.opacity=0,rn&&ct("mob",!0),rn||yd(),Gt.music.intensity=1,Zs(rn?"Sol: h\u0259r\u0259k\u0259t \xB7 Sa\u011F: ni\u015Fan \xB7 AT\u018F\u015E":"WASD: h\u0259r\u0259k\u0259t \xB7 Si\xE7an: ni\u015Fan \xB7 Sol d\xFCym\u0259: at\u0259\u015F \xB7 G: qumbara",4)}function yS(s){T.introT+=s;let e=3.4,t=Math.min(1,T.introT/e),n=De.start,i=t*t*(3-2*t);st.position.set(n.x+9*(1-i)+1.2*i,21-17.4*i,n.z+3.5+.5*i),st.lookAt(n.x,1.5*i,n.z-34+14*i),T.introT>e&&xS()}function g0(s){if(T.mode==="result")return;T.mode="result";try{document.exitPointerLock&&document.exitPointerLock()}catch{}ct("hud",!1),ct("mob",!1),T.engine&&(T.engine.stop(),T.engine=null);let e=ha.id,t=0,n=[s,s&&T.time<De.par,s&&je.dmgTaken<220];t=n.filter(Boolean).length;let i=s?100*t:0,r=T.coinsRun+i;_t.coins+=r,s&&(_t.stars[e]=Math.max(_t.stars[e]||0,t)),gd(),he("rtitle").textContent=s?"M\u0130SS\u0130YA TAMAMLANDI":"M\u0130SS\u0130YA U\u011EURSUZ",he("rtitle").className=s?"w":"l",he("rstars").innerHTML=[0,1,2].map(l=>`<b class="${n[l]?"on":""}" style="animation-delay:${.2+l*.25}s">\u2605</b>`).join("");let o=Math.floor(T.time/60),a=Math.floor(T.time%60);if(he("rstats").innerHTML=`<div><span>Q\u0259l\u0259b\u0259</span><b>${s?"\u2714":"\u2716"}</b></div><div><span>Vaxt ${o}:${String(a).padStart(2,"0")} (h\u0259d\u0259f ${Math.floor(De.par/60)}:00)</span><b>${n[1]?"\u2714":"\u2716"}</b></div><div><span>Az z\u0259d\u0259 (${Math.round(je.dmgTaken)} / 220)</span><b>${n[2]?"\u2714":"\u2716"}</b></div><div><span>M\u0259hv edil\u0259n d\xFC\u015Fm\u0259n</span><b>${T.kills}</b></div><div class="c"><span>Qazan\u0131lan sikk\u0259</span><b>+${r} \u25C9</b></div>`,he("bnext").style.display=s&&fa.find(l=>l.id===e+1)?"":"none",ct("res",!0),Gt.music.intensity=.3,s)for(let l=0;l<t;l++)setTimeout(()=>Ce("star",.6,1+l*.15),300+l*250);T.lastResult={won:s,stars:t,earned:r,id:e}}function eo(s){if(s&&T.mode==="play"){T.mode="pause",ct("pause",!0),It.l=It.r=!1;try{document.exitPointerLock&&document.exitPointerLock()}catch{}}else!s&&T.mode==="pause"&&(T.mode="play",ct("pause",!1),rn||yd())}var C0=()=>{let s="S\u0259s: "+(Gt.muted?"S\xF6n\xFCl\xFC":"A\xE7\u0131q");he("bsnd").textContent=s,he("bpsnd").textContent=s};he("bsnd").onclick=he("bpsnd").onclick=()=>{Gt.init(),Gt.setMuted(!Gt.muted),C0()};he("bplay").onclick=()=>{Gt.init(),Ce("ui",.5),_S(),ct("menu",!1),ct("mis",!0)};he("bshop").onclick=()=>{Ce("ui",.5),P0(),ct("menu",!1),ct("shop",!0)};he("bdaily").onclick=()=>{Ce("ui",.5),bd(),ct("menu",!1),ct("dly",!0)};for(let s of document.querySelectorAll(".back"))s.onclick=()=>{Ce("ui",.5),Lc()};he("bres").onclick=()=>eo(!1);he("bquit").onclick=()=>{ct("pause",!1),T.mode="result",Lc()};he("bretry").onclick=()=>Ic(T.lastResult.id);he("bmenu").onclick=Lc;he("bnext").onclick=()=>Ic(T.lastResult.id+1);he("bclaim").onclick=()=>{let s=Rc();s&&(_t.coins+=dd[s.day],_t.daily={last:pd(),day:s.day},gd(),Ce("star",.7),bd(),Dc())};function Lc(){T.mode="menu";for(let s of["res","mis","shop","dly","pause","hud","mob"])ct(s,!1);ct("menu",!0),Gt.stopMusic&&Gt.stopMusic(),Dc(),Sd(1)}function Dc(){he("mcoins").textContent=_t.coins,he("mstar").textContent=QM()+" / "+fa.length*3,he("bdaily").classList.toggle("glow",!!Rc())}function _S(){he("mlist").innerHTML="";for(let s of fa){let e=_t.stars[s.id]||0,t=jM(s.id),n=document.createElement("div");n.className="card"+(t?"":" lock"),n.style.setProperty("--c",s.col),n.innerHTML=`<div class="num">${s.id}</div><h3>${s.n}</h3><p>${s.d}</p><div class="st">${[0,1,2].map(i=>`<b class="${i<e?"on":""}">\u2605</b>`).join("")}</div><button class="btn">${t?"BA\u015ELA":"\u{1F512} \u018Fvv\u0259lki missiyan\u0131 ke\xE7"}</button>`,t&&(n.querySelector("button").onclick=()=>{Ce("ui",.6),Ic(s.id)}),he("mlist").appendChild(n)}}function P0(){he("scoins").textContent=_t.coins,he("slist").innerHTML="";for(let s of JM){let e=!!_t.own[s.id],t=document.createElement("div");t.className="card item"+(e?" own":""),t.innerHTML=`<div class="ic">${s.ic}</div><h3>${s.n}</h3><p>${s.d}</p><button class="btn">${e?"ALINIB \u2714":s.c+" \u25C9"}</button>`;let n=t.querySelector("button");e||(n.onclick=()=>{if(_t.coins<s.c){Ce("click",.6),n.textContent="Sikk\u0259 \xE7atm\u0131r",setTimeout(()=>n.textContent=s.c+" \u25C9",900);return}_t.coins-=s.c,_t.own[s.id]=!0,gd(),Ce("pickup",.7),P0(),Dc()}),he("slist").appendChild(t)}}function bd(){let s=Rc(),e=s?s.day:_t.daily.day;he("dlist").innerHTML=dd.map((t,n)=>`<div class="dd ${s?n<e?"got":n===e?"now":"":n<=e?"got":""}"><small>G\xFCn ${n+1}</small><b>${t}</b><span>\u25C9</span></div>`).join(""),he("bclaim").disabled=!s,he("bclaim").textContent=s?dd[s.day]+" \u25C9 G\xD6T\xDCR":"Sabah yen\u0259 g\u0259l!",he("dcoins").textContent=_t.coins}function vS(s){let e=je,t=T.inTank,n=t?t.hp/t.maxHp:e.hp/e.maxHp;he("hpb").firstElementChild.style.width=Math.max(0,n*100)+"%",he("hpb").classList.toggle("low",n<.3),he("hpl").textContent=t?"TANK":"CAN",he("ammo").innerHTML=t?t.cd>0?"<small>dolur\u2026</small>":"TOP <small>haz\u0131r</small>":e.relT>0?"<small>doldurulur\u2026</small>":e.mag+"<small> / "+e.res+"</small>",he("nades").textContent="\u25CF "+e.nades;let i=he("arty");i.textContent="\u2708 "+T.arty,i.style.setProperty("--k",T.arty>=2?1:T.artyT/30);let r=Math.floor(T.time/60),o=Math.floor(T.time%60);he("time").textContent=r+":"+String(o).padStart(2,"0"),l0((vd()?7:0)+(e.moving>1?5:0)+(wc()?-3:0)),he("xh").style.display=T.artyMode?"none":"",ct("artyui",!!T.artyMode);let a=null,l=De.waves[T.wave];if(l&&l.capture)a=bn.copy(De.flagPos).setY(4);else if(l&&l.boss&&T.boss&&T.boss.alive)a=bn.copy(T.boss.pos).setY(7);else{let h=0;bn.set(0,0,0);for(let u of T.actors)u.alive&&u.team==="red"&&(bn.add(u.pos),h++);h&&(bn.divideScalar(h).setY(2),a=bn)}let c=he("om");if(a&&!T.artyMode){let h=Math.hypot(a.x-e.pos.x,a.z-e.pos.z),u=a.clone().project(st),f=u.x,d=u.y;u.z>1&&(f=-f,d=-1);let g=Math.max(Math.abs(f),Math.abs(d));g>.9&&(f*=.9/g,d*=.9/g),c.style.display="",c.style.transform=`translate(${(f*.5+.5)*innerWidth}px,${(-d*.5+.5)*innerHeight}px)`,c.lastChild.textContent=Math.round(h)+"m"}else c.style.display="none";(T.hudT=(T.hudT||0)-s)<=0&&(T.hudT=.5,Pc()),c0(s,t?1:n)}function MS(s){let e=rn?.0042:.0024*(wc()?.6:1),t=je;if(T.artyMode){T.artyC.x+=(It.dx*Math.cos(Le.yaw)+It.dy*-Math.sin(Le.yaw))*.09,T.artyC.z+=(It.dx*-Math.sin(Le.yaw)+It.dy*-Math.cos(Le.yaw))*.09;let m=_d();T.artyC.x+=(m.x*Math.cos(Le.yaw)+m.y*-Math.sin(Le.yaw))*28*s,T.artyC.z+=(m.x*-Math.sin(Le.yaw)+m.y*-Math.cos(Le.yaw))*28*s,It.dx=It.dy=0;let v=De.bounds;T.artyC.x=bs(T.artyC.x,v[0],v[2]),T.artyC.z=bs(T.artyC.z,v[1],v[3]);let y=Math.hypot(T.artyC.x-t.pos.x,T.artyC.z-t.pos.z);y>75&&(T.artyC.x=t.pos.x+(T.artyC.x-t.pos.x)*75/y,T.artyC.z=t.pos.z+(T.artyC.z-t.pos.z)*75/y),kn.position.set(T.artyC.x,.15,T.artyC.z),kn.rotation.y+=s;let M=1+Math.sin(T.clock*6)*.04;kn.scale.set(M,1,M);let P=bn.set(T.artyC.x+Math.sin(Le.yaw)*22,52,T.artyC.z+Math.cos(Le.yaw)*22);st.position.lerp(P,Math.min(1,s*6)),st.lookAt(T.artyC.x,0,T.artyC.z),st.fov+=(55-st.fov)*Math.min(1,s*6),st.updateProjectionMatrix();return}Le.yaw-=It.dx*e,Le.pitch=bs(Le.pitch-It.dy*e,-1.1,.75),It.dx=It.dy=0;let n=T.inTank,i=wc()&&!n,r=n?bn.set(n.pos.x,n.height+.9,n.pos.z):bn.set(t.pos.x,(t.crouch?1.2:1.62)+(t.alive?0:-.8),t.pos.z),o=n?10:i?2.1:3.6,a=n?0:i?.62:.78,l=n?1.6:.22;Le.back+=(o-Le.back)*Math.min(1,s*10);let c=Cc(da),h=ua(Js),u=r.clone().addScaledVector(c,-Le.back).addScaledVector(h,a);u.y+=l;let f=u.clone().sub(r),d=f.length();f.divideScalar(d),n&&(n.open=!0);let g=Hi(r,f,d+.3,{skipGlass:!0});n&&(n.open=!1),g&&g.t<d+.3&&u.copy(r).addScaledVector(f,Math.max(.3,g.t-.35)),u.y<.3&&(u.y=.3),st.position.copy(u);let x=(n?64:i?48:eS())+(t.moving>7?4:0);if(Le.fov+=(x-Le.fov)*Math.min(1,s*10),Math.abs(st.fov-Le.fov)>.01&&(st.fov=Le.fov,st.updateProjectionMatrix()),st.lookAt(u.x+c.x*10,u.y+c.y*10,u.z+c.z*10),T.shake>0){let p=T.shake*.12;st.position.x+=Ve(-p,p),st.position.y+=Ve(-p,p),st.rotation.z+=Ve(-p,p)*.3,T.shake=Math.max(0,T.shake-s*2.4)}T.camYaw=Le.yaw}var x0=0;function SS(s){if((x0-=s)>0)return;x0=.5;let e=De.waves[T.wave],t=T.actors.find(n=>n.alive&&n.team==="red"&&!(n.isBoss&&n.state==="sleep"&&!1));if(t){t.damage(99999,je,null,!1,!0);return}e&&e.capture&&je.pos.set(De.flagPos.x+1,0,De.flagPos.z+1)}function bS(s){let e=je;if(T.inTank)return;let t=null,n=50;for(let o of T.actors)if(o.alive&&o.team==="red"){let a=o.pos.distanceTo(e.pos);a<n&&ei(bn.set(e.pos.x,1.6,e.pos.z),da.set(o.pos.x,o.isBoss?4:1.2,o.pos.z))&&(n=a,t=o)}let i=De.waves[T.wave],r=i&&i.capture?De.flagPos:null;if(!r){let o=null,a=1e9;for(let l of T.actors)if(l.alive&&l.team==="red"){let c=l.pos.distanceTo(e.pos);c<a&&(a=c,o=l)}r=o?o.pos:null}if(gt.mx=gt.my=0,gt.fire=!1,t){let o=Math.atan2(-(t.pos.x-e.pos.x),-(t.pos.z-e.pos.z));Le.yaw+=_c(o-Le.yaw)*Math.min(1,s*8);let a=(t.isBoss?4:1.1)-1.6;Le.pitch+=(Math.atan2(a,n)-Le.pitch)*Math.min(1,s*6),gt.fire=Math.abs(_c(o-Le.yaw))<.15,n>22&&(gt.my=-.7)}else if(r){let o=Math.atan2(-(r.x-e.pos.x),-(r.z-e.pos.z));Le.yaw+=_c(o-Le.yaw)*Math.min(1,s*3),Le.pitch+=(-.1-Le.pitch)*s*3,r.distanceTo(e.pos)>2&&(gt.my=-1)}}function TS(){for(let s of T.noises)if(s.team!=="red"){for(let e of T.units)if(e.alive&&e.team==="red"){let t=e.pos.x-s.p.x,n=e.pos.z-s.p.z;t*t+n*n<s.r*s.r&&e.hear(s.p)}}T.noises.length=0}var y0=performance.now(),hd=0;function Mc(s){requestAnimationFrame(Mc);let e=Math.min(.05,(s-y0)/1e3);y0=s,hd++;try{wS(e)}catch(n){console.error(n)}nS((s-(Mc.p||s))/1e3),Mc.p=s,zt.shadowMap.enabled&&Ke.halfSh&&(zt.shadowMap.needsUpdate=(hd&1)===0);let t=T.mode==="menu"||T.mode==="result"||T.mode==="pause";gi&&(gi.enabled=Ke.lvl===2&&!t),!(t&&hd&1)&&(Sn?Sn.render():zt.render(Lt,st))}function wS(s){let e=T.mode;if(!(e==="load"||!De)){if(De.grassMat&&De.grassMat.userData.sh&&(De.grassMat.userData.sh.uniforms.uT.value=performance.now()/1e3),De.waterMat&&De.waterMat.map&&(De.waterMat.map.offset.y-=s*.03),jr){let t=jr.userData.cloth;t.rotation.y=Math.sin(performance.now()/300)*.18,jr.userData.ring.material.opacity=.35+Math.sin(performance.now()/200)*.2}if(e==="menu"||e==="result"){let t=performance.now()/9e3;st.position.set(Math.sin(t)*40,20,Math.cos(t)*46),st.lookAt(0,2,0),st.fov!==60&&(st.fov=60,st.updateProjectionMatrix()),ud(bn.set(0,0,0)),tc(s,st);return}if(e!=="pause"){if(T.clock+=s,e==="intro"){yS(s);for(let t of T.units)t.update(s,T);for(let t of T.tanks)t.update(s,T);Cf(s),tc(s,st),Rf(s),ud(je.pos);return}T.time+=s,T.easy=bs(1-(T.time-28)/10,0,1),T.dmgMul=.5+.45*(1-T.easy),T.arty<2&&(T.artyT+=s,T.artyT>=30&&(T.artyT=0,T.arty++,$s("Artilleriya haz\u0131rd\u0131r (Q)","nade"),Ce("beep",.5,1.3))),Ac&&SS(s),md&&bS(s),MS(s),hS(s);for(let t of T.units)t.update(s,T);for(let t=T.units.length-1;t>=0;t--)T.units[t].removed&&T.units.splice(t,1);for(let t=T.actors.length-1;t>=0;t--){let n=T.actors[t];!n.alive&&n.removed&&n!==je&&T.actors.splice(t,1)}for(let t of T.tanks)t.update(s,T);T.boss&&T.boss.update(s,T),TS(),Cf(s),tc(s,st),Rf(s),js.intensity=Math.max(0,js.intensity-s*400),dS(s),ud(je.pos),vS(s),T.ending>0&&(T.ending-=s,T.ending<=0&&g0(!0)),T.dying>0&&(T.dying-=s,T.dying<=0&&g0(!1)),window.__ts.fps=Ke.fps}}}function ud(s){ii.position.set(s.x+yc.x*80,yc.y*80,s.z+yc.z*80),ii.target.position.set(s.x,0,s.z),ii.target.updateMatrixWorld()}window.__ts={get mode(){return T.mode},get wave(){return T.wave},get alive(){return E0()},get coins(){return _t.coins},get result(){return T.lastResult},get mission(){return ha&&ha.id},start:Ic,menu:Lc,save:()=>_t,fps:0};(async function(){ct("load",!0),he("ltxt").textContent="Oyuncaqlar y\xFCkl\u0259nir\u2026",await e0(t=>{he("lbar").firstElementChild.style.width=Math.round(t*100)+"%"});for(let t of["blue_tank","red_tank"])Wt[t]&&t0(t);Sd(1),T.mode="menu",await R0(),ct("load",!1),ct("menu",!0),Dc(),C0(),Rc()&&!Ac&&!md&&(bd(),ct("menu",!1),ct("dly",!0)),requestAnimationFrame(Mc)})();window.__pause=()=>eo(!0);})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
