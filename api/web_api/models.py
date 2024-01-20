from django.db import models
from django.utils.translation import gettext_lazy as _
from django.contrib.auth.models import User

class Todo(models.Model):
    class Status(models.TextChoices):
        TODO = "TD", _("Todo")
        IN_PROGRESS = "IP", _("In progress")
        FINISHED = "FN", _("Finished")

    author = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    description = models.CharField(max_length=255)
    status = models.CharField(
        max_length = 2,
        choices = Status.choices,
        default = Status.TODO,
    )
    