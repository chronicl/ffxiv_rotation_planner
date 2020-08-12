const ha = { 1: "b", 0: "a", 2: "c" };
const haOb = Array(ha.length);
for (const [index, value] of Object.entries(ha)) {
  haOb[parseInt(index)] = value;
}
console.log(haOb);
