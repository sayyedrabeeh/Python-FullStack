def my_decorector(func):
    def wrapper(*args,**kwargs):
        print('before calling function')
        print(f'function Name {func.__name__}')
        print(f"Arguments: {args}, Keyword Arguments: {kwargs}")
        result = func(*args,**kwargs)

        print("After calling function")
        print(f"Result: {result}")
        return result

    return wrapper

@my_decorector
def greet(name, age):
    return f"Hello {name}, you are {age} years old!"

greet("Rabeeh", 20)
