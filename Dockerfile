FROM node:22-alpine

RUN npm install -g @slidev/cli@latest

WORKDIR /slidev

EXPOSE 3030

CMD sh -c "npm install --install-links && slidev --open false --remote --port 3030 slides.md"
