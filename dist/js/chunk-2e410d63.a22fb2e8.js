(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2e410d63"],{"6e6f":function(e,t,o){"use strict";var r=o("d4ec"),a=o("bee2"),i=(o("99af"),o("bc3a")),s=o.n(i),n="predio",d="http://localhost:8080",c="".concat(d,"/").concat(n),l=function(){function e(){Object(r["a"])(this,e)}return Object(a["a"])(e,[{key:"retriveAllPredios",value:function(){return s.a.get("".concat(c,"/all-predios"))}},{key:"retrievePredio",value:function(e,t){return s.a.get("".concat(c,"/predio-id=").concat(t))}},{key:"deletePredio",value:function(e,t){return s.a.delete("".concat(c,"/delete-predio=").concat(t))}},{key:"updatePredio",value:function(e,t,o){return s.a.put("".concat(c,"/update-predio=").concat(t),o)}},{key:"createPredio",value:function(e,t){return s.a.post("".concat(c,"/insert-predio"),t)}}]),e}();t["a"]=new l},a77f:function(e,t,o){"use strict";o.r(t);var r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"update-predio"}},[o("div",{staticClass:"container",attrs:{id:"tblScope"}},[o("h1",[o("b-icon",{attrs:{icon:"house-fill"}}),e._v(" Update Predio")],1),o("form",{on:{submit:e.validateAndSubmit}},[o("br"),e.errors.length?o("div",e._l(e.errors,(function(t,r){return o("div",{key:r,staticClass:"alert alert-danger mt-2"},[e._v(" "+e._s(e.errors.toString())+" ")])})),0):e._e(),o("fieldset",{staticClass:"form-group col-md-6 m-auto"},[o("label",[e._v("Nome")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.nome,expression:"nome"}],staticClass:"form-control",attrs:{type:"text",disabled:1==e.disabled},domProps:{value:e.nome},on:{input:function(t){t.target.composing||(e.nome=t.target.value)}}})]),o("fieldset",{staticClass:"form-group col-md-6 m-auto"},[o("label",[e._v("Sigla")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.sigla,expression:"sigla"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.sigla},on:{input:function(t){t.target.composing||(e.sigla=t.target.value)}}})]),o("fieldset",{staticClass:"form-group col-md-6 m-auto"},[o("label",[e._v("Endereço")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.endereco,expression:"endereco"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.endereco},on:{input:function(t){t.target.composing||(e.endereco=t.target.value)}}})]),o("fieldset",{staticClass:"form-group col-md-6 m-auto"},[o("label",[e._v("Cidade")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.cidade,expression:"cidade"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.cidade},on:{input:function(t){t.target.composing||(e.cidade=t.target.value)}}})]),o("fieldset",{staticClass:"form-group col-md-6 m-auto"},[o("label",[e._v("Estado")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.estado,expression:"estado"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.estado},on:{input:function(t){t.target.composing||(e.estado=t.target.value)}}})]),o("br"),o("router-link",{staticClass:"btn btn-danger mb-3 mr-3",attrs:{to:"/predio"}},[o("b-icon",{attrs:{icon:"arrow-left-square-fill"}}),e._v(" Back ")],1),o("button",{staticClass:"btn btn-success mb-3",attrs:{type:"submit"}},[o("b-icon",{attrs:{icon:"person-check-fill"}}),e._v(" Update Predio ")],1)],1)])])},a=[],i=(o("99af"),o("6e6f")),s={name:"PredioUpdate",data:function(){return{nome:"",sigla:"",endereco:"",cidade:"",estado:"",disabled:1,message:null,instructor:"predio",errors:[]}},head:{title:{inner:"Update Predio"}},computed:{id:function(){return this.$route.params.id}},methods:{refreshPredio:function(){var e=this;i["a"].retrievePredio(this.INSTRUCTOR,this.id).then((function(t){-1!=e.id?(e.nome=t.data.nome,e.sigla=t.data.sigla,e.endereco=t.data.endereco,e.cidade=t.data.cidade,e.estado=t.data.estado):(e.disabled=0,e.active=!1)}))},validateAndSubmit:function(e){var t=this;e.preventDefault(),this.errors=[],this.nome?this.nome.length<4?this.errors.push("Nome deve possuir mais de 4 caracteres."):this.sigla?this.sigla.length>5?this.errors.push("Sigla deve possuir até 5 caracteres."):this.endereco?this.endereco.length>50?this.errors.push("O endereco deve conter até 50 caracteres."):this.cidade?this.cidade.length>25?this.errors.push("O endereco deve conter até 25 caracteres."):this.estado?this.estado.length>25?this.errors.push("O endereco deve conter até 25 caracteres."):this.errors.length:this.errors.push("Endereço é obrigatório"):this.errors.push("Endereço é obrigatório"):this.errors.push("Endereço é obrigatório"):this.errors.push("Sigla é obrigatório."):this.errors.push("O nome é obrigatório."),0===this.errors.length&&(-1===this.id?i["a"].createPredio(this.INSTRUCTOR,{nome:this.nome,sigla:this.sigla,endereco:this.endereco,cidade:this.cidade,estado:this.estado}).then((function(){t.$router.push("/predio")})):i["a"].updatePredio(this.INSTRUCTOR,this.id,{id:this.id,nome:this.nome,sigla:this.sigla,endereco:this.endereco,cidade:this.cidade,estado:this.estado}).then((function(){t.$router.push("/predio"),console.log("update predio --\x3e SIGLA: ".concat(t.sigla,", NOME: ").concat(t.nome))}))),window.Toast.fire("Success",'Predio "'.concat(this.nome,'" was registred/updated!'),"success")}},created:function(){this.refreshPredio()}},n=s,d=o("2877"),c=Object(d["a"])(n,r,a,!1,null,"5d2096bb",null);t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2e410d63.a22fb2e8.js.map