import { LogInServiceClient } from "../grpcClients/grpc-client-factory";
import { LogInReq } from "../grpcClients/grpc-client-factory";

export function login(userName: string, password: string) {
  LogInReq.userName = userName;
  LogInReq.password = password;

  return new Promise((resolve) => {
    const call = LogInServiceClient.login(LogInReq);
    call.response
      .then((res) => {
        console.log("response", res);
        resolve(res);
      })
      .catch((err: string) => {
        console.log("error", err);
      });
  });
}
