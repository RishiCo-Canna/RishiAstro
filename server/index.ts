import express, { type Request, Response, NextFunction } from "express";
import { log } from "./vite";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Log middleware
app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

// Start Astro dev server in development mode
if (process.env.NODE_ENV !== 'production') {
  import('astro').then(({ dev }) => {
    dev({
      root: '.',
      server: { 
        port: 5000,
        host: '0.0.0.0'
      }
    });
  });
} else {
  // Production mode: Use Express to serve the built Astro site
  const PORT = 5000;
  app.listen(PORT, "0.0.0.0", () => {
    log(`serving Astro application on port ${PORT}`);
  });

  // API routes
  app.use("/api", (req, res) => {
    res.status(404).json({ message: "API endpoint not found" });
  });

  // Error handling
  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });

  // Serve static Astro files
  app.use(express.static("dist/client"));

  // For all other routes, serve the Astro app
  app.get("*", (_req, res) => {
    res.sendFile("dist/client/index.html", { root: "." });
  });
}