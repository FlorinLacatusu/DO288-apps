FROM centos/python-27-centos7
ENV file=test.py
RUN adduser -D worker
USER worker
ENV PATH="/home/worker/.local/bin:${PATH}"
COPY test.py /home/worker/test
WORKDIR /home/worker/test
RUN  pip install --user worker flask && \
     mkdir /home/worker/test && ls  home/worker/test
CMD python $file

