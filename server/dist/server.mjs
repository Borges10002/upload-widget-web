import {
  uploadImageRoute
} from "./chunk-L4ZP2YW6.mjs";
import "./chunk-RECM6NPU.mjs";
import "./chunk-D7BEHAO5.mjs";
import "./chunk-7VYRV3HJ.mjs";

// src/server.ts
import { fastify } from "fastify";
import { fastifyCors } from "@fastify/cors";
import { fastifyMultipart } from "@fastify/multipart";
var server = fastify();
server.register(fastifyCors, {
  origin: "*"
});
server.register(fastifyMultipart);
server.register(uploadImageRoute);
server.listen({ port: 3333, host: "0.0.0.0" }).then(() => {
  console.log("HTTP server running!");
});
