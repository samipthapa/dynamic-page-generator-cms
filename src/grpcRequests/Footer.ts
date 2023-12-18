import { FooterSectionClient } from "../grpcClients/grpc-client-factory";
import { FooterSectionReq } from "../grpcClients/grpc-client-factory";

export async function updateFooterSection(id: string, options?: { basic?: string, centered?: string, active?: string }) {
  FooterSectionReq.id = BigInt(id)

  if (options) {
    const { basic, centered, active } = options;
    if (basic) FooterSectionReq.basic = basic;
    if (centered) FooterSectionReq.centered = centered;
    if (active) FooterSectionReq.active = active;
  }

  return new Promise((resolve, reject) => {
    FooterSectionClient.updateFooterSection(FooterSectionReq)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      });
  });
}