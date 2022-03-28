FROM fusuf/whatsasena:latest

RUN git clone https://github.com/Meenutty/Meenu-mwol /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/
ENV TZ=Asia/Kolkata
RUN npm install supervisor -g
RUN yarn install --no-audit
RUN git clone https://github.com/Meenutty/media  

CMD ["node", "bot.js"]
