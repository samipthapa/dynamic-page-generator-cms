import { GrpcWebFetchTransport } from "@protobuf-ts/grpcweb-transport";

import { HeroSectionServiceClient } from "../generated/HeroSectionService.client";
import { HeroSectionUpdateRequest } from "../generated/HeroSectionService";

import { UserSignUpClient } from "../generated/UserRegister.client";
import { UserRequest } from "../generated/UserRegister";

import { UserLoginClient } from "../generated/UserLogin.client";
import { LoginRequest } from "../generated/UserLogin";

import { ContactSectionServiceClient } from "../generated/ContactSectionService.client";
import { ContactRequest } from "../generated/ContactSectionService";

import { DetailSectionServiceClient } from "../generated/DetailSectionService.client";
import { DetailRequest } from "../generated/DetailSectionService";

import { NavSectionServiceClient } from "../generated/NavSectionService.client";
import { NavRequest } from "../generated/NavSectionService";

import { FooterSectionServiceClient } from "../generated/FooterSectionService.client";
import { FooterRequest } from "../generated/FooterSectionService";

import { SliderSectionServiceClient } from "../generated/SliderSectionService.client";
import { SliderRequest } from "../generated/SliderSectionService";

const config = new GrpcWebFetchTransport({
  baseUrl: "http://192.168.28.121:8082",
});

const HeroSectionClient = new HeroSectionServiceClient(config);
const HeroSectionReq = HeroSectionUpdateRequest.create();

// Register Request
const RegisterServiceClient = new UserSignUpClient(config);
const RegisterReq = UserRequest.create();

// LogIn Request
const LogInServiceClient = new UserLoginClient(config);
const LogInReq = LoginRequest.create();

// Contact Request
const ContactClient = new ContactSectionServiceClient(config);
const ContactReq = ContactRequest.create();

// Detail Request
const DetailClient = new DetailSectionServiceClient(config);
const DetailReq = DetailRequest.create();

// Nav Request
const NavClient = new NavSectionServiceClient(config);
const NavReq = NavRequest.create();

// Footer Request
const FooterSectionClient = new FooterSectionServiceClient(config);
const FooterSectionReq = FooterRequest.create();

// Slider Request
const SliderClient = new SliderSectionServiceClient(config);
const SliderReq = SliderRequest.create();

export {
  RegisterServiceClient,
  LogInServiceClient,
  HeroSectionClient,
  ContactClient,
  DetailClient,
  NavClient,
  FooterSectionClient,
  SliderClient,

  RegisterReq,
  LogInReq,
  HeroSectionReq,
  ContactReq,
  DetailReq,
  NavReq,
  FooterSectionReq,
  SliderReq,
};
