import { FooterClient } from "../grpcClients/grpc-client-factory";
import { DataReq } from "../grpcClients/grpc-client-factory";
import { DataUpdateReq } from "../grpcClients/grpc-client-factory";

export function getJsonData(id: bigint) {
  DataReq.id = id;

  return new Promise((resolve, reject) => {
    FooterClient.getJsonData(DataReq)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function updateJsonData(id: number, updatedJsonData: string) {
  DataUpdateReq.id = BigInt(id);
  DataUpdateReq.updatedJsonData = updatedJsonData;

  return new Promise((resolve, reject) => {
    FooterClient.updateJsonData(DataUpdateReq)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
