"use strict";(self.webpackChunkcb_wallet_extension=self.webpackChunkcb_wallet_extension||[]).push([[432],{56059:(e,t,o)=>{o.d(t,{$:()=>g});var r,n=o(67294),a=o(25387),s=o(86896),c=o(67051),i=o(7107),l=o(9943),u=o(6585),d=o(74673),p=o(23991),f=o(85893);function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==o)return;var r,n,a=[],s=!0,c=!1;try{for(o=o.call(e);!(s=(r=o.next()).done)&&(a.push(r.value),!t||a.length!==t);s=!0);}catch(e){c=!0,n=e}finally{try{s||null==o.return||o.return()}finally{if(c)throw n}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return y(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);"Object"===o&&e.constructor&&(o=e.constructor.name);if("Map"===o||"Set"===o)return Array.from(e);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return y(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,r=new Array(t);o<t;o++)r[o]=e[o];return r}e=o.hmd(e),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var h="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},x="Backup.BlurText",v=(0,a.vU)({copyToClipboard:{id:"".concat(x,".copyToClipboard"),defaultMessage:"Copy to clipboard",description:"Tappable area text for user to copy seed phrase to clipboard"},copiedToClipboard:{id:"".concat(x,".copiedToClipboard"),defaultMessage:"Copied to clipboard",description:"Text to indicate that user already copied seed phrase to clipboard"}});function g(e){var t=e.text,o=e.onBlurToggle,r=b((0,n.useState)(!0),2),a=r[0],c=r[1],y=b((0,n.useState)(!1),2),h=y[0],x=y[1],g=b((0,n.useState)([0,0]),2),m=g[0],T=g[1],w=(0,s.Z)().formatMessage,M=(0,n.useRef)(null),j=(0,n.useCallback)((function(){navigator.clipboard.writeText(t),x(!0),(0,i.I4)(),setTimeout((function(){return x(!1)}),6e4)}),[t]);(0,n.useEffect)((function(){o&&o(a),M.current&&a&&clearTimeout(M.current)}),[M,a,o]);var P=(0,n.useCallback)((function(){(0,i.en)(a),c(!a),a&&(M.current=setTimeout((function(){c(!0)}),6e4))}),[a]),I=(0,n.useCallback)((function(e){Math.abs(e.clientX-m[0])+Math.abs(e.clientY-m[1])>10||P()}),[P,m]),S=(0,n.useCallback)((function(e){T([e.clientX,e.clientY])}),[T]),L=(0,n.useCallback)((function(e){"Space"===e.code&&P()}),[P]),G=h?"positive":"foreground";return(0,f.jsxs)(u.VStack,{children:[(0,f.jsx)(d.PressableOpacity,{as:"button",onMouseUp:I,onMouseDown:S,onKeyPress:L,testID:"blur-text-container",noScaleOnPress:!0,children:(0,f.jsxs)(k,{id:"blur-text-main-container",children:[(0,f.jsx)(B,{isBlur:a,children:(0,f.jsx)(p.TextBody,{as:"div",testID:"blur-text-content",color:"foregroundMuted",children:a?(0,f.jsx)("span",{className:C,children:"Save these 12 words to a password manager, or write down and store in a secure place."}):t})}),(0,f.jsx)(u.Box,{justifyContent:"flex-end",position:"absolute",bottom:"10px",right:"10px",children:(0,f.jsx)(l.Icon,{size:"s",name:a?"visibleInactive":"visibleActive",color:"foreground"})})]})}),(0,f.jsx)(d.PressableOpacity,{as:"button",onPress:j,testID:"blur-text-clipboard-copy",noScaleOnPress:!0,children:(0,f.jsxs)(u.HStack,{spacingTop:2,children:[(0,f.jsx)(l.Icon,{name:h?"circleCheckmark":"copy",color:G,size:"s"}),(0,f.jsx)(p.TextLabel1,{as:"p",spacingStart:1,children:w(h?v.copiedToClipboard:v.copyToClipboard)})]})})]})}h(g,"useState{[isBlur, setIsBlur](true)}\nuseState{[isCopied, setIsCopied](false)}\nuseState{[mouseDownPos, setMouseDownPos]([0, 0])}\nuseIntl{{\n    formatMessage\n  }}\nuseRef{activeBlurTimer}\nuseCallback{copySeed}\nuseEffect{}\nuseCallback{toggleBlur}\nuseCallback{onMouseUp}\nuseCallback{onMouseDown}\nuseCallback{onKeyPress}",(function(){return[s.Z]}));var m,T,k=(0,c.Z)("div")({name:"MainContainer",class:"mv0b4n"}),C="tmvcv37",B=(0,c.Z)("div")({name:"BlurTextContainer",class:"b1aoqoiy",vars:{"b1aoqoiy-0":[function(e){return e.isBlur?"pointer":"text"}]}});o(20361),(m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(m.register(x,"i18nKey","/workspaces/apps/extension/src/components/BlurText/BlurText.tsx"),m.register(v,"messages","/workspaces/apps/extension/src/components/BlurText/BlurText.tsx"),m.register(g,"BlurText","/workspaces/apps/extension/src/components/BlurText/BlurText.tsx"),m.register(k,"MainContainer","/workspaces/apps/extension/src/components/BlurText/BlurText.tsx"),m.register(C,"textBlur","/workspaces/apps/extension/src/components/BlurText/BlurText.tsx"),m.register(B,"BlurTextContainer","/workspaces/apps/extension/src/components/BlurText/BlurText.tsx")),(T="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&T(e)},85432:(e,t,o)=>{o.r(t),o.d(t,{RecoveryPhrase:()=>k});var r=o(67294),n=o(25387),a=o(86896),s=o(5977),c=o(56059),i=o(86617),l=o(61220),u=o(47393),d=o(6585),p=o(23991),f=o(51399);const b=()=>(0,l.useLogEventOnMount)("your_recovery_phrase.viewed",{loggingId:"ca9563a0-538d-4d0c-9a1f-71392c57498a",componentType:l.ComponentType.page});var y,h=o(85893);e=o.hmd(e),(y="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&y(e);var x,v,g="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},m="recoveryPhrase",T=(0,n.vU)({backButtonAriaLabel:{id:"".concat(m,".backButton"),defaultMessage:"Go back",description:"Aria label that tells the user they are focused on the button to return to the previous screen"},pageTitle:{id:"".concat(m,".recoveryPhraseTitle"),defaultMessage:"Your recovery phrase",description:"Title of the recovery phrase page"},pageInstructions:{id:"".concat(m,".recoveryPhraseInstructions"),defaultMessage:"Save these 12 words in a safe place. Do not share them with anyone, even Coinbase. Anyone with your recovery phrase can steal your funds",description:"instructions for the recovery phrase page"},done:{id:"".concat(m,".recoveryPageDoneButton"),defaultMessage:"Done",description:"Done button"}});function k(){var e=(0,a.Z)().formatMessage,t=(0,s.k6)(),o=(0,i.U)(),n=(0,r.useCallback)((function(){return t.push("/settings/")}),[t]),y=o.getActiveMnemonic();b();var x=(0,r.useCallback)((function(){(0,l.logEvent)("your_recovery_phrase.done_btn",{loggingId:"50e19455-4ccc-4bee-8557-90c1433ba21e",action:l.ActionType.click,componentType:l.ComponentType.button}),n()}),[n]),v=(0,r.useCallback)((function(){return t.push("/settings/showRecoveryPhrase")}),[t]);return(0,r.useEffect)((function(){y||n()}),[n,y]),y?(0,h.jsxs)(f.n,{testID:"recovery-phrase-container",spacing:2,height:"100%",justifyContent:"space-between",children:[(0,h.jsx)(d.Box,{offsetStart:1,children:(0,h.jsx)(u.IconButton,{name:"backArrow",onPress:v,transparent:!0,accessibilityLabel:e(T.backButtonAriaLabel)})}),(0,h.jsx)(d.Box,{children:(0,h.jsx)(p.TextTitle1,{as:"h3",children:e(T.pageTitle)})}),(0,h.jsx)(p.TextBody,{as:"div",color:"foregroundMuted",children:e(T.pageInstructions)}),(0,h.jsx)(d.VStack,{spacingTop:5,spacingBottom:5,children:(0,h.jsx)(c.$,{text:y})}),(0,h.jsx)(u.Button,{testID:"recovery-phrase-done-btn",block:!0,onPress:x,children:e(T.done)})]}):null}g(k,"useIntl{{ formatMessage }}\nuseHistory{history}\nuseMnemonicRepository{mnemonicRepository}\nuseCallback{handleGoBack}\nuseYourRecoveryPhraseViewed{}\nuseCallback{onDone}\nuseCallback{handlePress}\nuseEffect{}",(function(){return[a.Z,s.k6,i.U,b]})),(x="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(x.register(m,"i18nKey","/workspaces/apps/extension/src/components/RecoveryPhrase/RecoveryPhrase.tsx"),x.register(T,"messages","/workspaces/apps/extension/src/components/RecoveryPhrase/RecoveryPhrase.tsx"),x.register(k,"RecoveryPhrase","/workspaces/apps/extension/src/components/RecoveryPhrase/RecoveryPhrase.tsx")),(v="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&v(e)},20361:(e,t,o)=>{o.r(t)}}]);
//# sourceMappingURL=432.js.map