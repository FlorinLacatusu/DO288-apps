FROM centos/python-27-centos7
ENV file=test.py
RUN  pip install flask && \
     mkdir /test
COPY test.py /test
WORKDIR /test
CMD python $file

