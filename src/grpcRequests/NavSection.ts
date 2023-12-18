import { NavClient } from "../grpcClients/grpc-client-factory";
import { NavReq } from "../grpcClients/grpc-client-factory";

export async function updateNavSection(id: string, options?: { basic?: string, centered?: string, active?: string }) {
    NavReq.id = id

    if (options) {
        const { basic, centered, active } = options;
        if (basic) NavReq.basic = basic;
        if (centered) NavReq.centered = centered;
        if (active) NavReq.active = active;
    }

    return new Promise((resolve, reject) => {
        NavClient.updateNavSection(NavReq)
            .then((res) => {
                resolve(res)
            })
            .catch((err) => {
                reject(err)
            });
    });
}