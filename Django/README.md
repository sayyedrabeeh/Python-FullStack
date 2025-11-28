

## What is Django?

Django is a high-level Python Web framework.  A Web framework is a set of components that provide a
standard way to develop websites fast and easily. 

###  1. Opinionated Frameworks

Opinionated frameworks make strong decisions about the architecture, folder structure, tools, and 
how to solve common problems. They provide a "right way" of doing things.
Faster development – lots of things are pre-configured.
Strong ecosystem – plugins, tooling, and libraries align with the framework’s conventions.

| Framework         | Language   | Why Opinionated?                                          |
| ----------------- | ---------- | --------------------------------------------------------- |
| **Ruby on Rails** | Ruby       | Convention over configuration, strong MVC                 |
| **Django**        | Python     | Built-in ORM, templating, admin, settings, project layout |
| **Angular**       | TypeScript | Strong CLI, strict module structure, dependency injection |
| **Spring Boot**   | Java       | Defined structure, configurations, annotations            |


###  2. Unopinionated Frameworks

Unopinionated frameworks are minimal. They give you building blocks and let you choose your 
architecture, libraries, tools, and folder structure.
They make it easier for developers to use the most suitable tools to complete a particular task.

>Maximum flexibility – build how you want.
>Lightweight – start with a minimal setup.
>Better for microservices or custom architectures.

| Framework           | Language                 | Why Unopinionated?                                |
| ------------------- | ------------------------ | ------------------------------------------------- |
| **Express.js**      | JavaScript/Node          | Minimalist; no strict structure                   |
| **Flask**           | Python                   | Gives control, simple core                        |
| **FastAPI**         | Python                   | Flexible, modular                                 |
| **React** (Library) | JavaScript               | No routing, state, or folder rules by default     |
| **Next.js**         | (somewhat in the middle) | Allows custom structure, but has routing opinions |

## strucher

In a traditional data-driven website, a web application waits for HTTP requests from the web 
browser (or other client). When a request is received the application works out what is needed 
based on the URL and possibly information in POST data or GET data. Depending on what is required 
it may then read or write information from a database or perform other tasks required to satisfy 
the request. The application will then return a response to the web browser, often dynamically 
creating an HTML page for the browser to display by inserting the retrieved data into placeholders 
in an HTML template.
Django web applications typically group the code that handles each of these steps into separate files:


**URLs:** While it is possible to process requests from every single URL via a single function, it 
is much more maintainable to write a separate view function to handle each resource. A URL mapper 
is used to redirect HTTP requests to the appropriate view based on the request URL. The URL mapper 
can also match particular patterns of strings or digits that appear in a URL and pass these to a 
view function as data.

**View:** A view is a request handler function, which receives HTTP requests and returns HTTP 
responses. Views access the data needed to satisfy requests via models, and delegate the formatting 
of the response to templates.

**Models:** Models are Python objects that define the structure of an application's data, and 
provide mechanisms to manage (add, modify, delete) and query records in the database.

**Templates:** A template is a text file defining the structure or layout of a file (such as an 
HTML page), with placeholders used to represent actual content. A view can dynamically create an 
HTML page using an HTML template, populating it with data from a model. A template can be used to 
define the structure of any type of file; it doesn't have to be HTML!.

urls.py

```python

urlpatterns = [
    path('admin/', admin.site.urls),
    path('book/<int:id>/', views.book_detail, name='book_detail'),
    path('catalog/', include('catalog.urls')),
    re_path(r'^([0-9]+)/$', views.best),
]

```

The path() method uses angle brackets to define parts of a URL that will be captured and passed 
through to the view function as named arguments.

```python

from django.urls import path
from . import views

urlpatterns = [
    path('user/<int:id>/', views.user_detail, name='user-detail'),
]

```

accessing  parameter in url :

```python 

from django.http import HttpResponse

def user_detail(request, id):
    return HttpResponse(f"User ID is: {id}")

```

The second argument is another function that will be called when the pattern is matched. The
notation views.
book_detail indicates that the function is called book_detail() and can be found in a module called 
views (i.e., inside a file named views.py).


### Handling the request (views.py)

Views are the heart of the web application, receiving HTTP requests from web clients and returning 
HTTP responses. 
In between, they marshal the other resources of the framework to access databases, render 
templates, etc.

```python

# filename: views.py (Django view functions)

from django.http import HttpResponse

def index(request):
    # Get an HttpRequest - the request parameter
    # perform operations using information from the request.
    # Return HttpResponse
    return HttpResponse('Hello from Django!')
```

### Defining data models (models.py)

Django web applications manage and query data through Python objects referred to as models. Models 
define the structure of stored data, including the field types and possibly also their maximum 
size, default values, selection list options, help text for documentation, label text for forms, 
etc.

Once you've chosen what database you want to use, you don't need to talk to it directly at all —you 
just write your model structure and other code, and Django handles all the "dirty work" of 
communicating with the database for you.

```python 
## filename: views.py

from django.shortcuts import render
from .models import Team

def index(request):
    list_teams = Team.objects.filter(team_level__exact="U09")
    context = {'youngest_teams': list_teams}
    return render(request, '/best/index.html', context)


```


This function uses the render() function to create the HttpResponse that is sent back to the 
browser. This function is a shortcut; it creates an HTML file by combining a specified HTML 
template and some data to insert in the template (provided in the variable named context).

Templates are often used to create HTML, but can also create other types of document. Django 
supports both its native templating system and another popular Python library called Jinja2 out of 
the box. 

#####  To switch to Jinja2:

```python

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.jinja2.Jinja2',
        'DIRS': [BASE_DIR / "templates"],
        'APP_DIRS': True,
        ...
    },
]
```

Both look similar, but Jinja2 is faster, more expressive, and more flexible.
Django templates are safer, more limited — by design (less logic in templates, more in views).

You can choose either depending on your style:

    ✅ Django Templates: Clean, minimal logic.
    🔥 Jinja2: More control, better for power users.


**Forms:** HTML Forms are used to collect user data for processing on the server. Django simplifies 
form creation, validation, and processing.

**User authentication and permissions:** Django includes a robust user authentication and 
permission system that has been built with security in mind.

**Administration site**: The Django administration site is included by default when you create an 
app using the basic skeleton. It makes it trivially easy to provide an admin page for site 
administrators to create, edit, and view any data models in your site.


##### *Creating the project*

Create the new project using the django-admin startproject command as shown, and then navigate into 
the project folder:

```python
django-admin startproject locallibrary
cd locallibrary

```

The django-admin tool creates a folder/file structure as follows:
```python

locallibrary/
    manage.py
    locallibrary/
        __init__.py
        settings.py
        urls.py
        wsgi.py
        asgi.py


```

__init__.py is an empty file that instructs Python to treat this directory as a Python package.

**settings.py** contains all the website settings, including registering any applications we 
create, the location of our static files, database configuration details, etc.

**wsgi.py** is used to help your Django application communicate with the web server. You can treat 
this as boilerplate.

**asgi.py** is a standard for Python asynchronous web apps and servers to communicate with each 
other. Asynchronous Server Gateway Interface (ASGI) is the asynchronous successor to Web Server 
Gateway Interface (WSGI). ASGI provides a standard for both asynchronous and synchronous Python 
apps, whereas WSGI provided a standard for synchronous apps only. ASGI is backward-compatible with 
WSGI and supports multiple servers and application frameworks.

The **manage.py** script is used to create applications, work with databases, and start the 
development web server.

 Make sure to run this command from the same folder as your project's manage.py

 ```python
# Linux/macOS
python3 manage.py startapp catalog

# Windows
py manage.py startapp catalog


 ```
The tool creates a new folder and populates it with files for the different parts of theapplication 
(shown in the following example). Most of the files are named after their purpose (e.g., views
should be stored in views.py, models in models.py, tests in tests.py, administration site 
configuration in admin.py, application registration in apps.py).

The updated project directory should now look like this:
```python
locallibrary/
    manage.py
    locallibrary/
    catalog/
        admin.py
        apps.py
        models.py
        tests.py
        views.py
        __init__.py
        migrations/

```

A migrations folder, used to store "migrations" — files that allow you to automatically update your 
database as you modify your models.


__init__.py — an empty file created here so that Django/Python will recognize the folder as a 
Python Package and allow you to use its objects within other parts of the project.

Applications are registered by adding them to the INSTALLED_APPS list in the project settings.

Open the project settings file, django-locallibrary-tutorial/locallibrary/settings.py, and find the definition for the INSTALLED_APPS list. Then add a new line at the end of the list, as shown below.

```python


INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'catalog',
    # Add our new application
    #'catalog.apps.CatalogConfig',  This object was created for us in /catalog/apps.py
]

```

We'll use the default SQLite database
it requires no additional work to set up! You can see how this database is configured in settings.py

```python

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}


```

The settings.py file is also used for configuring a number of other settings, but at this point, you probably only 
want to change the TIME_ZONE — this should be made equal to a string from the standard List of tz database time 
zones (the TZ column in the table contains the values you want). Change your TIME_ZONE value to one of these 
strings appropriate for your time zone.

```python

TIME_ZONE = 'Europe/London'
TIME_ZONE = 'UTC'
TIME_ZONE = 'Asia/Kolkata'


```

'UTC' stands for Coordinated Universal Time — a global time standard with no time zone offset.
It’s often used as a neutral baseline.
Useful when your app has users across different time zones or is hosted globally.



##### Model definition

Models are usually defined in an application's models.py file. They are implemented as subclasses of django.db.
models.Model, and can include fields, methods and metadata. The code fragment below shows a "typical" model, named 
MyModelName.

```python 

from django.db import models
from django.urls import reverse

class MyModelName(models.Model):
    """A typical class defining a model, derived from the Model class."""

    # Fields
    my_field_name = models.CharField(max_length=20, help_text='Enter field documentation')
    # …

    # Metadata
    class Meta:
        ordering = ['-my_field_name']

    # Methods
    def get_absolute_url(self):
        """Returns the URL to access a particular instance of MyModelName."""
        return reverse('model-detail-view', args=[str(self.id)])

    def __str__(self):
        """String for representing the MyModelName object (in Admin site etc.)."""
        return self.my_field_name

```

#### Fields

A model can have an arbitrary number of fields, of any type — each one represents a column of data that 
we want to store in one of our database tables. Each database record (row) will consist of one of each 
field value.

The field types are assigned using specific classes, which determine the type of record that is used to 
store the data in the database, along with validation criteria to be used when values are received from 
an HTML form (i.e., what constitutes a valid value). The field types can also take arguments that further 
specify how the field is stored or can be used.

 The field types can also take arguments that further specify how the field is stored or can be used. In 
 this case we are giving our field two arguments:

> max_length=20 — States that the maximum length of a value in this field is 20 characters.

>***help_text***='Enter field documentation' — helpful text that may be displayed in a form to help users understand how the field is used.


```python

from django.db import models

# Create your models here.

class Examplemodel(models.Model):

    # CharField
    charfield = models.CharField(max_length=20,help_text='enter any char',blank=True,null=True,default='hi char')
    textfield = models.TextField(help_text='enter any text',default=' hi text',blank=True,null=True)
   
    # NumberField
   
    integerfield = models.IntegerField(default=10,blank=True,null=True)
    floatfield = models.FloatField(default=20.0,null=True,blank=True)

    # BooleanField

    booleanField = models.BooleanField(default=True)

    # Date & Time 

    date = models.DateField(auto_now=False,auto_now_add=False,blank=True,null=True)
    date_and_time = models.DateTimeField(auto_now=False,auto_now_add=True,blank=True,null=True)

    # Email and url Field 

    email = models.EmailField(max_length=20,null=True,blank=True)
    url = models.URLField(max_length=100,blank=True,null=True)

    # file and imagefield 

    file = models.FileField(upload_to='upload/',blank=True,null=True)
    image = models.ImageField(upload_to='upload/',blank=True,null=True)

    # Relationship Fields 

    foriegnkey = models.ForeignKey('Anothermodel' , on_delete= models.CASCADE,related_name='example')
    one_to_one_field = models.OneToOneField('Anothermodel',on_delete=models.CASCADE)
    many_to_many_field = models.ManyToManyField('Anothermodel',related_name='example_many')

    

```

| Relationship | Django Field      | Description                       | Reverse Access                                          |
| ------------ | ----------------- | --------------------------------- | ------------------------------------------------------- |
| One-to-Many  | `ForeignKey`      | Many from current → one in target | `related_name='examples'` → `.examples.all()`           |
| One-to-One   | `OneToOneField`   | Exactly one in both directions    | `.related_object` or `related_name`                     |
| Many-to-Many | `ManyToManyField` | Many-to-many connections          | `related_name='many_examples'` → `.many_examples.all()` |


```python
models.CharField(
    max_length,               # Required
    *,                        # Keyword arguments below
    null=False,
    blank=False,
    choices=None,
    db_column=None,
    db_index=False,
    db_tablespace=None,
    default=UNSPECIFIED,
    editable=True,
    error_messages=None,
    help_text='',
    primary_key=False,
    unique=False,
    unique_for_date=None,
    unique_for_month=None,
    unique_for_year=None,
    verbose_name=None,
    validators=[],
)

```

| Argument         | Description                                                    |
| ---------------- | -------------------------------------------------------------- |
| **`max_length`** | ✅ Required. Maximum number of characters allowed in the field. |

| Argument       | Description                                                           |
| -------------- | --------------------------------------------------------------------- |
| `null`         | If `True`, allows the database to store `NULL`. Default is `False`.   |
| `blank`        | If `True`, allows the field to be empty in forms. Default is `False`. |
| `default`      | Sets a default value for the field.                                   |
| `help_text`    | Adds help text for forms or admin.                                    |
| `choices`      | Provide a list of `(value, label)` tuples for limited choices.        |
| `unique`       | If `True`, no two rows can have the same value for this field.        |
| `primary_key`  | Set this field as the primary key for the model.                      |
| `verbose_name` | Human-readable name for the field.                                    |
| `validators`   | List of custom validator functions.                                   |


#### Admin

The Django admin application can use your models to automatically build a site area that you can 
use to create, view, update, and delete records. This can save you a lot of time during 
development, making it very easy to test your models.

##### Registering models

eg:
```python
from .models import Author, Genre, Book, BookInstance, Language

admin.site.register(Book)
admin.site.register(Author)
admin.site.register(Genre)
admin.site.register(BookInstance)
admin.site.register(Language)
```

This is the simplest way of registering a model, or models, with the site. The admin site is highly 
customizable.

##### Creating a superuser

to log into the admin site, we need a user account with Staff status enabled. In order to view and 
create records we also need this user to have permissions to manage all our objects. You can create 
a "superuser" account that has full access to the site and all needed permissions using manage.py.

Call the following command, in the same directory as manage.py, to create the superuser. You will 
be prompted to enter a username, email address, and strong password.

```bash
python manage.py createsuperuser

```

To login to the site, open the /admin URL (e.g., http://127.0.0.1:8000/admin) and enter your new 
superuser userid and password credentials. 

To change how a model is displayed in the admin interface you define a ModelAdmin class (which 
describes the layout) and register it with the model.

Now add a new AuthorAdmin and registration as shown below.
```python

# Define the admin class
class AuthorAdmin(admin.ModelAdmin):
    pass

# Register the admin class with the associated model
admin.site.register(Author, AuthorAdmin)


```

use the @register decorator to register the models (this does exactly the same thing as the admin.
site.register()).

```python

# Register the Admin classes for Book using the decorator
@admin.register(Book)
class BookAdmin(admin.ModelAdmin):
    pass

# Register the Admin classes for BookInstance using the decorator
@admin.register(BookInstance)
class BookInstanceAdmin(admin.ModelAdmin):
    pass

```


Currently all of our admin classes are empty (see pass) so the admin behavior will be unchanged! We 
can now extend these to define our model-specific admin behavior.


Replace your AuthorAdmin class with the code below. The field names to be displayed in the list are 
declared in a tuple in the required order, as shown (these are the same names as specified in your 
original model).

```python
class AuthorAdmin(admin.ModelAdmin):
    list_display = ('last_name', 'first_name', 'date_of_birth', 'date_of_death')

```

Once you've got a lot of items in a list, it can be useful to be able to filter which items are 
displayed. This is done by listing fields in the list_filter attribute. Replace your current 
BookInstanceAdmin class with the code fragment below.

```python
class BookInstanceAdmin(admin.ModelAdmin):
    list_filter = ('status', 'due_back')

```

