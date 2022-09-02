FROM node:16.15

RUN apt-get update && apt-get install -qq -y --no-install-recommends

ENV INSTALL_PATH /chanllenges

RUN mkdir -p $INSTALL_PATH

WORKDIR $INSTALL_PATH

COPY . .