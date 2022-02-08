"use strict";(self.webpackChunkcb_wallet_extension=self.webpackChunkcb_wallet_extension||[]).push([[535],{65276:(e,t,n)=>{n.d(t,{q:()=>c,R:()=>p});var a,o=n(95026),s=n(43685),r=n(40616),i=n(23991),l=n(85893);e=n.hmd(e),(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);var c,d,u;"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;function p(e){var t=e.title,n=e.description,a=e.subtext,d=e.testID,u=e.height,p=void 0===u?"100vh":u,f=e.status,g=e.cta;return(0,l.jsxs)(r.VStack,{height:p,spacingHorizontal:2,children:[(0,l.jsxs)(r.VStack,{flexGrow:1,justifyContent:"center",alignItems:"center",children:[f===c.SUCCESS?(0,l.jsx)(s.x,{height:160,status:f}):(0,l.jsx)("img",{src:o,width:240,height:240,alt:"bigWarning"}),"string"==typeof t?(0,l.jsx)(i.TextHeadline,{testID:d,as:"h1",align:"center",children:t}):t,"string"==typeof n?(0,l.jsx)(i.TextTitle1,{testID:"".concat(d,"-description"),as:"p",color:"primary",align:"center",children:n}):n]}),"string"==typeof a?(0,l.jsx)(i.TextBody,{testID:"".concat(d,"-subtext"),as:"p",color:"foregroundMuted",align:"center",spacingBottom:2,children:a}):a,g]})}!function(e){e.SUCCESS="success",e.FAILURE="failure",e.CANCELLED="cancelled"}(c||(c={})),(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&d.register(p,"StatusAnimation","/workspaces/apps/extension/src/components/StatusAnimation/StatusAnimation.tsx"),(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&u(e)},61466:(e,t,n)=>{n.d(t,{r:()=>l});var a,o,s,r=n(67294),i=n(53521);function l(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=(0,i.I)(!1,t),a=(0,r.useMemo)((function(){if(null!=n&&n.length){var t=decodeURIComponent(e),a=n.find((function(e){return e.id===t}));return null!=a?a:n[0]}}),[e,n]);return a}e=n.hmd(e),(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e),("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e})(l,"usePortfolioWallets{wallets}\nuseMemo{wallet}",(function(){return[i.I]})),(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&o.register(l,"useSelectWallet","/workspaces/apps/extension/src/data/Wallets/hooks/useSelectWallet.tsx"),(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&s(e)},15106:(e,t,n)=>{n.r(t),n.d(t,{TxSpeedUpCancel:()=>y});var a,o,s,r=n(67294),i=n(5977),l=n(52443),c=n(62214),d=n(34291),u=n.n(d),p=n(61466),f=n(79286),g=n(5189),x=n(53200),b=n(87650),S=n(85893);function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var a,o,s=[],r=!0,i=!1;try{for(n=n.call(e);!(r=(a=n.next()).done)&&(s.push(a.value),!t||s.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{r||null==n.return||n.return()}finally{if(i)throw o}}return s}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return v(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function y(){var e=(0,i.UO)(),t=e.walletId,n=e.id,a=e.updateType,o=(0,p.r)(t),s=m((0,r.useState)(),2),d=s[0],v=s[1],y="speedup"===a,h=(0,l.o)();return(0,c.F)((function(){var e=h.getTxById(n).subscribe((function(e){e&&v(e)}));return function(){null==e||e.unsubscribe()}})),o&&d&&d.pendingTxData?(0,S.jsx)(b.cr.Provider,{onSubmit:u(),children:(0,S.jsx)(b.Ex.Provider,{children:(0,S.jsxs)(b.Ex.Steps,{children:[(0,S.jsx)(g.o,{wallet:o,transaction:d,isSpeedUp:y},"speedUpCancel"),(0,S.jsx)(f.N,{wallet:o,transaction:d,isSpeedUp:y},"adjustGasCustom"),(0,S.jsx)(x._,{isSpeedUp:y},"status")]})})}):null}e=n.hmd(e),(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e),("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e})(y,"useParams{{ walletId, id, updateType }}\nuseSelectWallet{wallet}\nuseState{[transaction, setTransaction]}\nuseTransactionHistoryRepository{txnHistoryRepository}\nuseOnMount{}",(function(){return[i.UO,p.r,l.o,c.F]})),(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&o.register(y,"TxSpeedUpCancel","/workspaces/apps/extension/src/screens/TransactionHistory/SpeedUpAndCancel/TxSpeedUpCancel.tsx"),(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&s(e)},79286:(e,t,n)=>{n.d(t,{N:()=>x});var a,o=n(67294),s=n(84322),r=n(46404),i=n(87650),l=n(63110),c=n(8491),d=n(85893);e=n.hmd(e),(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);var u,p,f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},g="0x000000000000000000000000000000000000dead";function x(e){var t,n=e.wallet,a=e.transaction,u=e.isSpeedUp,p=(0,r.tC)(i.Ex),f=p.goBack,x=p.goToStep,b=(0,c.Z)(i.cr).unsignedTxResult,S=(0,o.useCallback)((function(e){b.onChange(e),x("speedUpCancel")}),[x,b]),m=(0,l.k)(a,n);return m?(0,d.jsx)(s.C,{wallet:n,toAddress:u?a.toAddress:g,unsignedTx:null===(t=b.value)||void 0===t?void 0:t.transaction,initialFees:m,handleGenerateTx:S,nonce:a.nonce,goBack:f,flowType:u?"speedUp":"cancel"}):null}f(x,"useStepper{{ goBack, goToStep }}\nuseFields{{ unsignedTxResult }}\nuseCallback{handleGenerateTx}\nuseSpeedUpAndCancelFees{networkFeeInfo}",(function(){return[r.tC,c.Z,l.k]})),(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(u.register(g,"BURN_ADDRESS","/workspaces/apps/extension/src/screens/TransactionHistory/SpeedUpAndCancel/steps/AdjustGasCustomStep/AdjustGasCustomStep.tsx"),u.register(x,"AdjustGasCustomStep","/workspaces/apps/extension/src/screens/TransactionHistory/SpeedUpAndCancel/steps/AdjustGasCustomStep/AdjustGasCustomStep.tsx")),(p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&p(e)},5189:(e,t,n)=>{n.d(t,{o:()=>E});var a,o=n(67294),s=n(25387),r=n(86896),i=n(5977),l=n(17969),c=n(22488),d=n(84500),u=n(10316),p=n(46404),f=n(52443),g=n(50549),x=n(62214),b=n(25444),S=n(87650),m=n(63110),v=n(27025),y=n(30103),h=n(75849),C=n(83363),T=n(74088),k=n(8491),L=n(47393),H=n(9943),U=n(6585),w=n(59452),G=n(23991),I=n(85893);function j(e,t,n,a,o,s,r){try{var i=e[s](r),l=i.value}catch(e){return void n(e)}i.done?t(l):Promise.resolve(l).then(a,o)}function A(e){return function(){var t=this,n=arguments;return new Promise((function(a,o){var s=e.apply(t,n);function r(e){j(s,a,o,r,i,"next",e)}function i(e){j(s,a,o,r,i,"throw",e)}r(void 0)}))}}e=n.hmd(e),(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);var M="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},D="SpeedUpCancelStep",F="0x000000000000000000000000000000000000dead",B=(0,s.vU)({cancelNavtitle:{id:"".concat(D,".cancellationNavtitle"),description:"Navtitle for confirming cancellation ",defaultMessage:"Confirm cancellation"},speedUpNavtitle:{id:"".concat(D,".speedUpNavtitle"),description:"Navtitle for speeding up transaction",defaultMessage:"Confirm speed up"},cancelHeader:{id:"".concat(D,".cancelHeader"),description:"Header for confirming cancellation ",defaultMessage:"Cancel transaction to"},speedUpHeader:{id:"".concat(D,".speedUpHeader"),description:"Header for confirming speeding up a transaction",defaultMessage:"Speed up transaction to"},networkFeeLabel:{id:"".concat(D,".txnNetworkFeeLabel"),description:"Label for network fee",defaultMessage:"Network fee"},cancelDescription:{id:"".concat(D,".cancelDescription"),description:"Description for confirming cancellation ",defaultMessage:"Would you like to attempt to cancel this transaction? If the transaction is too far along cancellation may not be possible."},speedUpDescription:{id:"".concat(D,".speedUpDescription"),description:"Description for confirming speeding up a transaction",defaultMessage:"Would you like to attempt to speed up this transaction?  If the transaction is too far along this may not be possible."},questionMarkTooltip:{id:"".concat(D,".tooltipTextNetworkFee"),description:"Tooltip label for network fee that shows up on hovering over the question mark icon",defaultMessage:"Applies to all transactions. Not paid to Coinbase."},backButtonLabel:{id:"".concat(D,".backButtonLabel"),defaultMessage:"Back",description:"Back button label"},confirmButtonLabel:{id:"".concat(D,".confirmButtonLabel"),defaultMessage:"Confirm",description:"Confirm button label"},speedUpButtonLabel:{id:"".concat(D,".speedUpButtonLabel"),defaultMessage:"Speed up",description:"Speed up button label"}});function E(e){var t,n,a,s,j=e.wallet,M=e.transaction,D=e.isSpeedUp,E=(0,r.Z)().formatMessage,R=(0,p.tC)(S.Ex).goToStep,N=(0,i.k6)().goBack,_=(0,k.Z)(S.cr),Z=_.unsignedTxResult,O=_.txSigningError,Q=(0,v.$)().formatToFiatFeeRange,W=(0,f.o)();(0,x.F)((function(){Z.value||X()}));var q=(0,T.O)(null==M?void 0:M.blockchain,null==M?void 0:M.feeCurrencyCode,null==M?void 0:M.network);if(!q)throw new Error("No fee wallet in SpeedUpCancelStep");var z=(0,m.k)(M,j),V=null===(t=Z.value)||void 0===t?void 0:t.transaction,$=(0,o.useMemo)((function(){return V?Q(M.feeCurrencyCode,M.feeCurrencyDecimal,V.upperBoundFee,!1,V.lowerBoundFee,j.network):null==z?void 0:z.fiatRange}),[V,Q,null==z?void 0:z.fiatRange,M,j.network]),X=(0,o.useCallback)(A(regeneratorRuntime.mark((function e(){var t,n,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={kind:"Amount",value:D?M.amount:0n},e.next=3,(0,h.$)({wallet:j,amount:n,recipientAddress:D?M.toAddress:F,metadata:M.metadata.toMutableMap(),baseFeePerGas:null==z?void 0:z.baseFee,nonce:M.nonce,maxFeePerGas:null==z?void 0:z.maxFee,maxPriorityFeePerGas:null==z?void 0:z.maxPriorityFee,gasLimit:D?null==z?void 0:z.gasLimit:28000n,dataBuffer:null===(t=M.pendingTxData)||void 0===t?void 0:t.data});case 3:a=e.sent,Z.onChange(a);case 5:case"end":return e.stop()}}),e)}))),[D,z,M,Z,j]),Y=(0,o.useCallback)((function(){R("adjustGasCustom")}),[R]),K=(0,o.useCallback)((function(e){O.onChange(e),R("status")}),[O,R]),J=(0,o.useCallback)((function(){W.updateTxState(M.txHash,M.blockchain,C.Z.DROPPED).subscribe(),R("status")}),[R,M.blockchain,M.txHash,W]),ee=!D||D&&"cancel"===(null===(n=M.pendingTxData)||void 0===n?void 0:n.txSubmissionType),te=(0,b.Q)({unsignedTx:null==Z||null===(a=Z.value)||void 0===a?void 0:a.transaction,wallet:j,signSuccess:J,signError:K,txSubmissionType:ee?"cancel":"speedUp"}),ne=te.signAndSubmitStandalone,ae=te.isSignAndSubmitStandaloneLoading,oe=(0,g.W)((function(e){return e&&e.unsubscribe(),ne()}),[ne]),se=(0,u.o)({wallet:j,unsignedTx:null===(s=Z.value)||void 0===s?void 0:s.transaction,feeWallet:q}),re=(0,y.N)("adjustable_miner_fee");return(0,I.jsxs)(U.VStack,{height:"552px",children:[(0,I.jsx)(l.w,{onBack:N,title:E(D?B.speedUpNavtitle:B.cancelNavtitle)}),(0,I.jsxs)(U.VStack,{spacingHorizontal:3,children:[(0,I.jsxs)(U.VStack,{spacing:3,bordered:!0,borderRadius:"standard",elevation:1,children:[D?(0,I.jsx)(H.Icon,{testID:"speedUpHeaderIcon",name:"lightningBolt",size:"l"}):(0,I.jsx)(H.Icon,{testID:"cancelHeaderIcon",name:"close",size:"l",color:"negative",bordered:!0}),(0,I.jsx)(G.TextLabel2,{as:"p",spacingTop:1,children:E(D?B.speedUpHeader:B.cancelHeader)}),(0,I.jsx)(G.TextTitle3,{testID:"txn_to_address",as:"h4",children:M.entityDisplayName(!0)})]}),(0,I.jsxs)(U.HStack,{justifyContent:"space-between",spacingTop:3,children:[(0,I.jsxs)(U.HStack,{children:[(0,I.jsx)(G.TextBody,{as:"p",children:E(B.networkFeeLabel)}),(0,I.jsx)("div",{className:P,children:(0,I.jsx)(c.u,{content:E(B.questionMarkTooltip),placement:"bottom",children:(0,I.jsx)(H.Icon,{name:"info",size:"xs",color:"foregroundMuted"})})})]}),(0,I.jsxs)(U.HStack,{children:[(0,I.jsx)(G.TextBody,{testID:"txn_fee_range",as:"p",color:"foregroundMuted",children:null!=$?$:(0,I.jsx)(U.Fallback,{width:100,height:20})}),re&&(0,I.jsx)(w.Pressable,{testID:"adjustable_gas_entry",as:"button",onPress:Y,backgroundColor:"transparent",children:(0,I.jsx)(H.Icon,{name:"gear",size:"s",color:"foreground",spacingStart:1})})]})]}),(0,I.jsx)(G.TextBody,{testID:"speedup_cancel_description",color:"foregroundMuted",spacingTop:2,as:"p",children:E(D?B.speedUpDescription:B.cancelDescription)}),(0,I.jsxs)(U.VStack,{position:"absolute",width:"100%",spacingHorizontal:3,spacingBottom:3,bottom:0,right:0,children:[se?(0,I.jsx)(U.VStack,{spacingBottom:1,children:(0,I.jsx)(d.V,{message:se.message,isDismissible:se.isDismissible,showErrorIcon:se.showErrorIcon,analytics:se.analytics})}):void 0,(0,I.jsxs)(U.HStack,{alignItems:"flex-end",height:"100%",spacingBottom:2,gap:2,spacingTop:1,children:[(0,I.jsx)(L.Button,{testID:"back_button",block:!0,onPress:N,variant:"secondary",children:E(B.backButtonLabel)}),(0,I.jsx)(L.Button,{onPress:oe,block:!0,variant:D?"primary":"negative",disabled:!!ae||(null==se?void 0:se.isDisabled),loading:!!ae,testID:"speedup_cancel_button",children:E(D?B.speedUpButtonLabel:B.confirmButtonLabel)})]})]})]})]})}M(E,"useIntl{{\n    formatMessage\n  }}\nuseStepper{{\n    goToStep\n  }}\nuseHistory{{\n    goBack\n  }}\nuseFields{{\n    unsignedTxResult,\n    txSigningError\n  }}\nuseCurrencyFormatter{{\n    formatToFiatFeeRange\n  }}\nuseTransactionHistoryRepository{txHistoryRepository}\nuseOnMount{}\nuseWallet{feeWallet}\nuseSpeedUpAndCancelFees{networkFeeInfo}\nuseMemo{feeFiatRange}\nuseCallback{generateUnsigned1559Tx}\nuseCallback{handleCustomGas}\nuseCallback{handleError}\nuseCallback{handleSuccess}\nuseSignAndSubmitStandalone{{\n    signAndSubmitStandalone,\n    isSignAndSubmitStandaloneLoading\n  }}\nuseObservableCallback{handleOnSend}\nuseTransactionDetailsErrors{transactionDetailsErrors}\nuseIsFeatureEnabled{isAdjustableGasEnabled}",(function(){return[r.Z,p.tC,i.k6,k.Z,v.$,f.o,x.F,T.O,m.k,b.Q,g.W,u.o,y.N]}));var R,N,P="qksfa46";n(27978),(R="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(R.register(D,"i18nKey","/workspaces/apps/extension/src/screens/TransactionHistory/SpeedUpAndCancel/steps/SpeedUpCancelStep/SpeedUpCancelStep.tsx"),R.register(F,"BURN_ADDRESS","/workspaces/apps/extension/src/screens/TransactionHistory/SpeedUpAndCancel/steps/SpeedUpCancelStep/SpeedUpCancelStep.tsx"),R.register(B,"messages","/workspaces/apps/extension/src/screens/TransactionHistory/SpeedUpAndCancel/steps/SpeedUpCancelStep/SpeedUpCancelStep.tsx"),R.register(E,"SpeedUpCancelStep","/workspaces/apps/extension/src/screens/TransactionHistory/SpeedUpAndCancel/steps/SpeedUpCancelStep/SpeedUpCancelStep.tsx"),R.register(P,"questionMarkIcon","/workspaces/apps/extension/src/screens/TransactionHistory/SpeedUpAndCancel/steps/SpeedUpCancelStep/SpeedUpCancelStep.tsx")),(N="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&N(e)},53200:(e,t,n)=>{n.d(t,{_:()=>H});var a,o=n(67294),s=n(25387),r=n(86896),i=n(5977),l=n(65276),c=n(46404),d=n(62214),u=n(28209),p=n(87650),f=n(22558),g=n(8491),x=n(10188),b=n(6585),S=n(23991),m=n(85893);e=n.hmd(e),(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);var v,y,h="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},C="send.steps.StatusStep",T=(0,s.vU)({speedUpSuccessful:{id:"".concat(C,".speedUpSuccessful"),defaultMessage:"Successfully initiated a speedup",description:"Label text to tell the user they successfully initiated their speedup transaction"},speedUpFailed:{id:"".concat(C,".speedUpFailed"),defaultMessage:"SpeedUp failed",description:"Label text to let the user know that their speedup failed"},cancelSuccessful:{id:"".concat(C,".cancelSuccessful"),defaultMessage:"Transaction cancellation initiated",description:"Label text to let the user know that cancellation transaction is initiated by the user"},cancelFailed:{id:"".concat(C,".cancelFailed"),defaultMessage:"Cancel failed",description:"Label text to let the user know that cancel transaction is failed"},tryAgainBtnText:{id:"".concat(C,".tryAgainBtnText"),defaultMessage:"Try again",description:"CTA label for try again button"},pleaseTryAgain:{id:"".concat(C,".pleaseTryAgain"),defaultMessage:"Please try again",description:"Tells the user to try their crypto send again"},goBackHomeBtnText:{id:"".concat(C,".goBackHomeBtnText"),defaultMessage:"Go back home",description:"CTA label for go back home button"},originalTxnCompleted:{id:"".concat(C,".originalTxnCompleted"),defaultMessage:"Original transaction successful",description:"Failure status description for completed original transaction"}}),k=[l.q.CANCELLED,l.q.FAILURE];function L(e){var t=e.hideTryAgain,n=void 0!==t&&t,a=e.tryAgain,o=e.goBackHome,s=(0,r.Z)().formatMessage;return(0,m.jsxs)(b.VStack,{gap:2,spacingBottom:4,children:[n?null:(0,m.jsx)(x.Button,{testID:"try_again_button",onPress:a,block:!0,variant:"primary",children:s(T.tryAgainBtnText)}),(0,m.jsx)(x.Button,{testID:"go_back_home_button",onPress:o,block:!0,variant:"secondary",children:s(T.goBackHomeBtnText)})]})}function H(e){var t,n,a=e.isSpeedUp,s=(0,r.Z)().formatMessage,x=(0,g.Z)(p.cr).txSigningError,b=(0,i.k6)().replace,v=(0,c.tC)(p.Ex).goToStep;(0,d.F)((function(){var e=setTimeout((function(){x.value||b(u.Xv.TRANSACTIONS)}),5e3);return function(){return clearTimeout(e)}}));var y=(0,o.useMemo)((function(){return x.value?l.q.FAILURE:l.q.SUCCESS}),[x.value]),h=(0,o.useMemo)((function(){switch(y){case l.q.SUCCESS:return s(a?T.speedUpSuccessful:T.cancelSuccessful);case l.q.FAILURE:return s(a?T.speedUpFailed:T.cancelFailed);default:throw new Error("got unexpected status")}}),[y,s,a]),C=(0,o.useCallback)((function(){x.onChange(void 0),v("speedUpCancel")}),[v,x]),H=(0,o.useCallback)((function(){b(u.Xv.PORTFOLIO)}),[b]),U="nonce too low"===(null==x||null===(t=x.value)||void 0===t?void 0:t.message),w=(0,o.useMemo)((function(){var e;return y===l.q.FAILURE?(0,m.jsx)(S.TextBody,{testID:"error_description",as:"p",align:"center",children:U?s(T.originalTxnCompleted):(null==x||null===(e=x.value)||void 0===e?void 0:e.message)||s(T.pleaseTryAgain)}):null}),[y,null==x||null===(n=x.value)||void 0===n?void 0:n.message,s,U]);return(0,m.jsx)(l.R,{testID:"status_animation",status:y,title:h,description:w,height:f.UV,cta:k.includes(y)?(0,m.jsx)(L,{hideTryAgain:U,tryAgain:C,goBackHome:H}):null})}h(L,"useIntl{{ formatMessage }}",(function(){return[r.Z]})),h(H,"useIntl{{ formatMessage }}\nuseFields{{ txSigningError }}\nuseHistory{{ replace }}\nuseStepper{{ goToStep }}\nuseOnMount{}\nuseMemo{status}\nuseMemo{title}\nuseCallback{handleTryAgain}\nuseCallback{handleGoBackhome}\nuseMemo{description}",(function(){return[r.Z,g.Z,i.k6,c.tC,d.F]})),(v="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(v.register(C,"i18nKey","/workspaces/apps/extension/src/screens/TransactionHistory/SpeedUpAndCancel/steps/StatusStep/StatusStep.tsx"),v.register(T,"messages","/workspaces/apps/extension/src/screens/TransactionHistory/SpeedUpAndCancel/steps/StatusStep/StatusStep.tsx"),v.register(k,"failedStatuses","/workspaces/apps/extension/src/screens/TransactionHistory/SpeedUpAndCancel/steps/StatusStep/StatusStep.tsx"),v.register(L,"CancelledTxCTAButtonGroup","/workspaces/apps/extension/src/screens/TransactionHistory/SpeedUpAndCancel/steps/StatusStep/StatusStep.tsx"),v.register(H,"StatusStep","/workspaces/apps/extension/src/screens/TransactionHistory/SpeedUpAndCancel/steps/StatusStep/StatusStep.tsx")),(y="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&y(e)},27978:(e,t,n)=>{n.r(t)},87650:(e,t,n)=>{n.d(t,{Ex:()=>s,cr:()=>i});var a=n(46404),o=n(92922);const s=(0,a.vj)({steps:["speedUpCancel","adjustGasCustom","status"],defaultStep:"speedUpCancel"}),r={wallet:void 0,unsignedTxResult:void 0,prevTransaction:void 0,customGas:!1,signedTx:void 0,txSigningError:void 0},i=(0,o.Z)({initialValues:r})},63110:(e,t,n)=>{n.d(t,{k:()=>i});var a=n(45439),o=n(27025);const s=BigInt(1e9),r=(e,t)=>e>t?e:t;function i(e,t){const n=(0,a.T)(e.pendingTxData.gasLimit,t.network),{formatToFiatFeeRange:i,formatToCryptoRange:l}=(0,o.$)();if(!e||!e.pendingTxData||!n)return;const c=e.pendingTxData.gasLimit,d=e.pendingTxData.baseFeePerGas,u=e.pendingTxData.maxFeePerGas,p=e.pendingTxData.maxPriorityFeePerGas,f=n?.normal.baseFeePerGas,g=n?.normal.maxFeePerGas,x=n?.normal.maxPriorityFeePerGas;let b=s;f<=d&&(b=5n*s);const S=p+b,m=r(g,u+b),v=r(x,S),y=(f+v)*c,h=m*c,C=i(e.feeCurrencyCode,e.feeCurrencyDecimal,h,!1,y,t.network);if(!C)throw Error("No fiat fee range defined.");const T=l(e.feeCurrencyCode,e.feeCurrencyDecimal,y,h);if(!T)throw Error("No crypto fee range defined.");return{gasLimit:c,maxFee:m,maxPriorityFee:v,baseFee:f,fiatRange:C,cryptoRange:T}}},95026:e=>{e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNDAgMjQwIj48cGF0aCBmaWxsPSIjRkZBRTI0IiBkPSJNMTE5LjUgMTY4YzI2LjUxIDAgNDgtMjEuNDkgNDgtNDhzLTIxLjQ5LTQ4LTQ4LTQ4LTQ4IDIxLjQ5LTQ4IDQ4IDIxLjQ5IDQ4IDQ4IDQ4eiIvPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMjEuNSAxMzRoLTR2Nmg0di02em0wLTM0aC00djI4aDR2LTI4eiIvPjwvc3ZnPg=="}}]);
//# sourceMappingURL=535.js.map