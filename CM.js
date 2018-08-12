
       (function(){
           var CM=window.CM=function(json){
               if(json.constructor==Object){
                   let {el,methods,data,mounted,created}=json;
                   for(let i in json){
                       this[i]=json[i];
                   };
                   //get Json constructor to new Object
                   this.init();
               }else{
                   console.log(new Error('parameter must be json'));
                   //if json not a json return Error to told parameter must be json
               }

           }
           CM.prototype={
               init(){
                   this.created();
                   this.handle();
               },
               handle: function () {
                   console.log('this is handle');
                   //记录
                   let regex=/\{\{\S{0,10}\}\}/g;
                   function ergodicElement(targetElement) {
                        for(let i=0;i<targetElement.childNodes.length;i++){
                            if(targetElement.childNodes[i].nodeValue){
                                var targetData=targetElement.childNodes[i].nodeValue.match(regex);
                                var deal=[];
                                var str="";
                                   for (let n = 0; n < targetData.length; n++) {
                                       deal.push(targetData[n].replace(/\{\{/g, "").replace(/\}\}/g, ""));
                                   }

                                   for (let m = 0; m < deal.length; m++) {
                                       str += this.data[deal[m]];
                                   }
                                   var lastData = targetElement.childNodes[i].nodeValue.replace(/\{\{\S{0,10}\}\}/g, str)
                                   targetElement.childNodes[i].nodeValue = lastData;

                            }else{
                                ergodicElement.call(this,targetElement.childNodes[i]);

                            }
                        }
                   }
                   ergodicElement.call(this,this.el);

               }


           }
       })();
       var a=new CM({
           el:document.getElementById("app"),
           data:{
               a:1123123,
               B:213,
               Ba:'是我'
           },
           methods:{a:1123},
           created(){
               console.log("this is created")
           },
           mounted:{}
       });




