export const baseURL =
  process.env.NODE_ENV === "production"
    ? "https://mandyibene.github.io/my-portfolio"
    : "http://localhost:3000";
    
export const basePath = process.env.NODE_ENV === "production" ? "/my-portfolio" : "";