FROM ubuntu

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update
RUN apt-get install -y apache2
RUN apt-get install -y postgresql

COPY web/ /var/www/html/

EXPOSE 8080

CMD ["apache2ctl", "-D", "FOREGROUND"]