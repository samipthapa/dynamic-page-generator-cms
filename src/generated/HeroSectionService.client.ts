// @generated by protobuf-ts 2.9.3
// @generated from protobuf file "HeroSectionService.proto" (syntax proto3)
// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { HeroSectionService } from "./HeroSectionService";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { HeroSectionResponse } from "./HeroSectionService";
import type { HeroSectionUpdateRequest } from "./HeroSectionService";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service HeroSectionService
 */
export interface IHeroSectionServiceClient {
    /**
     * @generated from protobuf rpc: UpdateHeroSection(HeroSectionUpdateRequest) returns (HeroSectionResponse);
     */
    updateHeroSection(input: HeroSectionUpdateRequest, options?: RpcOptions): UnaryCall<HeroSectionUpdateRequest, HeroSectionResponse>;
}
/**
 * @generated from protobuf service HeroSectionService
 */
export class HeroSectionServiceClient implements IHeroSectionServiceClient, ServiceInfo {
    typeName = HeroSectionService.typeName;
    methods = HeroSectionService.methods;
    options = HeroSectionService.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * @generated from protobuf rpc: UpdateHeroSection(HeroSectionUpdateRequest) returns (HeroSectionResponse);
     */
    updateHeroSection(input: HeroSectionUpdateRequest, options?: RpcOptions): UnaryCall<HeroSectionUpdateRequest, HeroSectionResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<HeroSectionUpdateRequest, HeroSectionResponse>("unary", this._transport, method, opt, input);
    }
}