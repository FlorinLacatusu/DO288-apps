FROM centos/python-27-centos7
ENV file=test.py
RUN adduser -D worker
USER worker
WORKDIR /home/worker
RUN pip install --user flask
ENV PATH="/home/worker/.local/bin:${PATH}"
COPY test.py /home/worker
CMD python $file

