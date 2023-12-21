var json = '{"result":true, "count":42}';
obj = JSON.parse(json);
console.log(obj.count);
console.log(obj.result);

 console.log(JSON.parse('{}'));
 console.log(JSON.parse('true'));
 console.log(JSON.parse('"foo"'));
 console.log(JSON.parse('[1,5, "false"]'));
 console.log(JSON.parse('null'));

 console.log(JSON.stringify({x: 5, y:6}));
 console.log(JSON.stringify([new Number(3), new String('false'), new Boolean(false)]));
 console.log(JSON.stringify({x: [10, undefined, function(){}, Symbol('')]}));
 console.log(JSON.stringify(new Date(2006,0,2,15,4,5)));
