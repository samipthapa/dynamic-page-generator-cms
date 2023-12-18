import { DetailClient } from "../grpcClients/grpc-client-factory"
import { DetailReq } from "../grpcClients/grpc-client-factory"

export async function updateDetailSection(id: string, options?: { tile?: string, split?: string, active?: string }) {
    DetailReq.id = BigInt(id);

    if (options) {
        const { tile, split, active } = options;
        if (tile) DetailReq.tile = tile;
        if (split) DetailReq.split = split;
        if (active) DetailReq.active = active;
    }

    return new Promise((resolve, reject) => {
        DetailClient.updateDetailSection(DetailReq)
            .then((res) => {
                resolve(res)
            })
            .catch((err) => {
                reject(err)
            });
    });
}