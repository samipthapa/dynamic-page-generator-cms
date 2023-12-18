import { GrpcWebFetchTransport } from "@protobuf-ts/grpcweb-transport";

import { HeroSectionServiceClient } from "../generated/HeroSectionService.client";
import { HeroSectionUpdateRequest } from "../generated/HeroSectionService";


const config = new GrpcWebFetchTransport({
    baseUrl: "http://192.168.10.153:8082",
});

const HeroSectionClient = new HeroSectionServiceClient(config);
const HeroSectionReq = HeroSectionUpdateRequest.create()

export {
    HeroSectionClient,
    HeroSectionReq
}