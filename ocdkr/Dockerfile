FROM centos/python-27-centos7
ENV file=test.py
RUN adduser -D worker
USER worker
RUN  pip install flask && \
     mkdir /home/worker/test
COPY test.py /home/worker/test
WORKDIR /test
CMD python $file

