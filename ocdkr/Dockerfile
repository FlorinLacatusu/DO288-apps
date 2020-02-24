FROM centos/python-27-centos7
ENV file=test.py
RUN adduser -D worker
USER worker
WORKDIR /home/worker
ENV PATH="/home/worker/.local/bin:${PATH}"
RUN pip install --user flask
COPY test.py /home/worker
CMD python $file

