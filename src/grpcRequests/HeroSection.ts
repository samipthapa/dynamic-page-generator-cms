import { HeroSectionReq } from "../grpcClients/grpc-client-factory"
import { HeroSectionClient } from "../grpcClients/grpc-client-factory"

export async function updateHeroSection(id: string, options?: { split?: string, centered?: string, active?: string }) {
    HeroSectionReq.id = id;
    if (options) {
        const { split, centered, active } = options;
        if (split) HeroSectionReq.split = split;
        if (centered) HeroSectionReq.centered = centered;
        if (active) HeroSectionReq.active = active;
    }

    return new Promise((resolve, reject) => {
        HeroSectionClient.updateHeroSection(HeroSectionReq)
            .then((res) => {
                resolve(res)
            })
            .catch((err) => {
                reject(err)
            });
    });
}
