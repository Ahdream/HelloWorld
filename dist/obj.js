var b;
b = { name: 'kk' };
var c;
c = function (a, b) {
    return a + b;
};
var d;
d = ['457', 2, 5, 87];
var e;
e = [4, 6, 2457, 45];
var sex;
(function (sex) {
    sex[sex["male"] = 0] = "male";
    sex[sex["female"] = 1] = "female";
})(sex || (sex = {}));
var f;
f = { name: 'ui', sex: sex.female };
console.log('f :', f);
