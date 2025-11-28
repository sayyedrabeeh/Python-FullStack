


def users(request,id):
    user = user.objects.get(id=id)
    context = {
        'user' : user
    }
    return render('users.html',context)

urlpattern = [
    path('users/<int:id>',users,name='user')
]