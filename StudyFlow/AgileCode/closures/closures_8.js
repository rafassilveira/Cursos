
var obj1 = {};
for (var v1 = 0; v1 < 3; v1++) {
  //criando um escopo para cada função
  obj1[v1] = (function (v2) {
      return function () {
        console.log(v2);
      };
  })(v1);
}
obj1[0]();//0
obj1[1]();//1
obj1[2]();//2
