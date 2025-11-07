import http from "http";
import { v4 } from "uuid";

const port = 3000;
const grades = [
    {
        studentName: "Kleber",
        subject: "English",
        grade: "8",
    },
];

const server = http.createServer((request, response) => {
    // funçoes
    const { method, url } = request;
    let body = "";

    request.on("data", (chunk) => {
        body += chunk.toString();
    });

    request.on("end", () => {
        if (url === "/grades" && method === "GET") {
            response.writeHead(200, { "Content-Type": "application/json" });
            response.end(JSON.stringify(grades));
        } else if (url === "/grades" && method === "POST") {
            const { studentName, subject, grade } = JSON.parse(body);
            const newGrade = { id: studentName, subject, grade };
            grades.push(newGrade);
            response.writeHead(201, {
                "Content-Type": "application/json",
            });
            response.end(JSON.stringify(newGrade));
        } else {
            response.writeHead(404, { "Content-Type": "application/json" });
            response.end(JSON.stringify({ message: "Route not found" }));
        }
    });
});

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
