FROM centos/python-27-centos7
ENV file=test.py
RUN adduser -D worker
USER worker
RUN  mkdir /home/worker/test &&  \
     pip install --user flask
ENV PATH="/home/worker/test/.local/bin:${PATH}"
COPY test.py /home/worker/test
WORKDIR /home/worker/test   
CMD python $file

