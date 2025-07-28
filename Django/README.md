

## What is Django?

Django is a high-level Python Web framework.  A Web framework is a set of components that provide a standard way to 
develop websites fast and easily. 

###  1. Opinionated Frameworks

Opinionated frameworks make strong decisions about the architecture, folder structure, tools, and how to solve 
common problems. They provide a "right way" of doing things.
Faster development – lots of things are pre-configured.
Strong ecosystem – plugins, tooling, and libraries align with the framework’s conventions.

| Framework         | Language   | Why Opinionated?                                          |
| ----------------- | ---------- | --------------------------------------------------------- |
| **Ruby on Rails** | Ruby       | Convention over configuration, strong MVC                 |
| **Django**        | Python     | Built-in ORM, templating, admin, settings, project layout |
| **Angular**       | TypeScript | Strong CLI, strict module structure, dependency injection |
| **Spring Boot**   | Java       | Defined structure, configurations, annotations            |


###  2. Unopinionated Frameworks

Unopinionated frameworks are minimal. They give you building blocks and let you choose your architecture, 
libraries, tools, and folder structure.
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

In a traditional data-driven website, a web application waits for HTTP requests from the web browser (or other 
client). When a request is received the application works out what is needed based on the URL and possibly 
information in POST data or GET data. Depending on what is required it may then read or write information from a 
database or perform other tasks required to satisfy the request. The application will then return a response to the 
web browser, often dynamically creating an HTML page for the browser to display by inserting the retrieved data 
into placeholders in an HTML template.
Django web applications typically group the code that handles each of these steps into separate files:


**URLs:** While it is possible to process requests from every single URL via a single function, it is much more 
maintainable to write a separate view function to handle each resource. A URL mapper is used to redirect HTTP 
requests to the appropriate view based on the request URL. The URL mapper can also match particular patterns of 
strings or digits that appear in a URL and pass these to a view function as data.

**View:** A view is a request handler function, which receives HTTP requests and returns HTTP responses. Views 
access the data needed to satisfy requests via models, and delegate the formatting of the response to templates.

**Models:** Models are Python objects that define the structure of an application's data, and provide mechanisms to 
manage (add, modify, delete) and query records in the database.

**Templates:** A template is a text file defining the structure or layout of a file (such as an HTML page), with 
placeholders used to represent actual content. A view can dynamically create an HTML page using an HTML template, 
populating it with data from a model. A template can be used to define the structure of any type of file; it 
doesn't have to be HTML!.

urls.py

```python

urlpatterns = [
    path('admin/', admin.site.urls),
    path('book/<int:id>/', views.book_detail, name='book_detail'),
    path('catalog/', include('catalog.urls')),
    re_path(r'^([0-9]+)/$', views.best),
]

```

The path() method uses angle brackets to define parts of a URL that will be captured and passed through to the view 
function as named arguments.

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

The second argument is another function that will be called when the pattern is matched. The notation views.
book_detail indicates that the function is called book_detail() and can be found in a module called views (i.e., 
inside a file named views.py).


### Handling the request (views.py)

Views are the heart of the web application, receiving HTTP requests from web clients and returning HTTP responses. 
In between, they marshal the other resources of the framework to access databases, render templates, etc.

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

Django web applications manage and query data through Python objects referred to as models. Models define the 
structure of stored data, including the field types and possibly also their maximum size, default values, selection 
list options, help text for documentation, label text for forms, etc.

Once you've chosen what database you want to use, you don't need to talk to it directly at all — you just write 
your model structure and other code, and Django handles all the "dirty work" of communicating with the database for 
you.

```python 
## filename: views.py

from django.shortcuts import render
from .models import Team

def index(request):
    list_teams = Team.objects.filter(team_level__exact="U09")
    context = {'youngest_teams': list_teams}
    return render(request, '/best/index.html', context)


```


This function uses the render() function to create the HttpResponse that is sent back to the browser. This function 
is a shortcut; it creates an HTML file by combining a specified HTML template and some data to insert in the 
template (provided in the variable named context).

Templates are often used to create HTML, but can also create other types of document. Django supports both its 
native templating system and another popular Python library called Jinja2 out of the box. 

##### ⚙️ To switch to Jinja2:

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


**Forms:** HTML Forms are used to collect user data for processing on the server. Django simplifies form creation, 
validation, and processing.
**User authentication and permissions:** Django includes a robust user authentication and permission system that 
has been built with security in mind.
**Administration site**: The Django administration site is included by default when you create an app using the 
basic skeleton. It makes it trivially easy to provide an admin page for site administrators to create, edit, and 
view any data models in your site.

