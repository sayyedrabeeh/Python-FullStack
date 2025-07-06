

data = [
    {'name': 'Alice', 'age': 25},
    {'name': 'Bob'},
    {'age': 30},
    {'name': 'Charlie', 'age': 22}
]

filtered = [d for d in data if 'name'  in d ]

print(filtered)
