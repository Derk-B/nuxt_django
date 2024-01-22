FROM python:3-alpine

COPY ./api/ /app/

# Install pipenv for virtual environment

# Install python packages
RUN pip install pipenv

WORKDIR /app/
RUN pipenv install django
RUN pipenv install djangorestframework
RUN pipenv install djangorestframework-jwt
RUN pipenv install djangorestframework-simplejwt
RUN pipenv install django-cors-headers

RUN pipenv run python3 manage.py makemigrations
RUN pipenv run python3 manage.py migrate

CMD ["pipenv run python3 /app/manage.py runserver"]
