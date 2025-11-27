data = [
    {"id": 1, "name": "Alice"},
    {"id": 2, "name": "Bob"},
    {"id": 3, "name": "Charlie"},
    {"id": 4, "name": "Charlie"},
    {"id": 5, "name": "Charlie"}
]

result = { i['id'] : i for i in data}
 
print(result) 