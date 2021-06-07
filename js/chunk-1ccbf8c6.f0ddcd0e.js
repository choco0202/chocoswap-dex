(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1ccbf8c6"],{"09ad":function(t,e,r){},"2b92":function(t,e,r){"use strict";r("09ad")},4680:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("Mining")],1)},n=[],s=r("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",[a("div",{staticClass:"text-h4 accent--text mt-8 mb-4"},[t._v(t._s(t.$t("MiningTitle")))]),a("v-card",{staticClass:"rounded-lg",attrs:{outlined:this.$vuetify.theme.dark}},[a("v-progress-linear",{directives:[{name:"show",rawName:"v-show",value:!t.isLoaded,expression:"!isLoaded"}],attrs:{indeterminate:"",color:"primary"}}),a("div",{staticClass:"px-8 py-6"},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"12",sm:"6"}},[a("div",[t._v(" "+t._s(t.$t("MiningAvailableCashOutReward")+t.withdrawableReward+" VNLA")+" ")])]),a("v-col",{attrs:{cols:"12",sm:"6"}},[a("Button",{attrs:{block:"",color:"button",label:t.$t("MiningRewardCashout"),loading:t.withdrawing,disabled:!t.authorized||!t.hasWithdrawable},on:{click:t.withdraw}})],1)],1)],1)],1),a("v-card",{staticClass:"rounded-lg mt-8",attrs:{outlined:this.$vuetify.theme.dark}},[a("v-card-text",{staticClass:"px-8 py-6"},[a("v-row",{attrs:{align:"center",justify:"start"}},t._l(t.swapList,(function(e,n){return a("v-col",{key:n,attrs:{cols:"12",sm:"12",md:"4"}},[a("v-card",{attrs:{outlined:"",ripple:""},on:{click:function(r){return t.redirect(e.input,e.output)}}},[a("v-card-text",[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"auto"}},[a("v-img",{attrs:{src:r("937c")("./"+e.input+".png"),contain:"",width:"20"}})],1),a("v-col",{attrs:{cols:"auto"}},[a("v-icon",[t._v("mdi-swap-horizontal")])],1),a("v-col",{attrs:{cols:"auto"}},[a("v-img",{attrs:{src:r("937c")("./"+e.output+".png"),contain:"",width:"20"}})],1)],1),a("v-row",{attrs:{align:"center",justify:"start"}},[a("v-col",{staticClass:"text-button",attrs:{cols:"auto"}},[t._v(" "+t._s(e.input+"/"+e.output)+" ")])],1),a("v-divider"),a("v-list",{staticClass:"my-0 py-0",attrs:{"two-line":""}},[a("v-list-item",{staticClass:"mx-0 px-0"},[a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(t.$t("MiningRateOfReturn")))]),a("v-list-item-subtitle",[t._v(t._s(e.aror+"%/"+e.dror+"%"))])],1)],1)],1)],1)],1)],1)})),1)],1)],1)],1),a("v-snackbar",{attrs:{vertical:""},scopedSlots:t._u([{key:"action",fn:function(e){var r=e.attrs;return[a("v-btn",t._b({attrs:{color:"pink",text:""},on:{click:function(e){t.snackbar=!1}}},"v-btn",r,!1),[t._v(" "+t._s(t.$t("SwapSnackbarClose"))+" ")]),""===t.snackbarText?a("v-btn",{attrs:{color:"pink",text:"",href:"https://hecoinfo.com/tx/"+t.snackbarTx,target:"_blank"}}):t._e()]}}]),model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v(" "+t._s(t.snackbarText)+" ")])],1)},o=[],c=r("1da1"),u=r("5530"),d=(r("b64b"),r("d3b7"),r("25f0"),r("99af"),r("fb6a"),r("ddb0"),r("96cf"),r("2f62")),l=r("e87b"),p=r("8f12"),w=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-btn",t._g(t._b({staticClass:"transition-swing black--text text-button font-weight-bold",attrs:{color:"primary",block:"",elevation:"1",loading:t.loading,disabled:t.disabled||t.loading},scopedSlots:t._u([{key:"loader",fn:function(){return[r("span",{staticClass:"loader"},[r("v-icon",[t._v(t._s(t.icon))])],1),t._v(" "+t._s(t.label)+" ")]},proxy:!0}])},"v-btn",t.$attrs,!1),t.$listeners),[t._v(" "+t._s(t.label)+" ")])},b=[],v=s["a"].component("Button",{inheritAttrs:!1,props:{label:{type:String,default:""},icon:{type:String,default:"mdi-cached"},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}}}),h=v,m=(r("2b92"),r("2877")),g=r("6544"),f=r.n(g),k=r("8336"),x=r("132d"),_=Object(m["a"])(h,w,b,!1,null,null,null),S=_.exports;f()(_,{VBtn:k["a"],VIcon:x["a"]});var R=s["a"].extend({name:"Mining",components:{Button:S},data:function(){return{withdrawableReward:"...",hasWithdrawable:!0,isLoaded:!1,snackbar:!1,snackbarText:"",snackbarTx:"",withdrawing:!1,swapList:[{input:"USDT",output:"VNLA",aror:"",dror:"",volume:"",reward:""},{input:"WHT",output:"VNLA",aror:"",dror:"",volume:"",reward:""},{input:"ETH",output:"VNLA",aror:"",dror:"",volume:"",reward:""},{input:"USDT",output:"ETH",aror:"",dror:"",volume:"",reward:""},{input:"USDT",output:"HUSD",aror:"",dror:"",volume:"",reward:""},{input:"USDT",output:"MDX",aror:"",dror:"",volume:"",reward:""},{input:"USDT",output:"WHT",aror:"",dror:"",volume:"",reward:""},{input:"WHT",output:"MDX",aror:"",dror:"",volume:"",reward:""},{input:"WHT",output:"HUSD",aror:"",dror:"",volume:"",reward:""},{input:"WHT",output:"USDT",aror:"",dror:"",volume:"",reward:""},{input:"WHT",output:"ETH",aror:"",dror:"",volume:"",reward:""}]}},computed:Object(u["a"])({},Object(d["d"])("wallet",["accounts","chainId","authorized"])),methods:Object(u["a"])(Object(u["a"])({},Object(d["b"])({connect:"wallet/connect",connectWallet:"wallet/connectWallet",takerWithdraw:"swap/takerWithdraw",getReward:"swap/getReward",getSwapAmount:"swap/getSwapAmount"})),{},{redirect:function(t,e){var r=this;setTimeout((function(){r.$router.push({name:"Swap",query:{input:t,output:e}})}),300)},tokenReward:function(t){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(!e.accounts[0]){r.next=6;break}return r.next=3,e.getReward({contractAddress:p["a"]["swap"][e.chainId],userAddress:e.accounts[0],tokenAddress:p["a"][e.chainId][t].address});case 3:return r.abrupt("return",r.sent);case 6:return r.abrupt("return","0");case 7:case"end":return r.stop()}}),r)})))()},tokenSwapAmount:function(t){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(r.prev=0,!e.accounts[0]){r.next=7;break}return r.next=4,e.getSwapAmount({contractAddress:p["a"]["swap"][e.chainId],userAddress:e.accounts[0],tokenAddress:p["a"][e.chainId][t].address});case 4:return r.abrupt("return",r.sent);case 7:return r.abrupt("return","0");case 8:r.next=14;break;case 10:return r.prev=10,r.t0=r["catch"](0),console.log(r.t0),r.abrupt("return","0");case 14:case"end":return r.stop()}}),r,null,[[0,10]])})))()},getWithdrawableAmount:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var r,a,n,s,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.accounts[0]){e.next=18;break}r="0",a=0,n=Object.keys(p["a"][t.chainId]);case 3:if(!(a<n.length)){e.next=13;break}return s=n[a],e.next=7,t.tokenReward(s);case 7:i=e.sent,r=Object(l["a"])(r,i),console.log(r);case 10:a++,e.next=3;break;case 13:return console.log(Object(l["b"])(r.toString(),"0")),0===Object(l["b"])(r.toString(),"0")&&(t.hasWithdrawable=!1),e.abrupt("return",Object(l["g"])(r.toString(),18));case 18:return e.abrupt("return","0");case 19:case"end":return e.stop()}}),e)})))()},withdraw:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.takerWithdraw({contractAddress:p["a"]["swap"][t.chainId]}).then(function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.snackbarText="".concat(t.$i18n.t("MiningWithdrawSnackbar"),": ").concat(r.hash),t.withdrawing=!0,e.next=4,r.wait(1);case 4:return t.withdrawing=!1,e.t0=l["e"],e.next=8,t.getWithdrawableAmount();case 8:e.t1=e.sent,t.withdrawableReward=(0,e.t0)(e.t1),t.snackbarText=t.$i18n.t("MiningWithdrawSnackbar").toString(),t.snackbar=!0;case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 3:e.next=9;break;case 5:e.prev=5,e.t0=e["catch"](0),e.t0.data&&3===e.t0.data.code&&(t.snackbarText=t.$i18n.t("MiningLockSnackbar").toString(),t.snackbar=!0,t.withdrawing=!1),console.error(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,5]])})))()}}),mounted:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var r,a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.connect();case 2:return e.next=4,t.connectWallet();case 4:e.t0=regeneratorRuntime.keys(t.swapList);case 5:if((e.t1=e.t0()).done){e.next=28;break}return r=e.t1.value,a=t.swapList[r].input,n=t.swapList[r].output,t.swapList[r]["aror"]=Object(l["d"])(Object(l["h"])(p["a"]["pairs"][a][n].interests[0].toString())),t.swapList[r]["dror"]=Object(l["d"])(Object(l["h"])(p["a"]["pairs"][a][n].interests[1].toString())),e.t2=l["e"],e.t3=l["g"],e.next=15,t.tokenSwapAmount(a);case 15:return e.t4=e.sent,e.t5=p["a"][t.chainId][a],e.t6=(0,e.t3)(e.t4,e.t5).slice(0,6),t.swapList[r]["volume"]=(0,e.t2)(e.t6),e.t7=l["e"],e.t8=l["g"],e.next=23,t.tokenReward(a);case 23:e.t9=e.sent,e.t10=(0,e.t8)(e.t9,18),t.swapList[r]["reward"]=(0,e.t7)(e.t10),e.next=5;break;case 28:return e.t11=l["e"],e.next=31,t.getWithdrawableAmount();case 31:e.t12=e.sent,t.withdrawableReward=(0,e.t11)(e.t12),t.isLoaded=!0;case 34:case"end":return e.stop()}}),e)})))()}}),j=R,T=r("b0af"),O=r("99d9"),y=r("62ad"),L=r("ce7e"),V=r("adda"),A=r("8860"),W=r("da13"),C=r("5d23"),$=r("8e36"),I=r("0fd9"),M=r("2db4"),D=Object(m["a"])(j,i,o,!1,null,"2b0f2b8d",null),H=D.exports;f()(D,{VBtn:k["a"],VCard:T["a"],VCardText:O["c"],VCol:y["a"],VDivider:L["a"],VIcon:x["a"],VImg:V["a"],VList:A["a"],VListItem:W["a"],VListItemContent:C["a"],VListItemSubtitle:C["b"],VListItemTitle:C["c"],VProgressLinear:$["a"],VRow:I["a"],VSnackbar:M["a"]});var U=s["a"].extend({components:{Mining:H},data:function(){return{label:{title:"挖矿"}}}}),B=U,E=r("a523"),N=Object(m["a"])(B,a,n,!1,null,null,null);e["default"]=N.exports;f()(N,{VContainer:E["a"]})}}]);
//# sourceMappingURL=chunk-1ccbf8c6.f0ddcd0e.js.map