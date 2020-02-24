FROM python:2.7-alpine
ENV file=test
RUN  pip install flask && /
     mkdir /test
COPY test.py /test
WORKDIR /test
CMD python $file

