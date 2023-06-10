import { serve } from "https://deno.land/std@0.181.0/http/server.ts";

const OPENAI_API_HOST = "chat.openai.com";
const PANDORA_API_PATH = "api/conversations";
const CHAT_API_PATH = "backend-api/conversations";
const PANDORA_API_PATH1 = "api/conversation";
const CHAT_API_PATH1 = "backend-api/conversation";

serve(async (request) => {
  const url = new URL(request.url);

  if (url.pathname === "/") {
    return fetch(new URL("./Readme.md", import.meta.url));
  }
  
  url.host = OPENAI_API_HOST;
  
  if (url.pathname.includes(PANDORA_API_PATH)) {
    url.pathname = url.pathname.toString().replace(PANDORA_API_PATH, CHAT_API_PATH);
  }

  if (url.pathname.includes(PANDORA_API_PATH1)) {
    url.pathname = url.pathname.toString().replace(PANDORA_API_PATH1, CHAT_API_PATH1);
  }
  
  console.log("URL:", url);
  console.log("Request:", request);
  return await fetch(url, request);
});
