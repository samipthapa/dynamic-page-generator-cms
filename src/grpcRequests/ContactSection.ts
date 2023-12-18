import { ContactClient } from "../grpcClients/grpc-client-factory"
import { ContactReq } from "../grpcClients/grpc-client-factory"

export async function updateContactSection(id: string, options?: { tile?: string, centered?: string, active?: string }) {
    ContactReq.id = BigInt(id);

    if (options) {
        const { tile, centered, active } = options;
        if (tile) ContactReq.tile = tile;
        if (centered) ContactReq.centered = centered;
        if (active) ContactReq.active = active;
    }

    return new Promise((resolve, reject) => {
        ContactClient.updateContactSection(ContactReq)
            .then((res) => {
                resolve(res)
            })
            .catch((err) => {
                reject(err)
            });
    });
}