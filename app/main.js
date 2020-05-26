import { serve } from "https://deno.land/std@0.50.0/http/server.ts";
import { readFileStr } from 'https://deno.land/std@0.53.0/fs/read_file_str.ts';

const s = serve({ port: 8000 });
const template = await readFileStr("app/html/hello.html");
console.log("server starting on http://localhost:8000/\nCtrl-C to shutdown container");
for await (const req of s) {
  req.respond({ body: template });
}
