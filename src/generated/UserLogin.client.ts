// @generated by protobuf-ts 2.9.3
// @generated from protobuf file "UserLogin.proto" (package "com.example", syntax proto3)
// tslint:disable
//
// login.proto
//
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { UserLogin } from "./UserLogin";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { LoginReply } from "./UserLogin";
import type { LoginRequest } from "./UserLogin";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service com.example.UserLogin
 */
export interface IUserLoginClient {
    /**
     * @generated from protobuf rpc: login(com.example.LoginRequest) returns (com.example.LoginReply);
     */
    login(input: LoginRequest, options?: RpcOptions): UnaryCall<LoginRequest, LoginReply>;
}
/**
 * @generated from protobuf service com.example.UserLogin
 */
export class UserLoginClient implements IUserLoginClient, ServiceInfo {
    typeName = UserLogin.typeName;
    methods = UserLogin.methods;
    options = UserLogin.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * @generated from protobuf rpc: login(com.example.LoginRequest) returns (com.example.LoginReply);
     */
    login(input: LoginRequest, options?: RpcOptions): UnaryCall<LoginRequest, LoginReply> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<LoginRequest, LoginReply>("unary", this._transport, method, opt, input);
    }
}
