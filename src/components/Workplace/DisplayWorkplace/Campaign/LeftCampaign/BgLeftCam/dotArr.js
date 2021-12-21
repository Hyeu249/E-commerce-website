import { v4 as uuidv4 } from "uuid";

let dotArr = [];

for (let i = 0; i < 605; i++) {
  dotArr.push({ id: uuidv4() });
}
// for (let i = 0; i < 405; i++) {
//   dotArr.push({ id: uuidv4() });
// }

export default dotArr;
