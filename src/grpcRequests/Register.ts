import { RegisterServiceClient } from "../grpcClients/grpc-client-factory";
import { RegisterReq } from "../grpcClients/grpc-client-factory";

export function register(userName: string, email: string, password: string) {
  RegisterReq.userName = userName;
  RegisterReq.email = email;
  RegisterReq.password = password;

  return new Promise((resolve, reject) => {
    RegisterServiceClient.register(RegisterReq)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
