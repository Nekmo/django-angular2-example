from .defaults import *

DEBUG = True
# INSTALLED_APPS.append('corsheaders')
# MIDDLEWARE.append('django.middleware.common.CommonMiddleware')
#
# # CELERY_TASK_ALWAYS_EAGER = True
# CORS_ORIGIN_ALLOW_ALL = True
ALLOWED_HOSTS = ['*']

try:
    import django_angular2
except ImportError:
    pass
else:
    INSTALLED_APPS.append('django_angular2')
