FROM node:latest

RUN git clone https://github.com/darkalpha2003/X-Troid /root/X-Troid
WORKDIR /root/X-Troid/
RUN git clone https://github.com/darkalpha2003/X-Troid
ENV TZ=Asia/Colombo
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
