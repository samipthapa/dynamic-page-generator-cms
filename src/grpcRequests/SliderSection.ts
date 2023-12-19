import { SliderClient } from "../grpcClients/grpc-client-factory";
import { SliderReq } from "../grpcClients/grpc-client-factory";

export async function updateSliderSection(id: string, basic?: string) {
    SliderReq.id = BigInt(id)
    if (basic) SliderReq.basic = basic;

    return new Promise((resolve, reject) => {
        SliderClient.updateSliderSection(SliderReq)
            .then((res) => {
                resolve(res)
            })
            .catch((err) => {
                reject(err)
            });
    });
}