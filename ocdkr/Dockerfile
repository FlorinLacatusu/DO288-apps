FROM python:2.7-alpine
ENV file=test
COPY test.py /test
WORKDIR /test
RUN  pip install flask
CMD python $file

