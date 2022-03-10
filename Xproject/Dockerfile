FROM fusuf/whatsasena:latest

RUN git clone https://github.com/darkalpha2003/X-Troid /root/X-Troid
WORKDIR /root/X-Troid/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
