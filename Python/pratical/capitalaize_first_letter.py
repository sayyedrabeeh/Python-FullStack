

data = ["hello", 123, "WORLD", None, "python", True, "rocks"]

a = [ i.title() if isinstance(i,str) else i  for i in data ]

print(a)