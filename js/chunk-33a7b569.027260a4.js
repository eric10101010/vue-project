(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-33a7b569"],{"1dde":function(e,t,a){var r=a("d039"),c=a("b622"),o=a("2d00"),s=c("species");e.exports=function(e){return o>=51||!r((function(){var t=[],a=t.constructor={};return a[s]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"324c":function(e,t,a){"use strict";a.r(t);a("b0c0"),a("b64b");var r=a("7a23"),c={class:"container my-5"},o={class:"row"},s={class:"col-9 mx-auto"},l={class:"position-relative mb-5 pb-5"},n=Object(r["createVNode"])("div",{class:"progress",style:{height:"1px"}},[Object(r["createVNode"])("div",{class:"progress-bar",role:"progressbar",style:{width:"50%"},"aria-valuenow":"50","aria-valuemin":"0","aria-valuemax":"100"})],-1),d=Object(r["createStaticVNode"])('<p class="position-absolute top-0 start-0 translate-middle mt-4 pt-2">確認商品</p><button type="button" class="position-absolute top-0 start-50 translate-middle btn btn-primary rounded-pill" style="width:2rem;height:2rem;"></button><p class="position-absolute top-0 start-50 translate-middle mt-4 pt-2">填寫資料</p><button type="button" class="position-absolute top-0 start-100 translate-middle\n              btn btn-secondary rounded-pill" style="width:2rem;height:2rem;"></button><p class="position-absolute top-0 start-100 translate-middle text-nowrap mt-4\n            pt-2"> 結賬 </p>',5),i={key:0,class:"col-lg-9 mx-auto"},u={class:"row flex-md-row-reverse row-cols-1 row-cols-md-2"},b={class:"col mb-5 mb-md-0"},m=Object(r["createVNode"])("h2",{class:"text-center fw-bolder mb-3 mb-md-5"},"您的訂購",-1),p={class:"list-group"},O={class:"d-flex align-items-center"},f={class:"w-100"},j={class:"mb-0"},V={class:"mb-0"},N=Object(r["createTextVNode"])(" 小計："),h={class:"text-end"},v={class:"list-group-item py-3"},g={class:"d-flex"},x={class:"ms-auto"},y={class:"mb-0 d-flex"},w=Object(r["createTextVNode"])(" 商品合計： "),k={class:"ms-auto"},D={class:"mb-0 d-flex"},T=Object(r["createTextVNode"])(" 訂單總計： "),$={class:"ms-auto text-danger"},S={class:"mb-0"},C={class:"col"},B=Object(r["createVNode"])("h2",{class:"text-center fw-bolder mb-3"},"訂購人資訊",-1),L={class:"row row-cols-1 g-3"},U={class:"col"},_=Object(r["createVNode"])("label",{for:"userName",class:"form-label"},[Object(r["createTextVNode"])("訂購人姓名 "),Object(r["createVNode"])("span",{class:"text-danger"},"*")],-1),F={class:"col"},A=Object(r["createVNode"])("label",{for:"userEmail",class:"form-label"},[Object(r["createTextVNode"])("聯絡信箱 "),Object(r["createVNode"])("span",{class:"text-danger"},"*")],-1),E={class:"col"},M=Object(r["createVNode"])("label",{for:"userTel",class:"form-label"},[Object(r["createTextVNode"])("手機號碼 "),Object(r["createVNode"])("span",{class:"text-danger"},"*")],-1),q={class:"col"},J=Object(r["createVNode"])("label",{for:"userAddress",class:"form-label"},[Object(r["createTextVNode"])("聯絡地址 "),Object(r["createVNode"])("span",{class:"text-danger"},"*")],-1),P={class:"col"},W=Object(r["createVNode"])("label",{for:"userMessage",class:"form-label"},"備註",-1),z={class:"col"};function I(e,t,a,I,Z,G){var H=Object(r["resolveComponent"])("Loading"),K=Object(r["resolveComponent"])("router-link"),Q=Object(r["resolveComponent"])("Field"),R=Object(r["resolveComponent"])("error-message"),X=Object(r["resolveComponent"])("Form"),Y=Object(r["resolveComponent"])("toast");return Object(r["openBlock"])(),Object(r["createBlock"])("div",null,[Object(r["createVNode"])(H,{active:e.isLoading.status},null,8,["active"]),Object(r["createVNode"])("div",c,[Object(r["createVNode"])("div",o,[Object(r["createVNode"])("div",s,[Object(r["createVNode"])("div",l,[n,Object(r["createVNode"])(K,{to:"/checkout",class:"position-absolute top-0 start-0 translate-middle btn btn-primary rounded-pill",style:{width:"2rem",height:"2rem"}}),d])]),Z.cartsData.carts[0]?(Object(r["openBlock"])(),Object(r["createBlock"])("div",i,[Object(r["createVNode"])("div",u,[Object(r["createVNode"])("div",b,[Object(r["createVNode"])("section",null,[m,Object(r["createVNode"])("ul",p,[(Object(r["openBlock"])(!0),Object(r["createBlock"])(r["Fragment"],null,Object(r["renderList"])(Z.cartsData.carts,(function(t){return Object(r["openBlock"])(),Object(r["createBlock"])("li",{class:"list-group-item py-3",key:t.id},[Object(r["createVNode"])("div",O,[Object(r["createVNode"])(K,{to:"/product/".concat(t.product.id),class:"link-dark"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])("img",{src:t.product.imageUrl,alt:t.title,class:"studio__checkout__img rounded me-3"},null,8,["src","alt"])]})),_:2},1032,["to"]),Object(r["createVNode"])("div",f,[Object(r["createVNode"])(K,{to:"/product/".concat(t.product.id),class:"link-dark"},{default:Object(r["withCtx"])((function(){return[Object(r["createTextVNode"])(Object(r["toDisplayString"])(t.product.title),1)]})),_:2},1032,["to"]),Object(r["createVNode"])("p",j," 單價："+Object(r["toDisplayString"])("$ "+e.$filters.currency(t.product.price))+" x "+Object(r["toDisplayString"])(t.qty)+" "+Object(r["toDisplayString"])(t.product.unit),1),Object(r["createVNode"])("p",V,[N,Object(r["createVNode"])("span",h,Object(r["toDisplayString"])("$ "+e.$filters.currency(t.total)),1)])])])])})),128)),Object(r["createVNode"])("li",v,[Object(r["createVNode"])("div",g,[Object(r["createVNode"])("div",x,[Object(r["createVNode"])("p",y,[w,Object(r["createVNode"])("span",k,Object(r["toDisplayString"])("TWD$ "+e.$filters.currency(Z.cartsData.total)),1)]),Object(r["createVNode"])("p",D,[T,Object(r["createVNode"])("span",$,Object(r["toDisplayString"])("TWD$ "+e.$filters.currency(Math.floor(Z.cartsData.final_total))),1)]),Object(r["createVNode"])("p",S,Object(r["toDisplayString"])(Z.percent),1)])])])])])]),Object(r["createVNode"])("div",C,[Object(r["createVNode"])("section",null,[B,Object(r["createVNode"])(X,{action:"",ref:"orderForm",onSubmit:G.postOrder},{default:Object(r["withCtx"])((function(e){var a=e.errors;return[Object(r["createVNode"])("div",L,[Object(r["createVNode"])("div",U,[_,Object(r["createVNode"])(Q,{id:"userName",name:"訂購人姓名",type:"text",class:["form-control",{"is-invalid":a["訂購人姓名"],"is-valid":Z.order.user.name}],rules:G.checkName,placeholder:"請輸入姓名",modelValue:Z.order.user.name,"onUpdate:modelValue":t[1]||(t[1]=function(e){return Z.order.user.name=e})},null,8,["class","rules","modelValue"]),Object(r["createVNode"])(R,{name:"訂購人姓名",class:"invalid-feedback"})]),Object(r["createVNode"])("div",F,[A,Object(r["createVNode"])(Q,{id:"userEmail",name:"聯絡信箱",type:"email",class:["form-control",{"is-invalid":a["聯絡信箱"],"is-valid":Z.order.user.email}],placeholder:"請輸入電子信箱",rules:"email|required",modelValue:Z.order.user.email,"onUpdate:modelValue":t[2]||(t[2]=function(e){return Z.order.user.email=e})},null,8,["class","modelValue"]),Object(r["createVNode"])(R,{name:"聯絡信箱",class:"invalid-feedback"})]),Object(r["createVNode"])("div",E,[M,Object(r["createVNode"])(Q,{id:"userTel",name:"手機號碼",type:"tel",class:["form-control",{"is-invalid":a["手機號碼"],"is-valid":Z.order.user.tel}],rules:G.checkPhone,placeholder:"請輸入手機號碼",modelValue:Z.order.user.tel,"onUpdate:modelValue":t[3]||(t[3]=function(e){return Z.order.user.tel=e})},null,8,["class","rules","modelValue"]),Object(r["createVNode"])(R,{name:"手機號碼",class:"invalid-feedback"})]),Object(r["createVNode"])("div",q,[J,Object(r["createVNode"])(Q,{id:"userAddress",name:"聯絡地址",type:"text",class:["form-control",{"is-invalid":a["聯絡地址"],"is-valid":Z.order.user.address}],rules:"required",placeholder:"請輸入聯絡地址",modelValue:Z.order.user.address,"onUpdate:modelValue":t[4]||(t[4]=function(e){return Z.order.user.address=e})},null,8,["class","modelValue"]),Object(r["createVNode"])(R,{name:"聯絡地址",class:"invalid-feedback"})]),Object(r["createVNode"])("div",P,[W,Object(r["createVNode"])(Q,{id:"userMessage",name:"備註",type:"text",class:["form-control",{"is-valid":Z.order.message}],placeholder:"餐點口味(海苔、孜然、莎莎醬)",modelValue:Z.order.message,"onUpdate:modelValue":t[5]||(t[5]=function(e){return Z.order.message=e}),as:"textarea",rows:"3"},null,8,["class","modelValue"]),Object(r["createVNode"])(R,{name:"備註",class:"invalid-feedback"})]),Object(r["createVNode"])("div",z,[Object(r["createVNode"])("input",{type:"submit",value:"送出訂單",class:"btn btn-primary text-white w-100",disabled:0!==Object.keys(a).length||!G.checkData},null,8,["disabled"])])])]})),_:1},8,["onSubmit"])])])])])):Object(r["createCommentVNode"])("",!0)])]),Object(r["createVNode"])(Y,{ref:"toast"},null,512)])}a("99af"),a("ac1f"),a("5319");var Z={data:function(){return{cartsData:{carts:[]},order:{user:{name:"",email:"",tel:"",address:""},message:""},isSubmitOrder:!1,percent:0}},emits:["update"],props:["cartsUpdate"],methods:{getCartsList:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io","/api/").concat("item666","/cart");this.isLoading.status=!0,this.axios.get(t).then((function(t){t.data.success?(e.cartsData=t.data.data,e.cartsData.carts.length||e.isSubmitOrder||e.$router.replace("/productsList"),e.cartsData.carts[0]&&(e.percent=e.cartsData.carts[0].coupon?"已打 ".concat(e.cartsData.carts[0].coupon.percent," 折"):"未使用優惠券"),e.isLoading.status=!1):e.$refs.toast.showToast(t.data.message,"error")})).catch((function(){e.$refs.toast.showToast("取得購物車清單有問題喔!","error")}))},postOrder:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io","/api/").concat("item666","/order");this.axios.post(t,{data:this.order}).then((function(t){t.data.success?(e.isSubmitOrder=!0,window.scrollTo(0,0),e.$refs.toast.showToast("感謝您的選購! 請確認付款資訊，謝謝。"),e.$refs.orderForm.resetForm(),e.$emit("update"),setTimeout((function(){e.$router.replace("/order/".concat(t.data.orderId))}),1500)):e.$refs.toast.showToast(t.data.message,"error")})).catch((function(){e.$refs.toast.showToast("無法送出訂單喔!","error")}))},checkName:function(e){var t=/^[\u4e00-\u9fa5]+$|^[a-zA-Z\s]+$/;return!!t.test(e)||"請輸入中/英文姓名"},checkPhone:function(e){var t=/^(09)[0-9]{8}$/;return!!t.test(e)||'需要正確的"手機"號碼'}},created:function(){this.getCartsList()},computed:{checkData:function(){var e=this,t=["name","email","tel","address"];return t.every((function(t){return""!==e.order.user[t]}))}},watch:{cartsUpdate:function(e){e&&this.getCartsList()}}};Z.render=I;t["default"]=Z},8418:function(e,t,a){"use strict";var r=a("c04e"),c=a("9bf2"),o=a("5c6c");e.exports=function(e,t,a){var s=r(t);s in e?c.f(e,s,o(0,a)):e[s]=a}},"99af":function(e,t,a){"use strict";var r=a("23e7"),c=a("d039"),o=a("e8b5"),s=a("861d"),l=a("7b0b"),n=a("50c4"),d=a("8418"),i=a("65f0"),u=a("1dde"),b=a("b622"),m=a("2d00"),p=b("isConcatSpreadable"),O=9007199254740991,f="Maximum allowed index exceeded",j=m>=51||!c((function(){var e=[];return e[p]=!1,e.concat()[0]!==e})),V=u("concat"),N=function(e){if(!s(e))return!1;var t=e[p];return void 0!==t?!!t:o(e)},h=!j||!V;r({target:"Array",proto:!0,forced:h},{concat:function(e){var t,a,r,c,o,s=l(this),u=i(s,0),b=0;for(t=-1,r=arguments.length;t<r;t++)if(o=-1===t?s:arguments[t],N(o)){if(c=n(o.length),b+c>O)throw TypeError(f);for(a=0;a<c;a++,b++)a in o&&d(u,b,o[a])}else{if(b>=O)throw TypeError(f);d(u,b++,o)}return u.length=b,u}})},b0c0:function(e,t,a){var r=a("83ab"),c=a("9bf2").f,o=Function.prototype,s=o.toString,l=/^\s*function ([^ (]*)/,n="name";r&&!(n in o)&&c(o,n,{configurable:!0,get:function(){try{return s.call(this).match(l)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=chunk-33a7b569.027260a4.js.map