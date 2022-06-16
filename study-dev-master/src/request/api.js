import Network from "./network";
export const register = (data) => Network.post("/user/register", data);
// export const queryPoint = (data) => Network.post(`/kp/get/${id}`, data);
