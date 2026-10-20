import{r as be,j as _i}from"./index-BmXXyZHJ.js";function Ce(t){let e=t[0],i=t[1],s=t[2];return Math.sqrt(e*e+i*i+s*s)}function ft(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}function Ri(t,e,i,s){return t[0]=e,t[1]=i,t[2]=s,t}function Ut(t,e,i){return t[0]=e[0]+i[0],t[1]=e[1]+i[1],t[2]=e[2]+i[2],t}function Gt(t,e,i){return t[0]=e[0]-i[0],t[1]=e[1]-i[1],t[2]=e[2]-i[2],t}function Ai(t,e,i){return t[0]=e[0]*i[0],t[1]=e[1]*i[1],t[2]=e[2]*i[2],t}function Fi(t,e,i){return t[0]=e[0]/i[0],t[1]=e[1]/i[1],t[2]=e[2]/i[2],t}function rt(t,e,i){return t[0]=e[0]*i,t[1]=e[1]*i,t[2]=e[2]*i,t}function Si(t,e){let i=e[0]-t[0],s=e[1]-t[1],r=e[2]-t[2];return Math.sqrt(i*i+s*s+r*r)}function Ci(t,e){let i=e[0]-t[0],s=e[1]-t[1],r=e[2]-t[2];return i*i+s*s+r*r}function qt(t){let e=t[0],i=t[1],s=t[2];return e*e+i*i+s*s}function Di(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t}function zi(t,e){return t[0]=1/e[0],t[1]=1/e[1],t[2]=1/e[2],t}function ut(t,e){let i=e[0],s=e[1],r=e[2],n=i*i+s*s+r*r;return n>0&&(n=1/Math.sqrt(n)),t[0]=e[0]*n,t[1]=e[1]*n,t[2]=e[2]*n,t}function hi(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]}function Ht(t,e,i){let s=e[0],r=e[1],n=e[2],a=i[0],l=i[1],h=i[2];return t[0]=r*h-n*l,t[1]=n*a-s*h,t[2]=s*l-r*a,t}function Pi(t,e,i,s){let r=e[0],n=e[1],a=e[2];return t[0]=r+s*(i[0]-r),t[1]=n+s*(i[1]-n),t[2]=a+s*(i[2]-a),t}function Li(t,e,i,s,r){const n=Math.exp(-s*r);let a=e[0],l=e[1],h=e[2];return t[0]=i[0]+(a-i[0])*n,t[1]=i[1]+(l-i[1])*n,t[2]=i[2]+(h-i[2])*n,t}function ki(t,e,i){let s=e[0],r=e[1],n=e[2],a=i[3]*s+i[7]*r+i[11]*n+i[15];return a=a||1,t[0]=(i[0]*s+i[4]*r+i[8]*n+i[12])/a,t[1]=(i[1]*s+i[5]*r+i[9]*n+i[13])/a,t[2]=(i[2]*s+i[6]*r+i[10]*n+i[14])/a,t}function Bi(t,e,i){let s=e[0],r=e[1],n=e[2],a=i[3]*s+i[7]*r+i[11]*n+i[15];return a=a||1,t[0]=(i[0]*s+i[4]*r+i[8]*n)/a,t[1]=(i[1]*s+i[5]*r+i[9]*n)/a,t[2]=(i[2]*s+i[6]*r+i[10]*n)/a,t}function Ii(t,e,i){let s=e[0],r=e[1],n=e[2];return t[0]=s*i[0]+r*i[3]+n*i[6],t[1]=s*i[1]+r*i[4]+n*i[7],t[2]=s*i[2]+r*i[5]+n*i[8],t}function Ni(t,e,i){let s=e[0],r=e[1],n=e[2],a=i[0],l=i[1],h=i[2],o=i[3],c=l*n-h*r,f=h*s-a*n,u=a*r-l*s,d=l*u-h*f,p=h*c-a*u,g=a*f-l*c,m=o*2;return c*=m,f*=m,u*=m,d*=2,p*=2,g*=2,t[0]=s+c+d,t[1]=r+f+p,t[2]=n+u+g,t}const Oi=(function(){const t=[0,0,0],e=[0,0,0];return function(i,s){ft(t,i),ft(e,s),ut(t,t),ut(e,e);let r=hi(t,e);return r>1?0:r<-1?Math.PI:Math.acos(r)}})();function Ui(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]}class ee extends Array{constructor(e=0,i=e,s=e){return super(e,i,s),this}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}set x(e){this[0]=e}set y(e){this[1]=e}set z(e){this[2]=e}set(e,i=e,s=e){return e.length?this.copy(e):(Ri(this,e,i,s),this)}copy(e){return ft(this,e),this}add(e,i){return i?Ut(this,e,i):Ut(this,this,e),this}sub(e,i){return i?Gt(this,e,i):Gt(this,this,e),this}multiply(e){return e.length?Ai(this,this,e):rt(this,this,e),this}divide(e){return e.length?Fi(this,this,e):rt(this,this,1/e),this}inverse(e=this){return zi(this,e),this}len(){return Ce(this)}distance(e){return e?Si(this,e):Ce(this)}squaredLen(){return qt(this)}squaredDistance(e){return e?Ci(this,e):qt(this)}negate(e=this){return Di(this,e),this}cross(e,i){return i?Ht(this,e,i):Ht(this,this,e),this}scale(e){return rt(this,this,e),this}normalize(){return ut(this,this),this}dot(e){return hi(this,e)}equals(e){return Ui(this,e)}applyMatrix3(e){return Ii(this,this,e),this}applyMatrix4(e){return ki(this,this,e),this}scaleRotateMatrix4(e){return Bi(this,this,e),this}applyQuaternion(e){return Ni(this,this,e),this}angle(e){return Oi(this,e)}lerp(e,i){return Pi(this,this,e,i),this}smoothLerp(e,i,s){return Li(this,this,e,i,s),this}clone(){return new ee(this[0],this[1],this[2])}fromArray(e,i=0){return this[0]=e[i],this[1]=e[i+1],this[2]=e[i+2],this}toArray(e=[],i=0){return e[i]=this[0],e[i+1]=this[1],e[i+2]=this[2],e}transformDirection(e){const i=this[0],s=this[1],r=this[2];return this[0]=e[0]*i+e[4]*s+e[8]*r,this[1]=e[1]*i+e[5]*s+e[9]*r,this[2]=e[2]*i+e[6]*s+e[10]*r,this.normalize()}}const Xt=new ee;let Gi=1,qi=1,Vt=!1;class oi{constructor(e,i={}){e.canvas||console.error("gl not passed as first argument to Geometry"),this.gl=e,this.attributes=i,this.id=Gi++,this.VAOs={},this.drawRange={start:0,count:0},this.instancedCount=0,this.gl.renderer.bindVertexArray(null),this.gl.renderer.currentGeometry=null,this.glState=this.gl.renderer.state;for(let s in i)this.addAttribute(s,i[s])}addAttribute(e,i){if(this.attributes[e]=i,i.id=qi++,i.size=i.size||1,i.type=i.type||(i.data.constructor===Float32Array?this.gl.FLOAT:i.data.constructor===Uint16Array?this.gl.UNSIGNED_SHORT:this.gl.UNSIGNED_INT),i.target=e==="index"?this.gl.ELEMENT_ARRAY_BUFFER:this.gl.ARRAY_BUFFER,i.normalized=i.normalized||!1,i.stride=i.stride||0,i.offset=i.offset||0,i.count=i.count||(i.stride?i.data.byteLength/i.stride:i.data.length/i.size),i.divisor=i.instanced||0,i.needsUpdate=!1,i.usage=i.usage||this.gl.STATIC_DRAW,i.buffer||this.updateAttribute(i),i.divisor){if(this.isInstanced=!0,this.instancedCount&&this.instancedCount!==i.count*i.divisor)return console.warn("geometry has multiple instanced buffers of different length"),this.instancedCount=Math.min(this.instancedCount,i.count*i.divisor);this.instancedCount=i.count*i.divisor}else e==="index"?this.drawRange.count=i.count:this.attributes.index||(this.drawRange.count=Math.max(this.drawRange.count,i.count))}updateAttribute(e){const i=!e.buffer;i&&(e.buffer=this.gl.createBuffer()),this.glState.boundBuffer!==e.buffer&&(this.gl.bindBuffer(e.target,e.buffer),this.glState.boundBuffer=e.buffer),i?this.gl.bufferData(e.target,e.data,e.usage):this.gl.bufferSubData(e.target,0,e.data),e.needsUpdate=!1}setIndex(e){this.addAttribute("index",e)}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}setInstancedCount(e){this.instancedCount=e}createVAO(e){this.VAOs[e.attributeOrder]=this.gl.renderer.createVertexArray(),this.gl.renderer.bindVertexArray(this.VAOs[e.attributeOrder]),this.bindAttributes(e)}bindAttributes(e){e.attributeLocations.forEach((i,{name:s,type:r})=>{if(!this.attributes[s]){console.warn(`active attribute ${s} not being supplied`);return}const n=this.attributes[s];this.gl.bindBuffer(n.target,n.buffer),this.glState.boundBuffer=n.buffer;let a=1;r===35674&&(a=2),r===35675&&(a=3),r===35676&&(a=4);const l=n.size/a,h=a===1?0:a*a*4,o=a===1?0:a*4;for(let c=0;c<a;c++)this.gl.vertexAttribPointer(i+c,l,n.type,n.normalized,n.stride+h,n.offset+c*o),this.gl.enableVertexAttribArray(i+c),this.gl.renderer.vertexAttribDivisor(i+c,n.divisor)}),this.attributes.index&&this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.attributes.index.buffer)}draw({program:e,mode:i=this.gl.TRIANGLES}){this.gl.renderer.currentGeometry!==`${this.id}_${e.attributeOrder}`&&(this.VAOs[e.attributeOrder]||this.createVAO(e),this.gl.renderer.bindVertexArray(this.VAOs[e.attributeOrder]),this.gl.renderer.currentGeometry=`${this.id}_${e.attributeOrder}`),e.attributeLocations.forEach((r,{name:n})=>{const a=this.attributes[n];a.needsUpdate&&this.updateAttribute(a)});let s=2;this.attributes.index?.type===this.gl.UNSIGNED_INT&&(s=4),this.isInstanced?this.attributes.index?this.gl.renderer.drawElementsInstanced(i,this.drawRange.count,this.attributes.index.type,this.attributes.index.offset+this.drawRange.start*s,this.instancedCount):this.gl.renderer.drawArraysInstanced(i,this.drawRange.start,this.drawRange.count,this.instancedCount):this.attributes.index?this.gl.drawElements(i,this.drawRange.count,this.attributes.index.type,this.attributes.index.offset+this.drawRange.start*s):this.gl.drawArrays(i,this.drawRange.start,this.drawRange.count)}getPosition(){const e=this.attributes.position;if(e.data)return e;if(!Vt)return console.warn("No position buffer data found to compute bounds"),Vt=!0}computeBoundingBox(e){e||(e=this.getPosition());const i=e.data,s=e.size;this.bounds||(this.bounds={min:new ee,max:new ee,center:new ee,scale:new ee,radius:1/0});const r=this.bounds.min,n=this.bounds.max,a=this.bounds.center,l=this.bounds.scale;r.set(1/0),n.set(-1/0);for(let h=0,o=i.length;h<o;h+=s){const c=i[h],f=i[h+1],u=i[h+2];r.x=Math.min(c,r.x),r.y=Math.min(f,r.y),r.z=Math.min(u,r.z),n.x=Math.max(c,n.x),n.y=Math.max(f,n.y),n.z=Math.max(u,n.z)}l.sub(n,r),a.add(r,n).divide(2)}computeBoundingSphere(e){e||(e=this.getPosition());const i=e.data,s=e.size;this.bounds||this.computeBoundingBox(e);let r=0;for(let n=0,a=i.length;n<a;n+=s)Xt.fromArray(i,n),r=Math.max(r,this.bounds.center.squaredDistance(Xt));this.bounds.radius=Math.sqrt(r)}remove(){for(let e in this.VAOs)this.gl.renderer.deleteVertexArray(this.VAOs[e]),delete this.VAOs[e];for(let e in this.attributes)this.gl.deleteBuffer(this.attributes[e].buffer),delete this.attributes[e]}}let Hi=1;const Wt={};class Ne{constructor(e,{vertex:i,fragment:s,uniforms:r={},transparent:n=!1,cullFace:a=e.BACK,frontFace:l=e.CCW,depthTest:h=!0,depthWrite:o=!0,depthFunc:c=e.LEQUAL}={}){e.canvas||console.error("gl not passed as first argument to Program"),this.gl=e,this.uniforms=r,this.id=Hi++,i||console.warn("vertex shader not supplied"),s||console.warn("fragment shader not supplied"),this.transparent=n,this.cullFace=a,this.frontFace=l,this.depthTest=h,this.depthWrite=o,this.depthFunc=c,this.blendFunc={},this.blendEquation={},this.stencilFunc={},this.stencilOp={},this.transparent&&!this.blendFunc.src&&(this.gl.renderer.premultipliedAlpha?this.setBlendFunc(this.gl.ONE,this.gl.ONE_MINUS_SRC_ALPHA):this.setBlendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA)),this.vertexShader=e.createShader(e.VERTEX_SHADER),this.fragmentShader=e.createShader(e.FRAGMENT_SHADER),this.program=e.createProgram(),e.attachShader(this.program,this.vertexShader),e.attachShader(this.program,this.fragmentShader),this.setShaders({vertex:i,fragment:s})}setShaders({vertex:e,fragment:i}){if(e&&(this.gl.shaderSource(this.vertexShader,e),this.gl.compileShader(this.vertexShader),this.gl.getShaderInfoLog(this.vertexShader)!==""&&console.warn(`${this.gl.getShaderInfoLog(this.vertexShader)}
Vertex Shader
${$t(e)}`)),i&&(this.gl.shaderSource(this.fragmentShader,i),this.gl.compileShader(this.fragmentShader),this.gl.getShaderInfoLog(this.fragmentShader)!==""&&console.warn(`${this.gl.getShaderInfoLog(this.fragmentShader)}
Fragment Shader
${$t(i)}`)),this.gl.linkProgram(this.program),!this.gl.getProgramParameter(this.program,this.gl.LINK_STATUS))return console.warn(this.gl.getProgramInfoLog(this.program));this.uniformLocations=new Map;let s=this.gl.getProgramParameter(this.program,this.gl.ACTIVE_UNIFORMS);for(let a=0;a<s;a++){let l=this.gl.getActiveUniform(this.program,a);this.uniformLocations.set(l,this.gl.getUniformLocation(this.program,l.name));const h=l.name.match(/(\w+)/g);l.uniformName=h[0],l.nameComponents=h.slice(1)}this.attributeLocations=new Map;const r=[],n=this.gl.getProgramParameter(this.program,this.gl.ACTIVE_ATTRIBUTES);for(let a=0;a<n;a++){const l=this.gl.getActiveAttrib(this.program,a),h=this.gl.getAttribLocation(this.program,l.name);h!==-1&&(r[h]=l.name,this.attributeLocations.set(l,h))}this.attributeOrder=r.join("")}setBlendFunc(e,i,s,r){this.blendFunc.src=e,this.blendFunc.dst=i,this.blendFunc.srcAlpha=s,this.blendFunc.dstAlpha=r,e&&(this.transparent=!0)}setBlendEquation(e,i){this.blendEquation.modeRGB=e,this.blendEquation.modeAlpha=i}setStencilFunc(e,i,s){this.stencilRef=i,this.stencilFunc.func=e,this.stencilFunc.ref=i,this.stencilFunc.mask=s}setStencilOp(e,i,s){this.stencilOp.stencilFail=e,this.stencilOp.depthFail=i,this.stencilOp.depthPass=s}applyState(){this.depthTest?this.gl.renderer.enable(this.gl.DEPTH_TEST):this.gl.renderer.disable(this.gl.DEPTH_TEST),this.cullFace?this.gl.renderer.enable(this.gl.CULL_FACE):this.gl.renderer.disable(this.gl.CULL_FACE),this.blendFunc.src?this.gl.renderer.enable(this.gl.BLEND):this.gl.renderer.disable(this.gl.BLEND),this.cullFace&&this.gl.renderer.setCullFace(this.cullFace),this.gl.renderer.setFrontFace(this.frontFace),this.gl.renderer.setDepthMask(this.depthWrite),this.gl.renderer.setDepthFunc(this.depthFunc),this.blendFunc.src&&this.gl.renderer.setBlendFunc(this.blendFunc.src,this.blendFunc.dst,this.blendFunc.srcAlpha,this.blendFunc.dstAlpha),this.gl.renderer.setBlendEquation(this.blendEquation.modeRGB,this.blendEquation.modeAlpha),this.stencilFunc.func||this.stencilOp.stencilFail?this.gl.renderer.enable(this.gl.STENCIL_TEST):this.gl.renderer.disable(this.gl.STENCIL_TEST),this.gl.renderer.setStencilFunc(this.stencilFunc.func,this.stencilFunc.ref,this.stencilFunc.mask),this.gl.renderer.setStencilOp(this.stencilOp.stencilFail,this.stencilOp.depthFail,this.stencilOp.depthPass)}use({flipFaces:e=!1}={}){let i=-1;this.gl.renderer.state.currentProgram===this.id||(this.gl.useProgram(this.program),this.gl.renderer.state.currentProgram=this.id),this.uniformLocations.forEach((r,n)=>{let a=this.uniforms[n.uniformName];for(const l of n.nameComponents){if(!a)break;if(l in a)a=a[l];else{if(Array.isArray(a.value))break;a=void 0;break}}if(!a)return Yt(`Active uniform ${n.name} has not been supplied`);if(a&&a.value===void 0)return Yt(`${n.name} uniform is missing a value parameter`);if(a.value.texture)return i=i+1,a.value.update(i),nt(this.gl,n.type,r,i);if(a.value.length&&a.value[0].texture){const l=[];return a.value.forEach(h=>{i=i+1,h.update(i),l.push(i)}),nt(this.gl,n.type,r,l)}nt(this.gl,n.type,r,a.value)}),this.applyState(),e&&this.gl.renderer.setFrontFace(this.frontFace===this.gl.CCW?this.gl.CW:this.gl.CCW)}remove(){this.gl.deleteProgram(this.program)}}function nt(t,e,i,s){s=s.length?Xi(s):s;const r=t.renderer.state.uniformLocations.get(i);if(s.length)if(r===void 0||r.length!==s.length)t.renderer.state.uniformLocations.set(i,s.slice(0));else{if(Vi(r,s))return;r.set?r.set(s):Wi(r,s),t.renderer.state.uniformLocations.set(i,r)}else{if(r===s)return;t.renderer.state.uniformLocations.set(i,s)}switch(e){case 5126:return s.length?t.uniform1fv(i,s):t.uniform1f(i,s);case 35664:return t.uniform2fv(i,s);case 35665:return t.uniform3fv(i,s);case 35666:return t.uniform4fv(i,s);case 35670:case 5124:case 35678:case 36306:case 35680:case 36289:return s.length?t.uniform1iv(i,s):t.uniform1i(i,s);case 35671:case 35667:return t.uniform2iv(i,s);case 35672:case 35668:return t.uniform3iv(i,s);case 35673:case 35669:return t.uniform4iv(i,s);case 35674:return t.uniformMatrix2fv(i,!1,s);case 35675:return t.uniformMatrix3fv(i,!1,s);case 35676:return t.uniformMatrix4fv(i,!1,s)}}function $t(t){let e=t.split(`
`);for(let i=0;i<e.length;i++)e[i]=i+1+": "+e[i];return e.join(`
`)}function Xi(t){const e=t.length,i=t[0].length;if(i===void 0)return t;const s=e*i;let r=Wt[s];r||(Wt[s]=r=new Float32Array(s));for(let n=0;n<e;n++)r.set(t[n],n*i);return r}function Vi(t,e){if(t.length!==e.length)return!1;for(let i=0,s=t.length;i<s;i++)if(t[i]!==e[i])return!1;return!0}function Wi(t,e){for(let i=0,s=t.length;i<s;i++)t[i]=e[i]}let at=0;function Yt(t){at>100||(console.warn(t),at++,at>100&&console.warn("More than 100 program warnings - stopping logs."))}const lt=new ee;let $i=1;class Yi{constructor({canvas:e=document.createElement("canvas"),width:i=300,height:s=150,dpr:r=1,alpha:n=!1,depth:a=!0,stencil:l=!1,antialias:h=!1,premultipliedAlpha:o=!1,preserveDrawingBuffer:c=!1,powerPreference:f="default",autoClear:u=!0,webgl:d=2}={}){const p={alpha:n,depth:a,stencil:l,antialias:h,premultipliedAlpha:o,preserveDrawingBuffer:c,powerPreference:f};this.dpr=r,this.alpha=n,this.color=!0,this.depth=a,this.stencil=l,this.premultipliedAlpha=o,this.autoClear=u,this.id=$i++,d===2&&(this.gl=e.getContext("webgl2",p)),this.isWebgl2=!!this.gl,this.gl||(this.gl=e.getContext("webgl",p)),this.gl||console.error("unable to create webgl context"),this.gl.renderer=this,this.setSize(i,s),this.state={},this.state.blendFunc={src:this.gl.ONE,dst:this.gl.ZERO},this.state.blendEquation={modeRGB:this.gl.FUNC_ADD},this.state.cullFace=!1,this.state.frontFace=this.gl.CCW,this.state.depthMask=!0,this.state.depthFunc=this.gl.LEQUAL,this.state.premultiplyAlpha=!1,this.state.flipY=!1,this.state.unpackAlignment=4,this.state.framebuffer=null,this.state.viewport={x:0,y:0,width:null,height:null},this.state.textureUnits=[],this.state.activeTextureUnit=0,this.state.boundBuffer=null,this.state.uniformLocations=new Map,this.state.currentProgram=null,this.extensions={},this.isWebgl2?(this.getExtension("EXT_color_buffer_float"),this.getExtension("OES_texture_float_linear")):(this.getExtension("OES_texture_float"),this.getExtension("OES_texture_float_linear"),this.getExtension("OES_texture_half_float"),this.getExtension("OES_texture_half_float_linear"),this.getExtension("OES_element_index_uint"),this.getExtension("OES_standard_derivatives"),this.getExtension("EXT_sRGB"),this.getExtension("WEBGL_depth_texture"),this.getExtension("WEBGL_draw_buffers")),this.getExtension("WEBGL_compressed_texture_astc"),this.getExtension("EXT_texture_compression_bptc"),this.getExtension("WEBGL_compressed_texture_s3tc"),this.getExtension("WEBGL_compressed_texture_etc1"),this.getExtension("WEBGL_compressed_texture_pvrtc"),this.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),this.vertexAttribDivisor=this.getExtension("ANGLE_instanced_arrays","vertexAttribDivisor","vertexAttribDivisorANGLE"),this.drawArraysInstanced=this.getExtension("ANGLE_instanced_arrays","drawArraysInstanced","drawArraysInstancedANGLE"),this.drawElementsInstanced=this.getExtension("ANGLE_instanced_arrays","drawElementsInstanced","drawElementsInstancedANGLE"),this.createVertexArray=this.getExtension("OES_vertex_array_object","createVertexArray","createVertexArrayOES"),this.bindVertexArray=this.getExtension("OES_vertex_array_object","bindVertexArray","bindVertexArrayOES"),this.deleteVertexArray=this.getExtension("OES_vertex_array_object","deleteVertexArray","deleteVertexArrayOES"),this.drawBuffers=this.getExtension("WEBGL_draw_buffers","drawBuffers","drawBuffersWEBGL"),this.parameters={},this.parameters.maxTextureUnits=this.gl.getParameter(this.gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS),this.parameters.maxAnisotropy=this.getExtension("EXT_texture_filter_anisotropic")?this.gl.getParameter(this.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT):0}setSize(e,i){this.width=e,this.height=i,this.gl.canvas.width=e*this.dpr,this.gl.canvas.height=i*this.dpr,this.gl.canvas.style&&Object.assign(this.gl.canvas.style,{width:e+"px",height:i+"px"})}setViewport(e,i,s=0,r=0){this.state.viewport.width===e&&this.state.viewport.height===i||(this.state.viewport.width=e,this.state.viewport.height=i,this.state.viewport.x=s,this.state.viewport.y=r,this.gl.viewport(s,r,e,i))}setScissor(e,i,s=0,r=0){this.gl.scissor(s,r,e,i)}enable(e){this.state[e]!==!0&&(this.gl.enable(e),this.state[e]=!0)}disable(e){this.state[e]!==!1&&(this.gl.disable(e),this.state[e]=!1)}setBlendFunc(e,i,s,r){this.state.blendFunc.src===e&&this.state.blendFunc.dst===i&&this.state.blendFunc.srcAlpha===s&&this.state.blendFunc.dstAlpha===r||(this.state.blendFunc.src=e,this.state.blendFunc.dst=i,this.state.blendFunc.srcAlpha=s,this.state.blendFunc.dstAlpha=r,s!==void 0?this.gl.blendFuncSeparate(e,i,s,r):this.gl.blendFunc(e,i))}setBlendEquation(e,i){e=e||this.gl.FUNC_ADD,!(this.state.blendEquation.modeRGB===e&&this.state.blendEquation.modeAlpha===i)&&(this.state.blendEquation.modeRGB=e,this.state.blendEquation.modeAlpha=i,i!==void 0?this.gl.blendEquationSeparate(e,i):this.gl.blendEquation(e))}setCullFace(e){this.state.cullFace!==e&&(this.state.cullFace=e,this.gl.cullFace(e))}setFrontFace(e){this.state.frontFace!==e&&(this.state.frontFace=e,this.gl.frontFace(e))}setDepthMask(e){this.state.depthMask!==e&&(this.state.depthMask=e,this.gl.depthMask(e))}setDepthFunc(e){this.state.depthFunc!==e&&(this.state.depthFunc=e,this.gl.depthFunc(e))}setStencilMask(e){this.state.stencilMask!==e&&(this.state.stencilMask=e,this.gl.stencilMask(e))}setStencilFunc(e,i,s){this.state.stencilFunc===e&&this.state.stencilRef===i&&this.state.stencilFuncMask===s||(this.state.stencilFunc=e||this.gl.ALWAYS,this.state.stencilRef=i||0,this.state.stencilFuncMask=s||0,this.gl.stencilFunc(e||this.gl.ALWAYS,i||0,s||0))}setStencilOp(e,i,s){this.state.stencilFail===e&&this.state.stencilDepthFail===i&&this.state.stencilDepthPass===s||(this.state.stencilFail=e,this.state.stencilDepthFail=i,this.state.stencilDepthPass=s,this.gl.stencilOp(e,i,s))}activeTexture(e){this.state.activeTextureUnit!==e&&(this.state.activeTextureUnit=e,this.gl.activeTexture(this.gl.TEXTURE0+e))}bindFramebuffer({target:e=this.gl.FRAMEBUFFER,buffer:i=null}={}){this.state.framebuffer!==i&&(this.state.framebuffer=i,this.gl.bindFramebuffer(e,i))}getExtension(e,i,s){return i&&this.gl[i]?this.gl[i].bind(this.gl):(this.extensions[e]||(this.extensions[e]=this.gl.getExtension(e)),i?this.extensions[e]?this.extensions[e][s].bind(this.extensions[e]):null:this.extensions[e])}sortOpaque(e,i){return e.renderOrder!==i.renderOrder?e.renderOrder-i.renderOrder:e.program.id!==i.program.id?e.program.id-i.program.id:e.zDepth!==i.zDepth?e.zDepth-i.zDepth:i.id-e.id}sortTransparent(e,i){return e.renderOrder!==i.renderOrder?e.renderOrder-i.renderOrder:e.zDepth!==i.zDepth?i.zDepth-e.zDepth:i.id-e.id}sortUI(e,i){return e.renderOrder!==i.renderOrder?e.renderOrder-i.renderOrder:e.program.id!==i.program.id?e.program.id-i.program.id:i.id-e.id}getRenderList({scene:e,camera:i,frustumCull:s,sort:r}){let n=[];if(i&&s&&i.updateFrustum(),e.traverse(a=>{if(!a.visible)return!0;a.draw&&(s&&a.frustumCulled&&i&&!i.frustumIntersectsMesh(a)||n.push(a))}),r){const a=[],l=[],h=[];n.forEach(o=>{o.program.transparent?o.program.depthTest?l.push(o):h.push(o):a.push(o),o.zDepth=0,!(o.renderOrder!==0||!o.program.depthTest||!i)&&(o.worldMatrix.getTranslation(lt),lt.applyMatrix4(i.projectionViewMatrix),o.zDepth=lt.z)}),a.sort(this.sortOpaque),l.sort(this.sortTransparent),h.sort(this.sortUI),n=a.concat(l,h)}return n}render({scene:e,camera:i,target:s=null,update:r=!0,sort:n=!0,frustumCull:a=!0,clear:l}){s===null?(this.bindFramebuffer(),this.setViewport(this.width*this.dpr,this.height*this.dpr)):(this.bindFramebuffer(s),this.setViewport(s.width,s.height)),(l||this.autoClear&&l!==!1)&&(this.depth&&(!s||s.depth)&&(this.enable(this.gl.DEPTH_TEST),this.setDepthMask(!0)),(this.stencil||!s||s.stencil)&&(this.enable(this.gl.STENCIL_TEST),this.setStencilMask(255)),this.gl.clear((this.color?this.gl.COLOR_BUFFER_BIT:0)|(this.depth?this.gl.DEPTH_BUFFER_BIT:0)|(this.stencil?this.gl.STENCIL_BUFFER_BIT:0))),r&&e.updateMatrixWorld(),i&&i.updateMatrixWorld(),this.getRenderList({scene:e,camera:i,frustumCull:a,sort:n}).forEach(o=>{o.draw({camera:i})})}}function ji(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t}function Zi(t,e,i,s,r){return t[0]=e,t[1]=i,t[2]=s,t[3]=r,t}function Ki(t,e){let i=e[0],s=e[1],r=e[2],n=e[3],a=i*i+s*s+r*r+n*n;return a>0&&(a=1/Math.sqrt(a)),t[0]=i*a,t[1]=s*a,t[2]=r*a,t[3]=n*a,t}function Qi(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]+t[3]*e[3]}function Ji(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t}function es(t,e,i){i=i*.5;let s=Math.sin(i);return t[0]=s*e[0],t[1]=s*e[1],t[2]=s*e[2],t[3]=Math.cos(i),t}function jt(t,e,i){let s=e[0],r=e[1],n=e[2],a=e[3],l=i[0],h=i[1],o=i[2],c=i[3];return t[0]=s*c+a*l+r*o-n*h,t[1]=r*c+a*h+n*l-s*o,t[2]=n*c+a*o+s*h-r*l,t[3]=a*c-s*l-r*h-n*o,t}function ts(t,e,i){i*=.5;let s=e[0],r=e[1],n=e[2],a=e[3],l=Math.sin(i),h=Math.cos(i);return t[0]=s*h+a*l,t[1]=r*h+n*l,t[2]=n*h-r*l,t[3]=a*h-s*l,t}function is(t,e,i){i*=.5;let s=e[0],r=e[1],n=e[2],a=e[3],l=Math.sin(i),h=Math.cos(i);return t[0]=s*h-n*l,t[1]=r*h+a*l,t[2]=n*h+s*l,t[3]=a*h-r*l,t}function ss(t,e,i){i*=.5;let s=e[0],r=e[1],n=e[2],a=e[3],l=Math.sin(i),h=Math.cos(i);return t[0]=s*h+r*l,t[1]=r*h-s*l,t[2]=n*h+a*l,t[3]=a*h-n*l,t}function rs(t,e,i,s){let r=e[0],n=e[1],a=e[2],l=e[3],h=i[0],o=i[1],c=i[2],f=i[3],u,d,p,g,m;return d=r*h+n*o+a*c+l*f,d<0&&(d=-d,h=-h,o=-o,c=-c,f=-f),1-d>1e-6?(u=Math.acos(d),p=Math.sin(u),g=Math.sin((1-s)*u)/p,m=Math.sin(s*u)/p):(g=1-s,m=s),t[0]=g*r+m*h,t[1]=g*n+m*o,t[2]=g*a+m*c,t[3]=g*l+m*f,t}function ns(t,e){let i=e[0],s=e[1],r=e[2],n=e[3],a=i*i+s*s+r*r+n*n,l=a?1/a:0;return t[0]=-i*l,t[1]=-s*l,t[2]=-r*l,t[3]=n*l,t}function as(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=e[3],t}function ls(t,e){let i=e[0]+e[4]+e[8],s;if(i>0)s=Math.sqrt(i+1),t[3]=.5*s,s=.5/s,t[0]=(e[5]-e[7])*s,t[1]=(e[6]-e[2])*s,t[2]=(e[1]-e[3])*s;else{let r=0;e[4]>e[0]&&(r=1),e[8]>e[r*3+r]&&(r=2);let n=(r+1)%3,a=(r+2)%3;s=Math.sqrt(e[r*3+r]-e[n*3+n]-e[a*3+a]+1),t[r]=.5*s,s=.5/s,t[3]=(e[n*3+a]-e[a*3+n])*s,t[n]=(e[n*3+r]+e[r*3+n])*s,t[a]=(e[a*3+r]+e[r*3+a])*s}return t}function hs(t,e,i="YXZ"){let s=Math.sin(e[0]*.5),r=Math.cos(e[0]*.5),n=Math.sin(e[1]*.5),a=Math.cos(e[1]*.5),l=Math.sin(e[2]*.5),h=Math.cos(e[2]*.5);return i==="XYZ"?(t[0]=s*a*h+r*n*l,t[1]=r*n*h-s*a*l,t[2]=r*a*l+s*n*h,t[3]=r*a*h-s*n*l):i==="YXZ"?(t[0]=s*a*h+r*n*l,t[1]=r*n*h-s*a*l,t[2]=r*a*l-s*n*h,t[3]=r*a*h+s*n*l):i==="ZXY"?(t[0]=s*a*h-r*n*l,t[1]=r*n*h+s*a*l,t[2]=r*a*l+s*n*h,t[3]=r*a*h-s*n*l):i==="ZYX"?(t[0]=s*a*h-r*n*l,t[1]=r*n*h+s*a*l,t[2]=r*a*l-s*n*h,t[3]=r*a*h+s*n*l):i==="YZX"?(t[0]=s*a*h+r*n*l,t[1]=r*n*h+s*a*l,t[2]=r*a*l-s*n*h,t[3]=r*a*h-s*n*l):i==="XZY"&&(t[0]=s*a*h-r*n*l,t[1]=r*n*h-s*a*l,t[2]=r*a*l+s*n*h,t[3]=r*a*h+s*n*l),t}const os=ji,cs=Zi,fs=Qi,us=Ki;class ds extends Array{constructor(e=0,i=0,s=0,r=1){super(e,i,s,r),this.onChange=()=>{},this._target=this;const n=["0","1","2","3"];return new Proxy(this,{set(a,l){const h=Reflect.set(...arguments);return h&&n.includes(l)&&a.onChange(),h}})}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}get w(){return this[3]}set x(e){this._target[0]=e,this.onChange()}set y(e){this._target[1]=e,this.onChange()}set z(e){this._target[2]=e,this.onChange()}set w(e){this._target[3]=e,this.onChange()}identity(){return Ji(this._target),this.onChange(),this}set(e,i,s,r){return e.length?this.copy(e):(cs(this._target,e,i,s,r),this.onChange(),this)}rotateX(e){return ts(this._target,this._target,e),this.onChange(),this}rotateY(e){return is(this._target,this._target,e),this.onChange(),this}rotateZ(e){return ss(this._target,this._target,e),this.onChange(),this}inverse(e=this._target){return ns(this._target,e),this.onChange(),this}conjugate(e=this._target){return as(this._target,e),this.onChange(),this}copy(e){return os(this._target,e),this.onChange(),this}normalize(e=this._target){return us(this._target,e),this.onChange(),this}multiply(e,i){return i?jt(this._target,e,i):jt(this._target,this._target,e),this.onChange(),this}dot(e){return fs(this._target,e)}fromMatrix3(e){return ls(this._target,e),this.onChange(),this}fromEuler(e,i){return hs(this._target,e,e.order),i||this.onChange(),this}fromAxisAngle(e,i){return es(this._target,e,i),this.onChange(),this}slerp(e,i){return rs(this._target,this._target,e,i),this.onChange(),this}fromArray(e,i=0){return this._target[0]=e[i],this._target[1]=e[i+1],this._target[2]=e[i+2],this._target[3]=e[i+3],this.onChange(),this}toArray(e=[],i=0){return e[i]=this[0],e[i+1]=this[1],e[i+2]=this[2],e[i+3]=this[3],e}}const ps=1e-6;function gs(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}function ms(t,e,i,s,r,n,a,l,h,o,c,f,u,d,p,g,m){return t[0]=e,t[1]=i,t[2]=s,t[3]=r,t[4]=n,t[5]=a,t[6]=l,t[7]=h,t[8]=o,t[9]=c,t[10]=f,t[11]=u,t[12]=d,t[13]=p,t[14]=g,t[15]=m,t}function xs(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function vs(t,e){let i=e[0],s=e[1],r=e[2],n=e[3],a=e[4],l=e[5],h=e[6],o=e[7],c=e[8],f=e[9],u=e[10],d=e[11],p=e[12],g=e[13],m=e[14],x=e[15],R=i*l-s*a,w=i*h-r*a,E=i*o-n*a,T=s*h-r*l,M=s*o-n*l,D=r*o-n*h,O=c*g-f*p,I=c*m-u*p,z=c*x-d*p,L=f*m-u*g,k=f*x-d*g,A=u*x-d*m,b=R*A-w*k+E*L+T*z-M*I+D*O;return b?(b=1/b,t[0]=(l*A-h*k+o*L)*b,t[1]=(r*k-s*A-n*L)*b,t[2]=(g*D-m*M+x*T)*b,t[3]=(u*M-f*D-d*T)*b,t[4]=(h*z-a*A-o*I)*b,t[5]=(i*A-r*z+n*I)*b,t[6]=(m*E-p*D-x*w)*b,t[7]=(c*D-u*E+d*w)*b,t[8]=(a*k-l*z+o*O)*b,t[9]=(s*z-i*k-n*O)*b,t[10]=(p*M-g*E+x*R)*b,t[11]=(f*E-c*M-d*R)*b,t[12]=(l*I-a*L-h*O)*b,t[13]=(i*L-s*I+r*O)*b,t[14]=(g*w-p*T-m*R)*b,t[15]=(c*T-f*w+u*R)*b,t):null}function ci(t){let e=t[0],i=t[1],s=t[2],r=t[3],n=t[4],a=t[5],l=t[6],h=t[7],o=t[8],c=t[9],f=t[10],u=t[11],d=t[12],p=t[13],g=t[14],m=t[15],x=e*a-i*n,R=e*l-s*n,w=e*h-r*n,E=i*l-s*a,T=i*h-r*a,M=s*h-r*l,D=o*p-c*d,O=o*g-f*d,I=o*m-u*d,z=c*g-f*p,L=c*m-u*p,k=f*m-u*g;return x*k-R*L+w*z+E*I-T*O+M*D}function Zt(t,e,i){let s=e[0],r=e[1],n=e[2],a=e[3],l=e[4],h=e[5],o=e[6],c=e[7],f=e[8],u=e[9],d=e[10],p=e[11],g=e[12],m=e[13],x=e[14],R=e[15],w=i[0],E=i[1],T=i[2],M=i[3];return t[0]=w*s+E*l+T*f+M*g,t[1]=w*r+E*h+T*u+M*m,t[2]=w*n+E*o+T*d+M*x,t[3]=w*a+E*c+T*p+M*R,w=i[4],E=i[5],T=i[6],M=i[7],t[4]=w*s+E*l+T*f+M*g,t[5]=w*r+E*h+T*u+M*m,t[6]=w*n+E*o+T*d+M*x,t[7]=w*a+E*c+T*p+M*R,w=i[8],E=i[9],T=i[10],M=i[11],t[8]=w*s+E*l+T*f+M*g,t[9]=w*r+E*h+T*u+M*m,t[10]=w*n+E*o+T*d+M*x,t[11]=w*a+E*c+T*p+M*R,w=i[12],E=i[13],T=i[14],M=i[15],t[12]=w*s+E*l+T*f+M*g,t[13]=w*r+E*h+T*u+M*m,t[14]=w*n+E*o+T*d+M*x,t[15]=w*a+E*c+T*p+M*R,t}function Es(t,e,i){let s=i[0],r=i[1],n=i[2],a,l,h,o,c,f,u,d,p,g,m,x;return e===t?(t[12]=e[0]*s+e[4]*r+e[8]*n+e[12],t[13]=e[1]*s+e[5]*r+e[9]*n+e[13],t[14]=e[2]*s+e[6]*r+e[10]*n+e[14],t[15]=e[3]*s+e[7]*r+e[11]*n+e[15]):(a=e[0],l=e[1],h=e[2],o=e[3],c=e[4],f=e[5],u=e[6],d=e[7],p=e[8],g=e[9],m=e[10],x=e[11],t[0]=a,t[1]=l,t[2]=h,t[3]=o,t[4]=c,t[5]=f,t[6]=u,t[7]=d,t[8]=p,t[9]=g,t[10]=m,t[11]=x,t[12]=a*s+c*r+p*n+e[12],t[13]=l*s+f*r+g*n+e[13],t[14]=h*s+u*r+m*n+e[14],t[15]=o*s+d*r+x*n+e[15]),t}function ws(t,e,i){let s=i[0],r=i[1],n=i[2];return t[0]=e[0]*s,t[1]=e[1]*s,t[2]=e[2]*s,t[3]=e[3]*s,t[4]=e[4]*r,t[5]=e[5]*r,t[6]=e[6]*r,t[7]=e[7]*r,t[8]=e[8]*n,t[9]=e[9]*n,t[10]=e[10]*n,t[11]=e[11]*n,t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}function ys(t,e,i,s){let r=s[0],n=s[1],a=s[2],l=Math.hypot(r,n,a),h,o,c,f,u,d,p,g,m,x,R,w,E,T,M,D,O,I,z,L,k,A,b,ue;return Math.abs(l)<ps?null:(l=1/l,r*=l,n*=l,a*=l,h=Math.sin(i),o=Math.cos(i),c=1-o,f=e[0],u=e[1],d=e[2],p=e[3],g=e[4],m=e[5],x=e[6],R=e[7],w=e[8],E=e[9],T=e[10],M=e[11],D=r*r*c+o,O=n*r*c+a*h,I=a*r*c-n*h,z=r*n*c-a*h,L=n*n*c+o,k=a*n*c+r*h,A=r*a*c+n*h,b=n*a*c-r*h,ue=a*a*c+o,t[0]=f*D+g*O+w*I,t[1]=u*D+m*O+E*I,t[2]=d*D+x*O+T*I,t[3]=p*D+R*O+M*I,t[4]=f*z+g*L+w*k,t[5]=u*z+m*L+E*k,t[6]=d*z+x*L+T*k,t[7]=p*z+R*L+M*k,t[8]=f*A+g*b+w*ue,t[9]=u*A+m*b+E*ue,t[10]=d*A+x*b+T*ue,t[11]=p*A+R*b+M*ue,e!==t&&(t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t)}function Ms(t,e){return t[0]=e[12],t[1]=e[13],t[2]=e[14],t}function fi(t,e){let i=e[0],s=e[1],r=e[2],n=e[4],a=e[5],l=e[6],h=e[8],o=e[9],c=e[10];return t[0]=Math.hypot(i,s,r),t[1]=Math.hypot(n,a,l),t[2]=Math.hypot(h,o,c),t}function Ts(t){let e=t[0],i=t[1],s=t[2],r=t[4],n=t[5],a=t[6],l=t[8],h=t[9],o=t[10];const c=e*e+i*i+s*s,f=r*r+n*n+a*a,u=l*l+h*h+o*o;return Math.sqrt(Math.max(c,f,u))}const ui=(function(){const t=[1,1,1];return function(e,i){let s=t;fi(s,i);let r=1/s[0],n=1/s[1],a=1/s[2],l=i[0]*r,h=i[1]*n,o=i[2]*a,c=i[4]*r,f=i[5]*n,u=i[6]*a,d=i[8]*r,p=i[9]*n,g=i[10]*a,m=l+f+g,x=0;return m>0?(x=Math.sqrt(m+1)*2,e[3]=.25*x,e[0]=(u-p)/x,e[1]=(d-o)/x,e[2]=(h-c)/x):l>f&&l>g?(x=Math.sqrt(1+l-f-g)*2,e[3]=(u-p)/x,e[0]=.25*x,e[1]=(h+c)/x,e[2]=(d+o)/x):f>g?(x=Math.sqrt(1+f-l-g)*2,e[3]=(d-o)/x,e[0]=(h+c)/x,e[1]=.25*x,e[2]=(u+p)/x):(x=Math.sqrt(1+g-l-f)*2,e[3]=(h-c)/x,e[0]=(d+o)/x,e[1]=(u+p)/x,e[2]=.25*x),e}})();function bs(t,e,i,s){let r=Ce([t[0],t[1],t[2]]);const n=Ce([t[4],t[5],t[6]]),a=Ce([t[8],t[9],t[10]]);ci(t)<0&&(r=-r),i[0]=t[12],i[1]=t[13],i[2]=t[14];const h=t.slice(),o=1/r,c=1/n,f=1/a;h[0]*=o,h[1]*=o,h[2]*=o,h[4]*=c,h[5]*=c,h[6]*=c,h[8]*=f,h[9]*=f,h[10]*=f,ui(e,h),s[0]=r,s[1]=n,s[2]=a}function _s(t,e,i,s){const r=t,n=e[0],a=e[1],l=e[2],h=e[3],o=n+n,c=a+a,f=l+l,u=n*o,d=n*c,p=n*f,g=a*c,m=a*f,x=l*f,R=h*o,w=h*c,E=h*f,T=s[0],M=s[1],D=s[2];return r[0]=(1-(g+x))*T,r[1]=(d+E)*T,r[2]=(p-w)*T,r[3]=0,r[4]=(d-E)*M,r[5]=(1-(u+x))*M,r[6]=(m+R)*M,r[7]=0,r[8]=(p+w)*D,r[9]=(m-R)*D,r[10]=(1-(u+g))*D,r[11]=0,r[12]=i[0],r[13]=i[1],r[14]=i[2],r[15]=1,r}function Rs(t,e){let i=e[0],s=e[1],r=e[2],n=e[3],a=i+i,l=s+s,h=r+r,o=i*a,c=s*a,f=s*l,u=r*a,d=r*l,p=r*h,g=n*a,m=n*l,x=n*h;return t[0]=1-f-p,t[1]=c+x,t[2]=u-m,t[3]=0,t[4]=c-x,t[5]=1-o-p,t[6]=d+g,t[7]=0,t[8]=u+m,t[9]=d-g,t[10]=1-o-f,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function As(t,e,i,s,r){let n=1/Math.tan(e/2),a=1/(s-r);return t[0]=n/i,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=n,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=(r+s)*a,t[11]=-1,t[12]=0,t[13]=0,t[14]=2*r*s*a,t[15]=0,t}function Fs(t,e,i,s,r,n,a){let l=1/(e-i),h=1/(s-r),o=1/(n-a);return t[0]=-2*l,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*h,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*o,t[11]=0,t[12]=(e+i)*l,t[13]=(r+s)*h,t[14]=(a+n)*o,t[15]=1,t}function Ss(t,e,i,s){let r=e[0],n=e[1],a=e[2],l=s[0],h=s[1],o=s[2],c=r-i[0],f=n-i[1],u=a-i[2],d=c*c+f*f+u*u;d===0?u=1:(d=1/Math.sqrt(d),c*=d,f*=d,u*=d);let p=h*u-o*f,g=o*c-l*u,m=l*f-h*c;return d=p*p+g*g+m*m,d===0&&(o?l+=1e-6:h?o+=1e-6:h+=1e-6,p=h*u-o*f,g=o*c-l*u,m=l*f-h*c,d=p*p+g*g+m*m),d=1/Math.sqrt(d),p*=d,g*=d,m*=d,t[0]=p,t[1]=g,t[2]=m,t[3]=0,t[4]=f*m-u*g,t[5]=u*p-c*m,t[6]=c*g-f*p,t[7]=0,t[8]=c,t[9]=f,t[10]=u,t[11]=0,t[12]=r,t[13]=n,t[14]=a,t[15]=1,t}function Kt(t,e,i){return t[0]=e[0]+i[0],t[1]=e[1]+i[1],t[2]=e[2]+i[2],t[3]=e[3]+i[3],t[4]=e[4]+i[4],t[5]=e[5]+i[5],t[6]=e[6]+i[6],t[7]=e[7]+i[7],t[8]=e[8]+i[8],t[9]=e[9]+i[9],t[10]=e[10]+i[10],t[11]=e[11]+i[11],t[12]=e[12]+i[12],t[13]=e[13]+i[13],t[14]=e[14]+i[14],t[15]=e[15]+i[15],t}function Qt(t,e,i){return t[0]=e[0]-i[0],t[1]=e[1]-i[1],t[2]=e[2]-i[2],t[3]=e[3]-i[3],t[4]=e[4]-i[4],t[5]=e[5]-i[5],t[6]=e[6]-i[6],t[7]=e[7]-i[7],t[8]=e[8]-i[8],t[9]=e[9]-i[9],t[10]=e[10]-i[10],t[11]=e[11]-i[11],t[12]=e[12]-i[12],t[13]=e[13]-i[13],t[14]=e[14]-i[14],t[15]=e[15]-i[15],t}function Cs(t,e,i){return t[0]=e[0]*i,t[1]=e[1]*i,t[2]=e[2]*i,t[3]=e[3]*i,t[4]=e[4]*i,t[5]=e[5]*i,t[6]=e[6]*i,t[7]=e[7]*i,t[8]=e[8]*i,t[9]=e[9]*i,t[10]=e[10]*i,t[11]=e[11]*i,t[12]=e[12]*i,t[13]=e[13]*i,t[14]=e[14]*i,t[15]=e[15]*i,t}class Ge extends Array{constructor(e=1,i=0,s=0,r=0,n=0,a=1,l=0,h=0,o=0,c=0,f=1,u=0,d=0,p=0,g=0,m=1){return super(e,i,s,r,n,a,l,h,o,c,f,u,d,p,g,m),this}get x(){return this[12]}get y(){return this[13]}get z(){return this[14]}get w(){return this[15]}set x(e){this[12]=e}set y(e){this[13]=e}set z(e){this[14]=e}set w(e){this[15]=e}set(e,i,s,r,n,a,l,h,o,c,f,u,d,p,g,m){return e.length?this.copy(e):(ms(this,e,i,s,r,n,a,l,h,o,c,f,u,d,p,g,m),this)}translate(e,i=this){return Es(this,i,e),this}rotate(e,i,s=this){return ys(this,s,e,i),this}scale(e,i=this){return ws(this,i,typeof e=="number"?[e,e,e]:e),this}add(e,i){return i?Kt(this,e,i):Kt(this,this,e),this}sub(e,i){return i?Qt(this,e,i):Qt(this,this,e),this}multiply(e,i){return e.length?i?Zt(this,e,i):Zt(this,this,e):Cs(this,this,e),this}identity(){return xs(this),this}copy(e){return gs(this,e),this}fromPerspective({fov:e,aspect:i,near:s,far:r}={}){return As(this,e,i,s,r),this}fromOrthogonal({left:e,right:i,bottom:s,top:r,near:n,far:a}){return Fs(this,e,i,s,r,n,a),this}fromQuaternion(e){return Rs(this,e),this}setPosition(e){return this.x=e[0],this.y=e[1],this.z=e[2],this}inverse(e=this){return vs(this,e),this}compose(e,i,s){return _s(this,e,i,s),this}decompose(e,i,s){return bs(this,e,i,s),this}getRotation(e){return ui(e,this),this}getTranslation(e){return Ms(e,this),this}getScaling(e){return fi(e,this),this}getMaxScaleOnAxis(){return Ts(this)}lookAt(e,i,s){return Ss(this,e,i,s),this}determinant(){return ci(this)}fromArray(e,i=0){return this[0]=e[i],this[1]=e[i+1],this[2]=e[i+2],this[3]=e[i+3],this[4]=e[i+4],this[5]=e[i+5],this[6]=e[i+6],this[7]=e[i+7],this[8]=e[i+8],this[9]=e[i+9],this[10]=e[i+10],this[11]=e[i+11],this[12]=e[i+12],this[13]=e[i+13],this[14]=e[i+14],this[15]=e[i+15],this}toArray(e=[],i=0){return e[i]=this[0],e[i+1]=this[1],e[i+2]=this[2],e[i+3]=this[3],e[i+4]=this[4],e[i+5]=this[5],e[i+6]=this[6],e[i+7]=this[7],e[i+8]=this[8],e[i+9]=this[9],e[i+10]=this[10],e[i+11]=this[11],e[i+12]=this[12],e[i+13]=this[13],e[i+14]=this[14],e[i+15]=this[15],e}}function Ds(t,e,i="YXZ"){return i==="XYZ"?(t[1]=Math.asin(Math.min(Math.max(e[8],-1),1)),Math.abs(e[8])<.99999?(t[0]=Math.atan2(-e[9],e[10]),t[2]=Math.atan2(-e[4],e[0])):(t[0]=Math.atan2(e[6],e[5]),t[2]=0)):i==="YXZ"?(t[0]=Math.asin(-Math.min(Math.max(e[9],-1),1)),Math.abs(e[9])<.99999?(t[1]=Math.atan2(e[8],e[10]),t[2]=Math.atan2(e[1],e[5])):(t[1]=Math.atan2(-e[2],e[0]),t[2]=0)):i==="ZXY"?(t[0]=Math.asin(Math.min(Math.max(e[6],-1),1)),Math.abs(e[6])<.99999?(t[1]=Math.atan2(-e[2],e[10]),t[2]=Math.atan2(-e[4],e[5])):(t[1]=0,t[2]=Math.atan2(e[1],e[0]))):i==="ZYX"?(t[1]=Math.asin(-Math.min(Math.max(e[2],-1),1)),Math.abs(e[2])<.99999?(t[0]=Math.atan2(e[6],e[10]),t[2]=Math.atan2(e[1],e[0])):(t[0]=0,t[2]=Math.atan2(-e[4],e[5]))):i==="YZX"?(t[2]=Math.asin(Math.min(Math.max(e[1],-1),1)),Math.abs(e[1])<.99999?(t[0]=Math.atan2(-e[9],e[5]),t[1]=Math.atan2(-e[2],e[0])):(t[0]=0,t[1]=Math.atan2(e[8],e[10]))):i==="XZY"&&(t[2]=Math.asin(-Math.min(Math.max(e[4],-1),1)),Math.abs(e[4])<.99999?(t[0]=Math.atan2(e[6],e[5]),t[1]=Math.atan2(e[8],e[0])):(t[0]=Math.atan2(-e[9],e[10]),t[1]=0)),t}const Jt=new Ge;class zs extends Array{constructor(e=0,i=e,s=e,r="YXZ"){super(e,i,s),this.order=r,this.onChange=()=>{},this._target=this;const n=["0","1","2"];return new Proxy(this,{set(a,l){const h=Reflect.set(...arguments);return h&&n.includes(l)&&a.onChange(),h}})}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}set x(e){this._target[0]=e,this.onChange()}set y(e){this._target[1]=e,this.onChange()}set z(e){this._target[2]=e,this.onChange()}set(e,i=e,s=e){return e.length?this.copy(e):(this._target[0]=e,this._target[1]=i,this._target[2]=s,this.onChange(),this)}copy(e){return this._target[0]=e[0],this._target[1]=e[1],this._target[2]=e[2],this.onChange(),this}reorder(e){return this._target.order=e,this.onChange(),this}fromRotationMatrix(e,i=this.order){return Ds(this._target,e,i),this.onChange(),this}fromQuaternion(e,i=this.order,s){return Jt.fromQuaternion(e),this._target.fromRotationMatrix(Jt,i),s||this.onChange(),this}fromArray(e,i=0){return this._target[0]=e[i],this._target[1]=e[i+1],this._target[2]=e[i+2],this}toArray(e=[],i=0){return e[i]=this[0],e[i+1]=this[1],e[i+2]=this[2],e}}class Ps{constructor(){this.parent=null,this.children=[],this.visible=!0,this.matrix=new Ge,this.worldMatrix=new Ge,this.matrixAutoUpdate=!0,this.worldMatrixNeedsUpdate=!1,this.position=new ee,this.quaternion=new ds,this.scale=new ee(1),this.rotation=new zs,this.up=new ee(0,1,0),this.rotation._target.onChange=()=>this.quaternion.fromEuler(this.rotation,!0),this.quaternion._target.onChange=()=>this.rotation.fromQuaternion(this.quaternion,void 0,!0)}setParent(e,i=!0){this.parent&&e!==this.parent&&this.parent.removeChild(this,!1),this.parent=e,i&&e&&e.addChild(this,!1)}addChild(e,i=!0){~this.children.indexOf(e)||this.children.push(e),i&&e.setParent(this,!1)}removeChild(e,i=!0){~this.children.indexOf(e)&&this.children.splice(this.children.indexOf(e),1),i&&e.setParent(null,!1)}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.worldMatrixNeedsUpdate||e)&&(this.parent===null?this.worldMatrix.copy(this.matrix):this.worldMatrix.multiply(this.parent.worldMatrix,this.matrix),this.worldMatrixNeedsUpdate=!1,e=!0);for(let i=0,s=this.children.length;i<s;i++)this.children[i].updateMatrixWorld(e)}updateMatrix(){this.matrix.compose(this.quaternion,this.position,this.scale),this.worldMatrixNeedsUpdate=!0}traverse(e){if(!e(this))for(let i=0,s=this.children.length;i<s;i++)this.children[i].traverse(e)}decompose(){this.matrix.decompose(this.quaternion._target,this.position,this.scale),this.rotation.fromQuaternion(this.quaternion)}lookAt(e,i=!1){i?this.matrix.lookAt(this.position,e,this.up):this.matrix.lookAt(e,this.position,this.up),this.matrix.getRotation(this.quaternion._target),this.rotation.fromQuaternion(this.quaternion)}}function Ls(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[4],t[4]=e[5],t[5]=e[6],t[6]=e[8],t[7]=e[9],t[8]=e[10],t}function ks(t,e){let i=e[0],s=e[1],r=e[2],n=e[3],a=i+i,l=s+s,h=r+r,o=i*a,c=s*a,f=s*l,u=r*a,d=r*l,p=r*h,g=n*a,m=n*l,x=n*h;return t[0]=1-f-p,t[3]=c-x,t[6]=u+m,t[1]=c+x,t[4]=1-o-p,t[7]=d-g,t[2]=u-m,t[5]=d+g,t[8]=1-o-f,t}function Bs(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t}function Is(t,e,i,s,r,n,a,l,h,o){return t[0]=e,t[1]=i,t[2]=s,t[3]=r,t[4]=n,t[5]=a,t[6]=l,t[7]=h,t[8]=o,t}function Ns(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t}function Os(t,e){let i=e[0],s=e[1],r=e[2],n=e[3],a=e[4],l=e[5],h=e[6],o=e[7],c=e[8],f=c*a-l*o,u=-c*n+l*h,d=o*n-a*h,p=i*f+s*u+r*d;return p?(p=1/p,t[0]=f*p,t[1]=(-c*s+r*o)*p,t[2]=(l*s-r*a)*p,t[3]=u*p,t[4]=(c*i-r*h)*p,t[5]=(-l*i+r*n)*p,t[6]=d*p,t[7]=(-o*i+s*h)*p,t[8]=(a*i-s*n)*p,t):null}function ei(t,e,i){let s=e[0],r=e[1],n=e[2],a=e[3],l=e[4],h=e[5],o=e[6],c=e[7],f=e[8],u=i[0],d=i[1],p=i[2],g=i[3],m=i[4],x=i[5],R=i[6],w=i[7],E=i[8];return t[0]=u*s+d*a+p*o,t[1]=u*r+d*l+p*c,t[2]=u*n+d*h+p*f,t[3]=g*s+m*a+x*o,t[4]=g*r+m*l+x*c,t[5]=g*n+m*h+x*f,t[6]=R*s+w*a+E*o,t[7]=R*r+w*l+E*c,t[8]=R*n+w*h+E*f,t}function Us(t,e,i){let s=e[0],r=e[1],n=e[2],a=e[3],l=e[4],h=e[5],o=e[6],c=e[7],f=e[8],u=i[0],d=i[1];return t[0]=s,t[1]=r,t[2]=n,t[3]=a,t[4]=l,t[5]=h,t[6]=u*s+d*a+o,t[7]=u*r+d*l+c,t[8]=u*n+d*h+f,t}function Gs(t,e,i){let s=e[0],r=e[1],n=e[2],a=e[3],l=e[4],h=e[5],o=e[6],c=e[7],f=e[8],u=Math.sin(i),d=Math.cos(i);return t[0]=d*s+u*a,t[1]=d*r+u*l,t[2]=d*n+u*h,t[3]=d*a-u*s,t[4]=d*l-u*r,t[5]=d*h-u*n,t[6]=o,t[7]=c,t[8]=f,t}function qs(t,e,i){let s=i[0],r=i[1];return t[0]=s*e[0],t[1]=s*e[1],t[2]=s*e[2],t[3]=r*e[3],t[4]=r*e[4],t[5]=r*e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t}function Hs(t,e){let i=e[0],s=e[1],r=e[2],n=e[3],a=e[4],l=e[5],h=e[6],o=e[7],c=e[8],f=e[9],u=e[10],d=e[11],p=e[12],g=e[13],m=e[14],x=e[15],R=i*l-s*a,w=i*h-r*a,E=i*o-n*a,T=s*h-r*l,M=s*o-n*l,D=r*o-n*h,O=c*g-f*p,I=c*m-u*p,z=c*x-d*p,L=f*m-u*g,k=f*x-d*g,A=u*x-d*m,b=R*A-w*k+E*L+T*z-M*I+D*O;return b?(b=1/b,t[0]=(l*A-h*k+o*L)*b,t[1]=(h*z-a*A-o*I)*b,t[2]=(a*k-l*z+o*O)*b,t[3]=(r*k-s*A-n*L)*b,t[4]=(i*A-r*z+n*I)*b,t[5]=(s*z-i*k-n*O)*b,t[6]=(g*D-m*M+x*T)*b,t[7]=(m*E-p*D-x*w)*b,t[8]=(p*M-g*E+x*R)*b,t):null}class Xs extends Array{constructor(e=1,i=0,s=0,r=0,n=1,a=0,l=0,h=0,o=1){return super(e,i,s,r,n,a,l,h,o),this}set(e,i,s,r,n,a,l,h,o){return e.length?this.copy(e):(Is(this,e,i,s,r,n,a,l,h,o),this)}translate(e,i=this){return Us(this,i,e),this}rotate(e,i=this){return Gs(this,i,e),this}scale(e,i=this){return qs(this,i,e),this}multiply(e,i){return i?ei(this,e,i):ei(this,this,e),this}identity(){return Ns(this),this}copy(e){return Bs(this,e),this}fromMatrix4(e){return Ls(this,e),this}fromQuaternion(e){return ks(this,e),this}fromBasis(e,i,s){return this.set(e[0],e[1],e[2],i[0],i[1],i[2],s[0],s[1],s[2]),this}inverse(e=this){return Os(this,e),this}getNormalMatrix(e){return Hs(this,e),this}}let Vs=0;class Oe extends Ps{constructor(e,{geometry:i,program:s,mode:r=e.TRIANGLES,frustumCulled:n=!0,renderOrder:a=0}={}){super(),e.canvas||console.error("gl not passed as first argument to Mesh"),this.gl=e,this.id=Vs++,this.geometry=i,this.program=s,this.mode=r,this.frustumCulled=n,this.renderOrder=a,this.modelViewMatrix=new Ge,this.normalMatrix=new Xs,this.beforeRenderCallbacks=[],this.afterRenderCallbacks=[]}onBeforeRender(e){return this.beforeRenderCallbacks.push(e),this}onAfterRender(e){return this.afterRenderCallbacks.push(e),this}draw({camera:e}={}){e&&(this.program.uniforms.modelMatrix||Object.assign(this.program.uniforms,{modelMatrix:{value:null},viewMatrix:{value:null},modelViewMatrix:{value:null},normalMatrix:{value:null},projectionMatrix:{value:null},cameraPosition:{value:null}}),this.program.uniforms.projectionMatrix.value=e.projectionMatrix,this.program.uniforms.cameraPosition.value=e.worldPosition,this.program.uniforms.viewMatrix.value=e.viewMatrix,this.modelViewMatrix.multiply(e.viewMatrix,this.worldMatrix),this.normalMatrix.getNormalMatrix(this.modelViewMatrix),this.program.uniforms.modelMatrix.value=this.worldMatrix,this.program.uniforms.modelViewMatrix.value=this.modelViewMatrix,this.program.uniforms.normalMatrix.value=this.normalMatrix),this.beforeRenderCallbacks.forEach(s=>s&&s({mesh:this,camera:e}));let i=this.program.cullFace&&this.worldMatrix.determinant()<0;this.program.use({flipFaces:i}),this.geometry.draw({mode:this.mode,program:this.program}),this.afterRenderCallbacks.forEach(s=>s&&s({mesh:this,camera:e}))}}const ti=new Uint8Array(4);function ii(t){return(t&t-1)===0}let Ws=1;class qe{constructor(e,{image:i,target:s=e.TEXTURE_2D,type:r=e.UNSIGNED_BYTE,format:n=e.RGBA,internalFormat:a=n,wrapS:l=e.CLAMP_TO_EDGE,wrapT:h=e.CLAMP_TO_EDGE,wrapR:o=e.CLAMP_TO_EDGE,generateMipmaps:c=s===(e.TEXTURE_2D||e.TEXTURE_CUBE_MAP),minFilter:f=c?e.NEAREST_MIPMAP_LINEAR:e.LINEAR,magFilter:u=e.LINEAR,premultiplyAlpha:d=!1,unpackAlignment:p=4,flipY:g=s==(e.TEXTURE_2D||e.TEXTURE_3D),anisotropy:m=0,level:x=0,width:R,height:w=R,length:E=1}={}){this.gl=e,this.id=Ws++,this.image=i,this.target=s,this.type=r,this.format=n,this.internalFormat=a,this.minFilter=f,this.magFilter=u,this.wrapS=l,this.wrapT=h,this.wrapR=o,this.generateMipmaps=c,this.premultiplyAlpha=d,this.unpackAlignment=p,this.flipY=g,this.anisotropy=Math.min(m,this.gl.renderer.parameters.maxAnisotropy),this.level=x,this.width=R,this.height=w,this.length=E,this.texture=this.gl.createTexture(),this.store={image:null},this.glState=this.gl.renderer.state,this.state={},this.state.minFilter=this.gl.NEAREST_MIPMAP_LINEAR,this.state.magFilter=this.gl.LINEAR,this.state.wrapS=this.gl.REPEAT,this.state.wrapT=this.gl.REPEAT,this.state.anisotropy=0}bind(){this.glState.textureUnits[this.glState.activeTextureUnit]!==this.id&&(this.gl.bindTexture(this.target,this.texture),this.glState.textureUnits[this.glState.activeTextureUnit]=this.id)}update(e=0){const i=!(this.image===this.store.image&&!this.needsUpdate);if((i||this.glState.textureUnits[e]!==this.id)&&(this.gl.renderer.activeTexture(e),this.bind()),!!i){if(this.needsUpdate=!1,this.flipY!==this.glState.flipY&&(this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,this.flipY),this.glState.flipY=this.flipY),this.premultiplyAlpha!==this.glState.premultiplyAlpha&&(this.gl.pixelStorei(this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,this.premultiplyAlpha),this.glState.premultiplyAlpha=this.premultiplyAlpha),this.unpackAlignment!==this.glState.unpackAlignment&&(this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT,this.unpackAlignment),this.glState.unpackAlignment=this.unpackAlignment),this.minFilter!==this.state.minFilter&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_MIN_FILTER,this.minFilter),this.state.minFilter=this.minFilter),this.magFilter!==this.state.magFilter&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_MAG_FILTER,this.magFilter),this.state.magFilter=this.magFilter),this.wrapS!==this.state.wrapS&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_WRAP_S,this.wrapS),this.state.wrapS=this.wrapS),this.wrapT!==this.state.wrapT&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_WRAP_T,this.wrapT),this.state.wrapT=this.wrapT),this.wrapR!==this.state.wrapR&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_WRAP_R,this.wrapR),this.state.wrapR=this.wrapR),this.anisotropy&&this.anisotropy!==this.state.anisotropy&&(this.gl.texParameterf(this.target,this.gl.renderer.getExtension("EXT_texture_filter_anisotropic").TEXTURE_MAX_ANISOTROPY_EXT,this.anisotropy),this.state.anisotropy=this.anisotropy),this.image){if(this.image.width&&(this.width=this.image.width,this.height=this.image.height),this.target===this.gl.TEXTURE_CUBE_MAP)for(let s=0;s<6;s++)this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X+s,this.level,this.internalFormat,this.format,this.type,this.image[s]);else if(ArrayBuffer.isView(this.image))this.target===this.gl.TEXTURE_2D?this.gl.texImage2D(this.target,this.level,this.internalFormat,this.width,this.height,0,this.format,this.type,this.image):(this.target===this.gl.TEXTURE_2D_ARRAY||this.target===this.gl.TEXTURE_3D)&&this.gl.texImage3D(this.target,this.level,this.internalFormat,this.width,this.height,this.length,0,this.format,this.type,this.image);else if(this.image.isCompressedTexture)for(let s=0;s<this.image.length;s++)this.gl.compressedTexImage2D(this.target,s,this.internalFormat,this.image[s].width,this.image[s].height,0,this.image[s].data);else this.target===this.gl.TEXTURE_2D?this.gl.texImage2D(this.target,this.level,this.internalFormat,this.format,this.type,this.image):this.gl.texImage3D(this.target,this.level,this.internalFormat,this.width,this.height,this.length,0,this.format,this.type,this.image);this.generateMipmaps&&(!this.gl.renderer.isWebgl2&&(!ii(this.image.width)||!ii(this.image.height))?(this.generateMipmaps=!1,this.wrapS=this.wrapT=this.gl.CLAMP_TO_EDGE,this.minFilter=this.gl.LINEAR):this.gl.generateMipmap(this.target)),this.onUpdate&&this.onUpdate()}else if(this.target===this.gl.TEXTURE_CUBE_MAP)for(let s=0;s<6;s++)this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X+s,0,this.gl.RGBA,1,1,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,ti);else this.width?this.target===this.gl.TEXTURE_2D?this.gl.texImage2D(this.target,this.level,this.internalFormat,this.width,this.height,0,this.format,this.type,null):this.gl.texImage3D(this.target,this.level,this.internalFormat,this.width,this.height,this.length,0,this.format,this.type,null):this.gl.texImage2D(this.target,0,this.gl.RGBA,1,1,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,ti);this.store.image=this.image}}}class si{constructor(e,{width:i=e.canvas.width,height:s=e.canvas.height,target:r=e.FRAMEBUFFER,color:n=1,depth:a=!0,stencil:l=!1,depthTexture:h=!1,wrapS:o=e.CLAMP_TO_EDGE,wrapT:c=e.CLAMP_TO_EDGE,wrapR:f=e.CLAMP_TO_EDGE,minFilter:u=e.LINEAR,magFilter:d=u,type:p=e.UNSIGNED_BYTE,format:g=e.RGBA,internalFormat:m=g,unpackAlignment:x,premultiplyAlpha:R}={}){this.gl=e,this.width=i,this.height=s,this.depth=a,this.stencil=l,this.buffer=this.gl.createFramebuffer(),this.target=r,this.gl.renderer.bindFramebuffer(this),this.textures=[];const w=[];for(let E=0;E<n;E++)this.textures.push(new qe(e,{width:i,height:s,wrapS:o,wrapT:c,wrapR:f,minFilter:u,magFilter:d,type:p,format:g,internalFormat:m,unpackAlignment:x,premultiplyAlpha:R,flipY:!1,generateMipmaps:!1})),this.textures[E].update(),this.gl.framebufferTexture2D(this.target,this.gl.COLOR_ATTACHMENT0+E,this.gl.TEXTURE_2D,this.textures[E].texture,0),w.push(this.gl.COLOR_ATTACHMENT0+E);w.length>1&&this.gl.renderer.drawBuffers(w),this.texture=this.textures[0],h&&(this.gl.renderer.isWebgl2||this.gl.renderer.getExtension("WEBGL_depth_texture"))?(this.depthTexture=new qe(e,{width:i,height:s,minFilter:this.gl.NEAREST,magFilter:this.gl.NEAREST,format:this.stencil?this.gl.DEPTH_STENCIL:this.gl.DEPTH_COMPONENT,internalFormat:e.renderer.isWebgl2?this.stencil?this.gl.DEPTH24_STENCIL8:this.gl.DEPTH_COMPONENT16:this.gl.DEPTH_COMPONENT,type:this.stencil?this.gl.UNSIGNED_INT_24_8:this.gl.UNSIGNED_INT}),this.depthTexture.update(),this.gl.framebufferTexture2D(this.target,this.stencil?this.gl.DEPTH_STENCIL_ATTACHMENT:this.gl.DEPTH_ATTACHMENT,this.gl.TEXTURE_2D,this.depthTexture.texture,0)):(a&&!l&&(this.depthBuffer=this.gl.createRenderbuffer(),this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,this.depthBuffer),this.gl.renderbufferStorage(this.gl.RENDERBUFFER,this.gl.DEPTH_COMPONENT16,i,s),this.gl.framebufferRenderbuffer(this.target,this.gl.DEPTH_ATTACHMENT,this.gl.RENDERBUFFER,this.depthBuffer)),l&&!a&&(this.stencilBuffer=this.gl.createRenderbuffer(),this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,this.stencilBuffer),this.gl.renderbufferStorage(this.gl.RENDERBUFFER,this.gl.STENCIL_INDEX8,i,s),this.gl.framebufferRenderbuffer(this.target,this.gl.STENCIL_ATTACHMENT,this.gl.RENDERBUFFER,this.stencilBuffer)),a&&l&&(this.depthStencilBuffer=this.gl.createRenderbuffer(),this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,this.depthStencilBuffer),this.gl.renderbufferStorage(this.gl.RENDERBUFFER,this.gl.DEPTH_STENCIL,i,s),this.gl.framebufferRenderbuffer(this.target,this.gl.DEPTH_STENCIL_ATTACHMENT,this.gl.RENDERBUFFER,this.depthStencilBuffer))),this.gl.renderer.bindFramebuffer({target:this.target})}setSize(e,i){if(!(this.width===e&&this.height===i)){this.width=e,this.height=i,this.gl.renderer.bindFramebuffer(this);for(let s=0;s<this.textures.length;s++)this.textures[s].width=e,this.textures[s].height=i,this.textures[s].needsUpdate=!0,this.textures[s].update(),this.gl.framebufferTexture2D(this.target,this.gl.COLOR_ATTACHMENT0+s,this.gl.TEXTURE_2D,this.textures[s].texture,0);this.depthTexture?(this.depthTexture.width=e,this.depthTexture.height=i,this.depthTexture.needsUpdate=!0,this.depthTexture.update(),this.gl.framebufferTexture2D(this.target,this.gl.DEPTH_ATTACHMENT,this.gl.TEXTURE_2D,this.depthTexture.texture,0)):(this.depthBuffer&&(this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,this.depthBuffer),this.gl.renderbufferStorage(this.gl.RENDERBUFFER,this.gl.DEPTH_COMPONENT16,e,i)),this.stencilBuffer&&(this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,this.stencilBuffer),this.gl.renderbufferStorage(this.gl.RENDERBUFFER,this.gl.STENCIL_INDEX8,e,i)),this.depthStencilBuffer&&(this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,this.depthStencilBuffer),this.gl.renderbufferStorage(this.gl.RENDERBUFFER,this.gl.DEPTH_STENCIL,e,i))),this.gl.renderer.bindFramebuffer({target:this.target})}}}class $s extends oi{constructor(e,{attributes:i={}}={}){Object.assign(i,{position:{size:2,data:new Float32Array([-1,-1,3,-1,-1,3])},uv:{size:2,data:new Float32Array([0,0,2,0,0,2])}}),super(e,i)}}const ri={plasma:{color:"#F25BD0",strands:6,crackle:.85,flares:.65,glow:.9,sparks:.6,particleCount:15e3,fill:.5,motion:"rise",particleShape:"square",depth:.6,sway:.5,twinkle:.5,haze:.7,dustSpeed:1},aurora:{color:"#5CFFC8",strands:5,crackle:.6,flares:.5,glow:.8,sparks:.45,particleCount:15e3,fill:.5,motion:"rise",particleShape:"square",depth:.6,sway:.5,twinkle:.5,haze:.7,dustSpeed:1},nebula:{color:"#9478FF",strands:6,crackle:1,flares:.5,glow:.9,sparks:.6,particleCount:18e3,fill:.45,motion:"rise",particleShape:"square",depth:.5,sway:.4,twinkle:.6,haze:.8,dustSpeed:1.2},ember:{color:"#FF8A2A",strands:5,crackle:.9,flares:.8,glow:1,sparks:.8,particleCount:12e3,fill:.35,motion:"rise",particleShape:"round",depth:.7,sway:.3,twinkle:.7,haze:.9,dustSpeed:1.6},frost:{color:"#BFE6FF",strands:3,crackle:.3,flares:.3,glow:.6,sparks:.2,particleCount:16e3,fill:.6,motion:"fall",particleShape:"round",depth:.8,sway:.4,twinkle:.4,haze:.5,dustSpeed:.7},solar:{color:"#FFD36E",strands:6,crackle:.7,flares:1,glow:1.1,sparks:.5,particleCount:15e3,fill:.55,motion:"orbit",particleShape:"square",depth:.6,sway:.7,twinkle:.5,haze:.8,dustSpeed:1},eclipse:{color:"#FFFFFF",strands:4,crackle:.5,flares:.4,glow:.7,sparks:.35,particleCount:14e3,fill:.5,motion:"drift",particleShape:"square",depth:.7,sway:.5,twinkle:.5,haze:.5,dustSpeed:.8},abyss:{color:"#3F7BFF",strands:5,crackle:.55,flares:.6,glow:.9,sparks:.4,particleCount:2e4,fill:.8,motion:"orbit",particleShape:"round",depth:.8,sway:.8,twinkle:.5,haze:.6,dustSpeed:.9}},Ys={rise:0,fall:1,drift:2,orbit:3},js={square:0,round:1},di=8,ht=4,Zs=4e4,fe=256,Ks=45e5,Qs=2.2,Js=7,Ue=[1,1,1],ot=[0,0,0],P=(t,e,i)=>Math.min(Math.max(t,e),i),le=(t,e,i)=>{const s=P((i-t)/(e-t),0,1);return s*s*(3-2*s)},ni=t=>1-Math.pow(1-t,3),Re=(t,e,i)=>t.map((s,r)=>s+(e[r]-s)*i),ai=t=>t-Math.PI*2*Math.floor((t+Math.PI)/(Math.PI*2)),er=(t,e)=>{try{const i=document.createElement("canvas").getContext("2d");if(!i)return e;i.fillStyle="#000000",i.fillStyle=t;const s=i.fillStyle;if(s.startsWith("#")){const n=parseInt(s.slice(1),16);return[(n>>16&255)/255,(n>>8&255)/255,(n&255)/255]}const r=s.match(/[\d.]+/g);return!r||r.length<3?e:[Number(r[0])/255,Number(r[1])/255,Number(r[2])/255]}catch{return e}},tr=t=>t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4),ir=t=>t<=.0031308?t*12.92:1.055*Math.pow(t,1/2.4)-.055,De=t=>{const[e,i,s]=t.map(tr),r=Math.cbrt(.4122214708*e+.5363325363*i+.0514459929*s),n=Math.cbrt(.2119034982*e+.6806995451*i+.1073969566*s),a=Math.cbrt(.0883024619*e+.2817188376*i+.6299787005*s);return[.2104542553*r+.793617785*n-.0040720468*a,1.9779984951*r-2.428592205*n+.4505937099*a,.0259040371*r+.7827717662*n-.808675766*a]},dt=([t,e,i])=>{const s=Math.pow(t+.3963377774*e+.2158037573*i,3),r=Math.pow(t-.1055613458*e-.0638541728*i,3),n=Math.pow(t-.0894841775*e-1.291485548*i,3);return[4.0767416621*s-3.3077115913*r+.2309699292*n,-1.2684380046*s+2.6097574011*r-.3413193965*n,-.0041960863*s-.7034186147*r+1.707614701*n].map(a=>P(ir(P(a,0,1)),0,1))},li=(t,e,i)=>dt(Re(De(t),De(e),i)),_e=(t,e,i,s)=>{const[r,n,a]=De(t),l=Math.hypot(n,a)*s,h=Math.atan2(a,n)+e*Math.PI/180;return dt([P(r+i,0,1),l*Math.cos(h),l*Math.sin(h)])},J=(t,e,i,s)=>{const[,r,n]=De(t),a=Math.max(Math.hypot(r,n)*s,.02),l=Math.atan2(n,r)+e*Math.PI/180;return dt([P(i,0,1),a*Math.cos(l),a*Math.sin(l)])},sr=(t,e)=>{if(e){const i=J(t,0,Math.min(De(t)[0],.62),1.15);return{rim:i,rimHot:i,rimMid:i,rimDeep:J(t,0,.72,.8),spark:J(t,0,.6,1.2),sparkGlow:J(t,0,.78,.8),haze:J(t,0,.8,.6),edge:J(t,0,.72,.8),tones:[J(t,0,.56,1.1),J(t,16,.6,1.05),J(t,-16,.5,1.1),J(t,0,.66,.9),J(t,0,.74,.7)]}}return{rim:t,rimHot:Re(t,Ue,.72),rimMid:Re(t,ot,.15),rimDeep:Re(t,ot,.45),spark:Re(t,Ue,.45),sparkGlow:_e(t,0,-.15,1),haze:Re(t,ot,.6),edge:_e(t,0,-.3,.9),tones:[_e(t,0,-.06,1),_e(t,16,-.02,1),_e(t,-16,-.12,1.05),_e(li(t,Ue,.25),0,.04,1),li(t,Ue,.7)]}},pt=t=>{let e=t>>>0;return()=>{e=e+1831565813>>>0;let i=e;return i=Math.imul(i^i>>>15,i|1),i^=i+Math.imul(i^i>>>7,i|61),((i^i>>>14)>>>0)/4294967296}},rr=()=>{const t=pt(99),e=[[6,12,.6,1.6],[18,34,1.5,3.5],[40,70,3,7],[80,130,6,12]],i={harmonics:[],rates:[],phases:[],flareHarmonics:[],flareRates:[],flarePhases:[]};for(let s=0;s<di;s++){e.forEach(([n,a,l,h])=>{i.harmonics.push(Math.round(n+t()*(a-n))),i.rates.push((l+t()*(h-l))*(t()<.5?-1:1)),i.phases.push(t()*Math.PI*2)});for(let n=0;n<3;n++)i.flareHarmonics.push(4+Math.floor(t()*6)),i.flareRates.push((.4+t()*.8)*(t()<.5?-1:1)),i.flarePhases.push(t()*Math.PI*2);const r=s===0;i.flareHarmonics.push(r?.75:.95+t()*.3),i.flareRates.push(r?1.15:.8+t()*.2),i.flarePhases.push(r?1:.7+t()*.25)}return i},nr=t=>{const e=pt(1337),i=Math.max(1,Math.ceil(t/fe)),s=new Float32Array(fe*i*4),r=new Float32Array(fe*i*4);let n=0,a=0;for(;n<t&&a<t*80;){a++;let l,h,o;if(e()<.28){const f=e()*Math.PI*2,u=.87+Math.sqrt(e())*.105;if(l=Math.cos(f)*u,h=Math.sin(f)*u,e()>le(-.6,.3,-h))continue;const d=e();o=d<.5?3:d<.8?2:1}else{l=e()*2-1,h=e()*2-1;const f=Math.hypot(l,h);if(f>.975)continue;const u=Math.pow(le(-.25,.85,-h),1.3),d=le(.66,.96,f)*le(-.7,.3,-h),p=Math.max(u,d*.9);if(e()>.012+.988*p)continue;if(p<.12)o=4;else{const g=e();o=g<.32?0:g<.52?1:g<.8?2:3}}const c=Math.sqrt(Math.max(0,.95-l*l-h*h));s[n*4]=l,s[n*4+1]=h,s[n*4+2]=(e()*2-1)*c,s[n*4+3]=o,r[n*4]=o===4?1.8:e()<.22?2.1:1.3,r[n*4+1]=e(),r[n*4+2]=2.5+e()*3.5,r[n*4+3]=.16+e()*.26,n++}return{home:s,seed:r,count:n,rows:i}},ct=`#version 300 es
in vec2 position;
in vec2 uv;
out vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`,gt=`
uint scramble(uint v) {
  v = v * 747796405u + 2891336453u;
  uint w = ((v >> ((v >> 28u) + 4u)) ^ v) * 277803737u;
  return (w >> 22u) ^ w;
}

float random(uint v) {
  return float(scramble(v)) * (1.0 / 4294967295.0);
}
`,pi=`
uniform float uDustTime;
uniform vec2 uTurn;
uniform float uMotion;
uniform float uFill;

vec3 settle(vec3 p, out float spread) {
  float bend = exp2((0.5 - uFill) * 1.8);
  float h = clamp((p.y + 1.0) * 0.5, 0.0, 1.0);
  float y = 2.0 * pow(h, bend) - 1.0;
  float from = sqrt(max(1.0 - p.y * p.y, 1e-4));
  float to = sqrt(max(1.0 - y * y, 0.0));
  spread = clamp(bend * pow(max(h, 1e-3), bend - 1.0) * to / from, 0.25, 1.0);
  return vec3(p.xz * (to / from), y).xzy;
}

vec3 drift(vec4 home, vec4 seed, uint id, out float life, out float spread) {
  vec3 p = settle(home.xyz, spread);
  float t = uDustTime;
  float u = fract(t / seed.z + seed.y);
  life = sin(3.14159265 * u);
  float travel = seed.w;
  if (uMotion < 0.5) {
    p.y += travel * (u - 0.5);
  } else if (uMotion < 1.5) {
    p.y -= travel * (u - 0.5);
  } else if (uMotion < 2.5) {
    p += 0.045 * vec3(
      sin(t * 0.37 + seed.y * 17.0) + 0.5 * sin(t * 0.83 + seed.z * 5.0),
      sin(t * 0.29 + seed.z * 11.0) + 0.5 * sin(t * 0.61 + seed.w * 7.0),
      sin(t * 0.33 + seed.w * 23.0)
    );
  } else {
    float loop = t * (0.6 + 0.9 * random(id * 7u + 3u)) * (random(id * 7u + 10u) < 0.5 ? -1.0 : 1.0) + seed.y * 6.2831853;
    p.xy += (0.025 + 0.05 * random(id * 7u + 16u)) * vec2(cos(loop), sin(loop));
  }
  float wobble = 0.002 + 0.006 * random(id * 7u + 1u);
  float w1 = 0.8 + 2.4 * random(id * 7u + 2u);
  float w2 = 0.8 + 2.4 * random(id * 7u + 4u);
  p += wobble * vec3(sin(t * w1 + seed.y * 40.0), cos(t * w2 + seed.z * 30.0), sin(t * (w1 + w2) * 0.5 + seed.w * 20.0));
  float cy = cos(uTurn.x);
  float sy = sin(uTurn.x);
  p.xz = mat2(cy, -sy, sy, cy) * p.xz;
  float cx = cos(uTurn.y);
  float sx = sin(uTurn.y);
  p.yz = mat2(cx, -sx, sx, cx) * p.yz;
  return p;
}
`,ar=`#version 300 es
precision highp float;

uniform vec2 uCenter;
uniform float uRadius;
uniform float uDpr;
uniform float uLine;
uniform float uTime;
uniform float uFrame;
uniform float uBins;
uniform float uStrands;
uniform float uCrackle;
uniform float uFlares;
uniform float uGlow;
uniform float uHaze;
uniform float uFill;
uniform float uPresence;
uniform float uUnfold;
uniform float uBloom;
uniform float uInside;
uniform float uEncode;
uniform vec3 uRim;
uniform vec3 uRimHot;
uniform vec3 uRimMid;
uniform vec3 uRimDeep;
uniform vec3 uSpark;
uniform vec3 uSparkGlow;
uniform vec3 uHazeColor;
uniform vec3 uEdgeColor;
uniform vec4 uHeat;
uniform vec4 uHarmonics[8];
uniform vec4 uRates[8];
uniform vec4 uPhases[8];
uniform vec4 uFlareHarmonics[8];
uniform vec4 uFlareRates[8];
uniform vec4 uFlarePhases[8];
uniform vec4 uArcs[4];

out vec4 fragColor;
${gt}
const float PI = 3.14159265;
const float TAU = 6.28318531;
const vec4 AMPS = vec4(0.35, 0.3, 0.22, 0.13);

float bell(float d, float w) {
  float x = d / w;
  return exp(-x * x);
}

float segment(vec2 p, vec2 a, vec2 b) {
  vec2 pa = p - a;
  vec2 ba = b - a;
  float h = clamp(dot(pa, ba) / max(dot(ba, ba), 1e-5), 0.0, 1.0);
  return length(pa - ba * h);
}

float pool(vec2 q) {
  float t = length(q - vec2(0.0, mix(-1.0, -0.66, uFill))) / mix(0.8, 1.35, uFill);
  return t < 0.6 ? mix(0.5, 0.22, t / 0.6) : mix(0.22, 0.0, clamp((t - 0.6) / 0.4, 0.0, 1.0));
}

void main() {
  vec2 p = gl_FragCoord.xy / uDpr - uCenter;
  float r = length(p);
  float R = uRadius;
  float theta = atan(p.y, p.x);
  float lift = p.y / max(r, 1e-3);
  float topDim = 1.0 - 0.35 * pow(max(lift, 0.0), 1.5);
  vec3 col = vec3(0.0);
  float hot = 0.0;
  uint frame = uint(uFrame);

  if (r < R) {
    vec2 q = p / R;
    float chord = sqrt(max(1.0 - dot(q, q), 0.0));
    float haze = pool(q) * (0.55 + 0.45 * chord);
    col += uHazeColor * haze * uHaze * uInside;
    float e = length(q - vec2(0.0, 0.2)) / 1.2;
    float edge = 0.5 * pow(smoothstep(0.62, 1.0, e), 1.4);
    col += uEdgeColor * edge * uInside * (0.5 + 0.5 * uHaze);
  }

  float dr = r - R;
  float halo = 1.0 - smoothstep(R * 0.05, R * 0.105, abs(dr - R * 0.0213));
  col += uRimDeep * 0.18 * halo * topDim * uGlow * uBloom;
  col += uRim * 0.12 * bell(dr + R * 0.0383, R * 0.032) * uGlow * uBloom;
  col += uRim * 0.32 * bell(dr, max(R * 0.0117, uLine)) * uPresence * uUnfold;

  float delta = mod(theta - uHeat.x + PI, TAU) - PI;
  float heat = uHeat.z * uHeat.y * exp(-delta * delta / 0.3);
  float crackle = uCrackle + heat * 0.9;
  float amp = R * 0.016 * (0.3 + 1.4 * crackle) * uUnfold;
  float jitterAmp = R * 0.0048 * (0.3 + 1.4 * uCrackle) * uUnfold * (1.0 + heat * 0.3);
  float flareAmp = R * 0.064 * (0.4 + 1.2 * crackle) * uFlares * 1.6 * uUnfold;

  if (abs(dr) < amp * 2.0 + flareAmp + R * 0.3) {
    float step = TAU / uBins;
    float binPos = (theta + PI) / step;
    float bin0 = floor(binPos);
    float binF = binPos - bin0;
    float th0 = bin0 * step - PI;
    float th1 = th0 + step;
    uint b0 = uint(mod(bin0, uBins));
    uint b1 = uint(mod(bin0 + 1.0, uBins));
    float gain = min(1.0, 2.4 / max(uStrands, 1.0));
    for (int k = 0; k < 8; k++) {
      if (float(k) >= uStrands) break;
      vec4 m = uHarmonics[k];
      vec4 lead = uRates[k] * uTime + uPhases[k];
      float wave0 = dot(AMPS, sin(m * th0 + lead));
      float wave1 = dot(AMPS, sin(m * th1 + lead));
      uint salt = uint(k) * 1013u + frame * 7919u;
      vec4 shape = uFlareHarmonics[k];
      vec4 look = uFlareRates[k];
      vec4 tone = uFlarePhases[k];
      float a = amp * shape.w;
      float off0 = a * wave0 + jitterAmp * (random(b0 + salt) - 0.5);
      float off1 = a * wave1 + jitterAmp * (random(b1 + salt) - 0.5);
      float rc = R + mix(off0, off1, binF);
      float grade = (off1 - off0) / (step * max(r, 1.0));
      float d = abs(r - rc) * inversesqrt(1.0 + grade * grade);
      float swell = 0.8 + 0.4 * (0.5 + 0.5 * sin(3.0 * theta + uTime * 0.7 + tone.x * 1.7));
      float width = uLine * look.w * swell * (1.0 + heat * 0.25);
      float core = exp(-d * d / (width * width));
      float sheath = exp(-d * d / (width * width * 3.0));
      float bright = tone.w * (1.0 + heat * 0.45) * uPresence;
      col += (uRimHot * core * 0.8 + uRim * sheath * 0.32) * bright;
      hot += core * bright;
      vec3 fargs = shape.xyz * theta + look.xyz * uTime + tone.xyz;
      float flare = max(0.0, (sin(fargs.x) + sin(fargs.y) + sin(fargs.z)) / 3.0);
      flare = (flare * flare + heat * 0.35) * flareAmp;
      float dw = abs(r - rc - flare);
      float dm = abs(r - rc - flare * 0.6);
      float dn = abs(r - rc - flare * 0.25);
      vec3 glow = uRimDeep * (0.07 * bell(dw, R * 0.09) + 0.16 * bell(dw, R * 0.05));
      glow += uRimMid * 0.28 * bell(dm, R * 0.027) + uRim * 0.38 * bell(dn, R * 0.013);
      col += glow * gain * topDim * uGlow * uBloom * (1.0 + heat * 1.4);
    }
  }

  for (int i = 0; i < 4; i++) {
    vec4 arc = uArcs[i];
    if (arc.w <= 0.002) continue;
    float mid = arc.x + arc.y * 0.5;
    vec2 center = R * 0.93 * vec2(cos(mid), sin(mid));
    if (distance(p, center) > R * (abs(arc.y) * 0.6 + 0.1) + 12.0) continue;
    float ar = R * 0.955;
    vec2 a0 = ar * vec2(cos(arc.x), sin(arc.x));
    vec2 a2 = ar * vec2(cos(arc.x + arc.y), sin(arc.x + arc.y));
    vec2 a1 = R * (0.955 - arc.z) * vec2(cos(mid), sin(mid));
    float dmin = 1e5;
    float along = 0.0;
    vec2 prev = a0;
    for (int s = 1; s <= 10; s++) {
      float u = float(s) / 10.0;
      vec2 b = mix(mix(a0, a1, u), mix(a1, a2, u), u);
      vec2 pa = p - prev;
      vec2 ba = b - prev;
      float h = clamp(dot(pa, ba) / max(dot(ba, ba), 1e-5), 0.0, 1.0);
      float dist = length(pa - ba * h);
      if (dist < dmin) {
        dmin = dist;
        along = (float(s) - 1.0 + h) / 10.0;
      }
      prev = b;
    }
    float taper = sqrt(max(sin(PI * along), 0.0));
    float arcWidth = uLine * (0.55 + 0.6 * taper);
    float arcCore = exp(-dmin * dmin / (arcWidth * arcWidth));
    float arcGlow = exp(-dmin * dmin / (arcWidth * arcWidth * 12.0));
    col += (uSpark * 0.95 * arcCore + uSparkGlow * 0.4 * arcGlow) * arc.w * taper;
    hot += arcCore * arc.w * taper * 0.6;
  }

  fragColor = vec4(col, hot) * uEncode;
}
`,lr=`#version 300 es
precision highp float;

in float aIndex;

uniform sampler2D tHome;
uniform sampler2D tSeed;
uniform sampler2D tOffset;
uniform float uStirred;
uniform vec2 uCenter;
uniform vec2 uViewport;
uniform float uRadius;
uniform float uDpr;
uniform float uDepth;
uniform float uTwinkle;
uniform float uPointScale;
uniform float uReveal;
uniform float uEncode;
uniform vec3 uTones[5];
uniform vec3 uRimTone;

out vec3 vColor;
out float vSize;
${gt}
${pi}
void main() {
  ivec2 cell = ivec2(int(mod(aIndex, ${fe}.0)), int(floor(aIndex / ${fe}.0)));
  uint id = uint(aIndex);
  vec4 home = texelFetch(tHome, cell, 0);
  vec4 seed = texelFetch(tSeed, cell, 0);
  float life;
  float spread;
  vec3 p = drift(home, seed, id, life, spread);
  if (uStirred > 0.5) p += texelFetch(tOffset, cell, 0).xyz;
  float len = length(p);
  float inside = 1.0 - smoothstep(0.955, 0.985, length(p.xy));
  if (len > 0.975) p *= 0.975 / len;

  float front = p.z * 0.5 + 0.5;
  float depthSize = mix(1.0, 0.7 + 0.6 * front, uDepth);
  float depthLight = mix(1.0, 0.35 + 0.8 * front, uDepth);
  float blink = sin(uDustTime * (2.0 + 6.0 * random(id * 7u + 5u)) + random(id * 7u + 6u) * 6.2831853);
  float twinkle = mix(1.0, smoothstep(-0.9, -0.6, blink), uTwinkle);
  float fade = smoothstep(0.04, 0.12, life);
  float order = (home.y + 1.0) * 0.5 * 0.55 + random(id * 7u + 8u) * 0.25;
  float reveal = smoothstep(order, order + 0.2, uReveal * 1.0);
  float alpha = random(id * 7u + 9u) < 0.5 || home.w > 3.5 ? 1.0 : 0.6;

  float size = seed.x * uPointScale * (0.35 + 0.95 * life) * depthSize * mix(0.5, 1.0, reveal);
  vec2 screen = uCenter + p.xy * uRadius;
  gl_Position = vec4(screen / uViewport * 2.0 - 1.0, 0.0, 1.0);
  float px = size * uDpr;
  gl_PointSize = px + 2.0;
  vSize = px;

  int tone = int(home.w + 0.5);
  float rimLit = smoothstep(0.8, 0.97, length(p.xy));
  vec3 color = uTones[tone] + uRimTone * rimLit * rimLit * 0.12;
  vColor = color * alpha * fade * twinkle * depthLight * reveal * inside * sqrt(spread) * uEncode;
}
`,hr=`#version 300 es
precision highp float;

uniform float uShape;

in vec3 vColor;
in float vSize;

out vec4 fragColor;

void main() {
  vec2 q = (gl_PointCoord - 0.5) * (vSize + 2.0);
  float half_ = max(vSize * 0.5, 0.5);
  float cover;
  if (uShape < 0.5) {
    vec2 c = clamp(half_ - abs(q) + 0.5, 0.0, 1.0);
    cover = c.x * c.y;
  } else {
    cover = clamp(half_ - length(q) + 0.5, 0.0, 1.0);
  }
  if (cover <= 0.0) discard;
  fragColor = vec4(vColor * cover, 0.0);
}
`,or=`#version 300 es
precision highp float;

uniform sampler2D tHome;
uniform sampler2D tSeed;
uniform sampler2D tOffset;
uniform sampler2D tVelocity;
uniform float uDt;
uniform float uReset;
uniform vec4 uBrush;
uniform float uBrushPower;
uniform vec4 uKick;

layout(location = 0) out vec4 outOffset;
layout(location = 1) out vec4 outVelocity;
${gt}
${pi}
vec3 swirl(vec3 p) {
  float t = uDustTime * 0.15;
  vec3 a = vec3(1.7, 1.9, 1.5) * p.yzx + vec3(t, 1.2, 2.1);
  vec3 b = vec3(2.3, 2.1, 2.7) * p.zxy + vec3(0.4, t * 1.3, 0.9);
  vec3 ca = cos(a) * vec3(1.7, 1.9, 1.5);
  vec3 cb = cos(b) * vec3(2.3, 2.1, 2.7);
  return vec3(ca.z - cb.x, cb.y - ca.x, ca.y - cb.z);
}

void main() {
  ivec2 cell = ivec2(gl_FragCoord.xy);
  if (uReset > 0.5) {
    outOffset = vec4(0.0);
    outVelocity = vec4(0.0);
    return;
  }
  uint id = uint(cell.y * ${fe} + cell.x);
  vec4 home = texelFetch(tHome, cell, 0);
  vec4 seed = texelFetch(tSeed, cell, 0);
  vec3 o = texelFetch(tOffset, cell, 0).xyz;
  vec3 v = texelFetch(tVelocity, cell, 0).xyz;
  float life;
  float spread;
  vec3 base = drift(home, seed, id, life, spread);
  vec3 p = base + o;

  float k = mix(0.8, 2.2, random(id * 7u + 11u));
  vec3 acc = -k * o - 1.5 * sqrt(k) * v;

  vec2 gap = p.xy - uBrush.xy;
  float touch = exp(-dot(gap, gap) / 0.07) * uBrushPower;
  acc += (vec3(uBrush.zw, 0.0) - v) * touch * 14.0;
  float pace = length(v);
  if (pace > 1e-4) {
    vec3 heading = v / pace;
    vec3 curl = swirl(p * 1.6);
    acc += (curl - heading * dot(curl, heading)) * min(pace, 2.0) * 1.8;
  }

  if (uKick.z > 0.0) {
    vec3 jolt = vec3(random(id * 7u + 12u), random(id * 7u + 13u), random(id * 7u + 14u)) - 0.5;
    float near = exp(-dot(p.xy - uKick.xy, p.xy - uKick.xy) / 0.4);
    vec3 spinKick = vec3(-p.z, 0.0, p.x) * 0.9;
    vec3 lift = vec3(0.0, 0.5 + 0.8 * random(id * 7u + 15u), 0.0) * (0.3 + 0.7 * smoothstep(0.2, -0.8, p.y));
    v += (jolt * 0.8 + spinKick + lift) * uKick.z * (0.4 + 0.45 * near);
  }

  v += acc * uDt;
  o += v * uDt;
  vec3 q = base + o;
  float len = length(q);
  if (len > 0.97) {
    vec3 n = q / len;
    o -= n * (len - 0.97);
    v -= n * max(dot(v, n), 0.0) * 1.5;
  }
  outOffset = vec4(o, 1.0);
  outVelocity = vec4(v, 1.0);
}
`,cr=`#version 300 es
precision highp float;

uniform sampler2D tScene;
uniform float uLight;
uniform float uDecode;

in vec2 vUv;
out vec4 fragColor;

vec3 soften(vec3 x) {
  vec3 over = max(x - 0.6, 0.0);
  return min(x, 0.6) + 0.4 * (1.0 - exp(-over / 0.4));
}

void main() {
  vec4 scene = texture(tScene, vUv) * uDecode;
  vec3 light = max(scene.rgb, 0.0);
  float peak = max(light.r, max(light.g, light.b));
  if (uLight > 0.5) {
    vec3 hue = light / max(peak, 1e-4);
    float cover = 1.0 - exp(-peak * 2.4);
    vec3 ink = hue * mix(0.92, 0.72, cover);
    float core = clamp(scene.a * 0.7, 0.0, 1.0) * cover;
    vec3 tint = mix(vec3(1.0), hue, 0.22);
    fragColor = vec4(tint * core + ink * cover * (1.0 - core), core + cover * (1.0 - core));
    return;
  }
  light += vec3(max(peak - 1.8, 0.0) * 0.25);
  vec3 shown = soften(light);
  fragColor = vec4(shown, max(shown.r, max(shown.g, shown.b)));
}
`,ur=({preset:t="plasma",color:e,theme:i="dark",size:s=.7,strands:r,crackle:n,flares:a,glow:l,sparks:h,particleCount:o,fill:c,motion:f,particleShape:u,depth:d,sway:p,twinkle:g,haze:m,speed:x=1,dustSpeed:R,interactive:w=!0,hoverStrength:E=.7,intro:T=!0,paused:M=!1,className:D="",style:O})=>{const I=be.useRef(null),z=be.useRef(null),L=be.useRef(null),k=ri[t]||ri.plasma,A=(H,V)=>H??k[V],b=A(e,"color"),ue=be.useMemo(()=>{const H=i==="light";return{light:H,palette:sr(er(b,[.95,.36,.82]),H)}},[b,i]);return be.useEffect(()=>{z.current={...ue,size:s,strands:A(r,"strands"),crackle:A(n,"crackle"),flares:A(a,"flares"),glow:A(l,"glow"),sparks:A(h,"sparks"),particleCount:A(o,"particleCount"),fill:A(c,"fill"),motion:A(f,"motion"),particleShape:A(u,"particleShape"),depth:A(d,"depth"),sway:A(p,"sway"),twinkle:A(g,"twinkle"),haze:A(m,"haze"),dustSpeed:A(R,"dustSpeed"),speed:x,interactive:w,hoverStrength:E,intro:T,paused:M},L.current?.()}),be.useEffect(()=>{const H=I.current;if(!H)return;const V=new Yi({alpha:!0,premultipliedAlpha:!0,antialias:!1,depth:!1}),y=V.gl;if(!V.isWebgl2){y.getExtension("WEBGL_lose_context")?.loseContext();return}const he=y.canvas;he.style.display="block",he.style.width="100%",he.style.height="100%",he.setAttribute("aria-hidden","true"),H.appendChild(he);const He=!!y.getExtension("EXT_color_buffer_float"),ze=He||!!y.getExtension("EXT_color_buffer_half_float"),Xe=ze?1:.25,Ve=new $s(y),oe=new qe(y),we=rr(),Ae=new si(y,{width:1,height:1,depth:!1,type:ze?y.HALF_FLOAT:y.UNSIGNED_BYTE,format:y.RGBA,internalFormat:ze?y.RGBA16F:y.RGBA,minFilter:y.NEAREST,magFilter:y.NEAREST}),Fe=new Array(ht*4).fill(0),F={uCenter:{value:[0,0]},uRadius:{value:1},uDpr:{value:1},uLine:{value:.6},uTime:{value:0},uFrame:{value:0},uBins:{value:420},uStrands:{value:5},uCrackle:{value:.6},uFlares:{value:.5},uGlow:{value:.8},uHaze:{value:.7},uFill:{value:.5},uPresence:{value:0},uUnfold:{value:0},uBloom:{value:0},uInside:{value:0},uEncode:{value:Xe},uRim:{value:[1,1,1]},uRimHot:{value:[1,1,1]},uRimMid:{value:[1,1,1]},uRimDeep:{value:[1,1,1]},uSpark:{value:[1,1,1]},uSparkGlow:{value:[1,1,1]},uHazeColor:{value:[0,0,0]},uEdgeColor:{value:[0,0,0]},uHeat:{value:[0,0,0,0]},uHarmonics:{value:we.harmonics},uRates:{value:we.rates},uPhases:{value:we.phases},uFlareHarmonics:{value:we.flareHarmonics},uFlareRates:{value:we.flareRates},uFlarePhases:{value:we.flarePhases},uArcs:{value:Fe}},de={uDustTime:{value:0},uTurn:{value:[0,0]},uMotion:{value:0},uFill:F.uFill,tHome:{value:oe},tSeed:{value:oe}},j={...de,tOffset:{value:oe},uStirred:{value:0},uCenter:F.uCenter,uViewport:{value:[1,1]},uRadius:F.uRadius,uDpr:F.uDpr,uDepth:{value:.6},uTwinkle:{value:.5},uPointScale:{value:1},uReveal:{value:0},uEncode:{value:Xe},uTones:{value:new Array(15).fill(1)},uRimTone:{value:[1,1,1]},uShape:{value:0}},Z={...de,tOffset:{value:oe},tVelocity:{value:oe},uDt:{value:.016},uReset:{value:1},uBrush:{value:[0,0,0,0]},uBrushPower:{value:0},uKick:{value:[0,0,0,0]}},mt={tScene:{value:Ae.texture},uLight:{value:0},uDecode:{value:1/Xe}},xt=S=>(S.setBlendFunc(y.ONE,y.ONE),S),gi=new Oe(y,{geometry:Ve,program:xt(new Ne(y,{vertex:ct,fragment:ar,uniforms:F,transparent:!0,depthTest:!1,depthWrite:!1}))}),mi=xt(new Ne(y,{vertex:lr,fragment:hr,uniforms:j,transparent:!0,depthTest:!1,depthWrite:!1})),ce=ze?new Oe(y,{geometry:Ve,program:new Ne(y,{vertex:ct,fragment:or,uniforms:Z,depthTest:!1,depthWrite:!1})}):null,xi=new Oe(y,{geometry:Ve,program:new Ne(y,{vertex:ct,fragment:cr,uniforms:mt,depthTest:!1,depthWrite:!1})}),We=S=>{S&&(y.deleteFramebuffer(S.buffer),S.textures.forEach(v=>y.deleteTexture(v.texture)))},vt=S=>new si(y,{width:fe,height:S,color:2,depth:!1,type:He?y.FLOAT:y.HALF_FLOAT,format:y.RGBA,internalFormat:He?y.RGBA32F:y.RGBA16F,minFilter:y.NEAREST,magFilter:y.NEAREST}),Et=(S,v)=>new qe(y,{image:S,width:fe,height:v,type:y.FLOAT,format:y.RGBA,internalFormat:y.RGBA32F,minFilter:y.NEAREST,magFilter:y.NEAREST,generateMipmaps:!1,flipY:!1});let B=null;const wt=()=>{B&&(B.mesh.geometry.remove(),y.deleteTexture(B.home.texture),y.deleteTexture(B.seed.texture),We(B.read),We(B.write),B=null)},yt=()=>{!ce||!B||!B.read||!B.write||(Z.tOffset.value=oe,Z.tVelocity.value=oe,Z.uReset.value=1,V.render({scene:ce,target:B.read,clear:!1}),V.render({scene:ce,target:B.write,clear:!1}),Z.uReset.value=0)},vi=S=>{const v=P(Math.round(S/100)*100,0,Zs);if(B&&B.requested===v)return;if(wt(),!v){B=null;return}const _=nr(v),$=new Float32Array(_.count);for(let ie=0;ie<_.count;ie++)$[ie]=ie;const Y=new oi(y,{aIndex:{size:1,data:$}});B={requested:v,rows:_.rows,home:Et(_.home,_.rows),seed:Et(_.seed,_.rows),mesh:new Oe(y,{mode:y.POINTS,geometry:Y,program:mi}),read:ce?vt(_.rows):null,write:ce?vt(_.rows):null},de.tHome.value=B.home,de.tSeed.value=B.seed,yt(),pe=0},Pe=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches??!1,W=pt(913);let re=1,ne=1,Se=0,$e=performance.now(),Ye=0,Mt=0,je=0,ae=0,Le=!0,Ze=!0,te=0,pe=0,Ke=0,ge=null,Qe=.3;const me=[],U={x:0,y:0,inside:!1,fresh:!0},C={angle:0,velocity:0,power:0,near:0},N={x:0,y:0,vx:0,vy:0},G={x:0,y:0,vx:0,vy:0},Tt=()=>{re=Math.max(1,H.clientWidth),ne=Math.max(1,H.clientHeight),V.dpr=Math.min(window.devicePixelRatio||1,2,Math.sqrt(Ks/(re*ne))),V.setSize(re,ne),Ae.setSize(y.canvas.width,y.canvas.height),xe()},Je=(S,v)=>{me.length>=ht||me.push({start:S,span:(.05+W()*.07)*(W()<.5?-1:1),curl:.02+W()*.04,life:0,duration:.2+W()*.2,drift:(W()-.5)*.3,strength:v})},bt=S=>{if(Se=0,!Ze)return;const v=z.current,_=Math.min(.05,Math.max(1/240,(S-$e)/1e3));if($e=S,!v)return;const $=!v.paused&&!Pe;ae=v.intro&&!Pe?Math.min(1,ae+_/Qs):1;const Y=ni(le(0,.42,ae)),ie=ni(le(0,.32,ae)),et=Math.sin(Math.PI*le(.22,.78,ae))*.35,K=Math.max(8,P(v.size,.1,1.5)*Math.min(re,ne)/2),ye=v.interactive&&!Pe?P(v.hoverStrength,0,1):0,Be=U.x-re/2,Ie=ne/2-U.y,Ei=Math.hypot(Be,Ie),tt=U.inside?ye:0;C.power<.02&&(C.angle=Math.atan2(Ie,Be),C.velocity=0);const wi=ai(Math.atan2(Ie,Be)-C.angle);C.velocity+=(120*wi-19*C.velocity)*_,C.angle=ai(C.angle+C.velocity*_),C.power+=(tt-C.power)*(1-Math.exp(-_/(tt>C.power?.3:.55)));const yi=Math.exp(-Math.pow((Ei-K)/(K*.45),2));C.near+=(yi-C.near)*(1-Math.exp(-_/.15)),te*=Math.exp(-_/.7);const Me=Be/K,Te=Ie/K;Math.hypot(Me-N.x,Te-N.y)>.6&&(U.fresh=!0),U.fresh&&(N.x=Me,N.y=Te,N.vx=0,N.vy=0,U.fresh=!1);const Pt=1-Math.exp(-_/.05);N.vx+=((Me-N.x)/_-N.vx)*Pt,N.vy+=((Te-N.y)/_-N.vy)*Pt,N.x=Me,N.y=Te;const it=Math.hypot(N.vx,N.vy),Lt=it>4?4/it:1,Mi=Math.exp(-Math.max(0,Math.hypot(Me,Te)-1)*6),kt=U.inside?ye*Mi*Y:0;if(Ke=Ke*Math.exp(-_/1.2)+kt*Math.min(it,4)*_,$){const Q=1+te*.6+C.power*C.near*.3,q=_*Math.max(0,v.speed)*2*Q;Ye+=q,Mt+=_*Math.max(0,v.dustSpeed)*(1+te*.4),je+=_*Math.max(0,v.dustSpeed);const bi=P(v.crackle+te*.5,0,1.5);if(v.sparks>.01&&ae>.55&&(Qe-=q*v.sparks*2*(.6+bi*.6),Qe<=0)){const ve=C.power*C.near,Ee=W()<ve*.7?C.angle+(W()-.5)*.8:W()<.7?Math.PI/2+(W()-.5)*1.5:W()*Math.PI*2;Je(Ee,.8+ve*.6+te*.4),Qe=.15+W()*.6}for(let ve=me.length-1;ve>=0;ve--){const Ee=me[ve];Ee.life+=q,Ee.start+=Ee.drift*q,Ee.life>=Ee.duration&&me.splice(ve,1)}}else me.length=0;for(let Q=0;Q<ht;Q++){const q=me[Q];Fe[Q*4]=q?q.start:0,Fe[Q*4+1]=q?q.span:0,Fe[Q*4+2]=q?q.curl:0,Fe[Q*4+3]=q?Math.sin(Math.PI*q.life/q.duration)*q.strength:0}vi(v.particleCount);const se=v.palette;F.uCenter.value=[re/2,ne/2],F.uRadius.value=K,F.uDpr.value=V.dpr,F.uLine.value=Math.max(.6,K*.0035),F.uTime.value=Ye,F.uFrame.value=Math.floor(Ye*24)%1e5,F.uBins.value=P(Math.round(Math.PI*2*K/2.6),240,900),F.uStrands.value=Math.round(P(v.strands,1,di)),F.uCrackle.value=P(v.crackle,0,1)+te*.5+et,F.uFlares.value=P(v.flares,0,1),F.uGlow.value=P(v.glow,0,2)*(1+te*.5+et)*(v.light?.35:1),F.uHaze.value=P(v.haze,0,2)*(v.light?.6:1),F.uFill.value=P(v.fill,0,1),F.uPresence.value=Y,F.uUnfold.value=ie,F.uBloom.value=Y*Y,F.uInside.value=le(.2,.95,ae),F.uRim.value=se.rim,F.uRimHot.value=se.rimHot,F.uRimMid.value=se.rimMid,F.uRimDeep.value=se.rimDeep,F.uSpark.value=se.spark,F.uSparkGlow.value=se.sparkGlow,F.uHazeColor.value=se.haze,F.uEdgeColor.value=se.edge,F.uHeat.value=[C.angle,C.near,C.power*Y,0],de.uDustTime.value=Mt;const Bt=U.inside?ye*Y:0,It=P(Me,-1.6,1.6)*Bt,Nt=P(Te,-1.6,1.6)*Bt;G.vx+=(40*(It-G.x)-11*G.vx)*_,G.vy+=(40*(Nt-G.y)-11*G.vy)*_,G.x+=G.vx*_,G.y+=G.vy*_;const Ot=P(v.sway,0,1);de.uTurn.value=[Ot*.42*Math.sin(je*.23)+G.x*.3,Ot*.12*Math.sin(je*.17+1.3)-G.y*.16],de.uMotion.value=Ys[v.motion]??0,j.uViewport.value=[re,ne],j.uDepth.value=P(v.depth,0,1),j.uTwinkle.value=P(v.twinkle,0,1),j.uPointScale.value=Math.max(1,K/491),j.uReveal.value=le(.18,1,ae),j.uTones.value=se.tones.flat(),j.uRimTone.value=se.rim,j.uShape.value=js[v.particleShape]??0;const X=B;X&&ce&&(Ke>.002||ge)&&(pe=Js);let st=!1;if(X&&X.read&&X.write&&ce&&pe>0){Z.uDt.value=Math.min(_,1/30),Z.uBrush.value=[N.x,N.y,N.vx*Lt,N.vy*Lt],Z.uBrushPower.value=kt,Z.uKick.value=ge?[ge.x,ge.y,ge.strength,0]:[0,0,0,0],Z.tOffset.value=X.read.textures[0],Z.tVelocity.value=X.read.textures[1],V.render({scene:ce,target:X.write,clear:!1});const Q=X.read;X.read=X.write,X.write=Q,pe-=_,st=pe>0,st||(pe=0,yt())}ge=null,j.uStirred.value=st?1:0,j.tOffset.value=X&&X.read?X.read.textures[0]:oe,y.clearColor(0,0,0,0),V.render({scene:gi,target:Ae,clear:!0}),B&&V.render({scene:B.mesh,target:Ae,clear:!1}),mt.uLight.value=v.light?1:0,V.render({scene:xi,clear:!1});const Ti=Math.abs(tt-C.power)>.002||te>.002||pe>0||Math.abs(C.velocity)>.01||Math.hypot(G.vx,G.vy,G.x-It,G.y-Nt)>.001;Le&&($||ae<1||Ti)&&(Se=requestAnimationFrame(bt))},xe=()=>{Se||!Le||!Ze||($e=performance.now(),Se=requestAnimationFrame(bt))},_t=S=>{const v=H.getBoundingClientRect(),_=S.clientX-v.left,$=S.clientY-v.top;return{x:_,y:$,inside:_>=0&&$>=0&&_<=v.width&&$<=v.height}},Rt=S=>{const v=_t(S);v.inside&&!U.inside&&(U.fresh=!0),U.x=v.x,U.y=v.y,U.inside=v.inside,v.inside&&xe()},At=S=>{const v=z.current,_=_t(S);if(!v||!v.interactive||Pe||!_.inside)return;U.inside||(U.fresh=!0),U.x=_.x,U.y=_.y,U.inside=!0;const $=Math.max(8,P(v.size,.1,1.5)*Math.min(re,ne)/2),Y=(_.x-re/2)/$,ie=(ne/2-_.y)/$;if(Math.hypot(Y,ie)>1.3)return;const K=P(v.hoverStrength,0,1);ge={x:Y,y:ie,strength:K*1.2},te=Math.max(te,K);const ye=Math.atan2(ie,Y);Je(ye+(W()-.5)*.5,1.3),Je(ye+Math.PI+(W()-.5)*1.2,1.1),xe()},ke=()=>{U.inside=!1,xe()},Ft=S=>{S.relatedTarget||ke()},St=S=>{S.pointerType==="touch"&&ke()},Ct=()=>{document.hidden||xe()};window.addEventListener("pointermove",Rt,{passive:!0}),window.addEventListener("pointerdown",At,{passive:!0}),window.addEventListener("pointerout",Ft,{passive:!0}),window.addEventListener("pointerup",St,{passive:!0}),window.addEventListener("blur",ke),document.addEventListener("visibilitychange",Ct);const Dt=new ResizeObserver(Tt);Dt.observe(H);const zt=new IntersectionObserver(([S])=>{Le=S.isIntersecting,xe()});return zt.observe(H),L.current=xe,Tt(),()=>{Ze=!1,Le=!1,cancelAnimationFrame(Se),Dt.disconnect(),zt.disconnect(),window.removeEventListener("pointermove",Rt),window.removeEventListener("pointerdown",At),window.removeEventListener("pointerout",Ft),window.removeEventListener("pointerup",St),window.removeEventListener("blur",ke),document.removeEventListener("visibilitychange",Ct),L.current=null,wt(),We(Ae),y.getExtension("WEBGL_lose_context")?.loseContext(),he.parentNode&&he.parentNode.removeChild(he)}},[]),_i.jsx("div",{ref:I,className:`crystalized-ball ${D}`.trim(),style:O})};export{ur as default};
