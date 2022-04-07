FROM fusuf/whatsasena:latest

RUN git clone https://github.com/Meenutty/Meenu-mwol /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/
ENV TZ=Asia/Kolkata
RUN npm install supervisor -g
yarn install --ignore-engines
RUN git clone https://github.com/Jackz-ser/media  

CMD ["node", "bot.js"]
