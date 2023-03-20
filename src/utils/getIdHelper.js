import { v4 as uuidv4 } from "uuid";

const getUniqId = () => {
  return uuidv4();
};

export default getUniqId;
