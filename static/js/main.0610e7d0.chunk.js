(this["webpackJsonpeuclidean-sequencer"]=this["webpackJsonpeuclidean-sequencer"]||[]).push([[0],{45:function(e,t,n){},46:function(e,t,n){},82:function(e,t,n){"use strict";n.r(t);for(var a=n(5),r=n.n(a),s=n(38),c=n.n(s),i=(n(45),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,83)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),s(e),c(e)}))}),o=(n(46),n(2)),u=function(){return Object(o.jsxs)("nav",{className:"navbar",children:[Object(o.jsx)("h1",{className:"title-header",style:{fontSize:"2rem"},children:"The Euclidean Sequencer"}),Object(o.jsx)("div",{className:"links",children:Object(o.jsx)("a",{rel:"noopener noreferrer",style:{color:"white",backgroundColor:"#f1356d",borderRadius:"8px"},href:"https://github.com/Poliuti/Euclidean-Sequencer-ACTAM/blob/main/README.md",target:"_blank",children:"About"})})]})},l=n(15),m=n(10),d=function(){return Object(o.jsxs)("div",{className:"not-found",children:[Object(o.jsx)("h1",{style:{fontSize:"2rem"},children:"Sorry"}),Object(o.jsx)("h1",{style:{fontSize:"2rem"},children:"That page cannot be found"}),Object(o.jsx)(l.b,{to:"/",style:{fontSize:"2rem"},children:"Back to the HomePage.."})]})},h=function(){return Object(o.jsx)("nav",{className:"SideBar",children:Object(o.jsxs)("div",{className:"home-links",children:[Object(o.jsx)(l.b,{to:"/",id:"Custom",children:"Custom"}),Object(o.jsx)(l.b,{to:"/africa",id:"Africa",children:"Africa"}),Object(o.jsx)(l.b,{to:"/latinamerica",id:"Latin-America",children:"Latin America"}),Object(o.jsx)(l.b,{to:"/europe",id:"Europe",children:"Europe"}),Object(o.jsx)(l.b,{to:"/asia",id:"Asia",children:"Asia"})]})})},b=n(7),j=n(6),p=new j.d({decay:.5,wet:.2,preDelay:.01}).toDestination(),f=new j.c({frequency:2e4,type:"lowpass",rolloff:-48}),v=function(e,t,n){var a=new j.e({urls:{A1:"".concat(e)},onload:function(){console.log("LOADED")}}),r=new j.a({pan:t,volume:n,mute:!1,solo:!1});return{sampler:a=a.chain(r,f,p),channel:r}},O=[n.p+"static/media/Kick.44510b06.wav",n.p+"static/media/Snare.88c148fe.wav",n.p+"static/media/Hat.588f9596.wav",n.p+"static/media/Hat2.8f04db85.wav"],w=[n.p+"static/media/OMT_OneManTribeSounds_DjembeBass.1dca61cf.wav",n.p+"static/media/Perc_Clap6.e42d73f6.wav",n.p+"static/media/Perc5.05bb7e75.wav",n.p+"static/media/Tamb.7ef95c13.wav"],x=[n.p+"static/media/Low5.39594f49.wav",n.p+"static/media/Perc_Clap3.0d5bad26.wav",n.p+"static/media/DHOLAK_INDIA.9a3e3521.wav",n.p+"static/media/sample4.a7685372.wav"],g=[n.p+"static/media/Low7.c4a24416.wav",n.p+"static/media/Perc_Clap3.0d5bad26.wav",n.p+"static/media/Perc5.05bb7e75.wav",n.p+"static/media/Hat5.08adcc6e.wav"],y=[O,w,[n.p+"static/media/Perc4.56bb74d6.wav",n.p+"static/media/Clap6.a7e02e5b.wav",n.p+"static/media/latin13.495cdc5f.wav",n.p+"static/media/sample6.864986c2.wav"],g,x],A=y.map((function(e){return e.length})),C=[],N=[],S=0;S<y.length;S++)C.push([]),N.push([]);for(var D=0;D<y.length;D++)for(var P=0;P<y[D].length;P++){var T=v(y[D][P],.2*Math.pow(-1,P)*P,-2-1*P),R=T.sampler,L=T.channel;C[D].push(R),N[D].push(L)}var k=function(e,t,n,a,r,s){var c=[],i=r;return e.forEach((function(e,o){var u=s[o];c.push(new j.f((function(n,c){i[o]%=e.length,s.map((function(e){return e.solo})).includes(!0)?!1===u.mute&&!0===u.solo&&1===c&&"started"===j.g.state&&a[o].triggerAttackRelease(t[o],"8n",n):!1===u.mute&&1===c&&"started"===j.g.state&&a[o].triggerAttackRelease(t[o],"8n",n);var l=document.getElementById("".concat(o).concat(i[o]));if(l){var m=l.style.backgroundColor,d=l.style.width;"started"===j.g.state&&(l.style.backgroundColor="white",l.style.height="20px",l.style.width="20px",j.g.scheduleOnce((function(){l.style.backgroundColor=m,l.style.height=d,l.style.width=d}),"+0.006"),i[o]++)}else i=r}),e,n[o]))})),c},B=n(0),M=n(1);Array.prototype.rotate=function(){var e=Array.prototype.push,t=Array.prototype.splice;return function(n){var a=this.length>>>0;return n=((n=n>>0)%a+a)%a,e.apply(this,t.call(this,0,n)),this}}();var E=function(e,t,n){if(e=Math.round(e),(t=Math.round(t))>e||0===t||0===e)return new Array;var a=[],r=[],s=[],c=e-t;s.push(t);for(var i=0;r.push(Math.floor(c/s[i])),s.push(c%s[i]),c=s[i],!(s[i+=1]<=1););r.push(c),function e(t){if(t>-1){for(var n=0;n<r[t];n++)e(t-1);0!==s[t]&&e(t-2)}else-1===t?a.push(0):-2===t&&a.push(1)}(i);var o=(a=a.reverse()).indexOf(1);return 0!==o&&a.rotate(o),function(e,t,n){var a=n>e.length?n%e.length:n;return e.concat(e.splice(0,t>0?e.length-a:a))}(a,1,n)},I=function(){function e(t,n,a,r){Object(B.a)(this,e),this.numSteps=t,this.numPulses=n,this.numRotations=a,this.name=r,this.euclideanArray=E(t,n,a)}return Object(M.a)(e,[{key:"setId",value:function(e){this.id=e}},{key:"setID",value:function(e){return this.id=e,this}}]),e}(),U={custom:{traditional:[],init:[new I(8,3,0,""),new I(8,1,4,""),new I(5,2,2,""),new I(10,3,5,"")]},asia:{traditional:[new I(5,3,0,"Caturthaka"),new I(5,3,3,"Dhenki"),new I(6,5,0,"Arab York-Samai"),new I(7,4,1,"Yemeni Dar Daasa al Mutawasit"),new I(7,4,5,"Thai Dance Dramas"),new I(7,5,0,"Arab Nawakhat"),new I(8,3,1,"Burmese Rhythm"),new I(8,3,5,"Mathya-Tisra"),new I(8,5,7,"Burmese Rhythm"),new I(8,7,1,"Indonesian Rhythm 1"),new I(9,5,0,"Arab Agsag-Samai"),new I(11,3,0,"Savari Tal"),new I(11,4,0,"Dhruva Tisra"),new I(11,4,2,"Yemeni Daasa al Kbiri"),new I(11,5,0,"Hindustani Sav-ar-i Tala"),new I(12,11,11,"Omani Sot Silam Dance"),new I(13,9,1,"Bohlen-Pierce Scale Pattern"),new I(14,3,0,"Dhamar Tal"),new I(15,4,0,"Pancam Savari Tal"),new I(20,9,2,"Balzanos 20 Fold Scale"),new I(20,11,6,"Eleven-note Scale"),new I(30,19,5,"Nineteen-note Scale")],init:[new I(8,3,5,""),new I(8,1,4,""),new I(5,2,4,""),new I(14,6,7,"")]},europe:{traditional:[new I(5,2,0,"Greek Rhythm 1"),new I(5,4,0,"Greek Mirena Rhythm"),new I(5,4,2,"Greek Tik Rhythm"),new I(7,2,0,"Macedonian Lesnoto Dance"),new I(7,3,0,"Greek Rhythm 2"),new I(7,3,5,"Serbian Rhythm 1"),new I(7,3,3,"Turkish Rhythm 1"),new I(7,4,0,"Bulgarian Ruchenitza Folk Dance"),new I(7,4,3,"Greek Kalamatianos Dance"),new I(7,6,2,"Greek Pontakos"),new I(8,5,5,"Turkish Musemmen"),new I(9,4,0,"Turkish Aksak"),new I(9,4,3,"Turkish Rhythm 2"),new I(9,4,5,"Bulgarian and Greek Rhythm"),new I(9,4,7,"Bulgarian and Serbian Rhythm"),new I(9,5,5,"Turkish Nawahiid"),new I(9,7,0,"Greek Bazaragana"),new I(10,7,0,"Turkish Lenk Fahhte"),new I(11,4,5,"Serbian Rhythm 2"),new I(11,5,7,"Macedonian Kalajdzijsko Oro Dance"),new I(13,5,0,"Macedonian Rhythm 1"),new I(13,5,5,"Macedonian Rhythm 2"),new I(13,6,0,"Macedonian Mama Cone Pita Dance"),new I(13,6,9,"Macedonian Postupano Oro Dance"),new I(15,7,11,"Bulgarian Rhythm 1"),new I(16,7,13,"Yugoslavian Rhythm 1"),new I(17,7,14,"Macedonian Rhythm 3"),new I(17,8,0,"Bulgarian Rhythm 3"),new I(17,8,9,"Bulgarian Rhythm 4"),new I(18,7,0,"Bulgarian Rhythm 2"),new I(19,8,0,"Bulgarian Rhythm 5"),new I(19,8,16,"Bulgarian Rhythm 6"),new I(22,9,19,"Bulgarian Rhythm 7"),new I(23,9,0,"Bulgarian Rhythm 8"),new I(24,11,21,"Bulgarian Rhythm 9")],init:[new I(7,3,0,""),new I(8,2,2,""),new I(9,3,0,""),new I(16,4,2,"")]},africa:{traditional:[new I(3,2,2,"Hand-clapping Bantu Pattern"),new I(3,2,1,"Complementary African Rhythm"),new I(4,3,2,"Chingo Mandinka"),new I(5,2,3,"Central African Rhythm 1"),new I(8,3,2,"Ghanaian Nandon Bawaa"),new I(8,5,3,"West African Gabada"),new I(8,7,2,"Tuareg Rhythm 2"),new I(9,5,7,"South African Venda"),new I(10,3,7,"Tuareg Rhythm 1"),new I(12,5,0,"Central African Aka Pygmies Rhythm 1"),new I(12,5,4,"African Clapping Pattern"),new I(12,5,7,"Northern Zimbabwean Bemba Pattern 1"),new I(12,7,0,"Ghanaian Ashanti Rhythm"),new I(12,7,2,"Nigerian Yoruba"),new I(12,7,5,"Central African Aka Pygmies Bondo"),new I(12,7,7,"Northern Zimbabwean Bemba Pattern 2"),new I(12,7,9,"Sub-Saharan Rhythm 1"),new I(12,7,10,"Ghanaian Hand Clapping Pattern 1"),new I(14,9,12,"Algerian Tsofyan Rhythm"),new I(16,7,6,"Ghanaian Hand Clapping Pattern 2"),new I(16,9,4,"Central African Ngbaka-Maibo"),new I(16,9,6,"Central African Kachacha"),new I(16,9,11,"West and Central African Rhythm"),new I(16,9,14,"Congolese Luba Pattern"),new I(24,11,0,"Central African Aka Pygmies Rhythm 2"),new I(24,11,10,"Central African Aka Pygmies Rhythm 3"),new I(24,13,0,"Central African Aka Pygmies Rhythm 4"),new I(24,13,4,"Central African Aka Pygmies Rhythm 5")],init:[new I(17,5,0,""),new I(8,1,4,""),new I(24,9,0,""),new I(8,3,2,"")]},latinAmerica:{traditional:[new I(3,2,0,"Mexican Corn Dance"),new I(4,3,0,"Brazilian Baia\xf2 Rhythm"),new I(4,3,1,"Flamenco Rhythm"),new I(4,3,3,"Brazilian Catarete Rhythm"),new I(8,3,0,"Cuban Tresillo"),new I(8,5,0,"Cuban Cinquillo"),new I(8,5,2,"Cuban Habanera"),new I(8,5,6,"Argentinian Tango"),new I(12,5,2,"Dominican Salve Pattern"),new I(12,5,9,"Cuban Columbia Pattern 1"),new I(16,5,0,"Brazilian Bossa Nova 1"),new I(16,5,10,"Brazilian Bossa Nova 2"),new I(16,5,13,"Brazilian Bossa Nova 3"),new I(12,7,3,"Cuban Columbia Pattern 2"),new I(12,7,4,"Caribbean Tamb\xf9"),new I(16,7,0,"Brazilian Samba 1"),new I(16,7,2,"Brazilian Samba 2"),new I(16,7,10,"Brazilian Partido Alto Rhythm"),new I(16,9,0,"Cuban Rumba Palitos Rhythm")],init:[new I(10,4,0,""),new I(8,1,4,""),new I(16,5,0,""),new I(8,3,2,"")]}};Object.keys(U).forEach((function(e){Object.keys(U[e]).forEach((function(t){U[e][t]=U[e][t].map((function(e,t){return e.setId(t),e}))}))}));var F=U,q=function(e,t){for(var n=[],a=[],r=0;r<e;r++)n.push(1),a.push("8n");return{bpm:t,stepDurationModifierArray:n,stepDurationArray:a}},G=function(e,t){for(var n=q(e,t),a=[],r=0;r<e;r++)a.push(0);for(var s=[],c=0;c<e;c++)s.push("A1");return{tempoInfo:n,initPosArray:a,noteArray:s}},z=function(){j.g.swing=0,j.g.swingSubdivision="8n"},K=["rgba(70, 42, 255, 0.7)","rgba(0, 255, 231, 0.7)","rgba(125, 255, 42, 0.7)","rgba(220, 245, 0, 0.7)"],_="rgb(241, 53, 109)",V="rgba(100, 100, 100, 0.58)",H=function(e,t){e.forEach((function(e,n){var a=document.getElementById("".concat(t).concat(n));null!==a&&(a.style.backgroundColor=1===e?K[t]:V)}))},Y=Object(a.createContext)(),J=function(e){console.log("environment run");var t=G(A[e.num],140),n=t.tempoInfo,r=t.noteArray,s=t.initPosArray;Object(a.useEffect)((function(){return function(){N[e.num].forEach((function(e){e.solo=!1,e.mute=!1}))}}),[]);var c=Object(a.useState)(F[e.name].init),i=Object(b.a)(c,2),u=i[0],l=i[1],m=Object(a.useState)(n),d=Object(b.a)(m,2),h=d[0],p=d[1],f=Object(a.useState)(0),v=Object(b.a)(f,2),O=v[0],w=v[1],x=Object(a.useState)(r),g=Object(b.a)(x,2),y=g[0],S=g[1];Object(a.useEffect)((function(){z(),"suspended"!==j.h.state&&(j.g.stop(),u&&l(F[e.name].init),p(n))}),[e.name]),Object(a.useEffect)((function(){var e=setInterval((function(){L.forEach((function(e,t){H(e,t)}))}),200);return function(){return clearInterval(e)}}),[u]);var D=Object(a.useState)(0),P=Object(b.a)(D,2),T=P[0],R=P[1],L=u.map((function(e){return e.euclideanArray})),B=k(L,y,h.stepDurationArray,C[e.num],s,N[e.num]);return Object(o.jsx)(Y.Provider,{value:{unitList:u,setUnitList:l,tempo:h,setTempo:p,envDefault:F[e.name],sequencesList:B,euclideanPatternsList:L,channelList:N[e.num],initialPositionArray:s,dummy:T,setDummy:R,currentTransportState:O,setCurrentTransportState:w,chosenNotes:y,setChosenNotes:S,name:e.name},children:e.children})},W=n(3),Z=n.n(W),Q=n(8),X=n(4),$=function(e){var t=e.tempo,n=e.setTempo,r=e.color,s=Object(a.useContext)(Y),c=s.currentTransportState,i=s.setCurrentTransportState,u=s.dummy,l=s.setDummy;return Object(o.jsxs)("div",{className:"slider-base bpm-slider",children:[Object(o.jsxs)("label",{htmlFor:"bpms",children:["BPM: ",t.bpm]}),Object(o.jsx)("input",{type:"range",min:"50",step:"1",max:"230",defaultValue:t.bpm,required:!0,onChange:function(e){var a=parseInt(e.target.valueAsNumber),r=Object(X.a)(Object(X.a)({},t),{},{bpm:a});n(r)},onPointerDown:function(){"started"===j.g.state?i(1):i(0),j.g.stop()},onPointerUp:function(){c&&j.g.start(),l(u+1)},onKeyDown:function(){return j.g.stop()},onKeyUp:function(){return j.g.start()},id:"bpms",style:{"--c":"".concat(r)}})]})},ee=function(e){var t=e.transport,n=e.color,r=Object(a.useState)(0),s=Object(b.a)(r,2),c=s[0],i=s[1];return Object(o.jsxs)("div",{className:"slider-base swing-slider",children:[Object(o.jsxs)("label",{htmlFor:"swingSlider",children:["Swing: ",Math.round(100*c)," %"]}),Object(o.jsx)("input",{type:"range",defaultValue:0,min:"0",max:"100",id:"swingSlider",onChange:function(e){t.swing=parseInt(e.target.valueAsNumber)/100,i(parseInt(e.target.valueAsNumber)/100)},style:{"--c":"".concat(n)}})]})},te=function(e){var t=e.color,n=Object(a.useState)("8"),r=Object(b.a)(n,2),s=r[0],c=r[1];return Object(o.jsxs)("div",{className:"slider-base swing-subd-slider",children:[Object(o.jsxs)("label",{htmlFor:"swing-subd-slid",children:["Swing Subdivision: ","1/".concat(s)]}),Object(o.jsx)("input",{type:"range",defaultValue:"3",min:"2",max:"4",step:"1",id:"swing-subd-slid",onChange:function(e){j.g.swingSubdivision="".concat(Math.pow(2,parseInt(e.target.valueAsNumber)),"n"),c(Math.pow(2,parseInt(e.target.valueAsNumber)))},style:{"--c":"".concat(t)}})]})},ne=function(e){var t=e.tempo,n=e.setTempo,a=e.color;return Object(o.jsxs)("div",{id:"tempo-controls",children:[Object(o.jsx)($,{tempo:t,setTempo:n,color:a}),Object(o.jsx)(ee,{swingPercentage:j.g.swing,transport:j.g,color:a}),Object(o.jsx)(te,{color:a})]})},ae=function(e){var t=e.color,n=Object(a.useState)(parseInt(j.b.volume.value)),r=Object(b.a)(n,2),s=r[0],c=r[1];return Object(o.jsxs)("div",{className:"slider-base macro-volume",children:[Object(o.jsx)("input",{type:"range",min:"-70",step:"1",max:"0",defaultValue:j.b.volume.value,required:!0,onChange:function(e){j.b.volume.value=parseInt(e.target.valueAsNumber),c(parseInt(j.b.volume.value))},id:"volume",style:{"--c":"".concat(t)}}),Object(o.jsxs)("label",{htmlFor:"volume",children:["Volume: ",s," dB"]})]})},re=function(e){var t=e.color,n=Object(a.useState)(parseInt(f.frequency.value)),r=Object(b.a)(n,2),s=r[0],c=r[1];return Object(o.jsxs)("div",{className:"slider-base cutoff-slider",children:[Object(o.jsx)("input",{type:"range",min:"0",step:"10",max:"20000",defaultValue:parseInt(f.frequency.value),required:!0,onChange:function(e){f.frequency.value=e.target.valueAsNumber,c(f.frequency.value)},id:"cutoff",style:{"--c":"".concat(t)}}),Object(o.jsxs)("label",{htmlFor:"cutoff",children:["CutOff: ",Math.round(s)," Hz"]})]})},se=function(e){var t=e.reverb,n=e.color,r=Object(a.useState)(t.decay),s=Object(b.a)(r,2),c=s[0],i=s[1];return Object(o.jsxs)("div",{className:"slider-base rev-decay-slider",children:[Object(o.jsx)("input",{type:"range",min:"0.01",step:"0.1",max:"4",defaultValue:t.decay,required:!0,onChange:function(e){t.decay=Math.round(100*e.target.valueAsNumber)/100,i(Math.round(100*t.decay)/100)},id:"decay",style:{"--c":"".concat(n)}}),Object(o.jsxs)("label",{htmlFor:"decay",children:["Rev Decay: ",c," s"]})]})},ce=function(e){var t=e.reverb,n=e.color,r=Object(a.useState)(t.wet.value),s=Object(b.a)(r,2),c=s[0],i=s[1];return Object(o.jsxs)("div",{className:"slider-base rev-wet-slider",children:[Object(o.jsx)("input",{type:"range",min:"0",step:"0.01",max:"1",defaultValue:t.wet.value,required:!0,onChange:function(e){t.wet.value=Math.round(100*e.target.valueAsNumber)/100,i(Math.round(100*t.wet.value)/100)},id:"wet",style:{"--c":"".concat(n)}}),Object(o.jsxs)("label",{htmlFor:"wet",children:["Rev Wet: ",c," %"]})]})},ie=function(e){var t=e.color;return Object(o.jsxs)("div",{className:"effects-controls",children:[Object(o.jsx)(se,{reverb:p,color:t}),Object(o.jsx)(ce,{reverb:p,color:t}),Object(o.jsx)(re,{color:t})]})},oe=function(e){var t=e.color;return Object(o.jsxs)("div",{id:"macro-controls",children:[Object(o.jsx)(ae,{color:t}),Object(o.jsx)(ie,{destination:j.b,color:t})]})},ue=n(9),le=function(e){var t=e.value,n=e.max,r=e.setNumPulses,s=e.color,c=e.currentTransportState,i=e.setCurrentTransportState,u=e.dummy,l=e.setDummy,m=Object(a.useRef)(null);return Object(o.jsxs)("div",{className:"slider-pattern Pulse-slider",children:[Object(o.jsx)("input",{ref:m,required:!0,type:"range",min:"0",value:t,max:n,onPointerDown:function(){"started"===j.g.state?i(1):i(0),j.g.stop()},onPointerUp:function(){c&&j.g.start(),l(u+1)},onKeyDown:function(){return j.g.stop()},onKeyUp:function(){return j.g.start()},onChange:function(e){return t=e.target.valueAsNumber,void r(t);var t},id:"ps",style:{"--c":"".concat(s)}}),Object(o.jsxs)("label",{htmlFor:"ps",children:["Pulses: ",t]})]})},me=function(e){var t=e.value,n=e.max,r=e.setNumRotations,s=e.color,c=e.currentTransportState,i=e.setCurrentTransportState,u=e.dummy,l=e.setDummy,m=Object(a.useRef)(null);return Object(o.jsxs)("div",{className:"slider-pattern Rotate-slider",children:[Object(o.jsx)("input",{ref:m,required:!0,type:"range",min:"0",value:t,max:n,onKeyDown:function(){return j.g.stop()},onKeyUp:function(){return j.g.start()},onPointerDown:function(){"started"===j.g.state?i(1):i(0),j.g.stop()},onPointerUp:function(){c&&j.g.start(),l(u+1)},onChange:function(e){return t=e.target.valueAsNumber,void r(t);var t},id:"rs",style:{"--c":"".concat(s)}}),Object(o.jsxs)("label",{htmlFor:"rs",children:["Rotations: ",t]})]})},de=function(e){var t=e.value,n=e.setNumSteps,r=e.setNumPulses,s=e.numPulses,c=e.setNumRotations,i=e.numRotations,u=e.color,l=e.currentTransportState,m=e.setCurrentTransportState,d=e.dummy,h=e.setDummy,b=Object(a.useRef)(null);return Object(o.jsxs)("div",{className:"slider-pattern step-slider",children:[Object(o.jsx)("input",{ref:b,type:"range",min:"1",step:"1",max:"32",required:!0,onKeyDown:function(){return j.g.stop()},onKeyUp:function(){return j.g.start()},onPointerDown:function(){"started"===j.g.state?m(1):m(0),j.g.stop()},onPointerUp:function(){l&&j.g.start(),h(d+1)},value:t,onChange:function(e){return t=e.target.valueAsNumber,n(t),t<=s-1&&r(t),void(t<=i&&c(t-1));var t},style:{"--c":"".concat(u)}}),Object(o.jsxs)("label",{htmlFor:"ss",children:["Steps: ",t]})]})},he=function(){var e=Object(a.useRef)(!0);return Object(a.useEffect)((function(){e.current=!1}),[]),e.current},be=function(e){var t=e.idx,n=e.unitList,r=e.setUnitList,s=e.color,c=Object(a.useContext)(Y),i=c.currentTransportState,u=c.setCurrentTransportState,l=c.dummy,m=c.setDummy,d=Object(a.useState)(n[t].numSteps),h=Object(b.a)(d,2),j=h[0],p=h[1],f=Object(a.useState)(n[t].numPulses),v=Object(b.a)(f,2),O=v[0],w=v[1],x=Object(a.useState)(n[t].numRotations),g=Object(b.a)(x,2),y=g[0],A=g[1],C=he();return Object(a.useEffect)((function(){C||(p(n[t].numSteps),w(n[t].numPulses),A(n[t].numRotations))}),[n]),Object(a.useEffect)((function(){if(!C){var e=Object(ue.a)(n);e[t]=new I(j,O,y,"").setID(t),r(e)}}),[j,O,y]),Object(o.jsxs)("div",{className:"pattern-controls",children:[Object(o.jsx)(de,{value:j,numPulses:O,setNumSteps:p,setNumPulses:w,setNumRotations:A,numRotations:y,color:s,currentTransportState:i,setCurrentTransportState:u,dummy:l,setDummy:m}),Object(o.jsx)(le,{value:O,max:j,setNumPulses:w,color:s,currentTransportState:i,setCurrentTransportState:u,dummy:l,setDummy:m}),Object(o.jsx)(me,{value:y,max:j-1,setNumRotations:A,color:s,currentTransportState:i,setCurrentTransportState:u,dummy:l,setDummy:m})]})},je=["A-1","A#-1","B-1","C0","C#0","D0","D#0","E0","F0","F#0","G0","G#0","A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3"],pe=function(e){var t,n=e.id,r=Object(a.useContext)(Y),s=r.currentTransportState,c=r.setCurrentTransportState,i=r.chosenNotes,u=r.setChosenNotes,l=r.dummy,m=r.setDummy,d=je.indexOf(i[n])-24;return t=d>0?"+":"",Object(o.jsx)("div",{className:"pitch-slid-cont",children:Object(o.jsxs)("div",{className:"slider-pattern pitch-slider",children:[Object(o.jsx)("input",{type:"range",min:"0",step:"1",max:"48",defaultValue:"24",required:!0,onChange:function(e){var t=Object(ue.a)(i);t[n]=je[parseInt(e.target.valueAsNumber)],u(t)},onPointerDown:function(){"started"===j.g.state?c(1):c(0),j.g.stop()},onPointerUp:function(){s&&j.g.start(),m(l+1)},onKeyDown:function(){return j.g.stop()},onKeyUp:function(){return j.g.start()},id:"pitch",style:{"--c":"".concat(K[n])}}),Object(o.jsxs)("label",{htmlFor:"pitch",children:["Pitch: ",t+"".concat(je.indexOf(i[n])-24)," st"]})]})})},fe=function(e){var t=e.channel;return Object(o.jsx)("div",{className:"mute-div",children:Object(o.jsx)("button",{onClick:function(e){return(n=e.currentTarget.classList).contains("inactive")?(n.remove("inactive"),n.add("active"),j.g.pause(),t.mute=!0):(n.remove("active"),n.add("inactive"),j.g.pause(),t.mute=!1),void j.g.start();var n},className:"mute-button inactive"})})},ve=function(e){var t=e.channel,n=e.color,r=Object(a.useState)(Math.round(100*t.pan.value)/100),s=Object(b.a)(r,2),c=s[0],i=s[1];return Object(o.jsxs)("div",{className:"slider-pattern pan-slider",children:[Object(o.jsx)("input",{type:"range",min:"-1",step:"0.1",max:"1",defaultValue:t.pan.value,required:!0,onChange:function(e){return n=e.target.valueAsNumber,t.pan.value=n,void i(n);var n},id:"pan",style:{"--c":"".concat(n)}}),Object(o.jsxs)("label",{htmlFor:"pan",children:[" Pan: ",c]})]})},Oe=function(e){var t=e.channel;return Object(o.jsx)("div",{className:"solo-div",children:Object(o.jsx)("button",{onClick:function(e){return function(e,t){!1===t.solo?(t.solo=!0,e.remove("inactive"),e.add("active")):(t.solo=!1,e.remove("active"),e.add("inactive"))}(e.currentTarget.classList,t)},className:"solo-button inactive"})})},we=function(e){var t=e.channel,n=e.color,r=Object(a.useState)(parseInt(Math.round(t.volume.value))),s=Object(b.a)(r,2),c=s[0],i=s[1];return Object(o.jsxs)("div",{className:"slider-pattern volume-slider",children:[Object(o.jsx)("input",{type:"range",min:"-100",step:"1",max:"0",defaultValue:t.volume.value,required:!0,onChange:function(e){t.volume.value=e.target.valueAsNumber,i(e.target.valueAsNumber)},id:"volume",style:{"--c":"".concat(n)}}),Object(o.jsxs)("label",{htmlFor:"volume",children:["Vol: ",c," dB"]})]})},xe=function(e){var t=e.channel,n=e.color,a=e.index;return Object(o.jsxs)("div",{className:"channel-controls",children:[Object(o.jsx)(ve,{channel:t,color:n}),Object(o.jsx)(we,{channel:t,color:n}),Object(o.jsx)(pe,{id:a}),Object(o.jsxs)("div",{className:"mute_solo",children:[Object(o.jsx)(fe,{channel:t}),Object(o.jsx)(Oe,{channel:t})]})]})},ge=function(e){var t=e.tempo,n=e.setTempo,r=e.index,s=Object(a.useContext)(Y).setCurrentTransportState,c="";"32n"===t.stepDurationArray[r]&&(c="Limit_up");var i="";"2n"===t.stepDurationArray[r]&&(i="Limit_down");return Object(o.jsxs)("div",{className:"step-subd-modifier",children:[Object(o.jsx)("button",{onClick:function(e){return function(e){var a=Object(X.a)({},t);a.stepDurationModifierArray[r]<=2&&(a.stepDurationModifierArray[r]*=2,a.stepDurationArray[r]="".concat(8*a.stepDurationModifierArray[r],"n"),n(a),e.classList.contains("Limit_down")&&e.classList.remove("Limit_down")),"started"===j.g.state?s(1):s(0)}(e.currentTarget)},className:"per-due ".concat(c)}),Object(o.jsx)("button",{onClick:function(e){return function(e){var a=Object(X.a)({},t);a.stepDurationModifierArray[r]>1/4&&(a.stepDurationModifierArray[r]/=2,a.stepDurationArray[r]="".concat(8*a.stepDurationModifierArray[r],"n"),n(a),e.classList.contains("Limit_up")&&e.classList.remove("Limit_up")),"started"===j.g.state?s(1):s(0)}(e.currentTarget)},className:"diviso-due ".concat(i)}),Object(o.jsx)("h4",{children:"1 / ".concat(8*t.stepDurationModifierArray[r])})]})},ye=function(e){var t=e.channel,n=e.tempo,a=e.setTempo,r=e.index,s=e.color;return Object(o.jsxs)("div",{className:"other-controls",children:[Object(o.jsx)(xe,{channel:t,color:s,index:r}),Object(o.jsx)(ge,{tempo:n,setTempo:a,index:r})]})},Ae=n(23),Ce=n.n(Ae),Ne=function(e){var t,n=e.id,r=e.patternNames,s=e.defaultUnits,c=e.unitList,i=e.setUnitList,u=Object(a.useContext)(Y).setCurrentTransportState,l=Object(a.useState)(null),m=Object(b.a)(l,2),d=m[0],h=m[1],p=he();t=d?d.name+"   (".concat(d.numSteps,", ").concat(d.numPulses,", ").concat(d.numRotations,")"):"Select a Euclidean Pattern";return Object(a.useEffect)((function(){if(d){var e=Object(ue.a)(c);e[n]=new I(d.numSteps,d.numPulses,d.numRotations,t).setID(n),i(e)}}),[d]),Object(a.useEffect)((function(){if(!p){var e=s.find((function(e){return JSON.stringify(e.euclideanArray)===JSON.stringify(c[n].euclideanArray)}));h(e)}}),[c[n]]),Object(o.jsx)("div",{className:"drop-down-cont",children:Object(o.jsx)(Ce.a,{options:r,onChange:function(e){return function(e){"started"===j.g.state?u(1):u(0);var t=e.slice(0,e.indexOf("(")).trimEnd();s.forEach((function(e){e.name===t&&h(e)}))}(e.label)},value:t,placeholder:"Select a Euclidean Pattern"})})},Se=function(e){return e.map((function(e){return e.name+"    "+"(".concat(e.numSteps,", ").concat(e.numPulses,", ").concat(e.numRotations,")")}))},De=function(e){var t,n=e.isActive,a=e.cellIdx,r=e.radius,s=e.angle,c=e.unitIndex;s-=90,t=n?K[c]:V;var i="".concat(c).concat(a),u={position:"absolute",height:"17px",width:"17px",backgroundColor:t,borderRadius:"50%",left:"80%",top:"60%",margin:"-(25px/2)",transform:"rotate(".concat(s,"deg) translate(").concat(r,"px)")};return Object(o.jsx)("div",{style:u,className:"dot",id:i})},Pe=function(e){var t=e.unitIndex,n=e.euclideanPattern,a=360/n.length,r=[];n.forEach((function(e,t){r.push(a*t)}));return Object(o.jsx)("div",{className:"circle-container",children:n.map((function(e,n){return Object(o.jsx)("div",{children:Object(o.jsx)(De,{isActive:e,cellIdx:n,radius:100,angle:r[n],unitIndex:t})},n)}))})},Te=function(e){var t=e.unitList,n=e.setUnitList,r=e.setTempo,s=e.tempo,c=e.channelList,i=e.colors,u=e.euclideanPatternsList,l=e.envDefaultUnits,m=Object(a.useState)(Se(l)),d=Object(b.a)(m,2),h=d[0];d[1];return Object(o.jsx)("div",{className:"euclideanline-control-list",children:t.map((function(e,a){var m=i[a];return Object(o.jsxs)("div",{className:"elemento-base",children:[Object(o.jsx)(Pe,{unitIndex:a,euclideanPattern:u[a]}),Object(o.jsx)(be,{setTempo:r,tempo:s,idx:a,unit:e,setUnitList:n,unitList:t,color:m}),Object(o.jsx)(ye,{channel:c[a],tempo:s,setTempo:r,index:a,color:m}),Object(o.jsx)(Ne,{id:a,patternNames:h,defaultUnits:l,unitList:t,setUnitList:n,euclideanPatternsList:u})]},a)}))})},Re=function(e){e.forEach((function(e){e.start("+0.1")})),j.g.start("+0.1")},Le=function(e){var t=e.sequencesList,n=e.dummy,a=e.setDummy,r=he(),s=function(){var e=Object(Q.a)(Z.a.mark((function e(){return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.i();case 2:j.g.stop(),t.forEach((function(e,t){e.stop()})),a(n+1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.jsx)("div",{className:"play-button-cont",children:Object(o.jsx)("button",{className:"start-context",onMouseDown:function(){r&&s()},onMouseUp:function(){return Re(t)}})})},ke=function(e){var t=e.sequencesList,n=e.dummy,a=e.setDummy;return Object(o.jsx)("div",{className:"stop-button-cont",children:Object(o.jsx)("button",{className:"stop",onClick:function(){j.g.stop(),t.forEach((function(e){e.stop()})),a(n+1)}})})},Be=n(40),Me=n.n(Be).a.create({baseURL:"http://localhost:3006"}),Ee=function(e){var t=e.currentUnitList,n=e.userList,a=e.setUserList,r=e.tempo,s=function(){var e=Object(Q.a)(Z.a.mark((function e(){var s,c;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s={unitList:t,tempo:r},e.next=3,Me.post("/userUnitList",s);case 3:c=e.sent,a(n?[].concat(Object(ue.a)(n),[c.data]):c.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.jsx)("div",{className:"save-cont",children:Object(o.jsx)("button",{id:"saveButton",className:"save-button",onClick:s})})},Ie=function(e){var t,n=e.userList,r=e.setUnitList,s=e.setTempo,c=Object(a.useContext)(Y).setCurrentTransportState;t=n?n.map((function(e,t){return"User Patterns ".concat(t)})):["Failed"];var i;return i=t[0]?"Select a User Pattern":null,Object(o.jsx)("div",{id:"saved-dropdown",children:Object(o.jsx)(Ce.a,{options:t,onChange:function(e){return t=e.label,r(n[t.slice(t.length-1)].unitList),s(n[t.slice(t.length-1)].tempo),void("started"===j.g.state?c(1):c(0));var t},value:i,placeholder:"Nothing Saved Yet"})})},Ue=Object.keys(F).map((function(e){return F[e].traditional})).flat().sort((function(e,t){return e.numSteps-t.numSteps})),Fe=function(){var e=Object(a.useContext)(Y),t=e.unitList,n=e.setUnitList,r=e.tempo,s=e.setTempo,c=e.envDefault,i=e.sequencesList,u=e.channelList,l=e.dummy,m=e.setDummy,d=e.euclideanPatternsList,h=e.currentTransportState,p=e.name,f=function(){var e=Object(Q.a)(Z.a.mark((function e(){var t;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Me.get("/userUnitList");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){j.g.stop(),function(){var e=Object(Q.a)(Z.a.mark((function e(){var t;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f();case 2:return(t=e.sent)&&g(t),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[]);var v,O=Object(a.useState)(null),w=Object(b.a)(O,2),x=w[0],g=w[1];return Object(a.useEffect)((function(){j.g.bpm.value=r.bpm}),[r]),Object(a.useEffect)((function(){if("running"===j.h.state)return h&&i.forEach((function(e){e.start("+0.1")})),function(){i.forEach((function(e){e.stop(),e.dispose()}))}}),[i]),v="custom"===p?Ue:c.traditional,Object(o.jsxs)("div",{className:"euclidean-sequencer",children:[Object(o.jsxs)("div",{className:"General-Controls",children:[Object(o.jsx)("h2",{children:"Tempo Controls"}),Object(o.jsx)(ne,{tempo:r,setTempo:s,color:_}),Object(o.jsxs)("div",{className:"main-buttons-container",children:[Object(o.jsx)(ke,{sequencesList:i,dummy:l,setDummy:m}),Object(o.jsx)(Le,{sequencesList:i,dummy:l,setDummy:m}),Object(o.jsx)(Ee,{currentUnitList:t,userList:x,setUserList:g,tempo:r,setTempo:s})]}),Object(o.jsx)("h2",{id:"macroControls",children:"Macro Controls"}),Object(o.jsx)(oe,{color:_})]}),Object(o.jsx)(Ie,{className:"LoadDropDown",userList:x,setUnitList:n,setTempo:s}),Object(o.jsx)(Te,{unitList:t,setUnitList:n,tempo:r,setTempo:s,channelList:u,colors:K,euclideanPatternsList:d,envDefaultUnits:v})]})},qe=function(e){var t=e.envName,n=e.num,a=e.envNamePath;return Object(o.jsxs)("div",{className:"environment",children:[Object(o.jsx)("h1",{className:"env-header",children:t}),Object(o.jsx)(J,{name:a,num:n,children:Object(o.jsx)(Fe,{})})]})},Ge=["custom","africa","latinAmerica","europe","asia"],ze=["Custom","Africa","Latin America","Europe","Asia"],Ke=function(){return Object(o.jsx)(l.a,{children:Object(o.jsxs)("div",{className:"environments",children:[Object(o.jsx)(h,{}),Object(o.jsx)(m.c,{children:Ge.map((function(e,t){var n;return n="custom"===e?"/":"/".concat(e),Object(o.jsx)(m.a,{exact:!0,path:n,children:Object(o.jsx)(qe,{envName:ze[t],num:t,envNamePath:e})},t)}))})]})})};var _e=function(){return Object(o.jsx)(l.a,{children:Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(u,{}),Object(o.jsx)("div",{className:"content",children:Object(o.jsxs)(m.c,{children:[Object(o.jsx)(m.a,{path:"/",children:Object(o.jsx)(Ke,{})}),Object(o.jsx)(m.a,{path:"*",children:Object(o.jsx)(d,{})})]})})]})})};c.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(_e,{})}),document.getElementById("root")),i()}},[[82,1,2]]]);
//# sourceMappingURL=main.0610e7d0.chunk.js.map