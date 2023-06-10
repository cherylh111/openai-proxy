import { serve } from "https://deno.land/std@0.181.0/http/server.ts";

const OPENAI_API_HOST = "chat.openai.com";
const PANDORA_API_PATH = "api/conversations";
const CHAT_API_PATH = "backend-api/conversations";

serve(async (request) => {
  const url = new URL(request.url);

  if (url.pathname === "/") {
    return fetch(new URL("./Readme.md", import.meta.url));
  }
  
  url.host = OPENAI_API_HOST;
  
  if (url.pathname.includes("api/conversations")) {
    const newUrl = url.replace(PANDORA_API_PATH, CHAT_API_PATH);
    return await fetch(url, request);
  }

  console.log("URL:", url);
  console.log("Request:", request);
  return await fetch(url, request);
});
