import axios from "axios";

const BASE_URL = "http://localhost:5001/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOTU2YjA2ZmFkZDA2ZjYyNzkyNTdhNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNzYwNDIwNywiZXhwIjoxNjM3ODYzNDA3fQ.r9_K22ecBLdpaqUZfNRolXuUhXMF892zyt-6vFqrmfk";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` },
});
