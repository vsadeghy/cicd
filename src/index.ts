import { createServer } from "node:http";
const server = createServer((req, res) => {
	if (req.method === "GET" && req.url === "/health") {
		res.writeHead(200, { "Content-Type": "text/plain" });
		res.end("OK");
		return;
	}
	res.writeHead(200, { "Content-Type": "text/plain" });
	res.end("Hello World\n");
});
server.listen(3000, () =>
	console.log("Server running at http://localhost:3000/")
);

function gracefullShutdown() {
	server.close(() => {
		console.log("Server stopped");
		process.exit(0);
	});
}
process.on("SIGTERM", gracefullShutdown);
process.on("SIGINT", gracefullShutdown);
