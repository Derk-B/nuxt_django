from django.db import models
from django.contrib.auth.models import User
from django.utils.translation import gettext_lazy as _

# Create your models here.
class TODO(models.Model):
    class TODOStatus(models.TextChoices):
        TODO = "TD"
        INPROGRESS = "IP"
        DONE = "DN"  

    title = models.CharField(max_length=255)
    description = models.CharField(max_length=255)
    status = models.CharField(
        max_length = 2,
        choices = TODOStatus.choices,
        default = TODOStatus.TODO
    )
    author = models.ForeignKey(User, on_delete=models.CASCADE)
