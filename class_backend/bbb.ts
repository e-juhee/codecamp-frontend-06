/* 데코레이터 */

function qqq(aaaaa: any) {
  console.log("===========");

  console.log(aaaaa);
  console.log("===========");
}

@qqq
class Product {}
