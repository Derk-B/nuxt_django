FROM python:3-alpine

RUN python3 -m venv /opt/venv

RUN adduser -D myuser
USER myuser
WORKDIR /home/myuser

COPY --chown=myuser:myuser /api/ /home/myuser/
RUN pip install -r requirements.txt

EXPOSE 8000

RUN python3 manage.py makemigrations
RUN python3 manage.py migrate

CMD ["python3", "manage.py", "runserver", "0.0.0.0:8000"]
