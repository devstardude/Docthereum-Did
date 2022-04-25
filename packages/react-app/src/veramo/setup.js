import { createAgent, IResolver } from "@veramo/core";
import { INFURA_ID } from "../constants";
import { DIDResolverPlugin } from "@veramo/did-resolver";
import { Resolver } from "did-resolver";
import { getResolver as ethrDidResolver } from "ethr-did-resolver";
import { getResolver as webDidResolver } from "web-did-resolver";

// You will need to get a project ID from infura https://www.infura.io
const INFURA_PROJECT_ID = "<your PROJECT_ID here>";

export const agent = createAgent({
  plugins: [
    new DIDResolverPlugin({
      resolver: new Resolver({
        ...ethrDidResolver({ infuraProjectId: INFURA_ID }),
        ...webDidResolver(),
      }),
    }),
  ],
});
  
