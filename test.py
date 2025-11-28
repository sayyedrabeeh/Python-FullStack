
class user1(models.Mode):
    name = models.charfield(max_length = 20)
    age = models.integerfield()
    created_at = models.datafield(auto_add = True)

    class Meta:
        odering = ['name']



def users(request,id):
    user = user1.objects.get(id=id)
    context = {
        'user' : user
    }
    return render('users.html',context)

urlpattern = [
    path('users/<int:id>',users,name='user')
]
