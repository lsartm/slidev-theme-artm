FROM node:22-bookworm-slim

RUN npm install -g @slidev/cli@latest playwright-chromium

WORKDIR /slidev

RUN npx playwright install --with-deps chromium

EXPOSE 3030

CMD sh -c "npm install --install-links && slidev --open false --remote --port 3030 slides.md"
