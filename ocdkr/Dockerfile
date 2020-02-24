FROM centos/python-27-centos7
ENV file=test.py
RUN adduser -D worker
USER worker
RUN  pip install --user worker flask && \
     mkdir /home/worker/test
ENV PATH="/home/worker/.local/bin:${PATH}"
COPY test.py /home/worker/test
WORKDIR /home/worker/test
CMD python $file

