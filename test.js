const ha = { ha: "hello", wa: "nice" };
if (true) {
  var hello = "nice";
}
const ids = [...Array(100)].map((v, i) => i);
const what = {
  ...ids.reduce((acc, id) => ({ ...acc, [id]: Math.random() }), 0),
};
const haha = [1, 2, 3, 4, 5];
const insertAtIndex = (rotation, action, index) => [
  ...rotation.slice(0, index),
  action,
  ...rotation.slice(index),
];

console.log(insertAtIndex(haha, null, 2));
