(this["webpackJsonpmaterial-ui-numeric-input-example"]=this["webpackJsonpmaterial-ui-numeric-input-example"]||[]).push([[0],{38:function(e,a,n){e.exports=n(52)},43:function(e,a,n){},52:function(e,a,n){"use strict";n.r(a);var r=n(0),t=n.n(r),l=n(13),i=n.n(l),u=n(35),o=(n(43),n(26)),m=n(31),c=n(27),p=n(70),s=n(69),v=n(68),d=n(71);function f(){var e=Object(o.a)(["\n  .MuiInputLabel-shrink {\n    transform: translate(13px, -5.5px) scale(0.75) !important;\n  }\n"]);return f=function(){return e},e}var g,b=Object(m.a)(d.a)(g||(g=f())),h=function(e){return t.a.createElement(b,{error:e.error,fullWidth:!0},t.a.createElement(p.a,{error:e.error,shrink:!0,id:e.label},e.label),t.a.createElement(s.a,{name:e.name,error:e.error,notched:!0,label:e.label,fullWidth:!0,inputComponent:c.a,disabled:e.disabled,onBlur:e.onBlur,inputProps:{id:e.id,value:e.value,disabled:e.disabled,onChangeEvent:function(a){var n=a.target.value.split(".").join("").replace(",",".");if(e.onChange)if(void 0!==e.minimumValue)if(parseFloat(n)<e.minimumValue)setTimeout((function(){var n=a;n.target.value=e.minimumValue.toString(),e.onChange(n)}),100);else{var r=a;r.target.value=n,e.onChange(r)}else if(""!==a.target.value){var t=a;t.target.value=n,e.onChange(t)}else setTimeout((function(){var n=a;n.target.value="0",e.onChange(n)}),100)},decimalSeparator:",",thousandSeparator:".",precision:e.precision,inputType:e.inputType,allowNegative:e.allowNegative}}),e.error?t.a.createElement(v.a,{error:e.error},e.helperText):null)},E=function(){var e=Object(r.useState)("0"),a=Object(u.a)(e,2),n=a[0],l=a[1];return t.a.createElement(h,{value:Number(n),name:"example",precision:"2",label:"Example",onChange:function(e){return l(e.target.value)}})};i.a.render(t.a.createElement(E,null),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.1e77fe95.chunk.js.map