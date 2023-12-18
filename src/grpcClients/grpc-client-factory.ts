import { GrpcWebFetchTransport } from "@protobuf-ts/grpcweb-transport";

import { HeroSectionServiceClient } from "../generated/HeroSectionService.client";
import { HeroSectionUpdateRequest } from "../generated/HeroSectionService";

import { UserSignUpClient } from "../generated/UserRegister.client";
import { UserRequest } from "../generated/UserRegister";

import { UserLoginClient } from "../generated/UserLogin.client";
import { LoginRequest } from "../generated/UserLogin";

import { FooterServiceClient } from "../generated/footer.client";
import { JsonDataRequest } from "../generated/footer";
import { JsonDataUpdateRequest } from "../generated/footer";

const config = new GrpcWebFetchTransport({
  baseUrl: "http://192.168.28.121:8082",
});

const HeroSectionClient = new HeroSectionServiceClient(config);
const HeroSectionReq = HeroSectionUpdateRequest.create()
// Register Request
const RegisterServiceClient = new UserSignUpClient(config);
const RegisterReq = UserRequest.create();

// LogIn Request
const LogInServiceClient = new UserLoginClient(config);
const LogInReq = LoginRequest.create();

// Footer Request
const FooterClient = new FooterServiceClient(config);
const DataReq = JsonDataRequest.create();
const DataUpdateReq = JsonDataUpdateRequest.create();

export {
  RegisterServiceClient,
  LogInServiceClient,
  FooterClient,
  HeroSectionClient,

  RegisterReq,
  LogInReq,
  DataReq,
  DataUpdateReq,
  HeroSectionReq
};
